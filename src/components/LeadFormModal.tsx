import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import LedgerLogo from "./LedgerLogo";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: () => void;
}

const ledgerUserOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const LeadFormModal = ({ isOpen, onClose, onComplete }: LeadFormModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    isLedgerUser: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const totalSteps = 2;

  const validateStep = () => {
    setErrors({});
    
    // Step 1: Ledger User question
    if (step === 1) {
      if (!formData.isLedgerUser) {
        setErrors({ isLedgerUser: "Please select an option" });
        return false;
      }
    }
    
    // Step 2: Personal Info
    if (step === 2) {
      if (!formData.firstName.trim()) {
        setErrors({ firstName: "First name is required" });
        return false;
      }
      if (!formData.lastName.trim()) {
        setErrors({ lastName: "Last name is required" });
        return false;
      }
      if (!formData.phone.trim() || formData.phone.length < 5) {
        setErrors({ phone: "Valid phone number required" });
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        setErrors({ email: "Valid email address required" });
        return false;
      }
    }
    
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      // Check if user answered "No" to Ledger user question (step 1)
      if (step === 1 && formData.isLedgerUser === "no") {
        setIsRejected(true);
        return;
      }
      
      if (step < totalSteps) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const { toast } = useToast();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          experience: "",
          portfolio: "",
          interests: [],
          storage: "",
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.error("Error sending lead:", data);
        toast({
          title: "Error",
          description: "Could not send form. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      console.log("Lead sent successfully:", data);
      setIsSubmitted(true);
      
      setTimeout(() => {
        handleClose(true);
      }, 2000);
    } catch (err) {
      console.error('Exception sending lead:', err);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const handleClose = (completed = false) => {
    onClose();
    if (completed && onComplete) {
      onComplete();
    }
    // Reset form state
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
      setIsRejected(false);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        isLedgerUser: "",
      });
    }, 300);
  };

  if (!isOpen) return null;

  const OptionButton = ({ 
    selected, 
    onClick, 
    children 
  }: { 
    selected: boolean; 
    onClick: () => void; 
    children: React.ReactNode 
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full p-4 rounded-xl border text-left transition-all duration-200 ${
        selected 
          ? 'border-primary bg-primary/20 text-foreground' 
          : 'border-white/10 bg-muted/30 text-muted-foreground hover:border-primary/50 hover:bg-muted/50'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg glass-strong rounded-2xl border border-white/10 p-8 animate-slide-up max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={() => handleClose(false)}
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
            <span className="text-muted-foreground text-xs block">CONFERENCE CALIFORNIA</span>
          </div>
        </div>

        {/* Progress bar */}
        {!isSubmitted && !isRejected && (
          <div className="flex gap-2 mb-6">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div 
                key={i} 
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i < step ? 'gradient-bg' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        )}

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Thank you!</h3>
            <p className="text-muted-foreground">We will contact you soon.</p>
          </div>
        ) : (
          <>
            {/* Step 1: Ledger User */}
            {step === 1 && !isRejected && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-1.5">
                    Get Your Free Ticket to <span className="gradient-text">Ledger</span> Event
                  </h2>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-muted-foreground text-sm">
                      Are you already a Ledger user?
                    </p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg border border-primary/30 bg-primary/10 text-primary text-[10px] font-medium">
                      ⚡ Exclusive for Ledger users
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {ledgerUserOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      selected={formData.isLedgerUser === option.value}
                      onClick={() => setFormData({ ...formData, isLedgerUser: option.value })}
                    >
                      {option.label}
                    </OptionButton>
                  ))}
                </div>
                {errors.isLedgerUser && (
                  <p className="text-destructive text-xs">{errors.isLedgerUser}</p>
                )}
              </div>
            )}

            {/* Rejection Screen */}
            {step === 1 && isRejected && (
              <div className="space-y-6 text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-8 h-8 text-destructive" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Sorry, <span className="text-destructive">not eligible</span>
                  </h2>
                  <p className="text-muted-foreground">
                    This conference is exclusive for Ledger users. Thank you for your interest!
                  </p>
                </div>
                <Button
                  onClick={() => handleClose(false)}
                  className="mt-4"
                >
                  Close
                </Button>
              </div>
            )}

            {/* Step 2: Personal Info */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Welcome to the <span className="gradient-text">Ledger Conference</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form to get your ticket.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm text-muted-foreground">
                        First name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                        className="mt-1 bg-muted/50 border-white/10"
                        maxLength={50}
                      />
                      {errors.firstName && (
                        <p className="text-destructive text-xs mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm text-muted-foreground">
                        Last name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Smith"
                        className="mt-1 bg-muted/50 border-white/10"
                        maxLength={50}
                      />
                      {errors.lastName && (
                        <p className="text-destructive text-xs mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm text-muted-foreground">
                      Phone number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                      className="mt-1 bg-muted/50 border-white/10"
                      maxLength={20}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm text-muted-foreground">
                      Email address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john.smith@example.com"
                      className="mt-1 bg-muted/50 border-white/10"
                      maxLength={255}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            {!isRejected && (
              <>
                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="flex-1"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  )}
                  <Button
                    type="button"
                    variant="hero"
                    onClick={nextStep}
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? "Sending..." : step === totalSteps ? "Submit" : "Next"}
                    {!isSubmitting && step < totalSteps && <ChevronRight className="w-4 h-4 ml-2" />}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Step {step} of {totalSteps}
                </p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LeadFormModal;
