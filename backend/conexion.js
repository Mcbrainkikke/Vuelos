// Conexión a MongoDB

const mongoose = require('mongoose');
//conexion a la base de datos mongodb compass
mongoose.connect('mongodb://127.0.0.1/reservavuelos', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
});
const miconexion = mongoose.connection;

miconexion.on('connected', () => {console.log('Conexion establecida con la base de datos')});
miconexion.on('error', () => {console.log('No es posible conectarse a la base de datos')});

module.exports = mongoose;