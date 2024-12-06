import React from 'react';
import { Download } from 'lucide-react';
import { theme } from '../constants/theme';

interface TrackControlsProps {
  onDownload: () => void;
}

export function TrackControls({ onDownload }: TrackControlsProps) {
  return (
    <button
      onClick={onDownload}
      className="p-2 rounded-full hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-secondary/50"
      style={{ backgroundColor: theme.colors.secondary }}
      title="Download"
    >
      <Download size={16} />
    </button>
  );
}