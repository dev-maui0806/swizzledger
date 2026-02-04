import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  onTicketClick: () => void;
}

const testimonials = [
  {
    quote: "The most professional crypto event I've attended. The speakers were incredible and the networking opportunities were unmatched.",
    name: "Thomas M.",
    role: "CEO, Blockchain Solutions Inc.",
  },
  {
    quote: "A must for anyone serious about crypto. The quality of discussions and the caliber of attendees were top-notch.",
    name: "Anna S.",
    role: "Head of Investments, Digital Wealth Fund",
  },
  {
    quote: "Ledger Conference sets the standard. The content was in-depth, the speakers were engaging, and the gala dinner was legendary.",
    name: "Markus R.",
    role: "CTO, Crypto Innovations",
  },
  {
    quote: "I've been to crypto events worldwide and Ledger Conference stands out for its organization and the quality of its attendees. Highly recommended.",
    name: "David K.",
    role: "Founder, DeFi Protocol",
  },
];

const TestimonialsSection = ({ onTicketClick }: TestimonialsSectionProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            WHAT ATTENDEES <span className="gradient-text">SAY</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="gradient-border p-6 rounded-2xl glass hover:scale-[1.02] transition-transform duration-300"
            >
              <Quote className="w-8 h-8 text-primary/50 mb-4" />
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={onTicketClick}>
            GET FREE TICKET
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
