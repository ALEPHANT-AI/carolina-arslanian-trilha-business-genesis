
const FacilitatorBio = () => {
  return (
    <section id="about" className="bg-sage py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Conheça Carolina Arslanian</h2>
          <div className="divider bg-gold/60"></div>
          <p className="section-subtitle text-cream/90">
            Business Therapist™ & Especialista em Liderança Sustentável
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Carolina Arslanian" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="h-full flex flex-col">
              <div className="prose prose-lg text-white/90 mb-8">
                <p>
                  Carolina combina 18 anos de experiência em marketing global com 8 mudanças internacionais e vasta experiência em transformações corporativas. Essa trajetória única permite que ela compreenda profundamente os desafios de líderes em contextos multiculturais enquanto implementa soluções que integram alta performance com bem-estar sustentável.
                </p>
                <p>
                  Ao longo de sua carreira, Carolina transformou mais de 10 lideranças globais em protagonistas sustentáveis, implementando metodologias que aumentaram seu impacto enquanto reduziram significativamente seu desgaste pessoal e profissional.
                </p>
              </div>
              
              <blockquote className="border-l-4 border-gold pl-4 italic text-cream mb-8">
                "Eu transformo líderes tecnicamente excelentes em protagonistas extraordinários de suas vidas e carreiras, utilizando uma metodologia única que combina o melhor do pragmatismo americano com a conexão humana brasileira e perspectivas multiculturais, criando uma liderança sustentável com impacto global."
              </blockquote>
              
              <div className="grid grid-cols-3 gap-4 mt-auto">
                {achievements.map((achievement, index) => (
                  <div key={`achievement-${index}`} className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="font-playfair text-2xl font-bold text-gold">{achievement.number}</div>
                    <div className="text-white text-sm">{achievement.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const achievements = [
  {
    number: "18+",
    text: "Anos em Marketing Global"
  },
  {
    number: "10+",
    text: "Transformações Globais"
  },
  {
    number: "8",
    text: "Mudanças Internacionais"
  }
];

export default FacilitatorBio;
