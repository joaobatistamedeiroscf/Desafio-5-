
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    cpf: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setFormData(prev => ({ ...prev, cpf: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (register(formData)) {
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Faça login para acessar o sistema",
        });
        navigate('/login');
      } else {
        toast({
          title: "Erro ao cadastrar",
          description: "Email ou CPF já cadastrados",
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
          
             {/* Imagem acima do campo de email */}
            <div className="flex justify-center mb-8">
              <img
                src="/public/assets/cadastro.png" // Altere para o caminho da sua imagem
                alt="Logo Telemed Maranhão"

              />
            </div>

           <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome Completo */}
            <div>
              <label className="text-white text-sm font-medium mb-2 block">NOME COMPLETO</label>
              <Input
                type="text"
                name="name"
                placeholder="Digite seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white/90 border-none h-12 text-gray-800 placeholder-gray-500 rounded-xl"
                required
              />
            </div>

            {/* Data de Nascimento */}
            <div>
              <label className="text-white text-sm font-medium mb-2 block">DATA DE NASCIMENTO</label>
              <Input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                className="bg-white/90 border-none h-12 text-gray-800 rounded-xl"
                required
              />
            </div>

            {/* CPF */}
            <div>
              <label className="text-white text-sm font-medium mb-2 block">CPF</label>
              <Input
                type="text"
                placeholder="000.000.000-00"
                value={formData.cpf}
                onChange={handleCPFChange}
                maxLength={14}
                className="bg-white/90 border-none h-12 text-gray-800 placeholder-gray-500 rounded-xl"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white text-sm font-medium mb-2 block">E-MAIL</label>
              <Input
                type="email"
                name="email"
                placeholder="joao1@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white/90 border-none h-12 text-gray-800 placeholder-gray-500 rounded-xl"
                required
              />
            </div>

            {/* Senha */}
            <div>
              <label className="text-white text-sm font-medium mb-2 block">CRIE UMA SENHA</label>
              <Input
                type="password"
                name="password"
                placeholder="••••••••••••"
                value={formData.password}
                onChange={handleInputChange}
                className="bg-white/90 border-none h-12 text-gray-800 placeholder-gray-500 rounded-xl"
                required
              />
            </div>

            {/* Register Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-telemed-green hover:bg-telemed-darkGreen text-white font-semibold h-12 rounded-xl transition-all duration-200"
              >
                {isLoading ? 'Cadastrando...' : 'CADASTRAR'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
