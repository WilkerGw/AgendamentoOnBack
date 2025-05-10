const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  data: { type: Date, required: true }, // Mantendo o campo data no model
  hora: { type: String, required: true },
  criadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Agendamento', agendamentoSchema);