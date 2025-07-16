// API configuration
const GADGET_API_URL = process.env.GADGET_API_URL || (process.env.NODE_ENV === 'production' 
  ? 'https://allqualitybadges-development.gadget.app'
  : 'http://127.0.0.1:9293');

const GADGET_API_KEY = process.env.GADGET_API_KEY;

// Use authenticated API if key is available, otherwise fall back to public endpoints
const API_BASE_URL = GADGET_API_KEY ? `${GADGET_API_URL}/api` : `${GADGET_API_URL}/public/api`;

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

// API functions
export const api = {
  // Save badge design (calling Gadget directly)
  async saveBadgeDesign(designData: any, shopId?: string, productId?: string): Promise<BadgeDesignData> {
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      // Add authentication if API key is available
      if (GADGET_API_KEY) {
        headers['Authorization'] = `Bearer ${GADGET_API_KEY}`;
      }
      
      // Prepare the payload for Gadget
      const gadgetPayload = {
        designData,
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
      
      console.log('Calling Gadget API with payload:', gadgetPayload);
      
      // Call Gadget public API directly
      const response = await fetch(`${API_BASE_URL}/badge-designs`, {
        method: 'POST',
        headers,
        body: JSON.stringify(gadgetPayload),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Gadget API error response:', errorText);
        throw new Error(`Gadget API error: ${response.status} ${response.statusText} - ${errorText}`);
      }
      
      const result = await response.json();
      console.log('Gadget API success response:', result);
      
      return { 
        id: result.id, 
        designData,
        designId: result.designId 
      };
    } catch (error) {
      console.error('Error saving badge design:', error);
      
      // Fallback to local storage if API is not available
      console.warn('Failed to save to backend, using local storage fallback');
      const designId = Date.now().toString();
      localStorage.setItem(`badge-design-${designId}`, JSON.stringify(designData));
      return { id: designId, designData };
    }
  },

  // Get badge design by ID (with local storage fallback)
  async getBadgeDesign(id: string): Promise<BadgeDesignData> {
    try {
      const headers: Record<string, string> = {};
      
      // Add authentication if API key is available
      if (GADGET_API_KEY) {
        headers['Authorization'] = `Bearer ${GADGET_API_KEY}`;
      }
      
      const response = await fetch(`${API_BASE_URL}/badge-designs/${id}`, {
        headers,
      });
      
      if (!response.ok) {
        // Fallback to local storage
        const localData = localStorage.getItem(`badge-design-${id}`);
        if (localData) {
          return { id, designData: JSON.parse(localData) };
        }
        throw new Error('Design not found');
      }
      
      return response.json();
    } catch (error) {
      // Fallback to local storage
      const localData = localStorage.getItem(`badge-design-${id}`);
      if (localData) {
        return { id, designData: JSON.parse(localData) };
      }
      throw new Error('Design not found');
    }
  },

  // Get product info from Shopify (mock data for now)
  async getProductInfo(productId: string): Promise<ShopifyProduct> {
    try {
      const headers: Record<string, string> = {};
      
      // Add authentication if API key is available
      if (GADGET_API_KEY) {
        headers['Authorization'] = `Bearer ${GADGET_API_KEY}`;
      }
      
      const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
        headers,
      });
      
      if (!response.ok) {
        // Return mock data as fallback
        return {
          id: productId,
          title: 'Badge Product',
          variants: [
            { id: '1', title: 'Default', price: '10.00' }
          ]
        };
      }
      
      return response.json();
    } catch (error) {
      // Return mock data as fallback
      return {
        id: productId,
        title: 'Badge Product',
        variants: [
          { id: '1', title: 'Default', price: '10.00' }
        ]
      };
    }
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