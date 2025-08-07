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
  },
  {
    value: 'Tahoma',
    label: 'Tahoma',
    category: 'Sans-serif'
  },
  {
    value: 'Trebuchet MS',
    label: 'Trebuchet MS',
    category: 'Sans-serif'
  },
  {
    value: 'Impact',
    label: 'Impact',
    category: 'Sans-serif'
  },
  {
    value: 'Comic Sans MS',
    label: 'Comic Sans MS',
    category: 'Casual'
  }
] as const;

export const FONT_CATEGORIES = [
  'Sans-serif',
  'Serif',
  'Monospace',
  'Casual'
] as const;

export type FontFamily = typeof FONT_FAMILIES[number]['value'];
export type FontCategory = typeof FONT_CATEGORIES[number];

// Define a type for font options that includes the optional isDefault property
type FontOption = {
  value: FontFamily;
  label: string;
  category: FontCategory;
  isDefault?: boolean;
};

export const DEFAULT_FONT = (FONT_FAMILIES as readonly FontOption[]).find(font => font.isDefault)?.value || 'Arial'; 