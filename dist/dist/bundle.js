"use strict";
!function (t) { var e = {}; function i(r) { if (e[r])
    return e[r].exports; var s = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports; } i.m = t, i.c = e, i.d = function (t, e, r) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }); }, i.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, i.t = function (t, e) { if (1 & e && (t = i(t)), 8 & e)
    return t; if (4 & e && "object" == typeof t && t && t.__esModule)
    return t; var r = Object.create(null); if (i.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
    for (var s in t)
        i.d(r, s, function (e) { return t[e]; }.bind(null, s)); return r; }, i.n = function (t) { var e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return i.d(e, "a", e), e; }, i.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, i.p = "", i(i.s = 3); }([function (t, e, i) {
        "use strict";
        (function (t, r) {
            i.d(e, "e", (function () { return s; })), i.d(e, "g", (function () { return a; })), i.d(e, "f", (function () { return n; })), i.d(e, "c", (function () { return l; })), i.d(e, "a", (function () { return h; })), i.d(e, "b", (function () { return u; })), i.d(e, "d", (function () { return _; }));
            /*!
             * VERSION: 2.1.2
             * DATE: 2019-03-01
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             */
            var s = "undefined" != typeof window ? window : t.exports && void 0 !== r ? r : {}, n = function (t) { var e = {}, i = t.document, r = t.GreenSockGlobals = t.GreenSockGlobals || t; if (r.TweenLite)
                return r.TweenLite; var s, n, a, o, l, h, u, _ = function (t) { var e, i = t.split("."), s = r; for (e = 0; e < i.length; e++)
                s[i[e]] = s = s[i[e]] || {}; return s; }, f = _("com.greensock"), c = function (t) { var e, i = [], r = t.length; for (e = 0; e !== r; i.push(t[e++]))
                ; return i; }, p = function () { }, d = (h = Object.prototype.toString, u = h.call([]), function (t) { return null != t && (t instanceof Array || "object" == typeof t && !!t.push && h.call(t) === u); }), m = {}, g = function (t, i, s, n) { this.sc = m[t] ? m[t].sc : [], m[t] = this, this.gsClass = null, this.func = s; var a = []; this.check = function (o) { for (var l, h, u, f, c = i.length, p = c; --c > -1;)
                (l = m[i[c]] || new g(i[c], [])).gsClass ? (a[c] = l.gsClass, p--) : o && l.sc.push(this); if (0 === p && s)
                for (u = (h = ("com.greensock." + t).split(".")).pop(), f = _(h.join("."))[u] = this.gsClass = s.apply(s, a), n && (r[u] = e[u] = f), c = 0; c < this.sc.length; c++)
                    this.sc[c].check(); }, this.check(!0); }, y = t._gsDefine = function (t, e, i, r) { return new g(t, e, i, r); }, v = f._class = function (t, e, i) { return e = e || function () { }, y(t, [], (function () { return e; }), i), e; }; y.globals = r; var T = [0, 0, 1, 1], x = v("easing.Ease", (function (t, e, i, r) { this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? T.concat(e) : T; }), !0), b = x.map = {}, w = x.register = function (t, e, i, r) { for (var s, n, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                for (n = l[h], s = r ? v("easing." + n, null, !0) : f.easing[n] || {}, a = u.length; --a > -1;)
                    o = u[a], b[n + "." + o] = b[o + n] = s[o] = t.getRatio ? t : t[o] || new t; }; for ((a = x.prototype)._calcEnd = !1, a.getRatio = function (t) { if (this._func)
                return this._params[0] = t, this._func.apply(null, this._params); var e = this._type, i = this._power, r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t); return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2; }, n = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --n > -1;)
                a = s[n] + ",Power" + n, w(new x(null, null, 1, n), a, "easeOut", !0), w(new x(null, null, 2, n), a, "easeIn" + (0 === n ? ",easeNone" : "")), w(new x(null, null, 3, n), a, "easeInOut"); b.linear = f.easing.Linear.easeIn, b.swing = f.easing.Quad.easeInOut; var P = v("events.EventDispatcher", (function (t) { this._listeners = {}, this._eventTarget = t || this; })); (a = P.prototype).addEventListener = function (t, e, i, r, s) { s = s || 0; var n, a, h = this._listeners[t], u = 0; for (this !== o || l || o.wake(), null == h && (this._listeners[t] = h = []), a = h.length; --a > -1;)
                (n = h[a]).c === e && n.s === i ? h.splice(a, 1) : 0 === u && n.pr < s && (u = a + 1); h.splice(u, 0, { c: e, s: i, up: r, pr: s }); }, a.removeEventListener = function (t, e) { var i, r = this._listeners[t]; if (r)
                for (i = r.length; --i > -1;)
                    if (r[i].c === e)
                        return void r.splice(i, 1); }, a.dispatchEvent = function (t) { var e, i, r, s = this._listeners[t]; if (s)
                for ((e = s.length) > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;)
                    (r = s[e]) && (r.up ? r.c.call(r.s || i, { type: t, target: i }) : r.c.call(r.s || i)); }; var O = t.requestAnimationFrame, S = t.cancelAnimationFrame, k = Date.now || function () { return (new Date).getTime(); }, R = k(); for (n = (s = ["ms", "moz", "webkit", "o"]).length; --n > -1 && !O;)
                O = t[s[n] + "RequestAnimationFrame"], S = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"]; v("Ticker", (function (t, e) { var r, s, n, a, h, u = this, _ = k(), f = !(!1 === e || !O) && "auto", c = 500, d = 33, m = function (t) { var e, i, o = k() - R; o > c && (_ += o - d), R += o, u.time = (R - _) / 1e3, e = u.time - h, (!r || e > 0 || !0 === t) && (u.frame++, h += e + (e >= a ? .004 : a - e), i = !0), !0 !== t && (n = s(m)), i && u.dispatchEvent("tick"); }; P.call(u), u.time = u.frame = 0, u.tick = function () { m(!0); }, u.lagSmoothing = function (t, e) { if (!arguments.length)
                return c < 1e8; c = t || 1e8, d = Math.min(e, c, 0); }, u.sleep = function () { null != n && (f && S ? S(n) : clearTimeout(n), s = p, n = null, u === o && (l = !1)); }, u.wake = function (t) { null !== n ? u.sleep() : t ? _ += -R + (R = k()) : u.frame > 10 && (R = k() - c + 5), s = 0 === r ? p : f && O ? O : function (t) { return setTimeout(t, 1e3 * (h - u.time) + 1 | 0); }, u === o && (l = !0), m(2); }, u.fps = function (t) { if (!arguments.length)
                return r; a = 1 / ((r = t) || 60), h = this.time + a, u.wake(); }, u.useRAF = function (t) { if (!arguments.length)
                return f; u.sleep(), f = t, u.fps(r); }, u.fps(t), setTimeout((function () { "auto" === f && u.frame < 5 && "hidden" !== (i || {}).visibilityState && u.useRAF(!1); }), 1500); })), (a = f.Ticker.prototype = new f.events.EventDispatcher).constructor = f.Ticker; var C = v("core.Animation", (function (t, e) { if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, H) {
                l || o.wake();
                var i = this.vars.useFrames ? Z : H;
                i.add(this, i._time), this.vars.paused && this.paused(!0);
            } })); o = C.ticker = new f.Ticker, (a = C.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1; var A = function () { l && k() - R > 2e3 && ("hidden" !== (i || {}).visibilityState || !o.lagSmoothing()) && o.wake(); var t = setTimeout(A, 2e3); t.unref && t.unref(); }; A(), a.play = function (t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1); }, a.pause = function (t, e) { return null != t && this.seek(t, e), this.paused(!0); }, a.resume = function (t, e) { return null != t && this.seek(t, e), this.paused(!1); }, a.seek = function (t, e) { return this.totalTime(Number(t), !1 !== e); }, a.restart = function (t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0); }, a.reverse = function (t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1); }, a.render = function (t, e, i) { }, a.invalidate = function () { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this; }, a.isActive = function () { var t, e = this._timeline, i = this._startTime; return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-8; }, a._enabled = function (t, e) { return l || o.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1; }, a._kill = function (t, e) { return this._enabled(!1, !1); }, a.kill = function (t, e) { return this._kill(t, e), this; }, a._uncache = function (t) { for (var e = t ? this : this.timeline; e;)
                e._dirty = !0, e = e.timeline; return this; }, a._swapSelfInParams = function (t) { for (var e = t.length, i = t.concat(); --e > -1;)
                "{self}" === t[e] && (i[e] = this); return i; }, a._callback = function (t) { var e = this.vars, i = e[t], r = e[t + "Params"], s = e[t + "Scope"] || e.callbackScope || this; switch (r ? r.length : 0) {
                case 0:
                    i.call(s);
                    break;
                case 1:
                    i.call(s, r[0]);
                    break;
                case 2:
                    i.call(s, r[0], r[1]);
                    break;
                default: i.apply(s, r);
            } }, a.eventCallback = function (t, e, i, r) { if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length)
                    return s[t];
                null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e);
            } return this; }, a.delay = function (t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay; }, a.duration = function (t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration); }, a.totalDuration = function (t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration; }, a.time = function (t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time; }, a.totalTime = function (t, e, i) { if (l || o.wake(), !arguments.length)
                return this._totalTime; if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var r = this._totalDuration, s = this._timeline;
                    if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? r - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                        for (; s._timeline;)
                            s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline;
                }
                this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (z.length && Q(), this.render(t, e, !1), z.length && Q());
            } return this; }, a.progress = a.totalProgress = function (t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio; }, a.startTime = function (t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime; }, a.endTime = function (t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale; }, a.timeScale = function (t) { if (!arguments.length)
                return this._timeScale; var e, i; for (t = t || 1e-8, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;)
                i._dirty = !0, i.totalDuration(), i = i.timeline; return this; }, a.reversed = function (t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed; }, a.paused = function (t) { if (!arguments.length)
                return this._paused; var e, i, r = this._timeline; return t != this._paused && r && (l || t || o.wake(), i = (e = r.rawTime()) - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this; }; var M = v("core.SimpleTimeline", (function (t) { C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0; })); (a = M.prototype = new C).constructor = M, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function (t, e, i, r) { var s, n; if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
                for (n = t._startTime; s && s._startTime > n;)
                    s = s._prev; return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this; }, a._remove = function (t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this; }, a.render = function (t, e, i) { var r, s = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; s;)
                r = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = r; }, a.rawTime = function () { return l || o.wake(), this._totalTime; }; var D = v("TweenLite", (function (e, i, r) { if (C.call(this, i, r), this.render = D.prototype.render, null == e)
                throw "Cannot tween a null target."; this.target = e = "string" != typeof e ? e : D.selector(e) || e; var s, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite; if (this._overwrite = l = null == l ? G[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : G[l], (o || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
                for (this._targets = a = c(e), this._propLookup = [], this._siblings = [], s = 0; s < a.length; s++)
                    (n = a[s]) ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(c(n))) : (this._siblings[s] = K(n, this, !1), 1 === l && this._siblings[s].length > 1 && tt(n, this, null, 1, this._siblings[s])) : "string" == typeof (n = a[s--] = D.selector(n)) && a.splice(s + 1, 1) : a.splice(s--, 1);
            else
                this._propLookup = {}, this._siblings = K(e, this, !1), 1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8, this.render(Math.min(0, -this._delay))); }), !0), F = function (e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType); }; (a = D.prototype = new C).constructor = D, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, D.version = "2.1.2", D.defaultEase = a._ease = new x(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = o, D.autoSleep = 120, D.lagSmoothing = function (t, e) { o.lagSmoothing(t, e); }, D.selector = t.$ || t.jQuery || function (e) { var r = t.$ || t.jQuery; return r ? (D.selector = r, r(e)) : (i || (i = t.document), i ? i.querySelectorAll ? i.querySelectorAll(e) : i.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e); }; var z = [], E = {}, X = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, I = /[\+-]=-?[\.\d]/, L = function (t) { for (var e, i = this._firstPT; i;)
                e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next; }, N = function (t) { return (1e3 * t | 0) / 1e3 + ""; }, B = function (t, e, i, r) { var s, n, a, o, l, h, u, _ = [], f = 0, c = "", p = 0; for (_.start = t, _.end = e, t = _[0] = t + "", e = _[1] = e + "", i && (i(_), t = _[0], e = _[1]), _.length = 0, s = t.match(X) || [], n = e.match(X) || [], r && (r._next = null, r.blob = 1, _._firstPT = _._applyPT = r), l = n.length, o = 0; o < l; o++)
                u = n[o], c += (h = e.substr(f, e.indexOf(u, f) - f)) || !o ? h : ",", f += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), u === s[o] || s.length <= o ? c += u : (c && (_.push(c), c = ""), a = parseFloat(s[o]), _.push(a), _._firstPT = { _next: _._firstPT, t: _, p: _.length - 1, s: a, c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0, f: 0, m: p && p < 4 ? Math.round : N }), f += u.length; return (c += e.substr(f)) && _.push(c), _.setRatio = L, I.test(e) && (_.end = null), _; }, Y = function (t, e, i, r, s, n, a, o, l) { "function" == typeof r && (r = r(l || 0, t)); var h = typeof t[e], u = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), _ = "get" !== i ? i : u ? a ? t[u](a) : t[u]() : t[e], f = "string" == typeof r && "=" === r.charAt(1), c = { t: t, p: e, s: _, f: "function" === h, pg: 0, n: s || e, m: n ? "function" == typeof n ? n : Math.round : 0, pr: 0, c: f ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - _ || 0 }; if (("number" != typeof _ || "number" != typeof r && !f) && (a || isNaN(_) || !f && isNaN(r) || "boolean" == typeof _ || "boolean" == typeof r ? (c.fp = a, c = { t: B(_, f ? parseFloat(c.s) + c.c + (c.s + "").replace(/[0-9\-\.]/g, "") : r, o || D.defaultStringFilter, c), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: s || e, pr: 0, m: 0 }) : (c.s = parseFloat(_), f || (c.c = parseFloat(r) - c.s || 0))), c.c)
                return (c._next = this._firstPT) && (c._next._prev = c), this._firstPT = c, c; }, j = D._internals = { isArray: d, isSelector: F, lazyTweens: z, blobDif: B }, U = D._plugins = {}, V = j.tweenLookup = {}, q = 0, W = j.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1, stagger: 1 }, G = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 }, Z = C._rootFramesTimeline = new M, H = C._rootTimeline = new M, $ = 30, Q = j.lazyRender = function () { var t, e, i = z.length; for (E = {}, t = 0; t < i; t++)
                (e = z[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1); z.length = 0; }; H._startTime = o.time, Z._startTime = o.frame, H._active = Z._active = !0, setTimeout(Q, 1), C._updateRoot = D.render = function () { var t, e, i; if (z.length && Q(), H.render((o.time - H._startTime) * H._timeScale, !1, !1), Z.render((o.frame - Z._startTime) * Z._timeScale, !1, !1), z.length && Q(), o.frame >= $) {
                for (i in $ = o.frame + (parseInt(D.autoSleep, 10) || 120), V) {
                    for (t = (e = V[i].tweens).length; --t > -1;)
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete V[i];
                }
                if ((!(i = H._first) || i._paused) && D.autoSleep && !Z._first && 1 === o._listeners.tick.length) {
                    for (; i && i._paused;)
                        i = i._next;
                    i || o.sleep();
                }
            } }, o.addEventListener("tick", C._updateRoot); var K = function (t, e, i) { var r, s, n = t._gsTweenID; if (V[n || (t._gsTweenID = n = "t" + q++)] || (V[n] = { target: t, tweens: [] }), e && ((r = V[n].tweens)[s = r.length] = e, i))
                for (; --s > -1;)
                    r[s] === e && r.splice(s, 1); return V[n].tweens; }, J = function (t, e, i, r) { var s, n, a = t.vars.onOverwrite; return a && (s = a(t, e, i, r)), (a = D.onOverwrite) && (n = a(t, e, i, r)), !1 !== s && !1 !== n; }, tt = function (t, e, i, r, s) { var n, a, o, l; if (1 === r || r >= 4) {
                for (l = s.length, n = 0; n < l; n++)
                    if ((o = s[n]) !== e)
                        o._gc || o._kill(null, t, e) && (a = !0);
                    else if (5 === r)
                        break;
                return a;
            } var h, u = e._startTime + 1e-8, _ = [], f = 0, c = 0 === e._duration; for (n = s.length; --n > -1;)
                (o = s[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || et(e, 0, c), 0 === et(o, h, c) && (_[f++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((c || !o._initted) && u - o._startTime <= 2e-8 || (_[f++] = o))); for (n = f; --n > -1;)
                if (l = (o = _[n])._firstPT, 2 === r && o._kill(i, t, e) && (a = !0), 2 !== r || !o._firstPT && o._initted && l) {
                    if (2 !== r && !J(o, e))
                        continue;
                    o._enabled(!1, !1) && (a = !0);
                } return a; }, et = function (t, e, i) { for (var r = t._timeline, s = r._timeScale, n = t._startTime; r._timeline;) {
                if (n += r._startTime, s *= r._timeScale, r._paused)
                    return -100;
                r = r._timeline;
            } return (n /= s) > e ? n - e : i && n === e || !t._initted && n - e < 2e-8 ? 1e-8 : (n += t.totalDuration() / t._timeScale / s) > e + 1e-8 ? 0 : n - e - 1e-8; }; a._init = function () { var t, e, i, r, s, n, a = this.vars, o = this._overwrittenProps, l = this._duration, h = !!a.immediateRender, u = a.ease, _ = this._startAt; if (a.startAt) {
                for (r in _ && (_.render(-1, !0), _.kill()), s = {}, a.startAt)
                    s[r] = a.startAt[r];
                if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = h && !1 !== a.lazy, s.startAt = s.delay = null, s.onUpdate = a.onUpdate, s.onUpdateParams = a.onUpdateParams, s.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = D.to(this.target || {}, 0, s), h)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== l)
                        return;
            }
            else if (a.runBackwards && 0 !== l)
                if (_)
                    _.render(-1, !0), _.kill(), this._startAt = null;
                else {
                    for (r in 0 !== this._time && (h = !1), i = {}, a)
                        W[r] && "autoCSS" !== r || (i[r] = a[r]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                        if (0 === this._time)
                            return;
                    }
                    else
                        this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                } if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u, a.easeParams) : b[u] || D.defaultEase : D.defaultEase, a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (n = this._targets.length, t = 0; t < n; t++)
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, o, 0); if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                for (i = this._firstPT; i;)
                    i.s += i.c, i.c = -i.c, i = i._next; this._onUpdate = a.onUpdate, this._initted = !0; }, a._initProps = function (e, i, r, s, n) { var a, o, l, h, u, _; if (null == e)
                return !1; for (a in E[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && U.css && !1 !== this.vars.autoCSS && function (t, e) { var i, r = {}; for (i in t)
                W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (r[i] = t[i], delete t[i]); t.css = r; }(this.vars, e), this.vars)
                if (_ = this.vars[a], W[a])
                    _ && (_ instanceof Array || _.push && d(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[a] = _ = this._swapSelfInParams(_, this));
                else if (U[a] && (h = new U[a])._onInitTween(e, this.vars[a], this, n)) {
                    for (this._firstPT = u = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: 1, n: a, pg: 1, pr: h._priority, m: 0 }, o = h._overwriteProps.length; --o > -1;)
                        i[h._overwriteProps[o]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u);
                }
                else
                    i[a] = Y.call(this, e, a, "get", _, a, 0, null, this.vars.stringFilter, n); return s && this._kill(s, e) ? this._initProps(e, i, r, s, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && tt(e, this, i, this._overwrite, r) ? (this._kill(i, e), this._initProps(e, i, r, s, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (E[e._gsTweenID] = !0), l); }, a.render = function (t, e, i) { var r, s, n, a, o = this._time, l = this._duration, h = this._rawPrevTime; if (t >= l - 1e-8 && t >= 0)
                this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-8 || 1e-8 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-8 && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8);
            else if (t < 1e-8)
                this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete", r = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-8 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l, _ = this._easeType, f = this._easePower;
                (1 === _ || 3 === _ && u >= .5) && (u = 1 - u), 3 === _ && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === _ ? 1 - u : 2 === _ ? u : t / l < .5 ? u / 2 : 1 - u / 2;
            }
            else
                this.ratio = this._ease.getRatio(t / l); if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = o, this._rawPrevTime = h, z.push(this), void (this._lazy = [t, e]);
                    this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), n = this._firstPT; n;)
                    n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || r || i) && this._callback("onUpdate")), s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)));
            } }, a._kill = function (t, e, i) { if ("all" === t && (t = null), null == t && (null == e || e === this.target))
                return this._lazy = !1, this._enabled(!1, !1); e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e; var r, s, n, a, o, l, h, u, _, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline, c = this._firstPT; if ((d(e) || F(e)) && "number" != typeof e[0])
                for (r = e.length; --r > -1;)
                    this._kill(t, e[r], i) && (l = !0);
            else {
                if (this._targets) {
                    for (r = this._targets.length; --r > -1;)
                        if (e === this._targets[r]) {
                            o = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                            break;
                        }
                }
                else {
                    if (e !== this.target)
                        return !1;
                    o = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all";
                }
                if (o) {
                    if (h = t || o, u = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                        for (n in h)
                            o[n] && (_ || (_ = []), _.push(n));
                        if ((_ || !t) && !J(this, i, e, _))
                            return !1;
                    }
                    for (n in h)
                        (a = o[n]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), u && (s[n] = 1);
                    !this._firstPT && this._initted && c && this._enabled(!1, !1);
                }
            } return l; }, a.invalidate = function () { this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this); var t = this._time; return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-8, this.render(t, !1, !1 !== this.vars.lazy)), this; }, a._enabled = function (t, e) { if (l || o.wake(), t && this._gc) {
                var i, r = this._targets;
                if (r)
                    for (i = r.length; --i > -1;)
                        this._siblings[i] = K(r[i], this, !0);
                else
                    this._siblings = K(this.target, this, !0);
            } return C.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this); }, D.to = function (t, e, i) { return new D(t, e, i); }, D.from = function (t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i); }, D.fromTo = function (t, e, i, r) { return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new D(t, e, r); }, D.delayedCall = function (t, e, i, r, s) { return new D(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: s, overwrite: 0 }); }, D.set = function (t, e) { return new D(t, 0, e); }, D.getTweensOf = function (t, e) { if (null == t)
                return []; var i, r, s, n; if (t = "string" != typeof t ? t : D.selector(t) || t, (d(t) || F(t)) && "number" != typeof t[0]) {
                for (i = t.length, r = []; --i > -1;)
                    r = r.concat(D.getTweensOf(t[i], e));
                for (i = r.length; --i > -1;)
                    for (n = r[i], s = i; --s > -1;)
                        n === r[s] && r.splice(i, 1);
            }
            else if (t._gsTweenID)
                for (i = (r = K(t).concat()).length; --i > -1;)
                    (r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1); return r || []; }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) { "object" == typeof e && (i = e, e = !1); for (var r = D.getTweensOf(t, e), s = r.length; --s > -1;)
                r[s]._kill(i, t); }; var it = v("plugins.TweenPlugin", (function (t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype; }), !0); if (a = it.prototype, it.version = "1.19.0", it.API = 2, a._firstPT = null, a._addTween = Y, a.setRatio = L, a._kill = function (t) { var e, i = this._overwriteProps, r = this._firstPT; if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; --e > -1;)
                    null != t[i[e]] && i.splice(e, 1); for (; r;)
                null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next; return !1; }, a._mod = a._roundProps = function (t) { for (var e, i = this._firstPT; i;)
                (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next; }, D._onPluginEvent = function (t, e) { var i, r, s, n, a, o = e._firstPT; if ("_onInitAllProps" === t) {
                for (; o;) {
                    for (a = o._next, r = s; r && r.pr > o.pr;)
                        r = r._next;
                    (o._prev = r ? r._prev : n) ? o._prev._next = o : s = o, (o._next = r) ? r._prev = o : n = o, o = a;
                }
                o = e._firstPT = s;
            } for (; o;)
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next; return i; }, it.activate = function (t) { for (var e = t.length; --e > -1;)
                t[e].API === it.API && (U[(new t[e])._propName] = t[e]); return !0; }, y.plugin = function (t) { if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition."; var e, i = t.propName, r = t.priority || 0, s = t.overwriteProps, n = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" }, a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", (function () { it.call(this, i, r), this._overwriteProps = s || []; }), !0 === t.global), o = a.prototype = new it(i); for (e in o.constructor = a, a.API = t.API, n)
                "function" == typeof t[e] && (o[n[e]] = t[e]); return a.version = t.version, it.activate([a]), a; }, s = t._gsQueue) {
                for (n = 0; n < s.length; n++)
                    s[n]();
                for (a in m)
                    m[a].func || t.console.log("GSAP encountered missing dependency: " + a);
            } return l = !1, D; }(s), a = s.GreenSockGlobals, o = a.com.greensock, l = o.core.SimpleTimeline, h = o.core.Animation, u = a.Ease, _ = (a.Linear, a.Power1, a.Power2, a.Power3, a.Power4, a.TweenPlugin);
            o.events.EventDispatcher;
        }).call(this, i(1)(t), i(2));
    }, function (t, e) { t.exports = function (t) { if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function () { return e.l; } }), Object.defineProperty(e, "id", { enumerable: !0, get: function () { return e.i; } }), Object.defineProperty(e, "exports", { enumerable: !0 }), e.webpackPolyfill = 1;
    } return e; }; }, function (t, e) { var i; i = function () { return this; }(); try {
        i = i || new Function("return this")();
    }
    catch (t) {
        "object" == typeof window && (i = window);
    } t.exports = i; }, function (t, e, i) {
        "use strict";
        i.r(e);
        var r = i(0);
        /*!
         * VERSION: 2.1.2
         * DATE: 2019-03-01
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         **/ r.e._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function () { var t = function (t) { var e, i = [], r = t.length; for (e = 0; e !== r; i.push(t[e++]))
            ; return i; }, e = function (t, e, i) { var r, s, n = t.cycle; for (r in n)
            s = n[r], t[r] = "function" == typeof s ? s(i, e[i], e) : s[i % s.length]; delete t.cycle; }, i = function (t) { if ("function" == typeof t)
            return t; var e = "object" == typeof t ? t : { each: t }, i = e.ease, r = e.from || 0, s = e.base || 0, n = {}, a = isNaN(r), o = e.axis, l = { center: .5, end: 1 }[r] || 0; return function (t, h, u) { var _, f, c, p, d, m, g, y, v, T = (u || e).length, x = n[T]; if (!x) {
            if (!(v = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                for (g = -1 / 0; g < (g = u[v++].getBoundingClientRect().left) && v < T;)
                    ;
                v--;
            }
            for (x = n[T] = [], _ = a ? Math.min(v, T) * l - .5 : r % v, f = a ? T * l / v - .5 : r / v | 0, g = 0, y = 1 / 0, m = 0; m < T; m++)
                c = m % v - _, p = f - (m / v | 0), x[m] = d = o ? Math.abs("y" === o ? p : c) : Math.sqrt(c * c + p * p), d > g && (g = d), d < y && (y = d);
            x.max = g - y, x.min = y, x.v = T = e.amount || e.each * (v > T ? T : o ? "y" === o ? T / v : v : Math.max(v, T / v)) || 0, x.b = T < 0 ? s - T : s;
        } return T = (x[t] - x.min) / x.max, x.b + (i ? i.getRatio(T) : T) * x.v; }; }, s = function (t, e, i) { r.f.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = s.prototype.render; }, n = r.f._internals, a = n.isSelector, o = n.isArray, l = s.prototype = r.f.to({}, .1, {}), h = []; s.version = "2.1.2", l.constructor = s, l.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = r.f.killTweensOf, s.getTweensOf = r.f.getTweensOf, s.lagSmoothing = r.f.lagSmoothing, s.ticker = r.f.ticker, s.render = r.f.render, s.distribute = i, l.invalidate = function () { return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), r.f.prototype.invalidate.call(this); }, l.updateTo = function (t, e) { var i, s = this.ratio, n = this.vars.immediateRender || t.immediateRender; for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t)
            this.vars[i] = t[i]; if (this._initted || n)
            if (e)
                this._initted = !1, n && this.render(0, !0, !0);
            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && r.f._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var a = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1);
            }
            else if (this._initted = !1, this._init(), this._time > 0 || n)
                for (var o, l = 1 / (1 - s), h = this._firstPT; h;)
                    o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next; return this; }, l.render = function (t, e, i) { this._initted || 0 === this._duration && this.vars.repeat && this.invalidate(); var s, a, o, l, h, u, _, f, c, p = this._dirty ? this.totalDuration() : this._totalDuration, d = this._time, m = this._totalTime, g = this._cycle, y = this._duration, v = this._rawPrevTime; if (t >= p - 1e-8 && t >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, a = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (v < 0 || t <= 0 && t >= -1e-8 || 1e-8 === v && "isPause" !== this.data) && v !== t && (i = !0, v > 1e-8 && (a = "onReverseComplete")), this._rawPrevTime = f = !e || t || v === t ? t : 1e-8)) : t < 1e-8 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === y && v > 0) && (a = "onReverseComplete", s = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = f = !e || t || v === t ? t : 1e-8)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (c = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== c || this._initted ? this._yoyoEase = c = !0 === c ? this._ease : c instanceof r.b ? c : r.b.map[c] : (c = this.vars.ease, this._yoyoEase = c = c ? c instanceof r.b ? c : "function" == typeof c ? new r.b(c, this.vars.easeParams) : r.b.map[c] || r.f.defaultEase : r.f.defaultEase)), this.ratio = c ? 1 - c.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !c ? (h = this._time / y, (1 === (u = this._easeType) || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === (_ = this._easePower) ? h *= h : 2 === _ ? h *= h * h : 3 === _ ? h *= h * h * h : 4 === _ && (h *= h * h * h * h), this.ratio = 1 === u ? 1 - h : 2 === u ? h : this._time / y < .5 ? h / 2 : 1 - h / 2) : c || (this.ratio = this._ease.getRatio(this._time / y))), d !== this._time || i || g !== this._cycle) {
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc)
                    return;
                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                    return this._time = d, this._totalTime = m, this._rawPrevTime = v, this._cycle = g, n.lazyTweens.push(this), void (this._lazy = [t, e]);
                !this._time || s || c ? s && this._ease._calcEnd && !c && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y);
            }
            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : a || (a = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), o = this._firstPT; o;)
                o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
            this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== m || a) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), a && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a), 0 === y && 1e-8 === this._rawPrevTime && 1e-8 !== f && (this._rawPrevTime = 0)));
        }
        else
            m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")); }, s.to = function (t, e, i) { return new s(t, e, i); }, s.from = function (t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i); }, s.fromTo = function (t, e, i, r) { return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new s(t, e, r); }, s.staggerTo = s.allTo = function (n, l, u, _, f, c, p) { var d, m, g, y, v = [], T = i(u.stagger || _), x = u.cycle, b = (u.startAt || h).cycle; for (o(n) || ("string" == typeof n && (n = r.f.selector(n) || n), a(n) && (n = t(n))), d = (n = n || []).length - 1, g = 0; g <= d; g++) {
            for (y in m = {}, u)
                m[y] = u[y];
            if (x && (e(m, n, g), null != m.duration && (l = m.duration, delete m.duration)), b) {
                for (y in b = m.startAt = {}, u.startAt)
                    b[y] = u.startAt[y];
                e(m.startAt, n, g);
            }
            m.delay = T(g, n[g], n) + (m.delay || 0), g === d && f && (m.onComplete = function () { u.onComplete && u.onComplete.apply(u.onCompleteScope || this, arguments), f.apply(p || u.callbackScope || this, c || h); }), v[g] = new s(n[g], l, m);
        } return v; }, s.staggerFrom = s.allFrom = function (t, e, i, r, n, a, o) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, r, n, a, o); }, s.staggerFromTo = s.allFromTo = function (t, e, i, r, n, a, o, l) { return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, r, n, a, o, l); }, s.delayedCall = function (t, e, i, r, n) { return new s(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: n, overwrite: 0 }); }, s.set = function (t, e) { return new s(t, 0, e); }, s.isTweening = function (t) { return r.f.getTweensOf(t, !0).length > 0; }; var u = function (t, e) { for (var i = [], s = 0, n = t._first; n;)
            n instanceof r.f ? i[s++] = n : (e && (i[s++] = n), s = (i = i.concat(u(n, e))).length), n = n._next; return i; }, _ = s.getAllTweens = function (t) { return u(r.a._rootTimeline, t).concat(u(r.a._rootFramesTimeline, t)); }; s.killAll = function (t, e, i, s) { null == e && (e = !0), null == i && (i = !0); var n, a, o, l = _(0 != s), h = l.length, u = e && i && s; for (o = 0; o < h; o++)
            a = l[o], (u || a instanceof r.c || (n = a.target === a.vars.onComplete) && i || e && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1)); }, s.killChildTweensOf = function (e, i) { if (null != e) {
            var l, h, u, _, f, c = n.tweenLookup;
            if ("string" == typeof e && (e = r.f.selector(e) || e), a(e) && (e = t(e)), o(e))
                for (_ = e.length; --_ > -1;)
                    s.killChildTweensOf(e[_], i);
            else {
                for (u in l = [], c)
                    for (h = c[u].target.parentNode; h;)
                        h === e && (l = l.concat(c[u].tweens)), h = h.parentNode;
                for (f = l.length, _ = 0; _ < f; _++)
                    i && l[_].totalTime(l[_].totalDuration()), l[_]._enabled(!1, !1);
            }
        } }; var f = function (t, e, i, s) { e = !1 !== e, i = !1 !== i; for (var n, a, o = _(s = !1 !== s), l = e && i && s, h = o.length; --h > -1;)
            a = o[h], (l || a instanceof r.c || (n = a.target === a.vars.onComplete) && i || e && !n) && a.paused(t); }; return s.pauseAll = function (t, e, i) { f(!0, t, e, i); }, s.resumeAll = function (t, e, i) { f(!1, t, e, i); }, s.globalTimeScale = function (t) { var e = r.a._rootTimeline, i = r.f.ticker.time; return arguments.length ? (t = t || 1e-8, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = r.a._rootFramesTimeline, i = r.f.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = r.a._rootTimeline._timeScale = t, t) : e._timeScale; }, l.progress = function (t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration(); }, l.totalProgress = function (t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration(); }, l.time = function (t, e) { if (!arguments.length)
            return this._time; this._dirty && this.totalDuration(); var i = this._duration, r = this._cycle, s = r * (i + this._repeatDelay); return t > i && (t = i), this.totalTime(this._yoyo && 1 & r ? i - t + s : this._repeat ? t + s : t, e); }, l.duration = function (t) { return arguments.length ? r.a.prototype.duration.call(this, t) : this._duration; }, l.totalDuration = function (t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration); }, l.repeat = function (t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat; }, l.repeatDelay = function (t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay; }, l.yoyo = function (t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo; }, s; }), !0);
        var s = r.g.TweenMax;
        /*!
         * VERSION: 2.1.0
         * DATE: 2019-02-15
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */
        r.e._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], (function () { var t, e, i, s, n = function () { r.d.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = n.prototype.setRatio; }, a = r.e._gsDefine.globals, o = {}, l = n.prototype = new r.d("css"); l.constructor = n, n.version = "2.1.0", n.API = 2, n.defaultTransformPerspective = 0, n.defaultSkewType = "compensated", n.defaultSmoothOrigin = !0, l = "px", n.suffixMap = { top: l, right: l, bottom: l, left: l, width: l, height: l, fontSize: l, padding: l, margin: l, perspective: l, lineHeight: "" }; var h, u, _, f, c, p, d, m, g = /(?:\-|\.|\b)(\d|\.|e\-)+/g, y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, x = /(?:\d|\-|\+|=|#|\.)*/g, b = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, P = /alpha\(opacity *=.+?\)/i, O = /^(rgb|hsl)/, S = /([A-Z])/g, k = /-([a-z])/gi, R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, C = function (t, e) { return e.toUpperCase(); }, A = /(?:Left|Right|Width)/i, M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, F = /,(?=[^\)]*(?:\(|$))/gi, z = /[\s,\(]/i, E = Math.PI / 180, X = 180 / Math.PI, I = {}, L = { style: {} }, N = r.e.document || { createElement: function () { return L; } }, B = function (t, e) { return e && N.createElementNS ? N.createElementNS(e, t) : N.createElement(t); }, Y = B("div"), j = B("img"), U = n._internals = { _specialProps: o }, V = (r.e.navigator || {}).userAgent || "", q = function () { var t = V.indexOf("Android"), e = B("a"); return _ = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || parseFloat(V.substr(t + 8, 2)) > 3), c = _ && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, f = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (p = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)); }(), W = function (t) { return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1; }, G = function (t) { r.e.console && console.log(t); }, Z = "", H = "", $ = function (t, e) { var i, r, s = (e = e || Y).style; if (void 0 !== s[t])
            return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];)
            ; return r >= 0 ? (Z = "-" + (H = 3 === r ? "ms" : i[r]).toLowerCase() + "-", H + t) : null; }, Q = "undefined" != typeof window ? window : N.defaultView || { getComputedStyle: function () { } }, K = function (t) { return Q.getComputedStyle(t); }, J = n.getStyle = function (t, e, i, r, s) { var n; return q || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || K(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : W(t); }, tt = U.convertToPixels = function (t, e, i, s, a) { if ("px" === s || !s && "lineHeight" !== e)
            return i; if ("auto" === s || !i)
            return 0; var o, l, h, u = A.test(e), _ = t, f = Y.style, c = i < 0, p = 1 === i; if (c && (i = -i), p && (i *= 100), "lineHeight" !== e || s)
            if ("%" === s && -1 !== e.indexOf("border"))
                o = i / 100 * (u ? t.clientWidth : t.clientHeight);
            else {
                if (f.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== s && _.appendChild && "v" !== s.charAt(0) && "rem" !== s)
                    f[u ? "borderLeftWidth" : "borderTopWidth"] = i + s;
                else {
                    if (_ = t.parentNode || N.body, -1 !== J(_, "display").indexOf("flex") && (f.position = "absolute"), l = _._gsCache, h = r.f.ticker.frame, l && u && l.time === h)
                        return l.width * i / 100;
                    f[u ? "width" : "height"] = i + s;
                }
                _.appendChild(Y), o = parseFloat(Y[u ? "offsetWidth" : "offsetHeight"]), _.removeChild(Y), u && "%" === s && !1 !== n.cacheWidths && ((l = _._gsCache = _._gsCache || {}).time = h, l.width = o / i * 100), 0 !== o || a || (o = tt(t, e, i, s, !0));
            }
        else
            l = K(t).lineHeight, t.style.lineHeight = i, o = parseFloat(K(t).lineHeight), t.style.lineHeight = l; return p && (o /= 100), c ? -o : o; }, et = U.calculateOffset = function (t, e, i) { if ("absolute" !== J(t, "position", i))
            return 0; var r = "left" === e ? "Left" : "Top", s = J(t, "margin" + r, i); return t["offset" + r] - (tt(t, e, parseFloat(s), s.replace(x, "")) || 0); }, it = function (t, e) { var i, r, s, n = {}; if (e = e || K(t))
            if (i = e.length)
                for (; --i > -1;)
                    -1 !== (s = e[i]).indexOf("-transform") && Ft !== s || (n[s.replace(k, C)] = e.getPropertyValue(s));
            else
                for (i in e)
                    -1 !== i.indexOf("Transform") && Dt !== i || (n[i] = e[i]);
        else if (e = t.currentStyle || t.style)
            for (i in e)
                "string" == typeof i && void 0 === n[i] && (n[i.replace(k, C)] = e[i]); return q || (n.opacity = W(t)), r = Wt(t, e, !1), n.rotation = r.rotation, n.skewX = r.skewX, n.scaleX = r.scaleX, n.scaleY = r.scaleY, n.x = r.x, n.y = r.y, Et && (n.z = r.z, n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ), n.filters && delete n.filters, n; }, rt = function (t, e, i, r, s) { var n, a, o, l = {}, h = t.style; for (a in i)
            "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" != typeof n && "string" != typeof n || (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(T, "") ? n : 0 : et(t, a), void 0 !== h[a] && (o = new yt(h, a, h[a], o)))); if (r)
            for (a in r)
                "className" !== a && (l[a] = r[a]); return { difs: l, firstMPT: o }; }, st = { width: ["Left", "Right"], height: ["Top", "Bottom"] }, nt = ["marginLeft", "marginRight", "marginTop", "marginBottom"], at = function (t, e, i) { if ("svg" === (t.nodeName + "").toLowerCase())
            return (i || K(t))[e] || 0; if (t.getCTM && Ut(t))
            return t.getBBox()[e] || 0; var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), s = st[e], n = s.length; for (i = i || K(t); --n > -1;)
            r -= parseFloat(J(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(J(t, "border" + s[n] + "Width", i, !0)) || 0; return r; }, ot = function (t, e) { if ("contain" === t || "auto" === t || "auto auto" === t)
            return t + " "; null != t && "" !== t || (t = "0 0"); var i, r = t.split(" "), s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0], n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1]; if (r.length > 3 && !e) {
            for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++)
                t.push(ot(r[i]));
            return t.join(",");
        } return null == n ? n = "center" === s ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + n + (r.length > 2 ? " " + r[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(s.replace(T, "")), e.oy = parseFloat(n.replace(T, "")), e.v = t), e || t; }, lt = function (t, e) { return "function" == typeof t && (t = t(m, d)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0; }, ht = function (t, e) { "function" == typeof t && (t = t(m, d)); var i = "string" == typeof t && "=" === t.charAt(1); return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0; }, ut = function (t, e, i, r) { var s, n, a, o; return "function" == typeof t && (t = t(m, d)), null == t ? a = e : "number" == typeof t ? a = t : (360, s = t.split("_"), n = ((o = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : X) - (o ? 0 : e), s.length && (r && (r[i] = e + n), -1 !== t.indexOf("short") && (n %= 360) !== n % 180 && (n = n < 0 ? n + 360 : n - 360), -1 !== t.indexOf("_cw") && n < 0 ? n = (n + 3599999999640) % 360 - 360 * (n / 360 | 0) : -1 !== t.indexOf("ccw") && n > 0 && (n = (n - 3599999999640) % 360 - 360 * (n / 360 | 0))), a = e + n), a < 1e-6 && a > -1e-6 && (a = 0), a; }, _t = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] }, ft = function (t, e, i) { return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0; }, ct = n.parseColor = function (t, e) { var i, r, s, n, a, o, l, h, u, _, f; if (t)
            if ("number" == typeof t)
                i = [t >> 16, t >> 8 & 255, 255 & t];
            else {
                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), _t[t])
                    i = _t[t];
                else if ("#" === t.charAt(0))
                    4 === t.length && (r = t.charAt(1), s = t.charAt(2), n = t.charAt(3), t = "#" + r + r + s + s + n + n), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                else if ("hsl" === t.substr(0, 3))
                    if (i = f = t.match(g), e) {
                        if (-1 !== t.indexOf("="))
                            return t.match(y);
                    }
                    else
                        a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, r = 2 * (l = Number(i[2]) / 100) - (s = l <= .5 ? l * (o + 1) : l + o - l * o), i.length > 3 && (i[3] = Number(i[3])), i[0] = ft(a + 1 / 3, r, s), i[1] = ft(a, r, s), i[2] = ft(a - 1 / 3, r, s);
                else
                    i = t.match(g) || _t.transparent;
                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]));
            }
        else
            i = _t.black; return e && !f && (r = i[0] / 255, s = i[1] / 255, n = i[2] / 255, l = ((h = Math.max(r, s, n)) + (u = Math.min(r, s, n))) / 2, h === u ? a = o = 0 : (_ = h - u, o = l > .5 ? _ / (2 - h - u) : _ / (h + u), a = h === r ? (s - n) / _ + (s < n ? 6 : 0) : h === s ? (n - r) / _ + 2 : (r - s) / _ + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i; }, pt = function (t, e) { var i, r, s, n = t.match(dt) || [], a = 0, o = ""; if (!n.length)
            return t; for (i = 0; i < n.length; i++)
            r = n[i], a += (s = t.substr(a, t.indexOf(r, a) - a)).length + r.length, 3 === (r = ct(r, e)).length && r.push(1), o += s + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")"; return o + t.substr(a); }, dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; for (l in _t)
            dt += "|" + l + "\\b"; dt = new RegExp(dt + ")", "gi"), n.colorStringFilter = function (t) { var e, i = t[0] + " " + t[1]; dt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = pt(t[0], e), t[1] = pt(t[1], e)), dt.lastIndex = 0; }, r.f.defaultStringFilter || (r.f.defaultStringFilter = n.colorStringFilter); var mt = function (t, e, i, r) { if (null == t)
            return function (t) { return t; }; var s, n = e ? (t.match(dt) || [""])[0] : "", a = t.split(n).join("").match(v) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", h = -1 !== t.indexOf(" ") ? " " : ",", u = a.length, _ = u > 0 ? a[0].replace(g, "") : ""; return u ? s = e ? function (t) { var e, f, c, p; if ("number" == typeof t)
            t += _;
        else if (r && F.test(t)) {
            for (p = t.replace(F, "|").split("|"), c = 0; c < p.length; c++)
                p[c] = s(p[c]);
            return p.join(",");
        } if (e = (t.match(dt) || [n])[0], c = (f = t.split(e).join("").match(v) || []).length, u > c--)
            for (; ++c < u;)
                f[c] = i ? f[(c - 1) / 2 | 0] : a[c]; return o + f.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : ""); } : function (t) { var e, n, f; if ("number" == typeof t)
            t += _;
        else if (r && F.test(t)) {
            for (n = t.replace(F, "|").split("|"), f = 0; f < n.length; f++)
                n[f] = s(n[f]);
            return n.join(",");
        } if (f = (e = t.match(v) || []).length, u > f--)
            for (; ++f < u;)
                e[f] = i ? e[(f - 1) / 2 | 0] : a[f]; return o + e.join(h) + l; } : function (t) { return t; }; }, gt = function (t) { return t = t.split(","), function (e, i, r, s, n, a, o) { var l, h = (i + "").split(" "); for (o = {}, l = 0; l < 4; l++)
            o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0]; return s.parse(e, o, n, a); }; }, yt = (U._setPluginRatio = function (t) { this.plugin.setRatio(t); for (var e, i, r, s, n, a = this.data, o = a.proxy, l = a.firstMPT; l;)
            e = o[l.v], l.r ? e = l.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next; if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === t || 0 === t)
            for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l;) {
                if ((i = l.t).type) {
                    if (1 === i.type) {
                        for (s = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++)
                            s += i["xn" + r] + i["xs" + (r + 1)];
                        i[n] = s;
                    }
                }
                else
                    i[n] = i.s + i.xs0;
                l = l._next;
            } }, function (t, e, i, r, s) { this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r); }), vt = (U._parseToProxy = function (t, e, i, r, s, n) { var a, o, l, h, u, _ = r, f = {}, c = {}, p = i._transform, d = I; for (i._transform = null, I = e, r = u = i.parse(t, e, r, s), I = d, n && (i._transform = p, _ && (_._prev = null, _._prev && (_._prev._next = null))); r && r !== _;) {
            if (r.type <= 1 && (c[o = r.p] = r.s + r.c, f[o] = r.s, n || (h = new yt(r, "s", o, h, r.r), r.c = 0), 1 === r.type))
                for (a = r.l; --a > 0;)
                    l = "xn" + a, c[o = r.p + "_" + l] = r.data[l], f[o] = r[l], n || (h = new yt(r, l, o, h, r.rxp[l]));
            r = r._next;
        } return { proxy: f, end: c, firstMPT: h, pt: u }; }, U.CSSPropTween = function (e, i, r, n, a, o, l, h, u, _, f) { this.t = e, this.p = i, this.s = r, this.c = n, this.n = l || i, e instanceof vt || s.push(this.n), this.r = h ? "function" == typeof h ? h : Math.round : h, this.type = o || 0, u && (this.pr = u, t = !0), this.b = void 0 === _ ? r : _, this.e = void 0 === f ? r + n : f, a && (this._next = a, a._prev = this); }), Tt = function (t, e, i, r, s, n) { var a = new vt(t, e, i, r - i, s, -1, n); return a.b = i, a.e = a.xs0 = r, a; }, xt = n.parseComplex = function (t, e, i, r, s, a, o, l, u, _) { i = i || a || "", "function" == typeof r && (r = r(m, d)), o = new vt(t, e, 0, 0, o, _ ? 2 : 1, null, !1, l, i, r), r += "", s && dt.test(r + i) && (r = [i, r], n.colorStringFilter(r), i = r[0], r = r[1]); var f, c, p, v, T, x, b, w, P, O, S, k, R, C = i.split(", ").join(",").split(" "), A = r.split(", ").join(",").split(" "), M = C.length, D = !1 !== h; for (-1 === r.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl") ? (C = C.join(" ").replace(F, ", ").split(" "), A = A.join(" ").replace(F, ", ").split(" ")) : (C = C.join(" ").split(",").join(", ").split(" "), A = A.join(" ").split(",").join(", ").split(" ")), M = C.length), M !== A.length && (M = (C = (a || "").split(" ")).length), o.plugin = u, o.setRatio = _, dt.lastIndex = 0, f = 0; f < M; f++)
            if (v = C[f], T = A[f] + "", (w = parseFloat(v)) || 0 === w)
                o.appendXtra("", w, lt(T, w), T.replace(y, ""), !(!D || -1 === T.indexOf("px")) && Math.round, !0);
            else if (s && dt.test(v))
                k = ")" + ((k = T.indexOf(")") + 1) ? T.substr(k) : ""), R = -1 !== T.indexOf("hsl") && q, O = T, v = ct(v, R), T = ct(T, R), (P = v.length + T.length > 6) && !q && 0 === T[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(A[f]).join("transparent")) : (q || (P = !1), R ? o.appendXtra(O.substr(0, O.indexOf("hsl")) + (P ? "hsla(" : "hsl("), v[0], lt(T[0], v[0]), ",", !1, !0).appendXtra("", v[1], lt(T[1], v[1]), "%,", !1).appendXtra("", v[2], lt(T[2], v[2]), P ? "%," : "%" + k, !1) : o.appendXtra(O.substr(0, O.indexOf("rgb")) + (P ? "rgba(" : "rgb("), v[0], T[0] - v[0], ",", Math.round, !0).appendXtra("", v[1], T[1] - v[1], ",", Math.round).appendXtra("", v[2], T[2] - v[2], P ? "," : k, Math.round), P && (v = v.length < 4 ? 1 : v[3], o.appendXtra("", v, (T.length < 4 ? 1 : T[3]) - v, k, !1))), dt.lastIndex = 0;
            else if (x = v.match(g)) {
                if (!(b = T.match(y)) || b.length !== x.length)
                    return o;
                for (p = 0, c = 0; c < x.length; c++)
                    S = x[c], O = v.indexOf(S, p), o.appendXtra(v.substr(p, O - p), Number(S), lt(b[c], S), "", !(!D || "px" !== v.substr(O + S.length, 2)) && Math.round, 0 === c), p = O + S.length;
                o["xs" + o.l] += v.substr(p);
            }
            else
                o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + T : T; if (-1 !== r.indexOf("=") && o.data) {
            for (k = o.xs0 + o.data.s, f = 1; f < o.l; f++)
                k += o["xs" + f] + o.data["xn" + f];
            o.e = k + o["xs" + f];
        } return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o; }, bt = 9; for ((l = vt.prototype).l = l.pr = 0; --bt > 0;)
            l["xn" + bt] = 0, l["xs" + bt] = ""; l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, i, r, s, n) { var a = this, o = a.l; return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new vt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (r || ""), a); }; var wt = function (t, e) { e = e || {}, this.p = e.prefix && $(t) || t, o[t] = o[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.allowFunc = e.allowFunc, this.pr = e.priority || 0; }, Pt = U._registerComplexSpecialProp = function (t, e, i) { "object" != typeof e && (e = { parser: i }); var r, s = t.split(","), n = e.defaultValue; for (i = i || [n], r = 0; r < s.length; r++)
            e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || n, new wt(s[r], e); }, Ot = U._registerPluginProp = function (t) { if (!o[t]) {
            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
            Pt(t, { parser: function (t, i, r, s, n, l, h) { var u = a.com.greensock.plugins[e]; return u ? (u._cssRegister(), o[r].parse(t, i, r, s, n, l, h)) : (G("Error: " + e + " js file not loaded."), n); } });
        } }; (l = wt.prototype).parseComplex = function (t, e, i, r, s, n) { var a, o, l, h, u, _, f = this.keyword; if (this.multi && (F.test(i) || F.test(e) ? (o = e.replace(F, "|").split("|"), l = i.replace(F, "|").split("|")) : f && (o = [e], l = [i])), l) {
            for (h = l.length > o.length ? l.length : o.length, a = 0; a < h; a++)
                e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, f && (u = e.indexOf(f)) !== (_ = i.indexOf(f)) && (-1 === _ ? o[a] = o[a].split(f).join("") : -1 === u && (o[a] += " " + f));
            e = o.join(", "), i = l.join(", ");
        } return xt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n); }, l.parse = function (t, e, r, s, n, a, o) { return this.parseComplex(t.style, this.format(J(t, this.p, i, !1, this.dflt)), this.format(e), n, a); }, n.registerSpecialProp = function (t, e, i) { Pt(t, { parser: function (t, r, s, n, a, o, l) { var h = new vt(t, s, 0, 0, a, 2, s, !1, i); return h.plugin = o, h.setRatio = e(t, r, n._tween, s), h; }, priority: i }); }, n.useSVGTransformAttr = !0; var St, kt, Rt, Ct, At, Mt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Dt = $("transform"), Ft = Z + "transform", zt = $("transformOrigin"), Et = null !== $("perspective"), Xt = U.Transform = function () { this.perspective = parseFloat(n.defaultTransformPerspective) || 0, this.force3D = !(!1 === n.defaultForce3D || !Et) && (n.defaultForce3D || "auto"); }, It = r.e.SVGElement, Lt = function (t, e, i) { var r, s = N.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g; for (r in i)
            s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]); return e.appendChild(s), s; }, Nt = N.documentElement || {}, Bt = (At = p || /Android/i.test(V) && !r.e.chrome, N.createElementNS && !At && (kt = Lt("svg", Nt), Ct = (Rt = Lt("rect", kt, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width, Rt.style[zt] = "50% 50%", Rt.style[Dt] = "scaleX(0.5)", At = Ct === Rt.getBoundingClientRect().width && !(f && Et), Nt.removeChild(kt)), At), Yt = function (t, e, i, r, s, a) { var o, l, h, u, _, f, c, p, d, m, g, y, v, T, x = t._gsTransform, b = qt(t, !0); x && (v = x.xOrigin, T = x.yOrigin), (!r || (o = r.split(" ")).length < 2) && (0 === (c = t.getBBox()).x && 0 === c.y && c.width + c.height === 0 && (c = { x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0, y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), o = [(-1 !== (e = ot(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = _ = parseFloat(o[1]), r && b !== Vt && (f = b[0], c = b[1], p = b[2], d = b[3], m = b[4], g = b[5], (y = f * d - c * p) && (l = u * (d / y) + _ * (-p / y) + (p * g - d * m) / y, h = u * (-c / y) + _ * (f / y) - (f * g - c * m) / y, u = i.xOrigin = o[0] = l, _ = i.yOrigin = o[1] = h)), x && (a && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), s || !1 !== s && !1 !== n.defaultSmoothOrigin ? (l = u - v, h = _ - T, x.xOffset += l * b[0] + h * b[2] - l, x.yOffset += l * b[1] + h * b[3] - h) : x.xOffset = x.yOffset = 0), a || t.setAttribute("data-svg-origin", o.join(" ")); }, jt = function (t) { var e, i = B("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, s = this.nextSibling, n = this.style.cssText; if (Nt.appendChild(i), i.appendChild(this), this.style.display = "block", t)
            try {
                e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = jt;
            }
            catch (t) { }
        else
            this._originalGetBBox && (e = this._originalGetBBox()); return s ? r.insertBefore(this, s) : r.appendChild(this), Nt.removeChild(i), this.style.cssText = n, e; }, Ut = function (t) { return !(!It || !t.getCTM || t.parentNode && !t.ownerSVGElement || !function (t) { try {
            return t.getBBox();
        }
        catch (e) {
            return jt.call(t, !0);
        } }(t)); }, Vt = [1, 0, 0, 1, 0, 0], qt = function (t, e) { var i, r, s, n, a, o, l, h = t._gsTransform || new Xt, u = t.style; if (Dt ? r = J(t, Ft, null, !0) : t.currentStyle && (r = (r = t.currentStyle.filter.match(M)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, Dt && i && !t.offsetParent && (n = u.display, u.display = "block", (l = t.parentNode) && t.offsetParent || (a = 1, o = t.nextSibling, Nt.appendChild(t)), i = !(r = J(t, Ft, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, n ? u.display = n : $t(u, "display"), a && (o ? l.insertBefore(t, o) : l ? l.appendChild(t) : Nt.removeChild(t))), (h.svg || t.getCTM && Ut(t)) && (i && -1 !== (u[Dt] + "").indexOf("matrix") && (r = u[Dt], i = 0), s = t.getAttribute("transform"), i && s && (r = "matrix(" + (s = t.transform.baseVal.consolidate().matrix).a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")", i = 0)), i)
            return Vt; for (s = (r || "").match(g) || [], bt = s.length; --bt > -1;)
            n = Number(s[bt]), s[bt] = (a = n - (n |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + n : n; return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s; }, Wt = U.getTransform = function (t, e, i, s) { if (t._gsTransform && i && !s)
            return t._gsTransform; var a, o, l, h, u, _, f = i && t._gsTransform || new Xt, c = f.scaleX < 0, p = Et && (parseFloat(J(t, zt, e, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0, d = parseFloat(n.defaultTransformPerspective) || 0; if (f.svg = !(!t.getCTM || !Ut(t)), f.svg && (Yt(t, J(t, zt, e, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), St = n.useSVGTransformAttr || Bt), (a = qt(t)) !== Vt) {
            if (16 === a.length) {
                var m, g, y, v, T, x = a[0], b = a[1], w = a[2], P = a[3], O = a[4], S = a[5], k = a[6], R = a[7], C = a[8], A = a[9], M = a[10], D = a[12], F = a[13], z = a[14], E = a[11], I = Math.atan2(k, M);
                f.zOrigin && (D = C * (z = -f.zOrigin) - a[12], F = A * z - a[13], z = M * z + f.zOrigin - a[14]), f.rotationX = I * X, I && (m = O * (v = Math.cos(-I)) + C * (T = Math.sin(-I)), g = S * v + A * T, y = k * v + M * T, C = O * -T + C * v, A = S * -T + A * v, M = k * -T + M * v, E = R * -T + E * v, O = m, S = g, k = y), I = Math.atan2(-w, M), f.rotationY = I * X, I && (g = b * (v = Math.cos(-I)) - A * (T = Math.sin(-I)), y = w * v - M * T, A = b * T + A * v, M = w * T + M * v, E = P * T + E * v, x = m = x * v - C * T, b = g, w = y), I = Math.atan2(b, x), f.rotation = I * X, I && (m = x * (v = Math.cos(I)) + b * (T = Math.sin(I)), g = O * v + S * T, y = C * v + A * T, b = b * v - x * T, S = S * v - O * T, A = A * v - C * T, x = m, O = g, C = y), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), I = Math.atan2(O, S), f.scaleX = (1e5 * Math.sqrt(x * x + b * b + w * w) + .5 | 0) / 1e5, f.scaleY = (1e5 * Math.sqrt(S * S + k * k) + .5 | 0) / 1e5, f.scaleZ = (1e5 * Math.sqrt(C * C + A * A + M * M) + .5 | 0) / 1e5, x /= f.scaleX, O /= f.scaleY, b /= f.scaleX, S /= f.scaleY, Math.abs(I) > 2e-5 ? (f.skewX = I * X, O = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(I))) : f.skewX = 0, f.perspective = E ? 1 / (E < 0 ? -E : E) : 0, f.x = D, f.y = F, f.z = z, f.svg && (f.x -= f.xOrigin - (f.xOrigin * x - f.yOrigin * O), f.y -= f.yOrigin - (f.yOrigin * b - f.xOrigin * S));
            }
            else if (!Et || s || !a.length || f.x !== a[4] || f.y !== a[5] || !f.rotationX && !f.rotationY) {
                var L = a.length >= 6, N = L ? a[0] : 1, B = a[1] || 0, Y = a[2] || 0, j = L ? a[3] : 1;
                f.x = a[4] || 0, f.y = a[5] || 0, l = Math.sqrt(N * N + B * B), h = Math.sqrt(j * j + Y * Y), u = N || B ? Math.atan2(B, N) * X : f.rotation || 0, _ = Y || j ? Math.atan2(Y, j) * X + u : f.skewX || 0, f.scaleX = l, f.scaleY = h, f.rotation = u, f.skewX = _, Et && (f.rotationX = f.rotationY = f.z = 0, f.perspective = d, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * N + f.yOrigin * Y), f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * j));
            }
            for (o in Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (c ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = p, f)
                f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0);
        } return i && (t._gsTransform = f, f.svg && (St && t.style[Dt] ? r.f.delayedCall(.001, (function () { $t(t.style, Dt); })) : !St && t.getAttribute("transform") && r.f.delayedCall(.001, (function () { t.removeAttribute("transform"); })))), f; }, Gt = function (t) { var e, i, r = this.data, s = -r.rotation * E, n = s + r.skewX * E, a = (Math.cos(s) * r.scaleX * 1e5 | 0) / 1e5, o = (Math.sin(s) * r.scaleX * 1e5 | 0) / 1e5, l = (Math.sin(n) * -r.scaleY * 1e5 | 0) / 1e5, h = (Math.cos(n) * r.scaleY * 1e5 | 0) / 1e5, u = this.t.style, _ = this.t.currentStyle; if (_) {
            i = o, o = -l, l = -i, e = _.filter, u.filter = "";
            var f, c, d = this.t.offsetWidth, m = this.t.offsetHeight, g = "absolute" !== _.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + h, v = r.x + d * r.xPercent / 100, T = r.y + m * r.yPercent / 100;
            if (null != r.ox && (v += (f = (r.oxp ? d * r.ox * .01 : r.ox) - d / 2) - (f * a + (c = (r.oyp ? m * r.oy * .01 : r.oy) - m / 2) * o), T += c - (f * l + c * h)), y += g ? ", Dx=" + ((f = d / 2) - (f * a + (c = m / 2) * o) + v) + ", Dy=" + (c - (f * l + c * h) + T) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(D, y) : u.filter = y + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === o && 0 === l && 1 === h && (g && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !g) {
                var w, P, O, S = p < 8 ? 1 : -1;
                for (f = r.ieOffsetX || 0, c = r.ieOffsetY || 0, r.ieOffsetX = Math.round((d - ((a < 0 ? -a : a) * d + (o < 0 ? -o : o) * m)) / 2 + v), r.ieOffsetY = Math.round((m - ((h < 0 ? -h : h) * m + (l < 0 ? -l : l) * d)) / 2 + T), bt = 0; bt < 4; bt++)
                    O = (i = -1 !== (w = _[P = nt[bt]]).indexOf("px") ? parseFloat(w) : tt(this.t, P, parseFloat(w), w.replace(x, "")) || 0) !== r[P] ? bt < 2 ? -r.ieOffsetX : -r.ieOffsetY : bt < 2 ? f - r.ieOffsetX : c - r.ieOffsetY, u[P] = (r[P] = Math.round(i - O * (0 === bt || 2 === bt ? 1 : S))) + "px";
            }
        } }, Zt = U.set3DTransformRatio = U.setTransformRatio = function (t) { var e, i, r, s, n, a, o, l, h, u, _, c, p, d, m, g, y, v, T, x, b = this.data, w = this.t.style, P = b.rotation, O = b.rotationX, S = b.rotationY, k = b.scaleX, R = b.scaleY, C = b.scaleZ, A = b.x, M = b.y, D = b.z, F = b.svg, z = b.perspective, X = b.force3D, I = b.skewY, L = b.skewX; if (I && (L += I, P += I), !((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || D || z || S || O || 1 !== C) || St && F || !Et)
            P || L || F ? (P *= E, x = L * E, 1e5, i = Math.cos(P) * k, n = Math.sin(P) * k, r = Math.sin(P - x) * -R, a = Math.cos(P - x) * R, x && "simple" === b.skewType && (e = Math.tan(x - I * E), r *= e = Math.sqrt(1 + e * e), a *= e, I && (e = Math.tan(I * E), i *= e = Math.sqrt(1 + e * e), n *= e)), F && (A += b.xOrigin - (b.xOrigin * i + b.yOrigin * r) + b.xOffset, M += b.yOrigin - (b.xOrigin * n + b.yOrigin * a) + b.yOffset, St && (b.xPercent || b.yPercent) && (m = this.t.getBBox(), A += .01 * b.xPercent * m.width, M += .01 * b.yPercent * m.height), A < (m = 1e-6) && A > -m && (A = 0), M < m && M > -m && (M = 0)), T = (1e5 * i | 0) / 1e5 + "," + (1e5 * n | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + (1e5 * a | 0) / 1e5 + "," + A + "," + M + ")", F && St ? this.t.setAttribute("transform", "matrix(" + T) : w[Dt] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix(" : "matrix(") + T) : w[Dt] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + R + "," + A + "," + M + ")";
        else {
            if (f && (k < (m = 1e-4) && k > -m && (k = C = 2e-5), R < m && R > -m && (R = C = 2e-5), !z || b.z || b.rotationX || b.rotationY || (z = 0)), P || L)
                P *= E, g = i = Math.cos(P), y = n = Math.sin(P), L && (P -= L * E, g = Math.cos(P), y = Math.sin(P), "simple" === b.skewType && (e = Math.tan((L - I) * E), g *= e = Math.sqrt(1 + e * e), y *= e, b.skewY && (e = Math.tan(I * E), i *= e = Math.sqrt(1 + e * e), n *= e))), r = -y, a = g;
            else {
                if (!(S || O || 1 !== C || z || F))
                    return void (w[Dt] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) translate3d(" : "translate3d(") + A + "px," + M + "px," + D + "px)" + (1 !== k || 1 !== R ? " scale(" + k + "," + R + ")" : ""));
                i = a = 1, r = n = 0;
            }
            u = 1, s = o = l = h = _ = c = 0, p = z ? -1 / z : 0, d = b.zOrigin, m = 1e-6, ",", "0", (P = S * E) && (g = Math.cos(P), l = -(y = Math.sin(P)), _ = p * -y, s = i * y, o = n * y, u = g, p *= g, i *= g, n *= g), (P = O * E) && (e = r * (g = Math.cos(P)) + s * (y = Math.sin(P)), v = a * g + o * y, h = u * y, c = p * y, s = r * -y + s * g, o = a * -y + o * g, u *= g, p *= g, r = e, a = v), 1 !== C && (s *= C, o *= C, u *= C, p *= C), 1 !== R && (r *= R, a *= R, h *= R, c *= R), 1 !== k && (i *= k, n *= k, l *= k, _ *= k), (d || F) && (d && (A += s * -d, M += o * -d, D += u * -d + d), F && (A += b.xOrigin - (b.xOrigin * i + b.yOrigin * r) + b.xOffset, M += b.yOrigin - (b.xOrigin * n + b.yOrigin * a) + b.yOffset), A < m && A > -m && (A = "0"), M < m && M > -m && (M = "0"), D < m && D > -m && (D = 0)), T = b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix3d(" : "matrix3d(", T += (i < m && i > -m ? "0" : i) + "," + (n < m && n > -m ? "0" : n) + "," + (l < m && l > -m ? "0" : l), T += "," + (_ < m && _ > -m ? "0" : _) + "," + (r < m && r > -m ? "0" : r) + "," + (a < m && a > -m ? "0" : a), O || S || 1 !== C ? (T += "," + (h < m && h > -m ? "0" : h) + "," + (c < m && c > -m ? "0" : c) + "," + (s < m && s > -m ? "0" : s), T += "," + (o < m && o > -m ? "0" : o) + "," + (u < m && u > -m ? "0" : u) + "," + (p < m && p > -m ? "0" : p) + ",") : T += ",0,0,0,0,1,0,", T += A + "," + M + "," + D + "," + (z ? 1 + -D / z : 1) + ")", w[Dt] = T;
        } }; (l = Xt.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function (t, e, r, s, a, o, l) { if (s._lastParsedTransform === l)
                return a; s._lastParsedTransform = l; var h = l.scale && "function" == typeof l.scale ? l.scale : 0; h && (l.scale = h(m, t)); var u, _, f, c, p, g, y, v, T, x = t._gsTransform, b = t.style, w = Mt.length, P = l, O = {}, S = Wt(t, i, !0, P.parseTransform), k = P.transform && ("function" == typeof P.transform ? P.transform(m, d) : P.transform); if (S.skewType = P.skewType || S.skewType || n.defaultSkewType, s._transform = S, "rotationZ" in P && (P.rotation = P.rotationZ), k && "string" == typeof k && Dt)
                (_ = Y.style)[Dt] = k, _.display = "block", _.position = "absolute", -1 !== k.indexOf("%") && (_.width = J(t, "width"), _.height = J(t, "height")), N.body.appendChild(Y), u = Wt(Y, null, !1), "simple" === S.skewType && (u.scaleY *= Math.cos(u.skewX * E)), S.svg && (g = S.xOrigin, y = S.yOrigin, u.x -= S.xOffset, u.y -= S.yOffset, (P.transformOrigin || P.svgOrigin) && (k = {}, Yt(t, ot(P.transformOrigin), k, P.svgOrigin, P.smoothOrigin, !0), g = k.xOrigin, y = k.yOrigin, u.x -= k.xOffset - S.xOffset, u.y -= k.yOffset - S.yOffset), (g || y) && (v = qt(Y, !0), u.x -= g - (g * v[0] + y * v[2]), u.y -= y - (g * v[1] + y * v[3]))), N.body.removeChild(Y), u.perspective || (u.perspective = S.perspective), null != P.xPercent && (u.xPercent = ht(P.xPercent, S.xPercent)), null != P.yPercent && (u.yPercent = ht(P.yPercent, S.yPercent));
            else if ("object" == typeof P) {
                if (u = { scaleX: ht(null != P.scaleX ? P.scaleX : P.scale, S.scaleX), scaleY: ht(null != P.scaleY ? P.scaleY : P.scale, S.scaleY), scaleZ: ht(P.scaleZ, S.scaleZ), x: ht(P.x, S.x), y: ht(P.y, S.y), z: ht(P.z, S.z), xPercent: ht(P.xPercent, S.xPercent), yPercent: ht(P.yPercent, S.yPercent), perspective: ht(P.transformPerspective, S.perspective) }, null != (p = P.directionalRotation))
                    if ("object" == typeof p)
                        for (_ in p)
                            P[_] = p[_];
                    else
                        P.rotation = p;
                "string" == typeof P.x && -1 !== P.x.indexOf("%") && (u.x = 0, u.xPercent = ht(P.x, S.xPercent)), "string" == typeof P.y && -1 !== P.y.indexOf("%") && (u.y = 0, u.yPercent = ht(P.y, S.yPercent)), u.rotation = ut("rotation" in P ? P.rotation : "shortRotation" in P ? P.shortRotation + "_short" : S.rotation, S.rotation, "rotation", O), Et && (u.rotationX = ut("rotationX" in P ? P.rotationX : "shortRotationX" in P ? P.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", O), u.rotationY = ut("rotationY" in P ? P.rotationY : "shortRotationY" in P ? P.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", O)), u.skewX = ut(P.skewX, S.skewX), u.skewY = ut(P.skewY, S.skewY);
            } for (Et && null != P.force3D && (S.force3D = P.force3D, c = !0), (f = S.force3D || S.z || S.rotationX || S.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == P.scale || (u.scaleZ = 1); --w > -1;)
                ((k = u[T = Mt[w]] - S[T]) > 1e-6 || k < -1e-6 || null != P[T] || null != I[T]) && (c = !0, a = new vt(S, T, S[T], k, a), T in O && (a.e = O[T]), a.xs0 = 0, a.plugin = o, s._overwriteProps.push(a.n)); return k = "function" == typeof P.transformOrigin ? P.transformOrigin(m, d) : P.transformOrigin, S.svg && (k || P.svgOrigin) && (g = S.xOffset, y = S.yOffset, Yt(t, ot(k), u, P.svgOrigin, P.smoothOrigin), a = Tt(S, "xOrigin", (x ? S : u).xOrigin, u.xOrigin, a, "transformOrigin"), a = Tt(S, "yOrigin", (x ? S : u).yOrigin, u.yOrigin, a, "transformOrigin"), g === S.xOffset && y === S.yOffset || (a = Tt(S, "xOffset", x ? g : S.xOffset, S.xOffset, a, "transformOrigin"), a = Tt(S, "yOffset", x ? y : S.yOffset, S.yOffset, a, "transformOrigin")), k = "0px 0px"), (k || Et && f && S.zOrigin) && (Dt ? (c = !0, T = zt, k || (k = (k = (J(t, T, i, !1, "50% 50%") + "").split(" "))[0] + " " + k[1] + " " + S.zOrigin + "px"), k += "", (a = new vt(b, T, 0, 0, a, -1, "transformOrigin")).b = b[T], a.plugin = o, Et ? (_ = S.zOrigin, k = k.split(" "), S.zOrigin = (k.length > 2 ? parseFloat(k[2]) : _) || 0, a.xs0 = a.e = k[0] + " " + (k[1] || "50%") + " 0px", (a = new vt(S, "zOrigin", 0, 0, a, -1, a.n)).b = _, a.xs0 = a.e = S.zOrigin) : a.xs0 = a.e = k) : ot(k + "", S)), c && (s._transformType = S.svg && St || !f && 3 !== this._transformType ? 2 : 3), h && (l.scale = h), a; }, allowFunc: !0, prefix: !0 }), Pt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), Pt("clipPath", { defaultValue: "inset(0px)", prefix: !0, multi: !0, formatter: mt("inset(0px 0px 0px 0px)", !1, !0) }), Pt("borderRadius", { defaultValue: "0px", parser: function (t, r, s, n, a, o) { r = this.format(r); var l, h, u, _, f, c, p, d, m, g, y, v, T, x, b, w, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], O = t.style; for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = r.split(" "), h = 0; h < P.length; h++)
                this.p.indexOf("border") && (P[h] = $(P[h])), -1 !== (f = _ = J(t, P[h], i, !1, "0px")).indexOf(" ") && (_ = f.split(" "), f = _[0], _ = _[1]), c = u = l[h], p = parseFloat(f), v = f.substr((p + "").length), (T = "=" === c.charAt(1)) ? (d = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), d *= parseFloat(c), y = c.substr((d + "").length - (d < 0 ? 1 : 0)) || "") : (d = parseFloat(c), y = c.substr((d + "").length)), "" === y && (y = e[s] || v), y !== v && (x = tt(t, "borderLeft", p, v), b = tt(t, "borderTop", p, v), "%" === y ? (f = x / m * 100 + "%", _ = b / g * 100 + "%") : "em" === y ? (f = x / (w = tt(t, "borderLeft", 1, "em")) + "em", _ = b / w + "em") : (f = x + "px", _ = b + "px"), T && (c = parseFloat(f) + d + y, u = parseFloat(_) + d + y)), a = xt(O, P[h], f + " " + _, c + " " + u, !1, "0px", a); return a; }, prefix: !0, formatter: mt("0px 0px 0px 0px", !1, !0) }), Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function (t, e, r, s, n, a) { return xt(t.style, r, this.format(J(t, r, i, !1, "0px 0px")), this.format(e), !1, "0px", n); }, prefix: !0, formatter: mt("0px 0px", !1, !0) }), Pt("backgroundPosition", { defaultValue: "0 0", parser: function (t, e, r, s, n, a) { var o, l, h, u, _, f, c = "background-position", d = i || K(t), m = this.format((d ? p ? d.getPropertyValue(c + "-x") + " " + d.getPropertyValue(c + "-y") : d.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e); if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = J(t, "backgroundImage").replace(R, "")) && "none" !== f) {
                for (o = m.split(" "), l = g.split(" "), j.setAttribute("src", f), h = 2; --h > -1;)
                    (u = -1 !== (m = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (_ = 0 === h ? t.offsetWidth - j.width : t.offsetHeight - j.height, o[h] = u ? parseFloat(m) / 100 * _ + "px" : parseFloat(m) / _ * 100 + "%");
                m = o.join(" ");
            } return this.parseComplex(t.style, m, g, n, a); }, formatter: ot }), Pt("backgroundSize", { defaultValue: "0 0", formatter: function (t) { return "co" === (t += "").substr(0, 2) ? t : ot(-1 === t.indexOf(" ") ? t + " " + t : t); } }), Pt("perspective", { defaultValue: "0px", prefix: !0 }), Pt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), Pt("transformStyle", { prefix: !0 }), Pt("backfaceVisibility", { prefix: !0 }), Pt("userSelect", { prefix: !0 }), Pt("margin", { parser: gt("marginTop,marginRight,marginBottom,marginLeft") }), Pt("padding", { parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), Pt("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function (t, e, r, s, n, a) { var o, l, h; return p < 9 ? (l = t.currentStyle, h = p < 8 ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(J(t, this.p, i, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a); } }), Pt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), Pt("autoRound,strictUnits", { parser: function (t, e, i, r, s) { return s; } }), Pt("border", { defaultValue: "0px solid #000", parser: function (t, e, r, s, n, a) { var o = J(t, "borderTopWidth", i, !1, "0px"), l = this.format(e).split(" "), h = l[0].replace(x, ""); return "px" !== h && (o = parseFloat(o) / tt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + J(t, "borderTopStyle", i, !1, "solid") + " " + J(t, "borderTopColor", i, !1, "#000")), l.join(" "), n, a); }, color: !0, formatter: function (t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]; } }), Pt("borderWidth", { parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), Pt("float,cssFloat,styleFloat", { parser: function (t, e, i, r, s, n) { var a = t.style, o = "cssFloat" in a ? "cssFloat" : "styleFloat"; return new vt(a, o, 0, 0, s, -1, i, !1, 0, a[o], e); } }); var Ht = function (t) { var e, i = this.t, r = i.filter || J(this.data, "filter") || "", s = this.s + this.c * t | 0; 100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !J(this.data, "filter")) : (i.filter = r.replace(P, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(b, "opacity=" + s)); }; Pt("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function (t, e, r, s, n, a) { var o = parseFloat(J(t, "opacity", i, !1, "1")), l = t.style, h = "autoAlpha" === r; return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === J(t, "visibility", i) && 0 !== e && (o = 0), q ? n = new vt(l, "opacity", o, e - o, n) : ((n = new vt(l, "opacity", 100 * o, 100 * (e - o), n)).xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ht), h && ((n = new vt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(r)), n; } }); var $t = function (t, e) { e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e)); }, Qt = function (t) { if (this.t._gsClassPT = this, 1 === t || 0 === t) {
            this.t.setAttribute("class", 0 === t ? this.b : this.e);
            for (var e = this.data, i = this.t.style; e;)
                e.v ? i[e.p] = e.v : $t(i, e.p), e = e._next;
            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
        }
        else
            this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e); }; Pt("className", { parser: function (e, r, s, n, a, o, l) { var h, u, _, f, c, p = e.getAttribute("class") || "", d = e.style.cssText; if ((a = n._classNamePT = new vt(e, s, 0, 0, a, 2)).setRatio = Qt, a.pr = -11, t = !0, a.b = p, u = it(e, i), _ = e._gsClassPT) {
                for (f = {}, c = _.data; c;)
                    f[c.p] = 1, c = c._next;
                _.setRatio(1);
            } return e._gsClassPT = a, a.e = "=" !== r.charAt(1) ? r : p.replace(new RegExp("(?:\\s|^)" + r.substr(2) + "(?![\\w-])"), "") + ("+" === r.charAt(0) ? " " + r.substr(2) : ""), e.setAttribute("class", a.e), h = rt(e, u, it(e), l, f), e.setAttribute("class", p), a.data = h.firstMPT, e.style.cssText = d, a = a.xfirst = n.parse(e, h.difs, a, o); } }); var Kt = function (t) { if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
            var e, i, r, s, n, a = this.t.style, l = o.transform.parse;
            if ("all" === this.e)
                a.cssText = "", s = !0;
            else
                for (r = (e = this.e.split(" ").join("").split(",")).length; --r > -1;)
                    i = e[r], o[i] && (o[i].parse === l ? s = !0 : i = "transformOrigin" === i ? zt : o[i].p), $t(a, i);
            s && ($t(a, Dt), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
        } }; for (Pt("clearProps", { parser: function (e, i, r, s, n) { return (n = new vt(e, r, 0, 0, n, 2)).setRatio = Kt, n.e = i, n.pr = -10, n.data = s._tween, t = !0, n; } }), l = "bezier,throwProps,physicsProps,physics2D".split(","), bt = l.length; bt--;)
            Ot(l[bt]); (l = n.prototype)._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function (r, a, l, f) { if (!r.nodeType)
            return !1; this._target = d = r, this._tween = l, this._vars = a, m = f, h = a.autoRound, t = !1, e = a.suffixMap || n.suffixMap, i = K(r), s = this._overwriteProps; var p, g, y, v, T, x, b, P, O, S = r.style; if (u && "" === S.zIndex && ("auto" !== (p = J(r, "zIndex", i)) && "" !== p || this._addLazySet(S, "zIndex", 0)), "string" == typeof a && (v = S.cssText, p = it(r, i), S.cssText = v + ";" + a, p = rt(r, p, it(r)).difs, !q && w.test(a) && (p.opacity = parseFloat(RegExp.$1)), a = p, S.cssText = v), a.className ? this._firstPT = g = o.className.parse(r, a.className, "className", this, null, null, a) : this._firstPT = g = this.parse(r, a, null), this._transformType) {
            for (O = 3 === this._transformType, Dt ? _ && (u = !0, "" === S.zIndex && ("auto" !== (b = J(r, "zIndex", i)) && "" !== b || this._addLazySet(S, "zIndex", 0)), c && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (O ? "visible" : "hidden"))) : S.zoom = 1, y = g; y && y._next;)
                y = y._next;
            P = new vt(r, "transform", 0, 0, null, 2), this._linkCSSP(P, null, y), P.setRatio = Dt ? Zt : Gt, P.data = this._transform || Wt(r, i, !0), P.tween = l, P.pr = -1, s.pop();
        } if (t) {
            for (; g;) {
                for (x = g._next, y = v; y && y.pr > g.pr;)
                    y = y._next;
                (g._prev = y ? y._prev : T) ? g._prev._next = g : v = g, (g._next = y) ? y._prev = g : T = g, g = x;
            }
            this._firstPT = v;
        } return !0; }, l.parse = function (t, r, s, n) { var a, l, u, _, f, c, p, g, y, v, T = t.style; for (a in r) {
            if (c = r[a], l = o[a], "function" != typeof c || l && l.allowFunc || (c = c(m, d)), l)
                s = l.parse(t, c, a, this, s, n, r);
            else {
                if ("--" === a.substr(0, 2)) {
                    this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", K(t).getPropertyValue(a) + "", c + "", a, !1, a);
                    continue;
                }
                f = J(t, a, i) + "", y = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || y && O.test(c) ? (y || (c = ((c = ct(c)).length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), s = xt(T, a, f, c, !0, "transparent", s, 0, n)) : y && z.test(c) ? s = xt(T, a, f, c, !0, null, s, 0, n) : (p = (u = parseFloat(f)) || 0 === u ? f.substr((u + "").length) : "", "" !== f && "auto" !== f || ("width" === a || "height" === a ? (u = at(t, a, i), p = "px") : "left" === a || "top" === a ? (u = et(t, a, i), p = "px") : (u = "opacity" !== a ? 0 : 1, p = "")), (v = y && "=" === c.charAt(1)) ? (_ = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), _ *= parseFloat(c), g = c.replace(x, "")) : (_ = parseFloat(c), g = y ? c.replace(x, "") : ""), "" === g && (g = a in e ? e[a] : p), c = _ || 0 === _ ? (v ? _ + u : _) + g : r[a], p !== g && ("" === g && "lineHeight" !== a || (_ || 0 === _) && u && (u = tt(t, a, u, p), "%" === g ? (u /= tt(t, a, 100, "%") / 100, !0 !== r.strictUnits && (f = u + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? u /= tt(t, a, 1, g) : "px" !== g && (_ = tt(t, a, _, g), g = "px"), v && (_ || 0 === _) && (c = _ + u + g))), v && (_ += u), !u && 0 !== u || !_ && 0 !== _ ? void 0 !== T[a] && (c || c + "" != "NaN" && null != c) ? (s = new vt(T, a, _ || u || 0, 0, s, -1, a, !1, 0, f, c)).xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : f : G("invalid " + a + " tween value: " + r[a]) : (s = new vt(T, a, u, _ - u, s, 0, a, !1 !== h && ("px" === g || "zIndex" === a), 0, f, c)).xs0 = g);
            }
            n && s && !s.plugin && (s.plugin = n);
        } return s; }, l.setRatio = function (t) { var e, i, r, s = this._firstPT; if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
            if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                for (; s;) {
                    if (e = s.c * t + s.s, s.r ? e = s.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), s.type)
                        if (1 === s.type)
                            if (2 === (r = s.l))
                                s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                            else if (3 === r)
                                s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                            else if (4 === r)
                                s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                            else if (5 === r)
                                s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                            else {
                                for (i = s.xs0 + e + s.xs1, r = 1; r < s.l; r++)
                                    i += s["xn" + r] + s["xs" + (r + 1)];
                                s.t[s.p] = i;
                            }
                        else
                            -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                    else
                        s.t[s.p] = e + s.xs0;
                    s = s._next;
                }
            else
                for (; s;)
                    2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
        else
            for (; s;) {
                if (2 !== s.type)
                    if (s.r && -1 !== s.type)
                        if (e = s.r(s.s + s.c), s.type) {
                            if (1 === s.type) {
                                for (r = s.l, i = s.xs0 + e + s.xs1, r = 1; r < s.l; r++)
                                    i += s["xn" + r] + s["xs" + (r + 1)];
                                s.t[s.p] = i;
                            }
                        }
                        else
                            s.t[s.p] = e + s.xs0;
                    else
                        s.t[s.p] = s.e;
                else
                    s.setRatio(t);
                s = s._next;
            } }, l._enableTransforms = function (t) { this._transform = this._transform || Wt(this._target, i, !0), this._transformType = this._transform.svg && St || !t && 3 !== this._transformType ? 2 : 3; }; var Jt = function (t) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0); }; l._addLazySet = function (t, e, i) { var r = this._firstPT = new vt(t, e, 0, 0, this._firstPT, 2); r.e = i, r.setRatio = Jt, r.data = this; }, l._linkCSSP = function (t, e, i, r) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t; }, l._mod = function (t) { for (var e = this._firstPT; e;)
            "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next; }, l._kill = function (t) { var e, i, s, n = t; if (t.autoAlpha || t.alpha) {
            for (i in n = {}, t)
                n[i] = t[i];
            n.opacity = 1, n.autoAlpha && (n.visibility = 1);
        } for (t.className && (e = this._classNamePT) && ((s = e.xfirst) && s._prev ? this._linkCSSP(s._prev, e._next, s._prev._prev) : s === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, s._prev), this._classNamePT = null), e = this._firstPT; e;)
            e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next; return r.d.prototype._kill.call(this, n); }; var te = function (t, e, i) { var r, s, n, a; if (t.slice)
            for (s = t.length; --s > -1;)
                te(t[s], e, i);
        else
            for (s = (r = t.childNodes).length; --s > -1;)
                a = (n = r[s]).type, n.style && (e.push(it(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || te(n, e, i); }; return n.cascadeTo = function (t, e, i) { var s, n, a, o, l = r.f.to(t, e, i), h = [l], u = [], _ = [], f = [], c = r.f._internals.reservedProps; for (t = l._targets || l.target, te(t, u, f), l.render(e, !0, !0), te(t, _), l.render(0, !0, !0), l._enabled(!0), s = f.length; --s > -1;)
            if ((n = rt(f[s], u[s], _[s])).firstMPT) {
                for (a in n = n.difs, i)
                    c[a] && (n[a] = i[a]);
                for (a in o = {}, n)
                    o[a] = u[s][a];
                h.push(r.f.fromTo(f[s], e, o, n));
            } return h; }, r.d.activate([n]), n; }), !0);
        var n = r.g.CSSPlugin, a = r.e._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function (t, e, i, r) { var s, n; if ("function" != typeof t.setAttribute)
                return !1; for (s in e)
                "function" == typeof (n = e[s]) && (n = n(r, t)), this._addTween(t, "setAttribute", t.getAttribute(s) + "", n + "", s, !1, s), this._overwriteProps.push(s); return !0; } }), o = r.e._gsDefine.plugin({ propName: "roundProps", version: "1.7.0", priority: -1, API: 2, init: function (t, e, i) { return this._tween = i, !0; } }), l = function (t) { var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1; return function (i) { return (Math.round(i / t) * t * e | 0) / e; }; }, h = function (t, e) { for (; t;)
            t.f || t.blob || (t.m = e || Math.round), t = t._next; }, u = o.prototype;
        /*!
         * VERSION: 0.6.1
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */ u._onInitAllProps = function () { var t, e, i, r, s = this._tween, n = s.vars.roundProps, a = {}, o = s._propLookup.roundProps; if ("object" != typeof n || n.push)
            for ("string" == typeof n && (n = n.split(",")), i = n.length; --i > -1;)
                a[n[i]] = Math.round;
        else
            for (r in n)
                a[r] = l(n[r]); for (r in a)
            for (t = s._firstPT; t;)
                e = t._next, t.pg ? t.t._mod(a) : t.n === r && (2 === t.f && t.t ? h(t.t._firstPT, a[r]) : (this._add(t.t, r, t.s, t.c, a[r]), e && (e._prev = t._prev), t._prev ? t._prev._next = e : s._firstPT === t && (s._firstPT = e), t._next = t._prev = null, s._propLookup[r] = o)), t = e; return !1; }, u._add = function (t, e, i, r, s) { this._addTween(t, e, i, i + r, e, s || Math.round), this._overwriteProps.push(e); };
        /*!
         * VERSION: 0.3.1
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         **/
        var _ = r.e._gsDefine.plugin({ propName: "directionalRotation", version: "0.3.1", API: 2, init: function (t, e, i, r) { "object" != typeof e && (e = { rotation: e }), this.finals = {}; var s, n, a, o, l, h, u = !0 === e.useRadians ? 2 * Math.PI : 360; for (s in e)
                "useRadians" !== s && ("function" == typeof (o = e[s]) && (o = o(r, t)), n = (h = (o + "").split("_"))[0], a = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), l = (o = this.finals[s] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - a, h.length && (-1 !== (n = h.join("_")).indexOf("short") && (l %= u) !== l % (u / 2) && (l = l < 0 ? l + u : l - u), -1 !== n.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, s, a, a + l, s), this._overwriteProps.push(s))); return !0; }, set: function (t) { var e; if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e;)
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next; } });
        _._autoCSS = !0,
            /*!
             * VERSION: 2.1.2
             * DATE: 2019-03-01
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             */
            r.e._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function () { var t = function (t) { r.c.call(this, t); var e, i, s = this.vars; for (i in this._labels = {}, this.autoRemoveChildren = !!s.autoRemoveChildren, this.smoothChildTiming = !!s.smoothChildTiming, this._sortChildren = !0, this._onUpdate = s.onUpdate, s)
                e = s[i], n(e) && -1 !== e.join("").indexOf("{self}") && (s[i] = this._swapSelfInParams(e)); n(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger); }, e = r.f._internals, i = t._internals = {}, s = e.isSelector, n = e.isArray, a = e.lazyTweens, o = e.lazyRender, l = r.e._gsDefine.globals, h = function (t) { var e, i = {}; for (e in t)
                i[e] = t[e]; return i; }, u = function (t, e, i) { var r, s, n = t.cycle; for (r in n)
                s = n[r], t[r] = "function" == typeof s ? s(i, e[i], e) : s[i % s.length]; delete t.cycle; }, _ = i.pauseCallback = function () { }, f = function (t, e, i, r) { var s = "immediateRender"; return s in e || (e[s] = !(i && !1 === i[s] || r)), e; }, c = function (t) { if ("function" == typeof t)
                return t; var e = "object" == typeof t ? t : { each: t }, i = e.ease, r = e.from || 0, s = e.base || 0, n = {}, a = isNaN(r), o = e.axis, l = { center: .5, end: 1 }[r] || 0; return function (t, h, u) { var _, f, c, p, d, m, g, y, v, T = (u || e).length, x = n[T]; if (!x) {
                if (!(v = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                    for (g = -1 / 0; g < (g = u[v++].getBoundingClientRect().left) && v < T;)
                        ;
                    v--;
                }
                for (x = n[T] = [], _ = a ? Math.min(v, T) * l - .5 : r % v, f = a ? T * l / v - .5 : r / v | 0, g = 0, y = 1 / 0, m = 0; m < T; m++)
                    c = m % v - _, p = f - (m / v | 0), x[m] = d = o ? Math.abs("y" === o ? p : c) : Math.sqrt(c * c + p * p), d > g && (g = d), d < y && (y = d);
                x.max = g - y, x.min = y, x.v = T = e.amount || e.each * (v > T ? T : o ? "y" === o ? T / v : v : Math.max(v, T / v)) || 0, x.b = T < 0 ? s - T : s;
            } return T = (x[t] - x.min) / x.max, x.b + (i ? i.getRatio(T) : T) * x.v; }; }, p = t.prototype = new r.c; return t.version = "2.1.2", t.distribute = c, p.constructor = t, p.kill()._gc = p._forcingPlayhead = p._hasPause = !1, p.to = function (t, e, i, s) { var n = i.repeat && l.TweenMax || r.f; return e ? this.add(new n(t, e, i), s) : this.set(t, i, s); }, p.from = function (t, e, i, s) { return this.add((i.repeat && l.TweenMax || r.f).from(t, e, f(0, i)), s); }, p.fromTo = function (t, e, i, s, n) { var a = s.repeat && l.TweenMax || r.f; return s = f(0, s, i), e ? this.add(a.fromTo(t, e, i, s), n) : this.set(t, s, n); }, p.staggerTo = function (e, i, n, a, o, l, _, f) { var p, d, m = new t({ onComplete: l, onCompleteParams: _, callbackScope: f, smoothChildTiming: this.smoothChildTiming }), g = c(n.stagger || a), y = n.startAt, v = n.cycle; for ("string" == typeof e && (e = r.f.selector(e) || e), s(e = e || []) && (e = function (t) { var e, i = [], r = t.length; for (e = 0; e !== r; i.push(t[e++]))
                ; return i; }(e)), d = 0; d < e.length; d++)
                p = h(n), y && (p.startAt = h(y), y.cycle && u(p.startAt, e, d)), v && (u(p, e, d), null != p.duration && (i = p.duration, delete p.duration)), m.to(e[d], i, p, g(d, e[d], e)); return this.add(m, o); }, p.staggerFrom = function (t, e, i, r, s, n, a, o) { return i.runBackwards = !0, this.staggerTo(t, e, f(0, i), r, s, n, a, o); }, p.staggerFromTo = function (t, e, i, r, s, n, a, o, l) { return r.startAt = i, this.staggerTo(t, e, f(0, r, i), s, n, a, o, l); }, p.call = function (t, e, i, s) { return this.add(r.f.delayedCall(0, t, e, i), s); }, p.set = function (t, e, i) { return this.add(new r.f(t, 0, f(0, e, null, !0)), i); }, t.exportRoot = function (e, i) { null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0); var s, n, a, o, l = new t(e), h = l._timeline; for (null == i && (i = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, a = h._first; a;)
                o = a._next, i && a instanceof r.f && a.target === a.vars.onComplete || ((n = a._startTime - a._delay) < 0 && (s = 1), l.add(a, n)), a = o; return h.add(l, 0), s && l.totalDuration(), l; }, p.add = function (e, i, s, a) { var o, l, h, u, _, f; if ("number" != typeof i && (i = this._parseTimeOrLabel(i, 0, !0, e)), !(e instanceof r.a)) {
                if (e instanceof Array || e && e.push && n(e)) {
                    for (s = s || "normal", a = a || 0, o = i, l = e.length, h = 0; h < l; h++)
                        n(u = e[h]) && (u = new t({ tweens: u })), this.add(u, o), "string" != typeof u && "function" != typeof u && ("sequence" === s ? o = u._startTime + u.totalDuration() / u._timeScale : "start" === s && (u._startTime -= u.delay())), o += a;
                    return this._uncache(!0);
                }
                if ("string" == typeof e)
                    return this.addLabel(e, i);
                if ("function" != typeof e)
                    throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = r.f.delayedCall(0, e);
            } if (r.c.prototype.add.call(this, e, i), (e._time || !e._duration && e._initted) && (o = (this.rawTime() - e._startTime) * e._timeScale, (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), o))) - e._totalTime > 1e-5) && e.render(o, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (f = (_ = this).rawTime() > e._startTime; _._timeline;)
                    f && _._timeline.smoothChildTiming ? _.totalTime(_._totalTime, !0) : _._gc && _._enabled(!0, !1), _ = _._timeline; return this; }, p.remove = function (t) { if (t instanceof r.a) {
                this._remove(t, !1);
                var e = t._timeline = t.vars.useFrames ? r.a._rootFramesTimeline : r.a._rootTimeline;
                return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this;
            } if (t instanceof Array || t && t.push && n(t)) {
                for (var i = t.length; --i > -1;)
                    this.remove(t[i]);
                return this;
            } return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t); }, p._remove = function (t, e) { return r.c.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this; }, p.append = function (t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)); }, p.insert = p.insertMultiple = function (t, e, i, r) { return this.add(t, e || 0, i, r); }, p.appendMultiple = function (t, e, i, r) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r); }, p.addLabel = function (t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this; }, p.addPause = function (t, e, i, s) { var n = r.f.delayedCall(0, _, i, s || this); return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t); }, p.removeLabel = function (t) { return delete this._labels[t], this; }, p.getLabelTime = function (t) { return null != this._labels[t] ? this._labels[t] : -1; }, p._parseTimeOrLabel = function (t, e, i, s) { var a, o; if (s instanceof r.a && s.timeline === this)
                this.remove(s);
            else if (s && (s instanceof Array || s.push && n(s)))
                for (o = s.length; --o > -1;)
                    s[o] instanceof r.a && s[o].timeline === this && this.remove(s[o]); if (a = "number" != typeof t || e ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e)
                return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - a : 0, i); if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t])
                null == t && (t = a);
            else {
                if (-1 === (o = t.indexOf("=")))
                    return null == this._labels[t] ? i ? this._labels[t] = a + e : e : this._labels[t] + e;
                e = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)), t = o > 1 ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i) : a;
            } return Number(t) + e; }, p.seek = function (t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e); }, p.stop = function () { return this.paused(!0); }, p.gotoAndPlay = function (t, e) { return this.play(t, e); }, p.gotoAndStop = function (t, e) { return this.pause(t, e); }, p.render = function (t, e, i) { this._gc && this._enabled(!0, !1); var r, s, n, l, h, u, _, f, c = this._time, p = this._dirty ? this.totalDuration() : this._totalDuration, d = this._startTime, m = this._timeScale, g = this._paused; if (c !== this._time && (t += this._time - c), t >= p - 1e-8 && t >= 0)
                this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-8 || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, t = p + 1e-4;
            else if (t < 1e-8)
                if (this._totalTime = this._time = 0, t > -1e-8 && (t = 0), (0 !== c || 0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (l = "onReverseComplete", s = this._reversed), t < 0)
                    this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0, l = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, 0 === t && s)
                        for (r = this._first; r && 0 === r._startTime;)
                            r._duration || (s = !1), r = r._next;
                    t = 0, this._initted || (h = !0);
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= c)
                        for (r = this._first; r && r._startTime <= t && !u;)
                            r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (u = r), r = r._next;
                    else
                        for (r = this._last; r && r._startTime >= t && !u;)
                            r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (u = r), r = r._prev;
                    u && (this._time = this._totalTime = t = u._startTime, f = this._startTime + t / this._timeScale);
                }
                this._totalTime = this._time = this._rawPrevTime = t;
            } if (this._time !== c && this._first || i || h || u) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (_ = this._time) >= c)
                    for (r = this._first; r && (n = r._next, _ === this._time && (!this._paused || g));)
                        (r._active || r._startTime <= _ && !r._paused && !r._gc) && (u === r && (this.pause(), this._pauseTime = f), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n;
                else
                    for (r = this._last; r && (n = r._prev, _ === this._time && (!this._paused || g));) {
                        if (r._active || r._startTime <= c && !r._paused && !r._gc) {
                            if (u === r) {
                                for (u = r._prev; u && u.endTime() > this._time;)
                                    u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                u = null, this.pause(), this._pauseTime = f;
                            }
                            r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i);
                        }
                        r = n;
                    }
                this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), l && (this._gc || d !== this._startTime && m === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (s && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)));
            } }, p._hasPausedChild = function () { for (var e = this._first; e;) {
                if (e._paused || e instanceof t && e._hasPausedChild())
                    return !0;
                e = e._next;
            } return !1; }, p.getChildren = function (t, e, i, s) { s = s || -9999999999; for (var n = [], a = this._first, o = 0; a;)
                a._startTime < s || (a instanceof r.f ? !1 !== e && (n[o++] = a) : (!1 !== i && (n[o++] = a), !1 !== t && (o = (n = n.concat(a.getChildren(!0, e, i))).length))), a = a._next; return n; }, p.getTweensOf = function (t, e) { var i, s, n = this._gc, a = [], o = 0; for (n && this._enabled(!0, !0), s = (i = r.f.getTweensOf(t)).length; --s > -1;)
                (i[s].timeline === this || e && this._contains(i[s])) && (a[o++] = i[s]); return n && this._enabled(!1, !0), a; }, p.recent = function () { return this._recent; }, p._contains = function (t) { for (var e = t.timeline; e;) {
                if (e === this)
                    return !0;
                e = e.timeline;
            } return !1; }, p.shiftChildren = function (t, e, i) { i = i || 0; for (var r, s = this._first, n = this._labels; s;)
                s._startTime >= i && (s._startTime += t), s = s._next; if (e)
                for (r in n)
                    n[r] >= i && (n[r] += t); return this._uncache(!0); }, p._kill = function (t, e) { if (!t && !e)
                return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, s = !1; --r > -1;)
                i[r]._kill(t, e) && (s = !0); return s; }, p.clear = function (t) { var e = this.getChildren(!1, !0, !0), i = e.length; for (this._time = this._totalTime = 0; --i > -1;)
                e[i]._enabled(!1, !1); return !1 !== t && (this._labels = {}), this._uncache(!0); }, p.invalidate = function () { for (var t = this._first; t;)
                t.invalidate(), t = t._next; return r.a.prototype.invalidate.call(this); }, p._enabled = function (t, e) { if (t === this._gc)
                for (var i = this._first; i;)
                    i._enabled(t, !0), i = i._next; return r.c.prototype._enabled.call(this, t, e); }, p.totalTime = function (t, e, i) { this._forcingPlayhead = !0; var s = r.a.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, s; }, p.duration = function (t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration); }, p.totalDuration = function (t) { if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, r = 0, s = this, n = s._last, a = 999999999999; n;)
                        e = n._prev, n._dirty && n.totalDuration(), n._startTime > a && s._sortChildren && !n._paused && !s._calculatingDuration ? (s._calculatingDuration = 1, s.add(n, n._startTime - n._delay), s._calculatingDuration = 0) : a = n._startTime, n._startTime < 0 && !n._paused && (r -= n._startTime, s._timeline.smoothChildTiming && (s._startTime += n._startTime / s._timeScale, s._time -= n._startTime, s._totalTime -= n._startTime, s._rawPrevTime -= n._startTime), s.shiftChildren(-n._startTime, !1, -9999999999), a = 0), (i = n._startTime + n._totalDuration / n._timeScale) > r && (r = i), n = e;
                    s._duration = s._totalDuration = r, s._dirty = !1;
                }
                return this._totalDuration;
            } return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this; }, p.paused = function (t) { if (!1 === t && this._paused)
                for (var e = this._first; e;)
                    e._startTime === this._time && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next; return r.a.prototype.paused.apply(this, arguments); }, p.usesFrames = function () { for (var t = this._timeline; t._timeline;)
                t = t._timeline; return t === r.a._rootFramesTimeline; }, p.rawTime = function (t) { return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale; }, t; }), !0);
        var f = r.g.TimelineLite;
        /*!
         * VERSION: 2.1.2
         * DATE: 2019-03-01
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */ r.e._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], (function () { var t = function (t) { f.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0; }, e = r.f._internals, i = e.lazyTweens, s = e.lazyRender, n = r.e._gsDefine.globals, a = new r.b(null, null, 1, 0), o = t.prototype = new f; return o.constructor = t, o.kill()._gc = !1, t.version = "2.1.2", o.invalidate = function () { return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), f.prototype.invalidate.call(this); }, o.addCallback = function (t, e, i, s) { return this.add(r.f.delayedCall(0, t, i, s), e); }, o.removeCallback = function (t, e) { if (t)
            if (null == e)
                this._kill(null, t);
            else
                for (var i = this.getTweensOf(t, !1), r = i.length, s = this._parseTimeOrLabel(e); --r > -1;)
                    i[r]._startTime === s && i[r]._enabled(!1, !1); return this; }, o.removePause = function (t) { return this.removeCallback(f._internals.pauseCallback, t); }, o.tweenTo = function (t, e) { e = e || {}; var i, s, o, l = { ease: a, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 }, h = e.repeat && n.TweenMax || r.f; for (s in e)
            l[s] = e[s]; return l.time = this._parseTimeOrLabel(t), i = Math.abs(Number(l.time) - this._time) / this._timeScale || .001, o = new h(this, i, l), l.onStart = function () { o.target.paused(!0), o.vars.time === o.target.time() || i !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || o, e.onStartParams || []); }, o; }, o.tweenFromTo = function (t, e, i) { i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, i.immediateRender = !1 !== i.immediateRender; var r = this.tweenTo(e, i); return r.isFromTo = 1, r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001); }, o.render = function (t, e, r) { this._gc && this._enabled(!0, !1); var n, a, o, l, h, u, _, f, c, p = this._time, d = this._dirty ? this.totalDuration() : this._totalDuration, m = this._duration, g = this._totalTime, y = this._startTime, v = this._timeScale, T = this._rawPrevTime, x = this._paused, b = this._cycle; if (p !== this._time && (t += this._time - p), t >= d - 1e-8 && t >= 0)
            this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-8 || T < 0 || 1e-8 === T) && T !== t && this._first && (h = !0, T > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, this._yoyo && 1 & this._cycle ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
        else if (t < 1e-8)
            if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, t > -1e-8 && (t = 0), (0 !== p || 0 === m && 1e-8 !== T && (T > 0 || t < 0 && T >= 0) && !this._locked) && (l = "onReverseComplete", a = this._reversed), t < 0)
                this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = a = !0, l = "onReverseComplete") : T >= 0 && this._first && (h = !0), this._rawPrevTime = t;
            else {
                if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-8, 0 === t && a)
                    for (n = this._first; n && 0 === n._startTime;)
                        n._duration || (a = !1), n = n._next;
                t = 0, this._initted || (h = !0);
            }
        else if (0 === m && T < 0 && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, this._cycle && this._cycle === this._totalTime / u && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 1 & this._cycle && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
            if ((t = this._time) >= p || this._repeat && b !== this._cycle)
                for (n = this._first; n && n._startTime <= t && !_;)
                    n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (_ = n), n = n._next;
            else
                for (n = this._last; n && n._startTime >= t && !_;)
                    n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (_ = n), n = n._prev;
            _ && (c = this._startTime + _._startTime / this._timeScale, _._startTime < m && (this._time = this._rawPrevTime = t = _._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)));
        } if (this._cycle !== b && !this._locked) {
            var w = this._yoyo && 0 != (1 & b), P = w === (this._yoyo && 0 != (1 & this._cycle)), O = this._totalTime, S = this._cycle, k = this._rawPrevTime, R = this._time;
            if (this._totalTime = b * m, this._cycle < b ? w = !w : this._totalTime += m, this._time = p, this._rawPrevTime = 0 === m ? T - 1e-4 : T, this._cycle = b, this._locked = !0, p = w ? 0 : m, this.render(p, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), p !== this._time)
                return;
            if (P && (this._cycle = b, this._locked = !0, p = w ? m + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !x)
                return;
            this._time = R, this._totalTime = O, this._cycle = S, this._rawPrevTime = k;
        } if (this._time !== p && this._first || r || h || _) {
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (f = this._time) >= p)
                for (n = this._first; n && (o = n._next, f === this._time && (!this._paused || x));)
                    (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (_ === n && (this.pause(), this._pauseTime = c), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, r) : n.render((t - n._startTime) * n._timeScale, e, r)), n = o;
            else
                for (n = this._last; n && (o = n._prev, f === this._time && (!this._paused || x));) {
                    if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                        if (_ === n) {
                            for (_ = n._prev; _ && _.endTime() > this._time;)
                                _.render(_._reversed ? _.totalDuration() - (t - _._startTime) * _._timeScale : (t - _._startTime) * _._timeScale, e, r), _ = _._prev;
                            _ = null, this.pause(), this._pauseTime = c;
                        }
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, r) : n.render((t - n._startTime) * n._timeScale, e, r);
                    }
                    n = o;
                }
            this._onUpdate && (e || (i.length && s(), this._callback("onUpdate"))), l && (this._locked || this._gc || y !== this._startTime && v === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (a && (i.length && s(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)));
        }
        else
            g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")); }, o.getActive = function (t, e, i) { var r, s, n = [], a = this.getChildren(t || null == t, e || null == t, !!i), o = 0, l = a.length; for (r = 0; r < l; r++)
            (s = a[r]).isActive() && (n[o++] = s); return n; }, o.getLabelAfter = function (t) { t || 0 !== t && (t = this._time); var e, i = this.getLabelsArray(), r = i.length; for (e = 0; e < r; e++)
            if (i[e].time > t)
                return i[e].name; return null; }, o.getLabelBefore = function (t) { null == t && (t = this._time); for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
            if (e[i].time < t)
                return e[i].name; return null; }, o.getLabelsArray = function () { var t, e = [], i = 0; for (t in this._labels)
            e[i++] = { time: this._labels[t], name: t }; return e.sort((function (t, e) { return t.time - e.time; })), e; }, o.invalidate = function () { return this._locked = !1, f.prototype.invalidate.call(this); }, o.progress = function (t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0; }, o.totalProgress = function (t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0; }, o.totalDuration = function (t) { return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (f.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration); }, o.time = function (t, e) { if (!arguments.length)
            return this._time; this._dirty && this.totalDuration(); var i = this._duration, r = this._cycle, s = r * (i + this._repeatDelay); return t > i && (t = i), this.totalTime(this._yoyo && 1 & r ? i - t + s : this._repeat ? t + s : t, e); }, o.repeat = function (t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat; }, o.repeatDelay = function (t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay; }, o.yoyo = function (t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo; }, o.currentLabel = function (t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8); }, t; }), !0);
        var c = r.g.TimelineMax, p = 180 / Math.PI, d = [], m = [], g = [], y = {}, v = r.e._gsDefine.globals, T = function (t, e, i, r) { i === r && (i = r - (r - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = r, this.da = r - t, this.ca = i - t, this.ba = e - t; }, x = function (t, e, i, r) { var s = { a: t }, n = {}, a = {}, o = { c: r }, l = (t + e) / 2, h = (e + i) / 2, u = (i + r) / 2, _ = (l + h) / 2, f = (h + u) / 2, c = (f - _) / 8; return s.b = l + (t - l) / 4, n.b = _ + c, s.c = n.a = (s.b + n.b) / 2, n.c = a.a = (_ + f) / 2, a.b = f - c, o.b = u + (r - u) / 4, a.c = o.a = (a.b + o.b) / 2, [s, n, a, o]; }, b = function (t, e, i, r, s) { var n, a, o, l, h, u, _, f, c, p, y, v, T, b = t.length - 1, w = 0, P = t[0].a; for (n = 0; n < b; n++)
            a = (h = t[w]).a, o = h.d, l = t[w + 1].d, s ? (y = d[n], T = ((v = m[n]) + y) * e * .25 / (r ? .5 : g[n] || .5), f = o - ((u = o - (o - a) * (r ? .5 * e : 0 !== y ? T / y : 0)) + (((_ = o + (l - o) * (r ? .5 * e : 0 !== v ? T / v : 0)) - u) * (3 * y / (y + v) + .5) / 4 || 0))) : f = o - ((u = o - (o - a) * e * .5) + (_ = o + (l - o) * e * .5)) / 2, u += f, _ += f, h.c = c = u, h.b = 0 !== n ? P : P = h.a + .6 * (h.c - h.a), h.da = o - a, h.ca = c - a, h.ba = P - a, i ? (p = x(a, P, c, o), t.splice(w, 1, p[0], p[1], p[2], p[3]), w += 4) : w++, P = _; (h = t[w]).b = P, h.c = P + .4 * (h.d - P), h.da = h.d - h.a, h.ca = h.c - h.a, h.ba = P - h.a, i && (p = x(h.a, P, h.c, h.d), t.splice(w, 1, p[0], p[1], p[2], p[3])); }, w = function (t, e, i, r) { var s, n, a, o, l, h, u = []; if (r)
            for (n = (t = [r].concat(t)).length; --n > -1;)
                "string" == typeof (h = t[n][e]) && "=" === h.charAt(1) && (t[n][e] = r[e] + Number(h.charAt(0) + h.substr(2))); if ((s = t.length - 2) < 0)
            return u[0] = new T(t[0][e], 0, 0, t[0][e]), u; for (n = 0; n < s; n++)
            a = t[n][e], o = t[n + 1][e], u[n] = new T(a, 0, 0, o), i && (l = t[n + 2][e], d[n] = (d[n] || 0) + (o - a) * (o - a), m[n] = (m[n] || 0) + (l - o) * (l - o)); return u[n] = new T(t[n][e], 0, 0, t[n + 1][e]), u; }, P = function (t, e, i, r, s, n) { var a, o, l, h, u, _, f, c, p = {}, v = [], T = n || t[0]; for (o in s = "string" == typeof s ? "," + s + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0])
            v.push(o); if (t.length > 1) {
            for (c = t[t.length - 1], f = !0, a = v.length; --a > -1;)
                if (o = v[a], Math.abs(T[o] - c[o]) > .05) {
                    f = !1;
                    break;
                }
            f && (t = t.concat(), n && t.unshift(n), t.push(t[1]), n = t[t.length - 3]);
        } for (d.length = m.length = g.length = 0, a = v.length; --a > -1;)
            o = v[a], y[o] = -1 !== s.indexOf("," + o + ","), p[o] = w(t, o, y[o], n); for (a = d.length; --a > -1;)
            d[a] = Math.sqrt(d[a]), m[a] = Math.sqrt(m[a]); if (!r) {
            for (a = v.length; --a > -1;)
                if (y[o])
                    for (_ = (l = p[v[a]]).length - 1, h = 0; h < _; h++)
                        u = l[h + 1].da / m[h] + l[h].da / d[h] || 0, g[h] = (g[h] || 0) + u * u;
            for (a = g.length; --a > -1;)
                g[a] = Math.sqrt(g[a]);
        } for (a = v.length, h = i ? 4 : 1; --a > -1;)
            l = p[o = v[a]], b(l, e, i, r, y[o]), f && (l.splice(0, h), l.splice(l.length - h, h)); return p; }, O = function (t, e, i) { for (var r, s, n, a, o, l, h, u, _, f, c, p = 1 / i, d = t.length; --d > -1;)
            for (n = (f = t[d]).a, a = f.d - n, o = f.c - n, l = f.b - n, r = s = 0, u = 1; u <= i; u++)
                r = s - (s = ((h = p * u) * h * a + 3 * (_ = 1 - h) * (h * o + _ * l)) * h), e[c = d * i + u - 1] = (e[c] || 0) + r * r; }, S = r.e._gsDefine.plugin({ propName: "bezier", priority: -1, version: "1.3.8", API: 2, global: !0, init: function (t, e, i) { this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10); var r, s, n, a, o, l = e.values || [], h = {}, u = l[0], _ = e.autoRotate || i.vars.orientToBezier; for (r in this._autoRotate = _ ? _ instanceof Array ? _ : [["x", "y", "rotation", !0 === _ ? 0 : Number(_) || 0]] : null, u)
                this._props.push(r); for (n = this._props.length; --n > -1;)
                r = this._props[n], this._overwriteProps.push(r), s = this._func[r] = "function" == typeof t[r], h[r] = s ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), o || h[r] !== l[0][r] && (o = h); if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? P(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : function (t, e, i) { var r, s, n, a, o, l, h, u, _, f, c, p = {}, d = "cubic" === (e = e || "soft") ? 3 : 2, m = "soft" === e, g = []; if (m && i && (t = [i].concat(t)), null == t || t.length < d + 1)
                throw "invalid Bezier data"; for (_ in t[0])
                g.push(_); for (l = g.length; --l > -1;) {
                for (p[_ = g[l]] = o = [], f = 0, u = t.length, h = 0; h < u; h++)
                    r = null == i ? t[h][_] : "string" == typeof (c = t[h][_]) && "=" === c.charAt(1) ? i[_] + Number(c.charAt(0) + c.substr(2)) : Number(c), m && h > 1 && h < u - 1 && (o[f++] = (r + o[f - 2]) / 2), o[f++] = r;
                for (u = f - d + 1, f = 0, h = 0; h < u; h += d)
                    r = o[h], s = o[h + 1], n = o[h + 2], a = 2 === d ? 0 : o[h + 3], o[f++] = c = 3 === d ? new T(r, s, n, a) : new T(r, (2 * s + r) / 3, (2 * s + n) / 3, n);
                o.length = f;
            } return p; }(l, e.type, h), this._segCount = this._beziers[r].length, this._timeRes) {
                var f = function (t, e) { var i, r, s, n, a = [], o = [], l = 0, h = 0, u = (e = e >> 0 || 6) - 1, _ = [], f = []; for (i in t)
                    O(t[i], a, e); for (s = a.length, r = 0; r < s; r++)
                    l += Math.sqrt(a[r]), f[n = r % e] = l, n === u && (h += l, _[n = r / e >> 0] = f, o[n] = h, l = 0, f = []); return { length: h, lengths: o, segments: _ }; }(this._beziers, this._timeRes);
                this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
            } if (_ = this._autoRotate)
                for (this._initialRotations = [], _[0] instanceof Array || (this._autoRotate = _ = [_]), n = _.length; --n > -1;) {
                    for (a = 0; a < 3; a++)
                        r = _[n][a], this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                    r = _[n][2], this._initialRotations[n] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0, this._overwriteProps.push(r);
                } return this._startRatio = i.vars.runBackwards ? 1 : 0, !0; }, set: function (t) { var e, i, r, s, n, a, o, l, h, u, _ = this._segCount, f = this._func, c = this._target, d = t !== this._startRatio; if (this._timeRes) {
                if (h = this._lengths, u = this._curSeg, t *= this._length, r = this._li, t > this._l2 && r < _ - 1) {
                    for (l = _ - 1; r < l && (this._l2 = h[++r]) <= t;)
                        ;
                    this._l1 = h[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0];
                }
                else if (t < this._l1 && r > 0) {
                    for (; r > 0 && (this._l1 = h[--r]) >= t;)
                        ;
                    0 === r && t < this._l1 ? this._l1 = 0 : r++, this._l2 = h[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si];
                }
                if (e = r, t -= this._l1, r = this._si, t > this._s2 && r < u.length - 1) {
                    for (l = u.length - 1; r < l && (this._s2 = u[++r]) <= t;)
                        ;
                    this._s1 = u[r - 1], this._si = r;
                }
                else if (t < this._s1 && r > 0) {
                    for (; r > 0 && (this._s1 = u[--r]) >= t;)
                        ;
                    0 === r && t < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r;
                }
                a = (r + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
            }
            else
                a = (t - (e = t < 0 ? 0 : t >= 1 ? _ - 1 : _ * t >> 0) * (1 / _)) * _; for (i = 1 - a, r = this._props.length; --r > -1;)
                s = this._props[r], o = (a * a * (n = this._beziers[s][e]).da + 3 * i * (a * n.ca + i * n.ba)) * a + n.a, this._mod[s] && (o = this._mod[s](o, c)), f[s] ? c[s](o) : c[s] = o; if (this._autoRotate) {
                var m, g, y, v, T, x, b, w = this._autoRotate;
                for (r = w.length; --r > -1;)
                    s = w[r][2], x = w[r][3] || 0, b = !0 === w[r][4] ? 1 : p, n = this._beziers[w[r][0]], m = this._beziers[w[r][1]], n && m && (n = n[e], m = m[e], g = n.a + (n.b - n.a) * a, g += ((v = n.b + (n.c - n.b) * a) - g) * a, v += (n.c + (n.d - n.c) * a - v) * a, y = m.a + (m.b - m.a) * a, y += ((T = m.b + (m.c - m.b) * a) - y) * a, T += (m.c + (m.d - m.c) * a - T) * a, o = d ? Math.atan2(T - y, v - g) * b + x : this._initialRotations[r], this._mod[s] && (o = this._mod[s](o, c)), f[s] ? c[s](o) : c[s] = o);
            } } }), k = S.prototype;
        /*!
         * VERSION: 1.3.8
         * DATE: 2018-05-30
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         **/ S.bezierThrough = P, S.cubicToQuadratic = x, S._autoCSS = !0, S.quadraticToCubic = function (t, e, i) { return new T(t, (2 * e + t) / 3, (2 * e + i) / 3, i); }, S._cssRegister = function () { var t = v.CSSPlugin; if (t) {
            var e = t._internals, i = e._parseToProxy, r = e._setPluginRatio, s = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", { parser: function (t, e, n, a, o, l) { e instanceof Array && (e = { values: e }), l = new S; var h, u, _, f = e.values, c = f.length - 1, p = [], d = {}; if (c < 0)
                    return o; for (h = 0; h <= c; h++)
                    _ = i(t, f[h], a, o, l, c !== h), p[h] = _.end; for (u in e)
                    d[u] = e[u]; return d.values = p, (o = new s(t, "bezier", 0, 0, _.pt, 2)).data = _, o.plugin = l, o.setRatio = r, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (h = !0 === d.autoRotate ? 0 : Number(d.autoRotate), d.autoRotate = null != _.end.left ? [["left", "top", "rotation", h, !1]] : null != _.end.x && [["x", "y", "rotation", h, !1]]), d.autoRotate && (a._transform || a._enableTransforms(!1), _.autoRotate = a._target._gsTransform, _.proxy.rotation = _.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(_.proxy, d, a._tween), o; } });
        } }, k._mod = function (t) { for (var e, i = this._overwriteProps, r = i.length; --r > -1;)
            (e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e); }, k._kill = function (t) { var e, i, r = this._props; for (e in this._beziers)
            if (e in t)
                for (delete this._beziers[e], delete this._func[e], i = r.length; --i > -1;)
                    r[i] === e && r.splice(i, 1); if (r = this._autoRotate)
            for (i = r.length; --i > -1;)
                t[r[i][2]] && r.splice(i, 1); return this._super._kill.call(this, t); },
            /*!
             * VERSION: 1.16.1
             * DATE: 2018-08-27
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             **/
            r.e._gsDefine("easing.Back", ["easing.Ease"], (function () { var t, e, i, s, n = r.e.GreenSockGlobals || r.e, a = n.com.greensock, o = 2 * Math.PI, l = Math.PI / 2, h = a._class, u = function (t, e) { var i = h("easing." + t, (function () { }), !0), s = i.prototype = new r.b; return s.constructor = i, s.getRatio = e, i; }, _ = r.b.register || function () { }, f = function (t, e, i, r, s) { var n = h("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new r }, !0); return _(n, t), n; }, c = function (t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t); }, p = function (t, e) { var i = h("easing." + t, (function (t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1; }), !0), s = i.prototype = new r.b; return s.constructor = i, s.getRatio = e, s.config = function (t) { return new i(t); }, i; }, d = f("Back", p("BackOut", (function (t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1; })), p("BackIn", (function (t) { return t * t * ((this._p1 + 1) * t - this._p1); })), p("BackInOut", (function (t) { return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2); }))), m = h("easing.SlowMo", (function (t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i; }), !0), g = m.prototype = new r.b; return g.constructor = m, g.getRatio = function (t) { var e = t + (.5 - t) * this._p; return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e; }, m.ease = new m(.7, .7), g.config = m.config = function (t, e, i) { return new m(t, e, i); }, (g = (t = h("easing.SteppedEase", (function (t, e) { t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0; }), !0)).prototype = new r.b).constructor = t, g.getRatio = function (t) { return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1; }, g.config = t.config = function (e, i) { return new t(e, i); }, (g = (e = h("easing.ExpoScaleEase", (function (t, e, i) { this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i; }), !0)).prototype = new r.b).constructor = e, g.getRatio = function (t) { return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2; }, g.config = e.config = function (t, i, r) { return new e(t, i, r); }, (g = (i = h("easing.RoughEase", (function (t) { for (var e, i, s, n, a, o, l = (t = t || {}).taper || "none", h = [], u = 0, _ = 0 | (t.points || 20), f = _, p = !1 !== t.randomize, d = !0 === t.clamp, m = t.template instanceof r.b ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --f > -1;)
                e = p ? Math.random() : 1 / _ * f, i = m ? m.getRatio(e) : e, s = "none" === l ? g : "out" === l ? (n = 1 - e) * n * g : "in" === l ? e * e * g : e < .5 ? (n = 2 * e) * n * .5 * g : (n = 2 * (1 - e)) * n * .5 * g, p ? i += Math.random() * s - .5 * s : f % 2 ? i += .5 * s : i -= .5 * s, d && (i > 1 ? i = 1 : i < 0 && (i = 0)), h[u++] = { x: e, y: i }; for (h.sort((function (t, e) { return t.x - e.x; })), o = new c(1, 1, null), f = _; --f > -1;)
                a = h[f], o = new c(a.x, a.y, o); this._prev = new c(0, 0, 0 !== o.t ? o : o.next); }), !0)).prototype = new r.b).constructor = i, g.getRatio = function (t) { var e = this._prev; if (t > e.t) {
                for (; e.next && t >= e.t;)
                    e = e.next;
                e = e.prev;
            }
            else
                for (; e.prev && t <= e.t;)
                    e = e.prev; return this._prev = e, e.v + (t - e.t) / e.gap * e.c; }, g.config = function (t) { return new i(t); }, i.ease = new i, f("Bounce", u("BounceOut", (function (t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375; })), u("BounceIn", (function (t) { return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375); })), u("BounceInOut", (function (t) { var e = t < .5; return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5; }))), f("Circ", u("CircOut", (function (t) { return Math.sqrt(1 - (t -= 1) * t); })), u("CircIn", (function (t) { return -(Math.sqrt(1 - t * t) - 1); })), u("CircInOut", (function (t) { return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1); }))), f("Elastic", (s = function (t, e, i) { var s = h("easing." + t, (function (t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2; }), !0), n = s.prototype = new r.b; return n.constructor = s, n.getRatio = e, n.config = function (t, e) { return new s(t, e); }, s; })("ElasticOut", (function (t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1; }), .3), s("ElasticIn", (function (t) { return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2); }), .3), s("ElasticInOut", (function (t) { return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1; }), .45)), f("Expo", u("ExpoOut", (function (t) { return 1 - Math.pow(2, -10 * t); })), u("ExpoIn", (function (t) { return Math.pow(2, 10 * (t - 1)) - .001; })), u("ExpoInOut", (function (t) { return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))); }))), f("Sine", u("SineOut", (function (t) { return Math.sin(t * l); })), u("SineIn", (function (t) { return 1 - Math.cos(t * l); })), u("SineInOut", (function (t) { return -.5 * (Math.cos(Math.PI * t) - 1); }))), h("easing.EaseLookup", { find: function (t) { return r.b.map[t]; } }, !0), _(n.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(t, "SteppedEase", "ease,"), d; }), !0);
        var R = r.g.Back, C = r.g.Elastic, A = r.g.Bounce, M = r.g.RoughEase, D = r.g.SlowMo, F = r.g.SteppedEase, z = r.g.Circ, E = r.g.Expo, X = r.g.Sine, I = r.g.ExpoScaleEase, L = s;
        L._autoActivated = [f, c, n, a, S, o, _, R, C, A, M, D, F, z, E, X, I];
        /*!
         * VERSION: 2.1.2
         * DATE: 2019-03-01
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         **/
        var N = function () { function t() { this.centerY = 0, this.centerX = 0, this.pointerY = 0, this.pointerX = 0, this.padDown = !1, L.selector = document.querySelectorAll; var t = document.getElementById("pad"); if (t) {
            var e = this.getCoords(t);
            this.centerY = e.top + e.height / 2, this.centerX = e.left + e.width / 2, document.onmouseup = this.mouseUp, document.onmousemove = this.handleMouseMove, t.onmousedown = this.padMouseDown;
        } } return t.prototype.mouseUp = function () { this.padDown = !1, L.to("#pad", .5, { left: 0, bottom: 0 }); }, t.prototype.padMouseDown = function (t) { this.padDown = !0; }, t.prototype.mouseMoved = function () { if (this.padDown) {
            var t = this.pointerX - this.centerX, e = this.centerY - this.pointerY;
            L.to("#pad", .25, { left: t, bottom: e });
        } }, t.prototype.handleMouseMove = function (t) { var e, i, r; (t = t || window.event) && null == t.pageX && null != t.clientX && (i = (e = t.target && t.target.ownerDocument || document).documentElement, r = e.body, t.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), this.pointerX = t.pageX, this.pointerY = t.pageY; }, t.prototype.getCoords = function (t) { var e = t.getBoundingClientRect(); return { bottom: e.bottom, height: e.height, left: e.left, right: e.right, top: e.top, width: e.width, doctop: e.top + pageYOffset, docleft: e.left + pageXOffset }; }, t; }();
        document.onload = function () { console.log("happen"), new N; };
    }]);
//# sourceMappingURL=bundle.js.map