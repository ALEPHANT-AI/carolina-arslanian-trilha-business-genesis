
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-sage py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Investimento Estratégico</h2>
          <div className="divider bg-gold/60"></div>
          <p className="section-subtitle text-cream/90">
            Vagas extremamente limitadas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={`pricing-${index}`} tier={tier} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-10 text-white/80 text-sm">
          Investimento parcelável em até 12x
        </div>
        
        <div className="mt-16 max-w-xl mx-auto">
          <div className="w-full bg-white/10 h-2 rounded-full">
            <div className="bg-gold h-2 rounded-full w-3/4"></div>
          </div>
          <p className="text-cream mt-4 text-center">
            75% das vagas preenchidas
          </p>
        </div>
      </div>
    </section>
  );
};

interface PricingTierProps {
  name: string;
  price: string;
  status: "esgotado" | "ativo" | "";
  isPopular?: boolean;
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
        
        <div className="my-4">
          <span className="text-white text-3xl font-bold font-playfair">{tier.price}</span>
        </div>
        
        {tier.status === "esgotado" ? (
          <button disabled className="w-full py-3 px-4 rounded bg-white/20 text-white/70 cursor-not-allowed">
            Esgotado
          </button>
        ) : tier.status === "ativo" ? (
          <a 
            href="#cta"
            className="w-full gold-button flex items-center justify-center gap-2"
          >
            Garantir Minha Vaga
            <ArrowRight className="w-4 h-4" />
          </a>
        ) : (
          <a 
            href="#cta"
            className="w-full outline-button"
          >
            Garantir Minha Vaga
          </a>
        )}
        
        <div className="mt-4 text-center">
          <span className={`text-sm px-2 py-1 rounded-full ${
            tier.status === "esgotado" 
              ? "bg-white/10 text-white/60" 
              : tier.status === "ativo" 
                ? "bg-gold/20 text-gold" 
                : "bg-white/10 text-white/60"
          }`}>
            {tier.status === "esgotado" 
              ? "Esgotado" 
              : tier.status === "ativo" 
                ? "Ativo" 
                : "Em breve"}
          </span>
        </div>
      </div>
    </div>
  );
};

const pricingTiers = [
  {
    name: "Lote Inicial",
    price: "R$900",
    status: "esgotado" as const
  },
  {
    name: "Segundo Lote",
    price: "R$1.200",
    status: "ativo" as const,
    isPopular: true
  },
  {
    name: "Lote Final",
    price: "R$1.500",
    status: "" as const
  }
];

export default Pricing;
