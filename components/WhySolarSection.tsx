'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { 
  DollarSign, 
  Zap, 
  Leaf 
} from 'lucide-react';

const WhySolarSection = () => {
  const features = [
    { 
      icon: <DollarSign className="w-8 h-8" />, 
      title: "Economia Imediata", 
      desc: "Reduza seus custos mensais logo no primeiro mês após a instalação.",
      color: "bg-blue-50 text-blue-600"
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: "Independência Energética", 
      desc: "Fique livre dos aumentos constantes nas tarifas das concessionárias.",
      color: "bg-yellow-50 text-yellow-600"
    },
    { 
      icon: <Leaf className="w-8 h-8" />, 
      title: "Sustentabilidade", 
      desc: "Gere sua própria energia sem emitir poluentes ou ruídos.",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <section id="why-solar" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.img
        src="/images/solar-panel.png"
        alt="Painel Solar"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5/7 max-w-3xl opacity-100 pointer-events-none z-10 hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              title="Por que Energia Solar?" 
              subtitle="A escolha inteligente para seu bolso e para o planeta"
            />

            <div className="space-y-8 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-solar-dark mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-0 lg:h-auto">
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolarSection;
