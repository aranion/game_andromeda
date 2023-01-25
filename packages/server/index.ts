import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { startApp } from './app';
import forumsRouter from './app/routes/forum.routes';

dotenv.config();

startApp();

const app = express();
const port = Number(process.env.SERVER_PORT) || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/api/forum', forumsRouter);

app.get('/api', (_, res) => {
  res.json('👋 Howdy from the server :)');
});

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
