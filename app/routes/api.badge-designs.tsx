import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  console.log('API route - Action function called');
  
  if (request.method !== "POST") {
    console.log('API route - Method not allowed:', request.method);
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    console.log('API route - Starting request processing');
    
    const body = await request.json();
    console.log('API route - Raw body received:', body);
    
    const { designData, shopId, productId } = body;
    
    console.log('API route - extracted data:', { 
      designData: designData ? 'present' : 'missing', 
      shopId, 
      productId,
      designDataKeys: designData ? Object.keys(designData) : 'none'
    });

    if (!shopId) {
      console.error('API route - Missing shopId');
      return json({ error: "shopId is required" }, { status: 400 });
    }

    // Prepare the payload for Gadget
    const gadgetPayload = {
      shopId,
      productId,
      designId: `design_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      status: "saved",
      designData: designData.badge || designData,
      backgroundColor: designData.badge?.backgroundColor || "#FFFFFF",
      backingType: designData.badge?.backing || "pin",
      basePrice: 9.99,
      backingPrice: 0,
      totalPrice: 9.99,
      textLines: designData.badge?.lines || [],
    };
    
    console.log('API route - sending to Gadget:', {
      ...gadgetPayload,
      designData: gadgetPayload.designData ? 'present' : 'missing'
    });
    
    // Use the Gadget client library approach (same as playground)
    const gadgetUrl = "https://allqualitybadges.gadget.app/api/badge-designs";
    console.log('API route - Calling Gadget URL:', gadgetUrl);
    
    console.log('API route - Request details:', {
      url: gadgetUrl,
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gadgetPayload)
    });
    
    const response = await fetch(gadgetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gadgetPayload),
    });

    console.log('API route - Gadget response status:', response.status, response.statusText);
    console.log('API route - Gadget response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gadget API error response:', errorText);
      console.error('Gadget API error details:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      });
      throw new Error(`Gadget API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    console.log('API route - Gadget response:', result);
    
    return json({
      success: true,
      id: result.id,
      designId: result.designId,
      message: "Design saved successfully"
    });
  } catch (error) {
    console.error("API route - Error details:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : 'Unknown',
      error: error
    });
    return json({ 
      error: "Failed to save design",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
};

export const loader: LoaderFunction = async ({ request }) => {
  console.log('API route - Loader function called');
  
  const url = new URL(request.url);
  const designId = url.searchParams.get("id");
  const shopId = url.searchParams.get("shopId");

  if (!designId) {
    return json({ error: "Design ID required" }, { status: 400 });
  }

  try {
    // Use the Gadget client library approach for getting badge design
    const response = await fetch(`https://allqualitybadges.gadget.app/api/badge-designs/${designId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Gadget API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    
    return json({
      success: true,
      design: result
    });
  } catch (error) {
    console.error("Error loading badge design:", error);
    return json({ error: "Failed to load design" }, { status: 500 });
  }
}; 