import { Star, CheckCircle2, Clock, MessageCircle, Truck } from "lucide-react";
import SlideReveal from "./SlideReveal";
import bgRatings from "@/assets/bg-ratings.jpg";

const metrics = [
  { icon: MessageCircle, label: "Komunikacja", value: "100%" },
  { icon: Truck, label: "Zgodność ładunku", value: "100%" },
  { icon: Clock, label: "Oczekiwanie na załadunek", value: "100%" },
  { icon: Clock, label: "Oczekiwanie na rozładunek", value: "100%" },
];

const paymentStats = [
  { value: "570", label: "w terminie", color: "text-accent" },
  { value: "0", label: "opóźnień", color: "text-white" },
  { value: "0", label: "problemów", color: "text-white" },
];

const RatingsSection = () => {
  return (
    <section id="oceny" className="slide-section relative">
      <img
        src={bgRatings}
        alt="Business handshake in logistics warehouse"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left: Big score */}
          <div className="md:col-span-5">
            <SlideReveal>
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.3em]">
                Oceny i zaufanie
              </span>
            </SlideReveal>

            <SlideReveal delay={0.1}>
              <div className="mt-8 flex items-end gap-3">
                <span className="text-[120px] md:text-[160px] font-bold text-white leading-none tracking-tighter">
                  5.0
                </span>
                <Star className="w-10 h-10 text-accent fill-accent mb-6" />
              </div>
              <p className="text-white/55 text-lg -mt-2">158 ocen od 147 firm</p>
            </SlideReveal>

            <SlideReveal delay={0.2}>
              <div className="mt-10 flex gap-8">
                {paymentStats.map((s) => (
                  <div key={s.label}>
                    <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
                    <p className="text-xs text-white/55 uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </SlideReveal>
          </div>

          {/* Right: Metric cards */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <SlideReveal key={m.label} delay={0.2 + i * 0.1} direction="right">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-accent/30 transition-all duration-500 group">
                  <div className="flex items-center justify-between mb-6">
                    <m.icon className="w-5 h-5 text-accent/50 group-hover:text-accent transition-colors" />
                    <CheckCircle2 className="w-4 h-4 text-accent/30" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-1">{m.value}</p>
                  <p className="text-xs text-white/55 uppercase tracking-wider">{m.label}</p>
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
