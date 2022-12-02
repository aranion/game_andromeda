import {
  u as p,
  a as g,
  b as h,
  j as t,
  F as B,
  c as n,
  T as b,
  B as o,
  R as a,
} from './index.e2d0ecb8.js';
import { S as v, B as F } from './index.413e90ec.js';
import { a as L } from './selectors.f6ef23e1.js';
const R = [
  { top: '7%', left: '3%' },
  { top: '2%', left: '15%' },
  { top: '30%', left: '10%' },
  { top: '3%', left: '80%' },
  { top: '13%', left: '85%' },
  { top: '23%', left: '95%' },
  { top: '81%', left: '5%' },
  { top: '75%', left: '89%' },
  { top: '57%', left: '78%' },
];
function P() {
  const e = p(),
    { logout: i } = g(),
    { userData: l } = h(L),
    { id: r } = l,
    c = () => e(a.GAME),
    u = () => e(`${a.PROFILE}/${r}`),
    d = () => e(a.FORUM),
    f = () => e(a.LEADER_BOARD);
  return t(B, {
    children: n('div', {
      className: 'main-menu',
      children: [
        R.map((s, m) => t(v, { top: s.top, left: s.left }, m)),
        n(b, {
          children: [
            'Journey',
            t('br', {}),
            'to the',
            t('br', {}),
            'Andromeda',
          ],
        }),
        n('div', {
          className: 'mainmenu',
          children: [
            t(o, { sizeButton: 'big', onClick: c, children: 'Play' }),
            t(o, { sizeButton: 'big', onClick: u, children: 'Profile' }),
            t(o, { sizeButton: 'big', onClick: d, children: 'Forums' }),
            t(o, { sizeButton: 'big', onClick: f, children: 'LeaderBoards' }),
          ],
        }),
        t(F, { onClick: i, children: 'Log out' }),
      ],
    }),
  });
}
export { P as default };
