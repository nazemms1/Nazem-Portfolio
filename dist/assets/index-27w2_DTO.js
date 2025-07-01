(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
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
function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bm = { exports: {} },
  la = {},
  Cm = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ci = Symbol.for("react.element"),
  J1 = Symbol.for("react.portal"),
  ex = Symbol.for("react.fragment"),
  tx = Symbol.for("react.strict_mode"),
  nx = Symbol.for("react.profiler"),
  rx = Symbol.for("react.provider"),
  ox = Symbol.for("react.context"),
  ix = Symbol.for("react.forward_ref"),
  sx = Symbol.for("react.suspense"),
  ax = Symbol.for("react.memo"),
  lx = Symbol.for("react.lazy"),
  Cf = Symbol.iterator;
function ux(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cf && e[Cf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Tm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Pm = Object.assign,
  km = {};
function ro(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = km),
    (this.updater = n || Tm);
}
ro.prototype.isReactComponent = {};
ro.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ro.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Em() {}
Em.prototype = ro.prototype;
function gc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = km),
    (this.updater = n || Tm);
}
var yc = (gc.prototype = new Em());
yc.constructor = gc;
Pm(yc, ro.prototype);
yc.isPureReactComponent = !0;
var Tf = Array.isArray,
  jm = Object.prototype.hasOwnProperty,
  vc = { current: null },
  Rm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      jm.call(t, r) && !Rm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ci,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: vc.current,
  };
}
function cx(e, t) {
  return {
    $$typeof: Ci,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ci;
}
function dx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pf = /\/+/g;
function Ga(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? dx("" + e.key)
    : t.toString(36);
}
function us(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ci:
          case J1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Ga(s, 0) : r),
      Tf(o)
        ? ((n = ""),
          e != null && (n = e.replace(Pf, "$&/") + "/"),
          us(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (xc(o) &&
            (o = cx(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Pf, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Tf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Ga(i, a);
      s += us(i, t, n, l, o);
    }
  else if (((l = ux(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Ga(i, a++)), (s += us(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Vi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    us(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function fx(e) {
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
var $e = { current: null },
  cs = { transition: null },
  px = {
    ReactCurrentDispatcher: $e,
    ReactCurrentBatchConfig: cs,
    ReactCurrentOwner: vc,
  };
function Mm() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
  map: Vi,
  forEach: function (e, t, n) {
    Vi(
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
      Vi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Vi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = ro;
V.Fragment = ex;
V.Profiler = nx;
V.PureComponent = gc;
V.StrictMode = tx;
V.Suspense = sx;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = px;
V.act = Mm;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Pm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = vc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      jm.call(t, l) &&
        !Rm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ci, type: e.type, key: o, ref: i, props: r, _owner: s };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: ox,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rx, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Nm;
V.createFactory = function (e) {
  var t = Nm.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: ix, render: e };
};
V.isValidElement = xc;
V.lazy = function (e) {
  return { $$typeof: lx, _payload: { _status: -1, _result: e }, _init: fx };
};
V.memo = function (e, t) {
  return { $$typeof: ax, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = cs.transition;
  cs.transition = {};
  try {
    e();
  } finally {
    cs.transition = t;
  }
};
V.unstable_act = Mm;
V.useCallback = function (e, t) {
  return $e.current.useCallback(e, t);
};
V.useContext = function (e) {
  return $e.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return $e.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return $e.current.useEffect(e, t);
};
V.useId = function () {
  return $e.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return $e.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return $e.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return $e.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return $e.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return $e.current.useRef(e);
};
V.useState = function (e) {
  return $e.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return $e.current.useTransition();
};
V.version = "18.3.1";
Cm.exports = V;
var w = Cm.exports;
const yt = mc(w);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hx = w,
  mx = Symbol.for("react.element"),
  gx = Symbol.for("react.fragment"),
  yx = Object.prototype.hasOwnProperty,
  vx = hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Am(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) yx.call(t, r) && !xx.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: mx,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: vx.current,
  };
}
la.Fragment = gx;
la.jsx = Am;
la.jsxs = Am;
bm.exports = la;
var p = bm.exports,
  Kl = {},
  Dm = { exports: {} },
  qe = {},
  _m = { exports: {} },
  Lm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, _) {
    var $ = R.length;
    R.push(_);
    e: for (; 0 < $; ) {
      var J = ($ - 1) >>> 1,
        ue = R[J];
      if (0 < o(ue, _)) (R[J] = _), (R[$] = ue), ($ = J);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var _ = R[0],
      $ = R.pop();
    if ($ !== _) {
      R[0] = $;
      e: for (var J = 0, ue = R.length, cr = ue >>> 1; J < cr; ) {
        var _t = 2 * (J + 1) - 1,
          vo = R[_t],
          Lt = _t + 1,
          dr = R[Lt];
        if (0 > o(vo, $))
          Lt < ue && 0 > o(dr, vo)
            ? ((R[J] = dr), (R[Lt] = $), (J = Lt))
            : ((R[J] = vo), (R[_t] = $), (J = _t));
        else if (Lt < ue && 0 > o(dr, $)) (R[J] = dr), (R[Lt] = $), (J = Lt);
        else break e;
      }
    }
    return _;
  }
  function o(R, _) {
    var $ = R.sortIndex - _.sortIndex;
    return $ !== 0 ? $ : R.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    v = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(R) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= R)
        r(u), (_.sortIndex = _.expirationTime), t(l, _);
      else break;
      _ = n(u);
    }
  }
  function b(R) {
    if (((y = !1), x(R), !v))
      if (n(l) !== null) (v = !0), Te(C);
      else {
        var _ = n(u);
        _ !== null && Y(b, _.startTime - R);
      }
  }
  function C(R, _) {
    (v = !1), y && ((y = !1), g(T), (T = -1)), (h = !0);
    var $ = f;
    try {
      for (
        x(_), d = n(l);
        d !== null && (!(d.expirationTime > _) || (R && !W()));

      ) {
        var J = d.callback;
        if (typeof J == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var ue = J(d.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof ue == "function" ? (d.callback = ue) : d === n(l) && r(l),
            x(_);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var cr = !0;
      else {
        var _t = n(u);
        _t !== null && Y(b, _t.startTime - _), (cr = !1);
      }
      return cr;
    } finally {
      (d = null), (f = $), (h = !1);
    }
  }
  var k = !1,
    P = null,
    T = -1,
    M = 5,
    N = -1;
  function W() {
    return !(e.unstable_now() - N < M);
  }
  function G() {
    if (P !== null) {
      var R = e.unstable_now();
      N = R;
      var _ = !0;
      try {
        _ = P(!0, R);
      } finally {
        _ ? me() : ((k = !1), (P = null));
      }
    } else k = !1;
  }
  var me;
  if (typeof m == "function")
    me = function () {
      m(G);
    };
  else if (typeof MessageChannel < "u") {
    var ge = new MessageChannel(),
      xe = ge.port2;
    (ge.port1.onmessage = G),
      (me = function () {
        xe.postMessage(null);
      });
  } else
    me = function () {
      S(G, 0);
    };
  function Te(R) {
    (P = R), k || ((k = !0), me());
  }
  function Y(R, _) {
    T = S(function () {
      R(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), Te(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = f;
      }
      var $ = f;
      f = _;
      try {
        return R();
      } finally {
        f = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, _) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var $ = f;
      f = R;
      try {
        return _();
      } finally {
        f = $;
      }
    }),
    (e.unstable_scheduleCallback = function (R, _, $) {
      var J = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? J + $ : J))
          : ($ = J),
        R)
      ) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return (
        (ue = $ + ue),
        (R = {
          id: c++,
          callback: _,
          priorityLevel: R,
          startTime: $,
          expirationTime: ue,
          sortIndex: -1,
        }),
        $ > J
          ? ((R.sortIndex = $),
            t(u, R),
            n(l) === null &&
              R === n(u) &&
              (y ? (g(T), (T = -1)) : (y = !0), Y(b, $ - J)))
          : ((R.sortIndex = ue), t(l, R), v || h || ((v = !0), Te(C))),
        R
      );
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (R) {
      var _ = f;
      return function () {
        var $ = f;
        f = _;
        try {
          return R.apply(this, arguments);
        } finally {
          f = $;
        }
      };
    });
})(Lm);
_m.exports = Lm;
var wx = _m.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sx = w,
  Qe = wx;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $m = new Set(),
  Jo = {};
function or(e, t) {
  Hr(e, t), Hr(e + "Capture", t);
}
function Hr(e, t) {
  for (Jo[e] = t, e = 0; e < t.length; e++) $m.add(t[e]);
}
var Wt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xl = Object.prototype.hasOwnProperty,
  bx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  kf = {},
  Ef = {};
function Cx(e) {
  return Xl.call(Ef, e)
    ? !0
    : Xl.call(kf, e)
    ? !1
    : bx.test(e)
    ? (Ef[e] = !0)
    : ((kf[e] = !0), !1);
}
function Tx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Px(e, t, n, r) {
  if (t === null || typeof t > "u" || Tx(e, t, n, r)) return !0;
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
function Ie(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Ie(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wc = /[\-:]([a-z])/g;
function Sc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wc, Sc);
    Ce[t] = new Ie(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wc, Sc);
    Ce[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(wc, Sc);
  Ce[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new Ie(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bc(e, t, n, r) {
  var o = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Px(t, n, o, r) && (n = null),
    r || o === null
      ? Cx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xt = Sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zi = Symbol.for("react.element"),
  wr = Symbol.for("react.portal"),
  Sr = Symbol.for("react.fragment"),
  Cc = Symbol.for("react.strict_mode"),
  Ql = Symbol.for("react.profiler"),
  Im = Symbol.for("react.provider"),
  Vm = Symbol.for("react.context"),
  Tc = Symbol.for("react.forward_ref"),
  Zl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  Pc = Symbol.for("react.memo"),
  rn = Symbol.for("react.lazy"),
  zm = Symbol.for("react.offscreen"),
  jf = Symbol.iterator;
function xo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (jf && e[jf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  Ya;
function Mo(e) {
  if (Ya === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ya = (t && t[1]) || "";
    }
  return (
    `
` +
    Ya +
    e
  );
}
var Ka = !1;
function Xa(e, t) {
  if (!e || Ka) return "";
  Ka = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Ka = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mo(e) : "";
}
function kx(e) {
  switch (e.tag) {
    case 5:
      return Mo(e.type);
    case 16:
      return Mo("Lazy");
    case 13:
      return Mo("Suspense");
    case 19:
      return Mo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xa(e.type, !1)), e;
    case 11:
      return (e = Xa(e.type.render, !1)), e;
    case 1:
      return (e = Xa(e.type, !0)), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sr:
      return "Fragment";
    case wr:
      return "Portal";
    case Ql:
      return "Profiler";
    case Cc:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vm:
        return (e.displayName || "Context") + ".Consumer";
      case Im:
        return (e._context.displayName || "Context") + ".Provider";
      case Tc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Pc:
        return (
          (t = e.displayName || null), t !== null ? t : Jl(e.type) || "Memo"
        );
      case rn:
        (t = e._payload), (e = e._init);
        try {
          return Jl(e(t));
        } catch {}
    }
  return null;
}
function Ex(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jl(t);
    case 8:
      return t === Cc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function wn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Om(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function jx(e) {
  var t = Om(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Oi(e) {
  e._valueTracker || (e._valueTracker = jx(e));
}
function Fm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Om(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ks(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eu(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Rf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = wn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Bm(e, t) {
  (t = t.checked), t != null && bc(e, "checked", t, !1);
}
function tu(e, t) {
  Bm(e, t);
  var n = wn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? nu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && nu(e, t.type, wn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function nu(e, t, n) {
  (t !== "number" || ks(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ao = Array.isArray;
function Vr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ru(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Mf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (Ao(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: wn(n) };
}
function Um(e, t) {
  var n = wn(t.value),
    r = wn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Af(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ou(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Wm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Fi,
  Hm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Fi = Fi || document.createElement("div"),
          Fi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Fi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ei(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Oo = {
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
  Rx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Oo).forEach(function (e) {
  Rx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Oo[t] = Oo[e]);
  });
});
function Gm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Oo.hasOwnProperty(e) && Oo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ym(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Gm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Nx = re(
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
function iu(e, t) {
  if (t) {
    if (Nx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function su(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var au = null;
function kc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var lu = null,
  zr = null,
  Or = null;
function Df(e) {
  if ((e = ki(e))) {
    if (typeof lu != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = pa(t)), lu(e.stateNode, e.type, t));
  }
}
function Km(e) {
  zr ? (Or ? Or.push(e) : (Or = [e])) : (zr = e);
}
function Xm() {
  if (zr) {
    var e = zr,
      t = Or;
    if (((Or = zr = null), Df(e), t)) for (e = 0; e < t.length; e++) Df(t[e]);
  }
}
function Qm(e, t) {
  return e(t);
}
function Zm() {}
var Qa = !1;
function qm(e, t, n) {
  if (Qa) return e(t, n);
  Qa = !0;
  try {
    return Qm(e, t, n);
  } finally {
    (Qa = !1), (zr !== null || Or !== null) && (Zm(), Xm());
  }
}
function ti(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var uu = !1;
if (Wt)
  try {
    var wo = {};
    Object.defineProperty(wo, "passive", {
      get: function () {
        uu = !0;
      },
    }),
      window.addEventListener("test", wo, wo),
      window.removeEventListener("test", wo, wo);
  } catch {
    uu = !1;
  }
function Mx(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Fo = !1,
  Es = null,
  js = !1,
  cu = null,
  Ax = {
    onError: function (e) {
      (Fo = !0), (Es = e);
    },
  };
function Dx(e, t, n, r, o, i, s, a, l) {
  (Fo = !1), (Es = null), Mx.apply(Ax, arguments);
}
function _x(e, t, n, r, o, i, s, a, l) {
  if ((Dx.apply(this, arguments), Fo)) {
    if (Fo) {
      var u = Es;
      (Fo = !1), (Es = null);
    } else throw Error(j(198));
    js || ((js = !0), (cu = u));
  }
}
function ir(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Jm(e) {
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
function _f(e) {
  if (ir(e) !== e) throw Error(j(188));
}
function Lx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ir(e)), t === null)) throw Error(j(188));
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
        if (i === n) return _f(o), e;
        if (i === r) return _f(o), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function eg(e) {
  return (e = Lx(e)), e !== null ? tg(e) : null;
}
function tg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = tg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ng = Qe.unstable_scheduleCallback,
  Lf = Qe.unstable_cancelCallback,
  $x = Qe.unstable_shouldYield,
  Ix = Qe.unstable_requestPaint,
  le = Qe.unstable_now,
  Vx = Qe.unstable_getCurrentPriorityLevel,
  Ec = Qe.unstable_ImmediatePriority,
  rg = Qe.unstable_UserBlockingPriority,
  Rs = Qe.unstable_NormalPriority,
  zx = Qe.unstable_LowPriority,
  og = Qe.unstable_IdlePriority,
  ua = null,
  Nt = null;
function Ox(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(ua, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : Ux,
  Fx = Math.log,
  Bx = Math.LN2;
function Ux(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Fx(e) / Bx) | 0)) | 0;
}
var Bi = 64,
  Ui = 4194304;
function Do(e) {
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
function Ns(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Do(a)) : ((i &= s), i !== 0 && (r = Do(i)));
  } else (s = n & ~o), s !== 0 ? (r = Do(s)) : i !== 0 && (r = Do(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - wt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Wx(e, t) {
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
function Hx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - wt(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = Wx(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function du(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ig() {
  var e = Bi;
  return (Bi <<= 1), !(Bi & 4194240) && (Bi = 64), e;
}
function Za(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ti(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = n);
}
function Gx(e, t) {
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
    var o = 31 - wt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function jc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var H = 0;
function sg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ag,
  Rc,
  lg,
  ug,
  cg,
  fu = !1,
  Wi = [],
  fn = null,
  pn = null,
  hn = null,
  ni = new Map(),
  ri = new Map(),
  an = [],
  Yx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function $f(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      fn = null;
      break;
    case "dragenter":
    case "dragleave":
      pn = null;
      break;
    case "mouseover":
    case "mouseout":
      hn = null;
      break;
    case "pointerover":
    case "pointerout":
      ni.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ri.delete(t.pointerId);
  }
}
function So(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ki(t)), t !== null && Rc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Kx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (fn = So(fn, e, t, n, r, o)), !0;
    case "dragenter":
      return (pn = So(pn, e, t, n, r, o)), !0;
    case "mouseover":
      return (hn = So(hn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ni.set(i, So(ni.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ri.set(i, So(ri.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function dg(e) {
  var t = Fn(e.target);
  if (t !== null) {
    var n = ir(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jm(n)), t !== null)) {
          (e.blockedOn = t),
            cg(e.priority, function () {
              lg(n);
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
function ds(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (au = r), n.target.dispatchEvent(r), (au = null);
    } else return (t = ki(n)), t !== null && Rc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function If(e, t, n) {
  ds(e) && n.delete(t);
}
function Xx() {
  (fu = !1),
    fn !== null && ds(fn) && (fn = null),
    pn !== null && ds(pn) && (pn = null),
    hn !== null && ds(hn) && (hn = null),
    ni.forEach(If),
    ri.forEach(If);
}
function bo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fu ||
      ((fu = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Xx)));
}
function oi(e) {
  function t(o) {
    return bo(o, e);
  }
  if (0 < Wi.length) {
    bo(Wi[0], e);
    for (var n = 1; n < Wi.length; n++) {
      var r = Wi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    fn !== null && bo(fn, e),
      pn !== null && bo(pn, e),
      hn !== null && bo(hn, e),
      ni.forEach(t),
      ri.forEach(t),
      n = 0;
    n < an.length;
    n++
  )
    (r = an[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < an.length && ((n = an[0]), n.blockedOn === null); )
    dg(n), n.blockedOn === null && an.shift();
}
var Fr = Xt.ReactCurrentBatchConfig,
  Ms = !0;
function Qx(e, t, n, r) {
  var o = H,
    i = Fr.transition;
  Fr.transition = null;
  try {
    (H = 1), Nc(e, t, n, r);
  } finally {
    (H = o), (Fr.transition = i);
  }
}
function Zx(e, t, n, r) {
  var o = H,
    i = Fr.transition;
  Fr.transition = null;
  try {
    (H = 4), Nc(e, t, n, r);
  } finally {
    (H = o), (Fr.transition = i);
  }
}
function Nc(e, t, n, r) {
  if (Ms) {
    var o = pu(e, t, n, r);
    if (o === null) al(e, t, r, As, n), $f(e, r);
    else if (Kx(o, e, t, n, r)) r.stopPropagation();
    else if (($f(e, r), t & 4 && -1 < Yx.indexOf(e))) {
      for (; o !== null; ) {
        var i = ki(o);
        if (
          (i !== null && ag(i),
          (i = pu(e, t, n, r)),
          i === null && al(e, t, r, As, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else al(e, t, r, null, n);
  }
}
var As = null;
function pu(e, t, n, r) {
  if (((As = null), (e = kc(r)), (e = Fn(e)), e !== null))
    if (((t = ir(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Jm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (As = e), null;
}
function fg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vx()) {
        case Ec:
          return 1;
        case rg:
          return 4;
        case Rs:
        case zx:
          return 16;
        case og:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cn = null,
  Mc = null,
  fs = null;
function pg() {
  if (fs) return fs;
  var e,
    t = Mc,
    n = t.length,
    r,
    o = "value" in cn ? cn.value : cn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (fs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ps(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Hi() {
  return !0;
}
function Vf() {
  return !1;
}
function Je(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Hi
        : Vf),
      (this.isPropagationStopped = Vf),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Hi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Hi));
      },
      persist: function () {},
      isPersistent: Hi,
    }),
    t
  );
}
var oo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ac = Je(oo),
  Pi = re({}, oo, { view: 0, detail: 0 }),
  qx = Je(Pi),
  qa,
  Ja,
  Co,
  ca = re({}, Pi, {
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
    getModifierState: Dc,
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
      return "movementX" in e
        ? e.movementX
        : (e !== Co &&
            (Co && e.type === "mousemove"
              ? ((qa = e.screenX - Co.screenX), (Ja = e.screenY - Co.screenY))
              : (Ja = qa = 0),
            (Co = e)),
          qa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ja;
    },
  }),
  zf = Je(ca),
  Jx = re({}, ca, { dataTransfer: 0 }),
  ew = Je(Jx),
  tw = re({}, Pi, { relatedTarget: 0 }),
  el = Je(tw),
  nw = re({}, oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rw = Je(nw),
  ow = re({}, oo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  iw = Je(ow),
  sw = re({}, oo, { data: 0 }),
  Of = Je(sw),
  aw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  lw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  uw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = uw[e]) ? !!t[e] : !1;
}
function Dc() {
  return cw;
}
var dw = re({}, Pi, {
    key: function (e) {
      if (e.key) {
        var t = aw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ps(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? lw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Dc,
    charCode: function (e) {
      return e.type === "keypress" ? ps(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ps(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  fw = Je(dw),
  pw = re({}, ca, {
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
  Ff = Je(pw),
  hw = re({}, Pi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Dc,
  }),
  mw = Je(hw),
  gw = re({}, oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yw = Je(gw),
  vw = re({}, ca, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xw = Je(vw),
  ww = [9, 13, 27, 32],
  _c = Wt && "CompositionEvent" in window,
  Bo = null;
Wt && "documentMode" in document && (Bo = document.documentMode);
var Sw = Wt && "TextEvent" in window && !Bo,
  hg = Wt && (!_c || (Bo && 8 < Bo && 11 >= Bo)),
  Bf = " ",
  Uf = !1;
function mg(e, t) {
  switch (e) {
    case "keyup":
      return ww.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function gg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var br = !1;
function bw(e, t) {
  switch (e) {
    case "compositionend":
      return gg(t);
    case "keypress":
      return t.which !== 32 ? null : ((Uf = !0), Bf);
    case "textInput":
      return (e = t.data), e === Bf && Uf ? null : e;
    default:
      return null;
  }
}
function Cw(e, t) {
  if (br)
    return e === "compositionend" || (!_c && mg(e, t))
      ? ((e = pg()), (fs = Mc = cn = null), (br = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return hg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Tw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
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
function Wf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Tw[e.type] : t === "textarea";
}
function yg(e, t, n, r) {
  Km(r),
    (t = Ds(t, "onChange")),
    0 < t.length &&
      ((n = new Ac("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Uo = null,
  ii = null;
function Pw(e) {
  jg(e, 0);
}
function da(e) {
  var t = Pr(e);
  if (Fm(t)) return e;
}
function kw(e, t) {
  if (e === "change") return t;
}
var vg = !1;
if (Wt) {
  var tl;
  if (Wt) {
    var nl = "oninput" in document;
    if (!nl) {
      var Hf = document.createElement("div");
      Hf.setAttribute("oninput", "return;"),
        (nl = typeof Hf.oninput == "function");
    }
    tl = nl;
  } else tl = !1;
  vg = tl && (!document.documentMode || 9 < document.documentMode);
}
function Gf() {
  Uo && (Uo.detachEvent("onpropertychange", xg), (ii = Uo = null));
}
function xg(e) {
  if (e.propertyName === "value" && da(ii)) {
    var t = [];
    yg(t, ii, e, kc(e)), qm(Pw, t);
  }
}
function Ew(e, t, n) {
  e === "focusin"
    ? (Gf(), (Uo = t), (ii = n), Uo.attachEvent("onpropertychange", xg))
    : e === "focusout" && Gf();
}
function jw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return da(ii);
}
function Rw(e, t) {
  if (e === "click") return da(t);
}
function Nw(e, t) {
  if (e === "input" || e === "change") return da(t);
}
function Mw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bt = typeof Object.is == "function" ? Object.is : Mw;
function si(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Xl.call(t, o) || !bt(e[o], t[o])) return !1;
  }
  return !0;
}
function Yf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Kf(e, t) {
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
function wg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? wg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Sg() {
  for (var e = window, t = ks(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ks(e.document);
  }
  return t;
}
function Lc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Aw(e) {
  var t = Sg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Lc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
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
          (o = Kf(n, i));
        var s = Kf(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Dw = Wt && "documentMode" in document && 11 >= document.documentMode,
  Cr = null,
  hu = null,
  Wo = null,
  mu = !1;
function Xf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mu ||
    Cr == null ||
    Cr !== ks(r) ||
    ((r = Cr),
    "selectionStart" in r && Lc(r)
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
    (Wo && si(Wo, r)) ||
      ((Wo = r),
      (r = Ds(hu, "onSelect")),
      0 < r.length &&
        ((t = new Ac("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Cr))));
}
function Gi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Tr = {
    animationend: Gi("Animation", "AnimationEnd"),
    animationiteration: Gi("Animation", "AnimationIteration"),
    animationstart: Gi("Animation", "AnimationStart"),
    transitionend: Gi("Transition", "TransitionEnd"),
  },
  rl = {},
  bg = {};
Wt &&
  ((bg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Tr.animationend.animation,
    delete Tr.animationiteration.animation,
    delete Tr.animationstart.animation),
  "TransitionEvent" in window || delete Tr.transitionend.transition);
function fa(e) {
  if (rl[e]) return rl[e];
  if (!Tr[e]) return e;
  var t = Tr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bg) return (rl[e] = t[n]);
  return e;
}
var Cg = fa("animationend"),
  Tg = fa("animationiteration"),
  Pg = fa("animationstart"),
  kg = fa("transitionend"),
  Eg = new Map(),
  Qf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Pn(e, t) {
  Eg.set(e, t), or(t, [e]);
}
for (var ol = 0; ol < Qf.length; ol++) {
  var il = Qf[ol],
    _w = il.toLowerCase(),
    Lw = il[0].toUpperCase() + il.slice(1);
  Pn(_w, "on" + Lw);
}
Pn(Cg, "onAnimationEnd");
Pn(Tg, "onAnimationIteration");
Pn(Pg, "onAnimationStart");
Pn("dblclick", "onDoubleClick");
Pn("focusin", "onFocus");
Pn("focusout", "onBlur");
Pn(kg, "onTransitionEnd");
Hr("onMouseEnter", ["mouseout", "mouseover"]);
Hr("onMouseLeave", ["mouseout", "mouseover"]);
Hr("onPointerEnter", ["pointerout", "pointerover"]);
Hr("onPointerLeave", ["pointerout", "pointerover"]);
or(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
or(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
or("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
or(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
or(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
or(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var _o =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $w = new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));
function Zf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), _x(r, t, void 0, e), (e.currentTarget = null);
}
function jg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Zf(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Zf(o, a, u), (i = l);
        }
    }
  }
  if (js) throw ((e = cu), (js = !1), (cu = null), e);
}
function X(e, t) {
  var n = t[wu];
  n === void 0 && (n = t[wu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Rg(t, e, 2, !1), n.add(r));
}
function sl(e, t, n) {
  var r = 0;
  t && (r |= 4), Rg(n, e, r, t);
}
var Yi = "_reactListening" + Math.random().toString(36).slice(2);
function ai(e) {
  if (!e[Yi]) {
    (e[Yi] = !0),
      $m.forEach(function (n) {
        n !== "selectionchange" && ($w.has(n) || sl(n, !1, e), sl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yi] || ((t[Yi] = !0), sl("selectionchange", !1, t));
  }
}
function Rg(e, t, n, r) {
  switch (fg(t)) {
    case 1:
      var o = Qx;
      break;
    case 4:
      o = Zx;
      break;
    default:
      o = Nc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !uu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function al(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Fn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  qm(function () {
    var u = i,
      c = kc(n),
      d = [];
    e: {
      var f = Eg.get(e);
      if (f !== void 0) {
        var h = Ac,
          v = e;
        switch (e) {
          case "keypress":
            if (ps(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = fw;
            break;
          case "focusin":
            (v = "focus"), (h = el);
            break;
          case "focusout":
            (v = "blur"), (h = el);
            break;
          case "beforeblur":
          case "afterblur":
            h = el;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = zf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = ew;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = mw;
            break;
          case Cg:
          case Tg:
          case Pg:
            h = rw;
            break;
          case kg:
            h = yw;
            break;
          case "scroll":
            h = qx;
            break;
          case "wheel":
            h = xw;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = iw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Ff;
        }
        var y = (t & 4) !== 0,
          S = !y && e === "scroll",
          g = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var m = u, x; m !== null; ) {
          x = m;
          var b = x.stateNode;
          if (
            (x.tag === 5 &&
              b !== null &&
              ((x = b),
              g !== null && ((b = ti(m, g)), b != null && y.push(li(m, b, x)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < y.length &&
          ((f = new h(f, v, null, n, c)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== au &&
            (v = n.relatedTarget || n.fromElement) &&
            (Fn(v) || v[Ht]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? Fn(v) : null),
              v !== null &&
                ((S = ir(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((y = zf),
            (b = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Ff),
              (b = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (S = h == null ? f : Pr(h)),
            (x = v == null ? f : Pr(v)),
            (f = new y(b, m + "leave", h, n, c)),
            (f.target = S),
            (f.relatedTarget = x),
            (b = null),
            Fn(c) === u &&
              ((y = new y(g, m + "enter", v, n, c)),
              (y.target = x),
              (y.relatedTarget = S),
              (b = y)),
            (S = b),
            h && v)
          )
            t: {
              for (y = h, g = v, m = 0, x = y; x; x = fr(x)) m++;
              for (x = 0, b = g; b; b = fr(b)) x++;
              for (; 0 < m - x; ) (y = fr(y)), m--;
              for (; 0 < x - m; ) (g = fr(g)), x--;
              for (; m--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = fr(y)), (g = fr(g));
              }
              y = null;
            }
          else y = null;
          h !== null && qf(d, f, h, y, !1),
            v !== null && S !== null && qf(d, S, v, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? Pr(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var C = kw;
        else if (Wf(f))
          if (vg) C = Nw;
          else {
            C = jw;
            var k = Ew;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = Rw);
        if (C && (C = C(e, u))) {
          yg(d, C, n, c);
          break e;
        }
        k && k(e, f, u),
          e === "focusout" &&
            (k = f._wrapperState) &&
            k.controlled &&
            f.type === "number" &&
            nu(f, "number", f.value);
      }
      switch (((k = u ? Pr(u) : window), e)) {
        case "focusin":
          (Wf(k) || k.contentEditable === "true") &&
            ((Cr = k), (hu = u), (Wo = null));
          break;
        case "focusout":
          Wo = hu = Cr = null;
          break;
        case "mousedown":
          mu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (mu = !1), Xf(d, n, c);
          break;
        case "selectionchange":
          if (Dw) break;
        case "keydown":
        case "keyup":
          Xf(d, n, c);
      }
      var P;
      if (_c)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        br
          ? mg(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (hg &&
          n.locale !== "ko" &&
          (br || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && br && (P = pg())
            : ((cn = c),
              (Mc = "value" in cn ? cn.value : cn.textContent),
              (br = !0))),
        (k = Ds(u, T)),
        0 < k.length &&
          ((T = new Of(T, e, null, n, c)),
          d.push({ event: T, listeners: k }),
          P ? (T.data = P) : ((P = gg(n)), P !== null && (T.data = P)))),
        (P = Sw ? bw(e, n) : Cw(e, n)) &&
          ((u = Ds(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Of("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    jg(d, t);
  });
}
function li(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ds(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ti(e, n)),
      i != null && r.unshift(li(e, i, o)),
      (i = ti(e, t)),
      i != null && r.push(li(e, i, o))),
      (e = e.return);
  }
  return r;
}
function fr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qf(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = ti(n, i)), l != null && s.unshift(li(n, l, a)))
        : o || ((l = ti(n, i)), l != null && s.push(li(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Iw = /\r\n?/g,
  Vw = /\u0000|\uFFFD/g;
function Jf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Iw,
      `
`
    )
    .replace(Vw, "");
}
function Ki(e, t, n) {
  if (((t = Jf(t)), Jf(e) !== t && n)) throw Error(j(425));
}
function _s() {}
var gu = null,
  yu = null;
function vu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var xu = typeof setTimeout == "function" ? setTimeout : void 0,
  zw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ep = typeof Promise == "function" ? Promise : void 0,
  Ow =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ep < "u"
      ? function (e) {
          return ep.resolve(null).then(e).catch(Fw);
        }
      : xu;
function Fw(e) {
  setTimeout(function () {
    throw e;
  });
}
function ll(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), oi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  oi(t);
}
function mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function tp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var io = Math.random().toString(36).slice(2),
  Et = "__reactFiber$" + io,
  ui = "__reactProps$" + io,
  Ht = "__reactContainer$" + io,
  wu = "__reactEvents$" + io,
  Bw = "__reactListeners$" + io,
  Uw = "__reactHandles$" + io;
function Fn(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = tp(e); e !== null; ) {
          if ((n = e[Et])) return n;
          e = tp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ki(e) {
  return (
    (e = e[Et] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function pa(e) {
  return e[ui] || null;
}
var Su = [],
  kr = -1;
function kn(e) {
  return { current: e };
}
function Q(e) {
  0 > kr || ((e.current = Su[kr]), (Su[kr] = null), kr--);
}
function K(e, t) {
  kr++, (Su[kr] = e.current), (e.current = t);
}
var Sn = {},
  Ae = kn(Sn),
  Fe = kn(!1),
  qn = Sn;
function Gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Sn;
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
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function Ls() {
  Q(Fe), Q(Ae);
}
function np(e, t, n) {
  if (Ae.current !== Sn) throw Error(j(168));
  K(Ae, t), K(Fe, n);
}
function Ng(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(j(108, Ex(e) || "Unknown", o));
  return re({}, n, r);
}
function $s(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Sn),
    (qn = Ae.current),
    K(Ae, e),
    K(Fe, Fe.current),
    !0
  );
}
function rp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Ng(e, t, qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Q(Fe),
      Q(Ae),
      K(Ae, e))
    : Q(Fe),
    K(Fe, n);
}
var Vt = null,
  ha = !1,
  ul = !1;
function Mg(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function Ww(e) {
  (ha = !0), Mg(e);
}
function En() {
  if (!ul && Vt !== null) {
    ul = !0;
    var e = 0,
      t = H;
    try {
      var n = Vt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Vt = null), (ha = !1);
    } catch (o) {
      throw (Vt !== null && (Vt = Vt.slice(e + 1)), ng(Ec, En), o);
    } finally {
      (H = t), (ul = !1);
    }
  }
  return null;
}
var Er = [],
  jr = 0,
  Is = null,
  Vs = 0,
  nt = [],
  rt = 0,
  Jn = null,
  zt = 1,
  Ot = "";
function _n(e, t) {
  (Er[jr++] = Vs), (Er[jr++] = Is), (Is = e), (Vs = t);
}
function Ag(e, t, n) {
  (nt[rt++] = zt), (nt[rt++] = Ot), (nt[rt++] = Jn), (Jn = e);
  var r = zt;
  e = Ot;
  var o = 32 - wt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - wt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (zt = (1 << (32 - wt(t) + o)) | (n << o) | r),
      (Ot = i + e);
  } else (zt = (1 << i) | (n << o) | r), (Ot = e);
}
function $c(e) {
  e.return !== null && (_n(e, 1), Ag(e, 1, 0));
}
function Ic(e) {
  for (; e === Is; )
    (Is = Er[--jr]), (Er[jr] = null), (Vs = Er[--jr]), (Er[jr] = null);
  for (; e === Jn; )
    (Jn = nt[--rt]),
      (nt[rt] = null),
      (Ot = nt[--rt]),
      (nt[rt] = null),
      (zt = nt[--rt]),
      (nt[rt] = null);
}
var Ke = null,
  Ye = null,
  q = !1,
  gt = null;
function Dg(e, t) {
  var n = ot(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function op(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ke = e), (Ye = mn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ke = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jn !== null ? { id: zt, overflow: Ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ke = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function bu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cu(e) {
  if (q) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!op(e, t)) {
        if (bu(e)) throw Error(j(418));
        t = mn(n.nextSibling);
        var r = Ke;
        t && op(e, t)
          ? Dg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (Ke = e));
      }
    } else {
      if (bu(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (Ke = e);
    }
  }
}
function ip(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ke = e;
}
function Xi(e) {
  if (e !== Ke) return !1;
  if (!q) return ip(e), (q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vu(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (bu(e)) throw (_g(), Error(j(418)));
    for (; t; ) Dg(e, t), (t = mn(t.nextSibling));
  }
  if ((ip(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = mn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Ke ? mn(e.stateNode.nextSibling) : null;
  return !0;
}
function _g() {
  for (var e = Ye; e; ) e = mn(e.nextSibling);
}
function Yr() {
  (Ye = Ke = null), (q = !1);
}
function Vc(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
var Hw = Xt.ReactCurrentBatchConfig;
function To(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Qi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sp(e) {
  var t = e._init;
  return t(e._payload);
}
function Lg(e) {
  function t(g, m) {
    if (e) {
      var x = g.deletions;
      x === null ? ((g.deletions = [m]), (g.flags |= 16)) : x.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) t(g, m), (m = m.sibling);
    return null;
  }
  function r(g, m) {
    for (g = new Map(); m !== null; )
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
    return g;
  }
  function o(g, m) {
    return (g = xn(g, m)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, m, x) {
    return (
      (g.index = x),
      e
        ? ((x = g.alternate),
          x !== null
            ? ((x = x.index), x < m ? ((g.flags |= 2), m) : x)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, m, x, b) {
    return m === null || m.tag !== 6
      ? ((m = gl(x, g.mode, b)), (m.return = g), m)
      : ((m = o(m, x)), (m.return = g), m);
  }
  function l(g, m, x, b) {
    var C = x.type;
    return C === Sr
      ? c(g, m, x.props.children, b, x.key)
      : m !== null &&
        (m.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === rn &&
            sp(C) === m.type))
      ? ((b = o(m, x.props)), (b.ref = To(g, m, x)), (b.return = g), b)
      : ((b = ws(x.type, x.key, x.props, null, g.mode, b)),
        (b.ref = To(g, m, x)),
        (b.return = g),
        b);
  }
  function u(g, m, x, b) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== x.containerInfo ||
      m.stateNode.implementation !== x.implementation
      ? ((m = yl(x, g.mode, b)), (m.return = g), m)
      : ((m = o(m, x.children || [])), (m.return = g), m);
  }
  function c(g, m, x, b, C) {
    return m === null || m.tag !== 7
      ? ((m = Kn(x, g.mode, b, C)), (m.return = g), m)
      : ((m = o(m, x)), (m.return = g), m);
  }
  function d(g, m, x) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = gl("" + m, g.mode, x)), (m.return = g), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case zi:
          return (
            (x = ws(m.type, m.key, m.props, null, g.mode, x)),
            (x.ref = To(g, null, m)),
            (x.return = g),
            x
          );
        case wr:
          return (m = yl(m, g.mode, x)), (m.return = g), m;
        case rn:
          var b = m._init;
          return d(g, b(m._payload), x);
      }
      if (Ao(m) || xo(m))
        return (m = Kn(m, g.mode, x, null)), (m.return = g), m;
      Qi(g, m);
    }
    return null;
  }
  function f(g, m, x, b) {
    var C = m !== null ? m.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return C !== null ? null : a(g, m, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case zi:
          return x.key === C ? l(g, m, x, b) : null;
        case wr:
          return x.key === C ? u(g, m, x, b) : null;
        case rn:
          return (C = x._init), f(g, m, C(x._payload), b);
      }
      if (Ao(x) || xo(x)) return C !== null ? null : c(g, m, x, b, null);
      Qi(g, x);
    }
    return null;
  }
  function h(g, m, x, b, C) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (g = g.get(x) || null), a(m, g, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case zi:
          return (g = g.get(b.key === null ? x : b.key) || null), l(m, g, b, C);
        case wr:
          return (g = g.get(b.key === null ? x : b.key) || null), u(m, g, b, C);
        case rn:
          var k = b._init;
          return h(g, m, x, k(b._payload), C);
      }
      if (Ao(b) || xo(b)) return (g = g.get(x) || null), c(m, g, b, C, null);
      Qi(m, b);
    }
    return null;
  }
  function v(g, m, x, b) {
    for (
      var C = null, k = null, P = m, T = (m = 0), M = null;
      P !== null && T < x.length;
      T++
    ) {
      P.index > T ? ((M = P), (P = null)) : (M = P.sibling);
      var N = f(g, P, x[T], b);
      if (N === null) {
        P === null && (P = M);
        break;
      }
      e && P && N.alternate === null && t(g, P),
        (m = i(N, m, T)),
        k === null ? (C = N) : (k.sibling = N),
        (k = N),
        (P = M);
    }
    if (T === x.length) return n(g, P), q && _n(g, T), C;
    if (P === null) {
      for (; T < x.length; T++)
        (P = d(g, x[T], b)),
          P !== null &&
            ((m = i(P, m, T)), k === null ? (C = P) : (k.sibling = P), (k = P));
      return q && _n(g, T), C;
    }
    for (P = r(g, P); T < x.length; T++)
      (M = h(P, g, T, x[T], b)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? T : M.key),
          (m = i(M, m, T)),
          k === null ? (C = M) : (k.sibling = M),
          (k = M));
    return (
      e &&
        P.forEach(function (W) {
          return t(g, W);
        }),
      q && _n(g, T),
      C
    );
  }
  function y(g, m, x, b) {
    var C = xo(x);
    if (typeof C != "function") throw Error(j(150));
    if (((x = C.call(x)), x == null)) throw Error(j(151));
    for (
      var k = (C = null), P = m, T = (m = 0), M = null, N = x.next();
      P !== null && !N.done;
      T++, N = x.next()
    ) {
      P.index > T ? ((M = P), (P = null)) : (M = P.sibling);
      var W = f(g, P, N.value, b);
      if (W === null) {
        P === null && (P = M);
        break;
      }
      e && P && W.alternate === null && t(g, P),
        (m = i(W, m, T)),
        k === null ? (C = W) : (k.sibling = W),
        (k = W),
        (P = M);
    }
    if (N.done) return n(g, P), q && _n(g, T), C;
    if (P === null) {
      for (; !N.done; T++, N = x.next())
        (N = d(g, N.value, b)),
          N !== null &&
            ((m = i(N, m, T)), k === null ? (C = N) : (k.sibling = N), (k = N));
      return q && _n(g, T), C;
    }
    for (P = r(g, P); !N.done; T++, N = x.next())
      (N = h(P, g, T, N.value, b)),
        N !== null &&
          (e && N.alternate !== null && P.delete(N.key === null ? T : N.key),
          (m = i(N, m, T)),
          k === null ? (C = N) : (k.sibling = N),
          (k = N));
    return (
      e &&
        P.forEach(function (G) {
          return t(g, G);
        }),
      q && _n(g, T),
      C
    );
  }
  function S(g, m, x, b) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Sr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case zi:
          e: {
            for (var C = x.key, k = m; k !== null; ) {
              if (k.key === C) {
                if (((C = x.type), C === Sr)) {
                  if (k.tag === 7) {
                    n(g, k.sibling),
                      (m = o(k, x.props.children)),
                      (m.return = g),
                      (g = m);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === rn &&
                    sp(C) === k.type)
                ) {
                  n(g, k.sibling),
                    (m = o(k, x.props)),
                    (m.ref = To(g, k, x)),
                    (m.return = g),
                    (g = m);
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            x.type === Sr
              ? ((m = Kn(x.props.children, g.mode, b, x.key)),
                (m.return = g),
                (g = m))
              : ((b = ws(x.type, x.key, x.props, null, g.mode, b)),
                (b.ref = To(g, m, x)),
                (b.return = g),
                (g = b));
          }
          return s(g);
        case wr:
          e: {
            for (k = x.key; m !== null; ) {
              if (m.key === k)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === x.containerInfo &&
                  m.stateNode.implementation === x.implementation
                ) {
                  n(g, m.sibling),
                    (m = o(m, x.children || [])),
                    (m.return = g),
                    (g = m);
                  break e;
                } else {
                  n(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            (m = yl(x, g.mode, b)), (m.return = g), (g = m);
          }
          return s(g);
        case rn:
          return (k = x._init), S(g, m, k(x._payload), b);
      }
      if (Ao(x)) return v(g, m, x, b);
      if (xo(x)) return y(g, m, x, b);
      Qi(g, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = o(m, x)), (m.return = g), (g = m))
          : (n(g, m), (m = gl(x, g.mode, b)), (m.return = g), (g = m)),
        s(g))
      : n(g, m);
  }
  return S;
}
var Kr = Lg(!0),
  $g = Lg(!1),
  zs = kn(null),
  Os = null,
  Rr = null,
  zc = null;
function Oc() {
  zc = Rr = Os = null;
}
function Fc(e) {
  var t = zs.current;
  Q(zs), (e._currentValue = t);
}
function Tu(e, t, n) {
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
function Br(e, t) {
  (Os = e),
    (zc = Rr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Oe = !0), (e.firstContext = null));
}
function st(e) {
  var t = e._currentValue;
  if (zc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rr === null)) {
      if (Os === null) throw Error(j(308));
      (Rr = e), (Os.dependencies = { lanes: 0, firstContext: e });
    } else Rr = Rr.next = e;
  return t;
}
var Bn = null;
function Bc(e) {
  Bn === null ? (Bn = [e]) : Bn.push(e);
}
function Ig(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Bc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Gt(e, r)
  );
}
function Gt(e, t) {
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
var on = !1;
function Uc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Vg(e, t) {
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
function Ft(e, t) {
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
  if (((r = r.shared), F & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Gt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Bc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Gt(e, n)
  );
}
function hs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jc(e, n);
  }
}
function ap(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
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
function Fs(e, t, n, r) {
  var o = e.updateQueue;
  on = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((f = t), (h = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                d = v.call(h, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (f = typeof v == "function" ? v.call(h, d, f) : v),
                f == null)
              )
                break e;
              d = re({}, d, f);
              break e;
            case 2:
              on = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (tr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function lp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(j(191, o));
        o.call(r);
      }
    }
}
var Ei = {},
  Mt = kn(Ei),
  ci = kn(Ei),
  di = kn(Ei);
function Un(e) {
  if (e === Ei) throw Error(j(174));
  return e;
}
function Wc(e, t) {
  switch ((K(di, t), K(ci, e), K(Mt, Ei), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ou(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ou(t, e));
  }
  Q(Mt), K(Mt, t);
}
function Xr() {
  Q(Mt), Q(ci), Q(di);
}
function zg(e) {
  Un(di.current);
  var t = Un(Mt.current),
    n = ou(t, e.type);
  t !== n && (K(ci, e), K(Mt, n));
}
function Hc(e) {
  ci.current === e && (Q(Mt), Q(ci));
}
var ee = kn(0);
function Bs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var cl = [];
function Gc() {
  for (var e = 0; e < cl.length; e++)
    cl[e]._workInProgressVersionPrimary = null;
  cl.length = 0;
}
var ms = Xt.ReactCurrentDispatcher,
  dl = Xt.ReactCurrentBatchConfig,
  er = 0,
  ne = null,
  pe = null,
  ye = null,
  Us = !1,
  Ho = !1,
  fi = 0,
  Gw = 0;
function Pe() {
  throw Error(j(321));
}
function Yc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!bt(e[n], t[n])) return !1;
  return !0;
}
function Kc(e, t, n, r, o, i) {
  if (
    ((er = i),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ms.current = e === null || e.memoizedState === null ? Qw : Zw),
    (e = n(r, o)),
    Ho)
  ) {
    i = 0;
    do {
      if (((Ho = !1), (fi = 0), 25 <= i)) throw Error(j(301));
      (i += 1),
        (ye = pe = null),
        (t.updateQueue = null),
        (ms.current = qw),
        (e = n(r, o));
    } while (Ho);
  }
  if (
    ((ms.current = Ws),
    (t = pe !== null && pe.next !== null),
    (er = 0),
    (ye = pe = ne = null),
    (Us = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Xc() {
  var e = fi !== 0;
  return (fi = 0), e;
}
function Pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ye === null ? (ne.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function at() {
  if (pe === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = ye === null ? ne.memoizedState : ye.next;
  if (t !== null) (ye = t), (pe = e);
  else {
    if (e === null) throw Error(j(310));
    (pe = e),
      (e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null,
      }),
      ye === null ? (ne.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function pi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fl(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = pe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((er & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (ne.lanes |= c),
          (tr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      bt(r, t.memoizedState) || (Oe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ne.lanes |= i), (tr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pl(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    bt(i, t.memoizedState) || (Oe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Og() {}
function Fg(e, t) {
  var n = ne,
    r = at(),
    o = t(),
    i = !bt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Oe = !0)),
    (r = r.queue),
    Qc(Wg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      hi(9, Ug.bind(null, n, r, o, t), void 0, null),
      ve === null)
    )
      throw Error(j(349));
    er & 30 || Bg(n, t, o);
  }
  return o;
}
function Bg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ug(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Hg(t) && Gg(e);
}
function Wg(e, t, n) {
  return n(function () {
    Hg(t) && Gg(e);
  });
}
function Hg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function Gg(e) {
  var t = Gt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function up(e) {
  var t = Pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xw.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function hi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Yg() {
  return at().memoizedState;
}
function gs(e, t, n, r) {
  var o = Pt();
  (ne.flags |= e),
    (o.memoizedState = hi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ma(e, t, n, r) {
  var o = at();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (pe !== null) {
    var s = pe.memoizedState;
    if (((i = s.destroy), r !== null && Yc(r, s.deps))) {
      o.memoizedState = hi(t, n, i, r);
      return;
    }
  }
  (ne.flags |= e), (o.memoizedState = hi(1 | t, n, i, r));
}
function cp(e, t) {
  return gs(8390656, 8, e, t);
}
function Qc(e, t) {
  return ma(2048, 8, e, t);
}
function Kg(e, t) {
  return ma(4, 2, e, t);
}
function Xg(e, t) {
  return ma(4, 4, e, t);
}
function Qg(e, t) {
  if (typeof t == "function")
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
function Zg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ma(4, 4, Qg.bind(null, t, e), n)
  );
}
function Zc() {}
function qg(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jg(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ey(e, t, n) {
  return er & 21
    ? (bt(n, t) || ((n = ig()), (ne.lanes |= n), (tr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n));
}
function Yw(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = dl.transition;
  dl.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (dl.transition = r);
  }
}
function ty() {
  return at().memoizedState;
}
function Kw(e, t, n) {
  var r = vn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ny(e))
  )
    ry(t, n);
  else if (((n = Ig(e, t, n, r)), n !== null)) {
    var o = Le();
    St(n, e, r, o), oy(n, t, r);
  }
}
function Xw(e, t, n) {
  var r = vn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ny(e)) ry(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), bt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Bc(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ig(e, t, o, r)),
      n !== null && ((o = Le()), St(n, e, r, o), oy(n, t, r));
  }
}
function ny(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function ry(e, t) {
  Ho = Us = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function oy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jc(e, n);
  }
}
var Ws = {
    readContext: st,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  Qw = {
    readContext: st,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: st,
    useEffect: cp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        gs(4194308, 4, Qg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return gs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return gs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pt();
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
        (e = e.dispatch = Kw.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: up,
    useDebugValue: Zc,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = up(!1),
        t = e[0];
      return (e = Yw.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        o = Pt();
      if (q) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), ve === null)) throw Error(j(349));
        er & 30 || Bg(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        cp(Wg.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        hi(9, Ug.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = ve.identifierPrefix;
      if (q) {
        var n = Ot,
          r = zt;
        (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = fi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Gw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zw = {
    readContext: st,
    useCallback: qg,
    useContext: st,
    useEffect: Qc,
    useImperativeHandle: Zg,
    useInsertionEffect: Kg,
    useLayoutEffect: Xg,
    useMemo: Jg,
    useReducer: fl,
    useRef: Yg,
    useState: function () {
      return fl(pi);
    },
    useDebugValue: Zc,
    useDeferredValue: function (e) {
      var t = at();
      return ey(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = fl(pi)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: Og,
    useSyncExternalStore: Fg,
    useId: ty,
    unstable_isNewReconciler: !1,
  },
  qw = {
    readContext: st,
    useCallback: qg,
    useContext: st,
    useEffect: Qc,
    useImperativeHandle: Zg,
    useInsertionEffect: Kg,
    useLayoutEffect: Xg,
    useMemo: Jg,
    useReducer: pl,
    useRef: Yg,
    useState: function () {
      return pl(pi);
    },
    useDebugValue: Zc,
    useDeferredValue: function (e) {
      var t = at();
      return pe === null ? (t.memoizedState = e) : ey(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = pl(pi)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: Og,
    useSyncExternalStore: Fg,
    useId: ty,
    unstable_isNewReconciler: !1,
  };
function pt(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ga = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ir(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = vn(e),
      i = Ft(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = gn(e, i, o)),
      t !== null && (St(t, e, o, r), hs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = vn(e),
      i = Ft(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = gn(e, i, o)),
      t !== null && (St(t, e, o, r), hs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Le(),
      r = vn(e),
      o = Ft(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = gn(e, o, r)),
      t !== null && (St(t, e, r, n), hs(t, e, r));
  },
};
function dp(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !si(n, r) || !si(o, i)
      : !0
  );
}
function iy(e, t, n) {
  var r = !1,
    o = Sn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = st(i))
      : ((o = Be(t) ? qn : Ae.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Gr(e, o) : Sn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ga),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function fp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ga.enqueueReplaceState(t, t.state, null);
}
function ku(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Uc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = st(i))
    : ((i = Be(t) ? qn : Ae.current), (o.context = Gr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Pu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ga.enqueueReplaceState(o, o.state, null),
      Fs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += kx(r)), (r = r.return);
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
function hl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Eu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jw = typeof WeakMap == "function" ? WeakMap : Map;
function sy(e, t, n) {
  (n = Ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Gs || ((Gs = !0), (Iu = r)), Eu(e, t);
    }),
    n
  );
}
function ay(e, t, n) {
  (n = Ft(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Eu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Eu(e, t),
          typeof r != "function" &&
            (yn === null ? (yn = new Set([this])) : yn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function pp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jw();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = pS.bind(null, e, t, n)), t.then(e, e));
}
function hp(e) {
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
function mp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ft(-1, 1)), (t.tag = 2), gn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var eS = Xt.ReactCurrentOwner,
  Oe = !1;
function _e(e, t, n, r) {
  t.child = e === null ? $g(t, null, n, r) : Kr(t, e.child, n, r);
}
function gp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Br(t, o),
    (r = Kc(e, t, n, r, i, o)),
    (n = Xc()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Yt(e, t, o))
      : (q && n && $c(t), (t.flags |= 1), _e(e, t, r, o), t.child)
  );
}
function yp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !id(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ly(e, t, i, r, o))
      : ((e = ws(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : si), n(s, r) && e.ref === t.ref)
    )
      return Yt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = xn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ly(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (si(i, r) && e.ref === t.ref)
      if (((Oe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Oe = !0);
      else return (t.lanes = e.lanes), Yt(e, t, o);
  }
  return ju(e, t, n, r, o);
}
function uy(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(Mr, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(Mr, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        K(Mr, Ge),
        (Ge |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(Mr, Ge),
      (Ge |= r);
  return _e(e, t, o, n), t.child;
}
function cy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ju(e, t, n, r, o) {
  var i = Be(n) ? qn : Ae.current;
  return (
    (i = Gr(t, i)),
    Br(t, o),
    (n = Kc(e, t, n, r, i, o)),
    (r = Xc()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Yt(e, t, o))
      : (q && r && $c(t), (t.flags |= 1), _e(e, t, n, o), t.child)
  );
}
function vp(e, t, n, r, o) {
  if (Be(n)) {
    var i = !0;
    $s(t);
  } else i = !1;
  if ((Br(t, o), t.stateNode === null))
    ys(e, t), iy(t, n, r), ku(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = st(u))
      : ((u = Be(n) ? qn : Ae.current), (u = Gr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && fp(t, s, r, u)),
      (on = !1);
    var f = t.memoizedState;
    (s.state = f),
      Fs(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || Fe.current || on
        ? (typeof c == "function" && (Pu(t, n, c, r), (l = t.memoizedState)),
          (a = on || dp(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Vg(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : pt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = st(l))
        : ((l = Be(n) ? qn : Ae.current), (l = Gr(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && fp(t, s, r, l)),
      (on = !1),
      (f = t.memoizedState),
      (s.state = f),
      Fs(t, r, s, o);
    var v = t.memoizedState;
    a !== d || f !== v || Fe.current || on
      ? (typeof h == "function" && (Pu(t, n, h, r), (v = t.memoizedState)),
        (u = on || dp(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ru(e, t, n, r, i, o);
}
function Ru(e, t, n, r, o, i) {
  cy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && rp(t, n, !1), Yt(e, t, i);
  (r = t.stateNode), (eS.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Kr(t, e.child, null, i)), (t.child = Kr(t, null, a, i)))
      : _e(e, t, a, i),
    (t.memoizedState = r.state),
    o && rp(t, n, !0),
    t.child
  );
}
function dy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? np(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && np(e, t.context, !1),
    Wc(e, t.containerInfo);
}
function xp(e, t, n, r, o) {
  return Yr(), Vc(o), (t.flags |= 256), _e(e, t, n, r), t.child;
}
var Nu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fy(e, t, n) {
  var r = t.pendingProps,
    o = ee.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    K(ee, o & 1),
    e === null)
  )
    return (
      Cu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = xa(s, r, 0, null)),
              (e = Kn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Mu(n)),
              (t.memoizedState = Nu),
              e)
            : qc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return tS(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = xn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = xn(a, i)) : ((i = Kn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Mu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Nu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = xn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
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
function qc(e, t) {
  return (
    (t = xa({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zi(e, t, n, r) {
  return (
    r !== null && Vc(r),
    Kr(t, e.child, null, n),
    (e = qc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = hl(Error(j(422)))), Zi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = xa({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Kn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Kr(t, e.child, null, s),
        (t.child.memoizedState = Mu(s)),
        (t.memoizedState = Nu),
        i);
  if (!(t.mode & 1)) return Zi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(j(419))), (r = hl(i, r, void 0)), Zi(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Oe || a)) {
    if (((r = ve), r !== null)) {
      switch (s & -s) {
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
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Gt(e, o), St(r, e, o, -1));
    }
    return od(), (r = hl(Error(j(421)))), Zi(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = hS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ye = mn(o.nextSibling)),
      (Ke = t),
      (q = !0),
      (gt = null),
      e !== null &&
        ((nt[rt++] = zt),
        (nt[rt++] = Ot),
        (nt[rt++] = Jn),
        (zt = e.id),
        (Ot = e.overflow),
        (Jn = t)),
      (t = qc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function wp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Tu(e.return, t, n);
}
function ml(e, t, n, r, o) {
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
function py(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((_e(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && wp(e, n, t);
        else if (e.tag === 19) wp(e, n, t);
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
  if ((K(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Bs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ml(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Bs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ml(t, !0, n, null, i);
        break;
      case "together":
        ml(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ys(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (tr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function nS(e, t, n) {
  switch (t.tag) {
    case 3:
      dy(t), Yr();
      break;
    case 5:
      zg(t);
      break;
    case 1:
      Be(t.type) && $s(t);
      break;
    case 4:
      Wc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      K(zs, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fy(e, t, n)
          : (K(ee, ee.current & 1),
            (e = Yt(e, t, n)),
            e !== null ? e.sibling : null);
      K(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return py(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        K(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), uy(e, t, n);
  }
  return Yt(e, t, n);
}
var hy, Au, my, gy;
hy = function (e, t) {
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
Au = function () {};
my = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Un(Mt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = eu(e, o)), (r = eu(e, r)), (i = []);
        break;
      case "select":
        (o = re({}, o, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ru(e, o)), (r = ru(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = _s);
    }
    iu(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Jo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Jo.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && X("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
gy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Po(e, t) {
  if (!q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
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
function ke(e) {
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
function rS(e, t, n) {
  var r = t.pendingProps;
  switch ((Ic(t), t.tag)) {
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
      return ke(t), null;
    case 1:
      return Be(t.type) && Ls(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Xr(),
        Q(Fe),
        Q(Ae),
        Gc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), gt !== null && (Ou(gt), (gt = null)))),
        Au(e, t),
        ke(t),
        null
      );
    case 5:
      Hc(t);
      var o = Un(di.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        my(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return ke(t), null;
        }
        if (((e = Un(Mt.current)), Xi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Et] = t), (r[ui] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < _o.length; o++) X(_o[o], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              Rf(r, i), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              Mf(r, i), X("invalid", r);
          }
          iu(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ki(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ki(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Jo.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              Oi(r), Nf(r, i, !0);
              break;
            case "textarea":
              Oi(r), Af(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = _s);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Wm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Et] = t),
            (e[ui] = r),
            hy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = su(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < _o.length; o++) X(_o[o], e);
                o = r;
                break;
              case "source":
                X("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (o = r);
                break;
              case "details":
                X("toggle", e), (o = r);
                break;
              case "input":
                Rf(e, r), (o = eu(e, r)), X("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = re({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                Mf(e, r), (o = ru(e, r)), X("invalid", e);
                break;
              default:
                o = r;
            }
            iu(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Ym(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Hm(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ei(e, l)
                    : typeof l == "number" && ei(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Jo.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && X("scroll", e)
                      : l != null && bc(e, i, l, s));
              }
            switch (n) {
              case "input":
                Oi(e), Nf(e, r, !1);
                break;
              case "textarea":
                Oi(e), Af(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Vr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Vr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = _s);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
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
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) gy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Un(di.current)), Un(Mt.current), Xi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Et] = t),
            (i = r.nodeValue !== n) && ((e = Ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ki(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ki(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Et] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (Q(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && Ye !== null && t.mode & 1 && !(t.flags & 128))
          _g(), Yr(), (t.flags |= 98560), (i = !1);
        else if (((i = Xi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(j(317));
            i[Et] = t;
          } else
            Yr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (i = !1);
        } else gt !== null && (Ou(gt), (gt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? he === 0 && (he = 3) : od())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        Xr(), Au(e, t), e === null && ai(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return Fc(t.type._context), ke(t), null;
    case 17:
      return Be(t.type) && Ls(), ke(t), null;
    case 19:
      if ((Q(ee), (i = t.memoizedState), i === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Po(i, !1);
        else {
          if (he !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Bs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Po(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return K(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            le() > Zr &&
            ((t.flags |= 128), (r = !0), Po(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Po(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !q)
            )
              return ke(t), null;
          } else
            2 * le() - i.renderingStartTime > Zr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Po(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = le()),
          (t.sibling = null),
          (n = ee.current),
          K(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        rd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function oS(e, t) {
  switch ((Ic(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && Ls(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Xr(),
        Q(Fe),
        Q(Ae),
        Gc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Hc(t), null;
    case 13:
      if ((Q(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(j(340));
        Yr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Q(ee), null;
    case 4:
      return Xr(), null;
    case 10:
      return Fc(t.type._context), null;
    case 22:
    case 23:
      return rd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qi = !1,
  Re = !1,
  iS = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function Nr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function Du(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Sp = !1;
function sS(e, t) {
  if (((gu = Ms), (e = Sg()), Lc(e))) {
    if ("selectionStart" in e)
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
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++c === r && (l = s),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yu = { focusedElem: e, selectionRange: n }, Ms = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    S = v.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : pt(t.type, y),
                      S
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (b) {
          ie(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (v = Sp), (Sp = !1), v;
}
function Go(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Du(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ya(e, t) {
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
function _u(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function yy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Et], delete t[ui], delete t[wu], delete t[Bw], delete t[Uw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vy(e.return)) return null;
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
function Lu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = _s));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lu(e, t, n), e = e.sibling; e !== null; ) Lu(e, t, n), (e = e.sibling);
}
function $u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($u(e, t, n), e = e.sibling; e !== null; ) $u(e, t, n), (e = e.sibling);
}
var we = null,
  mt = !1;
function en(e, t, n) {
  for (n = n.child; n !== null; ) xy(e, t, n), (n = n.sibling);
}
function xy(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(ua, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || Nr(n, t);
    case 6:
      var r = we,
        o = mt;
      (we = null),
        en(e, t, n),
        (we = r),
        (mt = o),
        we !== null &&
          (mt
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null &&
        (mt
          ? ((e = we),
            (n = n.stateNode),
            e.nodeType === 8
              ? ll(e.parentNode, n)
              : e.nodeType === 1 && ll(e, n),
            oi(e))
          : ll(we, n.stateNode));
      break;
    case 4:
      (r = we),
        (o = mt),
        (we = n.stateNode.containerInfo),
        (mt = !0),
        en(e, t, n),
        (we = r),
        (mt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Du(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      en(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (Nr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ie(n, t, a);
        }
      en(e, t, n);
      break;
    case 21:
      en(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), en(e, t, n), (Re = r))
        : en(e, t, n);
      break;
    default:
      en(e, t, n);
  }
}
function Cp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new iS()),
      t.forEach(function (r) {
        var o = mS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (we = a.stateNode), (mt = !1);
              break e;
            case 3:
              (we = a.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (we = a.stateNode.containerInfo), (mt = !0);
              break e;
          }
          a = a.return;
        }
        if (we === null) throw Error(j(160));
        xy(i, s, o), (we = null), (mt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        ie(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) wy(t, e), (t = t.sibling);
}
function wy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dt(t, e), Tt(e), r & 4)) {
        try {
          Go(3, e, e.return), ya(3, e);
        } catch (y) {
          ie(e, e.return, y);
        }
        try {
          Go(5, e, e.return);
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      break;
    case 1:
      dt(t, e), Tt(e), r & 512 && n !== null && Nr(n, n.return);
      break;
    case 5:
      if (
        (dt(t, e),
        Tt(e),
        r & 512 && n !== null && Nr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ei(o, "");
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Bm(o, i),
              su(a, s);
            var u = su(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? Ym(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Hm(o, d)
                : c === "children"
                ? ei(o, d)
                : bc(o, c, d, u);
            }
            switch (a) {
              case "input":
                tu(o, i);
                break;
              case "textarea":
                Um(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Vr(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Vr(o, !!i.multiple, i.defaultValue, !0)
                      : Vr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ui] = i;
          } catch (y) {
            ie(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((dt(t, e), Tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (dt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          oi(t.containerInfo);
        } catch (y) {
          ie(e, e.return, y);
        }
      break;
    case 4:
      dt(t, e), Tt(e);
      break;
    case 13:
      dt(t, e),
        Tt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (td = le())),
        r & 4 && Cp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (u = Re) || c), dt(t, e), (Re = u)) : dt(t, e),
        Tt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (d = A = c; A !== null; ) {
              switch (((f = A), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Go(4, f, f.return);
                  break;
                case 1:
                  Nr(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      ie(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Nr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Pp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (A = h)) : Pp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Gm("display", s)));
              } catch (y) {
                ie(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                ie(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      dt(t, e), Tt(e), r & 4 && Cp(e);
      break;
    case 21:
      break;
    default:
      dt(t, e), Tt(e);
  }
}
function Tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ei(o, ""), (r.flags &= -33));
          var i = bp(e);
          $u(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = bp(e);
          Lu(e, a, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      ie(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function aS(e, t, n) {
  (A = e), Sy(e);
}
function Sy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var o = A,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || qi;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Re;
        a = qi;
        var u = Re;
        if (((qi = s), (Re = l) && !u))
          for (A = o; A !== null; )
            (s = A),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? kp(o)
                : l !== null
                ? ((l.return = s), (A = l))
                : kp(o);
        for (; i !== null; ) (A = i), Sy(i), (i = i.sibling);
        (A = o), (qi = a), (Re = u);
      }
      Tp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (A = i)) : Tp(e);
  }
}
function Tp(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || ya(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && lp(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                lp(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && oi(d);
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
              throw Error(j(163));
          }
        Re || (t.flags & 512 && _u(t));
      } catch (f) {
        ie(t, t.return, f);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Pp(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function kp(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ya(4, t);
          } catch (l) {
            ie(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ie(t, o, l);
            }
          }
          var i = t.return;
          try {
            _u(t);
          } catch (l) {
            ie(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            _u(t);
          } catch (l) {
            ie(t, s, l);
          }
      }
    } catch (l) {
      ie(t, t.return, l);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var lS = Math.ceil,
  Hs = Xt.ReactCurrentDispatcher,
  Jc = Xt.ReactCurrentOwner,
  it = Xt.ReactCurrentBatchConfig,
  F = 0,
  ve = null,
  de = null,
  be = 0,
  Ge = 0,
  Mr = kn(0),
  he = 0,
  mi = null,
  tr = 0,
  va = 0,
  ed = 0,
  Yo = null,
  ze = null,
  td = 0,
  Zr = 1 / 0,
  $t = null,
  Gs = !1,
  Iu = null,
  yn = null,
  Ji = !1,
  dn = null,
  Ys = 0,
  Ko = 0,
  Vu = null,
  vs = -1,
  xs = 0;
function Le() {
  return F & 6 ? le() : vs !== -1 ? vs : (vs = le());
}
function vn(e) {
  return e.mode & 1
    ? F & 2 && be !== 0
      ? be & -be
      : Hw.transition !== null
      ? (xs === 0 && (xs = ig()), xs)
      : ((e = H),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fg(e.type))),
        e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < Ko) throw ((Ko = 0), (Vu = null), Error(j(185)));
  Ti(e, n, r),
    (!(F & 2) || e !== ve) &&
      (e === ve && (!(F & 2) && (va |= n), he === 4 && ln(e, be)),
      Ue(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Zr = le() + 500), ha && En()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  Hx(e, t);
  var r = Ns(e, e === ve ? be : 0);
  if (r === 0)
    n !== null && Lf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Lf(n), t === 1))
      e.tag === 0 ? Ww(Ep.bind(null, e)) : Mg(Ep.bind(null, e)),
        Ow(function () {
          !(F & 6) && En();
        }),
        (n = null);
    else {
      switch (sg(r)) {
        case 1:
          n = Ec;
          break;
        case 4:
          n = rg;
          break;
        case 16:
          n = Rs;
          break;
        case 536870912:
          n = og;
          break;
        default:
          n = Rs;
      }
      n = Ry(n, by.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function by(e, t) {
  if (((vs = -1), (xs = 0), F & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Ur() && e.callbackNode !== n) return null;
  var r = Ns(e, e === ve ? be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ks(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var i = Ty();
    (ve !== e || be !== t) && (($t = null), (Zr = le() + 500), Yn(e, t));
    do
      try {
        dS();
        break;
      } catch (a) {
        Cy(e, a);
      }
    while (!0);
    Oc(),
      (Hs.current = i),
      (F = o),
      de !== null ? (t = 0) : ((ve = null), (be = 0), (t = he));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = du(e)), o !== 0 && ((r = o), (t = zu(e, o)))), t === 1)
    )
      throw ((n = mi), Yn(e, 0), ln(e, r), Ue(e, le()), n);
    if (t === 6) ln(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !uS(o) &&
          ((t = Ks(e, r)),
          t === 2 && ((i = du(e)), i !== 0 && ((r = i), (t = zu(e, i)))),
          t === 1))
      )
        throw ((n = mi), Yn(e, 0), ln(e, r), Ue(e, le()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Ln(e, ze, $t);
          break;
        case 3:
          if (
            (ln(e, r), (r & 130023424) === r && ((t = td + 500 - le()), 10 < t))
          ) {
            if (Ns(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = xu(Ln.bind(null, e, ze, $t), t);
            break;
          }
          Ln(e, ze, $t);
          break;
        case 4:
          if ((ln(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - wt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = le() - r),
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
                : 1960 * lS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xu(Ln.bind(null, e, ze, $t), r);
            break;
          }
          Ln(e, ze, $t);
          break;
        case 5:
          Ln(e, ze, $t);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Ue(e, le()), e.callbackNode === n ? by.bind(null, e) : null;
}
function zu(e, t) {
  var n = Yo;
  return (
    e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256),
    (e = Ks(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && Ou(t)),
    e
  );
}
function Ou(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function uS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!bt(i(), o)) return !1;
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
function ln(e, t) {
  for (
    t &= ~ed,
      t &= ~va,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - wt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ep(e) {
  if (F & 6) throw Error(j(327));
  Ur();
  var t = Ns(e, 0);
  if (!(t & 1)) return Ue(e, le()), null;
  var n = Ks(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = du(e);
    r !== 0 && ((t = r), (n = zu(e, r)));
  }
  if (n === 1) throw ((n = mi), Yn(e, 0), ln(e, t), Ue(e, le()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ln(e, ze, $t),
    Ue(e, le()),
    null
  );
}
function nd(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Zr = le() + 500), ha && En());
  }
}
function nr(e) {
  dn !== null && dn.tag === 0 && !(F & 6) && Ur();
  var t = F;
  F |= 1;
  var n = it.transition,
    r = H;
  try {
    if (((it.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (it.transition = n), (F = t), !(F & 6) && En();
  }
}
function rd() {
  (Ge = Mr.current), Q(Mr);
}
function Yn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), zw(n)), de !== null))
    for (n = de.return; n !== null; ) {
      var r = n;
      switch ((Ic(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ls();
          break;
        case 3:
          Xr(), Q(Fe), Q(Ae), Gc();
          break;
        case 5:
          Hc(r);
          break;
        case 4:
          Xr();
          break;
        case 13:
          Q(ee);
          break;
        case 19:
          Q(ee);
          break;
        case 10:
          Fc(r.type._context);
          break;
        case 22:
        case 23:
          rd();
      }
      n = n.return;
    }
  if (
    ((ve = e),
    (de = e = xn(e.current, null)),
    (be = Ge = t),
    (he = 0),
    (mi = null),
    (ed = va = tr = 0),
    (ze = Yo = null),
    Bn !== null)
  ) {
    for (t = 0; t < Bn.length; t++)
      if (((n = Bn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Bn = null;
  }
  return e;
}
function Cy(e, t) {
  do {
    var n = de;
    try {
      if ((Oc(), (ms.current = Ws), Us)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Us = !1;
      }
      if (
        ((er = 0),
        (ye = pe = ne = null),
        (Ho = !1),
        (fi = 0),
        (Jc.current = null),
        n === null || n.return === null)
      ) {
        (he = 1), (mi = t), (de = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = be),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = hp(s);
          if (h !== null) {
            (h.flags &= -257),
              mp(h, s, a, i, t),
              h.mode & 1 && pp(i, u, t),
              (t = h),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              pp(i, u, t), od();
              break e;
            }
            l = Error(j(426));
          }
        } else if (q && a.mode & 1) {
          var S = hp(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              mp(S, s, a, i, t),
              Vc(Qr(l, a));
            break e;
          }
        }
        (i = l = Qr(l, a)),
          he !== 4 && (he = 2),
          Yo === null ? (Yo = [i]) : Yo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = sy(i, l, t);
              ap(i, g);
              break e;
            case 1:
              a = l;
              var m = i.type,
                x = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (yn === null || !yn.has(x))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = ay(i, a, t);
                ap(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ky(n);
    } catch (C) {
      (t = C), de === n && n !== null && (de = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ty() {
  var e = Hs.current;
  return (Hs.current = Ws), e === null ? Ws : e;
}
function od() {
  (he === 0 || he === 3 || he === 2) && (he = 4),
    ve === null || (!(tr & 268435455) && !(va & 268435455)) || ln(ve, be);
}
function Ks(e, t) {
  var n = F;
  F |= 2;
  var r = Ty();
  (ve !== e || be !== t) && (($t = null), Yn(e, t));
  do
    try {
      cS();
      break;
    } catch (o) {
      Cy(e, o);
    }
  while (!0);
  if ((Oc(), (F = n), (Hs.current = r), de !== null)) throw Error(j(261));
  return (ve = null), (be = 0), he;
}
function cS() {
  for (; de !== null; ) Py(de);
}
function dS() {
  for (; de !== null && !$x(); ) Py(de);
}
function Py(e) {
  var t = jy(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? ky(e) : (de = t),
    (Jc.current = null);
}
function ky(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = oS(n, t)), n !== null)) {
        (n.flags &= 32767), (de = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (he = 6), (de = null);
        return;
      }
    } else if (((n = rS(n, t, Ge)), n !== null)) {
      de = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      de = t;
      return;
    }
    de = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function Ln(e, t, n) {
  var r = H,
    o = it.transition;
  try {
    (it.transition = null), (H = 1), fS(e, t, n, r);
  } finally {
    (it.transition = o), (H = r);
  }
  return null;
}
function fS(e, t, n, r) {
  do Ur();
  while (dn !== null);
  if (F & 6) throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Gx(e, i),
    e === ve && ((de = ve = null), (be = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ji ||
      ((Ji = !0),
      Ry(Rs, function () {
        return Ur(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = it.transition), (it.transition = null);
    var s = H;
    H = 1;
    var a = F;
    (F |= 4),
      (Jc.current = null),
      sS(e, n),
      wy(n, e),
      Aw(yu),
      (Ms = !!gu),
      (yu = gu = null),
      (e.current = n),
      aS(n),
      Ix(),
      (F = a),
      (H = s),
      (it.transition = i);
  } else e.current = n;
  if (
    (Ji && ((Ji = !1), (dn = e), (Ys = o)),
    (i = e.pendingLanes),
    i === 0 && (yn = null),
    Ox(n.stateNode),
    Ue(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Gs) throw ((Gs = !1), (e = Iu), (Iu = null), e);
  return (
    Ys & 1 && e.tag !== 0 && Ur(),
    (i = e.pendingLanes),
    i & 1 ? (e === Vu ? Ko++ : ((Ko = 0), (Vu = e))) : (Ko = 0),
    En(),
    null
  );
}
function Ur() {
  if (dn !== null) {
    var e = sg(Ys),
      t = it.transition,
      n = H;
    try {
      if (((it.transition = null), (H = 16 > e ? 16 : e), dn === null))
        var r = !1;
      else {
        if (((e = dn), (dn = null), (Ys = 0), F & 6)) throw Error(j(331));
        var o = F;
        for (F |= 4, A = e.current; A !== null; ) {
          var i = A,
            s = i.child;
          if (A.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (A = d);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var f = c.sibling,
                        h = c.return;
                      if ((yy(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (A = f);
                        break;
                      }
                      A = h;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (A = s);
          else
            e: for (; A !== null; ) {
              if (((i = A), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Go(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (A = g);
                break e;
              }
              A = i.return;
            }
        }
        var m = e.current;
        for (A = m; A !== null; ) {
          s = A;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) (x.return = s), (A = x);
          else
            e: for (s = m; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ya(9, a);
                  }
                } catch (C) {
                  ie(a, a.return, C);
                }
              if (a === s) {
                A = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (A = b);
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((F = o), En(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(ua, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (it.transition = t);
    }
  }
  return !1;
}
function jp(e, t, n) {
  (t = Qr(n, t)),
    (t = sy(e, t, 1)),
    (e = gn(e, t, 1)),
    (t = Le()),
    e !== null && (Ti(e, 1, t), Ue(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) jp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        jp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yn === null || !yn.has(r)))
        ) {
          (e = Qr(n, e)),
            (e = ay(t, e, 1)),
            (t = gn(t, e, 1)),
            (e = Le()),
            t !== null && (Ti(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ve === e &&
      (be & n) === n &&
      (he === 4 || (he === 3 && (be & 130023424) === be && 500 > le() - td)
        ? Yn(e, 0)
        : (ed |= n)),
    Ue(e, t);
}
function Ey(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ui), (Ui <<= 1), !(Ui & 130023424) && (Ui = 4194304))
      : (t = 1));
  var n = Le();
  (e = Gt(e, t)), e !== null && (Ti(e, t, n), Ue(e, n));
}
function hS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ey(e, n);
}
function mS(e, t) {
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
      throw Error(j(314));
  }
  r !== null && r.delete(t), Ey(e, n);
}
var jy;
jy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) Oe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Oe = !1), nS(e, t, n);
      Oe = !!(e.flags & 131072);
    }
  else (Oe = !1), q && t.flags & 1048576 && Ag(t, Vs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ys(e, t), (e = t.pendingProps);
      var o = Gr(t, Ae.current);
      Br(t, n), (o = Kc(null, t, r, e, o, n));
      var i = Xc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((i = !0), $s(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Uc(t),
            (o.updater = ga),
            (t.stateNode = o),
            (o._reactInternals = t),
            ku(t, r, e, n),
            (t = Ru(null, t, r, !0, i, n)))
          : ((t.tag = 0), q && i && $c(t), _e(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ys(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = yS(r)),
          (e = pt(r, e)),
          o)
        ) {
          case 0:
            t = ju(null, t, r, e, n);
            break e;
          case 1:
            t = vp(null, t, r, e, n);
            break e;
          case 11:
            t = gp(null, t, r, e, n);
            break e;
          case 14:
            t = yp(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        ju(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        vp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((dy(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Vg(e, t),
          Fs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Qr(Error(j(423)), t)), (t = xp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Qr(Error(j(424)), t)), (t = xp(e, t, r, n, o));
            break e;
          } else
            for (
              Ye = mn(t.stateNode.containerInfo.firstChild),
                Ke = t,
                q = !0,
                gt = null,
                n = $g(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yr(), r === o)) {
            t = Yt(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zg(t),
        e === null && Cu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        vu(r, o) ? (s = null) : i !== null && vu(r, i) && (t.flags |= 32),
        cy(e, t),
        _e(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Cu(t), null;
    case 13:
      return fy(e, t, n);
    case 4:
      return (
        Wc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Kr(t, null, r, n)) : _e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        gp(e, t, r, o, n)
      );
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          K(zs, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (bt(i.value, s)) {
            if (i.children === o.children && !Fe.current) {
              t = Yt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Ft(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Tu(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(j(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Tu(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        _e(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Br(t, n),
        (o = st(o)),
        (r = r(o)),
        (t.flags |= 1),
        _e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = pt(r, t.pendingProps)),
        (o = pt(r.type, o)),
        yp(e, t, r, o, n)
      );
    case 15:
      return ly(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        ys(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), $s(t)) : (e = !1),
        Br(t, n),
        iy(t, r, o),
        ku(t, r, o, n),
        Ru(null, t, r, !0, e, n)
      );
    case 19:
      return py(e, t, n);
    case 22:
      return uy(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Ry(e, t) {
  return ng(e, t);
}
function gS(e, t, n, r) {
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
function ot(e, t, n, r) {
  return new gS(e, t, n, r);
}
function id(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yS(e) {
  if (typeof e == "function") return id(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Tc)) return 11;
    if (e === Pc) return 14;
  }
  return 2;
}
function xn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ot(e.tag, t, e.key, e.mode)),
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
function ws(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) id(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Sr:
        return Kn(n.children, o, i, t);
      case Cc:
        (s = 8), (o |= 8);
        break;
      case Ql:
        return (
          (e = ot(12, n, t, o | 2)), (e.elementType = Ql), (e.lanes = i), e
        );
      case Zl:
        return (e = ot(13, n, t, o)), (e.elementType = Zl), (e.lanes = i), e;
      case ql:
        return (e = ot(19, n, t, o)), (e.elementType = ql), (e.lanes = i), e;
      case zm:
        return xa(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Im:
              s = 10;
              break e;
            case Vm:
              s = 9;
              break e;
            case Tc:
              s = 11;
              break e;
            case Pc:
              s = 14;
              break e;
            case rn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ot(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Kn(e, t, n, r) {
  return (e = ot(7, e, r, t)), (e.lanes = n), e;
}
function xa(e, t, n, r) {
  return (
    (e = ot(22, e, r, t)),
    (e.elementType = zm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gl(e, t, n) {
  return (e = ot(6, e, null, t)), (e.lanes = n), e;
}
function yl(e, t, n) {
  return (
    (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vS(e, t, n, r, o) {
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
    (this.eventTimes = Za(0)),
    (this.expirationTimes = Za(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Za(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function sd(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new vS(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ot(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Uc(i),
    e
  );
}
function xS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ny(e) {
  if (!e) return Sn;
  e = e._reactInternals;
  e: {
    if (ir(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return Ng(e, n, t);
  }
  return t;
}
function My(e, t, n, r, o, i, s, a, l) {
  return (
    (e = sd(n, r, !0, e, o, i, s, a, l)),
    (e.context = Ny(null)),
    (n = e.current),
    (r = Le()),
    (o = vn(n)),
    (i = Ft(r, o)),
    (i.callback = t ?? null),
    gn(n, i, o),
    (e.current.lanes = o),
    Ti(e, o, r),
    Ue(e, r),
    e
  );
}
function wa(e, t, n, r) {
  var o = t.current,
    i = Le(),
    s = vn(o);
  return (
    (n = Ny(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ft(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gn(o, t, s)),
    e !== null && (St(e, o, s, i), hs(e, o, s)),
    s
  );
}
function Xs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ad(e, t) {
  Rp(e, t), (e = e.alternate) && Rp(e, t);
}
function wS() {
  return null;
}
var Ay =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ld(e) {
  this._internalRoot = e;
}
Sa.prototype.render = ld.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  wa(e, t, null, null);
};
Sa.prototype.unmount = ld.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    nr(function () {
      wa(null, e, null, null);
    }),
      (t[Ht] = null);
  }
};
function Sa(e) {
  this._internalRoot = e;
}
Sa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ug();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < an.length && t !== 0 && t < an[n].priority; n++);
    an.splice(n, 0, e), n === 0 && dg(e);
  }
};
function ud(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ba(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Np() {}
function SS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Xs(s);
        i.call(u);
      };
    }
    var s = My(t, r, e, 0, null, !1, !1, "", Np);
    return (
      (e._reactRootContainer = s),
      (e[Ht] = s.current),
      ai(e.nodeType === 8 ? e.parentNode : e),
      nr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Xs(l);
      a.call(u);
    };
  }
  var l = sd(e, 0, !1, null, null, !1, !1, "", Np);
  return (
    (e._reactRootContainer = l),
    (e[Ht] = l.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    nr(function () {
      wa(t, l, n, r);
    }),
    l
  );
}
function Ca(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Xs(s);
        a.call(l);
      };
    }
    wa(t, s, e, o);
  } else s = SS(n, t, e, o, r);
  return Xs(s);
}
ag = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Do(t.pendingLanes);
        n !== 0 &&
          (jc(t, n | 1), Ue(t, le()), !(F & 6) && ((Zr = le() + 500), En()));
      }
      break;
    case 13:
      nr(function () {
        var r = Gt(e, 1);
        if (r !== null) {
          var o = Le();
          St(r, e, 1, o);
        }
      }),
        ad(e, 1);
  }
};
Rc = function (e) {
  if (e.tag === 13) {
    var t = Gt(e, 134217728);
    if (t !== null) {
      var n = Le();
      St(t, e, 134217728, n);
    }
    ad(e, 134217728);
  }
};
lg = function (e) {
  if (e.tag === 13) {
    var t = vn(e),
      n = Gt(e, t);
    if (n !== null) {
      var r = Le();
      St(n, e, t, r);
    }
    ad(e, t);
  }
};
ug = function () {
  return H;
};
cg = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
lu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((tu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = pa(r);
            if (!o) throw Error(j(90));
            Fm(r), tu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Um(e, n);
      break;
    case "select":
      (t = n.value), t != null && Vr(e, !!n.multiple, t, !1);
  }
};
Qm = nd;
Zm = nr;
var bS = { usingClientEntryPoint: !1, Events: [ki, Pr, pa, Km, Xm, nd] },
  ko = {
    findFiberByHostInstance: Fn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  CS = {
    bundleType: ko.bundleType,
    version: ko.version,
    rendererPackageName: ko.rendererPackageName,
    rendererConfig: ko.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = eg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ko.findFiberByHostInstance || wS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var es = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!es.isDisabled && es.supportsFiber)
    try {
      (ua = es.inject(CS)), (Nt = es);
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bS;
qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ud(t)) throw Error(j(200));
  return xS(e, t, null, n);
};
qe.createRoot = function (e, t) {
  if (!ud(e)) throw Error(j(299));
  var n = !1,
    r = "",
    o = Ay;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = sd(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ht] = t.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    new ld(t)
  );
};
qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = eg(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
  return nr(e);
};
qe.hydrate = function (e, t, n) {
  if (!ba(t)) throw Error(j(200));
  return Ca(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
  if (!ud(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Ay;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = My(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Ht] = t.current),
    ai(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Sa(t);
};
qe.render = function (e, t, n) {
  if (!ba(t)) throw Error(j(200));
  return Ca(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
  if (!ba(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (nr(function () {
        Ca(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ht] = null);
        });
      }),
      !0)
    : !1;
};
qe.unstable_batchedUpdates = nd;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ba(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Ca(e, t, n, !1, r);
};
qe.version = "18.3.1-next-f1338f8080-20240426";
function Dy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dy);
    } catch (e) {
      console.error(e);
    }
}
Dy(), (Dm.exports = qe);
var cd = Dm.exports;
const Lo = mc(cd);
var Mp = cd;
(Kl.createRoot = Mp.createRoot), (Kl.hydrateRoot = Mp.hydrateRoot);
var jt = function () {
  return (
    (jt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    jt.apply(this, arguments)
  );
};
function _y(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function TS(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ss = "right-scroll-bar-position",
  bs = "width-before-scroll-bar",
  PS = "with-scroll-bars-hidden",
  kS = "--removed-body-scroll-bar-size";
function vl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ES(e, t) {
  var n = w.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var jS = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  Ap = new WeakMap();
function RS(e, t) {
  var n = ES(null, function (r) {
    return e.forEach(function (o) {
      return vl(o, r);
    });
  });
  return (
    jS(
      function () {
        var r = Ap.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (a) {
            i.has(a) || vl(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || vl(a, s);
            });
        }
        Ap.set(n, e);
      },
      [e]
    ),
    n
  );
}
function NS(e) {
  return e;
}
function MS(e, t) {
  t === void 0 && (t = NS);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (s = n);
        }
        var l = function () {
            var c = s;
            (s = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (c) {
              s.push(c), u();
            },
            filter: function (c) {
              return (s = s.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function AS(e) {
  e === void 0 && (e = {});
  var t = MS(null);
  return (t.options = jt({ async: !0, ssr: !1 }, e)), t;
}
var Ly = function (e) {
  var t = e.sideCar,
    n = _y(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return w.createElement(r, jt({}, n));
};
Ly.isSideCarExport = !0;
function DS(e, t) {
  return e.useMedium(t), Ly;
}
var $y = AS(),
  xl = function () {},
  Ta = w.forwardRef(function (e, t) {
    var n = w.useRef(null),
      r = w.useState({
        onScrollCapture: xl,
        onWheelCapture: xl,
        onTouchMoveCapture: xl,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      f = e.sideCar,
      h = e.noRelative,
      v = e.noIsolation,
      y = e.inert,
      S = e.allowPinchZoom,
      g = e.as,
      m = g === void 0 ? "div" : g,
      x = e.gapMode,
      b = _y(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = f,
      k = RS([n, t]),
      P = jt(jt({}, b), o);
    return w.createElement(
      w.Fragment,
      null,
      c &&
        w.createElement(C, {
          sideCar: $y,
          removeScrollBar: u,
          shards: d,
          noRelative: h,
          noIsolation: v,
          inert: y,
          setCallbacks: i,
          allowPinchZoom: !!S,
          lockRef: n,
          gapMode: x,
        }),
      s
        ? w.cloneElement(w.Children.only(a), jt(jt({}, P), { ref: k }))
        : w.createElement(m, jt({}, P, { className: l, ref: k }), a)
    );
  });
Ta.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ta.classNames = { fullWidth: bs, zeroRight: Ss };
var _S = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function LS() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = _S();
  return t && e.setAttribute("nonce", t), e;
}
function $S(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function IS(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var VS = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = LS()) && ($S(t, n), IS(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  zS = function () {
    var e = VS();
    return function (t, n) {
      w.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Iy = function () {
    var e = zS(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  OS = { left: 0, top: 0, right: 0, gap: 0 },
  wl = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  FS = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [wl(n), wl(r), wl(o)];
  },
  BS = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return OS;
    var t = FS(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  US = Iy(),
  Wr = "data-scroll-locked",
  WS = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          PS,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Wr,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Ss,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          bs,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Ss, " .")
        .concat(
          Ss,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(bs, " .")
        .concat(
          bs,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Wr,
          `] {
    `
        )
        .concat(kS, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  Dp = function () {
    var e = parseInt(document.body.getAttribute(Wr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  HS = function () {
    w.useEffect(function () {
      return (
        document.body.setAttribute(Wr, (Dp() + 1).toString()),
        function () {
          var e = Dp() - 1;
          e <= 0
            ? document.body.removeAttribute(Wr)
            : document.body.setAttribute(Wr, e.toString());
        }
      );
    }, []);
  },
  GS = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    HS();
    var i = w.useMemo(
      function () {
        return BS(o);
      },
      [o]
    );
    return w.createElement(US, { styles: WS(i, !t, o, n ? "" : "!important") });
  },
  Fu = !1;
if (typeof window < "u")
  try {
    var ts = Object.defineProperty({}, "passive", {
      get: function () {
        return (Fu = !0), !0;
      },
    });
    window.addEventListener("test", ts, ts),
      window.removeEventListener("test", ts, ts);
  } catch {
    Fu = !1;
  }
var pr = Fu ? { passive: !1 } : !1,
  YS = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Vy = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !YS(e) && n[t] === "visible")
    );
  },
  KS = function (e) {
    return Vy(e, "overflowY");
  },
  XS = function (e) {
    return Vy(e, "overflowX");
  },
  _p = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = zy(e, r);
      if (o) {
        var i = Oy(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  QS = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  ZS = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  zy = function (e, t) {
    return e === "v" ? KS(t) : XS(t);
  },
  Oy = function (e, t) {
    return e === "v" ? QS(t) : ZS(t);
  },
  qS = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  JS = function (e, t, n, r, o) {
    var i = qS(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      c = s > 0,
      d = 0,
      f = 0;
    do {
      if (!a) break;
      var h = Oy(e, a),
        v = h[0],
        y = h[1],
        S = h[2],
        g = y - S - i * v;
      (v || g) && zy(e, a) && ((d += g), (f += v));
      var m = a.parentNode;
      a = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m;
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return ((c && Math.abs(d) < 1) || (!c && Math.abs(f) < 1)) && (u = !0), u;
  },
  ns = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Lp = function (e) {
    return [e.deltaX, e.deltaY];
  },
  $p = function (e) {
    return e && "current" in e ? e.current : e;
  },
  eb = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  tb = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  nb = 0,
  hr = [];
function rb(e) {
  var t = w.useRef([]),
    n = w.useRef([0, 0]),
    r = w.useRef(),
    o = w.useState(nb++)[0],
    i = w.useState(Iy)[0],
    s = w.useRef(e);
  w.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    w.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var y = TS([e.lockRef.current], (e.shards || []).map($p), !0).filter(
            Boolean
          );
          return (
            y.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                y.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = w.useCallback(function (y, S) {
      if (
        ("touches" in y && y.touches.length === 2) ||
        (y.type === "wheel" && y.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var g = ns(y),
        m = n.current,
        x = "deltaX" in y ? y.deltaX : m[0] - g[0],
        b = "deltaY" in y ? y.deltaY : m[1] - g[1],
        C,
        k = y.target,
        P = Math.abs(x) > Math.abs(b) ? "h" : "v";
      if ("touches" in y && P === "h" && k.type === "range") return !1;
      var T = _p(P, k);
      if (!T) return !0;
      if ((T ? (C = P) : ((C = P === "v" ? "h" : "v"), (T = _p(P, k))), !T))
        return !1;
      if (
        (!r.current && "changedTouches" in y && (x || b) && (r.current = C), !C)
      )
        return !0;
      var M = r.current || C;
      return JS(M, S, y, M === "h" ? x : b);
    }, []),
    l = w.useCallback(function (y) {
      var S = y;
      if (!(!hr.length || hr[hr.length - 1] !== i)) {
        var g = "deltaY" in S ? Lp(S) : ns(S),
          m = t.current.filter(function (C) {
            return (
              C.name === S.type &&
              (C.target === S.target || S.target === C.shadowParent) &&
              eb(C.delta, g)
            );
          })[0];
        if (m && m.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!m) {
          var x = (s.current.shards || [])
              .map($p)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(S.target);
              }),
            b = x.length > 0 ? a(S, x[0]) : !s.current.noIsolation;
          b && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    u = w.useCallback(function (y, S, g, m) {
      var x = { name: y, delta: S, target: g, should: m, shadowParent: ob(g) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (b) {
            return b !== x;
          });
        }, 1);
    }, []),
    c = w.useCallback(function (y) {
      (n.current = ns(y)), (r.current = void 0);
    }, []),
    d = w.useCallback(function (y) {
      u(y.type, Lp(y), y.target, a(y, e.lockRef.current));
    }, []),
    f = w.useCallback(function (y) {
      u(y.type, ns(y), y.target, a(y, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      hr.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, pr),
      document.addEventListener("touchmove", l, pr),
      document.addEventListener("touchstart", c, pr),
      function () {
        (hr = hr.filter(function (y) {
          return y !== i;
        })),
          document.removeEventListener("wheel", l, pr),
          document.removeEventListener("touchmove", l, pr),
          document.removeEventListener("touchstart", c, pr);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    v = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    v ? w.createElement(i, { styles: tb(o) }) : null,
    h
      ? w.createElement(GS, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null
  );
}
function ob(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const ib = DS($y, rb);
var Qs = w.forwardRef(function (e, t) {
  return w.createElement(Ta, jt({}, e, { ref: t, sideCar: ib }));
});
Qs.classNames = Ta.classNames;
function fe(e) {
  return Object.keys(e);
}
function Sl(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function dd(e, t) {
  const n = { ...e },
    r = t;
  return (
    Sl(e) &&
      Sl(t) &&
      Object.keys(t).forEach((o) => {
        Sl(r[o]) && o in e ? (n[o] = dd(n[o], r[o])) : (n[o] = r[o]);
      }),
    n
  );
}
function sb(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function ab(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)")
    ? e
    : (t = e.match(/^calc\((.*?)\)$/)) == null
    ? void 0
    : t[1].split("*")[0].trim();
}
function gi(e) {
  const t = ab(e);
  return typeof t == "number"
    ? t
    : typeof t == "string"
    ? t.includes("calc") || t.includes("var")
      ? t
      : t.includes("px")
      ? Number(t.replace("px", ""))
      : t.includes("rem")
      ? Number(t.replace("rem", "")) * 16
      : t.includes("em")
      ? Number(t.replace("em", "")) * 16
      : Number(t)
    : NaN;
}
function bl(e) {
  return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`;
}
function Fy(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0") return `0${e}`;
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? bl(o) : o;
    }
    if (typeof r == "string") {
      if (
        r === "" ||
        r.startsWith("calc(") ||
        r.startsWith("clamp(") ||
        r.includes("rgba(")
      )
        return r;
      if (r.includes(","))
        return r
          .split(",")
          .map((i) => n(i))
          .join(",");
      if (r.includes(" "))
        return r
          .split(" ")
          .map((i) => n(i))
          .join(" ");
      if (r.includes(e)) return t ? bl(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${e}`;
        return t ? bl(i) : i;
      }
    }
    return r;
  }
  return n;
}
const E = Fy("rem", { shouldScale: !0 }),
  Ip = Fy("em");
function jn(e) {
  return Object.keys(e).reduce(
    (t, n) => (e[n] !== void 0 && (t[n] = e[n]), t),
    {}
  );
}
function By(e) {
  if (typeof e == "number") return !0;
  if (typeof e == "string") {
    if (
      e.startsWith("calc(") ||
      e.startsWith("var(") ||
      (e.includes(" ") && e.trim() !== "")
    )
      return !0;
    const t =
      /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    return e
      .trim()
      .split(/\s+/)
      .every((r) => t.test(r));
  }
  return !1;
}
function lb(e) {
  return Array.isArray(e) || e === null
    ? !1
    : typeof e == "object"
    ? e.type !== w.Fragment
    : !1;
}
function Rn(e) {
  const t = w.createContext(null);
  return [
    ({ children: o, value: i }) => p.jsx(t.Provider, { value: i, children: o }),
    () => {
      const o = w.useContext(t);
      if (o === null) throw new Error(e);
      return o;
    },
  ];
}
function ub(e = null) {
  const t = w.createContext(e);
  return [
    ({ children: o, value: i }) => p.jsx(t.Provider, { value: i, children: o }),
    () => w.useContext(t),
  ];
}
const cb = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function sr(e) {
  return cb[e];
}
function se(e, t = "size", n = !0) {
  if (e !== void 0) return By(e) ? (n ? E(e) : e) : `var(--${t}-${e})`;
}
function Ne(e) {
  return se(e, "mantine-spacing");
}
function lt(e) {
  return e === void 0
    ? "var(--mantine-radius-default)"
    : se(e, "mantine-radius");
}
function rr(e) {
  return se(e, "mantine-font-size");
}
function Uy(e) {
  return se(e, "mantine-line-height", !1);
}
function Wy(e) {
  if (e) return se(e, "mantine-shadow", !1);
}
function db(e, t) {
  return e in t ? gi(t[e]) : gi(e);
}
function fd(e, t) {
  const n = e.map((r) => ({ value: r, px: db(r, t) }));
  return n.sort((r, o) => r.px - o.px), n;
}
function vt(e) {
  return typeof e == "object" && e !== null
    ? "base" in e
      ? e.base
      : void 0
    : e;
}
function Hy(e = "mantine-") {
  return `${e}${Math.random().toString(36).slice(2, 11)}`;
}
function On(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function Pa(e, t) {
  const n = typeof t == "number" ? t : t.delay,
    r = typeof t == "number" ? !1 : t.flushOnUnmount,
    o = On(e),
    i = w.useRef(0),
    s = w.useRef(() => {}),
    a = Object.assign(
      w.useCallback(
        (...l) => {
          window.clearTimeout(i.current);
          const u = () => {
            i.current !== 0 && ((i.current = 0), o(...l));
          };
          (s.current = u), (a.flush = u), (i.current = window.setTimeout(u, n));
        },
        [o, n]
      ),
      { flush: s.current }
    );
  return (
    w.useEffect(
      () => () => {
        window.clearTimeout(i.current), r && a.flush();
      },
      [a, r]
    ),
    a
  );
}
function fb(e, t) {
  try {
    return (
      e.addEventListener("change", t), () => e.removeEventListener("change", t)
    );
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function pb(e, t) {
  return typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(e).matches
    : !1;
}
function hb(
  e,
  t,
  { getInitialValueInEffect: n } = { getInitialValueInEffect: !0 }
) {
  const [r, o] = w.useState(n ? t : pb(e)),
    i = w.useRef(null);
  return (
    w.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (i.current = window.matchMedia(e)),
          o(i.current.matches),
          fb(i.current, (s) => o(s.matches))
        );
    }, [e]),
    r
  );
}
const ji = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function pd(e, t) {
  const n = w.useRef(!1);
  w.useEffect(
    () => () => {
      n.current = !1;
    },
    []
  ),
    w.useEffect(() => {
      if (n.current) return e();
      n.current = !0;
    }, t);
}
function mb({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = w.useRef(null),
    r = () => {
      var o;
      n.current &&
        "focus" in n.current &&
        typeof n.current.focus == "function" &&
        ((o = n.current) == null || o.focus({ preventScroll: !0 }));
    };
  return (
    pd(() => {
      let o = -1;
      const i = (s) => {
        s.key === "Tab" && window.clearTimeout(o);
      };
      return (
        document.addEventListener("keydown", i),
        e
          ? (n.current = document.activeElement)
          : t && (o = window.setTimeout(r, 10)),
        () => {
          window.clearTimeout(o), document.removeEventListener("keydown", i);
        }
      );
    }, [e, t]),
    r
  );
}
const gb = /input|select|textarea|button|object/,
  Gy = "a, input, select, textarea, button, object, [tabindex]";
function yb(e) {
  return e.style.display === "none";
}
function vb(e) {
  if (
    e.getAttribute("aria-hidden") ||
    e.getAttribute("hidden") ||
    e.getAttribute("type") === "hidden"
  )
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (yb(n)) return !1;
    n = n.parentNode;
  }
  return !0;
}
function Yy(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Bu(e) {
  const t = e.nodeName.toLowerCase(),
    n = !Number.isNaN(Yy(e));
  return (
    ((gb.test(t) && !e.disabled) ||
      (e instanceof HTMLAnchorElement && e.href) ||
      n) &&
    vb(e)
  );
}
function Ky(e) {
  const t = Yy(e);
  return (Number.isNaN(t) || t >= 0) && Bu(e);
}
function xb(e) {
  return Array.from(e.querySelectorAll(Gy)).filter(Ky);
}
function wb(e, t) {
  const n = xb(e);
  if (!n.length) {
    t.preventDefault();
    return;
  }
  const r = n[t.shiftKey ? 0 : n.length - 1],
    o = e.getRootNode();
  let i = r === o.activeElement || e === o.activeElement;
  const s = o.activeElement;
  if (
    (s.tagName === "INPUT" &&
      s.getAttribute("type") === "radio" &&
      (i = n
        .filter(
          (c) =>
            c.getAttribute("type") === "radio" &&
            c.getAttribute("name") === s.getAttribute("name")
        )
        .includes(r)),
    !i)
  )
    return;
  t.preventDefault();
  const l = n[t.shiftKey ? n.length - 1 : 0];
  l && l.focus();
}
function Sb(e = !0) {
  const t = w.useRef(null),
    n = (o) => {
      let i = o.querySelector("[data-autofocus]");
      if (!i) {
        const s = Array.from(o.querySelectorAll(Gy));
        (i = s.find(Ky) || s.find(Bu) || null), !i && Bu(o) && (i = o);
      }
      i && i.focus({ preventScroll: !0 });
    },
    r = w.useCallback(
      (o) => {
        e &&
          o !== null &&
          t.current !== o &&
          (o
            ? (setTimeout(() => {
                o.getRootNode() && n(o);
              }),
              (t.current = o))
            : (t.current = null));
      },
      [e]
    );
  return (
    w.useEffect(() => {
      if (!e) return;
      t.current && setTimeout(() => n(t.current));
      const o = (i) => {
        i.key === "Tab" && t.current && wb(t.current, i);
      };
      return (
        document.addEventListener("keydown", o),
        () => document.removeEventListener("keydown", o)
      );
    }, [e]),
    r
  );
}
const bb = (e) => (e + 1) % 1e6;
function Cb() {
  const [, e] = w.useReducer(bb, 0);
  return e;
}
const Tb = yt.useId || (() => {});
function Pb() {
  const e = Tb();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function kb(e) {
  const t = Pb(),
    [n, r] = w.useState(t);
  return (
    ji(() => {
      r(Hy());
    }, []),
    typeof e == "string" ? e : typeof window > "u" ? t : n
  );
}
function Eb(e, t, n) {
  w.useEffect(
    () => (
      window.addEventListener(e, t, n),
      () => window.removeEventListener(e, t, n)
    ),
    [e, t]
  );
}
function Uu(e, t) {
  if (typeof e == "function") return e(t);
  typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function jb(...e) {
  const t = new Map();
  return (n) => {
    if (
      (e.forEach((r) => {
        const o = Uu(r, n);
        o && t.set(r, o);
      }),
      t.size > 0)
    )
      return () => {
        e.forEach((r) => {
          const o = t.get(r);
          o ? o() : Uu(r, null);
        }),
          t.clear();
      };
  };
}
function ar(...e) {
  return w.useCallback(jb(...e), e);
}
function hd(e, t) {
  return hb("(prefers-reduced-motion: reduce)", e, t);
}
function Rb(e = !1, t) {
  const { onOpen: n, onClose: r } = {},
    [o, i] = w.useState(e),
    s = w.useCallback(() => {
      i((u) => u || (n == null || n(), !0));
    }, [n]),
    a = w.useCallback(() => {
      i((u) => u && (r == null || r(), !1));
    }, [r]),
    l = w.useCallback(() => {
      o ? a() : s();
    }, [a, s, o]);
  return [o, { open: s, close: a, toggle: l }];
}
function Xy(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Xy(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function We() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Xy(e)) && (r && (r += " "), (r += t));
  return r;
}
const Nb = {};
function Mb(e) {
  const t = {};
  return (
    e.forEach((n) => {
      Object.entries(n).forEach(([r, o]) => {
        t[r] ? (t[r] = We(t[r], o)) : (t[r] = o);
      });
    }),
    t
  );
}
function ka({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const i = (Array.isArray(t) ? t : [t]).map((s) =>
    typeof s == "function" ? s(e, n, r) : s || Nb
  );
  return Mb(i);
}
function Zs({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce(
    (i, s) =>
      typeof s == "function" ? { ...i, ...s(e, n, r) } : { ...i, ...s },
    {}
  );
}
const Qy = w.createContext(null);
function Nn() {
  const e = w.useContext(Qy);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function Ab() {
  return Nn().cssVariablesResolver;
}
function Db() {
  return Nn().classNamesPrefix;
}
function md() {
  return Nn().getStyleNonce;
}
function _b() {
  return Nn().withStaticClasses;
}
function Lb() {
  return Nn().headless;
}
function $b() {
  var e;
  return (e = Nn().stylesTransform) == null ? void 0 : e.sx;
}
function Ib() {
  var e;
  return (e = Nn().stylesTransform) == null ? void 0 : e.styles;
}
function Zy() {
  return Nn().env || "default";
}
function Vb(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
}
function zb(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const s = t.split("");
    t = [s[0], s[0], s[1], s[1], s[2], s[2]].join("");
  }
  if (t.length === 8) {
    const s = parseInt(t.slice(6, 8), 16) / 255;
    return {
      r: parseInt(t.slice(0, 2), 16),
      g: parseInt(t.slice(2, 4), 16),
      b: parseInt(t.slice(4, 6), 16),
      a: s,
    };
  }
  const n = parseInt(t, 16),
    r = (n >> 16) & 255,
    o = (n >> 8) & 255,
    i = n & 255;
  return { r, g: o, b: i, a: 1 };
}
function Ob(e) {
  const [t, n, r, o] = e
    .replace(/[^0-9,./]/g, "")
    .split(/[/,]/)
    .map(Number);
  return { r: t, g: n, b: r, a: o === void 0 ? 1 : o };
}
function Fb(e) {
  const t =
      /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,
    n = e.match(t);
  if (!n) return { r: 0, g: 0, b: 0, a: 1 };
  const r = parseInt(n[1], 10),
    o = parseInt(n[2], 10) / 100,
    i = parseInt(n[3], 10) / 100,
    s = n[5] ? parseFloat(n[5]) : void 0,
    a = (1 - Math.abs(2 * i - 1)) * o,
    l = r / 60,
    u = a * (1 - Math.abs((l % 2) - 1)),
    c = i - a / 2;
  let d, f, h;
  return (
    l >= 0 && l < 1
      ? ((d = a), (f = u), (h = 0))
      : l >= 1 && l < 2
      ? ((d = u), (f = a), (h = 0))
      : l >= 2 && l < 3
      ? ((d = 0), (f = a), (h = u))
      : l >= 3 && l < 4
      ? ((d = 0), (f = u), (h = a))
      : l >= 4 && l < 5
      ? ((d = u), (f = 0), (h = a))
      : ((d = a), (f = 0), (h = u)),
    {
      r: Math.round((d + c) * 255),
      g: Math.round((f + c) * 255),
      b: Math.round((h + c) * 255),
      a: s || 1,
    }
  );
}
function gd(e) {
  return Vb(e)
    ? zb(e)
    : e.startsWith("rgb")
    ? Ob(e)
    : e.startsWith("hsl")
    ? Fb(e)
    : { r: 0, g: 0, b: 0, a: 1 };
}
function rs(e, t) {
  if (e.startsWith("var("))
    return `color-mix(in srgb, ${e}, black ${t * 100}%)`;
  const { r: n, g: r, b: o, a: i } = gd(e),
    s = 1 - t,
    a = (l) => Math.round(l * s);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${i})`;
}
function yi(e, t) {
  return typeof e.primaryShade == "number"
    ? e.primaryShade
    : t === "dark"
    ? e.primaryShade.dark
    : e.primaryShade.light;
}
function Cl(e) {
  return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function Bb(e) {
  const t = e.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null;
}
function Ub(e) {
  if (e.startsWith("oklch(")) return (Bb(e) || 0) / 100;
  const { r: t, g: n, b: r } = gd(e),
    o = t / 255,
    i = n / 255,
    s = r / 255,
    a = Cl(o),
    l = Cl(i),
    u = Cl(s);
  return 0.2126 * a + 0.7152 * l + 0.0722 * u;
}
function Eo(e, t = 0.179) {
  return e.startsWith("var(") ? !1 : Ub(e) > t;
}
function Ri({ color: e, theme: t, colorScheme: n }) {
  if (typeof e != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`
    );
  if (e === "bright")
    return {
      color: e,
      value: n === "dark" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Eo(n === "dark" ? t.white : t.black, t.luminanceThreshold),
      variable: "--mantine-color-bright",
    };
  if (e === "dimmed")
    return {
      color: e,
      value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: Eo(
        n === "dark" ? t.colors.dark[2] : t.colors.gray[6],
        t.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed",
    };
  if (e === "white" || e === "black")
    return {
      color: e,
      value: e === "white" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Eo(e === "white" ? t.white : t.black, t.luminanceThreshold),
      variable: `--mantine-color-${e}`,
    };
  const [r, o] = e.split("."),
    i = o ? Number(o) : void 0,
    s = r in t.colors;
  if (s) {
    const a = i !== void 0 ? t.colors[r][i] : t.colors[r][yi(t, n || "light")];
    return {
      color: r,
      value: a,
      shade: i,
      isThemeColor: s,
      isLight: Eo(a, t.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${i}` : `--mantine-color-${r}-filled`,
    };
  }
  return {
    color: e,
    value: e,
    isThemeColor: s,
    isLight: Eo(e, t.luminanceThreshold),
    shade: i,
    variable: void 0,
  };
}
function bn(e, t) {
  const n = Ri({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function Wu(e, t) {
  const n = {
      from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
      to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
      deg: (e == null ? void 0 : e.deg) ?? t.defaultGradient.deg ?? 0,
    },
    r = bn(n.from, t),
    o = bn(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function kt(e, t) {
  if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) {
    const i = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${i}%)`;
  }
  if (e.startsWith("oklch"))
    return e.includes("/")
      ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`)
      : e.replace(")", ` / ${t})`);
  const { r: n, g: r, b: o } = gd(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const mr = kt,
  Wb = ({ color: e, theme: t, variant: n, gradient: r, autoContrast: o }) => {
    const i = Ri({ color: e, theme: t }),
      s = typeof o == "boolean" ? o : t.autoContrast;
    if (n === "filled") {
      const a =
        s && i.isLight
          ? "var(--mantine-color-black)"
          : "var(--mantine-color-white)";
      return i.isThemeColor
        ? i.shade === void 0
          ? {
              background: `var(--mantine-color-${e}-filled)`,
              hover: `var(--mantine-color-${e}-filled-hover)`,
              color: a,
              border: `${E(1)} solid transparent`,
            }
          : {
              background: `var(--mantine-color-${i.color}-${i.shade})`,
              hover: `var(--mantine-color-${i.color}-${
                i.shade === 9 ? 8 : i.shade + 1
              })`,
              color: a,
              border: `${E(1)} solid transparent`,
            }
        : {
            background: e,
            hover: rs(e, 0.1),
            color: a,
            border: `${E(1)} solid transparent`,
          };
    }
    if (n === "light") {
      if (i.isThemeColor) {
        if (i.shade === void 0)
          return {
            background: `var(--mantine-color-${e}-light)`,
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${E(1)} solid transparent`,
          };
        const a = t.colors[i.color][i.shade];
        return {
          background: kt(a, 0.1),
          hover: kt(a, 0.12),
          color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
          border: `${E(1)} solid transparent`,
        };
      }
      return {
        background: kt(e, 0.1),
        hover: kt(e, 0.12),
        color: e,
        border: `${E(1)} solid transparent`,
      };
    }
    if (n === "outline")
      return i.isThemeColor
        ? i.shade === void 0
          ? {
              background: "transparent",
              hover: `var(--mantine-color-${e}-outline-hover)`,
              color: `var(--mantine-color-${e}-outline)`,
              border: `${E(1)} solid var(--mantine-color-${e}-outline)`,
            }
          : {
              background: "transparent",
              hover: kt(t.colors[i.color][i.shade], 0.05),
              color: `var(--mantine-color-${i.color}-${i.shade})`,
              border: `${E(1)} solid var(--mantine-color-${i.color}-${
                i.shade
              })`,
            }
        : {
            background: "transparent",
            hover: kt(e, 0.05),
            color: e,
            border: `${E(1)} solid ${e}`,
          };
    if (n === "subtle") {
      if (i.isThemeColor) {
        if (i.shade === void 0)
          return {
            background: "transparent",
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${E(1)} solid transparent`,
          };
        const a = t.colors[i.color][i.shade];
        return {
          background: "transparent",
          hover: kt(a, 0.12),
          color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
          border: `${E(1)} solid transparent`,
        };
      }
      return {
        background: "transparent",
        hover: kt(e, 0.12),
        color: e,
        border: `${E(1)} solid transparent`,
      };
    }
    return n === "transparent"
      ? i.isThemeColor
        ? i.shade === void 0
          ? {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${e}-light-color)`,
              border: `${E(1)} solid transparent`,
            }
          : {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
              border: `${E(1)} solid transparent`,
            }
        : {
            background: "transparent",
            hover: "transparent",
            color: e,
            border: `${E(1)} solid transparent`,
          }
      : n === "white"
      ? i.isThemeColor
        ? i.shade === void 0
          ? {
              background: "var(--mantine-color-white)",
              hover: rs(t.white, 0.01),
              color: `var(--mantine-color-${e}-filled)`,
              border: `${E(1)} solid transparent`,
            }
          : {
              background: "var(--mantine-color-white)",
              hover: rs(t.white, 0.01),
              color: `var(--mantine-color-${i.color}-${i.shade})`,
              border: `${E(1)} solid transparent`,
            }
        : {
            background: "var(--mantine-color-white)",
            hover: rs(t.white, 0.01),
            color: e,
            border: `${E(1)} solid transparent`,
          }
      : n === "gradient"
      ? {
          background: Wu(r, t),
          hover: Wu(r, t),
          color: "var(--mantine-color-white)",
          border: "none",
        }
      : n === "default"
      ? {
          background: "var(--mantine-color-default)",
          hover: "var(--mantine-color-default-hover)",
          color: "var(--mantine-color-default-color)",
          border: `${E(1)} solid var(--mantine-color-default-border)`,
        }
      : {};
  },
  Hb = {
    dark: [
      "#C9C9C9",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424",
      "#1f1f1f",
      "#141414",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ],
    red: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
      "#c92a2a",
    ],
    pink: [
      "#fff0f6",
      "#ffdeeb",
      "#fcc2d7",
      "#faa2c1",
      "#f783ac",
      "#f06595",
      "#e64980",
      "#d6336c",
      "#c2255c",
      "#a61e4d",
    ],
    grape: [
      "#f8f0fc",
      "#f3d9fa",
      "#eebefa",
      "#e599f7",
      "#da77f2",
      "#cc5de8",
      "#be4bdb",
      "#ae3ec9",
      "#9c36b5",
      "#862e9c",
    ],
    violet: [
      "#f3f0ff",
      "#e5dbff",
      "#d0bfff",
      "#b197fc",
      "#9775fa",
      "#845ef7",
      "#7950f2",
      "#7048e8",
      "#6741d9",
      "#5f3dc4",
    ],
    indigo: [
      "#edf2ff",
      "#dbe4ff",
      "#bac8ff",
      "#91a7ff",
      "#748ffc",
      "#5c7cfa",
      "#4c6ef5",
      "#4263eb",
      "#3b5bdb",
      "#364fc7",
    ],
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab",
    ],
    cyan: [
      "#e3fafc",
      "#c5f6fa",
      "#99e9f2",
      "#66d9e8",
      "#3bc9db",
      "#22b8cf",
      "#15aabf",
      "#1098ad",
      "#0c8599",
      "#0b7285",
    ],
    teal: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b",
    ],
    green: [
      "#ebfbee",
      "#d3f9d8",
      "#b2f2bb",
      "#8ce99a",
      "#69db7c",
      "#51cf66",
      "#40c057",
      "#37b24d",
      "#2f9e44",
      "#2b8a3e",
    ],
    lime: [
      "#f4fce3",
      "#e9fac8",
      "#d8f5a2",
      "#c0eb75",
      "#a9e34b",
      "#94d82d",
      "#82c91e",
      "#74b816",
      "#66a80f",
      "#5c940d",
    ],
    yellow: [
      "#fff9db",
      "#fff3bf",
      "#ffec99",
      "#ffe066",
      "#ffd43b",
      "#fcc419",
      "#fab005",
      "#f59f00",
      "#f08c00",
      "#e67700",
    ],
    orange: [
      "#fff4e6",
      "#ffe8cc",
      "#ffd8a8",
      "#ffc078",
      "#ffa94d",
      "#ff922b",
      "#fd7e14",
      "#f76707",
      "#e8590c",
      "#d9480f",
    ],
  },
  Vp =
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  yd = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: Hb,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: Wb,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: Vp,
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: Vp,
      fontWeight: "700",
      textWrap: "wrap",
      sizes: {
        h1: { fontSize: E(34), lineHeight: "1.3" },
        h2: { fontSize: E(26), lineHeight: "1.35" },
        h3: { fontSize: E(22), lineHeight: "1.4" },
        h4: { fontSize: E(18), lineHeight: "1.45" },
        h5: { fontSize: E(16), lineHeight: "1.5" },
        h6: { fontSize: E(14), lineHeight: "1.5" },
      },
    },
    fontSizes: { xs: E(12), sm: E(14), md: E(16), lg: E(18), xl: E(20) },
    lineHeights: { xs: "1.4", sm: "1.45", md: "1.55", lg: "1.6", xl: "1.65" },
    radius: { xs: E(2), sm: E(4), md: E(8), lg: E(16), xl: E(32) },
    spacing: { xs: E(10), sm: E(12), md: E(16), lg: E(20), xl: E(32) },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    shadows: {
      xs: `0 ${E(1)} ${E(3)} rgba(0, 0, 0, 0.05), 0 ${E(1)} ${E(
        2
      )} rgba(0, 0, 0, 0.1)`,
      sm: `0 ${E(1)} ${E(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${E(
        10
      )} ${E(15)} ${E(-5)}, rgba(0, 0, 0, 0.04) 0 ${E(7)} ${E(7)} ${E(-5)}`,
      md: `0 ${E(1)} ${E(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${E(
        20
      )} ${E(25)} ${E(-5)}, rgba(0, 0, 0, 0.04) 0 ${E(10)} ${E(10)} ${E(-5)}`,
      lg: `0 ${E(1)} ${E(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${E(
        28
      )} ${E(23)} ${E(-7)}, rgba(0, 0, 0, 0.04) 0 ${E(12)} ${E(12)} ${E(-7)}`,
      xl: `0 ${E(1)} ${E(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${E(
        36
      )} ${E(28)} ${E(-7)}, rgba(0, 0, 0, 0.04) 0 ${E(17)} ${E(17)} ${E(-7)}`,
    },
    other: {},
    components: {},
  };
function zp(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function Gb({ key: e = "mantine-color-scheme-value" } = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u") return n;
      try {
        const r = window.localStorage.getItem(e);
        return zp(r) ? r : n;
      } catch {
        return n;
      }
    },
    set: (n) => {
      try {
        window.localStorage.setItem(e, n);
      } catch (r) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          r
        );
      }
    },
    subscribe: (n) => {
      (t = (r) => {
        r.storageArea === window.localStorage &&
          r.key === e &&
          zp(r.newValue) &&
          n(r.newValue);
      }),
        window.addEventListener("storage", t);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", t);
    },
    clear: () => {
      window.localStorage.removeItem(e);
    },
  };
}
const Yb =
    "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
  Op =
    "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Tl(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Fp(e) {
  if (!(e.primaryColor in e.colors)) throw new Error(Yb);
  if (
    typeof e.primaryShade == "object" &&
    (!Tl(e.primaryShade.dark) || !Tl(e.primaryShade.light))
  )
    throw new Error(Op);
  if (typeof e.primaryShade == "number" && !Tl(e.primaryShade))
    throw new Error(Op);
}
function Kb(e, t) {
  var r;
  if (!t) return Fp(e), e;
  const n = dd(e, t);
  return (
    t.fontFamily &&
      !((r = t.headings) != null && r.fontFamily) &&
      (n.headings.fontFamily = t.fontFamily),
    Fp(n),
    n
  );
}
const vd = w.createContext(null),
  Xb = () => w.useContext(vd) || yd;
function He() {
  const e = w.useContext(vd);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function qy({ theme: e, children: t, inherit: n = !0 }) {
  const r = Xb(),
    o = w.useMemo(() => Kb(n ? r : yd, e), [e, r, n]);
  return p.jsx(vd.Provider, { value: o, children: t });
}
qy.displayName = "@mantine/core/MantineThemeProvider";
function Qb() {
  const e = He(),
    t = md(),
    n = fe(e.breakpoints).reduce((r, o) => {
      const i = e.breakpoints[o].includes("px"),
        s = gi(e.breakpoints[o]),
        a = i ? `${s - 0.1}px` : Ip(s - 0.1),
        l = i ? `${s}px` : Ip(s);
      return `${r}@media (max-width: ${a}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${l}) {.mantine-hidden-from-${o} {display: none !important;}}`;
    }, "");
  return p.jsx("style", {
    "data-mantine-styles": "classes",
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: { __html: n },
  });
}
function Pl(e) {
  return Object.entries(e)
    .map(([t, n]) => `${t}: ${n};`)
    .join("");
}
function jo(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function Zb(e, t) {
  const n = Pl(e.variables),
    r = n ? jo(t, n) : "",
    o = Pl(e.dark),
    i = Pl(e.light),
    s = o
      ? jo(
          t === ":host"
            ? `${t}([data-mantine-color-scheme="dark"])`
            : `${t}[data-mantine-color-scheme="dark"]`,
          o
        )
      : "",
    a = i
      ? jo(
          t === ":host"
            ? `${t}([data-mantine-color-scheme="light"])`
            : `${t}[data-mantine-color-scheme="light"]`,
          i
        )
      : "";
  return `${r}${s}${a}`;
}
function Jy({ color: e, theme: t, autoContrast: n }) {
  return (typeof n == "boolean" ? n : t.autoContrast) &&
    Ri({ color: e || t.primaryColor, theme: t }).isLight
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";
}
function Bp(e, t) {
  return Jy({
    color: e.colors[e.primaryColor][yi(e, t)],
    theme: e,
    autoContrast: null,
  });
}
function os({
  theme: e,
  color: t,
  colorScheme: n,
  name: r = t,
  withColorValues: o = !0,
}) {
  if (!e.colors[t]) return {};
  if (n === "light") {
    const a = yi(e, "light"),
      l = {
        [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
        [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${a})`,
        [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
          a === 9 ? 8 : a + 1
        })`,
        [`--mantine-color-${r}-light`]: mr(e.colors[t][a], 0.1),
        [`--mantine-color-${r}-light-hover`]: mr(e.colors[t][a], 0.12),
        [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${a})`,
        [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${a})`,
        [`--mantine-color-${r}-outline-hover`]: mr(e.colors[t][a], 0.05),
      };
    return o
      ? {
          [`--mantine-color-${r}-0`]: e.colors[t][0],
          [`--mantine-color-${r}-1`]: e.colors[t][1],
          [`--mantine-color-${r}-2`]: e.colors[t][2],
          [`--mantine-color-${r}-3`]: e.colors[t][3],
          [`--mantine-color-${r}-4`]: e.colors[t][4],
          [`--mantine-color-${r}-5`]: e.colors[t][5],
          [`--mantine-color-${r}-6`]: e.colors[t][6],
          [`--mantine-color-${r}-7`]: e.colors[t][7],
          [`--mantine-color-${r}-8`]: e.colors[t][8],
          [`--mantine-color-${r}-9`]: e.colors[t][9],
          ...l,
        }
      : l;
  }
  const i = yi(e, "dark"),
    s = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${i})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
        i === 9 ? 8 : i + 1
      })`,
      [`--mantine-color-${r}-light`]: mr(e.colors[t][Math.max(0, i - 2)], 0.15),
      [`--mantine-color-${r}-light-hover`]: mr(
        e.colors[t][Math.max(0, i - 2)],
        0.2
      ),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(
        i - 5,
        0
      )})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(
        i - 4,
        0
      )})`,
      [`--mantine-color-${r}-outline-hover`]: mr(
        e.colors[t][Math.max(i - 4, 0)],
        0.05
      ),
    };
  return o
    ? {
        [`--mantine-color-${r}-0`]: e.colors[t][0],
        [`--mantine-color-${r}-1`]: e.colors[t][1],
        [`--mantine-color-${r}-2`]: e.colors[t][2],
        [`--mantine-color-${r}-3`]: e.colors[t][3],
        [`--mantine-color-${r}-4`]: e.colors[t][4],
        [`--mantine-color-${r}-5`]: e.colors[t][5],
        [`--mantine-color-${r}-6`]: e.colors[t][6],
        [`--mantine-color-${r}-7`]: e.colors[t][7],
        [`--mantine-color-${r}-8`]: e.colors[t][8],
        [`--mantine-color-${r}-9`]: e.colors[t][9],
        ...s,
      }
    : s;
}
function qb(e) {
  return !!e && typeof e == "object" && "mantine-virtual-color" in e;
}
function gr(e, t, n) {
  fe(t).forEach((r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] }));
}
const ev = (e) => {
  const t = yi(e, "light"),
    n =
      e.defaultRadius in e.radius
        ? e.radius[e.defaultRadius]
        : E(e.defaultRadius),
    r = {
      variables: {
        "--mantine-scale": e.scale.toString(),
        "--mantine-cursor-type": e.cursorType,
        "--mantine-color-scheme": "light dark",
        "--mantine-webkit-font-smoothing": e.fontSmoothing
          ? "antialiased"
          : "unset",
        "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
        "--mantine-color-white": e.white,
        "--mantine-color-black": e.black,
        "--mantine-line-height": e.lineHeights.md,
        "--mantine-font-family": e.fontFamily,
        "--mantine-font-family-monospace": e.fontFamilyMonospace,
        "--mantine-font-family-headings": e.headings.fontFamily,
        "--mantine-heading-font-weight": e.headings.fontWeight,
        "--mantine-heading-text-wrap": e.headings.textWrap,
        "--mantine-radius-default": n,
        "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
        "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
        "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
        "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
        "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`,
      },
      light: {
        "--mantine-primary-color-contrast": Bp(e, "light"),
        "--mantine-color-bright": "var(--mantine-color-black)",
        "--mantine-color-text": e.black,
        "--mantine-color-body": e.white,
        "--mantine-color-error": "var(--mantine-color-red-6)",
        "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${t})`,
        "--mantine-color-default": "var(--mantine-color-white)",
        "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
        "--mantine-color-default-color": "var(--mantine-color-black)",
        "--mantine-color-default-border": "var(--mantine-color-gray-4)",
        "--mantine-color-dimmed": "var(--mantine-color-gray-6)",
      },
      dark: {
        "--mantine-primary-color-contrast": Bp(e, "dark"),
        "--mantine-color-bright": "var(--mantine-color-white)",
        "--mantine-color-text": "var(--mantine-color-dark-0)",
        "--mantine-color-body": "var(--mantine-color-dark-7)",
        "--mantine-color-error": "var(--mantine-color-red-8)",
        "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
        "--mantine-color-default": "var(--mantine-color-dark-6)",
        "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
        "--mantine-color-default-color": "var(--mantine-color-white)",
        "--mantine-color-default-border": "var(--mantine-color-dark-4)",
        "--mantine-color-dimmed": "var(--mantine-color-dark-2)",
      },
    };
  gr(r.variables, e.breakpoints, "breakpoint"),
    gr(r.variables, e.spacing, "spacing"),
    gr(r.variables, e.fontSizes, "font-size"),
    gr(r.variables, e.lineHeights, "line-height"),
    gr(r.variables, e.shadows, "shadow"),
    gr(r.variables, e.radius, "radius"),
    e.colors[e.primaryColor].forEach((i, s) => {
      r.variables[
        `--mantine-primary-color-${s}`
      ] = `var(--mantine-color-${e.primaryColor}-${s})`;
    }),
    fe(e.colors).forEach((i) => {
      const s = e.colors[i];
      if (qb(s)) {
        Object.assign(
          r.light,
          os({
            theme: e,
            name: s.name,
            color: s.light,
            colorScheme: "light",
            withColorValues: !0,
          })
        ),
          Object.assign(
            r.dark,
            os({
              theme: e,
              name: s.name,
              color: s.dark,
              colorScheme: "dark",
              withColorValues: !0,
            })
          );
        return;
      }
      s.forEach((a, l) => {
        r.variables[`--mantine-color-${i}-${l}`] = a;
      }),
        Object.assign(
          r.light,
          os({ theme: e, color: i, colorScheme: "light", withColorValues: !1 })
        ),
        Object.assign(
          r.dark,
          os({ theme: e, color: i, colorScheme: "dark", withColorValues: !1 })
        );
    });
  const o = e.headings.sizes;
  return (
    fe(o).forEach((i) => {
      (r.variables[`--mantine-${i}-font-size`] = o[i].fontSize),
        (r.variables[`--mantine-${i}-line-height`] = o[i].lineHeight),
        (r.variables[`--mantine-${i}-font-weight`] =
          o[i].fontWeight || e.headings.fontWeight);
    }),
    r
  );
};
function Jb({ theme: e, generator: t }) {
  const n = ev(e),
    r = t == null ? void 0 : t(e);
  return r ? dd(n, r) : n;
}
const kl = ev(yd);
function e2(e) {
  const t = { variables: {}, light: {}, dark: {} };
  return (
    fe(e.variables).forEach((n) => {
      kl.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
    }),
    fe(e.light).forEach((n) => {
      kl.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
    }),
    fe(e.dark).forEach((n) => {
      kl.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
    }),
    t
  );
}
function t2(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function tv({ cssVariablesSelector: e, deduplicateCssVariables: t }) {
  const n = He(),
    r = md(),
    o = Ab(),
    i = Jb({ theme: n, generator: o }),
    s = e === ":root" && t,
    a = s ? e2(i) : i,
    l = Zb(a, e);
  return l
    ? p.jsx("style", {
        "data-mantine-styles": !0,
        nonce: r == null ? void 0 : r(),
        dangerouslySetInnerHTML: { __html: `${l}${s ? "" : t2(e)}` },
      })
    : null;
}
tv.displayName = "@mantine/CssVariables";
function n2() {
  const e = console.error;
  console.error = (...t) => {
    (t.length > 1 &&
      typeof t[0] == "string" &&
      t[0].toLowerCase().includes("extra attributes from the server") &&
      typeof t[1] == "string" &&
      t[1].toLowerCase().includes("data-mantine-color-scheme")) ||
      e(...t);
  };
}
function yr(e, t) {
  var o, i;
  const n =
      typeof window < "u" &&
      "matchMedia" in window &&
      ((o = window.matchMedia("(prefers-color-scheme: dark)")) == null
        ? void 0
        : o.matches),
    r = e !== "auto" ? e : n ? "dark" : "light";
  (i = t()) == null || i.setAttribute("data-mantine-color-scheme", r);
}
function r2({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r,
}) {
  const o = w.useRef(null),
    [i, s] = w.useState(() => e.get(t)),
    a = r || i,
    l = w.useCallback(
      (c) => {
        r || (yr(c, n), s(c), e.set(c));
      },
      [e.set, a, r]
    ),
    u = w.useCallback(() => {
      s(t), yr(t, n), e.clear();
    }, [e.clear, t]);
  return (
    w.useEffect(
      () => (e.subscribe(l), e.unsubscribe),
      [e.subscribe, e.unsubscribe]
    ),
    ji(() => {
      yr(e.get(t), n);
    }, []),
    w.useEffect(() => {
      var d;
      if (r) return yr(r, n), () => {};
      r === void 0 && yr(i, n),
        typeof window < "u" &&
          "matchMedia" in window &&
          (o.current = window.matchMedia("(prefers-color-scheme: dark)"));
      const c = (f) => {
        i === "auto" && yr(f.matches ? "dark" : "light", n);
      };
      return (
        (d = o.current) == null || d.addEventListener("change", c),
        () => {
          var f;
          return (f = o.current) == null
            ? void 0
            : f.removeEventListener("change", c);
        }
      );
    }, [i, r]),
    { colorScheme: a, setColorScheme: l, clearColorScheme: u }
  );
}
function o2({ respectReducedMotion: e, getRootElement: t }) {
  ji(() => {
    var n;
    e &&
      ((n = t()) == null ||
        n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
n2();
function nv({
  theme: e,
  children: t,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: i = !0,
  withCssVariables: s = !0,
  cssVariablesSelector: a = ":root",
  classNamesPrefix: l = "mantine",
  colorSchemeManager: u = Gb(),
  defaultColorScheme: c = "light",
  getRootElement: d = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: h,
  stylesTransform: v,
  env: y,
}) {
  const {
    colorScheme: S,
    setColorScheme: g,
    clearColorScheme: m,
  } = r2({
    defaultColorScheme: c,
    forceColorScheme: h,
    manager: u,
    getRootElement: d,
  });
  return (
    o2({
      respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
      getRootElement: d,
    }),
    p.jsx(Qy.Provider, {
      value: {
        colorScheme: S,
        setColorScheme: g,
        clearColorScheme: m,
        getRootElement: d,
        classNamesPrefix: l,
        getStyleNonce: n,
        cssVariablesResolver: f,
        cssVariablesSelector: a,
        withStaticClasses: r,
        stylesTransform: v,
        env: y,
      },
      children: p.jsxs(qy, {
        theme: e,
        children: [
          s &&
            p.jsx(tv, { cssVariablesSelector: a, deduplicateCssVariables: i }),
          o && p.jsx(Qb, {}),
          t,
        ],
      }),
    })
  );
}
nv.displayName = "@mantine/core/MantineProvider";
function i2({ classNames: e, styles: t, props: n, stylesCtx: r }) {
  const o = He();
  return {
    resolvedClassNames: ka({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0,
    }),
    resolvedStyles: Zs({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0,
    }),
  };
}
const s2 = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never",
};
function a2({ theme: e, options: t, unstyled: n }) {
  return We(
    (t == null ? void 0 : t.focusable) &&
      !n &&
      (e.focusClassName || s2[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function l2({ selector: e, stylesCtx: t, options: n, props: r, theme: o }) {
  return ka({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t,
  })[e];
}
function Up({ selector: e, stylesCtx: t, theme: n, classNames: r, props: o }) {
  return ka({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function u2({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function c2({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function d2({
  themeName: e,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: r,
}) {
  return r === !1 ? [] : e.map((o) => `${t}-${o}-${n}`);
}
function f2({ themeName: e, theme: t, selector: n, props: r, stylesCtx: o }) {
  return e.map((i) => {
    var s, a;
    return (a = ka({
      theme: t,
      classNames: (s = t.components[i]) == null ? void 0 : s.classNames,
      props: r,
      stylesCtx: o,
    })) == null
      ? void 0
      : a[n];
  });
}
function p2({ options: e, classes: t, selector: n, unstyled: r }) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function h2({
  theme: e,
  options: t,
  themeName: n,
  selector: r,
  classNamesPrefix: o,
  classNames: i,
  classes: s,
  unstyled: a,
  className: l,
  rootSelector: u,
  props: c,
  stylesCtx: d,
  withStaticClasses: f,
  headless: h,
  transformedStyles: v,
}) {
  return We(
    a2({ theme: e, options: t, unstyled: a || h }),
    f2({ theme: e, themeName: n, selector: r, props: c, stylesCtx: d }),
    p2({ options: t, classes: s, selector: r, unstyled: a }),
    Up({ selector: r, stylesCtx: d, theme: e, classNames: i, props: c }),
    Up({ selector: r, stylesCtx: d, theme: e, classNames: v, props: c }),
    l2({ selector: r, stylesCtx: d, options: t, props: c, theme: e }),
    u2({ rootSelector: u, selector: r, className: l }),
    c2({ selector: r, classes: s, unstyled: a || h }),
    f &&
      !h &&
      d2({
        themeName: n,
        classNamesPrefix: o,
        selector: r,
        withStaticClass: t == null ? void 0 : t.withStaticClass,
      }),
    t == null ? void 0 : t.className
  );
}
function m2({ theme: e, themeName: t, props: n, stylesCtx: r, selector: o }) {
  return t
    .map((i) => {
      var s;
      return Zs({
        theme: e,
        styles: (s = e.components[i]) == null ? void 0 : s.styles,
        props: n,
        stylesCtx: r,
      })[o];
    })
    .reduce((i, s) => ({ ...i, ...s }), {});
}
function Hu({ style: e, theme: t }) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...Hu({ style: r, theme: t }) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function g2(e) {
  return e.reduce(
    (t, n) => (
      n &&
        Object.keys(n).forEach((r) => {
          t[r] = { ...t[r], ...jn(n[r]) };
        }),
      t
    ),
    {}
  );
}
function y2({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: s,
  headless: a,
}) {
  var l;
  return (l = g2([
    a ? {} : t == null ? void 0 : t(n, r, o),
    ...s.map((u) => {
      var c, d, f;
      return (f =
        (d = (c = n.components) == null ? void 0 : c[u]) == null
          ? void 0
          : d.vars) == null
        ? void 0
        : f.call(d, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o),
  ])) == null
    ? void 0
    : l[i];
}
function v2({
  theme: e,
  themeName: t,
  selector: n,
  options: r,
  props: o,
  stylesCtx: i,
  rootSelector: s,
  styles: a,
  style: l,
  vars: u,
  varsResolver: c,
  headless: d,
  withStylesTransform: f,
}) {
  return {
    ...(!f &&
      m2({ theme: e, themeName: t, props: o, stylesCtx: i, selector: n })),
    ...(!f && Zs({ theme: e, styles: a, props: o, stylesCtx: i })[n]),
    ...(!f &&
      Zs({
        theme: e,
        styles: r == null ? void 0 : r.styles,
        props: (r == null ? void 0 : r.props) || o,
        stylesCtx: i,
      })[n]),
    ...y2({
      theme: e,
      props: o,
      stylesCtx: i,
      vars: u,
      varsResolver: c,
      selector: n,
      themeName: t,
      headless: d,
    }),
    ...(s === n ? Hu({ style: l, theme: e }) : null),
    ...Hu({ style: r == null ? void 0 : r.style, theme: e }),
  };
}
function x2({ props: e, stylesCtx: t, themeName: n }) {
  var s;
  const r = He(),
    o = (s = Ib()) == null ? void 0 : s();
  return {
    getTransformedStyles: (a) =>
      o
        ? [
            ...a.map((u) => o(u, { props: e, theme: r, ctx: t })),
            ...n.map((u) => {
              var c;
              return o((c = r.components[u]) == null ? void 0 : c.styles, {
                props: e,
                theme: r,
                ctx: t,
              });
            }),
          ].filter(Boolean)
        : [],
    withStylesTransform: !!o,
  };
}
function U({
  name: e,
  classes: t,
  props: n,
  stylesCtx: r,
  className: o,
  style: i,
  rootSelector: s = "root",
  unstyled: a,
  classNames: l,
  styles: u,
  vars: c,
  varsResolver: d,
}) {
  const f = He(),
    h = Db(),
    v = _b(),
    y = Lb(),
    S = (Array.isArray(e) ? e : [e]).filter((x) => x),
    { withStylesTransform: g, getTransformedStyles: m } = x2({
      props: n,
      stylesCtx: r,
      themeName: S,
    });
  return (x, b) => ({
    className: h2({
      theme: f,
      options: b,
      themeName: S,
      selector: x,
      classNamesPrefix: h,
      classNames: l,
      classes: t,
      unstyled: a,
      className: o,
      rootSelector: s,
      props: n,
      stylesCtx: r,
      withStaticClasses: v,
      headless: y,
      transformedStyles: m([b == null ? void 0 : b.styles, u]),
    }),
    style: v2({
      theme: f,
      themeName: S,
      selector: x,
      options: b,
      props: n,
      stylesCtx: r,
      rootSelector: s,
      styles: u,
      style: i,
      vars: c,
      varsResolver: d,
      headless: y,
      withStylesTransform: g,
    }),
  });
}
function w2(e, t) {
  return typeof e == "boolean" ? e : t.autoContrast;
}
function L(e, t, n) {
  var s;
  const r = He(),
    o = (s = r.components[e]) == null ? void 0 : s.defaultProps,
    i = typeof o == "function" ? o(r) : o;
  return { ...t, ...i, ...jn(n) };
}
function El(e) {
  return fe(e)
    .reduce((t, n) => (e[n] !== void 0 ? `${t}${sb(n)}:${e[n]};` : t), "")
    .trim();
}
function S2({ selector: e, styles: t, media: n, container: r }) {
  const o = t ? El(t) : "",
    i = Array.isArray(n)
      ? n.map((a) => `@media${a.query}{${e}{${El(a.styles)}}}`)
      : [],
    s = Array.isArray(r)
      ? r.map((a) => `@container ${a.query}{${e}{${El(a.styles)}}}`)
      : [];
  return `${o ? `${e}{${o}}` : ""}${i.join("")}${s.join("")}`.trim();
}
function so(e) {
  const t = md();
  return p.jsx("style", {
    "data-mantine-styles": "inline",
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: { __html: S2(e) },
  });
}
function b2(e) {
  const {
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: i,
    ml: s,
    mr: a,
    me: l,
    ms: u,
    p: c,
    px: d,
    py: f,
    pt: h,
    pb: v,
    pl: y,
    pr: S,
    pe: g,
    ps: m,
    bd: x,
    bg: b,
    c: C,
    opacity: k,
    ff: P,
    fz: T,
    fw: M,
    lts: N,
    ta: W,
    lh: G,
    fs: me,
    tt: ge,
    td: xe,
    w: Te,
    miw: Y,
    maw: R,
    h: _,
    mih: $,
    mah: J,
    bgsz: ue,
    bgp: cr,
    bgr: _t,
    bga: vo,
    pos: Lt,
    top: dr,
    left: F1,
    bottom: B1,
    right: U1,
    inset: W1,
    display: H1,
    flex: G1,
    hiddenFrom: Y1,
    visibleFrom: K1,
    lightHidden: X1,
    darkHidden: Q1,
    sx: Z1,
    ...q1
  } = e;
  return {
    styleProps: jn({
      m: t,
      mx: n,
      my: r,
      mt: o,
      mb: i,
      ml: s,
      mr: a,
      me: l,
      ms: u,
      p: c,
      px: d,
      py: f,
      pt: h,
      pb: v,
      pl: y,
      pr: S,
      pe: g,
      ps: m,
      bd: x,
      bg: b,
      c: C,
      opacity: k,
      ff: P,
      fz: T,
      fw: M,
      lts: N,
      ta: W,
      lh: G,
      fs: me,
      tt: ge,
      td: xe,
      w: Te,
      miw: Y,
      maw: R,
      h: _,
      mih: $,
      mah: J,
      bgsz: ue,
      bgp: cr,
      bgr: _t,
      bga: vo,
      pos: Lt,
      top: dr,
      left: F1,
      bottom: B1,
      right: U1,
      inset: W1,
      display: H1,
      flex: G1,
      hiddenFrom: Y1,
      visibleFrom: K1,
      lightHidden: X1,
      darkHidden: Q1,
      sx: Z1,
    }),
    rest: q1,
  };
}
const C2 = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "size", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" },
};
function xd(e, t) {
  const n = Ri({ color: e, theme: t });
  return n.color === "dimmed"
    ? "var(--mantine-color-dimmed)"
    : n.color === "bright"
    ? "var(--mantine-color-bright)"
    : n.variable
    ? `var(${n.variable})`
    : n.color;
}
function T2(e, t) {
  const n = Ri({ color: e, theme: t });
  return n.isThemeColor && n.shade === void 0
    ? `var(--mantine-color-${n.color}-text)`
    : xd(e, t);
}
function P2(e, t) {
  if (typeof e == "number") return E(e);
  if (typeof e == "string") {
    const [n, r, ...o] = e.split(" ").filter((s) => s.trim() !== "");
    let i = `${E(n)}`;
    return (
      r && (i += ` ${r}`),
      o.length > 0 && (i += ` ${xd(o.join(" "), t)}`),
      i.trim()
    );
  }
  return e;
}
const Wp = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)",
};
function k2(e) {
  return typeof e == "string" && e in Wp ? Wp[e] : e;
}
const E2 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function j2(e, t) {
  return typeof e == "string" && e in t.fontSizes
    ? `var(--mantine-font-size-${e})`
    : typeof e == "string" && E2.includes(e)
    ? `var(--mantine-${e}-font-size)`
    : typeof e == "number" || typeof e == "string"
    ? E(e)
    : e;
}
function R2(e) {
  return e;
}
const N2 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function M2(e, t) {
  return typeof e == "string" && e in t.lineHeights
    ? `var(--mantine-line-height-${e})`
    : typeof e == "string" && N2.includes(e)
    ? `var(--mantine-${e}-line-height)`
    : e;
}
function A2(e) {
  return typeof e == "number" ? E(e) : e;
}
function D2(e, t) {
  if (typeof e == "number") return E(e);
  if (typeof e == "string") {
    const n = e.replace("-", "");
    if (!(n in t.spacing)) return E(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return e;
}
const jl = {
  color: xd,
  textColor: T2,
  fontSize: j2,
  spacing: D2,
  identity: R2,
  size: A2,
  lineHeight: M2,
  fontFamily: k2,
  border: P2,
};
function Hp(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function _2({ media: e, ...t }) {
  const r = Object.keys(e)
    .sort((o, i) => Number(Hp(o)) - Number(Hp(i)))
    .map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function L2(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function $2(e) {
  return typeof e == "object" && e !== null
    ? "base" in e
      ? e.base
      : void 0
    : e;
}
function I2(e) {
  return typeof e == "object" && e !== null
    ? fe(e).filter((t) => t !== "base")
    : [];
}
function V2(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function rv({ styleProps: e, data: t, theme: n }) {
  return _2(
    fe(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx") return r;
        const i = t[o],
          s = Array.isArray(i.property) ? i.property : [i.property],
          a = $2(e[o]);
        if (!L2(e[o]))
          return (
            s.forEach((u) => {
              r.inlineStyles[u] = jl[i.type](a, n);
            }),
            r
          );
        r.hasResponsiveStyles = !0;
        const l = I2(e[o]);
        return (
          s.forEach((u) => {
            a && (r.styles[u] = jl[i.type](a, n)),
              l.forEach((c) => {
                const d = `(min-width: ${n.breakpoints[c]})`;
                r.media[d] = { ...r.media[d], [u]: jl[i.type](V2(e[o], c), n) };
              });
          }),
          r
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} }
    )
  );
}
function Ni() {
  return `__m__-${w.useId().replace(/:/g, "")}`;
}
function ov(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function z2(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return (
      r === void 0 || r === "" || r === !1 || r === null || (t[ov(n)] = e[n]), t
    );
  }, {});
}
function iv(e) {
  return e
    ? typeof e == "string"
      ? { [ov(e)]: !0 }
      : Array.isArray(e)
      ? [...e].reduce((t, n) => ({ ...t, ...iv(n) }), {})
      : z2(e)
    : null;
}
function Gu(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...Gu(r, t) }), {})
    : typeof e == "function"
    ? e(t)
    : e ?? {};
}
function O2({ theme: e, style: t, vars: n, styleProps: r }) {
  const o = Gu(t, e),
    i = Gu(n, e);
  return { ...o, ...i, ...r };
}
const sv = w.forwardRef(
  (
    {
      component: e,
      style: t,
      __vars: n,
      className: r,
      variant: o,
      mod: i,
      size: s,
      hiddenFrom: a,
      visibleFrom: l,
      lightHidden: u,
      darkHidden: c,
      renderRoot: d,
      __size: f,
      ...h
    },
    v
  ) => {
    var T;
    const y = He(),
      S = e || "div",
      { styleProps: g, rest: m } = b2(h),
      x = $b(),
      b = (T = x == null ? void 0 : x()) == null ? void 0 : T(g.sx),
      C = Ni(),
      k = rv({ styleProps: g, theme: y, data: C2 }),
      P = {
        ref: v,
        style: O2({ theme: y, style: t, vars: n, styleProps: k.inlineStyles }),
        className: We(r, b, {
          [C]: k.hasResponsiveStyles,
          "mantine-light-hidden": u,
          "mantine-dark-hidden": c,
          [`mantine-hidden-from-${a}`]: a,
          [`mantine-visible-from-${l}`]: l,
        }),
        "data-variant": o,
        "data-size": By(s) ? void 0 : s || void 0,
        size: f,
        ...iv(i),
        ...m,
      };
    return p.jsxs(p.Fragment, {
      children: [
        k.hasResponsiveStyles &&
          p.jsx(so, { selector: `.${C}`, styles: k.styles, media: k.media }),
        typeof d == "function" ? d(P) : p.jsx(S, { ...P }),
      ],
    });
  }
);
sv.displayName = "@mantine/core/Box";
const D = sv;
function av(e) {
  return e;
}
function z(e) {
  const t = w.forwardRef(e);
  return (
    (t.extend = av),
    (t.withProps = (n) => {
      const r = w.forwardRef((o, i) => p.jsx(t, { ...n, ...o, ref: i }));
      return (
        (r.extend = t.extend),
        (r.displayName = `WithProps(${t.displayName})`),
        r
      );
    }),
    t
  );
}
function ut(e) {
  const t = w.forwardRef(e);
  return (
    (t.withProps = (n) => {
      const r = w.forwardRef((o, i) => p.jsx(t, { ...n, ...o, ref: i }));
      return (
        (r.extend = t.extend),
        (r.displayName = `WithProps(${t.displayName})`),
        r
      );
    }),
    (t.extend = av),
    t
  );
}
const F2 = w.createContext({
  dir: "ltr",
  toggleDirection: () => {},
  setDirection: () => {},
});
function lv() {
  return w.useContext(F2);
}
function B2(e) {
  return w.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              typeof n == "function" ? n(t) : n != null && (n.current = t);
            });
          },
    e
  );
}
const [U2, ct] = Rn("ScrollArea.Root component was not found in tree");
function qr(e, t) {
  const n = On(t);
  ji(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
const W2 = w.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = ct(),
      [i, s] = w.useState(0),
      [a, l] = w.useState(0),
      u = !!(i && a);
    return (
      qr(o.scrollbarX, () => {
        var d;
        const c = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
        o.onCornerHeightChange(c), l(c);
      }),
      qr(o.scrollbarY, () => {
        var d;
        const c = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
        o.onCornerWidthChange(c), s(c);
      }),
      u
        ? p.jsx("div", { ...r, ref: t, style: { ...n, width: i, height: a } })
        : null
    );
  }),
  H2 = w.forwardRef((e, t) => {
    const n = ct(),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? p.jsx(W2, { ...e, ref: t }) : null;
  }),
  G2 = { scrollHideDelay: 1e3, type: "hover" },
  uv = w.forwardRef((e, t) => {
    const n = L("ScrollAreaRoot", G2, e),
      { type: r, scrollHideDelay: o, scrollbars: i, ...s } = n,
      [a, l] = w.useState(null),
      [u, c] = w.useState(null),
      [d, f] = w.useState(null),
      [h, v] = w.useState(null),
      [y, S] = w.useState(null),
      [g, m] = w.useState(0),
      [x, b] = w.useState(0),
      [C, k] = w.useState(!1),
      [P, T] = w.useState(!1),
      M = ar(t, (N) => l(N));
    return p.jsx(U2, {
      value: {
        type: r,
        scrollHideDelay: o,
        scrollArea: a,
        viewport: u,
        onViewportChange: c,
        content: d,
        onContentChange: f,
        scrollbarX: h,
        onScrollbarXChange: v,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: k,
        scrollbarY: y,
        onScrollbarYChange: S,
        scrollbarYEnabled: P,
        onScrollbarYEnabledChange: T,
        onCornerWidthChange: m,
        onCornerHeightChange: b,
      },
      children: p.jsx(D, {
        ...s,
        ref: M,
        __vars: {
          "--sa-corner-width": i !== "xy" ? "0px" : `${g}px`,
          "--sa-corner-height": i !== "xy" ? "0px" : `${x}px`,
        },
      }),
    });
  });
uv.displayName = "@mantine/core/ScrollAreaRoot";
function cv(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function Ea(e) {
  const t = cv(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function dv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Y2(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Gp(e, t, n = "ltr") {
  const r = Ea(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    i = t.scrollbar.size - o,
    s = t.content - t.viewport,
    a = i - r,
    l = n === "ltr" ? [0, s] : [s * -1, 0],
    u = Y2(e, l);
  return dv([0, s], [0, a])(u);
}
function K2(e, t, n, r = "ltr") {
  const o = Ea(n),
    i = o / 2,
    s = t || i,
    a = o - s,
    l = n.scrollbar.paddingStart + s,
    u = n.scrollbar.size - n.scrollbar.paddingEnd - a,
    c = n.content - n.viewport,
    d = r === "ltr" ? [0, c] : [c * -1, 0];
  return dv([l, u], d)(e);
}
function fv(e, t) {
  return e > 0 && e < t;
}
function qs(e) {
  return e ? parseInt(e, 10) : 0;
}
function Xn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [X2, pv] = Rn("ScrollAreaScrollbar was not found in tree"),
  hv = w.forwardRef((e, t) => {
    const {
        sizes: n,
        hasThumb: r,
        onThumbChange: o,
        onThumbPointerUp: i,
        onThumbPointerDown: s,
        onThumbPositionChange: a,
        onDragScroll: l,
        onWheelScroll: u,
        onResize: c,
        ...d
      } = e,
      f = ct(),
      [h, v] = w.useState(null),
      y = ar(t, (T) => v(T)),
      S = w.useRef(null),
      g = w.useRef(""),
      { viewport: m } = f,
      x = n.content - n.viewport,
      b = On(u),
      C = On(a),
      k = Pa(c, 10),
      P = (T) => {
        if (S.current) {
          const M = T.clientX - S.current.left,
            N = T.clientY - S.current.top;
          l({ x: M, y: N });
        }
      };
    return (
      w.useEffect(() => {
        const T = (M) => {
          const N = M.target;
          (h == null ? void 0 : h.contains(N)) && b(M, x);
        };
        return (
          document.addEventListener("wheel", T, { passive: !1 }),
          () => document.removeEventListener("wheel", T, { passive: !1 })
        );
      }, [m, h, x, b]),
      w.useEffect(C, [n, C]),
      qr(h, k),
      qr(f.content, k),
      p.jsx(X2, {
        value: {
          scrollbar: h,
          hasThumb: r,
          onThumbChange: On(o),
          onThumbPointerUp: On(i),
          onThumbPositionChange: C,
          onThumbPointerDown: On(s),
        },
        children: p.jsx("div", {
          ...d,
          ref: y,
          "data-mantine-scrollbar": !0,
          style: { position: "absolute", ...d.style },
          onPointerDown: Xn(e.onPointerDown, (T) => {
            T.preventDefault(),
              T.button === 0 &&
                (T.target.setPointerCapture(T.pointerId),
                (S.current = h.getBoundingClientRect()),
                (g.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = "none"),
                P(T));
          }),
          onPointerMove: Xn(e.onPointerMove, P),
          onPointerUp: Xn(e.onPointerUp, (T) => {
            const M = T.target;
            M.hasPointerCapture(T.pointerId) &&
              (T.preventDefault(), M.releasePointerCapture(T.pointerId));
          }),
          onLostPointerCapture: () => {
            (document.body.style.webkitUserSelect = g.current),
              (S.current = null);
          },
        }),
      })
    );
  }),
  mv = w.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e,
      s = ct(),
      [a, l] = w.useState(),
      u = w.useRef(null),
      c = ar(t, u, s.onScrollbarXChange);
    return (
      w.useEffect(() => {
        u.current && l(getComputedStyle(u.current));
      }, [u]),
      p.jsx(hv, {
        "data-orientation": "horizontal",
        ...i,
        ref: c,
        sizes: n,
        style: { ...o, "--sa-thumb-width": `${Ea(n)}px` },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const h = s.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(h), fv(h, f) && d.preventDefault();
          }
        },
        onResize: () => {
          u.current &&
            s.viewport &&
            a &&
            r({
              content: s.viewport.scrollWidth,
              viewport: s.viewport.offsetWidth,
              scrollbar: {
                size: u.current.clientWidth,
                paddingStart: qs(a.paddingLeft),
                paddingEnd: qs(a.paddingRight),
              },
            });
        },
      })
    );
  });
mv.displayName = "@mantine/core/ScrollAreaScrollbarX";
const gv = w.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, style: o, ...i } = e,
    s = ct(),
    [a, l] = w.useState(),
    u = w.useRef(null),
    c = ar(t, u, s.onScrollbarYChange);
  return (
    w.useEffect(() => {
      u.current && l(window.getComputedStyle(u.current));
    }, []),
    p.jsx(hv, {
      ...i,
      "data-orientation": "vertical",
      ref: c,
      sizes: n,
      style: { "--sa-thumb-height": `${Ea(n)}px`, ...o },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (s.viewport) {
          const h = s.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(h), fv(h, f) && d.preventDefault();
        }
      },
      onResize: () => {
        u.current &&
          s.viewport &&
          a &&
          r({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: u.current.clientHeight,
              paddingStart: qs(a.paddingTop),
              paddingEnd: qs(a.paddingBottom),
            },
          });
      },
    })
  );
});
gv.displayName = "@mantine/core/ScrollAreaScrollbarY";
const ja = w.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e,
    { dir: o } = lv(),
    i = ct(),
    s = w.useRef(null),
    a = w.useRef(0),
    [l, u] = w.useState({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
    }),
    c = cv(l.viewport, l.content),
    d = {
      ...r,
      sizes: l,
      onSizesChange: u,
      hasThumb: c > 0 && c < 1,
      onThumbChange: (h) => {
        s.current = h;
      },
      onThumbPointerUp: () => {
        a.current = 0;
      },
      onThumbPointerDown: (h) => {
        a.current = h;
      },
    },
    f = (h, v) => K2(h, a.current, l, v);
  return n === "horizontal"
    ? p.jsx(mv, {
        ...d,
        ref: t,
        onThumbPositionChange: () => {
          if (i.viewport && s.current) {
            const h = i.viewport.scrollLeft,
              v = Gp(h, l, o);
            s.current.style.transform = `translate3d(${v}px, 0, 0)`;
          }
        },
        onWheelScroll: (h) => {
          i.viewport && (i.viewport.scrollLeft = h);
        },
        onDragScroll: (h) => {
          i.viewport && (i.viewport.scrollLeft = f(h, o));
        },
      })
    : n === "vertical"
    ? p.jsx(gv, {
        ...d,
        ref: t,
        onThumbPositionChange: () => {
          if (i.viewport && s.current) {
            const h = i.viewport.scrollTop,
              v = Gp(h, l);
            l.scrollbar.size === 0
              ? s.current.style.setProperty("--thumb-opacity", "0")
              : s.current.style.setProperty("--thumb-opacity", "1"),
              (s.current.style.transform = `translate3d(0, ${v}px, 0)`);
          }
        },
        onWheelScroll: (h) => {
          i.viewport && (i.viewport.scrollTop = h);
        },
        onDragScroll: (h) => {
          i.viewport && (i.viewport.scrollTop = f(h));
        },
      })
    : null;
});
ja.displayName = "@mantine/core/ScrollAreaScrollbarVisible";
const wd = w.forwardRef((e, t) => {
  const n = ct(),
    { forceMount: r, ...o } = e,
    [i, s] = w.useState(!1),
    a = e.orientation === "horizontal",
    l = Pa(() => {
      if (n.viewport) {
        const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
          c = n.viewport.offsetHeight < n.viewport.scrollHeight;
        s(a ? u : c);
      }
    }, 10);
  return (
    qr(n.viewport, l),
    qr(n.content, l),
    r || i
      ? p.jsx(ja, { "data-state": i ? "visible" : "hidden", ...o, ref: t })
      : null
  );
});
wd.displayName = "@mantine/core/ScrollAreaScrollbarAuto";
const yv = w.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e,
    o = ct(),
    [i, s] = w.useState(!1);
  return (
    w.useEffect(() => {
      const { scrollArea: a } = o;
      let l = 0;
      if (a) {
        const u = () => {
            window.clearTimeout(l), s(!0);
          },
          c = () => {
            l = window.setTimeout(() => s(!1), o.scrollHideDelay);
          };
        return (
          a.addEventListener("pointerenter", u),
          a.addEventListener("pointerleave", c),
          () => {
            window.clearTimeout(l),
              a.removeEventListener("pointerenter", u),
              a.removeEventListener("pointerleave", c);
          }
        );
      }
    }, [o.scrollArea, o.scrollHideDelay]),
    n || i
      ? p.jsx(wd, { "data-state": i ? "visible" : "hidden", ...r, ref: t })
      : null
  );
});
yv.displayName = "@mantine/core/ScrollAreaScrollbarHover";
const Q2 = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = ct(),
      i = e.orientation === "horizontal",
      [s, a] = w.useState("hidden"),
      l = Pa(() => a("idle"), 100);
    return (
      w.useEffect(() => {
        if (s === "idle") {
          const u = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
          return () => window.clearTimeout(u);
        }
      }, [s, o.scrollHideDelay]),
      w.useEffect(() => {
        const { viewport: u } = o,
          c = i ? "scrollLeft" : "scrollTop";
        if (u) {
          let d = u[c];
          const f = () => {
            const h = u[c];
            d !== h && (a("scrolling"), l()), (d = h);
          };
          return (
            u.addEventListener("scroll", f),
            () => u.removeEventListener("scroll", f)
          );
        }
      }, [o.viewport, i, l]),
      n || s !== "hidden"
        ? p.jsx(ja, {
            "data-state": s === "hidden" ? "hidden" : "visible",
            ...r,
            ref: t,
            onPointerEnter: Xn(e.onPointerEnter, () => a("interacting")),
            onPointerLeave: Xn(e.onPointerLeave, () => a("idle")),
          })
        : null
    );
  }),
  Yu = w.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = ct(),
      { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o,
      a = e.orientation === "horizontal";
    return (
      w.useEffect(
        () => (
          a ? i(!0) : s(!0),
          () => {
            a ? i(!1) : s(!1);
          }
        ),
        [a, i, s]
      ),
      o.type === "hover"
        ? p.jsx(yv, { ...r, ref: t, forceMount: n })
        : o.type === "scroll"
        ? p.jsx(Q2, { ...r, ref: t, forceMount: n })
        : o.type === "auto"
        ? p.jsx(wd, { ...r, ref: t, forceMount: n })
        : o.type === "always"
        ? p.jsx(ja, { ...r, ref: t })
        : null
    );
  });
Yu.displayName = "@mantine/core/ScrollAreaScrollbar";
function Z2(e, t = () => {}) {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function o() {
      const i = { left: e.scrollLeft, top: e.scrollTop },
        s = n.left !== i.left,
        a = n.top !== i.top;
      (s || a) && t(), (n = i), (r = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(r)
  );
}
const vv = w.forwardRef((e, t) => {
  const { style: n, ...r } = e,
    o = ct(),
    i = pv(),
    { onThumbPositionChange: s } = i,
    a = ar(t, (c) => i.onThumbChange(c)),
    l = w.useRef(void 0),
    u = Pa(() => {
      l.current && (l.current(), (l.current = void 0));
    }, 100);
  return (
    w.useEffect(() => {
      const { viewport: c } = o;
      if (c) {
        const d = () => {
          if ((u(), !l.current)) {
            const f = Z2(c, s);
            (l.current = f), s();
          }
        };
        return (
          s(),
          c.addEventListener("scroll", d),
          () => c.removeEventListener("scroll", d)
        );
      }
    }, [o.viewport, u, s]),
    p.jsx("div", {
      "data-state": i.hasThumb ? "visible" : "hidden",
      ...r,
      ref: a,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...n,
      },
      onPointerDownCapture: Xn(e.onPointerDownCapture, (c) => {
        const f = c.target.getBoundingClientRect(),
          h = c.clientX - f.left,
          v = c.clientY - f.top;
        i.onThumbPointerDown({ x: h, y: v });
      }),
      onPointerUp: Xn(e.onPointerUp, i.onThumbPointerUp),
    })
  );
});
vv.displayName = "@mantine/core/ScrollAreaThumb";
const Ku = w.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e,
    o = pv();
  return n || o.hasThumb ? p.jsx(vv, { ref: t, ...r }) : null;
});
Ku.displayName = "@mantine/core/ScrollAreaThumb";
const xv = w.forwardRef(({ children: e, style: t, ...n }, r) => {
  const o = ct(),
    i = ar(r, o.onViewportChange);
  return p.jsx(D, {
    ...n,
    ref: i,
    style: {
      overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
      ...t,
    },
    children: p.jsx("div", {
      style: { minWidth: "100%" },
      ref: o.onContentChange,
      children: e,
    }),
  });
});
xv.displayName = "@mantine/core/ScrollAreaViewport";
var Sd = {
  root: "m_d57069b5",
  viewport: "m_c0783ff9",
  viewportInner: "m_f8f631dd",
  scrollbar: "m_c44ba933",
  thumb: "m_d8b5e363",
  corner: "m_21657268",
};
const wv = { scrollHideDelay: 1e3, type: "hover", scrollbars: "xy" },
  q2 = (e, { scrollbarSize: t, overscrollBehavior: n }) => ({
    root: {
      "--scrollarea-scrollbar-size": E(t),
      "--scrollarea-over-scroll-behavior": n,
    },
  }),
  Mi = z((e, t) => {
    const n = L("ScrollArea", wv, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        scrollbarSize: l,
        vars: u,
        type: c,
        scrollHideDelay: d,
        viewportProps: f,
        viewportRef: h,
        onScrollPositionChange: v,
        children: y,
        offsetScrollbars: S,
        scrollbars: g,
        onBottomReached: m,
        onTopReached: x,
        overscrollBehavior: b,
        ...C
      } = n,
      [k, P] = w.useState(!1),
      [T, M] = w.useState(!1),
      [N, W] = w.useState(!1),
      G = U({
        name: "ScrollArea",
        props: n,
        classes: Sd,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: u,
        varsResolver: q2,
      }),
      me = w.useRef(null),
      ge = B2([h, me]);
    return (
      w.useEffect(() => {
        if (!me.current || S !== "present") return;
        const xe = me.current,
          Te = new ResizeObserver(() => {
            const {
              scrollHeight: Y,
              clientHeight: R,
              scrollWidth: _,
              clientWidth: $,
            } = xe;
            M(Y > R), W(_ > $);
          });
        return Te.observe(xe), () => Te.disconnect();
      }, [me, S]),
      p.jsxs(uv, {
        type: c === "never" ? "always" : c,
        scrollHideDelay: d,
        ref: t,
        scrollbars: g,
        ...G("root"),
        ...C,
        children: [
          p.jsx(xv, {
            ...f,
            ...G("viewport", { style: f == null ? void 0 : f.style }),
            ref: ge,
            "data-offset-scrollbars": S === !0 ? "xy" : S || void 0,
            "data-scrollbars": g || void 0,
            "data-horizontal-hidden": S === "present" && !N ? "true" : void 0,
            "data-vertical-hidden": S === "present" && !T ? "true" : void 0,
            onScroll: (xe) => {
              var _;
              (_ = f == null ? void 0 : f.onScroll) == null || _.call(f, xe),
                v == null ||
                  v({
                    x: xe.currentTarget.scrollLeft,
                    y: xe.currentTarget.scrollTop,
                  });
              const {
                scrollTop: Te,
                scrollHeight: Y,
                clientHeight: R,
              } = xe.currentTarget;
              Te - (Y - R) >= -0.6 && (m == null || m()),
                Te === 0 && (x == null || x());
            },
            children: y,
          }),
          (g === "xy" || g === "x") &&
            p.jsx(Yu, {
              ...G("scrollbar"),
              orientation: "horizontal",
              "data-hidden":
                c === "never" || (S === "present" && !N) ? !0 : void 0,
              forceMount: !0,
              onMouseEnter: () => P(!0),
              onMouseLeave: () => P(!1),
              children: p.jsx(Ku, { ...G("thumb") }),
            }),
          (g === "xy" || g === "y") &&
            p.jsx(Yu, {
              ...G("scrollbar"),
              orientation: "vertical",
              "data-hidden":
                c === "never" || (S === "present" && !T) ? !0 : void 0,
              forceMount: !0,
              onMouseEnter: () => P(!0),
              onMouseLeave: () => P(!1),
              children: p.jsx(Ku, { ...G("thumb") }),
            }),
          p.jsx(H2, {
            ...G("corner"),
            "data-hovered": k || void 0,
            "data-hidden": c === "never" || void 0,
          }),
        ],
      })
    );
  });
Mi.displayName = "@mantine/core/ScrollArea";
const bd = z((e, t) => {
  const {
    children: n,
    classNames: r,
    styles: o,
    scrollbarSize: i,
    scrollHideDelay: s,
    type: a,
    dir: l,
    offsetScrollbars: u,
    viewportRef: c,
    onScrollPositionChange: d,
    unstyled: f,
    variant: h,
    viewportProps: v,
    scrollbars: y,
    style: S,
    vars: g,
    onBottomReached: m,
    onTopReached: x,
    ...b
  } = L("ScrollAreaAutosize", wv, e);
  return p.jsx(D, {
    ...b,
    ref: t,
    style: [{ display: "flex", overflow: "auto" }, S],
    children: p.jsx(D, {
      style: { display: "flex", flexDirection: "column", flex: 1 },
      children: p.jsx(Mi, {
        classNames: r,
        styles: o,
        scrollHideDelay: s,
        scrollbarSize: i,
        type: a,
        dir: l,
        offsetScrollbars: u,
        viewportRef: c,
        onScrollPositionChange: d,
        unstyled: f,
        variant: h,
        viewportProps: v,
        vars: g,
        scrollbars: y,
        onBottomReached: m,
        onTopReached: x,
        children: n,
      }),
    }),
  });
});
Mi.classes = Sd;
bd.displayName = "@mantine/core/ScrollAreaAutosize";
bd.classes = Sd;
Mi.Autosize = bd;
var Sv = { root: "m_87cf2631" };
const J2 = { __staticSelector: "UnstyledButton" },
  ao = ut((e, t) => {
    const n = L("UnstyledButton", J2, e),
      {
        className: r,
        component: o = "button",
        __staticSelector: i,
        unstyled: s,
        classNames: a,
        styles: l,
        style: u,
        ...c
      } = n,
      d = U({
        name: i,
        props: n,
        classes: Sv,
        className: r,
        style: u,
        classNames: a,
        styles: l,
        unstyled: s,
      });
    return p.jsx(D, {
      ...d("root", { focusable: !0 }),
      component: o,
      ref: t,
      type: o === "button" ? "button" : void 0,
      ...c,
    });
  });
ao.classes = Sv;
ao.displayName = "@mantine/core/UnstyledButton";
var bv = { root: "m_515a97f8" };
const eC = {},
  Cd = z((e, t) => {
    const n = L("VisuallyHidden", eC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        ...u
      } = n,
      c = U({
        name: "VisuallyHidden",
        classes: bv,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
      });
    return p.jsx(D, { component: "span", ref: t, ...c("root"), ...u });
  });
Cd.classes = bv;
Cd.displayName = "@mantine/core/VisuallyHidden";
var Cv = { root: "m_1b7284a3" };
const tC = {},
  nC = (e, { radius: t, shadow: n }) => ({
    root: {
      "--paper-radius": t === void 0 ? void 0 : lt(t),
      "--paper-shadow": Wy(n),
    },
  }),
  Ra = ut((e, t) => {
    const n = L("Paper", tC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        withBorder: l,
        vars: u,
        radius: c,
        shadow: d,
        variant: f,
        mod: h,
        ...v
      } = n,
      y = U({
        name: "Paper",
        props: n,
        classes: Cv,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: u,
        varsResolver: nC,
      });
    return p.jsx(D, {
      ref: t,
      mod: [{ "data-with-border": l }, h],
      ...y("root"),
      variant: f,
      ...v,
    });
  });
Ra.classes = Cv;
Ra.displayName = "@mantine/core/Paper";
var Tv = { root: "m_9814e45f" };
const rC = { zIndex: sr("modal") },
  oC = (
    e,
    {
      gradient: t,
      color: n,
      backgroundOpacity: r,
      blur: o,
      radius: i,
      zIndex: s,
    }
  ) => ({
    root: {
      "--overlay-bg":
        t ||
        ((n !== void 0 || r !== void 0) && kt(n || "#000", r ?? 0.6)) ||
        void 0,
      "--overlay-filter": o ? `blur(${E(o)})` : void 0,
      "--overlay-radius": i === void 0 ? void 0 : lt(i),
      "--overlay-z-index": s == null ? void 0 : s.toString(),
    },
  }),
  Td = ut((e, t) => {
    const n = L("Overlay", rC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        fixed: u,
        center: c,
        children: d,
        radius: f,
        zIndex: h,
        gradient: v,
        blur: y,
        color: S,
        backgroundOpacity: g,
        mod: m,
        ...x
      } = n,
      b = U({
        name: "Overlay",
        props: n,
        classes: Tv,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: oC,
      });
    return p.jsx(D, {
      ref: t,
      ...b("root"),
      mod: [{ center: c, fixed: u }, m],
      ...x,
      children: d,
    });
  });
Td.classes = Tv;
Td.displayName = "@mantine/core/Overlay";
function Rl(e) {
  const t = document.createElement("div");
  return (
    t.setAttribute("data-portal", "true"),
    typeof e.className == "string" &&
      t.classList.add(...e.className.split(" ").filter(Boolean)),
    typeof e.style == "object" && Object.assign(t.style, e.style),
    typeof e.id == "string" && t.setAttribute("id", e.id),
    t
  );
}
function iC({ target: e, reuseTargetNode: t, ...n }) {
  if (e) return typeof e == "string" ? document.querySelector(e) || Rl(n) : e;
  if (t) {
    const r = document.querySelector("[data-mantine-shared-portal-node]");
    if (r) return r;
    const o = Rl(n);
    return (
      o.setAttribute("data-mantine-shared-portal-node", "true"),
      document.body.appendChild(o),
      o
    );
  }
  return Rl(n);
}
const sC = {},
  Pv = z((e, t) => {
    const {
        children: n,
        target: r,
        reuseTargetNode: o,
        ...i
      } = L("Portal", sC, e),
      [s, a] = w.useState(!1),
      l = w.useRef(null);
    return (
      ji(
        () => (
          a(!0),
          (l.current = iC({ target: r, reuseTargetNode: o, ...i })),
          Uu(t, l.current),
          !r && !o && l.current && document.body.appendChild(l.current),
          () => {
            !r && !o && l.current && document.body.removeChild(l.current);
          }
        ),
        [r]
      ),
      !s || !l.current
        ? null
        : cd.createPortal(p.jsx(p.Fragment, { children: n }), l.current)
    );
  });
Pv.displayName = "@mantine/core/Portal";
const Pd = z(({ withinPortal: e = !0, children: t, ...n }, r) =>
  Zy() === "test" || !e
    ? p.jsx(p.Fragment, { children: t })
    : p.jsx(Pv, { ref: r, ...n, children: t })
);
Pd.displayName = "@mantine/core/OptionalPortal";
const Ro = (e) => ({
    in: { opacity: 1, transform: "scale(1)" },
    out: {
      opacity: 0,
      transform: `scale(.9) translateY(${e === "bottom" ? 10 : -10}px)`,
    },
    transitionProperty: "transform, opacity",
  }),
  is = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: "opacity",
    },
    "fade-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-30px)" },
      transitionProperty: "opacity, transform",
    },
    scale: {
      in: { opacity: 1, transform: "scale(1)" },
      out: { opacity: 0, transform: "scale(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity",
    },
    pop: { ...Ro("bottom"), common: { transformOrigin: "center center" } },
    "pop-bottom-left": {
      ...Ro("bottom"),
      common: { transformOrigin: "bottom left" },
    },
    "pop-bottom-right": {
      ...Ro("bottom"),
      common: { transformOrigin: "bottom right" },
    },
    "pop-top-left": { ...Ro("top"), common: { transformOrigin: "top left" } },
    "pop-top-right": { ...Ro("top"), common: { transformOrigin: "top right" } },
  },
  Yp = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out",
  };
function aC({ transition: e, state: t, duration: n, timingFunction: r }) {
  const o = {
    WebkitBackfaceVisibility: "hidden",
    willChange: "transform, opacity",
    transitionDuration: `${n}ms`,
    transitionTimingFunction: r,
  };
  return typeof e == "string"
    ? e in is
      ? {
          transitionProperty: is[e].transitionProperty,
          ...o,
          ...is[e].common,
          ...is[e][Yp[t]],
        }
      : {}
    : {
        transitionProperty: e.transitionProperty,
        ...o,
        ...e.common,
        ...e[Yp[t]],
      };
}
function lC({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: s,
  onExited: a,
  enterDelay: l,
  exitDelay: u,
}) {
  const c = He(),
    d = hd(),
    f = c.respectReducedMotion ? d : !1,
    [h, v] = w.useState(f ? 0 : e),
    [y, S] = w.useState(r ? "entered" : "exited"),
    g = w.useRef(-1),
    m = w.useRef(-1),
    x = w.useRef(-1);
  function b() {
    window.clearTimeout(g.current),
      window.clearTimeout(m.current),
      cancelAnimationFrame(x.current);
  }
  const C = (P) => {
      b();
      const T = P ? o : i,
        M = P ? s : a,
        N = f ? 0 : P ? e : t;
      v(N),
        N === 0
          ? (typeof T == "function" && T(),
            typeof M == "function" && M(),
            S(P ? "entered" : "exited"))
          : (x.current = requestAnimationFrame(() => {
              Lo.flushSync(() => {
                S(P ? "pre-entering" : "pre-exiting");
              }),
                (x.current = requestAnimationFrame(() => {
                  typeof T == "function" && T(),
                    S(P ? "entering" : "exiting"),
                    (g.current = window.setTimeout(() => {
                      typeof M == "function" && M(),
                        S(P ? "entered" : "exited");
                    }, N));
                }));
            }));
    },
    k = (P) => {
      if ((b(), typeof (P ? l : u) != "number")) {
        C(P);
        return;
      }
      m.current = window.setTimeout(
        () => {
          C(P);
        },
        P ? l : u
      );
    };
  return (
    pd(() => {
      k(r);
    }, [r]),
    w.useEffect(
      () => () => {
        b();
      },
      []
    ),
    {
      transitionDuration: h,
      transitionStatus: y,
      transitionTimingFunction: n || "ease",
    }
  );
}
function Ai({
  keepMounted: e,
  transition: t = "fade",
  duration: n = 250,
  exitDuration: r = n,
  mounted: o,
  children: i,
  timingFunction: s = "ease",
  onExit: a,
  onEntered: l,
  onEnter: u,
  onExited: c,
  enterDelay: d,
  exitDelay: f,
}) {
  const h = Zy(),
    {
      transitionDuration: v,
      transitionStatus: y,
      transitionTimingFunction: S,
    } = lC({
      mounted: o,
      exitDuration: r,
      duration: n,
      timingFunction: s,
      onExit: a,
      onEntered: l,
      onEnter: u,
      onExited: c,
      enterDelay: d,
      exitDelay: f,
    });
  return v === 0 || h === "test"
    ? o
      ? p.jsx(p.Fragment, { children: i({}) })
      : e
      ? i({ display: "none" })
      : null
    : y === "exited"
    ? e
      ? i({ display: "none" })
      : null
    : p.jsx(p.Fragment, {
        children: i(
          aC({ transition: t, duration: v, state: y, timingFunction: S })
        ),
      });
}
Ai.displayName = "@mantine/core/Transition";
function kd({ children: e, active: t = !0, refProp: n = "ref", innerRef: r }) {
  const o = Sb(t),
    i = ar(o, r);
  return lb(e) ? w.cloneElement(e, { [n]: i }) : e;
}
function kv(e) {
  return p.jsx(Cd, { tabIndex: -1, "data-autofocus": !0, ...e });
}
kd.displayName = "@mantine/core/FocusTrap";
kv.displayName = "@mantine/core/FocusTrapInitialFocus";
kd.InitialFocus = kv;
var xt = {
  root: "m_5ae2e3c",
  barsLoader: "m_7a2bd4cd",
  bar: "m_870bb79",
  "bars-loader-animation": "m_5d2b3b9d",
  dotsLoader: "m_4e3f22d7",
  dot: "m_870c4af",
  "loader-dots-animation": "m_aac34a1",
  ovalLoader: "m_b34414df",
  "oval-loader-animation": "m_f8e89c4b",
};
const Ev = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsxs(D, {
    component: "span",
    className: We(xt.barsLoader, e),
    ...t,
    ref: n,
    children: [
      p.jsx("span", { className: xt.bar }),
      p.jsx("span", { className: xt.bar }),
      p.jsx("span", { className: xt.bar }),
    ],
  })
);
Ev.displayName = "@mantine/core/Bars";
const jv = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsxs(D, {
    component: "span",
    className: We(xt.dotsLoader, e),
    ...t,
    ref: n,
    children: [
      p.jsx("span", { className: xt.dot }),
      p.jsx("span", { className: xt.dot }),
      p.jsx("span", { className: xt.dot }),
    ],
  })
);
jv.displayName = "@mantine/core/Dots";
const Rv = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(D, { component: "span", className: We(xt.ovalLoader, e), ...t, ref: n })
);
Rv.displayName = "@mantine/core/Oval";
const Nv = { bars: Ev, oval: Rv, dots: jv },
  uC = { loaders: Nv, type: "oval" },
  cC = (e, { size: t, color: n }) => ({
    root: {
      "--loader-size": se(t, "loader-size"),
      "--loader-color": n ? bn(n, e) : void 0,
    },
  }),
  lo = z((e, t) => {
    const n = L("Loader", uC, e),
      {
        size: r,
        color: o,
        type: i,
        vars: s,
        className: a,
        style: l,
        classNames: u,
        styles: c,
        unstyled: d,
        loaders: f,
        variant: h,
        children: v,
        ...y
      } = n,
      S = U({
        name: "Loader",
        props: n,
        classes: xt,
        className: a,
        style: l,
        classNames: u,
        styles: c,
        unstyled: d,
        vars: s,
        varsResolver: cC,
      });
    return v
      ? p.jsx(D, { ...S("root"), ref: t, ...y, children: v })
      : p.jsx(D, {
          ...S("root"),
          ref: t,
          component: f[i],
          variant: h,
          size: r,
          ...y,
        });
  });
lo.defaultLoaders = Nv;
lo.classes = xt;
lo.displayName = "@mantine/core/Loader";
var uo = {
  root: "m_8d3f4000",
  icon: "m_8d3afb97",
  loader: "m_302b9fb1",
  group: "m_1a0f1b21",
  groupSection: "m_437b6484",
};
const Kp = { orientation: "horizontal" },
  dC = (e, { borderWidth: t }) => ({ group: { "--ai-border-width": E(t) } }),
  Ed = z((e, t) => {
    const n = L("ActionIconGroup", Kp, e),
      {
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: a,
        orientation: l,
        vars: u,
        borderWidth: c,
        variant: d,
        mod: f,
        ...h
      } = L("ActionIconGroup", Kp, e),
      v = U({
        name: "ActionIconGroup",
        props: n,
        classes: uo,
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: a,
        vars: u,
        varsResolver: dC,
        rootSelector: "group",
      });
    return p.jsx(D, {
      ...v("group"),
      ref: t,
      variant: d,
      mod: [{ "data-orientation": l }, f],
      role: "group",
      ...h,
    });
  });
Ed.classes = uo;
Ed.displayName = "@mantine/core/ActionIconGroup";
const Xp = {},
  fC = (
    e,
    { radius: t, color: n, gradient: r, variant: o, autoContrast: i, size: s }
  ) => {
    const a = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      gradient: r,
      variant: o || "filled",
      autoContrast: i,
    });
    return {
      groupSection: {
        "--section-height": se(s, "section-height"),
        "--section-padding-x": se(s, "section-padding-x"),
        "--section-fz": rr(s),
        "--section-radius": t === void 0 ? void 0 : lt(t),
        "--section-bg": n || o ? a.background : void 0,
        "--section-color": a.color,
        "--section-bd": n || o ? a.border : void 0,
      },
    };
  },
  jd = z((e, t) => {
    const n = L("ActionIconGroupSection", Xp, e),
      {
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: a,
        vars: l,
        variant: u,
        gradient: c,
        radius: d,
        autoContrast: f,
        ...h
      } = L("ActionIconGroupSection", Xp, e),
      v = U({
        name: "ActionIconGroupSection",
        props: n,
        classes: uo,
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: fC,
        rootSelector: "groupSection",
      });
    return p.jsx(D, { ...v("groupSection"), ref: t, variant: u, ...h });
  });
jd.classes = uo;
jd.displayName = "@mantine/core/ActionIconGroupSection";
const pC = {},
  hC = (
    e,
    { size: t, radius: n, variant: r, gradient: o, color: i, autoContrast: s }
  ) => {
    const a = e.variantColorResolver({
      color: i || e.primaryColor,
      theme: e,
      gradient: o,
      variant: r || "filled",
      autoContrast: s,
    });
    return {
      root: {
        "--ai-size": se(t, "ai-size"),
        "--ai-radius": n === void 0 ? void 0 : lt(n),
        "--ai-bg": i || r ? a.background : void 0,
        "--ai-hover": i || r ? a.hover : void 0,
        "--ai-hover-color": i || r ? a.hoverColor : void 0,
        "--ai-color": a.color,
        "--ai-bd": i || r ? a.border : void 0,
      },
    };
  },
  Qn = ut((e, t) => {
    const n = L("ActionIcon", pC, e),
      {
        className: r,
        unstyled: o,
        variant: i,
        classNames: s,
        styles: a,
        style: l,
        loading: u,
        loaderProps: c,
        size: d,
        color: f,
        radius: h,
        __staticSelector: v,
        gradient: y,
        vars: S,
        children: g,
        disabled: m,
        "data-disabled": x,
        autoContrast: b,
        mod: C,
        ...k
      } = n,
      P = U({
        name: ["ActionIcon", v],
        props: n,
        className: r,
        style: l,
        classes: uo,
        classNames: s,
        styles: a,
        unstyled: o,
        vars: S,
        varsResolver: hC,
      });
    return p.jsxs(ao, {
      ...P("root", { active: !m && !u && !x }),
      ...k,
      unstyled: o,
      variant: i,
      size: d,
      disabled: m || u,
      ref: t,
      mod: [{ loading: u, disabled: m || x }, C],
      children: [
        p.jsx(Ai, {
          mounted: !!u,
          transition: "slide-down",
          duration: 150,
          children: (T) =>
            p.jsx(D, {
              component: "span",
              ...P("loader", { style: T }),
              "aria-hidden": !0,
              children: p.jsx(lo, {
                color: "var(--ai-color)",
                size: "calc(var(--ai-size) * 0.55)",
                ...c,
              }),
            }),
        }),
        p.jsx(D, {
          component: "span",
          mod: { loading: u },
          ...P("icon"),
          children: g,
        }),
      ],
    });
  });
Qn.classes = uo;
Qn.displayName = "@mantine/core/ActionIcon";
Qn.Group = Ed;
Qn.GroupSection = jd;
const Mv = w.forwardRef(
  ({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, r) =>
    p.jsx("svg", {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: e, height: e },
      ref: r,
      ...n,
      children: p.jsx("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    })
);
Mv.displayName = "@mantine/core/CloseIcon";
var Av = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const mC = { variant: "subtle" },
  gC = (e, { size: t, radius: n, iconSize: r }) => ({
    root: {
      "--cb-size": se(t, "cb-size"),
      "--cb-radius": n === void 0 ? void 0 : lt(n),
      "--cb-icon-size": E(r),
    },
  }),
  Na = ut((e, t) => {
    const n = L("CloseButton", mC, e),
      {
        iconSize: r,
        children: o,
        vars: i,
        radius: s,
        className: a,
        classNames: l,
        style: u,
        styles: c,
        unstyled: d,
        "data-disabled": f,
        disabled: h,
        variant: v,
        icon: y,
        mod: S,
        __staticSelector: g,
        ...m
      } = n,
      x = U({
        name: g || "CloseButton",
        props: n,
        className: a,
        style: u,
        classes: Av,
        classNames: l,
        styles: c,
        unstyled: d,
        vars: i,
        varsResolver: gC,
      });
    return p.jsxs(ao, {
      ref: t,
      ...m,
      unstyled: d,
      variant: v,
      disabled: h,
      mod: [{ disabled: h || f }, S],
      ...x("root", { variant: v, active: !h && !f }),
      children: [y || p.jsx(Mv, {}), o],
    });
  });
Na.classes = Av;
Na.displayName = "@mantine/core/CloseButton";
function yC(e) {
  return w.Children.toArray(e).filter(Boolean);
}
var Dv = { root: "m_4081bf90" };
const vC = {
    preventGrowOverflow: !0,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap",
  },
  xC = (
    e,
    { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: i, wrap: s },
    { childWidth: a }
  ) => ({
    root: {
      "--group-child-width": t && n ? a : void 0,
      "--group-gap": Ne(r),
      "--group-align": o,
      "--group-justify": i,
      "--group-wrap": s,
    },
  }),
  ce = z((e, t) => {
    const n = L("Group", vC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        children: l,
        gap: u,
        align: c,
        justify: d,
        wrap: f,
        grow: h,
        preventGrowOverflow: v,
        vars: y,
        variant: S,
        __size: g,
        mod: m,
        ...x
      } = n,
      b = yC(l),
      C = b.length,
      k = Ne(u ?? "md"),
      T = { childWidth: `calc(${100 / C}% - (${k} - ${k} / ${C}))` },
      M = U({
        name: "Group",
        props: n,
        stylesCtx: T,
        className: o,
        style: i,
        classes: Dv,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: y,
        varsResolver: xC,
      });
    return p.jsx(D, {
      ...M("root"),
      ref: t,
      variant: S,
      mod: [{ grow: h }, m],
      size: g,
      ...x,
      children: b,
    });
  });
ce.classes = Dv;
ce.displayName = "@mantine/core/Group";
const [wC, Qt] = Rn("ModalBase component was not found in tree");
function SC({ opened: e, transitionDuration: t }) {
  const [n, r] = w.useState(e),
    o = w.useRef(-1),
    s = hd() ? 0 : t;
  return (
    w.useEffect(
      () => (
        e
          ? (r(!0), window.clearTimeout(o.current))
          : s === 0
          ? r(!1)
          : (o.current = window.setTimeout(() => r(!1), s)),
        () => window.clearTimeout(o.current)
      ),
      [e, s]
    ),
    n
  );
}
function bC({
  id: e,
  transitionProps: t,
  opened: n,
  trapFocus: r,
  closeOnEscape: o,
  onClose: i,
  returnFocus: s,
}) {
  const a = kb(e),
    [l, u] = w.useState(!1),
    [c, d] = w.useState(!1),
    f =
      typeof (t == null ? void 0 : t.duration) == "number"
        ? t == null
          ? void 0
          : t.duration
        : 200,
    h = SC({ opened: n, transitionDuration: f });
  return (
    Eb(
      "keydown",
      (v) => {
        var y;
        v.key === "Escape" &&
          o &&
          !v.isComposing &&
          n &&
          ((y = v.target) == null
            ? void 0
            : y.getAttribute("data-mantine-stop-propagation")) !== "true" &&
          i();
      },
      { capture: !0 }
    ),
    mb({ opened: n, shouldReturnFocus: r && s }),
    {
      _id: a,
      titleMounted: l,
      bodyMounted: c,
      shouldLockScroll: h,
      setTitleMounted: u,
      setBodyMounted: d,
    }
  );
}
const _v = w.forwardRef(
  (
    {
      keepMounted: e,
      opened: t,
      onClose: n,
      id: r,
      transitionProps: o,
      onExitTransitionEnd: i,
      onEnterTransitionEnd: s,
      trapFocus: a,
      closeOnEscape: l,
      returnFocus: u,
      closeOnClickOutside: c,
      withinPortal: d,
      portalProps: f,
      lockScroll: h,
      children: v,
      zIndex: y,
      shadow: S,
      padding: g,
      __vars: m,
      unstyled: x,
      removeScrollProps: b,
      ...C
    },
    k
  ) => {
    const {
        _id: P,
        titleMounted: T,
        bodyMounted: M,
        shouldLockScroll: N,
        setTitleMounted: W,
        setBodyMounted: G,
      } = bC({
        id: r,
        transitionProps: o,
        opened: t,
        trapFocus: a,
        closeOnEscape: l,
        onClose: n,
        returnFocus: u,
      }),
      { key: me, ...ge } = b || {};
    return p.jsx(Pd, {
      ...f,
      withinPortal: d,
      children: p.jsx(wC, {
        value: {
          opened: t,
          onClose: n,
          closeOnClickOutside: c,
          onExitTransitionEnd: i,
          onEnterTransitionEnd: s,
          transitionProps: { ...o, keepMounted: e },
          getTitleId: () => `${P}-title`,
          getBodyId: () => `${P}-body`,
          titleMounted: T,
          bodyMounted: M,
          setTitleMounted: W,
          setBodyMounted: G,
          trapFocus: a,
          closeOnEscape: l,
          zIndex: y,
          unstyled: x,
        },
        children: p.jsx(
          Qs,
          {
            enabled: N && h,
            ...ge,
            children: p.jsx(D, {
              ref: k,
              ...C,
              __vars: {
                ...m,
                "--mb-z-index": (y || sr("modal")).toString(),
                "--mb-shadow": Wy(S),
                "--mb-padding": Ne(g),
              },
              children: v,
            }),
          },
          me
        ),
      }),
    });
  }
);
_v.displayName = "@mantine/core/ModalBase";
function CC() {
  const e = Qt();
  return (
    w.useEffect(() => (e.setBodyMounted(!0), () => e.setBodyMounted(!1)), []),
    e.getBodyId()
  );
}
var Jr = {
  title: "m_615af6c9",
  header: "m_b5489c3c",
  inner: "m_60c222c7",
  content: "m_fd1ab0aa",
  close: "m_606cb269",
  body: "m_5df29311",
};
const Lv = w.forwardRef(({ className: e, ...t }, n) => {
  const r = CC(),
    o = Qt();
  return p.jsx(D, {
    ref: n,
    ...t,
    id: r,
    className: We({ [Jr.body]: !o.unstyled }, e),
  });
});
Lv.displayName = "@mantine/core/ModalBaseBody";
const $v = w.forwardRef(({ className: e, onClick: t, ...n }, r) => {
  const o = Qt();
  return p.jsx(Na, {
    ref: r,
    ...n,
    onClick: (i) => {
      o.onClose(), t == null || t(i);
    },
    className: We({ [Jr.close]: !o.unstyled }, e),
    unstyled: o.unstyled,
  });
});
$v.displayName = "@mantine/core/ModalBaseCloseButton";
const Iv = w.forwardRef(
  (
    {
      transitionProps: e,
      className: t,
      innerProps: n,
      onKeyDown: r,
      style: o,
      ...i
    },
    s
  ) => {
    const a = Qt();
    return p.jsx(Ai, {
      mounted: a.opened,
      transition: "pop",
      ...a.transitionProps,
      onExited: () => {
        var l, u, c;
        (l = a.onExitTransitionEnd) == null || l.call(a),
          (c = (u = a.transitionProps) == null ? void 0 : u.onExited) == null ||
            c.call(u);
      },
      onEntered: () => {
        var l, u, c;
        (l = a.onEnterTransitionEnd) == null || l.call(a),
          (c = (u = a.transitionProps) == null ? void 0 : u.onEntered) ==
            null || c.call(u);
      },
      ...e,
      children: (l) =>
        p.jsx("div", {
          ...n,
          className: We({ [Jr.inner]: !a.unstyled }, n.className),
          children: p.jsx(kd, {
            active: a.opened && a.trapFocus,
            innerRef: s,
            children: p.jsx(Ra, {
              ...i,
              component: "section",
              role: "dialog",
              tabIndex: -1,
              "aria-modal": !0,
              "aria-describedby": a.bodyMounted ? a.getBodyId() : void 0,
              "aria-labelledby": a.titleMounted ? a.getTitleId() : void 0,
              style: [o, l],
              className: We({ [Jr.content]: !a.unstyled }, t),
              unstyled: a.unstyled,
              children: i.children,
            }),
          }),
        }),
    });
  }
);
Iv.displayName = "@mantine/core/ModalBaseContent";
const Vv = w.forwardRef(({ className: e, ...t }, n) => {
  const r = Qt();
  return p.jsx(D, {
    component: "header",
    ref: n,
    className: We({ [Jr.header]: !r.unstyled }, e),
    ...t,
  });
});
Vv.displayName = "@mantine/core/ModalBaseHeader";
const TC = { duration: 200, timingFunction: "ease", transition: "fade" };
function PC(e) {
  const t = Qt();
  return { ...TC, ...t.transitionProps, ...e };
}
const zv = w.forwardRef(
  ({ onClick: e, transitionProps: t, style: n, visible: r, ...o }, i) => {
    const s = Qt(),
      a = PC(t);
    return p.jsx(Ai, {
      mounted: r !== void 0 ? r : s.opened,
      ...a,
      transition: "fade",
      children: (l) =>
        p.jsx(Td, {
          ref: i,
          fixed: !0,
          style: [n, l],
          zIndex: s.zIndex,
          unstyled: s.unstyled,
          onClick: (u) => {
            e == null || e(u), s.closeOnClickOutside && s.onClose();
          },
          ...o,
        }),
    });
  }
);
zv.displayName = "@mantine/core/ModalBaseOverlay";
function kC() {
  const e = Qt();
  return (
    w.useEffect(() => (e.setTitleMounted(!0), () => e.setTitleMounted(!1)), []),
    e.getTitleId()
  );
}
const Ov = w.forwardRef(({ className: e, ...t }, n) => {
  const r = kC(),
    o = Qt();
  return p.jsx(D, {
    component: "h2",
    ref: n,
    className: We({ [Jr.title]: !o.unstyled }, e),
    ...t,
    id: r,
  });
});
Ov.displayName = "@mantine/core/ModalBaseTitle";
function EC({ children: e }) {
  return p.jsx(p.Fragment, { children: e });
}
const jC = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" },
};
var Fv = { root: "m_8bffd616" };
const RC = {},
  Rd = ut((e, t) => {
    const n = L("Flex", RC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        gap: u,
        rowGap: c,
        columnGap: d,
        align: f,
        justify: h,
        wrap: v,
        direction: y,
        ...S
      } = n,
      g = U({
        name: "Flex",
        classes: Fv,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
      }),
      m = He(),
      x = Ni(),
      b = rv({
        styleProps: {
          gap: u,
          rowGap: c,
          columnGap: d,
          align: f,
          justify: h,
          wrap: v,
          direction: y,
        },
        theme: m,
        data: jC,
      });
    return p.jsxs(p.Fragment, {
      children: [
        b.hasResponsiveStyles &&
          p.jsx(so, { selector: `.${x}`, styles: b.styles, media: b.media }),
        p.jsx(D, {
          ref: t,
          ...g("root", { className: x, style: jn(b.inlineStyles) }),
          ...S,
        }),
      ],
    });
  });
Rd.classes = Fv;
Rd.displayName = "@mantine/core/Flex";
var Bv = { root: "m_b6d8b162" };
function NC(e) {
  if (e === "start") return "start";
  if (e === "end" || e) return "end";
}
const MC = { inherit: !1 },
  AC = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: i }) => ({
    root: {
      "--text-fz": rr(o),
      "--text-lh": Uy(o),
      "--text-gradient": t === "gradient" ? Wu(r, e) : void 0,
      "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
      "--text-color": i ? bn(i, e) : void 0,
    },
  }),
  B = ut((e, t) => {
    const n = L("Text", MC, e),
      {
        lineClamp: r,
        truncate: o,
        inline: i,
        inherit: s,
        gradient: a,
        span: l,
        __staticSelector: u,
        vars: c,
        className: d,
        style: f,
        classNames: h,
        styles: v,
        unstyled: y,
        variant: S,
        mod: g,
        size: m,
        ...x
      } = n,
      b = U({
        name: ["Text", u],
        props: n,
        classes: Bv,
        className: d,
        style: f,
        classNames: h,
        styles: v,
        unstyled: y,
        vars: c,
        varsResolver: AC,
      });
    return p.jsx(D, {
      ...b("root", { focusable: !0 }),
      ref: t,
      component: l ? "span" : "p",
      variant: S,
      mod: [
        {
          "data-truncate": NC(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": i,
          "data-inherit": s,
        },
        g,
      ],
      size: m,
      ...x,
    });
  });
B.classes = Bv;
B.displayName = "@mantine/core/Text";
var Uv = {
  root: "m_347db0ec",
  "root--dot": "m_fbd81e3d",
  label: "m_5add502a",
  section: "m_91fdda9b",
};
const DC = {},
  _C = (
    e,
    { radius: t, color: n, gradient: r, variant: o, size: i, autoContrast: s }
  ) => {
    const a = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      gradient: r,
      variant: o || "filled",
      autoContrast: s,
    });
    return {
      root: {
        "--badge-height": se(i, "badge-height"),
        "--badge-padding-x": se(i, "badge-padding-x"),
        "--badge-fz": se(i, "badge-fz"),
        "--badge-radius": t === void 0 ? void 0 : lt(t),
        "--badge-bg": n || o ? a.background : void 0,
        "--badge-color": n || o ? a.color : void 0,
        "--badge-bd": n || o ? a.border : void 0,
        "--badge-dot-color": o === "dot" ? bn(n, e) : void 0,
      },
    };
  },
  Ar = ut((e, t) => {
    const n = L("Badge", DC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        radius: u,
        color: c,
        gradient: d,
        leftSection: f,
        rightSection: h,
        children: v,
        variant: y,
        fullWidth: S,
        autoContrast: g,
        circle: m,
        mod: x,
        ...b
      } = n,
      C = U({
        name: "Badge",
        props: n,
        classes: Uv,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: _C,
      });
    return p.jsxs(D, {
      variant: y,
      mod: [
        {
          block: S,
          circle: m,
          "with-right-section": !!h,
          "with-left-section": !!f,
        },
        x,
      ],
      ...C("root", { variant: y }),
      ref: t,
      ...b,
      children: [
        f &&
          p.jsx("span", {
            ...C("section"),
            "data-position": "left",
            children: f,
          }),
        p.jsx("span", { ...C("label"), children: v }),
        h &&
          p.jsx("span", {
            ...C("section"),
            "data-position": "right",
            children: h,
          }),
      ],
    });
  });
Ar.classes = Uv;
Ar.displayName = "@mantine/core/Badge";
var Wv = { root: "m_fea6bf1a", burger: "m_d4fb9cad" };
const LC = {},
  $C = (
    e,
    {
      color: t,
      size: n,
      lineSize: r,
      transitionDuration: o,
      transitionTimingFunction: i,
    }
  ) => ({
    root: {
      "--burger-color": t ? bn(t, e) : void 0,
      "--burger-size": se(n, "burger-size"),
      "--burger-line-size": r ? E(r) : void 0,
      "--burger-transition-duration": o === void 0 ? void 0 : `${o}ms`,
      "--burger-transition-timing-function": i,
    },
  }),
  Nd = z((e, t) => {
    const n = L("Burger", LC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        opened: u,
        children: c,
        transitionDuration: d,
        transitionTimingFunction: f,
        lineSize: h,
        ...v
      } = n,
      y = U({
        name: "Burger",
        classes: Wv,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: $C,
      });
    return p.jsxs(ao, {
      ...y("root"),
      ref: t,
      ...v,
      children: [
        p.jsx(D, { mod: ["reduce-motion", { opened: u }], ...y("burger") }),
        c,
      ],
    });
  });
Nd.classes = Wv;
Nd.displayName = "@mantine/core/Burger";
var co = {
  root: "m_77c9d27d",
  inner: "m_80f1301b",
  label: "m_811560b9",
  section: "m_a74036a",
  loader: "m_a25b86ee",
  group: "m_80d6d844",
  groupSection: "m_70be2a01",
};
const Qp = { orientation: "horizontal" },
  IC = (e, { borderWidth: t }) => ({
    group: { "--button-border-width": E(t) },
  }),
  Md = z((e, t) => {
    const n = L("ButtonGroup", Qp, e),
      {
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: a,
        orientation: l,
        vars: u,
        borderWidth: c,
        variant: d,
        mod: f,
        ...h
      } = L("ButtonGroup", Qp, e),
      v = U({
        name: "ButtonGroup",
        props: n,
        classes: co,
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: a,
        vars: u,
        varsResolver: IC,
        rootSelector: "group",
      });
    return p.jsx(D, {
      ...v("group"),
      ref: t,
      variant: d,
      mod: [{ "data-orientation": l }, f],
      role: "group",
      ...h,
    });
  });
Md.classes = co;
Md.displayName = "@mantine/core/ButtonGroup";
const Zp = {},
  VC = (
    e,
    { radius: t, color: n, gradient: r, variant: o, autoContrast: i, size: s }
  ) => {
    const a = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      gradient: r,
      variant: o || "filled",
      autoContrast: i,
    });
    return {
      groupSection: {
        "--section-height": se(s, "section-height"),
        "--section-padding-x": se(s, "section-padding-x"),
        "--section-fz":
          s != null && s.includes("compact")
            ? rr(s.replace("compact-", ""))
            : rr(s),
        "--section-radius": t === void 0 ? void 0 : lt(t),
        "--section-bg": n || o ? a.background : void 0,
        "--section-color": a.color,
        "--section-bd": n || o ? a.border : void 0,
      },
    };
  },
  Ad = z((e, t) => {
    const n = L("ButtonGroupSection", Zp, e),
      {
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: a,
        vars: l,
        variant: u,
        gradient: c,
        radius: d,
        autoContrast: f,
        ...h
      } = L("ButtonGroupSection", Zp, e),
      v = U({
        name: "ButtonGroupSection",
        props: n,
        classes: co,
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: VC,
        rootSelector: "groupSection",
      });
    return p.jsx(D, { ...v("groupSection"), ref: t, variant: u, ...h });
  });
Ad.classes = co;
Ad.displayName = "@mantine/core/ButtonGroupSection";
const zC = {
    in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${E(1)}))` },
    out: { opacity: 0, transform: "translate(-50%, -200%)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform, opacity",
  },
  OC = {},
  FC = (
    e,
    {
      radius: t,
      color: n,
      gradient: r,
      variant: o,
      size: i,
      justify: s,
      autoContrast: a,
    }
  ) => {
    const l = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      gradient: r,
      variant: o || "filled",
      autoContrast: a,
    });
    return {
      root: {
        "--button-justify": s,
        "--button-height": se(i, "button-height"),
        "--button-padding-x": se(i, "button-padding-x"),
        "--button-fz":
          i != null && i.includes("compact")
            ? rr(i.replace("compact-", ""))
            : rr(i),
        "--button-radius": t === void 0 ? void 0 : lt(t),
        "--button-bg": n || o ? l.background : void 0,
        "--button-hover": n || o ? l.hover : void 0,
        "--button-color": l.color,
        "--button-bd": n || o ? l.border : void 0,
        "--button-hover-color": n || o ? l.hoverColor : void 0,
      },
    };
  },
  Rt = ut((e, t) => {
    const n = L("Button", OC, e),
      {
        style: r,
        vars: o,
        className: i,
        color: s,
        disabled: a,
        children: l,
        leftSection: u,
        rightSection: c,
        fullWidth: d,
        variant: f,
        radius: h,
        loading: v,
        loaderProps: y,
        gradient: S,
        classNames: g,
        styles: m,
        unstyled: x,
        "data-disabled": b,
        autoContrast: C,
        mod: k,
        ...P
      } = n,
      T = U({
        name: "Button",
        props: n,
        classes: co,
        className: i,
        style: r,
        classNames: g,
        styles: m,
        unstyled: x,
        vars: o,
        varsResolver: FC,
      }),
      M = !!u,
      N = !!c;
    return p.jsxs(ao, {
      ref: t,
      ...T("root", { active: !a && !v && !b }),
      unstyled: x,
      variant: f,
      disabled: a || v,
      mod: [
        {
          disabled: a || b,
          loading: v,
          block: d,
          "with-left-section": M,
          "with-right-section": N,
        },
        k,
      ],
      ...P,
      children: [
        p.jsx(Ai, {
          mounted: !!v,
          transition: zC,
          duration: 150,
          children: (W) =>
            p.jsx(D, {
              component: "span",
              ...T("loader", { style: W }),
              "aria-hidden": !0,
              children: p.jsx(lo, {
                color: "var(--button-color)",
                size: "calc(var(--button-height) / 1.8)",
                ...y,
              }),
            }),
        }),
        p.jsxs("span", {
          ...T("inner"),
          children: [
            u &&
              p.jsx(D, {
                component: "span",
                ...T("section"),
                mod: { position: "left" },
                children: u,
              }),
            p.jsx(D, {
              component: "span",
              mod: { loading: v },
              ...T("label"),
              children: l,
            }),
            c &&
              p.jsx(D, {
                component: "span",
                ...T("section"),
                mod: { position: "right" },
                children: c,
              }),
          ],
        }),
      ],
    });
  });
Rt.classes = co;
Rt.displayName = "@mantine/core/Button";
Rt.Group = Md;
Rt.GroupSection = Ad;
const [BC, UC] = Rn("Card component was not found in tree");
var Dd = { root: "m_e615b15f", section: "m_599a2148" };
const WC = {},
  Ma = ut((e, t) => {
    const n = L("CardSection", WC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: a,
        withBorder: l,
        inheritPadding: u,
        mod: c,
        ...d
      } = n,
      f = UC();
    return p.jsx(D, {
      ref: t,
      mod: [{ "with-border": l, "inherit-padding": u }, c],
      ...f.getStyles("section", {
        className: o,
        style: i,
        styles: s,
        classNames: r,
      }),
      ...d,
    });
  });
Ma.classes = Dd;
Ma.displayName = "@mantine/core/CardSection";
const HC = {},
  GC = (e, { padding: t }) => ({ root: { "--card-padding": Ne(t) } }),
  ht = ut((e, t) => {
    const n = L("Card", HC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        children: u,
        padding: c,
        ...d
      } = n,
      f = U({
        name: "Card",
        props: n,
        classes: Dd,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: GC,
      }),
      h = w.Children.toArray(u),
      v = h.map((y, S) =>
        typeof y == "object" && y && "type" in y && y.type === Ma
          ? w.cloneElement(y, {
              "data-first-section": S === 0 || void 0,
              "data-last-section": S === h.length - 1 || void 0,
            })
          : y
      );
    return p.jsx(BC, {
      value: { getStyles: f },
      children: p.jsx(Ra, {
        ref: t,
        unstyled: a,
        ...f("root"),
        ...d,
        children: v,
      }),
    });
  });
ht.classes = Dd;
ht.displayName = "@mantine/core/Card";
ht.Section = Ma;
var Hv = { root: "m_7485cace" };
const YC = {},
  KC = (e, { size: t, fluid: n }) => ({
    root: { "--container-size": n ? void 0 : se(t, "container-size") },
  }),
  It = z((e, t) => {
    const n = L("Container", YC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        fluid: u,
        mod: c,
        ...d
      } = n,
      f = U({
        name: "Container",
        classes: Hv,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: KC,
      });
    return p.jsx(D, { ref: t, mod: [{ fluid: u }, c], ...f("root"), ...d });
  });
It.classes = Hv;
It.displayName = "@mantine/core/Container";
const [XC, fo] = Rn("Drawer component was not found in tree");
var Zt = {
  root: "m_f11b401e",
  header: "m_5a7c2c9",
  content: "m_b8a05bbd",
  inner: "m_31cd769a",
};
const QC = {},
  Aa = z((e, t) => {
    const n = L("DrawerBody", QC, e),
      { classNames: r, className: o, style: i, styles: s, vars: a, ...l } = n,
      u = fo();
    return p.jsx(Lv, {
      ref: t,
      ...u.getStyles("body", {
        classNames: r,
        style: i,
        styles: s,
        className: o,
      }),
      ...l,
    });
  });
Aa.classes = Zt;
Aa.displayName = "@mantine/core/DrawerBody";
const ZC = {},
  Da = z((e, t) => {
    const n = L("DrawerCloseButton", ZC, e),
      { classNames: r, className: o, style: i, styles: s, vars: a, ...l } = n,
      u = fo();
    return p.jsx($v, {
      ref: t,
      ...u.getStyles("close", {
        classNames: r,
        style: i,
        styles: s,
        className: o,
      }),
      ...l,
    });
  });
Da.classes = Zt;
Da.displayName = "@mantine/core/DrawerCloseButton";
const qC = {},
  _a = z((e, t) => {
    const n = L("DrawerContent", qC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: a,
        children: l,
        radius: u,
        __hidden: c,
        ...d
      } = n,
      f = fo(),
      h = f.scrollAreaComponent || EC;
    return p.jsx(Iv, {
      ...f.getStyles("content", {
        className: o,
        style: i,
        styles: s,
        classNames: r,
      }),
      innerProps: f.getStyles("inner", {
        className: o,
        style: i,
        styles: s,
        classNames: r,
      }),
      ref: t,
      ...d,
      radius: u || f.radius || 0,
      "data-hidden": c || void 0,
      children: p.jsx(h, {
        style: { height: "calc(100vh - var(--drawer-offset) * 2)" },
        children: l,
      }),
    });
  });
_a.classes = Zt;
_a.displayName = "@mantine/core/DrawerContent";
const JC = {},
  La = z((e, t) => {
    const n = L("DrawerHeader", JC, e),
      { classNames: r, className: o, style: i, styles: s, vars: a, ...l } = n,
      u = fo();
    return p.jsx(Vv, {
      ref: t,
      ...u.getStyles("header", {
        classNames: r,
        style: i,
        styles: s,
        className: o,
      }),
      ...l,
    });
  });
La.classes = Zt;
La.displayName = "@mantine/core/DrawerHeader";
const eT = {},
  $a = z((e, t) => {
    const n = L("DrawerOverlay", eT, e),
      { classNames: r, className: o, style: i, styles: s, vars: a, ...l } = n,
      u = fo();
    return p.jsx(zv, {
      ref: t,
      ...u.getStyles("overlay", {
        classNames: r,
        style: i,
        styles: s,
        className: o,
      }),
      ...l,
    });
  });
$a.classes = Zt;
$a.displayName = "@mantine/core/DrawerOverlay";
function tT(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "bottom":
      return "flex-end";
    default:
      return;
  }
}
function nT(e) {
  if (e === "top" || e === "bottom")
    return "0 0 calc(100% - var(--drawer-offset, 0rem) * 2)";
}
const rT = {
    top: "slide-down",
    bottom: "slide-up",
    left: "slide-right",
    right: "slide-left",
  },
  oT = {
    top: "slide-down",
    bottom: "slide-up",
    right: "slide-right",
    left: "slide-left",
  },
  iT = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: sr("modal"),
    position: "left",
  },
  sT = (e, { position: t, size: n, offset: r }) => ({
    root: {
      "--drawer-size": se(n, "drawer-size"),
      "--drawer-flex": nT(t),
      "--drawer-height":
        t === "left" || t === "right" ? void 0 : "var(--drawer-size)",
      "--drawer-align": tT(t),
      "--drawer-justify": t === "right" ? "flex-end" : void 0,
      "--drawer-offset": E(r),
    },
  }),
  Ia = z((e, t) => {
    const n = L("DrawerRoot", iT, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        scrollAreaComponent: u,
        position: c,
        transitionProps: d,
        radius: f,
        ...h
      } = n,
      { dir: v } = lv(),
      y = U({
        name: "Drawer",
        classes: Zt,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: sT,
      }),
      S = (v === "rtl" ? oT : rT)[c];
    return p.jsx(XC, {
      value: { scrollAreaComponent: u, getStyles: y, radius: f },
      children: p.jsx(_v, {
        ref: t,
        ...y("root"),
        transitionProps: { transition: S, ...d },
        "data-offset-scrollbars": u === Mi.Autosize || void 0,
        unstyled: a,
        ...h,
      }),
    });
  });
Ia.classes = Zt;
Ia.displayName = "@mantine/core/DrawerRoot";
const [aT, lT] = ub();
function Gv({ children: e }) {
  const [t, n] = w.useState([]),
    [r, o] = w.useState(sr("modal"));
  return p.jsx(aT, {
    value: {
      stack: t,
      addModal: (i, s) => {
        n((a) => [...new Set([...a, i])]),
          o((a) =>
            typeof s == "number" && typeof a == "number" ? Math.max(a, s) : a
          );
      },
      removeModal: (i) => n((s) => s.filter((a) => a !== i)),
      getZIndex: (i) => `calc(${r} + ${t.indexOf(i)} + 1)`,
      currentId: t[t.length - 1],
      maxZIndex: r,
    },
    children: e,
  });
}
Gv.displayName = "@mantine/core/DrawerStack";
const uT = {},
  Va = z((e, t) => {
    const n = L("DrawerTitle", uT, e),
      { classNames: r, className: o, style: i, styles: s, vars: a, ...l } = n,
      u = fo();
    return p.jsx(Ov, {
      ref: t,
      ...u.getStyles("title", {
        classNames: r,
        style: i,
        styles: s,
        className: o,
      }),
      ...l,
    });
  });
Va.classes = Zt;
Va.displayName = "@mantine/core/DrawerTitle";
const cT = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: sr("modal"),
    withOverlay: !0,
    withCloseButton: !0,
  },
  Ct = z((e, t) => {
    const {
        title: n,
        withOverlay: r,
        overlayProps: o,
        withCloseButton: i,
        closeButtonProps: s,
        children: a,
        opened: l,
        stackId: u,
        zIndex: c,
        ...d
      } = L("Drawer", cT, e),
      f = lT(),
      h = !!n || i,
      v =
        f && u
          ? {
              closeOnEscape: f.currentId === u,
              trapFocus: f.currentId === u,
              zIndex: f.getZIndex(u),
            }
          : {},
      y = r === !1 ? !1 : u && f ? f.currentId === u : l;
    return (
      w.useEffect(() => {
        f && u && (l ? f.addModal(u, c || sr("modal")) : f.removeModal(u));
      }, [l, u, c]),
      p.jsxs(Ia, {
        ref: t,
        opened: l,
        zIndex: f && u ? f.getZIndex(u) : c,
        ...d,
        ...v,
        children: [
          r &&
            p.jsx($a, {
              visible: y,
              transitionProps: f && u ? { duration: 0 } : void 0,
              ...o,
            }),
          p.jsxs(_a, {
            __hidden: f && u && l ? u !== f.currentId : !1,
            children: [
              h &&
                p.jsxs(La, {
                  children: [
                    n && p.jsx(Va, { children: n }),
                    i && p.jsx(Da, { ...s }),
                  ],
                }),
              p.jsx(Aa, { children: a }),
            ],
          }),
        ],
      })
    );
  });
Ct.classes = Zt;
Ct.displayName = "@mantine/core/Drawer";
Ct.Root = Ia;
Ct.Overlay = $a;
Ct.Content = _a;
Ct.Body = Aa;
Ct.Header = La;
Ct.Title = Va;
Ct.CloseButton = Da;
Ct.Stack = Gv;
const [qp, Yv] = Rn("Grid component was not found in tree"),
  Xu = (e, t) =>
    e === "content"
      ? "auto"
      : e === "auto"
      ? "0rem"
      : e
      ? `${100 / (t / e)}%`
      : void 0,
  Jp = (e, t, n) =>
    n || e === "auto" ? "100%" : e === "content" ? "unset" : Xu(e, t),
  eh = (e, t) => {
    if (e) return e === "auto" || t ? "1" : "auto";
  },
  th = (e, t) => (e === 0 ? "0" : e ? `${100 / (t / e)}%` : void 0);
function dT({ span: e, order: t, offset: n, selector: r }) {
  var h;
  const o = He(),
    i = Yv(),
    s = i.breakpoints || o.breakpoints,
    l = vt(e) === void 0 ? 12 : vt(e),
    u = jn({
      "--col-order": (h = vt(t)) == null ? void 0 : h.toString(),
      "--col-flex-grow": eh(l, i.grow),
      "--col-flex-basis": Xu(l, i.columns),
      "--col-width": l === "content" ? "auto" : void 0,
      "--col-max-width": Jp(l, i.columns, i.grow),
      "--col-offset": th(vt(n), i.columns),
    }),
    c = fe(s).reduce((v, y) => {
      var S;
      return (
        v[y] || (v[y] = {}),
        typeof t == "object" &&
          t[y] !== void 0 &&
          (v[y]["--col-order"] = (S = t[y]) == null ? void 0 : S.toString()),
        typeof e == "object" &&
          e[y] !== void 0 &&
          ((v[y]["--col-flex-grow"] = eh(e[y], i.grow)),
          (v[y]["--col-flex-basis"] = Xu(e[y], i.columns)),
          (v[y]["--col-width"] = e[y] === "content" ? "auto" : void 0),
          (v[y]["--col-max-width"] = Jp(e[y], i.columns, i.grow))),
        typeof n == "object" &&
          n[y] !== void 0 &&
          (v[y]["--col-offset"] = th(n[y], i.columns)),
        v
      );
    }, {}),
    f = fd(fe(c), s)
      .filter((v) => fe(c[v.value]).length > 0)
      .map((v) => ({
        query:
          i.type === "container"
            ? `mantine-grid (min-width: ${s[v.value]})`
            : `(min-width: ${s[v.value]})`,
        styles: c[v.value],
      }));
  return p.jsx(so, {
    styles: u,
    media: i.type === "container" ? void 0 : f,
    container: i.type === "container" ? f : void 0,
    selector: r,
  });
}
var _d = {
  container: "m_8478a6da",
  root: "m_410352e9",
  inner: "m_dee7bd2f",
  col: "m_96bdd299",
};
const fT = { span: 12 },
  Ld = z((e, t) => {
    const n = L("GridCol", fT, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: a,
        span: l,
        order: u,
        offset: c,
        ...d
      } = n,
      f = Yv(),
      h = Ni();
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx(dT, { selector: `.${h}`, span: l, order: u, offset: c }),
        p.jsx(D, {
          ref: t,
          ...f.getStyles("col", {
            className: We(o, h),
            style: i,
            classNames: r,
            styles: s,
          }),
          ...d,
        }),
      ],
    });
  });
Ld.classes = _d;
Ld.displayName = "@mantine/core/GridCol";
function nh({ gutter: e, selector: t, breakpoints: n, type: r }) {
  const o = He(),
    i = n || o.breakpoints,
    s = jn({ "--grid-gutter": Ne(vt(e)) }),
    a = fe(i).reduce(
      (c, d) => (
        c[d] || (c[d] = {}),
        typeof e == "object" &&
          e[d] !== void 0 &&
          (c[d]["--grid-gutter"] = Ne(e[d])),
        c
      ),
      {}
    ),
    u = fd(fe(a), i)
      .filter((c) => fe(a[c.value]).length > 0)
      .map((c) => ({
        query:
          r === "container"
            ? `mantine-grid (min-width: ${i[c.value]})`
            : `(min-width: ${i[c.value]})`,
        styles: a[c.value],
      }));
  return p.jsx(so, {
    styles: s,
    media: r === "container" ? void 0 : u,
    container: r === "container" ? u : void 0,
    selector: t,
  });
}
const pT = { gutter: "md", grow: !1, columns: 12 },
  hT = (e, { justify: t, align: n, overflow: r }) => ({
    root: { "--grid-justify": t, "--grid-align": n, "--grid-overflow": r },
  }),
  De = z((e, t) => {
    const n = L("Grid", pT, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        grow: u,
        gutter: c,
        columns: d,
        align: f,
        justify: h,
        children: v,
        breakpoints: y,
        type: S,
        ...g
      } = n,
      m = U({
        name: "Grid",
        classes: _d,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: hT,
      }),
      x = Ni();
    return S === "container" && y
      ? p.jsxs(qp, {
          value: {
            getStyles: m,
            grow: u,
            columns: d || 12,
            breakpoints: y,
            type: S,
          },
          children: [
            p.jsx(nh, { selector: `.${x}`, ...n }),
            p.jsx("div", {
              ...m("container"),
              children: p.jsx(D, {
                ref: t,
                ...m("root", { className: x }),
                ...g,
                children: p.jsx("div", { ...m("inner"), children: v }),
              }),
            }),
          ],
        })
      : p.jsxs(qp, {
          value: {
            getStyles: m,
            grow: u,
            columns: d || 12,
            breakpoints: y,
            type: S,
          },
          children: [
            p.jsx(nh, { selector: `.${x}`, ...n }),
            p.jsx(D, {
              ref: t,
              ...m("root", { className: x }),
              ...g,
              children: p.jsx("div", { ...m("inner"), children: v }),
            }),
          ],
        });
  });
De.classes = _d;
De.displayName = "@mantine/core/Grid";
De.Col = Ld;
var Kv = { root: "m_9e117634" };
const mT = {},
  gT = (e, { radius: t, fit: n }) => ({
    root: {
      "--image-radius": t === void 0 ? void 0 : lt(t),
      "--image-object-fit": n,
    },
  }),
  $d = ut((e, t) => {
    const n = L("Image", mT, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        onError: u,
        src: c,
        radius: d,
        fit: f,
        fallbackSrc: h,
        mod: v,
        ...y
      } = n,
      [S, g] = w.useState(!c);
    w.useEffect(() => g(!c), [c]);
    const m = U({
      name: "Image",
      classes: Kv,
      props: n,
      className: o,
      style: i,
      classNames: r,
      styles: s,
      unstyled: a,
      vars: l,
      varsResolver: gT,
    });
    return S && h
      ? p.jsx(D, {
          component: "img",
          ref: t,
          src: h,
          ...m("root"),
          onError: u,
          mod: ["fallback", v],
          ...y,
        })
      : p.jsx(D, {
          component: "img",
          ref: t,
          ...m("root"),
          src: c,
          onError: (x) => {
            u == null || u(x), g(!0);
          },
          mod: v,
          ...y,
        });
  });
$d.classes = Kv;
$d.displayName = "@mantine/core/Image";
function Qu() {
  return (
    (Qu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qu.apply(null, arguments)
  );
}
function Xv(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
const [yT, vT] = Rn("List component was not found in tree");
var Id = {
  root: "m_abbac491",
  item: "m_abb6bec2",
  itemWrapper: "m_75cd9f71",
  itemIcon: "m_60f83e5b",
};
const xT = {},
  Vd = z((e, t) => {
    const n = L("ListItem", xT, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: a,
        icon: l,
        children: u,
        mod: c,
        ...d
      } = n,
      f = vT(),
      h = l || f.icon,
      v = { classNames: r, styles: s };
    return p.jsx(D, {
      ...f.getStyles("item", { ...v, className: o, style: i }),
      component: "li",
      mod: [{ "with-icon": !!h, centered: f.center }, c],
      ref: t,
      ...d,
      children: p.jsxs("div", {
        ...f.getStyles("itemWrapper", v),
        children: [
          h && p.jsx("span", { ...f.getStyles("itemIcon", v), children: h }),
          p.jsx("span", { ...f.getStyles("itemLabel", v), children: u }),
        ],
      }),
    });
  });
Vd.classes = Id;
Vd.displayName = "@mantine/core/ListItem";
const wT = { type: "unordered" },
  ST = (e, { size: t, spacing: n }) => ({
    root: { "--list-fz": rr(t), "--list-lh": Uy(t), "--list-spacing": Ne(n) },
  }),
  Wn = z((e, t) => {
    const n = L("List", wT, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        children: u,
        type: c,
        withPadding: d,
        icon: f,
        spacing: h,
        center: v,
        listStyleType: y,
        mod: S,
        ...g
      } = n,
      m = U({
        name: "List",
        classes: Id,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: ST,
      });
    return p.jsx(yT, {
      value: { center: v, icon: f, getStyles: m },
      children: p.jsx(D, {
        ...m("root", { style: { listStyleType: y } }),
        component: c === "unordered" ? "ul" : "ol",
        mod: [{ "with-padding": d }, S],
        ref: t,
        ...g,
        children: u,
      }),
    });
  });
Wn.classes = Id;
Wn.displayName = "@mantine/core/List";
Wn.Item = Vd;
var Qv = {
  root: "m_a513464",
  icon: "m_a4ceffb",
  loader: "m_b0920b15",
  body: "m_a49ed24",
  title: "m_3feedf16",
  description: "m_3d733a3a",
  closeButton: "m_919a4d88",
};
const bT = { withCloseButton: !0 },
  CT = (e, { radius: t, color: n }) => ({
    root: {
      "--notification-radius": t === void 0 ? void 0 : lt(t),
      "--notification-color": n ? bn(n, e) : void 0,
    },
  }),
  zd = z((e, t) => {
    const n = L("Notification", bT, e),
      {
        className: r,
        color: o,
        radius: i,
        loading: s,
        withCloseButton: a,
        withBorder: l,
        title: u,
        icon: c,
        children: d,
        onClose: f,
        closeButtonProps: h,
        classNames: v,
        style: y,
        styles: S,
        unstyled: g,
        variant: m,
        vars: x,
        mod: b,
        loaderProps: C,
        role: k,
        ...P
      } = n,
      T = U({
        name: "Notification",
        classes: Qv,
        props: n,
        className: r,
        style: y,
        classNames: v,
        styles: S,
        unstyled: g,
        vars: x,
        varsResolver: CT,
      });
    return p.jsxs(D, {
      ...T("root"),
      mod: [{ "data-with-icon": !!c || s, "data-with-border": l }, b],
      ref: t,
      variant: m,
      role: k || "alert",
      ...P,
      children: [
        c && !s && p.jsx("div", { ...T("icon"), children: c }),
        s && p.jsx(lo, { size: 28, color: o, ...C, ...T("loader") }),
        p.jsxs("div", {
          ...T("body"),
          children: [
            u && p.jsx("div", { ...T("title"), children: u }),
            p.jsx(D, {
              ...T("description"),
              mod: { "data-with-title": !!u },
              children: d,
            }),
          ],
        }),
        a &&
          p.jsx(Na, {
            iconSize: 16,
            color: "gray",
            ...h,
            unstyled: g,
            onClick: f,
            ...T("closeButton"),
          }),
      ],
    });
  });
zd.classes = Qv;
zd.displayName = "@mantine/core/Notification";
const [TT, Zv] = Rn("Progress.Root component was not found in tree");
var Di = {
  root: "m_db6d6462",
  section: "m_2242eb65",
  "stripes-animation": "m_81a374bd",
  label: "m_91e40b74",
};
const PT = {},
  Od = z((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: i,
        vars: s,
        ...a
      } = L("ProgressLabel", PT, e),
      l = Zv();
    return p.jsx(D, {
      ref: t,
      ...l.getStyles("label", {
        className: r,
        style: o,
        classNames: n,
        styles: i,
      }),
      ...a,
    });
  });
Od.classes = Di;
Od.displayName = "@mantine/core/ProgressLabel";
const kT = {},
  ET = (e, { size: t, radius: n, transitionDuration: r }) => ({
    root: {
      "--progress-size": se(t, "progress-size"),
      "--progress-radius": n === void 0 ? void 0 : lt(n),
      "--progress-transition-duration":
        typeof r == "number" ? `${r}ms` : void 0,
    },
  }),
  za = z((e, t) => {
    const n = L("ProgressRoot", kT, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        autoContrast: u,
        transitionDuration: c,
        ...d
      } = n,
      f = U({
        name: "Progress",
        classes: Di,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: ET,
      });
    return p.jsx(TT, {
      value: { getStyles: f, autoContrast: u },
      children: p.jsx(D, { ref: t, ...f("root"), ...d }),
    });
  });
za.classes = Di;
za.displayName = "@mantine/core/ProgressRoot";
const jT = { withAria: !0 },
  Oa = z((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: i,
        vars: s,
        value: a,
        withAria: l,
        color: u,
        striped: c,
        animated: d,
        mod: f,
        ...h
      } = L("ProgressSection", jT, e),
      v = Zv(),
      y = He(),
      S = l
        ? {
            role: "progressbar",
            "aria-valuemax": 100,
            "aria-valuemin": 0,
            "aria-valuenow": a,
            "aria-valuetext": `${a}%`,
          }
        : {};
    return p.jsx(D, {
      ref: t,
      ...v.getStyles("section", {
        className: r,
        classNames: n,
        styles: i,
        style: o,
      }),
      ...h,
      ...S,
      mod: [{ striped: c || d, animated: d }, f],
      __vars: {
        "--progress-section-width": `${a}%`,
        "--progress-section-color": bn(u, y),
        "--progress-label-color": w2(v.autoContrast, y)
          ? Jy({ color: u, theme: y, autoContrast: v.autoContrast })
          : void 0,
      },
    });
  });
Oa.classes = Di;
Oa.displayName = "@mantine/core/ProgressSection";
const RT = {},
  po = z((e, t) => {
    const n = L("Progress", RT, e),
      {
        value: r,
        classNames: o,
        styles: i,
        vars: s,
        color: a,
        striped: l,
        animated: u,
        "aria-label": c,
        ...d
      } = n,
      { resolvedClassNames: f, resolvedStyles: h } = i2({
        classNames: o,
        styles: i,
        props: n,
      });
    return p.jsx(za, {
      ref: t,
      classNames: f,
      styles: h,
      vars: s,
      ...d,
      children: p.jsx(Oa, {
        value: r,
        color: a,
        striped: l,
        animated: u,
        "aria-label": c,
      }),
    });
  });
po.classes = Di;
po.displayName = "@mantine/core/Progress";
po.Section = Oa;
po.Root = za;
po.Label = Od;
function NT({ spacing: e, verticalSpacing: t, cols: n, selector: r }) {
  var c;
  const o = He(),
    i = t === void 0 ? e : t,
    s = jn({
      "--sg-spacing-x": Ne(vt(e)),
      "--sg-spacing-y": Ne(vt(i)),
      "--sg-cols": (c = vt(n)) == null ? void 0 : c.toString(),
    }),
    a = fe(o.breakpoints).reduce(
      (d, f) => (
        d[f] || (d[f] = {}),
        typeof e == "object" &&
          e[f] !== void 0 &&
          (d[f]["--sg-spacing-x"] = Ne(e[f])),
        typeof i == "object" &&
          i[f] !== void 0 &&
          (d[f]["--sg-spacing-y"] = Ne(i[f])),
        typeof n == "object" && n[f] !== void 0 && (d[f]["--sg-cols"] = n[f]),
        d
      ),
      {}
    ),
    u = fd(fe(a), o.breakpoints)
      .filter((d) => fe(a[d.value]).length > 0)
      .map((d) => ({
        query: `(min-width: ${o.breakpoints[d.value]})`,
        styles: a[d.value],
      }));
  return p.jsx(so, { styles: s, media: u, selector: r });
}
function Nl(e) {
  return typeof e == "object" && e !== null ? fe(e) : [];
}
function MT(e) {
  return e.sort((t, n) => gi(t) - gi(n));
}
function AT({ spacing: e, verticalSpacing: t, cols: n }) {
  const r = Array.from(new Set([...Nl(e), ...Nl(t), ...Nl(n)]));
  return MT(r);
}
function DT({ spacing: e, verticalSpacing: t, cols: n, selector: r }) {
  var u;
  const o = t === void 0 ? e : t,
    i = jn({
      "--sg-spacing-x": Ne(vt(e)),
      "--sg-spacing-y": Ne(vt(o)),
      "--sg-cols": (u = vt(n)) == null ? void 0 : u.toString(),
    }),
    s = AT({ spacing: e, verticalSpacing: t, cols: n }),
    a = s.reduce(
      (c, d) => (
        c[d] || (c[d] = {}),
        typeof e == "object" &&
          e[d] !== void 0 &&
          (c[d]["--sg-spacing-x"] = Ne(e[d])),
        typeof o == "object" &&
          o[d] !== void 0 &&
          (c[d]["--sg-spacing-y"] = Ne(o[d])),
        typeof n == "object" && n[d] !== void 0 && (c[d]["--sg-cols"] = n[d]),
        c
      ),
      {}
    ),
    l = s.map((c) => ({
      query: `simple-grid (min-width: ${c})`,
      styles: a[c],
    }));
  return p.jsx(so, { styles: i, container: l, selector: r });
}
var qv = { container: "m_925c2d2c", root: "m_2415a157" };
const _T = { cols: 1, spacing: "md", type: "media" },
  Fd = z((e, t) => {
    const n = L("SimpleGrid", _T, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        cols: u,
        verticalSpacing: c,
        spacing: d,
        type: f,
        ...h
      } = n,
      v = U({
        name: "SimpleGrid",
        classes: qv,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
      }),
      y = Ni();
    return f === "container"
      ? p.jsxs(p.Fragment, {
          children: [
            p.jsx(DT, { ...n, selector: `.${y}` }),
            p.jsx("div", {
              ...v("container"),
              children: p.jsx(D, {
                ref: t,
                ...v("root", { className: y }),
                ...h,
              }),
            }),
          ],
        })
      : p.jsxs(p.Fragment, {
          children: [
            p.jsx(NT, { ...n, selector: `.${y}` }),
            p.jsx(D, { ref: t, ...v("root", { className: y }), ...h }),
          ],
        });
  });
Fd.classes = qv;
Fd.displayName = "@mantine/core/SimpleGrid";
var Jv = { root: "m_6d731127" };
const LT = { gap: "md", align: "stretch", justify: "flex-start" },
  $T = (e, { gap: t, align: n, justify: r }) => ({
    root: { "--stack-gap": Ne(t), "--stack-align": n, "--stack-justify": r },
  }),
  un = z((e, t) => {
    const n = L("Stack", LT, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        align: u,
        justify: c,
        gap: d,
        variant: f,
        ...h
      } = n,
      v = U({
        name: "Stack",
        props: n,
        classes: Jv,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: $T,
      });
    return p.jsx(D, { ref: t, ...v("root"), variant: f, ...h });
  });
un.classes = Jv;
un.displayName = "@mantine/core/Stack";
var e0 = { root: "m_7341320d" };
const IT = {},
  VT = (
    e,
    { size: t, radius: n, variant: r, gradient: o, color: i, autoContrast: s }
  ) => {
    const a = e.variantColorResolver({
      color: i || e.primaryColor,
      theme: e,
      gradient: o,
      variant: r || "filled",
      autoContrast: s,
    });
    return {
      root: {
        "--ti-size": se(t, "ti-size"),
        "--ti-radius": n === void 0 ? void 0 : lt(n),
        "--ti-bg": i || r ? a.background : void 0,
        "--ti-color": i || r ? a.color : void 0,
        "--ti-bd": i || r ? a.border : void 0,
      },
    };
  },
  Bd = z((e, t) => {
    const n = L("ThemeIcon", IT, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        autoContrast: u,
        ...c
      } = n,
      d = U({
        name: "ThemeIcon",
        classes: e0,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: VT,
      });
    return p.jsx(D, { ref: t, ...d("root"), ...c });
  });
Bd.classes = e0;
Bd.displayName = "@mantine/core/ThemeIcon";
const zT = ["h1", "h2", "h3", "h4", "h5", "h6"],
  OT = ["xs", "sm", "md", "lg", "xl"];
function FT(e, t) {
  const n = t !== void 0 ? t : `h${e}`;
  return zT.includes(n)
    ? {
        fontSize: `var(--mantine-${n}-font-size)`,
        fontWeight: `var(--mantine-${n}-font-weight)`,
        lineHeight: `var(--mantine-${n}-line-height)`,
      }
    : OT.includes(n)
    ? {
        fontSize: `var(--mantine-font-size-${n})`,
        fontWeight: `var(--mantine-h${e}-font-weight)`,
        lineHeight: `var(--mantine-h${e}-line-height)`,
      }
    : {
        fontSize: E(n),
        fontWeight: `var(--mantine-h${e}-font-weight)`,
        lineHeight: `var(--mantine-h${e}-line-height)`,
      };
}
var t0 = { root: "m_8a5d1357" };
const BT = { order: 1 },
  UT = (e, { order: t, size: n, lineClamp: r, textWrap: o }) => {
    const i = FT(t, n);
    return {
      root: {
        "--title-fw": i.fontWeight,
        "--title-lh": i.lineHeight,
        "--title-fz": i.fontSize,
        "--title-line-clamp": typeof r == "number" ? r.toString() : void 0,
        "--title-text-wrap": o,
      },
    };
  },
  Ee = z((e, t) => {
    const n = L("Title", BT, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        order: l,
        vars: u,
        size: c,
        variant: d,
        lineClamp: f,
        textWrap: h,
        mod: v,
        ...y
      } = n,
      S = U({
        name: "Title",
        props: n,
        classes: t0,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: u,
        varsResolver: UT,
      });
    return [1, 2, 3, 4, 5, 6].includes(l)
      ? p.jsx(D, {
          ...S("root"),
          component: `h${l}`,
          variant: d,
          ref: t,
          mod: [{ order: l, "data-line-clamp": typeof f == "number" }, v],
          size: c,
          ...y,
        })
      : null;
  });
Ee.classes = t0;
Ee.displayName = "@mantine/core/Title";
function WT(e) {
  let t = e,
    n = !1;
  const r = new Set();
  return {
    getState() {
      return t;
    },
    updateState(o) {
      t = typeof o == "function" ? o(t) : o;
    },
    setState(o) {
      this.updateState(o), r.forEach((i) => i(t));
    },
    initialize(o) {
      n || ((t = o), (n = !0));
    },
    subscribe(o) {
      return r.add(o), () => r.delete(o);
    },
  };
}
function HT(e) {
  return w.useSyncExternalStore(
    e.subscribe,
    () => e.getState(),
    () => e.getState()
  );
}
function GT(e, t, n) {
  const r = [],
    o = [],
    i = {};
  for (const s of e) {
    const a = s.position || t;
    (i[a] = i[a] || 0), (i[a] += 1), i[a] <= n ? o.push(s) : r.push(s);
  }
  return { notifications: o, queue: r };
}
const YT = () =>
    WT({
      notifications: [],
      queue: [],
      defaultPosition: "bottom-right",
      limit: 5,
    }),
  lr = YT(),
  KT = (e = lr) => HT(e);
function ho(e, t) {
  const n = e.getState(),
    r = t([...n.notifications, ...n.queue]),
    o = GT(r, n.defaultPosition, n.limit);
  e.setState({
    notifications: o.notifications,
    queue: o.queue,
    limit: n.limit,
    defaultPosition: n.defaultPosition,
  });
}
function XT(e, t = lr) {
  const n = e.id || Hy();
  return (
    ho(t, (r) =>
      e.id && r.some((o) => o.id === e.id) ? r : [...r, { ...e, id: n }]
    ),
    n
  );
}
function n0(e, t = lr) {
  return (
    ho(t, (n) =>
      n.filter((r) => {
        var o;
        return r.id === e ? ((o = r.onClose) == null || o.call(r, r), !1) : !0;
      })
    ),
    e
  );
}
function QT(e, t = lr) {
  return ho(t, (n) => n.map((r) => (r.id === e.id ? { ...r, ...e } : r))), e.id;
}
function ZT(e = lr) {
  ho(e, () => []);
}
function qT(e = lr) {
  ho(e, (t) => t.slice(0, e.getState().limit));
}
const mo = {
  show: XT,
  hide: n0,
  update: QT,
  clean: ZT,
  cleanQueue: qT,
  updateState: ho,
};
function Zu(e, t) {
  return (
    (Zu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Zu(e, t)
  );
}
function r0(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Zu(e, t);
}
var o0 = { exports: {} },
  JT = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  eP = JT,
  tP = eP;
function i0() {}
function s0() {}
s0.resetWarningCache = i0;
var nP = function () {
  function e(r, o, i, s, a, l) {
    if (l !== tP) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: s0,
    resetWarningCache: i0,
  };
  return (n.PropTypes = n), n;
};
o0.exports = nP();
var rP = o0.exports;
const An = mc(rP),
  rh = { disabled: !1 },
  Js = yt.createContext(null);
var oP = function (t) {
    return t.scrollTop;
  },
  $o = "unmounted",
  $n = "exited",
  In = "entering",
  xr = "entered",
  qu = "exiting",
  qt = (function (e) {
    r0(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = $n), (i.appearStatus = In))
            : (l = xr)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = $o)
          : (l = $n),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === $o ? { status: $n } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== In && s !== xr && (i = In)
            : (s === In || s === xr) && (i = qu);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === In)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Lo.findDOMNode(this);
              s && oP(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === $n &&
            this.setState({ status: $o });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [Lo.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          d = this.getTimeouts(),
          f = a ? d.appear : d.enter;
        if ((!o && !s) || rh.disabled) {
          this.safeSetState({ status: xr }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: In }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: xr }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Lo.findDOMNode(this);
        if (!i || rh.disabled) {
          this.safeSetState({ status: $n }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: qu }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: $n }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Lo.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === $o) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = Xv(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return yt.createElement(
          Js.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, a)
            : yt.cloneElement(yt.Children.only(s), a)
        );
      }),
      t
    );
  })(yt.Component);
qt.contextType = Js;
qt.propTypes = {};
function vr() {}
qt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: vr,
  onEntering: vr,
  onEntered: vr,
  onExit: vr,
  onExiting: vr,
  onExited: vr,
};
qt.UNMOUNTED = $o;
qt.EXITED = $n;
qt.ENTERING = In;
qt.ENTERED = xr;
qt.EXITING = qu;
function iP(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Ud(e, t) {
  var n = function (i) {
      return t && w.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      w.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function sP(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function Hn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function aP(e, t) {
  return Ud(e.children, function (n) {
    return w.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Hn(n, "appear", e),
      enter: Hn(n, "enter", e),
      exit: Hn(n, "exit", e),
    });
  });
}
function lP(e, t, n) {
  var r = Ud(e.children),
    o = sP(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (w.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          c = w.isValidElement(u) && !u.props.in;
        l && (!a || c)
          ? (o[i] = w.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: Hn(s, "exit", e),
              enter: Hn(s, "enter", e),
            }))
          : !l && a && !c
          ? (o[i] = w.cloneElement(s, { in: !1 }))
          : l &&
            a &&
            w.isValidElement(u) &&
            (o[i] = w.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: Hn(s, "exit", e),
              enter: Hn(s, "enter", e),
            }));
      }
    }),
    o
  );
}
var uP =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  cP = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  sn = (function (e) {
    r0(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(iP(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? aP(o, a) : lP(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = Ud(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = Qu({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = Xv(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = uP(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? yt.createElement(Js.Provider, { value: l }, u)
            : yt.createElement(
                Js.Provider,
                { value: l },
                yt.createElement(i, a, u)
              )
        );
      }),
      t
    );
  })(yt.Component);
sn.propTypes = {};
sn.defaultProps = cP;
const a0 = [
  "bottom-center",
  "bottom-left",
  "bottom-right",
  "top-center",
  "top-left",
  "top-right",
];
function dP(e, t) {
  return e.reduce(
    (n, r) => (n[r.position || t].push(r), n),
    a0.reduce((n, r) => ((n[r] = []), n), {})
  );
}
const oh = {
    left: "translateX(-100%)",
    right: "translateX(100%)",
    "top-center": "translateY(-100%)",
    "bottom-center": "translateY(100%)",
  },
  fP = {
    left: "translateX(0)",
    right: "translateX(0)",
    "top-center": "translateY(0)",
    "bottom-center": "translateY(0)",
  };
function pP({ state: e, maxHeight: t, position: n, transitionDuration: r }) {
  const [o, i] = n.split("-"),
    s = i === "center" ? `${o}-center` : i,
    a = {
      opacity: 0,
      maxHeight: t,
      transform: oh[s],
      transitionDuration: `${r}ms, ${r}ms, ${r}ms`,
      transitionTimingFunction:
        "cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear",
      transitionProperty: "opacity, transform, max-height",
    },
    l = { opacity: 1, transform: fP[s] },
    u = { opacity: 0, maxHeight: 0, transform: oh[s] };
  return { ...a, ...{ entering: l, entered: l, exiting: u, exited: u }[e] };
}
function hP(e, t) {
  return typeof t == "number" ? t : t === !1 || e === !1 ? !1 : e;
}
const l0 = w.forwardRef(({ data: e, onHide: t, autoClose: n, ...r }, o) => {
  const { autoClose: i, message: s, ...a } = e,
    l = hP(n, e.autoClose),
    u = w.useRef(-1),
    c = () => window.clearTimeout(u.current),
    d = () => {
      t(e.id), c();
    },
    f = () => {
      typeof l == "number" && (u.current = window.setTimeout(d, l));
    };
  return (
    w.useEffect(() => {
      var h;
      (h = e.onOpen) == null || h.call(e, e);
    }, []),
    w.useEffect(() => (f(), c), [l]),
    p.jsx(zd, {
      ...r,
      ...a,
      onClose: d,
      ref: o,
      onMouseEnter: c,
      onMouseLeave: f,
      children: s,
    })
  );
});
l0.displayName = "@mantine/notifications/NotificationContainer";
var u0 = { root: "m_b37d9ac7", notification: "m_5ed0edd0" };
const mP = qt,
  gP = {
    position: "bottom-right",
    autoClose: 4e3,
    transitionDuration: 250,
    containerWidth: 440,
    notificationMaxHeight: 200,
    limit: 5,
    zIndex: sr("overlay"),
    store: lr,
    withinPortal: !0,
  },
  yP = (e, { zIndex: t, containerWidth: n }) => ({
    root: {
      "--notifications-z-index": t == null ? void 0 : t.toString(),
      "--notifications-container-width": E(n),
    },
  }),
  Jt = z((e, t) => {
    const n = L("Notifications", gP, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: a,
        vars: l,
        position: u,
        autoClose: c,
        transitionDuration: d,
        containerWidth: f,
        notificationMaxHeight: h,
        limit: v,
        zIndex: y,
        store: S,
        portalProps: g,
        withinPortal: m,
        ...x
      } = n,
      b = He(),
      C = KT(S),
      k = Cb(),
      P = hd(),
      T = w.useRef({}),
      M = w.useRef(0),
      W = (b.respectReducedMotion ? P : !1) ? 1 : d,
      G = U({
        name: "Notifications",
        classes: u0,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: a,
        vars: l,
        varsResolver: yP,
      });
    w.useEffect(() => {
      S == null ||
        S.updateState((xe) => ({ ...xe, limit: v || 5, defaultPosition: u }));
    }, [v, u]),
      pd(() => {
        C.notifications.length > M.current && setTimeout(() => k(), 0),
          (M.current = C.notifications.length);
      }, [C.notifications]);
    const me = dP(C.notifications, u),
      ge = a0.reduce(
        (xe, Te) => (
          (xe[Te] = me[Te].map(({ style: Y, ...R }) =>
            p.jsx(
              mP,
              {
                timeout: W,
                onEnter: () => T.current[R.id].offsetHeight,
                nodeRef: { current: T.current[R.id] },
                children: (_) =>
                  p.jsx(l0, {
                    ref: ($) => {
                      T.current[R.id] = $;
                    },
                    data: R,
                    onHide: ($) => n0($, S),
                    autoClose: c,
                    ...G("notification", {
                      style: {
                        ...pP({
                          state: _,
                          position: Te,
                          transitionDuration: W,
                          maxHeight: h,
                        }),
                        ...Y,
                      },
                    }),
                  }),
              },
              R.id
            )
          )),
          xe
        ),
        {}
      );
    return p.jsxs(Pd, {
      withinPortal: m,
      ...g,
      children: [
        p.jsx(D, {
          ...G("root"),
          "data-position": "top-center",
          ref: t,
          ...x,
          children: p.jsx(sn, { children: ge["top-center"] }),
        }),
        p.jsx(D, {
          ...G("root"),
          "data-position": "top-left",
          ...x,
          children: p.jsx(sn, { children: ge["top-left"] }),
        }),
        p.jsx(D, {
          ...G("root", { className: Qs.classNames.fullWidth }),
          "data-position": "top-right",
          ...x,
          children: p.jsx(sn, { children: ge["top-right"] }),
        }),
        p.jsx(D, {
          ...G("root", { className: Qs.classNames.fullWidth }),
          "data-position": "bottom-right",
          ...x,
          children: p.jsx(sn, { children: ge["bottom-right"] }),
        }),
        p.jsx(D, {
          ...G("root"),
          "data-position": "bottom-left",
          ...x,
          children: p.jsx(sn, { children: ge["bottom-left"] }),
        }),
        p.jsx(D, {
          ...G("root"),
          "data-position": "bottom-center",
          ...x,
          children: p.jsx(sn, { children: ge["bottom-center"] }),
        }),
      ],
    });
  });
Jt.classes = u0;
Jt.displayName = "@mantine/notifications/Notifications";
Jt.show = mo.show;
Jt.hide = mo.hide;
Jt.update = mo.update;
Jt.clean = mo.clean;
Jt.cleanQueue = mo.cleanQueue;
Jt.updateState = mo.updateState;
const c0 = w.createContext({});
function vP(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Wd = w.createContext(null),
  d0 = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function xP(e = !0) {
  const t = w.useContext(Wd);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t,
    i = w.useId();
  w.useEffect(() => {
    e && o(i);
  }, [e]);
  const s = w.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const Hd = typeof window < "u",
  wP = Hd ? w.useLayoutEffect : w.useEffect,
  Xe = (e) => e;
let f0 = Xe;
function Gd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const eo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Bt = (e) => e * 1e3,
  Ut = (e) => e / 1e3,
  SP = { useManualTiming: !1 };
function bP(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    i.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const h = d && r ? t : n;
      return c && i.add(u), h.has(u) || h.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), i.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        o = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        o && ((o = !1), l.process(u));
    },
  };
  return l;
}
const ss = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  CP = 40;
function p0(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = ss.reduce((g, m) => ((g[m] = bP(i)), g), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: f,
    } = s,
    h = () => {
      const g = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(g - o.timestamp, CP), 1)),
        (o.timestamp = g),
        (o.isProcessing = !0),
        a.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        f.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(h));
    },
    v = () => {
      (n = !0), (r = !0), o.isProcessing || e(h);
    };
  return {
    schedule: ss.reduce((g, m) => {
      const x = s[m];
      return (g[m] = (b, C = !1, k = !1) => (n || v(), x.schedule(b, C, k))), g;
    }, {}),
    cancel: (g) => {
      for (let m = 0; m < ss.length; m++) s[ss[m]].cancel(g);
    },
    state: o,
    steps: s,
  };
}
const {
    schedule: Z,
    cancel: Cn,
    state: Se,
    steps: Ml,
  } = p0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Xe, !0),
  h0 = w.createContext({ strict: !1 }),
  ih = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  to = {};
for (const e in ih) to[e] = { isEnabled: (t) => ih[e].some((n) => !!t[n]) };
function TP(e) {
  for (const t in e) to[t] = { ...to[t], ...e[t] };
}
const PP = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ea(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    PP.has(e)
  );
}
let m0 = (e) => !ea(e);
function kP(e) {
  e && (m0 = (t) => (t.startsWith("on") ? !ea(t) : e(t)));
}
try {
  kP(require("@emotion/is-prop-valid").default);
} catch {}
function EP(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((m0(o) ||
        (n === !0 && ea(o)) ||
        (!t && !ea(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function jP(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, o) =>
      o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o)),
  });
}
const Fa = w.createContext({});
function vi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ba(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Yd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Kd = ["initial", ...Yd];
function Ua(e) {
  return Ba(e.animate) || Kd.some((t) => vi(e[t]));
}
function g0(e) {
  return !!(Ua(e) || e.variants);
}
function RP(e, t) {
  if (Ua(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || vi(n) ? n : void 0,
      animate: vi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function NP(e) {
  const { initial: t, animate: n } = RP(e, w.useContext(Fa));
  return w.useMemo(() => ({ initial: t, animate: n }), [sh(t), sh(n)]);
}
function sh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const MP = Symbol.for("motionComponentSymbol");
function Dr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function AP(e, t, n) {
  return w.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Dr(n) && (n.current = r));
    },
    [t]
  );
}
const Xd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  DP = "framerAppearId",
  y0 = "data-" + Xd(DP),
  { schedule: Qd } = p0(queueMicrotask, !1),
  v0 = w.createContext({});
function _P(e, t, n, r, o) {
  var i, s;
  const { visualElement: a } = w.useContext(Fa),
    l = w.useContext(h0),
    u = w.useContext(Wd),
    c = w.useContext(d0).reducedMotion,
    d = w.useRef(null);
  (r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const f = d.current,
    h = w.useContext(v0);
  f &&
    !f.projection &&
    o &&
    (f.type === "html" || f.type === "svg") &&
    LP(d.current, n, o, h);
  const v = w.useRef(!1);
  w.useInsertionEffect(() => {
    f && v.current && f.update(n, u);
  });
  const y = n[y0],
    S = w.useRef(
      !!y &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, y)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, y))
    );
  return (
    wP(() => {
      f &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        Qd.render(f.render),
        S.current && f.animationState && f.animationState.animateChanges());
    }),
    w.useEffect(() => {
      f &&
        (!S.current && f.animationState && f.animationState.animateChanges(),
        S.current &&
          (queueMicrotask(() => {
            var g;
            (g = window.MotionHandoffMarkAsComplete) === null ||
              g === void 0 ||
              g.call(window, y);
          }),
          (S.current = !1)));
    }),
    f
  );
}
function LP(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : x0(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && Dr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function x0(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : x0(e.parent);
}
function $P({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  var i, s;
  e && TP(e);
  function a(u, c) {
    let d;
    const f = { ...w.useContext(d0), ...u, layoutId: IP(u) },
      { isStatic: h } = f,
      v = NP(u),
      y = r(u, h);
    if (!h && Hd) {
      VP();
      const S = zP(f);
      (d = S.MeasureLayout),
        (v.visualElement = _P(o, y, f, t, S.ProjectionNode));
    }
    return p.jsxs(Fa.Provider, {
      value: v,
      children: [
        d && v.visualElement
          ? p.jsx(d, { visualElement: v.visualElement, ...f })
          : null,
        n(o, u, AP(y, v.visualElement, c), y, h, v.visualElement),
      ],
    });
  }
  a.displayName = `motion.${
    typeof o == "string"
      ? o
      : `create(${
          (s = (i = o.displayName) !== null && i !== void 0 ? i : o.name) !==
            null && s !== void 0
            ? s
            : ""
        })`
  }`;
  const l = w.forwardRef(a);
  return (l[MP] = o), l;
}
function IP({ layoutId: e }) {
  const t = w.useContext(c0).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function VP(e, t) {
  w.useContext(h0).strict;
}
function zP(e) {
  const { drag: t, layout: n } = to;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const OP = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Zd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(OP.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function ah(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function qd(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = ah(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = ah(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
const Ju = (e) => Array.isArray(e),
  FP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  BP = (e) => (Ju(e) ? e[e.length - 1] || 0 : e),
  Me = (e) => !!(e && e.getVelocity);
function Cs(e) {
  const t = Me(e) ? e.get() : e;
  return FP(t) ? t.toValue() : t;
}
function UP(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  o,
  i
) {
  const s = { latestValues: WP(r, o, i, e), renderState: t() };
  return (
    n &&
      ((s.onMount = (a) => n({ props: r, current: a, ...s })),
      (s.onUpdate = (a) => n(a))),
    s
  );
}
const w0 = (e) => (t, n) => {
  const r = w.useContext(Fa),
    o = w.useContext(Wd),
    i = () => UP(e, t, r, o);
  return n ? i() : vP(i);
};
function WP(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = Cs(i[f]);
  let { initial: s, animate: a } = e;
  const l = Ua(e),
    u = g0(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != "boolean" && !Ba(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const v = qd(e, f[h]);
      if (v) {
        const { transitionEnd: y, transition: S, ...g } = v;
        for (const m in g) {
          let x = g[m];
          if (Array.isArray(x)) {
            const b = c ? x.length - 1 : 0;
            x = x[b];
          }
          x !== null && (o[m] = x);
        }
        for (const m in y) o[m] = y[m];
      }
    }
  }
  return o;
}
const go = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ur = new Set(go),
  S0 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  b0 = S0("--"),
  HP = S0("var(--"),
  Jd = (e) => (HP(e) ? GP.test(e.split("/*")[0].trim()) : !1),
  GP =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  C0 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Kt = (e, t, n) => (n > t ? t : n < e ? e : n),
  yo = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  xi = { ...yo, transform: (e) => Kt(0, 1, e) },
  as = { ...yo, default: 1 },
  _i = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  nn = _i("deg"),
  At = _i("%"),
  I = _i("px"),
  YP = _i("vh"),
  KP = _i("vw"),
  lh = {
    ...At,
    parse: (e) => At.parse(e) / 100,
    transform: (e) => At.transform(e * 100),
  },
  XP = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    backgroundPositionX: I,
    backgroundPositionY: I,
  },
  QP = {
    rotate: nn,
    rotateX: nn,
    rotateY: nn,
    rotateZ: nn,
    scale: as,
    scaleX: as,
    scaleY: as,
    scaleZ: as,
    skew: nn,
    skewX: nn,
    skewY: nn,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: xi,
    originX: lh,
    originY: lh,
    originZ: I,
  },
  uh = { ...yo, transform: Math.round },
  ef = {
    ...XP,
    ...QP,
    zIndex: uh,
    size: I,
    fillOpacity: xi,
    strokeOpacity: xi,
    numOctaves: uh,
  },
  ZP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  qP = go.length;
function JP(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < qP; i++) {
    const s = go[i],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = C0(a, ef[s]);
      if (!l) {
        o = !1;
        const c = ZP[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
}
function tf(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (ur.has(l)) {
      s = !0;
      continue;
    } else if (b0(l)) {
      o[l] = u;
      continue;
    } else {
      const c = C0(u, ef[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = JP(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const ek = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  tk = { offset: "strokeDashoffset", array: "strokeDasharray" };
function nk(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? ek : tk;
  e[i.offset] = I.transform(-r);
  const s = I.transform(t),
    a = I.transform(n);
  e[i.array] = `${s} ${a}`;
}
function ch(e, t, n) {
  return typeof e == "string" ? e : I.transform(t + n * e);
}
function rk(e, t, n) {
  const r = ch(t, e.x, e.width),
    o = ch(n, e.y, e.height);
  return `${r} ${o}`;
}
function nf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d
) {
  if ((tf(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: h, dimensions: v } = e;
  f.transform && (v && (h.transform = f.transform), delete f.transform),
    v &&
      (o !== void 0 || i !== void 0 || h.transform) &&
      (h.transformOrigin = rk(
        v,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    s !== void 0 && nk(f, s, a, l, !1);
}
const rf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  T0 = () => ({ ...rf(), attrs: {} }),
  of = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function P0(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const k0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function E0(e, t, n, r) {
  P0(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(k0.has(o) ? o : Xd(o), t.attrs[o]);
}
const ta = {};
function ok(e) {
  Object.assign(ta, e);
}
function j0(e, { layout: t, layoutId: n }) {
  return (
    ur.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ta[e] || e === "opacity"))
  );
}
function sf(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (Me(o[s]) ||
      (t.style && Me(t.style[s])) ||
      j0(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[s] = o[s]);
  return i;
}
function R0(e, t, n) {
  const r = sf(e, t, n);
  for (const o in e)
    if (Me(e[o]) || Me(t[o])) {
      const i =
        go.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
function ik(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const dh = ["x", "y", "width", "height", "cx", "cy", "r"],
  sk = {
    useVisualState: w0({
      scrapeMotionValuesFromProps: R0,
      createRenderState: T0,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: o,
      }) => {
        if (!n) return;
        let i = !!e.drag;
        if (!i) {
          for (const a in o)
            if (ur.has(a)) {
              i = !0;
              break;
            }
        }
        if (!i) return;
        let s = !t;
        if (t)
          for (let a = 0; a < dh.length; a++) {
            const l = dh[a];
            e[l] !== t[l] && (s = !0);
          }
        s &&
          Z.read(() => {
            ik(n, r),
              Z.render(() => {
                nf(r, o, of(n.tagName), e.transformTemplate), E0(n, r);
              });
          });
      },
    }),
  },
  ak = {
    useVisualState: w0({
      scrapeMotionValuesFromProps: sf,
      createRenderState: rf,
    }),
  };
function N0(e, t, n) {
  for (const r in t) !Me(t[r]) && !j0(r, n) && (e[r] = t[r]);
}
function lk({ transformTemplate: e }, t) {
  return w.useMemo(() => {
    const n = rf();
    return tf(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function uk(e, t) {
  const n = e.style || {},
    r = {};
  return N0(r, n, e), Object.assign(r, lk(e, t)), r;
}
function ck(e, t) {
  const n = {},
    r = uk(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function dk(e, t, n, r) {
  const o = w.useMemo(() => {
    const i = T0();
    return (
      nf(i, t, of(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    N0(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function fk(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (Zd(n) ? dk : ck)(r, i, s, n),
      u = EP(r, typeof n == "string", e),
      c = n !== w.Fragment ? { ...u, ...l, ref: o } : {},
      { children: d } = r,
      f = w.useMemo(() => (Me(d) ? d.get() : d), [d]);
    return w.createElement(n, { ...c, children: f });
  };
}
function pk(e, t) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Zd(r) ? sk : ak),
      preloadedFeatures: e,
      useRender: fk(o),
      createVisualElement: t,
      Component: r,
    };
    return $P(s);
  };
}
function M0(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Wa(e, t, n) {
  const r = e.getProps();
  return qd(r, t, n !== void 0 ? n : r.custom, e);
}
const hk = Gd(() => window.ScrollTimeline !== void 0);
class mk {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((o) => {
      if (hk() && o.attachTimeline) return o.attachTimeline(t);
      if (typeof n == "function") return n(o);
    });
    return () => {
      r.forEach((o, i) => {
        o && o(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class gk extends mk {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function af(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const ec = 2e4;
function A0(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ec; ) (t += n), (r = e.next(t));
  return t >= ec ? 1 / 0 : t;
}
function lf(e) {
  return typeof e == "function";
}
function fh(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const uf = (e) => Array.isArray(e) && typeof e[0] == "number",
  yk = { linearEasing: void 0 };
function vk(e, t) {
  const n = Gd(e);
  return () => {
    var r;
    return (r = yk[t]) !== null && r !== void 0 ? r : n();
  };
}
const na = vk(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  D0 = (e, t, n = 10) => {
    let r = "";
    const o = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < o; i++) r += e(eo(0, o - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function _0(e) {
  return !!(
    (typeof e == "function" && na()) ||
    !e ||
    (typeof e == "string" && (e in tc || na())) ||
    uf(e) ||
    (Array.isArray(e) && e.every(_0))
  );
}
const Io = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  tc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Io([0, 0.65, 0.55, 1]),
    circOut: Io([0.55, 0, 1, 0.45]),
    backIn: Io([0.31, 0.01, 0.66, -0.59]),
    backOut: Io([0.33, 1.53, 0.69, 0.99]),
  };
function L0(e, t) {
  if (e)
    return typeof e == "function" && na()
      ? D0(e, t)
      : uf(e)
      ? Io(e)
      : Array.isArray(e)
      ? e.map((n) => L0(n, t) || tc.easeOut)
      : tc[e];
}
const ft = { x: !1, y: !1 };
function $0() {
  return ft.x || ft.y;
}
function xk(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let o = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : o.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function I0(e, t) {
  const n = xk(e),
    r = new AbortController(),
    o = { passive: !0, ...t, signal: r.signal };
  return [n, o, () => r.abort()];
}
function ph(e) {
  return (t) => {
    t.pointerType === "touch" || $0() || e(t);
  };
}
function wk(e, t, n = {}) {
  const [r, o, i] = I0(e, n),
    s = ph((a) => {
      const { target: l } = a,
        u = t(a);
      if (typeof u != "function" || !l) return;
      const c = ph((d) => {
        u(d), l.removeEventListener("pointerleave", c);
      });
      l.addEventListener("pointerleave", c, o);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", s, o);
    }),
    i
  );
}
const V0 = (e, t) => (t ? (e === t ? !0 : V0(e, t.parentElement)) : !1),
  cf = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  Sk = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function bk(e) {
  return Sk.has(e.tagName) || e.tabIndex !== -1;
}
const Vo = new WeakSet();
function hh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Al(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const Ck = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = hh(() => {
    if (Vo.has(n)) return;
    Al(n, "down");
    const o = hh(() => {
        Al(n, "up");
      }),
      i = () => Al(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function mh(e) {
  return cf(e) && !$0();
}
function Tk(e, t, n = {}) {
  const [r, o, i] = I0(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!mh(a) || Vo.has(l)) return;
      Vo.add(l);
      const u = t(a),
        c = (h, v) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            !(!mh(h) || !Vo.has(l)) &&
              (Vo.delete(l), typeof u == "function" && u(h, { success: v }));
        },
        d = (h) => {
          c(h, n.useGlobalTarget || V0(l, h.target));
        },
        f = (h) => {
          c(h, !1);
        };
      window.addEventListener("pointerup", d, o),
        window.addEventListener("pointercancel", f, o);
    };
  return (
    r.forEach((a) => {
      !bk(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o),
        a.addEventListener("focus", (u) => Ck(u, o), o);
    }),
    i
  );
}
function Pk(e) {
  return e === "x" || e === "y"
    ? ft[e]
      ? null
      : ((ft[e] = !0),
        () => {
          ft[e] = !1;
        })
    : ft.x || ft.y
    ? null
    : ((ft.x = ft.y = !0),
      () => {
        ft.x = ft.y = !1;
      });
}
const z0 = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...go,
]);
let Ts;
function kk() {
  Ts = void 0;
}
const Dt = {
  now: () => (
    Ts === void 0 &&
      Dt.set(
        Se.isProcessing || SP.useManualTiming ? Se.timestamp : performance.now()
      ),
    Ts
  ),
  set: (e) => {
    (Ts = e), queueMicrotask(kk);
  },
};
function df(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ff(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class pf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return df(this.subscriptions, t), () => ff(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function O0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const gh = 30,
  Ek = (e) => !isNaN(parseFloat(e));
class jk {
  constructor(t, n = {}) {
    (this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = Dt.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Dt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Ek(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new pf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Z.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Dt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > gh
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, gh);
    return O0(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function wi(e, t) {
  return new jk(e, t);
}
function Rk(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, wi(n));
}
function Nk(e, t) {
  const n = Wa(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = BP(i[s]);
    Rk(e, s, a);
  }
}
function Mk(e) {
  return !!(Me(e) && e.add);
}
function nc(e, t) {
  const n = e.getValue("willChange");
  if (Mk(n)) return n.add(t);
}
function F0(e) {
  return e.props[y0];
}
const B0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Ak = 1e-7,
  Dk = 12;
function _k(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = B0(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > Ak && ++a < Dk);
  return s;
}
function Li(e, t, n, r) {
  if (e === t && n === r) return Xe;
  const o = (i) => _k(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : B0(o(i), t, r));
}
const U0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  W0 = (e) => (t) => 1 - e(1 - t),
  H0 = Li(0.33, 1.53, 0.69, 0.99),
  hf = W0(H0),
  G0 = U0(hf),
  Y0 = (e) =>
    (e *= 2) < 1 ? 0.5 * hf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  mf = (e) => 1 - Math.sin(Math.acos(e)),
  K0 = W0(mf),
  X0 = U0(mf),
  Q0 = (e) => /^0[^.\s]+$/u.test(e);
function Lk(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Q0(e)
    : !0;
}
const Xo = (e) => Math.round(e * 1e5) / 1e5,
  gf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function $k(e) {
  return e == null;
}
const Ik =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  yf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Ik.test(n) && n.startsWith(e)) ||
      (t && !$k(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Z0 = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [o, i, s, a] = r.match(gf);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Vk = (e) => Kt(0, 255, e),
  Dl = { ...yo, transform: (e) => Math.round(Vk(e)) },
  Gn = {
    test: yf("rgb", "red"),
    parse: Z0("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Dl.transform(e) +
      ", " +
      Dl.transform(t) +
      ", " +
      Dl.transform(n) +
      ", " +
      Xo(xi.transform(r)) +
      ")",
  };
function zk(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const rc = { test: yf("#"), parse: zk, transform: Gn.transform },
  _r = {
    test: yf("hsl", "hue"),
    parse: Z0("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      At.transform(Xo(t)) +
      ", " +
      At.transform(Xo(n)) +
      ", " +
      Xo(xi.transform(r)) +
      ")",
  },
  je = {
    test: (e) => Gn.test(e) || rc.test(e) || _r.test(e),
    parse: (e) =>
      Gn.test(e) ? Gn.parse(e) : _r.test(e) ? _r.parse(e) : rc.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? Gn.transform(e)
        : _r.transform(e),
  },
  Ok =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Fk(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(gf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Ok)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const q0 = "number",
  J0 = "color",
  Bk = "var",
  Uk = "var(",
  yh = "${}",
  Wk =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Si(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      Wk,
      (l) => (
        je.test(l)
          ? (r.color.push(i), o.push(J0), n.push(je.parse(l)))
          : l.startsWith(Uk)
          ? (r.var.push(i), o.push(Bk), n.push(l))
          : (r.number.push(i), o.push(q0), n.push(parseFloat(l))),
        ++i,
        yh
      )
    )
    .split(yh);
  return { values: n, split: a, indexes: r, types: o };
}
function e1(e) {
  return Si(e).values;
}
function t1(e) {
  const { split: t, types: n } = Si(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = n[s];
        a === q0
          ? (i += Xo(o[s]))
          : a === J0
          ? (i += je.transform(o[s]))
          : (i += o[s]);
      }
    return i;
  };
}
const Hk = (e) => (typeof e == "number" ? 0 : e);
function Gk(e) {
  const t = e1(e);
  return t1(e)(t.map(Hk));
}
const Tn = {
    test: Fk,
    parse: e1,
    createTransformer: t1,
    getAnimatableNone: Gk,
  },
  Yk = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Kk(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(gf) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = Yk.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const Xk = /\b([a-z-]*)\(.*?\)/gu,
  oc = {
    ...Tn,
    getAnimatableNone: (e) => {
      const t = e.match(Xk);
      return t ? t.map(Kk).join(" ") : e;
    },
  },
  Qk = {
    ...ef,
    color: je,
    backgroundColor: je,
    outlineColor: je,
    fill: je,
    stroke: je,
    borderColor: je,
    borderTopColor: je,
    borderRightColor: je,
    borderBottomColor: je,
    borderLeftColor: je,
    filter: oc,
    WebkitFilter: oc,
  },
  vf = (e) => Qk[e];
function n1(e, t) {
  let n = vf(e);
  return (
    n !== oc && (n = Tn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Zk = new Set(["auto", "none", "0"]);
function qk(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !Zk.has(i) && Si(i).values.length && (o = e[r]),
      r++;
  }
  if (o && n) for (const i of t) e[i] = n1(n, o);
}
const vh = (e) => e === yo || e === I,
  xh = (e, t) => parseFloat(e.split(", ")[t]),
  wh =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return xh(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? xh(i[1], e) : 0;
      }
    },
  Jk = new Set(["x", "y", "z"]),
  eE = go.filter((e) => !Jk.has(e));
function tE(e) {
  const t = [];
  return (
    eE.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const no = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: wh(4, 13),
  y: wh(5, 14),
};
no.translateX = no.x;
no.translateY = no.y;
const Zn = new Set();
let ic = !1,
  sc = !1;
function r1() {
  if (sc) {
    const e = Array.from(Zn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = tE(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (sc = !1), (ic = !1), Zn.forEach((e) => e.complete()), Zn.clear();
}
function o1() {
  Zn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (sc = !0);
  });
}
function nE() {
  o1(), r1();
}
class xf {
  constructor(t, n, r, o, i, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Zn.add(this), ic || ((ic = !0), Z.read(o1), Z.resolveKeyframes(r1)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Zn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Zn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const i1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  rE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function oE(e) {
  const t = rE.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function s1(e, t, n = 1) {
  const [r, o] = oE(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return i1(s) ? parseFloat(s) : s;
  }
  return Jd(o) ? s1(o, t, n + 1) : o;
}
const a1 = (e) => (t) => t.test(e),
  iE = { test: (e) => e === "auto", parse: (e) => e },
  l1 = [yo, I, At, nn, KP, YP, iE],
  Sh = (e) => l1.find(a1(e));
class u1 extends xf {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Jd(u))) {
        const c = s1(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !z0.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = Sh(o),
      a = Sh(i);
    if (s !== a)
      if (vh(s) && vh(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) Lk(t[o]) && r.push(o);
    r.length && qk(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = no[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      a = o[s];
    (o[s] = no[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
const bh = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Tn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function sE(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function aE(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    s = bh(o, t),
    a = bh(i, t);
  return !s || !a ? !1 : sE(e) || ((n === "spring" || lf(n)) && r);
}
const lE = (e) => e !== null;
function Ha(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(lE),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const uE = 40;
class c1 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Dt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > uE
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && nE(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Dt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: o,
      velocity: i,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !aE(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        l && l(Ha(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const te = (e, t, n) => e + (t - e) * n;
function _l(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function cE({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = _l(l, a, e + 1 / 3)), (i = _l(l, a, e)), (s = _l(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function ra(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ll = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  dE = [rc, Gn, _r],
  fE = (e) => dE.find((t) => t.test(e));
function Ch(e) {
  const t = fE(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === _r && (n = cE(n)), n;
}
const Th = (e, t) => {
    const n = Ch(e),
      r = Ch(t);
    if (!n || !r) return ra(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = Ll(n.red, r.red, i)),
      (o.green = Ll(n.green, r.green, i)),
      (o.blue = Ll(n.blue, r.blue, i)),
      (o.alpha = te(n.alpha, r.alpha, i)),
      Gn.transform(o)
    );
  },
  pE = (e, t) => (n) => t(e(n)),
  $i = (...e) => e.reduce(pE),
  ac = new Set(["none", "hidden"]);
function hE(e, t) {
  return ac.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function mE(e, t) {
  return (n) => te(e, t, n);
}
function wf(e) {
  return typeof e == "number"
    ? mE
    : typeof e == "string"
    ? Jd(e)
      ? ra
      : je.test(e)
      ? Th
      : vE
    : Array.isArray(e)
    ? d1
    : typeof e == "object"
    ? je.test(e)
      ? Th
      : gE
    : ra;
}
function d1(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => wf(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function gE(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = wf(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function yE(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      a = e.indexes[s][o[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[s]++;
  }
  return r;
}
const vE = (e, t) => {
  const n = Tn.createTransformer(t),
    r = Si(e),
    o = Si(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (ac.has(e) && !o.values.length) || (ac.has(t) && !r.values.length)
      ? hE(e, t)
      : $i(d1(yE(r, o), o.values), n)
    : ra(e, t);
};
function f1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? te(e, t, n)
    : wf(e)(e, t);
}
const xE = 5;
function p1(e, t, n) {
  const r = Math.max(t - xE, 0);
  return O0(n - e(r), t - r);
}
const oe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  $l = 0.001;
function wE({
  duration: e = oe.duration,
  bounce: t = oe.bounce,
  velocity: n = oe.velocity,
  mass: r = oe.mass,
}) {
  let o,
    i,
    s = 1 - t;
  (s = Kt(oe.minDamping, oe.maxDamping, s)),
    (e = Kt(oe.minDuration, oe.maxDuration, Ut(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            h = lc(u, s),
            v = Math.exp(-d);
          return $l - (f / h) * v;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            y = lc(Math.pow(u, 2), s);
          return ((-o(u) + $l > 0 ? -1 : 1) * ((f - h) * v)) / y;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -$l + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = bE(o, i, a);
  if (((e = Bt(e)), isNaN(l)))
    return { stiffness: oe.stiffness, damping: oe.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const SE = 12;
function bE(e, t, n) {
  let r = n;
  for (let o = 1; o < SE; o++) r = r - e(r) / t(r);
  return r;
}
function lc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const CE = ["duration", "bounce"],
  TE = ["stiffness", "damping", "mass"];
function Ph(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function PE(e) {
  let t = {
    velocity: oe.velocity,
    stiffness: oe.stiffness,
    damping: oe.damping,
    mass: oe.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Ph(e, TE) && Ph(e, CE))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        o = r * r,
        i = 2 * Kt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = { ...t, mass: oe.mass, stiffness: o, damping: i };
    } else {
      const n = wE(e);
      (t = { ...t, ...n, mass: oe.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function h1(e = oe.visualDuration, t = oe.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = PE({ ...n, velocity: -Ut(n.velocity || 0) }),
    v = f || 0,
    y = u / (2 * Math.sqrt(l * c)),
    S = s - i,
    g = Ut(Math.sqrt(l / c)),
    m = Math.abs(S) < 5;
  r || (r = m ? oe.restSpeed.granular : oe.restSpeed.default),
    o || (o = m ? oe.restDelta.granular : oe.restDelta.default);
  let x;
  if (y < 1) {
    const C = lc(g, y);
    x = (k) => {
      const P = Math.exp(-y * g * k);
      return (
        s - P * (((v + y * g * S) / C) * Math.sin(C * k) + S * Math.cos(C * k))
      );
    };
  } else if (y === 1) x = (C) => s - Math.exp(-g * C) * (S + (v + g * S) * C);
  else {
    const C = g * Math.sqrt(y * y - 1);
    x = (k) => {
      const P = Math.exp(-y * g * k),
        T = Math.min(C * k, 300);
      return (
        s - (P * ((v + y * g * S) * Math.sinh(T) + C * S * Math.cosh(T))) / C
      );
    };
  }
  const b = {
    calculatedDuration: (h && d) || null,
    next: (C) => {
      const k = x(C);
      if (h) a.done = C >= d;
      else {
        let P = 0;
        y < 1 && (P = C === 0 ? Bt(v) : p1(x, C, k));
        const T = Math.abs(P) <= r,
          M = Math.abs(s - k) <= o;
        a.done = T && M;
      }
      return (a.value = a.done ? s : k), a;
    },
    toString: () => {
      const C = Math.min(A0(b), ec),
        k = D0((P) => b.next(C * P).value, C, 30);
      return C + "ms " + k;
    },
  };
  return b;
}
function kh({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    v = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
        ? a
        : l;
  let y = n * t;
  const S = d + y,
    g = s === void 0 ? S : s(S);
  g !== S && (y = g - d);
  const m = (T) => -y * Math.exp(-T / r),
    x = (T) => g + m(T),
    b = (T) => {
      const M = m(T),
        N = x(T);
      (f.done = Math.abs(M) <= u), (f.value = f.done ? g : N);
    };
  let C, k;
  const P = (T) => {
    h(f.value) &&
      ((C = T),
      (k = h1({
        keyframes: [f.value, v(f.value)],
        velocity: p1(x, T, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let M = !1;
        return (
          !k && C === void 0 && ((M = !0), b(T), P(T)),
          C !== void 0 && T >= C ? k.next(T - C) : (!M && b(T), f)
        );
      },
    }
  );
}
const kE = Li(0.42, 0, 1, 1),
  EE = Li(0, 0, 0.58, 1),
  m1 = Li(0.42, 0, 0.58, 1),
  jE = (e) => Array.isArray(e) && typeof e[0] != "number",
  RE = {
    linear: Xe,
    easeIn: kE,
    easeInOut: m1,
    easeOut: EE,
    circIn: mf,
    circInOut: X0,
    circOut: K0,
    backIn: hf,
    backInOut: G0,
    backOut: H0,
    anticipate: Y0,
  },
  Eh = (e) => {
    if (uf(e)) {
      f0(e.length === 4);
      const [t, n, r, o] = e;
      return Li(t, n, r, o);
    } else if (typeof e == "string") return RE[e];
    return e;
  };
function NE(e, t, n) {
  const r = [],
    o = n || f1,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Xe : t;
      a = $i(l, a);
    }
    r.push(a);
  }
  return r;
}
function ME(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((f0(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = NE(t, r, o),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = eo(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(Kt(e[0], e[i - 1], c)) : u;
}
function AE(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = eo(0, t, r);
    e.push(te(n, 1, o));
  }
}
function DE(e) {
  const t = [0];
  return AE(t, e.length - 1), t;
}
function _E(e, t) {
  return e.map((n) => n * t);
}
function LE(e, t) {
  return e.map(() => t || m1).splice(0, e.length - 1);
}
function oa({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = jE(r) ? r.map(Eh) : Eh(r),
    i = { done: !1, value: t[0] },
    s = _E(n && n.length === t.length ? n : DE(t), e),
    a = ME(s, t, { ease: Array.isArray(o) ? o : LE(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const $E = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Z.update(t, !0),
      stop: () => Cn(t),
      now: () => (Se.isProcessing ? Se.timestamp : Dt.now()),
    };
  },
  IE = { decay: kh, inertia: kh, tween: oa, keyframes: oa, spring: h1 },
  VE = (e) => e / 100;
class Sf extends c1 {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
      s = (o == null ? void 0 : o.KeyframeResolver) || xf,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(i, a, n, r, o)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0,
      } = this.options,
      a = lf(n) ? n : IE[n] || oa;
    let l, u;
    a !== oa &&
      typeof t[0] != "number" &&
      ((l = $i(VE, f1(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = A0(c));
    const { calculatedDuration: d } = c,
      f = d + o,
      h = f * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: h,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: h,
      repeatType: v,
      repeatDelay: y,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const g = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      m = this.speed >= 0 ? g < 0 : g > c;
    (this.currentTime = Math.max(g, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let x = this.currentTime,
      b = i;
    if (h) {
      const T = Math.min(this.currentTime, c) / d;
      let M = Math.floor(T),
        N = T % 1;
      !N && T >= 1 && (N = 1),
        N === 1 && M--,
        (M = Math.min(M, h + 1)),
        !!(M % 2) &&
          (v === "reverse"
            ? ((N = 1 - N), y && (N -= y / d))
            : v === "mirror" && (b = s)),
        (x = Kt(0, 1, N) * d);
    }
    const C = m ? { done: !1, value: l[0] } : b.next(x);
    a && (C.value = a(C.value));
    let { done: k } = C;
    !m &&
      u !== null &&
      (k = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && k));
    return (
      P && o !== void 0 && (C.value = Ha(l, this.options, o)),
      S && S(C.value),
      P && this.finish(),
      C
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Ut(t.calculatedDuration) : 0;
  }
  get time() {
    return Ut(this.currentTime);
  }
  set time(t) {
    (t = Bt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Ut(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = $E, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = o)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const zE = new Set(["opacity", "clipPath", "filter", "transform"]);
function OE(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = L0(a, o);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const FE = Gd(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ia = 10,
  BE = 2e4;
function UE(e) {
  return lf(e.type) || e.type === "spring" || !_0(e.ease);
}
function WE(e, t) {
  const n = new Sf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < BE; ) (r = n.sample(i)), o.push(r.value), (i += ia);
  return { times: void 0, keyframes: o, duration: i - ia, ease: "linear" };
}
const g1 = { anticipate: Y0, backInOut: G0, circInOut: X0 };
function HE(e) {
  return e in g1;
}
class jh extends c1 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    (this.resolver = new u1(
      i,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      o
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: o,
      ease: i,
      type: s,
      motionValue: a,
      name: l,
      startTime: u,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof i == "string" && na() && HE(i) && (i = g1[i]), UE(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: f,
          motionValue: h,
          element: v,
          ...y
        } = this.options,
        S = WE(t, y);
      (t = S.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = S.duration),
        (o = S.times),
        (i = S.ease),
        (s = "keyframes");
    }
    const c = OE(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: o,
      ease: i,
    });
    return (
      (c.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (fh(c, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(Ha(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: r, times: o, type: s, ease: i, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Ut(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Ut(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Bt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Xe;
      const { animation: r } = n;
      fh(r, t);
    }
    return Xe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: o,
      type: i,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: f,
          ...h
        } = this.options,
        v = new Sf({
          ...h,
          keyframes: r,
          duration: o,
          type: i,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        y = Bt(this.time);
      u.setWithVelocity(v.sample(y - ia).value, v.sample(y).value, ia);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: s,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return (
      FE() &&
      r &&
      zE.has(r) &&
      !l &&
      !u &&
      !o &&
      i !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const GE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  YE = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  KE = { type: "keyframes", duration: 0.8 },
  XE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  QE = (e, { keyframes: t }) =>
    t.length > 2
      ? KE
      : ur.has(e)
      ? e.startsWith("scale")
        ? YE(t[1])
        : GE
      : XE;
function ZE({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const bf =
  (e, t, n, r = {}, o, i) =>
  (s) => {
    const a = af(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Bt(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : o,
    };
    ZE(a) || (c = { ...c, ...QE(e, c) }),
      c.duration && (c.duration = Bt(c.duration)),
      c.repeatDelay && (c.repeatDelay = Bt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !i && t.get() !== void 0)
    ) {
      const f = Ha(c.keyframes, a);
      if (f !== void 0)
        return (
          Z.update(() => {
            c.onUpdate(f), c.onComplete();
          }),
          new gk([])
        );
    }
    return !i && jh.supports(c) ? new jh(c) : new Sf(c);
  };
function qE({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function y1(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(
        d,
        (i = e.latestValues[d]) !== null && i !== void 0 ? i : null
      ),
      h = l[d];
    if (h === void 0 || (c && qE(c, d))) continue;
    const v = { delay: n, ...af(s || {}, d) };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const g = F0(e);
      if (g) {
        const m = window.MotionHandoffAnimation(g, d, Z);
        m !== null && ((v.startTime = m), (y = !0));
      }
    }
    nc(e, d),
      f.start(
        bf(d, f, h, e.shouldReduceMotion && z0.has(d) ? { type: !1 } : v, e, y)
      );
    const S = f.animation;
    S && u.push(S);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        Z.update(() => {
          a && Nk(e, a);
        });
      }),
    u
  );
}
function uc(e, t, n = {}) {
  var r;
  const o = Wa(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(y1(e, o, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return JE(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function JE(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(ej)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            uc(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function ej(e, t) {
  return e.sortNodePosition(t);
}
function tj(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => uc(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = uc(e, t, n);
  else {
    const o = typeof t == "function" ? Wa(e, t, n.custom) : t;
    r = Promise.all(y1(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const nj = Kd.length;
function v1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? v1(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < nj; n++) {
    const r = Kd[n],
      o = e.props[r];
    (vi(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const rj = [...Yd].reverse(),
  oj = Yd.length;
function ij(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => tj(e, n, r)));
}
function sj(e) {
  let t = ij(e),
    n = Rh(),
    r = !0;
  const o = (l) => (u, c) => {
    var d;
    const f = Wa(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: h, transitionEnd: v, ...y } = f;
      u = { ...u, ...y, ...v };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = v1(e.parent) || {},
      d = [],
      f = new Set();
    let h = {},
      v = 1 / 0;
    for (let S = 0; S < oj; S++) {
      const g = rj[S],
        m = n[g],
        x = u[g] !== void 0 ? u[g] : c[g],
        b = vi(x),
        C = g === l ? m.isActive : null;
      C === !1 && (v = S);
      let k = x === c[g] && x !== u[g] && b;
      if (
        (k && r && e.manuallyAnimateOnMount && (k = !1),
        (m.protectedKeys = { ...h }),
        (!m.isActive && C === null) ||
          (!x && !m.prevProp) ||
          Ba(x) ||
          typeof x == "boolean")
      )
        continue;
      const P = aj(m.prevProp, x);
      let T = P || (g === l && m.isActive && !k && b) || (S > v && b),
        M = !1;
      const N = Array.isArray(x) ? x : [x];
      let W = N.reduce(o(g), {});
      C === !1 && (W = {});
      const { prevResolvedValues: G = {} } = m,
        me = { ...G, ...W },
        ge = (Y) => {
          (T = !0),
            f.has(Y) && ((M = !0), f.delete(Y)),
            (m.needsAnimating[Y] = !0);
          const R = e.getValue(Y);
          R && (R.liveStyle = !1);
        };
      for (const Y in me) {
        const R = W[Y],
          _ = G[Y];
        if (h.hasOwnProperty(Y)) continue;
        let $ = !1;
        Ju(R) && Ju(_) ? ($ = !M0(R, _)) : ($ = R !== _),
          $
            ? R != null
              ? ge(Y)
              : f.add(Y)
            : R !== void 0 && f.has(Y)
            ? ge(Y)
            : (m.protectedKeys[Y] = !0);
      }
      (m.prevProp = x),
        (m.prevResolvedValues = W),
        m.isActive && (h = { ...h, ...W }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!(k && P) || M) &&
          d.push(...N.map((Y) => ({ animation: Y, options: { type: g } })));
    }
    if (f.size) {
      const S = {};
      f.forEach((g) => {
        const m = e.getBaseTarget(g),
          x = e.getValue(g);
        x && (x.liveStyle = !0), (S[g] = m ?? null);
      }),
        d.push({ animation: S });
    }
    let y = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (y = !1),
      (r = !1),
      y ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var h;
        return (h = f.animationState) === null || h === void 0
          ? void 0
          : h.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = Rh()), (r = !0);
    },
  };
}
function aj(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !M0(t, e) : !1;
}
function Dn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Rh() {
  return {
    animate: Dn(!0),
    whileInView: Dn(),
    whileHover: Dn(),
    whileTap: Dn(),
    whileDrag: Dn(),
    whileFocus: Dn(),
    exit: Dn(),
  };
}
class Mn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class lj extends Mn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = sj(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ba(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let uj = 0;
class cj extends Mn {
  constructor() {
    super(...arguments), (this.id = uj++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const dj = { animation: { Feature: lj }, exit: { Feature: cj } };
function bi(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Ii(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const fj = (e) => (t) => cf(t) && e(t, Ii(t));
function Qo(e, t, n, r) {
  return bi(e, t, fj(n), r);
}
const Nh = (e, t) => Math.abs(e - t);
function pj(e, t) {
  const n = Nh(e.x, t.x),
    r = Nh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class x1 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Vl(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          h = pj(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !h) return;
        const { point: v } = d,
          { timestamp: y } = Se;
        this.history.push({ ...v, timestamp: y });
        const { onStart: S, onMove: g } = this.handlers;
        f ||
          (S && S(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Il(f, this.transformPagePoint)),
          Z.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: h, onSessionEnd: v, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = Vl(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Il(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && h && h(d, S), v && v(d, S);
      }),
      !cf(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const s = Ii(t),
      a = Il(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Se;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Vl(a, this.history)),
      (this.removeListeners = $i(
        Qo(this.contextWindow, "pointermove", this.handlePointerMove),
        Qo(this.contextWindow, "pointerup", this.handlePointerUp),
        Qo(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Cn(this.updatePoint);
  }
}
function Il(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Mh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Vl({ point: e }, t) {
  return {
    point: e,
    delta: Mh(e, w1(t)),
    offset: Mh(e, hj(t)),
    velocity: mj(t, 0.1),
  };
}
function hj(e) {
  return e[0];
}
function w1(e) {
  return e[e.length - 1];
}
function mj(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = w1(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Bt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Ut(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const S1 = 1e-4,
  gj = 1 - S1,
  yj = 1 + S1,
  b1 = 0.01,
  vj = 0 - b1,
  xj = 0 + b1;
function Ze(e) {
  return e.max - e.min;
}
function wj(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ah(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = te(t.min, t.max, e.origin)),
    (e.scale = Ze(n) / Ze(t)),
    (e.translate = te(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= gj && e.scale <= yj) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= vj && e.translate <= xj) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Zo(e, t, n, r) {
  Ah(e.x, t.x, n.x, r ? r.originX : void 0),
    Ah(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Dh(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ze(t));
}
function Sj(e, t, n) {
  Dh(e.x, t.x, n.x), Dh(e.y, t.y, n.y);
}
function _h(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ze(t));
}
function qo(e, t, n) {
  _h(e.x, t.x, n.x), _h(e.y, t.y, n.y);
}
function bj(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? te(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? te(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Lh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Cj(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: Lh(e.x, n, o), y: Lh(e.y, t, r) };
}
function $h(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Tj(e, t) {
  return { x: $h(e.x, t.x), y: $h(e.y, t.y) };
}
function Pj(e, t) {
  let n = 0.5;
  const r = Ze(e),
    o = Ze(t);
  return (
    o > r
      ? (n = eo(t.min, t.max - r, e.min))
      : r > o && (n = eo(e.min, e.max - o, t.min)),
    Kt(0, 1, n)
  );
}
function kj(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const cc = 0.35;
function Ej(e = cc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = cc),
    { x: Ih(e, "left", "right"), y: Ih(e, "top", "bottom") }
  );
}
function Ih(e, t, n) {
  return { min: Vh(e, t), max: Vh(e, n) };
}
function Vh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const zh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Lr = () => ({ x: zh(), y: zh() }),
  Oh = () => ({ min: 0, max: 0 }),
  ae = () => ({ x: Oh(), y: Oh() });
function tt(e) {
  return [e("x"), e("y")];
}
function C1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function jj({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Rj(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function zl(e) {
  return e === void 0 || e === 1;
}
function dc({ scale: e, scaleX: t, scaleY: n }) {
  return !zl(e) || !zl(t) || !zl(n);
}
function Vn(e) {
  return (
    dc(e) ||
    T1(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function T1(e) {
  return Fh(e.x) || Fh(e.y);
}
function Fh(e) {
  return e && e !== "0%";
}
function sa(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Bh(e, t, n, r, o) {
  return o !== void 0 && (e = sa(e, o, r)), sa(e, n, r) + t;
}
function fc(e, t = 0, n = 1, r, o) {
  (e.min = Bh(e.min, t, n, r, o)), (e.max = Bh(e.max, t, n, r, o));
}
function P1(e, { x: t, y: n }) {
  fc(e.x, t.translate, t.scale, t.originPoint),
    fc(e.y, n.translate, n.scale, n.originPoint);
}
const Uh = 0.999999999999,
  Wh = 1.0000000000001;
function Nj(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Ir(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), P1(e, s)),
      r && Vn(i.latestValues) && Ir(e, i.latestValues));
  }
  t.x < Wh && t.x > Uh && (t.x = 1), t.y < Wh && t.y > Uh && (t.y = 1);
}
function $r(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Hh(e, t, n, r, o = 0.5) {
  const i = te(e.min, e.max, o);
  fc(e, t, n, i, r);
}
function Ir(e, t) {
  Hh(e.x, t.x, t.scaleX, t.scale, t.originX),
    Hh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function k1(e, t) {
  return C1(Rj(e.getBoundingClientRect(), t));
}
function Mj(e, t, n) {
  const r = k1(e, n),
    { scroll: o } = t;
  return o && ($r(r.x, o.offset.x), $r(r.y, o.offset.y)), r;
}
const E1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Aj = new WeakMap();
class Dj {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ae()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ii(c).point);
      },
      i = (c, d) => {
        const { drag: f, dragPropagation: h, onDragStart: v } = this.getProps();
        if (
          f &&
          !h &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Pk(f)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          tt((S) => {
            let g = this.getAxisMotionValue(S).get() || 0;
            if (At.test(g)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const x = m.layout.layoutBox[S];
                x && (g = Ze(x) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[S] = g;
          }),
          v && Z.postRender(() => v(c, d)),
          nc(this.visualElement, "transform");
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      s = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: h,
          onDirectionLock: v,
          onDrag: y,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: S } = d;
        if (h && this.currentDirection === null) {
          (this.currentDirection = _j(S)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, S),
          this.updateAxis("y", d.point, S),
          this.visualElement.render(),
          y && y(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        tt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new x1(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: E1(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Z.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !ls(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = bj(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && Dr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = Cj(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = Ej(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        tt((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = kj(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Dr(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = Mj(r, o.root, this.visualElement.getTransformPagePoint());
    let s = Tj(o.layout.layoutBox, i);
    if (n) {
      const a = n(jj(s));
      (this.hasMutatedConstraints = !!a), a && (s = C1(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = tt((c) => {
        if (!ls(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      nc(this.visualElement, t), r.start(bf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    tt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    tt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    tt((n) => {
      const { drag: r } = this.getProps();
      if (!ls(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - te(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Dr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    tt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = Pj({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      tt((s) => {
        if (!ls(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(te(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Aj.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Qo(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Dr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      Z.read(r);
    const s = bi(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (tt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = cc,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function ls(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function _j(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Lj extends Mn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Xe),
      (this.removeListeners = Xe),
      (this.controls = new Dj(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Xe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Gh = (e) => (t, n) => {
  e && Z.postRender(() => e(t, n));
};
class $j extends Mn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Xe);
  }
  onPointerDown(t) {
    this.session = new x1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: E1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Gh(t),
      onStart: Gh(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && Z.postRender(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Qo(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ps = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Yh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const No = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (I.test(e)) e = parseFloat(e);
        else return e;
      const n = Yh(e, t.target.x),
        r = Yh(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Ij = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = Tn.parse(e);
      if (o.length > 5) return r;
      const i = Tn.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const u = te(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  };
class Vj extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    ok(zj),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ps.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              Z.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Qd.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function j1(e) {
  const [t, n] = xP(),
    r = w.useContext(c0);
  return p.jsx(Vj, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(v0),
    isPresent: t,
    safeToRemove: n,
  });
}
const zj = {
  borderRadius: {
    ...No,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: No,
  borderTopRightRadius: No,
  borderBottomLeftRadius: No,
  borderBottomRightRadius: No,
  boxShadow: Ij,
};
function Oj(e, t, n) {
  const r = Me(e) ? e : wi(e);
  return r.start(bf("", r, t, n)), r.animation;
}
function Fj(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const Bj = (e, t) => e.depth - t.depth;
class Uj {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    df(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    ff(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Bj),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Wj(e, t) {
  const n = Dt.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (Cn(r), e(i - t));
    };
  return Z.read(r, !0), () => Cn(r);
}
const R1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Hj = R1.length,
  Kh = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Xh = (e) => typeof e == "number" || I.test(e);
function Gj(e, t, n, r, o, i) {
  o
    ? ((e.opacity = te(0, n.opacity !== void 0 ? n.opacity : 1, Yj(r))),
      (e.opacityExit = te(t.opacity !== void 0 ? t.opacity : 1, 0, Kj(r))))
    : i &&
      (e.opacity = te(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < Hj; s++) {
    const a = `border${R1[s]}Radius`;
    let l = Qh(t, a),
      u = Qh(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Xh(l) === Xh(u)
        ? ((e[a] = Math.max(te(Kh(l), Kh(u), r), 0)),
          (At.test(u) || At.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = te(t.rotate || 0, n.rotate || 0, r));
}
function Qh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Yj = N1(0, 0.5, K0),
  Kj = N1(0.5, 0.95, Xe);
function N1(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(eo(e, t, r)));
}
function Zh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function et(e, t) {
  Zh(e.x, t.x), Zh(e.y, t.y);
}
function qh(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Jh(e, t, n, r, o) {
  return (
    (e -= t), (e = sa(e, 1 / n, r)), o !== void 0 && (e = sa(e, 1 / o, r)), e
  );
}
function Xj(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (At.test(t) &&
      ((t = parseFloat(t)), (t = te(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = te(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = Jh(e.min, t, n, a, o)),
    (e.max = Jh(e.max, t, n, a, o));
}
function em(e, t, [n, r, o], i, s) {
  Xj(e, t[n], t[r], t[o], t.scale, i, s);
}
const Qj = ["x", "scaleX", "originX"],
  Zj = ["y", "scaleY", "originY"];
function tm(e, t, n, r) {
  em(e.x, t, Qj, n ? n.x : void 0, r ? r.x : void 0),
    em(e.y, t, Zj, n ? n.y : void 0, r ? r.y : void 0);
}
function nm(e) {
  return e.translate === 0 && e.scale === 1;
}
function M1(e) {
  return nm(e.x) && nm(e.y);
}
function rm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function qj(e, t) {
  return rm(e.x, t.x) && rm(e.y, t.y);
}
function om(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function A1(e, t) {
  return om(e.x, t.x) && om(e.y, t.y);
}
function im(e) {
  return Ze(e.x) / Ze(e.y);
}
function sm(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class Jj {
  constructor() {
    this.members = [];
  }
  add(t) {
    df(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (ff(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function eR(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: h,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const zn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  zo = typeof window < "u" && window.MotionDebug !== void 0,
  Ol = ["", "X", "Y", "Z"],
  tR = { visibility: "hidden" },
  am = 1e3;
let nR = 0;
function Fl(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function D1(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = F0(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Z, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && D1(r);
}
function _1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = nR++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            zo &&
              (zn.totalNodes =
                zn.resolvedTargetDeltas =
                zn.recalculatedProjection =
                  0),
            this.nodes.forEach(iR),
            this.nodes.forEach(cR),
            this.nodes.forEach(dR),
            this.nodes.forEach(sR),
            zo && window.MotionDebug.record(zn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Uj());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new pf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Fj(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = Wj(f, 250)),
            Ps.hasAnimatedSinceResize &&
              ((Ps.hasAnimatedSinceResize = !1), this.nodes.forEach(um));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: h,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y =
                  this.options.transition || c.getDefaultTransition() || gR,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: g } =
                  c.getProps(),
                m = !this.targetLayout || !A1(this.targetLayout, v) || h,
                x = !f && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                x ||
                (f && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, x);
                const b = { ...af(y, "layout"), onPlay: S, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((b.delay = 0), (b.type = !1)),
                  this.startAnimation(b);
              } else
                f || um(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Cn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(fR),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          D1(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(lm);
        return;
      }
      this.isUpdating || this.nodes.forEach(lR),
        (this.isUpdating = !1),
        this.nodes.forEach(uR),
        this.nodes.forEach(rR),
        this.nodes.forEach(oR),
        this.clearAllSnapshots();
      const a = Dt.now();
      (Se.delta = Kt(0, 1e3 / 60, a - Se.timestamp)),
        (Se.timestamp = a),
        (Se.isProcessing = !0),
        Ml.update.process(Se),
        Ml.preRender.process(Se),
        Ml.render.process(Se),
        (Se.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Qd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(aR), this.sharedNodes.forEach(pR);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Z.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Z.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ae()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !M1(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Vn(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        yR(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return ae();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(vR)
        )
      ) {
        const { scroll: c } = this.root;
        c && ($r(l.x, c.offset.x), $r(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = ae();
      if (
        (et(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && et(l, s), $r(l.x, d.offset.x), $r(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = ae();
      et(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Ir(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Vn(c.latestValues) && Ir(l, c.latestValues);
      }
      return Vn(this.latestValues) && Ir(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ae();
      et(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Vn(u.latestValues)) continue;
        dc(u.latestValues) && u.updateSnapshot();
        const c = ae(),
          d = u.measurePageBox();
        et(c, d),
          tm(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Vn(this.latestValues) && tm(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Se.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Se.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ae()),
              (this.relativeTargetOrigin = ae()),
              qo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              et(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ae()), (this.targetWithTransforms = ae())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Sj(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : et(this.target, this.layout.layoutBox),
                P1(this.target, this.targetDelta))
              : et(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ae()),
                (this.relativeTargetOrigin = ae()),
                qo(this.relativeTargetOrigin, this.target, h.target),
                et(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          zo && zn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          dc(this.parent.latestValues) ||
          T1(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Se.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      et(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      Nj(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ae()));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (qh(this.prevProjectionDelta.x, this.projectionDelta.x),
          qh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Zo(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== h ||
          !sm(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !sm(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        zo && zn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Lr()),
        (this.projectionDelta = Lr()),
        (this.projectionDeltaWithTransform = Lr());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Lr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = ae(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = h !== v,
        S = this.getStack(),
        g = !S || S.members.length <= 1,
        m = !!(y && !g && this.options.crossfade === !0 && !this.path.some(mR));
      this.animationProgress = 0;
      let x;
      (this.mixTargetDelta = (b) => {
        const C = b / 1e3;
        cm(d.x, s.x, C),
          cm(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (qo(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            hR(this.relativeTarget, this.relativeTargetOrigin, f, C),
            x && qj(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = ae()),
            et(x, this.relativeTarget)),
          y &&
            ((this.animationValues = c), Gj(c, u, this.latestValues, C, m, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Cn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Z.update(() => {
          (Ps.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Oj(0, am, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(am),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          L1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ae();
          const d = Ze(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = Ze(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        et(a, l),
          Ir(a, c),
          Zo(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Jj()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Fl("z", s, u, this.animationValues);
      for (let c = 0; c < Ol.length; c++)
        Fl(`rotate${Ol[c]}`, s, u, this.animationValues),
          Fl(`skew${Ol[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return tR;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Cs(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = Cs(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Vn(this.latestValues) &&
            ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = eR(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: h, y: v } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const y in ta) {
        if (f[y] === void 0) continue;
        const { correct: S, applyTo: g } = ta[y],
          m = u.transform === "none" ? f[y] : S(f[y], d);
        if (g) {
          const x = g.length;
          for (let b = 0; b < x; b++) u[g[b]] = m;
        } else u[y] = m;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Cs(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(lm),
        this.root.sharedNodes.clear();
    }
  };
}
function rR(e) {
  e.updateLayout();
}
function oR(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? tt((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            h = Ze(f);
          (f.min = r[d].min), (f.max = f.min + h);
        })
      : L1(i, n.layoutBox, r) &&
        tt((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            h = Ze(r[d]);
          (f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const a = Lr();
    Zo(a, r, n.layoutBox);
    const l = Lr();
    s ? Zo(l, e.applyTransform(o, !0), n.measuredBox) : Zo(l, r, n.layoutBox);
    const u = !M1(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const v = ae();
          qo(v, n.layoutBox, f.layoutBox);
          const y = ae();
          qo(y, r, h.layoutBox),
            A1(v, y) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function iR(e) {
  zo && zn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function sR(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function aR(e) {
  e.clearSnapshot();
}
function lm(e) {
  e.clearMeasurements();
}
function lR(e) {
  e.isLayoutDirty = !1;
}
function uR(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function um(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function cR(e) {
  e.resolveTargetDelta();
}
function dR(e) {
  e.calcProjection();
}
function fR(e) {
  e.resetSkewAndRotation();
}
function pR(e) {
  e.removeLeadSnapshot();
}
function cm(e, t, n) {
  (e.translate = te(t.translate, 0, n)),
    (e.scale = te(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function dm(e, t, n, r) {
  (e.min = te(t.min, n.min, r)), (e.max = te(t.max, n.max, r));
}
function hR(e, t, n, r) {
  dm(e.x, t.x, n.x, r), dm(e.y, t.y, n.y, r);
}
function mR(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const gR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  fm = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  pm = fm("applewebkit/") && !fm("chrome/") ? Math.round : Xe;
function hm(e) {
  (e.min = pm(e.min)), (e.max = pm(e.max));
}
function yR(e) {
  hm(e.x), hm(e.y);
}
function L1(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !wj(im(t), im(n), 0.2))
  );
}
function vR(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const xR = _1({
    attachResizeListener: (e, t) => bi(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Bl = { current: void 0 },
  $1 = _1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Bl.current) {
        const e = new xR({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Bl.current = e);
      }
      return Bl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  wR = {
    pan: { Feature: $j },
    drag: { Feature: Lj, ProjectionNode: $1, MeasureLayout: j1 },
  };
function mm(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n,
    i = r[o];
  i && Z.postRender(() => i(t, Ii(t)));
}
class SR extends Mn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = wk(
        t,
        (n) => (mm(this.node, n, "Start"), (r) => mm(this.node, r, "End"))
      ));
  }
  unmount() {}
}
class bR extends Mn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = $i(
      bi(this.node.current, "focus", () => this.onFocus()),
      bi(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function gm(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n),
    i = r[o];
  i && Z.postRender(() => i(t, Ii(t)));
}
class CR extends Mn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Tk(
        t,
        (n) => (
          gm(this.node, n, "Start"),
          (r, { success: o }) => gm(this.node, r, o ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const pc = new WeakMap(),
  Ul = new WeakMap(),
  TR = (e) => {
    const t = pc.get(e.target);
    t && t(e);
  },
  PR = (e) => {
    e.forEach(TR);
  };
function kR({ root: e, ...t }) {
  const n = e || document;
  Ul.has(n) || Ul.set(n, {});
  const r = Ul.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(PR, { root: e, ...t })), r[o];
}
function ER(e, t, n) {
  const r = kR(t);
  return (
    pc.set(e, n),
    r.observe(e),
    () => {
      pc.delete(e), r.unobserve(e);
    }
  );
}
const jR = { some: 0, all: 1 };
class RR extends Mn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : jR[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return ER(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(NR(t, n)) && this.startObserver();
  }
  unmount() {}
}
function NR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const MR = {
    inView: { Feature: RR },
    tap: { Feature: CR },
    focus: { Feature: bR },
    hover: { Feature: SR },
  },
  AR = { layout: { ProjectionNode: $1, MeasureLayout: j1 } },
  hc = { current: null },
  I1 = { current: !1 };
function DR() {
  if (((I1.current = !0), !!Hd))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (hc.current = e.matches);
      e.addListener(t), t();
    } else hc.current = !1;
}
const _R = [...l1, je, Tn],
  LR = (e) => _R.find(a1(e)),
  ym = new WeakMap();
function $R(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (Me(o)) e.addValue(r, o);
    else if (Me(i)) e.addValue(r, wi(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, wi(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const vm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class IR {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = xf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = Dt.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), Z.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u, onUpdate: c } = s;
    (this.onUpdate = c),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Ua(n)),
      (this.isVariantNode = g0(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in f) {
      const v = f[h];
      l[h] !== void 0 && Me(v) && v.set(l[h], !1);
    }
  }
  mount(t) {
    (this.current = t),
      ym.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      I1.current || DR(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : hc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    ym.delete(this.current),
      this.projection && this.projection.unmount(),
      Cn(this.notifyUpdate),
      Cn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = ur.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && Z.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        o(), i(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in to) {
      const n = to[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ae();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < vm.length; r++) {
      const o = vm[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = $R(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = wi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (i1(o) || Q0(o))
          ? (o = parseFloat(o))
          : !LR(o) && Tn.test(n) && (o = n1(t, n)),
        this.setBaseTarget(t, Me(o) ? o.get() : o)),
      Me(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = qd(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (o = s[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Me(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new pf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class V1 extends IR {
  constructor() {
    super(...arguments), (this.KeyframeResolver = u1);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Me(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function VR(e) {
  return window.getComputedStyle(e);
}
class zR extends V1 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = P0);
  }
  readValueFromInstance(t, n) {
    if (ur.has(n)) {
      const r = vf(n);
      return (r && r.default) || 0;
    } else {
      const r = VR(t),
        o = (b0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return k1(t, n);
  }
  build(t, n, r) {
    tf(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return sf(t, n, r);
  }
}
class OR extends V1 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ae);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ur.has(n)) {
      const r = vf(n);
      return (r && r.default) || 0;
    }
    return (n = k0.has(n) ? n : Xd(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return R0(t, n, r);
  }
  build(t, n, r) {
    nf(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    E0(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = of(t.tagName)), super.mount(t);
  }
}
const FR = (e, t) =>
    Zd(e) ? new OR(t) : new zR(t, { allowProjection: e !== w.Fragment }),
  BR = pk({ ...dj, ...MR, ...wR, ...AR }, FR),
  O = jP(BR);
var UR = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  WR = Object.defineProperty,
  HR = Object.defineProperties,
  GR = Object.getOwnPropertyDescriptors,
  aa = Object.getOwnPropertySymbols,
  z1 = Object.prototype.hasOwnProperty,
  O1 = Object.prototype.propertyIsEnumerable,
  xm = (e, t, n) =>
    t in e
      ? WR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  wm = (e, t) => {
    for (var n in t || (t = {})) z1.call(t, n) && xm(e, n, t[n]);
    if (aa) for (var n of aa(t)) O1.call(t, n) && xm(e, n, t[n]);
    return e;
  },
  YR = (e, t) => HR(e, GR(t)),
  KR = (e, t) => {
    var n = {};
    for (var r in e) z1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && aa)
      for (var r of aa(e)) t.indexOf(r) < 0 && O1.call(e, r) && (n[r] = e[r]);
    return n;
  },
  Ve = (e, t, n) => {
    const r = w.forwardRef((o, i) => {
      var s = o,
        {
          color: a = "currentColor",
          size: l = 24,
          stroke: u = 2,
          children: c,
        } = s,
        d = KR(s, ["color", "size", "stroke", "children"]);
      return w.createElement(
        "svg",
        wm(
          YR(wm({ ref: i }, UR), {
            width: l,
            height: l,
            stroke: a,
            strokeWidth: u,
            className: `tabler-icon tabler-icon-${e}`,
          }),
          d
        ),
        [...n.map(([f, h]) => w.createElement(f, h)), ...(c || [])]
      );
    });
    return (
      (r.propTypes = {
        color: An.string,
        size: An.oneOfType([An.string, An.number]),
        stroke: An.oneOfType([An.string, An.number]),
      }),
      (r.displayName = `${t}`),
      r
    );
  },
  XR = Ve("arrow-down", "IconArrowDown", [
    ["path", { d: "M12 5l0 14", key: "svg-0" }],
    ["path", { d: "M18 13l-6 6", key: "svg-1" }],
    ["path", { d: "M6 13l6 6", key: "svg-2" }],
  ]),
  Sm = Ve("brand-github", "IconBrandGithub", [
    [
      "path",
      {
        d: "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",
        key: "svg-0",
      },
    ],
  ]),
  QR = Ve("brand-linkedin", "IconBrandLinkedin", [
    [
      "path",
      {
        d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",
        key: "svg-0",
      },
    ],
    ["path", { d: "M8 11l0 5", key: "svg-1" }],
    ["path", { d: "M8 8l0 .01", key: "svg-2" }],
    ["path", { d: "M12 16l0 -5", key: "svg-3" }],
    ["path", { d: "M16 16v-3a2 2 0 0 0 -4 0", key: "svg-4" }],
  ]),
  ZR = Ve("briefcase", "IconBriefcase", [
    [
      "path",
      {
        d: "M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
        key: "svg-0",
      },
    ],
    ["path", { d: "M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2", key: "svg-1" }],
    ["path", { d: "M12 12l0 .01", key: "svg-2" }],
    ["path", { d: "M3 13a20 20 0 0 0 18 0", key: "svg-3" }],
  ]),
  Wl = Ve("calendar", "IconCalendar", [
    [
      "path",
      {
        d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",
        key: "svg-0",
      },
    ],
    ["path", { d: "M16 3v4", key: "svg-1" }],
    ["path", { d: "M8 3v4", key: "svg-2" }],
    ["path", { d: "M4 11h16", key: "svg-3" }],
    ["path", { d: "M11 15h1", key: "svg-4" }],
    ["path", { d: "M12 15v3", key: "svg-5" }],
  ]),
  Hl = Ve("code", "IconCode", [
    ["path", { d: "M7 8l-4 4l4 4", key: "svg-0" }],
    ["path", { d: "M17 8l4 4l-4 4", key: "svg-1" }],
    ["path", { d: "M14 4l-4 16", key: "svg-2" }],
  ]),
  qR = Ve("device-mobile", "IconDeviceMobile", [
    [
      "path",
      {
        d: "M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z",
        key: "svg-0",
      },
    ],
    ["path", { d: "M11 4h2", key: "svg-1" }],
    ["path", { d: "M12 17v.01", key: "svg-2" }],
  ]),
  JR = Ve("download", "IconDownload", [
    ["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }],
    ["path", { d: "M7 11l5 5l5 -5", key: "svg-1" }],
    ["path", { d: "M12 4l0 12", key: "svg-2" }],
  ]),
  eN = Ve("external-link", "IconExternalLink", [
    [
      "path",
      {
        d: "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",
        key: "svg-0",
      },
    ],
    ["path", { d: "M11 13l9 -9", key: "svg-1" }],
    ["path", { d: "M15 4h5v5", key: "svg-2" }],
  ]),
  Gl = Ve("mail", "IconMail", [
    [
      "path",
      {
        d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",
        key: "svg-0",
      },
    ],
    ["path", { d: "M3 7l9 6l9 -6", key: "svg-1" }],
  ]),
  Yl = Ve("map-pin", "IconMapPin", [
    ["path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-0" }],
    [
      "path",
      {
        d: "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",
        key: "svg-1",
      },
    ],
  ]),
  tN = Ve("phone", "IconPhone", [
    [
      "path",
      {
        d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
        key: "svg-0",
      },
    ],
  ]),
  nN = Ve("server", "IconServer", [
    [
      "path",
      {
        d: "M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z",
        key: "svg-0",
      },
    ],
    [
      "path",
      {
        d: "M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z",
        key: "svg-1",
      },
    ],
    ["path", { d: "M7 8l0 .01", key: "svg-2" }],
    ["path", { d: "M7 16l0 .01", key: "svg-3" }],
  ]),
  rN = Ve("tool", "IconTool", [
    [
      "path",
      {
        d: "M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5",
        key: "svg-0",
      },
    ],
  ]),
  oN = Ve("users", "IconUsers", [
    ["path", { d: "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
    ["path", { d: "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "svg-2" }],
    ["path", { d: "M21 21v-2a4 4 0 0 0 -3 -3.85", key: "svg-3" }],
  ]);
const iN = () => {
    const [e, t] = w.useState({ x: 0, y: 0 });
    return (
      w.useEffect(() => {
        const n = (r) => {
          t({ x: r.clientX, y: r.clientY });
        };
        return (
          window.addEventListener("mousemove", n),
          () => window.removeEventListener("mousemove", n)
        );
      }, []),
      e
    );
  },
  sN = () => {
    const e = iN();
    return p.jsxs("div", {
      className: "fixed inset-0 overflow-hidden pointer-events-none",
      children: [
        p.jsx(O.div, {
          className: "absolute w-96 h-96 bg-blue-500/8 rounded-full blur-3xl",
          style: { left: e.x - 192, top: e.y - 192 },
          animate: { left: e.x - 192, top: e.y - 192 },
          transition: { type: "spring", stiffness: 50, damping: 30 },
        }),
        p.jsx(O.div, {
          className:
            "absolute top-1/4 left-1/4 w-72 h-72 bg-slate-500/3 rounded-full blur-2xl",
          animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] },
          transition: {
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }),
        p.jsx(O.div, {
          className:
            "absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/3 rounded-full blur-2xl",
          animate: { scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] },
          transition: {
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          },
        }),
        p.jsx("div", {
          className:
            "absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px]",
        }),
      ],
    });
  },
  aN = () => {
    const [e, t] = w.useState("home"),
      [n, r] = w.useState(!1),
      [o, { open: i, close: s }] = Rb(!1),
      a = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
      ];
    w.useEffect(() => {
      const u = () => {
        r(window.scrollY > 50);
        const c = a.map((f) => document.getElementById(f.id)),
          d = window.scrollY + 100;
        for (let f = c.length - 1; f >= 0; f--) {
          const h = c[f];
          if (h && h.offsetTop <= d) {
            t(a[f].id);
            break;
          }
        }
      };
      return (
        window.addEventListener("scroll", u),
        () => window.removeEventListener("scroll", u)
      );
    }, []);
    const l = (u) => {
      const c = document.getElementById(u);
      c && c.scrollIntoView({ behavior: "smooth" }), s();
    };
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx(O.nav, {
          initial: { y: -100 },
          animate: { y: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1e3,
            background: n ? "rgba(15, 23, 42, 0.95)" : "transparent",
            backdropFilter: n ? "blur(20px)" : "none",
            borderBottom: n ? "1px solid rgba(148, 163, 184, 0.2)" : "none",
            transition: "all 0.3s ease",
            padding: "1rem 0",
          },
          children: p.jsx("div", {
            style: {
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 1.5rem",
            },
            children: p.jsxs(ce, {
              justify: "space-between",
              align: "center",
              children: [
                p.jsx(O.div, {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  style: { cursor: "pointer" },
                  onClick: () => l("home"),
                  children: p.jsx(B, {
                    size: "xl",
                    fw: 700,
                    variant: "gradient",
                    gradient: { from: "gray.3", to: "blue.4", deg: 45 },
                    children: "NAZEM.MSOUTI",
                  }),
                }),
                p.jsx(ce, {
                  gap: "xs",
                  visibleFrom: "md",
                  children: a
                    .slice(1)
                    .map((u) =>
                      p.jsx(
                        O.div,
                        {
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          children: p.jsx(Rt, {
                            variant: e === u.id ? "light" : "subtle",
                            color: e === u.id ? "blue" : "gray",
                            size: "sm",
                            radius: "xl",
                            onClick: () => l(u.id),
                            children: u.label,
                          }),
                        },
                        u.id
                      )
                    ),
                }),
                p.jsx(Nd, {
                  opened: o,
                  onClick: i,
                  hiddenFrom: "md",
                  color: "white",
                }),
              ],
            }),
          }),
        }),
        p.jsx(Ct, {
          opened: o,
          onClose: s,
          position: "right",
          size: "xs",
          styles: {
            content: {
              background: "rgba(15, 23, 42, 0.95)",
              backdropFilter: "blur(20px)",
            },
          },
          children: p.jsx(un, {
            gap: "md",
            p: "md",
            children: a.map((u) =>
              p.jsx(
                Rt,
                {
                  variant: e === u.id ? "light" : "subtle",
                  color: e === u.id ? "blue" : "gray",
                  fullWidth: !0,
                  onClick: () => l(u.id),
                  children: u.label,
                },
                u.id
              )
            ),
          }),
        }),
      ],
    });
  },
  lN = () => {
    const [e, t] = w.useState(!1);
    return (
      w.useEffect(() => {
        const n = setTimeout(() => {
          t(!0);
        }, 100);
        return () => clearTimeout(n);
      }, []),
      e
    );
  },
  uN = [
    {
      id: "soutify-2025",
      title: "Software Engineer | Frontend Developer",
      company: "Soutify",
      period: "Jan 2025 – Jul 2025",
      location: "Remotely, KSA",
      type: "Fulltime",
      description: [
        "Developed web frontend (React + TypeScript) for multilingual sentiment classification platform powered by transformer and LLM models",
        "Built React-based frontend for multi-role data labeling platform with task switching, role management, and smooth UX flows",
        "Developed mobile version using Flutter with dynamic form rendering, real-time updates, and adaptive layouts",
        "Implemented data analytics dashboard for visualizing social data from X (Twitter) with real-time insights",
        "Contributed to Waste Management ERP system frontend and mobile UI using ABP Framework integration",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Flutter",
        "Dart",
        "REST APIs",
        "ABP Framework",
      ],
    },
    {
      id: "freelancer-2024",
      title: "Software Engineer | Frontend Developer",
      company: "Freelancer",
      period: "May 2024 – Present",
      location: "Remote",
      type: "Freelance",
      description: [
        "Developing custom web and mobile applications for various international clients",
        "Specializing in React, TypeScript, and Flutter development with focus on performance optimization",
        "Delivering responsive and user-centered interfaces with modern design principles",
        "Implementing complex state management solutions and API integrations",
      ],
      technologies: ["React", "TypeScript", "Flutter", "Tailwind CSS"],
    },
  ],
  cN = [
    {
      id: "sentiment-analysis-platform",
      title: "LUP - Multilingual Sentiment Analysis Platform",
      period: "Jan 2025 - Jul 2025",
      description:
        "Advanced AI-powered sentiment analysis platform supporting multiple languages and powered by transformer models and LLMs for analyzing social media content and text data with high accuracy.",
      features: [
        "Multilingual sentiment classification using transformer and LLM models",
        "Real-time social media data analysis from platforms like X (Twitter)",
        "Interactive data analytics dashboard with comprehensive visualization",
        "Advanced text processing and natural language understanding capabilities",
        "Batch processing for large-scale sentiment analysis tasks",
        "Export functionality for analysis results and reports",
        "Multi-language support with Arabic and English text processing",
        "Real-time insights and trend analysis for social media monitoring",
        "Machine learning model integration for continuous improvement",
        "User-friendly interface for non-technical users",
      ],
      technologies: [
        "React",
        "TypeScript",
        "AI/ML Integration",
        "LLM Models",
        "Data Visualization",
        "REST APIs",
        "Social Media APIs",
        "Natural Language Processing",
      ],
      image: "assets/images/lup.png",
      status: "completed",
      demoUrl: "https://app.lup.sa/",
      githubUrl: "#",
    },
    {
      id: "data-labeling-platform",
      title: "Multi-Role Data Labeling Platform",
      period: "Jan 2025 - Jul 2025",
      description:
        "Advanced data labeling platform designed for machine learning and AI training, featuring multi-role access control, task management, and real-time collaboration capabilities for data annotation teams.",
      features: [
        "Multi-role authentication system supporting Admin, Supervisor, and Labeler access levels",
        "Dynamic task assignment and management with real-time progress tracking",
        "Intuitive labeling interface with drag-and-drop functionality and keyboard shortcuts",
        "Quality assurance workflows with review and approval processes",
        "Real-time collaboration features allowing multiple users to work simultaneously",
        "Comprehensive analytics dashboard for tracking productivity and accuracy metrics",
        "Flexible data import/export capabilities supporting various file formats",
        "Task switching and role management with smooth UX transitions",
        "Advanced filtering and search functionality for efficient data navigation",
        "Automated backup and version control for labeled datasets",
      ],
      technologies: [
        "React",
        "TypeScript",
        "REST APIs",
        "Real-time Updates",
        "Data Visualization",
        "Task Management",
        "Multi-role Authentication",
      ],
      image: "assets/images/leb.png",
      status: "completed",
      demoUrl: "https://label.lup.sa/login",
      githubUrl: "#",
    },
    {
      id: "e-ticketing-system",
      title: "E-Ticketing System - Frontend Development",
      period: "Feb 2025 - May 2025",
      description:
        "Comprehensive frontend interface for digital ticketing management system, creating intuitive user experiences for companies to manage events, distribute tickets, and control access with responsive web applications.",
      features: [
        "Multi-role dashboard interfaces supporting admin, company, and employee access levels",
        "Comprehensive event management with ticket creation and real-time analytics visualization",
        "QR code ticket generation and scanning interface with instant validation feedback",
        "Bulk guest import functionality with drag-and-drop CSV upload and validation",
        "Dynamic email template designer with drag-and-drop components and live preview",
        "Real-time analytics dashboard with interactive charts and exportable reports",
        "Full Arabic/English internationalization with RTL support",
        "Secure authentication flows with JWT token management and session handling",
      ],
      technologies: [
        "React",
        "TypeScript",
        "REST APIs",
        "Chart.js",
        "QR Code Libraries",
        "CSV Processing",
        "i18n",
        "JWT",
      ],
      image: "assets/images/ticket.png",
      status: "completed",
      demoUrl: "https://tickets.c-m.com.sa/",
      githubUrl: "#",
    },
    {
      id: "baflay-burger",
      title: "Baflay Burger Restaurant Website & Management System",
      period: "Nov 2024 - Mar 2025",
      description:
        "Comprehensive restaurant website and administrative dashboard for Baflay Burger, a popular Syrian burger restaurant chain in Damascus with over 34,000 social media followers.",
      features: [
        "Responsive restaurant website with menu display and online ordering system",
        "Comprehensive admin dashboard for menu management and order processing",
        "Multi-location management system supporting restaurant's expanding operations",
        "Real-time order processing and customer data management",
        "Promotional campaigns and detailed reporting features",
        "Modern UI/UX design with mobile responsiveness and fast loading performance",
        "Complete brand integration reflecting restaurant's Syrian culinary identity",
      ],
      technologies: [
        "React",
        "TypeScript",
        "REST APIs",
        "Dashboard Development",
        "Database Integration",
      ],
      image: "assets/images/baflay.png",
      status: "completed",
      demoUrl: "https://www.baflayburger.com/",
      githubUrl: "#",
    },
    {
      id: "ketabook",
      title: "Ketabook – Online Bookstore & Publishing Platform",
      period: "May 2024 - Sep 2024",
      description:
        "Comprehensive Flutter mobile application for online bookstore with seamless reading experience, featuring advanced e-commerce functionality and social reading features.",
      features: [
        "Advanced book browsing with filtering and search capabilities",
        "Secure Stripe payment integration with multiple payment methods",
        "In-app reading experience with customizable themes and bookmarks",
        "Real-time notifications and reading progress tracking",
        "Social features: following publishers, book reviews, and gifting",
        "Cross-platform compatibility (Android & iOS)",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "REST APIs",
        "Stripe",
        "Firebase",
        "Git",
      ],
      image: "assets/images/k2.jpg",
      status: "completed",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "mtx-scanner",
      title: "MTX - Event Ticket Scanner App",
      period: "Mar 2025 – Apr 2025",
      description:
        "Comprehensive Flutter mobile application for organizing and facilitating charitable donations across multiple causes, enabling users to support communities through various contribution programs.",
      features: [
        "Core donation features: cause browsing, donation processing, and contribution tracking",
        "Secure payment gateways for seamless financial transactions",
        "Real-time updates, donation history, and impact tracking",
        "Community engagement via cause following and donation sharing",
        "Volunteer coordination and beneficiary management",
        "Cross-platform compatibility for Android with intuitive UI/UX",
      ],
      technologies: ["Flutter", "Dart", "REST APIs", "Payment Gateway", "Git"],
      image: "assets/images/flutter-empl.jpg",
      status: "completed",
      demoUrl: "https://c-m.com.sa/",
      githubUrl: "#",
    },
    {
      id: "chatpdf",
      title: "ChatPDF – Smart PDF Interaction App",
      period: "Oct 2023 – Feb 2024",
      description:
        "Innovative generative AI-based PDF assistant application enabling intuitive document interaction through natural language processing and advanced AI capabilities.",
      features: [
        "Intelligent chat interface for PDF document queries",
        "AI-powered quiz generation from PDF content",
        "Advanced OCR technology for text extraction",
        "Audio-to-text conversion with high accuracy",
        "PDF manipulation: merging, splitting, and editing",
        "Cross-functional team collaboration and agile development",
      ],
      technologies: ["Flutter", "Dart", "AI/ML Integration", "OCR", "Git"],
      image: "assets/images/chatpdf.png",
      status: "completed",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "social-aid-gaith",
      title: "Social Aid App (Gaith)",
      period: "Oct 2022 – Feb 2023",
      description:
        "Flutter mobile application for organizing and facilitating charitable donations across multiple causes, enabling users to support communities through medical funding, in-kind contributions, and orphan sponsorship programs.",
      features: [
        "Cause browsing and donation processing with contribution tracking",
        "Secure payment gateways for financial transactions",
        "Real-time updates and donation history tracking",
        "Impact monitoring and progress tracking features",
        "Community engagement through cause following and donation sharing",
        "Volunteer coordination and beneficiary management system",
      ],
      technologies: ["Flutter", "Dart", "REST APIs", "Payment Gateway", "Git"],
      image: "assets/images/social-eid-1.png",
      status: "completed",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "ecommerce-app",
      title: "E-Commerce Mobile Application",
      period: "Jun 2022 – Sep 2022",
      description:
        "Feature-rich e-commerce mobile application enabling users to browse products, view detailed information, and manage purchases with enhanced shopping experience.",
      features: [
        "Product catalog with detailed views and shopping cart functionality",
        "Payment processing and order tracking system",
        "User accounts with wishlist and product reviews",
        "Recommendation engine and personalized features",
        "Search filters and category navigation",
        "Promotional features and discount management",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "E-commerce APIs",
        "Payment Gateway",
        "Git",
      ],
      image: "assets/images/eco.png",
      status: "completed",
      demoUrl: "#",
      githubUrl: "#",
    },
  ],
  dN = [
    { name: "React", category: "frontend", proficiency: 95 },
    { name: "TypeScript", category: "frontend", proficiency: 90 },
    { name: "Next.js", category: "frontend", proficiency: 85 },
    { name: "Tailwind CSS", category: "frontend", proficiency: 90 },
    { name: "Flutter", category: "mobile", proficiency: 90 },
    { name: "Dart", category: "mobile", proficiency: 88 },
    { name: "Git", category: "tools", proficiency: 90 },
    { name: "Figma", category: "tools", proficiency: 80 },
  ],
  tn = {
    email: "nazem.msouti@gmail.com",
    phone: "+963-9928-13014",
    location: "Damascus, Syria",
    linkedin: "https://www.linkedin.com/in/nazem-almsouti/",
    github: "https://github.com/nazemms1",
  },
  fN = {
    colors: {
      dark: [
        "#C1C2C5",
        "#A6A7AB",
        "#909296",
        "#5c5f66",
        "#373A40",
        "#2C2E33",
        "#25262b",
        "#1A1B1E",
        "#141517",
        "#101113",
      ],
    },
    primaryColor: "blue",
    defaultRadius: "md",
  };
function pN() {
  const e = lN(),
    t = () => {
      window.location.href = `mailto:${tn.email}`;
    },
    n = (i) => {
      switch (i) {
        case "frontend":
          return p.jsx(Hl, { size: 24 });
        case "mobile":
          return p.jsx(qR, { size: 24 });
        case "backend":
          return p.jsx(nN, { size: 24 });
        case "tools":
          return p.jsx(rN, { size: 24 });
        case "soft-skills":
          return p.jsx(oN, { size: 24 });
        default:
          return p.jsx(Hl, { size: 24 });
      }
    },
    r = (i) => {
      switch (i) {
        case "frontend":
          return "blue";
        case "mobile":
          return "green";
        case "backend":
          return "violet";
        case "tools":
          return "orange";
        case "soft-skills":
          return "pink";
        default:
          return "gray";
      }
    },
    o = () => {
      const i = document.createElement("a");
      (i.href = "assets/file/ Nazem-Resume.pdf"),
        (i.download = "Nazem_Almsouti_CV.pdf"),
        document.body.appendChild(i),
        i.click(),
        document.body.removeChild(i);
    };
  return p.jsxs(nv, {
    theme: fN,
    defaultColorScheme: "dark",
    children: [
      p.jsx(Jt, {}),
      p.jsxs("div", {
        style: {
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e3a8a 100%)",
          color: "white",
          overflow: "hidden",
        },
        children: [
          p.jsx(sN, {}),
          p.jsx(aN, {}),
          p.jsx("section", {
            id: "home",
            style: {
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              paddingTop: "80px",
            },
            children: p.jsx(It, {
              size: "lg",
              children: p.jsxs(O.div, {
                initial: { opacity: 0 },
                animate: e ? { opacity: 1 } : { opacity: 0 },
                transition: { duration: 0.8, staggerChildren: 0.2 },
                style: { textAlign: "center" },
                children: [
                  p.jsx(O.div, {
                    initial: { y: 20, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { duration: 0.5 },
                    style: { marginBottom: "2rem" },
                    children: p.jsxs("div", {
                      style: {
                        position: "relative",
                        width: "128px",
                        height: "128px",
                        margin: "0 auto 2rem",
                      },
                      children: [
                        p.jsx(O.div, {
                          style: {
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(45deg, #94a3b8, #3b82f6)",
                            borderRadius: "50%",
                            zIndex: 1,
                          },
                          animate: { rotate: 360, scale: [1, 1.1, 1] },
                          transition: {
                            rotate: {
                              duration: 20,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            },
                            scale: {
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            },
                          },
                        }),
                        p.jsx("div", {
                          style: {
                            position: "absolute",
                            inset: "4px",
                            background: "#0f172a",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 2,
                          },
                          children: p.jsx("img", {
                            src: "assets/file/ Nazem-Resume.pdf",
                            alt: "Nazem Almsouti",
                            style: {
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "50%",
                              border: "2px solid #0f172a",
                            },
                          }),
                        }),
                      ],
                    }),
                  }),
                  p.jsx(O.div, {
                    initial: { y: 20, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { duration: 0.5, delay: 0.2 },
                    children: p.jsx(Ee, {
                      order: 1,
                      size: "4rem",
                      mb: "lg",
                      style: { lineHeight: 1.1 },
                      children: "NAZEM ALMSOUTI",
                    }),
                  }),
                  p.jsxs(O.div, {
                    initial: { y: 20, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { duration: 0.5, delay: 0.4 },
                    style: { marginBottom: "2rem" },
                    children: [
                      p.jsx(Ee, {
                        order: 2,
                        size: "1.5rem",
                        c: "gray.3",
                        mb: "md",
                        children: "Software Engineer",
                      }),
                      p.jsxs(ce, {
                        justify: "center",
                        gap: "lg",
                        children: [
                          p.jsxs(ce, {
                            gap: "xs",
                            children: [
                              p.jsx(Hl, { size: 16 }),
                              p.jsx(B, {
                                size: "sm",
                                c: "gray.4",
                                children: "Frontend Development",
                              }),
                            ],
                          }),
                          p.jsxs(ce, {
                            gap: "xs",
                            children: [
                              p.jsx(ZR, { size: 16 }),
                              p.jsx(B, {
                                size: "sm",
                                c: "gray.4",
                                children: "Mobile Development",
                              }),
                            ],
                          }),
                          p.jsx(ce, {
                            gap: "xs",
                            children: p.jsx(B, {
                              size: "sm",
                              c: "gray.4",
                              children: "React & TypeScript Expert",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsx(O.div, {
                    initial: { y: 20, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { duration: 0.5, delay: 0.6 },
                    children: p.jsx(B, {
                      size: "lg",
                      c: "gray.4",
                      mb: "xl",
                      maw: 800,
                      mx: "auto",
                      style: { lineHeight: 1.6 },
                      children:
                        "Passionate about building modern, scalable applications with React, TypeScript, and Flutter. Experienced in delivering clean, responsive, and user-centered interfaces with cutting-edge technologies including Generative AI, LLMs, and advanced state management solutions.",
                    }),
                  }),
                  p.jsx(O.div, {
                    initial: { y: 20, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { duration: 0.5, delay: 0.8 },
                    children: p.jsxs(ce, {
                      justify: "center",
                      gap: "md",
                      mb: "xl",
                      children: [
                        p.jsx(Rt, {
                          size: "lg",
                          leftSection: p.jsx(JR, { size: 20 }),
                          onClick: o,
                          variant: "gradient",
                          radius: "xl",
                          style: {
                            boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
                          },
                          children: "Download CV",
                        }),
                        p.jsx(Rt, {
                          size: "lg",
                          variant: "outline",
                          color: "blue",
                          leftSection: p.jsx(Gl, { size: 20 }),
                          onClick: t,
                          radius: "xl",
                          children: "Get In Touch",
                        }),
                      ],
                    }),
                  }),
                  p.jsx(O.div, {
                    initial: { y: 20, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { duration: 0.5, delay: 1 },
                    children: p.jsx(O.div, {
                      animate: { y: [0, 10, 0] },
                      transition: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                      children: p.jsx(XR, {
                        size: 32,
                        color: "#3b82f6",
                        style: { margin: "0 auto" },
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
          p.jsx("section", {
            id: "about",
            style: { padding: "5rem 0" },
            children: p.jsxs(It, {
              size: "lg",
              children: [
                p.jsxs(O.div, {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  viewport: { once: !0 },
                  style: { textAlign: "center", marginBottom: "4rem" },
                  children: [
                    p.jsx(Ee, {
                      order: 2,
                      size: "3rem",
                      mb: "md",
                      variant: "gradient",
                      children: "About Me",
                    }),
                    p.jsx("div", {
                      style: {
                        width: "96px",
                        height: "4px",
                        background: "linear-gradient(45deg, #94a3b8, #3b82f6)",
                        margin: "0 auto",
                        borderRadius: "2px",
                      },
                    }),
                  ],
                }),
                p.jsxs(De, {
                  gutter: "xl",
                  align: "center",
                  children: [
                    p.jsx(De.Col, {
                      span: { base: 12, md: 6 },
                      children: p.jsx(O.div, {
                        initial: { opacity: 0, x: -50 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.8 },
                        viewport: { once: !0 },
                        children: p.jsxs(ht, {
                          shadow: "xl",
                          padding: "xl",
                          radius: "md",
                          style: {
                            background: "rgba(15, 23, 42, 0.8)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(148, 163, 184, 0.2)",
                          },
                          children: [
                            p.jsx(ce, {
                              mb: "lg",
                              children: p.jsx(Ee, {
                                order: 3,
                                c: "blue.4",
                                children: "Education",
                              }),
                            }),
                            p.jsxs(un, {
                              gap: "sm",
                              children: [
                                p.jsx(Ee, {
                                  order: 4,
                                  size: "lg",
                                  c: "gray.2",
                                  children:
                                    "Bachelor's Degree in Information and Communication Engineering",
                                }),
                                p.jsx(B, {
                                  c: "gray.4",
                                  children: "University of Business Excellence",
                                }),
                                p.jsx(B, {
                                  c: "gray.4",
                                  children: "Major in Software Engineering",
                                }),
                                p.jsxs(ce, {
                                  gap: "xs",
                                  mt: "md",
                                  children: [
                                    p.jsx(Wl, { size: 16, color: "#3b82f6" }),
                                    p.jsx(B, {
                                      size: "sm",
                                      c: "blue.4",
                                      children: "2018 - 2024",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    p.jsx(De.Col, {
                      span: { base: 12, md: 6 },
                      children: p.jsx(O.div, {
                        initial: { opacity: 0, x: 50 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.8 },
                        viewport: { once: !0 },
                        children: p.jsxs(un, {
                          gap: "lg",
                          children: [
                            p.jsxs(B, {
                              size: "lg",
                              c: "gray.3",
                              style: { lineHeight: 1.6 },
                              children: [
                                "I'm a passionate",
                                " ",
                                p.jsx("strong", {
                                  style: { color: "#3b82f6" },
                                  children: "Software Engineer",
                                }),
                                " ",
                                "with expertise in Frontend Web and Mobile Development. I hold a Bachelor's degree in Information Technology with a focus on Software Engineering.",
                              ],
                            }),
                            p.jsxs(B, {
                              size: "lg",
                              c: "gray.3",
                              style: { lineHeight: 1.6 },
                              children: [
                                "I specialize in building modern web applications using",
                                " ",
                                p.jsx("strong", {
                                  style: { color: "#3b82f6" },
                                  children: "React and TypeScript",
                                }),
                                ", and developing cross-platform mobile apps with",
                                " ",
                                p.jsx("strong", {
                                  style: { color: "#3b82f6" },
                                  children: "Flutter and Dart",
                                }),
                                ". I'm passionate about integrating cutting-edge technologies such as Generative AI, LLMs, and RAG into real-world projects.",
                              ],
                            }),
                            p.jsx(B, {
                              size: "lg",
                              c: "gray.3",
                              style: { lineHeight: 1.6 },
                              children:
                                "Strong team player with a commitment to code quality, scalability, and seamless user experience. Always eager to learn new technologies and tackle challenging problems.",
                            }),
                            p.jsxs(ce, {
                              gap: "md",
                              pt: "md",
                              children: [
                                p.jsx(Yl, { size: 20, color: "#3b82f6" }),
                                p.jsx(B, {
                                  c: "gray.4",
                                  children: tn.location,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          p.jsx("section", {
            style: { padding: "5rem 0" },
            children: p.jsxs(It, {
              size: "lg",
              children: [
                p.jsxs(O.div, {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  viewport: { once: !0 },
                  style: { textAlign: "center", marginBottom: "4rem" },
                  children: [
                    p.jsx(Ee, {
                      order: 2,
                      size: "3rem",
                      mb: "md",
                      variant: "gradient",
                      children: "Technical Skills",
                    }),
                    p.jsx("div", {
                      style: {
                        width: "96px",
                        height: "4px",
                        background: "linear-gradient(45deg, #94a3b8, #3b82f6)",
                        margin: "0 auto",
                        borderRadius: "2px",
                      },
                    }),
                    p.jsx(B, {
                      c: "gray.4",
                      mt: "md",
                      size: "lg",
                      maw: 600,
                      mx: "auto",
                      children:
                        "Proficient in modern technologies and frameworks with a focus on performance and user experience",
                    }),
                  ],
                }),
                p.jsx(Fd, {
                  cols: { base: 2, sm: 3, md: 4, lg: 5 },
                  spacing: "lg",
                  children: dN.map((i, s) =>
                    p.jsx(
                      O.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: s * 0.1 },
                        whileHover: {
                          scale: 1.05,
                          y: -5,
                          transition: { duration: 0.2 },
                        },
                        viewport: { once: !0 },
                        children: p.jsxs(ht, {
                          shadow: "md",
                          padding: "lg",
                          radius: "md",
                          withBorder: !0,
                          style: {
                            background: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            cursor: "pointer",
                            height: "100%",
                          },
                          children: [
                            p.jsx(ce, {
                              justify: "center",
                              mb: "md",
                              children: p.jsx(Bd, {
                                size: "xl",
                                radius: "md",
                                variant: "light",
                                color: r(i.category),
                                children: n(i.category),
                              }),
                            }),
                            p.jsx(B, {
                              ta: "center",
                              fw: 600,
                              mb: "xs",
                              c: "white",
                              children: i.name,
                            }),
                            p.jsx(B, {
                              ta: "center",
                              size: "xs",
                              c: "dimmed",
                              mb: "md",
                              tt: "capitalize",
                              children: i.category.replace("-", " "),
                            }),
                            p.jsx(po, {
                              value: i.proficiency,
                              color: r(i.category),
                              size: "sm",
                              radius: "xl",
                              mb: "xs",
                              animated: !0,
                            }),
                            p.jsxs(B, {
                              ta: "center",
                              size: "xs",
                              c: "dimmed",
                              children: [i.proficiency, "%"],
                            }),
                          ],
                        }),
                      },
                      i.name
                    )
                  ),
                }),
              ],
            }),
          }),
          p.jsx("section", {
            id: "experience",
            style: { padding: "5rem 0" },
            children: p.jsxs(It, {
              size: "lg",
              children: [
                p.jsxs(O.div, {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  viewport: { once: !0 },
                  style: { textAlign: "center", marginBottom: "4rem" },
                  children: [
                    p.jsx(Ee, {
                      order: 2,
                      size: "3rem",
                      mb: "md",
                      variant: "gradient",
                      children: "Professional Experience",
                    }),
                    p.jsx("div", {
                      style: {
                        width: "96px",
                        height: "4px",
                        background: "linear-gradient(45deg, #94a3b8, #3b82f6)",
                        margin: "0 auto",
                        borderRadius: "2px",
                      },
                    }),
                  ],
                }),
                p.jsx(un, {
                  gap: "xl",
                  children: uN.map((i, s) =>
                    p.jsx(
                      O.div,
                      {
                        initial: { opacity: 0, x: s % 2 === 0 ? -50 : 50 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.8 },
                        viewport: { once: !0 },
                        children: p.jsxs(ht, {
                          shadow: "xl",
                          padding: "xl",
                          radius: "md",
                          style: {
                            background: "rgba(15, 23, 42, 0.8)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(148, 163, 184, 0.2)",
                          },
                          children: [
                            p.jsxs(De, {
                              children: [
                                p.jsxs(De.Col, {
                                  span: { base: 12, lg: 8 },
                                  children: [
                                    p.jsx(Ee, {
                                      order: 3,
                                      c: "blue.4",
                                      mb: "xs",
                                      children: i.title,
                                    }),
                                    p.jsx(Ee, {
                                      order: 4,
                                      c: "gray.2",
                                      mb: "md",
                                      children: i.company,
                                    }),
                                  ],
                                }),
                                p.jsx(De.Col, {
                                  span: { base: 12, lg: 4 },
                                  children: p.jsxs(un, {
                                    gap: "xs",
                                    children: [
                                      p.jsxs(ce, {
                                        gap: "xs",
                                        children: [
                                          p.jsx(Wl, { size: 16 }),
                                          p.jsx(B, {
                                            c: "gray.4",
                                            children: i.period,
                                          }),
                                        ],
                                      }),
                                      p.jsxs(ce, {
                                        gap: "xs",
                                        children: [
                                          p.jsx(Yl, { size: 16 }),
                                          p.jsx(B, {
                                            c: "gray.4",
                                            children: i.location,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            p.jsx(Ar, {
                              color: i.type === "Fulltime" ? "green" : "blue",
                              variant: "light",
                              mb: "lg",
                              children: i.type,
                            }),
                            p.jsx(Wn, {
                              spacing: "sm",
                              mb: "lg",
                              children: i.description.map((a, l) =>
                                p.jsx(
                                  Wn.Item,
                                  {
                                    c: "gray.3",
                                    style: { lineHeight: 1.6 },
                                    children: a,
                                  },
                                  l
                                )
                              ),
                            }),
                            i.technologies &&
                              p.jsxs("div", {
                                children: [
                                  p.jsx(B, {
                                    size: "sm",
                                    fw: 600,
                                    c: "blue.4",
                                    mb: "sm",
                                    children: "Technologies Used:",
                                  }),
                                  p.jsx(ce, {
                                    gap: "xs",
                                    children: i.technologies.map((a, l) =>
                                      p.jsx(
                                        Ar,
                                        {
                                          variant: "light",
                                          color: "blue",
                                          size: "sm",
                                          children: a,
                                        },
                                        l
                                      )
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      },
                      i.id
                    )
                  ),
                }),
              ],
            }),
          }),
          p.jsx("section", {
            id: "projects",
            style: { padding: "5rem 0" },
            children: p.jsxs(It, {
              size: "lg",
              children: [
                p.jsxs(O.div, {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  viewport: { once: !0 },
                  style: { textAlign: "center", marginBottom: "4rem" },
                  children: [
                    p.jsx(Ee, {
                      order: 2,
                      size: "3rem",
                      mb: "md",
                      variant: "gradient",
                      children: "Featured Projects",
                    }),
                    p.jsx("div", {
                      style: {
                        width: "96px",
                        height: "4px",
                        background: "linear-gradient(45deg, #94a3b8, #3b82f6)",
                        margin: "0 auto",
                        borderRadius: "2px",
                      },
                    }),
                    p.jsx(B, {
                      c: "gray.4",
                      mt: "md",
                      size: "lg",
                      maw: 600,
                      mx: "auto",
                      children:
                        "Showcasing my expertise in modern web and mobile development",
                    }),
                  ],
                }),
                p.jsx(De, {
                  gutter: "xl",
                  children: cN.map((i, s) =>
                    p.jsx(
                      De.Col,
                      {
                        span: { base: 12, md: 6 },
                        children: p.jsx(O.div, {
                          initial: { opacity: 0, y: 50 },
                          whileInView: { opacity: 1, y: 0 },
                          transition: { duration: 0.8, delay: s * 0.2 },
                          viewport: { once: !0 },
                          whileHover: { y: -10 },
                          style: { height: "100%" },
                          children: p.jsxs(ht, {
                            shadow: "xl",
                            padding: "lg",
                            radius: "md",
                            withBorder: !0,
                            style: {
                              background: "rgba(15, 23, 42, 0.8)",
                              backdropFilter: "blur(10px)",
                              border: "1px solid rgba(148, 163, 184, 0.2)",
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                            },
                            children: [
                              p.jsx(ht.Section, {
                                children: p.jsxs("div", {
                                  style: {
                                    position: "relative",
                                    overflow: "hidden",
                                  },
                                  children: [
                                    p.jsx($d, {
                                      src: i.image || "/placeholder.svg",
                                      height: 200,
                                      alt: i.title,
                                      style: {
                                        transition: "transform 0.7s ease",
                                      },
                                    }),
                                    p.jsx("div", {
                                      style: {
                                        position: "absolute",
                                        top: 16,
                                        right: 16,
                                      },
                                      children: p.jsx(Ar, {
                                        color:
                                          i.status === "completed"
                                            ? "green"
                                            : "blue",
                                        variant: "filled",
                                        children: i.status.replace("-", " "),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              p.jsxs(un, {
                                gap: "md",
                                style: { flex: 1 },
                                children: [
                                  p.jsxs("div", {
                                    children: [
                                      p.jsx(B, {
                                        fw: 600,
                                        size: "lg",
                                        c: "blue.4",
                                        mb: "xs",
                                        children: i.title,
                                      }),
                                      p.jsxs(ce, {
                                        gap: "xs",
                                        mb: "sm",
                                        children: [
                                          p.jsx(Wl, {
                                            size: 16,
                                            color: "gray",
                                          }),
                                          p.jsx(B, {
                                            size: "sm",
                                            c: "dimmed",
                                            children: i.period,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  p.jsx(B, {
                                    size: "sm",
                                    c: "gray.3",
                                    style: { lineHeight: 1.6 },
                                    children: i.description,
                                  }),
                                  p.jsxs("div", {
                                    children: [
                                      p.jsx(ce, {
                                        gap: "xs",
                                        mb: "sm",
                                        children: p.jsx(B, {
                                          size: "sm",
                                          fw: 600,
                                          c: "blue.4",
                                          children: "Key Features",
                                        }),
                                      }),
                                      p.jsx(Wn, {
                                        size: "sm",
                                        spacing: "xs",
                                        children: i.features
                                          .slice(0, 3)
                                          .map((a, l) =>
                                            p.jsx(
                                              Wn.Item,
                                              { c: "gray.3", children: a },
                                              l
                                            )
                                          ),
                                      }),
                                    ],
                                  }),
                                  p.jsxs("div", {
                                    children: [
                                      p.jsx(B, {
                                        size: "sm",
                                        fw: 600,
                                        c: "blue.4",
                                        mb: "sm",
                                        children: "Technologies",
                                      }),
                                      p.jsx(Rd, {
                                        wrap: "wrap",
                                        gap: "xs",
                                        children: i.technologies.map((a, l) =>
                                          p.jsx(
                                            Ar,
                                            {
                                              variant: "light",
                                              color: "blue",
                                              size: "sm",
                                              children: a,
                                            },
                                            l
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                  p.jsxs(ce, {
                                    gap: "sm",
                                    mt: "auto",
                                    children: [
                                      i.demoUrl &&
                                        p.jsx(Rt, {
                                          variant: "outline",
                                          color: "blue",
                                          size: "sm",
                                          leftSection: p.jsx(eN, { size: 16 }),
                                          component: "a",
                                          href: i.demoUrl,
                                          target: "_blank",
                                          style: { flex: 1 },
                                          children: "Live Demo",
                                        }),
                                      i.githubUrl &&
                                        p.jsx(Rt, {
                                          variant: "outline",
                                          color: "gray",
                                          size: "sm",
                                          leftSection: p.jsx(Sm, { size: 16 }),
                                          component: "a",
                                          href: i.githubUrl,
                                          target: "_blank",
                                          style: { flex: 1 },
                                          children: "Source",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      },
                      i.id
                    )
                  ),
                }),
              ],
            }),
          }),
          p.jsx("section", {
            id: "contact",
            style: { padding: "5rem 0" },
            children: p.jsxs(It, {
              size: "lg",
              children: [
                p.jsxs(O.div, {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  viewport: { once: !0 },
                  style: { textAlign: "center", marginBottom: "4rem" },
                  children: [
                    p.jsx(Ee, {
                      order: 2,
                      size: "3rem",
                      mb: "md",
                      variant: "gradient",
                      children: "Let's Work Together",
                    }),
                    p.jsx("div", {
                      style: {
                        width: "96px",
                        height: "4px",
                        background: "linear-gradient(45deg, #94a3b8, #3b82f6)",
                        margin: "0 auto",
                        borderRadius: "2px",
                      },
                    }),
                    p.jsx(B, {
                      size: "xl",
                      c: "gray.3",
                      mt: "md",
                      maw: 600,
                      mx: "auto",
                      children:
                        "I'm always open to discussing new opportunities and interesting projects.",
                    }),
                  ],
                }),
                p.jsxs(O.div, {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  viewport: { once: !0 },
                  children: [
                    p.jsxs(De, {
                      gutter: "xl",
                      mb: "xl",
                      children: [
                        p.jsx(De.Col, {
                          span: { base: 12, md: 4 },
                          children: p.jsx(O.div, {
                            whileHover: { scale: 1.05 },
                            children: p.jsxs(ht, {
                              shadow: "xl",
                              padding: "xl",
                              radius: "md",
                              style: {
                                background: "rgba(15, 23, 42, 0.8)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(148, 163, 184, 0.2)",
                                textAlign: "center",
                                height: "100%",
                              },
                              children: [
                                p.jsx(Gl, {
                                  size: 48,
                                  color: "#3b82f6",
                                  style: { margin: "0 auto 1rem" },
                                }),
                                p.jsx(Ee, {
                                  order: 4,
                                  mb: "sm",
                                  children: "Email",
                                }),
                                p.jsx(B, { c: "gray.4", children: tn.email }),
                              ],
                            }),
                          }),
                        }),
                        p.jsx(De.Col, {
                          span: { base: 12, md: 4 },
                          children: p.jsx(O.div, {
                            whileHover: { scale: 1.05 },
                            children: p.jsxs(ht, {
                              shadow: "xl",
                              padding: "xl",
                              radius: "md",
                              style: {
                                background: "rgba(15, 23, 42, 0.8)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(148, 163, 184, 0.2)",
                                textAlign: "center",
                                height: "100%",
                              },
                              children: [
                                p.jsx(tN, {
                                  size: 48,
                                  color: "#3b82f6",
                                  style: { margin: "0 auto 1rem" },
                                }),
                                p.jsx(Ee, {
                                  order: 4,
                                  mb: "sm",
                                  children: "Phone",
                                }),
                                p.jsx(B, { c: "gray.4", children: tn.phone }),
                              ],
                            }),
                          }),
                        }),
                        p.jsx(De.Col, {
                          span: { base: 12, md: 4 },
                          children: p.jsx(O.div, {
                            whileHover: { scale: 1.05 },
                            children: p.jsxs(ht, {
                              shadow: "xl",
                              padding: "xl",
                              radius: "md",
                              style: {
                                background: "rgba(15, 23, 42, 0.8)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(148, 163, 184, 0.2)",
                                textAlign: "center",
                                height: "100%",
                              },
                              children: [
                                p.jsx(Yl, {
                                  size: 48,
                                  color: "#3b82f6",
                                  style: { margin: "0 auto 1rem" },
                                }),
                                p.jsx(Ee, {
                                  order: 4,
                                  mb: "sm",
                                  children: "Location",
                                }),
                                p.jsx(B, {
                                  c: "gray.4",
                                  children: tn.location,
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    p.jsx(O.div, {
                      initial: { opacity: 0 },
                      whileInView: { opacity: 1 },
                      transition: { duration: 0.8, delay: 0.4 },
                      viewport: { once: !0 },
                      style: { textAlign: "center" },
                      children: p.jsxs(ce, {
                        justify: "center",
                        gap: "lg",
                        children: [
                          p.jsx(O.div, {
                            whileHover: { scale: 1.2, rotate: 5 },
                            whileTap: { scale: 0.9 },
                            children: p.jsx(Qn, {
                              size: "xl",
                              radius: "xl",
                              variant: "filled",
                              color: "blue",
                              component: "a",
                              href: `mailto:${tn.email}`,
                              style: {
                                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
                              },
                              children: p.jsx(Gl, { size: 24 }),
                            }),
                          }),
                          p.jsx(O.div, {
                            whileHover: { scale: 1.2, rotate: -5 },
                            whileTap: { scale: 0.9 },
                            children: p.jsx(Qn, {
                              size: "xl",
                              radius: "xl",
                              variant: "filled",
                              color: "blue",
                              component: "a",
                              href: tn.linkedin,
                              style: {
                                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
                              },
                              children: p.jsx(QR, { size: 24 }),
                            }),
                          }),
                          p.jsx(O.div, {
                            whileHover: { scale: 1.2, rotate: 5 },
                            whileTap: { scale: 0.9 },
                            children: p.jsx(Qn, {
                              size: "xl",
                              radius: "xl",
                              variant: "filled",
                              color: "gray",
                              component: "a",
                              href: tn.github,
                              style: {
                                boxShadow:
                                  "0 4px 20px rgba(107, 114, 128, 0.3)",
                              },
                              children: p.jsx(Sm, { size: 24 }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          p.jsx("footer", {
            style: {
              padding: "2rem 0",
              borderTop: "1px solid rgba(148, 163, 184, 0.2)",
              background: "rgba(15, 23, 42, 0.3)",
              backdropFilter: "blur(10px)",
            },
            children: p.jsx(It, {
              size: "lg",
              children: p.jsx(B, {
                ta: "center",
                c: "gray.4",
                children: "© 2025 Nazem Almsouti.",
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
Kl.createRoot(document.getElementById("root")).render(
  p.jsx(yt.StrictMode, { children: p.jsx(pN, {}) })
);
