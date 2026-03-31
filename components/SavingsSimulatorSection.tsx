'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomDropdown from './CustomDropdown';
import LocationDropdown from './LocationDropdown';

const SavingsSimulatorSection = () => {
  const [monthlyBill, setMonthlyBill] = useState(300);
  const [years, setYears] = useState(5);
  const [savings, setSavings] = useState(0);
  const [type, setType] = useState('Residencial');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    setSavings(monthlyBill * 0.95 * 12 * years);
  }, [monthlyBill, years]);

  return (
    <section id="simulator" className="py-24 bg-solar-dark text-white relative z-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000" 
          alt="Solar background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-solar-dark/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simule sua <span className="text-solar-yellow">Economia</span></h2>
            <p className="text-white/70 text-lg mb-10">
              Descubra quanto você pode poupar em 25 anos ao migrar para a energia solar com a Solar Brasil.
            </p>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-4">Quanto você gasta por mês? (R$)</label>
                <input 
                  type="range" 
                  min="100" 
                  max="5000" 
                  step="50"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-solar-yellow"
                />
                <div className="flex justify-between mt-2 text-solar-yellow font-bold text-xl">
                  <span>R$ {monthlyBill}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-4">Período de economia (Anos)</label>
                <input 
                  type="range" 
                  min="1" 
                  max="25" 
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-solar-yellow"
                />
                <div className="flex justify-between mt-2 text-solar-yellow font-bold text-xl">
                  <span>{years} {years === 1 ? 'ano' : 'anos'}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomDropdown 
                  label="Tipo" 
                  options={['Residencial', 'Comercial', 'Industrial']} 
                  value={type} 
                  onChange={setType} 
                />
                <LocationDropdown
                  label="Estado"
                  value={state}
                  onChange={(selectedState) => {
                    setState(selectedState);
                    setCity('');
                  }}
                  type="estado"
                />
              </div>

              <LocationDropdown
                label="Cidade"
                value={city}
                onChange={setCity}
                type="cidade"
                disabled={!state}
                selectedEstado={state}
              />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-solar-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-lg opacity-70 mb-2">Economia estimada em {years} {years === 1 ? 'ano' : 'anos'}</p>
            <motion.p 
              key={savings}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl md:text-7xl font-bold text-solar-yellow mb-8 relative z-10"
            >
              R$ {savings.toLocaleString('pt-BR')}
            </motion.p>
            <div className="h-px bg-white/10 mb-8" />
            <button className="w-full bg-solar-yellow text-solar-dark py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-solar-yellow/20 cursor-pointer relative z-10">
              Receber Estudo Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsSimulatorSection;
