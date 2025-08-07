import React from 'react';
import { Badge, BadgeLine } from '../types/badge';
import { BADGE_CONSTANTS } from '../constants/badge';
import { BadgeTextLinesHeader } from './BadgeTextLinesHeader';
import { BadgeEditorPanel } from './BadgeEditorPanel';

interface BadgeEditPanelProps {
  badge: Badge;
  maxLines: number;
  onLineChange: (index: number, changes: Partial<BadgeLine>) => void;
  onAlignmentChange: (index: number, alignment: string) => void;
  onBackgroundColorChange: (color: string) => void;
  onRemoveLine: (index: number) => void;
  addLine: () => void;
  showRemove?: boolean;
  editable?: boolean;
}

export const BadgeEditPanel: React.FC<BadgeEditPanelProps> = ({
  badge,
  maxLines,
  onLineChange,
  onAlignmentChange,
  onBackgroundColorChange,
  onRemoveLine,
  addLine,
  showRemove = true,
  editable = true,
}) => (
  <div className="w-full">
    <BadgeTextLinesHeader
      numLines={badge.lines.length}
      maxLines={maxLines}
      onAddLine={addLine}
    />
    <BadgeEditorPanel
      badge={badge}
      onLineChange={onLineChange}
      onAlignmentChange={onAlignmentChange}
      onBackgroundColorChange={onBackgroundColorChange}
      onRemoveLine={onRemoveLine}
      showRemove={showRemove}
      maxLines={maxLines}
      addLineButton={null}
      resetButton={null}
      multiBadgeButton={null}
      editable={editable}
    />
  </div>
); 