import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TrayectoriaSection } from "@/components/TrayectoriaSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { SpotifySection } from "@/components/SpotifySection";
import { GallerySection } from "@/components/GallerySection";
import { StreamingSection } from "@/components/StreamingSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Navigation } from "@/components/Navigation";
import { CatCursor } from "@/components/CatCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <CatCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TrayectoriaSection />
      <PerformanceSection />
      <SpotifySection />
      <GallerySection />
      <StreamingSection />
      <ContactSection />
      <FooterSection />
      <AudioPlayer />
    </main>
  );
}
