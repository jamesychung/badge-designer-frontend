// API configuration
const GADGET_API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://allqualitybadges-development.gadget.app/api'
  : 'http://127.0.0.1:9293/api';

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
  // Save badge design
  async saveBadgeDesign(designData: any): Promise<BadgeDesignData> {
    const response = await fetch(`${GADGET_API_URL}/badge-designs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ designData }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to save badge design');
    }
    
    return response.json();
  },

  // Get badge design by ID
  async getBadgeDesign(id: string): Promise<BadgeDesignData> {
    const response = await fetch(`${GADGET_API_URL}/badge-designs/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch badge design');
    }
    
    return response.json();
  },

  // Get product info from Shopify
  async getProductInfo(productId: string): Promise<ShopifyProduct> {
    const response = await fetch(`${GADGET_API_URL}/products/${productId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch product info');
    }
    
    return response.json();
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