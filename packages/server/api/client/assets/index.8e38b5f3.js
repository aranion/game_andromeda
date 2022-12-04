var oy = Object.defineProperty;
var iy = (e, t, n) =>
  t in e
    ? oy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Sl = (e, t, n) => (iy(e, typeof t != 'symbol' ? t + '' : t, n), n);
function ly(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const u in r)
        if (u !== 'default' && !(u in e)) {
          const o = Object.getOwnPropertyDescriptor(r, u);
          o &&
            Object.defineProperty(
              e,
              u,
              o.get ? o : { enumerable: !0, get: () => r[u] }
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
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) r(u);
  new MutationObserver(u => {
    for (const o of u)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(u) {
    const o = {};
    return (
      u.integrity && (o.integrity = u.integrity),
      u.referrerpolicy && (o.referrerPolicy = u.referrerpolicy),
      u.crossorigin === 'use-credentials'
        ? (o.credentials = 'include')
        : u.crossorigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(u) {
    if (u.ep) return;
    u.ep = !0;
    const o = n(u);
    fetch(u.href, o);
  }
})();
var er =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function ay(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function pi(e) {
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
      var u = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        u.get
          ? u
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
var H = { exports: {} },
  ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lu = Symbol.for('react.element'),
  sy = Symbol.for('react.portal'),
  cy = Symbol.for('react.fragment'),
  fy = Symbol.for('react.strict_mode'),
  dy = Symbol.for('react.profiler'),
  py = Symbol.for('react.provider'),
  vy = Symbol.for('react.context'),
  hy = Symbol.for('react.forward_ref'),
  yy = Symbol.for('react.suspense'),
  my = Symbol.for('react.memo'),
  gy = Symbol.for('react.lazy'),
  Hc = Symbol.iterator;
function Sy(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Hc && e[Hc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Wd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hd = Object.assign,
  Kd = {};
function Nr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Kd),
    (this.updater = n || Wd);
}
Nr.prototype.isReactComponent = {};
Nr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Gd() {}
Gd.prototype = Nr.prototype;
function vs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Kd),
    (this.updater = n || Wd);
}
var hs = (vs.prototype = new Gd());
hs.constructor = vs;
Hd(hs, Nr.prototype);
hs.isPureReactComponent = !0;
var Kc = Array.isArray,
  Yd = Object.prototype.hasOwnProperty,
  ys = { current: null },
  Xd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zd(e, t, n) {
  var r,
    u = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Yd.call(t, r) && !Xd.hasOwnProperty(r) && (u[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) u.children = n;
  else if (1 < l) {
    for (var a = Array(l), s = 0; s < l; s++) a[s] = arguments[s + 2];
    u.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) u[r] === void 0 && (u[r] = l[r]);
  return {
    $$typeof: Lu,
    type: e,
    key: o,
    ref: i,
    props: u,
    _owner: ys.current,
  };
}
function wy(e, t) {
  return {
    $$typeof: Lu,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ms(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Lu;
}
function _y(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Gc = /\/+/g;
function wl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? _y('' + e.key)
    : t.toString(36);
}
function So(e, t, n, r, u) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Lu:
          case sy:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (u = u(i)),
      (e = r === '' ? '.' + wl(i, 0) : r),
      Kc(u)
        ? ((n = ''),
          e != null && (n = e.replace(Gc, '$&/') + '/'),
          So(u, t, n, '', function (s) {
            return s;
          }))
        : u != null &&
          (ms(u) &&
            (u = wy(
              u,
              n +
                (!u.key || (i && i.key === u.key)
                  ? ''
                  : ('' + u.key).replace(Gc, '$&/') + '/') +
                e
            )),
          t.push(u)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Kc(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + wl(o, l);
      i += So(o, t, n, a, u);
    }
  else if (((a = Sy(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + wl(o, l++)), (i += So(o, t, n, a, u));
  else if (o === 'object')
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
  return i;
}
function Yu(e, t, n) {
  if (e == null) return e;
  var r = [],
    u = 0;
  return (
    So(e, r, '', '', function (o) {
      return t.call(n, o, u++);
    }),
    r
  );
}
function Ey(e) {
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
var et = { current: null },
  wo = { transition: null },
  ky = {
    ReactCurrentDispatcher: et,
    ReactCurrentBatchConfig: wo,
    ReactCurrentOwner: ys,
  };
ae.Children = {
  map: Yu,
  forEach: function (e, t, n) {
    Yu(
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
      Yu(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Yu(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ms(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
ae.Component = Nr;
ae.Fragment = cy;
ae.Profiler = dy;
ae.PureComponent = vs;
ae.StrictMode = fy;
ae.Suspense = yy;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ky;
ae.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Hd({}, e.props),
    u = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ys.current)),
      t.key !== void 0 && (u = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Yd.call(t, a) &&
        !Xd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var s = 0; s < a; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: Lu, type: e.type, key: u, ref: o, props: r, _owner: i };
};
ae.createContext = function (e) {
  return (
    (e = {
      $$typeof: vy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: py, _context: e }),
    (e.Consumer = e)
  );
};
ae.createElement = Zd;
ae.createFactory = function (e) {
  var t = Zd.bind(null, e);
  return (t.type = e), t;
};
ae.createRef = function () {
  return { current: null };
};
ae.forwardRef = function (e) {
  return { $$typeof: hy, render: e };
};
ae.isValidElement = ms;
ae.lazy = function (e) {
  return { $$typeof: gy, _payload: { _status: -1, _result: e }, _init: Ey };
};
ae.memo = function (e, t) {
  return { $$typeof: my, type: e, compare: t === void 0 ? null : t };
};
ae.startTransition = function (e) {
  var t = wo.transition;
  wo.transition = {};
  try {
    e();
  } finally {
    wo.transition = t;
  }
};
ae.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
ae.useCallback = function (e, t) {
  return et.current.useCallback(e, t);
};
ae.useContext = function (e) {
  return et.current.useContext(e);
};
ae.useDebugValue = function () {};
ae.useDeferredValue = function (e) {
  return et.current.useDeferredValue(e);
};
ae.useEffect = function (e, t) {
  return et.current.useEffect(e, t);
};
ae.useId = function () {
  return et.current.useId();
};
ae.useImperativeHandle = function (e, t, n) {
  return et.current.useImperativeHandle(e, t, n);
};
ae.useInsertionEffect = function (e, t) {
  return et.current.useInsertionEffect(e, t);
};
ae.useLayoutEffect = function (e, t) {
  return et.current.useLayoutEffect(e, t);
};
ae.useMemo = function (e, t) {
  return et.current.useMemo(e, t);
};
ae.useReducer = function (e, t, n) {
  return et.current.useReducer(e, t, n);
};
ae.useRef = function (e) {
  return et.current.useRef(e);
};
ae.useState = function (e) {
  return et.current.useState(e);
};
ae.useSyncExternalStore = function (e, t, n) {
  return et.current.useSyncExternalStore(e, t, n);
};
ae.useTransition = function () {
  return et.current.useTransition();
};
ae.version = '18.2.0';
(function (e) {
  e.exports = ae;
})(H);
const Jd = ay(H.exports),
  da = ly({ __proto__: null, default: Jd }, [H.exports]),
  Py = '_app_18mih_1',
  xy = '_app__star_18mih_1',
  Oy = '_shine_18mih_1',
  Cy = '_app__content_18mih_1',
  _l = { app: Py, app__star: xy, shine: Oy, app__content: Cy },
  vi = 'https://ya-praktikum.tech/api/v2',
  Ty = {
    amount: 200,
    size: { min: 1, max: 5, giant: 9 },
    duration: { min: 10, max: 40 },
  };
var ep = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], u = 0; u < arguments.length; u++) {
        var o = arguments[u];
        if (!!o) {
          var i = typeof o;
          if (i === 'string' || i === 'number') r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var l = n.apply(null, o);
              l && r.push(l);
            }
          } else if (i === 'object') {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes('[native code]')
            ) {
              r.push(o.toString());
              continue;
            }
            for (var a in o) t.call(o, a) && o[a] && r.push(a);
          }
        }
      }
      return r.join(' ');
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(ep);
const Ry = ep.exports;
var gs = { exports: {} },
  hi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jy = H.exports,
  Ay = Symbol.for('react.element'),
  Iy = Symbol.for('react.fragment'),
  My = Object.prototype.hasOwnProperty,
  Ny = jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Dy = { key: !0, ref: !0, __self: !0, __source: !0 };
function tp(e, t, n) {
  var r,
    u = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) My.call(t, r) && !Dy.hasOwnProperty(r) && (u[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) u[r] === void 0 && (u[r] = t[r]);
  return {
    $$typeof: Ay,
    type: e,
    key: o,
    ref: i,
    props: u,
    _owner: Ny.current,
  };
}
hi.Fragment = Iy;
hi.jsx = tp;
hi.jsxs = tp;
(function (e) {
  e.exports = hi;
})(gs);
const Oe = gs.exports.jsx,
  pa = gs.exports.jsxs;
/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function va() {
  return (
    (va = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    va.apply(this, arguments)
  );
}
var $n;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})($n || ($n = {}));
const Yc = 'popstate';
function $y(e) {
  e === void 0 && (e = {});
  function t(r, u) {
    let { pathname: o, search: i, hash: l } = r.location;
    return ha(
      '',
      { pathname: o, search: i, hash: l },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || 'default'
    );
  }
  function n(r, u) {
    return typeof u == 'string' ? u : by(u);
  }
  return Ly(t, n, null, e);
}
function zy() {
  return Math.random().toString(36).substr(2, 8);
}
function Xc(e) {
  return { usr: e.state, key: e.key };
}
function ha(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    va(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? np(t) : t,
      { state: n, key: (t && t.key) || r || zy() }
    )
  );
}
function by(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function np(e) {
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
function Ly(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: u = document.defaultView, v5Compat: o = !1 } = r,
    i = u.history,
    l = $n.Pop,
    a = null;
  function s() {
    (l = $n.Pop), a && a({ action: l, location: d.location });
  }
  function c(y, g) {
    l = $n.Push;
    let w = ha(d.location, y, g);
    n && n(w, y);
    let C = Xc(w),
      h = d.createHref(w);
    try {
      i.pushState(C, '', h);
    } catch {
      u.location.assign(h);
    }
    o && a && a({ action: l, location: w });
  }
  function p(y, g) {
    l = $n.Replace;
    let w = ha(d.location, y, g);
    n && n(w, y);
    let C = Xc(w),
      h = d.createHref(w);
    i.replaceState(C, '', h), o && a && a({ action: l, location: w });
  }
  let d = {
    get action() {
      return l;
    },
    get location() {
      return e(u, i);
    },
    listen(y) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        u.addEventListener(Yc, s),
        (a = y),
        () => {
          u.removeEventListener(Yc, s), (a = null);
        }
      );
    },
    createHref(y) {
      return t(u, y);
    },
    push: c,
    replace: p,
    go(y) {
      return i.go(y);
    },
  };
  return d;
}
var Zc;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Zc || (Zc = {}));
function Fy(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function qy(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Uy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Qy = typeof Object.is == 'function' ? Object.is : Uy,
  { useState: By, useEffect: Vy, useLayoutEffect: Wy, useDebugValue: Hy } = da;
function Ky(e, t, n) {
  const r = t(),
    [{ inst: u }, o] = By({ inst: { value: r, getSnapshot: t } });
  return (
    Wy(() => {
      (u.value = r), (u.getSnapshot = t), El(u) && o({ inst: u });
    }, [e, r, t]),
    Vy(
      () => (
        El(u) && o({ inst: u }),
        e(() => {
          El(u) && o({ inst: u });
        })
      ),
      [e]
    ),
    Hy(r),
    r
  );
}
function El(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Qy(n, r);
  } catch {
    return !0;
  }
}
function Gy(e, t, n) {
  return t();
}
const Yy =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Xy = !Yy,
  Zy = Xy ? Gy : Ky;
'useSyncExternalStore' in da && (e => e.useSyncExternalStore)(da);
const Jy = H.exports.createContext(null),
  rp = H.exports.createContext(null);
function em() {
  return H.exports.useContext(rp) != null;
}
var Jc;
(function (e) {
  e.UseRevalidator = 'useRevalidator';
})(Jc || (Jc = {}));
var ef;
(function (e) {
  (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(ef || (ef = {}));
function tm(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: u = $n.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  em() && qy(!1);
  let l = t.replace(/^\/*/, '/'),
    a = H.exports.useMemo(
      () => ({ basename: l, navigator: o, static: i }),
      [l, o, i]
    );
  typeof r == 'string' && (r = np(r));
  let {
      pathname: s = '/',
      search: c = '',
      hash: p = '',
      state: d = null,
      key: y = 'default',
    } = r,
    g = H.exports.useMemo(() => {
      let w = Fy(s, l);
      return w == null
        ? null
        : { pathname: w, search: c, hash: p, state: d, key: y };
    }, [l, s, c, p, d, y]);
  return g == null
    ? null
    : Oe(Jy.Provider, {
        value: a,
        children: Oe(rp.Provider, {
          children: n,
          value: { location: g, navigationType: u },
        }),
      });
}
var tf;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(tf || (tf = {}));
new Promise(() => {});
/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nm(e) {
  let { basename: t, children: n, window: r } = e,
    u = H.exports.useRef();
  u.current == null && (u.current = $y({ window: r, v5Compat: !0 }));
  let o = u.current,
    [i, l] = H.exports.useState({ action: o.action, location: o.location });
  return (
    H.exports.useLayoutEffect(() => o.listen(l), [o]),
    Oe(tm, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: o,
    })
  );
}
var nf;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(nf || (nf = {}));
var rf;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(rf || (rf = {}));
var up = { exports: {} },
  op = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pr = H.exports;
function rm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var um = typeof Object.is == 'function' ? Object.is : rm,
  om = Pr.useState,
  im = Pr.useEffect,
  lm = Pr.useLayoutEffect,
  am = Pr.useDebugValue;
function sm(e, t) {
  var n = t(),
    r = om({ inst: { value: n, getSnapshot: t } }),
    u = r[0].inst,
    o = r[1];
  return (
    lm(
      function () {
        (u.value = n), (u.getSnapshot = t), kl(u) && o({ inst: u });
      },
      [e, n, t]
    ),
    im(
      function () {
        return (
          kl(u) && o({ inst: u }),
          e(function () {
            kl(u) && o({ inst: u });
          })
        );
      },
      [e]
    ),
    am(n),
    n
  );
}
function kl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !um(e, n);
  } catch {
    return !0;
  }
}
function cm(e, t) {
  return t();
}
var fm =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? cm
    : sm;
op.useSyncExternalStore =
  Pr.useSyncExternalStore !== void 0 ? Pr.useSyncExternalStore : fm;
(function (e) {
  e.exports = op;
})(up);
var ip = { exports: {} },
  lp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yi = H.exports,
  dm = up.exports;
function pm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vm = typeof Object.is == 'function' ? Object.is : pm,
  hm = dm.useSyncExternalStore,
  ym = yi.useRef,
  mm = yi.useEffect,
  gm = yi.useMemo,
  Sm = yi.useDebugValue;
lp.useSyncExternalStoreWithSelector = function (e, t, n, r, u) {
  var o = ym(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = gm(
    function () {
      function a(y) {
        if (!s) {
          if (((s = !0), (c = y), (y = r(y)), u !== void 0 && i.hasValue)) {
            var g = i.value;
            if (u(g, y)) return (p = g);
          }
          return (p = y);
        }
        if (((g = p), vm(c, y))) return g;
        var w = r(y);
        return u !== void 0 && u(g, w) ? g : ((c = y), (p = w));
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
    [t, n, r, u]
  );
  var l = hm(e, o[0], o[1]);
  return (
    mm(
      function () {
        (i.hasValue = !0), (i.value = l);
      },
      [l]
    ),
    Sm(l),
    l
  );
};
(function (e) {
  e.exports = lp;
})(ip);
var mi = { exports: {} },
  mt = {},
  ap = { exports: {} },
  sp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, z) {
    var W = j.length;
    j.push(z);
    e: for (; 0 < W; ) {
      var oe = (W - 1) >>> 1,
        ne = j[oe];
      if (0 < u(ne, z)) (j[oe] = z), (j[W] = ne), (W = oe);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var z = j[0],
      W = j.pop();
    if (W !== z) {
      j[0] = W;
      e: for (var oe = 0, ne = j.length, le = ne >>> 1; oe < le; ) {
        var Pe = 2 * (oe + 1) - 1,
          _e = j[Pe],
          ze = Pe + 1,
          Re = j[ze];
        if (0 > u(_e, W))
          ze < ne && 0 > u(Re, _e)
            ? ((j[oe] = Re), (j[ze] = W), (oe = ze))
            : ((j[oe] = _e), (j[Pe] = W), (oe = Pe));
        else if (ze < ne && 0 > u(Re, W)) (j[oe] = Re), (j[ze] = W), (oe = ze);
        else break e;
      }
    }
    return z;
  }
  function u(j, z) {
    var W = j.sortIndex - z.sortIndex;
    return W !== 0 ? W : j.id - z.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var a = [],
    s = [],
    c = 1,
    p = null,
    d = 3,
    y = !1,
    g = !1,
    w = !1,
    C = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(j) {
    for (var z = n(s); z !== null; ) {
      if (z.callback === null) r(s);
      else if (z.startTime <= j)
        r(s), (z.sortIndex = z.expirationTime), t(a, z);
      else break;
      z = n(s);
    }
  }
  function m(j) {
    if (((w = !1), v(j), !g))
      if (n(a) !== null) (g = !0), te(_);
      else {
        var z = n(s);
        z !== null && J(m, z.startTime - j);
      }
  }
  function _(j, z) {
    (g = !1), w && ((w = !1), h(x), (x = -1)), (y = !0);
    var W = d;
    try {
      for (
        v(z), p = n(a);
        p !== null && (!(p.expirationTime > z) || (j && !M()));

      ) {
        var oe = p.callback;
        if (typeof oe == 'function') {
          (p.callback = null), (d = p.priorityLevel);
          var ne = oe(p.expirationTime <= z);
          (z = e.unstable_now()),
            typeof ne == 'function' ? (p.callback = ne) : p === n(a) && r(a),
            v(z);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var le = !0;
      else {
        var Pe = n(s);
        Pe !== null && J(m, Pe.startTime - z), (le = !1);
      }
      return le;
    } finally {
      (p = null), (d = W), (y = !1);
    }
  }
  var E = !1,
    P = null,
    x = -1,
    R = 5,
    T = -1;
  function M() {
    return !(e.unstable_now() - T < R);
  }
  function $() {
    if (P !== null) {
      var j = e.unstable_now();
      T = j;
      var z = !0;
      try {
        z = P(!0, j);
      } finally {
        z ? U() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var U;
  if (typeof f == 'function')
    U = function () {
      f($);
    };
  else if (typeof MessageChannel < 'u') {
    var ee = new MessageChannel(),
      Z = ee.port2;
    (ee.port1.onmessage = $),
      (U = function () {
        Z.postMessage(null);
      });
  } else
    U = function () {
      C($, 0);
    };
  function te(j) {
    (P = j), E || ((E = !0), U());
  }
  function J(j, z) {
    x = C(function () {
      j(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || y || ((g = !0), te(_));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (R = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = d;
      }
      var W = d;
      d = z;
      try {
        return j();
      } finally {
        d = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, z) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var W = d;
      d = j;
      try {
        return z();
      } finally {
        d = W;
      }
    }),
    (e.unstable_scheduleCallback = function (j, z, W) {
      var oe = e.unstable_now();
      switch (
        (typeof W == 'object' && W !== null
          ? ((W = W.delay), (W = typeof W == 'number' && 0 < W ? oe + W : oe))
          : (W = oe),
        j)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = W + ne),
        (j = {
          id: c++,
          callback: z,
          priorityLevel: j,
          startTime: W,
          expirationTime: ne,
          sortIndex: -1,
        }),
        W > oe
          ? ((j.sortIndex = W),
            t(s, j),
            n(a) === null &&
              j === n(s) &&
              (w ? (h(x), (x = -1)) : (w = !0), J(m, W - oe)))
          : ((j.sortIndex = ne), t(a, j), g || y || ((g = !0), te(_))),
        j
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (j) {
      var z = d;
      return function () {
        var W = d;
        d = z;
        try {
          return j.apply(this, arguments);
        } finally {
          d = W;
        }
      };
    });
})(sp);
(function (e) {
  e.exports = sp;
})(ap);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cp = H.exports,
  ht = ap.exports;
function D(e) {
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
var fp = new Set(),
  hu = {};
function Kn(e, t) {
  xr(e, t), xr(e + 'Capture', t);
}
function xr(e, t) {
  for (hu[e] = t, e = 0; e < t.length; e++) fp.add(t[e]);
}
var Zt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ya = Object.prototype.hasOwnProperty,
  wm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  uf = {},
  of = {};
function _m(e) {
  return ya.call(of, e)
    ? !0
    : ya.call(uf, e)
    ? !1
    : wm.test(e)
    ? (of[e] = !0)
    : ((uf[e] = !0), !1);
}
function Em(e, t, n, r) {
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
function km(e, t, n, r) {
  if (t === null || typeof t > 'u' || Em(e, t, n, r)) return !0;
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
function tt(e, t, n, r, u, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = u),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var We = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    We[e] = new tt(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  We[t] = new tt(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  We[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  We[e] = new tt(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    We[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  We[e] = new tt(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  We[e] = new tt(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  We[e] = new tt(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  We[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ss = /[\-:]([a-z])/g;
function ws(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ss, ws);
    We[t] = new tt(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ss, ws);
    We[t] = new tt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ss, ws);
  We[t] = new tt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  We[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
We.xlinkHref = new tt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  We[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _s(e, t, n, r) {
  var u = We.hasOwnProperty(t) ? We[t] : null;
  (u !== null
    ? u.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (km(t, n, u, r) && (n = null),
    r || u === null
      ? _m(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : u.mustUseProperty
      ? (e[u.propertyName] = n === null ? (u.type === 3 ? !1 : '') : n)
      : ((t = u.attributeName),
        (r = u.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((u = u.type),
            (n = u === 3 || (u === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rn = cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Xu = Symbol.for('react.element'),
  ur = Symbol.for('react.portal'),
  or = Symbol.for('react.fragment'),
  Es = Symbol.for('react.strict_mode'),
  ma = Symbol.for('react.profiler'),
  dp = Symbol.for('react.provider'),
  pp = Symbol.for('react.context'),
  ks = Symbol.for('react.forward_ref'),
  ga = Symbol.for('react.suspense'),
  Sa = Symbol.for('react.suspense_list'),
  Ps = Symbol.for('react.memo'),
  an = Symbol.for('react.lazy'),
  vp = Symbol.for('react.offscreen'),
  lf = Symbol.iterator;
function Vr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (lf && e[lf]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Te = Object.assign,
  Pl;
function eu(e) {
  if (Pl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Pl = (t && t[1]) || '';
    }
  return (
    `
` +
    Pl +
    e
  );
}
var xl = !1;
function Ol(e, t) {
  if (!e || xl) return '';
  xl = !0;
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
        var u = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = u.length - 1,
          l = o.length - 1;
        1 <= i && 0 <= l && u[i] !== o[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (u[i] !== o[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || u[i] !== o[l])) {
                var a =
                  `
` + u[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (xl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? eu(e) : '';
}
function Pm(e) {
  switch (e.tag) {
    case 5:
      return eu(e.type);
    case 16:
      return eu('Lazy');
    case 13:
      return eu('Suspense');
    case 19:
      return eu('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ol(e.type, !1)), e;
    case 11:
      return (e = Ol(e.type.render, !1)), e;
    case 1:
      return (e = Ol(e.type, !0)), e;
    default:
      return '';
  }
}
function wa(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case or:
      return 'Fragment';
    case ur:
      return 'Portal';
    case ma:
      return 'Profiler';
    case Es:
      return 'StrictMode';
    case ga:
      return 'Suspense';
    case Sa:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case pp:
        return (e.displayName || 'Context') + '.Consumer';
      case dp:
        return (e._context.displayName || 'Context') + '.Provider';
      case ks:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ps:
        return (
          (t = e.displayName || null), t !== null ? t : wa(e.type) || 'Memo'
        );
      case an:
        (t = e._payload), (e = e._init);
        try {
          return wa(e(t));
        } catch {}
    }
  return null;
}
function xm(e) {
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
      return wa(t);
    case 8:
      return t === Es ? 'StrictMode' : 'Mode';
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
function xn(e) {
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
function hp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Om(e) {
  var t = hp(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var u = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return u.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Zu(e) {
  e._valueTracker || (e._valueTracker = Om(e));
}
function yp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = hp(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Mo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _a(e, t) {
  var n = t.checked;
  return Te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function af(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function mp(e, t) {
  (t = t.checked), t != null && _s(e, 'checked', t, !1);
}
function Ea(e, t) {
  mp(e, t);
  var n = xn(t.value),
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
    ? ka(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ka(e, t.type, xn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function sf(e, t, n) {
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
function ka(e, t, n) {
  (t !== 'number' || Mo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var tu = Array.isArray;
function yr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var u = 0; u < n.length; u++) t['$' + n[u]] = !0;
    for (n = 0; n < e.length; n++)
      (u = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== u && (e[n].selected = u),
        u && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + xn(n), t = null, u = 0; u < e.length; u++) {
      if (e[u].value === n) {
        (e[u].selected = !0), r && (e[u].defaultSelected = !0);
        return;
      }
      t !== null || e[u].disabled || (t = e[u]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return Te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function cf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (tu(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: xn(n) };
}
function gp(e, t) {
  var n = xn(t.value),
    r = xn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function ff(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Sp(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function xa(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Sp(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Ju,
  wp = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, u) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, u);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Ju = Ju || document.createElement('div'),
          Ju.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ju.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function yu(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ou = {
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
  Cm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(ou).forEach(function (e) {
  Cm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ou[t] = ou[e]);
  });
});
function _p(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ou.hasOwnProperty(e) && ou[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Ep(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        u = _p(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, u) : (e[n] = u);
    }
}
var Tm = Te(
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
function Oa(e, t) {
  if (t) {
    if (Tm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(D(62));
  }
}
function Ca(e, t) {
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
var Ta = null;
function xs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ra = null,
  mr = null,
  gr = null;
function df(e) {
  if ((e = Uu(e))) {
    if (typeof Ra != 'function') throw Error(D(280));
    var t = e.stateNode;
    t && ((t = Ei(t)), Ra(e.stateNode, e.type, t));
  }
}
function kp(e) {
  mr ? (gr ? gr.push(e) : (gr = [e])) : (mr = e);
}
function Pp() {
  if (mr) {
    var e = mr,
      t = gr;
    if (((gr = mr = null), df(e), t)) for (e = 0; e < t.length; e++) df(t[e]);
  }
}
function xp(e, t) {
  return e(t);
}
function Op() {}
var Cl = !1;
function Cp(e, t, n) {
  if (Cl) return e(t, n);
  Cl = !0;
  try {
    return xp(e, t, n);
  } finally {
    (Cl = !1), (mr !== null || gr !== null) && (Op(), Pp());
  }
}
function mu(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ei(n);
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
  if (n && typeof n != 'function') throw Error(D(231, t, typeof n));
  return n;
}
var ja = !1;
if (Zt)
  try {
    var Wr = {};
    Object.defineProperty(Wr, 'passive', {
      get: function () {
        ja = !0;
      },
    }),
      window.addEventListener('test', Wr, Wr),
      window.removeEventListener('test', Wr, Wr);
  } catch {
    ja = !1;
  }
function Rm(e, t, n, r, u, o, i, l, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var iu = !1,
  No = null,
  Do = !1,
  Aa = null,
  jm = {
    onError: function (e) {
      (iu = !0), (No = e);
    },
  };
function Am(e, t, n, r, u, o, i, l, a) {
  (iu = !1), (No = null), Rm.apply(jm, arguments);
}
function Im(e, t, n, r, u, o, i, l, a) {
  if ((Am.apply(this, arguments), iu)) {
    if (iu) {
      var s = No;
      (iu = !1), (No = null);
    } else throw Error(D(198));
    Do || ((Do = !0), (Aa = s));
  }
}
function Gn(e) {
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
function Tp(e) {
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
function pf(e) {
  if (Gn(e) !== e) throw Error(D(188));
}
function Mm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Gn(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var u = n.return;
    if (u === null) break;
    var o = u.alternate;
    if (o === null) {
      if (((r = u.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (u.child === o.child) {
      for (o = u.child; o; ) {
        if (o === n) return pf(u), e;
        if (o === r) return pf(u), t;
        o = o.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) (n = u), (r = o);
    else {
      for (var i = !1, l = u.child; l; ) {
        if (l === n) {
          (i = !0), (n = u), (r = o);
          break;
        }
        if (l === r) {
          (i = !0), (r = u), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = o.child; l; ) {
          if (l === n) {
            (i = !0), (n = o), (r = u);
            break;
          }
          if (l === r) {
            (i = !0), (r = o), (n = u);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function Rp(e) {
  return (e = Mm(e)), e !== null ? jp(e) : null;
}
function jp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = jp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ap = ht.unstable_scheduleCallback,
  vf = ht.unstable_cancelCallback,
  Nm = ht.unstable_shouldYield,
  Dm = ht.unstable_requestPaint,
  Ie = ht.unstable_now,
  $m = ht.unstable_getCurrentPriorityLevel,
  Os = ht.unstable_ImmediatePriority,
  Ip = ht.unstable_UserBlockingPriority,
  $o = ht.unstable_NormalPriority,
  zm = ht.unstable_LowPriority,
  Mp = ht.unstable_IdlePriority,
  gi = null,
  qt = null;
function bm(e) {
  if (qt && typeof qt.onCommitFiberRoot == 'function')
    try {
      qt.onCommitFiberRoot(gi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Mt = Math.clz32 ? Math.clz32 : qm,
  Lm = Math.log,
  Fm = Math.LN2;
function qm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Lm(e) / Fm) | 0)) | 0;
}
var eo = 64,
  to = 4194304;
function nu(e) {
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
function zo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    u = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~u;
    l !== 0 ? (r = nu(l)) : ((o &= i), o !== 0 && (r = nu(o)));
  } else (i = n & ~u), i !== 0 ? (r = nu(i)) : o !== 0 && (r = nu(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & u) === 0 &&
    ((u = r & -r), (o = t & -t), u >= o || (u === 16 && (o & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Mt(t)), (u = 1 << n), (r |= e[n]), (t &= ~u);
  return r;
}
function Um(e, t) {
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
function Qm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      u = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Mt(o),
      l = 1 << i,
      a = u[i];
    a === -1
      ? ((l & n) === 0 || (l & r) !== 0) && (u[i] = Um(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Ia(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Np() {
  var e = eo;
  return (eo <<= 1), (eo & 4194240) === 0 && (eo = 64), e;
}
function Tl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fu(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Mt(t)),
    (e[t] = n);
}
function Bm(e, t) {
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
    var u = 31 - Mt(n),
      o = 1 << u;
    (t[u] = 0), (r[u] = -1), (e[u] = -1), (n &= ~o);
  }
}
function Cs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Mt(n),
      u = 1 << r;
    (u & t) | (e[r] & t) && (e[r] |= t), (n &= ~u);
  }
}
var pe = 0;
function Dp(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var $p,
  Ts,
  zp,
  bp,
  Lp,
  Ma = !1,
  no = [],
  vn = null,
  hn = null,
  yn = null,
  gu = new Map(),
  Su = new Map(),
  cn = [],
  Vm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function hf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      vn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      hn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      yn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      gu.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Su.delete(t.pointerId);
  }
}
function Hr(e, t, n, r, u, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [u],
      }),
      t !== null && ((t = Uu(t)), t !== null && Ts(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      u !== null && t.indexOf(u) === -1 && t.push(u),
      e);
}
function Wm(e, t, n, r, u) {
  switch (t) {
    case 'focusin':
      return (vn = Hr(vn, e, t, n, r, u)), !0;
    case 'dragenter':
      return (hn = Hr(hn, e, t, n, r, u)), !0;
    case 'mouseover':
      return (yn = Hr(yn, e, t, n, r, u)), !0;
    case 'pointerover':
      var o = u.pointerId;
      return gu.set(o, Hr(gu.get(o) || null, e, t, n, r, u)), !0;
    case 'gotpointercapture':
      return (
        (o = u.pointerId), Su.set(o, Hr(Su.get(o) || null, e, t, n, r, u)), !0
      );
  }
  return !1;
}
function Fp(e) {
  var t = zn(e.target);
  if (t !== null) {
    var n = Gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Tp(n)), t !== null)) {
          (e.blockedOn = t),
            Lp(e.priority, function () {
              zp(n);
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
function _o(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Na(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ta = r), n.target.dispatchEvent(r), (Ta = null);
    } else return (t = Uu(n)), t !== null && Ts(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function yf(e, t, n) {
  _o(e) && n.delete(t);
}
function Hm() {
  (Ma = !1),
    vn !== null && _o(vn) && (vn = null),
    hn !== null && _o(hn) && (hn = null),
    yn !== null && _o(yn) && (yn = null),
    gu.forEach(yf),
    Su.forEach(yf);
}
function Kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ma ||
      ((Ma = !0),
      ht.unstable_scheduleCallback(ht.unstable_NormalPriority, Hm)));
}
function wu(e) {
  function t(u) {
    return Kr(u, e);
  }
  if (0 < no.length) {
    Kr(no[0], e);
    for (var n = 1; n < no.length; n++) {
      var r = no[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vn !== null && Kr(vn, e),
      hn !== null && Kr(hn, e),
      yn !== null && Kr(yn, e),
      gu.forEach(t),
      Su.forEach(t),
      n = 0;
    n < cn.length;
    n++
  )
    (r = cn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < cn.length && ((n = cn[0]), n.blockedOn === null); )
    Fp(n), n.blockedOn === null && cn.shift();
}
var Sr = rn.ReactCurrentBatchConfig,
  bo = !0;
function Km(e, t, n, r) {
  var u = pe,
    o = Sr.transition;
  Sr.transition = null;
  try {
    (pe = 1), Rs(e, t, n, r);
  } finally {
    (pe = u), (Sr.transition = o);
  }
}
function Gm(e, t, n, r) {
  var u = pe,
    o = Sr.transition;
  Sr.transition = null;
  try {
    (pe = 4), Rs(e, t, n, r);
  } finally {
    (pe = u), (Sr.transition = o);
  }
}
function Rs(e, t, n, r) {
  if (bo) {
    var u = Na(e, t, n, r);
    if (u === null) bl(e, t, r, Lo, n), hf(e, r);
    else if (Wm(u, e, t, n, r)) r.stopPropagation();
    else if ((hf(e, r), t & 4 && -1 < Vm.indexOf(e))) {
      for (; u !== null; ) {
        var o = Uu(u);
        if (
          (o !== null && $p(o),
          (o = Na(e, t, n, r)),
          o === null && bl(e, t, r, Lo, n),
          o === u)
        )
          break;
        u = o;
      }
      u !== null && r.stopPropagation();
    } else bl(e, t, r, null, n);
  }
}
var Lo = null;
function Na(e, t, n, r) {
  if (((Lo = null), (e = xs(r)), (e = zn(e)), e !== null))
    if (((t = Gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Tp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Lo = e), null;
}
function qp(e) {
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
      switch ($m()) {
        case Os:
          return 1;
        case Ip:
          return 4;
        case $o:
        case zm:
          return 16;
        case Mp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dn = null,
  js = null,
  Eo = null;
function Up() {
  if (Eo) return Eo;
  var e,
    t = js,
    n = t.length,
    r,
    u = 'value' in dn ? dn.value : dn.textContent,
    o = u.length;
  for (e = 0; e < n && t[e] === u[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === u[o - r]; r++);
  return (Eo = u.slice(e, 1 < r ? 1 - r : void 0));
}
function ko(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ro() {
  return !0;
}
function mf() {
  return !1;
}
function gt(e) {
  function t(n, r, u, o, i) {
    (this._reactName = n),
      (this._targetInst = u),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ro
        : mf),
      (this.isPropagationStopped = mf),
      this
    );
  }
  return (
    Te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ro));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ro));
      },
      persist: function () {},
      isPersistent: ro,
    }),
    t
  );
}
var Dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  As = gt(Dr),
  qu = Te({}, Dr, { view: 0, detail: 0 }),
  Ym = gt(qu),
  Rl,
  jl,
  Gr,
  Si = Te({}, qu, {
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
    getModifierState: Is,
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
        : (e !== Gr &&
            (Gr && e.type === 'mousemove'
              ? ((Rl = e.screenX - Gr.screenX), (jl = e.screenY - Gr.screenY))
              : (jl = Rl = 0),
            (Gr = e)),
          Rl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : jl;
    },
  }),
  gf = gt(Si),
  Xm = Te({}, Si, { dataTransfer: 0 }),
  Zm = gt(Xm),
  Jm = Te({}, qu, { relatedTarget: 0 }),
  Al = gt(Jm),
  e0 = Te({}, Dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  t0 = gt(e0),
  n0 = Te({}, Dr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  r0 = gt(n0),
  u0 = Te({}, Dr, { data: 0 }),
  Sf = gt(u0),
  o0 = {
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
  i0 = {
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
  l0 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function a0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = l0[e]) ? !!t[e] : !1;
}
function Is() {
  return a0;
}
var s0 = Te({}, qu, {
    key: function (e) {
      if (e.key) {
        var t = o0[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ko(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? i0[e.keyCode] || 'Unidentified'
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
    getModifierState: Is,
    charCode: function (e) {
      return e.type === 'keypress' ? ko(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ko(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  c0 = gt(s0),
  f0 = Te({}, Si, {
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
  wf = gt(f0),
  d0 = Te({}, qu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Is,
  }),
  p0 = gt(d0),
  v0 = Te({}, Dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  h0 = gt(v0),
  y0 = Te({}, Si, {
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
  m0 = gt(y0),
  g0 = [9, 13, 27, 32],
  Ms = Zt && 'CompositionEvent' in window,
  lu = null;
Zt && 'documentMode' in document && (lu = document.documentMode);
var S0 = Zt && 'TextEvent' in window && !lu,
  Qp = Zt && (!Ms || (lu && 8 < lu && 11 >= lu)),
  _f = String.fromCharCode(32),
  Ef = !1;
function Bp(e, t) {
  switch (e) {
    case 'keyup':
      return g0.indexOf(t.keyCode) !== -1;
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
function Vp(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ir = !1;
function w0(e, t) {
  switch (e) {
    case 'compositionend':
      return Vp(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Ef = !0), _f);
    case 'textInput':
      return (e = t.data), e === _f && Ef ? null : e;
    default:
      return null;
  }
}
function _0(e, t) {
  if (ir)
    return e === 'compositionend' || (!Ms && Bp(e, t))
      ? ((e = Up()), (Eo = js = dn = null), (ir = !1), e)
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
      return Qp && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var E0 = {
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
function kf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!E0[e.type] : t === 'textarea';
}
function Wp(e, t, n, r) {
  kp(r),
    (t = Fo(t, 'onChange')),
    0 < t.length &&
      ((n = new As('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var au = null,
  _u = null;
function k0(e) {
  rv(e, 0);
}
function wi(e) {
  var t = sr(e);
  if (yp(t)) return e;
}
function P0(e, t) {
  if (e === 'change') return t;
}
var Hp = !1;
if (Zt) {
  var Il;
  if (Zt) {
    var Ml = 'oninput' in document;
    if (!Ml) {
      var Pf = document.createElement('div');
      Pf.setAttribute('oninput', 'return;'),
        (Ml = typeof Pf.oninput == 'function');
    }
    Il = Ml;
  } else Il = !1;
  Hp = Il && (!document.documentMode || 9 < document.documentMode);
}
function xf() {
  au && (au.detachEvent('onpropertychange', Kp), (_u = au = null));
}
function Kp(e) {
  if (e.propertyName === 'value' && wi(_u)) {
    var t = [];
    Wp(t, _u, e, xs(e)), Cp(k0, t);
  }
}
function x0(e, t, n) {
  e === 'focusin'
    ? (xf(), (au = t), (_u = n), au.attachEvent('onpropertychange', Kp))
    : e === 'focusout' && xf();
}
function O0(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return wi(_u);
}
function C0(e, t) {
  if (e === 'click') return wi(t);
}
function T0(e, t) {
  if (e === 'input' || e === 'change') return wi(t);
}
function R0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dt = typeof Object.is == 'function' ? Object.is : R0;
function Eu(e, t) {
  if (Dt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var u = n[r];
    if (!ya.call(t, u) || !Dt(e[u], t[u])) return !1;
  }
  return !0;
}
function Of(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Cf(e, t) {
  var n = Of(e);
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
    n = Of(n);
  }
}
function Gp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Gp(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Yp() {
  for (var e = window, t = Mo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Mo(e.document);
  }
  return t;
}
function Ns(e) {
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
function j0(e) {
  var t = Yp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ns(n)) {
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
        var u = n.textContent.length,
          o = Math.min(r.start, u);
        (r = r.end === void 0 ? o : Math.min(r.end, u)),
          !e.extend && o > r && ((u = r), (r = o), (o = u)),
          (u = Cf(n, o));
        var i = Cf(n, r);
        u &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== u.node ||
            e.anchorOffset !== u.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(u.node, u.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var A0 = Zt && 'documentMode' in document && 11 >= document.documentMode,
  lr = null,
  Da = null,
  su = null,
  $a = !1;
function Tf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $a ||
    lr == null ||
    lr !== Mo(r) ||
    ((r = lr),
    'selectionStart' in r && Ns(r)
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
    (su && Eu(su, r)) ||
      ((su = r),
      (r = Fo(Da, 'onSelect')),
      0 < r.length &&
        ((t = new As('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = lr))));
}
function uo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var ar = {
    animationend: uo('Animation', 'AnimationEnd'),
    animationiteration: uo('Animation', 'AnimationIteration'),
    animationstart: uo('Animation', 'AnimationStart'),
    transitionend: uo('Transition', 'TransitionEnd'),
  },
  Nl = {},
  Xp = {};
Zt &&
  ((Xp = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ar.animationend.animation,
    delete ar.animationiteration.animation,
    delete ar.animationstart.animation),
  'TransitionEvent' in window || delete ar.transitionend.transition);
function _i(e) {
  if (Nl[e]) return Nl[e];
  if (!ar[e]) return e;
  var t = ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xp) return (Nl[e] = t[n]);
  return e;
}
var Zp = _i('animationend'),
  Jp = _i('animationiteration'),
  ev = _i('animationstart'),
  tv = _i('transitionend'),
  nv = new Map(),
  Rf =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Rn(e, t) {
  nv.set(e, t), Kn(t, [e]);
}
for (var Dl = 0; Dl < Rf.length; Dl++) {
  var $l = Rf[Dl],
    I0 = $l.toLowerCase(),
    M0 = $l[0].toUpperCase() + $l.slice(1);
  Rn(I0, 'on' + M0);
}
Rn(Zp, 'onAnimationEnd');
Rn(Jp, 'onAnimationIteration');
Rn(ev, 'onAnimationStart');
Rn('dblclick', 'onDoubleClick');
Rn('focusin', 'onFocus');
Rn('focusout', 'onBlur');
Rn(tv, 'onTransitionEnd');
xr('onMouseEnter', ['mouseout', 'mouseover']);
xr('onMouseLeave', ['mouseout', 'mouseover']);
xr('onPointerEnter', ['pointerout', 'pointerover']);
xr('onPointerLeave', ['pointerout', 'pointerover']);
Kn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Kn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Kn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Kn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Kn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Kn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var ru =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  N0 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ru));
function jf(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Im(r, t, void 0, e), (e.currentTarget = null);
}
function rv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      u = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            a = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), a !== o && u.isPropagationStopped())) break e;
          jf(u, l, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (a = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            a !== o && u.isPropagationStopped())
          )
            break e;
          jf(u, l, s), (o = a);
        }
    }
  }
  if (Do) throw ((e = Aa), (Do = !1), (Aa = null), e);
}
function Se(e, t) {
  var n = t[qa];
  n === void 0 && (n = t[qa] = new Set());
  var r = e + '__bubble';
  n.has(r) || (uv(t, e, 2, !1), n.add(r));
}
function zl(e, t, n) {
  var r = 0;
  t && (r |= 4), uv(n, e, r, t);
}
var oo = '_reactListening' + Math.random().toString(36).slice(2);
function ku(e) {
  if (!e[oo]) {
    (e[oo] = !0),
      fp.forEach(function (n) {
        n !== 'selectionchange' && (N0.has(n) || zl(n, !1, e), zl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[oo] || ((t[oo] = !0), zl('selectionchange', !1, t));
  }
}
function uv(e, t, n, r) {
  switch (qp(t)) {
    case 1:
      var u = Km;
      break;
    case 4:
      u = Gm;
      break;
    default:
      u = Rs;
  }
  (n = u.bind(null, t, n, e)),
    (u = void 0),
    !ja ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (u = !0),
    r
      ? u !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: u })
        : e.addEventListener(t, n, !0)
      : u !== void 0
      ? e.addEventListener(t, n, { passive: u })
      : e.addEventListener(t, n, !1);
}
function bl(e, t, n, r, u) {
  var o = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === u || (l.nodeType === 8 && l.parentNode === u)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === u || (a.nodeType === 8 && a.parentNode === u))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = zn(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Cp(function () {
    var s = o,
      c = xs(n),
      p = [];
    e: {
      var d = nv.get(e);
      if (d !== void 0) {
        var y = As,
          g = e;
        switch (e) {
          case 'keypress':
            if (ko(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            y = c0;
            break;
          case 'focusin':
            (g = 'focus'), (y = Al);
            break;
          case 'focusout':
            (g = 'blur'), (y = Al);
            break;
          case 'beforeblur':
          case 'afterblur':
            y = Al;
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
            y = gf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = Zm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = p0;
            break;
          case Zp:
          case Jp:
          case ev:
            y = t0;
            break;
          case tv:
            y = h0;
            break;
          case 'scroll':
            y = Ym;
            break;
          case 'wheel':
            y = m0;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            y = r0;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = wf;
        }
        var w = (t & 4) !== 0,
          C = !w && e === 'scroll',
          h = w ? (d !== null ? d + 'Capture' : null) : d;
        w = [];
        for (var f = s, v; f !== null; ) {
          v = f;
          var m = v.stateNode;
          if (
            (v.tag === 5 &&
              m !== null &&
              ((v = m),
              h !== null && ((m = mu(f, h)), m != null && w.push(Pu(f, m, v)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((d = new y(d, g, null, n, c)), p.push({ event: d, listeners: w }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Ta &&
            (g = n.relatedTarget || n.fromElement) &&
            (zn(g) || g[Jt]))
        )
          break e;
        if (
          (y || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          y
            ? ((g = n.relatedTarget || n.toElement),
              (y = s),
              (g = g ? zn(g) : null),
              g !== null &&
                ((C = Gn(g)), g !== C || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((y = null), (g = s)),
          y !== g)
        ) {
          if (
            ((w = gf),
            (m = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = wf),
              (m = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (f = 'pointer')),
            (C = y == null ? d : sr(y)),
            (v = g == null ? d : sr(g)),
            (d = new w(m, f + 'leave', y, n, c)),
            (d.target = C),
            (d.relatedTarget = v),
            (m = null),
            zn(c) === s &&
              ((w = new w(h, f + 'enter', g, n, c)),
              (w.target = v),
              (w.relatedTarget = C),
              (m = w)),
            (C = m),
            y && g)
          )
            t: {
              for (w = y, h = g, f = 0, v = w; v; v = tr(v)) f++;
              for (v = 0, m = h; m; m = tr(m)) v++;
              for (; 0 < f - v; ) (w = tr(w)), f--;
              for (; 0 < v - f; ) (h = tr(h)), v--;
              for (; f--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t;
                (w = tr(w)), (h = tr(h));
              }
              w = null;
            }
          else w = null;
          y !== null && Af(p, d, y, w, !1),
            g !== null && C !== null && Af(p, C, g, w, !0);
        }
      }
      e: {
        if (
          ((d = s ? sr(s) : window),
          (y = d.nodeName && d.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && d.type === 'file'))
        )
          var _ = P0;
        else if (kf(d))
          if (Hp) _ = T0;
          else {
            _ = O0;
            var E = x0;
          }
        else
          (y = d.nodeName) &&
            y.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (_ = C0);
        if (_ && (_ = _(e, s))) {
          Wp(p, _, n, c);
          break e;
        }
        E && E(e, d, s),
          e === 'focusout' &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === 'number' &&
            ka(d, 'number', d.value);
      }
      switch (((E = s ? sr(s) : window), e)) {
        case 'focusin':
          (kf(E) || E.contentEditable === 'true') &&
            ((lr = E), (Da = s), (su = null));
          break;
        case 'focusout':
          su = Da = lr = null;
          break;
        case 'mousedown':
          $a = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ($a = !1), Tf(p, n, c);
          break;
        case 'selectionchange':
          if (A0) break;
        case 'keydown':
        case 'keyup':
          Tf(p, n, c);
      }
      var P;
      if (Ms)
        e: {
          switch (e) {
            case 'compositionstart':
              var x = 'onCompositionStart';
              break e;
            case 'compositionend':
              x = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              x = 'onCompositionUpdate';
              break e;
          }
          x = void 0;
        }
      else
        ir
          ? Bp(e, n) && (x = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (x = 'onCompositionStart');
      x &&
        (Qp &&
          n.locale !== 'ko' &&
          (ir || x !== 'onCompositionStart'
            ? x === 'onCompositionEnd' && ir && (P = Up())
            : ((dn = c),
              (js = 'value' in dn ? dn.value : dn.textContent),
              (ir = !0))),
        (E = Fo(s, x)),
        0 < E.length &&
          ((x = new Sf(x, e, null, n, c)),
          p.push({ event: x, listeners: E }),
          P ? (x.data = P) : ((P = Vp(n)), P !== null && (x.data = P)))),
        (P = S0 ? w0(e, n) : _0(e, n)) &&
          ((s = Fo(s, 'onBeforeInput')),
          0 < s.length &&
            ((c = new Sf('onBeforeInput', 'beforeinput', null, n, c)),
            p.push({ event: c, listeners: s }),
            (c.data = P)));
    }
    rv(p, t);
  });
}
function Pu(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var u = e,
      o = u.stateNode;
    u.tag === 5 &&
      o !== null &&
      ((u = o),
      (o = mu(e, n)),
      o != null && r.unshift(Pu(e, o, u)),
      (o = mu(e, t)),
      o != null && r.push(Pu(e, o, u))),
      (e = e.return);
  }
  return r;
}
function tr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Af(e, t, n, r, u) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      s = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      u
        ? ((a = mu(n, o)), a != null && i.unshift(Pu(n, a, l)))
        : u || ((a = mu(n, o)), a != null && i.push(Pu(n, a, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var D0 = /\r\n?/g,
  $0 = /\u0000|\uFFFD/g;
function If(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      D0,
      `
`
    )
    .replace($0, '');
}
function io(e, t, n) {
  if (((t = If(t)), If(e) !== t && n)) throw Error(D(425));
}
function qo() {}
var za = null,
  ba = null;
function La(e, t) {
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
var Fa = typeof setTimeout == 'function' ? setTimeout : void 0,
  z0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Mf = typeof Promise == 'function' ? Promise : void 0,
  b0 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Mf < 'u'
      ? function (e) {
          return Mf.resolve(null).then(e).catch(L0);
        }
      : Fa;
function L0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ll(e, t) {
  var n = t,
    r = 0;
  do {
    var u = n.nextSibling;
    if ((e.removeChild(n), u && u.nodeType === 8))
      if (((n = u.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(u), wu(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = u;
  } while (n);
  wu(t);
}
function mn(e) {
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
function Nf(e) {
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
var $r = Math.random().toString(36).slice(2),
  Ft = '__reactFiber$' + $r,
  xu = '__reactProps$' + $r,
  Jt = '__reactContainer$' + $r,
  qa = '__reactEvents$' + $r,
  F0 = '__reactListeners$' + $r,
  q0 = '__reactHandles$' + $r;
function zn(e) {
  var t = e[Ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Jt] || n[Ft])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Nf(e); e !== null; ) {
          if ((n = e[Ft])) return n;
          e = Nf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Uu(e) {
  return (
    (e = e[Ft] || e[Jt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function sr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function Ei(e) {
  return e[xu] || null;
}
var Ua = [],
  cr = -1;
function jn(e) {
  return { current: e };
}
function we(e) {
  0 > cr || ((e.current = Ua[cr]), (Ua[cr] = null), cr--);
}
function ge(e, t) {
  cr++, (Ua[cr] = e.current), (e.current = t);
}
var On = {},
  Xe = jn(On),
  ot = jn(!1),
  Qn = On;
function Or(e, t) {
  var n = e.type.contextTypes;
  if (!n) return On;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var u = {},
    o;
  for (o in n) u[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = u)),
    u
  );
}
function it(e) {
  return (e = e.childContextTypes), e != null;
}
function Uo() {
  we(ot), we(Xe);
}
function Df(e, t, n) {
  if (Xe.current !== On) throw Error(D(168));
  ge(Xe, t), ge(ot, n);
}
function ov(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var u in r) if (!(u in t)) throw Error(D(108, xm(e) || 'Unknown', u));
  return Te({}, n, r);
}
function Qo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || On),
    (Qn = Xe.current),
    ge(Xe, e),
    ge(ot, ot.current),
    !0
  );
}
function $f(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n
    ? ((e = ov(e, t, Qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      we(ot),
      we(Xe),
      ge(Xe, e))
    : we(ot),
    ge(ot, n);
}
var Ht = null,
  ki = !1,
  Fl = !1;
function iv(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
function U0(e) {
  (ki = !0), iv(e);
}
function An() {
  if (!Fl && Ht !== null) {
    Fl = !0;
    var e = 0,
      t = pe;
    try {
      var n = Ht;
      for (pe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ht = null), (ki = !1);
    } catch (u) {
      throw (Ht !== null && (Ht = Ht.slice(e + 1)), Ap(Os, An), u);
    } finally {
      (pe = t), (Fl = !1);
    }
  }
  return null;
}
var fr = [],
  dr = 0,
  Bo = null,
  Vo = 0,
  _t = [],
  Et = 0,
  Bn = null,
  Kt = 1,
  Gt = '';
function Nn(e, t) {
  (fr[dr++] = Vo), (fr[dr++] = Bo), (Bo = e), (Vo = t);
}
function lv(e, t, n) {
  (_t[Et++] = Kt), (_t[Et++] = Gt), (_t[Et++] = Bn), (Bn = e);
  var r = Kt;
  e = Gt;
  var u = 32 - Mt(r) - 1;
  (r &= ~(1 << u)), (n += 1);
  var o = 32 - Mt(t) + u;
  if (30 < o) {
    var i = u - (u % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (u -= i),
      (Kt = (1 << (32 - Mt(t) + u)) | (n << u) | r),
      (Gt = o + e);
  } else (Kt = (1 << o) | (n << u) | r), (Gt = e);
}
function Ds(e) {
  e.return !== null && (Nn(e, 1), lv(e, 1, 0));
}
function $s(e) {
  for (; e === Bo; )
    (Bo = fr[--dr]), (fr[dr] = null), (Vo = fr[--dr]), (fr[dr] = null);
  for (; e === Bn; )
    (Bn = _t[--Et]),
      (_t[Et] = null),
      (Gt = _t[--Et]),
      (_t[Et] = null),
      (Kt = _t[--Et]),
      (_t[Et] = null);
}
var vt = null,
  pt = null,
  ke = !1,
  It = null;
function av(e, t) {
  var n = kt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (vt = e), (pt = mn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (vt = e), (pt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Bn !== null ? { id: Kt, overflow: Gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = kt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (vt = e),
            (pt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ba(e) {
  if (ke) {
    var t = pt;
    if (t) {
      var n = t;
      if (!zf(e, t)) {
        if (Qa(e)) throw Error(D(418));
        t = mn(n.nextSibling);
        var r = vt;
        t && zf(e, t)
          ? av(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (vt = e));
      }
    } else {
      if (Qa(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (ke = !1), (vt = e);
    }
  }
}
function bf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  vt = e;
}
function lo(e) {
  if (e !== vt) return !1;
  if (!ke) return bf(e), (ke = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !La(e.type, e.memoizedProps))),
    t && (t = pt))
  ) {
    if (Qa(e)) throw (sv(), Error(D(418)));
    for (; t; ) av(e, t), (t = mn(t.nextSibling));
  }
  if ((bf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              pt = mn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      pt = null;
    }
  } else pt = vt ? mn(e.stateNode.nextSibling) : null;
  return !0;
}
function sv() {
  for (var e = pt; e; ) e = mn(e.nextSibling);
}
function Cr() {
  (pt = vt = null), (ke = !1);
}
function zs(e) {
  It === null ? (It = [e]) : It.push(e);
}
var Q0 = rn.ReactCurrentBatchConfig;
function jt(e, t) {
  if (e && e.defaultProps) {
    (t = Te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Wo = jn(null),
  Ho = null,
  pr = null,
  bs = null;
function Ls() {
  bs = pr = Ho = null;
}
function Fs(e) {
  var t = Wo.current;
  we(Wo), (e._currentValue = t);
}
function Va(e, t, n) {
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
function wr(e, t) {
  (Ho = e),
    (bs = pr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (ut = !0), (e.firstContext = null));
}
function xt(e) {
  var t = e._currentValue;
  if (bs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pr === null)) {
      if (Ho === null) throw Error(D(308));
      (pr = e), (Ho.dependencies = { lanes: 0, firstContext: e });
    } else pr = pr.next = e;
  return t;
}
var bn = null;
function qs(e) {
  bn === null ? (bn = [e]) : bn.push(e);
}
function cv(e, t, n, r) {
  var u = t.interleaved;
  return (
    u === null ? ((n.next = n), qs(t)) : ((n.next = u.next), (u.next = n)),
    (t.interleaved = n),
    en(e, r)
  );
}
function en(e, t) {
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
var sn = !1;
function Us(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fv(e, t) {
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
function Xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (ce & 2) !== 0)) {
    var u = r.pending;
    return (
      u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
      (r.pending = t),
      en(e, n)
    );
  }
  return (
    (u = r.interleaved),
    u === null ? ((t.next = t), qs(r)) : ((t.next = u.next), (u.next = t)),
    (r.interleaved = t),
    en(e, n)
  );
}
function Po(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cs(e, n);
  }
}
function Lf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var u = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (u = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (u = o = t) : (o = o.next = t);
    } else u = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: u,
      lastBaseUpdate: o,
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
function Ko(e, t, n, r) {
  var u = e.updateQueue;
  sn = !1;
  var o = u.firstBaseUpdate,
    i = u.lastBaseUpdate,
    l = u.shared.pending;
  if (l !== null) {
    u.shared.pending = null;
    var a = l,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== i &&
        (l === null ? (c.firstBaseUpdate = s) : (l.next = s),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = u.baseState;
    (i = 0), (c = s = a = null), (l = o);
    do {
      var d = l.lane,
        y = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            w = l;
          switch (((d = t), (y = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == 'function')) {
                p = g.call(y, p, d);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (d = typeof g == 'function' ? g.call(y, p, d) : g),
                d == null)
              )
                break e;
              p = Te({}, p, d);
              break e;
            case 2:
              sn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = u.effects),
          d === null ? (u.effects = [l]) : d.push(l));
      } else
        (y = {
          eventTime: y,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((s = c = y), (a = p)) : (c = c.next = y),
          (i |= d);
      if (((l = l.next), l === null)) {
        if (((l = u.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (u.lastBaseUpdate = d),
          (u.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = p),
      (u.baseState = a),
      (u.firstBaseUpdate = s),
      (u.lastBaseUpdate = c),
      (t = u.shared.interleaved),
      t !== null)
    ) {
      u = t;
      do (i |= u.lane), (u = u.next);
      while (u !== t);
    } else o === null && (u.shared.lanes = 0);
    (Wn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Ff(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        u = r.callback;
      if (u !== null) {
        if (((r.callback = null), (r = n), typeof u != 'function'))
          throw Error(D(191, u));
        u.call(r);
      }
    }
}
var dv = new cp.Component().refs;
function Wa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Je(),
      u = wn(e),
      o = Xt(r, u);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = gn(e, o, u)),
      t !== null && (Nt(t, e, u, r), Po(t, e, u));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Je(),
      u = wn(e),
      o = Xt(r, u);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = gn(e, o, u)),
      t !== null && (Nt(t, e, u, r), Po(t, e, u));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Je(),
      r = wn(e),
      u = Xt(n, r);
    (u.tag = 2),
      t != null && (u.callback = t),
      (t = gn(e, u, r)),
      t !== null && (Nt(t, e, r, n), Po(t, e, r));
  },
};
function qf(e, t, n, r, u, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Eu(n, r) || !Eu(u, o)
      : !0
  );
}
function pv(e, t, n) {
  var r = !1,
    u = On,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = xt(o))
      : ((u = it(t) ? Qn : Xe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Or(e, u) : On)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = u),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Uf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pi.enqueueReplaceState(t, t.state, null);
}
function Ha(e, t, n, r) {
  var u = e.stateNode;
  (u.props = n), (u.state = e.memoizedState), (u.refs = dv), Us(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (u.context = xt(o))
    : ((o = it(t) ? Qn : Xe.current), (u.context = Or(e, o))),
    (u.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Wa(e, t, o, n), (u.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof u.getSnapshotBeforeUpdate == 'function' ||
      (typeof u.UNSAFE_componentWillMount != 'function' &&
        typeof u.componentWillMount != 'function') ||
      ((t = u.state),
      typeof u.componentWillMount == 'function' && u.componentWillMount(),
      typeof u.UNSAFE_componentWillMount == 'function' &&
        u.UNSAFE_componentWillMount(),
      t !== u.state && Pi.enqueueReplaceState(u, u.state, null),
      Ko(e, n, u, r),
      (u.state = e.memoizedState)),
    typeof u.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Yr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var u = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var l = u.refs;
            l === dv && (l = u.refs = {}),
              i === null ? delete l[o] : (l[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function ao(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Qf(e) {
  var t = e._init;
  return t(e._payload);
}
function vv(e) {
  function t(h, f) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [f]), (h.flags |= 16)) : v.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function u(h, f) {
    return (h = _n(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, f, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((h.flags |= 2), f) : v)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, f, v, m) {
    return f === null || f.tag !== 6
      ? ((f = Hl(v, h.mode, m)), (f.return = h), f)
      : ((f = u(f, v)), (f.return = h), f);
  }
  function a(h, f, v, m) {
    var _ = v.type;
    return _ === or
      ? c(h, f, v.props.children, m, v.key)
      : f !== null &&
        (f.elementType === _ ||
          (typeof _ == 'object' &&
            _ !== null &&
            _.$$typeof === an &&
            Qf(_) === f.type))
      ? ((m = u(f, v.props)), (m.ref = Yr(h, f, v)), (m.return = h), m)
      : ((m = jo(v.type, v.key, v.props, null, h.mode, m)),
        (m.ref = Yr(h, f, v)),
        (m.return = h),
        m);
  }
  function s(h, f, v, m) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = Kl(v, h.mode, m)), (f.return = h), f)
      : ((f = u(f, v.children || [])), (f.return = h), f);
  }
  function c(h, f, v, m, _) {
    return f === null || f.tag !== 7
      ? ((f = Un(v, h.mode, m, _)), (f.return = h), f)
      : ((f = u(f, v)), (f.return = h), f);
  }
  function p(h, f, v) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = Hl('' + f, h.mode, v)), (f.return = h), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case Xu:
          return (
            (v = jo(f.type, f.key, f.props, null, h.mode, v)),
            (v.ref = Yr(h, null, f)),
            (v.return = h),
            v
          );
        case ur:
          return (f = Kl(f, h.mode, v)), (f.return = h), f;
        case an:
          var m = f._init;
          return p(h, m(f._payload), v);
      }
      if (tu(f) || Vr(f))
        return (f = Un(f, h.mode, v, null)), (f.return = h), f;
      ao(h, f);
    }
    return null;
  }
  function d(h, f, v, m) {
    var _ = f !== null ? f.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return _ !== null ? null : l(h, f, '' + v, m);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Xu:
          return v.key === _ ? a(h, f, v, m) : null;
        case ur:
          return v.key === _ ? s(h, f, v, m) : null;
        case an:
          return (_ = v._init), d(h, f, _(v._payload), m);
      }
      if (tu(v) || Vr(v)) return _ !== null ? null : c(h, f, v, m, null);
      ao(h, v);
    }
    return null;
  }
  function y(h, f, v, m, _) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (h = h.get(v) || null), l(f, h, '' + m, _);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Xu:
          return (h = h.get(m.key === null ? v : m.key) || null), a(f, h, m, _);
        case ur:
          return (h = h.get(m.key === null ? v : m.key) || null), s(f, h, m, _);
        case an:
          var E = m._init;
          return y(h, f, v, E(m._payload), _);
      }
      if (tu(m) || Vr(m)) return (h = h.get(v) || null), c(f, h, m, _, null);
      ao(f, m);
    }
    return null;
  }
  function g(h, f, v, m) {
    for (
      var _ = null, E = null, P = f, x = (f = 0), R = null;
      P !== null && x < v.length;
      x++
    ) {
      P.index > x ? ((R = P), (P = null)) : (R = P.sibling);
      var T = d(h, P, v[x], m);
      if (T === null) {
        P === null && (P = R);
        break;
      }
      e && P && T.alternate === null && t(h, P),
        (f = o(T, f, x)),
        E === null ? (_ = T) : (E.sibling = T),
        (E = T),
        (P = R);
    }
    if (x === v.length) return n(h, P), ke && Nn(h, x), _;
    if (P === null) {
      for (; x < v.length; x++)
        (P = p(h, v[x], m)),
          P !== null &&
            ((f = o(P, f, x)), E === null ? (_ = P) : (E.sibling = P), (E = P));
      return ke && Nn(h, x), _;
    }
    for (P = r(h, P); x < v.length; x++)
      (R = y(P, h, x, v[x], m)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? x : R.key),
          (f = o(R, f, x)),
          E === null ? (_ = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        P.forEach(function (M) {
          return t(h, M);
        }),
      ke && Nn(h, x),
      _
    );
  }
  function w(h, f, v, m) {
    var _ = Vr(v);
    if (typeof _ != 'function') throw Error(D(150));
    if (((v = _.call(v)), v == null)) throw Error(D(151));
    for (
      var E = (_ = null), P = f, x = (f = 0), R = null, T = v.next();
      P !== null && !T.done;
      x++, T = v.next()
    ) {
      P.index > x ? ((R = P), (P = null)) : (R = P.sibling);
      var M = d(h, P, T.value, m);
      if (M === null) {
        P === null && (P = R);
        break;
      }
      e && P && M.alternate === null && t(h, P),
        (f = o(M, f, x)),
        E === null ? (_ = M) : (E.sibling = M),
        (E = M),
        (P = R);
    }
    if (T.done) return n(h, P), ke && Nn(h, x), _;
    if (P === null) {
      for (; !T.done; x++, T = v.next())
        (T = p(h, T.value, m)),
          T !== null &&
            ((f = o(T, f, x)), E === null ? (_ = T) : (E.sibling = T), (E = T));
      return ke && Nn(h, x), _;
    }
    for (P = r(h, P); !T.done; x++, T = v.next())
      (T = y(P, h, x, T.value, m)),
        T !== null &&
          (e && T.alternate !== null && P.delete(T.key === null ? x : T.key),
          (f = o(T, f, x)),
          E === null ? (_ = T) : (E.sibling = T),
          (E = T));
    return (
      e &&
        P.forEach(function ($) {
          return t(h, $);
        }),
      ke && Nn(h, x),
      _
    );
  }
  function C(h, f, v, m) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === or &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case Xu:
          e: {
            for (var _ = v.key, E = f; E !== null; ) {
              if (E.key === _) {
                if (((_ = v.type), _ === or)) {
                  if (E.tag === 7) {
                    n(h, E.sibling),
                      (f = u(E, v.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  E.elementType === _ ||
                  (typeof _ == 'object' &&
                    _ !== null &&
                    _.$$typeof === an &&
                    Qf(_) === E.type)
                ) {
                  n(h, E.sibling),
                    (f = u(E, v.props)),
                    (f.ref = Yr(h, E, v)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            v.type === or
              ? ((f = Un(v.props.children, h.mode, m, v.key)),
                (f.return = h),
                (h = f))
              : ((m = jo(v.type, v.key, v.props, null, h.mode, m)),
                (m.ref = Yr(h, f, v)),
                (m.return = h),
                (h = m));
          }
          return i(h);
        case ur:
          e: {
            for (E = v.key; f !== null; ) {
              if (f.key === E)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(h, f.sibling),
                    (f = u(f, v.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = Kl(v, h.mode, m)), (f.return = h), (h = f);
          }
          return i(h);
        case an:
          return (E = v._init), C(h, f, E(v._payload), m);
      }
      if (tu(v)) return g(h, f, v, m);
      if (Vr(v)) return w(h, f, v, m);
      ao(h, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = u(f, v)), (f.return = h), (h = f))
          : (n(h, f), (f = Hl(v, h.mode, m)), (f.return = h), (h = f)),
        i(h))
      : n(h, f);
  }
  return C;
}
var Tr = vv(!0),
  hv = vv(!1),
  Qu = {},
  Ut = jn(Qu),
  Ou = jn(Qu),
  Cu = jn(Qu);
function Ln(e) {
  if (e === Qu) throw Error(D(174));
  return e;
}
function Qs(e, t) {
  switch ((ge(Cu, t), ge(Ou, e), ge(Ut, Qu), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xa(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xa(t, e));
  }
  we(Ut), ge(Ut, t);
}
function Rr() {
  we(Ut), we(Ou), we(Cu);
}
function yv(e) {
  Ln(Cu.current);
  var t = Ln(Ut.current),
    n = xa(t, e.type);
  t !== n && (ge(Ou, e), ge(Ut, n));
}
function Bs(e) {
  Ou.current === e && (we(Ut), we(Ou));
}
var xe = jn(0);
function Go(e) {
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
var ql = [];
function Vs() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var xo = rn.ReactCurrentDispatcher,
  Ul = rn.ReactCurrentBatchConfig,
  Vn = 0,
  Ce = null,
  Ne = null,
  Le = null,
  Yo = !1,
  cu = !1,
  Tu = 0,
  B0 = 0;
function Ke() {
  throw Error(D(321));
}
function Ws(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Dt(e[n], t[n])) return !1;
  return !0;
}
function Hs(e, t, n, r, u, o) {
  if (
    ((Vn = o),
    (Ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (xo.current = e === null || e.memoizedState === null ? K0 : G0),
    (e = n(r, u)),
    cu)
  ) {
    o = 0;
    do {
      if (((cu = !1), (Tu = 0), 25 <= o)) throw Error(D(301));
      (o += 1),
        (Le = Ne = null),
        (t.updateQueue = null),
        (xo.current = Y0),
        (e = n(r, u));
    } while (cu);
  }
  if (
    ((xo.current = Xo),
    (t = Ne !== null && Ne.next !== null),
    (Vn = 0),
    (Le = Ne = Ce = null),
    (Yo = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function Ks() {
  var e = Tu !== 0;
  return (Tu = 0), e;
}
function Lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Le === null ? (Ce.memoizedState = Le = e) : (Le = Le.next = e), Le;
}
function Ot() {
  if (Ne === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ne.next;
  var t = Le === null ? Ce.memoizedState : Le.next;
  if (t !== null) (Le = t), (Ne = e);
  else {
    if (e === null) throw Error(D(310));
    (Ne = e),
      (e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null,
      }),
      Le === null ? (Ce.memoizedState = Le = e) : (Le = Le.next = e);
  }
  return Le;
}
function Ru(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ql(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = Ne,
    u = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (u !== null) {
      var i = u.next;
      (u.next = o.next), (o.next = i);
    }
    (r.baseQueue = u = o), (n.pending = null);
  }
  if (u !== null) {
    (o = u.next), (r = r.baseState);
    var l = (i = null),
      a = null,
      s = o;
    do {
      var c = s.lane;
      if ((Vn & c) === c)
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
        a === null ? ((l = a = p), (i = r)) : (a = a.next = p),
          (Ce.lanes |= c),
          (Wn |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = l),
      Dt(r, t.memoizedState) || (ut = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    u = e;
    do (o = u.lane), (Ce.lanes |= o), (Wn |= o), (u = u.next);
    while (u !== e);
  } else u === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bl(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    u = n.pending,
    o = t.memoizedState;
  if (u !== null) {
    n.pending = null;
    var i = (u = u.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== u);
    Dt(o, t.memoizedState) || (ut = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function mv() {}
function gv(e, t) {
  var n = Ce,
    r = Ot(),
    u = t(),
    o = !Dt(r.memoizedState, u);
  if (
    (o && ((r.memoizedState = u), (ut = !0)),
    (r = r.queue),
    Gs(_v.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ju(9, wv.bind(null, n, r, u, t), void 0, null),
      qe === null)
    )
      throw Error(D(349));
    (Vn & 30) !== 0 || Sv(n, t, u);
  }
  return u;
}
function Sv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ev(t) && kv(e);
}
function _v(e, t, n) {
  return n(function () {
    Ev(t) && kv(e);
  });
}
function Ev(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dt(e, n);
  } catch {
    return !0;
  }
}
function kv(e) {
  var t = en(e, 1);
  t !== null && Nt(t, e, 1, -1);
}
function Bf(e) {
  var t = Lt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ru,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = H0.bind(null, Ce, e)),
    [t.memoizedState, e]
  );
}
function ju(e, t, n, r) {
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
function Pv() {
  return Ot().memoizedState;
}
function Oo(e, t, n, r) {
  var u = Lt();
  (Ce.flags |= e),
    (u.memoizedState = ju(1 | t, n, void 0, r === void 0 ? null : r));
}
function xi(e, t, n, r) {
  var u = Ot();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ne !== null) {
    var i = Ne.memoizedState;
    if (((o = i.destroy), r !== null && Ws(r, i.deps))) {
      u.memoizedState = ju(t, n, o, r);
      return;
    }
  }
  (Ce.flags |= e), (u.memoizedState = ju(1 | t, n, o, r));
}
function Vf(e, t) {
  return Oo(8390656, 8, e, t);
}
function Gs(e, t) {
  return xi(2048, 8, e, t);
}
function xv(e, t) {
  return xi(4, 2, e, t);
}
function Ov(e, t) {
  return xi(4, 4, e, t);
}
function Cv(e, t) {
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
function Tv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xi(4, 4, Cv.bind(null, t, e), n)
  );
}
function Ys() {}
function Rv(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ws(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function jv(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ws(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Av(e, t, n) {
  return (Vn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n))
    : (Dt(n, t) || ((n = Np()), (Ce.lanes |= n), (Wn |= n), (e.baseState = !0)),
      t);
}
function V0(e, t) {
  var n = pe;
  (pe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (pe = n), (Ul.transition = r);
  }
}
function Iv() {
  return Ot().memoizedState;
}
function W0(e, t, n) {
  var r = wn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mv(e))
  )
    Nv(t, n);
  else if (((n = cv(e, t, n, r)), n !== null)) {
    var u = Je();
    Nt(n, e, r, u), Dv(n, t, r);
  }
}
function H0(e, t, n) {
  var r = wn(e),
    u = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mv(e)) Nv(t, u);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = o(i, n);
        if (((u.hasEagerState = !0), (u.eagerState = l), Dt(l, i))) {
          var a = t.interleaved;
          a === null
            ? ((u.next = u), qs(t))
            : ((u.next = a.next), (a.next = u)),
            (t.interleaved = u);
          return;
        }
      } catch {
      } finally {
      }
    (n = cv(e, t, u, r)),
      n !== null && ((u = Je()), Nt(n, e, r, u), Dv(n, t, r));
  }
}
function Mv(e) {
  var t = e.alternate;
  return e === Ce || (t !== null && t === Ce);
}
function Nv(e, t) {
  cu = Yo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Dv(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cs(e, n);
  }
}
var Xo = {
    readContext: xt,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useInsertionEffect: Ke,
    useLayoutEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useMutableSource: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    unstable_isNewReconciler: !1,
  },
  K0 = {
    readContext: xt,
    useCallback: function (e, t) {
      return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xt,
    useEffect: Vf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Oo(4194308, 4, Cv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Oo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Oo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Lt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Lt();
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
        (e = e.dispatch = W0.bind(null, Ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Bf,
    useDebugValue: Ys,
    useDeferredValue: function (e) {
      return (Lt().memoizedState = e);
    },
    useTransition: function () {
      var e = Bf(!1),
        t = e[0];
      return (e = V0.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ce,
        u = Lt();
      if (ke) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), qe === null)) throw Error(D(349));
        (Vn & 30) !== 0 || Sv(r, t, n);
      }
      u.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (u.queue = o),
        Vf(_v.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ju(9, wv.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Lt(),
        t = qe.identifierPrefix;
      if (ke) {
        var n = Gt,
          r = Kt;
        (n = (r & ~(1 << (32 - Mt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Tu++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = B0++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  G0 = {
    readContext: xt,
    useCallback: Rv,
    useContext: xt,
    useEffect: Gs,
    useImperativeHandle: Tv,
    useInsertionEffect: xv,
    useLayoutEffect: Ov,
    useMemo: jv,
    useReducer: Ql,
    useRef: Pv,
    useState: function () {
      return Ql(Ru);
    },
    useDebugValue: Ys,
    useDeferredValue: function (e) {
      var t = Ot();
      return Av(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Ru)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: mv,
    useSyncExternalStore: gv,
    useId: Iv,
    unstable_isNewReconciler: !1,
  },
  Y0 = {
    readContext: xt,
    useCallback: Rv,
    useContext: xt,
    useEffect: Gs,
    useImperativeHandle: Tv,
    useInsertionEffect: xv,
    useLayoutEffect: Ov,
    useMemo: jv,
    useReducer: Bl,
    useRef: Pv,
    useState: function () {
      return Bl(Ru);
    },
    useDebugValue: Ys,
    useDeferredValue: function (e) {
      var t = Ot();
      return Ne === null ? (t.memoizedState = e) : Av(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Ru)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: mv,
    useSyncExternalStore: gv,
    useId: Iv,
    unstable_isNewReconciler: !1,
  };
function jr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Pm(r)), (r = r.return);
    while (r);
    var u = n;
  } catch (o) {
    u =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: u, digest: null };
}
function Vl(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function Ka(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var X0 = typeof WeakMap == 'function' ? WeakMap : Map;
function $v(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jo || ((Jo = !0), (us = r)), Ka(e, t);
    }),
    n
  );
}
function zv(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var u = t.value;
    (n.payload = function () {
      return r(u);
    }),
      (n.callback = function () {
        Ka(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ka(e, t),
          typeof r != 'function' &&
            (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Wf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new X0();
    var u = new Set();
    r.set(t, u);
  } else (u = r.get(t)), u === void 0 && ((u = new Set()), r.set(t, u));
  u.has(n) || (u.add(n), (e = fg.bind(null, e, t, n)), t.then(e, e));
}
function Hf(e) {
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
function Kf(e, t, n, r, u) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xt(-1, 1)), (t.tag = 2), gn(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = u), e);
}
var Z0 = rn.ReactCurrentOwner,
  ut = !1;
function Ze(e, t, n, r) {
  t.child = e === null ? hv(t, null, n, r) : Tr(t, e.child, n, r);
}
function Gf(e, t, n, r, u) {
  n = n.render;
  var o = t.ref;
  return (
    wr(t, u),
    (r = Hs(e, t, n, r, o, u)),
    (n = Ks()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~u),
        tn(e, t, u))
      : (ke && n && Ds(t), (t.flags |= 1), Ze(e, t, r, u), t.child)
  );
}
function Yf(e, t, n, r, u) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !uc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), bv(e, t, o, r, u))
      : ((e = jo(n.type, null, r, t, t.mode, u)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), (e.lanes & u) === 0)) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Eu), n(i, r) && e.ref === t.ref)
    )
      return tn(e, t, u);
  }
  return (
    (t.flags |= 1),
    (e = _n(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function bv(e, t, n, r, u) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Eu(o, r) && e.ref === t.ref)
      if (((ut = !1), (t.pendingProps = r = o), (e.lanes & u) !== 0))
        (e.flags & 131072) !== 0 && (ut = !0);
      else return (t.lanes = e.lanes), tn(e, t, u);
  }
  return Ga(e, t, n, r, u);
}
function Lv(e, t, n) {
  var r = t.pendingProps,
    u = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ge(hr, dt),
        (dt |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ge(hr, dt),
          (dt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ge(hr, dt),
        (dt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ge(hr, dt),
      (dt |= r);
  return Ze(e, t, u, n), t.child;
}
function Fv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ga(e, t, n, r, u) {
  var o = it(n) ? Qn : Xe.current;
  return (
    (o = Or(t, o)),
    wr(t, u),
    (n = Hs(e, t, n, r, o, u)),
    (r = Ks()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~u),
        tn(e, t, u))
      : (ke && r && Ds(t), (t.flags |= 1), Ze(e, t, n, u), t.child)
  );
}
function Xf(e, t, n, r, u) {
  if (it(n)) {
    var o = !0;
    Qo(t);
  } else o = !1;
  if ((wr(t, u), t.stateNode === null))
    Co(e, t), pv(t, n, r), Ha(t, n, r, u), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = xt(s))
      : ((s = it(n) ? Qn : Xe.current), (s = Or(t, s)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== s) && Uf(t, i, r, s)),
      (sn = !1);
    var d = t.memoizedState;
    (i.state = d),
      Ko(t, r, i, u),
      (a = t.memoizedState),
      l !== r || d !== a || ot.current || sn
        ? (typeof c == 'function' && (Wa(t, n, c, r), (a = t.memoizedState)),
          (l = sn || qf(t, n, l, r, d, a, s))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = l))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      fv(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : jt(t.type, l)),
      (i.props = s),
      (p = t.pendingProps),
      (d = i.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = xt(a))
        : ((a = it(n) ? Qn : Xe.current), (a = Or(t, a)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== p || d !== a) && Uf(t, i, r, a)),
      (sn = !1),
      (d = t.memoizedState),
      (i.state = d),
      Ko(t, r, i, u);
    var g = t.memoizedState;
    l !== p || d !== g || ot.current || sn
      ? (typeof y == 'function' && (Wa(t, n, y, r), (g = t.memoizedState)),
        (s = sn || qf(t, n, s, r, d, g, a) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, g, a),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, g, a)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ya(e, t, n, r, o, u);
}
function Ya(e, t, n, r, u, o) {
  Fv(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return u && $f(t, n, !1), tn(e, t, o);
  (r = t.stateNode), (Z0.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Tr(t, e.child, null, o)), (t.child = Tr(t, null, l, o)))
      : Ze(e, t, l, o),
    (t.memoizedState = r.state),
    u && $f(t, n, !0),
    t.child
  );
}
function qv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Df(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Df(e, t.context, !1),
    Qs(e, t.containerInfo);
}
function Zf(e, t, n, r, u) {
  return Cr(), zs(u), (t.flags |= 256), Ze(e, t, n, r), t.child;
}
var Xa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Za(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Uv(e, t, n) {
  var r = t.pendingProps,
    u = xe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (u |= 1),
    ge(xe, u & 1),
    e === null)
  )
    return (
      Ba(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === '$!'
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              (r & 1) === 0 && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ti(i, r, 0, null)),
              (e = Un(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Za(n)),
              (t.memoizedState = Xa),
              e)
            : Xs(t, i))
    );
  if (((u = e.memoizedState), u !== null && ((l = u.dehydrated), l !== null)))
    return J0(e, t, i, r, l, u, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (u = e.child), (l = u.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      (i & 1) === 0 && t.child !== u
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = _n(u, a)), (r.subtreeFlags = u.subtreeFlags & 14680064)),
      l !== null ? (o = _n(l, o)) : ((o = Un(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Za(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xa),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = _n(o, { mode: 'visible', children: r.children })),
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
function Xs(e, t) {
  return (
    (t = Ti({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function so(e, t, n, r) {
  return (
    r !== null && zs(r),
    Tr(t, e.child, null, n),
    (e = Xs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function J0(e, t, n, r, u, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Vl(Error(D(422)))), so(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (u = t.mode),
        (r = Ti({ mode: 'visible', children: r.children }, u, 0, null)),
        (o = Un(o, u, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        (t.mode & 1) !== 0 && Tr(t, e.child, null, i),
        (t.child.memoizedState = Za(i)),
        (t.memoizedState = Xa),
        o);
  if ((t.mode & 1) === 0) return so(e, t, i, null);
  if (u.data === '$!') {
    if (((r = u.nextSibling && u.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(D(419))), (r = Vl(o, r, void 0)), so(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), ut || l)) {
    if (((r = qe), r !== null)) {
      switch (i & -i) {
        case 4:
          u = 2;
          break;
        case 16:
          u = 8;
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
          u = 32;
          break;
        case 536870912:
          u = 268435456;
          break;
        default:
          u = 0;
      }
      (u = (u & (r.suspendedLanes | i)) !== 0 ? 0 : u),
        u !== 0 &&
          u !== o.retryLane &&
          ((o.retryLane = u), en(e, u), Nt(r, e, u, -1));
    }
    return rc(), (r = Vl(Error(D(421)))), so(e, t, i, r);
  }
  return u.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dg.bind(null, e)),
      (u._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (pt = mn(u.nextSibling)),
      (vt = t),
      (ke = !0),
      (It = null),
      e !== null &&
        ((_t[Et++] = Kt),
        (_t[Et++] = Gt),
        (_t[Et++] = Bn),
        (Kt = e.id),
        (Gt = e.overflow),
        (Bn = t)),
      (t = Xs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Jf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Va(e.return, t, n);
}
function Wl(e, t, n, r, u) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: u,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = u));
}
function Qv(e, t, n) {
  var r = t.pendingProps,
    u = r.revealOrder,
    o = r.tail;
  if ((Ze(e, t, r.children, n), (r = xe.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Jf(e, n, t);
        else if (e.tag === 19) Jf(e, n, t);
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
  if ((ge(xe, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (u) {
      case 'forwards':
        for (n = t.child, u = null; n !== null; )
          (e = n.alternate),
            e !== null && Go(e) === null && (u = n),
            (n = n.sibling);
        (n = u),
          n === null
            ? ((u = t.child), (t.child = null))
            : ((u = n.sibling), (n.sibling = null)),
          Wl(t, !1, u, n, o);
        break;
      case 'backwards':
        for (n = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Go(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = n), (n = u), (u = e);
        }
        Wl(t, !0, n, null, o);
        break;
      case 'together':
        Wl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Co(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wn |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _n(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _n(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function eg(e, t, n) {
  switch (t.tag) {
    case 3:
      qv(t), Cr();
      break;
    case 5:
      yv(t);
      break;
    case 1:
      it(t.type) && Qo(t);
      break;
    case 4:
      Qs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        u = t.memoizedProps.value;
      ge(Wo, r._currentValue), (r._currentValue = u);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ge(xe, xe.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Uv(e, t, n)
          : (ge(xe, xe.current & 1),
            (e = tn(e, t, n)),
            e !== null ? e.sibling : null);
      ge(xe, xe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return Qv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((u = t.memoizedState),
        u !== null &&
          ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
        ge(xe, xe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Lv(e, t, n);
  }
  return tn(e, t, n);
}
var Bv, Ja, Vv, Wv;
Bv = function (e, t) {
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
Ja = function () {};
Vv = function (e, t, n, r) {
  var u = e.memoizedProps;
  if (u !== r) {
    (e = t.stateNode), Ln(Ut.current);
    var o = null;
    switch (n) {
      case 'input':
        (u = _a(e, u)), (r = _a(e, r)), (o = []);
        break;
      case 'select':
        (u = Te({}, u, { value: void 0 })),
          (r = Te({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (u = Pa(e, u)), (r = Pa(e, r)), (o = []);
        break;
      default:
        typeof u.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = qo);
    }
    Oa(n, r);
    var i;
    n = null;
    for (s in u)
      if (!r.hasOwnProperty(s) && u.hasOwnProperty(s) && u[s] != null)
        if (s === 'style') {
          var l = u[s];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (hu.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((l = u != null ? u[s] : void 0),
        r.hasOwnProperty(s) && a !== l && (a != null || l != null))
      )
        if (s === 'style')
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in a)
              a.hasOwnProperty(i) &&
                l[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(s, a))
            : s === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (o = o || []).push(s, '' + a)
            : s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              (hu.hasOwnProperty(s)
                ? (a != null && s === 'onScroll' && Se('scroll', e),
                  o || l === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push('style', n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Wv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xr(e, t) {
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
function Ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var u = e.child; u !== null; )
      (n |= u.lanes | u.childLanes),
        (r |= u.subtreeFlags & 14680064),
        (r |= u.flags & 14680064),
        (u.return = e),
        (u = u.sibling);
  else
    for (u = e.child; u !== null; )
      (n |= u.lanes | u.childLanes),
        (r |= u.subtreeFlags),
        (r |= u.flags),
        (u.return = e),
        (u = u.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function tg(e, t, n) {
  var r = t.pendingProps;
  switch (($s(t), t.tag)) {
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
      return Ge(t), null;
    case 1:
      return it(t.type) && Uo(), Ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Rr(),
        we(ot),
        we(Xe),
        Vs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (lo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), It !== null && (ls(It), (It = null)))),
        Ja(e, t),
        Ge(t),
        null
      );
    case 5:
      Bs(t);
      var u = Ln(Cu.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vv(e, t, n, r, u),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return Ge(t), null;
        }
        if (((e = Ln(Ut.current)), lo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ft] = t), (r[xu] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Se('cancel', r), Se('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Se('load', r);
              break;
            case 'video':
            case 'audio':
              for (u = 0; u < ru.length; u++) Se(ru[u], r);
              break;
            case 'source':
              Se('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Se('error', r), Se('load', r);
              break;
            case 'details':
              Se('toggle', r);
              break;
            case 'input':
              af(r, o), Se('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Se('invalid', r);
              break;
            case 'textarea':
              cf(r, o), Se('invalid', r);
          }
          Oa(n, o), (u = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var l = o[i];
              i === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      io(r.textContent, l, e),
                    (u = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      io(r.textContent, l, e),
                    (u = ['children', '' + l]))
                : hu.hasOwnProperty(i) &&
                  l != null &&
                  i === 'onScroll' &&
                  Se('scroll', r);
            }
          switch (n) {
            case 'input':
              Zu(r), sf(r, o, !0);
              break;
            case 'textarea':
              Zu(r), ff(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = qo);
          }
          (r = u), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = u.nodeType === 9 ? u : u.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Sp(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ft] = t),
            (e[xu] = r),
            Bv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ca(n, r)), n)) {
              case 'dialog':
                Se('cancel', e), Se('close', e), (u = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Se('load', e), (u = r);
                break;
              case 'video':
              case 'audio':
                for (u = 0; u < ru.length; u++) Se(ru[u], e);
                u = r;
                break;
              case 'source':
                Se('error', e), (u = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Se('error', e), Se('load', e), (u = r);
                break;
              case 'details':
                Se('toggle', e), (u = r);
                break;
              case 'input':
                af(e, r), (u = _a(e, r)), Se('invalid', e);
                break;
              case 'option':
                u = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (u = Te({}, r, { value: void 0 })),
                  Se('invalid', e);
                break;
              case 'textarea':
                cf(e, r), (u = Pa(e, r)), Se('invalid', e);
                break;
              default:
                u = r;
            }
            Oa(n, u), (l = u);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === 'style'
                  ? Ep(e, a)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && wp(e, a))
                  : o === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && yu(e, a)
                    : typeof a == 'number' && yu(e, '' + a)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (hu.hasOwnProperty(o)
                      ? a != null && o === 'onScroll' && Se('scroll', e)
                      : a != null && _s(e, o, a, i));
              }
            switch (n) {
              case 'input':
                Zu(e), sf(e, r, !1);
                break;
              case 'textarea':
                Zu(e), ff(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + xn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? yr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      yr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof u.onClick == 'function' && (e.onclick = qo);
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
      return Ge(t), null;
    case 6:
      if (e && t.stateNode != null) Wv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(D(166));
        if (((n = Ln(Cu.current)), Ln(Ut.current), lo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ft] = t),
            (o = r.nodeValue !== n) && ((e = vt), e !== null))
          )
            switch (e.tag) {
              case 3:
                io(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  io(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ft] = t),
            (t.stateNode = r);
      }
      return Ge(t), null;
    case 13:
      if (
        (we(xe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ke && pt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          sv(), Cr(), (t.flags |= 98560), (o = !1);
        else if (((o = lo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(D(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(D(317));
            o[Ft] = t;
          } else
            Cr(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          Ge(t), (o = !1);
        } else It !== null && (ls(It), (It = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (xe.current & 1) !== 0
                ? $e === 0 && ($e = 3)
                : rc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return (
        Rr(), Ja(e, t), e === null && ku(t.stateNode.containerInfo), Ge(t), null
      );
    case 10:
      return Fs(t.type._context), Ge(t), null;
    case 17:
      return it(t.type) && Uo(), Ge(t), null;
    case 19:
      if ((we(xe), (o = t.memoizedState), o === null)) return Ge(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Xr(o, !1);
        else {
          if ($e !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((i = Go(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Xr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ge(xe, (xe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ie() > Ar &&
            ((t.flags |= 128), (r = !0), Xr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Go(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Xr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !ke)
            )
              return Ge(t), null;
          } else
            2 * Ie() - o.renderingStartTime > Ar &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Xr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ie()),
          (t.sibling = null),
          (n = xe.current),
          ge(xe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        nc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (dt & 1073741824) !== 0 &&
            (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function ng(e, t) {
  switch (($s(t), t.tag)) {
    case 1:
      return (
        it(t.type) && Uo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Rr(),
        we(ot),
        we(Xe),
        Vs(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Bs(t), null;
    case 13:
      if (
        (we(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        Cr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return we(xe), null;
    case 4:
      return Rr(), null;
    case 10:
      return Fs(t.type._context), null;
    case 22:
    case 23:
      return nc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var co = !1,
  Ye = !1,
  rg = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null;
function vr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        je(e, t, r);
      }
    else n.current = null;
}
function es(e, t, n) {
  try {
    n();
  } catch (r) {
    je(e, t, r);
  }
}
var ed = !1;
function ug(e, t) {
  if (((za = bo), (e = Yp()), Ns(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var u = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            a = -1,
            s = 0,
            c = 0,
            p = e,
            d = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (u !== 0 && p.nodeType !== 3) || (l = i + u),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (d = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if (
                (d === n && ++s === u && (l = i),
                d === o && ++c === r && (a = i),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = d), (d = p.parentNode);
            }
            p = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ba = { focusedElem: e, selectionRange: n }, bo = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var g = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    C = g.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : jt(t.type, w),
                      C
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (m) {
          je(t, t.return, m);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (g = ed), (ed = !1), g;
}
function fu(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var u = (r = r.next);
    do {
      if ((u.tag & e) === e) {
        var o = u.destroy;
        (u.destroy = void 0), o !== void 0 && es(t, n, o);
      }
      u = u.next;
    } while (u !== r);
  }
}
function Oi(e, t) {
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
function ts(e) {
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
function Hv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Hv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ft], delete t[xu], delete t[qa], delete t[F0], delete t[q0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Kv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function td(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Kv(e.return)) return null;
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
function ns(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = qo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ns(e, t, n), e = e.sibling; e !== null; ) ns(e, t, n), (e = e.sibling);
}
function rs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (rs(e, t, n), e = e.sibling; e !== null; ) rs(e, t, n), (e = e.sibling);
}
var Qe = null,
  At = !1;
function on(e, t, n) {
  for (n = n.child; n !== null; ) Gv(e, t, n), (n = n.sibling);
}
function Gv(e, t, n) {
  if (qt && typeof qt.onCommitFiberUnmount == 'function')
    try {
      qt.onCommitFiberUnmount(gi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ye || vr(n, t);
    case 6:
      var r = Qe,
        u = At;
      (Qe = null),
        on(e, t, n),
        (Qe = r),
        (At = u),
        Qe !== null &&
          (At
            ? ((e = Qe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Qe.removeChild(n.stateNode));
      break;
    case 18:
      Qe !== null &&
        (At
          ? ((e = Qe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ll(e.parentNode, n)
              : e.nodeType === 1 && Ll(e, n),
            wu(e))
          : Ll(Qe, n.stateNode));
      break;
    case 4:
      (r = Qe),
        (u = At),
        (Qe = n.stateNode.containerInfo),
        (At = !0),
        on(e, t, n),
        (Qe = r),
        (At = u);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        u = r = r.next;
        do {
          var o = u,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && es(n, t, i),
            (u = u.next);
        } while (u !== r);
      }
      on(e, t, n);
      break;
    case 1:
      if (
        !Ye &&
        (vr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          je(n, t, l);
        }
      on(e, t, n);
      break;
    case 21:
      on(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ye = (r = Ye) || n.memoizedState !== null), on(e, t, n), (Ye = r))
        : on(e, t, n);
      break;
    default:
      on(e, t, n);
  }
}
function nd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rg()),
      t.forEach(function (r) {
        var u = pg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(u, u));
      });
  }
}
function Rt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var u = n[r];
      try {
        var o = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Qe = l.stateNode), (At = !1);
              break e;
            case 3:
              (Qe = l.stateNode.containerInfo), (At = !0);
              break e;
            case 4:
              (Qe = l.stateNode.containerInfo), (At = !0);
              break e;
          }
          l = l.return;
        }
        if (Qe === null) throw Error(D(160));
        Gv(o, i, u), (Qe = null), (At = !1);
        var a = u.alternate;
        a !== null && (a.return = null), (u.return = null);
      } catch (s) {
        je(u, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Yv(t, e), (t = t.sibling);
}
function Yv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Rt(t, e), bt(e), r & 4)) {
        try {
          fu(3, e, e.return), Oi(3, e);
        } catch (w) {
          je(e, e.return, w);
        }
        try {
          fu(5, e, e.return);
        } catch (w) {
          je(e, e.return, w);
        }
      }
      break;
    case 1:
      Rt(t, e), bt(e), r & 512 && n !== null && vr(n, n.return);
      break;
    case 5:
      if (
        (Rt(t, e),
        bt(e),
        r & 512 && n !== null && vr(n, n.return),
        e.flags & 32)
      ) {
        var u = e.stateNode;
        try {
          yu(u, '');
        } catch (w) {
          je(e, e.return, w);
        }
      }
      if (r & 4 && ((u = e.stateNode), u != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && mp(u, o),
              Ca(l, i);
            var s = Ca(l, o);
            for (i = 0; i < a.length; i += 2) {
              var c = a[i],
                p = a[i + 1];
              c === 'style'
                ? Ep(u, p)
                : c === 'dangerouslySetInnerHTML'
                ? wp(u, p)
                : c === 'children'
                ? yu(u, p)
                : _s(u, c, p, s);
            }
            switch (l) {
              case 'input':
                Ea(u, o);
                break;
              case 'textarea':
                gp(u, o);
                break;
              case 'select':
                var d = u._wrapperState.wasMultiple;
                u._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? yr(u, !!o.multiple, y, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? yr(u, !!o.multiple, o.defaultValue, !0)
                      : yr(u, !!o.multiple, o.multiple ? [] : '', !1));
            }
            u[xu] = o;
          } catch (w) {
            je(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Rt(t, e), bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (u = e.stateNode), (o = e.memoizedProps);
        try {
          u.nodeValue = o;
        } catch (w) {
          je(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Rt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          wu(t.containerInfo);
        } catch (w) {
          je(e, e.return, w);
        }
      break;
    case 4:
      Rt(t, e), bt(e);
      break;
    case 13:
      Rt(t, e),
        bt(e),
        (u = e.child),
        u.flags & 8192 &&
          ((o = u.memoizedState !== null),
          (u.stateNode.isHidden = o),
          !o ||
            (u.alternate !== null && u.alternate.memoizedState !== null) ||
            (ec = Ie())),
        r & 4 && nd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ye = (s = Ye) || c), Rt(t, e), (Ye = s)) : Rt(t, e),
        bt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && (e.mode & 1) !== 0)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (p = V = c; V !== null; ) {
              switch (((d = V), (y = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fu(4, d, d.return);
                  break;
                case 1:
                  vr(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      je(r, n, w);
                    }
                  }
                  break;
                case 5:
                  vr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ud(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = d), (V = y)) : ud(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (u = p.stateNode),
                  s
                    ? ((o = u.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (l.style.display = _p('display', i)));
              } catch (w) {
                je(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = s ? '' : p.memoizedProps;
              } catch (w) {
                je(e, e.return, w);
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
      Rt(t, e), bt(e), r & 4 && nd(e);
      break;
    case 21:
      break;
    default:
      Rt(t, e), bt(e);
  }
}
function bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Kv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var u = r.stateNode;
          r.flags & 32 && (yu(u, ''), (r.flags &= -33));
          var o = td(e);
          rs(e, o, u);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = td(e);
          ns(e, l, i);
          break;
        default:
          throw Error(D(161));
      }
    } catch (a) {
      je(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function og(e, t, n) {
  (V = e), Xv(e);
}
function Xv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var u = V,
      o = u.child;
    if (u.tag === 22 && r) {
      var i = u.memoizedState !== null || co;
      if (!i) {
        var l = u.alternate,
          a = (l !== null && l.memoizedState !== null) || Ye;
        l = co;
        var s = Ye;
        if (((co = i), (Ye = a) && !s))
          for (V = u; V !== null; )
            (i = V),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? od(u)
                : a !== null
                ? ((a.return = i), (V = a))
                : od(u);
        for (; o !== null; ) (V = o), Xv(o), (o = o.sibling);
        (V = u), (co = l), (Ye = s);
      }
      rd(e);
    } else
      (u.subtreeFlags & 8772) !== 0 && o !== null
        ? ((o.return = u), (V = o))
        : rd(e);
  }
}
function rd(e) {
  for (; V !== null; ) {
    var t = V;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ye || Oi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ye)
                if (n === null) r.componentDidMount();
                else {
                  var u =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    u,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ff(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ff(t, i, n);
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
                    p !== null && wu(p);
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
              throw Error(D(163));
          }
        Ye || (t.flags & 512 && ts(t));
      } catch (d) {
        je(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function ud(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function od(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Oi(4, t);
          } catch (a) {
            je(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var u = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              je(t, u, a);
            }
          }
          var o = t.return;
          try {
            ts(t);
          } catch (a) {
            je(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ts(t);
          } catch (a) {
            je(t, i, a);
          }
      }
    } catch (a) {
      je(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (V = l);
      break;
    }
    V = t.return;
  }
}
var ig = Math.ceil,
  Zo = rn.ReactCurrentDispatcher,
  Zs = rn.ReactCurrentOwner,
  Pt = rn.ReactCurrentBatchConfig,
  ce = 0,
  qe = null,
  Me = null,
  Ve = 0,
  dt = 0,
  hr = jn(0),
  $e = 0,
  Au = null,
  Wn = 0,
  Ci = 0,
  Js = 0,
  du = null,
  nt = null,
  ec = 0,
  Ar = 1 / 0,
  Wt = null,
  Jo = !1,
  us = null,
  Sn = null,
  fo = !1,
  pn = null,
  ei = 0,
  pu = 0,
  os = null,
  To = -1,
  Ro = 0;
function Je() {
  return (ce & 6) !== 0 ? Ie() : To !== -1 ? To : (To = Ie());
}
function wn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (ce & 2) !== 0 && Ve !== 0
    ? Ve & -Ve
    : Q0.transition !== null
    ? (Ro === 0 && (Ro = Np()), Ro)
    : ((e = pe),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qp(e.type))),
      e);
}
function Nt(e, t, n, r) {
  if (50 < pu) throw ((pu = 0), (os = null), Error(D(185)));
  Fu(e, n, r),
    ((ce & 2) === 0 || e !== qe) &&
      (e === qe && ((ce & 2) === 0 && (Ci |= n), $e === 4 && fn(e, Ve)),
      lt(e, r),
      n === 1 &&
        ce === 0 &&
        (t.mode & 1) === 0 &&
        ((Ar = Ie() + 500), ki && An()));
}
function lt(e, t) {
  var n = e.callbackNode;
  Qm(e, t);
  var r = zo(e, e === qe ? Ve : 0);
  if (r === 0)
    n !== null && vf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && vf(n), t === 1))
      e.tag === 0 ? U0(id.bind(null, e)) : iv(id.bind(null, e)),
        b0(function () {
          (ce & 6) === 0 && An();
        }),
        (n = null);
    else {
      switch (Dp(r)) {
        case 1:
          n = Os;
          break;
        case 4:
          n = Ip;
          break;
        case 16:
          n = $o;
          break;
        case 536870912:
          n = Mp;
          break;
        default:
          n = $o;
      }
      n = oh(n, Zv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Zv(e, t) {
  if (((To = -1), (Ro = 0), (ce & 6) !== 0)) throw Error(D(327));
  var n = e.callbackNode;
  if (_r() && e.callbackNode !== n) return null;
  var r = zo(e, e === qe ? Ve : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ti(e, r);
  else {
    t = r;
    var u = ce;
    ce |= 2;
    var o = eh();
    (qe !== e || Ve !== t) && ((Wt = null), (Ar = Ie() + 500), qn(e, t));
    do
      try {
        sg();
        break;
      } catch (l) {
        Jv(e, l);
      }
    while (1);
    Ls(),
      (Zo.current = o),
      (ce = u),
      Me !== null ? (t = 0) : ((qe = null), (Ve = 0), (t = $e));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((u = Ia(e)), u !== 0 && ((r = u), (t = is(e, u)))), t === 1)
    )
      throw ((n = Au), qn(e, 0), fn(e, r), lt(e, Ie()), n);
    if (t === 6) fn(e, r);
    else {
      if (
        ((u = e.current.alternate),
        (r & 30) === 0 &&
          !lg(u) &&
          ((t = ti(e, r)),
          t === 2 && ((o = Ia(e)), o !== 0 && ((r = o), (t = is(e, o)))),
          t === 1))
      )
        throw ((n = Au), qn(e, 0), fn(e, r), lt(e, Ie()), n);
      switch (((e.finishedWork = u), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          Dn(e, nt, Wt);
          break;
        case 3:
          if (
            (fn(e, r), (r & 130023424) === r && ((t = ec + 500 - Ie()), 10 < t))
          ) {
            if (zo(e, 0) !== 0) break;
            if (((u = e.suspendedLanes), (u & r) !== r)) {
              Je(), (e.pingedLanes |= e.suspendedLanes & u);
              break;
            }
            e.timeoutHandle = Fa(Dn.bind(null, e, nt, Wt), t);
            break;
          }
          Dn(e, nt, Wt);
          break;
        case 4:
          if ((fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, u = -1; 0 < r; ) {
            var i = 31 - Mt(r);
            (o = 1 << i), (i = t[i]), i > u && (u = i), (r &= ~o);
          }
          if (
            ((r = u),
            (r = Ie() - r),
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
                : 1960 * ig(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fa(Dn.bind(null, e, nt, Wt), r);
            break;
          }
          Dn(e, nt, Wt);
          break;
        case 5:
          Dn(e, nt, Wt);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return lt(e, Ie()), e.callbackNode === n ? Zv.bind(null, e) : null;
}
function is(e, t) {
  var n = du;
  return (
    e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256),
    (e = ti(e, t)),
    e !== 2 && ((t = nt), (nt = n), t !== null && ls(t)),
    e
  );
}
function ls(e) {
  nt === null ? (nt = e) : nt.push.apply(nt, e);
}
function lg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var u = n[r],
            o = u.getSnapshot;
          u = u.value;
          try {
            if (!Dt(o(), u)) return !1;
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
function fn(e, t) {
  for (
    t &= ~Js,
      t &= ~Ci,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function id(e) {
  if ((ce & 6) !== 0) throw Error(D(327));
  _r();
  var t = zo(e, 0);
  if ((t & 1) === 0) return lt(e, Ie()), null;
  var n = ti(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ia(e);
    r !== 0 && ((t = r), (n = is(e, r)));
  }
  if (n === 1) throw ((n = Au), qn(e, 0), fn(e, t), lt(e, Ie()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dn(e, nt, Wt),
    lt(e, Ie()),
    null
  );
}
function tc(e, t) {
  var n = ce;
  ce |= 1;
  try {
    return e(t);
  } finally {
    (ce = n), ce === 0 && ((Ar = Ie() + 500), ki && An());
  }
}
function Hn(e) {
  pn !== null && pn.tag === 0 && (ce & 6) === 0 && _r();
  var t = ce;
  ce |= 1;
  var n = Pt.transition,
    r = pe;
  try {
    if (((Pt.transition = null), (pe = 1), e)) return e();
  } finally {
    (pe = r), (Pt.transition = n), (ce = t), (ce & 6) === 0 && An();
  }
}
function nc() {
  (dt = hr.current), we(hr);
}
function qn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), z0(n)), Me !== null))
    for (n = Me.return; n !== null; ) {
      var r = n;
      switch (($s(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Uo();
          break;
        case 3:
          Rr(), we(ot), we(Xe), Vs();
          break;
        case 5:
          Bs(r);
          break;
        case 4:
          Rr();
          break;
        case 13:
          we(xe);
          break;
        case 19:
          we(xe);
          break;
        case 10:
          Fs(r.type._context);
          break;
        case 22:
        case 23:
          nc();
      }
      n = n.return;
    }
  if (
    ((qe = e),
    (Me = e = _n(e.current, null)),
    (Ve = dt = t),
    ($e = 0),
    (Au = null),
    (Js = Ci = Wn = 0),
    (nt = du = null),
    bn !== null)
  ) {
    for (t = 0; t < bn.length; t++)
      if (((n = bn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var u = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = u), (r.next = i);
        }
        n.pending = r;
      }
    bn = null;
  }
  return e;
}
function Jv(e, t) {
  do {
    var n = Me;
    try {
      if ((Ls(), (xo.current = Xo), Yo)) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var u = r.queue;
          u !== null && (u.pending = null), (r = r.next);
        }
        Yo = !1;
      }
      if (
        ((Vn = 0),
        (Le = Ne = Ce = null),
        (cu = !1),
        (Tu = 0),
        (Zs.current = null),
        n === null || n.return === null)
      ) {
        ($e = 1), (Au = t), (Me = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = Ve),
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
          var y = Hf(i);
          if (y !== null) {
            (y.flags &= -257),
              Kf(y, i, l, o, t),
              y.mode & 1 && Wf(o, s, t),
              (t = y),
              (a = s);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else g.add(a);
            break e;
          } else {
            if ((t & 1) === 0) {
              Wf(o, s, t), rc();
              break e;
            }
            a = Error(D(426));
          }
        } else if (ke && l.mode & 1) {
          var C = Hf(i);
          if (C !== null) {
            (C.flags & 65536) === 0 && (C.flags |= 256),
              Kf(C, i, l, o, t),
              zs(jr(a, l));
            break e;
          }
        }
        (o = a = jr(a, l)),
          $e !== 4 && ($e = 2),
          du === null ? (du = [o]) : du.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = $v(o, a, t);
              Lf(o, h);
              break e;
            case 1:
              l = a;
              var f = o.type,
                v = o.stateNode;
              if (
                (o.flags & 128) === 0 &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (Sn === null || !Sn.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var m = zv(o, l, t);
                Lf(o, m);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      nh(n);
    } catch (_) {
      (t = _), Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function eh() {
  var e = Zo.current;
  return (Zo.current = Xo), e === null ? Xo : e;
}
function rc() {
  ($e === 0 || $e === 3 || $e === 2) && ($e = 4),
    qe === null ||
      ((Wn & 268435455) === 0 && (Ci & 268435455) === 0) ||
      fn(qe, Ve);
}
function ti(e, t) {
  var n = ce;
  ce |= 2;
  var r = eh();
  (qe !== e || Ve !== t) && ((Wt = null), qn(e, t));
  do
    try {
      ag();
      break;
    } catch (u) {
      Jv(e, u);
    }
  while (1);
  if ((Ls(), (ce = n), (Zo.current = r), Me !== null)) throw Error(D(261));
  return (qe = null), (Ve = 0), $e;
}
function ag() {
  for (; Me !== null; ) th(Me);
}
function sg() {
  for (; Me !== null && !Nm(); ) th(Me);
}
function th(e) {
  var t = uh(e.alternate, e, dt);
  (e.memoizedProps = e.pendingProps),
    t === null ? nh(e) : (Me = t),
    (Zs.current = null);
}
function nh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = tg(n, t, dt)), n !== null)) {
        Me = n;
        return;
      }
    } else {
      if (((n = ng(n, t)), n !== null)) {
        (n.flags &= 32767), (Me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        ($e = 6), (Me = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  $e === 0 && ($e = 5);
}
function Dn(e, t, n) {
  var r = pe,
    u = Pt.transition;
  try {
    (Pt.transition = null), (pe = 1), cg(e, t, n, r);
  } finally {
    (Pt.transition = u), (pe = r);
  }
  return null;
}
function cg(e, t, n, r) {
  do _r();
  while (pn !== null);
  if ((ce & 6) !== 0) throw Error(D(327));
  n = e.finishedWork;
  var u = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Bm(e, o),
    e === qe && ((Me = qe = null), (Ve = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      fo ||
      ((fo = !0),
      oh($o, function () {
        return _r(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || o)
  ) {
    (o = Pt.transition), (Pt.transition = null);
    var i = pe;
    pe = 1;
    var l = ce;
    (ce |= 4),
      (Zs.current = null),
      ug(e, n),
      Yv(n, e),
      j0(ba),
      (bo = !!za),
      (ba = za = null),
      (e.current = n),
      og(n),
      Dm(),
      (ce = l),
      (pe = i),
      (Pt.transition = o);
  } else e.current = n;
  if (
    (fo && ((fo = !1), (pn = e), (ei = u)),
    (o = e.pendingLanes),
    o === 0 && (Sn = null),
    bm(n.stateNode),
    lt(e, Ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (u = t[n]), r(u.value, { componentStack: u.stack, digest: u.digest });
  if (Jo) throw ((Jo = !1), (e = us), (us = null), e);
  return (
    (ei & 1) !== 0 && e.tag !== 0 && _r(),
    (o = e.pendingLanes),
    (o & 1) !== 0 ? (e === os ? pu++ : ((pu = 0), (os = e))) : (pu = 0),
    An(),
    null
  );
}
function _r() {
  if (pn !== null) {
    var e = Dp(ei),
      t = Pt.transition,
      n = pe;
    try {
      if (((Pt.transition = null), (pe = 16 > e ? 16 : e), pn === null))
        var r = !1;
      else {
        if (((e = pn), (pn = null), (ei = 0), (ce & 6) !== 0))
          throw Error(D(331));
        var u = ce;
        for (ce |= 4, V = e.current; V !== null; ) {
          var o = V,
            i = o.child;
          if ((V.flags & 16) !== 0) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var s = l[a];
                for (V = s; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fu(8, c, o);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (V = p);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        y = c.return;
                      if ((Hv(c), c === s)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = y), (V = d);
                        break;
                      }
                      V = y;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var C = w.sibling;
                    (w.sibling = null), (w = C);
                  } while (w !== null);
                }
              }
              V = o;
            }
          }
          if ((o.subtreeFlags & 2064) !== 0 && i !== null)
            (i.return = o), (V = i);
          else
            e: for (; V !== null; ) {
              if (((o = V), (o.flags & 2048) !== 0))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fu(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (V = h);
                break e;
              }
              V = o.return;
            }
        }
        var f = e.current;
        for (V = f; V !== null; ) {
          i = V;
          var v = i.child;
          if ((i.subtreeFlags & 2064) !== 0 && v !== null)
            (v.return = i), (V = v);
          else
            e: for (i = f; V !== null; ) {
              if (((l = V), (l.flags & 2048) !== 0))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oi(9, l);
                  }
                } catch (_) {
                  je(l, l.return, _);
                }
              if (l === i) {
                V = null;
                break e;
              }
              var m = l.sibling;
              if (m !== null) {
                (m.return = l.return), (V = m);
                break e;
              }
              V = l.return;
            }
        }
        if (
          ((ce = u), An(), qt && typeof qt.onPostCommitFiberRoot == 'function')
        )
          try {
            qt.onPostCommitFiberRoot(gi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (pe = n), (Pt.transition = t);
    }
  }
  return !1;
}
function ld(e, t, n) {
  (t = jr(n, t)),
    (t = $v(e, t, 1)),
    (e = gn(e, t, 1)),
    (t = Je()),
    e !== null && (Fu(e, 1, t), lt(e, t));
}
function je(e, t, n) {
  if (e.tag === 3) ld(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ld(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Sn === null || !Sn.has(r)))
        ) {
          (e = jr(n, e)),
            (e = zv(t, e, 1)),
            (t = gn(t, e, 1)),
            (e = Je()),
            t !== null && (Fu(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    qe === e &&
      (Ve & n) === n &&
      ($e === 4 || ($e === 3 && (Ve & 130023424) === Ve && 500 > Ie() - ec)
        ? qn(e, 0)
        : (Js |= n)),
    lt(e, t);
}
function rh(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = to), (to <<= 1), (to & 130023424) === 0 && (to = 4194304)));
  var n = Je();
  (e = en(e, t)), e !== null && (Fu(e, t, n), lt(e, n));
}
function dg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), rh(e, n);
}
function pg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        u = e.memoizedState;
      u !== null && (n = u.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  r !== null && r.delete(t), rh(e, n);
}
var uh;
uh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ot.current) ut = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (ut = !1), eg(e, t, n);
      ut = (e.flags & 131072) !== 0;
    }
  else (ut = !1), ke && (t.flags & 1048576) !== 0 && lv(t, Vo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Co(e, t), (e = t.pendingProps);
      var u = Or(t, Xe.current);
      wr(t, n), (u = Hs(null, t, r, e, u, n));
      var o = Ks();
      return (
        (t.flags |= 1),
        typeof u == 'object' &&
        u !== null &&
        typeof u.render == 'function' &&
        u.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            it(r) ? ((o = !0), Qo(t)) : (o = !1),
            (t.memoizedState =
              u.state !== null && u.state !== void 0 ? u.state : null),
            Us(t),
            (u.updater = Pi),
            (t.stateNode = u),
            (u._reactInternals = t),
            Ha(t, r, e, n),
            (t = Ya(null, t, r, !0, o, n)))
          : ((t.tag = 0), ke && o && Ds(t), Ze(null, t, u, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Co(e, t),
          (e = t.pendingProps),
          (u = r._init),
          (r = u(r._payload)),
          (t.type = r),
          (u = t.tag = hg(r)),
          (e = jt(r, e)),
          u)
        ) {
          case 0:
            t = Ga(null, t, r, e, n);
            break e;
          case 1:
            t = Xf(null, t, r, e, n);
            break e;
          case 11:
            t = Gf(null, t, r, e, n);
            break e;
          case 14:
            t = Yf(null, t, r, jt(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (u = t.pendingProps),
        (u = t.elementType === r ? u : jt(r, u)),
        Ga(e, t, r, u, n)
      );
    case 1:
      return (
        (r = t.type),
        (u = t.pendingProps),
        (u = t.elementType === r ? u : jt(r, u)),
        Xf(e, t, r, u, n)
      );
    case 3:
      e: {
        if ((qv(t), e === null)) throw Error(D(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (u = o.element),
          fv(e, t),
          Ko(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (u = jr(Error(D(423)), t)), (t = Zf(e, t, r, n, u));
            break e;
          } else if (r !== u) {
            (u = jr(Error(D(424)), t)), (t = Zf(e, t, r, n, u));
            break e;
          } else
            for (
              pt = mn(t.stateNode.containerInfo.firstChild),
                vt = t,
                ke = !0,
                It = null,
                n = hv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Cr(), r === u)) {
            t = tn(e, t, n);
            break e;
          }
          Ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        yv(t),
        e === null && Ba(t),
        (r = t.type),
        (u = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = u.children),
        La(r, u) ? (i = null) : o !== null && La(r, o) && (t.flags |= 32),
        Fv(e, t),
        Ze(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ba(t), null;
    case 13:
      return Uv(e, t, n);
    case 4:
      return (
        Qs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Tr(t, null, r, n)) : Ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (u = t.pendingProps),
        (u = t.elementType === r ? u : jt(r, u)),
        Gf(e, t, r, u, n)
      );
    case 7:
      return Ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (u = t.pendingProps),
          (o = t.memoizedProps),
          (i = u.value),
          ge(Wo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Dt(o.value, i)) {
            if (o.children === u.children && !ot.current) {
              t = tn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                i = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Xt(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Va(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(D(341));
                (i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  Va(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Ze(e, t, u.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (u = t.type),
        (r = t.pendingProps.children),
        wr(t, n),
        (u = xt(u)),
        (r = r(u)),
        (t.flags |= 1),
        Ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (u = jt(r, t.pendingProps)),
        (u = jt(r.type, u)),
        Yf(e, t, r, u, n)
      );
    case 15:
      return bv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (u = t.pendingProps),
        (u = t.elementType === r ? u : jt(r, u)),
        Co(e, t),
        (t.tag = 1),
        it(r) ? ((e = !0), Qo(t)) : (e = !1),
        wr(t, n),
        pv(t, r, u),
        Ha(t, r, u, n),
        Ya(null, t, r, !0, e, n)
      );
    case 19:
      return Qv(e, t, n);
    case 22:
      return Lv(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function oh(e, t) {
  return Ap(e, t);
}
function vg(e, t, n, r) {
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
function kt(e, t, n, r) {
  return new vg(e, t, n, r);
}
function uc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hg(e) {
  if (typeof e == 'function') return uc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ks)) return 11;
    if (e === Ps) return 14;
  }
  return 2;
}
function _n(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = kt(e.tag, t, e.key, e.mode)),
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
function jo(e, t, n, r, u, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) uc(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case or:
        return Un(n.children, u, o, t);
      case Es:
        (i = 8), (u |= 8);
        break;
      case ma:
        return (
          (e = kt(12, n, t, u | 2)), (e.elementType = ma), (e.lanes = o), e
        );
      case ga:
        return (e = kt(13, n, t, u)), (e.elementType = ga), (e.lanes = o), e;
      case Sa:
        return (e = kt(19, n, t, u)), (e.elementType = Sa), (e.lanes = o), e;
      case vp:
        return Ti(n, u, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case dp:
              i = 10;
              break e;
            case pp:
              i = 9;
              break e;
            case ks:
              i = 11;
              break e;
            case Ps:
              i = 14;
              break e;
            case an:
              (i = 16), (r = null);
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = kt(i, n, t, u)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Un(e, t, n, r) {
  return (e = kt(7, e, r, t)), (e.lanes = n), e;
}
function Ti(e, t, n, r) {
  return (
    (e = kt(22, e, r, t)),
    (e.elementType = vp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Hl(e, t, n) {
  return (e = kt(6, e, null, t)), (e.lanes = n), e;
}
function Kl(e, t, n) {
  return (
    (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function yg(e, t, n, r, u) {
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
    (this.eventTimes = Tl(0)),
    (this.expirationTimes = Tl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Tl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = u),
    (this.mutableSourceEagerHydrationData = null);
}
function oc(e, t, n, r, u, o, i, l, a) {
  return (
    (e = new yg(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = kt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Us(o),
    e
  );
}
function mg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ur,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ih(e) {
  if (!e) return On;
  e = e._reactInternals;
  e: {
    if (Gn(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (it(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (it(n)) return ov(e, n, t);
  }
  return t;
}
function lh(e, t, n, r, u, o, i, l, a) {
  return (
    (e = oc(n, r, !0, e, u, o, i, l, a)),
    (e.context = ih(null)),
    (n = e.current),
    (r = Je()),
    (u = wn(n)),
    (o = Xt(r, u)),
    (o.callback = t != null ? t : null),
    gn(n, o, u),
    (e.current.lanes = u),
    Fu(e, u, r),
    lt(e, r),
    e
  );
}
function Ri(e, t, n, r) {
  var u = t.current,
    o = Je(),
    i = wn(u);
  return (
    (n = ih(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gn(u, t, i)),
    e !== null && (Nt(e, u, i, o), Po(e, u, i)),
    i
  );
}
function ni(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ad(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ic(e, t) {
  ad(e, t), (e = e.alternate) && ad(e, t);
}
function gg() {
  return null;
}
var ah =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function lc(e) {
  this._internalRoot = e;
}
ji.prototype.render = lc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  Ri(e, t, null, null);
};
ji.prototype.unmount = lc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Hn(function () {
      Ri(null, e, null, null);
    }),
      (t[Jt] = null);
  }
};
function ji(e) {
  this._internalRoot = e;
}
ji.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
    cn.splice(n, 0, e), n === 0 && Fp(e);
  }
};
function ac(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ai(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function sd() {}
function Sg(e, t, n, r, u) {
  if (u) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var s = ni(i);
        o.call(s);
      };
    }
    var i = lh(t, r, e, 0, null, !1, !1, '', sd);
    return (
      (e._reactRootContainer = i),
      (e[Jt] = i.current),
      ku(e.nodeType === 8 ? e.parentNode : e),
      Hn(),
      i
    );
  }
  for (; (u = e.lastChild); ) e.removeChild(u);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var s = ni(a);
      l.call(s);
    };
  }
  var a = oc(e, 0, !1, null, null, !1, !1, '', sd);
  return (
    (e._reactRootContainer = a),
    (e[Jt] = a.current),
    ku(e.nodeType === 8 ? e.parentNode : e),
    Hn(function () {
      Ri(t, a, n, r);
    }),
    a
  );
}
function Ii(e, t, n, r, u) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof u == 'function') {
      var l = u;
      u = function () {
        var a = ni(i);
        l.call(a);
      };
    }
    Ri(t, i, e, u);
  } else i = Sg(n, t, e, u, r);
  return ni(i);
}
$p = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = nu(t.pendingLanes);
        n !== 0 &&
          (Cs(t, n | 1),
          lt(t, Ie()),
          (ce & 6) === 0 && ((Ar = Ie() + 500), An()));
      }
      break;
    case 13:
      Hn(function () {
        var r = en(e, 1);
        if (r !== null) {
          var u = Je();
          Nt(r, e, 1, u);
        }
      }),
        ic(e, 1);
  }
};
Ts = function (e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var n = Je();
      Nt(t, e, 134217728, n);
    }
    ic(e, 134217728);
  }
};
zp = function (e) {
  if (e.tag === 13) {
    var t = wn(e),
      n = en(e, t);
    if (n !== null) {
      var r = Je();
      Nt(n, e, t, r);
    }
    ic(e, t);
  }
};
bp = function () {
  return pe;
};
Lp = function (e, t) {
  var n = pe;
  try {
    return (pe = e), t();
  } finally {
    pe = n;
  }
};
Ra = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ea(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var u = Ei(r);
            if (!u) throw Error(D(90));
            yp(r), Ea(r, u);
          }
        }
      }
      break;
    case 'textarea':
      gp(e, n);
      break;
    case 'select':
      (t = n.value), t != null && yr(e, !!n.multiple, t, !1);
  }
};
xp = tc;
Op = Hn;
var wg = { usingClientEntryPoint: !1, Events: [Uu, sr, Ei, kp, Pp, tc] },
  Zr = {
    findFiberByHostInstance: zn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  _g = {
    bundleType: Zr.bundleType,
    version: Zr.version,
    rendererPackageName: Zr.rendererPackageName,
    rendererConfig: Zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zr.findFiberByHostInstance || gg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!po.isDisabled && po.supportsFiber)
    try {
      (gi = po.inject(_g)), (qt = po);
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wg;
mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ac(t)) throw Error(D(200));
  return mg(e, t, null, n);
};
mt.createRoot = function (e, t) {
  if (!ac(e)) throw Error(D(299));
  var n = !1,
    r = '',
    u = ah;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
    (t = oc(e, 1, !1, null, null, n, !1, r, u)),
    (e[Jt] = t.current),
    ku(e.nodeType === 8 ? e.parentNode : e),
    new lc(t)
  );
};
mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(D(188))
      : ((e = Object.keys(e).join(',')), Error(D(268, e)));
  return (e = Rp(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
  return Hn(e);
};
mt.hydrate = function (e, t, n) {
  if (!Ai(t)) throw Error(D(200));
  return Ii(null, e, t, !0, n);
};
mt.hydrateRoot = function (e, t, n) {
  if (!ac(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    u = !1,
    o = '',
    i = ah;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (u = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = lh(t, null, e, 1, n != null ? n : null, u, !1, o, i)),
    (e[Jt] = t.current),
    ku(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (u = n._getVersion),
        (u = u(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, u])
          : t.mutableSourceEagerHydrationData.push(n, u);
  return new ji(t);
};
mt.render = function (e, t, n) {
  if (!Ai(t)) throw Error(D(200));
  return Ii(null, e, t, !1, n);
};
mt.unmountComponentAtNode = function (e) {
  if (!Ai(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (Hn(function () {
        Ii(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Jt] = null);
        });
      }),
      !0)
    : !1;
};
mt.unstable_batchedUpdates = tc;
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ai(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return Ii(e, t, n, !1, r);
};
mt.version = '18.2.0-next-9e3b772b8-20220608';
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
  t(), (e.exports = mt);
})(mi);
function Eg(e) {
  e();
}
let sh = Eg;
const kg = e => (sh = e),
  Pg = () => sh,
  Cn = H.exports.createContext(null);
function ch() {
  return H.exports.useContext(Cn);
}
const xg = () => {
  throw new Error('uSES not initialized!');
};
let fh = xg;
const Og = e => {
    fh = e;
  },
  Cg = (e, t) => e === t;
function Tg(e = Cn) {
  const t = e === Cn ? ch : () => H.exports.useContext(e);
  return function (r, u = Cg) {
    const { store: o, subscription: i, getServerState: l } = t(),
      a = fh(i.addNestedSub, o.getState, l || o.getState, r, u);
    return H.exports.useDebugValue(a), a;
  };
}
const Rg = Tg();
var dh = { exports: {} },
  ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ue = typeof Symbol == 'function' && Symbol.for,
  sc = Ue ? Symbol.for('react.element') : 60103,
  cc = Ue ? Symbol.for('react.portal') : 60106,
  Mi = Ue ? Symbol.for('react.fragment') : 60107,
  Ni = Ue ? Symbol.for('react.strict_mode') : 60108,
  Di = Ue ? Symbol.for('react.profiler') : 60114,
  $i = Ue ? Symbol.for('react.provider') : 60109,
  zi = Ue ? Symbol.for('react.context') : 60110,
  fc = Ue ? Symbol.for('react.async_mode') : 60111,
  bi = Ue ? Symbol.for('react.concurrent_mode') : 60111,
  Li = Ue ? Symbol.for('react.forward_ref') : 60112,
  Fi = Ue ? Symbol.for('react.suspense') : 60113,
  jg = Ue ? Symbol.for('react.suspense_list') : 60120,
  qi = Ue ? Symbol.for('react.memo') : 60115,
  Ui = Ue ? Symbol.for('react.lazy') : 60116,
  Ag = Ue ? Symbol.for('react.block') : 60121,
  Ig = Ue ? Symbol.for('react.fundamental') : 60117,
  Mg = Ue ? Symbol.for('react.responder') : 60118,
  Ng = Ue ? Symbol.for('react.scope') : 60119;
function St(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case sc:
        switch (((e = e.type), e)) {
          case fc:
          case bi:
          case Mi:
          case Di:
          case Ni:
          case Fi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case zi:
              case Li:
              case Ui:
              case qi:
              case $i:
                return e;
              default:
                return t;
            }
        }
      case cc:
        return t;
    }
  }
}
function ph(e) {
  return St(e) === bi;
}
ve.AsyncMode = fc;
ve.ConcurrentMode = bi;
ve.ContextConsumer = zi;
ve.ContextProvider = $i;
ve.Element = sc;
ve.ForwardRef = Li;
ve.Fragment = Mi;
ve.Lazy = Ui;
ve.Memo = qi;
ve.Portal = cc;
ve.Profiler = Di;
ve.StrictMode = Ni;
ve.Suspense = Fi;
ve.isAsyncMode = function (e) {
  return ph(e) || St(e) === fc;
};
ve.isConcurrentMode = ph;
ve.isContextConsumer = function (e) {
  return St(e) === zi;
};
ve.isContextProvider = function (e) {
  return St(e) === $i;
};
ve.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === sc;
};
ve.isForwardRef = function (e) {
  return St(e) === Li;
};
ve.isFragment = function (e) {
  return St(e) === Mi;
};
ve.isLazy = function (e) {
  return St(e) === Ui;
};
ve.isMemo = function (e) {
  return St(e) === qi;
};
ve.isPortal = function (e) {
  return St(e) === cc;
};
ve.isProfiler = function (e) {
  return St(e) === Di;
};
ve.isStrictMode = function (e) {
  return St(e) === Ni;
};
ve.isSuspense = function (e) {
  return St(e) === Fi;
};
ve.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Mi ||
    e === bi ||
    e === Di ||
    e === Ni ||
    e === Fi ||
    e === jg ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ui ||
        e.$$typeof === qi ||
        e.$$typeof === $i ||
        e.$$typeof === zi ||
        e.$$typeof === Li ||
        e.$$typeof === Ig ||
        e.$$typeof === Mg ||
        e.$$typeof === Ng ||
        e.$$typeof === Ag))
  );
};
ve.typeOf = St;
(function (e) {
  e.exports = ve;
})(dh);
var vh = dh.exports,
  Dg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  $g = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  hh = {};
hh[vh.ForwardRef] = Dg;
hh[vh.Memo] = $g;
var zg = { exports: {} },
  he = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc = Symbol.for('react.element'),
  pc = Symbol.for('react.portal'),
  Qi = Symbol.for('react.fragment'),
  Bi = Symbol.for('react.strict_mode'),
  Vi = Symbol.for('react.profiler'),
  Wi = Symbol.for('react.provider'),
  Hi = Symbol.for('react.context'),
  bg = Symbol.for('react.server_context'),
  Ki = Symbol.for('react.forward_ref'),
  Gi = Symbol.for('react.suspense'),
  Yi = Symbol.for('react.suspense_list'),
  Xi = Symbol.for('react.memo'),
  Zi = Symbol.for('react.lazy'),
  Lg = Symbol.for('react.offscreen'),
  yh;
yh = Symbol.for('react.module.reference');
function Ct(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case dc:
        switch (((e = e.type), e)) {
          case Qi:
          case Vi:
          case Bi:
          case Gi:
          case Yi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case bg:
              case Hi:
              case Ki:
              case Zi:
              case Xi:
              case Wi:
                return e;
              default:
                return t;
            }
        }
      case pc:
        return t;
    }
  }
}
he.ContextConsumer = Hi;
he.ContextProvider = Wi;
he.Element = dc;
he.ForwardRef = Ki;
he.Fragment = Qi;
he.Lazy = Zi;
he.Memo = Xi;
he.Portal = pc;
he.Profiler = Vi;
he.StrictMode = Bi;
he.Suspense = Gi;
he.SuspenseList = Yi;
he.isAsyncMode = function () {
  return !1;
};
he.isConcurrentMode = function () {
  return !1;
};
he.isContextConsumer = function (e) {
  return Ct(e) === Hi;
};
he.isContextProvider = function (e) {
  return Ct(e) === Wi;
};
he.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === dc;
};
he.isForwardRef = function (e) {
  return Ct(e) === Ki;
};
he.isFragment = function (e) {
  return Ct(e) === Qi;
};
he.isLazy = function (e) {
  return Ct(e) === Zi;
};
he.isMemo = function (e) {
  return Ct(e) === Xi;
};
he.isPortal = function (e) {
  return Ct(e) === pc;
};
he.isProfiler = function (e) {
  return Ct(e) === Vi;
};
he.isStrictMode = function (e) {
  return Ct(e) === Bi;
};
he.isSuspense = function (e) {
  return Ct(e) === Gi;
};
he.isSuspenseList = function (e) {
  return Ct(e) === Yi;
};
he.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Qi ||
    e === Vi ||
    e === Bi ||
    e === Gi ||
    e === Yi ||
    e === Lg ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Zi ||
        e.$$typeof === Xi ||
        e.$$typeof === Wi ||
        e.$$typeof === Hi ||
        e.$$typeof === Ki ||
        e.$$typeof === yh ||
        e.getModuleId !== void 0))
  );
};
he.typeOf = Ct;
(function (e) {
  e.exports = he;
})(zg);
function Fg() {
  const e = Pg();
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
        u = t;
      for (; u; ) r.push(u), (u = u.next);
      return r;
    },
    subscribe(r) {
      let u = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !u ||
            t === null ||
            ((u = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const cd = { notify() {}, get: () => [] };
function qg(e, t) {
  let n,
    r = cd;
  function u(p) {
    return a(), r.subscribe(p);
  }
  function o() {
    r.notify();
  }
  function i() {
    c.onStateChange && c.onStateChange();
  }
  function l() {
    return Boolean(n);
  }
  function a() {
    n || ((n = t ? t.addNestedSub(i) : e.subscribe(i)), (r = Fg()));
  }
  function s() {
    n && (n(), (n = void 0), r.clear(), (r = cd));
  }
  const c = {
    addNestedSub: u,
    notifyNestedSubs: o,
    handleChangeWrapper: i,
    isSubscribed: l,
    trySubscribe: a,
    tryUnsubscribe: s,
    getListeners: () => r,
  };
  return c;
}
const Ug =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Qg = Ug ? H.exports.useLayoutEffect : H.exports.useEffect;
function fd(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ri(e, t) {
  if (fd(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let u = 0; u < n.length; u++)
    if (!Object.prototype.hasOwnProperty.call(t, n[u]) || !fd(e[n[u]], t[n[u]]))
      return !1;
  return !0;
}
function Bg({ store: e, context: t, children: n, serverState: r }) {
  const u = H.exports.useMemo(() => {
      const l = qg(e);
      return {
        store: e,
        subscription: l,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    o = H.exports.useMemo(() => e.getState(), [e]);
  return (
    Qg(() => {
      const { subscription: l } = u;
      return (
        (l.onStateChange = l.notifyNestedSubs),
        l.trySubscribe(),
        o !== e.getState() && l.notifyNestedSubs(),
        () => {
          l.tryUnsubscribe(), (l.onStateChange = void 0);
        }
      );
    }, [u, o]),
    Oe((t || Cn).Provider, { value: u, children: n })
  );
}
function mh(e = Cn) {
  const t = e === Cn ? ch : () => H.exports.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const gh = mh();
function Vg(e = Cn) {
  const t = e === Cn ? gh : mh(e);
  return function () {
    return t().dispatch;
  };
}
const Wg = Vg();
Og(ip.exports.useSyncExternalStoreWithSelector);
kg(mi.exports.unstable_batchedUpdates);
function Fe(e) {
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
            .map(function (u) {
              return "'" + u + "'";
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  );
}
function $t(e) {
  return !!e && !!e[ie];
}
function st(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var u = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return (
        u === Object ||
        (typeof u == 'function' && Function.toString.call(u) === t1)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Er] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Er]) ||
      Ji(e) ||
      el(e))
  );
}
function Hg(e) {
  return $t(e) || Fe(23, e), e[ie].t;
}
function nn(e, t, n) {
  n === void 0 && (n = !1),
    Tn(e) === 0
      ? (n ? Object.keys : kr)(e).forEach(function (r) {
          (n && typeof r == 'symbol') || t(r, e[r], e);
        })
      : e.forEach(function (r, u) {
          return t(u, r, e);
        });
}
function Tn(e) {
  var t = e[ie];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Ji(e)
    ? 2
    : el(e)
    ? 3
    : 0;
}
function En(e, t) {
  return Tn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ao(e, t) {
  return Tn(e) === 2 ? e.get(t) : e[t];
}
function Sh(e, t, n) {
  var r = Tn(e);
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function wh(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Ji(e) {
  return Jg && e instanceof Map;
}
function el(e) {
  return e1 && e instanceof Set;
}
function be(e) {
  return e.o || e.t;
}
function vc(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = kh(e);
  delete t[ie];
  for (var n = kr(t), r = 0; r < n.length; r++) {
    var u = n[r],
      o = t[u];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[u] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[u],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function tl(e, t) {
  return (
    t === void 0 && (t = !1),
    hc(e) ||
      $t(e) ||
      !st(e) ||
      (Tn(e) > 1 && (e.set = e.add = e.clear = e.delete = Kg),
      Object.freeze(e),
      t &&
        nn(
          e,
          function (n, r) {
            return tl(r, !0);
          },
          !0
        )),
    e
  );
}
function Kg() {
  Fe(2);
}
function hc(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e);
}
function Qt(e) {
  var t = ss[e];
  return t || Fe(18, e), t;
}
function yc(e, t) {
  ss[e] || (ss[e] = t);
}
function Iu() {
  return Nu;
}
function Gl(e, t) {
  t && (Qt('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function ui(e) {
  as(e), e.p.forEach(Gg), (e.p = null);
}
function as(e) {
  e === Nu && (Nu = e.l);
}
function dd(e) {
  return (Nu = { p: [], l: Nu, h: e, m: !0, _: 0 });
}
function Gg(e) {
  var t = e[ie];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function Yl(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.g || Qt('ES5').S(t, e, r),
    r
      ? (n[ie].P && (ui(t), Fe(4)),
        st(e) && ((e = oi(t, e)), t.l || ii(t, e)),
        t.u && Qt('Patches').M(n[ie].t, e, t.u, t.s))
      : (e = oi(t, n, [])),
    ui(t),
    t.u && t.v(t.u, t.s),
    e !== nl ? e : void 0
  );
}
function oi(e, t, n) {
  if (hc(t)) return t;
  var r = t[ie];
  if (!r)
    return (
      nn(
        t,
        function (o, i) {
          return pd(e, r, t, o, i, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return ii(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var u = r.i === 4 || r.i === 5 ? (r.o = vc(r.k)) : r.o;
    nn(r.i === 3 ? new Set(u) : u, function (o, i) {
      return pd(e, r, u, o, i, n);
    }),
      ii(e, u, !1),
      n && e.u && Qt('Patches').R(r, n, e.u, e.s);
  }
  return r.o;
}
function pd(e, t, n, r, u, o) {
  if ($t(u)) {
    var i = oi(e, u, o && t && t.i !== 3 && !En(t.D, r) ? o.concat(r) : void 0);
    if ((Sh(n, r, i), !$t(i))) return;
    e.m = !1;
  }
  if (st(u) && !hc(u)) {
    if (!e.h.F && e._ < 1) return;
    oi(e, u), (t && t.A.l) || ii(e, u);
  }
}
function ii(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && tl(t, n);
}
function Xl(e, t) {
  var n = e[ie];
  return (n ? be(n) : e)[t];
}
function vd(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function rt(e) {
  e.P || ((e.P = !0), e.l && rt(e.l));
}
function Zl(e) {
  e.o || (e.o = vc(e.t));
}
function Mu(e, t, n) {
  var r = Ji(t)
    ? Qt('MapSet').N(t, n)
    : el(t)
    ? Qt('MapSet').T(t, n)
    : e.g
    ? (function (u, o) {
        var i = Array.isArray(u),
          l = {
            i: i ? 1 : 0,
            A: o ? o.A : Iu(),
            P: !1,
            I: !1,
            D: {},
            l: o,
            t: u,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          a = l,
          s = Du;
        i && ((a = [l]), (s = uu));
        var c = Proxy.revocable(a, s),
          p = c.revoke,
          d = c.proxy;
        return (l.k = d), (l.j = p), d;
      })(t, n)
    : Qt('ES5').J(t, n);
  return (n ? n.A : Iu()).p.push(r), r;
}
function _h(e) {
  return (
    $t(e) || Fe(22, e),
    (function t(n) {
      if (!st(n)) return n;
      var r,
        u = n[ie],
        o = Tn(n);
      if (u) {
        if (!u.P && (u.i < 4 || !Qt('ES5').K(u))) return u.t;
        (u.I = !0), (r = hd(n, o)), (u.I = !1);
      } else r = hd(n, o);
      return (
        nn(r, function (i, l) {
          (u && Ao(u.t, i) === l) || Sh(r, i, t(l));
        }),
        o === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function hd(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return vc(e);
}
function mc() {
  function e(o, i) {
    var l = u[o];
    return (
      l
        ? (l.enumerable = i)
        : (u[o] = l =
            {
              configurable: !0,
              enumerable: i,
              get: function () {
                var a = this[ie];
                return Du.get(a, o);
              },
              set: function (a) {
                var s = this[ie];
                Du.set(s, o, a);
              },
            }),
      l
    );
  }
  function t(o) {
    for (var i = o.length - 1; i >= 0; i--) {
      var l = o[i][ie];
      if (!l.P)
        switch (l.i) {
          case 5:
            r(l) && rt(l);
            break;
          case 4:
            n(l) && rt(l);
        }
    }
  }
  function n(o) {
    for (var i = o.t, l = o.k, a = kr(l), s = a.length - 1; s >= 0; s--) {
      var c = a[s];
      if (c !== ie) {
        var p = i[c];
        if (p === void 0 && !En(i, c)) return !0;
        var d = l[c],
          y = d && d[ie];
        if (y ? y.t !== p : !wh(d, p)) return !0;
      }
    }
    var g = !!i[ie];
    return a.length !== kr(i).length + (g ? 0 : 1);
  }
  function r(o) {
    var i = o.k;
    if (i.length !== o.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(i, i.length - 1);
    if (l && !l.get) return !0;
    for (var a = 0; a < i.length; a++) if (!i.hasOwnProperty(a)) return !0;
    return !1;
  }
  var u = {};
  yc('ES5', {
    J: function (o, i) {
      var l = Array.isArray(o),
        a = (function (c, p) {
          if (c) {
            for (var d = Array(p.length), y = 0; y < p.length; y++)
              Object.defineProperty(d, '' + y, e(y, !0));
            return d;
          }
          var g = kh(p);
          delete g[ie];
          for (var w = kr(g), C = 0; C < w.length; C++) {
            var h = w[C];
            g[h] = e(h, c || !!g[h].enumerable);
          }
          return Object.create(Object.getPrototypeOf(p), g);
        })(l, o),
        s = {
          i: l ? 5 : 4,
          A: i ? i.A : Iu(),
          P: !1,
          I: !1,
          D: {},
          l: i,
          t: o,
          k: a,
          o: null,
          O: !1,
          C: !1,
        };
      return Object.defineProperty(a, ie, { value: s, writable: !0 }), a;
    },
    S: function (o, i, l) {
      l
        ? $t(i) && i[ie].A === o && t(o.p)
        : (o.u &&
            (function a(s) {
              if (s && typeof s == 'object') {
                var c = s[ie];
                if (c) {
                  var p = c.t,
                    d = c.k,
                    y = c.D,
                    g = c.i;
                  if (g === 4)
                    nn(d, function (v) {
                      v !== ie &&
                        (p[v] !== void 0 || En(p, v)
                          ? y[v] || a(d[v])
                          : ((y[v] = !0), rt(c)));
                    }),
                      nn(p, function (v) {
                        d[v] !== void 0 || En(d, v) || ((y[v] = !1), rt(c));
                      });
                  else if (g === 5) {
                    if ((r(c) && (rt(c), (y.length = !0)), d.length < p.length))
                      for (var w = d.length; w < p.length; w++) y[w] = !1;
                    else for (var C = p.length; C < d.length; C++) y[C] = !0;
                    for (
                      var h = Math.min(d.length, p.length), f = 0;
                      f < h;
                      f++
                    )
                      d.hasOwnProperty(f) || (y[f] = !0),
                        y[f] === void 0 && a(d[f]);
                  }
                }
              }
            })(o.p[0]),
          t(o.p));
    },
    K: function (o) {
      return o.i === 4 ? n(o) : r(o);
    },
  });
}
function gc() {
  function e(r) {
    if (!st(r)) return r;
    if (Array.isArray(r)) return r.map(e);
    if (Ji(r))
      return new Map(
        Array.from(r.entries()).map(function (i) {
          return [i[0], e(i[1])];
        })
      );
    if (el(r)) return new Set(Array.from(r).map(e));
    var u = Object.create(Object.getPrototypeOf(r));
    for (var o in r) u[o] = e(r[o]);
    return En(r, Er) && (u[Er] = r[Er]), u;
  }
  function t(r) {
    return $t(r) ? e(r) : r;
  }
  var n = 'add';
  yc('Patches', {
    $: function (r, u) {
      return (
        u.forEach(function (o) {
          for (var i = o.path, l = o.op, a = r, s = 0; s < i.length - 1; s++) {
            var c = Tn(a),
              p = '' + i[s];
            (c !== 0 && c !== 1) ||
              (p !== '__proto__' && p !== 'constructor') ||
              Fe(24),
              typeof a == 'function' && p === 'prototype' && Fe(24),
              typeof (a = Ao(a, p)) != 'object' && Fe(15, i.join('/'));
          }
          var d = Tn(a),
            y = e(o.value),
            g = i[i.length - 1];
          switch (l) {
            case 'replace':
              switch (d) {
                case 2:
                  return a.set(g, y);
                case 3:
                  Fe(16);
                default:
                  return (a[g] = y);
              }
            case n:
              switch (d) {
                case 1:
                  return g === '-' ? a.push(y) : a.splice(g, 0, y);
                case 2:
                  return a.set(g, y);
                case 3:
                  return a.add(y);
                default:
                  return (a[g] = y);
              }
            case 'remove':
              switch (d) {
                case 1:
                  return a.splice(g, 1);
                case 2:
                  return a.delete(g);
                case 3:
                  return a.delete(o.value);
                default:
                  return delete a[g];
              }
            default:
              Fe(17, l);
          }
        }),
        r
      );
    },
    R: function (r, u, o, i) {
      switch (r.i) {
        case 0:
        case 4:
        case 2:
          return (function (l, a, s, c) {
            var p = l.t,
              d = l.o;
            nn(l.D, function (y, g) {
              var w = Ao(p, y),
                C = Ao(d, y),
                h = g ? (En(p, y) ? 'replace' : n) : 'remove';
              if (w !== C || h !== 'replace') {
                var f = a.concat(y);
                s.push(
                  h === 'remove'
                    ? { op: h, path: f }
                    : { op: h, path: f, value: C }
                ),
                  c.push(
                    h === n
                      ? { op: 'remove', path: f }
                      : h === 'remove'
                      ? { op: n, path: f, value: t(w) }
                      : { op: 'replace', path: f, value: t(w) }
                  );
              }
            });
          })(r, u, o, i);
        case 5:
        case 1:
          return (function (l, a, s, c) {
            var p = l.t,
              d = l.D,
              y = l.o;
            if (y.length < p.length) {
              var g = [y, p];
              (p = g[0]), (y = g[1]);
              var w = [c, s];
              (s = w[0]), (c = w[1]);
            }
            for (var C = 0; C < p.length; C++)
              if (d[C] && y[C] !== p[C]) {
                var h = a.concat([C]);
                s.push({ op: 'replace', path: h, value: t(y[C]) }),
                  c.push({ op: 'replace', path: h, value: t(p[C]) });
              }
            for (var f = p.length; f < y.length; f++) {
              var v = a.concat([f]);
              s.push({ op: n, path: v, value: t(y[f]) });
            }
            p.length < y.length &&
              c.push({
                op: 'replace',
                path: a.concat(['length']),
                value: p.length,
              });
          })(r, u, o, i);
        case 3:
          return (function (l, a, s, c) {
            var p = l.t,
              d = l.o,
              y = 0;
            p.forEach(function (g) {
              if (!d.has(g)) {
                var w = a.concat([y]);
                s.push({ op: 'remove', path: w, value: g }),
                  c.unshift({ op: n, path: w, value: g });
              }
              y++;
            }),
              (y = 0),
              d.forEach(function (g) {
                if (!p.has(g)) {
                  var w = a.concat([y]);
                  s.push({ op: n, path: w, value: g }),
                    c.unshift({ op: 'remove', path: w, value: g });
                }
                y++;
              });
          })(r, u, o, i);
      }
    },
    M: function (r, u, o, i) {
      o.push({ op: 'replace', path: [], value: u === nl ? void 0 : u }),
        i.push({ op: 'replace', path: [], value: r });
    },
  });
}
function Eh() {
  function e(l, a) {
    function s() {
      this.constructor = l;
    }
    u(l, a), (l.prototype = ((s.prototype = a.prototype), new s()));
  }
  function t(l) {
    l.o || ((l.D = new Map()), (l.o = new Map(l.t)));
  }
  function n(l) {
    l.o ||
      ((l.o = new Set()),
      l.t.forEach(function (a) {
        if (st(a)) {
          var s = Mu(l.A.h, a, l);
          l.p.set(a, s), l.o.add(s);
        } else l.o.add(a);
      }));
  }
  function r(l) {
    l.O && Fe(3, JSON.stringify(be(l)));
  }
  var u = function (l, a) {
      return (u =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, c) {
            s.__proto__ = c;
          }) ||
        function (s, c) {
          for (var p in c) c.hasOwnProperty(p) && (s[p] = c[p]);
        })(l, a);
    },
    o = (function () {
      function l(s, c) {
        return (
          (this[ie] = {
            i: 2,
            l: c,
            A: c ? c.A : Iu(),
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
            return be(this[ie]).size;
          },
        }),
        (a.has = function (s) {
          return be(this[ie]).has(s);
        }),
        (a.set = function (s, c) {
          var p = this[ie];
          return (
            r(p),
            (be(p).has(s) && be(p).get(s) === c) ||
              (t(p), rt(p), p.D.set(s, !0), p.o.set(s, c), p.D.set(s, !0)),
            this
          );
        }),
        (a.delete = function (s) {
          if (!this.has(s)) return !1;
          var c = this[ie];
          return (
            r(c),
            t(c),
            rt(c),
            c.t.has(s) ? c.D.set(s, !1) : c.D.delete(s),
            c.o.delete(s),
            !0
          );
        }),
        (a.clear = function () {
          var s = this[ie];
          r(s),
            be(s).size &&
              (t(s),
              rt(s),
              (s.D = new Map()),
              nn(s.t, function (c) {
                s.D.set(c, !1);
              }),
              s.o.clear());
        }),
        (a.forEach = function (s, c) {
          var p = this;
          be(this[ie]).forEach(function (d, y) {
            s.call(c, p.get(y), y, p);
          });
        }),
        (a.get = function (s) {
          var c = this[ie];
          r(c);
          var p = be(c).get(s);
          if (c.I || !st(p) || p !== c.t.get(s)) return p;
          var d = Mu(c.A.h, p, c);
          return t(c), c.o.set(s, d), d;
        }),
        (a.keys = function () {
          return be(this[ie]).keys();
        }),
        (a.values = function () {
          var s,
            c = this,
            p = this.keys();
          return (
            ((s = {})[vo] = function () {
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
            ((s = {})[vo] = function () {
              return c.entries();
            }),
            (s.next = function () {
              var d = p.next();
              if (d.done) return d;
              var y = c.get(d.value);
              return { done: !1, value: [d.value, y] };
            }),
            s
          );
        }),
        (a[vo] = function () {
          return this.entries();
        }),
        l
      );
    })(),
    i = (function () {
      function l(s, c) {
        return (
          (this[ie] = {
            i: 3,
            l: c,
            A: c ? c.A : Iu(),
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
            return be(this[ie]).size;
          },
        }),
        (a.has = function (s) {
          var c = this[ie];
          return (
            r(c),
            c.o
              ? !!c.o.has(s) || !(!c.p.has(s) || !c.o.has(c.p.get(s)))
              : c.t.has(s)
          );
        }),
        (a.add = function (s) {
          var c = this[ie];
          return r(c), this.has(s) || (n(c), rt(c), c.o.add(s)), this;
        }),
        (a.delete = function (s) {
          if (!this.has(s)) return !1;
          var c = this[ie];
          return (
            r(c),
            n(c),
            rt(c),
            c.o.delete(s) || (!!c.p.has(s) && c.o.delete(c.p.get(s)))
          );
        }),
        (a.clear = function () {
          var s = this[ie];
          r(s), be(s).size && (n(s), rt(s), s.o.clear());
        }),
        (a.values = function () {
          var s = this[ie];
          return r(s), n(s), s.o.values();
        }),
        (a.entries = function () {
          var s = this[ie];
          return r(s), n(s), s.o.entries();
        }),
        (a.keys = function () {
          return this.values();
        }),
        (a[vo] = function () {
          return this.values();
        }),
        (a.forEach = function (s, c) {
          for (var p = this.values(), d = p.next(); !d.done; )
            s.call(c, d.value, d.value, this), (d = p.next());
        }),
        l
      );
    })();
  yc('MapSet', {
    N: function (l, a) {
      return new o(l, a);
    },
    T: function (l, a) {
      return new i(l, a);
    },
  });
}
function Yg() {
  mc(), Eh(), gc();
}
function Xg(e) {
  return e;
}
function Zg(e) {
  return e;
}
var yd,
  Nu,
  Sc = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  Jg = typeof Map < 'u',
  e1 = typeof Set < 'u',
  md = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  nl = Sc
    ? Symbol.for('immer-nothing')
    : (((yd = {})['immer-nothing'] = !0), yd),
  Er = Sc ? Symbol.for('immer-draftable') : '__$immer_draftable',
  ie = Sc ? Symbol.for('immer-state') : '__$immer_state',
  vo = (typeof Symbol < 'u' && Symbol.iterator) || '@@iterator',
  t1 = '' + Object.prototype.constructor,
  kr =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  kh =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        kr(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  ss = {},
  Du = {
    get: function (e, t) {
      if (t === ie) return e;
      var n = be(e);
      if (!En(n, t))
        return (function (u, o, i) {
          var l,
            a = vd(o, i);
          return a
            ? 'value' in a
              ? a.value
              : (l = a.get) === null || l === void 0
              ? void 0
              : l.call(u.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !st(r)
        ? r
        : r === Xl(e.t, t)
        ? (Zl(e), (e.o[t] = Mu(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in be(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(be(e));
    },
    set: function (e, t, n) {
      var r = vd(be(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var u = Xl(be(e), t),
          o = u == null ? void 0 : u[ie];
        if (o && o.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
        if (wh(n, u) && (n !== void 0 || En(e.t, t))) return !0;
        Zl(e), rt(e);
      }
      return (
        (e.o[t] === n && typeof n != 'number' && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        Xl(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), Zl(e), rt(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = be(e),
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
      Fe(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Fe(12);
    },
  },
  uu = {};
nn(Du, function (e, t) {
  uu[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (uu.deleteProperty = function (e, t) {
    return uu.set.call(this, e, t, void 0);
  }),
  (uu.set = function (e, t, n) {
    return Du.set.call(this, e[0], t, n, e[0]);
  });
var Ph = (function () {
    function e(n) {
      var r = this;
      (this.g = md),
        (this.F = !0),
        (this.produce = function (u, o, i) {
          if (typeof u == 'function' && typeof o != 'function') {
            var l = o;
            o = u;
            var a = r;
            return function (w) {
              var C = this;
              w === void 0 && (w = l);
              for (
                var h = arguments.length, f = Array(h > 1 ? h - 1 : 0), v = 1;
                v < h;
                v++
              )
                f[v - 1] = arguments[v];
              return a.produce(w, function (m) {
                var _;
                return (_ = o).call.apply(_, [C, m].concat(f));
              });
            };
          }
          var s;
          if (
            (typeof o != 'function' && Fe(6),
            i !== void 0 && typeof i != 'function' && Fe(7),
            st(u))
          ) {
            var c = dd(r),
              p = Mu(r, u, void 0),
              d = !0;
            try {
              (s = o(p)), (d = !1);
            } finally {
              d ? ui(c) : as(c);
            }
            return typeof Promise < 'u' && s instanceof Promise
              ? s.then(
                  function (w) {
                    return Gl(c, i), Yl(w, c);
                  },
                  function (w) {
                    throw (ui(c), w);
                  }
                )
              : (Gl(c, i), Yl(s, c));
          }
          if (!u || typeof u != 'object') {
            if (
              ((s = o(u)) === void 0 && (s = u),
              s === nl && (s = void 0),
              r.F && tl(s, !0),
              i)
            ) {
              var y = [],
                g = [];
              Qt('Patches').M(u, s, y, g), i(y, g);
            }
            return s;
          }
          Fe(21, u);
        }),
        (this.produceWithPatches = function (u, o) {
          if (typeof u == 'function')
            return function (s) {
              for (
                var c = arguments.length, p = Array(c > 1 ? c - 1 : 0), d = 1;
                d < c;
                d++
              )
                p[d - 1] = arguments[d];
              return r.produceWithPatches(s, function (y) {
                return u.apply(void 0, [y].concat(p));
              });
            };
          var i,
            l,
            a = r.produce(u, o, function (s, c) {
              (i = s), (l = c);
            });
          return typeof Promise < 'u' && a instanceof Promise
            ? a.then(function (s) {
                return [s, i, l];
              })
            : [a, i, l];
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        st(n) || Fe(8), $t(n) && (n = _h(n));
        var r = dd(this),
          u = Mu(this, n, void 0);
        return (u[ie].C = !0), as(r), u;
      }),
      (t.finishDraft = function (n, r) {
        var u = n && n[ie],
          o = u.A;
        return Gl(o, r), Yl(void 0, o);
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n;
      }),
      (t.setUseProxies = function (n) {
        n && !md && Fe(20), (this.g = n);
      }),
      (t.applyPatches = function (n, r) {
        var u;
        for (u = r.length - 1; u >= 0; u--) {
          var o = r[u];
          if (o.path.length === 0 && o.op === 'replace') {
            n = o.value;
            break;
          }
        }
        u > -1 && (r = r.slice(u + 1));
        var i = Qt('Patches').$;
        return $t(n)
          ? i(n, r)
          : this.produce(n, function (l) {
              return i(l, r);
            });
      }),
      e
    );
  })(),
  yt = new Ph(),
  Ir = yt.produce,
  xh = yt.produceWithPatches.bind(yt),
  n1 = yt.setAutoFreeze.bind(yt),
  r1 = yt.setUseProxies.bind(yt),
  Oh = yt.applyPatches.bind(yt),
  u1 = yt.createDraft.bind(yt),
  o1 = yt.finishDraft.bind(yt);
const i1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Ir,
      Immer: Ph,
      applyPatches: Oh,
      castDraft: Xg,
      castImmutable: Zg,
      createDraft: u1,
      current: _h,
      enableAllPlugins: Yg,
      enableES5: mc,
      enableMapSet: Eh,
      enablePatches: gc,
      finishDraft: o1,
      freeze: tl,
      immerable: Er,
      isDraft: $t,
      isDraftable: st,
      nothing: nl,
      original: Hg,
      produce: Ir,
      produceWithPatches: xh,
      setAutoFreeze: n1,
      setUseProxies: r1,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function l1(e, t, n) {
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
function gd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Sd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gd(Object(n), !0).forEach(function (r) {
          l1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : gd(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Be(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var wd = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  Jl = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  $u = {
    INIT: '@@redux/INIT' + Jl(),
    REPLACE: '@@redux/REPLACE' + Jl(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + Jl();
    },
  };
function a1(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function rl(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Be(0));
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(Be(1));
    return n(rl)(e, t);
  }
  if (typeof e != 'function') throw new Error(Be(2));
  var u = e,
    o = t,
    i = [],
    l = i,
    a = !1;
  function s() {
    l === i && (l = i.slice());
  }
  function c() {
    if (a) throw new Error(Be(3));
    return o;
  }
  function p(w) {
    if (typeof w != 'function') throw new Error(Be(4));
    if (a) throw new Error(Be(5));
    var C = !0;
    return (
      s(),
      l.push(w),
      function () {
        if (!!C) {
          if (a) throw new Error(Be(6));
          (C = !1), s();
          var f = l.indexOf(w);
          l.splice(f, 1), (i = null);
        }
      }
    );
  }
  function d(w) {
    if (!a1(w)) throw new Error(Be(7));
    if (typeof w.type > 'u') throw new Error(Be(8));
    if (a) throw new Error(Be(9));
    try {
      (a = !0), (o = u(o, w));
    } finally {
      a = !1;
    }
    for (var C = (i = l), h = 0; h < C.length; h++) {
      var f = C[h];
      f();
    }
    return w;
  }
  function y(w) {
    if (typeof w != 'function') throw new Error(Be(10));
    (u = w), d({ type: $u.REPLACE });
  }
  function g() {
    var w,
      C = p;
    return (
      (w = {
        subscribe: function (f) {
          if (typeof f != 'object' || f === null) throw new Error(Be(11));
          function v() {
            f.next && f.next(c());
          }
          v();
          var m = C(v);
          return { unsubscribe: m };
        },
      }),
      (w[wd] = function () {
        return this;
      }),
      w
    );
  }
  return (
    d({ type: $u.INIT }),
    (r = { dispatch: d, subscribe: p, getState: c, replaceReducer: y }),
    (r[wd] = g),
    r
  );
}
var s1 = rl;
function c1(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: $u.INIT });
    if (typeof r > 'u') throw new Error(Be(12));
    if (typeof n(void 0, { type: $u.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Be(13));
  });
}
function wc(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var u = t[r];
    typeof e[u] == 'function' && (n[u] = e[u]);
  }
  var o = Object.keys(n),
    i;
  try {
    c1(n);
  } catch (l) {
    i = l;
  }
  return function (a, s) {
    if ((a === void 0 && (a = {}), i)) throw i;
    for (var c = !1, p = {}, d = 0; d < o.length; d++) {
      var y = o[d],
        g = n[y],
        w = a[y],
        C = g(w, s);
      if (typeof C > 'u') throw (s && s.type, new Error(Be(14)));
      (p[y] = C), (c = c || C !== w);
    }
    return (c = c || o.length !== Object.keys(a).length), c ? p : a;
  };
}
function _d(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function f1(e, t) {
  if (typeof e == 'function') return _d(e, t);
  if (typeof e != 'object' || e === null) throw new Error(Be(16));
  var n = {};
  for (var r in e) {
    var u = e[r];
    typeof u == 'function' && (n[r] = _d(u, t));
  }
  return n;
}
function Mr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, u) {
        return function () {
          return r(u.apply(void 0, arguments));
        };
      });
}
function Ch() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var u = r.apply(void 0, arguments),
        o = function () {
          throw new Error(Be(15));
        },
        i = {
          getState: u.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        l = t.map(function (a) {
          return a(i);
        });
      return (
        (o = Mr.apply(void 0, l)(u.dispatch)),
        Sd(Sd({}, u), {}, { dispatch: o })
      );
    };
  };
}
const d1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      __DO_NOT_USE__ActionTypes: $u,
      applyMiddleware: Ch,
      bindActionCreators: f1,
      combineReducers: wc,
      compose: Mr,
      createStore: rl,
      legacy_createStore: s1,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
var li = 'NOT_FOUND';
function p1(e) {
  var t;
  return {
    get: function (r) {
      return t && e(t.key, r) ? t.value : li;
    },
    put: function (r, u) {
      t = { key: r, value: u };
    },
    getEntries: function () {
      return t ? [t] : [];
    },
    clear: function () {
      t = void 0;
    },
  };
}
function v1(e, t) {
  var n = [];
  function r(l) {
    var a = n.findIndex(function (c) {
      return t(l, c.key);
    });
    if (a > -1) {
      var s = n[a];
      return a > 0 && (n.splice(a, 1), n.unshift(s)), s.value;
    }
    return li;
  }
  function u(l, a) {
    r(l) === li && (n.unshift({ key: l, value: a }), n.length > e && n.pop());
  }
  function o() {
    return n;
  }
  function i() {
    n = [];
  }
  return { get: r, put: u, getEntries: o, clear: i };
}
var Th = function (t, n) {
  return t === n;
};
function h1(e) {
  return function (n, r) {
    if (n === null || r === null || n.length !== r.length) return !1;
    for (var u = n.length, o = 0; o < u; o++) if (!e(n[o], r[o])) return !1;
    return !0;
  };
}
function ai(e, t) {
  var n = typeof t == 'object' ? t : { equalityCheck: t },
    r = n.equalityCheck,
    u = r === void 0 ? Th : r,
    o = n.maxSize,
    i = o === void 0 ? 1 : o,
    l = n.resultEqualityCheck,
    a = h1(u),
    s = i === 1 ? p1(a) : v1(i, a);
  function c() {
    var p = s.get(arguments);
    if (p === li) {
      if (((p = e.apply(null, arguments)), l)) {
        var d = s.getEntries(),
          y = d.find(function (g) {
            return l(g.value, p);
          });
        y && (p = y.value);
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
function y1(e) {
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
function Rh(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var u = function () {
    for (var i = arguments.length, l = new Array(i), a = 0; a < i; a++)
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
    var y = p,
      g = y.memoizeOptions,
      w = g === void 0 ? n : g,
      C = Array.isArray(w) ? w : [w],
      h = y1(l),
      f = e.apply(
        void 0,
        [
          function () {
            return s++, d.apply(null, arguments);
          },
        ].concat(C)
      ),
      v = e(function () {
        for (var _ = [], E = h.length, P = 0; P < E; P++)
          _.push(h[P].apply(null, arguments));
        return (c = f.apply(null, _)), c;
      });
    return (
      Object.assign(v, {
        resultFunc: d,
        memoizedResultFunc: f,
        dependencies: h,
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
      v
    );
  };
  return u;
}
var Yt = Rh(ai),
  m1 = function (t, n) {
    if ((n === void 0 && (n = Yt), typeof t != 'object'))
      throw new Error(
        'createStructuredSelector expects first argument to be an object ' +
          ('where each property is a selector, instead received a ' + typeof t)
      );
    var r = Object.keys(t),
      u = n(
        r.map(function (o) {
          return t[o];
        }),
        function () {
          for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
            i[l] = arguments[l];
          return i.reduce(function (a, s, c) {
            return (a[r[c]] = s), a;
          }, {});
        }
      );
    return u;
  };
const g1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      defaultMemoize: ai,
      defaultEqualityCheck: Th,
      createSelectorCreator: Rh,
      createSelector: Yt,
      createStructuredSelector: m1,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function jh(e) {
  var t = function (r) {
    var u = r.dispatch,
      o = r.getState;
    return function (i) {
      return function (l) {
        return typeof l == 'function' ? l(u, o, e) : i(l);
      };
    };
  };
  return t;
}
var Ah = jh();
Ah.withExtraArgument = jh;
const cs = Ah,
  S1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: cs },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
var w1 =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, u) {
                r.__proto__ = u;
              }) ||
            function (r, u) {
              for (var o in u)
                Object.prototype.hasOwnProperty.call(u, o) && (r[o] = u[o]);
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
  _1 =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        u,
        o,
        i;
      return (
        (i = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == 'function' &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
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
              u &&
                (o =
                  s[0] & 2
                    ? u.return
                    : s[0]
                    ? u.throw || ((o = u.return) && o.call(u), 0)
                    : u.next) &&
                !(o = o.call(u, s[1])).done)
            )
              return o;
            switch (((u = 0), o && (s = [s[0] & 2, o.value]), s[0])) {
              case 0:
              case 1:
                o = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (u = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = s);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(s);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (u = 0);
          } finally {
            r = o = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  si =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, u = e.length; n < r; n++, u++) e[u] = t[n];
      return e;
    },
  E1 = Object.defineProperty,
  k1 = Object.defineProperties,
  P1 = Object.getOwnPropertyDescriptors,
  Ed = Object.getOwnPropertySymbols,
  x1 = Object.prototype.hasOwnProperty,
  O1 = Object.prototype.propertyIsEnumerable,
  kd = function (e, t, n) {
    return t in e
      ? E1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  kn = function (e, t) {
    for (var n in t || (t = {})) x1.call(t, n) && kd(e, n, t[n]);
    if (Ed)
      for (var r = 0, u = Ed(t); r < u.length; r++) {
        var n = u[r];
        O1.call(t, n) && kd(e, n, t[n]);
      }
    return e;
  },
  ea = function (e, t) {
    return k1(e, P1(t));
  },
  C1 = function (e, t, n) {
    return new Promise(function (r, u) {
      var o = function (a) {
          try {
            l(n.next(a));
          } catch (s) {
            u(s);
          }
        },
        i = function (a) {
          try {
            l(n.throw(a));
          } catch (s) {
            u(s);
          }
        },
        l = function (a) {
          return a.done ? r(a.value) : Promise.resolve(a.value).then(o, i);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  T1 =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? Mr
              : Mr.apply(null, arguments);
        };
function Bu(e) {
  if (typeof e != 'object' || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var R1 = (function (e) {
  w1(t, e);
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    var u = e.apply(this, n) || this;
    return Object.setPrototypeOf(u, t.prototype), u;
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
        ? new (t.bind.apply(t, si([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, si([void 0], n.concat(this))))();
    }),
    t
  );
})(Array);
function fs(e) {
  return st(e) ? Ir(e, function () {}) : e;
}
function j1(e) {
  return typeof e == 'boolean';
}
function A1() {
  return function (t) {
    return I1(t);
  };
}
function I1(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new R1();
  return (
    n && (j1(n) ? r.push(cs) : r.push(cs.withExtraArgument(n.extraArgument))), r
  );
}
var M1 = !0;
function N1(e) {
  var t = A1(),
    n = e || {},
    r = n.reducer,
    u = r === void 0 ? void 0 : r,
    o = n.middleware,
    i = o === void 0 ? t() : o,
    l = n.devTools,
    a = l === void 0 ? !0 : l,
    s = n.preloadedState,
    c = s === void 0 ? void 0 : s,
    p = n.enhancers,
    d = p === void 0 ? void 0 : p,
    y;
  if (typeof u == 'function') y = u;
  else if (Bu(u)) y = wc(u);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var g = i;
  typeof g == 'function' && (g = g(t));
  var w = Ch.apply(void 0, g),
    C = Mr;
  a && (C = T1(kn({ trace: !M1 }, typeof a == 'object' && a)));
  var h = [w];
  Array.isArray(d) ? (h = si([w], d)) : typeof d == 'function' && (h = d(h));
  var f = C.apply(void 0, h);
  return rl(y, c, f);
}
function at(e, t) {
  function n() {
    for (var r = [], u = 0; u < arguments.length; u++) r[u] = arguments[u];
    if (t) {
      var o = t.apply(void 0, r);
      if (!o) throw new Error('prepareAction did not return an object');
      return kn(
        kn({ type: e, payload: o.payload }, 'meta' in o && { meta: o.meta }),
        'error' in o && { error: o.error }
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
function Ih(e) {
  var t = {},
    n = [],
    r,
    u = {
      addCase: function (o, i) {
        var l = typeof o == 'string' ? o : o.type;
        if (l in t)
          throw new Error(
            'addCase cannot be called with two reducers for the same action type'
          );
        return (t[l] = i), u;
      },
      addMatcher: function (o, i) {
        return n.push({ matcher: o, reducer: i }), u;
      },
      addDefaultCase: function (o) {
        return (r = o), u;
      },
    };
  return e(u), [t, n, r];
}
function D1(e) {
  return typeof e == 'function';
}
function $1(e, t, n, r) {
  n === void 0 && (n = []);
  var u = typeof t == 'function' ? Ih(t) : [t, n, r],
    o = u[0],
    i = u[1],
    l = u[2],
    a;
  if (D1(e))
    a = function () {
      return fs(e());
    };
  else {
    var s = fs(e);
    a = function () {
      return s;
    };
  }
  function c(p, d) {
    p === void 0 && (p = a());
    var y = si(
      [o[d.type]],
      i
        .filter(function (g) {
          var w = g.matcher;
          return w(d);
        })
        .map(function (g) {
          var w = g.reducer;
          return w;
        })
    );
    return (
      y.filter(function (g) {
        return !!g;
      }).length === 0 && (y = [l]),
      y.reduce(function (g, w) {
        if (w)
          if ($t(g)) {
            var C = g,
              h = w(C, d);
            return h === void 0 ? g : h;
          } else {
            if (st(g))
              return Ir(g, function (f) {
                return w(f, d);
              });
            var h = w(g, d);
            if (h === void 0) {
              if (g === null) return g;
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              );
            }
            return h;
          }
        return g;
      }, p)
    );
  }
  return (c.getInitialState = a), c;
}
function z1(e, t) {
  return e + '/' + t;
}
function Jr(e) {
  var t = e.name;
  if (!t) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var n =
      typeof e.initialState == 'function' ? e.initialState : fs(e.initialState),
    r = e.reducers || {},
    u = Object.keys(r),
    o = {},
    i = {},
    l = {};
  u.forEach(function (c) {
    var p = r[c],
      d = z1(t, c),
      y,
      g;
    'reducer' in p ? ((y = p.reducer), (g = p.prepare)) : (y = p),
      (o[c] = y),
      (i[d] = y),
      (l[c] = g ? at(d, g) : at(d));
  });
  function a() {
    var c =
        typeof e.extraReducers == 'function'
          ? Ih(e.extraReducers)
          : [e.extraReducers],
      p = c[0],
      d = p === void 0 ? {} : p,
      y = c[1],
      g = y === void 0 ? [] : y,
      w = c[2],
      C = w === void 0 ? void 0 : w,
      h = kn(kn({}, d), i);
    return $1(n, h, g, C);
  }
  var s;
  return {
    name: t,
    reducer: function (c, p) {
      return s || (s = a()), s(c, p);
    },
    actions: l,
    caseReducers: o,
    getInitialState: function () {
      return s || (s = a()), s.getInitialState();
    },
  };
}
var b1 = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  Mh = function (e) {
    e === void 0 && (e = 21);
    for (var t = '', n = e; n--; ) t += b1[(Math.random() * 64) | 0];
    return t;
  },
  L1 = ['name', 'message', 'stack', 'code'],
  ta = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Pd = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  F1 = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, n = 0, r = L1; n < r.length; n++) {
        var u = r[n];
        typeof e[u] == 'string' && (t[u] = e[u]);
      }
      return t;
    }
    return { message: String(e) };
  };
function xd(e, t, n) {
  var r = at(e + '/fulfilled', function (a, s, c, p) {
      return {
        payload: a,
        meta: ea(kn({}, p || {}), {
          arg: c,
          requestId: s,
          requestStatus: 'fulfilled',
        }),
      };
    }),
    u = at(e + '/pending', function (a, s, c) {
      return {
        payload: void 0,
        meta: ea(kn({}, c || {}), {
          arg: s,
          requestId: a,
          requestStatus: 'pending',
        }),
      };
    }),
    o = at(e + '/rejected', function (a, s, c, p, d) {
      return {
        payload: p,
        error: ((n && n.serializeError) || F1)(a || 'Rejected'),
        meta: ea(kn({}, d || {}), {
          arg: c,
          requestId: s,
          rejectedWithValue: !!p,
          requestStatus: 'rejected',
          aborted: (a == null ? void 0 : a.name) === 'AbortError',
          condition: (a == null ? void 0 : a.name) === 'ConditionError',
        }),
      };
    }),
    i =
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
      var d = n != null && n.idGenerator ? n.idGenerator(a) : Mh(),
        y = new i(),
        g,
        w = new Promise(function (v, m) {
          return y.signal.addEventListener('abort', function () {
            return m({ name: 'AbortError', message: g || 'Aborted' });
          });
        }),
        C = !1;
      function h(v) {
        C && ((g = v), y.abort());
      }
      var f = (function () {
        return C1(this, null, function () {
          var v, m, _, E, P, x;
          return _1(this, function (R) {
            switch (R.label) {
              case 0:
                return (
                  R.trys.push([0, 4, , 5]),
                  (E =
                    (v = n == null ? void 0 : n.condition) == null
                      ? void 0
                      : v.call(n, a, { getState: c, extra: p })),
                  U1(E) ? [4, E] : [3, 2]
                );
              case 1:
                (E = R.sent()), (R.label = 2);
              case 2:
                if (E === !1)
                  throw {
                    name: 'ConditionError',
                    message:
                      'Aborted due to condition callback returning false.',
                  };
                return (
                  (C = !0),
                  s(
                    u(
                      d,
                      a,
                      (m = n == null ? void 0 : n.getPendingMeta) == null
                        ? void 0
                        : m.call(
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
                          signal: y.signal,
                          rejectWithValue: function (T, M) {
                            return new ta(T, M);
                          },
                          fulfillWithValue: function (T, M) {
                            return new Pd(T, M);
                          },
                        })
                      ).then(function (T) {
                        if (T instanceof ta) throw T;
                        return T instanceof Pd
                          ? r(T.payload, d, a, T.meta)
                          : r(T, d, a);
                      }),
                    ]),
                  ]
                );
              case 3:
                return (_ = R.sent()), [3, 5];
              case 4:
                return (
                  (P = R.sent()),
                  (_ =
                    P instanceof ta
                      ? o(null, d, a, P.payload, P.meta)
                      : o(P, d, a)),
                  [3, 5]
                );
              case 5:
                return (
                  (x =
                    n &&
                    !n.dispatchConditionRejection &&
                    o.match(_) &&
                    _.meta.condition),
                  x || s(_),
                  [2, _]
                );
            }
          });
        });
      })();
      return Object.assign(f, {
        abort: h,
        requestId: d,
        arg: a,
        unwrap: function () {
          return f.then(q1);
        },
      });
    };
  }
  return Object.assign(l, {
    pending: u,
    rejected: o,
    fulfilled: r,
    typePrefix: e,
  });
}
function q1(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function U1(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function';
}
var Q1 = function (e) {
    return e && typeof e.match == 'function';
  },
  Nh = function (e, t) {
    return Q1(e) ? e.match(t) : e(t);
  };
function zr() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.some(function (r) {
      return Nh(r, n);
    });
  };
}
function vu() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.every(function (r) {
      return Nh(r, n);
    });
  };
}
function ul(e, t) {
  if (!e || !e.meta) return !1;
  var n = typeof e.meta.requestId == 'string',
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function Vu(e) {
  return (
    typeof e[0] == 'function' &&
    'pending' in e[0] &&
    'fulfilled' in e[0] &&
    'rejected' in e[0]
  );
}
function _c() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ul(n, ['pending']);
      }
    : Vu(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.pending;
          }),
          u = zr.apply(void 0, r);
        return u(n);
      }
    : _c()(e[0]);
}
function zu() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ul(n, ['rejected']);
      }
    : Vu(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.rejected;
          }),
          u = zr.apply(void 0, r);
        return u(n);
      }
    : zu()(e[0]);
}
function ol() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = function (r) {
    return r && r.meta && r.meta.rejectedWithValue;
  };
  return e.length === 0
    ? function (r) {
        var u = vu(zu.apply(void 0, e), n);
        return u(r);
      }
    : Vu(e)
    ? function (r) {
        var u = vu(zu.apply(void 0, e), n);
        return u(r);
      }
    : ol()(e[0]);
}
function Yn() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ul(n, ['fulfilled']);
      }
    : Vu(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.fulfilled;
          }),
          u = zr.apply(void 0, r);
        return u(n);
      }
    : Yn()(e[0]);
}
function ds() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ul(n, ['pending', 'fulfilled', 'rejected']);
      }
    : Vu(e)
    ? function (n) {
        for (var r = [], u = 0, o = e; u < o.length; u++) {
          var i = o[u];
          r.push(i.pending, i.rejected, i.fulfilled);
        }
        var l = zr.apply(void 0, r);
        return l(n);
      }
    : ds()(e[0]);
}
var Ec = 'listenerMiddleware';
at(Ec + '/add');
at(Ec + '/removeAll');
at(Ec + '/remove');
mc();
var Wu = { exports: {} },
  Dh = {};
const nr = pi(i1),
  na = pi(d1),
  Od = pi(g1),
  B1 = pi(S1);
(function (e) {
  var t,
    n =
      (er && er.__extends) ||
      ((t = function (S, k) {
        return (
          (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (O, A) {
                O.__proto__ = A;
              }) ||
            function (O, A) {
              for (var I in A)
                Object.prototype.hasOwnProperty.call(A, I) && (O[I] = A[I]);
            }),
          t(S, k)
        );
      }),
      function (S, k) {
        if (typeof k != 'function' && k !== null)
          throw new TypeError(
            'Class extends value ' + String(k) + ' is not a constructor or null'
          );
        function O() {
          this.constructor = S;
        }
        t(S, k),
          (S.prototype =
            k === null
              ? Object.create(k)
              : ((O.prototype = k.prototype), new O()));
      }),
    r =
      (er && er.__generator) ||
      function (S, k) {
        var O,
          A,
          I,
          Q,
          Y = {
            label: 0,
            sent: function () {
              if (1 & I[0]) throw I[1];
              return I[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (Q = { next: L(0), throw: L(1), return: L(2) }),
          typeof Symbol == 'function' &&
            (Q[Symbol.iterator] = function () {
              return this;
            }),
          Q
        );
        function L(ue) {
          return function (F) {
            return (function (N) {
              if (O) throw new TypeError('Generator is already executing.');
              for (; Y; )
                try {
                  if (
                    ((O = 1),
                    A &&
                      (I =
                        2 & N[0]
                          ? A.return
                          : N[0]
                          ? A.throw || ((I = A.return) && I.call(A), 0)
                          : A.next) &&
                      !(I = I.call(A, N[1])).done)
                  )
                    return I;
                  switch (((A = 0), I && (N = [2 & N[0], I.value]), N[0])) {
                    case 0:
                    case 1:
                      I = N;
                      break;
                    case 4:
                      return Y.label++, { value: N[1], done: !1 };
                    case 5:
                      Y.label++, (A = N[1]), (N = [0]);
                      continue;
                    case 7:
                      (N = Y.ops.pop()), Y.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (I = (I = Y.trys).length > 0 && I[I.length - 1]) ||
                          (N[0] !== 6 && N[0] !== 2)
                        )
                      ) {
                        Y = 0;
                        continue;
                      }
                      if (N[0] === 3 && (!I || (N[1] > I[0] && N[1] < I[3]))) {
                        Y.label = N[1];
                        break;
                      }
                      if (N[0] === 6 && Y.label < I[1]) {
                        (Y.label = I[1]), (I = N);
                        break;
                      }
                      if (I && Y.label < I[2]) {
                        (Y.label = I[2]), Y.ops.push(N);
                        break;
                      }
                      I[2] && Y.ops.pop(), Y.trys.pop();
                      continue;
                  }
                  N = k.call(S, Y);
                } catch (b) {
                  (N = [6, b]), (A = 0);
                } finally {
                  O = I = 0;
                }
              if (5 & N[0]) throw N[1];
              return { value: N[0] ? N[1] : void 0, done: !0 };
            })([ue, F]);
          };
        }
      },
    u =
      (er && er.__spreadArray) ||
      function (S, k) {
        for (var O = 0, A = k.length, I = S.length; O < A; O++, I++)
          S[I] = k[O];
        return S;
      },
    o = Object.create,
    i = Object.defineProperty,
    l = Object.defineProperties,
    a = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyDescriptors,
    c = Object.getOwnPropertyNames,
    p = Object.getOwnPropertySymbols,
    d = Object.getPrototypeOf,
    y = Object.prototype.hasOwnProperty,
    g = Object.prototype.propertyIsEnumerable,
    w = function (S, k, O) {
      return k in S
        ? i(S, k, { enumerable: !0, configurable: !0, writable: !0, value: O })
        : (S[k] = O);
    },
    C = function (S, k) {
      for (var O in k || (k = {})) y.call(k, O) && w(S, O, k[O]);
      if (p)
        for (var A = 0, I = p(k); A < I.length; A++)
          g.call(k, (O = I[A])) && w(S, O, k[O]);
      return S;
    },
    h = function (S, k) {
      return l(S, s(k));
    },
    f = function (S) {
      return i(S, '__esModule', { value: !0 });
    },
    v = function (S, k, O) {
      if ((k && typeof k == 'object') || typeof k == 'function')
        for (
          var A = function (Y) {
              y.call(S, Y) ||
                Y === 'default' ||
                i(S, Y, {
                  get: function () {
                    return k[Y];
                  },
                  enumerable: !(O = a(k, Y)) || O.enumerable,
                });
            },
            I = 0,
            Q = c(k);
          I < Q.length;
          I++
        )
          A(Q[I]);
      return S;
    },
    m = function (S) {
      return v(
        f(
          i(
            S != null ? o(d(S)) : {},
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
    _ = function (S, k, O) {
      return new Promise(function (A, I) {
        var Q = function (ue) {
            try {
              L(O.next(ue));
            } catch (F) {
              I(F);
            }
          },
          Y = function (ue) {
            try {
              L(O.throw(ue));
            } catch (F) {
              I(F);
            }
          },
          L = function (ue) {
            return ue.done ? A(ue.value) : Promise.resolve(ue.value).then(Q, Y);
          };
        L((O = O.apply(S, k)).next());
      });
    };
  f(e),
    (function (S, k) {
      for (var O in k) i(S, O, { get: k[O], enumerable: !0 });
    })(e, {
      MiddlewareArray: function () {
        return j;
      },
      TaskAbortError: function () {
        return Qr;
      },
      addListener: function () {
        return Qc;
      },
      clearAllListeners: function () {
        return Bc;
      },
      configureStore: function () {
        return ze;
      },
      createAction: function () {
        return Re;
      },
      createAsyncThunk: function () {
        return Jh;
      },
      createDraftSafeSelector: function () {
        return M;
      },
      createEntityAdapter: function () {
        return Xh;
      },
      createImmutableStateInvariantMiddleware: function () {
        return oe;
      },
      createListenerMiddleware: function () {
        return ry;
      },
      createNextState: function () {
        return P.default;
      },
      createReducer: function () {
        return ct;
      },
      createSelector: function () {
        return x.createSelector;
      },
      createSerializableStateInvariantMiddleware: function () {
        return Pe;
      },
      createSlice: function () {
        return wt;
      },
      current: function () {
        return P.current;
      },
      findNonSerializableValue: function () {
        return le;
      },
      freeze: function () {
        return P.freeze;
      },
      getDefaultMiddleware: function () {
        return _e;
      },
      getType: function () {
        return br;
      },
      isAllOf: function () {
        return Ic;
      },
      isAnyOf: function () {
        return qr;
      },
      isAsyncThunkAction: function () {
        return $c;
      },
      isDraft: function () {
        return P.isDraft;
      },
      isFulfilled: function () {
        return Dc;
      },
      isImmutableDefault: function () {
        return W;
      },
      isPending: function () {
        return Mc;
      },
      isPlain: function () {
        return ne;
      },
      isPlainObject: function () {
        return Z;
      },
      isRejected: function () {
        return dl;
      },
      isRejectedWithValue: function () {
        return Nc;
      },
      miniSerializeError: function () {
        return Rc;
      },
      nanoid: function () {
        return cl;
      },
      original: function () {
        return P.original;
      },
      removeListener: function () {
        return Vc;
      },
      unwrapResult: function () {
        return jc;
      },
    });
  var E = m(nr);
  v(e, m(na));
  var P = m(nr),
    x = m(Od),
    R = m(nr),
    T = m(Od),
    M = function () {
      for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
      var O = T.createSelector.apply(void 0, S),
        A = function (I) {
          for (var Q = [], Y = 1; Y < arguments.length; Y++)
            Q[Y - 1] = arguments[Y];
          return O.apply(
            void 0,
            u([(0, R.isDraft)(I) ? (0, R.current)(I) : I], Q)
          );
        };
      return A;
    },
    $ = m(na),
    U = m(na),
    ee =
      typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : function () {
            if (arguments.length !== 0)
              return typeof arguments[0] == 'object'
                ? U.compose
                : U.compose.apply(null, arguments);
          };
  function Z(S) {
    if (typeof S != 'object' || S === null) return !1;
    var k = Object.getPrototypeOf(S);
    if (k === null) return !0;
    for (var O = k; Object.getPrototypeOf(O) !== null; )
      O = Object.getPrototypeOf(O);
    return k === O;
  }
  var te = m(B1),
    J = m(nr),
    j = (function (S) {
      function k() {
        for (var O = [], A = 0; A < arguments.length; A++) O[A] = arguments[A];
        var I = S.apply(this, O) || this;
        return Object.setPrototypeOf(I, k.prototype), I;
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
          for (var O = [], A = 0; A < arguments.length; A++)
            O[A] = arguments[A];
          return S.prototype.concat.apply(this, O);
        }),
        (k.prototype.prepend = function () {
          for (var O = [], A = 0; A < arguments.length; A++)
            O[A] = arguments[A];
          return O.length === 1 && Array.isArray(O[0])
            ? new (k.bind.apply(k, u([void 0], O[0].concat(this))))()
            : new (k.bind.apply(k, u([void 0], O.concat(this))))();
        }),
        k
      );
    })(Array);
  function z(S) {
    return (0, J.isDraftable)(S) ? (0, J.default)(S, function () {}) : S;
  }
  function W(S) {
    return typeof S != 'object' || S == null || Object.isFrozen(S);
  }
  function oe(S) {
    return function () {
      return function (k) {
        return function (O) {
          return k(O);
        };
      };
    };
  }
  function ne(S) {
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
  function le(S, k, O, A, I) {
    var Q;
    if (
      (k === void 0 && (k = ''),
      O === void 0 && (O = ne),
      I === void 0 && (I = []),
      !O(S))
    )
      return { keyPath: k || '<root>', value: S };
    if (typeof S != 'object' || S === null) return !1;
    for (
      var Y = A != null ? A(S) : Object.entries(S),
        L = I.length > 0,
        ue = 0,
        F = Y;
      ue < F.length;
      ue++
    ) {
      var N = F[ue],
        b = N[0],
        q = N[1],
        X = k ? k + '.' + b : b;
      if (!(L && I.indexOf(X) >= 0)) {
        if (!O(q)) return { keyPath: X, value: q };
        if (typeof q == 'object' && (Q = le(q, X, O, A, I))) return Q;
      }
    }
    return !1;
  }
  function Pe(S) {
    return function () {
      return function (k) {
        return function (O) {
          return k(O);
        };
      };
    };
  }
  function _e(S) {
    S === void 0 && (S = {});
    var k = S.thunk,
      O = k === void 0 || k,
      A = new j();
    return (
      O &&
        A.push(
          typeof O == 'boolean'
            ? te.default
            : te.default.withExtraArgument(O.extraArgument)
        ),
      A
    );
  }
  function ze(S) {
    var k,
      O = function (se) {
        return _e(se);
      },
      A = S || {},
      I = A.reducer,
      Q = I === void 0 ? void 0 : I,
      Y = A.middleware,
      L = Y === void 0 ? O() : Y,
      ue = A.devTools,
      F = ue === void 0 || ue,
      N = A.preloadedState,
      b = N === void 0 ? void 0 : N,
      q = A.enhancers,
      X = q === void 0 ? void 0 : q;
    if (typeof Q == 'function') k = Q;
    else {
      if (!Z(Q))
        throw new Error(
          '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
        );
      k = (0, $.combineReducers)(Q);
    }
    var K = L;
    typeof K == 'function' && (K = K(O));
    var re = $.applyMiddleware.apply(void 0, K),
      B = $.compose;
    F && (B = ee(C({ trace: !1 }, typeof F == 'object' && F)));
    var G = [re];
    Array.isArray(X) ? (G = u([re], X)) : typeof X == 'function' && (G = X(G));
    var fe = B.apply(void 0, G);
    return (0, $.createStore)(k, b, fe);
  }
  function Re(S, k) {
    function O() {
      for (var A = [], I = 0; I < arguments.length; I++) A[I] = arguments[I];
      if (k) {
        var Q = k.apply(void 0, A);
        if (!Q) throw new Error('prepareAction did not return an object');
        return C(
          C({ type: S, payload: Q.payload }, 'meta' in Q && { meta: Q.meta }),
          'error' in Q && { error: Q.error }
        );
      }
      return { type: S, payload: A[0] };
    }
    return (
      (O.toString = function () {
        return '' + S;
      }),
      (O.type = S),
      (O.match = function (A) {
        return A.type === S;
      }),
      O
    );
  }
  function Xn(S) {
    return ['type', 'payload', 'error', 'meta'].indexOf(S) > -1;
  }
  function br(S) {
    return '' + S;
  }
  var In = m(nr);
  function Lr(S) {
    var k,
      O = {},
      A = [],
      I = {
        addCase: function (Q, Y) {
          var L = typeof Q == 'string' ? Q : Q.type;
          if (L in O)
            throw new Error(
              'addCase cannot be called with two reducers for the same action type'
            );
          return (O[L] = Y), I;
        },
        addMatcher: function (Q, Y) {
          return A.push({ matcher: Q, reducer: Y }), I;
        },
        addDefaultCase: function (Q) {
          return (k = Q), I;
        },
      };
    return S(I), [O, A, k];
  }
  function ct(S, k, O, A) {
    O === void 0 && (O = []);
    var I,
      Q = typeof k == 'function' ? Lr(k) : [k, O, A],
      Y = Q[0],
      L = Q[1],
      ue = Q[2];
    if (typeof S == 'function')
      I = function () {
        return z(S());
      };
    else {
      var F = z(S);
      I = function () {
        return F;
      };
    }
    function N(b, q) {
      b === void 0 && (b = I());
      var X = u(
        [Y[q.type]],
        L.filter(function (K) {
          return (0, K.matcher)(q);
        }).map(function (K) {
          return K.reducer;
        })
      );
      return (
        X.filter(function (K) {
          return !!K;
        }).length === 0 && (X = [ue]),
        X.reduce(function (K, re) {
          if (re) {
            var B;
            if ((0, In.isDraft)(K)) return (B = re(K, q)) === void 0 ? K : B;
            if ((0, In.isDraftable)(K))
              return (0, In.default)(K, function (G) {
                return re(G, q);
              });
            if ((B = re(K, q)) === void 0) {
              if (K === null) return K;
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              );
            }
            return B;
          }
          return K;
        }, b)
      );
    }
    return (N.getInitialState = I), N;
  }
  function wt(S) {
    var k = S.name;
    if (!k) throw new Error('`name` is a required option for createSlice');
    var O,
      A =
        typeof S.initialState == 'function'
          ? S.initialState
          : z(S.initialState),
      I = S.reducers || {},
      Q = Object.keys(I),
      Y = {},
      L = {},
      ue = {};
    function F() {
      var N =
          typeof S.extraReducers == 'function'
            ? Lr(S.extraReducers)
            : [S.extraReducers],
        b = N[0],
        q = N[1],
        X = q === void 0 ? [] : q,
        K = N[2],
        re = K === void 0 ? void 0 : K,
        B = C(C({}, b === void 0 ? {} : b), L);
      return ct(A, B, X, re);
    }
    return (
      Q.forEach(function (N) {
        var b,
          q,
          X = I[N],
          K = k + '/' + N;
        'reducer' in X ? ((b = X.reducer), (q = X.prepare)) : (b = X),
          (Y[N] = b),
          (L[K] = b),
          (ue[N] = q ? Re(K, q) : Re(K));
      }),
      {
        name: k,
        reducer: function (N, b) {
          return O || (O = F()), O(N, b);
        },
        actions: ue,
        caseReducers: Y,
        getInitialState: function () {
          return O || (O = F()), O.getInitialState();
        },
      }
    );
  }
  var xc = m(nr);
  function Ae(S) {
    return function (k, O) {
      var A = function (I) {
        var Q;
        Z((Q = O)) && typeof Q.type == 'string' && Object.keys(Q).every(Xn)
          ? S(O.payload, I)
          : S(O, I);
      };
      return (0, xc.isDraft)(k) ? (A(k), k) : (0, xc.default)(k, A);
    };
  }
  function Fr(S, k) {
    return k(S);
  }
  function Mn(S) {
    return Array.isArray(S) || (S = Object.values(S)), S;
  }
  function Oc(S, k, O) {
    for (var A = [], I = [], Q = 0, Y = (S = Mn(S)); Q < Y.length; Q++) {
      var L = Y[Q],
        ue = Fr(L, k);
      ue in O.entities ? I.push({ id: ue, changes: L }) : A.push(L);
    }
    return [A, I];
  }
  function Cc(S) {
    function k(F, N) {
      var b = Fr(F, S);
      b in N.entities || (N.ids.push(b), (N.entities[b] = F));
    }
    function O(F, N) {
      for (var b = 0, q = (F = Mn(F)); b < q.length; b++) k(q[b], N);
    }
    function A(F, N) {
      var b = Fr(F, S);
      b in N.entities || N.ids.push(b), (N.entities[b] = F);
    }
    function I(F, N) {
      var b = !1;
      F.forEach(function (q) {
        q in N.entities && (delete N.entities[q], (b = !0));
      }),
        b &&
          (N.ids = N.ids.filter(function (q) {
            return q in N.entities;
          }));
    }
    function Q(F, N) {
      var b = {},
        q = {};
      if (
        (F.forEach(function (K) {
          K.id in N.entities &&
            (q[K.id] = {
              id: K.id,
              changes: C(C({}, q[K.id] ? q[K.id].changes : null), K.changes),
            });
        }),
        (F = Object.values(q)).length > 0)
      ) {
        var X =
          F.filter(function (K) {
            return (function (re, B, G) {
              var fe = Object.assign({}, G.entities[B.id], B.changes),
                se = Fr(fe, S),
                ye = se !== B.id;
              return (
                ye && ((re[B.id] = se), delete G.entities[B.id]),
                (G.entities[se] = fe),
                ye
              );
            })(b, K, N);
          }).length > 0;
        X && (N.ids = Object.keys(N.entities));
      }
    }
    function Y(F, N) {
      var b = Oc(F, S, N),
        q = b[0];
      Q(b[1], N), O(q, N);
    }
    return {
      removeAll:
        ((L = function (F) {
          Object.assign(F, { ids: [], entities: {} });
        }),
        (ue = Ae(function (F, N) {
          return L(N);
        })),
        function (F) {
          return ue(F, void 0);
        }),
      addOne: Ae(k),
      addMany: Ae(O),
      setOne: Ae(A),
      setMany: Ae(function (F, N) {
        for (var b = 0, q = (F = Mn(F)); b < q.length; b++) A(q[b], N);
      }),
      setAll: Ae(function (F, N) {
        (F = Mn(F)), (N.ids = []), (N.entities = {}), O(F, N);
      }),
      updateOne: Ae(function (F, N) {
        return Q([F], N);
      }),
      updateMany: Ae(Q),
      upsertOne: Ae(function (F, N) {
        return Y([F], N);
      }),
      upsertMany: Ae(Y),
      removeOne: Ae(function (F, N) {
        return I([F], N);
      }),
      removeMany: Ae(I),
    };
    var L, ue;
  }
  function Xh(S) {
    S === void 0 && (S = {});
    var k = C(
        {
          sortComparer: !1,
          selectId: function (L) {
            return L.id;
          },
        },
        S
      ),
      O = k.selectId,
      A = k.sortComparer,
      I = {
        getInitialState: function (L) {
          return (
            L === void 0 && (L = {}),
            Object.assign({ ids: [], entities: {} }, L)
          );
        },
      },
      Q = {
        getSelectors: function (L) {
          var ue = function (re) {
              return re.ids;
            },
            F = function (re) {
              return re.entities;
            },
            N = M(ue, F, function (re, B) {
              return re.map(function (G) {
                return B[G];
              });
            }),
            b = function (re, B) {
              return B;
            },
            q = function (re, B) {
              return re[B];
            },
            X = M(ue, function (re) {
              return re.length;
            });
          if (!L)
            return {
              selectIds: ue,
              selectEntities: F,
              selectAll: N,
              selectTotal: X,
              selectById: M(F, b, q),
            };
          var K = M(L, F);
          return {
            selectIds: M(L, ue),
            selectEntities: K,
            selectAll: M(L, N),
            selectTotal: M(L, X),
            selectById: M(K, b, q),
          };
        },
      },
      Y = A
        ? (function (L, ue) {
            var F = Cc(L);
            function N(B, G) {
              var fe = (B = Mn(B)).filter(function (se) {
                return !(Fr(se, L) in G.entities);
              });
              fe.length !== 0 && K(fe, G);
            }
            function b(B, G) {
              (B = Mn(B)).length !== 0 && K(B, G);
            }
            function q(B, G) {
              for (var fe = !1, se = 0, ye = B; se < ye.length; se++) {
                var de = ye[se],
                  me = G.entities[de.id];
                if (me) {
                  (fe = !0), Object.assign(me, de.changes);
                  var ft = L(me);
                  de.id !== ft &&
                    (delete G.entities[de.id], (G.entities[ft] = me));
                }
              }
              fe && re(G);
            }
            function X(B, G) {
              var fe = Oc(B, L, G),
                se = fe[0];
              q(fe[1], G), N(se, G);
            }
            function K(B, G) {
              B.forEach(function (fe) {
                G.entities[L(fe)] = fe;
              }),
                re(G);
            }
            function re(B) {
              var G = Object.values(B.entities);
              G.sort(ue);
              var fe = G.map(L);
              (function (se, ye) {
                if (se.length !== ye.length) return !1;
                for (var de = 0; de < se.length && de < ye.length; de++)
                  if (se[de] !== ye[de]) return !1;
                return !0;
              })(B.ids, fe) || (B.ids = fe);
            }
            return {
              removeOne: F.removeOne,
              removeMany: F.removeMany,
              removeAll: F.removeAll,
              addOne: Ae(function (B, G) {
                return N([B], G);
              }),
              updateOne: Ae(function (B, G) {
                return q([B], G);
              }),
              upsertOne: Ae(function (B, G) {
                return X([B], G);
              }),
              setOne: Ae(function (B, G) {
                return b([B], G);
              }),
              setMany: Ae(b),
              setAll: Ae(function (B, G) {
                (B = Mn(B)), (G.entities = {}), (G.ids = []), N(B, G);
              }),
              addMany: Ae(N),
              updateMany: Ae(q),
              upsertMany: Ae(X),
            };
          })(O, A)
        : Cc(O);
    return C(C(C({ selectId: O, sortComparer: A }, I), Q), Y);
  }
  var cl = function (S) {
      S === void 0 && (S = 21);
      for (var k = '', O = S; O--; )
        k += 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'[
          (64 * Math.random()) | 0
        ];
      return k;
    },
    Zh = ['name', 'message', 'stack', 'code'],
    fl = function (S, k) {
      (this.payload = S), (this.meta = k);
    },
    Tc = function (S, k) {
      (this.payload = S), (this.meta = k);
    },
    Rc = function (S) {
      if (typeof S == 'object' && S !== null) {
        for (var k = {}, O = 0, A = Zh; O < A.length; O++) {
          var I = A[O];
          typeof S[I] == 'string' && (k[I] = S[I]);
        }
        return k;
      }
      return { message: String(S) };
    };
  function Jh(S, k, O) {
    var A = Re(S + '/fulfilled', function (L, ue, F, N) {
        return {
          payload: L,
          meta: h(C({}, N || {}), {
            arg: F,
            requestId: ue,
            requestStatus: 'fulfilled',
          }),
        };
      }),
      I = Re(S + '/pending', function (L, ue, F) {
        return {
          payload: void 0,
          meta: h(C({}, F || {}), {
            arg: ue,
            requestId: L,
            requestStatus: 'pending',
          }),
        };
      }),
      Q = Re(S + '/rejected', function (L, ue, F, N, b) {
        return {
          payload: N,
          error: ((O && O.serializeError) || Rc)(L || 'Rejected'),
          meta: h(C({}, b || {}), {
            arg: F,
            requestId: ue,
            rejectedWithValue: !!N,
            requestStatus: 'rejected',
            aborted: (L == null ? void 0 : L.name) === 'AbortError',
            condition: (L == null ? void 0 : L.name) === 'ConditionError',
          }),
        };
      }),
      Y =
        typeof AbortController < 'u'
          ? AbortController
          : (function () {
              function L() {
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
              return (L.prototype.abort = function () {}), L;
            })();
    return Object.assign(
      function (L) {
        return function (ue, F, N) {
          var b,
            q = O != null && O.idGenerator ? O.idGenerator(L) : cl(),
            X = new Y(),
            K = new Promise(function (G, fe) {
              return X.signal.addEventListener('abort', function () {
                return fe({ name: 'AbortError', message: b || 'Aborted' });
              });
            }),
            re = !1,
            B = (function () {
              return _(this, null, function () {
                var G, fe, se, ye, de;
                return r(this, function (me) {
                  switch (me.label) {
                    case 0:
                      return (
                        me.trys.push([0, 4, , 5]),
                        (ft = ye =
                          (G = O == null ? void 0 : O.condition) == null
                            ? void 0
                            : G.call(O, L, { getState: F, extra: N })) ===
                          null ||
                        typeof ft != 'object' ||
                        typeof ft.then != 'function'
                          ? [3, 2]
                          : [4, ye]
                      );
                    case 1:
                      (ye = me.sent()), (me.label = 2);
                    case 2:
                      if (ye === !1)
                        throw {
                          name: 'ConditionError',
                          message:
                            'Aborted due to condition callback returning false.',
                        };
                      return (
                        (re = !0),
                        ue(
                          I(
                            q,
                            L,
                            (fe = O == null ? void 0 : O.getPendingMeta) == null
                              ? void 0
                              : fe.call(
                                  O,
                                  { requestId: q, arg: L },
                                  { getState: F, extra: N }
                                )
                          )
                        ),
                        [
                          4,
                          Promise.race([
                            K,
                            Promise.resolve(
                              k(L, {
                                dispatch: ue,
                                getState: F,
                                extra: N,
                                requestId: q,
                                signal: X.signal,
                                rejectWithValue: function (He, un) {
                                  return new fl(He, un);
                                },
                                fulfillWithValue: function (He, un) {
                                  return new Tc(He, un);
                                },
                              })
                            ).then(function (He) {
                              if (He instanceof fl) throw He;
                              return He instanceof Tc
                                ? A(He.payload, q, L, He.meta)
                                : A(He, q, L);
                            }),
                          ]),
                        ]
                      );
                    case 3:
                      return (se = me.sent()), [3, 5];
                    case 4:
                      return (
                        (de = me.sent()),
                        (se =
                          de instanceof fl
                            ? Q(null, q, L, de.payload, de.meta)
                            : Q(de, q, L)),
                        [3, 5]
                      );
                    case 5:
                      return (
                        (O &&
                          !O.dispatchConditionRejection &&
                          Q.match(se) &&
                          se.meta.condition) ||
                          ue(se),
                        [2, se]
                      );
                  }
                  var ft;
                });
              });
            })();
          return Object.assign(B, {
            abort: function (G) {
              re && ((b = G), X.abort());
            },
            requestId: q,
            arg: L,
            unwrap: function () {
              return B.then(jc);
            },
          });
        };
      },
      { pending: I, rejected: Q, fulfilled: A, typePrefix: S }
    );
  }
  function jc(S) {
    if (S.meta && S.meta.rejectedWithValue) throw S.payload;
    if (S.error) throw S.error;
    return S.payload;
  }
  var Ac = function (S, k) {
    return (O = S) && typeof O.match == 'function' ? S.match(k) : S(k);
    var O;
  };
  function qr() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return function (O) {
      return S.some(function (A) {
        return Ac(A, O);
      });
    };
  }
  function Ic() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return function (O) {
      return S.every(function (A) {
        return Ac(A, O);
      });
    };
  }
  function Hu(S, k) {
    if (!S || !S.meta) return !1;
    var O = typeof S.meta.requestId == 'string',
      A = k.indexOf(S.meta.requestStatus) > -1;
    return O && A;
  }
  function Ur(S) {
    return (
      typeof S[0] == 'function' &&
      'pending' in S[0] &&
      'fulfilled' in S[0] &&
      'rejected' in S[0]
    );
  }
  function Mc() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (O) {
          return Hu(O, ['pending']);
        }
      : Ur(S)
      ? function (O) {
          var A = S.map(function (I) {
            return I.pending;
          });
          return qr.apply(void 0, A)(O);
        }
      : Mc()(S[0]);
  }
  function dl() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (O) {
          return Hu(O, ['rejected']);
        }
      : Ur(S)
      ? function (O) {
          var A = S.map(function (I) {
            return I.rejected;
          });
          return qr.apply(void 0, A)(O);
        }
      : dl()(S[0]);
  }
  function Nc() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    var O = function (A) {
      return A && A.meta && A.meta.rejectedWithValue;
    };
    return S.length === 0 || Ur(S)
      ? function (A) {
          return Ic(dl.apply(void 0, S), O)(A);
        }
      : Nc()(S[0]);
  }
  function Dc() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (O) {
          return Hu(O, ['fulfilled']);
        }
      : Ur(S)
      ? function (O) {
          var A = S.map(function (I) {
            return I.fulfilled;
          });
          return qr.apply(void 0, A)(O);
        }
      : Dc()(S[0]);
  }
  function $c() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (O) {
          return Hu(O, ['pending', 'fulfilled', 'rejected']);
        }
      : Ur(S)
      ? function (O) {
          for (var A = [], I = 0, Q = S; I < Q.length; I++) {
            var Y = Q[I];
            A.push(Y.pending, Y.rejected, Y.fulfilled);
          }
          return qr.apply(void 0, A)(O);
        }
      : $c()(S[0]);
  }
  var pl = function (S, k) {
      if (typeof S != 'function') throw new TypeError(k + ' is not a function');
    },
    ey = function () {},
    vl = function (S, k) {
      return k === void 0 && (k = ey), S.catch(k), S;
    },
    zc = function (S, k) {
      S.addEventListener('abort', k, { once: !0 });
    },
    Zn = function (S, k) {
      var O = S.signal;
      O.aborted ||
        ('reason' in O ||
          Object.defineProperty(O, 'reason', {
            enumerable: !0,
            value: k,
            configurable: !0,
            writable: !0,
          }),
        S.abort(k));
    },
    Qr = function (S) {
      (this.code = S),
        (this.name = 'TaskAbortError'),
        (this.message = 'task cancelled (reason: ' + S + ')');
    },
    Jn = function (S) {
      if (S.aborted) throw new Qr(S.reason);
    },
    bc = function (S) {
      return vl(
        new Promise(function (k, O) {
          var A = function () {
            return O(new Qr(S.reason));
          };
          S.aborted ? A() : zc(S, A);
        })
      );
    },
    Ku = function (S) {
      return function (k) {
        return vl(
          Promise.race([bc(S), k]).then(function (O) {
            return Jn(S), O;
          })
        );
      };
    },
    Lc = function (S) {
      var k = Ku(S);
      return function (O) {
        return k(
          new Promise(function (A) {
            return setTimeout(A, O);
          })
        );
      };
    },
    ty = Object.assign,
    Fc = {},
    Br = 'listenerMiddleware',
    qc = function (S) {
      var k = S.type,
        O = S.actionCreator,
        A = S.matcher,
        I = S.predicate,
        Q = S.effect;
      if (k) I = Re(k).match;
      else if (O) (k = O.type), (I = O.match);
      else if (A) I = A;
      else if (!I)
        throw new Error(
          'Creating or removing a listener requires one of the known fields for matching an action'
        );
      return pl(Q, 'options.listener'), { predicate: I, type: k, effect: Q };
    },
    Uc = function (S, k, O) {
      try {
        S(k, O);
      } catch (A) {
        setTimeout(function () {
          throw A;
        }, 0);
      }
    },
    Qc = Re(Br + '/add'),
    Bc = Re(Br + '/removeAll'),
    Vc = Re(Br + '/remove'),
    ny = function () {
      for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
      console.error.apply(console, u([Br + '/error'], S));
    },
    hl = function (S) {
      S.pending.forEach(function (k) {
        Zn(k, 'listener-cancelled');
      });
    };
  function ry(S) {
    var k = this;
    S === void 0 && (S = {});
    var O = new Map(),
      A = S.extra,
      I = S.onError,
      Q = I === void 0 ? ny : I;
    pl(Q, 'onError');
    var Y = function (b) {
        for (var q = 0, X = Array.from(O.values()); q < X.length; q++) {
          var K = X[q];
          if (b(K)) return K;
        }
      },
      L = function (b) {
        var q = Y(function (X) {
          return X.effect === b.effect;
        });
        return (
          q ||
            (q = (function (X) {
              var K = qc(X),
                re = K.type,
                B = K.predicate,
                G = K.effect;
              return {
                id: cl(),
                effect: G,
                type: re,
                predicate: B,
                pending: new Set(),
                unsubscribe: function () {
                  throw new Error('Unsubscribe not initialized');
                },
              };
            })(b)),
          (function (X) {
            return (
              (X.unsubscribe = function () {
                return O.delete(X.id);
              }),
              O.set(X.id, X),
              function (K) {
                X.unsubscribe(), K != null && K.cancelActive && hl(X);
              }
            );
          })(q)
        );
      },
      ue = function (b) {
        var q = qc(b),
          X = q.type,
          K = q.effect,
          re = q.predicate,
          B = Y(function (G) {
            return (
              (typeof X == 'string' ? G.type === X : G.predicate === re) &&
              G.effect === K
            );
          });
        return B && (B.unsubscribe(), b.cancelActive && hl(B)), !!B;
      },
      F = function (b, q, X, K) {
        return _(k, null, function () {
          var re, B, G;
          return r(this, function (fe) {
            switch (fe.label) {
              case 0:
                (re = new AbortController()),
                  (B = (function (ye, de) {
                    return function (me, ft) {
                      return vl(
                        (function (He, un) {
                          return _(void 0, null, function () {
                            var Bt, Tt, yl, Wc;
                            return r(this, function (Gu) {
                              switch (Gu.label) {
                                case 0:
                                  Jn(de),
                                    (Bt = function () {}),
                                    (Tt = new Promise(function (ml) {
                                      Bt = ye({
                                        predicate: He,
                                        effect: function (uy, gl) {
                                          gl.unsubscribe(),
                                            ml([
                                              uy,
                                              gl.getState(),
                                              gl.getOriginalState(),
                                            ]);
                                        },
                                      });
                                    })),
                                    (yl = [bc(de), Tt]),
                                    un != null &&
                                      yl.push(
                                        new Promise(function (ml) {
                                          return setTimeout(ml, un, null);
                                        })
                                      ),
                                    (Gu.label = 1);
                                case 1:
                                  return (
                                    Gu.trys.push([1, , 3, 4]),
                                    [4, Promise.race(yl)]
                                  );
                                case 2:
                                  return (Wc = Gu.sent()), Jn(de), [2, Wc];
                                case 3:
                                  return Bt(), [7];
                                case 4:
                                  return [2];
                              }
                            });
                          });
                        })(me, ft)
                      );
                    };
                  })(L, re.signal)),
                  (fe.label = 1);
              case 1:
                return (
                  fe.trys.push([1, 3, 4, 5]),
                  b.pending.add(re),
                  [
                    4,
                    Promise.resolve(
                      b.effect(
                        q,
                        ty({}, X, {
                          getOriginalState: K,
                          condition: function (ye, de) {
                            return B(ye, de).then(Boolean);
                          },
                          take: B,
                          delay: Lc(re.signal),
                          pause: Ku(re.signal),
                          extra: A,
                          signal: re.signal,
                          fork:
                            ((se = re.signal),
                            function (ye) {
                              pl(ye, 'taskExecutor');
                              var de,
                                me = new AbortController();
                              (de = me),
                                zc(se, function () {
                                  return Zn(de, se.reason);
                                });
                              var ft,
                                He,
                                un =
                                  ((ft = function () {
                                    return _(void 0, null, function () {
                                      var Bt;
                                      return r(this, function (Tt) {
                                        switch (Tt.label) {
                                          case 0:
                                            return (
                                              Jn(se),
                                              Jn(me.signal),
                                              [
                                                4,
                                                ye({
                                                  pause: Ku(me.signal),
                                                  delay: Lc(me.signal),
                                                  signal: me.signal,
                                                }),
                                              ]
                                            );
                                          case 1:
                                            return (
                                              (Bt = Tt.sent()),
                                              Jn(me.signal),
                                              [2, Bt]
                                            );
                                        }
                                      });
                                    });
                                  }),
                                  (He = function () {
                                    return Zn(me, 'task-completed');
                                  }),
                                  _(void 0, null, function () {
                                    var Bt;
                                    return r(this, function (Tt) {
                                      switch (Tt.label) {
                                        case 0:
                                          return (
                                            Tt.trys.push([0, 3, 4, 5]),
                                            [4, Promise.resolve()]
                                          );
                                        case 1:
                                          return Tt.sent(), [4, ft()];
                                        case 2:
                                          return [
                                            2,
                                            { status: 'ok', value: Tt.sent() },
                                          ];
                                        case 3:
                                          return [
                                            2,
                                            {
                                              status:
                                                (Bt = Tt.sent()) instanceof Qr
                                                  ? 'cancelled'
                                                  : 'rejected',
                                              error: Bt,
                                            },
                                          ];
                                        case 4:
                                          return He == null || He(), [7];
                                        case 5:
                                          return [2];
                                      }
                                    });
                                  }));
                              return {
                                result: Ku(se)(un),
                                cancel: function () {
                                  Zn(me, 'task-cancelled');
                                },
                              };
                            }),
                          unsubscribe: b.unsubscribe,
                          subscribe: function () {
                            O.set(b.id, b);
                          },
                          cancelActiveListeners: function () {
                            b.pending.forEach(function (ye, de, me) {
                              ye !== re &&
                                (Zn(ye, 'listener-cancelled'), me.delete(ye));
                            });
                          },
                        })
                      )
                    ),
                  ]
                );
              case 2:
                return fe.sent(), [3, 5];
              case 3:
                return (
                  (G = fe.sent()) instanceof Qr ||
                    Uc(Q, G, { raisedBy: 'effect' }),
                  [3, 5]
                );
              case 4:
                return Zn(re, 'listener-completed'), b.pending.delete(re), [7];
              case 5:
                return [2];
            }
            var se;
          });
        });
      },
      N = (function (b) {
        return function () {
          b.forEach(hl), b.clear();
        };
      })(O);
    return {
      middleware: function (b) {
        return function (q) {
          return function (X) {
            if (Qc.match(X)) return L(X.payload);
            if (!Bc.match(X)) {
              if (Vc.match(X)) return ue(X.payload);
              var K,
                re = b.getState(),
                B = function () {
                  if (re === Fc)
                    throw new Error(
                      Br + ': getOriginalState can only be called synchronously'
                    );
                  return re;
                };
              try {
                if (((K = q(X)), O.size > 0))
                  for (
                    var G = b.getState(),
                      fe = Array.from(O.values()),
                      se = 0,
                      ye = fe;
                    se < ye.length;
                    se++
                  ) {
                    var de = ye[se],
                      me = !1;
                    try {
                      me = de.predicate(X, G, re);
                    } catch (ft) {
                      (me = !1), Uc(Q, ft, { raisedBy: 'predicate' });
                    }
                    me && F(de, X, b, B);
                  }
              } finally {
                re = Fc;
              }
              return K;
            }
            N();
          };
        };
      },
      startListening: L,
      stopListening: ue,
      clearListeners: N,
    };
  }
  (0, E.enableES5)();
})(Dh);
(function (e) {
  e.exports = Dh;
})(Wu);
const V1 = { hightScore: null },
  $h = Wu.exports.createSlice({
    name: 'game',
    initialState: V1,
    reducers: {
      setHightScore(e, { payload: t }) {
        e.hightScore = t;
      },
    },
  }),
  W1 = $h.actions,
  H1 = $h.reducer,
  K1 = { isAuth: !1, isLoadingAuth: !0 },
  zh = Wu.exports.createSlice({
    name: 'auth',
    initialState: K1,
    reducers: {
      setIsAuth(e, { payload: t }) {
        e.isAuth = t;
      },
      setIsLoadingAuth(e, { payload: t }) {
        e.isLoadingAuth = t;
      },
    },
  });
var il =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        u,
        o,
        i;
      return (
        (i = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == 'function' &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
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
              u &&
                (o =
                  s[0] & 2
                    ? u.return
                    : s[0]
                    ? u.throw || ((o = u.return) && o.call(u), 0)
                    : u.next) &&
                !(o = o.call(u, s[1])).done)
            )
              return o;
            switch (((u = 0), o && (s = [s[0] & 2, o.value]), s[0])) {
              case 0:
              case 1:
                o = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (u = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = s);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(s);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (u = 0);
          } finally {
            r = o = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  ci =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, u = e.length; n < r; n++, u++) e[u] = t[n];
      return e;
    },
  G1 = Object.defineProperty,
  Y1 = Object.defineProperties,
  X1 = Object.getOwnPropertyDescriptors,
  fi = Object.getOwnPropertySymbols,
  bh = Object.prototype.hasOwnProperty,
  Lh = Object.prototype.propertyIsEnumerable,
  Cd = function (e, t, n) {
    return t in e
      ? G1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  De = function (e, t) {
    for (var n in t || (t = {})) bh.call(t, n) && Cd(e, n, t[n]);
    if (fi)
      for (var r = 0, u = fi(t); r < u.length; r++) {
        var n = u[r];
        Lh.call(t, n) && Cd(e, n, t[n]);
      }
    return e;
  },
  Pn = function (e, t) {
    return Y1(e, X1(t));
  },
  Td = function (e, t) {
    var n = {};
    for (var r in e) bh.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && fi)
      for (var u = 0, o = fi(e); u < o.length; u++) {
        var r = o[u];
        t.indexOf(r) < 0 && Lh.call(e, r) && (n[r] = e[r]);
      }
    return n;
  },
  ll = function (e, t, n) {
    return new Promise(function (r, u) {
      var o = function (a) {
          try {
            l(n.next(a));
          } catch (s) {
            u(s);
          }
        },
        i = function (a) {
          try {
            l(n.throw(a));
          } catch (s) {
            u(s);
          }
        },
        l = function (a) {
          return a.done ? r(a.value) : Promise.resolve(a.value).then(o, i);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  Ee;
(function (e) {
  (e.uninitialized = 'uninitialized'),
    (e.pending = 'pending'),
    (e.fulfilled = 'fulfilled'),
    (e.rejected = 'rejected');
})(Ee || (Ee = {}));
function Z1(e) {
  return {
    status: e,
    isUninitialized: e === Ee.uninitialized,
    isLoading: e === Ee.pending,
    isSuccess: e === Ee.fulfilled,
    isError: e === Ee.rejected,
  };
}
function J1(e) {
  return new RegExp('(^|:)//').test(e);
}
var eS = function (e) {
    return e.replace(/\/$/, '');
  },
  tS = function (e) {
    return e.replace(/^\//, '');
  };
function nS(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (J1(t)) return t;
  var n = e.endsWith('/') || !t.startsWith('?') ? '/' : '';
  return (e = eS(e)), (t = tS(t)), '' + e + n + t;
}
var Rd = function (e) {
  return [].concat.apply([], e);
};
function rS() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function uS() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden';
}
var jd = Bu;
function Fh(e, t) {
  if (e === t || !((jd(e) && jd(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  for (
    var n = Object.keys(t),
      r = Object.keys(e),
      u = n.length === r.length,
      o = Array.isArray(t) ? [] : {},
      i = 0,
      l = n;
    i < l.length;
    i++
  ) {
    var a = l[i];
    (o[a] = Fh(e[a], t[a])), u && (u = e[a] === o[a]);
  }
  return u ? e : o;
}
var Ad = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return fetch.apply(void 0, e);
  },
  oS = function (e) {
    return e.status >= 200 && e.status <= 299;
  },
  iS = function (e) {
    var t, n;
    return (n = (t = e.get('content-type')) == null ? void 0 : t.trim()) == null
      ? void 0
      : n.startsWith('application/json');
  },
  lS = function (e, t) {
    return ll(void 0, null, function () {
      var n;
      return il(this, function (r) {
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
function Id(e) {
  if (!Bu(e)) return e;
  for (var t = De({}, e), n = 0, r = Object.entries(t); n < r.length; n++) {
    var u = r[n],
      o = u[0],
      i = u[1];
    i === void 0 && delete t[o];
  }
  return t;
}
function al(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = e,
    r = n.baseUrl,
    u = n.prepareHeaders,
    o =
      u === void 0
        ? function (c) {
            return c;
          }
        : u,
    i = n.fetchFn,
    l = i === void 0 ? Ad : i,
    a = n.paramsSerializer,
    s = Td(n, ['baseUrl', 'prepareHeaders', 'fetchFn', 'paramsSerializer']);
  return (
    typeof fetch > 'u' &&
      l === Ad &&
      console.warn(
        'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
      ),
    function (c, p) {
      return ll(t, null, function () {
        var d,
          y,
          g,
          w,
          C,
          h,
          f,
          v,
          m,
          _,
          E,
          P,
          x,
          R,
          T,
          M,
          $,
          U,
          ee,
          Z,
          te,
          J,
          j,
          z,
          W,
          oe,
          ne,
          le,
          Pe,
          _e,
          ze,
          Re,
          Xn,
          br,
          In,
          Lr;
        return il(this, function (ct) {
          switch (ct.label) {
            case 0:
              return (
                (d = p.signal),
                (y = p.getState),
                (g = p.extra),
                (w = p.endpoint),
                (C = p.forced),
                (h = p.type),
                (v = typeof c == 'string' ? { url: c } : c),
                (m = v.url),
                (_ = v.method),
                (E = _ === void 0 ? 'GET' : _),
                (P = v.headers),
                (x = P === void 0 ? new Headers({}) : P),
                (R = v.body),
                (T = R === void 0 ? void 0 : R),
                (M = v.params),
                ($ = M === void 0 ? void 0 : M),
                (U = v.responseHandler),
                (ee = U === void 0 ? 'json' : U),
                (Z = v.validateStatus),
                (te = Z === void 0 ? oS : Z),
                (J = Td(v, [
                  'url',
                  'method',
                  'headers',
                  'body',
                  'params',
                  'responseHandler',
                  'validateStatus',
                ])),
                (j = De(Pn(De({}, s), { method: E, signal: d, body: T }), J)),
                (z = j),
                [
                  4,
                  o(new Headers(Id(x)), {
                    getState: y,
                    extra: g,
                    endpoint: w,
                    forced: C,
                    type: h,
                  }),
                ]
              );
            case 1:
              (z.headers = ct.sent()),
                (W = function (wt) {
                  return (
                    typeof wt == 'object' &&
                    (Bu(wt) ||
                      Array.isArray(wt) ||
                      typeof wt.toJSON == 'function')
                  );
                }),
                !j.headers.has('content-type') &&
                  W(T) &&
                  j.headers.set('content-type', 'application/json'),
                W(T) && iS(j.headers) && (j.body = JSON.stringify(T)),
                $ &&
                  ((oe = ~m.indexOf('?') ? '&' : '?'),
                  (ne = a ? a($) : new URLSearchParams(Id($))),
                  (m += oe + ne)),
                (m = nS(r, m)),
                (le = new Request(m, j)),
                (Pe = le.clone()),
                (f = { request: Pe }),
                (ct.label = 2);
            case 2:
              return ct.trys.push([2, 4, , 5]), [4, l(le)];
            case 3:
              return (_e = ct.sent()), [3, 5];
            case 4:
              return (
                (ze = ct.sent()),
                [
                  2,
                  {
                    error: { status: 'FETCH_ERROR', error: String(ze) },
                    meta: f,
                  },
                ]
              );
            case 5:
              (Re = _e.clone()), (f.response = Re), (br = ''), (ct.label = 6);
            case 6:
              return (
                ct.trys.push([6, 8, , 9]),
                [
                  4,
                  Promise.all([
                    lS(_e, ee).then(
                      function (wt) {
                        return (Xn = wt);
                      },
                      function (wt) {
                        return (In = wt);
                      }
                    ),
                    Re.text().then(
                      function (wt) {
                        return (br = wt);
                      },
                      function () {}
                    ),
                  ]),
                ]
              );
            case 7:
              if ((ct.sent(), In)) throw In;
              return [3, 9];
            case 8:
              return (
                (Lr = ct.sent()),
                [
                  2,
                  {
                    error: {
                      status: 'PARSING_ERROR',
                      originalStatus: _e.status,
                      data: br,
                      error: String(Lr),
                    },
                    meta: f,
                  },
                ]
              );
            case 9:
              return [
                2,
                te(_e, Xn)
                  ? { data: Xn, meta: f }
                  : { error: { status: _e.status, data: Xn }, meta: f },
              ];
          }
        });
      });
    }
  );
}
var Md = (function () {
    function e(t, n) {
      n === void 0 && (n = void 0), (this.value = t), (this.meta = n);
    }
    return e;
  })(),
  kc = at('__rtkq/focused'),
  qh = at('__rtkq/unfocused'),
  Pc = at('__rtkq/online'),
  Uh = at('__rtkq/offline'),
  zt;
(function (e) {
  (e.query = 'query'), (e.mutation = 'mutation');
})(zt || (zt = {}));
function aS(e) {
  return e.type === zt.query;
}
function sS(e) {
  return e.type === zt.mutation;
}
function Qh(e, t, n, r, u, o) {
  return cS(e)
    ? e(t, n, r, u).map(ps).map(o)
    : Array.isArray(e)
    ? e.map(ps).map(o)
    : [];
}
function cS(e) {
  return typeof e == 'function';
}
function ps(e) {
  return typeof e == 'string' ? { type: e } : e;
}
function fS(e) {
  return e;
}
function dS(e) {
  var t = this,
    n = e.reducerPath,
    r = e.baseQuery,
    u = e.context.endpointDefinitions,
    o = e.serializeQueryArgs,
    i = e.api,
    l = function (f, v, m) {
      return function (_) {
        var E = u[f];
        _(
          i.internalActions.queryResultPatched({
            queryCacheKey: o({
              queryArgs: v,
              endpointDefinition: E,
              endpointName: f,
            }),
            patches: m,
          })
        );
      };
    },
    a = function (f, v, m) {
      return function (_, E) {
        var P,
          x,
          R = i.endpoints[f].select(v)(E()),
          T = {
            patches: [],
            inversePatches: [],
            undo: function () {
              return _(i.util.patchQueryData(f, v, T.inversePatches));
            },
          };
        if (R.status === Ee.uninitialized) return T;
        if ('data' in R)
          if (st(R.data)) {
            var M = xh(R.data, m),
              $ = M[1],
              U = M[2];
            (P = T.patches).push.apply(P, $),
              (x = T.inversePatches).push.apply(x, U);
          } else {
            var ee = m(R.data);
            T.patches.push({ op: 'replace', path: [], value: ee }),
              T.inversePatches.push({ op: 'replace', path: [], value: R.data });
          }
        return _(i.util.patchQueryData(f, v, T.patches)), T;
      };
    },
    s = function (f, v) {
      return ll(t, [f, v], function (m, _) {
        var E,
          P,
          x,
          R,
          T,
          M,
          $,
          U,
          ee,
          Z,
          te,
          J = _.signal,
          j = _.rejectWithValue,
          z = _.fulfillWithValue,
          W = _.dispatch,
          oe = _.getState,
          ne = _.extra;
        return il(this, function (le) {
          switch (le.label) {
            case 0:
              (E = u[m.endpointName]), (le.label = 1);
            case 1:
              return (
                le.trys.push([1, 7, , 8]),
                (P = fS),
                (x = void 0),
                (R = {
                  signal: J,
                  dispatch: W,
                  getState: oe,
                  extra: ne,
                  endpoint: m.endpointName,
                  type: m.type,
                  forced: m.type === 'query' ? c(m, oe()) : void 0,
                }),
                E.query
                  ? [4, r(E.query(m.originalArgs), R, E.extraOptions)]
                  : [3, 3]
              );
            case 2:
              return (
                (x = le.sent()),
                E.transformResponse && (P = E.transformResponse),
                [3, 5]
              );
            case 3:
              return [
                4,
                E.queryFn(m.originalArgs, R, E.extraOptions, function (Pe) {
                  return r(Pe, R, E.extraOptions);
                }),
              ];
            case 4:
              (x = le.sent()), (le.label = 5);
            case 5:
              if ((typeof process < 'u', x.error))
                throw new Md(x.error, x.meta);
              return (Z = z), [4, P(x.data, x.meta, m.originalArgs)];
            case 6:
              return [
                2,
                Z.apply(void 0, [
                  le.sent(),
                  { fulfilledTimeStamp: Date.now(), baseQueryMeta: x.meta },
                ]),
              ];
            case 7:
              if (((te = le.sent()), te instanceof Md))
                return [2, j(te.value, { baseQueryMeta: te.meta })];
              throw (typeof process < 'u', console.error(te), te);
            case 8:
              return [2];
          }
        });
      });
    };
  function c(f, v) {
    var m,
      _,
      E,
      P,
      x =
        (_ = (m = v[n]) == null ? void 0 : m.queries) == null
          ? void 0
          : _[f.queryCacheKey],
      R = (E = v[n]) == null ? void 0 : E.config.refetchOnMountOrArgChange,
      T = x == null ? void 0 : x.fulfilledTimeStamp,
      M = (P = f.forceRefetch) != null ? P : f.subscribe && R;
    return M ? M === !0 || (Number(new Date()) - Number(T)) / 1e3 >= M : !1;
  }
  var p = xd(n + '/executeQuery', s, {
      getPendingMeta: function () {
        return { startedTimeStamp: Date.now() };
      },
      condition: function (f, v) {
        var m = v.getState,
          _,
          E,
          P = m(),
          x =
            (E = (_ = P[n]) == null ? void 0 : _.queries) == null
              ? void 0
              : E[f.queryCacheKey],
          R = x == null ? void 0 : x.fulfilledTimeStamp;
        return (x == null ? void 0 : x.status) === 'pending'
          ? !1
          : c(f, P)
          ? !0
          : !R;
      },
      dispatchConditionRejection: !0,
    }),
    d = xd(n + '/executeMutation', s, {
      getPendingMeta: function () {
        return { startedTimeStamp: Date.now() };
      },
    }),
    y = function (f) {
      return 'force' in f;
    },
    g = function (f) {
      return 'ifOlderThan' in f;
    },
    w = function (f, v, m) {
      return function (_, E) {
        var P = y(m) && m.force,
          x = g(m) && m.ifOlderThan,
          R = function (U) {
            return (
              U === void 0 && (U = !0),
              i.endpoints[f].initiate(v, { forceRefetch: U })
            );
          },
          T = i.endpoints[f].select(v)(E());
        if (P) _(R());
        else if (x) {
          var M = T == null ? void 0 : T.fulfilledTimeStamp;
          if (!M) {
            _(R());
            return;
          }
          var $ = (Number(new Date()) - Number(new Date(M))) / 1e3 >= x;
          $ && _(R());
        } else _(R(!1));
      };
    };
  function C(f) {
    return function (v) {
      var m, _;
      return (
        ((_ = (m = v == null ? void 0 : v.meta) == null ? void 0 : m.arg) ==
        null
          ? void 0
          : _.endpointName) === f
      );
    };
  }
  function h(f, v) {
    return {
      matchPending: vu(_c(f), C(v)),
      matchFulfilled: vu(Yn(f), C(v)),
      matchRejected: vu(zu(f), C(v)),
    };
  }
  return {
    queryThunk: p,
    mutationThunk: d,
    prefetch: w,
    updateQueryData: a,
    patchQueryData: l,
    buildMatchThunkActions: h,
  };
}
function Bh(e, t, n, r) {
  return Qh(
    n[e.meta.arg.endpointName][t],
    Yn(e) ? e.payload : void 0,
    ol(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    'baseQueryMeta' in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  );
}
function ho(e, t, n) {
  var r = e[t];
  r && n(r);
}
function bu(e) {
  var t;
  return (t = 'arg' in e ? e.arg.fixedCacheKey : e.fixedCacheKey) != null
    ? t
    : e.requestId;
}
function Nd(e, t, n) {
  var r = e[bu(t)];
  r && n(r);
}
var yo = {};
function pS(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.mutationThunk,
    u = e.context,
    o = u.endpointDefinitions,
    i = u.apiUid,
    l = u.extractRehydrationInfo,
    a = u.hasRehydrationInfo,
    s = e.assertTagType,
    c = e.config,
    p = at(t + '/resetApiState'),
    d = Jr({
      name: t + '/queries',
      initialState: yo,
      reducers: {
        removeQueryResult: function (m, _) {
          var E = _.payload.queryCacheKey;
          delete m[E];
        },
        queryResultPatched: function (m, _) {
          var E = _.payload,
            P = E.queryCacheKey,
            x = E.patches;
          ho(m, P, function (R) {
            R.data = Oh(R.data, x.concat());
          });
        },
      },
      extraReducers: function (m) {
        m.addCase(n.pending, function (_, E) {
          var P = E.meta,
            x = E.meta.arg,
            R,
            T;
          x.subscribe &&
            ((T = _[(R = x.queryCacheKey)]) != null ||
              (_[R] = {
                status: Ee.uninitialized,
                endpointName: x.endpointName,
              })),
            ho(_, x.queryCacheKey, function (M) {
              (M.status = Ee.pending),
                (M.requestId = P.requestId),
                x.originalArgs !== void 0 && (M.originalArgs = x.originalArgs),
                (M.startedTimeStamp = P.startedTimeStamp);
            });
        })
          .addCase(n.fulfilled, function (_, E) {
            var P = E.meta,
              x = E.payload;
            ho(_, P.arg.queryCacheKey, function (R) {
              var T;
              R.requestId === P.requestId &&
                ((R.status = Ee.fulfilled),
                (R.data =
                  (T = o[P.arg.endpointName].structuralSharing) == null || T
                    ? Fh(R.data, x)
                    : x),
                delete R.error,
                (R.fulfilledTimeStamp = P.fulfilledTimeStamp));
            });
          })
          .addCase(n.rejected, function (_, E) {
            var P = E.meta,
              x = P.condition,
              R = P.arg,
              T = P.requestId,
              M = E.error,
              $ = E.payload;
            ho(_, R.queryCacheKey, function (U) {
              if (!x) {
                if (U.requestId !== T) return;
                (U.status = Ee.rejected), (U.error = $ != null ? $ : M);
              }
            });
          })
          .addMatcher(a, function (_, E) {
            for (
              var P = l(E).queries, x = 0, R = Object.entries(P);
              x < R.length;
              x++
            ) {
              var T = R[x],
                M = T[0],
                $ = T[1];
              (($ == null ? void 0 : $.status) === Ee.fulfilled ||
                ($ == null ? void 0 : $.status) === Ee.rejected) &&
                (_[M] = $);
            }
          });
      },
    }),
    y = Jr({
      name: t + '/mutations',
      initialState: yo,
      reducers: {
        removeMutationResult: function (m, _) {
          var E = _.payload,
            P = bu(E);
          P in m && delete m[P];
        },
      },
      extraReducers: function (m) {
        m.addCase(r.pending, function (_, E) {
          var P = E.meta,
            x = E.meta,
            R = x.requestId,
            T = x.arg,
            M = x.startedTimeStamp;
          !T.track ||
            (_[bu(P)] = {
              requestId: R,
              status: Ee.pending,
              endpointName: T.endpointName,
              startedTimeStamp: M,
            });
        })
          .addCase(r.fulfilled, function (_, E) {
            var P = E.payload,
              x = E.meta;
            !x.arg.track ||
              Nd(_, x, function (R) {
                R.requestId === x.requestId &&
                  ((R.status = Ee.fulfilled),
                  (R.data = P),
                  (R.fulfilledTimeStamp = x.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, function (_, E) {
            var P = E.payload,
              x = E.error,
              R = E.meta;
            !R.arg.track ||
              Nd(_, R, function (T) {
                T.requestId === R.requestId &&
                  ((T.status = Ee.rejected), (T.error = P != null ? P : x));
              });
          })
          .addMatcher(a, function (_, E) {
            for (
              var P = l(E).mutations, x = 0, R = Object.entries(P);
              x < R.length;
              x++
            ) {
              var T = R[x],
                M = T[0],
                $ = T[1];
              (($ == null ? void 0 : $.status) === Ee.fulfilled ||
                ($ == null ? void 0 : $.status) === Ee.rejected) &&
                M !== ($ == null ? void 0 : $.requestId) &&
                (_[M] = $);
            }
          });
      },
    }),
    g = Jr({
      name: t + '/invalidation',
      initialState: yo,
      reducers: {},
      extraReducers: function (m) {
        m.addCase(d.actions.removeQueryResult, function (_, E) {
          for (
            var P = E.payload.queryCacheKey, x = 0, R = Object.values(_);
            x < R.length;
            x++
          )
            for (var T = R[x], M = 0, $ = Object.values(T); M < $.length; M++) {
              var U = $[M],
                ee = U.indexOf(P);
              ee !== -1 && U.splice(ee, 1);
            }
        })
          .addMatcher(a, function (_, E) {
            for (
              var P, x, R, T, M = l(E).provided, $ = 0, U = Object.entries(M);
              $ < U.length;
              $++
            )
              for (
                var ee = U[$],
                  Z = ee[0],
                  te = ee[1],
                  J = 0,
                  j = Object.entries(te);
                J < j.length;
                J++
              )
                for (
                  var z = j[J],
                    W = z[0],
                    oe = z[1],
                    ne =
                      (T = (x = (P = _[Z]) != null ? P : (_[Z] = {}))[
                        (R = W || '__internal_without_id')
                      ]) != null
                        ? T
                        : (x[R] = []),
                    le = 0,
                    Pe = oe;
                  le < Pe.length;
                  le++
                ) {
                  var _e = Pe[le],
                    ze = ne.includes(_e);
                  ze || ne.push(_e);
                }
          })
          .addMatcher(zr(Yn(n), ol(n)), function (_, E) {
            for (
              var P,
                x,
                R,
                T,
                M = Bh(E, 'providesTags', o, s),
                $ = E.meta.arg.queryCacheKey,
                U = 0,
                ee = Object.values(_);
              U < ee.length;
              U++
            )
              for (
                var Z = ee[U], te = 0, J = Object.values(Z);
                te < J.length;
                te++
              ) {
                var j = J[te],
                  z = j.indexOf($);
                z !== -1 && j.splice(z, 1);
              }
            for (var W = 0, oe = M; W < oe.length; W++) {
              var ne = oe[W],
                le = ne.type,
                Pe = ne.id,
                _e =
                  (T = (x = (P = _[le]) != null ? P : (_[le] = {}))[
                    (R = Pe || '__internal_without_id')
                  ]) != null
                    ? T
                    : (x[R] = []),
                ze = _e.includes($);
              ze || _e.push($);
            }
          });
      },
    }),
    w = Jr({
      name: t + '/subscriptions',
      initialState: yo,
      reducers: {
        updateSubscriptionOptions: function (m, _) {
          var E = _.payload,
            P = E.queryCacheKey,
            x = E.requestId,
            R = E.options,
            T;
          (T = m == null ? void 0 : m[P]) != null && T[x] && (m[P][x] = R);
        },
        unsubscribeQueryResult: function (m, _) {
          var E = _.payload,
            P = E.queryCacheKey,
            x = E.requestId;
          m[P] && delete m[P][x];
        },
      },
      extraReducers: function (m) {
        m.addCase(d.actions.removeQueryResult, function (_, E) {
          var P = E.payload.queryCacheKey;
          delete _[P];
        })
          .addCase(n.pending, function (_, E) {
            var P = E.meta,
              x = P.arg,
              R = P.requestId,
              T,
              M,
              $,
              U;
            if (x.subscribe) {
              var ee = (M = _[(T = x.queryCacheKey)]) != null ? M : (_[T] = {});
              ee[R] =
                (U = ($ = x.subscriptionOptions) != null ? $ : ee[R]) != null
                  ? U
                  : {};
            }
          })
          .addCase(n.rejected, function (_, E) {
            var P = E.meta,
              x = P.condition,
              R = P.arg,
              T = P.requestId;
            E.error, E.payload;
            var M, $, U, ee;
            if (x && R.subscribe) {
              var Z = ($ = _[(M = R.queryCacheKey)]) != null ? $ : (_[M] = {});
              Z[T] =
                (ee = (U = R.subscriptionOptions) != null ? U : Z[T]) != null
                  ? ee
                  : {};
            }
          })
          .addMatcher(a, function (_) {
            return De({}, _);
          });
      },
    }),
    C = Jr({
      name: t + '/config',
      initialState: De(
        { online: rS(), focused: uS(), middlewareRegistered: !1 },
        c
      ),
      reducers: {
        middlewareRegistered: function (m, _) {
          var E = _.payload;
          m.middlewareRegistered =
            m.middlewareRegistered === 'conflict' || i !== E ? 'conflict' : !0;
        },
      },
      extraReducers: function (m) {
        m.addCase(Pc, function (_) {
          _.online = !0;
        })
          .addCase(Uh, function (_) {
            _.online = !1;
          })
          .addCase(kc, function (_) {
            _.focused = !0;
          })
          .addCase(qh, function (_) {
            _.focused = !1;
          })
          .addMatcher(a, function (_) {
            return De({}, _);
          });
      },
    }),
    h = wc({
      queries: d.reducer,
      mutations: y.reducer,
      provided: g.reducer,
      subscriptions: w.reducer,
      config: C.reducer,
    }),
    f = function (m, _) {
      return h(p.match(_) ? void 0 : m, _);
    },
    v = Pn(De(De(De(De({}, C.actions), d.actions), w.actions), y.actions), {
      unsubscribeMutationResult: y.actions.removeMutationResult,
      resetApiState: p,
    });
  return { reducer: f, actions: v };
}
var Fn = Symbol.for('RTKQ/skipToken'),
  Vh = { status: Ee.uninitialized },
  vS = Ir(Vh, function () {}),
  hS = Ir(Vh, function () {});
function yS(e) {
  var t = e.serializeQueryArgs,
    n = e.reducerPath;
  return {
    buildQuerySelector: o,
    buildMutationSelector: i,
    selectInvalidatedBy: l,
  };
  function r(a) {
    return De(De({}, a), Z1(a.status));
  }
  function u(a) {
    var s = a[n];
    return s;
  }
  function o(a, s) {
    return function (c) {
      var p = Yt(u, function (d) {
        var y, g;
        return (g =
          c === Fn || (y = d == null ? void 0 : d.queries) == null
            ? void 0
            : y[t({ queryArgs: c, endpointDefinition: s, endpointName: a })]) !=
          null
          ? g
          : vS;
      });
      return Yt(p, r);
    };
  }
  function i() {
    return function (a) {
      var s, c;
      typeof a == 'object' ? (c = (s = bu(a)) != null ? s : Fn) : (c = a);
      var p = Yt(u, function (d) {
        var y, g;
        return (g =
          c === Fn || (y = d == null ? void 0 : d.mutations) == null
            ? void 0
            : y[c]) != null
          ? g
          : hS;
      });
      return Yt(p, r);
    };
  }
  function l(a, s) {
    for (
      var c, p = a[n], d = new Set(), y = 0, g = s.map(ps);
      y < g.length;
      y++
    ) {
      var w = g[y],
        C = p.provided[w.type];
      if (!!C)
        for (
          var h =
              (c = w.id !== void 0 ? C[w.id] : Rd(Object.values(C))) != null
                ? c
                : [],
            f = 0,
            v = h;
          f < v.length;
          f++
        ) {
          var m = v[f];
          d.add(m);
        }
    }
    return Rd(
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
var mS = function (e) {
  var t = e.endpointName,
    n = e.queryArgs;
  return (
    t +
    '(' +
    JSON.stringify(n, function (r, u) {
      return Bu(u)
        ? Object.keys(u)
            .sort()
            .reduce(function (o, i) {
              return (o[i] = u[i]), o;
            }, {})
        : u;
    }) +
    ')'
  );
};
function gS() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (r) {
    var u = ai(function (c) {
        var p, d;
        return (d = r.extractRehydrationInfo) == null
          ? void 0
          : d.call(r, c, {
              reducerPath: (p = r.reducerPath) != null ? p : 'api',
            });
      }),
      o = Pn(
        De(
          {
            reducerPath: 'api',
            serializeQueryArgs: mS,
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: !1,
            refetchOnFocus: !1,
            refetchOnReconnect: !1,
          },
          r
        ),
        { extractRehydrationInfo: u, tagTypes: ci([], r.tagTypes || []) }
      ),
      i = {
        endpointDefinitions: {},
        batch: function (c) {
          c();
        },
        apiUid: Mh(),
        extractRehydrationInfo: u,
        hasRehydrationInfo: ai(function (c) {
          return u(c) != null;
        }),
      },
      l = {
        injectEndpoints: s,
        enhanceEndpoints: function (c) {
          var p = c.addTagTypes,
            d = c.endpoints;
          if (p)
            for (var y = 0, g = p; y < g.length; y++) {
              var w = g[y];
              o.tagTypes.includes(w) || o.tagTypes.push(w);
            }
          if (d)
            for (var C = 0, h = Object.entries(d); C < h.length; C++) {
              var f = h[C],
                v = f[0],
                m = f[1];
              typeof m == 'function'
                ? m(i.endpointDefinitions[v])
                : Object.assign(i.endpointDefinitions[v] || {}, m);
            }
          return l;
        },
      },
      a = e.map(function (c) {
        return c.init(l, o, i);
      });
    function s(c) {
      for (
        var p = c.endpoints({
            query: function (m) {
              return Pn(De({}, m), { type: zt.query });
            },
            mutation: function (m) {
              return Pn(De({}, m), { type: zt.mutation });
            },
          }),
          d = 0,
          y = Object.entries(p);
        d < y.length;
        d++
      ) {
        var g = y[d],
          w = g[0],
          C = g[1];
        if (!c.overrideExisting && w in i.endpointDefinitions) {
          typeof process < 'u';
          continue;
        }
        i.endpointDefinitions[w] = C;
        for (var h = 0, f = a; h < f.length; h++) {
          var v = f[h];
          v.injectEndpoint(w, C);
        }
      }
      return l;
    }
    return l.injectEndpoints({ endpoints: r.endpoints });
  };
}
var SS = 2147483647 / 1e3 - 1,
  wS = function (e) {
    var t = e.reducerPath,
      n = e.api,
      r = e.context,
      u = n.internalActions,
      o = u.removeQueryResult,
      i = u.unsubscribeQueryResult;
    return function (l) {
      var a = {};
      return function (c) {
        return function (p) {
          var d,
            y = c(p);
          if (i.match(p)) {
            var g = l.getState()[t],
              w = p.payload.queryCacheKey;
            s(
              w,
              (d = g.queries[w]) == null ? void 0 : d.endpointName,
              l,
              g.config
            );
          }
          if (n.util.resetApiState.match(p))
            for (var C = 0, h = Object.entries(a); C < h.length; C++) {
              var f = h[C],
                v = f[0],
                m = f[1];
              m && clearTimeout(m), delete a[v];
            }
          if (r.hasRehydrationInfo(p))
            for (
              var g = l.getState()[t],
                _ = r.extractRehydrationInfo(p).queries,
                E = 0,
                P = Object.entries(_);
              E < P.length;
              E++
            ) {
              var x = P[E],
                w = x[0],
                R = x[1];
              s(w, R == null ? void 0 : R.endpointName, l, g.config);
            }
          return y;
        };
      };
      function s(c, p, d, y) {
        var g,
          w = r.endpointDefinitions[p],
          C =
            (g = w == null ? void 0 : w.keepUnusedDataFor) != null
              ? g
              : y.keepUnusedDataFor,
          h = Math.max(0, Math.min(C, SS)),
          f = a[c];
        f && clearTimeout(f),
          (a[c] = setTimeout(function () {
            var v = d.getState()[t].subscriptions[c];
            (!v || Object.keys(v).length === 0) &&
              d.dispatch(o({ queryCacheKey: c })),
              delete a[c];
          }, h * 1e3));
      }
    };
  },
  _S = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.context.endpointDefinitions,
      u = e.mutationThunk,
      o = e.api,
      i = e.assertTagType,
      l = e.refetchQuery,
      a = o.internalActions.removeQueryResult;
    return function (c) {
      return function (p) {
        return function (d) {
          var y = p(d);
          return (
            zr(Yn(u), ol(u))(d) && s(Bh(d, 'invalidatesTags', r, i), c),
            o.util.invalidateTags.match(d) &&
              s(Qh(d.payload, void 0, void 0, void 0, void 0, i), c),
            y
          );
        };
      };
    };
    function s(c, p) {
      var d = p.getState(),
        y = d[t],
        g = o.util.selectInvalidatedBy(d, c);
      n.batch(function () {
        for (
          var w, C = Array.from(g.values()), h = 0, f = C;
          h < f.length;
          h++
        ) {
          var v = f[h].queryCacheKey,
            m = y.queries[v],
            _ = (w = y.subscriptions[v]) != null ? w : {};
          m &&
            (Object.keys(_).length === 0
              ? p.dispatch(a({ queryCacheKey: v }))
              : m.status !== Ee.uninitialized && p.dispatch(l(m, v)));
        }
      });
    }
  },
  ES = function (e) {
    var t = e.reducerPath,
      n = e.queryThunk,
      r = e.api,
      u = e.refetchQuery;
    return function (i) {
      var l = {};
      return function (d) {
        return function (y) {
          var g = d(y);
          return (
            (r.internalActions.updateSubscriptionOptions.match(y) ||
              r.internalActions.unsubscribeQueryResult.match(y)) &&
              s(y.payload, i),
            (n.pending.match(y) || (n.rejected.match(y) && y.meta.condition)) &&
              s(y.meta.arg, i),
            (n.fulfilled.match(y) ||
              (n.rejected.match(y) && !y.meta.condition)) &&
              a(y.meta.arg, i),
            r.util.resetApiState.match(y) && p(),
            g
          );
        };
      };
      function a(d, y) {
        var g = d.queryCacheKey,
          w = y.getState()[t],
          C = w.queries[g],
          h = w.subscriptions[g];
        if (!(!C || C.status === Ee.uninitialized)) {
          var f = o(h);
          if (!!Number.isFinite(f)) {
            var v = l[g];
            v != null &&
              v.timeout &&
              (clearTimeout(v.timeout), (v.timeout = void 0));
            var m = Date.now() + f,
              _ = (l[g] = {
                nextPollTimestamp: m,
                pollingInterval: f,
                timeout: setTimeout(function () {
                  (_.timeout = void 0), y.dispatch(u(C, g));
                }, f),
              });
          }
        }
      }
      function s(d, y) {
        var g = d.queryCacheKey,
          w = y.getState()[t],
          C = w.queries[g],
          h = w.subscriptions[g];
        if (!(!C || C.status === Ee.uninitialized)) {
          var f = o(h);
          if (!Number.isFinite(f)) {
            c(g);
            return;
          }
          var v = l[g],
            m = Date.now() + f;
          (!v || m < v.nextPollTimestamp) && a({ queryCacheKey: g }, y);
        }
      }
      function c(d) {
        var y = l[d];
        y != null && y.timeout && clearTimeout(y.timeout), delete l[d];
      }
      function p() {
        for (var d = 0, y = Object.keys(l); d < y.length; d++) {
          var g = y[d];
          c(g);
        }
      }
    };
    function o(i) {
      i === void 0 && (i = {});
      for (
        var l = Number.POSITIVE_INFINITY, a = 0, s = Object.values(i);
        a < s.length;
        a++
      ) {
        var c = s[a];
        c.pollingInterval && (l = Math.min(c.pollingInterval, l));
      }
      return l;
    }
  },
  kS = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.api,
      u = e.refetchQuery,
      o = r.internalActions.removeQueryResult;
    return function (l) {
      return function (a) {
        return function (s) {
          var c = a(s);
          return (
            kc.match(s) && i(l, 'refetchOnFocus'),
            Pc.match(s) && i(l, 'refetchOnReconnect'),
            c
          );
        };
      };
    };
    function i(l, a) {
      var s = l.getState()[t],
        c = s.queries,
        p = s.subscriptions;
      n.batch(function () {
        for (var d = 0, y = Object.keys(p); d < y.length; d++) {
          var g = y[d],
            w = c[g],
            C = p[g];
          if (!(!C || !w)) {
            var h =
              Object.values(C).some(function (f) {
                return f[a] === !0;
              }) ||
              (Object.values(C).every(function (f) {
                return f[a] === void 0;
              }) &&
                s.config[a]);
            h &&
              (Object.keys(C).length === 0
                ? l.dispatch(o({ queryCacheKey: g }))
                : w.status !== Ee.uninitialized && l.dispatch(u(w, g)));
          }
        }
      });
    }
  },
  Dd = new Error('Promise never resolved before cacheEntryRemoved.'),
  PS = function (e) {
    var t = e.api,
      n = e.reducerPath,
      r = e.context,
      u = e.queryThunk,
      o = e.mutationThunk,
      i = ds(u),
      l = ds(o),
      a = Yn(u, o);
    return function (s) {
      var c = {};
      return function (y) {
        return function (g) {
          var w = s.getState(),
            C = y(g),
            h = p(g);
          if (u.pending.match(g)) {
            var f = w[n].queries[h],
              v = s.getState()[n].queries[h];
            !f &&
              v &&
              d(
                g.meta.arg.endpointName,
                g.meta.arg.originalArgs,
                h,
                s,
                g.meta.requestId
              );
          } else if (o.pending.match(g)) {
            var v = s.getState()[n].mutations[h];
            v &&
              d(
                g.meta.arg.endpointName,
                g.meta.arg.originalArgs,
                h,
                s,
                g.meta.requestId
              );
          } else if (a(g)) {
            var m = c[h];
            m != null &&
              m.valueResolved &&
              (m.valueResolved({ data: g.payload, meta: g.meta.baseQueryMeta }),
              delete m.valueResolved);
          } else if (
            t.internalActions.removeQueryResult.match(g) ||
            t.internalActions.removeMutationResult.match(g)
          ) {
            var m = c[h];
            m && (delete c[h], m.cacheEntryRemoved());
          } else if (t.util.resetApiState.match(g))
            for (var _ = 0, E = Object.entries(c); _ < E.length; _++) {
              var P = E[_],
                x = P[0],
                m = P[1];
              delete c[x], m.cacheEntryRemoved();
            }
          return C;
        };
      };
      function p(y) {
        return i(y)
          ? y.meta.arg.queryCacheKey
          : l(y)
          ? y.meta.requestId
          : t.internalActions.removeQueryResult.match(y)
          ? y.payload.queryCacheKey
          : t.internalActions.removeMutationResult.match(y)
          ? bu(y.payload)
          : '';
      }
      function d(y, g, w, C, h) {
        var f = r.endpointDefinitions[y],
          v = f == null ? void 0 : f.onCacheEntryAdded;
        if (!!v) {
          var m = {},
            _ = new Promise(function (M) {
              m.cacheEntryRemoved = M;
            }),
            E = Promise.race([
              new Promise(function (M) {
                m.valueResolved = M;
              }),
              _.then(function () {
                throw Dd;
              }),
            ]);
          E.catch(function () {}), (c[w] = m);
          var P = t.endpoints[y].select(f.type === zt.query ? g : w),
            x = C.dispatch(function (M, $, U) {
              return U;
            }),
            R = Pn(De({}, C), {
              getCacheEntry: function () {
                return P(C.getState());
              },
              requestId: h,
              extra: x,
              updateCachedData:
                f.type === zt.query
                  ? function (M) {
                      return C.dispatch(t.util.updateQueryData(y, g, M));
                    }
                  : void 0,
              cacheDataLoaded: E,
              cacheEntryRemoved: _,
            }),
            T = v(g, R);
          Promise.resolve(T).catch(function (M) {
            if (M !== Dd) throw M;
          });
        }
      }
    };
  },
  xS = function (e) {
    var t = e.api,
      n = e.context,
      r = e.queryThunk,
      u = e.mutationThunk,
      o = _c(r, u),
      i = zu(r, u),
      l = Yn(r, u);
    return function (a) {
      var s = {};
      return function (c) {
        return function (p) {
          var d,
            y,
            g,
            w = c(p);
          if (o(p)) {
            var C = p.meta,
              h = C.requestId,
              f = C.arg,
              v = f.endpointName,
              m = f.originalArgs,
              _ = n.endpointDefinitions[v],
              E = _ == null ? void 0 : _.onQueryStarted;
            if (E) {
              var P = {},
                x = new Promise(function (te, J) {
                  (P.resolve = te), (P.reject = J);
                });
              x.catch(function () {}), (s[h] = P);
              var R = t.endpoints[v].select(_.type === zt.query ? m : h),
                T = a.dispatch(function (te, J, j) {
                  return j;
                }),
                M = Pn(De({}, a), {
                  getCacheEntry: function () {
                    return R(a.getState());
                  },
                  requestId: h,
                  extra: T,
                  updateCachedData:
                    _.type === zt.query
                      ? function (te) {
                          return a.dispatch(t.util.updateQueryData(v, m, te));
                        }
                      : void 0,
                  queryFulfilled: x,
                });
              E(m, M);
            }
          } else if (l(p)) {
            var $ = p.meta,
              h = $.requestId,
              U = $.baseQueryMeta;
            (d = s[h]) == null || d.resolve({ data: p.payload, meta: U }),
              delete s[h];
          } else if (i(p)) {
            var ee = p.meta,
              h = ee.requestId,
              Z = ee.rejectedWithValue,
              U = ee.baseQueryMeta;
            (g = s[h]) == null ||
              g.reject({
                error: (y = p.payload) != null ? y : p.error,
                isUnhandledError: !Z,
                meta: U,
              }),
              delete s[h];
          }
          return w;
        };
      };
    };
  },
  OS = function (e) {
    var t = e.api,
      n = e.context.apiUid,
      r = e.reducerPath;
    return function (u) {
      var o = !1;
      return function (i) {
        return function (l) {
          var a, s;
          o ||
            ((o = !0), u.dispatch(t.internalActions.middlewareRegistered(n)));
          var c = i(l);
          return (
            t.util.resetApiState.match(l) &&
              u.dispatch(t.internalActions.middlewareRegistered(n)),
            typeof process < 'u',
            c
          );
        };
      };
    };
  };
function CS(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = { invalidateTags: at(t + '/invalidateTags') },
    u = [OS, wS, _S, ES, kS, PS, xS].map(function (l) {
      return l(Pn(De({}, e), { refetchQuery: i }));
    }),
    o = function (l) {
      return function (a) {
        var s = Mr.apply(
          void 0,
          u.map(function (c) {
            return c(l);
          })
        )(a);
        return function (c) {
          return l.getState()[t] ? s(c) : a(c);
        };
      };
    };
  return { middleware: o, actions: r };
  function i(l, a, s) {
    return (
      s === void 0 && (s = {}),
      n(
        De(
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
function TS(e) {
  var t = e.serializeQueryArgs,
    n = e.queryThunk,
    r = e.mutationThunk,
    u = e.api,
    o = e.context,
    i = {},
    l = {},
    a = u.internalActions,
    s = a.unsubscribeQueryResult,
    c = a.removeMutationResult,
    p = a.updateSubscriptionOptions;
  return {
    buildInitiateQuery: g,
    buildInitiateMutation: w,
    getRunningOperationPromises: y,
    getRunningOperationPromise: d,
  };
  function d(C, h) {
    var f = o.endpointDefinitions[C];
    if (f.type === zt.query) {
      var v = t({ queryArgs: h, endpointDefinition: f, endpointName: C });
      return i[v];
    } else return l[h];
  }
  function y() {
    return ci(ci([], Object.values(i)), Object.values(l)).filter(function (C) {
      return !!C;
    });
  }
  function g(C, h) {
    var f = function (v, m) {
      var _ = m === void 0 ? {} : m,
        E = _.subscribe,
        P = E === void 0 ? !0 : E,
        x = _.forceRefetch,
        R = _.subscriptionOptions;
      return function (T, M) {
        var $ = t({ queryArgs: v, endpointDefinition: h, endpointName: C }),
          U = n({
            type: 'query',
            subscribe: P,
            forceRefetch: x,
            subscriptionOptions: R,
            endpointName: C,
            originalArgs: v,
            queryCacheKey: $,
          }),
          ee = T(U),
          Z = ee.requestId,
          te = ee.abort,
          J = Object.assign(
            Promise.all([i[$], ee]).then(function () {
              return u.endpoints[C].select(v)(M());
            }),
            {
              arg: v,
              requestId: Z,
              subscriptionOptions: R,
              queryCacheKey: $,
              abort: te,
              unwrap: function () {
                return ll(this, null, function () {
                  var j;
                  return il(this, function (z) {
                    switch (z.label) {
                      case 0:
                        return [4, J];
                      case 1:
                        if (((j = z.sent()), j.isError)) throw j.error;
                        return [2, j.data];
                    }
                  });
                });
              },
              refetch: function () {
                T(f(v, { subscribe: !1, forceRefetch: !0 }));
              },
              unsubscribe: function () {
                P && T(s({ queryCacheKey: $, requestId: Z }));
              },
              updateSubscriptionOptions: function (j) {
                (J.subscriptionOptions = j),
                  T(
                    p({
                      endpointName: C,
                      requestId: Z,
                      queryCacheKey: $,
                      options: j,
                    })
                  );
              },
            }
          );
        return (
          i[$] ||
            ((i[$] = J),
            J.then(function () {
              delete i[$];
            })),
          J
        );
      };
    };
    return f;
  }
  function w(C) {
    return function (h, f) {
      var v = f === void 0 ? {} : f,
        m = v.track,
        _ = m === void 0 ? !0 : m,
        E = v.fixedCacheKey;
      return function (P, x) {
        var R = r({
            type: 'mutation',
            endpointName: C,
            originalArgs: h,
            track: _,
            fixedCacheKey: E,
          }),
          T = P(R),
          M = T.requestId,
          $ = T.abort,
          U = T.unwrap,
          ee = T.unwrap()
            .then(function (J) {
              return { data: J };
            })
            .catch(function (J) {
              return { error: J };
            }),
          Z = function () {
            P(c({ requestId: M, fixedCacheKey: E }));
          },
          te = Object.assign(ee, {
            arg: T.arg,
            requestId: M,
            abort: $,
            unwrap: U,
            unsubscribe: Z,
            reset: Z,
          });
        return (
          (l[M] = te),
          te.then(function () {
            delete l[M];
          }),
          E &&
            ((l[E] = te),
            te.then(function () {
              l[E] === te && delete l[E];
            })),
          te
        );
      };
    };
  }
}
function ln(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, ci([e], t));
}
var $d = Symbol(),
  RS = function () {
    return {
      name: $d,
      init: function (e, t, n) {
        var r = t.baseQuery,
          u = t.tagTypes,
          o = t.reducerPath,
          i = t.serializeQueryArgs,
          l = t.keepUnusedDataFor,
          a = t.refetchOnMountOrArgChange,
          s = t.refetchOnFocus,
          c = t.refetchOnReconnect;
        gc();
        var p = function (j) {
          return typeof process < 'u', j;
        };
        Object.assign(e, {
          reducerPath: o,
          endpoints: {},
          internalActions: {
            onOnline: Pc,
            onOffline: Uh,
            onFocus: kc,
            onFocusLost: qh,
          },
          util: {},
        });
        var d = dS({
            baseQuery: r,
            reducerPath: o,
            context: n,
            api: e,
            serializeQueryArgs: i,
          }),
          y = d.queryThunk,
          g = d.mutationThunk,
          w = d.patchQueryData,
          C = d.updateQueryData,
          h = d.prefetch,
          f = d.buildMatchThunkActions,
          v = pS({
            context: n,
            queryThunk: y,
            mutationThunk: g,
            reducerPath: o,
            assertTagType: p,
            config: {
              refetchOnFocus: s,
              refetchOnReconnect: c,
              refetchOnMountOrArgChange: a,
              keepUnusedDataFor: l,
              reducerPath: o,
            },
          }),
          m = v.reducer,
          _ = v.actions;
        ln(e.util, {
          patchQueryData: w,
          updateQueryData: C,
          prefetch: h,
          resetApiState: _.resetApiState,
        }),
          ln(e.internalActions, _),
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
        var E = CS({
            reducerPath: o,
            context: n,
            queryThunk: y,
            mutationThunk: g,
            api: e,
            assertTagType: p,
          }),
          P = E.middleware,
          x = E.actions;
        ln(e.util, x), ln(e, { reducer: m, middleware: P });
        var R = yS({ serializeQueryArgs: i, reducerPath: o }),
          T = R.buildQuerySelector,
          M = R.buildMutationSelector,
          $ = R.selectInvalidatedBy;
        ln(e.util, { selectInvalidatedBy: $ });
        var U = TS({
            queryThunk: y,
            mutationThunk: g,
            api: e,
            serializeQueryArgs: i,
            context: n,
          }),
          ee = U.buildInitiateQuery,
          Z = U.buildInitiateMutation,
          te = U.getRunningOperationPromises,
          J = U.getRunningOperationPromise;
        return (
          ln(e.util, {
            getRunningOperationPromises: te,
            getRunningOperationPromise: J,
          }),
          {
            name: $d,
            injectEndpoint: function (j, z) {
              var W,
                oe,
                ne = e;
              (oe = (W = ne.endpoints)[j]) != null || (W[j] = {}),
                aS(z)
                  ? ln(
                      ne.endpoints[j],
                      { select: T(j, z), initiate: ee(j, z) },
                      f(y, j)
                    )
                  : sS(z) &&
                    ln(
                      ne.endpoints[j],
                      { select: M(), initiate: Z(j) },
                      f(g, j)
                    );
            },
          }
        );
      },
    };
  },
  jS =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, u = e.length; n < r; n++, u++) e[u] = t[n];
      return e;
    },
  AS = Object.defineProperty,
  IS = Object.defineProperties,
  MS = Object.getOwnPropertyDescriptors,
  zd = Object.getOwnPropertySymbols,
  NS = Object.prototype.hasOwnProperty,
  DS = Object.prototype.propertyIsEnumerable,
  bd = function (e, t, n) {
    return t in e
      ? AS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Vt = function (e, t) {
    for (var n in t || (t = {})) NS.call(t, n) && bd(e, n, t[n]);
    if (zd)
      for (var r = 0, u = zd(t); r < u.length; r++) {
        var n = u[r];
        DS.call(t, n) && bd(e, n, t[n]);
      }
    return e;
  },
  Io = function (e, t) {
    return IS(e, MS(t));
  };
function Ld(e, t, n, r) {
  var u = H.exports.useMemo(
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
    o = H.exports.useRef(u);
  return (
    H.exports.useEffect(
      function () {
        o.current.serialized !== u.serialized && (o.current = u);
      },
      [u]
    ),
    o.current.serialized === u.serialized ? o.current.queryArgs : e
  );
}
var ra = Symbol();
function ua(e) {
  var t = H.exports.useRef(e);
  return (
    H.exports.useEffect(
      function () {
        ri(t.current, e) || (t.current = e);
      },
      [e]
    ),
    ri(t.current, e) ? t.current : e
  );
}
var $S =
    typeof window < 'u' && window.document && window.document.createElement
      ? H.exports.useLayoutEffect
      : H.exports.useEffect,
  zS = function (e) {
    return e;
  },
  bS = function (e) {
    return e;
  },
  LS = function (e) {
    return e.isUninitialized
      ? Io(Vt({}, e), {
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: Ee.pending,
        })
      : e;
  };
function FS(e) {
  var t = e.api,
    n = e.moduleOptions,
    r = n.batch,
    u = n.useDispatch,
    o = n.useSelector,
    i = n.useStore,
    l = n.unstable__sideEffectsInRender,
    a = e.serializeQueryArgs,
    s = e.context,
    c = l
      ? function (w) {
          return w();
        }
      : H.exports.useEffect;
  return { buildQueryHooks: y, buildMutationHook: g, usePrefetch: d };
  function p(w, C, h) {
    if ((C == null ? void 0 : C.endpointName) && w.isUninitialized) {
      var f = C.endpointName,
        v = s.endpointDefinitions[f];
      a({
        queryArgs: C.originalArgs,
        endpointDefinition: v,
        endpointName: f,
      }) === a({ queryArgs: h, endpointDefinition: v, endpointName: f }) &&
        (C = void 0);
    }
    var m = w.isSuccess ? w.data : C == null ? void 0 : C.data;
    m === void 0 && (m = w.data);
    var _ = m !== void 0,
      E = w.isLoading,
      P = !_ && E,
      x = w.isSuccess || (E && _);
    return Io(Vt({}, w), {
      data: m,
      currentData: w.data,
      isFetching: E,
      isLoading: P,
      isSuccess: x,
    });
  }
  function d(w, C) {
    var h = u(),
      f = ua(C);
    return H.exports.useCallback(
      function (v, m) {
        return h(t.util.prefetch(w, v, Vt(Vt({}, f), m)));
      },
      [w, h, f]
    );
  }
  function y(w) {
    var C = function (v, m) {
        var _ = m === void 0 ? {} : m,
          E = _.refetchOnReconnect,
          P = _.refetchOnFocus,
          x = _.refetchOnMountOrArgChange,
          R = _.skip,
          T = R === void 0 ? !1 : R,
          M = _.pollingInterval,
          $ = M === void 0 ? 0 : M,
          U = t.endpoints[w].initiate,
          ee = u(),
          Z = Ld(T ? Fn : v, a, s.endpointDefinitions[w], w),
          te = ua({
            refetchOnReconnect: E,
            refetchOnFocus: P,
            pollingInterval: $,
          }),
          J = H.exports.useRef(),
          j = J.current || {},
          z = j.queryCacheKey,
          W = j.requestId,
          oe = o(function (ne) {
            var le;
            return (
              !!z &&
              !!W &&
              !((le = ne[t.reducerPath].subscriptions[z]) != null && le[W])
            );
          });
        return (
          c(
            function () {
              J.current = void 0;
            },
            [oe]
          ),
          c(
            function () {
              var ne,
                le = J.current;
              if ((typeof process < 'u', Z === Fn)) {
                le == null || le.unsubscribe(), (J.current = void 0);
                return;
              }
              var Pe =
                (ne = J.current) == null ? void 0 : ne.subscriptionOptions;
              if (!le || le.arg !== Z) {
                le == null || le.unsubscribe();
                var _e = ee(U(Z, { subscriptionOptions: te, forceRefetch: x }));
                J.current = _e;
              } else te !== Pe && le.updateSubscriptionOptions(te);
            },
            [ee, U, x, Z, te, oe]
          ),
          H.exports.useEffect(function () {
            return function () {
              var ne;
              (ne = J.current) == null || ne.unsubscribe(),
                (J.current = void 0);
            };
          }, []),
          H.exports.useMemo(function () {
            return {
              refetch: function () {
                var ne;
                return void ((ne = J.current) == null ? void 0 : ne.refetch());
              },
            };
          }, [])
        );
      },
      h = function (v) {
        var m = v === void 0 ? {} : v,
          _ = m.refetchOnReconnect,
          E = m.refetchOnFocus,
          P = m.pollingInterval,
          x = P === void 0 ? 0 : P,
          R = t.endpoints[w].initiate,
          T = u(),
          M = H.exports.useState(ra),
          $ = M[0],
          U = M[1],
          ee = H.exports.useRef(),
          Z = ua({
            refetchOnReconnect: _,
            refetchOnFocus: E,
            pollingInterval: x,
          });
        c(
          function () {
            var j,
              z,
              W = (j = ee.current) == null ? void 0 : j.subscriptionOptions;
            Z !== W &&
              ((z = ee.current) == null || z.updateSubscriptionOptions(Z));
          },
          [Z]
        );
        var te = H.exports.useRef(Z);
        c(
          function () {
            te.current = Z;
          },
          [Z]
        );
        var J = H.exports.useCallback(
          function (j, z) {
            z === void 0 && (z = !1);
            var W;
            return (
              r(function () {
                var oe;
                (oe = ee.current) == null || oe.unsubscribe(),
                  (ee.current = W =
                    T(
                      R(j, {
                        subscriptionOptions: te.current,
                        forceRefetch: !z,
                      })
                    )),
                  U(j);
              }),
              W
            );
          },
          [T, R]
        );
        return (
          H.exports.useEffect(function () {
            return function () {
              var j;
              (j = ee == null ? void 0 : ee.current) == null || j.unsubscribe();
            };
          }, []),
          H.exports.useEffect(
            function () {
              $ !== ra && !ee.current && J($, !0);
            },
            [$, J]
          ),
          H.exports.useMemo(
            function () {
              return [J, $];
            },
            [J, $]
          )
        );
      },
      f = function (v, m) {
        var _ = m === void 0 ? {} : m,
          E = _.skip,
          P = E === void 0 ? !1 : E,
          x = _.selectFromResult,
          R = x === void 0 ? zS : x,
          T = t.endpoints[w].select,
          M = Ld(P ? Fn : v, a, s.endpointDefinitions[w], w),
          $ = H.exports.useRef(),
          U = H.exports.useMemo(
            function () {
              return Yt(
                [
                  T(M),
                  function (j, z) {
                    return z;
                  },
                  function (j) {
                    return M;
                  },
                ],
                p
              );
            },
            [T, M]
          ),
          ee = H.exports.useMemo(
            function () {
              return Yt([U], R);
            },
            [U, R]
          ),
          Z = o(function (j) {
            return ee(j, $.current);
          }, ri),
          te = i(),
          J = U(te.getState(), $.current);
        return (
          $S(
            function () {
              $.current = J;
            },
            [J]
          ),
          Z
        );
      };
    return {
      useQueryState: f,
      useQuerySubscription: C,
      useLazyQuerySubscription: h,
      useLazyQuery: function (v) {
        var m = h(v),
          _ = m[0],
          E = m[1],
          P = f(E, Io(Vt({}, v), { skip: E === ra })),
          x = H.exports.useMemo(
            function () {
              return { lastArg: E };
            },
            [E]
          );
        return H.exports.useMemo(
          function () {
            return [_, P, x];
          },
          [_, P, x]
        );
      },
      useQuery: function (v, m) {
        var _ = C(v, m),
          E = f(
            v,
            Vt(
              {
                selectFromResult:
                  v === Fn || (m == null ? void 0 : m.skip) ? void 0 : LS,
              },
              m
            )
          ),
          P = E.data,
          x = E.status,
          R = E.isLoading,
          T = E.isSuccess,
          M = E.isError,
          $ = E.error;
        return (
          H.exports.useDebugValue({
            data: P,
            status: x,
            isLoading: R,
            isSuccess: T,
            isError: M,
            error: $,
          }),
          H.exports.useMemo(
            function () {
              return Vt(Vt({}, E), _);
            },
            [E, _]
          )
        );
      },
    };
  }
  function g(w) {
    return function (C) {
      var h = C === void 0 ? {} : C,
        f = h.selectFromResult,
        v = f === void 0 ? bS : f,
        m = h.fixedCacheKey,
        _ = t.endpoints[w],
        E = _.select,
        P = _.initiate,
        x = u(),
        R = H.exports.useState(),
        T = R[0],
        M = R[1];
      H.exports.useEffect(
        function () {
          return function () {
            (T != null && T.arg.fixedCacheKey) || T == null || T.reset();
          };
        },
        [T]
      );
      var $ = H.exports.useCallback(
          function (ze) {
            var Re = x(P(ze, { fixedCacheKey: m }));
            return M(Re), Re;
          },
          [x, P, m]
        ),
        U = (T || {}).requestId,
        ee = H.exports.useMemo(
          function () {
            return Yt(
              [
                E({
                  fixedCacheKey: m,
                  requestId: T == null ? void 0 : T.requestId,
                }),
              ],
              v
            );
          },
          [E, T, v, m]
        ),
        Z = o(ee, ri),
        te = m == null ? (T == null ? void 0 : T.arg.originalArgs) : void 0,
        J = H.exports.useCallback(
          function () {
            r(function () {
              T && M(void 0),
                m &&
                  x(
                    t.internalActions.removeMutationResult({
                      requestId: U,
                      fixedCacheKey: m,
                    })
                  );
            });
          },
          [x, m, T, U]
        ),
        j = Z.endpointName,
        z = Z.data,
        W = Z.status,
        oe = Z.isLoading,
        ne = Z.isSuccess,
        le = Z.isError,
        Pe = Z.error;
      H.exports.useDebugValue({
        endpointName: j,
        data: z,
        status: W,
        isLoading: oe,
        isSuccess: ne,
        isError: le,
        error: Pe,
      });
      var _e = H.exports.useMemo(
        function () {
          return Io(Vt({}, Z), { originalArgs: te, reset: J });
        },
        [Z, te, J]
      );
      return H.exports.useMemo(
        function () {
          return [$, _e];
        },
        [$, _e]
      );
    };
  }
}
var di;
(function (e) {
  (e.query = 'query'), (e.mutation = 'mutation');
})(di || (di = {}));
function qS(e) {
  return e.type === di.query;
}
function US(e) {
  return e.type === di.mutation;
}
function oa(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function mo(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, jS([e], t));
}
var QS = Symbol(),
  BS = function (e) {
    var t = e === void 0 ? {} : e,
      n = t.batch,
      r = n === void 0 ? mi.exports.unstable_batchedUpdates : n,
      u = t.useDispatch,
      o = u === void 0 ? Wg : u,
      i = t.useSelector,
      l = i === void 0 ? Rg : i,
      a = t.useStore,
      s = a === void 0 ? gh : a,
      c = t.unstable__sideEffectsInRender,
      p = c === void 0 ? !1 : c;
    return {
      name: QS,
      init: function (d, y, g) {
        var w = y.serializeQueryArgs,
          C = d,
          h = FS({
            api: d,
            moduleOptions: {
              batch: r,
              useDispatch: o,
              useSelector: l,
              useStore: s,
              unstable__sideEffectsInRender: p,
            },
            serializeQueryArgs: w,
            context: g,
          }),
          f = h.buildQueryHooks,
          v = h.buildMutationHook,
          m = h.usePrefetch;
        return (
          mo(C, { usePrefetch: m }),
          mo(g, { batch: r }),
          {
            injectEndpoint: function (_, E) {
              if (qS(E)) {
                var P = f(_),
                  x = P.useQuery,
                  R = P.useLazyQuery,
                  T = P.useLazyQuerySubscription,
                  M = P.useQueryState,
                  $ = P.useQuerySubscription;
                mo(C.endpoints[_], {
                  useQuery: x,
                  useLazyQuery: R,
                  useLazyQuerySubscription: T,
                  useQueryState: M,
                  useQuerySubscription: $,
                }),
                  (d['use' + oa(_) + 'Query'] = x),
                  (d['useLazy' + oa(_) + 'Query'] = R);
              } else if (US(E)) {
                var U = v(_);
                mo(C.endpoints[_], { useMutation: U }),
                  (d['use' + oa(_) + 'Mutation'] = U);
              }
            },
          }
        );
      },
    };
  },
  sl = gS(RS(), BS());
const ia = sl({
    reducerPath: 'auth/api',
    baseQuery: al({ baseUrl: `${vi}/auth` }),
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
  VS = zh.actions,
  WS = zh.reducer,
  Fd = {
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
  Wh = Wu.exports.createSlice({
    name: 'user',
    initialState: Fd,
    reducers: {
      setUserData(e, t) {
        e.userData = { ...e.userData, ...t.payload };
      },
      resetUserState: () => Fd,
    },
  }),
  la = { credentials: 'include', method: 'PUT' },
  qd = e => (delete e.status, e),
  aa = sl({
    reducerPath: 'user/api',
    baseQuery: al({ baseUrl: `${vi}/user` }),
    endpoints: e => ({
      fetchUserData: e.query({
        query: t => ({ url: `/${t}`, credentials: 'include' }),
      }),
      updateProfile: e.query({
        query: t => ({ ...la, url: '/profile', body: t }),
        transformResponse: qd,
      }),
      updateAvatar: e.query({
        query: t => ({ ...la, url: '/profile/avatar', body: t }),
        transformResponse: qd,
      }),
      updatePassword: e.query({
        query: t => ({
          ...la,
          url: '/password',
          body: t,
          responseHandler: n => n.text(),
        }),
      }),
    }),
  }),
  HS = Wh.actions,
  KS = Wh.reducer,
  sa = sl({
    reducerPath: 'resources/api',
    baseQuery: al({ baseUrl: `${vi}/resources` }),
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
  GS = { leaders: [] },
  Hh = Wu.exports.createSlice({
    name: 'leaderBoard',
    initialState: GS,
    reducers: {
      setLeaders(e, { payload: t }) {
        e.leaders = t;
      },
      setLeaderUserData(e, { payload: t }) {
        e.leaders = e.leaders.map(n => {
          const { id: r, avatar: u, display_name: o, login: i } = t;
          return r === n.id ? { ...n, avatar: u, nickname: o || i } : n;
        });
      },
    },
  });
var rr = (e => (
  (e.TEAM_NAME = 'andromeda'), (e.RATING_FIELD_NAME = 'highScore'), e
))(rr || {});
const ca = { method: 'POST', credentials: 'include' },
  fa = sl({
    reducerPath: 'leaderBoard/api',
    baseQuery: al({ baseUrl: `${vi}/leaderboard` }),
    endpoints: e => ({
      addLeaderBoard: e.query({
        query: ({
          data: t,
          ratingFieldName: n = rr.RATING_FIELD_NAME,
          teamName: r = rr.TEAM_NAME,
        }) => ({
          ...ca,
          url: '',
          body: { data: t, ratingFieldName: n, teamName: r },
          responseHandler: u => u.text(),
        }),
      }),
      fetchAllLeaderBoard: e.query({
        query: ({
          ratingFieldName: t = rr.RATING_FIELD_NAME,
          cursor: n = 0,
          limit: r = 13,
        }) => ({
          ...ca,
          url: '/all',
          body: { ratingFieldName: t, cursor: n, limit: r },
        }),
        transformResponse: t => t.map(n => n.data),
      }),
      fetchTeamLeaderBoard: e.query({
        query: ({
          teamName: t = rr.TEAM_NAME,
          ratingFieldName: n = rr.RATING_FIELD_NAME,
          cursor: r = 0,
          limit: u = 13,
        }) => ({
          ...ca,
          url: `/${t}`,
          body: { ratingFieldName: n, cursor: r, limit: u },
        }),
        transformResponse: t => t.map(n => n.data),
      }),
    }),
  }),
  YS = Hh.actions,
  XS = Hh.reducer,
  ZS = N1({
    reducer: {
      [aa.reducerPath]: aa.reducer,
      [ia.reducerPath]: ia.reducer,
      [sa.reducerPath]: sa.reducer,
      [fa.reducerPath]: fa.reducer,
      user: KS,
      auth: WS,
      game: H1,
      leaderBoard: XS,
    },
    middleware: e =>
      e({ serializableCheck: !1 })
        .concat(aa.middleware)
        .concat(ia.middleware)
        .concat(sa.middleware)
        .concat(fa.middleware),
    devTools: !1,
  });
({ ...HS, ...VS, ...W1, ...YS });
const JS = '_titlePage_1hujb_1',
  ew = { titlePage: JS };
function tw(e) {
  return Oe('h1', { className: ew.titlePage, children: e.children });
}
const nw = '_errorBoundary_13950_1',
  rw = '_errorBoundary__content_13950_1',
  uw = '_errorBoundary__message_13950_1',
  ow = '_errorBoundary__message_button_13950_1',
  go = {
    errorBoundary: nw,
    errorBoundary__content: rw,
    errorBoundary__message: uw,
    errorBoundary__message_button: ow,
  };
class iw extends H.exports.Component {
  constructor(n) {
    super(n);
    Sl(this, 'messageError');
    Sl(this, 'resetPage', () => {
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
      return Oe('div', {
        className: go.errorBoundary,
        children: pa('div', {
          className: go.errorBoundary__content,
          children: [
            Oe(tw, { children: 'App-Error' }),
            Oe('p', { children: n }),
            pa('div', {
              className: go.errorBoundary__message,
              children: [
                Oe('span', { children: r }),
                Oe(Kh, {
                  className: go.errorBoundary__message_button,
                  onClick: this.resetPage,
                  children:
                    '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443',
                }),
                Oe('span', {
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
function Kh(e) {
  const {
      className: t,
      children: n,
      typeButton: r,
      sizeButton: u,
      positionButton: o,
      ...i
    } = e,
    l = Ry('button', t, {
      [`button__type_${r}`]: !!r,
      [`button__position_${o}`]: !!o,
      [`button_size_${u}`]: !!u,
    });
  return Oe('button', { ...i, className: l, children: n });
}
const Ud = () => {
    if (typeof window < 'u') {
      const e = document;
      return (
        e.fullscreenElement ||
        e.mozFullScreenElement ||
        e.webkitFullscreenElement ||
        e.msFullscreenElement
      );
    } else console.log('You are on the server');
  },
  lw = e => {
    e.requestFullscreen
      ? e.requestFullscreen()
      : e.msRequestFullscreen
      ? e.msRequestFullscreen()
      : e.mozRequestFullScreen
      ? e.mozRequestFullScreen()
      : e.webkitRequestFullscreen &&
        e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  },
  aw = e => {
    const [t, n] = H.exports.useState(Ud()),
      r = () => {
        e.current !== null && lw(e.current);
      },
      u = () => {
        if (typeof window < 'u') {
          const o = document;
          o.exitFullscreen
            ? o.exitFullscreen()
            : o.msExitFullscreen
            ? o.msExitFullscreen()
            : o.mozCancelFullScreen
            ? o.mozCancelFullScreen()
            : o.webkitExitFullscreen && o.webkitExitFullscreen();
        } else console.log('You are on the server');
      };
    return (
      H.exports.useLayoutEffect(() => {
        var i;
        function o() {
          n(Ud());
        }
        return (
          (i = window == null ? void 0 : window.document) == null ||
            i.addEventListener('fullscreenchange', o),
          () => {
            var l;
            (l = window == null ? void 0 : window.document) == null ||
              l.removeEventListener('fullscreenchange', o);
          }
        );
      }),
      { isFullscreen: t, setFullscreen: r, exitFullscreen: u }
    );
  },
  Qd = {
    'button-fullscreen': '_button-fullscreen_16rgc_1',
    'fullscreen-open': '_fullscreen-open_16rgc_11',
    'fullscreen-exit': '_fullscreen-exit_16rgc_13',
  };
function sw(e) {
  const { elemRef: t } = e,
    { isFullscreen: n, setFullscreen: r, exitFullscreen: u } = aw(t),
    o = n ? 'exit' : 'open',
    i = () => {
      n ? u() : r();
    };
  return Oe(Kh, {
    className: Qd['button-fullscreen'],
    onClick: i,
    positionButton: 'absolute',
    title: 'Fullscreen',
    children: Oe('span', { className: Qd[`fullscreen-${o}`] }),
  });
}
function cw() {
  const e = H.exports.useRef(null),
    t = H.exports.useRef(null),
    n = H.exports.useCallback(() => {
      var u;
      if (e) {
        const { amount: o, size: i, duration: l } = Ty,
          { giant: a, max: s, min: c } = i,
          p = (y, g) => y + Math.random() * (g - y),
          d = document.createDocumentFragment();
        for (let y = 0; y < o; y++) {
          const g = document.createElement('div'),
            w = Math.round(Math.random() * 10) === 0 ? a : p(c, s);
          g.classList.add(_l.app__star),
            (g.style.width = `${w}px`),
            (g.style.height = `${w}px`),
            (g.style.left = `${p(0, 100)}%`),
            (g.style.top = `${p(0, 100)}%`),
            (g.style.boxShadow = `0 0 ${w}px ${w / 2}px #043668`),
            (g.style.animationDuration = `${p(l.min, l.max)}s`),
            d.append(g);
        }
        (u = e.current) == null || u.after(d);
      }
    }, [e]);
  return (
    H.exports.useEffect(() => {
      n(),
        (async () => {
          const i = await (await fetch(`http://localhost:${3001}`)).json();
          console.log(i);
        })();
    }, []),
    pa('div', {
      className: _l.app,
      ref: t,
      children: [
        Oe('main', { className: _l.app__content, children: 'SSR...' }),
        Oe(sw, { elemRef: t }),
        Oe('div', { ref: e }),
      ],
    })
  );
}
function fw() {
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
var Gh,
  Bd = mi.exports;
Bd.createRoot, (Gh = Bd.hydrateRoot);
var Yh;
dw();
function dw() {
  Yh = function (e) {
    return e;
  };
}
const Vd = document.getElementById('root'),
  pw = Yh(e => Oe(cw, { ...e }));
if (Vd)
  Gh(
    Vd,
    Oe(Jd.StrictMode, {
      children: Oe(nm, {
        children: Oe(Bg, {
          store: ZS,
          children: Oe(iw, { children: Oe(pw, {}) }),
        }),
      }),
    })
  );
else throw new Error('HTML element with id = "root" not found');
fw();
