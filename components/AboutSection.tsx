'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { CheckCircle2, Users, Award, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const images = [
    { src: '/images/abouteus.webp', alt: 'Equipe Solar Brasil' },
    { src: '/images/aboutus-ceilein.jpeg', alt: 'Especialistas em energia sustentável' },
    { src: '/images/aboutus.jpg', alt: 'Instalação Profissional' }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const stats = [
    { icon: Users, value: '10+', label: 'Anos de Experiência' },
    { icon: CheckCircle2, value: '98%', label: 'Clientes Satisfeitos' },
    { icon: Award, value: '500+', label: 'Projetos Concluídos' },
    { icon: Zap, value: '24/7', label: 'Suporte Técnico' }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Orçamento',
      description: 'Preencha nosso formulário e receba uma análise personalizada para sua necessidade.'
    },
    {
      number: '02',
      title: 'Análise',
      description: 'Nossa equipe faz o estudo completo e define o melhor projeto para máxima economia.'
    },
    {
      number: '03',
      title: 'Instalação',
      description: 'Instalação profissional com equipe certificada, equipamentos de ponta e segurança total.'
    },
    {
      number: '04',
      title: 'Ativação',
      description: 'Sistema homologado e funcionando. A partir daqui você começa a economizar imediatamente.'
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % processSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-solar-blue/5 to-solar-yellow/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Quem Somos"
          subtitle="Transformando luz do sol em economia e sustentabilidade para milhares de brasileiros"
          centered
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-solar-dark mb-4">
                  Mais que energia, <span className="text-solar-yellow">liberdade</span>
                </h3>
                <p className="text-lg text-solar-dark/70 leading-relaxed">
                  Com mais de 10 anos de experiência no mercado fotovoltaico, nossa equipe técnica é composta por engenheiros e instaladores certificados, garantindo a máxima eficiência em cada projeto.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-solar-dark mb-4">
                  Cuidamos de <span className="text-solar-blue">tudo</span> para você
                </h3>
                <p className="text-lg text-solar-dark/70 leading-relaxed">
                  Não vendemos apenas placas, entregamos liberdade. Cuidamos de todo o processo: desde a análise de viabilidade, projeto de engenharia, homologação junto à concessionária até a instalação final.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="w-6 h-6 text-solar-yellow" />
                    <span className="text-3xl font-bold text-solar-dark">{stat.value}</span>
                  </div>
                  <p className="text-sm text-solar-dark/60 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-solar-dark mb-6 text-center"
            >
              Imagens das nossas últimas instalações
            </motion.h3>

            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-96 overflow-hidden">
                <div className="flex h-full transition-transform duration-700 ease-in-out">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex-shrink-0 relative"
                      style={{
                        transform: `translateX(-${currentImage * 100}%)`
                      }}
                    >
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      {currentImage === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="absolute bottom-8 left-6 right-6 text-white"
                        >
                          <h4 className="text-2xl font-bold mb-4">{image.alt}</h4>
                          <p className="text-sm opacity-90">Instalação profissional com garantia e qualidade</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={prevImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-solar-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  onClick={nextImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-solar-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImage === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-solar-dark/60">
                Use as setas ← → ou clique nos indicadores para navegar
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-solar-blue to-solar-yellow rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">Pronto para transformar sua energia?</h3>
              <p className="text-xl mb-8 opacity-90">
                Junte-se aos milhares de brasileiros que já economizam com energia solar
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-solar-dark px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow duration-300"
              >
                Fale com um Especialista
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-solar-dark mb-16 text-center">
            Como Funciona Nosso Processo
          </h3>

          <div className="max-w-5xl mx-auto">
            <div className="relative flex items-center justify-center">
              <motion.button
                onClick={prevStep}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-0 z-50 bg-white/90 backdrop-blur-sm text-solar-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="relative w-full max-w-2xl h-64 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 120, rotate: 8, scale: 0.92 }}
                    animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -120, rotate: -8, scale: 0.92 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="w-full"
                  >
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 w-full">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-bold text-solar-yellow tracking-widest">
                          ETAPA {processSteps[currentStep].number}
                        </span>
                        <span className="text-xs font-medium text-solar-dark/50">
                          {currentStep + 1} de {processSteps.length}
                        </span>
                      </div>

                      <h4 className="text-3xl font-bold text-solar-dark mb-4">
                        {processSteps[currentStep].title}
                      </h4>

                      <p className="text-lg text-solar-dark/70 leading-relaxed">
                        {processSteps[currentStep].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.button
                onClick={nextStep}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-0 z-50 bg-white/90 backdrop-blur-sm text-solar-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="mt-6 max-w-2xl mx-auto">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-solar-blue to-solar-yellow rounded-full"
                  initial={false}
                  animate={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                ></motion.div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-solar-dark/60">
                Navegue pelas etapas usando as setas
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;