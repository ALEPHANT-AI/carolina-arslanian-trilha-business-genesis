
const Differentiators = () => {
  return (
    <section className="bg-cream py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Diferenciais Exclusivos</h2>
          <div className="divider"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, index) => (
            <div 
              key={`diff-${index}`} 
              className="premium-card bg-white border border-gold/20"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both',
                animationName: 'fade-in'
              }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center">
                  <div className="text-gold">{diff.icon}</div>
                </div>
              </div>
              <h3 className="font-playfair text-lg font-medium mb-2 text-center text-elegant-black">
                {diff.title}
              </h3>
              <p className="text-elegant-black/70 text-center text-sm">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MethodIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 12C13.7909 12 12 10.2091 12 8C12 5.79086 13.7909 4 16 4C18.2091 4 20 5.79086 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 12C10.2091 12 12 13.7909 12 16C12 18.2091 10.2091 20 8 20C5.79086 20 4 18.2091 4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L13.2626 8.50886C13.5021 9.52204 13.6219 10.0286 13.8478 10.4472C14.0503 10.8217 14.3283 11.1497 14.6528 11.4022C15.0214 11.6781 15.5279 11.7979 16.5411 12.0374L22 13.5L16.5411 14.9626C15.5279 15.2021 15.0214 15.3219 14.6528 15.5978C14.3283 15.8503 14.0503 16.1783 13.8478 16.5528C13.6219 16.9714 13.5021 17.478 13.2626 18.4911L12 24L10.7374 18.4911C10.4979 17.478 10.3781 16.9714 10.1522 16.5528C9.94971 16.1783 9.6717 15.8503 9.34719 15.5978C8.97861 15.3219 8.47207 15.2021 7.45898 14.9626L2 13.5L7.45898 12.0374C8.47207 11.7979 8.97861 11.6781 9.34719 11.4022C9.6717 11.1497 9.94971 10.8217 10.1522 10.4472C10.3781 10.0286 10.4979 9.52204 10.7374 8.50886L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const differentiators = [
  {
    title: "Business Therapy™ com Carolina Arslanian",
    description: "Uma abordagem única que une ciência e intuição para resultados transformadores",
    icon: <StarIcon />
  },
  {
    title: "Metodologia própria com aplicação real e prática",
    description: "Ferramentas desenvolvidas em ambientes corporativos globais com resultados comprovados",
    icon: <MethodIcon />
  },
  {
    title: "Integração entre neurociência, performance e autenticidade",
    description: "Base científica aliada a uma visão humanizada da liderança",
    icon: <BrainIcon />
  },
  {
    title: "Estética e ambiente premium",
    description: "Experiência cuidadosamente desenhada para inspirar clareza e transformação",
    icon: <SparkleIcon />
  }
];

export default Differentiators;
