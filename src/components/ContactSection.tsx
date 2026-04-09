import { Phone, Mail, MapPin, Building } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Kontakt</span>
            <h2 className="text-4xl font-bold text-foreground mt-3 mb-6">Skontaktuj się z nami</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Jesteśmy do dyspozycji. Skontaktuj się z nami, aby omówić szczegóły współpracy transportowej.
            </p>

            <div className="space-y-6">
              <a href="tel:+48739493974" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="text-lg font-semibold text-foreground">(+48) 739 493 974</p>
                </div>
              </a>
              <a href="mailto:faktury@blanlog.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-semibold text-foreground">faktury@blanlog.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adres</p>
                  <p className="text-lg font-semibold text-foreground">Jagiellońska 88/51L lok.121</p>
                  <p className="text-sm text-muted-foreground">03-215 Warszawa, Polska</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Dane rejestrowe</h3>
            <div className="space-y-4">
              {[
                { icon: Building, label: "Nazwa firmy", value: "Blan Logistics Sp. z o.o." },
                { label: "NIP", value: "PL 1182114447" },
                { label: "REGON", value: "362874224" },
                { label: "KRS", value: "0000583442" },
                { label: "Działalność od", value: "02.11.2015" },
                { label: "Na Trans.eu od", value: "06.08.2020" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
