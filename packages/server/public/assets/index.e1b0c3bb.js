import {
  c as r,
  j as t,
  J as C,
  L as g,
  R as S,
  r as n,
  F as B,
  n as h,
  t as F,
  K as y,
} from './index.e2d0ecb8.js';
import { B as M } from './index.3946e526.js';
import { M as R } from './index.9868fb9f.js';
import { B as k } from './index.413e90ec.js';
function w(s) {
  const { topicId: c, title: l, commentCount: a } = s;
  return r('tr', {
    children: [
      t('td', {
        className: C.item,
        children: t(g, {
          className: C.item__link,
          to: `${S.FORUM_TOPIC}/${c}`,
          children: t('div', { children: l }),
        }),
      }),
      t('td', { className: C.item, children: a }),
    ],
  });
}
function D(s) {
  const [c, l] = n.exports.useState(''),
    [a, p] = n.exports.useState(''),
    [m, u] = n.exports.useState(''),
    [d, e] = n.exports.useState(!1),
    o = () => e(!0),
    T = () => e(!1),
    _ = i => l(i.target.value),
    b = i => u(i.target.value),
    v = i => p(i.target.value);
  function x(i) {
    i.preventDefault();
    const { fetchTopics: I, forumId: N } = s;
    console.log(N, c, a, m), l(''), p(''), u(''), T(), I(N);
  }
  return r(B, {
    children: [
      t(k, { onClick: o, children: 'New Topic' }),
      t(R, {
        active: d,
        setActive: e,
        title: 'New topic',
        children: r(h, {
          title: 'Submit',
          onSubmit: x,
          children: [
            t(h.Input, {
              typeComponent: 'input',
              name: 'title',
              placeholder: 'Topic title',
              value: c,
              onChange: _,
            }),
            t(h.Input, {
              typeComponent: 'textarea',
              placeholder: 'Topic description',
              name: 'description',
              value: m,
              onChange: b,
            }),
            t(h.Input, {
              typeComponent: 'textarea',
              placeholder: 'Topic content',
              name: 'content',
              value: a,
              onChange: v,
            }),
          ],
        }),
      }),
    ],
  });
}
const j = '_forum_1cqdi_1',
  q = '_table_1cqdi_21',
  A = '_table__th_1cqdi_41',
  f = { forum: j, table: q, table__th: A };
function E() {
  const { forumId: s } = F(),
    c = n.exports.useRef(null),
    [l, a] = n.exports.useState([]),
    [p, m] = n.exports.useState(''),
    u = e => (console.log(e), 'Game Devlog - News'),
    d = e => {
      console.log(e);
      const o = [];
      return (
        o.push(
          { topicId: '111', title: 'Test toppic title', commentCount: '111' },
          {
            topicId: '222',
            title:
              'Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title ',
            commentCount: '1',
          }
        ),
        o
      );
    };
  return (
    n.exports.useEffect(() => {
      if (s) {
        const e = u(s);
        m(e);
        const o = d(s);
        a(o);
      }
    }, []),
    r('div', {
      className: f.forum,
      ref: c,
      children: [
        t(M, {}),
        t(y, { elemRef: c }),
        t('h1', { className: 'main-menu__title', children: p }),
        r('table', {
          className: f.table,
          children: [
            t('thead', {
              children: r('tr', {
                children: [
                  t('th', { className: f.table__th, children: 'Topics' }),
                  t('th', { className: f.table__th, children: 'Comments' }),
                ],
              }),
            }),
            t('tbody', {
              children: l.map(e => {
                const { topicId: o, title: T, commentCount: _ } = e;
                return t(w, { topicId: o, title: T, commentCount: _ }, o);
              }),
            }),
          ],
        }),
        t(D, { forumId: s, fetchTopics: d }),
      ],
    })
  );
}
export { E as default };
