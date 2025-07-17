import { json, type ActionFunctionArgs } from '@remix-run/node';
import { Client } from '@gadget-client/allqualitybadges';

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

    // Get environment variables (server-side only)
    const GADGET_API_URL = process.env.GADGET_API_URL || 'https://allqualitybadges-development.gadget.app';
    const GADGET_API_KEY = process.env.GADGET_API_KEY;

    console.log('Environment check for update:', {
      GADGET_API_URL,
      GADGET_API_KEY: GADGET_API_KEY ? 'SET' : 'NOT SET'
    });

    if (!GADGET_API_KEY) {
      console.error('Gadget API key not configured for update');
      return json({ 
        success: true, 
        message: 'Update skipped (Gadget API not configured)',
        id: id,
        designData: updateData
      });
    }

    // Extract environment name from URL for Gadget client
    const getEnvironmentFromUrl = (url: string): string => {
      if (url.includes('--development')) return 'development';
      if (url.includes('--staging')) return 'staging';
      if (url.includes('--production') || url.includes('allqualitybadges.gadget.app') && !url.includes('--')) return 'production';
      return 'development'; // fallback
    };

    const environment = getEnvironmentFromUrl(GADGET_API_URL);

    // Create Gadget client instance
    let gadgetClient;
    try {
      gadgetClient = new Client({
        environment: environment,
        authenticationMode: { apiKey: GADGET_API_KEY },
      });
      console.log('Gadget client created successfully for update');
    } catch (clientError) {
      console.error('Error creating Gadget client for update:', clientError);
      return json({ 
        success: true, 
        message: 'Update skipped (Gadget client creation failed)',
        id: id,
        designData: updateData
      });
    }

    // Update the badge design record
    try {
      console.log('Updating badge design with data:', updateData);
      
      const result = await gadgetClient.mutate(`
        mutation UpdateBadgeDesign($id: GadgetID!, $fullImageUrl: String, $thumbnailUrl: String) {
          updateBadgeDesign(id: $id, badgeDesign: { fullImageUrl: $fullImageUrl, thumbnailUrl: $thumbnailUrl }) {
            success
            errors {
              message
            }
            badgeDesign {
              id
              fullImageUrl
              thumbnailUrl
            }
          }
        }
      `, { 
        id, 
        fullImageUrl: updateData.fullImageUrl,
        thumbnailUrl: updateData.thumbnailUrl
      });
      
      console.log('Badge design update result:', result);
      
      if (result.updateBadgeDesign?.success) {
        return json({ 
          success: true, 
          message: 'Badge design updated successfully',
          id: result.updateBadgeDesign.badgeDesign?.id || id,
          designData: updateData
        });
      } else {
        console.error('Badge design update failed:', result.updateBadgeDesign?.errors);
        return json({ 
          success: false, 
          message: 'Update failed',
          id: id,
          designData: updateData,
          errors: result.updateBadgeDesign?.errors
        });
      }
    } catch (apiError) {
      console.error('Error updating badge design in Gadget:', apiError);
      return json({ 
        success: false, 
        message: 'Update failed (Gadget API call failed)',
        id: id,
        designData: updateData,
        error: apiError instanceof Error ? apiError.message : 'Unknown API error'
      });
    }

  } catch (error) {
    console.error('Error in update-badge API:', error);
    return json({ error: 'Failed to update badge design' }, { status: 500 });
  }
} 