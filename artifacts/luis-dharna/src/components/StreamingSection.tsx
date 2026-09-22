import { motion } from "framer-motion";
import { FaSpotify, FaApple, FaYoutube, FaAmazon } from "react-icons/fa";

const PLATFORMS = [
  { name: "Spotify", icon: FaSpotify, color: "#1DB954", link: "https://open.spotify.com/artist/0hpYHjVPUqnJNXlhe4rgGu" },
  { name: "Apple Music", icon: FaApple, color: "#FA243C", link: "https://music.apple.com/mx/artist/luis-dharma/1621171695" },
  { name: "YouTube Music", icon: FaYoutube, color: "#FF0000", link: "https://www.youtube.com/channel/UCfRdy1fyUILghxryASFUz5A" },
  { name: "Amazon Music", icon: FaAmazon, color: "#00A8E1", link: "https://music.amazon.es/artists/B09YXVJQR9/luis-dharma" },
];

export function StreamingSection() {
  return (
    <section className="py-32 bg-background border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-12">Escucha en todas las plataformas.</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {PLATFORMS.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: platform.color }}
              className="flex items-center gap-3 px-6 py-4 rounded-sm bg-white/5 border border-white/10 text-foreground transition-all duration-300 hover:bg-white/10 group"
            >
              <platform.icon className="text-xl opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: platform.color }} />
              <span className="font-medium tracking-wide">{platform.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
