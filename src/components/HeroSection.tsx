import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

interface HeroSectionProps {
  onTicketClick: () => void;
}

const HeroSection = ({ onTicketClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Countdown section */}
        <div className="text-center mb-8">
          <CountdownTimer />
        </div>

        {/* Date badge */}
        <div className="flex justify-center mb-8">
          <span className="glass px-4 py-2 rounded-full text-sm text-muted-foreground border border-white/10">
            MARCH 15–16, 2026 | LOS ANGELES, CALIFORNIA
          </span>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-foreground">THE LARGEST</span>
            <br />
            <span className="gradient-text text-glow">CRYPTO CONFERENCE IN CALIFORNIA</span>
          </h1>
          <div className="inline-block glass px-6 py-3 rounded-xl border border-primary/30">
            <p className="text-primary font-semibold">
              ⚡ Exclusive for Ledger users
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
          {[
            { value: "3,000+", label: "Attendees" },
            { value: "500+", label: "Companies" },
            { value: "80+", label: "Speakers" },
            { value: "50+", label: "Sponsors" },
            { value: "$1M+", label: "VC funding" },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="group" onClick={onTicketClick}>
            GET TICKET
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
