const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

// GET especialidades
app.get("/api/especialidades", async (req, res) => {
  const especialidades = await prisma.especialidade.findMany();
  res.json(especialidades);
});

// POST agendamento
app.post("/api/agendamentos", async (req, res) => {
  const { nomePaciente, emailPaciente, dataConsulta, especialidadeId } =
    req.body;

  try {
    const agendamento = await prisma.agendamento.create({
      data: {
        nomePaciente,
        emailPaciente,
        dataConsulta: new Date(dataConsulta),
        especialidadeId,
      },
    });

    res.status(201).json(agendamento);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar agendamento." });
  }
});

// GET agendamentos
app.get("/api/agendamentos", async (req, res) => {
  const agendamentos = await prisma.agendamento.findMany({
    include: { especialidade: true },
    orderBy: { dataConsulta: "asc" },
  });
  res.json(agendamentos);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);
});
