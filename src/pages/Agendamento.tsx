import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Especialidade {
  id: number;
  nome: string;
}

const Agendamento = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);
  const [form, setForm] = useState({
    nomePaciente: "",
    emailPaciente: "",
    dataConsulta: "",
    especialidadeId: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/api/especialidades")
      .then((res) => res.json())
      .then((data) => setEspecialidades(data))
      .catch(() => setEspecialidades([]));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/agendamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          especialidadeId: Number(form.especialidadeId),
        }),
      });

      if (response.ok) {
        toast({
          title: "Agendamento realizado!",
          description: "Sua consulta foi marcada com sucesso.",
        });
        setForm({
          nomePaciente: "",
          emailPaciente: "",
          dataConsulta: "",
          especialidadeId: "",
        });
      } else {
        const err = await response.json();
        toast({
          title: "Erro ao agendar",
          description: err.error || "Tente novamente mais tarde.",
        });
      }
    } catch (error) {
      toast({
        title: "Erro na conexão",
        description: "Verifique se o servidor está rodando.",
      });
    }
  };

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
          <h1 className="text-white text-xl font-semibold">Agendamento</h1>
        </div>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-4">
        <input
          type="text"
          name="nomePaciente"
          placeholder="Nome do Paciente"
          value={form.nomePaciente}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />

        <input
          type="email"
          name="emailPaciente"
          placeholder="E-mail"
          value={form.emailPaciente}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />

        <input
          type="datetime-local"
          name="dataConsulta"
          value={form.dataConsulta}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />

        <select
          name="especialidadeId"
          value={form.especialidadeId}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        >
          <option value="">Selecione uma especialidade</option>
          {especialidades.map((esp) => (
            <option key={esp.id} value={esp.id}>
              {esp.nome}
            </option>
          ))}
        </select>

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
        >
          Agendar Consulta
        </Button>
      </form>
    </div>
  );
};

export default Agendamento;
