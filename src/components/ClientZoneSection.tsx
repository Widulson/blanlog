import { useState } from "react";
import { Send, Truck, Snowflake, AlertTriangle, Globe, CheckCircle } from "lucide-react";
import SlideReveal from "./SlideReveal";
import bgClientZone from "@/assets/bg-client-zone.jpg";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Globe, text: "Działamy na terytorium całej Europy" },
  { icon: Truck, text: "Transport LTL i FTL — elastycznie dopasowany" },
  { icon: Snowflake, text: "Transport chłodniczy i platformy" },
  { icon: AlertTriangle, text: "Przewóz towarów niebezpiecznych ADR" },
  { icon: CheckCircle, text: "Indywidualne podejście do każdego zlecenia" },
];

const ClientZoneSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    relation: "",
    cargo: "",
    date: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Wiadomość wysłana!",
        description: "Skontaktujemy się z Tobą najszybciej jak to możliwe.",
      });
      setFormData({ relation: "", cargo: "", date: "", phone: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="strefa-klienta" className="slide-section relative">
      <img
        src={bgClientZone}
        alt="Modern logistics warehouse with trucks"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — benefits */}
          <div>
            <SlideReveal>
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.3em]">
                Strefa klienta
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 tracking-tight">
                Twój transport,
                <br />
                <span className="text-gradient">nasza specjalność</span>
              </h2>
              <p className="text-white/75 text-lg leading-relaxed max-w-lg mb-10">
                Daj nam poznać swoje potrzeby, a my przygotujemy dopasowaną ofertę.
                Każde zlecenie traktujemy indywidualnie — od pierwszego kontaktu
                po dostawę.
              </p>
            </SlideReveal>

            <div className="space-y-5">
              {benefits.map((b, i) => (
                <SlideReveal key={b.text} delay={0.1 + i * 0.08}>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <b.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-white/80 font-medium text-sm">{b.text}</span>
                  </div>
                </SlideReveal>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <SlideReveal delay={0.3} direction="right">
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-5"
            >
              <h3 className="text-xs font-semibold text-accent uppercase tracking-[0.3em] mb-2">
                Zapytaj o ofertę
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                  placeholder="Relacja (np. Warszawa → Berlin)"
                  required
                  maxLength={200}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 transition-colors"
                />
                <input
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  placeholder="Towar"
                  required
                  maxLength={200}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Data transportu"
                  type="date"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 transition-colors [color-scheme:dark]"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Numer kontaktowy"
                  type="tel"
                  required
                  maxLength={20}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Adres e-mail"
                type="email"
                required
                maxLength={255}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 transition-colors"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Treść wiadomości"
                rows={4}
                required
                maxLength={2000}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 gradient-accent text-accent-foreground font-semibold px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity glow-accent disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {sending ? "Wysyłanie..." : "Wyślij zapytanie"}
              </button>
            </form>
          </SlideReveal>
        </div>
      </div>
    </section>
  );
};

export default ClientZoneSection;
