import express from 'express';
import knex from './database/connection';
import multer from 'multer';
import multerConfig from './config/multer';

// index (listagem)
// show (único registro)
// create
// update
// delete

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image'),pointsController.create);

export default routes;