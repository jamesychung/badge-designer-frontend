// Placeholder for pdf-lib PDF generation implementation
// All other PDF generator code has been removed.

// TODO: Implement badge PDF generation using pdf-lib

import { PDFDocument, rgb, StandardFonts, PDFPage, PDFFont } from 'pdf-lib';

interface BadgeLine {
  text: string;
  size: number;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  alignment?: string;
}

interface BadgeOptions {
  page: PDFPage;
  x: number;
  y: number;
  width: number;
  height: number;
  lines: BadgeLine[];
  font: PDFFont;
  color?: [number, number, number];
  lineSpacing?: number;
}

export function drawCenteredBadge({
  page,
  x,
  y,
  width,
  height,
  lines,
  font,
  color = [0, 0, 0],
  lineSpacing = 1.2,
}: BadgeOptions) {
  // Step 1: Calculate total height of all lines with spacing
  let totalBlockHeight = 0;
  for (let i = 0; i < lines.length; i++) {
    const fontSize = lines[i].size;
    totalBlockHeight += fontSize * (i === lines.length - 1 ? 1 : lineSpacing);
  }
  // Step 2: Calculate initial Y (bottom-left origin)
  let cursorY = y + (height + totalBlockHeight) / 2;
  // Step 3: Draw each line, center-aligned, using per-line color
  for (const line of lines) {
    const { text, size } = line;
    cursorY -= size; // baseline shift
    const textWidth = font.widthOfTextAtSize(text, size);
    const textX = x + (width - textWidth) / 2;
    // Use per-line color if present, else fallback to default
    let lineColor: [number, number, number];
    if (line.color) {
      if (Array.isArray(line.color) && line.color.length === 3) {
        lineColor = [Number(line.color[0]), Number(line.color[1]), Number(line.color[2])];
      } else {
        lineColor = cssColorToRgb(line.color);
      }
    } else {
      lineColor = color as [number, number, number];
    }
    page.drawText(text, {
      x: textX,
      y: cursorY,
      size,
      font,
      color: rgb(lineColor[0], lineColor[1], lineColor[2]),
    });
    // Apply extra spacing only between lines
    cursorY -= size * (lineSpacing - 1);
  }
}

// Helper to convert CSS color to rgb() and hex
function cssColorToRgb(color: string): [number, number, number] {
  if (color.startsWith('rgb')) {
    const rgbArr = color.match(/\d+/g)?.map(Number) || [0, 0, 0];
    return [rgbArr[0] / 255, rgbArr[1] / 255, rgbArr[2] / 255];
  } else if (color.startsWith('#')) {
    let hex = color.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
    const num = parseInt(hex, 16);
    return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
  }
  return [0, 0, 0];
}

function cssColorToHex(color: string): string {
  if (color.startsWith('rgb')) {
    const rgbArr = color.match(/\d+/g)?.map(Number) || [0, 0, 0];
    return (
      '#' +
      rgbArr
        .map((v) => {
          const hex = Number(v).toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('')
    );
  }
  return color;
}

// Draw specs box to the right of the badge
function drawBadgeSpecs({
  page,
  badge,
  badgeX,
  badgeY,
  badgeWidth,
  badgeHeight,
  font,
  fontBold,
  lineSpacing = 1.2,
}: {
  page: PDFPage;
  badge: any;
  badgeX: number;
  badgeY: number;
  badgeWidth: number;
  badgeHeight: number;
  font: PDFFont;
  fontBold: PDFFont;
  lineSpacing?: number;
}) {
  const specX = badgeX + badgeWidth + 20;
  let specY = badgeY + badgeHeight;
  const fontSize = 11;
  // Background Color
  page.drawText('Background Color:', { x: specX, y: specY, size: fontSize, font: fontBold, color: rgb(0,0,0) });
  // Swatch
  page.drawRectangle({ x: specX + 110, y: specY - 2, width: 16, height: 12, color: rgb(...cssColorToRgb(badge.backgroundColor)) });
  // Hex
  page.drawText(cssColorToHex(badge.backgroundColor), { x: specX + 130, y: specY, size: fontSize, font, color: rgb(0,0,0) });
  specY -= fontSize * 1.6;
  // Per line
  badge.lines.forEach((line: any, idx: number) => {
    page.drawText(`Line ${idx+1}:`, { x: specX, y: specY, size: fontSize, font: fontBold, color: rgb(0,0,0) });
    specY -= fontSize * 1.2;
    // Text
    page.drawText(`Text: ${line.text}`, { x: specX + 10, y: specY, size: fontSize, font, color: rgb(0,0,0) });
    specY -= fontSize * 1.1;
    // Text color swatch and hex
    page.drawText('Text Color:', { x: specX + 10, y: specY, size: fontSize, font, color: rgb(0,0,0) });
    page.drawRectangle({ x: specX + 70, y: specY - 2, width: 16, height: 12, color: rgb(...cssColorToRgb(line.color)) });
    page.drawText(cssColorToHex(line.color), { x: specX + 90, y: specY, size: fontSize, font, color: rgb(0,0,0) });
    specY -= fontSize * 1.1;
    // Font
    page.drawText(`Font: Helvetica`, { x: specX + 10, y: specY, size: fontSize, font, color: rgb(0,0,0) });
    specY -= fontSize * 1.1;
    // Format
    let format = [];
    if (line.bold) format.push('Bold');
    if (line.italic) format.push('Italic');
    if (line.underline) format.push('Underline');
    page.drawText(`Format: ${format.length ? format.join(', ') : 'Normal'}`, { x: specX + 10, y: specY, size: fontSize, font, color: rgb(0,0,0) });
    specY -= fontSize * 1.1;
    // Align
    page.drawText(`Align: ${line.alignment ? line.alignment.charAt(0).toUpperCase() + line.alignment.slice(1) : 'Center'}`, { x: specX + 10, y: specY, size: fontSize, font, color: rgb(0,0,0) });
    specY -= fontSize * 1.1;
    // Font size
    page.drawText(`Font Size: ${Math.round(line.size / 0.75)} px`, { x: specX + 10, y: specY, size: fontSize, font, color: rgb(0,0,0) });
    specY -= fontSize * 1.3;
  });
}

// Extract badge data from DOM
function extractBadgeData(element: HTMLElement) {
  const lines: BadgeLine[] = [];
  const spans = element.querySelectorAll('span');
  spans.forEach(span => {
    const style = window.getComputedStyle(span);
    lines.push({
      text: span.textContent || '',
      size: parseInt(style.fontSize),
      color: style.color,
      bold: style.fontWeight === 'bold' || parseInt(style.fontWeight) >= 700,
      italic: style.fontStyle === 'italic',
      underline: style.textDecoration === 'underline',
      alignment: style.textAlign,
    });
  });
  return {
    lines,
    backgroundColor: element.style.backgroundColor || '#FFFFFF'
  };
}

// Column headers for specs table
const TABLE_HEADERS = [
  '', // Badge image/Background
  'Text & Font Size',
  'Text Color',
  'Format & Align',
];

// Helper to get color name from value
const COLOR_NAMES: Record<string, string> = {
  '#000000': 'Black',
  '#FFFFFF': 'White',
  '#ea0c0c': 'Red',
  '#0c5cea': 'Blue',
  '#C0C0C0': 'Silver',
  '#eac10c': 'Gold',
  '#6E260E': 'Brown',
  '#F0E68C': 'Ivory',
  '#FFFF00': 'Yellow',
};

// Utility: px to pt with standard rounding
function pxToPtRounded(px: number): number {
  return Math.round(px * 0.75);
}

// Update getColorName to always return a name (no hex)
function getColorName(color: string): string {
  const hex = cssColorToHex(color).toUpperCase();
  return COLOR_NAMES[hex] || 'Custom';
}

// Draw badge table row
function drawBadgeTableRow({
  page,
  rowY,
  colXs,
  rowHeight,
  badgeImage,
  backgroundColor,
  line,
  isFirstRow,
  font,
  fontBold,
  badgeLinesCount,
  badge,
  badgeBox,
  headerY,
  headerHeight,
  bufferHeight,
  textColWidth,
  colorColWidth,
  formatColWidth,
}: any) {
  const fontSize = 10;
  const lineGray = rgb(0.8, 0.8, 0.8);
  // Draw row separator (skip in column 1 if badge preview is present)
  if (!isFirstRow) {
    page.drawLine({
      start: { x: colXs[0], y: rowY - rowHeight },
      end: { x: colXs[colXs.length-1] + formatColWidth, y: rowY - rowHeight },
      thickness: 0.4,
      color: lineGray,
    });
  } else {
    // Only draw row line for columns 2-4
    page.drawLine({
      start: { x: colXs[1], y: rowY - rowHeight },
      end: { x: colXs[colXs.length-1] + formatColWidth, y: rowY - rowHeight },
      thickness: 0.4,
      color: lineGray,
    });
  }
  // Column 1: badge image + background color (only for first row)
  if (isFirstRow) {
    // Align badge image top with header text (just below buffer)
    const badgeImgY = headerY - headerHeight + 8;
    // Use exact 3x1 inch size: 216pt x 72pt
    page.drawRectangle({
      x: colXs[0] + 4,
      y: badgeImgY - 72 + fontSize, // 72pt = 1 inch
      width: 216, // 3 inches
      height: 72, // 1 inch
      color: rgb(...cssColorToRgb(backgroundColor)),
      borderColor: rgb(0.53, 0.53, 0.53),
      borderWidth: 1,
    });
    // Draw badge text lines inside the box
    const lines: BadgeLine[] = badge.lines.map((l: any) => ({
      text: l.text,
      size: pxToPtRounded(l.size),
      color: l.color,
      bold: l.bold,
    }));
    drawCenteredBadge({
      page,
      x: colXs[0] + 4,
      y: badgeImgY - 72 + fontSize,
      width: 216,
      height: 72,
      lines,
      font,
      color: cssColorToRgb(lines[0]?.color || '#000'),
      lineSpacing: 1.3,
    });
    // Background color swatch and name below image
    page.drawRectangle({
      x: colXs[0] + 4,
      y: badgeImgY - 72 - 14 + fontSize,
      width: 16,
      height: 12,
      color: rgb(...cssColorToRgb(backgroundColor)),
      borderColor: rgb(0,0,0),
      borderWidth: 0.5,
    });
    page.drawText(getColorName(backgroundColor), {
      x: colXs[0] + 24,
      y: badgeImgY - 72 - 12 + fontSize,
      size: fontSize,
      font,
      color: rgb(0,0,0),
    });
  }
  // Column 2: Text & Font Size (bottom-aligned, text color matches column 3, wrap if needed)
  const textColor = rgb(...cssColorToRgb(line.color));
  const textPt = `${line.text}, ${pxToPtRounded(line.size)}pt`;
  let textLines: string[] = [];
  let currentLine = '';
  for (const word of textPt.split(' ')) {
    const testLine = currentLine ? currentLine + ' ' + word : word;
    const width = font.widthOfTextAtSize(testLine, fontSize);
    if (width > textColWidth - 8 && currentLine) {
      textLines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) textLines.push(currentLine);
  let textY = rowY - rowHeight + 4 + (textLines.length - 1) * fontSize;
  for (const lineText of textLines) {
    page.drawText(lineText, {
      x: colXs[1] + 2,
      y: textY,
      size: fontSize,
      font,
      color: textColor,
    });
    textY -= fontSize;
  }
  // Column 3: Text Color (swatch above color name, both bottom-aligned, color name 9pt)
  const colorNameFontSize = 9;
  const swatchWidth = 12;
  const swatchHeight = 10;
  const colorName = getColorName(line.color);
  const colorNameWidth = font.widthOfTextAtSize(colorName, colorNameFontSize);
  // Bottom Y for color name (aligned with text column)
  const colorNameY = rowY - rowHeight + 4;
  // Swatch bottom is 4pt above color name
  const swatchX = colXs[2] + colorColWidth / 2 - swatchWidth / 2;
  const swatchY = colorNameY + colorNameFontSize + 4;
  page.drawRectangle({
    x: swatchX,
    y: swatchY,
    width: swatchWidth,
    height: swatchHeight,
    color: textColor,
    borderColor: rgb(0,0,0),
    borderWidth: 0.5,
  });
  // Draw color name at the bottom, centered
  page.drawText(colorName, {
    x: colXs[2] + colorColWidth / 2 - colorNameWidth / 2,
    y: colorNameY,
    size: colorNameFontSize,
    font,
    color: rgb(0,0,0),
  });
  // Column 4: Format & Align (format on first line, align on next line)
  let format = [];
  if (line.bold) format.push('Bold');
  if (line.italic) format.push('Italic');
  if (line.underline) format.push('Underline');
  const formatText = format.length ? format.join(', ') : 'None';
  const alignText = line.alignment ? line.alignment.charAt(0).toUpperCase() + line.alignment.slice(1) : 'Center';
  // Draw format text (aligned with text column)
  page.drawText(formatText, {
    x: colXs[3] + 2,
    y: colorNameY + colorNameFontSize + 4,
    size: 9,
    font,
    color: rgb(0,0,0),
  });
  // Draw alignment text (directly below format text)
  page.drawText(alignText, {
    x: colXs[3] + 2,
    y: colorNameY,
    size: 9,
    font,
    color: rgb(0,0,0),
  });
}

export const generatePDF = async (badgeElement: HTMLElement, multipleBadges?: HTMLElement[]): Promise<void> => {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([595.28, 841.89]); // A4 in points
  const { width: pageWidth } = page.getSize();
  let yPos = 805;
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  // Table column widths
  const margin = 36; // 1/2 inch
  const badgeColWidth = 216 + 20; // 216pt badge + 20pt padding
  const colorColWidth = 40; // fixed small width for Text Color column
  const formatColWidth = 60; // reduced width for Format & Align
  const availableWidth = pageWidth - 2 * margin - badgeColWidth - colorColWidth - formatColWidth;
  const textColWidth = availableWidth; // Text & Font Size gets the rest
  const colWidths = [badgeColWidth, textColWidth, colorColWidth, formatColWidth];
  const colXs = [margin];
  for (let i = 0; i < colWidths.length - 1; i++) colXs.push(colXs[i] + colWidths[i]);
  const rowHeight = 28;
  const headerHeight = 28; // match data row height
  const bufferHeight = 8; // 8pt buffer row above header
  const lightGray = rgb(0.92, 0.92, 0.92);
  const lineGray = rgb(0.8, 0.8, 0.8);

  // For each badge
  const allBadges = [badgeElement, ...(multipleBadges || [])];
  allBadges.forEach((badgeEl, badgeIdx) => {
    const badge = extractBadgeData(badgeEl);
    // Add buffer row
    yPos -= bufferHeight;
    let headerY = yPos;
    page.drawRectangle({ x: colXs[0], y: headerY + 6, width: colXs[colXs.length-1] + formatColWidth - colXs[0], height: headerHeight - 8, color: lightGray });
    for (let c = 0; c < TABLE_HEADERS.length; c++) {
      // Wrap header text if needed
      const headerText = TABLE_HEADERS[c];
      const colWidth = colWidths[c];
      let headerLines: string[] = [];
      let curHeader = '';
      for (const word of headerText.split(' ')) {
        const testHeader = curHeader ? curHeader + ' ' + word : word;
        const width = helveticaBold.widthOfTextAtSize(testHeader, 11);
        if (width > colWidth - 8 && curHeader) {
          headerLines.push(curHeader);
          curHeader = word;
        } else {
          curHeader = testHeader;
        }
      }
      if (curHeader) headerLines.push(curHeader);
      let headerTextY = headerY - headerHeight + 8 + (headerLines.length - 1) * 11;
      for (const lineText of headerLines) {
        page.drawText(lineText, {
          x: colXs[c] + 2,
          y: headerTextY,
          size: 11,
          font: helveticaBold,
          color: rgb(0,0,0),
        });
        headerTextY -= 11;
      }
      // Draw vertical lines (thinner, lighter)
      page.drawLine({
        start: { x: colXs[c], y: headerY + 6 },
        end: { x: colXs[c], y: headerY - headerHeight - rowHeight * badge.lines.length },
        thickness: 0.4,
        color: lineGray,
      });
      // Draw light color line at bottom of header cell
      page.drawLine({
        start: { x: colXs[c], y: headerY - headerHeight },
        end: { x: colXs[c] + colWidths[c], y: headerY - headerHeight },
        thickness: 0.4,
        color: lineGray,
      });
    }
    // Draw rightmost vertical line
    page.drawLine({
      start: { x: colXs[colXs.length-1] + formatColWidth, y: headerY + 6 },
      end: { x: colXs[colXs.length-1] + formatColWidth, y: headerY - headerHeight - rowHeight * badge.lines.length },
      thickness: 0.4,
      color: lineGray,
    });
    yPos -= headerHeight;
    // Draw rows for each line
    badge.lines.forEach((line, lineIdx) => {
      drawBadgeTableRow({
        page,
        rowY: yPos,
        colXs,
        rowHeight,
        badgeImage: badge, // not used, but could be for future
        backgroundColor: badge.backgroundColor,
        line,
        isFirstRow: lineIdx === 0,
        font: helveticaFont,
        fontBold: helveticaBold,
        badgeLinesCount: badge.lines.length,
        badge,
        badgeBox: {},
        headerY,
        headerHeight,
        bufferHeight,
        textColWidth,
        colorColWidth,
        formatColWidth,
      });
      yPos -= rowHeight;
    });
    yPos -= 30; // space between badges
    // Page break if needed
    if (yPos < 100 && badgeIdx < allBadges.length - 1) {
      page = pdfDoc.addPage([595.28, 841.89]);
      yPos = 805;
    }
  });
  // Download
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'badge-design.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const handleDownloadPDF = (): void => {
  const badgeElement = document.querySelector('.badge-preview') as HTMLElement;
  const multipleBadgeElements = Array.from(document.querySelectorAll('.badge-preview-multiple')) as HTMLElement[];
  if (badgeElement) {
    generatePDF(badgeElement, multipleBadgeElements);
  }
}; 