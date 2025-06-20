
import { Brain, Compass, Network } from "lucide-react";

const DayByDayBreakdown = () => {
  return (
    <section className="bg-cream py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          {programDays.map((day, index) => (
            <DayCard key={`day-${index}`} day={day} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DayProps {
  title: string;
  icon: JSX.Element;
  subtitle: string;
  objective: string;
  keyElements: string[];
  deliverables: string;
  format: string;
  time: string;
}

const DayCard = ({ day, index }: { day: DayProps; index: number }) => {
  return (
    <div 
      className="premium-card bg-white"
      style={{ 
        animationDelay: `${index * 0.2}s`, 
        animationFillMode: 'both' 
      }}
    >
      <div className="mb-4 flex justify-center">
        <div className="text-gold p-3 rounded-full bg-gold/10 inline-flex">
          {day.icon}
        </div>
      </div>
      
      <h3 className="font-playfair text-lg font-semibold text-elegant-black mb-2 text-center">
        {day.title}
      </h3>
      
      <p className="text-gold font-medium text-center mb-2 text-sm">
        {day.subtitle}
      </p>
      
      <div className="text-center mb-4">
        <span className="text-elegant-black/70 text-sm">{day.time}</span>
        <span className="mx-2 text-elegant-black/50">•</span>
        <span className="text-elegant-black/70 text-sm">{day.format}</span>
      </div>
      
      <p className="text-elegant-black/70 mb-6 text-center text-sm">
        <em>{day.objective}</em>
      </p>
      
      <h4 className="font-medium text-gold mb-3 text-sm">Elementos-chave:</h4>
      <ul className="space-y-2 mb-6">
        {day.keyElements.map((element, i) => (
          <li key={`element-${index}-${i}`} className="flex items-start">
            <div className="h-4 w-4 rounded-full bg-sage/20 text-sage flex items-center justify-center mt-0.5 flex-shrink-0">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 0V8M0 4H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="ml-3 text-elegant-black/80 text-xs">{element}</span>
          </li>
        ))}
      </ul>
      
      <div className="pt-4 border-t border-elegant-black/10">
        <h4 className="font-medium text-gold mb-2 text-sm">Você receberá:</h4>
        <p className="text-elegant-black/80 text-xs">{day.deliverables}</p>
      </div>
    </div>
  );
};

const programDays = [
  {
    title: "Dia 1",
    subtitle: "O que é Sabotagem Mental e como identificá-la?",
    time: "08.08, sexta-feira",
    format: "Digital (8h às 10h)",
    icon: <Brain className="w-6 h-6" />,
    objective: "Entenda o que pode estar sabotando a sua liderança através da identificação de padrões mentais sabotadores",
    keyElements: [
      "Para quê serve a Voz Interna e suas 4 funções",
      "O Sabotador (Monkey Brain) e como ele limita seu potencial",
      "De onde vem os sabotadores e como se formaram",
      "Ferramenta 2-minute Mental Download",
      "Saboteur Assessment para identificar seus sabotadores"
    ],
    deliverables: "Ferramenta 2-min Download + Acesso ao Saboteur Assessment + Desafio prático para próxima semana"
  },
  {
    title: "Dia 2",
    subtitle: "Transforme Auto-sabotagem em Resiliência & Flexibilidade Mental",
    time: "22.08, sexta-feira",
    format: "Presencial (7h30 às 11h)",
    icon: <Compass className="w-6 h-6" />,
    objective: "Converter padrões limitantes em ferramentas estratégicas através do framework de reprogramação mental",
    keyElements: [
      "Framework Reprogramação Mental dos 3 D's",
      "DETECTAR: Identificar o Monkey Brain",
      "DISTANCIAR: Paradoxo de Solomon (self-talk 3ª pessoa)",
      "DIMENSIONAR: Visão do Horizonte (zoom-out mental)",
      "Círculos de Confiança e prática em grupos"
    ],
    deliverables: "Framework completo dos 3 D's + Template prático + Convite para Business Therapy 1:1"
  },
  {
    title: "Dia 3",
    subtitle: "Aplicação prática do framework com seu Buddy",
    time: "05.09, sexta-feira",
    format: "Digital (8h às 10h)",
    icon: <Network className="w-6 h-6" />,
    objective: "Converter padrões limitantes com simulação de vida real e consolidar aprendizados",
    keyElements: [
      "Escolha do seu Buddy para prática",
      "Simulação com acontecimentos reais",
      "Aplicação dos 3 D's com template guia",
      "Reflexão sobre transformações alcançadas",
      "Integração à comunidade Perlla"
    ],
    deliverables: "Certificado de Conclusão + Acesso à Comunidade + Template digital permanente"
  }
];

export default DayByDayBreakdown;
