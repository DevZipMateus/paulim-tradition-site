
import React from 'react';
import { Sparkles, Package, Hammer, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Produtos de Limpeza',
      description: 'Ampla linha de produtos de limpeza profissionais e domésticos, com qualidade garantida e preços competitivos.',
      features: ['Detergentes e sabões', 'Desinfetantes', 'Produtos especializados', 'Linha profissional']
    },
    {
      icon: Package,
      title: 'Descartáveis em Geral',
      description: 'Completa variedade de produtos descartáveis para empresas, eventos e uso doméstico.',
      features: ['Copos e pratos', 'Guardanapos e papéis', 'Embalagens', 'Produtos para eventos']
    },
    {
      icon: Hammer,
      title: 'Limpeza de Pedras',
      description: 'Serviço especializado em limpeza e tratamento de pedras naturais e revestimentos.',
      features: ['Mármores e granitos', 'Pedras naturais', 'Tratamentos especiais', 'Manutenção preventiva']
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-paulim-gray max-w-2xl mx-auto">
            Oferecemos soluções completas em limpeza com produtos de qualidade 
            e serviços especializados para atender todas as suas necessidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-service animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-paulim-gray mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-paulim-gray">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-accent/50 rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Precisa de Mais Informações?
            </h3>
            <p className="text-paulim-gray mb-8 text-lg">
              Entre em contato através do nosso WhatsApp para conhecer melhor 
              nossos produtos e serviços, ou para solicitar um orçamento personalizado.
            </p>
            <a
              href="https://wa.me/5511997543171"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
