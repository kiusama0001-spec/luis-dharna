import { motion } from "framer-motion";
import { assetUrl } from "@/lib/asset-url";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background with noise overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[center_top] bg-no-repeat opacity-55"
        style={{
          backgroundImage: `url("${assetUrl("/images/luis-walk.jpg")}")`,
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div
        className="absolute inset-0 z-20 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-30 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
              León, Guanajuato
            </span>
            <span className="text-white/20">•</span>
            <span className="text-white/50 tracking-[0.2em] uppercase text-xs font-medium">
              Pop Urbano / R&amp;B Latino
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter text-foreground font-bold mb-8">
            LUIS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">
              DHARMA
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Pop Urbano con alma. R&amp;B que se siente en la piel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
