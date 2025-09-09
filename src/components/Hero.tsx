
import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-gradient text-white overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="text-accent font-medium">25 Anos de Tradição</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <img 
                src="/lovable-uploads/35d0ed17-1ea2-41b4-b920-41fcb333a418.png" 
                alt="Paulim" 
                className="h-16 md:h-20 w-auto mb-4"
              />
              <span className="block text-accent text-2xl md:text-3xl font-normal mt-2">
                Tradição em limpeza
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Há 25 anos, construímos nossa história com dedicação, 
              conquistando a confiança de centenas de clientes através 
              de produtos de qualidade e atendimento excepcional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#servicos"
                className="btn-hero inline-flex items-center gap-2"
              >
                Nossos Serviços
                <ArrowRight className="h-5 w-5" />
              </a>
              
              <a
                href="https://wa.me/5511997543171"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-hero inline-flex items-center gap-2"
              >
                Fale Conosco
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">25+</div>
                <div className="text-white/80 text-sm">Anos de Tradição</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">500+</div>
                <div className="text-white/80 text-sm">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">100%</div>
                <div className="text-white/80 text-sm">Qualidade Garantida</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative animate-float">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-semibold text-lg">Atendimento Personalizado</h3>
                    <p className="text-white/80">Cada cliente é único para nós</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-semibold text-lg">Qualidade Garantida</h3>
                    <p className="text-white/80">Produtos com padrão superior</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Star className="h-8 w-8 text-accent fill-accent" />
                  <div>
                    <h3 className="font-semibold text-lg">25 Anos de Confiança</h3>
                    <p className="text-white/80">Tradição que você pode confiar</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
