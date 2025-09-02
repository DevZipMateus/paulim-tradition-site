
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/6bea9858-a4f2-4700-ab57-63bf1080e00e.png" 
              alt="Paulim" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-white/90 mb-6 max-w-md">
              Há 25 anos construindo nossa história com dedicação, 
              conquistando a confiança de centenas de clientes através 
              de produtos de qualidade e atendimento excepcional.
            </p>
            <div className="text-accent font-medium">
              Tradição em limpeza desde 1999
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/80 hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span>(11) 99754-3171</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span>paulim.docs@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>Santana de Parnaíba, SP</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Clock className="h-4 w-4" />
                <span>Seg - Sex: 8h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white/70">
              © {new Date().getFullYear()} Paulim - Tradição em Limpeza. Todos os direitos reservados.
            </div>
            <div className="text-white/70 text-sm">
              <span>CNPJ: 03.524.002/0001-78</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
