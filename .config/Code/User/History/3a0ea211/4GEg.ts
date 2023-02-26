import express, { Express, Request, Response } from 'express';

const app: Express = express();
console.log('Hello'.toLocaleUpperCase()); // HELLO 

app.listen(3001, ()=>{
    console.log("app is runing")
})


