import { Client } from '@gadget-client/allqualitybadges';

// API configuration
const GADGET_API_URL = process.env.GADGET_API_URL || 'https://allqualitybadges-development.gadget.app';
const GADGET_API_KEY = process.env.GADGET_API_KEY;

// Create Gadget client instance
const gadgetClient = new Client({
  environment: GADGET_API_URL,
  authenticationMode: { apiKey: GADGET_API_KEY },
});

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

// API functions using Gadget client
export const api = {
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
        id: result.id, 
        designData,
        designId: result.designId 
      };
    } catch (error) {
      console.error('Error saving badge design:', error);
      
      // Fallback to local storage
      console.warn('Failed to save to backend, using local storage fallback');
      const designId = Date.now().toString();
      localStorage.setItem(`badge-design-${designId}`, JSON.stringify(designData));
      return { id: designId, designData };
    }
  },

  // Get badge design by ID (with local storage fallback)
  async getBadgeDesign(id: string): Promise<BadgeDesignData> {
    try {
      // Fallback to local storage for now
      const localData = localStorage.getItem(`badge-design-${id}`);
      if (localData) {
        return { id, designData: JSON.parse(localData) };
      }
      throw new Error('Design not found');
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