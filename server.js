const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'https://agendamento-on-front.vercel.app', // domínio do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],          // métodos permitidos
  credentials: true                                    // se estiver usando cookies/autenticação
}));
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas
const agendamentoRoutes = require('./routes/agendamentoRoutes');
app.use('/agendamentos', agendamentoRoutes);

// Iniciar o servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});