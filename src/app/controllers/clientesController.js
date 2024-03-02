const clientes = [
  { id: 1, nome: "Edson", sobrenome: "Moreira" },
  { id: 2, nome: "Maria", sobrenome: "Silva" },
  { id: 3, nome: "João", sobrenome: "Santos" },
];

class ClientesController {
  // Listagem dos registros
  index(req, res) {
    return res.json(clientes);
  }

  // Mostrar um registro específico
  show(req, res) {
    const id = parseInt(req.params.id, 10);
    const cliente = clientes.find((item) => item.id === id);
    const status = cliente ? 200 : 404;

    return res.status(status).json(cliente);
  }

  // Atualização de um novo registro
  update(req, res) {
    const id = parseInt(req.params.id, 10);
    const { nome, sobrenome } = req.body;

    const index = clientes.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      clientes[index] = { id: parseInt(id, 10), nome, sobrenome };
    }

    return res.status(status).json(clientes[index]);
  }

  // Criação de um novo registro
  create(req, res) {
    const { nome, sobrenome } = req.body;
    const novoId = clientes[clientes.length - 1].id + 1;

    const novoCliente = { id: novoId, nome, sobrenome };

    clientes.push(novoCliente);
    return res.status(201).json(novoCliente);
  }

  // Deletar um registro específico
  destroy(req, res) {
    const id = parseInt(req.params.id, 10);
    const { nome, sobrenome } = req.body;

    const index = clientes.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      clientes.splice(index, 1);
    }

    return res.status(status).json();
  }
}

export default new ClientesController();
