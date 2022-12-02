'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = __importDefault(require('dotenv'));
const cors_1 = __importDefault(require('cors'));
dotenv_1.default.config();
const express_1 = __importDefault(require('express'));
const db_1 = require('./db');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = Number(process.env.SERVER_PORT) || 3001;
(0, db_1.createClientAndConnect)();
app.get('/', (_, res) => {
  res.json('👋 Howdy from the server :)');
});
app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
//# sourceMappingURL=index.js.map
