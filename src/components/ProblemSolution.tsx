
const ProblemSolution = () => {
  return (
    <section id="problem" className="bg-cream py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">A Batalha Mais Importante Não Está no Mercado</h2>
          <div className="divider"></div>
          <p className="italic text-xl md:text-2xl font-playfair text-elegant-black/80 mt-8">
            "Está na sua resiliência e flexibilidade mental para liderar com mais impacto e menos desgaste pessoal."
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          <div className="premium-card bg-white animate-fade-in-right">
            <h3 className="font-playfair text-xl font-semibold mb-6 text-elegant-black">O Desafio</h3>
            <ul className="space-y-6">
              {challenges.map((item, index) => (
                <ListItem key={`challenge-${index}`} text={item} />
              ))}
            </ul>
            <div className="mt-8 p-4 bg-gold/10 rounded-lg">
              <p className="text-elegant-black font-medium text-center">
                <strong>Atenção!</strong> Este não é um curso e sim um workshop imersivo de transformação.
              </p>
            </div>
          </div>
          
          <div className="premium-card bg-white animate-fade-in-left">
            <h3 className="font-playfair text-xl font-semibold mb-6 text-elegant-black">A Solução</h3>
            <ul className="space-y-6">
              {solutions.map((item, index) => (
                <ListItem key={`solution-${index}`} text={item} />
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <Arrow />
        </div>
      </div>
    </section>
  );
};

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-start">
    <div className="h-6 w-6 rounded-full bg-gold/20 text-gold flex items-center justify-center mt-0.5 flex-shrink-0">
      <CheckIcon />
    </div>
    <span className="ml-3 text-elegant-black/80">{text}</span>
  </li>
);

const CheckIcon = () => (
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 14 14" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M11.6666 3.5L5.24998 9.91667L2.33331 7" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const Arrow = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-sage/60"
  >
    <path
      d="M30 10V50M30 50L45 35M30 50L15 35"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const challenges = [
  "70% dos seus pensamentos diários são sabotadores",
  "O caos externo amplifica o síndrome da impostora",
  "Códigos invisíveis geram pressão pela perfeição e medo de falhar",
  "Por isso, excelência técnica te trouxe até aqui, mas não te levará mais longe"
];

const solutions = [
  "Flexibilidade e resiliência mental como vantagem competitiva para sua liderança",
  "Mais clareza e presença no processo de tomada de decisão mesmo sob pressão",
  "Liderança Regenerativa com menos desgaste pessoal, mais energia produtiva"
];

export default ProblemSolution;
