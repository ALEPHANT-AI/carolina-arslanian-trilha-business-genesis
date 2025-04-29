
import React, { useState } from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="bg-cream py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="divider"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem 
              key={`faq-${index}`} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4">
      <button
        className="w-full text-left p-4 bg-white rounded-lg shadow-sm flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-playfair font-medium">{question}</span>
        <span className="text-gold">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      
      {isOpen && (
        <div className="p-4 bg-white/60 rounded-b-lg mt-1 animate-fade-in">
          <p className="text-elegant-black/80">{answer}</p>
        </div>
      )}
    </div>
  );
};

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const faqItems = [
  {
    question: "Quando a trilha acontece?",
    answer: "A trilha acontecerá nos dias 15 e 16 de Junho (sábado e domingo) para os encontros presenciais, com o encontro online de integração acontecendo no dia 30 de Junho."
  },
  {
    question: "Preciso ter experiência prévia?",
    answer: "Não é necessário ter experiência prévia em práticas contemplativas ou de autoconhecimento. A trilha foi desenhada para ser acessível a qualquer mulher em posição de liderança ou empreendedorismo."
  },
  {
    question: "Como funciona o encontro online?",
    answer: "O encontro online acontece via Zoom, com duração de 1h30. Você receberá todas as instruções e link de acesso após a conclusão dos encontros presenciais."
  },
  {
    question: "Existe um programa de continuidade?",
    answer: "Sim, existe um programa de continuidade exclusivo para alunas que concluírem a Trilha. Todos os detalhes serão compartilhados durante o programa."
  },
  {
    question: "Posso parcelar o investimento?",
    answer: "Sim, o investimento pode ser parcelado em até 12x no cartão de crédito."
  },
  {
    question: "E se eu não puder comparecer a um dos dias?",
    answer: "Recomendamos fortemente a participação em todos os encontros para a experiência completa. Caso haja algum imprevisto, entre em contato conosco para buscarmos alternativas."
  }
];

export default FAQ;
