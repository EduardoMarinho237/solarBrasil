'use client';

import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-solar-blue rounded-[48px] p-8 md:p-16 text-white grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Vamos conversar sobre seu <span className="text-solar-yellow">projeto?</span></h2>
            <p className="text-white/70 text-lg mb-12">
              Nossos consultores estão prontos para tirar todas as suas dúvidas e realizar um orçamento personalizado sem compromisso.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <p className="text-xl font-medium">0800 123 4567</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="text-xl font-medium">contato@solarbrasil.com.br</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-xl font-medium">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>

        <form className="bg-white rounded-3xl p-8 text-solar-dark space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Nome Completo</label>
              <input type="text" placeholder="Seu nome" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 ring-solar-blue/20" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">E-mail</label>
              <input type="email" placeholder="seu@email.com" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 ring-solar-blue/20" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">WhatsApp</label>
              <input type="tel" placeholder="(00) 00000-0000" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 ring-solar-blue/20" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Mensagem</label>
              <textarea rows={4} placeholder="Como podemos te ajudar?" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 ring-solar-blue/20" />
            </div>
            <button className="w-full bg-solar-yellow text-solar-dark py-4 rounded-xl font-bold text-lg hover:bg-solar-yellow/90 transition-colors cursor-pointer">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
