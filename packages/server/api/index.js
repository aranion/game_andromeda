'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
const express_1 = __importDefault(require('express'));
const db_1 = require('./db');
const fs_1 = __importDefault(require('fs'));
const path_1 = __importDefault(require('path'));
const vite_1 = require('vite');
require('./ssr/entry-server.cjs');
async function createServer() {
  const port = Number(process.env.SERVER_PORT) || 3001;
  const app = (0, express_1.default)();
  (0, db_1.createClientAndConnect)();
  const vite = await (0, vite_1.createServer)({
    server: { middlewareMode: 'ssr' },
  });
  app.use(vite.middlewares);
  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = fs_1.default.readFileSync(
        path_1.default.resolve(__dirname, './client/index.html'),
        'utf-8'
      );
      template = await vite.transformIndexHtml(url, template);
      const { render } = await require(path_1.default.resolve(
        __dirname,
        './ssr/entry-server.cjs'
      ));
      const html = template.replace(`<!--ssr-outlet-->`, render);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });
  app.use(
    express_1.default.static(path_1.default.resolve(__dirname, './client'))
  );
  app.listen(port);
}
createServer();
//# sourceMappingURL=index.js.map
