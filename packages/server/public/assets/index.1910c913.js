import {
  d as x,
  j as e,
  c as d,
  M as f,
  r,
  F as C,
  n as v,
  t as N,
  K as b,
} from './index.e2d0ecb8.js';
import { B as q } from './index.3946e526.js';
import { M as S } from './index.9868fb9f.js';
import { B as k } from './index.413e90ec.js';
const g = n => {
    const { className: i, children: t, ...s } = n,
      a = x('card', i);
    return e('div', { className: a, ...s, children: t });
  },
  B = n => {
    const { id: i, content: t, author: s } = n;
    return d(g, {
      className: f.comment,
      id: i,
      children: [
        e('div', { className: f.comment__content, children: t }),
        e('div', { className: f.comment__author, children: s }),
      ],
    });
  };
function y(n) {
  const [i, t] = r.exports.useState(''),
    [s, a] = r.exports.useState(!1),
    p = () => a(!0),
    _ = () => a(!1),
    m = o => t(o.target.value);
  function c(o) {
    o.preventDefault();
    const { fetchComments: h, topicId: u } = n;
    console.log(u, i), t(''), _(), h(u);
  }
  return d(C, {
    children: [
      e(k, { onClick: p, children: 'New Comment' }),
      e(S, {
        active: s,
        setActive: a,
        title: 'New Comment',
        children: e(v, {
          title: 'Submit',
          onSubmit: c,
          children: e(v.Input, {
            typeComponent: 'textarea',
            name: 'content',
            value: i,
            onChange: m,
          }),
        }),
      }),
    ],
  });
}
const F = '_topic_fh7k4_1',
  I = '_topic__info_fh7k4_21',
  M = '_topic__title_fh7k4_29',
  T = '_topic__content_fh7k4_39',
  A = '_topic__author_fh7k4_49',
  l = {
    topic: F,
    topic__info: I,
    topic__title: M,
    topic__content: T,
    topic__author: A,
  };
function P() {
  const { topicId: n } = N(),
    i = r.exports.useRef(null),
    [t, s] = r.exports.useState(),
    [a, p] = r.exports.useState([]),
    _ = c => (
      console.log(c),
      {
        topicId: '111',
        title: 'Title of very interesting topic',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: 'Amanda',
      }
    ),
    m = c => {
      console.log(c);
      const o = [];
      return (
        o.push(
          { id: '1', author: 'Jane', content: 'First interesting comment' },
          {
            id: '2',
            author: 'David',
            content:
              'Second interesting comment (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)',
          },
          { id: '3', author: 'Kate', content: 'Third interesting comment' }
        ),
        o
      );
    };
  return (
    r.exports.useEffect(() => {
      if (n) {
        const c = _(n),
          o = m(n);
        s(c), p(o);
      }
    }, []),
    d('div', {
      className: l.topic,
      ref: i,
      children: [
        e(q, {}),
        e(b, { elemRef: i }),
        e('h1', { className: 'main-menu__title', children: 'Community' }),
        d(g, {
          className: l.topic__info,
          children: [
            e('div', {
              className: l.topic__title,
              children: (t == null ? void 0 : t.title) || '',
            }),
            e('div', {
              className: l.topic__content,
              children: (t == null ? void 0 : t.content) || '',
            }),
            e('div', {
              className: l.topic__author,
              children: (t == null ? void 0 : t.author) || '',
            }),
          ],
        }),
        e('div', {
          children: a.map(c => {
            const { id: o, content: h, author: u } = c;
            return e(B, { id: o, content: h, author: u }, o);
          }),
        }),
        e(y, { topicId: n, fetchComments: m }),
      ],
    })
  );
}
export { P as default };
