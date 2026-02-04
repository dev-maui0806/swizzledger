import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PartnersSectionProps {
  onTicketClick: () => void;
}

const titlePartners = [
  "https://sydneycryptoconf.com/images/b1.png",
  "https://sydneycryptoconf.com/images/b2.png",
  "https://sydneycryptoconf.com/images/b3.png",
];

const partners = [
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/60.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/56-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/51-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/47-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/43-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/38-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/33-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/28-1.png",
];

const partnersRow2 = [
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/59.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/55-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/50-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/46-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/42-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/36-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/32-1.png",
  "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/auscryptocon/wp-content/uploads/media/2025/06/18-1.png",
];

const PartnersSection = ({ onTicketClick }: PartnersSectionProps) => {
  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title Partners */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            2026 <span className="gradient-text">TITLE PARTNERS</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {titlePartners.map((logo, index) => (
              <div
                key={index}
                className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <img
                  src={logo}
                  alt={`Title partner ${index + 1}`}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* All Partners */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold mb-8">
            WHERE THE <span className="gradient-text">BIGGEST NAMES</span> IN THE INDUSTRY COME TOGETHER
          </h3>
        </div>

        {/* Partners marquee row 1 */}
        <div className="relative overflow-hidden mb-6">
          <div className="flex animate-marquee">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 h-12 md:h-16 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partners marquee row 2 */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-marquee-reverse">
            {[...partnersRow2, ...partnersRow2].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 h-12 md:h-16 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
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

export default PartnersSection;
