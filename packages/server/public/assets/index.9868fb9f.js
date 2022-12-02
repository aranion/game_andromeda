import { j as l, d as c, c as r } from './index.e2d0ecb8.js';
const h = e => {
  const { active: s, children: t, title: a, setActive: i } = e,
    n = () => i(!1),
    o = d => {
      d.stopPropagation();
    };
  return l('div', {
    className: c('modal', { active: s }),
    onClick: n,
    children: r('div', {
      className: c('modal__content', { active: s }),
      onClick: o,
      children: [
        a ? l('div', { className: 'modal__title', children: a }) : null,
        t,
      ],
    }),
  });
};
export { h as M };
