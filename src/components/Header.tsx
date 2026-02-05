import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LedgerLogo from "./LedgerLogo";

interface HeaderProps {
  onTicketClick: () => void;
}

const Header = ({ onTicketClick }: HeaderProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/5">
      {/* Top banner */}
      <div className="gradient-bg py-2 text-center text-sm font-medium text-white">
        <span>🎫 Get your FREE ticket for Ledger Conference in California</span>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
              <LedgerLogo className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block text-left">
              <span className="font-bold text-foreground">LEDGER</span>
              <span className="text-muted-foreground text-xs block">CONFERENCE CALIFORNIA</span>
            </div>
          </button>

          {/* Navigation links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={scrollToTop} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              PROGRAM
            </button>
            <button onClick={scrollToTop} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              GALA DINNER
            </button>
            <button onClick={scrollToTop} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              SPEAKERS
            </button>
            <button onClick={scrollToTop} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              PARTNERS
            </button>
            <button onClick={scrollToTop} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              GETTING THERE
            </button>
          </nav>

          {/* CTA Button */}
          <Button variant="ticket" size="default" className="rounded-full" onClick={onTicketClick}>
            GET TICKET
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
