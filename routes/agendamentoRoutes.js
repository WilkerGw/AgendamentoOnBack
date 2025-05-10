const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.post('/', agendamentoController.criarAgendamento);
router.get('/', agendamentoController.listarAgendamentos);

module.exports = router;