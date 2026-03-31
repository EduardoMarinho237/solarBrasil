'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CustomDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

const CustomDropdown = ({ label, options, value, onChange }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={cn("relative space-y-2", isOpen ? "z-30" : "z-0")}>
      <label className="text-xs uppercase tracking-wider opacity-60 font-bold">{label}</label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex justify-between items-center cursor-pointer hover:bg-white/20 transition-all group"
      >
        <span className="font-medium">{value}</span>
        <ChevronRight className={cn("w-5 h-5 transition-transform", isOpen ? "rotate-90" : "group-hover:translate-x-1")} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-solar-dark border border-white/10 rounded-2xl overflow-hidden z-20 shadow-2xl"
          >
            {options.map((opt) => (
              <div 
                key={opt}
                onClick={() => { onChange(opt); setIsOpen(false); }}
                className="p-4 hover:bg-solar-yellow hover:text-solar-dark transition-colors cursor-pointer font-medium"
              >
                {opt}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdown;
