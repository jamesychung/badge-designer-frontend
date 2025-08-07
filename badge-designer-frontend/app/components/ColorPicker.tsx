import React from 'react';

type ColorOption = {
  readonly value: string;
  readonly name: string;
  readonly ring: string;
};

interface ColorPickerProps {
  colors: readonly ColorOption[];
  selectedColor: string;
  onChange: (color: string) => void;
  label: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  selectedColor,
  onChange,
  label
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="grid grid-cols-4 gap-2">
        {colors.map((color: ColorOption) => (
          <button
            key={color.value}
            className={`w-8 h-8 rounded-full border-2 transition-all ${
              selectedColor === color.value ? `ring-2 ring-offset-2 ${color.ring}` : ''
            }`}
            style={{ backgroundColor: color.value }}
            onClick={() => onChange(color.value)}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}; 