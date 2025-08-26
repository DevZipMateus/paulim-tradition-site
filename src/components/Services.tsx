import React, { useState } from 'react';
import { Sparkles, Package, Hammer, MessageCircle, X, FileText } from 'lucide-react';

const Services = () => {
  const [expandedImage, setExpandedImage] = useState<number | null>(null);

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

  const productImages = [
    {
      src: '/lovable-uploads/304101b8-5bd2-411f-9f89-aa4fb551f8cb.png',
      alt: 'Produtos de limpeza - detergentes e panos de microfibra'
    },
    {
      src: '/lovable-uploads/bd513e78-36ad-4840-9d34-df3f5093abdc.png',
      alt: 'Kit de limpeza com spray e materiais de limpeza'
    },
    {
      src: '/lovable-uploads/2c64870a-0f59-4a6f-8dce-48f3db917e1e.png',
      alt: 'Papel toalha em rolo para uso profissional'
    },
    {
      src: '/lovable-uploads/fd88d31e-875b-4d5a-a457-6025344ccae1.png',
      alt: 'Papel higiênico em rolos para uso comercial'
    },
    {
      src: '/lovable-uploads/80f4057e-a611-4017-81e4-2f8666ee432f.png',
      alt: 'Dispenser de papel toalha para banheiros'
    },
    {
      src: '/lovable-uploads/9bf5d7c4-0ae5-435a-9b8b-3f6082dc1537.png',
      alt: 'Dispenser automático de papel toalha'
    }
  ];

  const handleImageClick = (index: number) => {
    setExpandedImage(index);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  const handleQuoteRequest = (productName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para: ${productName}`;
    const whatsappUrl = `https://wa.me/5511997543171?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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

        {/* Products Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Nossos Produtos
            </h3>
            <p className="text-lg text-paulim-gray max-w-2xl mx-auto">
              Conheça alguns dos produtos de qualidade que oferecemos para 
              atender suas necessidades de limpeza e higiene.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-accent/30 aspect-square animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-primary font-medium text-sm text-center">
                      {image.alt}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuoteRequest(image.alt);
                    }}
                    className="bg-secondary text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-primary transition-colors duration-300"
                  >
                    <FileText className="h-4 w-4" />
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {expandedImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={closeExpandedImage}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors z-10"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={productImages[expandedImage].src}
                  alt={productImages[expandedImage].alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6 bg-white">
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    {productImages[expandedImage].alt}
                  </h4>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleQuoteRequest(productImages[expandedImage].alt)}
                      className="btn-hero flex items-center gap-2"
                    >
                      <FileText className="h-5 w-5" />
                      Solicitar Orçamento
                    </button>
                    <button
                      onClick={closeExpandedImage}
                      className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/80 transition-colors"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
