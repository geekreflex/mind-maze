import express, { Application } from 'express';

const app: Application = express();
const port = process.env.PORT || 9000;

app.get(`/api`, (req: express.Request, res: express.Response) => {
  res.send('API is running...');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
