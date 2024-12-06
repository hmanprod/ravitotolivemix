import React from 'react';
import { Disc3 } from 'lucide-react';
import { theme } from '../constants/theme';
import { TrackControls } from './TrackControls';
import { tracks } from '../data/tracks';
import { downloadLogger } from '../services/downloadLogger';

export function TrackList() {
  const handleDownload = async (track: typeof tracks[0]) => {
    try {
      // Log the download before opening the URL
      await downloadLogger.logDownload(
        track.downloadUrl,
        track.title
      );
      
      // Open the download URL
      window.open(track.downloadUrl, '_blank');
    } catch (error) {
      console.error('Failed to log download:', error);
      // Still open the download URL even if logging fails
      window.open(track.downloadUrl, '_blank');
    }
  };

  return (
    <section style={{ backgroundColor: theme.colors.gray[800] }} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Musiques Imposées
        </h2>
        <div className="max-w-3xl mx-auto">
          {tracks.map((track) => {
            const downloadCount = downloadLogger.getDownloadCount(track.downloadUrl);
            
            return (
              <div 
                key={track.title}
                style={{ backgroundColor: theme.colors.gray[700] }}
                className="flex items-center justify-between p-4 rounded-lg mb-4 text-white hover:bg-gray-600/50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <Disc3 
                    className="flex-shrink-0"
                    style={{ color: theme.colors.primary }} 
                  />
                  <div className="min-w-0">
                    <h3 className="font-semibold truncate">{track.title}</h3>
                    <div className="flex gap-2 text-sm items-center">
                      <span className="text-gray-400 truncate">{track.artist}</span>
                      <span className="text-gray-400">•</span>
                      <span 
                        className="truncate px-2 py-0.5 rounded-full text-xs"
                        style={{ 
                          backgroundColor: theme.colors.secondary + '20',
                          color: theme.colors.secondary 
                        }}
                      >
                        {track.style}
                      </span>
                      {downloadCount > 0 && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400 text-xs">
                            {downloadCount} téléchargement{downloadCount > 1 ? 's' : ''}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <TrackControls onDownload={() => handleDownload(track)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}