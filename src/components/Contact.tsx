
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefones',
      details: ['(11) 99754-3171', '(11) 99744-0363'],
      action: 'tel:+5511997543171'
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['paulim.docs@gmail.com'],
      action: 'mailto:paulim.docs@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Localização',
      details: ['Santana de Parnaíba, SP'],
      action: '#'
    },
    {
      icon: Clock,
      title: 'Funcionamento',
      details: ['Segunda a Sexta', 'das 8h às 18h'],
      action: '#'
    }
  ];

  return (
    <section id="contato" className="section-padding bg-accent/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-paulim-gray max-w-2xl mx-auto">
            Estamos prontos para atender você! Entre em contato e descubra 
            como podemos ajudar com suas necessidades de limpeza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-8">
              Informações de Contato
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                  
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-paulim-gray">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Company Info */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-primary mb-4">Dados da Empresa</h4>
              <div className="grid grid-cols-1 gap-2 text-sm text-paulim-gray">
                <p><span className="font-medium">Razão Social:</span> Paulim</p>
                <p><span className="font-medium">CNPJ:</span> 03.524.002/0001-78</p>
                <p><span className="font-medium">Responsável:</span> Paulim</p>
                <p><span className="font-medium">Site:</span> www.paulimprodutos.com.br</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Section */}
          <div className="animate-slide-up">
            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-100">
              <div className="text-center">
                <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Atendimento via WhatsApp
                </h3>
                
                <p className="text-green-700 mb-8">
                  Fale diretamente conosco pelo WhatsApp! É o jeito mais rápido 
                  e prático de esclarecer dúvidas, solicitar orçamentos e conhecer 
                  nossos produtos e serviços.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/5511997543171"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                  >
                    <MessageSquare className="h-6 w-6" />
                    (11) 99754-3171
                  </a>
                  
                  <p className="text-sm text-green-600">
                    Clique no botão acima para iniciar uma conversa
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Contact */}
            <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-primary mb-4">Contato Alternativo</h4>
              <a
                href="https://wa.me/5511997440363"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                <MessageSquare className="h-5 w-5" />
                (11) 99744-0363
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
