import heroImage from "@/assets/hero-logistics.jpg";
import { Phone, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Ocena", value: "5.0", sub: "158 ocen" },
  { label: "Płatności", value: "142", sub: "w terminie" },
  { label: "Komunikacja", value: "100%", sub: "najwyższa" },
  { label: "Opóźnienia", value: "0", sub: "brak" },
];

const HeroSection = () => {
  return (
    <section className="slide-section relative">
      <img
        src={heroImage}
        alt="Blan Logistics fleet on European highway"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-[85%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />

      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="grid md:grid-cols-5 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-2 h-2 rounded-full gradient-accent animate-pulse" />
              <span className="text-xs font-medium text-white/90 uppercase tracking-widest">
                Bardzo dobry płatnik
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-6"
            >
              Blan
              <br />
              <span className="text-gradient">Logistics</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-white/55 max-w-md mb-10 leading-relaxed"
            >
              Profesjonalna spedycja i transport międzynarodowy. Od 2015 roku z najwyższą oceną na rynku.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:+48739493974"
                className="inline-flex items-center gap-2 gradient-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-all glow-accent"
              >
                <Phone className="w-4 h-4" />
                Zadzwoń do nas
              </a>
              <a
                href="mailto:faktury@blanlog.com"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 font-medium px-7 py-3.5 rounded-xl hover:bg-white/15 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
                faktury@blanlog.com
              </a>
            </motion.div>
          </div>

          {/* Right stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:col-span-2 grid grid-cols-2 gap-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                className="bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-500"
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">{stat.label}</p>
                <p className="text-xs text-white/30 mt-0.5">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 uppercase tracking-widest">Przewiń</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
