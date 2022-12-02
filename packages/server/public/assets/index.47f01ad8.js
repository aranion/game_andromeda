import { j as u, G as e } from './index.e2d0ecb8.js';
import { E as s } from './index.055b3254.js';
const t = {
  eng: { message: 'Sorry, the requested page was not found' },
  rus: {
    message:
      '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',
  },
};
function a() {
  return u(s, { code: '404', message: t[e].message, typeButton: 'back' });
}
export { a as default };
