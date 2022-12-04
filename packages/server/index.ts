import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import express, { Request, Response } from 'express';
import { createClientAndConnect } from './db';
import path from 'path';
import fs from 'fs';
// @ts-ignore
import { render } from '../../client/dist/ssr/entry-server.cjs';

const app = express();
app.use(cors());
const port = Number(process.env.SERVER_PORT) || 3001;

createClientAndConnect();

app.get('/', (_: Request, res: Response) => {
  const result = render();
  const template = path.resolve(
    __dirname,
    '../../client/dist/client/index.html'
  );
  const htmlString = fs.readFileSync(template, 'utf-8');
  const newString = htmlString.replace('<!--ssr-outlet-->', result);
  res.send(newString);
});

app.use(express.static(path.resolve(__dirname, '../../client/dist/client')));

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
