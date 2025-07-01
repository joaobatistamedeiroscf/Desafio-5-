import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Medicamento {
  id: number;
  nome: string;
  categoria: string;
}

const medicamentosPosto: Medicamento[] = [
  { id: 1, nome: "Dipirona", categoria: "Analgésico" },
  { id: 2, nome: "Paracetamol", categoria: "Analgésico" },
  { id: 3, nome: "Ibuprofeno", categoria: "Anti-inflamatório" },
  { id: 4, nome: "Amoxicilina", categoria: "Antibiótico" },
  { id: 5, nome: "Omeprazol", categoria: "Gastrointestinal" },
  { id: 6, nome: "Losartana", categoria: "Anti-hipertensivo" },
  { id: 7, nome: "Metformina", categoria: "Antidiabético" },
];

const Medicamentos = () => {
  const navigate = useNavigate();
  const [listaMedicamentos, setListaMedicamentos] = useState<Medicamento[]>([]);

  useEffect(() => {
    // Simulação de carregamento de dados
    setListaMedicamentos(medicamentosPosto);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <div className="bg-blue-600 p-4 shadow-sm">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="text-white hover:bg-blue-700 p-2 rounded-full"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-white text-xl font-semibold">Medicamentos</h1>
        </div>
      </div>

      {/* Lista de Medicamentos */}
      <div className="max-w-xl mx-auto p-6 space-y-4">
        {listaMedicamentos.map((med) => (
          <div
            key={med.id}
            className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-semibold">{med.nome}</h2>
            <p className="text-gray-500">{med.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicamentos;