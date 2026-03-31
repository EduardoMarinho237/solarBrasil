'use client';

import { motion } from 'framer-motion';
import { Globe, Phone, Calculator } from 'lucide-react';

interface LinkButtonProps {
  text: string;
  url: string;
  icon: React.ReactNode;
}

function LinkButton({ text, url, icon }: LinkButtonProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-sm flex items-center justify-center gap-3 p-5 bg-solar-blue text-white rounded-2xl hover:bg-solar-yellow hover:text-solar-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-center w-8 h-8">{icon}</div>
      <span className="font-semibold text-lg">{text}</span>
    </motion.a>
  );
}

export default function LinksPage() {
  const links = [
    {
      text: 'Nosso site',
      url: '/',
      icon: <Globe size={20} />
    },
    {
      text: 'Falar com especialista',
      url: 'https://wa.me/5511999999999',
      icon: <Phone size={20} />
    },
    {
      text: 'Orçamento',
      url: '/#simulador',
      icon: <Calculator size={20} />
    }
  ];

  const clouds = [
    { src: '/images/clouds/cloud.png', top: '40%', size: 160, duration: 38, opacity: 0.6, startX: '-40%' },
    { src: '/images/clouds/cloud.png', top: '52%', size: 170, duration: 42, opacity: 0.55, startX: '10%' },

    { src: '/images/clouds/cloud2.png', top: '35%', size: 150, duration: 46, opacity: 0.55, startX: '30%' },
    { src: '/images/clouds/cloud2.png', top: '58%', size: 165, duration: 50, opacity: 0.5, startX: '-10%' },

    { src: '/images/clouds/cloud3.png', top: '44%', size: 140, duration: 58, opacity: 0.45, startX: '55%' },
    { src: '/images/clouds/cloud3.png', top: '60%', size: 135, duration: 62, opacity: 0.4, startX: '5%' },

    { src: '/images/clouds/cloud4.png', top: '38%', size: 175, duration: 44, opacity: 0.55, startX: '70%' },
    { src: '/images/clouds/cloud4.png', top: '55%', size: 165, duration: 48, opacity: 0.5, startX: '-25%' },

    { src: '/images/clouds/cloud5.png', top: '42%', size: 150, duration: 54, opacity: 0.45, startX: '85%' },
    { src: '/images/clouds/cloud5.png', top: '57%', size: 145, duration: 60, opacity: 0.4, startX: '20%' },
    { src: '/images/clouds/cloud5.png', top: '48%', size: 155, duration: 52, opacity: 0.45, startX: '-15%' },

    { src: '/images/clouds/cloud6.png', top: '36%', size: 160, duration: 56, opacity: 0.45, startX: '45%' },
    { src: '/images/clouds/cloud6.png', top: '50%', size: 150, duration: 64, opacity: 0.4, startX: '-35%' },
    { src: '/images/clouds/cloud6.png', top: '62%', size: 140, duration: 70, opacity: 0.35, startX: '60%' }
  ];

  return (
    <div className="h-screen w-full bg-beige relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden block md:hidden">
        {clouds.map((cloud, index) => (
          <motion.img
            key={index}
            src={cloud.src}
            alt="Nuvem"
            className="absolute"
            style={{
              top: cloud.top,
              width: cloud.size,
              height: 'auto',
              opacity: cloud.opacity
            }}
            initial={{ x: cloud.startX }}
            animate={{ x: '120vw' }}
            transition={{
              duration: cloud.duration,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <motion.img
        src="/images/sun.png"
        alt="Sol"
        className="absolute -top-36 -left-36 w-[360px] h-[360px] md:w-[420px] md:h-[420px] opacity-[0.85] z-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <img
          src="/images/solar-panel.png"
          alt="Painel Solar"
          className="w-1/2 h-1/2 md:w-[45%] md:h-[45%] object-contain opacity-100 absolute bottom-0 md:bottom-8 right-0 translate-x-1/4 translate-y-1/4"
        />
      </div>

      <div className="relative z-30 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8 w-full max-w-md flex flex-col items-center"
        >
          <div className="space-y-6 w-full flex flex-col items-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold tracking-tighter text-solar-blue text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Solar Brasil
            </motion.h1>
            <p className="text-solar-yellow text-lg text-center">Energia solar para seu futuro</p>
          </div>

          <div className="space-y-4 w-full flex flex-col items-center">
            {links.map((link, index) => (
              <motion.div
                key={link.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="w-full flex justify-center"
              >
                <LinkButton {...link} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-6 space-y-2 text-solar-dark/60 w-full flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-8 w-full">
              <div className="text-center">
                <div className="font-semibold text-solar-blue text-lg">+10</div>
                <div className="text-sm">anos no mercado</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-solar-blue text-lg">+500</div>
                <div className="text-sm">clientes satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-solar-blue text-lg">100%</div>
                <div className="text-sm">energia limpa</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}