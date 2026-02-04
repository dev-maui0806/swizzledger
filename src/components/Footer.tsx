import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUp } from "lucide-react";
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import LedgerLogo from "./LedgerLogo";

interface FooterProps {
  onSubscribeClick?: () => void;
}

const Footer = ({ onSubscribeClick }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const leftLinks = [
    { label: "Program", href: "#agenda" },
    { label: "Speakers", href: "#speakers" },
    { label: "Sponsors", href: "#partners" },
    { label: "Media", href: "#" },
  ];

  const rightLinks = [
    { label: "News", href: "#" },
    { label: "Ticket Help", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-white/5">
      {/* Stay Connected Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Stay Connected */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-foreground">STAY</span>
              <br />
              <span className="gradient-text">CONNECTED</span>
            </h2>
            
            {/* Social icons - not clickable */}
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <Twitter className="w-5 h-5" />
              </span>
              <span className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <Facebook className="w-5 h-5" />
              </span>
              <span className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <Instagram className="w-5 h-5" />
              </span>
              <span className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <Linkedin className="w-5 h-5" />
              </span>
              <span className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </span>
              <span className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <Youtube className="w-5 h-5" />
              </span>
              <span className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <span className="text-lg">•••</span>
              </span>
            </div>
          </div>

          {/* Right side - Subscribe form */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-muted-foreground">
              SUBSCRIBE FOR UPDATES & GIVEAWAYS
            </h3>
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Your email here *" 
                className="bg-muted/50 border-white/10 flex-1"
              />
              <Input 
                type="tel" 
                placeholder="Phone" 
                className="bg-muted/50 border-white/10 w-32 md:w-40"
              />
              <Button variant="hero" className="px-6" onClick={onSubscribeClick}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto px-4 py-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
            <LedgerLogo className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="font-bold text-foreground text-lg">LEDGER</span>
            <span className="text-muted-foreground text-xs block">CONFERENCE CALIFORNIA</span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto px-4 py-8 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left column */}
          <div>
            {leftLinks.map((link, index) => (
              <div key={index} className="border-b border-white/5 py-4 flex items-center justify-between group">
                <span className="text-foreground group-hover:text-primary transition-colors cursor-pointer">
                  {link.label}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="md:border-l md:border-white/5 md:pl-8">
            {rightLinks.map((link, index) => (
              <div key={index} className="border-b border-white/5 py-4 flex items-center justify-between group">
                <span className="text-foreground group-hover:text-primary transition-colors cursor-pointer">
                  {link.label}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 py-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Ledger Conference California. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              contact@ledgerconference.com
            </span>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
