const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

// POST: Criar agendamento
router.post('/', agendamentoController.criarAgendamento);

// GET: Listar agendamentos
router.get('/', agendamentoController.listarAgendamentos);

module.exports = router;
