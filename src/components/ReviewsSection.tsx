import { Star, Quote } from "lucide-react";

const featuredReviews = [
  {
    company: "Bik Transport-Logistyka s.c.",
    location: "PL, Warszawa",
    date: "08.04.2026",
    comment: "Bardzo dobra współpraca z Panią Magdaleną, płatność 2 dni przed terminem!",
  },
  {
    company: "Stanean Srl",
    location: "RO, Carei",
    date: "01.04.2026",
    comment: "Super Współpraca, polecam",
  },
  {
    company: "Habe Logistics Sp. z o.o.",
    location: "PL, Turek",
    date: "17.03.2026",
    comment: "Excellent!",
  },
  {
    company: "DEKOSTA Kostiantyn Dieiev",
    location: "PL, Jelenia Góra",
    date: "18.02.2026",
    comment: "POLECAM!!!",
  },
  {
    company: "\"ARKON\" Jan Kabac",
    location: "PL, Białystok",
    date: "18.02.2026",
    comment: "Wszystko ok! POLECAM!",
  },
  {
    company: "Danielli Transporte Joanna Sroga",
    location: "PL, Poraj",
    date: "12.11.2025",
    comment: "Wszystko profesjonalnie. Polecamy współpracę !!!",
  },
  {
    company: "Global Trans Service sp. z o.o.",
    location: "PL, Rzeszów",
    date: "31.10.2025",
    comment: "Współpraca przebiegła wzorowo – pełna dostępność i terminowa płatność",
  },
  {
    company: "Clermont Express Sp. z o.o.",
    location: "PL, Warszawa",
    date: "07.10.2025",
    comment: "Kontrahent godny polecenia – uczciwy i terminowy.",
  },
  {
    company: "Stanislav Barnet",
    location: "CZ, Holice",
    date: "19.11.2025",
    comment: "Płatność w terminie. Dobry kontakt. Polecam współpracę",
  },
];

const ReviewsSection = () => {
  return (
    <section id="referencje" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Referencje</span>
          <h2 className="text-4xl font-bold text-foreground mt-3 mb-4">Co mówią nasi partnerzy</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wybrane opinie od firm, z którymi mamy przyjemność współpracować
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredReviews.map((review, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow group"
            >
              <Quote className="w-6 h-6 text-accent/40 mb-3 group-hover:text-accent transition-colors" />
              <p className="text-foreground mb-4 leading-relaxed italic">
                „{review.comment}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.company}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 text-accent fill-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
