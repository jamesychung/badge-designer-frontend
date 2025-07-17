import { json, type ActionFunctionArgs } from '@remix-run/node';

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { badgeData } = await request.json();
    
    console.log('Adding to cart:', badgeData);

    // This would need to be implemented based on your Shopify setup
    // For now, we'll return success and let the frontend handle the cart addition
    return json({ 
      success: true, 
      message: 'Badge data prepared for cart addition',
      badgeData 
    });

  } catch (error) {
    console.error('Error in add-to-cart API:', error);
    return json({ error: 'Failed to add to cart' }, { status: 500 });
  }
} 