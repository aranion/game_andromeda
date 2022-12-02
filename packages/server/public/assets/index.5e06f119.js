import {
  u as m,
  b as L,
  f as P,
  w as y,
  x as U,
  y as w,
  R as g,
  z as F,
  r as A,
  c as E,
  C as v,
  j as h,
  q as j,
} from './index.e2d0ecb8.js';
import { a as x } from './selectors.f6ef23e1.js';
const R = () => {
    const o = m(),
      { userData: s } = L(x),
      { id: c } = s,
      { setUserData: n } = P(),
      [u, { isFetching: d }] = y(),
      [l, { isFetching: i }] = U(),
      [r, { isFetching: p }] = w(),
      a = e => {
        if (e) {
          if ('message' in e) throw new Error(e.message);
          console.error(e);
        }
      };
    return {
      updateProfile: e => {
        r(e)
          .then(t => {
            t.data
              ? (n(t.data), o(`${g.PROFILE}/${c}`, { replace: !0 }))
              : a(t.error);
          })
          .catch(console.error);
      },
      updateAvatar: e => {
        const t = new FormData();
        t.append('avatar', e),
          u(t)
            .then(f => {
              f.data ? n(f.data) : a(f.error);
            })
            .catch(console.error);
      },
      updatePassword: e => {
        l(e)
          .then(t => {
            t.data ? o(`${g.PROFILE}/${c}`, { replace: !0 }) : a(t.error);
          })
          .catch(console.error);
      },
      isLoadingAvatar: d,
      isLoadingPassword: i,
      isLoadingProfile: p,
    };
  },
  z = '/assets/AvatarDefault.bd3f2c96.svg';
function _(o) {
  const { path: s, isEditAvatar: c = !1 } = o,
    { updateAvatar: n, isLoadingAvatar: u } = R(),
    [d, { isFetching: l }] = F(),
    [i, r] = A.exports.useState(null),
    p = () => {
      const a = document.createElement('input');
      (a.type = 'file'),
        (a.accept = '.jpg, .jpeg, .png'),
        (a.onchange = () => {
          a.files && n(a.files[0]);
        }),
        a.click(),
        a.remove();
    };
  return (
    A.exports.useEffect(() => {
      s
        ? d(s)
            .then(a => {
              a.data && r(URL.createObjectURL(a.data));
            })
            .catch(a => {
              console.error(a), r(null);
            })
        : r(z);
    }, [s]),
    E('div', {
      className: v.avatar,
      children: [
        (l || u) && h(j, {}),
        c &&
          h('button', {
            className: v.avatar__edit,
            onClick: p,
            children:
              '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440',
          }),
        i && h('img', { className: v.avatar__img, src: i, alt: 'avatar' }),
      ],
    })
  );
}
export { _ as A, R as u };
