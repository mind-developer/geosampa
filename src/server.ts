import express from 'express';
import routes from './routes';

const app = express();
const port = 3438;

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Running! GET /api/csv-data to visualize the data!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
