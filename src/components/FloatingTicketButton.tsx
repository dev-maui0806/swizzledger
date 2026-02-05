import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FloatingTicketButtonProps {
  onTicketClick: () => void;
}

const FloatingTicketButton = ({ onTicketClick }: FloatingTicketButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button variant="ticket" size="lg" className="shadow-2xl animate-pulse-glow" onClick={onTicketClick}>
        GET TICKET
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default FloatingTicketButton;
