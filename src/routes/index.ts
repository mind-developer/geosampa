import { Router } from 'express';
import getCsvRoutes from '../modules/get-csv/get-csv.routes';

const router = Router();

router.use('/api', getCsvRoutes);

export default router;
