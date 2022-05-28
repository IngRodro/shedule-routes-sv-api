import express from 'express';
import { getAllBusRoutes, createRoute } from './busroutes.controller';

const router = express.Router();

router.get('/', getAllBusRoutes);
router.post('/', createRoute);

export default router;
