'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DeveloperButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <motion.a
        href="https://wa.me/5581991007965"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-6 bg-white shadow-lg rounded-full px-4 py-3 flex items-center gap-3 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
          <img
            src="/images/eduardo.png"
            alt="Eduardo Marinho"
            className="w-full h-full object-cover"
          />
        </div>

        <span className="text-sm font-medium text-gray-700">
          Desenvolvido por Eduardo Marinho
        </span>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-gray-800 text-white text-xs rounded-lg whitespace-normal w-64 text-center"
            >
              Esse site é apenas um projeto de demonstração, não pertence a nenhum cliente real. Clique para entrar em contato comigo!
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>

      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
              onClick={() => setShowModal(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-4 left-4 right-4 bg-white rounded-3xl shadow-2xl z-[70] md:hidden p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                    <img
                      src="/images/eduardo.png"
                      alt="Eduardo Marinho"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Eduardo Marinho</h3>
                    <p className="text-sm text-gray-600">Desenvolvedor Web</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="text-center mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Esse site é apenas um projeto de demonstração, não pertence a nenhum cliente real. Clique para entrar em contato comigo!
                </p>
              </div>

              <a
                href="https://wa.me/5581991007965"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-solar-yellow text-solar-dark py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-solar-yellow/20 text-center"
                onClick={() => setShowModal(false)}
              >
                Clique aqui para falar comigo!
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DeveloperButton;