import { Router } from 'express';

import VeiculoController from './controllers/VeiculoController';

const routes = Router();

routes.get('/veiculo', VeiculoController.index);
routes.post('/veiculo/create', VeiculoController.create);
routes.put('/veiculo/:id/update', VeiculoController.update);
routes.get('/veiculo/:id', VeiculoController.show);
routes.delete('/veiculo/:id', VeiculoController.delete);

export default routes;
