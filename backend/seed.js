const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const especialidades = [
    "ANGIOLOGISTA",
    "CARDIOLOGISTA",
    "DERMATOLOGISTA",
    "NEUROLOGISTA",
    "OFTALMOLOGISTA",
    "PNEUMOLOGISTA",
    "UROLOGISTA",
  ];

  for (const nome of especialidades) {
    await prisma.especialidade.upsert({
      where: { nome },
      update: {},
      create: { nome },
    });
  }

  console.log("Especialidades inseridas!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
