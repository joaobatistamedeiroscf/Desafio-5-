const express = require("express");
const router = express.Router();
const { getEspecialidades } = require("../controllers/especialidadeController");

router.get("/", getEspecialidades);

module.exports = router;
