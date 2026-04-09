import { Star, CheckCircle2, Clock, MessageCircle, Truck } from "lucide-react";

const metrics = [
  { icon: MessageCircle, label: "Komunikacja", value: "100%" },
  { icon: Truck, label: "Zgodność ładunku", value: "100%" },
  { icon: Clock, label: "Oczekiwanie na załadunek", value: "100%" },
  { icon: Clock, label: "Oczekiwanie na rozładunek", value: "100%" },
];

const RatingsSection = () => {
  return (
    <section id="oceny" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Oceny i zaufanie</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">Perfekcyjna ocena od naszych partnerów</h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">
            Nasze wyniki na platformie Trans.eu mówią same za siebie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Big score */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-baseline gap-2 mb-2">
              <span className="text-8xl font-bold">5.0</span>
              <Star className="w-8 h-8 text-accent fill-accent" />
            </div>
            <p className="text-primary-foreground/60 text-lg">158 ocen od 147 firm</p>
            <div className="mt-6 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-primary-foreground/80">
                <strong className="text-primary-foreground">142</strong> płatności w terminie
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-primary-foreground/80">
                <strong className="text-primary-foreground">0</strong> opóźnień w płatnościach
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-primary-foreground/80">
                <strong className="text-primary-foreground">0</strong> problemów z płatnością
              </span>
            </div>
          </div>

          {/* Metrics */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6"
              >
                <m.icon className="w-5 h-5 text-accent mb-3" />
                <p className="text-sm text-primary-foreground/60 mb-1">{m.label}</p>
                <p className="text-3xl font-bold">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
