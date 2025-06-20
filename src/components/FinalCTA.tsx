
import { ArrowRight, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="cta" className="bg-cream py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">
            Não basta resistir ao caos — é hora de crescer através dele
          </h2>
          <div className="divider"></div>
          
          <div className="mb-12">
            <div className="inline-block bg-sage/10 backdrop-blur-sm border border-sage/20 px-8 py-3 rounded-full text-sage font-medium">
              Inscrições Abertas a partir de 10 de Junho
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="gold-button flex items-center justify-center gap-2 text-lg">
              Garantir Minha Vaga
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center justify-center gap-2 outline-button">
              <MessageCircle className="w-5 h-5" />
              Entrar na Lista VIP via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
