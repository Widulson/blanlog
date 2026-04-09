import { Star, Quote } from "lucide-react";
import SlideReveal from "./SlideReveal";

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
    company: "Global Trans Service sp. z o.o.",
    location: "PL, Rzeszów",
    date: "31.10.2025",
    comment: "Współpraca przebiegła wzorowo – pełna dostępność i terminowa płatność",
  },
];

const ReviewsSection = () => {
  return (
    <section id="referencje" className="slide-section grid-bg">
      <div className="container mx-auto px-6">
        <SlideReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
              ── Referencje
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 tracking-tight">
              Co mówią <span className="text-gradient">partnerzy</span>
            </h2>
          </div>
        </SlideReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {featuredReviews.map((review, i) => (
            <SlideReveal key={i} delay={0.1 + i * 0.08}>
              <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-all duration-500 group h-full flex flex-col">
                <Quote className="w-5 h-5 text-primary/20 mb-4 group-hover:text-primary/50 transition-colors" />
                <p className="text-foreground/70 mb-6 leading-relaxed flex-1 text-sm">
                  „{review.comment}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div>
                    <p className="text-xs font-semibold text-foreground">{review.company}</p>
                    <p className="text-[10px] text-foreground/30 mt-0.5">{review.location} · {review.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-2.5 h-2.5 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </SlideReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
