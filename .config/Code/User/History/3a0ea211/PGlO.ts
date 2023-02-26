import express, { Express, Request, Response } from 'express';

const app: Express = express();
console.log('Hello'.length); // 5


app.listen(3001, ()=>{
    console.log("app is runing")
})


