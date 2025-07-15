import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
import { BADGE_CONSTANTS } from "~/constants/badge";
import { api } from "~/utils/api";
import type { Badge } from "~/types/badge";

export const meta: MetaFunction = () => {
  return [
    { title: "Badge Designer" },
    { name: "description", content: "Design your custom badges" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const productId = url.searchParams.get("product");
  
  // Add headers for iframe embedding
  const headers = new Headers();
  headers.set("X-Frame-Options", "ALLOWALL");
  headers.set("Content-Security-Policy", "frame-ancestors *");
  headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
  
  return json({ productId, timestamp: Date.now() }, { headers });
};

export default function Index() {
  const { productId } = useLoaderData<typeof loader>();
  const [badge, setBadge] = useState<Badge>({
    lines: [
      {
        text: 'Your Name',
        size: 18,
        color: '#000000',
        bold: false,
        italic: false,
        underline: false,
        fontFamily: BADGE_CONSTANTS.DEFAULT_FONT,
        alignment: 'center'
      },
      {
        text: 'Title',
        size: 13,
        color: '#000000',
        bold: false,
        italic: false,
        underline: false,
        fontFamily: BADGE_CONSTANTS.DEFAULT_FONT,
        alignment: 'center'
      }
    ],
    backgroundColor: '#FFFFFF',
    backing: 'pin'
  });
  const [isLoading, setIsLoading] = useState(false);

  // Send ready message to parent when component mounts
  useEffect(() => {
    api.sendToParent({ action: 'iframe-ready' });
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await api.saveBadgeDesign({
        productId,
        badge,
        timestamp: new Date().toISOString()
      });
      // Could show success message here
    } catch (error) {
      console.error('Failed to save badge:', error);
      // Could show error message here
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = async () => {
    const badgeData = {
      variantId: productId, // You'll need to get the actual variant ID
      line1: badge.lines[0]?.text || '',
      line2: badge.lines[1]?.text || '',
      line3: badge.lines[2]?.text || '',
      line4: badge.lines[3]?.text || '',
      backgroundColor: badge.backgroundColor,
      fontFamily: badge.lines[0]?.fontFamily || BADGE_CONSTANTS.DEFAULT_FONT,
      backing: badge.backing,
      designId: Date.now().toString(), // Temporary ID
      fullDesignData: badge
    };
    
    await api.addToCart(badgeData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Badge Designer</h1>
              <p className="text-gray-600">
                Create and customize your badge design
                {productId && ` for product: ${productId}`}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : 'Save Design'}
              </button>
              <button
                onClick={handleAddToCart}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
          
          <div className="border-t pt-6">
            {/* Badge Preview */}
            <div className="flex justify-center mb-8">
              <div 
                className="border-2 border-gray-300 rounded-lg flex items-center justify-center"
                style={{
                  width: BADGE_CONSTANTS.BADGE_WIDTH,
                  height: BADGE_CONSTANTS.BADGE_HEIGHT,
                  backgroundColor: badge.backgroundColor
                }}
              >
                <div className="text-center">
                  {badge.lines.map((line, index) => (
                    <div
                      key={index}
                      style={{
                        fontSize: `${line.size}px`,
                        color: line.color,
                        fontFamily: line.fontFamily,
                        fontWeight: line.bold ? 'bold' : 'normal',
                        fontStyle: line.italic ? 'italic' : 'normal',
                        textDecoration: line.underline ? 'underline' : 'none',
                        textAlign: line.alignment,
                        lineHeight: BADGE_CONSTANTS.LINE_HEIGHT_MULTIPLIER
                      }}
                    >
                      {line.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Simple Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Text Lines</h3>
                {badge.lines.map((line, index) => (
                  <div key={index} className="mb-4 p-4 border rounded">
                    <label className="block text-sm font-medium mb-2">
                      Line {index + 1}
                    </label>
                    <input
                      type="text"
                      value={line.text}
                      onChange={(e) => {
                        const newLines = [...badge.lines];
                        newLines[index] = { ...line, text: e.target.value };
                        setBadge({ ...badge, lines: newLines });
                      }}
                      className="w-full p-2 border rounded"
                      placeholder={`Line ${index + 1} text`}
                    />
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Background Color</h3>
                <input
                  type="color"
                  value={badge.backgroundColor}
                  onChange={(e) => setBadge({ ...badge, backgroundColor: e.target.value })}
                  className="w-16 h-10 border rounded"
                />
                
                <h3 className="text-lg font-semibold mb-4 mt-6">Backing Type</h3>
                <select
                  value={badge.backing}
                  onChange={(e) => setBadge({ ...badge, backing: e.target.value })}
                  className="w-full p-2 border rounded"
                >
                  {BADGE_CONSTANTS.BACKING_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
