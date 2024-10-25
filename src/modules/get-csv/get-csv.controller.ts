import { Request, Response } from 'express';
import { GetCsvService } from './get-csv.service';

export class GetCsvController {
  private getCsvService: GetCsvService;

  constructor() {
    this.getCsvService = new GetCsvService();
  }

  async getCsvData(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.getCsvService.getCsvData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao ler o CSV' });
    }
  }
}
