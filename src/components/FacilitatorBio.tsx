
const FacilitatorBio = () => {
  return (
    <section id="about" className="bg-sage py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Conheça Carolina Arslanian</h2>
          <div className="divider bg-gold/60"></div>
          <p className="section-subtitle text-cream/90">
            Criadora do Business Therapy Code™ & Especialista em Liderança com mais impacto e menos desgaste pessoal
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://static.wixstatic.com/media/9a6a60_88ba60b1f69f4834bafce96c4b06302f~mv2.jpg" 
                alt="Carolina Arslanian" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="h-full flex flex-col">
              <div className="prose prose-lg text-white/90 mb-8">
                <p>
                  Com uma trajetória que harmoniza 18 anos de marketing global e 8 mudanças internacionais, Carolina desenvolveu uma perspectiva única sobre os desafios enfrentados por líderes em ambientes multiculturais, mais recentemente como Diretora de Marketing da ABBVIE, multinacional americana. Essa rica experiência a capacitou a criar metodologias que transformam excelência técnica em potência autêntica.
                </p>
                <p>
                  Reconhecida por sua abordagem que integra alta performance com bem-estar sustentável, Carolina já guiou mais de 10 lideranças globais em jornadas de transformação que ampliaram significativamente seu impacto.
                </p>
              </div>
              
              <blockquote className="border-l-4 border-gold pl-4 italic text-cream mb-8">
                "Eu transformo líderes tecnicamente excelentes em protagonistas extraordinários de suas vidas e carreiras, utilizando uma metodologia única que combina o melhor do pragmatismo americano com a conexão humana brasileira e perspectivas multiculturais, e tudo isso com menos desgaste pessoal."
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
    text: "Anos em Marketing Global e posições executivas"
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
