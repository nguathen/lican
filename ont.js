( () => {
    var e = {
        415: (e, t, r) => {
            var n = r(569)
              , o = r(797);
            r(426);
            function i(e) {
                return void 0 === e || null === e
            }
            function a(e) {
                (e = function(e) {
                    var t = {};
                    for (var r in e)
                        t[r] = e[r];
                    return t
                }(e || {})).whiteList = e.whiteList || n.whiteList,
                e.onAttr = e.onAttr || n.onAttr,
                e.onIgnoreAttr = e.onIgnoreAttr || n.onIgnoreAttr,
                e.safeAttrValue = e.safeAttrValue || n.safeAttrValue,
                this.options = e
            }
            a.prototype.process = function(e) {
                if (!(e = (e = e || "").toString()))
                    return "";
                var t = this.options
                  , r = t.whiteList
                  , n = t.onAttr
                  , a = t.onIgnoreAttr
                  , c = t.safeAttrValue;
                return o(e, (function(e, t, o, u, s) {
                    var l = r[o]
                      , f = !1;
                    if (!0 === l ? f = l : "function" === typeof l ? f = l(u) : l instanceof RegExp && (f = l.test(u)),
                    !0 !== f && (f = !1),
                    u = c(o, u)) {
                        var p, d = {
                            position: t,
                            sourcePosition: e,
                            source: s,
                            isWhite: f
                        };
                        return f ? i(p = n(o, u, d)) ? o + ":" + u : p : i(p = a(o, u, d)) ? void 0 : p
                    }
                }
                ))
            }
            ,
            e.exports = a
        }
        ,
        569: (e, t) => {
            function r() {
                var e = {
                    "align-content": !1,
                    "align-items": !1,
                    "align-self": !1,
                    "alignment-adjust": !1,
                    "alignment-baseline": !1,
                    all: !1,
                    "anchor-point": !1,
                    animation: !1,
                    "animation-delay": !1,
                    "animation-direction": !1,
                    "animation-duration": !1,
                    "animation-fill-mode": !1,
                    "animation-iteration-count": !1,
                    "animation-name": !1,
                    "animation-play-state": !1,
                    "animation-timing-function": !1,
                    azimuth: !1,
                    "backface-visibility": !1,
                    background: !0,
                    "background-attachment": !0,
                    "background-clip": !0,
                    "background-color": !0,
                    "background-image": !0,
                    "background-origin": !0,
                    "background-position": !0,
                    "background-repeat": !0,
                    "background-size": !0,
                    "baseline-shift": !1,
                    binding: !1,
                    bleed: !1,
                    "bookmark-label": !1,
                    "bookmark-level": !1,
                    "bookmark-state": !1,
                    border: !0,
                    "border-bottom": !0,
                    "border-bottom-color": !0,
                    "border-bottom-left-radius": !0,
                    "border-bottom-right-radius": !0,
                    "border-bottom-style": !0,
                    "border-bottom-width": !0,
                    "border-collapse": !0,
                    "border-color": !0,
                    "border-image": !0,
                    "border-image-outset": !0,
                    "border-image-repeat": !0,
                    "border-image-slice": !0,
                    "border-image-source": !0,
                    "border-image-width": !0,
                    "border-left": !0,
                    "border-left-color": !0,
                    "border-left-style": !0,
                    "border-left-width": !0,
                    "border-radius": !0,
                    "border-right": !0,
                    "border-right-color": !0,
                    "border-right-style": !0,
                    "border-right-width": !0,
                    "border-spacing": !0,
                    "border-style": !0,
                    "border-top": !0,
                    "border-top-color": !0,
                    "border-top-left-radius": !0,
                    "border-top-right-radius": !0,
                    "border-top-style": !0,
                    "border-top-width": !0,
                    "border-width": !0,
                    bottom: !1,
                    "box-decoration-break": !0,
                    "box-shadow": !0,
                    "box-sizing": !0,
                    "box-snap": !0,
                    "box-suppress": !0,
                    "break-after": !0,
                    "break-before": !0,
                    "break-inside": !0,
                    "caption-side": !1,
                    chains: !1,
                    clear: !0,
                    clip: !1,
                    "clip-path": !1,
                    "clip-rule": !1,
                    color: !0,
                    "color-interpolation-filters": !0,
                    "column-count": !1,
                    "column-fill": !1,
                    "column-gap": !1,
                    "column-rule": !1,
                    "column-rule-color": !1,
                    "column-rule-style": !1,
                    "column-rule-width": !1,
                    "column-span": !1,
                    "column-width": !1,
                    columns: !1,
                    contain: !1,
                    content: !1,
                    "counter-increment": !1,
                    "counter-reset": !1,
                    "counter-set": !1,
                    crop: !1,
                    cue: !1,
                    "cue-after": !1,
                    "cue-before": !1,
                    cursor: !1,
                    direction: !1,
                    display: !0,
                    "display-inside": !0,
                    "display-list": !0,
                    "display-outside": !0,
                    "dominant-baseline": !1,
                    elevation: !1,
                    "empty-cells": !1,
                    filter: !1,
                    flex: !1,
                    "flex-basis": !1,
                    "flex-direction": !1,
                    "flex-flow": !1,
                    "flex-grow": !1,
                    "flex-shrink": !1,
                    "flex-wrap": !1,
                    float: !1,
                    "float-offset": !1,
                    "flood-color": !1,
                    "flood-opacity": !1,
                    "flow-from": !1,
                    "flow-into": !1,
                    font: !0,
                    "font-family": !0,
                    "font-feature-settings": !0,
                    "font-kerning": !0,
                    "font-language-override": !0,
                    "font-size": !0,
                    "font-size-adjust": !0,
                    "font-stretch": !0,
                    "font-style": !0,
                    "font-synthesis": !0,
                    "font-variant": !0,
                    "font-variant-alternates": !0,
                    "font-variant-caps": !0,
                    "font-variant-east-asian": !0,
                    "font-variant-ligatures": !0,
                    "font-variant-numeric": !0,
                    "font-variant-position": !0,
                    "font-weight": !0,
                    grid: !1,
                    "grid-area": !1,
                    "grid-auto-columns": !1,
                    "grid-auto-flow": !1,
                    "grid-auto-rows": !1,
                    "grid-column": !1,
                    "grid-column-end": !1,
                    "grid-column-start": !1,
                    "grid-row": !1,
                    "grid-row-end": !1,
                    "grid-row-start": !1,
                    "grid-template": !1,
                    "grid-template-areas": !1,
                    "grid-template-columns": !1,
                    "grid-template-rows": !1,
                    "hanging-punctuation": !1,
                    height: !0,
                    hyphens: !1,
                    icon: !1,
                    "image-orientation": !1,
                    "image-resolution": !1,
                    "ime-mode": !1,
                    "initial-letters": !1,
                    "inline-box-align": !1,
                    "justify-content": !1,
                    "justify-items": !1,
                    "justify-self": !1,
                    left: !1,
                    "letter-spacing": !0,
                    "lighting-color": !0,
                    "line-box-contain": !1,
                    "line-break": !1,
                    "line-grid": !1,
                    "line-height": !1,
                    "line-snap": !1,
                    "line-stacking": !1,
                    "line-stacking-ruby": !1,
                    "line-stacking-shift": !1,
                    "line-stacking-strategy": !1,
                    "list-style": !0,
                    "list-style-image": !0,
                    "list-style-position": !0,
                    "list-style-type": !0,
                    margin: !0,
                    "margin-bottom": !0,
                    "margin-left": !0,
                    "margin-right": !0,
                    "margin-top": !0,
                    "marker-offset": !1,
                    "marker-side": !1,
                    marks: !1,
                    mask: !1,
                    "mask-box": !1,
                    "mask-box-outset": !1,
                    "mask-box-repeat": !1,
                    "mask-box-slice": !1,
                    "mask-box-source": !1,
                    "mask-box-width": !1,
                    "mask-clip": !1,
                    "mask-image": !1,
                    "mask-origin": !1,
                    "mask-position": !1,
                    "mask-repeat": !1,
                    "mask-size": !1,
                    "mask-source-type": !1,
                    "mask-type": !1,
                    "max-height": !0,
                    "max-lines": !1,
                    "max-width": !0,
                    "min-height": !0,
                    "min-width": !0,
                    "move-to": !1,
                    "nav-down": !1,
                    "nav-index": !1,
                    "nav-left": !1,
                    "nav-right": !1,
                    "nav-up": !1,
                    "object-fit": !1,
                    "object-position": !1,
                    opacity: !1,
                    order: !1,
                    orphans: !1,
                    outline: !1,
                    "outline-color": !1,
                    "outline-offset": !1,
                    "outline-style": !1,
                    "outline-width": !1,
                    overflow: !1,
                    "overflow-wrap": !1,
                    "overflow-x": !1,
                    "overflow-y": !1,
                    padding: !0,
                    "padding-bottom": !0,
                    "padding-left": !0,
                    "padding-right": !0,
                    "padding-top": !0,
                    page: !1,
                    "page-break-after": !1,
                    "page-break-before": !1,
                    "page-break-inside": !1,
                    "page-policy": !1,
                    pause: !1,
                    "pause-after": !1,
                    "pause-before": !1,
                    perspective: !1,
                    "perspective-origin": !1,
                    pitch: !1,
                    "pitch-range": !1,
                    "play-during": !1,
                    position: !1,
                    "presentation-level": !1,
                    quotes: !1,
                    "region-fragment": !1,
                    resize: !1,
                    rest: !1,
                    "rest-after": !1,
                    "rest-before": !1,
                    richness: !1,
                    right: !1,
                    rotation: !1,
                    "rotation-point": !1,
                    "ruby-align": !1,
                    "ruby-merge": !1,
                    "ruby-position": !1,
                    "shape-image-threshold": !1,
                    "shape-outside": !1,
                    "shape-margin": !1,
                    size: !1,
                    speak: !1,
                    "speak-as": !1,
                    "speak-header": !1,
                    "speak-numeral": !1,
                    "speak-punctuation": !1,
                    "speech-rate": !1,
                    stress: !1,
                    "string-set": !1,
                    "tab-size": !1,
                    "table-layout": !1,
                    "text-align": !0,
                    "text-align-last": !0,
                    "text-combine-upright": !0,
                    "text-decoration": !0,
                    "text-decoration-color": !0,
                    "text-decoration-line": !0,
                    "text-decoration-skip": !0,
                    "text-decoration-style": !0,
                    "text-emphasis": !0,
                    "text-emphasis-color": !0,
                    "text-emphasis-position": !0,
                    "text-emphasis-style": !0,
                    "text-height": !0,
                    "text-indent": !0,
                    "text-justify": !0,
                    "text-orientation": !0,
                    "text-overflow": !0,
                    "text-shadow": !0,
                    "text-space-collapse": !0,
                    "text-transform": !0,
                    "text-underline-position": !0,
                    "text-wrap": !0,
                    top: !1,
                    transform: !1,
                    "transform-origin": !1,
                    "transform-style": !1,
                    transition: !1,
                    "transition-delay": !1,
                    "transition-duration": !1,
                    "transition-property": !1,
                    "transition-timing-function": !1,
                    "unicode-bidi": !1,
                    "vertical-align": !1,
                    visibility: !1,
                    "voice-balance": !1,
                    "voice-duration": !1,
                    "voice-family": !1,
                    "voice-pitch": !1,
                    "voice-range": !1,
                    "voice-rate": !1,
                    "voice-stress": !1,
                    "voice-volume": !1,
                    volume: !1,
                    "white-space": !1,
                    widows: !1,
                    width: !0,
                    "will-change": !1,
                    "word-break": !0,
                    "word-spacing": !0,
                    "word-wrap": !0,
                    "wrap-flow": !1,
                    "wrap-through": !1,
                    "writing-mode": !1,
                    "z-index": !1
                };
                return e
            }
            var n = /javascript\s*\:/gim;
            t.whiteList = r(),
            t.getDefaultWhiteList = r,
            t.onAttr = function(e, t, r) {}
            ,
            t.onIgnoreAttr = function(e, t, r) {}
            ,
            t.safeAttrValue = function(e, t) {
                return n.test(t) ? "" : t
            }
        }
        ,
        296: (e, t, r) => {
            var n = r(569)
              , o = r(415);
            for (var i in (t = e.exports = function(e, t) {
                return new o(t).process(e)
            }
            ).FilterCSS = o,
            n)
                t[i] = n[i];
            "undefined" !== typeof window && (window.filterCSS = e.exports)
        }
        ,
        797: (e, t, r) => {
            var n = r(426);
            e.exports = function(e, t) {
                ";" !== (e = n.trimRight(e))[e.length - 1] && (e += ";");
                var r = e.length
                  , o = !1
                  , i = 0
                  , a = 0
                  , c = "";
                function u() {
                    if (!o) {
                        var r = n.trim(e.slice(i, a))
                          , u = r.indexOf(":");
                        if (-1 !== u) {
                            var s = n.trim(r.slice(0, u))
                              , l = n.trim(r.slice(u + 1));
                            if (s) {
                                var f = t(i, c.length, s, l, r);
                                f && (c += f + "; ")
                            }
                        }
                    }
                    i = a + 1
                }
                for (; a < r; a++) {
                    var s = e[a];
                    if ("/" === s && "*" === e[a + 1]) {
                        var l = e.indexOf("*/", a + 2);
                        if (-1 === l)
                            break;
                        i = (a = l + 1) + 1,
                        o = !1
                    } else
                        "(" === s ? o = !0 : ")" === s ? o = !1 : ";" === s ? o || u() : "\n" === s && u()
                }
                return n.trim(c)
            }
        }
        ,
        426: e => {
            e.exports = {
                indexOf: function(e, t) {
                    var r, n;
                    if (Array.prototype.indexOf)
                        return e.indexOf(t);
                    for (r = 0,
                    n = e.length; r < n; r++)
                        if (e[r] === t)
                            return r;
                    return -1
                },
                forEach: function(e, t, r) {
                    var n, o;
                    if (Array.prototype.forEach)
                        return e.forEach(t, r);
                    for (n = 0,
                    o = e.length; n < o; n++)
                        t.call(r, e[n], n, e)
                },
                trim: function(e) {
                    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
                },
                trimRight: function(e) {
                    return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
                }
            }
        }
        ,
        124: (e, t) => {
            "use strict";
            var r = Symbol.for("react.transitional.element");
            function n(e, t, n) {
                var o = null;
                if (void 0 !== n && (o = "" + n),
                void 0 !== t.key && (o = "" + t.key),
                "key"in t)
                    for (var i in n = {},
                    t)
                        "key" !== i && (n[i] = t[i]);
                else
                    n = t;
                return t = n.ref,
                {
                    $$typeof: r,
                    type: e,
                    key: o,
                    ref: void 0 !== t ? t : null,
                    props: n
                }
            }
            Symbol.for("react.fragment")
        }
        ,
        583: (e, t) => {
            "use strict";
            var r = Symbol.for("react.transitional.element")
              , n = Symbol.for("react.portal")
              , o = Symbol.for("react.fragment")
              , i = Symbol.for("react.strict_mode")
              , a = Symbol.for("react.profiler")
              , c = Symbol.for("react.consumer")
              , u = Symbol.for("react.context")
              , s = Symbol.for("react.forward_ref")
              , l = Symbol.for("react.suspense")
              , f = Symbol.for("react.memo")
              , p = Symbol.for("react.lazy")
              , d = Symbol.iterator;
            var v = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , g = Object.assign
              , h = {};
            function b(e, t, r) {
                this.props = e,
                this.context = t,
                this.refs = h,
                this.updater = r || v
            }
            function y() {}
            function m(e, t, r) {
                this.props = e,
                this.context = t,
                this.refs = h,
                this.updater = r || v
            }
            b.prototype.isReactComponent = {},
            b.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e)
                    throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }
            ,
            b.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            y.prototype = b.prototype;
            var w = m.prototype = new y;
            w.constructor = m,
            g(w, b.prototype),
            w.isPureReactComponent = !0;
            var k = Array.isArray
              , x = {
                H: null,
                A: null,
                T: null,
                S: null,
                V: null
            }
              , _ = Object.prototype.hasOwnProperty;
            function S(e, t, n, o, i, a) {
                return n = a.ref,
                {
                    $$typeof: r,
                    type: e,
                    key: t,
                    ref: void 0 !== n ? n : null,
                    props: a
                }
            }
            function A(e) {
                return "object" === typeof e && null !== e && e.$$typeof === r
            }
            var I = /\/+/g;
            function C(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }
                    ))
                }("" + e.key) : t.toString(36)
            }
            function E() {}
            function j(e, t, o, i, a) {
                var c = typeof e;
                "undefined" !== c && "boolean" !== c || (e = null);
                var u, s, l = !1;
                if (null === e)
                    l = !0;
                else
                    switch (c) {
                    case "bigint":
                    case "string":
                    case "number":
                        l = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case r:
                        case n:
                            l = !0;
                            break;
                        case p:
                            return j((l = e._init)(e._payload), t, o, i, a)
                        }
                    }
                if (l)
                    return a = a(e),
                    l = "" === i ? "." + C(e, 0) : i,
                    k(a) ? (o = "",
                    null != l && (o = l.replace(I, "$&/") + "/"),
                    j(a, t, o, "", (function(e) {
                        return e
                    }
                    ))) : null != a && (A(a) && (u = a,
                    s = o + (null == a.key || e && e.key === a.key ? "" : ("" + a.key).replace(I, "$&/") + "/") + l,
                    a = S(u.type, s, void 0, 0, 0, u.props)),
                    t.push(a)),
                    1;
                l = 0;
                var f, v = "" === i ? "." : i + ":";
                if (k(e))
                    for (var g = 0; g < e.length; g++)
                        l += j(i = e[g], t, o, c = v + C(i, g), a);
                else if ("function" === typeof (g = null === (f = e) || "object" !== typeof f ? null : "function" === typeof (f = d && f[d] || f["@@iterator"]) ? f : null))
                    for (e = g.call(e),
                    g = 0; !(i = e.next()).done; )
                        l += j(i = i.value, t, o, c = v + C(i, g++), a);
                else if ("object" === c) {
                    if ("function" === typeof e.then)
                        return j(function(e) {
                            switch (e.status) {
                            case "fulfilled":
                                return e.value;
                            case "rejected":
                                throw e.reason;
                            default:
                                switch ("string" === typeof e.status ? e.then(E, E) : (e.status = "pending",
                                e.then((function(t) {
                                    "pending" === e.status && (e.status = "fulfilled",
                                    e.value = t)
                                }
                                ), (function(t) {
                                    "pending" === e.status && (e.status = "rejected",
                                    e.reason = t)
                                }
                                ))),
                                e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason
                                }
                            }
                            throw e
                        }(e), t, o, i, a);
                    throw t = String(e),
                    Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
                }
                return l
            }
            function O(e, t, r) {
                if (null == e)
                    return e;
                var n = []
                  , o = 0;
                return j(e, n, "", "", (function(e) {
                    return t.call(r, e, o++)
                }
                )),
                n
            }
            function T(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1,
                        e._result = t)
                    }
                    ), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2,
                        e._result = t)
                    }
                    )),
                    -1 === e._status && (e._status = 0,
                    e._result = t)
                }
                if (1 === e._status)
                    return e._result.default;
                throw e._result
            }
            var P = "function" === typeof reportError ? reportError : function(e) {
                if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                    var t = new window.ErrorEvent("error",{
                        bubbles: !0,
                        cancelable: !0,
                        message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e),
                        error: e
                    });
                    if (!window.dispatchEvent(t))
                        return
                } else if ("object" === typeof process && "function" === typeof process.emit)
                    return void process.emit("uncaughtException", e);
                console.error(e)
            }
            ;
            function L() {}
        }
        ,
        817: (e, t, r) => {
            "use strict";
            r(583)
        }
        ,
        198: (e, t, r) => {
            "use strict";
            r(124)
        }
        ,
        363: (e, t, r) => {
            "use strict";
            e.exports = r.p + "f220424697ac3c8ba96a.wasm.br"
        }
    }
      , t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o)
            return o.exports;
        var i = t[n] = {
            exports: {}
        };
        return e[n](i, i.exports, r),
        i.exports
    }
    r.m = e,
    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = (e, t) => {
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    r.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var e;
        r.g.importScripts && (e = r.g.location + "");
        var t = r.g.document;
        if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src),
        !e)) {
            var n = t.getElementsByTagName("script");
            if (n.length)
                for (var o = n.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); )
                    e = n[o--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        r.p = e
    }
    )(),
    r.b = document.baseURI || self.location.href;
    var n = {};
    ( () => {
        "use strict";
        r.d(n, {
            default: () => bi
        });
        var e = {};
        function t(e) {
            return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            t(e)
        }
        function o(e) {
            var r = function(e, r) {
                if ("object" != t(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, r || "default");
                    if ("object" != t(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(e)
            }(e, "string");
            return "symbol" == t(r) ? r : r + ""
        }
        function i(e, t, r) {
            return (t = o(t))in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function a(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(r), !0).forEach((function(t) {
                    i(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function u() {
            u = function() {
                return r
            }
            ;
            var e, r = {}, n = Object.prototype, o = n.hasOwnProperty, i = Object.defineProperty || function(e, t, r) {
                e[t] = r.value
            }
            , a = "function" == typeof Symbol ? Symbol : {}, c = a.iterator || "@@iterator", s = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag";
            function f(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                f({}, "")
            } catch (e) {
                f = function(e, t, r) {
                    return e[t] = r
                }
            }
            function p(e, t, r, n) {
                var o = t && t.prototype instanceof m ? t : m
                  , a = Object.create(o.prototype)
                  , c = new P(n || []);
                return i(a, "_invoke", {
                    value: E(e, r, c)
                }),
                a
            }
            function d(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            r.wrap = p;
            var v = "suspendedStart"
              , g = "suspendedYield"
              , h = "executing"
              , b = "completed"
              , y = {};
            function m() {}
            function w() {}
            function k() {}
            var x = {};
            f(x, c, (function() {
                return this
            }
            ));
            var _ = Object.getPrototypeOf
              , S = _ && _(_(L([])));
            S && S !== n && o.call(S, c) && (x = S);
            var A = k.prototype = m.prototype = Object.create(x);
            function I(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    f(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function C(e, r) {
                function n(i, a, c, u) {
                    var s = d(e[i], e, a);
                    if ("throw" !== s.type) {
                        var l = s.arg
                          , f = l.value;
                        return f && "object" == t(f) && o.call(f, "__await") ? r.resolve(f.__await).then((function(e) {
                            n("next", e, c, u)
                        }
                        ), (function(e) {
                            n("throw", e, c, u)
                        }
                        )) : r.resolve(f).then((function(e) {
                            l.value = e,
                            c(l)
                        }
                        ), (function(e) {
                            return n("throw", e, c, u)
                        }
                        ))
                    }
                    u(s.arg)
                }
                var a;
                i(this, "_invoke", {
                    value: function(e, t) {
                        function o() {
                            return new r((function(r, o) {
                                n(e, t, r, o)
                            }
                            ))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }
            function E(t, r, n) {
                var o = v;
                return function(i, a) {
                    if (o === h)
                        throw Error("Generator is already running");
                    if (o === b) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = j(c, n);
                            if (u) {
                                if (u === y)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === v)
                                throw o = b,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = h;
                        var s = d(t, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? b : g,
                            s.arg === y)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = b,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function j(t, r) {
                var n = r.method
                  , o = t.iterator[n];
                if (o === e)
                    return r.delegate = null,
                    "throw" === n && t.iterator.return && (r.method = "return",
                    r.arg = e,
                    j(t, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    y;
                var i = d(o, t.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    y;
                var a = i.arg;
                return a ? a.done ? (r[t.resultName] = a.value,
                r.next = t.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = e),
                r.delegate = null,
                y) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                y)
            }
            function O(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function T(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function P(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(O, this),
                this.reset(!0)
            }
            function L(r) {
                if (r || "" === r) {
                    var n = r[c];
                    if (n)
                        return n.call(r);
                    if ("function" == typeof r.next)
                        return r;
                    if (!isNaN(r.length)) {
                        var i = -1
                          , a = function t() {
                            for (; ++i < r.length; )
                                if (o.call(r, i))
                                    return t.value = r[i],
                                    t.done = !1,
                                    t;
                            return t.value = e,
                            t.done = !0,
                            t
                        };
                        return a.next = a
                    }
                }
                throw new TypeError(t(r) + " is not iterable")
            }
            return w.prototype = k,
            i(A, "constructor", {
                value: k,
                configurable: !0
            }),
            i(k, "constructor", {
                value: w,
                configurable: !0
            }),
            w.displayName = f(k, l, "GeneratorFunction"),
            r.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            r.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, k) : (e.__proto__ = k,
                f(e, l, "GeneratorFunction")),
                e.prototype = Object.create(A),
                e
            }
            ,
            r.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            I(C.prototype),
            f(C.prototype, s, (function() {
                return this
            }
            )),
            r.AsyncIterator = C,
            r.async = function(e, t, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new C(p(e, t, n, o),i);
                return r.isGeneratorFunction(t) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            I(A),
            f(A, l, "Generator"),
            f(A, c, (function() {
                return this
            }
            )),
            f(A, "toString", (function() {
                return "[object Generator]"
            }
            )),
            r.keys = function(e) {
                var t = Object(e)
                  , r = [];
                for (var n in t)
                    r.push(n);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            r.values = L,
            P.prototype = {
                constructor: P,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(T),
                    !t)
                        for (var r in this)
                            "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var r = this;
                    function n(n, o) {
                        return c.type = "throw",
                        c.arg = t,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = e),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return n("end");
                        if (a.tryLoc <= this.prev) {
                            var u = o.call(a, "catchLoc")
                              , s = o.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return n(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return n(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return n(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var i = n;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    y) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc),
                            T(r),
                            y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                T(r)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, r, n) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = e),
                    y
                }
            },
            r
        }
        function s(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function l(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        s(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        s(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        r.r(e),
        r.d(e, {
            getJDD: () => po,
            getMaterial: () => vo,
            getZ2FL: () => so,
            getZ2FN: () => fo,
            jwt: () => uo,
            rateLimit: () => Pr,
            upid: () => Or
        });
        var f = function() {
            return Boolean("undefined" === typeof window || void 0)
        };
        function p(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function d(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, o(n.key), n)
            }
        }
        function v(e, t, r) {
            return t && d(e.prototype, t),
            r && d(e, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function g(e) {
            return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            g(e)
        }
        function h() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (e) {}
            return (h = function() {
                return !!e
            }
            )()
        }
        function b(e, r) {
            if (r && ("object" == t(r) || "function" == typeof r))
                return r;
            if (void 0 !== r)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }
        function y(e, t, r) {
            return t = g(t),
            b(e, h() ? Reflect.construct(t, r || [], g(e).constructor) : t.apply(e, r))
        }
        function m(e, t) {
            return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            m(e, t)
        }
        function w(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && m(e, t)
        }
        var k = {};
        function x() {
            var e;
            if ("undefined" !== typeof globalThis)
                e = globalThis;
            else if ("undefined" !== typeof window)
                e = window;
            else {
                if ("undefined" === typeof r.g)
                    throw new Error("unable to locate global object");
                e = r.g
            }
            return e
        }
        var _ = function(e) {
            var t = x();
            return new Proxy({
                _global_subscribe_list: {},
                _global_message_list: {},
                locale: "en_US"
            },{
                get: function(r, n, o) {
                    if ("toJSON" === n)
                        return function() {
                            var e = t
                              , r = e.okGlobal ? c({}, e.okGlobal) : {}
                              , n = e._okGlobal ? c({}, e._okGlobal) : {};
                            return c(c(c({}, r), n), k)
                        }
                        ;
                    if ("toString" === n)
                        return function() {
                            return JSON.stringify(o.toJSON())
                        }
                        ;
                    var i = [k, t._okGlobal, t.okGlobal];
                    e && (i = e(i));
                    var a = i.find((function(e) {
                        return e && Object.prototype.hasOwnProperty.call(e, n)
                    }
                    ));
                    return null === a || void 0 === a ? void 0 : a[n]
                },
                set: function(e, t, r) {
                    return k[t] = r,
                    !0
                }
            })
        }
          , S = "_expire"
          , A = x();
        const I = function() {
            function e(t, r) {
                p(this, e),
                this.storageKey = t,
                this.projectKey = r
            }
            return v(e, [{
                key: "getProjectData",
                value: function(t) {
                    if (f())
                        return {};
                    var r = A[this.storageKey].getItem(this.projectKey)
                      , n = {};
                    try {
                        n = JSON.parse(r || "{}")
                    } catch (Ot) {
                        n = {}
                    }
                    var o = i({}, S, {})
                      , a = n[S] || {};
                    return Object.keys(n).forEach((function(t) {
                        t !== S && (void 0 === a[t] || e.isCorrectExpire(a[t])) && (o[t] = n[t],
                        o[S] && (o[S][t] = a[t]))
                    }
                    )),
                    t && delete o[S],
                    o
                }
            }, {
                key: "get",
                value: function(e) {
                    if (!(null === e || void 0 === e || e instanceof Function || e instanceof Array || e instanceof Object))
                        return this.getProjectData()[e]
                }
            }, {
                key: "set",
                value: function(t, r, n) {
                    if (f())
                        return !1;
                    if (null === t || void 0 === t || t instanceof Function || t instanceof Array)
                        return !1;
                    if (t === S)
                        return !1;
                    var o = this.getProjectData();
                    if (!(t instanceof Object)) {
                        o[t] = r,
                        "undefined" !== typeof n && e.isCorrectExpireSeconds(n) ? (o[S] || (o[S] = {}),
                        o[S][t] = e.getExpire(n)) : o[S] && delete o[S][t];
                        try {
                            return A[this.storageKey].setItem(this.projectKey, JSON.stringify(o)),
                            !0
                        } catch (i) {
                            return !1
                        }
                    }
                    return this.setAll(t, r)
                }
            }, {
                key: "setAll",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (f())
                        return !1;
                    var n = this.getProjectData();
                    Object.entries(t).forEach((function(t) {
                        var o = t[0];
                        if (o !== S) {
                            var i = r[o];
                            n[o] = t[1],
                            e.isCorrectExpireSeconds(i) ? (n[S] || (n[S] = {}),
                            n[S][o] = e.getExpire(i)) : n[S] && delete n[S][o]
                        }
                    }
                    ));
                    try {
                        return A[this.storageKey].setItem(this.projectKey, JSON.stringify(n)),
                        !0
                    } catch (o) {
                        return !1
                    }
                }
            }, {
                key: "remove",
                value: function(e) {
                    if (f())
                        return !1;
                    if (null === e || void 0 === e || e instanceof Function)
                        return !1;
                    if (e.constructor && e.constructor === Object)
                        return !1;
                    var t = [];
                    e instanceof Array ? t = e : t.push(e);
                    var r = this.getProjectData();
                    return t.forEach((function(e) {
                        delete r[e],
                        r[S] && delete r[S][e]
                    }
                    )),
                    A[this.storageKey].setItem(this.projectKey, JSON.stringify(r)),
                    !0
                }
            }, {
                key: "getAll",
                value: function() {
                    return this.getProjectData(!0)
                }
            }, {
                key: "cleanAll",
                value: function() {
                    f() || A[this.storageKey].setItem(this.projectKey, JSON.stringify({}))
                }
            }, {
                key: "cleanInvalidData",
                value: function() {
                    f() || A[this.storageKey].setItem(this.projectKey, JSON.stringify(this.getProjectData()))
                }
            }], [{
                key: "isCorrectExpire",
                value: function(e) {
                    return "undefined" !== typeof e && Number.isInteger(Number(e)) && Number.isSafeInteger(e) && e > (new Date).getTime()
                }
            }, {
                key: "isCorrectExpireSeconds",
                value: function(e) {
                    return "undefined" !== typeof e && Number.isInteger(e) && Number.isSafeInteger(e) && e > 0
                }
            }, {
                key: "getExpire",
                value: function(e) {
                    return (new Date).getTime() + 1e3 * e
                }
            }])
        }();
        var C = "".concat("ok_", "global")
          , E = "localStorage";
        const j = function(e) {
            function t(e) {
                var r;
                return p(this, t),
                (r = y(this, t, [E, "ok_" + e])).global = new I(E,C),
                r.g = new I(E,C),
                r
            }
            return w(t, e),
            v(t)
        }(I);
        var O = "sessionStorage"
          , T = "".concat("ok_", "global");
        const P = function(e) {
            function t(e) {
                var r;
                return p(this, t),
                (r = y(this, t, [O, "ok_" + e])).global = new I(O,T),
                r.g = new I(O,T),
                r
            }
            return w(t, e),
            v(t)
        }(I);
        const L = new (function() {
            return v((function e() {
                p(this, e),
                this.local = {},
                this.session = {}
            }
            ), [{
                key: "localProject",
                value: function(e) {
                    return this.local[e] || (this.local[e] = new j(e)),
                    this.local[e]
                }
            }, {
                key: "sessionProject",
                value: function(e) {
                    return this.session[e] || (this.session[e] = new P(e)),
                    this.session[e]
                }
            }])
        }());
        var D = "ok_"
          , N = "default"
          , R = "global"
          , K = "localStorage"
          , U = "sessionStorage"
          , F = D + N
          , M = D + R;
        function B(e) {
            if (e === N)
                throw new Error("'default' is not allowed as a project name.");
            if (e === R)
                throw new Error("'global' is not allowed as a project name. Please use 'storage.g' or 'storage.session.g' instead.");
            return e
        }
        function V(e, t, r) {
            var n = new I(e,t);
            return r ? n.getAll() : n.getProjectData()
        }
        function z(e, t) {
            f() || new I(e,t).cleanInvalidData()
        }
        var q = function(e, t, r) {
            return new I(e,t).get(r)
        }
          , W = function(e, t, r, n, o) {
            return new I(e,t).set(r, n, o)
        }
          , X = function(e, t, r) {
            return new I(e,t).remove(r)
        }
          , G = function(e, t) {
            return new I(e,t).getAll()
        }
          , J = function(e, t) {
            return new I(e,t).cleanAll()
        };
        function H(e) {
            var t = e.isLocal
              , r = e.isGlobal;
            function n() {
                return t ? K : U
            }
            function o() {
                return r ? M : F
            }
            return {
                set: function(e, t, r) {
                    return W(n(), o(), e, t, r)
                },
                get: function(e) {
                    return q(n(), o(), e)
                },
                remove: function(e) {
                    return X(n(), o(), e)
                },
                getAll: function() {
                    return G(n(), o())
                },
                cleanAll: function() {
                    return J(n(), o())
                }
            }
        }
        var $ = function() {
            var e = c({}, H({
                isLocal: !0,
                isGlobal: !0
            }));
            return c(c({}, H({
                isLocal: !0,
                isGlobal: !1
            })), {}, {
                getProjectStorage: function(e) {
                    return V(K, D + e, !0)
                },
                global: e,
                g: e
            })
        }();
        function Q(e) {
            var t = B(e.project);
            return z(U, F = D + t),
            z(U, M),
            t !== N && z(U, D + N),
            L.sessionProject(t)
        }
        function Z(e) {
            var t = B(e);
            return L.sessionProject(t)
        }
        var Y = function() {
            var e = c({}, H({
                isLocal: !1,
                isGlobal: !0
            }));
            return c(c({}, H({
                isLocal: !1,
                isGlobal: !1
            })), {}, {
                getProjectStorage: function(e) {
                    return V(U, D + e, !0)
                },
                global: e,
                g: e,
                init: Q,
                getInstance: Z
            })
        }();
        const ee = c(c({
            getInstance: function(e) {
                var t = B(e);
                return L.localProject(t)
            },
            init: function(e) {
                var t = B(e.project);
                return z(K, F = D + t),
                z(K, M),
                t !== N && z(K, D + N),
                L.localProject(t)
            },
            session: Y
        }, $), {}, {
            local: $
        });
        function te(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function re(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return te(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? te(e, t) : void 0
            }
        }
        function ne(e) {
            return function(e) {
                if (Array.isArray(e))
                    return te(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || re(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var oe = ["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]
          , ie = r(296)
          , ae = r.n(ie);
        const ce = {
            indexOf: function(e, t) {
                var r, n;
                if (Array.prototype.indexOf)
                    return e.indexOf(t);
                for (r = 0,
                n = e.length; r < n; r++)
                    if (e[r] === t)
                        return r;
                return -1
            },
            forEach: function(e, t, r) {
                var n, o;
                if (Array.prototype.forEach)
                    return e.forEach(t, r);
                for (n = 0,
                o = e.length; n < o; n++)
                    t.call(r, e[n], n, e)
            },
            trim: function(e) {
                return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
            },
            spaceIndex: function(e) {
                var t = /\s|\n|\t/.exec(e);
                return t ? t.index : -1
            }
        };
        var ue = ae().FilterCSS
          , se = ae().getDefaultWhiteList;
        function le() {
            return i(i({
                a: ["target", "href", "title"],
                abbr: ["title"],
                address: [],
                area: ["shape", "coords", "href", "alt"],
                article: [],
                aside: [],
                audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
                b: [],
                bdi: ["dir"],
                bdo: ["dir"],
                big: [],
                blockquote: ["cite"],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: ["align", "valign", "span", "width"],
                colgroup: ["align", "valign", "span", "width"],
                dd: [],
                del: ["datetime"],
                details: ["open"],
                div: [],
                dl: [],
                dt: [],
                em: [],
                figcaption: [],
                figure: [],
                font: ["color", "size", "face"],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: ["src", "alt", "title", "width", "height", "loading"],
                ins: ["datetime"],
                kbd: [],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                summary: [],
                sup: [],
                strong: [],
                strike: [],
                table: ["width", "border", "align", "valign"],
                tbody: ["align", "valign"],
                td: ["width", "rowspan", "colspan", "align", "valign"],
                tfoot: ["align", "valign"],
                th: ["width", "rowspan", "colspan", "align", "valign"],
                thead: ["align", "valign"],
                tr: ["rowspan", "align", "valign"],
                tt: [],
                u: [],
                ul: [],
                video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"],
                picture: ["class"]
            }, "figure", ["class"]), "button", ["type", "class"])
        }
        var fe = new ue;
        function pe(e) {
            return e.replace(de, "&lt;").replace(ve, "&gt;")
        }
        var de = /</g
          , ve = />/g
          , ge = /"/g
          , he = /&quot;/g
          , be = /&#([a-zA-Z0-9]*);?/gim
          , ye = /&colon;?/gim
          , me = /&newline;?/gim
          , we = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi
          , ke = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi
          , xe = /u\s*r\s*l\s*\(.*/gi;
        function _e(e) {
            return e.replace(ge, "&quot;")
        }
        function Se(e) {
            return e.replace(he, '"')
        }
        function Ae(e) {
            return e.replace(be, (function(e, t) {
                return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
            }
            ))
        }
        function Ie(e) {
            return e.replace(ye, ":").replace(me, " ")
        }
        function Ce(e) {
            for (var t = "", r = 0, n = e.length; r < n; r++)
                t += e.charCodeAt(r) < 32 ? " " : e.charAt(r);
            return ce.trim(t)
        }
        function Ee(e) {
            return e = Ce(e = Ie(e = Ae(e = Se(e))))
        }
        function je(e) {
            return e = pe(e = _e(e))
        }
        const Oe = {
            whiteList: le(),
            getDefaultWhiteList: le,
            onTag: function(e, t, r) {},
            onIgnoreTag: function(e, t, r) {},
            onTagAttr: function(e, t, r) {},
            onIgnoreTagAttr: function(e, t, r) {},
            safeAttrValue: function(e, t, r, n) {
                if (r = Ee(r),
                "href" === t || "src" === t) {
                    if ("#" === (r = ce.trim(r)))
                        return "#";
                    if ("http://" !== r.substr(0, 7) && "https://" !== r.substr(0, 8) && "mailto:" !== r.substr(0, 7) && "tel:" !== r.substr(0, 4) && "data:image/" !== r.substr(0, 11) && "ftp://" !== r.substr(0, 6) && "./" !== r.substr(0, 2) && "../" !== r.substr(0, 3) && "#" !== r[0] && "/" !== r[0])
                        return ""
                } else if ("background" === t) {
                    if (we.lastIndex = 0,
                    we.test(r))
                        return ""
                } else if ("style" === t) {
                    if (ke.lastIndex = 0,
                    ke.test(r))
                        return "";
                    if (xe.lastIndex = 0,
                    xe.test(r) && (we.lastIndex = 0,
                    we.test(r)))
                        return "";
                    !1 !== n && (r = (n = n || fe).process(r))
                }
                return r = je(r)
            },
            escapeHtml: pe,
            escapeQuote: _e,
            unescapeQuote: Se,
            escapeHtmlEntities: Ae,
            escapeDangerHtml5Entities: Ie,
            clearNonPrintableCharacter: Ce,
            friendlyAttrValue: Ee,
            escapeAttrValue: je,
            onIgnoreTagStripAll: function() {
                return ""
            },
            StripTagBody: function(e, t) {
                "function" !== typeof t && (t = function() {}
                );
                var r = !Array.isArray(e)
                  , n = []
                  , o = !1;
                return {
                    onIgnoreTag: function(i, a, c) {
                        if (function(t) {
                            return !!r || -1 !== ce.indexOf(e, t)
                        }(i)) {
                            if (c.isClosing) {
                                var u = "[/removed]"
                                  , s = c.position + 10;
                                return n.push([!1 !== o ? o : c.position, s]),
                                o = !1,
                                u
                            }
                            return o || (o = c.position),
                            "[removed]"
                        }
                        return t(i, a, c)
                    },
                    remove: function(e) {
                        var t = ""
                          , r = 0;
                        return ce.forEach(n, (function(n) {
                            t += e.slice(r, n[0]),
                            r = n[1]
                        }
                        )),
                        t += e.slice(r)
                    }
                }
            },
            stripCommentTag: function(e) {
                for (var t = "", r = 0; r < e.length; ) {
                    var n = e.indexOf("\x3c!--", r);
                    if (-1 === n) {
                        t += e.slice(r);
                        break
                    }
                    t += e.slice(r, n);
                    var o = e.indexOf("--\x3e", n);
                    if (-1 === o)
                        break;
                    r = o + 3
                }
                return t
            },
            stripBlankChar: function(e) {
                var t = e.split("");
                return (t = t.filter((function(e) {
                    var t = e.charCodeAt(0);
                    return 127 !== t && (!(t <= 31) || (10 === t || 13 === t))
                }
                ))).join("")
            },
            attributeWrapSign: '"',
            cssFilter: fe,
            getDefaultCSSWhiteList: se
        };
        function Te(e) {
            var t, r = ce.spaceIndex(e);
            return t = -1 === r ? e.slice(1, -1) : e.slice(1, r + 1),
            "/" === (t = ce.trim(t).toLowerCase()).slice(0, 1) && (t = t.slice(1)),
            "/" === t.slice(-1) && (t = t.slice(0, -1)),
            t
        }
        function Pe(e) {
            return "</" === e.slice(0, 2)
        }
        var Le = /[^a-zA-Z0-9\\_:.-]/gim;
        function De(e, t) {
            for (; t < e.length; t++) {
                var r = e[t];
                if (" " !== r)
                    return "=" === r ? t : -1
            }
        }
        function Ne(e, t) {
            for (; t < e.length; t++) {
                var r = e[t];
                if (" " !== r)
                    return "'" === r || '"' === r ? t : -1
            }
        }
        function Re(e, t) {
            for (; t > 0; t--) {
                var r = e[t];
                if (" " !== r)
                    return "=" === r ? t : -1
            }
        }
        function Ke(e) {
            return function(e) {
                return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1]
            }(e) ? e.substr(1, e.length - 2) : e
        }
        const Ue = function(e, t, r) {
            var n = ""
              , o = 0
              , i = !1
              , a = !1
              , c = 0
              , u = e.length
              , s = ""
              , l = "";
            e: for (c = 0; c < u; c++) {
                var f = e.charAt(c);
                if (!1 === i) {
                    if ("<" === f) {
                        i = c;
                        continue
                    }
                } else if (!1 === a) {
                    if ("<" === f) {
                        n += r(e.slice(o, c)),
                        i = c,
                        o = c;
                        continue
                    }
                    if (">" === f || c === u - 1) {
                        n += r(e.slice(o, i)),
                        s = Te(l = e.slice(i, c + 1)),
                        n += t(i, n.length, s, l, Pe(l)),
                        o = c + 1,
                        i = !1;
                        continue
                    }
                    if ('"' === f || "'" === f)
                        for (var p = 1, d = e.charAt(c - p); "" === d.trim() || "=" === d; ) {
                            if ("=" === d) {
                                a = f;
                                continue e
                            }
                            d = e.charAt(c - ++p)
                        }
                } else if (f === a) {
                    a = !1;
                    continue
                }
            }
            return o < u && (n += r(e.substr(o))),
            n
        }
          , Fe = function(e, t) {
            var r = 0
              , n = 0
              , o = []
              , i = !1
              , a = e.length;
            function c(e, r) {
                if (!((e = (e = ce.trim(e)).replace(Le, "").toLowerCase()).length < 1)) {
                    var n = t(e, r || "");
                    n && o.push(n)
                }
            }
            for (var u = 0; u < a; u++) {
                var s, l = e.charAt(u);
                if (!1 !== i || "=" !== l)
                    if (!1 === i || u !== n)
                        if (/\s|\n|\t/.test(l)) {
                            if (e = e.replace(/\s|\n|\t/g, " "),
                            !1 === i) {
                                if (-1 === (s = De(e, u))) {
                                    c(ce.trim(e.slice(r, u))),
                                    i = !1,
                                    r = u + 1;
                                    continue
                                }
                                u = s - 1;
                                continue
                            }
                            if (-1 === (s = Re(e, u - 1))) {
                                c(i, Ke(ce.trim(e.slice(r, u)))),
                                i = !1,
                                r = u + 1;
                                continue
                            }
                        } else
                            ;
                    else {
                        if (-1 === (s = e.indexOf(l, u + 1)))
                            break;
                        c(i, ce.trim(e.slice(n + 1, s))),
                        i = !1,
                        r = (u = s) + 1
                    }
                else
                    i = e.slice(r, u),
                    r = u + 1,
                    n = '"' === e.charAt(r) || "'" === e.charAt(r) ? r : Ne(e, u + 1)
            }
            return r < e.length && (!1 === i ? c(e.slice(r)) : c(i, Ke(ce.trim(e.slice(r))))),
            ce.trim(o.join(" "))
        };
        var Me = ae().FilterCSS
          , Be = Ue
          , Ve = Fe;
        function ze(e) {
            return void 0 === e || null === e
        }
        function qe(e) {
            (e = function(e) {
                var t = {};
                for (var r in e)
                    t[r] = e[r];
                return t
            }(e || {})).stripIgnoreTag && (e.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),
            e.onIgnoreTag = Oe.onIgnoreTagStripAll),
            e.whiteList || e.allowList ? e.whiteList = e.whiteList || e.allowList : e.whiteList = Oe.whiteList,
            this.attributeWrapSign = !0 === e.singleQuotedAttributeValue ? "'" : Oe.attributeWrapSign,
            e.onTag = e.onTag || Oe.onTag,
            e.onTagAttr = e.onTagAttr || Oe.onTagAttr,
            e.onIgnoreTag = e.onIgnoreTag || Oe.onIgnoreTag,
            e.onIgnoreTagAttr = e.onIgnoreTagAttr || Oe.onIgnoreTagAttr,
            e.safeAttrValue = e.safeAttrValue || Oe.safeAttrValue,
            e.escapeHtml = e.escapeHtml || Oe.escapeHtml,
            this.options = e,
            !1 === e.css ? this.cssFilter = !1 : (e.css = e.css || {},
            this.cssFilter = new Me(e.css))
        }
        qe.prototype.process = function(e) {
            if (!(e = (e = e || "").toString()))
                return "";
            var t = this
              , r = t.options
              , n = r.whiteList
              , o = r.onTag
              , i = r.onIgnoreTag
              , a = r.onTagAttr
              , c = r.onIgnoreTagAttr
              , u = r.safeAttrValue
              , s = r.escapeHtml
              , l = t.attributeWrapSign
              , f = t.cssFilter;
            r.stripBlankChar && (e = Oe.stripBlankChar(e)),
            r.allowCommentTag || (e = Oe.stripCommentTag(e));
            var p = !1;
            r.stripIgnoreTagBody && (p = Oe.StripTagBody(r.stripIgnoreTagBody, i),
            i = p.onIgnoreTag);
            var d = Be(e, (function(e, t, r, p, d) {
                var v = {
                    sourcePosition: e,
                    position: t,
                    isClosing: d,
                    isWhite: Object.prototype.hasOwnProperty.call(n, r)
                }
                  , g = o(r, p, v);
                if (!ze(g))
                    return g;
                if (v.isWhite) {
                    if (v.isClosing)
                        return "</" + r + ">";
                    var h = function(e) {
                        var t = ce.spaceIndex(e);
                        if (-1 === t)
                            return {
                                html: "",
                                closing: "/" === e[e.length - 2]
                            };
                        var r = "/" === (e = ce.trim(e.slice(t + 1, -1)))[e.length - 1];
                        return r && (e = ce.trim(e.slice(0, -1))),
                        {
                            html: e,
                            closing: r
                        }
                    }(p)
                      , b = n[r]
                      , y = Ve(h.html, (function(e, t) {
                        var n = -1 !== ce.indexOf(b, e)
                          , o = a(r, e, t, n);
                        return ze(o) ? n ? (t = u(r, e, t, f)) ? e + "=" + l + t + l : e : ze(o = c(r, e, t, n)) ? void 0 : o : o
                    }
                    ));
                    return p = "<" + r,
                    y && (p += " " + y),
                    h.closing && (p += " /"),
                    p += ">"
                }
                return ze(g = i(r, p, v)) ? s(p) : g
            }
            ), s);
            return p && (d = p.remove(d)),
            d
        }
        ;
        var We = {
            filterXSS: function(e, t) {
                return new qe(t).process(e)
            },
            FilterXSS: qe,
            whiteList: Oe.whiteList,
            getDefaultWhiteList: Oe.getDefaultWhiteList,
            onTag: Oe.onTag,
            onIgnoreTag: Oe.onIgnoreTag,
            onTagAttr: Oe.onTagAttr,
            onIgnoreTagAttr: Oe.onIgnoreTagAttr,
            safeAttrValue: Oe.safeAttrValue,
            escapeHtml: Oe.escapeHtml,
            escapeQuote: Oe.escapeQuote,
            unescapeQuote: Oe.unescapeQuote,
            escapeHtmlEntities: Oe.escapeHtmlEntities,
            escapeDangerHtml5Entities: Oe.escapeDangerHtml5Entities,
            clearNonPrintableCharacter: Oe.clearNonPrintableCharacter,
            friendlyAttrValue: Oe.friendlyAttrValue,
            escapeAttrValue: Oe.escapeAttrValue,
            onIgnoreTagStripAll: Oe.onIgnoreTagStripAll,
            StripTagBody: Oe.StripTagBody,
            stripCommentTag: Oe.stripCommentTag,
            stripBlankChar: Oe.stripBlankChar,
            attributeWrapSign: Oe.attributeWrapSign,
            cssFilter: Oe.cssFilter,
            getDefaultCSSWhiteList: Oe.getDefaultCSSWhiteList,
            parseTag: Ue,
            parseAttr: Fe
        }
          , Xe = We.getDefaultWhiteList()
          , Ge = We.escapeAttrValue
          , Je = {};
        function He(e) {
            var t = (null === e || void 0 === e ? void 0 : e.mode) || "escape"
              , r = null === e || void 0 === e ? void 0 : e.whiteList
              , n = (null === e || void 0 === e ? void 0 : e.allowHrefVariables) || !1
              , o = Xe;
            if (r) {
                var i = function(e) {
                    var t = {};
                    for (var r in e)
                        Array.isArray(e[r]) ? t[r.toLowerCase()] = e[r].map((function(e) {
                            return e.toLowerCase()
                        }
                        )) : t[r.toLowerCase()] = e[r];
                    return t
                }(r);
                o = c(c({}, Xe), i)
            }
            var a = "escape" === t;
            return new We.FilterXSS(c(c({
                onTagAttr: function(e, t, r, o) {
                    return o && "a" === e && "href" === t && (r.startsWith("okex://") || r.startsWith("okx://") || r.startsWith("okxtr://")) || o && n && "a" === e && "href" === t && r.startsWith("{") && r.endsWith("}") ? "".concat(t, '="').concat(r, '"') : void 0
                },
                onIgnoreTagAttr: function(e, t, r) {
                    if (t.startsWith("data-")) {
                        var n = a ? Ge(r) : r.replace(/</g, "").replace(/>/g, "");
                        return "".concat(t, '="').concat(n, '"')
                    }
                },
                css: !1,
                escapeHtml: function(e) {
                    return a ? We.escapeHtml(e) : e.replace(/</g, "").replace(/>/g, "")
                }
            }, e), {}, {
                whiteList: o
            }))
        }
        Object.keys(Xe).forEach((function(e) {
            Xe[e] = Xe[e].concat(oe)
        }
        ));
        const $e = function(e, t) {
            var r = JSON.stringify(t);
            return Je[r] || (Je[r] = He(t)),
            Je[r].process(e)
        };
        var Qe = ["javascript:", "view-source:", "\\s*j\\s*a\\s*v\\s*a\\s*s\\s*c\\s*r\\s*i\\s*p\\s*t\\s*:\\s*"]
          , Ze = {};
        const Ye = function(e, t) {
            var r = e
              , n = ""
              , o = function(e, t) {
                var r = "".concat(ne(e).join(","), "|").concat(t.join(","));
                if (!Ze[r]) {
                    var n = Qe.concat(t).filter((function(t) {
                        return !e.has(t)
                    }
                    ))
                      , o = new RegExp(n.join("|"),"gi");
                    Ze[r] = o
                }
                return Ze[r]
            }(new Set((null === t || void 0 === t ? void 0 : t.keywordsWhiteList) || []), (null === t || void 0 === t ? void 0 : t.keywordsBlackList) || []);
            do {
                n = r,
                r = r.replace(o, "")
            } while (r !== n);
            return r
        };
        function et(e, t) {
            var r = $e(e, t);
            return r = Ye(r, t)
        }
        function tt(e) {
            try {
                var t = function(e) {
                    var t, r = e, n = 0;
                    do {
                        t = r,
                        r = decodeURIComponent(r),
                        n++
                    } while (r !== t && n < 5);
                    return {
                        decodeValue: r,
                        count: n
                    }
                }(e)
                  , r = t.decodeValue
                  , n = t.count;
                return r === e ? {
                    isEncode: !1,
                    count: 0
                } : {
                    isEncode: r,
                    count: n
                }
            } catch (Ot) {
                return {
                    isEncode: !1,
                    count: 0
                }
            }
        }
        function rt(e, t, r) {
            var n = t.enableXssPurify
              , o = t.mode;
            if (!n)
                return r(e);
            if (void 0 === e || null === e)
                return r(e);
            var i = tt(String(e))
              , a = i.isEncode
              , c = i.count;
            if (a && "string" === typeof a) {
                var u = et(a, {
                    mode: o
                });
                return r(u === a ? e : function(e, t) {
                    var r = 1
                      , n = e;
                    do {
                        r++,
                        n = encodeURIComponent(n)
                    } while (r !== t);
                    return n
                }(u, c))
            }
            return r(et(String(e), {
                mode: o
            }))
        }
        function nt() {
            for (var e = arguments, t = arguments.length <= 0 ? void 0 : arguments[0], r = function() {
                var r = n < 0 || e.length <= n ? void 0 : e[n];
                r && Object.keys(r).forEach((function(e) {
                    t[e] = r[e]
                }
                ))
            }, n = 1; n < arguments.length; n++)
                r();
            return t
        }
        const ot = {
            get: function(e) {
                var t = e;
                return '"' === t[0] && (t = t.slice(1, -1)),
                t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            },
            set: function(e) {
                return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
            }
        };
        var it = _()
          , at = f()
          , ct = x()
          , ut = {
            debug: function() {},
            info: function() {},
            warn: function() {},
            error: function() {},
            timeStart: function() {},
            timeEnd: function() {},
            init: function() {}
        }
          , st = function(e) {
            var t, r = e.message, n = e.level, o = e.data, i = {};
            i = o instanceof Error ? {
                error: o
            } : c({
                message: r
            }, null !== o && void 0 !== o ? o : {});
            var a = Object.keys(i).find((function(e) {
                return i[e]instanceof Error
            }
            ))
              , u = a ? i[a] : void 0;
            if (u) {
                var s;
                a && delete i[a];
                var l = new Error;
                return l.message = "".concat(r, " - ").concat(u.message),
                l.name = u.name,
                l.stack = u.stack,
                void (null === (s = ct.Sentry) || void 0 === s || s.captureException(l, c(c({}, i), {}, {
                    message: r,
                    contexts: {
                        report: {
                            info: JSON.stringify(i)
                        }
                    }
                })))
            }
            null === (t = ct.Sentry) || void 0 === t || t.captureEvent(c(c({}, i), {}, {
                message: r,
                level: n,
                contexts: {
                    report: {
                        info: JSON.stringify(i)
                    }
                }
            }))
        };
        ut.init = at ? function() {
            if (ct.ssrUtils && ct.ssrUtils.logger) {
                var e = ct.ssrUtils.logger;
                ut.debug = function() {
                    for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                        n[o] = arguments[o];
                    return null === (t = e.debug) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(n))
                }
                ,
                ut.info = function() {
                    for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                        n[o] = arguments[o];
                    return null === (t = e.info) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(n))
                }
                ,
                ut.warn = function() {
                    for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                        n[o] = arguments[o];
                    return null === (t = e.warn) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(n))
                }
                ,
                ut.error = function() {
                    for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                        n[o] = arguments[o];
                    return null === (t = e.error) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(n))
                }
                ,
                ut.timeStart = function() {
                    for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                        n[o] = arguments[o];
                    return null === (t = e.timeStart) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(n))
                }
                ,
                ut.timeEnd = function() {
                    for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                        n[o] = arguments[o];
                    return null === (t = e.timeEnd) || void 0 === t ? void 0 : t.call.apply(t, [e].concat(n))
                }
            }
        }
        : function() {
            var e, t, r, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = (null === ct || void 0 === ct || null === (e = ct.__INIT_STATE__) || void 0 === e ? void 0 : e.appContext) || {}, i = o.dsn, a = o.version, u = o.traceId, s = o.injectableOptions, l = void 0 === s ? {} : s, f = null === l || void 0 === l ? void 0 : l.reportOptions, p = {};
            "object" !== typeof f || Array.isArray(f) || (p = f || {}),
            (i || null !== n && void 0 !== n && n.dsn || p.dsn) && (null === (t = ct.Sentry) || void 0 === t || t.init(c(c({
                dsn: i,
                release: a
            }, n), p), {
                debug: ["dev", "daily"].includes(it.envSign)
            }),
            null === (r = ct.Sentry) || void 0 === r || r.setTag("traceId", u),
            ut.debug = function(e, t) {
                return st({
                    message: e,
                    level: "debug",
                    data: t
                })
            }
            ,
            ut.info = function(e, t) {
                return st({
                    message: e,
                    level: "info",
                    data: t
                })
            }
            ,
            ut.warn = function(e, t) {
                return st({
                    message: e,
                    level: "warn",
                    data: t
                })
            }
            ,
            ut.error = function(e, t) {
                return st({
                    message: e,
                    level: "error",
                    data: t
                })
            }
            ,
            ut.timeStart = console.time,
            ut.timeEnd = console.timeEnd)
        }
        ,
        ut.init();
        var lt = ["path", "domain", "overwrite", "sameSite", "encrypt", "maxAge", "expires", "httpOnly", "secure", "signed"]
          , ft = _()
          , pt = f()
          , dt = null;
        function vt(e, t) {
            t.length && ut.info(e),
            ut.info('[cookieAlarm]: "cookieWhiteList length is '.concat(t.length))
        }
        function gt(e) {
            var t, r, n, o, i, a, c, u = e || {}, s = u.name, l = u.apiType, f = u.type, p = u.defaultCookieInterceptLevel, d = u.defaultCookieInterceptMaxAge, v = "instance" === l, g = (null === (t = ft) || void 0 === t ? void 0 : t.cookieWhitelist) || [];
            0 === g.length && (g = (null === (c = ft = _()) || void 0 === c ? void 0 : c.cookieWhitelist) || []);
            !function(e) {
                if (!pt && !dt) {
                    for (var t = e, r = {}, n = 0; n < t.length; n++) {
                        var o = t[n];
                        "string" === typeof o && o && (r[o] = !0)
                    }
                    dt = r
                }
            }(g);
            var h = v ? (null === (r = ft) || void 0 === r ? void 0 : r.cookieInterceptLevel) || p || 0 : (null === (n = ft) || void 0 === n ? void 0 : n.cookieInterceptLevel) || 0
              , b = v ? (null === (o = ft) || void 0 === o ? void 0 : o.cookieInterceptMaxAge) || d : null === (i = ft) || void 0 === i ? void 0 : i.cookieInterceptMaxAge;
            if (s && (pt && !g.includes(s) || !pt && (null === (a = dt) || void 0 === a || !a[s]))) {
                var y = '[cookieAlarm]: "'.concat(s, '" is not allowed to ').concat(f, "!");
                if (1 === h)
                    vt(y, g);
                else if (2 === h)
                    return void vt(y, g)
            }
            return "undefined" === typeof b || b
        }
        var ht = x()
          , bt = f()
          , yt = !bt && "undefined" === typeof document
          , mt = {
            path: "/"
        }
          , wt = "ok_global"
          , kt = {
            cacheMap: {}
        };
        const xt = new (function() {
            function e(t) {
                p(this, e),
                this.options = t || {},
                this.converter = (null === t || void 0 === t ? void 0 : t.converter) || ot,
                this.attributes = (null === t || void 0 === t ? void 0 : t.attributes) || mt,
                this.enableXssPurify = void 0 === (null === t || void 0 === t ? void 0 : t.enableXssPurify) || t.enableXssPurify,
                this.mode = (null === t || void 0 === t ? void 0 : t.mode) || "escape",
                this.initAttributes = {
                    value: Object.freeze(this.attributes)
                },
                this.initConverter = {
                    value: Object.freeze(this.converter)
                }
            }
            return v(e, [{
                key: "init",
                value: function(t) {
                    return new e(t)
                }
            }, {
                key: "closeXssPurify",
                value: function() {
                    this.enableXssPurify = !1
                }
            }, {
                key: "setMode",
                value: function(e) {
                    this.mode = e
                }
            }, {
                key: "validateProjectName",
                value: function(e) {
                    if (e === wt)
                        throw new Error("ok_global is not allowed as a cookie name. Please use 'Cookies.g' instead.")
                }
            }, {
                key: "getApi",
                value: function(e) {
                    var t, r, n = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableOkGlobal: !0
                    };
                    if ((!arguments.length || e) && (null !== o && void 0 !== o && o.disableOkGlobal && this.validateProjectName(e),
                    gt({
                        apiType: "instance",
                        type: "get",
                        name: e,
                        defaultCookieInterceptLevel: null === (t = this.options) || void 0 === t ? void 0 : t.cookieInterceptLevel,
                        defaultCookieInterceptMaxAge: null === (r = this.options) || void 0 === r ? void 0 : r.cookieInterceptMaxAge
                    }))) {
                        if (bt) {
                            var a, u, s = null === ht || void 0 === ht || null === (a = ht.ssrUtils) || void 0 === a || null === (u = a.cookies) || void 0 === u ? void 0 : u.get(e);
                            return s ? rt(s, {
                                enableXssPurify: this.enableXssPurify,
                                mode: this.mode
                            }, (function(e) {
                                return e
                            }
                            )) : s
                        }
                        if (!yt) {
                            var l = document.cookie || "";
                            if (e) {
                                if (e in kt.cacheMap && l === kt.cachedCookie)
                                    return kt.cacheMap[e]
                            } else if (kt.cacheCookieFullObj && l === kt.cachedCookie)
                                return kt.cacheCookieFullObj;
                            if (!e) {
                                var f = l ? l.split("; ") : []
                                  , p = {};
                                return f.forEach((function(e) {
                                    var t = e.indexOf("=");
                                    if (-1 !== t) {
                                        var r = e.substring(0, t)
                                          , o = e.substring(t + 1);
                                        try {
                                            var i = decodeURIComponent(r)
                                              , a = rt(n.converter.get(o, i), {
                                                enableXssPurify: n.enableXssPurify,
                                                mode: n.mode
                                            }, (function(e) {
                                                return e
                                            }
                                            ));
                                            p[i] = a
                                        } catch (Ot) {}
                                    }
                                }
                                )),
                                kt = {
                                    cachedCookie: l,
                                    cacheMap: c({}, p),
                                    cacheCookieFullObj: p
                                },
                                p
                            }
                            var d = (l ? l.split("; ") : []).find((function(t) {
                                var r = t.indexOf("=");
                                if (-1 === r)
                                    return !1;
                                var n = t.substring(0, r);
                                try {
                                    return decodeURIComponent(n) === e
                                } catch (Ot) {
                                    return !1
                                }
                            }
                            ));
                            if (d) {
                                var v = d.indexOf("=")
                                  , g = d.substring(v + 1);
                                try {
                                    var h = rt(this.converter.get(g, e), {
                                        enableXssPurify: this.enableXssPurify,
                                        mode: this.mode
                                    }, (function(e) {
                                        return e
                                    }
                                    ));
                                    return l === kt.cachedCookie ? kt.cacheMap[e] = h : kt = {
                                        cachedCookie: l,
                                        cacheMap: i({}, e, h),
                                        cacheCookieFullObj: void 0
                                    },
                                    h
                                } catch (Ot) {}
                            }
                            l === kt.cachedCookie ? kt.cacheMap[e] = void 0 : kt = {
                                cachedCookie: l,
                                cacheMap: i({}, e, void 0),
                                cacheCookieFullObj: void 0
                            }
                        }
                    }
                }
            }, {
                key: "setApi",
                value: function(e, t, r) {
                    var n, o, i = this, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        disableOkGlobal: !0
                    };
                    if (!yt) {
                        null !== a && void 0 !== a && a.disableOkGlobal && this.validateProjectName(e);
                        var u = gt({
                            apiType: "instance",
                            type: "set",
                            name: e,
                            defaultCookieInterceptLevel: null === (n = this.options) || void 0 === n ? void 0 : n.cookieInterceptLevel,
                            defaultCookieInterceptMaxAge: null === (o = this.options) || void 0 === o ? void 0 : o.cookieInterceptMaxAge
                        });
                        if (u) {
                            var s, l = function(e) {
                                var t = !1;
                                return pt && e && Object.keys(e).every((function(e) {
                                    return lt.includes(e)
                                }
                                )) && (t = !0),
                                t
                            }(r), f = c({}, r);
                            if ((f = nt({}, this.attributes, f)).expires) {
                                var p = function(e, t) {
                                    if ("number" === typeof e) {
                                        var r = 24 * e * 60 * 60
                                          , n = r;
                                        return "number" === typeof t && r > t && (n = t),
                                        new Date(Date.now() + 1e3 * n)
                                    }
                                    if (e instanceof Date) {
                                        var o = e;
                                        if ("number" === typeof t) {
                                            var i = new Date(Date.now() + 1e3 * t);
                                            e > i && (o = i)
                                        }
                                        return o
                                    }
                                }(f.expires, u);
                                p && (f.expires = p.toUTCString())
                            }
                            s = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, encodeURIComponent);
                            var d = "";
                            return Object.keys(f).forEach((function(e) {
                                f[e] && (d += "; ".concat(e),
                                !0 !== f[e] && ("number" === typeof f[e] && (f[e] = String(f[e])),
                                d += "=".concat(String(f[e]).split(";")[0])))
                            }
                            )),
                            rt(t, {
                                enableXssPurify: this.enableXssPurify,
                                mode: this.mode
                            }, (function(e) {
                                var t, r;
                                if (l)
                                    return null === ht || void 0 === ht || null === (t = ht.ssrUtils) || void 0 === t || null === (r = t.cookies) || void 0 === r ? void 0 : r.set(s, e, f);
                                var n = "".concat(s, "=").concat(i.converter.set(e, s)).concat(d);
                                return document.cookie = n,
                                kt = {
                                    cacheMap: {}
                                },
                                n
                            }
                            ))
                        }
                    }
                }
            }, {
                key: "set",
                value: function(e, t, r) {
                    return this.setApi(e, t, r)
                }
            }, {
                key: "get",
                value: function(e) {
                    return void 0 === e ? this.getApi() : this.getApi(e)
                }
            }, {
                key: "g",
                get: function() {
                    var e = this;
                    return {
                        set: function(t, r) {
                            var n, o, a;
                            if (bt)
                                return null === ht || void 0 === ht || null === (n = ht.ssrUtils) || void 0 === n || null === (o = n.cookies) || void 0 === o || null === (a = o.g) || void 0 === a ? void 0 : a.set(t, r);
                            if ("string" !== typeof t || !t)
                                return !1;
                            if ("string" !== typeof r && "number" !== typeof r)
                                return !1;
                            var c = e.getApi(wt, {
                                disableOkGlobal: !1
                            })
                              , u = {};
                            if (c && "string" === typeof c)
                                try {
                                    c = decodeURIComponent(c),
                                    u = JSON.parse(c)
                                } catch (s) {}
                            return e.setApi(wt, JSON.stringify(Object.assign(u, i({}, t, r))), {
                                expires: 1e3
                            }, {
                                disableOkGlobal: !1
                            })
                        },
                        get: function(t) {
                            var r, n, o;
                            if (bt)
                                return null === ht || void 0 === ht || null === (r = ht.ssrUtils) || void 0 === r || null === (n = r.cookies) || void 0 === n || null === (o = n.g) || void 0 === o ? void 0 : o.get(t);
                            var i = e.getApi(wt, {
                                disableOkGlobal: !1
                            });
                            try {
                                return i && "string" === typeof i ? (i = decodeURIComponent(i),
                                JSON.parse(i)[t]) : void 0
                            } catch (a) {
                                return
                            }
                        },
                        remove: function(t) {
                            if (bt) {
                                var r, n, o;
                                null === ht || void 0 === ht || null === (r = ht.ssrUtils) || void 0 === r || null === (n = r.cookies) || void 0 === n || null === (o = n.g) || void 0 === o || o.set(t, void 0)
                            } else {
                                var i = e.getApi(wt, {
                                    disableOkGlobal: !1
                                })
                                  , a = {};
                                if (i && "string" === typeof i)
                                    try {
                                        i = decodeURIComponent(i),
                                        a = JSON.parse(i)
                                    } catch (c) {}
                                a[t] && (delete a[t],
                                e.setApi(wt, JSON.stringify(a), {
                                    expires: 1e3
                                }, {
                                    disableOkGlobal: !1
                                }))
                            }
                        }
                    }
                }
            }, {
                key: "remove",
                value: function(e, t) {
                    this.set(e, "", nt({}, t, {
                        expires: -1
                    }))
                }
            }, {
                key: "withAttributes",
                value: function(t) {
                    return new e({
                        converter: this.initConverter.value,
                        attributes: nt({}, this.initAttributes.value, t)
                    })
                }
            }, {
                key: "withConverter",
                value: function(t) {
                    return new e({
                        converter: nt({}, this.initConverter.value, t),
                        attributes: this.initAttributes.value
                    })
                }
            }])
        }());
        var _t = "ok_site_info"
          , St = x()
          , At = f()
          , It = function(e) {
            return e.split("").reverse().join("")
        }
          , Ct = function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
              , t = xt.get(_t);
            if (!t)
                return e ? {} : "";
            try {
                return e ? JSON.parse(function(e) {
                    var t = It(e);
                    return At ? Buffer.from(t, "base64").toString("utf-8") : window.atob(t)
                }(t)) : t
            } catch (Ot) {}
            return {}
        }
          , Et = function(e) {
            var t = Ct();
            Object.keys(e).forEach((function(r) {
                t[r] = e[r]
            }
            ));
            var r, n, o, i = (r = JSON.stringify(t),
            It(At ? Buffer.from(r).toString("base64") : window.btoa(r)));
            At ? null === St || void 0 === St || null === (n = St.ssrUtils) || void 0 === n || null === (o = n.cookies) || void 0 === o || o.set(_t, i) : xt.set(_t, i)
        };
        const jt = _((function(e) {
            return [].concat(ne(e || []), [{
                getSiteInfo: Ct,
                setSiteInfo: Et
            }])
        }
        ));
        function Ot(e) {
            this.message = e
        }
        Ot.prototype = new Error,
        Ot.prototype.name = "InvalidCharacterError";
        var Tt = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(e) {
            var t = String(e).replace(/=+$/, "");
            if (t.length % 4 == 1)
                throw new Ot("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var r, n, o = 0, i = 0, a = ""; n = t.charAt(i++); ~n && (r = o % 4 ? 64 * r + n : n,
            o++ % 4) ? a += String.fromCharCode(255 & r >> (-2 * o & 6)) : 0)
                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
            return a
        }
        ;
        function Pt(e) {
            var t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
            case 0:
                break;
            case 2:
                t += "==";
                break;
            case 3:
                t += "=";
                break;
            default:
                throw "Illegal base64url string!"
            }
            try {
                return function(e) {
                    return decodeURIComponent(Tt(e).replace(/(.)/g, (function(e, t) {
                        var r = t.charCodeAt(0).toString(16).toUpperCase();
                        return r.length < 2 && (r = "0" + r),
                        "%" + r
                    }
                    )))
                }(t)
            } catch (e) {
                return Tt(t)
            }
        }
        function Lt(e) {
            this.message = e
        }
        Lt.prototype = new Error,
        Lt.prototype.name = "InvalidTokenError";
        const Dt = function(e, t) {
            if ("string" != typeof e)
                throw new Lt("Invalid token specified");
            var r = !0 === (t = t || {}).header ? 0 : 1;
            try {
                return JSON.parse(Pt(e.split(".")[r]))
            } catch (e) {
                throw new Lt("Invalid token specified: " + e.message)
            }
        };
        var Nt = ["/support/", "/docs/", "/docs-v5/", "/academy/"]
          , Rt = ["http", "//", "\\/", "/\\", "\\", "okx:", "chrome-extension:"]
          , Kt = /^\/[a-z]{2}(-[a-z]{2,4})?(-[a-z]{2})?(?=\/|$|[?#])/i;
        function Ut(e) {
            return !(e && "string" === typeof e && (t = e,
            !Rt.some((function(e) {
                return t.startsWith(e)
            }
            ))) && e.startsWith("/") && !e.startsWith("/\\"));
            var t
        }
        function Ft(e) {
            return "/" === new URL(e,"https://tempurl.com").pathname ? e : e.replace(/\/(?=[\\?#]|$)/, "")
        }
        function Mt(e) {
            if (!e || "string" !== typeof e)
                return e;
            try {
                var t, r, n = e, o = jt, i = o.langPath, a = void 0 === i ? "" : i, c = o.localeMap, u = void 0 === c ? {} : c, s = o.locale, l = void 0 === s ? "" : s, f = null === l || void 0 === l || null === (t = l.toLowerCase()) || void 0 === t ? void 0 : t.replace("-", "_"), p = function(e) {
                    var t = "";
                    return Object.keys(e).forEach((function(r) {
                        e[r] || (t = r)
                    }
                    )),
                    t
                }(u), d = null === (r = e.match(Kt)) || void 0 === r ? void 0 : r[0];
                if (d) {
                    var v = n.split("/").length - 1;
                    n = n.replace(d, 1 === v ? "/" : "")
                }
                return function(e) {
                    if (Ut(e))
                        return !0;
                    var t = jt.okUtilsConfig;
                    return ((void 0 === t ? {} : t).prefixLangPathFilter || Nt).some((function(t) {
                        return e.startsWith(t)
                    }
                    ))
                }(n) || !a && f !== p ? Ft(e) : Ft(n.startsWith("".concat(a, "/")) ? n : "".concat(a).concat(n))
            } catch (g) {
                return e
            }
        }
        var Bt, Vt = 864e5, zt = "_tk", qt = "token", Wt = "devId", Xt = "ok_login_type", Gt = "_tk", Jt = "devId", Ht = "_eid", $t = "login_devId", Qt = "devIdPublic", Zt = "SPE_0", Yt = "SPE_1", er = "SPE_2", tr = "SPE_3", rr = "SPE_4", nr = "SPE_5", or = "SPE_10", ir = "reqCaches", ar = {
            project: {
                id: 206,
                token: "77d51bf92a0501485bb541a2ec96517e"
            }
        }, cr = {
            ERR_CANCELED: "ERR_CANCELED",
            ERR_NETWORK: "ERR_NETWORK",
            ERR_TIMEOUT: "ERR_TIMEOUT"
        }, ur = {
            useNativeTokenInApp: !0,
            dexEnv: 0,
            isHandling401: !1
        }, sr = {
            traceId: void 0,
            privateKey: void 0,
            publicKey: void 0,
            reportedMsg: {}
        }, lr = function(e) {
            Object.assign(ur, e)
        }, fr = "token_expire_time", pr = "isLogin", dr = function() {
            if (f())
                return Boolean(xt.get(qt) && xt.get(pr));
            if (void 0 !== Bt)
                return Bt;
            var e = Boolean(xt.get(qt) && xt.get(pr));
            return Bt = e,
            e
        }, vr = function() {
            return xt.get(qt)
        }, gr = function() {
            var e = l(u().mark((function e() {
                var t, r;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (null !== (t = window.jsbridge) && void 0 !== t && t.getToken) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", void 0);
                        case 3:
                            return e.prev = 3,
                            e.next = 6,
                            t.getToken();
                        case 6:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 10:
                            return e.prev = 10,
                            e.t0 = e.catch(3),
                            e.abrupt("return", void 0);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 10]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }(), hr = function() {
            var e = l(u().mark((function e() {
                var t, r, n = arguments;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.length > 0 && void 0 !== n[0] ? n[0] : ur,
                            !jt.isApp || !t.useNativeTokenInApp) {
                                e.next = 6;
                                break
                            }
                            return e.next = 4,
                            gr();
                        case 4:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 6:
                            return e.abrupt("return", vr());
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }(), br = function(e) {
            try {
                return Dt(e)
            } catch (t) {
                return {
                    exp: 0
                }
            }
        }, yr = function(e) {
            var t, r, n = e ? br(e).eid : void 0, o = (null === (t = jt.getSiteInfo) || void 0 === t || null === (r = t.call(jt)) || void 0 === r ? void 0 : r.entity) || "";
            n && n !== o && (jt.setSiteInfo && jt.setSiteInfo({
                entity: n
            }),
            localStorage.setItem(Ht, n))
        }, mr = function() {
            var e = vr();
            yr(e)
        }, wr = function() {
            var e = l(u().mark((function e() {
                var t;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            gr();
                        case 2:
                            t = e.sent,
                            yr(t);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }(), kr = function(e) {
            if (!jt.isApp) {
                var t = "object" === typeof e ? e : {
                    token: e
                }
                  , r = t.tk
                  , n = t.token
                  , o = t.expireTime
                  , i = function(e) {
                    var t = e.token
                      , r = e.expireTime
                      , n = void 0 === r ? 0 : r
                      , o = Date.now()
                      , i = 6048e5;
                    if (n > o)
                        localStorage.setItem(fr, String(n)),
                        i = n - o;
                    else if (t) {
                        var a = 1e3 * br(t).exp;
                        localStorage.setItem(fr, String(a)),
                        i = a - o
                    }
                    return i / Vt
                }({
                    token: n,
                    expireTime: void 0 === o ? 0 : o
                });
                n && (!function(e) {
                    var t = e.token
                      , r = e.expireTime;
                    xt.set(qt, t, {
                        expires: r
                    }),
                    xt.set(pr, "1", {
                        expires: r
                    })
                }({
                    token: n,
                    expireTime: i
                }),
                yr(n)),
                function(e) {
                    var t = e.tk
                      , r = e.expireTime
                      , n = t || xt.get(zt);
                    xt.set(zt, n, {
                        expires: r
                    }),
                    localStorage.setItem(Gt, n)
                }({
                    tk: r,
                    expireTime: i
                }),
                function(e) {
                    var t, r = function() {
                        var e = window.location.hostname.split(".");
                        return e.length > 2 ? e.slice(-2).join(".") : window.location.hostname
                    }();
                    xt.set(Xt, null === jt || void 0 === jt || null === (t = jt.site) || void 0 === t ? void 0 : t.subSite, {
                        expires: e,
                        domain: ".".concat(r)
                    })
                }(i),
                Bt = !0
            }
        }, xr = function() {
            localStorage.removeItem(Ht),
            xt.remove(qt),
            xt.remove(zt),
            localStorage.removeItem(Gt),
            localStorage.removeItem(fr),
            xt.remove(pr),
            ee.session.remove(ir),
            Bt = !1
        }, _r = function() {
            var e = window.jsbridge;
            return jt.isApp && null !== e && void 0 !== e && e.isLogin ? e.isLogin() : Promise.resolve(dr())
        }, Sr = function() {
            var e, t;
            if (null !== jt && void 0 !== jt && null !== (e = jt.site) && void 0 !== e && null !== (t = e.is) && void 0 !== t && t.oklink || !jt.isApp) {
                var r = window.location
                  , n = r.pathname
                  , o = r.search
                  , i = r.hash
                  , a = encodeURIComponent("".concat(n).concat(o).concat(i));
                r.href = et(Mt("/account/login?logout=true&forward=".concat(a)))
            }
        };
        function Ar(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, i, a, c = [], u = !0, s = !1;
                    try {
                        if (i = (r = r.call(e)).next,
                        0 === t) {
                            if (Object(r) !== r)
                                return;
                            u = !1
                        } else
                            for (; !(u = (n = i.call(r)).done) && (c.push(n.value),
                            c.length !== t); u = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            if (!u && null != r.return && (a = r.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return c
                }
            }(e, t) || re(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Ir, Cr = "5.8.10", Er = function(e) {
            if ("undefined" === typeof window || "function" !== typeof window.btoa)
                throw new Error("toSuperBase: window.btoa is not available in this environment");
            return function(e) {
                for (var t = e.length; t > 0 && "=" === e[t - 1]; )
                    t--;
                return e.slice(0, t)
            }(window.btoa(e)).split("").map((function(e, t) {
                var r = t % 2 === 0;
                if (/\d/.test(e))
                    return r ? e : String(9 - Number(e));
                if (/[a-z]/i.test(e) && r) {
                    var n = e.charCodeAt(0)
                      , o = n >= 97 ? n - 32 : n + 32;
                    return String.fromCharCode(o)
                }
                return e
            }
            )).join("")
        }, jr = function(e) {
            var t = e.msg
              , r = e.errInfo
              , n = void 0 === r ? {} : r
              , o = e.extra;
            try {
                sr.reportedMsg[t] || (ut.info("".concat(Cr, ": ").concat(t), c(c({}, function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (e instanceof Error) {
                        var t = e;
                        return {
                            name: t.name,
                            code: t.code,
                            message: t.message,
                            stack: t.stack,
                            detail: t.detail
                        }
                    }
                    return "string" === typeof e ? {
                        errInfo: e
                    } : e
                }(n)), {}, {
                    customConfig: ar,
                    extra: o
                })),
                sr.reportedMsg[t] = !0)
            } catch (i) {
                console.error("".concat(Cr, ": sendSentryLog error:"), i)
            }
        }, Or = {
            setUPid: function() {
                var e = window.location;
                if (/^(\/[a-z]{2})?\/account/.test(e.pathname)) {
                    var t = Er(e.host);
                    xt.set("u_pid", t)
                }
            }
        }, Tr = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i, a, c, s, f, p, d, v, g;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = t.url,
                            n = t.fetchConfig,
                            o = t.timestampForTest,
                            i = t.tokenForTest,
                            a = function() {
                                return crypto.randomUUID ? crypto.randomUUID() : (new Date).getTime()
                            }
                            ,
                            c = function() {
                                var e = l(u().mark((function e(t) {
                                    var r, n, i, a, c, s, l, f, p, d, v;
                                    return u().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return r = "",
                                                e.next = 3,
                                                crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t));
                                            case 3:
                                                for (n = e.sent,
                                                i = Array.from(new Uint8Array(n)),
                                                a = i.map((function(e) {
                                                    return e.toString(16).padStart(2, "0")
                                                }
                                                )).join(""),
                                                c = Date.now(),
                                                s = o || Math.floor(c / 1e3),
                                                l = Math.floor(s / 600 % 32),
                                                f = Math.floor(s / 3600 % 32),
                                                p = 0; p < 32; p++)
                                                    d = a[(l + (f + p) * p) % 32],
                                                    r += d;
                                                return e.next = 13,
                                                crypto.subtle.importKey("raw", (new TextEncoder).encode(r), {
                                                    name: "HMAC",
                                                    hash: "SHA-256"
                                                }, !1, ["sign"]);
                                            case 13:
                                                return v = e.sent,
                                                e.abrupt("return", {
                                                    key: v,
                                                    timestamp: c
                                                });
                                            case 15:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            s = function() {
                                var e = r.replace("?", "");
                                if (["POST", "PUT"].includes(n.method)) {
                                    var t = r.split("?")[0]
                                      , o = n.body;
                                    if (o instanceof FormData) {
                                        var i = Array.from(o.entries()).map((function(e) {
                                            var t = Ar(e, 2)
                                              , r = t[0]
                                              , n = t[1];
                                            return "".concat(r, "=").concat(n)
                                        }
                                        )).join(",");
                                        e = "".concat(t, "{").concat(i, "}")
                                    } else
                                        e = "".concat(t).concat(n.body)
                                }
                                return e
                            }
                            ,
                            f = function() {
                                var e = l(u().mark((function e(t) {
                                    var r, n, o, i, a, l;
                                    return u().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                c(t);
                                            case 2:
                                                return r = e.sent,
                                                n = r.key,
                                                o = r.timestamp,
                                                i = s(),
                                                e.next = 8,
                                                crypto.subtle.sign("HMAC", n, (new TextEncoder).encode(i));
                                            case 8:
                                                return a = e.sent,
                                                l = btoa(String.fromCharCode.apply(String, ne(new Uint8Array(a)))),
                                                e.abrupt("return", {
                                                    signature: l,
                                                    timestamp: o
                                                });
                                            case 11:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            p = i || a(),
                            e.next = 8,
                            f(p);
                        case 8:
                            return d = e.sent,
                            v = d.timestamp,
                            g = d.signature,
                            e.abrupt("return", {
                                token: p,
                                timestamp: v,
                                signature: g
                            });
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), Pr = {
            getTokenAndSign: Tr
        }, Lr = new Array(128).fill(void 0);
        function Dr(e) {
            return Lr[e]
        }
        Lr.push(void 0, null, !0, !1);
        var Nr = Lr.length;
        function Rr(e) {
            var t = Dr(e);
            return function(e) {
                e < 132 || (Lr[e] = Nr,
                Nr = e)
            }(e),
            t
        }
        var Kr = "undefined" !== typeof TextDecoder ? new TextDecoder("utf-8",{
            ignoreBOM: !0,
            fatal: !0
        }) : {
            decode: function() {
                throw Error("TextDecoder not available")
            }
        };
        "undefined" !== typeof TextDecoder && Kr.decode();
        var Ur = null;
        function Fr() {
            return null !== Ur && 0 !== Ur.byteLength || (Ur = new Uint8Array(Ir.memory.buffer)),
            Ur
        }
        function Mr(e, t) {
            return e >>>= 0,
            Kr.decode(Fr().subarray(e, e + t))
        }
        function Br(e) {
            Nr === Lr.length && Lr.push(Lr.length + 1);
            var t = Nr;
            return Nr = Lr[t],
            Lr[t] = e,
            t
        }
        var Vr = 0
          , zr = "undefined" !== typeof TextEncoder ? new TextEncoder("utf-8") : {
            encode: function() {
                throw Error("TextEncoder not available")
            }
        }
          , qr = "function" === typeof zr.encodeInto ? function(e, t) {
            return zr.encodeInto(e, t)
        }
        : function(e, t) {
            var r = zr.encode(e);
            return t.set(r),
            {
                read: e.length,
                written: r.length
            }
        }
        ;
        function Wr(e, t, r) {
            if (void 0 === r) {
                var n = zr.encode(e)
                  , o = t(n.length, 1) >>> 0;
                return Fr().subarray(o, o + n.length).set(n),
                Vr = n.length,
                o
            }
            for (var i = e.length, a = t(i, 1) >>> 0, c = Fr(), u = 0; u < i; u++) {
                var s = e.charCodeAt(u);
                if (s > 127)
                    break;
                c[a + u] = s
            }
            if (u !== i) {
                0 !== u && (e = e.slice(u)),
                a = r(a, i, i = u + 3 * e.length, 1) >>> 0;
                var l = Fr().subarray(a + u, a + i);
                a = r(a, i, u += qr(e, l).written, 1) >>> 0
            }
            return Vr = u,
            a
        }
        var Xr = null;
        function Gr() {
            return null !== Xr && 0 !== Xr.byteLength || (Xr = new Int32Array(Ir.memory.buffer)),
            Xr
        }
        function Jr(e) {
            var t = typeof e;
            if ("number" == t || "boolean" == t || null == e)
                return "".concat(e);
            if ("string" == t)
                return '"'.concat(e, '"');
            if ("symbol" == t) {
                var r = e.description;
                return null == r ? "Symbol" : "Symbol(".concat(r, ")")
            }
            if ("function" == t) {
                var n = e.name;
                return "string" == typeof n && n.length > 0 ? "Function(".concat(n, ")") : "Function"
            }
            if (Array.isArray(e)) {
                var o = e.length
                  , i = "[";
                o > 0 && (i += Jr(e[0]));
                for (var a = 1; a < o; a++)
                    i += ", " + Jr(e[a]);
                return i += "]"
            }
            var c, u = /\[object ([^\]]+)\]/.exec(toString.call(e));
            if (!(u.length > 1))
                return toString.call(e);
            if ("Object" == (c = u[1]))
                try {
                    return "Object(" + JSON.stringify(e) + ")"
                } catch (s) {
                    return "Object"
                }
            return e instanceof Error ? "".concat(e.name, ": ").concat(e.message, "\n").concat(e.stack) : c
        }
        var Hr = "undefined" === typeof FinalizationRegistry ? {
            register: function() {},
            unregister: function() {}
        } : new FinalizationRegistry((function(e) {
            Ir.__wbindgen_export_2.get(e.dtor)(e.a, e.b)
        }
        ));
        function $r(e, t, r) {
            Ir.wasm_bindgen__convert__closures__invoke1_mut__he81b0e579a5d8e82(e, t, Br(r))
        }
        function Qr(e, t) {
            try {
                return e.apply(this, t)
            } catch (Ot) {
                Ir.__wbindgen_exn_store(Br(Ot))
            }
        }
        function Zr(e, t) {
            return Yr.apply(this, arguments)
        }
        function Yr() {
            return (Yr = l(u().mark((function e(t, r) {
                var n, o, i, a, c, s, l, f, p, d, v, g, h, b, y, m, w, k, x, _;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = typeof t,
                            o = t && t.byteLength ? t.byteLength : "N/A",
                            i = t instanceof ArrayBuffer,
                            a = ArrayBuffer.isView(t),
                            c = t instanceof WebAssembly.Module,
                            !("function" === typeof Response && t instanceof Response)) {
                                e.next = 47;
                                break
                            }
                            if (e.prev = 6,
                            "function" !== typeof WebAssembly.instantiateStreaming) {
                                e.next = 11;
                                break
                            }
                            return e.next = 10,
                            WebAssembly.instantiateStreaming(t, r);
                        case 10:
                        case 13:
                            return e.abrupt("return", e.sent);
                        case 11:
                            return e.next = 13,
                            WebAssembly.instantiate(s, r);
                        case 16:
                            return e.prev = 16,
                            e.t0 = e.catch(6),
                            e.next = 20,
                            t.arrayBuffer();
                        case 20:
                            throw s = e.sent,
                            l = t.headers.get("content-length"),
                            f = t.headers.get("transfer-encoding"),
                            p = t.headers.get("content-encoding"),
                            h = t.headers.get("content-type"),
                            d = t.headers.get("via"),
                            v = t.headers.get("accept-encoding"),
                            g = new Uint8Array(s.slice(0, 8)).toString(),
                            b = t.headers ? ne(t.headers.entries()).slice(0, 20).toString() : null,
                            y = t.headers.get("rayid"),
                            m = t.headers.get("eagleid"),
                            w = t.headers.get("x-amz-cf-id"),
                            console.error("WebAssembly.instantiateStreaming error:", e.t0),
                            console.error("Content-Length:", l),
                            console.error("Transfer-Encoding:", f),
                            console.error("Content-Encoding:", p),
                            console.error("Content-Type:", h),
                            console.error("Via:", d),
                            console.error("Headers:", b),
                            console.error("Accept-Encoding:", v),
                            console.error("First 4 bytes of arrayBuffer:", g),
                            console.error("rayid:", y),
                            console.error("eagleid:", m),
                            console.error("xAmzCfId:", w),
                            {
                                e: JSON.stringify(e.t0),
                                bytes: s,
                                contentLength: l,
                                transferEncoding: f,
                                contentEncoding: p,
                                via: d,
                                acceptEncoding: v,
                                expectedMagicNumber: g,
                                imports: r,
                                moduleType: n,
                                moduleSize: o,
                                isArrayBuffer: i,
                                isTypedArray: a,
                                isWebAssemblyModule: c,
                                message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                stack: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack,
                                messageSource: "WebAssembly.instantiateStreaming error",
                                contentType: h,
                                headers: b,
                                rayid: y,
                                eagleid: m,
                                xAmzCfId: w
                            };
                        case 45:
                        case 56:
                            e.next = 70;
                            break;
                        case 47:
                            return e.prev = 47,
                            e.next = 50,
                            WebAssembly.instantiate(t, r);
                        case 50:
                            if (!((k = e.sent)instanceof WebAssembly.Instance)) {
                                e.next = 55;
                                break
                            }
                            return e.abrupt("return", {
                                instance: k,
                                module: t
                            });
                        case 55:
                            return e.abrupt("return", k);
                        case 58:
                            throw e.prev = 58,
                            e.t1 = e.catch(47),
                            x = null,
                            (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) && (_ = t instanceof ArrayBuffer ? t : t.buffer,
                            x = new Uint8Array(_.slice(0, 8)).toString()),
                            console.error("WebAssembly.instantiate error:", e.t1),
                            console.error("Module type:", n),
                            console.error("Module size:", o),
                            console.error("Is ArrayBuffer:", i),
                            console.error("Is TypedArray:", a),
                            console.error("Is WebAssembly.Module:", c),
                            console.error("First 4 bytes of arrayBuffer:", x),
                            {
                                e: JSON.stringify(e.t1),
                                imports: r,
                                moduleType: n,
                                moduleSize: o,
                                isArrayBuffer: i,
                                isTypedArray: a,
                                isWebAssemblyModule: c,
                                expectedMagicNumber: x,
                                message: null === e.t1 || void 0 === e.t1 ? void 0 : e.t1.message,
                                stack: null === e.t1 || void 0 === e.t1 ? void 0 : e.t1.stack,
                                messageSource: "WebAssembly.instantiate error"
                            };
                        case 70:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[6, 16], [47, 58]])
            }
            )))).apply(this, arguments)
        }
        function en() {
            var e, t = {};
            return t.wbg = {},
            t.wbg.__wbindgen_object_drop_ref = function(e) {
                Rr(e)
            }
            ,
            t.wbg.__wbindgen_is_object = function(e) {
                var t = Dr(e);
                return "object" === typeof t && null !== t
            }
            ,
            t.wbg.__wbindgen_is_string = function(e) {
                return "string" === typeof Dr(e)
            }
            ,
            t.wbg.__wbindgen_string_new = function(e, t) {
                return Br(Mr(e, t))
            }
            ,
            t.wbg.__wbindgen_string_get = function(e, t) {
                var r, n = Dr(t), o = "string" === typeof n ? n : void 0, i = void 0 === (r = o) || null === r ? 0 : Wr(o, Ir.__wbindgen_malloc, Ir.__wbindgen_realloc), a = Vr;
                Gr()[e / 4 + 1] = a,
                Gr()[e / 4 + 0] = i
            }
            ,
            t.wbg.__wbg_log_3616ebb275cffd6f = function(e, t) {
                Mr(e, t)
            }
            ,
            t.wbg.__wbg_getZ2FN_1fcb562cc3a76c0c = function() {
                return Br(window.utils.ont.crypto.getZ2FN())
            }
            ,
            t.wbg.__wbg_getJDD_a23f6fe0ec8619f4 = function() {
                return Br(window.utils.ont.crypto.getJDD())
            }
            ,
            t.wbg.__wbg_getZ2FL_2d22b1fa9817a0d4 = function(e, t, r) {
                var n, o;
                try {
                    n = t,
                    o = r;
                    var i = Wr(window.utils.ont.crypto.getZ2FL(Mr(t, r)), Ir.__wbindgen_malloc, Ir.__wbindgen_realloc)
                      , a = Vr;
                    Gr()[e / 4 + 1] = a,
                    Gr()[e / 4 + 0] = i
                } finally {
                    Ir.__wbindgen_free(n, o, 1)
                }
            }
            ,
            t.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6 = function(e) {
                return Br(Dr(e).queueMicrotask)
            }
            ,
            t.wbg.__wbindgen_is_function = function(e) {
                return "function" === typeof Dr(e)
            }
            ,
            t.wbg.__wbindgen_cb_drop = function(e) {
                var t = Rr(e).original;
                if (1 == t.cnt--)
                    return t.a = 0,
                    !0;
                return !1
            }
            ,
            t.wbg.__wbg_queueMicrotask_481971b0d87f3dd4 = function(e) {
                queueMicrotask(Dr(e))
            }
            ,
            t.wbg.__wbg_newnoargs_e258087cd0daa0ea = function(e, t) {
                return Br(new Function(Mr(e, t)))
            }
            ,
            t.wbg.__wbg_get_e3c254076557e348 = function() {
                return Qr((function(e, t) {
                    return Br(Reflect.get(Dr(e), Dr(t)))
                }
                ), arguments)
            }
            ,
            t.wbg.__wbg_call_27c0f87801dedf93 = function() {
                return Qr((function(e, t) {
                    return Br(Dr(e).call(Dr(t)))
                }
                ), arguments)
            }
            ,
            t.wbg.__wbg_new_72fb9a18b5ae2624 = function() {
                return Br(new Object)
            }
            ,
            t.wbg.__wbg_self_ce0dbfc45cf2f5be = function() {
                return Qr((function() {
                    return Br(self.self)
                }
                ), arguments)
            }
            ,
            t.wbg.__wbg_window_c6fb939a7f436783 = function() {
                return Qr((function() {
                    return Br(window.window)
                }
                ), arguments)
            }
            ,
            t.wbg.__wbg_globalThis_d1e6af4856ba331b = function() {
                return Qr((function() {
                    return Br(globalThis.globalThis)
                }
                ), arguments)
            }
            ,
            t.wbg.__wbg_global_207b558942527489 = function() {
                return Qr((function() {
                    return Br(r.g.global)
                }
                ), arguments)
            }
            ,
            t.wbg.__wbindgen_is_undefined = function(e) {
                return void 0 === Dr(e)
            }
            ,
            t.wbg.__wbg_call_b3ca7c6051f9bec1 = function() {
                return Qr((function(e, t, r) {
                    return Br(Dr(e).call(Dr(t), Dr(r)))
                }
                ), arguments)
            }
            ,
            t.wbg.__wbg_now_3014639a94423537 = function() {
                return Date.now()
            }
            ,
            t.wbg.__wbg_new_81740750da40724f = function(e, t) {
                try {
                    var r = {
                        a: e,
                        b: t
                    }
                      , n = new Promise((function(e, t) {
                        var n = r.a;
                        r.a = 0;
                        try {
                            return function(e, t, r, n) {
                                Ir.wasm_bindgen__convert__closures__invoke2_mut__h5cf7ebf0b823f44e(e, t, Br(r), Br(n))
                            }(n, r.b, e, t)
                        } finally {
                            r.a = n
                        }
                    }
                    ));
                    return Br(n)
                } finally {
                    r.a = r.b = 0
                }
            }
            ,
            t.wbg.__wbg_resolve_b0083a7967828ec8 = function(e) {
                return Br(Promise.resolve(Dr(e)))
            }
            ,
            t.wbg.__wbg_then_0c86a60e8fcfe9f6 = function(e, t) {
                return Br(Dr(e).then(Dr(t)))
            }
            ,
            t.wbg.__wbg_then_a73caa9a87991566 = function(e, t, r) {
                return Br(Dr(e).then(Dr(t), Dr(r)))
            }
            ,
            t.wbg.__wbg_length_c20a40f15020d68a = function(e) {
                return Dr(e).length
            }
            ,
            t.wbg.__wbg_newwithlength_e9b4878cebadb3d3 = function(e) {
                return Br(new Uint8Array(e >>> 0))
            }
            ,
            t.wbg.__wbg_getindex_03d06b4e7ea3475e = function(e, t) {
                return Dr(e)[t >>> 0]
            }
            ,
            t.wbg.__wbg_setindex_0b7ede192dc5eca8 = function(e, t, r) {
                Dr(e)[t >>> 0] = r
            }
            ,
            t.wbg.__wbg_set_1f9b04f170055d33 = function() {
                return Qr((function(e, t, r) {
                    return Reflect.set(Dr(e), Dr(t), Dr(r))
                }
                ), arguments)
            }
            ,
            t.wbg.__wbg_random_26e2d782b541ca6b = "function" == typeof Math.random ? Math.random : (e = "Math.random",
            function() {
                throw new Error("".concat(e, " is not defined"))
            }
            ),
            t.wbg.__wbindgen_object_clone_ref = function(e) {
                return Br(Dr(e))
            }
            ,
            t.wbg.__wbindgen_debug_string = function(e, t) {
                var r = Wr(Jr(Dr(t)), Ir.__wbindgen_malloc, Ir.__wbindgen_realloc)
                  , n = Vr;
                Gr()[e / 4 + 1] = n,
                Gr()[e / 4 + 0] = r
            }
            ,
            t.wbg.__wbindgen_throw = function(e, t) {
                throw new Error(Mr(e, t))
            }
            ,
            t.wbg.__wbindgen_closure_wrapper176 = function(e, t, r) {
                var n = function(e, t, r, n) {
                    var o = {
                        a: e,
                        b: t,
                        cnt: 1,
                        dtor: r
                    }
                      , i = function() {
                        o.cnt++;
                        var e = o.a;
                        o.a = 0;
                        try {
                            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
                                r[i] = arguments[i];
                            return n.apply(void 0, [e, o.b].concat(r))
                        } finally {
                            0 === --o.cnt ? (Ir.__wbindgen_export_2.get(o.dtor)(e, o.b),
                            Hr.unregister(o)) : o.a = e
                        }
                    };
                    return i.original = o,
                    Hr.register(i, o, o),
                    i
                }(e, t, 45, $r);
                return Br(n)
            }
            ,
            t
        }
        function tn(e, t) {
            return Ir = e.exports,
            rn.__wbindgen_wasm_module = t,
            Xr = null,
            Ur = null,
            Ir
        }
        function rn(e) {
            return nn.apply(this, arguments)
        }
        function nn() {
            return nn = l(u().mark((function e(t) {
                var n, o, i, a, s, l, f, p;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (void 0 === Ir) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", Ir);
                        case 2:
                            if ("undefined" === typeof t && (t = new URL(r(363),r.b)),
                            n = en(),
                            !("string" === typeof t || "function" === typeof Request && t instanceof Request || "function" === typeof URL && t instanceof URL)) {
                                e.next = 15;
                                break
                            }
                            e.prev = 5,
                            o = t,
                            i = new Headers({
                                "Accept-Encoding": "br",
                                "Content-Type": "application/wasm"
                            }),
                            t = fetch(t, {
                                headers: i
                            }).catch((function(e) {
                                var t, r, n = navigator.onLine;
                                throw console.error("Fetch error:", e),
                                console.error("Link:", o),
                                console.error("isOnline:", n),
                                {
                                    e: JSON.stringify(e),
                                    link: o,
                                    origin: null === (t = window) || void 0 === t || null === (r = t.location) || void 0 === r ? void 0 : r.origin,
                                    message: null === e || void 0 === e ? void 0 : e.message,
                                    stack: null === e || void 0 === e ? void 0 : e.stack,
                                    messageSource: "Failed to fetch the WebAssembly module",
                                    isOnline: n
                                }
                            }
                            )),
                            e.next = 15;
                            break;
                        case 11:
                            throw e.prev = 11,
                            e.t0 = e.catch(5),
                            a = navigator.onLine,
                            {
                                e: JSON.stringify(e.t0),
                                link: o,
                                message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                stack: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack,
                                messageSource: "Failed to setup fetch for the WebAssembly module",
                                isOnline: a
                            };
                        case 15:
                            return e.prev = 16,
                            e.t1 = Zr,
                            e.next = 20,
                            t;
                        case 20:
                            return e.t2 = e.sent,
                            e.t3 = n,
                            e.next = 24,
                            (0,
                            e.t1)(e.t2, e.t3);
                        case 24:
                            return s = e.sent,
                            l = s.instance,
                            f = s.module,
                            e.abrupt("return", tn(l, f));
                        case 30:
                            throw e.prev = 30,
                            e.t4 = e.catch(16),
                            console.error("WebAssembly load error:", e.t4),
                            console.error("Input type:", typeof t),
                            console.error("Input URL:", o),
                            p = navigator.onLine,
                            c(c({}, {
                                name: e.t4.name,
                                message: e.t4.message,
                                stack: e.t4.stack,
                                fileName: e.t4.fileName,
                                lineNumber: e.t4.lineNumber,
                                columnNumber: e.t4.columnNumber,
                                inputType: typeof t,
                                inputURL: o,
                                isOnline: p,
                                messageSource: "WebAssembly load error"
                            }), {}, {
                                e: JSON.stringify(e.t4, Object.getOwnPropertyNames(e.t4))
                            });
                        case 38:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[5, 11], [16, 30]])
            }
            ))),
            nn.apply(this, arguments)
        }
        const on = rn;
        var an = null;
        function cn() {
            return un.apply(this, arguments)
        }
        function un() {
            return (un = l(u().mark((function e() {
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return an || (an = on()),
                            e.next = 3,
                            an;
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function sn(e) {
            return ln.apply(this, arguments)
        }
        function ln() {
            return (ln = l(u().mark((function e(t) {
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            cn();
                        case 2:
                            return e.abrupt("return", (r = t,
                            Rr(Ir.get_fingerprint(Br(r)))));
                        case 3:
                        case "end":
                            return e.stop()
                        }
                    var r
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function fn(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return fn = function(e) {
                if (null === e || !function(e) {
                    try {
                        return -1 !== Function.toString.call(e).indexOf("[native code]")
                    } catch (Lt) {
                        return "function" == typeof e
                    }
                }(e))
                    return e;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e))
                        return t.get(e);
                    t.set(e, r)
                }
                function r() {
                    return function(e, t, r) {
                        if (h())
                            return Reflect.construct.apply(null, arguments);
                        var n = [null];
                        n.push.apply(n, t);
                        var o = new (e.bind.apply(e, n));
                        return r && m(o, r.prototype),
                        o
                    }(e, arguments, g(this).constructor)
                }
                return r.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                m(r, e)
            }
            ,
            fn(e)
        }
        var pn = function(e) {
            function t(e, r) {
                var n;
                return p(this, t),
                (n = y(this, t, [e])).detail = void 0,
                n.name = n.constructor.name,
                n.detail = r,
                Error.captureStackTrace && Error.captureStackTrace(n, n.constructor),
                jr({
                    msg: e,
                    errInfo: n
                }),
                n
            }
            return w(t, e),
            v(t)
        }(fn(Error))
          , dn = function(e) {
            var t = String.fromCharCode.apply(String, ne(new Uint8Array(e)));
            return btoa(t)
        }
          , vn = function(e) {
            for (var t = atob(e), r = new ArrayBuffer(t.length), n = new Uint8Array(r), o = 0, i = t.length; o < i; o++)
                n[o] = t.charCodeAt(o);
            return r
        }
          , gn = {
            name: "ECDSA",
            namedCurve: "P-256"
        };
        const hn = {
            ECDSA_CONFIG: gn,
            generateKeyPair: function() {
                var e = l(u().mark((function e() {
                    var t, r, n, o, i;
                    return u().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                crypto.subtle.generateKey(gn, !0, ["sign", "verify"]);
                            case 3:
                                return t = e.sent,
                                e.next = 6,
                                crypto.subtle.exportKey("spki", t.publicKey);
                            case 6:
                                return r = e.sent,
                                n = dn(r),
                                e.next = 10,
                                crypto.subtle.exportKey("pkcs8", t.privateKey);
                            case 10:
                                return o = e.sent,
                                i = dn(o),
                                e.abrupt("return", {
                                    privateKey: i,
                                    publicKey: n
                                });
                            case 15:
                                throw e.prev = 15,
                                e.t0 = e.catch(0),
                                new pn({
                                    msg: "common.generateKeyPair"
                                });
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 15]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            getSignature: function() {
                var e = l(u().mark((function e(t) {
                    var r, n, o;
                    return u().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = t.content,
                                n = t.privateKey,
                                e.prev = 1,
                                e.next = 4,
                                crypto.subtle.sign({
                                    name: "ECDSA",
                                    hash: {
                                        name: "SHA-256"
                                    }
                                }, n, (new TextEncoder).encode(r));
                            case 4:
                                return o = e.sent,
                                e.abrupt("return", "{P1363}".concat(dn(o)));
                            case 8:
                                throw e.prev = 8,
                                e.t0 = e.catch(1),
                                new pn("common.getSi",{
                                    priKey: n
                                });
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 8]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        };
        r(198),
        r(817);
        var bn = x();
        var yn = x()
          , mn = "object" === typeof r.g && null !== r.g && r.g.Object === Object && r.g
          , wn = "object" === typeof yn && null !== yn && yn.Object === Object && yn
          , kn = "object" === typeof self && null !== self && self.Object === Object && self;
        wn || mn || kn || Function("return this")();
        function xn(e, t, r) {
            var n, o, i = jt || {}, a = i.locale, u = i.ipRegion, s = i.envSign, l = i.langPath, p = i.userAgent, d = i.site;
            !function(e, t) {
                var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "i18n", o = !f() && (null === bn || void 0 === bn || null === (r = bn.location) || void 0 === r ? void 0 : r.pathname) || "", i = "".concat(n, " -- ").concat(o ? "".concat(e, " -- ").concat(o) : e);
                t && (i = "".concat(i, " -- ").concat(t));
                var a = "object" === typeof t
                  , u = "object" === typeof t && null !== t && void 0 !== t && t.devid ? t.devid : !f() && void 0 !== typeof localStorage && localStorage.devid || ""
                  , s = a ? c(c({}, t), {}, {
                    devid: u
                }) : {
                    message: t,
                    devid: u
                };
                ut.info(i, {
                    message: s,
                    customConfig: {
                        error: {
                            type: e
                        },
                        project: {
                            id: 243,
                            token: "2b65098fbd898b1419f8241753fbf146"
                        }
                    }
                })
            }(e, {
                project: null === (n = yn.__INIT_STATE__) || void 0 === n || null === (o = n.appContext) || void 0 === o ? void 0 : o.project,
                locale: a,
                ipRegion: u,
                envSign: s,
                langPath: l,
                userAgent: p,
                site: d,
                message: r
            }, t)
        }
        const _n = new (v((function e() {
            var t = this;
            p(this, e),
            this.remove = function(e, r) {
                var n = t.slist[e];
                n && r && n.forEach((function(e, t) {
                    e.id === r && n.splice(t, 1)
                }
                ))
            }
            ,
            this.listen = function(e, r, n) {
                if ("function" !== typeof r)
                    return null;
                t.slist[e] || (t.slist[e] = []);
                var o = "".concat(e).concat(t.slist[e].length);
                return t.slist[e].push({
                    id: o,
                    fn: r,
                    once: n,
                    count: 0
                }),
                {
                    id: o,
                    remove: function() {
                        t.remove(e, o)
                    }
                }
            }
            ,
            this.trigger = function(e) {
                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                    n[o - 1] = arguments[o];
                var i = t.slist[e];
                i && 0 !== i.length && i.forEach((function(r) {
                    var o = r
                      , i = o.id
                      , a = o.fn
                      , c = o.once;
                    a && (a.apply(t, n),
                    o.count++,
                    c && t.remove(e, i))
                }
                ))
            }
            ,
            this.slist = function() {
                if (f())
                    return {};
                var e = x();
                return e._global_subscribe_list || (e._global_subscribe_list = {}),
                e._global_subscribe_list
            }()
        }
        )));
        var Sn = new (function() {
            return v((function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50;
                p(this, e),
                this.cache = new Map,
                this.keysIndex = 0,
                this.keys = Array.from(new Array(t))
            }
            ), [{
                key: "delete",
                value: function(e) {
                    this.keys = this.keys.map((function(t) {
                        return t === e ? void 0 : t
                    }
                    )),
                    this.keysIndex = (this.keysIndex - 1) % this.keys.length,
                    this.cache.delete(e)
                }
            }, {
                key: "clear",
                value: function() {
                    this.cache.clear(),
                    this.keys.fill(void 0),
                    this.keysIndex = 0
                }
            }, {
                key: "get",
                value: function(e) {
                    return this.cache.get(e)
                }
            }, {
                key: "set",
                value: function(e, t) {
                    if (!this.keys.includes(e)) {
                        var r = this.keys[this.keysIndex];
                        void 0 !== r && this.cache.delete(r),
                        this.keys[this.keysIndex] = e,
                        this.keysIndex = (this.keysIndex + 1) % this.keys.length
                    }
                    this.cache.set(e, t)
                }
            }])
        }())
          , An = "ok-storagemutated"
          , In = "ok-storagemutated-1"
          , Cn = new Map;
        var En = x();
        function jn(e) {
            var t = e.data;
            t && t.type === In && _n.trigger(An, t.changedParts)
        }
        function On(e, t) {
            return Object.entries(t).every((function(t) {
                var r = Ar(t, 2)
                  , n = r[0]
                  , o = r[1];
                return function(e, t, r) {
                    if ("$in" === t && Array.isArray(r))
                        return r.includes(e);
                    if ("number" === typeof e && "number" === typeof r)
                        switch (t) {
                        case "$eq":
                            return e === r;
                        case "$ne":
                            return e !== r;
                        case "$gt":
                            return e > r;
                        case "$lt":
                            return e < r;
                        case "$gte":
                            return e >= r;
                        case "$lte":
                            return e <= r
                        }
                    throw new Error("Unsupported operator or type: ".concat(t))
                }(e, n, o)
            }
            ))
        }
        function Tn(e, t) {
            for (var r = [], n = Object.entries(t), o = 0; o < n.length; o++) {
                var i = Ar(n[o], 2)
                  , a = i[0]
                  , c = i[1];
                r.push([a, c])
            }
            return r.every((function(t) {
                var r = Ar(t, 2)
                  , n = r[0]
                  , o = r[1];
                return function(e, t, r) {
                    return "object" === typeof r ? On(e[t], r) : e[t] === r
                }(e, n, o)
            }
            ))
        }
        function Pn(e, t) {
            return e.filter((function(e) {
                return Tn(e, t)
            }
            ))
        }
        function Ln(e) {
            e.stopPropagation && e.stopPropagation(),
            e.preventDefault && e.preventDefault()
        }
        var Dn = "idb"
          , Nn = new (function() {
            return v((function e() {
                p(this, e),
                this.queue = [],
                this.isProcessing = !1
            }
            ), [{
                key: "enqueue",
                value: function() {
                    var e = l(u().mark((function e(t) {
                        var r = this;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, n) {
                                        r.queue.push({
                                            fn: t,
                                            resolve: e,
                                            reject: n
                                        }),
                                        r.isProcessing || r.processQueue()
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "processQueue",
                value: function() {
                    var e = l(u().mark((function e() {
                        var t, r, n, o, i;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== this.queue.length) {
                                        e.next = 3;
                                        break
                                    }
                                    return this.isProcessing = !1,
                                    e.abrupt("return");
                                case 3:
                                    return this.isProcessing = !0,
                                    t = this.queue.shift(),
                                    r = t.fn,
                                    n = t.resolve,
                                    o = t.reject,
                                    e.prev = 5,
                                    e.next = 8,
                                    r();
                                case 8:
                                    i = e.sent,
                                    n(i),
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(5),
                                    o(e.t0);
                                case 15:
                                    return e.next = 17,
                                    this.processQueue();
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[5, 12]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }])
        }())
          , Rn = function() {
            return v((function e(t) {
                var r = t.storeName
                  , n = t.indices
                  , o = t.options
                  , i = t.db
                  , a = t.enableCache;
                p(this, e),
                this.db = i,
                this.storeName = r,
                this.indices = null !== n && void 0 !== n ? n : [],
                this.options = o,
                this.enableCache = null === a || void 0 === a || a,
                this.storeExist = !1
            }
            ), [{
                key: "createIndex",
                value: function(e, t, r) {
                    var n;
                    if (f())
                        return !1;
                    if (!this.db.autoVersion)
                        throw new Error("Can not create index dynamically when version is set");
                    var o = {
                        indexName: e,
                        keyPath: t,
                        options: null !== r && void 0 !== r ? r : {}
                    };
                    this.db.setVersion(this.db.vero + 1);
                    var i = this.db.storesConfig[this.storeName];
                    return !!i && (null !== (n = i.indices) && void 0 !== n && n.length || (i.indices = []),
                    i.indices.push(o),
                    this.indices.push(o),
                    !0)
                }
            }, {
                key: "getPrimaryKey",
                value: function() {
                    var e, t;
                    return "string" === typeof (null === (e = this.options) || void 0 === e ? void 0 : e.keyPath) ? null === (t = this.options) || void 0 === t ? void 0 : t.keyPath : ""
                }
            }, {
                key: "performSpecialQuery",
                value: function() {
                    var e = l(u().mark((function e(t) {
                        var r, n, o, i, a;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 2:
                                    if (r = this.indices,
                                    n = this.getPrimaryKey(),
                                    o = t ? [n].concat(ne(r.map((function(e) {
                                        return "string" === typeof e.keyPath ? e.keyPath : ""
                                    }
                                    )))).find((function(e) {
                                        return e && Object.hasOwn(t, e)
                                    }
                                    )) : void 0,
                                    !o) {
                                        e.next = 22;
                                        break
                                    }
                                    if ("string" !== typeof (i = t[o]) && "number" !== typeof i) {
                                        e.next = 22;
                                        break
                                    }
                                    if (o !== n) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.t0 = o,
                                    e.next = 12,
                                    this.get(i);
                                case 12:
                                    return e.t1 = e.sent,
                                    e.t2 = [e.t1],
                                    e.abrupt("return", {
                                        key: e.t0,
                                        data: e.t2
                                    });
                                case 15:
                                    if (!(a = r.find((function(e) {
                                        return e.keyPath === o
                                    }
                                    )))) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.t3 = o,
                                    e.next = 20,
                                    this.getAllFromIndex(a.indexName, i, !0);
                                case 20:
                                    return e.t4 = e.sent,
                                    e.abrupt("return", {
                                        key: e.t3,
                                        data: e.t4
                                    });
                                case 22:
                                    return e.abrupt("return", null);
                                case 23:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getCacheData",
                value: function(e) {
                    if (!this.enableCache)
                        return null;
                    var t = this.db.dbInfo.dbName
                      , r = "".concat(t, "_").concat(this.storeName, "_").concat(e);
                    return Sn.get(r)
                }
            }, {
                key: "setCacheData",
                value: function(e, t) {
                    if (this.enableCache) {
                        var r = this.db.dbInfo.dbName;
                        Sn.set("".concat(r, "_").concat(this.storeName, "_").concat(e), t)
                    }
                }
            }, {
                key: "getApi",
                value: function() {
                    var e = l(u().mark((function e(t, r) {
                        var n, o, i, a = this;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!f()) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", "");
                                case 2:
                                    return e.next = 4,
                                    this.db.basicOpenStore("get", this.storeName);
                                case 4:
                                    return n = e.sent,
                                    o = n.transaction,
                                    i = n.store,
                                    this.transaction = o,
                                    this.store = i,
                                    e.abrupt("return", new Promise((function(e, n) {
                                        var i, c = Array.isArray(r), u = t(), s = c ? r : [r], l = [];
                                        (c ? u : [u]).forEach((function(e, t) {
                                            var r = s[t];
                                            e.onsuccess = function() {
                                                i = e.result;
                                                var t = e.source.keyPath;
                                                r && (a.getPrimaryKey() && t === a.getPrimaryKey() && i && a.setCacheData(r, i));
                                                i && (Array.isArray(i) ? l.push(ne(i)) : l.push(i))
                                            }
                                        }
                                        )),
                                        o.oncomplete = function() {
                                            var t;
                                            null === (t = a.db.db) || void 0 === t || t.close(),
                                            a.db.versionChange && (a.db.versionChange = !1),
                                            e(c ? l : l[0])
                                        }
                                        ,
                                        o.onerror = function(e) {
                                            var t, r, o = (null === e || void 0 === e || null === (t = e.target) || void 0 === t ? void 0 : t.error) || {}, i = o.name, c = o.message;
                                            xn("".concat(Dn, "-getDB-catch-err"), Dn, "".concat(i, ": ").concat(c)),
                                            null === (r = a.db.db) || void 0 === r || r.close(),
                                            n(e)
                                        }
                                    }
                                    )));
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getFromIndex",
                value: function() {
                    var e = l(u().mark((function e(t, r) {
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.getAllFromIndex(t, r, !1));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAllFromIndex",
                value: function() {
                    var e = l(u().mark((function e(t, r, n) {
                        var o = this;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.baseGet(r, (function(e) {
                                        var r = o.store.index(t);
                                        return n ? r.getAll(e) : r.get(e)
                                    }
                                    ), (function() {
                                        return null
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "get",
                value: function() {
                    var e = l(u().mark((function e(t) {
                        var r = this;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.baseGet(t, (function(e) {
                                        return r.store.get(e)
                                    }
                                    ), (function(e) {
                                        return r.getCacheData(e)
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "liveQuery",
                value: function(e) {
                    var t = this;
                    return function(e, t) {
                        var r, n, o = !1;
                        return {
                            subscribe: function(i) {
                                function a() {
                                    return c.apply(this, arguments)
                                }
                                function c() {
                                    return (c = l(u().mark((function t() {
                                        var a;
                                        return u().wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    if (t.prev = 0,
                                                    !r) {
                                                        t.next = 7;
                                                        break
                                                    }
                                                    return t.next = 4,
                                                    r;
                                                case 4:
                                                    a = t.sent,
                                                    t.next = 12;
                                                    break;
                                                case 7:
                                                    return r = e(),
                                                    t.next = 10,
                                                    r;
                                                case 10:
                                                    a = t.sent,
                                                    r = null;
                                                case 12:
                                                    o = !0,
                                                    n = a,
                                                    i(a, null),
                                                    t.next = 20;
                                                    break;
                                                case 17:
                                                    t.prev = 17,
                                                    t.t0 = t.catch(0),
                                                    i(null, t.t0);
                                                case 20:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t, null, [[0, 17]])
                                    }
                                    )))).apply(this, arguments)
                                }
                                o && i(n, null),
                                a();
                                var s = _n.listen(An, (function(e) {
                                    e === t && a()
                                }
                                ), !1);
                                return {
                                    unsubscribe: function() {
                                        null === s || void 0 === s || s.remove()
                                    }
                                }
                            },
                            hasValue: function() {
                                return o
                            },
                            getValue: function() {
                                return n
                            }
                        }
                    }((function() {
                        return t.query(e)
                    }
                    ), this.getQueryRange())
                }
            }, {
                key: "query",
                value: function() {
                    var e = l(u().mark((function e(t) {
                        var r, n, o;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.performSpecialQuery(t);
                                case 2:
                                    if (!(r = e.sent)) {
                                        e.next = 7;
                                        break
                                    }
                                    return delete (n = c({}, t))[r.key],
                                    e.abrupt("return", Pn(r.data, n));
                                case 7:
                                    return e.next = 9,
                                    this.getAll();
                                case 9:
                                    if (o = e.sent,
                                    !t) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.abrupt("return", Pn(o, t));
                                case 12:
                                    return e.abrupt("return", o);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAll",
                value: function() {
                    var e = l(u().mark((function e(t, r) {
                        var n = this;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Nn.enqueue((function() {
                                        return n.getApi((function() {
                                            return n.store.getAll(t, r)
                                        }
                                        ))
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getKey",
                value: function() {
                    var e = l(u().mark((function e(t) {
                        var r = this;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Nn.enqueue((function() {
                                        return r.getApi((function() {
                                            return r.store.getKey(t)
                                        }
                                        ))
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAllKeys",
                value: function() {
                    var e = l(u().mark((function e() {
                        var t = this;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Nn.enqueue((function() {
                                        return t.getApi((function() {
                                            return t.store.getAllKeys()
                                        }
                                        ))
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "count",
                value: function() {
                    var e = l(u().mark((function e() {
                        var t = this;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Nn.enqueue((function() {
                                        return t.getApi((function() {
                                            return t.store.count()
                                        }
                                        ))
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onMutate",
                value: function() {
                    !function(e) {
                        Cn.set(e, !0);
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                            r[n - 1] = arguments[n];
                        _n.trigger.apply(_n, [e].concat(r)),
                        Cn.set(e, !1)
                    }(An, this.getQueryRange())
                }
            }, {
                key: "handleGetCache",
                value: function(e, t) {
                    var r = Array.isArray(e)
                      , n = [];
                    if (r) {
                        var o = ne(e);
                        if (e.forEach((function(e, r) {
                            var i = t(e);
                            i && (Array.isArray(i) ? n.push.apply(n, ne(i)) : n.push(i),
                            o.splice(r, 1))
                        }
                        )),
                        0 === o.length)
                            return n
                    } else if (e) {
                        var i = t(e);
                        if (i)
                            return i
                    }
                    return null
                }
            }, {
                key: "baseGet",
                value: function() {
                    var e = l(u().mark((function e(t, r, n) {
                        var o, i, a, c = this;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (o = Array.isArray(t),
                                    !(i = this.handleGetCache(t, n))) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", i);
                                case 4:
                                    return e.next = 6,
                                    Nn.enqueue((function() {
                                        return c.getApi((function() {
                                            return o ? t.map((function(e) {
                                                return r(e)
                                            }
                                            )) : r(t)
                                        }
                                        ), t)
                                    }
                                    ));
                                case 6:
                                    return a = e.sent,
                                    e.abrupt("return", a);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setApi",
                value: function() {
                    var e = l(u().mark((function e(t) {
                        var r, n, o, i, a, c = this, s = arguments;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (r = (s.length > 1 && void 0 !== s[1] ? s[1] : {}).silent,
                                    n = void 0 !== r && r,
                                    !f()) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 3:
                                    return e.next = 5,
                                    this.db.basicOpenStore("set", this.storeName);
                                case 5:
                                    return o = e.sent,
                                    i = o.transaction,
                                    a = o.store,
                                    this.transaction = i,
                                    this.store = a,
                                    e.abrupt("return", new Promise(function() {
                                        var e = l(u().mark((function e(r, o) {
                                            var i, a, s, l, f;
                                            return u().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return i = function(e) {
                                                            Ln(e)
                                                        }
                                                        ,
                                                        e.next = 3,
                                                        t();
                                                    case 3:
                                                        if (a = e.sent) {
                                                            e.next = 8;
                                                            break
                                                        }
                                                        return null === (s = c.db.db) || void 0 === s || s.close(),
                                                        o(!1),
                                                        e.abrupt("return");
                                                    case 8:
                                                        l = a.request,
                                                        Array.isArray(l) ? (l.forEach((function(e) {
                                                            e.onerror = i
                                                        }
                                                        )),
                                                        f = l[l.length - 1]) : f = l,
                                                        f.onsuccess = function() {
                                                            var e;
                                                            c.db.versionChange && (c.db.versionChange = !1),
                                                            null === (e = c.db.db) || void 0 === e || e.close(),
                                                            r(!0),
                                                            n || c.onMutate()
                                                        }
                                                        ,
                                                        f.onerror = function(e) {
                                                            var t, r, n = (null === e || void 0 === e || null === (t = e.target) || void 0 === t ? void 0 : t.error) || {}, i = n.name, a = n.message;
                                                            xn("".concat(Dn, "-setDB-catch-err"), Dn, "".concat(i, ": ").concat(a)),
                                                            o(!1),
                                                            null === (r = c.db.db) || void 0 === r || r.close()
                                                        }
                                                        ;
                                                    case 13:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t, r) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "set",
                value: function() {
                    var e = l(u().mark((function e(t) {
                        var r, n, o, i, a, c, s, l = this, f = arguments;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = (r = f.length > 1 && void 0 !== f[1] ? f[1] : {}).clear,
                                    o = void 0 !== n && n,
                                    i = r.silent,
                                    a = void 0 !== i && i,
                                    c = this.getPrimaryKey(),
                                    s = function(e) {
                                        if (c) {
                                            var r = t[c];
                                            r && l.setCacheData(r, e)
                                        }
                                    }
                                    ,
                                    e.abrupt("return", Nn.enqueue((function() {
                                        return l.setApi((function() {
                                            return new Promise((function(e) {
                                                var r = function() {
                                                    if (Array.isArray(t)) {
                                                        var r = t.map((function(e) {
                                                            return s(e),
                                                            l.store.put(e)
                                                        }
                                                        ));
                                                        return l.enableCache && Sn.clear(),
                                                        void e({
                                                            request: r,
                                                            method: "set"
                                                        })
                                                    }
                                                    s(t),
                                                    e({
                                                        request: l.store.put(t),
                                                        method: "set"
                                                    })
                                                };
                                                if (o) {
                                                    var n = l.store.clear();
                                                    n.onsuccess = function() {
                                                        r()
                                                    }
                                                    ,
                                                    n.onerror = function() {
                                                        e(null)
                                                    }
                                                } else
                                                    r()
                                            }
                                            ))
                                        }
                                        ), {
                                            silent: a
                                        })
                                    }
                                    )));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "delete",
                value: function() {
                    var e = l(u().mark((function e(t) {
                        var r = this;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Nn.enqueue((function() {
                                        return r.setApi((function() {
                                            var e = r.store;
                                            return {
                                                request: (Array.isArray(t) ? t : [t]).map((function(t) {
                                                    return r.enableCache && Sn.delete("".concat(r.db.dbInfo.dbName, "_").concat(r.storeName, "_").concat(t)),
                                                    e.delete(t)
                                                }
                                                )),
                                                method: "delete"
                                            }
                                        }
                                        ))
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getQueryRange",
                value: function() {
                    return [this.db.dbInfo.dbName, this.storeName].join("_")
                }
            }, {
                key: "clear",
                value: function() {
                    var e = l(u().mark((function e() {
                        var t = this;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Nn.enqueue((function() {
                                        return t.setApi((function() {
                                            return t.enableCache && Sn.clear(),
                                            {
                                                request: t.store.clear(),
                                                method: "clear"
                                            }
                                        }
                                        ))
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "deleteStore",
                value: function() {
                    var e = l(u().mark((function e(t) {
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", this.db.deleteStore(t));
                                case 2:
                                    return e.abrupt("return", this.db.deleteStore(this.storeName));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "openStore",
                value: function(e, t) {
                    return this.db.openStore(e, t)
                }
            }, {
                key: "getInstance",
                value: function() {
                    var e = this;
                    return new Promise((function(t, r) {
                        var n = indexedDB.open(e.db.dbName);
                        n.onsuccess = function() {
                            var r, o, i = null === n || void 0 === n ? void 0 : n.result, a = null === i || void 0 === i ? void 0 : i.version, c = null === i || void 0 === i || null === (r = i.objectStoreNames) || void 0 === r || null === (o = r.contains) || void 0 === o ? void 0 : o.call(r, e.storeName);
                            e.storeExist = c,
                            e.db.autoVersion && (e.db.vero = a + 1,
                            c || e.db.setVersion(a + 1)),
                            null === i || void 0 === i || i.close(),
                            t(e)
                        }
                        ,
                        n.onerror = function(e) {
                            var t;
                            r(null === e || void 0 === e || null === (t = e.target) || void 0 === t ? void 0 : t.error)
                        }
                    }
                    ))
                }
            }, {
                key: "setVersion",
                value: function(e) {
                    this.db.setVersion(e)
                }
            }, {
                key: "basicOpenStore",
                value: function(e, t) {
                    return this.db.basicOpenStore(e, t)
                }
            }])
        }()
          , Kn = "idb";
        !function() {
            if (!f())
                if ("undefined" !== typeof BroadcastChannel) {
                    var e = new BroadcastChannel(In);
                    _n.listen(An, (function(t) {
                        Cn.get(An) && e.postMessage(t)
                    }
                    ), !1),
                    e.onmessage = function(e) {
                        null !== e && void 0 !== e && e.data && (Sn.clear(),
                        _n.trigger(An, e.data))
                    }
                } else if ("undefined" !== typeof En && "undefined" !== typeof navigator) {
                    _n.listen(An, (function(e) {
                        "undefined" !== typeof localStorage && Cn.get(An) && localStorage.setItem(In, JSON.stringify({
                            trig: Math.random(),
                            type: In,
                            changedParts: e
                        })),
                        "object" === typeof (null === En || void 0 === En ? void 0 : En.clients) && ne(null === En || void 0 === En ? void 0 : En.clients.matchAll({
                            includeUncontrolled: !0
                        })).forEach((function(t) {
                            t.postMessage({
                                type: In,
                                changedParts: e
                            })
                        }
                        ))
                    }
                    ), !1),
                    "undefined" !== typeof (null === En || void 0 === En ? void 0 : En.addEventListener) && (null === En || void 0 === En || En.addEventListener("storage", (function(e) {
                        if (e.key === In) {
                            var t = e.newValue ? JSON.parse(e.newValue) : null;
                            t && jn({
                                data: t
                            })
                        }
                    }
                    )));
                    var t = self.document && navigator.serviceWorker;
                    t && t.addEventListener("message", jn)
                }
        }();
        const Un = function() {
            function e(t) {
                p(this, e);
                var r = "string" === typeof t ? {
                    dbName: t,
                    config: {}
                } : "object" === typeof t ? t : {}
                  , n = r.dbName
                  , o = r.config
                  , i = r.version;
                this.dbInfo = {
                    dbName: null !== n && void 0 !== n ? n : "FE"
                },
                this.dbName = "OK_".concat(this.dbInfo.dbName.toUpperCase()),
                this.db = null,
                this.store = null,
                this.transaction = null,
                this.stores = new Map,
                this.storesConfig = null !== o && void 0 !== o ? o : {},
                this.versionChange = !1,
                this.autoVersion = "undefined" === typeof i,
                this.vero = null !== i && void 0 !== i ? i : 1,
                this.storeExist = !1,
                this.initStores()
            }
            return v(e, [{
                key: "initStores",
                value: function() {
                    var e = this;
                    Object.keys(this.storesConfig).forEach((function(t) {
                        var r = e.storesConfig[t]
                          , n = r.indices
                          , o = r.options;
                        e.stores.has(t) || e.stores.set(t, new Rn({
                            storeName: t,
                            indices: n,
                            options: o,
                            db: e
                        }))
                    }
                    ))
                }
            }, {
                key: "setVersion",
                value: function(e) {
                    this.versionChange = !0,
                    this.vero = e
                }
            }, {
                key: "basicOpenStore",
                value: function(e, t) {
                    var r = this
                      , n = this.versionChange;
                    return new Promise((function(o, i) {
                        var a;
                        if (n || !r.autoVersion) {
                            var c = r.vero;
                            a = indexedDB.open(r.dbName, c)
                        } else
                            a = indexedDB.open(r.dbName);
                        a.onupgradeneeded = function(e) {
                            try {
                                var t, n, o = e.target, i = null === (t = a) || void 0 === t ? void 0 : t.result;
                                if (r.db = i,
                                Object.keys(r.storesConfig).forEach((function(e) {
                                    var t = r.storesConfig[e]
                                      , a = t.options
                                      , c = t.indices;
                                    if (i.objectStoreNames.contains(e)) {
                                        var u = o.transaction;
                                        n = u.objectStore(e)
                                    } else
                                        n = i.createObjectStore(e, a);
                                    null === c || void 0 === c || c.forEach((function(e) {
                                        var t = e.indexName
                                          , r = e.keyPath
                                          , o = e.options;
                                        n.indexNames.contains(t) || n.createIndex(t, r, o)
                                    }
                                    ));
                                    for (var s = function() {
                                        var e = n.indexNames[l];
                                        null !== c && void 0 !== c && c.find((function(t) {
                                            return t.indexName === e
                                        }
                                        )) || n.deleteIndex(e)
                                    }, l = 0; l < n.indexNames.length; l++)
                                        s()
                                }
                                )),
                                !r.autoVersion)
                                    for (var c = function() {
                                        var e = i.objectStoreNames[u];
                                        Object.keys(r.storesConfig).find((function(t) {
                                            return t === e
                                        }
                                        )) || i.deleteObjectStore(e)
                                    }, u = 0; u < i.objectStoreNames.length; u++)
                                        c()
                            } catch (p) {
                                var s = p || {}
                                  , l = s.name
                                  , f = s.message;
                                xn("".concat(Kn, "-openDB-catch-err-in-upgrade"), Kn, "".concat(l, ": ").concat(f))
                            }
                        }
                        ,
                        a.onsuccess = function() {
                            try {
                                var n, c = null === (n = a) || void 0 === n ? void 0 : n.result;
                                if (r.db = c,
                                t) {
                                    var u = "get" === e ? "readonly" : "readwrite"
                                      , s = c.transaction(t, u)
                                      , l = s.objectStore(t);
                                    o({
                                        store: l,
                                        transaction: s
                                    })
                                } else
                                    o({
                                        store: null,
                                        transaction: null
                                    })
                            } catch (v) {
                                var f = v || {}
                                  , p = f.name
                                  , d = f.message;
                                xn("".concat(Kn, "-openDB-catch-err-in-success"), Kn, "".concat(p, ": ").concat(d)),
                                i(d)
                            }
                        }
                        ,
                        a.onerror = function() {
                            var e, t, n, o = (null === (e = a) || void 0 === e ? void 0 : e.error) || {}, c = o.name, u = o.message;
                            null !== u && void 0 !== u && null !== (t = u.includes) && void 0 !== t && t.call(u, "The connection was closed") || xn("".concat(Kn, "-openDB-catch-err-in-error"), Kn, "".concat(c, ": ").concat(u)),
                            null !== u && void 0 !== u && null !== (n = u.includes) && void 0 !== n && n.call(u, "less than the existing version") ? (indexedDB.deleteDatabase(r.dbName),
                            i(new Error("".concat(u, " Please reload the page!")))) : i(u)
                        }
                        ,
                        a.onblocked = function() {
                            var e, t = (null === (e = a) || void 0 === e ? void 0 : e.error) || {}, r = t.name, n = t.message;
                            xn("".concat(Kn, "-openDB-catch-block"), Kn, "".concat(r, ": ").concat(n)),
                            i(new Error("Database is outdated, please reload the page!"))
                        }
                    }
                    ))
                }
            }, {
                key: "openStore",
                value: function() {
                    var e = l(u().mark((function e(t, r) {
                        var n;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.stores.has(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", this.stores.get(t));
                                case 2:
                                    return this.storesConfig[t] = {
                                        options: r
                                    },
                                    this.initStores(),
                                    n = this.stores.get(t),
                                    e.abrupt("return", n.getInstance());
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "deleteStore",
                value: function(e) {
                    var t = this;
                    return !f() && new Promise((function(r, n) {
                        if (t.stores.get(e)) {
                            var o = t.stores.get(e);
                            delete t.storesConfig[e],
                            t.stores.delete(e),
                            o.getInstance().then((function(o) {
                                if (o.storeExist) {
                                    var i = indexedDB.open(t.dbName, t.vero);
                                    i.onupgradeneeded = function() {
                                        var t, n = null === i || void 0 === i ? void 0 : i.result;
                                        null === n || void 0 === n || null === (t = n.deleteObjectStore) || void 0 === t || t.call(n, e),
                                        null === n || void 0 === n || n.close(),
                                        r(!0)
                                    }
                                    ,
                                    i.onerror = function(e) {
                                        var t = null === i || void 0 === i ? void 0 : i.result;
                                        null === t || void 0 === t || t.close(),
                                        n(e)
                                    }
                                }
                            }
                            )).catch((function(e) {
                                n(e)
                            }
                            ))
                        }
                    }
                    ))
                }
            }], [{
                key: "deleteDb",
                value: function() {
                    var e = l(u().mark((function e(t) {
                        var r, n;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !0);
                                case 2:
                                    if ("string" !== typeof t) {
                                        e.next = 7;
                                        break
                                    }
                                    if ("OK_FE" !== (r = "OK_".concat(t.toUpperCase()))) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", !0);
                                case 6:
                                    return e.abrupt("return", new Promise((function(e, t) {
                                        var n = indexedDB.deleteDatabase(r);
                                        n.onsuccess = function() {
                                            e(!0)
                                        }
                                        ,
                                        n.onerror = function(e) {
                                            t(e)
                                        }
                                    }
                                    )));
                                case 7:
                                    if (!Array.isArray(t)) {
                                        e.next = 10;
                                        break
                                    }
                                    return n = t.map((function(e) {
                                        var t = "OK_".concat(e.toUpperCase());
                                        return "OK_FE" === t || new Promise((function(e, r) {
                                            var n = indexedDB.deleteDatabase(t);
                                            n.onsuccess = function() {
                                                e(!0)
                                            }
                                            ,
                                            n.onerror = function(e) {
                                                r(e)
                                            }
                                        }
                                        ))
                                    }
                                    )),
                                    e.abrupt("return", Promise.all(n).then((function(e) {
                                        return e.every((function(e) {
                                            return !0 === e
                                        }
                                        ))
                                    }
                                    )));
                                case 10:
                                    return e.abrupt("return", !0);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "openStore",
                value: function() {
                    var t = l(u().mark((function t(r, n) {
                        var o;
                        return u().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return o = new e,
                                    t.abrupt("return", o.openStore(r, n));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e, r) {
                        return t.apply(this, arguments)
                    }
                }()
            }])
        }();
        const Fn = v((function e() {
            p(this, e),
            this.saveLogInDB = function() {
                var e = l(u().mark((function e(t) {
                    var r, n, o, i;
                    return u().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = t.key,
                                n = t.value,
                                e.prev = 1,
                                e.next = 4,
                                Un.openStore("ont", {
                                    keyPath: "id"
                                });
                            case 4:
                                return o = e.sent,
                                i = {
                                    id: r,
                                    value: n
                                },
                                e.next = 8,
                                o.set(i);
                            case 8:
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t0 = e.catch(1),
                                jr({
                                    msg: "err:DB_unavailable"
                                });
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 10]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
        ));
        var Mn = function(e) {
            function t() {
                var e;
                p(this, t);
                for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                    n[o] = arguments[o];
                return (e = y(this, t, [].concat(n))).getDecryptErrorInfo = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.ivInLS
                      , r = e.encryptedPrivateKey
                      , n = e.secretKeyVersion;
                    try {
                        var o = ee.get(rr);
                        if (o) {
                            var i = atob(o)
                              , a = navigator
                              , c = {
                                deviceMemory: a.deviceMemory,
                                hardwareConcurrency: a.hardwareConcurrency,
                                maxTouchPoints: a.maxTouchPoints
                            }
                              , u = {
                                iv: t,
                                encryptedPrivateKey: r ? dn(r) : void 0,
                                encryptFingerprint: i,
                                decryptFingerprintInLS: atob(ee.get(nr) || ""),
                                wasmVersion: n || ee.get(tr),
                                navEn: ee.get(or),
                                navDe: JSON.stringify(c)
                            };
                            return {
                                msg: "decryptPriKey.wasm=".concat(n),
                                detail: u
                            }
                        }
                        return {
                            msg: "decryptPriKey.noEnFingerprintInLs",
                            detail: {
                                reason: "noEnFingerprintInLs"
                            }
                        }
                    } catch (Ot) {
                        return {
                            msg: "decryptPriKey.errorInProcessing",
                            detail: {}
                        }
                    }
                }
                ,
                e
            }
            return w(t, e),
            v(t)
        }(Fn)
          , Bn = new Mn
          , Vn = function(e, t) {
            sr.publicKey = e,
            sr.privateKey = t
        }
          , zn = function() {
            sr.publicKey = void 0,
            sr.privateKey = void 0
        }
          , qn = function() {
            return !(!sr.publicKey || !sr.privateKey)
        }
          , Wn = function() {
            return sr.publicKey
        }
          , Xn = function() {
            return sr.privateKey
        }
          , Gn = function() {
            var e = l(u().mark((function e(t) {
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", crypto.subtle.importKey("pkcs8", t, hn.ECDSA_CONFIG, !1, ["sign"]));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Jn = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i, a, c, s, l, f, p, d, v, g, h;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = t.version,
                            n = t.isEncrypt,
                            e.prev = 1,
                            e.next = 4,
                            sn({
                                version: r
                            });
                        case 4:
                            o = e.sent,
                            e.next = 10;
                            break;
                        case 7:
                            throw e.prev = 7,
                            e.t0 = e.catch(1),
                            new pn("getAesKey.getFingerprint");
                        case 10:
                            return a = (i = o).secretKey,
                            c = i.version,
                            s = i.latestVersion,
                            l = i.rawKey,
                            e.next = 13,
                            crypto.subtle.importKey("raw", a, "AES-GCM", !0, ["encrypt", "decrypt"]);
                        case 13:
                            return f = e.sent,
                            n ? (ee.set(rr, btoa(l)),
                            p = navigator,
                            d = p.deviceMemory,
                            v = p.hardwareConcurrency,
                            g = p.maxTouchPoints,
                            h = {
                                deviceMemory: d,
                                hardwareConcurrency: v,
                                maxTouchPoints: g
                            },
                            ee.set(or, JSON.stringify(h))) : ee.set(nr, btoa(l)),
                            e.abrupt("return", {
                                aesKey: f,
                                secretKeyVersion: c,
                                latestVersion: s
                            });
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 7]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Hn = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i, a, c, s;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = t.rawPrivateKey,
                            n = t.isUpdate,
                            e.next = 3,
                            Jn({
                                isEncrypt: !0
                            });
                        case 3:
                            if (o = e.sent,
                            i = o.aesKey,
                            a = o.secretKeyVersion,
                            !n || a !== ee.get(tr)) {
                                e.next = 8;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 8:
                            return c = crypto.getRandomValues(new Uint8Array(12)),
                            e.next = 11,
                            crypto.subtle.encrypt({
                                name: "AES-GCM",
                                iv: c
                            }, i, vn(r));
                        case 11:
                            return s = e.sent,
                            e.abrupt("return", {
                                secretKeyVersion: a,
                                iv: btoa(c),
                                encryptedPrivateKey: dn(s)
                            });
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , $n = function() {
            var e = l(u().mark((function e() {
                var t, r, n, o, i, a, c, s, l, f, p;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = {
                                iv: new Uint8Array(atob(ee.get(er)).split(",")),
                                secretKeyVersion: ee.get(tr),
                                encryptedPrivateKey: vn(ee.get(Zt))
                            },
                            r = t.secretKeyVersion,
                            n = t.iv,
                            o = t.encryptedPrivateKey,
                            e.next = 3,
                            Jn({
                                version: r
                            });
                        case 3:
                            return i = e.sent,
                            e.prev = 4,
                            a = i.aesKey,
                            c = i.latestVersion,
                            e.next = 9,
                            crypto.subtle.decrypt({
                                name: "AES-GCM",
                                iv: n
                            }, a, o);
                        case 9:
                            if (s = e.sent,
                            !(r !== c)) {
                                e.next = 14;
                                break
                            }
                            return e.next = 14,
                            Hn({
                                rawPrivateKey: s,
                                isUpdate: !0
                            });
                        case 14:
                            return e.abrupt("return", s);
                        case 17:
                            throw e.prev = 17,
                            e.t0 = e.catch(4),
                            l = Bn.getDecryptErrorInfo({
                                ivInLS: ee.get(er),
                                encryptedPrivateKey: o,
                                secretKeyVersion: r
                            }),
                            f = l.msg,
                            p = l.detail,
                            new pn(f,p);
                        case 21:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[4, 17]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , Qn = function() {
            var e = l(u().mark((function e() {
                var t, r, n;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!qn()) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4,
                            $n();
                        case 4:
                            return t = e.sent,
                            e.next = 7,
                            Gn(t);
                        case 7:
                            r = e.sent,
                            n = ee.get(Yt),
                            Vn(n, r);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , Zn = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i, a, c;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = dn(t),
                            e.next = 3,
                            Hn({
                                rawPrivateKey: r
                            });
                        case 3:
                            n = e.sent,
                            o = n.secretKeyVersion,
                            i = n.iv,
                            a = n.encryptedPrivateKey,
                            c = ee.set(tr, o),
                            c = ee.set(er, i) && c,
                            (c = ee.set(Zt, a) && c) || jr({
                                msg: "err:localStorageSet",
                                errInfo: "savePrivateKeyFailed"
                            });
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Yn = function() {
            var e = l(u().mark((function e(t) {
                var r;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = vn(t.privateKey),
                            e.next = 3,
                            Zn(r);
                        case 3:
                            ee.set(Yt, t.publicKey) || jr({
                                msg: "err:localStorageSet",
                                errInfo: "savePublicKeyFailed"
                            });
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , eo = function() {
            var e = l(u().mark((function e() {
                var t, r, n;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            hn.generateKeyPair();
                        case 3:
                            return t = e.sent,
                            e.next = 6,
                            Yn(t);
                        case 6:
                            return r = vn(t.privateKey),
                            e.next = 9,
                            Gn(r);
                        case 9:
                            return n = e.sent,
                            Vn(t.publicKey, n),
                            e.abrupt("return", t.publicKey);
                        case 14:
                            return e.prev = 14,
                            e.t0 = e.catch(0),
                            jr({
                                msg: "err:generateAndStoreKeyPair",
                                errInfo: e.t0
                            }),
                            e.abrupt("return", void 0);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 14]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , to = function() {
            var e = l(u().mark((function e(t) {
                var r, n;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0,
                            r = Xn()) {
                                e.next = 11;
                                break
                            }
                            if (ee.get(Zt)) {
                                e.next = 6;
                                break
                            }
                            throw new pn("noPriKeyInLS");
                        case 6:
                            return e.next = 8,
                            Qn();
                        case 8:
                            if (r = Xn()) {
                                e.next = 11;
                                break
                            }
                            throw new pn("Failed to load private key from localStorage");
                        case 11:
                            return e.next = 13,
                            hn.getSignature({
                                content: t,
                                privateKey: r
                            });
                        case 13:
                            return n = e.sent,
                            e.abrupt("return", n);
                        case 17:
                            return e.prev = 17,
                            e.t0 = e.catch(0),
                            jr({
                                msg: "err:getSi",
                                errInfo: e.t0,
                                extra: {
                                    s1: e.t0.message
                                }
                            }),
                            e.abrupt("return", void 0);
                        case 21:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 17]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , ro = function() {
            var e = l(u().mark((function e() {
                var t, r, n, o, i, a, c, s, l;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            t = "key-pair-verification-test",
                            e.next = 4,
                            to(t);
                        case 4:
                            if (r = e.sent) {
                                e.next = 7;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 7:
                            return n = r.replace(/^\{P1363\}/, ""),
                            o = vn(n),
                            i = Wn(),
                            a = vn(i),
                            c = (new TextEncoder).encode(t),
                            e.next = 14,
                            crypto.subtle.importKey("spki", a, hn.ECDSA_CONFIG, !0, ["verify"]);
                        case 14:
                            return s = e.sent,
                            e.next = 17,
                            crypto.subtle.verify({
                                name: "ECDSA",
                                hash: {
                                    name: "SHA-256"
                                }
                            }, s, o, c);
                        case 17:
                            return l = e.sent,
                            e.abrupt("return", l);
                        case 21:
                            return e.prev = 21,
                            e.t0 = e.catch(0),
                            jr({
                                msg: "err:verifyKeyPairMatch",
                                errInfo: e.t0
                            }),
                            e.abrupt("return", !1);
                        case 25:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 21]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , no = function() {
            var e = l(u().mark((function e() {
                var t;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return jr({
                                msg: "warn:getPublicKey.keyPairMismatch"
                            }),
                            [Zt, Yt, er, tr, rr, nr, or].forEach((function(e) {
                                ee.remove(e)
                            }
                            )),
                            zn(),
                            e.next = 4,
                            eo();
                        case 4:
                            return t = e.sent,
                            e.abrupt("return", t);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }();
        const oo = {
            getPublicKey: function() {
                var e = l(u().mark((function e() {
                    var t;
                    return u().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!jt.isApp) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", void 0);
                            case 2:
                                if (e.prev = 2,
                                !qn()) {
                                    e.next = 7;
                                    break
                                }
                                t = Wn(),
                                e.next = 19;
                                break;
                            case 7:
                                return e.prev = 7,
                                e.next = 10,
                                Qn();
                            case 10:
                                e.next = 16;
                                break;
                            case 12:
                                return e.prev = 12,
                                e.t0 = e.catch(7),
                                e.next = 16,
                                eo();
                            case 16:
                                return e.prev = 16,
                                t = Wn(),
                                e.finish(16);
                            case 19:
                                return e.next = 21,
                                ro();
                            case 21:
                                if (!e.sent) {
                                    e.next = 24;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 24:
                                return e.next = 26,
                                no();
                            case 26:
                                return e.abrupt("return", e.sent);
                            case 29:
                                return e.prev = 29,
                                e.t1 = e.catch(2),
                                jr({
                                    msg: "err:web.getPubKey",
                                    errInfo: e.t1
                                }),
                                e.abrupt("return", void 0);
                            case 33:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 29], [7, 12, 16, 19]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            getSignature: to,
            clearMemoryKeyPair: zn
        };
        var io = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.requestUrl
              , r = e.fetchConfig
              , n = e.ontConfig
              , o = t;
            try {
                var i = new URL(t);
                o = i.pathname + i.search
            } catch (Ot) {}
            var a = o.replace("?", "");
            if (["POST", "PUT"].includes(r.method)) {
                a = o = o.split("?")[0];
                var c = r.body;
                if (c)
                    if (c instanceof FormData) {
                        var u = JSON.stringify(Object.fromEntries(c));
                        a = "".concat(o, "{").concat(u, "}")
                    } else
                        a = "".concat(o).concat(c)
            }
            return a += n.timestamp
        }
          , ao = function() {
            var e = l(u().mark((function e() {
                var t, r, n, o, i, a, c, s, l = arguments;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = (t = l.length > 0 && void 0 !== l[0] ? l[0] : {}).requestUrl,
                            n = void 0 === r ? "" : r,
                            o = t.fetchConfig,
                            i = void 0 === o ? {
                                method: "GET"
                            } : o,
                            a = t.ontConfig,
                            c = io({
                                requestUrl: n,
                                fetchConfig: i,
                                ontConfig: a
                            }),
                            e.next = 4,
                            oo.getSignature(c);
                        case 4:
                            if (s = e.sent) {
                                e.next = 8;
                                break
                            }
                            return jr({
                                msg: "err:getStamp",
                                extra: {
                                    requestUrl: n,
                                    fetchConfig: i,
                                    ontConfig: a
                                }
                            }),
                            e.abrupt("return", "");
                        case 8:
                            return e.abrupt("return", s);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , co = function() {
            var e = l(u().mark((function e(t) {
                var r;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            oo.getSignature(t);
                        case 2:
                            if (r = e.sent) {
                                e.next = 6;
                                break
                            }
                            return jr({
                                msg: "err:getStampByContent",
                                extra: {
                                    content: t
                                }
                            }),
                            e.abrupt("return", "");
                        case 6:
                            return e.abrupt("return", r);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , uo = {
            getPublicKey: oo.getPublicKey,
            getSignature: ao,
            getSignatureByContent: co
        }
          , so = function(e) {
            if (!(xt.get(e) || localStorage.getItem(e)))
                switch (e) {
                case "ok-helper-domain":
                    localStorage.setItem(e, window.location.hostname);
                    break;
                case "ok_prefer_number":
                    localStorage.setItem(e, Date.now())
                }
            return xt.get(e) || localStorage.getItem(e)
        }
          , lo = function() {
            var e = l(u().mark((function e() {
                var t, r, n;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (navigator.gpu) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", "");
                        case 2:
                            return e.next = 4,
                            navigator.gpu.requestAdapter();
                        case 4:
                            if (t = e.sent) {
                                e.next = 7;
                                break
                            }
                            return e.abrupt("return", "");
                        case 7:
                            return e.prev = 7,
                            e.next = 10,
                            null === (r = t.requestAdapterInfo) || void 0 === r ? void 0 : r.call(t);
                        case 10:
                            if (e.t0 = e.sent,
                            e.t0) {
                                e.next = 13;
                                break
                            }
                            e.t0 = t.info;
                        case 13:
                            return n = e.t0,
                            e.abrupt("return", JSON.stringify({
                                architecture: n.architecture,
                                description: n.description,
                                device: n.device,
                                vendor: n.vendor
                            }));
                        case 17:
                            return e.prev = 17,
                            e.t1 = e.catch(7),
                            jr({
                                msg: "err:getGPUInfo",
                                errInfo: e.t1
                            }),
                            e.abrupt("return", "");
                        case 21:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[7, 17]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , fo = function() {
            var e = l(u().mark((function e() {
                var t, r, n;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            for (r in t = {},
                            navigator)
                                t[r] = navigator[r];
                            return e.next = 4,
                            lo();
                        case 4:
                            return t.gpu = e.sent,
                            n = JSON.stringify(t),
                            e.abrupt("return", n);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , po = function() {
            var e = l(u().mark((function e() {
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", "");
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , vo = function(e) {
            return sessionStorage.getItem(e) || window[e]
        }
          , go = "efp_id"
          , ho = function() {
            ee.remove(go)
        }
          , bo = x()
          , yo = null === bo || void 0 === bo ? void 0 : bo.crypto
          , mo = {
            mathRandom: function() {
                return Math.random()
            },
            cryptoRandom: function(e) {
                var t = e || {}
                  , r = t.bytesLength
                  , n = void 0 === r ? 1 : r
                  , o = t.UnitArray
                  , i = void 0 === o ? Uint32Array : o
                  , a = new i(n);
                if (yo)
                    return yo.getRandomValues(a);
                for (var c = Math.pow(2, 8 * i.BYTES_PER_ELEMENT) - 1, u = 0; u < n; u++)
                    a[u] = Math.floor(Math.random() * c);
                return a
            },
            get: function(e) {
                var t = (e || {}).useMathRandom;
                if (void 0 !== t && t)
                    return mo.mathRandom();
                if (yo) {
                    var r = new Uint32Array(1);
                    return yo.getRandomValues(r),
                    r[0] / Math.pow(2, 32)
                }
                return mo.mathRandom()
            }
        }
          , wo = function(e) {
            function t() {
                var e;
                p(this, t);
                for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                    n[o] = arguments[o];
                return (e = y(this, t, [].concat(n))).devIdMemory = "",
                e.logForDevIdDiff = function() {
                    var e = l(u().mark((function e(t) {
                        var r, n, o, i, a, s;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    r = t.msg,
                                    n = t.moreInfo,
                                    o = xt.get(Wt),
                                    i = localStorage.getItem(Jt),
                                    e.next = 6,
                                    Un.openStore("ont", {
                                        keyPath: "id"
                                    });
                                case 6:
                                    return a = e.sent,
                                    e.next = 9,
                                    a.get("devId");
                                case 9:
                                    s = e.sent,
                                    jr({
                                        msg: "devIdChange:".concat(r),
                                        errInfo: c(c({}, n), {}, {
                                            devIdInCok: o,
                                            devIdInLS: i,
                                            devIdInDB: s
                                        })
                                    }),
                                    e.next = 15;
                                    break;
                                case 13:
                                    e.prev = 13,
                                    e.t0 = e.catch(0);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 13]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                e
            }
            return w(t, e),
            v(t)
        }(Fn)
          , ko = new wo
          , xo = function(e) {
            xt.set(Wt, e, {
                expires: 730
            }),
            localStorage.setItem(Jt, e)
        }
          , _o = function() {
            var e = xt.get(Wt) || localStorage.getItem(Jt);
            return e ? function(e) {
                var t = xt.get(Wt)
                  , r = localStorage.getItem(Jt);
                t && r && t === r || (ko.logForDevIdDiff({
                    msg: "diff_with_cookie&LS",
                    moreInfo: {
                        devId: e
                    }
                }),
                xo(e))
            }(e) : (e = function() {
                var e = Date.now()
                  , t = window.performance;
                return "undefined" !== typeof t && "function" === typeof t.now && (e += t.now()),
                "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                    var r = (e + 16 * mo.get()) % 16 | 0;
                    return ("x" === t ? r : 3 & r | 8).toString(16)
                }
                ))
            }(),
            xo(e),
            ko.saveLogInDB({
                key: "devId",
                value: e
            })),
            e
        }
          , So = function(e) {
            var t = localStorage.getItem($t);
            t && t !== e && ko.logForDevIdDiff({
                msg: "diff_with_loginProject",
                moreInfo: {
                    devId: e,
                    loginDevId: t
                }
            });
            var r = ee.get(Qt);
            r && r !== e && (ko.logForDevIdDiff({
                msg: "diff_with_getPublicKey",
                moreInfo: {
                    devId: e,
                    devIdPublic: r
                }
            }),
            ee.remove(Qt)),
            ko.devIdMemory ? ko.devIdMemory !== e && ko.logForDevIdDiff({
                msg: "diff_with_pageFirstLoad",
                moreInfo: {
                    devId: e,
                    devIdMemory: ko.devIdMemory
                }
            }) : ko.devIdMemory = e
        }
          , Ao = function() {
            var e = l(u().mark((function e() {
                var t, r, n;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!f()) {
                                e.next = 3;
                                break
                            }
                            return n = xt.get(Wt),
                            e.abrupt("return", n || "");
                        case 3:
                            if (!jt.isApp || null === (t = window) || void 0 === t || !t.jsbridge) {
                                e.next = 8;
                                break
                            }
                            return e.next = 6,
                            window.jsbridge.getDeviceID();
                        case 6:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 8:
                            return r = _o(),
                            So(r),
                            e.abrupt("return", r);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }();
        const Io = {
            getDevId: Ao,
            getDeviceId: _o,
            setDeviceId: xo
        };
        var Co = function() {
            var e = {
                path: "/",
                expires: 1
            };
            return window.self !== window.top && (e = {
                path: "/",
                expires: 1,
                SameSite: "None",
                secure: !0
            }),
            e
        }
          , Eo = function() {
            var e = l(u().mark((function e() {
                var t, r, n, o, i, a, s, l;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = Co(),
                            r = "fingerprint_id",
                            n = "fp_s",
                            o = xt.get(r),
                            i = xt.get(n),
                            a = {
                                uninitialized: -2,
                                notProfiled: -1,
                                success: 0,
                                partial_success: 1,
                                failed: 3,
                                expired: 4
                            },
                            s = Object.values(a).includes(Number(i)),
                            !o || !s) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return");
                        case 9:
                            if (o) {
                                e.next = 19;
                                break
                            }
                            return ho(),
                            xt.set(n, a.uninitialized, c({}, t)),
                            e.next = 14,
                            Io.getDevId();
                        case 14:
                            l = e.sent,
                            xt.set(r, l, c({}, t)),
                            xt.set(n, a.notProfiled, c({}, t)),
                            e.next = 20;
                            break;
                        case 19:
                            s || (ho(),
                            xt.set(n, a.expired, c({}, t)));
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , jo = 0
          , Oo = function(e, t) {
            delete window[t],
            document.head.removeChild(e)
        };
        var To = x()
          , Po = f();
        function Lo() {
            var e, t, r = (null === (e = To.ssrUtils) || void 0 === e || null === (t = e.getRouteInfo) || void 0 === t ? void 0 : t.call(e)) || {}, n = r.href, o = void 0 === n ? "" : n, i = r.protocol, a = void 0 === i ? "" : i, c = r.host, u = void 0 === c ? "" : c, s = r.hostname, l = void 0 === s ? "" : s, f = r.port, p = void 0 === f ? "" : f, d = r.pathname, v = void 0 === d ? "" : d, g = r.search, h = void 0 === g ? "" : g, b = r.hash, y = void 0 === b ? "" : b, m = r.origin;
            return {
                href: o,
                protocol: a,
                host: u,
                hostname: l,
                port: p,
                pathname: v,
                search: h,
                hash: y,
                origin: void 0 === m ? "" : m
            }
        }
        const Do = {
            get href() {
                var e;
                return Po ? (null === (e = Lo()) || void 0 === e ? void 0 : e.href) || "" : et(To.location.href)
            },
            set href(e) {
                Po || "string" !== typeof e || (To.location.href = et(Mt(e)))
            },
            get protocol() {
                var e;
                return Po ? (null === (e = Lo()) || void 0 === e ? void 0 : e.protocol) || "" : et(To.location.protocol)
            },
            get host() {
                var e;
                return Po ? (null === (e = Lo()) || void 0 === e ? void 0 : e.host) || "" : et(To.location.host)
            },
            get hostname() {
                var e;
                return Po ? (null === (e = Lo()) || void 0 === e ? void 0 : e.hostname) || "" : et(To.location.hostname)
            },
            get port() {
                var e;
                return Po ? (null === (e = Lo()) || void 0 === e ? void 0 : e.port) || "" : et(To.location.port)
            },
            get pathname() {
                var e;
                return Po ? (null === (e = Lo()) || void 0 === e ? void 0 : e.pathname) || "" : et(To.location.pathname)
            },
            get search() {
                var e;
                return Po ? (null === (e = Lo()) || void 0 === e ? void 0 : e.search) || "" : et(To.location.search)
            },
            set search(e) {
                Po || "string" !== typeof e || (To.location.search = et(e))
            },
            get hash() {
                var e;
                return Po ? (null === (e = Lo()) || void 0 === e ? void 0 : e.hash) || "" : et(To.location.hash)
            },
            set hash(e) {
                if (!Po && "string" === typeof e) {
                    var t = et(e);
                    To.location.hash = t
                }
            },
            get origin() {
                var e;
                return Po ? (null === (e = Lo()) || void 0 === e ? void 0 : e.origin) || "" : et(To.location.origin)
            },
            assign: function(e) {
                if (!Po && "string" === typeof e) {
                    var t = et(!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1] ? Mt(e) : e);
                    To.location.assign(t)
                }
            },
            reload: function() {
                Po || To.location.reload()
            },
            replace: function(e) {
                if (!Po && "string" === typeof e) {
                    var t = et(Mt(e));
                    To.location.replace(t)
                }
            }
        };
        const No = {
            ar_EH: "\u062d\u062f\u062b \u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0634\u0628\u0643\u0629. \u064a\u064f\u0631\u062c\u0649 \u0627\u0644\u062a\u062d\u0642\u0642 \u0648\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649",
            cs_CZ: "Chyba s\xedt\u011b. Zkontrolujte pros\xedm a zkuste to znovu.",
            de_DE: "Netzwerkfehler. Bitte pr\xfcfen und erneut versuchen",
            en_US: "Network error. Check and try again later.",
            en: "Network error. Check and try again later.",
            es_419: "Hubo un error de red. Comprueba tu conexi\xf3n e int\xe9ntalo de nuevo",
            es_ES: "Error de red. Comprueba tu conexi\xf3n e int\xe9ntalo de nuevo",
            fr_FR: "Erreur r\xe9seau, veuillez v\xe9rifier et r\xe9essayer",
            id_ID: "Jaringan error, silakan periksa dan coba lagi",
            it_IT: "Errore di rete; controlla e riprova",
            nl_NL: "Netwerk is abnormaal, controleer en probeer opnieuw",
            pl_PL: "B\u0142\u0105d sieci; sprawd\u017a i spr\xf3buj ponownie",
            pt_BR: "Erro de rede. Verifique e tente novamente",
            pt_PT: "Erro de rede. Verifique e tente novamente",
            ro_RO: "Eroare de re\u021bea, verifica\u021bi \u0219i \xeencerca\u021bi din nou",
            ru_RU: "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443",
            tr_TR: "A\u011f hatas\u0131, l\xfctfen kontrol edip tekrar deneyin!",
            uk_UA: "\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043c\u0435\u0440\u0435\u0436\u0456, \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0439 \u043f\u043e\u0432\u0442\u043e\u0440\u0456\u0442\u044c \u0441\u043f\u0440\u043e\u0431\u0443",
            vi_VN: "L\u1ed7i m\u1ea1ng, vui l\xf2ng ki\u1ec3m tra v\xe0 th\u1eed l\u1ea1i",
            zh_CN: "\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u68c0\u67e5\u540e\u518d\u8bd5",
            zh_TW: "\u7db2\u7d61\u7570\u5e38\uff0c\u8acb\u6aa2\u67e5\u5f8c\u518d\u8a66"
        };
        const Ro = {
            ar_EH: "\u0627\u0644\u062e\u0627\u062f\u0645 \u0645\u0634\u063a\u0648\u0644 \u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 \u0644\u0627\u062d\u0642\u064b\u0627",
            cs_CZ: "Server je zanepr\xe1zdn\u011bn. Zkuste to pros\xedm znovu pozd\u011bji.",
            de_DE: "Der Server ist \xfcberlastet. Versuchen Sie es sp\xe4ter erneut",
            en_US: "Server is busy. Try again later.",
            en: "Server is busy. Try again later.",
            es_419: "El servidor est\xe1 ocupado. Vuelve a intentarlo m\xe1s tarde.",
            es_ES: "El servidor est\xe1 ocupado. Int\xe9ntalo de nuevo m\xe1s tarde.",
            fr_FR: "Le serveur est occup\xe9, veuillez r\xe9essayer ult\xe9rieurement",
            id_ID: "Server sedang sibuk, silakan coba lagi nanti",
            it_IT: "Il server \xe8 occupato, riprova pi\xf9 tardi",
            nl_NL: "Server is bezet, probeer het later opnieuw",
            pl_PL: "Serwer jest zaj\u0119ty. Spr\xf3buj ponownie p\xf3\u017aniej",
            pt_BR: "Servidor ocupado. Tente novamente mais tarde.",
            pt_PT: "Servidor ocupado. Tente novamente mais tarde",
            ro_RO: "Serverul este ocupat, \xeencerca\u021bi din nou mai t\xe2rziu",
            ru_RU: "\u0421\u0435\u0440\u0432\u0435\u0440 \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043d. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435",
            tr_TR: "Sunucu me\u015fgul, l\xfctfen daha sonra tekrar deneyin.",
            uk_UA: "\u0421\u0435\u0440\u0432\u0435\u0440 \u043f\u0435\u0440\u0435\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u0438\u0439, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0456\u0437\u043d\u0456\u0448\u0435",
            vi_VN: "M\xe1y ch\u1ee7 \u0111ang b\u1eadn, vui l\xf2ng th\u1eed l\u1ea1i sau",
            zh_CN: "\u670d\u52a1\u5668\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
            zh_TW: "\u4f3a\u670d\u5668\u5fd9\u788c\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66"
        };
        const Ko = function(e) {
            var t = e / 1e3;
            return {
                ar_EH: "\u0627\u0646\u062a\u0647\u0649 \u0648\u0642\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u0634\u0628\u0643\u0629\u060c \u062a\u062e\u0637\u0649 \u0648\u0642\u062a \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 ".concat(t, " \u0645\u0646 \u0627\u0644\u062b\u0648\u0627\u0646\u064a"),
                cs_CZ: "Vypr\u0161el \u010dasov\xfd limit s\xed\u0165ov\xe9ho p\u0159ipojen\xed \u2013 doba \u010dek\xe1n\xed p\u0159ekro\u010dila ".concat(t, " s."),
                de_DE: "Netzwerkverbindung wurde unterbrochen, die Wartezeit hat ".concat(t, " Sekunden \xfcberschritten"),
                en_US: "Network connection timed out. The wait time has exceeded ".concat(t, " seconds."),
                en: "Network connection timed out, wait time has exceeded ".concat(t, " seconds"),
                es_419: "Se agot\xf3 el tiempo de conexi\xf3n de la red (".concat(t, " segundos)"),
                es_ES: "La conexi\xf3n de red ha superado el tiempo de espera (ha superado los ".concat(t, " segundos)"),
                fr_FR: "La connexion au r\xe9seau a expir\xe9, le temps d'attente a d\xe9pass\xe9 ".concat(t, " secondes"),
                id_ID: "Batas waktu koneksi jaringan habis, waktu tunggu telah melebihi ".concat(t, " detik"),
                it_IT: "La connessione di rete \xe8 scaduta; il tempo d'attesa ha superato i ".concat(t, " secondi"),
                nl_NL: "Netwerkverbinding verbroken, de wachttijd is langer dan ".concat(t, " seconden"),
                pl_PL: "Po\u0142\u0105czenie sieciowe przekroczy\u0142o limit czasu, czas oczekiwania przekroczy\u0142 ".concat(t, " sekund"),
                pt_BR: "A conex\xe3o de rede atingiu o tempo limite. O tempo de espera excedeu ".concat(t, " segundos"),
                pt_PT: "O tempo de liga\xe7\xe3o \xe0 rede expirou. O tempo de espera ultrapassou os ".concat(t, " segundos"),
                ro_RO: "Conexiunea la re\u021bea a e\u0219uat, timpul de a\u0219teptare a dep\u0103\u0219it ".concat(t, " secunde"),
                ru_RU: "\u0412\u0440\u0435\u043c\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0441\u0435\u0442\u0438 \u0438\u0441\u0442\u0435\u043a\u043b\u043e. \u0412\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u0435\u0432\u044b\u0441\u0438\u043b\u043e ".concat(t, " \u0441\u0435\u043a."),
                tr_TR: "A\u011f ba\u011flant\u0131s\u0131 zaman a\u015f\u0131m\u0131na u\u011frad\u0131, bekleme s\xfcresi ".concat(t, " saniyeyi a\u015ft\u0131."),
                uk_UA: "\u0427\u0430\u0441 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u0437'\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0437 \u043c\u0435\u0440\u0435\u0436\u0435\u044e \u043c\u0438\u043d\u0443\u0432, \u0432\u0456\u043d \u043f\u0435\u0440\u0435\u0432\u0438\u0449\u0438\u0432 ".concat(t, " \u0441"),
                vi_VN: "\u0110\xe3 h\u1ebft th\u1eddi gian k\u1ebft n\u1ed1i m\u1ea1ng, th\u1eddi gian ch\u1edd \u0111\xe3 v\u01b0\u1ee3t qu\xe1 ".concat(t, " gi\xe2y"),
                zh_CN: "\u7f51\u7edc\u8fde\u63a5\u8d85\u65f6\uff0c\u7b49\u5f85\u65f6\u957f\u5df2\u8d85\u8fc7 ".concat(t, " \u79d2"),
                zh_TW: "\u7db2\u7d61\u9023\u63a5\u8d85\u6642\uff0c\u7b49\u5f85\u6642\u9577\u5df2\u8d85\u904e ".concat(t, " \u79d2")
            }
        };
        var Uo = function() {
            return Ro[jt.locale] || Ro.en
        }
          , Fo = function() {
            var e = Ko(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4);
            return e[jt.locale] || e.en
        }
          , Mo = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = t.efpid,
                            n = t.ontConfig,
                            i = (a = {
                                efpid: r,
                                ontConfig: n
                            }).efpid + a.ontConfig.timestamp,
                            e.prev = 2,
                            e.next = 5,
                            oo.getSignature(i);
                        case 5:
                            o = e.sent,
                            e.next = 11;
                            break;
                        case 8:
                            e.prev = 8,
                            e.t0 = e.catch(2),
                            jr({
                                msg: "err:getFpSi",
                                errInfo: e.t0,
                                extra: {
                                    s1: e.t0.message
                                }
                            });
                        case 11:
                            return e.abrupt("return", o);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                    var a
                }
                ), e, null, [[2, 8]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Bo = {
            "X-Discover-Auth-Token": !0,
            Href: !0,
            "Content-Type": !0,
            "Device-Token": !0,
            "X-Simulated-Trading": !0,
            "X-Apikey": !0,
            Loginname: !0,
            Playbook: !0,
            "Action-Param": !0,
            "Im-Token": !0,
            "X-Bu-Id": !0,
            Venus: !0,
            "X-Utc": !0,
            "X-Authority": !0,
            Authorization: !0,
            "X-Prev-Refer": !0,
            "X-Client-Public-Key": !0,
            Product: !0,
            Timestamp: !0,
            Sign: !0,
            Currency: !0,
            "Key-Id": !0,
            "Market-Token": !0,
            Nft_token: !0,
            Platform: !0,
            Referer_url: !0,
            Widget_version: !0,
            Fund_flow_type: !0,
            "Real-App-Version": !0,
            App_web_mode: !0,
            "X-Telegram-Init-Data": !0,
            "Explorer-Token": !0,
            "Okts-Baggage": !0,
            Acstigmaflag: !0,
            Accept: !0,
            "X-Ca-Id": !0,
            Timeout: !0,
            Devid: !0,
            Chainindex: !0,
            "X-Web3-Authsign": !0,
            "Dex-Strategy-Source": !0
        }
          , Vo = function(e, t) {
            if (e && (null === jt || void 0 === jt || !jt.disableHeaderRecord)) {
                var r = Object.keys(e).filter((function(e) {
                    return !Bo[e]
                }
                ));
                if (r.length > 0) {
                    var n = (null === t || void 0 === t ? void 0 : t.split("?")[0]) || ""
                      , o = "[headerRecord] custom header record for ".concat(n, " ").concat(r.join("__"))
                      , i = {};
                    r.forEach((function(t) {
                        var r;
                        i[t] = {
                            type: typeof e[t],
                            length: (null === (r = e[t]) || void 0 === r ? void 0 : r.length) || 0
                        }
                    }
                    )),
                    jr({
                        msg: o,
                        extra: i
                    })
                }
            }
        }
          , zo = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i, a, c, s, l, f;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = t.requestUrl,
                            n = t.fetchConfig,
                            o = t.header,
                            i = r,
                            window.inOKXExtension && (a = new URL(r),
                            i = a.pathname + a.search),
                            e.next = 5,
                            Pr.getTokenAndSign({
                                url: i,
                                fetchConfig: n
                            });
                        case 5:
                            return c = e.sent,
                            s = c.token,
                            l = c.timestamp,
                            f = c.signature,
                            o["Ok-Verify-Token"] = s,
                            o["Ok-Timestamp"] = l,
                            o["Ok-Verify-Sign"] = f,
                            e.abrupt("return", !0);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , qo = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i, a;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = t.requestUrl,
                            n = t.fetchConfig,
                            o = t.header,
                            i = t.ontConfig,
                            !jt.isApp) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return e.next = 5,
                            uo.getSignature({
                                requestUrl: r,
                                fetchConfig: n,
                                ontConfig: i
                            });
                        case 5:
                            a = e.sent,
                            o["X-Client-Signature"] = a,
                            o["X-Request-Timestamp"] = i.timestamp,
                            o["X-Client-Signature-Version"] = ee.get(tr);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Wo = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = t.header,
                            n = t.ontConfig,
                            o = ee.get(go)) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return");
                        case 4:
                            return r["X-FpToken"] = o,
                            e.next = 7,
                            Mo({
                                efpid: o,
                                ontConfig: n
                            });
                        case 7:
                            r["X-FpToken-Signature"] = e.sent,
                            r["X-Request-Timestamp"] = n.timestamp;
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Xo = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i, a, s, l, p, d;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = t.requestUrl,
                            n = t.fetchConfig,
                            o = t.ontConfig,
                            i = t.requestNumber,
                            a = 0 - (new Date).getTimezoneOffset() / 60,
                            s = {
                                "App-Type": "web",
                                Accept: "application/json",
                                "X-Utc": a,
                                "X-Locale": jt.locale,
                                "X-Zkdex-Env": o.dexEnv,
                                "X-Cdn": jt.cdnBaseUrl
                            },
                            !o.needSign) {
                                e.next = 6;
                                break
                            }
                            return e.next = 6,
                            zo({
                                header: s,
                                requestUrl: r,
                                fetchConfig: n
                            });
                        case 6:
                            if (!o.needJwtSign) {
                                e.next = 9;
                                break
                            }
                            return e.next = 9,
                            qo({
                                header: s,
                                requestUrl: r,
                                fetchConfig: n,
                                ontConfig: o
                            });
                        case 9:
                            if (window.inOKXExtension) {
                                e.next = 32;
                                break
                            }
                            return s["X-Simulated-Trading"] = xt.get("simulatedTrading"),
                            e.next = 13,
                            Io.getDevId();
                        case 13:
                            return s.Devid = e.sent,
                            e.next = 16,
                            _r();
                        case 16:
                            if (!e.sent) {
                                e.next = 26;
                                break
                            }
                            return e.next = 20,
                            hr(o);
                        case 20:
                            return l = e.sent,
                            s.Authorization = l,
                            e.next = 24,
                            qo({
                                header: s,
                                requestUrl: r,
                                fetchConfig: n,
                                ontConfig: o
                            });
                        case 24:
                            e.next = 28;
                            break;
                        case 26:
                            return e.next = 28,
                            Wo({
                                header: s,
                                ontConfig: o
                            });
                        case 28:
                            (p = jt.getSiteInfo ? jt.getSiteInfo(!1) : void 0) && (s["X-Site-Info"] = p),
                            f() || sr.traceId || (sr.traceId = xt.get("traceId")),
                            s["X-Id-Group"] = "".concat(sr.traceId, "-c-").concat(i);
                        case 32:
                            return u = o.headers,
                            d = null == u ? {} : Object.fromEntries(Object.entries(u).map((function(e) {
                                var t, r = Ar(e, 2), n = r[0], o = r[1];
                                return [(t = n,
                                t.split("-").map((function(e) {
                                    return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
                                }
                                )).join("-")), o]
                            }
                            ))),
                            Vo(d, r),
                            e.abrupt("return", c(c(c({}, s), n.headers), d));
                        case 35:
                        case "end":
                            return e.stop()
                        }
                    var u
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Go = function(e, t) {
            var r = new URLSearchParams;
            Object.keys(t).forEach((function(e) {
                var n = t[e];
                null !== n && void 0 !== n && r.append(e, String(n))
            }
            ));
            var n = r.toString();
            return n ? "".concat(e, "?").concat(n) : e
        }
          , Jo = function() {
            var e = l(u().mark((function e() {
                var t, r, n, o;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "",
                            e.prev = 1,
                            e.next = 4,
                            Un.openStore("ont", {
                                keyPath: "id"
                            });
                        case 4:
                            return r = e.sent,
                            e.next = 7,
                            r.get("loginPublicKey");
                        case 7:
                            n = e.sent,
                            t = n.value,
                            e.next = 13;
                            break;
                        case 11:
                            e.prev = 11,
                            e.t0 = e.catch(1);
                        case 13:
                            return o = ee.get(Yt) || "",
                            e.abrupt("return", {
                                publicKeyInLs: o,
                                loginPublicKeyInDB: t
                            });
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 11]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , Ho = function(e, t) {
            return e.data.msg = t.statusText,
            Promise.reject(e)
        }
          , $o = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i, a, s, l, f;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = t.result,
                            n = t.responseBody,
                            o = t.ontConfig,
                            i = t.requestHeader,
                            !o.isHandling401) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", Promise.reject(r));
                        case 3:
                            if (lr({
                                isHandling401: !0
                            }),
                            xr(),
                            805 !== (a = n.code) && 806 !== a) {
                                e.next = 22;
                                break
                            }
                            if (e.prev = 9,
                            805 !== a) {
                                e.next = 16;
                                break
                            }
                            return e.next = 13,
                            Jo();
                        case 13:
                            s = e.sent,
                            l = Bn.getDecryptErrorInfo(),
                            f = l.detail,
                            i["X-Client-Signature"] ? jr({
                                msg: "err:si_mismatch",
                                errInfo: c(c({}, s), f)
                            }) : jr({
                                msg: "err:si_undefined",
                                errInfo: c(c({}, s), f)
                            });
                        case 16:
                            e.next = 20;
                            break;
                        case 18:
                            e.prev = 18,
                            e.t0 = e.catch(9);
                        case 20:
                            return window.location.href = Mt("/account/notice?code=".concat(a)),
                            e.abrupt("return", Promise.reject(r));
                        case 22:
                            return (o.customToLogin || Sr)(r),
                            e.abrupt("return", Promise.reject(r));
                        case 25:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[9, 18]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Qo = function(e) {
            var t;
            return null !== e && void 0 !== e && null !== (t = e.data) && void 0 !== t && t.msg || (e.data.msg = "".concat(Uo(), ".")),
            Promise.reject(e)
        }
          , Zo = function(e) {
            var t, r, n, o = e.status, i = e.result;
            400 === o && jr({
                msg: "resp400",
                errInfo: {
                    length: null === (r = document) || void 0 === r || null === (n = r.cookie) || void 0 === n ? void 0 : n.length
                }
            });
            return null !== i && void 0 !== i && null !== (t = i.data) && void 0 !== t && t.msg || (i.data.msg = Uo()),
            Promise.reject(i)
        }
          , Yo = function(e) {
            var t, r, n = e.result, o = e.response, i = e.ontConfig, a = o.headers.get("x-ok-token");
            return a && function(e) {
                var t = e.newToken
                  , r = e.ontConfig
                  , n = e.result;
                f() || window.inOKXExtension || (kr(t),
                r.onUpdateTokenDone && r.onUpdateTokenDone(n))
            }({
                newToken: a,
                ontConfig: i,
                result: n
            }),
            0 == (null === n || void 0 === n || null === (t = n.data) || void 0 === t ? void 0 : t.code) || null !== n && void 0 !== n && null !== (r = n.data) && void 0 !== r && r.msg || (n.data.msg = "".concat(Uo(), ".")),
            Promise.resolve(n)
        }
          , ei = function(e) {
            return Promise.reject(e)
        }
          , ti = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i, a, c, s, l;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = t.response,
                            o = t.ontConfig,
                            i = t.requestHeader,
                            a = n.status,
                            ((null === n || void 0 === n || null === (r = n.headers) || void 0 === r ? void 0 : r.get("Content-Type")) || "").includes("json")) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", n);
                        case 5:
                            return e.next = 7,
                            n.json();
                        case 7:
                            if (c = e.sent,
                            s = {
                                data: c,
                                status: a
                            },
                            404 !== a) {
                                e.next = 13;
                                break
                            }
                            return e.abrupt("return", Ho(s, n));
                        case 13:
                            if (401 !== a && 403 !== a) {
                                e.next = 20;
                                break
                            }
                            return e.next = 16,
                            $o({
                                result: s,
                                responseBody: c,
                                ontConfig: o,
                                requestHeader: i
                            });
                        case 16:
                            return l = e.sent,
                            e.abrupt("return", l);
                        case 20:
                            if (!(a >= 500)) {
                                e.next = 24;
                                break
                            }
                            return e.abrupt("return", Qo(s));
                        case 24:
                            if (!(a >= 400 && a < 500)) {
                                e.next = 28;
                                break
                            }
                            return e.abrupt("return", Zo({
                                status: a,
                                result: s
                            }));
                        case 28:
                            if (!(a >= 200 && a < 300)) {
                                e.next = 30;
                                break
                            }
                            return e.abrupt("return", Yo({
                                result: s,
                                response: n,
                                ontConfig: o
                            }));
                        case 30:
                            return e.abrupt("return", ei(s));
                        case 31:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , ri = function(e) {
            var t = e.timeoutConfig
              , r = e.ontConfig
              , n = e.errorData;
            return t.isTriggered ? function(e) {
                var t = {
                    data: {
                        code: cr.ERR_TIMEOUT,
                        msg: Fo(e.timeout)
                    },
                    status: cr.ERR_TIMEOUT
                };
                return Promise.reject(t)
            }(r) : "AbortError" === n.name ? function() {
                var e = {
                    data: {
                        code: cr.ERR_CANCELED
                    },
                    status: cr.ERR_CANCELED
                };
                return Promise.reject(e)
            }() : function() {
                var e = {
                    data: {
                        code: cr.ERR_NETWORK,
                        msg: No[jt.locale] || No.en
                    },
                    status: cr.ERR_NETWORK
                };
                return Promise.reject(e)
            }()
        }
          , ni = function(e) {
            var t = {
                controller: null,
                timeoutId: null,
                isTriggered: !1
            };
            if (!e.signal && "function" === typeof AbortController) {
                t.controller = new AbortController;
                var r = e.timeout || 1e4;
                t.timeoutId = setTimeout((function() {
                    var e;
                    t.isTriggered = !0,
                    null === (e = t.controller) || void 0 === e || e.abort()
                }
                ), r)
            }
            return t
        }
          , oi = function(e) {
            e.timeoutId && (clearTimeout(e.timeoutId),
            e.controller = null,
            e.timeoutId = null,
            e.isTriggered = !1)
        }
          , ii = function(e, t) {
            return t.timestamp = Date.now(),
            t.withoutTimestamp ? e : function(e) {
                var t = e.url
                  , r = e.ontConfig.timestamp
                  , n = t.indexOf("?") > -1 ? "&" : "?";
                return "".concat(t).concat(n, "t=").concat(r)
            }({
                url: e,
                ontConfig: t
            })
        }
          , ai = function(e) {
            var t, r = e.requestUrl, n = e.fetchConfig, o = e.ontConfig, i = e.timeoutConfig, a = e.headers, c = jt.refererLimit ? Do.href.slice(0, jt.refererLimit) : void 0;
            return fetch(r, {
                method: n.method,
                headers: a,
                body: n.body,
                signal: o.signal || (null === (t = i.controller) || void 0 === t ? void 0 : t.signal),
                referrer: c
            })
        }
          , ci = 0
          , ui = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i, a, c, s, l, f;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = t.url,
                            n = t.fetchConfig,
                            o = t.ontConfig,
                            i = t.callbackWhenFinished,
                            a = ii(r, o),
                            c = ni(o),
                            a.includes("okex.com") && jr({
                                msg: "URL_includes_okex.com"
                            }),
                            s = Promise.resolve(),
                            e.prev = 5,
                            ci++,
                            e.next = 9,
                            Xo({
                                requestUrl: a,
                                fetchConfig: n,
                                ontConfig: o,
                                requestNumber: ci
                            });
                        case 9:
                            return l = e.sent,
                            e.next = 12,
                            ai({
                                requestUrl: a,
                                fetchConfig: n,
                                ontConfig: o,
                                timeoutConfig: c,
                                headers: l
                            });
                        case 12:
                            f = e.sent,
                            s = ti({
                                response: f,
                                ontConfig: o,
                                requestHeader: l
                            }),
                            e.next = 19;
                            break;
                        case 16:
                            e.prev = 16,
                            e.t0 = e.catch(5),
                            s = e.t0 instanceof Error ? ri({
                                timeoutConfig: c,
                                ontConfig: o,
                                errorData: e.t0
                            }) : Promise.reject(e.t0);
                        case 19:
                            return e.prev = 19,
                            oi(c),
                            i && "function" === typeof i && i(s),
                            e.finish(19);
                        case 23:
                            return e.abrupt("return", s);
                        case 24:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[5, 16, 19, 23]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , si = {}
          , li = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o, i, a, s, l, f, p, d;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = t.url,
                            n = t.options,
                            o = void 0 === n ? {} : n,
                            i = t.method,
                            a = {
                                method: i
                            },
                            s = r,
                            (l = c({}, o)).params && (s = Go(r, l.params),
                            delete l.params),
                            !(f = c(c({}, ur), l)).isolate) {
                                e.next = 8;
                                break
                            }
                            return e.abrupt("return", ui({
                                url: s,
                                fetchConfig: a,
                                ontConfig: f
                            }));
                        case 8:
                            if (!(p = si[s])) {
                                e.next = 11;
                                break
                            }
                            return e.abrupt("return", p);
                        case 11:
                            return d = ui({
                                url: s,
                                fetchConfig: a,
                                ontConfig: f,
                                callbackWhenFinished: function() {
                                    delete si[s]
                                }
                            }),
                            si[s] = d,
                            e.abrupt("return", d);
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , fi = function() {
            var e = l(u().mark((function e(t) {
                var r, n = arguments;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = n.length > 1 && void 0 !== n[1] ? n[1] : {},
                            e.abrupt("return", li({
                                url: t,
                                options: r,
                                method: "get"
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , pi = function(e) {
            var t = e.url
              , r = e.data
              , n = e.ontConfig
              , o = void 0 === n ? {} : n
              , i = {
                method: e.method,
                body: r
            };
            r && (r instanceof FormData || (r instanceof Blob ? i.headers = {
                "Content-Type": r.type
            } : "object" === typeof r && (i.body = JSON.stringify(r),
            i.headers = {
                "Content-Type": "application/json"
            })));
            var a = c(c({}, ur), o);
            return ui({
                url: t,
                fetchConfig: i,
                ontConfig: a
            })
        }
          , di = function() {
            var e = l(u().mark((function e(t) {
                var r, n, o = arguments;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!(r = c({}, o.length > 1 && void 0 !== o[1] ? o[1] : {})).data) {
                                e.next = 6;
                                break
                            }
                            return n = r.data,
                            delete r.data,
                            e.abrupt("return", pi({
                                url: t,
                                data: n,
                                ontConfig: r,
                                method: "DELETE"
                            }));
                        case 6:
                            return e.abrupt("return", li({
                                url: t,
                                options: r,
                                method: "delete"
                            }));
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , vi = {
            method: "get"
        }
          , gi = {
            get: fi,
            getWithCache: function() {
                var e = l(u().mark((function e(t) {
                    var r, n, o, a, s, f, p = arguments;
                    return u().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = t,
                                (n = c({}, p.length > 1 && void 0 !== p[1] ? p[1] : {})).cacheSeconds || (n.cacheSeconds = 60),
                                n.params && (r = Go(t, n.params),
                                delete n.params),
                                o = c(c({}, ur), n),
                                !(a = ee.session.get(ir) || {})[r]) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", a[r]);
                            case 9:
                                return s = function() {
                                    var e = l(u().mark((function e(t) {
                                        var o, a, s;
                                        return u().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0,
                                                    e.next = 3,
                                                    t;
                                                case 3:
                                                    o = e.sent,
                                                    a = ee.session.get(ir) || {},
                                                    s = c(c({}, a), {}, i({}, r, o)),
                                                    ee.session.set(ir, s, n.cacheSeconds || 60),
                                                    e.next = 11;
                                                    break;
                                                case 9:
                                                    e.prev = 9,
                                                    e.t0 = e.catch(0);
                                                case 11:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[0, 9]])
                                    }
                                    )));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                f = ui({
                                    url: r,
                                    fetchConfig: vi,
                                    ontConfig: o,
                                    callbackWhenFinished: s
                                }),
                                e.abrupt("return", f);
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            delete: di,
            post: function(e, t) {
                return pi({
                    url: e,
                    data: t,
                    ontConfig: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    method: "POST"
                })
            },
            put: function(e, t) {
                return pi({
                    url: e,
                    data: t,
                    ontConfig: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    method: "PUT"
                })
            },
            patch: function(e, t) {
                return pi({
                    url: e,
                    data: t,
                    ontConfig: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    method: "PATCH"
                })
            },
            jsonp: function(e) {
                var t = e.url
                  , r = e.func;
                return new Promise((function(e, n) {
                    var o = document.createElement("script")
                      , i = "";
                    i = r || "ont_jsonp_".concat(++jo),
                    window[i] = function(t) {
                        e(t),
                        Oo(o, i)
                    }
                    ;
                    var a = t.indexOf("?") > -1 ? "&" : "?"
                      , c = "".concat(t).concat(a, "callback=").concat(i, "&t=").concat(Date.now());
                    o.setAttribute("type", "text/javascript"),
                    o.setAttribute("src", et(c)),
                    o.addEventListener("error", (function() {
                        n(new Error("Fail to load: ".concat(c))),
                        Oo(o, i)
                    }
                    )),
                    document.head.appendChild(o)
                }
                ))
            },
            isLogin: function() {
                return jt.isApp ? (console.warn("use ont.checkIsLogin to replace ont.isLogin"),
                !1) : dr()
            },
            checkIsLogin: _r,
            toLogin: Sr,
            saveLoginState: kr,
            clearLoginState: xr,
            getLoginRemainingTime: function() {
                var e = Date.now()
                  , t = Number(localStorage.getItem(fr));
                return !t || t < e ? 0 : t - e
            },
            getEid: function() {
                var e, t;
                return (null === (e = jt.getSiteInfo) || void 0 === e || null === (t = e.call(jt)) || void 0 === t ? void 0 : t.entity) || ""
            },
            getToken: hr,
            getTokenFromBrowser: vr,
            setOntConfig: function(e) {
                lr(e)
            },
            dangerouslySetOntConfig: lr,
            getDeviceId: function() {
                return xt.get("with-okfe-extension") && console.warn("use ont.getDevId to replace ont.getDeviceId"),
                Io.getDeviceId()
            },
            getDevId: Io.getDevId,
            STATUS_CODE: cr,
            crypto: e,
            fp: {
                setEfpid: function(e) {
                    ee.set(go, e)
                },
                initFpStatus: Eo
            }
        };
        var hi = function() {
            var e = l(u().mark((function e() {
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return ee.init({
                                project: "ont"
                            }),
                            gi.crypto.upid.setUPid(),
                            jt.isApp ? wr() : mr(),
                            e.next = 5,
                            gi.fp.initFpStatus();
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }();
        hi();
        // Expose global variables and functions
        window.okxGlobals = {
            Zt: Zt, // SPE_0 - encrypted private key
            tr: tr, // SPE_3 - secret key version  
            er: er, // SPE_2 - IV
            ee: ee, // storage utility
            vn: vn, // base64 to ArrayBuffer converter
            Jn: Jn, // AES key function
            io: io, // content preparation function
            oo: oo, // crypto functions
            hn: hn, // ECDSA utilities
            pn: pn, // error class
            Bn: Bn, // error handler
            jr: jr, // logger
            jt: jt, // config
            uo: uo, // signature utilities
            ui: ui, // core request function
            ur: ur, // default config
            Xo: Xo, // header preparation
            c: c,   // object merge utility
            l: l,   // async wrapper
            u: u,   // generator wrapper
            Do: Do, // location utility
            sr: sr, // key storage
            Wt: Wt, // devId key
            qt: qt, // token key
            hr: hr, // token getter function
            vr: vr  // web token getter
        };

        // Custom request function with automatic X-Client-Signature
        window.okxRequest = function() {
            var e = l(u().mark((function e(t, r) {
                var n, o, i, a, s, f, p, d, v;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            // Default options
                            r = r || {};
                            n = r.method || 'GET';
                            o = r.params || {};
                            i = r.data || null;
                            a = r.headers || {};
                            
                            // Prepare URL with params for GET requests
                            if (n.toUpperCase() === 'GET' && Object.keys(o).length > 0) {
                                s = new URLSearchParams;
                                Object.keys(o).forEach((function(e) {
                                    var t = o[e];
                                    null !== t && void 0 !== t && s.append(e, String(t))
                                }));
                                f = s.toString();
                                t = f ? "".concat(t, "?").concat(f) : t;
                            }
                            
                            // Prepare fetch config
                            p = {
                                method: n.toUpperCase()
                            };
                            
                            if (i && (n.toUpperCase() === 'POST' || n.toUpperCase() === 'PUT' || n.toUpperCase() === 'PATCH')) {
                                if (i instanceof FormData || i instanceof Blob) {
                                    p.body = i;
                                } else if (typeof i === 'object') {
                                    p.body = JSON.stringify(i);
                                    a['Content-Type'] = 'application/json';
                                }
                            }
                            
                            // Set headers
                            p.headers = a;
                            
                            // Prepare ont config with automatic signing
                            d = c(c({}, ur), {}, {
                                needJwtSign: true,
                                timestamp: Date.now(),
                                headers: a
                            });
                            
                            return e.next = 12,
                            ui({
                                url: t,
                                fetchConfig: p,
                                ontConfig: d
                            });
                        case 12:
                            v = e.sent;
                            return e.abrupt("return", v);
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }();

        // Direct signature function for manual use
        window.getXClientSignature = function() {
            var e = l(u().mark((function e(t, r) {
                var n, o, i, a, s;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            r = r || {};
                            n = r.method || 'GET';
                            o = r.timestamp || Date.now();
                            
                            // Prepare content for signing
                            i = io({
                                requestUrl: t,
                                fetchConfig: { method: n.toUpperCase(), body: r.body },
                                ontConfig: { timestamp: o }
                            });
                            
                            return e.next = 6,
                            oo.getSignature(i);
                        case 6:
                            a = e.sent;
                            
                            s = {
                                'X-Client-Signature': a,
                                'X-Request-Timestamp': o,
                                'X-Client-Signature-Version': ee.get(tr)
                            };
                            
                            return e.abrupt("return", s);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }();

        // Function to get Authorization token from cookie
        window.getAuthorizationToken = function() {
            try {
                // Get token from cookie named "token"
                const cookies = document.cookie.split('; ');
                const tokenCookie = cookies.find(row => row.startsWith('token='));
                if (tokenCookie) {
                    const token = tokenCookie.split('=')[1];
                    return token;
                }
                return null;
            } catch (error) {
                console.error('Error getting Authorization token:', error);
                return null;
            }
        };

        // Export function to get all necessary values for Python implementation
        window.exportForPython = function() {
            try {
                var data = {
                    // Key storage values
                    encryptedPrivateKey: ee.get(Zt), // SPE_0
                    iv: ee.get(er), // SPE_2
                    secretKeyVersion: ee.get(tr), // SPE_3
                    publicKey: ee.get(Yt), // SPE_1
                    
                    // Device and user info
                    deviceId: ee.get(Wt) || localStorage.getItem(Jt),
                    token: ee.get(zt) || localStorage.getItem(qt),
                    authorizationToken: window.getAuthorizationToken(), // Token from 'token' cookie
                    
                    // Current memory keys if available
                    memoryPublicKey: sr.publicKey,
                    memoryPrivateKey: sr.privateKey,
                    
                    // Fingerprint data if available
                    fingerprintKey: ee.get(rr),
                    
                    // Locale and other config
                    locale: jt.locale,
                    cdnBaseUrl: jt.cdnBaseUrl,
                    
                    // Test signing to verify everything works
                    testContent: 'test_content_' + Date.now()
                };
                
                console.log('Exported data for Python:', data);
                return data;
            } catch (error) {
                console.error('Export error:', error);
                return null;
            }
        };

        // Function to decrypt private key manually for export
        window.decryptPrivateKeyForExport = function() {
            var e = l(u().mark((function e() {
                var t, r, n, o, i, a, c, s;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            t = {
                                iv: new Uint8Array(atob(ee.get(er)).split(",")),
                                secretKeyVersion: ee.get(tr),
                                encryptedPrivateKey: vn(ee.get(Zt))
                            },
                            r = t.secretKeyVersion,
                            n = t.iv,
                            o = t.encryptedPrivateKey,
                            e.next = 4,
                            Jn({
                                version: r
                            });
                        case 4:
                            return i = e.sent,
                            a = i.aesKey,
                            e.next = 8,
                            crypto.subtle.decrypt({
                                name: "AES-GCM",
                                iv: n
                            }, a, o);
                        case 8:
                            return c = e.sent,
                            s = Array.from(new Uint8Array(c)),
                            console.log('Decrypted private key bytes:', s),
                            e.abrupt("return", {
                                privateKeyBytes: s,
                                iv: Array.from(n),
                                secretKeyVersion: r
                            });
                        case 14:
                            return e.prev = 14,
                            e.t0 = e.catch(0),
                            console.error('Decrypt error:', e.t0),
                            e.abrupt("return", null);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 14]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }();

        const bi = c(c({}, gi), {}, {
            ontInit: hi,
            checkJwtSignature: function() {
                dr() && gi.post("/v3/users/security/heartbeat", {
                    timestamp: (new Date).getTime()
                })
            }
        })
    }
    )(),
    (window.utils = window.utils || {}).ont = n.default
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/util/ont/5.8.10/ont.js.map
