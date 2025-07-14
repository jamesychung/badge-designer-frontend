export const FONT_FAMILIES = [
  {
    value: 'Arial',
    label: 'Arial',
    category: 'Sans-serif',
    isDefault: true
  },
  {
    value: 'Helvetica',
    label: 'Helvetica',
    category: 'Sans-serif'
  },
  {
    value: 'Times New Roman',
    label: 'Times New Roman',
    category: 'Serif'
  },
  {
    value: 'Georgia',
    label: 'Georgia',
    category: 'Serif'
  },
  {
    value: 'Courier New',
    label: 'Courier New',
    category: 'Monospace'
  },
  {
    value: 'Verdana',
    label: 'Verdana',
    category: 'Sans-serif'
  }
] as const;

export const DEFAULT_FONT = 'Arial';

export const FONT_SIZES = [
  8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 24, 28, 32, 36, 48, 60, 72
] as const; 