import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";

export function SpotifySection() {
  return (
    <section id="listen" className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1DB954]/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaSpotify className="text-[#1DB954] text-2xl" />
            <h2 className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Escucha Ahora</h2>
          </div>
          <h3 className="font-serif text-5xl md:text-6xl text-foreground">La Música.</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-sm overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(29,185,84,0.08)]"
        >
          <iframe
            src="https://open.spotify.com/embed/artist/0hpYHjVPUqnJNXlhe4rgGu?utm_source=generator&theme=0"
            width="100%"
            height="450"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Luis Dharma on Spotify"
            style={{ borderRadius: 0 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://open.spotify.com/artist/0hpYHjVPUqnJNXlhe4rgGu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1DB954] text-black font-semibold rounded-full hover:bg-[#1DB954]/90 transition-all duration-300 hover:scale-105 tracking-wide shadow-[0_0_30px_rgba(29,185,84,0.25)]"
          >
            <FaSpotify size={20} />
            Seguir en Spotify
          </a>
        </motion.div>
      </div>
    </section>
  );
}
