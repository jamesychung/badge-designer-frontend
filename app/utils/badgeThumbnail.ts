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
      // Create canvas element
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;

      // Fill background
      ctx.fillStyle = badge.backgroundColor;
      ctx.fillRect(0, 0, width, height);

      // Add border
      ctx.strokeStyle = '#888';
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, width - 2, height - 2);

      // Calculate text positioning
      const padding = 12;
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
        ctx.font = `${fontStyle}${fontWeight}${line.size}px ${line.fontFamily}`;
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

        // Draw text
        ctx.fillText(line.text, x, currentY);

        // Move to next line
        currentY += line.size * 1.3;
      });

      // Convert to data URL
      const dataUrl = canvas.toDataURL(format, quality);
      resolve(dataUrl);

    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Generates a smaller thumbnail suitable for cart display
 * @param badge The badge design data
 * @returns Promise<string> Base64 encoded image data URL
 */
export async function generateCartThumbnail(badge: Badge): Promise<string> {
  return generateBadgeThumbnail(badge, {
    width: 150,
    height: 50,
    quality: 0.8,
    format: 'image/png'
  });
} 