import { Client } from '@gadget-client/allqualitybadges';

function normalizeEnvString(val: any): string | undefined {
  return typeof val === "string" && val.trim() !== "" ? val : undefined;
}

export interface BadgeDesignData {
  id?: string;
  designId?: string;
  productId?: string;
  designData: any;
  createdAt?: string;
  updatedAt?: string;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  variants: Array<{
    id: string;
    title: string;
    price: string;
  }>;
}

// Create a function that returns the API with proper configuration
export function createApi(gadgetApiUrl?: string, gadgetApiKey?: string) {
  // API configuration
  const GADGET_API_URL = normalizeEnvString(gadgetApiUrl) || 'https://allqualitybadges-development.gadget.app';
  const GADGET_API_KEY = normalizeEnvString(gadgetApiKey);

  // Extract environment name from URL for Gadget client
  const getEnvironmentFromUrl = (url: string): string => {
    if (url.includes('--development')) return 'development';
    if (url.includes('--staging')) return 'staging';
    if (url.includes('--production') || url.includes('allqualitybadges.gadget.app') && !url.includes('--')) return 'production';
    return 'development'; // fallback
  };

  const environment = getEnvironmentFromUrl(GADGET_API_URL);

  console.log('Gadget API Configuration:', {
    GADGET_API_URL,
    environment,
    GADGET_API_KEY: GADGET_API_KEY ? 'SET' : 'NOT SET'
  });

  // Create Gadget client instance
  const gadgetClient = new Client({
    environment: environment,
    authenticationMode: { apiKey: GADGET_API_KEY || undefined },
  });

  // API functions using Gadget client
  return {
    // Save badge design using Gadget client
    async saveBadgeDesign(designData: any, shopData?: any): Promise<BadgeDesignData> {
      try {
        console.log('saveBadgeDesign called with:', { designData, shopData });
        
        // Prepare the payload for Gadget
        const gadgetPayload = {
          ...(shopData?.shopId ? { shopId: shopData.shopId } : {}),
          productId: designData.productId,
          designId: `design_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          status: "saved" as const,
          designData: designData.badge || designData,
          backgroundColor: designData.badge?.backgroundColor || "#FFFFFF",
          backingType: designData.badge?.backing || "pin",
          basePrice: 9.99,
          backingPrice: 0,
          totalPrice: 9.99,
          textLines: designData.badge?.lines || [],
        };
        
        // Create the badge design using the Gadget client
        const result = await gadgetClient.badgeDesign.create(gadgetPayload);
        
        return { 
          id: result.id ?? undefined, 
          designData,
          designId: result.designId ?? undefined
        };
      } catch (error) {
        console.error('Error saving badge design:', error);
        
        // Fallback for server-side or when API fails
        console.warn('Failed to save to backend, using fallback');
        const designId = Date.now().toString();
        return { id: designId, designData };
      }
    },

    // Get badge design by ID (with fallback)
    async getBadgeDesign(id: string): Promise<BadgeDesignData> {
      try {
        // Try to get from Gadget API
        const result = await gadgetClient.badgeDesign.findOne(id);
        return { id, designData: result.designData };
      } catch (error) {
        // Fallback
        throw new Error('Design not found');
      }
    },

    // Get product info from Shopify (mock data for now)
    async getProductInfo(productId: string): Promise<ShopifyProduct> {
      // Return mock data as fallback
      return {
        id: productId,
        title: 'Badge Product',
        variants: [
          { id: '1', title: 'Default', price: '10.00' }
        ]
      };
    },

    // Send message to parent window (for Shopify integration)
    sendToParent(message: any) {
      if (typeof window !== 'undefined' && window.parent) {
        window.parent.postMessage(message, '*');
      }
    },

    // Add to cart functionality
    async addToCart(badgeData: any) {
      this.sendToParent({
        action: 'add-to-cart',
        payload: badgeData
      });
    },

    // Close modal
    closeModal() {
      this.sendToParent({
        action: 'close-modal'
      });
    }
  };
} 