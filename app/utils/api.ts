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

  // API functions using server-side route for saving
  return {
    // Save badge design using server-side API route
    async saveBadgeDesign(designData: any, shopData?: any): Promise<BadgeDesignData> {
      try {
        console.log('saveBadgeDesign called with:', { designData, shopData });
        
        // Use server-side API route instead of client-side Gadget client
        const response = await fetch('/api/save-badge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ designData, shopData }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP ${response.status}`);
        }

        const result = await response.json();
        
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
        // For now, just return a fallback since we don't have a get endpoint yet
        throw new Error('Design not found');
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