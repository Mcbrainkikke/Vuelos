const express = require('express');
const router = express.Router();
const vueloController = require('../controllers/vueloController');

// Ruta para obtener horarios de vuelos
router.get('/horarios', vueloController.getHorarios);



module.exports = router;
