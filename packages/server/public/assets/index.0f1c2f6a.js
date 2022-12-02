import { j as u, G as e } from './index.e2d0ecb8.js';
import { E as r } from './index.055b3254.js';
const s = {
  eng: { message: "Internal Server Error. We'll fix it soon!" },
  rus: {
    message:
      '\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0421\u043A\u043E\u0440\u043E \u0432\u0441\u0435 \u043F\u043E\u043F\u0440\u0430\u0432\u0438\u043C!',
  },
};
function a() {
  return u(r, { code: '500', message: s[e].message, typeButton: 'home' });
}
export { a as default };
