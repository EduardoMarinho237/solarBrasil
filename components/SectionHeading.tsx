'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  align?: 'center' | 'left' | 'right';
}

const SectionHeading = ({ title, subtitle, centered = false, align = 'center' }: SectionHeadingProps) => (
  <div className={cn("mb-12", 
    centered && "text-center",
    align === 'left' && "text-left",
    align === 'right' && "text-right"
  )}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-solar-dark mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-lg text-solar-dark/60 max-w-2xl",
          centered ? "mx-auto" : "",
          align === 'left' && "ml-0",
          align === 'right' && "mr-0"
        )}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeading;
