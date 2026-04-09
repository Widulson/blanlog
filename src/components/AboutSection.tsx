import { Building2, Calendar, Shield, CreditCard } from "lucide-react";
import SlideReveal from "./SlideReveal";

const stats = [
  { icon: Building2, label: "NIP", value: "PL 1182114447" },
  { icon: Shield, label: "REGON", value: "362874224" },
  { icon: CreditCard, label: "KRS", value: "0000583442" },
  { icon: Calendar, label: "Działalność od", value: "02.11.2015" },
];

const AboutSection = () => {
  return (
    <section id="o-nas" className="slide-section grid-bg">
      {/* Accent line */}
      <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden md:block" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <SlideReveal>
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
                ── O firmie
              </span>
            </SlideReveal>
            <SlideReveal delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-8 tracking-tight leading-[1.1]">
                Ponad <span className="text-gradient">10 lat</span>
                <br />doświadczenia
              </h2>
            </SlideReveal>
            <SlideReveal delay={0.2}>
              <p className="text-foreground/40 leading-relaxed mb-6 text-lg">
                Firma spedycyjna z siedzibą w Warszawie, specjalizująca się w transporcie międzynarodowym na terenie całej Europy.
              </p>
            </SlideReveal>
            <SlideReveal delay={0.3}>
              <p className="text-foreground/40 leading-relaxed">
                Ocena <strong className="text-foreground">5.0/5.0</strong> na Trans.eu oraz status{" "}
                <strong className="text-primary">„Bardzo dobry płatnik"</strong> potwierdzają najwyższy standard usług.
              </p>
            </SlideReveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <SlideReveal key={stat.label} delay={0.2 + i * 0.1} direction="right">
                <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group">
                  <stat.icon className="w-5 h-5 text-primary/60 mb-4 group-hover:text-primary transition-colors" />
                  <p className="text-[10px] text-foreground/30 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                  <p className="text-lg font-bold text-foreground tracking-tight">{stat.value}</p>
                </div>
              </SlideReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
