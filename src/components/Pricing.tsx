
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-sage py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Investimento Estratégico</h2>
          <div className="divider bg-gold/60"></div>
          <p className="section-subtitle text-cream/90">
            Vagas extremamente limitadas para uma abordagem imersiva
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={`pricing-${index}`} tier={tier} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-10 text-white/80 text-sm">
          Investimento parcelável em até 2x
        </div>
      </div>
    </section>
  );
};

interface PricingTierProps {
  name: string;
  price: string;
  status: "esgotado" | "ativo" | "family";
  isPopular?: boolean;
  subtitle?: string;
}

const PricingCard = ({ tier, index }: { tier: PricingTierProps; index: number }) => {
  return (
    <div 
      className={`rounded-lg overflow-hidden transition-all duration-300 ${
        tier.isPopular 
          ? "bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30" 
          : "bg-white/5 border border-white/10"
      }`}
      style={{ 
        animationDelay: `${index * 0.15}s`,
        animationFillMode: 'both',
        animationName: 'fade-in'
      }}
    >
      {tier.isPopular && (
        <div className="bg-gold text-white text-center py-1 text-sm font-medium">
          Mais Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="font-playfair text-lg font-medium mb-2 text-cream">
          {tier.name}
        </h3>
        
        {tier.subtitle && (
          <p className="text-white/70 text-sm mb-3">{tier.subtitle}</p>
        )}
        
        <div className="my-4">
          <span className="text-white text-3xl font-bold font-playfair">{tier.price}</span>
        </div>
        
        {tier.status === "esgotado" ? (
          <button disabled className="w-full py-3 px-4 rounded bg-white/20 text-white/70 cursor-not-allowed">
            Esgotado
          </button>
        ) : (
          <a 
            href="#cta"
            className={`w-full flex items-center justify-center gap-2 ${
              tier.isPopular ? "gold-button" : "outline-button"
            }`}
          >
            Garantir Vaga
            <ArrowRight className="w-4 h-4" />
          </a>
        )}
        
        <div className="mt-4 text-center">
          <span className={`text-sm px-2 py-1 rounded-full ${
            tier.status === "esgotado" 
              ? "bg-white/10 text-white/60" 
              : tier.status === "ativo" 
                ? "bg-gold/20 text-gold" 
                : tier.status === "family"
                  ? "bg-cream/20 text-cream"
                  : "bg-white/10 text-white/60"
          }`}>
            {tier.status === "esgotado" 
              ? "Esgotado" 
              : tier.status === "ativo" 
                ? "Lote Atual" 
                : tier.status === "family"
                  ? "Desconto Especial"
                  : "Restam apenas 5 vagas"}
          </span>
        </div>
      </div>
    </div>
  );
};

const pricingTiers = [
  {
    name: "Lote Inicial",
    price: "R$835",
    status: "esgotado" as const,
    subtitle: "Restam apenas 5 vagas"
  },
  {
    name: "Lote Atual",
    price: "R$1.085",
    status: "ativo" as const,
    isPopular: true
  },
  {
    name: "Family & Friends",
    price: "R$450",
    status: "family" as const
  }
];

export default Pricing;
