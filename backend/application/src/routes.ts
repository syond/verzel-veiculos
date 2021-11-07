import { Router } from 'express';

// import ClientController from './controllers/ClientController';

const routes = Router();

routes.get('/', (req, res) => {
  res.send({
    message: 'Welcome to my API',
  });
});

// routes.get('/client', ClientController.index);
// routes.post('/client/create', ClientController.create);
// routes.put('/client/:id/update', ClientController.update);
// routes.get('/client/:id/show', ClientController.show);
// routes.delete('/client/:id/delete', ClientController.delete);

export default routes;
