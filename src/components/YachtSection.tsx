import { Button } from "@/components/ui/button";
import { ArrowRight, Wine, Utensils, Crown, Music } from "lucide-react";

interface YachtSectionProps {
  onTicketClick: () => void;
}

const YachtSection = ({ onTicketClick }: YachtSectionProps) => {
  return (
    <section id="yacht" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              EXCLUSIVE EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              GALA <span className="gradient-text">DINNER</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Don't miss it! Join our exclusive gala dinner in California — an unforgettable evening of networking, fine dining, and entertainment.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Wine, label: "Open Bar" },
                { icon: Utensils, label: "5-Course Menu" },
                { icon: Crown, label: "VIP Lounge" },
                { icon: Music, label: "Live Entertainment" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 glass p-4 rounded-xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              Limited tickets available. <span className="text-primary font-semibold">For Premium GA & VIP ticket holders only.</span>
            </p>

            <Button variant="hero" size="lg" onClick={onTicketClick}>
              GET FREE TICKET
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden gradient-border">
                <img
                  src="https://sydneycryptoconf.com/images/j2.jpg"
                  alt="Gala Dinner"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden gradient-border">
                <img
                  src="https://sydneycryptoconf.com/images/j3.jpg"
                  alt="California venue"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden gradient-border">
                <img
                  src="https://sydneycryptoconf.com/images/j4.jpg"
                  alt="Event Location"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtSection;
