import express, { Application } from 'express';

const app: Application = express();
const port = 9000;

app.get(`/`, (req: express.Request, res: express.Response) => {
  res.send('Server is up and running');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
