import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Client } from '@gadget-client/allqualitybadges';

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await request.json();
    const { designData, shopData } = body;

    // Get environment variables (server-side only)
    const GADGET_API_URL = process.env.GADGET_API_URL || 'https://allqualitybadges-development.gadget.app';
    const GADGET_API_KEY = process.env.GADGET_API_KEY;

    if (!GADGET_API_KEY) {
      return json({ error: "Gadget API key not configured" }, { status: 500 });
    }

    // Extract environment name from URL for Gadget client
    const getEnvironmentFromUrl = (url: string): string => {
      if (url.includes('--development')) return 'development';
      if (url.includes('--staging')) return 'staging';
      if (url.includes('--production') || url.includes('allqualitybadges.gadget.app') && !url.includes('--')) return 'production';
      return 'development'; // fallback
    };

    const environment = getEnvironmentFromUrl(GADGET_API_URL);

    console.log('Server-side Gadget API Configuration:', {
      GADGET_API_URL,
      environment,
      GADGET_API_KEY: GADGET_API_KEY ? 'SET' : 'NOT SET'
    });

    // Create Gadget client instance (server-side, so API key is safe)
    const gadgetClient = new Client({
      environment: environment,
      authenticationMode: { apiKey: GADGET_API_KEY },
    });

    // Prepare the payload for Gadget
    const badgeDesignData = designData.badge || designData;
    
    const gadgetPayload = {
      shopId: shopData?.shopId || "75389960447",
      productId: designData.productId,
      designId: `design_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      status: "saved",
      designData: JSON.stringify(badgeDesignData),
      backgroundColor: badgeDesignData.backgroundColor || "#FFFFFF",
      backingType: badgeDesignData.backing || "pin",
      basePrice: 90.99      backingPrice: 0,
      totalPrice: 9.99,
      textLines: JSON.stringify(badgeDesignData.lines || []),
    };

    console.log('Attempting to create badge design with payload:', gadgetPayload);

    // Create the badge design using the Gadget client
    const result = await gadgetClient.badgeDesign.create(gadgetPayload);

    console.log('Badge design creation result:', result);
    console.log('Full result object keys:', Object.keys(result));
    console.log('Result designData field:', result.designData);
    console.log('Result textLines field:', result.textLines);

    // The Gadget client returns the badge design record directly
    return json({
      success: true,
      id: result.id,
      designId: result.designId,
      designData
    });

  } catch (error) {
    console.error('Error saving badge design:', error);
    return json({ 
      error: "Failed to save badge design",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}; 