import { d, j as t, c as p, s as o, B as w } from './index.e2d0ecb8.js';
function n(a) {
  const {
    top: e,
    right: l,
    left: c,
    bottom: m,
    className: u,
    relative: f,
    size: h,
  } = a;
  let s = h;
  if (!s) {
    const i = Math.floor(Math.random() * 3 + 1);
    i === 1 ? (s = 'small') : i === 2 ? (s = 'normal') : (s = 'big');
  }
  let r = '';
  f && (r = 'star_position_relative');
  const v = d('star', `star_size_${s}`, u, r);
  return t('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 156.91 208.06',
    className: v,
    style: { top: e, right: l, bottom: m, left: c },
    children: t('path', {
      d: 'M78.94 208.06v-.2C78.67 150.6 43.48 104.43.3 104.69H0C43.3 104.42 78.24 57.6 77.97.19V0 .2c.27 57.42 35.63 103.65 78.94 103.19h-.29c-43.2.46-77.95 47.21-77.68 104.49Z',
    }),
  });
}
function _(a) {
  const { onClick: e, children: l } = a;
  return p('div', {
    className: o.button__wrap,
    children: [
      t(n, { size: 'small', relative: !0 }),
      t(w, { className: o['button-star'], onClick: e, children: l }),
      t(n, { size: 'small', relative: !0 }),
    ],
  });
}
export { _ as B, n as S };
