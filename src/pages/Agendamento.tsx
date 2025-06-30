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
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <div className="bg-blue-600 p-4 shadow-sm">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="text-white hover:bg-blue-700 p-2 rounded-full"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-white text-xl font-semibold">Agendamento</h1>
        </div>
      </div>

      {/* Especialidades List */}
      <div className="p-4 space-y-4">
        {especialidades.map((especialidade, index) => (
          <button
            key={especialidade}
            onClick={() => handleEspecialidadeClick(especialidade)}
            className="w-full bg-white p-4 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-200 text-left"
          >
            <div className="flex items-center justify-between">
              <span className="text-blue-900 font-medium">{especialidade}</span>
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Agendamento;