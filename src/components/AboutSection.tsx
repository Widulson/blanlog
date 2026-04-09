import { Building2, Calendar, Shield, CreditCard } from "lucide-react";

const stats = [
  { icon: Building2, label: "NIP", value: "PL 1182114447" },
  { icon: Shield, label: "REGON", value: "362874224" },
  { icon: CreditCard, label: "KRS", value: "0000583442" },
  { icon: Calendar, label: "Działalność od", value: "02.11.2015" },
];

const AboutSection = () => {
  return (
    <section id="o-nas" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">O firmie</span>
            <h2 className="text-4xl font-bold text-foreground mt-3 mb-6">
              Ponad 10 lat doświadczenia w logistyce
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Blan Logistics Sp. z o.o. to firma spedycyjna z siedzibą w Warszawie, działająca na rynku od 2015 roku. Specjalizujemy się w transporcie międzynarodowym, oferując niezawodne usługi logistyczne na terenie całej Europy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nasza doskonała ocena 5.0/5.0 na platformie Trans.eu oraz status <strong className="text-foreground">„Bardzo dobry płatnik"</strong> potwierdzają najwyższy standard naszych usług i rzetelność w rozliczeniach.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow"
              >
                <stat.icon className="w-6 h-6 text-accent mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
