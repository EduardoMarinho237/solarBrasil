'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; href: string }>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, onClose, navLinks }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 bg-white shadow-lg z-[60] md:hidden"
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-solar-dark">Solar Brasil</span>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.href.replace('#', ''));
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                    onClose();
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="block text-lg font-medium text-solar-dark/70 hover:text-solar-blue transition-colors py-3 border-b border-gray-100"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#simulator"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('simulator');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                  onClose();
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                className="block bg-solar-yellow text-solar-dark px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg text-center mt-6"
              >
                Simular Agora
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
