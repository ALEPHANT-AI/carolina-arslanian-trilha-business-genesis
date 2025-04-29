
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-sage pt-24 pb-20 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb')] bg-cover bg-center opacity-10"></div>
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-4">
              Trilha Business Therapy™
            </h1>
            <h2 className="text-2xl md:text-3xl font-playfair text-cream/90 mb-6">
              De Sabotagem Mental à Liderança Regenerativa™
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-12 mx-auto max-w-3xl">
              Uma jornada imersiva de transformação para mulheres em posições de liderança que buscam converter sabotagem mental em poder estratégico e presença executiva autêntica.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="#pricing" className="gold-button flex items-center justify-center gap-2">
                Garantir Minha Vaga
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="outline-button">
                Entrar na Lista VIP
              </a>
            </div>
            
            <div className="mt-12 inline-block">
              <div className="bg-cream/10 backdrop-blur-sm border border-cream/20 px-6 py-3 rounded-full text-white">
                Inscrições a partir de 6 de Maio
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <a href="#problem" className="flex flex-col items-center text-cream hover:text-gold transition-colors">
            <span className="text-sm mb-2">Saiba mais</span>
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

const ArrowDown = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current"
  >
    <path
      d="M12 5V19M12 19L19 12M12 19L5 12"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Hero;
