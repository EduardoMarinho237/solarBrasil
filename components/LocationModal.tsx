'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const brasilEstados = [
  { sigla: 'AC', nome: 'Acre' },
  { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' },
  { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' },
  { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' },
  { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goiás' },
  { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' },
  { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' },
  { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' },
  { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' },
  { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' },
  { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' },
  { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraima' },
  { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' },
  { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' }
];

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
  type: 'estado' | 'cidade';
  selectedEstado?: string;
}

const LocationModal = ({ isOpen, onClose, onSelect, type, selectedEstado }: LocationModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cidades, setCidades] = useState<string[]>([]);
  const [loadingCidades, setLoadingCidades] = useState(false);

  useEffect(() => {
    if (type === 'cidade' && selectedEstado) {
      const estadoSelecionado = brasilEstados.find(estado => estado.nome === selectedEstado);
      const siglaEstado = estadoSelecionado?.sigla;
      
      if (siglaEstado) {
        setLoadingCidades(true);
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${siglaEstado}/municipios`)
          .then(response => response.json())
          .then(data => {
            const nomesCidades = data.map((municipio: any) => municipio.nome).sort();
            setCidades(nomesCidades);
          })
          .catch(error => {
            console.error('Erro ao buscar cidades:', error);
            setCidades([]);
          })
          .finally(() => {
            setLoadingCidades(false);
          });
      }
    }
  }, [type, selectedEstado]);

  const options = useMemo(() => {
    if (type === 'estado') {
      return brasilEstados.filter(estado => 
        estado.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        estado.sigla.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return cidades.filter(cidade => 
        cidade.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }, [searchTerm, type, cidades]);

  useEffect(() => {
    setSearchTerm('');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 400 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-solar-dark">
                Selecionar {type === 'estado' ? 'Estado' : 'Cidade'}
              </h3>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Buscar ${type === 'estado' ? 'estado' : 'cidade'}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-solar-blue/20 focus:border-solar-blue text-gray-900 placeholder-gray-500"
                autoFocus
              />
            </div>
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {type === 'cidade' && loadingCidades ? (
              <div className="p-8 text-center text-gray-500">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-solar-blue mx-auto mb-4"></div>
                <p>Carregando cidades...</p>
              </div>
            ) : options.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p>Nenhum resultado encontrado</p>
              </div>
            ) : (
              <div className="p-2">
                {options.map((option, index) => {
                  let displayValue: string;
                  let selectValue: string;
                  
                  if (type === 'estado') {
                    const estado = option as { sigla: string; nome: string };
                    displayValue = `${estado.nome} - ${estado.sigla}`;
                    selectValue = estado.nome;
                  } else {
                    displayValue = option as string;
                    selectValue = option as string;
                  }

                  return (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.01 }}
                      onClick={() => {
                        onSelect(selectValue);
                        onClose();
                      }}
                      className="w-full text-left p-4 rounded-xl hover:bg-solar-yellow/10 hover:text-solar-dark transition-colors group"
                    >
                      <div className="font-medium text-solar-dark group-hover:text-solar-blue">
                        {displayValue}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LocationModal;
