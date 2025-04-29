
const ProgramOverview = () => {
  return (
    <section id="program" className="bg-sage text-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Estrutura Estratégica</h2>
          <div className="divider bg-gold/60"></div>
          <p className="section-subtitle text-cream/90">
            Duas jornadas presenciais intensivas + um encontro digital transformador
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programDetails.map((detail, index) => (
            <div
              key={`detail-${index}`}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 transition-all duration-300 hover:bg-white/10"
            >
              <h3 className="font-playfair text-xl font-medium mb-4 text-cream">{detail.title}</h3>
              <p className="text-white/80">{detail.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <Timeline />
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gold/30 -translate-x-1/2"></div>
      
      <div className="flex flex-col gap-8">
        {timelinePoints.map((point, index) => (
          <div key={`timeline-${index}`} className="flex items-center justify-center">
            <div
              className={`w-4 h-4 rounded-full bg-gold relative z-10 ${
                index === timelinePoints.length - 1 ? "animate-pulse" : ""
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const programDetails = [
  {
    title: "Local",
    description: "São Paulo (espaço premium fornecido pela Perla)"
  },
  {
    title: "Carga Horária",
    description: "Sábado (3h) + Domingo (3h) + Integração Digital (1h30)"
  },
  {
    title: "Formato",
    description: "Combinação de momentos em grupo, trabalho em duplas e reflexões individuais"
  }
];

const timelinePoints = [
  "Início da Jornada",
  "Dia 1 - Presencial",
  "Dia 2 - Presencial", 
  "Encontro Digital"
];

export default ProgramOverview;
