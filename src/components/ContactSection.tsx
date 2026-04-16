import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SlideReveal from "./SlideReveal";
import bgContact from "@/assets/bg-contact.jpg";

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "(+48) 739 493 974",
    href: "tel:+48739493974",
  },
  {
    icon: Mail,
    label: "Email",
    value: "faktury@blanlog.com",
    href: "mailto:faktury@blanlog.com",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Jagiellońska 88/51L lok.121",
    sub: "03-215 Warszawa, Polska",
  },
  {
    icon: Clock,
    label: "Godziny otwarcia",
    value: "Pn – Pt: 8:00 – 16:00",
  },
];

const registryData = [
  { label: "Nazwa firmy", value: "Blan Logistics Sp. z o.o." },
  { label: "NIP", value: "PL 1182114447" },
  { label: "REGON", value: "362874224" },
  { label: "KRS", value: "0000583442" },
  { label: "Działalność od", value: "02.11.2015" },
  { label: "Na Trans.eu od", value: "06.08.2020" },
];

const ContactSection = () => {
  return (
    <section id="kontakt" className="slide-section relative">
      <img
        src={bgContact}
        alt="Modern logistics office at dusk"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <SlideReveal>
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.3em]">
                Kontakt
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-12 tracking-tight">
                Porozmawiajmy
                <br /><span className="text-gradient">o współpracy</span>
              </h2>
            </SlideReveal>

            <div className="space-y-8">
              {contactItems.map((item, i) => (
                <SlideReveal key={item.label} delay={0.1 + i * 0.1}>
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-accent/40 transition-all duration-500">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/55 uppercase tracking-[0.2em]">{item.label}</p>
                        <p className="text-lg font-semibold text-white mt-0.5">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/55 uppercase tracking-[0.2em]">{item.label}</p>
                        <p className="text-lg font-semibold text-white mt-0.5">{item.value}</p>
                        {item.sub && <p className="text-xs text-white/55 mt-0.5">{item.sub}</p>}
                      </div>
                    </div>
                  )}
                </SlideReveal>
              ))}
            </div>
          </div>

          <SlideReveal delay={0.3} direction="right">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-xs font-semibold text-accent uppercase tracking-[0.3em] mb-8">
                Dane rejestrowe
              </h3>
              <div className="space-y-0">
                {registryData.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-4 border-b border-white/10 last:border-0"
                  >
                    <span className="text-sm text-white/55">{item.label}</span>
                    <span className="text-sm font-semibold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </SlideReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
