import { Star, CheckCircle2, Clock, MessageCircle, Truck } from "lucide-react";
import SlideReveal from "./SlideReveal";

const metrics = [
  { icon: MessageCircle, label: "Komunikacja", value: "100%" },
  { icon: Truck, label: "Zgodność ładunku", value: "100%" },
  { icon: Clock, label: "Oczekiwanie na załadunek", value: "100%" },
  { icon: Clock, label: "Oczekiwanie na rozładunek", value: "100%" },
];

const paymentStats = [
  { value: "570", label: "w terminie", color: "text-primary" },
  { value: "0", label: "opóźnień", color: "text-foreground" },
  { value: "0", label: "problemów", color: "text-foreground" },
];

const RatingsSection = () => {
  return (
    <section id="oceny" className="slide-section relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/2" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left: Big score */}
          <div className="md:col-span-5">
            <SlideReveal>
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
                Oceny i zaufanie
              </span>
            </SlideReveal>

            <SlideReveal delay={0.1}>
              <div className="mt-8 flex items-end gap-3">
                <span className="text-[120px] md:text-[160px] font-bold text-foreground leading-none tracking-tighter">
                  5.0
                </span>
                <Star className="w-10 h-10 text-primary fill-primary mb-6" />
              </div>
              <p className="text-foreground/30 text-lg -mt-2">158 ocen od 147 firm</p>
            </SlideReveal>

            <SlideReveal delay={0.2}>
              <div className="mt-10 flex gap-8">
                {paymentStats.map((s) => (
                  <div key={s.label}>
                    <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
                    <p className="text-xs text-foreground/30 uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </SlideReveal>
          </div>

          {/* Right: Metric cards */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <SlideReveal key={m.label} delay={0.2 + i * 0.1} direction="right">
                <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-7 hover:border-primary/30 transition-all duration-500 group">
                  <div className="flex items-center justify-between mb-6">
                    <m.icon className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors" />
                    <CheckCircle2 className="w-4 h-4 text-primary/30" />
                  </div>
                  <p className="text-4xl font-bold text-foreground mb-1">{m.value}</p>
                  <p className="text-xs text-foreground/30 uppercase tracking-wider">{m.label}</p>
                </div>
              </SlideReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
