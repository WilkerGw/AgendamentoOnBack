const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const agendamentoRoutes = require('./routes/agendamentoRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB Atlas:', err));

// Usar as rotas de agendamento
app.use('/api/agendamentos', agendamentoRoutes);

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});