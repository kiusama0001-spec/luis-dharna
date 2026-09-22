import { motion } from "framer-motion";
import { FaInstagram, FaSpotify } from "react-icons/fa";
import { FaTiktok, FaYoutube } from "react-icons/fa6";
import { Mail, MapPin, Mic2 } from "lucide-react";

const SOCIALS = [
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/luisdharma/", color: "#E1306C" },
  { icon: FaSpotify, label: "Spotify", href: "https://open.spotify.com/artist/0hpYHjVPUqnJNXlhe4rgGu", color: "#1DB954" },
  { icon: FaTiktok, label: "TikTok", href: "https://www.tiktok.com/@luisdharmamusic", color: "#ffffff" },
  { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@Luisdharma", color: "#FF0000" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary tracking-[0.2em] uppercase text-sm mb-4 font-semibold">Contacto</h2>
            <h3 className="font-serif text-5xl md:text-6xl text-foreground mb-10 leading-tight">
              Trabajemos<br />juntos.
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-sm border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                  <Mail size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-medium">Booking &amp; Contrataciones</p>
                  <a
                    href="mailto:luisdharma.booking@gmail.com"
                    className="text-foreground text-lg hover:text-primary transition-colors font-medium"
                  >
                    luisdharma.booking@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-medium">Base</p>
                  <p className="text-foreground text-lg font-medium">León, Guanajuato — México</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mic2 size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-medium">Género</p>
                  <p className="text-foreground text-lg font-medium">Pop Urbano / R&amp;B Latino</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-medium">Sígueme</h4>

            <div className="space-y-3">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center justify-between px-6 py-5 rounded-sm border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <s.icon size={22} style={{ color: s.color }} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-foreground font-medium tracking-wide">{s.label}</span>
                  </div>
                  <span className="text-muted-foreground text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Abrir →</span>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="mailto:luisdharma.booking@gmail.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center justify-center gap-3 w-full py-5 rounded-sm border border-primary/40 text-primary hover:bg-primary hover:text-black font-semibold tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,150,20,0.2)]"
            >
              <Mail size={18} />
              Enviar mensaje de booking
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
