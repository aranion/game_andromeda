var ey = Object.defineProperty;
var ty = (e, t, n) =>
  t in e
    ? ey(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Sl = (e, t, n) => (ty(e, typeof t != 'symbol' ? t + '' : t, n), n);
function ny(e, t) {
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
function ry(e) {
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
var G = { exports: {} },
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
  uy = Symbol.for('react.portal'),
  oy = Symbol.for('react.fragment'),
  iy = Symbol.for('react.strict_mode'),
  ly = Symbol.for('react.profiler'),
  ay = Symbol.for('react.provider'),
  sy = Symbol.for('react.context'),
  cy = Symbol.for('react.forward_ref'),
  fy = Symbol.for('react.suspense'),
  dy = Symbol.for('react.memo'),
  py = Symbol.for('react.lazy'),
  Bc = Symbol.iterator;
function vy(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Bc && e[Bc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Qd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Vd = Object.assign,
  Bd = {};
function Nr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bd),
    (this.updater = n || Qd);
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
function Wd() {}
Wd.prototype = Nr.prototype;
function ds(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bd),
    (this.updater = n || Qd);
}
var ps = (ds.prototype = new Wd());
ps.constructor = ds;
Vd(ps, Nr.prototype);
ps.isPureReactComponent = !0;
var Wc = Array.isArray,
  Hd = Object.prototype.hasOwnProperty,
  vs = { current: null },
  Kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gd(e, t, n) {
  var r,
    u = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Hd.call(t, r) && !Kd.hasOwnProperty(r) && (u[r] = t[r]);
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
    _owner: vs.current,
  };
}
function hy(e, t) {
  return {
    $$typeof: Lu,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hs(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Lu;
}
function yy(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Hc = /\/+/g;
function wl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? yy('' + e.key)
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
          case uy:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (u = u(i)),
      (e = r === '' ? '.' + wl(i, 0) : r),
      Wc(u)
        ? ((n = ''),
          e != null && (n = e.replace(Hc, '$&/') + '/'),
          So(u, t, n, '', function (s) {
            return s;
          }))
        : u != null &&
          (hs(u) &&
            (u = hy(
              u,
              n +
                (!u.key || (i && i.key === u.key)
                  ? ''
                  : ('' + u.key).replace(Hc, '$&/') + '/') +
                e
            )),
          t.push(u)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Wc(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + wl(o, l);
      i += So(o, t, n, a, u);
    }
  else if (((a = vy(e)), typeof a == 'function'))
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
function Xu(e, t, n) {
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
function my(e) {
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
  gy = {
    ReactCurrentDispatcher: et,
    ReactCurrentBatchConfig: wo,
    ReactCurrentOwner: vs,
  };
ae.Children = {
  map: Xu,
  forEach: function (e, t, n) {
    Xu(
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
      Xu(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xu(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hs(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
ae.Component = Nr;
ae.Fragment = oy;
ae.Profiler = ly;
ae.PureComponent = ds;
ae.StrictMode = iy;
ae.Suspense = fy;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy;
ae.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Vd({}, e.props),
    u = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = vs.current)),
      t.key !== void 0 && (u = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Hd.call(t, a) &&
        !Kd.hasOwnProperty(a) &&
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
      $$typeof: sy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ay, _context: e }),
    (e.Consumer = e)
  );
};
ae.createElement = Gd;
ae.createFactory = function (e) {
  var t = Gd.bind(null, e);
  return (t.type = e), t;
};
ae.createRef = function () {
  return { current: null };
};
ae.forwardRef = function (e) {
  return { $$typeof: cy, render: e };
};
ae.isValidElement = hs;
ae.lazy = function (e) {
  return { $$typeof: py, _payload: { _status: -1, _result: e }, _init: my };
};
ae.memo = function (e, t) {
  return { $$typeof: dy, type: e, compare: t === void 0 ? null : t };
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
})(G);
const Xd = ry(G.exports),
  fa = ny({ __proto__: null, default: Xd }, [G.exports]),
  Sy = '_app_18mih_1',
  wy = '_app__star_18mih_1',
  _y = '_shine_18mih_1',
  Ey = '_app__content_18mih_1',
  ky = { app: Sy, app__star: wy, shine: _y, app__content: Ey };
var ys = { exports: {} },
  vi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Py = G.exports,
  Oy = Symbol.for('react.element'),
  xy = Symbol.for('react.fragment'),
  Cy = Object.prototype.hasOwnProperty,
  Ty = Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ry = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yd(e, t, n) {
  var r,
    u = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Cy.call(t, r) && !Ry.hasOwnProperty(r) && (u[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) u[r] === void 0 && (u[r] = t[r]);
  return {
    $$typeof: Oy,
    type: e,
    key: o,
    ref: i,
    props: u,
    _owner: Ty.current,
  };
}
vi.Fragment = xy;
vi.jsx = Yd;
vi.jsxs = Yd;
(function (e) {
  e.exports = vi;
})(ys);
const Le = ys.exports.jsx,
  Kc = ys.exports.jsxs;
function jy() {
  const e = G.exports.useRef(null);
  return (
    G.exports.useEffect(() => {
      (async () => {
        const u = await (await fetch(`http://localhost:${3001}`)).json();
        console.log(u);
      })();
    }, []),
    Le('div', { className: ky.app, ref: e, children: 'REEEEEAAACT' })
  );
}
var Zd = { exports: {} },
  Jd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pr = G.exports;
function Ay(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Iy = typeof Object.is == 'function' ? Object.is : Ay,
  My = Pr.useState,
  Ny = Pr.useEffect,
  Dy = Pr.useLayoutEffect,
  $y = Pr.useDebugValue;
function zy(e, t) {
  var n = t(),
    r = My({ inst: { value: n, getSnapshot: t } }),
    u = r[0].inst,
    o = r[1];
  return (
    Dy(
      function () {
        (u.value = n), (u.getSnapshot = t), _l(u) && o({ inst: u });
      },
      [e, n, t]
    ),
    Ny(
      function () {
        return (
          _l(u) && o({ inst: u }),
          e(function () {
            _l(u) && o({ inst: u });
          })
        );
      },
      [e]
    ),
    $y(n),
    n
  );
}
function _l(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Iy(e, n);
  } catch {
    return !0;
  }
}
function by(e, t) {
  return t();
}
var Ly =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? by
    : zy;
Jd.useSyncExternalStore =
  Pr.useSyncExternalStore !== void 0 ? Pr.useSyncExternalStore : Ly;
(function (e) {
  e.exports = Jd;
})(Zd);
var ep = { exports: {} },
  tp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hi = G.exports,
  Fy = Zd.exports;
function qy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Uy = typeof Object.is == 'function' ? Object.is : qy,
  Qy = Fy.useSyncExternalStore,
  Vy = hi.useRef,
  By = hi.useEffect,
  Wy = hi.useMemo,
  Hy = hi.useDebugValue;
tp.useSyncExternalStoreWithSelector = function (e, t, n, r, u) {
  var o = Vy(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = Wy(
    function () {
      function a(y) {
        if (!s) {
          if (((s = !0), (c = y), (y = r(y)), u !== void 0 && i.hasValue)) {
            var g = i.value;
            if (u(g, y)) return (p = g);
          }
          return (p = y);
        }
        if (((g = p), Uy(c, y))) return g;
        var _ = r(y);
        return u !== void 0 && u(g, _) ? g : ((c = y), (p = _));
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
  var l = Qy(e, o[0], o[1]);
  return (
    By(
      function () {
        (i.hasValue = !0), (i.value = l);
      },
      [l]
    ),
    Hy(l),
    l
  );
};
(function (e) {
  e.exports = tp;
})(ep);
var yi = { exports: {} },
  mt = {},
  np = { exports: {} },
  rp = {};
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
          $e = Pe + 1,
          Te = j[$e];
        if (0 > u(_e, W))
          $e < ne && 0 > u(Te, _e)
            ? ((j[oe] = Te), (j[$e] = W), (oe = $e))
            : ((j[oe] = _e), (j[Pe] = W), (oe = Pe));
        else if ($e < ne && 0 > u(Te, W)) (j[oe] = Te), (j[$e] = W), (oe = $e);
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
    _ = !1,
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
    if (((_ = !1), v(j), !g))
      if (n(a) !== null) (g = !0), te(w);
      else {
        var z = n(s);
        z !== null && J(m, z.startTime - j);
      }
  }
  function w(j, z) {
    (g = !1), _ && ((_ = !1), h(O), (O = -1)), (y = !0);
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
    O = -1,
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
    O = C(function () {
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
      g || y || ((g = !0), te(w));
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
              (_ ? (h(O), (O = -1)) : (_ = !0), J(m, W - oe)))
          : ((j.sortIndex = ne), t(a, j), g || y || ((g = !0), te(w))),
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
})(rp);
(function (e) {
  e.exports = rp;
})(np);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var up = G.exports,
  ht = np.exports;
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
var op = new Set(),
  hu = {};
function Kn(e, t) {
  Or(e, t), Or(e + 'Capture', t);
}
function Or(e, t) {
  for (hu[e] = t, e = 0; e < t.length; e++) op.add(t[e]);
}
var Zt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  da = Object.prototype.hasOwnProperty,
  Ky =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Gc = {},
  Xc = {};
function Gy(e) {
  return da.call(Xc, e)
    ? !0
    : da.call(Gc, e)
    ? !1
    : Ky.test(e)
    ? (Xc[e] = !0)
    : ((Gc[e] = !0), !1);
}
function Xy(e, t, n, r) {
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
function Yy(e, t, n, r) {
  if (t === null || typeof t > 'u' || Xy(e, t, n, r)) return !0;
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
var ms = /[\-:]([a-z])/g;
function gs(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ms, gs);
    We[t] = new tt(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ms, gs);
    We[t] = new tt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ms, gs);
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
function Ss(e, t, n, r) {
  var u = We.hasOwnProperty(t) ? We[t] : null;
  (u !== null
    ? u.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Yy(t, n, u, r) && (n = null),
    r || u === null
      ? Gy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var rn = up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Yu = Symbol.for('react.element'),
  ur = Symbol.for('react.portal'),
  or = Symbol.for('react.fragment'),
  ws = Symbol.for('react.strict_mode'),
  pa = Symbol.for('react.profiler'),
  ip = Symbol.for('react.provider'),
  lp = Symbol.for('react.context'),
  _s = Symbol.for('react.forward_ref'),
  va = Symbol.for('react.suspense'),
  ha = Symbol.for('react.suspense_list'),
  Es = Symbol.for('react.memo'),
  an = Symbol.for('react.lazy'),
  ap = Symbol.for('react.offscreen'),
  Yc = Symbol.iterator;
function Br(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Yc && e[Yc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ce = Object.assign,
  El;
function eu(e) {
  if (El === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      El = (t && t[1]) || '';
    }
  return (
    `
` +
    El +
    e
  );
}
var kl = !1;
function Pl(e, t) {
  if (!e || kl) return '';
  kl = !0;
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
    (kl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? eu(e) : '';
}
function Zy(e) {
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
      return (e = Pl(e.type, !1)), e;
    case 11:
      return (e = Pl(e.type.render, !1)), e;
    case 1:
      return (e = Pl(e.type, !0)), e;
    default:
      return '';
  }
}
function ya(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case or:
      return 'Fragment';
    case ur:
      return 'Portal';
    case pa:
      return 'Profiler';
    case ws:
      return 'StrictMode';
    case va:
      return 'Suspense';
    case ha:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case lp:
        return (e.displayName || 'Context') + '.Consumer';
      case ip:
        return (e._context.displayName || 'Context') + '.Provider';
      case _s:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Es:
        return (
          (t = e.displayName || null), t !== null ? t : ya(e.type) || 'Memo'
        );
      case an:
        (t = e._payload), (e = e._init);
        try {
          return ya(e(t));
        } catch {}
    }
  return null;
}
function Jy(e) {
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
      return ya(t);
    case 8:
      return t === ws ? 'StrictMode' : 'Mode';
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
function On(e) {
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
function sp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function em(e) {
  var t = sp(e) ? 'checked' : 'value',
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
  e._valueTracker || (e._valueTracker = em(e));
}
function cp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = sp(e) ? (e.checked ? 'true' : 'false') : e.value),
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
function ma(e, t) {
  var n = t.checked;
  return Ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Zc(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = On(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function fp(e, t) {
  (t = t.checked), t != null && Ss(e, 'checked', t, !1);
}
function ga(e, t) {
  fp(e, t);
  var n = On(t.value),
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
    ? Sa(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Sa(e, t.type, On(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Jc(e, t, n) {
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
function Sa(e, t, n) {
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
    for (n = '' + On(n), t = null, u = 0; u < e.length; u++) {
      if (e[u].value === n) {
        (e[u].selected = !0), r && (e[u].defaultSelected = !0);
        return;
      }
      t !== null || e[u].disabled || (t = e[u]);
    }
    t !== null && (t.selected = !0);
  }
}
function wa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return Ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ef(e, t) {
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
  e._wrapperState = { initialValue: On(n) };
}
function dp(e, t) {
  var n = On(t.value),
    r = On(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function tf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function pp(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function _a(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? pp(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Ju,
  vp = (function (e) {
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
  tm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(ou).forEach(function (e) {
  tm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ou[t] = ou[e]);
  });
});
function hp(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ou.hasOwnProperty(e) && ou[e])
    ? ('' + t).trim()
    : t + 'px';
}
function yp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        u = hp(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, u) : (e[n] = u);
    }
}
var nm = Ce(
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
function Ea(e, t) {
  if (t) {
    if (nm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function ka(e, t) {
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
var Pa = null;
function ks(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Oa = null,
  mr = null,
  gr = null;
function nf(e) {
  if ((e = Uu(e))) {
    if (typeof Oa != 'function') throw Error(D(280));
    var t = e.stateNode;
    t && ((t = _i(t)), Oa(e.stateNode, e.type, t));
  }
}
function mp(e) {
  mr ? (gr ? gr.push(e) : (gr = [e])) : (mr = e);
}
function gp() {
  if (mr) {
    var e = mr,
      t = gr;
    if (((gr = mr = null), nf(e), t)) for (e = 0; e < t.length; e++) nf(t[e]);
  }
}
function Sp(e, t) {
  return e(t);
}
function wp() {}
var Ol = !1;
function _p(e, t, n) {
  if (Ol) return e(t, n);
  Ol = !0;
  try {
    return Sp(e, t, n);
  } finally {
    (Ol = !1), (mr !== null || gr !== null) && (wp(), gp());
  }
}
function mu(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _i(n);
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
var xa = !1;
if (Zt)
  try {
    var Wr = {};
    Object.defineProperty(Wr, 'passive', {
      get: function () {
        xa = !0;
      },
    }),
      window.addEventListener('test', Wr, Wr),
      window.removeEventListener('test', Wr, Wr);
  } catch {
    xa = !1;
  }
function rm(e, t, n, r, u, o, i, l, a) {
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
  Ca = null,
  um = {
    onError: function (e) {
      (iu = !0), (No = e);
    },
  };
function om(e, t, n, r, u, o, i, l, a) {
  (iu = !1), (No = null), rm.apply(um, arguments);
}
function im(e, t, n, r, u, o, i, l, a) {
  if ((om.apply(this, arguments), iu)) {
    if (iu) {
      var s = No;
      (iu = !1), (No = null);
    } else throw Error(D(198));
    Do || ((Do = !0), (Ca = s));
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
function Ep(e) {
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
function rf(e) {
  if (Gn(e) !== e) throw Error(D(188));
}
function lm(e) {
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
        if (o === n) return rf(u), e;
        if (o === r) return rf(u), t;
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
function kp(e) {
  return (e = lm(e)), e !== null ? Pp(e) : null;
}
function Pp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Op = ht.unstable_scheduleCallback,
  uf = ht.unstable_cancelCallback,
  am = ht.unstable_shouldYield,
  sm = ht.unstable_requestPaint,
  Ae = ht.unstable_now,
  cm = ht.unstable_getCurrentPriorityLevel,
  Ps = ht.unstable_ImmediatePriority,
  xp = ht.unstable_UserBlockingPriority,
  $o = ht.unstable_NormalPriority,
  fm = ht.unstable_LowPriority,
  Cp = ht.unstable_IdlePriority,
  mi = null,
  qt = null;
function dm(e) {
  if (qt && typeof qt.onCommitFiberRoot == 'function')
    try {
      qt.onCommitFiberRoot(mi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Mt = Math.clz32 ? Math.clz32 : hm,
  pm = Math.log,
  vm = Math.LN2;
function hm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pm(e) / vm) | 0)) | 0;
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
function ym(e, t) {
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
function mm(e, t) {
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
      ? ((l & n) === 0 || (l & r) !== 0) && (u[i] = ym(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Ta(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Tp() {
  var e = eo;
  return (eo <<= 1), (eo & 4194240) === 0 && (eo = 64), e;
}
function xl(e) {
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
function gm(e, t) {
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
function Os(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Mt(n),
      u = 1 << r;
    (u & t) | (e[r] & t) && (e[r] |= t), (n &= ~u);
  }
}
var pe = 0;
function Rp(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var jp,
  xs,
  Ap,
  Ip,
  Mp,
  Ra = !1,
  no = [],
  vn = null,
  hn = null,
  yn = null,
  gu = new Map(),
  Su = new Map(),
  cn = [],
  Sm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function of(e, t) {
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
      t !== null && ((t = Uu(t)), t !== null && xs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      u !== null && t.indexOf(u) === -1 && t.push(u),
      e);
}
function wm(e, t, n, r, u) {
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
function Np(e) {
  var t = $n(e.target);
  if (t !== null) {
    var n = Gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ep(n)), t !== null)) {
          (e.blockedOn = t),
            Mp(e.priority, function () {
              Ap(n);
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
    var n = ja(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pa = r), n.target.dispatchEvent(r), (Pa = null);
    } else return (t = Uu(n)), t !== null && xs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function lf(e, t, n) {
  _o(e) && n.delete(t);
}
function _m() {
  (Ra = !1),
    vn !== null && _o(vn) && (vn = null),
    hn !== null && _o(hn) && (hn = null),
    yn !== null && _o(yn) && (yn = null),
    gu.forEach(lf),
    Su.forEach(lf);
}
function Kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ra ||
      ((Ra = !0),
      ht.unstable_scheduleCallback(ht.unstable_NormalPriority, _m)));
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
    Np(n), n.blockedOn === null && cn.shift();
}
var Sr = rn.ReactCurrentBatchConfig,
  bo = !0;
function Em(e, t, n, r) {
  var u = pe,
    o = Sr.transition;
  Sr.transition = null;
  try {
    (pe = 1), Cs(e, t, n, r);
  } finally {
    (pe = u), (Sr.transition = o);
  }
}
function km(e, t, n, r) {
  var u = pe,
    o = Sr.transition;
  Sr.transition = null;
  try {
    (pe = 4), Cs(e, t, n, r);
  } finally {
    (pe = u), (Sr.transition = o);
  }
}
function Cs(e, t, n, r) {
  if (bo) {
    var u = ja(e, t, n, r);
    if (u === null) $l(e, t, r, Lo, n), of(e, r);
    else if (wm(u, e, t, n, r)) r.stopPropagation();
    else if ((of(e, r), t & 4 && -1 < Sm.indexOf(e))) {
      for (; u !== null; ) {
        var o = Uu(u);
        if (
          (o !== null && jp(o),
          (o = ja(e, t, n, r)),
          o === null && $l(e, t, r, Lo, n),
          o === u)
        )
          break;
        u = o;
      }
      u !== null && r.stopPropagation();
    } else $l(e, t, r, null, n);
  }
}
var Lo = null;
function ja(e, t, n, r) {
  if (((Lo = null), (e = ks(r)), (e = $n(e)), e !== null))
    if (((t = Gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ep(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Lo = e), null;
}
function Dp(e) {
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
      switch (cm()) {
        case Ps:
          return 1;
        case xp:
          return 4;
        case $o:
        case fm:
          return 16;
        case Cp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dn = null,
  Ts = null,
  Eo = null;
function $p() {
  if (Eo) return Eo;
  var e,
    t = Ts,
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
function af() {
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
        : af),
      (this.isPropagationStopped = af),
      this
    );
  }
  return (
    Ce(t.prototype, {
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
  Rs = gt(Dr),
  qu = Ce({}, Dr, { view: 0, detail: 0 }),
  Pm = gt(qu),
  Cl,
  Tl,
  Gr,
  gi = Ce({}, qu, {
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
    getModifierState: js,
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
              ? ((Cl = e.screenX - Gr.screenX), (Tl = e.screenY - Gr.screenY))
              : (Tl = Cl = 0),
            (Gr = e)),
          Cl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Tl;
    },
  }),
  sf = gt(gi),
  Om = Ce({}, gi, { dataTransfer: 0 }),
  xm = gt(Om),
  Cm = Ce({}, qu, { relatedTarget: 0 }),
  Rl = gt(Cm),
  Tm = Ce({}, Dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rm = gt(Tm),
  jm = Ce({}, Dr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Am = gt(jm),
  Im = Ce({}, Dr, { data: 0 }),
  cf = gt(Im),
  Mm = {
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
  Nm = {
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
  Dm = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function $m(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dm[e]) ? !!t[e] : !1;
}
function js() {
  return $m;
}
var zm = Ce({}, qu, {
    key: function (e) {
      if (e.key) {
        var t = Mm[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ko(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Nm[e.keyCode] || 'Unidentified'
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
    getModifierState: js,
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
  bm = gt(zm),
  Lm = Ce({}, gi, {
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
  ff = gt(Lm),
  Fm = Ce({}, qu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: js,
  }),
  qm = gt(Fm),
  Um = Ce({}, Dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qm = gt(Um),
  Vm = Ce({}, gi, {
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
  Bm = gt(Vm),
  Wm = [9, 13, 27, 32],
  As = Zt && 'CompositionEvent' in window,
  lu = null;
Zt && 'documentMode' in document && (lu = document.documentMode);
var Hm = Zt && 'TextEvent' in window && !lu,
  zp = Zt && (!As || (lu && 8 < lu && 11 >= lu)),
  df = String.fromCharCode(32),
  pf = !1;
function bp(e, t) {
  switch (e) {
    case 'keyup':
      return Wm.indexOf(t.keyCode) !== -1;
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
function Lp(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ir = !1;
function Km(e, t) {
  switch (e) {
    case 'compositionend':
      return Lp(t);
    case 'keypress':
      return t.which !== 32 ? null : ((pf = !0), df);
    case 'textInput':
      return (e = t.data), e === df && pf ? null : e;
    default:
      return null;
  }
}
function Gm(e, t) {
  if (ir)
    return e === 'compositionend' || (!As && bp(e, t))
      ? ((e = $p()), (Eo = Ts = dn = null), (ir = !1), e)
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
      return zp && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Xm = {
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
function vf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Xm[e.type] : t === 'textarea';
}
function Fp(e, t, n, r) {
  mp(r),
    (t = Fo(t, 'onChange')),
    0 < t.length &&
      ((n = new Rs('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var au = null,
  _u = null;
function Ym(e) {
  Yp(e, 0);
}
function Si(e) {
  var t = sr(e);
  if (cp(t)) return e;
}
function Zm(e, t) {
  if (e === 'change') return t;
}
var qp = !1;
if (Zt) {
  var jl;
  if (Zt) {
    var Al = 'oninput' in document;
    if (!Al) {
      var hf = document.createElement('div');
      hf.setAttribute('oninput', 'return;'),
        (Al = typeof hf.oninput == 'function');
    }
    jl = Al;
  } else jl = !1;
  qp = jl && (!document.documentMode || 9 < document.documentMode);
}
function yf() {
  au && (au.detachEvent('onpropertychange', Up), (_u = au = null));
}
function Up(e) {
  if (e.propertyName === 'value' && Si(_u)) {
    var t = [];
    Fp(t, _u, e, ks(e)), _p(Ym, t);
  }
}
function Jm(e, t, n) {
  e === 'focusin'
    ? (yf(), (au = t), (_u = n), au.attachEvent('onpropertychange', Up))
    : e === 'focusout' && yf();
}
function e0(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Si(_u);
}
function t0(e, t) {
  if (e === 'click') return Si(t);
}
function n0(e, t) {
  if (e === 'input' || e === 'change') return Si(t);
}
function r0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dt = typeof Object.is == 'function' ? Object.is : r0;
function Eu(e, t) {
  if (Dt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var u = n[r];
    if (!da.call(t, u) || !Dt(e[u], t[u])) return !1;
  }
  return !0;
}
function mf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gf(e, t) {
  var n = mf(e);
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
    n = mf(n);
  }
}
function Qp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qp(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vp() {
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
function Is(e) {
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
function u0(e) {
  var t = Vp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Is(n)) {
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
          (u = gf(n, o));
        var i = gf(n, r);
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
var o0 = Zt && 'documentMode' in document && 11 >= document.documentMode,
  lr = null,
  Aa = null,
  su = null,
  Ia = !1;
function Sf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ia ||
    lr == null ||
    lr !== Mo(r) ||
    ((r = lr),
    'selectionStart' in r && Is(r)
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
      (r = Fo(Aa, 'onSelect')),
      0 < r.length &&
        ((t = new Rs('onSelect', 'select', null, t, n)),
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
  Il = {},
  Bp = {};
Zt &&
  ((Bp = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ar.animationend.animation,
    delete ar.animationiteration.animation,
    delete ar.animationstart.animation),
  'TransitionEvent' in window || delete ar.transitionend.transition);
function wi(e) {
  if (Il[e]) return Il[e];
  if (!ar[e]) return e;
  var t = ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bp) return (Il[e] = t[n]);
  return e;
}
var Wp = wi('animationend'),
  Hp = wi('animationiteration'),
  Kp = wi('animationstart'),
  Gp = wi('transitionend'),
  Xp = new Map(),
  wf =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Rn(e, t) {
  Xp.set(e, t), Kn(t, [e]);
}
for (var Ml = 0; Ml < wf.length; Ml++) {
  var Nl = wf[Ml],
    i0 = Nl.toLowerCase(),
    l0 = Nl[0].toUpperCase() + Nl.slice(1);
  Rn(i0, 'on' + l0);
}
Rn(Wp, 'onAnimationEnd');
Rn(Hp, 'onAnimationIteration');
Rn(Kp, 'onAnimationStart');
Rn('dblclick', 'onDoubleClick');
Rn('focusin', 'onFocus');
Rn('focusout', 'onBlur');
Rn(Gp, 'onTransitionEnd');
Or('onMouseEnter', ['mouseout', 'mouseover']);
Or('onMouseLeave', ['mouseout', 'mouseover']);
Or('onPointerEnter', ['pointerout', 'pointerover']);
Or('onPointerLeave', ['pointerout', 'pointerover']);
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
  a0 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ru));
function _f(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), im(r, t, void 0, e), (e.currentTarget = null);
}
function Yp(e, t) {
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
          _f(u, l, s), (o = a);
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
          _f(u, l, s), (o = a);
        }
    }
  }
  if (Do) throw ((e = Ca), (Do = !1), (Ca = null), e);
}
function Se(e, t) {
  var n = t[za];
  n === void 0 && (n = t[za] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Zp(t, e, 2, !1), n.add(r));
}
function Dl(e, t, n) {
  var r = 0;
  t && (r |= 4), Zp(n, e, r, t);
}
var oo = '_reactListening' + Math.random().toString(36).slice(2);
function ku(e) {
  if (!e[oo]) {
    (e[oo] = !0),
      op.forEach(function (n) {
        n !== 'selectionchange' && (a0.has(n) || Dl(n, !1, e), Dl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[oo] || ((t[oo] = !0), Dl('selectionchange', !1, t));
  }
}
function Zp(e, t, n, r) {
  switch (Dp(t)) {
    case 1:
      var u = Em;
      break;
    case 4:
      u = km;
      break;
    default:
      u = Cs;
  }
  (n = u.bind(null, t, n, e)),
    (u = void 0),
    !xa ||
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
function $l(e, t, n, r, u) {
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
          if (((i = $n(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  _p(function () {
    var s = o,
      c = ks(n),
      p = [];
    e: {
      var d = Xp.get(e);
      if (d !== void 0) {
        var y = Rs,
          g = e;
        switch (e) {
          case 'keypress':
            if (ko(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            y = bm;
            break;
          case 'focusin':
            (g = 'focus'), (y = Rl);
            break;
          case 'focusout':
            (g = 'blur'), (y = Rl);
            break;
          case 'beforeblur':
          case 'afterblur':
            y = Rl;
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
            y = sf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = xm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = qm;
            break;
          case Wp:
          case Hp:
          case Kp:
            y = Rm;
            break;
          case Gp:
            y = Qm;
            break;
          case 'scroll':
            y = Pm;
            break;
          case 'wheel':
            y = Bm;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            y = Am;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = ff;
        }
        var _ = (t & 4) !== 0,
          C = !_ && e === 'scroll',
          h = _ ? (d !== null ? d + 'Capture' : null) : d;
        _ = [];
        for (var f = s, v; f !== null; ) {
          v = f;
          var m = v.stateNode;
          if (
            (v.tag === 5 &&
              m !== null &&
              ((v = m),
              h !== null && ((m = mu(f, h)), m != null && _.push(Pu(f, m, v)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < _.length &&
          ((d = new y(d, g, null, n, c)), p.push({ event: d, listeners: _ }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Pa &&
            (g = n.relatedTarget || n.fromElement) &&
            ($n(g) || g[Jt]))
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
              (g = g ? $n(g) : null),
              g !== null &&
                ((C = Gn(g)), g !== C || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((y = null), (g = s)),
          y !== g)
        ) {
          if (
            ((_ = sf),
            (m = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((_ = ff),
              (m = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (f = 'pointer')),
            (C = y == null ? d : sr(y)),
            (v = g == null ? d : sr(g)),
            (d = new _(m, f + 'leave', y, n, c)),
            (d.target = C),
            (d.relatedTarget = v),
            (m = null),
            $n(c) === s &&
              ((_ = new _(h, f + 'enter', g, n, c)),
              (_.target = v),
              (_.relatedTarget = C),
              (m = _)),
            (C = m),
            y && g)
          )
            t: {
              for (_ = y, h = g, f = 0, v = _; v; v = tr(v)) f++;
              for (v = 0, m = h; m; m = tr(m)) v++;
              for (; 0 < f - v; ) (_ = tr(_)), f--;
              for (; 0 < v - f; ) (h = tr(h)), v--;
              for (; f--; ) {
                if (_ === h || (h !== null && _ === h.alternate)) break t;
                (_ = tr(_)), (h = tr(h));
              }
              _ = null;
            }
          else _ = null;
          y !== null && Ef(p, d, y, _, !1),
            g !== null && C !== null && Ef(p, C, g, _, !0);
        }
      }
      e: {
        if (
          ((d = s ? sr(s) : window),
          (y = d.nodeName && d.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && d.type === 'file'))
        )
          var w = Zm;
        else if (vf(d))
          if (qp) w = n0;
          else {
            w = e0;
            var E = Jm;
          }
        else
          (y = d.nodeName) &&
            y.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (w = t0);
        if (w && (w = w(e, s))) {
          Fp(p, w, n, c);
          break e;
        }
        E && E(e, d, s),
          e === 'focusout' &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === 'number' &&
            Sa(d, 'number', d.value);
      }
      switch (((E = s ? sr(s) : window), e)) {
        case 'focusin':
          (vf(E) || E.contentEditable === 'true') &&
            ((lr = E), (Aa = s), (su = null));
          break;
        case 'focusout':
          su = Aa = lr = null;
          break;
        case 'mousedown':
          Ia = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Ia = !1), Sf(p, n, c);
          break;
        case 'selectionchange':
          if (o0) break;
        case 'keydown':
        case 'keyup':
          Sf(p, n, c);
      }
      var P;
      if (As)
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
        ir
          ? bp(e, n) && (O = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
      O &&
        (zp &&
          n.locale !== 'ko' &&
          (ir || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && ir && (P = $p())
            : ((dn = c),
              (Ts = 'value' in dn ? dn.value : dn.textContent),
              (ir = !0))),
        (E = Fo(s, O)),
        0 < E.length &&
          ((O = new cf(O, e, null, n, c)),
          p.push({ event: O, listeners: E }),
          P ? (O.data = P) : ((P = Lp(n)), P !== null && (O.data = P)))),
        (P = Hm ? Km(e, n) : Gm(e, n)) &&
          ((s = Fo(s, 'onBeforeInput')),
          0 < s.length &&
            ((c = new cf('onBeforeInput', 'beforeinput', null, n, c)),
            p.push({ event: c, listeners: s }),
            (c.data = P)));
    }
    Yp(p, t);
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
function Ef(e, t, n, r, u) {
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
var s0 = /\r\n?/g,
  c0 = /\u0000|\uFFFD/g;
function kf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      s0,
      `
`
    )
    .replace(c0, '');
}
function io(e, t, n) {
  if (((t = kf(t)), kf(e) !== t && n)) throw Error(D(425));
}
function qo() {}
var Ma = null,
  Na = null;
function Da(e, t) {
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
var $a = typeof setTimeout == 'function' ? setTimeout : void 0,
  f0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Pf = typeof Promise == 'function' ? Promise : void 0,
  d0 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Pf < 'u'
      ? function (e) {
          return Pf.resolve(null).then(e).catch(p0);
        }
      : $a;
function p0(e) {
  setTimeout(function () {
    throw e;
  });
}
function zl(e, t) {
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
function Of(e) {
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
  Ou = '__reactProps$' + $r,
  Jt = '__reactContainer$' + $r,
  za = '__reactEvents$' + $r,
  v0 = '__reactListeners$' + $r,
  h0 = '__reactHandles$' + $r;
function $n(e) {
  var t = e[Ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Jt] || n[Ft])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Of(e); e !== null; ) {
          if ((n = e[Ft])) return n;
          e = Of(e);
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
function _i(e) {
  return e[Ou] || null;
}
var ba = [],
  cr = -1;
function jn(e) {
  return { current: e };
}
function we(e) {
  0 > cr || ((e.current = ba[cr]), (ba[cr] = null), cr--);
}
function ge(e, t) {
  cr++, (ba[cr] = e.current), (e.current = t);
}
var xn = {},
  Ye = jn(xn),
  ot = jn(!1),
  Qn = xn;
function xr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xn;
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
  we(ot), we(Ye);
}
function xf(e, t, n) {
  if (Ye.current !== xn) throw Error(D(168));
  ge(Ye, t), ge(ot, n);
}
function Jp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var u in r) if (!(u in t)) throw Error(D(108, Jy(e) || 'Unknown', u));
  return Ce({}, n, r);
}
function Qo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xn),
    (Qn = Ye.current),
    ge(Ye, e),
    ge(ot, ot.current),
    !0
  );
}
function Cf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n
    ? ((e = Jp(e, t, Qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      we(ot),
      we(Ye),
      ge(Ye, e))
    : we(ot),
    ge(ot, n);
}
var Ht = null,
  Ei = !1,
  bl = !1;
function ev(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
function y0(e) {
  (Ei = !0), ev(e);
}
function An() {
  if (!bl && Ht !== null) {
    bl = !0;
    var e = 0,
      t = pe;
    try {
      var n = Ht;
      for (pe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ht = null), (Ei = !1);
    } catch (u) {
      throw (Ht !== null && (Ht = Ht.slice(e + 1)), Op(Ps, An), u);
    } finally {
      (pe = t), (bl = !1);
    }
  }
  return null;
}
var fr = [],
  dr = 0,
  Vo = null,
  Bo = 0,
  _t = [],
  Et = 0,
  Vn = null,
  Kt = 1,
  Gt = '';
function Nn(e, t) {
  (fr[dr++] = Bo), (fr[dr++] = Vo), (Vo = e), (Bo = t);
}
function tv(e, t, n) {
  (_t[Et++] = Kt), (_t[Et++] = Gt), (_t[Et++] = Vn), (Vn = e);
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
function Ms(e) {
  e.return !== null && (Nn(e, 1), tv(e, 1, 0));
}
function Ns(e) {
  for (; e === Vo; )
    (Vo = fr[--dr]), (fr[dr] = null), (Bo = fr[--dr]), (fr[dr] = null);
  for (; e === Vn; )
    (Vn = _t[--Et]),
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
function nv(e, t) {
  var n = kt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Tf(e, t) {
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
          ? ((n = Vn !== null ? { id: Kt, overflow: Gt } : null),
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
function La(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fa(e) {
  if (ke) {
    var t = pt;
    if (t) {
      var n = t;
      if (!Tf(e, t)) {
        if (La(e)) throw Error(D(418));
        t = mn(n.nextSibling);
        var r = vt;
        t && Tf(e, t)
          ? nv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (vt = e));
      }
    } else {
      if (La(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (ke = !1), (vt = e);
    }
  }
}
function Rf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  vt = e;
}
function lo(e) {
  if (e !== vt) return !1;
  if (!ke) return Rf(e), (ke = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Da(e.type, e.memoizedProps))),
    t && (t = pt))
  ) {
    if (La(e)) throw (rv(), Error(D(418)));
    for (; t; ) nv(e, t), (t = mn(t.nextSibling));
  }
  if ((Rf(e), e.tag === 13)) {
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
function rv() {
  for (var e = pt; e; ) e = mn(e.nextSibling);
}
function Cr() {
  (pt = vt = null), (ke = !1);
}
function Ds(e) {
  It === null ? (It = [e]) : It.push(e);
}
var m0 = rn.ReactCurrentBatchConfig;
function jt(e, t) {
  if (e && e.defaultProps) {
    (t = Ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Wo = jn(null),
  Ho = null,
  pr = null,
  $s = null;
function zs() {
  $s = pr = Ho = null;
}
function bs(e) {
  var t = Wo.current;
  we(Wo), (e._currentValue = t);
}
function qa(e, t, n) {
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
    ($s = pr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (ut = !0), (e.firstContext = null));
}
function Ot(e) {
  var t = e._currentValue;
  if ($s !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pr === null)) {
      if (Ho === null) throw Error(D(308));
      (pr = e), (Ho.dependencies = { lanes: 0, firstContext: e });
    } else pr = pr.next = e;
  return t;
}
var zn = null;
function Ls(e) {
  zn === null ? (zn = [e]) : zn.push(e);
}
function uv(e, t, n, r) {
  var u = t.interleaved;
  return (
    u === null ? ((n.next = n), Ls(t)) : ((n.next = u.next), (u.next = n)),
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
function Fs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ov(e, t) {
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
function Yt(e, t) {
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
    u === null ? ((t.next = t), Ls(r)) : ((t.next = u.next), (u.next = t)),
    (r.interleaved = t),
    en(e, n)
  );
}
function Po(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Os(e, n);
  }
}
function jf(e, t) {
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
            _ = l;
          switch (((d = t), (y = n), _.tag)) {
            case 1:
              if (((g = _.payload), typeof g == 'function')) {
                p = g.call(y, p, d);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = _.payload),
                (d = typeof g == 'function' ? g.call(y, p, d) : g),
                d == null)
              )
                break e;
              p = Ce({}, p, d);
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
function Af(e, t, n) {
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
var iv = new up.Component().refs;
function Ua(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ki = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Je(),
      u = wn(e),
      o = Yt(r, u);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = gn(e, o, u)),
      t !== null && (Nt(t, e, u, r), Po(t, e, u));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Je(),
      u = wn(e),
      o = Yt(r, u);
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
      u = Yt(n, r);
    (u.tag = 2),
      t != null && (u.callback = t),
      (t = gn(e, u, r)),
      t !== null && (Nt(t, e, r, n), Po(t, e, r));
  },
};
function If(e, t, n, r, u, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Eu(n, r) || !Eu(u, o)
      : !0
  );
}
function lv(e, t, n) {
  var r = !1,
    u = xn,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Ot(o))
      : ((u = it(t) ? Qn : Ye.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xr(e, u) : xn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ki),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = u),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Mf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ki.enqueueReplaceState(t, t.state, null);
}
function Qa(e, t, n, r) {
  var u = e.stateNode;
  (u.props = n), (u.state = e.memoizedState), (u.refs = iv), Fs(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (u.context = Ot(o))
    : ((o = it(t) ? Qn : Ye.current), (u.context = xr(e, o))),
    (u.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Ua(e, t, o, n), (u.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof u.getSnapshotBeforeUpdate == 'function' ||
      (typeof u.UNSAFE_componentWillMount != 'function' &&
        typeof u.componentWillMount != 'function') ||
      ((t = u.state),
      typeof u.componentWillMount == 'function' && u.componentWillMount(),
      typeof u.UNSAFE_componentWillMount == 'function' &&
        u.UNSAFE_componentWillMount(),
      t !== u.state && ki.enqueueReplaceState(u, u.state, null),
      Ko(e, n, u, r),
      (u.state = e.memoizedState)),
    typeof u.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Xr(e, t, n) {
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
            l === iv && (l = u.refs = {}),
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
function Nf(e) {
  var t = e._init;
  return t(e._payload);
}
function av(e) {
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
      ? ((f = Bl(v, h.mode, m)), (f.return = h), f)
      : ((f = u(f, v)), (f.return = h), f);
  }
  function a(h, f, v, m) {
    var w = v.type;
    return w === or
      ? c(h, f, v.props.children, m, v.key)
      : f !== null &&
        (f.elementType === w ||
          (typeof w == 'object' &&
            w !== null &&
            w.$$typeof === an &&
            Nf(w) === f.type))
      ? ((m = u(f, v.props)), (m.ref = Xr(h, f, v)), (m.return = h), m)
      : ((m = jo(v.type, v.key, v.props, null, h.mode, m)),
        (m.ref = Xr(h, f, v)),
        (m.return = h),
        m);
  }
  function s(h, f, v, m) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = Wl(v, h.mode, m)), (f.return = h), f)
      : ((f = u(f, v.children || [])), (f.return = h), f);
  }
  function c(h, f, v, m, w) {
    return f === null || f.tag !== 7
      ? ((f = Un(v, h.mode, m, w)), (f.return = h), f)
      : ((f = u(f, v)), (f.return = h), f);
  }
  function p(h, f, v) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = Bl('' + f, h.mode, v)), (f.return = h), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case Yu:
          return (
            (v = jo(f.type, f.key, f.props, null, h.mode, v)),
            (v.ref = Xr(h, null, f)),
            (v.return = h),
            v
          );
        case ur:
          return (f = Wl(f, h.mode, v)), (f.return = h), f;
        case an:
          var m = f._init;
          return p(h, m(f._payload), v);
      }
      if (tu(f) || Br(f))
        return (f = Un(f, h.mode, v, null)), (f.return = h), f;
      ao(h, f);
    }
    return null;
  }
  function d(h, f, v, m) {
    var w = f !== null ? f.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return w !== null ? null : l(h, f, '' + v, m);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Yu:
          return v.key === w ? a(h, f, v, m) : null;
        case ur:
          return v.key === w ? s(h, f, v, m) : null;
        case an:
          return (w = v._init), d(h, f, w(v._payload), m);
      }
      if (tu(v) || Br(v)) return w !== null ? null : c(h, f, v, m, null);
      ao(h, v);
    }
    return null;
  }
  function y(h, f, v, m, w) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (h = h.get(v) || null), l(f, h, '' + m, w);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Yu:
          return (h = h.get(m.key === null ? v : m.key) || null), a(f, h, m, w);
        case ur:
          return (h = h.get(m.key === null ? v : m.key) || null), s(f, h, m, w);
        case an:
          var E = m._init;
          return y(h, f, v, E(m._payload), w);
      }
      if (tu(m) || Br(m)) return (h = h.get(v) || null), c(f, h, m, w, null);
      ao(f, m);
    }
    return null;
  }
  function g(h, f, v, m) {
    for (
      var w = null, E = null, P = f, O = (f = 0), R = null;
      P !== null && O < v.length;
      O++
    ) {
      P.index > O ? ((R = P), (P = null)) : (R = P.sibling);
      var T = d(h, P, v[O], m);
      if (T === null) {
        P === null && (P = R);
        break;
      }
      e && P && T.alternate === null && t(h, P),
        (f = o(T, f, O)),
        E === null ? (w = T) : (E.sibling = T),
        (E = T),
        (P = R);
    }
    if (O === v.length) return n(h, P), ke && Nn(h, O), w;
    if (P === null) {
      for (; O < v.length; O++)
        (P = p(h, v[O], m)),
          P !== null &&
            ((f = o(P, f, O)), E === null ? (w = P) : (E.sibling = P), (E = P));
      return ke && Nn(h, O), w;
    }
    for (P = r(h, P); O < v.length; O++)
      (R = y(P, h, O, v[O], m)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? O : R.key),
          (f = o(R, f, O)),
          E === null ? (w = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        P.forEach(function (M) {
          return t(h, M);
        }),
      ke && Nn(h, O),
      w
    );
  }
  function _(h, f, v, m) {
    var w = Br(v);
    if (typeof w != 'function') throw Error(D(150));
    if (((v = w.call(v)), v == null)) throw Error(D(151));
    for (
      var E = (w = null), P = f, O = (f = 0), R = null, T = v.next();
      P !== null && !T.done;
      O++, T = v.next()
    ) {
      P.index > O ? ((R = P), (P = null)) : (R = P.sibling);
      var M = d(h, P, T.value, m);
      if (M === null) {
        P === null && (P = R);
        break;
      }
      e && P && M.alternate === null && t(h, P),
        (f = o(M, f, O)),
        E === null ? (w = M) : (E.sibling = M),
        (E = M),
        (P = R);
    }
    if (T.done) return n(h, P), ke && Nn(h, O), w;
    if (P === null) {
      for (; !T.done; O++, T = v.next())
        (T = p(h, T.value, m)),
          T !== null &&
            ((f = o(T, f, O)), E === null ? (w = T) : (E.sibling = T), (E = T));
      return ke && Nn(h, O), w;
    }
    for (P = r(h, P); !T.done; O++, T = v.next())
      (T = y(P, h, O, T.value, m)),
        T !== null &&
          (e && T.alternate !== null && P.delete(T.key === null ? O : T.key),
          (f = o(T, f, O)),
          E === null ? (w = T) : (E.sibling = T),
          (E = T));
    return (
      e &&
        P.forEach(function ($) {
          return t(h, $);
        }),
      ke && Nn(h, O),
      w
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
        case Yu:
          e: {
            for (var w = v.key, E = f; E !== null; ) {
              if (E.key === w) {
                if (((w = v.type), w === or)) {
                  if (E.tag === 7) {
                    n(h, E.sibling),
                      (f = u(E, v.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  E.elementType === w ||
                  (typeof w == 'object' &&
                    w !== null &&
                    w.$$typeof === an &&
                    Nf(w) === E.type)
                ) {
                  n(h, E.sibling),
                    (f = u(E, v.props)),
                    (f.ref = Xr(h, E, v)),
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
                (m.ref = Xr(h, f, v)),
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
            (f = Wl(v, h.mode, m)), (f.return = h), (h = f);
          }
          return i(h);
        case an:
          return (E = v._init), C(h, f, E(v._payload), m);
      }
      if (tu(v)) return g(h, f, v, m);
      if (Br(v)) return _(h, f, v, m);
      ao(h, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = u(f, v)), (f.return = h), (h = f))
          : (n(h, f), (f = Bl(v, h.mode, m)), (f.return = h), (h = f)),
        i(h))
      : n(h, f);
  }
  return C;
}
var Tr = av(!0),
  sv = av(!1),
  Qu = {},
  Ut = jn(Qu),
  xu = jn(Qu),
  Cu = jn(Qu);
function bn(e) {
  if (e === Qu) throw Error(D(174));
  return e;
}
function qs(e, t) {
  switch ((ge(Cu, t), ge(xu, e), ge(Ut, Qu), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _a(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _a(t, e));
  }
  we(Ut), ge(Ut, t);
}
function Rr() {
  we(Ut), we(xu), we(Cu);
}
function cv(e) {
  bn(Cu.current);
  var t = bn(Ut.current),
    n = _a(t, e.type);
  t !== n && (ge(xu, e), ge(Ut, n));
}
function Us(e) {
  xu.current === e && (we(Ut), we(xu));
}
var Oe = jn(0);
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
var Ll = [];
function Qs() {
  for (var e = 0; e < Ll.length; e++)
    Ll[e]._workInProgressVersionPrimary = null;
  Ll.length = 0;
}
var Oo = rn.ReactCurrentDispatcher,
  Fl = rn.ReactCurrentBatchConfig,
  Bn = 0,
  xe = null,
  Me = null,
  be = null,
  Xo = !1,
  cu = !1,
  Tu = 0,
  g0 = 0;
function Ke() {
  throw Error(D(321));
}
function Vs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Dt(e[n], t[n])) return !1;
  return !0;
}
function Bs(e, t, n, r, u, o) {
  if (
    ((Bn = o),
    (xe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Oo.current = e === null || e.memoizedState === null ? E0 : k0),
    (e = n(r, u)),
    cu)
  ) {
    o = 0;
    do {
      if (((cu = !1), (Tu = 0), 25 <= o)) throw Error(D(301));
      (o += 1),
        (be = Me = null),
        (t.updateQueue = null),
        (Oo.current = P0),
        (e = n(r, u));
    } while (cu);
  }
  if (
    ((Oo.current = Yo),
    (t = Me !== null && Me.next !== null),
    (Bn = 0),
    (be = Me = xe = null),
    (Xo = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function Ws() {
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
  return be === null ? (xe.memoizedState = be = e) : (be = be.next = e), be;
}
function xt() {
  if (Me === null) {
    var e = xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Me.next;
  var t = be === null ? xe.memoizedState : be.next;
  if (t !== null) (be = t), (Me = e);
  else {
    if (e === null) throw Error(D(310));
    (Me = e),
      (e = {
        memoizedState: Me.memoizedState,
        baseState: Me.baseState,
        baseQueue: Me.baseQueue,
        queue: Me.queue,
        next: null,
      }),
      be === null ? (xe.memoizedState = be = e) : (be = be.next = e);
  }
  return be;
}
function Ru(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ql(e) {
  var t = xt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = Me,
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
      if ((Bn & c) === c)
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
          (xe.lanes |= c),
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
    do (o = u.lane), (xe.lanes |= o), (Wn |= o), (u = u.next);
    while (u !== e);
  } else u === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ul(e) {
  var t = xt(),
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
function fv() {}
function dv(e, t) {
  var n = xe,
    r = xt(),
    u = t(),
    o = !Dt(r.memoizedState, u);
  if (
    (o && ((r.memoizedState = u), (ut = !0)),
    (r = r.queue),
    Hs(hv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (be !== null && be.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ju(9, vv.bind(null, n, r, u, t), void 0, null),
      qe === null)
    )
      throw Error(D(349));
    (Bn & 30) !== 0 || pv(n, t, u);
  }
  return u;
}
function pv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function vv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), yv(t) && mv(e);
}
function hv(e, t, n) {
  return n(function () {
    yv(t) && mv(e);
  });
}
function yv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dt(e, n);
  } catch {
    return !0;
  }
}
function mv(e) {
  var t = en(e, 1);
  t !== null && Nt(t, e, 1, -1);
}
function Df(e) {
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
    (e = e.dispatch = _0.bind(null, xe, e)),
    [t.memoizedState, e]
  );
}
function ju(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function gv() {
  return xt().memoizedState;
}
function xo(e, t, n, r) {
  var u = Lt();
  (xe.flags |= e),
    (u.memoizedState = ju(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pi(e, t, n, r) {
  var u = xt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Me !== null) {
    var i = Me.memoizedState;
    if (((o = i.destroy), r !== null && Vs(r, i.deps))) {
      u.memoizedState = ju(t, n, o, r);
      return;
    }
  }
  (xe.flags |= e), (u.memoizedState = ju(1 | t, n, o, r));
}
function $f(e, t) {
  return xo(8390656, 8, e, t);
}
function Hs(e, t) {
  return Pi(2048, 8, e, t);
}
function Sv(e, t) {
  return Pi(4, 2, e, t);
}
function wv(e, t) {
  return Pi(4, 4, e, t);
}
function _v(e, t) {
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
function Ev(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Pi(4, 4, _v.bind(null, t, e), n)
  );
}
function Ks() {}
function kv(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pv(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ov(e, t, n) {
  return (Bn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n))
    : (Dt(n, t) || ((n = Tp()), (xe.lanes |= n), (Wn |= n), (e.baseState = !0)),
      t);
}
function S0(e, t) {
  var n = pe;
  (pe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Fl.transition;
  Fl.transition = {};
  try {
    e(!1), t();
  } finally {
    (pe = n), (Fl.transition = r);
  }
}
function xv() {
  return xt().memoizedState;
}
function w0(e, t, n) {
  var r = wn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cv(e))
  )
    Tv(t, n);
  else if (((n = uv(e, t, n, r)), n !== null)) {
    var u = Je();
    Nt(n, e, r, u), Rv(n, t, r);
  }
}
function _0(e, t, n) {
  var r = wn(e),
    u = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cv(e)) Tv(t, u);
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
            ? ((u.next = u), Ls(t))
            : ((u.next = a.next), (a.next = u)),
            (t.interleaved = u);
          return;
        }
      } catch {
      } finally {
      }
    (n = uv(e, t, u, r)),
      n !== null && ((u = Je()), Nt(n, e, r, u), Rv(n, t, r));
  }
}
function Cv(e) {
  var t = e.alternate;
  return e === xe || (t !== null && t === xe);
}
function Tv(e, t) {
  cu = Xo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Rv(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Os(e, n);
  }
}
var Yo = {
    readContext: Ot,
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
  E0 = {
    readContext: Ot,
    useCallback: function (e, t) {
      return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ot,
    useEffect: $f,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xo(4194308, 4, _v.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xo(4, 2, e, t);
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
        (e = e.dispatch = w0.bind(null, xe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Df,
    useDebugValue: Ks,
    useDeferredValue: function (e) {
      return (Lt().memoizedState = e);
    },
    useTransition: function () {
      var e = Df(!1),
        t = e[0];
      return (e = S0.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = xe,
        u = Lt();
      if (ke) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), qe === null)) throw Error(D(349));
        (Bn & 30) !== 0 || pv(r, t, n);
      }
      u.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (u.queue = o),
        $f(hv.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ju(9, vv.bind(null, r, o, n, t), void 0, null),
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
      } else (n = g0++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  k0 = {
    readContext: Ot,
    useCallback: kv,
    useContext: Ot,
    useEffect: Hs,
    useImperativeHandle: Ev,
    useInsertionEffect: Sv,
    useLayoutEffect: wv,
    useMemo: Pv,
    useReducer: ql,
    useRef: gv,
    useState: function () {
      return ql(Ru);
    },
    useDebugValue: Ks,
    useDeferredValue: function (e) {
      var t = xt();
      return Ov(t, Me.memoizedState, e);
    },
    useTransition: function () {
      var e = ql(Ru)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: fv,
    useSyncExternalStore: dv,
    useId: xv,
    unstable_isNewReconciler: !1,
  },
  P0 = {
    readContext: Ot,
    useCallback: kv,
    useContext: Ot,
    useEffect: Hs,
    useImperativeHandle: Ev,
    useInsertionEffect: Sv,
    useLayoutEffect: wv,
    useMemo: Pv,
    useReducer: Ul,
    useRef: gv,
    useState: function () {
      return Ul(Ru);
    },
    useDebugValue: Ks,
    useDeferredValue: function (e) {
      var t = xt();
      return Me === null ? (t.memoizedState = e) : Ov(t, Me.memoizedState, e);
    },
    useTransition: function () {
      var e = Ul(Ru)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: fv,
    useSyncExternalStore: dv,
    useId: xv,
    unstable_isNewReconciler: !1,
  };
function jr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Zy(r)), (r = r.return);
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
function Ql(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function Va(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var O0 = typeof WeakMap == 'function' ? WeakMap : Map;
function jv(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jo || ((Jo = !0), (es = r)), Va(e, t);
    }),
    n
  );
}
function Av(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var u = t.value;
    (n.payload = function () {
      return r(u);
    }),
      (n.callback = function () {
        Va(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Va(e, t),
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
function zf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new O0();
    var u = new Set();
    r.set(t, u);
  } else (u = r.get(t)), u === void 0 && ((u = new Set()), r.set(t, u));
  u.has(n) || (u.add(n), (e = L0.bind(null, e, t, n)), t.then(e, e));
}
function bf(e) {
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
function Lf(e, t, n, r, u) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Yt(-1, 1)), (t.tag = 2), gn(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = u), e);
}
var x0 = rn.ReactCurrentOwner,
  ut = !1;
function Ze(e, t, n, r) {
  t.child = e === null ? sv(t, null, n, r) : Tr(t, e.child, n, r);
}
function Ff(e, t, n, r, u) {
  n = n.render;
  var o = t.ref;
  return (
    wr(t, u),
    (r = Bs(e, t, n, r, o, u)),
    (n = Ws()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~u),
        tn(e, t, u))
      : (ke && n && Ms(t), (t.flags |= 1), Ze(e, t, r, u), t.child)
  );
}
function qf(e, t, n, r, u) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !nc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Iv(e, t, o, r, u))
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
function Iv(e, t, n, r, u) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Eu(o, r) && e.ref === t.ref)
      if (((ut = !1), (t.pendingProps = r = o), (e.lanes & u) !== 0))
        (e.flags & 131072) !== 0 && (ut = !0);
      else return (t.lanes = e.lanes), tn(e, t, u);
  }
  return Ba(e, t, n, r, u);
}
function Mv(e, t, n) {
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
function Nv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ba(e, t, n, r, u) {
  var o = it(n) ? Qn : Ye.current;
  return (
    (o = xr(t, o)),
    wr(t, u),
    (n = Bs(e, t, n, r, o, u)),
    (r = Ws()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~u),
        tn(e, t, u))
      : (ke && r && Ms(t), (t.flags |= 1), Ze(e, t, n, u), t.child)
  );
}
function Uf(e, t, n, r, u) {
  if (it(n)) {
    var o = !0;
    Qo(t);
  } else o = !1;
  if ((wr(t, u), t.stateNode === null))
    Co(e, t), lv(t, n, r), Qa(t, n, r, u), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = Ot(s))
      : ((s = it(n) ? Qn : Ye.current), (s = xr(t, s)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== s) && Mf(t, i, r, s)),
      (sn = !1);
    var d = t.memoizedState;
    (i.state = d),
      Ko(t, r, i, u),
      (a = t.memoizedState),
      l !== r || d !== a || ot.current || sn
        ? (typeof c == 'function' && (Ua(t, n, c, r), (a = t.memoizedState)),
          (l = sn || If(t, n, l, r, d, a, s))
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
      ov(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : jt(t.type, l)),
      (i.props = s),
      (p = t.pendingProps),
      (d = i.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Ot(a))
        : ((a = it(n) ? Qn : Ye.current), (a = xr(t, a)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== p || d !== a) && Mf(t, i, r, a)),
      (sn = !1),
      (d = t.memoizedState),
      (i.state = d),
      Ko(t, r, i, u);
    var g = t.memoizedState;
    l !== p || d !== g || ot.current || sn
      ? (typeof y == 'function' && (Ua(t, n, y, r), (g = t.memoizedState)),
        (s = sn || If(t, n, s, r, d, g, a) || !1)
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
  return Wa(e, t, n, r, o, u);
}
function Wa(e, t, n, r, u, o) {
  Nv(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return u && Cf(t, n, !1), tn(e, t, o);
  (r = t.stateNode), (x0.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Tr(t, e.child, null, o)), (t.child = Tr(t, null, l, o)))
      : Ze(e, t, l, o),
    (t.memoizedState = r.state),
    u && Cf(t, n, !0),
    t.child
  );
}
function Dv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? xf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && xf(e, t.context, !1),
    qs(e, t.containerInfo);
}
function Qf(e, t, n, r, u) {
  return Cr(), Ds(u), (t.flags |= 256), Ze(e, t, n, r), t.child;
}
var Ha = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ka(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $v(e, t, n) {
  var r = t.pendingProps,
    u = Oe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (u |= 1),
    ge(Oe, u & 1),
    e === null)
  )
    return (
      Fa(t),
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
                : (o = Ci(i, r, 0, null)),
              (e = Un(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ka(n)),
              (t.memoizedState = Ha),
              e)
            : Gs(t, i))
    );
  if (((u = e.memoizedState), u !== null && ((l = u.dehydrated), l !== null)))
    return C0(e, t, i, r, l, u, n);
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
          ? Ka(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ha),
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
function Gs(e, t) {
  return (
    (t = Ci({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function so(e, t, n, r) {
  return (
    r !== null && Ds(r),
    Tr(t, e.child, null, n),
    (e = Gs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function C0(e, t, n, r, u, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(D(422)))), so(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (u = t.mode),
        (r = Ci({ mode: 'visible', children: r.children }, u, 0, null)),
        (o = Un(o, u, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        (t.mode & 1) !== 0 && Tr(t, e.child, null, i),
        (t.child.memoizedState = Ka(i)),
        (t.memoizedState = Ha),
        o);
  if ((t.mode & 1) === 0) return so(e, t, i, null);
  if (u.data === '$!') {
    if (((r = u.nextSibling && u.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(D(419))), (r = Ql(o, r, void 0)), so(e, t, i, r);
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
    return tc(), (r = Ql(Error(D(421)))), so(e, t, i, r);
  }
  return u.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = F0.bind(null, e)),
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
        (_t[Et++] = Vn),
        (Kt = e.id),
        (Gt = e.overflow),
        (Vn = t)),
      (t = Gs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qa(e.return, t, n);
}
function Vl(e, t, n, r, u) {
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
function zv(e, t, n) {
  var r = t.pendingProps,
    u = r.revealOrder,
    o = r.tail;
  if ((Ze(e, t, r.children, n), (r = Oe.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vf(e, n, t);
        else if (e.tag === 19) Vf(e, n, t);
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
  if ((ge(Oe, r), (t.mode & 1) === 0)) t.memoizedState = null;
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
          Vl(t, !1, u, n, o);
        break;
      case 'backwards':
        for (n = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Go(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = n), (n = u), (u = e);
        }
        Vl(t, !0, n, null, o);
        break;
      case 'together':
        Vl(t, !1, null, null, void 0);
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
function T0(e, t, n) {
  switch (t.tag) {
    case 3:
      Dv(t), Cr();
      break;
    case 5:
      cv(t);
      break;
    case 1:
      it(t.type) && Qo(t);
      break;
    case 4:
      qs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        u = t.memoizedProps.value;
      ge(Wo, r._currentValue), (r._currentValue = u);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ge(Oe, Oe.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? $v(e, t, n)
          : (ge(Oe, Oe.current & 1),
            (e = tn(e, t, n)),
            e !== null ? e.sibling : null);
      ge(Oe, Oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return zv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((u = t.memoizedState),
        u !== null &&
          ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
        ge(Oe, Oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Mv(e, t, n);
  }
  return tn(e, t, n);
}
var bv, Ga, Lv, Fv;
bv = function (e, t) {
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
Ga = function () {};
Lv = function (e, t, n, r) {
  var u = e.memoizedProps;
  if (u !== r) {
    (e = t.stateNode), bn(Ut.current);
    var o = null;
    switch (n) {
      case 'input':
        (u = ma(e, u)), (r = ma(e, r)), (o = []);
        break;
      case 'select':
        (u = Ce({}, u, { value: void 0 })),
          (r = Ce({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (u = wa(e, u)), (r = wa(e, r)), (o = []);
        break;
      default:
        typeof u.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = qo);
    }
    Ea(n, r);
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
Fv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Yr(e, t) {
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
function R0(e, t, n) {
  var r = t.pendingProps;
  switch ((Ns(t), t.tag)) {
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
        we(Ye),
        Qs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (lo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), It !== null && (rs(It), (It = null)))),
        Ga(e, t),
        Ge(t),
        null
      );
    case 5:
      Us(t);
      var u = bn(Cu.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Lv(e, t, n, r, u),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return Ge(t), null;
        }
        if (((e = bn(Ut.current)), lo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ft] = t), (r[Ou] = o), (e = (t.mode & 1) !== 0), n)) {
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
              Zc(r, o), Se('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Se('invalid', r);
              break;
            case 'textarea':
              ef(r, o), Se('invalid', r);
          }
          Ea(n, o), (u = null);
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
              Zu(r), Jc(r, o, !0);
              break;
            case 'textarea':
              Zu(r), tf(r);
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
            e === 'http://www.w3.org/1999/xhtml' && (e = pp(n)),
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
            (e[Ou] = r),
            bv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ka(n, r)), n)) {
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
                Zc(e, r), (u = ma(e, r)), Se('invalid', e);
                break;
              case 'option':
                u = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (u = Ce({}, r, { value: void 0 })),
                  Se('invalid', e);
                break;
              case 'textarea':
                ef(e, r), (u = wa(e, r)), Se('invalid', e);
                break;
              default:
                u = r;
            }
            Ea(n, u), (l = u);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === 'style'
                  ? yp(e, a)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && vp(e, a))
                  : o === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && yu(e, a)
                    : typeof a == 'number' && yu(e, '' + a)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (hu.hasOwnProperty(o)
                      ? a != null && o === 'onScroll' && Se('scroll', e)
                      : a != null && Ss(e, o, a, i));
              }
            switch (n) {
              case 'input':
                Zu(e), Jc(e, r, !1);
                break;
              case 'textarea':
                Zu(e), tf(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + On(r.value));
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
      if (e && t.stateNode != null) Fv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(D(166));
        if (((n = bn(Cu.current)), bn(Ut.current), lo(t))) {
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
        (we(Oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ke && pt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          rv(), Cr(), (t.flags |= 98560), (o = !1);
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
        } else It !== null && (rs(It), (It = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (Oe.current & 1) !== 0
                ? De === 0 && (De = 3)
                : tc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return (
        Rr(), Ga(e, t), e === null && ku(t.stateNode.containerInfo), Ge(t), null
      );
    case 10:
      return bs(t.type._context), Ge(t), null;
    case 17:
      return it(t.type) && Uo(), Ge(t), null;
    case 19:
      if ((we(Oe), (o = t.memoizedState), o === null)) return Ge(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Yr(o, !1);
        else {
          if (De !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((i = Go(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Yr(o, !1),
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
                return ge(Oe, (Oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ae() > Ar &&
            ((t.flags |= 128), (r = !0), Yr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Go(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Yr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !ke)
            )
              return Ge(t), null;
          } else
            2 * Ae() - o.renderingStartTime > Ar &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Yr(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = Ae()),
          (t.sibling = null),
          (n = Oe.current),
          ge(Oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        ec(),
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
function j0(e, t) {
  switch ((Ns(t), t.tag)) {
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
        we(Ye),
        Qs(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Us(t), null;
    case 13:
      if (
        (we(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        Cr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return we(Oe), null;
    case 4:
      return Rr(), null;
    case 10:
      return bs(t.type._context), null;
    case 22:
    case 23:
      return ec(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var co = !1,
  Xe = !1,
  A0 = typeof WeakSet == 'function' ? WeakSet : Set,
  B = null;
function vr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Re(e, t, r);
      }
    else n.current = null;
}
function Xa(e, t, n) {
  try {
    n();
  } catch (r) {
    Re(e, t, r);
  }
}
var Bf = !1;
function I0(e, t) {
  if (((Ma = bo), (e = Vp()), Is(e))) {
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
  for (Na = { focusedElem: e, selectionRange: n }, bo = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (B = e);
    else
      for (; B !== null; ) {
        t = B;
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
                  var _ = g.memoizedProps,
                    C = g.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : jt(t.type, _),
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
          Re(t, t.return, m);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (g = Bf), (Bf = !1), g;
}
function fu(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var u = (r = r.next);
    do {
      if ((u.tag & e) === e) {
        var o = u.destroy;
        (u.destroy = void 0), o !== void 0 && Xa(t, n, o);
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
function Ya(e) {
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
function qv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), qv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ft], delete t[Ou], delete t[za], delete t[v0], delete t[h0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Uv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Uv(e.return)) return null;
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
function Za(e, t, n) {
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
    for (Za(e, t, n), e = e.sibling; e !== null; ) Za(e, t, n), (e = e.sibling);
}
function Ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ja(e, t, n), e = e.sibling; e !== null; ) Ja(e, t, n), (e = e.sibling);
}
var Qe = null,
  At = !1;
function on(e, t, n) {
  for (n = n.child; n !== null; ) Qv(e, t, n), (n = n.sibling);
}
function Qv(e, t, n) {
  if (qt && typeof qt.onCommitFiberUnmount == 'function')
    try {
      qt.onCommitFiberUnmount(mi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Xe || vr(n, t);
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
              ? zl(e.parentNode, n)
              : e.nodeType === 1 && zl(e, n),
            wu(e))
          : zl(Qe, n.stateNode));
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
        !Xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        u = r = r.next;
        do {
          var o = u,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Xa(n, t, i),
            (u = u.next);
        } while (u !== r);
      }
      on(e, t, n);
      break;
    case 1:
      if (
        !Xe &&
        (vr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Re(n, t, l);
        }
      on(e, t, n);
      break;
    case 21:
      on(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Xe = (r = Xe) || n.memoizedState !== null), on(e, t, n), (Xe = r))
        : on(e, t, n);
      break;
    default:
      on(e, t, n);
  }
}
function Hf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new A0()),
      t.forEach(function (r) {
        var u = q0.bind(null, e, r);
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
        Qv(o, i, u), (Qe = null), (At = !1);
        var a = u.alternate;
        a !== null && (a.return = null), (u.return = null);
      } catch (s) {
        Re(u, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Vv(t, e), (t = t.sibling);
}
function Vv(e, t) {
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
        } catch (_) {
          Re(e, e.return, _);
        }
        try {
          fu(5, e, e.return);
        } catch (_) {
          Re(e, e.return, _);
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
        } catch (_) {
          Re(e, e.return, _);
        }
      }
      if (r & 4 && ((u = e.stateNode), u != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && fp(u, o),
              ka(l, i);
            var s = ka(l, o);
            for (i = 0; i < a.length; i += 2) {
              var c = a[i],
                p = a[i + 1];
              c === 'style'
                ? yp(u, p)
                : c === 'dangerouslySetInnerHTML'
                ? vp(u, p)
                : c === 'children'
                ? yu(u, p)
                : Ss(u, c, p, s);
            }
            switch (l) {
              case 'input':
                ga(u, o);
                break;
              case 'textarea':
                dp(u, o);
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
            u[Ou] = o;
          } catch (_) {
            Re(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((Rt(t, e), bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (u = e.stateNode), (o = e.memoizedProps);
        try {
          u.nodeValue = o;
        } catch (_) {
          Re(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (Rt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          wu(t.containerInfo);
        } catch (_) {
          Re(e, e.return, _);
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
            (Zs = Ae())),
        r & 4 && Hf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Xe = (s = Xe) || c), Rt(t, e), (Xe = s)) : Rt(t, e),
        bt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && (e.mode & 1) !== 0)
        )
          for (B = e, c = e.child; c !== null; ) {
            for (p = B = c; B !== null; ) {
              switch (((d = B), (y = d.child), d.tag)) {
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
                    } catch (_) {
                      Re(r, n, _);
                    }
                  }
                  break;
                case 5:
                  vr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Gf(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = d), (B = y)) : Gf(p);
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
                      (l.style.display = hp('display', i)));
              } catch (_) {
                Re(e, e.return, _);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = s ? '' : p.memoizedProps;
              } catch (_) {
                Re(e, e.return, _);
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
      Rt(t, e), bt(e), r & 4 && Hf(e);
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
          if (Uv(n)) {
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
          var o = Wf(e);
          Ja(e, o, u);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Wf(e);
          Za(e, l, i);
          break;
        default:
          throw Error(D(161));
      }
    } catch (a) {
      Re(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function M0(e, t, n) {
  (B = e), Bv(e);
}
function Bv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var u = B,
      o = u.child;
    if (u.tag === 22 && r) {
      var i = u.memoizedState !== null || co;
      if (!i) {
        var l = u.alternate,
          a = (l !== null && l.memoizedState !== null) || Xe;
        l = co;
        var s = Xe;
        if (((co = i), (Xe = a) && !s))
          for (B = u; B !== null; )
            (i = B),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Xf(u)
                : a !== null
                ? ((a.return = i), (B = a))
                : Xf(u);
        for (; o !== null; ) (B = o), Bv(o), (o = o.sibling);
        (B = u), (co = l), (Xe = s);
      }
      Kf(e);
    } else
      (u.subtreeFlags & 8772) !== 0 && o !== null
        ? ((o.return = u), (B = o))
        : Kf(e);
  }
}
function Kf(e) {
  for (; B !== null; ) {
    var t = B;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xe || Oi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Xe)
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
              o !== null && Af(t, o, r);
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
                Af(t, i, n);
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
        Xe || (t.flags & 512 && Ya(t));
      } catch (d) {
        Re(t, t.return, d);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function Gf(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function Xf(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Oi(4, t);
          } catch (a) {
            Re(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var u = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Re(t, u, a);
            }
          }
          var o = t.return;
          try {
            Ya(t);
          } catch (a) {
            Re(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ya(t);
          } catch (a) {
            Re(t, i, a);
          }
      }
    } catch (a) {
      Re(t, t.return, a);
    }
    if (t === e) {
      B = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (B = l);
      break;
    }
    B = t.return;
  }
}
var N0 = Math.ceil,
  Zo = rn.ReactCurrentDispatcher,
  Xs = rn.ReactCurrentOwner,
  Pt = rn.ReactCurrentBatchConfig,
  ce = 0,
  qe = null,
  Ie = null,
  Be = 0,
  dt = 0,
  hr = jn(0),
  De = 0,
  Au = null,
  Wn = 0,
  xi = 0,
  Ys = 0,
  du = null,
  nt = null,
  Zs = 0,
  Ar = 1 / 0,
  Wt = null,
  Jo = !1,
  es = null,
  Sn = null,
  fo = !1,
  pn = null,
  ei = 0,
  pu = 0,
  ts = null,
  To = -1,
  Ro = 0;
function Je() {
  return (ce & 6) !== 0 ? Ae() : To !== -1 ? To : (To = Ae());
}
function wn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (ce & 2) !== 0 && Be !== 0
    ? Be & -Be
    : m0.transition !== null
    ? (Ro === 0 && (Ro = Tp()), Ro)
    : ((e = pe),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Dp(e.type))),
      e);
}
function Nt(e, t, n, r) {
  if (50 < pu) throw ((pu = 0), (ts = null), Error(D(185)));
  Fu(e, n, r),
    ((ce & 2) === 0 || e !== qe) &&
      (e === qe && ((ce & 2) === 0 && (xi |= n), De === 4 && fn(e, Be)),
      lt(e, r),
      n === 1 &&
        ce === 0 &&
        (t.mode & 1) === 0 &&
        ((Ar = Ae() + 500), Ei && An()));
}
function lt(e, t) {
  var n = e.callbackNode;
  mm(e, t);
  var r = zo(e, e === qe ? Be : 0);
  if (r === 0)
    n !== null && uf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && uf(n), t === 1))
      e.tag === 0 ? y0(Yf.bind(null, e)) : ev(Yf.bind(null, e)),
        d0(function () {
          (ce & 6) === 0 && An();
        }),
        (n = null);
    else {
      switch (Rp(r)) {
        case 1:
          n = Ps;
          break;
        case 4:
          n = xp;
          break;
        case 16:
          n = $o;
          break;
        case 536870912:
          n = Cp;
          break;
        default:
          n = $o;
      }
      n = Jv(n, Wv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Wv(e, t) {
  if (((To = -1), (Ro = 0), (ce & 6) !== 0)) throw Error(D(327));
  var n = e.callbackNode;
  if (_r() && e.callbackNode !== n) return null;
  var r = zo(e, e === qe ? Be : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ti(e, r);
  else {
    t = r;
    var u = ce;
    ce |= 2;
    var o = Kv();
    (qe !== e || Be !== t) && ((Wt = null), (Ar = Ae() + 500), qn(e, t));
    do
      try {
        z0();
        break;
      } catch (l) {
        Hv(e, l);
      }
    while (1);
    zs(),
      (Zo.current = o),
      (ce = u),
      Ie !== null ? (t = 0) : ((qe = null), (Be = 0), (t = De));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((u = Ta(e)), u !== 0 && ((r = u), (t = ns(e, u)))), t === 1)
    )
      throw ((n = Au), qn(e, 0), fn(e, r), lt(e, Ae()), n);
    if (t === 6) fn(e, r);
    else {
      if (
        ((u = e.current.alternate),
        (r & 30) === 0 &&
          !D0(u) &&
          ((t = ti(e, r)),
          t === 2 && ((o = Ta(e)), o !== 0 && ((r = o), (t = ns(e, o)))),
          t === 1))
      )
        throw ((n = Au), qn(e, 0), fn(e, r), lt(e, Ae()), n);
      switch (((e.finishedWork = u), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          Dn(e, nt, Wt);
          break;
        case 3:
          if (
            (fn(e, r), (r & 130023424) === r && ((t = Zs + 500 - Ae()), 10 < t))
          ) {
            if (zo(e, 0) !== 0) break;
            if (((u = e.suspendedLanes), (u & r) !== r)) {
              Je(), (e.pingedLanes |= e.suspendedLanes & u);
              break;
            }
            e.timeoutHandle = $a(Dn.bind(null, e, nt, Wt), t);
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
                : 1960 * N0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $a(Dn.bind(null, e, nt, Wt), r);
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
  return lt(e, Ae()), e.callbackNode === n ? Wv.bind(null, e) : null;
}
function ns(e, t) {
  var n = du;
  return (
    e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256),
    (e = ti(e, t)),
    e !== 2 && ((t = nt), (nt = n), t !== null && rs(t)),
    e
  );
}
function rs(e) {
  nt === null ? (nt = e) : nt.push.apply(nt, e);
}
function D0(e) {
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
    t &= ~Ys,
      t &= ~xi,
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
function Yf(e) {
  if ((ce & 6) !== 0) throw Error(D(327));
  _r();
  var t = zo(e, 0);
  if ((t & 1) === 0) return lt(e, Ae()), null;
  var n = ti(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ta(e);
    r !== 0 && ((t = r), (n = ns(e, r)));
  }
  if (n === 1) throw ((n = Au), qn(e, 0), fn(e, t), lt(e, Ae()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dn(e, nt, Wt),
    lt(e, Ae()),
    null
  );
}
function Js(e, t) {
  var n = ce;
  ce |= 1;
  try {
    return e(t);
  } finally {
    (ce = n), ce === 0 && ((Ar = Ae() + 500), Ei && An());
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
function ec() {
  (dt = hr.current), we(hr);
}
function qn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), f0(n)), Ie !== null))
    for (n = Ie.return; n !== null; ) {
      var r = n;
      switch ((Ns(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Uo();
          break;
        case 3:
          Rr(), we(ot), we(Ye), Qs();
          break;
        case 5:
          Us(r);
          break;
        case 4:
          Rr();
          break;
        case 13:
          we(Oe);
          break;
        case 19:
          we(Oe);
          break;
        case 10:
          bs(r.type._context);
          break;
        case 22:
        case 23:
          ec();
      }
      n = n.return;
    }
  if (
    ((qe = e),
    (Ie = e = _n(e.current, null)),
    (Be = dt = t),
    (De = 0),
    (Au = null),
    (Ys = xi = Wn = 0),
    (nt = du = null),
    zn !== null)
  ) {
    for (t = 0; t < zn.length; t++)
      if (((n = zn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var u = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = u), (r.next = i);
        }
        n.pending = r;
      }
    zn = null;
  }
  return e;
}
function Hv(e, t) {
  do {
    var n = Ie;
    try {
      if ((zs(), (Oo.current = Yo), Xo)) {
        for (var r = xe.memoizedState; r !== null; ) {
          var u = r.queue;
          u !== null && (u.pending = null), (r = r.next);
        }
        Xo = !1;
      }
      if (
        ((Bn = 0),
        (be = Me = xe = null),
        (cu = !1),
        (Tu = 0),
        (Xs.current = null),
        n === null || n.return === null)
      ) {
        (De = 1), (Au = t), (Ie = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = Be),
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
          var y = bf(i);
          if (y !== null) {
            (y.flags &= -257),
              Lf(y, i, l, o, t),
              y.mode & 1 && zf(o, s, t),
              (t = y),
              (a = s);
            var g = t.updateQueue;
            if (g === null) {
              var _ = new Set();
              _.add(a), (t.updateQueue = _);
            } else g.add(a);
            break e;
          } else {
            if ((t & 1) === 0) {
              zf(o, s, t), tc();
              break e;
            }
            a = Error(D(426));
          }
        } else if (ke && l.mode & 1) {
          var C = bf(i);
          if (C !== null) {
            (C.flags & 65536) === 0 && (C.flags |= 256),
              Lf(C, i, l, o, t),
              Ds(jr(a, l));
            break e;
          }
        }
        (o = a = jr(a, l)),
          De !== 4 && (De = 2),
          du === null ? (du = [o]) : du.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = jv(o, a, t);
              jf(o, h);
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
                var m = Av(o, l, t);
                jf(o, m);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Xv(n);
    } catch (w) {
      (t = w), Ie === n && n !== null && (Ie = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Kv() {
  var e = Zo.current;
  return (Zo.current = Yo), e === null ? Yo : e;
}
function tc() {
  (De === 0 || De === 3 || De === 2) && (De = 4),
    qe === null ||
      ((Wn & 268435455) === 0 && (xi & 268435455) === 0) ||
      fn(qe, Be);
}
function ti(e, t) {
  var n = ce;
  ce |= 2;
  var r = Kv();
  (qe !== e || Be !== t) && ((Wt = null), qn(e, t));
  do
    try {
      $0();
      break;
    } catch (u) {
      Hv(e, u);
    }
  while (1);
  if ((zs(), (ce = n), (Zo.current = r), Ie !== null)) throw Error(D(261));
  return (qe = null), (Be = 0), De;
}
function $0() {
  for (; Ie !== null; ) Gv(Ie);
}
function z0() {
  for (; Ie !== null && !am(); ) Gv(Ie);
}
function Gv(e) {
  var t = Zv(e.alternate, e, dt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xv(e) : (Ie = t),
    (Xs.current = null);
}
function Xv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = R0(n, t, dt)), n !== null)) {
        Ie = n;
        return;
      }
    } else {
      if (((n = j0(n, t)), n !== null)) {
        (n.flags &= 32767), (Ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (De = 6), (Ie = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      Ie = t;
      return;
    }
    Ie = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function Dn(e, t, n) {
  var r = pe,
    u = Pt.transition;
  try {
    (Pt.transition = null), (pe = 1), b0(e, t, n, r);
  } finally {
    (Pt.transition = u), (pe = r);
  }
  return null;
}
function b0(e, t, n, r) {
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
    (gm(e, o),
    e === qe && ((Ie = qe = null), (Be = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      fo ||
      ((fo = !0),
      Jv($o, function () {
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
      (Xs.current = null),
      I0(e, n),
      Vv(n, e),
      u0(Na),
      (bo = !!Ma),
      (Na = Ma = null),
      (e.current = n),
      M0(n),
      sm(),
      (ce = l),
      (pe = i),
      (Pt.transition = o);
  } else e.current = n;
  if (
    (fo && ((fo = !1), (pn = e), (ei = u)),
    (o = e.pendingLanes),
    o === 0 && (Sn = null),
    dm(n.stateNode),
    lt(e, Ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (u = t[n]), r(u.value, { componentStack: u.stack, digest: u.digest });
  if (Jo) throw ((Jo = !1), (e = es), (es = null), e);
  return (
    (ei & 1) !== 0 && e.tag !== 0 && _r(),
    (o = e.pendingLanes),
    (o & 1) !== 0 ? (e === ts ? pu++ : ((pu = 0), (ts = e))) : (pu = 0),
    An(),
    null
  );
}
function _r() {
  if (pn !== null) {
    var e = Rp(ei),
      t = Pt.transition,
      n = pe;
    try {
      if (((Pt.transition = null), (pe = 16 > e ? 16 : e), pn === null))
        var r = !1;
      else {
        if (((e = pn), (pn = null), (ei = 0), (ce & 6) !== 0))
          throw Error(D(331));
        var u = ce;
        for (ce |= 4, B = e.current; B !== null; ) {
          var o = B,
            i = o.child;
          if ((B.flags & 16) !== 0) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var s = l[a];
                for (B = s; B !== null; ) {
                  var c = B;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fu(8, c, o);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (B = p);
                  else
                    for (; B !== null; ) {
                      c = B;
                      var d = c.sibling,
                        y = c.return;
                      if ((qv(c), c === s)) {
                        B = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = y), (B = d);
                        break;
                      }
                      B = y;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var _ = g.child;
                if (_ !== null) {
                  g.child = null;
                  do {
                    var C = _.sibling;
                    (_.sibling = null), (_ = C);
                  } while (_ !== null);
                }
              }
              B = o;
            }
          }
          if ((o.subtreeFlags & 2064) !== 0 && i !== null)
            (i.return = o), (B = i);
          else
            e: for (; B !== null; ) {
              if (((o = B), (o.flags & 2048) !== 0))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fu(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (B = h);
                break e;
              }
              B = o.return;
            }
        }
        var f = e.current;
        for (B = f; B !== null; ) {
          i = B;
          var v = i.child;
          if ((i.subtreeFlags & 2064) !== 0 && v !== null)
            (v.return = i), (B = v);
          else
            e: for (i = f; B !== null; ) {
              if (((l = B), (l.flags & 2048) !== 0))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oi(9, l);
                  }
                } catch (w) {
                  Re(l, l.return, w);
                }
              if (l === i) {
                B = null;
                break e;
              }
              var m = l.sibling;
              if (m !== null) {
                (m.return = l.return), (B = m);
                break e;
              }
              B = l.return;
            }
        }
        if (
          ((ce = u), An(), qt && typeof qt.onPostCommitFiberRoot == 'function')
        )
          try {
            qt.onPostCommitFiberRoot(mi, e);
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
function Zf(e, t, n) {
  (t = jr(n, t)),
    (t = jv(e, t, 1)),
    (e = gn(e, t, 1)),
    (t = Je()),
    e !== null && (Fu(e, 1, t), lt(e, t));
}
function Re(e, t, n) {
  if (e.tag === 3) Zf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Zf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Sn === null || !Sn.has(r)))
        ) {
          (e = jr(n, e)),
            (e = Av(t, e, 1)),
            (t = gn(t, e, 1)),
            (e = Je()),
            t !== null && (Fu(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function L0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    qe === e &&
      (Be & n) === n &&
      (De === 4 || (De === 3 && (Be & 130023424) === Be && 500 > Ae() - Zs)
        ? qn(e, 0)
        : (Ys |= n)),
    lt(e, t);
}
function Yv(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = to), (to <<= 1), (to & 130023424) === 0 && (to = 4194304)));
  var n = Je();
  (e = en(e, t)), e !== null && (Fu(e, t, n), lt(e, n));
}
function F0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Yv(e, n);
}
function q0(e, t) {
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
  r !== null && r.delete(t), Yv(e, n);
}
var Zv;
Zv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ot.current) ut = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (ut = !1), T0(e, t, n);
      ut = (e.flags & 131072) !== 0;
    }
  else (ut = !1), ke && (t.flags & 1048576) !== 0 && tv(t, Bo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Co(e, t), (e = t.pendingProps);
      var u = xr(t, Ye.current);
      wr(t, n), (u = Bs(null, t, r, e, u, n));
      var o = Ws();
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
            Fs(t),
            (u.updater = ki),
            (t.stateNode = u),
            (u._reactInternals = t),
            Qa(t, r, e, n),
            (t = Wa(null, t, r, !0, o, n)))
          : ((t.tag = 0), ke && o && Ms(t), Ze(null, t, u, n), (t = t.child)),
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
          (u = t.tag = Q0(r)),
          (e = jt(r, e)),
          u)
        ) {
          case 0:
            t = Ba(null, t, r, e, n);
            break e;
          case 1:
            t = Uf(null, t, r, e, n);
            break e;
          case 11:
            t = Ff(null, t, r, e, n);
            break e;
          case 14:
            t = qf(null, t, r, jt(r.type, e), n);
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
        Ba(e, t, r, u, n)
      );
    case 1:
      return (
        (r = t.type),
        (u = t.pendingProps),
        (u = t.elementType === r ? u : jt(r, u)),
        Uf(e, t, r, u, n)
      );
    case 3:
      e: {
        if ((Dv(t), e === null)) throw Error(D(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (u = o.element),
          ov(e, t),
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
            (u = jr(Error(D(423)), t)), (t = Qf(e, t, r, n, u));
            break e;
          } else if (r !== u) {
            (u = jr(Error(D(424)), t)), (t = Qf(e, t, r, n, u));
            break e;
          } else
            for (
              pt = mn(t.stateNode.containerInfo.firstChild),
                vt = t,
                ke = !0,
                It = null,
                n = sv(t, null, r, n),
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
        cv(t),
        e === null && Fa(t),
        (r = t.type),
        (u = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = u.children),
        Da(r, u) ? (i = null) : o !== null && Da(r, o) && (t.flags |= 32),
        Nv(e, t),
        Ze(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Fa(t), null;
    case 13:
      return $v(e, t, n);
    case 4:
      return (
        qs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Tr(t, null, r, n)) : Ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (u = t.pendingProps),
        (u = t.elementType === r ? u : jt(r, u)),
        Ff(e, t, r, u, n)
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
                      (a = Yt(-1, n & -n)), (a.tag = 2);
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
                      qa(o.return, n, t),
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
                  qa(i, n, t),
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
        (u = Ot(u)),
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
        qf(e, t, r, u, n)
      );
    case 15:
      return Iv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (u = t.pendingProps),
        (u = t.elementType === r ? u : jt(r, u)),
        Co(e, t),
        (t.tag = 1),
        it(r) ? ((e = !0), Qo(t)) : (e = !1),
        wr(t, n),
        lv(t, r, u),
        Qa(t, r, u, n),
        Wa(null, t, r, !0, e, n)
      );
    case 19:
      return zv(e, t, n);
    case 22:
      return Mv(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function Jv(e, t) {
  return Op(e, t);
}
function U0(e, t, n, r) {
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
  return new U0(e, t, n, r);
}
function nc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Q0(e) {
  if (typeof e == 'function') return nc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _s)) return 11;
    if (e === Es) return 14;
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
  if (((r = e), typeof e == 'function')) nc(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case or:
        return Un(n.children, u, o, t);
      case ws:
        (i = 8), (u |= 8);
        break;
      case pa:
        return (
          (e = kt(12, n, t, u | 2)), (e.elementType = pa), (e.lanes = o), e
        );
      case va:
        return (e = kt(13, n, t, u)), (e.elementType = va), (e.lanes = o), e;
      case ha:
        return (e = kt(19, n, t, u)), (e.elementType = ha), (e.lanes = o), e;
      case ap:
        return Ci(n, u, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case ip:
              i = 10;
              break e;
            case lp:
              i = 9;
              break e;
            case _s:
              i = 11;
              break e;
            case Es:
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
function Ci(e, t, n, r) {
  return (
    (e = kt(22, e, r, t)),
    (e.elementType = ap),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bl(e, t, n) {
  return (e = kt(6, e, null, t)), (e.lanes = n), e;
}
function Wl(e, t, n) {
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
function V0(e, t, n, r, u) {
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
    (this.eventTimes = xl(0)),
    (this.expirationTimes = xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = u),
    (this.mutableSourceEagerHydrationData = null);
}
function rc(e, t, n, r, u, o, i, l, a) {
  return (
    (e = new V0(e, t, n, l, a)),
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
    Fs(o),
    e
  );
}
function B0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ur,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function eh(e) {
  if (!e) return xn;
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
    if (it(n)) return Jp(e, n, t);
  }
  return t;
}
function th(e, t, n, r, u, o, i, l, a) {
  return (
    (e = rc(n, r, !0, e, u, o, i, l, a)),
    (e.context = eh(null)),
    (n = e.current),
    (r = Je()),
    (u = wn(n)),
    (o = Yt(r, u)),
    (o.callback = t != null ? t : null),
    gn(n, o, u),
    (e.current.lanes = u),
    Fu(e, u, r),
    lt(e, r),
    e
  );
}
function Ti(e, t, n, r) {
  var u = t.current,
    o = Je(),
    i = wn(u);
  return (
    (n = eh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yt(o, i)),
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
function Jf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uc(e, t) {
  Jf(e, t), (e = e.alternate) && Jf(e, t);
}
function W0() {
  return null;
}
var nh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function oc(e) {
  this._internalRoot = e;
}
Ri.prototype.render = oc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  Ti(e, t, null, null);
};
Ri.prototype.unmount = oc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Hn(function () {
      Ti(null, e, null, null);
    }),
      (t[Jt] = null);
  }
};
function Ri(e) {
  this._internalRoot = e;
}
Ri.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ip();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
    cn.splice(n, 0, e), n === 0 && Np(e);
  }
};
function ic(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ji(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ed() {}
function H0(e, t, n, r, u) {
  if (u) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var s = ni(i);
        o.call(s);
      };
    }
    var i = th(t, r, e, 0, null, !1, !1, '', ed);
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
  var a = rc(e, 0, !1, null, null, !1, !1, '', ed);
  return (
    (e._reactRootContainer = a),
    (e[Jt] = a.current),
    ku(e.nodeType === 8 ? e.parentNode : e),
    Hn(function () {
      Ti(t, a, n, r);
    }),
    a
  );
}
function Ai(e, t, n, r, u) {
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
    Ti(t, i, e, u);
  } else i = H0(n, t, e, u, r);
  return ni(i);
}
jp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = nu(t.pendingLanes);
        n !== 0 &&
          (Os(t, n | 1),
          lt(t, Ae()),
          (ce & 6) === 0 && ((Ar = Ae() + 500), An()));
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
        uc(e, 1);
  }
};
xs = function (e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var n = Je();
      Nt(t, e, 134217728, n);
    }
    uc(e, 134217728);
  }
};
Ap = function (e) {
  if (e.tag === 13) {
    var t = wn(e),
      n = en(e, t);
    if (n !== null) {
      var r = Je();
      Nt(n, e, t, r);
    }
    uc(e, t);
  }
};
Ip = function () {
  return pe;
};
Mp = function (e, t) {
  var n = pe;
  try {
    return (pe = e), t();
  } finally {
    pe = n;
  }
};
Oa = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ga(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var u = _i(r);
            if (!u) throw Error(D(90));
            cp(r), ga(r, u);
          }
        }
      }
      break;
    case 'textarea':
      dp(e, n);
      break;
    case 'select':
      (t = n.value), t != null && yr(e, !!n.multiple, t, !1);
  }
};
Sp = Js;
wp = Hn;
var K0 = { usingClientEntryPoint: !1, Events: [Uu, sr, _i, mp, gp, Js] },
  Zr = {
    findFiberByHostInstance: $n,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  G0 = {
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
      return (e = kp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zr.findFiberByHostInstance || W0,
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
      (mi = po.inject(G0)), (qt = po);
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K0;
mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ic(t)) throw Error(D(200));
  return B0(e, t, null, n);
};
mt.createRoot = function (e, t) {
  if (!ic(e)) throw Error(D(299));
  var n = !1,
    r = '',
    u = nh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
    (t = rc(e, 1, !1, null, null, n, !1, r, u)),
    (e[Jt] = t.current),
    ku(e.nodeType === 8 ? e.parentNode : e),
    new oc(t)
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
  return (e = kp(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
  return Hn(e);
};
mt.hydrate = function (e, t, n) {
  if (!ji(t)) throw Error(D(200));
  return Ai(null, e, t, !0, n);
};
mt.hydrateRoot = function (e, t, n) {
  if (!ic(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    u = !1,
    o = '',
    i = nh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (u = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = th(t, null, e, 1, n != null ? n : null, u, !1, o, i)),
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
  return new Ri(t);
};
mt.render = function (e, t, n) {
  if (!ji(t)) throw Error(D(200));
  return Ai(null, e, t, !1, n);
};
mt.unmountComponentAtNode = function (e) {
  if (!ji(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (Hn(function () {
        Ai(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Jt] = null);
        });
      }),
      !0)
    : !1;
};
mt.unstable_batchedUpdates = Js;
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ji(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return Ai(e, t, n, !1, r);
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
})(yi);
function X0(e) {
  e();
}
let rh = X0;
const Y0 = e => (rh = e),
  Z0 = () => rh,
  Cn = G.exports.createContext(null);
function uh() {
  return G.exports.useContext(Cn);
}
const J0 = () => {
  throw new Error('uSES not initialized!');
};
let oh = J0;
const eg = e => {
    oh = e;
  },
  tg = (e, t) => e === t;
function ng(e = Cn) {
  const t = e === Cn ? uh : () => G.exports.useContext(e);
  return function (r, u = tg) {
    const { store: o, subscription: i, getServerState: l } = t(),
      a = oh(i.addNestedSub, o.getState, l || o.getState, r, u);
    return G.exports.useDebugValue(a), a;
  };
}
const rg = ng();
var ih = { exports: {} },
  ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ue = typeof Symbol == 'function' && Symbol.for,
  lc = Ue ? Symbol.for('react.element') : 60103,
  ac = Ue ? Symbol.for('react.portal') : 60106,
  Ii = Ue ? Symbol.for('react.fragment') : 60107,
  Mi = Ue ? Symbol.for('react.strict_mode') : 60108,
  Ni = Ue ? Symbol.for('react.profiler') : 60114,
  Di = Ue ? Symbol.for('react.provider') : 60109,
  $i = Ue ? Symbol.for('react.context') : 60110,
  sc = Ue ? Symbol.for('react.async_mode') : 60111,
  zi = Ue ? Symbol.for('react.concurrent_mode') : 60111,
  bi = Ue ? Symbol.for('react.forward_ref') : 60112,
  Li = Ue ? Symbol.for('react.suspense') : 60113,
  ug = Ue ? Symbol.for('react.suspense_list') : 60120,
  Fi = Ue ? Symbol.for('react.memo') : 60115,
  qi = Ue ? Symbol.for('react.lazy') : 60116,
  og = Ue ? Symbol.for('react.block') : 60121,
  ig = Ue ? Symbol.for('react.fundamental') : 60117,
  lg = Ue ? Symbol.for('react.responder') : 60118,
  ag = Ue ? Symbol.for('react.scope') : 60119;
function St(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case lc:
        switch (((e = e.type), e)) {
          case sc:
          case zi:
          case Ii:
          case Ni:
          case Mi:
          case Li:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case $i:
              case bi:
              case qi:
              case Fi:
              case Di:
                return e;
              default:
                return t;
            }
        }
      case ac:
        return t;
    }
  }
}
function lh(e) {
  return St(e) === zi;
}
ve.AsyncMode = sc;
ve.ConcurrentMode = zi;
ve.ContextConsumer = $i;
ve.ContextProvider = Di;
ve.Element = lc;
ve.ForwardRef = bi;
ve.Fragment = Ii;
ve.Lazy = qi;
ve.Memo = Fi;
ve.Portal = ac;
ve.Profiler = Ni;
ve.StrictMode = Mi;
ve.Suspense = Li;
ve.isAsyncMode = function (e) {
  return lh(e) || St(e) === sc;
};
ve.isConcurrentMode = lh;
ve.isContextConsumer = function (e) {
  return St(e) === $i;
};
ve.isContextProvider = function (e) {
  return St(e) === Di;
};
ve.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === lc;
};
ve.isForwardRef = function (e) {
  return St(e) === bi;
};
ve.isFragment = function (e) {
  return St(e) === Ii;
};
ve.isLazy = function (e) {
  return St(e) === qi;
};
ve.isMemo = function (e) {
  return St(e) === Fi;
};
ve.isPortal = function (e) {
  return St(e) === ac;
};
ve.isProfiler = function (e) {
  return St(e) === Ni;
};
ve.isStrictMode = function (e) {
  return St(e) === Mi;
};
ve.isSuspense = function (e) {
  return St(e) === Li;
};
ve.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ii ||
    e === zi ||
    e === Ni ||
    e === Mi ||
    e === Li ||
    e === ug ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === qi ||
        e.$$typeof === Fi ||
        e.$$typeof === Di ||
        e.$$typeof === $i ||
        e.$$typeof === bi ||
        e.$$typeof === ig ||
        e.$$typeof === lg ||
        e.$$typeof === ag ||
        e.$$typeof === og))
  );
};
ve.typeOf = St;
(function (e) {
  e.exports = ve;
})(ih);
var ah = ih.exports,
  sg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  cg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  sh = {};
sh[ah.ForwardRef] = sg;
sh[ah.Memo] = cg;
var fg = { exports: {} },
  he = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cc = Symbol.for('react.element'),
  fc = Symbol.for('react.portal'),
  Ui = Symbol.for('react.fragment'),
  Qi = Symbol.for('react.strict_mode'),
  Vi = Symbol.for('react.profiler'),
  Bi = Symbol.for('react.provider'),
  Wi = Symbol.for('react.context'),
  dg = Symbol.for('react.server_context'),
  Hi = Symbol.for('react.forward_ref'),
  Ki = Symbol.for('react.suspense'),
  Gi = Symbol.for('react.suspense_list'),
  Xi = Symbol.for('react.memo'),
  Yi = Symbol.for('react.lazy'),
  pg = Symbol.for('react.offscreen'),
  ch;
ch = Symbol.for('react.module.reference');
function Ct(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case cc:
        switch (((e = e.type), e)) {
          case Ui:
          case Vi:
          case Qi:
          case Ki:
          case Gi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case dg:
              case Wi:
              case Hi:
              case Yi:
              case Xi:
              case Bi:
                return e;
              default:
                return t;
            }
        }
      case fc:
        return t;
    }
  }
}
he.ContextConsumer = Wi;
he.ContextProvider = Bi;
he.Element = cc;
he.ForwardRef = Hi;
he.Fragment = Ui;
he.Lazy = Yi;
he.Memo = Xi;
he.Portal = fc;
he.Profiler = Vi;
he.StrictMode = Qi;
he.Suspense = Ki;
he.SuspenseList = Gi;
he.isAsyncMode = function () {
  return !1;
};
he.isConcurrentMode = function () {
  return !1;
};
he.isContextConsumer = function (e) {
  return Ct(e) === Wi;
};
he.isContextProvider = function (e) {
  return Ct(e) === Bi;
};
he.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === cc;
};
he.isForwardRef = function (e) {
  return Ct(e) === Hi;
};
he.isFragment = function (e) {
  return Ct(e) === Ui;
};
he.isLazy = function (e) {
  return Ct(e) === Yi;
};
he.isMemo = function (e) {
  return Ct(e) === Xi;
};
he.isPortal = function (e) {
  return Ct(e) === fc;
};
he.isProfiler = function (e) {
  return Ct(e) === Vi;
};
he.isStrictMode = function (e) {
  return Ct(e) === Qi;
};
he.isSuspense = function (e) {
  return Ct(e) === Ki;
};
he.isSuspenseList = function (e) {
  return Ct(e) === Gi;
};
he.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ui ||
    e === Vi ||
    e === Qi ||
    e === Ki ||
    e === Gi ||
    e === pg ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Yi ||
        e.$$typeof === Xi ||
        e.$$typeof === Bi ||
        e.$$typeof === Wi ||
        e.$$typeof === Hi ||
        e.$$typeof === ch ||
        e.getModuleId !== void 0))
  );
};
he.typeOf = Ct;
(function (e) {
  e.exports = he;
})(fg);
function vg() {
  const e = Z0();
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
const td = { notify() {}, get: () => [] };
function hg(e, t) {
  let n,
    r = td;
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
    n || ((n = t ? t.addNestedSub(i) : e.subscribe(i)), (r = vg()));
  }
  function s() {
    n && (n(), (n = void 0), r.clear(), (r = td));
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
const yg =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  mg = yg ? G.exports.useLayoutEffect : G.exports.useEffect;
function nd(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ri(e, t) {
  if (nd(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let u = 0; u < n.length; u++)
    if (!Object.prototype.hasOwnProperty.call(t, n[u]) || !nd(e[n[u]], t[n[u]]))
      return !1;
  return !0;
}
function gg({ store: e, context: t, children: n, serverState: r }) {
  const u = G.exports.useMemo(() => {
      const l = hg(e);
      return {
        store: e,
        subscription: l,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    o = G.exports.useMemo(() => e.getState(), [e]);
  return (
    mg(() => {
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
    Le((t || Cn).Provider, { value: u, children: n })
  );
}
function fh(e = Cn) {
  const t = e === Cn ? uh : () => G.exports.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const dh = fh();
function Sg(e = Cn) {
  const t = e === Cn ? dh : fh(e);
  return function () {
    return t().dispatch;
  };
}
const wg = Sg();
eg(ep.exports.useSyncExternalStoreWithSelector);
Y0(yi.exports.unstable_batchedUpdates);
/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function us() {
  return (
    (us = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    us.apply(this, arguments)
  );
}
var Ln;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Ln || (Ln = {}));
const rd = 'popstate';
function _g(e) {
  e === void 0 && (e = {});
  function t(r, u) {
    let { pathname: o, search: i, hash: l } = r.location;
    return os(
      '',
      { pathname: o, search: i, hash: l },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || 'default'
    );
  }
  function n(r, u) {
    return typeof u == 'string' ? u : kg(u);
  }
  return Pg(t, n, null, e);
}
function Eg() {
  return Math.random().toString(36).substr(2, 8);
}
function ud(e) {
  return { usr: e.state, key: e.key };
}
function os(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    us(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? ph(t) : t,
      { state: n, key: (t && t.key) || r || Eg() }
    )
  );
}
function kg(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function ph(e) {
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
function Pg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: u = document.defaultView, v5Compat: o = !1 } = r,
    i = u.history,
    l = Ln.Pop,
    a = null;
  function s() {
    (l = Ln.Pop), a && a({ action: l, location: d.location });
  }
  function c(y, g) {
    l = Ln.Push;
    let _ = os(d.location, y, g);
    n && n(_, y);
    let C = ud(_),
      h = d.createHref(_);
    try {
      i.pushState(C, '', h);
    } catch {
      u.location.assign(h);
    }
    o && a && a({ action: l, location: _ });
  }
  function p(y, g) {
    l = Ln.Replace;
    let _ = os(d.location, y, g);
    n && n(_, y);
    let C = ud(_),
      h = d.createHref(_);
    i.replaceState(C, '', h), o && a && a({ action: l, location: _ });
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
        u.addEventListener(rd, s),
        (a = y),
        () => {
          u.removeEventListener(rd, s), (a = null);
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
var od;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(od || (od = {}));
function Og(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function xg(e, t) {
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
 */ function Cg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Tg = typeof Object.is == 'function' ? Object.is : Cg,
  { useState: Rg, useEffect: jg, useLayoutEffect: Ag, useDebugValue: Ig } = fa;
function Mg(e, t, n) {
  const r = t(),
    [{ inst: u }, o] = Rg({ inst: { value: r, getSnapshot: t } });
  return (
    Ag(() => {
      (u.value = r), (u.getSnapshot = t), Hl(u) && o({ inst: u });
    }, [e, r, t]),
    jg(
      () => (
        Hl(u) && o({ inst: u }),
        e(() => {
          Hl(u) && o({ inst: u });
        })
      ),
      [e]
    ),
    Ig(r),
    r
  );
}
function Hl(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Tg(n, r);
  } catch {
    return !0;
  }
}
function Ng(e, t, n) {
  return t();
}
const Dg =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  $g = !Dg,
  zg = $g ? Ng : Mg;
'useSyncExternalStore' in fa && (e => e.useSyncExternalStore)(fa);
const bg = G.exports.createContext(null),
  vh = G.exports.createContext(null);
function Lg() {
  return G.exports.useContext(vh) != null;
}
var id;
(function (e) {
  e.UseRevalidator = 'useRevalidator';
})(id || (id = {}));
var ld;
(function (e) {
  (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(ld || (ld = {}));
function Fg(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: u = Ln.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  Lg() && xg(!1);
  let l = t.replace(/^\/*/, '/'),
    a = G.exports.useMemo(
      () => ({ basename: l, navigator: o, static: i }),
      [l, o, i]
    );
  typeof r == 'string' && (r = ph(r));
  let {
      pathname: s = '/',
      search: c = '',
      hash: p = '',
      state: d = null,
      key: y = 'default',
    } = r,
    g = G.exports.useMemo(() => {
      let _ = Og(s, l);
      return _ == null
        ? null
        : { pathname: _, search: c, hash: p, state: d, key: y };
    }, [l, s, c, p, d, y]);
  return g == null
    ? null
    : Le(bg.Provider, {
        value: a,
        children: Le(vh.Provider, {
          children: n,
          value: { location: g, navigationType: u },
        }),
      });
}
var ad;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(ad || (ad = {}));
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
 */ function qg(e) {
  let { basename: t, children: n, window: r } = e,
    u = G.exports.useRef();
  u.current == null && (u.current = _g({ window: r, v5Compat: !0 }));
  let o = u.current,
    [i, l] = G.exports.useState({ action: o.action, location: o.location });
  return (
    G.exports.useLayoutEffect(() => o.listen(l), [o]),
    Le(Fg, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: o,
    })
  );
}
var sd;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(sd || (sd = {}));
var cd;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(cd || (cd = {}));
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
        (typeof u == 'function' && Function.toString.call(u) === Xg)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Er] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Er]) ||
      Zi(e) ||
      Ji(e))
  );
}
function Ug(e) {
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
    : Zi(e)
    ? 2
    : Ji(e)
    ? 3
    : 0;
}
function En(e, t) {
  return Tn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ao(e, t) {
  return Tn(e) === 2 ? e.get(t) : e[t];
}
function hh(e, t, n) {
  var r = Tn(e);
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function yh(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Zi(e) {
  return Kg && e instanceof Map;
}
function Ji(e) {
  return Gg && e instanceof Set;
}
function ze(e) {
  return e.o || e.t;
}
function dc(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Sh(e);
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
function el(e, t) {
  return (
    t === void 0 && (t = !1),
    pc(e) ||
      $t(e) ||
      !st(e) ||
      (Tn(e) > 1 && (e.set = e.add = e.clear = e.delete = Qg),
      Object.freeze(e),
      t &&
        nn(
          e,
          function (n, r) {
            return el(r, !0);
          },
          !0
        )),
    e
  );
}
function Qg() {
  Fe(2);
}
function pc(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e);
}
function Qt(e) {
  var t = ls[e];
  return t || Fe(18, e), t;
}
function vc(e, t) {
  ls[e] || (ls[e] = t);
}
function Iu() {
  return Nu;
}
function Kl(e, t) {
  t && (Qt('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function ui(e) {
  is(e), e.p.forEach(Vg), (e.p = null);
}
function is(e) {
  e === Nu && (Nu = e.l);
}
function fd(e) {
  return (Nu = { p: [], l: Nu, h: e, m: !0, _: 0 });
}
function Vg(e) {
  var t = e[ie];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function Gl(e, t) {
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
    e !== tl ? e : void 0
  );
}
function oi(e, t, n) {
  if (pc(t)) return t;
  var r = t[ie];
  if (!r)
    return (
      nn(
        t,
        function (o, i) {
          return dd(e, r, t, o, i, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return ii(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var u = r.i === 4 || r.i === 5 ? (r.o = dc(r.k)) : r.o;
    nn(r.i === 3 ? new Set(u) : u, function (o, i) {
      return dd(e, r, u, o, i, n);
    }),
      ii(e, u, !1),
      n && e.u && Qt('Patches').R(r, n, e.u, e.s);
  }
  return r.o;
}
function dd(e, t, n, r, u, o) {
  if ($t(u)) {
    var i = oi(e, u, o && t && t.i !== 3 && !En(t.D, r) ? o.concat(r) : void 0);
    if ((hh(n, r, i), !$t(i))) return;
    e.m = !1;
  }
  if (st(u) && !pc(u)) {
    if (!e.h.F && e._ < 1) return;
    oi(e, u), (t && t.A.l) || ii(e, u);
  }
}
function ii(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && el(t, n);
}
function Xl(e, t) {
  var n = e[ie];
  return (n ? ze(n) : e)[t];
}
function pd(e, t) {
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
function Yl(e) {
  e.o || (e.o = dc(e.t));
}
function Mu(e, t, n) {
  var r = Zi(t)
    ? Qt('MapSet').N(t, n)
    : Ji(t)
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
function mh(e) {
  return (
    $t(e) || Fe(22, e),
    (function t(n) {
      if (!st(n)) return n;
      var r,
        u = n[ie],
        o = Tn(n);
      if (u) {
        if (!u.P && (u.i < 4 || !Qt('ES5').K(u))) return u.t;
        (u.I = !0), (r = vd(n, o)), (u.I = !1);
      } else r = vd(n, o);
      return (
        nn(r, function (i, l) {
          (u && Ao(u.t, i) === l) || hh(r, i, t(l));
        }),
        o === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function vd(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return dc(e);
}
function hc() {
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
        if (y ? y.t !== p : !yh(d, p)) return !0;
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
  vc('ES5', {
    J: function (o, i) {
      var l = Array.isArray(o),
        a = (function (c, p) {
          if (c) {
            for (var d = Array(p.length), y = 0; y < p.length; y++)
              Object.defineProperty(d, '' + y, e(y, !0));
            return d;
          }
          var g = Sh(p);
          delete g[ie];
          for (var _ = kr(g), C = 0; C < _.length; C++) {
            var h = _[C];
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
                      for (var _ = d.length; _ < p.length; _++) y[_] = !1;
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
function yc() {
  function e(r) {
    if (!st(r)) return r;
    if (Array.isArray(r)) return r.map(e);
    if (Zi(r))
      return new Map(
        Array.from(r.entries()).map(function (i) {
          return [i[0], e(i[1])];
        })
      );
    if (Ji(r)) return new Set(Array.from(r).map(e));
    var u = Object.create(Object.getPrototypeOf(r));
    for (var o in r) u[o] = e(r[o]);
    return En(r, Er) && (u[Er] = r[Er]), u;
  }
  function t(r) {
    return $t(r) ? e(r) : r;
  }
  var n = 'add';
  vc('Patches', {
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
              var _ = Ao(p, y),
                C = Ao(d, y),
                h = g ? (En(p, y) ? 'replace' : n) : 'remove';
              if (_ !== C || h !== 'replace') {
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
                      ? { op: n, path: f, value: t(_) }
                      : { op: 'replace', path: f, value: t(_) }
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
              var _ = [c, s];
              (s = _[0]), (c = _[1]);
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
                var _ = a.concat([y]);
                s.push({ op: 'remove', path: _, value: g }),
                  c.unshift({ op: n, path: _, value: g });
              }
              y++;
            }),
              (y = 0),
              d.forEach(function (g) {
                if (!p.has(g)) {
                  var _ = a.concat([y]);
                  s.push({ op: n, path: _, value: g }),
                    c.unshift({ op: 'remove', path: _, value: g });
                }
                y++;
              });
          })(r, u, o, i);
      }
    },
    M: function (r, u, o, i) {
      o.push({ op: 'replace', path: [], value: u === tl ? void 0 : u }),
        i.push({ op: 'replace', path: [], value: r });
    },
  });
}
function gh() {
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
    l.O && Fe(3, JSON.stringify(ze(l)));
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
            return ze(this[ie]).size;
          },
        }),
        (a.has = function (s) {
          return ze(this[ie]).has(s);
        }),
        (a.set = function (s, c) {
          var p = this[ie];
          return (
            r(p),
            (ze(p).has(s) && ze(p).get(s) === c) ||
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
            ze(s).size &&
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
          ze(this[ie]).forEach(function (d, y) {
            s.call(c, p.get(y), y, p);
          });
        }),
        (a.get = function (s) {
          var c = this[ie];
          r(c);
          var p = ze(c).get(s);
          if (c.I || !st(p) || p !== c.t.get(s)) return p;
          var d = Mu(c.A.h, p, c);
          return t(c), c.o.set(s, d), d;
        }),
        (a.keys = function () {
          return ze(this[ie]).keys();
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
            return ze(this[ie]).size;
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
          r(s), ze(s).size && (n(s), rt(s), s.o.clear());
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
  vc('MapSet', {
    N: function (l, a) {
      return new o(l, a);
    },
    T: function (l, a) {
      return new i(l, a);
    },
  });
}
function Bg() {
  hc(), gh(), yc();
}
function Wg(e) {
  return e;
}
function Hg(e) {
  return e;
}
var hd,
  Nu,
  mc = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  Kg = typeof Map < 'u',
  Gg = typeof Set < 'u',
  yd = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  tl = mc
    ? Symbol.for('immer-nothing')
    : (((hd = {})['immer-nothing'] = !0), hd),
  Er = mc ? Symbol.for('immer-draftable') : '__$immer_draftable',
  ie = mc ? Symbol.for('immer-state') : '__$immer_state',
  vo = (typeof Symbol < 'u' && Symbol.iterator) || '@@iterator',
  Xg = '' + Object.prototype.constructor,
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
  Sh =
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
  ls = {},
  Du = {
    get: function (e, t) {
      if (t === ie) return e;
      var n = ze(e);
      if (!En(n, t))
        return (function (u, o, i) {
          var l,
            a = pd(o, i);
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
        ? (Yl(e), (e.o[t] = Mu(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in ze(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(ze(e));
    },
    set: function (e, t, n) {
      var r = pd(ze(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var u = Xl(ze(e), t),
          o = u == null ? void 0 : u[ie];
        if (o && o.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
        if (yh(n, u) && (n !== void 0 || En(e.t, t))) return !0;
        Yl(e), rt(e);
      }
      return (
        (e.o[t] === n && typeof n != 'number' && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        Xl(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), Yl(e), rt(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = ze(e),
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
var wh = (function () {
    function e(n) {
      var r = this;
      (this.g = yd),
        (this.F = !0),
        (this.produce = function (u, o, i) {
          if (typeof u == 'function' && typeof o != 'function') {
            var l = o;
            o = u;
            var a = r;
            return function (_) {
              var C = this;
              _ === void 0 && (_ = l);
              for (
                var h = arguments.length, f = Array(h > 1 ? h - 1 : 0), v = 1;
                v < h;
                v++
              )
                f[v - 1] = arguments[v];
              return a.produce(_, function (m) {
                var w;
                return (w = o).call.apply(w, [C, m].concat(f));
              });
            };
          }
          var s;
          if (
            (typeof o != 'function' && Fe(6),
            i !== void 0 && typeof i != 'function' && Fe(7),
            st(u))
          ) {
            var c = fd(r),
              p = Mu(r, u, void 0),
              d = !0;
            try {
              (s = o(p)), (d = !1);
            } finally {
              d ? ui(c) : is(c);
            }
            return typeof Promise < 'u' && s instanceof Promise
              ? s.then(
                  function (_) {
                    return Kl(c, i), Gl(_, c);
                  },
                  function (_) {
                    throw (ui(c), _);
                  }
                )
              : (Kl(c, i), Gl(s, c));
          }
          if (!u || typeof u != 'object') {
            if (
              ((s = o(u)) === void 0 && (s = u),
              s === tl && (s = void 0),
              r.F && el(s, !0),
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
        st(n) || Fe(8), $t(n) && (n = mh(n));
        var r = fd(this),
          u = Mu(this, n, void 0);
        return (u[ie].C = !0), is(r), u;
      }),
      (t.finishDraft = function (n, r) {
        var u = n && n[ie],
          o = u.A;
        return Kl(o, r), Gl(void 0, o);
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n;
      }),
      (t.setUseProxies = function (n) {
        n && !yd && Fe(20), (this.g = n);
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
  yt = new wh(),
  Ir = yt.produce,
  _h = yt.produceWithPatches.bind(yt),
  Yg = yt.setAutoFreeze.bind(yt),
  Zg = yt.setUseProxies.bind(yt),
  Eh = yt.applyPatches.bind(yt),
  Jg = yt.createDraft.bind(yt),
  e1 = yt.finishDraft.bind(yt);
const t1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Ir,
      Immer: wh,
      applyPatches: Eh,
      castDraft: Wg,
      castImmutable: Hg,
      createDraft: Jg,
      current: mh,
      enableAllPlugins: Bg,
      enableES5: hc,
      enableMapSet: gh,
      enablePatches: yc,
      finishDraft: e1,
      freeze: el,
      immerable: Er,
      isDraft: $t,
      isDraftable: st,
      nothing: tl,
      original: Ug,
      produce: Ir,
      produceWithPatches: _h,
      setAutoFreeze: Yg,
      setUseProxies: Zg,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function n1(e, t, n) {
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
function md(e, t) {
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
function gd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? md(Object(n), !0).forEach(function (r) {
          n1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : md(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ve(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var Sd = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  Zl = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  $u = {
    INIT: '@@redux/INIT' + Zl(),
    REPLACE: '@@redux/REPLACE' + Zl(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + Zl();
    },
  };
function r1(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function nl(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Ve(0));
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(Ve(1));
    return n(nl)(e, t);
  }
  if (typeof e != 'function') throw new Error(Ve(2));
  var u = e,
    o = t,
    i = [],
    l = i,
    a = !1;
  function s() {
    l === i && (l = i.slice());
  }
  function c() {
    if (a) throw new Error(Ve(3));
    return o;
  }
  function p(_) {
    if (typeof _ != 'function') throw new Error(Ve(4));
    if (a) throw new Error(Ve(5));
    var C = !0;
    return (
      s(),
      l.push(_),
      function () {
        if (!!C) {
          if (a) throw new Error(Ve(6));
          (C = !1), s();
          var f = l.indexOf(_);
          l.splice(f, 1), (i = null);
        }
      }
    );
  }
  function d(_) {
    if (!r1(_)) throw new Error(Ve(7));
    if (typeof _.type > 'u') throw new Error(Ve(8));
    if (a) throw new Error(Ve(9));
    try {
      (a = !0), (o = u(o, _));
    } finally {
      a = !1;
    }
    for (var C = (i = l), h = 0; h < C.length; h++) {
      var f = C[h];
      f();
    }
    return _;
  }
  function y(_) {
    if (typeof _ != 'function') throw new Error(Ve(10));
    (u = _), d({ type: $u.REPLACE });
  }
  function g() {
    var _,
      C = p;
    return (
      (_ = {
        subscribe: function (f) {
          if (typeof f != 'object' || f === null) throw new Error(Ve(11));
          function v() {
            f.next && f.next(c());
          }
          v();
          var m = C(v);
          return { unsubscribe: m };
        },
      }),
      (_[Sd] = function () {
        return this;
      }),
      _
    );
  }
  return (
    d({ type: $u.INIT }),
    (r = { dispatch: d, subscribe: p, getState: c, replaceReducer: y }),
    (r[Sd] = g),
    r
  );
}
var u1 = nl;
function o1(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: $u.INIT });
    if (typeof r > 'u') throw new Error(Ve(12));
    if (typeof n(void 0, { type: $u.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Ve(13));
  });
}
function gc(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var u = t[r];
    typeof e[u] == 'function' && (n[u] = e[u]);
  }
  var o = Object.keys(n),
    i;
  try {
    o1(n);
  } catch (l) {
    i = l;
  }
  return function (a, s) {
    if ((a === void 0 && (a = {}), i)) throw i;
    for (var c = !1, p = {}, d = 0; d < o.length; d++) {
      var y = o[d],
        g = n[y],
        _ = a[y],
        C = g(_, s);
      if (typeof C > 'u') throw (s && s.type, new Error(Ve(14)));
      (p[y] = C), (c = c || C !== _);
    }
    return (c = c || o.length !== Object.keys(a).length), c ? p : a;
  };
}
function wd(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function i1(e, t) {
  if (typeof e == 'function') return wd(e, t);
  if (typeof e != 'object' || e === null) throw new Error(Ve(16));
  var n = {};
  for (var r in e) {
    var u = e[r];
    typeof u == 'function' && (n[r] = wd(u, t));
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
function kh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var u = r.apply(void 0, arguments),
        o = function () {
          throw new Error(Ve(15));
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
        gd(gd({}, u), {}, { dispatch: o })
      );
    };
  };
}
const l1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      __DO_NOT_USE__ActionTypes: $u,
      applyMiddleware: kh,
      bindActionCreators: i1,
      combineReducers: gc,
      compose: Mr,
      createStore: nl,
      legacy_createStore: u1,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
var li = 'NOT_FOUND';
function a1(e) {
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
function s1(e, t) {
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
var Ph = function (t, n) {
  return t === n;
};
function c1(e) {
  return function (n, r) {
    if (n === null || r === null || n.length !== r.length) return !1;
    for (var u = n.length, o = 0; o < u; o++) if (!e(n[o], r[o])) return !1;
    return !0;
  };
}
function ai(e, t) {
  var n = typeof t == 'object' ? t : { equalityCheck: t },
    r = n.equalityCheck,
    u = r === void 0 ? Ph : r,
    o = n.maxSize,
    i = o === void 0 ? 1 : o,
    l = n.resultEqualityCheck,
    a = c1(u),
    s = i === 1 ? a1(a) : s1(i, a);
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
function f1(e) {
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
function Oh(e) {
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
      _ = g === void 0 ? n : g,
      C = Array.isArray(_) ? _ : [_],
      h = f1(l),
      f = e.apply(
        void 0,
        [
          function () {
            return s++, d.apply(null, arguments);
          },
        ].concat(C)
      ),
      v = e(function () {
        for (var w = [], E = h.length, P = 0; P < E; P++)
          w.push(h[P].apply(null, arguments));
        return (c = f.apply(null, w)), c;
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
var Xt = Oh(ai),
  d1 = function (t, n) {
    if ((n === void 0 && (n = Xt), typeof t != 'object'))
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
const p1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      defaultMemoize: ai,
      defaultEqualityCheck: Ph,
      createSelectorCreator: Oh,
      createSelector: Xt,
      createStructuredSelector: d1,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function xh(e) {
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
var Ch = xh();
Ch.withExtraArgument = xh;
const as = Ch,
  v1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: as },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
var h1 =
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
  y1 =
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
  m1 = Object.defineProperty,
  g1 = Object.defineProperties,
  S1 = Object.getOwnPropertyDescriptors,
  _d = Object.getOwnPropertySymbols,
  w1 = Object.prototype.hasOwnProperty,
  _1 = Object.prototype.propertyIsEnumerable,
  Ed = function (e, t, n) {
    return t in e
      ? m1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  kn = function (e, t) {
    for (var n in t || (t = {})) w1.call(t, n) && Ed(e, n, t[n]);
    if (_d)
      for (var r = 0, u = _d(t); r < u.length; r++) {
        var n = u[r];
        _1.call(t, n) && Ed(e, n, t[n]);
      }
    return e;
  },
  Jl = function (e, t) {
    return g1(e, S1(t));
  },
  E1 = function (e, t, n) {
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
  k1 =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? Mr
              : Mr.apply(null, arguments);
        };
function Vu(e) {
  if (typeof e != 'object' || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var P1 = (function (e) {
  h1(t, e);
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
function ss(e) {
  return st(e) ? Ir(e, function () {}) : e;
}
function O1(e) {
  return typeof e == 'boolean';
}
function x1() {
  return function (t) {
    return C1(t);
  };
}
function C1(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new P1();
  return (
    n && (O1(n) ? r.push(as) : r.push(as.withExtraArgument(n.extraArgument))), r
  );
}
var T1 = !0;
function R1(e) {
  var t = x1(),
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
  else if (Vu(u)) y = gc(u);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var g = i;
  typeof g == 'function' && (g = g(t));
  var _ = kh.apply(void 0, g),
    C = Mr;
  a && (C = k1(kn({ trace: !T1 }, typeof a == 'object' && a)));
  var h = [_];
  Array.isArray(d) ? (h = si([_], d)) : typeof d == 'function' && (h = d(h));
  var f = C.apply(void 0, h);
  return nl(y, c, f);
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
function Th(e) {
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
function j1(e) {
  return typeof e == 'function';
}
function A1(e, t, n, r) {
  n === void 0 && (n = []);
  var u = typeof t == 'function' ? Th(t) : [t, n, r],
    o = u[0],
    i = u[1],
    l = u[2],
    a;
  if (j1(e))
    a = function () {
      return ss(e());
    };
  else {
    var s = ss(e);
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
          var _ = g.matcher;
          return _(d);
        })
        .map(function (g) {
          var _ = g.reducer;
          return _;
        })
    );
    return (
      y.filter(function (g) {
        return !!g;
      }).length === 0 && (y = [l]),
      y.reduce(function (g, _) {
        if (_)
          if ($t(g)) {
            var C = g,
              h = _(C, d);
            return h === void 0 ? g : h;
          } else {
            if (st(g))
              return Ir(g, function (f) {
                return _(f, d);
              });
            var h = _(g, d);
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
function I1(e, t) {
  return e + '/' + t;
}
function Jr(e) {
  var t = e.name;
  if (!t) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var n =
      typeof e.initialState == 'function' ? e.initialState : ss(e.initialState),
    r = e.reducers || {},
    u = Object.keys(r),
    o = {},
    i = {},
    l = {};
  u.forEach(function (c) {
    var p = r[c],
      d = I1(t, c),
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
          ? Th(e.extraReducers)
          : [e.extraReducers],
      p = c[0],
      d = p === void 0 ? {} : p,
      y = c[1],
      g = y === void 0 ? [] : y,
      _ = c[2],
      C = _ === void 0 ? void 0 : _,
      h = kn(kn({}, d), i);
    return A1(n, h, g, C);
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
var M1 = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  Rh = function (e) {
    e === void 0 && (e = 21);
    for (var t = '', n = e; n--; ) t += M1[(Math.random() * 64) | 0];
    return t;
  },
  N1 = ['name', 'message', 'stack', 'code'],
  ea = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  kd = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  D1 = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, n = 0, r = N1; n < r.length; n++) {
        var u = r[n];
        typeof e[u] == 'string' && (t[u] = e[u]);
      }
      return t;
    }
    return { message: String(e) };
  };
function Pd(e, t, n) {
  var r = at(e + '/fulfilled', function (a, s, c, p) {
      return {
        payload: a,
        meta: Jl(kn({}, p || {}), {
          arg: c,
          requestId: s,
          requestStatus: 'fulfilled',
        }),
      };
    }),
    u = at(e + '/pending', function (a, s, c) {
      return {
        payload: void 0,
        meta: Jl(kn({}, c || {}), {
          arg: s,
          requestId: a,
          requestStatus: 'pending',
        }),
      };
    }),
    o = at(e + '/rejected', function (a, s, c, p, d) {
      return {
        payload: p,
        error: ((n && n.serializeError) || D1)(a || 'Rejected'),
        meta: Jl(kn({}, d || {}), {
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
      var d = n != null && n.idGenerator ? n.idGenerator(a) : Rh(),
        y = new i(),
        g,
        _ = new Promise(function (v, m) {
          return y.signal.addEventListener('abort', function () {
            return m({ name: 'AbortError', message: g || 'Aborted' });
          });
        }),
        C = !1;
      function h(v) {
        C && ((g = v), y.abort());
      }
      var f = (function () {
        return E1(this, null, function () {
          var v, m, w, E, P, O;
          return y1(this, function (R) {
            switch (R.label) {
              case 0:
                return (
                  R.trys.push([0, 4, , 5]),
                  (E =
                    (v = n == null ? void 0 : n.condition) == null
                      ? void 0
                      : v.call(n, a, { getState: c, extra: p })),
                  z1(E) ? [4, E] : [3, 2]
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
                      _,
                      Promise.resolve(
                        t(a, {
                          dispatch: s,
                          getState: c,
                          extra: p,
                          requestId: d,
                          signal: y.signal,
                          rejectWithValue: function (T, M) {
                            return new ea(T, M);
                          },
                          fulfillWithValue: function (T, M) {
                            return new kd(T, M);
                          },
                        })
                      ).then(function (T) {
                        if (T instanceof ea) throw T;
                        return T instanceof kd
                          ? r(T.payload, d, a, T.meta)
                          : r(T, d, a);
                      }),
                    ]),
                  ]
                );
              case 3:
                return (w = R.sent()), [3, 5];
              case 4:
                return (
                  (P = R.sent()),
                  (w =
                    P instanceof ea
                      ? o(null, d, a, P.payload, P.meta)
                      : o(P, d, a)),
                  [3, 5]
                );
              case 5:
                return (
                  (O =
                    n &&
                    !n.dispatchConditionRejection &&
                    o.match(w) &&
                    w.meta.condition),
                  O || s(w),
                  [2, w]
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
          return f.then($1);
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
function $1(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function z1(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function';
}
var b1 = function (e) {
    return e && typeof e.match == 'function';
  },
  jh = function (e, t) {
    return b1(e) ? e.match(t) : e(t);
  };
function zr() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.some(function (r) {
      return jh(r, n);
    });
  };
}
function vu() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.every(function (r) {
      return jh(r, n);
    });
  };
}
function rl(e, t) {
  if (!e || !e.meta) return !1;
  var n = typeof e.meta.requestId == 'string',
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function Bu(e) {
  return (
    typeof e[0] == 'function' &&
    'pending' in e[0] &&
    'fulfilled' in e[0] &&
    'rejected' in e[0]
  );
}
function Sc() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return rl(n, ['pending']);
      }
    : Bu(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.pending;
          }),
          u = zr.apply(void 0, r);
        return u(n);
      }
    : Sc()(e[0]);
}
function zu() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return rl(n, ['rejected']);
      }
    : Bu(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.rejected;
          }),
          u = zr.apply(void 0, r);
        return u(n);
      }
    : zu()(e[0]);
}
function ul() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = function (r) {
    return r && r.meta && r.meta.rejectedWithValue;
  };
  return e.length === 0
    ? function (r) {
        var u = vu(zu.apply(void 0, e), n);
        return u(r);
      }
    : Bu(e)
    ? function (r) {
        var u = vu(zu.apply(void 0, e), n);
        return u(r);
      }
    : ul()(e[0]);
}
function Xn() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return rl(n, ['fulfilled']);
      }
    : Bu(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.fulfilled;
          }),
          u = zr.apply(void 0, r);
        return u(n);
      }
    : Xn()(e[0]);
}
function cs() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return rl(n, ['pending', 'fulfilled', 'rejected']);
      }
    : Bu(e)
    ? function (n) {
        for (var r = [], u = 0, o = e; u < o.length; u++) {
          var i = o[u];
          r.push(i.pending, i.rejected, i.fulfilled);
        }
        var l = zr.apply(void 0, r);
        return l(n);
      }
    : cs()(e[0]);
}
var wc = 'listenerMiddleware';
at(wc + '/add');
at(wc + '/removeAll');
at(wc + '/remove');
hc();
var Wu = { exports: {} },
  Ah = {};
const nr = pi(t1),
  ta = pi(l1),
  Od = pi(p1),
  L1 = pi(v1);
(function (e) {
  var t,
    n =
      (er && er.__extends) ||
      ((t = function (S, k) {
        return (
          (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (x, A) {
                x.__proto__ = A;
              }) ||
            function (x, A) {
              for (var I in A)
                Object.prototype.hasOwnProperty.call(A, I) && (x[I] = A[I]);
            }),
          t(S, k)
        );
      }),
      function (S, k) {
        if (typeof k != 'function' && k !== null)
          throw new TypeError(
            'Class extends value ' + String(k) + ' is not a constructor or null'
          );
        function x() {
          this.constructor = S;
        }
        t(S, k),
          (S.prototype =
            k === null
              ? Object.create(k)
              : ((x.prototype = k.prototype), new x()));
      }),
    r =
      (er && er.__generator) ||
      function (S, k) {
        var x,
          A,
          I,
          Q,
          X = {
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
              if (x) throw new TypeError('Generator is already executing.');
              for (; X; )
                try {
                  if (
                    ((x = 1),
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
                      return X.label++, { value: N[1], done: !1 };
                    case 5:
                      X.label++, (A = N[1]), (N = [0]);
                      continue;
                    case 7:
                      (N = X.ops.pop()), X.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (I = (I = X.trys).length > 0 && I[I.length - 1]) ||
                          (N[0] !== 6 && N[0] !== 2)
                        )
                      ) {
                        X = 0;
                        continue;
                      }
                      if (N[0] === 3 && (!I || (N[1] > I[0] && N[1] < I[3]))) {
                        X.label = N[1];
                        break;
                      }
                      if (N[0] === 6 && X.label < I[1]) {
                        (X.label = I[1]), (I = N);
                        break;
                      }
                      if (I && X.label < I[2]) {
                        (X.label = I[2]), X.ops.push(N);
                        break;
                      }
                      I[2] && X.ops.pop(), X.trys.pop();
                      continue;
                  }
                  N = k.call(S, X);
                } catch (b) {
                  (N = [6, b]), (A = 0);
                } finally {
                  x = I = 0;
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
        for (var x = 0, A = k.length, I = S.length; x < A; x++, I++)
          S[I] = k[x];
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
    _ = function (S, k, x) {
      return k in S
        ? i(S, k, { enumerable: !0, configurable: !0, writable: !0, value: x })
        : (S[k] = x);
    },
    C = function (S, k) {
      for (var x in k || (k = {})) y.call(k, x) && _(S, x, k[x]);
      if (p)
        for (var A = 0, I = p(k); A < I.length; A++)
          g.call(k, (x = I[A])) && _(S, x, k[x]);
      return S;
    },
    h = function (S, k) {
      return l(S, s(k));
    },
    f = function (S) {
      return i(S, '__esModule', { value: !0 });
    },
    v = function (S, k, x) {
      if ((k && typeof k == 'object') || typeof k == 'function')
        for (
          var A = function (X) {
              y.call(S, X) ||
                X === 'default' ||
                i(S, X, {
                  get: function () {
                    return k[X];
                  },
                  enumerable: !(x = a(k, X)) || x.enumerable,
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
    w = function (S, k, x) {
      return new Promise(function (A, I) {
        var Q = function (ue) {
            try {
              L(x.next(ue));
            } catch (F) {
              I(F);
            }
          },
          X = function (ue) {
            try {
              L(x.throw(ue));
            } catch (F) {
              I(F);
            }
          },
          L = function (ue) {
            return ue.done ? A(ue.value) : Promise.resolve(ue.value).then(Q, X);
          };
        L((x = x.apply(S, k)).next());
      });
    };
  f(e),
    (function (S, k) {
      for (var x in k) i(S, x, { get: k[x], enumerable: !0 });
    })(e, {
      MiddlewareArray: function () {
        return j;
      },
      TaskAbortError: function () {
        return Qr;
      },
      addListener: function () {
        return qc;
      },
      clearAllListeners: function () {
        return Uc;
      },
      configureStore: function () {
        return $e;
      },
      createAction: function () {
        return Te;
      },
      createAsyncThunk: function () {
        return Kh;
      },
      createDraftSafeSelector: function () {
        return M;
      },
      createEntityAdapter: function () {
        return Wh;
      },
      createImmutableStateInvariantMiddleware: function () {
        return oe;
      },
      createListenerMiddleware: function () {
        return Zh;
      },
      createNextState: function () {
        return P.default;
      },
      createReducer: function () {
        return ct;
      },
      createSelector: function () {
        return O.createSelector;
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
        return jc;
      },
      isAnyOf: function () {
        return qr;
      },
      isAsyncThunkAction: function () {
        return Nc;
      },
      isDraft: function () {
        return P.isDraft;
      },
      isFulfilled: function () {
        return Mc;
      },
      isImmutableDefault: function () {
        return W;
      },
      isPending: function () {
        return Ac;
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
        return Ic;
      },
      miniSerializeError: function () {
        return Cc;
      },
      nanoid: function () {
        return cl;
      },
      original: function () {
        return P.original;
      },
      removeListener: function () {
        return Qc;
      },
      unwrapResult: function () {
        return Tc;
      },
    });
  var E = m(nr);
  v(e, m(ta));
  var P = m(nr),
    O = m(Od),
    R = m(nr),
    T = m(Od),
    M = function () {
      for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
      var x = T.createSelector.apply(void 0, S),
        A = function (I) {
          for (var Q = [], X = 1; X < arguments.length; X++)
            Q[X - 1] = arguments[X];
          return x.apply(
            void 0,
            u([(0, R.isDraft)(I) ? (0, R.current)(I) : I], Q)
          );
        };
      return A;
    },
    $ = m(ta),
    U = m(ta),
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
    for (var x = k; Object.getPrototypeOf(x) !== null; )
      x = Object.getPrototypeOf(x);
    return k === x;
  }
  var te = m(L1),
    J = m(nr),
    j = (function (S) {
      function k() {
        for (var x = [], A = 0; A < arguments.length; A++) x[A] = arguments[A];
        var I = S.apply(this, x) || this;
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
          for (var x = [], A = 0; A < arguments.length; A++)
            x[A] = arguments[A];
          return S.prototype.concat.apply(this, x);
        }),
        (k.prototype.prepend = function () {
          for (var x = [], A = 0; A < arguments.length; A++)
            x[A] = arguments[A];
          return x.length === 1 && Array.isArray(x[0])
            ? new (k.bind.apply(k, u([void 0], x[0].concat(this))))()
            : new (k.bind.apply(k, u([void 0], x.concat(this))))();
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
        return function (x) {
          return k(x);
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
  function le(S, k, x, A, I) {
    var Q;
    if (
      (k === void 0 && (k = ''),
      x === void 0 && (x = ne),
      I === void 0 && (I = []),
      !x(S))
    )
      return { keyPath: k || '<root>', value: S };
    if (typeof S != 'object' || S === null) return !1;
    for (
      var X = A != null ? A(S) : Object.entries(S),
        L = I.length > 0,
        ue = 0,
        F = X;
      ue < F.length;
      ue++
    ) {
      var N = F[ue],
        b = N[0],
        q = N[1],
        Y = k ? k + '.' + b : b;
      if (!(L && I.indexOf(Y) >= 0)) {
        if (!x(q)) return { keyPath: Y, value: q };
        if (typeof q == 'object' && (Q = le(q, Y, x, A, I))) return Q;
      }
    }
    return !1;
  }
  function Pe(S) {
    return function () {
      return function (k) {
        return function (x) {
          return k(x);
        };
      };
    };
  }
  function _e(S) {
    S === void 0 && (S = {});
    var k = S.thunk,
      x = k === void 0 || k,
      A = new j();
    return (
      x &&
        A.push(
          typeof x == 'boolean'
            ? te.default
            : te.default.withExtraArgument(x.extraArgument)
        ),
      A
    );
  }
  function $e(S) {
    var k,
      x = function (se) {
        return _e(se);
      },
      A = S || {},
      I = A.reducer,
      Q = I === void 0 ? void 0 : I,
      X = A.middleware,
      L = X === void 0 ? x() : X,
      ue = A.devTools,
      F = ue === void 0 || ue,
      N = A.preloadedState,
      b = N === void 0 ? void 0 : N,
      q = A.enhancers,
      Y = q === void 0 ? void 0 : q;
    if (typeof Q == 'function') k = Q;
    else {
      if (!Z(Q))
        throw new Error(
          '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
        );
      k = (0, $.combineReducers)(Q);
    }
    var H = L;
    typeof H == 'function' && (H = H(x));
    var re = $.applyMiddleware.apply(void 0, H),
      V = $.compose;
    F && (V = ee(C({ trace: !1 }, typeof F == 'object' && F)));
    var K = [re];
    Array.isArray(Y) ? (K = u([re], Y)) : typeof Y == 'function' && (K = Y(K));
    var fe = V.apply(void 0, K);
    return (0, $.createStore)(k, b, fe);
  }
  function Te(S, k) {
    function x() {
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
      (x.toString = function () {
        return '' + S;
      }),
      (x.type = S),
      (x.match = function (A) {
        return A.type === S;
      }),
      x
    );
  }
  function Yn(S) {
    return ['type', 'payload', 'error', 'meta'].indexOf(S) > -1;
  }
  function br(S) {
    return '' + S;
  }
  var In = m(nr);
  function Lr(S) {
    var k,
      x = {},
      A = [],
      I = {
        addCase: function (Q, X) {
          var L = typeof Q == 'string' ? Q : Q.type;
          if (L in x)
            throw new Error(
              'addCase cannot be called with two reducers for the same action type'
            );
          return (x[L] = X), I;
        },
        addMatcher: function (Q, X) {
          return A.push({ matcher: Q, reducer: X }), I;
        },
        addDefaultCase: function (Q) {
          return (k = Q), I;
        },
      };
    return S(I), [x, A, k];
  }
  function ct(S, k, x, A) {
    x === void 0 && (x = []);
    var I,
      Q = typeof k == 'function' ? Lr(k) : [k, x, A],
      X = Q[0],
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
      var Y = u(
        [X[q.type]],
        L.filter(function (H) {
          return (0, H.matcher)(q);
        }).map(function (H) {
          return H.reducer;
        })
      );
      return (
        Y.filter(function (H) {
          return !!H;
        }).length === 0 && (Y = [ue]),
        Y.reduce(function (H, re) {
          if (re) {
            var V;
            if ((0, In.isDraft)(H)) return (V = re(H, q)) === void 0 ? H : V;
            if ((0, In.isDraftable)(H))
              return (0, In.default)(H, function (K) {
                return re(K, q);
              });
            if ((V = re(H, q)) === void 0) {
              if (H === null) return H;
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              );
            }
            return V;
          }
          return H;
        }, b)
      );
    }
    return (N.getInitialState = I), N;
  }
  function wt(S) {
    var k = S.name;
    if (!k) throw new Error('`name` is a required option for createSlice');
    var x,
      A =
        typeof S.initialState == 'function'
          ? S.initialState
          : z(S.initialState),
      I = S.reducers || {},
      Q = Object.keys(I),
      X = {},
      L = {},
      ue = {};
    function F() {
      var N =
          typeof S.extraReducers == 'function'
            ? Lr(S.extraReducers)
            : [S.extraReducers],
        b = N[0],
        q = N[1],
        Y = q === void 0 ? [] : q,
        H = N[2],
        re = H === void 0 ? void 0 : H,
        V = C(C({}, b === void 0 ? {} : b), L);
      return ct(A, V, Y, re);
    }
    return (
      Q.forEach(function (N) {
        var b,
          q,
          Y = I[N],
          H = k + '/' + N;
        'reducer' in Y ? ((b = Y.reducer), (q = Y.prepare)) : (b = Y),
          (X[N] = b),
          (L[H] = b),
          (ue[N] = q ? Te(H, q) : Te(H));
      }),
      {
        name: k,
        reducer: function (N, b) {
          return x || (x = F()), x(N, b);
        },
        actions: ue,
        caseReducers: X,
        getInitialState: function () {
          return x || (x = F()), x.getInitialState();
        },
      }
    );
  }
  var kc = m(nr);
  function je(S) {
    return function (k, x) {
      var A = function (I) {
        var Q;
        Z((Q = x)) && typeof Q.type == 'string' && Object.keys(Q).every(Yn)
          ? S(x.payload, I)
          : S(x, I);
      };
      return (0, kc.isDraft)(k) ? (A(k), k) : (0, kc.default)(k, A);
    };
  }
  function Fr(S, k) {
    return k(S);
  }
  function Mn(S) {
    return Array.isArray(S) || (S = Object.values(S)), S;
  }
  function Pc(S, k, x) {
    for (var A = [], I = [], Q = 0, X = (S = Mn(S)); Q < X.length; Q++) {
      var L = X[Q],
        ue = Fr(L, k);
      ue in x.entities ? I.push({ id: ue, changes: L }) : A.push(L);
    }
    return [A, I];
  }
  function Oc(S) {
    function k(F, N) {
      var b = Fr(F, S);
      b in N.entities || (N.ids.push(b), (N.entities[b] = F));
    }
    function x(F, N) {
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
        (F.forEach(function (H) {
          H.id in N.entities &&
            (q[H.id] = {
              id: H.id,
              changes: C(C({}, q[H.id] ? q[H.id].changes : null), H.changes),
            });
        }),
        (F = Object.values(q)).length > 0)
      ) {
        var Y =
          F.filter(function (H) {
            return (function (re, V, K) {
              var fe = Object.assign({}, K.entities[V.id], V.changes),
                se = Fr(fe, S),
                ye = se !== V.id;
              return (
                ye && ((re[V.id] = se), delete K.entities[V.id]),
                (K.entities[se] = fe),
                ye
              );
            })(b, H, N);
          }).length > 0;
        Y && (N.ids = Object.keys(N.entities));
      }
    }
    function X(F, N) {
      var b = Pc(F, S, N),
        q = b[0];
      Q(b[1], N), x(q, N);
    }
    return {
      removeAll:
        ((L = function (F) {
          Object.assign(F, { ids: [], entities: {} });
        }),
        (ue = je(function (F, N) {
          return L(N);
        })),
        function (F) {
          return ue(F, void 0);
        }),
      addOne: je(k),
      addMany: je(x),
      setOne: je(A),
      setMany: je(function (F, N) {
        for (var b = 0, q = (F = Mn(F)); b < q.length; b++) A(q[b], N);
      }),
      setAll: je(function (F, N) {
        (F = Mn(F)), (N.ids = []), (N.entities = {}), x(F, N);
      }),
      updateOne: je(function (F, N) {
        return Q([F], N);
      }),
      updateMany: je(Q),
      upsertOne: je(function (F, N) {
        return X([F], N);
      }),
      upsertMany: je(X),
      removeOne: je(function (F, N) {
        return I([F], N);
      }),
      removeMany: je(I),
    };
    var L, ue;
  }
  function Wh(S) {
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
      x = k.selectId,
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
            N = M(ue, F, function (re, V) {
              return re.map(function (K) {
                return V[K];
              });
            }),
            b = function (re, V) {
              return V;
            },
            q = function (re, V) {
              return re[V];
            },
            Y = M(ue, function (re) {
              return re.length;
            });
          if (!L)
            return {
              selectIds: ue,
              selectEntities: F,
              selectAll: N,
              selectTotal: Y,
              selectById: M(F, b, q),
            };
          var H = M(L, F);
          return {
            selectIds: M(L, ue),
            selectEntities: H,
            selectAll: M(L, N),
            selectTotal: M(L, Y),
            selectById: M(H, b, q),
          };
        },
      },
      X = A
        ? (function (L, ue) {
            var F = Oc(L);
            function N(V, K) {
              var fe = (V = Mn(V)).filter(function (se) {
                return !(Fr(se, L) in K.entities);
              });
              fe.length !== 0 && H(fe, K);
            }
            function b(V, K) {
              (V = Mn(V)).length !== 0 && H(V, K);
            }
            function q(V, K) {
              for (var fe = !1, se = 0, ye = V; se < ye.length; se++) {
                var de = ye[se],
                  me = K.entities[de.id];
                if (me) {
                  (fe = !0), Object.assign(me, de.changes);
                  var ft = L(me);
                  de.id !== ft &&
                    (delete K.entities[de.id], (K.entities[ft] = me));
                }
              }
              fe && re(K);
            }
            function Y(V, K) {
              var fe = Pc(V, L, K),
                se = fe[0];
              q(fe[1], K), N(se, K);
            }
            function H(V, K) {
              V.forEach(function (fe) {
                K.entities[L(fe)] = fe;
              }),
                re(K);
            }
            function re(V) {
              var K = Object.values(V.entities);
              K.sort(ue);
              var fe = K.map(L);
              (function (se, ye) {
                if (se.length !== ye.length) return !1;
                for (var de = 0; de < se.length && de < ye.length; de++)
                  if (se[de] !== ye[de]) return !1;
                return !0;
              })(V.ids, fe) || (V.ids = fe);
            }
            return {
              removeOne: F.removeOne,
              removeMany: F.removeMany,
              removeAll: F.removeAll,
              addOne: je(function (V, K) {
                return N([V], K);
              }),
              updateOne: je(function (V, K) {
                return q([V], K);
              }),
              upsertOne: je(function (V, K) {
                return Y([V], K);
              }),
              setOne: je(function (V, K) {
                return b([V], K);
              }),
              setMany: je(b),
              setAll: je(function (V, K) {
                (V = Mn(V)), (K.entities = {}), (K.ids = []), N(V, K);
              }),
              addMany: je(N),
              updateMany: je(q),
              upsertMany: je(Y),
            };
          })(x, A)
        : Oc(x);
    return C(C(C({ selectId: x, sortComparer: A }, I), Q), X);
  }
  var cl = function (S) {
      S === void 0 && (S = 21);
      for (var k = '', x = S; x--; )
        k += 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'[
          (64 * Math.random()) | 0
        ];
      return k;
    },
    Hh = ['name', 'message', 'stack', 'code'],
    fl = function (S, k) {
      (this.payload = S), (this.meta = k);
    },
    xc = function (S, k) {
      (this.payload = S), (this.meta = k);
    },
    Cc = function (S) {
      if (typeof S == 'object' && S !== null) {
        for (var k = {}, x = 0, A = Hh; x < A.length; x++) {
          var I = A[x];
          typeof S[I] == 'string' && (k[I] = S[I]);
        }
        return k;
      }
      return { message: String(S) };
    };
  function Kh(S, k, x) {
    var A = Te(S + '/fulfilled', function (L, ue, F, N) {
        return {
          payload: L,
          meta: h(C({}, N || {}), {
            arg: F,
            requestId: ue,
            requestStatus: 'fulfilled',
          }),
        };
      }),
      I = Te(S + '/pending', function (L, ue, F) {
        return {
          payload: void 0,
          meta: h(C({}, F || {}), {
            arg: ue,
            requestId: L,
            requestStatus: 'pending',
          }),
        };
      }),
      Q = Te(S + '/rejected', function (L, ue, F, N, b) {
        return {
          payload: N,
          error: ((x && x.serializeError) || Cc)(L || 'Rejected'),
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
      X =
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
            q = x != null && x.idGenerator ? x.idGenerator(L) : cl(),
            Y = new X(),
            H = new Promise(function (K, fe) {
              return Y.signal.addEventListener('abort', function () {
                return fe({ name: 'AbortError', message: b || 'Aborted' });
              });
            }),
            re = !1,
            V = (function () {
              return w(this, null, function () {
                var K, fe, se, ye, de;
                return r(this, function (me) {
                  switch (me.label) {
                    case 0:
                      return (
                        me.trys.push([0, 4, , 5]),
                        (ft = ye =
                          (K = x == null ? void 0 : x.condition) == null
                            ? void 0
                            : K.call(x, L, { getState: F, extra: N })) ===
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
                            (fe = x == null ? void 0 : x.getPendingMeta) == null
                              ? void 0
                              : fe.call(
                                  x,
                                  { requestId: q, arg: L },
                                  { getState: F, extra: N }
                                )
                          )
                        ),
                        [
                          4,
                          Promise.race([
                            H,
                            Promise.resolve(
                              k(L, {
                                dispatch: ue,
                                getState: F,
                                extra: N,
                                requestId: q,
                                signal: Y.signal,
                                rejectWithValue: function (He, un) {
                                  return new fl(He, un);
                                },
                                fulfillWithValue: function (He, un) {
                                  return new xc(He, un);
                                },
                              })
                            ).then(function (He) {
                              if (He instanceof fl) throw He;
                              return He instanceof xc
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
                        (x &&
                          !x.dispatchConditionRejection &&
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
          return Object.assign(V, {
            abort: function (K) {
              re && ((b = K), Y.abort());
            },
            requestId: q,
            arg: L,
            unwrap: function () {
              return V.then(Tc);
            },
          });
        };
      },
      { pending: I, rejected: Q, fulfilled: A, typePrefix: S }
    );
  }
  function Tc(S) {
    if (S.meta && S.meta.rejectedWithValue) throw S.payload;
    if (S.error) throw S.error;
    return S.payload;
  }
  var Rc = function (S, k) {
    return (x = S) && typeof x.match == 'function' ? S.match(k) : S(k);
    var x;
  };
  function qr() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return function (x) {
      return S.some(function (A) {
        return Rc(A, x);
      });
    };
  }
  function jc() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return function (x) {
      return S.every(function (A) {
        return Rc(A, x);
      });
    };
  }
  function Hu(S, k) {
    if (!S || !S.meta) return !1;
    var x = typeof S.meta.requestId == 'string',
      A = k.indexOf(S.meta.requestStatus) > -1;
    return x && A;
  }
  function Ur(S) {
    return (
      typeof S[0] == 'function' &&
      'pending' in S[0] &&
      'fulfilled' in S[0] &&
      'rejected' in S[0]
    );
  }
  function Ac() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (x) {
          return Hu(x, ['pending']);
        }
      : Ur(S)
      ? function (x) {
          var A = S.map(function (I) {
            return I.pending;
          });
          return qr.apply(void 0, A)(x);
        }
      : Ac()(S[0]);
  }
  function dl() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (x) {
          return Hu(x, ['rejected']);
        }
      : Ur(S)
      ? function (x) {
          var A = S.map(function (I) {
            return I.rejected;
          });
          return qr.apply(void 0, A)(x);
        }
      : dl()(S[0]);
  }
  function Ic() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    var x = function (A) {
      return A && A.meta && A.meta.rejectedWithValue;
    };
    return S.length === 0 || Ur(S)
      ? function (A) {
          return jc(dl.apply(void 0, S), x)(A);
        }
      : Ic()(S[0]);
  }
  function Mc() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (x) {
          return Hu(x, ['fulfilled']);
        }
      : Ur(S)
      ? function (x) {
          var A = S.map(function (I) {
            return I.fulfilled;
          });
          return qr.apply(void 0, A)(x);
        }
      : Mc()(S[0]);
  }
  function Nc() {
    for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
    return S.length === 0
      ? function (x) {
          return Hu(x, ['pending', 'fulfilled', 'rejected']);
        }
      : Ur(S)
      ? function (x) {
          for (var A = [], I = 0, Q = S; I < Q.length; I++) {
            var X = Q[I];
            A.push(X.pending, X.rejected, X.fulfilled);
          }
          return qr.apply(void 0, A)(x);
        }
      : Nc()(S[0]);
  }
  var pl = function (S, k) {
      if (typeof S != 'function') throw new TypeError(k + ' is not a function');
    },
    Gh = function () {},
    vl = function (S, k) {
      return k === void 0 && (k = Gh), S.catch(k), S;
    },
    Dc = function (S, k) {
      S.addEventListener('abort', k, { once: !0 });
    },
    Zn = function (S, k) {
      var x = S.signal;
      x.aborted ||
        ('reason' in x ||
          Object.defineProperty(x, 'reason', {
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
    $c = function (S) {
      return vl(
        new Promise(function (k, x) {
          var A = function () {
            return x(new Qr(S.reason));
          };
          S.aborted ? A() : Dc(S, A);
        })
      );
    },
    Ku = function (S) {
      return function (k) {
        return vl(
          Promise.race([$c(S), k]).then(function (x) {
            return Jn(S), x;
          })
        );
      };
    },
    zc = function (S) {
      var k = Ku(S);
      return function (x) {
        return k(
          new Promise(function (A) {
            return setTimeout(A, x);
          })
        );
      };
    },
    Xh = Object.assign,
    bc = {},
    Vr = 'listenerMiddleware',
    Lc = function (S) {
      var k = S.type,
        x = S.actionCreator,
        A = S.matcher,
        I = S.predicate,
        Q = S.effect;
      if (k) I = Te(k).match;
      else if (x) (k = x.type), (I = x.match);
      else if (A) I = A;
      else if (!I)
        throw new Error(
          'Creating or removing a listener requires one of the known fields for matching an action'
        );
      return pl(Q, 'options.listener'), { predicate: I, type: k, effect: Q };
    },
    Fc = function (S, k, x) {
      try {
        S(k, x);
      } catch (A) {
        setTimeout(function () {
          throw A;
        }, 0);
      }
    },
    qc = Te(Vr + '/add'),
    Uc = Te(Vr + '/removeAll'),
    Qc = Te(Vr + '/remove'),
    Yh = function () {
      for (var S = [], k = 0; k < arguments.length; k++) S[k] = arguments[k];
      console.error.apply(console, u([Vr + '/error'], S));
    },
    hl = function (S) {
      S.pending.forEach(function (k) {
        Zn(k, 'listener-cancelled');
      });
    };
  function Zh(S) {
    var k = this;
    S === void 0 && (S = {});
    var x = new Map(),
      A = S.extra,
      I = S.onError,
      Q = I === void 0 ? Yh : I;
    pl(Q, 'onError');
    var X = function (b) {
        for (var q = 0, Y = Array.from(x.values()); q < Y.length; q++) {
          var H = Y[q];
          if (b(H)) return H;
        }
      },
      L = function (b) {
        var q = X(function (Y) {
          return Y.effect === b.effect;
        });
        return (
          q ||
            (q = (function (Y) {
              var H = Lc(Y),
                re = H.type,
                V = H.predicate,
                K = H.effect;
              return {
                id: cl(),
                effect: K,
                type: re,
                predicate: V,
                pending: new Set(),
                unsubscribe: function () {
                  throw new Error('Unsubscribe not initialized');
                },
              };
            })(b)),
          (function (Y) {
            return (
              (Y.unsubscribe = function () {
                return x.delete(Y.id);
              }),
              x.set(Y.id, Y),
              function (H) {
                Y.unsubscribe(), H != null && H.cancelActive && hl(Y);
              }
            );
          })(q)
        );
      },
      ue = function (b) {
        var q = Lc(b),
          Y = q.type,
          H = q.effect,
          re = q.predicate,
          V = X(function (K) {
            return (
              (typeof Y == 'string' ? K.type === Y : K.predicate === re) &&
              K.effect === H
            );
          });
        return V && (V.unsubscribe(), b.cancelActive && hl(V)), !!V;
      },
      F = function (b, q, Y, H) {
        return w(k, null, function () {
          var re, V, K;
          return r(this, function (fe) {
            switch (fe.label) {
              case 0:
                (re = new AbortController()),
                  (V = (function (ye, de) {
                    return function (me, ft) {
                      return vl(
                        (function (He, un) {
                          return w(void 0, null, function () {
                            var Vt, Tt, yl, Vc;
                            return r(this, function (Gu) {
                              switch (Gu.label) {
                                case 0:
                                  Jn(de),
                                    (Vt = function () {}),
                                    (Tt = new Promise(function (ml) {
                                      Vt = ye({
                                        predicate: He,
                                        effect: function (Jh, gl) {
                                          gl.unsubscribe(),
                                            ml([
                                              Jh,
                                              gl.getState(),
                                              gl.getOriginalState(),
                                            ]);
                                        },
                                      });
                                    })),
                                    (yl = [$c(de), Tt]),
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
                                  return (Vc = Gu.sent()), Jn(de), [2, Vc];
                                case 3:
                                  return Vt(), [7];
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
                        Xh({}, Y, {
                          getOriginalState: H,
                          condition: function (ye, de) {
                            return V(ye, de).then(Boolean);
                          },
                          take: V,
                          delay: zc(re.signal),
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
                                Dc(se, function () {
                                  return Zn(de, se.reason);
                                });
                              var ft,
                                He,
                                un =
                                  ((ft = function () {
                                    return w(void 0, null, function () {
                                      var Vt;
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
                                                  delay: zc(me.signal),
                                                  signal: me.signal,
                                                }),
                                              ]
                                            );
                                          case 1:
                                            return (
                                              (Vt = Tt.sent()),
                                              Jn(me.signal),
                                              [2, Vt]
                                            );
                                        }
                                      });
                                    });
                                  }),
                                  (He = function () {
                                    return Zn(me, 'task-completed');
                                  }),
                                  w(void 0, null, function () {
                                    var Vt;
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
                                                (Vt = Tt.sent()) instanceof Qr
                                                  ? 'cancelled'
                                                  : 'rejected',
                                              error: Vt,
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
                            x.set(b.id, b);
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
                  (K = fe.sent()) instanceof Qr ||
                    Fc(Q, K, { raisedBy: 'effect' }),
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
      })(x);
    return {
      middleware: function (b) {
        return function (q) {
          return function (Y) {
            if (qc.match(Y)) return L(Y.payload);
            if (!Uc.match(Y)) {
              if (Qc.match(Y)) return ue(Y.payload);
              var H,
                re = b.getState(),
                V = function () {
                  if (re === bc)
                    throw new Error(
                      Vr + ': getOriginalState can only be called synchronously'
                    );
                  return re;
                };
              try {
                if (((H = q(Y)), x.size > 0))
                  for (
                    var K = b.getState(),
                      fe = Array.from(x.values()),
                      se = 0,
                      ye = fe;
                    se < ye.length;
                    se++
                  ) {
                    var de = ye[se],
                      me = !1;
                    try {
                      me = de.predicate(Y, K, re);
                    } catch (ft) {
                      (me = !1), Fc(Q, ft, { raisedBy: 'predicate' });
                    }
                    me && F(de, Y, b, V);
                  }
              } finally {
                re = bc;
              }
              return H;
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
})(Ah);
(function (e) {
  e.exports = Ah;
})(Wu);
const F1 = { hightScore: null },
  Ih = Wu.exports.createSlice({
    name: 'game',
    initialState: F1,
    reducers: {
      setHightScore(e, { payload: t }) {
        e.hightScore = t;
      },
    },
  }),
  q1 = Ih.actions,
  U1 = Ih.reducer,
  Q1 = { isAuth: !1, isLoadingAuth: !0 },
  Mh = Wu.exports.createSlice({
    name: 'auth',
    initialState: Q1,
    reducers: {
      setIsAuth(e, { payload: t }) {
        e.isAuth = t;
      },
      setIsLoadingAuth(e, { payload: t }) {
        e.isLoadingAuth = t;
      },
    },
  });
var ol =
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
  V1 = Object.defineProperty,
  B1 = Object.defineProperties,
  W1 = Object.getOwnPropertyDescriptors,
  fi = Object.getOwnPropertySymbols,
  Nh = Object.prototype.hasOwnProperty,
  Dh = Object.prototype.propertyIsEnumerable,
  xd = function (e, t, n) {
    return t in e
      ? V1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Ne = function (e, t) {
    for (var n in t || (t = {})) Nh.call(t, n) && xd(e, n, t[n]);
    if (fi)
      for (var r = 0, u = fi(t); r < u.length; r++) {
        var n = u[r];
        Dh.call(t, n) && xd(e, n, t[n]);
      }
    return e;
  },
  Pn = function (e, t) {
    return B1(e, W1(t));
  },
  Cd = function (e, t) {
    var n = {};
    for (var r in e) Nh.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && fi)
      for (var u = 0, o = fi(e); u < o.length; u++) {
        var r = o[u];
        t.indexOf(r) < 0 && Dh.call(e, r) && (n[r] = e[r]);
      }
    return n;
  },
  il = function (e, t, n) {
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
function H1(e) {
  return {
    status: e,
    isUninitialized: e === Ee.uninitialized,
    isLoading: e === Ee.pending,
    isSuccess: e === Ee.fulfilled,
    isError: e === Ee.rejected,
  };
}
function K1(e) {
  return new RegExp('(^|:)//').test(e);
}
var G1 = function (e) {
    return e.replace(/\/$/, '');
  },
  X1 = function (e) {
    return e.replace(/^\//, '');
  };
function Y1(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (K1(t)) return t;
  var n = e.endsWith('/') || !t.startsWith('?') ? '/' : '';
  return (e = G1(e)), (t = X1(t)), '' + e + n + t;
}
var Td = function (e) {
  return [].concat.apply([], e);
};
function Z1() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function J1() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden';
}
var Rd = Vu;
function $h(e, t) {
  if (e === t || !((Rd(e) && Rd(t)) || (Array.isArray(e) && Array.isArray(t))))
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
    (o[a] = $h(e[a], t[a])), u && (u = e[a] === o[a]);
  }
  return u ? e : o;
}
var jd = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return fetch.apply(void 0, e);
  },
  eS = function (e) {
    return e.status >= 200 && e.status <= 299;
  },
  tS = function (e) {
    var t, n;
    return (n = (t = e.get('content-type')) == null ? void 0 : t.trim()) == null
      ? void 0
      : n.startsWith('application/json');
  },
  nS = function (e, t) {
    return il(void 0, null, function () {
      var n;
      return ol(this, function (r) {
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
function Ad(e) {
  if (!Vu(e)) return e;
  for (var t = Ne({}, e), n = 0, r = Object.entries(t); n < r.length; n++) {
    var u = r[n],
      o = u[0],
      i = u[1];
    i === void 0 && delete t[o];
  }
  return t;
}
function ll(e) {
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
    l = i === void 0 ? jd : i,
    a = n.paramsSerializer,
    s = Cd(n, ['baseUrl', 'prepareHeaders', 'fetchFn', 'paramsSerializer']);
  return (
    typeof fetch > 'u' &&
      l === jd &&
      console.warn(
        'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
      ),
    function (c, p) {
      return il(t, null, function () {
        var d,
          y,
          g,
          _,
          C,
          h,
          f,
          v,
          m,
          w,
          E,
          P,
          O,
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
          $e,
          Te,
          Yn,
          br,
          In,
          Lr;
        return ol(this, function (ct) {
          switch (ct.label) {
            case 0:
              return (
                (d = p.signal),
                (y = p.getState),
                (g = p.extra),
                (_ = p.endpoint),
                (C = p.forced),
                (h = p.type),
                (v = typeof c == 'string' ? { url: c } : c),
                (m = v.url),
                (w = v.method),
                (E = w === void 0 ? 'GET' : w),
                (P = v.headers),
                (O = P === void 0 ? new Headers({}) : P),
                (R = v.body),
                (T = R === void 0 ? void 0 : R),
                (M = v.params),
                ($ = M === void 0 ? void 0 : M),
                (U = v.responseHandler),
                (ee = U === void 0 ? 'json' : U),
                (Z = v.validateStatus),
                (te = Z === void 0 ? eS : Z),
                (J = Cd(v, [
                  'url',
                  'method',
                  'headers',
                  'body',
                  'params',
                  'responseHandler',
                  'validateStatus',
                ])),
                (j = Ne(Pn(Ne({}, s), { method: E, signal: d, body: T }), J)),
                (z = j),
                [
                  4,
                  o(new Headers(Ad(O)), {
                    getState: y,
                    extra: g,
                    endpoint: _,
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
                    (Vu(wt) ||
                      Array.isArray(wt) ||
                      typeof wt.toJSON == 'function')
                  );
                }),
                !j.headers.has('content-type') &&
                  W(T) &&
                  j.headers.set('content-type', 'application/json'),
                W(T) && tS(j.headers) && (j.body = JSON.stringify(T)),
                $ &&
                  ((oe = ~m.indexOf('?') ? '&' : '?'),
                  (ne = a ? a($) : new URLSearchParams(Ad($))),
                  (m += oe + ne)),
                (m = Y1(r, m)),
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
                ($e = ct.sent()),
                [
                  2,
                  {
                    error: { status: 'FETCH_ERROR', error: String($e) },
                    meta: f,
                  },
                ]
              );
            case 5:
              (Te = _e.clone()), (f.response = Te), (br = ''), (ct.label = 6);
            case 6:
              return (
                ct.trys.push([6, 8, , 9]),
                [
                  4,
                  Promise.all([
                    nS(_e, ee).then(
                      function (wt) {
                        return (Yn = wt);
                      },
                      function (wt) {
                        return (In = wt);
                      }
                    ),
                    Te.text().then(
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
                te(_e, Yn)
                  ? { data: Yn, meta: f }
                  : { error: { status: _e.status, data: Yn }, meta: f },
              ];
          }
        });
      });
    }
  );
}
var Id = (function () {
    function e(t, n) {
      n === void 0 && (n = void 0), (this.value = t), (this.meta = n);
    }
    return e;
  })(),
  _c = at('__rtkq/focused'),
  zh = at('__rtkq/unfocused'),
  Ec = at('__rtkq/online'),
  bh = at('__rtkq/offline'),
  zt;
(function (e) {
  (e.query = 'query'), (e.mutation = 'mutation');
})(zt || (zt = {}));
function rS(e) {
  return e.type === zt.query;
}
function uS(e) {
  return e.type === zt.mutation;
}
function Lh(e, t, n, r, u, o) {
  return oS(e)
    ? e(t, n, r, u).map(fs).map(o)
    : Array.isArray(e)
    ? e.map(fs).map(o)
    : [];
}
function oS(e) {
  return typeof e == 'function';
}
function fs(e) {
  return typeof e == 'string' ? { type: e } : e;
}
function iS(e) {
  return e;
}
function lS(e) {
  var t = this,
    n = e.reducerPath,
    r = e.baseQuery,
    u = e.context.endpointDefinitions,
    o = e.serializeQueryArgs,
    i = e.api,
    l = function (f, v, m) {
      return function (w) {
        var E = u[f];
        w(
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
      return function (w, E) {
        var P,
          O,
          R = i.endpoints[f].select(v)(E()),
          T = {
            patches: [],
            inversePatches: [],
            undo: function () {
              return w(i.util.patchQueryData(f, v, T.inversePatches));
            },
          };
        if (R.status === Ee.uninitialized) return T;
        if ('data' in R)
          if (st(R.data)) {
            var M = _h(R.data, m),
              $ = M[1],
              U = M[2];
            (P = T.patches).push.apply(P, $),
              (O = T.inversePatches).push.apply(O, U);
          } else {
            var ee = m(R.data);
            T.patches.push({ op: 'replace', path: [], value: ee }),
              T.inversePatches.push({ op: 'replace', path: [], value: R.data });
          }
        return w(i.util.patchQueryData(f, v, T.patches)), T;
      };
    },
    s = function (f, v) {
      return il(t, [f, v], function (m, w) {
        var E,
          P,
          O,
          R,
          T,
          M,
          $,
          U,
          ee,
          Z,
          te,
          J = w.signal,
          j = w.rejectWithValue,
          z = w.fulfillWithValue,
          W = w.dispatch,
          oe = w.getState,
          ne = w.extra;
        return ol(this, function (le) {
          switch (le.label) {
            case 0:
              (E = u[m.endpointName]), (le.label = 1);
            case 1:
              return (
                le.trys.push([1, 7, , 8]),
                (P = iS),
                (O = void 0),
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
                (O = le.sent()),
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
              (O = le.sent()), (le.label = 5);
            case 5:
              if ((typeof process < 'u', O.error))
                throw new Id(O.error, O.meta);
              return (Z = z), [4, P(O.data, O.meta, m.originalArgs)];
            case 6:
              return [
                2,
                Z.apply(void 0, [
                  le.sent(),
                  { fulfilledTimeStamp: Date.now(), baseQueryMeta: O.meta },
                ]),
              ];
            case 7:
              if (((te = le.sent()), te instanceof Id))
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
      w,
      E,
      P,
      O =
        (w = (m = v[n]) == null ? void 0 : m.queries) == null
          ? void 0
          : w[f.queryCacheKey],
      R = (E = v[n]) == null ? void 0 : E.config.refetchOnMountOrArgChange,
      T = O == null ? void 0 : O.fulfilledTimeStamp,
      M = (P = f.forceRefetch) != null ? P : f.subscribe && R;
    return M ? M === !0 || (Number(new Date()) - Number(T)) / 1e3 >= M : !1;
  }
  var p = Pd(n + '/executeQuery', s, {
      getPendingMeta: function () {
        return { startedTimeStamp: Date.now() };
      },
      condition: function (f, v) {
        var m = v.getState,
          w,
          E,
          P = m(),
          O =
            (E = (w = P[n]) == null ? void 0 : w.queries) == null
              ? void 0
              : E[f.queryCacheKey],
          R = O == null ? void 0 : O.fulfilledTimeStamp;
        return (O == null ? void 0 : O.status) === 'pending'
          ? !1
          : c(f, P)
          ? !0
          : !R;
      },
      dispatchConditionRejection: !0,
    }),
    d = Pd(n + '/executeMutation', s, {
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
    _ = function (f, v, m) {
      return function (w, E) {
        var P = y(m) && m.force,
          O = g(m) && m.ifOlderThan,
          R = function (U) {
            return (
              U === void 0 && (U = !0),
              i.endpoints[f].initiate(v, { forceRefetch: U })
            );
          },
          T = i.endpoints[f].select(v)(E());
        if (P) w(R());
        else if (O) {
          var M = T == null ? void 0 : T.fulfilledTimeStamp;
          if (!M) {
            w(R());
            return;
          }
          var $ = (Number(new Date()) - Number(new Date(M))) / 1e3 >= O;
          $ && w(R());
        } else w(R(!1));
      };
    };
  function C(f) {
    return function (v) {
      var m, w;
      return (
        ((w = (m = v == null ? void 0 : v.meta) == null ? void 0 : m.arg) ==
        null
          ? void 0
          : w.endpointName) === f
      );
    };
  }
  function h(f, v) {
    return {
      matchPending: vu(Sc(f), C(v)),
      matchFulfilled: vu(Xn(f), C(v)),
      matchRejected: vu(zu(f), C(v)),
    };
  }
  return {
    queryThunk: p,
    mutationThunk: d,
    prefetch: _,
    updateQueryData: a,
    patchQueryData: l,
    buildMatchThunkActions: h,
  };
}
function Fh(e, t, n, r) {
  return Lh(
    n[e.meta.arg.endpointName][t],
    Xn(e) ? e.payload : void 0,
    ul(e) ? e.payload : void 0,
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
function Md(e, t, n) {
  var r = e[bu(t)];
  r && n(r);
}
var yo = {};
function aS(e) {
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
        removeQueryResult: function (m, w) {
          var E = w.payload.queryCacheKey;
          delete m[E];
        },
        queryResultPatched: function (m, w) {
          var E = w.payload,
            P = E.queryCacheKey,
            O = E.patches;
          ho(m, P, function (R) {
            R.data = Eh(R.data, O.concat());
          });
        },
      },
      extraReducers: function (m) {
        m.addCase(n.pending, function (w, E) {
          var P = E.meta,
            O = E.meta.arg,
            R,
            T;
          O.subscribe &&
            ((T = w[(R = O.queryCacheKey)]) != null ||
              (w[R] = {
                status: Ee.uninitialized,
                endpointName: O.endpointName,
              })),
            ho(w, O.queryCacheKey, function (M) {
              (M.status = Ee.pending),
                (M.requestId = P.requestId),
                O.originalArgs !== void 0 && (M.originalArgs = O.originalArgs),
                (M.startedTimeStamp = P.startedTimeStamp);
            });
        })
          .addCase(n.fulfilled, function (w, E) {
            var P = E.meta,
              O = E.payload;
            ho(w, P.arg.queryCacheKey, function (R) {
              var T;
              R.requestId === P.requestId &&
                ((R.status = Ee.fulfilled),
                (R.data =
                  (T = o[P.arg.endpointName].structuralSharing) == null || T
                    ? $h(R.data, O)
                    : O),
                delete R.error,
                (R.fulfilledTimeStamp = P.fulfilledTimeStamp));
            });
          })
          .addCase(n.rejected, function (w, E) {
            var P = E.meta,
              O = P.condition,
              R = P.arg,
              T = P.requestId,
              M = E.error,
              $ = E.payload;
            ho(w, R.queryCacheKey, function (U) {
              if (!O) {
                if (U.requestId !== T) return;
                (U.status = Ee.rejected), (U.error = $ != null ? $ : M);
              }
            });
          })
          .addMatcher(a, function (w, E) {
            for (
              var P = l(E).queries, O = 0, R = Object.entries(P);
              O < R.length;
              O++
            ) {
              var T = R[O],
                M = T[0],
                $ = T[1];
              (($ == null ? void 0 : $.status) === Ee.fulfilled ||
                ($ == null ? void 0 : $.status) === Ee.rejected) &&
                (w[M] = $);
            }
          });
      },
    }),
    y = Jr({
      name: t + '/mutations',
      initialState: yo,
      reducers: {
        removeMutationResult: function (m, w) {
          var E = w.payload,
            P = bu(E);
          P in m && delete m[P];
        },
      },
      extraReducers: function (m) {
        m.addCase(r.pending, function (w, E) {
          var P = E.meta,
            O = E.meta,
            R = O.requestId,
            T = O.arg,
            M = O.startedTimeStamp;
          !T.track ||
            (w[bu(P)] = {
              requestId: R,
              status: Ee.pending,
              endpointName: T.endpointName,
              startedTimeStamp: M,
            });
        })
          .addCase(r.fulfilled, function (w, E) {
            var P = E.payload,
              O = E.meta;
            !O.arg.track ||
              Md(w, O, function (R) {
                R.requestId === O.requestId &&
                  ((R.status = Ee.fulfilled),
                  (R.data = P),
                  (R.fulfilledTimeStamp = O.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, function (w, E) {
            var P = E.payload,
              O = E.error,
              R = E.meta;
            !R.arg.track ||
              Md(w, R, function (T) {
                T.requestId === R.requestId &&
                  ((T.status = Ee.rejected), (T.error = P != null ? P : O));
              });
          })
          .addMatcher(a, function (w, E) {
            for (
              var P = l(E).mutations, O = 0, R = Object.entries(P);
              O < R.length;
              O++
            ) {
              var T = R[O],
                M = T[0],
                $ = T[1];
              (($ == null ? void 0 : $.status) === Ee.fulfilled ||
                ($ == null ? void 0 : $.status) === Ee.rejected) &&
                M !== ($ == null ? void 0 : $.requestId) &&
                (w[M] = $);
            }
          });
      },
    }),
    g = Jr({
      name: t + '/invalidation',
      initialState: yo,
      reducers: {},
      extraReducers: function (m) {
        m.addCase(d.actions.removeQueryResult, function (w, E) {
          for (
            var P = E.payload.queryCacheKey, O = 0, R = Object.values(w);
            O < R.length;
            O++
          )
            for (var T = R[O], M = 0, $ = Object.values(T); M < $.length; M++) {
              var U = $[M],
                ee = U.indexOf(P);
              ee !== -1 && U.splice(ee, 1);
            }
        })
          .addMatcher(a, function (w, E) {
            for (
              var P, O, R, T, M = l(E).provided, $ = 0, U = Object.entries(M);
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
                      (T = (O = (P = w[Z]) != null ? P : (w[Z] = {}))[
                        (R = W || '__internal_without_id')
                      ]) != null
                        ? T
                        : (O[R] = []),
                    le = 0,
                    Pe = oe;
                  le < Pe.length;
                  le++
                ) {
                  var _e = Pe[le],
                    $e = ne.includes(_e);
                  $e || ne.push(_e);
                }
          })
          .addMatcher(zr(Xn(n), ul(n)), function (w, E) {
            for (
              var P,
                O,
                R,
                T,
                M = Fh(E, 'providesTags', o, s),
                $ = E.meta.arg.queryCacheKey,
                U = 0,
                ee = Object.values(w);
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
                  (T = (O = (P = w[le]) != null ? P : (w[le] = {}))[
                    (R = Pe || '__internal_without_id')
                  ]) != null
                    ? T
                    : (O[R] = []),
                $e = _e.includes($);
              $e || _e.push($);
            }
          });
      },
    }),
    _ = Jr({
      name: t + '/subscriptions',
      initialState: yo,
      reducers: {
        updateSubscriptionOptions: function (m, w) {
          var E = w.payload,
            P = E.queryCacheKey,
            O = E.requestId,
            R = E.options,
            T;
          (T = m == null ? void 0 : m[P]) != null && T[O] && (m[P][O] = R);
        },
        unsubscribeQueryResult: function (m, w) {
          var E = w.payload,
            P = E.queryCacheKey,
            O = E.requestId;
          m[P] && delete m[P][O];
        },
      },
      extraReducers: function (m) {
        m.addCase(d.actions.removeQueryResult, function (w, E) {
          var P = E.payload.queryCacheKey;
          delete w[P];
        })
          .addCase(n.pending, function (w, E) {
            var P = E.meta,
              O = P.arg,
              R = P.requestId,
              T,
              M,
              $,
              U;
            if (O.subscribe) {
              var ee = (M = w[(T = O.queryCacheKey)]) != null ? M : (w[T] = {});
              ee[R] =
                (U = ($ = O.subscriptionOptions) != null ? $ : ee[R]) != null
                  ? U
                  : {};
            }
          })
          .addCase(n.rejected, function (w, E) {
            var P = E.meta,
              O = P.condition,
              R = P.arg,
              T = P.requestId;
            E.error, E.payload;
            var M, $, U, ee;
            if (O && R.subscribe) {
              var Z = ($ = w[(M = R.queryCacheKey)]) != null ? $ : (w[M] = {});
              Z[T] =
                (ee = (U = R.subscriptionOptions) != null ? U : Z[T]) != null
                  ? ee
                  : {};
            }
          })
          .addMatcher(a, function (w) {
            return Ne({}, w);
          });
      },
    }),
    C = Jr({
      name: t + '/config',
      initialState: Ne(
        { online: Z1(), focused: J1(), middlewareRegistered: !1 },
        c
      ),
      reducers: {
        middlewareRegistered: function (m, w) {
          var E = w.payload;
          m.middlewareRegistered =
            m.middlewareRegistered === 'conflict' || i !== E ? 'conflict' : !0;
        },
      },
      extraReducers: function (m) {
        m.addCase(Ec, function (w) {
          w.online = !0;
        })
          .addCase(bh, function (w) {
            w.online = !1;
          })
          .addCase(_c, function (w) {
            w.focused = !0;
          })
          .addCase(zh, function (w) {
            w.focused = !1;
          })
          .addMatcher(a, function (w) {
            return Ne({}, w);
          });
      },
    }),
    h = gc({
      queries: d.reducer,
      mutations: y.reducer,
      provided: g.reducer,
      subscriptions: _.reducer,
      config: C.reducer,
    }),
    f = function (m, w) {
      return h(p.match(w) ? void 0 : m, w);
    },
    v = Pn(Ne(Ne(Ne(Ne({}, C.actions), d.actions), _.actions), y.actions), {
      unsubscribeMutationResult: y.actions.removeMutationResult,
      resetApiState: p,
    });
  return { reducer: f, actions: v };
}
var Fn = Symbol.for('RTKQ/skipToken'),
  qh = { status: Ee.uninitialized },
  sS = Ir(qh, function () {}),
  cS = Ir(qh, function () {});
function fS(e) {
  var t = e.serializeQueryArgs,
    n = e.reducerPath;
  return {
    buildQuerySelector: o,
    buildMutationSelector: i,
    selectInvalidatedBy: l,
  };
  function r(a) {
    return Ne(Ne({}, a), H1(a.status));
  }
  function u(a) {
    var s = a[n];
    return s;
  }
  function o(a, s) {
    return function (c) {
      var p = Xt(u, function (d) {
        var y, g;
        return (g =
          c === Fn || (y = d == null ? void 0 : d.queries) == null
            ? void 0
            : y[t({ queryArgs: c, endpointDefinition: s, endpointName: a })]) !=
          null
          ? g
          : sS;
      });
      return Xt(p, r);
    };
  }
  function i() {
    return function (a) {
      var s, c;
      typeof a == 'object' ? (c = (s = bu(a)) != null ? s : Fn) : (c = a);
      var p = Xt(u, function (d) {
        var y, g;
        return (g =
          c === Fn || (y = d == null ? void 0 : d.mutations) == null
            ? void 0
            : y[c]) != null
          ? g
          : cS;
      });
      return Xt(p, r);
    };
  }
  function l(a, s) {
    for (
      var c, p = a[n], d = new Set(), y = 0, g = s.map(fs);
      y < g.length;
      y++
    ) {
      var _ = g[y],
        C = p.provided[_.type];
      if (!!C)
        for (
          var h =
              (c = _.id !== void 0 ? C[_.id] : Td(Object.values(C))) != null
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
    return Td(
      Array.from(d.values()).map(function (w) {
        var E = p.queries[w];
        return E
          ? [
              {
                queryCacheKey: w,
                endpointName: E.endpointName,
                originalArgs: E.originalArgs,
              },
            ]
          : [];
      })
    );
  }
}
var dS = function (e) {
  var t = e.endpointName,
    n = e.queryArgs;
  return (
    t +
    '(' +
    JSON.stringify(n, function (r, u) {
      return Vu(u)
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
function pS() {
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
        Ne(
          {
            reducerPath: 'api',
            serializeQueryArgs: dS,
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
        apiUid: Rh(),
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
              var _ = g[y];
              o.tagTypes.includes(_) || o.tagTypes.push(_);
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
              return Pn(Ne({}, m), { type: zt.query });
            },
            mutation: function (m) {
              return Pn(Ne({}, m), { type: zt.mutation });
            },
          }),
          d = 0,
          y = Object.entries(p);
        d < y.length;
        d++
      ) {
        var g = y[d],
          _ = g[0],
          C = g[1];
        if (!c.overrideExisting && _ in i.endpointDefinitions) {
          typeof process < 'u';
          continue;
        }
        i.endpointDefinitions[_] = C;
        for (var h = 0, f = a; h < f.length; h++) {
          var v = f[h];
          v.injectEndpoint(_, C);
        }
      }
      return l;
    }
    return l.injectEndpoints({ endpoints: r.endpoints });
  };
}
var vS = 2147483647 / 1e3 - 1,
  hS = function (e) {
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
              _ = p.payload.queryCacheKey;
            s(
              _,
              (d = g.queries[_]) == null ? void 0 : d.endpointName,
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
                w = r.extractRehydrationInfo(p).queries,
                E = 0,
                P = Object.entries(w);
              E < P.length;
              E++
            ) {
              var O = P[E],
                _ = O[0],
                R = O[1];
              s(_, R == null ? void 0 : R.endpointName, l, g.config);
            }
          return y;
        };
      };
      function s(c, p, d, y) {
        var g,
          _ = r.endpointDefinitions[p],
          C =
            (g = _ == null ? void 0 : _.keepUnusedDataFor) != null
              ? g
              : y.keepUnusedDataFor,
          h = Math.max(0, Math.min(C, vS)),
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
  yS = function (e) {
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
            zr(Xn(u), ul(u))(d) && s(Fh(d, 'invalidatesTags', r, i), c),
            o.util.invalidateTags.match(d) &&
              s(Lh(d.payload, void 0, void 0, void 0, void 0, i), c),
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
          var _, C = Array.from(g.values()), h = 0, f = C;
          h < f.length;
          h++
        ) {
          var v = f[h].queryCacheKey,
            m = y.queries[v],
            w = (_ = y.subscriptions[v]) != null ? _ : {};
          m &&
            (Object.keys(w).length === 0
              ? p.dispatch(a({ queryCacheKey: v }))
              : m.status !== Ee.uninitialized && p.dispatch(l(m, v)));
        }
      });
    }
  },
  mS = function (e) {
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
          _ = y.getState()[t],
          C = _.queries[g],
          h = _.subscriptions[g];
        if (!(!C || C.status === Ee.uninitialized)) {
          var f = o(h);
          if (!!Number.isFinite(f)) {
            var v = l[g];
            v != null &&
              v.timeout &&
              (clearTimeout(v.timeout), (v.timeout = void 0));
            var m = Date.now() + f,
              w = (l[g] = {
                nextPollTimestamp: m,
                pollingInterval: f,
                timeout: setTimeout(function () {
                  (w.timeout = void 0), y.dispatch(u(C, g));
                }, f),
              });
          }
        }
      }
      function s(d, y) {
        var g = d.queryCacheKey,
          _ = y.getState()[t],
          C = _.queries[g],
          h = _.subscriptions[g];
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
  gS = function (e) {
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
            _c.match(s) && i(l, 'refetchOnFocus'),
            Ec.match(s) && i(l, 'refetchOnReconnect'),
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
            _ = c[g],
            C = p[g];
          if (!(!C || !_)) {
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
                : _.status !== Ee.uninitialized && l.dispatch(u(_, g)));
          }
        }
      });
    }
  },
  Nd = new Error('Promise never resolved before cacheEntryRemoved.'),
  SS = function (e) {
    var t = e.api,
      n = e.reducerPath,
      r = e.context,
      u = e.queryThunk,
      o = e.mutationThunk,
      i = cs(u),
      l = cs(o),
      a = Xn(u, o);
    return function (s) {
      var c = {};
      return function (y) {
        return function (g) {
          var _ = s.getState(),
            C = y(g),
            h = p(g);
          if (u.pending.match(g)) {
            var f = _[n].queries[h],
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
            for (var w = 0, E = Object.entries(c); w < E.length; w++) {
              var P = E[w],
                O = P[0],
                m = P[1];
              delete c[O], m.cacheEntryRemoved();
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
      function d(y, g, _, C, h) {
        var f = r.endpointDefinitions[y],
          v = f == null ? void 0 : f.onCacheEntryAdded;
        if (!!v) {
          var m = {},
            w = new Promise(function (M) {
              m.cacheEntryRemoved = M;
            }),
            E = Promise.race([
              new Promise(function (M) {
                m.valueResolved = M;
              }),
              w.then(function () {
                throw Nd;
              }),
            ]);
          E.catch(function () {}), (c[_] = m);
          var P = t.endpoints[y].select(f.type === zt.query ? g : _),
            O = C.dispatch(function (M, $, U) {
              return U;
            }),
            R = Pn(Ne({}, C), {
              getCacheEntry: function () {
                return P(C.getState());
              },
              requestId: h,
              extra: O,
              updateCachedData:
                f.type === zt.query
                  ? function (M) {
                      return C.dispatch(t.util.updateQueryData(y, g, M));
                    }
                  : void 0,
              cacheDataLoaded: E,
              cacheEntryRemoved: w,
            }),
            T = v(g, R);
          Promise.resolve(T).catch(function (M) {
            if (M !== Nd) throw M;
          });
        }
      }
    };
  },
  wS = function (e) {
    var t = e.api,
      n = e.context,
      r = e.queryThunk,
      u = e.mutationThunk,
      o = Sc(r, u),
      i = zu(r, u),
      l = Xn(r, u);
    return function (a) {
      var s = {};
      return function (c) {
        return function (p) {
          var d,
            y,
            g,
            _ = c(p);
          if (o(p)) {
            var C = p.meta,
              h = C.requestId,
              f = C.arg,
              v = f.endpointName,
              m = f.originalArgs,
              w = n.endpointDefinitions[v],
              E = w == null ? void 0 : w.onQueryStarted;
            if (E) {
              var P = {},
                O = new Promise(function (te, J) {
                  (P.resolve = te), (P.reject = J);
                });
              O.catch(function () {}), (s[h] = P);
              var R = t.endpoints[v].select(w.type === zt.query ? m : h),
                T = a.dispatch(function (te, J, j) {
                  return j;
                }),
                M = Pn(Ne({}, a), {
                  getCacheEntry: function () {
                    return R(a.getState());
                  },
                  requestId: h,
                  extra: T,
                  updateCachedData:
                    w.type === zt.query
                      ? function (te) {
                          return a.dispatch(t.util.updateQueryData(v, m, te));
                        }
                      : void 0,
                  queryFulfilled: O,
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
          return _;
        };
      };
    };
  },
  _S = function (e) {
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
function ES(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = { invalidateTags: at(t + '/invalidateTags') },
    u = [_S, hS, yS, mS, gS, SS, wS].map(function (l) {
      return l(Pn(Ne({}, e), { refetchQuery: i }));
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
        Ne(
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
function kS(e) {
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
    buildInitiateMutation: _,
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
      var w = m === void 0 ? {} : m,
        E = w.subscribe,
        P = E === void 0 ? !0 : E,
        O = w.forceRefetch,
        R = w.subscriptionOptions;
      return function (T, M) {
        var $ = t({ queryArgs: v, endpointDefinition: h, endpointName: C }),
          U = n({
            type: 'query',
            subscribe: P,
            forceRefetch: O,
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
                return il(this, null, function () {
                  var j;
                  return ol(this, function (z) {
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
  function _(C) {
    return function (h, f) {
      var v = f === void 0 ? {} : f,
        m = v.track,
        w = m === void 0 ? !0 : m,
        E = v.fixedCacheKey;
      return function (P, O) {
        var R = r({
            type: 'mutation',
            endpointName: C,
            originalArgs: h,
            track: w,
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
var Dd = Symbol(),
  PS = function () {
    return {
      name: Dd,
      init: function (e, t, n) {
        var r = t.baseQuery,
          u = t.tagTypes,
          o = t.reducerPath,
          i = t.serializeQueryArgs,
          l = t.keepUnusedDataFor,
          a = t.refetchOnMountOrArgChange,
          s = t.refetchOnFocus,
          c = t.refetchOnReconnect;
        yc();
        var p = function (j) {
          return typeof process < 'u', j;
        };
        Object.assign(e, {
          reducerPath: o,
          endpoints: {},
          internalActions: {
            onOnline: Ec,
            onOffline: bh,
            onFocus: _c,
            onFocusLost: zh,
          },
          util: {},
        });
        var d = lS({
            baseQuery: r,
            reducerPath: o,
            context: n,
            api: e,
            serializeQueryArgs: i,
          }),
          y = d.queryThunk,
          g = d.mutationThunk,
          _ = d.patchQueryData,
          C = d.updateQueryData,
          h = d.prefetch,
          f = d.buildMatchThunkActions,
          v = aS({
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
          w = v.actions;
        ln(e.util, {
          patchQueryData: _,
          updateQueryData: C,
          prefetch: h,
          resetApiState: w.resetApiState,
        }),
          ln(e.internalActions, w),
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
        var E = ES({
            reducerPath: o,
            context: n,
            queryThunk: y,
            mutationThunk: g,
            api: e,
            assertTagType: p,
          }),
          P = E.middleware,
          O = E.actions;
        ln(e.util, O), ln(e, { reducer: m, middleware: P });
        var R = fS({ serializeQueryArgs: i, reducerPath: o }),
          T = R.buildQuerySelector,
          M = R.buildMutationSelector,
          $ = R.selectInvalidatedBy;
        ln(e.util, { selectInvalidatedBy: $ });
        var U = kS({
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
            name: Dd,
            injectEndpoint: function (j, z) {
              var W,
                oe,
                ne = e;
              (oe = (W = ne.endpoints)[j]) != null || (W[j] = {}),
                rS(z)
                  ? ln(
                      ne.endpoints[j],
                      { select: T(j, z), initiate: ee(j, z) },
                      f(y, j)
                    )
                  : uS(z) &&
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
  OS =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, u = e.length; n < r; n++, u++) e[u] = t[n];
      return e;
    },
  xS = Object.defineProperty,
  CS = Object.defineProperties,
  TS = Object.getOwnPropertyDescriptors,
  $d = Object.getOwnPropertySymbols,
  RS = Object.prototype.hasOwnProperty,
  jS = Object.prototype.propertyIsEnumerable,
  zd = function (e, t, n) {
    return t in e
      ? xS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Bt = function (e, t) {
    for (var n in t || (t = {})) RS.call(t, n) && zd(e, n, t[n]);
    if ($d)
      for (var r = 0, u = $d(t); r < u.length; r++) {
        var n = u[r];
        jS.call(t, n) && zd(e, n, t[n]);
      }
    return e;
  },
  Io = function (e, t) {
    return CS(e, TS(t));
  };
function bd(e, t, n, r) {
  var u = G.exports.useMemo(
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
    o = G.exports.useRef(u);
  return (
    G.exports.useEffect(
      function () {
        o.current.serialized !== u.serialized && (o.current = u);
      },
      [u]
    ),
    o.current.serialized === u.serialized ? o.current.queryArgs : e
  );
}
var na = Symbol();
function ra(e) {
  var t = G.exports.useRef(e);
  return (
    G.exports.useEffect(
      function () {
        ri(t.current, e) || (t.current = e);
      },
      [e]
    ),
    ri(t.current, e) ? t.current : e
  );
}
var AS =
    typeof window < 'u' && window.document && window.document.createElement
      ? G.exports.useLayoutEffect
      : G.exports.useEffect,
  IS = function (e) {
    return e;
  },
  MS = function (e) {
    return e;
  },
  NS = function (e) {
    return e.isUninitialized
      ? Io(Bt({}, e), {
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: Ee.pending,
        })
      : e;
  };
function DS(e) {
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
      ? function (_) {
          return _();
        }
      : G.exports.useEffect;
  return { buildQueryHooks: y, buildMutationHook: g, usePrefetch: d };
  function p(_, C, h) {
    if ((C == null ? void 0 : C.endpointName) && _.isUninitialized) {
      var f = C.endpointName,
        v = s.endpointDefinitions[f];
      a({
        queryArgs: C.originalArgs,
        endpointDefinition: v,
        endpointName: f,
      }) === a({ queryArgs: h, endpointDefinition: v, endpointName: f }) &&
        (C = void 0);
    }
    var m = _.isSuccess ? _.data : C == null ? void 0 : C.data;
    m === void 0 && (m = _.data);
    var w = m !== void 0,
      E = _.isLoading,
      P = !w && E,
      O = _.isSuccess || (E && w);
    return Io(Bt({}, _), {
      data: m,
      currentData: _.data,
      isFetching: E,
      isLoading: P,
      isSuccess: O,
    });
  }
  function d(_, C) {
    var h = u(),
      f = ra(C);
    return G.exports.useCallback(
      function (v, m) {
        return h(t.util.prefetch(_, v, Bt(Bt({}, f), m)));
      },
      [_, h, f]
    );
  }
  function y(_) {
    var C = function (v, m) {
        var w = m === void 0 ? {} : m,
          E = w.refetchOnReconnect,
          P = w.refetchOnFocus,
          O = w.refetchOnMountOrArgChange,
          R = w.skip,
          T = R === void 0 ? !1 : R,
          M = w.pollingInterval,
          $ = M === void 0 ? 0 : M,
          U = t.endpoints[_].initiate,
          ee = u(),
          Z = bd(T ? Fn : v, a, s.endpointDefinitions[_], _),
          te = ra({
            refetchOnReconnect: E,
            refetchOnFocus: P,
            pollingInterval: $,
          }),
          J = G.exports.useRef(),
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
                var _e = ee(U(Z, { subscriptionOptions: te, forceRefetch: O }));
                J.current = _e;
              } else te !== Pe && le.updateSubscriptionOptions(te);
            },
            [ee, U, O, Z, te, oe]
          ),
          G.exports.useEffect(function () {
            return function () {
              var ne;
              (ne = J.current) == null || ne.unsubscribe(),
                (J.current = void 0);
            };
          }, []),
          G.exports.useMemo(function () {
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
          w = m.refetchOnReconnect,
          E = m.refetchOnFocus,
          P = m.pollingInterval,
          O = P === void 0 ? 0 : P,
          R = t.endpoints[_].initiate,
          T = u(),
          M = G.exports.useState(na),
          $ = M[0],
          U = M[1],
          ee = G.exports.useRef(),
          Z = ra({
            refetchOnReconnect: w,
            refetchOnFocus: E,
            pollingInterval: O,
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
        var te = G.exports.useRef(Z);
        c(
          function () {
            te.current = Z;
          },
          [Z]
        );
        var J = G.exports.useCallback(
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
          G.exports.useEffect(function () {
            return function () {
              var j;
              (j = ee == null ? void 0 : ee.current) == null || j.unsubscribe();
            };
          }, []),
          G.exports.useEffect(
            function () {
              $ !== na && !ee.current && J($, !0);
            },
            [$, J]
          ),
          G.exports.useMemo(
            function () {
              return [J, $];
            },
            [J, $]
          )
        );
      },
      f = function (v, m) {
        var w = m === void 0 ? {} : m,
          E = w.skip,
          P = E === void 0 ? !1 : E,
          O = w.selectFromResult,
          R = O === void 0 ? IS : O,
          T = t.endpoints[_].select,
          M = bd(P ? Fn : v, a, s.endpointDefinitions[_], _),
          $ = G.exports.useRef(),
          U = G.exports.useMemo(
            function () {
              return Xt(
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
          ee = G.exports.useMemo(
            function () {
              return Xt([U], R);
            },
            [U, R]
          ),
          Z = o(function (j) {
            return ee(j, $.current);
          }, ri),
          te = i(),
          J = U(te.getState(), $.current);
        return (
          AS(
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
          w = m[0],
          E = m[1],
          P = f(E, Io(Bt({}, v), { skip: E === na })),
          O = G.exports.useMemo(
            function () {
              return { lastArg: E };
            },
            [E]
          );
        return G.exports.useMemo(
          function () {
            return [w, P, O];
          },
          [w, P, O]
        );
      },
      useQuery: function (v, m) {
        var w = C(v, m),
          E = f(
            v,
            Bt(
              {
                selectFromResult:
                  v === Fn || (m == null ? void 0 : m.skip) ? void 0 : NS,
              },
              m
            )
          ),
          P = E.data,
          O = E.status,
          R = E.isLoading,
          T = E.isSuccess,
          M = E.isError,
          $ = E.error;
        return (
          G.exports.useDebugValue({
            data: P,
            status: O,
            isLoading: R,
            isSuccess: T,
            isError: M,
            error: $,
          }),
          G.exports.useMemo(
            function () {
              return Bt(Bt({}, E), w);
            },
            [E, w]
          )
        );
      },
    };
  }
  function g(_) {
    return function (C) {
      var h = C === void 0 ? {} : C,
        f = h.selectFromResult,
        v = f === void 0 ? MS : f,
        m = h.fixedCacheKey,
        w = t.endpoints[_],
        E = w.select,
        P = w.initiate,
        O = u(),
        R = G.exports.useState(),
        T = R[0],
        M = R[1];
      G.exports.useEffect(
        function () {
          return function () {
            (T != null && T.arg.fixedCacheKey) || T == null || T.reset();
          };
        },
        [T]
      );
      var $ = G.exports.useCallback(
          function ($e) {
            var Te = O(P($e, { fixedCacheKey: m }));
            return M(Te), Te;
          },
          [O, P, m]
        ),
        U = (T || {}).requestId,
        ee = G.exports.useMemo(
          function () {
            return Xt(
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
        J = G.exports.useCallback(
          function () {
            r(function () {
              T && M(void 0),
                m &&
                  O(
                    t.internalActions.removeMutationResult({
                      requestId: U,
                      fixedCacheKey: m,
                    })
                  );
            });
          },
          [O, m, T, U]
        ),
        j = Z.endpointName,
        z = Z.data,
        W = Z.status,
        oe = Z.isLoading,
        ne = Z.isSuccess,
        le = Z.isError,
        Pe = Z.error;
      G.exports.useDebugValue({
        endpointName: j,
        data: z,
        status: W,
        isLoading: oe,
        isSuccess: ne,
        isError: le,
        error: Pe,
      });
      var _e = G.exports.useMemo(
        function () {
          return Io(Bt({}, Z), { originalArgs: te, reset: J });
        },
        [Z, te, J]
      );
      return G.exports.useMemo(
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
function $S(e) {
  return e.type === di.query;
}
function zS(e) {
  return e.type === di.mutation;
}
function ua(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function mo(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, OS([e], t));
}
var bS = Symbol(),
  LS = function (e) {
    var t = e === void 0 ? {} : e,
      n = t.batch,
      r = n === void 0 ? yi.exports.unstable_batchedUpdates : n,
      u = t.useDispatch,
      o = u === void 0 ? wg : u,
      i = t.useSelector,
      l = i === void 0 ? rg : i,
      a = t.useStore,
      s = a === void 0 ? dh : a,
      c = t.unstable__sideEffectsInRender,
      p = c === void 0 ? !1 : c;
    return {
      name: bS,
      init: function (d, y, g) {
        var _ = y.serializeQueryArgs,
          C = d,
          h = DS({
            api: d,
            moduleOptions: {
              batch: r,
              useDispatch: o,
              useSelector: l,
              useStore: s,
              unstable__sideEffectsInRender: p,
            },
            serializeQueryArgs: _,
            context: g,
          }),
          f = h.buildQueryHooks,
          v = h.buildMutationHook,
          m = h.usePrefetch;
        return (
          mo(C, { usePrefetch: m }),
          mo(g, { batch: r }),
          {
            injectEndpoint: function (w, E) {
              if ($S(E)) {
                var P = f(w),
                  O = P.useQuery,
                  R = P.useLazyQuery,
                  T = P.useLazyQuerySubscription,
                  M = P.useQueryState,
                  $ = P.useQuerySubscription;
                mo(C.endpoints[w], {
                  useQuery: O,
                  useLazyQuery: R,
                  useLazyQuerySubscription: T,
                  useQueryState: M,
                  useQuerySubscription: $,
                }),
                  (d['use' + ua(w) + 'Query'] = O),
                  (d['useLazy' + ua(w) + 'Query'] = R);
              } else if (zS(E)) {
                var U = v(w);
                mo(C.endpoints[w], { useMutation: U }),
                  (d['use' + ua(w) + 'Mutation'] = U);
              }
            },
          }
        );
      },
    };
  },
  al = pS(PS(), LS());
const sl = 'https://ya-praktikum.tech/api/v2',
  oa = al({
    reducerPath: 'auth/api',
    baseQuery: ll({ baseUrl: `${sl}/auth` }),
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
  FS = Mh.actions,
  qS = Mh.reducer,
  Ld = {
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
  Uh = Wu.exports.createSlice({
    name: 'user',
    initialState: Ld,
    reducers: {
      setUserData(e, t) {
        e.userData = { ...e.userData, ...t.payload };
      },
      resetUserState: () => Ld,
    },
  }),
  ia = { credentials: 'include', method: 'PUT' },
  Fd = e => (delete e.status, e),
  la = al({
    reducerPath: 'user/api',
    baseQuery: ll({ baseUrl: `${sl}/user` }),
    endpoints: e => ({
      fetchUserData: e.query({
        query: t => ({ url: `/${t}`, credentials: 'include' }),
      }),
      updateProfile: e.query({
        query: t => ({ ...ia, url: '/profile', body: t }),
        transformResponse: Fd,
      }),
      updateAvatar: e.query({
        query: t => ({ ...ia, url: '/profile/avatar', body: t }),
        transformResponse: Fd,
      }),
      updatePassword: e.query({
        query: t => ({
          ...ia,
          url: '/password',
          body: t,
          responseHandler: n => n.text(),
        }),
      }),
    }),
  }),
  US = Uh.actions,
  QS = Uh.reducer,
  aa = al({
    reducerPath: 'resources/api',
    baseQuery: ll({ baseUrl: `${sl}/resources` }),
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
  VS = { leaders: [] },
  Qh = Wu.exports.createSlice({
    name: 'leaderBoard',
    initialState: VS,
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
const sa = { method: 'POST', credentials: 'include' },
  ca = al({
    reducerPath: 'leaderBoard/api',
    baseQuery: ll({ baseUrl: `${sl}/leaderboard` }),
    endpoints: e => ({
      addLeaderBoard: e.query({
        query: ({
          data: t,
          ratingFieldName: n = rr.RATING_FIELD_NAME,
          teamName: r = rr.TEAM_NAME,
        }) => ({
          ...sa,
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
          ...sa,
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
          ...sa,
          url: `/${t}`,
          body: { ratingFieldName: n, cursor: r, limit: u },
        }),
        transformResponse: t => t.map(n => n.data),
      }),
    }),
  }),
  BS = Qh.actions,
  WS = Qh.reducer,
  HS = R1({
    reducer: {
      [la.reducerPath]: la.reducer,
      [oa.reducerPath]: oa.reducer,
      [aa.reducerPath]: aa.reducer,
      [ca.reducerPath]: ca.reducer,
      user: QS,
      auth: qS,
      game: U1,
      leaderBoard: WS,
    },
    middleware: e =>
      e({ serializableCheck: !1 })
        .concat(la.middleware)
        .concat(oa.middleware)
        .concat(aa.middleware)
        .concat(ca.middleware),
    devTools: !1,
  });
({ ...US, ...FS, ...q1, ...BS });
var Vh = { exports: {} };
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
})(Vh);
const KS = Vh.exports;
const GS = '_titlePage_1hujb_1',
  XS = { titlePage: GS };
function YS(e) {
  return Le('h1', { className: XS.titlePage, children: e.children });
}
const ZS = '_errorBoundary_13950_1',
  JS = '_errorBoundary__content_13950_1',
  ew = '_errorBoundary__message_13950_1',
  tw = '_errorBoundary__message_button_13950_1',
  go = {
    errorBoundary: ZS,
    errorBoundary__content: JS,
    errorBoundary__message: ew,
    errorBoundary__message_button: tw,
  };
class nw extends G.exports.Component {
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
      return Le('div', {
        className: go.errorBoundary,
        children: Kc('div', {
          className: go.errorBoundary__content,
          children: [
            Le(YS, { children: 'App-Error' }),
            Le('p', { children: n }),
            Kc('div', {
              className: go.errorBoundary__message,
              children: [
                Le('span', { children: r }),
                Le(rw, {
                  className: go.errorBoundary__message_button,
                  onClick: this.resetPage,
                  children:
                    '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443',
                }),
                Le('span', {
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
function rw(e) {
  const {
      className: t,
      children: n,
      typeButton: r,
      sizeButton: u,
      positionButton: o,
      ...i
    } = e,
    l = KS('button', t, {
      [`button__type_${r}`]: !!r,
      [`button__position_${o}`]: !!o,
      [`button_size_${u}`]: !!u,
    });
  return Le('button', { ...i, className: l, children: n });
}
function uw() {
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
var Bh,
  qd = yi.exports;
qd.createRoot, (Bh = qd.hydrateRoot);
const Ud = document.getElementById('root');
if (Ud)
  Bh(
    Ud,
    Le(Xd.StrictMode, {
      children: Le(qg, {
        children: Le(gg, {
          store: HS,
          children: Le(nw, { children: Le(jy, {}) }),
        }),
      }),
    })
  );
else throw new Error('HTML element with id = "root" not found');
uw();
