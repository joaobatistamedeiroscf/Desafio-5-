import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Telefone {
  cidade: string;
  numero: string;
}

const TelefonePage = () => {
  const navigate = useNavigate();

  const cidadesMaranhao = [
    "Açailândia", "Afonso Cunha", "Água Doce do Maranhão", "Alcântara", "Aldeias Altas", "Altamira do Maranhão",
    "Alto Alegre do Maranhão", "Alto Alegre do Pindaré", "Alto Parnaíba", "Amapá do Maranhão", "Amarante do Maranhão",
    "Anajatuba", "Anapurus", "Apicum-Açu", "Araguanã", "Araioses", "Arame", "Arari", "Axixá", "Bacabal", "Bacabeira",
    "Bacuri", "Bacurituba", "Balsas", "Barão de Grajaú", "Barra do Corda", "Barreirinhas", "Bela Vista do Maranhão",
    "Belágua", "Benedito Leite", "Bequimão", "Bernardo do Mearim", "Boa Vista do Gurupi", "Bom Jardim", "Bom Jesus das Selvas",
    "Bom Lugar", "Brejo", "Brejo de Areia", "Buriti", "Buriti Bravo", "Buriticupu", "Buritirana", "Cachoeira Grande",
    "Cajapió", "Cajari", "Campestre do Maranhão", "Cândido Mendes", "Cantanhede", "Capinzal do Norte", "Carolina", "Carutapera",
    "Caxias", "Cedral", "Central do Maranhão", "Centro do Guilherme", "Centro Novo do Maranhão", "Chapadinha", "Cidelândia",
    "Codó", "Coelho Neto", "Colinas", "Conceição do Lago-Açu", "Coroatá", "Cururupu", "Davinópolis", "Dom Pedro", "Duque Bacelar",
    "Esperantinópolis", "Estreito", "Feira Nova do Maranhão", "Fernando Falcão", "Formosa da Serra Negra", "Fortaleza dos Nogueiras",
    "Fortuna", "Godofredo Viana", "Gonçalves Dias", "Governador Archer", "Governador Edison Lobão", "Governador Eugênio Barros",
    "Governador Luiz Rocha", "Governador Newton Bello", "Governador Nunes Freire", "Graça Aranha", "Grajaú", "Guimarães", "Humberto de Campos",
    "Icatu", "Igarapé do Meio", "Igarapé Grande", "Imperatriz", "Itaipava do Grajaú", "Itapecuru Mirim", "Itinga do Maranhão",
    "Jatobá", "Jenipapo dos Vieiras", "João Lisboa", "Joselândia", "Junco do Maranhão", "Lago da Pedra", "Lago do Junco", "Lago dos Rodrigues",
    "Lago Verde", "Lagoa do Mato", "Lagoa Grande do Maranhão", "Lajeado Novo", "Lima Campos", "Loreto", "Luís Domingues", "Magalhães de Almeida",
    "Maracaçumé", "Marajá do Sena", "Maranhãozinho", "Mata Roma", "Matinha", "Matões", "Matões do Norte", "Milagres do Maranhão", "Mirador",
    "Miranda do Norte", "Mirinzal", "Monção", "Montes Altos", "Morros", "Nina Rodrigues", "Nova Colinas", "Nova Iorque", "Nova Olinda do Maranhão",
    "Olho d'Água das Cunhãs", "Olinda Nova do Maranhão", "Paço do Lumiar", "Palmeirândia", "Paraibano", "Parnarama", "Passagem Franca",
    "Pastos Bons", "Paulino Neves", "Paulo Ramos", "Pedreiras", "Pedro do Rosário", "Penalva", "Peri Mirim", "Peritoró", "Pindaré-Mirim",
    "Pinheiro", "Pio XII", "Pirapemas", "Poção de Pedras", "Porto Franco", "Porto Rico do Maranhão", "Presidente Dutra", "Presidente Juscelino",
    "Presidente Médici", "Presidente Sarney", "Presidente Vargas", "Primeira Cruz", "Raposa", "Riachão", "Ribamar Fiquene", "Rosário",
    "Sambaíba", "Santa Filomena do Maranhão", "Santa Helena", "Santa Inês", "Santa Luzia", "Santa Luzia do Paruá", "Santa Quitéria do Maranhão",
    "Santa Rita", "Santana do Maranhão", "Santo Amaro do Maranhão", "Santo Antônio dos Lopes", "São Benedito do Rio Preto", "São Bento",
    "São Bernardo", "São Domingos do Azeitão", "São Domingos do Maranhão", "São Félix de Balsas", "São Francisco do Brejão", "São Francisco do Maranhão",
    "São João Batista", "São João do Carú", "São João do Paraíso", "São João do Soter", "São João dos Patos", "São José de Ribamar",
    "São José dos Basílios", "São Luís", "São Luís Gonzaga do Maranhão", "São Mateus do Maranhão", "São Pedro da Água Branca", "São Pedro dos Crentes",
    "São Raimundo das Mangabeiras", "São Raimundo do Doca Bezerra", "São Roberto", "São Vicente Ferrer", "Satubinha", "Senador Alexandre Costa",
    "Senador La Rocque", "Serrano do Maranhão", "Sítio Novo", "Sucupira do Norte", "Sucupira do Riachão", "Tasso Fragoso", "Timbiras", "Timon",
    "Trizidela do Vale", "Tufilândia", "Tuntum", "Turiaçu", "Turilândia", "Tutóia", "Urbano Santos", "Vargem Grande", "Viana", "Vila Nova dos Martírios",
    "Vitória do Mearim", "Vitorino Freire", "Zé Doca"
  ].sort();

  const telefonesFixos: Telefone[] = [
    { cidade: 'São Luís', numero: '(98) 3123-4567' },
    { cidade: 'Caxias', numero: '(99) 3222-3344' },
    { cidade: 'Imperatriz', numero: '(99) 3456-7890' },
    { cidade: 'São José de Ribamar', numero: '(98) 3234-5678' },
    { cidade: 'Timon', numero: '(86) 3344-5566' },
    { cidade: 'Grajaú', numero: '(99) 3377-8899' },
    { cidade: 'Barra do Corda', numero: '(99) 3555-6677' },
    { cidade: 'Balsas', numero: '(99) 3666-7788' },
    { cidade: 'Açailândia', numero: '(99) 3777-8899' },
    { cidade: 'Codó', numero: '(99) 3888-9900' },
  ];

  const [telefonesAdicionados, setTelefonesAdicionados] = useState<Telefone[]>([]);
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');

  useEffect(() => {
    const armazenados = localStorage.getItem('telefonesAdicionados');
    if (armazenados) {
      setTelefonesAdicionados(JSON.parse(armazenados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('telefonesAdicionados', JSON.stringify(telefonesAdicionados));
  }, [telefonesAdicionados]);

  const handleAdicionar = () => {
    if (cidade && numero) {
      setTelefonesAdicionados([...telefonesAdicionados, { cidade, numero }]);
      setCidade('');
      setNumero('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {}
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center">
        <button onClick={() => navigate(-1)} className="mr-4 text-white text-lg">
          ←
        </button>
        <h1 className="text-xl font-semibold">Telefones</h1>
      </div>

      {}
      <div className="max-w-md mx-auto mt-6 px-4 space-y-4">
        {}
        {[...telefonesFixos, ...telefonesAdicionados].map((tel, index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-3 flex justify-between items-center"
          >
            <span className="font-medium">{tel.cidade}</span>
            <span className="text-gray-600 text-sm">{tel.numero}</span>
          </div>
        ))}

        {}
        <div className="bg-white rounded shadow p-3 space-y-3">
          <h2 className="text-base font-semibold">Adicionar novo Telefone</h2>
          <select
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="w-full px-3 py-2 border rounded text-sm focus:outline-none bg-white"
          >
            <option value="">Selecione uma cidade</option>
            {cidadesMaranhao.map((c, index) => (
              <option key={index} value={c}>{c}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Telefone"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            className="w-full px-3 py-2 border rounded text-sm focus:outline-none"
          />
          <button
            onClick={handleAdicionar}
            className="w-full bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TelefonePage;
