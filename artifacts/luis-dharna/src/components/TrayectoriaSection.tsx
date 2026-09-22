import { motion } from "framer-motion";
import { Mic2, Tv2, MapPin, Clock, Music2 } from "lucide-react";
import { assetUrl } from "@/lib/asset-url";

const MILESTONES = [
  {
    icon: MapPin,
    title: "Festival Internacional del Globo",
    subtitle: "León, Guanajuato",
    desc: "Presentación en uno de los festivales más importantes de México, ante miles de asistentes.",
  },
  {
    icon: Tv2,
    title: "Televisión Local",
    subtitle: "Guanajuato",
    desc: "Apariciones en programas de televisión local del estado, consolidando su visibilidad y nivel de exposición.",
  },
  {
    icon: Mic2,
    title: "Centros Comerciales y Foros",
    subtitle: "León y región",
    desc: "Presentaciones en centros comerciales y foros públicos de la región, conectando con públicos diversos.",
  },
];

const TECH = [
  { label: "Duración", value: "30 min (adaptable)", icon: Clock },
  { label: "Formato", value: "Cantante + Pistas + DJ", icon: Music2 },
  { label: "Audio", value: "Sistema P.A. estándar", icon: Mic2 },
];

export function TrayectoriaSection() {
  return (
    <section
      id="trayectoria"
      className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-primary tracking-[0.2em] uppercase text-sm mb-4 font-semibold">
            Trayectoria
          </h2>
          <h3 className="font-serif text-5xl md:text-7xl text-foreground leading-tight">
            Escenarios.
            <br />
            <span className="text-foreground/30">Experiencia real.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Milestones */}
          <div className="space-y-8">
            {MILESTONES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-sm border border-white/10 bg-white/3 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                    <item.icon
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="border-b border-white/5 pb-8 flex-1">
                  <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">
                    {item.subtitle}
                  </p>
                  <h4 className="text-foreground font-semibold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Formato Escénico */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-medium">
              Formato Escénico
            </h4>

            <div className="space-y-4 mb-12">
              {TECH.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center justify-between px-6 py-5 rounded-sm border border-white/8 bg-white/3"
                >
                  <div className="flex items-center gap-4">
                    <t.icon size={18} className="text-muted-foreground" />
                    <span className="text-muted-foreground text-sm uppercase tracking-widest">
                      {t.label}
                    </span>
                  </div>
                  <span className="text-foreground font-medium">{t.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-8 rounded-sm border border-primary/15 bg-primary/3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full" />
              <img
                src={assetUrl("/images/logo-dharma.jpg")}
                alt="Luis Dharma Logo"
                className="w-16 h-16 object-contain mb-6 opacity-80"
                style={{ mixBlendMode: "screen" }}
              />
              <blockquote className="font-serif text-xl text-foreground/80 leading-relaxed italic">
                "Una propuesta musical emergente de pop urbano que aporta
                actualidad, diversidad y conexión con audiencias jóvenes."
              </blockquote>
              <p className="text-xs uppercase tracking-widest text-primary mt-4 font-medium">
                Objetivo Artístico — EPK 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
