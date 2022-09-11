! function(e, t) {
    function n(e, t) {
        return t.toUpperCase()
    }

    function r(e) {
        !s.addEventListener && "load" !== e.type && "complete" !== s.readyState || (q(), w.ready())
    }
    var i, o, a = typeof t,
        s = e.document,
        u = e.location,
        l = e.jQuery,
        c = e.$,
        f = {},
        p = [],
        d = "1.9.1",
        h = p.concat,
        g = p.push,
        m = p.slice,
        y = p.indexOf,
        v = f.toString,
        b = f.hasOwnProperty,
        x = d.trim,
        w = function(e, t) {
            return new w.fn.init(e, t, o)
        },
        T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        N = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        k = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        A = /(?:^|:|,)(?:\s*\[)+/g,
        j = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        D = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        L = /^-ms-/,
        H = /-([\da-z])/gi,
        q = function() {
            s.addEventListener ? (s.removeEventListener("DOMContentLoaded", r, !1), e.removeEventListener("load", r, !1)) : (s.detachEvent("onreadystatechange", r), e.detachEvent("onload", r))
        };

    function M(e) {
        var t = e.length,
            n = w.type(e);
        return !w.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || "function" !== n && (0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
    w.fn = w.prototype = {
        jquery: d,
        constructor: w,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this));
            if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : k.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
            if (i[1]) {
                if (n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : s, !0)), E.test(i[1]) && w.isPlainObject(n))
                    for (i in n) w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                return this
            }
            if ((o = s.getElementById(i[2])) && o.parentNode) {
                if (o.id !== i[2]) return r.find(e);
                this.length = 1, this[0] = o
            }
            return this.context = s, this.selector = e, this
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return m.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return w.each(this, e, t)
        },
        ready: function(e) {
            return w.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(m.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(w.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: g,
        sort: [].sort,
        splice: [].splice
    }, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || w.isFunction(s) || (s = {}), l === u && (s = this, --u); u < l; u++)
            if (null != (o = arguments[u]))
                for (i in o) e = s[i], s !== (r = o[i]) && (c && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (a = n ? (n = !1, e && w.isArray(e) ? e : []) : e && w.isPlainObject(e) ? e : {}, s[i] = w.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, w.extend({
        noConflict: function(t) {
            return e.$ === w && (e.$ = c), t && e.jQuery === w && (e.jQuery = l), w
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? w.readyWait++ : w.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? !--w.readyWait : !w.isReady) {
                if (!s.body) return setTimeout(w.ready);
                (w.isReady = !0) !== e && 0 < --w.readyWait || (i.resolveWith(s, [w]), w.fn.trigger && w(s).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === w.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === w.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? f[v.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== w.type(e) || e.nodeType || w.isWindow(e)) return !1;
            try {
                if (e.constructor && !b.call(e, "constructor") && !b.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            var n;
            for (n in e);
            return n === t || b.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || s;
            var r = E.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], r.childNodes))
        },
        parseJSON: function(t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = w.trim(t)) && S.test(t.replace(j, "@").replace(D, "]").replace(A, "")) ? new Function("return " + t)() : void w.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? r = (new DOMParser).parseFromString(n, "text/xml") : ((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", r.loadXML(n))
            } catch (n) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && w.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(L, "ms-").replace(H, n)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r = 0,
                i = e.length,
                o = M(e);
            if (n) {
                if (o)
                    for (; r < i && !1 !== t.apply(e[r], n); r++);
                else
                    for (r in e)
                        if (!1 === t.apply(e[r], n)) break
            } else if (o)
                for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: x && !x.call("\ufeff ") ? function(e) {
            return null == e ? "" : x.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : g.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (y) return y.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; o < r; o++) e[i++] = n[o];
            else
                for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r = [],
                i = 0,
                o = e.length;
            for (n = !!n; i < o; i++) n !== !!t(e[i], i) && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = [];
            if (M(e))
                for (; i < o; i++) null != (r = t(e[i], i, n)) && (a[a.length] = r);
            else
                for (i in e) null != (r = t(e[i], i, n)) && (a[a.length] = r);
            return h.apply([], a)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), w.isFunction(e) ? (r = m.call(arguments, 2), (i = function() {
                return e.apply(n || this, r.concat(m.call(arguments)))
            }).guid = e.guid = e.guid || w.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === w.type(r))
                for (u in o = !0, r) w.access(e, n, u, r[u], !0, a, s);
            else if (i !== t && (o = !0, w.isFunction(i) || (s = !0), c && (n = s ? (n.call(e, i), null) : (c = n, function(e, t, n) {
                    return c.call(w(e), n)
                })), n))
                for (; u < l; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }), w.ready.promise = function(t) {
        if (!i)
            if (i = w.Deferred(), "complete" === s.readyState) setTimeout(w.ready);
            else if (s.addEventListener) s.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", r, !1);
        else {
            s.attachEvent("onreadystatechange", r), e.attachEvent("onload", r);
            var n = !1;
            try {
                n = null == e.frameElement && s.documentElement
            } catch (t) {}
            n && n.doScroll && function e() {
                if (!w.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(e, 50)
                    }
                    q(), w.ready()
                }
            }()
        }
        return i.promise(t)
    }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    })), o = w(s);
    var _ = {};
    w.Callbacks = function(e) {
        e = "string" == typeof e ? _[e] || function(e) {
            var t = _[e] = {};
            return w.each(e.match(N) || [], (function(e, n) {
                t[n] = !0
            })), t
        }(e) : w.extend({}, e);
        var n, r, i, o, a, s, u = [],
            l = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && a < o; a++)
                    if (!1 === u[a].apply(t[0], t[1]) && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        ! function t(n) {
                            w.each(n, (function(n, r) {
                                var i = w.type(r);
                                "function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
                            }))
                        }(arguments), n ? o = u.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return u && w.each(arguments, (function(e, t) {
                        for (var r; - 1 < (r = w.inArray(t, u, r));) u.splice(r, 1), n && (r <= o && o--, r <= a && a--)
                    })), this
                },
                has: function(e) {
                    return e ? -1 < w.inArray(e, u) : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], this
                },
                disable: function() {
                    return u = l = r = t, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = t, r || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return t = [e, (t = t || []).slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return f
    }, w.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", w.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return w.Deferred((function(n) {
                            w.each(t, (function(t, o) {
                                var a = o[0],
                                    s = w.isFunction(e[t]) && e[t];
                                i[o[1]]((function() {
                                    var e = s && s.apply(this, arguments);
                                    e && w.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, w.each(t, (function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add((function() {
                    n = s
                }), t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            })), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            function t(e, t, r) {
                return function(i) {
                    t[e] = this, r[e] = 1 < arguments.length ? m.call(arguments) : i, r === n ? l.notifyWith(t, r) : --u || l.resolveWith(t, r)
                }
            }
            var n, r, i, o = 0,
                a = m.call(arguments),
                s = a.length,
                u = 1 !== s || e && w.isFunction(e.promise) ? s : 0,
                l = 1 === u ? e : w.Deferred();
            if (1 < s)
                for (n = new Array(s), r = new Array(s), i = new Array(s); o < s; o++) a[o] && w.isFunction(a[o].promise) ? a[o].promise().done(t(o, i, a)).fail(l.reject).progress(t(o, r, n)) : --u;
            return u || l.resolveWith(i, a), l.promise()
        }
    }), w.support = function() {
        var t, n, r, i, o, u, l, c, f, p, d = s.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        l = (o = s.createElement("select")).appendChild(s.createElement("option")), i = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!i.value,
            optSelected: l.selected,
            enctype: !!s.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === s.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !l.disabled;
        try {
            delete d.test
        } catch (n) {
            t.deleteExpando = !1
        }
        for (p in (i = s.createElement("input")).setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), (u = s.createDocumentFragment()).appendChild(i), t.appendChecked = i.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", (function() {
                t.noCloneEvent = !1
            })), d.cloneNode(!0).click()), {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(c = "on" + p, "t"), t[p + "Bubbles"] = c in e || !1 === d.attributes[c].expando;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, w((function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                u = s.getElementsByTagName("body")[0];
            u && ((n = s.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (i = d.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", f = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = f && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, (r = d.appendChild(s.createElement("div"))).style.cssText = d.style.cssText = o, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== a && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = i = r = null)
        })), n = o = u = l = r = i = null, t
    }();
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        O = /([A-Z])/g;

    function B(e, n, r, i) {
        if (w.acceptData(e)) {
            var o, a, s = w.expando,
                u = "string" == typeof n,
                l = e.nodeType,
                c = l ? w.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = p.pop() || w.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = w.noop)), "object" != typeof n && "function" != typeof n || (i ? c[f] = w.extend(c[f], n) : c[f].data = w.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[w.camelCase(n)] = r), u ? null == (a = o[n]) && (a = o[w.camelCase(n)]) : a = o, a
        }
    }

    function P(e, t, n) {
        if (w.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                s = a ? w.cache : e,
                u = a ? e[w.expando] : w.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    for ((r = 0, i = (t = w.isArray(t) ? t.concat(w.map(t, w.camelCase)) : t in o || (t = w.camelCase(t)) in o ? [t] : t.split(" ")).length); r < i; r++) delete o[t[r]];
                    if (!(n ? W : w.isEmptyObject)(o)) return
                }(n || (delete s[u].data, W(s[u]))) && (a ? w.cleanData([e], !0) : w.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
            }
        }
    }

    function R(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(O, "-$1").toLowerCase();
            if ("string" == typeof(r = e.getAttribute(i))) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : F.test(r) ? w.parseJSON(r) : r)
                } catch (e) {}
                w.data(e, n, r)
            } else r = t
        }
        return r
    }

    function W(e) {
        var t;
        for (t in e)
            if (("data" !== t || !w.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    w.extend({
        cache: {},
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando]) && !W(e)
        },
        data: function(e, t, n) {
            return B(e, t, n)
        },
        removeData: function(e, t) {
            return P(e, t)
        },
        _data: function(e, t, n) {
            return B(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return P(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t
        }
    }), w.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
                a = 0,
                s = null;
            if (e !== t) return "object" == typeof e ? this.each((function() {
                w.data(this, e)
            })) : w.access(this, (function(n) {
                if (n === t) return o ? R(o, e, w.data(o, e)) : null;
                this.each((function() {
                    w.data(this, e, n)
                }))
            }), null, n, 1 < arguments.length, null, !0);
            if (this.length && (s = w.data(o), 1 === o.nodeType && !w._data(o, "parsedAttrs"))) {
                for (r = o.attributes; a < r.length; a++)(i = r[a].name).indexOf("data-") || (i = w.camelCase(i.slice(5)), R(o, i, s[i]));
                w._data(o, "parsedAttrs", !0)
            }
            return s
        },
        removeData: function(e) {
            return this.each((function() {
                w.removeData(this, e)
            }))
        }
    }), w.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = w._data(e, t), n && (!r || w.isArray(n) ? r = w._data(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), (o.cur = i) && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                w.dequeue(e, t)
            }), o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return w._data(e, n) || w._data(e, n, {
                empty: w.Callbacks("once memory").add((function() {
                    w._removeData(e, t + "queue"), w._removeData(e, n)
                }))
            })
        }
    }), w.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? w.queue(this[0], e) : n === t ? this : this.each((function() {
                var t = w.queue(this, e, n);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && w.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                w.dequeue(this, e)
            }))
        },
        delay: function(e, t) {
            return e = w.fx && w.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            function r() {
                --o || a.resolveWith(s, [s])
            }
            var i, o = 1,
                a = w.Deferred(),
                s = this,
                u = this.length;
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; u--;)(i = w._data(s[u], e + "queueHooks")) && i.empty && (o++, i.empty.add(r));
            return r(), a.promise(n)
        }
    });
    var $, I, z = /[\t\r\n]/g,
        X = /\r/g,
        U = /^(?:input|select|textarea|button|object)$/i,
        V = /^(?:a|area)$/i,
        Y = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        J = /^(?:checked|selected)$/i,
        G = w.support.getSetAttribute,
        Q = w.support.input;
    w.fn.extend({
        attr: function(e, t) {
            return w.access(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each((function() {
                w.removeAttr(this, e)
            }))
        },
        prop: function(e, t) {
            return w.access(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = w.propFix[e] || e, this.each((function() {
                try {
                    this[e] = t, delete this[e]
                } catch (e) {}
            }))
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (w.isFunction(e)) return this.each((function(t) {
                w(this).addClass(e.call(this, t, this.className))
            }));
            if (u)
                for (t = (e || "").match(N) || []; a < s; a++)
                    if (r = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(z, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = w.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (w.isFunction(e)) return this.each((function(t) {
                w(this).removeClass(e.call(this, t, this.className))
            }));
            if (u)
                for (t = (e || "").match(N) || []; a < s; a++)
                    if (r = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(z, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; 0 <= r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                        n.className = e ? w.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return w.isFunction(e) ? this.each((function(n) {
                w(this).toggleClass(e.call(this, n, this.className, t), t)
            })) : this.each((function() {
                if ("string" == n)
                    for (var i, o = 0, s = w(this), u = t, l = e.match(N) || []; i = l[o++];) u = r ? u : !s.hasClass(i), s[u ? "addClass" : "removeClass"](i);
                else n !== a && "boolean" != n || (this.className && w._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : w._data(this, "__className__") || "")
            }))
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(z, " ").indexOf(t)) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = w.isFunction(e), this.each((function(n) {
                var o, a = w(this);
                1 === this.nodeType && (null == (o = i ? e.call(this, n, a.val()) : e) ? o = "" : "number" == typeof o ? o += "" : w.isArray(o) && (o = w.map(o, (function(e) {
                    return null == e ? "" : e + ""
                }))), (r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
            }))) : o ? (r = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in r && (n = r.get(o, "value")) !== t ? n : "string" == typeof(n = o.value) ? n.replace(X, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (((n = r[u]).selected || u === i) && (w.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !w.nodeName(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n = w.makeArray(t);
                    return w(e).find("option").each((function() {
                        this.selected = 0 <= w.inArray(w(this).val(), n)
                    })), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === a ? w.prop(e, n, r) : ((o = 1 !== u || !w.isXMLDoc(e)) && (n = n.toLowerCase(), i = w.attrHooks[n] || (Y.test(n) ? I : $)), r === t ? i && o && "get" in i && null !== (s = i.get(e, n)) ? s : (typeof e.getAttribute !== a && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? i && o && "set" in i && (s = i.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : void w.removeAttr(e, n))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(N);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = w.propFix[n] || n, Y.test(n) ? !G && J.test(n) ? e[w.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : w.attr(e, n, ""), e.removeAttribute(G ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!w.support.radioValue && "radio" === t && w.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !w.isXMLDoc(e)) && (n = w.propFix[n] || n, o = w.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : U.test(e.nodeName) || V.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), I = {
        get: function(e, n) {
            var r = w.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? Q && G ? null != i : J.test(n) ? e[w.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && !1 !== o.value ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : Q && G || !J.test(n) ? e.setAttribute(!G && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, Q && G || (w.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return w.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function(e, t, n) {
            if (!w.nodeName(e, "input")) return $ && $.set(e, t, n);
            e.defaultValue = t
        }
    }), G || ($ = w.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, w.attrHooks.contenteditable = {
        get: $.get,
        set: function(e, t, n) {
            $.set(e, "" !== t && t, n)
        }
    }, w.each(["width", "height"], (function(e, t) {
        w.attrHooks[t] = w.extend(w.attrHooks[t], {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        })
    }))), w.support.hrefNormalized || (w.each(["href", "src", "width", "height"], (function(e, n) {
        w.attrHooks[n] = w.extend(w.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    })), w.each(["href", "src"], (function(e, t) {
        w.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }))), w.support.style || (w.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), w.support.optSelected || (w.propHooks.selected = w.extend(w.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), w.support.enctype || (w.propFix.enctype = "encoding"), w.support.checkOn || w.each(["radio", "checkbox"], (function() {
        w.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    })), w.each(["radio", "checkbox"], (function() {
        w.valHooks[this] = w.extend(w.valHooks[this], {
            set: function(e, t) {
                if (w.isArray(t)) return e.checked = 0 <= w.inArray(w(e).val(), t)
            }
        })
    }));
    var K = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        ee = /^(?:mouse|contextmenu)|click/,
        te = /^(?:focusinfocus|focusoutblur)$/,
        ne = /^([^.]*)(?:\.(.+)|)$/;

    function re() {
        return !0
    }

    function ie() {
        return !1
    }
    w.event = {
            global: {},
            add: function(e, n, r, i, o) {
                var s, u, l, c, f, p, d, h, g, m, y, v = w._data(e);
                if (v) {
                    for (r.handler && (r = (c = r).handler, o = c.selector), r.guid || (r.guid = w.guid++), (u = v.events) || (u = v.events = {}), (p = v.handle) || ((p = v.handle = function(e) {
                            return typeof w === a || e && w.event.triggered === e.type ? t : w.event.dispatch.apply(p.elem, arguments)
                        }).elem = e), l = (n = (n || "").match(N) || [""]).length; l--;) g = y = (s = ne.exec(n[l]) || [])[1], m = (s[2] || "").split(".").sort(), f = w.event.special[g] || {}, g = (o ? f.delegateType : f.bindType) || g, f = w.event.special[g] || {}, d = w.extend({
                        type: g,
                        origType: y,
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        needsContext: o && w.expr.match.needsContext.test(o),
                        namespace: m.join(".")
                    }, c), (h = u[g]) || ((h = u[g] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, m, p) || (e.addEventListener ? e.addEventListener(g, p, !1) : e.attachEvent && e.attachEvent("on" + g, p))), f.add && (f.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), w.event.global[g] = !0;
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, m = w.hasData(e) && w._data(e);
                if (m && (c = m.events)) {
                    for (l = (t = (t || "").match(N) || [""]).length; l--;)
                        if (d = g = (s = ne.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                            for (f = w.event.special[d] || {}, p = c[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                            u && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || w.removeEvent(e, d, m.handle), delete c[d])
                        } else
                            for (d in c) w.event.remove(e, d + t[l], n, r, !0);
                    w.isEmptyObject(c) && (delete m.handle, w._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, o) {
                var a, u, l, c, f, p, d, h = [i || s],
                    g = b.call(n, "type") ? n.type : n,
                    m = b.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = p = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !te.test(g + w.event.triggered) && (0 <= g.indexOf(".") && (g = (m = g.split(".")).shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (n = n[w.expando] ? n : new w.Event(g, "object" == typeof n && n)).isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : w.makeArray(r, [n]), f = w.event.special[g] || {}, o || !f.trigger || !1 !== f.trigger.apply(i, r))) {
                    if (!o && !f.noBubble && !w.isWindow(i)) {
                        for (c = f.delegateType || g, te.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), p = l;
                        p === (i.ownerDocument || s) && h.push(p.defaultView || p.parentWindow || e)
                    }
                    for (d = 0;
                        (l = h[d++]) && !n.isPropagationStopped();) n.type = 1 < d ? c : f.bindType || g, (a = (w._data(l, "events") || {})[n.type] && w._data(l, "handle")) && a.apply(l, r), (a = u && l[u]) && w.acceptData(l) && a.apply && !1 === a.apply(l, r) && n.preventDefault();
                    if (n.type = g, !o && !n.isDefaultPrevented() && (!f._default || !1 === f._default.apply(i.ownerDocument, r)) && ("click" !== g || !w.nodeName(i, "a")) && w.acceptData(i) && u && i[g] && !w.isWindow(i)) {
                        (p = i[u]) && (i[u] = null), w.event.triggered = g;
                        try {
                            i[g]()
                        } catch (n) {}
                        w.event.triggered = t, p && (i[u] = p)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = w.event.fix(e);
                var n, r, i, o, a, s, u = m.call(arguments),
                    l = (w._data(this, "events") || {})[e.type] || [],
                    c = w.event.special[e.type] || {};
                if ((u[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (s = w.event.handlers.call(this, e, l), n = 0;
                        (o = s[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, a = 0;
                            (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, (r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) !== t && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [],
                    u = n.delegateCount,
                    l = e.target;
                if (u && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (o = [], a = 0; a < u; a++) o[r = (i = n[a]).selector + " "] === t && (o[r] = i.needsContext ? 0 <= w(r, this).index(l) : w.find(r, this, null, [l]).length), o[r] && o.push(i);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return u < n.length && s.push({
                    elem: this,
                    handlers: n.slice(u)
                }), s
            },
            fix: function(e) {
                if (e[w.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = ee.test(i) ? this.mouseHooks : Z.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new w.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
                return e.target || (e.target = o.srcElement || s), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, a = n.button,
                        u = n.fromElement;
                    return null == e.pageX && null != n.clientX && (o = (i = e.target.ownerDocument || s).documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        if (w.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== s.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === s.activeElement && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = w.extend(new w.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, w.removeEvent = s.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === a && (e[r] = null), e.detachEvent(r, n))
        }, w.Event = function(e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? re : ie) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando] = !0
        }, w.Event.prototype = {
            isDefaultPrevented: ie,
            isPropagationStopped: ie,
            isImmediatePropagationStopped: ie,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = re, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = re, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = re, this.stopPropagation()
            }
        }, w.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, (function(e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = e.relatedTarget,
                        i = e.handleObj;
                    return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), w.support.submitBubbles || (w.event.special.submit = {
            setup: function() {
                if (w.nodeName(this, "form")) return !1;
                w.event.add(this, "click._submit keypress._submit", (function(e) {
                    var n = e.target,
                        r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form : t;
                    r && !w._data(r, "submitBubbles") && (w.event.add(r, "submit._submit", (function(e) {
                        e._submit_bubble = !0
                    })), w._data(r, "submitBubbles", !0))
                }))
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (w.nodeName(this, "form")) return !1;
                w.event.remove(this, "._submit")
            }
        }), w.support.changeBubbles || (w.event.special.change = {
            setup: function() {
                if (K.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (w.event.add(this, "propertychange._change", (function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                })), w.event.add(this, "click._change", (function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
                }))), !1;
                w.event.add(this, "beforeactivate._change", (function(e) {
                    var t = e.target;
                    K.test(t.nodeName) && !w._data(t, "changeBubbles") && (w.event.add(t, "change._change", (function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || w.event.simulate("change", this.parentNode, e, !0)
                    })), w._data(t, "changeBubbles", !0))
                }))
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return w.event.remove(this, "._change"), !K.test(this.nodeName)
            }
        }), w.support.focusinBubbles || w.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            function n(e) {
                w.event.simulate(t, e.target, w.event.fix(e), !0)
            }
            var r = 0;
            w.event.special[t] = {
                setup: function() {
                    0 == r++ && s.addEventListener(e, n, !0)
                },
                teardown: function() {
                    0 == --r && s.removeEventListener(e, n, !0)
                }
            }
        })), w.fn.extend({
            on: function(e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    for (a in "string" != typeof n && (r = r || n, n = t), e) this.on(a, n, r, e[a], o);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = ie;
                else if (!i) return this;
                return 1 === o && (s = i, (i = function(e) {
                    return w().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = w.guid++)), this.each((function() {
                    w.event.add(this, e, i, r, n)
                }))
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof e) return !1 !== n && "function" != typeof n || (r = n, n = t), !1 === r && (r = ie), this.each((function() {
                    w.event.remove(this, e, r, n)
                }));
                for (o in e) this.off(o, n, e[o]);
                return this
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each((function() {
                    w.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0)
            }
        }),
        function(e) {
            var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, m, y, v = "sizzle" + -new Date,
                b = e.document,
                x = {},
                T = 0,
                N = 0,
                C = ee(),
                k = ee(),
                E = ee(),
                S = "undefined",
                A = [],
                j = A.pop,
                D = A.push,
                L = A.slice,
                H = A.indexOf || function(e) {
                    for (var t = 0, n = this.length; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                q = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                _ = M.replace("w", "w#"),
                F = "\\[" + q + "*(" + M + ")" + q + "*(?:([*^$|!~]?=)" + q + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + q + "*\\]",
                O = ":(" + M + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + F.replace(3, 8) + ")*)|.*)\\)|)",
                B = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
                P = new RegExp("^" + q + "*," + q + "*"),
                R = new RegExp("^" + q + "*([\\x20\\t\\r\\n\\f>+~])" + q + "*"),
                W = new RegExp(O),
                $ = new RegExp("^" + _ + "$"),
                I = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + F),
                    PSEUDO: new RegExp("^" + O),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
                },
                z = /[\x20\t\r\n\f]*[+~]/,
                X = /^[^{]+\{\s*\[native code/,
                U = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                V = /^(?:input|select|textarea|button)$/i,
                Y = /^h\d$/i,
                J = /'|\\/g,
                G = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                Q = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                K = function(e, t) {
                    var n = "0x" + t - 65536;
                    return n != n ? t : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                };
            try {
                L.call(b.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                L = function(e) {
                    for (var t, n = []; t = this[e++];) n.push(t);
                    return n
                }
            }

            function Z(e) {
                return X.test(e + "")
            }

            function ee() {
                var e, t = [];
                return e = function(n, i) {
                    return t.push(n += " ") > r.cacheLength && delete e[t.shift()], e[n] = i
                }
            }

            function te(e) {
                return e[v] = !0, e
            }

            function ne(e) {
                var t = c.createElement("div");
                try {
                    return e(t)
                } catch (e) {
                    return !1
                } finally {
                    t = null
                }
            }

            function re(e, t, n, i) {
                var o, s, u, f, h, g, y, w, T, N;
                if ((t ? t.ownerDocument || t : b) !== c && l(t), n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (f = (t = t || c).nodeType) && 9 !== f) return [];
                if (!p && !i) {
                    if (o = U.exec(e))
                        if (u = o[1]) {
                            if (9 === f) {
                                if (!(s = t.getElementById(u)) || !s.parentNode) return n;
                                if (s.id === u) return n.push(s), n
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(u)) && m(t, s) && s.id === u) return n.push(s), n
                        } else {
                            if (o[2]) return D.apply(n, L.call(t.getElementsByTagName(e), 0)), n;
                            if ((u = o[3]) && x.getByClassName && t.getElementsByClassName) return D.apply(n, L.call(t.getElementsByClassName(u), 0)), n
                        }
                    if (x.qsa && !d.test(e)) {
                        if (y = !0, w = v, T = t, N = 9 === f && e, 1 === f && "object" !== t.nodeName.toLowerCase()) {
                            for (g = ue(e), (y = t.getAttribute("id")) ? w = y.replace(J, "\\$&") : t.setAttribute("id", w), w = "[id='" + w + "'] ", h = g.length; h--;) g[h] = w + le(g[h]);
                            T = z.test(e) && t.parentNode || t, N = g.join(",")
                        }
                        if (N) try {
                            return D.apply(n, L.call(T.querySelectorAll(N), 0)), n
                        } catch (e) {} finally {
                            y || t.removeAttribute("id")
                        }
                    }
                }
                return function(e, t, n, i) {
                    var o, s, u, l, c, f = ue(e);
                    if (!i && 1 === f.length) {
                        if (2 < (s = f[0] = f[0].slice(0)).length && "ID" === (u = s[0]).type && 9 === t.nodeType && !p && r.relative[s[1].type]) {
                            if (!(t = r.find.ID(u.matches[0].replace(Q, K), t)[0])) return n;
                            e = e.slice(s.shift().value.length)
                        }
                        for (o = I.needsContext.test(e) ? 0 : s.length; o-- && (u = s[o], !r.relative[l = u.type]);)
                            if ((c = r.find[l]) && (i = c(u.matches[0].replace(Q, K), z.test(s[0].type) && t.parentNode || t))) {
                                if (s.splice(o, 1), !(e = i.length && le(s))) return D.apply(n, L.call(i, 0)), n;
                                break
                            }
                    }
                    return a(e, f)(i, t, p, n, z.test(e)), n
                }(e.replace(B, "$1"), t, n, i)
            }

            function ie(e, t) {
                var n = t && e,
                    r = n && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function oe(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function ae(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function se(e) {
                return te((function(t) {
                    return t = +t, te((function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    }))
                }))
            }
            for (t in o = re.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, l = re.setDocument = function(e) {
                    var t = e ? e.ownerDocument || e : b;
                    return t !== c && 9 === t.nodeType && t.documentElement && (f = (c = t).documentElement, p = o(t), x.tagNameNoComments = ne((function(e) {
                        return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
                    })), x.attributes = ne((function(e) {
                        e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return "boolean" != t && "string" != t
                    })), x.getByClassName = ne((function(e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
                    })), x.getByName = ne((function(e) {
                        e.id = v + 0, e.innerHTML = "<a name='" + v + "'></a><div name='" + v + "'></div>", f.insertBefore(e, f.firstChild);
                        var n = t.getElementsByName && t.getElementsByName(v).length === 2 + t.getElementsByName(v + 0).length;
                        return x.getIdNotName = !t.getElementById(v), f.removeChild(e), n
                    })), r.attrHandle = ne((function(e) {
                        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != S && "#" === e.firstChild.getAttribute("href")
                    })) ? {} : {
                        href: function(e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    }, x.getIdNotName ? (r.find.ID = function(e, t) {
                        if (typeof t.getElementById != S && !p) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, r.filter.ID = function(e) {
                        var t = e.replace(Q, K);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (r.find.ID = function(e, t) {
                        if (typeof t.getElementById != S && !p) {
                            var n = t.getElementById(e);
                            return n ? n.id === e || typeof n.getAttributeNode != S && n.getAttributeNode("id").value === e ? [n] : void 0 : []
                        }
                    }, r.filter.ID = function(e) {
                        var t = e.replace(Q, K);
                        return function(e) {
                            var n = typeof e.getAttributeNode != S && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), r.find.TAG = x.tagNameNoComments ? function(e, t) {
                        if (typeof t.getElementsByTagName != S) return t.getElementsByTagName(e)
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" !== e) return o;
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }, r.find.NAME = x.getByName && function(e, t) {
                        if (typeof t.getElementsByName != S) return t.getElementsByName(name)
                    }, r.find.CLASS = x.getByClassName && function(e, t) {
                        if (typeof t.getElementsByClassName != S && !p) return t.getElementsByClassName(e)
                    }, h = [], d = [":focus"], (x.qsa = Z(t.querySelectorAll)) && (ne((function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + q + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked")
                    })), ne((function(e) {
                        e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + q + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
                    }))), (x.matchesSelector = Z(g = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ne((function(e) {
                        x.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), h.push("!=", O)
                    })), d = new RegExp(d.join("|")), h = new RegExp(h.join("|")), m = Z(f.contains) || f.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, y = f.compareDocumentPosition ? function(e, n) {
                        var r;
                        return e === n ? (s = !0, 0) : (r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === t || m(b, e) ? -1 : n === t || m(b, n) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function(e, n) {
                        var r, i = 0,
                            o = e.parentNode,
                            a = n.parentNode,
                            u = [e],
                            l = [n];
                        if (e === n) return s = !0, 0;
                        if (!o || !a) return e === t ? -1 : n === t ? 1 : o ? -1 : a ? 1 : 0;
                        if (o === a) return ie(e, n);
                        for (r = e; r = r.parentNode;) u.unshift(r);
                        for (r = n; r = r.parentNode;) l.unshift(r);
                        for (; u[i] === l[i];) i++;
                        return i ? ie(u[i], l[i]) : u[i] === b ? -1 : l[i] === b ? 1 : 0
                    }, s = !1, [0, 0].sort(y), x.detectDuplicates = s), c
                }, re.matches = function(e, t) {
                    return re(e, null, null, t)
                }, re.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== c && l(e), t = t.replace(G, "='$1']"), x.matchesSelector && !p && (!h || !h.test(t)) && !d.test(t)) try {
                        var n = g.call(e, t);
                        if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {}
                    return 0 < re(t, c, null, [e]).length
                }, re.contains = function(e, t) {
                    return (e.ownerDocument || e) !== c && l(e), m(e, t)
                }, re.attr = function(e, t) {
                    var n;
                    return (e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = r.attrHandle[t]) ? n(e) : p || x.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && !0 === e[t] ? t : n && n.specified ? n.value : null
                }, re.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, re.uniqueSort = function(e) {
                    var t, n = [],
                        r = 1,
                        i = 0;
                    if (s = !x.detectDuplicates, e.sort(y), s) {
                        for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return e
                }, i = re.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[r]; r++) n += i(t);
                    return n
                }, r = re.selectors = {
                    cacheLength: 50,
                    createPseudo: te,
                    match: I,
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Q, K), e[3] = (e[4] || e[5] || "").replace(Q, K), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[5] && e[2];
                            return I.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ue(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            return "*" === e ? function() {
                                return !0
                            } : (e = e.replace(Q, K).toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                        },
                        CLASS: function(e) {
                            var t = C[e + " "];
                            return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && C(e, (function(e) {
                                return t.test(e.className || typeof e.getAttribute != S && e.getAttribute("class") || "")
                            }))
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = re.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var l, c, f, p, d, h, g = o != a ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    y = s && t.nodeName.toLowerCase(),
                                    b = !u && !s;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = t; f = f[g];)
                                                if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild], a && b) {
                                        for (d = (l = (c = m[v] || (m[v] = {}))[e] || [])[0] === T && l[1], p = l[0] === T && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                            if (1 === f.nodeType && ++p && f === t) {
                                                c[e] = [T, d, p];
                                                break
                                            }
                                    } else if (b && (l = (t[v] || (t[v] = {}))[e]) && l[0] === T) p = l[1];
                                    else
                                        for (;
                                            (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (b && ((f[v] || (f[v] = {}))[e] = [T, p]), f !== t)););
                                    return (p -= i) === r || p % r == 0 && 0 <= p / r
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                            return i[v] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? te((function(e, n) {
                                for (var r, o = i(e, t), a = o.length; a--;) e[r = H.call(e, o[a])] = !(n[r] = o[a])
                            })) : function(e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: te((function(e) {
                            var t = [],
                                n = [],
                                r = a(e.replace(B, "$1"));
                            return r[v] ? te((function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            })) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), !n.pop()
                            }
                        })),
                        has: te((function(e) {
                            return function(t) {
                                return 0 < re(e, t).length
                            }
                        })),
                        contains: te((function(e) {
                            return function(t) {
                                return -1 < (t.textContent || t.innerText || i(t)).indexOf(e)
                            }
                        })),
                        lang: te((function(e) {
                            return $.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(Q, K).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        })),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === f
                        },
                        focus: function(e) {
                            return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Y.test(e.nodeName)
                        },
                        input: function(e) {
                            return V.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: se((function() {
                            return [0]
                        })),
                        last: se((function(e, t) {
                            return [t - 1]
                        })),
                        eq: se((function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        })),
                        even: se((function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        })),
                        odd: se((function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        })),
                        lt: se((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                            return e
                        })),
                        gt: se((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        }))
                    }
                }, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = oe(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = ae(t);

            function ue(e, t) {
                var n, i, o, a, s, u, l, c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s;) {
                    for (a in n && !(i = P.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = R.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(B, " ")
                        }), s = s.slice(n.length)), r.filter) !(i = I[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: a,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? re.error(e) : k(e, u).slice(0)
            }

            function le(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function ce(e, t, r) {
                var i = t.dir,
                    o = r && "parentNode" === i,
                    a = N++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, r, s) {
                    var u, l, c, f = T + " " + a;
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, r, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o)
                                if ((l = (c = t[v] || (t[v] = {}))[i]) && l[0] === f) {
                                    if (!0 === (u = l[1]) || u === n) return !0 === u
                                } else if ((l = c[i] = [f])[1] = e(t, r, s) || n, !0 === l[1]) return !0
                }
            }

            function fe(e) {
                return 1 < e.length ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function pe(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                return a
            }

            function de(e, t, n, r, i, o) {
                return r && !r[v] && (r = de(r)), i && !i[v] && (i = de(i, o)), te((function(o, a, s, u) {
                    var l, c, f, p = [],
                        d = [],
                        h = a.length,
                        g = o || function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
                            return n
                        }(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : pe(g, p, e, s, u),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, u), r)
                        for (l = pe(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(m[d[c]] = f));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (l = [], c = y.length; c--;)(f = y[c]) && l.push(m[c] = f);
                                i(null, y = [], l, u)
                            }
                            for (c = y.length; c--;)(f = y[c]) && -1 < (l = i ? H.call(o, f) : p[c]) && (o[l] = !(a[l] = f))
                        }
                    } else y = pe(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : D.apply(a, y)
                }))
            }

            function he(e) {
                for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = ce((function(e) {
                        return e === t
                    }), s, !0), f = ce((function(e) {
                        return -1 < H.call(t, e)
                    }), s, !0), p = [function(e, n, r) {
                        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r))
                    }]; l < o; l++)
                    if (n = r.relative[e[l].type]) p = [ce(fe(p), n)];
                    else {
                        if ((n = r.filter[e[l].type].apply(null, e[l].matches))[v]) {
                            for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                            return de(1 < l && fe(p), 1 < l && le(e.slice(0, l - 1)).replace(B, "$1"), n, l < i && he(e.slice(l, i)), i < o && he(e = e.slice(i)), i < o && le(e))
                        }
                        p.push(n)
                    }
                return fe(p)
            }

            function ge() {}
            a = re.compile = function(e, t) {
                var i, o = [],
                    a = [],
                    s = E[e + " "];
                if (!s) {
                    for (i = (t = t || ue(e)).length; i--;)(s = he(t[i]))[v] ? o.push(s) : a.push(s);
                    s = E(e, function(e, t) {
                        function i(i, l, f, p, d) {
                            var h, g, m, y = [],
                                v = 0,
                                b = "0",
                                x = i && [],
                                w = null != d,
                                N = u,
                                C = i || s && r.find.TAG("*", d && l.parentNode || l),
                                k = T += null == N ? 1 : Math.random() || .1;
                            for (w && (u = l !== c && l, n = o); null != (h = C[b]); b++) {
                                if (s && h) {
                                    for (g = 0; m = e[g++];)
                                        if (m(h, l, f)) {
                                            p.push(h);
                                            break
                                        }
                                    w && (T = k, n = ++o)
                                }
                                a && ((h = !m && h) && v--, i && x.push(h))
                            }
                            if (v += b, a && b !== v) {
                                for (g = 0; m = t[g++];) m(x, y, l, f);
                                if (i) {
                                    if (0 < v)
                                        for (; b--;) x[b] || y[b] || (y[b] = j.call(p));
                                    y = pe(y)
                                }
                                D.apply(p, y), w && !i && 0 < y.length && 1 < v + t.length && re.uniqueSort(p)
                            }
                            return w && (T = k, u = N), x
                        }
                        var o = 0,
                            a = 0 < t.length,
                            s = 0 < e.length;
                        return a ? te(i) : i
                    }(a, o))
                }
                return s
            }, r.pseudos.nth = r.pseudos.eq, r.filters = ge.prototype = r.pseudos, r.setFilters = new ge, l(), re.attr = w.attr, w.find = re, w.expr = re.selectors, w.expr[":"] = w.expr.pseudos, w.unique = re.uniqueSort, w.text = re.getText, w.isXMLDoc = re.isXML, w.contains = re.contains
        }(e);
    var oe = /Until$/,
        ae = /^(?:parents|prev(?:Until|All))/,
        se = /^.[^:#\[\.,]*$/,
        ue = w.expr.match.needsContext,
        le = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function ce(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function fe(e, t, n) {
        if (t = t || 0, w.isFunction(t)) return w.grep(e, (function(e, r) {
            return !!t.call(e, r, e) === n
        }));
        if (t.nodeType) return w.grep(e, (function(e) {
            return e === t === n
        }));
        if ("string" == typeof t) {
            var r = w.grep(e, (function(e) {
                return 1 === e.nodeType
            }));
            if (se.test(t)) return w.filter(t, r, !n);
            t = w.filter(t, r)
        }
        return w.grep(e, (function(e) {
            return 0 <= w.inArray(e, t) === n
        }))
    }

    function pe(e) {
        var t = de.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }
    w.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return (r = this).pushStack(w(e).filter((function() {
                for (t = 0; t < i; t++)
                    if (w.contains(r[t], this)) return !0
            })));
            for (n = [], t = 0; t < i; t++) w.find(e, this[t], n);
            return (n = this.pushStack(1 < i ? w.unique(n) : n)).selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function(e) {
            var t, n = w(e, this),
                r = n.length;
            return this.filter((function() {
                for (t = 0; t < r; t++)
                    if (w.contains(this, n[t])) return !0
            }))
        },
        not: function(e) {
            return this.pushStack(fe(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(fe(this, e, !0))
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? ue.test(e) ? 0 <= w(e, this.context).index(this[0]) : 0 < w.filter(e, this).length : 0 < this.filter(e).length)
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ue.test(e) || "string" != typeof e ? w(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? -1 < a.index(n) : w.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return this.pushStack(1 < o.length ? w.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e),
                r = w.merge(this.get(), n);
            return this.pushStack(w.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.fn.andSelf = w.fn.addBack, w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return w.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w.dir(e, "parentNode", n)
        },
        next: function(e) {
            return ce(e, "nextSibling")
        },
        prev: function(e) {
            return ce(e, "previousSibling")
        },
        nextAll: function(e) {
            return w.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return w.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return w.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return w.sibling(e.firstChild)
        },
        contents: function(e) {
            return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
        }
    }, (function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return oe.test(e) || (r = n), r && "string" == typeof r && (i = w.filter(r, i)), i = 1 < this.length && !le[e] ? w.unique(i) : i, 1 < this.length && ae.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    })), w.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? w.find.matchesSelector(t[0], e) ? [t[0]] : [] : w.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !w(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var de = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        he = / jQuery\d+="(?:null|\d+)"/g,
        ge = new RegExp("<(?:" + de + ")[\\s/>]", "i"),
        me = /^\s+/,
        ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ve = /<([\w:]+)/,
        be = /<tbody/i,
        xe = /<|&#?\w+;/,
        we = /<(?:script|style|link)/i,
        Te = /^(?:checkbox|radio)$/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ce = /^$|\/(?:java|ecma)script/i,
        ke = /^true\/(.*)/,
        Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Se = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ae = pe(s).appendChild(s.createElement("div"));

    function je(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function De(e) {
        var t = ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
    }

    function He(e, t) {
        if (1 === t.nodeType && w.hasData(e)) {
            var n, r, i, o = w._data(e),
                a = w._data(t, o),
                s = o.events;
            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (r = 0, i = s[n].length; r < i; r++) w.event.add(t, n, s[n][r]);
            a.data && (a.data = w.extend({}, a.data))
        }
    }

    function qe(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !w.support.noCloneEvent && t[w.expando]) {
                for (r in (i = w._data(t)).events) w.removeEvent(t, r, i.handle);
                t.removeAttribute(w.expando)
            }
            "script" === n && t.text !== e.text ? (je(t).text = e.text, De(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), w.support.html5Clone && e.innerHTML && !w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Te.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function Me(e, n) {
        var r, i, o = 0,
            s = typeof e.getElementsByTagName !== a ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== a ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || w.nodeName(i, n) ? s.push(i) : w.merge(s, Me(i, n));
        return n === t || n && w.nodeName(e, n) ? w.merge([e], s) : s
    }

    function _e(e) {
        Te.test(e.type) && (e.defaultChecked = e.checked)
    }
    Se.optgroup = Se.option, Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead, Se.th = Se.td, w.fn.extend({
        text: function(e) {
            return w.access(this, (function(e) {
                return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
            }), null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (w.isFunction(e)) return this.each((function(t) {
                w(this).wrapAll(e.call(this, t))
            }));
            if (this[0]) {
                var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                })).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return w.isFunction(e) ? this.each((function(t) {
                w(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = w.isFunction(e);
            return this.each((function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function() {
            return this.parent().each((function() {
                w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
            })).end()
        },
        append: function() {
            return this.domManip(arguments, !0, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(e)
            }))
        },
        prepend: function() {
            return this.domManip(arguments, !0, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(e, this.firstChild)
            }))
        },
        before: function() {
            return this.domManip(arguments, !1, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return this.domManip(arguments, !1, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)(!e || 0 < w.filter(e, [n]).length) && (t || 1 !== n.nodeType || w.cleanData(Me(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Le(Me(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && w.cleanData(Me(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && w.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return w.clone(this, e, t)
            }))
        },
        html: function(e) {
            return w.access(this, (function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(he, "") : t;
                if ("string" == typeof e && !we.test(e) && (w.support.htmlSerialize || !ge.test(e)) && (w.support.leadingWhitespace || !me.test(e)) && !Se[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ye, "<$1></$2>");
                    try {
                        for (; r < i; r++) 1 === (n = this[r] || {}).nodeType && (w.cleanData(Me(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (e) {}
                }
                n && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function(e) {
            return w.isFunction(e) || "string" == typeof e || (e = w(e).not(this).detach()), this.domManip([e], !0, (function(e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (w(this).remove(), n.insertBefore(e, t))
            }))
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = h.apply([], e);
            var i, o, a, s, u, l, c, f, p = 0,
                d = this.length,
                g = this,
                m = d - 1,
                y = e[0],
                v = w.isFunction(y);
            if (v || !(d <= 1 || "string" != typeof y || w.support.checkClone) && Ne.test(y)) return this.each((function(i) {
                var o = g.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            }));
            if (d && (i = (l = w.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && w.nodeName(i, "tr"), a = (s = w.map(Me(l, "script"), je)).length; p < d; p++) o = l, p !== m && (o = w.clone(o, !0, !0), a && w.merge(s, Me(o, "script"))), r.call(n && w.nodeName(this[p], "table") ? (f = "tbody", (c = this[p]).getElementsByTagName(f)[0] || c.appendChild(c.ownerDocument.createElement(f))) : this[p], o, p);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, w.map(s, De), p = 0; p < a; p++) o = s[p], Ce.test(o.type || "") && !w._data(o, "globalEval") && w.contains(u, o) && (o.src ? w.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : w.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Ee, "")));
                l = i = null
            }
            return this
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = w(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), w(o[r])[t](n), g.apply(i, n.get());
            return this.pushStack(i)
        }
    })), w.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = w.contains(e.ownerDocument, e);
            if (w.support.html5Clone || w.isXMLDoc(e) || !ge.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ae.innerHTML = e.outerHTML, Ae.removeChild(o = Ae.firstChild)), !(w.support.noCloneEvent && w.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (r = Me(o), s = Me(e), a = 0; null != (i = s[a]); ++a) r[a] && qe(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Me(e), r = r || Me(o), a = 0; null != (i = s[a]); a++) He(i, r[a]);
                else He(e, o);
            return 0 < (r = Me(o, "script")).length && Le(r, !u && Me(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, p = pe(t), d = [], h = 0; h < f; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === w.type(o)) w.merge(d, o.nodeType ? [o] : o);
                    else if (xe.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), u = (ve.exec(o) || ["", ""])[1].toLowerCase(), c = Se[u] || Se._default, s.innerHTML = c[1] + o.replace(ye, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!w.support.leadingWhitespace && me.test(o) && d.push(t.createTextNode(me.exec(o)[0])), !w.support.tbody)
                    for (i = (o = "table" !== u || be.test(o) ? "<table>" !== c[1] || be.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--;) w.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (w.merge(d, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else d.push(t.createTextNode(o));
            for (s && p.removeChild(s), w.support.appendChecked || w.grep(Me(d, "input"), _e), h = 0; o = d[h++];)
                if ((!r || -1 === w.inArray(o, r)) && (a = w.contains(o.ownerDocument, o), s = Me(p.appendChild(o), "script"), a && Le(s), n))
                    for (i = 0; o = s[i++];) Ce.test(o.type || "") && n.push(o);
            return s = null, p
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, s = 0, u = w.expando, l = w.cache, c = w.support.deleteExpando, f = w.event.special; null != (n = e[s]); s++)
                if ((t || w.acceptData(n)) && (o = (i = n[u]) && l[i])) {
                    if (o.events)
                        for (r in o.events) f[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], c ? delete n[u] : typeof n.removeAttribute !== a ? n.removeAttribute(u) : n[u] = null, p.push(i))
                }
        }
    });
    var Fe, Oe, Be, Pe = /alpha\([^)]*\)/i,
        Re = /opacity\s*=\s*([^)]*)/,
        We = /^(top|right|bottom|left)$/,
        $e = /^(none|table(?!-c[ea]).+)/,
        Ie = /^margin/,
        ze = new RegExp("^(" + T + ")(.*)$", "i"),
        Xe = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Ue = new RegExp("^([+-])=(" + T + ")", "i"),
        Ve = {
            BODY: "block"
        },
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ge = ["Top", "Right", "Bottom", "Left"],
        Qe = ["Webkit", "O", "Moz", "ms"];

    function Ke(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Qe.length; i--;)
            if ((t = Qe[i] + n) in e) return t;
        return r
    }

    function Ze(e, t) {
        return e = t || e, "none" === w.css(e, "display") || !w.contains(e.ownerDocument, e)
    }

    function et(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (o[a] = w._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ze(r) && (o[a] = w._data(r, "olddisplay", it(r.nodeName)))) : o[a] || (i = Ze(r), (n && "none" !== n || !i) && w._data(r, "olddisplay", i ? n : w.css(r, "display"))));
        for (a = 0; a < s; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function tt(e, t, n) {
        var r = ze.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function nt(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += w.css(e, n + Ge[o], !0, i)), r ? ("content" === n && (a -= w.css(e, "padding" + Ge[o], !0, i)), "margin" !== n && (a -= w.css(e, "border" + Ge[o] + "Width", !0, i))) : (a += w.css(e, "padding" + Ge[o], !0, i), "padding" !== n && (a += w.css(e, "border" + Ge[o] + "Width", !0, i)));
        return a
    }

    function rt(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Oe(e),
            a = w.support.boxSizing && "border-box" === w.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Be(e, t, o)) < 0 || null == i) && (i = e.style[t]), Xe.test(i)) return i;
            r = a && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + nt(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function it(e) {
        var t = s,
            n = Ve[e];
        return n || ("none" !== (n = ot(e, t)) && n || ((t = ((Fe = (Fe || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || Fe[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = ot(e, t), Fe.detach()), Ve[e] = n), n
    }

    function ot(e, t) {
        var n = w(t.createElement(e)).appendTo(t.body),
            r = w.css(n[0], "display");
        return n.remove(), r
    }
    w.fn.extend({
        css: function(e, n) {
            return w.access(this, (function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (w.isArray(n)) {
                    for (o = Oe(e), i = n.length; s < i; s++) a[n[s]] = w.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? w.style(e, n, r) : w.css(e, n)
            }), e, n, 1 < arguments.length)
        },
        show: function() {
            return et(this, !0)
        },
        hide: function() {
            return et(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each((function() {
                (t ? e : Ze(this)) ? w(this).show(): w(this).hide()
            }))
        }
    }), w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: w.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = w.camelCase(n),
                    l = e.style;
                if (n = w.cssProps[u] || (w.cssProps[u] = Ke(l, u)), s = w.cssHooks[n] || w.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if ("string" == (a = typeof r) && (o = Ue.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(w.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || w.cssNumber[u] || (r += "px"), w.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (e) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = w.camelCase(n);
            return n = w.cssProps[u] || (w.cssProps[u] = Ke(e.style, u)), (s = w.cssHooks[n] || w.cssHooks[u]) && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Be(e, n, i)), "normal" === a && n in Je && (a = Je[n]), "" === r || r ? (o = parseFloat(a), !0 === r || w.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (Oe = function(t) {
        return e.getComputedStyle(t, null)
    }, Be = function(e, n, r) {
        var i, o, a, s = r || Oe(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || w.contains(e.ownerDocument, e) || (u = w.style(e, n)), Xe.test(u) && Ie.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : s.documentElement.currentStyle && (Oe = function(e) {
        return e.currentStyle
    }, Be = function(e, n, r) {
        var i, o, a, s = r || Oe(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), Xe.test(u) && !We.test(n) && (i = l.left, (a = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    }), w.each(["height", "width"], (function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return 0 === e.offsetWidth && $e.test(w.css(e, "display")) ? w.swap(e, Ye, (function() {
                    return rt(e, t, r)
                })) : rt(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && Oe(e);
                return tt(0, n, r ? nt(e, t, r, w.support.boxSizing && "border-box" === w.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    })), w.support.opacity || (w.cssHooks.opacity = {
        get: function(e, t) {
            return Re.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = w.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === w.trim(o.replace(Pe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Pe.test(o) ? o.replace(Pe, i) : o + " " + i)
        }
    }), w((function() {
        w.support.reliableMarginRight || (w.cssHooks.marginRight = {
            get: function(e, t) {
                if (t) return w.swap(e, {
                    display: "inline-block"
                }, Be, [e, "marginRight"])
            }
        }), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], (function(e, t) {
            w.cssHooks[t] = {
                get: function(e, n) {
                    if (n) return n = Be(e, t), Xe.test(n) ? w(e).position()[t] + "px" : n
                }
            }
        }))
    })), w.expr && w.expr.filters && (w.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !w.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || w.css(e, "display"))
    }, w.expr.filters.visible = function(e) {
        return !w.expr.filters.hidden(e)
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Ge[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ie.test(e) || (w.cssHooks[e + t].set = tt)
    }));
    var at = /%20/g,
        st = /\[\]$/,
        ut = /\r?\n/g,
        lt = /^(?:submit|button|image|reset|file)$/i,
        ct = /^(?:input|select|textarea|keygen)/i;

    function ft(e, t, n, r) {
        var i;
        if (w.isArray(t)) w.each(t, (function(t, i) {
            n || st.test(e) ? r(e, i) : ft(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }));
        else if (n || "object" !== w.type(t)) r(e, t);
        else
            for (i in t) ft(e + "[" + i + "]", t[i], n, r)
    }
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && ct.test(this.nodeName) && !lt.test(e) && (this.checked || !Te.test(e))
            })).map((function(e, t) {
                var n = w(this).val();
                return null == n ? null : w.isArray(n) ? w.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(ut, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(ut, "\r\n")
                }
            })).get()
        }
    }), w.param = function(e, n) {
        function r(e, t) {
            t = w.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var i, o = [];
        if (n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional), w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
            r(this.name, this.value)
        }));
        else
            for (i in e) ft(i, e[i], n, r);
        return o.join("&").replace(at, "+")
    }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
        w.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    })), w.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var pt, dt, ht = w.now(),
        gt = /\?/,
        mt = /#.*$/,
        yt = /([?&])_=[^&]*/,
        vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        bt = /^(?:GET|HEAD)$/,
        xt = /^\/\//,
        wt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Tt = w.fn.load,
        Nt = {},
        Ct = {},
        kt = "*/".concat("*");
    try {
        dt = u.href
    } catch (u) {
        (dt = s.createElement("a")).href = "", dt = dt.href
    }

    function Et(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(N) || [];
            if (w.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function St(e, t, n, r) {
        var i = {},
            o = e === Ct;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], (function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            })), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function At(e, n) {
        var r, i, o = w.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r = r || {})[i] = n[i]);
        return r && w.extend(!0, e, r), e
    }
    pt = wt.exec(dt.toLowerCase()) || [], w.fn.load = function(e, n, r) {
        if ("string" != typeof e && Tt) return Tt.apply(this, arguments);
        var i, o, a, s = this,
            u = e.indexOf(" ");
        return 0 <= u && (i = e.slice(u, e.length), e = e.slice(0, u)), w.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), 0 < s.length && w.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done((function(e) {
            o = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        })).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), w.each(["get", "post"], (function(e, n) {
        w[n] = function(e, r, i, o) {
            return w.isFunction(r) && (o = o || i, i = r, r = t), w.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    })), w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: dt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": w.parseJSON,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? At(At(e, w.ajaxSettings), t) : At(w.ajaxSettings, e)
        },
        ajaxPrefilter: Et(Nt),
        ajaxTransport: Et(Ct),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, u, l, c, f = w.ajaxSetup({}, n),
                p = f.context || f,
                d = f.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                h = w.Deferred(),
                g = w.Callbacks("once memory"),
                m = f.statusCode || {},
                y = {},
                v = {},
                b = 0,
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = vt.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return l && l.abort(t), C(0, t), this
                    }
                };
            if (h.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || dt) + "").replace(mt, "").replace(xt, pt[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = w.trim(f.dataType || "*").toLowerCase().match(N) || [""], null == f.crossDomain && (r = wt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === pt[1] && r[2] === pt[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (pt[3] || ("http:" === pt[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), St(Nt, f, n, T), 2 === b) return T;
            for (i in (u = f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !bt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (gt.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = yt.test(o) ? o.replace(yt, "$1_=" + ht++) : o + (gt.test(o) ? "&" : "?") + "_=" + ht++)), f.ifModified && (w.lastModified[o] && T.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && T.setRequestHeader("If-None-Match", w.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : f.accepts["*"]), f.headers) T.setRequestHeader(i, f.headers[i]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === b)) return T.abort();
            for (i in x = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[i](f[i]);
            if (l = St(Ct, f, n, T)) {
                T.readyState = 1, u && d.trigger("ajaxSend", [T, f]), f.async && 0 < f.timeout && (s = setTimeout((function() {
                    T.abort("timeout")
                }), f.timeout));
                try {
                    b = 1, l.send(y, C)
                } catch (e) {
                    if (!(b < 2)) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(e, n, r, i) {
                var c, y, v, x, N, C = n;
                2 !== b && (b = 2, s && clearTimeout(s), l = t, a = i || "", T.readyState = 0 < e ? 4 : 0, r && (x = function(e, n, r) {
                    var i, o, a, s, u = e.contents,
                        l = e.dataTypes,
                        c = e.responseFields;
                    for (s in c) s in r && (n[c[s]] = r[s]);
                    for (;
                        "*" === l[0];) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
                    if (o)
                        for (s in u)
                            if (u[s] && u[s].test(o)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0] in r) a = l[0];
                    else {
                        for (s in r) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                a = s;
                                break
                            }
                            i = i || s
                        }
                        a = a || i
                    }
                    if (a) return a !== l[0] && l.unshift(a), r[a]
                }(f, T, r)), 200 <= e && e < 300 || 304 === e ? (f.ifModified && ((N = T.getResponseHeader("Last-Modified")) && (w.lastModified[o] = N), (N = T.getResponseHeader("etag")) && (w.etag[o] = N)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (C = (c = function(e, t) {
                    var n, r, i, o, a = {},
                        s = 0,
                        u = e.dataTypes.slice(),
                        l = u[0];
                    if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
                        for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
                    for (; r = u[++s];)
                        if ("*" !== r) {
                            if ("*" !== l && l !== r) {
                                if (!(i = a[l + " " + r] || a["* " + r]))
                                    for (n in a)
                                        if ((o = n.split(" "))[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                            !0 === i ? i = a[n] : !0 !== a[n] && (r = o[0], u.splice(s--, 0, r));
                                            break
                                        }
                                if (!0 !== i)
                                    if (i && e.throws) t = i(t);
                                    else try {
                                        t = i(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: i ? e : "No conversion from " + l + " to " + r
                                        }
                                    }
                            }
                            l = r
                        }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, x)).state, y = c.data, c = !(v = c.error))) : (v = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || C) + "", c ? h.resolveWith(p, [y, C, T]) : h.rejectWith(p, [T, C, v]), T.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? y : v]), g.fireWith(p, [T, C]), u && (d.trigger("ajaxComplete", [T, f]), --w.active || w.event.trigger("ajaxStop")))
            }
            return T
        },
        getScript: function(e, n) {
            return w.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        }
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", (function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    })), w.ajaxTransport("script", (function(e) {
        if (e.crossDomain) {
            var n, r = s.head || w("head")[0] || s.documentElement;
            return {
                send: function(t, i) {
                    (n = s.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        !t && n.readyState && !/loaded|complete/.test(n.readyState) || (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    }));
    var jt = [],
        Dt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = jt.pop() || w.expando + "_" + ht++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", (function(n, r, i) {
        var o, a, s, u = !1 !== n.jsonp && (Dt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dt.test(n.data) && "data");
        if (u || "jsonp" === n.dataTypes[0]) return o = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Dt, "$1" + o) : !1 !== n.jsonp && (n.url += (gt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || w.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always((function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, jt.push(o)), s && w.isFunction(a) && a(s[0]), s = a = t
        })), "script"
    }));
    var Lt, Ht, qt = 0,
        Mt = e.ActiveXObject && function() {
            var e;
            for (e in Lt) Lt[e](t, !0)
        };

    function _t() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    w.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && _t() || function() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    } : _t, Ht = w.ajaxSettings.xhr(), w.support.cors = !!Ht && "withCredentials" in Ht, (Ht = w.support.ajax = !!Ht) && w.ajaxTransport((function(n) {
        var r;
        if (!n.crossDomain || w.support.cors) return {
            send: function(i, o) {
                var a, s, u = n.xhr();
                if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                    for (s in n.xhrFields) u[s] = n.xhrFields[s];
                n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (s in i) u.setRequestHeader(s, i[s])
                } catch (i) {}
                u.send(n.hasContent && n.data || null), r = function(e, i) {
                    var s, l, c, f;
                    try {
                        if (r && (i || 4 === u.readyState))
                            if (r = t, a && (u.onreadystatechange = w.noop, Mt && delete Lt[a]), i) 4 !== u.readyState && u.abort();
                            else {
                                f = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    c = u.statusText
                                } catch (e) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                    } catch (e) {
                        i || o(-1, e)
                    }
                    f && o(s, c, f, l)
                }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++qt, Mt && (Lt || (Lt = {}, w(e).unload(Mt)), Lt[a] = r), u.onreadystatechange = r) : r()
            },
            abort: function() {
                r && r(t, !0)
            }
        }
    }));
    var Ft, Ot, Bt = /^(?:toggle|show|hide)$/,
        Pt = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        Rt = /queueHooks$/,
        Wt = [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f, p = this,
                d = e.style,
                h = {},
                g = [],
                m = e.nodeType && Ze(e);
            for (i in n.queue || (null == (c = w._queueHooks(e, "fx")).unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() {
                    c.unqueued || f()
                }), c.unqueued++, p.always((function() {
                    p.always((function() {
                        c.unqueued--, w.queue(e, "fx").length || c.empty.fire()
                    }))
                }))), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === w.css(e, "display") && "none" === w.css(e, "float") && (w.support.inlineBlockNeedsLayout && "inline" !== it(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", w.support.shrinkWrapBlocks || p.always((function() {
                    d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                }))), t)
                if (a = t[i], Bt.exec(a)) {
                    if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
                    g.push(i)
                }
            if (o = g.length) {
                "hidden" in (s = w._data(e, "fxshow") || w._data(e, "fxshow", {})) && (m = s.hidden), u && (s.hidden = !m), m ? w(e).show() : p.done((function() {
                    w(e).hide()
                })), p.done((function() {
                    var t;
                    for (t in w._removeData(e, "fxshow"), h) w.style(e, t, h[t])
                }));
                for (i = 0; i < o; i++) r = g[i], l = p.createTween(r, m ? s[r] : 0), h[r] = s[r] || w.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
            }
        }],
        $t = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    o = Pt.exec(t),
                    a = i.cur(),
                    s = +a || 0,
                    u = 1,
                    l = 20;
                if (o) {
                    if (n = +o[2], "px" !== (r = o[3] || (w.cssNumber[e] ? "" : "px")) && s)
                        for (s = w.css(i.elem, e, !0) || n || 1; s /= u = u || ".5", w.style(i.elem, e, s + r), u !== (u = i.cur() / a) && 1 !== u && --l;);
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };

    function It() {
        return setTimeout((function() {
            Ft = t
        })), Ft = w.now()
    }

    function zt(e, t, n) {
        var r, i, o = 0,
            a = Wt.length,
            s = w.Deferred().always((function() {
                delete u.elem
            })),
            u = function() {
                if (i) return !1;
                for (var t = Ft || It(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ft || It(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (i in e)
                    if (o = t[r = w.camelCase(i)], n = e[i], w.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), (a = w.cssHooks[r]) && "expand" in a)
                        for (i in n = a.expand(n), delete e[r], n) i in e || (e[i] = n[i], t[i] = o);
                    else t[r] = o
            }(c, l.opts.specialEasing); o < a; o++)
            if (r = Wt[o].call(l, e, c, l.opts)) return r;
        return function(e, t) {
            w.each(t, (function(t, n) {
                for (var r = ($t[t] || []).concat($t["*"]), i = 0, o = r.length; i < o; i++)
                    if (r[i].call(e, t, n)) return
            }))
        }(l, c), w.isFunction(l.opts.start) && l.opts.start.call(e, l), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function Xt(e, t, n, r, i) {
        return new Xt.prototype.init(e, t, n, r, i)
    }

    function Ut(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Ge[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function Vt(e) {
        return w.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    w.Animation = w.extend(zt, {
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = w.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; r < i; r++) n = e[r], $t[n] = $t[n] || [], $t[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Wt.unshift(e) : Wt.push(e)
        }
    }), ((w.Tween = Xt).prototype = {
        constructor: Xt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Xt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Xt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Xt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Xt.propHooks._default.set(this), this
        }
    }).init.prototype = Xt.prototype, (Xt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[w.cssProps[e.prop]] || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = Xt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.each(["toggle", "show", "hide"], (function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Ut(t, !0), e, r, i)
        }
    })), w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Ze).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e),
                o = w.speed(t, n, r),
                a = function() {
                    var t = zt(this, w.extend({}, e), o);
                    a.finish = function() {
                        t.stop(!0)
                    }, (i || w._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            function i(e) {
                var t = e.stop;
                delete e.stop, t(r)
            }
            return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = w.timers,
                    a = w._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Rt.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                !t && r || w.dequeue(this, e)
            }))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each((function() {
                var t, n = w._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = w.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            }))
        }
    }), w.each({
        slideDown: Ut("show"),
        slideUp: Ut("hide"),
        slideToggle: Ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    })), w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || w.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !w.isFunction(t) && t
        };
        return r.duration = w.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, w.timers = [], w.fx = Xt.prototype.init, w.fx.tick = function() {
        var e, n = w.timers,
            r = 0;
        for (Ft = w.now(); r < n.length; r++)(e = n[r])() || n[r] !== e || n.splice(r--, 1);
        n.length || w.fx.stop(), Ft = t
    }, w.fx.timer = function(e) {
        e() && w.timers.push(e) && w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        Ot = Ot || setInterval(w.fx.tick, w.fx.interval)
    }, w.fx.stop = function() {
        clearInterval(Ot), Ot = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function(e) {
        return w.grep(w.timers, (function(t) {
            return e === t.elem
        })).length
    }), w.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each((function(t) {
            w.offset.setOffset(this, e, t)
        }));
        var n, r, i = {
                top: 0,
                left: 0
            },
            o = this[0],
            s = o && o.ownerDocument;
        return s ? (n = s.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== a && (i = o.getBoundingClientRect()), r = Vt(s), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i) : void 0
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r = w.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = w(e),
                s = a.offset(),
                u = w.css(e, "top"),
                l = w.css(e, "left"),
                c = {},
                f = {};
            o = ("absolute" === r || "fixed" === r) && -1 < w.inArray("auto", [u, l]) ? (i = (f = a.position()).top, f.left) : (i = parseFloat(u) || 0, parseFloat(l) || 0), w.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (c.top = t.top - s.top + i), null != t.left && (c.left = t.left - s.left + o), "using" in t ? t.using.call(e, c) : a.css(c)
        }
    }, w.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === w.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - w.css(r, "marginTop", !0),
                    left: t.left - n.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent || s.documentElement; e && !w.nodeName(e, "html") && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || s.documentElement
            }))
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, n) {
        var r = /Y/.test(n);
        w.fn[e] = function(i) {
            return w.access(this, (function(e, i, o) {
                var a = Vt(e);
                if (o === t) return a ? n in a ? a[n] : a.document.documentElement[i] : e[i];
                a ? a.scrollTo(r ? w(a).scrollLeft() : o, r ? o : w(a).scrollTop()) : e[i] = o
            }), e, i, arguments.length, null)
        }
    })), w.each({
        Height: "height",
        Width: "width"
    }, (function(e, n) {
        w.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, (function(r, i) {
            w.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (!0 === i || !0 === o ? "margin" : "border");
                return w.access(this, (function(n, r, i) {
                    var o;
                    return w.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? w.css(n, r, s) : w.style(n, r, i, s)
                }), n, a ? i : t, a, null)
            }
        }))
    })), e.jQuery = e.$ = w, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], (function() {
        return w
    }))
}(window);