import heroImage from "@/assets/hero-logistics.jpg";
import { Phone, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Blan Logistics warehouse and fleet"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full gradient-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              TransRisk: Bardzo dobry płatnik
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight leading-[1.1] mb-6">
            Blan Logistics
            <span className="block text-accent text-3xl md:text-4xl font-medium mt-2">
              Sp. z o.o.
            </span>
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-lg mb-10 leading-relaxed">
            Profesjonalna spedycja i logistyka. Działamy od 2015 roku, obsługując transport międzynarodowy z najwyższą oceną na rynku.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+48739493974"
              className="inline-flex items-center gap-2 gradient-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń do nas
            </a>
            <a
              href="mailto:faktury@blanlog.com"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground font-medium px-6 py-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              faktury@blanlog.com
            </a>
          </div>
        </div>
      </div>
      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border">
        <div className="container mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">5.0</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Ocena ogólna</p>
              <p className="text-xs text-muted-foreground">158 ocen / 147 firm</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <span className="text-green-700 font-bold text-sm">142</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">W terminie</p>
              <p className="text-xs text-muted-foreground">0 opóźnień</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-sm">100%</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Komunikacja</p>
              <p className="text-xs text-muted-foreground">Najwyższa ocena</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">Warszawa</p>
              <p className="text-xs text-muted-foreground">Jagiellońska 88/51L</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
