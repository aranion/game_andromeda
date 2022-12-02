import {
  d as A,
  p as m,
  j as s,
  q as L,
  c as P,
  I as O,
  B as b,
  r as F,
  t as R,
  v as B,
  a as T,
  u as x,
  b as C,
  l as U,
  R as h,
  T as I,
  L as V,
} from './index.e2d0ecb8.js';
import { u as q, A as $ } from './index.5e06f119.js';
import { B as W } from './index.3946e526.js';
import { a as z } from './selectors.f6ef23e1.js';
function G(e) {
  const {
      isEdit: i,
      isEditPassword: r,
      isLoading: l,
      fields: a,
      userId: w,
    } = e,
    {
      updatePassword: k,
      updateProfile: v,
      isLoadingPassword: p,
      isLoadingProfile: _,
    } = q(),
    N = A(m.profileFields__field_value, { [m.profileFields__field_edit]: i });
  if (l) return s(L, { position: 'relative' });
  const y = d => {
    if ((d.preventDefault(), d.stopPropagation(), w)) {
      const f = new FormData(d.currentTarget).entries(),
        t = {};
      for (const o of f) {
        const c = o[0],
          E = o[1];
        typeof E == 'string' && (t[c] = E);
      }
      r ? (delete t.repeatPassword, k(t)) : v(t);
    }
  };
  return P('form', {
    className: m.profileFields,
    onSubmit: y,
    children: [
      (p || _) && s(L, {}),
      a.map(d => {
        const { label: f, key: t, value: o, ...c } = d;
        return P(
          'div',
          {
            className: m.profileFields__field,
            children: [
              s('label', {
                className: m.profileFields__field_title,
                htmlFor: t,
                children: f,
              }),
              s(O, {
                ...c,
                typeComponent: 'input',
                name: t,
                id: t,
                readOnly: !i,
                className: N,
                defaultValue: o || '',
              }),
            ],
          },
          t
        );
      }),
      i && s(b, { type: 'submit', children: 'Save' }),
    ],
  });
}
const M = '_wrapper_vjhpk_1',
  Q = '_profile_vjhpk_13',
  H = '_profile__avatar_vjhpk_1',
  J = '_profile__nickname_vjhpk_1',
  K = '_profile__buttons_vjhpk_1',
  X = '_profile__buttons_width_vjhpk_1',
  n = {
    wrapper: M,
    profile: Q,
    profile__avatar: H,
    profile__nickname: J,
    profile__buttons: K,
    profile__buttons_width: X,
  },
  Y = {
    login: 'Login',
    display_name: 'Nickname',
    first_name: 'First name',
    second_name: 'Second name',
    email: 'E-mail',
    phone: 'Phone',
  },
  D = e =>
    e
      ? Object.entries(e)
          .filter(([r]) => r !== 'avatar' && r !== 'id')
          .sort()
          .map(([r, l]) => {
            const a = { key: r, label: Y[r], value: l || '', required: !0 };
            switch (r) {
              case 'email':
                return { ...a, type: 'email' };
              case 'phone':
                return { ...a, type: 'tel' };
              default:
                return a;
            }
          })
      : [],
  Z = () => {
    const e = { type: 'password', required: !0, value: '' };
    return [
      { ...e, key: 'oldPassword', label: 'Old password' },
      { ...e, key: 'newPassword', label: 'New password' },
      { ...e, key: 'repeatPassword', label: 'Repeat new password' },
    ];
  };
function re() {
  const [e, i] = F.exports.useState(null),
    [r, l] = F.exports.useState([]),
    { userId: a } = R(),
    { pathname: w } = B(),
    { logout: k } = T(),
    v = x(),
    { userData: p } = C(z),
    { id: _ } = p,
    [N, { isFetching: y }] = U(),
    d =
      (e == null ? void 0 : e.display_name) ||
      (e == null ? void 0 : e.login) ||
      '',
    f = a && !isNaN(+a),
    t = w === h.PROFILE_EDIT_PASSWORD,
    o = w === h.PROFILE_EDIT || t,
    c = !!(a && !!_ && _ !== +a);
  if (
    (F.exports.useEffect(() => {
      if (t) {
        const u = Z();
        l(u);
      } else {
        const u = D(p);
        l(u), i(p);
      }
    }, [t, p]),
    F.exports.useEffect(() => {
      !o &&
        f &&
        (l([]),
        i(null),
        N(a)
          .then(u => {
            if (u.data) {
              const { data: g } = u,
                j = D(g);
              i(g), l(j);
            } else console.error(u.error);
          })
          .catch(console.log));
    }, [a]),
    !o && !f)
  )
    return s(I, {
      children:
        'ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D \u043D\u0435 \u0432\u0435\u0440\u043D\u043E',
    });
  const E = () => {
      v(h.PROFILE_EDIT, { replace: !0 });
    },
    S = () => {
      v(h.PROFILE_EDIT_PASSWORD, { replace: !0 });
    };
  return P('div', {
    className: n.wrapper,
    children: [
      s(I, { children: 'Profile' }),
      P('div', {
        className: n.profile,
        children: [
          s('div', {
            className: n.profile__avatar,
            children: s($, {
              isEditAvatar: !c,
              path: e == null ? void 0 : e.avatar,
            }),
          }),
          s('span', { className: n.profile__nickname, children: d }),
          s(G, {
            isEdit: o,
            isEditPassword: t,
            isLoading: y,
            fields: r,
            userId: _,
          }),
          (o || !c) &&
            P('div', {
              className: n.profile__buttons,
              children: [
                s(b, {
                  onClick: E,
                  className: n.profile__buttons_width,
                  children: 'Edit profile',
                }),
                s(b, {
                  onClick: S,
                  className: n.profile__buttons_width,
                  children: 'Edit password',
                }),
                s(b, {
                  typeButton: 'danger',
                  onClick: k,
                  className: n.profile__buttons_width,
                  children: 'Log out',
                }),
              ],
            }),
          !o &&
            c &&
            s(V, { to: `${h.PROFILE}/${_}`, children: 'Go to my profile' }),
        ],
      }),
      s(W, {}),
    ],
  });
}
export { re as default };
