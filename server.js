const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const agendamentoRoutes = require('./routes/agendamentoRoutes');
require('dotenv').config();

const app = express();

// Middleware para aceitar JSON e permitir requisições de outros domínios
app.use(cors());
app.use(express.json());

// Teste para rota raiz
app.get('/', (req, res) => {
  res.send('API do Agendamento funcionando 🚀');
});

// Aqui é onde você conecta a rota corretamente
app.use('/api/agendamento', agendamentoRoutes);

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/agendamentos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('🟢 Conectado ao MongoDB');
})
.catch((err) => {
  console.error('🔴 Erro ao conectar ao MongoDB:', err.message);
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
