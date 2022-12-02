'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = __importDefault(require('dotenv'));
const cors_1 = __importDefault(require('cors'));
const path_1 = __importDefault(require('path'));
const fs_1 = __importDefault(require('fs'));
dotenv_1.default.config();
const express_1 = __importDefault(require('express'));
const entry_server_cjs_1 = require('../client/dist/ssr/entry-server.cjs');
const db_1 = require('./db');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = Number(process.env.SERVER_PORT) || 3001;
(0, db_1.createClientAndConnect)();
app.get('/', (_, res) => {
  res.json('👋 Howdy from the server :)');
});
app.get('/ssr-example', (_, res) => {
  const result = (0, entry_server_cjs_1.render)();
  res.send(result);
  const template = path_1.default.resolve(
    __dirname,
    '../client/dist/client/index.html'
  );
  const htmlString = fs_1.default.readFileSync(template, 'utf-8');
  const newString = htmlString.replace('<!--ssr-outlet-->', result);
  res.send(newString);
});
app.use(
  express_1.default.static(
    path_1.default.resolve(__dirname, '../client/dist/client')
  )
);
app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
//# sourceMappingURL=index.js.map
