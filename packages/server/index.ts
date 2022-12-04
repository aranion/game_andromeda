import dotenv from 'dotenv';
// import cors from 'cors';
dotenv.config();

import express, { Request, Response } from 'express';
import { createClientAndConnect } from './db';
import fs from 'fs';
import path from 'path';
import { createServer as createViteServer } from 'vite';
//@ts-ignore
import { render } from './ssr/entry-server.cjs';

async function createServer() {
  const port = Number(process.env.SERVER_PORT) || 3001;
  const app = express();
  createClientAndConnect();
  // Создаём Vite сервер в middleware режиме. Это отключит собственный HTML Vite'а
  // serving logic and let the parent server take control.
  // Если вы хотите использовать Vite's own HTML serving logic (используя Vite как
  // a development middleware), используйте вместо этого 'html'.
  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' },
  });
  // используйте vite's connect instance как middleware
  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, './client/index.html'),
        'utf-8'
      );
      // 2. Применяем Vite HTML трансформации. Это заинжектит Vite HMR client, и
      //    также применит HTML трансформации из Vite плагинов, например, global preambles
      //    из @vitejs/plugin-react-refresh
      template = await vite.transformIndexHtml(url, template);

      // 3. Загружаем the server entry. vite.ssrLoadModule автоматически трансформирует
      //    ваш ESM исходный код для использования в Node.js! Здесь не нужен никакой бандлер,
      //    и предоставит эффективную инвалидацию, похожую на HMR.
      const { render } = await require(path.resolve(
        __dirname,
        './ssr/entry-server.cjs'
      ));

      // 4. render the app HTML. Это предполагает entry-server.js's exported `render`
      //    function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      // const appHtml = await render(url);

      // 5. Инжектим the app-rendered HTML в шаблон.
      const html = template.replace('<!--ssr-outlet-->', render);

      // 6. Посылаем the rendered HTML обратно клиенту.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      // Если возникла какая-то ошибка, позволяем Vite fix the stracktrace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.use(express.static(path.resolve(__dirname, './client')));

  app.listen(port);
}

createServer();

// const app = express();
// app.use(cors());
// const port = Number(process.env.SERVER_PORT) || 3001;

// createClientAndConnect();

// app.get('/', (_, res) => {
//   res.json('👋 Howdy from the server :)');
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   res.end('Hello! Go to item:');
// });

// app.get('/api/item/:slug', (req, res) => {
//   const { slug } = req.params;
//   res.end(`Item: ${slug}`);
// });
// //@ts-ignore
// app.get('*', (req, res) => {
//   res.json('👋 ...... :)');
// });

// app.listen(port, () => {
//   console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
// });

// module.exports = app;
