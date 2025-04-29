
const Testimonials = () => {
  return (
    <section className="bg-sage py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">O Que Dizem Sobre a Metodologia</h2>
          <div className="divider bg-gold/60"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-${index}`} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  image?: string;
}

const TestimonialCard = ({ testimonial, index }: { testimonial: TestimonialProps; index: number }) => {
  return (
    <div 
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
      style={{ 
        animationDelay: `${index * 0.15}s`,
        animationFillMode: 'both',
        animationName: 'fade-in'
      }}
    >
      <div className="text-gold/80 mb-4">
        <QuoteIcon />
      </div>
      
      <blockquote className="mb-6">
        <p className="text-white/90 italic">"{testimonial.quote}"</p>
      </blockquote>
      
      <div className="flex items-center">
        {testimonial.image && (
          <div className="mr-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        <div>
          <h4 className="font-playfair font-medium text-cream">{testimonial.name}</h4>
          <p className="text-white/70 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6667 14.6667H9.33333C9.33333 12.0933 11.4267 10 14 10V6.66667C9.58667 6.66667 6 10.2533 6 14.6667V25.3333H16.6667V14.6667H14.6667ZM26 10V6.66667C21.5867 6.66667 18 10.2533 18 14.6667V25.3333H28.6667V14.6667H23.3333C23.3333 12.0933 25.4267 10 28 10H26Z" fill="currentColor"/>
  </svg>
);

const testimonials = [
  {
    quote: "A metodologia da Carolina me permitiu desbloquear padrões de pensamento limitantes que eu carregava há anos. O impacto foi imediato na minha capacidade de liderança.",
    name: "Fernanda M.",
    position: "CEO & Fundadora",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Nunca imaginei que poderia transformar minha sabotagem mental em uma ferramenta poderosa. A abordagem da Carolina é única e profundamente transformadora.",
    name: "Beatriz R.",
    position: "Diretora de Marketing",
    image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "O equilíbrio entre técnicas pragmáticas e o trabalho profundo de autoconhecimento faz toda a diferença. Uma experiência que mudou completamente minha visão de liderança.",
    name: "Luciana T.",
    position: "COO & Investidora",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export default Testimonials;
