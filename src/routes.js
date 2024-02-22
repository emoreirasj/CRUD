import { Router } from 'express';
const routes = new Router();
import clientes from './app/controllers/clientesController';

routes.get('/clientes', clientes.index);
routes.get('/clientes/:id', clientes.show);
routes.post('/clientes', clientes.create);
routes.put('/clientes/:id', clientes.update);
routes.delete('/clientes/:id', clientes.destroy);

export default routes;