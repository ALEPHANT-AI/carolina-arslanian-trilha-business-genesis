
import { CircleCheck } from "lucide-react";

const Benefits = () => {
  return (
    <section className="bg-sage py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">O Que Você Vai Levar</h2>
          <div className="divider bg-gold/60"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={`benefit-${index}`} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BenefitProps {
  title: string;
  description: string;
}

const BenefitCard = ({ benefit, index }: { benefit: BenefitProps, index: number }) => {
  return (
    <div 
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex items-start transition-all duration-300 hover:bg-white/10"
      style={{ 
        animationDelay: `${index * 0.15}s`,
        animationFillMode: 'both',
        animationName: 'fade-in'
      }}
    >
      <div className="text-gold mr-4 flex-shrink-0">
        <CircleCheck className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-playfair text-lg font-medium mb-2 text-cream">{benefit.title}</h3>
        <p className="text-white/80 text-sm">{benefit.description}</p>
      </div>
    </div>
  );
};

const benefits = [
  {
    title: "Resiliência & Flexibilidade Mental",
    description: "Técnicas comprovadas para gerenciar pensamentos e emoções em momentos-chave de pressão e decisão."
  },
  {
    title: "Clareza Decisiva",
    description: "A capacidade de tomar decisões importantes com confiança, mesmo em ambientes caóticos e incertos."
  },
  {
    title: "Presença Executiva Autêntica",
    description: "Desenvolvimento de uma presença executiva que impacta e fortalecimento da auto-imagem para maximizar a sua auto-confiança."
  },
  {
    title: "Autenticidade como diferencial competitivo",
    description: "Ferramentas para transformar sua singularidade em vantagem estratégica no ambiente corporativo."
  },
  {
    title: "Comunidade de líderes conscientes",
    description: "Acesso a uma rede de mulheres líderes comprometidas com uma liderança mais humana e regenerativa."
  },
  {
    title: "Suporte contínuo após o programa",
    description: "Acesso a recursos exclusivos e sessões de acompanhamento para garantir a implementação bem-sucedida."
  }
];

export default Benefits;
