import { FaInstagram, FaSpotify } from "react-icons/fa";
import { FaTiktok, FaYoutube } from "react-icons/fa6";
import { assetUrl } from "@/lib/asset-url";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020202] pt-20 pb-32 md:pb-40 border-t border-white/5 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 border-b border-white/10 pb-12">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <img
                src={assetUrl("/images/logo-dharma.jpg")}
                alt="Luis Dharma Logo"
                className="w-10 h-10 object-contain"
                style={{ mixBlendMode: "screen" }}
              />
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                LUIS<span className="text-primary">DHARMA</span>
              </h2>
            </div>
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs">
              León, Guanajuato • México • Pop Urbano / R&amp;B Latino
            </p>
          </div>

          <div className="flex gap-4">
            {[
              {
                icon: FaInstagram,
                label: "Instagram",
                href: "https://www.instagram.com/luisdharma/",
              },
              {
                icon: FaSpotify,
                label: "Spotify",
                href: "https://open.spotify.com/artist/0hpYHjVPUqnJNXlhe4rgGu",
              },
              {
                icon: FaTiktok,
                label: "TikTok",
                href: "https://www.tiktok.com/@luisdharmamusic",
              },
              {
                icon: FaYoutube,
                label: "YouTube",
                href: "https://www.youtube.com/@Luisdharma",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/50">
          <p>
            &copy; {currentYear} Luis Dharma. Todos los derechos reservados.
          </p>
          <a
            href="mailto:luisdharma.booking@gmail.com"
            className="hover:text-primary transition-colors tracking-wide"
          >
            luisdharma.booking@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
