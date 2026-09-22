import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { assetUrl } from "@/lib/asset-url";

const IMAGES = [
  {
    src: assetUrl("/images/luis-walk.jpg"),
    alt: "Luis Dharma",
    aspect: "aspect-[3/4]",
  },
  {
    src: assetUrl("/images/live-3.jpg"),
    alt: "Luis Dharma en vivo",
    aspect: "aspect-square",
  },
  {
    src: assetUrl("/images/luis-shades.jpg"),
    alt: "Luis Dharma",
    aspect: "aspect-square",
  },
  {
    src: assetUrl("/images/live-2.jpg"),
    alt: "Luis Dharma en escenario",
    aspect: "aspect-[3/4]",
  },
  {
    src: assetUrl("/images/coca-1.jpg"),
    alt: "Luis Dharma Coca-Cola",
    aspect: "aspect-[3/4]",
  },
  {
    src: assetUrl("/images/luis-sit.jpg"),
    alt: "Luis Dharma",
    aspect: "aspect-square",
  },
];

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="py-32 bg-[#050505] relative overflow-hidden"
    >
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <motion.img
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={lightbox}
            alt="Luis Dharma"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-8 text-white/60 hover:text-white text-3xl font-light"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
        </motion.div>
      )}

      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-7xl text-foreground/20 uppercase tracking-tighter">
            Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div style={{ y: y1 }} className="space-y-6 md:space-y-8">
            {[IMAGES[0], IMAGES[3]].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`${img.aspect} rounded-sm overflow-hidden border border-white/5 relative group cursor-pointer`}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white/80 text-xs uppercase tracking-widest">
                    Ver
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="space-y-6 md:space-y-8 md:mt-16">
            {[IMAGES[1], IMAGES[4]].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                className={`${img.aspect} rounded-sm overflow-hidden border border-white/5 relative group cursor-pointer`}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white/80 text-xs uppercase tracking-widest">
                    Ver
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div style={{ y: y2 }} className="space-y-6 md:space-y-8">
            {[IMAGES[2], IMAGES[5]].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                className={`${img.aspect} rounded-sm overflow-hidden border border-white/5 relative group cursor-pointer`}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white/80 text-xs uppercase tracking-widest">
                    Ver
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
