/**
 * Shopify Cart Integration Utilities
 * Handles adding custom badge designs to Shopify cart
 */

export interface CartItemData {
  variantId: string;
  quantity: number;
  properties: Record<string, string>;
}

export interface CartResponse {
  success: boolean;
  message: string;
  cartData?: any;
  fallback?: boolean;
}

/**
 * Add a custom badge design to the Shopify cart
 * @param badgeData The badge design data to add to cart
 * @param shopifyStoreUrl The Shopify store URL (optional, will use current domain if not provided)
 * @returns Promise<CartResponse>
 */
export async function addBadgeToCart(
  badgeData: CartItemData, 
  shopifyStoreUrl?: string
): Promise<CartResponse> {
  try {
    // Determine the store URL
    const storeUrl = shopifyStoreUrl || window.location.hostname;
    
    // Prepare the cart data
    const cartData = {
      items: [{
        id: badgeData.variantId,
        quantity: badgeData.quantity,
        properties: badgeData.properties
      }]
    };

    console.log('Adding badge to cart:', cartData);

    // Try to add to cart via Shopify Cart API
    const response = await fetch(`https://${storeUrl}/cart/add.js`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Shopify cart API error:', errorText);
      throw new Error(`Shopify cart API error: ${response.status}`);
    }

    const result = await response.json();
    console.log('Successfully added to cart:', result);

    return {
      success: true,
      message: 'Badge added to cart successfully',
      cartData: result
    };

  } catch (error) {
    console.error('Error adding to cart:', error);
    
    // Fallback: try to add via AJAX cart
    try {
      const fallbackResult = await addToCartViaAjax(badgeData);
      return {
        success: true,
        message: 'Badge added to cart via fallback method',
        fallback: true,
        cartData: fallbackResult
      };
    } catch (fallbackError) {
      console.error('Fallback cart method also failed:', fallbackError);
      return {
        success: false,
        message: 'Failed to add badge to cart. Please try again.',
      };
    }
  }
}

/**
 * Fallback method using AJAX cart
 * @param badgeData The badge design data
 * @returns Promise<any>
 */
async function addToCartViaAjax(badgeData: CartItemData): Promise<any> {
  // Create a form and submit it to add to cart
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = '/cart/add';
  form.style.display = 'none';

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
  Object.entries(badgeData.properties).forEach(([key, value]) => {
    const propertyInput = document.createElement('input');
    propertyInput.type = 'hidden';
    propertyInput.name = `properties[${key}]`;
    propertyInput.value = value;
    form.appendChild(propertyInput);
  });

  // Submit the form
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);

  // Return a promise that resolves after a short delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

/**
 * Get the current cart contents
 * @param shopifyStoreUrl The Shopify store URL (optional)
 * @returns Promise<any>
 */
export async function getCart(shopifyStoreUrl?: string): Promise<any> {
  try {
    const storeUrl = shopifyStoreUrl || window.location.hostname;
    const response = await fetch(`https://${storeUrl}/cart.js`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch cart: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
}

/**
 * Update cart item quantity
 * @param itemKey The cart item key
 * @param quantity The new quantity
 * @param shopifyStoreUrl The Shopify store URL (optional)
 * @returns Promise<any>
 */
export async function updateCartItem(
  itemKey: string, 
  quantity: number, 
  shopifyStoreUrl?: string
): Promise<any> {
  try {
    const storeUrl = shopifyStoreUrl || window.location.hostname;
    const response = await fetch(`https://${storeUrl}/cart/change.js`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: itemKey,
        quantity: quantity
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update cart item: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
}

/**
 * Remove item from cart
 * @param itemKey The cart item key
 * @param shopifyStoreUrl The Shopify store URL (optional)
 * @returns Promise<any>
 */
export async function removeCartItem(
  itemKey: string, 
  shopifyStoreUrl?: string
): Promise<any> {
  return updateCartItem(itemKey, 0, shopifyStoreUrl);
}

/**
 * Clear the entire cart
 * @param shopifyStoreUrl The Shopify store URL (optional)
 * @returns Promise<any>
 */
export async function clearCart(shopifyStoreUrl?: string): Promise<any> {
  try {
    const storeUrl = shopifyStoreUrl || window.location.hostname;
    const response = await fetch(`https://${storeUrl}/cart/clear.js`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to clear cart: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
} 