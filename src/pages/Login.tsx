import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (login(email, password)) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo ao Telemed Maranhão",
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Erro ao fazer login",
          description: "Email ou senha incorretos",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-telemed-blue to-telemed-darkBlue flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-telemed-lightBlue/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10 animate-fade-in">
         <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Imagem acima do campo de email */}
            <div className="flex justify-center mb-8">
              <img
                src="/public/assets/foto.png" // Altere para o caminho da sua imagem
                alt="Logo Telemed Maranhão"
                width={206}
                height={206}
                className="h-[206px] w-[206px] object-contain"
              />
            </div>
            {/* Email */}
            <div>
              <Input
                type="email"
                placeholder="jaoa1@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/90 border-none h-12 text-gray-800 placeholder-gray-500 rounded-xl"
                required
              />
            </div>

            {/* Password */}
            <div>
              <Input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/90 border-none h-12 text-gray-800 placeholder-gray-500 rounded-xl"
                required
              />
              {/* Esqueceu a senha? abaixo e à esquerda do input */}
              <div className="mt-2 text-left">
                <Link 
                  to="/forgot-password" 
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-telemed-green hover:bg-telemed-darkGreen text-white font-semibold h-12 rounded-xl transition-all duration-200"
            >
              {isLoading ? 'Acessando...' : 'Acessar'}
            </Button>

            {/* Register Link bem próxima ao botão, centralizada */}
            <div className="text-center mt-0">
              <span className="text-white/80 text-sm">
                Não tem conta?{' '}
                <Link 
                  to="/register" 
                  className="text-telemed-green hover:underline font-medium"
                >
                  Crie agora
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
