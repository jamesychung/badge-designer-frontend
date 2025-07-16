// Shop Authentication and Multi-Tenant API Utilities

export interface ShopAuthData {
  shopId: string;
  shopDomain: string;
  productId?: string;
}

/**
 * Extract shop information from URL parameters
 * @param urlSearchParams URLSearchParams object
 * @returns ShopAuthData object
 */
export function extractShopFromUrl(urlSearchParams: URLSearchParams): ShopAuthData | null {
  const shop = urlSearchParams.get('shop');
  const productId = urlSearchParams.get('product');
  
  if (!shop) {
    console.warn('No shop parameter found in URL');
    return null;
  }
  
  return {
    shopId: shop, // This will be the shop domain like "my-store.myshopify.com"
    shopDomain: shop,
    productId: productId || undefined
  };
}

/**
 * Get shop information from current URL or provided shop parameter
 * @param shopParam Optional shop parameter from props
 * @returns ShopAuthData object or null
 */
export function getCurrentShop(shopParam?: string | null): ShopAuthData | null {
  if (typeof window === 'undefined') return null;
  
  // If shop parameter is provided, use it
  if (shopParam) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    
    return {
      shopId: shopParam,
      shopDomain: shopParam,
      productId: productId || undefined
    };
  }
  
  // Otherwise, try to get from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  return extractShopFromUrl(urlParams);
}

/**
 * Create authenticated API headers for Gadget requests
 * @param shopData Shop authentication data
 * @returns Headers object for API requests
 */
export function createAuthHeaders(shopData: ShopAuthData): HeadersInit {
  return {
    'Content-Type': 'application/json',
    'X-Shop-Domain': shopData.shopDomain,
    'X-Shop-ID': shopData.shopId,
  };
}

/**
 * Make authenticated API call to Gadget backend
 * @param endpoint API endpoint
 * @param shopData Shop authentication data
 * @param options Request options
 * @returns Promise with API response
 */
export async function authenticatedApiCall(
  endpoint: string,
  shopData: ShopAuthData,
  options: RequestInit = {}
): Promise<Response> {
  const headers = createAuthHeaders(shopData);
  
  const response = await fetch(endpoint, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });
  
  if (!response.ok) {
    throw new Error(`API call failed: ${response.status} ${response.statusText}`);
  }
  
  return response;
}

/**
 * Save badge design with shop authentication
 * @param designData Badge design data
 * @param shopData Shop authentication data
 * @returns Promise with saved design
 */
export async function saveBadgeDesign(
  designData: any,
  shopData: ShopAuthData
): Promise<any> {
  try {
    // Prepare the payload for Gadget
    const gadgetPayload = {
      designData: designData.badge || designData,
      shopId: shopData.shopId,
      productId: shopData.productId,
      designId: `design_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      status: "saved",
      basePrice: 9.99,
      backingPrice: 0,
      totalPrice: 9.99,
      textLines: designData.badge?.lines || [],
      backgroundColor: designData.badge?.backgroundColor || "#FFFFFF",
      backingType: designData.badge?.backing || "pin",
    };
    
    console.log('Calling Gadget API with payload:', gadgetPayload);
    
    // Call Gadget public API directly
    const response = await fetch('https://allqualitybadges-development.gadget.app/public/api/badge-designs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shop-Domain': shopData.shopDomain,
        'X-Shop-ID': shopData.shopId,
      },
      body: JSON.stringify(gadgetPayload),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gadget API error response:', errorText);
      throw new Error(`Gadget API error: ${response.status} ${response.statusText} - ${errorText}`);
    }
    
    const result = await response.json();
    console.log('Gadget API success response:', result);
    
    return result;
  } catch (error) {
    console.error('Error saving badge design:', error);
    throw error;
  }
}

/**
 * Get badge designs for a specific shop
 * @param shopData Shop authentication data
 * @returns Promise with badge designs
 */
export async function getBadgeDesigns(shopData: ShopAuthData): Promise<any[]> {
  const response = await authenticatedApiCall(
    `/api/badge-designs/by-shop?shopId=${encodeURIComponent(shopData.shopId)}`,
    shopData,
    {
      method: 'GET',
    }
  );
  
  return response.json();
}

/**
 * Validate shop authentication
 * @param shopData Shop authentication data
 * @returns Promise with validation result
 */
export async function validateShopAuth(shopData: ShopAuthData): Promise<boolean> {
  try {
    const response = await authenticatedApiCall(
      '/api/shop/validate',
      shopData,
      {
        method: 'GET',
      }
    );
    
    return response.ok;
  } catch (error) {
    console.error('Shop authentication validation failed:', error);
    return false;
  }
} 