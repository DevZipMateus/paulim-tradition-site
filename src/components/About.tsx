
import React from 'react';
import { Target, Heart, Shield, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Procuramos entregar ao cliente produtos com qualidade e preço justo.'
    },
    {
      icon: Clock,
      title: 'Atendimento Ágil e Eficiente',
      description: 'Entendemos que tempo é precioso. Nossa estrutura é pensada para entregar com rapidez e precisão.'
    },
    {
      icon: Heart,
      title: 'Transparência Total',
      description: 'Cultivamos relacionamentos baseados na confiança e honestidade. Preços claros e prazos realistas.'
    }
  ];

  return (
    <section id="sobre" className="bg-accent/30 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              25 Anos de Tradição em Limpeza
            </h2>
            
            <div className="space-y-6 text-paulim-gray leading-relaxed">
              <p className="text-lg">
                Há 25 anos, a Paulim vem construindo sua história com dedicação, 
                e conquistando a confiança de centenas de clientes.
              </p>
              
              <p>
                Ao longo dessas décadas, aprendemos que qualidade não se mede apenas 
                pelo produto, mas também pelo atendimento que oferecemos. Nossa dedicação 
                e o compromisso com cada cliente nos fizeram crescer, e hoje, somos uma 
                referência na distribuição de produtos de limpeza na região.
              </p>
              
              <p>
                Acreditamos que a limpeza vai muito além da estética, é sobre cuidado, 
                bem-estar e respeito por quem usa cada ambiente.
              </p>
            </div>
            
            {/* Mission */}
            <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-primary shadow-sm">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Nossa Missão</h3>
                  <p className="text-paulim-gray">
                    Fornecer soluções eficientes em produtos de limpeza, garantindo 
                    qualidade superior e um atendimento ágil e personalizado que supere 
                    as expectativas de nossos clientes. Estamos aqui para simplificar 
                    o dia a dia de quem confia em nosso trabalho.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-primary mb-8">Nossos Valores</h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                      <p className="text-paulim-gray">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
