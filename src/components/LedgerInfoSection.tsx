import { Shield, Cpu, Lock, Wallet, Users, Award } from "lucide-react";

const LedgerInfoSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Hardware Security",
      description: "Learn how to protect your crypto with hardware wallets and best practices."
    },
    {
      icon: Cpu,
      title: "Blockchain Technology",
      description: "Understand the fundamentals and advanced concepts of blockchain technology."
    },
    {
      icon: Lock,
      title: "Self-Custody",
      description: "Discover the benefits of self-custody: 'Not your keys, not your coins'."
    },
    {
      icon: Wallet,
      title: "DeFi & Web3",
      description: "Dive into the world of decentralized finance and Web3 applications."
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with like-minded peers, experts, and industry leaders."
    },
    {
      icon: Award,
      title: "Exclusive Workshops",
      description: "Join hands-on workshops with Ledger experts."
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main info block */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            ABOUT THE CONFERENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            WHAT IS THE <span className="gradient-text">LEDGER CONFERENCE?</span>
          </h2>
          
          <div className="glass rounded-2xl p-8 border border-white/10 text-left space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The <span className="text-foreground font-semibold">Ledger Conference California</span> is the 
              leading event for cryptocurrencies and digital assets in California. Named after the "ledger" — the core of every blockchain — 
              we bring together the best minds in the industry.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a <span className="text-foreground font-semibold">beginner</span> looking to 
              learn the basics or an <span className="text-foreground font-semibold">experienced 
              investor</span> seeking new opportunities — our conference has something for everyone. From security workshops and DeFi masterclasses to exclusive networking events.
            </p>

            <div className="gradient-border rounded-xl p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
              <h3 className="text-xl font-bold mb-3 gradient-text">Why attend?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-bg" />
                  Direct access to leading experts and developers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-bg" />
                  Exclusive insights into upcoming trends and technologies
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-bg" />
                  Hands-on workshops on secure crypto storage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-bg" />
                  Networking with 3,000+ attendees from around the world
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gradient-border p-6 rounded-xl glass hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LedgerInfoSection;
