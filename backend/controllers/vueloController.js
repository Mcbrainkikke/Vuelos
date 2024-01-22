// vueloController.js
const Vuelo = require('../models/vueloModels');

// Controlador para obtener horarios de vuelos
const getHorarios = async (req, res) => {
  try {
    
    const { origen, destino } = req.query;
    console.log('Origen:', origen);
    console.log('Destino:', destino);

    const horariosVuelos = await Vuelo.find({ origen, destino }, 'origen destino aerolinea horario');
    console.log('Horarios de vuelos:', horariosVuelos);

    res.json(horariosVuelos);
  } catch (error) {
    console.error('Error al obtener horarios de vuelos:', error);
    res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
};

module.exports = {
  getHorarios,
};


