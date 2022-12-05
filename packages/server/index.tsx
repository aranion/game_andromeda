import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import express, { Request, Response } from 'express';
import { createClientAndConnect } from './db';
import path from 'path';
import fs from 'fs';
// @ts-ignore
import { render } from '../../client/dist/ssr/entry-server.cjs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import type { StaticRouterContext } from 'react-router';

const app = express();
app.use(cors());
const port = Number(process.env.SERVER_PORT) || 3001;

createClientAndConnect();

app.get('/', (req: Request, res: Response) => {
  const result = render();
  const location = req.url;
  const context: StaticRouterContext = {};

  const html = renderToString(
    <StaticRouter context={context} location={location}>
      {result}
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  const template = path.resolve(
    __dirname,
    '../../client/dist/client/index.html'
  );
  const htmlString = fs.readFileSync(template, 'utf-8');
  const newString = htmlString.replace('<!--ssr-outlet-->', html);

  res.send(newString);
});

app.use(express.static(path.resolve(__dirname, '../../client/dist/client')));

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
