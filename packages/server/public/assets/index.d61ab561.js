import {
  c as r,
  j as t,
  m as u,
  L as v,
  R as N,
  r as m,
  F as I,
  n as p,
} from './index.e2d0ecb8.js';
import { B as g } from './index.3946e526.js';
import { M as x } from './index.9868fb9f.js';
import { B as S } from './index.413e90ec.js';
function y(c) {
  const { forumId: o, title: s, topicsCount: e, commentsCount: n } = c;
  return r('tr', {
    id: o,
    children: [
      t('td', {
        className: u.item,
        children: t(v, {
          className: u.item__link,
          to: `${N.FORUM}/${o}`,
          children: t('div', { children: s }),
        }),
      }),
      t('td', { className: u.item, children: e }),
      t('td', { className: u.item, children: n }),
    ],
  });
}
function B(c) {
  const [o, s] = m.exports.useState(''),
    [e, n] = m.exports.useState(''),
    [d, a] = m.exports.useState(!1),
    h = () => a(!0),
    f = () => a(!1),
    _ = i => s(i.target.value),
    C = i => n(i.target.value);
  function F(i) {
    i.preventDefault();
    const { fetchForums: b } = c;
    console.log(o, e), s(''), n(''), f(), b();
  }
  return r(I, {
    children: [
      t(S, { onClick: h, children: 'New Forum' }),
      t(x, {
        active: d,
        setActive: a,
        title: 'New forum',
        children: r(p, {
          title: 'Submit',
          onSubmit: F,
          children: [
            t(p.Input, {
              typeComponent: 'input',
              placeholder: 'Forum title',
              name: 'title',
              value: o,
              onChange: _,
            }),
            t(p.Input, {
              typeComponent: 'textarea',
              placeholder: 'Forum description',
              name: 'description',
              value: e,
              onChange: C,
            }),
          ],
        }),
      }),
    ],
  });
}
const k = '_forum_1cqdi_1',
  D = '_table_1cqdi_21',
  M = '_table__th_1cqdi_41',
  l = { forum: k, table: D, table__th: M };
function L() {
  const [c, o] = m.exports.useState([]),
    s = () => {
      const e = [];
      return (
        e.push(
          {
            forumId: '111',
            title: 'Game Devlog - News',
            topicsCount: '1',
            commentsCount: '12',
          },
          {
            forumId: '222',
            title: 'Feedback Forum',
            topicsCount: '126',
            commentsCount: '12',
          },
          {
            forumId: '333',
            title: 'Cavern',
            topicsCount: '12',
            commentsCount: '12',
          },
          {
            forumId: '444',
            title: 'Game Devlog - test forum',
            topicsCount: '12',
            commentsCount: '12',
          }
        ),
        e
      );
    };
  return (
    m.exports.useEffect(() => {
      o(s());
    }, []),
    r('div', {
      className: l.forum,
      children: [
        t(g, {}),
        t('h1', { className: 'main-menu__title', children: 'Community' }),
        r('table', {
          className: l.table,
          children: [
            t('thead', {
              children: r('tr', {
                children: [
                  t('th', { className: l.table__th, children: 'Forums' }),
                  t('th', { className: l.table__th, children: 'Topics' }),
                  t('th', { className: l.table__th, children: 'Comments' }),
                ],
              }),
            }),
            t('tbody', {
              children: c.map(e => {
                const {
                  forumId: n,
                  title: d,
                  topicsCount: a,
                  commentsCount: h,
                } = e;
                return t(
                  y,
                  { forumId: n, title: d, topicsCount: a, commentsCount: h },
                  n
                );
              }),
            }),
          ],
        }),
        t(B, { fetchForums: s }),
      ],
    })
  );
}
export { L as default };
