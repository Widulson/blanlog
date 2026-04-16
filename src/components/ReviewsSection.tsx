import { Star, Quote } from "lucide-react";
import SlideReveal from "./SlideReveal";
import bgReviews from "@/assets/bg-reviews.jpg";

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
    <section id="referencje" className="slide-section relative">
      <img
        src={bgReviews}
        alt="Logistics team meeting"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-6">
        <SlideReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.3em]">
              Referencje
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight">
              Co mówią <span className="text-gradient">partnerzy</span>
            </h2>
          </div>
        </SlideReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {featuredReviews.map((review, i) => (
            <SlideReveal key={i} delay={0.1 + i * 0.08}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/20 transition-all duration-500 group h-full flex flex-col">
                <Quote className="w-5 h-5 text-accent/20 mb-4 group-hover:text-accent/50 transition-colors" />
                <p className="text-white/80 mb-6 leading-relaxed flex-1 text-sm">
                  „{review.comment}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <p className="text-xs font-semibold text-white">{review.company}</p>
                    <p className="text-[10px] text-white/55 mt-0.5">{review.location} · {review.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-2.5 h-2.5 text-accent fill-accent" />
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
