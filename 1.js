/**!
 * Tebex.js - MIT License
 * 
 * Copyright (c) 2024 Tebex Ltd - https://js.tebex.io
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var Tebex = function(e) {
    "use strict";

    function n(e, n, t, r) {
        if ("a" === t && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof n ? e !== n || !r : !n.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === t ? r : "a" === t ? r.call(e) : r ? r.value : n.get(e)
    }

    function t(e, n, t, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof n ? e !== n || !o : !n.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? o.call(e, t) : o ? o.value = t : n.set(e, t), t
    }
    "function" == typeof SuppressedError && SuppressedError;
    var r = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    var a = o,
        u = i;

    function s(e) {
        if (a === setTimeout) return setTimeout(e, 0);
        if ((a === o || !a) && setTimeout) return a = setTimeout, setTimeout(e, 0);
        try {
            return a(e, 0)
        } catch (n) {
            try {
                return a.call(null, e, 0)
            } catch (n) {
                return a.call(this, e, 0)
            }
        }
    }
    "function" == typeof r.setTimeout && (a = setTimeout), "function" == typeof r.clearTimeout && (u = clearTimeout);
    var c, f = [],
        d = !1,
        l = -1;

    function h() {
        d && c && (d = !1, c.length ? f = c.concat(f) : l = -1, f.length && p())
    }

    function p() {
        if (!d) {
            var e = s(h);
            d = !0;
            for (var n = f.length; n;) {
                for (c = f, f = []; ++l < n;) c && c[l].run();
                l = -1, n = f.length
            }
            c = null, d = !1,
                function(e) {
                    if (u === clearTimeout) return clearTimeout(e);
                    if ((u === i || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);
                    try {
                        return u(e)
                    } catch (n) {
                        try {
                            return u.call(null, e)
                        } catch (n) {
                            return u.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function m(e, n) {
        this.fun = e, this.array = n
    }
    m.prototype.run = function() {
        this.fun.apply(null, this.array)
    };

    function w() {}
    var v = w,
        y = w,
        g = w,
        b = w,
        E = w,
        _ = w,
        x = w;
    var P = r.performance || {},
        O = P.now || P.mozNow || P.msNow || P.oNow || P.webkitNow || function() {
            return (new Date).getTime()
        };
    var C = new Date;
    var S = {
        nextTick: function(e) {
            var n = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
            f.push(new m(e, n)), 1 !== f.length || d || s(p)
        },
        title: "browser",
        browser: !0,
        env: {},
        argv: [],
        version: "",
        versions: {},
        on: v,
        addListener: y,
        once: g,
        off: b,
        removeListener: E,
        removeAllListeners: _,
        emit: x,
        binding: function(e) {
            throw new Error("process.binding is not supported")
        },
        cwd: function() {
            return "/"
        },
        chdir: function(e) {
            throw new Error("process.chdir is not supported")
        },
        umask: function() {
            return 0
        },
        hrtime: function(e) {
            var n = .001 * O.call(P),
                t = Math.floor(n),
                r = Math.floor(n % 1 * 1e9);
            return e && (t -= e[0], (r -= e[1]) < 0 && (t--, r += 1e9)), [t, r]
        },
        platform: "browser",
        release: {},
        config: {},
        uptime: function() {
            return (new Date - C) / 1e3
        }
    };
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

    function A(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var T = {
        exports: {}
    };
    const R = (e = "") => {
            console.warn("Tebex.js warning" + (e ? ": " : "") + e.trim())
        },
        D = (e, n = "assert failed") => {
            e || ((e = "") => {
                throw new Error("Tebex.js error" + (e ? ": " : "") + e.trim())
            })(n)
        },
        W = e => void 0 === e || null == e,
        N = e => "string" == typeof e,
        k = e => "string" == typeof e && "" !== e,
        j = e => "boolean" == typeof e,
        I = e => Array.isArray(e),
        z = e => "object" == typeof e && null !== e && !I(e),
        M = () => "undefined" != typeof window && void 0 !== window.document,
        F = (e, n) => {
            if (!M()) return !1;
            if (!window.matchMedia) return !0;
            return window.matchMedia(`(max-width: ${e}) or (max-height: ${n})`).matches
        },
        U = e => document.createElement(e),
        L = (e, n) => e.getAttribute(n),
        B = (e, n, t) => {
            const r = n.replace(/([A-Z])/g, (e => `-${e[0].toLowerCase()}`));
            !0 === t ? e.setAttribute(r, "") : !1 === t || null == t ? e.removeAttribute(r) : e.setAttribute(r, t + "")
        },
        q = e => document.contains(e) || (e => {
            const n = e.getRootNode();
            return n.nodeType === Node.DOCUMENT_FRAGMENT_NODE && void 0 !== n.host
        })(e),
        Y = (e, n, ...t) => {
            const r = U(e);
            if (z(n))
                for (let e in n) B(r, e, n[e]);
            for (let e of t.flat()) r.append(e);
            return r
        },
        H = async () => new Promise((e => {
            requestAnimationFrame((() => requestAnimationFrame((() => e()))))
        })),
        J = async e => new Promise((n => {
            const t = getComputedStyle(e);
            t.transition || n(), 0 === parseFloat(t.transitionDuration) && n();
            const r = () => {
                e.removeEventListener("transitionend", r), e.removeEventListener("transitioncancel", r), n()
            };
            e.addEventListener("transitionend", r), e.addEventListener("transitioncancel", r)
        }));
    var $ = M() ? window : {
            document: {
                body: {}
            }
        },
        Z = [],
        V = [],
        G = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        X = !1;

    function K() {
        X = !0;
        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0; n < 64; ++n) Z[n] = e[n], V[e.charCodeAt(n)] = n;
        V["-".charCodeAt(0)] = 62, V["_".charCodeAt(0)] = 63
    }

    function Q(e, n, t) {
        for (var r, o, i = [], a = n; a < t; a += 3) r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], i.push(Z[(o = r) >> 18 & 63] + Z[o >> 12 & 63] + Z[o >> 6 & 63] + Z[63 & o]);
        return i.join("")
    }

    function ee(e) {
        var n;
        X || K();
        for (var t = e.length, r = t % 3, o = "", i = [], a = 16383, u = 0, s = t - r; u < s; u += a) i.push(Q(e, u, u + a > s ? s : u + a));
        return 1 === r ? (n = e[t - 1], o += Z[n >> 2], o += Z[n << 4 & 63], o += "==") : 2 === r && (n = (e[t - 2] << 8) + e[t - 1], o += Z[n >> 10], o += Z[n >> 4 & 63], o += Z[n << 2 & 63], o += "="), i.push(o), i.join("")
    }

    function ne(e, n, t, r, o) {
        var i, a, u = 8 * o - r - 1,
            s = (1 << u) - 1,
            c = s >> 1,
            f = -7,
            d = t ? o - 1 : 0,
            l = t ? -1 : 1,
            h = e[n + d];
        for (d += l, i = h & (1 << -f) - 1, h >>= -f, f += u; f > 0; i = 256 * i + e[n + d], d += l, f -= 8);
        for (a = i & (1 << -f) - 1, i >>= -f, f += r; f > 0; a = 256 * a + e[n + d], d += l, f -= 8);
        if (0 === i) i = 1 - c;
        else {
            if (i === s) return a ? NaN : 1 / 0 * (h ? -1 : 1);
            a += Math.pow(2, r), i -= c
        }
        return (h ? -1 : 1) * a * Math.pow(2, i - r)
    }

    function te(e, n, t, r, o, i) {
        var a, u, s, c = 8 * i - o - 1,
            f = (1 << c) - 1,
            d = f >> 1,
            l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = r ? 0 : i - 1,
            p = r ? 1 : -1,
            m = n < 0 || 0 === n && 1 / n < 0 ? 1 : 0;
        for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (u = isNaN(n) ? 1 : 0, a = f) : (a = Math.floor(Math.log(n) / Math.LN2), n * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (n += a + d >= 1 ? l / s : l * Math.pow(2, 1 - d)) * s >= 2 && (a++, s /= 2), a + d >= f ? (u = 0, a = f) : a + d >= 1 ? (u = (n * s - 1) * Math.pow(2, o), a += d) : (u = n * Math.pow(2, d - 1) * Math.pow(2, o), a = 0)); o >= 8; e[t + h] = 255 & u, h += p, u /= 256, o -= 8);
        for (a = a << o | u, c += o; c > 0; e[t + h] = 255 & a, h += p, a /= 256, c -= 8);
        e[t + h - p] |= 128 * m
    }
    var re = {}.toString,
        oe = Array.isArray || function(e) {
            return "[object Array]" == re.call(e)
        };

    function ie() {
        return ue.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }

    function ae(e, n) {
        if (ie() < n) throw new RangeError("Invalid typed array length");
        return ue.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(n)).__proto__ = ue.prototype : (null === e && (e = new ue(n)), e.length = n), e
    }

    function ue(e, n, t) {
        if (!(ue.TYPED_ARRAY_SUPPORT || this instanceof ue)) return new ue(e, n, t);
        if ("number" == typeof e) {
            if ("string" == typeof n) throw new Error("If encoding is specified then the first argument must be a string");
            return fe(this, e)
        }
        return se(this, e, n, t)
    }

    function se(e, n, t, r) {
        if ("number" == typeof n) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && n instanceof ArrayBuffer ? function(e, n, t, r) {
            if (n.byteLength, t < 0 || n.byteLength < t) throw new RangeError("'offset' is out of bounds");
            if (n.byteLength < t + (r || 0)) throw new RangeError("'length' is out of bounds");
            n = void 0 === t && void 0 === r ? new Uint8Array(n) : void 0 === r ? new Uint8Array(n, t) : new Uint8Array(n, t, r);
            ue.TYPED_ARRAY_SUPPORT ? (e = n).__proto__ = ue.prototype : e = de(e, n);
            return e
        }(e, n, t, r) : "string" == typeof n ? function(e, n, t) {
            "string" == typeof t && "" !== t || (t = "utf8");
            if (!ue.isEncoding(t)) throw new TypeError('"encoding" must be a valid string encoding');
            var r = 0 | pe(n, t);
            e = ae(e, r);
            var o = e.write(n, t);
            o !== r && (e = e.slice(0, o));
            return e
        }(e, n, t) : function(e, n) {
            if (he(n)) {
                var t = 0 | le(n.length);
                return 0 === (e = ae(e, t)).length || n.copy(e, 0, 0, t), e
            }
            if (n) {
                if ("undefined" != typeof ArrayBuffer && n.buffer instanceof ArrayBuffer || "length" in n) return "number" != typeof n.length || (r = n.length) != r ? ae(e, 0) : de(e, n);
                if ("Buffer" === n.type && oe(n.data)) return de(e, n.data)
            }
            var r;
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }(e, n)
    }

    function ce(e) {
        if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative')
    }

    function fe(e, n) {
        if (ce(n), e = ae(e, n < 0 ? 0 : 0 | le(n)), !ue.TYPED_ARRAY_SUPPORT)
            for (var t = 0; t < n; ++t) e[t] = 0;
        return e
    }

    function de(e, n) {
        var t = n.length < 0 ? 0 : 0 | le(n.length);
        e = ae(e, t);
        for (var r = 0; r < t; r += 1) e[r] = 255 & n[r];
        return e
    }

    function le(e) {
        if (e >= ie()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ie().toString(16) + " bytes");
        return 0 | e
    }

    function he(e) {
        return !(null == e || !e._isBuffer)
    }

    function pe(e, n) {
        if (he(e)) return e.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var t = e.length;
        if (0 === t) return 0;
        for (var r = !1;;) switch (n) {
            case "ascii":
            case "latin1":
            case "binary":
                return t;
            case "utf8":
            case "utf-8":
            case void 0:
                return Le(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * t;
            case "hex":
                return t >>> 1;
            case "base64":
                return Be(e).length;
            default:
                if (r) return Le(e).length;
                n = ("" + n).toLowerCase(), r = !0
        }
    }

    function me(e, n, t) {
        var r = !1;
        if ((void 0 === n || n < 0) && (n = 0), n > this.length) return "";
        if ((void 0 === t || t > this.length) && (t = this.length), t <= 0) return "";
        if ((t >>>= 0) <= (n >>>= 0)) return "";
        for (e || (e = "utf8");;) switch (e) {
            case "hex":
                return Re(this, n, t);
            case "utf8":
            case "utf-8":
                return Ce(this, n, t);
            case "ascii":
                return Ae(this, n, t);
            case "latin1":
            case "binary":
                return Te(this, n, t);
            case "base64":
                return Oe(this, n, t);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return De(this, n, t);
            default:
                if (r) throw new TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), r = !0
        }
    }

    function we(e, n, t) {
        var r = e[n];
        e[n] = e[t], e[t] = r
    }

    function ve(e, n, t, r, o) {
        if (0 === e.length) return -1;
        if ("string" == typeof t ? (r = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, isNaN(t) && (t = o ? 0 : e.length - 1), t < 0 && (t = e.length + t), t >= e.length) {
            if (o) return -1;
            t = e.length - 1
        } else if (t < 0) {
            if (!o) return -1;
            t = 0
        }
        if ("string" == typeof n && (n = ue.from(n, r)), he(n)) return 0 === n.length ? -1 : ye(e, n, t, r, o);
        if ("number" == typeof n) return n &= 255, ue.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, n, t) : Uint8Array.prototype.lastIndexOf.call(e, n, t) : ye(e, [n], t, r, o);
        throw new TypeError("val must be string, number or Buffer")
    }

    function ye(e, n, t, r, o) {
        var i, a = 1,
            u = e.length,
            s = n.length;
        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
            if (e.length < 2 || n.length < 2) return -1;
            a = 2, u /= 2, s /= 2, t /= 2
        }

        function c(e, n) {
            return 1 === a ? e[n] : e.readUInt16BE(n * a)
        }
        if (o) {
            var f = -1;
            for (i = t; i < u; i++)
                if (c(e, i) === c(n, -1 === f ? 0 : i - f)) {
                    if (-1 === f && (f = i), i - f + 1 === s) return f * a
                } else -1 !== f && (i -= i - f), f = -1
        } else
            for (t + s > u && (t = u - s), i = t; i >= 0; i--) {
                for (var d = !0, l = 0; l < s; l++)
                    if (c(e, i + l) !== c(n, l)) {
                        d = !1;
                        break
                    }
                if (d) return i
            }
        return -1
    }

    function ge(e, n, t, r) {
        t = Number(t) || 0;
        var o = e.length - t;
        r ? (r = Number(r)) > o && (r = o) : r = o;
        var i = n.length;
        if (i % 2 != 0) throw new TypeError("Invalid hex string");
        r > i / 2 && (r = i / 2);
        for (var a = 0; a < r; ++a) {
            var u = parseInt(n.substr(2 * a, 2), 16);
            if (isNaN(u)) return a;
            e[t + a] = u
        }
        return a
    }

    function be(e, n, t, r) {
        return qe(Le(n, e.length - t), e, t, r)
    }

    function Ee(e, n, t, r) {
        return qe(function(e) {
            for (var n = [], t = 0; t < e.length; ++t) n.push(255 & e.charCodeAt(t));
            return n
        }(n), e, t, r)
    }

    function _e(e, n, t, r) {
        return Ee(e, n, t, r)
    }

    function xe(e, n, t, r) {
        return qe(Be(n), e, t, r)
    }

    function Pe(e, n, t, r) {
        return qe(function(e, n) {
            for (var t, r, o, i = [], a = 0; a < e.length && !((n -= 2) < 0); ++a) r = (t = e.charCodeAt(a)) >> 8, o = t % 256, i.push(o), i.push(r);
            return i
        }(n, e.length - t), e, t, r)
    }

    function Oe(e, n, t) {
        return 0 === n && t === e.length ? ee(e) : ee(e.slice(n, t))
    }

    function Ce(e, n, t) {
        t = Math.min(e.length, t);
        for (var r = [], o = n; o < t;) {
            var i, a, u, s, c = e[o],
                f = null,
                d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (o + d <= t) switch (d) {
                case 1:
                    c < 128 && (f = c);
                    break;
                case 2:
                    128 == (192 & (i = e[o + 1])) && (s = (31 & c) << 6 | 63 & i) > 127 && (f = s);
                    break;
                case 3:
                    i = e[o + 1], a = e[o + 2], 128 == (192 & i) && 128 == (192 & a) && (s = (15 & c) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (f = s);
                    break;
                case 4:
                    i = e[o + 1], a = e[o + 2], u = e[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & u) && (s = (15 & c) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & u) > 65535 && s < 1114112 && (f = s)
            }
            null === f ? (f = 65533, d = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), o += d
        }
        return function(e) {
            var n = e.length;
            if (n <= Se) return String.fromCharCode.apply(String, e);
            var t = "",
                r = 0;
            for (; r < n;) t += String.fromCharCode.apply(String, e.slice(r, r += Se));
            return t
        }(r)
    }
    ue.TYPED_ARRAY_SUPPORT = void 0 === r.TYPED_ARRAY_SUPPORT || r.TYPED_ARRAY_SUPPORT, ie(), ue.poolSize = 8192, ue._augment = function(e) {
        return e.__proto__ = ue.prototype, e
    }, ue.from = function(e, n, t) {
        return se(null, e, n, t)
    }, ue.TYPED_ARRAY_SUPPORT && (ue.prototype.__proto__ = Uint8Array.prototype, ue.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && ue[Symbol.species]), ue.alloc = function(e, n, t) {
        return function(e, n, t, r) {
            return ce(n), n <= 0 ? ae(e, n) : void 0 !== t ? "string" == typeof r ? ae(e, n).fill(t, r) : ae(e, n).fill(t) : ae(e, n)
        }(null, e, n, t)
    }, ue.allocUnsafe = function(e) {
        return fe(null, e)
    }, ue.allocUnsafeSlow = function(e) {
        return fe(null, e)
    }, ue.isBuffer = function(e) {
        return null != e && (!!e._isBuffer || Ye(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && Ye(e.slice(0, 0))
        }(e))
    }, ue.compare = function(e, n) {
        if (!he(e) || !he(n)) throw new TypeError("Arguments must be Buffers");
        if (e === n) return 0;
        for (var t = e.length, r = n.length, o = 0, i = Math.min(t, r); o < i; ++o)
            if (e[o] !== n[o]) {
                t = e[o], r = n[o];
                break
            }
        return t < r ? -1 : r < t ? 1 : 0
    }, ue.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    }, ue.concat = function(e, n) {
        if (!oe(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return ue.alloc(0);
        var t;
        if (void 0 === n)
            for (n = 0, t = 0; t < e.length; ++t) n += e[t].length;
        var r = ue.allocUnsafe(n),
            o = 0;
        for (t = 0; t < e.length; ++t) {
            var i = e[t];
            if (!he(i)) throw new TypeError('"list" argument must be an Array of Buffers');
            i.copy(r, o), o += i.length
        }
        return r
    }, ue.byteLength = pe, ue.prototype._isBuffer = !0, ue.prototype.swap16 = function() {
        var e = this.length;
        if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var n = 0; n < e; n += 2) we(this, n, n + 1);
        return this
    }, ue.prototype.swap32 = function() {
        var e = this.length;
        if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var n = 0; n < e; n += 4) we(this, n, n + 3), we(this, n + 1, n + 2);
        return this
    }, ue.prototype.swap64 = function() {
        var e = this.length;
        if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var n = 0; n < e; n += 8) we(this, n, n + 7), we(this, n + 1, n + 6), we(this, n + 2, n + 5), we(this, n + 3, n + 4);
        return this
    }, ue.prototype.toString = function() {
        var e = 0 | this.length;
        return 0 === e ? "" : 0 === arguments.length ? Ce(this, 0, e) : me.apply(this, arguments)
    }, ue.prototype.equals = function(e) {
        if (!he(e)) throw new TypeError("Argument must be a Buffer");
        return this === e || 0 === ue.compare(this, e)
    }, ue.prototype.inspect = function() {
        var e = "";
        return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">"
    }, ue.prototype.compare = function(e, n, t, r, o) {
        if (!he(e)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === n && (n = 0), void 0 === t && (t = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), n < 0 || t > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
        if (r >= o && n >= t) return 0;
        if (r >= o) return -1;
        if (n >= t) return 1;
        if (this === e) return 0;
        for (var i = (o >>>= 0) - (r >>>= 0), a = (t >>>= 0) - (n >>>= 0), u = Math.min(i, a), s = this.slice(r, o), c = e.slice(n, t), f = 0; f < u; ++f)
            if (s[f] !== c[f]) {
                i = s[f], a = c[f];
                break
            }
        return i < a ? -1 : a < i ? 1 : 0
    }, ue.prototype.includes = function(e, n, t) {
        return -1 !== this.indexOf(e, n, t)
    }, ue.prototype.indexOf = function(e, n, t) {
        return ve(this, e, n, t, !0)
    }, ue.prototype.lastIndexOf = function(e, n, t) {
        return ve(this, e, n, t, !1)
    }, ue.prototype.write = function(e, n, t, r) {
        if (void 0 === n) r = "utf8", t = this.length, n = 0;
        else if (void 0 === t && "string" == typeof n) r = n, t = this.length, n = 0;
        else {
            if (!isFinite(n)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            n |= 0, isFinite(t) ? (t |= 0, void 0 === r && (r = "utf8")) : (r = t, t = void 0)
        }
        var o = this.length - n;
        if ((void 0 === t || t > o) && (t = o), e.length > 0 && (t < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");
        for (var i = !1;;) switch (r) {
            case "hex":
                return ge(this, e, n, t);
            case "utf8":
            case "utf-8":
                return be(this, e, n, t);
            case "ascii":
                return Ee(this, e, n, t);
            case "latin1":
            case "binary":
                return _e(this, e, n, t);
            case "base64":
                return xe(this, e, n, t);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Pe(this, e, n, t);
            default:
                if (i) throw new TypeError("Unknown encoding: " + r);
                r = ("" + r).toLowerCase(), i = !0
        }
    }, ue.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };
    var Se = 4096;

    function Ae(e, n, t) {
        var r = "";
        t = Math.min(e.length, t);
        for (var o = n; o < t; ++o) r += String.fromCharCode(127 & e[o]);
        return r
    }

    function Te(e, n, t) {
        var r = "";
        t = Math.min(e.length, t);
        for (var o = n; o < t; ++o) r += String.fromCharCode(e[o]);
        return r
    }

    function Re(e, n, t) {
        var r = e.length;
        (!n || n < 0) && (n = 0), (!t || t < 0 || t > r) && (t = r);
        for (var o = "", i = n; i < t; ++i) o += Ue(e[i]);
        return o
    }

    function De(e, n, t) {
        for (var r = e.slice(n, t), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
        return o
    }

    function We(e, n, t) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + n > t) throw new RangeError("Trying to access beyond buffer length")
    }

    function Ne(e, n, t, r, o, i) {
        if (!he(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (n > o || n < i) throw new RangeError('"value" argument is out of bounds');
        if (t + r > e.length) throw new RangeError("Index out of range")
    }

    function ke(e, n, t, r) {
        n < 0 && (n = 65535 + n + 1);
        for (var o = 0, i = Math.min(e.length - t, 2); o < i; ++o) e[t + o] = (n & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
    }

    function je(e, n, t, r) {
        n < 0 && (n = 4294967295 + n + 1);
        for (var o = 0, i = Math.min(e.length - t, 4); o < i; ++o) e[t + o] = n >>> 8 * (r ? o : 3 - o) & 255
    }

    function Ie(e, n, t, r, o, i) {
        if (t + r > e.length) throw new RangeError("Index out of range");
        if (t < 0) throw new RangeError("Index out of range")
    }

    function ze(e, n, t, r, o) {
        return o || Ie(e, 0, t, 4), te(e, n, t, r, 23, 4), t + 4
    }

    function Me(e, n, t, r, o) {
        return o || Ie(e, 0, t, 8), te(e, n, t, r, 52, 8), t + 8
    }
    ue.prototype.slice = function(e, n) {
        var t, r = this.length;
        if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), n < e && (n = e), ue.TYPED_ARRAY_SUPPORT)(t = this.subarray(e, n)).__proto__ = ue.prototype;
        else {
            var o = n - e;
            t = new ue(o, void 0);
            for (var i = 0; i < o; ++i) t[i] = this[i + e]
        }
        return t
    }, ue.prototype.readUIntLE = function(e, n, t) {
        e |= 0, n |= 0, t || We(e, n, this.length);
        for (var r = this[e], o = 1, i = 0; ++i < n && (o *= 256);) r += this[e + i] * o;
        return r
    }, ue.prototype.readUIntBE = function(e, n, t) {
        e |= 0, n |= 0, t || We(e, n, this.length);
        for (var r = this[e + --n], o = 1; n > 0 && (o *= 256);) r += this[e + --n] * o;
        return r
    }, ue.prototype.readUInt8 = function(e, n) {
        return n || We(e, 1, this.length), this[e]
    }, ue.prototype.readUInt16LE = function(e, n) {
        return n || We(e, 2, this.length), this[e] | this[e + 1] << 8
    }, ue.prototype.readUInt16BE = function(e, n) {
        return n || We(e, 2, this.length), this[e] << 8 | this[e + 1]
    }, ue.prototype.readUInt32LE = function(e, n) {
        return n || We(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
    }, ue.prototype.readUInt32BE = function(e, n) {
        return n || We(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }, ue.prototype.readIntLE = function(e, n, t) {
        e |= 0, n |= 0, t || We(e, n, this.length);
        for (var r = this[e], o = 1, i = 0; ++i < n && (o *= 256);) r += this[e + i] * o;
        return r >= (o *= 128) && (r -= Math.pow(2, 8 * n)), r
    }, ue.prototype.readIntBE = function(e, n, t) {
        e |= 0, n |= 0, t || We(e, n, this.length);
        for (var r = n, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o;
        return i >= (o *= 128) && (i -= Math.pow(2, 8 * n)), i
    }, ue.prototype.readInt8 = function(e, n) {
        return n || We(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
    }, ue.prototype.readInt16LE = function(e, n) {
        n || We(e, 2, this.length);
        var t = this[e] | this[e + 1] << 8;
        return 32768 & t ? 4294901760 | t : t
    }, ue.prototype.readInt16BE = function(e, n) {
        n || We(e, 2, this.length);
        var t = this[e + 1] | this[e] << 8;
        return 32768 & t ? 4294901760 | t : t
    }, ue.prototype.readInt32LE = function(e, n) {
        return n || We(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }, ue.prototype.readInt32BE = function(e, n) {
        return n || We(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }, ue.prototype.readFloatLE = function(e, n) {
        return n || We(e, 4, this.length), ne(this, e, !0, 23, 4)
    }, ue.prototype.readFloatBE = function(e, n) {
        return n || We(e, 4, this.length), ne(this, e, !1, 23, 4)
    }, ue.prototype.readDoubleLE = function(e, n) {
        return n || We(e, 8, this.length), ne(this, e, !0, 52, 8)
    }, ue.prototype.readDoubleBE = function(e, n) {
        return n || We(e, 8, this.length), ne(this, e, !1, 52, 8)
    }, ue.prototype.writeUIntLE = function(e, n, t, r) {
        (e = +e, n |= 0, t |= 0, r) || Ne(this, e, n, t, Math.pow(2, 8 * t) - 1, 0);
        var o = 1,
            i = 0;
        for (this[n] = 255 & e; ++i < t && (o *= 256);) this[n + i] = e / o & 255;
        return n + t
    }, ue.prototype.writeUIntBE = function(e, n, t, r) {
        (e = +e, n |= 0, t |= 0, r) || Ne(this, e, n, t, Math.pow(2, 8 * t) - 1, 0);
        var o = t - 1,
            i = 1;
        for (this[n + o] = 255 & e; --o >= 0 && (i *= 256);) this[n + o] = e / i & 255;
        return n + t
    }, ue.prototype.writeUInt8 = function(e, n, t) {
        return e = +e, n |= 0, t || Ne(this, e, n, 1, 255, 0), ue.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[n] = 255 & e, n + 1
    }, ue.prototype.writeUInt16LE = function(e, n, t) {
        return e = +e, n |= 0, t || Ne(this, e, n, 2, 65535, 0), ue.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & e, this[n + 1] = e >>> 8) : ke(this, e, n, !0), n + 2
    }, ue.prototype.writeUInt16BE = function(e, n, t) {
        return e = +e, n |= 0, t || Ne(this, e, n, 2, 65535, 0), ue.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 8, this[n + 1] = 255 & e) : ke(this, e, n, !1), n + 2
    }, ue.prototype.writeUInt32LE = function(e, n, t) {
        return e = +e, n |= 0, t || Ne(this, e, n, 4, 4294967295, 0), ue.TYPED_ARRAY_SUPPORT ? (this[n + 3] = e >>> 24, this[n + 2] = e >>> 16, this[n + 1] = e >>> 8, this[n] = 255 & e) : je(this, e, n, !0), n + 4
    }, ue.prototype.writeUInt32BE = function(e, n, t) {
        return e = +e, n |= 0, t || Ne(this, e, n, 4, 4294967295, 0), ue.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 24, this[n + 1] = e >>> 16, this[n + 2] = e >>> 8, this[n + 3] = 255 & e) : je(this, e, n, !1), n + 4
    }, ue.prototype.writeIntLE = function(e, n, t, r) {
        if (e = +e, n |= 0, !r) {
            var o = Math.pow(2, 8 * t - 1);
            Ne(this, e, n, t, o - 1, -o)
        }
        var i = 0,
            a = 1,
            u = 0;
        for (this[n] = 255 & e; ++i < t && (a *= 256);) e < 0 && 0 === u && 0 !== this[n + i - 1] && (u = 1), this[n + i] = (e / a >> 0) - u & 255;
        return n + t
    }, ue.prototype.writeIntBE = function(e, n, t, r) {
        if (e = +e, n |= 0, !r) {
            var o = Math.pow(2, 8 * t - 1);
            Ne(this, e, n, t, o - 1, -o)
        }
        var i = t - 1,
            a = 1,
            u = 0;
        for (this[n + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === u && 0 !== this[n + i + 1] && (u = 1), this[n + i] = (e / a >> 0) - u & 255;
        return n + t
    }, ue.prototype.writeInt8 = function(e, n, t) {
        return e = +e, n |= 0, t || Ne(this, e, n, 1, 127, -128), ue.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[n] = 255 & e, n + 1
    }, ue.prototype.writeInt16LE = function(e, n, t) {
        return e = +e, n |= 0, t || Ne(this, e, n, 2, 32767, -32768), ue.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & e, this[n + 1] = e >>> 8) : ke(this, e, n, !0), n + 2
    }, ue.prototype.writeInt16BE = function(e, n, t) {
        return e = +e, n |= 0, t || Ne(this, e, n, 2, 32767, -32768), ue.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 8, this[n + 1] = 255 & e) : ke(this, e, n, !1), n + 2
    }, ue.prototype.writeInt32LE = function(e, n, t) {
        return e = +e, n |= 0, t || Ne(this, e, n, 4, 2147483647, -2147483648), ue.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & e, this[n + 1] = e >>> 8, this[n + 2] = e >>> 16, this[n + 3] = e >>> 24) : je(this, e, n, !0), n + 4
    }, ue.prototype.writeInt32BE = function(e, n, t) {
        return e = +e, n |= 0, t || Ne(this, e, n, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), ue.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 24, this[n + 1] = e >>> 16, this[n + 2] = e >>> 8, this[n + 3] = 255 & e) : je(this, e, n, !1), n + 4
    }, ue.prototype.writeFloatLE = function(e, n, t) {
        return ze(this, e, n, !0, t)
    }, ue.prototype.writeFloatBE = function(e, n, t) {
        return ze(this, e, n, !1, t)
    }, ue.prototype.writeDoubleLE = function(e, n, t) {
        return Me(this, e, n, !0, t)
    }, ue.prototype.writeDoubleBE = function(e, n, t) {
        return Me(this, e, n, !1, t)
    }, ue.prototype.copy = function(e, n, t, r) {
        if (t || (t = 0), r || 0 === r || (r = this.length), n >= e.length && (n = e.length), n || (n = 0), r > 0 && r < t && (r = t), r === t) return 0;
        if (0 === e.length || 0 === this.length) return 0;
        if (n < 0) throw new RangeError("targetStart out of bounds");
        if (t < 0 || t >= this.length) throw new RangeError("sourceStart out of bounds");
        if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), e.length - n < r - t && (r = e.length - n + t);
        var o, i = r - t;
        if (this === e && t < n && n < r)
            for (o = i - 1; o >= 0; --o) e[o + n] = this[o + t];
        else if (i < 1e3 || !ue.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < i; ++o) e[o + n] = this[o + t];
        else Uint8Array.prototype.set.call(e, this.subarray(t, t + i), n);
        return i
    }, ue.prototype.fill = function(e, n, t, r) {
        if ("string" == typeof e) {
            if ("string" == typeof n ? (r = n, n = 0, t = this.length) : "string" == typeof t && (r = t, t = this.length), 1 === e.length) {
                var o = e.charCodeAt(0);
                o < 256 && (e = o)
            }
            if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !ue.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
        } else "number" == typeof e && (e &= 255);
        if (n < 0 || this.length < n || this.length < t) throw new RangeError("Out of range index");
        if (t <= n) return this;
        var i;
        if (n >>>= 0, t = void 0 === t ? this.length : t >>> 0, e || (e = 0), "number" == typeof e)
            for (i = n; i < t; ++i) this[i] = e;
        else {
            var a = he(e) ? e : Le(new ue(e, r).toString()),
                u = a.length;
            for (i = 0; i < t - n; ++i) this[i + n] = a[i % u]
        }
        return this
    };
    var Fe = /[^+\/0-9A-Za-z-_]/g;

    function Ue(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16)
    }

    function Le(e, n) {
        var t;
        n = n || 1 / 0;
        for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
            if ((t = e.charCodeAt(a)) > 55295 && t < 57344) {
                if (!o) {
                    if (t > 56319) {
                        (n -= 3) > -1 && i.push(239, 191, 189);
                        continue
                    }
                    if (a + 1 === r) {
                        (n -= 3) > -1 && i.push(239, 191, 189);
                        continue
                    }
                    o = t;
                    continue
                }
                if (t < 56320) {
                    (n -= 3) > -1 && i.push(239, 191, 189), o = t;
                    continue
                }
                t = 65536 + (o - 55296 << 10 | t - 56320)
            } else o && (n -= 3) > -1 && i.push(239, 191, 189);
            if (o = null, t < 128) {
                if ((n -= 1) < 0) break;
                i.push(t)
            } else if (t < 2048) {
                if ((n -= 2) < 0) break;
                i.push(t >> 6 | 192, 63 & t | 128)
            } else if (t < 65536) {
                if ((n -= 3) < 0) break;
                i.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128)
            } else {
                if (!(t < 1114112)) throw new Error("Invalid code point");
                if ((n -= 4) < 0) break;
                i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128)
            }
        }
        return i
    }

    function Be(e) {
        return function(e) {
            var n, t, r, o, i, a;
            X || K();
            var u = e.length;
            if (u % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            i = "=" === e[u - 2] ? 2 : "=" === e[u - 1] ? 1 : 0, a = new G(3 * u / 4 - i), r = i > 0 ? u - 4 : u;
            var s = 0;
            for (n = 0, t = 0; n < r; n += 4, t += 3) o = V[e.charCodeAt(n)] << 18 | V[e.charCodeAt(n + 1)] << 12 | V[e.charCodeAt(n + 2)] << 6 | V[e.charCodeAt(n + 3)], a[s++] = o >> 16 & 255, a[s++] = o >> 8 & 255, a[s++] = 255 & o;
            return 2 === i ? (o = V[e.charCodeAt(n)] << 2 | V[e.charCodeAt(n + 1)] >> 4, a[s++] = 255 & o) : 1 === i && (o = V[e.charCodeAt(n)] << 10 | V[e.charCodeAt(n + 1)] << 4 | V[e.charCodeAt(n + 2)] >> 2, a[s++] = o >> 8 & 255, a[s++] = 255 & o), a
        }(function(e) {
            if ((e = function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }(e).replace(Fe, "")).length < 2) return "";
            for (; e.length % 4 != 0;) e += "=";
            return e
        }(e))
    }

    function qe(e, n, t, r) {
        for (var o = 0; o < r && !(o + t >= n.length || o >= e.length); ++o) n[o + t] = e[o];
        return o
    }

    function Ye(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    var He, Je = {
        exports: {}
    };

    function $e() {
        return He || (He = 1, "undefined" != typeof self && self, Je.exports = function(e) {
            var n = {};

            function t(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
            }
            return t.m = e, t.c = n, t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: r
                })
            }, t.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, t.t = function(e, n) {
                if (1 & n && (e = t(e)), 8 & n) return e;
                if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (t.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & n && "string" != typeof e)
                    for (var o in e) t.d(r, o, function(n) {
                        return e[n]
                    }.bind(null, o));
                return r
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, n) {
                return {}.hasOwnProperty.call(e, n)
            }, t.p = "", t(t.s = 0)
        }([function(e, n, t) {
            function r(e, n) {
                return (r = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                })(e, n)
            }

            function o(e, n) {
                e.prototype = Object.create(n.prototype), e.prototype.constructor = e, r(e, n)
            }

            function i() {
                return (i = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e) {
                try {
                    if (!e) return !1;
                    if ("undefined" != typeof Promise && e instanceof Promise) return !0;
                    if (void 0 !== $ && "function" == typeof $.Window && e instanceof $.Window) return !1;
                    if (void 0 !== $ && "function" == typeof $.constructor && e instanceof $.constructor) return !1;
                    var n = {}.toString;
                    if (n) {
                        var t = n.call(e);
                        if ("[object Window]" === t || "[object global]" === t || "[object DOMWindow]" === t) return !1
                    }
                    if ("function" == typeof e.then) return !0
                } catch (e) {
                    return !1
                }
                return !1
            }
            t.r(n), t.d(n, "PopupOpenError", (function() {
                return ze
            })), t.d(n, "create", (function() {
                return mt
            })), t.d(n, "destroy", (function() {
                return yt
            })), t.d(n, "destroyComponents", (function() {
                return wt
            })), t.d(n, "destroyAll", (function() {
                return vt
            })), t.d(n, "PROP_TYPE", (function() {
                return Zn
            })), t.d(n, "PROP_SERIALIZATION", (function() {
                return Vn
            })), t.d(n, "CONTEXT", (function() {
                return Gn
            })), t.d(n, "EVENT", (function() {
                return Xn
            }));
            var u, s = [],
                c = [],
                f = 0;

            function d() {
                if (!f && u) {
                    var e = u;
                    u = null, e.resolve()
                }
            }

            function l() {
                f += 1
            }

            function h() {
                f -= 1, d()
            }
            var p = function() {
                function e(e) {
                    var n = this;
                    if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], e) {
                        var t, r, o = !1,
                            i = !1,
                            a = !1;
                        l();
                        try {
                            e((function(e) {
                                a ? n.resolve(e) : (o = !0, t = e)
                            }), (function(e) {
                                a ? n.reject(e) : (i = !0, r = e)
                            }))
                        } catch (e) {
                            return h(), void this.reject(e)
                        }
                        h(), a = !0, o ? this.resolve(t) : i && this.reject(r)
                    }
                }
                var n = e.prototype;
                return n.resolve = function(e) {
                    if (this.resolved || this.rejected) return this;
                    if (a(e)) throw new Error("Can not resolve promise with another promise");
                    return this.resolved = !0, this.value = e, this.dispatch(), this
                }, n.reject = function(e) {
                    var n = this;
                    if (this.resolved || this.rejected) return this;
                    if (a(e)) throw new Error("Can not reject promise with another promise");
                    if (!e) {
                        var t = e && "function" == typeof e.toString ? e.toString() : {}.toString.call(e);
                        e = new Error("Expected reject to be called with Error, got " + t)
                    }
                    return this.rejected = !0, this.error = e, this.errorHandled || setTimeout((function() {
                        n.errorHandled || function(e, n) {
                            if (-1 === s.indexOf(e)) {
                                s.push(e), setTimeout((function() {
                                    throw e
                                }), 1);
                                for (var t = 0; t < c.length; t++) c[t](e, n)
                            }
                        }(e, n)
                    }), 1), this.dispatch(), this
                }, n.asyncReject = function(e) {
                    return this.errorHandled = !0, this.reject(e), this
                }, n.dispatch = function() {
                    var n = this.resolved,
                        t = this.rejected,
                        r = this.handlers;
                    if (!this.dispatching && (n || t)) {
                        this.dispatching = !0, l();
                        for (var o = function(e, n) {
                                return e.then((function(e) {
                                    n.resolve(e)
                                }), (function(e) {
                                    n.reject(e)
                                }))
                            }, i = 0; i < r.length; i++) {
                            var u = r[i],
                                s = u.onSuccess,
                                c = u.onError,
                                f = u.promise,
                                d = void 0;
                            if (n) try {
                                d = s ? s(this.value) : this.value
                            } catch (e) {
                                f.reject(e);
                                continue
                            } else if (t) {
                                if (!c) {
                                    f.reject(this.error);
                                    continue
                                }
                                try {
                                    d = c(this.error)
                                } catch (e) {
                                    f.reject(e);
                                    continue
                                }
                            }
                            if (d instanceof e && (d.resolved || d.rejected)) {
                                var p = d;
                                p.resolved ? f.resolve(p.value) : f.reject(p.error), p.errorHandled = !0
                            } else a(d) ? d instanceof e && (d.resolved || d.rejected) ? d.resolved ? f.resolve(d.value) : f.reject(d.error) : o(d, f) : f.resolve(d)
                        }
                        r.length = 0, this.dispatching = !1, h()
                    }
                }, n.then = function(n, t) {
                    if (n && "function" != typeof n && !n.call) throw new Error("Promise.then expected a function for success handler");
                    if (t && "function" != typeof t && !t.call) throw new Error("Promise.then expected a function for error handler");
                    var r = new e;
                    return this.handlers.push({
                        promise: r,
                        onSuccess: n,
                        onError: t
                    }), this.errorHandled = !0, this.dispatch(), r
                }, n.catch = function(e) {
                    return this.then(void 0, e)
                }, n.finally = function(n) {
                    if (n && "function" != typeof n && !n.call) throw new Error("Promise.finally expected a function");
                    return this.then((function(t) {
                        return e.try(n).then((function() {
                            return t
                        }))
                    }), (function(t) {
                        return e.try(n).then((function() {
                            throw t
                        }))
                    }))
                }, n.timeout = function(e, n) {
                    var t = this;
                    if (this.resolved || this.rejected) return this;
                    var r = setTimeout((function() {
                        t.resolved || t.rejected || t.reject(n || new Error("Promise timed out after " + e + "ms"))
                    }), e);
                    return this.then((function(e) {
                        return clearTimeout(r), e
                    }))
                }, n.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this)
                }, n.lazy = function() {
                    return this.errorHandled = !0, this
                }, e.resolve = function(n) {
                    return n instanceof e ? n : a(n) ? new e((function(e, t) {
                        return n.then(e, t)
                    })) : (new e).resolve(n)
                }, e.reject = function(n) {
                    return (new e).reject(n)
                }, e.asyncReject = function(n) {
                    return (new e).asyncReject(n)
                }, e.all = function(n) {
                    var t = new e,
                        r = n.length,
                        o = [].slice();
                    if (!r) return t.resolve(o), t;
                    for (var i = function(e, n, i) {
                            return n.then((function(n) {
                                o[e] = n, 0 == (r -= 1) && t.resolve(o)
                            }), (function(e) {
                                i.reject(e)
                            }))
                        }, u = 0; u < n.length; u++) {
                        var s = n[u];
                        if (s instanceof e) {
                            if (s.resolved) {
                                o[u] = s.value, r -= 1;
                                continue
                            }
                        } else if (!a(s)) {
                            o[u] = s, r -= 1;
                            continue
                        }
                        i(u, e.resolve(s), t)
                    }
                    return 0 === r && t.resolve(o), t
                }, e.hash = function(n) {
                    var t = {},
                        r = [],
                        o = function(e) {
                            if (n.hasOwnProperty(e)) {
                                var o = n[e];
                                a(o) ? r.push(o.then((function(n) {
                                    t[e] = n
                                }))) : t[e] = o
                            }
                        };
                    for (var i in n) o(i);
                    return e.all(r).then((function() {
                        return t
                    }))
                }, e.map = function(n, t) {
                    return e.all(n.map(t))
                }, e.onPossiblyUnhandledException = function(e) {
                    return function(e) {
                        return c.push(e), {
                            cancel: function() {
                                c.splice(c.indexOf(e), 1)
                            }
                        }
                    }(e)
                }, e.try = function(n, t, r) {
                    if (n && "function" != typeof n && !n.call) throw new Error("Promise.try expected a function");
                    var o;
                    l();
                    try {
                        o = n.apply(t, r || [])
                    } catch (n) {
                        return h(), e.reject(n)
                    }
                    return h(), e.resolve(o)
                }, e.delay = function(n) {
                    return new e((function(e) {
                        setTimeout(e, n)
                    }))
                }, e.isPromise = function(n) {
                    return !!(n && n instanceof e) || a(n)
                }, e.flush = function() {
                    return n = e, t = u = u || new n, d(), t;
                    var n, t
                }, e
            }();

            function m(e) {
                return "[object RegExp]" === {}.toString.call(e)
            }
            var w = {
                    IFRAME: "iframe",
                    POPUP: "popup"
                },
                v = "Call was rejected by callee.\r\n";

            function y(e) {
                return void 0 === e && (e = $), e.location.protocol
            }

            function g(e) {
                if (void 0 === e && (e = $), e.mockDomain) {
                    var n = e.mockDomain.split("//")[0];
                    if (n) return n
                }
                return y(e)
            }

            function b(e) {
                return void 0 === e && (e = $), "about:" === g(e)
            }

            function E(e) {
                if (void 0 === e && (e = $), e) try {
                    if (e.parent && e.parent !== e) return e.parent
                } catch (e) {}
            }

            function _(e) {
                if (void 0 === e && (e = $), e && !E(e)) try {
                    return e.opener
                } catch (e) {}
            }

            function x(e) {
                try {
                    return !0
                } catch (e) {}
                return !1
            }

            function P(e) {
                void 0 === e && (e = $);
                var n = e.location;
                if (!n) throw new Error("Can not read window location");
                var t = y(e);
                if (!t) throw new Error("Can not read window protocol");
                if ("file:" === t) return "file://";
                if ("about:" === t) {
                    var r = E(e);
                    return r && x() ? P(r) : "about://"
                }
                var o = n.host;
                if (!o) throw new Error("Can not read window host");
                return t + "//" + o
            }

            function O(e) {
                void 0 === e && (e = $);
                var n = P(e);
                return n && e.mockDomain && 0 === e.mockDomain.indexOf("mock:") ? e.mockDomain : n
            }

            function C(e) {
                if (! function(e) {
                        try {
                            if (e === $) return !0
                        } catch (e) {}
                        try {
                            var n = Object.getOwnPropertyDescriptor(e, "location");
                            if (n && !1 === n.enumerable) return !1
                        } catch (e) {}
                        try {
                            if (b(e) && x()) return !0
                        } catch (e) {}
                        try {
                            if (function(e) {
                                    return void 0 === e && (e = $), "mock:" === g(e)
                                }(e) && x()) return !0
                        } catch (e) {}
                        try {
                            if (P(e) === P($)) return !0
                        } catch (e) {}
                        return !1
                    }(e)) return !1;
                try {
                    if (e === $) return !0;
                    if (b(e) && x()) return !0;
                    if (O($) === O(e)) return !0
                } catch (e) {}
                return !1
            }

            function S(e) {
                if (!C(e)) throw new Error("Expected window to be same domain");
                return e
            }

            function A(e, n) {
                if (!e || !n) return !1;
                var t = E(n);
                return t ? t === e : -1 !== function(e) {
                    var n = [];
                    try {
                        for (; e.parent !== e;) n.push(e.parent), e = e.parent
                    } catch (e) {}
                    return n
                }(n).indexOf(e)
            }

            function T(e) {
                var n, t, r = [];
                try {
                    n = e.frames
                } catch (t) {
                    n = e
                }
                try {
                    t = n.length
                } catch (e) {}
                if (0 === t) return r;
                if (t) {
                    for (var o = 0; o < t; o++) {
                        var i = void 0;
                        try {
                            i = n[o]
                        } catch (e) {
                            continue
                        }
                        r.push(i)
                    }
                    return r
                }
                for (var a = 0; a < 100; a++) {
                    var u = void 0;
                    try {
                        u = n[a]
                    } catch (e) {
                        return r
                    }
                    if (!u) return r;
                    r.push(u)
                }
                return r
            }

            function R(e) {
                for (var n = [], t = 0, r = T(e); t < r.length; t++) {
                    var o = r[t];
                    n.push(o);
                    for (var i = 0, a = R(o); i < a.length; i++) n.push(a[i])
                }
                return n
            }

            function D(e) {
                void 0 === e && (e = $);
                try {
                    if (e.top) return e.top
                } catch (e) {}
                if (E(e) === e) return e;
                try {
                    if (A($, e) && $.top) return $.top
                } catch (e) {}
                try {
                    if (A(e, $) && $.top) return $.top
                } catch (e) {}
                for (var n = 0, t = R(e); n < t.length; n++) {
                    var r = t[n];
                    try {
                        if (r.top) return r.top
                    } catch (e) {}
                    if (E(r) === r) return r
                }
            }

            function W(e) {
                var n = D(e);
                if (!n) throw new Error("Can not determine top window");
                var t = [].concat(R(n), [n]);
                return -1 === t.indexOf(e) && (t = [].concat(t, [e], R(e))), t
            }
            var N = [],
                k = [];

            function j(e, n) {
                void 0 === n && (n = !0);
                try {
                    if (e === $) return !1
                } catch (e) {
                    return !0
                }
                try {
                    if (!e) return !0
                } catch (e) {
                    return !0
                }
                try {
                    if (e.closed) return !0
                } catch (e) {
                    return !e || e.message !== v
                }
                if (n && C(e)) try {
                    if (e.mockclosed) return !0
                } catch (e) {}
                try {
                    if (!e.parent || !e.top) return !0
                } catch (e) {}
                var t = function(e, n) {
                    for (var t = 0; t < e.length; t++) try {
                        if (e[t] === n) return t
                    } catch (e) {}
                    return -1
                }(N, e);
                if (-1 !== t) {
                    var r = k[t];
                    if (r && function(e) {
                            if (!e.contentWindow) return !0;
                            if (!e.parentNode) return !0;
                            var n = e.ownerDocument;
                            if (n && n.documentElement && !n.documentElement.contains(e)) {
                                for (var t = e; t.parentNode && t.parentNode !== t;) t = t.parentNode;
                                if (!t.host || !n.documentElement.contains(t.host)) return !0
                            }
                            return !1
                        }(r)) return !0
                }
                return !1
            }

            function I(e, n) {
                for (var t = T(e), r = 0; r < t.length; r++) {
                    var o = t[r];
                    try {
                        if (C(o) && o.name === n && -1 !== t.indexOf(o)) return o
                    } catch (e) {}
                }
                try {
                    if (-1 !== t.indexOf(e.frames[n])) return e.frames[n]
                } catch (e) {}
                try {
                    if (-1 !== t.indexOf(e[n])) return e[n]
                } catch (e) {}
            }

            function z(e) {
                return void 0 === e && (e = $), _(e = e || $) || E(e) || void 0
            }

            function M(e, n) {
                for (var t = 0; t < e.length; t++)
                    for (var r = e[t], o = 0; o < n.length; o++)
                        if (r === n[o]) return !0;
                return !1
            }

            function F(e) {
                void 0 === e && (e = $);
                for (var n = 0, t = e; t;)(t = E(t)) && (n += 1);
                return n
            }

            function U(e, n) {
                var t = D(e) || e,
                    r = D(n) || n;
                try {
                    if (t && r) return t === r
                } catch (e) {}
                var o = W(e),
                    i = W(n);
                if (M(o, i)) return !0;
                var a = _(t),
                    u = _(r);
                return a && M(W(a), i) || u && M(W(u), o), !1
            }

            function L(e, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof n) return "*" === e || n === e;
                    if (m(n)) return !1;
                    if (Array.isArray(n)) return !1
                }
                return m(e) ? m(n) ? e.toString() === n.toString() : !Array.isArray(n) && Boolean(n.match(e)) : !!Array.isArray(e) && (Array.isArray(n) ? JSON.stringify(e) === JSON.stringify(n) : !m(n) && e.some((function(e) {
                    return L(e, n)
                })))
            }

            function B(e) {
                return e.match(/^(https?|mock|file):\/\//) ? e.split("/").slice(0, 3).join("/") : O()
            }

            function q(e, n, t, r) {
                var o;
                return void 0 === t && (t = 1e3), void 0 === r && (r = 1 / 0),
                    function i() {
                        if (j(e)) return o && clearTimeout(o), n();
                        r <= 0 ? clearTimeout(o) : (r -= t, o = setTimeout(i, t))
                    }(), {
                        cancel: function() {
                            o && clearTimeout(o)
                        }
                    }
            }

            function Y(e) {
                try {
                    if (e === $) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if ("[object Window]" === {}.toString.call(e)) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if ($.Window && e instanceof $.Window) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if (e && e.self === e) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if (e && e.parent === e) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if (e && e.top === e) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if (e && "__unlikely_value__" === e.__cross_domain_utils_window_check__) return !1
                } catch (e) {
                    return !0
                }
                try {
                    if ("postMessage" in e && "self" in e && "location" in e) return !0
                } catch (e) {}
                return !1
            }

            function H(e) {
                if (C(e)) return S(e).frameElement;
                for (var n = 0, t = document.querySelectorAll("iframe"); n < t.length; n++) {
                    var r = t[n];
                    if (r && r.contentWindow && r.contentWindow === e) return r
                }
            }

            function J(e) {
                if (function(e) {
                        return void 0 === e && (e = $), Boolean(E(e))
                    }(e)) {
                    var n = H(e);
                    if (n && n.parentElement) return void n.parentElement.removeChild(n)
                }
                try {
                    e.close()
                } catch (e) {}
            }

            function Z(e, n) {
                for (var t = 0; t < e.length; t++) try {
                    if (e[t] === n) return t
                } catch (e) {}
                return -1
            }
            var V, G = function() {
                function e() {
                    if (this.name = void 0, this.weakmap = void 0, this.keys = void 0, this.values = void 0, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__", function() {
                            if ("undefined" == typeof WeakMap) return !1;
                            if (void 0 === Object.freeze) return !1;
                            try {
                                var e = new WeakMap,
                                    n = {};
                                return Object.freeze(n), e.set(n, "__testvalue__"), "__testvalue__" === e.get(n)
                            } catch (e) {
                                return !1
                            }
                        }()) try {
                        this.weakmap = new WeakMap
                    } catch (e) {}
                    this.keys = [], this.values = []
                }
                var n = e.prototype;
                return n._cleanupClosedWindows = function() {
                    for (var e = this.weakmap, n = this.keys, t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (Y(r) && j(r)) {
                            if (e) try {
                                e.delete(r)
                            } catch (e) {}
                            n.splice(t, 1), this.values.splice(t, 1), t -= 1
                        }
                    }
                }, n.isSafeToReadWrite = function(e) {
                    return !Y(e)
                }, n.set = function(e, n) {
                    if (!e) throw new Error("WeakMap expected key");
                    var t = this.weakmap;
                    if (t) try {
                        t.set(e, n)
                    } catch (e) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var r = this.name,
                            o = e[r];
                        return void(o && o[0] === e ? o[1] = n : Object.defineProperty(e, r, {
                            value: [e, n],
                            writable: !0
                        }))
                    } catch (e) {}
                    this._cleanupClosedWindows();
                    var i = this.keys,
                        a = this.values,
                        u = Z(i, e); - 1 === u ? (i.push(e), a.push(n)) : a[u] = n
                }, n.get = function(e) {
                    if (!e) throw new Error("WeakMap expected key");
                    var n = this.weakmap;
                    if (n) try {
                        if (n.has(e)) return n.get(e)
                    } catch (e) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var t = e[this.name];
                        return t && t[0] === e ? t[1] : void 0
                    } catch (e) {}
                    this._cleanupClosedWindows();
                    var r = Z(this.keys, e);
                    if (-1 !== r) return this.values[r]
                }, n.delete = function(e) {
                    if (!e) throw new Error("WeakMap expected key");
                    var n = this.weakmap;
                    if (n) try {
                        n.delete(e)
                    } catch (e) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var t = e[this.name];
                        t && t[0] === e && (t[0] = t[1] = void 0)
                    } catch (e) {}
                    this._cleanupClosedWindows();
                    var r = this.keys,
                        o = Z(r, e); - 1 !== o && (r.splice(o, 1), this.values.splice(o, 1))
                }, n.has = function(e) {
                    if (!e) throw new Error("WeakMap expected key");
                    var n = this.weakmap;
                    if (n) try {
                        if (n.has(e)) return !0
                    } catch (e) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var t = e[this.name];
                        return !(!t || t[0] !== e)
                    } catch (e) {}
                    return this._cleanupClosedWindows(), -1 !== Z(this.keys, e)
                }, n.getOrSet = function(e, n) {
                    if (this.has(e)) return this.get(e);
                    var t = n();
                    return this.set(e, t), t
                }, e
            }();

            function X(e) {
                return (X = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function K() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function Q(e, n, t) {
                return (Q = K() ? Reflect.construct : function(e, n, t) {
                    var o = [null];
                    o.push.apply(o, n);
                    var i = new(Function.bind.apply(e, o));
                    return t && r(i, t.prototype), i
                }).apply(null, arguments)
            }

            function ee(e) {
                var n = "function" == typeof Map ? new Map : void 0;
                return (ee = function(e) {
                    if (null === e || (t = e, -1 === Function.toString.call(t).indexOf("[native code]"))) return e;
                    var t;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== n) {
                        if (n.has(e)) return n.get(e);
                        n.set(e, o)
                    }

                    function o() {
                        return Q(e, arguments, X(this).constructor)
                    }
                    return o.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: o,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), r(o, e)
                })(e)
            }

            function ne(e) {
                return e.name || e.__name__ || e.displayName || "anonymous"
            }

            function te(e, n) {
                try {
                    delete e.name, e.name = n
                } catch (e) {}
                return e.__name__ = e.displayName = n, e
            }

            function re(e) {
                if ("function" == typeof btoa) return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, n) {
                    return String.fromCharCode(parseInt(n, 16))
                }))).replace(/[=]/g, "");
                if (void 0 !== ue) return ue.from(e, "utf8").toString("base64").replace(/[=]/g, "");
                throw new Error("Can not find window.btoa or Buffer")
            }

            function oe() {
                var e = "0123456789abcdef";
                return "uid_" + "xxxxxxxxxx".replace(/./g, (function() {
                    return e.charAt(Math.floor(Math.random() * e.length))
                })) + "_" + re((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
            }

            function ie(e) {
                try {
                    return JSON.stringify([].slice.call(e), (function(e, n) {
                        return "function" == typeof n ? "memoize[" + function(e) {
                            if (V = V || new G, null == e || "object" != typeof e && "function" != typeof e) throw new Error("Invalid object");
                            var n = V.get(e);
                            return n || (n = typeof e + ":" + oe(), V.set(e, n)), n
                        }(n) + "]" : n
                    }))
                } catch (e) {
                    throw new Error("Arguments not serializable -- can not be used to memoize")
                }
            }

            function ae() {
                return {}
            }
            var se = 0,
                ce = 0;

            function fe(e, n) {
                void 0 === n && (n = {});
                var t, r, o = n.thisNamespace,
                    i = void 0 !== o && o,
                    a = n.time,
                    u = se;
                se += 1;
                var s = function() {
                    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                    var c;
                    u < ce && (t = null, r = null, u = se, se += 1), c = i ? (r = r || new G).getOrSet(this, ae) : t = t || {};
                    var f = ie(o),
                        d = c[f];
                    if (d && a && Date.now() - d.time < a && (delete c[f], d = null), d) return d.value;
                    var l = Date.now(),
                        h = e.apply(this, arguments);
                    return c[f] = {
                        time: l,
                        value: h
                    }, h
                };
                return s.reset = function() {
                    t = null, r = null
                }, te(s, (n.name || ne(e)) + "::memoized")
            }

            function de(e) {
                var n = {};

                function t() {
                    for (var t = arguments, r = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                    var u = ie(i);
                    return n.hasOwnProperty(u) || (n[u] = p.try((function() {
                        return e.apply(r, t)
                    })).finally((function() {
                        delete n[u]
                    }))), n[u]
                }
                return t.reset = function() {
                    n = {}
                }, te(t, ne(e) + "::promiseMemoized")
            }

            function le() {}

            function he(e) {
                var n = !1;
                return te((function() {
                    if (!n) return n = !0, e.apply(this, arguments)
                }), ne(e) + "::once")
            }

            function pe(e, n) {
                if (void 0 === n && (n = 1), n >= 3) return "stringifyError stack overflow";
                try {
                    if (!e) return "<unknown error: " + {}.toString.call(e) + ">";
                    if ("string" == typeof e) return e;
                    if (e instanceof Error) {
                        var t = e && e.stack,
                            r = e && e.message;
                        if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
                        if (t) return t;
                        if (r) return r
                    }
                    return e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
                } catch (e) {
                    return "Error while stringifying error: " + pe(e, n + 1)
                }
            }

            function me(e) {
                return "string" == typeof e ? e : e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
            }

            function we(e, n) {
                if (!n) return e;
                if (Object.assign) return Object.assign(e, n);
                for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
                return e
            }

            function ve(e) {
                return e
            }

            function ye(e, n) {
                var t;
                return function r() {
                    t = setTimeout((function() {
                        e(), r()
                    }), n)
                }(), {
                    cancel: function() {
                        clearTimeout(t)
                    }
                }
            }

            function ge(e) {
                return [].slice.call(e)
            }

            function be(e) {
                return null != e
            }

            function Ee(e) {
                return "[object RegExp]" === {}.toString.call(e)
            }

            function _e(e, n, t) {
                if (e.hasOwnProperty(n)) return e[n];
                var r = t();
                return e[n] = r, r
            }

            function xe(e) {
                var n, t = [],
                    r = !1,
                    o = {
                        set: function(n, t) {
                            return r || (e[n] = t, o.register((function() {
                                delete e[n]
                            }))), t
                        },
                        register: function(e) {
                            var o = he((function() {
                                return e(n)
                            }));
                            return r ? e(n) : t.push(o), {
                                cancel: function() {
                                    var e = t.indexOf(o); - 1 !== e && t.splice(e, 1)
                                }
                            }
                        },
                        all: function(e) {
                            n = e;
                            var o = [];
                            for (r = !0; t.length;) {
                                var i = t.shift();
                                o.push(i())
                            }
                            return p.all(o).then(le)
                        }
                    };
                return o
            }

            function Pe(e, n) {
                if (null == n) throw new Error("Expected " + e + " to be present");
                return n
            }
            fe.clear = function() {
                ce = se
            }, fe((function(e) {
                if (Object.values) return Object.values(e);
                var n = [];
                for (var t in e) e.hasOwnProperty(t) && n.push(e[t]);
                return n
            }));
            var Oe = function(e) {
                function n(n) {
                    var t;
                    return (t = e.call(this, n) || this).name = t.constructor.name, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(t), t.constructor) : t.stack = new Error(n).stack, t
                }
                return o(n, e), n
            }(ee(Error));

            function Ce() {
                var e = document.body;
                if (!e) throw new Error("Body element not found");
                return e
            }

            function Se() {
                return Boolean(document.body) && "complete" === document.readyState
            }

            function Ae() {
                return Boolean(document.body) && "interactive" === document.readyState
            }

            function Te(e) {
                return encodeURIComponent(e)
            }

            function Re(e) {
                return function(n, t, r) {
                    void 0 === r && (r = []);
                    var o = n.__inline_memoize_cache__ = n.__inline_memoize_cache__ || {},
                        i = ie(r);
                    return o.hasOwnProperty(i) ? o[i] : o[i] = function() {
                        var n = {};
                        if (!e) return n;
                        if (-1 === e.indexOf("=")) return n;
                        for (var t = 0, r = e.split("&"); t < r.length; t++) {
                            var o = r[t];
                            (o = o.split("="))[0] && o[1] && (n[decodeURIComponent(o[0])] = decodeURIComponent(o[1]))
                        }
                        return n
                    }.apply(void 0, r)
                }(Re, 0, [e])
            }

            function De(e, n) {
                return void 0 === n && (n = {}), n && Object.keys(n).length ? (void 0 === (t = i({}, Re(e), n)) && (t = {}), Object.keys(t).filter((function(e) {
                    return "string" == typeof t[e] || "boolean" == typeof t[e]
                })).map((function(e) {
                    var n = t[e];
                    if ("string" != typeof n && "boolean" != typeof n) throw new TypeError("Invalid type for query");
                    return Te(e) + "=" + Te(n.toString())
                })).join("&")) : e;
                var t
            }

            function We(e, n) {
                e.appendChild(n)
            }

            function Ne(e) {
                return e instanceof $.Element || null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
            }

            function ke(e, n) {
                return void 0 === n && (n = document), Ne(e) ? e : "string" == typeof e ? n.querySelector(e) : void 0
            }

            function je(e) {
                return new p((function(n, t) {
                    var r = me(e),
                        o = ke(e);
                    if (o) return n(o);
                    if (Se()) return t(new Error("Document is ready and element " + r + " does not exist"));
                    var i = setInterval((function() {
                        if (o = ke(e)) n(o), clearInterval(i);
                        else if (Se()) return clearInterval(i), t(new Error("Document is ready and element " + r + " does not exist"))
                    }), 10)
                }))
            }
            fe((function() {
                return new p((function(e) {
                    if (Se() || Ae()) return e();
                    var n = setInterval((function() {
                        if (Se() || Ae()) return clearInterval(n), e()
                    }), 10)
                }))
            }));
            var Ie, ze = function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                return o(n, e), n
            }(Oe);

            function Me(e) {
                if ((Ie = Ie || new G).has(e)) {
                    var n = Ie.get(e);
                    if (n) return n
                }
                var t = new p((function(n, t) {
                    e.addEventListener("load", (function() {
                        ! function(e) {
                            if (function() {
                                    for (var e = 0; e < N.length; e++) {
                                        var n = !1;
                                        try {
                                            n = N[e].closed
                                        } catch (e) {}
                                        n && (k.splice(e, 1), N.splice(e, 1))
                                    }
                                }(), e && e.contentWindow) try {
                                N.push(e.contentWindow), k.push(e)
                            } catch (e) {}
                        }(e), n(e)
                    })), e.addEventListener("error", (function(r) {
                        e.contentWindow ? n(e) : t(r)
                    }))
                }));
                return Ie.set(e, t), t
            }

            function Fe(e) {
                return Me(e).then((function(e) {
                    if (!e.contentWindow) throw new Error("Could not find window in iframe");
                    return e.contentWindow
                }))
            }

            function Ue(e, n) {
                void 0 === e && (e = {});
                var t = e.style || {},
                    r = function(e, n, t) {
                        void 0 === e && (e = "div"), void 0 === n && (n = {}), e = e.toLowerCase();
                        var r, o, i, a = document.createElement(e);
                        if (n.style && we(a.style, n.style), n.class && (a.className = n.class.join(" ")), n.id && a.setAttribute("id", n.id), n.attributes)
                            for (var u = 0, s = Object.keys(n.attributes); u < s.length; u++) {
                                var c = s[u];
                                a.setAttribute(c, n.attributes[c])
                            }
                        if (n.styleSheet && (r = a, o = n.styleSheet, void 0 === i && (i = $.document), r.styleSheet ? r.styleSheet.cssText = o : r.appendChild(i.createTextNode(o))), n.html) {
                            if ("iframe" === e) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                            a.innerHTML = n.html
                        }
                        return a
                    }("iframe", {
                        attributes: i({
                            allowTransparency: "true"
                        }, e.attributes || {}),
                        style: i({
                            backgroundColor: "transparent",
                            border: "none"
                        }, t),
                        html: e.html,
                        class: e.class
                    }),
                    o = $.navigator.userAgent.match(/MSIE|Edge/i);
                return r.hasAttribute("id") || r.setAttribute("id", oe()), Me(r), (e.url || o) && r.setAttribute("src", e.url || "about:blank"), r
            }

            function Le(e, n, t) {
                return e.addEventListener(n, t), {
                    cancel: function() {
                        e.removeEventListener(n, t)
                    }
                }
            }

            function Be(e) {
                e.style.setProperty("display", "")
            }

            function qe(e) {
                e.style.setProperty("display", "none", "important")
            }

            function Ye(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }

            function He(e) {
                return !(e && e.parentNode && e.ownerDocument && e.ownerDocument.documentElement && e.ownerDocument.documentElement.contains(e))
            }

            function Je(e, n, t) {
                var r = void 0 === t ? {} : t,
                    o = r.width,
                    i = void 0 === o || o,
                    a = r.height,
                    u = void 0 === a || a,
                    s = r.interval,
                    c = void 0 === s ? 100 : s,
                    f = r.win,
                    d = void 0 === f ? $ : f,
                    l = e.offsetWidth,
                    h = e.offsetHeight,
                    p = !1;
                n({
                    width: l,
                    height: h
                });
                var m, w, v = function() {
                    if (!p && function(e) {
                            return Boolean(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                        }(e)) {
                        var t = e.offsetWidth,
                            r = e.offsetHeight;
                        (i && t !== l || u && r !== h) && n({
                            width: t,
                            height: r
                        }), l = t, h = r
                    }
                };
                return d.addEventListener("resize", v), void 0 !== d.ResizeObserver ? ((m = new d.ResizeObserver(v)).observe(e), w = ye(v, 10 * c)) : void 0 !== d.MutationObserver ? ((m = new d.MutationObserver(v)).observe(e, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    characterData: !1
                }), w = ye(v, 10 * c)) : w = ye(v, c), {
                    cancel: function() {
                        p = !0, m.disconnect(), $.removeEventListener("resize", v), w.cancel()
                    }
                }
            }

            function $e(e) {
                for (; e.parentNode;) e = e.parentNode;
                return "[object ShadowRoot]" === e.toString()
            }
            var Ze = "undefined" != typeof document ? document.currentScript : null,
                Ve = fe((function() {
                    if (Ze) return Ze;
                    if (Ze = function() {
                            try {
                                var e = function() {
                                        try {
                                            throw new Error("_")
                                        } catch (e) {
                                            return e.stack || ""
                                        }
                                    }(),
                                    n = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(e),
                                    t = n && n[1];
                                if (!t) return;
                                for (var r = 0, o = [].slice.call(document.getElementsByTagName("script")).reverse(); r < o.length; r++) {
                                    var i = o[r];
                                    if (i.src && i.src === t) return i
                                }
                            } catch (e) {}
                        }()) return Ze;
                    throw new Error("Can not determine current script")
                })),
                Ge = oe();

            function Xe(e) {
                return function(e) {
                    if ("number" == typeof e) return e;
                    var n = e.match(/^([0-9]+)(px|%)$/);
                    if (!n) throw new Error("Could not match css value from " + e);
                    return parseInt(n[1], 10)
                }(e) + "px"
            }

            function Ke(e) {
                return "number" == typeof e ? Xe(e) : "string" == typeof(n = e) && /^[0-9]+%$/.test(n) ? e : Xe(e);
                var n
            }

            function Qe(e) {
                void 0 === e && (e = $);
                var n = "__post_robot_10_0_44__";
                return e !== $ ? e[n] : e[n] = e[n] || {}
            }
            fe((function() {
                var e;
                try {
                    e = Ve()
                } catch (e) {
                    return Ge
                }
                var n = e.getAttribute("data-uid");
                if (n && "string" == typeof n) return n;
                if ((n = e.getAttribute("data-uid-auto")) && "string" == typeof n) return n;
                if (e.src) {
                    var t = function(e) {
                        for (var n = "", t = 0; t < e.length; t++) {
                            var r = e[t].charCodeAt(0) * t;
                            e[t + 1] && (r += e[t + 1].charCodeAt(0) * (t - 1)), n += String.fromCharCode(97 + Math.abs(r) % 26)
                        }
                        return n
                    }(JSON.stringify({
                        src: e.src,
                        dataset: e.dataset
                    }));
                    n = "uid_" + t.slice(t.length - 30)
                } else n = oe();
                return e.setAttribute("data-uid-auto", n), n
            }));
            var en = function() {
                return {}
            };

            function nn(e, n) {
                return void 0 === e && (e = "store"), void 0 === n && (n = en), _e(Qe(), e, (function() {
                    var e = n();
                    return {
                        has: function(n) {
                            return e.hasOwnProperty(n)
                        },
                        get: function(n, t) {
                            return e.hasOwnProperty(n) ? e[n] : t
                        },
                        set: function(n, t) {
                            return e[n] = t, t
                        },
                        del: function(n) {
                            delete e[n]
                        },
                        getOrSet: function(n, t) {
                            return _e(e, n, t)
                        },
                        reset: function() {
                            e = n()
                        },
                        keys: function() {
                            return Object.keys(e)
                        }
                    }
                }))
            }
            var tn, rn = function() {};

            function on() {
                var e = Qe();
                return e.WINDOW_WILDCARD = e.WINDOW_WILDCARD || new rn, e.WINDOW_WILDCARD
            }

            function an(e, n) {
                return void 0 === e && (e = "store"), void 0 === n && (n = en), nn("windowStore").getOrSet(e, (function() {
                    var t = new G,
                        r = function(e) {
                            return t.getOrSet(e, n)
                        };
                    return {
                        has: function(n) {
                            return r(n).hasOwnProperty(e)
                        },
                        get: function(n, t) {
                            var o = r(n);
                            return o.hasOwnProperty(e) ? o[e] : t
                        },
                        set: function(n, t) {
                            return r(n)[e] = t, t
                        },
                        del: function(n) {
                            delete r(n)[e]
                        },
                        getOrSet: function(n, t) {
                            return _e(r(n), e, t)
                        }
                    }
                }))
            }

            function un() {
                return nn("instance").getOrSet("instanceID", oe)
            }

            function sn(e, n) {
                var t = n.domain,
                    r = an("helloPromises"),
                    o = r.get(e);
                o && o.resolve({
                    domain: t
                });
                var i = p.resolve({
                    domain: t
                });
                return r.set(e, i), i
            }

            function cn(e, n) {
                return (0, n.send)(e, "postrobot_hello", {
                    instanceID: un()
                }, {
                    domain: "*",
                    timeout: -1
                }).then((function(n) {
                    var t = n.origin,
                        r = n.data.instanceID;
                    return sn(e, {
                        domain: t
                    }), {
                        win: e,
                        domain: t,
                        instanceID: r
                    }
                }))
            }

            function fn(e, n) {
                var t = n.send;
                return an("windowInstanceIDPromises").getOrSet(e, (function() {
                    return cn(e, {
                        send: t
                    }).then((function(e) {
                        return e.instanceID
                    }))
                }))
            }

            function dn(e) {
                an("knownWindows").set(e, !0)
            }

            function ln(e) {
                return "object" == typeof e && null !== e && "string" == typeof e.__type__
            }

            function hn(e) {
                return void 0 === e ? "undefined" : null === e ? "null" : Array.isArray(e) ? "array" : "function" == typeof e ? "function" : "object" == typeof e ? e instanceof Error ? "error" : "function" == typeof e.then ? "promise" : "[object RegExp]" === {}.toString.call(e) ? "regex" : "[object Date]" === {}.toString.call(e) ? "date" : "object" : "string" == typeof e ? "string" : "number" == typeof e ? "number" : "boolean" == typeof e ? "boolean" : void 0
            }

            function pn(e, n) {
                return {
                    __type__: e,
                    __val__: n
                }
            }
            var mn, wn = ((tn = {}).function = function() {}, tn.error = function(e) {
                    return pn("error", {
                        message: e.message,
                        stack: e.stack,
                        code: e.code,
                        data: e.data
                    })
                }, tn.promise = function() {}, tn.regex = function(e) {
                    return pn("regex", e.source)
                }, tn.date = function(e) {
                    return pn("date", e.toJSON())
                }, tn.array = function(e) {
                    return e
                }, tn.object = function(e) {
                    return e
                }, tn.string = function(e) {
                    return e
                }, tn.number = function(e) {
                    return e
                }, tn.boolean = function(e) {
                    return e
                }, tn.null = function(e) {
                    return e
                }, tn[void 0] = function(e) {
                    return pn("undefined", e)
                }, tn),
                vn = {},
                yn = ((mn = {}).function = function() {
                    throw new Error("Function serialization is not implemented; nothing to deserialize")
                }, mn.error = function(e) {
                    var n = e.stack,
                        t = e.code,
                        r = e.data,
                        o = new Error(e.message);
                    return o.code = t, r && (o.data = r), o.stack = n + "\n\n" + o.stack, o
                }, mn.promise = function() {
                    throw new Error("Promise serialization is not implemented; nothing to deserialize")
                }, mn.regex = function(e) {
                    return new RegExp(e)
                }, mn.date = function(e) {
                    return new Date(e)
                }, mn.array = function(e) {
                    return e
                }, mn.object = function(e) {
                    return e
                }, mn.string = function(e) {
                    return e
                }, mn.number = function(e) {
                    return e
                }, mn.boolean = function(e) {
                    return e
                }, mn.null = function(e) {
                    return e
                }, mn[void 0] = function() {}, mn),
                gn = {};

            function bn() {
                for (var e = nn("idToProxyWindow"), n = 0, t = e.keys(); n < t.length; n++) {
                    var r = t[n];
                    e.get(r).shouldClean() && e.del(r)
                }
            }

            function En(e, n) {
                var t = n.send,
                    r = n.id,
                    o = void 0 === r ? oe() : r,
                    i = e.then((function(e) {
                        if (C(e)) return S(e).name
                    })),
                    a = e.then((function(e) {
                        if (j(e)) throw new Error("Window is closed, can not determine type");
                        return _(e) ? w.POPUP : w.IFRAME
                    }));
                i.catch(le), a.catch(le);
                var u = function() {
                    return e.then((function(e) {
                        if (!j(e)) return C(e) ? S(e).name : i
                    }))
                };
                return {
                    id: o,
                    getType: function() {
                        return a
                    },
                    getInstanceID: de((function() {
                        return e.then((function(e) {
                            return fn(e, {
                                send: t
                            })
                        }))
                    })),
                    close: function() {
                        return e.then(J)
                    },
                    getName: u,
                    focus: function() {
                        return e.then((function(e) {
                            e.focus()
                        }))
                    },
                    isClosed: function() {
                        return e.then((function(e) {
                            return j(e)
                        }))
                    },
                    setLocation: function(n, t) {
                        return void 0 === t && (t = {}), e.then((function(e) {
                            var r = $.location.protocol + "//" + $.location.host,
                                o = t.method,
                                i = void 0 === o ? "get" : o,
                                a = t.body;
                            if (0 === n.indexOf("/")) n = "" + r + n;
                            else if (!n.match(/^https?:\/\//) && 0 !== n.indexOf(r)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(n));
                            if ("post" === i) return u().then((function(e) {
                                if (!e) throw new Error("Can not post to window without target name");
                                ! function(e) {
                                    var n = e.url,
                                        t = e.target,
                                        r = e.body,
                                        o = e.method,
                                        i = void 0 === o ? "post" : o,
                                        a = document.createElement("form");
                                    if (a.setAttribute("target", t), a.setAttribute("method", i), a.setAttribute("action", n), a.style.display = "none", r)
                                        for (var u = 0, s = Object.keys(r); u < s.length; u++) {
                                            var c, f = s[u],
                                                d = document.createElement("input");
                                            d.setAttribute("name", f), d.setAttribute("value", null == (c = r[f]) ? void 0 : c.toString()), a.appendChild(d)
                                        }
                                    Ce().appendChild(a), a.submit(), Ce().removeChild(a)
                                }({
                                    url: n,
                                    target: e,
                                    method: i,
                                    body: a
                                })
                            }));
                            if ("get" !== i) throw new Error("Unsupported method: " + i);
                            if (C(e)) try {
                                if (e.location && "function" == typeof e.location.replace) return void e.location.replace(n)
                            } catch (e) {}
                            e.location = n
                        }))
                    },
                    setName: function(n) {
                        return e.then((function(e) {
                            var t = C(e),
                                r = H(e);
                            if (!t) throw new Error("Can not set name for cross-domain window: " + n);
                            S(e).name = n, r && r.setAttribute("name", n), i = p.resolve(n)
                        }))
                    }
                }
            }
            new p((function(e) {
                if ($.document && $.document.body) return e($.document.body);
                var n = setInterval((function() {
                    if ($.document && $.document.body) return clearInterval(n), e($.document.body)
                }), 10)
            }));
            var _n = function() {
                function e(e) {
                    var n = e.send,
                        t = e.win,
                        r = e.serializedWindow;
                    this.id = void 0, this.isProxyWindow = !0, this.serializedWindow = void 0, this.actualWindow = void 0, this.actualWindowPromise = void 0, this.send = void 0, this.name = void 0, this.actualWindowPromise = new p, this.serializedWindow = r || En(this.actualWindowPromise, {
                        send: n
                    }), nn("idToProxyWindow").set(this.getID(), this), t && this.setWindow(t, {
                        send: n
                    })
                }
                var n = e.prototype;
                return n.getID = function() {
                    return this.serializedWindow.id
                }, n.getType = function() {
                    return this.serializedWindow.getType()
                }, n.isPopup = function() {
                    return this.getType().then((function(e) {
                        return e === w.POPUP
                    }))
                }, n.setLocation = function(e, n) {
                    var t = this;
                    return this.serializedWindow.setLocation(e, n).then((function() {
                        return t
                    }))
                }, n.getName = function() {
                    return this.serializedWindow.getName()
                }, n.setName = function(e) {
                    var n = this;
                    return this.serializedWindow.setName(e).then((function() {
                        return n
                    }))
                }, n.close = function() {
                    var e = this;
                    return this.serializedWindow.close().then((function() {
                        return e
                    }))
                }, n.focus = function() {
                    var e = this,
                        n = this.isPopup(),
                        t = this.getName(),
                        r = p.hash({
                            isPopup: n,
                            name: t
                        }).then((function(e) {
                            var n = e.name;
                            e.isPopup && n && $.open("", n)
                        })),
                        o = this.serializedWindow.focus();
                    return p.all([r, o]).then((function() {
                        return e
                    }))
                }, n.isClosed = function() {
                    return this.serializedWindow.isClosed()
                }, n.getWindow = function() {
                    return this.actualWindow
                }, n.setWindow = function(e, n) {
                    var t = n.send;
                    this.actualWindow = e, this.actualWindowPromise.resolve(this.actualWindow), this.serializedWindow = En(this.actualWindowPromise, {
                        send: t,
                        id: this.getID()
                    }), an("winToProxyWindow").set(e, this)
                }, n.awaitWindow = function() {
                    return this.actualWindowPromise
                }, n.matchWindow = function(e, n) {
                    var t = this,
                        r = n.send;
                    return p.try((function() {
                        return t.actualWindow ? e === t.actualWindow : p.hash({
                            proxyInstanceID: t.getInstanceID(),
                            knownWindowInstanceID: fn(e, {
                                send: r
                            })
                        }).then((function(n) {
                            var o = n.proxyInstanceID === n.knownWindowInstanceID;
                            return o && t.setWindow(e, {
                                send: r
                            }), o
                        }))
                    }))
                }, n.unwrap = function() {
                    return this.actualWindow || this
                }, n.getInstanceID = function() {
                    return this.serializedWindow.getInstanceID()
                }, n.shouldClean = function() {
                    return Boolean(this.actualWindow && j(this.actualWindow))
                }, n.serialize = function() {
                    return this.serializedWindow
                }, e.unwrap = function(n) {
                    return e.isProxyWindow(n) ? n.unwrap() : n
                }, e.serialize = function(n, t) {
                    var r = t.send;
                    return bn(), e.toProxyWindow(n, {
                        send: r
                    }).serialize()
                }, e.deserialize = function(n, t) {
                    var r = t.send;
                    return bn(), nn("idToProxyWindow").get(n.id) || new e({
                        serializedWindow: n,
                        send: r
                    })
                }, e.isProxyWindow = function(e) {
                    return Boolean(e && !Y(e) && e.isProxyWindow)
                }, e.toProxyWindow = function(n, t) {
                    var r = t.send;
                    if (bn(), e.isProxyWindow(n)) return n;
                    var o = n;
                    return an("winToProxyWindow").get(o) || new e({
                        win: o,
                        send: r
                    })
                }, e
            }();

            function xn(e, n, t, r, o) {
                var i = an("methodStore"),
                    a = nn("proxyWindowMethods");
                _n.isProxyWindow(r) ? a.set(e, {
                    val: n,
                    name: t,
                    domain: o,
                    source: r
                }) : (a.del(e), i.getOrSet(r, (function() {
                    return {}
                }))[e] = {
                    domain: o,
                    name: t,
                    val: n,
                    source: r
                })
            }

            function Pn(e, n) {
                var t = an("methodStore"),
                    r = nn("proxyWindowMethods");
                return t.getOrSet(e, (function() {
                    return {}
                }))[n] || r.get(n)
            }

            function On(e, n, t, r, o) {
                var i, a, u;
                a = (i = {
                    on: o.on,
                    send: o.send
                }).on, u = i.send, nn("builtinListeners").getOrSet("functionCalls", (function() {
                    return a("postrobot_method", {
                        domain: "*"
                    }, (function(e) {
                        var n = e.source,
                            t = e.origin,
                            r = e.data,
                            o = r.id,
                            i = r.name,
                            a = Pn(n, o);
                        if (!a) throw new Error("Could not find method '" + i + "' with id: " + r.id + " in " + O($));
                        var s = a.source,
                            c = a.domain,
                            f = a.val;
                        return p.try((function() {
                            if (!L(c, t)) throw new Error("Method '" + r.name + "' domain " + JSON.stringify(Ee(a.domain) ? a.domain.source : a.domain) + " does not match origin " + t + " in " + O($));
                            if (_n.isProxyWindow(s)) return s.matchWindow(n, {
                                send: u
                            }).then((function(e) {
                                if (!e) throw new Error("Method call '" + r.name + "' failed - proxy window does not match source in " + O($))
                            }))
                        })).then((function() {
                            return f.apply({
                                source: n,
                                origin: t
                            }, r.args)
                        }), (function(e) {
                            return p.try((function() {
                                if (f.onError) return f.onError(e)
                            })).then((function() {
                                var n;
                                throw e.stack && (e.stack = "Remote call to " + i + "(" + (void 0 === (n = r.args) && (n = []), ge(n).map((function(e) {
                                    return "string" == typeof e ? "'" + e + "'" : void 0 === e ? "undefined" : null === e ? "null" : "boolean" == typeof e ? e.toString() : Array.isArray(e) ? "[ ... ]" : "object" == typeof e ? "{ ... }" : "function" == typeof e ? "() => { ... }" : "<" + typeof e + ">"
                                })).join(", ") + ") failed\n\n") + e.stack), e
                            }))
                        })).then((function(e) {
                            return {
                                result: e,
                                id: o,
                                name: i
                            }
                        }))
                    }))
                }));
                var s = t.__id__ || oe();
                e = _n.unwrap(e);
                var c = t.__name__ || t.name || r;
                return "string" == typeof c && "function" == typeof c.indexOf && 0 === c.indexOf("anonymous::") && (c = c.replace("anonymous::", r + "::")), _n.isProxyWindow(e) ? (xn(s, t, c, e, n), e.awaitWindow().then((function(e) {
                    xn(s, t, c, e, n)
                }))) : xn(s, t, c, e, n), pn("cross_domain_function", {
                    id: s,
                    name: c
                })
            }

            function Cn(e, n, t, r) {
                var o, i = r.on,
                    a = r.send;
                return function(e, n) {
                    void 0 === n && (n = vn);
                    var t = JSON.stringify(e, (function(e) {
                        var t = this[e];
                        if (ln(this)) return t;
                        var r = hn(t);
                        if (!r) return t;
                        var o = n[r] || wn[r];
                        return o ? o(t, e) : t
                    }));
                    return void 0 === t ? "undefined" : t
                }(t, ((o = {}).promise = function(t, r) {
                    return function(e, n, t, r, o) {
                        return pn("cross_domain_zalgo_promise", {
                            then: On(e, n, (function(e, n) {
                                return t.then(e, n)
                            }), r, {
                                on: o.on,
                                send: o.send
                            })
                        })
                    }(e, n, t, r, {
                        on: i,
                        send: a
                    })
                }, o.function = function(t, r) {
                    return On(e, n, t, r, {
                        on: i,
                        send: a
                    })
                }, o.object = function(e) {
                    return Y(e) || _n.isProxyWindow(e) ? pn("cross_domain_window", _n.serialize(e, {
                        send: a
                    })) : e
                }, o))
            }

            function Sn(e, n, t, r) {
                var o, i = r.send;
                return function(e, n) {
                    if (void 0 === n && (n = gn), "undefined" !== e) return JSON.parse(e, (function(e, t) {
                        if (ln(this)) return t;
                        var r, o;
                        if (ln(t) ? (r = t.__type__, o = t.__val__) : (r = hn(t), o = t), !r) return o;
                        var i = n[r] || yn[r];
                        return i ? i(o, e) : o
                    }))
                }(t, ((o = {}).cross_domain_zalgo_promise = function(e) {
                    return function(e, n, t) {
                        return new p(t.then)
                    }(0, 0, e)
                }, o.cross_domain_function = function(t) {
                    return function(e, n, t, r) {
                        var o = t.id,
                            i = t.name,
                            a = r.send,
                            u = function(t) {
                                function r() {
                                    var u = arguments;
                                    return _n.toProxyWindow(e, {
                                        send: a
                                    }).awaitWindow().then((function(e) {
                                        var s = Pn(e, o);
                                        if (s && s.val !== r) return s.val.apply({
                                            source: $,
                                            origin: O()
                                        }, u);
                                        var c = [].slice.call(u);
                                        return t.fireAndForget ? a(e, "postrobot_method", {
                                            id: o,
                                            name: i,
                                            args: c
                                        }, {
                                            domain: n,
                                            fireAndForget: !0
                                        }) : a(e, "postrobot_method", {
                                            id: o,
                                            name: i,
                                            args: c
                                        }, {
                                            domain: n,
                                            fireAndForget: !1
                                        }).then((function(e) {
                                            return e.data.result
                                        }))
                                    })).catch((function(e) {
                                        throw e
                                    }))
                                }
                                return void 0 === t && (t = {}), r.__name__ = i, r.__origin__ = n, r.__source__ = e, r.__id__ = o, r.origin = n, r
                            },
                            s = u();
                        return s.fireAndForget = u({
                            fireAndForget: !0
                        }), s
                    }(e, n, t, {
                        send: i
                    })
                }, o.cross_domain_window = function(e) {
                    return _n.deserialize(e, {
                        send: i
                    })
                }, o))
            }
            var An = {};

            function Tn(e, n, t, r) {
                var o = r.on,
                    i = r.send;
                return p.try((function() {
                    var r = an().getOrSet(e, (function() {
                        return {}
                    }));
                    return r.buffer = r.buffer || [], r.buffer.push(t), r.flush = r.flush || p.flush().then((function() {
                        if (j(e)) throw new Error("Window is closed");
                        var t, a = Cn(e, n, ((t = {}).__post_robot_10_0_44__ = r.buffer || [], t), {
                            on: o,
                            send: i
                        });
                        delete r.buffer;
                        for (var u = Object.keys(An), s = [], c = 0; c < u.length; c++) {
                            var f = u[c];
                            try {
                                An[f](e, a, n)
                            } catch (e) {
                                s.push(e)
                            }
                        }
                        if (s.length === u.length) throw new Error("All post-robot messaging strategies failed:\n\n" + s.map((function(e, n) {
                            return n + ". " + pe(e)
                        })).join("\n\n"))
                    })), r.flush.then((function() {
                        delete r.flush
                    }))
                })).then(le)
            }

            function Rn(e) {
                return nn("responseListeners").get(e)
            }

            function Dn(e) {
                nn("responseListeners").del(e)
            }

            function Wn(e) {
                return nn("erroredResponseListeners").has(e)
            }

            function Nn(e) {
                var n = e.name,
                    t = e.win,
                    r = e.domain,
                    o = an("requestListeners");
                if ("*" === t && (t = null), "*" === r && (r = null), !n) throw new Error("Name required to get request listener");
                for (var i = 0, a = [t, on()]; i < a.length; i++) {
                    var u = a[i];
                    if (u) {
                        var s = o.get(u);
                        if (s) {
                            var c = s[n];
                            if (c) {
                                if (r && "string" == typeof r) {
                                    if (c[r]) return c[r];
                                    if (c.__domain_regex__)
                                        for (var f = 0, d = c.__domain_regex__; f < d.length; f++) {
                                            var l = d[f],
                                                h = l.listener;
                                            if (L(l.regex, r)) return h
                                        }
                                }
                                if (c["*"]) return c["*"]
                            }
                        }
                    }
                }
            }

            function kn(e, n, t, r) {
                var o = r.on,
                    i = r.send,
                    a = Nn({
                        name: t.name,
                        win: e,
                        domain: n
                    }),
                    u = "postrobot_method" === t.name && t.data && "string" == typeof t.data.name ? t.data.name + "()" : t.name;

                function s(r, a, s) {
                    return p.flush().then((function() {
                        if (!t.fireAndForget && !j(e)) try {
                            return Tn(e, n, {
                                id: oe(),
                                origin: O($),
                                type: "postrobot_message_response",
                                hash: t.hash,
                                name: t.name,
                                ack: r,
                                data: a,
                                error: s
                            }, {
                                on: o,
                                send: i
                            })
                        } catch (e) {
                            throw new Error("Send response message failed for " + u + " in " + O() + "\n\n" + pe(e))
                        }
                    }))
                }
                return p.all([p.flush().then((function() {
                    if (!t.fireAndForget && !j(e)) try {
                        return Tn(e, n, {
                            id: oe(),
                            origin: O($),
                            type: "postrobot_message_ack",
                            hash: t.hash,
                            name: t.name
                        }, {
                            on: o,
                            send: i
                        })
                    } catch (e) {
                        throw new Error("Send ack message failed for " + u + " in " + O() + "\n\n" + pe(e))
                    }
                })), p.try((function() {
                    if (!a) throw new Error("No handler found for post message: " + t.name + " from " + n + " in " + $.location.protocol + "//" + $.location.host + $.location.pathname);
                    if (!L(a.domain, n)) throw new Error("Request origin " + n + " does not match domain " + a.domain.toString());
                    return a.handler({
                        source: e,
                        origin: n,
                        data: t.data
                    })
                })).then((function(e) {
                    return s("success", e)
                }), (function(e) {
                    return s("error", null, e)
                }))]).then(le).catch((function(e) {
                    if (a && a.handleError) return a.handleError(e);
                    throw e
                }))
            }

            function jn(e, n, t) {
                if (!Wn(t.hash)) {
                    var r = Rn(t.hash);
                    if (!r) throw new Error("No handler found for post message ack for message: " + t.name + " from " + n + " in " + $.location.protocol + "//" + $.location.host + $.location.pathname);
                    try {
                        if (!L(r.domain, n)) throw new Error("Ack origin " + n + " does not match domain " + r.domain.toString());
                        if (e !== r.win) throw new Error("Ack source does not match registered window")
                    } catch (e) {
                        r.promise.reject(e)
                    }
                    r.ack = !0
                }
            }

            function In(e, n, t) {
                if (!Wn(t.hash)) {
                    var r, o = Rn(t.hash);
                    if (!o) throw new Error("No handler found for post message response for message: " + t.name + " from " + n + " in " + $.location.protocol + "//" + $.location.host + $.location.pathname);
                    if (!L(o.domain, n)) throw new Error("Response origin " + n + " does not match domain " + (r = o.domain, Array.isArray(r) ? "(" + r.join(" | ") + ")" : m(r) ? "RegExp(" + r.toString() + ")" : r.toString()));
                    if (e !== o.win) throw new Error("Response source does not match registered window");
                    Dn(t.hash), "error" === t.ack ? o.promise.reject(t.error) : "success" === t.ack && o.promise.resolve({
                        source: e,
                        origin: n,
                        data: t.data
                    })
                }
            }

            function zn(e, n) {
                var t = n.on,
                    r = n.send,
                    o = nn("receivedMessages");
                try {
                    if (!$ || $.closed || !e.source) return
                } catch (e) {
                    return
                }
                var i = e.source,
                    a = e.origin,
                    u = function(e, n, t, r) {
                        var o, i = r.on,
                            a = r.send;
                        try {
                            o = Sn(n, t, e, {
                                on: i,
                                send: a
                            })
                        } catch (e) {
                            return
                        }
                        if (o && "object" == typeof o && null !== o) {
                            var u = o.__post_robot_10_0_44__;
                            if (Array.isArray(u)) return u
                        }
                    }(e.data, i, a, {
                        on: t,
                        send: r
                    });
                if (u) {
                    dn(i);
                    for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        if (o.has(c.id)) return;
                        if (o.set(c.id, !0), j(i) && !c.fireAndForget) return;
                        0 === c.origin.indexOf("file:") && (a = "file://");
                        try {
                            "postrobot_message_request" === c.type ? kn(i, a, c, {
                                on: t,
                                send: r
                            }) : "postrobot_message_response" === c.type ? In(i, a, c) : "postrobot_message_ack" === c.type && jn(i, a, c)
                        } catch (e) {
                            setTimeout((function() {
                                throw e
                            }), 0)
                        }
                    }
                }
            }

            function Mn(e, n, t) {
                if (!e) throw new Error("Expected name");
                if ("function" == typeof(n = n || {}) && (t = n, n = {}), !t) throw new Error("Expected handler");
                (n = n || {}).name = e, n.handler = t || n.handler;
                var r = n.window,
                    o = n.domain,
                    i = function e(n, t) {
                        var r = n.name,
                            o = n.win,
                            i = n.domain,
                            a = an("requestListeners");
                        if (!r || "string" != typeof r) throw new Error("Name required to add request listener");
                        if (Array.isArray(o)) {
                            for (var u = [], s = 0, c = o; s < c.length; s++) u.push(e({
                                name: r,
                                domain: i,
                                win: c[s]
                            }, t));
                            return {
                                cancel: function() {
                                    for (var e = 0; e < u.length; e++) u[e].cancel()
                                }
                            }
                        }
                        if (Array.isArray(i)) {
                            for (var f = [], d = 0, l = i; d < l.length; d++) f.push(e({
                                name: r,
                                win: o,
                                domain: l[d]
                            }, t));
                            return {
                                cancel: function() {
                                    for (var e = 0; e < f.length; e++) f[e].cancel()
                                }
                            }
                        }
                        var h = Nn({
                            name: r,
                            win: o,
                            domain: i
                        });
                        if (o && "*" !== o || (o = on()), i = i || "*", h) throw o && i ? new Error("Request listener already exists for " + r + " on domain " + i.toString() + " for " + (o === on() ? "wildcard" : "specified") + " window") : o ? new Error("Request listener already exists for " + r + " for " + (o === on() ? "wildcard" : "specified") + " window") : i ? new Error("Request listener already exists for " + r + " on domain " + i.toString()) : new Error("Request listener already exists for " + r);
                        var p, m, w = a.getOrSet(o, (function() {
                                return {}
                            })),
                            v = _e(w, r, (function() {
                                return {}
                            })),
                            y = i.toString();
                        return Ee(i) ? (p = _e(v, "__domain_regex__", (function() {
                            return []
                        }))).push(m = {
                            regex: i,
                            listener: t
                        }) : v[y] = t, {
                            cancel: function() {
                                delete v[y], m && (p.splice(p.indexOf(m, 1)), p.length || delete v.__domain_regex__), Object.keys(v).length || delete w[r], o && !Object.keys(w).length && a.del(o)
                            }
                        }
                    }({
                        name: e,
                        win: r,
                        domain: o
                    }, {
                        handler: n.handler,
                        handleError: n.errorHandler || function(e) {
                            throw e
                        },
                        window: r,
                        domain: o || "*",
                        name: e
                    });
                return {
                    cancel: function() {
                        i.cancel()
                    }
                }
            }
            An.postrobot_post_message = function(e, n, t) {
                0 === t.indexOf("file:") && (t = "*"), e.postMessage(n, t)
            }, An.postrobot_global = function(e, n) {
                if (! function(e) {
                        return (e = e || $).navigator.mockUserAgent || e.navigator.userAgent
                    }($).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) throw new Error("Global messaging not needed for browser");
                if (!C(e)) throw new Error("Post message through global disabled between different domain windows");
                if (!1 !== U($, e)) throw new Error("Can only use global to communicate between two different windows, not between frames");
                var t = Qe(e);
                if (!t) throw new Error("Can not find postRobot global on foreign window");
                t.receiveMessage({
                    source: $,
                    origin: O(),
                    data: n
                })
            };
            var Fn = function e(n, t, r, o) {
                var i = (o = o || {}).domain || "*",
                    a = o.timeout || -1,
                    u = o.timeout || 5e3,
                    s = o.fireAndForget || !1;
                return p.try((function() {
                    if (function(e, n, t) {
                            if (!e) throw new Error("Expected name");
                            if (t && "string" != typeof t && !Array.isArray(t) && !Ee(t)) throw new TypeError("Can not send " + e + ". Expected domain " + JSON.stringify(t) + " to be a string, array, or regex");
                            if (j(n)) throw new Error("Can not send " + e + ". Target window is closed")
                        }(t, n, i), function(e, n) {
                            var t = z(n);
                            if (t) return t === e;
                            if (n === e) return !1;
                            if (D(n) === n) return !1;
                            for (var r = 0, o = T(e); r < o.length; r++)
                                if (o[r] === n) return !0;
                            return !1
                        }($, n)) return function(e, n, t) {
                        void 0 === n && (n = 5e3), void 0 === t && (t = "Window");
                        var r = function(e) {
                            return an("helloPromises").getOrSet(e, (function() {
                                return new p
                            }))
                        }(e);
                        return -1 !== n && (r = r.timeout(n, new Error(t + " did not load after " + n + "ms"))), r
                    }(n, u)
                })).then((function(t) {
                    return function(e, n, t, r) {
                        var o = r.send;
                        return p.try((function() {
                            return "string" == typeof n ? n : p.try((function() {
                                return t || cn(e, {
                                    send: o
                                }).then((function(e) {
                                    return e.domain
                                }))
                            })).then((function(e) {
                                if (!L(n, n)) throw new Error("Domain " + me(n) + " does not match " + me(n));
                                return e
                            }))
                        }))
                    }(n, i, (void 0 === t ? {} : t).domain, {
                        send: e
                    })
                })).then((function(o) {
                    var i = o,
                        u = "postrobot_method" === t && r && "string" == typeof r.name ? r.name + "()" : t,
                        c = new p,
                        f = t + "_" + oe();
                    if (!s) {
                        var d = {
                            name: t,
                            win: n,
                            domain: i,
                            promise: c
                        };
                        ! function(e, n) {
                            nn("responseListeners").set(e, n)
                        }(f, d);
                        var l = an("requestPromises").getOrSet(n, (function() {
                            return []
                        }));
                        l.push(c), c.catch((function() {
                            ! function(e) {
                                nn("erroredResponseListeners").set(e, !0)
                            }(f), Dn(f)
                        }));
                        var h = function(e) {
                                return an("knownWindows").get(e, !1)
                            }(n) ? 1e4 : 2e3,
                            m = a,
                            w = h,
                            v = m,
                            y = ye((function() {
                                return j(n) ? c.reject(new Error("Window closed for " + t + " before " + (d.ack ? "response" : "ack"))) : d.cancelled ? c.reject(new Error("Response listener was cancelled for " + t)) : (w = Math.max(w - 500, 0), -1 !== v && (v = Math.max(v - 500, 0)), d.ack || 0 !== w ? 0 === v ? c.reject(new Error("No response for postMessage " + u + " in " + O() + " in " + m + "ms")) : void 0 : c.reject(new Error("No ack for postMessage " + u + " in " + O() + " in " + h + "ms")))
                            }), 500);
                        c.finally((function() {
                            y.cancel(), l.splice(l.indexOf(c, 1))
                        })).catch(le)
                    }
                    return Tn(n, i, {
                        id: oe(),
                        origin: O($),
                        type: "postrobot_message_request",
                        hash: f,
                        name: t,
                        data: r,
                        fireAndForget: s
                    }, {
                        on: Mn,
                        send: e
                    }).then((function() {
                        return s ? c.resolve() : c
                    }), (function(e) {
                        throw new Error("Send request message failed for " + u + " in " + O() + "\n\n" + pe(e))
                    }))
                }))
            };

            function Un(e) {
                return _n.toProxyWindow(e, {
                    send: Fn
                })
            }

            function Ln(e) {
                if (!C(e)) throw new Error("Can not get global for window on different domain");
                return e.__zoid_9_0_86__ || (e.__zoid_9_0_86__ = {}), e.__zoid_9_0_86__
            }

            function Bn(e, n) {
                try {
                    return n(Ln(e))
                } catch (e) {}
            }

            function qn(e) {
                return {
                    get: function() {
                        var n = this;
                        return p.try((function() {
                            if (n.source && n.source !== $) throw new Error("Can not call get on proxy object from a remote window");
                            return e
                        }))
                    }
                }
            }

            function Yn(e) {
                return re(JSON.stringify(e))
            }

            function Hn(e) {
                var n = Ln(e);
                return n.references = n.references || {}, n.references
            }

            function Jn(e) {
                var n, t, r = e.data,
                    o = e.metaData,
                    i = e.sender,
                    a = e.receiver,
                    u = e.passByReference,
                    s = void 0 !== u && u,
                    c = e.basic,
                    f = void 0 !== c && c,
                    d = Un(a.win),
                    l = f ? JSON.stringify(r) : Cn(d, a.domain, r, {
                        on: Mn,
                        send: Fn
                    }),
                    h = s ? (n = l, t = oe(), Hn($)[t] = n, {
                        type: "uid",
                        uid: t
                    }) : {
                        type: "raw",
                        val: l
                    };
                return {
                    serializedData: Yn({
                        sender: {
                            domain: i.domain
                        },
                        metaData: o,
                        reference: h
                    }),
                    cleanReference: function() {
                        var e, n;
                        e = $, "uid" === (n = h).type && delete Hn(e)[n.uid]
                    }
                }
            }

            function $n(e) {
                var n, t, r = e.sender,
                    o = e.basic,
                    i = void 0 !== o && o,
                    a = function(e) {
                        return JSON.parse(function(e) {
                            if ("function" == typeof atob) return decodeURIComponent([].map.call(atob(e), (function(e) {
                                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                            })).join(""));
                            if (void 0 !== ue) return ue.from(e, "base64").toString("utf8");
                            throw new Error("Can not find window.atob or Buffer")
                        }(e))
                    }(e.data),
                    u = a.reference,
                    s = a.metaData;
                n = "function" == typeof r.win ? r.win({
                    metaData: s
                }) : r.win, t = "function" == typeof r.domain ? r.domain({
                    metaData: s
                }) : "string" == typeof r.domain ? r.domain : a.sender.domain;
                var c = function(e, n) {
                    if ("raw" === n.type) return n.val;
                    if ("uid" === n.type) return Hn(e)[n.uid];
                    throw new Error("Unsupported ref type: " + n.type)
                }(n, u);
                return {
                    data: i ? JSON.parse(c) : function(e, n, t) {
                        return Sn(e, n, t, {
                            on: Mn,
                            send: Fn
                        })
                    }(n, t, c),
                    metaData: s,
                    sender: {
                        win: n,
                        domain: t
                    },
                    reference: u
                }
            }
            var Zn = {
                    STRING: "string",
                    OBJECT: "object",
                    FUNCTION: "function",
                    BOOLEAN: "boolean",
                    NUMBER: "number",
                    ARRAY: "array"
                },
                Vn = {
                    JSON: "json",
                    DOTIFY: "dotify",
                    BASE64: "base64"
                },
                Gn = w,
                Xn = {
                    RENDER: "zoid-render",
                    RENDERED: "zoid-rendered",
                    DISPLAY: "zoid-display",
                    ERROR: "zoid-error",
                    CLOSE: "zoid-close",
                    DESTROY: "zoid-destroy",
                    PROPS: "zoid-props",
                    RESIZE: "zoid-resize",
                    FOCUS: "zoid-focus"
                };

            function Kn(e) {
                return "__zoid__" + e.name + "__" + e.serializedPayload + "__"
            }

            function Qn(e) {
                if (!e) throw new Error("No window name");
                var n = e.split("__"),
                    t = n[1],
                    r = n[2],
                    o = n[3];
                if ("zoid" !== t) throw new Error("Window not rendered by zoid - got " + t);
                if (!r) throw new Error("Expected component name");
                if (!o) throw new Error("Expected serialized payload ref");
                return {
                    name: r,
                    serializedInitialPayload: o
                }
            }
            var et = fe((function(e) {
                var n = $n({
                    data: Qn(e).serializedInitialPayload,
                    sender: {
                        win: function(e) {
                            return function(e) {
                                if ("opener" === e.type) return Pe("opener", _($));
                                if ("parent" === e.type && "number" == typeof e.distance) return Pe("parent", (n = $, void 0 === (t = e.distance) && (t = 1), function(e, n) {
                                    void 0 === n && (n = 1);
                                    for (var t = e, r = 0; r < n; r++) {
                                        if (!t) return;
                                        t = E(t)
                                    }
                                    return t
                                }(n, F(n) - t)));
                                var n, t;
                                if ("global" === e.type && e.uid && "string" == typeof e.uid) {
                                    var r = function() {
                                        var n = e.uid,
                                            t = z($);
                                        if (!t) throw new Error("Can not find ancestor window");
                                        for (var r = 0, o = W(t); r < o.length; r++) {
                                            var i = o[r];
                                            if (C(i)) {
                                                var a = Bn(i, (function(e) {
                                                    return e.windows && e.windows[n]
                                                }));
                                                if (a) return {
                                                    v: a
                                                }
                                            }
                                        }
                                    }();
                                    if ("object" == typeof r) return r.v
                                } else if ("name" === e.type) {
                                    var o = e.name;
                                    return Pe("namedWindow", function(e, n) {
                                        return I(e, n) || function e(n, t) {
                                            var r = I(n, t);
                                            if (r) return r;
                                            for (var o = 0, i = T(n); o < i.length; o++) {
                                                var a = e(i[o], t);
                                                if (a) return a
                                            }
                                        }(D(e) || e, n)
                                    }(Pe("ancestor", z($)), o))
                                }
                                throw new Error("Unable to find " + e.type + " parent component window")
                            }(e.metaData.windowRef)
                        }
                    }
                });
                return {
                    parent: n.sender,
                    payload: n.data,
                    reference: n.reference
                }
            }));

            function nt() {
                return et($.name)
            }

            function tt(e, n) {
                if (void 0 === n && (n = $), e === E(n)) return {
                    type: "parent",
                    distance: F(e)
                };
                if (e === _(n)) return {
                    type: "opener"
                };
                if (C(e) && (r = e) !== D(r)) {
                    var t = S(e).name;
                    if (t) return {
                        type: "name",
                        name: t
                    }
                }
                var r
            }

            function rt(e, n, t, r, o) {
                if (!e.hasOwnProperty(t)) return r;
                var i = e[t];
                return "function" == typeof i.childDecorate ? i.childDecorate({
                    value: r,
                    uid: o.uid,
                    tag: o.tag,
                    close: o.close,
                    focus: o.focus,
                    onError: o.onError,
                    onProps: o.onProps,
                    resize: o.resize,
                    getParent: o.getParent,
                    getParentDomain: o.getParentDomain,
                    show: o.show,
                    hide: o.hide,
                    export: o.export,
                    getSiblings: o.getSiblings
                }) : r
            }

            function ot() {
                return p.try((function() {
                    $.focus()
                }))
            }

            function it() {
                return p.try((function() {
                    $.close()
                }))
            }
            var at = function() {
                    return le
                },
                ut = function(e) {
                    return he(e.value)
                };

            function st(e, n, t) {
                for (var r = 0, o = Object.keys(i({}, e, n)); r < o.length; r++) {
                    var a = o[r];
                    t(a, n[a], e[a])
                }
            }

            function ct(e, n, t) {
                var r = {};
                return p.all(function(e, n, o) {
                    var i = [];
                    return st(e, n, (function(e, n, o) {
                        var a = function(e, n, o) {
                            return p.resolve().then((function() {
                                var i, a;
                                if (null != o && n) {
                                    var u = (i = {}, i.get = n.queryParam, i.post = n.bodyParam, i)[t],
                                        s = (a = {}, a.get = n.queryValue, a.post = n.bodyValue, a)[t];
                                    if (u) return p.hash({
                                        finalParam: p.try((function() {
                                            return "function" == typeof u ? u({
                                                value: o
                                            }) : "string" == typeof u ? u : e
                                        })),
                                        finalValue: p.try((function() {
                                            return "function" == typeof s && be(o) ? s({
                                                value: o
                                            }) : o
                                        }))
                                    }).then((function(t) {
                                        var o, i = t.finalParam,
                                            a = t.finalValue;
                                        if ("boolean" == typeof a) o = a.toString();
                                        else if ("string" == typeof a) o = a.toString();
                                        else if ("object" == typeof a && null !== a) {
                                            if (n.serialization === Vn.JSON) o = JSON.stringify(a);
                                            else if (n.serialization === Vn.BASE64) o = re(JSON.stringify(a));
                                            else if (n.serialization === Vn.DOTIFY || !n.serialization) {
                                                o = function e(n, t, r) {
                                                    for (var o in void 0 === t && (t = ""), void 0 === r && (r = {}), t = t ? t + "." : t, n) n.hasOwnProperty(o) && null != n[o] && "function" != typeof n[o] && (n[o] && Array.isArray(n[o]) && n[o].length && n[o].every((function(e) {
                                                        return "object" != typeof e
                                                    })) ? r["" + t + o + "[]"] = n[o].join(",") : n[o] && "object" == typeof n[o] ? r = e(n[o], "" + t + o, r) : r["" + t + o] = n[o].toString());
                                                    return r
                                                }(a, e);
                                                for (var u = 0, s = Object.keys(o); u < s.length; u++) {
                                                    var c = s[u];
                                                    r[c] = o[c]
                                                }
                                                return
                                            }
                                        } else "number" == typeof a && (o = a.toString());
                                        r[i] = o
                                    }))
                                }
                            }))
                        }(e, n, o);
                        i.push(a)
                    })), i
                }(n, e)).then((function() {
                    return r
                }))
            }

            function ft(e) {
                var n, t, r, o, a, u, s, c, f = e.uid,
                    d = e.options,
                    l = e.overrides,
                    h = void 0 === l ? {} : l,
                    m = e.parentWin,
                    w = void 0 === m ? $ : m,
                    v = d.propsDef,
                    y = d.containerTemplate,
                    g = d.prerenderTemplate,
                    b = d.tag,
                    E = d.name,
                    _ = d.attributes,
                    x = d.dimensions,
                    P = d.autoResize,
                    A = d.url,
                    T = d.domain,
                    R = d.exports,
                    D = new p,
                    W = [],
                    N = xe(),
                    k = {},
                    I = {},
                    M = {
                        visible: !0
                    },
                    Y = h.event ? h.event : (n = {}, t = {}, r = {
                        on: function(e, n) {
                            var r = t[e] = t[e] || [];
                            r.push(n);
                            var o = !1;
                            return {
                                cancel: function() {
                                    o || (o = !0, r.splice(r.indexOf(n), 1))
                                }
                            }
                        },
                        once: function(e, n) {
                            var t = r.on(e, (function() {
                                t.cancel(), n()
                            }));
                            return t
                        },
                        trigger: function(e) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            var i = t[e],
                                a = [];
                            if (i)
                                for (var u = function(e) {
                                        var n = i[e];
                                        a.push(p.try((function() {
                                            return n.apply(void 0, r)
                                        })))
                                    }, s = 0; s < i.length; s++) u(s);
                            return p.all(a).then(le)
                        },
                        triggerOnce: function(e) {
                            if (n[e]) return p.resolve();
                            n[e] = !0;
                            for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) o[i - 1] = arguments[i];
                            return r.trigger.apply(r, [e].concat(o))
                        },
                        reset: function() {
                            t = {}
                        }
                    }),
                    H = h.props ? h.props : {},
                    J = h.onError,
                    Z = h.getProxyContainer,
                    V = h.show,
                    G = h.hide,
                    X = h.close,
                    K = h.renderContainer,
                    Q = h.getProxyWindow,
                    ee = h.setProxyWin,
                    ne = h.openFrame,
                    te = h.openPrerenderFrame,
                    re = h.prerender,
                    ie = h.open,
                    ae = h.openPrerender,
                    ue = h.watchForUnload,
                    se = h.getInternalState,
                    ce = h.setInternalState,
                    de = function() {
                        return p.try((function() {
                            return h.resolveInitPromise ? h.resolveInitPromise() : D.resolve()
                        }))
                    },
                    me = function(e) {
                        return p.try((function() {
                            return h.rejectInitPromise ? h.rejectInitPromise(e) : D.reject(e)
                        }))
                    },
                    ve = function(e) {
                        for (var n = {}, t = 0, r = Object.keys(H); t < r.length; t++) {
                            var o = r[t],
                                i = v[o];
                            i && !1 === i.sendToChild || i && i.sameDomain && !L(e, O($)) || (n[o] = H[o])
                        }
                        return p.hash(n)
                    },
                    Ee = function() {
                        return p.try((function() {
                            return se ? se() : M
                        }))
                    },
                    _e = function(e) {
                        return p.try((function() {
                            return ce ? ce(e) : M = i({}, M, e)
                        }))
                    },
                    Pe = function() {
                        return Q ? Q() : p.try((function() {
                            var e = H.window;
                            if (e) {
                                var n = Un(e);
                                return N.register((function() {
                                    return e.close()
                                })), n
                            }
                            return new _n({
                                send: Fn
                            })
                        }))
                    },
                    Oe = function(e) {
                        return ee ? ee(e) : p.try((function() {
                            o = e
                        }))
                    },
                    Ce = function() {
                        return V ? V() : p.hash({
                            setState: _e({
                                visible: !0
                            }),
                            showElement: a ? a.get().then(Be) : null
                        }).then(le)
                    },
                    Se = function() {
                        return G ? G() : p.hash({
                            setState: _e({
                                visible: !1
                            }),
                            showElement: a ? a.get().then(qe) : null
                        }).then(le)
                    },
                    Ae = function() {
                        return "function" == typeof A ? A({
                            props: H
                        }) : A
                    },
                    Te = function() {
                        return "function" == typeof _ ? _({
                            props: H
                        }) : _
                    },
                    Re = function() {
                        return B(Ae())
                    },
                    Ne = function(e, n) {
                        var t = n.windowName;
                        return ne ? ne(e, {
                            windowName: t
                        }) : p.try((function() {
                            if (e === Gn.IFRAME) return qn(Ue({
                                attributes: i({
                                    name: t,
                                    title: E
                                }, Te().iframe)
                            }))
                        }))
                    },
                    Ie = function(e) {
                        return te ? te(e) : p.try((function() {
                            if (e === Gn.IFRAME) return qn(Ue({
                                attributes: i({
                                    name: "__zoid_prerender_frame__" + E + "_" + oe() + "__",
                                    title: "prerender__" + E
                                }, Te().iframe)
                            }))
                        }))
                    },
                    ze = function(e, n, t) {
                        return ae ? ae(e, n, t) : p.try((function() {
                            if (e === Gn.IFRAME) {
                                if (!t) throw new Error("Expected proxy frame to be passed");
                                return t.get().then((function(e) {
                                    return N.register((function() {
                                        return Ye(e)
                                    })), Fe(e).then((function(e) {
                                        return S(e)
                                    })).then((function(e) {
                                        return Un(e)
                                    }))
                                }))
                            }
                            throw new Error("No render context available for " + e)
                        }))
                    },
                    Me = function() {
                        return p.try((function() {
                            if (o) return p.all([Y.trigger(Xn.FOCUS), o.focus()]).then(le)
                        }))
                    },
                    Ze = function() {
                        var e = Ln($);
                        return e.windows = e.windows || {}, e.windows[f] = $, N.register((function() {
                            delete e.windows[f]
                        })), f
                    },
                    Ve = function(e, n, t, r) {
                        if (n === O($)) return {
                            type: "global",
                            uid: Ze()
                        };
                        if (e !== $) throw new Error("Can not construct cross-domain window reference for different target window");
                        if (H.window) {
                            var o = r.getWindow();
                            if (!o) throw new Error("Can not construct cross-domain window reference for lazy window prop");
                            if (z(o) !== $) throw new Error("Can not construct cross-domain window reference for window prop with different ancestor")
                        }
                        if (t === Gn.POPUP) return {
                            type: "opener"
                        };
                        if (t === Gn.IFRAME) return {
                            type: "parent",
                            distance: F($)
                        };
                        throw new Error("Can not construct window reference for child")
                    },
                    Ge = function(e, n) {
                        return p.try((function() {
                            s = e, u = n, de(), N.register((function() {
                                return n.close.fireAndForget().catch(le)
                            }))
                        }))
                    },
                    Xe = function(e) {
                        var n = e.width,
                            t = e.height;
                        return p.try((function() {
                            Y.trigger(Xn.RESIZE, {
                                width: n,
                                height: t
                            })
                        }))
                    },
                    Ke = function(e) {
                        return p.try((function() {
                            return Y.trigger(Xn.DESTROY)
                        })).catch(le).then((function() {
                            return N.all(e)
                        })).then((function() {
                            D.asyncReject(e || new Error("Component destroyed"))
                        }))
                    },
                    Qe = fe((function(e) {
                        return p.try((function() {
                            if (X) {
                                if (j(X.__source__)) return;
                                return X()
                            }
                            return p.try((function() {
                                return Y.trigger(Xn.CLOSE)
                            })).then((function() {
                                return Ke(e || new Error("Component closed"))
                            }))
                        }))
                    })),
                    en = function(e, n) {
                        var t = n.proxyWin,
                            r = n.proxyFrame,
                            o = n.windowName;
                        return ie ? ie(e, {
                            proxyWin: t,
                            proxyFrame: r,
                            windowName: o
                        }) : p.try((function() {
                            if (e === Gn.IFRAME) {
                                if (!r) throw new Error("Expected proxy frame to be passed");
                                return r.get().then((function(e) {
                                    return Fe(e).then((function(n) {
                                        return N.register((function() {
                                            return Ye(e)
                                        })), N.register((function() {
                                            return function(e) {
                                                for (var n = 0, t = an("requestPromises").get(e, []); n < t.length; n++) t[n].reject(new Error("Window " + (j(e) ? "closed" : "cleaned up") + " before response")).catch(le)
                                            }(n)
                                        })), n
                                    }))
                                }))
                            }
                            throw new Error("No render context available for " + e)
                        })).then((function(e) {
                            return t.setWindow(e, {
                                send: Fn
                            }), t.setName(o).then((function() {
                                return t
                            }))
                        }))
                    },
                    nn = function() {
                        return p.try((function() {
                            var e = Le($, "unload", he((function() {
                                    Ke(new Error("Window navigated away"))
                                }))),
                                n = q(w, Ke, 3e3);
                            if (N.register(n.cancel), N.register(e.cancel), ue) return ue()
                        }))
                    },
                    tn = function(e) {
                        var n = !1;
                        return e.isClosed().then((function(t) {
                            return t ? (n = !0, Qe(new Error("Detected component window close"))) : p.delay(200).then((function() {
                                return e.isClosed()
                            })).then((function(e) {
                                if (e) return n = !0, Qe(new Error("Detected component window close"))
                            }))
                        })).then((function() {
                            return n
                        }))
                    },
                    rn = function(e) {
                        return J ? J(e) : p.try((function() {
                            if (-1 === W.indexOf(e)) return W.push(e), D.asyncReject(e), Y.trigger(Xn.ERROR, e)
                        }))
                    },
                    on = new p,
                    un = function(e) {
                        return p.try((function() {
                            on.resolve(e)
                        }))
                    };
                Ge.onError = rn;
                var sn = function(e, n) {
                        return e({
                            uid: f,
                            container: n.container,
                            context: n.context,
                            doc: n.doc,
                            frame: n.frame,
                            prerenderFrame: n.prerenderFrame,
                            focus: Me,
                            close: Qe,
                            state: k,
                            props: H,
                            tag: b,
                            dimensions: "function" == typeof x ? x({
                                props: H
                            }) : x,
                            event: Y
                        })
                    },
                    cn = function(e, n) {
                        var t = n.context;
                        return re ? re(e, {
                            context: t
                        }) : p.try((function() {
                            if (g) {
                                var n = e.getWindow();
                                if (n && C(n) && function(e) {
                                        try {
                                            if (!e.location.href) return !0;
                                            if ("about:blank" === e.location.href) return !0
                                        } catch (e) {}
                                        return !1
                                    }(n)) {
                                    var r = (n = S(n)).document,
                                        o = sn(g, {
                                            context: t,
                                            doc: r
                                        });
                                    if (o) {
                                        if (o.ownerDocument !== r) throw new Error("Expected prerender template to have been created with document from child window");
                                        ! function(e, n) {
                                            var t = n.tagName.toLowerCase();
                                            if ("html" !== t) throw new Error("Expected element to be html, got " + t);
                                            for (var r = e.document.documentElement, o = 0, i = ge(r.children); o < i.length; o++) r.removeChild(i[o]);
                                            for (var a = 0, u = ge(n.children); a < u.length; a++) r.appendChild(u[a])
                                        }(n, o);
                                        var i = P.width,
                                            a = void 0 !== i && i,
                                            u = P.height,
                                            s = void 0 !== u && u,
                                            c = P.element,
                                            f = void 0 === c ? "body" : c;
                                        if ((f = ke(f, r)) && (a || s)) {
                                            var d = Je(f, (function(e) {
                                                Xe({
                                                    width: a ? e.width : void 0,
                                                    height: s ? e.height : void 0
                                                })
                                            }), {
                                                width: a,
                                                height: s,
                                                win: n
                                            });
                                            Y.on(Xn.RENDERED, d.cancel)
                                        }
                                    }
                                }
                            }
                        }))
                    },
                    fn = function(e, n) {
                        var t = n.proxyFrame,
                            r = n.proxyPrerenderFrame,
                            o = n.context,
                            i = n.rerender;
                        return K ? K(e, {
                            proxyFrame: t,
                            proxyPrerenderFrame: r,
                            context: o,
                            rerender: i
                        }) : p.hash({
                            container: e.get(),
                            frame: t ? t.get() : null,
                            prerenderFrame: r ? r.get() : null,
                            internalState: Ee()
                        }).then((function(e) {
                            var n = e.container,
                                t = e.internalState.visible,
                                r = sn(y, {
                                    context: o,
                                    container: n,
                                    frame: e.frame,
                                    prerenderFrame: e.prerenderFrame,
                                    doc: document
                                });
                            if (r) {
                                t || qe(r), We(n, r);
                                var u = function(e, n) {
                                    n = he(n);
                                    var t, r, o, i = !1,
                                        a = [],
                                        u = function() {
                                            i = !0;
                                            for (var e = 0; e < a.length; e++) a[e].disconnect();
                                            t && t.cancel(), o && o.removeEventListener("unload", s), r && Ye(r)
                                        },
                                        s = function() {
                                            i || (n(), u())
                                        };
                                    if (He(e)) return s(), {
                                        cancel: u
                                    };
                                    if ($.MutationObserver)
                                        for (var c = e.parentElement; c;) {
                                            var f = new $.MutationObserver((function() {
                                                He(e) && s()
                                            }));
                                            f.observe(c, {
                                                childList: !0
                                            }), a.push(f), c = c.parentElement
                                        }
                                    return (r = document.createElement("iframe")).setAttribute("name", "__detect_close_" + oe() + "__"), r.style.display = "none", Fe(r).then((function(e) {
                                        (o = S(e)).addEventListener("unload", s)
                                    })), e.appendChild(r), t = ye((function() {
                                        He(e) && s()
                                    }), 1e3), {
                                        cancel: u
                                    }
                                }(r, (function() {
                                    var e = new Error("Detected container element removed from DOM");
                                    return p.delay(1).then((function() {
                                        if (!He(r)) return N.all(e), i().then(de, me);
                                        Qe(e)
                                    }))
                                }));
                                return N.register((function() {
                                    return u.cancel()
                                })), N.register((function() {
                                    return Ye(r)
                                })), a = qn(r)
                            }
                        }))
                    },
                    dn = function() {
                        return {
                            state: k,
                            event: Y,
                            close: Qe,
                            focus: Me,
                            resize: Xe,
                            onError: rn,
                            updateProps: hn,
                            show: Ce,
                            hide: Se
                        }
                    },
                    ln = function(e) {
                        void 0 === e && (e = {});
                        var n = c,
                            t = dn();
                        we(I, e),
                            function(e, n, t, r, o) {
                                var i = r.state,
                                    a = r.close,
                                    u = r.focus,
                                    s = r.event,
                                    c = r.onError;
                                st(t, e, (function(e, r, f) {
                                    var d = !1,
                                        l = f;
                                    Object.defineProperty(n, e, {
                                        configurable: !0,
                                        enumerable: !0,
                                        get: function() {
                                            return d ? l : (d = !0, function() {
                                                if (!r) return l;
                                                var d = r.alias;
                                                if (d && !be(f) && be(t[d]) && (l = t[d]), r.value && (l = r.value({
                                                        props: n,
                                                        state: i,
                                                        close: a,
                                                        focus: u,
                                                        event: s,
                                                        onError: c,
                                                        container: o
                                                    })), !r.default || be(l) || be(t[e]) || (l = r.default({
                                                        props: n,
                                                        state: i,
                                                        close: a,
                                                        focus: u,
                                                        event: s,
                                                        onError: c,
                                                        container: o
                                                    })), be(l)) {
                                                    if (r.type === Zn.ARRAY ? !Array.isArray(l) : typeof l !== r.type) throw new TypeError("Prop is not of type " + r.type + ": " + e)
                                                } else if (!1 !== r.required && !be(t[e])) throw new Error('Expected prop "' + e + '" to be defined');
                                                return be(l) && r.decorate && (l = r.decorate({
                                                    value: l,
                                                    props: n,
                                                    state: i,
                                                    close: a,
                                                    focus: u,
                                                    event: s,
                                                    onError: c,
                                                    container: o
                                                })), l
                                            }())
                                        }
                                    })
                                })), st(n, e, le)
                            }(v, H, I, t, n)
                    },
                    hn = function(e) {
                        return ln(e), D.then((function() {
                            var e = u,
                                n = o;
                            if (e && n && s) return ve(s).then((function(t) {
                                return e.updateProps(t).catch((function(e) {
                                    return tn(n).then((function(n) {
                                        if (!n) throw e
                                    }))
                                }))
                            }))
                        }))
                    },
                    pn = function(e) {
                        return Z ? Z(e) : p.try((function() {
                            return je(e)
                        })).then((function(e) {
                            return $e(e) && (e = function e(n) {
                                var t = function(e) {
                                    var n = function(e) {
                                        for (; e.parentNode;) e = e.parentNode;
                                        if ($e(e)) return e
                                    }(e);
                                    if (n && n.host) return n.host
                                }(n);
                                if (!t) throw new Error("Element is not in shadow dom");
                                var r = "shadow-slot-" + oe(),
                                    o = document.createElement("slot");
                                o.setAttribute("name", r), n.appendChild(o);
                                var i = document.createElement("div");
                                return i.setAttribute("slot", r), t.appendChild(i), $e(t) ? e(i) : i
                            }(e)), c = e, qn(e)
                        }))
                    };
                return {
                    init: function() {
                        Y.on(Xn.RENDER, (function() {
                            return H.onRender()
                        })), Y.on(Xn.DISPLAY, (function() {
                            return H.onDisplay()
                        })), Y.on(Xn.RENDERED, (function() {
                            return H.onRendered()
                        })), Y.on(Xn.CLOSE, (function() {
                            return H.onClose()
                        })), Y.on(Xn.DESTROY, (function() {
                            return H.onDestroy()
                        })), Y.on(Xn.RESIZE, (function() {
                            return H.onResize()
                        })), Y.on(Xn.FOCUS, (function() {
                            return H.onFocus()
                        })), Y.on(Xn.PROPS, (function(e) {
                            return H.onProps(e)
                        })), Y.on(Xn.ERROR, (function(e) {
                            return H && H.onError ? H.onError(e) : me(e).then((function() {
                                setTimeout((function() {
                                    throw e
                                }), 1)
                            }))
                        })), N.register(Y.reset)
                    },
                    render: function(e) {
                        var n = e.target,
                            t = e.container,
                            r = e.context,
                            i = e.rerender;
                        return p.try((function() {
                            var e = Re(),
                                a = T || Re();
                            ! function(e, n, t) {
                                if (e !== $) {
                                    if (!U($, e)) throw new Error("Can only renderTo an adjacent frame");
                                    var r = O();
                                    if (!L(n, r) && !C(e)) throw new Error("Can not render remotely to " + n.toString() + " - can only render to " + r);
                                    if (t && "string" != typeof t) throw new Error("Container passed to renderTo must be a string selector, got " + typeof t + " }")
                                }
                            }(n, a, t);
                            var u = p.try((function() {
                                    if (n !== $) return function(e, n) {
                                        for (var t = {}, r = 0, o = Object.keys(H); r < o.length; r++) {
                                            var i = o[r],
                                                a = v[i];
                                            a && a.allowDelegate && (t[i] = H[i])
                                        }
                                        var u = Fn(n, "zoid_delegate_" + E, {
                                            uid: f,
                                            overrides: {
                                                props: t,
                                                event: Y,
                                                close: Qe,
                                                onError: rn,
                                                getInternalState: Ee,
                                                setInternalState: _e,
                                                resolveInitPromise: de,
                                                rejectInitPromise: me
                                            }
                                        }).then((function(e) {
                                            var t = e.data.parent;
                                            return N.register((function(e) {
                                                if (!j(n)) return t.destroy(e)
                                            })), t.getDelegateOverrides()
                                        })).catch((function(e) {
                                            throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + pe(e))
                                        }));
                                        return Z = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.getProxyContainer.apply(e, n)
                                            }))
                                        }, K = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.renderContainer.apply(e, n)
                                            }))
                                        }, V = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.show.apply(e, n)
                                            }))
                                        }, G = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.hide.apply(e, n)
                                            }))
                                        }, ue = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.watchForUnload.apply(e, n)
                                            }))
                                        }, e === Gn.IFRAME && (Q = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.getProxyWindow.apply(e, n)
                                            }))
                                        }, ne = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.openFrame.apply(e, n)
                                            }))
                                        }, te = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.openPrerenderFrame.apply(e, n)
                                            }))
                                        }, re = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.prerender.apply(e, n)
                                            }))
                                        }, ie = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.open.apply(e, n)
                                            }))
                                        }, ae = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.openPrerender.apply(e, n)
                                            }))
                                        }), u
                                    }(r, n)
                                })),
                                s = H.window,
                                c = nn(),
                                l = ct(v, H, "post"),
                                h = Y.trigger(Xn.RENDER),
                                m = pn(t),
                                w = Pe(),
                                y = m.then((function() {
                                    return ln()
                                })),
                                g = y.then((function() {
                                    return ct(v, H, "get").then((function(e) {
                                        return function(e, n) {
                                            var t, r, o = n.query || {},
                                                i = n.hash || {},
                                                a = e.split("#");
                                            r = a[1];
                                            var u = (t = a[0]).split("?");
                                            t = u[0];
                                            var s = De(u[1], o),
                                                c = De(r, i);
                                            return s && (t = t + "?" + s), c && (t = t + "#" + c), t
                                        }(function(e) {
                                            if (0 !== B(e).indexOf("mock:")) return e;
                                            throw new Error("Mock urls not supported out of test mode")
                                        }(Ae()), {
                                            query: e
                                        })
                                    }))
                                })),
                                _ = w.then((function(t) {
                                    return function(e) {
                                        var n = void 0 === e ? {} : e,
                                            t = n.proxyWin,
                                            r = n.initialChildDomain,
                                            o = n.childDomainMatch,
                                            i = n.target,
                                            a = void 0 === i ? $ : i,
                                            u = n.context;
                                        return function(e) {
                                            var n = void 0 === e ? {} : e,
                                                t = n.proxyWin,
                                                r = n.childDomainMatch,
                                                o = n.context;
                                            return ve(n.initialChildDomain).then((function(e) {
                                                return {
                                                    uid: f,
                                                    context: o,
                                                    tag: b,
                                                    childDomainMatch: r,
                                                    version: "9_0_86",
                                                    props: e,
                                                    exports: (n = t, {
                                                        init: function(e) {
                                                            return Ge(this.origin, e)
                                                        },
                                                        close: Qe,
                                                        checkClose: function() {
                                                            return tn(n)
                                                        },
                                                        resize: Xe,
                                                        onError: rn,
                                                        show: Ce,
                                                        hide: Se,
                                                        export: un
                                                    })
                                                };
                                                var n
                                            }))
                                        }({
                                            proxyWin: t,
                                            initialChildDomain: r,
                                            childDomainMatch: o,
                                            context: u
                                        }).then((function(e) {
                                            var n = Jn({
                                                    data: e,
                                                    metaData: {
                                                        windowRef: Ve(a, r, u, t)
                                                    },
                                                    sender: {
                                                        domain: O($)
                                                    },
                                                    receiver: {
                                                        win: t,
                                                        domain: o
                                                    },
                                                    passByReference: r === O()
                                                }),
                                                i = n.serializedData;
                                            return N.register(n.cleanReference), i
                                        }))
                                    }({
                                        proxyWin: (o = {
                                            proxyWin: t,
                                            initialChildDomain: e,
                                            childDomainMatch: a,
                                            target: n,
                                            context: r
                                        }).proxyWin,
                                        initialChildDomain: o.initialChildDomain,
                                        childDomainMatch: o.childDomainMatch,
                                        target: o.target,
                                        context: o.context
                                    }).then((function(e) {
                                        return Kn({
                                            name: E,
                                            serializedPayload: e
                                        })
                                    }));
                                    var o
                                })),
                                x = _.then((function(e) {
                                    return Ne(r, {
                                        windowName: e
                                    })
                                })),
                                P = Ie(r),
                                S = p.hash({
                                    proxyContainer: m,
                                    proxyFrame: x,
                                    proxyPrerenderFrame: P
                                }).then((function(e) {
                                    return fn(e.proxyContainer, {
                                        context: r,
                                        proxyFrame: e.proxyFrame,
                                        proxyPrerenderFrame: e.proxyPrerenderFrame,
                                        rerender: i
                                    })
                                })).then((function(e) {
                                    return e
                                })),
                                A = p.hash({
                                    windowName: _,
                                    proxyFrame: x,
                                    proxyWin: w
                                }).then((function(e) {
                                    var n = e.proxyWin;
                                    return s ? n : en(r, {
                                        windowName: e.windowName,
                                        proxyWin: n,
                                        proxyFrame: e.proxyFrame
                                    })
                                })),
                                R = p.hash({
                                    proxyWin: A,
                                    proxyPrerenderFrame: P
                                }).then((function(e) {
                                    return ze(r, e.proxyWin, e.proxyPrerenderFrame)
                                })),
                                W = A.then((function(e) {
                                    return o = e, Oe(e)
                                })),
                                k = p.hash({
                                    proxyPrerenderWin: R,
                                    state: W
                                }).then((function(e) {
                                    return cn(e.proxyPrerenderWin, {
                                        context: r
                                    })
                                })),
                                I = p.hash({
                                    proxyWin: A,
                                    windowName: _
                                }).then((function(e) {
                                    if (s) return e.proxyWin.setName(e.windowName)
                                })),
                                z = p.hash({
                                    body: l
                                }).then((function(e) {
                                    return d.method ? d.method : Object.keys(e.body).length ? "post" : "get"
                                })),
                                M = p.hash({
                                    proxyWin: A,
                                    windowUrl: g,
                                    body: l,
                                    method: z,
                                    windowName: I,
                                    prerender: k
                                }).then((function(e) {
                                    return e.proxyWin.setLocation(e.windowUrl, {
                                        method: e.method,
                                        body: e.body
                                    })
                                })),
                                F = A.then((function(e) {
                                    ! function e(n, t) {
                                        var r = !1;
                                        return N.register((function() {
                                            r = !0
                                        })), p.delay(2e3).then((function() {
                                            return n.isClosed()
                                        })).then((function(o) {
                                            if (!r) return o ? Qe(new Error("Detected " + t + " close")) : e(n, t)
                                        }))
                                    }(e, r)
                                })),
                                q = p.hash({
                                    container: S,
                                    prerender: k
                                }).then((function() {
                                    return Y.trigger(Xn.DISPLAY)
                                })),
                                J = A.then((function(e) {})),
                                X = M.then((function() {
                                    return p.try((function() {
                                        var e = H.timeout;
                                        if (e) return D.timeout(e, new Error("Loading component timed out after " + e + " milliseconds"))
                                    }))
                                })),
                                ee = D.then((function() {
                                    return Y.trigger(Xn.RENDERED)
                                }));
                            return p.hash({
                                initPromise: D,
                                buildUrlPromise: g,
                                onRenderPromise: h,
                                getProxyContainerPromise: m,
                                openFramePromise: x,
                                openPrerenderFramePromise: P,
                                renderContainerPromise: S,
                                openPromise: A,
                                openPrerenderPromise: R,
                                setStatePromise: W,
                                prerenderPromise: k,
                                loadUrlPromise: M,
                                buildWindowNamePromise: _,
                                setWindowNamePromise: I,
                                watchForClosePromise: F,
                                onDisplayPromise: q,
                                openBridgePromise: J,
                                runTimeoutPromise: X,
                                onRenderedPromise: ee,
                                delegatePromise: u,
                                watchForUnloadPromise: c,
                                finalSetPropsPromise: y
                            })
                        })).catch((function(e) {
                            return p.all([rn(e), Ke(e)]).then((function() {
                                throw e
                            }), (function() {
                                throw e
                            }))
                        })).then(le)
                    },
                    destroy: Ke,
                    getProps: function() {
                        return H
                    },
                    setProps: ln,
                    export: un,
                    getHelpers: dn,
                    getDelegateOverrides: function() {
                        return p.try((function() {
                            return {
                                getProxyContainer: pn,
                                show: Ce,
                                hide: Se,
                                renderContainer: fn,
                                getProxyWindow: Pe,
                                watchForUnload: nn,
                                openFrame: Ne,
                                openPrerenderFrame: Ie,
                                prerender: cn,
                                open: en,
                                openPrerender: ze,
                                setProxyWin: Oe
                            }
                        }))
                    },
                    getExports: function() {
                        return R({
                            getExports: function() {
                                return on
                            }
                        })
                    }
                }
            }

            function dt(e) {
                var n = e.uid,
                    t = e.frame,
                    r = e.prerenderFrame,
                    o = e.doc,
                    i = e.props,
                    a = e.event,
                    u = e.dimensions,
                    s = u.width,
                    c = u.height;
                if (t && r) {
                    var f = o.createElement("div");
                    f.setAttribute("id", n);
                    var d = o.createElement("style");
                    return i.cspNonce && d.setAttribute("nonce", i.cspNonce), d.appendChild(o.createTextNode("\n            #" + n + " {\n                display: inline-block;\n                position: relative;\n                width: " + s + ";\n                height: " + c + ";\n            }\n\n            #" + n + " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" + n + " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" + n + " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        ")), f.appendChild(t), f.appendChild(r), f.appendChild(d), r.classList.add("zoid-visible"), t.classList.add("zoid-invisible"), a.on(Xn.RENDERED, (function() {
                        r.classList.remove("zoid-visible"), r.classList.add("zoid-invisible"), t.classList.remove("zoid-invisible"), t.classList.add("zoid-visible"), setTimeout((function() {
                            Ye(r)
                        }), 1)
                    })), a.on(Xn.RESIZE, (function(e) {
                        var n = e.width,
                            t = e.height;
                        "number" == typeof n && (f.style.width = Ke(n)), "number" == typeof t && (f.style.height = Ke(t))
                    })), f
                }
            }
            var lt = xe(),
                ht = xe();

            function pt(e) {
                var n, t, r = function(e) {
                        var n = e.tag,
                            t = e.url,
                            r = e.domain,
                            o = e.bridgeUrl,
                            a = e.props,
                            u = void 0 === a ? {} : a,
                            s = e.dimensions,
                            c = void 0 === s ? {} : s,
                            f = e.autoResize,
                            d = void 0 === f ? {} : f,
                            l = e.allowedParentDomains,
                            h = void 0 === l ? "*" : l,
                            p = e.attributes,
                            m = void 0 === p ? {} : p,
                            w = e.defaultContext,
                            v = void 0 === w ? Gn.IFRAME : w,
                            y = e.containerTemplate,
                            g = void 0 === y ? dt : y,
                            b = e.prerenderTemplate,
                            E = void 0 === b ? null : b,
                            _ = e.validate,
                            x = e.eligible,
                            P = void 0 === x ? function() {
                                return {
                                    eligible: !0
                                }
                            } : x,
                            O = e.logger,
                            S = void 0 === O ? {
                                info: le
                            } : O,
                            A = e.exports,
                            T = void 0 === A ? le : A,
                            R = e.method,
                            D = e.children,
                            W = void 0 === D ? function() {
                                return {}
                            } : D,
                            N = n.replace(/-/g, "_"),
                            k = i({}, {
                                window: {
                                    type: Zn.OBJECT,
                                    sendToChild: !1,
                                    required: !1,
                                    allowDelegate: !0,
                                    validate: function(e) {
                                        var n = e.value;
                                        if (!Y(n) && !_n.isProxyWindow(n)) throw new Error("Expected Window or ProxyWindow");
                                        if (Y(n)) {
                                            if (j(n)) throw new Error("Window is closed");
                                            if (!C(n)) throw new Error("Window is not same domain")
                                        }
                                    },
                                    decorate: function(e) {
                                        return Un(e.value)
                                    }
                                },
                                timeout: {
                                    type: Zn.NUMBER,
                                    required: !1,
                                    sendToChild: !1
                                },
                                cspNonce: {
                                    type: Zn.STRING,
                                    required: !1
                                },
                                onDisplay: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    allowDelegate: !0,
                                    default: at,
                                    decorate: ut
                                },
                                onRendered: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    default: at,
                                    decorate: ut
                                },
                                onRender: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    default: at,
                                    decorate: ut
                                },
                                onClose: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    allowDelegate: !0,
                                    default: at,
                                    decorate: ut
                                },
                                onDestroy: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    allowDelegate: !0,
                                    default: at,
                                    decorate: ut
                                },
                                onResize: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    allowDelegate: !0,
                                    default: at
                                },
                                onFocus: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    allowDelegate: !0,
                                    default: at
                                },
                                close: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.close
                                    }
                                },
                                focus: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.focus
                                    }
                                },
                                resize: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.resize
                                    }
                                },
                                uid: {
                                    type: Zn.STRING,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.uid
                                    }
                                },
                                tag: {
                                    type: Zn.STRING,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.tag
                                    }
                                },
                                getParent: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.getParent
                                    }
                                },
                                getParentDomain: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.getParentDomain
                                    }
                                },
                                show: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.show
                                    }
                                },
                                hide: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.hide
                                    }
                                },
                                export: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.export
                                    }
                                },
                                onError: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.onError
                                    }
                                },
                                onProps: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.onProps
                                    }
                                },
                                getSiblings: {
                                    type: Zn.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.getSiblings
                                    }
                                }
                            }, u);
                        if (!g) throw new Error("Container template required");
                        return {
                            name: N,
                            tag: n,
                            url: t,
                            domain: r,
                            bridgeUrl: o,
                            method: R,
                            propsDef: k,
                            dimensions: c,
                            autoResize: d,
                            allowedParentDomains: h,
                            attributes: m,
                            defaultContext: v,
                            containerTemplate: g,
                            prerenderTemplate: E,
                            validate: _,
                            logger: S,
                            eligible: P,
                            children: W,
                            exports: "function" == typeof T ? T : function(e) {
                                for (var n = e.getExports, t = {}, r = function(e, r) {
                                        var o = r[e],
                                            i = T[o].type,
                                            a = n().then((function(e) {
                                                return e[o]
                                            }));
                                        t[o] = i === Zn.FUNCTION ? function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return a.then((function(e) {
                                                return e.apply(void 0, n)
                                            }))
                                        } : a
                                    }, o = 0, i = Object.keys(T); o < i.length; o++) r(o, i);
                                return t
                            }
                        }
                    }(e),
                    o = r.name,
                    a = r.tag,
                    u = r.defaultContext,
                    s = r.eligible,
                    c = r.children,
                    f = Ln($),
                    d = [],
                    l = function() {
                        if (function(e) {
                                try {
                                    return Qn($.name).name === e
                                } catch (e) {}
                                return !1
                            }(o)) {
                            var e = nt().payload;
                            if (e.tag === a && L(e.childDomainMatch, O())) return !0
                        }
                        return !1
                    },
                    h = fe((function() {
                        if (l()) {
                            if ($.xprops) throw delete f.components[a], new Error("Can not register " + o + " as child - child already registered");
                            var e = function(e) {
                                var n, t = e.tag,
                                    r = e.propsDef,
                                    o = e.autoResize,
                                    i = e.allowedParentDomains,
                                    a = [],
                                    u = nt(),
                                    s = u.parent,
                                    c = u.payload,
                                    f = s.win,
                                    d = s.domain,
                                    l = new p,
                                    h = c.version,
                                    m = c.uid,
                                    w = c.exports,
                                    v = c.context,
                                    y = c.props;
                                if ("9_0_86" !== h) throw new Error("Parent window has zoid version " + h + ", child window has version 9_0_86");
                                var g = w.show,
                                    b = w.hide,
                                    E = w.close,
                                    _ = w.onError,
                                    x = w.checkClose,
                                    P = w.export,
                                    A = w.resize,
                                    T = w.init,
                                    R = function() {
                                        return f
                                    },
                                    D = function() {
                                        return d
                                    },
                                    N = function(e) {
                                        return a.push(e), {
                                            cancel: function() {
                                                a.splice(a.indexOf(e), 1)
                                            }
                                        }
                                    },
                                    k = function(e) {
                                        return A.fireAndForget({
                                            width: e.width,
                                            height: e.height
                                        })
                                    },
                                    j = function(e) {
                                        return l.resolve(e), P(e)
                                    },
                                    I = function(e) {
                                        var r = (void 0 === e ? {} : e).anyParent,
                                            o = [],
                                            i = n.parent;
                                        if (void 0 === r && (r = !i), !r && !i) throw new Error("No parent found for " + t + " child");
                                        for (var a = 0, u = W($); a < u.length; a++) {
                                            var s = u[a];
                                            if (C(s)) {
                                                var c = S(s).xprops;
                                                if (c && R() === c.getParent()) {
                                                    var f = c.parent;
                                                    if (r || !i || f && f.uid === i.uid) {
                                                        var d = Bn(s, (function(e) {
                                                            return e.exports
                                                        }));
                                                        o.push({
                                                            props: c,
                                                            exports: d
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                        return o
                                    },
                                    z = function(e, o, i) {
                                        void 0 === i && (i = !1);
                                        var u = function(e, n, t, r, o, i) {
                                            void 0 === i && (i = !1);
                                            for (var a = {}, u = 0, s = Object.keys(t); u < s.length; u++) {
                                                var c = s[u],
                                                    f = n[c];
                                                if (!f || !f.sameDomain || r === O($) && C(e)) {
                                                    var d = rt(n, 0, c, t[c], o);
                                                    a[c] = d, f && f.alias && !a[f.alias] && (a[f.alias] = d)
                                                }
                                            }
                                            if (!i)
                                                for (var l = 0, h = Object.keys(n); l < h.length; l++) {
                                                    var p = h[l];
                                                    t.hasOwnProperty(p) || (a[p] = rt(n, 0, p, void 0, o))
                                                }
                                            return a
                                        }(f, r, e, o, {
                                            tag: t,
                                            show: g,
                                            hide: b,
                                            close: E,
                                            focus: ot,
                                            onError: _,
                                            resize: k,
                                            getSiblings: I,
                                            onProps: N,
                                            getParent: R,
                                            getParentDomain: D,
                                            uid: m,
                                            export: j
                                        }, i);
                                        n ? we(n, u) : n = u;
                                        for (var s = 0; s < a.length; s++)(0, a[s])(n)
                                    },
                                    M = function(e) {
                                        return p.try((function() {
                                            return z(e, d, !0)
                                        }))
                                    };
                                return {
                                    init: function() {
                                        return p.try((function() {
                                            return C(f) && function(e) {
                                                    var n = e.componentName,
                                                        t = e.parentComponentWindow,
                                                        r = $n({
                                                            data: Qn($.name).serializedInitialPayload,
                                                            sender: {
                                                                win: t
                                                            },
                                                            basic: !0
                                                        }),
                                                        o = r.sender;
                                                    if ("uid" === r.reference.type || "global" === r.metaData.windowRef.type) {
                                                        var i = Jn({
                                                            data: r.data,
                                                            metaData: {
                                                                windowRef: tt(t)
                                                            },
                                                            sender: {
                                                                domain: o.domain
                                                            },
                                                            receiver: {
                                                                win: $,
                                                                domain: O()
                                                            },
                                                            basic: !0
                                                        });
                                                        $.name = Kn({
                                                            name: n,
                                                            serializedPayload: i.serializedData
                                                        })
                                                    }
                                                }({
                                                    componentName: e.name,
                                                    parentComponentWindow: f
                                                }), Ln($).exports = e.exports({
                                                    getExports: function() {
                                                        return l
                                                    }
                                                }),
                                                function(e, n) {
                                                    if (!L(e, n)) throw new Error("Can not be rendered by domain: " + n)
                                                }(i, d), dn(f), $.addEventListener("beforeunload", (function() {
                                                    x.fireAndForget()
                                                })), $.addEventListener("unload", (function() {
                                                    x.fireAndForget()
                                                })), q(f, (function() {
                                                    it()
                                                })), T({
                                                    updateProps: M,
                                                    close: it
                                                })
                                        })).then((function() {
                                            return (e = o.width, n = void 0 !== e && e, t = o.height, r = void 0 !== t && t, i = o.element, je(void 0 === i ? "body" : i).catch(le).then((function(e) {
                                                return {
                                                    width: n,
                                                    height: r,
                                                    element: e
                                                }
                                            }))).then((function(e) {
                                                var n = e.width,
                                                    t = e.height,
                                                    r = e.element;
                                                r && (n || t) && v !== Gn.POPUP && Je(r, (function(e) {
                                                    k({
                                                        width: n ? e.width : void 0,
                                                        height: t ? e.height : void 0
                                                    })
                                                }), {
                                                    width: n,
                                                    height: t
                                                })
                                            }));
                                            var e, n, t, r, i
                                        })).catch((function(e) {
                                            _(e)
                                        }))
                                    },
                                    getProps: function() {
                                        return n || (z(y, d), n)
                                    }
                                }
                            }(r);
                            return e.init(), e
                        }
                    }));
                if (h(), n = Mn("zoid_allow_delegate_" + o, (function() {
                        return !0
                    })), t = Mn("zoid_delegate_" + o, (function(e) {
                        var n = e.data;
                        return {
                            parent: ft({
                                uid: n.uid,
                                options: r,
                                overrides: n.overrides,
                                parentWin: e.source
                            })
                        }
                    })), ht.register(n.cancel), ht.register(t.cancel), f.components = f.components || {}, f.components[a]) throw new Error("Can not register multiple components with the same tag: " + a);
                return f.components[a] = !0, {
                    init: function e(n) {
                        var t, f = "zoid-" + a + "-" + oe(),
                            l = n || {},
                            h = s({
                                props: l
                            }),
                            m = h.eligible,
                            w = h.reason,
                            v = l.onDestroy;
                        l.onDestroy = function() {
                            if (t && m && d.splice(d.indexOf(t), 1), v) return v.apply(void 0, arguments)
                        };
                        var y = ft({
                            uid: f,
                            options: r
                        });
                        y.init(), m ? y.setProps(l) : l.onDestroy && l.onDestroy(), lt.register((function(e) {
                            return y.destroy(e || new Error("zoid destroyed all components"))
                        }));
                        var g = function(n) {
                                var t = (void 0 === n ? {} : n).decorate;
                                return e((void 0 === t ? ve : t)(l))
                            },
                            b = function(e, n, r) {
                                return p.try((function() {
                                    if (!m) {
                                        var n = new Error(w || o + " component is not eligible");
                                        return y.destroy(n).then((function() {
                                            throw n
                                        }))
                                    }
                                    if (!Y(e)) throw new Error("Must pass window to renderTo");
                                    return function(e, n) {
                                        return p.try((function() {
                                            if (e.window) return Un(e.window).getType();
                                            if (n) {
                                                if (n !== Gn.IFRAME && n !== Gn.POPUP) throw new Error("Unrecognized context: " + n);
                                                return n
                                            }
                                            return u
                                        }))
                                    }(l, r)
                                })).then((function(o) {
                                    if (n = function(e, n) {
                                            if (n) {
                                                if ("string" != typeof n && !Ne(n)) throw new TypeError("Expected string or element selector to be passed");
                                                return n
                                            }
                                            if (e === Gn.POPUP) return "body";
                                            throw new Error("Expected element to be passed to render iframe")
                                        }(o, n), e !== $ && "string" != typeof n) throw new Error("Must pass string element when rendering to another window");
                                    return y.render({
                                        target: e,
                                        container: n,
                                        context: o,
                                        rerender: function() {
                                            var o = g();
                                            return we(t, o), o.renderTo(e, n, r)
                                        }
                                    })
                                })).catch((function(e) {
                                    return y.destroy(e).then((function() {
                                        throw e
                                    }))
                                }))
                            };
                        return t = i({}, y.getExports(), y.getHelpers(), function() {
                            for (var e = c(), n = {}, t = function(t, r) {
                                    var o = r[t],
                                        a = e[o];
                                    n[o] = function(e) {
                                        var n = y.getProps(),
                                            t = i({}, e, {
                                                parent: {
                                                    uid: f,
                                                    props: n,
                                                    export: y.export
                                                }
                                            });
                                        return a(t)
                                    }
                                }, r = 0, o = Object.keys(e); r < o.length; r++) t(r, o);
                            return n
                        }(), {
                            isEligible: function() {
                                return m
                            },
                            clone: g,
                            render: function(e, n) {
                                return b($, e, n)
                            },
                            renderTo: function(e, n, t) {
                                return b(e, n, t)
                            }
                        }), m && d.push(t), t
                    },
                    instances: d,
                    driver: function(e, n) {
                        throw new Error("Driver support not enabled")
                    },
                    isChild: l,
                    canRenderTo: function(e) {
                        return Fn(e, "zoid_allow_delegate_" + o).then((function(e) {
                            return e.data
                        })).catch((function() {
                            return !1
                        }))
                    },
                    registerChild: h
                }
            }
            var mt = function(e) {
                ! function() {
                    var e, n, t, r;
                    Qe().initialized || (Qe().initialized = !0, n = (e = {
                        on: Mn,
                        send: Fn
                    }).on, t = e.send, (r = Qe()).receiveMessage = r.receiveMessage || function(e) {
                        return zn(e, {
                            on: n,
                            send: t
                        })
                    }, function(e) {
                        var n = e.on,
                            t = e.send;
                        nn().getOrSet("postMessageListener", (function() {
                            return Le($, "message", (function(e) {
                                ! function(e, n) {
                                    var t = n.on,
                                        r = n.send;
                                    p.try((function() {
                                        var n = e.source || e.sourceElement,
                                            o = e.origin || e.originalEvent && e.originalEvent.origin,
                                            i = e.data;
                                        if ("null" === o && (o = "file://"), n) {
                                            if (!o) throw new Error("Post message did not have origin domain");
                                            zn({
                                                source: n,
                                                origin: o,
                                                data: i
                                            }, {
                                                on: t,
                                                send: r
                                            })
                                        }
                                    }))
                                }(e, {
                                    on: n,
                                    send: t
                                })
                            }))
                        }))
                    }({
                        on: Mn,
                        send: Fn
                    }), function(e) {
                        var n = e.on,
                            t = e.send;
                        nn("builtinListeners").getOrSet("helloListener", (function() {
                            var e = n("postrobot_hello", {
                                    domain: "*"
                                }, (function(e) {
                                    return sn(e.source, {
                                        domain: e.origin
                                    }), {
                                        instanceID: un()
                                    }
                                })),
                                r = z();
                            return r && cn(r, {
                                send: t
                            }).catch((function(e) {})), e
                        }))
                    }({
                        on: Mn,
                        send: Fn
                    }))
                }();
                var n = pt(e),
                    t = function(e) {
                        return n.init(e)
                    };
                t.driver = function(e, t) {
                    return n.driver(e, t)
                }, t.isChild = function() {
                    return n.isChild()
                }, t.canRenderTo = function(e) {
                    return n.canRenderTo(e)
                }, t.instances = n.instances;
                var r = n.registerChild();
                return r && ($.xprops = t.xprops = r.getProps()), t
            };

            function wt(e) {
                var n = lt.all(e);
                return lt = xe(), n
            }
            var vt = wt;

            function yt(e) {
                var n;
                return vt(), delete $.__zoid_9_0_86__,
                    function() {
                        for (var e = nn("responseListeners"), n = 0, t = e.keys(); n < t.length; n++) {
                            var r = t[n],
                                o = e.get(r);
                            o && (o.cancelled = !0), e.del(r)
                        }
                    }(), (n = nn().get("postMessageListener")) && n.cancel(), delete $.__post_robot_10_0_44__, ht.all(e)
            }
        }])), Je.exports
    }
    var Ze, Ve, Ge = {
        exports: {}
    };

    function Xe() {
        return Ze || (Ze = 1, "undefined" != typeof self && self, Ge.exports = function(e) {
            var n = {};

            function t(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
            }
            return t.m = e, t.c = n, t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: r
                })
            }, t.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, t.t = function(e, n) {
                if (1 & n && (e = t(e)), 8 & n) return e;
                if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (t.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & n && "string" != typeof e)
                    for (var o in e) t.d(r, o, function(n) {
                        return e[n]
                    }.bind(null, o));
                return r
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, n) {
                return {}.hasOwnProperty.call(e, n)
            }, t.p = "", t(t.s = 0)
        }([function(e, n, t) {
            function r(e, n) {
                return (r = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                })(e, n)
            }

            function o(e, n) {
                e.prototype = Object.create(n.prototype), e.prototype.constructor = e, r(e, n)
            }

            function i() {
                return (i = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e) {
                try {
                    if (!e) return !1;
                    if ("undefined" != typeof Promise && e instanceof Promise) return !0;
                    if (void 0 !== $ && "function" == typeof $.Window && e instanceof $.Window) return !1;
                    if (void 0 !== $ && "function" == typeof $.constructor && e instanceof $.constructor) return !1;
                    var n = {}.toString;
                    if (n) {
                        var t = n.call(e);
                        if ("[object Window]" === t || "[object global]" === t || "[object DOMWindow]" === t) return !1
                    }
                    if ("function" == typeof e.then) return !0
                } catch (e) {
                    return !1
                }
                return !1
            }
            t.r(n), t.d(n, "PopupOpenError", (function() {
                return Ue
            })), t.d(n, "create", (function() {
                return Mt
            })), t.d(n, "destroy", (function() {
                return Lt
            })), t.d(n, "destroyComponents", (function() {
                return Ft
            })), t.d(n, "destroyAll", (function() {
                return Ut
            })), t.d(n, "PROP_TYPE", (function() {
                return wt
            })), t.d(n, "PROP_SERIALIZATION", (function() {
                return vt
            })), t.d(n, "CONTEXT", (function() {
                return yt
            })), t.d(n, "EVENT", (function() {
                return gt
            }));
            var u, s = [],
                c = [],
                f = 0;

            function d() {
                if (!f && u) {
                    var e = u;
                    u = null, e.resolve()
                }
            }

            function l() {
                f += 1
            }

            function h() {
                f -= 1, d()
            }
            var p = function() {
                function e(e) {
                    var n = this;
                    if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], e) {
                        var t, r, o = !1,
                            i = !1,
                            a = !1;
                        l();
                        try {
                            e((function(e) {
                                a ? n.resolve(e) : (o = !0, t = e)
                            }), (function(e) {
                                a ? n.reject(e) : (i = !0, r = e)
                            }))
                        } catch (e) {
                            return h(), void this.reject(e)
                        }
                        h(), a = !0, o ? this.resolve(t) : i && this.reject(r)
                    }
                }
                var n = e.prototype;
                return n.resolve = function(e) {
                    if (this.resolved || this.rejected) return this;
                    if (a(e)) throw new Error("Can not resolve promise with another promise");
                    return this.resolved = !0, this.value = e, this.dispatch(), this
                }, n.reject = function(e) {
                    var n = this;
                    if (this.resolved || this.rejected) return this;
                    if (a(e)) throw new Error("Can not reject promise with another promise");
                    if (!e) {
                        var t = e && "function" == typeof e.toString ? e.toString() : {}.toString.call(e);
                        e = new Error("Expected reject to be called with Error, got " + t)
                    }
                    return this.rejected = !0, this.error = e, this.errorHandled || setTimeout((function() {
                        n.errorHandled || function(e, n) {
                            if (-1 === s.indexOf(e)) {
                                s.push(e), setTimeout((function() {
                                    throw e
                                }), 1);
                                for (var t = 0; t < c.length; t++) c[t](e, n)
                            }
                        }(e, n)
                    }), 1), this.dispatch(), this
                }, n.asyncReject = function(e) {
                    return this.errorHandled = !0, this.reject(e), this
                }, n.dispatch = function() {
                    var n = this.resolved,
                        t = this.rejected,
                        r = this.handlers;
                    if (!this.dispatching && (n || t)) {
                        this.dispatching = !0, l();
                        for (var o = function(e, n) {
                                return e.then((function(e) {
                                    n.resolve(e)
                                }), (function(e) {
                                    n.reject(e)
                                }))
                            }, i = 0; i < r.length; i++) {
                            var u = r[i],
                                s = u.onSuccess,
                                c = u.onError,
                                f = u.promise,
                                d = void 0;
                            if (n) try {
                                d = s ? s(this.value) : this.value
                            } catch (e) {
                                f.reject(e);
                                continue
                            } else if (t) {
                                if (!c) {
                                    f.reject(this.error);
                                    continue
                                }
                                try {
                                    d = c(this.error)
                                } catch (e) {
                                    f.reject(e);
                                    continue
                                }
                            }
                            if (d instanceof e && (d.resolved || d.rejected)) {
                                var p = d;
                                p.resolved ? f.resolve(p.value) : f.reject(p.error), p.errorHandled = !0
                            } else a(d) ? d instanceof e && (d.resolved || d.rejected) ? d.resolved ? f.resolve(d.value) : f.reject(d.error) : o(d, f) : f.resolve(d)
                        }
                        r.length = 0, this.dispatching = !1, h()
                    }
                }, n.then = function(n, t) {
                    if (n && "function" != typeof n && !n.call) throw new Error("Promise.then expected a function for success handler");
                    if (t && "function" != typeof t && !t.call) throw new Error("Promise.then expected a function for error handler");
                    var r = new e;
                    return this.handlers.push({
                        promise: r,
                        onSuccess: n,
                        onError: t
                    }), this.errorHandled = !0, this.dispatch(), r
                }, n.catch = function(e) {
                    return this.then(void 0, e)
                }, n.finally = function(n) {
                    if (n && "function" != typeof n && !n.call) throw new Error("Promise.finally expected a function");
                    return this.then((function(t) {
                        return e.try(n).then((function() {
                            return t
                        }))
                    }), (function(t) {
                        return e.try(n).then((function() {
                            throw t
                        }))
                    }))
                }, n.timeout = function(e, n) {
                    var t = this;
                    if (this.resolved || this.rejected) return this;
                    var r = setTimeout((function() {
                        t.resolved || t.rejected || t.reject(n || new Error("Promise timed out after " + e + "ms"))
                    }), e);
                    return this.then((function(e) {
                        return clearTimeout(r), e
                    }))
                }, n.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this)
                }, n.lazy = function() {
                    return this.errorHandled = !0, this
                }, e.resolve = function(n) {
                    return n instanceof e ? n : a(n) ? new e((function(e, t) {
                        return n.then(e, t)
                    })) : (new e).resolve(n)
                }, e.reject = function(n) {
                    return (new e).reject(n)
                }, e.asyncReject = function(n) {
                    return (new e).asyncReject(n)
                }, e.all = function(n) {
                    var t = new e,
                        r = n.length,
                        o = [].slice();
                    if (!r) return t.resolve(o), t;
                    for (var i = function(e, n, i) {
                            return n.then((function(n) {
                                o[e] = n, 0 == (r -= 1) && t.resolve(o)
                            }), (function(e) {
                                i.reject(e)
                            }))
                        }, u = 0; u < n.length; u++) {
                        var s = n[u];
                        if (s instanceof e) {
                            if (s.resolved) {
                                o[u] = s.value, r -= 1;
                                continue
                            }
                        } else if (!a(s)) {
                            o[u] = s, r -= 1;
                            continue
                        }
                        i(u, e.resolve(s), t)
                    }
                    return 0 === r && t.resolve(o), t
                }, e.hash = function(n) {
                    var t = {},
                        r = [],
                        o = function(e) {
                            if (n.hasOwnProperty(e)) {
                                var o = n[e];
                                a(o) ? r.push(o.then((function(n) {
                                    t[e] = n
                                }))) : t[e] = o
                            }
                        };
                    for (var i in n) o(i);
                    return e.all(r).then((function() {
                        return t
                    }))
                }, e.map = function(n, t) {
                    return e.all(n.map(t))
                }, e.onPossiblyUnhandledException = function(e) {
                    return function(e) {
                        return c.push(e), {
                            cancel: function() {
                                c.splice(c.indexOf(e), 1)
                            }
                        }
                    }(e)
                }, e.try = function(n, t, r) {
                    if (n && "function" != typeof n && !n.call) throw new Error("Promise.try expected a function");
                    var o;
                    l();
                    try {
                        o = n.apply(t, r || [])
                    } catch (n) {
                        return h(), e.reject(n)
                    }
                    return h(), e.resolve(o)
                }, e.delay = function(n) {
                    return new e((function(e) {
                        setTimeout(e, n)
                    }))
                }, e.isPromise = function(n) {
                    return !!(n && n instanceof e) || a(n)
                }, e.flush = function() {
                    return n = e, t = u = u || new n, d(), t;
                    var n, t
                }, e
            }();

            function m(e) {
                return "[object RegExp]" === {}.toString.call(e)
            }
            var w = {
                    IFRAME: "iframe",
                    POPUP: "popup"
                },
                v = "Call was rejected by callee.\r\n";

            function y(e) {
                return void 0 === e && (e = $), e.location.protocol
            }

            function g(e) {
                if (void 0 === e && (e = $), e.mockDomain) {
                    var n = e.mockDomain.split("//")[0];
                    if (n) return n
                }
                return y(e)
            }

            function b(e) {
                return void 0 === e && (e = $), "about:" === g(e)
            }

            function E(e) {
                if (void 0 === e && (e = $), e) try {
                    if (e.parent && e.parent !== e) return e.parent
                } catch (e) {}
            }

            function _(e) {
                if (void 0 === e && (e = $), e && !E(e)) try {
                    return e.opener
                } catch (e) {}
            }

            function x(e) {
                try {
                    return !0
                } catch (e) {}
                return !1
            }

            function P(e) {
                void 0 === e && (e = $);
                var n = e.location;
                if (!n) throw new Error("Can not read window location");
                var t = y(e);
                if (!t) throw new Error("Can not read window protocol");
                if ("file:" === t) return "file://";
                if ("about:" === t) {
                    var r = E(e);
                    return r && x() ? P(r) : "about://"
                }
                var o = n.host;
                if (!o) throw new Error("Can not read window host");
                return t + "//" + o
            }

            function O(e) {
                void 0 === e && (e = $);
                var n = P(e);
                return n && e.mockDomain && 0 === e.mockDomain.indexOf("mock:") ? e.mockDomain : n
            }

            function C(e) {
                if (! function(e) {
                        try {
                            if (e === $) return !0
                        } catch (e) {}
                        try {
                            var n = Object.getOwnPropertyDescriptor(e, "location");
                            if (n && !1 === n.enumerable) return !1
                        } catch (e) {}
                        try {
                            if (b(e) && x()) return !0
                        } catch (e) {}
                        try {
                            if (function(e) {
                                    return void 0 === e && (e = $), "mock:" === g(e)
                                }(e) && x()) return !0
                        } catch (e) {}
                        try {
                            if (P(e) === P($)) return !0
                        } catch (e) {}
                        return !1
                    }(e)) return !1;
                try {
                    if (e === $) return !0;
                    if (b(e) && x()) return !0;
                    if (O($) === O(e)) return !0
                } catch (e) {}
                return !1
            }

            function S(e) {
                if (!C(e)) throw new Error("Expected window to be same domain");
                return e
            }

            function A(e, n) {
                if (!e || !n) return !1;
                var t = E(n);
                return t ? t === e : -1 !== function(e) {
                    var n = [];
                    try {
                        for (; e.parent !== e;) n.push(e.parent), e = e.parent
                    } catch (e) {}
                    return n
                }(n).indexOf(e)
            }

            function T(e) {
                var n, t, r = [];
                try {
                    n = e.frames
                } catch (t) {
                    n = e
                }
                try {
                    t = n.length
                } catch (e) {}
                if (0 === t) return r;
                if (t) {
                    for (var o = 0; o < t; o++) {
                        var i = void 0;
                        try {
                            i = n[o]
                        } catch (e) {
                            continue
                        }
                        r.push(i)
                    }
                    return r
                }
                for (var a = 0; a < 100; a++) {
                    var u = void 0;
                    try {
                        u = n[a]
                    } catch (e) {
                        return r
                    }
                    if (!u) return r;
                    r.push(u)
                }
                return r
            }

            function R(e) {
                for (var n = [], t = 0, r = T(e); t < r.length; t++) {
                    var o = r[t];
                    n.push(o);
                    for (var i = 0, a = R(o); i < a.length; i++) n.push(a[i])
                }
                return n
            }

            function D(e) {
                void 0 === e && (e = $);
                try {
                    if (e.top) return e.top
                } catch (e) {}
                if (E(e) === e) return e;
                try {
                    if (A($, e) && $.top) return $.top
                } catch (e) {}
                try {
                    if (A(e, $) && $.top) return $.top
                } catch (e) {}
                for (var n = 0, t = R(e); n < t.length; n++) {
                    var r = t[n];
                    try {
                        if (r.top) return r.top
                    } catch (e) {}
                    if (E(r) === r) return r
                }
            }

            function W(e) {
                var n = D(e);
                if (!n) throw new Error("Can not determine top window");
                var t = [].concat(R(n), [n]);
                return -1 === t.indexOf(e) && (t = [].concat(t, [e], R(e))), t
            }
            var N = [],
                k = [];

            function j(e, n) {
                void 0 === n && (n = !0);
                try {
                    if (e === $) return !1
                } catch (e) {
                    return !0
                }
                try {
                    if (!e) return !0
                } catch (e) {
                    return !0
                }
                try {
                    if (e.closed) return !0
                } catch (e) {
                    return !e || e.message !== v
                }
                if (n && C(e)) try {
                    if (e.mockclosed) return !0
                } catch (e) {}
                try {
                    if (!e.parent || !e.top) return !0
                } catch (e) {}
                var t = function(e, n) {
                    for (var t = 0; t < e.length; t++) try {
                        if (e[t] === n) return t
                    } catch (e) {}
                    return -1
                }(N, e);
                if (-1 !== t) {
                    var r = k[t];
                    if (r && function(e) {
                            if (!e.contentWindow) return !0;
                            if (!e.parentNode) return !0;
                            var n = e.ownerDocument;
                            if (n && n.documentElement && !n.documentElement.contains(e)) {
                                for (var t = e; t.parentNode && t.parentNode !== t;) t = t.parentNode;
                                if (!t.host || !n.documentElement.contains(t.host)) return !0
                            }
                            return !1
                        }(r)) return !0
                }
                return !1
            }

            function I(e) {
                return (e = e || $).navigator.mockUserAgent || e.navigator.userAgent
            }

            function z(e, n) {
                for (var t = T(e), r = 0; r < t.length; r++) {
                    var o = t[r];
                    try {
                        if (C(o) && o.name === n && -1 !== t.indexOf(o)) return o
                    } catch (e) {}
                }
                try {
                    if (-1 !== t.indexOf(e.frames[n])) return e.frames[n]
                } catch (e) {}
                try {
                    if (-1 !== t.indexOf(e[n])) return e[n]
                } catch (e) {}
            }

            function M(e, n) {
                return e === _(n)
            }

            function F(e) {
                return void 0 === e && (e = $), _(e = e || $) || E(e) || void 0
            }

            function U(e, n) {
                for (var t = 0; t < e.length; t++)
                    for (var r = e[t], o = 0; o < n.length; o++)
                        if (r === n[o]) return !0;
                return !1
            }

            function L(e) {
                void 0 === e && (e = $);
                for (var n = 0, t = e; t;)(t = E(t)) && (n += 1);
                return n
            }

            function B(e, n) {
                var t = D(e) || e,
                    r = D(n) || n;
                try {
                    if (t && r) return t === r
                } catch (e) {}
                var o = W(e),
                    i = W(n);
                if (U(o, i)) return !0;
                var a = _(t),
                    u = _(r);
                return a && U(W(a), i) || u && U(W(u), o), !1
            }

            function q(e, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof n) return "*" === e || n === e;
                    if (m(n)) return !1;
                    if (Array.isArray(n)) return !1
                }
                return m(e) ? m(n) ? e.toString() === n.toString() : !Array.isArray(n) && Boolean(n.match(e)) : !!Array.isArray(e) && (Array.isArray(n) ? JSON.stringify(e) === JSON.stringify(n) : !m(n) && e.some((function(e) {
                    return q(e, n)
                })))
            }

            function Y(e) {
                return e.match(/^(https?|mock|file):\/\//) ? e.split("/").slice(0, 3).join("/") : O()
            }

            function H(e, n, t, r) {
                var o;
                return void 0 === t && (t = 1e3), void 0 === r && (r = 1 / 0),
                    function i() {
                        if (j(e)) return o && clearTimeout(o), n();
                        r <= 0 ? clearTimeout(o) : (r -= t, o = setTimeout(i, t))
                    }(), {
                        cancel: function() {
                            o && clearTimeout(o)
                        }
                    }
            }

            function J(e) {
                try {
                    if (e === $) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if ("[object Window]" === {}.toString.call(e)) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if ($.Window && e instanceof $.Window) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if (e && e.self === e) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if (e && e.parent === e) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if (e && e.top === e) return !0
                } catch (e) {
                    if (e && e.message === v) return !0
                }
                try {
                    if (e && "__unlikely_value__" === e.__cross_domain_utils_window_check__) return !1
                } catch (e) {
                    return !0
                }
                try {
                    if ("postMessage" in e && "self" in e && "location" in e) return !0
                } catch (e) {}
                return !1
            }

            function Z(e) {
                if (0 !== Y(e).indexOf("mock:")) return e;
                throw new Error("Mock urls not supported out of test mode")
            }

            function V(e) {
                if (C(e)) return S(e).frameElement;
                for (var n = 0, t = document.querySelectorAll("iframe"); n < t.length; n++) {
                    var r = t[n];
                    if (r && r.contentWindow && r.contentWindow === e) return r
                }
            }

            function G(e) {
                if (function(e) {
                        return void 0 === e && (e = $), Boolean(E(e))
                    }(e)) {
                    var n = V(e);
                    if (n && n.parentElement) return void n.parentElement.removeChild(n)
                }
                try {
                    e.close()
                } catch (e) {}
            }

            function X(e, n) {
                for (var t = 0; t < e.length; t++) try {
                    if (e[t] === n) return t
                } catch (e) {}
                return -1
            }
            var K, Q = function() {
                function e() {
                    if (this.name = void 0, this.weakmap = void 0, this.keys = void 0, this.values = void 0, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__", function() {
                            if ("undefined" == typeof WeakMap) return !1;
                            if (void 0 === Object.freeze) return !1;
                            try {
                                var e = new WeakMap,
                                    n = {};
                                return Object.freeze(n), e.set(n, "__testvalue__"), "__testvalue__" === e.get(n)
                            } catch (e) {
                                return !1
                            }
                        }()) try {
                        this.weakmap = new WeakMap
                    } catch (e) {}
                    this.keys = [], this.values = []
                }
                var n = e.prototype;
                return n._cleanupClosedWindows = function() {
                    for (var e = this.weakmap, n = this.keys, t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (J(r) && j(r)) {
                            if (e) try {
                                e.delete(r)
                            } catch (e) {}
                            n.splice(t, 1), this.values.splice(t, 1), t -= 1
                        }
                    }
                }, n.isSafeToReadWrite = function(e) {
                    return !J(e)
                }, n.set = function(e, n) {
                    if (!e) throw new Error("WeakMap expected key");
                    var t = this.weakmap;
                    if (t) try {
                        t.set(e, n)
                    } catch (e) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var r = this.name,
                            o = e[r];
                        return void(o && o[0] === e ? o[1] = n : Object.defineProperty(e, r, {
                            value: [e, n],
                            writable: !0
                        }))
                    } catch (e) {}
                    this._cleanupClosedWindows();
                    var i = this.keys,
                        a = this.values,
                        u = X(i, e); - 1 === u ? (i.push(e), a.push(n)) : a[u] = n
                }, n.get = function(e) {
                    if (!e) throw new Error("WeakMap expected key");
                    var n = this.weakmap;
                    if (n) try {
                        if (n.has(e)) return n.get(e)
                    } catch (e) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var t = e[this.name];
                        return t && t[0] === e ? t[1] : void 0
                    } catch (e) {}
                    this._cleanupClosedWindows();
                    var r = X(this.keys, e);
                    if (-1 !== r) return this.values[r]
                }, n.delete = function(e) {
                    if (!e) throw new Error("WeakMap expected key");
                    var n = this.weakmap;
                    if (n) try {
                        n.delete(e)
                    } catch (e) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var t = e[this.name];
                        t && t[0] === e && (t[0] = t[1] = void 0)
                    } catch (e) {}
                    this._cleanupClosedWindows();
                    var r = this.keys,
                        o = X(r, e); - 1 !== o && (r.splice(o, 1), this.values.splice(o, 1))
                }, n.has = function(e) {
                    if (!e) throw new Error("WeakMap expected key");
                    var n = this.weakmap;
                    if (n) try {
                        if (n.has(e)) return !0
                    } catch (e) {
                        delete this.weakmap
                    }
                    if (this.isSafeToReadWrite(e)) try {
                        var t = e[this.name];
                        return !(!t || t[0] !== e)
                    } catch (e) {}
                    return this._cleanupClosedWindows(), -1 !== X(this.keys, e)
                }, n.getOrSet = function(e, n) {
                    if (this.has(e)) return this.get(e);
                    var t = n();
                    return this.set(e, t), t
                }, e
            }();

            function ee(e) {
                return (ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ne() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function te(e, n, t) {
                return (te = ne() ? Reflect.construct : function(e, n, t) {
                    var o = [null];
                    o.push.apply(o, n);
                    var i = new(Function.bind.apply(e, o));
                    return t && r(i, t.prototype), i
                }).apply(null, arguments)
            }

            function re(e) {
                var n = "function" == typeof Map ? new Map : void 0;
                return (re = function(e) {
                    if (null === e || (t = e, -1 === Function.toString.call(t).indexOf("[native code]"))) return e;
                    var t;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== n) {
                        if (n.has(e)) return n.get(e);
                        n.set(e, o)
                    }

                    function o() {
                        return te(e, arguments, ee(this).constructor)
                    }
                    return o.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: o,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), r(o, e)
                })(e)
            }

            function oe(e) {
                return e.name || e.__name__ || e.displayName || "anonymous"
            }

            function ie(e, n) {
                try {
                    delete e.name, e.name = n
                } catch (e) {}
                return e.__name__ = e.displayName = n, e
            }

            function ae(e) {
                if ("function" == typeof btoa) return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, n) {
                    return String.fromCharCode(parseInt(n, 16))
                }))).replace(/[=]/g, "");
                if (void 0 !== ue) return ue.from(e, "utf8").toString("base64").replace(/[=]/g, "");
                throw new Error("Can not find window.btoa or Buffer")
            }

            function se() {
                var e = "0123456789abcdef";
                return "uid_" + "xxxxxxxxxx".replace(/./g, (function() {
                    return e.charAt(Math.floor(Math.random() * e.length))
                })) + "_" + ae((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
            }

            function ce(e) {
                try {
                    return JSON.stringify([].slice.call(e), (function(e, n) {
                        return "function" == typeof n ? "memoize[" + function(e) {
                            if (K = K || new Q, null == e || "object" != typeof e && "function" != typeof e) throw new Error("Invalid object");
                            var n = K.get(e);
                            return n || (n = typeof e + ":" + se(), K.set(e, n)), n
                        }(n) + "]" : n
                    }))
                } catch (e) {
                    throw new Error("Arguments not serializable -- can not be used to memoize")
                }
            }

            function fe() {
                return {}
            }
            var de = 0,
                le = 0;

            function he(e, n) {
                void 0 === n && (n = {});
                var t, r, o = n.thisNamespace,
                    i = void 0 !== o && o,
                    a = n.time,
                    u = de;
                de += 1;
                var s = function() {
                    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                    var c;
                    u < le && (t = null, r = null, u = de, de += 1), c = i ? (r = r || new Q).getOrSet(this, fe) : t = t || {};
                    var f = ce(o),
                        d = c[f];
                    if (d && a && Date.now() - d.time < a && (delete c[f], d = null), d) return d.value;
                    var l = Date.now(),
                        h = e.apply(this, arguments);
                    return c[f] = {
                        time: l,
                        value: h
                    }, h
                };
                return s.reset = function() {
                    t = null, r = null
                }, ie(s, (n.name || oe(e)) + "::memoized")
            }

            function pe(e) {
                var n = {};

                function t() {
                    for (var t = arguments, r = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                    var u = ce(i);
                    return n.hasOwnProperty(u) || (n[u] = p.try((function() {
                        return e.apply(r, t)
                    })).finally((function() {
                        delete n[u]
                    }))), n[u]
                }
                return t.reset = function() {
                    n = {}
                }, ie(t, oe(e) + "::promiseMemoized")
            }

            function me() {}

            function we(e) {
                var n = !1;
                return ie((function() {
                    if (!n) return n = !0, e.apply(this, arguments)
                }), oe(e) + "::once")
            }

            function ve(e, n) {
                if (void 0 === n && (n = 1), n >= 3) return "stringifyError stack overflow";
                try {
                    if (!e) return "<unknown error: " + {}.toString.call(e) + ">";
                    if ("string" == typeof e) return e;
                    if (e instanceof Error) {
                        var t = e && e.stack,
                            r = e && e.message;
                        if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
                        if (t) return t;
                        if (r) return r
                    }
                    return e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
                } catch (e) {
                    return "Error while stringifying error: " + ve(e, n + 1)
                }
            }

            function ye(e) {
                return "string" == typeof e ? e : e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
            }

            function ge(e, n) {
                if (!n) return e;
                if (Object.assign) return Object.assign(e, n);
                for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
                return e
            }

            function be(e) {
                return e
            }

            function Ee(e, n) {
                var t;
                return function r() {
                    t = setTimeout((function() {
                        e(), r()
                    }), n)
                }(), {
                    cancel: function() {
                        clearTimeout(t)
                    }
                }
            }

            function _e(e) {
                return [].slice.call(e)
            }

            function xe(e) {
                return null != e
            }

            function Pe(e) {
                return "[object RegExp]" === {}.toString.call(e)
            }

            function Oe(e, n, t) {
                if (e.hasOwnProperty(n)) return e[n];
                var r = t();
                return e[n] = r, r
            }

            function Ce(e) {
                var n, t = [],
                    r = !1,
                    o = {
                        set: function(n, t) {
                            return r || (e[n] = t, o.register((function() {
                                delete e[n]
                            }))), t
                        },
                        register: function(e) {
                            var o = we((function() {
                                return e(n)
                            }));
                            return r ? e(n) : t.push(o), {
                                cancel: function() {
                                    var e = t.indexOf(o); - 1 !== e && t.splice(e, 1)
                                }
                            }
                        },
                        all: function(e) {
                            n = e;
                            var o = [];
                            for (r = !0; t.length;) {
                                var i = t.shift();
                                o.push(i())
                            }
                            return p.all(o).then(me)
                        }
                    };
                return o
            }

            function Se(e, n) {
                if (null == n) throw new Error("Expected " + e + " to be present");
                return n
            }
            he.clear = function() {
                le = de
            }, he((function(e) {
                if (Object.values) return Object.values(e);
                var n = [];
                for (var t in e) e.hasOwnProperty(t) && n.push(e[t]);
                return n
            }));
            var Ae = function(e) {
                function n(n) {
                    var t;
                    return (t = e.call(this, n) || this).name = t.constructor.name, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(t), t.constructor) : t.stack = new Error(n).stack, t
                }
                return o(n, e), n
            }(re(Error));

            function Te() {
                var e = document.body;
                if (!e) throw new Error("Body element not found");
                return e
            }

            function Re() {
                return Boolean(document.body) && "complete" === document.readyState
            }

            function De() {
                return Boolean(document.body) && "interactive" === document.readyState
            }

            function We(e) {
                return encodeURIComponent(e)
            }

            function Ne(e) {
                return function(n, t, r) {
                    void 0 === r && (r = []);
                    var o = n.__inline_memoize_cache__ = n.__inline_memoize_cache__ || {},
                        i = ce(r);
                    return o.hasOwnProperty(i) ? o[i] : o[i] = function() {
                        var n = {};
                        if (!e) return n;
                        if (-1 === e.indexOf("=")) return n;
                        for (var t = 0, r = e.split("&"); t < r.length; t++) {
                            var o = r[t];
                            (o = o.split("="))[0] && o[1] && (n[decodeURIComponent(o[0])] = decodeURIComponent(o[1]))
                        }
                        return n
                    }.apply(void 0, r)
                }(Ne, 0, [e])
            }

            function ke(e, n) {
                return void 0 === n && (n = {}), n && Object.keys(n).length ? (void 0 === (t = i({}, Ne(e), n)) && (t = {}), Object.keys(t).filter((function(e) {
                    return "string" == typeof t[e] || "boolean" == typeof t[e]
                })).map((function(e) {
                    var n = t[e];
                    if ("string" != typeof n && "boolean" != typeof n) throw new TypeError("Invalid type for query");
                    return We(e) + "=" + We(n.toString())
                })).join("&")) : e;
                var t
            }

            function je(e, n) {
                e.appendChild(n)
            }

            function Ie(e) {
                return e instanceof $.Element || null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
            }

            function ze(e, n) {
                return void 0 === n && (n = document), Ie(e) ? e : "string" == typeof e ? n.querySelector(e) : void 0
            }

            function Me(e) {
                return new p((function(n, t) {
                    var r = ye(e),
                        o = ze(e);
                    if (o) return n(o);
                    if (Re()) return t(new Error("Document is ready and element " + r + " does not exist"));
                    var i = setInterval((function() {
                        if (o = ze(e)) n(o), clearInterval(i);
                        else if (Re()) return clearInterval(i), t(new Error("Document is ready and element " + r + " does not exist"))
                    }), 10)
                }))
            }
            he((function() {
                return new p((function(e) {
                    if (Re() || De()) return e();
                    var n = setInterval((function() {
                        if (Re() || De()) return clearInterval(n), e()
                    }), 10)
                }))
            }));
            var Fe, Ue = function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                return o(n, e), n
            }(Ae);

            function Le(e) {
                if ((Fe = Fe || new Q).has(e)) {
                    var n = Fe.get(e);
                    if (n) return n
                }
                var t = new p((function(n, t) {
                    e.addEventListener("load", (function() {
                        ! function(e) {
                            if (function() {
                                    for (var e = 0; e < N.length; e++) {
                                        var n = !1;
                                        try {
                                            n = N[e].closed
                                        } catch (e) {}
                                        n && (k.splice(e, 1), N.splice(e, 1))
                                    }
                                }(), e && e.contentWindow) try {
                                N.push(e.contentWindow), k.push(e)
                            } catch (e) {}
                        }(e), n(e)
                    })), e.addEventListener("error", (function(r) {
                        e.contentWindow ? n(e) : t(r)
                    }))
                }));
                return Fe.set(e, t), t
            }

            function Be(e) {
                return Le(e).then((function(e) {
                    if (!e.contentWindow) throw new Error("Could not find window in iframe");
                    return e.contentWindow
                }))
            }

            function qe(e, n) {
                void 0 === e && (e = {});
                var t = e.style || {},
                    r = function(e, n, t) {
                        void 0 === e && (e = "div"), void 0 === n && (n = {}), e = e.toLowerCase();
                        var r, o, i, a = document.createElement(e);
                        if (n.style && ge(a.style, n.style), n.class && (a.className = n.class.join(" ")), n.id && a.setAttribute("id", n.id), n.attributes)
                            for (var u = 0, s = Object.keys(n.attributes); u < s.length; u++) {
                                var c = s[u];
                                a.setAttribute(c, n.attributes[c])
                            }
                        if (n.styleSheet && (r = a, o = n.styleSheet, void 0 === i && (i = $.document), r.styleSheet ? r.styleSheet.cssText = o : r.appendChild(i.createTextNode(o))), n.html) {
                            if ("iframe" === e) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                            a.innerHTML = n.html
                        }
                        return a
                    }("iframe", {
                        attributes: i({
                            allowTransparency: "true"
                        }, e.attributes || {}),
                        style: i({
                            backgroundColor: "transparent",
                            border: "none"
                        }, t),
                        html: e.html,
                        class: e.class
                    }),
                    o = $.navigator.userAgent.match(/MSIE|Edge/i);
                return r.hasAttribute("id") || r.setAttribute("id", se()), Le(r), (e.url || o) && r.setAttribute("src", e.url || "about:blank"), r
            }

            function Ye(e, n, t) {
                return e.addEventListener(n, t), {
                    cancel: function() {
                        e.removeEventListener(n, t)
                    }
                }
            }

            function He(e) {
                e.style.setProperty("display", "")
            }

            function Je(e) {
                e.style.setProperty("display", "none", "important")
            }

            function $e(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }

            function Ze(e) {
                return !(e && e.parentNode && e.ownerDocument && e.ownerDocument.documentElement && e.ownerDocument.documentElement.contains(e))
            }

            function Ve(e, n, t) {
                var r = void 0 === t ? {} : t,
                    o = r.width,
                    i = void 0 === o || o,
                    a = r.height,
                    u = void 0 === a || a,
                    s = r.interval,
                    c = void 0 === s ? 100 : s,
                    f = r.win,
                    d = void 0 === f ? $ : f,
                    l = e.offsetWidth,
                    h = e.offsetHeight,
                    p = !1;
                n({
                    width: l,
                    height: h
                });
                var m, w, v = function() {
                    if (!p && function(e) {
                            return Boolean(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                        }(e)) {
                        var t = e.offsetWidth,
                            r = e.offsetHeight;
                        (i && t !== l || u && r !== h) && n({
                            width: t,
                            height: r
                        }), l = t, h = r
                    }
                };
                return d.addEventListener("resize", v), void 0 !== d.ResizeObserver ? ((m = new d.ResizeObserver(v)).observe(e), w = Ee(v, 10 * c)) : void 0 !== d.MutationObserver ? ((m = new d.MutationObserver(v)).observe(e, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    characterData: !1
                }), w = Ee(v, 10 * c)) : w = Ee(v, c), {
                    cancel: function() {
                        p = !0, m.disconnect(), $.removeEventListener("resize", v), w.cancel()
                    }
                }
            }

            function Ge(e) {
                for (; e.parentNode;) e = e.parentNode;
                return "[object ShadowRoot]" === e.toString()
            }
            var Xe = "undefined" != typeof document ? document.currentScript : null,
                Ke = he((function() {
                    if (Xe) return Xe;
                    if (Xe = function() {
                            try {
                                var e = function() {
                                        try {
                                            throw new Error("_")
                                        } catch (e) {
                                            return e.stack || ""
                                        }
                                    }(),
                                    n = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(e),
                                    t = n && n[1];
                                if (!t) return;
                                for (var r = 0, o = [].slice.call(document.getElementsByTagName("script")).reverse(); r < o.length; r++) {
                                    var i = o[r];
                                    if (i.src && i.src === t) return i
                                }
                            } catch (e) {}
                        }()) return Xe;
                    throw new Error("Can not determine current script")
                })),
                Qe = se();

            function en(e) {
                return "string" == typeof e && /^[0-9]+%$/.test(e)
            }

            function nn(e) {
                if ("number" == typeof e) return e;
                var n = e.match(/^([0-9]+)(px|%)$/);
                if (!n) throw new Error("Could not match css value from " + e);
                return parseInt(n[1], 10)
            }

            function tn(e) {
                return nn(e) + "px"
            }

            function rn(e) {
                return "number" == typeof e ? tn(e) : en(e) ? e : tn(e)
            }

            function on(e, n) {
                if ("number" == typeof e) return e;
                if (en(e)) return parseInt(n * nn(e) / 100, 10);
                if ("string" == typeof(t = e) && /^[0-9]+px$/.test(t)) return nn(e);
                var t;
                throw new Error("Can not normalize dimension: " + e)
            }

            function an(e) {
                void 0 === e && (e = $);
                var n = "__post_robot_10_0_44__";
                return e !== $ ? e[n] : e[n] = e[n] || {}
            }
            he((function() {
                var e;
                try {
                    e = Ke()
                } catch (e) {
                    return Qe
                }
                var n = e.getAttribute("data-uid");
                if (n && "string" == typeof n) return n;
                if ((n = e.getAttribute("data-uid-auto")) && "string" == typeof n) return n;
                if (e.src) {
                    var t = function(e) {
                        for (var n = "", t = 0; t < e.length; t++) {
                            var r = e[t].charCodeAt(0) * t;
                            e[t + 1] && (r += e[t + 1].charCodeAt(0) * (t - 1)), n += String.fromCharCode(97 + Math.abs(r) % 26)
                        }
                        return n
                    }(JSON.stringify({
                        src: e.src,
                        dataset: e.dataset
                    }));
                    n = "uid_" + t.slice(t.length - 30)
                } else n = se();
                return e.setAttribute("data-uid-auto", n), n
            }));
            var un = function() {
                return {}
            };

            function sn(e, n) {
                return void 0 === e && (e = "store"), void 0 === n && (n = un), Oe(an(), e, (function() {
                    var e = n();
                    return {
                        has: function(n) {
                            return e.hasOwnProperty(n)
                        },
                        get: function(n, t) {
                            return e.hasOwnProperty(n) ? e[n] : t
                        },
                        set: function(n, t) {
                            return e[n] = t, t
                        },
                        del: function(n) {
                            delete e[n]
                        },
                        getOrSet: function(n, t) {
                            return Oe(e, n, t)
                        },
                        reset: function() {
                            e = n()
                        },
                        keys: function() {
                            return Object.keys(e)
                        }
                    }
                }))
            }
            var cn, fn = function() {};

            function dn() {
                var e = an();
                return e.WINDOW_WILDCARD = e.WINDOW_WILDCARD || new fn, e.WINDOW_WILDCARD
            }

            function ln(e, n) {
                return void 0 === e && (e = "store"), void 0 === n && (n = un), sn("windowStore").getOrSet(e, (function() {
                    var t = new Q,
                        r = function(e) {
                            return t.getOrSet(e, n)
                        };
                    return {
                        has: function(n) {
                            return r(n).hasOwnProperty(e)
                        },
                        get: function(n, t) {
                            var o = r(n);
                            return o.hasOwnProperty(e) ? o[e] : t
                        },
                        set: function(n, t) {
                            return r(n)[e] = t, t
                        },
                        del: function(n) {
                            delete r(n)[e]
                        },
                        getOrSet: function(n, t) {
                            return Oe(r(n), e, t)
                        }
                    }
                }))
            }

            function hn() {
                return sn("instance").getOrSet("instanceID", se)
            }

            function pn(e, n) {
                var t = n.domain,
                    r = ln("helloPromises"),
                    o = r.get(e);
                o && o.resolve({
                    domain: t
                });
                var i = p.resolve({
                    domain: t
                });
                return r.set(e, i), i
            }

            function mn(e, n) {
                return (0, n.send)(e, "postrobot_hello", {
                    instanceID: hn()
                }, {
                    domain: "*",
                    timeout: -1
                }).then((function(n) {
                    var t = n.origin,
                        r = n.data.instanceID;
                    return pn(e, {
                        domain: t
                    }), {
                        win: e,
                        domain: t,
                        instanceID: r
                    }
                }))
            }

            function wn(e, n) {
                var t = n.send;
                return ln("windowInstanceIDPromises").getOrSet(e, (function() {
                    return mn(e, {
                        send: t
                    }).then((function(e) {
                        return e.instanceID
                    }))
                }))
            }

            function vn(e, n, t) {
                void 0 === n && (n = 5e3), void 0 === t && (t = "Window");
                var r = function(e) {
                    return ln("helloPromises").getOrSet(e, (function() {
                        return new p
                    }))
                }(e);
                return -1 !== n && (r = r.timeout(n, new Error(t + " did not load after " + n + "ms"))), r
            }

            function yn(e) {
                ln("knownWindows").set(e, !0)
            }

            function gn(e) {
                return "object" == typeof e && null !== e && "string" == typeof e.__type__
            }

            function bn(e) {
                return void 0 === e ? "undefined" : null === e ? "null" : Array.isArray(e) ? "array" : "function" == typeof e ? "function" : "object" == typeof e ? e instanceof Error ? "error" : "function" == typeof e.then ? "promise" : "[object RegExp]" === {}.toString.call(e) ? "regex" : "[object Date]" === {}.toString.call(e) ? "date" : "object" : "string" == typeof e ? "string" : "number" == typeof e ? "number" : "boolean" == typeof e ? "boolean" : void 0
            }

            function En(e, n) {
                return {
                    __type__: e,
                    __val__: n
                }
            }
            var _n, xn = ((cn = {}).function = function() {}, cn.error = function(e) {
                    return En("error", {
                        message: e.message,
                        stack: e.stack,
                        code: e.code,
                        data: e.data
                    })
                }, cn.promise = function() {}, cn.regex = function(e) {
                    return En("regex", e.source)
                }, cn.date = function(e) {
                    return En("date", e.toJSON())
                }, cn.array = function(e) {
                    return e
                }, cn.object = function(e) {
                    return e
                }, cn.string = function(e) {
                    return e
                }, cn.number = function(e) {
                    return e
                }, cn.boolean = function(e) {
                    return e
                }, cn.null = function(e) {
                    return e
                }, cn[void 0] = function(e) {
                    return En("undefined", e)
                }, cn),
                Pn = {},
                On = ((_n = {}).function = function() {
                    throw new Error("Function serialization is not implemented; nothing to deserialize")
                }, _n.error = function(e) {
                    var n = e.stack,
                        t = e.code,
                        r = e.data,
                        o = new Error(e.message);
                    return o.code = t, r && (o.data = r), o.stack = n + "\n\n" + o.stack, o
                }, _n.promise = function() {
                    throw new Error("Promise serialization is not implemented; nothing to deserialize")
                }, _n.regex = function(e) {
                    return new RegExp(e)
                }, _n.date = function(e) {
                    return new Date(e)
                }, _n.array = function(e) {
                    return e
                }, _n.object = function(e) {
                    return e
                }, _n.string = function(e) {
                    return e
                }, _n.number = function(e) {
                    return e
                }, _n.boolean = function(e) {
                    return e
                }, _n.null = function(e) {
                    return e
                }, _n[void 0] = function() {}, _n),
                Cn = {};

            function Sn() {
                return !!I($).match(/MSIE|trident|edge\/12|edge\/13/i)
            }

            function An(e) {
                return !B($, e)
            }

            function Tn(e, n) {
                if (e) {
                    if (O() !== Y(e)) return !0
                } else if (n && !C(n)) return !0;
                return !1
            }

            function Rn(e) {
                var n = e.win,
                    t = e.domain;
                return !(!Sn() || t && !Tn(t, n) || n && !An(n))
            }

            function Dn(e) {
                return "__postrobot_bridge___" + (e = e || Y(e)).replace(/[^a-zA-Z0-9]+/g, "_")
            }

            function Wn() {
                return Boolean($.name && $.name === Dn(O()))
            }
            var Nn = new p((function(e) {
                if ($.document && $.document.body) return e($.document.body);
                var n = setInterval((function() {
                    if ($.document && $.document.body) return clearInterval(n), e($.document.body)
                }), 10)
            }));

            function kn(e) {
                ln("remoteWindowPromises").getOrSet(e, (function() {
                    return new p
                }))
            }

            function jn(e) {
                var n = ln("remoteWindowPromises").get(e);
                if (!n) throw new Error("Remote window promise not found");
                return n
            }

            function In(e, n, t) {
                jn(e).resolve((function(r, o, i) {
                    if (r !== e) throw new Error("Remote window does not match window");
                    if (!q(o, n)) throw new Error("Remote domain " + o + " does not match domain " + n);
                    t.fireAndForget(i)
                }))
            }

            function zn(e, n) {
                jn(e).reject(n).catch(me)
            }

            function Mn(e) {
                for (var n = e.win, t = e.name, r = e.domain, o = sn("popupWindowsByName"), i = ln("popupWindowsByWin"), a = 0, u = o.keys(); a < u.length; a++) {
                    var s = u[a],
                        c = o.get(s);
                    c && !j(c.win) || o.del(s)
                }
                if (j(n)) return {
                    win: n,
                    name: t,
                    domain: r
                };
                var f = i.getOrSet(n, (function() {
                    return t ? o.getOrSet(t, (function() {
                        return {
                            win: n,
                            name: t
                        }
                    })) : {
                        win: n
                    }
                }));
                if (f.win && f.win !== n) throw new Error("Different window already linked for window: " + (t || "undefined"));
                return t && (f.name = t, o.set(t, f)), r && (f.domain = r, kn(n)), i.set(n, f), f
            }

            function Fn(e) {
                var n, t = e.on,
                    r = e.send,
                    o = e.receiveMessage;
                n = $.open, $.open = function(e, t, r, o) {
                        var i = n.call(this, Z(e), t, r, o);
                        return i ? (Mn({
                            win: i,
                            name: t,
                            domain: e ? Y(e) : null
                        }), i) : i
                    },
                    function(e) {
                        var n = e.on,
                            t = e.send,
                            r = e.receiveMessage,
                            o = sn("popupWindowsByName");
                        n("postrobot_open_tunnel", (function(e) {
                            var i = e.source,
                                a = e.origin,
                                u = e.data,
                                s = sn("bridges").get(a);
                            if (!s) throw new Error("Can not find bridge promise for domain " + a);
                            return s.then((function(e) {
                                if (i !== e) throw new Error("Message source does not matched registered bridge for domain " + a);
                                if (!u.name) throw new Error("Register window expected to be passed window name");
                                if (!u.sendMessage) throw new Error("Register window expected to be passed sendMessage method");
                                if (!o.has(u.name)) throw new Error("Window with name " + u.name + " does not exist, or was not opened by this window");
                                var s = function() {
                                    return o.get(u.name)
                                };
                                if (!s().domain) throw new Error("We do not have a registered domain for window " + u.name);
                                if (s().domain !== a) throw new Error("Message origin " + a + " does not matched registered window origin " + (s().domain || "unknown"));
                                return In(s().win, a, u.sendMessage), {
                                    sendMessage: function(e) {
                                        if ($ && !$.closed && s()) {
                                            var o = s().domain;
                                            if (o) try {
                                                r({
                                                    data: e,
                                                    origin: o,
                                                    source: s().win
                                                }, {
                                                    on: n,
                                                    send: t
                                                })
                                            } catch (e) {
                                                p.reject(e)
                                            }
                                        }
                                    }
                                }
                            }))
                        }))
                    }({
                        on: t,
                        send: r,
                        receiveMessage: o
                    }),
                    function(e) {
                        var n = e.send;
                        an($).openTunnelToParent = function(e) {
                            var t = e.name,
                                r = e.source,
                                o = e.canary,
                                i = e.sendMessage,
                                a = sn("tunnelWindows"),
                                u = E($);
                            if (!u) throw new Error("No parent window found to open tunnel to");
                            var s = function(e) {
                                var n = e.name,
                                    t = e.source,
                                    r = e.canary,
                                    o = e.sendMessage;
                                ! function() {
                                    for (var e = sn("tunnelWindows"), n = 0, t = e.keys(); n < t.length; n++) {
                                        var r = t[n];
                                        j(e[r].source) && e.del(r)
                                    }
                                }();
                                var i = se();
                                return sn("tunnelWindows").set(i, {
                                    name: n,
                                    source: t,
                                    canary: r,
                                    sendMessage: o
                                }), i
                            }({
                                name: t,
                                source: r,
                                canary: o,
                                sendMessage: i
                            });
                            return n(u, "postrobot_open_tunnel", {
                                name: t,
                                sendMessage: function() {
                                    var e = a.get(s);
                                    if (e && e.source && !j(e.source)) {
                                        try {
                                            e.canary()
                                        } catch (e) {
                                            return
                                        }
                                        e.sendMessage.apply(this, arguments)
                                    }
                                }
                            }, {
                                domain: "*"
                            })
                        }
                    }({
                        send: r
                    }),
                    function(e) {
                        var n = e.on,
                            t = e.send,
                            r = e.receiveMessage;
                        p.try((function() {
                            var e, o = _($);
                            if (o && Rn({
                                    win: o
                                })) return kn(o), (e = o, ln("remoteBridgeAwaiters").getOrSet(e, (function() {
                                return p.try((function() {
                                    var n = z(e, Dn(O()));
                                    if (n) return C(n) && an(S(n)) ? n : new p((function(e) {
                                        var t, r;
                                        t = setInterval((function() {
                                            if (n && C(n) && an(S(n))) return clearInterval(t), clearTimeout(r), e(n)
                                        }), 100), r = setTimeout((function() {
                                            return clearInterval(t), e()
                                        }), 2e3)
                                    }))
                                }))
                            }))).then((function(e) {
                                return e ? $.name ? an(S(e)).openTunnelToParent({
                                    name: $.name,
                                    source: $,
                                    canary: function() {},
                                    sendMessage: function(e) {
                                        if ($ && !$.closed) try {
                                            r({
                                                data: e,
                                                origin: this.origin,
                                                source: this.source
                                            }, {
                                                on: n,
                                                send: t
                                            })
                                        } catch (e) {
                                            p.reject(e)
                                        }
                                    }
                                }).then((function(e) {
                                    var n = e.source,
                                        t = e.origin,
                                        r = e.data;
                                    if (n !== o) throw new Error("Source does not match opener");
                                    In(n, t, r.sendMessage)
                                })).catch((function(e) {
                                    throw zn(o, e), e
                                })) : zn(o, new Error("Can not register with opener: window does not have a name")) : zn(o, new Error("Can not register with opener: no bridge found in opener"))
                            }))
                        }))
                    }({
                        on: t,
                        send: r,
                        receiveMessage: o
                    })
            }

            function Un() {
                for (var e = sn("idToProxyWindow"), n = 0, t = e.keys(); n < t.length; n++) {
                    var r = t[n];
                    e.get(r).shouldClean() && e.del(r)
                }
            }

            function Ln(e, n) {
                var t = n.send,
                    r = n.id,
                    o = void 0 === r ? se() : r,
                    i = e.then((function(e) {
                        if (C(e)) return S(e).name
                    })),
                    a = e.then((function(e) {
                        if (j(e)) throw new Error("Window is closed, can not determine type");
                        return _(e) ? w.POPUP : w.IFRAME
                    }));
                i.catch(me), a.catch(me);
                var u = function() {
                    return e.then((function(e) {
                        if (!j(e)) return C(e) ? S(e).name : i
                    }))
                };
                return {
                    id: o,
                    getType: function() {
                        return a
                    },
                    getInstanceID: pe((function() {
                        return e.then((function(e) {
                            return wn(e, {
                                send: t
                            })
                        }))
                    })),
                    close: function() {
                        return e.then(G)
                    },
                    getName: u,
                    focus: function() {
                        return e.then((function(e) {
                            e.focus()
                        }))
                    },
                    isClosed: function() {
                        return e.then((function(e) {
                            return j(e)
                        }))
                    },
                    setLocation: function(n, t) {
                        return void 0 === t && (t = {}), e.then((function(e) {
                            var r = $.location.protocol + "//" + $.location.host,
                                o = t.method,
                                i = void 0 === o ? "get" : o,
                                a = t.body;
                            if (0 === n.indexOf("/")) n = "" + r + n;
                            else if (!n.match(/^https?:\/\//) && 0 !== n.indexOf(r)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(n));
                            if ("post" === i) return u().then((function(e) {
                                if (!e) throw new Error("Can not post to window without target name");
                                ! function(e) {
                                    var n = e.url,
                                        t = e.target,
                                        r = e.body,
                                        o = e.method,
                                        i = void 0 === o ? "post" : o,
                                        a = document.createElement("form");
                                    if (a.setAttribute("target", t), a.setAttribute("method", i), a.setAttribute("action", n), a.style.display = "none", r)
                                        for (var u = 0, s = Object.keys(r); u < s.length; u++) {
                                            var c, f = s[u],
                                                d = document.createElement("input");
                                            d.setAttribute("name", f), d.setAttribute("value", null == (c = r[f]) ? void 0 : c.toString()), a.appendChild(d)
                                        }
                                    Te().appendChild(a), a.submit(), Te().removeChild(a)
                                }({
                                    url: n,
                                    target: e,
                                    method: i,
                                    body: a
                                })
                            }));
                            if ("get" !== i) throw new Error("Unsupported method: " + i);
                            if (C(e)) try {
                                if (e.location && "function" == typeof e.location.replace) return void e.location.replace(n)
                            } catch (e) {}
                            e.location = n
                        }))
                    },
                    setName: function(n) {
                        return e.then((function(e) {
                            Mn({
                                win: e,
                                name: n
                            });
                            var t = C(e),
                                r = V(e);
                            if (!t) throw new Error("Can not set name for cross-domain window: " + n);
                            S(e).name = n, r && r.setAttribute("name", n), i = p.resolve(n)
                        }))
                    }
                }
            }
            var Bn = function() {
                function e(e) {
                    var n = e.send,
                        t = e.win,
                        r = e.serializedWindow;
                    this.id = void 0, this.isProxyWindow = !0, this.serializedWindow = void 0, this.actualWindow = void 0, this.actualWindowPromise = void 0, this.send = void 0, this.name = void 0, this.actualWindowPromise = new p, this.serializedWindow = r || Ln(this.actualWindowPromise, {
                        send: n
                    }), sn("idToProxyWindow").set(this.getID(), this), t && this.setWindow(t, {
                        send: n
                    })
                }
                var n = e.prototype;
                return n.getID = function() {
                    return this.serializedWindow.id
                }, n.getType = function() {
                    return this.serializedWindow.getType()
                }, n.isPopup = function() {
                    return this.getType().then((function(e) {
                        return e === w.POPUP
                    }))
                }, n.setLocation = function(e, n) {
                    var t = this;
                    return this.serializedWindow.setLocation(e, n).then((function() {
                        return t
                    }))
                }, n.getName = function() {
                    return this.serializedWindow.getName()
                }, n.setName = function(e) {
                    var n = this;
                    return this.serializedWindow.setName(e).then((function() {
                        return n
                    }))
                }, n.close = function() {
                    var e = this;
                    return this.serializedWindow.close().then((function() {
                        return e
                    }))
                }, n.focus = function() {
                    var e = this,
                        n = this.isPopup(),
                        t = this.getName(),
                        r = p.hash({
                            isPopup: n,
                            name: t
                        }).then((function(e) {
                            var n = e.name;
                            e.isPopup && n && $.open("", n)
                        })),
                        o = this.serializedWindow.focus();
                    return p.all([r, o]).then((function() {
                        return e
                    }))
                }, n.isClosed = function() {
                    return this.serializedWindow.isClosed()
                }, n.getWindow = function() {
                    return this.actualWindow
                }, n.setWindow = function(e, n) {
                    var t = n.send;
                    this.actualWindow = e, this.actualWindowPromise.resolve(this.actualWindow), this.serializedWindow = Ln(this.actualWindowPromise, {
                        send: t,
                        id: this.getID()
                    }), ln("winToProxyWindow").set(e, this)
                }, n.awaitWindow = function() {
                    return this.actualWindowPromise
                }, n.matchWindow = function(e, n) {
                    var t = this,
                        r = n.send;
                    return p.try((function() {
                        return t.actualWindow ? e === t.actualWindow : p.hash({
                            proxyInstanceID: t.getInstanceID(),
                            knownWindowInstanceID: wn(e, {
                                send: r
                            })
                        }).then((function(n) {
                            var o = n.proxyInstanceID === n.knownWindowInstanceID;
                            return o && t.setWindow(e, {
                                send: r
                            }), o
                        }))
                    }))
                }, n.unwrap = function() {
                    return this.actualWindow || this
                }, n.getInstanceID = function() {
                    return this.serializedWindow.getInstanceID()
                }, n.shouldClean = function() {
                    return Boolean(this.actualWindow && j(this.actualWindow))
                }, n.serialize = function() {
                    return this.serializedWindow
                }, e.unwrap = function(n) {
                    return e.isProxyWindow(n) ? n.unwrap() : n
                }, e.serialize = function(n, t) {
                    var r = t.send;
                    return Un(), e.toProxyWindow(n, {
                        send: r
                    }).serialize()
                }, e.deserialize = function(n, t) {
                    var r = t.send;
                    return Un(), sn("idToProxyWindow").get(n.id) || new e({
                        serializedWindow: n,
                        send: r
                    })
                }, e.isProxyWindow = function(e) {
                    return Boolean(e && !J(e) && e.isProxyWindow)
                }, e.toProxyWindow = function(n, t) {
                    var r = t.send;
                    if (Un(), e.isProxyWindow(n)) return n;
                    var o = n;
                    return ln("winToProxyWindow").get(o) || new e({
                        win: o,
                        send: r
                    })
                }, e
            }();

            function qn(e, n, t, r, o) {
                var i = ln("methodStore"),
                    a = sn("proxyWindowMethods");
                Bn.isProxyWindow(r) ? a.set(e, {
                    val: n,
                    name: t,
                    domain: o,
                    source: r
                }) : (a.del(e), i.getOrSet(r, (function() {
                    return {}
                }))[e] = {
                    domain: o,
                    name: t,
                    val: n,
                    source: r
                })
            }

            function Yn(e, n) {
                var t = ln("methodStore"),
                    r = sn("proxyWindowMethods");
                return t.getOrSet(e, (function() {
                    return {}
                }))[n] || r.get(n)
            }

            function Hn(e, n, t, r, o) {
                var i, a, u;
                a = (i = {
                    on: o.on,
                    send: o.send
                }).on, u = i.send, sn("builtinListeners").getOrSet("functionCalls", (function() {
                    return a("postrobot_method", {
                        domain: "*"
                    }, (function(e) {
                        var n = e.source,
                            t = e.origin,
                            r = e.data,
                            o = r.id,
                            i = r.name,
                            a = Yn(n, o);
                        if (!a) throw new Error("Could not find method '" + i + "' with id: " + r.id + " in " + O($));
                        var s = a.source,
                            c = a.domain,
                            f = a.val;
                        return p.try((function() {
                            if (!q(c, t)) throw new Error("Method '" + r.name + "' domain " + JSON.stringify(Pe(a.domain) ? a.domain.source : a.domain) + " does not match origin " + t + " in " + O($));
                            if (Bn.isProxyWindow(s)) return s.matchWindow(n, {
                                send: u
                            }).then((function(e) {
                                if (!e) throw new Error("Method call '" + r.name + "' failed - proxy window does not match source in " + O($))
                            }))
                        })).then((function() {
                            return f.apply({
                                source: n,
                                origin: t
                            }, r.args)
                        }), (function(e) {
                            return p.try((function() {
                                if (f.onError) return f.onError(e)
                            })).then((function() {
                                var n;
                                throw e.stack && (e.stack = "Remote call to " + i + "(" + (void 0 === (n = r.args) && (n = []), _e(n).map((function(e) {
                                    return "string" == typeof e ? "'" + e + "'" : void 0 === e ? "undefined" : null === e ? "null" : "boolean" == typeof e ? e.toString() : Array.isArray(e) ? "[ ... ]" : "object" == typeof e ? "{ ... }" : "function" == typeof e ? "() => { ... }" : "<" + typeof e + ">"
                                })).join(", ") + ") failed\n\n") + e.stack), e
                            }))
                        })).then((function(e) {
                            return {
                                result: e,
                                id: o,
                                name: i
                            }
                        }))
                    }))
                }));
                var s = t.__id__ || se();
                e = Bn.unwrap(e);
                var c = t.__name__ || t.name || r;
                return "string" == typeof c && "function" == typeof c.indexOf && 0 === c.indexOf("anonymous::") && (c = c.replace("anonymous::", r + "::")), Bn.isProxyWindow(e) ? (qn(s, t, c, e, n), e.awaitWindow().then((function(e) {
                    qn(s, t, c, e, n)
                }))) : qn(s, t, c, e, n), En("cross_domain_function", {
                    id: s,
                    name: c
                })
            }

            function Jn(e, n, t, r) {
                var o, i = r.on,
                    a = r.send;
                return function(e, n) {
                    void 0 === n && (n = Pn);
                    var t = JSON.stringify(e, (function(e) {
                        var t = this[e];
                        if (gn(this)) return t;
                        var r = bn(t);
                        if (!r) return t;
                        var o = n[r] || xn[r];
                        return o ? o(t, e) : t
                    }));
                    return void 0 === t ? "undefined" : t
                }(t, ((o = {}).promise = function(t, r) {
                    return function(e, n, t, r, o) {
                        return En("cross_domain_zalgo_promise", {
                            then: Hn(e, n, (function(e, n) {
                                return t.then(e, n)
                            }), r, {
                                on: o.on,
                                send: o.send
                            })
                        })
                    }(e, n, t, r, {
                        on: i,
                        send: a
                    })
                }, o.function = function(t, r) {
                    return Hn(e, n, t, r, {
                        on: i,
                        send: a
                    })
                }, o.object = function(e) {
                    return J(e) || Bn.isProxyWindow(e) ? En("cross_domain_window", Bn.serialize(e, {
                        send: a
                    })) : e
                }, o))
            }

            function $n(e, n, t, r) {
                var o, i = r.send;
                return function(e, n) {
                    if (void 0 === n && (n = Cn), "undefined" !== e) return JSON.parse(e, (function(e, t) {
                        if (gn(this)) return t;
                        var r, o;
                        if (gn(t) ? (r = t.__type__, o = t.__val__) : (r = bn(t), o = t), !r) return o;
                        var i = n[r] || On[r];
                        return i ? i(o, e) : o
                    }))
                }(t, ((o = {}).cross_domain_zalgo_promise = function(e) {
                    return function(e, n, t) {
                        return new p(t.then)
                    }(0, 0, e)
                }, o.cross_domain_function = function(t) {
                    return function(e, n, t, r) {
                        var o = t.id,
                            i = t.name,
                            a = r.send,
                            u = function(t) {
                                function r() {
                                    var u = arguments;
                                    return Bn.toProxyWindow(e, {
                                        send: a
                                    }).awaitWindow().then((function(e) {
                                        var s = Yn(e, o);
                                        if (s && s.val !== r) return s.val.apply({
                                            source: $,
                                            origin: O()
                                        }, u);
                                        var c = [].slice.call(u);
                                        return t.fireAndForget ? a(e, "postrobot_method", {
                                            id: o,
                                            name: i,
                                            args: c
                                        }, {
                                            domain: n,
                                            fireAndForget: !0
                                        }) : a(e, "postrobot_method", {
                                            id: o,
                                            name: i,
                                            args: c
                                        }, {
                                            domain: n,
                                            fireAndForget: !1
                                        }).then((function(e) {
                                            return e.data.result
                                        }))
                                    })).catch((function(e) {
                                        throw e
                                    }))
                                }
                                return void 0 === t && (t = {}), r.__name__ = i, r.__origin__ = n, r.__source__ = e, r.__id__ = o, r.origin = n, r
                            },
                            s = u();
                        return s.fireAndForget = u({
                            fireAndForget: !0
                        }), s
                    }(e, n, t, {
                        send: i
                    })
                }, o.cross_domain_window = function(e) {
                    return Bn.deserialize(e, {
                        send: i
                    })
                }, o))
            }
            var Zn = {};

            function Vn(e, n, t, r) {
                var o = r.on,
                    i = r.send;
                return p.try((function() {
                    var r = ln().getOrSet(e, (function() {
                        return {}
                    }));
                    return r.buffer = r.buffer || [], r.buffer.push(t), r.flush = r.flush || p.flush().then((function() {
                        if (j(e)) throw new Error("Window is closed");
                        var t, a = Jn(e, n, ((t = {}).__post_robot_10_0_44__ = r.buffer || [], t), {
                            on: o,
                            send: i
                        });
                        delete r.buffer;
                        for (var u = Object.keys(Zn), s = [], c = 0; c < u.length; c++) {
                            var f = u[c];
                            try {
                                Zn[f](e, a, n)
                            } catch (e) {
                                s.push(e)
                            }
                        }
                        if (s.length === u.length) throw new Error("All post-robot messaging strategies failed:\n\n" + s.map((function(e, n) {
                            return n + ". " + ve(e)
                        })).join("\n\n"))
                    })), r.flush.then((function() {
                        delete r.flush
                    }))
                })).then(me)
            }

            function Gn(e) {
                return sn("responseListeners").get(e)
            }

            function Xn(e) {
                sn("responseListeners").del(e)
            }

            function Kn(e) {
                return sn("erroredResponseListeners").has(e)
            }

            function Qn(e) {
                var n = e.name,
                    t = e.win,
                    r = e.domain,
                    o = ln("requestListeners");
                if ("*" === t && (t = null), "*" === r && (r = null), !n) throw new Error("Name required to get request listener");
                for (var i = 0, a = [t, dn()]; i < a.length; i++) {
                    var u = a[i];
                    if (u) {
                        var s = o.get(u);
                        if (s) {
                            var c = s[n];
                            if (c) {
                                if (r && "string" == typeof r) {
                                    if (c[r]) return c[r];
                                    if (c.__domain_regex__)
                                        for (var f = 0, d = c.__domain_regex__; f < d.length; f++) {
                                            var l = d[f],
                                                h = l.listener;
                                            if (q(l.regex, r)) return h
                                        }
                                }
                                if (c["*"]) return c["*"]
                            }
                        }
                    }
                }
            }

            function et(e, n, t, r) {
                var o = r.on,
                    i = r.send,
                    a = Qn({
                        name: t.name,
                        win: e,
                        domain: n
                    }),
                    u = "postrobot_method" === t.name && t.data && "string" == typeof t.data.name ? t.data.name + "()" : t.name;

                function s(r, a, s) {
                    return p.flush().then((function() {
                        if (!t.fireAndForget && !j(e)) try {
                            return Vn(e, n, {
                                id: se(),
                                origin: O($),
                                type: "postrobot_message_response",
                                hash: t.hash,
                                name: t.name,
                                ack: r,
                                data: a,
                                error: s
                            }, {
                                on: o,
                                send: i
                            })
                        } catch (e) {
                            throw new Error("Send response message failed for " + u + " in " + O() + "\n\n" + ve(e))
                        }
                    }))
                }
                return p.all([p.flush().then((function() {
                    if (!t.fireAndForget && !j(e)) try {
                        return Vn(e, n, {
                            id: se(),
                            origin: O($),
                            type: "postrobot_message_ack",
                            hash: t.hash,
                            name: t.name
                        }, {
                            on: o,
                            send: i
                        })
                    } catch (e) {
                        throw new Error("Send ack message failed for " + u + " in " + O() + "\n\n" + ve(e))
                    }
                })), p.try((function() {
                    if (!a) throw new Error("No handler found for post message: " + t.name + " from " + n + " in " + $.location.protocol + "//" + $.location.host + $.location.pathname);
                    if (!q(a.domain, n)) throw new Error("Request origin " + n + " does not match domain " + a.domain.toString());
                    return a.handler({
                        source: e,
                        origin: n,
                        data: t.data
                    })
                })).then((function(e) {
                    return s("success", e)
                }), (function(e) {
                    return s("error", null, e)
                }))]).then(me).catch((function(e) {
                    if (a && a.handleError) return a.handleError(e);
                    throw e
                }))
            }

            function nt(e, n, t) {
                if (!Kn(t.hash)) {
                    var r = Gn(t.hash);
                    if (!r) throw new Error("No handler found for post message ack for message: " + t.name + " from " + n + " in " + $.location.protocol + "//" + $.location.host + $.location.pathname);
                    try {
                        if (!q(r.domain, n)) throw new Error("Ack origin " + n + " does not match domain " + r.domain.toString());
                        if (e !== r.win) throw new Error("Ack source does not match registered window")
                    } catch (e) {
                        r.promise.reject(e)
                    }
                    r.ack = !0
                }
            }

            function tt(e, n, t) {
                if (!Kn(t.hash)) {
                    var r, o = Gn(t.hash);
                    if (!o) throw new Error("No handler found for post message response for message: " + t.name + " from " + n + " in " + $.location.protocol + "//" + $.location.host + $.location.pathname);
                    if (!q(o.domain, n)) throw new Error("Response origin " + n + " does not match domain " + (r = o.domain, Array.isArray(r) ? "(" + r.join(" | ") + ")" : m(r) ? "RegExp(" + r.toString() + ")" : r.toString()));
                    if (e !== o.win) throw new Error("Response source does not match registered window");
                    Xn(t.hash), "error" === t.ack ? o.promise.reject(t.error) : "success" === t.ack && o.promise.resolve({
                        source: e,
                        origin: n,
                        data: t.data
                    })
                }
            }

            function rt(e, n) {
                var t = n.on,
                    r = n.send,
                    o = sn("receivedMessages");
                try {
                    if (!$ || $.closed || !e.source) return
                } catch (e) {
                    return
                }
                var i = e.source,
                    a = e.origin,
                    u = function(e, n, t, r) {
                        var o, i = r.on,
                            a = r.send;
                        try {
                            o = $n(n, t, e, {
                                on: i,
                                send: a
                            })
                        } catch (e) {
                            return
                        }
                        if (o && "object" == typeof o && null !== o) {
                            var u = o.__post_robot_10_0_44__;
                            if (Array.isArray(u)) return u
                        }
                    }(e.data, i, a, {
                        on: t,
                        send: r
                    });
                if (u) {
                    yn(i);
                    for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        if (o.has(c.id)) return;
                        if (o.set(c.id, !0), j(i) && !c.fireAndForget) return;
                        0 === c.origin.indexOf("file:") && (a = "file://");
                        try {
                            "postrobot_message_request" === c.type ? et(i, a, c, {
                                on: t,
                                send: r
                            }) : "postrobot_message_response" === c.type ? tt(i, a, c) : "postrobot_message_ack" === c.type && nt(i, a, c)
                        } catch (e) {
                            setTimeout((function() {
                                throw e
                            }), 0)
                        }
                    }
                }
            }

            function ot(e, n, t) {
                if (!e) throw new Error("Expected name");
                if ("function" == typeof(n = n || {}) && (t = n, n = {}), !t) throw new Error("Expected handler");
                (n = n || {}).name = e, n.handler = t || n.handler;
                var r = n.window,
                    o = n.domain,
                    i = function e(n, t) {
                        var r = n.name,
                            o = n.win,
                            i = n.domain,
                            a = ln("requestListeners");
                        if (!r || "string" != typeof r) throw new Error("Name required to add request listener");
                        if (Array.isArray(o)) {
                            for (var u = [], s = 0, c = o; s < c.length; s++) u.push(e({
                                name: r,
                                domain: i,
                                win: c[s]
                            }, t));
                            return {
                                cancel: function() {
                                    for (var e = 0; e < u.length; e++) u[e].cancel()
                                }
                            }
                        }
                        if (Array.isArray(i)) {
                            for (var f = [], d = 0, l = i; d < l.length; d++) f.push(e({
                                name: r,
                                win: o,
                                domain: l[d]
                            }, t));
                            return {
                                cancel: function() {
                                    for (var e = 0; e < f.length; e++) f[e].cancel()
                                }
                            }
                        }
                        var h = Qn({
                            name: r,
                            win: o,
                            domain: i
                        });
                        if (o && "*" !== o || (o = dn()), i = i || "*", h) throw o && i ? new Error("Request listener already exists for " + r + " on domain " + i.toString() + " for " + (o === dn() ? "wildcard" : "specified") + " window") : o ? new Error("Request listener already exists for " + r + " for " + (o === dn() ? "wildcard" : "specified") + " window") : i ? new Error("Request listener already exists for " + r + " on domain " + i.toString()) : new Error("Request listener already exists for " + r);
                        var p, m, w = a.getOrSet(o, (function() {
                                return {}
                            })),
                            v = Oe(w, r, (function() {
                                return {}
                            })),
                            y = i.toString();
                        return Pe(i) ? (p = Oe(v, "__domain_regex__", (function() {
                            return []
                        }))).push(m = {
                            regex: i,
                            listener: t
                        }) : v[y] = t, {
                            cancel: function() {
                                delete v[y], m && (p.splice(p.indexOf(m, 1)), p.length || delete v.__domain_regex__), Object.keys(v).length || delete w[r], o && !Object.keys(w).length && a.del(o)
                            }
                        }
                    }({
                        name: e,
                        win: r,
                        domain: o
                    }, {
                        handler: n.handler,
                        handleError: n.errorHandler || function(e) {
                            throw e
                        },
                        window: r,
                        domain: o || "*",
                        name: e
                    });
                return {
                    cancel: function() {
                        i.cancel()
                    }
                }
            }
            Zn.postrobot_post_message = function(e, n, t) {
                0 === t.indexOf("file:") && (t = "*"), e.postMessage(n, t)
            }, Zn.postrobot_bridge = function(e, n, t) {
                if (!Sn() && !Wn()) throw new Error("Bridge not needed for browser");
                if (C(e)) throw new Error("Post message through bridge disabled between same domain windows");
                if (!1 !== B($, e)) throw new Error("Can only use bridge to communicate between two different windows, not between frames");
                ! function(e, n, t) {
                    var r = M($, e),
                        o = M(e, $);
                    if (!r && !o) throw new Error("Can only send messages to and from parent and popup windows");
                    jn(e).then((function(r) {
                        return r(e, n, t)
                    }))
                }(e, t, n)
            }, Zn.postrobot_global = function(e, n) {
                if (!I($).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) throw new Error("Global messaging not needed for browser");
                if (!C(e)) throw new Error("Post message through global disabled between different domain windows");
                if (!1 !== B($, e)) throw new Error("Can only use global to communicate between two different windows, not between frames");
                var t = an(e);
                if (!t) throw new Error("Can not find postRobot global on foreign window");
                t.receiveMessage({
                    source: $,
                    origin: O(),
                    data: n
                })
            };
            var it, at = function e(n, t, r, o) {
                var i = (o = o || {}).domain || "*",
                    a = o.timeout || -1,
                    u = o.timeout || 5e3,
                    s = o.fireAndForget || !1;
                return p.try((function() {
                    if (function(e, n, t) {
                            if (!e) throw new Error("Expected name");
                            if (t && "string" != typeof t && !Array.isArray(t) && !Pe(t)) throw new TypeError("Can not send " + e + ". Expected domain " + JSON.stringify(t) + " to be a string, array, or regex");
                            if (j(n)) throw new Error("Can not send " + e + ". Target window is closed")
                        }(t, n, i), function(e, n) {
                            var t = F(n);
                            if (t) return t === e;
                            if (n === e) return !1;
                            if (D(n) === n) return !1;
                            for (var r = 0, o = T(e); r < o.length; r++)
                                if (o[r] === n) return !0;
                            return !1
                        }($, n)) return vn(n, u)
                })).then((function(t) {
                    return function(e, n, t, r) {
                        var o = r.send;
                        return p.try((function() {
                            return "string" == typeof n ? n : p.try((function() {
                                return t || mn(e, {
                                    send: o
                                }).then((function(e) {
                                    return e.domain
                                }))
                            })).then((function(e) {
                                if (!q(n, n)) throw new Error("Domain " + ye(n) + " does not match " + ye(n));
                                return e
                            }))
                        }))
                    }(n, i, (void 0 === t ? {} : t).domain, {
                        send: e
                    })
                })).then((function(o) {
                    var i = o,
                        u = "postrobot_method" === t && r && "string" == typeof r.name ? r.name + "()" : t,
                        c = new p,
                        f = t + "_" + se();
                    if (!s) {
                        var d = {
                            name: t,
                            win: n,
                            domain: i,
                            promise: c
                        };
                        ! function(e, n) {
                            sn("responseListeners").set(e, n)
                        }(f, d);
                        var l = ln("requestPromises").getOrSet(n, (function() {
                            return []
                        }));
                        l.push(c), c.catch((function() {
                            ! function(e) {
                                sn("erroredResponseListeners").set(e, !0)
                            }(f), Xn(f)
                        }));
                        var h = function(e) {
                                return ln("knownWindows").get(e, !1)
                            }(n) ? 1e4 : 2e3,
                            m = a,
                            w = h,
                            v = m,
                            y = Ee((function() {
                                return j(n) ? c.reject(new Error("Window closed for " + t + " before " + (d.ack ? "response" : "ack"))) : d.cancelled ? c.reject(new Error("Response listener was cancelled for " + t)) : (w = Math.max(w - 500, 0), -1 !== v && (v = Math.max(v - 500, 0)), d.ack || 0 !== w ? 0 === v ? c.reject(new Error("No response for postMessage " + u + " in " + O() + " in " + m + "ms")) : void 0 : c.reject(new Error("No ack for postMessage " + u + " in " + O() + " in " + h + "ms")))
                            }), 500);
                        c.finally((function() {
                            y.cancel(), l.splice(l.indexOf(c, 1))
                        })).catch(me)
                    }
                    return Vn(n, i, {
                        id: se(),
                        origin: O($),
                        type: "postrobot_message_request",
                        hash: f,
                        name: t,
                        data: r,
                        fireAndForget: s
                    }, {
                        on: ot,
                        send: e
                    }).then((function() {
                        return s ? c.resolve() : c
                    }), (function(e) {
                        throw new Error("Send request message failed for " + u + " in " + O() + "\n\n" + ve(e))
                    }))
                }))
            };

            function ut(e) {
                return Bn.toProxyWindow(e, {
                    send: at
                })
            }

            function st(e) {
                for (var n = 0, t = ln("requestPromises").get(e, []); n < t.length; n++) t[n].reject(new Error("Window " + (j(e) ? "closed" : "cleaned up") + " before response")).catch(me)
            }

            function ct(e) {
                if (!C(e)) throw new Error("Can not get global for window on different domain");
                return e.__zoid_9_0_86__ || (e.__zoid_9_0_86__ = {}), e.__zoid_9_0_86__
            }

            function ft(e, n) {
                try {
                    return n(ct(e))
                } catch (e) {}
            }

            function dt(e) {
                return {
                    get: function() {
                        var n = this;
                        return p.try((function() {
                            if (n.source && n.source !== $) throw new Error("Can not call get on proxy object from a remote window");
                            return e
                        }))
                    }
                }
            }

            function lt(e) {
                return ae(JSON.stringify(e))
            }

            function ht(e) {
                var n = ct(e);
                return n.references = n.references || {}, n.references
            }

            function pt(e) {
                var n, t, r = e.data,
                    o = e.metaData,
                    i = e.sender,
                    a = e.receiver,
                    u = e.passByReference,
                    s = void 0 !== u && u,
                    c = e.basic,
                    f = void 0 !== c && c,
                    d = ut(a.win),
                    l = f ? JSON.stringify(r) : Jn(d, a.domain, r, {
                        on: ot,
                        send: at
                    }),
                    h = s ? (n = l, t = se(), ht($)[t] = n, {
                        type: "uid",
                        uid: t
                    }) : {
                        type: "raw",
                        val: l
                    };
                return {
                    serializedData: lt({
                        sender: {
                            domain: i.domain
                        },
                        metaData: o,
                        reference: h
                    }),
                    cleanReference: function() {
                        var e, n;
                        e = $, "uid" === (n = h).type && delete ht(e)[n.uid]
                    }
                }
            }

            function mt(e) {
                var n, t, r = e.sender,
                    o = e.basic,
                    i = void 0 !== o && o,
                    a = function(e) {
                        return JSON.parse(function(e) {
                            if ("function" == typeof atob) return decodeURIComponent([].map.call(atob(e), (function(e) {
                                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                            })).join(""));
                            if (void 0 !== ue) return ue.from(e, "base64").toString("utf8");
                            throw new Error("Can not find window.atob or Buffer")
                        }(e))
                    }(e.data),
                    u = a.reference,
                    s = a.metaData;
                n = "function" == typeof r.win ? r.win({
                    metaData: s
                }) : r.win, t = "function" == typeof r.domain ? r.domain({
                    metaData: s
                }) : "string" == typeof r.domain ? r.domain : a.sender.domain;
                var c = function(e, n) {
                    if ("raw" === n.type) return n.val;
                    if ("uid" === n.type) return ht(e)[n.uid];
                    throw new Error("Unsupported ref type: " + n.type)
                }(n, u);
                return {
                    data: i ? JSON.parse(c) : function(e, n, t) {
                        return $n(e, n, t, {
                            on: ot,
                            send: at
                        })
                    }(n, t, c),
                    metaData: s,
                    sender: {
                        win: n,
                        domain: t
                    },
                    reference: u
                }
            }
            it = {
                setupBridge: Fn,
                openBridge: function(e, n) {
                    var t = sn("bridges"),
                        r = sn("bridgeFrames");
                    return n = n || Y(e), t.getOrSet(n, (function() {
                        return p.try((function() {
                            if (O() === n) throw new Error("Can not open bridge on the same domain as current domain: " + n);
                            var t = Dn(n);
                            if (z($, t)) throw new Error("Frame with name " + t + " already exists on page");
                            var o = function(e, n) {
                                var t = document.createElement("iframe");
                                return t.setAttribute("name", e), t.setAttribute("id", e), t.setAttribute("style", "display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;"), t.setAttribute("frameborder", "0"), t.setAttribute("border", "0"), t.setAttribute("scrolling", "no"), t.setAttribute("allowTransparency", "true"), t.setAttribute("tabindex", "-1"), t.setAttribute("hidden", "true"), t.setAttribute("title", ""), t.setAttribute("role", "presentation"), t.src = n, t
                            }(t, e);
                            return r.set(n, o), Nn.then((function(n) {
                                n.appendChild(o);
                                var t = o.contentWindow;
                                return new p((function(e, n) {
                                    o.addEventListener("load", e), o.addEventListener("error", n)
                                })).then((function() {
                                    return vn(t, 5e3, "Bridge " + e)
                                })).then((function() {
                                    return t
                                }))
                            }))
                        }))
                    }))
                },
                linkWindow: Mn,
                linkUrl: function(e, n) {
                    Mn({
                        win: e,
                        domain: Y(n)
                    })
                },
                isBridge: Wn,
                needsBridge: Rn,
                needsBridgeForBrowser: Sn,
                hasBridge: function(e, n) {
                    return sn("bridges").has(n || Y(e))
                },
                needsBridgeForWin: An,
                needsBridgeForDomain: Tn,
                destroyBridges: function() {
                    for (var e = sn("bridges"), n = sn("bridgeFrames"), t = 0, r = n.keys(); t < r.length; t++) {
                        var o = n.get(r[t]);
                        o && o.parentNode && o.parentNode.removeChild(o)
                    }
                    n.reset(), e.reset()
                }
            };
            var wt = {
                    STRING: "string",
                    OBJECT: "object",
                    FUNCTION: "function",
                    BOOLEAN: "boolean",
                    NUMBER: "number",
                    ARRAY: "array"
                },
                vt = {
                    JSON: "json",
                    DOTIFY: "dotify",
                    BASE64: "base64"
                },
                yt = w,
                gt = {
                    RENDER: "zoid-render",
                    RENDERED: "zoid-rendered",
                    DISPLAY: "zoid-display",
                    ERROR: "zoid-error",
                    CLOSE: "zoid-close",
                    DESTROY: "zoid-destroy",
                    PROPS: "zoid-props",
                    RESIZE: "zoid-resize",
                    FOCUS: "zoid-focus"
                };

            function bt(e) {
                return "__zoid__" + e.name + "__" + e.serializedPayload + "__"
            }

            function Et(e) {
                if (!e) throw new Error("No window name");
                var n = e.split("__"),
                    t = n[1],
                    r = n[2],
                    o = n[3];
                if ("zoid" !== t) throw new Error("Window not rendered by zoid - got " + t);
                if (!r) throw new Error("Expected component name");
                if (!o) throw new Error("Expected serialized payload ref");
                return {
                    name: r,
                    serializedInitialPayload: o
                }
            }
            var _t = he((function(e) {
                var n = mt({
                    data: Et(e).serializedInitialPayload,
                    sender: {
                        win: function(e) {
                            return function(e) {
                                if ("opener" === e.type) return Se("opener", _($));
                                if ("parent" === e.type && "number" == typeof e.distance) return Se("parent", (n = $, void 0 === (t = e.distance) && (t = 1), function(e, n) {
                                    void 0 === n && (n = 1);
                                    for (var t = e, r = 0; r < n; r++) {
                                        if (!t) return;
                                        t = E(t)
                                    }
                                    return t
                                }(n, L(n) - t)));
                                var n, t;
                                if ("global" === e.type && e.uid && "string" == typeof e.uid) {
                                    var r = function() {
                                        var n = e.uid,
                                            t = F($);
                                        if (!t) throw new Error("Can not find ancestor window");
                                        for (var r = 0, o = W(t); r < o.length; r++) {
                                            var i = o[r];
                                            if (C(i)) {
                                                var a = ft(i, (function(e) {
                                                    return e.windows && e.windows[n]
                                                }));
                                                if (a) return {
                                                    v: a
                                                }
                                            }
                                        }
                                    }();
                                    if ("object" == typeof r) return r.v
                                } else if ("name" === e.type) {
                                    var o = e.name;
                                    return Se("namedWindow", function(e, n) {
                                        return z(e, n) || function e(n, t) {
                                            var r = z(n, t);
                                            if (r) return r;
                                            for (var o = 0, i = T(n); o < i.length; o++) {
                                                var a = e(i[o], t);
                                                if (a) return a
                                            }
                                        }(D(e) || e, n)
                                    }(Se("ancestor", F($)), o))
                                }
                                throw new Error("Unable to find " + e.type + " parent component window")
                            }(e.metaData.windowRef)
                        }
                    }
                });
                return {
                    parent: n.sender,
                    payload: n.data,
                    reference: n.reference
                }
            }));

            function xt() {
                return _t($.name)
            }

            function Pt(e, n) {
                if (void 0 === n && (n = $), e === E(n)) return {
                    type: "parent",
                    distance: L(e)
                };
                if (e === _(n)) return {
                    type: "opener"
                };
                if (C(e) && (r = e) !== D(r)) {
                    var t = S(e).name;
                    if (t) return {
                        type: "name",
                        name: t
                    }
                }
                var r
            }

            function Ot(e, n, t, r, o) {
                if (!e.hasOwnProperty(t)) return r;
                var i = e[t];
                return "function" == typeof i.childDecorate ? i.childDecorate({
                    value: r,
                    uid: o.uid,
                    tag: o.tag,
                    close: o.close,
                    focus: o.focus,
                    onError: o.onError,
                    onProps: o.onProps,
                    resize: o.resize,
                    getParent: o.getParent,
                    getParentDomain: o.getParentDomain,
                    show: o.show,
                    hide: o.hide,
                    export: o.export,
                    getSiblings: o.getSiblings
                }) : r
            }

            function Ct() {
                return p.try((function() {
                    $.focus()
                }))
            }

            function St() {
                return p.try((function() {
                    $.close()
                }))
            }
            var At = function() {
                    return me
                },
                Tt = function(e) {
                    return we(e.value)
                };

            function Rt(e, n, t) {
                for (var r = 0, o = Object.keys(i({}, e, n)); r < o.length; r++) {
                    var a = o[r];
                    t(a, n[a], e[a])
                }
            }

            function Dt(e, n, t) {
                var r = {};
                return p.all(function(e, n, o) {
                    var i = [];
                    return Rt(e, n, (function(e, n, o) {
                        var a = function(e, n, o) {
                            return p.resolve().then((function() {
                                var i, a;
                                if (null != o && n) {
                                    var u = (i = {}, i.get = n.queryParam, i.post = n.bodyParam, i)[t],
                                        s = (a = {}, a.get = n.queryValue, a.post = n.bodyValue, a)[t];
                                    if (u) return p.hash({
                                        finalParam: p.try((function() {
                                            return "function" == typeof u ? u({
                                                value: o
                                            }) : "string" == typeof u ? u : e
                                        })),
                                        finalValue: p.try((function() {
                                            return "function" == typeof s && xe(o) ? s({
                                                value: o
                                            }) : o
                                        }))
                                    }).then((function(t) {
                                        var o, i = t.finalParam,
                                            a = t.finalValue;
                                        if ("boolean" == typeof a) o = a.toString();
                                        else if ("string" == typeof a) o = a.toString();
                                        else if ("object" == typeof a && null !== a) {
                                            if (n.serialization === vt.JSON) o = JSON.stringify(a);
                                            else if (n.serialization === vt.BASE64) o = ae(JSON.stringify(a));
                                            else if (n.serialization === vt.DOTIFY || !n.serialization) {
                                                o = function e(n, t, r) {
                                                    for (var o in void 0 === t && (t = ""), void 0 === r && (r = {}), t = t ? t + "." : t, n) n.hasOwnProperty(o) && null != n[o] && "function" != typeof n[o] && (n[o] && Array.isArray(n[o]) && n[o].length && n[o].every((function(e) {
                                                        return "object" != typeof e
                                                    })) ? r["" + t + o + "[]"] = n[o].join(",") : n[o] && "object" == typeof n[o] ? r = e(n[o], "" + t + o, r) : r["" + t + o] = n[o].toString());
                                                    return r
                                                }(a, e);
                                                for (var u = 0, s = Object.keys(o); u < s.length; u++) {
                                                    var c = s[u];
                                                    r[c] = o[c]
                                                }
                                                return
                                            }
                                        } else "number" == typeof a && (o = a.toString());
                                        r[i] = o
                                    }))
                                }
                            }))
                        }(e, n, o);
                        i.push(a)
                    })), i
                }(n, e)).then((function() {
                    return r
                }))
            }

            function Wt(e) {
                var n, t, r, o, a, u, s, c, f = e.uid,
                    d = e.options,
                    l = e.overrides,
                    h = void 0 === l ? {} : l,
                    m = e.parentWin,
                    w = void 0 === m ? $ : m,
                    v = d.propsDef,
                    y = d.containerTemplate,
                    g = d.prerenderTemplate,
                    b = d.tag,
                    E = d.name,
                    _ = d.attributes,
                    x = d.dimensions,
                    P = d.autoResize,
                    A = d.url,
                    T = d.domain,
                    R = d.exports,
                    D = new p,
                    W = [],
                    N = Ce(),
                    k = {},
                    I = {},
                    z = {
                        visible: !0
                    },
                    M = h.event ? h.event : (n = {}, t = {}, r = {
                        on: function(e, n) {
                            var r = t[e] = t[e] || [];
                            r.push(n);
                            var o = !1;
                            return {
                                cancel: function() {
                                    o || (o = !0, r.splice(r.indexOf(n), 1))
                                }
                            }
                        },
                        once: function(e, n) {
                            var t = r.on(e, (function() {
                                t.cancel(), n()
                            }));
                            return t
                        },
                        trigger: function(e) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            var i = t[e],
                                a = [];
                            if (i)
                                for (var u = function(e) {
                                        var n = i[e];
                                        a.push(p.try((function() {
                                            return n.apply(void 0, r)
                                        })))
                                    }, s = 0; s < i.length; s++) u(s);
                            return p.all(a).then(me)
                        },
                        triggerOnce: function(e) {
                            if (n[e]) return p.resolve();
                            n[e] = !0;
                            for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) o[i - 1] = arguments[i];
                            return r.trigger.apply(r, [e].concat(o))
                        },
                        reset: function() {
                            t = {}
                        }
                    }),
                    U = h.props ? h.props : {},
                    J = h.onError,
                    V = h.getProxyContainer,
                    X = h.show,
                    K = h.hide,
                    Q = h.close,
                    ee = h.renderContainer,
                    ne = h.getProxyWindow,
                    te = h.setProxyWin,
                    re = h.openFrame,
                    oe = h.openPrerenderFrame,
                    ie = h.prerender,
                    ae = h.open,
                    ue = h.openPrerender,
                    ce = h.watchForUnload,
                    fe = h.getInternalState,
                    de = h.setInternalState,
                    le = function() {
                        return "function" == typeof x ? x({
                            props: U
                        }) : x
                    },
                    pe = function() {
                        return p.try((function() {
                            return h.resolveInitPromise ? h.resolveInitPromise() : D.resolve()
                        }))
                    },
                    be = function(e) {
                        return p.try((function() {
                            return h.rejectInitPromise ? h.rejectInitPromise(e) : D.reject(e)
                        }))
                    },
                    Pe = function(e) {
                        for (var n = {}, t = 0, r = Object.keys(U); t < r.length; t++) {
                            var o = r[t],
                                i = v[o];
                            i && !1 === i.sendToChild || i && i.sameDomain && !q(e, O($)) || (n[o] = U[o])
                        }
                        return p.hash(n)
                    },
                    Oe = function() {
                        return p.try((function() {
                            return fe ? fe() : z
                        }))
                    },
                    Se = function(e) {
                        return p.try((function() {
                            return de ? de(e) : z = i({}, z, e)
                        }))
                    },
                    Ae = function() {
                        return ne ? ne() : p.try((function() {
                            var e = U.window;
                            if (e) {
                                var n = ut(e);
                                return N.register((function() {
                                    return e.close()
                                })), n
                            }
                            return new Bn({
                                send: at
                            })
                        }))
                    },
                    Te = function(e) {
                        return te ? te(e) : p.try((function() {
                            o = e
                        }))
                    },
                    Re = function() {
                        return X ? X() : p.hash({
                            setState: Se({
                                visible: !0
                            }),
                            showElement: a ? a.get().then(He) : null
                        }).then(me)
                    },
                    De = function() {
                        return K ? K() : p.hash({
                            setState: Se({
                                visible: !1
                            }),
                            showElement: a ? a.get().then(Je) : null
                        }).then(me)
                    },
                    We = function() {
                        return "function" == typeof A ? A({
                            props: U
                        }) : A
                    },
                    Ne = function() {
                        return "function" == typeof _ ? _({
                            props: U
                        }) : _
                    },
                    Ie = function() {
                        return Y(We())
                    },
                    Fe = function(e, n) {
                        var t = n.windowName;
                        return re ? re(e, {
                            windowName: t
                        }) : p.try((function() {
                            if (e === yt.IFRAME) return dt(qe({
                                attributes: i({
                                    name: t,
                                    title: E
                                }, Ne().iframe)
                            }))
                        }))
                    },
                    Le = function(e) {
                        return oe ? oe(e) : p.try((function() {
                            if (e === yt.IFRAME) return dt(qe({
                                attributes: i({
                                    name: "__zoid_prerender_frame__" + E + "_" + se() + "__",
                                    title: "prerender__" + E
                                }, Ne().iframe)
                            }))
                        }))
                    },
                    Xe = function(e, n, t) {
                        return ue ? ue(e, n, t) : p.try((function() {
                            if (e === yt.IFRAME) {
                                if (!t) throw new Error("Expected proxy frame to be passed");
                                return t.get().then((function(e) {
                                    return N.register((function() {
                                        return $e(e)
                                    })), Be(e).then((function(e) {
                                        return S(e)
                                    })).then((function(e) {
                                        return ut(e)
                                    }))
                                }))
                            }
                            if (e === yt.POPUP) return n;
                            throw new Error("No render context available for " + e)
                        }))
                    },
                    Ke = function() {
                        return p.try((function() {
                            if (o) return p.all([M.trigger(gt.FOCUS), o.focus()]).then(me)
                        }))
                    },
                    Qe = function() {
                        var e = ct($);
                        return e.windows = e.windows || {}, e.windows[f] = $, N.register((function() {
                            delete e.windows[f]
                        })), f
                    },
                    en = function(e, n, t, r) {
                        if (n === O($)) return {
                            type: "global",
                            uid: Qe()
                        };
                        if (e !== $) throw new Error("Can not construct cross-domain window reference for different target window");
                        if (U.window) {
                            var o = r.getWindow();
                            if (!o) throw new Error("Can not construct cross-domain window reference for lazy window prop");
                            if (F(o) !== $) throw new Error("Can not construct cross-domain window reference for window prop with different ancestor")
                        }
                        if (t === yt.POPUP) return {
                            type: "opener"
                        };
                        if (t === yt.IFRAME) return {
                            type: "parent",
                            distance: L($)
                        };
                        throw new Error("Can not construct window reference for child")
                    },
                    nn = function(e, n) {
                        return p.try((function() {
                            s = e, u = n, pe(), N.register((function() {
                                return n.close.fireAndForget().catch(me)
                            }))
                        }))
                    },
                    tn = function(e) {
                        var n = e.width,
                            t = e.height;
                        return p.try((function() {
                            M.trigger(gt.RESIZE, {
                                width: n,
                                height: t
                            })
                        }))
                    },
                    rn = function(e) {
                        return p.try((function() {
                            return M.trigger(gt.DESTROY)
                        })).catch(me).then((function() {
                            return N.all(e)
                        })).then((function() {
                            D.asyncReject(e || new Error("Component destroyed"))
                        }))
                    },
                    an = he((function(e) {
                        return p.try((function() {
                            if (Q) {
                                if (j(Q.__source__)) return;
                                return Q()
                            }
                            return p.try((function() {
                                return M.trigger(gt.CLOSE)
                            })).then((function() {
                                return rn(e || new Error("Component closed"))
                            }))
                        }))
                    })),
                    un = function(e, n) {
                        var t = n.proxyWin,
                            r = n.proxyFrame,
                            o = n.windowName;
                        return ae ? ae(e, {
                            proxyWin: t,
                            proxyFrame: r,
                            windowName: o
                        }) : p.try((function() {
                            if (e === yt.IFRAME) {
                                if (!r) throw new Error("Expected proxy frame to be passed");
                                return r.get().then((function(e) {
                                    return Be(e).then((function(n) {
                                        return N.register((function() {
                                            return $e(e)
                                        })), N.register((function() {
                                            return st(n)
                                        })), n
                                    }))
                                }))
                            }
                            if (e === yt.POPUP) {
                                var n = le(),
                                    t = n.width,
                                    a = void 0 === t ? "300px" : t,
                                    u = n.height,
                                    s = void 0 === u ? "150px" : u;
                                a = on(a, $.outerWidth), s = on(s, $.outerWidth);
                                var c = function(e, n) {
                                    var t = (n = n || {}).closeOnUnload,
                                        r = void 0 === t ? 1 : t,
                                        o = n.name,
                                        a = void 0 === o ? "" : o,
                                        u = n.width,
                                        s = n.height,
                                        c = 0,
                                        f = 0;
                                    u && ($.outerWidth ? f = Math.round(($.outerWidth - u) / 2) + $.screenX : $.screen.width && (f = Math.round(($.screen.width - u) / 2))), s && ($.outerHeight ? c = Math.round(($.outerHeight - s) / 2) + $.screenY : $.screen.height && (c = Math.round(($.screen.height - s) / 2))), delete n.closeOnUnload, delete n.name, u && s && (n = i({
                                        top: c,
                                        left: f,
                                        width: u,
                                        height: s,
                                        status: 1,
                                        toolbar: 0,
                                        menubar: 0,
                                        resizable: 1,
                                        scrollbars: 1
                                    }, n));
                                    var d, l = Object.keys(n).map((function(e) {
                                        if (null != n[e]) return e + "=" + ye(n[e])
                                    })).filter(Boolean).join(",");
                                    try {
                                        d = $.open("", a, l)
                                    } catch (e) {
                                        throw new Ue("Can not open popup window - " + (e.stack || e.message))
                                    }
                                    if (j(d)) throw new Ue("Can not open popup window - blocked");
                                    return r && $.addEventListener("unload", (function() {
                                        return d.close()
                                    })), d
                                }(0, i({
                                    name: o,
                                    width: a,
                                    height: s
                                }, Ne().popup));
                                return N.register((function() {
                                    return G(c)
                                })), N.register((function() {
                                    return st(c)
                                })), c
                            }
                            throw new Error("No render context available for " + e)
                        })).then((function(e) {
                            return t.setWindow(e, {
                                send: at
                            }), t.setName(o).then((function() {
                                return t
                            }))
                        }))
                    },
                    sn = function() {
                        return p.try((function() {
                            var e = Ye($, "unload", we((function() {
                                    rn(new Error("Window navigated away"))
                                }))),
                                n = H(w, rn, 3e3);
                            if (N.register(n.cancel), N.register(e.cancel), ce) return ce()
                        }))
                    },
                    cn = function(e) {
                        var n = !1;
                        return e.isClosed().then((function(t) {
                            return t ? (n = !0, an(new Error("Detected component window close"))) : p.delay(200).then((function() {
                                return e.isClosed()
                            })).then((function(e) {
                                if (e) return n = !0, an(new Error("Detected component window close"))
                            }))
                        })).then((function() {
                            return n
                        }))
                    },
                    fn = function(e) {
                        return J ? J(e) : p.try((function() {
                            if (-1 === W.indexOf(e)) return W.push(e), D.asyncReject(e), M.trigger(gt.ERROR, e)
                        }))
                    },
                    dn = new p,
                    ln = function(e) {
                        return p.try((function() {
                            dn.resolve(e)
                        }))
                    };
                nn.onError = fn;
                var hn = function(e, n) {
                        return e({
                            uid: f,
                            container: n.container,
                            context: n.context,
                            doc: n.doc,
                            frame: n.frame,
                            prerenderFrame: n.prerenderFrame,
                            focus: Ke,
                            close: an,
                            state: k,
                            props: U,
                            tag: b,
                            dimensions: le(),
                            event: M
                        })
                    },
                    pn = function(e, n) {
                        var t = n.context;
                        return ie ? ie(e, {
                            context: t
                        }) : p.try((function() {
                            if (g) {
                                var n = e.getWindow();
                                if (n && C(n) && function(e) {
                                        try {
                                            if (!e.location.href) return !0;
                                            if ("about:blank" === e.location.href) return !0
                                        } catch (e) {}
                                        return !1
                                    }(n)) {
                                    var r = (n = S(n)).document,
                                        o = hn(g, {
                                            context: t,
                                            doc: r
                                        });
                                    if (o) {
                                        if (o.ownerDocument !== r) throw new Error("Expected prerender template to have been created with document from child window");
                                        ! function(e, n) {
                                            var t = n.tagName.toLowerCase();
                                            if ("html" !== t) throw new Error("Expected element to be html, got " + t);
                                            for (var r = e.document.documentElement, o = 0, i = _e(r.children); o < i.length; o++) r.removeChild(i[o]);
                                            for (var a = 0, u = _e(n.children); a < u.length; a++) r.appendChild(u[a])
                                        }(n, o);
                                        var i = P.width,
                                            a = void 0 !== i && i,
                                            u = P.height,
                                            s = void 0 !== u && u,
                                            c = P.element,
                                            f = void 0 === c ? "body" : c;
                                        if ((f = ze(f, r)) && (a || s)) {
                                            var d = Ve(f, (function(e) {
                                                tn({
                                                    width: a ? e.width : void 0,
                                                    height: s ? e.height : void 0
                                                })
                                            }), {
                                                width: a,
                                                height: s,
                                                win: n
                                            });
                                            M.on(gt.RENDERED, d.cancel)
                                        }
                                    }
                                }
                            }
                        }))
                    },
                    mn = function(e, n) {
                        var t = n.proxyFrame,
                            r = n.proxyPrerenderFrame,
                            o = n.context,
                            i = n.rerender;
                        return ee ? ee(e, {
                            proxyFrame: t,
                            proxyPrerenderFrame: r,
                            context: o,
                            rerender: i
                        }) : p.hash({
                            container: e.get(),
                            frame: t ? t.get() : null,
                            prerenderFrame: r ? r.get() : null,
                            internalState: Oe()
                        }).then((function(e) {
                            var n = e.container,
                                t = e.internalState.visible,
                                r = hn(y, {
                                    context: o,
                                    container: n,
                                    frame: e.frame,
                                    prerenderFrame: e.prerenderFrame,
                                    doc: document
                                });
                            if (r) {
                                t || Je(r), je(n, r);
                                var u = function(e, n) {
                                    n = we(n);
                                    var t, r, o, i = !1,
                                        a = [],
                                        u = function() {
                                            i = !0;
                                            for (var e = 0; e < a.length; e++) a[e].disconnect();
                                            t && t.cancel(), o && o.removeEventListener("unload", s), r && $e(r)
                                        },
                                        s = function() {
                                            i || (n(), u())
                                        };
                                    if (Ze(e)) return s(), {
                                        cancel: u
                                    };
                                    if ($.MutationObserver)
                                        for (var c = e.parentElement; c;) {
                                            var f = new $.MutationObserver((function() {
                                                Ze(e) && s()
                                            }));
                                            f.observe(c, {
                                                childList: !0
                                            }), a.push(f), c = c.parentElement
                                        }
                                    return (r = document.createElement("iframe")).setAttribute("name", "__detect_close_" + se() + "__"), r.style.display = "none", Be(r).then((function(e) {
                                        (o = S(e)).addEventListener("unload", s)
                                    })), e.appendChild(r), t = Ee((function() {
                                        Ze(e) && s()
                                    }), 1e3), {
                                        cancel: u
                                    }
                                }(r, (function() {
                                    var e = new Error("Detected container element removed from DOM");
                                    return p.delay(1).then((function() {
                                        if (!Ze(r)) return N.all(e), i().then(pe, be);
                                        an(e)
                                    }))
                                }));
                                return N.register((function() {
                                    return u.cancel()
                                })), N.register((function() {
                                    return $e(r)
                                })), a = dt(r)
                            }
                        }))
                    },
                    wn = function() {
                        return {
                            state: k,
                            event: M,
                            close: an,
                            focus: Ke,
                            resize: tn,
                            onError: fn,
                            updateProps: yn,
                            show: Re,
                            hide: De
                        }
                    },
                    vn = function(e) {
                        void 0 === e && (e = {});
                        var n = c,
                            t = wn();
                        ge(I, e),
                            function(e, n, t, r, o) {
                                var i = r.state,
                                    a = r.close,
                                    u = r.focus,
                                    s = r.event,
                                    c = r.onError;
                                Rt(t, e, (function(e, r, f) {
                                    var d = !1,
                                        l = f;
                                    Object.defineProperty(n, e, {
                                        configurable: !0,
                                        enumerable: !0,
                                        get: function() {
                                            return d ? l : (d = !0, function() {
                                                if (!r) return l;
                                                var d = r.alias;
                                                if (d && !xe(f) && xe(t[d]) && (l = t[d]), r.value && (l = r.value({
                                                        props: n,
                                                        state: i,
                                                        close: a,
                                                        focus: u,
                                                        event: s,
                                                        onError: c,
                                                        container: o
                                                    })), !r.default || xe(l) || xe(t[e]) || (l = r.default({
                                                        props: n,
                                                        state: i,
                                                        close: a,
                                                        focus: u,
                                                        event: s,
                                                        onError: c,
                                                        container: o
                                                    })), xe(l)) {
                                                    if (r.type === wt.ARRAY ? !Array.isArray(l) : typeof l !== r.type) throw new TypeError("Prop is not of type " + r.type + ": " + e)
                                                } else if (!1 !== r.required && !xe(t[e])) throw new Error('Expected prop "' + e + '" to be defined');
                                                return xe(l) && r.decorate && (l = r.decorate({
                                                    value: l,
                                                    props: n,
                                                    state: i,
                                                    close: a,
                                                    focus: u,
                                                    event: s,
                                                    onError: c,
                                                    container: o
                                                })), l
                                            }())
                                        }
                                    })
                                })), Rt(n, e, me)
                            }(v, U, I, t, n)
                    },
                    yn = function(e) {
                        return vn(e), D.then((function() {
                            var e = u,
                                n = o;
                            if (e && n && s) return Pe(s).then((function(t) {
                                return e.updateProps(t).catch((function(e) {
                                    return cn(n).then((function(n) {
                                        if (!n) throw e
                                    }))
                                }))
                            }))
                        }))
                    },
                    gn = function(e) {
                        return V ? V(e) : p.try((function() {
                            return Me(e)
                        })).then((function(e) {
                            return Ge(e) && (e = function e(n) {
                                var t = function(e) {
                                    var n = function(e) {
                                        for (; e.parentNode;) e = e.parentNode;
                                        if (Ge(e)) return e
                                    }(e);
                                    if (n && n.host) return n.host
                                }(n);
                                if (!t) throw new Error("Element is not in shadow dom");
                                var r = "shadow-slot-" + se(),
                                    o = document.createElement("slot");
                                o.setAttribute("name", r), n.appendChild(o);
                                var i = document.createElement("div");
                                return i.setAttribute("slot", r), t.appendChild(i), Ge(t) ? e(i) : i
                            }(e)), c = e, dt(e)
                        }))
                    };
                return {
                    init: function() {
                        M.on(gt.RENDER, (function() {
                            return U.onRender()
                        })), M.on(gt.DISPLAY, (function() {
                            return U.onDisplay()
                        })), M.on(gt.RENDERED, (function() {
                            return U.onRendered()
                        })), M.on(gt.CLOSE, (function() {
                            return U.onClose()
                        })), M.on(gt.DESTROY, (function() {
                            return U.onDestroy()
                        })), M.on(gt.RESIZE, (function() {
                            return U.onResize()
                        })), M.on(gt.FOCUS, (function() {
                            return U.onFocus()
                        })), M.on(gt.PROPS, (function(e) {
                            return U.onProps(e)
                        })), M.on(gt.ERROR, (function(e) {
                            return U && U.onError ? U.onError(e) : be(e).then((function() {
                                setTimeout((function() {
                                    throw e
                                }), 1)
                            }))
                        })), N.register(M.reset)
                    },
                    render: function(e) {
                        var n = e.target,
                            t = e.container,
                            r = e.context,
                            i = e.rerender;
                        return p.try((function() {
                            var e = Ie(),
                                a = T || Ie();
                            ! function(e, n, t) {
                                if (e !== $) {
                                    if (!B($, e)) throw new Error("Can only renderTo an adjacent frame");
                                    var r = O();
                                    if (!q(n, r) && !C(e)) throw new Error("Can not render remotely to " + n.toString() + " - can only render to " + r);
                                    if (t && "string" != typeof t) throw new Error("Container passed to renderTo must be a string selector, got " + typeof t + " }")
                                }
                            }(n, a, t);
                            var u = p.try((function() {
                                    if (n !== $) return function(e, n) {
                                        for (var t = {}, r = 0, o = Object.keys(U); r < o.length; r++) {
                                            var i = o[r],
                                                a = v[i];
                                            a && a.allowDelegate && (t[i] = U[i])
                                        }
                                        var u = at(n, "zoid_delegate_" + E, {
                                            uid: f,
                                            overrides: {
                                                props: t,
                                                event: M,
                                                close: an,
                                                onError: fn,
                                                getInternalState: Oe,
                                                setInternalState: Se,
                                                resolveInitPromise: pe,
                                                rejectInitPromise: be
                                            }
                                        }).then((function(e) {
                                            var t = e.data.parent;
                                            return N.register((function(e) {
                                                if (!j(n)) return t.destroy(e)
                                            })), t.getDelegateOverrides()
                                        })).catch((function(e) {
                                            throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + ve(e))
                                        }));
                                        return V = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.getProxyContainer.apply(e, n)
                                            }))
                                        }, ee = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.renderContainer.apply(e, n)
                                            }))
                                        }, X = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.show.apply(e, n)
                                            }))
                                        }, K = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.hide.apply(e, n)
                                            }))
                                        }, ce = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.watchForUnload.apply(e, n)
                                            }))
                                        }, e === yt.IFRAME ? (ne = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.getProxyWindow.apply(e, n)
                                            }))
                                        }, re = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.openFrame.apply(e, n)
                                            }))
                                        }, oe = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.openPrerenderFrame.apply(e, n)
                                            }))
                                        }, ie = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.prerender.apply(e, n)
                                            }))
                                        }, ae = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.open.apply(e, n)
                                            }))
                                        }, ue = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.openPrerender.apply(e, n)
                                            }))
                                        }) : e === yt.POPUP && (te = function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return u.then((function(e) {
                                                return e.setProxyWin.apply(e, n)
                                            }))
                                        }), u
                                    }(r, n)
                                })),
                                s = U.window,
                                c = sn(),
                                l = Dt(v, U, "post"),
                                h = M.trigger(gt.RENDER),
                                m = gn(t),
                                w = Ae(),
                                y = m.then((function() {
                                    return vn()
                                })),
                                g = y.then((function() {
                                    return Dt(v, U, "get").then((function(e) {
                                        return function(e, n) {
                                            var t, r, o = n.query || {},
                                                i = n.hash || {},
                                                a = e.split("#");
                                            r = a[1];
                                            var u = (t = a[0]).split("?");
                                            t = u[0];
                                            var s = ke(u[1], o),
                                                c = ke(r, i);
                                            return s && (t = t + "?" + s), c && (t = t + "#" + c), t
                                        }(Z(We()), {
                                            query: e
                                        })
                                    }))
                                })),
                                _ = w.then((function(t) {
                                    return function(e) {
                                        var n = void 0 === e ? {} : e,
                                            t = n.proxyWin,
                                            r = n.initialChildDomain,
                                            o = n.childDomainMatch,
                                            i = n.target,
                                            a = void 0 === i ? $ : i,
                                            u = n.context;
                                        return function(e) {
                                            var n = void 0 === e ? {} : e,
                                                t = n.proxyWin,
                                                r = n.childDomainMatch,
                                                o = n.context;
                                            return Pe(n.initialChildDomain).then((function(e) {
                                                return {
                                                    uid: f,
                                                    context: o,
                                                    tag: b,
                                                    childDomainMatch: r,
                                                    version: "9_0_86",
                                                    props: e,
                                                    exports: (n = t, {
                                                        init: function(e) {
                                                            return nn(this.origin, e)
                                                        },
                                                        close: an,
                                                        checkClose: function() {
                                                            return cn(n)
                                                        },
                                                        resize: tn,
                                                        onError: fn,
                                                        show: Re,
                                                        hide: De,
                                                        export: ln
                                                    })
                                                };
                                                var n
                                            }))
                                        }({
                                            proxyWin: t,
                                            initialChildDomain: r,
                                            childDomainMatch: o,
                                            context: u
                                        }).then((function(e) {
                                            var n = pt({
                                                    data: e,
                                                    metaData: {
                                                        windowRef: en(a, r, u, t)
                                                    },
                                                    sender: {
                                                        domain: O($)
                                                    },
                                                    receiver: {
                                                        win: t,
                                                        domain: o
                                                    },
                                                    passByReference: r === O()
                                                }),
                                                i = n.serializedData;
                                            return N.register(n.cleanReference), i
                                        }))
                                    }({
                                        proxyWin: (o = {
                                            proxyWin: t,
                                            initialChildDomain: e,
                                            childDomainMatch: a,
                                            target: n,
                                            context: r
                                        }).proxyWin,
                                        initialChildDomain: o.initialChildDomain,
                                        childDomainMatch: o.childDomainMatch,
                                        target: o.target,
                                        context: o.context
                                    }).then((function(e) {
                                        return bt({
                                            name: E,
                                            serializedPayload: e
                                        })
                                    }));
                                    var o
                                })),
                                x = _.then((function(e) {
                                    return Fe(r, {
                                        windowName: e
                                    })
                                })),
                                P = Le(r),
                                S = p.hash({
                                    proxyContainer: m,
                                    proxyFrame: x,
                                    proxyPrerenderFrame: P
                                }).then((function(e) {
                                    return mn(e.proxyContainer, {
                                        context: r,
                                        proxyFrame: e.proxyFrame,
                                        proxyPrerenderFrame: e.proxyPrerenderFrame,
                                        rerender: i
                                    })
                                })).then((function(e) {
                                    return e
                                })),
                                A = p.hash({
                                    windowName: _,
                                    proxyFrame: x,
                                    proxyWin: w
                                }).then((function(e) {
                                    var n = e.proxyWin;
                                    return s ? n : un(r, {
                                        windowName: e.windowName,
                                        proxyWin: n,
                                        proxyFrame: e.proxyFrame
                                    })
                                })),
                                R = p.hash({
                                    proxyWin: A,
                                    proxyPrerenderFrame: P
                                }).then((function(e) {
                                    return Xe(r, e.proxyWin, e.proxyPrerenderFrame)
                                })),
                                W = A.then((function(e) {
                                    return o = e, Te(e)
                                })),
                                k = p.hash({
                                    proxyPrerenderWin: R,
                                    state: W
                                }).then((function(e) {
                                    return pn(e.proxyPrerenderWin, {
                                        context: r
                                    })
                                })),
                                I = p.hash({
                                    proxyWin: A,
                                    windowName: _
                                }).then((function(e) {
                                    if (s) return e.proxyWin.setName(e.windowName)
                                })),
                                z = p.hash({
                                    body: l
                                }).then((function(e) {
                                    return d.method ? d.method : Object.keys(e.body).length ? "post" : "get"
                                })),
                                F = p.hash({
                                    proxyWin: A,
                                    windowUrl: g,
                                    body: l,
                                    method: z,
                                    windowName: I,
                                    prerender: k
                                }).then((function(e) {
                                    return e.proxyWin.setLocation(e.windowUrl, {
                                        method: e.method,
                                        body: e.body
                                    })
                                })),
                                L = A.then((function(e) {
                                    ! function e(n, t) {
                                        var r = !1;
                                        return N.register((function() {
                                            r = !0
                                        })), p.delay(2e3).then((function() {
                                            return n.isClosed()
                                        })).then((function(o) {
                                            if (!r) return o ? an(new Error("Detected " + t + " close")) : e(n, t)
                                        }))
                                    }(e, r)
                                })),
                                H = p.hash({
                                    container: S,
                                    prerender: k
                                }).then((function() {
                                    return M.trigger(gt.DISPLAY)
                                })),
                                J = A.then((function(n) {
                                    return function(e, n, t) {
                                        return p.try((function() {
                                            return e.awaitWindow()
                                        })).then((function(e) {
                                            if (it && it.needsBridge({
                                                    win: e,
                                                    domain: n
                                                }) && !it.hasBridge(n, n)) {
                                                var r = "function" == typeof d.bridgeUrl ? d.bridgeUrl({
                                                    props: U
                                                }) : d.bridgeUrl;
                                                if (!r) throw new Error("Bridge needed to render " + t);
                                                var o = Y(r);
                                                return it.linkUrl(e, n), it.openBridge(Z(r), o)
                                            }
                                        }))
                                    }(n, e, r)
                                })),
                                G = F.then((function() {
                                    return p.try((function() {
                                        var e = U.timeout;
                                        if (e) return D.timeout(e, new Error("Loading component timed out after " + e + " milliseconds"))
                                    }))
                                })),
                                Q = D.then((function() {
                                    return M.trigger(gt.RENDERED)
                                }));
                            return p.hash({
                                initPromise: D,
                                buildUrlPromise: g,
                                onRenderPromise: h,
                                getProxyContainerPromise: m,
                                openFramePromise: x,
                                openPrerenderFramePromise: P,
                                renderContainerPromise: S,
                                openPromise: A,
                                openPrerenderPromise: R,
                                setStatePromise: W,
                                prerenderPromise: k,
                                loadUrlPromise: F,
                                buildWindowNamePromise: _,
                                setWindowNamePromise: I,
                                watchForClosePromise: L,
                                onDisplayPromise: H,
                                openBridgePromise: J,
                                runTimeoutPromise: G,
                                onRenderedPromise: Q,
                                delegatePromise: u,
                                watchForUnloadPromise: c,
                                finalSetPropsPromise: y
                            })
                        })).catch((function(e) {
                            return p.all([fn(e), rn(e)]).then((function() {
                                throw e
                            }), (function() {
                                throw e
                            }))
                        })).then(me)
                    },
                    destroy: rn,
                    getProps: function() {
                        return U
                    },
                    setProps: vn,
                    export: ln,
                    getHelpers: wn,
                    getDelegateOverrides: function() {
                        return p.try((function() {
                            return {
                                getProxyContainer: gn,
                                show: Re,
                                hide: De,
                                renderContainer: mn,
                                getProxyWindow: Ae,
                                watchForUnload: sn,
                                openFrame: Fe,
                                openPrerenderFrame: Le,
                                prerender: pn,
                                open: un,
                                openPrerender: Xe,
                                setProxyWin: Te
                            }
                        }))
                    },
                    getExports: function() {
                        return R({
                            getExports: function() {
                                return dn
                            }
                        })
                    }
                }
            }

            function Nt(e) {
                var n = e.uid,
                    t = e.frame,
                    r = e.prerenderFrame,
                    o = e.doc,
                    i = e.props,
                    a = e.event,
                    u = e.dimensions,
                    s = u.width,
                    c = u.height;
                if (t && r) {
                    var f = o.createElement("div");
                    f.setAttribute("id", n);
                    var d = o.createElement("style");
                    return i.cspNonce && d.setAttribute("nonce", i.cspNonce), d.appendChild(o.createTextNode("\n            #" + n + " {\n                display: inline-block;\n                position: relative;\n                width: " + s + ";\n                height: " + c + ";\n            }\n\n            #" + n + " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" + n + " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" + n + " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        ")), f.appendChild(t), f.appendChild(r), f.appendChild(d), r.classList.add("zoid-visible"), t.classList.add("zoid-invisible"), a.on(gt.RENDERED, (function() {
                        r.classList.remove("zoid-visible"), r.classList.add("zoid-invisible"), t.classList.remove("zoid-invisible"), t.classList.add("zoid-visible"), setTimeout((function() {
                            $e(r)
                        }), 1)
                    })), a.on(gt.RESIZE, (function(e) {
                        var n = e.width,
                            t = e.height;
                        "number" == typeof n && (f.style.width = rn(n)), "number" == typeof t && (f.style.height = rn(t))
                    })), f
                }
            }

            function kt(e) {
                var n = e.doc,
                    t = e.props,
                    r = n.createElement("html"),
                    o = n.createElement("body"),
                    i = n.createElement("style"),
                    a = n.createElement("div");
                return a.classList.add("spinner"), t.cspNonce && i.setAttribute("nonce", t.cspNonce), r.appendChild(o), o.appendChild(a), o.appendChild(i), i.appendChild(n.createTextNode("\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        ")), r
            }
            var jt = Ce(),
                It = Ce();

            function zt(e) {
                var n, t, r = function(e) {
                        var n = e.tag,
                            t = e.url,
                            r = e.domain,
                            o = e.bridgeUrl,
                            a = e.props,
                            u = void 0 === a ? {} : a,
                            s = e.dimensions,
                            c = void 0 === s ? {} : s,
                            f = e.autoResize,
                            d = void 0 === f ? {} : f,
                            l = e.allowedParentDomains,
                            h = void 0 === l ? "*" : l,
                            p = e.attributes,
                            m = void 0 === p ? {} : p,
                            w = e.defaultContext,
                            v = void 0 === w ? yt.IFRAME : w,
                            y = e.containerTemplate,
                            g = void 0 === y ? Nt : y,
                            b = e.prerenderTemplate,
                            E = void 0 === b ? kt : b,
                            _ = e.validate,
                            x = e.eligible,
                            P = void 0 === x ? function() {
                                return {
                                    eligible: !0
                                }
                            } : x,
                            O = e.logger,
                            S = void 0 === O ? {
                                info: me
                            } : O,
                            A = e.exports,
                            T = void 0 === A ? me : A,
                            R = e.method,
                            D = e.children,
                            W = void 0 === D ? function() {
                                return {}
                            } : D,
                            N = n.replace(/-/g, "_"),
                            k = i({}, {
                                window: {
                                    type: wt.OBJECT,
                                    sendToChild: !1,
                                    required: !1,
                                    allowDelegate: !0,
                                    validate: function(e) {
                                        var n = e.value;
                                        if (!J(n) && !Bn.isProxyWindow(n)) throw new Error("Expected Window or ProxyWindow");
                                        if (J(n)) {
                                            if (j(n)) throw new Error("Window is closed");
                                            if (!C(n)) throw new Error("Window is not same domain")
                                        }
                                    },
                                    decorate: function(e) {
                                        return ut(e.value)
                                    }
                                },
                                timeout: {
                                    type: wt.NUMBER,
                                    required: !1,
                                    sendToChild: !1
                                },
                                cspNonce: {
                                    type: wt.STRING,
                                    required: !1
                                },
                                onDisplay: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    allowDelegate: !0,
                                    default: At,
                                    decorate: Tt
                                },
                                onRendered: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    default: At,
                                    decorate: Tt
                                },
                                onRender: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    default: At,
                                    decorate: Tt
                                },
                                onClose: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    allowDelegate: !0,
                                    default: At,
                                    decorate: Tt
                                },
                                onDestroy: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    allowDelegate: !0,
                                    default: At,
                                    decorate: Tt
                                },
                                onResize: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    allowDelegate: !0,
                                    default: At
                                },
                                onFocus: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    allowDelegate: !0,
                                    default: At
                                },
                                close: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.close
                                    }
                                },
                                focus: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.focus
                                    }
                                },
                                resize: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.resize
                                    }
                                },
                                uid: {
                                    type: wt.STRING,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.uid
                                    }
                                },
                                tag: {
                                    type: wt.STRING,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.tag
                                    }
                                },
                                getParent: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.getParent
                                    }
                                },
                                getParentDomain: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.getParentDomain
                                    }
                                },
                                show: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.show
                                    }
                                },
                                hide: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.hide
                                    }
                                },
                                export: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.export
                                    }
                                },
                                onError: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.onError
                                    }
                                },
                                onProps: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.onProps
                                    }
                                },
                                getSiblings: {
                                    type: wt.FUNCTION,
                                    required: !1,
                                    sendToChild: !1,
                                    childDecorate: function(e) {
                                        return e.getSiblings
                                    }
                                }
                            }, u);
                        if (!g) throw new Error("Container template required");
                        return {
                            name: N,
                            tag: n,
                            url: t,
                            domain: r,
                            bridgeUrl: o,
                            method: R,
                            propsDef: k,
                            dimensions: c,
                            autoResize: d,
                            allowedParentDomains: h,
                            attributes: m,
                            defaultContext: v,
                            containerTemplate: g,
                            prerenderTemplate: E,
                            validate: _,
                            logger: S,
                            eligible: P,
                            children: W,
                            exports: "function" == typeof T ? T : function(e) {
                                for (var n = e.getExports, t = {}, r = function(e, r) {
                                        var o = r[e],
                                            i = T[o].type,
                                            a = n().then((function(e) {
                                                return e[o]
                                            }));
                                        t[o] = i === wt.FUNCTION ? function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            return a.then((function(e) {
                                                return e.apply(void 0, n)
                                            }))
                                        } : a
                                    }, o = 0, i = Object.keys(T); o < i.length; o++) r(o, i);
                                return t
                            }
                        }
                    }(e),
                    o = r.name,
                    a = r.tag,
                    u = r.defaultContext,
                    s = r.eligible,
                    c = r.children,
                    f = ct($),
                    d = [],
                    l = function() {
                        if (function(e) {
                                try {
                                    return Et($.name).name === e
                                } catch (e) {}
                                return !1
                            }(o)) {
                            var e = xt().payload;
                            if (e.tag === a && q(e.childDomainMatch, O())) return !0
                        }
                        return !1
                    },
                    h = he((function() {
                        if (l()) {
                            if ($.xprops) throw delete f.components[a], new Error("Can not register " + o + " as child - child already registered");
                            var e = function(e) {
                                var n, t = e.tag,
                                    r = e.propsDef,
                                    o = e.autoResize,
                                    i = e.allowedParentDomains,
                                    a = [],
                                    u = xt(),
                                    s = u.parent,
                                    c = u.payload,
                                    f = s.win,
                                    d = s.domain,
                                    l = new p,
                                    h = c.version,
                                    m = c.uid,
                                    w = c.exports,
                                    v = c.context,
                                    y = c.props;
                                if ("9_0_86" !== h) throw new Error("Parent window has zoid version " + h + ", child window has version 9_0_86");
                                var g = w.show,
                                    b = w.hide,
                                    E = w.close,
                                    _ = w.onError,
                                    x = w.checkClose,
                                    P = w.export,
                                    A = w.resize,
                                    T = w.init,
                                    R = function() {
                                        return f
                                    },
                                    D = function() {
                                        return d
                                    },
                                    N = function(e) {
                                        return a.push(e), {
                                            cancel: function() {
                                                a.splice(a.indexOf(e), 1)
                                            }
                                        }
                                    },
                                    k = function(e) {
                                        return A.fireAndForget({
                                            width: e.width,
                                            height: e.height
                                        })
                                    },
                                    j = function(e) {
                                        return l.resolve(e), P(e)
                                    },
                                    I = function(e) {
                                        var r = (void 0 === e ? {} : e).anyParent,
                                            o = [],
                                            i = n.parent;
                                        if (void 0 === r && (r = !i), !r && !i) throw new Error("No parent found for " + t + " child");
                                        for (var a = 0, u = W($); a < u.length; a++) {
                                            var s = u[a];
                                            if (C(s)) {
                                                var c = S(s).xprops;
                                                if (c && R() === c.getParent()) {
                                                    var f = c.parent;
                                                    if (r || !i || f && f.uid === i.uid) {
                                                        var d = ft(s, (function(e) {
                                                            return e.exports
                                                        }));
                                                        o.push({
                                                            props: c,
                                                            exports: d
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                        return o
                                    },
                                    z = function(e, o, i) {
                                        void 0 === i && (i = !1);
                                        var u = function(e, n, t, r, o, i) {
                                            void 0 === i && (i = !1);
                                            for (var a = {}, u = 0, s = Object.keys(t); u < s.length; u++) {
                                                var c = s[u],
                                                    f = n[c];
                                                if (!f || !f.sameDomain || r === O($) && C(e)) {
                                                    var d = Ot(n, 0, c, t[c], o);
                                                    a[c] = d, f && f.alias && !a[f.alias] && (a[f.alias] = d)
                                                }
                                            }
                                            if (!i)
                                                for (var l = 0, h = Object.keys(n); l < h.length; l++) {
                                                    var p = h[l];
                                                    t.hasOwnProperty(p) || (a[p] = Ot(n, 0, p, void 0, o))
                                                }
                                            return a
                                        }(f, r, e, o, {
                                            tag: t,
                                            show: g,
                                            hide: b,
                                            close: E,
                                            focus: Ct,
                                            onError: _,
                                            resize: k,
                                            getSiblings: I,
                                            onProps: N,
                                            getParent: R,
                                            getParentDomain: D,
                                            uid: m,
                                            export: j
                                        }, i);
                                        n ? ge(n, u) : n = u;
                                        for (var s = 0; s < a.length; s++)(0, a[s])(n)
                                    },
                                    M = function(e) {
                                        return p.try((function() {
                                            return z(e, d, !0)
                                        }))
                                    };
                                return {
                                    init: function() {
                                        return p.try((function() {
                                            return C(f) && function(e) {
                                                    var n = e.componentName,
                                                        t = e.parentComponentWindow,
                                                        r = mt({
                                                            data: Et($.name).serializedInitialPayload,
                                                            sender: {
                                                                win: t
                                                            },
                                                            basic: !0
                                                        }),
                                                        o = r.sender;
                                                    if ("uid" === r.reference.type || "global" === r.metaData.windowRef.type) {
                                                        var i = pt({
                                                            data: r.data,
                                                            metaData: {
                                                                windowRef: Pt(t)
                                                            },
                                                            sender: {
                                                                domain: o.domain
                                                            },
                                                            receiver: {
                                                                win: $,
                                                                domain: O()
                                                            },
                                                            basic: !0
                                                        });
                                                        $.name = bt({
                                                            name: n,
                                                            serializedPayload: i.serializedData
                                                        })
                                                    }
                                                }({
                                                    componentName: e.name,
                                                    parentComponentWindow: f
                                                }), ct($).exports = e.exports({
                                                    getExports: function() {
                                                        return l
                                                    }
                                                }),
                                                function(e, n) {
                                                    if (!q(e, n)) throw new Error("Can not be rendered by domain: " + n)
                                                }(i, d), yn(f), $.addEventListener("beforeunload", (function() {
                                                    x.fireAndForget()
                                                })), $.addEventListener("unload", (function() {
                                                    x.fireAndForget()
                                                })), H(f, (function() {
                                                    St()
                                                })), T({
                                                    updateProps: M,
                                                    close: St
                                                })
                                        })).then((function() {
                                            return (e = o.width, n = void 0 !== e && e, t = o.height, r = void 0 !== t && t, i = o.element, Me(void 0 === i ? "body" : i).catch(me).then((function(e) {
                                                return {
                                                    width: n,
                                                    height: r,
                                                    element: e
                                                }
                                            }))).then((function(e) {
                                                var n = e.width,
                                                    t = e.height,
                                                    r = e.element;
                                                r && (n || t) && v !== yt.POPUP && Ve(r, (function(e) {
                                                    k({
                                                        width: n ? e.width : void 0,
                                                        height: t ? e.height : void 0
                                                    })
                                                }), {
                                                    width: n,
                                                    height: t
                                                })
                                            }));
                                            var e, n, t, r, i
                                        })).catch((function(e) {
                                            _(e)
                                        }))
                                    },
                                    getProps: function() {
                                        return n || (z(y, d), n)
                                    }
                                }
                            }(r);
                            return e.init(), e
                        }
                    }));
                if (h(), n = ot("zoid_allow_delegate_" + o, (function() {
                        return !0
                    })), t = ot("zoid_delegate_" + o, (function(e) {
                        var n = e.data;
                        return {
                            parent: Wt({
                                uid: n.uid,
                                options: r,
                                overrides: n.overrides,
                                parentWin: e.source
                            })
                        }
                    })), It.register(n.cancel), It.register(t.cancel), f.components = f.components || {}, f.components[a]) throw new Error("Can not register multiple components with the same tag: " + a);
                return f.components[a] = !0, {
                    init: function e(n) {
                        var t, f = "zoid-" + a + "-" + se(),
                            l = n || {},
                            h = s({
                                props: l
                            }),
                            m = h.eligible,
                            w = h.reason,
                            v = l.onDestroy;
                        l.onDestroy = function() {
                            if (t && m && d.splice(d.indexOf(t), 1), v) return v.apply(void 0, arguments)
                        };
                        var y = Wt({
                            uid: f,
                            options: r
                        });
                        y.init(), m ? y.setProps(l) : l.onDestroy && l.onDestroy(), jt.register((function(e) {
                            return y.destroy(e || new Error("zoid destroyed all components"))
                        }));
                        var g = function(n) {
                                var t = (void 0 === n ? {} : n).decorate;
                                return e((void 0 === t ? be : t)(l))
                            },
                            b = function(e, n, r) {
                                return p.try((function() {
                                    if (!m) {
                                        var n = new Error(w || o + " component is not eligible");
                                        return y.destroy(n).then((function() {
                                            throw n
                                        }))
                                    }
                                    if (!J(e)) throw new Error("Must pass window to renderTo");
                                    return function(e, n) {
                                        return p.try((function() {
                                            if (e.window) return ut(e.window).getType();
                                            if (n) {
                                                if (n !== yt.IFRAME && n !== yt.POPUP) throw new Error("Unrecognized context: " + n);
                                                return n
                                            }
                                            return u
                                        }))
                                    }(l, r)
                                })).then((function(o) {
                                    if (n = function(e, n) {
                                            if (n) {
                                                if ("string" != typeof n && !Ie(n)) throw new TypeError("Expected string or element selector to be passed");
                                                return n
                                            }
                                            if (e === yt.POPUP) return "body";
                                            throw new Error("Expected element to be passed to render iframe")
                                        }(o, n), e !== $ && "string" != typeof n) throw new Error("Must pass string element when rendering to another window");
                                    return y.render({
                                        target: e,
                                        container: n,
                                        context: o,
                                        rerender: function() {
                                            var o = g();
                                            return ge(t, o), o.renderTo(e, n, r)
                                        }
                                    })
                                })).catch((function(e) {
                                    return y.destroy(e).then((function() {
                                        throw e
                                    }))
                                }))
                            };
                        return t = i({}, y.getExports(), y.getHelpers(), function() {
                            for (var e = c(), n = {}, t = function(t, r) {
                                    var o = r[t],
                                        a = e[o];
                                    n[o] = function(e) {
                                        var n = y.getProps(),
                                            t = i({}, e, {
                                                parent: {
                                                    uid: f,
                                                    props: n,
                                                    export: y.export
                                                }
                                            });
                                        return a(t)
                                    }
                                }, r = 0, o = Object.keys(e); r < o.length; r++) t(r, o);
                            return n
                        }(), {
                            isEligible: function() {
                                return m
                            },
                            clone: g,
                            render: function(e, n) {
                                return b($, e, n)
                            },
                            renderTo: function(e, n, t) {
                                return b(e, n, t)
                            }
                        }), m && d.push(t), t
                    },
                    instances: d,
                    driver: function(e, n) {
                        throw new Error("Driver support not enabled")
                    },
                    isChild: l,
                    canRenderTo: function(e) {
                        return at(e, "zoid_allow_delegate_" + o).then((function(e) {
                            return e.data
                        })).catch((function() {
                            return !1
                        }))
                    },
                    registerChild: h
                }
            }
            var Mt = function(e) {
                ! function() {
                    var e, n, t, r;
                    an().initialized || (an().initialized = !0, n = (e = {
                        on: ot,
                        send: at
                    }).on, t = e.send, (r = an()).receiveMessage = r.receiveMessage || function(e) {
                        return rt(e, {
                            on: n,
                            send: t
                        })
                    }, function(e) {
                        var n = e.on,
                            t = e.send;
                        sn().getOrSet("postMessageListener", (function() {
                            return Ye($, "message", (function(e) {
                                ! function(e, n) {
                                    var t = n.on,
                                        r = n.send;
                                    p.try((function() {
                                        var n = e.source || e.sourceElement,
                                            o = e.origin || e.originalEvent && e.originalEvent.origin,
                                            i = e.data;
                                        if ("null" === o && (o = "file://"), n) {
                                            if (!o) throw new Error("Post message did not have origin domain");
                                            rt({
                                                source: n,
                                                origin: o,
                                                data: i
                                            }, {
                                                on: t,
                                                send: r
                                            })
                                        }
                                    }))
                                }(e, {
                                    on: n,
                                    send: t
                                })
                            }))
                        }))
                    }({
                        on: ot,
                        send: at
                    }), Fn({
                        on: ot,
                        send: at,
                        receiveMessage: rt
                    }), function(e) {
                        var n = e.on,
                            t = e.send;
                        sn("builtinListeners").getOrSet("helloListener", (function() {
                            var e = n("postrobot_hello", {
                                    domain: "*"
                                }, (function(e) {
                                    return pn(e.source, {
                                        domain: e.origin
                                    }), {
                                        instanceID: hn()
                                    }
                                })),
                                r = F();
                            return r && mn(r, {
                                send: t
                            }).catch((function(e) {})), e
                        }))
                    }({
                        on: ot,
                        send: at
                    }))
                }();
                var n = zt(e),
                    t = function(e) {
                        return n.init(e)
                    };
                t.driver = function(e, t) {
                    return n.driver(e, t)
                }, t.isChild = function() {
                    return n.isChild()
                }, t.canRenderTo = function(e) {
                    return n.canRenderTo(e)
                }, t.instances = n.instances;
                var r = n.registerChild();
                return r && ($.xprops = t.xprops = r.getProps()), t
            };

            function Ft(e) {
                it && it.destroyBridges();
                var n = jt.all(e);
                return jt = Ce(), n
            }
            var Ut = Ft;

            function Lt(e) {
                var n;
                return Ut(), delete $.__zoid_9_0_86__,
                    function() {
                        for (var e = sn("responseListeners"), n = 0, t = e.keys(); n < t.length; n++) {
                            var r = t[n],
                                o = e.get(r);
                            o && (o.cancelled = !0), e.del(r)
                        }
                    }(), (n = sn().get("postMessageListener")) && n.cancel(), delete $.__post_robot_10_0_44__, It.all(e)
            }
        }])), Ge.exports
    }
    Ve = T, S && S.env && S.env.ZOID_FRAME_ONLY ? (Ve.exports = $e(), Ve.exports.default = Ve.exports) : (Ve.exports = Xe(), Ve.exports.default = Ve.exports);
    var Ke = A(T.exports);
    let Qe = () => ({
        emit(e, ...n) {
            let t = this.events[e] || [];
            for (let e = 0, r = t.length; e < r; e++) t[e](...n)
        },
        events: {},
        on(e, n) {
            return this.events[e] ? .push(n) || (this.events[e] = [n]), () => {
                this.events[e] = this.events[e] ? .filter((e => n !== e))
            }
        }
    });
    var en, nn;
    class tn {
        constructor() {
            this.clickOutsideHandler = null, this.escKeyHandler = null, en.set(this, (e => {
                this.clickOutsideHandler && (this.holder.contains(e.target) || this.clickOutsideHandler(e))
            })), nn.set(this, (e => {
                this.escKeyHandler && "Escape" === e.key && this.escKeyHandler(e)
            })), D(M()), this.body = document.body;
            const e = U("style");
            e.append(".tebex-js-lightbox{all:unset;zoom:1;forced-color-adjust:none;position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:var(--tebex-js-z-index,9999999);background:var(--tebex-js-lightbox-bg,rgba(0,0,0,.8));opacity:0;transition-property:opacity;transition-duration:var(--tebex-js-duration,.4s);transition-timing-function:var(--tebex-js-timing,ease);will-change:opacity;display:flex;justify-content:center;align-items:center;user-select:none;-webkit-user-select:none;-moz-user-select:none;}.tebex-js-lightbox--visible{opacity:1;}.tebex-js-lightbox__holder{display:block;border:0;overflow:hidden;border-radius:5px;}.tebex-js-lightbox__holder > div{display:block!important;}"), this.body.append(e), this.root = this.render(), this.holder = this.root.querySelector(".tebex-js-lightbox__holder")
        }
        render() {
            return Y("div", {
                class: "tebex-js-lightbox"
            }, Y("div", {
                class: "tebex-js-lightbox__holder",
                role: "dialog"
            }))
        }
        async show() {
            this.body.append(this.root), await H(), this.root.classList.add("tebex-js-lightbox--visible"), await J(this.root), this.body.addEventListener("click", n(this, en, "f")), this.body.addEventListener("keydown", n(this, nn, "f"))
        }
        async hide() {
            this.body.removeEventListener("click", n(this, en, "f")), this.body.removeEventListener("keydown", n(this, nn, "f")), this.root.classList.remove("tebex-js-lightbox--visible"), await H(), await J(this.root), this.body.removeChild(this.root)
        }
        destroy() {
            this.root.parentNode && (this.body.removeEventListener("click", n(this, en, "f")), this.body.removeEventListener("keydown", n(this, nn, "f")), this.root.classList.remove("tebex-js-lightbox--visible"), this.body.removeChild(this.root))
        }
    }
    en = new WeakMap, nn = new WeakMap;
    const rn = ({
        doc: e,
        props: n
    }) => {
        const t = Y("html", null, Y("body", null, Y("style", {
            nonce: n.cspNonce
        }, "html,body{width:100px;height:100px;overflow:hidden;}.tebex-js-spinner{position:fixed;max-height:60vmin;max-width:60vmin;height:40px;width:40px;top:50%;left:50%;box-sizing:border-box;border:3px solid rgba(0,0,0,.2);border-top-color:#FFF;border-radius:100%;animation:tebex-js-spinner-rotation .7s infinite linear;}@keyframes tebex-js-spinner-rotation{from{transform:translateX(-50%) translateY(-50%) rotate(0deg);}to{transform:translateX(-50%) translateY(-50%) rotate(359deg);}}"), Y("div", {
            class: "tebex-js-spinner"
        })));
        return e && e.adoptNode(t), t
    };
    var on, an, un, sn, cn, fn, dn, ln, hn, pn, mn, wn, vn, yn, gn;
    const bn = "800px",
        En = "760px",
        _n = ["auto", "default", "light", "dark"],
        xn = ["primary", "secondary"],
        Pn = ["open", "close", "payment:complete", "payment:error"];
    class On {
        constructor() {
            on.add(this), this.ident = null, this.locale = null, this.theme = "default", this.colors = [], this.closeOnClickOutside = !1, this.closeOnEsc = !1, this.defaultPaymentMethod = void 0, this.popupOnMobile = !1, this.endpoint = "https://pay.tebex.io", this.isOpen = !1, this.emitter = Qe(), this.lightbox = null, this.component = null, this.zoid = null, an.set(this, !1), un.set(this, void 0), wn.set(this, (async () => {
                this.isOpen && await this.close()
            }))
        }
        init(e) {
            D(e.ident && N(e.ident), "ident option is required, and must be a string"), this.ident = e.ident, this.locale = n(this, on, "m", sn).call(this, e) ? ? this.locale, this.theme = n(this, on, "m", cn).call(this, e) ? ? this.theme, this.colors = n(this, on, "m", fn).call(this, e) ? ? this.colors, this.popupOnMobile = n(this, on, "m", dn).call(this, e) ? ? this.popupOnMobile, this.endpoint = n(this, on, "m", ln).call(this, e) ? ? this.endpoint, this.closeOnClickOutside = n(this, on, "m", hn).call(this, e) ? ? this.closeOnClickOutside, this.closeOnEsc = n(this, on, "m", pn).call(this, e) ? ? this.closeOnEsc, this.defaultPaymentMethod = n(this, on, "m", mn).call(this, e) ? ? this.defaultPaymentMethod
        }
        on(e, n) {
            return "payment_complete" === e && (e = "payment:complete"), "payment_error" === e && (e = "payment:error"), Pn.includes(e) ? this.emitter.on(e, n) : (R(`invalid event name "${e}"`), () => {})
        }
        async launch() {
            if (!this.popupOnMobile && F(bn, En)) return await n(this, on, "m", gn).call(this, document.body, !0), this.isOpen = !0, void this.emitter.emit("open");
            await n(this, on, "m", vn).call(this)
        }
        async close() {
            this.lightbox && await this.lightbox.hide(), this.zoid && (await this.zoid.close(), this.isOpen = !1, this.emitter.emit("close"))
        }
        destroy() {
            this.lightbox && this.lightbox.destroy(), this.zoid && (this.zoid.close(), this.isOpen = !1, this.emitter.emit("close"))
        }
        async render(e, t, r, o = this.popupOnMobile) {
            D(q(e), "Target element must already be inserted into the page before it can be used"), t = N(t) ? t : `${t}px`, r = N(r) ? r : `${r}px`, n(this, on, "m", yn).call(this, t, r), await n(this, on, "m", gn).call(this, e, o && F(t, r)), this.isOpen = !0, this.emitter.emit("open")
        }
        async renderFinished() {
            return new Promise((e => {
                t(this, un, e, "f"), n(this, an, "f") && e()
            }))
        }
    }
    an = new WeakMap, un = new WeakMap, wn = new WeakMap, on = new WeakSet, sn = function(e) {
        return W(e.locale) ? null : k(e.locale) ? e.locale : (R(`invalid locale option "${e.locale}" - must be a non-empty string`), null)
    }, cn = function(e) {
        if (W(e.theme)) return null;
        if (!_n.includes(e.theme)) {
            const n = _n.map((e => `"${e}"`)).join(", ");
            return R(`invalid theme option "${e.theme}" - must be one of ${n}`), null
        }
        return e.theme
    }, fn = function(e) {
        if (W(e.colors)) return null;
        if (!I(e.colors)) return R(`invalid colors option "${e.colors}" - must be an array`), null;
        for (let n of e.colors) {
            if (!z(n)) return R(`invalid colors option item ${n} - must be an object`), null;
            if (!n.hasOwnProperty("name")) return R("invalid colors option item - missing 'name' field"), null;
            if (!n.hasOwnProperty("color")) return R("invalid colors option item - missing 'color' field"), null;
            if (!xn.includes(n.name)) {
                const e = xn.map((e => `"${e}"`)).join(", ");
                return R(`invalid color name "${n.name}" - must be one of ${e}`), null
            }
            if (!k(n.color)) return R(`invalid color value "${n.color}" - must be a non-empty string`), null;
            if (n.color.includes("var(")) return R(`invalid color value "${n.color}" - cannot include CSS variables`), null
        }
        return e.colors
    }, dn = function(e) {
        return W(e.popupOnMobile) ? null : j(e.popupOnMobile) ? e.popupOnMobile : (R(`invalid popupOnMobile option "${e.popupOnMobile}" - must be a boolean`), null)
    }, ln = function(e) {
        return W(e.endpoint) ? null : k(e.endpoint) ? e.endpoint : (R(`invalid endpoint option "${e.endpoint}" - must be a non-empty string`), null)
    }, hn = function(e) {
        return W(e.closeOnClickOutside) ? null : j(e.closeOnClickOutside) ? e.closeOnClickOutside : (R(`invalid closeOnClickOutside option "${e.closeOnClickOutside}" - must be a boolean`), null)
    }, pn = function(e) {
        return W(e.closeOnEsc) ? null : j(e.closeOnEsc) ? e.closeOnEsc : (R(`invalid closeOnEsc option "${e.closeOnEsc}" - must be a boolean`), null)
    }, mn = function(e) {
        return W(e.defaultPaymentMethod) ? null : k(e.defaultPaymentMethod) ? e.defaultPaymentMethod : (R(`invalid default payment method option "${e.defaultPaymentMethod}" - must be a non-empty string`), null)
    }, vn = async function() {
        this.lightbox || (this.lightbox = new tn), this.closeOnClickOutside && (this.lightbox.clickOutsideHandler = n(this, wn, "f")), this.closeOnEsc && (this.lightbox.escKeyHandler = n(this, wn, "f")), await this.lightbox.show(), await n(this, on, "m", gn).call(this, this.lightbox.holder, !1), this.isOpen = !0, this.emitter.emit("open")
    }, yn = function(e = bn, n = En) {
        this.component = Ke.create({
            tag: "tebex-js-checkout-component",
            url: () => this.endpoint + "/" + this.ident,
            autoResize: {
                width: !1,
                height: !1
            },
            dimensions: {
                width: e,
                height: n
            },
            prerenderTemplate: rn,
            attributes: {
                iframe: {
                    allow: "payment https://pay.tebex.io"
                }
            }
        })
    }, gn = async function(e, r) {
        const o = new URL(window.location.href);
        this.component || n(this, on, "m", yn).call(this), this.zoid = this.component({
            locale: this.locale,
            colors: this.colors,
            closeOnClickOutside: this.closeOnClickOutside,
            closeOnEsc: this.closeOnEsc,
            defaultPaymentMethod: this.defaultPaymentMethod,
            theme: this.theme,
            onOpenWindow: e => {
                window.open(e)
            },
            onClosePopup: async () => {
                await this.zoid.close(), this.lightbox && await this.lightbox.hide(), this.isOpen = !1, this.emitter.emit("close")
            },
            onPaymentComplete: e => {
                this.emitter.emit("payment:complete", e)
            },
            onPaymentError: e => {
                this.emitter.emit("payment:error", e)
            },
            isApplePayAvailable: M() && void 0 !== window.ApplePaySession && window.ApplePaySession.canMakePayments(),
            isEmbedded: !r,
            referrer: o.hostname,
            origin: o.origin,
            path: o.pathname,
            params: o.search,
            version: "1.7.0"
        }), await this.zoid.renderTo(window, e, r ? "popup" : "iframe"), t(this, an, !0, "f"), n(this, un, "f") && n(this, un, "f").call(this)
    };
    const Cn = {
        OPEN: "open",
        CLOSE: "close",
        PAYMENT_COMPLETE: "payment:complete",
        PAYMENT_ERROR: "payment:error"
    };
    var Sn = Object.freeze({
        __proto__: null,
        events: Cn
    });
    M() && (() => {
        var e, t, r, o, i;
        class a extends HTMLElement {
            get ident() {
                return this.checkout.ident
            }
            set ident(e) {
                B(this, "ident", e)
            }
            get open() {
                return this._open
            }
            set open(e) {
                B(this, "open", e)
            }
            get height() {
                return this._height
            }
            set height(e) {
                B(this, "height", e)
            }
            static get observedAttributes() {
                return ["ident", "open", "height"]
            }
            constructor() {
                super(), e.add(this), this.checkout = new On, this._root = null, this._slot = null, this._shadow = null, this._mode = "popover", this._height = 700, this._open = !1, this._didInit = !1, this._didConnect = !1, r.set(this, (() => {
                    if ("inline" === this._mode && this._slot.assignedElements().length > 0 && R("<tebex-checkout> does not support child elements in inline mode"), "inline" === this._mode) return;
                    let e = [];
                    const n = () => this.setAttribute("open", ""),
                        t = () => {
                            const t = this._slot.assignedElements();
                            for (let t of e) t.removeEventListener("click", n);
                            for (let e of t) e.addEventListener("click", n);
                            e = t
                        };
                    t(), this._slot.addEventListener("slotchange", t)
                })), this._shadow = this.attachShadow({
                    mode: "open"
                }), this._root = U("div"), this._slot = U("slot"), this._root.append(this._slot), this._shadow.append(this._root)
            }
            connectedCallback() {
                this._didConnect = !0;
                for (let e of Pn) this.checkout.on(e, (n => {
                    this.dispatchEvent(new CustomEvent(e, {
                        detail: n
                    }))
                }));
                L(this, "ident") && n(this, e, "m", t).call(this)
            }
            disconnectedCallback() {
                this.checkout.destroy(), this.checkout = new On, this._didConnect = !1, this._open = !1, this._didInit = !1, this._didConnect = !1
            }
            attributeChangedCallback(r, a, u) {
                if (a !== u) switch (r) {
                    case "ident":
                        D(!this._didInit, "This checkout element already has an ident - to use a new ident, create a new element"), n(this, e, "m", t).call(this);
                        break;
                    case "open":
                        this._open = !("false" !== a && a || "" !== u && !u), n(this, e, "m", o).call(this);
                        break;
                    case "height":
                        this._height = parseInt(u), n(this, e, "m", i).call(this)
                }
            }
            async renderFinished() {
                this.checkout && await this.checkout.renderFinished()
            }
        }
        r = new WeakMap, e = new WeakSet, t = async function() {
            if (this._didInit || !this._didConnect) return;
            this._didInit = !0;
            let t = [];
            this.hasAttribute("color-primary") && t.push({
                name: "primary",
                color: L(this, "color-primary")
            }), this.hasAttribute("color-secondary") && t.push({
                name: "secondary",
                color: L(this, "color-secondary")
            }), this.checkout.init({
                ident: L(this, "ident"),
                locale: L(this, "locale"),
                theme: L(this, "theme"),
                colors: t,
                closeOnClickOutside: null !== L(this, "close-on-click-outside"),
                closeOnEsc: null !== L(this, "close-on-esc"),
                defaultPaymentMethod: L(this, "default-payment-method"),
                popupOnMobile: null !== L(this, "popup-on-mobile"),
                endpoint: L(this, "endpoint")
            }), this._mode = this.hasAttribute("inline") ? "inline" : "popover", "inline" === this._mode ? await this.checkout.render(this._root, "100%", this._height, !1) : "popover" === this._mode && (this.checkout.on("close", (() => this.removeAttribute("open"))), n(this, e, "m", o).call(this)), this.checkout.on("payment:complete", (() => {
                if (this.hasAttribute("redirect-on-complete")) {
                    const e = this.getAttribute("redirect-on-complete");
                    location.href = e
                }
            })), n(this, r, "f").call(this)
        }, o = function() {
            "popover" === this._mode && this._didConnect && this._didInit && (this._open && !this.checkout.isOpen && this.checkout.launch(), !this._open && this.checkout.isOpen && this.checkout.close())
        }, i = function() {
            if ("inline" !== this._mode) return;
            const e = this.checkout.zoid;
            e && e.resize({
                height: this._height
            })
        }, customElements.define("tebex-checkout", a)
    })();
    const An = "1.7.0",
        Tn = new On;
    var Rn = {
        version: An,
        checkout: Tn,
        ...Sn
    };
    return e.checkout = Tn, e.default = Rn, e.events = Cn, e.version = An, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
}({});
//# sourceMappingURL=tebex.min.js.map