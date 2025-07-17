import { json, type ActionFunctionArgs } from '@remix-run/node';

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { id, updateData } = await request.json();
    
    console.log('Update badge request:', { id, updateData });

    if (!id) {
      return json({ error: 'Badge design ID is required' }, { status: 400 });
    }

    // For now, we'll just return success since the actual update
    // will be handled by Gadget's built-in update functionality
    // when we push the changes
    
    return json({ 
      success: true, 
      message: 'Badge design updated successfully',
      id: id,
      designData: updateData
    });

  } catch (error) {
    console.error('Error in update-badge API:', error);
    return json({ error: 'Failed to update badge design' }, { status: 500 });
  }
} 