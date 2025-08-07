import React from 'react';
import { Badge } from '../types/badge';
import { BADGE_CONSTANTS } from '../constants/badge';

interface CsvUploaderProps {
  onBadgesCreated: (badges: Badge[]) => void;
}

export const CsvUploader: React.FC<CsvUploaderProps> = ({ onBadgesCreated }) => {
  const handleCsvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const rows = text.split('\n').map(row => row.split(','));
        
        // Create badges from CSV data
        const badges = rows.map(row => ({
          ...BADGE_CONSTANTS.INITIAL_BADGE,
          lines: [{ ...BADGE_CONSTANTS.INITIAL_BADGE.lines[0], text: row[0] }]
        }));

        onBadgesCreated(badges);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">CSV Import</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-sm text-gray-600 mb-4">
          Upload a CSV file with one name per line to create multiple badges at once.
        </p>
        <input
          type="file"
          accept=".csv"
          onChange={handleCsvUpload}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
        />
      </div>
    </div>
  );
}; 