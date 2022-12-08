import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import express from 'express';
import { createClientAndConnect } from './db';
import path from 'path';
import serverRenderMiddleware from './server-render-middleware';

const PORT = Number(process.env.SERVER_PORT) || 3001;

const app = express();

app.use(cors());

createClientAndConnect();

app.get('/', serverRenderMiddleware);

app.use(express.static(path.resolve(__dirname, '../../client/dist/client')));

app.listen(PORT, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${PORT}`);
});
