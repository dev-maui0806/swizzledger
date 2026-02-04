import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onTicketClick: () => void;
}

const AboutSection = ({ onTicketClick }: AboutSectionProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            FREE TICKETS NOW AVAILABLE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            WHERE CRYPTO MEETS <span className="gradient-text">OPPORTUNITY</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            With <span className="text-foreground font-semibold">3,000+ attendees</span> and{" "}
            <span className="text-foreground font-semibold">500+ companies</span>, the Ledger Conference is where{" "}
            <span className="text-foreground font-semibold">education</span>,{" "}
            <span className="text-foreground font-semibold">innovation</span>, and{" "}
            <span className="text-foreground font-semibold">valuable connections</span> come together to shape the future of crypto and blockchain.
          </p>
          <p className="text-muted-foreground mt-4">
            Secure your super-early-bird tickets now — prices will only go up.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {[
            {
              title: "NETWORK",
              description: "Connect with industry leaders, investors, and crypto enthusiasts from around the world.",
              gradient: "from-purple-500/20 to-pink-500/20",
            },
            {
              title: "DISCOVER",
              description: "Explore cutting-edge blockchain solutions and the latest innovations in crypto technology.",
              gradient: "from-pink-500/20 to-orange-500/20",
            },
            {
              title: "COLLABORATE",
              description: "Find strategic partnerships and investment opportunities with leading crypto companies.",
              gradient: "from-orange-500/20 to-yellow-500/20",
            },
          ].map((feature, index) => (
            <button
              key={index}
              onClick={scrollToTop}
              className={`gradient-border p-6 rounded-xl bg-gradient-to-br ${feature.gradient} hover:scale-105 transition-transform duration-300 text-left`}
            >
              <h3 className="text-xl font-bold gradient-text mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </button>
          ))}
        </div>

        {/* Event info */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            <span className="gradient-text font-semibold">March 15–16, 2026 | Los Angeles, California</span>
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Get ready for the largest crypto event in California — uniting industry leaders, 
            investors, innovators, and crypto enthusiasts under one roof.
          </p>
          <Button variant="hero" size="lg" onClick={onTicketClick}>
            GET FREE TICKET
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
