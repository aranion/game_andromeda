import {
  a as g,
  u as h,
  r as S,
  R as l,
  j as t,
  F as y,
  c as n,
  T as I,
  A as a,
} from './index.e2d0ecb8.js';
import { S as p, B as b } from './index.413e90ec.js';
const v = [
    { top: '10%', left: '13%' },
    { top: '2%', left: '32%' },
    { top: '4%', left: '64%' },
    { top: '13%', left: '90%' },
    { top: '80%', left: '3%' },
    { top: '88%', left: '31%' },
    { top: '89%', left: '59%' },
    { top: '80%', left: '71%' },
  ],
  A = [
    { top: '29%', left: '3%' },
    { top: '26%', left: '18%' },
    { top: '21%', left: '71%' },
    { top: '48%', left: '10%' },
    { top: '50%', left: '77%' },
    { top: '65%', left: '13%' },
    { top: '73%', left: '24%' },
    { top: '71%', left: '88%' },
  ];
function w() {
  const { signIn: i, isAuth: r } = g(),
    f = e => {
      e.preventDefault();
      const o = {},
        u = new FormData(e.currentTarget);
      Array.from(u.entries()).forEach(([m, d]) => {
        o[m] = d;
      }),
        i(o);
    },
    s = h(),
    c = () => s(l.SIGN_UP);
  return (
    S.exports.useEffect(() => {
      r && s(l.HOME);
    }, [r]),
    t(y, {
      children: n('div', {
        className: 'main-menu login',
        children: [
          v.map((e, o) => t(p, { top: e.top, left: e.left }, o)),
          t('div', {
            className: 'mobile mobile_hidden',
            children: A.map((e, o) => t(p, { top: e.top, left: e.left }, o)),
          }),
          n(I, {
            children: [
              'Journey',
              t('br', {}),
              'to the',
              t('br', {}),
              'Andromeda',
            ],
          }),
          n(a, {
            onSubmit: f,
            title: 'Sign In',
            children: [
              t(a.Input, {
                typeComponent: 'input',
                name: 'login',
                type: 'text',
                placeholder: 'Login',
                required: !0,
              }),
              t(a.Input, {
                typeComponent: 'input',
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                required: !0,
              }),
            ],
          }),
          t(b, { onClick: c, children: 'Sign Up' }),
        ],
      }),
    })
  );
}
export { w as default };
