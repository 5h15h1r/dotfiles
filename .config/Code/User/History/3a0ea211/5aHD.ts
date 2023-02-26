import express, { Express, Request, Response } from 'express';
import config from 'config'


const app: Express = express();
console.log('Hello'.toLocaleUpperCase()); // HELLO 

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });


