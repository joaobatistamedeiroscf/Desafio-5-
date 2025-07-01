import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Plus, Phone, MapPin, BarChart2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    {
      icon: Plus,
      label: 'Consultas',
      onClick: () => navigate('/agendamento'),
      bgColor: 'bg-white',
      iconColor: 'text-telemed-blue',
    },
    {
      icon: () => (
        <div className="w-12 h-12 flex items-center justify-center">
          <div className="w-8 h-6 bg-white rounded-sm relative">
            <div className="absolute top-1 left-1 w-2 h-2 bg-telemed-blue rounded-full"></div>
            <div className="absolute top-1 right-1 w-3 h-1 bg-telemed-blue rounded-sm"></div>
            <div className="absolute bottom-1 left-1 w-4 h-1 bg-telemed-blue rounded-sm"></div>
          </div>
        </div>
      ),
      label: 'Medicamentos',
      onClick: () => navigate('/medicamentos'),
      bgColor: 'bg-white',
      iconColor: 'text-telemed-blue',
    },
    {
      icon: Phone,
      label: 'Telefone',
      onClick: () => navigate('/telefone'),
      bgColor: 'bg-white',
      iconColor: 'text-telemed-blue',
    },
    {
      icon: MapPin,
      label: 'Localização',
      onClick: () => navigate('/localizacao'),
      bgColor: 'bg-white',
      iconColor: 'text-telemed-blue',
    },
    {
      icon: BarChart2,
      label: 'Análise de Dados',
      onClick: () =>
        window.open(
          'https://app.powerbi.com/view?r=eyJrIjoiOGExOGI0ZTAtNmY2ZC00ZTY5LTkxNGMtMDNmYWNjNzE4Zjk1IiwidCI6ImIzYzAwMzk5LTEwNjEtNGEyOS04NWE2LWQxNWEyMzljM2FkNSJ9',
          '_blank'
        ),
      bgColor: 'bg-white',
      iconColor: 'text-telemed-blue',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-telemed-blue to-telemed-darkBlue p-4">
      <div className="max-w-md mx-auto">
        {/* Header with User Info */}
        <div className="bg-telemed-lightBlue/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div>
                <h2 className="text-white font-semibold text-lg">{user?.name}</h2>
                <p className="text-white/70 text-sm">ID: {user?.id}</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="text-white hover:bg-white/10 p-2 rounded-full"
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="bg-telemed-lightBlue/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                {React.createElement(
                  item.icon,
                  { size: 32, className: item.iconColor }
                )}
              </div>
              <p className="text-white font-medium text-center">{item.label}</p>
            </button>
          ))}
        </div>

        {/* Plus Button at Bottom */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200">
            <Plus size={24} className="text-telemed-blue" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
