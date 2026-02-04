import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SpeakersSectionProps {
  onTicketClick: () => void;
}

const speakers = [
  { name: "Speaker 1", role: "Crypto Expert", image: "https://sydneycryptoconf.com/images/w1.png" },
  { name: "Speaker 2", role: "Blockchain Specialist", image: "https://sydneycryptoconf.com/images/w2.png" },
  { name: "Speaker 3", role: "DeFi Pioneer", image: "https://sydneycryptoconf.com/images/w3.png" },
  { name: "Speaker 4", role: "Web3 Innovator", image: "https://sydneycryptoconf.com/images/w4.png" },
  { name: "Speaker 5", role: "Crypto Investor", image: "https://sydneycryptoconf.com/images/w5.png" },
  { name: "Speaker 6", role: "NFT Artist", image: "https://sydneycryptoconf.com/images/w6.png" },
  { name: "Speaker 7", role: "DAO Expert", image: "https://sydneycryptoconf.com/images/w7.png" },
  { name: "Speaker 8", role: "Mining Specialist", image: "https://sydneycryptoconf.com/images/w8.png" },
  { name: "Speaker 9", role: "Exchange CEO", image: "https://sydneycryptoconf.com/images/w9.png" },
  { name: "Speaker 10", role: "Protocol Developer", image: "https://sydneycryptoconf.com/images/w10.png" },
];

const SpeakersSection = ({ onTicketClick }: SpeakersSectionProps) => {
  return (
    <section id="speakers" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            GLOBAL INDUSTRY LEADERS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ON <span className="gradient-text">5+ STAGES</span>
          </h2>
          <p className="text-muted-foreground">FEATURED SPEAKERS</p>
        </div>

        {/* Speakers marquee */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-marquee">
            {[...speakers, ...speakers].map((speaker, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 hover:border-primary transition-colors grayscale hover:grayscale-0"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* More info */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            AND <span className="gradient-text font-bold">80+ MORE</span>
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

export default SpeakersSection;
