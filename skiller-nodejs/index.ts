//const express = require('express');
import express, {Express, Request, Response} from 'express';
//const dotenv = require('dotenv');
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const app: Express = express();

app.get('/', (req: Request, res: Response):void => {
  res.send('Esto ha sido todo por hoy');
});


app.listen(port, () => {
  console.log(`[server]: Hola desde http://localhost:${port}`);
});
