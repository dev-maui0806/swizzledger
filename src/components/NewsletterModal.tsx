import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import LedgerLogo from "./LedgerLogo";
import { useToast } from "@/hooks/use-toast";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal = ({ isOpen, onClose }: NewsletterModalProps) => {
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.street.trim()) {
      newErrors.street = "Street is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "ZIP code is required";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "newsletter",
          ...formData,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.error("Error sending newsletter subscription:", data);
        toast({
          title: "Error",
          description: "Subscription could not be completed. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      console.log("Newsletter subscription sent successfully:", data);
      setIsSubmitted(true);
      
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err) {
      console.error('Exception sending newsletter subscription:', err);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const handleClose = () => {
    onClose();
    setFormData({
      street: "",
      city: "",
      postalCode: "",
      country: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg glass-strong rounded-2xl border border-white/10 p-8 animate-slide-up max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
            <LedgerLogo className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="font-bold text-foreground text-lg">LEDGER</span>
            <span className="text-muted-foreground text-xs block">NEWSLETTER</span>
          </div>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Successfully subscribed!</h3>
            <p className="text-muted-foreground">You'll receive the latest crypto market news soon.</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Subscribe to our <span className="gradient-text">Newsletter</span>
              </h2>
              <p className="text-muted-foreground">
                Enter your address to receive the latest crypto market news.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="street" className="text-sm text-muted-foreground">
                  Street *
                </Label>
                <Input
                  id="street"
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  placeholder="123 Main St"
                  className="mt-1 bg-muted/50 border-white/10"
                  maxLength={100}
                />
                {errors.street && (
                  <p className="text-destructive text-xs mt-1">{errors.street}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="postalCode" className="text-sm text-muted-foreground">
                    ZIP code *
                  </Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    placeholder="90210"
                    className="mt-1 bg-muted/50 border-white/10"
                    maxLength={10}
                  />
                  {errors.postalCode && (
                    <p className="text-destructive text-xs mt-1">{errors.postalCode}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="city" className="text-sm text-muted-foreground">
                    City *
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Los Angeles"
                    className="mt-1 bg-muted/50 border-white/10"
                    maxLength={50}
                  />
                  {errors.city && (
                    <p className="text-destructive text-xs mt-1">{errors.city}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="country" className="text-sm text-muted-foreground">
                  Country *
                </Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="United States"
                  className="mt-1 bg-muted/50 border-white/10"
                  maxLength={50}
                />
                {errors.country && (
                  <p className="text-destructive text-xs mt-1">{errors.country}</p>
                )}
              </div>
            </div>

            <Button
              type="button"
              variant="hero"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full mt-6"
            >
              {isSubmitting ? "Sending..." : "Subscribe"}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Your data will be kept confidential.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterModal;
