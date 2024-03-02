// Importação de bibliotecas
const express = require('express');

const server = express();

server.use(express.json());

const clientes = [
  { id: 1, nome: 'Edson', sobrenome: 'Moreira' },
  { id: 2, nome: 'Maria', sobrenome: 'Silva' },
  { id: 3, nome: 'João', sobrenome: 'Santos' },
];

// Rota para exibição de todos os clientes
server.get('/clientes', (req, res) => res.json(clientes));

// Rota para cliente por id
server.get('/clientes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const cliente = clientes.find((item) => item.id === id);
  const status = cliente ? 200 : 404;

  return res.status(status).json(cliente);
});

// Rota para a inserção de registros novos
server.post('/clientes', (req, res) => {
  const { nome, sobrenome } = req.body;
  const novoId = clientes[clientes.length - 1].id + 1;

  const novoCliente = { id: novoId, nome, sobrenome };

  clientes.push(novoCliente);
  return res.status(201).json(novoCliente);
});

// Atualização de dados de cliente
server.put('/clientes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, sobrenome } = req.body;

  const index = clientes.findIndex((item) => item.id === id);
  const status = index >= 0 ? 200 : 404;

  if (index >= 0) {
    clientes[index] = { id: parseInt(id), nome, sobrenome };
  }

  return res.status(status).json(clientes[index]);
});

// Exclusão de cliente
server.delete('/clientes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, sobrenome } = req.body;

  const index = clientes.findIndex((item) => item.id === id);
  const status = index >= 0 ? 200 : 404;

  if (index >= 0) {
    clientes.splice(index, 1);
  }

  return res.status(status).json();
});

// Subida do servidor
server.listen(3000);
console.log('Server on, port 3000');
