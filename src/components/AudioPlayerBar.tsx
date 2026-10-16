import { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, X, RotateCcw } from 'lucide-react';

interface AudioPlayerBarProps {
  audioUrl: string | null;
  title: string;
  onClose: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export function AudioPlayerBar({
  audioUrl,
  title,
  onClose,
  isPlaying,
  onTogglePlay,
}: AudioPlayerBarProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioRef.current || !audioUrl) return;

    audioRef.current.src = audioUrl;
    if (isPlaying) {
      audioRef.current.play().catch(console.error);
    }
  }, [audioUrl]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(console.error);
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleEnded = () => {
    onTogglePlay();
    setProgress(0);
  };

  const restartAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
      if (!isPlaying) onTogglePlay();
    }
  };

  if (!audioUrl) return null;

  const percent = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <aside
      aria-label="Controle de Áudio"
      className="fixed bottom-6 right-6 z-40 bg-surface/95 border border-gold/50 p-4 shadow-2xl backdrop-blur-md max-w-sm w-[90vw] sm:w-80 flex flex-col gap-2.5 text-ink"
    >
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onLoadedMetadata={handleTimeUpdate}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-gold animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-gold font-semibold truncate max-w-[190px]">
            {title || 'Voz da OPTIMAFY'}
          </span>
        </div>

        <button
          onClick={onClose}
          className="text-muted hover:text-ink p-1 cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-border h-1 overflow-hidden relative">
        <div
          className="bg-gold h-full transition-all duration-150"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Controls & Waveform Simulation */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePlay}
            className="w-7 h-7 bg-gold hover:bg-gold-hover text-canvas flex items-center justify-center transition-colors cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
            )}
          </button>

          <button
            onClick={restartAudio}
            className="p-1.5 text-muted hover:text-gold transition-colors cursor-pointer"
            title="Reiniciar áudio"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-1 font-mono text-[10px] text-muted">
          <span>Áudio Oficial OPTIMAFY</span>
        </div>
      </div>
    </aside>
  );
}
