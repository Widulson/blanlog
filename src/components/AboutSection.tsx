import { Building2, Calendar, Shield, CreditCard, MapPin, Route, Clock, TrendingUp } from "lucide-react";
import SlideReveal from "./SlideReveal";
import { motion } from "framer-motion";
import bgAbout from "@/assets/bg-about.jpg";

const stats = [
  { icon: Building2, label: "NIP", value: "PL 1182114447" },
  { icon: Shield, label: "REGON", value: "362874224" },
  { icon: CreditCard, label: "KRS", value: "0000583442" },
  { icon: Calendar, label: "Działalność od", value: "02.11.2015" },
];

const milestones = [
  { icon: MapPin, value: "30+", label: "krajów w Europie" },
  { icon: Route, value: "1M+", label: "km rocznie" },
  { icon: Clock, value: "24/7", label: "dostępność" },
  { icon: TrendingUp, value: "100%", label: "terminowość" },
];

const AboutSection = () => {
  return (
    <section id="o-nas" className="slide-section relative">
      <img
        src={bgAbout}
        alt="European highway with logistics fleet"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <SlideReveal>
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.3em]">
                O firmie
              </span>
            </SlideReveal>
            <SlideReveal delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-4 tracking-tight leading-[1.1]">
                Twój ładunek.
                <br />
                <span className="text-gradient">Nasza droga.</span>
              </h2>
            </SlideReveal>
            <SlideReveal delay={0.15}>
              <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-8">
                Od Warszawy po krańce Europy — od 2015 roku
              </p>
            </SlideReveal>
            <SlideReveal delay={0.2}>
              <p className="text-white/60 leading-relaxed mb-6 text-lg">
                Każdy kilometr to obietnica dotrzymana na czas. Blan Logistics to spedycja, 
                która łączy precyzję z niezawodnością — bo w transporcie nie ma miejsca na „prawie".
              </p>
            </SlideReveal>
            <SlideReveal delay={0.3}>
              <p className="text-white/60 leading-relaxed mb-10">
                Ocena <strong className="text-white">5.0/5.0</strong> na Trans.eu to nie tylko liczby — 
                to zaufanie budowane z każdą dostawą.
              </p>
            </SlideReveal>

            {/* Milestones row */}
            <SlideReveal delay={0.4}>
              <div className="grid grid-cols-4 gap-3">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-center"
                  >
                    <m.icon className="w-4 h-4 text-accent/60 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white tracking-tight">{m.value}</p>
                    <p className="text-[10px] text-white/35 uppercase tracking-wider mt-1">{m.label}</p>
                  </motion.div>
                ))}
              </div>
            </SlideReveal>
          </div>

          <div className="space-y-4">
            {/* Motto card */}
            <SlideReveal direction="right">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden">
                <div className="absolute top-4 right-4 text-[80px] leading-none font-bold text-white/5 select-none">"</div>
                <p className="text-white/70 italic text-lg leading-relaxed relative z-10">
                  Każdy ładunek to czyjaś obietnica. My dotrzymujemy jej za Was.
                </p>
                <p className="text-accent font-semibold text-sm mt-4 relative z-10">— Zespół Blan Logistics</p>
              </div>
            </SlideReveal>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <SlideReveal key={stat.label} delay={0.2 + i * 0.1} direction="right">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-500 group">
                    <stat.icon className="w-5 h-5 text-accent/60 mb-4 group-hover:text-accent transition-colors" />
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-white tracking-tight">{stat.value}</p>
                  </div>
                </SlideReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
