
import { CircleCheck, CircleX } from "lucide-react";

const IdealClient = () => {
  return (
    <section className="bg-cream py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Esta Trilha Foi Desenhada Para...</h2>
          <div className="divider"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          <div className="premium-card bg-white animate-fade-in-right">
            <h3 className="font-playfair text-xl font-semibold mb-6 text-gold">PARA QUEM É</h3>
            <ul className="space-y-6">
              {forWho.map((item, index) => (
                <ListItem 
                  key={`forwho-${index}`} 
                  text={item} 
                  icon={<CircleCheck className="w-5 h-5" />}
                  iconClass="text-sage"
                  bgClass="bg-sage/10"
                />
              ))}
            </ul>
          </div>
          
          <div className="premium-card bg-white animate-fade-in-left">
            <h3 className="font-playfair text-xl font-semibold mb-6 text-gold">PARA QUEM NÃO É</h3>
            <ul className="space-y-6">
              {notForWho.map((item, index) => (
                <ListItem 
                  key={`notforwho-${index}`} 
                  text={item} 
                  icon={<CircleX className="w-5 h-5" />}
                  iconClass="text-destructive"
                  bgClass="bg-destructive/10"
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ListItemProps {
  text: string;
  icon: JSX.Element;
  iconClass: string;
  bgClass: string;
}

const ListItem = ({ text, icon, iconClass, bgClass }: ListItemProps) => (
  <li className="flex items-start">
    <div className={`h-6 w-6 rounded-full ${bgClass} ${iconClass} flex items-center justify-center mt-0.5 flex-shrink-0`}>
      {icon}
    </div>
    <span className="ml-3 text-elegant-black/80">{text}</span>
  </li>
);

const forWho = [
  "Fundadoras que lideram com excelência, mas desejam mais equilíbrio",
  "Executivas que enfrentam decisões críticas em ambientes de pressão",
  "Mulheres que sabem que potência interna é o maior ativo de liderança"
];

const notForWho = [
  "Quem busca soluções mágicas sem trabalho interno",
  "Quem evita confronto com seus padrões mentais",
  "Quem não está disposta a crescer com coragem"
];

export default IdealClient;
