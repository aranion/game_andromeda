import {
  u as i,
  j as a,
  H as e,
  c as m,
  T as d,
  B as p,
  R as u,
} from './index.e2d0ecb8.js';
function k(c) {
  const { code: r, message: o, typeButton: s } = c,
    n = i(),
    t = () => {
      const l = s === 'back' ? -1 : u.HOME;
      n(l);
    };
  return a('div', {
    className: e.errorSample,
    children: m('section', {
      children: [
        a(d, { children: 'ERROR' }),
        a('span', { className: e.errorSample__code, children: r }),
        a('p', { children: o }),
        a(p, {
          onClick: t,
          className: e.errorSample__buttonBack,
          children: s === 'back' ? 'Back' : 'Go Home',
        }),
      ],
    }),
  });
}
export { k as E };
