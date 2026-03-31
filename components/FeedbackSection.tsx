'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Sun as SunIcon, Users } from 'lucide-react';
import confetti from 'canvas-confetti';

const FeedbackSection = () => {
  const [confettiStarted, setConfettiStarted] = useState(false);
  const confettiCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const section = document.getElementById('feedback');
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !confettiStarted) {
            setConfettiStarted(true);

            setTimeout(() => {
              const canvas = confettiCanvasRef.current;
              if (!canvas) return;

              const resizeCanvas = () => {
                const rect = section.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
              };

              resizeCanvas();
              window.addEventListener('resize', resizeCanvas);

              const myConfetti = confetti.create(canvas, {
                resize: true,
                useWorker: true
              });

              const duration = 8000;
              const end = Date.now() + duration;

              const frame = () => {
                myConfetti({
                  particleCount: 3,
                  angle: 60,
                  spread: 80,
                  origin: { x: 0, y: 0.2 }
                });

                myConfetti({
                  particleCount: 3,
                  angle: 120,
                  spread: 80,
                  origin: { x: 1, y: 0.2 }
                });

                if (Date.now() < end) {
                  requestAnimationFrame(frame);
                } else {
                  window.removeEventListener('resize', resizeCanvas);
                }
              };

              frame();
            }, 1000);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [confettiStarted]);

  const testimonials = [
    { name: "Ricardo Silva", role: "Empresário", text: "A redução na conta da minha fábrica foi impressionante. O atendimento da Solar Brasil foi impecável do início ao fim." },
    { name: "Ana Oliveira", role: "Dona de Casa", text: "Instalamos em nossa residência e hoje não nos preocupamos mais com o ar-condicionado ligado. Melhor investimento que fizemos." },
    { name: "Marcos Souza", role: "Produtor Rural", text: "A energia solar trouxe a estabilidade que eu precisava para minha irrigação. Empresa séria e comprometida com prazos." }
  ];

  return (
    <section id="feedback" className="py-24 bg-beige relative overflow-hidden">
      <canvas
        ref={confettiCanvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="O que dizem nossos clientes"
          subtitle="A satisfação de quem já transformou sua forma de consumir energia."
          centered
        />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-[32px] shadow-lg border border-solar-dark/5 cursor-pointer"
            >
              <div className="flex gap-1 mb-4 text-solar-yellow">
                {[...Array(5)].map((_, i) => <SunIcon key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-solar-dark/70 italic mb-6">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-solar-blue/10 rounded-full flex items-center justify-center">
                  <Users className="text-solar-blue w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-solar-dark">{item.name}</p>
                  <p className="text-xs text-solar-dark/50">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;