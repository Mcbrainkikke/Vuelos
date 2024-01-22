const mongoose = require('mongoose');

const vueloSchema = new mongoose.Schema({
  origen: { type: String, required: true },
  destino: { type: String, required: true },
  aerolinea: { type: String, required: true },
  horario: { type: String, required: true },
});

const Vuelo = mongoose.model('Vuelo', vueloSchema);

module.exports = Vuelo;
