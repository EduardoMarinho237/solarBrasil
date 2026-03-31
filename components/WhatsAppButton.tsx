'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer group"
    >
      <MessageSquare className="w-8 h-8 group-hover:scale-110 transition-transform" />
      <motion.div 
        className="absolute -top-12 right-0 bg-white text-solar-dark px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
        initial={{ y: 10 }}
        whileHover={{ y: 0 }}
      >
        Fale conosco agora!
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
