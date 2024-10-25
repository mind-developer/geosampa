import { Router } from 'express';
import { GetCsvController } from './get-csv.controller';

const getCsvController = new GetCsvController();
const router = Router();

router.get('/csv-data', (req, res) => getCsvController.getCsvData(req, res));

export default router;
