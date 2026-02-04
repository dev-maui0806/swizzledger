import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

interface CtaSectionProps {
  onTicketClick: () => void;
}

const CtaSection = ({ onTicketClick }: CtaSectionProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 mb-8">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm">MARCH 15–16, 2026 — BE THERE</span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            THE LARGEST
            <br />
            <span className="gradient-text text-glow">CRYPTO CONFERENCE IN CALIFORNIA</span>
          </h2>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Los Angeles, California</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="min-w-[200px]" onClick={onTicketClick}>
              GET FREE TICKET
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl" className="min-w-[200px]" onClick={scrollToTop}>
              BECOME A SPEAKER
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
