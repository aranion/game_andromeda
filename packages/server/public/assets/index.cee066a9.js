import {
  d as g,
  D as l,
  j as e,
  L as f,
  R as L,
  c as d,
  u as S,
  E as a,
  q as w,
  r as h,
  b as E,
  T as k,
} from './index.e2d0ecb8.js';
import { A as N } from './index.5e06f119.js';
import { B as x } from './index.3946e526.js';
import { u as $ } from './useLeaderBoard.a0479176.js';
import './selectors.f6ef23e1.js';
function j(r) {
  const { position: c, leader: n } = r,
    { highScore: i, nickname: t, id: o, avatar: s } = n,
    _ = g(l.topLeader, { [l.topLeader__first]: c === 0 });
  return e('div', {
    className: _,
    children: e(f, {
      to: `${L.PROFILE}/${o}`,
      children: d('div', {
        className: l.topLeader__wrapper,
        children: [
          e('div', {
            className: l.topLeader__avatar,
            children: e(N, { path: s }),
          }),
          d('div', {
            className: l.topLeader__content,
            children: [
              e('span', {
                className: l.topLeader__content_nickname,
                children: t,
              }),
              e('span', {
                className: l.topLeader__content_highScore,
                children: i.toLocaleString(),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const P = r => r.leaderBoard,
  R = r => P(r).leaders,
  b = ['Position', 'Avatar', 'Nickname', 'HighScore'];
function y(r) {
  const { leaders: c, isLoading: n = !1 } = r,
    i = c.length === 0,
    t = S();
  return d('div', {
    className: a.boardTable,
    children: [
      n && e(w, {}),
      d('table', {
        className: a.boardTable__table,
        children: [
          e('thead', {
            className: a.boardTable__table_tr,
            children: e('tr', {
              children: b.map((o, s) =>
                e('th', { className: a.boardTable__table_th, children: o }, s)
              ),
            }),
          }),
          d('tbody', {
            children: [
              i &&
                e('tr', {
                  children: e('td', {
                    className: a.boardTable__table_empty,
                    colSpan: b.length,
                    children: 'No leaders.',
                  }),
                }),
              c.map((o, s) => {
                const { highScore: _, nickname: p, id: B, avatar: u } = o,
                  v = s + 4,
                  T = () => {
                    t(`${L.PROFILE}/${B}`);
                  };
                return d(
                  'tr',
                  {
                    className: a.boardTable__table_tr,
                    onClick: T,
                    children: [
                      e('td', {
                        className: a.boardTable__table_td,
                        children: v,
                      }),
                      e('td', {
                        className: a.boardTable__table_td,
                        children: e('div', {
                          className: a.boardTable__table_avatar,
                          children: e(N, { path: u }),
                        }),
                      }),
                      e('td', {
                        className: a.boardTable__table_td,
                        children: p,
                      }),
                      e('td', {
                        className: a.boardTable__table_td,
                        children: _,
                      }),
                    ],
                  },
                  s
                );
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const A = '_leaderBoard_13p2j_1',
  O = '_leaderBoard__wrapper_13p2j_1',
  D = '_leaderBoard__wrapper_topLeader_13p2j_1',
  m = {
    leaderBoard: A,
    leaderBoard__wrapper: O,
    leaderBoard__wrapper_topLeader: D,
  };
function U() {
  const [r, c] = h.exports.useState([]),
    [n, i] = h.exports.useState([]),
    t = E(R),
    { getTeamLeaders: o, isLoadingLeaders: s } = $();
  return (
    h.exports.useEffect(() => {
      o();
    }, []),
    h.exports.useEffect(() => {
      t.length && (c(t.slice(0, 3)), i(t.slice(3, 13)));
    }, [t]),
    d('div', {
      className: m.leaderBoard,
      children: [
        e(k, { children: 'LeaderBoard' }),
        d('div', {
          className: m.leaderBoard__wrapper,
          children: [
            e('div', {
              className: m.leaderBoard__wrapper_topLeader,
              children: r.map((_, p) => e(j, { position: p, leader: _ }, p)),
            }),
            e(y, { leaders: n, isLoading: s }),
            e(x, {}),
          ],
        }),
      ],
    })
  );
}
export { U as default };
