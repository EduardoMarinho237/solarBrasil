'use client';

import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhySolarSection from '@/components/WhySolarSection';
import SavingsSimulatorSection from '@/components/SavingsSimulatorSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import FeedbackSection from '@/components/FeedbackSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-solar-yellow z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const positions = [
            { x: 10, y: 20, scale: 0.5 },
            { x: 25, y: 60, scale: 0.8 },
            { x: 45, y: 35, scale: 0.6 },
            { x: 65, y: 80, scale: 0.7 },
            { x: 80, y: 25, scale: 0.9 },
            { x: 15, y: 75, scale: 0.4 },
            { x: 35, y: 50, scale: 0.6 },
            { x: 55, y: 15, scale: 0.8 },
            { x: 75, y: 65, scale: 0.5 },
            { x: 90, y: 40, scale: 0.7 },
            { x: 5, y: 55, scale: 0.6 },
            { x: 30, y: 85, scale: 0.8 },
            { x: 50, y: 30, scale: 0.5 },
            { x: 70, y: 70, scale: 0.9 },
            { x: 85, y: 10, scale: 0.4 },
            { x: 20, y: 45, scale: 0.7 },
            { x: 40, y: 90, scale: 0.6 },
            { x: 60, y: 20, scale: 0.8 },
            { x: 78, y: 55, scale: 0.5 },
            { x: 95, y: 85, scale: 0.7 }
          ];
          
          const pos = positions[i % positions.length];
          const duration = 15 + (i % 10) * 2;
          const delay = i * 1.5;
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-solar-yellow/20 rounded-full"
              initial={{ 
                x: `${pos.x}%`, 
                y: `${pos.y}%`,
                scale: pos.scale
              }}
              animate={{ 
                y: [null, "-20%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: duration, 
                repeat: Infinity,
                ease: "linear",
                delay: delay
              }}
            />
          );
        })}
      </div>

      <HeroSection />
      <WhySolarSection />
      <SavingsSimulatorSection />
      <BenefitsSection />
      <AboutSection />
      <FeedbackSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
