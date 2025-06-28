
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const ForgotPassword = () => {
  const [identifier, setIdentifier] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (resetPassword(identifier)) {
        toast({
          title: "Conta encontrada!",
          description: "Instruções enviadas para seu email",
        });
        navigate('/login');
      } else {
        toast({
          title: "Conta não encontrada",
          description: "Verifique os dados informados",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-telemed-blue to-telemed-darkBlue flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <div className="mb-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/login')}
            className="text-white hover:bg-white/10 p-2 rounded-full"
          >
            <ArrowLeft size={24} />
            <span className="ml-2 text-sm">VOLTAR</span>
          </Button>
        </div>

        <div className="bg-telemed-lightBlue/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10 animate-fade-in">
          {/* Logo Image */}
          <div className="flex justify-center  mt-0">
            <img
              src="/public/assets/homemcomlupa.png"
              alt="Homem com Lupa"
            />
          </div>

          <h2 className="text-white text-xl font-semibold text-center mb-2">ENCONTRE A SUA CONTA</h2>
          <p className="text-white/80 text-sm text-center mb-6">
            Insira seu CPF ou Email para procurar sua conta
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* CPF or Email Input */}
            <div>
              <Input
                type="text"
                placeholder="CPF ou E-mail"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="bg-white/90 border-none h-12 text-gray-800 placeholder-gray-500 rounded-xl"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-telemed-green hover:bg-telemed-darkGreen text-white font-semibold h-12 rounded-xl transition-all duration-200"
            >
              {isLoading ? 'Procurando...' : 'ENVIAR'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
