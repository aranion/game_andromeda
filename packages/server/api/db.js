'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.createClientAndConnect = void 0;
const pg_1 = require('pg');
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env;
const createClientAndConnect = async () => {
  var _a;
  try {
    const client = new pg_1.Client({
      user: POSTGRES_USER,
      host: 'localhost',
      database: POSTGRES_DB,
      password: POSTGRES_PASSWORD,
      port: Number(POSTGRES_PORT),
    });
    await client.connect();
    const res = await client.query('SELECT NOW()');
    console.log(
      '  ➜ 🎸 Connected to the database at:',
      (_a = res === null || res === void 0 ? void 0 : res.rows) === null ||
        _a === void 0
        ? void 0
        : _a[0].now
    );
    client.end();
    return client;
  } catch (e) {
    console.error(e);
  }
  return null;
};
exports.createClientAndConnect = createClientAndConnect;
//# sourceMappingURL=db.js.map
