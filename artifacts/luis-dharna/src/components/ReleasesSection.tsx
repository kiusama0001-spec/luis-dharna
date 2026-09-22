import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { FaSpotify } from "react-icons/fa";
import { assetUrl } from "@/lib/asset-url";

const RELEASES = [
  {
    id: 1,
    title: "Diosa",
    feat: "ft. Mvnni & Hr Records",
    type: "Single",
    year: "2024",
    cover: assetUrl("/images/cover-1.png"),
    spotify: "https://open.spotify.com/artist/0hpYHjVPUqnJNXlhe4rgGu",
  },
  {
    id: 2,
    title: "Me Enamoré De Ti",
    feat: "",
    type: "Single",
    year: "2024",
    cover: assetUrl("/images/cover-2.png"),
    spotify: "https://open.spotify.com/artist/0hpYHjVPUqnJNXlhe4rgGu",
  },
  {
    id: 3,
    title: "Hipnotizado",
    feat: "",
    type: "Single",
    year: "2024",
    cover: assetUrl("/images/gallery-2.png"),
    spotify: "https://open.spotify.com/artist/0hpYHjVPUqnJNXlhe4rgGu",
  },
  {
    id: 4,
    title: "Te Soñé",
    feat: "",
    type: "Single",
    year: "2025",
    cover: assetUrl("/images/gallery-4.png"),
    spotify: "https://open.spotify.com/artist/0hpYHjVPUqnJNXlhe4rgGu",
  },
];

export function ReleasesSection() {
  return (
    <section
      id="releases"
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-primary tracking-[0.2em] uppercase text-sm mb-4 font-semibold">
            Discografía
          </h2>
          <h3 className="font-serif text-5xl md:text-7xl text-foreground">
            Canciones.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {RELEASES.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square mb-5 overflow-hidden rounded-sm bg-muted border border-white/5">
                <img
                  src={release.cover}
                  alt={release.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/40">
                  <a
                    href={release.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full border border-[#1DB954]/60 flex items-center justify-center backdrop-blur-sm bg-black/20 text-[#1DB954] hover:bg-[#1DB954] hover:text-black transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </a>
                </div>
              </div>

              <div className="border-b border-white/10 pb-5">
                <p className="text-primary uppercase tracking-widest text-xs mb-1 font-medium">
                  {release.type} • {release.year}
                </p>
                <h4 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors mb-1">
                  {release.title}
                </h4>
                {release.feat && (
                  <p className="text-muted-foreground text-xs tracking-wide">
                    {release.feat}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center"
        >
          <a
            href="https://open.spotify.com/artist/0hpYHjVPUqnJNXlhe4rgGu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#1DB954]/30 text-[#1DB954] hover:bg-[#1DB954] hover:text-black font-semibold tracking-wide text-sm transition-all duration-300 hover:scale-105"
          >
            <FaSpotify size={18} />
            Ver discografía completa en Spotify
          </a>
        </motion.div>
      </div>
    </section>
  );
}
