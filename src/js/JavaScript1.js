!(function (a, b) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = a.document
            ? b(a, !0)
            : function (a) {
                if (!a.document)
                    throw new Error("jQuery requires a window with a document");
                return b(a);
            })
        : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function (a, b) {
            return new n.fn.init(a, b);
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (a, b) {
            return b.toUpperCase();
        };
    (n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
            return e.call(this);
        },
        get: function (a) {
            return null != a
                ? 0 > a
                    ? this[a + this.length]
                    : this[a]
                : e.call(this);
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return (b.prevObject = this), (b.context = this.context), b;
        },
        each: function (a) {
            return n.each(this, a);
        },
        map: function (a) {
            return this.pushStack(
                n.map(this, function (b, c) {
                    return a.call(b, c, b);
                })
            );
        },
        slice: function () {
            return this.pushStack(e.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: g,
        sort: c.sort,
        splice: c.splice,
    }),
        (n.extend = n.fn.extend = function () {
            var a,
                b,
                c,
                d,
                e,
                f,
                g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for (
                "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
                "object" == typeof g || n.isFunction(g) || (g = {}),
                h === i && ((g = this), h--);
                i > h;
                h++
            )
                if (null != (e = arguments[h]))
                    for (d in e)
                        (a = g[d]),
                            (c = e[d]),
                            g !== c &&
                            (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))
                                ? (b
                                    ? ((b = !1), (f = a && n.isArray(a) ? a : []))
                                    : (f = a && n.isPlainObject(a) ? a : {}),
                                    (g[d] = n.extend(j, f, c)))
                                : void 0 !== c && (g[d] = c));
            return g;
        }),
        n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a);
            },
            noop: function () { },
            isFunction: function (a) {
                return "function" === n.type(a);
            },
            isArray:
                Array.isArray ||
                function (a) {
                    return "array" === n.type(a);
                },
            isWindow: function (a) {
                return null != a && a == a.window;
            },
            isNumeric: function (a) {
                var b = a && a.toString();
                return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0;
            },
            isPlainObject: function (a) {
                var b;
                if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
                    return !1;
                try {
                    if (
                        a.constructor &&
                        !k.call(a, "constructor") &&
                        !k.call(a.constructor.prototype, "isPrototypeOf")
                    )
                        return !1;
                } catch (c) {
                    return !1;
                }
                if (!l.ownFirst) for (b in a) return k.call(a, b);
                for (b in a);
                return void 0 === b || k.call(a, b);
            },
            type: function (a) {
                return null == a
                    ? a + ""
                    : "object" == typeof a || "function" == typeof a
                        ? i[j.call(a)] || "object"
                        : typeof a;
            },
            globalEval: function (b) {
                b &&
                    n.trim(b) &&
                    (
                        a.execScript ||
                        function (b) {
                            a.eval.call(a, b);
                        }
                    )(b);
            },
            camelCase: function (a) {
                return a.replace(p, "ms-").replace(q, r);
            },
            nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
            },
            each: function (a, b) {
                var c,
                    d = 0;
                if (s(a)) {
                    for (c = a.length; c > d; d++)
                        if (b.call(a[d], d, a[d]) === !1) break;
                } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
                return a;
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(o, "");
            },
            makeArray: function (a, b) {
                var c = b || [];
                return (
                    null != a &&
                    (s(Object(a))
                        ? n.merge(c, "string" == typeof a ? [a] : a)
                        : g.call(c, a)),
                    c
                );
            },
            inArray: function (a, b, c) {
                var d;
                if (b) {
                    if (h) return h.call(b, a, c);
                    for (
                        d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
                        d > c;
                        c++
                    )
                        if (c in b && b[c] === a) return c;
                }
                return -1;
            },
            merge: function (a, b) {
                var c = +b.length,
                    d = 0,
                    e = a.length;
                while (c > d) a[e++] = b[d++];
                if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
                return (a.length = e), a;
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                    (d = !b(a[f], f)), d !== h && e.push(a[f]);
                return e;
            },
            map: function (a, b, c) {
                var d,
                    e,
                    g = 0,
                    h = [];
                if (s(a))
                    for (d = a.length; d > g; g++)
                        (e = b(a[g], g, c)), null != e && h.push(e);
                else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
                return f.apply([], h);
            },
            guid: 1,
            proxy: function (a, b) {
                var c, d, f;
                return (
                    "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
                    n.isFunction(a)
                        ? ((c = e.call(arguments, 2)),
                            (d = function () {
                                return a.apply(b || this, c.concat(e.call(arguments)));
                            }),
                            (d.guid = a.guid = a.guid || n.guid++),
                            d)
                        : void 0
                );
            },
            now: function () {
                return +new Date();
            },
            support: l,
        }),
        "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
        n.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (a, b) {
                i["[object " + b + "]"] = b.toLowerCase();
            }
        );
    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a)
            ? !1
            : "array" === c ||
            0 === b ||
            ("number" == typeof b && b > 0 && b - 1 in a);
    }
    var t = (function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function (a, b) {
                return a === b && (l = !0), 0;
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1;
            },
            K =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N =
                "\\[" +
                L +
                "*(" +
                M +
                ")(?:" +
                L +
                "*([*^$|!~]?=)" +
                L +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                M +
                "))|)" +
                L +
                "*\\]",
            O =
                ":(" +
                M +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                N +
                ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    L +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    L +
                    "*(?:([+-]|)" +
                    L +
                    "*(\\d+)|))" +
                    L +
                    "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                    L +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    L +
                    "*((?:-\\d)?\\d*)" +
                    L +
                    "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c
                    ? b
                    : 0 > d
                        ? String.fromCharCode(d + 65536)
                        : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
            },
            da = function () {
                m();
            };
        try {
            H.apply((E = I.call(v.childNodes)), v.childNodes),
                E[v.childNodes.length].nodeType;
        } catch (ea) {
            H = {
                apply: E.length
                    ? function (a, b) {
                        G.apply(a, I.call(b));
                    }
                    : function (a, b) {
                        var c = a.length,
                            d = 0;
                        while ((a[c++] = b[d++]));
                        a.length = c - 1;
                    },
            };
        }
        function fa(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s,
                w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (
                ((d = d || []),
                    "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
            )
                return d;
            if (
                !e &&
                ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
            ) {
                if (11 !== x && (o = $.exec(a)))
                    if ((f = o[1])) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d;
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j), d;
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if (
                            (f = o[3]) &&
                            c.getElementsByClassName &&
                            b.getElementsByClassName
                        )
                            return H.apply(d, b.getElementsByClassName(f)), d;
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) (w = b), (s = a);
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id"))
                            ? (k = k.replace(aa, "\\$&"))
                            : b.setAttribute("id", (k = u)),
                            (r = g(a)),
                            (h = r.length),
                            (l = V.test(k) ? "#" + k : "[id='" + k + "']");
                        while (h--) r[h] = l + " " + qa(r[h]);
                        (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)), d;
                        } catch (y) {
                        } finally {
                            k === u && b.removeAttribute("id");
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e);
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return (
                    a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                    (b[c + " "] = e)
                );
            }
            return b;
        }
        function ha(a) {
            return (a[u] = !0), a;
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), (b = null);
            }
        }
        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function ka(a, b) {
            var c = b && a,
                d =
                    c &&
                    1 === a.nodeType &&
                    1 === b.nodeType &&
                    (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while ((c = c.nextSibling)) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function la(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function na(a) {
            return ha(function (b) {
                return (
                    (b = +b),
                    ha(function (c, d) {
                        var e,
                            f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                    })
                );
            });
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        (c = fa.support = {}),
            (f = fa.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1;
            }),
            (m = fa.setDocument = function (a) {
                var b,
                    e,
                    g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement
                    ? ((n = g),
                        (o = n.documentElement),
                        (p = !f(n)),
                        (e = n.defaultView) &&
                        e.top !== e &&
                        (e.addEventListener
                            ? e.addEventListener("unload", da, !1)
                            : e.attachEvent && e.attachEvent("onunload", da)),
                        (c.attributes = ia(function (a) {
                            return (a.className = "i"), !a.getAttribute("className");
                        })),
                        (c.getElementsByTagName = ia(function (a) {
                            return (
                                a.appendChild(n.createComment("")),
                                !a.getElementsByTagName("*").length
                            );
                        })),
                        (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
                        (c.getById = ia(function (a) {
                            return (
                                (o.appendChild(a).id = u),
                                !n.getElementsByName || !n.getElementsByName(u).length
                            );
                        })),
                        c.getById
                            ? ((d.find.ID = function (a, b) {
                                if ("undefined" != typeof b.getElementById && p) {
                                    var c = b.getElementById(a);
                                    return c ? [c] : [];
                                }
                            }),
                                (d.filter.ID = function (a) {
                                    var b = a.replace(ba, ca);
                                    return function (a) {
                                        return a.getAttribute("id") === b;
                                    };
                                }))
                            : (delete d.find.ID,
                                (d.filter.ID = function (a) {
                                    var b = a.replace(ba, ca);
                                    return function (a) {
                                        var c =
                                            "undefined" != typeof a.getAttributeNode &&
                                            a.getAttributeNode("id");
                                        return c && c.value === b;
                                    };
                                })),
                        (d.find.TAG = c.getElementsByTagName
                            ? function (a, b) {
                                return "undefined" != typeof b.getElementsByTagName
                                    ? b.getElementsByTagName(a)
                                    : c.qsa
                                        ? b.querySelectorAll(a)
                                        : void 0;
                            }
                            : function (a, b) {
                                var c,
                                    d = [],
                                    e = 0,
                                    f = b.getElementsByTagName(a);
                                if ("*" === a) {
                                    while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                                    return d;
                                }
                                return f;
                            }),
                        (d.find.CLASS =
                            c.getElementsByClassName &&
                            function (a, b) {
                                return "undefined" != typeof b.getElementsByClassName && p
                                    ? b.getElementsByClassName(a)
                                    : void 0;
                            }),
                        (r = []),
                        (q = []),
                        (c.qsa = Z.test(n.querySelectorAll)) &&
                        (ia(function (a) {
                            (o.appendChild(a).innerHTML =
                                "<a id='" +
                                u +
                                "'></a><select id='" +
                                u +
                                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                a.querySelectorAll("[msallowcapture^='']").length &&
                                q.push("[*^$]=" + L + "*(?:''|\"\")"),
                                a.querySelectorAll("[selected]").length ||
                                q.push("\\[" + L + "*(?:value|" + K + ")"),
                                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                                a.querySelectorAll(":checked").length || q.push(":checked"),
                                a.querySelectorAll("a#" + u + "+*").length ||
                                q.push(".#.+[+~]");
                        }),
                            ia(function (a) {
                                var b = n.createElement("input");
                                b.setAttribute("type", "hidden"),
                                    a.appendChild(b).setAttribute("name", "D"),
                                    a.querySelectorAll("[name=d]").length &&
                                    q.push("name" + L + "*[*^$|!~]?="),
                                    a.querySelectorAll(":enabled").length ||
                                    q.push(":enabled", ":disabled"),
                                    q.push(",.*:");
                            })),
                        (c.matchesSelector = Z.test(
                            (s =
                                o.matches ||
                                o.webkitMatchesSelector ||
                                o.mozMatchesSelector ||
                                o.oMatchesSelector ||
                                o.msMatchesSelector)
                        )) &&
                        ia(function (a) {
                            (c.disconnectedMatch = s.call(a, "div")),
                                s.call(a, "[s!='']:x"),
                                r.push("!=", O);
                        }),
                        (q = q.length && new RegExp(q.join("|"))),
                        (r = r.length && new RegExp(r.join("|"))),
                        (b = Z.test(o.compareDocumentPosition)),
                        (t =
                            b || Z.test(o.contains)
                                ? function (a, b) {
                                    var c = 9 === a.nodeType ? a.documentElement : a,
                                        d = b && b.parentNode;
                                    return (
                                        a === d ||
                                        !(
                                            !d ||
                                            1 !== d.nodeType ||
                                            !(c.contains
                                                ? c.contains(d)
                                                : a.compareDocumentPosition &&
                                                16 & a.compareDocumentPosition(d))
                                        )
                                    );
                                }
                                : function (a, b) {
                                    if (b) while ((b = b.parentNode)) if (b === a) return !0;
                                    return !1;
                                }),
                        (B = b
                            ? function (a, b) {
                                if (a === b) return (l = !0), 0;
                                var d =
                                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                                return d
                                    ? d
                                    : ((d =
                                        (a.ownerDocument || a) === (b.ownerDocument || b)
                                            ? a.compareDocumentPosition(b)
                                            : 1),
                                        1 & d ||
                                            (!c.sortDetached && b.compareDocumentPosition(a) === d)
                                            ? a === n || (a.ownerDocument === v && t(v, a))
                                                ? -1
                                                : b === n || (b.ownerDocument === v && t(v, b))
                                                    ? 1
                                                    : k
                                                        ? J(k, a) - J(k, b)
                                                        : 0
                                            : 4 & d
                                                ? -1
                                                : 1);
                            }
                            : function (a, b) {
                                if (a === b) return (l = !0), 0;
                                var c,
                                    d = 0,
                                    e = a.parentNode,
                                    f = b.parentNode,
                                    g = [a],
                                    h = [b];
                                if (!e || !f)
                                    return a === n
                                        ? -1
                                        : b === n
                                            ? 1
                                            : e
                                                ? -1
                                                : f
                                                    ? 1
                                                    : k
                                                        ? J(k, a) - J(k, b)
                                                        : 0;
                                if (e === f) return ka(a, b);
                                c = a;
                                while ((c = c.parentNode)) g.unshift(c);
                                c = b;
                                while ((c = c.parentNode)) h.unshift(c);
                                while (g[d] === h[d]) d++;
                                return d
                                    ? ka(g[d], h[d])
                                    : g[d] === v
                                        ? -1
                                        : h[d] === v
                                            ? 1
                                            : 0;
                            }),
                        n)
                    : n;
            }),
            (fa.matches = function (a, b) {
                return fa(a, null, null, b);
            }),
            (fa.matchesSelector = function (a, b) {
                if (
                    ((a.ownerDocument || a) !== n && m(a),
                        (b = b.replace(T, "='$1']")),
                        c.matchesSelector &&
                        p &&
                        !A[b + " "] &&
                        (!r || !r.test(b)) &&
                        (!q || !q.test(b)))
                )
                    try {
                        var d = s.call(a, b);
                        if (
                            d ||
                            c.disconnectedMatch ||
                            (a.document && 11 !== a.document.nodeType)
                        )
                            return d;
                    } catch (e) { }
                return fa(b, n, null, [a]).length > 0;
            }),
            (fa.contains = function (a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b);
            }),
            (fa.attr = function (a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f
                    ? f
                    : c.attributes || !p
                        ? a.getAttribute(b)
                        : (f = a.getAttributeNode(b)) && f.specified
                            ? f.value
                            : null;
            }),
            (fa.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a);
            }),
            (fa.uniqueSort = function (a) {
                var b,
                    d = [],
                    e = 0,
                    f = 0;
                if (
                    ((l = !c.detectDuplicates),
                        (k = !c.sortStable && a.slice(0)),
                        a.sort(B),
                        l)
                ) {
                    while ((b = a[f++])) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1);
                }
                return (k = null), a;
            }),
            (e = fa.getText = function (a) {
                var b,
                    c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                    } else if (3 === f || 4 === f) return a.nodeValue;
                } else while ((b = a[d++])) c += e(b);
                return c;
            }),
            (d = fa.selectors = {
                cacheLength: 50,
                createPseudo: ha,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (a) {
                        return (
                            (a[1] = a[1].replace(ba, ca)),
                            (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
                            "~=" === a[2] && (a[3] = " " + a[3] + " "),
                            a.slice(0, 4)
                        );
                    },
                    CHILD: function (a) {
                        return (
                            (a[1] = a[1].toLowerCase()),
                            "nth" === a[1].slice(0, 3)
                                ? (a[3] || fa.error(a[0]),
                                    (a[4] = +(a[4]
                                        ? a[5] + (a[6] || 1)
                                        : 2 * ("even" === a[3] || "odd" === a[3]))),
                                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                                : a[3] && fa.error(a[0]),
                            a
                        );
                    },
                    PSEUDO: function (a) {
                        var b,
                            c = !a[6] && a[2];
                        return W.CHILD.test(a[0])
                            ? null
                            : (a[3]
                                ? (a[2] = a[4] || a[5] || "")
                                : c &&
                                U.test(c) &&
                                (b = g(c, !0)) &&
                                (b = c.indexOf(")", c.length - b) - c.length) &&
                                ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                                a.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(ba, ca).toLowerCase();
                        return "*" === a
                            ? function () {
                                return !0;
                            }
                            : function (a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b;
                            };
                    },
                    CLASS: function (a) {
                        var b = y[a + " "];
                        return (
                            b ||
                            ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                                y(a, function (a) {
                                    return b.test(
                                        ("string" == typeof a.className && a.className) ||
                                        ("undefined" != typeof a.getAttribute &&
                                            a.getAttribute("class")) ||
                                        ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (a, b, c) {
                        return function (d) {
                            var e = fa.attr(d, a);
                            return null == e
                                ? "!=" === b
                                : b
                                    ? ((e += ""),
                                        "=" === b
                                            ? e === c
                                            : "!=" === b
                                                ? e !== c
                                                : "^=" === b
                                                    ? c && 0 === e.indexOf(c)
                                                    : "*=" === b
                                                        ? c && e.indexOf(c) > -1
                                                        : "$=" === b
                                                            ? c && e.slice(-c.length) === c
                                                            : "~=" === b
                                                                ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                                                                : "|=" === b
                                                                    ? e === c || e.slice(0, c.length + 1) === c + "-"
                                                                    : !1)
                                    : !0;
                        };
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e
                            ? function (a) {
                                return !!a.parentNode;
                            }
                            : function (b, c, i) {
                                var j,
                                    k,
                                    l,
                                    m,
                                    n,
                                    o,
                                    p = f !== g ? "nextSibling" : "previousSibling",
                                    q = b.parentNode,
                                    r = h && b.nodeName.toLowerCase(),
                                    s = !i && !h,
                                    t = !1;
                                if (q) {
                                    if (f) {
                                        while (p) {
                                            m = b;
                                            while ((m = m[p]))
                                                if (
                                                    h
                                                        ? m.nodeName.toLowerCase() === r
                                                        : 1 === m.nodeType
                                                )
                                                    return !1;
                                            o = p = "only" === a && !o && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                                        (m = q),
                                            (l = m[u] || (m[u] = {})),
                                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                                            (j = k[a] || []),
                                            (n = j[0] === w && j[1]),
                                            (t = n && j[2]),
                                            (m = n && q.childNodes[n]);
                                        while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                                            if (1 === m.nodeType && ++t && m === b) {
                                                k[a] = [w, n, t];
                                                break;
                                            }
                                    } else if (
                                        (s &&
                                            ((m = b),
                                                (l = m[u] || (m[u] = {})),
                                                (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                                                (j = k[a] || []),
                                                (n = j[0] === w && j[1]),
                                                (t = n)),
                                            t === !1)
                                    )
                                        while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                                            if (
                                                (h
                                                    ? m.nodeName.toLowerCase() === r
                                                    : 1 === m.nodeType) &&
                                                ++t &&
                                                (s &&
                                                    ((l = m[u] || (m[u] = {})),
                                                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                                                        (k[a] = [w, t])),
                                                    m === b)
                                            )
                                                break;
                                    return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                                }
                            };
                    },
                    PSEUDO: function (a, b) {
                        var c,
                            e =
                                d.pseudos[a] ||
                                d.setFilters[a.toLowerCase()] ||
                                fa.error("unsupported pseudo: " + a);
                        return e[u]
                            ? e(b)
                            : e.length > 1
                                ? ((c = [a, a, "", b]),
                                    d.setFilters.hasOwnProperty(a.toLowerCase())
                                        ? ha(function (a, c) {
                                            var d,
                                                f = e(a, b),
                                                g = f.length;
                                            while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                                        })
                                        : function (a) {
                                            return e(a, 0, c);
                                        })
                                : e;
                    },
                },
                pseudos: {
                    not: ha(function (a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(Q, "$1"));
                        return d[u]
                            ? ha(function (a, b, c, e) {
                                var f,
                                    g = d(a, null, e, []),
                                    h = a.length;
                                while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                            })
                            : function (a, e, f) {
                                return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                            };
                    }),
                    has: ha(function (a) {
                        return function (b) {
                            return fa(a, b).length > 0;
                        };
                    }),
                    contains: ha(function (a) {
                        return (
                            (a = a.replace(ba, ca)),
                            function (b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                            }
                        );
                    }),
                    lang: ha(function (a) {
                        return (
                            V.test(a || "") || fa.error("unsupported lang: " + a),
                            (a = a.replace(ba, ca).toLowerCase()),
                            function (b) {
                                var c;
                                do
                                    if (
                                        (c = p
                                            ? b.lang
                                            : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                    )
                                        return (
                                            (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-")
                                        );
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id;
                    },
                    root: function (a) {
                        return a === o;
                    },
                    focus: function (a) {
                        return (
                            a === n.activeElement &&
                            (!n.hasFocus || n.hasFocus()) &&
                            !!(a.type || a.href || ~a.tabIndex)
                        );
                    },
                    enabled: function (a) {
                        return a.disabled === !1;
                    },
                    disabled: function (a) {
                        return a.disabled === !0;
                    },
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (
                            ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
                        );
                    },
                    selected: function (a) {
                        return (
                            a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        );
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (a) {
                        return !d.pseudos.empty(a);
                    },
                    header: function (a) {
                        return Y.test(a.nodeName);
                    },
                    input: function (a) {
                        return X.test(a.nodeName);
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b && "button" === a.type) || "button" === b;
                    },
                    text: function (a) {
                        var b;
                        return (
                            "input" === a.nodeName.toLowerCase() &&
                            "text" === a.type &&
                            (null == (b = a.getAttribute("type")) ||
                                "text" === b.toLowerCase())
                        );
                    },
                    first: na(function () {
                        return [0];
                    }),
                    last: na(function (a, b) {
                        return [b - 1];
                    }),
                    eq: na(function (a, b, c) {
                        return [0 > c ? c + b : c];
                    }),
                    even: na(function (a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a;
                    }),
                    odd: na(function (a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a;
                    }),
                    lt: na(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a;
                    }),
                    gt: na(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a;
                    }),
                },
            }),
            (d.pseudos.nth = d.pseudos.eq);
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
            d.pseudos[b] = la(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
        function pa() { }
        (pa.prototype = d.filters = d.pseudos),
            (d.setFilters = new pa()),
            (g = fa.tokenize = function (a, b) {
                var c,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                (h = a), (i = []), (j = d.preFilter);
                while (h) {
                    (c && !(e = R.exec(h))) ||
                        (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                        (c = !1),
                        (e = S.exec(h)) &&
                        ((c = e.shift()),
                            f.push({ value: c, type: e[0].replace(Q, " ") }),
                            (h = h.slice(c.length)));
                    for (g in d.filter)
                        !(e = W[g].exec(h)) ||
                            (j[g] && !(e = j[g](e))) ||
                            ((c = e.shift()),
                                f.push({ value: c, type: g, matches: e }),
                                (h = h.slice(c.length)));
                    if (!c) break;
                }
                return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
            });
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first
                ? function (b, c, f) {
                    while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
                }
                : function (b, c, g) {
                    var h,
                        i,
                        j,
                        k = [w, f];
                    if (g) {
                        while ((b = b[d]))
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                    } else
                        while ((b = b[d]))
                            if (1 === b.nodeType || e) {
                                if (
                                    ((j = b[u] || (b[u] = {})),
                                        (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                                        (h = i[d]) && h[0] === w && h[1] === f)
                                )
                                    return (k[2] = h[2]);
                                if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                            }
                };
        }
        function sa(a) {
            return a.length > 1
                ? function (b, c, d) {
                    var e = a.length;
                    while (e--) if (!a[e](b, c, d)) return !1;
                    return !0;
                }
                : a[0];
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c;
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
            return g;
        }
        function va(a, b, c, d, e, f) {
            return (
                d && !d[u] && (d = va(d)),
                e && !e[u] && (e = va(e, f)),
                ha(function (f, g, h, i) {
                    var j,
                        k,
                        l,
                        m = [],
                        n = [],
                        o = g.length,
                        p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || (!f && b) ? p : ua(p, m, a, h, i),
                        r = c ? (e || (f ? a : o || d) ? [] : g) : q;
                    if ((c && c(q, r, h, i), d)) {
                        (j = ua(r, n)), d(j, [], h, i), (k = j.length);
                        while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                (j = []), (k = r.length);
                                while (k--) (l = r[k]) && j.push((q[k] = l));
                                e(null, (r = []), j, i);
                            }
                            k = r.length;
                            while (k--)
                                (l = r[k]) &&
                                    (j = e ? J(f, l) : m[k]) > -1 &&
                                    (f[j] = !(g[j] = l));
                        }
                    } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
                })
            );
        }
        function wa(a) {
            for (
                var b,
                c,
                e,
                f = a.length,
                g = d.relative[a[0].type],
                h = g || d.relative[" "],
                i = g ? 1 : 0,
                k = ra(
                    function (a) {
                        return a === b;
                    },
                    h,
                    !0
                ),
                l = ra(
                    function (a) {
                        return J(b, a) > -1;
                    },
                    h,
                    !0
                ),
                m = [
                    function (a, c, d) {
                        var e =
                            (!g && (d || c !== j)) ||
                            ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        return (b = null), e;
                    },
                ];
                f > i;
                i++
            )
                if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
                else {
                    if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
                        for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                        return va(
                            i > 1 && sa(m),
                            i > 1 &&
                            qa(
                                a
                                    .slice(0, i - 1)
                                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                            ).replace(Q, "$1"),
                            c,
                            e > i && wa(a.slice(i, e)),
                            f > e && wa((a = a.slice(e))),
                            f > e && qa(a)
                        );
                    }
                    m.push(c);
                }
            return sa(m);
        }
        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l,
                        o,
                        q,
                        r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || (e && d.find.TAG("*", k)),
                        y = (w += null == v ? 1 : Math.random() || 0.1),
                        z = x.length;
                    for (
                        k && (j = g === n || g || k);
                        s !== z && null != (l = x[s]);
                        s++
                    ) {
                        if (e && l) {
                            (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
                            while ((q = a[o++]))
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break;
                                }
                            k && (w = y);
                        }
                        c && ((l = !q && l) && r--, f && t.push(l));
                    }
                    if (((r += s), c && s !== r)) {
                        o = 0;
                        while ((q = b[o++])) q(t, u, g, h);
                        if (f) {
                            if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u);
                        }
                        H.apply(i, u),
                            k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
                    }
                    return k && ((w = y), (j = v)), t;
                };
            return c ? ha(f) : f;
        }
        return (
            (h = fa.compile = function (a, b) {
                var c,
                    d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    b || (b = g(a)), (c = b.length);
                    while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
                    (f = A(a, xa(e, d))), (f.selector = a);
                }
                return f;
            }),
            (i = fa.select = function (a, b, e, f) {
                var i,
                    j,
                    k,
                    l,
                    m,
                    n = "function" == typeof a && a,
                    o = !f && g((a = n.selector || a));
                if (((e = e || []), 1 === o.length)) {
                    if (
                        ((j = o[0] = o[0].slice(0)),
                            j.length > 2 &&
                            "ID" === (k = j[0]).type &&
                            c.getById &&
                            9 === b.nodeType &&
                            p &&
                            d.relative[j[1].type])
                    ) {
                        if (
                            ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]), !b)
                        )
                            return e;
                        n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
                    }
                    i = W.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (((k = j[i]), d.relative[(l = k.type)])) break;
                        if (
                            (m = d.find[l]) &&
                            (f = m(
                                k.matches[0].replace(ba, ca),
                                (_.test(j[0].type) && oa(b.parentNode)) || b
                            ))
                        ) {
                            if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                                return H.apply(e, f), e;
                            break;
                        }
                    }
                }
                return (
                    (n || h(a, o))(
                        f,
                        b,
                        !p,
                        e,
                        !b || (_.test(a) && oa(b.parentNode)) || b
                    ),
                    e
                );
            }),
            (c.sortStable = u.split("").sort(B).join("") === u),
            (c.detectDuplicates = !!l),
            m(),
            (c.sortDetached = ia(function (a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"));
            })),
            ia(function (a) {
                return (
                    (a.innerHTML = "<a href='#'></a>"),
                    "#" === a.firstChild.getAttribute("href")
                );
            }) ||
            ja("type|href|height|width", function (a, b, c) {
                return c
                    ? void 0
                    : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
            }),
            (c.attributes &&
                ia(function (a) {
                    return (
                        (a.innerHTML = "<input/>"),
                        a.firstChild.setAttribute("value", ""),
                        "" === a.firstChild.getAttribute("value")
                    );
                })) ||
            ja("value", function (a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase()
                    ? void 0
                    : a.defaultValue;
            }),
            ia(function (a) {
                return null == a.getAttribute("disabled");
            }) ||
            ja(K, function (a, b, c) {
                var d;
                return c
                    ? void 0
                    : a[b] === !0
                        ? b.toLowerCase()
                        : (d = a.getAttributeNode(b)) && d.specified
                            ? d.value
                            : null;
            }),
            fa
        );
    })(a);
    (n.find = t),
        (n.expr = t.selectors),
        (n.expr[":"] = n.expr.pseudos),
        (n.uniqueSort = n.unique = t.uniqueSort),
        (n.text = t.getText),
        (n.isXMLDoc = t.isXML),
        (n.contains = t.contains);
    var u = function (a, b, c) {
        var d = [],
            e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a);
            }
        return d;
    },
        v = function (a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c;
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            });
        if (b.nodeType)
            return n.grep(a, function (a) {
                return (a === b) !== c;
            });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function (a) {
            return n.inArray(a, b) > -1 !== c;
        });
    }
    (n.filter = function (a, b, c) {
        var d = b[0];
        return (
            c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType
                ? n.find.matchesSelector(d, a)
                    ? [d]
                    : []
                : n.find.matches(
                    a,
                    n.grep(b, function (a) {
                        return 1 === a.nodeType;
                    })
                )
        );
    }),
        n.fn.extend({
            find: function (a) {
                var b,
                    c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a)
                    return this.pushStack(
                        n(a).filter(function () {
                            for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0;
                        })
                    );
                for (b = 0; e > b; b++) n.find(a, d[b], c);
                return (
                    (c = this.pushStack(e > 1 ? n.unique(c) : c)),
                    (c.selector = this.selector ? this.selector + " " + a : a),
                    c
                );
            },
            filter: function (a) {
                return this.pushStack(z(this, a || [], !1));
            },
            not: function (a) {
                return this.pushStack(z(this, a || [], !0));
            },
            is: function (a) {
                return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1)
                    .length;
            },
        });
    var A,
        B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = (n.fn.init = function (a, b, c) {
            var e, f;
            if (!a) return this;
            if (((c = c || A), "string" == typeof a)) {
                if (
                    ((e =
                        "<" === a.charAt(0) &&
                            ">" === a.charAt(a.length - 1) &&
                            a.length >= 3
                            ? [null, a, null]
                            : B.exec(a)),
                        !e || (!e[1] && b))
                )
                    return !b || b.jquery
                        ? (b || c).find(a)
                        : this.constructor(b).find(a);
                if (e[1]) {
                    if (
                        ((b = b instanceof n ? b[0] : b),
                            n.merge(
                                this,
                                n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
                            ),
                            x.test(e[1]) && n.isPlainObject(b))
                    )
                        for (e in b)
                            n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this;
                }
                if (((f = d.getElementById(e[2])), f && f.parentNode)) {
                    if (f.id !== e[2]) return A.find(a);
                    (this.length = 1), (this[0] = f);
                }
                return (this.context = d), (this.selector = a), this;
            }
            return a.nodeType
                ? ((this.context = this[0] = a), (this.length = 1), this)
                : n.isFunction(a)
                    ? "undefined" != typeof c.ready
                        ? c.ready(a)
                        : a(n)
                    : (void 0 !== a.selector &&
                        ((this.selector = a.selector), (this.context = a.context)),
                        n.makeArray(a, this));
        });
    (C.prototype = n.fn), (A = n(d));
    var D = /^(?:parents|prev(?:Until|All))/,
        E = { children: !0, contents: !0, next: !0, prev: !0 };
    n.fn.extend({
        has: function (a) {
            var b,
                c = n(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0;
            });
        },
        closest: function (a, b) {
            for (
                var c,
                d = 0,
                e = this.length,
                f = [],
                g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
                e > d;
                d++
            )
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (
                        c.nodeType < 11 &&
                        (g
                            ? g.index(c) > -1
                            : 1 === c.nodeType && n.find.matchesSelector(c, a))
                    ) {
                        f.push(c);
                        break;
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
        },
        index: function (a) {
            return a
                ? "string" == typeof a
                    ? n.inArray(this[0], n(a))
                    : n.inArray(a.jquery ? a[0] : a, this)
                : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
        },
        add: function (a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        },
    });
    function F(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a;
    }
    n.each(
        {
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null;
            },
            parents: function (a) {
                return u(a, "parentNode");
            },
            parentsUntil: function (a, b, c) {
                return u(a, "parentNode", c);
            },
            next: function (a) {
                return F(a, "nextSibling");
            },
            prev: function (a) {
                return F(a, "previousSibling");
            },
            nextAll: function (a) {
                return u(a, "nextSibling");
            },
            prevAll: function (a) {
                return u(a, "previousSibling");
            },
            nextUntil: function (a, b, c) {
                return u(a, "nextSibling", c);
            },
            prevUntil: function (a, b, c) {
                return u(a, "previousSibling", c);
            },
            siblings: function (a) {
                return v((a.parentNode || {}).firstChild, a);
            },
            children: function (a) {
                return v(a.firstChild);
            },
            contents: function (a) {
                return n.nodeName(a, "iframe")
                    ? a.contentDocument || a.contentWindow.document
                    : n.merge([], a.childNodes);
            },
        },
        function (a, b) {
            n.fn[a] = function (c, d) {
                var e = n.map(this, b, c);
                return (
                    "Until" !== a.slice(-5) && (d = c),
                    d && "string" == typeof d && (e = n.filter(d, e)),
                    this.length > 1 &&
                    (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())),
                    this.pushStack(e)
                );
            };
        }
    );
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return (
            n.each(a.match(G) || [], function (a, c) {
                b[c] = !0;
            }),
            b
        );
    }
    (n.Callbacks = function (a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function () {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length)
                        f[h].apply(c[0], c[1]) === !1 &&
                            a.stopOnFalse &&
                            ((h = f.length), (c = !1));
                }
                a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
            },
            j = {
                add: function () {
                    return (
                        f &&
                        (c && !b && ((h = f.length - 1), g.push(c)),
                            (function d(b) {
                                n.each(b, function (b, c) {
                                    n.isFunction(c)
                                        ? (a.unique && j.has(c)) || f.push(c)
                                        : c && c.length && "string" !== n.type(c) && d(c);
                                });
                            })(arguments),
                            c && !b && i()),
                        this
                    );
                },
                remove: function () {
                    return (
                        n.each(arguments, function (a, b) {
                            var c;
                            while ((c = n.inArray(b, f, c)) > -1)
                                f.splice(c, 1), h >= c && h--;
                        }),
                        this
                    );
                },
                has: function (a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0;
                },
                empty: function () {
                    return f && (f = []), this;
                },
                disable: function () {
                    return (e = g = []), (f = c = ""), this;
                },
                disabled: function () {
                    return !f;
                },
                lock: function () {
                    return (e = !0), c || j.disable(), this;
                },
                locked: function () {
                    return !!e;
                },
                fireWith: function (a, c) {
                    return (
                        e ||
                        ((c = c || []),
                            (c = [a, c.slice ? c.slice() : c]),
                            g.push(c),
                            b || i()),
                        this
                    );
                },
                fire: function () {
                    return j.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!d;
                },
            };
        return j;
    }),
        n.extend({
            Deferred: function (a) {
                var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")],
                ],
                    c = "pending",
                    d = {
                        state: function () {
                            return c;
                        },
                        always: function () {
                            return e.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var a = arguments;
                            return n
                                .Deferred(function (c) {
                                    n.each(b, function (b, f) {
                                        var g = n.isFunction(a[b]) && a[b];
                                        e[f[1]](function () {
                                            var a = g && g.apply(this, arguments);
                                            a && n.isFunction(a.promise)
                                                ? a
                                                    .promise()
                                                    .progress(c.notify)
                                                    .done(c.resolve)
                                                    .fail(c.reject)
                                                : c[f[0] + "With"](
                                                    this === d ? c.promise() : this,
                                                    g ? [a] : arguments
                                                );
                                        });
                                    }),
                                        (a = null);
                                })
                                .promise();
                        },
                        promise: function (a) {
                            return null != a ? n.extend(a, d) : d;
                        },
                    },
                    e = {};
                return (
                    (d.pipe = d.then),
                    n.each(b, function (a, f) {
                        var g = f[2],
                            h = f[3];
                        (d[f[1]] = g.add),
                            h &&
                            g.add(
                                function () {
                                    c = h;
                                },
                                b[1 ^ a][2].disable,
                                b[2][2].lock
                            ),
                            (e[f[0]] = function () {
                                return e[f[0] + "With"](this === e ? d : this, arguments), this;
                            }),
                            (e[f[0] + "With"] = g.fireWith);
                    }),
                    d.promise(e),
                    a && a.call(e, e),
                    e
                );
            },
            when: function (a) {
                var b = 0,
                    c = e.call(arguments),
                    d = c.length,
                    f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
                    g = 1 === f ? a : n.Deferred(),
                    h = function (a, b, c) {
                        return function (d) {
                            (b[a] = this),
                                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                        };
                    },
                    i,
                    j,
                    k;
                if (d > 1)
                    for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
                        c[b] && n.isFunction(c[b].promise)
                            ? c[b]
                                .promise()
                                .progress(h(b, j, i))
                                .done(h(b, k, c))
                                .fail(g.reject)
                            : --f;
                return f || g.resolveWith(k, c), g.promise();
            },
        });
    var I;
    (n.fn.ready = function (a) {
        return n.ready.promise().done(a), this;
    }),
        n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? n.readyWait++ : n.ready(!0);
            },
            ready: function (a) {
                (a === !0 ? --n.readyWait : n.isReady) ||
                    ((n.isReady = !0),
                        (a !== !0 && --n.readyWait > 0) ||
                        (I.resolveWith(d, [n]),
                            n.fn.triggerHandler &&
                            (n(d).triggerHandler("ready"), n(d).off("ready"))));
            },
        });
    function J() {
        d.addEventListener
            ? (d.removeEventListener("DOMContentLoaded", K),
                a.removeEventListener("load", K))
            : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
    }
    function K() {
        (d.addEventListener ||
            "load" === a.event.type ||
            "complete" === d.readyState) &&
            (J(), n.ready());
    }
    (n.ready.promise = function (b) {
        if (!I)
            if (
                ((I = n.Deferred()),
                    "complete" === d.readyState ||
                    ("loading" !== d.readyState && !d.documentElement.doScroll))
            )
                a.setTimeout(n.ready);
            else if (d.addEventListener)
                d.addEventListener("DOMContentLoaded", K),
                    a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement;
                } catch (e) { }
                c &&
                    c.doScroll &&
                    !(function f() {
                        if (!n.isReady) {
                            try {
                                c.doScroll("left");
                            } catch (b) {
                                return a.setTimeout(f, 50);
                            }
                            J(), n.ready();
                        }
                    })();
            }
        return I.promise(b);
    }),
        n.ready.promise();
    var L;
    for (L in n(l)) break;
    (l.ownFirst = "0" === L),
        (l.inlineBlockNeedsLayout = !1),
        n(function () {
            var a, b, c, e;
            (c = d.getElementsByTagName("body")[0]),
                c &&
                c.style &&
                ((b = d.createElement("div")),
                    (e = d.createElement("div")),
                    (e.style.cssText =
                        "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                    c.appendChild(e).appendChild(b),
                    "undefined" != typeof b.style.zoom &&
                    ((b.style.cssText =
                        "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                        (l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
                        a && (c.style.zoom = 1)),
                    c.removeChild(e));
        }),
        (function () {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test;
            } catch (b) {
                l.deleteExpando = !1;
            }
            a = null;
        })();
    var M = function (a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()],
            c = +a.nodeType || 1;
        return 1 !== c && 9 !== c
            ? !1
            : !b || (b !== !0 && a.getAttribute("classid") === b);
    },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (((c = a.getAttribute(d)), "string" == typeof c)) {
                try {
                    c =
                        "true" === c
                            ? !0
                            : "false" === c
                                ? !1
                                : "null" === c
                                    ? null
                                    : +c + "" === c
                                        ? +c
                                        : N.test(c)
                                            ? n.parseJSON(c)
                                            : c;
                } catch (e) { }
                n.data(a, b, c);
            } else c = void 0;
        }
        return c;
    }
    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function R(a, b, d, e) {
        if (M(a)) {
            var f,
                g,
                h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (
                (k && j[k] && (e || j[k].data)) ||
                void 0 !== d ||
                "string" != typeof b
            )
                return (
                    k || (k = i ? (a[h] = c.pop() || n.guid++) : h),
                    j[k] || (j[k] = i ? {} : { toJSON: n.noop }),
                    ("object" != typeof b && "function" != typeof b) ||
                    (e
                        ? (j[k] = n.extend(j[k], b))
                        : (j[k].data = n.extend(j[k].data, b))),
                    (g = j[k]),
                    e || (g.data || (g.data = {}), (g = g.data)),
                    void 0 !== d && (g[n.camelCase(b)] = d),
                    "string" == typeof b
                        ? ((f = g[b]), null == f && (f = g[n.camelCase(b)]))
                        : (f = g),
                    f
                );
        }
    }
    function S(a, b, c) {
        if (M(a)) {
            var d,
                e,
                f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b)
                        ? (b = b.concat(n.map(b, n.camelCase)))
                        : b in d
                            ? (b = [b])
                            : ((b = n.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
                        (e = b.length);
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return;
                }
                (c || (delete g[h].data, Q(g[h]))) &&
                    (f
                        ? n.cleanData([a], !0)
                        : l.deleteExpando || g != g.window
                            ? delete g[h]
                            : (g[h] = void 0));
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        },
        hasData: function (a) {
            return (
                (a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]), !!a && !Q(a)
            );
        },
        data: function (a, b, c) {
            return R(a, b, c);
        },
        removeData: function (a, b) {
            return S(a, b);
        },
        _data: function (a, b, c) {
            return R(a, b, c, !0);
        },
        _removeData: function (a, b) {
            return S(a, b, !0);
        },
    }),
        n.fn.extend({
            data: function (a, b) {
                var c,
                    d,
                    e,
                    f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (
                        this.length &&
                        ((e = n.data(f)), 1 === f.nodeType && !n._data(f, "parsedAttrs"))
                    ) {
                        c = g.length;
                        while (c--)
                            g[c] &&
                                ((d = g[c].name),
                                    0 === d.indexOf("data-") &&
                                    ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0);
                    }
                    return e;
                }
                return "object" == typeof a
                    ? this.each(function () {
                        n.data(this, a);
                    })
                    : arguments.length > 1
                        ? this.each(function () {
                            n.data(this, a, b);
                        })
                        : f
                            ? P(f, a, n.data(f, a))
                            : void 0;
            },
            removeData: function (a) {
                return this.each(function () {
                    n.removeData(this, a);
                });
            },
        }),
        n.extend({
            queue: function (a, b, c) {
                var d;
                return a
                    ? ((b = (b || "fx") + "queue"),
                        (d = n._data(a, b)),
                        c &&
                        (!d || n.isArray(c)
                            ? (d = n._data(a, b, n.makeArray(c)))
                            : d.push(c)),
                        d || [])
                    : void 0;
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function () {
                        n.dequeue(a, b);
                    };
                "inprogress" === e && ((e = c.shift()), d--),
                    e &&
                    ("fx" === b && c.unshift("inprogress"),
                        delete f.stop,
                        e.call(a, g, f)),
                    !d && f && f.empty.fire();
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return (
                    n._data(a, c) ||
                    n._data(a, c, {
                        empty: n.Callbacks("once memory").add(function () {
                            n._removeData(a, b + "queue"), n._removeData(a, c);
                        }),
                    })
                );
            },
        }),
        n.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return (
                    "string" != typeof a && ((b = a), (a = "fx"), c--),
                    arguments.length < c
                        ? n.queue(this[0], a)
                        : void 0 === b
                            ? this
                            : this.each(function () {
                                var c = n.queue(this, a, b);
                                n._queueHooks(this, a),
                                    "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
                            })
                );
            },
            dequeue: function (a) {
                return this.each(function () {
                    n.dequeue(this, a);
                });
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", []);
            },
            promise: function (a, b) {
                var c,
                    d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f]);
                    };
                "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
                while (g--)
                    (c = n._data(f[g], a + "queueHooks")),
                        c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b);
            },
        }),
        (function () {
            var a;
            l.shrinkWrapBlocks = function () {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return (
                    (c = d.getElementsByTagName("body")[0]),
                    c && c.style
                        ? ((b = d.createElement("div")),
                            (e = d.createElement("div")),
                            (e.style.cssText =
                                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                            c.appendChild(e).appendChild(b),
                            "undefined" != typeof b.style.zoom &&
                            ((b.style.cssText =
                                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                                (b.appendChild(d.createElement("div")).style.width = "5px"),
                                (a = 3 !== b.offsetWidth)),
                            c.removeChild(e),
                            a)
                        : void 0
                );
            };
        })();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function (a, b) {
            return (
                (a = b || a),
                "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
            );
        };
    function X(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d
                ? function () {
                    return d.cur();
                }
                : function () {
                    return n.css(a, b, "");
                },
            i = h(),
            j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || ("px" !== j && +i)) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            (j = j || k[3]), (c = c || []), (k = +i || 1);
            do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return (
            c &&
            ((k = +k || +i || 0),
                (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
                d && ((d.unit = j), (d.start = k), (d.end = e))),
            e
        );
    }
    var Y = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) Y(a, b, h, c[h], !0, f, g);
        } else if (
            void 0 !== d &&
            ((e = !0),
                n.isFunction(d) || (g = !0),
                j &&
                (g
                    ? (b.call(a, d), (b = null))
                    : ((j = b),
                        (b = function (a, b, c) {
                            return j.call(n(a), c);
                        }))),
                b)
        )
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c;
    }
    !(function () {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        (a.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (l.leadingWhitespace = 3 === a.firstChild.nodeType),
            (l.tbody = !a.getElementsByTagName("tbody").length),
            (l.htmlSerialize = !!a.getElementsByTagName("link").length),
            (l.html5Clone =
                "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML),
            (c.type = "checkbox"),
            (c.checked = !0),
            b.appendChild(c),
            (l.appendChecked = c.checked),
            (a.innerHTML = "<textarea>x</textarea>"),
            (l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue),
            b.appendChild(a),
            (c = d.createElement("input")),
            c.setAttribute("type", "radio"),
            c.setAttribute("checked", "checked"),
            c.setAttribute("name", "t"),
            a.appendChild(c),
            (l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (l.noCloneEvent = !!a.addEventListener),
            (a[n.expando] = 1),
            (l.attributes = !a.getAttribute(n.expando));
    })();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    };
    (da.optgroup = da.option),
        (da.tbody = da.tfoot = da.colgroup = da.caption = da.thead),
        (da.th = da.td);
    function ea(a, b) {
        var c,
            d,
            e = 0,
            f =
                "undefined" != typeof a.getElementsByTagName
                    ? a.getElementsByTagName(b || "*")
                    : "undefined" != typeof a.querySelectorAll
                        ? a.querySelectorAll(b || "*")
                        : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], f) : f;
    }
    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;
    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked);
    }
    function ja(a, b, c, d, e) {
        for (
            var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0;
            o > r;
            r++
        )
            if (((g = a[r]), g || 0 === g))
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
                    (i = i || p.appendChild(b.createElement("div"))),
                        (j = ($.exec(g) || ["", ""])[1].toLowerCase()),
                        (m = da[j] || da._default),
                        (i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2]),
                        (f = m[0]);
                    while (f--) i = i.lastChild;
                    if (
                        (!l.leadingWhitespace &&
                            aa.test(g) &&
                            q.push(b.createTextNode(aa.exec(g)[0])),
                            !l.tbody)
                    ) {
                        (g =
                            "table" !== j || ha.test(g)
                                ? "<table>" !== m[1] || ha.test(g)
                                    ? 0
                                    : i
                                : i.firstChild),
                            (f = g && g.childNodes.length);
                        while (f--)
                            n.nodeName((k = g.childNodes[f]), "tbody") &&
                                !k.childNodes.length &&
                                g.removeChild(k);
                    }
                    n.merge(q, i.childNodes), (i.textContent = "");
                    while (i.firstChild) i.removeChild(i.firstChild);
                    i = p.lastChild;
                } else q.push(b.createTextNode(g));
        i && p.removeChild(i),
            l.appendChecked || n.grep(ea(q, "input"), ia),
            (r = 0);
        while ((g = q[r++]))
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (
                ((h = n.contains(g.ownerDocument, g)),
                    (i = ea(p.appendChild(g), "script")),
                    h && fa(i),
                    c)
            ) {
                f = 0;
                while ((g = i[f++])) _.test(g.type || "") && c.push(g);
            }
        return (i = null), p;
    }
    !(function () {
        var b,
            c,
            e = d.createElement("div");
        for (b in { submit: !0, change: !0, focusin: !0 })
            (c = "on" + b),
                (l[b] = c in a) ||
                (e.setAttribute(c, "t"), (l[b] = e.attributes[c].expando === !1));
        e = null;
    })();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return !0;
    }
    function qa() {
        return !1;
    }
    function ra() {
        try {
            return d.activeElement;
        } catch (a) { }
    }
    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && ((d = d || c), (c = void 0));
            for (h in b) sa(a, h, c, d, b[h], f);
            return a;
        }
        if (
            (null == d && null == e
                ? ((e = c), (d = c = void 0))
                : null == e &&
                ("string" == typeof c
                    ? ((e = d), (d = void 0))
                    : ((e = d), (d = c), (c = void 0))),
                e === !1)
        )
            e = qa;
        else if (!e) return a;
        return (
            1 === f &&
            ((g = e),
                (e = function (a) {
                    return n().off(a), g.apply(this, arguments);
                }),
                (e.guid = g.guid || (g.guid = n.guid++))),
            a.each(function () {
                n.event.add(this, b, e, d, c);
            })
        );
    }
    (n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = n._data(a);
            if (r) {
                c.handler && ((i = c), (c = i.handler), (e = i.selector)),
                    c.guid || (c.guid = n.guid++),
                    (g = r.events) || (g = r.events = {}),
                    (k = r.handle) ||
                    ((k = r.handle = function (a) {
                        return "undefined" == typeof n ||
                            (a && n.event.triggered === a.type)
                            ? void 0
                            : n.event.dispatch.apply(k.elem, arguments);
                    }),
                        (k.elem = a)),
                    (b = (b || "").match(G) || [""]),
                    (h = b.length);
                while (h--)
                    (f = oa.exec(b[h]) || []),
                        (o = q = f[1]),
                        (p = (f[2] || "").split(".").sort()),
                        o &&
                        ((j = n.event.special[o] || {}),
                            (o = (e ? j.delegateType : j.bindType) || o),
                            (j = n.event.special[o] || {}),
                            (l = n.extend(
                                {
                                    type: o,
                                    origType: q,
                                    data: d,
                                    handler: c,
                                    guid: c.guid,
                                    selector: e,
                                    needsContext: e && n.expr.match.needsContext.test(e),
                                    namespace: p.join("."),
                                },
                                i
                            )),
                            (m = g[o]) ||
                            ((m = g[o] = []),
                                (m.delegateCount = 0),
                                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                                (a.addEventListener
                                    ? a.addEventListener(o, k, !1)
                                    : a.attachEvent && a.attachEvent("on" + o, k))),
                            j.add &&
                            (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                            (n.event.global[o] = !0));
                a = null;
            }
        },
        remove: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                (b = (b || "").match(G) || [""]), (j = b.length);
                while (j--)
                    if (
                        ((h = oa.exec(b[j]) || []),
                            (o = q = h[1]),
                            (p = (h[2] || "").split(".").sort()),
                            o)
                    ) {
                        (l = n.event.special[o] || {}),
                            (o = (d ? l.delegateType : l.bindType) || o),
                            (m = k[o] || []),
                            (h =
                                h[2] &&
                                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                            (i = f = m.length);
                        while (f--)
                            (g = m[f]),
                                (!e && q !== g.origType) ||
                                (c && c.guid !== g.guid) ||
                                (h && !h.test(g.namespace)) ||
                                (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                                (m.splice(f, 1),
                                    g.selector && m.delegateCount--,
                                    l.remove && l.remove.call(a, g));
                        i &&
                            !m.length &&
                            ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                                n.removeEvent(a, o, r.handle),
                                delete k[o]);
                    } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
            }
        },
        trigger: function (b, c, e, f) {
            var g,
                h,
                i,
                j,
                l,
                m,
                o,
                p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (
                ((i = m = e = e || d),
                    3 !== e.nodeType &&
                    8 !== e.nodeType &&
                    !na.test(q + n.event.triggered) &&
                    (q.indexOf(".") > -1 &&
                        ((r = q.split(".")), (q = r.shift()), r.sort()),
                        (h = q.indexOf(":") < 0 && "on" + q),
                        (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
                        (b.isTrigger = f ? 2 : 3),
                        (b.namespace = r.join(".")),
                        (b.rnamespace = b.namespace
                            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
                            : null),
                        (b.result = void 0),
                        b.target || (b.target = e),
                        (c = null == c ? [b] : n.makeArray(c, [b])),
                        (l = n.event.special[q] || {}),
                        f || !l.trigger || l.trigger.apply(e, c) !== !1))
            ) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (
                        j = l.delegateType || q, na.test(j + q) || (i = i.parentNode);
                        i;
                        i = i.parentNode
                    )
                        p.push(i), (m = i);
                    m === (e.ownerDocument || d) &&
                        p.push(m.defaultView || m.parentWindow || a);
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped())
                    (b.type = o > 1 ? j : l.bindType || q),
                        (g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle")),
                        g && g.apply(i, c),
                        (g = h && i[h]),
                        g &&
                        g.apply &&
                        M(i) &&
                        ((b.result = g.apply(i, c)),
                            b.result === !1 && b.preventDefault());
                if (
                    ((b.type = q),
                        !f &&
                        !b.isDefaultPrevented() &&
                        (!l._default || l._default.apply(p.pop(), c) === !1) &&
                        M(e) &&
                        h &&
                        e[q] &&
                        !n.isWindow(e))
                ) {
                    (m = e[h]), m && (e[h] = null), (n.event.triggered = q);
                    try {
                        e[q]();
                    } catch (s) { }
                    (n.event.triggered = void 0), m && (e[h] = m);
                }
                return b.result;
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b,
                c,
                d,
                f,
                g,
                h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (
                ((i[0] = a),
                    (a.delegateTarget = this),
                    !k.preDispatch || k.preDispatch.call(this, a) !== !1)
            ) {
                (h = n.event.handlers.call(this, a, j)), (b = 0);
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    (a.currentTarget = f.elem), (c = 0);
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
                            ((a.handleObj = g),
                                (a.data = g.data),
                                (d = (
                                    (n.event.special[g.origType] || {}).handle || g.handler
                                ).apply(f.elem, i)),
                                void 0 !== d &&
                                (a.result = d) === !1 &&
                                (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;
            if (
                h &&
                i.nodeType &&
                ("click" !== a.type || isNaN(a.button) || a.button < 1)
            )
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++)
                            (f = b[c]),
                                (e = f.selector + " "),
                                void 0 === d[e] &&
                                (d[e] = f.needsContext
                                    ? n(e, this).index(i) > -1
                                    : n.find(e, this, null, [i]).length),
                                d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d });
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b,
                c,
                e,
                f = a.type,
                g = a,
                h = this.fixHooks[f];
            h ||
                (this.fixHooks[f] = h = ma.test(f)
                    ? this.mouseHooks
                    : la.test(f)
                        ? this.keyHooks
                        : {}),
                (e = h.props ? this.props.concat(h.props) : this.props),
                (a = new n.Event(g)),
                (b = e.length);
            while (b--) (c = e[b]), (a[c] = g[c]);
            return (
                a.target || (a.target = g.srcElement || d),
                3 === a.target.nodeType && (a.target = a.target.parentNode),
                (a.metaKey = !!a.metaKey),
                h.filter ? h.filter(a, g) : a
            );
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
            " "
        ),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return (
                    null == a.which &&
                    (a.which = null != b.charCode ? b.charCode : b.keyCode),
                    a
                );
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
            ),
            filter: function (a, b) {
                var c,
                    e,
                    f,
                    g = b.button,
                    h = b.fromElement;
                return (
                    null == a.pageX &&
                    null != b.clientX &&
                    ((e = a.target.ownerDocument || d),
                        (f = e.documentElement),
                        (c = e.body),
                        (a.pageX =
                            b.clientX +
                            ((f && f.scrollLeft) || (c && c.scrollLeft) || 0) -
                            ((f && f.clientLeft) || (c && c.clientLeft) || 0)),
                        (a.pageY =
                            b.clientY +
                            ((f && f.scrollTop) || (c && c.scrollTop) || 0) -
                            ((f && f.clientTop) || (c && c.clientTop) || 0))),
                    !a.relatedTarget &&
                    h &&
                    (a.relatedTarget = h === a.target ? b.toElement : h),
                    a.which ||
                    void 0 === g ||
                    (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                    a
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== ra() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (a) { }
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return n.nodeName(this, "input") &&
                        "checkbox" === this.type &&
                        this.click
                        ? (this.click(), !1)
                        : void 0;
                },
                _default: function (a) {
                    return n.nodeName(a.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result &&
                        a.originalEvent &&
                        (a.originalEvent.returnValue = a.result);
                },
            },
        },
        simulate: function (a, b, c) {
            var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
        },
    }),
        (n.removeEvent = d.removeEventListener
            ? function (a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c);
            }
            : function (a, b, c) {
                var d = "on" + b;
                a.detachEvent &&
                    ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
            }),
        (n.Event = function (a, b) {
            return this instanceof n.Event
                ? (a && a.type
                    ? ((this.originalEvent = a),
                        (this.type = a.type),
                        (this.isDefaultPrevented =
                            a.defaultPrevented ||
                                (void 0 === a.defaultPrevented && a.returnValue === !1)
                                ? pa
                                : qa))
                    : (this.type = a),
                    b && n.extend(this, b),
                    (this.timeStamp = (a && a.timeStamp) || n.now()),
                    void (this[n.expando] = !0))
                : new n.Event(a, b);
        }),
        (n.Event.prototype = {
            constructor: n.Event,
            isDefaultPrevented: qa,
            isPropagationStopped: qa,
            isImmediatePropagationStopped: qa,
            preventDefault: function () {
                var a = this.originalEvent;
                (this.isDefaultPrevented = pa),
                    a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                (this.isPropagationStopped = pa),
                    a &&
                    !this.isSimulated &&
                    (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                (this.isImmediatePropagationStopped = pa),
                    a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        n.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (a, b) {
                n.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function (a) {
                        var c,
                            d = this,
                            e = a.relatedTarget,
                            f = a.handleObj;
                        return (
                            (e && (e === d || n.contains(d, e))) ||
                            ((a.type = f.origType),
                                (c = f.handler.apply(this, arguments)),
                                (a.type = b)),
                            c
                        );
                    },
                };
            }
        ),
        l.submit ||
        (n.event.special.submit = {
            setup: function () {
                return n.nodeName(this, "form")
                    ? !1
                    : void n.event.add(
                        this,
                        "click._submit keypress._submit",
                        function (a) {
                            var b = a.target,
                                c =
                                    n.nodeName(b, "input") || n.nodeName(b, "button")
                                        ? n.prop(b, "form")
                                        : void 0;
                            c &&
                                !n._data(c, "submit") &&
                                (n.event.add(c, "submit._submit", function (a) {
                                    a._submitBubble = !0;
                                }),
                                    n._data(c, "submit", !0));
                        }
                    );
            },
            postDispatch: function (a) {
                a._submitBubble &&
                    (delete a._submitBubble,
                        this.parentNode &&
                        !a.isTrigger &&
                        n.event.simulate("submit", this.parentNode, a));
            },
            teardown: function () {
                return n.nodeName(this, "form")
                    ? !1
                    : void n.event.remove(this, "._submit");
            },
        }),
        l.change ||
        (n.event.special.change = {
            setup: function () {
                return ka.test(this.nodeName)
                    ? (("checkbox" !== this.type && "radio" !== this.type) ||
                        (n.event.add(this, "propertychange._change", function (a) {
                            "checked" === a.originalEvent.propertyName &&
                                (this._justChanged = !0);
                        }),
                            n.event.add(this, "click._change", function (a) {
                                this._justChanged && !a.isTrigger && (this._justChanged = !1),
                                    n.event.simulate("change", this, a);
                            })),
                        !1)
                    : void n.event.add(this, "beforeactivate._change", function (a) {
                        var b = a.target;
                        ka.test(b.nodeName) &&
                            !n._data(b, "change") &&
                            (n.event.add(b, "change._change", function (a) {
                                !this.parentNode ||
                                    a.isSimulated ||
                                    a.isTrigger ||
                                    n.event.simulate("change", this.parentNode, a);
                            }),
                                n._data(b, "change", !0));
                    });
            },
            handle: function (a) {
                var b = a.target;
                return this !== b ||
                    a.isSimulated ||
                    a.isTrigger ||
                    ("radio" !== b.type && "checkbox" !== b.type)
                    ? a.handleObj.handler.apply(this, arguments)
                    : void 0;
            },
            teardown: function () {
                return n.event.remove(this, "._change"), !ka.test(this.nodeName);
            },
        }),
        l.focusin ||
        n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
            var c = function (a) {
                n.event.simulate(b, a.target, n.event.fix(a));
            };
            n.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b);
                    e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
                },
                teardown: function () {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b) - 1;
                    e
                        ? n._data(d, b, e)
                        : (d.removeEventListener(a, c, !0), n._removeData(d, b));
                },
            };
        }),
        n.fn.extend({
            on: function (a, b, c, d) {
                return sa(this, a, b, c, d);
            },
            one: function (a, b, c, d) {
                return sa(this, a, b, c, d, 1);
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return (
                        (d = a.handleObj),
                        n(a.delegateTarget).off(
                            d.namespace ? d.origType + "." + d.namespace : d.origType,
                            d.selector,
                            d.handler
                        ),
                        this
                    );
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this;
                }
                return (
                    (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
                    c === !1 && (c = qa),
                    this.each(function () {
                        n.event.remove(this, a, c, b);
                    })
                );
            },
            trigger: function (a, b) {
                return this.each(function () {
                    n.event.trigger(a, b, this);
                });
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0;
            },
        });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
        return n.nodeName(a, "table") &&
            n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
            ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody"))
            : a;
    }
    function Da(a) {
        return (a.type = (null !== n.find.attr(a, "type")) + "/" + a.type), a;
    }
    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c,
                d,
                e,
                f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, (g.events = {});
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = n.extend({}, g.data));
        }
    }
    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (((c = b.nodeName.toLowerCase()), !l.noCloneEvent && b[n.expando])) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando);
            }
            "script" === c && b.text !== a.text
                ? ((Da(b).text = a.text), Ea(b))
                : "object" === c
                    ? (b.parentNode && (b.outerHTML = a.outerHTML),
                        l.html5Clone &&
                        a.innerHTML &&
                        !n.trim(b.innerHTML) &&
                        (b.innerHTML = a.innerHTML))
                    : "input" === c && Z.test(a.type)
                        ? ((b.defaultChecked = b.checked = a.checked),
                            b.value !== a.value && (b.value = a.value))
                        : "option" === c
                            ? (b.defaultSelected = b.selected = a.defaultSelected)
                            : ("input" !== c && "textarea" !== c) ||
                            (b.defaultValue = a.defaultValue);
        }
    }
    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e,
            g,
            h,
            i,
            j,
            k,
            m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || (o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)))
            return a.each(function (e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
            });
        if (
            o &&
            ((k = ja(b, a[0].ownerDocument, !1, a, d)),
                (e = k.firstChild),
                1 === k.childNodes.length && (k = e),
                e || d)
        ) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++)
                (g = k),
                    m !== p &&
                    ((g = n.clone(g, !0, !0)), h && n.merge(i, ea(g, "script"))),
                    c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++)
                    (g = i[m]),
                        _.test(g.type || "") &&
                        !n._data(g, "globalEval") &&
                        n.contains(j, g) &&
                        (g.src
                            ? n._evalUrl && n._evalUrl(g.src)
                            : n.globalEval(
                                (g.text || g.textContent || g.innerHTML || "").replace(
                                    za,
                                    ""
                                )
                            ));
            k = e = null;
        }
        return a;
    }
    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(ea(d)),
                d.parentNode &&
                (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
                    d.parentNode.removeChild(d));
        return a;
    }
    n.extend({
        htmlPrefilter: function (a) {
            return a.replace(va, "<$1></$2>");
        },
        clone: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i = n.contains(a.ownerDocument, a);
            if (
                (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">")
                    ? (f = a.cloneNode(!0))
                    : ((Ba.innerHTML = a.outerHTML), Ba.removeChild((f = Ba.firstChild))),
                    !(
                        (l.noCloneEvent && l.noCloneChecked) ||
                        (1 !== a.nodeType && 11 !== a.nodeType) ||
                        n.isXMLDoc(a)
                    ))
            )
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g)
                    d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++)
                        Fa(e, d[g]);
                else Fa(a, f);
            return (
                (d = ea(f, "script")),
                d.length > 0 && fa(d, !i && ea(a, "script")),
                (d = h = e = null),
                f
            );
        },
        cleanData: function (a, b) {
            for (
                var d,
                e,
                f,
                g,
                h = 0,
                i = n.expando,
                j = n.cache,
                k = l.attributes,
                m = n.event.special;
                null != (d = a[h]);
                h++
            )
                if ((b || M(d)) && ((f = d[i]), (g = f && j[f]))) {
                    if (g.events)
                        for (e in g.events)
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] &&
                        (delete j[f],
                            k || "undefined" == typeof d.removeAttribute
                                ? (d[i] = void 0)
                                : d.removeAttribute(i),
                            c.push(f));
                }
        },
    }),
        n.fn.extend({
            domManip: Ha,
            detach: function (a) {
                return Ia(this, a, !0);
            },
            remove: function (a) {
                return Ia(this, a);
            },
            text: function (a) {
                return Y(
                    this,
                    function (a) {
                        return void 0 === a
                            ? n.text(this)
                            : this.empty().append(
                                ((this[0] && this[0].ownerDocument) || d).createTextNode(a)
                            );
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            append: function () {
                return Ha(this, arguments, function (a) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var b = Ca(this, a);
                        b.appendChild(a);
                    }
                });
            },
            prepend: function () {
                return Ha(this, arguments, function (a) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var b = Ca(this, a);
                        b.insertBefore(a, b.firstChild);
                    }
                });
            },
            before: function () {
                return Ha(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this);
                });
            },
            after: function () {
                return Ha(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
                });
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    1 === a.nodeType && n.cleanData(ea(a, !1));
                    while (a.firstChild) a.removeChild(a.firstChild);
                    a.options && n.nodeName(a, "select") && (a.options.length = 0);
                }
                return this;
            },
            clone: function (a, b) {
                return (
                    (a = null == a ? !1 : a),
                    (b = null == b ? a : b),
                    this.map(function () {
                        return n.clone(this, a, b);
                    })
                );
            },
            html: function (a) {
                return Y(
                    this,
                    function (a) {
                        var b = this[0] || {},
                            c = 0,
                            d = this.length;
                        if (void 0 === a)
                            return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                        if (
                            "string" == typeof a &&
                            !wa.test(a) &&
                            (l.htmlSerialize || !ua.test(a)) &&
                            (l.leadingWhitespace || !aa.test(a)) &&
                            !da[($.exec(a) || ["", ""])[1].toLowerCase()]
                        ) {
                            a = n.htmlPrefilter(a);
                            try {
                                for (; d > c; c++)
                                    (b = this[c] || {}),
                                        1 === b.nodeType &&
                                        (n.cleanData(ea(b, !1)), (b.innerHTML = a));
                                b = 0;
                            } catch (e) { }
                        }
                        b && this.empty().append(a);
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            replaceWith: function () {
                var a = [];
                return Ha(
                    this,
                    arguments,
                    function (b) {
                        var c = this.parentNode;
                        n.inArray(this, a) < 0 &&
                            (n.cleanData(ea(this)), c && c.replaceChild(b, this));
                    },
                    a
                );
            },
        }),
        n.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (a, b) {
                n.fn[a] = function (a) {
                    for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
                        (c = d === h ? this : this.clone(!0)),
                            n(f[d])[b](c),
                            g.apply(e, c.get());
                    return this.pushStack(e);
                };
            }
        );
    var Ja,
        Ka = { HTML: "block", BODY: "block" };
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d;
    }
    function Ma(a) {
        var b = d,
            c = Ka[a];
        return (
            c ||
            ((c = La(a, b)),
                ("none" !== c && c) ||
                ((Ja = (
                    Ja || n("<iframe frameborder='0' width='0' height='0'/>")
                ).appendTo(b.documentElement)),
                    (b = (Ja[0].contentWindow || Ja[0].contentDocument).document),
                    b.write(),
                    b.close(),
                    (c = La(a, b)),
                    Ja.detach()),
                (Ka[a] = c)),
            c
        );
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function (a, b, c, d) {
            var e,
                f,
                g = {};
            for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        },
        Qa = d.documentElement;
    !(function () {
        var b,
            c,
            e,
            f,
            g,
            h,
            i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            (j.style.cssText = "float:left;opacity:.5"),
                (l.opacity = "0.5" === j.style.opacity),
                (l.cssFloat = !!j.style.cssFloat),
                (j.style.backgroundClip = "content-box"),
                (j.cloneNode(!0).style.backgroundClip = ""),
                (l.clearCloneStyle = "content-box" === j.style.backgroundClip),
                (i = d.createElement("div")),
                (i.style.cssText =
                    "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                (j.innerHTML = ""),
                i.appendChild(j),
                (l.boxSizing =
                    "" === j.style.boxSizing ||
                    "" === j.style.MozBoxSizing ||
                    "" === j.style.WebkitBoxSizing),
                n.extend(l, {
                    reliableHiddenOffsets: function () {
                        return null == b && k(), f;
                    },
                    boxSizingReliable: function () {
                        return null == b && k(), e;
                    },
                    pixelMarginRight: function () {
                        return null == b && k(), c;
                    },
                    pixelPosition: function () {
                        return null == b && k(), b;
                    },
                    reliableMarginRight: function () {
                        return null == b && k(), g;
                    },
                    reliableMarginLeft: function () {
                        return null == b && k(), h;
                    },
                });
            function k() {
                var k,
                    l,
                    m = d.documentElement;
                m.appendChild(i),
                    (j.style.cssText =
                        "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                    (b = e = h = !1),
                    (c = g = !0),
                    a.getComputedStyle &&
                    ((l = a.getComputedStyle(j)),
                        (b = "1%" !== (l || {}).top),
                        (h = "2px" === (l || {}).marginLeft),
                        (e = "4px" === (l || { width: "4px" }).width),
                        (j.style.marginRight = "50%"),
                        (c = "4px" === (l || { marginRight: "4px" }).marginRight),
                        (k = j.appendChild(d.createElement("div"))),
                        (k.style.cssText = j.style.cssText =
                            "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                        (k.style.marginRight = k.style.width = "0"),
                        (j.style.width = "1px"),
                        (g = !parseFloat((a.getComputedStyle(k) || {}).marginRight)),
                        j.removeChild(k)),
                    (j.style.display = "none"),
                    (f = 0 === j.getClientRects().length),
                    f &&
                    ((j.style.display = ""),
                        (j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                        (j.childNodes[0].style.borderCollapse = "separate"),
                        (k = j.getElementsByTagName("td")),
                        (k[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                        (f = 0 === k[0].offsetHeight),
                        f &&
                        ((k[0].style.display = ""),
                            (k[1].style.display = "none"),
                            (f = 0 === k[0].offsetHeight))),
                    m.removeChild(i);
            }
        }
    })();
    var Ra,
        Sa,
        Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle
        ? ((Ra = function (b) {
            var c = b.ownerDocument.defaultView;
            return (c && c.opener) || (c = a), c.getComputedStyle(b);
        }),
            (Sa = function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = a.style;
                return (
                    (c = c || Ra(a)),
                    (g = c ? c.getPropertyValue(b) || c[b] : void 0),
                    ("" !== g && void 0 !== g) ||
                    n.contains(a.ownerDocument, a) ||
                    (g = n.style(a, b)),
                    c &&
                    !l.pixelMarginRight() &&
                    Oa.test(g) &&
                    Na.test(b) &&
                    ((d = h.width),
                        (e = h.minWidth),
                        (f = h.maxWidth),
                        (h.minWidth = h.maxWidth = h.width = g),
                        (g = c.width),
                        (h.width = d),
                        (h.minWidth = e),
                        (h.maxWidth = f)),
                    void 0 === g ? g : g + ""
                );
            }))
        : Qa.currentStyle &&
        ((Ra = function (a) {
            return a.currentStyle;
        }),
            (Sa = function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = a.style;
                return (
                    (c = c || Ra(a)),
                    (g = c ? c[b] : void 0),
                    null == g && h && h[b] && (g = h[b]),
                    Oa.test(g) &&
                    !Ta.test(b) &&
                    ((d = h.left),
                        (e = a.runtimeStyle),
                        (f = e && e.left),
                        f && (e.left = a.currentStyle.left),
                        (h.left = "fontSize" === b ? "1em" : g),
                        (g = h.pixelLeft + "px"),
                        (h.left = d),
                        f && (e.left = f)),
                    void 0 === g ? g : g + "" || "auto"
                );
            }));
    function Ua(a, b) {
        return {
            get: function () {
                return a()
                    ? void delete this.get
                    : (this.get = b).apply(this, arguments);
            },
        };
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = { position: "absolute", visibility: "hidden", display: "block" },
        $a = { letterSpacing: "0", fontWeight: "400" },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;
    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--) if (((a = _a[c] + b), a in ab)) return a;
    }
    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            (d = a[g]),
                d.style &&
                ((f[g] = n._data(d, "olddisplay")),
                    (c = d.style.display),
                    b
                        ? (f[g] || "none" !== c || (d.style.display = ""),
                            "" === d.style.display &&
                            W(d) &&
                            (f[g] = n._data(d, "olddisplay", Ma(d.nodeName))))
                        : ((e = W(d)),
                            ((c && "none" !== c) || !e) &&
                            n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            (d = a[g]),
                d.style &&
                ((b && "none" !== d.style.display && "" !== d.style.display) ||
                    (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function eb(a, b, c, d, e) {
        for (
            var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
            g = 0;
            4 > f;
            f += 2
        )
            "margin" === c && (g += n.css(a, c + V[f], !0, e)),
                d
                    ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
                        "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e)))
                    : ((g += n.css(a, "padding" + V[f], !0, e)),
                        "padding" !== c &&
                        (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g;
    }
    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (
                ((e = Sa(a, b, f)),
                    (0 > e || null == e) && (e = a.style[b]),
                    Oa.test(e))
            )
                return e;
            (d = g && (l.boxSizingReliable() || e === a.style[b])),
                (e = parseFloat(e) || 0);
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: { float: l.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = n.camelCase(b),
                    i = a.style;
                if (
                    ((b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
                        (g = n.cssHooks[b] || n.cssHooks[h]),
                        void 0 === c)
                )
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (
                    ((f = typeof c),
                        "string" === f &&
                        (e = U.exec(c)) &&
                        e[1] &&
                        ((c = X(a, b, e)), (f = "number")),
                        null != c &&
                        c === c &&
                        ("number" === f &&
                            (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
                            l.clearCloneStyle ||
                            "" !== c ||
                            0 !== b.indexOf("background") ||
                            (i[b] = "inherit"),
                            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
                )
                    try {
                        i[b] = c;
                    } catch (j) { }
            }
        },
        css: function (a, b, c, d) {
            var e,
                f,
                g,
                h = n.camelCase(b);
            return (
                (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
                (g = n.cssHooks[b] || n.cssHooks[h]),
                g && "get" in g && (f = g.get(a, !0, c)),
                void 0 === f && (f = Sa(a, b, d)),
                "normal" === f && b in $a && (f = $a[b]),
                "" === c || c
                    ? ((e = parseFloat(f)), c === !0 || isFinite(e) ? e || 0 : f)
                    : f
            );
        },
    }),
        n.each(["height", "width"], function (a, b) {
            n.cssHooks[b] = {
                get: function (a, c, d) {
                    return c
                        ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth
                            ? Pa(a, Za, function () {
                                return fb(a, b, d);
                            })
                            : fb(a, b, d)
                        : void 0;
                },
                set: function (a, c, d) {
                    var e = d && Ra(a);
                    return db(
                        a,
                        c,
                        d
                            ? eb(
                                a,
                                b,
                                d,
                                l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e),
                                e
                            )
                            : 0
                    );
                },
            };
        }),
        l.opacity ||
        (n.cssHooks.opacity = {
            get: function (a, b) {
                return Wa.test(
                    (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
                )
                    ? 0.01 * parseFloat(RegExp.$1) + ""
                    : b
                        ? "1"
                        : "";
            },
            set: function (a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = (d && d.filter) || c.filter || "";
                (c.zoom = 1),
                    ((b >= 1 || "" === b) &&
                        "" === n.trim(f.replace(Va, "")) &&
                        c.removeAttribute &&
                        (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
                    (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
            },
        }),
        (n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
            return b
                ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"])
                : void 0;
        })),
        (n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
            return b
                ? (parseFloat(Sa(a, "marginLeft")) ||
                    (n.contains(a.ownerDocument, a)
                        ? a.getBoundingClientRect().left -
                        Pa(a, { marginLeft: 0 }, function () {
                            return a.getBoundingClientRect().left;
                        })
                        : 0)) + "px"
                : void 0;
        })),
        n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
            (n.cssHooks[a + b] = {
                expand: function (c) {
                    for (
                        var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
                        4 > d;
                        d++
                    )
                        e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                    return e;
                },
            }),
                Na.test(a) || (n.cssHooks[a + b].set = db);
        }),
        n.fn.extend({
            css: function (a, b) {
                return Y(
                    this,
                    function (a, b, c) {
                        var d,
                            e,
                            f = {},
                            g = 0;
                        if (n.isArray(b)) {
                            for (d = Ra(a), e = b.length; e > g; g++)
                                f[b[g]] = n.css(a, b[g], !1, d);
                            return f;
                        }
                        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
                    },
                    a,
                    b,
                    arguments.length > 1
                );
            },
            show: function () {
                return cb(this, !0);
            },
            hide: function () {
                return cb(this);
            },
            toggle: function (a) {
                return "boolean" == typeof a
                    ? a
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                        W(this) ? n(this).show() : n(this).hide();
                    });
            },
        });
    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e);
    }
    (n.Tween = gb),
        (gb.prototype = {
            constructor: gb,
            init: function (a, b, c, d, e, f) {
                (this.elem = a),
                    (this.prop = c),
                    (this.easing = e || n.easing._default),
                    (this.options = b),
                    (this.start = this.now = this.cur()),
                    (this.end = d),
                    (this.unit = f || (n.cssNumber[c] ? "" : "px"));
            },
            cur: function () {
                var a = gb.propHooks[this.prop];
                return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
            },
            run: function (a) {
                var b,
                    c = gb.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = b = n.easing[this.easing](
                            a,
                            this.options.duration * a,
                            0,
                            1,
                            this.options.duration
                        ))
                        : (this.pos = b = a),
                    (this.now = (this.end - this.start) * b + this.start),
                    this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : gb.propHooks._default.set(this),
                    this
                );
            },
        }),
        (gb.prototype.init.prototype = gb.prototype),
        (gb.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return 1 !== a.elem.nodeType ||
                        (null != a.elem[a.prop] && null == a.elem.style[a.prop])
                        ? a.elem[a.prop]
                        : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
                },
                set: function (a) {
                    n.fx.step[a.prop]
                        ? n.fx.step[a.prop](a)
                        : 1 !== a.elem.nodeType ||
                            (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
                            ? (a.elem[a.prop] = a.now)
                            : n.style(a.elem, a.prop, a.now + a.unit);
                },
            },
        }),
        (gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
            },
        }),
        (n.easing = {
            linear: function (a) {
                return a;
            },
            swing: function (a) {
                return 0.5 - Math.cos(a * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (n.fx = gb.prototype.init),
        (n.fx.step = {});
    var hb,
        ib,
        jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;
    function lb() {
        return (
            a.setTimeout(function () {
                hb = void 0;
            }),
            (hb = n.now())
        );
    }
    function mb(a, b) {
        var c,
            d = { height: a },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            (c = V[e]), (d["margin" + c] = d["padding" + c] = a);
        return b && (d.opacity = d.width = a), d;
    }
    function nb(a, b, c) {
        for (
            var d,
            e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]),
            f = 0,
            g = e.length;
            g > f;
            f++
        )
            if ((d = e[f].call(c, b, a))) return d;
    }
    function ob(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue ||
            ((h = n._queueHooks(a, "fx")),
                null == h.unqueued &&
                ((h.unqueued = 0),
                    (i = h.empty.fire),
                    (h.empty.fire = function () {
                        h.unqueued || i();
                    })),
                h.unqueued++,
                m.always(function () {
                    m.always(function () {
                        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
                    });
                })),
            1 === a.nodeType &&
            ("height" in b || "width" in b) &&
            ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
                (j = n.css(a, "display")),
                (k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j),
                "inline" === k &&
                "none" === n.css(a, "float") &&
                (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName)
                    ? (p.zoom = 1)
                    : (p.display = "inline-block"))),
            c.overflow &&
            ((p.overflow = "hidden"),
                l.shrinkWrapBlocks() ||
                m.always(function () {
                    (p.overflow = c.overflow[0]),
                        (p.overflowX = c.overflow[1]),
                        (p.overflowY = c.overflow[2]);
                }));
        for (d in b)
            if (((e = b[d]), jb.exec(e))) {
                if (
                    (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
                ) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0;
                }
                o[d] = (r && r[d]) || n.style(a, d);
            } else j = void 0;
        if (n.isEmptyObject(o))
            "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : (r = n._data(a, "fxshow", {})),
                f && (r.hidden = !q),
                q
                    ? n(a).show()
                    : m.done(function () {
                        n(a).hide();
                    }),
                m.done(function () {
                    var b;
                    n._removeData(a, "fxshow");
                    for (b in o) n.style(a, b, o[b]);
                });
            for (d in o)
                (g = nb(q ? r[d] : 0, d, m)),
                    d in r ||
                    ((r[d] = g.start),
                        q &&
                        ((g.end = g.start),
                            (g.start = "width" === d || "height" === d ? 1 : 0)));
        }
    }
    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (
                ((d = n.camelCase(c)),
                    (e = b[d]),
                    (f = a[c]),
                    n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
                    c !== d && ((a[d] = f), delete a[c]),
                    (g = n.cssHooks[d]),
                    g && "expand" in g)
            ) {
                (f = g.expand(f)), delete a[d];
                for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
            } else b[d] = e;
    }
    function qb(a, b, c) {
        var d,
            e,
            f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function () {
                delete i.elem;
            }),
            i = function () {
                if (e) return !1;
                for (
                    var b = hb || lb(),
                    c = Math.max(0, j.startTime + j.duration - b),
                    d = c / j.duration || 0,
                    f = 1 - d,
                    g = 0,
                    i = j.tweens.length;
                    i > g;
                    g++
                )
                    j.tweens[g].run(f);
                return (
                    h.notifyWith(a, [j, f, c]),
                    1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                );
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(
                        a,
                        j.opts,
                        b,
                        c,
                        j.opts.specialEasing[b] || j.opts.easing
                    );
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return (
                        b
                            ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
                            : h.rejectWith(a, [j, b]),
                        this
                    );
                },
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if ((d = qb.prefilters[f].call(j, a, k, j.opts)))
                return (
                    n.isFunction(d.stop) &&
                    (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                    d
                );
        return (
            n.map(k, nb, j),
            n.isFunction(j.opts.start) && j.opts.start.call(a, j),
            n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
            j
                .progress(j.opts.progress)
                .done(j.opts.done, j.opts.complete)
                .fail(j.opts.fail)
                .always(j.opts.always)
        );
    }
    (n.Animation = n.extend(qb, {
        tweeners: {
            "*": [
                function (a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c;
                },
            ],
        },
        tweener: function (a, b) {
            n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
            for (var c, d = 0, e = a.length; e > d; d++)
                (c = a[d]),
                    (qb.tweeners[c] = qb.tweeners[c] || []),
                    qb.tweeners[c].unshift(b);
        },
        prefilters: [ob],
        prefilter: function (a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
        },
    })),
        (n.speed = function (a, b, c) {
            var d =
                a && "object" == typeof a
                    ? n.extend({}, a)
                    : {
                        complete: c || (!c && b) || (n.isFunction(a) && a),
                        duration: a,
                        easing: (c && b) || (b && !n.isFunction(b) && b),
                    };
            return (
                (d.duration = n.fx.off
                    ? 0
                    : "number" == typeof d.duration
                        ? d.duration
                        : d.duration in n.fx.speeds
                            ? n.fx.speeds[d.duration]
                            : n.fx.speeds._default),
                (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
                (d.old = d.complete),
                (d.complete = function () {
                    n.isFunction(d.old) && d.old.call(this),
                        d.queue && n.dequeue(this, d.queue);
                }),
                d
            );
        }),
        n.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(W)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: b }, a, c, d);
            },
            animate: function (a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function () {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0);
                    };
                return (
                    (g.finish = g),
                    e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                );
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c);
                };
                return (
                    "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                    b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function () {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = n.timers,
                            g = n._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                        for (e = f.length; e--;)
                            f[e].elem !== this ||
                                (null != a && f[e].queue !== a) ||
                                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                        (!b && c) || n.dequeue(this, a);
                    })
                );
            },
            finish: function (a) {
                return (
                    a !== !1 && (a = a || "fx"),
                    this.each(function () {
                        var b,
                            c = n._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = n.timers,
                            g = d ? d.length : 0;
                        for (
                            c.finish = !0,
                            n.queue(this, a, []),
                            e && e.stop && e.stop.call(this, !0),
                            b = f.length;
                            b--;

                        )
                            f[b].elem === this &&
                                f[b].queue === a &&
                                (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++)
                            d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish;
                    })
                );
            },
        }),
        n.each(["toggle", "show", "hide"], function (a, b) {
            var c = n.fn[b];
            n.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a
                    ? c.apply(this, arguments)
                    : this.animate(mb(b, !0), a, d, e);
            };
        }),
        n.each(
            {
                slideDown: mb("show"),
                slideUp: mb("hide"),
                slideToggle: mb("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (a, b) {
                n.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d);
                };
            }
        ),
        (n.timers = []),
        (n.fx.tick = function () {
            var a,
                b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++)
                (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), (hb = void 0);
        }),
        (n.fx.timer = function (a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
        }),
        (n.fx.interval = 13),
        (n.fx.start = function () {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
        }),
        (n.fx.stop = function () {
            a.clearInterval(ib), (ib = null);
        }),
        (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (n.fn.delay = function (b, c) {
            return (
                (b = n.fx ? n.fx.speeds[b] || b : b),
                (c = c || "fx"),
                this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e);
                    };
                })
            );
        }),
        (function () {
            var a,
                b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            (c = d.createElement("div")),
                c.setAttribute("className", "t"),
                (c.innerHTML =
                    "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (a = c.getElementsByTagName("a")[0]),
                b.setAttribute("type", "checkbox"),
                c.appendChild(b),
                (a = c.getElementsByTagName("a")[0]),
                (a.style.cssText = "top:1px"),
                (l.getSetAttribute = "t" !== c.className),
                (l.style = /top/.test(a.getAttribute("style"))),
                (l.hrefNormalized = "/a" === a.getAttribute("href")),
                (l.checkOn = !!b.value),
                (l.optSelected = f.selected),
                (l.enctype = !!d.createElement("form").enctype),
                (e.disabled = !0),
                (l.optDisabled = !f.disabled),
                (b = d.createElement("input")),
                b.setAttribute("value", ""),
                (l.input = "" === b.getAttribute("value")),
                (b.value = "t"),
                b.setAttribute("type", "radio"),
                (l.radioValue = "t" === b.value);
        })();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function (a) {
            var b,
                c,
                d,
                e = this[0];
            {
                if (arguments.length)
                    return (
                        (d = n.isFunction(a)),
                        this.each(function (c) {
                            var e;
                            1 === this.nodeType &&
                                ((e = d ? a.call(this, c, n(this).val()) : a),
                                    null == e
                                        ? (e = "")
                                        : "number" == typeof e
                                            ? (e += "")
                                            : n.isArray(e) &&
                                            (e = n.map(e, function (a) {
                                                return null == a ? "" : a + "";
                                            })),
                                    (b =
                                        n.valHooks[this.type] ||
                                        n.valHooks[this.nodeName.toLowerCase()]),
                                    (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                                    (this.value = e));
                        })
                    );
                if (e)
                    return (
                        (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
                        b && "get" in b && void 0 !== (c = b.get(e, "value"))
                            ? c
                            : ((c = e.value),
                                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
                    );
            }
        },
    }),
        n.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = n.find.attr(a, "value");
                        return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
                    },
                },
                select: {
                    get: function (a) {
                        for (
                            var b,
                            c,
                            d = a.options,
                            e = a.selectedIndex,
                            f = "select-one" === a.type || 0 > e,
                            g = f ? null : [],
                            h = f ? e + 1 : d.length,
                            i = 0 > e ? h : f ? e : 0;
                            h > i;
                            i++
                        )
                            if (
                                ((c = d[i]),
                                    (c.selected || i === e) &&
                                    (l.optDisabled
                                        ? !c.disabled
                                        : null === c.getAttribute("disabled")) &&
                                    (!c.parentNode.disabled ||
                                        !n.nodeName(c.parentNode, "optgroup")))
                            ) {
                                if (((b = n(c).val()), f)) return b;
                                g.push(b);
                            }
                        return g;
                    },
                    set: function (a, b) {
                        var c,
                            d,
                            e = a.options,
                            f = n.makeArray(b),
                            g = e.length;
                        while (g--)
                            if (((d = e[g]), n.inArray(n.valHooks.option.get(d), f) > -1))
                                try {
                                    d.selected = c = !0;
                                } catch (h) {
                                    d.scrollHeight;
                                }
                            else d.selected = !1;
                        return c || (a.selectedIndex = -1), e;
                    },
                },
            },
        }),
        n.each(["radio", "checkbox"], function () {
            (n.valHooks[this] = {
                set: function (a, b) {
                    return n.isArray(b)
                        ? (a.checked = n.inArray(n(a).val(), b) > -1)
                        : void 0;
                },
            }),
                l.checkOn ||
                (n.valHooks[this].get = function (a) {
                    return null === a.getAttribute("value") ? "on" : a.value;
                });
        });
    var tb,
        ub,
        vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function (a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a);
            });
        },
    }),
        n.extend({
            attr: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return "undefined" == typeof a.getAttribute
                        ? n.prop(a, b, c)
                        : ((1 === f && n.isXMLDoc(a)) ||
                            ((b = b.toLowerCase()),
                                (e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb))),
                            void 0 !== c
                                ? null === c
                                    ? void n.removeAttr(a, b)
                                    : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                                        ? d
                                        : (a.setAttribute(b, c + ""), c)
                                : e && "get" in e && null !== (d = e.get(a, b))
                                    ? d
                                    : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b;
                        }
                    },
                },
            },
            removeAttr: function (a, b) {
                var c,
                    d,
                    e = 0,
                    f = b && b.match(G);
                if (f && 1 === a.nodeType)
                    while ((c = f[e++]))
                        (d = n.propFix[c] || c),
                            n.expr.match.bool.test(c)
                                ? (yb && xb) || !wb.test(c)
                                    ? (a[d] = !1)
                                    : (a[n.camelCase("default-" + c)] = a[d] = !1)
                                : n.attr(a, c, ""),
                            a.removeAttribute(xb ? c : d);
            },
        }),
        (ub = {
            set: function (a, b, c) {
                return (
                    b === !1
                        ? n.removeAttr(a, c)
                        : (yb && xb) || !wb.test(c)
                            ? a.setAttribute((!xb && n.propFix[c]) || c, c)
                            : (a[n.camelCase("default-" + c)] = a[c] = !0),
                    c
                );
            },
        }),
        n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = vb[b] || n.find.attr;
            (yb && xb) || !wb.test(b)
                ? (vb[b] = function (a, b, d) {
                    var e, f;
                    return (
                        d ||
                        ((f = vb[b]),
                            (vb[b] = e),
                            (e = null != c(a, b, d) ? b.toLowerCase() : null),
                            (vb[b] = f)),
                        e
                    );
                })
                : (vb[b] = function (a, b, c) {
                    return c
                        ? void 0
                        : a[n.camelCase("default-" + b)]
                            ? b.toLowerCase()
                            : null;
                });
        }),
        (yb && xb) ||
        (n.attrHooks.value = {
            set: function (a, b, c) {
                return n.nodeName(a, "input")
                    ? void (a.defaultValue = b)
                    : tb && tb.set(a, b, c);
            },
        }),
        xb ||
        ((tb = {
            set: function (a, b, c) {
                var d = a.getAttributeNode(c);
                return (
                    d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
                    (d.value = b += ""),
                    "value" === c || b === a.getAttribute(c) ? b : void 0
                );
            },
        }),
            (vb.id = vb.name = vb.coords = function (a, b, c) {
                var d;
                return c
                    ? void 0
                    : (d = a.getAttributeNode(b)) && "" !== d.value
                        ? d.value
                        : null;
            }),
            (n.valHooks.button = {
                get: function (a, b) {
                    var c = a.getAttributeNode(b);
                    return c && c.specified ? c.value : void 0;
                },
                set: tb.set,
            }),
            (n.attrHooks.contenteditable = {
                set: function (a, b, c) {
                    tb.set(a, "" === b ? !1 : b, c);
                },
            }),
            n.each(["width", "height"], function (a, b) {
                n.attrHooks[b] = {
                    set: function (a, c) {
                        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
                    },
                };
            })),
        l.style ||
        (n.attrHooks.style = {
            get: function (a) {
                return a.style.cssText || void 0;
            },
            set: function (a, b) {
                return (a.style.cssText = b + "");
            },
        });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return (
                (a = n.propFix[a] || a),
                this.each(function () {
                    try {
                        (this[a] = void 0), delete this[a];
                    } catch (b) { }
                })
            );
        },
    }),
        n.extend({
            prop: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return (
                        (1 === f && n.isXMLDoc(a)) ||
                        ((b = n.propFix[b] || b), (e = n.propHooks[b])),
                        void 0 !== c
                            ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                                ? d
                                : (a[b] = c)
                            : e && "get" in e && null !== (d = e.get(a, b))
                                ? d
                                : a[b]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = n.find.attr(a, "tabindex");
                        return b
                            ? parseInt(b, 10)
                            : zb.test(a.nodeName) || (Ab.test(a.nodeName) && a.href)
                                ? 0
                                : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        l.hrefNormalized ||
        n.each(["href", "src"], function (a, b) {
            n.propHooks[b] = {
                get: function (a) {
                    return a.getAttribute(b, 4);
                },
            };
        }),
        l.optSelected ||
        (n.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return (
                    b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
                    null
                );
            },
            set: function (a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            },
        }),
        n.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                n.propFix[this.toLowerCase()] = this;
            }
        ),
        l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;
    function Cb(a) {
        return n.attr(a, "class") || "";
    }
    n.fn.extend({
        addClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).addClass(a.call(this, b, Cb(this)));
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while ((c = this[i++]))
                    if (
                        ((e = Cb(c)),
                            (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
                    ) {
                        g = 0;
                        while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        (h = n.trim(d)), e !== h && n.attr(c, "class", h);
                    }
            }
            return this;
        },
        removeClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).removeClass(a.call(this, b, Cb(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while ((c = this[i++]))
                    if (
                        ((e = Cb(c)),
                            (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
                    ) {
                        g = 0;
                        while ((f = b[g++]))
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        (h = n.trim(d)), e !== h && n.attr(c, "class", h);
                    }
            }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c
                ? b
                    ? this.addClass(a)
                    : this.removeClass(a)
                : n.isFunction(a)
                    ? this.each(function (c) {
                        n(this).toggleClass(a.call(this, c, Cb(this), b), b);
                    })
                    : this.each(function () {
                        var b, d, e, f;
                        if ("string" === c) {
                            (d = 0), (e = n(this)), (f = a.match(G) || []);
                            while ((b = f[d++]))
                                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                        } else (void 0 !== a && "boolean" !== c) || ((b = Cb(this)), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
                    });
        },
        hasClass: function (a) {
            var b,
                c,
                d = 0;
            b = " " + a + " ";
            while ((c = this[d++]))
                if (
                    1 === c.nodeType &&
                    (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1
                )
                    return !0;
            return !1;
        },
    }),
        n.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                " "
            ),
            function (a, b) {
                n.fn[b] = function (a, c) {
                    return arguments.length > 0
                        ? this.on(b, null, a, c)
                        : this.trigger(b);
                };
            }
        ),
        n.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            },
        });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (n.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c,
            d = null,
            e = n.trim(b + "");
        return e &&
            !n.trim(
                e.replace(Gb, function (a, b, e, f) {
                    return (
                        c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
                    );
                })
            )
            ? Function("return " + e)()
            : n.error("Invalid JSON: " + b);
    }),
        (n.parseXML = function (b) {
            var c, d;
            if (!b || "string" != typeof b) return null;
            try {
                a.DOMParser
                    ? ((d = new a.DOMParser()), (c = d.parseFromString(b, "text/xml")))
                    : ((c = new a.ActiveXObject("Microsoft.XMLDOM")),
                        (c.async = "false"),
                        c.loadXML(b));
            } catch (e) {
                c = void 0;
            }
            return (
                (c &&
                    c.documentElement &&
                    !c.getElementsByTagName("parsererror").length) ||
                n.error("Invalid XML: " + b),
                c
            );
        });
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];
    function Tb(a) {
        return function (b, c) {
            "string" != typeof b && ((c = b), (b = "*"));
            var d,
                e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while ((d = f[e++]))
                    "+" === d.charAt(0)
                        ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
                        : (a[d] = a[d] || []).push(c);
        };
    }
    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;
        function g(h) {
            var i;
            return (
                (e[h] = !0),
                n.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j]
                        ? f
                            ? !(i = j)
                            : void 0
                        : (b.dataTypes.unshift(j), g(j), !1);
                }),
                i
            );
        }
        return g(b.dataTypes[0]) || (!e["*"] && g("*"));
    }
    function Vb(a, b) {
        var c,
            d,
            e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a;
    }
    function Wb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
                void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break;
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break;
                }
                d || (d = g);
            }
            f = f || d;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function Xb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (
                (a.responseFields[f] && (c[a.responseFields[f]] = b),
                    !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                    (i = f),
                    (f = k.shift()))
            )
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (((g = j[i + " " + f] || j["* " + f]), !g))
                        for (e in j)
                            if (
                                ((h = e.split(" ")),
                                    h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
                            ) {
                                g === !0
                                    ? (g = j[e])
                                    : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f,
                                };
                            }
                }
        return { state: "success", data: b };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function (b, c) {
            "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while ((b = Jb.exec(g))) k[b[1].toLowerCase()] = b[2];
                            }
                            b = k[a.toLowerCase()];
                        }
                        return null == b ? null : b;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === u ? g : null;
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
                    },
                    overrideMimeType: function (a) {
                        return u || (l.mimeType = a), this;
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this;
                    },
                    abort: function (a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this;
                    },
                };
            if (
                ((p.promise(w).complete = q.add),
                    (w.success = w.done),
                    (w.error = w.fail),
                    (l.url = ((b || l.url || Rb) + "")
                        .replace(Hb, "")
                        .replace(Mb, Sb[1] + "//")),
                    (l.type = c.method || c.type || l.method || l.type),
                    (l.dataTypes = n
                        .trim(l.dataType || "*")
                        .toLowerCase()
                        .match(G) || [""]),
                    null == l.crossDomain &&
                    ((d = Nb.exec(l.url.toLowerCase())),
                        (l.crossDomain = !(
                            !d ||
                            (d[1] === Sb[1] &&
                                d[2] === Sb[2] &&
                                (d[3] || ("http:" === d[1] ? "80" : "443")) ===
                                (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))
                        ))),
                    l.data &&
                    l.processData &&
                    "string" != typeof l.data &&
                    (l.data = n.param(l.data, l.traditional)),
                    Ub(Ob, l, c, w),
                    2 === u)
            )
                return w;
            (i = n.event && l.global),
                i && 0 === n.active++ && n.event.trigger("ajaxStart"),
                (l.type = l.type.toUpperCase()),
                (l.hasContent = !Lb.test(l.type)),
                (f = l.url),
                l.hasContent ||
                (l.data &&
                    ((f = l.url += (Fb.test(f) ? "&" : "?") + l.data), delete l.data),
                    l.cache === !1 &&
                    (l.url = Ib.test(f)
                        ? f.replace(Ib, "$1_=" + Eb++)
                        : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
                l.ifModified &&
                (n.lastModified[f] &&
                    w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
                    n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
                ((l.data && l.hasContent && l.contentType !== !1) || c.contentType) &&
                w.setRequestHeader("Content-Type", l.contentType),
                w.setRequestHeader(
                    "Accept",
                    l.dataTypes[0] && l.accepts[l.dataTypes[0]]
                        ? l.accepts[l.dataTypes[0]] +
                        ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "")
                        : l.accepts["*"]
                );
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
                return w.abort();
            v = "abort";
            for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]);
            if ((j = Ub(Pb, l, c, w))) {
                if (((w.readyState = 1), i && o.trigger("ajaxSend", [w, l]), 2 === u))
                    return w;
                l.async &&
                    l.timeout > 0 &&
                    (h = a.setTimeout(function () {
                        w.abort("timeout");
                    }, l.timeout));
                try {
                    (u = 1), j.send(s, y);
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x);
                }
            } else y(-1, "No Transport");
            function y(b, c, d, e) {
                var k,
                    s,
                    t,
                    v,
                    x,
                    y = c;
                2 !== u &&
                    ((u = 2),
                        h && a.clearTimeout(h),
                        (j = void 0),
                        (g = e || ""),
                        (w.readyState = b > 0 ? 4 : 0),
                        (k = (b >= 200 && 300 > b) || 304 === b),
                        d && (v = Wb(l, w, d)),
                        (v = Xb(l, v, w, k)),
                        k
                            ? (l.ifModified &&
                                ((x = w.getResponseHeader("Last-Modified")),
                                    x && (n.lastModified[f] = x),
                                    (x = w.getResponseHeader("etag")),
                                    x && (n.etag[f] = x)),
                                204 === b || "HEAD" === l.type
                                    ? (y = "nocontent")
                                    : 304 === b
                                        ? (y = "notmodified")
                                        : ((y = v.state), (s = v.data), (t = v.error), (k = !t)))
                            : ((t = y), (!b && y) || ((y = "error"), 0 > b && (b = 0))),
                        (w.status = b),
                        (w.statusText = (c || y) + ""),
                        k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
                        w.statusCode(r),
                        (r = void 0),
                        i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
                        q.fireWith(m, [w, y]),
                        i &&
                        (o.trigger("ajaxComplete", [w, l]),
                            --n.active || n.event.trigger("ajaxStop")));
            }
            return w;
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script");
        },
    }),
        n.each(["get", "post"], function (a, b) {
            n[b] = function (a, c, d, e) {
                return (
                    n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
                    n.ajax(
                        n.extend(
                            { url: a, type: b, dataType: e, data: c, success: d },
                            n.isPlainObject(a) && a
                        )
                    )
                );
            };
        }),
        (n._evalUrl = function (a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0,
            });
        }),
        n.fn.extend({
            wrapAll: function (a) {
                if (n.isFunction(a))
                    return this.each(function (b) {
                        n(this).wrapAll(a.call(this, b));
                    });
                if (this[0]) {
                    var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b
                            .map(function () {
                                var a = this;
                                while (a.firstChild && 1 === a.firstChild.nodeType)
                                    a = a.firstChild;
                                return a;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (a) {
                return n.isFunction(a)
                    ? this.each(function (b) {
                        n(this).wrapInner(a.call(this, b));
                    })
                    : this.each(function () {
                        var b = n(this),
                            c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a);
                    });
            },
            wrap: function (a) {
                var b = n.isFunction(a);
                return this.each(function (c) {
                    n(this).wrapAll(b ? a.call(this, c) : a);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        });
    function Yb(a) {
        return (a.style && a.style.display) || n.css(a, "display");
    }
    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode;
        }
        return !1;
    }
    (n.expr.filters.hidden = function (a) {
        return l.reliableHiddenOffsets()
            ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length
            : Zb(a);
    }),
        (n.expr.filters.visible = function (a) {
            return !n.expr.filters.hidden(a);
        });
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function (b, e) {
                c || _b.test(a)
                    ? d(a, e)
                    : dc(
                        a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
                        e,
                        c,
                        d
                    );
            });
        else if (c || "object" !== n.type(b)) d(a, b);
        else for (e in b) dc(a + "[" + e + "]", b[e], c, d);
    }
    (n.param = function (a, b) {
        var c,
            d = [],
            e = function (a, b) {
                (b = n.isFunction(b) ? b() : null == b ? "" : b),
                    (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
            };
        if (
            (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
                n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
        )
            n.each(a, function () {
                e(this.name, this.value);
            });
        else for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+");
    }),
        n.fn.extend({
            serialize: function () {
                return n.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this;
                })
                    .filter(function () {
                        var a = this.type;
                        return (
                            this.name &&
                            !n(this).is(":disabled") &&
                            cc.test(this.nodeName) &&
                            !bc.test(a) &&
                            (this.checked || !Z.test(a))
                        );
                    })
                    .map(function (a, b) {
                        var c = n(this).val();
                        return null == c
                            ? null
                            : n.isArray(c)
                                ? n.map(c, function (a) {
                                    return { name: b.name, value: a.replace(ac, "\r\n") };
                                })
                                : { name: b.name, value: c.replace(ac, "\r\n") };
                    })
                    .get();
            },
        }),
        (n.ajaxSettings.xhr =
            void 0 !== a.ActiveXObject
                ? function () {
                    return this.isLocal
                        ? ic()
                        : d.documentMode > 8
                            ? hc()
                            : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                                hc()) ||
                            ic();
                }
                : hc);
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent &&
        a.attachEvent("onunload", function () {
            for (var a in fc) fc[a](void 0, !0);
        }),
        (l.cors = !!gc && "withCredentials" in gc),
        (gc = l.ajax = !!gc),
        gc &&
        n.ajaxTransport(function (b) {
            if (!b.crossDomain || l.cors) {
                var c;
                return {
                    send: function (d, e) {
                        var f,
                            g = b.xhr(),
                            h = ++ec;
                        if (
                            (g.open(b.type, b.url, b.async, b.username, b.password),
                                b.xhrFields)
                        )
                            for (f in b.xhrFields) g[f] = b.xhrFields[f];
                        b.mimeType &&
                            g.overrideMimeType &&
                            g.overrideMimeType(b.mimeType),
                            b.crossDomain ||
                            d["X-Requested-With"] ||
                            (d["X-Requested-With"] = "XMLHttpRequest");
                        for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                        g.send((b.hasContent && b.data) || null),
                            (c = function (a, d) {
                                var f, i, j;
                                if (c && (d || 4 === g.readyState))
                                    if (
                                        (delete fc[h],
                                            (c = void 0),
                                            (g.onreadystatechange = n.noop),
                                            d)
                                    )
                                        4 !== g.readyState && g.abort();
                                    else {
                                        (j = {}),
                                            (f = g.status),
                                            "string" == typeof g.responseText &&
                                            (j.text = g.responseText);
                                        try {
                                            i = g.statusText;
                                        } catch (k) {
                                            i = "";
                                        }
                                        f || !b.isLocal || b.crossDomain
                                            ? 1223 === f && (f = 204)
                                            : (f = j.text ? 200 : 404);
                                    }
                                j && e(f, i, j, g.getAllResponseHeaders());
                            }),
                            b.async
                                ? 4 === g.readyState
                                    ? a.setTimeout(c)
                                    : (g.onreadystatechange = fc[h] = c)
                                : c();
                    },
                    abort: function () {
                        c && c(void 0, !0);
                    },
                };
            }
        });
    function hc() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) { }
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) { }
    }
    n.ajaxSetup({
        accepts: {
            script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a;
            },
        },
    }),
        n.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1),
                a.crossDomain && ((a.type = "GET"), (a.global = !1));
        }),
        n.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b,
                    c = d.head || n("head")[0] || d.documentElement;
                return {
                    send: function (e, f) {
                        (b = d.createElement("script")),
                            (b.async = !0),
                            a.scriptCharset && (b.charset = a.scriptCharset),
                            (b.src = a.url),
                            (b.onload = b.onreadystatechange = function (a, c) {
                                (c || !b.readyState || /loaded|complete/.test(b.readyState)) &&
                                    ((b.onload = b.onreadystatechange = null),
                                        b.parentNode && b.parentNode.removeChild(b),
                                        (b = null),
                                        c || f(200, "success"));
                            }),
                            c.insertBefore(b, c.firstChild);
                    },
                    abort: function () {
                        b && b.onload(void 0, !0);
                    },
                };
            }
        });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return (this[a] = !0), a;
        },
    }),
        n.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e,
                f,
                g,
                h =
                    b.jsonp !== !1 &&
                    (kc.test(b.url)
                        ? "url"
                        : "string" == typeof b.data &&
                        0 ===
                        (b.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        kc.test(b.data) &&
                        "data");
            return h || "jsonp" === b.dataTypes[0]
                ? ((e = b.jsonpCallback = n.isFunction(b.jsonpCallback)
                    ? b.jsonpCallback()
                    : b.jsonpCallback),
                    h
                        ? (b[h] = b[h].replace(kc, "$1" + e))
                        : b.jsonp !== !1 &&
                        (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                    (b.converters["script json"] = function () {
                        return g || n.error(e + " was not called"), g[0];
                    }),
                    (b.dataTypes[0] = "json"),
                    (f = a[e]),
                    (a[e] = function () {
                        g = arguments;
                    }),
                    d.always(function () {
                        void 0 === f ? n(a).removeProp(e) : (a[e] = f),
                            b[e] && ((b.jsonpCallback = c.jsonpCallback), jc.push(e)),
                            g && n.isFunction(f) && f(g[0]),
                            (g = f = void 0);
                    }),
                    "script")
                : void 0;
        }),
        (n.parseHTML = function (a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
            var e = x.exec(a),
                f = !c && [];
            return e
                ? [b.createElement(e[1])]
                : ((e = ja([a], b, f)),
                    f && f.length && n(f).remove(),
                    n.merge([], e.childNodes));
        });
    var lc = n.fn.load;
    (n.fn.load = function (a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");
        return (
            h > -1 && ((d = n.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
            n.isFunction(b)
                ? ((c = b), (b = void 0))
                : b && "object" == typeof b && (e = "POST"),
            g.length > 0 &&
            n
                .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
                .done(function (a) {
                    (f = arguments),
                        g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
                })
                .always(
                    c &&
                    function (a, b) {
                        g.each(function () {
                            c.apply(this, f || [a.responseText, b, a]);
                        });
                    }
                ),
            this
        );
    }),
        n.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (a, b) {
                n.fn[b] = function (a) {
                    return this.on(b, a);
                };
            }
        ),
        (n.expr.filters.animated = function (a) {
            return n.grep(n.timers, function (b) {
                return a === b.elem;
            }).length;
        });
    function mc(a) {
        return n.isWindow(a)
            ? a
            : 9 === a.nodeType
                ? a.defaultView || a.parentWindow
                : !1;
    }
    (n.offset = {
        setOffset: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"),
                (h = l.offset()),
                (f = n.css(a, "top")),
                (i = n.css(a, "left")),
                (j =
                    ("absolute" === k || "fixed" === k) &&
                    n.inArray("auto", [f, i]) > -1),
                j
                    ? ((d = l.position()), (g = d.top), (e = d.left))
                    : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
                null != b.top && (m.top = b.top - h.top + g),
                null != b.left && (m.left = b.left - h.left + e),
                "using" in b ? b.using.call(a, m) : l.css(m);
        },
    }),
        n.fn.extend({
            offset: function (a) {
                if (arguments.length)
                    return void 0 === a
                        ? this
                        : this.each(function (b) {
                            n.offset.setOffset(this, a, b);
                        });
                var b,
                    c,
                    d = { top: 0, left: 0 },
                    e = this[0],
                    f = e && e.ownerDocument;
                if (f)
                    return (
                        (b = f.documentElement),
                        n.contains(b, e)
                            ? ("undefined" != typeof e.getBoundingClientRect &&
                                (d = e.getBoundingClientRect()),
                                (c = mc(f)),
                            {
                                top:
                                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                                left:
                                    d.left +
                                    (c.pageXOffset || b.scrollLeft) -
                                    (b.clientLeft || 0),
                            })
                            : d
                    );
            },
            position: function () {
                if (this[0]) {
                    var a,
                        b,
                        c = { top: 0, left: 0 },
                        d = this[0];
                    return (
                        "fixed" === n.css(d, "position")
                            ? (b = d.getBoundingClientRect())
                            : ((a = this.offsetParent()),
                                (b = this.offset()),
                                n.nodeName(a[0], "html") || (c = a.offset()),
                                (c.top += n.css(a[0], "borderTopWidth", !0)),
                                (c.left += n.css(a[0], "borderLeftWidth", !0))),
                        {
                            top: b.top - c.top - n.css(d, "marginTop", !0),
                            left: b.left - c.left - n.css(d, "marginLeft", !0),
                        }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var a = this.offsetParent;
                    while (
                        a &&
                        !n.nodeName(a, "html") &&
                        "static" === n.css(a, "position")
                    )
                        a = a.offsetParent;
                    return a || Qa;
                });
            },
        }),
        n.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (a, b) {
                var c = /Y/.test(b);
                n.fn[a] = function (d) {
                    return Y(
                        this,
                        function (a, d, e) {
                            var f = mc(a);
                            return void 0 === e
                                ? f
                                    ? b in f
                                        ? f[b]
                                        : f.document.documentElement[d]
                                    : a[d]
                                : void (f
                                    ? f.scrollTo(
                                        c ? n(f).scrollLeft() : e,
                                        c ? e : n(f).scrollTop()
                                    )
                                    : (a[d] = e));
                        },
                        a,
                        d,
                        arguments.length,
                        null
                    );
                };
            }
        ),
        n.each(["top", "left"], function (a, b) {
            n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
                return c
                    ? ((c = Sa(a, b)), Oa.test(c) ? n(a).position()[b] + "px" : c)
                    : void 0;
            });
        }),
        n.each({ Height: "height", Width: "width" }, function (a, b) {
            n.each(
                { padding: "inner" + a, content: b, "": "outer" + a },
                function (c, d) {
                    n.fn[d] = function (d, e) {
                        var f = arguments.length && (c || "boolean" != typeof d),
                            g = c || (d === !0 || e === !0 ? "margin" : "border");
                        return Y(
                            this,
                            function (b, c, d) {
                                var e;
                                return n.isWindow(b)
                                    ? b.document.documentElement["client" + a]
                                    : 9 === b.nodeType
                                        ? ((e = b.documentElement),
                                            Math.max(
                                                b.body["scroll" + a],
                                                e["scroll" + a],
                                                b.body["offset" + a],
                                                e["offset" + a],
                                                e["client" + a]
                                            ))
                                        : void 0 === d
                                            ? n.css(b, c, g)
                                            : n.style(b, c, d, g);
                            },
                            b,
                            f ? d : void 0,
                            f,
                            null
                        );
                    };
                }
            );
        }),
        n.fn.extend({
            bind: function (a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function (a, b) {
                return this.off(a, null, b);
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length
                    ? this.off(a, "**")
                    : this.off(b, a || "**", c);
            },
        }),
        (n.fn.size = function () {
            return this.length;
        }),
        (n.fn.andSelf = n.fn.addBack),
        "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
            return n;
        });
    var nc = a.jQuery,
        oc = a.$;
    return (
        (n.noConflict = function (b) {
            return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n;
        }),
        b || (a.jQuery = a.$ = n),
        n
    );
});

!(function (a, b) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = a.document
            ? b(a, !0)
            : function (a) {
                if (!a.document)
                    throw new Error("jQuery requires a window with a document");
                return b(a);
            })
        : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function (a, b) {
            return new n.fn.init(a, b);
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (a, b) {
            return b.toUpperCase();
        };
    (n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
            return e.call(this);
        },
        get: function (a) {
            return null != a
                ? 0 > a
                    ? this[a + this.length]
                    : this[a]
                : e.call(this);
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return (b.prevObject = this), (b.context = this.context), b;
        },
        each: function (a) {
            return n.each(this, a);
        },
        map: function (a) {
            return this.pushStack(
                n.map(this, function (b, c) {
                    return a.call(b, c, b);
                })
            );
        },
        slice: function () {
            return this.pushStack(e.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: g,
        sort: c.sort,
        splice: c.splice,
    }),
        (n.extend = n.fn.extend = function () {
            var a,
                b,
                c,
                d,
                e,
                f,
                g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for (
                "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
                "object" == typeof g || n.isFunction(g) || (g = {}),
                h === i && ((g = this), h--);
                i > h;
                h++
            )
                if (null != (e = arguments[h]))
                    for (d in e)
                        (a = g[d]),
                            (c = e[d]),
                            g !== c &&
                            (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))
                                ? (b
                                    ? ((b = !1), (f = a && n.isArray(a) ? a : []))
                                    : (f = a && n.isPlainObject(a) ? a : {}),
                                    (g[d] = n.extend(j, f, c)))
                                : void 0 !== c && (g[d] = c));
            return g;
        }),
        n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a);
            },
            noop: function () { },
            isFunction: function (a) {
                return "function" === n.type(a);
            },
            isArray:
                Array.isArray ||
                function (a) {
                    return "array" === n.type(a);
                },
            isWindow: function (a) {
                return null != a && a == a.window;
            },
            isNumeric: function (a) {
                var b = a && a.toString();
                return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0;
            },
            isPlainObject: function (a) {
                var b;
                if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
                    return !1;
                try {
                    if (
                        a.constructor &&
                        !k.call(a, "constructor") &&
                        !k.call(a.constructor.prototype, "isPrototypeOf")
                    )
                        return !1;
                } catch (c) {
                    return !1;
                }
                if (!l.ownFirst) for (b in a) return k.call(a, b);
                for (b in a);
                return void 0 === b || k.call(a, b);
            },
            type: function (a) {
                return null == a
                    ? a + ""
                    : "object" == typeof a || "function" == typeof a
                        ? i[j.call(a)] || "object"
                        : typeof a;
            },
            globalEval: function (b) {
                b &&
                    n.trim(b) &&
                    (
                        a.execScript ||
                        function (b) {
                            a.eval.call(a, b);
                        }
                    )(b);
            },
            camelCase: function (a) {
                return a.replace(p, "ms-").replace(q, r);
            },
            nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
            },
            each: function (a, b) {
                var c,
                    d = 0;
                if (s(a)) {
                    for (c = a.length; c > d; d++)
                        if (b.call(a[d], d, a[d]) === !1) break;
                } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
                return a;
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(o, "");
            },
            makeArray: function (a, b) {
                var c = b || [];
                return (
                    null != a &&
                    (s(Object(a))
                        ? n.merge(c, "string" == typeof a ? [a] : a)
                        : g.call(c, a)),
                    c
                );
            },
            inArray: function (a, b, c) {
                var d;
                if (b) {
                    if (h) return h.call(b, a, c);
                    for (
                        d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
                        d > c;
                        c++
                    )
                        if (c in b && b[c] === a) return c;
                }
                return -1;
            },
            merge: function (a, b) {
                var c = +b.length,
                    d = 0,
                    e = a.length;
                while (c > d) a[e++] = b[d++];
                if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
                return (a.length = e), a;
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                    (d = !b(a[f], f)), d !== h && e.push(a[f]);
                return e;
            },
            map: function (a, b, c) {
                var d,
                    e,
                    g = 0,
                    h = [];
                if (s(a))
                    for (d = a.length; d > g; g++)
                        (e = b(a[g], g, c)), null != e && h.push(e);
                else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
                return f.apply([], h);
            },
            guid: 1,
            proxy: function (a, b) {
                var c, d, f;
                return (
                    "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
                    n.isFunction(a)
                        ? ((c = e.call(arguments, 2)),
                            (d = function () {
                                return a.apply(b || this, c.concat(e.call(arguments)));
                            }),
                            (d.guid = a.guid = a.guid || n.guid++),
                            d)
                        : void 0
                );
            },
            now: function () {
                return +new Date();
            },
            support: l,
        }),
        "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
        n.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (a, b) {
                i["[object " + b + "]"] = b.toLowerCase();
            }
        );
    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a)
            ? !1
            : "array" === c ||
            0 === b ||
            ("number" == typeof b && b > 0 && b - 1 in a);
    }
    var t = (function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function (a, b) {
                return a === b && (l = !0), 0;
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1;
            },
            K =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N =
                "\\[" +
                L +
                "*(" +
                M +
                ")(?:" +
                L +
                "*([*^$|!~]?=)" +
                L +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                M +
                "))|)" +
                L +
                "*\\]",
            O =
                ":(" +
                M +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                N +
                ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    L +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    L +
                    "*(?:([+-]|)" +
                    L +
                    "*(\\d+)|))" +
                    L +
                    "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                    L +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    L +
                    "*((?:-\\d)?\\d*)" +
                    L +
                    "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c
                    ? b
                    : 0 > d
                        ? String.fromCharCode(d + 65536)
                        : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
            },
            da = function () {
                m();
            };
        try {
            H.apply((E = I.call(v.childNodes)), v.childNodes),
                E[v.childNodes.length].nodeType;
        } catch (ea) {
            H = {
                apply: E.length
                    ? function (a, b) {
                        G.apply(a, I.call(b));
                    }
                    : function (a, b) {
                        var c = a.length,
                            d = 0;
                        while ((a[c++] = b[d++]));
                        a.length = c - 1;
                    },
            };
        }
        function fa(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s,
                w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (
                ((d = d || []),
                    "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
            )
                return d;
            if (
                !e &&
                ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
            ) {
                if (11 !== x && (o = $.exec(a)))
                    if ((f = o[1])) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d;
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j), d;
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if (
                            (f = o[3]) &&
                            c.getElementsByClassName &&
                            b.getElementsByClassName
                        )
                            return H.apply(d, b.getElementsByClassName(f)), d;
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) (w = b), (s = a);
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id"))
                            ? (k = k.replace(aa, "\\$&"))
                            : b.setAttribute("id", (k = u)),
                            (r = g(a)),
                            (h = r.length),
                            (l = V.test(k) ? "#" + k : "[id='" + k + "']");
                        while (h--) r[h] = l + " " + qa(r[h]);
                        (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)), d;
                        } catch (y) {
                        } finally {
                            k === u && b.removeAttribute("id");
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e);
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return (
                    a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                    (b[c + " "] = e)
                );
            }
            return b;
        }
        function ha(a) {
            return (a[u] = !0), a;
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), (b = null);
            }
        }
        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function ka(a, b) {
            var c = b && a,
                d =
                    c &&
                    1 === a.nodeType &&
                    1 === b.nodeType &&
                    (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while ((c = c.nextSibling)) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function la(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function na(a) {
            return ha(function (b) {
                return (
                    (b = +b),
                    ha(function (c, d) {
                        var e,
                            f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                    })
                );
            });
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        (c = fa.support = {}),
            (f = fa.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1;
            }),
            (m = fa.setDocument = function (a) {
                var b,
                    e,
                    g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement
                    ? ((n = g),
                        (o = n.documentElement),
                        (p = !f(n)),
                        (e = n.defaultView) &&
                        e.top !== e &&
                        (e.addEventListener
                            ? e.addEventListener("unload", da, !1)
                            : e.attachEvent && e.attachEvent("onunload", da)),
                        (c.attributes = ia(function (a) {
                            return (a.className = "i"), !a.getAttribute("className");
                        })),
                        (c.getElementsByTagName = ia(function (a) {
                            return (
                                a.appendChild(n.createComment("")),
                                !a.getElementsByTagName("*").length
                            );
                        })),
                        (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
                        (c.getById = ia(function (a) {
                            return (
                                (o.appendChild(a).id = u),
                                !n.getElementsByName || !n.getElementsByName(u).length
                            );
                        })),
                        c.getById
                            ? ((d.find.ID = function (a, b) {
                                if ("undefined" != typeof b.getElementById && p) {
                                    var c = b.getElementById(a);
                                    return c ? [c] : [];
                                }
                            }),
                                (d.filter.ID = function (a) {
                                    var b = a.replace(ba, ca);
                                    return function (a) {
                                        return a.getAttribute("id") === b;
                                    };
                                }))
                            : (delete d.find.ID,
                                (d.filter.ID = function (a) {
                                    var b = a.replace(ba, ca);
                                    return function (a) {
                                        var c =
                                            "undefined" != typeof a.getAttributeNode &&
                                            a.getAttributeNode("id");
                                        return c && c.value === b;
                                    };
                                })),
                        (d.find.TAG = c.getElementsByTagName
                            ? function (a, b) {
                                return "undefined" != typeof b.getElementsByTagName
                                    ? b.getElementsByTagName(a)
                                    : c.qsa
                                        ? b.querySelectorAll(a)
                                        : void 0;
                            }
                            : function (a, b) {
                                var c,
                                    d = [],
                                    e = 0,
                                    f = b.getElementsByTagName(a);
                                if ("*" === a) {
                                    while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                                    return d;
                                }
                                return f;
                            }),
                        (d.find.CLASS =
                            c.getElementsByClassName &&
                            function (a, b) {
                                return "undefined" != typeof b.getElementsByClassName && p
                                    ? b.getElementsByClassName(a)
                                    : void 0;
                            }),
                        (r = []),
                        (q = []),
                        (c.qsa = Z.test(n.querySelectorAll)) &&
                        (ia(function (a) {
                            (o.appendChild(a).innerHTML =
                                "<a id='" +
                                u +
                                "'></a><select id='" +
                                u +
                                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                a.querySelectorAll("[msallowcapture^='']").length &&
                                q.push("[*^$]=" + L + "*(?:''|\"\")"),
                                a.querySelectorAll("[selected]").length ||
                                q.push("\\[" + L + "*(?:value|" + K + ")"),
                                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                                a.querySelectorAll(":checked").length || q.push(":checked"),
                                a.querySelectorAll("a#" + u + "+*").length ||
                                q.push(".#.+[+~]");
                        }),
                            ia(function (a) {
                                var b = n.createElement("input");
                                b.setAttribute("type", "hidden"),
                                    a.appendChild(b).setAttribute("name", "D"),
                                    a.querySelectorAll("[name=d]").length &&
                                    q.push("name" + L + "*[*^$|!~]?="),
                                    a.querySelectorAll(":enabled").length ||
                                    q.push(":enabled", ":disabled"),
                                    q.push(",.*:");
                            })),
                        (c.matchesSelector = Z.test(
                            (s =
                                o.matches ||
                                o.webkitMatchesSelector ||
                                o.mozMatchesSelector ||
                                o.oMatchesSelector ||
                                o.msMatchesSelector)
                        )) &&
                        ia(function (a) {
                            (c.disconnectedMatch = s.call(a, "div")),
                                s.call(a, "[s!='']:x"),
                                r.push("!=", O);
                        }),
                        (q = q.length && new RegExp(q.join("|"))),
                        (r = r.length && new RegExp(r.join("|"))),
                        (b = Z.test(o.compareDocumentPosition)),
                        (t =
                            b || Z.test(o.contains)
                                ? function (a, b) {
                                    var c = 9 === a.nodeType ? a.documentElement : a,
                                        d = b && b.parentNode;
                                    return (
                                        a === d ||
                                        !(
                                            !d ||
                                            1 !== d.nodeType ||
                                            !(c.contains
                                                ? c.contains(d)
                                                : a.compareDocumentPosition &&
                                                16 & a.compareDocumentPosition(d))
                                        )
                                    );
                                }
                                : function (a, b) {
                                    if (b) while ((b = b.parentNode)) if (b === a) return !0;
                                    return !1;
                                }),
                        (B = b
                            ? function (a, b) {
                                if (a === b) return (l = !0), 0;
                                var d =
                                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                                return d
                                    ? d
                                    : ((d =
                                        (a.ownerDocument || a) === (b.ownerDocument || b)
                                            ? a.compareDocumentPosition(b)
                                            : 1),
                                        1 & d ||
                                            (!c.sortDetached && b.compareDocumentPosition(a) === d)
                                            ? a === n || (a.ownerDocument === v && t(v, a))
                                                ? -1
                                                : b === n || (b.ownerDocument === v && t(v, b))
                                                    ? 1
                                                    : k
                                                        ? J(k, a) - J(k, b)
                                                        : 0
                                            : 4 & d
                                                ? -1
                                                : 1);
                            }
                            : function (a, b) {
                                if (a === b) return (l = !0), 0;
                                var c,
                                    d = 0,
                                    e = a.parentNode,
                                    f = b.parentNode,
                                    g = [a],
                                    h = [b];
                                if (!e || !f)
                                    return a === n
                                        ? -1
                                        : b === n
                                            ? 1
                                            : e
                                                ? -1
                                                : f
                                                    ? 1
                                                    : k
                                                        ? J(k, a) - J(k, b)
                                                        : 0;
                                if (e === f) return ka(a, b);
                                c = a;
                                while ((c = c.parentNode)) g.unshift(c);
                                c = b;
                                while ((c = c.parentNode)) h.unshift(c);
                                while (g[d] === h[d]) d++;
                                return d
                                    ? ka(g[d], h[d])
                                    : g[d] === v
                                        ? -1
                                        : h[d] === v
                                            ? 1
                                            : 0;
                            }),
                        n)
                    : n;
            }),
            (fa.matches = function (a, b) {
                return fa(a, null, null, b);
            }),
            (fa.matchesSelector = function (a, b) {
                if (
                    ((a.ownerDocument || a) !== n && m(a),
                        (b = b.replace(T, "='$1']")),
                        c.matchesSelector &&
                        p &&
                        !A[b + " "] &&
                        (!r || !r.test(b)) &&
                        (!q || !q.test(b)))
                )
                    try {
                        var d = s.call(a, b);
                        if (
                            d ||
                            c.disconnectedMatch ||
                            (a.document && 11 !== a.document.nodeType)
                        )
                            return d;
                    } catch (e) { }
                return fa(b, n, null, [a]).length > 0;
            }),
            (fa.contains = function (a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b);
            }),
            (fa.attr = function (a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f
                    ? f
                    : c.attributes || !p
                        ? a.getAttribute(b)
                        : (f = a.getAttributeNode(b)) && f.specified
                            ? f.value
                            : null;
            }),
            (fa.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a);
            }),
            (fa.uniqueSort = function (a) {
                var b,
                    d = [],
                    e = 0,
                    f = 0;
                if (
                    ((l = !c.detectDuplicates),
                        (k = !c.sortStable && a.slice(0)),
                        a.sort(B),
                        l)
                ) {
                    while ((b = a[f++])) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1);
                }
                return (k = null), a;
            }),
            (e = fa.getText = function (a) {
                var b,
                    c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                    } else if (3 === f || 4 === f) return a.nodeValue;
                } else while ((b = a[d++])) c += e(b);
                return c;
            }),
            (d = fa.selectors = {
                cacheLength: 50,
                createPseudo: ha,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (a) {
                        return (
                            (a[1] = a[1].replace(ba, ca)),
                            (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
                            "~=" === a[2] && (a[3] = " " + a[3] + " "),
                            a.slice(0, 4)
                        );
                    },
                    CHILD: function (a) {
                        return (
                            (a[1] = a[1].toLowerCase()),
                            "nth" === a[1].slice(0, 3)
                                ? (a[3] || fa.error(a[0]),
                                    (a[4] = +(a[4]
                                        ? a[5] + (a[6] || 1)
                                        : 2 * ("even" === a[3] || "odd" === a[3]))),
                                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                                : a[3] && fa.error(a[0]),
                            a
                        );
                    },
                    PSEUDO: function (a) {
                        var b,
                            c = !a[6] && a[2];
                        return W.CHILD.test(a[0])
                            ? null
                            : (a[3]
                                ? (a[2] = a[4] || a[5] || "")
                                : c &&
                                U.test(c) &&
                                (b = g(c, !0)) &&
                                (b = c.indexOf(")", c.length - b) - c.length) &&
                                ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                                a.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(ba, ca).toLowerCase();
                        return "*" === a
                            ? function () {
                                return !0;
                            }
                            : function (a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b;
                            };
                    },
                    CLASS: function (a) {
                        var b = y[a + " "];
                        return (
                            b ||
                            ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                                y(a, function (a) {
                                    return b.test(
                                        ("string" == typeof a.className && a.className) ||
                                        ("undefined" != typeof a.getAttribute &&
                                            a.getAttribute("class")) ||
                                        ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (a, b, c) {
                        return function (d) {
                            var e = fa.attr(d, a);
                            return null == e
                                ? "!=" === b
                                : b
                                    ? ((e += ""),
                                        "=" === b
                                            ? e === c
                                            : "!=" === b
                                                ? e !== c
                                                : "^=" === b
                                                    ? c && 0 === e.indexOf(c)
                                                    : "*=" === b
                                                        ? c && e.indexOf(c) > -1
                                                        : "$=" === b
                                                            ? c && e.slice(-c.length) === c
                                                            : "~=" === b
                                                                ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                                                                : "|=" === b
                                                                    ? e === c || e.slice(0, c.length + 1) === c + "-"
                                                                    : !1)
                                    : !0;
                        };
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e
                            ? function (a) {
                                return !!a.parentNode;
                            }
                            : function (b, c, i) {
                                var j,
                                    k,
                                    l,
                                    m,
                                    n,
                                    o,
                                    p = f !== g ? "nextSibling" : "previousSibling",
                                    q = b.parentNode,
                                    r = h && b.nodeName.toLowerCase(),
                                    s = !i && !h,
                                    t = !1;
                                if (q) {
                                    if (f) {
                                        while (p) {
                                            m = b;
                                            while ((m = m[p]))
                                                if (
                                                    h
                                                        ? m.nodeName.toLowerCase() === r
                                                        : 1 === m.nodeType
                                                )
                                                    return !1;
                                            o = p = "only" === a && !o && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                                        (m = q),
                                            (l = m[u] || (m[u] = {})),
                                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                                            (j = k[a] || []),
                                            (n = j[0] === w && j[1]),
                                            (t = n && j[2]),
                                            (m = n && q.childNodes[n]);
                                        while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                                            if (1 === m.nodeType && ++t && m === b) {
                                                k[a] = [w, n, t];
                                                break;
                                            }
                                    } else if (
                                        (s &&
                                            ((m = b),
                                                (l = m[u] || (m[u] = {})),
                                                (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                                                (j = k[a] || []),
                                                (n = j[0] === w && j[1]),
                                                (t = n)),
                                            t === !1)
                                    )
                                        while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                                            if (
                                                (h
                                                    ? m.nodeName.toLowerCase() === r
                                                    : 1 === m.nodeType) &&
                                                ++t &&
                                                (s &&
                                                    ((l = m[u] || (m[u] = {})),
                                                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                                                        (k[a] = [w, t])),
                                                    m === b)
                                            )
                                                break;
                                    return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                                }
                            };
                    },
                    PSEUDO: function (a, b) {
                        var c,
                            e =
                                d.pseudos[a] ||
                                d.setFilters[a.toLowerCase()] ||
                                fa.error("unsupported pseudo: " + a);
                        return e[u]
                            ? e(b)
                            : e.length > 1
                                ? ((c = [a, a, "", b]),
                                    d.setFilters.hasOwnProperty(a.toLowerCase())
                                        ? ha(function (a, c) {
                                            var d,
                                                f = e(a, b),
                                                g = f.length;
                                            while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                                        })
                                        : function (a) {
                                            return e(a, 0, c);
                                        })
                                : e;
                    },
                },
                pseudos: {
                    not: ha(function (a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(Q, "$1"));
                        return d[u]
                            ? ha(function (a, b, c, e) {
                                var f,
                                    g = d(a, null, e, []),
                                    h = a.length;
                                while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                            })
                            : function (a, e, f) {
                                return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                            };
                    }),
                    has: ha(function (a) {
                        return function (b) {
                            return fa(a, b).length > 0;
                        };
                    }),
                    contains: ha(function (a) {
                        return (
                            (a = a.replace(ba, ca)),
                            function (b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                            }
                        );
                    }),
                    lang: ha(function (a) {
                        return (
                            V.test(a || "") || fa.error("unsupported lang: " + a),
                            (a = a.replace(ba, ca).toLowerCase()),
                            function (b) {
                                var c;
                                do
                                    if (
                                        (c = p
                                            ? b.lang
                                            : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                    )
                                        return (
                                            (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-")
                                        );
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id;
                    },
                    root: function (a) {
                        return a === o;
                    },
                    focus: function (a) {
                        return (
                            a === n.activeElement &&
                            (!n.hasFocus || n.hasFocus()) &&
                            !!(a.type || a.href || ~a.tabIndex)
                        );
                    },
                    enabled: function (a) {
                        return a.disabled === !1;
                    },
                    disabled: function (a) {
                        return a.disabled === !0;
                    },
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (
                            ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
                        );
                    },
                    selected: function (a) {
                        return (
                            a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        );
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (a) {
                        return !d.pseudos.empty(a);
                    },
                    header: function (a) {
                        return Y.test(a.nodeName);
                    },
                    input: function (a) {
                        return X.test(a.nodeName);
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b && "button" === a.type) || "button" === b;
                    },
                    text: function (a) {
                        var b;
                        return (
                            "input" === a.nodeName.toLowerCase() &&
                            "text" === a.type &&
                            (null == (b = a.getAttribute("type")) ||
                                "text" === b.toLowerCase())
                        );
                    },
                    first: na(function () {
                        return [0];
                    }),
                    last: na(function (a, b) {
                        return [b - 1];
                    }),
                    eq: na(function (a, b, c) {
                        return [0 > c ? c + b : c];
                    }),
                    even: na(function (a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a;
                    }),
                    odd: na(function (a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a;
                    }),
                    lt: na(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a;
                    }),
                    gt: na(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a;
                    }),
                },
            }),
            (d.pseudos.nth = d.pseudos.eq);
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
            d.pseudos[b] = la(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
        function pa() { }
        (pa.prototype = d.filters = d.pseudos),
            (d.setFilters = new pa()),
            (g = fa.tokenize = function (a, b) {
                var c,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                (h = a), (i = []), (j = d.preFilter);
                while (h) {
                    (c && !(e = R.exec(h))) ||
                        (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                        (c = !1),
                        (e = S.exec(h)) &&
                        ((c = e.shift()),
                            f.push({ value: c, type: e[0].replace(Q, " ") }),
                            (h = h.slice(c.length)));
                    for (g in d.filter)
                        !(e = W[g].exec(h)) ||
                            (j[g] && !(e = j[g](e))) ||
                            ((c = e.shift()),
                                f.push({ value: c, type: g, matches: e }),
                                (h = h.slice(c.length)));
                    if (!c) break;
                }
                return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
            });
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first
                ? function (b, c, f) {
                    while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
                }
                : function (b, c, g) {
                    var h,
                        i,
                        j,
                        k = [w, f];
                    if (g) {
                        while ((b = b[d]))
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                    } else
                        while ((b = b[d]))
                            if (1 === b.nodeType || e) {
                                if (
                                    ((j = b[u] || (b[u] = {})),
                                        (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                                        (h = i[d]) && h[0] === w && h[1] === f)
                                )
                                    return (k[2] = h[2]);
                                if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                            }
                };
        }
        function sa(a) {
            return a.length > 1
                ? function (b, c, d) {
                    var e = a.length;
                    while (e--) if (!a[e](b, c, d)) return !1;
                    return !0;
                }
                : a[0];
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c;
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
            return g;
        }
        function va(a, b, c, d, e, f) {
            return (
                d && !d[u] && (d = va(d)),
                e && !e[u] && (e = va(e, f)),
                ha(function (f, g, h, i) {
                    var j,
                        k,
                        l,
                        m = [],
                        n = [],
                        o = g.length,
                        p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || (!f && b) ? p : ua(p, m, a, h, i),
                        r = c ? (e || (f ? a : o || d) ? [] : g) : q;
                    if ((c && c(q, r, h, i), d)) {
                        (j = ua(r, n)), d(j, [], h, i), (k = j.length);
                        while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                (j = []), (k = r.length);
                                while (k--) (l = r[k]) && j.push((q[k] = l));
                                e(null, (r = []), j, i);
                            }
                            k = r.length;
                            while (k--)
                                (l = r[k]) &&
                                    (j = e ? J(f, l) : m[k]) > -1 &&
                                    (f[j] = !(g[j] = l));
                        }
                    } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
                })
            );
        }
        function wa(a) {
            for (
                var b,
                c,
                e,
                f = a.length,
                g = d.relative[a[0].type],
                h = g || d.relative[" "],
                i = g ? 1 : 0,
                k = ra(
                    function (a) {
                        return a === b;
                    },
                    h,
                    !0
                ),
                l = ra(
                    function (a) {
                        return J(b, a) > -1;
                    },
                    h,
                    !0
                ),
                m = [
                    function (a, c, d) {
                        var e =
                            (!g && (d || c !== j)) ||
                            ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        return (b = null), e;
                    },
                ];
                f > i;
                i++
            )
                if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
                else {
                    if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
                        for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                        return va(
                            i > 1 && sa(m),
                            i > 1 &&
                            qa(
                                a
                                    .slice(0, i - 1)
                                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                            ).replace(Q, "$1"),
                            c,
                            e > i && wa(a.slice(i, e)),
                            f > e && wa((a = a.slice(e))),
                            f > e && qa(a)
                        );
                    }
                    m.push(c);
                }
            return sa(m);
        }
        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l,
                        o,
                        q,
                        r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || (e && d.find.TAG("*", k)),
                        y = (w += null == v ? 1 : Math.random() || 0.1),
                        z = x.length;
                    for (
                        k && (j = g === n || g || k);
                        s !== z && null != (l = x[s]);
                        s++
                    ) {
                        if (e && l) {
                            (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
                            while ((q = a[o++]))
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break;
                                }
                            k && (w = y);
                        }
                        c && ((l = !q && l) && r--, f && t.push(l));
                    }
                    if (((r += s), c && s !== r)) {
                        o = 0;
                        while ((q = b[o++])) q(t, u, g, h);
                        if (f) {
                            if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u);
                        }
                        H.apply(i, u),
                            k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
                    }
                    return k && ((w = y), (j = v)), t;
                };
            return c ? ha(f) : f;
        }
        return (
            (h = fa.compile = function (a, b) {
                var c,
                    d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    b || (b = g(a)), (c = b.length);
                    while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
                    (f = A(a, xa(e, d))), (f.selector = a);
                }
                return f;
            }),
            (i = fa.select = function (a, b, e, f) {
                var i,
                    j,
                    k,
                    l,
                    m,
                    n = "function" == typeof a && a,
                    o = !f && g((a = n.selector || a));
                if (((e = e || []), 1 === o.length)) {
                    if (
                        ((j = o[0] = o[0].slice(0)),
                            j.length > 2 &&
                            "ID" === (k = j[0]).type &&
                            c.getById &&
                            9 === b.nodeType &&
                            p &&
                            d.relative[j[1].type])
                    ) {
                        if (
                            ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]), !b)
                        )
                            return e;
                        n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
                    }
                    i = W.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (((k = j[i]), d.relative[(l = k.type)])) break;
                        if (
                            (m = d.find[l]) &&
                            (f = m(
                                k.matches[0].replace(ba, ca),
                                (_.test(j[0].type) && oa(b.parentNode)) || b
                            ))
                        ) {
                            if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                                return H.apply(e, f), e;
                            break;
                        }
                    }
                }
                return (
                    (n || h(a, o))(
                        f,
                        b,
                        !p,
                        e,
                        !b || (_.test(a) && oa(b.parentNode)) || b
                    ),
                    e
                );
            }),
            (c.sortStable = u.split("").sort(B).join("") === u),
            (c.detectDuplicates = !!l),
            m(),
            (c.sortDetached = ia(function (a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"));
            })),
            ia(function (a) {
                return (
                    (a.innerHTML = "<a href='#'></a>"),
                    "#" === a.firstChild.getAttribute("href")
                );
            }) ||
            ja("type|href|height|width", function (a, b, c) {
                return c
                    ? void 0
                    : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
            }),
            (c.attributes &&
                ia(function (a) {
                    return (
                        (a.innerHTML = "<input/>"),
                        a.firstChild.setAttribute("value", ""),
                        "" === a.firstChild.getAttribute("value")
                    );
                })) ||
            ja("value", function (a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase()
                    ? void 0
                    : a.defaultValue;
            }),
            ia(function (a) {
                return null == a.getAttribute("disabled");
            }) ||
            ja(K, function (a, b, c) {
                var d;
                return c
                    ? void 0
                    : a[b] === !0
                        ? b.toLowerCase()
                        : (d = a.getAttributeNode(b)) && d.specified
                            ? d.value
                            : null;
            }),
            fa
        );
    })(a);
    (n.find = t),
        (n.expr = t.selectors),
        (n.expr[":"] = n.expr.pseudos),
        (n.uniqueSort = n.unique = t.uniqueSort),
        (n.text = t.getText),
        (n.isXMLDoc = t.isXML),
        (n.contains = t.contains);
    var u = function (a, b, c) {
        var d = [],
            e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a);
            }
        return d;
    },
        v = function (a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c;
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            });
        if (b.nodeType)
            return n.grep(a, function (a) {
                return (a === b) !== c;
            });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function (a) {
            return n.inArray(a, b) > -1 !== c;
        });
    }
    (n.filter = function (a, b, c) {
        var d = b[0];
        return (
            c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType
                ? n.find.matchesSelector(d, a)
                    ? [d]
                    : []
                : n.find.matches(
                    a,
                    n.grep(b, function (a) {
                        return 1 === a.nodeType;
                    })
                )
        );
    }),
        n.fn.extend({
            find: function (a) {
                var b,
                    c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a)
                    return this.pushStack(
                        n(a).filter(function () {
                            for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0;
                        })
                    );
                for (b = 0; e > b; b++) n.find(a, d[b], c);
                return (
                    (c = this.pushStack(e > 1 ? n.unique(c) : c)),
                    (c.selector = this.selector ? this.selector + " " + a : a),
                    c
                );
            },
            filter: function (a) {
                return this.pushStack(z(this, a || [], !1));
            },
            not: function (a) {
                return this.pushStack(z(this, a || [], !0));
            },
            is: function (a) {
                return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1)
                    .length;
            },
        });
    var A,
        B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = (n.fn.init = function (a, b, c) {
            var e, f;
            if (!a) return this;
            if (((c = c || A), "string" == typeof a)) {
                if (
                    ((e =
                        "<" === a.charAt(0) &&
                            ">" === a.charAt(a.length - 1) &&
                            a.length >= 3
                            ? [null, a, null]
                            : B.exec(a)),
                        !e || (!e[1] && b))
                )
                    return !b || b.jquery
                        ? (b || c).find(a)
                        : this.constructor(b).find(a);
                if (e[1]) {
                    if (
                        ((b = b instanceof n ? b[0] : b),
                            n.merge(
                                this,
                                n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
                            ),
                            x.test(e[1]) && n.isPlainObject(b))
                    )
                        for (e in b)
                            n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this;
                }
                if (((f = d.getElementById(e[2])), f && f.parentNode)) {
                    if (f.id !== e[2]) return A.find(a);
                    (this.length = 1), (this[0] = f);
                }
                return (this.context = d), (this.selector = a), this;
            }
            return a.nodeType
                ? ((this.context = this[0] = a), (this.length = 1), this)
                : n.isFunction(a)
                    ? "undefined" != typeof c.ready
                        ? c.ready(a)
                        : a(n)
                    : (void 0 !== a.selector &&
                        ((this.selector = a.selector), (this.context = a.context)),
                        n.makeArray(a, this));
        });
    (C.prototype = n.fn), (A = n(d));
    var D = /^(?:parents|prev(?:Until|All))/,
        E = { children: !0, contents: !0, next: !0, prev: !0 };
    n.fn.extend({
        has: function (a) {
            var b,
                c = n(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0;
            });
        },
        closest: function (a, b) {
            for (
                var c,
                d = 0,
                e = this.length,
                f = [],
                g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
                e > d;
                d++
            )
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (
                        c.nodeType < 11 &&
                        (g
                            ? g.index(c) > -1
                            : 1 === c.nodeType && n.find.matchesSelector(c, a))
                    ) {
                        f.push(c);
                        break;
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
        },
        index: function (a) {
            return a
                ? "string" == typeof a
                    ? n.inArray(this[0], n(a))
                    : n.inArray(a.jquery ? a[0] : a, this)
                : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
        },
        add: function (a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        },
    });
    function F(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a;
    }
    n.each(
        {
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null;
            },
            parents: function (a) {
                return u(a, "parentNode");
            },
            parentsUntil: function (a, b, c) {
                return u(a, "parentNode", c);
            },
            next: function (a) {
                return F(a, "nextSibling");
            },
            prev: function (a) {
                return F(a, "previousSibling");
            },
            nextAll: function (a) {
                return u(a, "nextSibling");
            },
            prevAll: function (a) {
                return u(a, "previousSibling");
            },
            nextUntil: function (a, b, c) {
                return u(a, "nextSibling", c);
            },
            prevUntil: function (a, b, c) {
                return u(a, "previousSibling", c);
            },
            siblings: function (a) {
                return v((a.parentNode || {}).firstChild, a);
            },
            children: function (a) {
                return v(a.firstChild);
            },
            contents: function (a) {
                return n.nodeName(a, "iframe")
                    ? a.contentDocument || a.contentWindow.document
                    : n.merge([], a.childNodes);
            },
        },
        function (a, b) {
            n.fn[a] = function (c, d) {
                var e = n.map(this, b, c);
                return (
                    "Until" !== a.slice(-5) && (d = c),
                    d && "string" == typeof d && (e = n.filter(d, e)),
                    this.length > 1 &&
                    (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())),
                    this.pushStack(e)
                );
            };
        }
    );
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return (
            n.each(a.match(G) || [], function (a, c) {
                b[c] = !0;
            }),
            b
        );
    }
    (n.Callbacks = function (a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function () {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length)
                        f[h].apply(c[0], c[1]) === !1 &&
                            a.stopOnFalse &&
                            ((h = f.length), (c = !1));
                }
                a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
            },
            j = {
                add: function () {
                    return (
                        f &&
                        (c && !b && ((h = f.length - 1), g.push(c)),
                            (function d(b) {
                                n.each(b, function (b, c) {
                                    n.isFunction(c)
                                        ? (a.unique && j.has(c)) || f.push(c)
                                        : c && c.length && "string" !== n.type(c) && d(c);
                                });
                            })(arguments),
                            c && !b && i()),
                        this
                    );
                },
                remove: function () {
                    return (
                        n.each(arguments, function (a, b) {
                            var c;
                            while ((c = n.inArray(b, f, c)) > -1)
                                f.splice(c, 1), h >= c && h--;
                        }),
                        this
                    );
                },
                has: function (a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0;
                },
                empty: function () {
                    return f && (f = []), this;
                },
                disable: function () {
                    return (e = g = []), (f = c = ""), this;
                },
                disabled: function () {
                    return !f;
                },
                lock: function () {
                    return (e = !0), c || j.disable(), this;
                },
                locked: function () {
                    return !!e;
                },
                fireWith: function (a, c) {
                    return (
                        e ||
                        ((c = c || []),
                            (c = [a, c.slice ? c.slice() : c]),
                            g.push(c),
                            b || i()),
                        this
                    );
                },
                fire: function () {
                    return j.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!d;
                },
            };
        return j;
    }),
        n.extend({
            Deferred: function (a) {
                var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")],
                ],
                    c = "pending",
                    d = {
                        state: function () {
                            return c;
                        },
                        always: function () {
                            return e.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var a = arguments;
                            return n
                                .Deferred(function (c) {
                                    n.each(b, function (b, f) {
                                        var g = n.isFunction(a[b]) && a[b];
                                        e[f[1]](function () {
                                            var a = g && g.apply(this, arguments);
                                            a && n.isFunction(a.promise)
                                                ? a
                                                    .promise()
                                                    .progress(c.notify)
                                                    .done(c.resolve)
                                                    .fail(c.reject)
                                                : c[f[0] + "With"](
                                                    this === d ? c.promise() : this,
                                                    g ? [a] : arguments
                                                );
                                        });
                                    }),
                                        (a = null);
                                })
                                .promise();
                        },
                        promise: function (a) {
                            return null != a ? n.extend(a, d) : d;
                        },
                    },
                    e = {};
                return (
                    (d.pipe = d.then),
                    n.each(b, function (a, f) {
                        var g = f[2],
                            h = f[3];
                        (d[f[1]] = g.add),
                            h &&
                            g.add(
                                function () {
                                    c = h;
                                },
                                b[1 ^ a][2].disable,
                                b[2][2].lock
                            ),
                            (e[f[0]] = function () {
                                return e[f[0] + "With"](this === e ? d : this, arguments), this;
                            }),
                            (e[f[0] + "With"] = g.fireWith);
                    }),
                    d.promise(e),
                    a && a.call(e, e),
                    e
                );
            },
            when: function (a) {
                var b = 0,
                    c = e.call(arguments),
                    d = c.length,
                    f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
                    g = 1 === f ? a : n.Deferred(),
                    h = function (a, b, c) {
                        return function (d) {
                            (b[a] = this),
                                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                        };
                    },
                    i,
                    j,
                    k;
                if (d > 1)
                    for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
                        c[b] && n.isFunction(c[b].promise)
                            ? c[b]
                                .promise()
                                .progress(h(b, j, i))
                                .done(h(b, k, c))
                                .fail(g.reject)
                            : --f;
                return f || g.resolveWith(k, c), g.promise();
            },
        });
    var I;
    (n.fn.ready = function (a) {
        return n.ready.promise().done(a), this;
    }),
        n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? n.readyWait++ : n.ready(!0);
            },
            ready: function (a) {
                (a === !0 ? --n.readyWait : n.isReady) ||
                    ((n.isReady = !0),
                        (a !== !0 && --n.readyWait > 0) ||
                        (I.resolveWith(d, [n]),
                            n.fn.triggerHandler &&
                            (n(d).triggerHandler("ready"), n(d).off("ready"))));
            },
        });
    function J() {
        d.addEventListener
            ? (d.removeEventListener("DOMContentLoaded", K),
                a.removeEventListener("load", K))
            : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
    }
    function K() {
        (d.addEventListener ||
            "load" === a.event.type ||
            "complete" === d.readyState) &&
            (J(), n.ready());
    }
    (n.ready.promise = function (b) {
        if (!I)
            if (
                ((I = n.Deferred()),
                    "complete" === d.readyState ||
                    ("loading" !== d.readyState && !d.documentElement.doScroll))
            )
                a.setTimeout(n.ready);
            else if (d.addEventListener)
                d.addEventListener("DOMContentLoaded", K),
                    a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement;
                } catch (e) { }
                c &&
                    c.doScroll &&
                    !(function f() {
                        if (!n.isReady) {
                            try {
                                c.doScroll("left");
                            } catch (b) {
                                return a.setTimeout(f, 50);
                            }
                            J(), n.ready();
                        }
                    })();
            }
        return I.promise(b);
    }),
        n.ready.promise();
    var L;
    for (L in n(l)) break;
    (l.ownFirst = "0" === L),
        (l.inlineBlockNeedsLayout = !1),
        n(function () {
            var a, b, c, e;
            (c = d.getElementsByTagName("body")[0]),
                c &&
                c.style &&
                ((b = d.createElement("div")),
                    (e = d.createElement("div")),
                    (e.style.cssText =
                        "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                    c.appendChild(e).appendChild(b),
                    "undefined" != typeof b.style.zoom &&
                    ((b.style.cssText =
                        "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                        (l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
                        a && (c.style.zoom = 1)),
                    c.removeChild(e));
        }),
        (function () {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test;
            } catch (b) {
                l.deleteExpando = !1;
            }
            a = null;
        })();
    var M = function (a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()],
            c = +a.nodeType || 1;
        return 1 !== c && 9 !== c
            ? !1
            : !b || (b !== !0 && a.getAttribute("classid") === b);
    },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (((c = a.getAttribute(d)), "string" == typeof c)) {
                try {
                    c =
                        "true" === c
                            ? !0
                            : "false" === c
                                ? !1
                                : "null" === c
                                    ? null
                                    : +c + "" === c
                                        ? +c
                                        : N.test(c)
                                            ? n.parseJSON(c)
                                            : c;
                } catch (e) { }
                n.data(a, b, c);
            } else c = void 0;
        }
        return c;
    }
    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function R(a, b, d, e) {
        if (M(a)) {
            var f,
                g,
                h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (
                (k && j[k] && (e || j[k].data)) ||
                void 0 !== d ||
                "string" != typeof b
            )
                return (
                    k || (k = i ? (a[h] = c.pop() || n.guid++) : h),
                    j[k] || (j[k] = i ? {} : { toJSON: n.noop }),
                    ("object" != typeof b && "function" != typeof b) ||
                    (e
                        ? (j[k] = n.extend(j[k], b))
                        : (j[k].data = n.extend(j[k].data, b))),
                    (g = j[k]),
                    e || (g.data || (g.data = {}), (g = g.data)),
                    void 0 !== d && (g[n.camelCase(b)] = d),
                    "string" == typeof b
                        ? ((f = g[b]), null == f && (f = g[n.camelCase(b)]))
                        : (f = g),
                    f
                );
        }
    }
    function S(a, b, c) {
        if (M(a)) {
            var d,
                e,
                f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b)
                        ? (b = b.concat(n.map(b, n.camelCase)))
                        : b in d
                            ? (b = [b])
                            : ((b = n.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
                        (e = b.length);
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return;
                }
                (c || (delete g[h].data, Q(g[h]))) &&
                    (f
                        ? n.cleanData([a], !0)
                        : l.deleteExpando || g != g.window
                            ? delete g[h]
                            : (g[h] = void 0));
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        },
        hasData: function (a) {
            return (
                (a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]), !!a && !Q(a)
            );
        },
        data: function (a, b, c) {
            return R(a, b, c);
        },
        removeData: function (a, b) {
            return S(a, b);
        },
        _data: function (a, b, c) {
            return R(a, b, c, !0);
        },
        _removeData: function (a, b) {
            return S(a, b, !0);
        },
    }),
        n.fn.extend({
            data: function (a, b) {
                var c,
                    d,
                    e,
                    f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (
                        this.length &&
                        ((e = n.data(f)), 1 === f.nodeType && !n._data(f, "parsedAttrs"))
                    ) {
                        c = g.length;
                        while (c--)
                            g[c] &&
                                ((d = g[c].name),
                                    0 === d.indexOf("data-") &&
                                    ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0);
                    }
                    return e;
                }
                return "object" == typeof a
                    ? this.each(function () {
                        n.data(this, a);
                    })
                    : arguments.length > 1
                        ? this.each(function () {
                            n.data(this, a, b);
                        })
                        : f
                            ? P(f, a, n.data(f, a))
                            : void 0;
            },
            removeData: function (a) {
                return this.each(function () {
                    n.removeData(this, a);
                });
            },
        }),
        n.extend({
            queue: function (a, b, c) {
                var d;
                return a
                    ? ((b = (b || "fx") + "queue"),
                        (d = n._data(a, b)),
                        c &&
                        (!d || n.isArray(c)
                            ? (d = n._data(a, b, n.makeArray(c)))
                            : d.push(c)),
                        d || [])
                    : void 0;
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function () {
                        n.dequeue(a, b);
                    };
                "inprogress" === e && ((e = c.shift()), d--),
                    e &&
                    ("fx" === b && c.unshift("inprogress"),
                        delete f.stop,
                        e.call(a, g, f)),
                    !d && f && f.empty.fire();
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return (
                    n._data(a, c) ||
                    n._data(a, c, {
                        empty: n.Callbacks("once memory").add(function () {
                            n._removeData(a, b + "queue"), n._removeData(a, c);
                        }),
                    })
                );
            },
        }),
        n.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return (
                    "string" != typeof a && ((b = a), (a = "fx"), c--),
                    arguments.length < c
                        ? n.queue(this[0], a)
                        : void 0 === b
                            ? this
                            : this.each(function () {
                                var c = n.queue(this, a, b);
                                n._queueHooks(this, a),
                                    "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
                            })
                );
            },
            dequeue: function (a) {
                return this.each(function () {
                    n.dequeue(this, a);
                });
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", []);
            },
            promise: function (a, b) {
                var c,
                    d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f]);
                    };
                "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
                while (g--)
                    (c = n._data(f[g], a + "queueHooks")),
                        c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b);
            },
        }),
        (function () {
            var a;
            l.shrinkWrapBlocks = function () {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return (
                    (c = d.getElementsByTagName("body")[0]),
                    c && c.style
                        ? ((b = d.createElement("div")),
                            (e = d.createElement("div")),
                            (e.style.cssText =
                                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                            c.appendChild(e).appendChild(b),
                            "undefined" != typeof b.style.zoom &&
                            ((b.style.cssText =
                                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                                (b.appendChild(d.createElement("div")).style.width = "5px"),
                                (a = 3 !== b.offsetWidth)),
                            c.removeChild(e),
                            a)
                        : void 0
                );
            };
        })();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function (a, b) {
            return (
                (a = b || a),
                "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
            );
        };
    function X(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d
                ? function () {
                    return d.cur();
                }
                : function () {
                    return n.css(a, b, "");
                },
            i = h(),
            j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || ("px" !== j && +i)) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            (j = j || k[3]), (c = c || []), (k = +i || 1);
            do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return (
            c &&
            ((k = +k || +i || 0),
                (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
                d && ((d.unit = j), (d.start = k), (d.end = e))),
            e
        );
    }
    var Y = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) Y(a, b, h, c[h], !0, f, g);
        } else if (
            void 0 !== d &&
            ((e = !0),
                n.isFunction(d) || (g = !0),
                j &&
                (g
                    ? (b.call(a, d), (b = null))
                    : ((j = b),
                        (b = function (a, b, c) {
                            return j.call(n(a), c);
                        }))),
                b)
        )
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c;
    }
    !(function () {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        (a.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (l.leadingWhitespace = 3 === a.firstChild.nodeType),
            (l.tbody = !a.getElementsByTagName("tbody").length),
            (l.htmlSerialize = !!a.getElementsByTagName("link").length),
            (l.html5Clone =
                "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML),
            (c.type = "checkbox"),
            (c.checked = !0),
            b.appendChild(c),
            (l.appendChecked = c.checked),
            (a.innerHTML = "<textarea>x</textarea>"),
            (l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue),
            b.appendChild(a),
            (c = d.createElement("input")),
            c.setAttribute("type", "radio"),
            c.setAttribute("checked", "checked"),
            c.setAttribute("name", "t"),
            a.appendChild(c),
            (l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (l.noCloneEvent = !!a.addEventListener),
            (a[n.expando] = 1),
            (l.attributes = !a.getAttribute(n.expando));
    })();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    };
    (da.optgroup = da.option),
        (da.tbody = da.tfoot = da.colgroup = da.caption = da.thead),
        (da.th = da.td);
    function ea(a, b) {
        var c,
            d,
            e = 0,
            f =
                "undefined" != typeof a.getElementsByTagName
                    ? a.getElementsByTagName(b || "*")
                    : "undefined" != typeof a.querySelectorAll
                        ? a.querySelectorAll(b || "*")
                        : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], f) : f;
    }
    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;
    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked);
    }
    function ja(a, b, c, d, e) {
        for (
            var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0;
            o > r;
            r++
        )
            if (((g = a[r]), g || 0 === g))
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
                    (i = i || p.appendChild(b.createElement("div"))),
                        (j = ($.exec(g) || ["", ""])[1].toLowerCase()),
                        (m = da[j] || da._default),
                        (i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2]),
                        (f = m[0]);
                    while (f--) i = i.lastChild;
                    if (
                        (!l.leadingWhitespace &&
                            aa.test(g) &&
                            q.push(b.createTextNode(aa.exec(g)[0])),
                            !l.tbody)
                    ) {
                        (g =
                            "table" !== j || ha.test(g)
                                ? "<table>" !== m[1] || ha.test(g)
                                    ? 0
                                    : i
                                : i.firstChild),
                            (f = g && g.childNodes.length);
                        while (f--)
                            n.nodeName((k = g.childNodes[f]), "tbody") &&
                                !k.childNodes.length &&
                                g.removeChild(k);
                    }
                    n.merge(q, i.childNodes), (i.textContent = "");
                    while (i.firstChild) i.removeChild(i.firstChild);
                    i = p.lastChild;
                } else q.push(b.createTextNode(g));
        i && p.removeChild(i),
            l.appendChecked || n.grep(ea(q, "input"), ia),
            (r = 0);
        while ((g = q[r++]))
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (
                ((h = n.contains(g.ownerDocument, g)),
                    (i = ea(p.appendChild(g), "script")),
                    h && fa(i),
                    c)
            ) {
                f = 0;
                while ((g = i[f++])) _.test(g.type || "") && c.push(g);
            }
        return (i = null), p;
    }
    !(function () {
        var b,
            c,
            e = d.createElement("div");
        for (b in { submit: !0, change: !0, focusin: !0 })
            (c = "on" + b),
                (l[b] = c in a) ||
                (e.setAttribute(c, "t"), (l[b] = e.attributes[c].expando === !1));
        e = null;
    })();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return !0;
    }
    function qa() {
        return !1;
    }
    function ra() {
        try {
            return d.activeElement;
        } catch (a) { }
    }
    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && ((d = d || c), (c = void 0));
            for (h in b) sa(a, h, c, d, b[h], f);
            return a;
        }
        if (
            (null == d && null == e
                ? ((e = c), (d = c = void 0))
                : null == e &&
                ("string" == typeof c
                    ? ((e = d), (d = void 0))
                    : ((e = d), (d = c), (c = void 0))),
                e === !1)
        )
            e = qa;
        else if (!e) return a;
        return (
            1 === f &&
            ((g = e),
                (e = function (a) {
                    return n().off(a), g.apply(this, arguments);
                }),
                (e.guid = g.guid || (g.guid = n.guid++))),
            a.each(function () {
                n.event.add(this, b, e, d, c);
            })
        );
    }
    (n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = n._data(a);
            if (r) {
                c.handler && ((i = c), (c = i.handler), (e = i.selector)),
                    c.guid || (c.guid = n.guid++),
                    (g = r.events) || (g = r.events = {}),
                    (k = r.handle) ||
                    ((k = r.handle = function (a) {
                        return "undefined" == typeof n ||
                            (a && n.event.triggered === a.type)
                            ? void 0
                            : n.event.dispatch.apply(k.elem, arguments);
                    }),
                        (k.elem = a)),
                    (b = (b || "").match(G) || [""]),
                    (h = b.length);
                while (h--)
                    (f = oa.exec(b[h]) || []),
                        (o = q = f[1]),
                        (p = (f[2] || "").split(".").sort()),
                        o &&
                        ((j = n.event.special[o] || {}),
                            (o = (e ? j.delegateType : j.bindType) || o),
                            (j = n.event.special[o] || {}),
                            (l = n.extend(
                                {
                                    type: o,
                                    origType: q,
                                    data: d,
                                    handler: c,
                                    guid: c.guid,
                                    selector: e,
                                    needsContext: e && n.expr.match.needsContext.test(e),
                                    namespace: p.join("."),
                                },
                                i
                            )),
                            (m = g[o]) ||
                            ((m = g[o] = []),
                                (m.delegateCount = 0),
                                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                                (a.addEventListener
                                    ? a.addEventListener(o, k, !1)
                                    : a.attachEvent && a.attachEvent("on" + o, k))),
                            j.add &&
                            (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                            (n.event.global[o] = !0));
                a = null;
            }
        },
        remove: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                (b = (b || "").match(G) || [""]), (j = b.length);
                while (j--)
                    if (
                        ((h = oa.exec(b[j]) || []),
                            (o = q = h[1]),
                            (p = (h[2] || "").split(".").sort()),
                            o)
                    ) {
                        (l = n.event.special[o] || {}),
                            (o = (d ? l.delegateType : l.bindType) || o),
                            (m = k[o] || []),
                            (h =
                                h[2] &&
                                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                            (i = f = m.length);
                        while (f--)
                            (g = m[f]),
                                (!e && q !== g.origType) ||
                                (c && c.guid !== g.guid) ||
                                (h && !h.test(g.namespace)) ||
                                (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                                (m.splice(f, 1),
                                    g.selector && m.delegateCount--,
                                    l.remove && l.remove.call(a, g));
                        i &&
                            !m.length &&
                            ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                                n.removeEvent(a, o, r.handle),
                                delete k[o]);
                    } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
            }
        },
        trigger: function (b, c, e, f) {
            var g,
                h,
                i,
                j,
                l,
                m,
                o,
                p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (
                ((i = m = e = e || d),
                    3 !== e.nodeType &&
                    8 !== e.nodeType &&
                    !na.test(q + n.event.triggered) &&
                    (q.indexOf(".") > -1 &&
                        ((r = q.split(".")), (q = r.shift()), r.sort()),
                        (h = q.indexOf(":") < 0 && "on" + q),
                        (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
                        (b.isTrigger = f ? 2 : 3),
                        (b.namespace = r.join(".")),
                        (b.rnamespace = b.namespace
                            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
                            : null),
                        (b.result = void 0),
                        b.target || (b.target = e),
                        (c = null == c ? [b] : n.makeArray(c, [b])),
                        (l = n.event.special[q] || {}),
                        f || !l.trigger || l.trigger.apply(e, c) !== !1))
            ) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (
                        j = l.delegateType || q, na.test(j + q) || (i = i.parentNode);
                        i;
                        i = i.parentNode
                    )
                        p.push(i), (m = i);
                    m === (e.ownerDocument || d) &&
                        p.push(m.defaultView || m.parentWindow || a);
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped())
                    (b.type = o > 1 ? j : l.bindType || q),
                        (g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle")),
                        g && g.apply(i, c),
                        (g = h && i[h]),
                        g &&
                        g.apply &&
                        M(i) &&
                        ((b.result = g.apply(i, c)),
                            b.result === !1 && b.preventDefault());
                if (
                    ((b.type = q),
                        !f &&
                        !b.isDefaultPrevented() &&
                        (!l._default || l._default.apply(p.pop(), c) === !1) &&
                        M(e) &&
                        h &&
                        e[q] &&
                        !n.isWindow(e))
                ) {
                    (m = e[h]), m && (e[h] = null), (n.event.triggered = q);
                    try {
                        e[q]();
                    } catch (s) { }
                    (n.event.triggered = void 0), m && (e[h] = m);
                }
                return b.result;
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b,
                c,
                d,
                f,
                g,
                h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (
                ((i[0] = a),
                    (a.delegateTarget = this),
                    !k.preDispatch || k.preDispatch.call(this, a) !== !1)
            ) {
                (h = n.event.handlers.call(this, a, j)), (b = 0);
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    (a.currentTarget = f.elem), (c = 0);
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
                            ((a.handleObj = g),
                                (a.data = g.data),
                                (d = (
                                    (n.event.special[g.origType] || {}).handle || g.handler
                                ).apply(f.elem, i)),
                                void 0 !== d &&
                                (a.result = d) === !1 &&
                                (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;
            if (
                h &&
                i.nodeType &&
                ("click" !== a.type || isNaN(a.button) || a.button < 1)
            )
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++)
                            (f = b[c]),
                                (e = f.selector + " "),
                                void 0 === d[e] &&
                                (d[e] = f.needsContext
                                    ? n(e, this).index(i) > -1
                                    : n.find(e, this, null, [i]).length),
                                d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d });
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b,
                c,
                e,
                f = a.type,
                g = a,
                h = this.fixHooks[f];
            h ||
                (this.fixHooks[f] = h = ma.test(f)
                    ? this.mouseHooks
                    : la.test(f)
                        ? this.keyHooks
                        : {}),
                (e = h.props ? this.props.concat(h.props) : this.props),
                (a = new n.Event(g)),
                (b = e.length);
            while (b--) (c = e[b]), (a[c] = g[c]);
            return (
                a.target || (a.target = g.srcElement || d),
                3 === a.target.nodeType && (a.target = a.target.parentNode),
                (a.metaKey = !!a.metaKey),
                h.filter ? h.filter(a, g) : a
            );
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
            " "
        ),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return (
                    null == a.which &&
                    (a.which = null != b.charCode ? b.charCode : b.keyCode),
                    a
                );
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
            ),
            filter: function (a, b) {
                var c,
                    e,
                    f,
                    g = b.button,
                    h = b.fromElement;
                return (
                    null == a.pageX &&
                    null != b.clientX &&
                    ((e = a.target.ownerDocument || d),
                        (f = e.documentElement),
                        (c = e.body),
                        (a.pageX =
                            b.clientX +
                            ((f && f.scrollLeft) || (c && c.scrollLeft) || 0) -
                            ((f && f.clientLeft) || (c && c.clientLeft) || 0)),
                        (a.pageY =
                            b.clientY +
                            ((f && f.scrollTop) || (c && c.scrollTop) || 0) -
                            ((f && f.clientTop) || (c && c.clientTop) || 0))),
                    !a.relatedTarget &&
                    h &&
                    (a.relatedTarget = h === a.target ? b.toElement : h),
                    a.which ||
                    void 0 === g ||
                    (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                    a
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== ra() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (a) { }
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return n.nodeName(this, "input") &&
                        "checkbox" === this.type &&
                        this.click
                        ? (this.click(), !1)
                        : void 0;
                },
                _default: function (a) {
                    return n.nodeName(a.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result &&
                        a.originalEvent &&
                        (a.originalEvent.returnValue = a.result);
                },
            },
        },
        simulate: function (a, b, c) {
            var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
        },
    }),
        (n.removeEvent = d.removeEventListener
            ? function (a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c);
            }
            : function (a, b, c) {
                var d = "on" + b;
                a.detachEvent &&
                    ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
            }),
        (n.Event = function (a, b) {
            return this instanceof n.Event
                ? (a && a.type
                    ? ((this.originalEvent = a),
                        (this.type = a.type),
                        (this.isDefaultPrevented =
                            a.defaultPrevented ||
                                (void 0 === a.defaultPrevented && a.returnValue === !1)
                                ? pa
                                : qa))
                    : (this.type = a),
                    b && n.extend(this, b),
                    (this.timeStamp = (a && a.timeStamp) || n.now()),
                    void (this[n.expando] = !0))
                : new n.Event(a, b);
        }),
        (n.Event.prototype = {
            constructor: n.Event,
            isDefaultPrevented: qa,
            isPropagationStopped: qa,
            isImmediatePropagationStopped: qa,
            preventDefault: function () {
                var a = this.originalEvent;
                (this.isDefaultPrevented = pa),
                    a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                (this.isPropagationStopped = pa),
                    a &&
                    !this.isSimulated &&
                    (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                (this.isImmediatePropagationStopped = pa),
                    a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        n.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (a, b) {
                n.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function (a) {
                        var c,
                            d = this,
                            e = a.relatedTarget,
                            f = a.handleObj;
                        return (
                            (e && (e === d || n.contains(d, e))) ||
                            ((a.type = f.origType),
                                (c = f.handler.apply(this, arguments)),
                                (a.type = b)),
                            c
                        );
                    },
                };
            }
        ),
        l.submit ||
        (n.event.special.submit = {
            setup: function () {
                return n.nodeName(this, "form")
                    ? !1
                    : void n.event.add(
                        this,
                        "click._submit keypress._submit",
                        function (a) {
                            var b = a.target,
                                c =
                                    n.nodeName(b, "input") || n.nodeName(b, "button")
                                        ? n.prop(b, "form")
                                        : void 0;
                            c &&
                                !n._data(c, "submit") &&
                                (n.event.add(c, "submit._submit", function (a) {
                                    a._submitBubble = !0;
                                }),
                                    n._data(c, "submit", !0));
                        }
                    );
            },
            postDispatch: function (a) {
                a._submitBubble &&
                    (delete a._submitBubble,
                        this.parentNode &&
                        !a.isTrigger &&
                        n.event.simulate("submit", this.parentNode, a));
            },
            teardown: function () {
                return n.nodeName(this, "form")
                    ? !1
                    : void n.event.remove(this, "._submit");
            },
        }),
        l.change ||
        (n.event.special.change = {
            setup: function () {
                return ka.test(this.nodeName)
                    ? (("checkbox" !== this.type && "radio" !== this.type) ||
                        (n.event.add(this, "propertychange._change", function (a) {
                            "checked" === a.originalEvent.propertyName &&
                                (this._justChanged = !0);
                        }),
                            n.event.add(this, "click._change", function (a) {
                                this._justChanged && !a.isTrigger && (this._justChanged = !1),
                                    n.event.simulate("change", this, a);
                            })),
                        !1)
                    : void n.event.add(this, "beforeactivate._change", function (a) {
                        var b = a.target;
                        ka.test(b.nodeName) &&
                            !n._data(b, "change") &&
                            (n.event.add(b, "change._change", function (a) {
                                !this.parentNode ||
                                    a.isSimulated ||
                                    a.isTrigger ||
                                    n.event.simulate("change", this.parentNode, a);
                            }),
                                n._data(b, "change", !0));
                    });
            },
            handle: function (a) {
                var b = a.target;
                return this !== b ||
                    a.isSimulated ||
                    a.isTrigger ||
                    ("radio" !== b.type && "checkbox" !== b.type)
                    ? a.handleObj.handler.apply(this, arguments)
                    : void 0;
            },
            teardown: function () {
                return n.event.remove(this, "._change"), !ka.test(this.nodeName);
            },
        }),
        l.focusin ||
        n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
            var c = function (a) {
                n.event.simulate(b, a.target, n.event.fix(a));
            };
            n.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b);
                    e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
                },
                teardown: function () {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b) - 1;
                    e
                        ? n._data(d, b, e)
                        : (d.removeEventListener(a, c, !0), n._removeData(d, b));
                },
            };
        }),
        n.fn.extend({
            on: function (a, b, c, d) {
                return sa(this, a, b, c, d);
            },
            one: function (a, b, c, d) {
                return sa(this, a, b, c, d, 1);
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return (
                        (d = a.handleObj),
                        n(a.delegateTarget).off(
                            d.namespace ? d.origType + "." + d.namespace : d.origType,
                            d.selector,
                            d.handler
                        ),
                        this
                    );
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this;
                }
                return (
                    (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
                    c === !1 && (c = qa),
                    this.each(function () {
                        n.event.remove(this, a, c, b);
                    })
                );
            },
            trigger: function (a, b) {
                return this.each(function () {
                    n.event.trigger(a, b, this);
                });
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0;
            },
        });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
        return n.nodeName(a, "table") &&
            n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
            ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody"))
            : a;
    }
    function Da(a) {
        return (a.type = (null !== n.find.attr(a, "type")) + "/" + a.type), a;
    }
    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c,
                d,
                e,
                f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, (g.events = {});
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = n.extend({}, g.data));
        }
    }
    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (((c = b.nodeName.toLowerCase()), !l.noCloneEvent && b[n.expando])) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando);
            }
            "script" === c && b.text !== a.text
                ? ((Da(b).text = a.text), Ea(b))
                : "object" === c
                    ? (b.parentNode && (b.outerHTML = a.outerHTML),
                        l.html5Clone &&
                        a.innerHTML &&
                        !n.trim(b.innerHTML) &&
                        (b.innerHTML = a.innerHTML))
                    : "input" === c && Z.test(a.type)
                        ? ((b.defaultChecked = b.checked = a.checked),
                            b.value !== a.value && (b.value = a.value))
                        : "option" === c
                            ? (b.defaultSelected = b.selected = a.defaultSelected)
                            : ("input" !== c && "textarea" !== c) ||
                            (b.defaultValue = a.defaultValue);
        }
    }
    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e,
            g,
            h,
            i,
            j,
            k,
            m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || (o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)))
            return a.each(function (e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
            });
        if (
            o &&
            ((k = ja(b, a[0].ownerDocument, !1, a, d)),
                (e = k.firstChild),
                1 === k.childNodes.length && (k = e),
                e || d)
        ) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++)
                (g = k),
                    m !== p &&
                    ((g = n.clone(g, !0, !0)), h && n.merge(i, ea(g, "script"))),
                    c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++)
                    (g = i[m]),
                        _.test(g.type || "") &&
                        !n._data(g, "globalEval") &&
                        n.contains(j, g) &&
                        (g.src
                            ? n._evalUrl && n._evalUrl(g.src)
                            : n.globalEval(
                                (g.text || g.textContent || g.innerHTML || "").replace(
                                    za,
                                    ""
                                )
                            ));
            k = e = null;
        }
        return a;
    }
    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(ea(d)),
                d.parentNode &&
                (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
                    d.parentNode.removeChild(d));
        return a;
    }
    n.extend({
        htmlPrefilter: function (a) {
            return a.replace(va, "<$1></$2>");
        },
        clone: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i = n.contains(a.ownerDocument, a);
            if (
                (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">")
                    ? (f = a.cloneNode(!0))
                    : ((Ba.innerHTML = a.outerHTML), Ba.removeChild((f = Ba.firstChild))),
                    !(
                        (l.noCloneEvent && l.noCloneChecked) ||
                        (1 !== a.nodeType && 11 !== a.nodeType) ||
                        n.isXMLDoc(a)
                    ))
            )
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g)
                    d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++)
                        Fa(e, d[g]);
                else Fa(a, f);
            return (
                (d = ea(f, "script")),
                d.length > 0 && fa(d, !i && ea(a, "script")),
                (d = h = e = null),
                f
            );
        },
        cleanData: function (a, b) {
            for (
                var d,
                e,
                f,
                g,
                h = 0,
                i = n.expando,
                j = n.cache,
                k = l.attributes,
                m = n.event.special;
                null != (d = a[h]);
                h++
            )
                if ((b || M(d)) && ((f = d[i]), (g = f && j[f]))) {
                    if (g.events)
                        for (e in g.events)
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] &&
                        (delete j[f],
                            k || "undefined" == typeof d.removeAttribute
                                ? (d[i] = void 0)
                                : d.removeAttribute(i),
                            c.push(f));
                }
        },
    }),
        n.fn.extend({
            domManip: Ha,
            detach: function (a) {
                return Ia(this, a, !0);
            },
            remove: function (a) {
                return Ia(this, a);
            },
            text: function (a) {
                return Y(
                    this,
                    function (a) {
                        return void 0 === a
                            ? n.text(this)
                            : this.empty().append(
                                ((this[0] && this[0].ownerDocument) || d).createTextNode(a)
                            );
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            append: function () {
                return Ha(this, arguments, function (a) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var b = Ca(this, a);
                        b.appendChild(a);
                    }
                });
            },
            prepend: function () {
                return Ha(this, arguments, function (a) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var b = Ca(this, a);
                        b.insertBefore(a, b.firstChild);
                    }
                });
            },
            before: function () {
                return Ha(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this);
                });
            },
            after: function () {
                return Ha(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
                });
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    1 === a.nodeType && n.cleanData(ea(a, !1));
                    while (a.firstChild) a.removeChild(a.firstChild);
                    a.options && n.nodeName(a, "select") && (a.options.length = 0);
                }
                return this;
            },
            clone: function (a, b) {
                return (
                    (a = null == a ? !1 : a),
                    (b = null == b ? a : b),
                    this.map(function () {
                        return n.clone(this, a, b);
                    })
                );
            },
            html: function (a) {
                return Y(
                    this,
                    function (a) {
                        var b = this[0] || {},
                            c = 0,
                            d = this.length;
                        if (void 0 === a)
                            return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                        if (
                            "string" == typeof a &&
                            !wa.test(a) &&
                            (l.htmlSerialize || !ua.test(a)) &&
                            (l.leadingWhitespace || !aa.test(a)) &&
                            !da[($.exec(a) || ["", ""])[1].toLowerCase()]
                        ) {
                            a = n.htmlPrefilter(a);
                            try {
                                for (; d > c; c++)
                                    (b = this[c] || {}),
                                        1 === b.nodeType &&
                                        (n.cleanData(ea(b, !1)), (b.innerHTML = a));
                                b = 0;
                            } catch (e) { }
                        }
                        b && this.empty().append(a);
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            replaceWith: function () {
                var a = [];
                return Ha(
                    this,
                    arguments,
                    function (b) {
                        var c = this.parentNode;
                        n.inArray(this, a) < 0 &&
                            (n.cleanData(ea(this)), c && c.replaceChild(b, this));
                    },
                    a
                );
            },
        }),
        n.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (a, b) {
                n.fn[a] = function (a) {
                    for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
                        (c = d === h ? this : this.clone(!0)),
                            n(f[d])[b](c),
                            g.apply(e, c.get());
                    return this.pushStack(e);
                };
            }
        );
    var Ja,
        Ka = { HTML: "block", BODY: "block" };
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d;
    }
    function Ma(a) {
        var b = d,
            c = Ka[a];
        return (
            c ||
            ((c = La(a, b)),
                ("none" !== c && c) ||
                ((Ja = (
                    Ja || n("<iframe frameborder='0' width='0' height='0'/>")
                ).appendTo(b.documentElement)),
                    (b = (Ja[0].contentWindow || Ja[0].contentDocument).document),
                    b.write(),
                    b.close(),
                    (c = La(a, b)),
                    Ja.detach()),
                (Ka[a] = c)),
            c
        );
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function (a, b, c, d) {
            var e,
                f,
                g = {};
            for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        },
        Qa = d.documentElement;
    !(function () {
        var b,
            c,
            e,
            f,
            g,
            h,
            i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            (j.style.cssText = "float:left;opacity:.5"),
                (l.opacity = "0.5" === j.style.opacity),
                (l.cssFloat = !!j.style.cssFloat),
                (j.style.backgroundClip = "content-box"),
                (j.cloneNode(!0).style.backgroundClip = ""),
                (l.clearCloneStyle = "content-box" === j.style.backgroundClip),
                (i = d.createElement("div")),
                (i.style.cssText =
                    "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                (j.innerHTML = ""),
                i.appendChild(j),
                (l.boxSizing =
                    "" === j.style.boxSizing ||
                    "" === j.style.MozBoxSizing ||
                    "" === j.style.WebkitBoxSizing),
                n.extend(l, {
                    reliableHiddenOffsets: function () {
                        return null == b && k(), f;
                    },
                    boxSizingReliable: function () {
                        return null == b && k(), e;
                    },
                    pixelMarginRight: function () {
                        return null == b && k(), c;
                    },
                    pixelPosition: function () {
                        return null == b && k(), b;
                    },
                    reliableMarginRight: function () {
                        return null == b && k(), g;
                    },
                    reliableMarginLeft: function () {
                        return null == b && k(), h;
                    },
                });
            function k() {
                var k,
                    l,
                    m = d.documentElement;
                m.appendChild(i),
                    (j.style.cssText =
                        "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                    (b = e = h = !1),
                    (c = g = !0),
                    a.getComputedStyle &&
                    ((l = a.getComputedStyle(j)),
                        (b = "1%" !== (l || {}).top),
                        (h = "2px" === (l || {}).marginLeft),
                        (e = "4px" === (l || { width: "4px" }).width),
                        (j.style.marginRight = "50%"),
                        (c = "4px" === (l || { marginRight: "4px" }).marginRight),
                        (k = j.appendChild(d.createElement("div"))),
                        (k.style.cssText = j.style.cssText =
                            "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                        (k.style.marginRight = k.style.width = "0"),
                        (j.style.width = "1px"),
                        (g = !parseFloat((a.getComputedStyle(k) || {}).marginRight)),
                        j.removeChild(k)),
                    (j.style.display = "none"),
                    (f = 0 === j.getClientRects().length),
                    f &&
                    ((j.style.display = ""),
                        (j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                        (j.childNodes[0].style.borderCollapse = "separate"),
                        (k = j.getElementsByTagName("td")),
                        (k[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                        (f = 0 === k[0].offsetHeight),
                        f &&
                        ((k[0].style.display = ""),
                            (k[1].style.display = "none"),
                            (f = 0 === k[0].offsetHeight))),
                    m.removeChild(i);
            }
        }
    })();
    var Ra,
        Sa,
        Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle
        ? ((Ra = function (b) {
            var c = b.ownerDocument.defaultView;
            return (c && c.opener) || (c = a), c.getComputedStyle(b);
        }),
            (Sa = function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = a.style;
                return (
                    (c = c || Ra(a)),
                    (g = c ? c.getPropertyValue(b) || c[b] : void 0),
                    ("" !== g && void 0 !== g) ||
                    n.contains(a.ownerDocument, a) ||
                    (g = n.style(a, b)),
                    c &&
                    !l.pixelMarginRight() &&
                    Oa.test(g) &&
                    Na.test(b) &&
                    ((d = h.width),
                        (e = h.minWidth),
                        (f = h.maxWidth),
                        (h.minWidth = h.maxWidth = h.width = g),
                        (g = c.width),
                        (h.width = d),
                        (h.minWidth = e),
                        (h.maxWidth = f)),
                    void 0 === g ? g : g + ""
                );
            }))
        : Qa.currentStyle &&
        ((Ra = function (a) {
            return a.currentStyle;
        }),
            (Sa = function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = a.style;
                return (
                    (c = c || Ra(a)),
                    (g = c ? c[b] : void 0),
                    null == g && h && h[b] && (g = h[b]),
                    Oa.test(g) &&
                    !Ta.test(b) &&
                    ((d = h.left),
                        (e = a.runtimeStyle),
                        (f = e && e.left),
                        f && (e.left = a.currentStyle.left),
                        (h.left = "fontSize" === b ? "1em" : g),
                        (g = h.pixelLeft + "px"),
                        (h.left = d),
                        f && (e.left = f)),
                    void 0 === g ? g : g + "" || "auto"
                );
            }));
    function Ua(a, b) {
        return {
            get: function () {
                return a()
                    ? void delete this.get
                    : (this.get = b).apply(this, arguments);
            },
        };
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = { position: "absolute", visibility: "hidden", display: "block" },
        $a = { letterSpacing: "0", fontWeight: "400" },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;
    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--) if (((a = _a[c] + b), a in ab)) return a;
    }
    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            (d = a[g]),
                d.style &&
                ((f[g] = n._data(d, "olddisplay")),
                    (c = d.style.display),
                    b
                        ? (f[g] || "none" !== c || (d.style.display = ""),
                            "" === d.style.display &&
                            W(d) &&
                            (f[g] = n._data(d, "olddisplay", Ma(d.nodeName))))
                        : ((e = W(d)),
                            ((c && "none" !== c) || !e) &&
                            n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            (d = a[g]),
                d.style &&
                ((b && "none" !== d.style.display && "" !== d.style.display) ||
                    (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function eb(a, b, c, d, e) {
        for (
            var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
            g = 0;
            4 > f;
            f += 2
        )
            "margin" === c && (g += n.css(a, c + V[f], !0, e)),
                d
                    ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
                        "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e)))
                    : ((g += n.css(a, "padding" + V[f], !0, e)),
                        "padding" !== c &&
                        (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g;
    }
    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (
                ((e = Sa(a, b, f)),
                    (0 > e || null == e) && (e = a.style[b]),
                    Oa.test(e))
            )
                return e;
            (d = g && (l.boxSizingReliable() || e === a.style[b])),
                (e = parseFloat(e) || 0);
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: { float: l.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = n.camelCase(b),
                    i = a.style;
                if (
                    ((b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
                        (g = n.cssHooks[b] || n.cssHooks[h]),
                        void 0 === c)
                )
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (
                    ((f = typeof c),
                        "string" === f &&
                        (e = U.exec(c)) &&
                        e[1] &&
                        ((c = X(a, b, e)), (f = "number")),
                        null != c &&
                        c === c &&
                        ("number" === f &&
                            (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
                            l.clearCloneStyle ||
                            "" !== c ||
                            0 !== b.indexOf("background") ||
                            (i[b] = "inherit"),
                            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
                )
                    try {
                        i[b] = c;
                    } catch (j) { }
            }
        },
        css: function (a, b, c, d) {
            var e,
                f,
                g,
                h = n.camelCase(b);
            return (
                (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
                (g = n.cssHooks[b] || n.cssHooks[h]),
                g && "get" in g && (f = g.get(a, !0, c)),
                void 0 === f && (f = Sa(a, b, d)),
                "normal" === f && b in $a && (f = $a[b]),
                "" === c || c
                    ? ((e = parseFloat(f)), c === !0 || isFinite(e) ? e || 0 : f)
                    : f
            );
        },
    }),
        n.each(["height", "width"], function (a, b) {
            n.cssHooks[b] = {
                get: function (a, c, d) {
                    return c
                        ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth
                            ? Pa(a, Za, function () {
                                return fb(a, b, d);
                            })
                            : fb(a, b, d)
                        : void 0;
                },
                set: function (a, c, d) {
                    var e = d && Ra(a);
                    return db(
                        a,
                        c,
                        d
                            ? eb(
                                a,
                                b,
                                d,
                                l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e),
                                e
                            )
                            : 0
                    );
                },
            };
        }),
        l.opacity ||
        (n.cssHooks.opacity = {
            get: function (a, b) {
                return Wa.test(
                    (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
                )
                    ? 0.01 * parseFloat(RegExp.$1) + ""
                    : b
                        ? "1"
                        : "";
            },
            set: function (a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = (d && d.filter) || c.filter || "";
                (c.zoom = 1),
                    ((b >= 1 || "" === b) &&
                        "" === n.trim(f.replace(Va, "")) &&
                        c.removeAttribute &&
                        (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
                    (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
            },
        }),
        (n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
            return b
                ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"])
                : void 0;
        })),
        (n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
            return b
                ? (parseFloat(Sa(a, "marginLeft")) ||
                    (n.contains(a.ownerDocument, a)
                        ? a.getBoundingClientRect().left -
                        Pa(a, { marginLeft: 0 }, function () {
                            return a.getBoundingClientRect().left;
                        })
                        : 0)) + "px"
                : void 0;
        })),
        n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
            (n.cssHooks[a + b] = {
                expand: function (c) {
                    for (
                        var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
                        4 > d;
                        d++
                    )
                        e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                    return e;
                },
            }),
                Na.test(a) || (n.cssHooks[a + b].set = db);
        }),
        n.fn.extend({
            css: function (a, b) {
                return Y(
                    this,
                    function (a, b, c) {
                        var d,
                            e,
                            f = {},
                            g = 0;
                        if (n.isArray(b)) {
                            for (d = Ra(a), e = b.length; e > g; g++)
                                f[b[g]] = n.css(a, b[g], !1, d);
                            return f;
                        }
                        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
                    },
                    a,
                    b,
                    arguments.length > 1
                );
            },
            show: function () {
                return cb(this, !0);
            },
            hide: function () {
                return cb(this);
            },
            toggle: function (a) {
                return "boolean" == typeof a
                    ? a
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                        W(this) ? n(this).show() : n(this).hide();
                    });
            },
        });
    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e);
    }
    (n.Tween = gb),
        (gb.prototype = {
            constructor: gb,
            init: function (a, b, c, d, e, f) {
                (this.elem = a),
                    (this.prop = c),
                    (this.easing = e || n.easing._default),
                    (this.options = b),
                    (this.start = this.now = this.cur()),
                    (this.end = d),
                    (this.unit = f || (n.cssNumber[c] ? "" : "px"));
            },
            cur: function () {
                var a = gb.propHooks[this.prop];
                return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
            },
            run: function (a) {
                var b,
                    c = gb.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = b = n.easing[this.easing](
                            a,
                            this.options.duration * a,
                            0,
                            1,
                            this.options.duration
                        ))
                        : (this.pos = b = a),
                    (this.now = (this.end - this.start) * b + this.start),
                    this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : gb.propHooks._default.set(this),
                    this
                );
            },
        }),
        (gb.prototype.init.prototype = gb.prototype),
        (gb.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return 1 !== a.elem.nodeType ||
                        (null != a.elem[a.prop] && null == a.elem.style[a.prop])
                        ? a.elem[a.prop]
                        : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
                },
                set: function (a) {
                    n.fx.step[a.prop]
                        ? n.fx.step[a.prop](a)
                        : 1 !== a.elem.nodeType ||
                            (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
                            ? (a.elem[a.prop] = a.now)
                            : n.style(a.elem, a.prop, a.now + a.unit);
                },
            },
        }),
        (gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
            },
        }),
        (n.easing = {
            linear: function (a) {
                return a;
            },
            swing: function (a) {
                return 0.5 - Math.cos(a * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (n.fx = gb.prototype.init),
        (n.fx.step = {});
    var hb,
        ib,
        jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;
    function lb() {
        return (
            a.setTimeout(function () {
                hb = void 0;
            }),
            (hb = n.now())
        );
    }
    function mb(a, b) {
        var c,
            d = { height: a },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            (c = V[e]), (d["margin" + c] = d["padding" + c] = a);
        return b && (d.opacity = d.width = a), d;
    }
    function nb(a, b, c) {
        for (
            var d,
            e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]),
            f = 0,
            g = e.length;
            g > f;
            f++
        )
            if ((d = e[f].call(c, b, a))) return d;
    }
    function ob(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue ||
            ((h = n._queueHooks(a, "fx")),
                null == h.unqueued &&
                ((h.unqueued = 0),
                    (i = h.empty.fire),
                    (h.empty.fire = function () {
                        h.unqueued || i();
                    })),
                h.unqueued++,
                m.always(function () {
                    m.always(function () {
                        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
                    });
                })),
            1 === a.nodeType &&
            ("height" in b || "width" in b) &&
            ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
                (j = n.css(a, "display")),
                (k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j),
                "inline" === k &&
                "none" === n.css(a, "float") &&
                (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName)
                    ? (p.zoom = 1)
                    : (p.display = "inline-block"))),
            c.overflow &&
            ((p.overflow = "hidden"),
                l.shrinkWrapBlocks() ||
                m.always(function () {
                    (p.overflow = c.overflow[0]),
                        (p.overflowX = c.overflow[1]),
                        (p.overflowY = c.overflow[2]);
                }));
        for (d in b)
            if (((e = b[d]), jb.exec(e))) {
                if (
                    (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
                ) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0;
                }
                o[d] = (r && r[d]) || n.style(a, d);
            } else j = void 0;
        if (n.isEmptyObject(o))
            "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : (r = n._data(a, "fxshow", {})),
                f && (r.hidden = !q),
                q
                    ? n(a).show()
                    : m.done(function () {
                        n(a).hide();
                    }),
                m.done(function () {
                    var b;
                    n._removeData(a, "fxshow");
                    for (b in o) n.style(a, b, o[b]);
                });
            for (d in o)
                (g = nb(q ? r[d] : 0, d, m)),
                    d in r ||
                    ((r[d] = g.start),
                        q &&
                        ((g.end = g.start),
                            (g.start = "width" === d || "height" === d ? 1 : 0)));
        }
    }
    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (
                ((d = n.camelCase(c)),
                    (e = b[d]),
                    (f = a[c]),
                    n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
                    c !== d && ((a[d] = f), delete a[c]),
                    (g = n.cssHooks[d]),
                    g && "expand" in g)
            ) {
                (f = g.expand(f)), delete a[d];
                for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
            } else b[d] = e;
    }
    function qb(a, b, c) {
        var d,
            e,
            f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function () {
                delete i.elem;
            }),
            i = function () {
                if (e) return !1;
                for (
                    var b = hb || lb(),
                    c = Math.max(0, j.startTime + j.duration - b),
                    d = c / j.duration || 0,
                    f = 1 - d,
                    g = 0,
                    i = j.tweens.length;
                    i > g;
                    g++
                )
                    j.tweens[g].run(f);
                return (
                    h.notifyWith(a, [j, f, c]),
                    1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                );
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(
                        a,
                        j.opts,
                        b,
                        c,
                        j.opts.specialEasing[b] || j.opts.easing
                    );
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return (
                        b
                            ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
                            : h.rejectWith(a, [j, b]),
                        this
                    );
                },
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if ((d = qb.prefilters[f].call(j, a, k, j.opts)))
                return (
                    n.isFunction(d.stop) &&
                    (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                    d
                );
        return (
            n.map(k, nb, j),
            n.isFunction(j.opts.start) && j.opts.start.call(a, j),
            n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
            j
                .progress(j.opts.progress)
                .done(j.opts.done, j.opts.complete)
                .fail(j.opts.fail)
                .always(j.opts.always)
        );
    }
    (n.Animation = n.extend(qb, {
        tweeners: {
            "*": [
                function (a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c;
                },
            ],
        },
        tweener: function (a, b) {
            n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
            for (var c, d = 0, e = a.length; e > d; d++)
                (c = a[d]),
                    (qb.tweeners[c] = qb.tweeners[c] || []),
                    qb.tweeners[c].unshift(b);
        },
        prefilters: [ob],
        prefilter: function (a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
        },
    })),
        (n.speed = function (a, b, c) {
            var d =
                a && "object" == typeof a
                    ? n.extend({}, a)
                    : {
                        complete: c || (!c && b) || (n.isFunction(a) && a),
                        duration: a,
                        easing: (c && b) || (b && !n.isFunction(b) && b),
                    };
            return (
                (d.duration = n.fx.off
                    ? 0
                    : "number" == typeof d.duration
                        ? d.duration
                        : d.duration in n.fx.speeds
                            ? n.fx.speeds[d.duration]
                            : n.fx.speeds._default),
                (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
                (d.old = d.complete),
                (d.complete = function () {
                    n.isFunction(d.old) && d.old.call(this),
                        d.queue && n.dequeue(this, d.queue);
                }),
                d
            );
        }),
        n.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(W)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: b }, a, c, d);
            },
            animate: function (a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function () {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0);
                    };
                return (
                    (g.finish = g),
                    e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                );
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c);
                };
                return (
                    "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                    b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function () {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = n.timers,
                            g = n._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                        for (e = f.length; e--;)
                            f[e].elem !== this ||
                                (null != a && f[e].queue !== a) ||
                                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                        (!b && c) || n.dequeue(this, a);
                    })
                );
            },
            finish: function (a) {
                return (
                    a !== !1 && (a = a || "fx"),
                    this.each(function () {
                        var b,
                            c = n._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = n.timers,
                            g = d ? d.length : 0;
                        for (
                            c.finish = !0,
                            n.queue(this, a, []),
                            e && e.stop && e.stop.call(this, !0),
                            b = f.length;
                            b--;

                        )
                            f[b].elem === this &&
                                f[b].queue === a &&
                                (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++)
                            d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish;
                    })
                );
            },
        }),
        n.each(["toggle", "show", "hide"], function (a, b) {
            var c = n.fn[b];
            n.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a
                    ? c.apply(this, arguments)
                    : this.animate(mb(b, !0), a, d, e);
            };
        }),
        n.each(
            {
                slideDown: mb("show"),
                slideUp: mb("hide"),
                slideToggle: mb("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (a, b) {
                n.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d);
                };
            }
        ),
        (n.timers = []),
        (n.fx.tick = function () {
            var a,
                b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++)
                (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), (hb = void 0);
        }),
        (n.fx.timer = function (a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
        }),
        (n.fx.interval = 13),
        (n.fx.start = function () {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
        }),
        (n.fx.stop = function () {
            a.clearInterval(ib), (ib = null);
        }),
        (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (n.fn.delay = function (b, c) {
            return (
                (b = n.fx ? n.fx.speeds[b] || b : b),
                (c = c || "fx"),
                this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e);
                    };
                })
            );
        }),
        (function () {
            var a,
                b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            (c = d.createElement("div")),
                c.setAttribute("className", "t"),
                (c.innerHTML =
                    "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (a = c.getElementsByTagName("a")[0]),
                b.setAttribute("type", "checkbox"),
                c.appendChild(b),
                (a = c.getElementsByTagName("a")[0]),
                (a.style.cssText = "top:1px"),
                (l.getSetAttribute = "t" !== c.className),
                (l.style = /top/.test(a.getAttribute("style"))),
                (l.hrefNormalized = "/a" === a.getAttribute("href")),
                (l.checkOn = !!b.value),
                (l.optSelected = f.selected),
                (l.enctype = !!d.createElement("form").enctype),
                (e.disabled = !0),
                (l.optDisabled = !f.disabled),
                (b = d.createElement("input")),
                b.setAttribute("value", ""),
                (l.input = "" === b.getAttribute("value")),
                (b.value = "t"),
                b.setAttribute("type", "radio"),
                (l.radioValue = "t" === b.value);
        })();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function (a) {
            var b,
                c,
                d,
                e = this[0];
            {
                if (arguments.length)
                    return (
                        (d = n.isFunction(a)),
                        this.each(function (c) {
                            var e;
                            1 === this.nodeType &&
                                ((e = d ? a.call(this, c, n(this).val()) : a),
                                    null == e
                                        ? (e = "")
                                        : "number" == typeof e
                                            ? (e += "")
                                            : n.isArray(e) &&
                                            (e = n.map(e, function (a) {
                                                return null == a ? "" : a + "";
                                            })),
                                    (b =
                                        n.valHooks[this.type] ||
                                        n.valHooks[this.nodeName.toLowerCase()]),
                                    (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                                    (this.value = e));
                        })
                    );
                if (e)
                    return (
                        (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
                        b && "get" in b && void 0 !== (c = b.get(e, "value"))
                            ? c
                            : ((c = e.value),
                                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
                    );
            }
        },
    }),
        n.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = n.find.attr(a, "value");
                        return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
                    },
                },
                select: {
                    get: function (a) {
                        for (
                            var b,
                            c,
                            d = a.options,
                            e = a.selectedIndex,
                            f = "select-one" === a.type || 0 > e,
                            g = f ? null : [],
                            h = f ? e + 1 : d.length,
                            i = 0 > e ? h : f ? e : 0;
                            h > i;
                            i++
                        )
                            if (
                                ((c = d[i]),
                                    (c.selected || i === e) &&
                                    (l.optDisabled
                                        ? !c.disabled
                                        : null === c.getAttribute("disabled")) &&
                                    (!c.parentNode.disabled ||
                                        !n.nodeName(c.parentNode, "optgroup")))
                            ) {
                                if (((b = n(c).val()), f)) return b;
                                g.push(b);
                            }
                        return g;
                    },
                    set: function (a, b) {
                        var c,
                            d,
                            e = a.options,
                            f = n.makeArray(b),
                            g = e.length;
                        while (g--)
                            if (((d = e[g]), n.inArray(n.valHooks.option.get(d), f) > -1))
                                try {
                                    d.selected = c = !0;
                                } catch (h) {
                                    d.scrollHeight;
                                }
                            else d.selected = !1;
                        return c || (a.selectedIndex = -1), e;
                    },
                },
            },
        }),
        n.each(["radio", "checkbox"], function () {
            (n.valHooks[this] = {
                set: function (a, b) {
                    return n.isArray(b)
                        ? (a.checked = n.inArray(n(a).val(), b) > -1)
                        : void 0;
                },
            }),
                l.checkOn ||
                (n.valHooks[this].get = function (a) {
                    return null === a.getAttribute("value") ? "on" : a.value;
                });
        });
    var tb,
        ub,
        vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function (a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a);
            });
        },
    }),
        n.extend({
            attr: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return "undefined" == typeof a.getAttribute
                        ? n.prop(a, b, c)
                        : ((1 === f && n.isXMLDoc(a)) ||
                            ((b = b.toLowerCase()),
                                (e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb))),
                            void 0 !== c
                                ? null === c
                                    ? void n.removeAttr(a, b)
                                    : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                                        ? d
                                        : (a.setAttribute(b, c + ""), c)
                                : e && "get" in e && null !== (d = e.get(a, b))
                                    ? d
                                    : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b;
                        }
                    },
                },
            },
            removeAttr: function (a, b) {
                var c,
                    d,
                    e = 0,
                    f = b && b.match(G);
                if (f && 1 === a.nodeType)
                    while ((c = f[e++]))
                        (d = n.propFix[c] || c),
                            n.expr.match.bool.test(c)
                                ? (yb && xb) || !wb.test(c)
                                    ? (a[d] = !1)
                                    : (a[n.camelCase("default-" + c)] = a[d] = !1)
                                : n.attr(a, c, ""),
                            a.removeAttribute(xb ? c : d);
            },
        }),
        (ub = {
            set: function (a, b, c) {
                return (
                    b === !1
                        ? n.removeAttr(a, c)
                        : (yb && xb) || !wb.test(c)
                            ? a.setAttribute((!xb && n.propFix[c]) || c, c)
                            : (a[n.camelCase("default-" + c)] = a[c] = !0),
                    c
                );
            },
        }),
        n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = vb[b] || n.find.attr;
            (yb && xb) || !wb.test(b)
                ? (vb[b] = function (a, b, d) {
                    var e, f;
                    return (
                        d ||
                        ((f = vb[b]),
                            (vb[b] = e),
                            (e = null != c(a, b, d) ? b.toLowerCase() : null),
                            (vb[b] = f)),
                        e
                    );
                })
                : (vb[b] = function (a, b, c) {
                    return c
                        ? void 0
                        : a[n.camelCase("default-" + b)]
                            ? b.toLowerCase()
                            : null;
                });
        }),
        (yb && xb) ||
        (n.attrHooks.value = {
            set: function (a, b, c) {
                return n.nodeName(a, "input")
                    ? void (a.defaultValue = b)
                    : tb && tb.set(a, b, c);
            },
        }),
        xb ||
        ((tb = {
            set: function (a, b, c) {
                var d = a.getAttributeNode(c);
                return (
                    d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
                    (d.value = b += ""),
                    "value" === c || b === a.getAttribute(c) ? b : void 0
                );
            },
        }),
            (vb.id = vb.name = vb.coords = function (a, b, c) {
                var d;
                return c
                    ? void 0
                    : (d = a.getAttributeNode(b)) && "" !== d.value
                        ? d.value
                        : null;
            }),
            (n.valHooks.button = {
                get: function (a, b) {
                    var c = a.getAttributeNode(b);
                    return c && c.specified ? c.value : void 0;
                },
                set: tb.set,
            }),
            (n.attrHooks.contenteditable = {
                set: function (a, b, c) {
                    tb.set(a, "" === b ? !1 : b, c);
                },
            }),
            n.each(["width", "height"], function (a, b) {
                n.attrHooks[b] = {
                    set: function (a, c) {
                        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
                    },
                };
            })),
        l.style ||
        (n.attrHooks.style = {
            get: function (a) {
                return a.style.cssText || void 0;
            },
            set: function (a, b) {
                return (a.style.cssText = b + "");
            },
        });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return (
                (a = n.propFix[a] || a),
                this.each(function () {
                    try {
                        (this[a] = void 0), delete this[a];
                    } catch (b) { }
                })
            );
        },
    }),
        n.extend({
            prop: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return (
                        (1 === f && n.isXMLDoc(a)) ||
                        ((b = n.propFix[b] || b), (e = n.propHooks[b])),
                        void 0 !== c
                            ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                                ? d
                                : (a[b] = c)
                            : e && "get" in e && null !== (d = e.get(a, b))
                                ? d
                                : a[b]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = n.find.attr(a, "tabindex");
                        return b
                            ? parseInt(b, 10)
                            : zb.test(a.nodeName) || (Ab.test(a.nodeName) && a.href)
                                ? 0
                                : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        l.hrefNormalized ||
        n.each(["href", "src"], function (a, b) {
            n.propHooks[b] = {
                get: function (a) {
                    return a.getAttribute(b, 4);
                },
            };
        }),
        l.optSelected ||
        (n.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return (
                    b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
                    null
                );
            },
            set: function (a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            },
        }),
        n.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                n.propFix[this.toLowerCase()] = this;
            }
        ),
        l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;
    function Cb(a) {
        return n.attr(a, "class") || "";
    }
    n.fn.extend({
        addClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).addClass(a.call(this, b, Cb(this)));
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while ((c = this[i++]))
                    if (
                        ((e = Cb(c)),
                            (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
                    ) {
                        g = 0;
                        while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        (h = n.trim(d)), e !== h && n.attr(c, "class", h);
                    }
            }
            return this;
        },
        removeClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).removeClass(a.call(this, b, Cb(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while ((c = this[i++]))
                    if (
                        ((e = Cb(c)),
                            (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
                    ) {
                        g = 0;
                        while ((f = b[g++]))
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        (h = n.trim(d)), e !== h && n.attr(c, "class", h);
                    }
            }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c
                ? b
                    ? this.addClass(a)
                    : this.removeClass(a)
                : n.isFunction(a)
                    ? this.each(function (c) {
                        n(this).toggleClass(a.call(this, c, Cb(this), b), b);
                    })
                    : this.each(function () {
                        var b, d, e, f;
                        if ("string" === c) {
                            (d = 0), (e = n(this)), (f = a.match(G) || []);
                            while ((b = f[d++]))
                                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                        } else (void 0 !== a && "boolean" !== c) || ((b = Cb(this)), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
                    });
        },
        hasClass: function (a) {
            var b,
                c,
                d = 0;
            b = " " + a + " ";
            while ((c = this[d++]))
                if (
                    1 === c.nodeType &&
                    (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1
                )
                    return !0;
            return !1;
        },
    }),
        n.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                " "
            ),
            function (a, b) {
                n.fn[b] = function (a, c) {
                    return arguments.length > 0
                        ? this.on(b, null, a, c)
                        : this.trigger(b);
                };
            }
        ),
        n.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            },
        });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (n.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c,
            d = null,
            e = n.trim(b + "");
        return e &&
            !n.trim(
                e.replace(Gb, function (a, b, e, f) {
                    return (
                        c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
                    );
                })
            )
            ? Function("return " + e)()
            : n.error("Invalid JSON: " + b);
    }),
        (n.parseXML = function (b) {
            var c, d;
            if (!b || "string" != typeof b) return null;
            try {
                a.DOMParser
                    ? ((d = new a.DOMParser()), (c = d.parseFromString(b, "text/xml")))
                    : ((c = new a.ActiveXObject("Microsoft.XMLDOM")),
                        (c.async = "false"),
                        c.loadXML(b));
            } catch (e) {
                c = void 0;
            }
            return (
                (c &&
                    c.documentElement &&
                    !c.getElementsByTagName("parsererror").length) ||
                n.error("Invalid XML: " + b),
                c
            );
        });
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];
    function Tb(a) {
        return function (b, c) {
            "string" != typeof b && ((c = b), (b = "*"));
            var d,
                e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while ((d = f[e++]))
                    "+" === d.charAt(0)
                        ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
                        : (a[d] = a[d] || []).push(c);
        };
    }
    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;
        function g(h) {
            var i;
            return (
                (e[h] = !0),
                n.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j]
                        ? f
                            ? !(i = j)
                            : void 0
                        : (b.dataTypes.unshift(j), g(j), !1);
                }),
                i
            );
        }
        return g(b.dataTypes[0]) || (!e["*"] && g("*"));
    }
    function Vb(a, b) {
        var c,
            d,
            e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a;
    }
    function Wb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
                void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break;
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break;
                }
                d || (d = g);
            }
            f = f || d;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function Xb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (
                (a.responseFields[f] && (c[a.responseFields[f]] = b),
                    !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                    (i = f),
                    (f = k.shift()))
            )
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (((g = j[i + " " + f] || j["* " + f]), !g))
                        for (e in j)
                            if (
                                ((h = e.split(" ")),
                                    h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
                            ) {
                                g === !0
                                    ? (g = j[e])
                                    : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f,
                                };
                            }
                }
        return { state: "success", data: b };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function (b, c) {
            "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while ((b = Jb.exec(g))) k[b[1].toLowerCase()] = b[2];
                            }
                            b = k[a.toLowerCase()];
                        }
                        return null == b ? null : b;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === u ? g : null;
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
                    },
                    overrideMimeType: function (a) {
                        return u || (l.mimeType = a), this;
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this;
                    },
                    abort: function (a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this;
                    },
                };
            if (
                ((p.promise(w).complete = q.add),
                    (w.success = w.done),
                    (w.error = w.fail),
                    (l.url = ((b || l.url || Rb) + "")
                        .replace(Hb, "")
                        .replace(Mb, Sb[1] + "//")),
                    (l.type = c.method || c.type || l.method || l.type),
                    (l.dataTypes = n
                        .trim(l.dataType || "*")
                        .toLowerCase()
                        .match(G) || [""]),
                    null == l.crossDomain &&
                    ((d = Nb.exec(l.url.toLowerCase())),
                        (l.crossDomain = !(
                            !d ||
                            (d[1] === Sb[1] &&
                                d[2] === Sb[2] &&
                                (d[3] || ("http:" === d[1] ? "80" : "443")) ===
                                (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))
                        ))),
                    l.data &&
                    l.processData &&
                    "string" != typeof l.data &&
                    (l.data = n.param(l.data, l.traditional)),
                    Ub(Ob, l, c, w),
                    2 === u)
            )
                return w;
            (i = n.event && l.global),
                i && 0 === n.active++ && n.event.trigger("ajaxStart"),
                (l.type = l.type.toUpperCase()),
                (l.hasContent = !Lb.test(l.type)),
                (f = l.url),
                l.hasContent ||
                (l.data &&
                    ((f = l.url += (Fb.test(f) ? "&" : "?") + l.data), delete l.data),
                    l.cache === !1 &&
                    (l.url = Ib.test(f)
                        ? f.replace(Ib, "$1_=" + Eb++)
                        : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
                l.ifModified &&
                (n.lastModified[f] &&
                    w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
                    n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
                ((l.data && l.hasContent && l.contentType !== !1) || c.contentType) &&
                w.setRequestHeader("Content-Type", l.contentType),
                w.setRequestHeader(
                    "Accept",
                    l.dataTypes[0] && l.accepts[l.dataTypes[0]]
                        ? l.accepts[l.dataTypes[0]] +
                        ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "")
                        : l.accepts["*"]
                );
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
                return w.abort();
            v = "abort";
            for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]);
            if ((j = Ub(Pb, l, c, w))) {
                if (((w.readyState = 1), i && o.trigger("ajaxSend", [w, l]), 2 === u))
                    return w;
                l.async &&
                    l.timeout > 0 &&
                    (h = a.setTimeout(function () {
                        w.abort("timeout");
                    }, l.timeout));
                try {
                    (u = 1), j.send(s, y);
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x);
                }
            } else y(-1, "No Transport");
            function y(b, c, d, e) {
                var k,
                    s,
                    t,
                    v,
                    x,
                    y = c;
                2 !== u &&
                    ((u = 2),
                        h && a.clearTimeout(h),
                        (j = void 0),
                        (g = e || ""),
                        (w.readyState = b > 0 ? 4 : 0),
                        (k = (b >= 200 && 300 > b) || 304 === b),
                        d && (v = Wb(l, w, d)),
                        (v = Xb(l, v, w, k)),
                        k
                            ? (l.ifModified &&
                                ((x = w.getResponseHeader("Last-Modified")),
                                    x && (n.lastModified[f] = x),
                                    (x = w.getResponseHeader("etag")),
                                    x && (n.etag[f] = x)),
                                204 === b || "HEAD" === l.type
                                    ? (y = "nocontent")
                                    : 304 === b
                                        ? (y = "notmodified")
                                        : ((y = v.state), (s = v.data), (t = v.error), (k = !t)))
                            : ((t = y), (!b && y) || ((y = "error"), 0 > b && (b = 0))),
                        (w.status = b),
                        (w.statusText = (c || y) + ""),
                        k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
                        w.statusCode(r),
                        (r = void 0),
                        i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
                        q.fireWith(m, [w, y]),
                        i &&
                        (o.trigger("ajaxComplete", [w, l]),
                            --n.active || n.event.trigger("ajaxStop")));
            }
            return w;
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script");
        },
    }),
        n.each(["get", "post"], function (a, b) {
            n[b] = function (a, c, d, e) {
                return (
                    n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
                    n.ajax(
                        n.extend(
                            { url: a, type: b, dataType: e, data: c, success: d },
                            n.isPlainObject(a) && a
                        )
                    )
                );
            };
        }),
        (n._evalUrl = function (a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0,
            });
        }),
        n.fn.extend({
            wrapAll: function (a) {
                if (n.isFunction(a))
                    return this.each(function (b) {
                        n(this).wrapAll(a.call(this, b));
                    });
                if (this[0]) {
                    var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b
                            .map(function () {
                                var a = this;
                                while (a.firstChild && 1 === a.firstChild.nodeType)
                                    a = a.firstChild;
                                return a;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (a) {
                return n.isFunction(a)
                    ? this.each(function (b) {
                        n(this).wrapInner(a.call(this, b));
                    })
                    : this.each(function () {
                        var b = n(this),
                            c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a);
                    });
            },
            wrap: function (a) {
                var b = n.isFunction(a);
                return this.each(function (c) {
                    n(this).wrapAll(b ? a.call(this, c) : a);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        });
    function Yb(a) {
        return (a.style && a.style.display) || n.css(a, "display");
    }
    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode;
        }
        return !1;
    }
    (n.expr.filters.hidden = function (a) {
        return l.reliableHiddenOffsets()
            ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length
            : Zb(a);
    }),
        (n.expr.filters.visible = function (a) {
            return !n.expr.filters.hidden(a);
        });
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function (b, e) {
                c || _b.test(a)
                    ? d(a, e)
                    : dc(
                        a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
                        e,
                        c,
                        d
                    );
            });
        else if (c || "object" !== n.type(b)) d(a, b);
        else for (e in b) dc(a + "[" + e + "]", b[e], c, d);
    }
    (n.param = function (a, b) {
        var c,
            d = [],
            e = function (a, b) {
                (b = n.isFunction(b) ? b() : null == b ? "" : b),
                    (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
            };
        if (
            (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
                n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
        )
            n.each(a, function () {
                e(this.name, this.value);
            });
        else for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+");
    }),
        n.fn.extend({
            serialize: function () {
                return n.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this;
                })
                    .filter(function () {
                        var a = this.type;
                        return (
                            this.name &&
                            !n(this).is(":disabled") &&
                            cc.test(this.nodeName) &&
                            !bc.test(a) &&
                            (this.checked || !Z.test(a))
                        );
                    })
                    .map(function (a, b) {
                        var c = n(this).val();
                        return null == c
                            ? null
                            : n.isArray(c)
                                ? n.map(c, function (a) {
                                    return { name: b.name, value: a.replace(ac, "\r\n") };
                                })
                                : { name: b.name, value: c.replace(ac, "\r\n") };
                    })
                    .get();
            },
        }),
        (n.ajaxSettings.xhr =
            void 0 !== a.ActiveXObject
                ? function () {
                    return this.isLocal
                        ? ic()
                        : d.documentMode > 8
                            ? hc()
                            : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                                hc()) ||
                            ic();
                }
                : hc);
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent &&
        a.attachEvent("onunload", function () {
            for (var a in fc) fc[a](void 0, !0);
        }),
        (l.cors = !!gc && "withCredentials" in gc),
        (gc = l.ajax = !!gc),
        gc &&
        n.ajaxTransport(function (b) {
            if (!b.crossDomain || l.cors) {
                var c;
                return {
                    send: function (d, e) {
                        var f,
                            g = b.xhr(),
                            h = ++ec;
                        if (
                            (g.open(b.type, b.url, b.async, b.username, b.password),
                                b.xhrFields)
                        )
                            for (f in b.xhrFields) g[f] = b.xhrFields[f];
                        b.mimeType &&
                            g.overrideMimeType &&
                            g.overrideMimeType(b.mimeType),
                            b.crossDomain ||
                            d["X-Requested-With"] ||
                            (d["X-Requested-With"] = "XMLHttpRequest");
                        for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                        g.send((b.hasContent && b.data) || null),
                            (c = function (a, d) {
                                var f, i, j;
                                if (c && (d || 4 === g.readyState))
                                    if (
                                        (delete fc[h],
                                            (c = void 0),
                                            (g.onreadystatechange = n.noop),
                                            d)
                                    )
                                        4 !== g.readyState && g.abort();
                                    else {
                                        (j = {}),
                                            (f = g.status),
                                            "string" == typeof g.responseText &&
                                            (j.text = g.responseText);
                                        try {
                                            i = g.statusText;
                                        } catch (k) {
                                            i = "";
                                        }
                                        f || !b.isLocal || b.crossDomain
                                            ? 1223 === f && (f = 204)
                                            : (f = j.text ? 200 : 404);
                                    }
                                j && e(f, i, j, g.getAllResponseHeaders());
                            }),
                            b.async
                                ? 4 === g.readyState
                                    ? a.setTimeout(c)
                                    : (g.onreadystatechange = fc[h] = c)
                                : c();
                    },
                    abort: function () {
                        c && c(void 0, !0);
                    },
                };
            }
        });
    function hc() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) { }
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) { }
    }
    n.ajaxSetup({
        accepts: {
            script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a;
            },
        },
    }),
        n.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1),
                a.crossDomain && ((a.type = "GET"), (a.global = !1));
        }),
        n.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b,
                    c = d.head || n("head")[0] || d.documentElement;
                return {
                    send: function (e, f) {
                        (b = d.createElement("script")),
                            (b.async = !0),
                            a.scriptCharset && (b.charset = a.scriptCharset),
                            (b.src = a.url),
                            (b.onload = b.onreadystatechange = function (a, c) {
                                (c || !b.readyState || /loaded|complete/.test(b.readyState)) &&
                                    ((b.onload = b.onreadystatechange = null),
                                        b.parentNode && b.parentNode.removeChild(b),
                                        (b = null),
                                        c || f(200, "success"));
                            }),
                            c.insertBefore(b, c.firstChild);
                    },
                    abort: function () {
                        b && b.onload(void 0, !0);
                    },
                };
            }
        });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return (this[a] = !0), a;
        },
    }),
        n.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e,
                f,
                g,
                h =
                    b.jsonp !== !1 &&
                    (kc.test(b.url)
                        ? "url"
                        : "string" == typeof b.data &&
                        0 ===
                        (b.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        kc.test(b.data) &&
                        "data");
            return h || "jsonp" === b.dataTypes[0]
                ? ((e = b.jsonpCallback = n.isFunction(b.jsonpCallback)
                    ? b.jsonpCallback()
                    : b.jsonpCallback),
                    h
                        ? (b[h] = b[h].replace(kc, "$1" + e))
                        : b.jsonp !== !1 &&
                        (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                    (b.converters["script json"] = function () {
                        return g || n.error(e + " was not called"), g[0];
                    }),
                    (b.dataTypes[0] = "json"),
                    (f = a[e]),
                    (a[e] = function () {
                        g = arguments;
                    }),
                    d.always(function () {
                        void 0 === f ? n(a).removeProp(e) : (a[e] = f),
                            b[e] && ((b.jsonpCallback = c.jsonpCallback), jc.push(e)),
                            g && n.isFunction(f) && f(g[0]),
                            (g = f = void 0);
                    }),
                    "script")
                : void 0;
        }),
        (n.parseHTML = function (a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
            var e = x.exec(a),
                f = !c && [];
            return e
                ? [b.createElement(e[1])]
                : ((e = ja([a], b, f)),
                    f && f.length && n(f).remove(),
                    n.merge([], e.childNodes));
        });
    var lc = n.fn.load;
    (n.fn.load = function (a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");
        return (
            h > -1 && ((d = n.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
            n.isFunction(b)
                ? ((c = b), (b = void 0))
                : b && "object" == typeof b && (e = "POST"),
            g.length > 0 &&
            n
                .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
                .done(function (a) {
                    (f = arguments),
                        g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
                })
                .always(
                    c &&
                    function (a, b) {
                        g.each(function () {
                            c.apply(this, f || [a.responseText, b, a]);
                        });
                    }
                ),
            this
        );
    }),
        n.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (a, b) {
                n.fn[b] = function (a) {
                    return this.on(b, a);
                };
            }
        ),
        (n.expr.filters.animated = function (a) {
            return n.grep(n.timers, function (b) {
                return a === b.elem;
            }).length;
        });
    function mc(a) {
        return n.isWindow(a)
            ? a
            : 9 === a.nodeType
                ? a.defaultView || a.parentWindow
                : !1;
    }
    (n.offset = {
        setOffset: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"),
                (h = l.offset()),
                (f = n.css(a, "top")),
                (i = n.css(a, "left")),
                (j =
                    ("absolute" === k || "fixed" === k) &&
                    n.inArray("auto", [f, i]) > -1),
                j
                    ? ((d = l.position()), (g = d.top), (e = d.left))
                    : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
                null != b.top && (m.top = b.top - h.top + g),
                null != b.left && (m.left = b.left - h.left + e),
                "using" in b ? b.using.call(a, m) : l.css(m);
        },
    }),
        n.fn.extend({
            offset: function (a) {
                if (arguments.length)
                    return void 0 === a
                        ? this
                        : this.each(function (b) {
                            n.offset.setOffset(this, a, b);
                        });
                var b,
                    c,
                    d = { top: 0, left: 0 },
                    e = this[0],
                    f = e && e.ownerDocument;
                if (f)
                    return (
                        (b = f.documentElement),
                        n.contains(b, e)
                            ? ("undefined" != typeof e.getBoundingClientRect &&
                                (d = e.getBoundingClientRect()),
                                (c = mc(f)),
                            {
                                top:
                                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                                left:
                                    d.left +
                                    (c.pageXOffset || b.scrollLeft) -
                                    (b.clientLeft || 0),
                            })
                            : d
                    );
            },
            position: function () {
                if (this[0]) {
                    var a,
                        b,
                        c = { top: 0, left: 0 },
                        d = this[0];
                    return (
                        "fixed" === n.css(d, "position")
                            ? (b = d.getBoundingClientRect())
                            : ((a = this.offsetParent()),
                                (b = this.offset()),
                                n.nodeName(a[0], "html") || (c = a.offset()),
                                (c.top += n.css(a[0], "borderTopWidth", !0)),
                                (c.left += n.css(a[0], "borderLeftWidth", !0))),
                        {
                            top: b.top - c.top - n.css(d, "marginTop", !0),
                            left: b.left - c.left - n.css(d, "marginLeft", !0),
                        }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var a = this.offsetParent;
                    while (
                        a &&
                        !n.nodeName(a, "html") &&
                        "static" === n.css(a, "position")
                    )
                        a = a.offsetParent;
                    return a || Qa;
                });
            },
        }),
        n.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (a, b) {
                var c = /Y/.test(b);
                n.fn[a] = function (d) {
                    return Y(
                        this,
                        function (a, d, e) {
                            var f = mc(a);
                            return void 0 === e
                                ? f
                                    ? b in f
                                        ? f[b]
                                        : f.document.documentElement[d]
                                    : a[d]
                                : void (f
                                    ? f.scrollTo(
                                        c ? n(f).scrollLeft() : e,
                                        c ? e : n(f).scrollTop()
                                    )
                                    : (a[d] = e));
                        },
                        a,
                        d,
                        arguments.length,
                        null
                    );
                };
            }
        ),
        n.each(["top", "left"], function (a, b) {
            n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
                return c
                    ? ((c = Sa(a, b)), Oa.test(c) ? n(a).position()[b] + "px" : c)
                    : void 0;
            });
        }),
        n.each({ Height: "height", Width: "width" }, function (a, b) {
            n.each(
                { padding: "inner" + a, content: b, "": "outer" + a },
                function (c, d) {
                    n.fn[d] = function (d, e) {
                        var f = arguments.length && (c || "boolean" != typeof d),
                            g = c || (d === !0 || e === !0 ? "margin" : "border");
                        return Y(
                            this,
                            function (b, c, d) {
                                var e;
                                return n.isWindow(b)
                                    ? b.document.documentElement["client" + a]
                                    : 9 === b.nodeType
                                        ? ((e = b.documentElement),
                                            Math.max(
                                                b.body["scroll" + a],
                                                e["scroll" + a],
                                                b.body["offset" + a],
                                                e["offset" + a],
                                                e["client" + a]
                                            ))
                                        : void 0 === d
                                            ? n.css(b, c, g)
                                            : n.style(b, c, d, g);
                            },
                            b,
                            f ? d : void 0,
                            f,
                            null
                        );
                    };
                }
            );
        }),
        n.fn.extend({
            bind: function (a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function (a, b) {
                return this.off(a, null, b);
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length
                    ? this.off(a, "**")
                    : this.off(b, a || "**", c);
            },
        }),
        (n.fn.size = function () {
            return this.length;
        }),
        (n.fn.andSelf = n.fn.addBack),
        "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
            return n;
        });
    var nc = a.jQuery,
        oc = a.$;
    return (
        (n.noConflict = function (b) {
            return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n;
        }),
        b || (a.jQuery = a.$ = n),
        n
    );
});
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper) }(this, function (t, g, u) { "use strict"; function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function s(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t } function l(o) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}, e = Object.keys(r); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) { return Object.getOwnPropertyDescriptor(r, t).enumerable }))), e.forEach(function (t) { var e, n, i; e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i }) } return o } g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u; var e = "transitionend"; function n(t) { var e = this, n = !1; return g(this).one(_.TRANSITION_END, function () { n = !0 }), setTimeout(function () { n || _.triggerTransitionEnd(e) }, t), this } var _ = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, getSelectorFromElement: function (t) { var e = t.getAttribute("data-target"); if (!e || "#" === e) { var n = t.getAttribute("href"); e = n && "#" !== n ? n.trim() : "" } try { return document.querySelector(e) ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function (t) { if (!t) return 0; var e = g(t).css("transition-duration"), n = g(t).css("transition-delay"), i = parseFloat(e), o = parseFloat(n); return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0 }, reflow: function (t) { return t.offsetHeight }, triggerTransitionEnd: function (t) { g(t).trigger(e) }, supportsTransitionEnd: function () { return Boolean(e) }, isElement: function (t) { return (t[0] || t).nodeType }, typeCheckConfig: function (t, e, n) { for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) { var o = n[i], r = e[i], s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".') } var a }, findShadowRoot: function (t) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null; var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } }; g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = { bindType: e, delegateType: e, handle: function (t) { if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }; var o = "alert", r = "bs.alert", a = "." + r, c = g.fn[o], h = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", m = "show", p = function () { function i(t) { this._element = t } var t = i.prototype; return t.close = function (t) { var e = this._element; t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, t.dispose = function () { g.removeData(this._element, r), this._element = null }, t._getRootElement = function (t) { var e = _.getSelectorFromElement(t), n = !1; return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n }, t._triggerCloseEvent = function (t) { var e = g.Event(h.CLOSE); return g(t).trigger(e), e }, t._removeElement = function (e) { var n = this; if (g(e).removeClass(m), g(e).hasClass(d)) { var t = _.getTransitionDurationFromElement(e); g(e).one(_.TRANSITION_END, function (t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t) } else this._destroyElement(e) }, t._destroyElement = function (t) { g(t).detach().trigger(h.CLOSED).remove() }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this), e = t.data(r); e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this) }) }, i._handleDismiss = function (e) { return function (t) { t && t.preventDefault(), e.close(this) } }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }]), i }(); g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () { return g.fn[o] = c, p._jQueryInterface }; var v = "button", y = "bs.button", E = "." + y, C = ".data-api", T = g.fn[v], S = "active", b = "btn", I = "focus", D = '[data-toggle^="button"]', w = '[data-toggle="buttons"]', A = 'input:not([type="hidden"])', N = ".active", O = ".btn", k = { CLICK_DATA_API: "click" + E + C, FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C }, P = function () { function n(t) { this._element = t } var t = n.prototype; return t.toggle = function () { var t = !0, e = !0, n = g(this._element).closest(w)[0]; if (n) { var i = this._element.querySelector(A); if (i) { if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1; else { var o = n.querySelector(N); o && g(o).removeClass(S) } if (t) { if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return; i.checked = !this._element.classList.contains(S), g(i).trigger("change") } i.focus(), e = !1 } } e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S) }, t.dispose = function () { g.removeData(this._element, y), this._element = null }, n._jQueryInterface = function (e) { return this.each(function () { var t = g(this).data(y); t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]() }) }, s(n, null, [{ key: "VERSION", get: function () { return "4.3.1" } }]), n }(); g(document).on(k.CLICK_DATA_API, D, function (t) { t.preventDefault(); var e = t.target; g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle") }).on(k.FOCUS_BLUR_DATA_API, D, function (t) { var e = g(t.target).closest(O)[0]; g(e).toggleClass(I, /^focus(in)?$/.test(t.type)) }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () { return g.fn[v] = T, P._jQueryInterface }; var L = "carousel", j = "bs.carousel", H = "." + j, R = ".data-api", x = g.fn[L], F = { interval: 3e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 }, U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, W = "next", q = "prev", M = "left", K = "right", Q = { SLIDE: "slide" + H, SLID: "slid" + H, KEYDOWN: "keydown" + H, MOUSEENTER: "mouseenter" + H, MOUSELEAVE: "mouseleave" + H, TOUCHSTART: "touchstart" + H, TOUCHMOVE: "touchmove" + H, TOUCHEND: "touchend" + H, POINTERDOWN: "pointerdown" + H, POINTERUP: "pointerup" + H, DRAG_START: "dragstart" + H, LOAD_DATA_API: "load" + H + R, CLICK_DATA_API: "click" + H + R }, B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", X = "carousel-item-left", $ = "carousel-item-next", G = "carousel-item-prev", J = "pointer-event", Z = ".active", tt = ".active.carousel-item", et = ".carousel-item", nt = ".carousel-item img", it = ".carousel-item-next, .carousel-item-prev", ot = ".carousel-indicators", rt = "[data-slide], [data-slide-to]", st = '[data-ride="carousel"]', at = { TOUCH: "touch", PEN: "pen" }, lt = function () { function r(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var t = r.prototype; return t.next = function () { this._isSliding || this._slide(W) }, t.nextWhenVisible = function () { !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next() }, t.prev = function () { this._isSliding || this._slide(q) }, t.pause = function (t) { t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function (t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function (t) { var e = this; this._activeElement = this._element.querySelector(tt); var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Q.SLID, function () { return e.to(t) }); else { if (n === t) return this.pause(), void this.cycle(); var i = n < t ? W : q; this._slide(i, this._items[t]) } }, t.dispose = function () { g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function (t) { return t = l({}, F, t), _.typeCheckConfig(L, t, U), t }, t._handleSwipe = function () { var t = Math.abs(this.touchDeltaX); if (!(t <= 40)) { var e = t / this.touchDeltaX; 0 < e && this.prev(), e < 0 && this.next() } }, t._addEventListeners = function () { var e = this; this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) { return e._keydown(t) }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) { return e.pause(t) }).on(Q.MOUSELEAVE, function (t) { return e.cycle(t) }), this._config.touch && this._addTouchEventListeners() }, t._addTouchEventListeners = function () { var n = this; if (this._touchSupported) { var e = function (t) { n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX) }, i = function (t) { n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) { return n.cycle(t) }, 500 + n._config.interval)) }; g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) { return t.preventDefault() }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) { return e(t) }), g(this._element).on(Q.POINTERUP, function (t) { return i(t) }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) { return e(t) }), g(this._element).on(Q.TOUCHMOVE, function (t) { var e; (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX }), g(this._element).on(Q.TOUCHEND, function (t) { return i(t) })) } }, t._keydown = function (t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) { case 37: t.preventDefault(), this.prev(); break; case 39: t.preventDefault(), this.next() } }, t._getItemIndex = function (t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t) }, t._getItemByDirection = function (t, e) { var n = t === W, i = t === q, o = this._getItemIndex(e), r = this._items.length - 1; if ((i && 0 === o || n && o === r) && !this._config.wrap) return e; var s = (o + (t === q ? -1 : 1)) % this._items.length; return -1 === s ? this._items[this._items.length - 1] : this._items[s] }, t._triggerSlideEvent = function (t, e) { var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(tt)), o = g.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n }); return g(this._element).trigger(o), o }, t._setActiveIndicatorElement = function (t) { if (this._indicatorsElement) { var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z)); g(e).removeClass(V); var n = this._indicatorsElement.children[this._getItemIndex(t)]; n && g(n).addClass(V) } }, t._slide = function (t, e) { var n, i, o, r = this, s = this._element.querySelector(tt), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval); if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) { this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l); var u = g.Event(Q.SLID, { relatedTarget: l, direction: o, from: a, to: c }); if (g(this._element).hasClass(Y)) { g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n); var f = parseInt(l.getAttribute("data-interval"), 10); this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval; var d = _.getTransitionDurationFromElement(s); g(s).one(_.TRANSITION_END, function () { g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () { return g(r._element).trigger(u) }, 0) }).emulateTransitionEnd(d) } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u); h && this.cycle() } }, r._jQueryInterface = function (i) { return this.each(function () { var t = g(this).data(j), e = l({}, F, g(this).data()); "object" == typeof i && (e = l({}, e, i)); var n = "string" == typeof i ? i : e.slide; if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } else e.interval && e.ride && (t.pause(), t.cycle()) }) }, r._dataApiClickHandler = function (t) { var e = _.getSelectorFromElement(this); if (e) { var n = g(e)[0]; if (n && g(n).hasClass(B)) { var i = l({}, g(n).data(), g(this).data()), o = this.getAttribute("data-slide-to"); o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault() } } }, s(r, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return F } }]), r }(); g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () { for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) { var i = g(t[e]); lt._jQueryInterface.call(i, i.data()) } }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () { return g.fn[L] = x, lt._jQueryInterface }; var ct = "collapse", ht = "bs.collapse", ut = "." + ht, ft = g.fn[ct], dt = { toggle: !0, parent: "" }, gt = { toggle: "boolean", parent: "(string|element)" }, _t = { SHOW: "show" + ut, SHOWN: "shown" + ut, HIDE: "hide" + ut, HIDDEN: "hidden" + ut, CLICK_DATA_API: "click" + ut + ".data-api" }, mt = "show", pt = "collapse", vt = "collapsing", yt = "collapsed", Et = "width", Ct = "height", Tt = ".show, .collapsing", St = '[data-toggle="collapse"]', bt = function () { function a(e, t) { this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')); for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) { var r = n[i], s = _.getSelectorFromElement(r), a = [].slice.call(document.querySelectorAll(s)).filter(function (t) { return t === e }); null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r)) } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var t = a.prototype; return t.toggle = function () { g(this._element).hasClass(mt) ? this.hide() : this.show() }, t.show = function () { var t, e, n = this; if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) { return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt) })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) { var i = g.Event(_t.SHOW); if (g(this._element).trigger(i), !i.isDefaultPrevented()) { t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null)); var o = this._getDimension(); g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0); var r = "scroll" + (o[0].toUpperCase() + o.slice(1)), s = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, function () { g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN) }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px" } } }, t.hide = function () { var t = this; if (!this._isTransitioning && g(this._element).hasClass(mt)) { var e = g.Event(_t.HIDE); if (g(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension(); this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt); var i = this._triggerArray.length; if (0 < i) for (var o = 0; o < i; o++) { var r = this._triggerArray[o], s = _.getSelectorFromElement(r); if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1) } this.setTransitioning(!0); this._element.style[n] = ""; var a = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, function () { t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN) }).emulateTransitionEnd(a) } } }, t.setTransitioning = function (t) { this._isTransitioning = t }, t.dispose = function () { g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function (t) { return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t }, t._getDimension = function () { return g(this._element).hasClass(Et) ? Et : Ct }, t._getParent = function () { var t, n = this; _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent); var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i = [].slice.call(t.querySelectorAll(e)); return g(i).each(function (t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t }, t._addAriaAndCollapsedClass = function (t, e) { var n = g(t).hasClass(mt); e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n) }, a._getTargetFromElement = function (t) { var e = _.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, a._jQueryInterface = function (i) { return this.each(function () { var t = g(this), e = t.data(ht), n = l({}, dt, t.data(), "object" == typeof i && i ? i : {}); if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) { if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"'); e[i]() } }) }, s(a, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return dt } }]), a }(); g(document).on(_t.CLICK_DATA_API, St, function (t) { "A" === t.currentTarget.tagName && t.preventDefault(); var n = g(this), e = _.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(e)); g(i).each(function () { var t = g(this), e = t.data(ht) ? "toggle" : n.data(); bt._jQueryInterface.call(t, e) }) }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () { return g.fn[ct] = ft, bt._jQueryInterface }; var It = "dropdown", Dt = "bs.dropdown", wt = "." + Dt, At = ".data-api", Nt = g.fn[It], Ot = new RegExp("38|40|27"), kt = { HIDE: "hide" + wt, HIDDEN: "hidden" + wt, SHOW: "show" + wt, SHOWN: "shown" + wt, CLICK: "click" + wt, CLICK_DATA_API: "click" + wt + At, KEYDOWN_DATA_API: "keydown" + wt + At, KEYUP_DATA_API: "keyup" + wt + At }, Pt = "disabled", Lt = "show", jt = "dropup", Ht = "dropright", Rt = "dropleft", xt = "dropdown-menu-right", Ft = "position-static", Ut = '[data-toggle="dropdown"]', Wt = ".dropdown form", qt = ".dropdown-menu", Mt = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Qt = "top-start", Bt = "top-end", Vt = "bottom-start", Yt = "bottom-end", zt = "right-start", Xt = "left-start", $t = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Gt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Jt = function () { function c(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var t = c.prototype; return t.toggle = function () { if (!this._element.disabled && !g(this._element).hasClass(Pt)) { var t = c._getParentFromElement(this._element), e = g(this._menu).hasClass(Lt); if (c._clearMenus(), !e) { var n = { relatedTarget: this._element }, i = g.Event(kt.SHOW, n); if (g(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var o = this._element; "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n)) } } } }, t.show = function () { if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) { var t = { relatedTarget: this._element }, e = g.Event(kt.SHOW, t), n = c._getParentFromElement(this._element); g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t))) } }, t.hide = function () { if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) { var t = { relatedTarget: this._element }, e = g.Event(kt.HIDE, t), n = c._getParentFromElement(this._element); g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t))) } }, t.dispose = function () { g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function () { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function () { var e = this; g(this._element).on(kt.CLICK, function (t) { t.preventDefault(), t.stopPropagation(), e.toggle() }) }, t._getConfig = function (t) { return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t }, t._getMenuElement = function () { if (!this._menu) { var t = c._getParentFromElement(this._element); t && (this._menu = t.querySelector(qt)) } return this._menu }, t._getPlacement = function () { var t = g(this._element.parentNode), e = Vt; return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e }, t._detectNavbar = function () { return 0 < g(this._element).closest(".navbar").length }, t._getOffset = function () { var e = this, t = {}; return "function" == typeof this._config.offset ? t.fn = function (t) { return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t } : t.offset = this._config.offset, t }, t._getPopperConfig = function () { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t }, c._jQueryInterface = function (e) { return this.each(function () { var t = g(this).data(Dt); if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Dt, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, c._clearMenus = function (t) { if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) { var o = c._getParentFromElement(e[n]), r = g(e[n]).data(Dt), s = { relatedTarget: e[n] }; if (t && "click" === t.type && (s.clickEvent = t), r) { var a = r._menu; if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) { var l = g.Event(kt.HIDE, s); g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s))) } } } }, c._getParentFromElement = function (t) { var e, n = _.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, c._dataApiKeydownHandler = function (t) { if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) { var e = c._getParentFromElement(this), n = g(e).hasClass(Lt); if (n && (!n || 27 !== t.which && 32 !== t.which)) { var i = [].slice.call(e.querySelectorAll(Kt)); if (0 !== i.length) { var o = i.indexOf(t.target); 38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus() } } else { if (27 === t.which) { var r = e.querySelector(Ut); g(r).trigger("focus") } g(this).trigger("click") } } }, s(c, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return $t } }, { key: "DefaultType", get: function () { return Gt } }]), c }(); g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) { t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle") }).on(kt.CLICK_DATA_API, Wt, function (t) { t.stopPropagation() }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () { return g.fn[It] = Nt, Jt._jQueryInterface }; var Zt = "modal", te = "bs.modal", ee = "." + te, ne = g.fn[Zt], ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, oe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, re = { HIDE: "hide" + ee, HIDDEN: "hidden" + ee, SHOW: "show" + ee, SHOWN: "shown" + ee, FOCUSIN: "focusin" + ee, RESIZE: "resize" + ee, CLICK_DISMISS: "click.dismiss" + ee, KEYDOWN_DISMISS: "keydown.dismiss" + ee, MOUSEUP_DISMISS: "mouseup.dismiss" + ee, MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee, CLICK_DATA_API: "click" + ee + ".data-api" }, se = "modal-dialog-scrollable", ae = "modal-scrollbar-measure", le = "modal-backdrop", ce = "modal-open", he = "fade", ue = "show", fe = ".modal-dialog", de = ".modal-body", ge = '[data-toggle="modal"]', _e = '[data-dismiss="modal"]', me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", pe = ".sticky-top", ve = function () { function o(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 } var t = o.prototype; return t.toggle = function (t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function (t) { var e = this; if (!this._isShown && !this._isTransitioning) { g(this._element).hasClass(he) && (this._isTransitioning = !0); var n = g.Event(re.SHOW, { relatedTarget: t }); g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) { return e.hide(t) }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () { g(e._element).one(re.MOUSEUP_DISMISS, function (t) { g(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function () { return e._showElement(t) })) } }, t.hide = function (t) { var e = this; if (t && t.preventDefault(), this._isShown && !this._isTransitioning) { var n = g.Event(re.HIDE); if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = g(this._element).hasClass(he); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) { var o = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, function (t) { return e._hideModal(t) }).emulateTransitionEnd(o) } else this._hideModal() } } }, t.dispose = function () { [window, this._element, this._dialog].forEach(function (t) { return g(t).off(ee) }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, t.handleUpdate = function () { this._adjustDialog() }, t._getConfig = function (t) { return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t }, t._showElement = function (t) { var e = this, n = g(this._element).hasClass(he); this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus(); var i = g.Event(re.SHOWN, { relatedTarget: t }), o = function () { e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i) }; if (n) { var r = _.getTransitionDurationFromElement(this._dialog); g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r) } else o() }, t._enforceFocus = function () { var e = this; g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) { document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus() }) }, t._setEscapeEvent = function () { var e = this; this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS) }, t._setResizeEvent = function () { var e = this; this._isShown ? g(window).on(re.RESIZE, function (t) { return e.handleUpdate(t) }) : g(window).off(re.RESIZE) }, t._hideModal = function () { var t = this; this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () { g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN) }) }, t._removeBackdrop = function () { this._backdrop && (g(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function (t) { var e = this, n = g(this._element).hasClass(he) ? he : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return; if (!n) return void t(); var i = _.getTransitionDurationFromElement(this._backdrop); g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { g(this._backdrop).removeClass(ue); var o = function () { e._removeBackdrop(), t && t() }; if (g(this._element).hasClass(he)) { var r = _.getTransitionDurationFromElement(this._backdrop); g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r) } else o() } else t && t() }, t._adjustDialog = function () { var t = this._element.scrollHeight > document.documentElement.clientHeight; !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function () { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function () { var t = document.body.getBoundingClientRect(); this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, t._setScrollbar = function () { var o = this; if (this._isBodyOverflowing) { var t = [].slice.call(document.querySelectorAll(me)), e = [].slice.call(document.querySelectorAll(pe)); g(t).each(function (t, e) { var n = e.style.paddingRight, i = g(e).css("padding-right"); g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px") }), g(e).each(function (t, e) { var n = e.style.marginRight, i = g(e).css("margin-right"); g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px") }); var n = document.body.style.paddingRight, i = g(document.body).css("padding-right"); g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px") } g(document.body).addClass(ce) }, t._resetScrollbar = function () { var t = [].slice.call(document.querySelectorAll(me)); g(t).each(function (t, e) { var n = g(e).data("padding-right"); g(e).removeData("padding-right"), e.style.paddingRight = n || "" }); var e = [].slice.call(document.querySelectorAll("" + pe)); g(e).each(function (t, e) { var n = g(e).data("margin-right"); "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right") }); var n = g(document.body).data("padding-right"); g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "" }, t._getScrollbarWidth = function () { var t = document.createElement("div"); t.className = ae, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, o._jQueryInterface = function (n, i) { return this.each(function () { var t = g(this).data(te), e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {}); if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n](i) } else e.show && t.show(i) }) }, s(o, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return ie } }]), o }(); g(document).on(re.CLICK_DATA_API, ge, function (t) { var e, n = this, i = _.getSelectorFromElement(this); i && (e = document.querySelector(i)); var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var r = g(e).one(re.SHOW, function (t) { t.isDefaultPrevented() || r.one(re.HIDDEN, function () { g(n).is(":visible") && n.focus() }) }); ve._jQueryInterface.call(g(e), o, this) }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () { return g.fn[Zt] = ne, ve._jQueryInterface }; var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], Ee = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi, Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i; function Se(t, s, e) { if (0 === t.length) return t; if (e && "function" == typeof e) return e(t); for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function (t, e) { var n = l[t], i = n.nodeName.toLowerCase(); if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue"; var o = [].slice.call(n.attributes), r = [].concat(s["*"] || [], s[i] || []); o.forEach(function (t) { (function (t, e) { var n = t.nodeName.toLowerCase(); if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te)); for (var i = e.filter(function (t) { return t instanceof RegExp }), o = 0, r = i.length; o < r; o++)if (n.match(i[o])) return !0; return !1 })(t, r) || n.removeAttribute(t.nodeName) }) }, o = 0, r = l.length; o < r; o++)i(o); return n.body.innerHTML } var be = "tooltip", Ie = "bs.tooltip", De = "." + Ie, we = g.fn[be], Ae = "bs-tooltip", Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"), Oe = ["sanitize", "whiteList", "sanitizeFn"], ke = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" }, Pe = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, Le = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Ee }, je = "show", He = "out", Re = { HIDE: "hide" + De, HIDDEN: "hidden" + De, SHOW: "show" + De, SHOWN: "shown" + De, INSERTED: "inserted" + De, CLICK: "click" + De, FOCUSIN: "focusin" + De, FOCUSOUT: "focusout" + De, MOUSEENTER: "mouseenter" + De, MOUSELEAVE: "mouseleave" + De }, xe = "fade", Fe = "show", Ue = ".tooltip-inner", We = ".arrow", qe = "hover", Me = "focus", Ke = "click", Qe = "manual", Be = function () { function i(t, e) { if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)"); this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var t = i.prototype; return t.enable = function () { this._isEnabled = !0 }, t.disable = function () { this._isEnabled = !1 }, t.toggleEnabled = function () { this._isEnabled = !this._isEnabled }, t.toggle = function (t) { if (this._isEnabled) if (t) { var e = this.constructor.DATA_KEY, n = g(t.currentTarget).data(e); n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this); this._enter(null, this) } }, t.dispose = function () { clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function () { var e = this; if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements"); var t = g.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { g(this.element).trigger(t); var n = _.findShadowRoot(this.element), i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element); if (t.isDefaultPrevented() || !i) return; var o = this.getTipElement(), r = _.getUID(this.constructor.NAME); o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe); var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement, a = this._getAttachment(s); this.addAttachmentClass(a); var l = this._getContainer(); g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, { placement: a, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: We }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function (t) { return e._handlePopperPlacementChange(t) } }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop); var c = function () { e.config.animation && e._fixTransition(); var t = e._hoverState; e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e) }; if (g(this.tip).hasClass(xe)) { var h = _.getTransitionDurationFromElement(this.tip); g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h) } else c() } }, t.hide = function (t) { var e = this, n = this.getTipElement(), i = g.Event(this.constructor.Event.HIDE), o = function () { e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() }; if (g(this.element).trigger(i), !i.isDefaultPrevented()) { if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) { var r = _.getTransitionDurationFromElement(n); g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r) } else o(); this._hoverState = "" } }, t.update = function () { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function () { return Boolean(this.getTitle()) }, t.addAttachmentClass = function (t) { g(this.getTipElement()).addClass(Ae + "-" + t) }, t.getTipElement = function () { return this.tip = this.tip || g(this.config.template)[0], this.tip }, t.setContent = function () { var t = this.getTipElement(); this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe) }, t.setElementContent = function (t, e) { "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text()) }, t.getTitle = function () { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getOffset = function () { var e = this, t = {}; return "function" == typeof this.config.offset ? t.fn = function (t) { return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t } : t.offset = this.config.offset, t }, t._getContainer = function () { return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container) }, t._getAttachment = function (t) { return Pe[t.toUpperCase()] }, t._setListeners = function () { var i = this; this.config.trigger.split(" ").forEach(function (t) { if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) { return i.toggle(t) }); else if (t !== Qe) { var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT; g(i.element).on(e, i.config.selector, function (t) { return i._enter(t) }).on(n, i.config.selector, function (t) { return i._leave(t) }) } }), g(this.element).closest(".modal").on("hide.bs.modal", function () { i.element && i.hide() }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, t._fixTitle = function () { var t = typeof this.element.getAttribute("data-original-title"); (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, t._enter = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () { e._hoverState === je && e.show() }, e.config.delay.show) : e.show()) }, t._leave = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () { e._hoverState === He && e.hide() }, e.config.delay.hide) : e.hide()) }, t._isWithActiveTrigger = function () { for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1 }, t._getConfig = function (t) { var e = g(this.element).data(); return Object.keys(e).forEach(function (t) { -1 !== Oe.indexOf(t) && delete e[t] }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t }, t._getDelegateConfig = function () { var t = {}; if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, t._cleanTipClass = function () { var t = g(this.getTipElement()), e = t.attr("class").match(Ne); null !== e && e.length && t.removeClass(e.join("")) }, t._handlePopperPlacementChange = function (t) { var e = t.instance; this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function () { var t = this.getTipElement(), e = this.config.animation; null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this).data(Ie), e = "object" == typeof n && n; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return Le } }, { key: "NAME", get: function () { return be } }, { key: "DATA_KEY", get: function () { return Ie } }, { key: "Event", get: function () { return Re } }, { key: "EVENT_KEY", get: function () { return De } }, { key: "DefaultType", get: function () { return ke } }]), i }(); g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () { return g.fn[be] = we, Be._jQueryInterface }; var Ve = "popover", Ye = "bs.popover", ze = "." + Ye, Xe = g.fn[Ve], $e = "bs-popover", Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"), Je = l({}, Be.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Ze = l({}, Be.DefaultType, { content: "(string|element|function)" }), tn = "fade", en = "show", nn = ".popover-header", on = ".popover-body", rn = { HIDE: "hide" + ze, HIDDEN: "hidden" + ze, SHOW: "show" + ze, SHOWN: "shown" + ze, INSERTED: "inserted" + ze, CLICK: "click" + ze, FOCUSIN: "focusin" + ze, FOCUSOUT: "focusout" + ze, MOUSEENTER: "mouseenter" + ze, MOUSELEAVE: "mouseleave" + ze }, sn = function (t) { var e, n; function i() { return t.apply(this, arguments) || this } n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n; var o = i.prototype; return o.isWithContent = function () { return this.getTitle() || this._getContent() }, o.addAttachmentClass = function (t) { g(this.getTipElement()).addClass($e + "-" + t) }, o.getTipElement = function () { return this.tip = this.tip || g(this.config.template)[0], this.tip }, o.setContent = function () { var t = g(this.getTipElement()); this.setElementContent(t.find(nn), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en) }, o._getContent = function () { return this.element.getAttribute("data-content") || this.config.content }, o._cleanTipClass = function () { var t = g(this.getTipElement()), e = t.attr("class").match(Ge); null !== e && 0 < e.length && t.removeClass(e.join("")) }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this).data(Ye), e = "object" == typeof n ? n : null; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return Je } }, { key: "NAME", get: function () { return Ve } }, { key: "DATA_KEY", get: function () { return Ye } }, { key: "Event", get: function () { return rn } }, { key: "EVENT_KEY", get: function () { return ze } }, { key: "DefaultType", get: function () { return Ze } }]), i }(Be); g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () { return g.fn[Ve] = Xe, sn._jQueryInterface }; var an = "scrollspy", ln = "bs.scrollspy", cn = "." + ln, hn = g.fn[an], un = { offset: 10, method: "auto", target: "" }, fn = { offset: "number", method: "string", target: "(string|element)" }, dn = { ACTIVATE: "activate" + cn, SCROLL: "scroll" + cn, LOAD_DATA_API: "load" + cn + ".data-api" }, gn = "dropdown-item", _n = "active", mn = '[data-spy="scroll"]', pn = ".nav, .list-group", vn = ".nav-link", yn = ".nav-item", En = ".list-group-item", Cn = ".dropdown", Tn = ".dropdown-item", Sn = ".dropdown-toggle", bn = "offset", In = "position", Dn = function () { function n(t, e) { var n = this; this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) { return n._process(t) }), this.refresh(), this._process() } var t = n.prototype; return t.refresh = function () { var e = this, t = this._scrollElement === this._scrollElement.window ? bn : In, o = "auto" === this._config.method ? t : this._config.method, r = o === In ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) { var e, n = _.getSelectorFromElement(t); if (n && (e = document.querySelector(n)), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [g(e)[o]().top + r, n] } return null }).filter(function (t) { return t }).sort(function (t, e) { return t[0] - e[0] }).forEach(function (t) { e._offsets.push(t[0]), e._targets.push(t[1]) }) }, t.dispose = function () { g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function (t) { if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) { var e = g(t.target).attr("id"); e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e } return _.typeCheckConfig(an, t, fn), t }, t._getScrollTop = function () { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function () { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function () { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function () { var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), n <= t) { var i = this._targets[this._targets.length - 1]; this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } } }, t._activate = function (e) { this._activeTarget = e, this._clear(); var t = this._selector.split(",").map(function (t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }), n = g([].slice.call(document.querySelectorAll(t.join(",")))); n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, { relatedTarget: e }) }, t._clear = function () { [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) { return t.classList.contains(_n) }).forEach(function (t) { return t.classList.remove(_n) }) }, n._jQueryInterface = function (e) { return this.each(function () { var t = g(this).data(ln); if (t || (t = new n(this, "object" == typeof e && e), g(this).data(ln, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, s(n, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return un } }]), n }(); g(window).on(dn.LOAD_DATA_API, function () { for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) { var n = g(t[e]); Dn._jQueryInterface.call(n, n.data()) } }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () { return g.fn[an] = hn, Dn._jQueryInterface }; var wn = "bs.tab", An = "." + wn, Nn = g.fn.tab, On = { HIDE: "hide" + An, HIDDEN: "hidden" + An, SHOW: "show" + An, SHOWN: "shown" + An, CLICK_DATA_API: "click" + An + ".data-api" }, kn = "dropdown-menu", Pn = "active", Ln = "disabled", jn = "fade", Hn = "show", Rn = ".dropdown", xn = ".nav, .list-group", Fn = ".active", Un = "> li > .active", Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', qn = ".dropdown-toggle", Mn = "> .dropdown-menu .active", Kn = function () { function i(t) { this._element = t } var t = i.prototype; return t.show = function () { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) { var t, i, e = g(this._element).closest(xn)[0], o = _.getSelectorFromElement(this._element); if (e) { var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn; i = (i = g.makeArray(g(e).find(r)))[i.length - 1] } var s = g.Event(On.HIDE, { relatedTarget: this._element }), a = g.Event(On.SHOW, { relatedTarget: i }); if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) { o && (t = document.querySelector(o)), this._activate(this._element, e); var l = function () { var t = g.Event(On.HIDDEN, { relatedTarget: n._element }), e = g.Event(On.SHOWN, { relatedTarget: i }); g(i).trigger(t), g(n._element).trigger(e) }; t ? this._activate(t, t.parentNode, l) : l() } } }, t.dispose = function () { g.removeData(this._element, wn), this._element = null }, t._activate = function (t, e, n) { var i = this, o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0], r = n && o && g(o).hasClass(jn), s = function () { return i._transitionComplete(t, o, n) }; if (o && r) { var a = _.getTransitionDurationFromElement(o); g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a) } else s() }, t._transitionComplete = function (t, e, n) { if (e) { g(e).removeClass(Pn); var i = g(e.parentNode).find(Mn)[0]; i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) { var o = g(t).closest(Rn)[0]; if (o) { var r = [].slice.call(o.querySelectorAll(qn)); g(r).addClass(Pn) } t.setAttribute("aria-expanded", !0) } n && n() }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this), e = t.data(wn); if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"'); e[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }]), i }(); g(document).on(On.CLICK_DATA_API, Wn, function (t) { t.preventDefault(), Kn._jQueryInterface.call(g(this), "show") }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () { return g.fn.tab = Nn, Kn._jQueryInterface }; var Qn = "toast", Bn = "bs.toast", Vn = "." + Bn, Yn = g.fn[Qn], zn = { CLICK_DISMISS: "click.dismiss" + Vn, HIDE: "hide" + Vn, HIDDEN: "hidden" + Vn, SHOW: "show" + Vn, SHOWN: "shown" + Vn }, Xn = "fade", $n = "hide", Gn = "show", Jn = "showing", Zn = { animation: "boolean", autohide: "boolean", delay: "number" }, ti = { animation: !0, autohide: !0, delay: 500 }, ei = '[data-dismiss="toast"]', ni = function () { function i(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() } var t = i.prototype; return t.show = function () { var t = this; g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn); var e = function () { t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide() }; if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) { var n = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n) } else e() }, t.hide = function (t) { var e = this; this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () { e._close() }, this._config.delay)) }, t.dispose = function () { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null }, t._getConfig = function (t) { return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t }, t._setListeners = function () { var t = this; g(this._element).on(zn.CLICK_DISMISS, ei, function () { return t.hide(!0) }) }, t._close = function () { var t = this, e = function () { t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN) }; if (this._element.classList.remove(Gn), this._config.animation) { var n = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n) } else e() }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this), e = t.data(Bn); if (e || (e = new i(this, "object" == typeof n && n), t.data(Bn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"'); e[n](this) } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "DefaultType", get: function () { return Zn } }, { key: "Default", get: function () { return ti } }]), i }(); g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () { return g.fn[Qn] = Yn, ni._jQueryInterface }, function () { if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = g.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", { value: !0 }) });
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function (a) { var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) { b.ev.on(o + a + p, c) }, x = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }, z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn }, A = function () { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) }, B = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;)if (b.pop() + "Transition" in a) return !0; return !1 }; t.prototype = { constructor: t, init: function () { var c = navigator.appVersion; b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function (c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++)if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function () { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize(); o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function () { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function () { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" }; b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function (a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function () { var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1; y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function (a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function (c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++)if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function (a, c) { var d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); var e = "click.magnificPopup"; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function (c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function (a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d }; y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function (c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function (a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function () { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function (c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) }) }, _getScrollbarSize: function () { if (void 0 === b.scrollbarSize) { var a = document.createElement("div"); a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) { A(); var d = a(this); if ("string" == typeof c) if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline", G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { b.types.push(F), w(h + "." + F, function () { G() }) }, getInline: function (c, d) { if (G(), c.src) { var e = b.st.inline, f = a(c.src); if (f.length) { var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax", J = function () { H && a(document.body).removeClass(H) }, K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function (c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function (d, e, f) { var g = { data: d, xhr: f }; y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function () { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function (c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" }; a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var c = b.st.image, d = ".image"; b.types.push("image"), w(m + d, function () { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function () { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function () { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0; b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function (a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function (a) { var c = 0, d = a.img[0], e = function (f) { L && clearInterval(L), L = setInterval(function () { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) }; e(1) }, getImage: function (c, d) { var e = 0, f = function () { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) }, g = function () { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }, h = b.st.image, i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img"); j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function () { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a, c = b.st.zoom, d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration, j = function (a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b }, k = function () { b.content.css("visibility", "visible") }; w("BuildControls" + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () { f.css(b._getOffset(!0)), e = setTimeout(function () { k(), setTimeout(function () { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return; f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () { f.css(b._getOffset()) }, 16) } }), w(h + d, function () { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function () { return "image" === b.currItem.type }, _getItemToZoom: function () { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function (c) { var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10); e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe", Q = "//about:blank", R = function (a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe"); c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } }; a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "http://www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { b.types.push(P), w("BeforeChange", function (a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function () { R() }) }, getIframe: function (c, d) { var e = c.src, f = b.st.iframe; a.each(f.patterns, function () { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function (a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a }, T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var c = b.st.gallery, e = ".mfp-gallery"; return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function (a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function (a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function (a, d, e, f) { var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function () { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s); e.click(function () { b.prev() }), f.click(function () { b.next() }), b.container.append(e.add(f)) } }), w(n + e, function () { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function () { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function () { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function () { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function (a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function () { var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d); a++)b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e); a++)b._preloadItem(b.index - a) }, _preloadItem: function (c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () { d.hasSize = !0 }).on("error.mfploader", function () { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina"; a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) { return a.src.replace(/\.\w+$/, function (a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function (b, d) { d.src = a.replaceSrc(d, c) })) } } } }), A() });
(function () { var t = [].indexOf || function (t) { for (var e = 0, n = this.length; e < n; e++) { if (e in this && this[e] === t) return e } return -1 }, e = [].slice; (function (t, e) { if (typeof define === "function" && define.amd) { return define("waypoints", ["jquery"], function (n) { return e(n, t) }) } else { return e(t.jQuery, t) } })(this, function (n, r) { var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m; i = n(r); c = t.call(r, "ontouchstart") >= 0; s = { horizontal: {}, vertical: {} }; f = 1; a = {}; u = "waypoints-context-id"; p = "resize.waypoints"; y = "scroll.waypoints"; v = 1; w = "waypoints-waypoint-ids"; g = "waypoint"; m = "waypoints"; o = function () { function t(t) { var e = this; this.$element = t; this.element = t[0]; this.didResize = false; this.didScroll = false; this.id = "context" + f++; this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() }; this.waypoints = { horizontal: {}, vertical: {} }; t.data(u, this.id); a[this.id] = this; t.bind(y, function () { var t; if (!(e.didScroll || c)) { e.didScroll = true; t = function () { e.doScroll(); return e.didScroll = false }; return r.setTimeout(t, n[m].settings.scrollThrottle) } }); t.bind(p, function () { var t; if (!e.didResize) { e.didResize = true; t = function () { n[m]("refresh"); return e.didResize = false }; return r.setTimeout(t, n[m].settings.resizeThrottle) } }) } t.prototype.doScroll = function () { var t, e = this; t = { horizontal: { newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } }; if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) { n[m]("refresh") } n.each(t, function (t, r) { var i, o, l; l = []; o = r.newScroll > r.oldScroll; i = o ? r.forward : r.backward; n.each(e.waypoints[t], function (t, e) { var n, i; if (r.oldScroll < (n = e.offset) && n <= r.newScroll) { return l.push(e) } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) { return l.push(e) } }); l.sort(function (t, e) { return t.offset - e.offset }); if (!o) { l.reverse() } return n.each(l, function (t, e) { if (e.options.continuous || t === l.length - 1) { return e.trigger([i]) } }) }); return this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll } }; t.prototype.refresh = function () { var t, e, r, i = this; r = n.isWindow(this.element); e = this.$element.offset(); this.doScroll(); t = { horizontal: { contextOffset: r ? 0 : e.left, contextScroll: r ? 0 : this.oldScroll.x, contextDimension: this.$element.width(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: r ? 0 : e.top, contextScroll: r ? 0 : this.oldScroll.y, contextDimension: r ? n[m]("viewportHeight") : this.$element.height(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }; return n.each(t, function (t, e) { return n.each(i.waypoints[t], function (t, r) { var i, o, l, s, f; i = r.options.offset; l = r.offset; o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp]; if (n.isFunction(i)) { i = i.apply(r.element) } else if (typeof i === "string") { i = parseFloat(i); if (r.options.offset.indexOf("%") > -1) { i = Math.ceil(e.contextDimension * i / 100) } } r.offset = o - e.contextOffset + e.contextScroll - i; if (r.options.onlyOnScroll && l != null || !r.enabled) { return } if (l !== null && l < (s = e.oldScroll) && s <= r.offset) { return r.trigger([e.backward]) } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) { return r.trigger([e.forward]) } else if (l === null && e.oldScroll >= r.offset) { return r.trigger([e.forward]) } }) }) }; t.prototype.checkEmpty = function () { if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) { this.$element.unbind([p, y].join(" ")); return delete a[this.id] } }; return t }(); l = function () { function t(t, e, r) { var i, o; r = n.extend({}, n.fn[g].defaults, r); if (r.offset === "bottom-in-view") { r.offset = function () { var t; t = n[m]("viewportHeight"); if (!n.isWindow(e.element)) { t = e.$element.height() } return t - n(this).outerHeight() } } this.$element = t; this.element = t[0]; this.axis = r.horizontal ? "horizontal" : "vertical"; this.callback = r.handler; this.context = e; this.enabled = r.enabled; this.id = "waypoints" + v++; this.offset = null; this.options = r; e.waypoints[this.axis][this.id] = this; s[this.axis][this.id] = this; i = (o = t.data(w)) != null ? o : []; i.push(this.id); t.data(w, i) } t.prototype.trigger = function (t) { if (!this.enabled) { return } if (this.callback != null) { this.callback.apply(this.element, t) } if (this.options.triggerOnce) { return this.destroy() } }; t.prototype.disable = function () { return this.enabled = false }; t.prototype.enable = function () { this.context.refresh(); return this.enabled = true }; t.prototype.destroy = function () { delete s[this.axis][this.id]; delete this.context.waypoints[this.axis][this.id]; return this.context.checkEmpty() }; t.getWaypointsByElement = function (t) { var e, r; r = n(t).data(w); if (!r) { return [] } e = n.extend({}, s.horizontal, s.vertical); return n.map(r, function (t) { return e[t] }) }; return t }(); d = { init: function (t, e) { var r; if (e == null) { e = {} } if ((r = e.handler) == null) { e.handler = t } this.each(function () { var t, r, i, s; t = n(this); i = (s = e.context) != null ? s : n.fn[g].defaults.context; if (!n.isWindow(i)) { i = t.closest(i) } i = n(i); r = a[i.data(u)]; if (!r) { r = new o(i) } return new l(t, r, e) }); n[m]("refresh"); return this }, disable: function () { return d._invoke(this, "disable") }, enable: function () { return d._invoke(this, "enable") }, destroy: function () { return d._invoke(this, "destroy") }, prev: function (t, e) { return d._traverse.call(this, t, e, function (t, e, n) { if (e > 0) { return t.push(n[e - 1]) } }) }, next: function (t, e) { return d._traverse.call(this, t, e, function (t, e, n) { if (e < n.length - 1) { return t.push(n[e + 1]) } }) }, _traverse: function (t, e, i) { var o, l; if (t == null) { t = "vertical" } if (e == null) { e = r } l = h.aggregate(e); o = []; this.each(function () { var e; e = n.inArray(this, l[t]); return i(o, e, l[t]) }); return this.pushStack(o) }, _invoke: function (t, e) { t.each(function () { var t; t = l.getWaypointsByElement(this); return n.each(t, function (t, n) { n[e](); return true }) }); return this } }; n.fn[g] = function () { var t, r; r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : []; if (d[r]) { return d[r].apply(this, t) } else if (n.isFunction(r)) { return d.init.apply(this, arguments) } else if (n.isPlainObject(r)) { return d.init.apply(this, [null, r]) } else if (!r) { return n.error("jQuery Waypoints needs a callback function or handler option.") } else { return n.error("The " + r + " method does not exist in jQuery Waypoints.") } }; n.fn[g].defaults = { context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false }; h = { refresh: function () { return n.each(a, function (t, e) { return e.refresh() }) }, viewportHeight: function () { var t; return (t = r.innerHeight) != null ? t : i.height() }, aggregate: function (t) { var e, r, i; e = s; if (t) { e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0 } if (!e) { return [] } r = { horizontal: [], vertical: [] }; n.each(r, function (t, i) { n.each(e[t], function (t, e) { return i.push(e) }); i.sort(function (t, e) { return t.offset - e.offset }); r[t] = n.map(i, function (t) { return t.element }); return r[t] = n.unique(r[t]) }); return r }, above: function (t) { if (t == null) { t = r } return h._filter(t, "vertical", function (t, e) { return e.offset <= t.oldScroll.y }) }, below: function (t) { if (t == null) { t = r } return h._filter(t, "vertical", function (t, e) { return e.offset > t.oldScroll.y }) }, left: function (t) { if (t == null) { t = r } return h._filter(t, "horizontal", function (t, e) { return e.offset <= t.oldScroll.x }) }, right: function (t) { if (t == null) { t = r } return h._filter(t, "horizontal", function (t, e) { return e.offset > t.oldScroll.x }) }, enable: function () { return h._invoke("enable") }, disable: function () { return h._invoke("disable") }, destroy: function () { return h._invoke("destroy") }, extendFn: function (t, e) { return d[t] = e }, _invoke: function (t) { var e; e = n.extend({}, s.vertical, s.horizontal); return n.each(e, function (e, n) { n[t](); return true }) }, _filter: function (t, e, r) { var i, o; i = a[n(t).data(u)]; if (!i) { return [] } o = []; n.each(i.waypoints[e], function (t, e) { if (r(i, e)) { return o.push(e) } }); o.sort(function (t, e) { return t.offset - e.offset }); return n.map(o, function (t) { return t.element }) } }; n[m] = function () { var t, n; n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : []; if (h[n]) { return h[n].apply(null, t) } else { return h.aggregate.call(null, n) } }; n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 }; return i.load(function () { return n[m]("refresh") }) }) }).call(this);
$(window).load(function () { // makes sure the whole site is loaded
    $('#loader').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({ 'overflow': 'visible' });
})
    (function ($) {
        'use strict';
        var headerHeight = $(".header_wrap").height() - 10;
        $('a.page-scroll').on('click', function (event) {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash),
                    speed = $(this).data("speed") || 800;
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - headerHeight
                    }, speed);
                }
            }
        });
        $(window).on("load resize ready", function () {
            $(".header_wrap.fixed-top").css({
                "padding-top": $(".alertbox").height()
            });
        })
        $('.alertbox .close').on("click", function () {
            $(".header_wrap ").css({
                "padding-top": "0"
            });
        })
        $(function () {
            if ($('.header_wrap').hasClass('fixed-top')) {
                $('.alertbox').addClass('alert_fixed');
            }
        });
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 80) {
                $('header').addClass('nav-fixed');
                $('.alert_fixed').addClass('fixed');
            } else {
                $('header').removeClass('nav-fixed');
                $('.alert_fixed').removeClass('fixed');;
            }
        });
        $(document).ready(function () {
            $('.dropdown-menu a.dropdown-toggler').on('click', function (e) {
                var $el = $(this);
                var $parent = $(this).offsetParent(".dropdown-menu");
                if (!$(this).next().hasClass('show')) {
                    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                }
                var $subMenu = $(this).next(".dropdown-menu");
                $subMenu.toggleClass('show');
                $(this).parent("li").toggleClass('show');
                $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                    $('.dropdown-menu .show').removeClass("show");
                });
                return false;
            });
        });
        var navBar = $(".header_wrap");
        var navbarLinks = navBar.find(".navbar-collapse ul li a.page-scroll");
        $.each(navbarLinks, function (i, val) {
            var navbarLink = $(this);
            navbarLink.on('click', function () {
                navBar.find(".navbar-collapse").collapse('hide');
                $("header").removeClass("active");
            });
        });
        $('.navbar-toggler').on('click', function () {
            $("header").toggleClass("active");
        });
        $(window).on("load resize ready", function () {
            function getClass(element, startsWith) {
                var result = undefined;
                $(element.attr('class').split(' ')).each(function () {
                    if (this.indexOf(startsWith) > -1) result = this;
                });
                return result;
            }
            $('.header_wrap').each(function () {
                var className = getClass($(this), 'bg_') || getClass($(this), 'bg-');
                if ($('.header_wrap').hasClass(className)) {
                    Array.prototype.forEach.call(document.querySelectorAll(".dropdown-menu"), function (el) {
                        el.classList.add(className);
                    });
                }
                if ($(window).width() <= 992) {
                    $('.navbar-nav').addClass(className);
                }
            });
        });
        $(".search_trigger").on("click", function () {
            $(".search-overlay").toggleClass('open');
            $(".search_trigger").toggleClass('open');
        });
       /* $(window).on("load", function () {
            $('.carousel_slide1').each(function () {
                var $carousel = $(this);
                $carousel.owlCarousel({
                    dots: $carousel.data("dots"),
                    loop: $carousel.data("loop"),
                    margin: $carousel.data("margin"),
                    items: 1,
                    autoHeight: $carousel.data("autoheight"),
                    nav: $carousel.data("nav"),
                    navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
                    autoplay: $carousel.data("autoplay"),
                    animateIn: $carousel.data("animate-in"),
                    animateOut: $carousel.data("animate-out"),
                    autoplayTimeout: $carousel.data("autoplay-timeout"),
                });
            });
            $('.carousel_slide2').each(function () {
                var $carousel = $(this);
                $carousel.owlCarousel({
                    loop: $carousel.data("loop"),
                    margin: $carousel.data("margin"),
                    dots: $carousel.data("dots"),
                    autoHeight: true,
                    center: $carousel.data("center"),
                    rewind: $carousel.data("rewind"),
                    autoplay: $carousel.data("autoplay"),
                    nav: $carousel.data("nav"),
                    navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
                    autoplayTimeout: $carousel.data("autoplay-timeout"),
                    responsive: {
                        0: {
                            items: 1,
                        },
                        380: {
                            items: 1,
                        },
                        576: {
                            items: 2,
                        },
                        1000: {
                            items: 2,
                        },
                        1199: {
                            items: 2
                        }
                    }
                });
            });
            $('.carousel_slide3').each(function () {
                var $carousel = $(this);
                $carousel.owlCarousel({
                    loop: $carousel.data("loop"),
                    margin: $carousel.data("margin"),
                    dots: $carousel.data("dots"),
                    autoHeight: true,
                    center: $carousel.data("center"),
                    rewind: $carousel.data("rewind"),
                    autoplay: $carousel.data("autoplay"),
                    nav: $carousel.data("nav"),
                    navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
                    autoplayTimeout: $carousel.data("autoplay-timeout"),
                    responsive: {
                        0: {
                            items: 1,
                        },
                        380: {
                            items: 1,
                        },
                        576: {
                            items: 2,
                        },
                        1000: {
                            items: 3,
                        },
                        1199: {
                            items: 3
                        }
                    }
                });
            });
            $('.carousel_slide4').each(function () {
                var $carousel = $(this);
                $carousel.owlCarousel({
                    dots: $carousel.data("dots"),
                    loop: $carousel.data("loop"),
                    margin: $carousel.data("margin"),
                    autoHeight: true,
                    center: $carousel.data("center"),
                    rewind: $carousel.data("rewind"),
                    autoplay: $carousel.data("autoplay"),
                    nav: $carousel.data("nav"),
                    navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
                    autoplayTimeout: $carousel.data("autoplay-timeout"),
                    responsive: {
                        0: {
                            items: 1,
                        },
                        380: {
                            items: 1,
                        },
                        576: {
                            items: 2,
                        },
                        1000: {
                            items: 3,
                        },
                        1199: {
                            items: 4

                        }
                    }
                });
            });
            $('.carousel_slide5').each(function () {
                var $carousel = $(this);
                $carousel.owlCarousel({
                    dots: $carousel.data("dots"),
                    loop: $carousel.data("loop"),
                    margin: $carousel.data("margin"),
                    autoHeight: true,
                    center: $carousel.data("center"),
                    rewind: $carousel.data("rewind"),
                    autoplay: $carousel.data("autoplay"),
                    nav: $carousel.data("nav"),
                    navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
                    autoplayTimeout: $carousel.data("autoplay-timeout"),
                    responsive: {
                        0: {
                            items: 1,
                        },
                        380: {
                            items: 2,
                        },
                        576: {
                            items: 3,
                        },
                        1000: {
                            items: 4,
                        },
                        1199: {
                            items: 5
                        }
                    }
                });
            });
            $('.cl_logo_slider').each(function () {
                var $carousel = $(this);
                $carousel.owlCarousel({
                    dots: $carousel.data("dots"),
                    loop: $carousel.data("loop"),
                    margin: $carousel.data("margin"),
                    autoHeight: true,
                    rewind: $carousel.data("rewind"),
                    autoplay: $carousel.data("autoplay"),
                    nav: $carousel.data("nav"),
                    navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
                    autoplayTimeout: $carousel.data("autoplay-timeout"),
                    responsive: {
                        0: {
                            items: 2,
                        },
                        380: {
                            items: 3,
                        },
                        600: {
                            items: 4,
                        },
                        1000: {
                            items: 5,
                        },
                        1199: {
                            items: 6
                        }
                    }
                });
            });
            $('.cl_logo_slider5').each(function () {
                var $carousel = $(this);
                $carousel.owlCarousel({
                    dots: $carousel.data("dots"),
                    loop: $carousel.data("loop"),
                    margin: $carousel.data("margin"),
                    autoHeight: true,
                    rewind: $carousel.data("rewind"),
                    autoplay: $carousel.data("autoplay"),
                    nav: $carousel.data("nav"),
                    navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
                    autoplayTimeout: $carousel.data("autoplay-timeout"),
                    responsive: {
                        0: {
                            items: 2,
                        },
                        380: {
                            items: 2,
                        },
                        600: {
                            items: 3,
                        },
                        1000: {
                            items: 4,
                        },
                        1199: {
                            items: 5
                        }
                    }
                });
            });
        });*/
        var $grid_selectors = $(".grid_container");
        var filter_selectors = ".grid_filter > li > a";
        if ($grid_selectors.length > 0) {
            $grid_selectors.imagesLoaded(function () {
                if ($grid_selectors.hasClass("masonry")) {
                    $grid_selectors.isotope({
                        itemSelector: '.grid_item',
                        layoutMode: "masonry",
                        masonry: {
                            columnWidth: '.grid-sizer'
                        },
                        filter: "*"
                    });
                } else {
                    $grid_selectors.isotope({
                        itemSelector: '.grid_item',
                        layoutMode: "fitRows",
                        filter: "*"
                    });
                }
            });
        }
        $(document).on("click", filter_selectors, function () {
            $(filter_selectors).removeClass("current");
            $(this).addClass("current");
            var dfselector = $(this).data('filter');
            if ($grid_selectors.hasClass("masonry")) {
                $grid_selectors.isotope({
                    itemSelector: '.grid_item',
                    layoutMode: "masonry",
                    masonry: {
                        columnWidth: '.grid_item'
                    },
                    filter: dfselector
                });
            } else {
                $grid_selectors.isotope({
                    itemSelector: '.grid_item',
                    layoutMode: "fitRows",
                    filter: dfselector
                });
            }
            return false;
        });
        $(window).resize(function () {
            $grid_selectors.ready(function () {
                setTimeout(function () {
                    $grid_selectors.find('.grid_item').removeClass('animation').removeClass('animated');
                    $grid_selectors.isotope('layout');
                }, 300);
            });
        });
        $('.grid_item .image_popup').on('click', function () {
            $(this).find('.link_container').magnificPopup('open');
        });
        $('.link_container').each(function () {
            $(this).magnificPopup({
                delegate: '.image_popup',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
        $('.countdown_time').each(function () {
            var endTime = $(this).data('time');
            $(this).countdown(endTime, function (tm) {
                $(this).html(tm.strftime('<span class="countdown_box"><span class="countdown days">%D </span><span class="cd_text">Days</span></span><span class="countdown_box"><span class="countdown hours">%H</span><span class="cd_text">Hours</span></span><span class="countdown_box"><span class="countdown minutes">%M</span><span class="cd_text">Minutes</span></span><span class="countdown_box"><span class="countdown seconds">%S</span><span class="cd_text">Seconds</span></span>'));
            });
        });
        $("#submitButton").on("click", function (event) {
            event.preventDefault();
            var mydata = $("form").serialize();
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "contact.php",
                data: mydata,
                success: function (data) {
                    if (data.type === "error") {
                        $("#alert-msg").removeClass("alert-msg-success");
                        $("#alert-msg").addClass("alert-msg-failure");
                    } else {
                        $("#alert-msg").addClass("alert-msg-success");
                        $("#alert-msg").removeClass("alert-msg-failure");
                        $("#first-name").val("Enter Name");
                        $("#email").val("Enter Email");
                        $("#phone").val("Enter Phone Number");
                        $("#subject").val("Enter Subject");
                        $("#description").val("Enter Message");
                    }
                    $("#alert-msg").html(data.msg);
                    $("#alert-msg").show();
                },
                error: function (xhr, textStatus) {
                    alert(textStatus);
                }
            });
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $(".scrollup").on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        $('.content-popup').magnificPopup({
            type: 'inline',
            preloader: true,
            mainClass: 'mfp-zoom'
        });
        $('.image_gallery').each(function () {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    opener: function (element) {
                        return element.find('img');
                    }
                }
            });
        });
        $(document).ready(function () {
            $('.popup-ajax').magnificPopup({
                type: 'ajax',
            });
        });
        $(document).ready(function () {
            $('.video_popup, .iframe_popup').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });
        $(function () {
            function ckScrollInit(items, trigger) {
                items.each(function () {
                    var ckElement = $(this),
                        AnimationClass = ckElement.attr('data-animation'),
                        AnimationDelay = ckElement.attr('data-animation-delay');
                    ckElement.css({
                        '-webkit-animation-delay': AnimationDelay,
                        '-moz-animation-delay': AnimationDelay,
                        'animation-delay': AnimationDelay,
                        opacity: 0
                    });
                    var ckTrigger = (trigger) ? trigger : ckElement;
                    ckTrigger.waypoint(function () {
                        ckElement.addClass("animated").css("opacity", "1");
                        ckElement.addClass('animated').addClass(AnimationClass);
                    }, {
                        triggerOnce: true,
                        offset: '90%',
                    });
                });
            }
            ckScrollInit($('.animation'));
            ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));
        });
        $(".background_bg").each(function () {
            var attr = $(this).attr('data-img-src');
            if (typeof attr !== typeof undefined && attr !== false) {
                $(this).css('background-image', 'url(' + attr + ')');
                $(this).css('background-position', 'center center');
                $(this).css('background-size', 'cover');
            }
        });
        $(document).ready(function () {
            $('.progress .progress-bar').css("width", function () {
                return $(this).attr("aria-valuenow") + "%";
            })
            $('.count_pr').css("left", function () {
                return $(this).attr("data-percent") + "%";
            })
        });
        $('.counter').counterUp({
            time: 1500
        });
        $(window).on('load', function () {
            $('.parallax_bg').parallaxBackground();
        });
        $(document).ready(function () {
            $('.rating span').on('click', function () {
                var onStar = parseFloat($(this).data('value'), 10);
                var stars = $(this).parent().children('.rating span');
                for (var i = 0; i < stars.length; i++) {
                    $(stars[i]).removeClass('selected');
                }
                for (i = 0; i < onStar; i++) {
                    $(stars[i]).addClass('selected');
                }
            });
        });
        $(window).on("load", function () {
            document.onkeydown = function (e) {
                if (e.keyCode == 123) {
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                    return false;
                }
                if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
                    return false;
                }
            }
            $("html").on("contextmenu", function () {
                return false;
            });
        });
    })(jQuery);

function popupinfo() {
    alert("Detail of payment of membership fee-Membership fees can be paid either by net banking transfer (through NEFT) into society’s current account or through BHIM APP. The detail is given below-\n Account Name: Indian Scientific Education and Technology Foundation \n A/c No.: 415501010125187, \n IFSC code: UBIN0541559, \n MICR code: 226026012, \n Bank Name: Union Bank of India, \n Branch: Amethi, Lucknow.\n BHIM APP- 7985077353@upi");
}
jQuery(document).ready(function ($) {
    var bArray = [];
    var sArray = [20, 40, 30, 50];
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
    function randomValue(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    function generateRandomColor() {
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    }

    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

        $('.individual-bubble').animate({
            'background-color': generateRandomColor(),
            'bottom': '100%',
            'opacity': '-=0.2'
        }, 3000, function () {
            $(this).remove()
        });
    }, 350);
});

/*Event header 
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        800: {
            items: 2
        },
        1100: {
            items: 3
        }
    }
})*/