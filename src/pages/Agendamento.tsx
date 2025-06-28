
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Agendamento = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const especialidades = [
    'ANGIOLOGISTA',
    'CARDIOLOGISTA',
    'DERMATOLOGISTA',
    'NEUROLOGISTA',
    'OFTALMOLOGISTA',
    'PNEUMOLOGISTA',
    'UROLOGISTA',
  ];

  const handleEspecialidadeClick = (especialidade: string) => {
    toast({
      title: "Especialidade selecionada!",
      description: `Você selecionou ${especialidade}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-telemed-blue to-telemed-darkBlue">
      {/* Header */}
      <div className="bg-telemed-blue/80 backdrop-blur-sm p-4 border-b border-white/10">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="text-white hover:bg-white/10 p-2 rounded-full"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-white text-lg font-semibold">Agendamento</h1>
        </div>
      </div>

      {/* Especialidades List */}
      <div className="p-4 space-y-3">
        {especialidades.map((especialidade, index) => (
          <button
            key={especialidade}
            onClick={() => handleEspecialidadeClick(especialidade)}
            className="w-full bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-200 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-medium text-left">{especialidade}</span>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Agendamento;
