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
    
    // Use the correct GraphQL mutation that works in the playground
    const gadgetUrl = "https://allqualitybadges.gadget.app/api/graphql";
    console.log('API route - Calling Gadget GraphQL URL:', gadgetUrl);
    
    const graphqlQuery = `
      mutation CreateBadgeDesign($badgeDesign: CreateBadgeDesignInput!) {
        createBadgeDesign(badgeDesign: $badgeDesign) {
          success
          badgeDesign {
            id
            designId
            shopId
            status
          }
        }
      }
    `;
    
    const graphqlPayload = {
      query: graphqlQuery,
      variables: {
        badgeDesign: gadgetPayload
      }
    };
    
    console.log('API route - GraphQL payload:', JSON.stringify(graphqlPayload, null, 2));
    
    const response = await fetch(gadgetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(graphqlPayload),
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
    
    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }
    
    if (!result.data?.createBadgeDesign?.success) {
      throw new Error('Badge design creation failed');
    }
    
    return json({
      success: true,
      id: result.data.createBadgeDesign.badgeDesign.id,
      designId: result.data.createBadgeDesign.badgeDesign.designId,
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
    // Use GraphQL for getting badge design
    const gadgetUrl = "https://allqualitybadges.gadget.app/api/graphql";
    
    const graphqlQuery = `
      query GetBadgeDesign($id: GadgetID!) {
        badgeDesign(id: $id) {
          id
          designId
          shopId
          status
          designData
          backgroundColor
          backingType
          textLines
        }
      }
    `;
    
    const graphqlPayload = {
      query: graphqlQuery,
      variables: {
        id: designId
      }
    };
    
    const response = await fetch(gadgetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(graphqlPayload),
    });

    if (!response.ok) {
      throw new Error(`Gadget API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    
    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }
    
    return json({
      success: true,
      design: result.data?.badgeDesign
    });
  } catch (error) {
    console.error("Error loading badge design:", error);
    return json({ error: "Failed to load design" }, { status: 500 });
  }
}; 