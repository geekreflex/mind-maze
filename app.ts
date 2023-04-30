import express, { Application } from 'express';
import path from 'path';

const app: Application = express();
const port = process.env.PORT || 9000;

__dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (_, res: express.Response) => {
  res.sendFile(
    path.resolve(__dirname, 'client', 'build', 'index.html'),
    (err) => {
      res.status(500).send(err);
    }
  );
});

app.get(`/api`, (req: express.Request, res: express.Response) => {
  res.send('API is running...');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
