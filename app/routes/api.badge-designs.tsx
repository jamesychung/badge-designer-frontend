import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await request.json();
    const { designData, shopId, productId } = body;
    
    console.log('API route - received data:', { designData, shopId, productId });

    // Call Gadget backend API
    const gadgetPayload = {
      designData,
      shopId,
      productId,
      designId: Date.now().toString(),
      status: "saved",
      basePrice: 9.99,
      backingPrice: 0,
      totalPrice: 9.99,
      textLines: designData.badge?.lines || [],
      backgroundColor: designData.badge?.backgroundColor || "#FFFFFF",
      backingType: designData.badge?.backing || "pin",
    };
    
    console.log('API route - sending to Gadget:', gadgetPayload);
    
    const response = await fetch("https://allqualitybadges.gadget.app/api/badge-designs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shop-Domain": shopId,
        "X-Shop-ID": shopId,
      },
      body: JSON.stringify(gadgetPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gadget API error response:', errorText);
      throw new Error(`Gadget API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    
    return json({
      success: true,
      id: result.id,
      designId: result.designId,
      message: "Design saved successfully"
    });
  } catch (error) {
    console.error("Error saving badge design:", error);
    return json({ error: "Failed to save design" }, { status: 500 });
  }
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const designId = url.searchParams.get("id");
  const shopId = url.searchParams.get("shopId");

  if (!designId) {
    return json({ error: "Design ID required" }, { status: 400 });
  }

  try {
    // Call Gadget backend API to get design
    const response = await fetch(`https://allqualitybadges.gadget.app/api/badge-designs/${designId}`, {
      headers: {
        "X-Shop-Domain": shopId || "",
        "X-Shop-ID": shopId || "",
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