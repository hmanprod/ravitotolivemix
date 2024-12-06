import { useState, useRef, useCallback, useEffect } from 'react';

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('error', () => {
        setError('Unable to play this track. Try downloading instead.');
        setIsPlaying(false);
      });

      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const play = useCallback(async (url: string, trackId: string) => {
    setError(null);
    
    if (audioRef.current) {
      try {
        if (currentTrackId === trackId && isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          if (currentTrackId !== trackId) {
            audioRef.current.src = url;
            setCurrentTrackId(trackId);
          }
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            await playPromise;
            setIsPlaying(true);
          }
        }
      } catch (err) {
        setError('Unable to play this track. Try downloading instead.');
        setIsPlaying(false);
      }
    }
  }, [currentTrackId, isPlaying]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTrackId(null);
      setError(null);
    }
  }, []);

  return {
    audioRef,
    isPlaying,
    currentTrackId,
    error,
    play,
    stop
  };
}