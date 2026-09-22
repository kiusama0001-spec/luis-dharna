import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Play } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export function PerformanceSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    window.dispatchEvent(new CustomEvent("video-playing"));
  };

  const handleStop = () => {
    setIsPlaying(false);
    window.dispatchEvent(new CustomEvent("video-paused"));
  };

  return (
    <section id="performance" className="py-32 bg-[#030303] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaYoutube className="text-red-500 text-2xl" />
            <h2 className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">En Vivo</h2>
          </div>
          <h3 className="font-serif text-5xl md:text-7xl text-foreground">LOVE<br />
            <span className="text-foreground/30">Live Performance.</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative group"
        >
          {/* Overlay before play */}
          {!isPlaying && (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-black/40 hover:bg-black/20 transition-all duration-500"
              onClick={handlePlay}
            >
              <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_60px_rgba(239,68,68,0.4)] hover:scale-110 transition-transform duration-300">
                <Play fill="white" size={36} className="ml-2 text-white" />
              </div>
            </div>
          )}

          <div className="aspect-video rounded-sm overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
            <iframe
              ref={playerRef}
              src={`https://www.youtube.com/embed/CU_gvRgnLCs?enablejsapi=1&rel=0&modestbranding=1&color=white${isPlaying ? "&autoplay=1" : ""}`}
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="LOVE Live Performance - Luis Dharma"
              className="w-full h-full"
              onLoad={() => {}}
            />
          </div>

          {isPlaying && (
            <button
              onClick={handleStop}
              className="absolute top-4 right-4 z-10 bg-black/60 text-white/60 hover:text-white px-4 py-2 rounded-full text-xs tracking-widest uppercase backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all"
            >
              Parar video
            </button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 pt-8 border-t border-white/5"
        >
          <p className="text-muted-foreground text-sm tracking-wide">
            Más videos en el canal oficial de YouTube
          </p>
          <a
            href="https://www.youtube.com/@Luisdharma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-500 transition-all duration-300 hover:scale-105 tracking-wide text-sm shadow-[0_0_20px_rgba(239,68,68,0.2)]"
          >
            <FaYoutube size={18} />
            Ver canal en YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
}
