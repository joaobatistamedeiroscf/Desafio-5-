const especialidades = require("../data/especialidades.json");

const getEspecialidades = (req, res) => {
  res.json(especialidades);
};

module.exports = { getEspecialidades };
