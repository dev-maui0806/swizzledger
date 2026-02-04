import ledgerLogoImg from "@/assets/ledger-logo.png";

interface LedgerLogoProps {
  className?: string;
}

const LedgerLogo = ({ className = "w-6 h-6" }: LedgerLogoProps) => {
  return (
    <img 
      src={ledgerLogoImg} 
      alt="Ledger" 
      className={`${className} object-contain invert`}
    />
  );
};

export default LedgerLogo;
