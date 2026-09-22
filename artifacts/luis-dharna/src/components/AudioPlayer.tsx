import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, SkipForward, Disc } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { assetUrl } from "@/lib/asset-url";

const TRACKS = [
  {
    title: "Diosa",
    artist: "Luis Dharma ft. Mvnni & Hr Records",
    src: assetUrl("/audio/diosa.mp3"),
  },
  {
    title: "Me Enamoré De Ti",
    artist: "Luis Dharma",
    src: assetUrl("/audio/me-enamoro.mp3"),
  },
  {
    title: "Hipnotizado",
    artist: "Luis Dharma",
    src: assetUrl("/audio/hipnotizado.mp3"),
  },
  {
    title: "Te Soñé",
    artist: "Luis Dharma",
    src: assetUrl("/audio/te-sone.mp3"),
  },
];

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [pausedByVideo, setPausedByVideo] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = TRACKS[trackIndex];

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
      }
    };
    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("scroll", handleInteraction, { once: true });
    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };
  }, [hasInteracted]);

  useEffect(() => {
    const handleVideoPlaying = () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setPausedByVideo(true);
      }
    };
    const handleVideoPaused = () => {
      if (pausedByVideo && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setPausedByVideo(false);
          })
          .catch(() => {});
      }
    };
    window.addEventListener("video-playing", handleVideoPlaying);
    window.addEventListener("video-paused", handleVideoPaused);
    return () => {
      window.removeEventListener("video-playing", handleVideoPlaying);
      window.removeEventListener("video-paused", handleVideoPaused);
    };
  }, [isPlaying, pausedByVideo]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [trackIndex]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const skipTrack = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        loop={false}
        onEnded={() => setTrackIndex((prev) => (prev + 1) % TRACKS.length)}
      />

      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-x-0 bottom-24 flex justify-center z-50 pointer-events-none"
          >
            <div className="bg-black/60 backdrop-blur-md text-primary px-6 py-3 rounded-full border border-primary/20 shadow-[0_0_20px_rgba(230,150,20,0.1)] flex items-center gap-3 animate-pulse">
              <Play size={16} />
              <span className="text-sm uppercase tracking-[0.2em] font-medium">
                Tap anywhere to play
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="fixed bottom-0 inset-x-0 z-50 bg-gradient-to-t from-black via-background/90 to-transparent pt-12 pb-6 px-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-muted flex items-center justify-center flex-shrink-0 shadow-md border border-white/5">
              {isPlaying ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Disc className="text-primary w-full h-full p-2" />
                </motion.div>
              ) : (
                <Disc className="text-muted-foreground w-full h-full p-2" />
              )}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground m-0 truncate">
                {currentTrack.title}
              </p>
              <p className="text-xs text-muted-foreground m-0 tracking-wider truncate">
                {currentTrack.artist}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={skipTrack}
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="Next track"
            >
              <SkipForward size={18} />
            </button>
            <button
              onClick={toggleMute}
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="Toggle mute"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(230,150,20,0.3)]"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={20} fill="currentColor" />
              ) : (
                <Play size={20} fill="currentColor" className="ml-1" />
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
