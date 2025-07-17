import { Badge, BadgeLine } from '../types/badge';

export interface BadgeThumbnailOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'image/png' | 'image/jpeg' | 'image/webp';
}

/**
 * Generates a thumbnail image of a badge design
 * @param badge The badge design data
 * @param options Thumbnail generation options
 * @returns Promise<string> Base64 encoded image data URL
 */
export async function generateBadgeThumbnail(
  badge: Badge, 
  options: BadgeThumbnailOptions = {}
): Promise<string> {
  const {
    width = 300,
    height = 100,
    quality = 0.9,
    format = 'image/png'
  } = options;

  return new Promise((resolve, reject) => {
    try {
      console.log('Generating thumbnail for badge:', {
        backgroundColor: badge.backgroundColor,
        lines: badge.lines.length,
        width,
        height
      });

      // Create canvas element
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        console.error('Could not get canvas context');
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;

      // Fill background with fallback
      const backgroundColor = badge.backgroundColor || '#FFFFFF';
      console.log('Setting background color:', backgroundColor);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      // Add border
      ctx.strokeStyle = '#888';
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, width - 2, height - 2);

      // Calculate text positioning
      const padding = Math.max(8, width * 0.04); // Responsive padding
      const availableWidth = width - (padding * 2);
      const availableHeight = height - (padding * 2);

      // Calculate total text height and positioning
      const totalTextHeight = badge.lines.reduce((sum, line) => {
        return sum + (line.size * 1.3); // 1.3 line height multiplier
      }, 0);

      let currentY = padding + (availableHeight - totalTextHeight) / 2;

      // Draw each line of text
      badge.lines.forEach((line: BadgeLine) => {
        // Set font properties
        const fontStyle = line.italic ? 'italic ' : '';
        const fontWeight = line.bold ? 'bold ' : '';
        const fontSize = Math.min(line.size, height * 0.4); // Cap font size to prevent overflow
        ctx.font = `${fontStyle}${fontWeight}${fontSize}px ${line.fontFamily}`;
        ctx.fillStyle = line.color;
        ctx.textAlign = line.alignment as CanvasTextAlign;
        ctx.textBaseline = 'top';

        // Calculate x position based on alignment
        let x: number;
        switch (line.alignment) {
          case 'left':
            x = padding;
            break;
          case 'right':
            x = width - padding;
            break;
          default: // center
            x = width / 2;
            break;
        }

        // Truncate text if it's too long
        let displayText = line.text;
        const maxWidth = availableWidth - 4;
        while (ctx.measureText(displayText).width > maxWidth && displayText.length > 0) {
          displayText = displayText.slice(0, -1);
        }

        // Draw text
        ctx.fillText(displayText, x, currentY);

        // Move to next line
        currentY += fontSize * 1.3;
      });

      // Convert to data URL
      try {
        const dataUrl = canvas.toDataURL(format, quality);
        console.log('Thumbnail generated successfully, data URL length:', dataUrl.length);
        resolve(dataUrl);
      } catch (toDataUrlError) {
        console.error('Error converting canvas to data URL:', toDataUrlError);
        // Try with lower quality
        try {
          const fallbackDataUrl = canvas.toDataURL('image/png', 0.5);
          console.log('Fallback thumbnail generated with lower quality');
          resolve(fallbackDataUrl);
        } catch (fallbackError) {
          console.error('Fallback thumbnail generation failed:', fallbackError);
          reject(fallbackError);
        }
      }

    } catch (error) {
      console.error('Error generating badge thumbnail:', error);
      // Return a basic fallback thumbnail instead of rejecting
      try {
        const fallbackThumbnail = generateFallbackThumbnail(badge);
        console.log('Using fallback thumbnail due to error');
        resolve(fallbackThumbnail);
      } catch (fallbackError) {
        console.error('Fallback thumbnail also failed:', fallbackError);
        reject(error);
      }
    }
  });
}

/**
 * Generates a smaller thumbnail suitable for cart display
 * @param badge The badge design data
 * @returns Promise<string> Base64 encoded image data URL
 */
export async function generateCartThumbnail(badge: Badge): Promise<string> {
  console.log('Generating cart thumbnail for badge:', {
    backgroundColor: badge.backgroundColor,
    lines: badge.lines.length
  });
  
  try {
    const thumbnail = await generateBadgeThumbnail(badge, {
      width: 150,
      height: 50,
      quality: 0.8,
      format: 'image/png'
    });
    console.log('Cart thumbnail generated successfully');
    return thumbnail;
  } catch (error) {
    console.error('Error generating cart thumbnail:', error);
    // Return a fallback thumbnail
    const fallback = generateFallbackThumbnail(badge);
    console.log('Using fallback cart thumbnail');
    return fallback;
  }
}

/**
 * Generates a fallback thumbnail when the main generation fails
 * @param badge The badge design data
 * @returns string Base64 encoded fallback image
 */
function generateFallbackThumbnail(badge: Badge): string {
  console.log('Generating fallback thumbnail for badge:', {
    backgroundColor: badge.backgroundColor
  });
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    console.error('Could not get canvas context for fallback thumbnail');
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
  }

  canvas.width = 150;
  canvas.height = 50;

  try {
    // Simple fallback design with proper background color
    const backgroundColor = badge.backgroundColor || '#FFFFFF';
    console.log('Fallback thumbnail background color:', backgroundColor);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, 150, 50);
    
    // Add border
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, 150, 50);

    // Add text with contrasting color
    const textColor = backgroundColor === '#FFFFFF' || backgroundColor === '#F0E68C' ? '#000000' : '#FFFFFF';
    ctx.fillStyle = textColor;
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Custom Badge', 75, 25);

    const dataUrl = canvas.toDataURL('image/png', 0.8);
    console.log('Fallback thumbnail generated successfully');
    return dataUrl;
  } catch (error) {
    console.error('Error generating fallback thumbnail:', error);
    // Return a minimal 1x1 transparent pixel as last resort
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
  }
} 