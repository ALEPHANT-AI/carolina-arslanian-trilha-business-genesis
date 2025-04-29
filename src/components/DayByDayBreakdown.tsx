
import { Brain, Compass, Connection } from "lucide-react";

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
  objective: string;
  keyElements: string[];
  deliverables: string;
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
      
      <h3 className="font-playfair text-xl font-semibold text-elegant-black mb-4 text-center">
        {day.title}
      </h3>
      
      <p className="text-elegant-black/70 mb-6 text-center">
        <em>{day.objective}</em>
      </p>
      
      <h4 className="font-medium text-gold mb-3">Elementos-chave:</h4>
      <ul className="space-y-2 mb-6">
        {day.keyElements.map((element, i) => (
          <li key={`element-${index}-${i}`} className="flex items-start">
            <div className="h-5 w-5 rounded-full bg-sage/20 text-sage flex items-center justify-center mt-0.5 flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0V10M0 5H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="ml-3 text-elegant-black/80 text-sm">{element}</span>
          </li>
        ))}
      </ul>
      
      <div className="pt-4 border-t border-elegant-black/10">
        <h4 className="font-medium text-gold mb-2">Você receberá:</h4>
        <p className="text-elegant-black/80 text-sm">{day.deliverables}</p>
      </div>
    </div>
  );
};

const programDays = [
  {
    title: "Dia 1 – Neutralize Sua Sabotagem Mental",
    icon: <Brain className="w-6 h-6" />,
    objective: "Identificar, compreender e reprogramar os padrões mentais que limitam seu impacto",
    keyElements: [
      "Monkey Brain e sua influência na liderança",
      "Mapa Mental da Autossabotagem",
      "Protocolo dos 3 Passos para Domínio Mental",
      "Diferenciação entre intuição e medo"
    ],
    deliverables: "Ferramenta de Mapeamento Mental + Diário de Domínio Interno (edição exclusiva)"
  },
  {
    title: "Dia 2 – Clareza Estratégica e Presença Regenerativa",
    icon: <Compass className="w-6 h-6" />,
    objective: "Converter clareza mental em poder estratégico tangível",
    keyElements: [
      "Wheel of Regenerative Leadership™",
      "Teatro de Improviso do Monkey Brain",
      "Plano de Ação Regenerativo",
      "Pitch Humanizado"
    ],
    deliverables: "Roadmap Visual da Liderança Regenerativa + Kit com ferramentas práticas"
  },
  {
    title: "Encontro 3 (Online) – Integração e Expansão",
    icon: <Connection className="w-6 h-6" />,
    objective: "Consolidar a nova identidade de liderança e expandir para outros contextos",
    keyElements: [
      "Check-in de Resultados",
      "Mentoria Tática em Grupos Menores",
      "Planejamento Final e Ritual de Integração"
    ],
    deliverables: "Certificado de Conclusão + Prioridade no Programa de Continuidade"
  }
];

export default DayByDayBreakdown;
