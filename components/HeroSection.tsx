'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.8;
      video.muted = true;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented, will play on interaction");
        });
      }
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen md:min-h-screen flex items-center justify-center overflow-hidden pb-20 md:pb-0">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
        >
          <source src="/videos/solar-panel.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-solar-dark/60" />
      </div>

      {!isVideoLoaded && (
        <div className="absolute inset-0 z-0 bg-solar-dark">
          <div className="w-full h-full bg-gradient-to-br from-solar-dark via-solar-blue/20 to-solar-dark" />
        </div>
      )}

      <motion.div 
        style={{ opacity: heroOpacity }}
        className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-[2.75rem] md:text-7xl font-bold mb-6 leading-tight mt-18 md:mt-0">
            Energia Solar que
            <span className="block text-solar-yellow">Transforma o Futuro</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Economize até 95% na conta de luz enquanto ajuda o planeta. 
            Soluções completas de energia solar para residências e empresas.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button 
            onClick={() => {
              const simulatorSection = document.getElementById('simulator');
              if (simulatorSection) {
                simulatorSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group bg-solar-yellow text-solar-dark px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-solar-yellow/30 flex items-center gap-3"
          >
            <Play className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Simular Economia
          </button>
          
          <button className="group bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-3">
            Falar com Especialista
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div 
          className="mt-16 mb-16 md:mb-0 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-solar-yellow mb-2">95%</div>
            <div className="text-white/70">Economia na Conta</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-solar-yellow mb-2">25+</div>
            <div className="text-white/70">Anos de Durabilidade</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-solar-yellow mb-2">100%</div>
            <div className="text-white/70">Energia Limpa</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
