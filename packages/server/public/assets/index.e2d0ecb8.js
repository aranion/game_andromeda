var qm = Object.defineProperty;
var Qm = (e, t, n) =>
  t in e
    ? qm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Fl = (e, t, n) => (Qm(e, typeof t != 'symbol' ? t + '' : t, n), n);
function Bm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver(o => {
    for (const i of o)
      if (i.type === 'childList')
        for (const u of i.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var ar =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function Vm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function ju(e) {
  var t = e.default;
  if (typeof t == 'function') {
    var n = function () {
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var N = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jo = Symbol.for('react.element'),
  Wm = Symbol.for('react.portal'),
  Hm = Symbol.for('react.fragment'),
  Km = Symbol.for('react.strict_mode'),
  Gm = Symbol.for('react.profiler'),
  Ym = Symbol.for('react.provider'),
  Xm = Symbol.for('react.context'),
  Jm = Symbol.for('react.forward_ref'),
  Zm = Symbol.for('react.suspense'),
  ey = Symbol.for('react.memo'),
  ty = Symbol.for('react.lazy'),
  yf = Symbol.iterator;
function ny(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (yf && e[yf]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var mp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yp = Object.assign,
  gp = {};
function Qr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gp),
    (this.updater = n || mp);
}
Qr.prototype.isReactComponent = {};
Qr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Qr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Sp() {}
Sp.prototype = Qr.prototype;
function Ds(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gp),
    (this.updater = n || mp);
}
var $s = (Ds.prototype = new Sp());
$s.constructor = Ds;
yp($s, Qr.prototype);
$s.isPureReactComponent = !0;
var gf = Array.isArray,
  wp = Object.prototype.hasOwnProperty,
  zs = { current: null },
  _p = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ep(e, t, n) {
  var r,
    o = {},
    i = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      wp.call(t, r) && !_p.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), s = 0; s < l; s++) a[s] = arguments[s + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Jo,
    type: e,
    key: i,
    ref: u,
    props: o,
    _owner: zs.current,
  };
}
function ry(e, t) {
  return {
    $$typeof: Jo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ls(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Jo;
}
function oy(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sf = /\/+/g;
function Ul(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? oy('' + e.key)
    : t.toString(36);
}
function Ai(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        u = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Jo:
          case Wm:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (o = o(u)),
      (e = r === '' ? '.' + Ul(u, 0) : r),
      gf(o)
        ? ((n = ''),
          e != null && (n = e.replace(Sf, '$&/') + '/'),
          Ai(o, t, n, '', function (s) {
            return s;
          }))
        : o != null &&
          (Ls(o) &&
            (o = ry(
              o,
              n +
                (!o.key || (u && u.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Sf, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((u = 0), (r = r === '' ? '.' : r + ':'), gf(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Ul(i, l);
      u += Ai(i, t, n, a, o);
    }
  else if (((a = ny(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Ul(i, l++)), (u += Ai(i, t, n, a, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return u;
}
function ci(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ai(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function iy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var rt = { current: null },
  Ni = { transition: null },
  uy = {
    ReactCurrentDispatcher: rt,
    ReactCurrentBatchConfig: Ni,
    ReactCurrentOwner: zs,
  };
se.Children = {
  map: ci,
  forEach: function (e, t, n) {
    ci(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ci(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ci(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ls(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
se.Component = Qr;
se.Fragment = Hm;
se.Profiler = Gm;
se.PureComponent = Ds;
se.StrictMode = Km;
se.Suspense = Zm;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uy;
se.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = yp({}, e.props),
    o = e.key,
    i = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (u = zs.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      wp.call(t, a) &&
        !_p.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var s = 0; s < a; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: Jo, type: e.type, key: o, ref: i, props: r, _owner: u };
};
se.createContext = function (e) {
  return (
    (e = {
      $$typeof: Xm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ym, _context: e }),
    (e.Consumer = e)
  );
};
se.createElement = Ep;
se.createFactory = function (e) {
  var t = Ep.bind(null, e);
  return (t.type = e), t;
};
se.createRef = function () {
  return { current: null };
};
se.forwardRef = function (e) {
  return { $$typeof: Jm, render: e };
};
se.isValidElement = Ls;
se.lazy = function (e) {
  return { $$typeof: ty, _payload: { _status: -1, _result: e }, _init: iy };
};
se.memo = function (e, t) {
  return { $$typeof: ey, type: e, compare: t === void 0 ? null : t };
};
se.startTransition = function (e) {
  var t = Ni.transition;
  Ni.transition = {};
  try {
    e();
  } finally {
    Ni.transition = t;
  }
};
se.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
se.useCallback = function (e, t) {
  return rt.current.useCallback(e, t);
};
se.useContext = function (e) {
  return rt.current.useContext(e);
};
se.useDebugValue = function () {};
se.useDeferredValue = function (e) {
  return rt.current.useDeferredValue(e);
};
se.useEffect = function (e, t) {
  return rt.current.useEffect(e, t);
};
se.useId = function () {
  return rt.current.useId();
};
se.useImperativeHandle = function (e, t, n) {
  return rt.current.useImperativeHandle(e, t, n);
};
se.useInsertionEffect = function (e, t) {
  return rt.current.useInsertionEffect(e, t);
};
se.useLayoutEffect = function (e, t) {
  return rt.current.useLayoutEffect(e, t);
};
se.useMemo = function (e, t) {
  return rt.current.useMemo(e, t);
};
se.useReducer = function (e, t, n) {
  return rt.current.useReducer(e, t, n);
};
se.useRef = function (e) {
  return rt.current.useRef(e);
};
se.useState = function (e) {
  return rt.current.useState(e);
};
se.useSyncExternalStore = function (e, t, n) {
  return rt.current.useSyncExternalStore(e, t, n);
};
se.useTransition = function () {
  return rt.current.useTransition();
};
se.version = '18.2.0';
(function (e) {
  e.exports = se;
})(N);
const xp = Vm(N.exports),
  ja = Bm({ __proto__: null, default: xp }, [N.exports]),
  ly = '_app_18mih_1',
  ay = '_app__star_18mih_1',
  sy = '_shine_18mih_1',
  cy = '_app__content_18mih_1',
  ql = { app: ly, app__star: ay, shine: sy, app__content: cy },
  fy = 'modulepreload',
  dy = function (e) {
    return '/' + e;
  },
  wf = {},
  Ut = function (t, n, r) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map(o => {
            if (((o = dy(o)), o in wf)) return;
            wf[o] = !0;
            const i = o.endsWith('.css'),
              u = i ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${o}"]${u}`)) return;
            const l = document.createElement('link');
            if (
              ((l.rel = i ? 'stylesheet' : fy),
              i || ((l.as = 'script'), (l.crossOrigin = '')),
              (l.href = o),
              document.head.appendChild(l),
              i)
            )
              return new Promise((a, s) => {
                l.addEventListener('load', a),
                  l.addEventListener('error', () =>
                    s(new Error(`Unable to preload CSS for ${o}`))
                  );
              });
          })
        ).then(() => t());
  };
/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yi() {
  return (
    (Yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yi.apply(this, arguments)
  );
}
var gn;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(gn || (gn = {}));
const _f = 'popstate';
function py(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: u, hash: l } = r.location;
    return Aa(
      '',
      { pathname: i, search: u, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Na(o);
  }
  return hy(t, n, null, e);
}
function vy() {
  return Math.random().toString(36).substr(2, 8);
}
function Ef(e) {
  return { usr: e.state, key: e.key };
}
function Aa(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Yi(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Br(t) : t,
      { state: n, key: (t && t.key) || r || vy() }
    )
  );
}
function Na(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Br(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function hy(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    u = o.history,
    l = gn.Pop,
    a = null;
  function s() {
    (l = gn.Pop), a && a({ action: l, location: d.location });
  }
  function c(m, y) {
    l = gn.Push;
    let w = Aa(d.location, m, y);
    n && n(w, m);
    let x = Ef(w),
      v = d.createHref(w);
    try {
      u.pushState(x, '', v);
    } catch {
      o.location.assign(v);
    }
    i && a && a({ action: l, location: w });
  }
  function p(m, y) {
    l = gn.Replace;
    let w = Aa(d.location, m, y);
    n && n(w, m);
    let x = Ef(w),
      v = d.createHref(w);
    u.replaceState(x, '', v), i && a && a({ action: l, location: w });
  }
  let d = {
    get action() {
      return l;
    },
    get location() {
      return e(o, u);
    },
    listen(m) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(_f, s),
        (a = m),
        () => {
          o.removeEventListener(_f, s), (a = null);
        }
      );
    },
    createHref(m) {
      return t(o, m);
    },
    push: c,
    replace: p,
    go(m) {
      return u.go(m);
    },
  };
  return d;
}
var xf;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(xf || (xf = {}));
function my(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Br(t) : t,
    o = Pp(r.pathname || '/', n);
  if (o == null) return null;
  let i = kp(e);
  yy(i);
  let u = null;
  for (let l = 0; u == null && l < i.length; ++l) u = Oy(i[l], o);
  return u;
}
function kp(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ''),
    e.forEach((o, i) => {
      let u = {
        relativePath: o.path || '',
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: i,
        route: o,
      };
      u.relativePath.startsWith('/') &&
        (Le(
          u.relativePath.startsWith(r),
          'Absolute route path "' +
            u.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            'must start with the combined path of all its parent routes.'
        ),
        (u.relativePath = u.relativePath.slice(r.length)));
      let l = En([r, u.relativePath]),
        a = n.concat(u);
      o.children &&
        o.children.length > 0 &&
        (Le(
          o.index !== !0,
          'Index routes must not have child routes. Please remove ' +
            ('all child routes from route path "' + l + '".')
        ),
        kp(o.children, t, a, l)),
        !(o.path == null && !o.index) &&
          t.push({ path: l, score: ky(l, o.index), routesMeta: a });
    }),
    t
  );
}
function yy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Py(
          t.routesMeta.map(r => r.childrenIndex),
          n.routesMeta.map(r => r.childrenIndex)
        )
  );
}
const gy = /^:\w+$/,
  Sy = 3,
  wy = 2,
  _y = 1,
  Ey = 10,
  xy = -2,
  kf = e => e === '*';
function ky(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(kf) && (r += xy),
    t && (r += wy),
    n
      .filter(o => !kf(o))
      .reduce((o, i) => o + (gy.test(i) ? Sy : i === '' ? _y : Ey), r)
  );
}
function Py(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Oy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let u = 0; u < n.length; ++u) {
    let l = n[u],
      a = u === n.length - 1,
      s = o === '/' ? t : t.slice(o.length) || '/',
      c = Cy(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let p = l.route;
    i.push({
      params: r,
      pathname: En([o, c.pathname]),
      pathnameBase: Ay(En([o, c.pathnameBase])),
      route: p,
    }),
      c.pathnameBase !== '/' && (o = En([o, c.pathnameBase]));
  }
  return i;
}
function Cy(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ry(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    u = i.replace(/(.)\/+$/, '$1'),
    l = o.slice(1);
  return {
    params: r.reduce((s, c, p) => {
      if (c === '*') {
        let d = l[p] || '';
        u = i.slice(0, i.length - d.length).replace(/(.)\/+$/, '$1');
      }
      return (s[c] = Ty(l[p] || '', c)), s;
    }, {}),
    pathname: i,
    pathnameBase: u,
    pattern: e,
  };
}
function Ry(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Op(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/:(\w+)/g, (u, l) => (r.push(l), '([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function Ty(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Op(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Pp(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Le(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Op(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Iy(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? Br(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : jy(n, t)) : t,
    search: Ny(r),
    hash: My(o),
  };
}
function jy(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach(o => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Ql(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Cp(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = Br(e))
    : ((o = Yi({}, e)),
      Le(
        !o.pathname || !o.pathname.includes('?'),
        Ql('?', 'pathname', 'search', o)
      ),
      Le(
        !o.pathname || !o.pathname.includes('#'),
        Ql('#', 'pathname', 'hash', o)
      ),
      Le(!o.search || !o.search.includes('#'), Ql('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    u = i ? '/' : o.pathname,
    l;
  if (r || u == null) l = n;
  else {
    let p = t.length - 1;
    if (u.startsWith('..')) {
      let d = u.split('/');
      for (; d[0] === '..'; ) d.shift(), (p -= 1);
      o.pathname = d.join('/');
    }
    l = p >= 0 ? t[p] : '/';
  }
  let a = Iy(o, l),
    s = u && u !== '/' && u.endsWith('/'),
    c = (i || u === '.') && n.endsWith('/');
  return !a.pathname.endsWith('/') && (s || c) && (a.pathname += '/'), a;
}
const En = e => e.join('/').replace(/\/\/+/g, '/'),
  Ay = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ny = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  My = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Dy {
  constructor(t, n, r) {
    (this.status = t), (this.statusText = n || ''), (this.data = r);
  }
}
function $y(e) {
  return e instanceof Dy;
}
var Au = { exports: {} },
  Nu = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zy = N.exports,
  Ly = Symbol.for('react.element'),
  by = Symbol.for('react.fragment'),
  Fy = Object.prototype.hasOwnProperty,
  Uy = zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  qy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rp(e, t, n) {
  var r,
    o = {},
    i = null,
    u = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (u = t.ref);
  for (r in t) Fy.call(t, r) && !qy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Ly,
    type: e,
    key: i,
    ref: u,
    props: o,
    _owner: Uy.current,
  };
}
Nu.Fragment = by;
Nu.jsx = Rp;
Nu.jsxs = Rp;
(function (e) {
  e.exports = Nu;
})(Au);
const Tp = Au.exports.Fragment,
  F = Au.exports.jsx,
  Kt = Au.exports.jsxs;
/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ma() {
  return (
    (Ma = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ma.apply(this, arguments)
  );
}
function Qy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const By = typeof Object.is == 'function' ? Object.is : Qy,
  { useState: Vy, useEffect: Wy, useLayoutEffect: Hy, useDebugValue: Ky } = ja;
function Gy(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = Vy({ inst: { value: r, getSnapshot: t } });
  return (
    Hy(() => {
      (o.value = r), (o.getSnapshot = t), Bl(o) && i({ inst: o });
    }, [e, r, t]),
    Wy(
      () => (
        Bl(o) && i({ inst: o }),
        e(() => {
          Bl(o) && i({ inst: o });
        })
      ),
      [e]
    ),
    Ky(r),
    r
  );
}
function Bl(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !By(n, r);
  } catch {
    return !0;
  }
}
function Yy(e, t, n) {
  return t();
}
const Xy =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Jy = !Xy,
  Zy = Jy ? Yy : Gy;
'useSyncExternalStore' in ja && (e => e.useSyncExternalStore)(ja);
const e0 = N.exports.createContext(null),
  t0 = N.exports.createContext(null),
  bs = N.exports.createContext(null),
  Fs = N.exports.createContext(null),
  Mu = N.exports.createContext(null),
  Vr = N.exports.createContext({ outlet: null, matches: [] }),
  Ip = N.exports.createContext(null);
function n0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Wr() || Le(!1);
  let { basename: r, navigator: o } = N.exports.useContext(Fs),
    { hash: i, pathname: u, search: l } = Ap(e, { relative: n }),
    a = u;
  return (
    r !== '/' && (a = u === '/' ? r : En([r, u])),
    o.createHref({ pathname: a, search: l, hash: i })
  );
}
function Wr() {
  return N.exports.useContext(Mu) != null;
}
function Zo() {
  return Wr() || Le(!1), N.exports.useContext(Mu).location;
}
function jp(e) {
  return e.filter(
    (t, n) =>
      n === 0 || (!t.route.index && t.pathnameBase !== e[n - 1].pathnameBase)
  );
}
function Us() {
  Wr() || Le(!1);
  let { basename: e, navigator: t } = N.exports.useContext(Fs),
    { matches: n } = N.exports.useContext(Vr),
    { pathname: r } = Zo(),
    o = JSON.stringify(jp(n).map(l => l.pathnameBase)),
    i = N.exports.useRef(!1);
  return (
    N.exports.useEffect(() => {
      i.current = !0;
    }),
    N.exports.useCallback(
      function (l, a) {
        if ((a === void 0 && (a = {}), !i.current)) return;
        if (typeof l == 'number') {
          t.go(l);
          return;
        }
        let s = Cp(l, JSON.parse(o), r, a.relative === 'path');
        e !== '/' &&
          (s.pathname = s.pathname === '/' ? e : En([e, s.pathname])),
          (a.replace ? t.replace : t.push)(s, a.state, a);
      },
      [e, t, o, r]
    )
  );
}
function NE() {
  let { matches: e } = N.exports.useContext(Vr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Ap(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = N.exports.useContext(Vr),
    { pathname: o } = Zo(),
    i = JSON.stringify(jp(r).map(u => u.pathnameBase));
  return N.exports.useMemo(
    () => Cp(e, JSON.parse(i), o, n === 'path'),
    [e, i, o, n]
  );
}
function r0(e, t) {
  Wr() || Le(!1);
  let n = N.exports.useContext(bs),
    { matches: r } = N.exports.useContext(Vr),
    o = r[r.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : '/';
  o && o.route;
  let l = Zo(),
    a;
  if (t) {
    var s;
    let y = typeof t == 'string' ? Br(t) : t;
    u === '/' ||
      ((s = y.pathname) == null ? void 0 : s.startsWith(u)) ||
      Le(!1),
      (a = y);
  } else a = l;
  let c = a.pathname || '/',
    p = u === '/' ? c : c.slice(u.length) || '/',
    d = my(e, { pathname: p }),
    m = l0(
      d &&
        d.map(y =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: En([u, y.pathname]),
            pathnameBase: y.pathnameBase === '/' ? u : En([u, y.pathnameBase]),
          })
        ),
      r,
      n || void 0
    );
  return t
    ? F(Mu.Provider, {
        value: {
          location: Ma(
            {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
            },
            a
          ),
          navigationType: gn.Pop,
        },
        children: m,
      })
    : m;
}
function o0() {
  let e = s0(),
    t = $y(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: r },
    i = { padding: '2px 4px', backgroundColor: r };
  return Kt(Tp, {
    children: [
      F('h2', { children: 'Unhandled Thrown Error!' }),
      F('h3', { style: { fontStyle: 'italic' }, children: t }),
      n ? F('pre', { style: o, children: n }) : null,
      F('p', { children: '\u{1F4BF} Hey developer \u{1F44B}' }),
      Kt('p', {
        children: [
          'You can provide a way better UX than this when your app throws errors by providing your own\xA0',
          F('code', { style: i, children: 'errorElement' }),
          ' props on\xA0',
          F('code', { style: i, children: '<Route>' }),
        ],
      }),
    ],
  });
}
class i0 extends N.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? F(Ip.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function u0(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = N.exports.useContext(e0);
  return (
    o && n.route.errorElement && (o._deepestRenderedBoundaryId = n.route.id),
    F(Vr.Provider, { value: t, children: r })
  );
}
function l0(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let i = r.findIndex(
      u => u.route.id && (o == null ? void 0 : o[u.route.id])
    );
    i >= 0 || Le(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, u, l) => {
    let a = u.route.id ? (o == null ? void 0 : o[u.route.id]) : null,
      s = n ? u.route.errorElement || F(o0, {}) : null,
      c = () =>
        F(u0, {
          match: u,
          routeContext: { outlet: i, matches: t.concat(r.slice(0, l + 1)) },
          children: a ? s : u.route.element !== void 0 ? u.route.element : i,
        });
    return n && (u.route.errorElement || l === 0)
      ? F(i0, { location: n.location, component: s, error: a, children: c() })
      : c();
  }, null);
}
var Pf;
(function (e) {
  e.UseRevalidator = 'useRevalidator';
})(Pf || (Pf = {}));
var Da;
(function (e) {
  (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(Da || (Da = {}));
function a0(e) {
  let t = N.exports.useContext(bs);
  return t || Le(!1), t;
}
function s0() {
  var e;
  let t = N.exports.useContext(Ip),
    n = a0(Da.UseRouteError),
    r = N.exports.useContext(Vr),
    o = r.matches[r.matches.length - 1];
  return (
    t ||
    (r || Le(!1),
    o.route.id || Le(!1),
    (e = n.errors) == null ? void 0 : e[o.route.id])
  );
}
function c0(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Wr() || Le(!1);
  let i = N.exports.useContext(bs),
    u = Us();
  return (
    N.exports.useEffect(() => {
      (i && i.navigation.state !== 'idle') ||
        u(t, { replace: n, state: r, relative: o });
    }),
    null
  );
}
function Je(e) {
  Le(!1);
}
function f0(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = gn.Pop,
    navigator: i,
    static: u = !1,
  } = e;
  Wr() && Le(!1);
  let l = t.replace(/^\/*/, '/'),
    a = N.exports.useMemo(
      () => ({ basename: l, navigator: i, static: u }),
      [l, i, u]
    );
  typeof r == 'string' && (r = Br(r));
  let {
      pathname: s = '/',
      search: c = '',
      hash: p = '',
      state: d = null,
      key: m = 'default',
    } = r,
    y = N.exports.useMemo(() => {
      let w = Pp(s, l);
      return w == null
        ? null
        : { pathname: w, search: c, hash: p, state: d, key: m };
    }, [l, s, c, p, d, m]);
  return y == null
    ? null
    : F(Fs.Provider, {
        value: a,
        children: F(Mu.Provider, {
          children: n,
          value: { location: y, navigationType: o },
        }),
      });
}
function d0(e) {
  let { children: t, location: n } = e,
    r = N.exports.useContext(t0),
    o = r && !t ? r.router.routes : $a(t);
  return r0(o, n);
}
var Of;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(Of || (Of = {}));
new Promise(() => {});
function $a(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.exports.Children.forEach(e, (r, o) => {
      if (!N.exports.isValidElement(r)) return;
      if (r.type === N.exports.Fragment) {
        n.push.apply(n, $a(r.props.children, t));
        return;
      }
      r.type !== Je && Le(!1), !r.props.index || !r.props.children || Le(!1);
      let i = [...t, o],
        u = {
          id: r.props.id || i.join('-'),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (u.children = $a(r.props.children, i)), n.push(u);
    }),
    n
  );
}
/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function p0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function v0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function h0(e, t) {
  return e.button === 0 && (!t || t === '_self') && !v0(e);
}
const m0 = [
  'onClick',
  'relative',
  'reloadDocument',
  'replace',
  'state',
  'target',
  'to',
  'preventScrollReset',
];
function y0(e) {
  let { basename: t, children: n, window: r } = e,
    o = N.exports.useRef();
  o.current == null && (o.current = py({ window: r, v5Compat: !0 }));
  let i = o.current,
    [u, l] = N.exports.useState({ action: i.action, location: i.location });
  return (
    N.exports.useLayoutEffect(() => i.listen(l), [i]),
    F(f0, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
    })
  );
}
const ME = N.exports.forwardRef(function (t, n) {
  let {
      onClick: r,
      relative: o,
      reloadDocument: i,
      replace: u,
      state: l,
      target: a,
      to: s,
      preventScrollReset: c,
    } = t,
    p = p0(t, m0),
    d = n0(s, { relative: o }),
    m = g0(s, {
      replace: u,
      state: l,
      target: a,
      preventScrollReset: c,
      relative: o,
    });
  function y(w) {
    r && r(w), w.defaultPrevented || m(w);
  }
  return F('a', { ...p, href: d, onClick: i ? r : y, ref: n, target: a });
});
var Cf;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(Cf || (Cf = {}));
var Rf;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Rf || (Rf = {}));
function g0(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: u,
    } = t === void 0 ? {} : t,
    l = Us(),
    a = Zo(),
    s = Ap(e, { relative: u });
  return N.exports.useCallback(
    c => {
      if (h0(c, n)) {
        c.preventDefault();
        let p = r !== void 0 ? r : Na(a) === Na(s);
        l(e, { replace: p, state: o, preventScrollReset: i, relative: u });
      }
    },
    [a, l, s, r, o, n, e, i, u]
  );
}
var Np = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (!!i) {
          var u = typeof i;
          if (u === 'string' || u === 'number') r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var l = n.apply(null, i);
              l && r.push(l);
            }
          } else if (u === 'object') {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes('[native code]')
            ) {
              r.push(i.toString());
              continue;
            }
            for (var a in i) t.call(i, a) && i[a] && r.push(a);
          }
        }
      }
      return r.join(' ');
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Np);
const Sn = Np.exports,
  S0 = '_loader_81ezq_9',
  w0 = '_loader__relative_81ezq_1',
  _0 = '_loader__inner_81ezq_1',
  E0 = '_loader__inner_one_81ezq_1',
  x0 = '_loader__inner_two_81ezq_1',
  k0 = '_loader__inner_three_81ezq_1',
  fn = {
    loader: S0,
    loader__relative: w0,
    loader__inner: _0,
    loader__inner_one: E0,
    'rotate-one': '_rotate-one_81ezq_1',
    loader__inner_two: x0,
    'rotate-two': '_rotate-two_81ezq_1',
    loader__inner_three: k0,
    'rotate-three': '_rotate-three_81ezq_1',
  };
function Mp(e) {
  const { position: t = 'absolute' } = e,
    n = Sn(fn.loader, { [fn.loader__relative]: t === 'relative' }),
    r = Sn(fn.loader__inner, fn.loader__inner_one),
    o = Sn(fn.loader__inner, fn.loader__inner_two),
    i = Sn(fn.loader__inner, fn.loader__inner_three);
  return Kt('div', {
    className: n,
    children: [
      F('div', { className: r }),
      F('div', { className: o }),
      F('div', { className: i }),
    ],
  });
}
const P0 = '_topLeader_ca62t_1',
  O0 = '_rotationAnimation_ca62t_1',
  C0 = '_topLeader__first_ca62t_1',
  R0 = '_topLeader__wrapper_ca62t_1',
  T0 = '_opacityAnimation_ca62t_1',
  I0 = '_topLeader__avatar_ca62t_1',
  j0 = '_topLeader__content_ca62t_1',
  A0 = '_topLeader__content_nickname_ca62t_1',
  N0 = '_topLeader__content_highScore_ca62t_1',
  DE = {
    topLeader: P0,
    rotationAnimation: O0,
    topLeader__first: C0,
    topLeader__wrapper: R0,
    opacityAnimation: T0,
    topLeader__avatar: I0,
    topLeader__content: j0,
    topLeader__content_nickname: A0,
    topLeader__content_highScore: N0,
  };
var Ne = (e => (
    (e.HOME = '/'),
    (e.MAINMENU = '/'),
    (e.NOT_FOUND = '/*'),
    (e.SIGN_IN = '/sign-in'),
    (e.SIGN_UP = '/sign-up'),
    (e.FORUM = '/forum'),
    (e.FORUM_TOPIC = '/topic'),
    (e.GAME = '/game'),
    (e.LEADER_BOARD = '/leader-board'),
    (e.SERVER_ERROR = '/server-error'),
    (e.PROFILE = '/profile'),
    (e.PROFILE_EDIT = '/profile/edit'),
    (e.PROFILE_EDIT_PASSWORD = '/profile/edit-password'),
    e
  ))(Ne || {}),
  Dp = (e => ((e.userId = ':userId'), e))(Dp || {}),
  $p = (e => ((e.forumId = ':forumId'), e))($p || {}),
  zp = (e => ((e.topicId = ':topicId'), e))(zp || {});
const M0 = '_avatar_137ww_1',
  D0 = '_avatar__img_137ww_1',
  $0 = '_avatar__edit_137ww_1',
  $E = { avatar: M0, avatar__img: D0, avatar__edit: $0 };
var Lp = { exports: {} },
  bp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr = N.exports;
function z0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var L0 = typeof Object.is == 'function' ? Object.is : z0,
  b0 = Nr.useState,
  F0 = Nr.useEffect,
  U0 = Nr.useLayoutEffect,
  q0 = Nr.useDebugValue;
function Q0(e, t) {
  var n = t(),
    r = b0({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    U0(
      function () {
        (o.value = n), (o.getSnapshot = t), Vl(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    F0(
      function () {
        return (
          Vl(o) && i({ inst: o }),
          e(function () {
            Vl(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    q0(n),
    n
  );
}
function Vl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !L0(e, n);
  } catch {
    return !0;
  }
}
function B0(e, t) {
  return t();
}
var V0 =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? B0
    : Q0;
bp.useSyncExternalStore =
  Nr.useSyncExternalStore !== void 0 ? Nr.useSyncExternalStore : V0;
(function (e) {
  e.exports = bp;
})(Lp);
var Fp = { exports: {} },
  Up = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Du = N.exports,
  W0 = Lp.exports;
function H0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var K0 = typeof Object.is == 'function' ? Object.is : H0,
  G0 = W0.useSyncExternalStore,
  Y0 = Du.useRef,
  X0 = Du.useEffect,
  J0 = Du.useMemo,
  Z0 = Du.useDebugValue;
Up.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = Y0(null);
  if (i.current === null) {
    var u = { hasValue: !1, value: null };
    i.current = u;
  } else u = i.current;
  i = J0(
    function () {
      function a(m) {
        if (!s) {
          if (((s = !0), (c = m), (m = r(m)), o !== void 0 && u.hasValue)) {
            var y = u.value;
            if (o(y, m)) return (p = y);
          }
          return (p = m);
        }
        if (((y = p), K0(c, m))) return y;
        var w = r(m);
        return o !== void 0 && o(y, w) ? y : ((c = m), (p = w));
      }
      var s = !1,
        c,
        p,
        d = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        d === null
          ? void 0
          : function () {
              return a(d());
            },
      ];
    },
    [t, n, r, o]
  );
  var l = G0(e, i[0], i[1]);
  return (
    X0(
      function () {
        (u.hasValue = !0), (u.value = l);
      },
      [l]
    ),
    Z0(l),
    l
  );
};
(function (e) {
  e.exports = Up;
})(Fp);
var $u = { exports: {} },
  wt = {},
  qp = { exports: {} },
  Qp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, L) {
    var K = I.length;
    I.push(L);
    e: for (; 0 < K; ) {
      var ue = (K - 1) >>> 1,
        re = I[ue];
      if (0 < o(re, L)) (I[ue] = L), (I[K] = re), (K = ue);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var L = I[0],
      K = I.pop();
    if (K !== L) {
      I[0] = K;
      e: for (var ue = 0, re = I.length, ae = re >>> 1; ue < ae; ) {
        var Pe = 2 * (ue + 1) - 1,
          Ee = I[Pe],
          be = Pe + 1,
          Te = I[be];
        if (0 > o(Ee, K))
          be < re && 0 > o(Te, Ee)
            ? ((I[ue] = Te), (I[be] = K), (ue = be))
            : ((I[ue] = Ee), (I[Pe] = K), (ue = Pe));
        else if (be < re && 0 > o(Te, K)) (I[ue] = Te), (I[be] = K), (ue = be);
        else break e;
      }
    }
    return L;
  }
  function o(I, L) {
    var K = I.sortIndex - L.sortIndex;
    return K !== 0 ? K : I.id - L.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var u = Date,
      l = u.now();
    e.unstable_now = function () {
      return u.now() - l;
    };
  }
  var a = [],
    s = [],
    c = 1,
    p = null,
    d = 3,
    m = !1,
    y = !1,
    w = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    v = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(I) {
    for (var L = n(s); L !== null; ) {
      if (L.callback === null) r(s);
      else if (L.startTime <= I)
        r(s), (L.sortIndex = L.expirationTime), t(a, L);
      else break;
      L = n(s);
    }
  }
  function g(I) {
    if (((w = !1), h(I), !y))
      if (n(a) !== null) (y = !0), ne(_);
      else {
        var L = n(s);
        L !== null && ee(g, L.startTime - I);
      }
  }
  function _(I, L) {
    (y = !1), w && ((w = !1), v(O), (O = -1)), (m = !0);
    var K = d;
    try {
      for (
        h(L), p = n(a);
        p !== null && (!(p.expirationTime > L) || (I && !M()));

      ) {
        var ue = p.callback;
        if (typeof ue == 'function') {
          (p.callback = null), (d = p.priorityLevel);
          var re = ue(p.expirationTime <= L);
          (L = e.unstable_now()),
            typeof re == 'function' ? (p.callback = re) : p === n(a) && r(a),
            h(L);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var ae = !0;
      else {
        var Pe = n(s);
        Pe !== null && ee(g, Pe.startTime - L), (ae = !1);
      }
      return ae;
    } finally {
      (p = null), (d = K), (m = !1);
    }
  }
  var E = !1,
    P = null,
    O = -1,
    T = 5,
    R = -1;
  function M() {
    return !(e.unstable_now() - R < T);
  }
  function z() {
    if (P !== null) {
      var I = e.unstable_now();
      R = I;
      var L = !0;
      try {
        L = P(!0, I);
      } finally {
        L ? B() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var B;
  if (typeof f == 'function')
    B = function () {
      f(z);
    };
  else if (typeof MessageChannel < 'u') {
    var te = new MessageChannel(),
      Z = te.port2;
    (te.port1.onmessage = z),
      (B = function () {
        Z.postMessage(null);
      });
  } else
    B = function () {
      x(z, 0);
    };
  function ne(I) {
    (P = I), E || ((E = !0), B());
  }
  function ee(I, L) {
    O = x(function () {
      I(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), ne(_));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (T = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (I) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = d;
      }
      var K = d;
      d = L;
      try {
        return I();
      } finally {
        d = K;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, L) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var K = d;
      d = I;
      try {
        return L();
      } finally {
        d = K;
      }
    }),
    (e.unstable_scheduleCallback = function (I, L, K) {
      var ue = e.unstable_now();
      switch (
        (typeof K == 'object' && K !== null
          ? ((K = K.delay), (K = typeof K == 'number' && 0 < K ? ue + K : ue))
          : (K = ue),
        I)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = K + re),
        (I = {
          id: c++,
          callback: L,
          priorityLevel: I,
          startTime: K,
          expirationTime: re,
          sortIndex: -1,
        }),
        K > ue
          ? ((I.sortIndex = K),
            t(s, I),
            n(a) === null &&
              I === n(s) &&
              (w ? (v(O), (O = -1)) : (w = !0), ee(g, K - ue)))
          : ((I.sortIndex = re), t(a, I), y || m || ((y = !0), ne(_))),
        I
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (I) {
      var L = d;
      return function () {
        var K = d;
        d = L;
        try {
          return I.apply(this, arguments);
        } finally {
          d = K;
        }
      };
    });
})(Qp);
(function (e) {
  e.exports = Qp;
})(qp);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bp = N.exports,
  gt = qp.exports;
function $(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Vp = new Set(),
  Ro = {};
function nr(e, t) {
  Mr(e, t), Mr(e + 'Capture', t);
}
function Mr(e, t) {
  for (Ro[e] = t, e = 0; e < t.length; e++) Vp.add(t[e]);
}
var rn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  za = Object.prototype.hasOwnProperty,
  eg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Tf = {},
  If = {};
function tg(e) {
  return za.call(If, e)
    ? !0
    : za.call(Tf, e)
    ? !1
    : eg.test(e)
    ? (If[e] = !0)
    : ((Tf[e] = !0), !1);
}
function ng(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function rg(e, t, n, r) {
  if (t === null || typeof t > 'u' || ng(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ot(e, t, n, r, o, i, u) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = u);
}
var Ke = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ke[e] = new ot(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ke[t] = new ot(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ke[e] = new ot(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ke[e] = new ot(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ke[e] = new ot(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ke[e] = new ot(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ke[e] = new ot(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ke[e] = new ot(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ke[e] = new ot(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qs = /[\-:]([a-z])/g;
function Qs(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(qs, Qs);
    Ke[t] = new ot(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(qs, Qs);
    Ke[t] = new ot(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(qs, Qs);
  Ke[t] = new ot(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ke[e] = new ot(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ke.xlinkHref = new ot(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ke[e] = new ot(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bs(e, t, n, r) {
  var o = Ke.hasOwnProperty(t) ? Ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (rg(t, n, o, r) && (n = null),
    r || o === null
      ? tg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var sn = Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fi = Symbol.for('react.element'),
  pr = Symbol.for('react.portal'),
  vr = Symbol.for('react.fragment'),
  Vs = Symbol.for('react.strict_mode'),
  La = Symbol.for('react.profiler'),
  Wp = Symbol.for('react.provider'),
  Hp = Symbol.for('react.context'),
  Ws = Symbol.for('react.forward_ref'),
  ba = Symbol.for('react.suspense'),
  Fa = Symbol.for('react.suspense_list'),
  Hs = Symbol.for('react.memo'),
  vn = Symbol.for('react.lazy'),
  Kp = Symbol.for('react.offscreen'),
  jf = Symbol.iterator;
function ro(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (jf && e[jf]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Re = Object.assign,
  Wl;
function po(e) {
  if (Wl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wl = (t && t[1]) || '';
    }
  return (
    `
` +
    Wl +
    e
  );
}
var Hl = !1;
function Kl(e, t) {
  if (!e || Hl) return '';
  Hl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var o = s.stack.split(`
`),
          i = r.stack.split(`
`),
          u = o.length - 1,
          l = i.length - 1;
        1 <= u && 0 <= l && o[u] !== i[l];

      )
        l--;
      for (; 1 <= u && 0 <= l; u--, l--)
        if (o[u] !== i[l]) {
          if (u !== 1 || l !== 1)
            do
              if ((u--, l--, 0 > l || o[u] !== i[l])) {
                var a =
                  `
` + o[u].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= u && 0 <= l);
          break;
        }
    }
  } finally {
    (Hl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? po(e) : '';
}
function og(e) {
  switch (e.tag) {
    case 5:
      return po(e.type);
    case 16:
      return po('Lazy');
    case 13:
      return po('Suspense');
    case 19:
      return po('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Kl(e.type, !1)), e;
    case 11:
      return (e = Kl(e.type.render, !1)), e;
    case 1:
      return (e = Kl(e.type, !0)), e;
    default:
      return '';
  }
}
function Ua(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case vr:
      return 'Fragment';
    case pr:
      return 'Portal';
    case La:
      return 'Profiler';
    case Vs:
      return 'StrictMode';
    case ba:
      return 'Suspense';
    case Fa:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Hp:
        return (e.displayName || 'Context') + '.Consumer';
      case Wp:
        return (e._context.displayName || 'Context') + '.Provider';
      case Ws:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Hs:
        return (
          (t = e.displayName || null), t !== null ? t : Ua(e.type) || 'Memo'
        );
      case vn:
        (t = e._payload), (e = e._init);
        try {
          return Ua(e(t));
        } catch {}
    }
  return null;
}
function ig(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Ua(t);
    case 8:
      return t === Vs ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Mn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Gp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function ug(e) {
  var t = Gp(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (u) {
          (r = '' + u), i.call(this, u);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = '' + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function di(e) {
  e._valueTracker || (e._valueTracker = ug(e));
}
function Yp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Gp(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qa(e, t) {
  var n = t.checked;
  return Re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Af(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Xp(e, t) {
  (t = t.checked), t != null && Bs(e, 'checked', t, !1);
}
function Qa(e, t) {
  Xp(e, t);
  var n = Mn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Ba(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Ba(e, t.type, Mn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nf(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Ba(e, t, n) {
  (t !== 'number' || Xi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var vo = Array.isArray;
function Pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Mn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Va(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return Re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Mf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error($(92));
      if (vo(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Mn(n) };
}
function Jp(e, t) {
  var n = Mn(t.value),
    r = Mn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Df(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Zp(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Wa(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Zp(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var pi,
  ev = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        pi = pi || document.createElement('div'),
          pi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = pi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function To(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var go = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  lg = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(go).forEach(function (e) {
  lg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (go[t] = go[e]);
  });
});
function tv(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (go.hasOwnProperty(e) && go[e])
    ? ('' + t).trim()
    : t + 'px';
}
function nv(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = tv(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var ag = Re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ha(e, t) {
  if (t) {
    if (ag[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error($(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error($(62));
  }
}
function Ka(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Ga = null;
function Ks(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ya = null,
  Or = null,
  Cr = null;
function $f(e) {
  if ((e = ni(e))) {
    if (typeof Ya != 'function') throw Error($(280));
    var t = e.stateNode;
    t && ((t = Uu(t)), Ya(e.stateNode, e.type, t));
  }
}
function rv(e) {
  Or ? (Cr ? Cr.push(e) : (Cr = [e])) : (Or = e);
}
function ov() {
  if (Or) {
    var e = Or,
      t = Cr;
    if (((Cr = Or = null), $f(e), t)) for (e = 0; e < t.length; e++) $f(t[e]);
  }
}
function iv(e, t) {
  return e(t);
}
function uv() {}
var Gl = !1;
function lv(e, t, n) {
  if (Gl) return e(t, n);
  Gl = !0;
  try {
    return iv(e, t, n);
  } finally {
    (Gl = !1), (Or !== null || Cr !== null) && (uv(), ov());
  }
}
function Io(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Uu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error($(231, t, typeof n));
  return n;
}
var Xa = !1;
if (rn)
  try {
    var oo = {};
    Object.defineProperty(oo, 'passive', {
      get: function () {
        Xa = !0;
      },
    }),
      window.addEventListener('test', oo, oo),
      window.removeEventListener('test', oo, oo);
  } catch {
    Xa = !1;
  }
function sg(e, t, n, r, o, i, u, l, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var So = !1,
  Ji = null,
  Zi = !1,
  Ja = null,
  cg = {
    onError: function (e) {
      (So = !0), (Ji = e);
    },
  };
function fg(e, t, n, r, o, i, u, l, a) {
  (So = !1), (Ji = null), sg.apply(cg, arguments);
}
function dg(e, t, n, r, o, i, u, l, a) {
  if ((fg.apply(this, arguments), So)) {
    if (So) {
      var s = Ji;
      (So = !1), (Ji = null);
    } else throw Error($(198));
    Zi || ((Zi = !0), (Ja = s));
  }
}
function rr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function av(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zf(e) {
  if (rr(e) !== e) throw Error($(188));
}
function pg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = rr(e)), t === null)) throw Error($(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return zf(o), e;
        if (i === r) return zf(o), t;
        i = i.sibling;
      }
      throw Error($(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var u = !1, l = o.child; l; ) {
        if (l === n) {
          (u = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (u = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!u) {
        for (l = i.child; l; ) {
          if (l === n) {
            (u = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (u = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!u) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function sv(e) {
  return (e = pg(e)), e !== null ? cv(e) : null;
}
function cv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fv = gt.unstable_scheduleCallback,
  Lf = gt.unstable_cancelCallback,
  vg = gt.unstable_shouldYield,
  hg = gt.unstable_requestPaint,
  Ae = gt.unstable_now,
  mg = gt.unstable_getCurrentPriorityLevel,
  Gs = gt.unstable_ImmediatePriority,
  dv = gt.unstable_UserBlockingPriority,
  eu = gt.unstable_NormalPriority,
  yg = gt.unstable_LowPriority,
  pv = gt.unstable_IdlePriority,
  zu = null,
  Vt = null;
function gg(e) {
  if (Vt && typeof Vt.onCommitFiberRoot == 'function')
    try {
      Vt.onCommitFiberRoot(zu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : _g,
  Sg = Math.log,
  wg = Math.LN2;
function _g(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sg(e) / wg) | 0)) | 0;
}
var vi = 64,
  hi = 4194304;
function ho(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function tu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    u = n & 268435455;
  if (u !== 0) {
    var l = u & ~o;
    l !== 0 ? (r = ho(l)) : ((i &= u), i !== 0 && (r = ho(i)));
  } else (u = n & ~o), u !== 0 ? (r = ho(u)) : i !== 0 && (r = ho(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & o) === 0 &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $t(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Eg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var u = 31 - $t(i),
      l = 1 << u,
      a = o[u];
    a === -1
      ? ((l & n) === 0 || (l & r) !== 0) && (o[u] = Eg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Za(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vv() {
  var e = vi;
  return (vi <<= 1), (vi & 4194240) === 0 && (vi = 64), e;
}
function Yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ei(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n);
}
function kg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $t(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Ys(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ve = 0;
function hv(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var mv,
  Xs,
  yv,
  gv,
  Sv,
  es = !1,
  mi = [],
  xn = null,
  kn = null,
  Pn = null,
  jo = new Map(),
  Ao = new Map(),
  mn = [],
  Pg =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function bf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      xn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      kn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Pn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      jo.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ao.delete(t.pointerId);
  }
}
function io(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ni(t)), t !== null && Xs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Og(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (xn = io(xn, e, t, n, r, o)), !0;
    case 'dragenter':
      return (kn = io(kn, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Pn = io(Pn, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return jo.set(i, io(jo.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Ao.set(i, io(Ao.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function wv(e) {
  var t = Vn(e.target);
  if (t !== null) {
    var n = rr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = av(n)), t !== null)) {
          (e.blockedOn = t),
            Sv(e.priority, function () {
              yv(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ts(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ga = r), n.target.dispatchEvent(r), (Ga = null);
    } else return (t = ni(n)), t !== null && Xs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ff(e, t, n) {
  Mi(e) && n.delete(t);
}
function Cg() {
  (es = !1),
    xn !== null && Mi(xn) && (xn = null),
    kn !== null && Mi(kn) && (kn = null),
    Pn !== null && Mi(Pn) && (Pn = null),
    jo.forEach(Ff),
    Ao.forEach(Ff);
}
function uo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    es ||
      ((es = !0),
      gt.unstable_scheduleCallback(gt.unstable_NormalPriority, Cg)));
}
function No(e) {
  function t(o) {
    return uo(o, e);
  }
  if (0 < mi.length) {
    uo(mi[0], e);
    for (var n = 1; n < mi.length; n++) {
      var r = mi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xn !== null && uo(xn, e),
      kn !== null && uo(kn, e),
      Pn !== null && uo(Pn, e),
      jo.forEach(t),
      Ao.forEach(t),
      n = 0;
    n < mn.length;
    n++
  )
    (r = mn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mn.length && ((n = mn[0]), n.blockedOn === null); )
    wv(n), n.blockedOn === null && mn.shift();
}
var Rr = sn.ReactCurrentBatchConfig,
  nu = !0;
function Rg(e, t, n, r) {
  var o = ve,
    i = Rr.transition;
  Rr.transition = null;
  try {
    (ve = 1), Js(e, t, n, r);
  } finally {
    (ve = o), (Rr.transition = i);
  }
}
function Tg(e, t, n, r) {
  var o = ve,
    i = Rr.transition;
  Rr.transition = null;
  try {
    (ve = 4), Js(e, t, n, r);
  } finally {
    (ve = o), (Rr.transition = i);
  }
}
function Js(e, t, n, r) {
  if (nu) {
    var o = ts(e, t, n, r);
    if (o === null) ua(e, t, r, ru, n), bf(e, r);
    else if (Og(o, e, t, n, r)) r.stopPropagation();
    else if ((bf(e, r), t & 4 && -1 < Pg.indexOf(e))) {
      for (; o !== null; ) {
        var i = ni(o);
        if (
          (i !== null && mv(i),
          (i = ts(e, t, n, r)),
          i === null && ua(e, t, r, ru, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ua(e, t, r, null, n);
  }
}
var ru = null;
function ts(e, t, n, r) {
  if (((ru = null), (e = Ks(r)), (e = Vn(e)), e !== null))
    if (((t = rr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = av(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ru = e), null;
}
function _v(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (mg()) {
        case Gs:
          return 1;
        case dv:
          return 4;
        case eu:
        case yg:
          return 16;
        case pv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wn = null,
  Zs = null,
  Di = null;
function Ev() {
  if (Di) return Di;
  var e,
    t = Zs,
    n = t.length,
    r,
    o = 'value' in wn ? wn.value : wn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === o[i - r]; r++);
  return (Di = o.slice(e, 1 < r ? 1 - r : void 0));
}
function $i(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yi() {
  return !0;
}
function Uf() {
  return !1;
}
function _t(e) {
  function t(n, r, o, i, u) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = u),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? yi
        : Uf),
      (this.isPropagationStopped = Uf),
      this
    );
  }
  return (
    Re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = yi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = yi));
      },
      persist: function () {},
      isPersistent: yi,
    }),
    t
  );
}
var Hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ec = _t(Hr),
  ti = Re({}, Hr, { view: 0, detail: 0 }),
  Ig = _t(ti),
  Xl,
  Jl,
  lo,
  Lu = Re({}, ti, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== lo &&
            (lo && e.type === 'mousemove'
              ? ((Xl = e.screenX - lo.screenX), (Jl = e.screenY - lo.screenY))
              : (Jl = Xl = 0),
            (lo = e)),
          Xl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Jl;
    },
  }),
  qf = _t(Lu),
  jg = Re({}, Lu, { dataTransfer: 0 }),
  Ag = _t(jg),
  Ng = Re({}, ti, { relatedTarget: 0 }),
  Zl = _t(Ng),
  Mg = Re({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dg = _t(Mg),
  $g = Re({}, Hr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zg = _t($g),
  Lg = Re({}, Hr, { data: 0 }),
  Qf = _t(Lg),
  bg = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Fg = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Ug = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function qg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ug[e]) ? !!t[e] : !1;
}
function tc() {
  return qg;
}
var Qg = Re({}, ti, {
    key: function (e) {
      if (e.key) {
        var t = bg[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = $i(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Fg[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tc,
    charCode: function (e) {
      return e.type === 'keypress' ? $i(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? $i(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Bg = _t(Qg),
  Vg = Re({}, Lu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Bf = _t(Vg),
  Wg = Re({}, ti, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tc,
  }),
  Hg = _t(Wg),
  Kg = Re({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gg = _t(Kg),
  Yg = Re({}, Lu, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Xg = _t(Yg),
  Jg = [9, 13, 27, 32],
  nc = rn && 'CompositionEvent' in window,
  wo = null;
rn && 'documentMode' in document && (wo = document.documentMode);
var Zg = rn && 'TextEvent' in window && !wo,
  xv = rn && (!nc || (wo && 8 < wo && 11 >= wo)),
  Vf = String.fromCharCode(32),
  Wf = !1;
function kv(e, t) {
  switch (e) {
    case 'keyup':
      return Jg.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Pv(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var hr = !1;
function e1(e, t) {
  switch (e) {
    case 'compositionend':
      return Pv(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Wf = !0), Vf);
    case 'textInput':
      return (e = t.data), e === Vf && Wf ? null : e;
    default:
      return null;
  }
}
function t1(e, t) {
  if (hr)
    return e === 'compositionend' || (!nc && kv(e, t))
      ? ((e = Ev()), (Di = Zs = wn = null), (hr = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return xv && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var n1 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Hf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!n1[e.type] : t === 'textarea';
}
function Ov(e, t, n, r) {
  rv(r),
    (t = ou(t, 'onChange')),
    0 < t.length &&
      ((n = new ec('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _o = null,
  Mo = null;
function r1(e) {
  zv(e, 0);
}
function bu(e) {
  var t = gr(e);
  if (Yp(t)) return e;
}
function o1(e, t) {
  if (e === 'change') return t;
}
var Cv = !1;
if (rn) {
  var ea;
  if (rn) {
    var ta = 'oninput' in document;
    if (!ta) {
      var Kf = document.createElement('div');
      Kf.setAttribute('oninput', 'return;'),
        (ta = typeof Kf.oninput == 'function');
    }
    ea = ta;
  } else ea = !1;
  Cv = ea && (!document.documentMode || 9 < document.documentMode);
}
function Gf() {
  _o && (_o.detachEvent('onpropertychange', Rv), (Mo = _o = null));
}
function Rv(e) {
  if (e.propertyName === 'value' && bu(Mo)) {
    var t = [];
    Ov(t, Mo, e, Ks(e)), lv(r1, t);
  }
}
function i1(e, t, n) {
  e === 'focusin'
    ? (Gf(), (_o = t), (Mo = n), _o.attachEvent('onpropertychange', Rv))
    : e === 'focusout' && Gf();
}
function u1(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return bu(Mo);
}
function l1(e, t) {
  if (e === 'click') return bu(t);
}
function a1(e, t) {
  if (e === 'input' || e === 'change') return bu(t);
}
function s1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Lt = typeof Object.is == 'function' ? Object.is : s1;
function Do(e, t) {
  if (Lt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!za.call(t, o) || !Lt(e[o], t[o])) return !1;
  }
  return !0;
}
function Yf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xf(e, t) {
  var n = Yf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Yf(n);
  }
}
function Tv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tv(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Iv() {
  for (var e = window, t = Xi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xi(e.document);
  }
  return t;
}
function rc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function c1(e) {
  var t = Iv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && rc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Xf(n, i));
        var u = Xf(n, r);
        o &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var f1 = rn && 'documentMode' in document && 11 >= document.documentMode,
  mr = null,
  ns = null,
  Eo = null,
  rs = !1;
function Jf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  rs ||
    mr == null ||
    mr !== Xi(r) ||
    ((r = mr),
    'selectionStart' in r && rc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Eo && Do(Eo, r)) ||
      ((Eo = r),
      (r = ou(ns, 'onSelect')),
      0 < r.length &&
        ((t = new ec('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = mr))));
}
function gi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var yr = {
    animationend: gi('Animation', 'AnimationEnd'),
    animationiteration: gi('Animation', 'AnimationIteration'),
    animationstart: gi('Animation', 'AnimationStart'),
    transitionend: gi('Transition', 'TransitionEnd'),
  },
  na = {},
  jv = {};
rn &&
  ((jv = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete yr.animationend.animation,
    delete yr.animationiteration.animation,
    delete yr.animationstart.animation),
  'TransitionEvent' in window || delete yr.transitionend.transition);
function Fu(e) {
  if (na[e]) return na[e];
  if (!yr[e]) return e;
  var t = yr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jv) return (na[e] = t[n]);
  return e;
}
var Av = Fu('animationend'),
  Nv = Fu('animationiteration'),
  Mv = Fu('animationstart'),
  Dv = Fu('transitionend'),
  $v = new Map(),
  Zf =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Ln(e, t) {
  $v.set(e, t), nr(t, [e]);
}
for (var ra = 0; ra < Zf.length; ra++) {
  var oa = Zf[ra],
    d1 = oa.toLowerCase(),
    p1 = oa[0].toUpperCase() + oa.slice(1);
  Ln(d1, 'on' + p1);
}
Ln(Av, 'onAnimationEnd');
Ln(Nv, 'onAnimationIteration');
Ln(Mv, 'onAnimationStart');
Ln('dblclick', 'onDoubleClick');
Ln('focusin', 'onFocus');
Ln('focusout', 'onBlur');
Ln(Dv, 'onTransitionEnd');
Mr('onMouseEnter', ['mouseout', 'mouseover']);
Mr('onMouseLeave', ['mouseout', 'mouseover']);
Mr('onPointerEnter', ['pointerout', 'pointerover']);
Mr('onPointerLeave', ['pointerout', 'pointerover']);
nr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
nr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
nr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
nr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
nr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
nr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var mo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  v1 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(mo));
function ed(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), dg(r, t, void 0, e), (e.currentTarget = null);
}
function zv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var l = r[u],
            a = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          ed(o, l, s), (i = a);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((l = r[u]),
            (a = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          ed(o, l, s), (i = a);
        }
    }
  }
  if (Zi) throw ((e = Ja), (Zi = !1), (Ja = null), e);
}
function we(e, t) {
  var n = t[as];
  n === void 0 && (n = t[as] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Lv(t, e, 2, !1), n.add(r));
}
function ia(e, t, n) {
  var r = 0;
  t && (r |= 4), Lv(n, e, r, t);
}
var Si = '_reactListening' + Math.random().toString(36).slice(2);
function $o(e) {
  if (!e[Si]) {
    (e[Si] = !0),
      Vp.forEach(function (n) {
        n !== 'selectionchange' && (v1.has(n) || ia(n, !1, e), ia(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Si] || ((t[Si] = !0), ia('selectionchange', !1, t));
  }
}
function Lv(e, t, n, r) {
  switch (_v(t)) {
    case 1:
      var o = Rg;
      break;
    case 4:
      o = Tg;
      break;
    default:
      o = Js;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Xa ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ua(e, t, n, r, o) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var a = u.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = u.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            u = u.return;
          }
        for (; l !== null; ) {
          if (((u = Vn(l)), u === null)) return;
          if (((a = u.tag), a === 5 || a === 6)) {
            r = i = u;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  lv(function () {
    var s = i,
      c = Ks(n),
      p = [];
    e: {
      var d = $v.get(e);
      if (d !== void 0) {
        var m = ec,
          y = e;
        switch (e) {
          case 'keypress':
            if ($i(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = Bg;
            break;
          case 'focusin':
            (y = 'focus'), (m = Zl);
            break;
          case 'focusout':
            (y = 'blur'), (m = Zl);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = Zl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = qf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = Ag;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = Hg;
            break;
          case Av:
          case Nv:
          case Mv:
            m = Dg;
            break;
          case Dv:
            m = Gg;
            break;
          case 'scroll':
            m = Ig;
            break;
          case 'wheel':
            m = Xg;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = zg;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Bf;
        }
        var w = (t & 4) !== 0,
          x = !w && e === 'scroll',
          v = w ? (d !== null ? d + 'Capture' : null) : d;
        w = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var g = h.stateNode;
          if (
            (h.tag === 5 &&
              g !== null &&
              ((h = g),
              v !== null && ((g = Io(f, v)), g != null && w.push(zo(f, g, h)))),
            x)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((d = new m(d, y, null, n, c)), p.push({ event: d, listeners: w }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Ga &&
            (y = n.relatedTarget || n.fromElement) &&
            (Vn(y) || y[on]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = s),
              (y = y ? Vn(y) : null),
              y !== null &&
                ((x = rr(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = s)),
          m !== y)
        ) {
          if (
            ((w = qf),
            (g = 'onMouseLeave'),
            (v = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = Bf),
              (g = 'onPointerLeave'),
              (v = 'onPointerEnter'),
              (f = 'pointer')),
            (x = m == null ? d : gr(m)),
            (h = y == null ? d : gr(y)),
            (d = new w(g, f + 'leave', m, n, c)),
            (d.target = x),
            (d.relatedTarget = h),
            (g = null),
            Vn(c) === s &&
              ((w = new w(v, f + 'enter', y, n, c)),
              (w.target = h),
              (w.relatedTarget = x),
              (g = w)),
            (x = g),
            m && y)
          )
            t: {
              for (w = m, v = y, f = 0, h = w; h; h = sr(h)) f++;
              for (h = 0, g = v; g; g = sr(g)) h++;
              for (; 0 < f - h; ) (w = sr(w)), f--;
              for (; 0 < h - f; ) (v = sr(v)), h--;
              for (; f--; ) {
                if (w === v || (v !== null && w === v.alternate)) break t;
                (w = sr(w)), (v = sr(v));
              }
              w = null;
            }
          else w = null;
          m !== null && td(p, d, m, w, !1),
            y !== null && x !== null && td(p, x, y, w, !0);
        }
      }
      e: {
        if (
          ((d = s ? gr(s) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && d.type === 'file'))
        )
          var _ = o1;
        else if (Hf(d))
          if (Cv) _ = a1;
          else {
            _ = u1;
            var E = i1;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (_ = l1);
        if (_ && (_ = _(e, s))) {
          Ov(p, _, n, c);
          break e;
        }
        E && E(e, d, s),
          e === 'focusout' &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === 'number' &&
            Ba(d, 'number', d.value);
      }
      switch (((E = s ? gr(s) : window), e)) {
        case 'focusin':
          (Hf(E) || E.contentEditable === 'true') &&
            ((mr = E), (ns = s), (Eo = null));
          break;
        case 'focusout':
          Eo = ns = mr = null;
          break;
        case 'mousedown':
          rs = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (rs = !1), Jf(p, n, c);
          break;
        case 'selectionchange':
          if (f1) break;
        case 'keydown':
        case 'keyup':
          Jf(p, n, c);
      }
      var P;
      if (nc)
        e: {
          switch (e) {
            case 'compositionstart':
              var O = 'onCompositionStart';
              break e;
            case 'compositionend':
              O = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              O = 'onCompositionUpdate';
              break e;
          }
          O = void 0;
        }
      else
        hr
          ? kv(e, n) && (O = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
      O &&
        (xv &&
          n.locale !== 'ko' &&
          (hr || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && hr && (P = Ev())
            : ((wn = c),
              (Zs = 'value' in wn ? wn.value : wn.textContent),
              (hr = !0))),
        (E = ou(s, O)),
        0 < E.length &&
          ((O = new Qf(O, e, null, n, c)),
          p.push({ event: O, listeners: E }),
          P ? (O.data = P) : ((P = Pv(n)), P !== null && (O.data = P)))),
        (P = Zg ? e1(e, n) : t1(e, n)) &&
          ((s = ou(s, 'onBeforeInput')),
          0 < s.length &&
            ((c = new Qf('onBeforeInput', 'beforeinput', null, n, c)),
            p.push({ event: c, listeners: s }),
            (c.data = P)));
    }
    zv(p, t);
  });
}
function zo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ou(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Io(e, n)),
      i != null && r.unshift(zo(e, i, o)),
      (i = Io(e, t)),
      i != null && r.push(zo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function sr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function td(e, t, n, r, o) {
  for (var i = t._reactName, u = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      s = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      o
        ? ((a = Io(n, i)), a != null && u.unshift(zo(n, a, l)))
        : o || ((a = Io(n, i)), a != null && u.push(zo(n, a, l)))),
      (n = n.return);
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var h1 = /\r\n?/g,
  m1 = /\u0000|\uFFFD/g;
function nd(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      h1,
      `
`
    )
    .replace(m1, '');
}
function wi(e, t, n) {
  if (((t = nd(t)), nd(e) !== t && n)) throw Error($(425));
}
function iu() {}
var os = null,
  is = null;
function us(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ls = typeof setTimeout == 'function' ? setTimeout : void 0,
  y1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  rd = typeof Promise == 'function' ? Promise : void 0,
  g1 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof rd < 'u'
      ? function (e) {
          return rd.resolve(null).then(e).catch(S1);
        }
      : ls;
function S1(e) {
  setTimeout(function () {
    throw e;
  });
}
function la(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), No(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  No(t);
}
function On(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function od(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kr = Math.random().toString(36).slice(2),
  Bt = '__reactFiber$' + Kr,
  Lo = '__reactProps$' + Kr,
  on = '__reactContainer$' + Kr,
  as = '__reactEvents$' + Kr,
  w1 = '__reactListeners$' + Kr,
  _1 = '__reactHandles$' + Kr;
function Vn(e) {
  var t = e[Bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[on] || n[Bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = od(e); e !== null; ) {
          if ((n = e[Bt])) return n;
          e = od(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ni(e) {
  return (
    (e = e[Bt] || e[on]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function Uu(e) {
  return e[Lo] || null;
}
var ss = [],
  Sr = -1;
function bn(e) {
  return { current: e };
}
function _e(e) {
  0 > Sr || ((e.current = ss[Sr]), (ss[Sr] = null), Sr--);
}
function Se(e, t) {
  Sr++, (ss[Sr] = e.current), (e.current = t);
}
var Dn = {},
  et = bn(Dn),
  at = bn(!1),
  Xn = Dn;
function Dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function st(e) {
  return (e = e.childContextTypes), e != null;
}
function uu() {
  _e(at), _e(et);
}
function id(e, t, n) {
  if (et.current !== Dn) throw Error($(168));
  Se(et, t), Se(at, n);
}
function bv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error($(108, ig(e) || 'Unknown', o));
  return Re({}, n, r);
}
function lu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dn),
    (Xn = et.current),
    Se(et, e),
    Se(at, at.current),
    !0
  );
}
function ud(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n
    ? ((e = bv(e, t, Xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      _e(at),
      _e(et),
      Se(et, e))
    : _e(at),
    Se(at, n);
}
var Jt = null,
  qu = !1,
  aa = !1;
function Fv(e) {
  Jt === null ? (Jt = [e]) : Jt.push(e);
}
function E1(e) {
  (qu = !0), Fv(e);
}
function Fn() {
  if (!aa && Jt !== null) {
    aa = !0;
    var e = 0,
      t = ve;
    try {
      var n = Jt;
      for (ve = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Jt = null), (qu = !1);
    } catch (o) {
      throw (Jt !== null && (Jt = Jt.slice(e + 1)), fv(Gs, Fn), o);
    } finally {
      (ve = t), (aa = !1);
    }
  }
  return null;
}
var wr = [],
  _r = 0,
  au = null,
  su = 0,
  kt = [],
  Pt = 0,
  Jn = null,
  Zt = 1,
  en = '';
function Qn(e, t) {
  (wr[_r++] = su), (wr[_r++] = au), (au = e), (su = t);
}
function Uv(e, t, n) {
  (kt[Pt++] = Zt), (kt[Pt++] = en), (kt[Pt++] = Jn), (Jn = e);
  var r = Zt;
  e = en;
  var o = 32 - $t(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - $t(t) + o;
  if (30 < i) {
    var u = o - (o % 5);
    (i = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (o -= u),
      (Zt = (1 << (32 - $t(t) + o)) | (n << o) | r),
      (en = i + e);
  } else (Zt = (1 << i) | (n << o) | r), (en = e);
}
function oc(e) {
  e.return !== null && (Qn(e, 1), Uv(e, 1, 0));
}
function ic(e) {
  for (; e === au; )
    (au = wr[--_r]), (wr[_r] = null), (su = wr[--_r]), (wr[_r] = null);
  for (; e === Jn; )
    (Jn = kt[--Pt]),
      (kt[Pt] = null),
      (en = kt[--Pt]),
      (kt[Pt] = null),
      (Zt = kt[--Pt]),
      (kt[Pt] = null);
}
var yt = null,
  mt = null,
  ke = !1,
  Dt = null;
function qv(e, t) {
  var n = Ot(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ld(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (yt = e), (mt = On(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (yt = e), (mt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jn !== null ? { id: Zt, overflow: en } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (yt = e),
            (mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function cs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fs(e) {
  if (ke) {
    var t = mt;
    if (t) {
      var n = t;
      if (!ld(e, t)) {
        if (cs(e)) throw Error($(418));
        t = On(n.nextSibling);
        var r = yt;
        t && ld(e, t)
          ? qv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (yt = e));
      }
    } else {
      if (cs(e)) throw Error($(418));
      (e.flags = (e.flags & -4097) | 2), (ke = !1), (yt = e);
    }
  }
}
function ad(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  yt = e;
}
function _i(e) {
  if (e !== yt) return !1;
  if (!ke) return ad(e), (ke = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !us(e.type, e.memoizedProps))),
    t && (t = mt))
  ) {
    if (cs(e)) throw (Qv(), Error($(418)));
    for (; t; ) qv(e, t), (t = On(t.nextSibling));
  }
  if ((ad(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              mt = On(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      mt = null;
    }
  } else mt = yt ? On(e.stateNode.nextSibling) : null;
  return !0;
}
function Qv() {
  for (var e = mt; e; ) e = On(e.nextSibling);
}
function $r() {
  (mt = yt = null), (ke = !1);
}
function uc(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
var x1 = sn.ReactCurrentBatchConfig;
function Nt(e, t) {
  if (e && e.defaultProps) {
    (t = Re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var cu = bn(null),
  fu = null,
  Er = null,
  lc = null;
function ac() {
  lc = Er = fu = null;
}
function sc(e) {
  var t = cu.current;
  _e(cu), (e._currentValue = t);
}
function ds(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Tr(e, t) {
  (fu = e),
    (lc = Er = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (lt = !0), (e.firstContext = null));
}
function Rt(e) {
  var t = e._currentValue;
  if (lc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Er === null)) {
      if (fu === null) throw Error($(308));
      (Er = e), (fu.dependencies = { lanes: 0, firstContext: e });
    } else Er = Er.next = e;
  return t;
}
var Wn = null;
function cc(e) {
  Wn === null ? (Wn = [e]) : Wn.push(e);
}
function Bv(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), cc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    un(e, r)
  );
}
function un(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var hn = !1;
function fc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Vv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function nn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (fe & 2) !== 0)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      un(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), cc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    un(e, n)
  );
}
function zi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ys(e, n);
  }
}
function sd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = u) : (i = i.next = u), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function du(e, t, n, r) {
  var o = e.updateQueue;
  hn = !1;
  var i = o.firstBaseUpdate,
    u = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      s = a.next;
    (a.next = null), u === null ? (i = s) : (u.next = s), (u = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== u &&
        (l === null ? (c.firstBaseUpdate = s) : (l.next = s),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    (u = 0), (c = s = a = null), (l = i);
    do {
      var d = l.lane,
        m = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            w = l;
          switch (((d = t), (m = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == 'function')) {
                p = y.call(m, p, d);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (d = typeof y == 'function' ? y.call(m, p, d) : y),
                d == null)
              )
                break e;
              p = Re({}, p, d);
              break e;
            case 2:
              hn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [l]) : d.push(l));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((s = c = m), (a = p)) : (c = c.next = m),
          (u |= d);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = s),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (u |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (er |= u), (e.lanes = u), (e.memoizedState = p);
  }
}
function cd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error($(191, o));
        o.call(r);
      }
    }
}
var Wv = new Bp.Component().refs;
function ps(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? rr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      o = Tn(e),
      i = nn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Cn(e, i, o)),
      t !== null && (zt(t, e, o, r), zi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      o = Tn(e),
      i = nn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Cn(e, i, o)),
      t !== null && (zt(t, e, o, r), zi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = nt(),
      r = Tn(e),
      o = nn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Cn(e, o, r)),
      t !== null && (zt(t, e, r, n), zi(t, e, r));
  },
};
function fd(e, t, n, r, o, i, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Do(n, r) || !Do(o, i)
      : !0
  );
}
function Hv(e, t, n) {
  var r = !1,
    o = Dn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Rt(i))
      : ((o = st(t) ? Xn : et.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Dr(e, o) : Dn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Qu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function dd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Qu.enqueueReplaceState(t, t.state, null);
}
function vs(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Wv), fc(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Rt(i))
    : ((i = st(t) ? Xn : et.current), (o.context = Dr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (ps(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Qu.enqueueReplaceState(o, o.state, null),
      du(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function ao(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (u) {
            var l = o.refs;
            l === Wv && (l = o.refs = {}),
              u === null ? delete l[i] : (l[i] = u);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function Ei(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      $(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function pd(e) {
  var t = e._init;
  return t(e._payload);
}
function Kv(e) {
  function t(v, f) {
    if (e) {
      var h = v.deletions;
      h === null ? ((v.deletions = [f]), (v.flags |= 16)) : h.push(f);
    }
  }
  function n(v, f) {
    if (!e) return null;
    for (; f !== null; ) t(v, f), (f = f.sibling);
    return null;
  }
  function r(v, f) {
    for (v = new Map(); f !== null; )
      f.key !== null ? v.set(f.key, f) : v.set(f.index, f), (f = f.sibling);
    return v;
  }
  function o(v, f) {
    return (v = In(v, f)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, f, h) {
    return (
      (v.index = h),
      e
        ? ((h = v.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((v.flags |= 2), f) : h)
            : ((v.flags |= 2), f))
        : ((v.flags |= 1048576), f)
    );
  }
  function u(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function l(v, f, h, g) {
    return f === null || f.tag !== 6
      ? ((f = ha(h, v.mode, g)), (f.return = v), f)
      : ((f = o(f, h)), (f.return = v), f);
  }
  function a(v, f, h, g) {
    var _ = h.type;
    return _ === vr
      ? c(v, f, h.props.children, g, h.key)
      : f !== null &&
        (f.elementType === _ ||
          (typeof _ == 'object' &&
            _ !== null &&
            _.$$typeof === vn &&
            pd(_) === f.type))
      ? ((g = o(f, h.props)), (g.ref = ao(v, f, h)), (g.return = v), g)
      : ((g = Qi(h.type, h.key, h.props, null, v.mode, g)),
        (g.ref = ao(v, f, h)),
        (g.return = v),
        g);
  }
  function s(v, f, h, g) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = ma(h, v.mode, g)), (f.return = v), f)
      : ((f = o(f, h.children || [])), (f.return = v), f);
  }
  function c(v, f, h, g, _) {
    return f === null || f.tag !== 7
      ? ((f = Yn(h, v.mode, g, _)), (f.return = v), f)
      : ((f = o(f, h)), (f.return = v), f);
  }
  function p(v, f, h) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = ha('' + f, v.mode, h)), (f.return = v), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case fi:
          return (
            (h = Qi(f.type, f.key, f.props, null, v.mode, h)),
            (h.ref = ao(v, null, f)),
            (h.return = v),
            h
          );
        case pr:
          return (f = ma(f, v.mode, h)), (f.return = v), f;
        case vn:
          var g = f._init;
          return p(v, g(f._payload), h);
      }
      if (vo(f) || ro(f))
        return (f = Yn(f, v.mode, h, null)), (f.return = v), f;
      Ei(v, f);
    }
    return null;
  }
  function d(v, f, h, g) {
    var _ = f !== null ? f.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return _ !== null ? null : l(v, f, '' + h, g);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case fi:
          return h.key === _ ? a(v, f, h, g) : null;
        case pr:
          return h.key === _ ? s(v, f, h, g) : null;
        case vn:
          return (_ = h._init), d(v, f, _(h._payload), g);
      }
      if (vo(h) || ro(h)) return _ !== null ? null : c(v, f, h, g, null);
      Ei(v, h);
    }
    return null;
  }
  function m(v, f, h, g, _) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (v = v.get(h) || null), l(f, v, '' + g, _);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case fi:
          return (v = v.get(g.key === null ? h : g.key) || null), a(f, v, g, _);
        case pr:
          return (v = v.get(g.key === null ? h : g.key) || null), s(f, v, g, _);
        case vn:
          var E = g._init;
          return m(v, f, h, E(g._payload), _);
      }
      if (vo(g) || ro(g)) return (v = v.get(h) || null), c(f, v, g, _, null);
      Ei(f, g);
    }
    return null;
  }
  function y(v, f, h, g) {
    for (
      var _ = null, E = null, P = f, O = (f = 0), T = null;
      P !== null && O < h.length;
      O++
    ) {
      P.index > O ? ((T = P), (P = null)) : (T = P.sibling);
      var R = d(v, P, h[O], g);
      if (R === null) {
        P === null && (P = T);
        break;
      }
      e && P && R.alternate === null && t(v, P),
        (f = i(R, f, O)),
        E === null ? (_ = R) : (E.sibling = R),
        (E = R),
        (P = T);
    }
    if (O === h.length) return n(v, P), ke && Qn(v, O), _;
    if (P === null) {
      for (; O < h.length; O++)
        (P = p(v, h[O], g)),
          P !== null &&
            ((f = i(P, f, O)), E === null ? (_ = P) : (E.sibling = P), (E = P));
      return ke && Qn(v, O), _;
    }
    for (P = r(v, P); O < h.length; O++)
      (T = m(P, v, O, h[O], g)),
        T !== null &&
          (e && T.alternate !== null && P.delete(T.key === null ? O : T.key),
          (f = i(T, f, O)),
          E === null ? (_ = T) : (E.sibling = T),
          (E = T));
    return (
      e &&
        P.forEach(function (M) {
          return t(v, M);
        }),
      ke && Qn(v, O),
      _
    );
  }
  function w(v, f, h, g) {
    var _ = ro(h);
    if (typeof _ != 'function') throw Error($(150));
    if (((h = _.call(h)), h == null)) throw Error($(151));
    for (
      var E = (_ = null), P = f, O = (f = 0), T = null, R = h.next();
      P !== null && !R.done;
      O++, R = h.next()
    ) {
      P.index > O ? ((T = P), (P = null)) : (T = P.sibling);
      var M = d(v, P, R.value, g);
      if (M === null) {
        P === null && (P = T);
        break;
      }
      e && P && M.alternate === null && t(v, P),
        (f = i(M, f, O)),
        E === null ? (_ = M) : (E.sibling = M),
        (E = M),
        (P = T);
    }
    if (R.done) return n(v, P), ke && Qn(v, O), _;
    if (P === null) {
      for (; !R.done; O++, R = h.next())
        (R = p(v, R.value, g)),
          R !== null &&
            ((f = i(R, f, O)), E === null ? (_ = R) : (E.sibling = R), (E = R));
      return ke && Qn(v, O), _;
    }
    for (P = r(v, P); !R.done; O++, R = h.next())
      (R = m(P, v, O, R.value, g)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? O : R.key),
          (f = i(R, f, O)),
          E === null ? (_ = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        P.forEach(function (z) {
          return t(v, z);
        }),
      ke && Qn(v, O),
      _
    );
  }
  function x(v, f, h, g) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === vr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case fi:
          e: {
            for (var _ = h.key, E = f; E !== null; ) {
              if (E.key === _) {
                if (((_ = h.type), _ === vr)) {
                  if (E.tag === 7) {
                    n(v, E.sibling),
                      (f = o(E, h.props.children)),
                      (f.return = v),
                      (v = f);
                    break e;
                  }
                } else if (
                  E.elementType === _ ||
                  (typeof _ == 'object' &&
                    _ !== null &&
                    _.$$typeof === vn &&
                    pd(_) === E.type)
                ) {
                  n(v, E.sibling),
                    (f = o(E, h.props)),
                    (f.ref = ao(v, E, h)),
                    (f.return = v),
                    (v = f);
                  break e;
                }
                n(v, E);
                break;
              } else t(v, E);
              E = E.sibling;
            }
            h.type === vr
              ? ((f = Yn(h.props.children, v.mode, g, h.key)),
                (f.return = v),
                (v = f))
              : ((g = Qi(h.type, h.key, h.props, null, v.mode, g)),
                (g.ref = ao(v, f, h)),
                (g.return = v),
                (v = g));
          }
          return u(v);
        case pr:
          e: {
            for (E = h.key; f !== null; ) {
              if (f.key === E)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(v, f.sibling),
                    (f = o(f, h.children || [])),
                    (f.return = v),
                    (v = f);
                  break e;
                } else {
                  n(v, f);
                  break;
                }
              else t(v, f);
              f = f.sibling;
            }
            (f = ma(h, v.mode, g)), (f.return = v), (v = f);
          }
          return u(v);
        case vn:
          return (E = h._init), x(v, f, E(h._payload), g);
      }
      if (vo(h)) return y(v, f, h, g);
      if (ro(h)) return w(v, f, h, g);
      Ei(v, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        f !== null && f.tag === 6
          ? (n(v, f.sibling), (f = o(f, h)), (f.return = v), (v = f))
          : (n(v, f), (f = ha(h, v.mode, g)), (f.return = v), (v = f)),
        u(v))
      : n(v, f);
  }
  return x;
}
var zr = Kv(!0),
  Gv = Kv(!1),
  ri = {},
  Wt = bn(ri),
  bo = bn(ri),
  Fo = bn(ri);
function Hn(e) {
  if (e === ri) throw Error($(174));
  return e;
}
function dc(e, t) {
  switch ((Se(Fo, t), Se(bo, e), Se(Wt, ri), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wa(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Wa(t, e));
  }
  _e(Wt), Se(Wt, t);
}
function Lr() {
  _e(Wt), _e(bo), _e(Fo);
}
function Yv(e) {
  Hn(Fo.current);
  var t = Hn(Wt.current),
    n = Wa(t, e.type);
  t !== n && (Se(bo, e), Se(Wt, n));
}
function pc(e) {
  bo.current === e && (_e(Wt), _e(bo));
}
var Oe = bn(0);
function pu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var sa = [];
function vc() {
  for (var e = 0; e < sa.length; e++)
    sa[e]._workInProgressVersionPrimary = null;
  sa.length = 0;
}
var Li = sn.ReactCurrentDispatcher,
  ca = sn.ReactCurrentBatchConfig,
  Zn = 0,
  Ce = null,
  De = null,
  Ue = null,
  vu = !1,
  xo = !1,
  Uo = 0,
  k1 = 0;
function Ye() {
  throw Error($(321));
}
function hc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Lt(e[n], t[n])) return !1;
  return !0;
}
function mc(e, t, n, r, o, i) {
  if (
    ((Zn = i),
    (Ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Li.current = e === null || e.memoizedState === null ? R1 : T1),
    (e = n(r, o)),
    xo)
  ) {
    i = 0;
    do {
      if (((xo = !1), (Uo = 0), 25 <= i)) throw Error($(301));
      (i += 1),
        (Ue = De = null),
        (t.updateQueue = null),
        (Li.current = I1),
        (e = n(r, o));
    } while (xo);
  }
  if (
    ((Li.current = hu),
    (t = De !== null && De.next !== null),
    (Zn = 0),
    (Ue = De = Ce = null),
    (vu = !1),
    t)
  )
    throw Error($(300));
  return e;
}
function yc() {
  var e = Uo !== 0;
  return (Uo = 0), e;
}
function Qt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ue === null ? (Ce.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue;
}
function Tt() {
  if (De === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = De.next;
  var t = Ue === null ? Ce.memoizedState : Ue.next;
  if (t !== null) (Ue = t), (De = e);
  else {
    if (e === null) throw Error($(310));
    (De = e),
      (e = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null,
      }),
      Ue === null ? (Ce.memoizedState = Ue = e) : (Ue = Ue.next = e);
  }
  return Ue;
}
function qo(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function fa(e) {
  var t = Tt(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = De,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var u = o.next;
      (o.next = i.next), (i.next = u);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (u = null),
      a = null,
      s = i;
    do {
      var c = s.lane;
      if ((Zn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (u = r)) : (a = a.next = p),
          (Ce.lanes |= c),
          (er |= c);
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? (u = r) : (a.next = l),
      Lt(r, t.memoizedState) || (lt = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ce.lanes |= i), (er |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function da(e) {
  var t = Tt(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var u = (o = o.next);
    do (i = e(i, u.action)), (u = u.next);
    while (u !== o);
    Lt(i, t.memoizedState) || (lt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Xv() {}
function Jv(e, t) {
  var n = Ce,
    r = Tt(),
    o = t(),
    i = !Lt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (lt = !0)),
    (r = r.queue),
    gc(th.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ue !== null && Ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qo(9, eh.bind(null, n, r, o, t), void 0, null),
      Qe === null)
    )
      throw Error($(349));
    (Zn & 30) !== 0 || Zv(n, t, o);
  }
  return o;
}
function Zv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function eh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), nh(t) && rh(e);
}
function th(e, t, n) {
  return n(function () {
    nh(t) && rh(e);
  });
}
function nh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Lt(e, n);
  } catch {
    return !0;
  }
}
function rh(e) {
  var t = un(e, 1);
  t !== null && zt(t, e, 1, -1);
}
function vd(e) {
  var t = Qt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = C1.bind(null, Ce, e)),
    [t.memoizedState, e]
  );
}
function Qo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function oh() {
  return Tt().memoizedState;
}
function bi(e, t, n, r) {
  var o = Qt();
  (Ce.flags |= e),
    (o.memoizedState = Qo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bu(e, t, n, r) {
  var o = Tt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (De !== null) {
    var u = De.memoizedState;
    if (((i = u.destroy), r !== null && hc(r, u.deps))) {
      o.memoizedState = Qo(t, n, i, r);
      return;
    }
  }
  (Ce.flags |= e), (o.memoizedState = Qo(1 | t, n, i, r));
}
function hd(e, t) {
  return bi(8390656, 8, e, t);
}
function gc(e, t) {
  return Bu(2048, 8, e, t);
}
function ih(e, t) {
  return Bu(4, 2, e, t);
}
function uh(e, t) {
  return Bu(4, 4, e, t);
}
function lh(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ah(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bu(4, 4, lh.bind(null, t, e), n)
  );
}
function Sc() {}
function sh(e, t) {
  var n = Tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ch(e, t) {
  var n = Tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function fh(e, t, n) {
  return (Zn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = n))
    : (Lt(n, t) || ((n = vv()), (Ce.lanes |= n), (er |= n), (e.baseState = !0)),
      t);
}
function P1(e, t) {
  var n = ve;
  (ve = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ca.transition;
  ca.transition = {};
  try {
    e(!1), t();
  } finally {
    (ve = n), (ca.transition = r);
  }
}
function dh() {
  return Tt().memoizedState;
}
function O1(e, t, n) {
  var r = Tn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ph(e))
  )
    vh(t, n);
  else if (((n = Bv(e, t, n, r)), n !== null)) {
    var o = nt();
    zt(n, e, r, o), hh(n, t, r);
  }
}
function C1(e, t, n) {
  var r = Tn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ph(e)) vh(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var u = t.lastRenderedState,
          l = i(u, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Lt(l, u))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), cc(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bv(e, t, o, r)),
      n !== null && ((o = nt()), zt(n, e, r, o), hh(n, t, r));
  }
}
function ph(e) {
  var t = e.alternate;
  return e === Ce || (t !== null && t === Ce);
}
function vh(e, t) {
  xo = vu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function hh(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ys(e, n);
  }
}
var hu = {
    readContext: Rt,
    useCallback: Ye,
    useContext: Ye,
    useEffect: Ye,
    useImperativeHandle: Ye,
    useInsertionEffect: Ye,
    useLayoutEffect: Ye,
    useMemo: Ye,
    useReducer: Ye,
    useRef: Ye,
    useState: Ye,
    useDebugValue: Ye,
    useDeferredValue: Ye,
    useTransition: Ye,
    useMutableSource: Ye,
    useSyncExternalStore: Ye,
    useId: Ye,
    unstable_isNewReconciler: !1,
  },
  R1 = {
    readContext: Rt,
    useCallback: function (e, t) {
      return (Qt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Rt,
    useEffect: hd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        bi(4194308, 4, lh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return bi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return bi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Qt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = O1.bind(null, Ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: vd,
    useDebugValue: Sc,
    useDeferredValue: function (e) {
      return (Qt().memoizedState = e);
    },
    useTransition: function () {
      var e = vd(!1),
        t = e[0];
      return (e = P1.bind(null, e[1])), (Qt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ce,
        o = Qt();
      if (ke) {
        if (n === void 0) throw Error($(407));
        n = n();
      } else {
        if (((n = t()), Qe === null)) throw Error($(349));
        (Zn & 30) !== 0 || Zv(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        hd(th.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qo(9, eh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qt(),
        t = Qe.identifierPrefix;
      if (ke) {
        var n = en,
          r = Zt;
        (n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Uo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = k1++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  T1 = {
    readContext: Rt,
    useCallback: sh,
    useContext: Rt,
    useEffect: gc,
    useImperativeHandle: ah,
    useInsertionEffect: ih,
    useLayoutEffect: uh,
    useMemo: ch,
    useReducer: fa,
    useRef: oh,
    useState: function () {
      return fa(qo);
    },
    useDebugValue: Sc,
    useDeferredValue: function (e) {
      var t = Tt();
      return fh(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = fa(qo)[0],
        t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Xv,
    useSyncExternalStore: Jv,
    useId: dh,
    unstable_isNewReconciler: !1,
  },
  I1 = {
    readContext: Rt,
    useCallback: sh,
    useContext: Rt,
    useEffect: gc,
    useImperativeHandle: ah,
    useInsertionEffect: ih,
    useLayoutEffect: uh,
    useMemo: ch,
    useReducer: da,
    useRef: oh,
    useState: function () {
      return da(qo);
    },
    useDebugValue: Sc,
    useDeferredValue: function (e) {
      var t = Tt();
      return De === null ? (t.memoizedState = e) : fh(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = da(qo)[0],
        t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Xv,
    useSyncExternalStore: Jv,
    useId: dh,
    unstable_isNewReconciler: !1,
  };
function br(e, t) {
  try {
    var n = '',
      r = t;
    do (n += og(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function pa(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function hs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var j1 = typeof WeakMap == 'function' ? WeakMap : Map;
function mh(e, t, n) {
  (n = nn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yu || ((yu = !0), (Ps = r)), hs(e, t);
    }),
    n
  );
}
function yh(e, t, n) {
  (n = nn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        hs(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        hs(e, t),
          typeof r != 'function' &&
            (Rn === null ? (Rn = new Set([this])) : Rn.add(this));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : '',
        });
      }),
    n
  );
}
function md(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new j1();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = V1.bind(null, e, t, n)), t.then(e, e));
}
function yd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gd(e, t, n, r, o) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = nn(-1, 1)), (t.tag = 2), Cn(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = o), e);
}
var A1 = sn.ReactCurrentOwner,
  lt = !1;
function tt(e, t, n, r) {
  t.child = e === null ? Gv(t, null, n, r) : zr(t, e.child, n, r);
}
function Sd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Tr(t, o),
    (r = mc(e, t, n, r, i, o)),
    (n = yc()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ln(e, t, o))
      : (ke && n && oc(t), (t.flags |= 1), tt(e, t, r, o), t.child)
  );
}
function wd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Cc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), gh(e, t, i, r, o))
      : ((e = Qi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & o) === 0)) {
    var u = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Do), n(u, r) && e.ref === t.ref)
    )
      return ln(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = In(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Do(i, r) && e.ref === t.ref)
      if (((lt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (lt = !0);
      else return (t.lanes = e.lanes), ln(e, t, o);
  }
  return ms(e, t, n, r, o);
}
function Sh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Se(kr, ht),
        (ht |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Se(kr, ht),
          (ht |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Se(kr, ht),
        (ht |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Se(kr, ht),
      (ht |= r);
  return tt(e, t, o, n), t.child;
}
function wh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ms(e, t, n, r, o) {
  var i = st(n) ? Xn : et.current;
  return (
    (i = Dr(t, i)),
    Tr(t, o),
    (n = mc(e, t, n, r, i, o)),
    (r = yc()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ln(e, t, o))
      : (ke && r && oc(t), (t.flags |= 1), tt(e, t, n, o), t.child)
  );
}
function _d(e, t, n, r, o) {
  if (st(n)) {
    var i = !0;
    lu(t);
  } else i = !1;
  if ((Tr(t, o), t.stateNode === null))
    Fi(e, t), Hv(t, n, r), vs(t, n, r, o), (r = !0);
  else if (e === null) {
    var u = t.stateNode,
      l = t.memoizedProps;
    u.props = l;
    var a = u.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = Rt(s))
      : ((s = st(n) ? Xn : et.current), (s = Dr(t, s)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== s) && dd(t, u, r, s)),
      (hn = !1);
    var d = t.memoizedState;
    (u.state = d),
      du(t, r, u, o),
      (a = t.memoizedState),
      l !== r || d !== a || at.current || hn
        ? (typeof c == 'function' && (ps(t, n, c, r), (a = t.memoizedState)),
          (l = hn || fd(t, n, l, r, d, a, s))
            ? (p ||
                (typeof u.UNSAFE_componentWillMount != 'function' &&
                  typeof u.componentWillMount != 'function') ||
                (typeof u.componentWillMount == 'function' &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == 'function' &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (u.props = r),
          (u.state = a),
          (u.context = s),
          (r = l))
        : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (u = t.stateNode),
      Vv(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : Nt(t.type, l)),
      (u.props = s),
      (p = t.pendingProps),
      (d = u.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Rt(a))
        : ((a = st(n) ? Xn : et.current), (a = Dr(t, a)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == 'function' ||
      typeof u.getSnapshotBeforeUpdate == 'function') ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((l !== p || d !== a) && dd(t, u, r, a)),
      (hn = !1),
      (d = t.memoizedState),
      (u.state = d),
      du(t, r, u, o);
    var y = t.memoizedState;
    l !== p || d !== y || at.current || hn
      ? (typeof m == 'function' && (ps(t, n, m, r), (y = t.memoizedState)),
        (s = hn || fd(t, n, s, r, d, y, a) || !1)
          ? (c ||
              (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                typeof u.componentWillUpdate != 'function') ||
              (typeof u.componentWillUpdate == 'function' &&
                u.componentWillUpdate(r, y, a),
              typeof u.UNSAFE_componentWillUpdate == 'function' &&
                u.UNSAFE_componentWillUpdate(r, y, a)),
            typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (u.props = r),
        (u.state = y),
        (u.context = a),
        (r = s))
      : (typeof u.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ys(e, t, n, r, i, o);
}
function ys(e, t, n, r, o, i) {
  wh(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return o && ud(t, n, !1), ln(e, t, i);
  (r = t.stateNode), (A1.current = t);
  var l =
    u && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = zr(t, e.child, null, i)), (t.child = zr(t, null, l, i)))
      : tt(e, t, l, i),
    (t.memoizedState = r.state),
    o && ud(t, n, !0),
    t.child
  );
}
function _h(e) {
  var t = e.stateNode;
  t.pendingContext
    ? id(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && id(e, t.context, !1),
    dc(e, t.containerInfo);
}
function Ed(e, t, n, r, o) {
  return $r(), uc(o), (t.flags |= 256), tt(e, t, n, r), t.child;
}
var gs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ss(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Eh(e, t, n) {
  var r = t.pendingProps,
    o = Oe.current,
    i = !1,
    u = (t.flags & 128) !== 0,
    l;
  if (
    ((l = u) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Se(Oe, o & 1),
    e === null)
  )
    return (
      fs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === '$!'
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((u = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (u = { mode: 'hidden', children: u }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = u))
                : (i = Hu(u, r, 0, null)),
              (e = Yn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ss(n)),
              (t.memoizedState = gs),
              e)
            : wc(t, u))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return N1(e, t, u, r, l, o, n);
  if (i) {
    (i = r.fallback), (u = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      (u & 1) === 0 && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = In(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = In(l, i)) : ((i = Yn(i, u, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? Ss(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (i.memoizedState = u),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = gs),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = In(i, { mode: 'visible', children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function wc(e, t) {
  return (
    (t = Hu({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function xi(e, t, n, r) {
  return (
    r !== null && uc(r),
    zr(t, e.child, null, n),
    (e = wc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function N1(e, t, n, r, o, i, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pa(Error($(422)))), xi(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Hu({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Yn(i, o, u, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        (t.mode & 1) !== 0 && zr(t, e.child, null, u),
        (t.child.memoizedState = Ss(u)),
        (t.memoizedState = gs),
        i);
  if ((t.mode & 1) === 0) return xi(e, t, u, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error($(419))), (r = pa(i, r, void 0)), xi(e, t, u, r);
  }
  if (((l = (u & e.childLanes) !== 0), lt || l)) {
    if (((r = Qe), r !== null)) {
      switch (u & -u) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = (o & (r.suspendedLanes | u)) !== 0 ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), un(e, o), zt(r, e, o, -1));
    }
    return Oc(), (r = pa(Error($(421)))), xi(e, t, u, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = W1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (mt = On(o.nextSibling)),
      (yt = t),
      (ke = !0),
      (Dt = null),
      e !== null &&
        ((kt[Pt++] = Zt),
        (kt[Pt++] = en),
        (kt[Pt++] = Jn),
        (Zt = e.id),
        (en = e.overflow),
        (Jn = t)),
      (t = wc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ds(e.return, t, n);
}
function va(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function xh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((tt(e, t, r.children, n), (r = Oe.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xd(e, n, t);
        else if (e.tag === 19) xd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Se(Oe, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && pu(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          va(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && pu(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        va(t, !0, n, null, i);
        break;
      case 'together':
        va(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fi(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ln(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (er |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (
      e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = In(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function M1(e, t, n) {
  switch (t.tag) {
    case 3:
      _h(t), $r();
      break;
    case 5:
      Yv(t);
      break;
    case 1:
      st(t.type) && lu(t);
      break;
    case 4:
      dc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Se(cu, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Se(Oe, Oe.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Eh(e, t, n)
          : (Se(Oe, Oe.current & 1),
            (e = ln(e, t, n)),
            e !== null ? e.sibling : null);
      Se(Oe, Oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return xh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Se(Oe, Oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Sh(e, t, n);
  }
  return ln(e, t, n);
}
var kh, ws, Ph, Oh;
kh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ws = function () {};
Ph = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Hn(Wt.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = qa(e, o)), (r = qa(e, r)), (i = []);
        break;
      case 'select':
        (o = Re({}, o, { value: void 0 })),
          (r = Re({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Va(e, o)), (r = Va(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = iu);
    }
    Ha(n, r);
    var u;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === 'style') {
          var l = o[s];
          for (u in l) l.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (Ro.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((l = o != null ? o[s] : void 0),
        r.hasOwnProperty(s) && a !== l && (a != null || l != null))
      )
        if (s === 'style')
          if (l) {
            for (u in l)
              !l.hasOwnProperty(u) ||
                (a && a.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ''));
            for (u in a)
              a.hasOwnProperty(u) &&
                l[u] !== a[u] &&
                (n || (n = {}), (n[u] = a[u]));
          } else n || (i || (i = []), i.push(s, n)), (n = a);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(s, a))
            : s === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (i = i || []).push(s, '' + a)
            : s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              (Ro.hasOwnProperty(s)
                ? (a != null && s === 'onScroll' && we('scroll', e),
                  i || l === a || (i = []))
                : (i = i || []).push(s, a));
    }
    n && (i = i || []).push('style', n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Oh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function so(e, t) {
  if (!ke)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function D1(e, t, n) {
  var r = t.pendingProps;
  switch ((ic(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Xe(t), null;
    case 1:
      return st(t.type) && uu(), Xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Lr(),
        _e(at),
        _e(et),
        vc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_i(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), Dt !== null && (Rs(Dt), (Dt = null)))),
        ws(e, t),
        Xe(t),
        null
      );
    case 5:
      pc(t);
      var o = Hn(Fo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ph(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return Xe(t), null;
        }
        if (((e = Hn(Wt.current)), _i(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Bt] = t), (r[Lo] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              we('cancel', r), we('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              we('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < mo.length; o++) we(mo[o], r);
              break;
            case 'source':
              we('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              we('error', r), we('load', r);
              break;
            case 'details':
              we('toggle', r);
              break;
            case 'input':
              Af(r, i), we('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                we('invalid', r);
              break;
            case 'textarea':
              Mf(r, i), we('invalid', r);
          }
          Ha(n, i), (o = null);
          for (var u in i)
            if (i.hasOwnProperty(u)) {
              var l = i[u];
              u === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      wi(r.textContent, l, e),
                    (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      wi(r.textContent, l, e),
                    (o = ['children', '' + l]))
                : Ro.hasOwnProperty(u) &&
                  l != null &&
                  u === 'onScroll' &&
                  we('scroll', r);
            }
          switch (n) {
            case 'input':
              di(r), Nf(r, i, !0);
              break;
            case 'textarea':
              di(r), Df(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = iu);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (u = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Zp(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = u.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === 'select' &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[Bt] = t),
            (e[Lo] = r),
            kh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((u = Ka(n, r)), n)) {
              case 'dialog':
                we('cancel', e), we('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                we('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < mo.length; o++) we(mo[o], e);
                o = r;
                break;
              case 'source':
                we('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                we('error', e), we('load', e), (o = r);
                break;
              case 'details':
                we('toggle', e), (o = r);
                break;
              case 'input':
                Af(e, r), (o = qa(e, r)), we('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Re({}, r, { value: void 0 })),
                  we('invalid', e);
                break;
              case 'textarea':
                Mf(e, r), (o = Va(e, r)), we('invalid', e);
                break;
              default:
                o = r;
            }
            Ha(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === 'style'
                  ? nv(e, a)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && ev(e, a))
                  : i === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && To(e, a)
                    : typeof a == 'number' && To(e, '' + a)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Ro.hasOwnProperty(i)
                      ? a != null && i === 'onScroll' && we('scroll', e)
                      : a != null && Bs(e, i, a, u));
              }
            switch (n) {
              case 'input':
                di(e), Nf(e, r, !1);
                break;
              case 'textarea':
                di(e), Df(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Mn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Pr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Pr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = iu);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Xe(t), null;
    case 6:
      if (e && t.stateNode != null) Oh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error($(166));
        if (((n = Hn(Fo.current)), Hn(Wt.current), _i(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Bt] = t),
            (i = r.nodeValue !== n) && ((e = yt), e !== null))
          )
            switch (e.tag) {
              case 3:
                wi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Bt] = t),
            (t.stateNode = r);
      }
      return Xe(t), null;
    case 13:
      if (
        (_e(Oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ke && mt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          Qv(), $r(), (t.flags |= 98560), (i = !1);
        else if (((i = _i(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error($(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error($(317));
            i[Bt] = t;
          } else
            $r(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          Xe(t), (i = !1);
        } else Dt !== null && (Rs(Dt), (Dt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (Oe.current & 1) !== 0
                ? ze === 0 && (ze = 3)
                : Oc())),
          t.updateQueue !== null && (t.flags |= 4),
          Xe(t),
          null);
    case 4:
      return (
        Lr(), ws(e, t), e === null && $o(t.stateNode.containerInfo), Xe(t), null
      );
    case 10:
      return sc(t.type._context), Xe(t), null;
    case 17:
      return st(t.type) && uu(), Xe(t), null;
    case 19:
      if ((_e(Oe), (i = t.memoizedState), i === null)) return Xe(t), null;
      if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
        if (r) so(i, !1);
        else {
          if (ze !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((u = pu(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    so(i, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (u = i.alternate),
                    u === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = u.childLanes),
                        (i.lanes = u.lanes),
                        (i.child = u.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = u.memoizedProps),
                        (i.memoizedState = u.memoizedState),
                        (i.updateQueue = u.updateQueue),
                        (i.type = u.type),
                        (e = u.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Se(Oe, (Oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ae() > Fr &&
            ((t.flags |= 128), (r = !0), so(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = pu(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              so(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !u.alternate && !ke)
            )
              return Xe(t), null;
          } else
            2 * Ae() - i.renderingStartTime > Fr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), so(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = i.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (i.last = u));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ae()),
          (t.sibling = null),
          (n = Oe.current),
          Se(Oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Xe(t), null);
    case 22:
    case 23:
      return (
        Pc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (ht & 1073741824) !== 0 &&
            (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function $1(e, t) {
  switch ((ic(t), t.tag)) {
    case 1:
      return (
        st(t.type) && uu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Lr(),
        _e(at),
        _e(et),
        vc(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return pc(t), null;
    case 13:
      if (
        (_e(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error($(340));
        $r();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return _e(Oe), null;
    case 4:
      return Lr(), null;
    case 10:
      return sc(t.type._context), null;
    case 22:
    case 23:
      return Pc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ki = !1,
  Ze = !1,
  z1 = typeof WeakSet == 'function' ? WeakSet : Set,
  H = null;
function xr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Ie(e, t, r);
      }
    else n.current = null;
}
function _s(e, t, n) {
  try {
    n();
  } catch (r) {
    Ie(e, t, r);
  }
}
var kd = !1;
function L1(e, t) {
  if (((os = nu), (e = Iv()), rc(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0,
            l = -1,
            a = -1,
            s = 0,
            c = 0,
            p = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = u + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = u + r),
                p.nodeType === 3 && (u += p.nodeValue.length),
                (m = p.firstChild) !== null;

            )
              (d = p), (p = m);
            for (;;) {
              if (p === e) break t;
              if (
                (d === n && ++s === o && (l = u),
                d === i && ++c === r && (a = u),
                (m = p.nextSibling) !== null)
              )
                break;
              (p = d), (d = p.parentNode);
            }
            p = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (is = { focusedElem: e, selectionRange: n }, nu = !1, H = t; H !== null; )
    if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (H = e);
    else
      for (; H !== null; ) {
        t = H;
        try {
          var y = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    x = y.memoizedState,
                    v = t.stateNode,
                    f = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Nt(t.type, w),
                      x
                    );
                  v.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error($(163));
            }
        } catch (g) {
          Ie(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (H = e);
          break;
        }
        H = t.return;
      }
  return (y = kd), (kd = !1), y;
}
function ko(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && _s(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Vu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Es(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Ch(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ch(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Bt], delete t[Lo], delete t[as], delete t[w1], delete t[_1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function xs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = iu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xs(e, t, n), e = e.sibling; e !== null; ) xs(e, t, n), (e = e.sibling);
}
function ks(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ks(e, t, n), e = e.sibling; e !== null; ) ks(e, t, n), (e = e.sibling);
}
var Ve = null,
  Mt = !1;
function dn(e, t, n) {
  for (n = n.child; n !== null; ) Th(e, t, n), (n = n.sibling);
}
function Th(e, t, n) {
  if (Vt && typeof Vt.onCommitFiberUnmount == 'function')
    try {
      Vt.onCommitFiberUnmount(zu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ze || xr(n, t);
    case 6:
      var r = Ve,
        o = Mt;
      (Ve = null),
        dn(e, t, n),
        (Ve = r),
        (Mt = o),
        Ve !== null &&
          (Mt
            ? ((e = Ve),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null &&
        (Mt
          ? ((e = Ve),
            (n = n.stateNode),
            e.nodeType === 8
              ? la(e.parentNode, n)
              : e.nodeType === 1 && la(e, n),
            No(e))
          : la(Ve, n.stateNode));
      break;
    case 4:
      (r = Ve),
        (o = Mt),
        (Ve = n.stateNode.containerInfo),
        (Mt = !0),
        dn(e, t, n),
        (Ve = r),
        (Mt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            u = i.destroy;
          (i = i.tag),
            u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && _s(n, t, u),
            (o = o.next);
        } while (o !== r);
      }
      dn(e, t, n);
      break;
    case 1:
      if (
        !Ze &&
        (xr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ie(n, t, l);
        }
      dn(e, t, n);
      break;
    case 21:
      dn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ze = (r = Ze) || n.memoizedState !== null), dn(e, t, n), (Ze = r))
        : dn(e, t, n);
      break;
    default:
      dn(e, t, n);
  }
}
function Od(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new z1()),
      t.forEach(function (r) {
        var o = H1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function At(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          u = t,
          l = u;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ve = l.stateNode), (Mt = !1);
              break e;
            case 3:
              (Ve = l.stateNode.containerInfo), (Mt = !0);
              break e;
            case 4:
              (Ve = l.stateNode.containerInfo), (Mt = !0);
              break e;
          }
          l = l.return;
        }
        if (Ve === null) throw Error($(160));
        Th(i, u, o), (Ve = null), (Mt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (s) {
        Ie(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ih(t, e), (t = t.sibling);
}
function Ih(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((At(t, e), qt(e), r & 4)) {
        try {
          ko(3, e, e.return), Vu(3, e);
        } catch (w) {
          Ie(e, e.return, w);
        }
        try {
          ko(5, e, e.return);
        } catch (w) {
          Ie(e, e.return, w);
        }
      }
      break;
    case 1:
      At(t, e), qt(e), r & 512 && n !== null && xr(n, n.return);
      break;
    case 5:
      if (
        (At(t, e),
        qt(e),
        r & 512 && n !== null && xr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          To(o, '');
        } catch (w) {
          Ie(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          u = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && i.type === 'radio' && i.name != null && Xp(o, i),
              Ka(l, u);
            var s = Ka(l, i);
            for (u = 0; u < a.length; u += 2) {
              var c = a[u],
                p = a[u + 1];
              c === 'style'
                ? nv(o, p)
                : c === 'dangerouslySetInnerHTML'
                ? ev(o, p)
                : c === 'children'
                ? To(o, p)
                : Bs(o, c, p, s);
            }
            switch (l) {
              case 'input':
                Qa(o, i);
                break;
              case 'textarea':
                Jp(o, i);
                break;
              case 'select':
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Pr(o, !!i.multiple, m, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Pr(o, !!i.multiple, i.defaultValue, !0)
                      : Pr(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Lo] = i;
          } catch (w) {
            Ie(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((At(t, e), qt(e), r & 4)) {
        if (e.stateNode === null) throw Error($(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          Ie(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (At(t, e), qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          No(t.containerInfo);
        } catch (w) {
          Ie(e, e.return, w);
        }
      break;
    case 4:
      At(t, e), qt(e);
      break;
    case 13:
      At(t, e),
        qt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (xc = Ae())),
        r & 4 && Od(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ze = (s = Ze) || c), At(t, e), (Ze = s)) : At(t, e),
        qt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && (e.mode & 1) !== 0)
        )
          for (H = e, c = e.child; c !== null; ) {
            for (p = H = c; H !== null; ) {
              switch (((d = H), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ko(4, d, d.return);
                  break;
                case 1:
                  xr(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      Ie(r, n, w);
                    }
                  }
                  break;
                case 5:
                  xr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Rd(p);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (H = m)) : Rd(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (o = p.stateNode),
                  s
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (u =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (l.style.display = tv('display', u)));
              } catch (w) {
                Ie(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = s ? '' : p.memoizedProps;
              } catch (w) {
                Ie(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      At(t, e), qt(e), r & 4 && Od(e);
      break;
    case 21:
      break;
    default:
      At(t, e), qt(e);
  }
}
function qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (To(o, ''), (r.flags &= -33));
          var i = Pd(e);
          ks(e, i, o);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            l = Pd(e);
          xs(e, l, u);
          break;
        default:
          throw Error($(161));
      }
    } catch (a) {
      Ie(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function b1(e, t, n) {
  (H = e), jh(e);
}
function jh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null; ) {
    var o = H,
      i = o.child;
    if (o.tag === 22 && r) {
      var u = o.memoizedState !== null || ki;
      if (!u) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Ze;
        l = ki;
        var s = Ze;
        if (((ki = u), (Ze = a) && !s))
          for (H = o; H !== null; )
            (u = H),
              (a = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? Td(o)
                : a !== null
                ? ((a.return = u), (H = a))
                : Td(o);
        for (; i !== null; ) (H = i), jh(i), (i = i.sibling);
        (H = o), (ki = l), (Ze = s);
      }
      Cd(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = o), (H = i))
        : Cd(e);
  }
}
function Cd(e) {
  for (; H !== null; ) {
    var t = H;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ze || Vu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ze)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && cd(t, i, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                cd(t, u, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && No(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error($(163));
          }
        Ze || (t.flags & 512 && Es(t));
      } catch (d) {
        Ie(t, t.return, d);
      }
    }
    if (t === e) {
      H = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (H = n);
      break;
    }
    H = t.return;
  }
}
function Rd(e) {
  for (; H !== null; ) {
    var t = H;
    if (t === e) {
      H = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (H = n);
      break;
    }
    H = t.return;
  }
}
function Td(e) {
  for (; H !== null; ) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vu(4, t);
          } catch (a) {
            Ie(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ie(t, o, a);
            }
          }
          var i = t.return;
          try {
            Es(t);
          } catch (a) {
            Ie(t, i, a);
          }
          break;
        case 5:
          var u = t.return;
          try {
            Es(t);
          } catch (a) {
            Ie(t, u, a);
          }
      }
    } catch (a) {
      Ie(t, t.return, a);
    }
    if (t === e) {
      H = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (H = l);
      break;
    }
    H = t.return;
  }
}
var F1 = Math.ceil,
  mu = sn.ReactCurrentDispatcher,
  _c = sn.ReactCurrentOwner,
  Ct = sn.ReactCurrentBatchConfig,
  fe = 0,
  Qe = null,
  Me = null,
  He = 0,
  ht = 0,
  kr = bn(0),
  ze = 0,
  Bo = null,
  er = 0,
  Wu = 0,
  Ec = 0,
  Po = null,
  it = null,
  xc = 0,
  Fr = 1 / 0,
  Xt = null,
  yu = !1,
  Ps = null,
  Rn = null,
  Pi = !1,
  _n = null,
  gu = 0,
  Oo = 0,
  Os = null,
  Ui = -1,
  qi = 0;
function nt() {
  return (fe & 6) !== 0 ? Ae() : Ui !== -1 ? Ui : (Ui = Ae());
}
function Tn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (fe & 2) !== 0 && He !== 0
    ? He & -He
    : x1.transition !== null
    ? (qi === 0 && (qi = vv()), qi)
    : ((e = ve),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : _v(e.type))),
      e);
}
function zt(e, t, n, r) {
  if (50 < Oo) throw ((Oo = 0), (Os = null), Error($(185)));
  ei(e, n, r),
    ((fe & 2) === 0 || e !== Qe) &&
      (e === Qe && ((fe & 2) === 0 && (Wu |= n), ze === 4 && yn(e, He)),
      ct(e, r),
      n === 1 &&
        fe === 0 &&
        (t.mode & 1) === 0 &&
        ((Fr = Ae() + 500), qu && Fn()));
}
function ct(e, t) {
  var n = e.callbackNode;
  xg(e, t);
  var r = tu(e, e === Qe ? He : 0);
  if (r === 0)
    n !== null && Lf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Lf(n), t === 1))
      e.tag === 0 ? E1(Id.bind(null, e)) : Fv(Id.bind(null, e)),
        g1(function () {
          (fe & 6) === 0 && Fn();
        }),
        (n = null);
    else {
      switch (hv(r)) {
        case 1:
          n = Gs;
          break;
        case 4:
          n = dv;
          break;
        case 16:
          n = eu;
          break;
        case 536870912:
          n = pv;
          break;
        default:
          n = eu;
      }
      n = bh(n, Ah.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ah(e, t) {
  if (((Ui = -1), (qi = 0), (fe & 6) !== 0)) throw Error($(327));
  var n = e.callbackNode;
  if (Ir() && e.callbackNode !== n) return null;
  var r = tu(e, e === Qe ? He : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Su(e, r);
  else {
    t = r;
    var o = fe;
    fe |= 2;
    var i = Mh();
    (Qe !== e || He !== t) && ((Xt = null), (Fr = Ae() + 500), Gn(e, t));
    do
      try {
        Q1();
        break;
      } catch (l) {
        Nh(e, l);
      }
    while (1);
    ac(),
      (mu.current = i),
      (fe = o),
      Me !== null ? (t = 0) : ((Qe = null), (He = 0), (t = ze));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Za(e)), o !== 0 && ((r = o), (t = Cs(e, o)))), t === 1)
    )
      throw ((n = Bo), Gn(e, 0), yn(e, r), ct(e, Ae()), n);
    if (t === 6) yn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        (r & 30) === 0 &&
          !U1(o) &&
          ((t = Su(e, r)),
          t === 2 && ((i = Za(e)), i !== 0 && ((r = i), (t = Cs(e, i)))),
          t === 1))
      )
        throw ((n = Bo), Gn(e, 0), yn(e, r), ct(e, Ae()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          Bn(e, it, Xt);
          break;
        case 3:
          if (
            (yn(e, r), (r & 130023424) === r && ((t = xc + 500 - Ae()), 10 < t))
          ) {
            if (tu(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              nt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ls(Bn.bind(null, e, it, Xt), t);
            break;
          }
          Bn(e, it, Xt);
          break;
        case 4:
          if ((yn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var u = 31 - $t(r);
            (i = 1 << u), (u = t[u]), u > o && (o = u), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ae() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * F1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ls(Bn.bind(null, e, it, Xt), r);
            break;
          }
          Bn(e, it, Xt);
          break;
        case 5:
          Bn(e, it, Xt);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return ct(e, Ae()), e.callbackNode === n ? Ah.bind(null, e) : null;
}
function Cs(e, t) {
  var n = Po;
  return (
    e.current.memoizedState.isDehydrated && (Gn(e, t).flags |= 256),
    (e = Su(e, t)),
    e !== 2 && ((t = it), (it = n), t !== null && Rs(t)),
    e
  );
}
function Rs(e) {
  it === null ? (it = e) : it.push.apply(it, e);
}
function U1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Lt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function yn(e, t) {
  for (
    t &= ~Ec,
      t &= ~Wu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Id(e) {
  if ((fe & 6) !== 0) throw Error($(327));
  Ir();
  var t = tu(e, 0);
  if ((t & 1) === 0) return ct(e, Ae()), null;
  var n = Su(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Za(e);
    r !== 0 && ((t = r), (n = Cs(e, r)));
  }
  if (n === 1) throw ((n = Bo), Gn(e, 0), yn(e, t), ct(e, Ae()), n);
  if (n === 6) throw Error($(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bn(e, it, Xt),
    ct(e, Ae()),
    null
  );
}
function kc(e, t) {
  var n = fe;
  fe |= 1;
  try {
    return e(t);
  } finally {
    (fe = n), fe === 0 && ((Fr = Ae() + 500), qu && Fn());
  }
}
function tr(e) {
  _n !== null && _n.tag === 0 && (fe & 6) === 0 && Ir();
  var t = fe;
  fe |= 1;
  var n = Ct.transition,
    r = ve;
  try {
    if (((Ct.transition = null), (ve = 1), e)) return e();
  } finally {
    (ve = r), (Ct.transition = n), (fe = t), (fe & 6) === 0 && Fn();
  }
}
function Pc() {
  (ht = kr.current), _e(kr);
}
function Gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), y1(n)), Me !== null))
    for (n = Me.return; n !== null; ) {
      var r = n;
      switch ((ic(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && uu();
          break;
        case 3:
          Lr(), _e(at), _e(et), vc();
          break;
        case 5:
          pc(r);
          break;
        case 4:
          Lr();
          break;
        case 13:
          _e(Oe);
          break;
        case 19:
          _e(Oe);
          break;
        case 10:
          sc(r.type._context);
          break;
        case 22:
        case 23:
          Pc();
      }
      n = n.return;
    }
  if (
    ((Qe = e),
    (Me = e = In(e.current, null)),
    (He = ht = t),
    (ze = 0),
    (Bo = null),
    (Ec = Wu = er = 0),
    (it = Po = null),
    Wn !== null)
  ) {
    for (t = 0; t < Wn.length; t++)
      if (((n = Wn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var u = i.next;
          (i.next = o), (r.next = u);
        }
        n.pending = r;
      }
    Wn = null;
  }
  return e;
}
function Nh(e, t) {
  do {
    var n = Me;
    try {
      if ((ac(), (Li.current = hu), vu)) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        vu = !1;
      }
      if (
        ((Zn = 0),
        (Ue = De = Ce = null),
        (xo = !1),
        (Uo = 0),
        (_c.current = null),
        n === null || n.return === null)
      ) {
        (ze = 1), (Bo = t), (Me = null);
        break;
      }
      e: {
        var i = e,
          u = n.return,
          l = n,
          a = t;
        if (
          ((t = He),
          (l.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var s = a,
            c = l,
            p = c.tag;
          if ((c.mode & 1) === 0 && (p === 0 || p === 11 || p === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = yd(u);
          if (m !== null) {
            (m.flags &= -257),
              gd(m, u, l, i, t),
              m.mode & 1 && md(i, s, t),
              (t = m),
              (a = s);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if ((t & 1) === 0) {
              md(i, s, t), Oc();
              break e;
            }
            a = Error($(426));
          }
        } else if (ke && l.mode & 1) {
          var x = yd(u);
          if (x !== null) {
            (x.flags & 65536) === 0 && (x.flags |= 256),
              gd(x, u, l, i, t),
              uc(br(a, l));
            break e;
          }
        }
        (i = a = br(a, l)),
          ze !== 4 && (ze = 2),
          Po === null ? (Po = [i]) : Po.push(i),
          (i = u);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = mh(i, a, t);
              sd(i, v);
              break e;
            case 1:
              l = a;
              var f = i.type,
                h = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (Rn === null || !Rn.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = yh(i, l, t);
                sd(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      $h(n);
    } catch (_) {
      (t = _), Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Mh() {
  var e = mu.current;
  return (mu.current = hu), e === null ? hu : e;
}
function Oc() {
  (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
    Qe === null ||
      ((er & 268435455) === 0 && (Wu & 268435455) === 0) ||
      yn(Qe, He);
}
function Su(e, t) {
  var n = fe;
  fe |= 2;
  var r = Mh();
  (Qe !== e || He !== t) && ((Xt = null), Gn(e, t));
  do
    try {
      q1();
      break;
    } catch (o) {
      Nh(e, o);
    }
  while (1);
  if ((ac(), (fe = n), (mu.current = r), Me !== null)) throw Error($(261));
  return (Qe = null), (He = 0), ze;
}
function q1() {
  for (; Me !== null; ) Dh(Me);
}
function Q1() {
  for (; Me !== null && !vg(); ) Dh(Me);
}
function Dh(e) {
  var t = Lh(e.alternate, e, ht);
  (e.memoizedProps = e.pendingProps),
    t === null ? $h(e) : (Me = t),
    (_c.current = null);
}
function $h(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = D1(n, t, ht)), n !== null)) {
        Me = n;
        return;
      }
    } else {
      if (((n = $1(n, t)), n !== null)) {
        (n.flags &= 32767), (Me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ze = 6), (Me = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  ze === 0 && (ze = 5);
}
function Bn(e, t, n) {
  var r = ve,
    o = Ct.transition;
  try {
    (Ct.transition = null), (ve = 1), B1(e, t, n, r);
  } finally {
    (Ct.transition = o), (ve = r);
  }
  return null;
}
function B1(e, t, n, r) {
  do Ir();
  while (_n !== null);
  if ((fe & 6) !== 0) throw Error($(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error($(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (kg(e, i),
    e === Qe && ((Me = Qe = null), (He = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Pi ||
      ((Pi = !0),
      bh(eu, function () {
        return Ir(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = Ct.transition), (Ct.transition = null);
    var u = ve;
    ve = 1;
    var l = fe;
    (fe |= 4),
      (_c.current = null),
      L1(e, n),
      Ih(n, e),
      c1(is),
      (nu = !!os),
      (is = os = null),
      (e.current = n),
      b1(n),
      hg(),
      (fe = l),
      (ve = u),
      (Ct.transition = i);
  } else e.current = n;
  if (
    (Pi && ((Pi = !1), (_n = e), (gu = o)),
    (i = e.pendingLanes),
    i === 0 && (Rn = null),
    gg(n.stateNode),
    ct(e, Ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (yu) throw ((yu = !1), (e = Ps), (Ps = null), e);
  return (
    (gu & 1) !== 0 && e.tag !== 0 && Ir(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === Os ? Oo++ : ((Oo = 0), (Os = e))) : (Oo = 0),
    Fn(),
    null
  );
}
function Ir() {
  if (_n !== null) {
    var e = hv(gu),
      t = Ct.transition,
      n = ve;
    try {
      if (((Ct.transition = null), (ve = 16 > e ? 16 : e), _n === null))
        var r = !1;
      else {
        if (((e = _n), (_n = null), (gu = 0), (fe & 6) !== 0))
          throw Error($(331));
        var o = fe;
        for (fe |= 4, H = e.current; H !== null; ) {
          var i = H,
            u = i.child;
          if ((H.flags & 16) !== 0) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var s = l[a];
                for (H = s; H !== null; ) {
                  var c = H;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ko(8, c, i);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (H = p);
                  else
                    for (; H !== null; ) {
                      c = H;
                      var d = c.sibling,
                        m = c.return;
                      if ((Ch(c), c === s)) {
                        H = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (H = d);
                        break;
                      }
                      H = m;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var x = w.sibling;
                    (w.sibling = null), (w = x);
                  } while (w !== null);
                }
              }
              H = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && u !== null)
            (u.return = i), (H = u);
          else
            e: for (; H !== null; ) {
              if (((i = H), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ko(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (H = v);
                break e;
              }
              H = i.return;
            }
        }
        var f = e.current;
        for (H = f; H !== null; ) {
          u = H;
          var h = u.child;
          if ((u.subtreeFlags & 2064) !== 0 && h !== null)
            (h.return = u), (H = h);
          else
            e: for (u = f; H !== null; ) {
              if (((l = H), (l.flags & 2048) !== 0))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vu(9, l);
                  }
                } catch (_) {
                  Ie(l, l.return, _);
                }
              if (l === u) {
                H = null;
                break e;
              }
              var g = l.sibling;
              if (g !== null) {
                (g.return = l.return), (H = g);
                break e;
              }
              H = l.return;
            }
        }
        if (
          ((fe = o), Fn(), Vt && typeof Vt.onPostCommitFiberRoot == 'function')
        )
          try {
            Vt.onPostCommitFiberRoot(zu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ve = n), (Ct.transition = t);
    }
  }
  return !1;
}
function jd(e, t, n) {
  (t = br(n, t)),
    (t = mh(e, t, 1)),
    (e = Cn(e, t, 1)),
    (t = nt()),
    e !== null && (ei(e, 1, t), ct(e, t));
}
function Ie(e, t, n) {
  if (e.tag === 3) jd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        jd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Rn === null || !Rn.has(r)))
        ) {
          (e = br(n, e)),
            (e = yh(t, e, 1)),
            (t = Cn(t, e, 1)),
            (e = nt()),
            t !== null && (ei(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function V1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = nt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Qe === e &&
      (He & n) === n &&
      (ze === 4 || (ze === 3 && (He & 130023424) === He && 500 > Ae() - xc)
        ? Gn(e, 0)
        : (Ec |= n)),
    ct(e, t);
}
function zh(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = hi), (hi <<= 1), (hi & 130023424) === 0 && (hi = 4194304)));
  var n = nt();
  (e = un(e, t)), e !== null && (ei(e, t, n), ct(e, n));
}
function W1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zh(e, n);
}
function H1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error($(314));
  }
  r !== null && r.delete(t), zh(e, n);
}
var Lh;
Lh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || at.current) lt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (lt = !1), M1(e, t, n);
      lt = (e.flags & 131072) !== 0;
    }
  else (lt = !1), ke && (t.flags & 1048576) !== 0 && Uv(t, su, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Fi(e, t), (e = t.pendingProps);
      var o = Dr(t, et.current);
      Tr(t, n), (o = mc(null, t, r, e, o, n));
      var i = yc();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            st(r) ? ((i = !0), lu(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            fc(t),
            (o.updater = Qu),
            (t.stateNode = o),
            (o._reactInternals = t),
            vs(t, r, e, n),
            (t = ys(null, t, r, !0, i, n)))
          : ((t.tag = 0), ke && i && oc(t), tt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = G1(r)),
          (e = Nt(r, e)),
          o)
        ) {
          case 0:
            t = ms(null, t, r, e, n);
            break e;
          case 1:
            t = _d(null, t, r, e, n);
            break e;
          case 11:
            t = Sd(null, t, r, e, n);
            break e;
          case 14:
            t = wd(null, t, r, Nt(r.type, e), n);
            break e;
        }
        throw Error($(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        ms(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        _d(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((_h(t), e === null)) throw Error($(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Vv(e, t),
          du(t, r, null, n);
        var u = t.memoizedState;
        if (((r = u.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = br(Error($(423)), t)), (t = Ed(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = br(Error($(424)), t)), (t = Ed(e, t, r, n, o));
            break e;
          } else
            for (
              mt = On(t.stateNode.containerInfo.firstChild),
                yt = t,
                ke = !0,
                Dt = null,
                n = Gv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($r(), r === o)) {
            t = ln(e, t, n);
            break e;
          }
          tt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yv(t),
        e === null && fs(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (u = o.children),
        us(r, o) ? (u = null) : i !== null && us(r, i) && (t.flags |= 32),
        wh(e, t),
        tt(e, t, u, n),
        t.child
      );
    case 6:
      return e === null && fs(t), null;
    case 13:
      return Eh(e, t, n);
    case 4:
      return (
        dc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zr(t, null, r, n)) : tt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        Sd(e, t, r, o, n)
      );
    case 7:
      return tt(e, t, t.pendingProps, n), t.child;
    case 8:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (u = o.value),
          Se(cu, r._currentValue),
          (r._currentValue = u),
          i !== null)
        )
          if (Lt(i.value, u)) {
            if (i.children === o.children && !at.current) {
              t = ln(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                u = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = nn(-1, n & -n)), (a.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (s.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      ds(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((u = i.return), u === null)) throw Error($(341));
                (u.lanes |= n),
                  (l = u.alternate),
                  l !== null && (l.lanes |= n),
                  ds(u, n, t),
                  (u = i.sibling);
              } else u = i.child;
              if (u !== null) u.return = i;
              else
                for (u = i; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((i = u.sibling), i !== null)) {
                    (i.return = u.return), (u = i);
                    break;
                  }
                  u = u.return;
                }
              i = u;
            }
        tt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Tr(t, n),
        (o = Rt(o)),
        (r = r(o)),
        (t.flags |= 1),
        tt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Nt(r, t.pendingProps)),
        (o = Nt(r.type, o)),
        wd(e, t, r, o, n)
      );
    case 15:
      return gh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        Fi(e, t),
        (t.tag = 1),
        st(r) ? ((e = !0), lu(t)) : (e = !1),
        Tr(t, n),
        Hv(t, r, o),
        vs(t, r, o, n),
        ys(null, t, r, !0, e, n)
      );
    case 19:
      return xh(e, t, n);
    case 22:
      return Sh(e, t, n);
  }
  throw Error($(156, t.tag));
};
function bh(e, t) {
  return fv(e, t);
}
function K1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ot(e, t, n, r) {
  return new K1(e, t, n, r);
}
function Cc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function G1(e) {
  if (typeof e == 'function') return Cc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ws)) return 11;
    if (e === Hs) return 14;
  }
  return 2;
}
function In(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ot(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qi(e, t, n, r, o, i) {
  var u = 2;
  if (((r = e), typeof e == 'function')) Cc(e) && (u = 1);
  else if (typeof e == 'string') u = 5;
  else
    e: switch (e) {
      case vr:
        return Yn(n.children, o, i, t);
      case Vs:
        (u = 8), (o |= 8);
        break;
      case La:
        return (
          (e = Ot(12, n, t, o | 2)), (e.elementType = La), (e.lanes = i), e
        );
      case ba:
        return (e = Ot(13, n, t, o)), (e.elementType = ba), (e.lanes = i), e;
      case Fa:
        return (e = Ot(19, n, t, o)), (e.elementType = Fa), (e.lanes = i), e;
      case Kp:
        return Hu(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Wp:
              u = 10;
              break e;
            case Hp:
              u = 9;
              break e;
            case Ws:
              u = 11;
              break e;
            case Hs:
              u = 14;
              break e;
            case vn:
              (u = 16), (r = null);
              break e;
          }
        throw Error($(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ot(u, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Yn(e, t, n, r) {
  return (e = Ot(7, e, r, t)), (e.lanes = n), e;
}
function Hu(e, t, n, r) {
  return (
    (e = Ot(22, e, r, t)),
    (e.elementType = Kp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ha(e, t, n) {
  return (e = Ot(6, e, null, t)), (e.lanes = n), e;
}
function ma(e, t, n) {
  return (
    (t = Ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Y1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yl(0)),
    (this.expirationTimes = Yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Rc(e, t, n, r, o, i, u, l, a) {
  return (
    (e = new Y1(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ot(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fc(i),
    e
  );
}
function X1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: pr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fh(e) {
  if (!e) return Dn;
  e = e._reactInternals;
  e: {
    if (rr(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (st(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (st(n)) return bv(e, n, t);
  }
  return t;
}
function Uh(e, t, n, r, o, i, u, l, a) {
  return (
    (e = Rc(n, r, !0, e, o, i, u, l, a)),
    (e.context = Fh(null)),
    (n = e.current),
    (r = nt()),
    (o = Tn(n)),
    (i = nn(r, o)),
    (i.callback = t != null ? t : null),
    Cn(n, i, o),
    (e.current.lanes = o),
    ei(e, o, r),
    ct(e, r),
    e
  );
}
function Ku(e, t, n, r) {
  var o = t.current,
    i = nt(),
    u = Tn(o);
  return (
    (n = Fh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nn(i, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Cn(o, t, u)),
    e !== null && (zt(e, o, u, i), zi(e, o, u)),
    u
  );
}
function wu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ad(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Tc(e, t) {
  Ad(e, t), (e = e.alternate) && Ad(e, t);
}
function J1() {
  return null;
}
var qh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ic(e) {
  this._internalRoot = e;
}
Gu.prototype.render = Ic.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  Ku(e, t, null, null);
};
Gu.prototype.unmount = Ic.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tr(function () {
      Ku(null, e, null, null);
    }),
      (t[on] = null);
  }
};
function Gu(e) {
  this._internalRoot = e;
}
Gu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < mn.length && t !== 0 && t < mn[n].priority; n++);
    mn.splice(n, 0, e), n === 0 && wv(e);
  }
};
function jc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Nd() {}
function Z1(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var s = wu(u);
        i.call(s);
      };
    }
    var u = Uh(t, r, e, 0, null, !1, !1, '', Nd);
    return (
      (e._reactRootContainer = u),
      (e[on] = u.current),
      $o(e.nodeType === 8 ? e.parentNode : e),
      tr(),
      u
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var s = wu(a);
      l.call(s);
    };
  }
  var a = Rc(e, 0, !1, null, null, !1, !1, '', Nd);
  return (
    (e._reactRootContainer = a),
    (e[on] = a.current),
    $o(e.nodeType === 8 ? e.parentNode : e),
    tr(function () {
      Ku(t, a, n, r);
    }),
    a
  );
}
function Xu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var u = i;
    if (typeof o == 'function') {
      var l = o;
      o = function () {
        var a = wu(u);
        l.call(a);
      };
    }
    Ku(t, u, e, o);
  } else u = Z1(n, t, e, o, r);
  return wu(u);
}
mv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ho(t.pendingLanes);
        n !== 0 &&
          (Ys(t, n | 1),
          ct(t, Ae()),
          (fe & 6) === 0 && ((Fr = Ae() + 500), Fn()));
      }
      break;
    case 13:
      tr(function () {
        var r = un(e, 1);
        if (r !== null) {
          var o = nt();
          zt(r, e, 1, o);
        }
      }),
        Tc(e, 1);
  }
};
Xs = function (e) {
  if (e.tag === 13) {
    var t = un(e, 134217728);
    if (t !== null) {
      var n = nt();
      zt(t, e, 134217728, n);
    }
    Tc(e, 134217728);
  }
};
yv = function (e) {
  if (e.tag === 13) {
    var t = Tn(e),
      n = un(e, t);
    if (n !== null) {
      var r = nt();
      zt(n, e, t, r);
    }
    Tc(e, t);
  }
};
gv = function () {
  return ve;
};
Sv = function (e, t) {
  var n = ve;
  try {
    return (ve = e), t();
  } finally {
    ve = n;
  }
};
Ya = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Qa(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Uu(r);
            if (!o) throw Error($(90));
            Yp(r), Qa(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Jp(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Pr(e, !!n.multiple, t, !1);
  }
};
iv = kc;
uv = tr;
var eS = { usingClientEntryPoint: !1, Events: [ni, gr, Uu, rv, ov, kc] },
  co = {
    findFiberByHostInstance: Vn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  tS = {
    bundleType: co.bundleType,
    version: co.version,
    rendererPackageName: co.rendererPackageName,
    rendererConfig: co.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: co.findFiberByHostInstance || J1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Oi.isDisabled && Oi.supportsFiber)
    try {
      (zu = Oi.inject(tS)), (Vt = Oi);
    } catch {}
}
wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eS;
wt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jc(t)) throw Error($(200));
  return X1(e, t, null, n);
};
wt.createRoot = function (e, t) {
  if (!jc(e)) throw Error($(299));
  var n = !1,
    r = '',
    o = qh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Rc(e, 1, !1, null, null, n, !1, r, o)),
    (e[on] = t.current),
    $o(e.nodeType === 8 ? e.parentNode : e),
    new Ic(t)
  );
};
wt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error($(188))
      : ((e = Object.keys(e).join(',')), Error($(268, e)));
  return (e = sv(t)), (e = e === null ? null : e.stateNode), e;
};
wt.flushSync = function (e) {
  return tr(e);
};
wt.hydrate = function (e, t, n) {
  if (!Yu(t)) throw Error($(200));
  return Xu(null, e, t, !0, n);
};
wt.hydrateRoot = function (e, t, n) {
  if (!jc(e)) throw Error($(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    u = qh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = Uh(t, null, e, 1, n != null ? n : null, o, !1, i, u)),
    (e[on] = t.current),
    $o(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Gu(t);
};
wt.render = function (e, t, n) {
  if (!Yu(t)) throw Error($(200));
  return Xu(null, e, t, !1, n);
};
wt.unmountComponentAtNode = function (e) {
  if (!Yu(e)) throw Error($(40));
  return e._reactRootContainer
    ? (tr(function () {
        Xu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[on] = null);
        });
      }),
      !0)
    : !1;
};
wt.unstable_batchedUpdates = kc;
wt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yu(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return Xu(e, t, n, !1, r);
};
wt.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = wt);
})($u);
function nS(e) {
  e();
}
let Qh = nS;
const rS = e => (Qh = e),
  oS = () => Qh,
  $n = N.exports.createContext(null);
function Bh() {
  return N.exports.useContext($n);
}
const iS = () => {
  throw new Error('uSES not initialized!');
};
let Vh = iS;
const uS = e => {
    Vh = e;
  },
  lS = (e, t) => e === t;
function aS(e = $n) {
  const t = e === $n ? Bh : () => N.exports.useContext(e);
  return function (r, o = lS) {
    const { store: i, subscription: u, getServerState: l } = t(),
      a = Vh(u.addNestedSub, i.getState, l || i.getState, r, o);
    return N.exports.useDebugValue(a), a;
  };
}
const Wh = aS();
var Hh = { exports: {} },
  he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Be = typeof Symbol == 'function' && Symbol.for,
  Ac = Be ? Symbol.for('react.element') : 60103,
  Nc = Be ? Symbol.for('react.portal') : 60106,
  Ju = Be ? Symbol.for('react.fragment') : 60107,
  Zu = Be ? Symbol.for('react.strict_mode') : 60108,
  el = Be ? Symbol.for('react.profiler') : 60114,
  tl = Be ? Symbol.for('react.provider') : 60109,
  nl = Be ? Symbol.for('react.context') : 60110,
  Mc = Be ? Symbol.for('react.async_mode') : 60111,
  rl = Be ? Symbol.for('react.concurrent_mode') : 60111,
  ol = Be ? Symbol.for('react.forward_ref') : 60112,
  il = Be ? Symbol.for('react.suspense') : 60113,
  sS = Be ? Symbol.for('react.suspense_list') : 60120,
  ul = Be ? Symbol.for('react.memo') : 60115,
  ll = Be ? Symbol.for('react.lazy') : 60116,
  cS = Be ? Symbol.for('react.block') : 60121,
  fS = Be ? Symbol.for('react.fundamental') : 60117,
  dS = Be ? Symbol.for('react.responder') : 60118,
  pS = Be ? Symbol.for('react.scope') : 60119;
function Et(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ac:
        switch (((e = e.type), e)) {
          case Mc:
          case rl:
          case Ju:
          case el:
          case Zu:
          case il:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case nl:
              case ol:
              case ll:
              case ul:
              case tl:
                return e;
              default:
                return t;
            }
        }
      case Nc:
        return t;
    }
  }
}
function Kh(e) {
  return Et(e) === rl;
}
he.AsyncMode = Mc;
he.ConcurrentMode = rl;
he.ContextConsumer = nl;
he.ContextProvider = tl;
he.Element = Ac;
he.ForwardRef = ol;
he.Fragment = Ju;
he.Lazy = ll;
he.Memo = ul;
he.Portal = Nc;
he.Profiler = el;
he.StrictMode = Zu;
he.Suspense = il;
he.isAsyncMode = function (e) {
  return Kh(e) || Et(e) === Mc;
};
he.isConcurrentMode = Kh;
he.isContextConsumer = function (e) {
  return Et(e) === nl;
};
he.isContextProvider = function (e) {
  return Et(e) === tl;
};
he.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ac;
};
he.isForwardRef = function (e) {
  return Et(e) === ol;
};
he.isFragment = function (e) {
  return Et(e) === Ju;
};
he.isLazy = function (e) {
  return Et(e) === ll;
};
he.isMemo = function (e) {
  return Et(e) === ul;
};
he.isPortal = function (e) {
  return Et(e) === Nc;
};
he.isProfiler = function (e) {
  return Et(e) === el;
};
he.isStrictMode = function (e) {
  return Et(e) === Zu;
};
he.isSuspense = function (e) {
  return Et(e) === il;
};
he.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ju ||
    e === rl ||
    e === el ||
    e === Zu ||
    e === il ||
    e === sS ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ll ||
        e.$$typeof === ul ||
        e.$$typeof === tl ||
        e.$$typeof === nl ||
        e.$$typeof === ol ||
        e.$$typeof === fS ||
        e.$$typeof === dS ||
        e.$$typeof === pS ||
        e.$$typeof === cS))
  );
};
he.typeOf = Et;
(function (e) {
  e.exports = he;
})(Hh);
var Gh = Hh.exports,
  vS = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  hS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Yh = {};
Yh[Gh.ForwardRef] = vS;
Yh[Gh.Memo] = hS;
var mS = { exports: {} },
  me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dc = Symbol.for('react.element'),
  $c = Symbol.for('react.portal'),
  al = Symbol.for('react.fragment'),
  sl = Symbol.for('react.strict_mode'),
  cl = Symbol.for('react.profiler'),
  fl = Symbol.for('react.provider'),
  dl = Symbol.for('react.context'),
  yS = Symbol.for('react.server_context'),
  pl = Symbol.for('react.forward_ref'),
  vl = Symbol.for('react.suspense'),
  hl = Symbol.for('react.suspense_list'),
  ml = Symbol.for('react.memo'),
  yl = Symbol.for('react.lazy'),
  gS = Symbol.for('react.offscreen'),
  Xh;
Xh = Symbol.for('react.module.reference');
function It(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Dc:
        switch (((e = e.type), e)) {
          case al:
          case cl:
          case sl:
          case vl:
          case hl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case yS:
              case dl:
              case pl:
              case yl:
              case ml:
              case fl:
                return e;
              default:
                return t;
            }
        }
      case $c:
        return t;
    }
  }
}
me.ContextConsumer = dl;
me.ContextProvider = fl;
me.Element = Dc;
me.ForwardRef = pl;
me.Fragment = al;
me.Lazy = yl;
me.Memo = ml;
me.Portal = $c;
me.Profiler = cl;
me.StrictMode = sl;
me.Suspense = vl;
me.SuspenseList = hl;
me.isAsyncMode = function () {
  return !1;
};
me.isConcurrentMode = function () {
  return !1;
};
me.isContextConsumer = function (e) {
  return It(e) === dl;
};
me.isContextProvider = function (e) {
  return It(e) === fl;
};
me.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Dc;
};
me.isForwardRef = function (e) {
  return It(e) === pl;
};
me.isFragment = function (e) {
  return It(e) === al;
};
me.isLazy = function (e) {
  return It(e) === yl;
};
me.isMemo = function (e) {
  return It(e) === ml;
};
me.isPortal = function (e) {
  return It(e) === $c;
};
me.isProfiler = function (e) {
  return It(e) === cl;
};
me.isStrictMode = function (e) {
  return It(e) === sl;
};
me.isSuspense = function (e) {
  return It(e) === vl;
};
me.isSuspenseList = function (e) {
  return It(e) === hl;
};
me.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === al ||
    e === cl ||
    e === sl ||
    e === vl ||
    e === hl ||
    e === gS ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === yl ||
        e.$$typeof === ml ||
        e.$$typeof === fl ||
        e.$$typeof === dl ||
        e.$$typeof === pl ||
        e.$$typeof === Xh ||
        e.getModuleId !== void 0))
  );
};
me.typeOf = It;
(function (e) {
  e.exports = me;
})(mS);
function SS() {
  const e = oS();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        o = t;
      for (; o; ) r.push(o), (o = o.next);
      return r;
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const Md = { notify() {}, get: () => [] };
function wS(e, t) {
  let n,
    r = Md;
  function o(p) {
    return a(), r.subscribe(p);
  }
  function i() {
    r.notify();
  }
  function u() {
    c.onStateChange && c.onStateChange();
  }
  function l() {
    return Boolean(n);
  }
  function a() {
    n || ((n = t ? t.addNestedSub(u) : e.subscribe(u)), (r = SS()));
  }
  function s() {
    n && (n(), (n = void 0), r.clear(), (r = Md));
  }
  const c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: u,
    isSubscribed: l,
    trySubscribe: a,
    tryUnsubscribe: s,
    getListeners: () => r,
  };
  return c;
}
const _S =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  ES = _S ? N.exports.useLayoutEffect : N.exports.useEffect;
function Dd(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function _u(e, t) {
  if (Dd(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Dd(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
function xS({ store: e, context: t, children: n, serverState: r }) {
  const o = N.exports.useMemo(() => {
      const l = wS(e);
      return {
        store: e,
        subscription: l,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    i = N.exports.useMemo(() => e.getState(), [e]);
  return (
    ES(() => {
      const { subscription: l } = o;
      return (
        (l.onStateChange = l.notifyNestedSubs),
        l.trySubscribe(),
        i !== e.getState() && l.notifyNestedSubs(),
        () => {
          l.tryUnsubscribe(), (l.onStateChange = void 0);
        }
      );
    }, [o, i]),
    F((t || $n).Provider, { value: o, children: n })
  );
}
function Jh(e = $n) {
  const t = e === $n ? Bh : () => N.exports.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Zh = Jh();
function kS(e = $n) {
  const t = e === $n ? Zh : Jh(e);
  return function () {
    return t().dispatch;
  };
}
const em = kS();
uS(Fp.exports.useSyncExternalStoreWithSelector);
rS($u.exports.unstable_batchedUpdates);
const PS = Wh;
function qe(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (o) {
              return "'" + o + "'";
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  );
}
function bt(e) {
  return !!e && !!e[le];
}
function dt(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var o = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return (
        o === Object ||
        (typeof o == 'function' && Function.toString.call(o) === MS)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[jr] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[jr]) ||
      gl(e) ||
      Sl(e))
  );
}
function OS(e) {
  return bt(e) || qe(23, e), e[le].t;
}
function an(e, t, n) {
  n === void 0 && (n = !1),
    zn(e) === 0
      ? (n ? Object.keys : Ar)(e).forEach(function (r) {
          (n && typeof r == 'symbol') || t(r, e[r], e);
        })
      : e.forEach(function (r, o) {
          return t(o, r, e);
        });
}
function zn(e) {
  var t = e[le];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : gl(e)
    ? 2
    : Sl(e)
    ? 3
    : 0;
}
function jn(e, t) {
  return zn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Bi(e, t) {
  return zn(e) === 2 ? e.get(t) : e[t];
}
function tm(e, t, n) {
  var r = zn(e);
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function nm(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function gl(e) {
  return AS && e instanceof Map;
}
function Sl(e) {
  return NS && e instanceof Set;
}
function Fe(e) {
  return e.o || e.t;
}
function zc(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = im(e);
  delete t[le];
  for (var n = Ar(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = t[o];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function wl(e, t) {
  return (
    t === void 0 && (t = !1),
    Lc(e) ||
      bt(e) ||
      !dt(e) ||
      (zn(e) > 1 && (e.set = e.add = e.clear = e.delete = CS),
      Object.freeze(e),
      t &&
        an(
          e,
          function (n, r) {
            return wl(r, !0);
          },
          !0
        )),
    e
  );
}
function CS() {
  qe(2);
}
function Lc(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e);
}
function Ht(e) {
  var t = Is[e];
  return t || qe(18, e), t;
}
function bc(e, t) {
  Is[e] || (Is[e] = t);
}
function Vo() {
  return Ho;
}
function ya(e, t) {
  t && (Ht('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function Eu(e) {
  Ts(e), e.p.forEach(RS), (e.p = null);
}
function Ts(e) {
  e === Ho && (Ho = e.l);
}
function $d(e) {
  return (Ho = { p: [], l: Ho, h: e, m: !0, _: 0 });
}
function RS(e) {
  var t = e[le];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function ga(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.g || Ht('ES5').S(t, e, r),
    r
      ? (n[le].P && (Eu(t), qe(4)),
        dt(e) && ((e = xu(t, e)), t.l || ku(t, e)),
        t.u && Ht('Patches').M(n[le].t, e, t.u, t.s))
      : (e = xu(t, n, [])),
    Eu(t),
    t.u && t.v(t.u, t.s),
    e !== _l ? e : void 0
  );
}
function xu(e, t, n) {
  if (Lc(t)) return t;
  var r = t[le];
  if (!r)
    return (
      an(
        t,
        function (i, u) {
          return zd(e, r, t, i, u, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return ku(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var o = r.i === 4 || r.i === 5 ? (r.o = zc(r.k)) : r.o;
    an(r.i === 3 ? new Set(o) : o, function (i, u) {
      return zd(e, r, o, i, u, n);
    }),
      ku(e, o, !1),
      n && e.u && Ht('Patches').R(r, n, e.u, e.s);
  }
  return r.o;
}
function zd(e, t, n, r, o, i) {
  if (bt(o)) {
    var u = xu(e, o, i && t && t.i !== 3 && !jn(t.D, r) ? i.concat(r) : void 0);
    if ((tm(n, r, u), !bt(u))) return;
    e.m = !1;
  }
  if (dt(o) && !Lc(o)) {
    if (!e.h.F && e._ < 1) return;
    xu(e, o), (t && t.A.l) || ku(e, o);
  }
}
function ku(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && wl(t, n);
}
function Sa(e, t) {
  var n = e[le];
  return (n ? Fe(n) : e)[t];
}
function Ld(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function ut(e) {
  e.P || ((e.P = !0), e.l && ut(e.l));
}
function wa(e) {
  e.o || (e.o = zc(e.t));
}
function Wo(e, t, n) {
  var r = gl(t)
    ? Ht('MapSet').N(t, n)
    : Sl(t)
    ? Ht('MapSet').T(t, n)
    : e.g
    ? (function (o, i) {
        var u = Array.isArray(o),
          l = {
            i: u ? 1 : 0,
            A: i ? i.A : Vo(),
            P: !1,
            I: !1,
            D: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          a = l,
          s = Ko;
        u && ((a = [l]), (s = yo));
        var c = Proxy.revocable(a, s),
          p = c.revoke,
          d = c.proxy;
        return (l.k = d), (l.j = p), d;
      })(t, n)
    : Ht('ES5').J(t, n);
  return (n ? n.A : Vo()).p.push(r), r;
}
function rm(e) {
  return (
    bt(e) || qe(22, e),
    (function t(n) {
      if (!dt(n)) return n;
      var r,
        o = n[le],
        i = zn(n);
      if (o) {
        if (!o.P && (o.i < 4 || !Ht('ES5').K(o))) return o.t;
        (o.I = !0), (r = bd(n, i)), (o.I = !1);
      } else r = bd(n, i);
      return (
        an(r, function (u, l) {
          (o && Bi(o.t, u) === l) || tm(r, u, t(l));
        }),
        i === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function bd(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return zc(e);
}
function Fc() {
  function e(i, u) {
    var l = o[i];
    return (
      l
        ? (l.enumerable = u)
        : (o[i] = l =
            {
              configurable: !0,
              enumerable: u,
              get: function () {
                var a = this[le];
                return Ko.get(a, i);
              },
              set: function (a) {
                var s = this[le];
                Ko.set(s, i, a);
              },
            }),
      l
    );
  }
  function t(i) {
    for (var u = i.length - 1; u >= 0; u--) {
      var l = i[u][le];
      if (!l.P)
        switch (l.i) {
          case 5:
            r(l) && ut(l);
            break;
          case 4:
            n(l) && ut(l);
        }
    }
  }
  function n(i) {
    for (var u = i.t, l = i.k, a = Ar(l), s = a.length - 1; s >= 0; s--) {
      var c = a[s];
      if (c !== le) {
        var p = u[c];
        if (p === void 0 && !jn(u, c)) return !0;
        var d = l[c],
          m = d && d[le];
        if (m ? m.t !== p : !nm(d, p)) return !0;
      }
    }
    var y = !!u[le];
    return a.length !== Ar(u).length + (y ? 0 : 1);
  }
  function r(i) {
    var u = i.k;
    if (u.length !== i.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(u, u.length - 1);
    if (l && !l.get) return !0;
    for (var a = 0; a < u.length; a++) if (!u.hasOwnProperty(a)) return !0;
    return !1;
  }
  var o = {};
  bc('ES5', {
    J: function (i, u) {
      var l = Array.isArray(i),
        a = (function (c, p) {
          if (c) {
            for (var d = Array(p.length), m = 0; m < p.length; m++)
              Object.defineProperty(d, '' + m, e(m, !0));
            return d;
          }
          var y = im(p);
          delete y[le];
          for (var w = Ar(y), x = 0; x < w.length; x++) {
            var v = w[x];
            y[v] = e(v, c || !!y[v].enumerable);
          }
          return Object.create(Object.getPrototypeOf(p), y);
        })(l, i),
        s = {
          i: l ? 5 : 4,
          A: u ? u.A : Vo(),
          P: !1,
          I: !1,
          D: {},
          l: u,
          t: i,
          k: a,
          o: null,
          O: !1,
          C: !1,
        };
      return Object.defineProperty(a, le, { value: s, writable: !0 }), a;
    },
    S: function (i, u, l) {
      l
        ? bt(u) && u[le].A === i && t(i.p)
        : (i.u &&
            (function a(s) {
              if (s && typeof s == 'object') {
                var c = s[le];
                if (c) {
                  var p = c.t,
                    d = c.k,
                    m = c.D,
                    y = c.i;
                  if (y === 4)
                    an(d, function (h) {
                      h !== le &&
                        (p[h] !== void 0 || jn(p, h)
                          ? m[h] || a(d[h])
                          : ((m[h] = !0), ut(c)));
                    }),
                      an(p, function (h) {
                        d[h] !== void 0 || jn(d, h) || ((m[h] = !1), ut(c));
                      });
                  else if (y === 5) {
                    if ((r(c) && (ut(c), (m.length = !0)), d.length < p.length))
                      for (var w = d.length; w < p.length; w++) m[w] = !1;
                    else for (var x = p.length; x < d.length; x++) m[x] = !0;
                    for (
                      var v = Math.min(d.length, p.length), f = 0;
                      f < v;
                      f++
                    )
                      d.hasOwnProperty(f) || (m[f] = !0),
                        m[f] === void 0 && a(d[f]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i);
    },
  });
}
function Uc() {
  function e(r) {
    if (!dt(r)) return r;
    if (Array.isArray(r)) return r.map(e);
    if (gl(r))
      return new Map(
        Array.from(r.entries()).map(function (u) {
          return [u[0], e(u[1])];
        })
      );
    if (Sl(r)) return new Set(Array.from(r).map(e));
    var o = Object.create(Object.getPrototypeOf(r));
    for (var i in r) o[i] = e(r[i]);
    return jn(r, jr) && (o[jr] = r[jr]), o;
  }
  function t(r) {
    return bt(r) ? e(r) : r;
  }
  var n = 'add';
  bc('Patches', {
    $: function (r, o) {
      return (
        o.forEach(function (i) {
          for (var u = i.path, l = i.op, a = r, s = 0; s < u.length - 1; s++) {
            var c = zn(a),
              p = '' + u[s];
            (c !== 0 && c !== 1) ||
              (p !== '__proto__' && p !== 'constructor') ||
              qe(24),
              typeof a == 'function' && p === 'prototype' && qe(24),
              typeof (a = Bi(a, p)) != 'object' && qe(15, u.join('/'));
          }
          var d = zn(a),
            m = e(i.value),
            y = u[u.length - 1];
          switch (l) {
            case 'replace':
              switch (d) {
                case 2:
                  return a.set(y, m);
                case 3:
                  qe(16);
                default:
                  return (a[y] = m);
              }
            case n:
              switch (d) {
                case 1:
                  return y === '-' ? a.push(m) : a.splice(y, 0, m);
                case 2:
                  return a.set(y, m);
                case 3:
                  return a.add(m);
                default:
                  return (a[y] = m);
              }
            case 'remove':
              switch (d) {
                case 1:
                  return a.splice(y, 1);
                case 2:
                  return a.delete(y);
                case 3:
                  return a.delete(i.value);
                default:
                  return delete a[y];
              }
            default:
              qe(17, l);
          }
        }),
        r
      );
    },
    R: function (r, o, i, u) {
      switch (r.i) {
        case 0:
        case 4:
        case 2:
          return (function (l, a, s, c) {
            var p = l.t,
              d = l.o;
            an(l.D, function (m, y) {
              var w = Bi(p, m),
                x = Bi(d, m),
                v = y ? (jn(p, m) ? 'replace' : n) : 'remove';
              if (w !== x || v !== 'replace') {
                var f = a.concat(m);
                s.push(
                  v === 'remove'
                    ? { op: v, path: f }
                    : { op: v, path: f, value: x }
                ),
                  c.push(
                    v === n
                      ? { op: 'remove', path: f }
                      : v === 'remove'
                      ? { op: n, path: f, value: t(w) }
                      : { op: 'replace', path: f, value: t(w) }
                  );
              }
            });
          })(r, o, i, u);
        case 5:
        case 1:
          return (function (l, a, s, c) {
            var p = l.t,
              d = l.D,
              m = l.o;
            if (m.length < p.length) {
              var y = [m, p];
              (p = y[0]), (m = y[1]);
              var w = [c, s];
              (s = w[0]), (c = w[1]);
            }
            for (var x = 0; x < p.length; x++)
              if (d[x] && m[x] !== p[x]) {
                var v = a.concat([x]);
                s.push({ op: 'replace', path: v, value: t(m[x]) }),
                  c.push({ op: 'replace', path: v, value: t(p[x]) });
              }
            for (var f = p.length; f < m.length; f++) {
              var h = a.concat([f]);
              s.push({ op: n, path: h, value: t(m[f]) });
            }
            p.length < m.length &&
              c.push({
                op: 'replace',
                path: a.concat(['length']),
                value: p.length,
              });
          })(r, o, i, u);
        case 3:
          return (function (l, a, s, c) {
            var p = l.t,
              d = l.o,
              m = 0;
            p.forEach(function (y) {
              if (!d.has(y)) {
                var w = a.concat([m]);
                s.push({ op: 'remove', path: w, value: y }),
                  c.unshift({ op: n, path: w, value: y });
              }
              m++;
            }),
              (m = 0),
              d.forEach(function (y) {
                if (!p.has(y)) {
                  var w = a.concat([m]);
                  s.push({ op: n, path: w, value: y }),
                    c.unshift({ op: 'remove', path: w, value: y });
                }
                m++;
              });
          })(r, o, i, u);
      }
    },
    M: function (r, o, i, u) {
      i.push({ op: 'replace', path: [], value: o === _l ? void 0 : o }),
        u.push({ op: 'replace', path: [], value: r });
    },
  });
}
function om() {
  function e(l, a) {
    function s() {
      this.constructor = l;
    }
    o(l, a), (l.prototype = ((s.prototype = a.prototype), new s()));
  }
  function t(l) {
    l.o || ((l.D = new Map()), (l.o = new Map(l.t)));
  }
  function n(l) {
    l.o ||
      ((l.o = new Set()),
      l.t.forEach(function (a) {
        if (dt(a)) {
          var s = Wo(l.A.h, a, l);
          l.p.set(a, s), l.o.add(s);
        } else l.o.add(a);
      }));
  }
  function r(l) {
    l.O && qe(3, JSON.stringify(Fe(l)));
  }
  var o = function (l, a) {
      return (o =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, c) {
            s.__proto__ = c;
          }) ||
        function (s, c) {
          for (var p in c) c.hasOwnProperty(p) && (s[p] = c[p]);
        })(l, a);
    },
    i = (function () {
      function l(s, c) {
        return (
          (this[le] = {
            i: 2,
            l: c,
            A: c ? c.A : Vo(),
            P: !1,
            I: !1,
            o: void 0,
            D: void 0,
            t: s,
            k: this,
            C: !1,
            O: !1,
          }),
          this
        );
      }
      e(l, Map);
      var a = l.prototype;
      return (
        Object.defineProperty(a, 'size', {
          get: function () {
            return Fe(this[le]).size;
          },
        }),
        (a.has = function (s) {
          return Fe(this[le]).has(s);
        }),
        (a.set = function (s, c) {
          var p = this[le];
          return (
            r(p),
            (Fe(p).has(s) && Fe(p).get(s) === c) ||
              (t(p), ut(p), p.D.set(s, !0), p.o.set(s, c), p.D.set(s, !0)),
            this
          );
        }),
        (a.delete = function (s) {
          if (!this.has(s)) return !1;
          var c = this[le];
          return (
            r(c),
            t(c),
            ut(c),
            c.t.has(s) ? c.D.set(s, !1) : c.D.delete(s),
            c.o.delete(s),
            !0
          );
        }),
        (a.clear = function () {
          var s = this[le];
          r(s),
            Fe(s).size &&
              (t(s),
              ut(s),
              (s.D = new Map()),
              an(s.t, function (c) {
                s.D.set(c, !1);
              }),
              s.o.clear());
        }),
        (a.forEach = function (s, c) {
          var p = this;
          Fe(this[le]).forEach(function (d, m) {
            s.call(c, p.get(m), m, p);
          });
        }),
        (a.get = function (s) {
          var c = this[le];
          r(c);
          var p = Fe(c).get(s);
          if (c.I || !dt(p) || p !== c.t.get(s)) return p;
          var d = Wo(c.A.h, p, c);
          return t(c), c.o.set(s, d), d;
        }),
        (a.keys = function () {
          return Fe(this[le]).keys();
        }),
        (a.values = function () {
          var s,
            c = this,
            p = this.keys();
          return (
            ((s = {})[Ci] = function () {
              return c.values();
            }),
            (s.next = function () {
              var d = p.next();
              return d.done ? d : { done: !1, value: c.get(d.value) };
            }),
            s
          );
        }),
        (a.entries = function () {
          var s,
            c = this,
            p = this.keys();
          return (
            ((s = {})[Ci] = function () {
              return c.entries();
            }),
            (s.next = function () {
              var d = p.next();
              if (d.done) return d;
              var m = c.get(d.value);
              return { done: !1, value: [d.value, m] };
            }),
            s
          );
        }),
        (a[Ci] = function () {
          return this.entries();
        }),
        l
      );
    })(),
    u = (function () {
      function l(s, c) {
        return (
          (this[le] = {
            i: 3,
            l: c,
            A: c ? c.A : Vo(),
            P: !1,
            I: !1,
            o: void 0,
            t: s,
            k: this,
            p: new Map(),
            O: !1,
            C: !1,
          }),
          this
        );
      }
      e(l, Set);
      var a = l.prototype;
      return (
        Object.defineProperty(a, 'size', {
          get: function () {
            return Fe(this[le]).size;
          },
        }),
        (a.has = function (s) {
          var c = this[le];
          return (
            r(c),
            c.o
              ? !!c.o.has(s) || !(!c.p.has(s) || !c.o.has(c.p.get(s)))
              : c.t.has(s)
          );
        }),
        (a.add = function (s) {
          var c = this[le];
          return r(c), this.has(s) || (n(c), ut(c), c.o.add(s)), this;
        }),
        (a.delete = function (s) {
          if (!this.has(s)) return !1;
          var c = this[le];
          return (
            r(c),
            n(c),
            ut(c),
            c.o.delete(s) || (!!c.p.has(s) && c.o.delete(c.p.get(s)))
          );
        }),
        (a.clear = function () {
          var s = this[le];
          r(s), Fe(s).size && (n(s), ut(s), s.o.clear());
        }),
        (a.values = function () {
          var s = this[le];
          return r(s), n(s), s.o.values();
        }),
        (a.entries = function () {
          var s = this[le];
          return r(s), n(s), s.o.entries();
        }),
        (a.keys = function () {
          return this.values();
        }),
        (a[Ci] = function () {
          return this.values();
        }),
        (a.forEach = function (s, c) {
          for (var p = this.values(), d = p.next(); !d.done; )
            s.call(c, d.value, d.value, this), (d = p.next());
        }),
        l
      );
    })();
  bc('MapSet', {
    N: function (l, a) {
      return new i(l, a);
    },
    T: function (l, a) {
      return new u(l, a);
    },
  });
}
function TS() {
  Fc(), om(), Uc();
}
function IS(e) {
  return e;
}
function jS(e) {
  return e;
}
var Fd,
  Ho,
  qc = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  AS = typeof Map < 'u',
  NS = typeof Set < 'u',
  Ud = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  _l = qc
    ? Symbol.for('immer-nothing')
    : (((Fd = {})['immer-nothing'] = !0), Fd),
  jr = qc ? Symbol.for('immer-draftable') : '__$immer_draftable',
  le = qc ? Symbol.for('immer-state') : '__$immer_state',
  Ci = (typeof Symbol < 'u' && Symbol.iterator) || '@@iterator',
  MS = '' + Object.prototype.constructor,
  Ar =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  im =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Ar(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  Is = {},
  Ko = {
    get: function (e, t) {
      if (t === le) return e;
      var n = Fe(e);
      if (!jn(n, t))
        return (function (o, i, u) {
          var l,
            a = Ld(i, u);
          return a
            ? 'value' in a
              ? a.value
              : (l = a.get) === null || l === void 0
              ? void 0
              : l.call(o.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !dt(r)
        ? r
        : r === Sa(e.t, t)
        ? (wa(e), (e.o[t] = Wo(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in Fe(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Fe(e));
    },
    set: function (e, t, n) {
      var r = Ld(Fe(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var o = Sa(Fe(e), t),
          i = o == null ? void 0 : o[le];
        if (i && i.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
        if (nm(n, o) && (n !== void 0 || jn(e.t, t))) return !0;
        wa(e), ut(e);
      }
      return (
        (e.o[t] === n && typeof n != 'number' && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        Sa(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), wa(e), ut(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Fe(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      qe(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      qe(12);
    },
  },
  yo = {};
an(Ko, function (e, t) {
  yo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (yo.deleteProperty = function (e, t) {
    return yo.set.call(this, e, t, void 0);
  }),
  (yo.set = function (e, t, n) {
    return Ko.set.call(this, e[0], t, n, e[0]);
  });
var um = (function () {
    function e(n) {
      var r = this;
      (this.g = Ud),
        (this.F = !0),
        (this.produce = function (o, i, u) {
          if (typeof o == 'function' && typeof i != 'function') {
            var l = i;
            i = o;
            var a = r;
            return function (w) {
              var x = this;
              w === void 0 && (w = l);
              for (
                var v = arguments.length, f = Array(v > 1 ? v - 1 : 0), h = 1;
                h < v;
                h++
              )
                f[h - 1] = arguments[h];
              return a.produce(w, function (g) {
                var _;
                return (_ = i).call.apply(_, [x, g].concat(f));
              });
            };
          }
          var s;
          if (
            (typeof i != 'function' && qe(6),
            u !== void 0 && typeof u != 'function' && qe(7),
            dt(o))
          ) {
            var c = $d(r),
              p = Wo(r, o, void 0),
              d = !0;
            try {
              (s = i(p)), (d = !1);
            } finally {
              d ? Eu(c) : Ts(c);
            }
            return typeof Promise < 'u' && s instanceof Promise
              ? s.then(
                  function (w) {
                    return ya(c, u), ga(w, c);
                  },
                  function (w) {
                    throw (Eu(c), w);
                  }
                )
              : (ya(c, u), ga(s, c));
          }
          if (!o || typeof o != 'object') {
            if (
              ((s = i(o)) === void 0 && (s = o),
              s === _l && (s = void 0),
              r.F && wl(s, !0),
              u)
            ) {
              var m = [],
                y = [];
              Ht('Patches').M(o, s, m, y), u(m, y);
            }
            return s;
          }
          qe(21, o);
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == 'function')
            return function (s) {
              for (
                var c = arguments.length, p = Array(c > 1 ? c - 1 : 0), d = 1;
                d < c;
                d++
              )
                p[d - 1] = arguments[d];
              return r.produceWithPatches(s, function (m) {
                return o.apply(void 0, [m].concat(p));
              });
            };
          var u,
            l,
            a = r.produce(o, i, function (s, c) {
              (u = s), (l = c);
            });
          return typeof Promise < 'u' && a instanceof Promise
            ? a.then(function (s) {
                return [s, u, l];
              })
            : [a, u, l];
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        dt(n) || qe(8), bt(n) && (n = rm(n));
        var r = $d(this),
          o = Wo(this, n, void 0);
        return (o[le].C = !0), Ts(r), o;
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[le],
          i = o.A;
        return ya(i, r), ga(void 0, i);
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Ud && qe(20), (this.g = n);
      }),
      (t.applyPatches = function (n, r) {
        var o;
        for (o = r.length - 1; o >= 0; o--) {
          var i = r[o];
          if (i.path.length === 0 && i.op === 'replace') {
            n = i.value;
            break;
          }
        }
        o > -1 && (r = r.slice(o + 1));
        var u = Ht('Patches').$;
        return bt(n)
          ? u(n, r)
          : this.produce(n, function (l) {
              return u(l, r);
            });
      }),
      e
    );
  })(),
  St = new um(),
  Ur = St.produce,
  lm = St.produceWithPatches.bind(St),
  DS = St.setAutoFreeze.bind(St),
  $S = St.setUseProxies.bind(St),
  am = St.applyPatches.bind(St),
  zS = St.createDraft.bind(St),
  LS = St.finishDraft.bind(St);
const bS = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Ur,
      Immer: um,
      applyPatches: am,
      castDraft: IS,
      castImmutable: jS,
      createDraft: zS,
      current: rm,
      enableAllPlugins: TS,
      enableES5: Fc,
      enableMapSet: om,
      enablePatches: Uc,
      finishDraft: LS,
      freeze: wl,
      immerable: jr,
      isDraft: bt,
      isDraftable: dt,
      nothing: _l,
      original: OS,
      produce: Ur,
      produceWithPatches: lm,
      setAutoFreeze: DS,
      setUseProxies: $S,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function FS(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function qd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Qd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qd(Object(n), !0).forEach(function (r) {
          FS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : qd(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function We(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var Bd = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  _a = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  Go = {
    INIT: '@@redux/INIT' + _a(),
    REPLACE: '@@redux/REPLACE' + _a(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + _a();
    },
  };
function US(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function El(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(We(0));
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(We(1));
    return n(El)(e, t);
  }
  if (typeof e != 'function') throw new Error(We(2));
  var o = e,
    i = t,
    u = [],
    l = u,
    a = !1;
  function s() {
    l === u && (l = u.slice());
  }
  function c() {
    if (a) throw new Error(We(3));
    return i;
  }
  function p(w) {
    if (typeof w != 'function') throw new Error(We(4));
    if (a) throw new Error(We(5));
    var x = !0;
    return (
      s(),
      l.push(w),
      function () {
        if (!!x) {
          if (a) throw new Error(We(6));
          (x = !1), s();
          var f = l.indexOf(w);
          l.splice(f, 1), (u = null);
        }
      }
    );
  }
  function d(w) {
    if (!US(w)) throw new Error(We(7));
    if (typeof w.type > 'u') throw new Error(We(8));
    if (a) throw new Error(We(9));
    try {
      (a = !0), (i = o(i, w));
    } finally {
      a = !1;
    }
    for (var x = (u = l), v = 0; v < x.length; v++) {
      var f = x[v];
      f();
    }
    return w;
  }
  function m(w) {
    if (typeof w != 'function') throw new Error(We(10));
    (o = w), d({ type: Go.REPLACE });
  }
  function y() {
    var w,
      x = p;
    return (
      (w = {
        subscribe: function (f) {
          if (typeof f != 'object' || f === null) throw new Error(We(11));
          function h() {
            f.next && f.next(c());
          }
          h();
          var g = x(h);
          return { unsubscribe: g };
        },
      }),
      (w[Bd] = function () {
        return this;
      }),
      w
    );
  }
  return (
    d({ type: Go.INIT }),
    (r = { dispatch: d, subscribe: p, getState: c, replaceReducer: m }),
    (r[Bd] = y),
    r
  );
}
var qS = El;
function QS(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Go.INIT });
    if (typeof r > 'u') throw new Error(We(12));
    if (typeof n(void 0, { type: Go.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(We(13));
  });
}
function Qc(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == 'function' && (n[o] = e[o]);
  }
  var i = Object.keys(n),
    u;
  try {
    QS(n);
  } catch (l) {
    u = l;
  }
  return function (a, s) {
    if ((a === void 0 && (a = {}), u)) throw u;
    for (var c = !1, p = {}, d = 0; d < i.length; d++) {
      var m = i[d],
        y = n[m],
        w = a[m],
        x = y(w, s);
      if (typeof x > 'u') throw (s && s.type, new Error(We(14)));
      (p[m] = x), (c = c || x !== w);
    }
    return (c = c || i.length !== Object.keys(a).length), c ? p : a;
  };
}
function Vd(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function sm(e, t) {
  if (typeof e == 'function') return Vd(e, t);
  if (typeof e != 'object' || e === null) throw new Error(We(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == 'function' && (n[r] = Vd(o, t));
  }
  return n;
}
function qr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments));
        };
      });
}
function cm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(We(15));
        },
        u = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        l = t.map(function (a) {
          return a(u);
        });
      return (
        (i = qr.apply(void 0, l)(o.dispatch)),
        Qd(Qd({}, o), {}, { dispatch: i })
      );
    };
  };
}
const BS = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      __DO_NOT_USE__ActionTypes: Go,
      applyMiddleware: cm,
      bindActionCreators: sm,
      combineReducers: Qc,
      compose: qr,
      createStore: El,
      legacy_createStore: qS,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
var Pu = 'NOT_FOUND';
function VS(e) {
  var t;
  return {
    get: function (r) {
      return t && e(t.key, r) ? t.value : Pu;
    },
    put: function (r, o) {
      t = { key: r, value: o };
    },
    getEntries: function () {
      return t ? [t] : [];
    },
    clear: function () {
      t = void 0;
    },
  };
}
function WS(e, t) {
  var n = [];
  function r(l) {
    var a = n.findIndex(function (c) {
      return t(l, c.key);
    });
    if (a > -1) {
      var s = n[a];
      return a > 0 && (n.splice(a, 1), n.unshift(s)), s.value;
    }
    return Pu;
  }
  function o(l, a) {
    r(l) === Pu && (n.unshift({ key: l, value: a }), n.length > e && n.pop());
  }
  function i() {
    return n;
  }
  function u() {
    n = [];
  }
  return { get: r, put: o, getEntries: i, clear: u };
}
var fm = function (t, n) {
  return t === n;
};
function HS(e) {
  return function (n, r) {
    if (n === null || r === null || n.length !== r.length) return !1;
    for (var o = n.length, i = 0; i < o; i++) if (!e(n[i], r[i])) return !1;
    return !0;
  };
}
function Ou(e, t) {
  var n = typeof t == 'object' ? t : { equalityCheck: t },
    r = n.equalityCheck,
    o = r === void 0 ? fm : r,
    i = n.maxSize,
    u = i === void 0 ? 1 : i,
    l = n.resultEqualityCheck,
    a = HS(o),
    s = u === 1 ? VS(a) : WS(u, a);
  function c() {
    var p = s.get(arguments);
    if (p === Pu) {
      if (((p = e.apply(null, arguments)), l)) {
        var d = s.getEntries(),
          m = d.find(function (y) {
            return l(y.value, p);
          });
        m && (p = m.value);
      }
      s.put(arguments, p);
    }
    return p;
  }
  return (
    (c.clearCache = function () {
      return s.clear();
    }),
    c
  );
}
function KS(e) {
  var t = Array.isArray(e[0]) ? e[0] : e;
  if (
    !t.every(function (r) {
      return typeof r == 'function';
    })
  ) {
    var n = t
      .map(function (r) {
        return typeof r == 'function'
          ? 'function ' + (r.name || 'unnamed') + '()'
          : typeof r;
      })
      .join(', ');
    throw new Error(
      'createSelector expects all input-selectors to be functions, but received the following types: [' +
        n +
        ']'
    );
  }
  return t;
}
function dm(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = function () {
    for (var u = arguments.length, l = new Array(u), a = 0; a < u; a++)
      l[a] = arguments[a];
    var s = 0,
      c,
      p = { memoizeOptions: void 0 },
      d = l.pop();
    if (
      (typeof d == 'object' && ((p = d), (d = l.pop())), typeof d != 'function')
    )
      throw new Error(
        'createSelector expects an output function after the inputs, but received: [' +
          typeof d +
          ']'
      );
    var m = p,
      y = m.memoizeOptions,
      w = y === void 0 ? n : y,
      x = Array.isArray(w) ? w : [w],
      v = KS(l),
      f = e.apply(
        void 0,
        [
          function () {
            return s++, d.apply(null, arguments);
          },
        ].concat(x)
      ),
      h = e(function () {
        for (var _ = [], E = v.length, P = 0; P < E; P++)
          _.push(v[P].apply(null, arguments));
        return (c = f.apply(null, _)), c;
      });
    return (
      Object.assign(h, {
        resultFunc: d,
        memoizedResultFunc: f,
        dependencies: v,
        lastResult: function () {
          return c;
        },
        recomputations: function () {
          return s;
        },
        resetRecomputations: function () {
          return (s = 0);
        },
      }),
      h
    );
  };
  return o;
}
var tn = dm(Ou),
  GS = function (t, n) {
    if ((n === void 0 && (n = tn), typeof t != 'object'))
      throw new Error(
        'createStructuredSelector expects first argument to be an object ' +
          ('where each property is a selector, instead received a ' + typeof t)
      );
    var r = Object.keys(t),
      o = n(
        r.map(function (i) {
          return t[i];
        }),
        function () {
          for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++)
            u[l] = arguments[l];
          return u.reduce(function (a, s, c) {
            return (a[r[c]] = s), a;
          }, {});
        }
      );
    return o;
  };
const YS = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      defaultMemoize: Ou,
      defaultEqualityCheck: fm,
      createSelectorCreator: dm,
      createSelector: tn,
      createStructuredSelector: GS,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function pm(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState;
    return function (u) {
      return function (l) {
        return typeof l == 'function' ? l(o, i, e) : u(l);
      };
    };
  };
  return t;
}
var vm = pm();
vm.withExtraArgument = pm;
const js = vm,
  XS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: js },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
var JS =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o;
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  ZS =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        u;
      return (
        (u = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == 'function' &&
          (u[Symbol.iterator] = function () {
            return this;
          }),
        u
      );
      function l(s) {
        return function (c) {
          return a([s, c]);
        };
      }
      function a(s) {
        if (r) throw new TypeError('Generator is already executing.');
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  s[0] & 2
                    ? o.return
                    : s[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, s[1])).done)
            )
              return i;
            switch (((o = 0), i && (s = [s[0] & 2, i.value]), s[0])) {
              case 0:
              case 1:
                i = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (o = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = s);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(s);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (o = 0);
          } finally {
            r = i = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  Cu =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  ew = Object.defineProperty,
  tw = Object.defineProperties,
  nw = Object.getOwnPropertyDescriptors,
  Wd = Object.getOwnPropertySymbols,
  rw = Object.prototype.hasOwnProperty,
  ow = Object.prototype.propertyIsEnumerable,
  Hd = function (e, t, n) {
    return t in e
      ? ew(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  An = function (e, t) {
    for (var n in t || (t = {})) rw.call(t, n) && Hd(e, n, t[n]);
    if (Wd)
      for (var r = 0, o = Wd(t); r < o.length; r++) {
        var n = o[r];
        ow.call(t, n) && Hd(e, n, t[n]);
      }
    return e;
  },
  Ea = function (e, t) {
    return tw(e, nw(t));
  },
  iw = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (a) {
          try {
            l(n.next(a));
          } catch (s) {
            o(s);
          }
        },
        u = function (a) {
          try {
            l(n.throw(a));
          } catch (s) {
            o(s);
          }
        },
        l = function (a) {
          return a.done ? r(a.value) : Promise.resolve(a.value).then(i, u);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  uw =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? qr
              : qr.apply(null, arguments);
        };
function oi(e) {
  if (typeof e != 'object' || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var lw = (function (e) {
  JS(t, e);
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    var o = e.apply(this, n) || this;
    return Object.setPrototypeOf(o, t.prototype), o;
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return e.prototype.concat.apply(this, n);
    }),
    (t.prototype.prepend = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return n.length === 1 && Array.isArray(n[0])
        ? new (t.bind.apply(t, Cu([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, Cu([void 0], n.concat(this))))();
    }),
    t
  );
})(Array);
function As(e) {
  return dt(e) ? Ur(e, function () {}) : e;
}
function aw(e) {
  return typeof e == 'boolean';
}
function sw() {
  return function (t) {
    return cw(t);
  };
}
function cw(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new lw();
  return (
    n && (aw(n) ? r.push(js) : r.push(js.withExtraArgument(n.extraArgument))), r
  );
}
var fw = !0;
function dw(e) {
  var t = sw(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    i = n.middleware,
    u = i === void 0 ? t() : i,
    l = n.devTools,
    a = l === void 0 ? !0 : l,
    s = n.preloadedState,
    c = s === void 0 ? void 0 : s,
    p = n.enhancers,
    d = p === void 0 ? void 0 : p,
    m;
  if (typeof o == 'function') m = o;
  else if (oi(o)) m = Qc(o);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var y = u;
  typeof y == 'function' && (y = y(t));
  var w = cm.apply(void 0, y),
    x = qr;
  a && (x = uw(An({ trace: !fw }, typeof a == 'object' && a)));
  var v = [w];
  Array.isArray(d) ? (v = Cu([w], d)) : typeof d == 'function' && (v = d(v));
  var f = x.apply(void 0, v);
  return El(m, c, f);
}
function ft(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    if (t) {
      var i = t.apply(void 0, r);
      if (!i) throw new Error('prepareAction did not return an object');
      return An(
        An({ type: e, payload: i.payload }, 'meta' in i && { meta: i.meta }),
        'error' in i && { error: i.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return '' + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function hm(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (i, u) {
        var l = typeof i == 'string' ? i : i.type;
        if (l in t)
          throw new Error(
            'addCase cannot be called with two reducers for the same action type'
          );
        return (t[l] = u), o;
      },
      addMatcher: function (i, u) {
        return n.push({ matcher: i, reducer: u }), o;
      },
      addDefaultCase: function (i) {
        return (r = i), o;
      },
    };
  return e(o), [t, n, r];
}
function pw(e) {
  return typeof e == 'function';
}
function vw(e, t, n, r) {
  n === void 0 && (n = []);
  var o = typeof t == 'function' ? hm(t) : [t, n, r],
    i = o[0],
    u = o[1],
    l = o[2],
    a;
  if (pw(e))
    a = function () {
      return As(e());
    };
  else {
    var s = As(e);
    a = function () {
      return s;
    };
  }
  function c(p, d) {
    p === void 0 && (p = a());
    var m = Cu(
      [i[d.type]],
      u
        .filter(function (y) {
          var w = y.matcher;
          return w(d);
        })
        .map(function (y) {
          var w = y.reducer;
          return w;
        })
    );
    return (
      m.filter(function (y) {
        return !!y;
      }).length === 0 && (m = [l]),
      m.reduce(function (y, w) {
        if (w)
          if (bt(y)) {
            var x = y,
              v = w(x, d);
            return v === void 0 ? y : v;
          } else {
            if (dt(y))
              return Ur(y, function (f) {
                return w(f, d);
              });
            var v = w(y, d);
            if (v === void 0) {
              if (y === null) return y;
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              );
            }
            return v;
          }
        return y;
      }, p)
    );
  }
  return (c.getInitialState = a), c;
}
function hw(e, t) {
  return e + '/' + t;
}
function fo(e) {
  var t = e.name;
  if (!t) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var n =
      typeof e.initialState == 'function' ? e.initialState : As(e.initialState),
    r = e.reducers || {},
    o = Object.keys(r),
    i = {},
    u = {},
    l = {};
  o.forEach(function (c) {
    var p = r[c],
      d = hw(t, c),
      m,
      y;
    'reducer' in p ? ((m = p.reducer), (y = p.prepare)) : (m = p),
      (i[c] = m),
      (u[d] = m),
      (l[c] = y ? ft(d, y) : ft(d));
  });
  function a() {
    var c =
        typeof e.extraReducers == 'function'
          ? hm(e.extraReducers)
          : [e.extraReducers],
      p = c[0],
      d = p === void 0 ? {} : p,
      m = c[1],
      y = m === void 0 ? [] : m,
      w = c[2],
      x = w === void 0 ? void 0 : w,
      v = An(An({}, d), u);
    return vw(n, v, y, x);
  }
  var s;
  return {
    name: t,
    reducer: function (c, p) {
      return s || (s = a()), s(c, p);
    },
    actions: l,
    caseReducers: i,
    getInitialState: function () {
      return s || (s = a()), s.getInitialState();
    },
  };
}
var mw = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  mm = function (e) {
    e === void 0 && (e = 21);
    for (var t = '', n = e; n--; ) t += mw[(Math.random() * 64) | 0];
    return t;
  },
  yw = ['name', 'message', 'stack', 'code'],
  xa = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Kd = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  gw = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, n = 0, r = yw; n < r.length; n++) {
        var o = r[n];
        typeof e[o] == 'string' && (t[o] = e[o]);
      }
      return t;
    }
    return { message: String(e) };
  };
function Gd(e, t, n) {
  var r = ft(e + '/fulfilled', function (a, s, c, p) {
      return {
        payload: a,
        meta: Ea(An({}, p || {}), {
          arg: c,
          requestId: s,
          requestStatus: 'fulfilled',
        }),
      };
    }),
    o = ft(e + '/pending', function (a, s, c) {
      return {
        payload: void 0,
        meta: Ea(An({}, c || {}), {
          arg: s,
          requestId: a,
          requestStatus: 'pending',
        }),
      };
    }),
    i = ft(e + '/rejected', function (a, s, c, p, d) {
      return {
        payload: p,
        error: ((n && n.serializeError) || gw)(a || 'Rejected'),
        meta: Ea(An({}, d || {}), {
          arg: c,
          requestId: s,
          rejectedWithValue: !!p,
          requestStatus: 'rejected',
          aborted: (a == null ? void 0 : a.name) === 'AbortError',
          condition: (a == null ? void 0 : a.name) === 'ConditionError',
        }),
      };
    }),
    u =
      typeof AbortController < 'u'
        ? AbortController
        : (function () {
            function a() {
              this.signal = {
                aborted: !1,
                addEventListener: function () {},
                dispatchEvent: function () {
                  return !1;
                },
                onabort: function () {},
                removeEventListener: function () {},
                reason: void 0,
                throwIfAborted: function () {},
              };
            }
            return (a.prototype.abort = function () {}), a;
          })();
  function l(a) {
    return function (s, c, p) {
      var d = n != null && n.idGenerator ? n.idGenerator(a) : mm(),
        m = new u(),
        y,
        w = new Promise(function (h, g) {
          return m.signal.addEventListener('abort', function () {
            return g({ name: 'AbortError', message: y || 'Aborted' });
          });
        }),
        x = !1;
      function v(h) {
        x && ((y = h), m.abort());
      }
      var f = (function () {
        return iw(this, null, function () {
          var h, g, _, E, P, O;
          return ZS(this, function (T) {
            switch (T.label) {
              case 0:
                return (
                  T.trys.push([0, 4, , 5]),
                  (E =
                    (h = n == null ? void 0 : n.condition) == null
                      ? void 0
                      : h.call(n, a, { getState: c, extra: p })),
                  ww(E) ? [4, E] : [3, 2]
                );
              case 1:
                (E = T.sent()), (T.label = 2);
              case 2:
                if (E === !1)
                  throw {
                    name: 'ConditionError',
                    message:
                      'Aborted due to condition callback returning false.',
                  };
                return (
                  (x = !0),
                  s(
                    o(
                      d,
                      a,
                      (g = n == null ? void 0 : n.getPendingMeta) == null
                        ? void 0
                        : g.call(
                            n,
                            { requestId: d, arg: a },
                            { getState: c, extra: p }
                          )
                    )
                  ),
                  [
                    4,
                    Promise.race([
                      w,
                      Promise.resolve(
                        t(a, {
                          dispatch: s,
                          getState: c,
                          extra: p,
                          requestId: d,
                          signal: m.signal,
                          rejectWithValue: function (R, M) {
                            return new xa(R, M);
                          },
                          fulfillWithValue: function (R, M) {
                            return new Kd(R, M);
                          },
                        })
                      ).then(function (R) {
                        if (R instanceof xa) throw R;
                        return R instanceof Kd
                          ? r(R.payload, d, a, R.meta)
                          : r(R, d, a);
                      }),
                    ]),
                  ]
                );
              case 3:
                return (_ = T.sent()), [3, 5];
              case 4:
                return (
                  (P = T.sent()),
                  (_ =
                    P instanceof xa
                      ? i(null, d, a, P.payload, P.meta)
                      : i(P, d, a)),
                  [3, 5]
                );
              case 5:
                return (
                  (O =
                    n &&
                    !n.dispatchConditionRejection &&
                    i.match(_) &&
                    _.meta.condition),
                  O || s(_),
                  [2, _]
                );
            }
          });
        });
      })();
      return Object.assign(f, {
        abort: v,
        requestId: d,
        arg: a,
        unwrap: function () {
          return f.then(Sw);
        },
      });
    };
  }
  return Object.assign(l, {
    pending: o,
    rejected: i,
    fulfilled: r,
    typePrefix: e,
  });
}
function Sw(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function ww(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function';
}
var _w = function (e) {
    return e && typeof e.match == 'function';
  },
  ym = function (e, t) {
    return _w(e) ? e.match(t) : e(t);
  };
function Gr() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.some(function (r) {
      return ym(r, n);
    });
  };
}
function Co() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.every(function (r) {
      return ym(r, n);
    });
  };
}
function xl(e, t) {
  if (!e || !e.meta) return !1;
  var n = typeof e.meta.requestId == 'string',
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function ii(e) {
  return (
    typeof e[0] == 'function' &&
    'pending' in e[0] &&
    'fulfilled' in e[0] &&
    'rejected' in e[0]
  );
}
function Bc() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return xl(n, ['pending']);
      }
    : ii(e)
    ? function (n) {
        var r = e.map(function (i) {
            return i.pending;
          }),
          o = Gr.apply(void 0, r);
        return o(n);
      }
    : Bc()(e[0]);
}
function Yo() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return xl(n, ['rejected']);
      }
    : ii(e)
    ? function (n) {
        var r = e.map(function (i) {
            return i.rejected;
          }),
          o = Gr.apply(void 0, r);
        return o(n);
      }
    : Yo()(e[0]);
}
function kl() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = function (r) {
    return r && r.meta && r.meta.rejectedWithValue;
  };
  return e.length === 0
    ? function (r) {
        var o = Co(Yo.apply(void 0, e), n);
        return o(r);
      }
    : ii(e)
    ? function (r) {
        var o = Co(Yo.apply(void 0, e), n);
        return o(r);
      }
    : kl()(e[0]);
}
function or() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return xl(n, ['fulfilled']);
      }
    : ii(e)
    ? function (n) {
        var r = e.map(function (i) {
            return i.fulfilled;
          }),
          o = Gr.apply(void 0, r);
        return o(n);
      }
    : or()(e[0]);
}
function Ns() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return xl(n, ['pending', 'fulfilled', 'rejected']);
      }
    : ii(e)
    ? function (n) {
        for (var r = [], o = 0, i = e; o < i.length; o++) {
          var u = i[o];
          r.push(u.pending, u.rejected, u.fulfilled);
        }
        var l = Gr.apply(void 0, r);
        return l(n);
      }
    : Ns()(e[0]);
}
var Vc = 'listenerMiddleware';
ft(Vc + '/add');
ft(Vc + '/removeAll');
ft(Vc + '/remove');
Fc();
var ui = { exports: {} },
  gm = {};
const cr = ju(bS),
  ka = ju(BS),
  Yd = ju(YS),
  Ew = ju(XS);
(function (e) {
  var t,
    n =
      (ar && ar.__extends) ||
      ((t = function (S, k) {
        return (
          (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (C, j) {
                C.__proto__ = j;
              }) ||
            function (C, j) {
              for (var A in j)
                Object.prototype.hasOwnProperty.call(j, A) && (C[A] = j[A]);
            }),
          t(S, k)
        );
      }),
      function (S, k) {
        if (typeof k != 'function' && k !== null)
          throw new TypeError(
            'Class extends value ' + String(k) + ' is not a constructor or null'
          );
        function C() {
          this.constructor = S;
        }
        t(S, k),
          (S.prototype =
            k === null
              ? Object.create(k)
              : ((C.prototype = k.prototype), new C()));
      }),
    r =
      (ar && ar.__generator) ||
      function (S, k) {
        var C,
          j,
          A,
          V,
          X = {
            label: 0,
            sent: function () {
              if (1 & A[0]) throw A[1];
              return A[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (V = { next: U(0), throw: U(1), return: U(2) }),
          typeof Symbol == 'function' &&
            (V[Symbol.iterator] = function () {
              return this;
            }),
          V
        );
        function U(ie) {
          return function (q) {
            return (function (D) {
              if (C) throw new TypeError('Generator is already executing.');
              for (; X; )
                try {
                  if (
                    ((C = 1),
                    j &&
                      (A =
                        2 & D[0]
                          ? j.return
                          : D[0]
                          ? j.throw || ((A = j.return) && A.call(j), 0)
                          : j.next) &&
                      !(A = A.call(j, D[1])).done)
                  )
                    return A;
                  switch (((j = 0), A && (D = [2 & D[0], A.value]), D[0])) {
                    case 0:
                    case 1:
                      A = D;
                      break;
                    case 4:
                      return X.label++, { value: D[1], done: !1 };
                    case 5:
                      X.label++, (j = D[1]), (D = [0]);
                      continue;
                    case 7:
                      (D = X.ops.pop()), X.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (A = (A = X.trys).length > 0 && A[A.length - 1]) ||
                          (D[0] !== 6 && D[0] !== 2)
                        )
                      ) {
                        X = 0;
                        continue;
                      }
                      if (D[0] === 3 && (!A || (D[1] > A[0] && D[1] < A[3]))) {
                        X.label = D[1];
                        break;
                      }
                      if (D[0] === 6 && X.label < A[1]) {
                        (X.label = A[1]), (A = D);
                        break;
                      }
                      if (A && X.label < A[2]) {
                        (X.label = A[2]), X.ops.push(D);
                        break;
                      }
                      A[2] && X.ops.pop(), X.trys.pop();
                      continue;
                  }
                  D = k.call(S, X);
                } catch (b) {
                  (D = [6, b]), (j = 0);
                } finally {
                  C = A = 0;
                }
              if (5 & D[0]) throw D[1];
              return { value: D[0] ? D[1] : void 0, done: !0 };
            })([ie, q]);
          };
        }
      },
    o =
      (ar && ar.__spreadArray) ||
      function (S, k) {
        for (var C = 0, j = k.length, A = S.length; C < j; C++, A++)
          S[A] = k[C];
        return S;
      },
    i = Object.create,
    u = Object.defineProperty,
    l = Object.defineProperties,
    a = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyDescriptors,
    c = Object.getOwnPropertyNames,
    p = Object.getOwnPropertySymbols,
    d = Object.getPrototypeOf,
    m = Object.prototype.hasOwnProperty,
    y = Object.prototype.propertyIsEnumerable,
    w = function (S, k, C) {
      return k in S
        ? u(S, k, { enumerable: !0, configurable: !0, writable: !0, value: C })
        : (S[k] = C);
    },
    x = function (S, k) {
      for (var C in k || (k = {})) m.call(k, C) && w(S, C, k[C]);
      if (p)
        for (var j = 0, A = p(k); j < A.length; j++)
          y.call(k, (C = A[j])) && w(S, C, k[C]);
      return S;
    },
    v = function (S, k) {
      return l(S, s(k));
    },
    f = function (S) {
      return u(S, '__esModule', { value: !0 });
    },
    h = function (S, k, C) {
      if ((k && typeof k == 'object') || typeof k == 'function')
        for (
          var j = function (X) {
              m.call(S, X) ||
                X === 'default' ||
                u(S, X, {
                  get: function () {
                    return k[X];
                  },
                  enumerable: !(C = a(k, X)) || C.enumerable,
                });
            },
            A = 0,
            V = c(k);
          A < V.length;
          A++
        )
          j(V[A]);
      return S;
    },
    g = function (S) {
      return h(
        f(
          u(
            S != null ? i(d(S)) : {},
            'default',
            S && S.__esModule && 'default' in S
              ? {
                  get: function () {
                    return S.default;
                  },
                  enumerable: !0,
                }
              : { value: S, enumerable: !0 }
          )
        ),
        S
      );
    },
    _ = function (S, k, C) {
      return new Promise(function (j, A) {
        var V = function (ie) {
            try {
              U(C.next(ie));
            } catch (q) {
              A(q);
            }
          },
          X = function (ie) {
            try {
              U(C.throw(ie));
            } catch (q) {
              A(q);
            }
          },
          U = function (ie) {
            return ie.done ? j(ie.value) : Promise.resolve(ie.value).then(V, X);
          };
        U((C = C.apply(S, k)).next());
      });
    };
  f(e),
    (function (S, k) {
      for (var C in k) u(S, C, { get: k[C], enumerable: !0 });
    })(e, {
      MiddlewareArray: function () {
        return I;
      },
      TaskAbortError: function () {
        return to;
      },
      addListener: function () {
        return pf;
      },
      clearAllListeners: function () {
        return vf;
      },
      configureStore: function () {
        return be;
      },
      createAction: function () {
        return Te;
      },
      createAsyncThunk: function () {
        return $m;
      },
      createDraftSafeSelector: function () {
        return M;
      },
      createEntityAdapter: function () {
        return Mm;
      },
      createImmutableStateInvariantMiddleware: function () {
        return ue;
      },
      createListenerMiddleware: function () {
        return Fm;
      },
      createNextState: function () {
        return P.default;
      },
      createReducer: function () {
        return pt;
      },
      createSelector: function () {
        return O.createSelector;
      },
      createSerializableStateInvariantMiddleware: function () {
        return Pe;
      },
      createSlice: function () {
        return xt;
      },
      current: function () {
        return P.current;
      },
      findNonSerializableValue: function () {
        return ae;
      },
      freeze: function () {
        return P.freeze;
      },
      getDefaultMiddleware: function () {
        return Ee;
      },
      getType: function () {
        return Yr;
      },
      isAllOf: function () {
        return tf;
      },
      isAnyOf: function () {
        return Zr;
      },
      isAsyncThunkAction: function () {
        return uf;
      },
      isDraft: function () {
        return P.isDraft;
      },
      isFulfilled: function () {
        return of;
      },
      isImmutableDefault: function () {
        return K;
      },
      isPending: function () {
        return nf;
      },
      isPlain: function () {
        return re;
      },
      isPlainObject: function () {
        return Z;
      },
      isRejected: function () {
        return Nl;
      },
      isRejectedWithValue: function () {
        return rf;
      },
      miniSerializeError: function () {
        return Jc;
      },
      nanoid: function () {
        return jl;
      },
      original: function () {
        return P.original;
      },
      removeListener: function () {
        return hf;
      },
      unwrapResult: function () {
        return Zc;
      },
    });
  var E = g(cr);
  h(e, g(ka));
  var P = g(cr),
    O = g(Yd),
    T = g(cr),
    R = g(Yd),
    M = function () {
      for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
      var C = R.createSelector.apply(void 0, S),
        j = function (A) {
          for (var V = [], X = 1; X < arguments.length; X++)
            V[X - 1] = arguments[X];
          return C.apply(
            void 0,
            o([(0, T.isDraft)(A) ? (0, T.current)(A) : A], V)
          );
        };
      return j;
    },
    z = g(ka),
    B = g(ka),
    te =
      typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : function () {
            if (arguments.length !== 0)
              return typeof arguments[0] == 'object'
                ? B.compose
                : B.compose.apply(null, arguments);
          };
  function Z(S) {
    if (typeof S != 'object' || S === null) return !1;
    var k = Object.getPrototypeOf(S);
    if (k === null) return !0;
    for (var C = k; Object.getPrototypeOf(C) !== null; )
      C = Object.getPrototypeOf(C);
    return k === C;
  }
  var ne = g(Ew),
    ee = g(cr),
    I = (function (S) {
      function k() {
        for (var C = [], j = 0; j < arguments.length; j++) C[j] = arguments[j];
        var A = S.apply(this, C) || this;
        return Object.setPrototypeOf(A, k.prototype), A;
      }
      return (
        n(k, S),
        Object.defineProperty(k, Symbol.species, {
          get: function () {
            return k;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (k.prototype.concat = function () {
          for (var C = [], j = 0; j < arguments.length; j++)
            C[j] = arguments[j];
          return S.prototype.concat.apply(this, C);
        }),
        (k.prototype.prepend = function () {
          for (var C = [], j = 0; j < arguments.length; j++)
            C[j] = arguments[j];
          return C.length === 1 && Array.isArray(C[0])
            ? new (k.bind.apply(k, o([void 0], C[0].concat(this))))()
            : new (k.bind.apply(k, o([void 0], C.concat(this))))();
        }),
        k
      );
    })(Array);
  function L(S) {
    return (0, ee.isDraftable)(S) ? (0, ee.default)(S, function () {}) : S;
  }
  function K(S) {
    return typeof S != 'object' || S == null || Object.isFrozen(S);
  }
  function ue(S) {
    return function () {
      return function (k) {
        return function (C) {
          return k(C);
        };
      };
    };
  }
  function re(S) {
    var k = typeof S;
    return (
      S == null ||
      k === 'string' ||
      k === 'boolean' ||
      k === 'number' ||
      Array.isArray(S) ||
      Z(S)
    );
  }
  function ae(S, k, C, j, A) {
    var V;
    if (
      (k === void 0 && (k = ''),
      C === void 0 && (C = re),
      A === void 0 && (A = []),
      !C(S))
    )
      return { keyPath: k || '<root>', value: S };
    if (typeof S != 'object' || S === null) return !1;
    for (
      var X = j != null ? j(S) : Object.entries(S),
        U = A.length > 0,
        ie = 0,
        q = X;
      ie < q.length;
      ie++
    ) {
      var D = q[ie],
        b = D[0],
        Q = D[1],
        J = k ? k + '.' + b : b;
      if (!(U && A.indexOf(J) >= 0)) {
        if (!C(Q)) return { keyPath: J, value: Q };
        if (typeof Q == 'object' && (V = ae(Q, J, C, j, A))) return V;
      }
    }
    return !1;
  }
  function Pe(S) {
    return function () {
      return function (k) {
        return function (C) {
          return k(C);
        };
      };
    };
  }
  function Ee(S) {
    S === void 0 && (S = {});
    var k = S.thunk,
      C = k === void 0 || k,
      j = new I();
    return (
      C &&
        j.push(
          typeof C == 'boolean'
            ? ne.default
            : ne.default.withExtraArgument(C.extraArgument)
        ),
      j
    );
  }
  function be(S) {
    var k,
      C = function (ce) {
        return Ee(ce);
      },
      j = S || {},
      A = j.reducer,
      V = A === void 0 ? void 0 : A,
      X = j.middleware,
      U = X === void 0 ? C() : X,
      ie = j.devTools,
      q = ie === void 0 || ie,
      D = j.preloadedState,
      b = D === void 0 ? void 0 : D,
      Q = j.enhancers,
      J = Q === void 0 ? void 0 : Q;
    if (typeof V == 'function') k = V;
    else {
      if (!Z(V))
        throw new Error(
          '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
        );
      k = (0, z.combineReducers)(V);
    }
    var G = U;
    typeof G == 'function' && (G = G(C));
    var oe = z.applyMiddleware.apply(void 0, G),
      W = z.compose;
    q && (W = te(x({ trace: !1 }, typeof q == 'object' && q)));
    var Y = [oe];
    Array.isArray(J) ? (Y = o([oe], J)) : typeof J == 'function' && (Y = J(Y));
    var de = W.apply(void 0, Y);
    return (0, z.createStore)(k, b, de);
  }
  function Te(S, k) {
    function C() {
      for (var j = [], A = 0; A < arguments.length; A++) j[A] = arguments[A];
      if (k) {
        var V = k.apply(void 0, j);
        if (!V) throw new Error('prepareAction did not return an object');
        return x(
          x({ type: S, payload: V.payload }, 'meta' in V && { meta: V.meta }),
          'error' in V && { error: V.error }
        );
      }
      return { type: S, payload: j[0] };
    }
    return (
      (C.toString = function () {
        return '' + S;
      }),
      (C.type = S),
      (C.match = function (j) {
        return j.type === S;
      }),
      C
    );
  }
  function ir(S) {
    return ['type', 'payload', 'error', 'meta'].indexOf(S) > -1;
  }
  function Yr(S) {
    return '' + S;
  }
  var Un = g(cr);
  function Xr(S) {
    var k,
      C = {},
      j = [],
      A = {
        addCase: function (V, X) {
          var U = typeof V == 'string' ? V : V.type;
          if (U in C)
            throw new Error(
              'addCase cannot be called with two reducers for the same action type'
            );
          return (C[U] = X), A;
        },
        addMatcher: function (V, X) {
          return j.push({ matcher: V, reducer: X }), A;
        },
        addDefaultCase: function (V) {
          return (k = V), A;
        },
      };
    return S(A), [C, j, k];
  }
  function pt(S, k, C, j) {
    C === void 0 && (C = []);
    var A,
      V = typeof k == 'function' ? Xr(k) : [k, C, j],
      X = V[0],
      U = V[1],
      ie = V[2];
    if (typeof S == 'function')
      A = function () {
        return L(S());
      };
    else {
      var q = L(S);
      A = function () {
        return q;
      };
    }
    function D(b, Q) {
      b === void 0 && (b = A());
      var J = o(
        [X[Q.type]],
        U.filter(function (G) {
          return (0, G.matcher)(Q);
        }).map(function (G) {
          return G.reducer;
        })
      );
      return (
        J.filter(function (G) {
          return !!G;
        }).length === 0 && (J = [ie]),
        J.reduce(function (G, oe) {
          if (oe) {
            var W;
            if ((0, Un.isDraft)(G)) return (W = oe(G, Q)) === void 0 ? G : W;
            if ((0, Un.isDraftable)(G))
              return (0, Un.default)(G, function (Y) {
                return oe(Y, Q);
              });
            if ((W = oe(G, Q)) === void 0) {
              if (G === null) return G;
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              );
            }
            return W;
          }
          return G;
        }, b)
      );
    }
    return (D.getInitialState = A), D;
  }
  function xt(S) {
    var k = S.name;
    if (!k) throw new Error('`name` is a required option for createSlice');
    var C,
      j =
        typeof S.initialState == 'function'
          ? S.initialState
          : L(S.initialState),
      A = S.reducers || {},
      V = Object.keys(A),
      X = {},
      U = {},
      ie = {};
    function q() {
      var D =
          typeof S.extraReducers == 'function'
            ? Xr(S.extraReducers)
            : [S.extraReducers],
        b = D[0],
        Q = D[1],
        J = Q === void 0 ? [] : Q,
        G = D[2],
        oe = G === void 0 ? void 0 : G,
        W = x(x({}, b === void 0 ? {} : b), U);
      return pt(j, W, J, oe);
    }
    return (
      V.forEach(function (D) {
        var b,
          Q,
          J = A[D],
          G = k + '/' + D;
        'reducer' in J ? ((b = J.reducer), (Q = J.prepare)) : (b = J),
          (X[D] = b),
          (U[G] = b),
          (ie[D] = Q ? Te(G, Q) : Te(G));
      }),
      {
        name: k,
        reducer: function (D, b) {
          return C || (C = q()), C(D, b);
        },
        actions: ie,
        caseReducers: X,
        getInitialState: function () {
          return C || (C = q()), C.getInitialState();
        },
      }
    );
  }
  var Kc = g(cr);
  function je(S) {
    return function (k, C) {
      var j = function (A) {
        var V;
        Z((V = C)) && typeof V.type == 'string' && Object.keys(V).every(ir)
          ? S(C.payload, A)
          : S(C, A);
      };
      return (0, Kc.isDraft)(k) ? (j(k), k) : (0, Kc.default)(k, j);
    };
  }
  function Jr(S, k) {
    return k(S);
  }
  function qn(S) {
    return Array.isArray(S) || (S = Object.values(S)), S;
  }
  function Gc(S, k, C) {
    for (var j = [], A = [], V = 0, X = (S = qn(S)); V < X.length; V++) {
      var U = X[V],
        ie = Jr(U, k);
      ie in C.entities ? A.push({ id: ie, changes: U }) : j.push(U);
    }
    return [j, A];
  }
  function Yc(S) {
    function k(q, D) {
      var b = Jr(q, S);
      b in D.entities || (D.ids.push(b), (D.entities[b] = q));
    }
    function C(q, D) {
      for (var b = 0, Q = (q = qn(q)); b < Q.length; b++) k(Q[b], D);
    }
    function j(q, D) {
      var b = Jr(q, S);
      b in D.entities || D.ids.push(b), (D.entities[b] = q);
    }
    function A(q, D) {
      var b = !1;
      q.forEach(function (Q) {
        Q in D.entities && (delete D.entities[Q], (b = !0));
      }),
        b &&
          (D.ids = D.ids.filter(function (Q) {
            return Q in D.entities;
          }));
    }
    function V(q, D) {
      var b = {},
        Q = {};
      if (
        (q.forEach(function (G) {
          G.id in D.entities &&
            (Q[G.id] = {
              id: G.id,
              changes: x(x({}, Q[G.id] ? Q[G.id].changes : null), G.changes),
            });
        }),
        (q = Object.values(Q)).length > 0)
      ) {
        var J =
          q.filter(function (G) {
            return (function (oe, W, Y) {
              var de = Object.assign({}, Y.entities[W.id], W.changes),
                ce = Jr(de, S),
                ye = ce !== W.id;
              return (
                ye && ((oe[W.id] = ce), delete Y.entities[W.id]),
                (Y.entities[ce] = de),
                ye
              );
            })(b, G, D);
          }).length > 0;
        J && (D.ids = Object.keys(D.entities));
      }
    }
    function X(q, D) {
      var b = Gc(q, S, D),
        Q = b[0];
      V(b[1], D), C(Q, D);
    }
    return {
      removeAll:
        ((U = function (q) {
          Object.assign(q, { ids: [], entities: {} });
        }),
        (ie = je(function (q, D) {
          return U(D);
        })),
        function (q) {
          return ie(q, void 0);
        }),
      addOne: je(k),
      addMany: je(C),
      setOne: je(j),
      setMany: je(function (q, D) {
        for (var b = 0, Q = (q = qn(q)); b < Q.length; b++) j(Q[b], D);
      }),
      setAll: je(function (q, D) {
        (q = qn(q)), (D.ids = []), (D.entities = {}), C(q, D);
      }),
      updateOne: je(function (q, D) {
        return V([q], D);
      }),
      updateMany: je(V),
      upsertOne: je(function (q, D) {
        return X([q], D);
      }),
      upsertMany: je(X),
      removeOne: je(function (q, D) {
        return A([q], D);
      }),
      removeMany: je(A),
    };
    var U, ie;
  }
  function Mm(S) {
    S === void 0 && (S = {});
    var k = x(
        {
          sortComparer: !1,
          selectId: function (U) {
            return U.id;
          },
        },
        S
      ),
      C = k.selectId,
      j = k.sortComparer,
      A = {
        getInitialState: function (U) {
          return (
            U === void 0 && (U = {}),
            Object.assign({ ids: [], entities: {} }, U)
          );
        },
      },
      V = {
        getSelectors: function (U) {
          var ie = function (oe) {
              return oe.ids;
            },
            q = function (oe) {
              return oe.entities;
            },
            D = M(ie, q, function (oe, W) {
              return oe.map(function (Y) {
                return W[Y];
              });
            }),
            b = function (oe, W) {
              return W;
            },
            Q = function (oe, W) {
              return oe[W];
            },
            J = M(ie, function (oe) {
              return oe.length;
            });
          if (!U)
            return {
              selectIds: ie,
              selectEntities: q,
              selectAll: D,
              selectTotal: J,
              selectById: M(q, b, Q),
            };
          var G = M(U, q);
          return {
            selectIds: M(U, ie),
            selectEntities: G,
            selectAll: M(U, D),
            selectTotal: M(U, J),
            selectById: M(G, b, Q),
          };
        },
      },
      X = j
        ? (function (U, ie) {
            var q = Yc(U);
            function D(W, Y) {
              var de = (W = qn(W)).filter(function (ce) {
                return !(Jr(ce, U) in Y.entities);
              });
              de.length !== 0 && G(de, Y);
            }
            function b(W, Y) {
              (W = qn(W)).length !== 0 && G(W, Y);
            }
            function Q(W, Y) {
              for (var de = !1, ce = 0, ye = W; ce < ye.length; ce++) {
                var pe = ye[ce],
                  ge = Y.entities[pe.id];
                if (ge) {
                  (de = !0), Object.assign(ge, pe.changes);
                  var vt = U(ge);
                  pe.id !== vt &&
                    (delete Y.entities[pe.id], (Y.entities[vt] = ge));
                }
              }
              de && oe(Y);
            }
            function J(W, Y) {
              var de = Gc(W, U, Y),
                ce = de[0];
              Q(de[1], Y), D(ce, Y);
            }
            function G(W, Y) {
              W.forEach(function (de) {
                Y.entities[U(de)] = de;
              }),
                oe(Y);
            }
            function oe(W) {
              var Y = Object.values(W.entities);
              Y.sort(ie);
              var de = Y.map(U);
              (function (ce, ye) {
                if (ce.length !== ye.length) return !1;
                for (var pe = 0; pe < ce.length && pe < ye.length; pe++)
                  if (ce[pe] !== ye[pe]) return !1;
                return !0;
              })(W.ids, de) || (W.ids = de);
            }
            return {
              removeOne: q.removeOne,
              removeMany: q.removeMany,
              removeAll: q.removeAll,
              addOne: je(function (W, Y) {
                return D([W], Y);
              }),
              updateOne: je(function (W, Y) {
                return Q([W], Y);
              }),
              upsertOne: je(function (W, Y) {
                return J([W], Y);
              }),
              setOne: je(function (W, Y) {
                return b([W], Y);
              }),
              setMany: je(b),
              setAll: je(function (W, Y) {
                (W = qn(W)), (Y.entities = {}), (Y.ids = []), D(W, Y);
              }),
              addMany: je(D),
              updateMany: je(Q),
              upsertMany: je(J),
            };
          })(C, j)
        : Yc(C);
    return x(x(x({ selectId: C, sortComparer: j }, A), V), X);
  }
  var jl = function (S) {
      S === void 0 && (S = 21);
      for (var k = '', C = S; C--; )
        k += 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'[
          (64 * Math.random()) | 0
        ];
      return k;
    },
    Dm = ['name', 'message', 'stack', 'code'],
    Al = function (S, k) {
      (this.payload = S), (this.meta = k);
    },
    Xc = function (S, k) {
      (this.payload = S), (this.meta = k);
    },
    Jc = function (S) {
      if (typeof S == 'object' && S !== null) {
        for (var k = {}, C = 0, j = Dm; C < j.length; C++) {
          var A = j[C];
          typeof S[A] == 'string' && (k[A] = S[A]);
        }
        return k;
      }
      return { message: String(S) };
    };
  function $m(S, k, C) {
    var j = Te(S + '/fulfilled', function (U, ie, q, D) {
        return {
          payload: U,
          meta: v(x({}, D || {}), {
            arg: q,
            requestId: ie,
            requestStatus: 'fulfilled',
          }),
        };
      }),
      A = Te(S + '/pending', function (U, ie, q) {
        return {
          payload: void 0,
          meta: v(x({}, q || {}), {
            arg: ie,
            requestId: U,
            requestStatus: 'pending',
          }),
        };
      }),
      V = Te(S + '/rejected', function (U, ie, q, D, b) {
        return {
          payload: D,
          error: ((C && C.serializeError) || Jc)(U || 'Rejected'),
          meta: v(x({}, b || {}), {
            arg: q,
            requestId: ie,
            rejectedWithValue: !!D,
            requestStatus: 'rejected',
            aborted: (U == null ? void 0 : U.name) === 'AbortError',
            condition: (U == null ? void 0 : U.name) === 'ConditionError',
          }),
        };
      }),
      X =
        typeof AbortController < 'u'
          ? AbortController
          : (function () {
              function U() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return (U.prototype.abort = function () {}), U;
            })();
    return Object.assign(
      function (U) {
        return function (ie, q, D) {
          var b,
            Q = C != null && C.idGenerator ? C.idGenerator(U) : jl(),
            J = new X(),
            G = new Promise(function (Y, de) {
              return J.signal.addEventListener('abort', function () {
                return de({ name: 'AbortError', message: b || 'Aborted' });
              });
            }),
            oe = !1,
            W = (function () {
              return _(this, null, function () {
                var Y, de, ce, ye, pe;
                return r(this, function (ge) {
                  switch (ge.label) {
                    case 0:
                      return (
                        ge.trys.push([0, 4, , 5]),
                        (vt = ye =
                          (Y = C == null ? void 0 : C.condition) == null
                            ? void 0
                            : Y.call(C, U, { getState: q, extra: D })) ===
                          null ||
                        typeof vt != 'object' ||
                        typeof vt.then != 'function'
                          ? [3, 2]
                          : [4, ye]
                      );
                    case 1:
                      (ye = ge.sent()), (ge.label = 2);
                    case 2:
                      if (ye === !1)
                        throw {
                          name: 'ConditionError',
                          message:
                            'Aborted due to condition callback returning false.',
                        };
                      return (
                        (oe = !0),
                        ie(
                          A(
                            Q,
                            U,
                            (de = C == null ? void 0 : C.getPendingMeta) == null
                              ? void 0
                              : de.call(
                                  C,
                                  { requestId: Q, arg: U },
                                  { getState: q, extra: D }
                                )
                          )
                        ),
                        [
                          4,
                          Promise.race([
                            G,
                            Promise.resolve(
                              k(U, {
                                dispatch: ie,
                                getState: q,
                                extra: D,
                                requestId: Q,
                                signal: J.signal,
                                rejectWithValue: function (Ge, cn) {
                                  return new Al(Ge, cn);
                                },
                                fulfillWithValue: function (Ge, cn) {
                                  return new Xc(Ge, cn);
                                },
                              })
                            ).then(function (Ge) {
                              if (Ge instanceof Al) throw Ge;
                              return Ge instanceof Xc
                                ? j(Ge.payload, Q, U, Ge.meta)
                                : j(Ge, Q, U);
                            }),
                          ]),
                        ]
                      );
                    case 3:
                      return (ce = ge.sent()), [3, 5];
                    case 4:
                      return (
                        (pe = ge.sent()),
                        (ce =
                          pe instanceof Al
                            ? V(null, Q, U, pe.payload, pe.meta)
                            : V(pe, Q, U)),
                        [3, 5]
                      );
                    case 5:
                      return (
                        (C &&
                          !C.dispatchConditionRejection &&
                          V.match(ce) &&
                          ce.meta.condition) ||
                          ie(ce),
                        [2, ce]
                      );
                  }
                  var vt;
                });
              });
            })();
          return Object.assign(W, {
            abort: function (Y) {
              oe && ((b = Y), J.abort());
            },
            requestId: Q,
            arg: U,
            unwrap: function () {
              return W.then(Zc);
            },
          });
        };
      },
      { pending: A, rejected: V, fulfilled: j, typePrefix: S }
    );
  }
  function Zc(S) {
    if (S.meta && S.meta.rejectedWithValue) throw S.payload;
    if (S.error) throw S.error;
    return S.payload;
  }
  var ef = function (S, k) {
    return (C = S) && typeof C.match == 'function' ? S.match(k) : S(k);
    var C;
  };
  function Zr() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return function (C) {
      return S.some(function (j) {
        return ef(j, C);
      });
    };
  }
  function tf() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return function (C) {
      return S.every(function (j) {
        return ef(j, C);
      });
    };
  }
  function li(S, k) {
    if (!S || !S.meta) return !1;
    var C = typeof S.meta.requestId == 'string',
      j = k.indexOf(S.meta.requestStatus) > -1;
    return C && j;
  }
  function eo(S) {
    return (
      typeof S[0] == 'function' &&
      'pending' in S[0] &&
      'fulfilled' in S[0] &&
      'rejected' in S[0]
    );
  }
  function nf() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (C) {
          return li(C, ['pending']);
        }
      : eo(S)
      ? function (C) {
          var j = S.map(function (A) {
            return A.pending;
          });
          return Zr.apply(void 0, j)(C);
        }
      : nf()(S[0]);
  }
  function Nl() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (C) {
          return li(C, ['rejected']);
        }
      : eo(S)
      ? function (C) {
          var j = S.map(function (A) {
            return A.rejected;
          });
          return Zr.apply(void 0, j)(C);
        }
      : Nl()(S[0]);
  }
  function rf() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    var C = function (j) {
      return j && j.meta && j.meta.rejectedWithValue;
    };
    return S.length === 0 || eo(S)
      ? function (j) {
          return tf(Nl.apply(void 0, S), C)(j);
        }
      : rf()(S[0]);
  }
  function of() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (C) {
          return li(C, ['fulfilled']);
        }
      : eo(S)
      ? function (C) {
          var j = S.map(function (A) {
            return A.fulfilled;
          });
          return Zr.apply(void 0, j)(C);
        }
      : of()(S[0]);
  }
  function uf() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (C) {
          return li(C, ['pending', 'fulfilled', 'rejected']);
        }
      : eo(S)
      ? function (C) {
          for (var j = [], A = 0, V = S; A < V.length; A++) {
            var X = V[A];
            j.push(X.pending, X.rejected, X.fulfilled);
          }
          return Zr.apply(void 0, j)(C);
        }
      : uf()(S[0]);
  }
  var Ml = function (S, k) {
      if (typeof S != 'function') throw new TypeError(k + ' is not a function');
    },
    zm = function () {},
    Dl = function (S, k) {
      return k === void 0 && (k = zm), S.catch(k), S;
    },
    lf = function (S, k) {
      S.addEventListener('abort', k, { once: !0 });
    },
    ur = function (S, k) {
      var C = S.signal;
      C.aborted ||
        ('reason' in C ||
          Object.defineProperty(C, 'reason', {
            enumerable: !0,
            value: k,
            configurable: !0,
            writable: !0,
          }),
        S.abort(k));
    },
    to = function (S) {
      (this.code = S),
        (this.name = 'TaskAbortError'),
        (this.message = 'task cancelled (reason: ' + S + ')');
    },
    lr = function (S) {
      if (S.aborted) throw new to(S.reason);
    },
    af = function (S) {
      return Dl(
        new Promise(function (k, C) {
          var j = function () {
            return C(new to(S.reason));
          };
          S.aborted ? j() : lf(S, j);
        })
      );
    },
    ai = function (S) {
      return function (k) {
        return Dl(
          Promise.race([af(S), k]).then(function (C) {
            return lr(S), C;
          })
        );
      };
    },
    sf = function (S) {
      var k = ai(S);
      return function (C) {
        return k(
          new Promise(function (j) {
            return setTimeout(j, C);
          })
        );
      };
    },
    Lm = Object.assign,
    cf = {},
    no = 'listenerMiddleware',
    ff = function (S) {
      var k = S.type,
        C = S.actionCreator,
        j = S.matcher,
        A = S.predicate,
        V = S.effect;
      if (k) A = Te(k).match;
      else if (C) (k = C.type), (A = C.match);
      else if (j) A = j;
      else if (!A)
        throw new Error(
          'Creating or removing a listener requires one of the known fields for matching an action'
        );
      return Ml(V, 'options.listener'), { predicate: A, type: k, effect: V };
    },
    df = function (S, k, C) {
      try {
        S(k, C);
      } catch (j) {
        setTimeout(function () {
          throw j;
        }, 0);
      }
    },
    pf = Te(no + '/add'),
    vf = Te(no + '/removeAll'),
    hf = Te(no + '/remove'),
    bm = function () {
      for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
      console.error.apply(console, o([no + '/error'], S));
    },
    $l = function (S) {
      S.pending.forEach(function (k) {
        ur(k, 'listener-cancelled');
      });
    };
  function Fm(S) {
    var k = this;
    S === void 0 && (S = {});
    var C = new Map(),
      j = S.extra,
      A = S.onError,
      V = A === void 0 ? bm : A;
    Ml(V, 'onError');
    var X = function (b) {
        for (var Q = 0, J = Array.from(C.values()); Q < J.length; Q++) {
          var G = J[Q];
          if (b(G)) return G;
        }
      },
      U = function (b) {
        var Q = X(function (J) {
          return J.effect === b.effect;
        });
        return (
          Q ||
            (Q = (function (J) {
              var G = ff(J),
                oe = G.type,
                W = G.predicate,
                Y = G.effect;
              return {
                id: jl(),
                effect: Y,
                type: oe,
                predicate: W,
                pending: new Set(),
                unsubscribe: function () {
                  throw new Error('Unsubscribe not initialized');
                },
              };
            })(b)),
          (function (J) {
            return (
              (J.unsubscribe = function () {
                return C.delete(J.id);
              }),
              C.set(J.id, J),
              function (G) {
                J.unsubscribe(), G != null && G.cancelActive && $l(J);
              }
            );
          })(Q)
        );
      },
      ie = function (b) {
        var Q = ff(b),
          J = Q.type,
          G = Q.effect,
          oe = Q.predicate,
          W = X(function (Y) {
            return (
              (typeof J == 'string' ? Y.type === J : Y.predicate === oe) &&
              Y.effect === G
            );
          });
        return W && (W.unsubscribe(), b.cancelActive && $l(W)), !!W;
      },
      q = function (b, Q, J, G) {
        return _(k, null, function () {
          var oe, W, Y;
          return r(this, function (de) {
            switch (de.label) {
              case 0:
                (oe = new AbortController()),
                  (W = (function (ye, pe) {
                    return function (ge, vt) {
                      return Dl(
                        (function (Ge, cn) {
                          return _(void 0, null, function () {
                            var Gt, jt, zl, mf;
                            return r(this, function (si) {
                              switch (si.label) {
                                case 0:
                                  lr(pe),
                                    (Gt = function () {}),
                                    (jt = new Promise(function (Ll) {
                                      Gt = ye({
                                        predicate: Ge,
                                        effect: function (Um, bl) {
                                          bl.unsubscribe(),
                                            Ll([
                                              Um,
                                              bl.getState(),
                                              bl.getOriginalState(),
                                            ]);
                                        },
                                      });
                                    })),
                                    (zl = [af(pe), jt]),
                                    cn != null &&
                                      zl.push(
                                        new Promise(function (Ll) {
                                          return setTimeout(Ll, cn, null);
                                        })
                                      ),
                                    (si.label = 1);
                                case 1:
                                  return (
                                    si.trys.push([1, , 3, 4]),
                                    [4, Promise.race(zl)]
                                  );
                                case 2:
                                  return (mf = si.sent()), lr(pe), [2, mf];
                                case 3:
                                  return Gt(), [7];
                                case 4:
                                  return [2];
                              }
                            });
                          });
                        })(ge, vt)
                      );
                    };
                  })(U, oe.signal)),
                  (de.label = 1);
              case 1:
                return (
                  de.trys.push([1, 3, 4, 5]),
                  b.pending.add(oe),
                  [
                    4,
                    Promise.resolve(
                      b.effect(
                        Q,
                        Lm({}, J, {
                          getOriginalState: G,
                          condition: function (ye, pe) {
                            return W(ye, pe).then(Boolean);
                          },
                          take: W,
                          delay: sf(oe.signal),
                          pause: ai(oe.signal),
                          extra: j,
                          signal: oe.signal,
                          fork:
                            ((ce = oe.signal),
                            function (ye) {
                              Ml(ye, 'taskExecutor');
                              var pe,
                                ge = new AbortController();
                              (pe = ge),
                                lf(ce, function () {
                                  return ur(pe, ce.reason);
                                });
                              var vt,
                                Ge,
                                cn =
                                  ((vt = function () {
                                    return _(void 0, null, function () {
                                      var Gt;
                                      return r(this, function (jt) {
                                        switch (jt.label) {
                                          case 0:
                                            return (
                                              lr(ce),
                                              lr(ge.signal),
                                              [
                                                4,
                                                ye({
                                                  pause: ai(ge.signal),
                                                  delay: sf(ge.signal),
                                                  signal: ge.signal,
                                                }),
                                              ]
                                            );
                                          case 1:
                                            return (
                                              (Gt = jt.sent()),
                                              lr(ge.signal),
                                              [2, Gt]
                                            );
                                        }
                                      });
                                    });
                                  }),
                                  (Ge = function () {
                                    return ur(ge, 'task-completed');
                                  }),
                                  _(void 0, null, function () {
                                    var Gt;
                                    return r(this, function (jt) {
                                      switch (jt.label) {
                                        case 0:
                                          return (
                                            jt.trys.push([0, 3, 4, 5]),
                                            [4, Promise.resolve()]
                                          );
                                        case 1:
                                          return jt.sent(), [4, vt()];
                                        case 2:
                                          return [
                                            2,
                                            { status: 'ok', value: jt.sent() },
                                          ];
                                        case 3:
                                          return [
                                            2,
                                            {
                                              status:
                                                (Gt = jt.sent()) instanceof to
                                                  ? 'cancelled'
                                                  : 'rejected',
                                              error: Gt,
                                            },
                                          ];
                                        case 4:
                                          return Ge == null || Ge(), [7];
                                        case 5:
                                          return [2];
                                      }
                                    });
                                  }));
                              return {
                                result: ai(ce)(cn),
                                cancel: function () {
                                  ur(ge, 'task-cancelled');
                                },
                              };
                            }),
                          unsubscribe: b.unsubscribe,
                          subscribe: function () {
                            C.set(b.id, b);
                          },
                          cancelActiveListeners: function () {
                            b.pending.forEach(function (ye, pe, ge) {
                              ye !== oe &&
                                (ur(ye, 'listener-cancelled'), ge.delete(ye));
                            });
                          },
                        })
                      )
                    ),
                  ]
                );
              case 2:
                return de.sent(), [3, 5];
              case 3:
                return (
                  (Y = de.sent()) instanceof to ||
                    df(V, Y, { raisedBy: 'effect' }),
                  [3, 5]
                );
              case 4:
                return ur(oe, 'listener-completed'), b.pending.delete(oe), [7];
              case 5:
                return [2];
            }
            var ce;
          });
        });
      },
      D = (function (b) {
        return function () {
          b.forEach($l), b.clear();
        };
      })(C);
    return {
      middleware: function (b) {
        return function (Q) {
          return function (J) {
            if (pf.match(J)) return U(J.payload);
            if (!vf.match(J)) {
              if (hf.match(J)) return ie(J.payload);
              var G,
                oe = b.getState(),
                W = function () {
                  if (oe === cf)
                    throw new Error(
                      no + ': getOriginalState can only be called synchronously'
                    );
                  return oe;
                };
              try {
                if (((G = Q(J)), C.size > 0))
                  for (
                    var Y = b.getState(),
                      de = Array.from(C.values()),
                      ce = 0,
                      ye = de;
                    ce < ye.length;
                    ce++
                  ) {
                    var pe = ye[ce],
                      ge = !1;
                    try {
                      ge = pe.predicate(J, Y, oe);
                    } catch (vt) {
                      (ge = !1), df(V, vt, { raisedBy: 'predicate' });
                    }
                    ge && q(pe, J, b, W);
                  }
              } finally {
                oe = cf;
              }
              return G;
            }
            D();
          };
        };
      },
      startListening: U,
      stopListening: ie,
      clearListeners: D,
    };
  }
  (0, E.enableES5)();
})(gm);
(function (e) {
  e.exports = gm;
})(ui);
const xw = { hightScore: null },
  Sm = ui.exports.createSlice({
    name: 'game',
    initialState: xw,
    reducers: {
      setHightScore(e, { payload: t }) {
        e.hightScore = t;
      },
    },
  }),
  kw = Sm.actions,
  Pw = Sm.reducer,
  Ow = { isAuth: !1, isLoadingAuth: !0 },
  wm = ui.exports.createSlice({
    name: 'auth',
    initialState: Ow,
    reducers: {
      setIsAuth(e, { payload: t }) {
        e.isAuth = t;
      },
      setIsLoadingAuth(e, { payload: t }) {
        e.isLoadingAuth = t;
      },
    },
  }),
  Cw = e => e.auth;
var Pl =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        u;
      return (
        (u = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == 'function' &&
          (u[Symbol.iterator] = function () {
            return this;
          }),
        u
      );
      function l(s) {
        return function (c) {
          return a([s, c]);
        };
      }
      function a(s) {
        if (r) throw new TypeError('Generator is already executing.');
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  s[0] & 2
                    ? o.return
                    : s[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, s[1])).done)
            )
              return i;
            switch (((o = 0), i && (s = [s[0] & 2, i.value]), s[0])) {
              case 0:
              case 1:
                i = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (o = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = s);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(s);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (o = 0);
          } finally {
            r = i = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  Ru =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  Rw = Object.defineProperty,
  Tw = Object.defineProperties,
  Iw = Object.getOwnPropertyDescriptors,
  Tu = Object.getOwnPropertySymbols,
  _m = Object.prototype.hasOwnProperty,
  Em = Object.prototype.propertyIsEnumerable,
  Xd = function (e, t, n) {
    return t in e
      ? Rw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  $e = function (e, t) {
    for (var n in t || (t = {})) _m.call(t, n) && Xd(e, n, t[n]);
    if (Tu)
      for (var r = 0, o = Tu(t); r < o.length; r++) {
        var n = o[r];
        Em.call(t, n) && Xd(e, n, t[n]);
      }
    return e;
  },
  Nn = function (e, t) {
    return Tw(e, Iw(t));
  },
  Jd = function (e, t) {
    var n = {};
    for (var r in e) _m.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Tu)
      for (var o = 0, i = Tu(e); o < i.length; o++) {
        var r = i[o];
        t.indexOf(r) < 0 && Em.call(e, r) && (n[r] = e[r]);
      }
    return n;
  },
  Ol = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (a) {
          try {
            l(n.next(a));
          } catch (s) {
            o(s);
          }
        },
        u = function (a) {
          try {
            l(n.throw(a));
          } catch (s) {
            o(s);
          }
        },
        l = function (a) {
          return a.done ? r(a.value) : Promise.resolve(a.value).then(i, u);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  xe;
(function (e) {
  (e.uninitialized = 'uninitialized'),
    (e.pending = 'pending'),
    (e.fulfilled = 'fulfilled'),
    (e.rejected = 'rejected');
})(xe || (xe = {}));
function jw(e) {
  return {
    status: e,
    isUninitialized: e === xe.uninitialized,
    isLoading: e === xe.pending,
    isSuccess: e === xe.fulfilled,
    isError: e === xe.rejected,
  };
}
function Aw(e) {
  return new RegExp('(^|:)//').test(e);
}
var Nw = function (e) {
    return e.replace(/\/$/, '');
  },
  Mw = function (e) {
    return e.replace(/^\//, '');
  };
function Dw(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (Aw(t)) return t;
  var n = e.endsWith('/') || !t.startsWith('?') ? '/' : '';
  return (e = Nw(e)), (t = Mw(t)), '' + e + n + t;
}
var Zd = function (e) {
  return [].concat.apply([], e);
};
function $w() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function zw() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden';
}
var ep = oi;
function xm(e, t) {
  if (e === t || !((ep(e) && ep(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  for (
    var n = Object.keys(t),
      r = Object.keys(e),
      o = n.length === r.length,
      i = Array.isArray(t) ? [] : {},
      u = 0,
      l = n;
    u < l.length;
    u++
  ) {
    var a = l[u];
    (i[a] = xm(e[a], t[a])), o && (o = e[a] === i[a]);
  }
  return o ? e : i;
}
var tp = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return fetch.apply(void 0, e);
  },
  Lw = function (e) {
    return e.status >= 200 && e.status <= 299;
  },
  bw = function (e) {
    var t, n;
    return (n = (t = e.get('content-type')) == null ? void 0 : t.trim()) == null
      ? void 0
      : n.startsWith('application/json');
  },
  Fw = function (e, t) {
    return Ol(void 0, null, function () {
      var n;
      return Pl(this, function (r) {
        switch (r.label) {
          case 0:
            return typeof t == 'function'
              ? [2, t(e)]
              : t === 'text'
              ? [2, e.text()]
              : t !== 'json'
              ? [3, 2]
              : [4, e.text()];
          case 1:
            return (n = r.sent()), [2, n.length ? JSON.parse(n) : null];
          case 2:
            return [2];
        }
      });
    });
  };
function np(e) {
  if (!oi(e)) return e;
  for (var t = $e({}, e), n = 0, r = Object.entries(t); n < r.length; n++) {
    var o = r[n],
      i = o[0],
      u = o[1];
    u === void 0 && delete t[i];
  }
  return t;
}
function Cl(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = e,
    r = n.baseUrl,
    o = n.prepareHeaders,
    i =
      o === void 0
        ? function (c) {
            return c;
          }
        : o,
    u = n.fetchFn,
    l = u === void 0 ? tp : u,
    a = n.paramsSerializer,
    s = Jd(n, ['baseUrl', 'prepareHeaders', 'fetchFn', 'paramsSerializer']);
  return (
    typeof fetch > 'u' &&
      l === tp &&
      console.warn(
        'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
      ),
    function (c, p) {
      return Ol(t, null, function () {
        var d,
          m,
          y,
          w,
          x,
          v,
          f,
          h,
          g,
          _,
          E,
          P,
          O,
          T,
          R,
          M,
          z,
          B,
          te,
          Z,
          ne,
          ee,
          I,
          L,
          K,
          ue,
          re,
          ae,
          Pe,
          Ee,
          be,
          Te,
          ir,
          Yr,
          Un,
          Xr;
        return Pl(this, function (pt) {
          switch (pt.label) {
            case 0:
              return (
                (d = p.signal),
                (m = p.getState),
                (y = p.extra),
                (w = p.endpoint),
                (x = p.forced),
                (v = p.type),
                (h = typeof c == 'string' ? { url: c } : c),
                (g = h.url),
                (_ = h.method),
                (E = _ === void 0 ? 'GET' : _),
                (P = h.headers),
                (O = P === void 0 ? new Headers({}) : P),
                (T = h.body),
                (R = T === void 0 ? void 0 : T),
                (M = h.params),
                (z = M === void 0 ? void 0 : M),
                (B = h.responseHandler),
                (te = B === void 0 ? 'json' : B),
                (Z = h.validateStatus),
                (ne = Z === void 0 ? Lw : Z),
                (ee = Jd(h, [
                  'url',
                  'method',
                  'headers',
                  'body',
                  'params',
                  'responseHandler',
                  'validateStatus',
                ])),
                (I = $e(Nn($e({}, s), { method: E, signal: d, body: R }), ee)),
                (L = I),
                [
                  4,
                  i(new Headers(np(O)), {
                    getState: m,
                    extra: y,
                    endpoint: w,
                    forced: x,
                    type: v,
                  }),
                ]
              );
            case 1:
              (L.headers = pt.sent()),
                (K = function (xt) {
                  return (
                    typeof xt == 'object' &&
                    (oi(xt) ||
                      Array.isArray(xt) ||
                      typeof xt.toJSON == 'function')
                  );
                }),
                !I.headers.has('content-type') &&
                  K(R) &&
                  I.headers.set('content-type', 'application/json'),
                K(R) && bw(I.headers) && (I.body = JSON.stringify(R)),
                z &&
                  ((ue = ~g.indexOf('?') ? '&' : '?'),
                  (re = a ? a(z) : new URLSearchParams(np(z))),
                  (g += ue + re)),
                (g = Dw(r, g)),
                (ae = new Request(g, I)),
                (Pe = ae.clone()),
                (f = { request: Pe }),
                (pt.label = 2);
            case 2:
              return pt.trys.push([2, 4, , 5]), [4, l(ae)];
            case 3:
              return (Ee = pt.sent()), [3, 5];
            case 4:
              return (
                (be = pt.sent()),
                [
                  2,
                  {
                    error: { status: 'FETCH_ERROR', error: String(be) },
                    meta: f,
                  },
                ]
              );
            case 5:
              (Te = Ee.clone()), (f.response = Te), (Yr = ''), (pt.label = 6);
            case 6:
              return (
                pt.trys.push([6, 8, , 9]),
                [
                  4,
                  Promise.all([
                    Fw(Ee, te).then(
                      function (xt) {
                        return (ir = xt);
                      },
                      function (xt) {
                        return (Un = xt);
                      }
                    ),
                    Te.text().then(
                      function (xt) {
                        return (Yr = xt);
                      },
                      function () {}
                    ),
                  ]),
                ]
              );
            case 7:
              if ((pt.sent(), Un)) throw Un;
              return [3, 9];
            case 8:
              return (
                (Xr = pt.sent()),
                [
                  2,
                  {
                    error: {
                      status: 'PARSING_ERROR',
                      originalStatus: Ee.status,
                      data: Yr,
                      error: String(Xr),
                    },
                    meta: f,
                  },
                ]
              );
            case 9:
              return [
                2,
                ne(Ee, ir)
                  ? { data: ir, meta: f }
                  : { error: { status: Ee.status, data: ir }, meta: f },
              ];
          }
        });
      });
    }
  );
}
var rp = (function () {
    function e(t, n) {
      n === void 0 && (n = void 0), (this.value = t), (this.meta = n);
    }
    return e;
  })(),
  Wc = ft('__rtkq/focused'),
  km = ft('__rtkq/unfocused'),
  Hc = ft('__rtkq/online'),
  Pm = ft('__rtkq/offline'),
  Ft;
(function (e) {
  (e.query = 'query'), (e.mutation = 'mutation');
})(Ft || (Ft = {}));
function Uw(e) {
  return e.type === Ft.query;
}
function qw(e) {
  return e.type === Ft.mutation;
}
function Om(e, t, n, r, o, i) {
  return Qw(e)
    ? e(t, n, r, o).map(Ms).map(i)
    : Array.isArray(e)
    ? e.map(Ms).map(i)
    : [];
}
function Qw(e) {
  return typeof e == 'function';
}
function Ms(e) {
  return typeof e == 'string' ? { type: e } : e;
}
function Bw(e) {
  return e;
}
function Vw(e) {
  var t = this,
    n = e.reducerPath,
    r = e.baseQuery,
    o = e.context.endpointDefinitions,
    i = e.serializeQueryArgs,
    u = e.api,
    l = function (f, h, g) {
      return function (_) {
        var E = o[f];
        _(
          u.internalActions.queryResultPatched({
            queryCacheKey: i({
              queryArgs: h,
              endpointDefinition: E,
              endpointName: f,
            }),
            patches: g,
          })
        );
      };
    },
    a = function (f, h, g) {
      return function (_, E) {
        var P,
          O,
          T = u.endpoints[f].select(h)(E()),
          R = {
            patches: [],
            inversePatches: [],
            undo: function () {
              return _(u.util.patchQueryData(f, h, R.inversePatches));
            },
          };
        if (T.status === xe.uninitialized) return R;
        if ('data' in T)
          if (dt(T.data)) {
            var M = lm(T.data, g),
              z = M[1],
              B = M[2];
            (P = R.patches).push.apply(P, z),
              (O = R.inversePatches).push.apply(O, B);
          } else {
            var te = g(T.data);
            R.patches.push({ op: 'replace', path: [], value: te }),
              R.inversePatches.push({ op: 'replace', path: [], value: T.data });
          }
        return _(u.util.patchQueryData(f, h, R.patches)), R;
      };
    },
    s = function (f, h) {
      return Ol(t, [f, h], function (g, _) {
        var E,
          P,
          O,
          T,
          R,
          M,
          z,
          B,
          te,
          Z,
          ne,
          ee = _.signal,
          I = _.rejectWithValue,
          L = _.fulfillWithValue,
          K = _.dispatch,
          ue = _.getState,
          re = _.extra;
        return Pl(this, function (ae) {
          switch (ae.label) {
            case 0:
              (E = o[g.endpointName]), (ae.label = 1);
            case 1:
              return (
                ae.trys.push([1, 7, , 8]),
                (P = Bw),
                (O = void 0),
                (T = {
                  signal: ee,
                  dispatch: K,
                  getState: ue,
                  extra: re,
                  endpoint: g.endpointName,
                  type: g.type,
                  forced: g.type === 'query' ? c(g, ue()) : void 0,
                }),
                E.query
                  ? [4, r(E.query(g.originalArgs), T, E.extraOptions)]
                  : [3, 3]
              );
            case 2:
              return (
                (O = ae.sent()),
                E.transformResponse && (P = E.transformResponse),
                [3, 5]
              );
            case 3:
              return [
                4,
                E.queryFn(g.originalArgs, T, E.extraOptions, function (Pe) {
                  return r(Pe, T, E.extraOptions);
                }),
              ];
            case 4:
              (O = ae.sent()), (ae.label = 5);
            case 5:
              if ((typeof process < 'u', O.error))
                throw new rp(O.error, O.meta);
              return (Z = L), [4, P(O.data, O.meta, g.originalArgs)];
            case 6:
              return [
                2,
                Z.apply(void 0, [
                  ae.sent(),
                  { fulfilledTimeStamp: Date.now(), baseQueryMeta: O.meta },
                ]),
              ];
            case 7:
              if (((ne = ae.sent()), ne instanceof rp))
                return [2, I(ne.value, { baseQueryMeta: ne.meta })];
              throw (typeof process < 'u', console.error(ne), ne);
            case 8:
              return [2];
          }
        });
      });
    };
  function c(f, h) {
    var g,
      _,
      E,
      P,
      O =
        (_ = (g = h[n]) == null ? void 0 : g.queries) == null
          ? void 0
          : _[f.queryCacheKey],
      T = (E = h[n]) == null ? void 0 : E.config.refetchOnMountOrArgChange,
      R = O == null ? void 0 : O.fulfilledTimeStamp,
      M = (P = f.forceRefetch) != null ? P : f.subscribe && T;
    return M ? M === !0 || (Number(new Date()) - Number(R)) / 1e3 >= M : !1;
  }
  var p = Gd(n + '/executeQuery', s, {
      getPendingMeta: function () {
        return { startedTimeStamp: Date.now() };
      },
      condition: function (f, h) {
        var g = h.getState,
          _,
          E,
          P = g(),
          O =
            (E = (_ = P[n]) == null ? void 0 : _.queries) == null
              ? void 0
              : E[f.queryCacheKey],
          T = O == null ? void 0 : O.fulfilledTimeStamp;
        return (O == null ? void 0 : O.status) === 'pending'
          ? !1
          : c(f, P)
          ? !0
          : !T;
      },
      dispatchConditionRejection: !0,
    }),
    d = Gd(n + '/executeMutation', s, {
      getPendingMeta: function () {
        return { startedTimeStamp: Date.now() };
      },
    }),
    m = function (f) {
      return 'force' in f;
    },
    y = function (f) {
      return 'ifOlderThan' in f;
    },
    w = function (f, h, g) {
      return function (_, E) {
        var P = m(g) && g.force,
          O = y(g) && g.ifOlderThan,
          T = function (B) {
            return (
              B === void 0 && (B = !0),
              u.endpoints[f].initiate(h, { forceRefetch: B })
            );
          },
          R = u.endpoints[f].select(h)(E());
        if (P) _(T());
        else if (O) {
          var M = R == null ? void 0 : R.fulfilledTimeStamp;
          if (!M) {
            _(T());
            return;
          }
          var z = (Number(new Date()) - Number(new Date(M))) / 1e3 >= O;
          z && _(T());
        } else _(T(!1));
      };
    };
  function x(f) {
    return function (h) {
      var g, _;
      return (
        ((_ = (g = h == null ? void 0 : h.meta) == null ? void 0 : g.arg) ==
        null
          ? void 0
          : _.endpointName) === f
      );
    };
  }
  function v(f, h) {
    return {
      matchPending: Co(Bc(f), x(h)),
      matchFulfilled: Co(or(f), x(h)),
      matchRejected: Co(Yo(f), x(h)),
    };
  }
  return {
    queryThunk: p,
    mutationThunk: d,
    prefetch: w,
    updateQueryData: a,
    patchQueryData: l,
    buildMatchThunkActions: v,
  };
}
function Cm(e, t, n, r) {
  return Om(
    n[e.meta.arg.endpointName][t],
    or(e) ? e.payload : void 0,
    kl(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    'baseQueryMeta' in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  );
}
function Ri(e, t, n) {
  var r = e[t];
  r && n(r);
}
function Xo(e) {
  var t;
  return (t = 'arg' in e ? e.arg.fixedCacheKey : e.fixedCacheKey) != null
    ? t
    : e.requestId;
}
function op(e, t, n) {
  var r = e[Xo(t)];
  r && n(r);
}
var Ti = {};
function Ww(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.mutationThunk,
    o = e.context,
    i = o.endpointDefinitions,
    u = o.apiUid,
    l = o.extractRehydrationInfo,
    a = o.hasRehydrationInfo,
    s = e.assertTagType,
    c = e.config,
    p = ft(t + '/resetApiState'),
    d = fo({
      name: t + '/queries',
      initialState: Ti,
      reducers: {
        removeQueryResult: function (g, _) {
          var E = _.payload.queryCacheKey;
          delete g[E];
        },
        queryResultPatched: function (g, _) {
          var E = _.payload,
            P = E.queryCacheKey,
            O = E.patches;
          Ri(g, P, function (T) {
            T.data = am(T.data, O.concat());
          });
        },
      },
      extraReducers: function (g) {
        g.addCase(n.pending, function (_, E) {
          var P = E.meta,
            O = E.meta.arg,
            T,
            R;
          O.subscribe &&
            ((R = _[(T = O.queryCacheKey)]) != null ||
              (_[T] = {
                status: xe.uninitialized,
                endpointName: O.endpointName,
              })),
            Ri(_, O.queryCacheKey, function (M) {
              (M.status = xe.pending),
                (M.requestId = P.requestId),
                O.originalArgs !== void 0 && (M.originalArgs = O.originalArgs),
                (M.startedTimeStamp = P.startedTimeStamp);
            });
        })
          .addCase(n.fulfilled, function (_, E) {
            var P = E.meta,
              O = E.payload;
            Ri(_, P.arg.queryCacheKey, function (T) {
              var R;
              T.requestId === P.requestId &&
                ((T.status = xe.fulfilled),
                (T.data =
                  (R = i[P.arg.endpointName].structuralSharing) == null || R
                    ? xm(T.data, O)
                    : O),
                delete T.error,
                (T.fulfilledTimeStamp = P.fulfilledTimeStamp));
            });
          })
          .addCase(n.rejected, function (_, E) {
            var P = E.meta,
              O = P.condition,
              T = P.arg,
              R = P.requestId,
              M = E.error,
              z = E.payload;
            Ri(_, T.queryCacheKey, function (B) {
              if (!O) {
                if (B.requestId !== R) return;
                (B.status = xe.rejected), (B.error = z != null ? z : M);
              }
            });
          })
          .addMatcher(a, function (_, E) {
            for (
              var P = l(E).queries, O = 0, T = Object.entries(P);
              O < T.length;
              O++
            ) {
              var R = T[O],
                M = R[0],
                z = R[1];
              ((z == null ? void 0 : z.status) === xe.fulfilled ||
                (z == null ? void 0 : z.status) === xe.rejected) &&
                (_[M] = z);
            }
          });
      },
    }),
    m = fo({
      name: t + '/mutations',
      initialState: Ti,
      reducers: {
        removeMutationResult: function (g, _) {
          var E = _.payload,
            P = Xo(E);
          P in g && delete g[P];
        },
      },
      extraReducers: function (g) {
        g.addCase(r.pending, function (_, E) {
          var P = E.meta,
            O = E.meta,
            T = O.requestId,
            R = O.arg,
            M = O.startedTimeStamp;
          !R.track ||
            (_[Xo(P)] = {
              requestId: T,
              status: xe.pending,
              endpointName: R.endpointName,
              startedTimeStamp: M,
            });
        })
          .addCase(r.fulfilled, function (_, E) {
            var P = E.payload,
              O = E.meta;
            !O.arg.track ||
              op(_, O, function (T) {
                T.requestId === O.requestId &&
                  ((T.status = xe.fulfilled),
                  (T.data = P),
                  (T.fulfilledTimeStamp = O.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, function (_, E) {
            var P = E.payload,
              O = E.error,
              T = E.meta;
            !T.arg.track ||
              op(_, T, function (R) {
                R.requestId === T.requestId &&
                  ((R.status = xe.rejected), (R.error = P != null ? P : O));
              });
          })
          .addMatcher(a, function (_, E) {
            for (
              var P = l(E).mutations, O = 0, T = Object.entries(P);
              O < T.length;
              O++
            ) {
              var R = T[O],
                M = R[0],
                z = R[1];
              ((z == null ? void 0 : z.status) === xe.fulfilled ||
                (z == null ? void 0 : z.status) === xe.rejected) &&
                M !== (z == null ? void 0 : z.requestId) &&
                (_[M] = z);
            }
          });
      },
    }),
    y = fo({
      name: t + '/invalidation',
      initialState: Ti,
      reducers: {},
      extraReducers: function (g) {
        g.addCase(d.actions.removeQueryResult, function (_, E) {
          for (
            var P = E.payload.queryCacheKey, O = 0, T = Object.values(_);
            O < T.length;
            O++
          )
            for (var R = T[O], M = 0, z = Object.values(R); M < z.length; M++) {
              var B = z[M],
                te = B.indexOf(P);
              te !== -1 && B.splice(te, 1);
            }
        })
          .addMatcher(a, function (_, E) {
            for (
              var P, O, T, R, M = l(E).provided, z = 0, B = Object.entries(M);
              z < B.length;
              z++
            )
              for (
                var te = B[z],
                  Z = te[0],
                  ne = te[1],
                  ee = 0,
                  I = Object.entries(ne);
                ee < I.length;
                ee++
              )
                for (
                  var L = I[ee],
                    K = L[0],
                    ue = L[1],
                    re =
                      (R = (O = (P = _[Z]) != null ? P : (_[Z] = {}))[
                        (T = K || '__internal_without_id')
                      ]) != null
                        ? R
                        : (O[T] = []),
                    ae = 0,
                    Pe = ue;
                  ae < Pe.length;
                  ae++
                ) {
                  var Ee = Pe[ae],
                    be = re.includes(Ee);
                  be || re.push(Ee);
                }
          })
          .addMatcher(Gr(or(n), kl(n)), function (_, E) {
            for (
              var P,
                O,
                T,
                R,
                M = Cm(E, 'providesTags', i, s),
                z = E.meta.arg.queryCacheKey,
                B = 0,
                te = Object.values(_);
              B < te.length;
              B++
            )
              for (
                var Z = te[B], ne = 0, ee = Object.values(Z);
                ne < ee.length;
                ne++
              ) {
                var I = ee[ne],
                  L = I.indexOf(z);
                L !== -1 && I.splice(L, 1);
              }
            for (var K = 0, ue = M; K < ue.length; K++) {
              var re = ue[K],
                ae = re.type,
                Pe = re.id,
                Ee =
                  (R = (O = (P = _[ae]) != null ? P : (_[ae] = {}))[
                    (T = Pe || '__internal_without_id')
                  ]) != null
                    ? R
                    : (O[T] = []),
                be = Ee.includes(z);
              be || Ee.push(z);
            }
          });
      },
    }),
    w = fo({
      name: t + '/subscriptions',
      initialState: Ti,
      reducers: {
        updateSubscriptionOptions: function (g, _) {
          var E = _.payload,
            P = E.queryCacheKey,
            O = E.requestId,
            T = E.options,
            R;
          (R = g == null ? void 0 : g[P]) != null && R[O] && (g[P][O] = T);
        },
        unsubscribeQueryResult: function (g, _) {
          var E = _.payload,
            P = E.queryCacheKey,
            O = E.requestId;
          g[P] && delete g[P][O];
        },
      },
      extraReducers: function (g) {
        g.addCase(d.actions.removeQueryResult, function (_, E) {
          var P = E.payload.queryCacheKey;
          delete _[P];
        })
          .addCase(n.pending, function (_, E) {
            var P = E.meta,
              O = P.arg,
              T = P.requestId,
              R,
              M,
              z,
              B;
            if (O.subscribe) {
              var te = (M = _[(R = O.queryCacheKey)]) != null ? M : (_[R] = {});
              te[T] =
                (B = (z = O.subscriptionOptions) != null ? z : te[T]) != null
                  ? B
                  : {};
            }
          })
          .addCase(n.rejected, function (_, E) {
            var P = E.meta,
              O = P.condition,
              T = P.arg,
              R = P.requestId;
            E.error, E.payload;
            var M, z, B, te;
            if (O && T.subscribe) {
              var Z = (z = _[(M = T.queryCacheKey)]) != null ? z : (_[M] = {});
              Z[R] =
                (te = (B = T.subscriptionOptions) != null ? B : Z[R]) != null
                  ? te
                  : {};
            }
          })
          .addMatcher(a, function (_) {
            return $e({}, _);
          });
      },
    }),
    x = fo({
      name: t + '/config',
      initialState: $e(
        { online: $w(), focused: zw(), middlewareRegistered: !1 },
        c
      ),
      reducers: {
        middlewareRegistered: function (g, _) {
          var E = _.payload;
          g.middlewareRegistered =
            g.middlewareRegistered === 'conflict' || u !== E ? 'conflict' : !0;
        },
      },
      extraReducers: function (g) {
        g.addCase(Hc, function (_) {
          _.online = !0;
        })
          .addCase(Pm, function (_) {
            _.online = !1;
          })
          .addCase(Wc, function (_) {
            _.focused = !0;
          })
          .addCase(km, function (_) {
            _.focused = !1;
          })
          .addMatcher(a, function (_) {
            return $e({}, _);
          });
      },
    }),
    v = Qc({
      queries: d.reducer,
      mutations: m.reducer,
      provided: y.reducer,
      subscriptions: w.reducer,
      config: x.reducer,
    }),
    f = function (g, _) {
      return v(p.match(_) ? void 0 : g, _);
    },
    h = Nn($e($e($e($e({}, x.actions), d.actions), w.actions), m.actions), {
      unsubscribeMutationResult: m.actions.removeMutationResult,
      resetApiState: p,
    });
  return { reducer: f, actions: h };
}
var Kn = Symbol.for('RTKQ/skipToken'),
  Rm = { status: xe.uninitialized },
  Hw = Ur(Rm, function () {}),
  Kw = Ur(Rm, function () {});
function Gw(e) {
  var t = e.serializeQueryArgs,
    n = e.reducerPath;
  return {
    buildQuerySelector: i,
    buildMutationSelector: u,
    selectInvalidatedBy: l,
  };
  function r(a) {
    return $e($e({}, a), jw(a.status));
  }
  function o(a) {
    var s = a[n];
    return s;
  }
  function i(a, s) {
    return function (c) {
      var p = tn(o, function (d) {
        var m, y;
        return (y =
          c === Kn || (m = d == null ? void 0 : d.queries) == null
            ? void 0
            : m[t({ queryArgs: c, endpointDefinition: s, endpointName: a })]) !=
          null
          ? y
          : Hw;
      });
      return tn(p, r);
    };
  }
  function u() {
    return function (a) {
      var s, c;
      typeof a == 'object' ? (c = (s = Xo(a)) != null ? s : Kn) : (c = a);
      var p = tn(o, function (d) {
        var m, y;
        return (y =
          c === Kn || (m = d == null ? void 0 : d.mutations) == null
            ? void 0
            : m[c]) != null
          ? y
          : Kw;
      });
      return tn(p, r);
    };
  }
  function l(a, s) {
    for (
      var c, p = a[n], d = new Set(), m = 0, y = s.map(Ms);
      m < y.length;
      m++
    ) {
      var w = y[m],
        x = p.provided[w.type];
      if (!!x)
        for (
          var v =
              (c = w.id !== void 0 ? x[w.id] : Zd(Object.values(x))) != null
                ? c
                : [],
            f = 0,
            h = v;
          f < h.length;
          f++
        ) {
          var g = h[f];
          d.add(g);
        }
    }
    return Zd(
      Array.from(d.values()).map(function (_) {
        var E = p.queries[_];
        return E
          ? [
              {
                queryCacheKey: _,
                endpointName: E.endpointName,
                originalArgs: E.originalArgs,
              },
            ]
          : [];
      })
    );
  }
}
var Yw = function (e) {
  var t = e.endpointName,
    n = e.queryArgs;
  return (
    t +
    '(' +
    JSON.stringify(n, function (r, o) {
      return oi(o)
        ? Object.keys(o)
            .sort()
            .reduce(function (i, u) {
              return (i[u] = o[u]), i;
            }, {})
        : o;
    }) +
    ')'
  );
};
function Xw() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (r) {
    var o = Ou(function (c) {
        var p, d;
        return (d = r.extractRehydrationInfo) == null
          ? void 0
          : d.call(r, c, {
              reducerPath: (p = r.reducerPath) != null ? p : 'api',
            });
      }),
      i = Nn(
        $e(
          {
            reducerPath: 'api',
            serializeQueryArgs: Yw,
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: !1,
            refetchOnFocus: !1,
            refetchOnReconnect: !1,
          },
          r
        ),
        { extractRehydrationInfo: o, tagTypes: Ru([], r.tagTypes || []) }
      ),
      u = {
        endpointDefinitions: {},
        batch: function (c) {
          c();
        },
        apiUid: mm(),
        extractRehydrationInfo: o,
        hasRehydrationInfo: Ou(function (c) {
          return o(c) != null;
        }),
      },
      l = {
        injectEndpoints: s,
        enhanceEndpoints: function (c) {
          var p = c.addTagTypes,
            d = c.endpoints;
          if (p)
            for (var m = 0, y = p; m < y.length; m++) {
              var w = y[m];
              i.tagTypes.includes(w) || i.tagTypes.push(w);
            }
          if (d)
            for (var x = 0, v = Object.entries(d); x < v.length; x++) {
              var f = v[x],
                h = f[0],
                g = f[1];
              typeof g == 'function'
                ? g(u.endpointDefinitions[h])
                : Object.assign(u.endpointDefinitions[h] || {}, g);
            }
          return l;
        },
      },
      a = e.map(function (c) {
        return c.init(l, i, u);
      });
    function s(c) {
      for (
        var p = c.endpoints({
            query: function (g) {
              return Nn($e({}, g), { type: Ft.query });
            },
            mutation: function (g) {
              return Nn($e({}, g), { type: Ft.mutation });
            },
          }),
          d = 0,
          m = Object.entries(p);
        d < m.length;
        d++
      ) {
        var y = m[d],
          w = y[0],
          x = y[1];
        if (!c.overrideExisting && w in u.endpointDefinitions) {
          typeof process < 'u';
          continue;
        }
        u.endpointDefinitions[w] = x;
        for (var v = 0, f = a; v < f.length; v++) {
          var h = f[v];
          h.injectEndpoint(w, x);
        }
      }
      return l;
    }
    return l.injectEndpoints({ endpoints: r.endpoints });
  };
}
var Jw = 2147483647 / 1e3 - 1,
  Zw = function (e) {
    var t = e.reducerPath,
      n = e.api,
      r = e.context,
      o = n.internalActions,
      i = o.removeQueryResult,
      u = o.unsubscribeQueryResult;
    return function (l) {
      var a = {};
      return function (c) {
        return function (p) {
          var d,
            m = c(p);
          if (u.match(p)) {
            var y = l.getState()[t],
              w = p.payload.queryCacheKey;
            s(
              w,
              (d = y.queries[w]) == null ? void 0 : d.endpointName,
              l,
              y.config
            );
          }
          if (n.util.resetApiState.match(p))
            for (var x = 0, v = Object.entries(a); x < v.length; x++) {
              var f = v[x],
                h = f[0],
                g = f[1];
              g && clearTimeout(g), delete a[h];
            }
          if (r.hasRehydrationInfo(p))
            for (
              var y = l.getState()[t],
                _ = r.extractRehydrationInfo(p).queries,
                E = 0,
                P = Object.entries(_);
              E < P.length;
              E++
            ) {
              var O = P[E],
                w = O[0],
                T = O[1];
              s(w, T == null ? void 0 : T.endpointName, l, y.config);
            }
          return m;
        };
      };
      function s(c, p, d, m) {
        var y,
          w = r.endpointDefinitions[p],
          x =
            (y = w == null ? void 0 : w.keepUnusedDataFor) != null
              ? y
              : m.keepUnusedDataFor,
          v = Math.max(0, Math.min(x, Jw)),
          f = a[c];
        f && clearTimeout(f),
          (a[c] = setTimeout(function () {
            var h = d.getState()[t].subscriptions[c];
            (!h || Object.keys(h).length === 0) &&
              d.dispatch(i({ queryCacheKey: c })),
              delete a[c];
          }, v * 1e3));
      }
    };
  },
  e_ = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.context.endpointDefinitions,
      o = e.mutationThunk,
      i = e.api,
      u = e.assertTagType,
      l = e.refetchQuery,
      a = i.internalActions.removeQueryResult;
    return function (c) {
      return function (p) {
        return function (d) {
          var m = p(d);
          return (
            Gr(or(o), kl(o))(d) && s(Cm(d, 'invalidatesTags', r, u), c),
            i.util.invalidateTags.match(d) &&
              s(Om(d.payload, void 0, void 0, void 0, void 0, u), c),
            m
          );
        };
      };
    };
    function s(c, p) {
      var d = p.getState(),
        m = d[t],
        y = i.util.selectInvalidatedBy(d, c);
      n.batch(function () {
        for (
          var w, x = Array.from(y.values()), v = 0, f = x;
          v < f.length;
          v++
        ) {
          var h = f[v].queryCacheKey,
            g = m.queries[h],
            _ = (w = m.subscriptions[h]) != null ? w : {};
          g &&
            (Object.keys(_).length === 0
              ? p.dispatch(a({ queryCacheKey: h }))
              : g.status !== xe.uninitialized && p.dispatch(l(g, h)));
        }
      });
    }
  },
  t_ = function (e) {
    var t = e.reducerPath,
      n = e.queryThunk,
      r = e.api,
      o = e.refetchQuery;
    return function (u) {
      var l = {};
      return function (d) {
        return function (m) {
          var y = d(m);
          return (
            (r.internalActions.updateSubscriptionOptions.match(m) ||
              r.internalActions.unsubscribeQueryResult.match(m)) &&
              s(m.payload, u),
            (n.pending.match(m) || (n.rejected.match(m) && m.meta.condition)) &&
              s(m.meta.arg, u),
            (n.fulfilled.match(m) ||
              (n.rejected.match(m) && !m.meta.condition)) &&
              a(m.meta.arg, u),
            r.util.resetApiState.match(m) && p(),
            y
          );
        };
      };
      function a(d, m) {
        var y = d.queryCacheKey,
          w = m.getState()[t],
          x = w.queries[y],
          v = w.subscriptions[y];
        if (!(!x || x.status === xe.uninitialized)) {
          var f = i(v);
          if (!!Number.isFinite(f)) {
            var h = l[y];
            h != null &&
              h.timeout &&
              (clearTimeout(h.timeout), (h.timeout = void 0));
            var g = Date.now() + f,
              _ = (l[y] = {
                nextPollTimestamp: g,
                pollingInterval: f,
                timeout: setTimeout(function () {
                  (_.timeout = void 0), m.dispatch(o(x, y));
                }, f),
              });
          }
        }
      }
      function s(d, m) {
        var y = d.queryCacheKey,
          w = m.getState()[t],
          x = w.queries[y],
          v = w.subscriptions[y];
        if (!(!x || x.status === xe.uninitialized)) {
          var f = i(v);
          if (!Number.isFinite(f)) {
            c(y);
            return;
          }
          var h = l[y],
            g = Date.now() + f;
          (!h || g < h.nextPollTimestamp) && a({ queryCacheKey: y }, m);
        }
      }
      function c(d) {
        var m = l[d];
        m != null && m.timeout && clearTimeout(m.timeout), delete l[d];
      }
      function p() {
        for (var d = 0, m = Object.keys(l); d < m.length; d++) {
          var y = m[d];
          c(y);
        }
      }
    };
    function i(u) {
      u === void 0 && (u = {});
      for (
        var l = Number.POSITIVE_INFINITY, a = 0, s = Object.values(u);
        a < s.length;
        a++
      ) {
        var c = s[a];
        c.pollingInterval && (l = Math.min(c.pollingInterval, l));
      }
      return l;
    }
  },
  n_ = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.api,
      o = e.refetchQuery,
      i = r.internalActions.removeQueryResult;
    return function (l) {
      return function (a) {
        return function (s) {
          var c = a(s);
          return (
            Wc.match(s) && u(l, 'refetchOnFocus'),
            Hc.match(s) && u(l, 'refetchOnReconnect'),
            c
          );
        };
      };
    };
    function u(l, a) {
      var s = l.getState()[t],
        c = s.queries,
        p = s.subscriptions;
      n.batch(function () {
        for (var d = 0, m = Object.keys(p); d < m.length; d++) {
          var y = m[d],
            w = c[y],
            x = p[y];
          if (!(!x || !w)) {
            var v =
              Object.values(x).some(function (f) {
                return f[a] === !0;
              }) ||
              (Object.values(x).every(function (f) {
                return f[a] === void 0;
              }) &&
                s.config[a]);
            v &&
              (Object.keys(x).length === 0
                ? l.dispatch(i({ queryCacheKey: y }))
                : w.status !== xe.uninitialized && l.dispatch(o(w, y)));
          }
        }
      });
    }
  },
  ip = new Error('Promise never resolved before cacheEntryRemoved.'),
  r_ = function (e) {
    var t = e.api,
      n = e.reducerPath,
      r = e.context,
      o = e.queryThunk,
      i = e.mutationThunk,
      u = Ns(o),
      l = Ns(i),
      a = or(o, i);
    return function (s) {
      var c = {};
      return function (m) {
        return function (y) {
          var w = s.getState(),
            x = m(y),
            v = p(y);
          if (o.pending.match(y)) {
            var f = w[n].queries[v],
              h = s.getState()[n].queries[v];
            !f &&
              h &&
              d(
                y.meta.arg.endpointName,
                y.meta.arg.originalArgs,
                v,
                s,
                y.meta.requestId
              );
          } else if (i.pending.match(y)) {
            var h = s.getState()[n].mutations[v];
            h &&
              d(
                y.meta.arg.endpointName,
                y.meta.arg.originalArgs,
                v,
                s,
                y.meta.requestId
              );
          } else if (a(y)) {
            var g = c[v];
            g != null &&
              g.valueResolved &&
              (g.valueResolved({ data: y.payload, meta: y.meta.baseQueryMeta }),
              delete g.valueResolved);
          } else if (
            t.internalActions.removeQueryResult.match(y) ||
            t.internalActions.removeMutationResult.match(y)
          ) {
            var g = c[v];
            g && (delete c[v], g.cacheEntryRemoved());
          } else if (t.util.resetApiState.match(y))
            for (var _ = 0, E = Object.entries(c); _ < E.length; _++) {
              var P = E[_],
                O = P[0],
                g = P[1];
              delete c[O], g.cacheEntryRemoved();
            }
          return x;
        };
      };
      function p(m) {
        return u(m)
          ? m.meta.arg.queryCacheKey
          : l(m)
          ? m.meta.requestId
          : t.internalActions.removeQueryResult.match(m)
          ? m.payload.queryCacheKey
          : t.internalActions.removeMutationResult.match(m)
          ? Xo(m.payload)
          : '';
      }
      function d(m, y, w, x, v) {
        var f = r.endpointDefinitions[m],
          h = f == null ? void 0 : f.onCacheEntryAdded;
        if (!!h) {
          var g = {},
            _ = new Promise(function (M) {
              g.cacheEntryRemoved = M;
            }),
            E = Promise.race([
              new Promise(function (M) {
                g.valueResolved = M;
              }),
              _.then(function () {
                throw ip;
              }),
            ]);
          E.catch(function () {}), (c[w] = g);
          var P = t.endpoints[m].select(f.type === Ft.query ? y : w),
            O = x.dispatch(function (M, z, B) {
              return B;
            }),
            T = Nn($e({}, x), {
              getCacheEntry: function () {
                return P(x.getState());
              },
              requestId: v,
              extra: O,
              updateCachedData:
                f.type === Ft.query
                  ? function (M) {
                      return x.dispatch(t.util.updateQueryData(m, y, M));
                    }
                  : void 0,
              cacheDataLoaded: E,
              cacheEntryRemoved: _,
            }),
            R = h(y, T);
          Promise.resolve(R).catch(function (M) {
            if (M !== ip) throw M;
          });
        }
      }
    };
  },
  o_ = function (e) {
    var t = e.api,
      n = e.context,
      r = e.queryThunk,
      o = e.mutationThunk,
      i = Bc(r, o),
      u = Yo(r, o),
      l = or(r, o);
    return function (a) {
      var s = {};
      return function (c) {
        return function (p) {
          var d,
            m,
            y,
            w = c(p);
          if (i(p)) {
            var x = p.meta,
              v = x.requestId,
              f = x.arg,
              h = f.endpointName,
              g = f.originalArgs,
              _ = n.endpointDefinitions[h],
              E = _ == null ? void 0 : _.onQueryStarted;
            if (E) {
              var P = {},
                O = new Promise(function (ne, ee) {
                  (P.resolve = ne), (P.reject = ee);
                });
              O.catch(function () {}), (s[v] = P);
              var T = t.endpoints[h].select(_.type === Ft.query ? g : v),
                R = a.dispatch(function (ne, ee, I) {
                  return I;
                }),
                M = Nn($e({}, a), {
                  getCacheEntry: function () {
                    return T(a.getState());
                  },
                  requestId: v,
                  extra: R,
                  updateCachedData:
                    _.type === Ft.query
                      ? function (ne) {
                          return a.dispatch(t.util.updateQueryData(h, g, ne));
                        }
                      : void 0,
                  queryFulfilled: O,
                });
              E(g, M);
            }
          } else if (l(p)) {
            var z = p.meta,
              v = z.requestId,
              B = z.baseQueryMeta;
            (d = s[v]) == null || d.resolve({ data: p.payload, meta: B }),
              delete s[v];
          } else if (u(p)) {
            var te = p.meta,
              v = te.requestId,
              Z = te.rejectedWithValue,
              B = te.baseQueryMeta;
            (y = s[v]) == null ||
              y.reject({
                error: (m = p.payload) != null ? m : p.error,
                isUnhandledError: !Z,
                meta: B,
              }),
              delete s[v];
          }
          return w;
        };
      };
    };
  },
  i_ = function (e) {
    var t = e.api,
      n = e.context.apiUid,
      r = e.reducerPath;
    return function (o) {
      var i = !1;
      return function (u) {
        return function (l) {
          var a, s;
          i ||
            ((i = !0), o.dispatch(t.internalActions.middlewareRegistered(n)));
          var c = u(l);
          return (
            t.util.resetApiState.match(l) &&
              o.dispatch(t.internalActions.middlewareRegistered(n)),
            typeof process < 'u',
            c
          );
        };
      };
    };
  };
function u_(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = { invalidateTags: ft(t + '/invalidateTags') },
    o = [i_, Zw, e_, t_, n_, r_, o_].map(function (l) {
      return l(Nn($e({}, e), { refetchQuery: u }));
    }),
    i = function (l) {
      return function (a) {
        var s = qr.apply(
          void 0,
          o.map(function (c) {
            return c(l);
          })
        )(a);
        return function (c) {
          return l.getState()[t] ? s(c) : a(c);
        };
      };
    };
  return { middleware: i, actions: r };
  function u(l, a, s) {
    return (
      s === void 0 && (s = {}),
      n(
        $e(
          {
            type: 'query',
            endpointName: l.endpointName,
            originalArgs: l.originalArgs,
            subscribe: !1,
            forceRefetch: !0,
            queryCacheKey: a,
          },
          s
        )
      )
    );
  }
}
function l_(e) {
  var t = e.serializeQueryArgs,
    n = e.queryThunk,
    r = e.mutationThunk,
    o = e.api,
    i = e.context,
    u = {},
    l = {},
    a = o.internalActions,
    s = a.unsubscribeQueryResult,
    c = a.removeMutationResult,
    p = a.updateSubscriptionOptions;
  return {
    buildInitiateQuery: y,
    buildInitiateMutation: w,
    getRunningOperationPromises: m,
    getRunningOperationPromise: d,
  };
  function d(x, v) {
    var f = i.endpointDefinitions[x];
    if (f.type === Ft.query) {
      var h = t({ queryArgs: v, endpointDefinition: f, endpointName: x });
      return u[h];
    } else return l[v];
  }
  function m() {
    return Ru(Ru([], Object.values(u)), Object.values(l)).filter(function (x) {
      return !!x;
    });
  }
  function y(x, v) {
    var f = function (h, g) {
      var _ = g === void 0 ? {} : g,
        E = _.subscribe,
        P = E === void 0 ? !0 : E,
        O = _.forceRefetch,
        T = _.subscriptionOptions;
      return function (R, M) {
        var z = t({ queryArgs: h, endpointDefinition: v, endpointName: x }),
          B = n({
            type: 'query',
            subscribe: P,
            forceRefetch: O,
            subscriptionOptions: T,
            endpointName: x,
            originalArgs: h,
            queryCacheKey: z,
          }),
          te = R(B),
          Z = te.requestId,
          ne = te.abort,
          ee = Object.assign(
            Promise.all([u[z], te]).then(function () {
              return o.endpoints[x].select(h)(M());
            }),
            {
              arg: h,
              requestId: Z,
              subscriptionOptions: T,
              queryCacheKey: z,
              abort: ne,
              unwrap: function () {
                return Ol(this, null, function () {
                  var I;
                  return Pl(this, function (L) {
                    switch (L.label) {
                      case 0:
                        return [4, ee];
                      case 1:
                        if (((I = L.sent()), I.isError)) throw I.error;
                        return [2, I.data];
                    }
                  });
                });
              },
              refetch: function () {
                R(f(h, { subscribe: !1, forceRefetch: !0 }));
              },
              unsubscribe: function () {
                P && R(s({ queryCacheKey: z, requestId: Z }));
              },
              updateSubscriptionOptions: function (I) {
                (ee.subscriptionOptions = I),
                  R(
                    p({
                      endpointName: x,
                      requestId: Z,
                      queryCacheKey: z,
                      options: I,
                    })
                  );
              },
            }
          );
        return (
          u[z] ||
            ((u[z] = ee),
            ee.then(function () {
              delete u[z];
            })),
          ee
        );
      };
    };
    return f;
  }
  function w(x) {
    return function (v, f) {
      var h = f === void 0 ? {} : f,
        g = h.track,
        _ = g === void 0 ? !0 : g,
        E = h.fixedCacheKey;
      return function (P, O) {
        var T = r({
            type: 'mutation',
            endpointName: x,
            originalArgs: v,
            track: _,
            fixedCacheKey: E,
          }),
          R = P(T),
          M = R.requestId,
          z = R.abort,
          B = R.unwrap,
          te = R.unwrap()
            .then(function (ee) {
              return { data: ee };
            })
            .catch(function (ee) {
              return { error: ee };
            }),
          Z = function () {
            P(c({ requestId: M, fixedCacheKey: E }));
          },
          ne = Object.assign(te, {
            arg: R.arg,
            requestId: M,
            abort: z,
            unwrap: B,
            unsubscribe: Z,
            reset: Z,
          });
        return (
          (l[M] = ne),
          ne.then(function () {
            delete l[M];
          }),
          E &&
            ((l[E] = ne),
            ne.then(function () {
              l[E] === ne && delete l[E];
            })),
          ne
        );
      };
    };
  }
}
function pn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, Ru([e], t));
}
var up = Symbol(),
  a_ = function () {
    return {
      name: up,
      init: function (e, t, n) {
        var r = t.baseQuery,
          o = t.tagTypes,
          i = t.reducerPath,
          u = t.serializeQueryArgs,
          l = t.keepUnusedDataFor,
          a = t.refetchOnMountOrArgChange,
          s = t.refetchOnFocus,
          c = t.refetchOnReconnect;
        Uc();
        var p = function (I) {
          return typeof process < 'u', I;
        };
        Object.assign(e, {
          reducerPath: i,
          endpoints: {},
          internalActions: {
            onOnline: Hc,
            onOffline: Pm,
            onFocus: Wc,
            onFocusLost: km,
          },
          util: {},
        });
        var d = Vw({
            baseQuery: r,
            reducerPath: i,
            context: n,
            api: e,
            serializeQueryArgs: u,
          }),
          m = d.queryThunk,
          y = d.mutationThunk,
          w = d.patchQueryData,
          x = d.updateQueryData,
          v = d.prefetch,
          f = d.buildMatchThunkActions,
          h = Ww({
            context: n,
            queryThunk: m,
            mutationThunk: y,
            reducerPath: i,
            assertTagType: p,
            config: {
              refetchOnFocus: s,
              refetchOnReconnect: c,
              refetchOnMountOrArgChange: a,
              keepUnusedDataFor: l,
              reducerPath: i,
            },
          }),
          g = h.reducer,
          _ = h.actions;
        pn(e.util, {
          patchQueryData: w,
          updateQueryData: x,
          prefetch: v,
          resetApiState: _.resetApiState,
        }),
          pn(e.internalActions, _),
          Object.defineProperty(e.util, 'updateQueryResult', {
            get: function () {
              return typeof process < 'u', e.util.updateQueryData;
            },
          }),
          Object.defineProperty(e.util, 'patchQueryResult', {
            get: function () {
              return typeof process < 'u', e.util.patchQueryData;
            },
          });
        var E = u_({
            reducerPath: i,
            context: n,
            queryThunk: m,
            mutationThunk: y,
            api: e,
            assertTagType: p,
          }),
          P = E.middleware,
          O = E.actions;
        pn(e.util, O), pn(e, { reducer: g, middleware: P });
        var T = Gw({ serializeQueryArgs: u, reducerPath: i }),
          R = T.buildQuerySelector,
          M = T.buildMutationSelector,
          z = T.selectInvalidatedBy;
        pn(e.util, { selectInvalidatedBy: z });
        var B = l_({
            queryThunk: m,
            mutationThunk: y,
            api: e,
            serializeQueryArgs: u,
            context: n,
          }),
          te = B.buildInitiateQuery,
          Z = B.buildInitiateMutation,
          ne = B.getRunningOperationPromises,
          ee = B.getRunningOperationPromise;
        return (
          pn(e.util, {
            getRunningOperationPromises: ne,
            getRunningOperationPromise: ee,
          }),
          {
            name: up,
            injectEndpoint: function (I, L) {
              var K,
                ue,
                re = e;
              (ue = (K = re.endpoints)[I]) != null || (K[I] = {}),
                Uw(L)
                  ? pn(
                      re.endpoints[I],
                      { select: R(I, L), initiate: te(I, L) },
                      f(m, I)
                    )
                  : qw(L) &&
                    pn(
                      re.endpoints[I],
                      { select: M(), initiate: Z(I) },
                      f(y, I)
                    );
            },
          }
        );
      },
    };
  },
  s_ =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  c_ = Object.defineProperty,
  f_ = Object.defineProperties,
  d_ = Object.getOwnPropertyDescriptors,
  lp = Object.getOwnPropertySymbols,
  p_ = Object.prototype.hasOwnProperty,
  v_ = Object.prototype.propertyIsEnumerable,
  ap = function (e, t, n) {
    return t in e
      ? c_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Yt = function (e, t) {
    for (var n in t || (t = {})) p_.call(t, n) && ap(e, n, t[n]);
    if (lp)
      for (var r = 0, o = lp(t); r < o.length; r++) {
        var n = o[r];
        v_.call(t, n) && ap(e, n, t[n]);
      }
    return e;
  },
  Vi = function (e, t) {
    return f_(e, d_(t));
  };
function sp(e, t, n, r) {
  var o = N.exports.useMemo(
      function () {
        return {
          queryArgs: e,
          serialized:
            typeof e == 'object'
              ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
              : e,
        };
      },
      [e, t, n, r]
    ),
    i = N.exports.useRef(o);
  return (
    N.exports.useEffect(
      function () {
        i.current.serialized !== o.serialized && (i.current = o);
      },
      [o]
    ),
    i.current.serialized === o.serialized ? i.current.queryArgs : e
  );
}
var Pa = Symbol();
function Oa(e) {
  var t = N.exports.useRef(e);
  return (
    N.exports.useEffect(
      function () {
        _u(t.current, e) || (t.current = e);
      },
      [e]
    ),
    _u(t.current, e) ? t.current : e
  );
}
var h_ =
    typeof window < 'u' && window.document && window.document.createElement
      ? N.exports.useLayoutEffect
      : N.exports.useEffect,
  m_ = function (e) {
    return e;
  },
  y_ = function (e) {
    return e;
  },
  g_ = function (e) {
    return e.isUninitialized
      ? Vi(Yt({}, e), {
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: xe.pending,
        })
      : e;
  };
function S_(e) {
  var t = e.api,
    n = e.moduleOptions,
    r = n.batch,
    o = n.useDispatch,
    i = n.useSelector,
    u = n.useStore,
    l = n.unstable__sideEffectsInRender,
    a = e.serializeQueryArgs,
    s = e.context,
    c = l
      ? function (w) {
          return w();
        }
      : N.exports.useEffect;
  return { buildQueryHooks: m, buildMutationHook: y, usePrefetch: d };
  function p(w, x, v) {
    if ((x == null ? void 0 : x.endpointName) && w.isUninitialized) {
      var f = x.endpointName,
        h = s.endpointDefinitions[f];
      a({
        queryArgs: x.originalArgs,
        endpointDefinition: h,
        endpointName: f,
      }) === a({ queryArgs: v, endpointDefinition: h, endpointName: f }) &&
        (x = void 0);
    }
    var g = w.isSuccess ? w.data : x == null ? void 0 : x.data;
    g === void 0 && (g = w.data);
    var _ = g !== void 0,
      E = w.isLoading,
      P = !_ && E,
      O = w.isSuccess || (E && _);
    return Vi(Yt({}, w), {
      data: g,
      currentData: w.data,
      isFetching: E,
      isLoading: P,
      isSuccess: O,
    });
  }
  function d(w, x) {
    var v = o(),
      f = Oa(x);
    return N.exports.useCallback(
      function (h, g) {
        return v(t.util.prefetch(w, h, Yt(Yt({}, f), g)));
      },
      [w, v, f]
    );
  }
  function m(w) {
    var x = function (h, g) {
        var _ = g === void 0 ? {} : g,
          E = _.refetchOnReconnect,
          P = _.refetchOnFocus,
          O = _.refetchOnMountOrArgChange,
          T = _.skip,
          R = T === void 0 ? !1 : T,
          M = _.pollingInterval,
          z = M === void 0 ? 0 : M,
          B = t.endpoints[w].initiate,
          te = o(),
          Z = sp(R ? Kn : h, a, s.endpointDefinitions[w], w),
          ne = Oa({
            refetchOnReconnect: E,
            refetchOnFocus: P,
            pollingInterval: z,
          }),
          ee = N.exports.useRef(),
          I = ee.current || {},
          L = I.queryCacheKey,
          K = I.requestId,
          ue = i(function (re) {
            var ae;
            return (
              !!L &&
              !!K &&
              !((ae = re[t.reducerPath].subscriptions[L]) != null && ae[K])
            );
          });
        return (
          c(
            function () {
              ee.current = void 0;
            },
            [ue]
          ),
          c(
            function () {
              var re,
                ae = ee.current;
              if ((typeof process < 'u', Z === Kn)) {
                ae == null || ae.unsubscribe(), (ee.current = void 0);
                return;
              }
              var Pe =
                (re = ee.current) == null ? void 0 : re.subscriptionOptions;
              if (!ae || ae.arg !== Z) {
                ae == null || ae.unsubscribe();
                var Ee = te(B(Z, { subscriptionOptions: ne, forceRefetch: O }));
                ee.current = Ee;
              } else ne !== Pe && ae.updateSubscriptionOptions(ne);
            },
            [te, B, O, Z, ne, ue]
          ),
          N.exports.useEffect(function () {
            return function () {
              var re;
              (re = ee.current) == null || re.unsubscribe(),
                (ee.current = void 0);
            };
          }, []),
          N.exports.useMemo(function () {
            return {
              refetch: function () {
                var re;
                return void ((re = ee.current) == null ? void 0 : re.refetch());
              },
            };
          }, [])
        );
      },
      v = function (h) {
        var g = h === void 0 ? {} : h,
          _ = g.refetchOnReconnect,
          E = g.refetchOnFocus,
          P = g.pollingInterval,
          O = P === void 0 ? 0 : P,
          T = t.endpoints[w].initiate,
          R = o(),
          M = N.exports.useState(Pa),
          z = M[0],
          B = M[1],
          te = N.exports.useRef(),
          Z = Oa({
            refetchOnReconnect: _,
            refetchOnFocus: E,
            pollingInterval: O,
          });
        c(
          function () {
            var I,
              L,
              K = (I = te.current) == null ? void 0 : I.subscriptionOptions;
            Z !== K &&
              ((L = te.current) == null || L.updateSubscriptionOptions(Z));
          },
          [Z]
        );
        var ne = N.exports.useRef(Z);
        c(
          function () {
            ne.current = Z;
          },
          [Z]
        );
        var ee = N.exports.useCallback(
          function (I, L) {
            L === void 0 && (L = !1);
            var K;
            return (
              r(function () {
                var ue;
                (ue = te.current) == null || ue.unsubscribe(),
                  (te.current = K =
                    R(
                      T(I, {
                        subscriptionOptions: ne.current,
                        forceRefetch: !L,
                      })
                    )),
                  B(I);
              }),
              K
            );
          },
          [R, T]
        );
        return (
          N.exports.useEffect(function () {
            return function () {
              var I;
              (I = te == null ? void 0 : te.current) == null || I.unsubscribe();
            };
          }, []),
          N.exports.useEffect(
            function () {
              z !== Pa && !te.current && ee(z, !0);
            },
            [z, ee]
          ),
          N.exports.useMemo(
            function () {
              return [ee, z];
            },
            [ee, z]
          )
        );
      },
      f = function (h, g) {
        var _ = g === void 0 ? {} : g,
          E = _.skip,
          P = E === void 0 ? !1 : E,
          O = _.selectFromResult,
          T = O === void 0 ? m_ : O,
          R = t.endpoints[w].select,
          M = sp(P ? Kn : h, a, s.endpointDefinitions[w], w),
          z = N.exports.useRef(),
          B = N.exports.useMemo(
            function () {
              return tn(
                [
                  R(M),
                  function (I, L) {
                    return L;
                  },
                  function (I) {
                    return M;
                  },
                ],
                p
              );
            },
            [R, M]
          ),
          te = N.exports.useMemo(
            function () {
              return tn([B], T);
            },
            [B, T]
          ),
          Z = i(function (I) {
            return te(I, z.current);
          }, _u),
          ne = u(),
          ee = B(ne.getState(), z.current);
        return (
          h_(
            function () {
              z.current = ee;
            },
            [ee]
          ),
          Z
        );
      };
    return {
      useQueryState: f,
      useQuerySubscription: x,
      useLazyQuerySubscription: v,
      useLazyQuery: function (h) {
        var g = v(h),
          _ = g[0],
          E = g[1],
          P = f(E, Vi(Yt({}, h), { skip: E === Pa })),
          O = N.exports.useMemo(
            function () {
              return { lastArg: E };
            },
            [E]
          );
        return N.exports.useMemo(
          function () {
            return [_, P, O];
          },
          [_, P, O]
        );
      },
      useQuery: function (h, g) {
        var _ = x(h, g),
          E = f(
            h,
            Yt(
              {
                selectFromResult:
                  h === Kn || (g == null ? void 0 : g.skip) ? void 0 : g_,
              },
              g
            )
          ),
          P = E.data,
          O = E.status,
          T = E.isLoading,
          R = E.isSuccess,
          M = E.isError,
          z = E.error;
        return (
          N.exports.useDebugValue({
            data: P,
            status: O,
            isLoading: T,
            isSuccess: R,
            isError: M,
            error: z,
          }),
          N.exports.useMemo(
            function () {
              return Yt(Yt({}, E), _);
            },
            [E, _]
          )
        );
      },
    };
  }
  function y(w) {
    return function (x) {
      var v = x === void 0 ? {} : x,
        f = v.selectFromResult,
        h = f === void 0 ? y_ : f,
        g = v.fixedCacheKey,
        _ = t.endpoints[w],
        E = _.select,
        P = _.initiate,
        O = o(),
        T = N.exports.useState(),
        R = T[0],
        M = T[1];
      N.exports.useEffect(
        function () {
          return function () {
            (R != null && R.arg.fixedCacheKey) || R == null || R.reset();
          };
        },
        [R]
      );
      var z = N.exports.useCallback(
          function (be) {
            var Te = O(P(be, { fixedCacheKey: g }));
            return M(Te), Te;
          },
          [O, P, g]
        ),
        B = (R || {}).requestId,
        te = N.exports.useMemo(
          function () {
            return tn(
              [
                E({
                  fixedCacheKey: g,
                  requestId: R == null ? void 0 : R.requestId,
                }),
              ],
              h
            );
          },
          [E, R, h, g]
        ),
        Z = i(te, _u),
        ne = g == null ? (R == null ? void 0 : R.arg.originalArgs) : void 0,
        ee = N.exports.useCallback(
          function () {
            r(function () {
              R && M(void 0),
                g &&
                  O(
                    t.internalActions.removeMutationResult({
                      requestId: B,
                      fixedCacheKey: g,
                    })
                  );
            });
          },
          [O, g, R, B]
        ),
        I = Z.endpointName,
        L = Z.data,
        K = Z.status,
        ue = Z.isLoading,
        re = Z.isSuccess,
        ae = Z.isError,
        Pe = Z.error;
      N.exports.useDebugValue({
        endpointName: I,
        data: L,
        status: K,
        isLoading: ue,
        isSuccess: re,
        isError: ae,
        error: Pe,
      });
      var Ee = N.exports.useMemo(
        function () {
          return Vi(Yt({}, Z), { originalArgs: ne, reset: ee });
        },
        [Z, ne, ee]
      );
      return N.exports.useMemo(
        function () {
          return [z, Ee];
        },
        [z, Ee]
      );
    };
  }
}
var Iu;
(function (e) {
  (e.query = 'query'), (e.mutation = 'mutation');
})(Iu || (Iu = {}));
function w_(e) {
  return e.type === Iu.query;
}
function __(e) {
  return e.type === Iu.mutation;
}
function Ca(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function Ii(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, s_([e], t));
}
var E_ = Symbol(),
  x_ = function (e) {
    var t = e === void 0 ? {} : e,
      n = t.batch,
      r = n === void 0 ? $u.exports.unstable_batchedUpdates : n,
      o = t.useDispatch,
      i = o === void 0 ? em : o,
      u = t.useSelector,
      l = u === void 0 ? Wh : u,
      a = t.useStore,
      s = a === void 0 ? Zh : a,
      c = t.unstable__sideEffectsInRender,
      p = c === void 0 ? !1 : c;
    return {
      name: E_,
      init: function (d, m, y) {
        var w = m.serializeQueryArgs,
          x = d,
          v = S_({
            api: d,
            moduleOptions: {
              batch: r,
              useDispatch: i,
              useSelector: l,
              useStore: s,
              unstable__sideEffectsInRender: p,
            },
            serializeQueryArgs: w,
            context: y,
          }),
          f = v.buildQueryHooks,
          h = v.buildMutationHook,
          g = v.usePrefetch;
        return (
          Ii(x, { usePrefetch: g }),
          Ii(y, { batch: r }),
          {
            injectEndpoint: function (_, E) {
              if (w_(E)) {
                var P = f(_),
                  O = P.useQuery,
                  T = P.useLazyQuery,
                  R = P.useLazyQuerySubscription,
                  M = P.useQueryState,
                  z = P.useQuerySubscription;
                Ii(x.endpoints[_], {
                  useQuery: O,
                  useLazyQuery: T,
                  useLazyQuerySubscription: R,
                  useQueryState: M,
                  useQuerySubscription: z,
                }),
                  (d['use' + Ca(_) + 'Query'] = O),
                  (d['useLazy' + Ca(_) + 'Query'] = T);
              } else if (__(E)) {
                var B = h(_);
                Ii(x.endpoints[_], { useMutation: B }),
                  (d['use' + Ca(_) + 'Mutation'] = B);
              }
            },
          }
        );
      },
    };
  },
  Rl = Xw(a_(), x_());
const Tl = 'https://ya-praktikum.tech/api/v2',
  zE = 'eng',
  k_ = {
    amount: 200,
    size: { min: 1, max: 5, giant: 9 },
    duration: { min: 10, max: 40 },
  },
  Wi = Rl({
    reducerPath: 'auth/api',
    baseQuery: Cl({ baseUrl: `${Tl}/auth` }),
    endpoints: e => ({
      checkAuthUser: e.query({
        query: () => ({ url: '/user', credentials: 'include' }),
      }),
      logout: e.mutation({
        query: () => ({
          url: '/logout',
          method: 'POST',
          credentials: 'include',
          responseHandler: t => t.text(),
        }),
      }),
      signIn: e.mutation({
        query: t => ({
          url: '/signin',
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(t),
          credentials: 'include',
          responseHandler: n => n.text(),
        }),
      }),
      signUp: e.mutation({
        query: t => ({
          url: '/signup',
          method: 'POST',
          body: t,
          credentials: 'include',
        }),
      }),
    }),
  }),
  {
    useLazyCheckAuthUserQuery: P_,
    useLogoutMutation: O_,
    useSignInMutation: C_,
    useSignUpMutation: R_,
  } = Wi,
  T_ = wm.actions,
  I_ = wm.reducer,
  cp = {
    userData: {
      avatar: null,
      display_name: null,
      email: '',
      first_name: '',
      id: null,
      login: '',
      phone: '',
      second_name: '',
    },
  },
  Tm = ui.exports.createSlice({
    name: 'user',
    initialState: cp,
    reducers: {
      setUserData(e, t) {
        e.userData = { ...e.userData, ...t.payload };
      },
      resetUserState: () => cp,
    },
  }),
  Ra = { credentials: 'include', method: 'PUT' },
  fp = e => (delete e.status, e),
  Hi = Rl({
    reducerPath: 'user/api',
    baseQuery: Cl({ baseUrl: `${Tl}/user` }),
    endpoints: e => ({
      fetchUserData: e.query({
        query: t => ({ url: `/${t}`, credentials: 'include' }),
      }),
      updateProfile: e.query({
        query: t => ({ ...Ra, url: '/profile', body: t }),
        transformResponse: fp,
      }),
      updateAvatar: e.query({
        query: t => ({ ...Ra, url: '/profile/avatar', body: t }),
        transformResponse: fp,
      }),
      updatePassword: e.query({
        query: t => ({
          ...Ra,
          url: '/password',
          body: t,
          responseHandler: n => n.text(),
        }),
      }),
    }),
  }),
  {
    useLazyFetchUserDataQuery: LE,
    useLazyUpdateAvatarQuery: bE,
    useLazyUpdatePasswordQuery: FE,
    useLazyUpdateProfileQuery: UE,
  } = Hi,
  j_ = Tm.actions,
  A_ = Tm.reducer,
  Ki = Rl({
    reducerPath: 'resources/api',
    baseQuery: Cl({ baseUrl: `${Tl}/resources` }),
    endpoints: e => ({
      fetchAvatar: e.query({
        query: t => ({
          url: `${t}`,
          credentials: 'include',
          responseHandler: n => n.blob(),
        }),
      }),
    }),
  }),
  { useLazyFetchAvatarQuery: qE } = Ki,
  N_ = { leaders: [] },
  Im = ui.exports.createSlice({
    name: 'leaderBoard',
    initialState: N_,
    reducers: {
      setLeaders(e, { payload: t }) {
        e.leaders = t;
      },
      setLeaderUserData(e, { payload: t }) {
        e.leaders = e.leaders.map(n => {
          const { id: r, avatar: o, display_name: i, login: u } = t;
          return r === n.id ? { ...n, avatar: o, nickname: i || u } : n;
        });
      },
    },
  });
var dr = (e => (
  (e.TEAM_NAME = 'andromeda'), (e.RATING_FIELD_NAME = 'highScore'), e
))(dr || {});
const Ta = { method: 'POST', credentials: 'include' },
  Gi = Rl({
    reducerPath: 'leaderBoard/api',
    baseQuery: Cl({ baseUrl: `${Tl}/leaderboard` }),
    endpoints: e => ({
      addLeaderBoard: e.query({
        query: ({
          data: t,
          ratingFieldName: n = dr.RATING_FIELD_NAME,
          teamName: r = dr.TEAM_NAME,
        }) => ({
          ...Ta,
          url: '',
          body: { data: t, ratingFieldName: n, teamName: r },
          responseHandler: o => o.text(),
        }),
      }),
      fetchAllLeaderBoard: e.query({
        query: ({
          ratingFieldName: t = dr.RATING_FIELD_NAME,
          cursor: n = 0,
          limit: r = 13,
        }) => ({
          ...Ta,
          url: '/all',
          body: { ratingFieldName: t, cursor: n, limit: r },
        }),
        transformResponse: t => t.map(n => n.data),
      }),
      fetchTeamLeaderBoard: e.query({
        query: ({
          teamName: t = dr.TEAM_NAME,
          ratingFieldName: n = dr.RATING_FIELD_NAME,
          cursor: r = 0,
          limit: o = 13,
        }) => ({
          ...Ta,
          url: `/${t}`,
          body: { ratingFieldName: n, cursor: r, limit: o },
        }),
        transformResponse: t => t.map(n => n.data),
      }),
    }),
  }),
  {
    useLazyFetchAllLeaderBoardQuery: QE,
    useLazyAddLeaderBoardQuery: BE,
    useLazyFetchTeamLeaderBoardQuery: VE,
  } = Gi,
  M_ = Im.actions,
  D_ = Im.reducer,
  $_ = dw({
    reducer: {
      [Hi.reducerPath]: Hi.reducer,
      [Wi.reducerPath]: Wi.reducer,
      [Ki.reducerPath]: Ki.reducer,
      [Gi.reducerPath]: Gi.reducer,
      user: A_,
      auth: I_,
      game: Pw,
      leaderBoard: D_,
    },
    middleware: e =>
      e({ serializableCheck: !1 })
        .concat(Hi.middleware)
        .concat(Wi.middleware)
        .concat(Ki.middleware)
        .concat(Gi.middleware),
    devTools: !1,
  }),
  z_ = { ...j_, ...T_, ...kw, ...M_ },
  L_ = () => {
    const e = em();
    return sm(z_, e);
  },
  b_ = '_boardTable_1q3lj_1',
  F_ = '_boardTable__table_1q3lj_1',
  U_ = '_boardTable__table_empty_1q3lj_1',
  q_ = '_boardTable__table_td_1q3lj_1',
  Q_ = '_boardTable__table_th_1q3lj_1',
  B_ = '_boardTable__table_avatar_1q3lj_1',
  V_ = '_boardTable__table_tr_1q3lj_1',
  WE = {
    boardTable: b_,
    boardTable__table: F_,
    boardTable__table_empty: U_,
    boardTable__table_td: q_,
    boardTable__table_th: Q_,
    boardTable__table_avatar: B_,
    boardTable__table_tr: V_,
  },
  W_ = '_titlePage_1hujb_1',
  H_ = { titlePage: W_ };
function K_(e) {
  return F('h1', { className: H_.titlePage, children: e.children });
}
const G_ = '_errorBoundary_13950_1',
  Y_ = '_errorBoundary__content_13950_1',
  X_ = '_errorBoundary__message_13950_1',
  J_ = '_errorBoundary__message_button_13950_1',
  ji = {
    errorBoundary: G_,
    errorBoundary__content: Y_,
    errorBoundary__message: X_,
    errorBoundary__message_button: J_,
  };
class Z_ extends N.exports.Component {
  constructor(n) {
    super(n);
    Fl(this, 'messageError');
    Fl(this, 'resetPage', () => {
      window.location.reload();
    });
    (this.state = { hasError: !1 }),
      (this.messageError = this.props.messageError);
  }
  static getDerivedStateFromError(n) {
    return console.error(n), { hasError: !0 };
  }
  componentDidCatch(n, r) {
    console.error(n, r);
  }
  render() {
    if (this.state.hasError) {
      const n = this.messageError
          ? this.messageError
          : '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u041C\u044B \u0443\u0436\u0435 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u043B\u0438 \u043A \u0435\u0435 \u0443\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044E.',
        r =
          '\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.';
      return F('div', {
        className: ji.errorBoundary,
        children: Kt('div', {
          className: ji.errorBoundary__content,
          children: [
            F(K_, { children: 'App-Error' }),
            F('p', { children: n }),
            Kt('div', {
              className: ji.errorBoundary__message,
              children: [
                F('span', { children: r }),
                F(Il, {
                  className: ji.errorBoundary__message_button,
                  onClick: this.resetPage,
                  children:
                    '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443',
                }),
                F('span', {
                  children:
                    '\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0432 console.',
                }),
              ],
            }),
          ],
        }),
      });
    }
    return this.props.children;
  }
}
const eE = '_errorSample_a2trw_1',
  tE = '_errorSample__code_a2trw_1',
  HE = { errorSample: eE, errorSample__code: tE };
function jm(e) {
  const { className: t, ...n } = e,
    { typeComponent: r } = n,
    o = Sn(r, t);
  if (r === 'textarea') {
    const { typeComponent: i, ...u } = n;
    return F('textarea', { ...u, className: o });
  } else {
    const { typeComponent: i, ...u } = n;
    return F('input', { ...u, className: o });
  }
}
function Il(e) {
  const {
      className: t,
      children: n,
      typeButton: r,
      sizeButton: o,
      positionButton: i,
      ...u
    } = e,
    l = Sn('button', t, {
      [`button__type_${r}`]: !!r,
      [`button__position_${i}`]: !!i,
      [`button_size_${o}`]: !!o,
    });
  return F('button', { ...u, className: l, children: n });
}
const KE = { 'button-back': '_button-back_1i5x6_1' };
function nE(e) {
  const { className: t, children: n, title: r } = e,
    o = Sn('authform', t);
  return F(Tp, {
    children: Kt('form', {
      ...e,
      className: o,
      children: [
        n,
        F(Il, { className: 'authform__submit-button', children: r }),
      ],
    }),
  });
}
nE.Input = function (t) {
  return F(jm, { ...t, className: 'authform__input' });
};
function rE(e) {
  const { className: t, children: n, title: r, ...o } = e,
    i = Sn('form', t);
  return Kt('form', {
    ...o,
    className: i,
    children: [n, F(Il, { className: 'form__button', children: r })],
  });
}
rE.Input = function (t) {
  const { typeComponent: n } = t;
  return F(jm, { ...t, className: `form__${n}` });
};
const oE = '_item_1d1u5_1',
  iE = '_item__link_1d1u5_23',
  GE = { item: oE, item__link: iE },
  uE = '_item_1d1u5_1',
  lE = '_item__link_1d1u5_23',
  YE = { item: uE, item__link: lE },
  aE = '_comment_sx7jb_1',
  sE = '_comment__content_sx7jb_11',
  XE = { comment: aE, comment__content: sE },
  cE = '_profileFields_1oyl3_1',
  fE = '_profileFields__field_1oyl3_1',
  dE = '_profileFields__field_title_1oyl3_1',
  pE = '_profileFields__field_value_1oyl3_1',
  vE = '_profileFields__field_edit_1oyl3_1',
  JE = {
    profileFields: cE,
    profileFields__field: fE,
    profileFields__field_title: dE,
    profileFields__field_value: pE,
    profileFields__field_edit: vE,
  },
  hE = '_button__wrap_1tw8n_1',
  ZE = { button__wrap: hE, 'button-star': '_button-star_1tw8n_13' },
  dp = () => {
    const e = document;
    return (
      e.fullscreenElement ||
      e.mozFullScreenElement ||
      e.webkitFullscreenElement ||
      e.msFullscreenElement
    );
  },
  mE = e => {
    e.requestFullscreen
      ? e.requestFullscreen()
      : e.msRequestFullscreen
      ? e.msRequestFullscreen()
      : e.mozRequestFullScreen
      ? e.mozRequestFullScreen()
      : e.webkitRequestFullscreen &&
        e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  },
  yE = e => {
    const [t, n] = N.exports.useState(dp()),
      r = () => {
        e.current !== null && mE(e.current);
      },
      o = () => {
        const i = document;
        i.exitFullscreen
          ? i.exitFullscreen()
          : i.msExitFullscreen
          ? i.msExitFullscreen()
          : i.mozCancelFullScreen
          ? i.mozCancelFullScreen()
          : i.webkitExitFullscreen && i.webkitExitFullscreen();
      };
    return (
      N.exports.useLayoutEffect(() => {
        function i() {
          n(dp());
        }
        return (
          document.addEventListener('fullscreenchange', i),
          () => {
            document.removeEventListener('fullscreenchange', i);
          }
        );
      }),
      { isFullscreen: t, setFullscreen: r, exitFullscreen: o }
    );
  },
  pp = {
    'button-fullscreen': '_button-fullscreen_16rgc_1',
    'fullscreen-open': '_fullscreen-open_16rgc_11',
    'fullscreen-exit': '_fullscreen-exit_16rgc_13',
  };
function gE(e) {
  const { elemRef: t } = e,
    { isFullscreen: n, setFullscreen: r, exitFullscreen: o } = yE(t),
    i = n ? 'exit' : 'open',
    u = () => {
      n ? o() : r();
    };
  return F(Il, {
    className: pp['button-fullscreen'],
    onClick: u,
    positionButton: 'absolute',
    title: 'Fullscreen',
    children: F('span', { className: pp[`fullscreen-${i}`] }),
  });
}
const Am = () => {
  const { isAuth: e, isLoadingAuth: t } = PS(Cw),
    {
      setIsAuth: n,
      resetUserState: r,
      setIsLoadingAuth: o,
      setUserData: i,
    } = L_(),
    u = Us(),
    [l] = P_(),
    [a] = O_(),
    [s] = C_(),
    [c] = R_(),
    p = x => {
      if ('message' in x) throw new Error(x.message);
      console.error(x);
    },
    d = () => {
      o(!0),
        l(null)
          .then(({ isSuccess: x, data: v }) => {
            n(x), x && i(v);
          })
          .catch(console.error)
          .finally(() => {
            o(!1);
          });
    };
  return {
    signIn: x => {
      e
        ? u(Ne.HOME)
        : s(x)
            .then(v => {
              'data' in v ? (d(), u(Ne.HOME)) : p(v.error);
            })
            .catch(console.error);
    },
    signUp: x => {
      e
        ? u(Ne.HOME)
        : c(x)
            .then(v => {
              if ('data' in v) {
                const { id: f } = v.data;
                i({ id: f }), d(), u(Ne.HOME);
              } else p(v.error);
            })
            .catch(console.error);
    },
    logout: () => {
      e &&
        a(null)
          .then(x => {
            'data' in x ? (n(!1), r(), u(Ne.SIGN_IN)) : p(x.error);
          })
          .catch(console.error);
    },
    checkIsAuth: d,
    isAuth: e,
    isLoadingAuth: t,
  };
};
function fr(e) {
  const { isAuth: t, isLoadingAuth: n } = Am();
  return n ? F(Mp, {}) : t ? e : F(c0, { to: Ne.SIGN_IN, replace: !0 });
}
const SE = N.exports.lazy(() =>
    Ut(
      () => import('./index.3af53a7d.js'),
      [
        'assets/index.3af53a7d.js',
        'assets/index.998e9582.css',
        'assets/index.413e90ec.js',
        'assets/selectors.f6ef23e1.js',
      ]
    )
  ),
  wE = N.exports.lazy(() =>
    Ut(
      () => import('./index.7d664519.js'),
      [
        'assets/index.7d664519.js',
        'assets/index.324936fc.css',
        'assets/useLeaderBoard.a0479176.js',
        'assets/selectors.f6ef23e1.js',
      ]
    )
  ),
  _E = N.exports.lazy(() =>
    Ut(
      () => import('./index.a10248bc.js'),
      [
        'assets/index.a10248bc.js',
        'assets/index.68fe0f3b.css',
        'assets/index.413e90ec.js',
      ]
    )
  ),
  EE = N.exports.lazy(() =>
    Ut(
      () => import('./index.544ebab8.js'),
      [
        'assets/index.544ebab8.js',
        'assets/index.f955f8aa.css',
        'assets/index.413e90ec.js',
      ]
    )
  ),
  xE = N.exports.lazy(() =>
    Ut(
      () => import('./index.d61ab561.js'),
      [
        'assets/index.d61ab561.js',
        'assets/index.17f13970.css',
        'assets/index.3946e526.js',
        'assets/index.9868fb9f.js',
        'assets/index.413e90ec.js',
      ]
    )
  ),
  Ia = N.exports.lazy(() =>
    Ut(
      () => import('./index.fd7c3df7.js'),
      [
        'assets/index.fd7c3df7.js',
        'assets/index.5ce79203.css',
        'assets/index.5e06f119.js',
        'assets/selectors.f6ef23e1.js',
        'assets/index.3946e526.js',
      ]
    )
  ),
  kE = N.exports.lazy(() =>
    Ut(
      () => import('./index.cee066a9.js'),
      [
        'assets/index.cee066a9.js',
        'assets/index.28caf38b.css',
        'assets/index.5e06f119.js',
        'assets/selectors.f6ef23e1.js',
        'assets/index.3946e526.js',
        'assets/useLeaderBoard.a0479176.js',
      ]
    )
  ),
  PE = N.exports.lazy(() =>
    Ut(
      () => import('./index.0f1c2f6a.js'),
      ['assets/index.0f1c2f6a.js', 'assets/index.055b3254.js']
    )
  ),
  OE = N.exports.lazy(() =>
    Ut(
      () => import('./index.47f01ad8.js'),
      ['assets/index.47f01ad8.js', 'assets/index.055b3254.js']
    )
  ),
  CE = N.exports.lazy(() =>
    Ut(
      () => import('./index.e1b0c3bb.js'),
      [
        'assets/index.e1b0c3bb.js',
        'assets/index.17f13970.css',
        'assets/index.3946e526.js',
        'assets/index.9868fb9f.js',
        'assets/index.413e90ec.js',
      ]
    )
  ),
  RE = N.exports.lazy(() =>
    Ut(
      () => import('./index.1910c913.js'),
      [
        'assets/index.1910c913.js',
        'assets/index.d4c6ad7e.css',
        'assets/index.3946e526.js',
        'assets/index.9868fb9f.js',
        'assets/index.413e90ec.js',
      ]
    )
  );
function TE() {
  return F(N.exports.Suspense, {
    fallback: F(Mp, {}),
    children: F(d0, {
      children: Kt(Je, {
        path: Ne.HOME,
        children: [
          F(Je, { index: !0, element: fr(F(SE, {})) }),
          F(Je, { path: Ne.SIGN_IN, element: F(_E, {}) }),
          F(Je, { path: Ne.SIGN_UP, element: F(EE, {}) }),
          F(Je, { path: Ne.SERVER_ERROR, element: F(PE, {}) }),
          F(Je, { path: Ne.NOT_FOUND, element: F(OE, {}) }),
          Kt(Je, {
            path: Ne.FORUM,
            children: [
              F(Je, { index: !0, element: F(xE, {}) }),
              F(Je, { path: $p.forumId, element: F(CE, {}) }),
            ],
          }),
          F(Je, {
            path: `${Ne.FORUM_TOPIC}/${zp.topicId}`,
            element: F(RE, {}),
          }),
          F(Je, { path: `${Ne.PROFILE}/${Dp.userId}`, element: fr(F(Ia, {})) }),
          F(Je, { path: Ne.PROFILE_EDIT, element: fr(F(Ia, {})) }),
          F(Je, { path: Ne.PROFILE_EDIT_PASSWORD, element: fr(F(Ia, {})) }),
          F(Je, { path: Ne.GAME, element: fr(F(wE, {})) }),
          F(Je, { path: Ne.LEADER_BOARD, element: fr(F(kE, {})) }),
        ],
      }),
    }),
  });
}
function IE() {
  const { checkIsAuth: e } = Am(),
    { pathname: t } = Zo(),
    n = N.exports.useRef(null),
    r = N.exports.useRef(null),
    o = N.exports.useCallback(() => {
      var u;
      const i = t.toLocaleLowerCase() !== Ne.GAME;
      if (n && i) {
        const { amount: l, size: a, duration: s } = k_,
          { giant: c, max: p, min: d } = a,
          m = (w, x) => w + Math.random() * (x - w),
          y = document.createDocumentFragment();
        for (let w = 0; w < l; w++) {
          const x = document.createElement('div'),
            v = Math.round(Math.random() * 10) === 0 ? c : m(d, p);
          x.classList.add(ql.app__star),
            (x.style.width = `${v}px`),
            (x.style.height = `${v}px`),
            (x.style.left = `${m(0, 100)}%`),
            (x.style.top = `${m(0, 100)}%`),
            (x.style.boxShadow = `0 0 ${v}px ${v / 2}px #043668`),
            (x.style.animationDuration = `${m(s.min, s.max)}s`),
            y.append(x);
        }
        (u = n.current) == null || u.after(y);
      }
    }, [n]);
  return (
    N.exports.useEffect(() => {
      e(),
        o(),
        (async () => {
          const a = await (await fetch(`http://localhost:${3001}`)).json();
          console.log(a);
        })();
    }, []),
    Kt('div', {
      className: ql.app,
      ref: r,
      children: [
        F('main', { className: ql.app__content, children: F(TE, {}) }),
        F(gE, { elemRef: r }),
        F('div', { ref: n }),
      ],
    })
  );
}
function jE() {
  'serviceWorker' in navigator &&
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/serviceWorker.js')
        .then(e => {
          console.log(
            `ServiceWorker registration successful with scope: ${e.scope}`
          );
        })
        .catch(e => {
          console.log(`ServiceWorker registration failed: ${e}`);
        });
    });
}
var Nm,
  vp = $u.exports;
vp.createRoot, (Nm = vp.hydrateRoot);
const hp = document.getElementById('root');
if (hp)
  Nm(
    hp,
    F(xp.StrictMode, {
      children: F(y0, {
        children: F(xS, {
          store: $_,
          children: F(Z_, { children: F(IE, {}) }),
        }),
      }),
    })
  );
else throw new Error('HTML element with id = "root" not found');
jE();
export {
  nE as A,
  Il as B,
  $E as C,
  DE as D,
  WE as E,
  Tp as F,
  zE as G,
  HE as H,
  jm as I,
  GE as J,
  gE as K,
  ME as L,
  XE as M,
  Ne as R,
  K_ as T,
  Am as a,
  PS as b,
  Kt as c,
  Sn as d,
  $_ as e,
  L_ as f,
  kw as g,
  QE as h,
  BE as i,
  F as j,
  VE as k,
  LE as l,
  YE as m,
  rE as n,
  KE as o,
  JE as p,
  Mp as q,
  N as r,
  ZE as s,
  NE as t,
  Us as u,
  Zo as v,
  bE as w,
  FE as x,
  UE as y,
  qE as z,
};
