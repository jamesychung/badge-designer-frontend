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

  // Add to cart functionality - direct Shopify cart API call
  async addToCart(badgeData: any) {
      console.log('addToCart function called with:', badgeData);
      
      try {
        // Get Shopify store URL from environment or use default
        // In frontend, we'll use a default or get from window object if available
        const shopifyStoreUrl = (typeof window !== 'undefined' && (window as any).SHOPIFY_STORE_URL) || 'badgesonly.myshopify.com';
        
        console.log('Adding to Shopify cart directly from frontend');
        console.log('Shopify store URL:', shopifyStoreUrl);
        console.log('Cart data:', badgeData);

        // Prepare the cart addition data for Shopify
        const cartData = {
          items: [{
            id: badgeData.variantId,
            quantity: badgeData.quantity,
            properties: badgeData.properties
          }]
        };

        console.log('Cart data to send to Shopify:', cartData);

        // Add to Shopify cart using form submission to avoid CORS
        console.log('Using form submission to avoid CORS...');
        
        // Create a form and submit it to add to cart
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = `https://${shopifyStoreUrl}/cart/add`;
        form.target = '_blank'; // Open in new tab/window
        
        // Add variant ID
        const variantInput = document.createElement('input');
        variantInput.type = 'hidden';
        variantInput.name = 'id';
        variantInput.value = badgeData.variantId;
        form.appendChild(variantInput);
        
        // Add quantity
        const quantityInput = document.createElement('input');
        quantityInput.type = 'hidden';
        quantityInput.name = 'quantity';
        quantityInput.value = badgeData.quantity.toString();
        form.appendChild(quantityInput);
        
        // Add properties
        console.log('=== FORM SUBMISSION PROPERTIES ===');
        Object.entries(badgeData.properties).forEach(([key, value]) => {
          const propInput = document.createElement('input');
          propInput.type = 'hidden';
          propInput.name = `properties[${key}]`;
          propInput.value = value as string;
          form.appendChild(propInput);
          console.log(`Adding property: properties[${key}] = ${value}`);
        });
        console.log('=== END FORM SUBMISSION PROPERTIES ===');
        
        // Submit the form
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
        
        console.log('Form submitted to add item to cart');
        
        // Simulate success response since we can't get the actual response due to CORS
        const cartResult = {
          success: true,
          message: 'Item added to cart via form submission'
        };

        // Also send to parent window for additional integration
        this.sendToParent({
          action: 'add-to-cart',
          payload: badgeData
        });

        return { 
          success: true, 
          message: 'Badge added to cart successfully',
          cartData: cartResult,
          badgeData 
        };

      } catch (error) {
        console.error('Error adding to cart:', error);
        
        // Fallback to just sending to parent window
        this.sendToParent({
          action: 'add-to-cart',
          payload: badgeData
        });
        
        throw error;
      }
  },

  // Close modal
  closeModal() {
    this.sendToParent({
      action: 'close-modal'
    });
  }
}; 
} 