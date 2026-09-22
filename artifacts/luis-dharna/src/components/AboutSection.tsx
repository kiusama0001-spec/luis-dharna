import { motion } from "framer-motion";
import { assetUrl } from "@/lib/asset-url";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 relative bg-background border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted border border-white/10">
              <img
                src={assetUrl("/images/luis-purehaze.jpg")}
                alt="Luis Dharma"
                className="object-cover object-top w-full h-full filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-primary tracking-[0.2em] uppercase text-sm mb-4 font-semibold">
              Semblanza Artística
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Desde León <br />
              para el mundo.
            </h3>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm tracking-widest uppercase font-medium bg-primary/5">
                Pop Urbano
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 text-muted-foreground text-sm tracking-widest uppercase font-medium bg-white/5">
                R&amp;B Latino
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 text-muted-foreground text-sm tracking-widest uppercase font-medium bg-white/5">
                León, Gto.
              </span>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                Luis Dharma es cantante y compositor de pop urbano originario de
                León, Guanajuato. Su propuesta musical integra sonidos urbanos
                contemporáneos con letras románticas y sensuales, desarrolladas
                desde un enfoque emocional, elegante y accesible para todo
                público.
              </p>
              <p>
                El proyecto destaca por su presencia escénica, la interpretación
                vocal y la capacidad de generar una conexión inmediata con el
                público. Su música se adapta de manera natural a ferias,
                conciertos y eventos culturales, conectando especialmente con
                público joven y adulto joven.
              </p>
              <p>
                Se presenta en formato cantante con pistas y DJ — un espectáculo
                ágil, profesional y de fácil implementación en escenarios de
                gran formato.
              </p>
            </div>

            <motion.div
              className="mt-12 grid grid-cols-2 gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm border border-white/5">
                <img
                  src={assetUrl("/images/backstage-1.jpg")}
                  alt="Luis Dharma backstage"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-sm border border-white/5">
                <img
                  src={assetUrl("/images/luis-sit.jpg")}
                  alt="Luis Dharma"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
