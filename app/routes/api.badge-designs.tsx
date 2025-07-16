import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    console.log('API route - Starting request processing');
    
    const body = await request.json();
    const { designData, shopId, productId } = body;
    
    console.log('API route - received data:', { 
      designData: designData ? 'present' : 'missing', 
      shopId, 
      productId,
      designDataKeys: designData ? Object.keys(designData) : 'none'
    });

    if (!shopId) {
      console.error('API route - Missing shopId');
      return json({ error: "shopId is required" }, { status: 400 });
    }

    // Prepare the payload for Gadget GraphQL
    const gadgetPayload = {
      designData: designData.badge || designData,
      shopId,
      productId,
      designId: `design_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      status: "saved",
      basePrice: 9.99,
      backingPrice: 0,
      totalPrice: 9.99,
      textLines: designData.badge?.lines || [],
      backgroundColor: designData.badge?.backgroundColor || "#FFFFFF",
      backingType: designData.badge?.backing || "pin",
    };
    
    console.log('API route - sending to Gadget GraphQL:', {
      ...gadgetPayload,
      designData: gadgetPayload.designData ? 'present' : 'missing'
    });
    
    // GraphQL mutation for creating badge design
    const mutation = `
      mutation CreateBadgeDesign($input: CreateBadgeDesignInput!) {
        badgeDesignCreate(input: $input) {
          badgeDesign {
            id
            shopId
            productId
            designId
            status
            createdAt
            updatedAt
          }
          errors {
            message
          }
        }
      }
    `;

    const variables = {
      input: {
        shopId: gadgetPayload.shopId,
        productId: gadgetPayload.productId,
        designId: gadgetPayload.designId,
        status: gadgetPayload.status,
        designData: gadgetPayload.designData,
        backgroundColor: gadgetPayload.backgroundColor,
        backingType: gadgetPayload.backingType,
        basePrice: gadgetPayload.basePrice,
        backingPrice: gadgetPayload.backingPrice,
        totalPrice: gadgetPayload.totalPrice,
        textLines: gadgetPayload.textLines,
      }
    };
    
    // Call Gadget GraphQL API
    const gadgetUrl = "https://allqualitybadges.gadget.app/api/graphql";
    console.log('API route - Calling Gadget GraphQL URL:', gadgetUrl);
    
    const response = await fetch(gadgetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: mutation, variables }),
    });

    console.log('API route - Gadget GraphQL response status:', response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gadget GraphQL error response:', errorText);
      console.error('Gadget GraphQL error details:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      });
      throw new Error(`Gadget GraphQL error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    console.log('API route - Gadget GraphQL response:', result);
    
    // Check for GraphQL errors
    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      throw new Error(`GraphQL errors: ${result.errors.map((e: any) => e.message).join(', ')}`);
    }
    
    if (result.data?.badgeDesignCreate?.errors?.length > 0) {
      console.error('Badge design creation errors:', result.data.badgeDesignCreate.errors);
      throw new Error(`Badge design creation errors: ${result.data.badgeDesignCreate.errors.map((e: any) => e.message).join(', ')}`);
    }
    
    const badgeDesign = result.data?.badgeDesignCreate?.badgeDesign;
    if (!badgeDesign) {
      throw new Error('No badge design returned from GraphQL mutation');
    }
    
    return json({
      success: true,
      id: badgeDesign.id,
      designId: badgeDesign.designId,
      message: "Design saved successfully"
    });
  } catch (error) {
    console.error("API route - Error details:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : 'Unknown'
    });
    return json({ 
      error: "Failed to save design",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
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
    // GraphQL query for getting badge design
    const query = `
      query GetBadgeDesign($id: GadgetID!) {
        badgeDesign(id: $id) {
          id
          shopId
          productId
          designId
          status
          designData
          backgroundColor
          backingType
          basePrice
          backingPrice
          totalPrice
          textLines
          createdAt
          updatedAt
        }
      }
    `;

    const variables = { id: designId };
    
    const response = await fetch("https://allqualitybadges.gadget.app/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`Gadget GraphQL error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    
    if (result.errors) {
      throw new Error(`GraphQL errors: ${result.errors.map((e: any) => e.message).join(', ')}`);
    }
    
    const badgeDesign = result.data?.badgeDesign;
    if (!badgeDesign) {
      throw new Error('Badge design not found');
    }
    
    return json({
      success: true,
      design: badgeDesign
    });
  } catch (error) {
    console.error("Error loading badge design:", error);
    return json({ error: "Failed to load design" }, { status: 500 });
  }
}; 