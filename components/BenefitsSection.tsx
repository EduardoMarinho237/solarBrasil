'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Typed from 'typed.js';

const BenefitsSection = () => {
  const [semPlacasTyped, setSemPlacasTyped] = useState(false);
  const [comPlacasTyped, setComPlacasTyped] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<'sem' | 'com' | null>(null);

  const semPlacasRef = useRef(null);
  const comPlacasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'sem-placas' && !semPlacasTyped) {
              setSemPlacasTyped(true);
              new Typed(semPlacasRef.current, {
                strings: [
                  '<div class="flex items-center gap-3"><i class="fa-solid fa-xmark text-red-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Contas de luz cada vez mais altas</span></div><div class="flex items-center gap-3"><i class="fa-solid fa-xmark text-red-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Dependência total da concessionária</span></div><div class="flex items-center gap-3"><i class="fa-solid fa-xmark text-red-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Sem retorno sobre investimento</span></div><div class="flex items-center gap-3"><i class="fa-solid fa-xmark text-red-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Impacto ambiental negativo</span></div><div class="flex items-center gap-3"><i class="fa-solid fa-xmark text-red-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Custos mensais infinitos</span></div><div class="flex items-center gap-3"><i class="fa-solid fa-xmark text-red-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Vulnerabilidade a aumentos de tarifa</span></div>'
                ],
                typeSpeed: 25,
                showCursor: false,
                contentType: 'html'
              });
            } else if (entry.target.id === 'com-placas' && !comPlacasTyped) {
              setComPlacasTyped(true);
              new Typed(comPlacasRef.current, {
                strings: [
                  '<div class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Economia de até 95% na conta</span></div><div class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Independência energética</span></div><div class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Payback em 3-5 anos</span></div><div class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Energia 100% limpa</span></div><div class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Economia mensal garantida</span></div><div class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600 text-xl font-bold"></i><span class="text-gray-700 font-medium text-lg">Valorização do imóvel</span></div>'
                ],
                typeSpeed: 25,
                showCursor: false,
                contentType: 'html'
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const semPlacasEl = document.getElementById('sem-placas');
    const comPlacasEl = document.getElementById('com-placas');

    if (semPlacasEl) observer.observe(semPlacasEl);
    if (comPlacasEl) observer.observe(comPlacasEl);

    return () => {
      if (semPlacasEl) observer.unobserve(semPlacasEl);
      if (comPlacasEl) observer.unobserve(comPlacasEl);
    };
  }, [semPlacasTyped, comPlacasTyped]);

  return (
    <section
      id="benefits"
      className={`py-24 relative z-10 overflow-hidden transition-colors duration-500 ${
        hoveredCard === 'com'
          ? 'bg-green-100'
          : hoveredCard === 'sem'
          ? 'bg-red-100'
          : 'bg-beige'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Cansado de contas de energia caríssimas?"
          subtitle="Liberte-se dos boletos e economize com energia solar!"
          align="left"
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-16 relative">
          <div className="absolute top-20 -left-120 opacity-100 pointer-events-none">
            <motion.img
              src="/images/boleto.png"
              alt="Boleto vencido"
              className="w-[800px] h-auto object-contain scale-x-[-1]"
              animate={{
                rotate: [0, 2, -2, 0],
                scale: [1, 1.03, 0.97, 1],
              }}
              transition={{
                rotate: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </div>

          <motion.div
            id="sem-placas"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
            onMouseEnter={() => setHoveredCard('sem')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-red-100 relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10"
              >
                <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
                  Sem Placas Solares
                </h3>
              </motion.div>

              <div className="relative z-10 min-h-[250px]">
                <div ref={semPlacasRef} className="space-y-4"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="com-placas"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
            onMouseEnter={() => setHoveredCard('com')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100 relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative z-10"
              >
                <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                  Com Placas Solares
                </h3>
              </motion.div>

              <div className="relative z-10 min-h-[250px]">
                <div ref={comPlacasRef} className="space-y-4"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;