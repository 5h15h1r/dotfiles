import express, { Express, Request, Response } from 'express';
import config from 'config'


const app: Express = express();
const port = config.get('port')
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });

app.listen(port, () => {
console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

