'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import LocationModal from './LocationModal';

interface LocationDropdownProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type: 'estado' | 'cidade';
  disabled?: boolean;
  selectedEstado?: string;
}

const LocationDropdown = ({ label, value, onChange, type, disabled = false, selectedEstado }: LocationDropdownProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative space-y-2">
        <label className={cn(
          "text-xs uppercase tracking-wider font-bold",
          disabled ? "opacity-40" : "opacity-60"
        )}>
          {label}
        </label>
        <div 
          onClick={() => !disabled && setIsModalOpen(true)}
          className={cn(
            "w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex justify-between items-center transition-all group",
            !disabled && "cursor-pointer hover:bg-white/20",
            disabled && "opacity-40 cursor-not-allowed"
          )}
        >
          <span className="font-medium">
            {value || (disabled ? 'Selecione um estado primeiro' : `Selecione ${type === 'estado' ? 'um estado' : 'uma cidade'}`)}
          </span>
          {!disabled && (
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          )}
        </div>
      </div>

      <LocationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={onChange}
        type={type}
        selectedEstado={selectedEstado}
      />
    </>
  );
};

export default LocationDropdown;
