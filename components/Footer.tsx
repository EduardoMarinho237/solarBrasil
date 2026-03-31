'use client';

import React from 'react';
import { 
  Sun as SunIcon, 
  MessageSquare, 
  Users 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-beige pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-solar-yellow rounded-full flex items-center justify-center">
                <SunIcon className="text-solar-dark w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-solar-dark">Solar Brasil</span>
            </div>
            <p className="text-solar-dark/60 max-w-sm mb-6">
              Líder em soluções de energia solar fotovoltaica, transformando a luz do sol em economia e sustentabilidade para você.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-solar-dark/5 rounded-full flex items-center justify-center hover:bg-solar-blue hover:text-white transition-all cursor-pointer">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-solar-dark/5 rounded-full flex items-center justify-center hover:bg-solar-blue hover:text-white transition-all cursor-pointer">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-solar-dark mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-solar-dark/60">
              <li><a href="#home" className="hover:text-solar-blue">Início</a></li>
              <li><a href="#why" className="hover:text-solar-blue">Vantagens</a></li>
              <li><a href="#simulator" className="hover:text-solar-blue">Simulador</a></li>
              <li><a href="#about" className="hover:text-solar-blue">Quem Somos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-solar-dark mb-6">Legal</h4>
            <ul className="space-y-4 text-solar-dark/60">
              <li><a href="#" className="hover:text-solar-blue">Privacidade</a></li>
              <li><a href="#" className="hover:text-solar-blue">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-solar-blue">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="h-px bg-solar-dark/10 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-solar-dark/40">
          <p>© 2026 Solar Brasil. Todos os direitos reservados.</p>
          <p>Site institucional para empresa fictícia desenvolvido por Eduardo Marinho.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
