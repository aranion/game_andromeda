import {
  b as z,
  f as D,
  h as Q,
  i as U,
  k as F,
  l as S,
} from './index.e2d0ecb8.js';
import { a as w } from './selectors.f6ef23e1.js';
const k = () => {
  const { userData: n } = z(w),
    { id: s } = n,
    { setLeaders: d, setHightScore: i, setLeaderUserData: l } = D(),
    [L, { isLoading: h }] = Q(),
    [f, { isLoading: u }] = U(),
    [g, { isLoading: m }] = F(),
    [y] = S(),
    o = a => {
      if (a) {
        if ('message' in a) throw new Error(a.message);
        console.error(a);
      }
    },
    A = a => {
      s &&
        f({ data: { id: s, highScore: a } })
          .then(e => {
            'data' in e
              ? (i(null), console.log('Leader added', e.data))
              : o(e.error);
          })
          .catch(console.error);
    },
    B = a => {
      L(a || {})
        .then(e => {
          e.data ? d(e.data) : o(e.error);
        })
        .catch(console.error);
    },
    T = a => {
      g(a || {})
        .then(e => {
          if (e.data) {
            const r = e.data;
            d(r), p(r);
          } else o(e.error);
        })
        .catch(console.error);
    },
    p = a => {
      a.forEach(e => {
        var c;
        const r = (c = e.id) == null ? void 0 : c.toString();
        r &&
          y(r)
            .then(t => {
              t.data ? l(t.data) : o(t.error);
            })
            .catch(console.error);
      });
    };
  return {
    addTeamLeader: A,
    getAllLeaders: B,
    getTeamLeaders: T,
    isLoadingLeaders: m,
    isLoadingAll: h,
    isLoadingAddLeader: u,
  };
};
export { k as u };
