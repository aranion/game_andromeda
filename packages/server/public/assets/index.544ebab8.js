import {
  a as f,
  u as h,
  r as g,
  R as i,
  j as e,
  F as y,
  c as r,
  T as I,
  A as t,
} from './index.e2d0ecb8.js';
import { S, B as x } from './index.413e90ec.js';
const C = [
  { top: '3%', left: '10%' },
  { top: '22%', left: '21%' },
  { top: '39%', left: '4%' },
  { top: '52%', left: '19%' },
  { top: '67%', left: '10%' },
  { top: '80%', left: '4%' },
  { top: '85%', left: '18%' },
  { top: '4%', left: '76%' },
  { top: '11%', left: '91%' },
  { top: '29%', left: '82%' },
  { top: '38%', left: '93%' },
  { top: '64%', left: '74%' },
  { top: '58%', left: '92%' },
  { top: '77%', left: '88%' },
];
function A() {
  const { signUp: s, isAuth: a } = f(),
    l = n => {
      n.preventDefault();
      const o = {},
        m = new FormData(n.target);
      Array.from(m.entries()).forEach(([d, c]) => {
        o[d] = c;
      }),
        s(o);
    },
    p = h(),
    u = () => p(i.SIGN_IN);
  return (
    g.exports.useEffect(() => {
      a && p(i.HOME);
    }, [a]),
    e(y, {
      children: r('div', {
        className: 'main-menu registration',
        children: [
          e('div', {
            className: 'mobile mobile_hidden',
            children: C.map((n, o) => e(S, { top: n.top, left: n.left }, o)),
          }),
          r(I, {
            children: [
              'Journey',
              e('br', {}),
              'to the',
              e('br', {}),
              'Andromeda',
            ],
          }),
          r(t, {
            onSubmit: l,
            title: 'Sign Up',
            children: [
              e(t.Input, {
                typeComponent: 'input',
                name: 'email',
                type: 'email',
                placeholder: 'Email',
                required: !0,
              }),
              e(t.Input, {
                typeComponent: 'input',
                name: 'login',
                type: 'text',
                placeholder: 'Login',
                required: !0,
              }),
              e(t.Input, {
                typeComponent: 'input',
                name: 'first_name',
                type: 'text',
                placeholder: 'First Name',
                required: !0,
              }),
              e(t.Input, {
                typeComponent: 'input',
                name: 'second_name',
                type: 'text',
                placeholder: 'Last Name',
                required: !0,
              }),
              e(t.Input, {
                typeComponent: 'input',
                name: 'phone',
                type: 'text',
                placeholder: 'Phone',
                required: !0,
              }),
              e(t.Input, {
                typeComponent: 'input',
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                required: !0,
              }),
              e(t.Input, {
                typeComponent: 'input',
                name: 'password',
                type: 'password',
                placeholder: 'Password (Again)',
                required: !0,
              }),
            ],
          }),
          e(x, { onClick: u, children: 'Sign In' }),
        ],
      }),
    })
  );
}
export { A as default };
