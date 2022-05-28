import express from 'express';
import busRoutes from './busroutes/busroutes.route';

const router = express.Router();

router.use('/routes', busRoutes);

export default router;
