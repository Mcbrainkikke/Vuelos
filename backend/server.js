// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Vuelo = require('./models/vueloModels'); 
const vueloRoutes = require('./routes/vueloRoutes');

const app = express();

//conexion a la base de datos
require('./conexion');


// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/vuelos', vueloRoutes);


// Ruta para obtener todos los vuelos
app.get('/api/Vuelo', async (req, res) => {
    try {
      const vuelos = await Vuelo.find();
      res.json(vuelos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los vuelos' });
    }
  });
  

  // Ruta para obtener horarios de vuelos
  // server.js
app.get('/api/vuelos/horarios', async (req, res) => {
  try {
    const { origen, destino } = req.query;

    if (!origen || !destino) {
      return res.status(400).json({ error: 'Se requieren parámetros de consulta: origen y destino' });
    }

    console.log(`Intentando obtener horarios de vuelos entre ${origen} y ${destino}...`);
    const horariosVuelos = await Vuelo.find({ origen, destino }, 'aerolinea horario');
    res.json(horariosVuelos);
  } catch (error) {
    console.error('Error al obtener horarios de vuelos:', error);
    res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
});

// Ruta para obtener información de vuelos
app.get('/api/vuelos/informacion', async (req, res) => {
  try {
    const { fecha, horario, categoriaAsiento, aerolinea, vuelosDirectos } = req.query;
    console.log('Parámetros de búsqueda:', { fecha, horario, categoriaAsiento, aerolinea, vuelosDirectos });

    // Resto del código para obtener y enviar los datos
  } catch (error) {
    console.error('Error al obtener información de vuelos:', error);
    res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
});



// Inicia el servidor
const PORT = 5000;
app.listen(PORT, () =>{
    console.log('Servidor corriendo en el puerto http://localhost:5000');
});

app.get('/', 
    function (req, res)
    {
        res.send('<h2>Servidor ok</h2>');
    }
);
