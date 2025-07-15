// API configuration
const GADGET_API_URL = process.env.GADGET_API_URL || (process.env.NODE_ENV === 'production' 
  ? 'https://allqualitybadges-development.gadget.app'
  : 'http://127.0.0.1:9293');

const GADGET_API_KEY = process.env.GADGET_API_KEY;

// Use authenticated API if key is available, otherwise fall back to public endpoints
const API_BASE_URL = GADGET_API_KEY ? `${GADGET_API_URL}/api` : `${GADGET_API_URL}/public/api`;

export interface BadgeDesignData {
  id?: string;
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
  // Save badge design (using authenticated or public endpoint)
  async saveBadgeDesign(designData: any): Promise<BadgeDesignData> {
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      // Add authentication if API key is available
      if (GADGET_API_KEY) {
        headers['Authorization'] = `Bearer ${GADGET_API_KEY}`;
      }
      
      const response = await fetch(`${API_BASE_URL}/badge-designs`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ designData }),
      });
      
      if (!response.ok) {
        console.warn('Failed to save to backend, using local storage fallback');
        // Fallback to local storage if backend is not available
        const designId = Date.now().toString();
        localStorage.setItem(`badge-design-${designId}`, JSON.stringify(designData));
        return { id: designId, designData };
      }
      
      return response.json();
    } catch (error) {
      console.warn('Backend not available, using local storage fallback');
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