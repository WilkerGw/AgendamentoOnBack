const Agendamento = require('../models/Agendamento');

// Criar um novo agendamento
exports.criarAgendamento = async (req, res) => {
  try {
    const novoAgendamento = new Agendamento(req.body);
    const agendamentoSalvo = await novoAgendamento.save();
    res.status(201).json(agendamentoSalvo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obter todos os agendamentos (para fins de administração)
exports.listarAgendamentos = async (req, res) => {
  try {
    const agendamentos = await Agendamento.find();
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};