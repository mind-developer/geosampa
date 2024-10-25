import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';

export class GetCsvService {
  async getCsvData(): Promise<any[]> {
    const csvPath = path.resolve(__dirname, '../../../data/DEINFO_IDH_UDH_2000_2010_Dados.csv');
    const data: any[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(csvPath)
        .pipe(csv())
        .on('data', (row) => data.push(row))
        .on('end', () => resolve(data))
        .on('error', (error) => reject(error));
    });
  }
}
