import { useRef, useState } from 'react';

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.volume = 0.34;
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="music-control">
      <audio ref={audioRef} src="/audio/got-theme.mp3" loop preload="none" />
      <button type="button" onClick={toggleMusic} aria-label={isPlaying ? '暫停背景音樂' : '播放背景音樂'}>
        {isPlaying ? '暫停 BGM' : '播放 BGM'}
      </button>
    </div>
  );
}

export default BackgroundMusic;
