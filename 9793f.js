/*!
 * Highlight.js
 * Version: 9.6.0
 * Website: git.io/hljslicense
 */
!function(e) {
    var n = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}),
    "function" == typeof define && define.amd && define([], function() {
        return n.hljs
    }))
}(function(e) {
    function n(e) {
        return e.replace(/[&<>]/gm, function(e) {
            return I[e]
        })
    }
    function t(e) {
        return e.nodeName.toLowerCase()
    }
    function r(e, n) {
        var t = e && e.exec(n);
        return t && 0 === t.index
    }
    function a(e) {
        return k.test(e)
    }
    function i(e) {
        var n, t, r, i, o = e.className + " ";
        if (o += e.parentNode ? e.parentNode.className : "",
        t = B.exec(o))
            return R(t[1]) ? t[1] : "no-highlight";
        for (o = o.split(/\s+/),
        n = 0,
        r = o.length; r > n; n++)
            if (i = o[n],
            a(i) || R(i))
                return i
    }
    function o(e, n) {
        var t, r = {};
        for (t in e)
            r[t] = e[t];
        if (n)
            for (t in n)
                r[t] = n[t];
        return r
    }
    function u(e) {
        var n = [];
        return function r(e, a) {
            for (var i = e.firstChild; i; i = i.nextSibling)
                3 === i.nodeType ? a += i.nodeValue.length : 1 === i.nodeType && (n.push({
                    event: "start",
                    offset: a,
                    node: i
                }),
                a = r(i, a),
                t(i).match(/br|hr|img|input/) || n.push({
                    event: "stop",
                    offset: a,
                    node: i
                }));
            return a
        }(e, 0),
        n
    }
    function c(e, r, a) {
        function i() {
            return e.length && r.length ? e[0].offset !== r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" === r[0].event ? e : r : e.length ? e : r
        }
        function o(e) {
            function r(e) {
                return " " + e.nodeName + '="' + n(e.value) + '"'
            }
            l += "<" + t(e) + w.map.call(e.attributes, r).join("") + ">"
        }
        function u(e) {
            l += "</" + t(e) + ">"
        }
        function c(e) {
            ("start" === e.event ? o : u)(e.node)
        }
        for (var s = 0, l = "", f = []; e.length || r.length; ) {
            var g = i();
            if (l += n(a.substr(s, g[0].offset - s)),
            s = g[0].offset,
            g === e) {
                f.reverse().forEach(u);
                do
                    c(g.splice(0, 1)[0]),
                    g = i();
                while (g === e && g.length && g[0].offset === s);f.reverse().forEach(o)
            } else
                "start" === g[0].event ? f.push(g[0].node) : f.pop(),
                c(g.splice(0, 1)[0])
        }
        return l + n(a.substr(s))
    }
    function s(e) {
        function n(e) {
            return e && e.source || e
        }
        function t(t, r) {
            return new RegExp(n(t),"m" + (e.cI ? "i" : "") + (r ? "g" : ""))
        }
        function r(a, i) {
            if (!a.compiled) {
                if (a.compiled = !0,
                a.k = a.k || a.bK,
                a.k) {
                    var u = {}
                      , c = function(n, t) {
                        e.cI && (t = t.toLowerCase()),
                        t.split(" ").forEach(function(e) {
                            var t = e.split("|");
                            u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                        })
                    };
                    "string" == typeof a.k ? c("keyword", a.k) : E(a.k).forEach(function(e) {
                        c(e, a.k[e])
                    }),
                    a.k = u
                }
                a.lR = t(a.l || /\w+/, !0),
                i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"),
                a.b || (a.b = /\B|\b/),
                a.bR = t(a.b),
                a.e || a.eW || (a.e = /\B|\b/),
                a.e && (a.eR = t(a.e)),
                a.tE = n(a.e) || "",
                a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)),
                a.i && (a.iR = t(a.i)),
                null == a.r && (a.r = 1),
                a.c || (a.c = []);
                var s = [];
                a.c.forEach(function(e) {
                    e.v ? e.v.forEach(function(n) {
                        s.push(o(e, n))
                    }) : s.push("self" === e ? a : e)
                }),
                a.c = s,
                a.c.forEach(function(e) {
                    r(e, a)
                }),
                a.starts && r(a.starts, i);
                var l = a.c.map(function(e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([a.tE, a.i]).map(n).filter(Boolean);
                a.t = l.length ? t(l.join("|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }
        r(e)
    }
    function l(e, t, a, i) {
        function o(e, n) {
            var t, a;
            for (t = 0,
            a = n.c.length; a > t; t++)
                if (r(n.c[t].bR, e))
                    return n.c[t]
        }
        function u(e, n) {
            if (r(e.eR, n)) {
                for (; e.endsParent && e.parent; )
                    e = e.parent;
                return e
            }
            return e.eW ? u(e.parent, n) : void 0
        }
        function c(e, n) {
            return !a && r(n.iR, e)
        }
        function g(e, n) {
            var t = N.cI ? n[0].toLowerCase() : n[0];
            return e.k.hasOwnProperty(t) && e.k[t]
        }
        function h(e, n, t, r) {
            var a = r ? "" : y.classPrefix
              , i = '<span class="' + a
              , o = t ? "" : C;
            return i += e + '">',
            i + n + o
        }
        function p() {
            var e, t, r, a;
            if (!E.k)
                return n(B);
            for (a = "",
            t = 0,
            E.lR.lastIndex = 0,
            r = E.lR.exec(B); r; )
                a += n(B.substr(t, r.index - t)),
                e = g(E, r),
                e ? (M += e[1],
                a += h(e[0], n(r[0]))) : a += n(r[0]),
                t = E.lR.lastIndex,
                r = E.lR.exec(B);
            return a + n(B.substr(t))
        }
        function d() {
            var e = "string" == typeof E.sL;
            if (e && !x[E.sL])
                return n(B);
            var t = e ? l(E.sL, B, !0, L[E.sL]) : f(B, E.sL.length ? E.sL : void 0);
            return E.r > 0 && (M += t.r),
            e && (L[E.sL] = t.top),
            h(t.language, t.value, !1, !0)
        }
        function b() {
            k += null != E.sL ? d() : p(),
            B = ""
        }
        function v(e) {
            k += e.cN ? h(e.cN, "", !0) : "",
            E = Object.create(e, {
                parent: {
                    value: E
                }
            })
        }
        function m(e, n) {
            if (B += e,
            null == n)
                return b(),
                0;
            var t = o(n, E);
            if (t)
                return t.skip ? B += n : (t.eB && (B += n),
                b(),
                t.rB || t.eB || (B = n)),
                v(t, n),
                t.rB ? 0 : n.length;
            var r = u(E, n);
            if (r) {
                var a = E;
                a.skip ? B += n : (a.rE || a.eE || (B += n),
                b(),
                a.eE && (B = n));
                do
                    E.cN && (k += C),
                    E.skip || (M += E.r),
                    E = E.parent;
                while (E !== r.parent);return r.starts && v(r.starts, ""),
                a.rE ? 0 : n.length
            }
            if (c(n, E))
                throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.cN || "<unnamed>") + '"');
            return B += n,
            n.length || 1
        }
        var N = R(e);
        if (!N)
            throw new Error('Unknown language: "' + e + '"');
        s(N);
        var w, E = i || N, L = {}, k = "";
        for (w = E; w !== N; w = w.parent)
            w.cN && (k = h(w.cN, "", !0) + k);
        var B = ""
          , M = 0;
        try {
            for (var I, j, O = 0; ; ) {
                if (E.t.lastIndex = O,
                I = E.t.exec(t),
                !I)
                    break;
                j = m(t.substr(O, I.index - O), I[0]),
                O = I.index + j
            }
            for (m(t.substr(O)),
            w = E; w.parent; w = w.parent)
                w.cN && (k += C);
            return {
                r: M,
                value: k,
                language: e,
                top: E
            }
        } catch (T) {
            if (T.message && -1 !== T.message.indexOf("Illegal"))
                return {
                    r: 0,
                    value: n(t)
                };
            throw T
        }
    }
    function f(e, t) {
        t = t || y.languages || E(x);
        var r = {
            r: 0,
            value: n(e)
        }
          , a = r;
        return t.filter(R).forEach(function(n) {
            var t = l(n, e, !1);
            t.language = n,
            t.r > a.r && (a = t),
            t.r > r.r && (a = r,
            r = t)
        }),
        a.language && (r.second_best = a),
        r
    }
    function g(e) {
        return y.tabReplace || y.useBR ? e.replace(M, function(e, n) {
            return y.useBR && "\n" === e ? "<br>" : y.tabReplace ? n.replace(/\t/g, y.tabReplace) : void 0
        }) : e
    }
    function h(e, n, t) {
        var r = n ? L[n] : t
          , a = [e.trim()];
        return e.match(/\bhljs\b/) || a.push("hljs"),
        -1 === e.indexOf(r) && a.push(r),
        a.join(" ").trim()
    }
    function p(e) {
        var n, t, r, o, s, p = i(e);
        a(p) || (y.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
        n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e,
        s = n.textContent,
        r = p ? l(p, s, !0) : f(s),
        t = u(n),
        t.length && (o = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
        o.innerHTML = r.value,
        r.value = c(t, u(o), s)),
        r.value = g(r.value),
        e.innerHTML = r.value,
        e.className = h(e.className, p, r.language),
        e.result = {
            language: r.language,
            re: r.r
        },
        r.second_best && (e.second_best = {
            language: r.second_best.language,
            re: r.second_best.r
        }))
    }
    function d(e) {
        y = o(y, e)
    }
    function b() {
        if (!b.called) {
            b.called = !0;
            var e = document.querySelectorAll("pre code");
            w.forEach.call(e, p)
        }
    }
    function v() {
        addEventListener("DOMContentLoaded", b, !1),
        addEventListener("load", b, !1)
    }
    function m(n, t) {
        var r = x[n] = t(e);
        r.aliases && r.aliases.forEach(function(e) {
            L[e] = n
        })
    }
    function N() {
        return E(x)
    }
    function R(e) {
        return e = (e || "").toLowerCase(),
        x[e] || x[L[e]]
    }
    var w = []
      , E = Object.keys
      , x = {}
      , L = {}
      , k = /^(no-?highlight|plain|text)$/i
      , B = /\blang(?:uage)?-([\w-]+)\b/i
      , M = /((^(<[^>]+>|\t|)+|(?:\n)))/gm
      , C = "</span>"
      , y = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
    }
      , I = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    };
    return e.highlight = l,
    e.highlightAuto = f,
    e.fixMarkup = g,
    e.highlightBlock = p,
    e.configure = d,
    e.initHighlighting = b,
    e.initHighlightingOnLoad = v,
    e.registerLanguage = m,
    e.listLanguages = N,
    e.getLanguage = R,
    e.inherit = o,
    e.IR = "[a-zA-Z]\\w*",
    e.UIR = "[a-zA-Z_]\\w*",
    e.NR = "\\b\\d+(\\.\\d+)?",
    e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    e.BNR = "\\b(0b[01]+)",
    e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    },
    e.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [e.BE]
    },
    e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    },
    e.PWM = {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
    },
    e.C = function(n, t, r) {
        var a = e.inherit({
            cN: "comment",
            b: n,
            e: t,
            c: []
        }, r || {});
        return a.c.push(e.PWM),
        a.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            r: 0
        }),
        a
    }
    ,
    e.CLCM = e.C("//", "$"),
    e.CBCM = e.C("/\\*", "\\*/"),
    e.HCM = e.C("#", "$"),
    e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    },
    e.CNM = {
        cN: "number",
        b: e.CNR,
        r: 0
    },
    e.BNM = {
        cN: "number",
        b: e.BNR,
        r: 0
    },
    e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    },
    e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [e.BE]
        }]
    },
    e.TM = {
        cN: "title",
        b: e.IR,
        r: 0
    },
    e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    },
    e.METHOD_GUARD = {
        b: "\\.\\s*" + e.UIR,
        r: 0
    },
    e
});
hljs.registerLanguage("php", function(e) {
    var c = {
        b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
    }
      , i = {
        cN: "meta",
        b: /<\?(php)?|\?>/
    }
      , t = {
        cN: "string",
        c: [e.BE, i],
        v: [{
            b: 'b"',
            e: '"'
        }, {
            b: "b'",
            e: "'"
        }, e.inherit(e.ASM, {
            i: null
        }), e.inherit(e.QSM, {
            i: null
        })]
    }
      , a = {
        v: [e.BNM, e.CNM]
    };
    return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [e.HCM, e.C("//", "$", {
            c: [i]
        }), e.C("/\\*", "\\*/", {
            c: [{
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.C("__halt_compiler.+?;", !1, {
            eW: !0,
            k: "__halt_compiler",
            l: e.UIR
        }), {
            cN: "string",
            b: /<<<['"]?\w+['"]?$/,
            e: /^\w+;?$/,
            c: [e.BE, {
                cN: "subst",
                v: [{
                    b: /\$\w+/
                }, {
                    b: /\{\$/,
                    e: /\}/
                }]
            }]
        }, i, {
            cN: "keyword",
            b: /\$this\b/
        }, c, {
            b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
        }, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [e.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: ["self", c, e.CBCM, t, a]
            }]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [{
                bK: "extends implements"
            }, e.UTM]
        }, {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [e.UTM]
        }, {
            bK: "use",
            e: ";",
            c: [e.UTM]
        }, {
            b: "=>"
        }, t, a]
    }
});
hljs.registerLanguage("json", function(e) {
    var i = {
        literal: "true false null"
    }
      , n = [e.QSM, e.CNM]
      , r = {
        e: ",",
        eW: !0,
        eE: !0,
        c: n,
        k: i
    }
      , t = {
        b: "{",
        e: "}",
        c: [{
            cN: "attr",
            b: /"/,
            e: /"/,
            c: [e.BE],
            i: "\\n"
        }, e.inherit(r, {
            b: /:/
        })],
        i: "\\S"
    }
      , c = {
        b: "\\[",
        e: "\\]",
        c: [e.inherit(r)],
        i: "\\S"
    };
    return n.splice(n.length, 0, t, c),
    {
        c: n,
        k: i,
        i: "\\S"
    }
});
hljs.registerLanguage("xml", function(s) {
    var e = "[A-Za-z0-9\\._:-]+"
      , t = {
        eW: !0,
        i: /</,
        r: 0,
        c: [{
            cN: "attr",
            b: e,
            r: 0
        }, {
            b: /=\s*/,
            r: 0,
            c: [{
                cN: "string",
                endsParent: !0,
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s"'=<>`]+/
                }]
            }]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "meta",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, s.C("<!--", "-->", {
            r: 10
        }), {
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            b: /<\?(php)?/,
            e: /\?>/,
            sL: "php",
            c: [{
                b: "/\\*",
                e: "\\*/",
                skip: !0
            }]
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                name: "style"
            },
            c: [t],
            starts: {
                e: "</style>",
                rE: !0,
                sL: ["css", "xml"]
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                name: "script"
            },
            c: [t],
            starts: {
                e: "</script>",
                rE: !0,
                sL: ["actionscript", "javascript", "handlebars", "xml"]
            }
        }, {
            cN: "meta",
            v: [{
                b: /<\?xml/,
                e: /\?>/,
                r: 10
            }, {
                b: /<\?\w+/,
                e: /\?>/
            }]
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "name",
                b: /[^\/><\s]+/,
                r: 0
            }, t]
        }]
    }
});
hljs.registerLanguage("css", function(e) {
    var c = "[a-zA-Z-][a-zA-Z0-9_-]*"
      , t = {
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                eW: !0,
                eE: !0,
                c: [{
                    b: /[\w-]+\(/,
                    rB: !0,
                    c: [{
                        cN: "built_in",
                        b: /[\w-]+/
                    }, {
                        b: /\(/,
                        e: /\)/,
                        c: [e.ASM, e.QSM]
                    }]
                }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                    cN: "number",
                    b: "#[0-9A-Fa-f]+"
                }, {
                    cN: "meta",
                    b: "!important"
                }]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, {
            cN: "selector-id",
            b: /#[A-Za-z0-9_-]+/
        }, {
            cN: "selector-class",
            b: /\.[A-Za-z0-9_-]+/
        }, {
            cN: "selector-attr",
            b: /\[/,
            e: /\]/,
            i: "$"
        }, {
            cN: "selector-pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        }, {
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            b: "@",
            e: "[{;]",
            i: /:/,
            c: [{
                cN: "keyword",
                b: /\w+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [e.ASM, e.QSM, e.CSSNM]
            }]
        }, {
            cN: "selector-tag",
            b: c,
            r: 0
        }, {
            b: "{",
            e: "}",
            i: /\S/,
            c: [e.CBCM, t]
        }]
    }
});
hljs.registerLanguage("javascript", function(e) {
    return {
        aliases: ["js", "jsx"],
        k: {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        c: [{
            cN: "meta",
            r: 10,
            b: /^\s*['"]use (strict|asm)['"]/
        }, {
            cN: "meta",
            b: /^#!/,
            e: /$/
        }, e.ASM, e.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE, {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}"
            }]
        }, e.CLCM, e.CBCM, {
            cN: "number",
            v: [{
                b: "\\b(0[bB][01]+)"
            }, {
                b: "\\b(0[oO][0-7]+)"
            }, {
                b: e.CNR
            }],
            r: 0
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                b: /</,
                e: /(\/\w+|\w+\/)>/,
                sL: "xml",
                c: [{
                    b: /<\w+\s*\/>/,
                    skip: !0
                }, {
                    b: /<\w+/,
                    e: /(\/\w+|\w+\/)>/,
                    skip: !0,
                    c: ["self"]
                }]
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                c: [e.CLCM, e.CBCM]
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, e.METHOD_GUARD, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{
                bK: "extends"
            }, e.UTM]
        }, {
            bK: "constructor",
            e: /\{/,
            eE: !0
        }],
        i: /#(?!!)/
    }
});
/*!
 * imagesLoaded
 * Version: v4.1.1
 * Website: http://imagesloaded.desandro.com/
 */

!function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[t] = i[t] || {};
            return n[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0
              , o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o; ) {
                var s = r && r[o];
                s && (this.off(t, o),
                delete r[o]),
                o.apply(this, e),
                n += s ? 0 : 1,
                o = i[n]
            }
            return this
        }
    }
    ,
    t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function(t, e) {
    function i(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function n(t) {
        var e = [];
        if (Array.isArray(t))
            e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    function o(t, e, r) {
        return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)),
        this.elements = n(t),
        this.options = i({}, this.options),
        "function" == typeof e ? r = e : i(this.options, e),
        r && this.on("always", r),
        this.getImages(),
        h && (this.jqDeferred = new h.Deferred),
        void setTimeout(function() {
            this.check()
        }
        .bind(this))) : new o(t,e,r)
    }
    function r(t) {
        this.img = t
    }
    function s(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    var h = t.jQuery
      , a = t.console;
    o.prototype = Object.create(e.prototype),
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    o.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    }
    ;
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                var o = n && n[2];
                o && this.addBackground(o, t),
                n = i.exec(e.backgroundImage)
            }
    }
    ,
    o.prototype.addImage = function(t) {
        var e = new r(t);
        this.images.push(e)
    }
    ,
    o.prototype.addBackground = function(t, e) {
        var i = new s(t,e);
        this.images.push(i)
    }
    ,
    o.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t),
            e.check()
        }) : void this.complete()
    }
    ,
    o.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && a && a.log("progress: " + i, t, e)
    }
    ,
    o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }
    ,
    r.prototype = Object.create(e.prototype),
    r.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    r.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }
    ,
    r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    r.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    r.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype = Object.create(r.prototype),
    s.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    o.makeJQueryPlugin = function(e) {
        e = e || t.jQuery,
        e && (h = e,
        h.fn.imagesLoaded = function(t, e) {
            var i = new o(this,t,e);
            return i.jqDeferred.promise(h(this))
        }
        )
    }
    ,
    o.makeJQueryPlugin(),
    o
});
/*!
 * Isotope
 * Version: 2.2.2
 * Website: http://isotope.metafizzy.co
 */
!function(a) {
    function b() {}
    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            }
            )
        }
        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h]
                          , k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l)
                                    return l
                            } else
                                f("no such method '" + e + "' for " + b + " instance");
                        else
                            f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e),
                    d._init()) : (d = new c(this,e),
                    a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            }
            ;
            return a.bridget = function(a, b) {
                c(b),
                e(a, b)
            }
            ,
            a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b,
        c
    }
    var c = document.documentElement
      , d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    }
    : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        }
        : function() {
            var c = b(a);
            d.call(a, c)
        }
        ,
        a.attachEvent("on" + c, a[c + d])
    }
    );
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    }
    : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    }
    );
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    "use strict";
    function a() {}
    function b(a, b) {
        for (var c = a.length; c--; )
            if (a[c].listener === b)
                return c;
        return -1
    }
    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype
      , e = this
      , f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d)
                d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else
            b = d[a] || (d[a] = []);
        return b
    }
    ,
    d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1)
            c.push(a[b].listener);
        return c
    }
    ,
    d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {},
        b[a] = c),
        b || c
    }
    ,
    d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e)
            e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
        return this
    }
    ,
    d.on = c("addListener"),
    d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }
    ,
    d.once = c("addOnceListener"),
    d.defineEvent = function(a) {
        return this.getListeners(a),
        this
    }
    ,
    d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1)
            this.defineEvent(a[b]);
        return this
    }
    ,
    d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f)
            f.hasOwnProperty(e) && (d = b(f[e], c),
            -1 !== d && f[e].splice(d, 1));
        return this
    }
    ,
    d.off = c("removeListener"),
    d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }
    ,
    d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }
    ,
    d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--; )
                f.call(this, b, c[d]);
        else
            for (d in b)
                b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }
    ,
    d.removeEvent = function(a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c)
            delete d[a];
        else if (a instanceof RegExp)
            for (b in d)
                d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else
            delete this._events;
        return this
    }
    ,
    d.removeAllListeners = c("removeEvent"),
    d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--; )
                    c = g[e][d],
                    c.once === !0 && this.removeListener(a, c.listener),
                    f = c.listener.apply(this, b || []),
                    f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }
    ,
    d.trigger = c("emitEvent"),
    d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }
    ,
    d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a,
        this
    }
    ,
    d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ,
    d._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    a.noConflict = function() {
        return e.EventEmitter = f,
        a
    }
    ,
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}
.call(this),
function(a) {
    function b(a) {
        if (a) {
            if ("string" == typeof d[a])
                return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0, f = c.length; f > e; e++)
                if (b = c[e] + a,
                "string" == typeof d[b])
                    return b
        }
    }
    var c = "Webkit Moz ms Ms O".split(" ")
      , d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window),
function(a, b) {
    function c(a) {
        var b = parseFloat(a)
          , c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b
    }
    function d() {}
    function e() {
        for (var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, b = 0, c = h.length; c > b; b++) {
            var d = h[b];
            a[d] = 0
        }
        return a
    }
    function f(b) {
        function d() {
            if (!m) {
                m = !0;
                var d = a.getComputedStyle;
                if (j = function() {
                    var a = d ? function(a) {
                        return d(a, null)
                    }
                    : function(a) {
                        return a.currentStyle
                    }
                    ;
                    return function(b) {
                        var c = a(b);
                        return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                        c
                    }
                }(),
                k = b("boxSizing")) {
                    var e = document.createElement("div");
                    e.style.width = "200px",
                    e.style.padding = "1px 2px 3px 4px",
                    e.style.borderStyle = "solid",
                    e.style.borderWidth = "1px 2px 3px 4px",
                    e.style[k] = "border-box";
                    var f = document.body || document.documentElement;
                    f.appendChild(e);
                    var h = j(e);
                    l = 200 === c(h.width),
                    f.removeChild(e)
                }
            }
        }
        function f(a) {
            if (d(),
            "string" == typeof a && (a = document.querySelector(a)),
            a && "object" == typeof a && a.nodeType) {
                var b = j(a);
                if ("none" === b.display)
                    return e();
                var f = {};
                f.width = a.offsetWidth,
                f.height = a.offsetHeight;
                for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                    var o = h[m]
                      , p = b[o];
                    p = i(a, p);
                    var q = parseFloat(p);
                    f[o] = isNaN(q) ? 0 : q
                }
                var r = f.paddingLeft + f.paddingRight
                  , s = f.paddingTop + f.paddingBottom
                  , t = f.marginLeft + f.marginRight
                  , u = f.marginTop + f.marginBottom
                  , v = f.borderLeftWidth + f.borderRightWidth
                  , w = f.borderTopWidth + f.borderBottomWidth
                  , x = g && l
                  , y = c(b.width);
                y !== !1 && (f.width = y + (x ? 0 : r + v));
                var z = c(b.height);
                return z !== !1 && (f.height = z + (x ? 0 : s + w)),
                f.innerWidth = f.width - (r + v),
                f.innerHeight = f.height - (s + w),
                f.outerWidth = f.width + t,
                f.outerHeight = f.height + u,
                f
            }
        }
        function i(b, c) {
            if (a.getComputedStyle || -1 === c.indexOf("%"))
                return c;
            var d = b.style
              , e = d.left
              , f = b.runtimeStyle
              , g = f && f.left;
            return g && (f.left = b.currentStyle.left),
            d.left = c,
            c = d.pixelLeft,
            d.left = e,
            g && (f.left = g),
            c
        }
        var j, k, l, m = !1;
        return f
    }
    var g = "undefined" == typeof console ? d : function(a) {
        console.error(a)
    }
      , h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
}(window),
function(a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : g.push(a))
    }
    function c(a) {
        var c = "readystatechange" === a.type && "complete" !== f.readyState;
        b.isReady || c || d()
    }
    function d() {
        b.isReady = !0;
        for (var a = 0, c = g.length; c > a; a++) {
            var d = g[a];
            d()
        }
    }
    function e(e) {
        return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c),
        e.bind(f, "readystatechange", c),
        e.bind(a, "load", c)),
        b
    }
    var f = a.document
      , g = [];
    b.isReady = !1,
    "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
}(window),
function(a) {
    "use strict";
    function b(a, b) {
        return a[g](b)
    }
    function c(a) {
        if (!a.parentNode) {
            var b = document.createDocumentFragment();
            b.appendChild(a)
        }
    }
    function d(a, b) {
        c(a);
        for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
            if (d[e] === a)
                return !0;
        return !1
    }
    function e(a, d) {
        return c(a),
        b(a, d)
    }
    var f, g = function() {
        if (a.matches)
            return "matches";
        if (a.matchesSelector)
            return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
            var e = b[c]
              , f = e + "MatchesSelector";
            if (a[f])
                return f
        }
    }();
    if (g) {
        var h = document.createElement("div")
          , i = b(h, "div");
        f = i ? b : e
    } else
        f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return f
    }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
}(Element.prototype),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
        return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
}(window, function(a, b, c) {
    var d = {};
    d.extend = function(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    ,
    d.modulo = function(a, b) {
        return (a % b + b) % b
    }
    ;
    var e = Object.prototype.toString;
    d.isArray = function(a) {
        return "[object Array]" == e.call(a)
    }
    ,
    d.makeArray = function(a) {
        var b = [];
        if (d.isArray(a))
            b = a;
        else if (a && "number" == typeof a.length)
            for (var c = 0, e = a.length; e > c; c++)
                b.push(a[c]);
        else
            b.push(a);
        return b
    }
    ,
    d.indexOf = Array.prototype.indexOf ? function(a, b) {
        return a.indexOf(b)
    }
    : function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b)
                return c;
        return -1
    }
    ,
    d.removeFrom = function(a, b) {
        var c = d.indexOf(a, b);
        -1 != c && a.splice(c, 1)
    }
    ,
    d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
        return a instanceof HTMLElement
    }
    : function(a) {
        return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
    }
    ,
    d.setText = function() {
        function a(a, c) {
            b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"),
            a[b] = c
        }
        var b;
        return a
    }(),
    d.getParent = function(a, b) {
        for (; a != document.body; )
            if (a = a.parentNode,
            c(a, b))
                return a
    }
    ,
    d.getQueryElement = function(a) {
        return "string" == typeof a ? document.querySelector(a) : a
    }
    ,
    d.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ,
    d.filterFindElements = function(a, b) {
        a = d.makeArray(a);
        for (var e = [], f = 0, g = a.length; g > f; f++) {
            var h = a[f];
            if (d.isElement(h))
                if (b) {
                    c(h, b) && e.push(h);
                    for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++)
                        e.push(i[j])
                } else
                    e.push(h)
        }
        return e
    }
    ,
    d.debounceMethod = function(a, b, c) {
        var d = a.prototype[b]
          , e = b + "Timeout";
        a.prototype[b] = function() {
            var a = this[e];
            a && clearTimeout(a);
            var b = arguments
              , f = this;
            this[e] = setTimeout(function() {
                d.apply(f, b),
                delete f[e]
            }, c || 100)
        }
    }
    ,
    d.toDashed = function(a) {
        return a.replace(/(.)([A-Z])/g, function(a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    }
    ;
    var f = a.console;
    return d.htmlInit = function(c, e) {
        b(function() {
            for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                var k, l = g[i], m = l.getAttribute(h);
                try {
                    k = m && JSON.parse(m)
                } catch (n) {
                    f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                    continue
                }
                var o = new c(l,k)
                  , p = a.jQuery;
                p && p.data(l, e, o)
            }
        })
    }
    ,
    d
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
        return b(a, c, d, e, f)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {},
    a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
}(window, function(a, b, c, d, e) {
    "use strict";
    function f(a) {
        for (var b in a)
            return !1;
        return b = null,
        !0
    }
    function g(a, b) {
        a && (this.element = a,
        this.layout = b,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function h(a) {
        return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
        })
    }
    var i = a.getComputedStyle
      , j = i ? function(a) {
        return i(a, null)
    }
    : function(a) {
        return a.currentStyle
    }
      , k = d("transition")
      , l = d("transform")
      , m = k && l
      , n = !!d("perspective")
      , o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[k]
      , p = ["transform", "transition", "transitionDuration", "transitionProperty"]
      , q = function() {
        for (var a = {}, b = 0, c = p.length; c > b; b++) {
            var e = p[b]
              , f = d(e);
            f && f !== e && (a[e] = f)
        }
        return a
    }();
    e.extend(g.prototype, b.prototype),
    g.prototype._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    g.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ,
    g.prototype.getSize = function() {
        this.size = c(this.element)
    }
    ,
    g.prototype.css = function(a) {
        var b = this.element.style;
        for (var c in a) {
            var d = q[c] || c;
            b[d] = a[c]
        }
    }
    ,
    g.prototype.getPosition = function() {
        var a = j(this.element)
          , b = this.layout.options
          , c = b.isOriginLeft
          , d = b.isOriginTop
          , e = a[c ? "left" : "right"]
          , f = a[d ? "top" : "bottom"]
          , g = this.layout.size
          , h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10)
          , i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
        h = isNaN(h) ? 0 : h,
        i = isNaN(i) ? 0 : i,
        h -= c ? g.paddingLeft : g.paddingRight,
        i -= d ? g.paddingTop : g.paddingBottom,
        this.position.x = h,
        this.position.y = i
    }
    ,
    g.prototype.layoutPosition = function() {
        var a = this.layout.size
          , b = this.layout.options
          , c = {}
          , d = b.isOriginLeft ? "paddingLeft" : "paddingRight"
          , e = b.isOriginLeft ? "left" : "right"
          , f = b.isOriginLeft ? "right" : "left"
          , g = this.position.x + a[d];
        c[e] = this.getXValue(g),
        c[f] = "";
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom"
          , i = b.isOriginTop ? "top" : "bottom"
          , j = b.isOriginTop ? "bottom" : "top"
          , k = this.position.y + a[h];
        c[i] = this.getYValue(k),
        c[j] = "",
        this.css(c),
        this.emitEvent("layout", [this])
    }
    ,
    g.prototype.getXValue = function(a) {
        var b = this.layout.options;
        return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
    }
    ,
    g.prototype.getYValue = function(a) {
        var b = this.layout.options;
        return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
    }
    ,
    g.prototype._transitionTo = function(a, b) {
        this.getPosition();
        var c = this.position.x
          , d = this.position.y
          , e = parseInt(a, 10)
          , f = parseInt(b, 10)
          , g = e === this.position.x && f === this.position.y;
        if (this.setPosition(a, b),
        g && !this.isTransitioning)
            return void this.layoutPosition();
        var h = a - c
          , i = b - d
          , j = {};
        j.transform = this.getTranslate(h, i),
        this.transition({
            to: j,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    g.prototype.getTranslate = function(a, b) {
        var c = this.layout.options;
        return a = c.isOriginLeft ? a : -a,
        b = c.isOriginTop ? b : -b,
        n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
    }
    ,
    g.prototype.goTo = function(a, b) {
        this.setPosition(a, b),
        this.layoutPosition()
    }
    ,
    g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo,
    g.prototype.setPosition = function(a, b) {
        this.position.x = parseInt(a, 10),
        this.position.y = parseInt(b, 10)
    }
    ,
    g.prototype._nonTransition = function(a) {
        this.css(a.to),
        a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd)
            a.onTransitionEnd[b].call(this)
    }
    ,
    g.prototype._transition = function(a) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd)
            b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to)
            b.ingProperties[c] = !0,
            a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
            this.css(a.from);
            var d = this.element.offsetHeight;
            d = null
        }
        this.enableTransition(a.to),
        this.css(a.to),
        this.isTransitioning = !0
    }
    ;
    var r = "opacity," + h(q.transform || "transform");
    g.prototype.enableTransition = function() {
        this.isTransitioning || (this.css({
            transitionProperty: r,
            transitionDuration: this.layout.options.transitionDuration
        }),
        this.element.addEventListener(o, this, !1))
    }
    ,
    g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"],
    g.prototype.onwebkitTransitionEnd = function(a) {
        this.ontransitionend(a)
    }
    ,
    g.prototype.onotransitionend = function(a) {
        this.ontransitionend(a)
    }
    ;
    var s = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform"
    };
    g.prototype.ontransitionend = function(a) {
        if (a.target === this.element) {
            var b = this._transn
              , c = s[a.propertyName] || a.propertyName;
            if (delete b.ingProperties[c],
            f(b.ingProperties) && this.disableTransition(),
            c in b.clean && (this.element.style[a.propertyName] = "",
            delete b.clean[c]),
            c in b.onEnd) {
                var d = b.onEnd[c];
                d.call(this),
                delete b.onEnd[c]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    g.prototype.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(o, this, !1),
        this.isTransitioning = !1
    }
    ,
    g.prototype._removeStyles = function(a) {
        var b = {};
        for (var c in a)
            b[c] = "";
        this.css(b)
    }
    ;
    var t = {
        transitionProperty: "",
        transitionDuration: ""
    };
    return g.prototype.removeTransitionStyles = function() {
        this.css(t)
    }
    ,
    g.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    g.prototype.remove = function() {
        if (!k || !parseFloat(this.layout.options.transitionDuration))
            return void this.removeElem();
        var a = this;
        this.once("transitionEnd", function() {
            a.removeElem()
        }),
        this.hide()
    }
    ,
    g.prototype.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var a = this.layout.options
          , b = {}
          , c = this.getHideRevealTransitionEndProperty("visibleStyle");
        b[c] = this.onRevealTransitionEnd,
        this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }
    ,
    g.prototype.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    g.prototype.getHideRevealTransitionEndProperty = function(a) {
        var b = this.layout.options[a];
        if (b.opacity)
            return "opacity";
        for (var c in b)
            return c
    }
    ,
    g.prototype.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var a = this.layout.options
          , b = {}
          , c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        b[c] = this.onHideTransitionEnd,
        this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }
    ,
    g.prototype.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    g.prototype.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    g
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
        return b(a, c, d, e, f, g)
    }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}(window, function(a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
        var c = e.getQueryElement(a);
        if (!c)
            return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
        this.element = c,
        i && (this.$element = i(this.element)),
        this.options = e.extend({}, this.constructor.defaults),
        this.option(b);
        var d = ++k;
        this.element.outlayerGUID = d,
        l[d] = this,
        this._create(),
        this.options.isInitLayout && this.layout()
    }
    var h = a.console
      , i = a.jQuery
      , j = function() {}
      , k = 0
      , l = {};
    return g.namespace = "outlayer",
    g.Item = f,
    g.defaults = {
        containerStyle: {
            position: "relative"
        },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    },
    e.extend(g.prototype, c.prototype),
    g.prototype.option = function(a) {
        e.extend(this.options, a)
    }
    ,
    g.prototype._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        e.extend(this.element.style, this.options.containerStyle),
        this.options.isResizeBound && this.bindResize()
    }
    ,
    g.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    g.prototype._itemize = function(a) {
        for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
            var g = b[e]
              , h = new c(g,this);
            d.push(h)
        }
        return d
    }
    ,
    g.prototype._filterFindItemElements = function(a) {
        return e.filterFindElements(a, this.options.itemSelector)
    }
    ,
    g.prototype.getItemElements = function() {
        for (var a = [], b = 0, c = this.items.length; c > b; b++)
            a.push(this.items[b].element);
        return a
    }
    ,
    g.prototype.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, a),
        this._isLayoutInited = !0
    }
    ,
    g.prototype._init = g.prototype.layout,
    g.prototype._resetLayout = function() {
        this.getSize()
    }
    ,
    g.prototype.getSize = function() {
        this.size = d(this.element)
    }
    ,
    g.prototype._getMeasurement = function(a, b) {
        var c, f = this.options[a];
        f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f),
        this[a] = c ? d(c)[b] : f) : this[a] = 0
    }
    ,
    g.prototype.layoutItems = function(a, b) {
        a = this._getItemsForLayout(a),
        this._layoutItems(a, b),
        this._postLayout()
    }
    ,
    g.prototype._getItemsForLayout = function(a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.isIgnored || b.push(e)
        }
        return b
    }
    ,
    g.prototype._layoutItems = function(a, b) {
        if (this._emitCompleteOnItems("layout", a),
        a && a.length) {
            for (var c = [], d = 0, e = a.length; e > d; d++) {
                var f = a[d]
                  , g = this._getItemLayoutPosition(f);
                g.item = f,
                g.isInstant = b || f.isLayoutInstant,
                c.push(g)
            }
            this._processLayoutQueue(c)
        }
    }
    ,
    g.prototype._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    g.prototype._processLayoutQueue = function(a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this._positionItem(d.item, d.x, d.y, d.isInstant)
        }
    }
    ,
    g.prototype._positionItem = function(a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c)
    }
    ,
    g.prototype._postLayout = function() {
        this.resizeContainer()
    }
    ,
    g.prototype.resizeContainer = function() {
        if (this.options.isResizingContainer) {
            var a = this._getContainerSize();
            a && (this._setContainerMeasure(a.width, !0),
            this._setContainerMeasure(a.height, !1))
        }
    }
    ,
    g.prototype._getContainerSize = j,
    g.prototype._setContainerMeasure = function(a, b) {
        if (void 0 !== a) {
            var c = this.size;
            c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth),
            a = Math.max(a, 0),
            this.element.style[b ? "width" : "height"] = a + "px"
        }
    }
    ,
    g.prototype._emitCompleteOnItems = function(a, b) {
        function c() {
            e.dispatchEvent(a + "Complete", null, [b])
        }
        function d() {
            g++,
            g === f && c()
        }
        var e = this
          , f = b.length;
        if (!b || !f)
            return void c();
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
            var j = b[h];
            j.once(a, d)
        }
    }
    ,
    g.prototype.dispatchEvent = function(a, b, c) {
        var d = b ? [b].concat(c) : c;
        if (this.emitEvent(a, d),
        i)
            if (this.$element = this.$element || i(this.element),
            b) {
                var e = i.Event(b);
                e.type = a,
                this.$element.trigger(e, c)
            } else
                this.$element.trigger(a, c)
    }
    ,
    g.prototype.ignore = function(a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0)
    }
    ,
    g.prototype.unignore = function(a) {
        var b = this.getItem(a);
        b && delete b.isIgnored
    }
    ,
    g.prototype.stamp = function(a) {
        if (a = this._find(a)) {
            this.stamps = this.stamps.concat(a);
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this.ignore(d)
            }
        }
    }
    ,
    g.prototype.unstamp = function(a) {
        if (a = this._find(a))
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                e.removeFrom(this.stamps, d),
                this.unignore(d)
            }
    }
    ,
    g.prototype._find = function(a) {
        return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)),
        a = e.makeArray(a)) : void 0
    }
    ,
    g.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var a = 0, b = this.stamps.length; b > a; a++) {
                var c = this.stamps[a];
                this._manageStamp(c)
            }
        }
    }
    ,
    g.prototype._getBoundingRect = function() {
        var a = this.element.getBoundingClientRect()
          , b = this.size;
        this._boundingRect = {
            left: a.left + b.paddingLeft + b.borderLeftWidth,
            top: a.top + b.paddingTop + b.borderTopWidth,
            right: a.right - (b.paddingRight + b.borderRightWidth),
            bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
        }
    }
    ,
    g.prototype._manageStamp = j,
    g.prototype._getElementOffset = function(a) {
        var b = a.getBoundingClientRect()
          , c = this._boundingRect
          , e = d(a)
          , f = {
            left: b.left - c.left - e.marginLeft,
            top: b.top - c.top - e.marginTop,
            right: c.right - b.right - e.marginRight,
            bottom: c.bottom - b.bottom - e.marginBottom
        };
        return f
    }
    ,
    g.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ,
    g.prototype.bindResize = function() {
        this.isResizeBound || (b.bind(a, "resize", this),
        this.isResizeBound = !0)
    }
    ,
    g.prototype.unbindResize = function() {
        this.isResizeBound && b.unbind(a, "resize", this),
        this.isResizeBound = !1
    }
    ,
    g.prototype.onresize = function() {
        function a() {
            b.resize(),
            delete b.resizeTimeout
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var b = this;
        this.resizeTimeout = setTimeout(a, 100)
    }
    ,
    g.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    g.prototype.needsResizeLayout = function() {
        var a = d(this.element)
          , b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth
    }
    ,
    g.prototype.addItems = function(a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)),
        b
    }
    ,
    g.prototype.appended = function(a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0),
        this.reveal(b))
    }
    ,
    g.prototype.prepended = function(a) {
        var b = this._itemize(a);
        if (b.length) {
            var c = this.items.slice(0);
            this.items = b.concat(c),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(b, !0),
            this.reveal(b),
            this.layoutItems(c)
        }
    }
    ,
    g.prototype.reveal = function(a) {
        this._emitCompleteOnItems("reveal", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.reveal()
        }
    }
    ,
    g.prototype.hide = function(a) {
        this._emitCompleteOnItems("hide", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.hide()
        }
    }
    ,
    g.prototype.revealItemElements = function(a) {
        var b = this.getItems(a);
        this.reveal(b)
    }
    ,
    g.prototype.hideItemElements = function(a) {
        var b = this.getItems(a);
        this.hide(b)
    }
    ,
    g.prototype.getItem = function(a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            if (d.element === a)
                return d
        }
    }
    ,
    g.prototype.getItems = function(a) {
        a = e.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var f = a[c]
              , g = this.getItem(f);
            g && b.push(g)
        }
        return b
    }
    ,
    g.prototype.remove = function(a) {
        var b = this.getItems(a);
        if (this._emitCompleteOnItems("remove", b),
        b && b.length)
            for (var c = 0, d = b.length; d > c; c++) {
                var f = b[c];
                f.remove(),
                e.removeFrom(this.items, f)
            }
    }
    ,
    g.prototype.destroy = function() {
        var a = this.element.style;
        a.height = "",
        a.position = "",
        a.width = "";
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            d.destroy()
        }
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e],
        delete this.element.outlayerGUID,
        i && i.removeData(this.element, this.constructor.namespace)
    }
    ,
    g.data = function(a) {
        a = e.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && l[b]
    }
    ,
    g.create = function(a, b) {
        function c() {
            g.apply(this, arguments)
        }
        return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype),
        c.prototype.constructor = c,
        c.defaults = e.extend({}, g.defaults),
        e.extend(c.defaults, b),
        c.prototype.settings = {},
        c.namespace = a,
        c.data = g.data,
        c.Item = function() {
            f.apply(this, arguments)
        }
        ,
        c.Item.prototype = new f,
        e.htmlInit(c, a),
        i && i.bridget && i.bridget(a, c),
        c
    }
    ,
    g.Item = f,
    g
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {},
    a.Isotope.Item = b(a.Outlayer))
}(window, function(a) {
    "use strict";
    function b() {
        a.Item.apply(this, arguments)
    }
    b.prototype = new a.Item,
    b.prototype._create = function() {
        this.id = this.layout.itemGUID++,
        a.Item.prototype._create.call(this),
        this.sortData = {}
    }
    ,
    b.prototype.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var a = this.layout.options.getSortData
              , b = this.layout._sorters;
            for (var c in a) {
                var d = b[c];
                this.sortData[c] = d(this.element, this)
            }
        }
    }
    ;
    var c = b.prototype.destroy;
    return b.prototype.destroy = function() {
        c.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    b
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {},
    a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
}(window, function(a, b) {
    "use strict";
    function c(a) {
        this.isotope = a,
        a && (this.options = a.options[this.namespace],
        this.element = a.element,
        this.items = a.filteredItems,
        this.size = a.size)
    }
    return function() {
        function a(a) {
            return function() {
                return b.prototype[a].apply(this.isotope, arguments)
            }
        }
        for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
            var g = d[e];
            c.prototype[g] = a(g)
        }
    }(),
    c.prototype.needsVerticalResizeLayout = function() {
        var b = a(this.isotope.element)
          , c = this.isotope.size && b;
        return c && b.innerHeight != this.isotope.size.innerHeight
    }
    ,
    c.prototype._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    c.prototype.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    c.prototype.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    c.prototype.getSegmentSize = function(a, b) {
        var c = a + b
          , d = "outer" + b;
        if (this._getMeasurement(c, d),
        !this[c]) {
            var e = this.getFirstItemSize();
            this[c] = e && e[d] || this.isotope.size["inner" + b]
        }
    }
    ,
    c.prototype.getFirstItemSize = function() {
        var b = this.isotope.filteredItems[0];
        return b && b.element && a(b.element)
    }
    ,
    c.prototype.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    c.prototype.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    c.modes = {},
    c.create = function(a, b) {
        function d() {
            c.apply(this, arguments)
        }
        return d.prototype = new c,
        b && (d.options = b),
        d.prototype.namespace = a,
        c.modes[a] = d,
        d
    }
    ,
    c
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
}(window, function(a, b, c) {
    var d = a.create("masonry");
    return d.prototype._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--; )
            this.colYs.push(0);
        this.maxY = 0
    }
    ,
    d.prototype.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var a = this.items[0]
              , c = a && a.element;
            this.columnWidth = c && b(c).outerWidth || this.containerWidth
        }
        var d = this.columnWidth += this.gutter
          , e = this.containerWidth + this.gutter
          , f = e / d
          , g = d - e % d
          , h = g && 1 > g ? "round" : "floor";
        f = Math[h](f),
        this.cols = Math.max(f, 1)
    }
    ,
    d.prototype.getContainerWidth = function() {
        var a = this.options.isFitWidth ? this.element.parentNode : this.element
          , c = b(a);
        this.containerWidth = c && c.innerWidth
    }
    ,
    d.prototype._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth
          , d = b && 1 > b ? "round" : "ceil"
          , e = Math[d](a.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
            x: this.columnWidth * h,
            y: g
        }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++)
            this.colYs[h + l] = j;
        return i
    }
    ,
    d.prototype._getColGroup = function(a) {
        if (2 > a)
            return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
            var e = this.colYs.slice(d, d + a);
            b[d] = Math.max.apply(Math, e)
        }
        return b
    }
    ,
    d.prototype._manageStamp = function(a) {
        var c = b(a)
          , d = this._getElementOffset(a)
          , e = this.options.isOriginLeft ? d.left : d.right
          , f = e + c.outerWidth
          , g = Math.floor(e / this.columnWidth);
        g = Math.max(0, g);
        var h = Math.floor(f / this.columnWidth);
        h -= f % this.columnWidth ? 0 : 1,
        h = Math.min(this.cols - 1, h);
        for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++)
            this.colYs[j] = Math.max(i, this.colYs[j])
    }
    ,
    d.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = {
            height: this.maxY
        };
        return this.options.isFitWidth && (a.width = this._getContainerFitWidth()),
        a
    }
    ,
    d.prototype._getContainerFitWidth = function() {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; )
            a++;
        return (this.cols - a) * this.columnWidth - this.gutter
    }
    ,
    d.prototype.needsResizeLayout = function() {
        var a = this.containerWidth;
        return this.getContainerWidth(),
        a !== this.containerWidth
    }
    ,
    d
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
}(window, function(a, b) {
    "use strict";
    function c(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    var d = a.create("masonry")
      , e = d.prototype._getElementOffset
      , f = d.prototype.layout
      , g = d.prototype._getMeasurement;
    c(d.prototype, b.prototype),
    d.prototype._getElementOffset = e,
    d.prototype.layout = f,
    d.prototype._getMeasurement = g;
    var h = d.prototype.measureColumns;
    d.prototype.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        h.call(this)
    }
    ;
    var i = d.prototype._manageStamp;
    return d.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft,
        this.options.isOriginTop = this.isotope.options.isOriginTop,
        i.apply(this, arguments)
    }
    ,
    d
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function(a) {
    "use strict";
    var b = a.create("fitRows");
    return b.prototype._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    b.prototype._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = a.size.outerWidth + this.gutter
          , c = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && b + this.x > c && (this.x = 0,
        this.y = this.maxY);
        var d = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight),
        this.x += b,
        d
    }
    ,
    b.prototype._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    b
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function(a) {
    "use strict";
    var b = a.create("vertical", {
        horizontalAlignment: 0
    });
    return b.prototype._resetLayout = function() {
        this.y = 0
    }
    ,
    b.prototype._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment
          , c = this.y;
        return this.y += a.size.outerHeight,
        {
            x: b,
            y: c
        }
    }
    ,
    b.prototype._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    b
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
        return b(a, c, d, e, f, g, h)
    }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
}(window, function(a, b, c, d, e, f, g) {
    function h(a, b) {
        return function(c, d) {
            for (var e = 0, f = a.length; f > e; e++) {
                var g = a[e]
                  , h = c.sortData[g]
                  , i = d.sortData[g];
                if (h > i || i > h) {
                    var j = void 0 !== b[g] ? b[g] : b
                      , k = j ? 1 : -1;
                    return (h > i ? 1 : -1) * k
                }
            }
            return 0
        }
    }
    var i = a.jQuery
      , j = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return a.replace(/^\s+|\s+$/g, "")
    }
      , k = document.documentElement
      , l = k.textContent ? function(a) {
        return a.textContent
    }
    : function(a) {
        return a.innerText
    }
      , m = b.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    m.Item = f,
    m.LayoutMode = g,
    m.prototype._create = function() {
        this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        b.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var a in g.modes)
            this._initLayoutMode(a)
    }
    ,
    m.prototype.reloadItems = function() {
        this.itemGUID = 0,
        b.prototype.reloadItems.call(this)
    }
    ,
    m.prototype._itemize = function() {
        for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.id = this.itemGUID++
        }
        return this._updateItemsSortData(a),
        a
    }
    ,
    m.prototype._initLayoutMode = function(a) {
        var b = g.modes[a]
          , c = this.options[a] || {};
        this.options[a] = b.options ? e.extend(b.options, c) : c,
        this.modes[a] = new b(this)
    }
    ,
    m.prototype.layout = function() {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }
    ,
    m.prototype._layout = function() {
        var a = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, a),
        this._isLayoutInited = !0
    }
    ,
    m.prototype.arrange = function(a) {
        function b() {
            d.reveal(c.needReveal),
            d.hide(c.needHide)
        }
        this.option(a),
        this._getIsInstant();
        var c = this._filter(this.items);
        this.filteredItems = c.matches;
        var d = this;
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(b) : b(),
        this._sort(),
        this._layout()
    }
    ,
    m.prototype._init = m.prototype.arrange,
    m.prototype._getIsInstant = function() {
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = a,
        a
    }
    ,
    m.prototype._bindArrangeComplete = function() {
        function a() {
            b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
        }
        var b, c, d, e = this;
        this.once("layoutComplete", function() {
            b = !0,
            a()
        }),
        this.once("hideComplete", function() {
            c = !0,
            a()
        }),
        this.once("revealComplete", function() {
            d = !0,
            a()
        })
    }
    ,
    m.prototype._filter = function(a) {
        var b = this.options.filter;
        b = b || "*";
        for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
            var i = a[g];
            if (!i.isIgnored) {
                var j = f(i);
                j && c.push(i),
                j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
            }
        }
        return {
            matches: c,
            needReveal: d,
            needHide: e
        }
    }
    ,
    m.prototype._getFilterTest = function(a) {
        return i && this.options.isJQueryFiltering ? function(b) {
            return i(b.element).is(a)
        }
        : "function" == typeof a ? function(b) {
            return a(b.element)
        }
        : function(b) {
            return d(b.element, a)
        }
    }
    ,
    m.prototype.updateSortData = function(a) {
        var b;
        a ? (a = e.makeArray(a),
        b = this.getItems(a)) : b = this.items,
        this._getSorters(),
        this._updateItemsSortData(b)
    }
    ,
    m.prototype._getSorters = function() {
        var a = this.options.getSortData;
        for (var b in a) {
            var c = a[b];
            this._sorters[b] = n(c)
        }
    }
    ,
    m.prototype._updateItemsSortData = function(a) {
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.updateSortData()
        }
    }
    ;
    var n = function() {
        function a(a) {
            if ("string" != typeof a)
                return a;
            var c = j(a).split(" ")
              , d = c[0]
              , e = d.match(/^\[(.+)\]$/)
              , f = e && e[1]
              , g = b(f, d)
              , h = m.sortDataParsers[c[1]];
            return a = h ? function(a) {
                return a && h(g(a))
            }
            : function(a) {
                return a && g(a)
            }
        }
        function b(a, b) {
            var c;
            return c = a ? function(b) {
                return b.getAttribute(a)
            }
            : function(a) {
                var c = a.querySelector(b);
                return c && l(c)
            }
        }
        return a
    }();
    m.sortDataParsers = {
        parseInt: function(a) {
            return parseInt(a, 10)
        },
        parseFloat: function(a) {
            return parseFloat(a)
        }
    },
    m.prototype._sort = function() {
        var a = this.options.sortBy;
        if (a) {
            var b = [].concat.apply(a, this.sortHistory)
              , c = h(b, this.options.sortAscending);
            this.filteredItems.sort(c),
            a != this.sortHistory[0] && this.sortHistory.unshift(a)
        }
    }
    ,
    m.prototype._mode = function() {
        var a = this.options.layoutMode
          , b = this.modes[a];
        if (!b)
            throw new Error("No layout mode: " + a);
        return b.options = this.options[a],
        b
    }
    ,
    m.prototype._resetLayout = function() {
        b.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    m.prototype._getItemLayoutPosition = function(a) {
        return this._mode()._getItemLayoutPosition(a)
    }
    ,
    m.prototype._manageStamp = function(a) {
        this._mode()._manageStamp(a)
    }
    ,
    m.prototype._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    m.prototype.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    m.prototype.appended = function(a) {
        var b = this.addItems(a);
        if (b.length) {
            var c = this._filterRevealAdded(b);
            this.filteredItems = this.filteredItems.concat(c)
        }
    }
    ,
    m.prototype.prepended = function(a) {
        var b = this._itemize(a);
        if (b.length) {
            this._resetLayout(),
            this._manageStamps();
            var c = this._filterRevealAdded(b);
            this.layoutItems(this.filteredItems),
            this.filteredItems = c.concat(this.filteredItems),
            this.items = b.concat(this.items)
        }
    }
    ,
    m.prototype._filterRevealAdded = function(a) {
        var b = this._filter(a);
        return this.hide(b.needHide),
        this.reveal(b.matches),
        this.layoutItems(b.matches, !0),
        b.matches
    }
    ,
    m.prototype.insert = function(a) {
        var b = this.addItems(a);
        if (b.length) {
            var c, d, e = b.length;
            for (c = 0; e > c; c++)
                d = b[c],
                this.element.appendChild(d.element);
            var f = this._filter(b).matches;
            for (c = 0; e > c; c++)
                b[c].isLayoutInstant = !0;
            for (this.arrange(),
            c = 0; e > c; c++)
                delete b[c].isLayoutInstant;
            this.reveal(f)
        }
    }
    ;
    var o = m.prototype.remove;
    return m.prototype.remove = function(a) {
        a = e.makeArray(a);
        var b = this.getItems(a);
        o.call(this, a);
        var c = b && b.length;
        if (c)
            for (var d = 0; c > d; d++) {
                var f = b[d];
                e.removeFrom(this.filteredItems, f)
            }
    }
    ,
    m.prototype.shuffle = function() {
        for (var a = 0, b = this.items.length; b > a; a++) {
            var c = this.items[a];
            c.sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    m.prototype._noTransition = function(a) {
        var b = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var c = a.call(this);
        return this.options.transitionDuration = b,
        c
    }
    ,
    m.prototype.getFilteredItemElements = function() {
        for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++)
            a.push(this.filteredItems[b].element);
        return a
    }
    ,
    m
});
/*!
 * Malihu jquery custom scrollbar plugin
 * Version: 3.1.5
 * Website: http://manos.malihu.gr/jquery-custom-content-scroller/
 */
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
    !function(t) {
        var o = "function" == typeof define && define.amd
          , a = "undefined" != typeof module && module.exports
          , n = "https:" == document.location.protocol ? "https:" : "http:"
          , i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))),
        t()
    }(function() {
        var t, o = "mCustomScrollbar", a = "mCS", n = ".mCustomScrollbar", i = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            documentTouchScroll: !0,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        }, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1, d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], u = {
            init: function(t) {
                var t = e.extend(!0, {}, i, t)
                  , o = f.call(this);
                if (t.live) {
                    var s = t.liveSelector || this.selector || n
                      , c = e(s);
                    if ("off" === t.live)
                        return void m(s);
                    l[s] = setTimeout(function() {
                        c.mCustomScrollbar(t),
                        "once" === t.live && c.length && m(s)
                    }, 500)
                } else
                    m(s);
                return t.setWidth = t.set_width ? t.set_width : t.setWidth,
                t.setHeight = t.set_height ? t.set_height : t.setHeight,
                t.axis = t.horizontalScroll ? "x" : p(t.axis),
                t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia,
                "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }),
                t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount,
                t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta,
                t.scrollButtons.scrollType = g(t.scrollButtons.scrollType),
                h(t),
                e(o).each(function() {
                    var o = e(this);
                    if (!o.data(a)) {
                        o.data(a, {
                            idx: ++r,
                            opt: t,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: o.css("direction"),
                            cbOffsets: null,
                            trigger: null,
                            poll: {
                                size: {
                                    o: 0,
                                    n: 0
                                },
                                img: {
                                    o: 0,
                                    n: 0
                                },
                                change: {
                                    o: 0,
                                    n: 0
                                }
                            }
                        });
                        var n = o.data(a)
                          , i = n.opt
                          , l = o.data("mcs-axis")
                          , s = o.data("mcs-scrollbar-position")
                          , c = o.data("mcs-theme");
                        l && (i.axis = l),
                        s && (i.scrollbarPosition = s),
                        c && (i.theme = c,
                        h(i)),
                        v.call(this),
                        n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this),
                        e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]),
                        u.update.call(null, o)
                    }
                })
            },
            update: function(t, o) {
                var n = t || f.call(this);
                return e(n).each(function() {
                    var t = e(this);
                    if (t.data(a)) {
                        var n = t.data(a)
                          , i = n.opt
                          , r = e("#mCSB_" + n.idx + "_container")
                          , l = e("#mCSB_" + n.idx)
                          , s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                        if (!r.length)
                            return;
                        n.tweenRunning && Q(t),
                        o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this),
                        t.hasClass(d[3]) && t.removeClass(d[3]),
                        t.hasClass(d[4]) && t.removeClass(d[4]),
                        l.css("max-height", "none"),
                        l.height() !== t.height() && l.css("max-height", t.height()),
                        _.call(this),
                        "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)),
                        n.overflowed = y.call(this),
                        M.call(this),
                        i.autoDraggerLength && S.call(this),
                        b.call(this),
                        T.call(this);
                        var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                        "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.y = null) : (B.call(this),
                        "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.x = null) : (B.call(this),
                        "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)),
                        N.call(this)
                    }
                })
            },
            scrollTo: function(t, o) {
                if ("undefined" != typeof t && null != t) {
                    var n = f.call(this);
                    return e(n).each(function() {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a)
                              , r = i.opt
                              , l = {
                                trigger: "external",
                                scrollInertia: r.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: !1,
                                timeout: 60,
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }
                              , s = e.extend(!0, {}, l, o)
                              , c = Y.call(this, t)
                              , d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                            c[0] = X.call(this, c[0], "y"),
                            c[1] = X.call(this, c[1], "x"),
                            s.moveDragger && (c[0] *= i.scrollRatio.y,
                            c[1] *= i.scrollRatio.x),
                            s.dur = ne() ? 0 : d,
                            setTimeout(function() {
                                null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y",
                                s.overwrite = "all",
                                G(n, c[0].toString(), s)),
                                null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x",
                                s.overwrite = "none",
                                G(n, c[1].toString(), s))
                            }, s.timeout)
                        }
                    })
                }
            },
            stop: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var t = e(this);
                    t.data(a) && Q(t)
                })
            },
            disable: function(t) {
                var o = f.call(this);
                return e(o).each(function() {
                    var o = e(this);
                    if (o.data(a)) {
                        o.data(a);
                        N.call(this, "remove"),
                        k.call(this),
                        t && B.call(this),
                        M.call(this, !0),
                        o.addClass(d[3])
                    }
                })
            },
            destroy: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var n = e(this);
                    if (n.data(a)) {
                        var i = n.data(a)
                          , r = i.opt
                          , l = e("#mCSB_" + i.idx)
                          , s = e("#mCSB_" + i.idx + "_container")
                          , c = e(".mCSB_" + i.idx + "_scrollbar");
                        r.live && m(r.liveSelector || e(t).selector),
                        N.call(this, "remove"),
                        k.call(this),
                        B.call(this),
                        n.removeData(a),
                        $(this, "mcs"),
                        c.remove(),
                        s.find("img." + d[2]).removeClass(d[2]),
                        l.replaceWith(s.contents()),
                        n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                    }
                })
            }
        }, f = function() {
            return "object" != typeof e(this) || e(this).length < 1 ? n : this
        }, h = function(t) {
            var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]
              , a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]
              , n = ["minimal", "minimal-dark"]
              , i = ["minimal", "minimal-dark"]
              , r = ["minimal", "minimal-dark"];
            t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength,
            t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar,
            t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable,
            t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar,
            t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
        }, m = function(e) {
            l[e] && (clearTimeout(l[e]),
            $(l, e))
        }, p = function(e) {
            return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
        }, g = function(e) {
            return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
        }, v = function() {
            var t = e(this)
              , n = t.data(a)
              , i = n.opt
              , r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : ""
              , l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"]
              , s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical"
              , c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0]
              , u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
              , f = i.autoHideScrollbar ? " " + d[6] : ""
              , h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
            i.setWidth && t.css("width", i.setWidth),
            i.setHeight && t.css("height", i.setHeight),
            i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft,
            t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
            var m = e("#mCSB_" + n.idx)
              , p = e("#mCSB_" + n.idx + "_container");
            "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)),
            "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"),
            t.css("overflow", "visible"),
            m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c),
            p.wrap(u)),
            w.call(this);
            var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
            g[0].css("min-height", g[0].height()),
            g[1].css("min-width", g[1].width())
        }, x = function(t) {
            var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                return e(this).outerWidth(!0)
            }).get())]
              , a = t.parent().width();
            return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
        }, _ = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e("#mCSB_" + o.idx + "_container");
            if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                i.css({
                    width: "auto",
                    "min-width": 0,
                    "overflow-x": "scroll"
                });
                var r = Math.ceil(i[0].scrollWidth);
                3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                    width: r,
                    "min-width": "100%",
                    "overflow-x": "inherit"
                }) : i.css({
                    "overflow-x": "inherit",
                    position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative"
                }).unwrap()
            }
        }, w = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e(".mCSB_" + o.idx + "_scrollbar:first")
              , r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : ""
              , l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"]
              , s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
            n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
        }, S = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
              , l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)]
              , c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())]
              , d = s && c[1] < c[0] ? c[0] : c[1]
              , u = s && c[3] < c[2] ? c[2] : c[3];
            r[0].css({
                height: d,
                "max-height": r[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": c[0] + "px"
            }),
            r[1].css({
                width: u,
                "max-width": r[1].parent().width() - 10
            })
        }, b = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
              , l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()]
              , s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
            o.scrollRatio = {
                y: s[0],
                x: s[1]
            }
        }, C = function(e, t, o) {
            var a = o ? d[0] + "_expanded" : ""
              , n = e.closest(".mCSB_scrollTools");
            "active" === t ? (e.toggleClass(d[0] + " " + a),
            n.toggleClass(d[1]),
            e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]),
            n.removeClass(d[1])) : (e.addClass(d[0]),
            n.addClass(d[1])))
        }, y = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = null == o.overflowed ? i.height() : i.outerHeight(!1)
              , l = null == o.overflowed ? i.width() : i.outerWidth(!1)
              , s = i[0].scrollHeight
              , c = i[0].scrollWidth;
            return s > r && (r = s),
            c > l && (l = c),
            [r > n.height(), l > n.width()]
        }, B = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e("#mCSB_" + o.idx)
              , r = e("#mCSB_" + o.idx + "_container")
              , l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
            if (Q(t),
            ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0),
            G(t, "_resetY")),
            "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                var s = dx = 0;
                "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1),
                dx = Math.abs(s / o.scrollRatio.x)),
                r.css("left", s),
                l[1].css("left", dx),
                G(t, "_resetX")
            }
        }, T = function() {
            function t() {
                r = setTimeout(function() {
                    e.event.special.mousewheel ? (clearTimeout(r),
                    W.call(o[0])) : t()
                }, 100)
            }
            var o = e(this)
              , n = o.data(a)
              , i = n.opt;
            if (!n.bindEvents) {
                if (I.call(this),
                i.contentTouchScroll && D.call(this),
                E.call(this),
                i.mouseWheel.enable) {
                    var r;
                    t()
                }
                P.call(this),
                U.call(this),
                i.advanced.autoScrollOnFocus && H.call(this),
                i.scrollButtons.enable && F.call(this),
                i.keyboard.enable && q.call(this),
                n.bindEvents = !0
            }
        }, k = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = a + "_" + o.idx
              , r = ".mCSB_" + o.idx + "_scrollbar"
              , l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a")
              , s = e("#mCSB_" + o.idx + "_container");
            n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)),
            n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)),
            o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i),
            l.each(function() {
                e(this).unbind("." + i)
            }),
            clearTimeout(t[0]._focusTimeout),
            $(t[0], "_focusTimeout"),
            clearTimeout(o.sequential.step),
            $(o.sequential, "step"),
            clearTimeout(s[0].onCompleteTimeout),
            $(s[0], "onCompleteTimeout"),
            o.bindEvents = !1)
        }, M = function(t) {
            var o = e(this)
              , n = o.data(a)
              , i = n.opt
              , r = e("#mCSB_" + n.idx + "_container_wrapper")
              , l = r.length ? r : e("#mCSB_" + n.idx + "_container")
              , s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")]
              , c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
            "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"),
            l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"),
            l.removeClass(d[10])) : (s[0].css("display", "none"),
            l.addClass(d[10])),
            l.addClass(d[8]))),
            "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"),
            l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"),
            l.removeClass(d[11])) : (s[1].css("display", "none"),
            l.addClass(d[11])),
            l.addClass(d[9]))),
            n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
        }, O = function(t) {
            var o = t.type
              , a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null
              , n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
            switch (o) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
                return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
                  , r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
            default:
                return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1]
            }
        }, I = function() {
            function t(e, t, a, n) {
                if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0,
                o.attr("id") === f[1])
                    var i = "x"
                      , s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
                else
                    var i = "y"
                      , s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                G(r, s.toString(), {
                    dir: i,
                    drag: !0
                })
            }
            var o, n, i, r = e(this), l = r.data(a), d = l.opt, u = a + "_" + l.idx, f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"], h = e("#mCSB_" + l.idx + "_container"), m = e("#" + f[0] + ",#" + f[1]), p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m, g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
            m.bind("contextmenu." + u, function(e) {
                e.preventDefault()
            }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) {
                if (t.stopImmediatePropagation(),
                t.preventDefault(),
                ee(t)) {
                    c = !0,
                    s && (document.onselectstart = function() {
                        return !1
                    }
                    ),
                    L.call(h, !1),
                    Q(r),
                    o = e(this);
                    var a = o.offset()
                      , l = O(t)[0] - a.top
                      , u = O(t)[1] - a.left
                      , f = o.height() + a.top
                      , m = o.width() + a.left;
                    f > l && l > 0 && m > u && u > 0 && (n = l,
                    i = u),
                    C(o, "active", d.autoExpandScrollbar)
                }
            }).bind("touchmove." + u, function(e) {
                e.stopImmediatePropagation(),
                e.preventDefault();
                var a = o.offset()
                  , r = O(e)[0] - a.top
                  , l = O(e)[1] - a.left;
                t(n, i, r, l)
            }),
            e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) {
                if (o) {
                    var a = o.offset()
                      , r = O(e)[0] - a.top
                      , l = O(e)[1] - a.left;
                    if (n === r && i === l)
                        return;
                    t(n, i, r, l)
                }
            }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() {
                o && (C(o, "active", d.autoExpandScrollbar),
                o = null),
                c = !1,
                s && (document.onselectstart = null),
                L.call(h, !0)
            })
        }, D = function() {
            function o(e) {
                if (!te(e) || c || O(e)[2])
                    return void (t = 0);
                t = 1,
                b = 0,
                C = 0,
                d = 1,
                y.removeClass("mCS_touch_action");
                var o = I.offset();
                u = O(e)[0] - o.top,
                f = O(e)[1] - o.left,
                z = [O(e)[0], O(e)[1]]
            }
            function n(e) {
                if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(),
                e.stopImmediatePropagation(),
                (!C || b) && d)) {
                    g = K();
                    var t = M.offset()
                      , o = O(e)[0] - t.top
                      , a = O(e)[1] - t.left
                      , n = "mcsLinearOut";
                    if (E.push(o),
                    W.push(a),
                    z[2] = Math.abs(O(e)[0] - z[0]),
                    z[3] = Math.abs(O(e)[1] - z[1]),
                    B.overflowed[0])
                        var i = D[0].parent().height() - D[0].height()
                          , r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
                    if (B.overflowed[1])
                        var l = D[1].parent().width() - D[1].width()
                          , h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                    r || h ? (U || e.preventDefault(),
                    b = 1) : (C = 1,
                    y.addClass("mCS_touch_action")),
                    U && e.preventDefault(),
                    w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null],
                    I[0].idleTimer = 250,
                    B.overflowed[0] && s(w[0], R, n, "y", "all", !0),
                    B.overflowed[1] && s(w[1], R, n, "x", L, !0)
                }
            }
            function i(e) {
                if (!te(e) || c || O(e)[2])
                    return void (t = 0);
                t = 1,
                e.stopImmediatePropagation(),
                Q(y),
                p = K();
                var o = M.offset();
                h = O(e)[0] - o.top,
                m = O(e)[1] - o.left,
                E = [],
                W = []
            }
            function r(e) {
                if (te(e) && !c && !O(e)[2]) {
                    d = 0,
                    e.stopImmediatePropagation(),
                    b = 0,
                    C = 0,
                    v = K();
                    var t = M.offset()
                      , o = O(e)[0] - t.top
                      , a = O(e)[1] - t.left;
                    if (!(v - g > 30)) {
                        _ = 1e3 / (v - p);
                        var n = "mcsEaseOut"
                          , i = 2.5 > _
                          , r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                        x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                        var u = [Math.abs(x[0]), Math.abs(x[1])];
                        _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                        var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                        w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null],
                        S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                        var y = parseInt(T.contentTouchScroll) || 0;
                        w[0] = u[0] > y ? w[0] : 0,
                        w[1] = u[1] > y ? w[1] : 0,
                        B.overflowed[0] && s(w[0], S[0], n, "y", L, !1),
                        B.overflowed[1] && s(w[1], S[1], n, "x", L, !1)
                    }
                }
            }
            function l(e, t) {
                var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
            }
            function s(e, t, o, a, n, i) {
                e && G(y, e.toString(), {
                    dur: t,
                    scrollEasing: o,
                    dir: a,
                    overwrite: n,
                    drag: i
                })
            }
            var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this), B = y.data(a), T = B.opt, k = a + "_" + B.idx, M = e("#mCSB_" + B.idx), I = e("#mCSB_" + B.idx + "_container"), D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")], E = [], W = [], R = 0, L = "yx" === T.axis ? "none" : "all", z = [], P = I.find("iframe"), H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k], U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
            I.bind(H[0], function(e) {
                o(e)
            }).bind(H[1], function(e) {
                n(e)
            }),
            M.bind(H[0], function(e) {
                i(e)
            }).bind(H[2], function(e) {
                r(e)
            }),
            P.length && P.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) {
                        o(e),
                        i(e)
                    }).bind(H[1], function(e) {
                        n(e)
                    }).bind(H[2], function(e) {
                        r(e)
                    })
                })
            })
        }, E = function() {
            function o() {
                return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
            }
            function n(e, t, o) {
                d.type = o && i ? "stepped" : "stepless",
                d.scrollAmount = 10,
                j(r, e, t, "mcsLinearOut", o ? 60 : null)
            }
            var i, r = e(this), l = r.data(a), s = l.opt, d = l.sequential, u = a + "_" + l.idx, f = e("#mCSB_" + l.idx + "_container"), h = f.parent();
            f.bind("mousedown." + u, function() {
                t || i || (i = 1,
                c = !0)
            }).add(document).bind("mousemove." + u, function(e) {
                if (!t && i && o()) {
                    var a = f.offset()
                      , r = O(e)[0] - a.top + f[0].offsetTop
                      , c = O(e)[1] - a.left + f[0].offsetLeft;
                    r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)),
                    "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
                }
            }).bind("mouseup." + u + " dragend." + u, function() {
                t || (i && (i = 0,
                n("off", null)),
                c = !1)
            })
        }, W = function() {
            function t(t, a) {
                if (Q(o),
                !z(o, t.target)) {
                    var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100
                      , d = i.scrollInertia;
                    if ("x" === i.axis || "x" === i.mouseWheel.axis)
                        var u = "x"
                          , f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)]
                          , h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0]
                          , m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft)
                          , p = c[1][0].offsetLeft
                          , g = c[1].parent().width() - c[1].width()
                          , v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
                    else
                        var u = "y"
                          , f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)]
                          , h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0]
                          , m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop)
                          , p = c[0][0].offsetTop
                          , g = c[0].parent().height() - c[0].height()
                          , v = t.deltaY || a;
                    "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v),
                    i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1),
                    (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(),
                    t.preventDefault()),
                    t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor,
                    d = 17),
                    G(o, (m - v * h).toString(), {
                        dir: u,
                        dur: d
                    }))
                }
            }
            if (e(this).data(a)) {
                var o = e(this)
                  , n = o.data(a)
                  , i = n.opt
                  , r = a + "_" + n.idx
                  , l = e("#mCSB_" + n.idx)
                  , c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")]
                  , d = e("#mCSB_" + n.idx + "_container").find("iframe");
                d.length && d.each(function() {
                    e(this).bind("load", function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) {
                            t(e, o)
                        })
                    })
                }),
                l.bind("mousewheel." + r, function(e, o) {
                    t(e, o)
                })
            }
        }, R = new Object, A = function(t) {
            var o = !1
              , a = !1
              , n = null;
            if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")),
            a !== !1 && void 0 !== R[a])
                return R[a];
            if (t) {
                try {
                    var i = t.contentDocument || t.contentWindow.document;
                    n = i.body.innerHTML
                } catch (r) {}
                o = null !== n
            } else {
                try {
                    var i = top.document;
                    n = i.body.innerHTML
                } catch (r) {}
                o = null !== n
            }
            return a !== !1 && (R[a] = o),
            o
        }, L = function(e) {
            var t = this.find("iframe");
            if (t.length) {
                var o = e ? "auto" : "none";
                t.css("pointer-events", o)
            }
        }, z = function(t, o) {
            var n = o.nodeName.toLowerCase()
              , i = t.data(a).opt.mouseWheel.disableOver
              , r = ["select", "textarea"];
            return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
        }, P = function() {
            var t, o = e(this), n = o.data(a), i = a + "_" + n.idx, r = e("#mCSB_" + n.idx + "_container"), l = r.parent(), s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
            s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) {
                c = !0,
                e(o.target).hasClass("mCSB_dragger") || (t = 1)
            }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function() {
                c = !1
            }).bind("click." + i, function(a) {
                if (t && (t = 0,
                e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                    Q(o);
                    var i = e(this)
                      , s = i.find(".mCSB_dragger");
                    if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!n.overflowed[1])
                            return;
                        var c = "x"
                          , u = a.pageX > s.offset().left ? -1 : 1
                          , f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
                    } else {
                        if (!n.overflowed[0])
                            return;
                        var c = "y"
                          , u = a.pageY > s.offset().top ? -1 : 1
                          , f = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
                    }
                    G(o, f.toString(), {
                        dir: c,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            })
        }, H = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = a + "_" + o.idx
              , r = e("#mCSB_" + o.idx + "_container")
              , l = r.parent();
            r.bind("focusin." + i, function() {
                var o = e(document.activeElement)
                  , a = r.find(".mCustomScrollBox").length
                  , i = 0;
                o.is(n.advanced.autoScrollOnFocus) && (Q(t),
                clearTimeout(t[0]._focusTimeout),
                t[0]._focusTimer = a ? (i + 17) * a : 0,
                t[0]._focusTimeout = setTimeout(function() {
                    var e = [ae(o)[0], ae(o)[1]]
                      , a = [r[0].offsetTop, r[0].offsetLeft]
                      , s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)]
                      , c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
                    "x" === n.axis || s[0] || G(t, e[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: i
                    }),
                    "y" === n.axis || s[1] || G(t, e[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: i
                    })
                }, t[0]._focusTimer))
            })
        }, U = function() {
            var t = e(this)
              , o = t.data(a)
              , n = a + "_" + o.idx
              , i = e("#mCSB_" + o.idx + "_container").parent();
            i.bind("scroll." + n, function() {
                0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
            })
        }, F = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = o.sequential
              , r = a + "_" + o.idx
              , l = ".mCSB_" + o.idx + "_scrollbar"
              , s = e(l + ">a");
            s.bind("contextmenu." + r, function(e) {
                e.preventDefault()
            }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                function r(e, o) {
                    i.scrollAmount = n.scrollButtons.scrollAmount,
                    j(t, e, o)
                }
                if (a.preventDefault(),
                ee(a)) {
                    var l = e(this).attr("class");
                    switch (i.type = n.scrollButtons.scrollType,
                    a.type) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                        if ("stepped" === i.type)
                            return;
                        c = !0,
                        o.tweenRunning = !1,
                        r("on", l);
                        break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        if ("stepped" === i.type)
                            return;
                        c = !1,
                        i.dir && r("off", l);
                        break;
                    case "click":
                        if ("stepped" !== i.type || o.tweenRunning)
                            return;
                        r("on", l)
                    }
                }
            })
        }, q = function() {
            function t(t) {
                function a(e, t) {
                    r.type = i.keyboard.scrollType,
                    r.scrollAmount = i.keyboard.scrollAmount,
                    "stepped" === r.type && n.tweenRunning || j(o, e, t)
                }
                switch (t.type) {
                case "blur":
                    n.tweenRunning && r.dir && a("off", null);
                    break;
                case "keydown":
                case "keyup":
                    var l = t.keyCode ? t.keyCode : t.which
                      , s = "on";
                    if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                        if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1])
                            return;
                        "keyup" === t.type && (s = "off"),
                        e(document.activeElement).is(u) || (t.preventDefault(),
                        t.stopImmediatePropagation(),
                        a(s, l))
                    } else if (33 === l || 34 === l) {
                        if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(),
                        t.stopImmediatePropagation()),
                        "keyup" === t.type) {
                            Q(o);
                            var f = 34 === l ? -1 : 1;
                            if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                                var h = "x"
                                  , m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());
                            else
                                var h = "y"
                                  , m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                            G(o, m.toString(), {
                                dir: h,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(),
                    t.stopImmediatePropagation()),
                    "keyup" === t.type)) {
                        if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                            var h = "x"
                              , m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                        else
                            var h = "y"
                              , m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                        G(o, m.toString(), {
                            dir: h,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                }
            }
            var o = e(this)
              , n = o.data(a)
              , i = n.opt
              , r = n.sequential
              , l = a + "_" + n.idx
              , s = e("#mCSB_" + n.idx)
              , c = e("#mCSB_" + n.idx + "_container")
              , d = c.parent()
              , u = "input,textarea,select,datalist,keygen,[contenteditable='true']"
              , f = c.find("iframe")
              , h = ["blur." + l + " keydown." + l + " keyup." + l];
            f.length && f.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
                        t(e)
                    })
                })
            }),
            s.attr("tabindex", "0").bind(h[0], function(e) {
                t(e)
            })
        }, j = function(t, o, n, i, r) {
            function l(e) {
                u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                var o = "stepped" !== f.type
                  , a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60
                  , n = e ? o ? 7.5 : 40 : 2.5
                  , s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)]
                  , d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x]
                  , m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n)
                  , v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount)
                  , x = "auto" !== f.scrollAmount ? v : m
                  , _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"
                  , w = !!e;
                return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]),
                G(t, x.toString(), {
                    dir: f.dir[0],
                    scrollEasing: _,
                    dur: a,
                    onComplete: w
                }),
                e ? void (f.dir = !1) : (clearTimeout(f.step),
                void (f.step = setTimeout(function() {
                    l()
                }, a)))
            }
            function s() {
                clearTimeout(f.step),
                $(f, "step"),
                Q(t)
            }
            var c = t.data(a)
              , u = c.opt
              , f = c.sequential
              , h = e("#mCSB_" + c.idx + "_container")
              , m = "stepped" === f.type
              , p = u.scrollInertia < 26 ? 26 : u.scrollInertia
              , g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
            switch (o) {
            case "on":
                if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1],
                Q(t),
                oe(n) && "stepped" === f.type)
                    return;
                l(m);
                break;
            case "off":
                s(),
                (m || c.tweenRunning && f.dir) && l(!0)
            }
        }, Y = function(t) {
            var o = e(this).data(a).opt
              , n = [];
            return "function" == typeof t && (t = t()),
            t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t,
            n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t),
            "function" == typeof n[0] && (n[0] = n[0]()),
            "function" == typeof n[1] && (n[1] = n[1]()),
            n
        }, X = function(t, o) {
            if (null != t && "undefined" != typeof t) {
                var n = e(this)
                  , i = n.data(a)
                  , r = i.opt
                  , l = e("#mCSB_" + i.idx + "_container")
                  , s = l.parent()
                  , c = typeof t;
                o || (o = "x" === r.axis ? "x" : "y");
                var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height()
                  , f = "x" === o ? l[0].offsetLeft : l[0].offsetTop
                  , h = "x" === o ? "left" : "top";
                switch (c) {
                case "function":
                    return t();
                case "object":
                    var m = t.jquery ? t : e(t);
                    if (!m.length)
                        return;
                    return "x" === o ? ae(m)[1] : ae(m)[0];
                case "string":
                case "number":
                    if (oe(t))
                        return Math.abs(t);
                    if (-1 !== t.indexOf("%"))
                        return Math.abs(d * parseInt(t) / 100);
                    if (-1 !== t.indexOf("-="))
                        return Math.abs(f - parseInt(t.split("-=")[1]));
                    if (-1 !== t.indexOf("+=")) {
                        var p = f + parseInt(t.split("+=")[1]);
                        return p >= 0 ? 0 : Math.abs(p)
                    }
                    if (-1 !== t.indexOf("px") && oe(t.split("px")[0]))
                        return Math.abs(t.split("px")[0]);
                    if ("top" === t || "left" === t)
                        return 0;
                    if ("bottom" === t)
                        return Math.abs(s.height() - l.outerHeight(!1));
                    if ("right" === t)
                        return Math.abs(s.width() - l.outerWidth(!1));
                    if ("first" === t || "last" === t) {
                        var m = l.find(":" + t);
                        return "x" === o ? ae(m)[1] : ae(m)[0]
                    }
                    return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t),
                    void u.update.call(null, n[0]))
                }
            }
        }, N = function(t) {
            function o() {
                return clearTimeout(f[0].autoUpdate),
                0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function() {
                    return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(),
                    s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n,
                    void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth,
                    s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n,
                    void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length,
                    s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n,
                    void f.find("img").each(function() {
                        n(this)
                    }))
                }, c.advanced.autoUpdateTimeout))
            }
            function n(t) {
                function o(e, t) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function a() {
                    this.onload = null,
                    e(t).addClass(d[2]),
                    r(2)
                }
                if (e(t).hasClass(d[2]))
                    return void r();
                var n = new Image;
                n.onload = o(n, a),
                n.src = t.src
            }
            function i() {
                c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                var e = 0
                  , t = f.find(c.advanced.updateOnSelectorChange);
                return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
                    e += this.offsetHeight + this.offsetWidth
                }),
                e
            }
            function r(e) {
                clearTimeout(f[0].autoUpdate),
                u.update.call(null, l[0], e)
            }
            var l = e(this)
              , s = l.data(a)
              , c = s.opt
              , f = e("#mCSB_" + s.idx + "_container");
            return t ? (clearTimeout(f[0].autoUpdate),
            void $(f[0], "autoUpdate")) : void o()
        }, V = function(e, t, o) {
            return Math.round(e / t) * t - o
        }, Q = function(t) {
            var o = t.data(a)
              , n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
            n.each(function() {
                Z.call(this)
            })
        }, G = function(t, o, n) {
            function i(e) {
                return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
            }
            function r() {
                return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w]
            }
            function l() {
                var e = [h[0].offsetTop, h[0].offsetLeft]
                  , o = [x[0].offsetTop, x[0].offsetLeft]
                  , a = [h.outerHeight(!1), h.outerWidth(!1)]
                  , i = [f.height(), f.width()];
                t[0].mcs = {
                    content: h,
                    top: e[0],
                    left: e[1],
                    draggerTop: o[0],
                    draggerLeft: o[1],
                    topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                    leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                    direction: n.dir
                }
            }
            var s = t.data(a)
              , c = s.opt
              , d = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: c.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            }
              , n = e.extend(d, n)
              , u = [n.dur, n.drag ? 0 : n.dur]
              , f = e("#mCSB_" + s.idx)
              , h = e("#mCSB_" + s.idx + "_container")
              , m = h.parent()
              , p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0]
              , g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
            if (s.trigger = n.trigger,
            0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"),
            m.scrollTop(0).scrollLeft(0)),
            "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]),
            s.contentReset.y = 1),
            "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]),
            s.contentReset.x = 1),
            "_resetY" !== o && "_resetX" !== o) {
                if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]),
                s.contentReset.x = null),
                !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]),
                s.contentReset.x = null),
                c.snapAmount) {
                    var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                    o = V(o, v, c.snapOffset)
                }
                switch (n.dir) {
                case "x":
                    var x = e("#mCSB_" + s.idx + "_dragger_horizontal")
                      , _ = "left"
                      , w = h[0].offsetLeft
                      , S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()]
                      , b = [o, 0 === o ? 0 : o / s.scrollRatio.x]
                      , y = p[1]
                      , B = g[1]
                      , T = y > 0 ? y / s.scrollRatio.x : 0
                      , k = B > 0 ? B / s.scrollRatio.x : 0;
                    break;
                case "y":
                    var x = e("#mCSB_" + s.idx + "_dragger_vertical")
                      , _ = "top"
                      , w = h[0].offsetTop
                      , S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()]
                      , b = [o, 0 === o ? 0 : o / s.scrollRatio.y]
                      , y = p[0]
                      , B = g[0]
                      , T = y > 0 ? y / s.scrollRatio.y : 0
                      , k = B > 0 ? B / s.scrollRatio.y : 0
                }
                b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0],
                t[0].mcs || (l(),
                i("onInit") && c.callbacks.onInit.call(t[0])),
                clearTimeout(h[0].onCompleteTimeout),
                J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing),
                !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                    onStart: function() {
                        n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(),
                        c.callbacks.onScrollStart.call(t[0])),
                        s.tweenRunning = !0,
                        C(x),
                        s.cbOffsets = r())
                    },
                    onUpdate: function() {
                        n.callbacks && n.onUpdate && i("whileScrolling") && (l(),
                        c.callbacks.whileScrolling.call(t[0]))
                    },
                    onComplete: function() {
                        if (n.callbacks && n.onComplete) {
                            "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                            var e = h[0].idleTimer || 0;
                            h[0].onCompleteTimeout = setTimeout(function() {
                                i("onScroll") && (l(),
                                c.callbacks.onScroll.call(t[0])),
                                i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(),
                                c.callbacks.onTotalScroll.call(t[0])),
                                i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(),
                                c.callbacks.onTotalScrollBack.call(t[0])),
                                s.tweenRunning = !1,
                                h[0].idleTimer = 0,
                                C(x, "hide")
                            }, e)
                        }
                    }
                })
            }
        }, J = function(e, t, o, a, n, i, r) {
            function l() {
                S.stop || (x || m.call(),
                x = K() - v,
                s(),
                x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1,
                S.time < x + 1 && (S.time = x + 1)),
                S.time < a ? S.id = h(l) : g.call())
            }
            function s() {
                a > 0 ? (S.currVal = u(S.time, _, b, a, n),
                w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px",
                p.call()
            }
            function c() {
                f = 1e3 / 60,
                S.time = x + f,
                h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                    return s(),
                    setTimeout(e, .01)
                }
                ,
                S.id = h(l)
            }
            function d() {
                null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id),
                S.id = null)
            }
            function u(e, t, o, a, n) {
                switch (n) {
                case "linear":
                case "mcsLinear":
                    return o * e / a + t;
                case "mcsLinearOut":
                    return e /= a,
                    e--,
                    o * Math.sqrt(1 - e * e) + t;
                case "easeInOutSmooth":
                    return e /= a / 2,
                    1 > e ? o / 2 * e * e + t : (e--,
                    -o / 2 * (e * (e - 2) - 1) + t);
                case "easeInOutStrong":
                    return e /= a / 2,
                    1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--,
                    o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                case "easeInOut":
                case "mcsEaseInOut":
                    return e /= a / 2,
                    1 > e ? o / 2 * e * e * e + t : (e -= 2,
                    o / 2 * (e * e * e + 2) + t);
                case "easeOutSmooth":
                    return e /= a,
                    e--,
                    -o * (e * e * e * e - 1) + t;
                case "easeOutStrong":
                    return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                case "easeOut":
                case "mcsEaseOut":
                default:
                    var i = (e /= a) * e
                      , r = i * e;
                    return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                }
            }
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            var f, h, r = r || {}, m = r.onStart || function() {}
            , p = r.onUpdate || function() {}
            , g = r.onComplete || function() {}
            , v = K(), x = 0, _ = e.offsetTop, w = e.style, S = e._mTween[t];
            "left" === t && (_ = e.offsetLeft);
            var b = o - _;
            S.stop = 0,
            "none" !== i && d(),
            c()
        }, K = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        }, Z = function() {
            var e = this;
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                var a = t[o];
                e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id),
                e._mTween[a].id = null,
                e._mTween[a].stop = 1)
            }
        }, $ = function(e, t) {
            try {
                delete e[t]
            } catch (o) {
                e[t] = null
            }
        }, ee = function(e) {
            return !(e.which && 1 !== e.which)
        }, te = function(e) {
            var t = e.originalEvent.pointerType;
            return !(t && "touch" !== t && 2 !== t)
        }, oe = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, ae = function(e) {
            var t = e.parents(".mCSB_container");
            return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
        }, ne = function() {
            function e() {
                var e = ["webkit", "moz", "ms", "o"];
                if ("hidden"in document)
                    return "hidden";
                for (var t = 0; t < e.length; t++)
                    if (e[t] + "Hidden"in document)
                        return e[t] + "Hidden";
                return null
            }
            var t = e();
            return t ? document[t] : !1
        };
        e.fn[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }
        ,
        e[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }
        ,
        e[o].defaults = i,
        window[o] = !0,
        e(window).bind("load", function() {
            e(n)[o](),
            e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var o, a, n = e(t), i = n.parents(".mCSB_container");
                    if (i.length)
                        return o = i.parent(),
                        a = [i[0].offsetTop, i[0].offsetLeft],
                        a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1)
                }
                ,
                mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) {
                    var n, i, r, l, s = e(t), c = s.parents(".mCSB_container"), d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                    if (c.length)
                        return n = [s.outerHeight(!1), s.outerWidth(!1)],
                        r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]],
                        i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth],
                        l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]],
                        r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
                }
                ,
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var o = e(t).data(a);
                    if (o)
                        return o.overflowed[0] || o.overflowed[1]
                }
            })
        })
    })
});
/*!
 * ProgressBar
 * Version: 1.0.1
 * Website: https://kimmobrunfeldt.github.io/progressbar.js
 */
!function(a) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = a();
    else if ("function" == typeof define && define.amd)
        define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        b.ProgressBar = a()
    }
}(function() {
    var a;
    return function b(a, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!a[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i)
                        return i(g, !0);
                    if (f)
                        return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND",
                    j
                }
                var k = c[g] = {
                    exports: {}
                };
                a[g][0].call(k.exports, function(b) {
                    var c = a[g][1][b];
                    return e(c ? c : b)
                }, k, k.exports, b, a, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
            e(d[g]);
        return e
    }({
        1: [function(b, c, d) {
            (function() {
                var b = this || Function("return this")()
                  , e = function() {
                    "use strict";
                    function e() {}
                    function f(a, b) {
                        var c;
                        for (c in a)
                            Object.hasOwnProperty.call(a, c) && b(c)
                    }
                    function g(a, b) {
                        return f(b, function(c) {
                            a[c] = b[c]
                        }),
                        a
                    }
                    function h(a, b) {
                        f(b, function(c) {
                            "undefined" == typeof a[c] && (a[c] = b[c])
                        })
                    }
                    function i(a, b, c, d, e, f, g) {
                        var h, i, k, l = f > a ? 0 : (a - f) / e;
                        for (h in b)
                            b.hasOwnProperty(h) && (i = g[h],
                            k = "function" == typeof i ? i : o[i],
                            b[h] = j(c[h], d[h], k, l));
                        return b
                    }
                    function j(a, b, c, d) {
                        return a + (b - a) * c(d)
                    }
                    function k(a, b) {
                        var c = n.prototype.filter
                          , d = a._filterArgs;
                        f(c, function(e) {
                            "undefined" != typeof c[e][b] && c[e][b].apply(a, d)
                        })
                    }
                    function l(a, b, c, d, e, f, g, h, j, l, m) {
                        v = b + c + d,
                        w = Math.min(m || u(), v),
                        x = w >= v,
                        y = d - (v - w),
                        a.isPlaying() && (x ? (j(g, a._attachment, y),
                        a.stop(!0)) : (a._scheduleId = l(a._timeoutHandler, s),
                        k(a, "beforeTween"),
                        b + c > w ? i(1, e, f, g, 1, 1, h) : i(w, e, f, g, d, b + c, h),
                        k(a, "afterTween"),
                        j(e, a._attachment, y)))
                    }
                    function m(a, b) {
                        var c = {}
                          , d = typeof b;
                        return "string" === d || "function" === d ? f(a, function(a) {
                            c[a] = b
                        }) : f(a, function(a) {
                            c[a] || (c[a] = b[a] || q)
                        }),
                        c
                    }
                    function n(a, b) {
                        this._currentState = a || {},
                        this._configured = !1,
                        this._scheduleFunction = p,
                        "undefined" != typeof b && this.setConfig(b)
                    }
                    var o, p, q = "linear", r = 500, s = 1e3 / 60, t = Date.now ? Date.now : function() {
                        return +new Date
                    }
                    , u = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : t;
                    p = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;
                    var v, w, x, y;
                    return n.prototype.tween = function(a) {
                        return this._isTweening ? this : (void 0 === a && this._configured || this.setConfig(a),
                        this._timestamp = u(),
                        this._start(this.get(), this._attachment),
                        this.resume())
                    }
                    ,
                    n.prototype.setConfig = function(a) {
                        a = a || {},
                        this._configured = !0,
                        this._attachment = a.attachment,
                        this._pausedAtTime = null,
                        this._scheduleId = null,
                        this._delay = a.delay || 0,
                        this._start = a.start || e,
                        this._step = a.step || e,
                        this._finish = a.finish || e,
                        this._duration = a.duration || r,
                        this._currentState = g({}, a.from) || this.get(),
                        this._originalState = this.get(),
                        this._targetState = g({}, a.to) || this.get();
                        var b = this;
                        this._timeoutHandler = function() {
                            l(b, b._timestamp, b._delay, b._duration, b._currentState, b._originalState, b._targetState, b._easing, b._step, b._scheduleFunction)
                        }
                        ;
                        var c = this._currentState
                          , d = this._targetState;
                        return h(d, c),
                        this._easing = m(c, a.easing || q),
                        this._filterArgs = [c, this._originalState, d, this._easing],
                        k(this, "tweenCreated"),
                        this
                    }
                    ,
                    n.prototype.get = function() {
                        return g({}, this._currentState)
                    }
                    ,
                    n.prototype.set = function(a) {
                        this._currentState = a
                    }
                    ,
                    n.prototype.pause = function() {
                        return this._pausedAtTime = u(),
                        this._isPaused = !0,
                        this
                    }
                    ,
                    n.prototype.resume = function() {
                        return this._isPaused && (this._timestamp += u() - this._pausedAtTime),
                        this._isPaused = !1,
                        this._isTweening = !0,
                        this._timeoutHandler(),
                        this
                    }
                    ,
                    n.prototype.seek = function(a) {
                        a = Math.max(a, 0);
                        var b = u();
                        return this._timestamp + a === 0 ? this : (this._timestamp = b - a,
                        this.isPlaying() || (this._isTweening = !0,
                        this._isPaused = !1,
                        l(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, b),
                        this.pause()),
                        this)
                    }
                    ,
                    n.prototype.stop = function(a) {
                        return this._isTweening = !1,
                        this._isPaused = !1,
                        this._timeoutHandler = e,
                        (b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.oCancelAnimationFrame || b.msCancelAnimationFrame || b.mozCancelRequestAnimationFrame || b.clearTimeout)(this._scheduleId),
                        a && (k(this, "beforeTween"),
                        i(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing),
                        k(this, "afterTween"),
                        k(this, "afterTweenEnd"),
                        this._finish.call(this, this._currentState, this._attachment)),
                        this
                    }
                    ,
                    n.prototype.isPlaying = function() {
                        return this._isTweening && !this._isPaused
                    }
                    ,
                    n.prototype.setScheduleFunction = function(a) {
                        this._scheduleFunction = a
                    }
                    ,
                    n.prototype.dispose = function() {
                        var a;
                        for (a in this)
                            this.hasOwnProperty(a) && delete this[a]
                    }
                    ,
                    n.prototype.filter = {},
                    n.prototype.formula = {
                        linear: function(a) {
                            return a
                        }
                    },
                    o = n.prototype.formula,
                    g(n, {
                        now: u,
                        each: f,
                        tweenProps: i,
                        tweenProp: j,
                        applyFilter: k,
                        shallowCopy: g,
                        defaults: h,
                        composeEasingObject: m
                    }),
                    "function" == typeof SHIFTY_DEBUG_NOW && (b.timeoutHandler = l),
                    "object" == typeof d ? c.exports = n : "function" == typeof a && a.amd ? a(function() {
                        return n
                    }) : "undefined" == typeof b.Tweenable && (b.Tweenable = n),
                    n
                }();
                !function() {
                    e.shallowCopy(e.prototype.formula, {
                        easeInQuad: function(a) {
                            return Math.pow(a, 2)
                        },
                        easeOutQuad: function(a) {
                            return -(Math.pow(a - 1, 2) - 1)
                        },
                        easeInOutQuad: function(a) {
                            return (a /= .5) < 1 ? .5 * Math.pow(a, 2) : -.5 * ((a -= 2) * a - 2)
                        },
                        easeInCubic: function(a) {
                            return Math.pow(a, 3)
                        },
                        easeOutCubic: function(a) {
                            return Math.pow(a - 1, 3) + 1
                        },
                        easeInOutCubic: function(a) {
                            return (a /= .5) < 1 ? .5 * Math.pow(a, 3) : .5 * (Math.pow(a - 2, 3) + 2)
                        },
                        easeInQuart: function(a) {
                            return Math.pow(a, 4)
                        },
                        easeOutQuart: function(a) {
                            return -(Math.pow(a - 1, 4) - 1)
                        },
                        easeInOutQuart: function(a) {
                            return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
                        },
                        easeInQuint: function(a) {
                            return Math.pow(a, 5)
                        },
                        easeOutQuint: function(a) {
                            return Math.pow(a - 1, 5) + 1
                        },
                        easeInOutQuint: function(a) {
                            return (a /= .5) < 1 ? .5 * Math.pow(a, 5) : .5 * (Math.pow(a - 2, 5) + 2)
                        },
                        easeInSine: function(a) {
                            return -Math.cos(a * (Math.PI / 2)) + 1
                        },
                        easeOutSine: function(a) {
                            return Math.sin(a * (Math.PI / 2))
                        },
                        easeInOutSine: function(a) {
                            return -.5 * (Math.cos(Math.PI * a) - 1)
                        },
                        easeInExpo: function(a) {
                            return 0 === a ? 0 : Math.pow(2, 10 * (a - 1))
                        },
                        easeOutExpo: function(a) {
                            return 1 === a ? 1 : -Math.pow(2, -10 * a) + 1
                        },
                        easeInOutExpo: function(a) {
                            return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
                        },
                        easeInCirc: function(a) {
                            return -(Math.sqrt(1 - a * a) - 1)
                        },
                        easeOutCirc: function(a) {
                            return Math.sqrt(1 - Math.pow(a - 1, 2))
                        },
                        easeInOutCirc: function(a) {
                            return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                        },
                        easeOutBounce: function(a) {
                            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                        },
                        easeInBack: function(a) {
                            var b = 1.70158;
                            return a * a * ((b + 1) * a - b)
                        },
                        easeOutBack: function(a) {
                            var b = 1.70158;
                            return (a -= 1) * a * ((b + 1) * a + b) + 1
                        },
                        easeInOutBack: function(a) {
                            var b = 1.70158;
                            return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                        },
                        elastic: function(a) {
                            return -1 * Math.pow(4, -8 * a) * Math.sin((6 * a - 1) * (2 * Math.PI) / 2) + 1
                        },
                        swingFromTo: function(a) {
                            var b = 1.70158;
                            return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                        },
                        swingFrom: function(a) {
                            var b = 1.70158;
                            return a * a * ((b + 1) * a - b)
                        },
                        swingTo: function(a) {
                            var b = 1.70158;
                            return (a -= 1) * a * ((b + 1) * a + b) + 1
                        },
                        bounce: function(a) {
                            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                        },
                        bouncePast: function(a) {
                            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                        },
                        easeFromTo: function(a) {
                            return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
                        },
                        easeFrom: function(a) {
                            return Math.pow(a, 4)
                        },
                        easeTo: function(a) {
                            return Math.pow(a, .25)
                        }
                    })
                }(),
                function() {
                    function a(a, b, c, d, e, f) {
                        function g(a) {
                            return ((n * a + o) * a + p) * a
                        }
                        function h(a) {
                            return ((q * a + r) * a + s) * a
                        }
                        function i(a) {
                            return (3 * n * a + 2 * o) * a + p
                        }
                        function j(a) {
                            return 1 / (200 * a)
                        }
                        function k(a, b) {
                            return h(m(a, b))
                        }
                        function l(a) {
                            return a >= 0 ? a : 0 - a
                        }
                        function m(a, b) {
                            var c, d, e, f, h, j;
                            for (e = a,
                            j = 0; 8 > j; j++) {
                                if (f = g(e) - a,
                                l(f) < b)
                                    return e;
                                if (h = i(e),
                                l(h) < 1e-6)
                                    break;
                                e -= f / h
                            }
                            if (c = 0,
                            d = 1,
                            e = a,
                            c > e)
                                return c;
                            if (e > d)
                                return d;
                            for (; d > c; ) {
                                if (f = g(e),
                                l(f - a) < b)
                                    return e;
                                a > f ? c = e : d = e,
                                e = .5 * (d - c) + c
                            }
                            return e
                        }
                        var n = 0
                          , o = 0
                          , p = 0
                          , q = 0
                          , r = 0
                          , s = 0;
                        return p = 3 * b,
                        o = 3 * (d - b) - p,
                        n = 1 - p - o,
                        s = 3 * c,
                        r = 3 * (e - c) - s,
                        q = 1 - s - r,
                        k(a, j(f))
                    }
                    function b(b, c, d, e) {
                        return function(f) {
                            return a(f, b, c, d, e, 1)
                        }
                    }
                    e.setBezierFunction = function(a, c, d, f, g) {
                        var h = b(c, d, f, g);
                        return h.displayName = a,
                        h.x1 = c,
                        h.y1 = d,
                        h.x2 = f,
                        h.y2 = g,
                        e.prototype.formula[a] = h
                    }
                    ,
                    e.unsetBezierFunction = function(a) {
                        delete e.prototype.formula[a]
                    }
                }(),
                function() {
                    function a(a, b, c, d, f, g) {
                        return e.tweenProps(d, b, a, c, 1, g, f)
                    }
                    var b = new e;
                    b._filterArgs = [],
                    e.interpolate = function(c, d, f, g, h) {
                        var i = e.shallowCopy({}, c)
                          , j = h || 0
                          , k = e.composeEasingObject(c, g || "linear");
                        b.set({});
                        var l = b._filterArgs;
                        l.length = 0,
                        l[0] = i,
                        l[1] = c,
                        l[2] = d,
                        l[3] = k,
                        e.applyFilter(b, "tweenCreated"),
                        e.applyFilter(b, "beforeTween");
                        var m = a(c, i, d, f, k, j);
                        return e.applyFilter(b, "afterTween"),
                        m
                    }
                }(),
                function(a) {
                    function b(a, b) {
                        var c, d = [], e = a.length;
                        for (c = 0; e > c; c++)
                            d.push("_" + b + "_" + c);
                        return d
                    }
                    function c(a) {
                        var b = a.match(v);
                        return b ? (1 === b.length || a[0].match(u)) && b.unshift("") : b = ["", ""],
                        b.join(A)
                    }
                    function d(b) {
                        a.each(b, function(a) {
                            var c = b[a];
                            "string" == typeof c && c.match(z) && (b[a] = e(c))
                        })
                    }
                    function e(a) {
                        return i(z, a, f)
                    }
                    function f(a) {
                        var b = g(a);
                        return "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")"
                    }
                    function g(a) {
                        return a = a.replace(/#/, ""),
                        3 === a.length && (a = a.split(""),
                        a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]),
                        B[0] = h(a.substr(0, 2)),
                        B[1] = h(a.substr(2, 2)),
                        B[2] = h(a.substr(4, 2)),
                        B
                    }
                    function h(a) {
                        return parseInt(a, 16)
                    }
                    function i(a, b, c) {
                        var d = b.match(a)
                          , e = b.replace(a, A);
                        if (d)
                            for (var f, g = d.length, h = 0; g > h; h++)
                                f = d.shift(),
                                e = e.replace(A, c(f));
                        return e
                    }
                    function j(a) {
                        return i(x, a, k)
                    }
                    function k(a) {
                        for (var b = a.match(w), c = b.length, d = a.match(y)[0], e = 0; c > e; e++)
                            d += parseInt(b[e], 10) + ",";
                        return d = d.slice(0, -1) + ")"
                    }
                    function l(d) {
                        var e = {};
                        return a.each(d, function(a) {
                            var f = d[a];
                            if ("string" == typeof f) {
                                var g = r(f);
                                e[a] = {
                                    formatString: c(f),
                                    chunkNames: b(g, a)
                                }
                            }
                        }),
                        e
                    }
                    function m(b, c) {
                        a.each(c, function(a) {
                            for (var d = b[a], e = r(d), f = e.length, g = 0; f > g; g++)
                                b[c[a].chunkNames[g]] = +e[g];
                            delete b[a]
                        })
                    }
                    function n(b, c) {
                        a.each(c, function(a) {
                            var d = b[a]
                              , e = o(b, c[a].chunkNames)
                              , f = p(e, c[a].chunkNames);
                            d = q(c[a].formatString, f),
                            b[a] = j(d)
                        })
                    }
                    function o(a, b) {
                        for (var c, d = {}, e = b.length, f = 0; e > f; f++)
                            c = b[f],
                            d[c] = a[c],
                            delete a[c];
                        return d
                    }
                    function p(a, b) {
                        C.length = 0;
                        for (var c = b.length, d = 0; c > d; d++)
                            C.push(a[b[d]]);
                        return C
                    }
                    function q(a, b) {
                        for (var c = a, d = b.length, e = 0; d > e; e++)
                            c = c.replace(A, +b[e].toFixed(4));
                        return c
                    }
                    function r(a) {
                        return a.match(w)
                    }
                    function s(b, c) {
                        a.each(c, function(a) {
                            var d, e = c[a], f = e.chunkNames, g = f.length, h = b[a];
                            if ("string" == typeof h) {
                                var i = h.split(" ")
                                  , j = i[i.length - 1];
                                for (d = 0; g > d; d++)
                                    b[f[d]] = i[d] || j
                            } else
                                for (d = 0; g > d; d++)
                                    b[f[d]] = h;
                            delete b[a]
                        })
                    }
                    function t(b, c) {
                        a.each(c, function(a) {
                            var d = c[a]
                              , e = d.chunkNames
                              , f = e.length
                              , g = b[e[0]]
                              , h = typeof g;
                            if ("string" === h) {
                                for (var i = "", j = 0; f > j; j++)
                                    i += " " + b[e[j]],
                                    delete b[e[j]];
                                b[a] = i.substr(1)
                            } else
                                b[a] = g
                        })
                    }
                    var u = /(\d|\-|\.)/
                      , v = /([^\-0-9\.]+)/g
                      , w = /[0-9.\-]+/g
                      , x = new RegExp("rgb\\(" + w.source + /,\s*/.source + w.source + /,\s*/.source + w.source + "\\)","g")
                      , y = /^.*\(/
                      , z = /#([0-9]|[a-f]){3,6}/gi
                      , A = "VAL"
                      , B = []
                      , C = [];
                    a.prototype.filter.token = {
                        tweenCreated: function(a, b, c, e) {
                            d(a),
                            d(b),
                            d(c),
                            this._tokenData = l(a)
                        },
                        beforeTween: function(a, b, c, d) {
                            s(d, this._tokenData),
                            m(a, this._tokenData),
                            m(b, this._tokenData),
                            m(c, this._tokenData)
                        },
                        afterTween: function(a, b, c, d) {
                            n(a, this._tokenData),
                            n(b, this._tokenData),
                            n(c, this._tokenData),
                            t(d, this._tokenData)
                        }
                    }
                }(e)
            }
            ).call(null)
        }
        , {}],
        2: [function(a, b, c) {
            var d = a("./shape")
              , e = a("./utils")
              , f = function(a, b) {
                this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",
                this.containerAspectRatio = 1,
                d.apply(this, arguments)
            };
            f.prototype = new d,
            f.prototype.constructor = f,
            f.prototype._pathString = function(a) {
                var b = a.strokeWidth;
                a.trailWidth && a.trailWidth > a.strokeWidth && (b = a.trailWidth);
                var c = 50 - b / 2;
                return e.render(this._pathTemplate, {
                    radius: c,
                    "2radius": 2 * c
                })
            }
            ,
            f.prototype._trailString = function(a) {
                return this._pathString(a)
            }
            ,
            b.exports = f
        }
        , {
            "./shape": 7,
            "./utils": 8
        }],
        3: [function(a, b, c) {
            var d = a("./shape")
              , e = a("./utils")
              , f = function(a, b) {
                this._pathTemplate = "M 0,{center} L 100,{center}",
                d.apply(this, arguments)
            };
            f.prototype = new d,
            f.prototype.constructor = f,
            f.prototype._initializeSvg = function(a, b) {
                a.setAttribute("viewBox", "0 0 100 " + b.strokeWidth),
                a.setAttribute("preserveAspectRatio", "none")
            }
            ,
            f.prototype._pathString = function(a) {
                return e.render(this._pathTemplate, {
                    center: a.strokeWidth / 2
                })
            }
            ,
            f.prototype._trailString = function(a) {
                return this._pathString(a)
            }
            ,
            b.exports = f
        }
        , {
            "./shape": 7,
            "./utils": 8
        }],
        4: [function(a, b, c) {
            b.exports = {
                Line: a("./line"),
                Circle: a("./circle"),
                SemiCircle: a("./semicircle"),
                Path: a("./path"),
                Shape: a("./shape"),
                utils: a("./utils")
            }
        }
        , {
            "./circle": 2,
            "./line": 3,
            "./path": 5,
            "./semicircle": 6,
            "./shape": 7,
            "./utils": 8
        }],
        5: [function(a, b, c) {
            var d = a("shifty")
              , e = a("./utils")
              , f = {
                easeIn: "easeInCubic",
                easeOut: "easeOutCubic",
                easeInOut: "easeInOutCubic"
            }
              , g = function h(a, b) {
                if (!(this instanceof h))
                    throw new Error("Constructor was called without new keyword");
                b = e.extend({
                    duration: 800,
                    easing: "linear",
                    from: {},
                    to: {},
                    step: function() {}
                }, b);
                var c;
                c = e.isString(a) ? document.querySelector(a) : a,
                this.path = c,
                this._opts = b,
                this._tweenable = null;
                var d = this.path.getTotalLength();
                this.path.style.strokeDasharray = d + " " + d,
                this.set(0)
            };
            g.prototype.value = function() {
                var a = this._getComputedDashOffset()
                  , b = this.path.getTotalLength()
                  , c = 1 - a / b;
                return parseFloat(c.toFixed(6), 10)
            }
            ,
            g.prototype.set = function(a) {
                this.stop(),
                this.path.style.strokeDashoffset = this._progressToOffset(a);
                var b = this._opts.step;
                if (e.isFunction(b)) {
                    var c = this._easing(this._opts.easing)
                      , d = this._calculateTo(a, c)
                      , f = this._opts.shape || this;
                    b(d, f, this._opts.attachment)
                }
            }
            ,
            g.prototype.stop = function() {
                this._stopTween(),
                this.path.style.strokeDashoffset = this._getComputedDashOffset()
            }
            ,
            g.prototype.animate = function(a, b, c) {
                b = b || {},
                e.isFunction(b) && (c = b,
                b = {});
                var f = e.extend({}, b)
                  , g = e.extend({}, this._opts);
                b = e.extend(g, b);
                var h = this._easing(b.easing)
                  , i = this._resolveFromAndTo(a, h, f);
                this.stop(),
                this.path.getBoundingClientRect();
                var j = this._getComputedDashOffset()
                  , k = this._progressToOffset(a)
                  , l = this;
                this._tweenable = new d,
                this._tweenable.tween({
                    from: e.extend({
                        offset: j
                    }, i.from),
                    to: e.extend({
                        offset: k
                    }, i.to),
                    duration: b.duration,
                    easing: h,
                    step: function(a) {
                        l.path.style.strokeDashoffset = a.offset;
                        var c = b.shape || l;
                        b.step(a, c, b.attachment)
                    },
                    finish: function(a) {
                        e.isFunction(c) && c()
                    }
                })
            }
            ,
            g.prototype._getComputedDashOffset = function() {
                var a = window.getComputedStyle(this.path, null);
                return parseFloat(a.getPropertyValue("stroke-dashoffset"), 10)
            }
            ,
            g.prototype._progressToOffset = function(a) {
                var b = this.path.getTotalLength();
                return b - a * b
            }
            ,
            g.prototype._resolveFromAndTo = function(a, b, c) {
                return c.from && c.to ? {
                    from: c.from,
                    to: c.to
                } : {
                    from: this._calculateFrom(b),
                    to: this._calculateTo(a, b)
                }
            }
            ,
            g.prototype._calculateFrom = function(a) {
                return d.interpolate(this._opts.from, this._opts.to, this.value(), a)
            }
            ,
            g.prototype._calculateTo = function(a, b) {
                return d.interpolate(this._opts.from, this._opts.to, a, b)
            }
            ,
            g.prototype._stopTween = function() {
                null !== this._tweenable && (this._tweenable.stop(),
                this._tweenable = null)
            }
            ,
            g.prototype._easing = function(a) {
                return f.hasOwnProperty(a) ? f[a] : a
            }
            ,
            b.exports = g
        }
        , {
            "./utils": 8,
            shifty: 1
        }],
        6: [function(a, b, c) {
            var d = a("./shape")
              , e = a("./circle")
              , f = a("./utils")
              , g = function(a, b) {
                this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",
                this.containerAspectRatio = 2,
                d.apply(this, arguments)
            };
            g.prototype = new d,
            g.prototype.constructor = g,
            g.prototype._initializeSvg = function(a, b) {
                a.setAttribute("viewBox", "0 0 100 50")
            }
            ,
            g.prototype._initializeTextContainer = function(a, b, c) {
                a.text.style && (c.style.top = "auto",
                c.style.bottom = "0",
                a.text.alignToBottom ? f.setStyle(c, "transform", "translate(-50%, 0)") : f.setStyle(c, "transform", "translate(-50%, 50%)"))
            }
            ,
            g.prototype._pathString = e.prototype._pathString,
            g.prototype._trailString = e.prototype._trailString,
            b.exports = g
        }
        , {
            "./circle": 2,
            "./shape": 7,
            "./utils": 8
        }],
        7: [function(a, b, c) {
            var d = a("./path")
              , e = a("./utils")
              , f = "Object is destroyed"
              , g = function h(a, b) {
                if (!(this instanceof h))
                    throw new Error("Constructor was called without new keyword");
                if (0 !== arguments.length) {
                    this._opts = e.extend({
                        color: "#555",
                        strokeWidth: 1,
                        trailColor: null,
                        trailWidth: null,
                        fill: null,
                        text: {
                            style: {
                                color: null,
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                padding: 0,
                                margin: 0,
                                transform: {
                                    prefix: !0,
                                    value: "translate(-50%, -50%)"
                                }
                            },
                            autoStyleContainer: !0,
                            alignToBottom: !0,
                            value: null,
                            className: "progressbar-text"
                        },
                        svgStyle: {
                            display: "block",
                            width: "100%"
                        },
                        warnings: !1
                    }, b, !0),
                    e.isObject(b) && void 0 !== b.svgStyle && (this._opts.svgStyle = b.svgStyle),
                    e.isObject(b) && e.isObject(b.text) && void 0 !== b.text.style && (this._opts.text.style = b.text.style);
                    var c, f = this._createSvgView(this._opts);
                    if (c = e.isString(a) ? document.querySelector(a) : a,
                    !c)
                        throw new Error("Container does not exist: " + a);
                    this._container = c,
                    this._container.appendChild(f.svg),
                    this._opts.warnings && this._warnContainerAspectRatio(this._container),
                    this._opts.svgStyle && e.setStyles(f.svg, this._opts.svgStyle),
                    this.svg = f.svg,
                    this.path = f.path,
                    this.trail = f.trail,
                    this.text = null;
                    var g = e.extend({
                        attachment: void 0,
                        shape: this
                    }, this._opts);
                    this._progressPath = new d(f.path,g),
                    e.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
                }
            };
            g.prototype.animate = function(a, b, c) {
                if (null === this._progressPath)
                    throw new Error(f);
                this._progressPath.animate(a, b, c)
            }
            ,
            g.prototype.stop = function() {
                if (null === this._progressPath)
                    throw new Error(f);
                void 0 !== this._progressPath && this._progressPath.stop()
            }
            ,
            g.prototype.destroy = function() {
                if (null === this._progressPath)
                    throw new Error(f);
                this.stop(),
                this.svg.parentNode.removeChild(this.svg),
                this.svg = null,
                this.path = null,
                this.trail = null,
                this._progressPath = null,
                null !== this.text && (this.text.parentNode.removeChild(this.text),
                this.text = null)
            }
            ,
            g.prototype.set = function(a) {
                if (null === this._progressPath)
                    throw new Error(f);
                this._progressPath.set(a)
            }
            ,
            g.prototype.value = function() {
                if (null === this._progressPath)
                    throw new Error(f);
                return void 0 === this._progressPath ? 0 : this._progressPath.value()
            }
            ,
            g.prototype.setText = function(a) {
                if (null === this._progressPath)
                    throw new Error(f);
                null === this.text && (this.text = this._createTextContainer(this._opts, this._container),
                this._container.appendChild(this.text)),
                e.isObject(a) ? (e.removeChildren(this.text),
                this.text.appendChild(a)) : this.text.innerHTML = a
            }
            ,
            g.prototype._createSvgView = function(a) {
                var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                this._initializeSvg(b, a);
                var c = null;
                (a.trailColor || a.trailWidth) && (c = this._createTrail(a),
                b.appendChild(c));
                var d = this._createPath(a);
                return b.appendChild(d),
                {
                    svg: b,
                    path: d,
                    trail: c
                }
            }
            ,
            g.prototype._initializeSvg = function(a, b) {
                a.setAttribute("viewBox", "0 0 100 100")
            }
            ,
            g.prototype._createPath = function(a) {
                var b = this._pathString(a);
                return this._createPathElement(b, a)
            }
            ,
            g.prototype._createTrail = function(a) {
                var b = this._trailString(a)
                  , c = e.extend({}, a);
                return c.trailColor || (c.trailColor = "#eee"),
                c.trailWidth || (c.trailWidth = c.strokeWidth),
                c.color = c.trailColor,
                c.strokeWidth = c.trailWidth,
                c.fill = null,
                this._createPathElement(b, c)
            }
            ,
            g.prototype._createPathElement = function(a, b) {
                var c = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return c.setAttribute("d", a),
                c.setAttribute("stroke", b.color),
                c.setAttribute("stroke-width", b.strokeWidth),
                b.fill ? c.setAttribute("fill", b.fill) : c.setAttribute("fill-opacity", "0"),
                c
            }
            ,
            g.prototype._createTextContainer = function(a, b) {
                var c = document.createElement("div");
                c.className = a.text.className;
                var d = a.text.style;
                return d && (a.text.autoStyleContainer && (b.style.position = "relative"),
                e.setStyles(c, d),
                d.color || (c.style.color = a.color)),
                this._initializeTextContainer(a, b, c),
                c
            }
            ,
            g.prototype._initializeTextContainer = function(a, b, c) {}
            ,
            g.prototype._pathString = function(a) {
                throw new Error("Override this function for each progress bar")
            }
            ,
            g.prototype._trailString = function(a) {
                throw new Error("Override this function for each progress bar")
            }
            ,
            g.prototype._warnContainerAspectRatio = function(a) {
                if (this.containerAspectRatio) {
                    var b = window.getComputedStyle(a, null)
                      , c = parseFloat(b.getPropertyValue("width"), 10)
                      , d = parseFloat(b.getPropertyValue("height"), 10);
                    e.floatEquals(this.containerAspectRatio, c / d) || (console.warn("Incorrect aspect ratio of container", "#" + a.id, "detected:", b.getPropertyValue("width") + "(width)", "/", b.getPropertyValue("height") + "(height)", "=", c / d),
                    console.warn("Aspect ratio of should be", this.containerAspectRatio))
                }
            }
            ,
            b.exports = g
        }
        , {
            "./path": 5,
            "./utils": 8
        }],
        8: [function(a, b, c) {
            function d(a, b, c) {
                a = a || {},
                b = b || {},
                c = c || !1;
                for (var e in b)
                    if (b.hasOwnProperty(e)) {
                        var f = a[e]
                          , g = b[e];
                        c && l(f) && l(g) ? a[e] = d(f, g, c) : a[e] = g
                    }
                return a
            }
            function e(a, b) {
                var c = a;
                for (var d in b)
                    if (b.hasOwnProperty(d)) {
                        var e = b[d]
                          , f = "\\{" + d + "\\}"
                          , g = new RegExp(f,"g");
                        c = c.replace(g, e)
                    }
                return c
            }
            function f(a, b, c) {
                for (var d = a.style, e = 0; e < p.length; ++e) {
                    var f = p[e];
                    d[f + h(b)] = c
                }
                d[b] = c
            }
            function g(a, b) {
                m(b, function(b, c) {
                    null !== b && void 0 !== b && (l(b) && b.prefix === !0 ? f(a, c, b.value) : a.style[c] = b)
                })
            }
            function h(a) {
                return a.charAt(0).toUpperCase() + a.slice(1)
            }
            function i(a) {
                return "string" == typeof a || a instanceof String
            }
            function j(a) {
                return "function" == typeof a
            }
            function k(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }
            function l(a) {
                if (k(a))
                    return !1;
                var b = typeof a;
                return "object" === b && !!a
            }
            function m(a, b) {
                for (var c in a)
                    if (a.hasOwnProperty(c)) {
                        var d = a[c];
                        b(d, c)
                    }
            }
            function n(a, b) {
                return Math.abs(a - b) < q
            }
            function o(a) {
                for (; a.firstChild; )
                    a.removeChild(a.firstChild)
            }
            var p = "Webkit Moz O ms".split(" ")
              , q = .001;
            b.exports = {
                extend: d,
                render: e,
                setStyle: f,
                setStyles: g,
                capitalize: h,
                isString: i,
                isFunction: j,
                isObject: l,
                forEachObject: m,
                floatEquals: n,
                removeChildren: o
            }
        }
        , {}]
    }, {}, [4])(4)
});
/*!
 * Slick
 * Version: 1.6.0
 * Website: http://kenwheeler.github.io
 */
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            a.extend(e, e.initials),
            e.activeBreakpoint = null,
            e.animType = null,
            e.animProp = null,
            e.breakpoints = [],
            e.breakpointSettings = [],
            e.cssTransitions = !1,
            e.focussed = !1,
            e.interrupted = !1,
            e.hidden = "hidden",
            e.paused = !0,
            e.positionProp = null,
            e.respondTo = null,
            e.rowCount = 1,
            e.shouldClick = !0,
            e.$slider = a(c),
            e.$slidesCache = null,
            e.transformType = null,
            e.transitionType = null,
            e.visibilityChange = "visibilitychange",
            e.windowWidth = 0,
            e.windowTimer = null,
            f = a(c).data("slick") || {},
            e.options = a.extend({}, e.defaults, d, f),
            e.currentSlide = e.options.initialSlide,
            e.originalSettings = e.options,
            "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden",
            e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden",
            e.visibilityChange = "webkitvisibilitychange"),
            e.autoPlay = a.proxy(e.autoPlay, e),
            e.autoPlayClear = a.proxy(e.autoPlayClear, e),
            e.autoPlayIterator = a.proxy(e.autoPlayIterator, e),
            e.changeSlide = a.proxy(e.changeSlide, e),
            e.clickHandler = a.proxy(e.clickHandler, e),
            e.selectHandler = a.proxy(e.selectHandler, e),
            e.setPosition = a.proxy(e.setPosition, e),
            e.swipeHandler = a.proxy(e.swipeHandler, e),
            e.dragHandler = a.proxy(e.dragHandler, e),
            e.keyHandler = a.proxy(e.keyHandler, e),
            e.instanceUid = b++,
            e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            e.registerBreakpoints(),
            e.init(!0)
        }
        var b = 0;
        return c
    }(),
    b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c)
            d = c,
            c = null;
        else if (0 > c || c >= e.slideCount)
            return !1;
        e.unload(),
        "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack),
        e.$slides = e.$slideTrack.children(this.options.slide),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slideTrack.append(e.$slides),
        e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }),
        e.$slidesCache = e.$slides,
        e.reinit()
    }
    ,
    b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }
    ,
    b.prototype.animateSlide = function(b, c) {
        var d = {}
          , e = this;
        e.animateHeight(),
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
        e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
        a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a),
                e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)",
                e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)",
                e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(),
        b = Math.ceil(b),
        e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)",
        e.$slideTrack.css(d),
        c && setTimeout(function() {
            e.disableTransition(),
            c.call()
        }, e.options.speed))
    }
    ,
    b.prototype.getNavTarget = function() {
        var b = this
          , c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)),
        c
    }
    ,
    b.prototype.asNavFor = function(b) {
        var c = this
          , d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }
    ,
    b.prototype.applyTransition = function(a) {
        var b = this
          , c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase,
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(),
        a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }
    ,
    b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }
    ,
    b.prototype.autoPlayIterator = function() {
        var a = this
          , b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll,
        a.currentSlide - 1 === 0 && (a.direction = 1))),
        a.slideHandler(b))
    }
    ,
    b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"),
        b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"),
        b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows),
        b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
        b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"),
            d = a("<ul />").addClass(b.options.dotsClass),
            c = 0; c <= b.getDotCount(); c += 1)
                d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots),
            b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }),
        b.$slider.addClass("slick-slider"),
        b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(),
        b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        b.$slideTrack.css("opacity", 0),
        (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
        b.options.draggable === !0 && b.$list.addClass("draggable")
    }
    ,
    b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(),
        g = a.$slider.children(),
        a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows,
            f = Math.ceil(g.length / h),
            b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)),
        d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints)
                d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f,
            "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b)),
            h = f) : (d.activeBreakpoint = f,
            "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b)),
            h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null,
            d.options = d.originalSettings,
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b),
            h = f),
            b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }
    ,
    b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this, e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(),
        e.is("li") || (e = e.closest("li")),
        h = d.slideCount % d.options.slidesToScroll !== 0,
        f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll,
        b.data.message) {
        case "previous":
            g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f,
            d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
            break;
        case "next":
            g = 0 === f ? d.options.slidesToScroll : f,
            d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
            break;
        case "index":
            var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
            d.slideHandler(d.checkNavigable(i), !1, c),
            e.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(),
        d = 0,
        a > c[c.length - 1])
            a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }
    ,
    b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
        b.$slider.off("focus.slick blur.slick"),
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
        b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
        b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
        b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
        b.$list.off("click.slick", b.clickHandler),
        a(document).off(b.visibilityChange, b.visibility),
        b.cleanUpSlideEvents(),
        b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler),
        a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
        a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }
    ,
    b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(),
        b.removeAttr("style"),
        a.$slider.empty().append(b))
    }
    ,
    b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(),
        a.stopPropagation(),
        a.preventDefault())
    }
    ,
    b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(),
        c.touchObject = {},
        c.cleanUpEvents(),
        a(".slick-cloned", c.$slider).detach(),
        c.$dots && c.$dots.remove(),
        c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
        c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
        c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }),
        c.$slideTrack.children(this.options.slide).detach(),
        c.$slideTrack.detach(),
        c.$list.detach(),
        c.$slider.append(c.$slides)),
        c.cleanUpRows(),
        c.$slider.removeClass("slick-slider"),
        c.$slider.removeClass("slick-initialized"),
        c.$slider.removeClass("slick-dotted"),
        c.unslicked = !0,
        b || c.$slider.trigger("destroy", [c])
    }
    ,
    b.prototype.disableTransition = function(a) {
        var b = this
          , c = {};
        c[b.transitionType] = "",
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }),
        c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a),
        c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }),
        b && setTimeout(function() {
            c.disableTransition(a),
            b.call()
        }, c.options.speed))
    }
    ,
    b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a),
        b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }
    ,
    b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides,
        b.unload(),
        b.$slideTrack.children(this.options.slide).detach(),
        b.$slidesCache.filter(a).appendTo(b.$slideTrack),
        b.reinit())
    }
    ,
    b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"),
                b.autoPlay())
            }, 0)
        })
    }
    ,
    b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }
    ,
    b.prototype.getDotCount = function() {
        var a = this
          , b = 0
          , c = 0
          , d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToScroll,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0)
            d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToScroll,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else
            d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }
    ,
    b.prototype.getLeft = function(a) {
        var c, d, f, b = this, e = 0;
        return b.slideOffset = 0,
        d = b.$slides.first().outerHeight(!0),
        b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1,
        e = d * b.options.slidesToShow * -1),
        b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1,
        e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1,
        e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth,
        e = (a + b.options.slidesToShow - b.slideCount) * d),
        b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0,
        e = 0),
        b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0,
        b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)),
        c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e,
        b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow),
        c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0,
        b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1),
        c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0,
        c += (b.$list.width() - f.outerWidth()) / 2)),
        c
    }
    ,
    b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }
    ,
    b.prototype.getNavigableIndexes = function() {
        var e, a = this, b = 0, c = 0, d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll,
        c = -1 * a.options.slidesToScroll,
        e = 2 * a.slideCount); e > b; )
            d.push(b),
            b = c + a.options.slidesToScroll,
            c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }
    ,
    b.prototype.getSlick = function() {
        return this
    }
    ,
    b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0,
        b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f,
            !1) : void 0
        }),
        c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }
    ,
    b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }
    ,
    b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"),
        c.buildRows(),
        c.buildOut(),
        c.setProps(),
        c.startLoad(),
        c.loadSlider(),
        c.initializeEvents(),
        c.updateArrows(),
        c.updateDots(),
        c.checkResponsive(!0),
        c.focusHandler()),
        b && c.$slider.trigger("init", [c]),
        c.options.accessibility === !0 && c.initADA(),
        c.options.autoplay && (c.paused = !1,
        c.autoPlay())
    }
    ,
    b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        b.$slideTrack.attr("role", "listbox"),
        b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }),
        null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        b.activateADA()
    }
    ,
    b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide),
        a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }
    ,
    b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide),
        b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }
    ,
    b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }
    ,
    b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(),
        b.initDotEvents(),
        b.initSlideEvents(),
        b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler),
        b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler),
        b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("click.slick", b.clickHandler),
        a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
        b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
        a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
        a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(),
        a.$nextArrow.show()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }
    ,
    b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }
    ,
    b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this)
                  , d = a(this).attr("data-lazy")
                  , e = document.createElement("img");
                e.onload = function() {
                    c.animate({
                        opacity: 0
                    }, 100, function() {
                        c.attr("src", d).animate({
                            opacity: 1
                        }, 200, function() {
                            c.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        b.$slider.trigger("lazyLoaded", [b, c, d])
                    })
                }
                ,
                e.onerror = function() {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    b.$slider.trigger("lazyLoadError", [b, c, d])
                }
                ,
                e.src = d
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1),
        f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)),
        f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide,
        f = Math.ceil(e + b.options.slidesToShow),
        b.options.fade === !0 && (e > 0 && e--,
        f <= b.slideCount && f++)),
        c = b.$slider.find(".slick-slide").slice(e, f),
        g(c),
        b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"),
        g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow),
        g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow),
        g(d))
    }
    ,
    b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(),
        a.$slideTrack.css({
            opacity: 1
        }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }
    ,
    b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(),
        a.setPosition()
    }
    ,
    b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(),
        a.paused = !0
    }
    ,
    b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(),
        a.options.autoplay = !0,
        a.paused = !1,
        a.focussed = !1,
        a.interrupted = !1
    }
    ,
    b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]),
        b.animating = !1,
        b.setPosition(),
        b.swipeLeft = null,
        b.options.autoplay && b.autoPlay(),
        b.options.accessibility === !0 && b.initADA())
    }
    ,
    b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }
    ,
    b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, g, c = this, d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(),
        f = e.attr("data-lazy"),
        g = document.createElement("img"),
        g.onload = function() {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"),
            c.options.adaptiveHeight === !0 && c.setPosition(),
            c.$slider.trigger("lazyLoaded", [c, e, f]),
            c.progressiveLazyLoad()
        }
        ,
        g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            c.$slider.trigger("lazyLoadError", [c, e, f]),
            c.progressiveLazyLoad())
        }
        ,
        g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }
    ,
    b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow,
        !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
        c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
        d = c.currentSlide,
        c.destroy(!0),
        a.extend(c, c.initials, {
            currentSlide: d
        }),
        c.init(),
        b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }
    ,
    b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this, f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1,
                d = f[c].breakpoint,
                f.hasOwnProperty(c)) {
                    for (; e >= 0; )
                        b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1),
                        e--;
                    b.breakpoints.push(d),
                    b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }
    ,
    b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.registerBreakpoints(),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.cleanUpSlideEvents(),
        b.initSlideEvents(),
        b.checkResponsive(!1, !0),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
        b.setPosition(),
        b.focusHandler(),
        b.paused = !b.options.autoplay,
        b.autoPlay(),
        b.$slider.trigger("reInit", [b])
    }
    ,
    b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay),
        b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(),
            b.checkResponsive(),
            b.unslicked || b.setPosition()
        }, 50))
    }
    ,
    b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a,
        a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a,
        d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(),
        c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
        d.$slides = d.$slideTrack.children(this.options.slide),
        d.$slideTrack.children(this.options.slide).detach(),
        d.$slideTrack.append(d.$slides),
        d.$slidesCache = d.$slides,
        void d.reinit())
    }
    ,
    b.prototype.setCSS = function(a) {
        var d, e, b = this, c = {};
        b.options.rtl === !0 && (a = -a),
        d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px",
        e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px",
        c[b.positionProp] = a,
        b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {},
        b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")",
        b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)",
        b.$slideTrack.css(c)))
    }
    ,
    b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow),
        a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })),
        a.listWidth = a.$list.width(),
        a.listHeight = a.$list.height(),
        a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow),
        a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth),
        a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }
    ,
    b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1,
            b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }),
        b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }
    ,
    b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this, g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0],
        g = arguments[1],
        h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0],
        f = arguments[1],
        g = arguments[2],
        "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")),
        "single" === h)
            b.options[e] = f;
        else if ("multiple" === h)
            a.each(e, function(a, c) {
                b.options[a] = c
            });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive))
                    b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0; )
                        b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1),
                        c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(),
        b.reinit())
    }
    ,
    b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(),
        a.setHeight(),
        a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(),
        a.$slider.trigger("setPosition", [a])
    }
    ,
    b.prototype.setProps = function() {
        var a = this
          , b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left",
        "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
        (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
        a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex),
        void 0 !== b.OTransform && (a.animType = "OTransform",
        a.transformType = "-o-transform",
        a.transitionType = "OTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.MozTransform && (a.animType = "MozTransform",
        a.transformType = "-moz-transform",
        a.transitionType = "MozTransition",
        void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
        void 0 !== b.webkitTransform && (a.animType = "webkitTransform",
        a.transformType = "-webkit-transform",
        a.transitionType = "webkitTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.msTransform && (a.animType = "msTransform",
        a.transformType = "-ms-transform",
        a.transitionType = "msTransition",
        void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform",
        a.transformType = "transform",
        a.transitionType = "transition"),
        a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }
    ,
    b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        b.$slides.eq(a).addClass("slick-current"),
        b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2),
        b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
        d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")),
        b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow,
        e = b.options.infinite === !0 ? b.options.slidesToShow + a : a,
        b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }
    ,
    b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1),
        b.options.infinite === !0 && b.options.fade === !1 && (d = null,
        b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow,
            c = b.slideCount; c > b.slideCount - e; c -= 1)
                d = c - 1,
                a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1)
                d = c,
                a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }
    ,
    b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(),
        b.interrupted = a
    }
    ,
    b.prototype.selectHandler = function(b) {
        var c = this
          , d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide")
          , e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0),
        c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e),
        void c.asNavFor(e)) : void c.slideHandler(e)
    }
    ,
    b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null, i = this;
        return b = b || !1,
        i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a),
        d = a,
        h = i.getLeft(d),
        g = i.getLeft(i.currentSlide),
        i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft,
        i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer),
        e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d,
        i.animating = !0,
        i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
        f = i.currentSlide,
        i.currentSlide = e,
        i.setSlideClasses(i.currentSlide),
        i.options.asNavFor && (j = i.getNavTarget(),
        j = j.slick("getSlick"),
        j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)),
        i.updateDots(),
        i.updateArrows(),
        i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f),
        i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e),
        void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }
    ,
    b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(),
        a.$nextArrow.hide()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
        a.$slider.addClass("slick-loading")
    }
    ,
    b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX,
        b = e.touchObject.startY - e.touchObject.curY,
        c = Math.atan2(b, a),
        d = Math.round(180 * c / Math.PI),
        0 > d && (d = 360 - Math.abs(d)),
        45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }
    ,
    b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1,
        b.interrupted = !1,
        b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0,
        void 0 === b.touchObject.curX)
            return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]),
        b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
            case "left":
            case "down":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(),
                b.currentDirection = 0;
                break;
            case "right":
            case "up":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(),
                b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c),
            b.touchObject = {},
            b.$slider.trigger("swipe", [b, d]))
        } else
            b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide),
            b.touchObject = {})
    }
    ,
    b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend"in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
            switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1,
            b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold,
            b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
            a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
            }
    }
    ,
    b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null,
        !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide),
        b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX,
        b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY,
        b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))),
        b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))),
        e = b.swipeDirection(),
        "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(),
        g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1),
        b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
        f = b.touchObject.swipeLength,
        b.touchObject.edgeHit = !1,
        b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction,
        b.touchObject.edgeHit = !0),
        b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g,
        b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
        b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null,
        !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }
    ,
    b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0,
        1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {},
        !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]),
        b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX,
        b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY,
        void (b.dragging = !0))
    }
    ,
    b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(),
        a.$slideTrack.children(this.options.slide).detach(),
        a.$slidesCache.appendTo(a.$slideTrack),
        a.reinit())
    }
    ,
    b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(),
        b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(),
        b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]),
        b.destroy()
    }
    ,
    b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2),
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }
    ,
    a.fn.slick = function() {
        var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f],c) : g = a[f].slick[c].apply(a[f].slick, d),
            "undefined" != typeof g)
                return g;
        return a
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5wYWNrLmpzIiwiaW1hZ2VzbG9hZGVkLnBrZ2QubWluLmpzIiwiaXNvdG9wZS5wa2dkLm1pbi5qcyIsImpxdWVyeS5tQ3VzdG9tU2Nyb2xsYmFyLm1pbi5qcyIsInByb2dyZXNzYmFyLm1pbi5qcyIsInNsaWNrLm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwbHVnaW5zLm1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogSGlnaGxpZ2h0LmpzXG4gKiBWZXJzaW9uOiA5LjYuMFxuICogV2Vic2l0ZTogZ2l0LmlvL2hsanNsaWNlbnNlXG4gKi9cbiFmdW5jdGlvbihlKXt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3d8fFwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmO1widW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzP2UoZXhwb3J0cyk6biYmKG4uaGxqcz1lKHt9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShbXSxmdW5jdGlvbigpe3JldHVybiBuLmhsanN9KSl9KGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUucmVwbGFjZSgvWyY8Pl0vZ20sZnVuY3Rpb24oZSl7cmV0dXJuIElbZV19KX1mdW5jdGlvbiB0KGUpe3JldHVybiBlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gcihlLG4pe3ZhciB0PWUmJmUuZXhlYyhuKTtyZXR1cm4gdCYmMD09PXQuaW5kZXh9ZnVuY3Rpb24gYShlKXtyZXR1cm4gay50ZXN0KGUpfWZ1bmN0aW9uIGkoZSl7dmFyIG4sdCxyLGksbz1lLmNsYXNzTmFtZStcIiBcIjtpZihvKz1lLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmNsYXNzTmFtZTpcIlwiLHQ9Qi5leGVjKG8pKXJldHVybiBSKHRbMV0pP3RbMV06XCJuby1oaWdobGlnaHRcIjtmb3Iobz1vLnNwbGl0KC9cXHMrLyksbj0wLHI9by5sZW5ndGg7cj5uO24rKylpZihpPW9bbl0sYShpKXx8UihpKSlyZXR1cm4gaX1mdW5jdGlvbiBvKGUsbil7dmFyIHQscj17fTtmb3IodCBpbiBlKXJbdF09ZVt0XTtpZihuKWZvcih0IGluIG4pclt0XT1uW3RdO3JldHVybiByfWZ1bmN0aW9uIHUoZSl7dmFyIG49W107cmV0dXJuIGZ1bmN0aW9uIHIoZSxhKXtmb3IodmFyIGk9ZS5maXJzdENoaWxkO2k7aT1pLm5leHRTaWJsaW5nKTM9PT1pLm5vZGVUeXBlP2ErPWkubm9kZVZhbHVlLmxlbmd0aDoxPT09aS5ub2RlVHlwZSYmKG4ucHVzaCh7ZXZlbnQ6XCJzdGFydFwiLG9mZnNldDphLG5vZGU6aX0pLGE9cihpLGEpLHQoaSkubWF0Y2goL2JyfGhyfGltZ3xpbnB1dC8pfHxuLnB1c2goe2V2ZW50Olwic3RvcFwiLG9mZnNldDphLG5vZGU6aX0pKTtyZXR1cm4gYX0oZSwwKSxufWZ1bmN0aW9uIGMoZSxyLGEpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gZS5sZW5ndGgmJnIubGVuZ3RoP2VbMF0ub2Zmc2V0IT09clswXS5vZmZzZXQ/ZVswXS5vZmZzZXQ8clswXS5vZmZzZXQ/ZTpyOlwic3RhcnRcIj09PXJbMF0uZXZlbnQ/ZTpyOmUubGVuZ3RoP2U6cn1mdW5jdGlvbiBvKGUpe2Z1bmN0aW9uIHIoZSl7cmV0dXJuXCIgXCIrZS5ub2RlTmFtZSsnPVwiJytuKGUudmFsdWUpKydcIid9bCs9XCI8XCIrdChlKSt3Lm1hcC5jYWxsKGUuYXR0cmlidXRlcyxyKS5qb2luKFwiXCIpK1wiPlwifWZ1bmN0aW9uIHUoZSl7bCs9XCI8L1wiK3QoZSkrXCI+XCJ9ZnVuY3Rpb24gYyhlKXsoXCJzdGFydFwiPT09ZS5ldmVudD9vOnUpKGUubm9kZSl9Zm9yKHZhciBzPTAsbD1cIlwiLGY9W107ZS5sZW5ndGh8fHIubGVuZ3RoOyl7dmFyIGc9aSgpO2lmKGwrPW4oYS5zdWJzdHIocyxnWzBdLm9mZnNldC1zKSkscz1nWzBdLm9mZnNldCxnPT09ZSl7Zi5yZXZlcnNlKCkuZm9yRWFjaCh1KTtkbyBjKGcuc3BsaWNlKDAsMSlbMF0pLGc9aSgpO3doaWxlKGc9PT1lJiZnLmxlbmd0aCYmZ1swXS5vZmZzZXQ9PT1zKTtmLnJldmVyc2UoKS5mb3JFYWNoKG8pfWVsc2VcInN0YXJ0XCI9PT1nWzBdLmV2ZW50P2YucHVzaChnWzBdLm5vZGUpOmYucG9wKCksYyhnLnNwbGljZSgwLDEpWzBdKX1yZXR1cm4gbCtuKGEuc3Vic3RyKHMpKX1mdW5jdGlvbiBzKGUpe2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuc291cmNlfHxlfWZ1bmN0aW9uIHQodCxyKXtyZXR1cm4gbmV3IFJlZ0V4cChuKHQpLFwibVwiKyhlLmNJP1wiaVwiOlwiXCIpKyhyP1wiZ1wiOlwiXCIpKX1mdW5jdGlvbiByKGEsaSl7aWYoIWEuY29tcGlsZWQpe2lmKGEuY29tcGlsZWQ9ITAsYS5rPWEua3x8YS5iSyxhLmspe3ZhciB1PXt9LGM9ZnVuY3Rpb24obix0KXtlLmNJJiYodD10LnRvTG93ZXJDYXNlKCkpLHQuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zcGxpdChcInxcIik7dVt0WzBdXT1bbix0WzFdP051bWJlcih0WzFdKToxXX0pfTtcInN0cmluZ1wiPT10eXBlb2YgYS5rP2MoXCJrZXl3b3JkXCIsYS5rKTpFKGEuaykuZm9yRWFjaChmdW5jdGlvbihlKXtjKGUsYS5rW2VdKX0pLGEuaz11fWEubFI9dChhLmx8fC9cXHcrLywhMCksaSYmKGEuYksmJihhLmI9XCJcXFxcYihcIithLmJLLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIilcXFxcYlwiKSxhLmJ8fChhLmI9L1xcQnxcXGIvKSxhLmJSPXQoYS5iKSxhLmV8fGEuZVd8fChhLmU9L1xcQnxcXGIvKSxhLmUmJihhLmVSPXQoYS5lKSksYS50RT1uKGEuZSl8fFwiXCIsYS5lVyYmaS50RSYmKGEudEUrPShhLmU/XCJ8XCI6XCJcIikraS50RSkpLGEuaSYmKGEuaVI9dChhLmkpKSxudWxsPT1hLnImJihhLnI9MSksYS5jfHwoYS5jPVtdKTt2YXIgcz1bXTthLmMuZm9yRWFjaChmdW5jdGlvbihlKXtlLnY/ZS52LmZvckVhY2goZnVuY3Rpb24obil7cy5wdXNoKG8oZSxuKSl9KTpzLnB1c2goXCJzZWxmXCI9PT1lP2E6ZSl9KSxhLmM9cyxhLmMuZm9yRWFjaChmdW5jdGlvbihlKXtyKGUsYSl9KSxhLnN0YXJ0cyYmcihhLnN0YXJ0cyxpKTt2YXIgbD1hLmMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLmJLP1wiXFxcXC4/KFwiK2UuYitcIilcXFxcLj9cIjplLmJ9KS5jb25jYXQoW2EudEUsYS5pXSkubWFwKG4pLmZpbHRlcihCb29sZWFuKTthLnQ9bC5sZW5ndGg/dChsLmpvaW4oXCJ8XCIpLCEwKTp7ZXhlYzpmdW5jdGlvbigpe3JldHVybiBudWxsfX19fXIoZSl9ZnVuY3Rpb24gbChlLHQsYSxpKXtmdW5jdGlvbiBvKGUsbil7dmFyIHQsYTtmb3IodD0wLGE9bi5jLmxlbmd0aDthPnQ7dCsrKWlmKHIobi5jW3RdLmJSLGUpKXJldHVybiBuLmNbdF19ZnVuY3Rpb24gdShlLG4pe2lmKHIoZS5lUixuKSl7Zm9yKDtlLmVuZHNQYXJlbnQmJmUucGFyZW50OyllPWUucGFyZW50O3JldHVybiBlfXJldHVybiBlLmVXP3UoZS5wYXJlbnQsbik6dm9pZCAwfWZ1bmN0aW9uIGMoZSxuKXtyZXR1cm4hYSYmcihuLmlSLGUpfWZ1bmN0aW9uIGcoZSxuKXt2YXIgdD1OLmNJP25bMF0udG9Mb3dlckNhc2UoKTpuWzBdO3JldHVybiBlLmsuaGFzT3duUHJvcGVydHkodCkmJmUua1t0XX1mdW5jdGlvbiBoKGUsbix0LHIpe3ZhciBhPXI/XCJcIjp5LmNsYXNzUHJlZml4LGk9JzxzcGFuIGNsYXNzPVwiJythLG89dD9cIlwiOkM7cmV0dXJuIGkrPWUrJ1wiPicsaStuK299ZnVuY3Rpb24gcCgpe3ZhciBlLHQscixhO2lmKCFFLmspcmV0dXJuIG4oQik7Zm9yKGE9XCJcIix0PTAsRS5sUi5sYXN0SW5kZXg9MCxyPUUubFIuZXhlYyhCKTtyOylhKz1uKEIuc3Vic3RyKHQsci5pbmRleC10KSksZT1nKEUsciksZT8oTSs9ZVsxXSxhKz1oKGVbMF0sbihyWzBdKSkpOmErPW4oclswXSksdD1FLmxSLmxhc3RJbmRleCxyPUUubFIuZXhlYyhCKTtyZXR1cm4gYStuKEIuc3Vic3RyKHQpKX1mdW5jdGlvbiBkKCl7dmFyIGU9XCJzdHJpbmdcIj09dHlwZW9mIEUuc0w7aWYoZSYmIXhbRS5zTF0pcmV0dXJuIG4oQik7dmFyIHQ9ZT9sKEUuc0wsQiwhMCxMW0Uuc0xdKTpmKEIsRS5zTC5sZW5ndGg/RS5zTDp2b2lkIDApO3JldHVybiBFLnI+MCYmKE0rPXQuciksZSYmKExbRS5zTF09dC50b3ApLGgodC5sYW5ndWFnZSx0LnZhbHVlLCExLCEwKX1mdW5jdGlvbiBiKCl7ays9bnVsbCE9RS5zTD9kKCk6cCgpLEI9XCJcIn1mdW5jdGlvbiB2KGUpe2srPWUuY04/aChlLmNOLFwiXCIsITApOlwiXCIsRT1PYmplY3QuY3JlYXRlKGUse3BhcmVudDp7dmFsdWU6RX19KX1mdW5jdGlvbiBtKGUsbil7aWYoQis9ZSxudWxsPT1uKXJldHVybiBiKCksMDt2YXIgdD1vKG4sRSk7aWYodClyZXR1cm4gdC5za2lwP0IrPW46KHQuZUImJihCKz1uKSxiKCksdC5yQnx8dC5lQnx8KEI9bikpLHYodCxuKSx0LnJCPzA6bi5sZW5ndGg7dmFyIHI9dShFLG4pO2lmKHIpe3ZhciBhPUU7YS5za2lwP0IrPW46KGEuckV8fGEuZUV8fChCKz1uKSxiKCksYS5lRSYmKEI9bikpO2RvIEUuY04mJihrKz1DKSxFLnNraXB8fChNKz1FLnIpLEU9RS5wYXJlbnQ7d2hpbGUoRSE9PXIucGFyZW50KTtyZXR1cm4gci5zdGFydHMmJnYoci5zdGFydHMsXCJcIiksYS5yRT8wOm4ubGVuZ3RofWlmKGMobixFKSl0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgbGV4ZW1lIFwiJytuKydcIiBmb3IgbW9kZSBcIicrKEUuY058fFwiPHVubmFtZWQ+XCIpKydcIicpO3JldHVybiBCKz1uLG4ubGVuZ3RofHwxfXZhciBOPVIoZSk7aWYoIU4pdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxhbmd1YWdlOiBcIicrZSsnXCInKTtzKE4pO3ZhciB3LEU9aXx8TixMPXt9LGs9XCJcIjtmb3Iodz1FO3chPT1OO3c9dy5wYXJlbnQpdy5jTiYmKGs9aCh3LmNOLFwiXCIsITApK2spO3ZhciBCPVwiXCIsTT0wO3RyeXtmb3IodmFyIEksaixPPTA7Oyl7aWYoRS50Lmxhc3RJbmRleD1PLEk9RS50LmV4ZWModCksIUkpYnJlYWs7aj1tKHQuc3Vic3RyKE8sSS5pbmRleC1PKSxJWzBdKSxPPUkuaW5kZXgran1mb3IobSh0LnN1YnN0cihPKSksdz1FO3cucGFyZW50O3c9dy5wYXJlbnQpdy5jTiYmKGsrPUMpO3JldHVybntyOk0sdmFsdWU6ayxsYW5ndWFnZTplLHRvcDpFfX1jYXRjaChUKXtpZihULm1lc3NhZ2UmJi0xIT09VC5tZXNzYWdlLmluZGV4T2YoXCJJbGxlZ2FsXCIpKXJldHVybntyOjAsdmFsdWU6bih0KX07dGhyb3cgVH19ZnVuY3Rpb24gZihlLHQpe3Q9dHx8eS5sYW5ndWFnZXN8fEUoeCk7dmFyIHI9e3I6MCx2YWx1ZTpuKGUpfSxhPXI7cmV0dXJuIHQuZmlsdGVyKFIpLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9bChuLGUsITEpO3QubGFuZ3VhZ2U9bix0LnI+YS5yJiYoYT10KSx0LnI+ci5yJiYoYT1yLHI9dCl9KSxhLmxhbmd1YWdlJiYoci5zZWNvbmRfYmVzdD1hKSxyfWZ1bmN0aW9uIGcoZSl7cmV0dXJuIHkudGFiUmVwbGFjZXx8eS51c2VCUj9lLnJlcGxhY2UoTSxmdW5jdGlvbihlLG4pe3JldHVybiB5LnVzZUJSJiZcIlxcblwiPT09ZT9cIjxicj5cIjp5LnRhYlJlcGxhY2U/bi5yZXBsYWNlKC9cXHQvZyx5LnRhYlJlcGxhY2UpOnZvaWQgMH0pOmV9ZnVuY3Rpb24gaChlLG4sdCl7dmFyIHI9bj9MW25dOnQsYT1bZS50cmltKCldO3JldHVybiBlLm1hdGNoKC9cXGJobGpzXFxiLyl8fGEucHVzaChcImhsanNcIiksLTE9PT1lLmluZGV4T2YocikmJmEucHVzaChyKSxhLmpvaW4oXCIgXCIpLnRyaW0oKX1mdW5jdGlvbiBwKGUpe3ZhciBuLHQscixvLHMscD1pKGUpO2EocCl8fCh5LnVzZUJSPyhuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixcImRpdlwiKSxuLmlubmVySFRNTD1lLmlubmVySFRNTC5yZXBsYWNlKC9cXG4vZyxcIlwiKS5yZXBsYWNlKC88YnJbIFxcL10qPi9nLFwiXFxuXCIpKTpuPWUscz1uLnRleHRDb250ZW50LHI9cD9sKHAscywhMCk6ZihzKSx0PXUobiksdC5sZW5ndGgmJihvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixcImRpdlwiKSxvLmlubmVySFRNTD1yLnZhbHVlLHIudmFsdWU9Yyh0LHUobykscykpLHIudmFsdWU9ZyhyLnZhbHVlKSxlLmlubmVySFRNTD1yLnZhbHVlLGUuY2xhc3NOYW1lPWgoZS5jbGFzc05hbWUscCxyLmxhbmd1YWdlKSxlLnJlc3VsdD17bGFuZ3VhZ2U6ci5sYW5ndWFnZSxyZTpyLnJ9LHIuc2Vjb25kX2Jlc3QmJihlLnNlY29uZF9iZXN0PXtsYW5ndWFnZTpyLnNlY29uZF9iZXN0Lmxhbmd1YWdlLHJlOnIuc2Vjb25kX2Jlc3Qucn0pKX1mdW5jdGlvbiBkKGUpe3k9byh5LGUpfWZ1bmN0aW9uIGIoKXtpZighYi5jYWxsZWQpe2IuY2FsbGVkPSEwO3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwcmUgY29kZVwiKTt3LmZvckVhY2guY2FsbChlLHApfX1mdW5jdGlvbiB2KCl7YWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixiLCExKSxhZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGIsITEpfWZ1bmN0aW9uIG0obix0KXt2YXIgcj14W25dPXQoZSk7ci5hbGlhc2VzJiZyLmFsaWFzZXMuZm9yRWFjaChmdW5jdGlvbihlKXtMW2VdPW59KX1mdW5jdGlvbiBOKCl7cmV0dXJuIEUoeCl9ZnVuY3Rpb24gUihlKXtyZXR1cm4gZT0oZXx8XCJcIikudG9Mb3dlckNhc2UoKSx4W2VdfHx4W0xbZV1dfXZhciB3PVtdLEU9T2JqZWN0LmtleXMseD17fSxMPXt9LGs9L14obm8tP2hpZ2hsaWdodHxwbGFpbnx0ZXh0KSQvaSxCPS9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pLE09LygoXig8W14+XSs+fFxcdHwpK3woPzpcXG4pKSkvZ20sQz1cIjwvc3Bhbj5cIix5PXtjbGFzc1ByZWZpeDpcImhsanMtXCIsdGFiUmVwbGFjZTpudWxsLHVzZUJSOiExLGxhbmd1YWdlczp2b2lkIDB9LEk9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIn07cmV0dXJuIGUuaGlnaGxpZ2h0PWwsZS5oaWdobGlnaHRBdXRvPWYsZS5maXhNYXJrdXA9ZyxlLmhpZ2hsaWdodEJsb2NrPXAsZS5jb25maWd1cmU9ZCxlLmluaXRIaWdobGlnaHRpbmc9YixlLmluaXRIaWdobGlnaHRpbmdPbkxvYWQ9dixlLnJlZ2lzdGVyTGFuZ3VhZ2U9bSxlLmxpc3RMYW5ndWFnZXM9TixlLmdldExhbmd1YWdlPVIsZS5pbmhlcml0PW8sZS5JUj1cIlthLXpBLVpdXFxcXHcqXCIsZS5VSVI9XCJbYS16QS1aX11cXFxcdypcIixlLk5SPVwiXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCspP1wiLGUuQ05SPVwiKC0/KShcXFxcYjBbeFhdW2EtZkEtRjAtOV0rfChcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKik/fFxcXFwuXFxcXGQrKShbZUVdWy0rXT9cXFxcZCspPylcIixlLkJOUj1cIlxcXFxiKDBiWzAxXSspXCIsZS5SU1I9XCIhfCE9fCE9PXwlfCU9fCZ8JiZ8Jj18XFxcXCp8XFxcXCo9fFxcXFwrfFxcXFwrPXwsfC18LT18Lz18L3w6fDt8PDx8PDw9fDw9fDx8PT09fD09fD18Pj4+PXw+Pj18Pj18Pj4+fD4+fD58XFxcXD98XFxcXFt8XFxcXHt8XFxcXCh8XFxcXF58XFxcXF49fFxcXFx8fFxcXFx8PXxcXFxcfFxcXFx8fH5cIixlLkJFPXtiOlwiXFxcXFxcXFxbXFxcXHNcXFxcU11cIixyOjB9LGUuQVNNPXtjTjpcInN0cmluZ1wiLGI6XCInXCIsZTpcIidcIixpOlwiXFxcXG5cIixjOltlLkJFXX0sZS5RU009e2NOOlwic3RyaW5nXCIsYjonXCInLGU6J1wiJyxpOlwiXFxcXG5cIixjOltlLkJFXX0sZS5QV009e2I6L1xcYihhfGFufHRoZXxhcmV8SSdtfGlzbid0fGRvbid0fGRvZXNuJ3R8d29uJ3R8YnV0fGp1c3R8c2hvdWxkfHByZXR0eXxzaW1wbHl8ZW5vdWdofGdvbm5hfGdvaW5nfHd0Znxzb3xzdWNofHdpbGx8eW91fHlvdXJ8bGlrZSlcXGIvfSxlLkM9ZnVuY3Rpb24obix0LHIpe3ZhciBhPWUuaW5oZXJpdCh7Y046XCJjb21tZW50XCIsYjpuLGU6dCxjOltdfSxyfHx7fSk7cmV0dXJuIGEuYy5wdXNoKGUuUFdNKSxhLmMucHVzaCh7Y046XCJkb2N0YWdcIixiOlwiKD86VE9ET3xGSVhNRXxOT1RFfEJVR3xYWFgpOlwiLHI6MH0pLGF9LGUuQ0xDTT1lLkMoXCIvL1wiLFwiJFwiKSxlLkNCQ009ZS5DKFwiL1xcXFwqXCIsXCJcXFxcKi9cIiksZS5IQ009ZS5DKFwiI1wiLFwiJFwiKSxlLk5NPXtjTjpcIm51bWJlclwiLGI6ZS5OUixyOjB9LGUuQ05NPXtjTjpcIm51bWJlclwiLGI6ZS5DTlIscjowfSxlLkJOTT17Y046XCJudW1iZXJcIixiOmUuQk5SLHI6MH0sZS5DU1NOTT17Y046XCJudW1iZXJcIixiOmUuTlIrXCIoJXxlbXxleHxjaHxyZW18dnd8dmh8dm1pbnx2bWF4fGNtfG1tfGlufHB0fHBjfHB4fGRlZ3xncmFkfHJhZHx0dXJufHN8bXN8SHp8a0h6fGRwaXxkcGNtfGRwcHgpP1wiLHI6MH0sZS5STT17Y046XCJyZWdleHBcIixiOi9cXC8vLGU6L1xcL1tnaW11eV0qLyxpOi9cXG4vLGM6W2UuQkUse2I6L1xcWy8sZTovXFxdLyxyOjAsYzpbZS5CRV19XX0sZS5UTT17Y046XCJ0aXRsZVwiLGI6ZS5JUixyOjB9LGUuVVRNPXtjTjpcInRpdGxlXCIsYjplLlVJUixyOjB9LGUuTUVUSE9EX0dVQVJEPXtiOlwiXFxcXC5cXFxccypcIitlLlVJUixyOjB9LGV9KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJwaHBcIixmdW5jdGlvbihlKXt2YXIgYz17YjpcIlxcXFwkK1thLXpBLVpffy3Dv11bYS16QS1aMC05X38tw79dKlwifSxpPXtjTjpcIm1ldGFcIixiOi88XFw/KHBocCk/fFxcPz4vfSx0PXtjTjpcInN0cmluZ1wiLGM6W2UuQkUsaV0sdjpbe2I6J2JcIicsZTonXCInfSx7YjpcImInXCIsZTpcIidcIn0sZS5pbmhlcml0KGUuQVNNLHtpOm51bGx9KSxlLmluaGVyaXQoZS5RU00se2k6bnVsbH0pXX0sYT17djpbZS5CTk0sZS5DTk1dfTtyZXR1cm57YWxpYXNlczpbXCJwaHAzXCIsXCJwaHA0XCIsXCJwaHA1XCIsXCJwaHA2XCJdLGNJOiEwLGs6XCJhbmQgaW5jbHVkZV9vbmNlIGxpc3QgYWJzdHJhY3QgZ2xvYmFsIHByaXZhdGUgZWNobyBpbnRlcmZhY2UgYXMgc3RhdGljIGVuZHN3aXRjaCBhcnJheSBudWxsIGlmIGVuZHdoaWxlIG9yIGNvbnN0IGZvciBlbmRmb3JlYWNoIHNlbGYgdmFyIHdoaWxlIGlzc2V0IHB1YmxpYyBwcm90ZWN0ZWQgZXhpdCBmb3JlYWNoIHRocm93IGVsc2VpZiBpbmNsdWRlIF9fRklMRV9fIGVtcHR5IHJlcXVpcmVfb25jZSBkbyB4b3IgcmV0dXJuIHBhcmVudCBjbG9uZSB1c2UgX19DTEFTU19fIF9fTElORV9fIGVsc2UgYnJlYWsgcHJpbnQgZXZhbCBuZXcgY2F0Y2ggX19NRVRIT0RfXyBjYXNlIGV4Y2VwdGlvbiBkZWZhdWx0IGRpZSByZXF1aXJlIF9fRlVOQ1RJT05fXyBlbmRkZWNsYXJlIGZpbmFsIHRyeSBzd2l0Y2ggY29udGludWUgZW5kZm9yIGVuZGlmIGRlY2xhcmUgdW5zZXQgdHJ1ZSBmYWxzZSB0cmFpdCBnb3RvIGluc3RhbmNlb2YgaW5zdGVhZG9mIF9fRElSX18gX19OQU1FU1BBQ0VfXyB5aWVsZCBmaW5hbGx5XCIsYzpbZS5IQ00sZS5DKFwiLy9cIixcIiRcIix7YzpbaV19KSxlLkMoXCIvXFxcXCpcIixcIlxcXFwqL1wiLHtjOlt7Y046XCJkb2N0YWdcIixiOlwiQFtBLVphLXpdK1wifV19KSxlLkMoXCJfX2hhbHRfY29tcGlsZXIuKz87XCIsITEse2VXOiEwLGs6XCJfX2hhbHRfY29tcGlsZXJcIixsOmUuVUlSfSkse2NOOlwic3RyaW5nXCIsYjovPDw8WydcIl0/XFx3K1snXCJdPyQvLGU6L15cXHcrOz8kLyxjOltlLkJFLHtjTjpcInN1YnN0XCIsdjpbe2I6L1xcJFxcdysvfSx7YjovXFx7XFwkLyxlOi9cXH0vfV19XX0saSx7Y046XCJrZXl3b3JkXCIsYjovXFwkdGhpc1xcYi99LGMse2I6Lyg6OnwtPikrW2EtekEtWl9cXHg3Zi1cXHhmZl1bYS16QS1aMC05X1xceDdmLVxceGZmXSovfSx7Y046XCJmdW5jdGlvblwiLGJLOlwiZnVuY3Rpb25cIixlOi9bO3tdLyxlRTohMCxpOlwiXFxcXCR8XFxcXFt8JVwiLGM6W2UuVVRNLHtjTjpcInBhcmFtc1wiLGI6XCJcXFxcKFwiLGU6XCJcXFxcKVwiLGM6W1wic2VsZlwiLGMsZS5DQkNNLHQsYV19XX0se2NOOlwiY2xhc3NcIixiSzpcImNsYXNzIGludGVyZmFjZVwiLGU6XCJ7XCIsZUU6ITAsaTovWzpcXChcXCRcIl0vLGM6W3tiSzpcImV4dGVuZHMgaW1wbGVtZW50c1wifSxlLlVUTV19LHtiSzpcIm5hbWVzcGFjZVwiLGU6XCI7XCIsaTovW1xcLiddLyxjOltlLlVUTV19LHtiSzpcInVzZVwiLGU6XCI7XCIsYzpbZS5VVE1dfSx7YjpcIj0+XCJ9LHQsYV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwianNvblwiLGZ1bmN0aW9uKGUpe3ZhciBpPXtsaXRlcmFsOlwidHJ1ZSBmYWxzZSBudWxsXCJ9LG49W2UuUVNNLGUuQ05NXSxyPXtlOlwiLFwiLGVXOiEwLGVFOiEwLGM6bixrOml9LHQ9e2I6XCJ7XCIsZTpcIn1cIixjOlt7Y046XCJhdHRyXCIsYjovXCIvLGU6L1wiLyxjOltlLkJFXSxpOlwiXFxcXG5cIn0sZS5pbmhlcml0KHIse2I6LzovfSldLGk6XCJcXFxcU1wifSxjPXtiOlwiXFxcXFtcIixlOlwiXFxcXF1cIixjOltlLmluaGVyaXQocildLGk6XCJcXFxcU1wifTtyZXR1cm4gbi5zcGxpY2Uobi5sZW5ndGgsMCx0LGMpLHtjOm4sazppLGk6XCJcXFxcU1wifX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInhtbFwiLGZ1bmN0aW9uKHMpe3ZhciBlPVwiW0EtWmEtejAtOVxcXFwuXzotXStcIix0PXtlVzohMCxpOi88LyxyOjAsYzpbe2NOOlwiYXR0clwiLGI6ZSxyOjB9LHtiOi89XFxzKi8scjowLGM6W3tjTjpcInN0cmluZ1wiLGVuZHNQYXJlbnQ6ITAsdjpbe2I6L1wiLyxlOi9cIi99LHtiOi8nLyxlOi8nL30se2I6L1teXFxzXCInPTw+YF0rL31dfV19XX07cmV0dXJue2FsaWFzZXM6W1wiaHRtbFwiLFwieGh0bWxcIixcInJzc1wiLFwiYXRvbVwiLFwieGpiXCIsXCJ4c2RcIixcInhzbFwiLFwicGxpc3RcIl0sY0k6ITAsYzpbe2NOOlwibWV0YVwiLGI6XCI8IURPQ1RZUEVcIixlOlwiPlwiLHI6MTAsYzpbe2I6XCJcXFxcW1wiLGU6XCJcXFxcXVwifV19LHMuQyhcIjwhLS1cIixcIi0tPlwiLHtyOjEwfSkse2I6XCI8XFxcXCFcXFxcW0NEQVRBXFxcXFtcIixlOlwiXFxcXF1cXFxcXT5cIixyOjEwfSx7YjovPFxcPyhwaHApPy8sZTovXFw/Pi8sc0w6XCJwaHBcIixjOlt7YjpcIi9cXFxcKlwiLGU6XCJcXFxcKi9cIixza2lwOiEwfV19LHtjTjpcInRhZ1wiLGI6XCI8c3R5bGUoPz1cXFxcc3w+fCQpXCIsZTpcIj5cIixrOntuYW1lOlwic3R5bGVcIn0sYzpbdF0sc3RhcnRzOntlOlwiPC9zdHlsZT5cIixyRTohMCxzTDpbXCJjc3NcIixcInhtbFwiXX19LHtjTjpcInRhZ1wiLGI6XCI8c2NyaXB0KD89XFxcXHN8PnwkKVwiLGU6XCI+XCIsazp7bmFtZTpcInNjcmlwdFwifSxjOlt0XSxzdGFydHM6e2U6XCI8L3NjcmlwdD5cIixyRTohMCxzTDpbXCJhY3Rpb25zY3JpcHRcIixcImphdmFzY3JpcHRcIixcImhhbmRsZWJhcnNcIixcInhtbFwiXX19LHtjTjpcIm1ldGFcIix2Olt7YjovPFxcP3htbC8sZTovXFw/Pi8scjoxMH0se2I6LzxcXD9cXHcrLyxlOi9cXD8+L31dfSx7Y046XCJ0YWdcIixiOlwiPC8/XCIsZTpcIi8/PlwiLGM6W3tjTjpcIm5hbWVcIixiOi9bXlxcLz48XFxzXSsvLHI6MH0sdF19XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJjc3NcIixmdW5jdGlvbihlKXt2YXIgYz1cIlthLXpBLVotXVthLXpBLVowLTlfLV0qXCIsdD17YjovW0EtWlxcX1xcLlxcLV0rXFxzKjovLHJCOiEwLGU6XCI7XCIsZVc6ITAsYzpbe2NOOlwiYXR0cmlidXRlXCIsYjovXFxTLyxlOlwiOlwiLGVFOiEwLHN0YXJ0czp7ZVc6ITAsZUU6ITAsYzpbe2I6L1tcXHctXStcXCgvLHJCOiEwLGM6W3tjTjpcImJ1aWx0X2luXCIsYjovW1xcdy1dKy99LHtiOi9cXCgvLGU6L1xcKS8sYzpbZS5BU00sZS5RU01dfV19LGUuQ1NTTk0sZS5RU00sZS5BU00sZS5DQkNNLHtjTjpcIm51bWJlclwiLGI6XCIjWzAtOUEtRmEtZl0rXCJ9LHtjTjpcIm1ldGFcIixiOlwiIWltcG9ydGFudFwifV19fV19O3JldHVybntjSTohMCxpOi9bPVxcL3wnXFwkXS8sYzpbZS5DQkNNLHtjTjpcInNlbGVjdG9yLWlkXCIsYjovI1tBLVphLXowLTlfLV0rL30se2NOOlwic2VsZWN0b3ItY2xhc3NcIixiOi9cXC5bQS1aYS16MC05Xy1dKy99LHtjTjpcInNlbGVjdG9yLWF0dHJcIixiOi9cXFsvLGU6L1xcXS8saTpcIiRcIn0se2NOOlwic2VsZWN0b3ItcHNldWRvXCIsYjovOig6KT9bYS16QS1aMC05XFxfXFwtXFwrXFwoXFwpXCInLl0rL30se2I6XCJAKGZvbnQtZmFjZXxwYWdlKVwiLGw6XCJbYS16LV0rXCIsazpcImZvbnQtZmFjZSBwYWdlXCJ9LHtiOlwiQFwiLGU6XCJbeztdXCIsaTovOi8sYzpbe2NOOlwia2V5d29yZFwiLGI6L1xcdysvfSx7YjovXFxzLyxlVzohMCxlRTohMCxyOjAsYzpbZS5BU00sZS5RU00sZS5DU1NOTV19XX0se2NOOlwic2VsZWN0b3ItdGFnXCIsYjpjLHI6MH0se2I6XCJ7XCIsZTpcIn1cIixpOi9cXFMvLGM6W2UuQ0JDTSx0XX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImphdmFzY3JpcHRcIixmdW5jdGlvbihlKXtyZXR1cm57YWxpYXNlczpbXCJqc1wiLFwianN4XCJdLGs6e2tleXdvcmQ6XCJpbiBvZiBpZiBmb3Igd2hpbGUgZmluYWxseSB2YXIgbmV3IGZ1bmN0aW9uIGRvIHJldHVybiB2b2lkIGVsc2UgYnJlYWsgY2F0Y2ggaW5zdGFuY2VvZiB3aXRoIHRocm93IGNhc2UgZGVmYXVsdCB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgdHlwZW9mIGRlbGV0ZSBsZXQgeWllbGQgY29uc3QgZXhwb3J0IHN1cGVyIGRlYnVnZ2VyIGFzIGFzeW5jIGF3YWl0IHN0YXRpYyBpbXBvcnQgZnJvbSBhc1wiLGxpdGVyYWw6XCJ0cnVlIGZhbHNlIG51bGwgdW5kZWZpbmVkIE5hTiBJbmZpbml0eVwiLGJ1aWx0X2luOlwiZXZhbCBpc0Zpbml0ZSBpc05hTiBwYXJzZUZsb2F0IHBhcnNlSW50IGRlY29kZVVSSSBkZWNvZGVVUklDb21wb25lbnQgZW5jb2RlVVJJIGVuY29kZVVSSUNvbXBvbmVudCBlc2NhcGUgdW5lc2NhcGUgT2JqZWN0IEZ1bmN0aW9uIEJvb2xlYW4gRXJyb3IgRXZhbEVycm9yIEludGVybmFsRXJyb3IgUmFuZ2VFcnJvciBSZWZlcmVuY2VFcnJvciBTdG9wSXRlcmF0aW9uIFN5bnRheEVycm9yIFR5cGVFcnJvciBVUklFcnJvciBOdW1iZXIgTWF0aCBEYXRlIFN0cmluZyBSZWdFeHAgQXJyYXkgRmxvYXQzMkFycmF5IEZsb2F0NjRBcnJheSBJbnQxNkFycmF5IEludDMyQXJyYXkgSW50OEFycmF5IFVpbnQxNkFycmF5IFVpbnQzMkFycmF5IFVpbnQ4QXJyYXkgVWludDhDbGFtcGVkQXJyYXkgQXJyYXlCdWZmZXIgRGF0YVZpZXcgSlNPTiBJbnRsIGFyZ3VtZW50cyByZXF1aXJlIG1vZHVsZSBjb25zb2xlIHdpbmRvdyBkb2N1bWVudCBTeW1ib2wgU2V0IE1hcCBXZWFrU2V0IFdlYWtNYXAgUHJveHkgUmVmbGVjdCBQcm9taXNlXCJ9LGM6W3tjTjpcIm1ldGFcIixyOjEwLGI6L15cXHMqWydcIl11c2UgKHN0cmljdHxhc20pWydcIl0vfSx7Y046XCJtZXRhXCIsYjovXiMhLyxlOi8kL30sZS5BU00sZS5RU00se2NOOlwic3RyaW5nXCIsYjpcImBcIixlOlwiYFwiLGM6W2UuQkUse2NOOlwic3Vic3RcIixiOlwiXFxcXCRcXFxce1wiLGU6XCJcXFxcfVwifV19LGUuQ0xDTSxlLkNCQ00se2NOOlwibnVtYmVyXCIsdjpbe2I6XCJcXFxcYigwW2JCXVswMV0rKVwifSx7YjpcIlxcXFxiKDBbb09dWzAtN10rKVwifSx7YjplLkNOUn1dLHI6MH0se2I6XCIoXCIrZS5SU1IrXCJ8XFxcXGIoY2FzZXxyZXR1cm58dGhyb3cpXFxcXGIpXFxcXHMqXCIsazpcInJldHVybiB0aHJvdyBjYXNlXCIsYzpbZS5DTENNLGUuQ0JDTSxlLlJNLHtiOi88LyxlOi8oXFwvXFx3K3xcXHcrXFwvKT4vLHNMOlwieG1sXCIsYzpbe2I6LzxcXHcrXFxzKlxcLz4vLHNraXA6ITB9LHtiOi88XFx3Ky8sZTovKFxcL1xcdyt8XFx3K1xcLyk+Lyxza2lwOiEwLGM6W1wic2VsZlwiXX1dfV0scjowfSx7Y046XCJmdW5jdGlvblwiLGJLOlwiZnVuY3Rpb25cIixlOi9cXHsvLGVFOiEwLGM6W2UuaW5oZXJpdChlLlRNLHtiOi9bQS1aYS16JF9dWzAtOUEtWmEteiRfXSovfSkse2NOOlwicGFyYW1zXCIsYjovXFwoLyxlOi9cXCkvLGVCOiEwLGVFOiEwLGM6W2UuQ0xDTSxlLkNCQ01dfV0saTovXFxbfCUvfSx7YjovXFwkWyguXS99LGUuTUVUSE9EX0dVQVJELHtjTjpcImNsYXNzXCIsYks6XCJjbGFzc1wiLGU6L1t7Oz1dLyxlRTohMCxpOi9bOlwiXFxbXFxdXS8sYzpbe2JLOlwiZXh0ZW5kc1wifSxlLlVUTV19LHtiSzpcImNvbnN0cnVjdG9yXCIsZTovXFx7LyxlRTohMH1dLGk6LyMoPyEhKS99fSk7IiwiLyohXG4gKiBpbWFnZXNMb2FkZWRcbiAqIFZlcnNpb246IHY0LjEuMVxuICogV2Vic2l0ZTogaHR0cDovL2ltYWdlc2xvYWRlZC5kZXNhbmRyby5jb20vXG4gKi9cblxuIWZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImV2LWVtaXR0ZXIvZXYtZW1pdHRlclwiLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUoKTp0LkV2RW1pdHRlcj1lKCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXZhciBlPXQucHJvdG90eXBlO3JldHVybiBlLm9uPWZ1bmN0aW9uKHQsZSl7aWYodCYmZSl7dmFyIGk9dGhpcy5fZXZlbnRzPXRoaXMuX2V2ZW50c3x8e30sbj1pW3RdPWlbdF18fFtdO3JldHVybi0xPT1uLmluZGV4T2YoZSkmJm4ucHVzaChlKSx0aGlzfX0sZS5vbmNlPWZ1bmN0aW9uKHQsZSl7aWYodCYmZSl7dGhpcy5vbih0LGUpO3ZhciBpPXRoaXMuX29uY2VFdmVudHM9dGhpcy5fb25jZUV2ZW50c3x8e30sbj1pW3RdPWlbdF18fHt9O3JldHVybiBuW2VdPSEwLHRoaXN9fSxlLm9mZj1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuX2V2ZW50cyYmdGhpcy5fZXZlbnRzW3RdO2lmKGkmJmkubGVuZ3RoKXt2YXIgbj1pLmluZGV4T2YoZSk7cmV0dXJuLTEhPW4mJmkuc3BsaWNlKG4sMSksdGhpc319LGUuZW1pdEV2ZW50PWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5fZXZlbnRzJiZ0aGlzLl9ldmVudHNbdF07aWYoaSYmaS5sZW5ndGgpe3ZhciBuPTAsbz1pW25dO2U9ZXx8W107Zm9yKHZhciByPXRoaXMuX29uY2VFdmVudHMmJnRoaXMuX29uY2VFdmVudHNbdF07bzspe3ZhciBzPXImJnJbb107cyYmKHRoaXMub2ZmKHQsbyksZGVsZXRlIHJbb10pLG8uYXBwbHkodGhpcyxlKSxuKz1zPzA6MSxvPWlbbl19cmV0dXJuIHRoaXN9fSx0fSksZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV2LWVtaXR0ZXIvZXYtZW1pdHRlclwiXSxmdW5jdGlvbihpKXtyZXR1cm4gZSh0LGkpfSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSh0LHJlcXVpcmUoXCJldi1lbWl0dGVyXCIpKTp0LmltYWdlc0xvYWRlZD1lKHQsdC5FdkVtaXR0ZXIpfSh3aW5kb3csZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBpKHQsZSl7Zm9yKHZhciBpIGluIGUpdFtpXT1lW2ldO3JldHVybiB0fWZ1bmN0aW9uIG4odCl7dmFyIGU9W107aWYoQXJyYXkuaXNBcnJheSh0KSllPXQ7ZWxzZSBpZihcIm51bWJlclwiPT10eXBlb2YgdC5sZW5ndGgpZm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspZS5wdXNoKHRbaV0pO2Vsc2UgZS5wdXNoKHQpO3JldHVybiBlfWZ1bmN0aW9uIG8odCxlLHIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbz8oXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodCkpLHRoaXMuZWxlbWVudHM9bih0KSx0aGlzLm9wdGlvbnM9aSh7fSx0aGlzLm9wdGlvbnMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/cj1lOmkodGhpcy5vcHRpb25zLGUpLHImJnRoaXMub24oXCJhbHdheXNcIixyKSx0aGlzLmdldEltYWdlcygpLGgmJih0aGlzLmpxRGVmZXJyZWQ9bmV3IGguRGVmZXJyZWQpLHZvaWQgc2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMuY2hlY2soKX0uYmluZCh0aGlzKSkpOm5ldyBvKHQsZSxyKX1mdW5jdGlvbiByKHQpe3RoaXMuaW1nPXR9ZnVuY3Rpb24gcyh0LGUpe3RoaXMudXJsPXQsdGhpcy5lbGVtZW50PWUsdGhpcy5pbWc9bmV3IEltYWdlfXZhciBoPXQualF1ZXJ5LGE9dC5jb25zb2xlO28ucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUpLG8ucHJvdG90eXBlLm9wdGlvbnM9e30sby5wcm90b3R5cGUuZ2V0SW1hZ2VzPWZ1bmN0aW9uKCl7dGhpcy5pbWFnZXM9W10sdGhpcy5lbGVtZW50cy5mb3JFYWNoKHRoaXMuYWRkRWxlbWVudEltYWdlcyx0aGlzKX0sby5wcm90b3R5cGUuYWRkRWxlbWVudEltYWdlcz1mdW5jdGlvbih0KXtcIklNR1wiPT10Lm5vZGVOYW1lJiZ0aGlzLmFkZEltYWdlKHQpLHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kPT09ITAmJnRoaXMuYWRkRWxlbWVudEJhY2tncm91bmRJbWFnZXModCk7dmFyIGU9dC5ub2RlVHlwZTtpZihlJiZkW2VdKXtmb3IodmFyIGk9dC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpLG49MDtuPGkubGVuZ3RoO24rKyl7dmFyIG89aVtuXTt0aGlzLmFkZEltYWdlKG8pfWlmKFwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCl7dmFyIHI9dC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kKTtmb3Iobj0wO248ci5sZW5ndGg7bisrKXt2YXIgcz1yW25dO3RoaXMuYWRkRWxlbWVudEJhY2tncm91bmRJbWFnZXMocyl9fX19O3ZhciBkPXsxOiEwLDk6ITAsMTE6ITB9O3JldHVybiBvLnByb3RvdHlwZS5hZGRFbGVtZW50QmFja2dyb3VuZEltYWdlcz1mdW5jdGlvbih0KXt2YXIgZT1nZXRDb21wdXRlZFN0eWxlKHQpO2lmKGUpZm9yKHZhciBpPS91cmxcXCgoWydcIl0pPyguKj8pXFwxXFwpL2dpLG49aS5leGVjKGUuYmFja2dyb3VuZEltYWdlKTtudWxsIT09bjspe3ZhciBvPW4mJm5bMl07byYmdGhpcy5hZGRCYWNrZ3JvdW5kKG8sdCksbj1pLmV4ZWMoZS5iYWNrZ3JvdW5kSW1hZ2UpfX0sby5wcm90b3R5cGUuYWRkSW1hZ2U9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IHIodCk7dGhpcy5pbWFnZXMucHVzaChlKX0sby5wcm90b3R5cGUuYWRkQmFja2dyb3VuZD1mdW5jdGlvbih0LGUpe3ZhciBpPW5ldyBzKHQsZSk7dGhpcy5pbWFnZXMucHVzaChpKX0sby5wcm90b3R5cGUuY2hlY2s9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsaSxuKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5wcm9ncmVzcyh0LGksbil9KX12YXIgZT10aGlzO3JldHVybiB0aGlzLnByb2dyZXNzZWRDb3VudD0wLHRoaXMuaGFzQW55QnJva2VuPSExLHRoaXMuaW1hZ2VzLmxlbmd0aD92b2lkIHRoaXMuaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5vbmNlKFwicHJvZ3Jlc3NcIix0KSxlLmNoZWNrKCl9KTp2b2lkIHRoaXMuY29tcGxldGUoKX0sby5wcm90b3R5cGUucHJvZ3Jlc3M9ZnVuY3Rpb24odCxlLGkpe3RoaXMucHJvZ3Jlc3NlZENvdW50KyssdGhpcy5oYXNBbnlCcm9rZW49dGhpcy5oYXNBbnlCcm9rZW58fCF0LmlzTG9hZGVkLHRoaXMuZW1pdEV2ZW50KFwicHJvZ3Jlc3NcIixbdGhpcyx0LGVdKSx0aGlzLmpxRGVmZXJyZWQmJnRoaXMuanFEZWZlcnJlZC5ub3RpZnkmJnRoaXMuanFEZWZlcnJlZC5ub3RpZnkodGhpcyx0KSx0aGlzLnByb2dyZXNzZWRDb3VudD09dGhpcy5pbWFnZXMubGVuZ3RoJiZ0aGlzLmNvbXBsZXRlKCksdGhpcy5vcHRpb25zLmRlYnVnJiZhJiZhLmxvZyhcInByb2dyZXNzOiBcIitpLHQsZSl9LG8ucHJvdG90eXBlLmNvbXBsZXRlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5oYXNBbnlCcm9rZW4/XCJmYWlsXCI6XCJkb25lXCI7aWYodGhpcy5pc0NvbXBsZXRlPSEwLHRoaXMuZW1pdEV2ZW50KHQsW3RoaXNdKSx0aGlzLmVtaXRFdmVudChcImFsd2F5c1wiLFt0aGlzXSksdGhpcy5qcURlZmVycmVkKXt2YXIgZT10aGlzLmhhc0FueUJyb2tlbj9cInJlamVjdFwiOlwicmVzb2x2ZVwiO3RoaXMuanFEZWZlcnJlZFtlXSh0aGlzKX19LHIucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUpLHIucHJvdG90eXBlLmNoZWNrPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRJc0ltYWdlQ29tcGxldGUoKTtyZXR1cm4gdD92b2lkIHRoaXMuY29uZmlybSgwIT09dGhpcy5pbWcubmF0dXJhbFdpZHRoLFwibmF0dXJhbFdpZHRoXCIpOih0aGlzLnByb3h5SW1hZ2U9bmV3IEltYWdlLHRoaXMucHJveHlJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLHRoaXMpLHRoaXMucHJveHlJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIix0aGlzKSx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLHRoaXMpLHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLHRoaXMpLHZvaWQodGhpcy5wcm94eUltYWdlLnNyYz10aGlzLmltZy5zcmMpKX0sci5wcm90b3R5cGUuZ2V0SXNJbWFnZUNvbXBsZXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW1nLmNvbXBsZXRlJiZ2b2lkIDAhPT10aGlzLmltZy5uYXR1cmFsV2lkdGh9LHIucHJvdG90eXBlLmNvbmZpcm09ZnVuY3Rpb24odCxlKXt0aGlzLmlzTG9hZGVkPXQsdGhpcy5lbWl0RXZlbnQoXCJwcm9ncmVzc1wiLFt0aGlzLHRoaXMuaW1nLGVdKX0sci5wcm90b3R5cGUuaGFuZGxlRXZlbnQ9ZnVuY3Rpb24odCl7dmFyIGU9XCJvblwiK3QudHlwZTt0aGlzW2VdJiZ0aGlzW2VdKHQpfSxyLnByb3RvdHlwZS5vbmxvYWQ9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpcm0oITAsXCJvbmxvYWRcIiksdGhpcy51bmJpbmRFdmVudHMoKX0sci5wcm90b3R5cGUub25lcnJvcj1mdW5jdGlvbigpe3RoaXMuY29uZmlybSghMSxcIm9uZXJyb3JcIiksdGhpcy51bmJpbmRFdmVudHMoKX0sci5wcm90b3R5cGUudW5iaW5kRXZlbnRzPWZ1bmN0aW9uKCl7dGhpcy5wcm94eUltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsdGhpcyksdGhpcy5wcm94eUltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLHRoaXMpLHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsdGhpcyksdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsdGhpcyl9LHMucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoci5wcm90b3R5cGUpLHMucHJvdG90eXBlLmNoZWNrPWZ1bmN0aW9uKCl7dGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIix0aGlzKSx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIix0aGlzKSx0aGlzLmltZy5zcmM9dGhpcy51cmw7dmFyIHQ9dGhpcy5nZXRJc0ltYWdlQ29tcGxldGUoKTt0JiYodGhpcy5jb25maXJtKDAhPT10aGlzLmltZy5uYXR1cmFsV2lkdGgsXCJuYXR1cmFsV2lkdGhcIiksdGhpcy51bmJpbmRFdmVudHMoKSl9LHMucHJvdG90eXBlLnVuYmluZEV2ZW50cz1mdW5jdGlvbigpe3RoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsdGhpcyksdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsdGhpcyl9LHMucHJvdG90eXBlLmNvbmZpcm09ZnVuY3Rpb24odCxlKXt0aGlzLmlzTG9hZGVkPXQsdGhpcy5lbWl0RXZlbnQoXCJwcm9ncmVzc1wiLFt0aGlzLHRoaXMuZWxlbWVudCxlXSl9LG8ubWFrZUpRdWVyeVBsdWdpbj1mdW5jdGlvbihlKXtlPWV8fHQualF1ZXJ5LGUmJihoPWUsaC5mbi5pbWFnZXNMb2FkZWQ9ZnVuY3Rpb24odCxlKXt2YXIgaT1uZXcgbyh0aGlzLHQsZSk7cmV0dXJuIGkuanFEZWZlcnJlZC5wcm9taXNlKGgodGhpcykpfSl9LG8ubWFrZUpRdWVyeVBsdWdpbigpLG99KTsiLCIvKiFcbiAqIElzb3RvcGVcbiAqIFZlcnNpb246IDIuMi4yXG4gKiBXZWJzaXRlOiBodHRwOi8vaXNvdG9wZS5tZXRhZml6enkuY29cbiAqL1xuIWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXt9ZnVuY3Rpb24gYyhhKXtmdW5jdGlvbiBjKGIpe2IucHJvdG90eXBlLm9wdGlvbnx8KGIucHJvdG90eXBlLm9wdGlvbj1mdW5jdGlvbihiKXthLmlzUGxhaW5PYmplY3QoYikmJih0aGlzLm9wdGlvbnM9YS5leHRlbmQoITAsdGhpcy5vcHRpb25zLGIpKX0pfWZ1bmN0aW9uIGUoYixjKXthLmZuW2JdPWZ1bmN0aW9uKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXtmb3IodmFyIGc9ZC5jYWxsKGFyZ3VtZW50cywxKSxoPTAsaT10aGlzLmxlbmd0aDtpPmg7aCsrKXt2YXIgaj10aGlzW2hdLGs9YS5kYXRhKGosYik7aWYoaylpZihhLmlzRnVuY3Rpb24oa1tlXSkmJlwiX1wiIT09ZS5jaGFyQXQoMCkpe3ZhciBsPWtbZV0uYXBwbHkoayxnKTtpZih2b2lkIDAhPT1sKXJldHVybiBsfWVsc2UgZihcIm5vIHN1Y2ggbWV0aG9kICdcIitlK1wiJyBmb3IgXCIrYitcIiBpbnN0YW5jZVwiKTtlbHNlIGYoXCJjYW5ub3QgY2FsbCBtZXRob2RzIG9uIFwiK2IrXCIgcHJpb3IgdG8gaW5pdGlhbGl6YXRpb247IGF0dGVtcHRlZCB0byBjYWxsICdcIitlK1wiJ1wiKX1yZXR1cm4gdGhpc31yZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YS5kYXRhKHRoaXMsYik7ZD8oZC5vcHRpb24oZSksZC5faW5pdCgpKTooZD1uZXcgYyh0aGlzLGUpLGEuZGF0YSh0aGlzLGIsZCkpfSl9fWlmKGEpe3ZhciBmPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBjb25zb2xlP2I6ZnVuY3Rpb24oYSl7Y29uc29sZS5lcnJvcihhKX07cmV0dXJuIGEuYnJpZGdldD1mdW5jdGlvbihhLGIpe2MoYiksZShhLGIpfSxhLmJyaWRnZXR9fXZhciBkPUFycmF5LnByb3RvdHlwZS5zbGljZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwianF1ZXJ5LWJyaWRnZXQvanF1ZXJ5LmJyaWRnZXRcIixbXCJqcXVlcnlcIl0sYyk6YyhcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwianF1ZXJ5XCIpOmEualF1ZXJ5KX0od2luZG93KSxmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIpe3ZhciBjPWEuZXZlbnQ7cmV0dXJuIGMudGFyZ2V0PWMudGFyZ2V0fHxjLnNyY0VsZW1lbnR8fGIsY312YXIgYz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZD1mdW5jdGlvbigpe307Yy5hZGRFdmVudExpc3RlbmVyP2Q9ZnVuY3Rpb24oYSxiLGMpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfTpjLmF0dGFjaEV2ZW50JiYoZD1mdW5jdGlvbihhLGMsZCl7YVtjK2RdPWQuaGFuZGxlRXZlbnQ/ZnVuY3Rpb24oKXt2YXIgYz1iKGEpO2QuaGFuZGxlRXZlbnQuY2FsbChkLGMpfTpmdW5jdGlvbigpe3ZhciBjPWIoYSk7ZC5jYWxsKGEsYyl9LGEuYXR0YWNoRXZlbnQoXCJvblwiK2MsYVtjK2RdKX0pO3ZhciBlPWZ1bmN0aW9uKCl7fTtjLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZT1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSl9OmMuZGV0YWNoRXZlbnQmJihlPWZ1bmN0aW9uKGEsYixjKXthLmRldGFjaEV2ZW50KFwib25cIitiLGFbYitjXSk7dHJ5e2RlbGV0ZSBhW2IrY119Y2F0Y2goZCl7YVtiK2NdPXZvaWQgMH19KTt2YXIgZj17YmluZDpkLHVuYmluZDplfTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZXZlbnRpZS9ldmVudGllXCIsZik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZjphLmV2ZW50aWU9Zn0od2luZG93KSxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGEoKXt9ZnVuY3Rpb24gYihhLGIpe2Zvcih2YXIgYz1hLmxlbmd0aDtjLS07KWlmKGFbY10ubGlzdGVuZXI9PT1iKXJldHVybiBjO3JldHVybi0xfWZ1bmN0aW9uIGMoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbYV0uYXBwbHkodGhpcyxhcmd1bWVudHMpfX12YXIgZD1hLnByb3RvdHlwZSxlPXRoaXMsZj1lLkV2ZW50RW1pdHRlcjtkLmdldExpc3RlbmVycz1mdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy5fZ2V0RXZlbnRzKCk7aWYoYSBpbnN0YW5jZW9mIFJlZ0V4cCl7Yj17fTtmb3IoYyBpbiBkKWQuaGFzT3duUHJvcGVydHkoYykmJmEudGVzdChjKSYmKGJbY109ZFtjXSl9ZWxzZSBiPWRbYV18fChkW2FdPVtdKTtyZXR1cm4gYn0sZC5mbGF0dGVuTGlzdGVuZXJzPWZ1bmN0aW9uKGEpe3ZhciBiLGM9W107Zm9yKGI9MDtiPGEubGVuZ3RoO2IrPTEpYy5wdXNoKGFbYl0ubGlzdGVuZXIpO3JldHVybiBjfSxkLmdldExpc3RlbmVyc0FzT2JqZWN0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5nZXRMaXN0ZW5lcnMoYSk7cmV0dXJuIGMgaW5zdGFuY2VvZiBBcnJheSYmKGI9e30sYlthXT1jKSxifHxjfSxkLmFkZExpc3RlbmVyPWZ1bmN0aW9uKGEsYyl7dmFyIGQsZT10aGlzLmdldExpc3RlbmVyc0FzT2JqZWN0KGEpLGY9XCJvYmplY3RcIj09dHlwZW9mIGM7Zm9yKGQgaW4gZSllLmhhc093blByb3BlcnR5KGQpJiYtMT09PWIoZVtkXSxjKSYmZVtkXS5wdXNoKGY/Yzp7bGlzdGVuZXI6YyxvbmNlOiExfSk7cmV0dXJuIHRoaXN9LGQub249YyhcImFkZExpc3RlbmVyXCIpLGQuYWRkT25jZUxpc3RlbmVyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoYSx7bGlzdGVuZXI6YixvbmNlOiEwfSl9LGQub25jZT1jKFwiYWRkT25jZUxpc3RlbmVyXCIpLGQuZGVmaW5lRXZlbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZ2V0TGlzdGVuZXJzKGEpLHRoaXN9LGQuZGVmaW5lRXZlbnRzPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7Yis9MSl0aGlzLmRlZmluZUV2ZW50KGFbYl0pO3JldHVybiB0aGlzfSxkLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKGEsYyl7dmFyIGQsZSxmPXRoaXMuZ2V0TGlzdGVuZXJzQXNPYmplY3QoYSk7Zm9yKGUgaW4gZilmLmhhc093blByb3BlcnR5KGUpJiYoZD1iKGZbZV0sYyksLTEhPT1kJiZmW2VdLnNwbGljZShkLDEpKTtyZXR1cm4gdGhpc30sZC5vZmY9YyhcInJlbW92ZUxpc3RlbmVyXCIpLGQuYWRkTGlzdGVuZXJzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubWFuaXB1bGF0ZUxpc3RlbmVycyghMSxhLGIpfSxkLnJlbW92ZUxpc3RlbmVycz1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1hbmlwdWxhdGVMaXN0ZW5lcnMoITAsYSxiKX0sZC5tYW5pcHVsYXRlTGlzdGVuZXJzPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YT90aGlzLnJlbW92ZUxpc3RlbmVyOnRoaXMuYWRkTGlzdGVuZXIsZz1hP3RoaXMucmVtb3ZlTGlzdGVuZXJzOnRoaXMuYWRkTGlzdGVuZXJzO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBifHxiIGluc3RhbmNlb2YgUmVnRXhwKWZvcihkPWMubGVuZ3RoO2QtLTspZi5jYWxsKHRoaXMsYixjW2RdKTtlbHNlIGZvcihkIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShkKSYmKGU9YltkXSkmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2YuY2FsbCh0aGlzLGQsZSk6Zy5jYWxsKHRoaXMsZCxlKSk7cmV0dXJuIHRoaXN9LGQucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz10eXBlb2YgYSxkPXRoaXMuX2dldEV2ZW50cygpO2lmKFwic3RyaW5nXCI9PT1jKWRlbGV0ZSBkW2FdO2Vsc2UgaWYoYSBpbnN0YW5jZW9mIFJlZ0V4cClmb3IoYiBpbiBkKWQuaGFzT3duUHJvcGVydHkoYikmJmEudGVzdChiKSYmZGVsZXRlIGRbYl07ZWxzZSBkZWxldGUgdGhpcy5fZXZlbnRzO3JldHVybiB0aGlzfSxkLnJlbW92ZUFsbExpc3RlbmVycz1jKFwicmVtb3ZlRXZlbnRcIiksZC5lbWl0RXZlbnQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPXRoaXMuZ2V0TGlzdGVuZXJzQXNPYmplY3QoYSk7Zm9yKGUgaW4gZylpZihnLmhhc093blByb3BlcnR5KGUpKWZvcihkPWdbZV0ubGVuZ3RoO2QtLTspYz1nW2VdW2RdLGMub25jZT09PSEwJiZ0aGlzLnJlbW92ZUxpc3RlbmVyKGEsYy5saXN0ZW5lciksZj1jLmxpc3RlbmVyLmFwcGx5KHRoaXMsYnx8W10pLGY9PT10aGlzLl9nZXRPbmNlUmV0dXJuVmFsdWUoKSYmdGhpcy5yZW1vdmVMaXN0ZW5lcihhLGMubGlzdGVuZXIpO3JldHVybiB0aGlzfSxkLnRyaWdnZXI9YyhcImVtaXRFdmVudFwiKSxkLmVtaXQ9ZnVuY3Rpb24oYSl7dmFyIGI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3JldHVybiB0aGlzLmVtaXRFdmVudChhLGIpfSxkLnNldE9uY2VSZXR1cm5WYWx1ZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fb25jZVJldHVyblZhbHVlPWEsdGhpc30sZC5fZ2V0T25jZVJldHVyblZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaGFzT3duUHJvcGVydHkoXCJfb25jZVJldHVyblZhbHVlXCIpP3RoaXMuX29uY2VSZXR1cm5WYWx1ZTohMH0sZC5fZ2V0RXZlbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2V2ZW50c3x8KHRoaXMuX2V2ZW50cz17fSl9LGEubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBlLkV2ZW50RW1pdHRlcj1mLGF9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJldmVudEVtaXR0ZXIvRXZlbnRFbWl0dGVyXCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gYX0pOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWE6ZS5FdmVudEVtaXR0ZXI9YX0uY2FsbCh0aGlzKSxmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe2lmKGEpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBkW2FdKXJldHVybiBhO2E9YS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnNsaWNlKDEpO2Zvcih2YXIgYixlPTAsZj1jLmxlbmd0aDtmPmU7ZSsrKWlmKGI9Y1tlXSthLFwic3RyaW5nXCI9PXR5cGVvZiBkW2JdKXJldHVybiBifX12YXIgYz1cIldlYmtpdCBNb3ogbXMgTXMgT1wiLnNwbGl0KFwiIFwiKSxkPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iOmEuZ2V0U3R5bGVQcm9wZXJ0eT1ifSh3aW5kb3cpLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXt2YXIgYj1wYXJzZUZsb2F0KGEpLGM9LTE9PT1hLmluZGV4T2YoXCIlXCIpJiYhaXNOYU4oYik7cmV0dXJuIGMmJmJ9ZnVuY3Rpb24gZCgpe31mdW5jdGlvbiBlKCl7Zm9yKHZhciBhPXt3aWR0aDowLGhlaWdodDowLGlubmVyV2lkdGg6MCxpbm5lckhlaWdodDowLG91dGVyV2lkdGg6MCxvdXRlckhlaWdodDowfSxiPTAsYz1oLmxlbmd0aDtjPmI7YisrKXt2YXIgZD1oW2JdO2FbZF09MH1yZXR1cm4gYX1mdW5jdGlvbiBmKGIpe2Z1bmN0aW9uIGQoKXtpZighbSl7bT0hMDt2YXIgZD1hLmdldENvbXB1dGVkU3R5bGU7aWYoaj1mdW5jdGlvbigpe3ZhciBhPWQ/ZnVuY3Rpb24oYSl7cmV0dXJuIGQoYSxudWxsKX06ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY3VycmVudFN0eWxlfTtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9YShiKTtyZXR1cm4gY3x8ZyhcIlN0eWxlIHJldHVybmVkIFwiK2MrXCIuIEFyZSB5b3UgcnVubmluZyB0aGlzIGNvZGUgaW4gYSBoaWRkZW4gaWZyYW1lIG9uIEZpcmVmb3g/IFNlZSBodHRwOi8vYml0Lmx5L2dldHNpemVidWcxXCIpLGN9fSgpLGs9YihcImJveFNpemluZ1wiKSl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLnN0eWxlLndpZHRoPVwiMjAwcHhcIixlLnN0eWxlLnBhZGRpbmc9XCIxcHggMnB4IDNweCA0cHhcIixlLnN0eWxlLmJvcmRlclN0eWxlPVwic29saWRcIixlLnN0eWxlLmJvcmRlcldpZHRoPVwiMXB4IDJweCAzcHggNHB4XCIsZS5zdHlsZVtrXT1cImJvcmRlci1ib3hcIjt2YXIgZj1kb2N1bWVudC5ib2R5fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7Zi5hcHBlbmRDaGlsZChlKTt2YXIgaD1qKGUpO2w9MjAwPT09YyhoLndpZHRoKSxmLnJlbW92ZUNoaWxkKGUpfX19ZnVuY3Rpb24gZihhKXtpZihkKCksXCJzdHJpbmdcIj09dHlwZW9mIGEmJihhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYSkpLGEmJlwib2JqZWN0XCI9PXR5cGVvZiBhJiZhLm5vZGVUeXBlKXt2YXIgYj1qKGEpO2lmKFwibm9uZVwiPT09Yi5kaXNwbGF5KXJldHVybiBlKCk7dmFyIGY9e307Zi53aWR0aD1hLm9mZnNldFdpZHRoLGYuaGVpZ2h0PWEub2Zmc2V0SGVpZ2h0O2Zvcih2YXIgZz1mLmlzQm9yZGVyQm94PSEoIWt8fCFiW2tdfHxcImJvcmRlci1ib3hcIiE9PWJba10pLG09MCxuPWgubGVuZ3RoO24+bTttKyspe3ZhciBvPWhbbV0scD1iW29dO3A9aShhLHApO3ZhciBxPXBhcnNlRmxvYXQocCk7ZltvXT1pc05hTihxKT8wOnF9dmFyIHI9Zi5wYWRkaW5nTGVmdCtmLnBhZGRpbmdSaWdodCxzPWYucGFkZGluZ1RvcCtmLnBhZGRpbmdCb3R0b20sdD1mLm1hcmdpbkxlZnQrZi5tYXJnaW5SaWdodCx1PWYubWFyZ2luVG9wK2YubWFyZ2luQm90dG9tLHY9Zi5ib3JkZXJMZWZ0V2lkdGgrZi5ib3JkZXJSaWdodFdpZHRoLHc9Zi5ib3JkZXJUb3BXaWR0aCtmLmJvcmRlckJvdHRvbVdpZHRoLHg9ZyYmbCx5PWMoYi53aWR0aCk7eSE9PSExJiYoZi53aWR0aD15Kyh4PzA6cit2KSk7dmFyIHo9YyhiLmhlaWdodCk7cmV0dXJuIHohPT0hMSYmKGYuaGVpZ2h0PXorKHg/MDpzK3cpKSxmLmlubmVyV2lkdGg9Zi53aWR0aC0ocit2KSxmLmlubmVySGVpZ2h0PWYuaGVpZ2h0LShzK3cpLGYub3V0ZXJXaWR0aD1mLndpZHRoK3QsZi5vdXRlckhlaWdodD1mLmhlaWdodCt1LGZ9fWZ1bmN0aW9uIGkoYixjKXtpZihhLmdldENvbXB1dGVkU3R5bGV8fC0xPT09Yy5pbmRleE9mKFwiJVwiKSlyZXR1cm4gYzt2YXIgZD1iLnN0eWxlLGU9ZC5sZWZ0LGY9Yi5ydW50aW1lU3R5bGUsZz1mJiZmLmxlZnQ7cmV0dXJuIGcmJihmLmxlZnQ9Yi5jdXJyZW50U3R5bGUubGVmdCksZC5sZWZ0PWMsYz1kLnBpeGVsTGVmdCxkLmxlZnQ9ZSxnJiYoZi5sZWZ0PWcpLGN9dmFyIGosayxsLG09ITE7cmV0dXJuIGZ9dmFyIGc9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGNvbnNvbGU/ZDpmdW5jdGlvbihhKXtjb25zb2xlLmVycm9yKGEpfSxoPVtcInBhZGRpbmdMZWZ0XCIsXCJwYWRkaW5nUmlnaHRcIixcInBhZGRpbmdUb3BcIixcInBhZGRpbmdCb3R0b21cIixcIm1hcmdpbkxlZnRcIixcIm1hcmdpblJpZ2h0XCIsXCJtYXJnaW5Ub3BcIixcIm1hcmdpbkJvdHRvbVwiLFwiYm9yZGVyTGVmdFdpZHRoXCIsXCJib3JkZXJSaWdodFdpZHRoXCIsXCJib3JkZXJUb3BXaWR0aFwiLFwiYm9yZGVyQm90dG9tV2lkdGhcIl07XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImdldC1zaXplL2dldC1zaXplXCIsW1wiZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eVwiXSxmKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1mKHJlcXVpcmUoXCJkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHlcIikpOmEuZ2V0U2l6ZT1mKGEuZ2V0U3R5bGVQcm9wZXJ0eSl9KHdpbmRvdyksZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYi5pc1JlYWR5P2EoKTpnLnB1c2goYSkpfWZ1bmN0aW9uIGMoYSl7dmFyIGM9XCJyZWFkeXN0YXRlY2hhbmdlXCI9PT1hLnR5cGUmJlwiY29tcGxldGVcIiE9PWYucmVhZHlTdGF0ZTtiLmlzUmVhZHl8fGN8fGQoKX1mdW5jdGlvbiBkKCl7Yi5pc1JlYWR5PSEwO2Zvcih2YXIgYT0wLGM9Zy5sZW5ndGg7Yz5hO2ErKyl7dmFyIGQ9Z1thXTtkKCl9fWZ1bmN0aW9uIGUoZSl7cmV0dXJuXCJjb21wbGV0ZVwiPT09Zi5yZWFkeVN0YXRlP2QoKTooZS5iaW5kKGYsXCJET01Db250ZW50TG9hZGVkXCIsYyksZS5iaW5kKGYsXCJyZWFkeXN0YXRlY2hhbmdlXCIsYyksZS5iaW5kKGEsXCJsb2FkXCIsYykpLGJ9dmFyIGY9YS5kb2N1bWVudCxnPVtdO2IuaXNSZWFkeT0hMSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZG9jLXJlYWR5L2RvYy1yZWFkeVwiLFtcImV2ZW50aWUvZXZlbnRpZVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJldmVudGllXCIpKTphLmRvY1JlYWR5PWUoYS5ldmVudGllKX0od2luZG93KSxmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuIGFbZ10oYil9ZnVuY3Rpb24gYyhhKXtpZighYS5wYXJlbnROb2RlKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Yi5hcHBlbmRDaGlsZChhKX19ZnVuY3Rpb24gZChhLGIpe2MoYSk7Zm9yKHZhciBkPWEucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKGIpLGU9MCxmPWQubGVuZ3RoO2Y+ZTtlKyspaWYoZFtlXT09PWEpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gZShhLGQpe3JldHVybiBjKGEpLGIoYSxkKX12YXIgZixnPWZ1bmN0aW9uKCl7aWYoYS5tYXRjaGVzKXJldHVyblwibWF0Y2hlc1wiO2lmKGEubWF0Y2hlc1NlbGVjdG9yKXJldHVyblwibWF0Y2hlc1NlbGVjdG9yXCI7Zm9yKHZhciBiPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXSxjPTAsZD1iLmxlbmd0aDtkPmM7YysrKXt2YXIgZT1iW2NdLGY9ZStcIk1hdGNoZXNTZWxlY3RvclwiO2lmKGFbZl0pcmV0dXJuIGZ9fSgpO2lmKGcpe3ZhciBoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaT1iKGgsXCJkaXZcIik7Zj1pP2I6ZX1lbHNlIGY9ZDtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwibWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yXCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gZn0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWY6d2luZG93Lm1hdGNoZXNTZWxlY3Rvcj1mfShFbGVtZW50LnByb3RvdHlwZSksZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZml6enktdWktdXRpbHMvdXRpbHNcIixbXCJkb2MtcmVhZHkvZG9jLXJlYWR5XCIsXCJtYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3JcIl0sZnVuY3Rpb24oYyxkKXtyZXR1cm4gYihhLGMsZCl9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKGEscmVxdWlyZShcImRvYy1yZWFkeVwiKSxyZXF1aXJlKFwiZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3RvclwiKSk6YS5maXp6eVVJVXRpbHM9YihhLGEuZG9jUmVhZHksYS5tYXRjaGVzU2VsZWN0b3IpfSh3aW5kb3csZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXt9O2QuZXh0ZW5kPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjIGluIGIpYVtjXT1iW2NdO3JldHVybiBhfSxkLm1vZHVsbz1mdW5jdGlvbihhLGIpe3JldHVybihhJWIrYiklYn07dmFyIGU9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztkLmlzQXJyYXk9ZnVuY3Rpb24oYSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT1lLmNhbGwoYSl9LGQubWFrZUFycmF5PWZ1bmN0aW9uKGEpe3ZhciBiPVtdO2lmKGQuaXNBcnJheShhKSliPWE7ZWxzZSBpZihhJiZcIm51bWJlclwiPT10eXBlb2YgYS5sZW5ndGgpZm9yKHZhciBjPTAsZT1hLmxlbmd0aDtlPmM7YysrKWIucHVzaChhW2NdKTtlbHNlIGIucHVzaChhKTtyZXR1cm4gYn0sZC5pbmRleE9mPUFycmF5LnByb3RvdHlwZS5pbmRleE9mP2Z1bmN0aW9uKGEsYil7cmV0dXJuIGEuaW5kZXhPZihiKX06ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LGQucmVtb3ZlRnJvbT1mdW5jdGlvbihhLGIpe3ZhciBjPWQuaW5kZXhPZihhLGIpOy0xIT1jJiZhLnNwbGljZShjLDEpfSxkLmlzRWxlbWVudD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBIVE1MRWxlbWVudHx8XCJvYmplY3RcIj09dHlwZW9mIEhUTUxFbGVtZW50P2Z1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgSFRNTEVsZW1lbnR9OmZ1bmN0aW9uKGEpe3JldHVybiBhJiZcIm9iamVjdFwiPT10eXBlb2YgYSYmMT09YS5ub2RlVHlwZSYmXCJzdHJpbmdcIj09dHlwZW9mIGEubm9kZU5hbWV9LGQuc2V0VGV4dD1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxjKXtiPWJ8fCh2b2lkIDAhPT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQudGV4dENvbnRlbnQ/XCJ0ZXh0Q29udGVudFwiOlwiaW5uZXJUZXh0XCIpLGFbYl09Y312YXIgYjtyZXR1cm4gYX0oKSxkLmdldFBhcmVudD1mdW5jdGlvbihhLGIpe2Zvcig7YSE9ZG9jdW1lbnQuYm9keTspaWYoYT1hLnBhcmVudE5vZGUsYyhhLGIpKXJldHVybiBhfSxkLmdldFF1ZXJ5RWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpOmF9LGQuaGFuZGxlRXZlbnQ9ZnVuY3Rpb24oYSl7dmFyIGI9XCJvblwiK2EudHlwZTt0aGlzW2JdJiZ0aGlzW2JdKGEpfSxkLmZpbHRlckZpbmRFbGVtZW50cz1mdW5jdGlvbihhLGIpe2E9ZC5tYWtlQXJyYXkoYSk7Zm9yKHZhciBlPVtdLGY9MCxnPWEubGVuZ3RoO2c+ZjtmKyspe3ZhciBoPWFbZl07aWYoZC5pc0VsZW1lbnQoaCkpaWYoYil7YyhoLGIpJiZlLnB1c2goaCk7Zm9yKHZhciBpPWgucXVlcnlTZWxlY3RvckFsbChiKSxqPTAsaz1pLmxlbmd0aDtrPmo7aisrKWUucHVzaChpW2pdKX1lbHNlIGUucHVzaChoKX1yZXR1cm4gZX0sZC5kZWJvdW5jZU1ldGhvZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5wcm90b3R5cGVbYl0sZT1iK1wiVGltZW91dFwiO2EucHJvdG90eXBlW2JdPWZ1bmN0aW9uKCl7dmFyIGE9dGhpc1tlXTthJiZjbGVhclRpbWVvdXQoYSk7dmFyIGI9YXJndW1lbnRzLGY9dGhpczt0aGlzW2VdPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtkLmFwcGx5KGYsYiksZGVsZXRlIGZbZV19LGN8fDEwMCl9fSxkLnRvRGFzaGVkPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoLyguKShbQS1aXSkvZyxmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGIrXCItXCIrY30pLnRvTG93ZXJDYXNlKCl9O3ZhciBmPWEuY29uc29sZTtyZXR1cm4gZC5odG1sSW5pdD1mdW5jdGlvbihjLGUpe2IoZnVuY3Rpb24oKXtmb3IodmFyIGI9ZC50b0Rhc2hlZChlKSxnPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtXCIrYiksaD1cImRhdGEtXCIrYitcIi1vcHRpb25zXCIsaT0wLGo9Zy5sZW5ndGg7aj5pO2krKyl7dmFyIGssbD1nW2ldLG09bC5nZXRBdHRyaWJ1dGUoaCk7dHJ5e2s9bSYmSlNPTi5wYXJzZShtKX1jYXRjaChuKXtmJiZmLmVycm9yKFwiRXJyb3IgcGFyc2luZyBcIitoK1wiIG9uIFwiK2wubm9kZU5hbWUudG9Mb3dlckNhc2UoKSsobC5pZD9cIiNcIitsLmlkOlwiXCIpK1wiOiBcIituKTtjb250aW51ZX12YXIgbz1uZXcgYyhsLGspLHA9YS5qUXVlcnk7cCYmcC5kYXRhKGwsZSxvKX19KX0sZH0pLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIm91dGxheWVyL2l0ZW1cIixbXCJldmVudEVtaXR0ZXIvRXZlbnRFbWl0dGVyXCIsXCJnZXQtc2l6ZS9nZXQtc2l6ZVwiLFwiZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eVwiLFwiZml6enktdWktdXRpbHMvdXRpbHNcIl0sZnVuY3Rpb24oYyxkLGUsZil7cmV0dXJuIGIoYSxjLGQsZSxmKX0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWIoYSxyZXF1aXJlKFwid29sZnk4Ny1ldmVudGVtaXR0ZXJcIikscmVxdWlyZShcImdldC1zaXplXCIpLHJlcXVpcmUoXCJkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHlcIikscmVxdWlyZShcImZpenp5LXVpLXV0aWxzXCIpKTooYS5PdXRsYXllcj17fSxhLk91dGxheWVyLkl0ZW09YihhLGEuRXZlbnRFbWl0dGVyLGEuZ2V0U2l6ZSxhLmdldFN0eWxlUHJvcGVydHksYS5maXp6eVVJVXRpbHMpKX0od2luZG93LGZ1bmN0aW9uKGEsYixjLGQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZihhKXtmb3IodmFyIGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4gYj1udWxsLCEwfWZ1bmN0aW9uIGcoYSxiKXthJiYodGhpcy5lbGVtZW50PWEsdGhpcy5sYXlvdXQ9Yix0aGlzLnBvc2l0aW9uPXt4OjAseTowfSx0aGlzLl9jcmVhdGUoKSl9ZnVuY3Rpb24gaChhKXtyZXR1cm4gYS5yZXBsYWNlKC8oW0EtWl0pL2csZnVuY3Rpb24oYSl7cmV0dXJuXCItXCIrYS50b0xvd2VyQ2FzZSgpfSl9dmFyIGk9YS5nZXRDb21wdXRlZFN0eWxlLGo9aT9mdW5jdGlvbihhKXtyZXR1cm4gaShhLG51bGwpfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5jdXJyZW50U3R5bGV9LGs9ZChcInRyYW5zaXRpb25cIiksbD1kKFwidHJhbnNmb3JtXCIpLG09ayYmbCxuPSEhZChcInBlcnNwZWN0aXZlXCIpLG89e1dlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsTW96VHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIixPVHJhbnNpdGlvbjpcIm90cmFuc2l0aW9uZW5kXCIsdHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIn1ba10scD1bXCJ0cmFuc2Zvcm1cIixcInRyYW5zaXRpb25cIixcInRyYW5zaXRpb25EdXJhdGlvblwiLFwidHJhbnNpdGlvblByb3BlcnR5XCJdLHE9ZnVuY3Rpb24oKXtmb3IodmFyIGE9e30sYj0wLGM9cC5sZW5ndGg7Yz5iO2IrKyl7dmFyIGU9cFtiXSxmPWQoZSk7ZiYmZiE9PWUmJihhW2VdPWYpfXJldHVybiBhfSgpO2UuZXh0ZW5kKGcucHJvdG90eXBlLGIucHJvdG90eXBlKSxnLnByb3RvdHlwZS5fY3JlYXRlPWZ1bmN0aW9uKCl7dGhpcy5fdHJhbnNuPXtpbmdQcm9wZXJ0aWVzOnt9LGNsZWFuOnt9LG9uRW5kOnt9fSx0aGlzLmNzcyh7cG9zaXRpb246XCJhYnNvbHV0ZVwifSl9LGcucHJvdG90eXBlLmhhbmRsZUV2ZW50PWZ1bmN0aW9uKGEpe3ZhciBiPVwib25cIithLnR5cGU7dGhpc1tiXSYmdGhpc1tiXShhKX0sZy5wcm90b3R5cGUuZ2V0U2l6ZT1mdW5jdGlvbigpe3RoaXMuc2l6ZT1jKHRoaXMuZWxlbWVudCl9LGcucHJvdG90eXBlLmNzcz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmVsZW1lbnQuc3R5bGU7Zm9yKHZhciBjIGluIGEpe3ZhciBkPXFbY118fGM7YltkXT1hW2NdfX0sZy5wcm90b3R5cGUuZ2V0UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgYT1qKHRoaXMuZWxlbWVudCksYj10aGlzLmxheW91dC5vcHRpb25zLGM9Yi5pc09yaWdpbkxlZnQsZD1iLmlzT3JpZ2luVG9wLGU9YVtjP1wibGVmdFwiOlwicmlnaHRcIl0sZj1hW2Q/XCJ0b3BcIjpcImJvdHRvbVwiXSxnPXRoaXMubGF5b3V0LnNpemUsaD0tMSE9ZS5pbmRleE9mKFwiJVwiKT9wYXJzZUZsb2F0KGUpLzEwMCpnLndpZHRoOnBhcnNlSW50KGUsMTApLGk9LTEhPWYuaW5kZXhPZihcIiVcIik/cGFyc2VGbG9hdChmKS8xMDAqZy5oZWlnaHQ6cGFyc2VJbnQoZiwxMCk7aD1pc05hTihoKT8wOmgsaT1pc05hTihpKT8wOmksaC09Yz9nLnBhZGRpbmdMZWZ0OmcucGFkZGluZ1JpZ2h0LGktPWQ/Zy5wYWRkaW5nVG9wOmcucGFkZGluZ0JvdHRvbSx0aGlzLnBvc2l0aW9uLng9aCx0aGlzLnBvc2l0aW9uLnk9aX0sZy5wcm90b3R5cGUubGF5b3V0UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmxheW91dC5zaXplLGI9dGhpcy5sYXlvdXQub3B0aW9ucyxjPXt9LGQ9Yi5pc09yaWdpbkxlZnQ/XCJwYWRkaW5nTGVmdFwiOlwicGFkZGluZ1JpZ2h0XCIsZT1iLmlzT3JpZ2luTGVmdD9cImxlZnRcIjpcInJpZ2h0XCIsZj1iLmlzT3JpZ2luTGVmdD9cInJpZ2h0XCI6XCJsZWZ0XCIsZz10aGlzLnBvc2l0aW9uLngrYVtkXTtjW2VdPXRoaXMuZ2V0WFZhbHVlKGcpLGNbZl09XCJcIjt2YXIgaD1iLmlzT3JpZ2luVG9wP1wicGFkZGluZ1RvcFwiOlwicGFkZGluZ0JvdHRvbVwiLGk9Yi5pc09yaWdpblRvcD9cInRvcFwiOlwiYm90dG9tXCIsaj1iLmlzT3JpZ2luVG9wP1wiYm90dG9tXCI6XCJ0b3BcIixrPXRoaXMucG9zaXRpb24ueSthW2hdO2NbaV09dGhpcy5nZXRZVmFsdWUoayksY1tqXT1cIlwiLHRoaXMuY3NzKGMpLHRoaXMuZW1pdEV2ZW50KFwibGF5b3V0XCIsW3RoaXNdKX0sZy5wcm90b3R5cGUuZ2V0WFZhbHVlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGF5b3V0Lm9wdGlvbnM7cmV0dXJuIGIucGVyY2VudFBvc2l0aW9uJiYhYi5pc0hvcml6b250YWw/YS90aGlzLmxheW91dC5zaXplLndpZHRoKjEwMCtcIiVcIjphK1wicHhcIn0sZy5wcm90b3R5cGUuZ2V0WVZhbHVlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGF5b3V0Lm9wdGlvbnM7cmV0dXJuIGIucGVyY2VudFBvc2l0aW9uJiZiLmlzSG9yaXpvbnRhbD9hL3RoaXMubGF5b3V0LnNpemUuaGVpZ2h0KjEwMCtcIiVcIjphK1wicHhcIn0sZy5wcm90b3R5cGUuX3RyYW5zaXRpb25Ubz1mdW5jdGlvbihhLGIpe3RoaXMuZ2V0UG9zaXRpb24oKTt2YXIgYz10aGlzLnBvc2l0aW9uLngsZD10aGlzLnBvc2l0aW9uLnksZT1wYXJzZUludChhLDEwKSxmPXBhcnNlSW50KGIsMTApLGc9ZT09PXRoaXMucG9zaXRpb24ueCYmZj09PXRoaXMucG9zaXRpb24ueTtpZih0aGlzLnNldFBvc2l0aW9uKGEsYiksZyYmIXRoaXMuaXNUcmFuc2l0aW9uaW5nKXJldHVybiB2b2lkIHRoaXMubGF5b3V0UG9zaXRpb24oKTt2YXIgaD1hLWMsaT1iLWQsaj17fTtqLnRyYW5zZm9ybT10aGlzLmdldFRyYW5zbGF0ZShoLGkpLHRoaXMudHJhbnNpdGlvbih7dG86aixvblRyYW5zaXRpb25FbmQ6e3RyYW5zZm9ybTp0aGlzLmxheW91dFBvc2l0aW9ufSxpc0NsZWFuaW5nOiEwfSl9LGcucHJvdG90eXBlLmdldFRyYW5zbGF0ZT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMubGF5b3V0Lm9wdGlvbnM7cmV0dXJuIGE9Yy5pc09yaWdpbkxlZnQ/YTotYSxiPWMuaXNPcmlnaW5Ub3A/YjotYixuP1widHJhbnNsYXRlM2QoXCIrYStcInB4LCBcIitiK1wicHgsIDApXCI6XCJ0cmFuc2xhdGUoXCIrYStcInB4LCBcIitiK1wicHgpXCJ9LGcucHJvdG90eXBlLmdvVG89ZnVuY3Rpb24oYSxiKXt0aGlzLnNldFBvc2l0aW9uKGEsYiksdGhpcy5sYXlvdXRQb3NpdGlvbigpfSxnLnByb3RvdHlwZS5tb3ZlVG89bT9nLnByb3RvdHlwZS5fdHJhbnNpdGlvblRvOmcucHJvdG90eXBlLmdvVG8sZy5wcm90b3R5cGUuc2V0UG9zaXRpb249ZnVuY3Rpb24oYSxiKXt0aGlzLnBvc2l0aW9uLng9cGFyc2VJbnQoYSwxMCksdGhpcy5wb3NpdGlvbi55PXBhcnNlSW50KGIsMTApfSxnLnByb3RvdHlwZS5fbm9uVHJhbnNpdGlvbj1mdW5jdGlvbihhKXt0aGlzLmNzcyhhLnRvKSxhLmlzQ2xlYW5pbmcmJnRoaXMuX3JlbW92ZVN0eWxlcyhhLnRvKTtmb3IodmFyIGIgaW4gYS5vblRyYW5zaXRpb25FbmQpYS5vblRyYW5zaXRpb25FbmRbYl0uY2FsbCh0aGlzKX0sZy5wcm90b3R5cGUuX3RyYW5zaXRpb249ZnVuY3Rpb24oYSl7aWYoIXBhcnNlRmxvYXQodGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24pKXJldHVybiB2b2lkIHRoaXMuX25vblRyYW5zaXRpb24oYSk7dmFyIGI9dGhpcy5fdHJhbnNuO2Zvcih2YXIgYyBpbiBhLm9uVHJhbnNpdGlvbkVuZCliLm9uRW5kW2NdPWEub25UcmFuc2l0aW9uRW5kW2NdO2ZvcihjIGluIGEudG8pYi5pbmdQcm9wZXJ0aWVzW2NdPSEwLGEuaXNDbGVhbmluZyYmKGIuY2xlYW5bY109ITApO2lmKGEuZnJvbSl7dGhpcy5jc3MoYS5mcm9tKTt2YXIgZD10aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O2Q9bnVsbH10aGlzLmVuYWJsZVRyYW5zaXRpb24oYS50byksdGhpcy5jc3MoYS50byksdGhpcy5pc1RyYW5zaXRpb25pbmc9ITB9O3ZhciByPVwib3BhY2l0eSxcIitoKHEudHJhbnNmb3JtfHxcInRyYW5zZm9ybVwiKTtnLnByb3RvdHlwZS5lbmFibGVUcmFuc2l0aW9uPWZ1bmN0aW9uKCl7dGhpcy5pc1RyYW5zaXRpb25pbmd8fCh0aGlzLmNzcyh7dHJhbnNpdGlvblByb3BlcnR5OnIsdHJhbnNpdGlvbkR1cmF0aW9uOnRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9ufSksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobyx0aGlzLCExKSl9LGcucHJvdG90eXBlLnRyYW5zaXRpb249Zy5wcm90b3R5cGVbaz9cIl90cmFuc2l0aW9uXCI6XCJfbm9uVHJhbnNpdGlvblwiXSxnLnByb3RvdHlwZS5vbndlYmtpdFRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24oYSl7dGhpcy5vbnRyYW5zaXRpb25lbmQoYSl9LGcucHJvdG90eXBlLm9ub3RyYW5zaXRpb25lbmQ9ZnVuY3Rpb24oYSl7dGhpcy5vbnRyYW5zaXRpb25lbmQoYSl9O3ZhciBzPXtcIi13ZWJraXQtdHJhbnNmb3JtXCI6XCJ0cmFuc2Zvcm1cIixcIi1tb3otdHJhbnNmb3JtXCI6XCJ0cmFuc2Zvcm1cIixcIi1vLXRyYW5zZm9ybVwiOlwidHJhbnNmb3JtXCJ9O2cucHJvdG90eXBlLm9udHJhbnNpdGlvbmVuZD1mdW5jdGlvbihhKXtpZihhLnRhcmdldD09PXRoaXMuZWxlbWVudCl7dmFyIGI9dGhpcy5fdHJhbnNuLGM9c1thLnByb3BlcnR5TmFtZV18fGEucHJvcGVydHlOYW1lO2lmKGRlbGV0ZSBiLmluZ1Byb3BlcnRpZXNbY10sZihiLmluZ1Byb3BlcnRpZXMpJiZ0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCksYyBpbiBiLmNsZWFuJiYodGhpcy5lbGVtZW50LnN0eWxlW2EucHJvcGVydHlOYW1lXT1cIlwiLGRlbGV0ZSBiLmNsZWFuW2NdKSxjIGluIGIub25FbmQpe3ZhciBkPWIub25FbmRbY107ZC5jYWxsKHRoaXMpLGRlbGV0ZSBiLm9uRW5kW2NdfXRoaXMuZW1pdEV2ZW50KFwidHJhbnNpdGlvbkVuZFwiLFt0aGlzXSl9fSxnLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbj1mdW5jdGlvbigpe3RoaXMucmVtb3ZlVHJhbnNpdGlvblN0eWxlcygpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG8sdGhpcywhMSksdGhpcy5pc1RyYW5zaXRpb25pbmc9ITF9LGcucHJvdG90eXBlLl9yZW1vdmVTdHlsZXM9ZnVuY3Rpb24oYSl7dmFyIGI9e307Zm9yKHZhciBjIGluIGEpYltjXT1cIlwiO3RoaXMuY3NzKGIpfTt2YXIgdD17dHJhbnNpdGlvblByb3BlcnR5OlwiXCIsdHJhbnNpdGlvbkR1cmF0aW9uOlwiXCJ9O3JldHVybiBnLnByb3RvdHlwZS5yZW1vdmVUcmFuc2l0aW9uU3R5bGVzPWZ1bmN0aW9uKCl7dGhpcy5jc3ModCl9LGcucHJvdG90eXBlLnJlbW92ZUVsZW09ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpLHRoaXMuY3NzKHtkaXNwbGF5OlwiXCJ9KSx0aGlzLmVtaXRFdmVudChcInJlbW92ZVwiLFt0aGlzXSl9LGcucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe2lmKCFrfHwhcGFyc2VGbG9hdCh0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbikpcmV0dXJuIHZvaWQgdGhpcy5yZW1vdmVFbGVtKCk7dmFyIGE9dGhpczt0aGlzLm9uY2UoXCJ0cmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXthLnJlbW92ZUVsZW0oKX0pLHRoaXMuaGlkZSgpfSxnLnByb3RvdHlwZS5yZXZlYWw9ZnVuY3Rpb24oKXtkZWxldGUgdGhpcy5pc0hpZGRlbix0aGlzLmNzcyh7ZGlzcGxheTpcIlwifSk7dmFyIGE9dGhpcy5sYXlvdXQub3B0aW9ucyxiPXt9LGM9dGhpcy5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5KFwidmlzaWJsZVN0eWxlXCIpO2JbY109dGhpcy5vblJldmVhbFRyYW5zaXRpb25FbmQsdGhpcy50cmFuc2l0aW9uKHtmcm9tOmEuaGlkZGVuU3R5bGUsdG86YS52aXNpYmxlU3R5bGUsaXNDbGVhbmluZzohMCxvblRyYW5zaXRpb25FbmQ6Yn0pfSxnLnByb3RvdHlwZS5vblJldmVhbFRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24oKXt0aGlzLmlzSGlkZGVufHx0aGlzLmVtaXRFdmVudChcInJldmVhbFwiKX0sZy5wcm90b3R5cGUuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmxheW91dC5vcHRpb25zW2FdO2lmKGIub3BhY2l0eSlyZXR1cm5cIm9wYWNpdHlcIjtmb3IodmFyIGMgaW4gYilyZXR1cm4gY30sZy5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbigpe3RoaXMuaXNIaWRkZW49ITAsdGhpcy5jc3Moe2Rpc3BsYXk6XCJcIn0pO3ZhciBhPXRoaXMubGF5b3V0Lm9wdGlvbnMsYj17fSxjPXRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eShcImhpZGRlblN0eWxlXCIpO2JbY109dGhpcy5vbkhpZGVUcmFuc2l0aW9uRW5kLHRoaXMudHJhbnNpdGlvbih7ZnJvbTphLnZpc2libGVTdHlsZSx0bzphLmhpZGRlblN0eWxlLGlzQ2xlYW5pbmc6ITAsb25UcmFuc2l0aW9uRW5kOmJ9KX0sZy5wcm90b3R5cGUub25IaWRlVHJhbnNpdGlvbkVuZD1mdW5jdGlvbigpe3RoaXMuaXNIaWRkZW4mJih0aGlzLmNzcyh7ZGlzcGxheTpcIm5vbmVcIn0pLHRoaXMuZW1pdEV2ZW50KFwiaGlkZVwiKSl9LGcucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmNzcyh7cG9zaXRpb246XCJcIixsZWZ0OlwiXCIscmlnaHQ6XCJcIix0b3A6XCJcIixib3R0b206XCJcIix0cmFuc2l0aW9uOlwiXCIsdHJhbnNmb3JtOlwiXCJ9KX0sZ30pLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIm91dGxheWVyL291dGxheWVyXCIsW1wiZXZlbnRpZS9ldmVudGllXCIsXCJldmVudEVtaXR0ZXIvRXZlbnRFbWl0dGVyXCIsXCJnZXQtc2l6ZS9nZXQtc2l6ZVwiLFwiZml6enktdWktdXRpbHMvdXRpbHNcIixcIi4vaXRlbVwiXSxmdW5jdGlvbihjLGQsZSxmLGcpe3JldHVybiBiKGEsYyxkLGUsZixnKX0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWIoYSxyZXF1aXJlKFwiZXZlbnRpZVwiKSxyZXF1aXJlKFwid29sZnk4Ny1ldmVudGVtaXR0ZXJcIikscmVxdWlyZShcImdldC1zaXplXCIpLHJlcXVpcmUoXCJmaXp6eS11aS11dGlsc1wiKSxyZXF1aXJlKFwiLi9pdGVtXCIpKTphLk91dGxheWVyPWIoYSxhLmV2ZW50aWUsYS5FdmVudEVtaXR0ZXIsYS5nZXRTaXplLGEuZml6enlVSVV0aWxzLGEuT3V0bGF5ZXIuSXRlbSl9KHdpbmRvdyxmdW5jdGlvbihhLGIsYyxkLGUsZil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZyhhLGIpe3ZhciBjPWUuZ2V0UXVlcnlFbGVtZW50KGEpO2lmKCFjKXJldHVybiB2b2lkKGgmJmguZXJyb3IoXCJCYWQgZWxlbWVudCBmb3IgXCIrdGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UrXCI6IFwiKyhjfHxhKSkpO3RoaXMuZWxlbWVudD1jLGkmJih0aGlzLiRlbGVtZW50PWkodGhpcy5lbGVtZW50KSksdGhpcy5vcHRpb25zPWUuZXh0ZW5kKHt9LHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdHMpLHRoaXMub3B0aW9uKGIpO3ZhciBkPSsrazt0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEPWQsbFtkXT10aGlzLHRoaXMuX2NyZWF0ZSgpLHRoaXMub3B0aW9ucy5pc0luaXRMYXlvdXQmJnRoaXMubGF5b3V0KCl9dmFyIGg9YS5jb25zb2xlLGk9YS5qUXVlcnksaj1mdW5jdGlvbigpe30saz0wLGw9e307cmV0dXJuIGcubmFtZXNwYWNlPVwib3V0bGF5ZXJcIixnLkl0ZW09ZixnLmRlZmF1bHRzPXtjb250YWluZXJTdHlsZTp7cG9zaXRpb246XCJyZWxhdGl2ZVwifSxpc0luaXRMYXlvdXQ6ITAsaXNPcmlnaW5MZWZ0OiEwLGlzT3JpZ2luVG9wOiEwLGlzUmVzaXplQm91bmQ6ITAsaXNSZXNpemluZ0NvbnRhaW5lcjohMCx0cmFuc2l0aW9uRHVyYXRpb246XCIwLjRzXCIsaGlkZGVuU3R5bGU6e29wYWNpdHk6MCx0cmFuc2Zvcm06XCJzY2FsZSgwLjAwMSlcIn0sdmlzaWJsZVN0eWxlOntvcGFjaXR5OjEsdHJhbnNmb3JtOlwic2NhbGUoMSlcIn19LGUuZXh0ZW5kKGcucHJvdG90eXBlLGMucHJvdG90eXBlKSxnLnByb3RvdHlwZS5vcHRpb249ZnVuY3Rpb24oYSl7ZS5leHRlbmQodGhpcy5vcHRpb25zLGEpfSxnLnByb3RvdHlwZS5fY3JlYXRlPWZ1bmN0aW9uKCl7dGhpcy5yZWxvYWRJdGVtcygpLHRoaXMuc3RhbXBzPVtdLHRoaXMuc3RhbXAodGhpcy5vcHRpb25zLnN0YW1wKSxlLmV4dGVuZCh0aGlzLmVsZW1lbnQuc3R5bGUsdGhpcy5vcHRpb25zLmNvbnRhaW5lclN0eWxlKSx0aGlzLm9wdGlvbnMuaXNSZXNpemVCb3VuZCYmdGhpcy5iaW5kUmVzaXplKCl9LGcucHJvdG90eXBlLnJlbG9hZEl0ZW1zPWZ1bmN0aW9uKCl7dGhpcy5pdGVtcz10aGlzLl9pdGVtaXplKHRoaXMuZWxlbWVudC5jaGlsZHJlbil9LGcucHJvdG90eXBlLl9pdGVtaXplPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj10aGlzLl9maWx0ZXJGaW5kSXRlbUVsZW1lbnRzKGEpLGM9dGhpcy5jb25zdHJ1Y3Rvci5JdGVtLGQ9W10sZT0wLGY9Yi5sZW5ndGg7Zj5lO2UrKyl7dmFyIGc9YltlXSxoPW5ldyBjKGcsdGhpcyk7ZC5wdXNoKGgpfXJldHVybiBkfSxnLnByb3RvdHlwZS5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cz1mdW5jdGlvbihhKXtyZXR1cm4gZS5maWx0ZXJGaW5kRWxlbWVudHMoYSx0aGlzLm9wdGlvbnMuaXRlbVNlbGVjdG9yKX0sZy5wcm90b3R5cGUuZ2V0SXRlbUVsZW1lbnRzPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdLGI9MCxjPXRoaXMuaXRlbXMubGVuZ3RoO2M+YjtiKyspYS5wdXNoKHRoaXMuaXRlbXNbYl0uZWxlbWVudCk7cmV0dXJuIGF9LGcucHJvdG90eXBlLmxheW91dD1mdW5jdGlvbigpe3RoaXMuX3Jlc2V0TGF5b3V0KCksdGhpcy5fbWFuYWdlU3RhbXBzKCk7dmFyIGE9dm9pZCAwIT09dGhpcy5vcHRpb25zLmlzTGF5b3V0SW5zdGFudD90aGlzLm9wdGlvbnMuaXNMYXlvdXRJbnN0YW50OiF0aGlzLl9pc0xheW91dEluaXRlZDt0aGlzLmxheW91dEl0ZW1zKHRoaXMuaXRlbXMsYSksdGhpcy5faXNMYXlvdXRJbml0ZWQ9ITB9LGcucHJvdG90eXBlLl9pbml0PWcucHJvdG90eXBlLmxheW91dCxnLnByb3RvdHlwZS5fcmVzZXRMYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLmdldFNpemUoKX0sZy5wcm90b3R5cGUuZ2V0U2l6ZT1mdW5jdGlvbigpe3RoaXMuc2l6ZT1kKHRoaXMuZWxlbWVudCl9LGcucHJvdG90eXBlLl9nZXRNZWFzdXJlbWVudD1mdW5jdGlvbihhLGIpe3ZhciBjLGY9dGhpcy5vcHRpb25zW2FdO2Y/KFwic3RyaW5nXCI9PXR5cGVvZiBmP2M9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoZik6ZS5pc0VsZW1lbnQoZikmJihjPWYpLHRoaXNbYV09Yz9kKGMpW2JdOmYpOnRoaXNbYV09MH0sZy5wcm90b3R5cGUubGF5b3V0SXRlbXM9ZnVuY3Rpb24oYSxiKXthPXRoaXMuX2dldEl0ZW1zRm9yTGF5b3V0KGEpLHRoaXMuX2xheW91dEl0ZW1zKGEsYiksdGhpcy5fcG9zdExheW91dCgpfSxnLnByb3RvdHlwZS5fZ2V0SXRlbXNGb3JMYXlvdXQ9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspe3ZhciBlPWFbY107ZS5pc0lnbm9yZWR8fGIucHVzaChlKX1yZXR1cm4gYn0sZy5wcm90b3R5cGUuX2xheW91dEl0ZW1zPWZ1bmN0aW9uKGEsYil7aWYodGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyhcImxheW91dFwiLGEpLGEmJmEubGVuZ3RoKXtmb3IodmFyIGM9W10sZD0wLGU9YS5sZW5ndGg7ZT5kO2QrKyl7dmFyIGY9YVtkXSxnPXRoaXMuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbihmKTtnLml0ZW09ZixnLmlzSW5zdGFudD1ifHxmLmlzTGF5b3V0SW5zdGFudCxjLnB1c2goZyl9dGhpcy5fcHJvY2Vzc0xheW91dFF1ZXVlKGMpfX0sZy5wcm90b3R5cGUuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbigpe3JldHVybnt4OjAseTowfX0sZy5wcm90b3R5cGUuX3Byb2Nlc3NMYXlvdXRRdWV1ZT1mdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoO2M+YjtiKyspe3ZhciBkPWFbYl07dGhpcy5fcG9zaXRpb25JdGVtKGQuaXRlbSxkLngsZC55LGQuaXNJbnN0YW50KX19LGcucHJvdG90eXBlLl9wb3NpdGlvbkl0ZW09ZnVuY3Rpb24oYSxiLGMsZCl7ZD9hLmdvVG8oYixjKTphLm1vdmVUbyhiLGMpfSxnLnByb3RvdHlwZS5fcG9zdExheW91dD1mdW5jdGlvbigpe3RoaXMucmVzaXplQ29udGFpbmVyKCl9LGcucHJvdG90eXBlLnJlc2l6ZUNvbnRhaW5lcj1mdW5jdGlvbigpe2lmKHRoaXMub3B0aW9ucy5pc1Jlc2l6aW5nQ29udGFpbmVyKXt2YXIgYT10aGlzLl9nZXRDb250YWluZXJTaXplKCk7YSYmKHRoaXMuX3NldENvbnRhaW5lck1lYXN1cmUoYS53aWR0aCwhMCksdGhpcy5fc2V0Q29udGFpbmVyTWVhc3VyZShhLmhlaWdodCwhMSkpfX0sZy5wcm90b3R5cGUuX2dldENvbnRhaW5lclNpemU9aixnLnByb3RvdHlwZS5fc2V0Q29udGFpbmVyTWVhc3VyZT1mdW5jdGlvbihhLGIpe2lmKHZvaWQgMCE9PWEpe3ZhciBjPXRoaXMuc2l6ZTtjLmlzQm9yZGVyQm94JiYoYSs9Yj9jLnBhZGRpbmdMZWZ0K2MucGFkZGluZ1JpZ2h0K2MuYm9yZGVyTGVmdFdpZHRoK2MuYm9yZGVyUmlnaHRXaWR0aDpjLnBhZGRpbmdCb3R0b20rYy5wYWRkaW5nVG9wK2MuYm9yZGVyVG9wV2lkdGgrYy5ib3JkZXJCb3R0b21XaWR0aCksYT1NYXRoLm1heChhLDApLHRoaXMuZWxlbWVudC5zdHlsZVtiP1wid2lkdGhcIjpcImhlaWdodFwiXT1hK1wicHhcIn19LGcucHJvdG90eXBlLl9lbWl0Q29tcGxldGVPbkl0ZW1zPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe2UuZGlzcGF0Y2hFdmVudChhK1wiQ29tcGxldGVcIixudWxsLFtiXSl9ZnVuY3Rpb24gZCgpe2crKyxnPT09ZiYmYygpfXZhciBlPXRoaXMsZj1iLmxlbmd0aDtpZighYnx8IWYpcmV0dXJuIHZvaWQgYygpO2Zvcih2YXIgZz0wLGg9MCxpPWIubGVuZ3RoO2k+aDtoKyspe3ZhciBqPWJbaF07ai5vbmNlKGEsZCl9fSxnLnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iP1tiXS5jb25jYXQoYyk6YztpZih0aGlzLmVtaXRFdmVudChhLGQpLGkpaWYodGhpcy4kZWxlbWVudD10aGlzLiRlbGVtZW50fHxpKHRoaXMuZWxlbWVudCksYil7dmFyIGU9aS5FdmVudChiKTtlLnR5cGU9YSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSxjKX1lbHNlIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihhLGMpfSxnLnByb3RvdHlwZS5pZ25vcmU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5nZXRJdGVtKGEpO2ImJihiLmlzSWdub3JlZD0hMCl9LGcucHJvdG90eXBlLnVuaWdub3JlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZ2V0SXRlbShhKTtiJiZkZWxldGUgYi5pc0lnbm9yZWR9LGcucHJvdG90eXBlLnN0YW1wPWZ1bmN0aW9uKGEpe2lmKGE9dGhpcy5fZmluZChhKSl7dGhpcy5zdGFtcHM9dGhpcy5zdGFtcHMuY29uY2F0KGEpO2Zvcih2YXIgYj0wLGM9YS5sZW5ndGg7Yz5iO2IrKyl7dmFyIGQ9YVtiXTt0aGlzLmlnbm9yZShkKX19fSxnLnByb3RvdHlwZS51bnN0YW1wPWZ1bmN0aW9uKGEpe2lmKGE9dGhpcy5fZmluZChhKSlmb3IodmFyIGI9MCxjPWEubGVuZ3RoO2M+YjtiKyspe3ZhciBkPWFbYl07ZS5yZW1vdmVGcm9tKHRoaXMuc3RhbXBzLGQpLHRoaXMudW5pZ25vcmUoZCl9fSxnLnByb3RvdHlwZS5fZmluZD1mdW5jdGlvbihhKXtyZXR1cm4gYT8oXCJzdHJpbmdcIj09dHlwZW9mIGEmJihhPXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGEpKSxhPWUubWFrZUFycmF5KGEpKTp2b2lkIDB9LGcucHJvdG90eXBlLl9tYW5hZ2VTdGFtcHM9ZnVuY3Rpb24oKXtpZih0aGlzLnN0YW1wcyYmdGhpcy5zdGFtcHMubGVuZ3RoKXt0aGlzLl9nZXRCb3VuZGluZ1JlY3QoKTtmb3IodmFyIGE9MCxiPXRoaXMuc3RhbXBzLmxlbmd0aDtiPmE7YSsrKXt2YXIgYz10aGlzLnN0YW1wc1thXTt0aGlzLl9tYW5hZ2VTdGFtcChjKX19fSxnLnByb3RvdHlwZS5fZ2V0Qm91bmRpbmdSZWN0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGI9dGhpcy5zaXplO3RoaXMuX2JvdW5kaW5nUmVjdD17bGVmdDphLmxlZnQrYi5wYWRkaW5nTGVmdCtiLmJvcmRlckxlZnRXaWR0aCx0b3A6YS50b3ArYi5wYWRkaW5nVG9wK2IuYm9yZGVyVG9wV2lkdGgscmlnaHQ6YS5yaWdodC0oYi5wYWRkaW5nUmlnaHQrYi5ib3JkZXJSaWdodFdpZHRoKSxib3R0b206YS5ib3R0b20tKGIucGFkZGluZ0JvdHRvbStiLmJvcmRlckJvdHRvbVdpZHRoKX19LGcucHJvdG90eXBlLl9tYW5hZ2VTdGFtcD1qLGcucHJvdG90eXBlLl9nZXRFbGVtZW50T2Zmc2V0PWZ1bmN0aW9uKGEpe3ZhciBiPWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYz10aGlzLl9ib3VuZGluZ1JlY3QsZT1kKGEpLGY9e2xlZnQ6Yi5sZWZ0LWMubGVmdC1lLm1hcmdpbkxlZnQsdG9wOmIudG9wLWMudG9wLWUubWFyZ2luVG9wLHJpZ2h0OmMucmlnaHQtYi5yaWdodC1lLm1hcmdpblJpZ2h0LGJvdHRvbTpjLmJvdHRvbS1iLmJvdHRvbS1lLm1hcmdpbkJvdHRvbX07cmV0dXJuIGZ9LGcucHJvdG90eXBlLmhhbmRsZUV2ZW50PWZ1bmN0aW9uKGEpe3ZhciBiPVwib25cIithLnR5cGU7dGhpc1tiXSYmdGhpc1tiXShhKX0sZy5wcm90b3R5cGUuYmluZFJlc2l6ZT1mdW5jdGlvbigpe3RoaXMuaXNSZXNpemVCb3VuZHx8KGIuYmluZChhLFwicmVzaXplXCIsdGhpcyksdGhpcy5pc1Jlc2l6ZUJvdW5kPSEwKX0sZy5wcm90b3R5cGUudW5iaW5kUmVzaXplPWZ1bmN0aW9uKCl7dGhpcy5pc1Jlc2l6ZUJvdW5kJiZiLnVuYmluZChhLFwicmVzaXplXCIsdGhpcyksdGhpcy5pc1Jlc2l6ZUJvdW5kPSExfSxnLnByb3RvdHlwZS5vbnJlc2l6ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtiLnJlc2l6ZSgpLGRlbGV0ZSBiLnJlc2l6ZVRpbWVvdXR9dGhpcy5yZXNpemVUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTt2YXIgYj10aGlzO3RoaXMucmVzaXplVGltZW91dD1zZXRUaW1lb3V0KGEsMTAwKX0sZy5wcm90b3R5cGUucmVzaXplPWZ1bmN0aW9uKCl7dGhpcy5pc1Jlc2l6ZUJvdW5kJiZ0aGlzLm5lZWRzUmVzaXplTGF5b3V0KCkmJnRoaXMubGF5b3V0KCl9LGcucHJvdG90eXBlLm5lZWRzUmVzaXplTGF5b3V0PWZ1bmN0aW9uKCl7dmFyIGE9ZCh0aGlzLmVsZW1lbnQpLGI9dGhpcy5zaXplJiZhO3JldHVybiBiJiZhLmlubmVyV2lkdGghPT10aGlzLnNpemUuaW5uZXJXaWR0aH0sZy5wcm90b3R5cGUuYWRkSXRlbXM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5faXRlbWl6ZShhKTtyZXR1cm4gYi5sZW5ndGgmJih0aGlzLml0ZW1zPXRoaXMuaXRlbXMuY29uY2F0KGIpKSxifSxnLnByb3RvdHlwZS5hcHBlbmRlZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmFkZEl0ZW1zKGEpO2IubGVuZ3RoJiYodGhpcy5sYXlvdXRJdGVtcyhiLCEwKSx0aGlzLnJldmVhbChiKSl9LGcucHJvdG90eXBlLnByZXBlbmRlZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLl9pdGVtaXplKGEpO2lmKGIubGVuZ3RoKXt2YXIgYz10aGlzLml0ZW1zLnNsaWNlKDApO3RoaXMuaXRlbXM9Yi5jb25jYXQoYyksdGhpcy5fcmVzZXRMYXlvdXQoKSx0aGlzLl9tYW5hZ2VTdGFtcHMoKSx0aGlzLmxheW91dEl0ZW1zKGIsITApLHRoaXMucmV2ZWFsKGIpLHRoaXMubGF5b3V0SXRlbXMoYyl9fSxnLnByb3RvdHlwZS5yZXZlYWw9ZnVuY3Rpb24oYSl7dGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyhcInJldmVhbFwiLGEpO2Zvcih2YXIgYj1hJiZhLmxlbmd0aCxjPTA7YiYmYj5jO2MrKyl7dmFyIGQ9YVtjXTtkLnJldmVhbCgpfX0sZy5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbihhKXt0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKFwiaGlkZVwiLGEpO2Zvcih2YXIgYj1hJiZhLmxlbmd0aCxjPTA7YiYmYj5jO2MrKyl7dmFyIGQ9YVtjXTtkLmhpZGUoKX19LGcucHJvdG90eXBlLnJldmVhbEl0ZW1FbGVtZW50cz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmdldEl0ZW1zKGEpO3RoaXMucmV2ZWFsKGIpfSxnLnByb3RvdHlwZS5oaWRlSXRlbUVsZW1lbnRzPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZ2V0SXRlbXMoYSk7dGhpcy5oaWRlKGIpfSxnLnByb3RvdHlwZS5nZXRJdGVtPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wLGM9dGhpcy5pdGVtcy5sZW5ndGg7Yz5iO2IrKyl7dmFyIGQ9dGhpcy5pdGVtc1tiXTtpZihkLmVsZW1lbnQ9PT1hKXJldHVybiBkfX0sZy5wcm90b3R5cGUuZ2V0SXRlbXM9ZnVuY3Rpb24oYSl7YT1lLm1ha2VBcnJheShhKTtmb3IodmFyIGI9W10sYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKyl7dmFyIGY9YVtjXSxnPXRoaXMuZ2V0SXRlbShmKTtnJiZiLnB1c2goZyl9cmV0dXJuIGJ9LGcucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmdldEl0ZW1zKGEpO2lmKHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoXCJyZW1vdmVcIixiKSxiJiZiLmxlbmd0aClmb3IodmFyIGM9MCxkPWIubGVuZ3RoO2Q+YztjKyspe3ZhciBmPWJbY107Zi5yZW1vdmUoKSxlLnJlbW92ZUZyb20odGhpcy5pdGVtcyxmKX19LGcucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmVsZW1lbnQuc3R5bGU7YS5oZWlnaHQ9XCJcIixhLnBvc2l0aW9uPVwiXCIsYS53aWR0aD1cIlwiO2Zvcih2YXIgYj0wLGM9dGhpcy5pdGVtcy5sZW5ndGg7Yz5iO2IrKyl7dmFyIGQ9dGhpcy5pdGVtc1tiXTtkLmRlc3Ryb3koKX10aGlzLnVuYmluZFJlc2l6ZSgpO3ZhciBlPXRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7ZGVsZXRlIGxbZV0sZGVsZXRlIHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQsaSYmaS5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSl9LGcuZGF0YT1mdW5jdGlvbihhKXthPWUuZ2V0UXVlcnlFbGVtZW50KGEpO3ZhciBiPWEmJmEub3V0bGF5ZXJHVUlEO3JldHVybiBiJiZsW2JdfSxnLmNyZWF0ZT1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXtnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gT2JqZWN0LmNyZWF0ZT9jLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGcucHJvdG90eXBlKTplLmV4dGVuZChjLnByb3RvdHlwZSxnLnByb3RvdHlwZSksYy5wcm90b3R5cGUuY29uc3RydWN0b3I9YyxjLmRlZmF1bHRzPWUuZXh0ZW5kKHt9LGcuZGVmYXVsdHMpLGUuZXh0ZW5kKGMuZGVmYXVsdHMsYiksYy5wcm90b3R5cGUuc2V0dGluZ3M9e30sYy5uYW1lc3BhY2U9YSxjLmRhdGE9Zy5kYXRhLGMuSXRlbT1mdW5jdGlvbigpe2YuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxjLkl0ZW0ucHJvdG90eXBlPW5ldyBmLGUuaHRtbEluaXQoYyxhKSxpJiZpLmJyaWRnZXQmJmkuYnJpZGdldChhLGMpLGN9LGcuSXRlbT1mLGd9KSxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJpc290b3BlL2pzL2l0ZW1cIixbXCJvdXRsYXllci9vdXRsYXllclwiXSxiKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKHJlcXVpcmUoXCJvdXRsYXllclwiKSk6KGEuSXNvdG9wZT1hLklzb3RvcGV8fHt9LGEuSXNvdG9wZS5JdGVtPWIoYS5PdXRsYXllcikpfSh3aW5kb3csZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYigpe2EuSXRlbS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9Yi5wcm90b3R5cGU9bmV3IGEuSXRlbSxiLnByb3RvdHlwZS5fY3JlYXRlPWZ1bmN0aW9uKCl7dGhpcy5pZD10aGlzLmxheW91dC5pdGVtR1VJRCsrLGEuSXRlbS5wcm90b3R5cGUuX2NyZWF0ZS5jYWxsKHRoaXMpLHRoaXMuc29ydERhdGE9e319LGIucHJvdG90eXBlLnVwZGF0ZVNvcnREYXRhPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaXNJZ25vcmVkKXt0aGlzLnNvcnREYXRhLmlkPXRoaXMuaWQsdGhpcy5zb3J0RGF0YVtcIm9yaWdpbmFsLW9yZGVyXCJdPXRoaXMuaWQsdGhpcy5zb3J0RGF0YS5yYW5kb209TWF0aC5yYW5kb20oKTt2YXIgYT10aGlzLmxheW91dC5vcHRpb25zLmdldFNvcnREYXRhLGI9dGhpcy5sYXlvdXQuX3NvcnRlcnM7Zm9yKHZhciBjIGluIGEpe3ZhciBkPWJbY107dGhpcy5zb3J0RGF0YVtjXT1kKHRoaXMuZWxlbWVudCx0aGlzKX19fTt2YXIgYz1iLnByb3RvdHlwZS5kZXN0cm95O3JldHVybiBiLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5jc3Moe2Rpc3BsYXk6XCJcIn0pfSxifSksZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiaXNvdG9wZS9qcy9sYXlvdXQtbW9kZVwiLFtcImdldC1zaXplL2dldC1zaXplXCIsXCJvdXRsYXllci9vdXRsYXllclwiXSxiKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKHJlcXVpcmUoXCJnZXQtc2l6ZVwiKSxyZXF1aXJlKFwib3V0bGF5ZXJcIikpOihhLklzb3RvcGU9YS5Jc290b3BlfHx7fSxhLklzb3RvcGUuTGF5b3V0TW9kZT1iKGEuZ2V0U2l6ZSxhLk91dGxheWVyKSl9KHdpbmRvdyxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGMoYSl7dGhpcy5pc290b3BlPWEsYSYmKHRoaXMub3B0aW9ucz1hLm9wdGlvbnNbdGhpcy5uYW1lc3BhY2VdLHRoaXMuZWxlbWVudD1hLmVsZW1lbnQsdGhpcy5pdGVtcz1hLmZpbHRlcmVkSXRlbXMsdGhpcy5zaXplPWEuc2l6ZSl9cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYi5wcm90b3R5cGVbYV0uYXBwbHkodGhpcy5pc290b3BlLGFyZ3VtZW50cyl9fWZvcih2YXIgZD1bXCJfcmVzZXRMYXlvdXRcIixcIl9nZXRJdGVtTGF5b3V0UG9zaXRpb25cIixcIl9tYW5hZ2VTdGFtcFwiLFwiX2dldENvbnRhaW5lclNpemVcIixcIl9nZXRFbGVtZW50T2Zmc2V0XCIsXCJuZWVkc1Jlc2l6ZUxheW91dFwiXSxlPTAsZj1kLmxlbmd0aDtmPmU7ZSsrKXt2YXIgZz1kW2VdO2MucHJvdG90eXBlW2ddPWEoZyl9fSgpLGMucHJvdG90eXBlLm5lZWRzVmVydGljYWxSZXNpemVMYXlvdXQ9ZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMuaXNvdG9wZS5lbGVtZW50KSxjPXRoaXMuaXNvdG9wZS5zaXplJiZiO3JldHVybiBjJiZiLmlubmVySGVpZ2h0IT10aGlzLmlzb3RvcGUuc2l6ZS5pbm5lckhlaWdodH0sYy5wcm90b3R5cGUuX2dldE1lYXN1cmVtZW50PWZ1bmN0aW9uKCl7dGhpcy5pc290b3BlLl9nZXRNZWFzdXJlbWVudC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGMucHJvdG90eXBlLmdldENvbHVtbldpZHRoPWZ1bmN0aW9uKCl7dGhpcy5nZXRTZWdtZW50U2l6ZShcImNvbHVtblwiLFwiV2lkdGhcIil9LGMucHJvdG90eXBlLmdldFJvd0hlaWdodD1mdW5jdGlvbigpe3RoaXMuZ2V0U2VnbWVudFNpemUoXCJyb3dcIixcIkhlaWdodFwiKX0sYy5wcm90b3R5cGUuZ2V0U2VnbWVudFNpemU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hK2IsZD1cIm91dGVyXCIrYjtpZih0aGlzLl9nZXRNZWFzdXJlbWVudChjLGQpLCF0aGlzW2NdKXt2YXIgZT10aGlzLmdldEZpcnN0SXRlbVNpemUoKTt0aGlzW2NdPWUmJmVbZF18fHRoaXMuaXNvdG9wZS5zaXplW1wiaW5uZXJcIitiXX19LGMucHJvdG90eXBlLmdldEZpcnN0SXRlbVNpemU9ZnVuY3Rpb24oKXt2YXIgYj10aGlzLmlzb3RvcGUuZmlsdGVyZWRJdGVtc1swXTtyZXR1cm4gYiYmYi5lbGVtZW50JiZhKGIuZWxlbWVudCl9LGMucHJvdG90eXBlLmxheW91dD1mdW5jdGlvbigpe3RoaXMuaXNvdG9wZS5sYXlvdXQuYXBwbHkodGhpcy5pc290b3BlLGFyZ3VtZW50cyl9LGMucHJvdG90eXBlLmdldFNpemU9ZnVuY3Rpb24oKXt0aGlzLmlzb3RvcGUuZ2V0U2l6ZSgpLHRoaXMuc2l6ZT10aGlzLmlzb3RvcGUuc2l6ZX0sYy5tb2Rlcz17fSxjLmNyZWF0ZT1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGQoKXtjLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gZC5wcm90b3R5cGU9bmV3IGMsYiYmKGQub3B0aW9ucz1iKSxkLnByb3RvdHlwZS5uYW1lc3BhY2U9YSxjLm1vZGVzW2FdPWQsZH0sY30pLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIm1hc29ucnkvbWFzb25yeVwiLFtcIm91dGxheWVyL291dGxheWVyXCIsXCJnZXQtc2l6ZS9nZXQtc2l6ZVwiLFwiZml6enktdWktdXRpbHMvdXRpbHNcIl0sYik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YihyZXF1aXJlKFwib3V0bGF5ZXJcIikscmVxdWlyZShcImdldC1zaXplXCIpLHJlcXVpcmUoXCJmaXp6eS11aS11dGlsc1wiKSk6YS5NYXNvbnJ5PWIoYS5PdXRsYXllcixhLmdldFNpemUsYS5maXp6eVVJVXRpbHMpfSh3aW5kb3csZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEuY3JlYXRlKFwibWFzb25yeVwiKTtyZXR1cm4gZC5wcm90b3R5cGUuX3Jlc2V0TGF5b3V0PWZ1bmN0aW9uKCl7dGhpcy5nZXRTaXplKCksdGhpcy5fZ2V0TWVhc3VyZW1lbnQoXCJjb2x1bW5XaWR0aFwiLFwib3V0ZXJXaWR0aFwiKSx0aGlzLl9nZXRNZWFzdXJlbWVudChcImd1dHRlclwiLFwib3V0ZXJXaWR0aFwiKSx0aGlzLm1lYXN1cmVDb2x1bW5zKCk7dmFyIGE9dGhpcy5jb2xzO2Zvcih0aGlzLmNvbFlzPVtdO2EtLTspdGhpcy5jb2xZcy5wdXNoKDApO3RoaXMubWF4WT0wfSxkLnByb3RvdHlwZS5tZWFzdXJlQ29sdW1ucz1mdW5jdGlvbigpe2lmKHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKSwhdGhpcy5jb2x1bW5XaWR0aCl7dmFyIGE9dGhpcy5pdGVtc1swXSxjPWEmJmEuZWxlbWVudDt0aGlzLmNvbHVtbldpZHRoPWMmJmIoYykub3V0ZXJXaWR0aHx8dGhpcy5jb250YWluZXJXaWR0aH12YXIgZD10aGlzLmNvbHVtbldpZHRoKz10aGlzLmd1dHRlcixlPXRoaXMuY29udGFpbmVyV2lkdGgrdGhpcy5ndXR0ZXIsZj1lL2QsZz1kLWUlZCxoPWcmJjE+Zz9cInJvdW5kXCI6XCJmbG9vclwiO2Y9TWF0aFtoXShmKSx0aGlzLmNvbHM9TWF0aC5tYXgoZiwxKX0sZC5wcm90b3R5cGUuZ2V0Q29udGFpbmVyV2lkdGg9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMuaXNGaXRXaWR0aD90aGlzLmVsZW1lbnQucGFyZW50Tm9kZTp0aGlzLmVsZW1lbnQsYz1iKGEpO3RoaXMuY29udGFpbmVyV2lkdGg9YyYmYy5pbm5lcldpZHRofSxkLnByb3RvdHlwZS5fZ2V0SXRlbUxheW91dFBvc2l0aW9uPWZ1bmN0aW9uKGEpe2EuZ2V0U2l6ZSgpO3ZhciBiPWEuc2l6ZS5vdXRlcldpZHRoJXRoaXMuY29sdW1uV2lkdGgsZD1iJiYxPmI/XCJyb3VuZFwiOlwiY2VpbFwiLGU9TWF0aFtkXShhLnNpemUub3V0ZXJXaWR0aC90aGlzLmNvbHVtbldpZHRoKTtlPU1hdGgubWluKGUsdGhpcy5jb2xzKTtmb3IodmFyIGY9dGhpcy5fZ2V0Q29sR3JvdXAoZSksZz1NYXRoLm1pbi5hcHBseShNYXRoLGYpLGg9Yy5pbmRleE9mKGYsZyksaT17eDp0aGlzLmNvbHVtbldpZHRoKmgseTpnfSxqPWcrYS5zaXplLm91dGVySGVpZ2h0LGs9dGhpcy5jb2xzKzEtZi5sZW5ndGgsbD0wO2s+bDtsKyspdGhpcy5jb2xZc1toK2xdPWo7cmV0dXJuIGl9LGQucHJvdG90eXBlLl9nZXRDb2xHcm91cD1mdW5jdGlvbihhKXtpZigyPmEpcmV0dXJuIHRoaXMuY29sWXM7Zm9yKHZhciBiPVtdLGM9dGhpcy5jb2xzKzEtYSxkPTA7Yz5kO2QrKyl7dmFyIGU9dGhpcy5jb2xZcy5zbGljZShkLGQrYSk7YltkXT1NYXRoLm1heC5hcHBseShNYXRoLGUpfXJldHVybiBifSxkLnByb3RvdHlwZS5fbWFuYWdlU3RhbXA9ZnVuY3Rpb24oYSl7dmFyIGM9YihhKSxkPXRoaXMuX2dldEVsZW1lbnRPZmZzZXQoYSksZT10aGlzLm9wdGlvbnMuaXNPcmlnaW5MZWZ0P2QubGVmdDpkLnJpZ2h0LGY9ZStjLm91dGVyV2lkdGgsZz1NYXRoLmZsb29yKGUvdGhpcy5jb2x1bW5XaWR0aCk7Zz1NYXRoLm1heCgwLGcpO3ZhciBoPU1hdGguZmxvb3IoZi90aGlzLmNvbHVtbldpZHRoKTtoLT1mJXRoaXMuY29sdW1uV2lkdGg/MDoxLGg9TWF0aC5taW4odGhpcy5jb2xzLTEsaCk7Zm9yKHZhciBpPSh0aGlzLm9wdGlvbnMuaXNPcmlnaW5Ub3A/ZC50b3A6ZC5ib3R0b20pK2Mub3V0ZXJIZWlnaHQsaj1nO2g+PWo7aisrKXRoaXMuY29sWXNbal09TWF0aC5tYXgoaSx0aGlzLmNvbFlzW2pdKX0sZC5wcm90b3R5cGUuX2dldENvbnRhaW5lclNpemU9ZnVuY3Rpb24oKXt0aGlzLm1heFk9TWF0aC5tYXguYXBwbHkoTWF0aCx0aGlzLmNvbFlzKTt2YXIgYT17aGVpZ2h0OnRoaXMubWF4WX07cmV0dXJuIHRoaXMub3B0aW9ucy5pc0ZpdFdpZHRoJiYoYS53aWR0aD10aGlzLl9nZXRDb250YWluZXJGaXRXaWR0aCgpKSxhfSxkLnByb3RvdHlwZS5fZ2V0Q29udGFpbmVyRml0V2lkdGg9ZnVuY3Rpb24oKXtmb3IodmFyIGE9MCxiPXRoaXMuY29sczstLWImJjA9PT10aGlzLmNvbFlzW2JdOylhKys7cmV0dXJuKHRoaXMuY29scy1hKSp0aGlzLmNvbHVtbldpZHRoLXRoaXMuZ3V0dGVyfSxkLnByb3RvdHlwZS5uZWVkc1Jlc2l6ZUxheW91dD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuY29udGFpbmVyV2lkdGg7cmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKSxhIT09dGhpcy5jb250YWluZXJXaWR0aH0sZH0pLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImlzb3RvcGUvanMvbGF5b3V0LW1vZGVzL21hc29ucnlcIixbXCIuLi9sYXlvdXQtbW9kZVwiLFwibWFzb25yeS9tYXNvbnJ5XCJdLGIpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWIocmVxdWlyZShcIi4uL2xheW91dC1tb2RlXCIpLHJlcXVpcmUoXCJtYXNvbnJ5LWxheW91dFwiKSk6YihhLklzb3RvcGUuTGF5b3V0TW9kZSxhLk1hc29ucnkpfSh3aW5kb3csZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBjKGEsYil7Zm9yKHZhciBjIGluIGIpYVtjXT1iW2NdO3JldHVybiBhfXZhciBkPWEuY3JlYXRlKFwibWFzb25yeVwiKSxlPWQucHJvdG90eXBlLl9nZXRFbGVtZW50T2Zmc2V0LGY9ZC5wcm90b3R5cGUubGF5b3V0LGc9ZC5wcm90b3R5cGUuX2dldE1lYXN1cmVtZW50O1xuYyhkLnByb3RvdHlwZSxiLnByb3RvdHlwZSksZC5wcm90b3R5cGUuX2dldEVsZW1lbnRPZmZzZXQ9ZSxkLnByb3RvdHlwZS5sYXlvdXQ9ZixkLnByb3RvdHlwZS5fZ2V0TWVhc3VyZW1lbnQ9Zzt2YXIgaD1kLnByb3RvdHlwZS5tZWFzdXJlQ29sdW1ucztkLnByb3RvdHlwZS5tZWFzdXJlQ29sdW1ucz1mdW5jdGlvbigpe3RoaXMuaXRlbXM9dGhpcy5pc290b3BlLmZpbHRlcmVkSXRlbXMsaC5jYWxsKHRoaXMpfTt2YXIgaT1kLnByb3RvdHlwZS5fbWFuYWdlU3RhbXA7cmV0dXJuIGQucHJvdG90eXBlLl9tYW5hZ2VTdGFtcD1mdW5jdGlvbigpe3RoaXMub3B0aW9ucy5pc09yaWdpbkxlZnQ9dGhpcy5pc290b3BlLm9wdGlvbnMuaXNPcmlnaW5MZWZ0LHRoaXMub3B0aW9ucy5pc09yaWdpblRvcD10aGlzLmlzb3RvcGUub3B0aW9ucy5pc09yaWdpblRvcCxpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZH0pLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImlzb3RvcGUvanMvbGF5b3V0LW1vZGVzL2ZpdC1yb3dzXCIsW1wiLi4vbGF5b3V0LW1vZGVcIl0sYik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YihyZXF1aXJlKFwiLi4vbGF5b3V0LW1vZGVcIikpOmIoYS5Jc290b3BlLkxheW91dE1vZGUpfSh3aW5kb3csZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGI9YS5jcmVhdGUoXCJmaXRSb3dzXCIpO3JldHVybiBiLnByb3RvdHlwZS5fcmVzZXRMYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLng9MCx0aGlzLnk9MCx0aGlzLm1heFk9MCx0aGlzLl9nZXRNZWFzdXJlbWVudChcImd1dHRlclwiLFwib3V0ZXJXaWR0aFwiKX0sYi5wcm90b3R5cGUuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbihhKXthLmdldFNpemUoKTt2YXIgYj1hLnNpemUub3V0ZXJXaWR0aCt0aGlzLmd1dHRlcixjPXRoaXMuaXNvdG9wZS5zaXplLmlubmVyV2lkdGgrdGhpcy5ndXR0ZXI7MCE9PXRoaXMueCYmYit0aGlzLng+YyYmKHRoaXMueD0wLHRoaXMueT10aGlzLm1heFkpO3ZhciBkPXt4OnRoaXMueCx5OnRoaXMueX07cmV0dXJuIHRoaXMubWF4WT1NYXRoLm1heCh0aGlzLm1heFksdGhpcy55K2Euc2l6ZS5vdXRlckhlaWdodCksdGhpcy54Kz1iLGR9LGIucHJvdG90eXBlLl9nZXRDb250YWluZXJTaXplPWZ1bmN0aW9uKCl7cmV0dXJue2hlaWdodDp0aGlzLm1heFl9fSxifSksZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiaXNvdG9wZS9qcy9sYXlvdXQtbW9kZXMvdmVydGljYWxcIixbXCIuLi9sYXlvdXQtbW9kZVwiXSxiKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKHJlcXVpcmUoXCIuLi9sYXlvdXQtbW9kZVwiKSk6YihhLklzb3RvcGUuTGF5b3V0TW9kZSl9KHdpbmRvdyxmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgYj1hLmNyZWF0ZShcInZlcnRpY2FsXCIse2hvcml6b250YWxBbGlnbm1lbnQ6MH0pO3JldHVybiBiLnByb3RvdHlwZS5fcmVzZXRMYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLnk9MH0sYi5wcm90b3R5cGUuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbihhKXthLmdldFNpemUoKTt2YXIgYj0odGhpcy5pc290b3BlLnNpemUuaW5uZXJXaWR0aC1hLnNpemUub3V0ZXJXaWR0aCkqdGhpcy5vcHRpb25zLmhvcml6b250YWxBbGlnbm1lbnQsYz10aGlzLnk7cmV0dXJuIHRoaXMueSs9YS5zaXplLm91dGVySGVpZ2h0LHt4OmIseTpjfX0sYi5wcm90b3R5cGUuX2dldENvbnRhaW5lclNpemU9ZnVuY3Rpb24oKXtyZXR1cm57aGVpZ2h0OnRoaXMueX19LGJ9KSxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wib3V0bGF5ZXIvb3V0bGF5ZXJcIixcImdldC1zaXplL2dldC1zaXplXCIsXCJtYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3JcIixcImZpenp5LXVpLXV0aWxzL3V0aWxzXCIsXCJpc290b3BlL2pzL2l0ZW1cIixcImlzb3RvcGUvanMvbGF5b3V0LW1vZGVcIixcImlzb3RvcGUvanMvbGF5b3V0LW1vZGVzL21hc29ucnlcIixcImlzb3RvcGUvanMvbGF5b3V0LW1vZGVzL2ZpdC1yb3dzXCIsXCJpc290b3BlL2pzL2xheW91dC1tb2Rlcy92ZXJ0aWNhbFwiXSxmdW5jdGlvbihjLGQsZSxmLGcsaCl7cmV0dXJuIGIoYSxjLGQsZSxmLGcsaCl9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKGEscmVxdWlyZShcIm91dGxheWVyXCIpLHJlcXVpcmUoXCJnZXQtc2l6ZVwiKSxyZXF1aXJlKFwiZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3RvclwiKSxyZXF1aXJlKFwiZml6enktdWktdXRpbHNcIikscmVxdWlyZShcIi4vaXRlbVwiKSxyZXF1aXJlKFwiLi9sYXlvdXQtbW9kZVwiKSxyZXF1aXJlKFwiLi9sYXlvdXQtbW9kZXMvbWFzb25yeVwiKSxyZXF1aXJlKFwiLi9sYXlvdXQtbW9kZXMvZml0LXJvd3NcIikscmVxdWlyZShcIi4vbGF5b3V0LW1vZGVzL3ZlcnRpY2FsXCIpKTphLklzb3RvcGU9YihhLGEuT3V0bGF5ZXIsYS5nZXRTaXplLGEubWF0Y2hlc1NlbGVjdG9yLGEuZml6enlVSVV0aWxzLGEuSXNvdG9wZS5JdGVtLGEuSXNvdG9wZS5MYXlvdXRNb2RlKX0od2luZG93LGZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe2Z1bmN0aW9uIGgoYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXtmb3IodmFyIGU9MCxmPWEubGVuZ3RoO2Y+ZTtlKyspe3ZhciBnPWFbZV0saD1jLnNvcnREYXRhW2ddLGk9ZC5zb3J0RGF0YVtnXTtpZihoPml8fGk+aCl7dmFyIGo9dm9pZCAwIT09YltnXT9iW2ddOmIsaz1qPzE6LTE7cmV0dXJuKGg+aT8xOi0xKSprfX1yZXR1cm4gMH19dmFyIGk9YS5qUXVlcnksaj1TdHJpbmcucHJvdG90eXBlLnRyaW0/ZnVuY3Rpb24oYSl7cmV0dXJuIGEudHJpbSgpfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfSxrPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxsPWsudGV4dENvbnRlbnQ/ZnVuY3Rpb24oYSl7cmV0dXJuIGEudGV4dENvbnRlbnR9OmZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVyVGV4dH0sbT1iLmNyZWF0ZShcImlzb3RvcGVcIix7bGF5b3V0TW9kZTpcIm1hc29ucnlcIixpc0pRdWVyeUZpbHRlcmluZzohMCxzb3J0QXNjZW5kaW5nOiEwfSk7bS5JdGVtPWYsbS5MYXlvdXRNb2RlPWcsbS5wcm90b3R5cGUuX2NyZWF0ZT1mdW5jdGlvbigpe3RoaXMuaXRlbUdVSUQ9MCx0aGlzLl9zb3J0ZXJzPXt9LHRoaXMuX2dldFNvcnRlcnMoKSxiLnByb3RvdHlwZS5fY3JlYXRlLmNhbGwodGhpcyksdGhpcy5tb2Rlcz17fSx0aGlzLmZpbHRlcmVkSXRlbXM9dGhpcy5pdGVtcyx0aGlzLnNvcnRIaXN0b3J5PVtcIm9yaWdpbmFsLW9yZGVyXCJdO2Zvcih2YXIgYSBpbiBnLm1vZGVzKXRoaXMuX2luaXRMYXlvdXRNb2RlKGEpfSxtLnByb3RvdHlwZS5yZWxvYWRJdGVtcz1mdW5jdGlvbigpe3RoaXMuaXRlbUdVSUQ9MCxiLnByb3RvdHlwZS5yZWxvYWRJdGVtcy5jYWxsKHRoaXMpfSxtLnByb3RvdHlwZS5faXRlbWl6ZT1mdW5jdGlvbigpe2Zvcih2YXIgYT1iLnByb3RvdHlwZS5faXRlbWl6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKyl7dmFyIGU9YVtjXTtlLmlkPXRoaXMuaXRlbUdVSUQrK31yZXR1cm4gdGhpcy5fdXBkYXRlSXRlbXNTb3J0RGF0YShhKSxhfSxtLnByb3RvdHlwZS5faW5pdExheW91dE1vZGU9ZnVuY3Rpb24oYSl7dmFyIGI9Zy5tb2Rlc1thXSxjPXRoaXMub3B0aW9uc1thXXx8e307dGhpcy5vcHRpb25zW2FdPWIub3B0aW9ucz9lLmV4dGVuZChiLm9wdGlvbnMsYyk6Yyx0aGlzLm1vZGVzW2FdPW5ldyBiKHRoaXMpfSxtLnByb3RvdHlwZS5sYXlvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5faXNMYXlvdXRJbml0ZWQmJnRoaXMub3B0aW9ucy5pc0luaXRMYXlvdXQ/dm9pZCB0aGlzLmFycmFuZ2UoKTp2b2lkIHRoaXMuX2xheW91dCgpfSxtLnByb3RvdHlwZS5fbGF5b3V0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fZ2V0SXNJbnN0YW50KCk7dGhpcy5fcmVzZXRMYXlvdXQoKSx0aGlzLl9tYW5hZ2VTdGFtcHMoKSx0aGlzLmxheW91dEl0ZW1zKHRoaXMuZmlsdGVyZWRJdGVtcyxhKSx0aGlzLl9pc0xheW91dEluaXRlZD0hMH0sbS5wcm90b3R5cGUuYXJyYW5nZT1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7ZC5yZXZlYWwoYy5uZWVkUmV2ZWFsKSxkLmhpZGUoYy5uZWVkSGlkZSl9dGhpcy5vcHRpb24oYSksdGhpcy5fZ2V0SXNJbnN0YW50KCk7dmFyIGM9dGhpcy5fZmlsdGVyKHRoaXMuaXRlbXMpO3RoaXMuZmlsdGVyZWRJdGVtcz1jLm1hdGNoZXM7dmFyIGQ9dGhpczt0aGlzLl9iaW5kQXJyYW5nZUNvbXBsZXRlKCksdGhpcy5faXNJbnN0YW50P3RoaXMuX25vVHJhbnNpdGlvbihiKTpiKCksdGhpcy5fc29ydCgpLHRoaXMuX2xheW91dCgpfSxtLnByb3RvdHlwZS5faW5pdD1tLnByb3RvdHlwZS5hcnJhbmdlLG0ucHJvdG90eXBlLl9nZXRJc0luc3RhbnQ9ZnVuY3Rpb24oKXt2YXIgYT12b2lkIDAhPT10aGlzLm9wdGlvbnMuaXNMYXlvdXRJbnN0YW50P3RoaXMub3B0aW9ucy5pc0xheW91dEluc3RhbnQ6IXRoaXMuX2lzTGF5b3V0SW5pdGVkO3JldHVybiB0aGlzLl9pc0luc3RhbnQ9YSxhfSxtLnByb3RvdHlwZS5fYmluZEFycmFuZ2VDb21wbGV0ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtiJiZjJiZkJiZlLmRpc3BhdGNoRXZlbnQoXCJhcnJhbmdlQ29tcGxldGVcIixudWxsLFtlLmZpbHRlcmVkSXRlbXNdKX12YXIgYixjLGQsZT10aGlzO3RoaXMub25jZShcImxheW91dENvbXBsZXRlXCIsZnVuY3Rpb24oKXtiPSEwLGEoKX0pLHRoaXMub25jZShcImhpZGVDb21wbGV0ZVwiLGZ1bmN0aW9uKCl7Yz0hMCxhKCl9KSx0aGlzLm9uY2UoXCJyZXZlYWxDb21wbGV0ZVwiLGZ1bmN0aW9uKCl7ZD0hMCxhKCl9KX0sbS5wcm90b3R5cGUuX2ZpbHRlcj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMuZmlsdGVyO2I9Ynx8XCIqXCI7Zm9yKHZhciBjPVtdLGQ9W10sZT1bXSxmPXRoaXMuX2dldEZpbHRlclRlc3QoYiksZz0wLGg9YS5sZW5ndGg7aD5nO2crKyl7dmFyIGk9YVtnXTtpZighaS5pc0lnbm9yZWQpe3ZhciBqPWYoaSk7aiYmYy5wdXNoKGkpLGomJmkuaXNIaWRkZW4/ZC5wdXNoKGkpOmp8fGkuaXNIaWRkZW58fGUucHVzaChpKX19cmV0dXJue21hdGNoZXM6YyxuZWVkUmV2ZWFsOmQsbmVlZEhpZGU6ZX19LG0ucHJvdG90eXBlLl9nZXRGaWx0ZXJUZXN0PWZ1bmN0aW9uKGEpe3JldHVybiBpJiZ0aGlzLm9wdGlvbnMuaXNKUXVlcnlGaWx0ZXJpbmc/ZnVuY3Rpb24oYil7cmV0dXJuIGkoYi5lbGVtZW50KS5pcyhhKX06XCJmdW5jdGlvblwiPT10eXBlb2YgYT9mdW5jdGlvbihiKXtyZXR1cm4gYShiLmVsZW1lbnQpfTpmdW5jdGlvbihiKXtyZXR1cm4gZChiLmVsZW1lbnQsYSl9fSxtLnByb3RvdHlwZS51cGRhdGVTb3J0RGF0YT1mdW5jdGlvbihhKXt2YXIgYjthPyhhPWUubWFrZUFycmF5KGEpLGI9dGhpcy5nZXRJdGVtcyhhKSk6Yj10aGlzLml0ZW1zLHRoaXMuX2dldFNvcnRlcnMoKSx0aGlzLl91cGRhdGVJdGVtc1NvcnREYXRhKGIpfSxtLnByb3RvdHlwZS5fZ2V0U29ydGVycz1mdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucy5nZXRTb3J0RGF0YTtmb3IodmFyIGIgaW4gYSl7dmFyIGM9YVtiXTt0aGlzLl9zb3J0ZXJzW2JdPW4oYyl9fSxtLnByb3RvdHlwZS5fdXBkYXRlSXRlbXNTb3J0RGF0YT1mdW5jdGlvbihhKXtmb3IodmFyIGI9YSYmYS5sZW5ndGgsYz0wO2ImJmI+YztjKyspe3ZhciBkPWFbY107ZC51cGRhdGVTb3J0RGF0YSgpfX07dmFyIG49ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBhO3ZhciBjPWooYSkuc3BsaXQoXCIgXCIpLGQ9Y1swXSxlPWQubWF0Y2goL15cXFsoLispXFxdJC8pLGY9ZSYmZVsxXSxnPWIoZixkKSxoPW0uc29ydERhdGFQYXJzZXJzW2NbMV1dO3JldHVybiBhPWg/ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmgoZyhhKSl9OmZ1bmN0aW9uKGEpe3JldHVybiBhJiZnKGEpfX1mdW5jdGlvbiBiKGEsYil7dmFyIGM7cmV0dXJuIGM9YT9mdW5jdGlvbihiKXtyZXR1cm4gYi5nZXRBdHRyaWJ1dGUoYSl9OmZ1bmN0aW9uKGEpe3ZhciBjPWEucXVlcnlTZWxlY3RvcihiKTtyZXR1cm4gYyYmbChjKX19cmV0dXJuIGF9KCk7bS5zb3J0RGF0YVBhcnNlcnM9e3BhcnNlSW50OmZ1bmN0aW9uKGEpe3JldHVybiBwYXJzZUludChhLDEwKX0scGFyc2VGbG9hdDpmdW5jdGlvbihhKXtyZXR1cm4gcGFyc2VGbG9hdChhKX19LG0ucHJvdG90eXBlLl9zb3J0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLnNvcnRCeTtpZihhKXt2YXIgYj1bXS5jb25jYXQuYXBwbHkoYSx0aGlzLnNvcnRIaXN0b3J5KSxjPWgoYix0aGlzLm9wdGlvbnMuc29ydEFzY2VuZGluZyk7dGhpcy5maWx0ZXJlZEl0ZW1zLnNvcnQoYyksYSE9dGhpcy5zb3J0SGlzdG9yeVswXSYmdGhpcy5zb3J0SGlzdG9yeS51bnNoaWZ0KGEpfX0sbS5wcm90b3R5cGUuX21vZGU9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMubGF5b3V0TW9kZSxiPXRoaXMubW9kZXNbYV07aWYoIWIpdGhyb3cgbmV3IEVycm9yKFwiTm8gbGF5b3V0IG1vZGU6IFwiK2EpO3JldHVybiBiLm9wdGlvbnM9dGhpcy5vcHRpb25zW2FdLGJ9LG0ucHJvdG90eXBlLl9yZXNldExheW91dD1mdW5jdGlvbigpe2IucHJvdG90eXBlLl9yZXNldExheW91dC5jYWxsKHRoaXMpLHRoaXMuX21vZGUoKS5fcmVzZXRMYXlvdXQoKX0sbS5wcm90b3R5cGUuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fbW9kZSgpLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24oYSl9LG0ucHJvdG90eXBlLl9tYW5hZ2VTdGFtcD1mdW5jdGlvbihhKXt0aGlzLl9tb2RlKCkuX21hbmFnZVN0YW1wKGEpfSxtLnByb3RvdHlwZS5fZ2V0Q29udGFpbmVyU2l6ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tb2RlKCkuX2dldENvbnRhaW5lclNpemUoKX0sbS5wcm90b3R5cGUubmVlZHNSZXNpemVMYXlvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbW9kZSgpLm5lZWRzUmVzaXplTGF5b3V0KCl9LG0ucHJvdG90eXBlLmFwcGVuZGVkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYWRkSXRlbXMoYSk7aWYoYi5sZW5ndGgpe3ZhciBjPXRoaXMuX2ZpbHRlclJldmVhbEFkZGVkKGIpO3RoaXMuZmlsdGVyZWRJdGVtcz10aGlzLmZpbHRlcmVkSXRlbXMuY29uY2F0KGMpfX0sbS5wcm90b3R5cGUucHJlcGVuZGVkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuX2l0ZW1pemUoYSk7aWYoYi5sZW5ndGgpe3RoaXMuX3Jlc2V0TGF5b3V0KCksdGhpcy5fbWFuYWdlU3RhbXBzKCk7dmFyIGM9dGhpcy5fZmlsdGVyUmV2ZWFsQWRkZWQoYik7dGhpcy5sYXlvdXRJdGVtcyh0aGlzLmZpbHRlcmVkSXRlbXMpLHRoaXMuZmlsdGVyZWRJdGVtcz1jLmNvbmNhdCh0aGlzLmZpbHRlcmVkSXRlbXMpLHRoaXMuaXRlbXM9Yi5jb25jYXQodGhpcy5pdGVtcyl9fSxtLnByb3RvdHlwZS5fZmlsdGVyUmV2ZWFsQWRkZWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5fZmlsdGVyKGEpO3JldHVybiB0aGlzLmhpZGUoYi5uZWVkSGlkZSksdGhpcy5yZXZlYWwoYi5tYXRjaGVzKSx0aGlzLmxheW91dEl0ZW1zKGIubWF0Y2hlcywhMCksYi5tYXRjaGVzfSxtLnByb3RvdHlwZS5pbnNlcnQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hZGRJdGVtcyhhKTtpZihiLmxlbmd0aCl7dmFyIGMsZCxlPWIubGVuZ3RoO2ZvcihjPTA7ZT5jO2MrKylkPWJbY10sdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGQuZWxlbWVudCk7dmFyIGY9dGhpcy5fZmlsdGVyKGIpLm1hdGNoZXM7Zm9yKGM9MDtlPmM7YysrKWJbY10uaXNMYXlvdXRJbnN0YW50PSEwO2Zvcih0aGlzLmFycmFuZ2UoKSxjPTA7ZT5jO2MrKylkZWxldGUgYltjXS5pc0xheW91dEluc3RhbnQ7dGhpcy5yZXZlYWwoZil9fTt2YXIgbz1tLnByb3RvdHlwZS5yZW1vdmU7cmV0dXJuIG0ucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXthPWUubWFrZUFycmF5KGEpO3ZhciBiPXRoaXMuZ2V0SXRlbXMoYSk7by5jYWxsKHRoaXMsYSk7dmFyIGM9YiYmYi5sZW5ndGg7aWYoYylmb3IodmFyIGQ9MDtjPmQ7ZCsrKXt2YXIgZj1iW2RdO2UucmVtb3ZlRnJvbSh0aGlzLmZpbHRlcmVkSXRlbXMsZil9fSxtLnByb3RvdHlwZS5zaHVmZmxlPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPTAsYj10aGlzLml0ZW1zLmxlbmd0aDtiPmE7YSsrKXt2YXIgYz10aGlzLml0ZW1zW2FdO2Muc29ydERhdGEucmFuZG9tPU1hdGgucmFuZG9tKCl9dGhpcy5vcHRpb25zLnNvcnRCeT1cInJhbmRvbVwiLHRoaXMuX3NvcnQoKSx0aGlzLl9sYXlvdXQoKX0sbS5wcm90b3R5cGUuX25vVHJhbnNpdGlvbj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uO3RoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb249MDt2YXIgYz1hLmNhbGwodGhpcyk7cmV0dXJuIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb249YixjfSxtLnByb3RvdHlwZS5nZXRGaWx0ZXJlZEl0ZW1FbGVtZW50cz1mdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxiPTAsYz10aGlzLmZpbHRlcmVkSXRlbXMubGVuZ3RoO2M+YjtiKyspYS5wdXNoKHRoaXMuZmlsdGVyZWRJdGVtc1tiXS5lbGVtZW50KTtyZXR1cm4gYX0sbX0pOyIsIi8qIVxuICogTWFsaWh1IGpxdWVyeSBjdXN0b20gc2Nyb2xsYmFyIHBsdWdpblxuICogVmVyc2lvbjogMy4xLjVcbiAqIFdlYnNpdGU6IGh0dHA6Ly9tYW5vcy5tYWxpaHUuZ3IvanF1ZXJ5LWN1c3RvbS1jb250ZW50LXNjcm9sbGVyL1xuICovXG4hZnVuY3Rpb24oZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZTplKGpRdWVyeSx3aW5kb3csZG9jdW1lbnQpfShmdW5jdGlvbihlKXshZnVuY3Rpb24odCl7dmFyIG89XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kLGE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHMsbj1cImh0dHBzOlwiPT1kb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbD9cImh0dHBzOlwiOlwiaHR0cDpcIixpPVwiY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeS1tb3VzZXdoZWVsLzMuMS4xMy9qcXVlcnkubW91c2V3aGVlbC5taW4uanNcIjtvfHwoYT9yZXF1aXJlKFwianF1ZXJ5LW1vdXNld2hlZWxcIikoZSk6ZS5ldmVudC5zcGVjaWFsLm1vdXNld2hlZWx8fGUoXCJoZWFkXCIpLmFwcGVuZChkZWNvZGVVUkkoXCIlM0NzY3JpcHQgc3JjPVwiK24rXCIvL1wiK2krXCIlM0UlM0Mvc2NyaXB0JTNFXCIpKSksdCgpfShmdW5jdGlvbigpe3ZhciB0LG89XCJtQ3VzdG9tU2Nyb2xsYmFyXCIsYT1cIm1DU1wiLG49XCIubUN1c3RvbVNjcm9sbGJhclwiLGk9e3NldFRvcDowLHNldExlZnQ6MCxheGlzOlwieVwiLHNjcm9sbGJhclBvc2l0aW9uOlwiaW5zaWRlXCIsc2Nyb2xsSW5lcnRpYTo5NTAsYXV0b0RyYWdnZXJMZW5ndGg6ITAsYWx3YXlzU2hvd1Njcm9sbGJhcjowLHNuYXBPZmZzZXQ6MCxtb3VzZVdoZWVsOntlbmFibGU6ITAsc2Nyb2xsQW1vdW50OlwiYXV0b1wiLGF4aXM6XCJ5XCIsZGVsdGFGYWN0b3I6XCJhdXRvXCIsZGlzYWJsZU92ZXI6W1wic2VsZWN0XCIsXCJvcHRpb25cIixcImtleWdlblwiLFwiZGF0YWxpc3RcIixcInRleHRhcmVhXCJdfSxzY3JvbGxCdXR0b25zOntzY3JvbGxUeXBlOlwic3RlcGxlc3NcIixzY3JvbGxBbW91bnQ6XCJhdXRvXCJ9LGtleWJvYXJkOntlbmFibGU6ITAsc2Nyb2xsVHlwZTpcInN0ZXBsZXNzXCIsc2Nyb2xsQW1vdW50OlwiYXV0b1wifSxjb250ZW50VG91Y2hTY3JvbGw6MjUsZG9jdW1lbnRUb3VjaFNjcm9sbDohMCxhZHZhbmNlZDp7YXV0b1Njcm9sbE9uRm9jdXM6XCJpbnB1dCx0ZXh0YXJlYSxzZWxlY3QsYnV0dG9uLGRhdGFsaXN0LGtleWdlbixhW3RhYmluZGV4XSxhcmVhLG9iamVjdCxbY29udGVudGVkaXRhYmxlPSd0cnVlJ11cIix1cGRhdGVPbkNvbnRlbnRSZXNpemU6ITAsdXBkYXRlT25JbWFnZUxvYWQ6XCJhdXRvXCIsYXV0b1VwZGF0ZVRpbWVvdXQ6NjB9LHRoZW1lOlwibGlnaHRcIixjYWxsYmFja3M6e29uVG90YWxTY3JvbGxPZmZzZXQ6MCxvblRvdGFsU2Nyb2xsQmFja09mZnNldDowLGFsd2F5c1RyaWdnZXJPZmZzZXRzOiEwfX0scj0wLGw9e30scz13aW5kb3cuYXR0YWNoRXZlbnQmJiF3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcj8xOjAsYz0hMSxkPVtcIm1DU0JfZHJhZ2dlcl9vbkRyYWdcIixcIm1DU0Jfc2Nyb2xsVG9vbHNfb25EcmFnXCIsXCJtQ1NfaW1nX2xvYWRlZFwiLFwibUNTX2Rpc2FibGVkXCIsXCJtQ1NfZGVzdHJveWVkXCIsXCJtQ1Nfbm9fc2Nyb2xsYmFyXCIsXCJtQ1MtYXV0b0hpZGVcIixcIm1DUy1kaXItcnRsXCIsXCJtQ1Nfbm9fc2Nyb2xsYmFyX3lcIixcIm1DU19ub19zY3JvbGxiYXJfeFwiLFwibUNTX3lfaGlkZGVuXCIsXCJtQ1NfeF9oaWRkZW5cIixcIm1DU0JfZHJhZ2dlckNvbnRhaW5lclwiLFwibUNTQl9idXR0b25VcFwiLFwibUNTQl9idXR0b25Eb3duXCIsXCJtQ1NCX2J1dHRvbkxlZnRcIixcIm1DU0JfYnV0dG9uUmlnaHRcIl0sdT17aW5pdDpmdW5jdGlvbih0KXt2YXIgdD1lLmV4dGVuZCghMCx7fSxpLHQpLG89Zi5jYWxsKHRoaXMpO2lmKHQubGl2ZSl7dmFyIHM9dC5saXZlU2VsZWN0b3J8fHRoaXMuc2VsZWN0b3J8fG4sYz1lKHMpO2lmKFwib2ZmXCI9PT10LmxpdmUpcmV0dXJuIHZvaWQgbShzKTtsW3NdPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtjLm1DdXN0b21TY3JvbGxiYXIodCksXCJvbmNlXCI9PT10LmxpdmUmJmMubGVuZ3RoJiZtKHMpfSw1MDApfWVsc2UgbShzKTtyZXR1cm4gdC5zZXRXaWR0aD10LnNldF93aWR0aD90LnNldF93aWR0aDp0LnNldFdpZHRoLHQuc2V0SGVpZ2h0PXQuc2V0X2hlaWdodD90LnNldF9oZWlnaHQ6dC5zZXRIZWlnaHQsdC5heGlzPXQuaG9yaXpvbnRhbFNjcm9sbD9cInhcIjpwKHQuYXhpcyksdC5zY3JvbGxJbmVydGlhPXQuc2Nyb2xsSW5lcnRpYT4wJiZ0LnNjcm9sbEluZXJ0aWE8MTc/MTc6dC5zY3JvbGxJbmVydGlhLFwib2JqZWN0XCIhPXR5cGVvZiB0Lm1vdXNlV2hlZWwmJjE9PXQubW91c2VXaGVlbCYmKHQubW91c2VXaGVlbD17ZW5hYmxlOiEwLHNjcm9sbEFtb3VudDpcImF1dG9cIixheGlzOlwieVwiLHByZXZlbnREZWZhdWx0OiExLGRlbHRhRmFjdG9yOlwiYXV0b1wiLG5vcm1hbGl6ZURlbHRhOiExLGludmVydDohMX0pLHQubW91c2VXaGVlbC5zY3JvbGxBbW91bnQ9dC5tb3VzZVdoZWVsUGl4ZWxzP3QubW91c2VXaGVlbFBpeGVsczp0Lm1vdXNlV2hlZWwuc2Nyb2xsQW1vdW50LHQubW91c2VXaGVlbC5ub3JtYWxpemVEZWx0YT10LmFkdmFuY2VkLm5vcm1hbGl6ZU1vdXNlV2hlZWxEZWx0YT90LmFkdmFuY2VkLm5vcm1hbGl6ZU1vdXNlV2hlZWxEZWx0YTp0Lm1vdXNlV2hlZWwubm9ybWFsaXplRGVsdGEsdC5zY3JvbGxCdXR0b25zLnNjcm9sbFR5cGU9Zyh0LnNjcm9sbEJ1dHRvbnMuc2Nyb2xsVHlwZSksaCh0KSxlKG8pLmVhY2goZnVuY3Rpb24oKXt2YXIgbz1lKHRoaXMpO2lmKCFvLmRhdGEoYSkpe28uZGF0YShhLHtpZHg6KytyLG9wdDp0LHNjcm9sbFJhdGlvOnt5Om51bGwseDpudWxsfSxvdmVyZmxvd2VkOm51bGwsY29udGVudFJlc2V0Ont5Om51bGwseDpudWxsfSxiaW5kRXZlbnRzOiExLHR3ZWVuUnVubmluZzohMSxzZXF1ZW50aWFsOnt9LGxhbmdEaXI6by5jc3MoXCJkaXJlY3Rpb25cIiksY2JPZmZzZXRzOm51bGwsdHJpZ2dlcjpudWxsLHBvbGw6e3NpemU6e286MCxuOjB9LGltZzp7bzowLG46MH0sY2hhbmdlOntvOjAsbjowfX19KTt2YXIgbj1vLmRhdGEoYSksaT1uLm9wdCxsPW8uZGF0YShcIm1jcy1heGlzXCIpLHM9by5kYXRhKFwibWNzLXNjcm9sbGJhci1wb3NpdGlvblwiKSxjPW8uZGF0YShcIm1jcy10aGVtZVwiKTtsJiYoaS5heGlzPWwpLHMmJihpLnNjcm9sbGJhclBvc2l0aW9uPXMpLGMmJihpLnRoZW1lPWMsaChpKSksdi5jYWxsKHRoaXMpLG4mJmkuY2FsbGJhY2tzLm9uQ3JlYXRlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpLmNhbGxiYWNrcy5vbkNyZWF0ZSYmaS5jYWxsYmFja3Mub25DcmVhdGUuY2FsbCh0aGlzKSxlKFwiI21DU0JfXCIrbi5pZHgrXCJfY29udGFpbmVyIGltZzpub3QoLlwiK2RbMl0rXCIpXCIpLmFkZENsYXNzKGRbMl0pLHUudXBkYXRlLmNhbGwobnVsbCxvKX19KX0sdXBkYXRlOmZ1bmN0aW9uKHQsbyl7dmFyIG49dHx8Zi5jYWxsKHRoaXMpO3JldHVybiBlKG4pLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpO2lmKHQuZGF0YShhKSl7dmFyIG49dC5kYXRhKGEpLGk9bi5vcHQscj1lKFwiI21DU0JfXCIrbi5pZHgrXCJfY29udGFpbmVyXCIpLGw9ZShcIiNtQ1NCX1wiK24uaWR4KSxzPVtlKFwiI21DU0JfXCIrbi5pZHgrXCJfZHJhZ2dlcl92ZXJ0aWNhbFwiKSxlKFwiI21DU0JfXCIrbi5pZHgrXCJfZHJhZ2dlcl9ob3Jpem9udGFsXCIpXTtpZighci5sZW5ndGgpcmV0dXJuO24udHdlZW5SdW5uaW5nJiZRKHQpLG8mJm4mJmkuY2FsbGJhY2tzLm9uQmVmb3JlVXBkYXRlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpLmNhbGxiYWNrcy5vbkJlZm9yZVVwZGF0ZSYmaS5jYWxsYmFja3Mub25CZWZvcmVVcGRhdGUuY2FsbCh0aGlzKSx0Lmhhc0NsYXNzKGRbM10pJiZ0LnJlbW92ZUNsYXNzKGRbM10pLHQuaGFzQ2xhc3MoZFs0XSkmJnQucmVtb3ZlQ2xhc3MoZFs0XSksbC5jc3MoXCJtYXgtaGVpZ2h0XCIsXCJub25lXCIpLGwuaGVpZ2h0KCkhPT10LmhlaWdodCgpJiZsLmNzcyhcIm1heC1oZWlnaHRcIix0LmhlaWdodCgpKSxfLmNhbGwodGhpcyksXCJ5XCI9PT1pLmF4aXN8fGkuYWR2YW5jZWQuYXV0b0V4cGFuZEhvcml6b250YWxTY3JvbGx8fHIuY3NzKFwid2lkdGhcIix4KHIpKSxuLm92ZXJmbG93ZWQ9eS5jYWxsKHRoaXMpLE0uY2FsbCh0aGlzKSxpLmF1dG9EcmFnZ2VyTGVuZ3RoJiZTLmNhbGwodGhpcyksYi5jYWxsKHRoaXMpLFQuY2FsbCh0aGlzKTt2YXIgYz1bTWF0aC5hYnMoclswXS5vZmZzZXRUb3ApLE1hdGguYWJzKHJbMF0ub2Zmc2V0TGVmdCldO1wieFwiIT09aS5heGlzJiYobi5vdmVyZmxvd2VkWzBdP3NbMF0uaGVpZ2h0KCk+c1swXS5wYXJlbnQoKS5oZWlnaHQoKT9CLmNhbGwodGhpcyk6KEcodCxjWzBdLnRvU3RyaW5nKCkse2RpcjpcInlcIixkdXI6MCxvdmVyd3JpdGU6XCJub25lXCJ9KSxuLmNvbnRlbnRSZXNldC55PW51bGwpOihCLmNhbGwodGhpcyksXCJ5XCI9PT1pLmF4aXM/ay5jYWxsKHRoaXMpOlwieXhcIj09PWkuYXhpcyYmbi5vdmVyZmxvd2VkWzFdJiZHKHQsY1sxXS50b1N0cmluZygpLHtkaXI6XCJ4XCIsZHVyOjAsb3ZlcndyaXRlOlwibm9uZVwifSkpKSxcInlcIiE9PWkuYXhpcyYmKG4ub3ZlcmZsb3dlZFsxXT9zWzFdLndpZHRoKCk+c1sxXS5wYXJlbnQoKS53aWR0aCgpP0IuY2FsbCh0aGlzKTooRyh0LGNbMV0udG9TdHJpbmcoKSx7ZGlyOlwieFwiLGR1cjowLG92ZXJ3cml0ZTpcIm5vbmVcIn0pLG4uY29udGVudFJlc2V0Lng9bnVsbCk6KEIuY2FsbCh0aGlzKSxcInhcIj09PWkuYXhpcz9rLmNhbGwodGhpcyk6XCJ5eFwiPT09aS5heGlzJiZuLm92ZXJmbG93ZWRbMF0mJkcodCxjWzBdLnRvU3RyaW5nKCkse2RpcjpcInlcIixkdXI6MCxvdmVyd3JpdGU6XCJub25lXCJ9KSkpLG8mJm4mJigyPT09byYmaS5jYWxsYmFja3Mub25JbWFnZUxvYWQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGkuY2FsbGJhY2tzLm9uSW1hZ2VMb2FkP2kuY2FsbGJhY2tzLm9uSW1hZ2VMb2FkLmNhbGwodGhpcyk6Mz09PW8mJmkuY2FsbGJhY2tzLm9uU2VsZWN0b3JDaGFuZ2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGkuY2FsbGJhY2tzLm9uU2VsZWN0b3JDaGFuZ2U/aS5jYWxsYmFja3Mub25TZWxlY3RvckNoYW5nZS5jYWxsKHRoaXMpOmkuY2FsbGJhY2tzLm9uVXBkYXRlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpLmNhbGxiYWNrcy5vblVwZGF0ZSYmaS5jYWxsYmFja3Mub25VcGRhdGUuY2FsbCh0aGlzKSksTi5jYWxsKHRoaXMpfX0pfSxzY3JvbGxUbzpmdW5jdGlvbih0LG8pe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0JiZudWxsIT10KXt2YXIgbj1mLmNhbGwodGhpcyk7cmV0dXJuIGUobikuZWFjaChmdW5jdGlvbigpe3ZhciBuPWUodGhpcyk7aWYobi5kYXRhKGEpKXt2YXIgaT1uLmRhdGEoYSkscj1pLm9wdCxsPXt0cmlnZ2VyOlwiZXh0ZXJuYWxcIixzY3JvbGxJbmVydGlhOnIuc2Nyb2xsSW5lcnRpYSxzY3JvbGxFYXNpbmc6XCJtY3NFYXNlSW5PdXRcIixtb3ZlRHJhZ2dlcjohMSx0aW1lb3V0OjYwLGNhbGxiYWNrczohMCxvblN0YXJ0OiEwLG9uVXBkYXRlOiEwLG9uQ29tcGxldGU6ITB9LHM9ZS5leHRlbmQoITAse30sbCxvKSxjPVkuY2FsbCh0aGlzLHQpLGQ9cy5zY3JvbGxJbmVydGlhPjAmJnMuc2Nyb2xsSW5lcnRpYTwxNz8xNzpzLnNjcm9sbEluZXJ0aWE7Y1swXT1YLmNhbGwodGhpcyxjWzBdLFwieVwiKSxjWzFdPVguY2FsbCh0aGlzLGNbMV0sXCJ4XCIpLHMubW92ZURyYWdnZXImJihjWzBdKj1pLnNjcm9sbFJhdGlvLnksY1sxXSo9aS5zY3JvbGxSYXRpby54KSxzLmR1cj1uZSgpPzA6ZCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bnVsbCE9PWNbMF0mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBjWzBdJiZcInhcIiE9PXIuYXhpcyYmaS5vdmVyZmxvd2VkWzBdJiYocy5kaXI9XCJ5XCIscy5vdmVyd3JpdGU9XCJhbGxcIixHKG4sY1swXS50b1N0cmluZygpLHMpKSxudWxsIT09Y1sxXSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNbMV0mJlwieVwiIT09ci5heGlzJiZpLm92ZXJmbG93ZWRbMV0mJihzLmRpcj1cInhcIixzLm92ZXJ3cml0ZT1cIm5vbmVcIixHKG4sY1sxXS50b1N0cmluZygpLHMpKX0scy50aW1lb3V0KX19KX19LHN0b3A6ZnVuY3Rpb24oKXt2YXIgdD1mLmNhbGwodGhpcyk7cmV0dXJuIGUodCkuZWFjaChmdW5jdGlvbigpe3ZhciB0PWUodGhpcyk7dC5kYXRhKGEpJiZRKHQpfSl9LGRpc2FibGU6ZnVuY3Rpb24odCl7dmFyIG89Zi5jYWxsKHRoaXMpO3JldHVybiBlKG8pLmVhY2goZnVuY3Rpb24oKXt2YXIgbz1lKHRoaXMpO2lmKG8uZGF0YShhKSl7by5kYXRhKGEpO04uY2FsbCh0aGlzLFwicmVtb3ZlXCIpLGsuY2FsbCh0aGlzKSx0JiZCLmNhbGwodGhpcyksTS5jYWxsKHRoaXMsITApLG8uYWRkQ2xhc3MoZFszXSl9fSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgdD1mLmNhbGwodGhpcyk7cmV0dXJuIGUodCkuZWFjaChmdW5jdGlvbigpe3ZhciBuPWUodGhpcyk7aWYobi5kYXRhKGEpKXt2YXIgaT1uLmRhdGEoYSkscj1pLm9wdCxsPWUoXCIjbUNTQl9cIitpLmlkeCkscz1lKFwiI21DU0JfXCIraS5pZHgrXCJfY29udGFpbmVyXCIpLGM9ZShcIi5tQ1NCX1wiK2kuaWR4K1wiX3Njcm9sbGJhclwiKTtyLmxpdmUmJm0oci5saXZlU2VsZWN0b3J8fGUodCkuc2VsZWN0b3IpLE4uY2FsbCh0aGlzLFwicmVtb3ZlXCIpLGsuY2FsbCh0aGlzKSxCLmNhbGwodGhpcyksbi5yZW1vdmVEYXRhKGEpLCQodGhpcyxcIm1jc1wiKSxjLnJlbW92ZSgpLHMuZmluZChcImltZy5cIitkWzJdKS5yZW1vdmVDbGFzcyhkWzJdKSxsLnJlcGxhY2VXaXRoKHMuY29udGVudHMoKSksbi5yZW1vdmVDbGFzcyhvK1wiIF9cIithK1wiX1wiK2kuaWR4K1wiIFwiK2RbNl0rXCIgXCIrZFs3XStcIiBcIitkWzVdK1wiIFwiK2RbM10pLmFkZENsYXNzKGRbNF0pfX0pfX0sZj1mdW5jdGlvbigpe3JldHVyblwib2JqZWN0XCIhPXR5cGVvZiBlKHRoaXMpfHxlKHRoaXMpLmxlbmd0aDwxP246dGhpc30saD1mdW5jdGlvbih0KXt2YXIgbz1bXCJyb3VuZGVkXCIsXCJyb3VuZGVkLWRhcmtcIixcInJvdW5kZWQtZG90c1wiLFwicm91bmRlZC1kb3RzLWRhcmtcIl0sYT1bXCJyb3VuZGVkLWRvdHNcIixcInJvdW5kZWQtZG90cy1kYXJrXCIsXCIzZFwiLFwiM2QtZGFya1wiLFwiM2QtdGhpY2tcIixcIjNkLXRoaWNrLWRhcmtcIixcImluc2V0XCIsXCJpbnNldC1kYXJrXCIsXCJpbnNldC0yXCIsXCJpbnNldC0yLWRhcmtcIixcImluc2V0LTNcIixcImluc2V0LTMtZGFya1wiXSxuPVtcIm1pbmltYWxcIixcIm1pbmltYWwtZGFya1wiXSxpPVtcIm1pbmltYWxcIixcIm1pbmltYWwtZGFya1wiXSxyPVtcIm1pbmltYWxcIixcIm1pbmltYWwtZGFya1wiXTt0LmF1dG9EcmFnZ2VyTGVuZ3RoPWUuaW5BcnJheSh0LnRoZW1lLG8pPi0xPyExOnQuYXV0b0RyYWdnZXJMZW5ndGgsdC5hdXRvRXhwYW5kU2Nyb2xsYmFyPWUuaW5BcnJheSh0LnRoZW1lLGEpPi0xPyExOnQuYXV0b0V4cGFuZFNjcm9sbGJhcix0LnNjcm9sbEJ1dHRvbnMuZW5hYmxlPWUuaW5BcnJheSh0LnRoZW1lLG4pPi0xPyExOnQuc2Nyb2xsQnV0dG9ucy5lbmFibGUsdC5hdXRvSGlkZVNjcm9sbGJhcj1lLmluQXJyYXkodC50aGVtZSxpKT4tMT8hMDp0LmF1dG9IaWRlU2Nyb2xsYmFyLHQuc2Nyb2xsYmFyUG9zaXRpb249ZS5pbkFycmF5KHQudGhlbWUscik+LTE/XCJvdXRzaWRlXCI6dC5zY3JvbGxiYXJQb3NpdGlvbn0sbT1mdW5jdGlvbihlKXtsW2VdJiYoY2xlYXJUaW1lb3V0KGxbZV0pLCQobCxlKSl9LHA9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ5eFwiPT09ZXx8XCJ4eVwiPT09ZXx8XCJhdXRvXCI9PT1lP1wieXhcIjpcInhcIj09PWV8fFwiaG9yaXpvbnRhbFwiPT09ZT9cInhcIjpcInlcIn0sZz1mdW5jdGlvbihlKXtyZXR1cm5cInN0ZXBwZWRcIj09PWV8fFwicGl4ZWxzXCI9PT1lfHxcInN0ZXBcIj09PWV8fFwiY2xpY2tcIj09PWU/XCJzdGVwcGVkXCI6XCJzdGVwbGVzc1wifSx2PWZ1bmN0aW9uKCl7dmFyIHQ9ZSh0aGlzKSxuPXQuZGF0YShhKSxpPW4ub3B0LHI9aS5hdXRvRXhwYW5kU2Nyb2xsYmFyP1wiIFwiK2RbMV0rXCJfZXhwYW5kXCI6XCJcIixsPVtcIjxkaXYgaWQ9J21DU0JfXCIrbi5pZHgrXCJfc2Nyb2xsYmFyX3ZlcnRpY2FsJyBjbGFzcz0nbUNTQl9zY3JvbGxUb29scyBtQ1NCX1wiK24uaWR4K1wiX3Njcm9sbGJhciBtQ1MtXCIraS50aGVtZStcIiBtQ1NCX3Njcm9sbFRvb2xzX3ZlcnRpY2FsXCIrcitcIic+PGRpdiBjbGFzcz0nXCIrZFsxMl0rXCInPjxkaXYgaWQ9J21DU0JfXCIrbi5pZHgrXCJfZHJhZ2dlcl92ZXJ0aWNhbCcgY2xhc3M9J21DU0JfZHJhZ2dlcicgc3R5bGU9J3Bvc2l0aW9uOmFic29sdXRlOyc+PGRpdiBjbGFzcz0nbUNTQl9kcmFnZ2VyX2JhcicgLz48L2Rpdj48ZGl2IGNsYXNzPSdtQ1NCX2RyYWdnZXJSYWlsJyAvPjwvZGl2PjwvZGl2PlwiLFwiPGRpdiBpZD0nbUNTQl9cIituLmlkeCtcIl9zY3JvbGxiYXJfaG9yaXpvbnRhbCcgY2xhc3M9J21DU0Jfc2Nyb2xsVG9vbHMgbUNTQl9cIituLmlkeCtcIl9zY3JvbGxiYXIgbUNTLVwiK2kudGhlbWUrXCIgbUNTQl9zY3JvbGxUb29sc19ob3Jpem9udGFsXCIrcitcIic+PGRpdiBjbGFzcz0nXCIrZFsxMl0rXCInPjxkaXYgaWQ9J21DU0JfXCIrbi5pZHgrXCJfZHJhZ2dlcl9ob3Jpem9udGFsJyBjbGFzcz0nbUNTQl9kcmFnZ2VyJyBzdHlsZT0ncG9zaXRpb246YWJzb2x1dGU7Jz48ZGl2IGNsYXNzPSdtQ1NCX2RyYWdnZXJfYmFyJyAvPjwvZGl2PjxkaXYgY2xhc3M9J21DU0JfZHJhZ2dlclJhaWwnIC8+PC9kaXY+PC9kaXY+XCJdLHM9XCJ5eFwiPT09aS5heGlzP1wibUNTQl92ZXJ0aWNhbF9ob3Jpem9udGFsXCI6XCJ4XCI9PT1pLmF4aXM/XCJtQ1NCX2hvcml6b250YWxcIjpcIm1DU0JfdmVydGljYWxcIixjPVwieXhcIj09PWkuYXhpcz9sWzBdK2xbMV06XCJ4XCI9PT1pLmF4aXM/bFsxXTpsWzBdLHU9XCJ5eFwiPT09aS5heGlzP1wiPGRpdiBpZD0nbUNTQl9cIituLmlkeCtcIl9jb250YWluZXJfd3JhcHBlcicgY2xhc3M9J21DU0JfY29udGFpbmVyX3dyYXBwZXInIC8+XCI6XCJcIixmPWkuYXV0b0hpZGVTY3JvbGxiYXI/XCIgXCIrZFs2XTpcIlwiLGg9XCJ4XCIhPT1pLmF4aXMmJlwicnRsXCI9PT1uLmxhbmdEaXI/XCIgXCIrZFs3XTpcIlwiO2kuc2V0V2lkdGgmJnQuY3NzKFwid2lkdGhcIixpLnNldFdpZHRoKSxpLnNldEhlaWdodCYmdC5jc3MoXCJoZWlnaHRcIixpLnNldEhlaWdodCksaS5zZXRMZWZ0PVwieVwiIT09aS5heGlzJiZcInJ0bFwiPT09bi5sYW5nRGlyP1wiOTg5OTk5cHhcIjppLnNldExlZnQsdC5hZGRDbGFzcyhvK1wiIF9cIithK1wiX1wiK24uaWR4K2YraCkud3JhcElubmVyKFwiPGRpdiBpZD0nbUNTQl9cIituLmlkeCtcIicgY2xhc3M9J21DdXN0b21TY3JvbGxCb3ggbUNTLVwiK2kudGhlbWUrXCIgXCIrcytcIic+PGRpdiBpZD0nbUNTQl9cIituLmlkeCtcIl9jb250YWluZXInIGNsYXNzPSdtQ1NCX2NvbnRhaW5lcicgc3R5bGU9J3Bvc2l0aW9uOnJlbGF0aXZlOyB0b3A6XCIraS5zZXRUb3ArXCI7IGxlZnQ6XCIraS5zZXRMZWZ0K1wiOycgZGlyPSdcIituLmxhbmdEaXIrXCInIC8+PC9kaXY+XCIpO3ZhciBtPWUoXCIjbUNTQl9cIituLmlkeCkscD1lKFwiI21DU0JfXCIrbi5pZHgrXCJfY29udGFpbmVyXCIpO1wieVwiPT09aS5heGlzfHxpLmFkdmFuY2VkLmF1dG9FeHBhbmRIb3Jpem9udGFsU2Nyb2xsfHxwLmNzcyhcIndpZHRoXCIseChwKSksXCJvdXRzaWRlXCI9PT1pLnNjcm9sbGJhclBvc2l0aW9uPyhcInN0YXRpY1wiPT09dC5jc3MoXCJwb3NpdGlvblwiKSYmdC5jc3MoXCJwb3NpdGlvblwiLFwicmVsYXRpdmVcIiksdC5jc3MoXCJvdmVyZmxvd1wiLFwidmlzaWJsZVwiKSxtLmFkZENsYXNzKFwibUNTQl9vdXRzaWRlXCIpLmFmdGVyKGMpKToobS5hZGRDbGFzcyhcIm1DU0JfaW5zaWRlXCIpLmFwcGVuZChjKSxwLndyYXAodSkpLHcuY2FsbCh0aGlzKTt2YXIgZz1bZShcIiNtQ1NCX1wiK24uaWR4K1wiX2RyYWdnZXJfdmVydGljYWxcIiksZShcIiNtQ1NCX1wiK24uaWR4K1wiX2RyYWdnZXJfaG9yaXpvbnRhbFwiKV07Z1swXS5jc3MoXCJtaW4taGVpZ2h0XCIsZ1swXS5oZWlnaHQoKSksZ1sxXS5jc3MoXCJtaW4td2lkdGhcIixnWzFdLndpZHRoKCkpfSx4PWZ1bmN0aW9uKHQpe3ZhciBvPVt0WzBdLnNjcm9sbFdpZHRoLE1hdGgubWF4LmFwcGx5KE1hdGgsdC5jaGlsZHJlbigpLm1hcChmdW5jdGlvbigpe3JldHVybiBlKHRoaXMpLm91dGVyV2lkdGgoITApfSkuZ2V0KCkpXSxhPXQucGFyZW50KCkud2lkdGgoKTtyZXR1cm4gb1swXT5hP29bMF06b1sxXT5hP29bMV06XCIxMDAlXCJ9LF89ZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpLG89dC5kYXRhKGEpLG49by5vcHQsaT1lKFwiI21DU0JfXCIrby5pZHgrXCJfY29udGFpbmVyXCIpO2lmKG4uYWR2YW5jZWQuYXV0b0V4cGFuZEhvcml6b250YWxTY3JvbGwmJlwieVwiIT09bi5heGlzKXtpLmNzcyh7d2lkdGg6XCJhdXRvXCIsXCJtaW4td2lkdGhcIjowLFwib3ZlcmZsb3cteFwiOlwic2Nyb2xsXCJ9KTt2YXIgcj1NYXRoLmNlaWwoaVswXS5zY3JvbGxXaWR0aCk7Mz09PW4uYWR2YW5jZWQuYXV0b0V4cGFuZEhvcml6b250YWxTY3JvbGx8fDIhPT1uLmFkdmFuY2VkLmF1dG9FeHBhbmRIb3Jpem9udGFsU2Nyb2xsJiZyPmkucGFyZW50KCkud2lkdGgoKT9pLmNzcyh7d2lkdGg6cixcIm1pbi13aWR0aFwiOlwiMTAwJVwiLFwib3ZlcmZsb3cteFwiOlwiaW5oZXJpdFwifSk6aS5jc3Moe1wib3ZlcmZsb3cteFwiOlwiaW5oZXJpdFwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn0pLndyYXAoXCI8ZGl2IGNsYXNzPSdtQ1NCX2hfd3JhcHBlcicgc3R5bGU9J3Bvc2l0aW9uOnJlbGF0aXZlOyBsZWZ0OjA7IHdpZHRoOjk5OTk5OXB4OycgLz5cIikuY3NzKHt3aWR0aDpNYXRoLmNlaWwoaVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCsuNCktTWF0aC5mbG9vcihpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpLFwibWluLXdpZHRoXCI6XCIxMDAlXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSkudW53cmFwKCl9fSx3PWZ1bmN0aW9uKCl7dmFyIHQ9ZSh0aGlzKSxvPXQuZGF0YShhKSxuPW8ub3B0LGk9ZShcIi5tQ1NCX1wiK28uaWR4K1wiX3Njcm9sbGJhcjpmaXJzdFwiKSxyPW9lKG4uc2Nyb2xsQnV0dG9ucy50YWJpbmRleCk/XCJ0YWJpbmRleD0nXCIrbi5zY3JvbGxCdXR0b25zLnRhYmluZGV4K1wiJ1wiOlwiXCIsbD1bXCI8YSBocmVmPScjJyBjbGFzcz0nXCIrZFsxM10rXCInIFwiK3IrXCIgLz5cIixcIjxhIGhyZWY9JyMnIGNsYXNzPSdcIitkWzE0XStcIicgXCIrcitcIiAvPlwiLFwiPGEgaHJlZj0nIycgY2xhc3M9J1wiK2RbMTVdK1wiJyBcIityK1wiIC8+XCIsXCI8YSBocmVmPScjJyBjbGFzcz0nXCIrZFsxNl0rXCInIFwiK3IrXCIgLz5cIl0scz1bXCJ4XCI9PT1uLmF4aXM/bFsyXTpsWzBdLFwieFwiPT09bi5heGlzP2xbM106bFsxXSxsWzJdLGxbM11dO24uc2Nyb2xsQnV0dG9ucy5lbmFibGUmJmkucHJlcGVuZChzWzBdKS5hcHBlbmQoc1sxXSkubmV4dChcIi5tQ1NCX3Njcm9sbFRvb2xzXCIpLnByZXBlbmQoc1syXSkuYXBwZW5kKHNbM10pfSxTPWZ1bmN0aW9uKCl7dmFyIHQ9ZSh0aGlzKSxvPXQuZGF0YShhKSxuPWUoXCIjbUNTQl9cIitvLmlkeCksaT1lKFwiI21DU0JfXCIrby5pZHgrXCJfY29udGFpbmVyXCIpLHI9W2UoXCIjbUNTQl9cIitvLmlkeCtcIl9kcmFnZ2VyX3ZlcnRpY2FsXCIpLGUoXCIjbUNTQl9cIitvLmlkeCtcIl9kcmFnZ2VyX2hvcml6b250YWxcIildLGw9W24uaGVpZ2h0KCkvaS5vdXRlckhlaWdodCghMSksbi53aWR0aCgpL2kub3V0ZXJXaWR0aCghMSldLGM9W3BhcnNlSW50KHJbMF0uY3NzKFwibWluLWhlaWdodFwiKSksTWF0aC5yb3VuZChsWzBdKnJbMF0ucGFyZW50KCkuaGVpZ2h0KCkpLHBhcnNlSW50KHJbMV0uY3NzKFwibWluLXdpZHRoXCIpKSxNYXRoLnJvdW5kKGxbMV0qclsxXS5wYXJlbnQoKS53aWR0aCgpKV0sZD1zJiZjWzFdPGNbMF0/Y1swXTpjWzFdLHU9cyYmY1szXTxjWzJdP2NbMl06Y1szXTtyWzBdLmNzcyh7aGVpZ2h0OmQsXCJtYXgtaGVpZ2h0XCI6clswXS5wYXJlbnQoKS5oZWlnaHQoKS0xMH0pLmZpbmQoXCIubUNTQl9kcmFnZ2VyX2JhclwiKS5jc3Moe1wibGluZS1oZWlnaHRcIjpjWzBdK1wicHhcIn0pLHJbMV0uY3NzKHt3aWR0aDp1LFwibWF4LXdpZHRoXCI6clsxXS5wYXJlbnQoKS53aWR0aCgpLTEwfSl9LGI9ZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpLG89dC5kYXRhKGEpLG49ZShcIiNtQ1NCX1wiK28uaWR4KSxpPWUoXCIjbUNTQl9cIitvLmlkeCtcIl9jb250YWluZXJcIikscj1bZShcIiNtQ1NCX1wiK28uaWR4K1wiX2RyYWdnZXJfdmVydGljYWxcIiksZShcIiNtQ1NCX1wiK28uaWR4K1wiX2RyYWdnZXJfaG9yaXpvbnRhbFwiKV0sbD1baS5vdXRlckhlaWdodCghMSktbi5oZWlnaHQoKSxpLm91dGVyV2lkdGgoITEpLW4ud2lkdGgoKV0scz1bbFswXS8oclswXS5wYXJlbnQoKS5oZWlnaHQoKS1yWzBdLmhlaWdodCgpKSxsWzFdLyhyWzFdLnBhcmVudCgpLndpZHRoKCktclsxXS53aWR0aCgpKV07by5zY3JvbGxSYXRpbz17eTpzWzBdLHg6c1sxXX19LEM9ZnVuY3Rpb24oZSx0LG8pe3ZhciBhPW8/ZFswXStcIl9leHBhbmRlZFwiOlwiXCIsbj1lLmNsb3Nlc3QoXCIubUNTQl9zY3JvbGxUb29sc1wiKTtcImFjdGl2ZVwiPT09dD8oZS50b2dnbGVDbGFzcyhkWzBdK1wiIFwiK2EpLG4udG9nZ2xlQ2xhc3MoZFsxXSksZVswXS5fZHJhZ2dhYmxlPWVbMF0uX2RyYWdnYWJsZT8wOjEpOmVbMF0uX2RyYWdnYWJsZXx8KFwiaGlkZVwiPT09dD8oZS5yZW1vdmVDbGFzcyhkWzBdKSxuLnJlbW92ZUNsYXNzKGRbMV0pKTooZS5hZGRDbGFzcyhkWzBdKSxuLmFkZENsYXNzKGRbMV0pKSl9LHk9ZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpLG89dC5kYXRhKGEpLG49ZShcIiNtQ1NCX1wiK28uaWR4KSxpPWUoXCIjbUNTQl9cIitvLmlkeCtcIl9jb250YWluZXJcIikscj1udWxsPT1vLm92ZXJmbG93ZWQ/aS5oZWlnaHQoKTppLm91dGVySGVpZ2h0KCExKSxsPW51bGw9PW8ub3ZlcmZsb3dlZD9pLndpZHRoKCk6aS5vdXRlcldpZHRoKCExKSxzPWlbMF0uc2Nyb2xsSGVpZ2h0LGM9aVswXS5zY3JvbGxXaWR0aDtyZXR1cm4gcz5yJiYocj1zKSxjPmwmJihsPWMpLFtyPm4uaGVpZ2h0KCksbD5uLndpZHRoKCldfSxCPWZ1bmN0aW9uKCl7dmFyIHQ9ZSh0aGlzKSxvPXQuZGF0YShhKSxuPW8ub3B0LGk9ZShcIiNtQ1NCX1wiK28uaWR4KSxyPWUoXCIjbUNTQl9cIitvLmlkeCtcIl9jb250YWluZXJcIiksbD1bZShcIiNtQ1NCX1wiK28uaWR4K1wiX2RyYWdnZXJfdmVydGljYWxcIiksZShcIiNtQ1NCX1wiK28uaWR4K1wiX2RyYWdnZXJfaG9yaXpvbnRhbFwiKV07aWYoUSh0KSwoXCJ4XCIhPT1uLmF4aXMmJiFvLm92ZXJmbG93ZWRbMF18fFwieVwiPT09bi5heGlzJiZvLm92ZXJmbG93ZWRbMF0pJiYobFswXS5hZGQocikuY3NzKFwidG9wXCIsMCksRyh0LFwiX3Jlc2V0WVwiKSksXCJ5XCIhPT1uLmF4aXMmJiFvLm92ZXJmbG93ZWRbMV18fFwieFwiPT09bi5heGlzJiZvLm92ZXJmbG93ZWRbMV0pe3ZhciBzPWR4PTA7XCJydGxcIj09PW8ubGFuZ0RpciYmKHM9aS53aWR0aCgpLXIub3V0ZXJXaWR0aCghMSksZHg9TWF0aC5hYnMocy9vLnNjcm9sbFJhdGlvLngpKSxyLmNzcyhcImxlZnRcIixzKSxsWzFdLmNzcyhcImxlZnRcIixkeCksRyh0LFwiX3Jlc2V0WFwiKX19LFQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7cj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5ldmVudC5zcGVjaWFsLm1vdXNld2hlZWw/KGNsZWFyVGltZW91dChyKSxXLmNhbGwob1swXSkpOnQoKX0sMTAwKX12YXIgbz1lKHRoaXMpLG49by5kYXRhKGEpLGk9bi5vcHQ7aWYoIW4uYmluZEV2ZW50cyl7aWYoSS5jYWxsKHRoaXMpLGkuY29udGVudFRvdWNoU2Nyb2xsJiZELmNhbGwodGhpcyksRS5jYWxsKHRoaXMpLGkubW91c2VXaGVlbC5lbmFibGUpe3ZhciByO3QoKX1QLmNhbGwodGhpcyksVS5jYWxsKHRoaXMpLGkuYWR2YW5jZWQuYXV0b1Njcm9sbE9uRm9jdXMmJkguY2FsbCh0aGlzKSxpLnNjcm9sbEJ1dHRvbnMuZW5hYmxlJiZGLmNhbGwodGhpcyksaS5rZXlib2FyZC5lbmFibGUmJnEuY2FsbCh0aGlzKSxuLmJpbmRFdmVudHM9ITB9fSxrPWZ1bmN0aW9uKCl7dmFyIHQ9ZSh0aGlzKSxvPXQuZGF0YShhKSxuPW8ub3B0LGk9YStcIl9cIitvLmlkeCxyPVwiLm1DU0JfXCIrby5pZHgrXCJfc2Nyb2xsYmFyXCIsbD1lKFwiI21DU0JfXCIrby5pZHgrXCIsI21DU0JfXCIrby5pZHgrXCJfY29udGFpbmVyLCNtQ1NCX1wiK28uaWR4K1wiX2NvbnRhaW5lcl93cmFwcGVyLFwiK3IrXCIgLlwiK2RbMTJdK1wiLCNtQ1NCX1wiK28uaWR4K1wiX2RyYWdnZXJfdmVydGljYWwsI21DU0JfXCIrby5pZHgrXCJfZHJhZ2dlcl9ob3Jpem9udGFsLFwiK3IrXCI+YVwiKSxzPWUoXCIjbUNTQl9cIitvLmlkeCtcIl9jb250YWluZXJcIik7bi5hZHZhbmNlZC5yZWxlYXNlRHJhZ2dhYmxlU2VsZWN0b3JzJiZsLmFkZChlKG4uYWR2YW5jZWQucmVsZWFzZURyYWdnYWJsZVNlbGVjdG9ycykpLG4uYWR2YW5jZWQuZXh0cmFEcmFnZ2FibGVTZWxlY3RvcnMmJmwuYWRkKGUobi5hZHZhbmNlZC5leHRyYURyYWdnYWJsZVNlbGVjdG9ycykpLG8uYmluZEV2ZW50cyYmKGUoZG9jdW1lbnQpLmFkZChlKCFBKCl8fHRvcC5kb2N1bWVudCkpLnVuYmluZChcIi5cIitpKSxsLmVhY2goZnVuY3Rpb24oKXtlKHRoaXMpLnVuYmluZChcIi5cIitpKX0pLGNsZWFyVGltZW91dCh0WzBdLl9mb2N1c1RpbWVvdXQpLCQodFswXSxcIl9mb2N1c1RpbWVvdXRcIiksY2xlYXJUaW1lb3V0KG8uc2VxdWVudGlhbC5zdGVwKSwkKG8uc2VxdWVudGlhbCxcInN0ZXBcIiksY2xlYXJUaW1lb3V0KHNbMF0ub25Db21wbGV0ZVRpbWVvdXQpLCQoc1swXSxcIm9uQ29tcGxldGVUaW1lb3V0XCIpLG8uYmluZEV2ZW50cz0hMSl9LE09ZnVuY3Rpb24odCl7dmFyIG89ZSh0aGlzKSxuPW8uZGF0YShhKSxpPW4ub3B0LHI9ZShcIiNtQ1NCX1wiK24uaWR4K1wiX2NvbnRhaW5lcl93cmFwcGVyXCIpLGw9ci5sZW5ndGg/cjplKFwiI21DU0JfXCIrbi5pZHgrXCJfY29udGFpbmVyXCIpLHM9W2UoXCIjbUNTQl9cIituLmlkeCtcIl9zY3JvbGxiYXJfdmVydGljYWxcIiksZShcIiNtQ1NCX1wiK24uaWR4K1wiX3Njcm9sbGJhcl9ob3Jpem9udGFsXCIpXSxjPVtzWzBdLmZpbmQoXCIubUNTQl9kcmFnZ2VyXCIpLHNbMV0uZmluZChcIi5tQ1NCX2RyYWdnZXJcIildO1wieFwiIT09aS5heGlzJiYobi5vdmVyZmxvd2VkWzBdJiYhdD8oc1swXS5hZGQoY1swXSkuYWRkKHNbMF0uY2hpbGRyZW4oXCJhXCIpKS5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKSxsLnJlbW92ZUNsYXNzKGRbOF0rXCIgXCIrZFsxMF0pKTooaS5hbHdheXNTaG93U2Nyb2xsYmFyPygyIT09aS5hbHdheXNTaG93U2Nyb2xsYmFyJiZjWzBdLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIiksbC5yZW1vdmVDbGFzcyhkWzEwXSkpOihzWzBdLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIiksbC5hZGRDbGFzcyhkWzEwXSkpLGwuYWRkQ2xhc3MoZFs4XSkpKSxcInlcIiE9PWkuYXhpcyYmKG4ub3ZlcmZsb3dlZFsxXSYmIXQ/KHNbMV0uYWRkKGNbMV0pLmFkZChzWzFdLmNoaWxkcmVuKFwiYVwiKSkuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIiksbC5yZW1vdmVDbGFzcyhkWzldK1wiIFwiK2RbMTFdKSk6KGkuYWx3YXlzU2hvd1Njcm9sbGJhcj8oMiE9PWkuYWx3YXlzU2hvd1Njcm9sbGJhciYmY1sxXS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpLGwucmVtb3ZlQ2xhc3MoZFsxMV0pKTooc1sxXS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpLGwuYWRkQ2xhc3MoZFsxMV0pKSxsLmFkZENsYXNzKGRbOV0pKSksbi5vdmVyZmxvd2VkWzBdfHxuLm92ZXJmbG93ZWRbMV0/by5yZW1vdmVDbGFzcyhkWzVdKTpvLmFkZENsYXNzKGRbNV0pfSxPPWZ1bmN0aW9uKHQpe3ZhciBvPXQudHlwZSxhPXQudGFyZ2V0Lm93bmVyRG9jdW1lbnQhPT1kb2N1bWVudCYmbnVsbCE9PWZyYW1lRWxlbWVudD9bZShmcmFtZUVsZW1lbnQpLm9mZnNldCgpLnRvcCxlKGZyYW1lRWxlbWVudCkub2Zmc2V0KCkubGVmdF06bnVsbCxuPUEoKSYmdC50YXJnZXQub3duZXJEb2N1bWVudCE9PXRvcC5kb2N1bWVudCYmbnVsbCE9PWZyYW1lRWxlbWVudD9bZSh0LnZpZXcuZnJhbWVFbGVtZW50KS5vZmZzZXQoKS50b3AsZSh0LnZpZXcuZnJhbWVFbGVtZW50KS5vZmZzZXQoKS5sZWZ0XTpbMCwwXTtzd2l0Y2gobyl7Y2FzZVwicG9pbnRlcmRvd25cIjpjYXNlXCJNU1BvaW50ZXJEb3duXCI6Y2FzZVwicG9pbnRlcm1vdmVcIjpjYXNlXCJNU1BvaW50ZXJNb3ZlXCI6Y2FzZVwicG9pbnRlcnVwXCI6Y2FzZVwiTVNQb2ludGVyVXBcIjpyZXR1cm4gYT9bdC5vcmlnaW5hbEV2ZW50LnBhZ2VZLWFbMF0rblswXSx0Lm9yaWdpbmFsRXZlbnQucGFnZVgtYVsxXStuWzFdLCExXTpbdC5vcmlnaW5hbEV2ZW50LnBhZ2VZLHQub3JpZ2luYWxFdmVudC5wYWdlWCwhMV07Y2FzZVwidG91Y2hzdGFydFwiOmNhc2VcInRvdWNobW92ZVwiOmNhc2VcInRvdWNoZW5kXCI6dmFyIGk9dC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF18fHQub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXSxyPXQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aHx8dC5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDtyZXR1cm4gdC50YXJnZXQub3duZXJEb2N1bWVudCE9PWRvY3VtZW50P1tpLnNjcmVlblksaS5zY3JlZW5YLHI+MV06W2kucGFnZVksaS5wYWdlWCxyPjFdO2RlZmF1bHQ6cmV0dXJuIGE/W3QucGFnZVktYVswXStuWzBdLHQucGFnZVgtYVsxXStuWzFdLCExXTpbdC5wYWdlWSx0LnBhZ2VYLCExXX19LEk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUsdCxhLG4pe2lmKGhbMF0uaWRsZVRpbWVyPWQuc2Nyb2xsSW5lcnRpYTwyMzM/MjUwOjAsby5hdHRyKFwiaWRcIik9PT1mWzFdKXZhciBpPVwieFwiLHM9KG9bMF0ub2Zmc2V0TGVmdC10K24pKmwuc2Nyb2xsUmF0aW8ueDtlbHNlIHZhciBpPVwieVwiLHM9KG9bMF0ub2Zmc2V0VG9wLWUrYSkqbC5zY3JvbGxSYXRpby55O0cocixzLnRvU3RyaW5nKCkse2RpcjppLGRyYWc6ITB9KX12YXIgbyxuLGkscj1lKHRoaXMpLGw9ci5kYXRhKGEpLGQ9bC5vcHQsdT1hK1wiX1wiK2wuaWR4LGY9W1wibUNTQl9cIitsLmlkeCtcIl9kcmFnZ2VyX3ZlcnRpY2FsXCIsXCJtQ1NCX1wiK2wuaWR4K1wiX2RyYWdnZXJfaG9yaXpvbnRhbFwiXSxoPWUoXCIjbUNTQl9cIitsLmlkeCtcIl9jb250YWluZXJcIiksbT1lKFwiI1wiK2ZbMF0rXCIsI1wiK2ZbMV0pLHA9ZC5hZHZhbmNlZC5yZWxlYXNlRHJhZ2dhYmxlU2VsZWN0b3JzP20uYWRkKGUoZC5hZHZhbmNlZC5yZWxlYXNlRHJhZ2dhYmxlU2VsZWN0b3JzKSk6bSxnPWQuYWR2YW5jZWQuZXh0cmFEcmFnZ2FibGVTZWxlY3RvcnM/ZSghQSgpfHx0b3AuZG9jdW1lbnQpLmFkZChlKGQuYWR2YW5jZWQuZXh0cmFEcmFnZ2FibGVTZWxlY3RvcnMpKTplKCFBKCl8fHRvcC5kb2N1bWVudCk7bS5iaW5kKFwiY29udGV4dG1lbnUuXCIrdSxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCl9KS5iaW5kKFwibW91c2Vkb3duLlwiK3UrXCIgdG91Y2hzdGFydC5cIit1K1wiIHBvaW50ZXJkb3duLlwiK3UrXCIgTVNQb2ludGVyRG93bi5cIit1LGZ1bmN0aW9uKHQpe2lmKHQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpLGVlKHQpKXtjPSEwLHMmJihkb2N1bWVudC5vbnNlbGVjdHN0YXJ0PWZ1bmN0aW9uKCl7cmV0dXJuITF9KSxMLmNhbGwoaCwhMSksUShyKSxvPWUodGhpcyk7dmFyIGE9by5vZmZzZXQoKSxsPU8odClbMF0tYS50b3AsdT1PKHQpWzFdLWEubGVmdCxmPW8uaGVpZ2h0KCkrYS50b3AsbT1vLndpZHRoKCkrYS5sZWZ0O2Y+bCYmbD4wJiZtPnUmJnU+MCYmKG49bCxpPXUpLEMobyxcImFjdGl2ZVwiLGQuYXV0b0V4cGFuZFNjcm9sbGJhcil9fSkuYmluZChcInRvdWNobW92ZS5cIit1LGZ1bmN0aW9uKGUpe2Uuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBhPW8ub2Zmc2V0KCkscj1PKGUpWzBdLWEudG9wLGw9TyhlKVsxXS1hLmxlZnQ7dChuLGkscixsKX0pLGUoZG9jdW1lbnQpLmFkZChnKS5iaW5kKFwibW91c2Vtb3ZlLlwiK3UrXCIgcG9pbnRlcm1vdmUuXCIrdStcIiBNU1BvaW50ZXJNb3ZlLlwiK3UsZnVuY3Rpb24oZSl7aWYobyl7dmFyIGE9by5vZmZzZXQoKSxyPU8oZSlbMF0tYS50b3AsbD1PKGUpWzFdLWEubGVmdDtpZihuPT09ciYmaT09PWwpcmV0dXJuO3QobixpLHIsbCl9fSkuYWRkKHApLmJpbmQoXCJtb3VzZXVwLlwiK3UrXCIgdG91Y2hlbmQuXCIrdStcIiBwb2ludGVydXAuXCIrdStcIiBNU1BvaW50ZXJVcC5cIit1LGZ1bmN0aW9uKCl7byYmKEMobyxcImFjdGl2ZVwiLGQuYXV0b0V4cGFuZFNjcm9sbGJhciksbz1udWxsKSxjPSExLHMmJihkb2N1bWVudC5vbnNlbGVjdHN0YXJ0PW51bGwpLEwuY2FsbChoLCEwKX0pfSxEPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbyhlKXtpZighdGUoZSl8fGN8fE8oZSlbMl0pcmV0dXJuIHZvaWQodD0wKTt0PTEsYj0wLEM9MCxkPTEseS5yZW1vdmVDbGFzcyhcIm1DU190b3VjaF9hY3Rpb25cIik7dmFyIG89SS5vZmZzZXQoKTt1PU8oZSlbMF0tby50b3AsZj1PKGUpWzFdLW8ubGVmdCx6PVtPKGUpWzBdLE8oZSlbMV1dfWZ1bmN0aW9uIG4oZSl7aWYodGUoZSkmJiFjJiYhTyhlKVsyXSYmKFQuZG9jdW1lbnRUb3VjaFNjcm9sbHx8ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksKCFDfHxiKSYmZCkpe2c9SygpO3ZhciB0PU0ub2Zmc2V0KCksbz1PKGUpWzBdLXQudG9wLGE9TyhlKVsxXS10LmxlZnQsbj1cIm1jc0xpbmVhck91dFwiO2lmKEUucHVzaChvKSxXLnB1c2goYSkselsyXT1NYXRoLmFicyhPKGUpWzBdLXpbMF0pLHpbM109TWF0aC5hYnMoTyhlKVsxXS16WzFdKSxCLm92ZXJmbG93ZWRbMF0pdmFyIGk9RFswXS5wYXJlbnQoKS5oZWlnaHQoKS1EWzBdLmhlaWdodCgpLHI9dS1vPjAmJm8tdT4tKGkqQi5zY3JvbGxSYXRpby55KSYmKDIqelszXTx6WzJdfHxcInl4XCI9PT1ULmF4aXMpO2lmKEIub3ZlcmZsb3dlZFsxXSl2YXIgbD1EWzFdLnBhcmVudCgpLndpZHRoKCktRFsxXS53aWR0aCgpLGg9Zi1hPjAmJmEtZj4tKGwqQi5zY3JvbGxSYXRpby54KSYmKDIqelsyXTx6WzNdfHxcInl4XCI9PT1ULmF4aXMpO3J8fGg/KFV8fGUucHJldmVudERlZmF1bHQoKSxiPTEpOihDPTEseS5hZGRDbGFzcyhcIm1DU190b3VjaF9hY3Rpb25cIikpLFUmJmUucHJldmVudERlZmF1bHQoKSx3PVwieXhcIj09PVQuYXhpcz9bdS1vLGYtYV06XCJ4XCI9PT1ULmF4aXM/W251bGwsZi1hXTpbdS1vLG51bGxdLElbMF0uaWRsZVRpbWVyPTI1MCxCLm92ZXJmbG93ZWRbMF0mJnMod1swXSxSLG4sXCJ5XCIsXCJhbGxcIiwhMCksQi5vdmVyZmxvd2VkWzFdJiZzKHdbMV0sUixuLFwieFwiLEwsITApfX1mdW5jdGlvbiBpKGUpe2lmKCF0ZShlKXx8Y3x8TyhlKVsyXSlyZXR1cm4gdm9pZCh0PTApO3Q9MSxlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLFEoeSkscD1LKCk7dmFyIG89TS5vZmZzZXQoKTtoPU8oZSlbMF0tby50b3AsbT1PKGUpWzFdLW8ubGVmdCxFPVtdLFc9W119ZnVuY3Rpb24gcihlKXtpZih0ZShlKSYmIWMmJiFPKGUpWzJdKXtkPTAsZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxiPTAsQz0wLHY9SygpO3ZhciB0PU0ub2Zmc2V0KCksbz1PKGUpWzBdLXQudG9wLGE9TyhlKVsxXS10LmxlZnQ7aWYoISh2LWc+MzApKXtfPTFlMy8odi1wKTt2YXIgbj1cIm1jc0Vhc2VPdXRcIixpPTIuNT5fLHI9aT9bRVtFLmxlbmd0aC0yXSxXW1cubGVuZ3RoLTJdXTpbMCwwXTt4PWk/W28tclswXSxhLXJbMV1dOltvLWgsYS1tXTt2YXIgdT1bTWF0aC5hYnMoeFswXSksTWF0aC5hYnMoeFsxXSldO189aT9bTWF0aC5hYnMoeFswXS80KSxNYXRoLmFicyh4WzFdLzQpXTpbXyxfXTt2YXIgZj1bTWF0aC5hYnMoSVswXS5vZmZzZXRUb3ApLXhbMF0qbCh1WzBdL19bMF0sX1swXSksTWF0aC5hYnMoSVswXS5vZmZzZXRMZWZ0KS14WzFdKmwodVsxXS9fWzFdLF9bMV0pXTt3PVwieXhcIj09PVQuYXhpcz9bZlswXSxmWzFdXTpcInhcIj09PVQuYXhpcz9bbnVsbCxmWzFdXTpbZlswXSxudWxsXSxTPVs0KnVbMF0rVC5zY3JvbGxJbmVydGlhLDQqdVsxXStULnNjcm9sbEluZXJ0aWFdO3ZhciB5PXBhcnNlSW50KFQuY29udGVudFRvdWNoU2Nyb2xsKXx8MDt3WzBdPXVbMF0+eT93WzBdOjAsd1sxXT11WzFdPnk/d1sxXTowLEIub3ZlcmZsb3dlZFswXSYmcyh3WzBdLFNbMF0sbixcInlcIixMLCExKSxCLm92ZXJmbG93ZWRbMV0mJnMod1sxXSxTWzFdLG4sXCJ4XCIsTCwhMSl9fX1mdW5jdGlvbiBsKGUsdCl7dmFyIG89WzEuNSp0LDIqdCx0LzEuNSx0LzJdO3JldHVybiBlPjkwP3Q+ND9vWzBdOm9bM106ZT42MD90PjM/b1szXTpvWzJdOmU+MzA/dD44P29bMV06dD42P29bMF06dD40P3Q6b1syXTp0Pjg/dDpvWzNdfWZ1bmN0aW9uIHMoZSx0LG8sYSxuLGkpe2UmJkcoeSxlLnRvU3RyaW5nKCkse2R1cjp0LHNjcm9sbEVhc2luZzpvLGRpcjphLG92ZXJ3cml0ZTpuLGRyYWc6aX0pfXZhciBkLHUsZixoLG0scCxnLHYseCxfLHcsUyxiLEMseT1lKHRoaXMpLEI9eS5kYXRhKGEpLFQ9Qi5vcHQsaz1hK1wiX1wiK0IuaWR4LE09ZShcIiNtQ1NCX1wiK0IuaWR4KSxJPWUoXCIjbUNTQl9cIitCLmlkeCtcIl9jb250YWluZXJcIiksRD1bZShcIiNtQ1NCX1wiK0IuaWR4K1wiX2RyYWdnZXJfdmVydGljYWxcIiksZShcIiNtQ1NCX1wiK0IuaWR4K1wiX2RyYWdnZXJfaG9yaXpvbnRhbFwiKV0sRT1bXSxXPVtdLFI9MCxMPVwieXhcIj09PVQuYXhpcz9cIm5vbmVcIjpcImFsbFwiLHo9W10sUD1JLmZpbmQoXCJpZnJhbWVcIiksSD1bXCJ0b3VjaHN0YXJ0LlwiK2srXCIgcG9pbnRlcmRvd24uXCIraytcIiBNU1BvaW50ZXJEb3duLlwiK2ssXCJ0b3VjaG1vdmUuXCIraytcIiBwb2ludGVybW92ZS5cIitrK1wiIE1TUG9pbnRlck1vdmUuXCIrayxcInRvdWNoZW5kLlwiK2srXCIgcG9pbnRlcnVwLlwiK2srXCIgTVNQb2ludGVyVXAuXCIra10sVT12b2lkIDAhPT1kb2N1bWVudC5ib2R5LnN0eWxlLnRvdWNoQWN0aW9uJiZcIlwiIT09ZG9jdW1lbnQuYm9keS5zdHlsZS50b3VjaEFjdGlvbjtJLmJpbmQoSFswXSxmdW5jdGlvbihlKXtvKGUpfSkuYmluZChIWzFdLGZ1bmN0aW9uKGUpe24oZSl9KSxNLmJpbmQoSFswXSxmdW5jdGlvbihlKXtpKGUpfSkuYmluZChIWzJdLGZ1bmN0aW9uKGUpe3IoZSl9KSxQLmxlbmd0aCYmUC5lYWNoKGZ1bmN0aW9uKCl7ZSh0aGlzKS5iaW5kKFwibG9hZFwiLGZ1bmN0aW9uKCl7QSh0aGlzKSYmZSh0aGlzLmNvbnRlbnREb2N1bWVudHx8dGhpcy5jb250ZW50V2luZG93LmRvY3VtZW50KS5iaW5kKEhbMF0sZnVuY3Rpb24oZSl7byhlKSxpKGUpfSkuYmluZChIWzFdLGZ1bmN0aW9uKGUpe24oZSl9KS5iaW5kKEhbMl0sZnVuY3Rpb24oZSl7cihlKX0pfSl9KX0sRT1mdW5jdGlvbigpe2Z1bmN0aW9uIG8oKXtyZXR1cm4gd2luZG93LmdldFNlbGVjdGlvbj93aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTpkb2N1bWVudC5zZWxlY3Rpb24mJlwiQ29udHJvbFwiIT1kb2N1bWVudC5zZWxlY3Rpb24udHlwZT9kb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS50ZXh0OjB9ZnVuY3Rpb24gbihlLHQsbyl7ZC50eXBlPW8mJmk/XCJzdGVwcGVkXCI6XCJzdGVwbGVzc1wiLGQuc2Nyb2xsQW1vdW50PTEwLGoocixlLHQsXCJtY3NMaW5lYXJPdXRcIixvPzYwOm51bGwpfXZhciBpLHI9ZSh0aGlzKSxsPXIuZGF0YShhKSxzPWwub3B0LGQ9bC5zZXF1ZW50aWFsLHU9YStcIl9cIitsLmlkeCxmPWUoXCIjbUNTQl9cIitsLmlkeCtcIl9jb250YWluZXJcIiksaD1mLnBhcmVudCgpO2YuYmluZChcIm1vdXNlZG93bi5cIit1LGZ1bmN0aW9uKCl7dHx8aXx8KGk9MSxjPSEwKX0pLmFkZChkb2N1bWVudCkuYmluZChcIm1vdXNlbW92ZS5cIit1LGZ1bmN0aW9uKGUpe2lmKCF0JiZpJiZvKCkpe3ZhciBhPWYub2Zmc2V0KCkscj1PKGUpWzBdLWEudG9wK2ZbMF0ub2Zmc2V0VG9wLGM9TyhlKVsxXS1hLmxlZnQrZlswXS5vZmZzZXRMZWZ0O3I+MCYmcjxoLmhlaWdodCgpJiZjPjAmJmM8aC53aWR0aCgpP2Quc3RlcCYmbihcIm9mZlwiLG51bGwsXCJzdGVwcGVkXCIpOihcInhcIiE9PXMuYXhpcyYmbC5vdmVyZmxvd2VkWzBdJiYoMD5yP24oXCJvblwiLDM4KTpyPmguaGVpZ2h0KCkmJm4oXCJvblwiLDQwKSksXCJ5XCIhPT1zLmF4aXMmJmwub3ZlcmZsb3dlZFsxXSYmKDA+Yz9uKFwib25cIiwzNyk6Yz5oLndpZHRoKCkmJm4oXCJvblwiLDM5KSkpfX0pLmJpbmQoXCJtb3VzZXVwLlwiK3UrXCIgZHJhZ2VuZC5cIit1LGZ1bmN0aW9uKCl7dHx8KGkmJihpPTAsbihcIm9mZlwiLG51bGwpKSxjPSExKX0pfSxXPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGEpe2lmKFEobyksIXoobyx0LnRhcmdldCkpe3ZhciByPVwiYXV0b1wiIT09aS5tb3VzZVdoZWVsLmRlbHRhRmFjdG9yP3BhcnNlSW50KGkubW91c2VXaGVlbC5kZWx0YUZhY3Rvcik6cyYmdC5kZWx0YUZhY3RvcjwxMDA/MTAwOnQuZGVsdGFGYWN0b3J8fDEwMCxkPWkuc2Nyb2xsSW5lcnRpYTtpZihcInhcIj09PWkuYXhpc3x8XCJ4XCI9PT1pLm1vdXNlV2hlZWwuYXhpcyl2YXIgdT1cInhcIixmPVtNYXRoLnJvdW5kKHIqbi5zY3JvbGxSYXRpby54KSxwYXJzZUludChpLm1vdXNlV2hlZWwuc2Nyb2xsQW1vdW50KV0saD1cImF1dG9cIiE9PWkubW91c2VXaGVlbC5zY3JvbGxBbW91bnQ/ZlsxXTpmWzBdPj1sLndpZHRoKCk/LjkqbC53aWR0aCgpOmZbMF0sbT1NYXRoLmFicyhlKFwiI21DU0JfXCIrbi5pZHgrXCJfY29udGFpbmVyXCIpWzBdLm9mZnNldExlZnQpLHA9Y1sxXVswXS5vZmZzZXRMZWZ0LGc9Y1sxXS5wYXJlbnQoKS53aWR0aCgpLWNbMV0ud2lkdGgoKSx2PVwieVwiPT09aS5tb3VzZVdoZWVsLmF4aXM/dC5kZWx0YVl8fGE6dC5kZWx0YVg7ZWxzZSB2YXIgdT1cInlcIixmPVtNYXRoLnJvdW5kKHIqbi5zY3JvbGxSYXRpby55KSxwYXJzZUludChpLm1vdXNlV2hlZWwuc2Nyb2xsQW1vdW50KV0saD1cImF1dG9cIiE9PWkubW91c2VXaGVlbC5zY3JvbGxBbW91bnQ/ZlsxXTpmWzBdPj1sLmhlaWdodCgpPy45KmwuaGVpZ2h0KCk6ZlswXSxtPU1hdGguYWJzKGUoXCIjbUNTQl9cIituLmlkeCtcIl9jb250YWluZXJcIilbMF0ub2Zmc2V0VG9wKSxwPWNbMF1bMF0ub2Zmc2V0VG9wLGc9Y1swXS5wYXJlbnQoKS5oZWlnaHQoKS1jWzBdLmhlaWdodCgpLHY9dC5kZWx0YVl8fGE7XCJ5XCI9PT11JiYhbi5vdmVyZmxvd2VkWzBdfHxcInhcIj09PXUmJiFuLm92ZXJmbG93ZWRbMV18fCgoaS5tb3VzZVdoZWVsLmludmVydHx8dC53ZWJraXREaXJlY3Rpb25JbnZlcnRlZEZyb21EZXZpY2UpJiYodj0tdiksaS5tb3VzZVdoZWVsLm5vcm1hbGl6ZURlbHRhJiYodj0wPnY/LTE6MSksKHY+MCYmMCE9PXB8fDA+diYmcCE9PWd8fGkubW91c2VXaGVlbC5wcmV2ZW50RGVmYXVsdCkmJih0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKSksdC5kZWx0YUZhY3Rvcjw1JiYhaS5tb3VzZVdoZWVsLm5vcm1hbGl6ZURlbHRhJiYoaD10LmRlbHRhRmFjdG9yLGQ9MTcpLEcobywobS12KmgpLnRvU3RyaW5nKCkse2Rpcjp1LGR1cjpkfSkpfX1pZihlKHRoaXMpLmRhdGEoYSkpe3ZhciBvPWUodGhpcyksbj1vLmRhdGEoYSksaT1uLm9wdCxyPWErXCJfXCIrbi5pZHgsbD1lKFwiI21DU0JfXCIrbi5pZHgpLGM9W2UoXCIjbUNTQl9cIituLmlkeCtcIl9kcmFnZ2VyX3ZlcnRpY2FsXCIpLGUoXCIjbUNTQl9cIituLmlkeCtcIl9kcmFnZ2VyX2hvcml6b250YWxcIildLGQ9ZShcIiNtQ1NCX1wiK24uaWR4K1wiX2NvbnRhaW5lclwiKS5maW5kKFwiaWZyYW1lXCIpO2QubGVuZ3RoJiZkLmVhY2goZnVuY3Rpb24oKXtlKHRoaXMpLmJpbmQoXCJsb2FkXCIsZnVuY3Rpb24oKXtBKHRoaXMpJiZlKHRoaXMuY29udGVudERvY3VtZW50fHx0aGlzLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQpLmJpbmQoXCJtb3VzZXdoZWVsLlwiK3IsZnVuY3Rpb24oZSxvKXt0KGUsbyl9KX0pfSksbC5iaW5kKFwibW91c2V3aGVlbC5cIityLGZ1bmN0aW9uKGUsbyl7dChlLG8pfSl9fSxSPW5ldyBPYmplY3QsQT1mdW5jdGlvbih0KXt2YXIgbz0hMSxhPSExLG49bnVsbDtpZih2b2lkIDA9PT10P2E9XCIjZW1wdHlcIjp2b2lkIDAhPT1lKHQpLmF0dHIoXCJpZFwiKSYmKGE9ZSh0KS5hdHRyKFwiaWRcIikpLGEhPT0hMSYmdm9pZCAwIT09UlthXSlyZXR1cm4gUlthXTtpZih0KXt0cnl7dmFyIGk9dC5jb250ZW50RG9jdW1lbnR8fHQuY29udGVudFdpbmRvdy5kb2N1bWVudDtuPWkuYm9keS5pbm5lckhUTUx9Y2F0Y2gocil7fW89bnVsbCE9PW59ZWxzZXt0cnl7dmFyIGk9dG9wLmRvY3VtZW50O249aS5ib2R5LmlubmVySFRNTH1jYXRjaChyKXt9bz1udWxsIT09bn1yZXR1cm4gYSE9PSExJiYoUlthXT1vKSxvfSxMPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuZmluZChcImlmcmFtZVwiKTtpZih0Lmxlbmd0aCl7dmFyIG89ZT9cImF1dG9cIjpcIm5vbmVcIjt0LmNzcyhcInBvaW50ZXItZXZlbnRzXCIsbyl9fSx6PWZ1bmN0aW9uKHQsbyl7dmFyIG49by5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLGk9dC5kYXRhKGEpLm9wdC5tb3VzZVdoZWVsLmRpc2FibGVPdmVyLHI9W1wic2VsZWN0XCIsXCJ0ZXh0YXJlYVwiXTtyZXR1cm4gZS5pbkFycmF5KG4saSk+LTEmJiEoZS5pbkFycmF5KG4scik+LTEmJiFlKG8pLmlzKFwiOmZvY3VzXCIpKX0sUD1mdW5jdGlvbigpe3ZhciB0LG89ZSh0aGlzKSxuPW8uZGF0YShhKSxpPWErXCJfXCIrbi5pZHgscj1lKFwiI21DU0JfXCIrbi5pZHgrXCJfY29udGFpbmVyXCIpLGw9ci5wYXJlbnQoKSxzPWUoXCIubUNTQl9cIituLmlkeCtcIl9zY3JvbGxiYXIgLlwiK2RbMTJdKTtzLmJpbmQoXCJtb3VzZWRvd24uXCIraStcIiB0b3VjaHN0YXJ0LlwiK2krXCIgcG9pbnRlcmRvd24uXCIraStcIiBNU1BvaW50ZXJEb3duLlwiK2ksZnVuY3Rpb24obyl7Yz0hMCxlKG8udGFyZ2V0KS5oYXNDbGFzcyhcIm1DU0JfZHJhZ2dlclwiKXx8KHQ9MSl9KS5iaW5kKFwidG91Y2hlbmQuXCIraStcIiBwb2ludGVydXAuXCIraStcIiBNU1BvaW50ZXJVcC5cIitpLGZ1bmN0aW9uKCl7Yz0hMX0pLmJpbmQoXCJjbGljay5cIitpLGZ1bmN0aW9uKGEpe2lmKHQmJih0PTAsZShhLnRhcmdldCkuaGFzQ2xhc3MoZFsxMl0pfHxlKGEudGFyZ2V0KS5oYXNDbGFzcyhcIm1DU0JfZHJhZ2dlclJhaWxcIikpKXtRKG8pO3ZhciBpPWUodGhpcykscz1pLmZpbmQoXCIubUNTQl9kcmFnZ2VyXCIpO2lmKGkucGFyZW50KFwiLm1DU0Jfc2Nyb2xsVG9vbHNfaG9yaXpvbnRhbFwiKS5sZW5ndGg+MCl7aWYoIW4ub3ZlcmZsb3dlZFsxXSlyZXR1cm47dmFyIGM9XCJ4XCIsdT1hLnBhZ2VYPnMub2Zmc2V0KCkubGVmdD8tMToxLGY9TWF0aC5hYnMoclswXS5vZmZzZXRMZWZ0KS11KiguOSpsLndpZHRoKCkpfWVsc2V7aWYoIW4ub3ZlcmZsb3dlZFswXSlyZXR1cm47dmFyIGM9XCJ5XCIsdT1hLnBhZ2VZPnMub2Zmc2V0KCkudG9wPy0xOjEsZj1NYXRoLmFicyhyWzBdLm9mZnNldFRvcCktdSooLjkqbC5oZWlnaHQoKSl9RyhvLGYudG9TdHJpbmcoKSx7ZGlyOmMsc2Nyb2xsRWFzaW5nOlwibWNzRWFzZUluT3V0XCJ9KX19KX0sSD1mdW5jdGlvbigpe3ZhciB0PWUodGhpcyksbz10LmRhdGEoYSksbj1vLm9wdCxpPWErXCJfXCIrby5pZHgscj1lKFwiI21DU0JfXCIrby5pZHgrXCJfY29udGFpbmVyXCIpLGw9ci5wYXJlbnQoKTtyLmJpbmQoXCJmb2N1c2luLlwiK2ksZnVuY3Rpb24oKXt2YXIgbz1lKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLGE9ci5maW5kKFwiLm1DdXN0b21TY3JvbGxCb3hcIikubGVuZ3RoLGk9MDtvLmlzKG4uYWR2YW5jZWQuYXV0b1Njcm9sbE9uRm9jdXMpJiYoUSh0KSxjbGVhclRpbWVvdXQodFswXS5fZm9jdXNUaW1lb3V0KSx0WzBdLl9mb2N1c1RpbWVyPWE/KGkrMTcpKmE6MCx0WzBdLl9mb2N1c1RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPVthZShvKVswXSxhZShvKVsxXV0sYT1bclswXS5vZmZzZXRUb3AsclswXS5vZmZzZXRMZWZ0XSxzPVthWzBdK2VbMF0+PTAmJmFbMF0rZVswXTxsLmhlaWdodCgpLW8ub3V0ZXJIZWlnaHQoITEpLGFbMV0rZVsxXT49MCYmYVswXStlWzFdPGwud2lkdGgoKS1vLm91dGVyV2lkdGgoITEpXSxjPVwieXhcIiE9PW4uYXhpc3x8c1swXXx8c1sxXT9cImFsbFwiOlwibm9uZVwiO1wieFwiPT09bi5heGlzfHxzWzBdfHxHKHQsZVswXS50b1N0cmluZygpLHtkaXI6XCJ5XCIsc2Nyb2xsRWFzaW5nOlwibWNzRWFzZUluT3V0XCIsb3ZlcndyaXRlOmMsZHVyOml9KSxcInlcIj09PW4uYXhpc3x8c1sxXXx8Ryh0LGVbMV0udG9TdHJpbmcoKSx7ZGlyOlwieFwiLHNjcm9sbEVhc2luZzpcIm1jc0Vhc2VJbk91dFwiLG92ZXJ3cml0ZTpjLGR1cjppfSl9LHRbMF0uX2ZvY3VzVGltZXIpKX0pfSxVPWZ1bmN0aW9uKCl7dmFyIHQ9ZSh0aGlzKSxvPXQuZGF0YShhKSxuPWErXCJfXCIrby5pZHgsaT1lKFwiI21DU0JfXCIrby5pZHgrXCJfY29udGFpbmVyXCIpLnBhcmVudCgpO2kuYmluZChcInNjcm9sbC5cIituLGZ1bmN0aW9uKCl7MD09PWkuc2Nyb2xsVG9wKCkmJjA9PT1pLnNjcm9sbExlZnQoKXx8ZShcIi5tQ1NCX1wiK28uaWR4K1wiX3Njcm9sbGJhclwiKS5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJoaWRkZW5cIil9KX0sRj1mdW5jdGlvbigpe3ZhciB0PWUodGhpcyksbz10LmRhdGEoYSksbj1vLm9wdCxpPW8uc2VxdWVudGlhbCxyPWErXCJfXCIrby5pZHgsbD1cIi5tQ1NCX1wiK28uaWR4K1wiX3Njcm9sbGJhclwiLHM9ZShsK1wiPmFcIik7cy5iaW5kKFwiY29udGV4dG1lbnUuXCIrcixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCl9KS5iaW5kKFwibW91c2Vkb3duLlwiK3IrXCIgdG91Y2hzdGFydC5cIityK1wiIHBvaW50ZXJkb3duLlwiK3IrXCIgTVNQb2ludGVyRG93bi5cIityK1wiIG1vdXNldXAuXCIrcitcIiB0b3VjaGVuZC5cIityK1wiIHBvaW50ZXJ1cC5cIityK1wiIE1TUG9pbnRlclVwLlwiK3IrXCIgbW91c2VvdXQuXCIrcitcIiBwb2ludGVyb3V0LlwiK3IrXCIgTVNQb2ludGVyT3V0LlwiK3IrXCIgY2xpY2suXCIrcixmdW5jdGlvbihhKXtmdW5jdGlvbiByKGUsbyl7aS5zY3JvbGxBbW91bnQ9bi5zY3JvbGxCdXR0b25zLnNjcm9sbEFtb3VudCxqKHQsZSxvKX1pZihhLnByZXZlbnREZWZhdWx0KCksZWUoYSkpe3ZhciBsPWUodGhpcykuYXR0cihcImNsYXNzXCIpO3N3aXRjaChpLnR5cGU9bi5zY3JvbGxCdXR0b25zLnNjcm9sbFR5cGUsYS50eXBlKXtjYXNlXCJtb3VzZWRvd25cIjpjYXNlXCJ0b3VjaHN0YXJ0XCI6Y2FzZVwicG9pbnRlcmRvd25cIjpjYXNlXCJNU1BvaW50ZXJEb3duXCI6aWYoXCJzdGVwcGVkXCI9PT1pLnR5cGUpcmV0dXJuO2M9ITAsby50d2VlblJ1bm5pbmc9ITEscihcIm9uXCIsbCk7YnJlYWs7Y2FzZVwibW91c2V1cFwiOmNhc2VcInRvdWNoZW5kXCI6Y2FzZVwicG9pbnRlcnVwXCI6Y2FzZVwiTVNQb2ludGVyVXBcIjpjYXNlXCJtb3VzZW91dFwiOmNhc2VcInBvaW50ZXJvdXRcIjpjYXNlXCJNU1BvaW50ZXJPdXRcIjppZihcInN0ZXBwZWRcIj09PWkudHlwZSlyZXR1cm47Yz0hMSxpLmRpciYmcihcIm9mZlwiLGwpO2JyZWFrO2Nhc2VcImNsaWNrXCI6aWYoXCJzdGVwcGVkXCIhPT1pLnR5cGV8fG8udHdlZW5SdW5uaW5nKXJldHVybjtyKFwib25cIixsKX19fSl9LHE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe2Z1bmN0aW9uIGEoZSx0KXtyLnR5cGU9aS5rZXlib2FyZC5zY3JvbGxUeXBlLHIuc2Nyb2xsQW1vdW50PWkua2V5Ym9hcmQuc2Nyb2xsQW1vdW50LFwic3RlcHBlZFwiPT09ci50eXBlJiZuLnR3ZWVuUnVubmluZ3x8aihvLGUsdCl9c3dpdGNoKHQudHlwZSl7Y2FzZVwiYmx1clwiOm4udHdlZW5SdW5uaW5nJiZyLmRpciYmYShcIm9mZlwiLG51bGwpO2JyZWFrO2Nhc2VcImtleWRvd25cIjpjYXNlXCJrZXl1cFwiOnZhciBsPXQua2V5Q29kZT90LmtleUNvZGU6dC53aGljaCxzPVwib25cIjtpZihcInhcIiE9PWkuYXhpcyYmKDM4PT09bHx8NDA9PT1sKXx8XCJ5XCIhPT1pLmF4aXMmJigzNz09PWx8fDM5PT09bCkpe2lmKCgzOD09PWx8fDQwPT09bCkmJiFuLm92ZXJmbG93ZWRbMF18fCgzNz09PWx8fDM5PT09bCkmJiFuLm92ZXJmbG93ZWRbMV0pcmV0dXJuO1wia2V5dXBcIj09PXQudHlwZSYmKHM9XCJvZmZcIiksZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5pcyh1KXx8KHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLGEocyxsKSl9ZWxzZSBpZigzMz09PWx8fDM0PT09bCl7aWYoKG4ub3ZlcmZsb3dlZFswXXx8bi5vdmVyZmxvd2VkWzFdKSYmKHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpKSxcImtleXVwXCI9PT10LnR5cGUpe1Eobyk7dmFyIGY9MzQ9PT1sPy0xOjE7aWYoXCJ4XCI9PT1pLmF4aXN8fFwieXhcIj09PWkuYXhpcyYmbi5vdmVyZmxvd2VkWzFdJiYhbi5vdmVyZmxvd2VkWzBdKXZhciBoPVwieFwiLG09TWF0aC5hYnMoY1swXS5vZmZzZXRMZWZ0KS1mKiguOSpkLndpZHRoKCkpO2Vsc2UgdmFyIGg9XCJ5XCIsbT1NYXRoLmFicyhjWzBdLm9mZnNldFRvcCktZiooLjkqZC5oZWlnaHQoKSk7RyhvLG0udG9TdHJpbmcoKSx7ZGlyOmgsc2Nyb2xsRWFzaW5nOlwibWNzRWFzZUluT3V0XCJ9KX19ZWxzZSBpZigoMzU9PT1sfHwzNj09PWwpJiYhZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5pcyh1KSYmKChuLm92ZXJmbG93ZWRbMF18fG4ub3ZlcmZsb3dlZFsxXSkmJih0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSksXCJrZXl1cFwiPT09dC50eXBlKSl7aWYoXCJ4XCI9PT1pLmF4aXN8fFwieXhcIj09PWkuYXhpcyYmbi5vdmVyZmxvd2VkWzFdJiYhbi5vdmVyZmxvd2VkWzBdKXZhciBoPVwieFwiLG09MzU9PT1sP01hdGguYWJzKGQud2lkdGgoKS1jLm91dGVyV2lkdGgoITEpKTowO2Vsc2UgdmFyIGg9XCJ5XCIsbT0zNT09PWw/TWF0aC5hYnMoZC5oZWlnaHQoKS1jLm91dGVySGVpZ2h0KCExKSk6MDtHKG8sbS50b1N0cmluZygpLHtkaXI6aCxzY3JvbGxFYXNpbmc6XCJtY3NFYXNlSW5PdXRcIn0pfX19dmFyIG89ZSh0aGlzKSxuPW8uZGF0YShhKSxpPW4ub3B0LHI9bi5zZXF1ZW50aWFsLGw9YStcIl9cIituLmlkeCxzPWUoXCIjbUNTQl9cIituLmlkeCksYz1lKFwiI21DU0JfXCIrbi5pZHgrXCJfY29udGFpbmVyXCIpLGQ9Yy5wYXJlbnQoKSx1PVwiaW5wdXQsdGV4dGFyZWEsc2VsZWN0LGRhdGFsaXN0LGtleWdlbixbY29udGVudGVkaXRhYmxlPSd0cnVlJ11cIixmPWMuZmluZChcImlmcmFtZVwiKSxoPVtcImJsdXIuXCIrbCtcIiBrZXlkb3duLlwiK2wrXCIga2V5dXAuXCIrbF07Zi5sZW5ndGgmJmYuZWFjaChmdW5jdGlvbigpe2UodGhpcykuYmluZChcImxvYWRcIixmdW5jdGlvbigpe0EodGhpcykmJmUodGhpcy5jb250ZW50RG9jdW1lbnR8fHRoaXMuY29udGVudFdpbmRvdy5kb2N1bWVudCkuYmluZChoWzBdLGZ1bmN0aW9uKGUpe3QoZSl9KX0pfSkscy5hdHRyKFwidGFiaW5kZXhcIixcIjBcIikuYmluZChoWzBdLGZ1bmN0aW9uKGUpe3QoZSl9KX0saj1mdW5jdGlvbih0LG8sbixpLHIpe2Z1bmN0aW9uIGwoZSl7dS5zbmFwQW1vdW50JiYoZi5zY3JvbGxBbW91bnQ9dS5zbmFwQW1vdW50IGluc3RhbmNlb2YgQXJyYXk/XCJ4XCI9PT1mLmRpclswXT91LnNuYXBBbW91bnRbMV06dS5zbmFwQW1vdW50WzBdOnUuc25hcEFtb3VudCk7dmFyIG89XCJzdGVwcGVkXCIhPT1mLnR5cGUsYT1yP3I6ZT9vP3AvMS41Omc6MWUzLzYwLG49ZT9vPzcuNTo0MDoyLjUscz1bTWF0aC5hYnMoaFswXS5vZmZzZXRUb3ApLE1hdGguYWJzKGhbMF0ub2Zmc2V0TGVmdCldLGQ9W2Muc2Nyb2xsUmF0aW8ueT4xMD8xMDpjLnNjcm9sbFJhdGlvLnksYy5zY3JvbGxSYXRpby54PjEwPzEwOmMuc2Nyb2xsUmF0aW8ueF0sbT1cInhcIj09PWYuZGlyWzBdP3NbMV0rZi5kaXJbMV0qKGRbMV0qbik6c1swXStmLmRpclsxXSooZFswXSpuKSx2PVwieFwiPT09Zi5kaXJbMF0/c1sxXStmLmRpclsxXSpwYXJzZUludChmLnNjcm9sbEFtb3VudCk6c1swXStmLmRpclsxXSpwYXJzZUludChmLnNjcm9sbEFtb3VudCkseD1cImF1dG9cIiE9PWYuc2Nyb2xsQW1vdW50P3Y6bSxfPWk/aTplP28/XCJtY3NMaW5lYXJPdXRcIjpcIm1jc0Vhc2VJbk91dFwiOlwibWNzTGluZWFyXCIsdz0hIWU7cmV0dXJuIGUmJjE3PmEmJih4PVwieFwiPT09Zi5kaXJbMF0/c1sxXTpzWzBdKSxHKHQseC50b1N0cmluZygpLHtkaXI6Zi5kaXJbMF0sc2Nyb2xsRWFzaW5nOl8sZHVyOmEsb25Db21wbGV0ZTp3fSksZT92b2lkKGYuZGlyPSExKTooY2xlYXJUaW1lb3V0KGYuc3RlcCksdm9pZChmLnN0ZXA9c2V0VGltZW91dChmdW5jdGlvbigpe2woKX0sYSkpKX1mdW5jdGlvbiBzKCl7Y2xlYXJUaW1lb3V0KGYuc3RlcCksJChmLFwic3RlcFwiKSxRKHQpfXZhciBjPXQuZGF0YShhKSx1PWMub3B0LGY9Yy5zZXF1ZW50aWFsLGg9ZShcIiNtQ1NCX1wiK2MuaWR4K1wiX2NvbnRhaW5lclwiKSxtPVwic3RlcHBlZFwiPT09Zi50eXBlLHA9dS5zY3JvbGxJbmVydGlhPDI2PzI2OnUuc2Nyb2xsSW5lcnRpYSxnPXUuc2Nyb2xsSW5lcnRpYTwxPzE3OnUuc2Nyb2xsSW5lcnRpYTtzd2l0Y2gobyl7Y2FzZVwib25cIjppZihmLmRpcj1bbj09PWRbMTZdfHxuPT09ZFsxNV18fDM5PT09bnx8Mzc9PT1uP1wieFwiOlwieVwiLG49PT1kWzEzXXx8bj09PWRbMTVdfHwzOD09PW58fDM3PT09bj8tMToxXSxRKHQpLG9lKG4pJiZcInN0ZXBwZWRcIj09PWYudHlwZSlyZXR1cm47bChtKTticmVhaztjYXNlXCJvZmZcIjpzKCksKG18fGMudHdlZW5SdW5uaW5nJiZmLmRpcikmJmwoITApfX0sWT1mdW5jdGlvbih0KXt2YXIgbz1lKHRoaXMpLmRhdGEoYSkub3B0LG49W107cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmKHQ9dCgpKSx0IGluc3RhbmNlb2YgQXJyYXk/bj10Lmxlbmd0aD4xP1t0WzBdLHRbMV1dOlwieFwiPT09by5heGlzP1tudWxsLHRbMF1dOlt0WzBdLG51bGxdOihuWzBdPXQueT90Lnk6dC54fHxcInhcIj09PW8uYXhpcz9udWxsOnQsblsxXT10Lng/dC54OnQueXx8XCJ5XCI9PT1vLmF4aXM/bnVsbDp0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuWzBdJiYoblswXT1uWzBdKCkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG5bMV0mJihuWzFdPW5bMV0oKSksbn0sWD1mdW5jdGlvbih0LG8pe2lmKG51bGwhPXQmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0KXt2YXIgbj1lKHRoaXMpLGk9bi5kYXRhKGEpLHI9aS5vcHQsbD1lKFwiI21DU0JfXCIraS5pZHgrXCJfY29udGFpbmVyXCIpLHM9bC5wYXJlbnQoKSxjPXR5cGVvZiB0O298fChvPVwieFwiPT09ci5heGlzP1wieFwiOlwieVwiKTt2YXIgZD1cInhcIj09PW8/bC5vdXRlcldpZHRoKCExKS1zLndpZHRoKCk6bC5vdXRlckhlaWdodCghMSktcy5oZWlnaHQoKSxmPVwieFwiPT09bz9sWzBdLm9mZnNldExlZnQ6bFswXS5vZmZzZXRUb3AsaD1cInhcIj09PW8/XCJsZWZ0XCI6XCJ0b3BcIjtzd2l0Y2goYyl7Y2FzZVwiZnVuY3Rpb25cIjpyZXR1cm4gdCgpO2Nhc2VcIm9iamVjdFwiOnZhciBtPXQuanF1ZXJ5P3Q6ZSh0KTtpZighbS5sZW5ndGgpcmV0dXJuO3JldHVyblwieFwiPT09bz9hZShtKVsxXTphZShtKVswXTtjYXNlXCJzdHJpbmdcIjpjYXNlXCJudW1iZXJcIjppZihvZSh0KSlyZXR1cm4gTWF0aC5hYnModCk7aWYoLTEhPT10LmluZGV4T2YoXCIlXCIpKXJldHVybiBNYXRoLmFicyhkKnBhcnNlSW50KHQpLzEwMCk7aWYoLTEhPT10LmluZGV4T2YoXCItPVwiKSlyZXR1cm4gTWF0aC5hYnMoZi1wYXJzZUludCh0LnNwbGl0KFwiLT1cIilbMV0pKTtpZigtMSE9PXQuaW5kZXhPZihcIis9XCIpKXt2YXIgcD1mK3BhcnNlSW50KHQuc3BsaXQoXCIrPVwiKVsxXSk7cmV0dXJuIHA+PTA/MDpNYXRoLmFicyhwKX1pZigtMSE9PXQuaW5kZXhPZihcInB4XCIpJiZvZSh0LnNwbGl0KFwicHhcIilbMF0pKXJldHVybiBNYXRoLmFicyh0LnNwbGl0KFwicHhcIilbMF0pO2lmKFwidG9wXCI9PT10fHxcImxlZnRcIj09PXQpcmV0dXJuIDA7aWYoXCJib3R0b21cIj09PXQpcmV0dXJuIE1hdGguYWJzKHMuaGVpZ2h0KCktbC5vdXRlckhlaWdodCghMSkpO2lmKFwicmlnaHRcIj09PXQpcmV0dXJuIE1hdGguYWJzKHMud2lkdGgoKS1sLm91dGVyV2lkdGgoITEpKTtpZihcImZpcnN0XCI9PT10fHxcImxhc3RcIj09PXQpe3ZhciBtPWwuZmluZChcIjpcIit0KTtyZXR1cm5cInhcIj09PW8/YWUobSlbMV06YWUobSlbMF19cmV0dXJuIGUodCkubGVuZ3RoP1wieFwiPT09bz9hZShlKHQpKVsxXTphZShlKHQpKVswXToobC5jc3MoaCx0KSx2b2lkIHUudXBkYXRlLmNhbGwobnVsbCxuWzBdKSl9fX0sTj1mdW5jdGlvbih0KXtmdW5jdGlvbiBvKCl7cmV0dXJuIGNsZWFyVGltZW91dChmWzBdLmF1dG9VcGRhdGUpLDA9PT1sLnBhcmVudHMoXCJodG1sXCIpLmxlbmd0aD92b2lkKGw9bnVsbCk6dm9pZChmWzBdLmF1dG9VcGRhdGU9c2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBjLmFkdmFuY2VkLnVwZGF0ZU9uU2VsZWN0b3JDaGFuZ2UmJihzLnBvbGwuY2hhbmdlLm49aSgpLHMucG9sbC5jaGFuZ2UubiE9PXMucG9sbC5jaGFuZ2Uubyk/KHMucG9sbC5jaGFuZ2Uubz1zLnBvbGwuY2hhbmdlLm4sdm9pZCByKDMpKTpjLmFkdmFuY2VkLnVwZGF0ZU9uQ29udGVudFJlc2l6ZSYmKHMucG9sbC5zaXplLm49bFswXS5zY3JvbGxIZWlnaHQrbFswXS5zY3JvbGxXaWR0aCtmWzBdLm9mZnNldEhlaWdodCtsWzBdLm9mZnNldEhlaWdodCtsWzBdLm9mZnNldFdpZHRoLHMucG9sbC5zaXplLm4hPT1zLnBvbGwuc2l6ZS5vKT8ocy5wb2xsLnNpemUubz1zLnBvbGwuc2l6ZS5uLHZvaWQgcigxKSk6IWMuYWR2YW5jZWQudXBkYXRlT25JbWFnZUxvYWR8fFwiYXV0b1wiPT09Yy5hZHZhbmNlZC51cGRhdGVPbkltYWdlTG9hZCYmXCJ5XCI9PT1jLmF4aXN8fChzLnBvbGwuaW1nLm49Zi5maW5kKFwiaW1nXCIpLmxlbmd0aCxzLnBvbGwuaW1nLm49PT1zLnBvbGwuaW1nLm8pP3ZvaWQoKGMuYWR2YW5jZWQudXBkYXRlT25TZWxlY3RvckNoYW5nZXx8Yy5hZHZhbmNlZC51cGRhdGVPbkNvbnRlbnRSZXNpemV8fGMuYWR2YW5jZWQudXBkYXRlT25JbWFnZUxvYWQpJiZvKCkpOihzLnBvbGwuaW1nLm89cy5wb2xsLmltZy5uLHZvaWQgZi5maW5kKFwiaW1nXCIpLmVhY2goZnVuY3Rpb24oKXtuKHRoaXMpfSkpfSxjLmFkdmFuY2VkLmF1dG9VcGRhdGVUaW1lb3V0KSl9ZnVuY3Rpb24gbih0KXtmdW5jdGlvbiBvKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7XG5yZXR1cm4gdC5hcHBseShlLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGEoKXt0aGlzLm9ubG9hZD1udWxsLGUodCkuYWRkQ2xhc3MoZFsyXSkscigyKX1pZihlKHQpLmhhc0NsYXNzKGRbMl0pKXJldHVybiB2b2lkIHIoKTt2YXIgbj1uZXcgSW1hZ2U7bi5vbmxvYWQ9byhuLGEpLG4uc3JjPXQuc3JjfWZ1bmN0aW9uIGkoKXtjLmFkdmFuY2VkLnVwZGF0ZU9uU2VsZWN0b3JDaGFuZ2U9PT0hMCYmKGMuYWR2YW5jZWQudXBkYXRlT25TZWxlY3RvckNoYW5nZT1cIipcIik7dmFyIGU9MCx0PWYuZmluZChjLmFkdmFuY2VkLnVwZGF0ZU9uU2VsZWN0b3JDaGFuZ2UpO3JldHVybiBjLmFkdmFuY2VkLnVwZGF0ZU9uU2VsZWN0b3JDaGFuZ2UmJnQubGVuZ3RoPjAmJnQuZWFjaChmdW5jdGlvbigpe2UrPXRoaXMub2Zmc2V0SGVpZ2h0K3RoaXMub2Zmc2V0V2lkdGh9KSxlfWZ1bmN0aW9uIHIoZSl7Y2xlYXJUaW1lb3V0KGZbMF0uYXV0b1VwZGF0ZSksdS51cGRhdGUuY2FsbChudWxsLGxbMF0sZSl9dmFyIGw9ZSh0aGlzKSxzPWwuZGF0YShhKSxjPXMub3B0LGY9ZShcIiNtQ1NCX1wiK3MuaWR4K1wiX2NvbnRhaW5lclwiKTtyZXR1cm4gdD8oY2xlYXJUaW1lb3V0KGZbMF0uYXV0b1VwZGF0ZSksdm9pZCAkKGZbMF0sXCJhdXRvVXBkYXRlXCIpKTp2b2lkIG8oKX0sVj1mdW5jdGlvbihlLHQsbyl7cmV0dXJuIE1hdGgucm91bmQoZS90KSp0LW99LFE9ZnVuY3Rpb24odCl7dmFyIG89dC5kYXRhKGEpLG49ZShcIiNtQ1NCX1wiK28uaWR4K1wiX2NvbnRhaW5lciwjbUNTQl9cIitvLmlkeCtcIl9jb250YWluZXJfd3JhcHBlciwjbUNTQl9cIitvLmlkeCtcIl9kcmFnZ2VyX3ZlcnRpY2FsLCNtQ1NCX1wiK28uaWR4K1wiX2RyYWdnZXJfaG9yaXpvbnRhbFwiKTtuLmVhY2goZnVuY3Rpb24oKXtaLmNhbGwodGhpcyl9KX0sRz1mdW5jdGlvbih0LG8sbil7ZnVuY3Rpb24gaShlKXtyZXR1cm4gcyYmYy5jYWxsYmFja3NbZV0mJlwiZnVuY3Rpb25cIj09dHlwZW9mIGMuY2FsbGJhY2tzW2VdfWZ1bmN0aW9uIHIoKXtyZXR1cm5bYy5jYWxsYmFja3MuYWx3YXlzVHJpZ2dlck9mZnNldHN8fHc+PVNbMF0reSxjLmNhbGxiYWNrcy5hbHdheXNUcmlnZ2VyT2Zmc2V0c3x8LUI+PXddfWZ1bmN0aW9uIGwoKXt2YXIgZT1baFswXS5vZmZzZXRUb3AsaFswXS5vZmZzZXRMZWZ0XSxvPVt4WzBdLm9mZnNldFRvcCx4WzBdLm9mZnNldExlZnRdLGE9W2gub3V0ZXJIZWlnaHQoITEpLGgub3V0ZXJXaWR0aCghMSldLGk9W2YuaGVpZ2h0KCksZi53aWR0aCgpXTt0WzBdLm1jcz17Y29udGVudDpoLHRvcDplWzBdLGxlZnQ6ZVsxXSxkcmFnZ2VyVG9wOm9bMF0sZHJhZ2dlckxlZnQ6b1sxXSx0b3BQY3Q6TWF0aC5yb3VuZCgxMDAqTWF0aC5hYnMoZVswXSkvKE1hdGguYWJzKGFbMF0pLWlbMF0pKSxsZWZ0UGN0Ok1hdGgucm91bmQoMTAwKk1hdGguYWJzKGVbMV0pLyhNYXRoLmFicyhhWzFdKS1pWzFdKSksZGlyZWN0aW9uOm4uZGlyfX12YXIgcz10LmRhdGEoYSksYz1zLm9wdCxkPXt0cmlnZ2VyOlwiaW50ZXJuYWxcIixkaXI6XCJ5XCIsc2Nyb2xsRWFzaW5nOlwibWNzRWFzZU91dFwiLGRyYWc6ITEsZHVyOmMuc2Nyb2xsSW5lcnRpYSxvdmVyd3JpdGU6XCJhbGxcIixjYWxsYmFja3M6ITAsb25TdGFydDohMCxvblVwZGF0ZTohMCxvbkNvbXBsZXRlOiEwfSxuPWUuZXh0ZW5kKGQsbiksdT1bbi5kdXIsbi5kcmFnPzA6bi5kdXJdLGY9ZShcIiNtQ1NCX1wiK3MuaWR4KSxoPWUoXCIjbUNTQl9cIitzLmlkeCtcIl9jb250YWluZXJcIiksbT1oLnBhcmVudCgpLHA9Yy5jYWxsYmFja3Mub25Ub3RhbFNjcm9sbE9mZnNldD9ZLmNhbGwodCxjLmNhbGxiYWNrcy5vblRvdGFsU2Nyb2xsT2Zmc2V0KTpbMCwwXSxnPWMuY2FsbGJhY2tzLm9uVG90YWxTY3JvbGxCYWNrT2Zmc2V0P1kuY2FsbCh0LGMuY2FsbGJhY2tzLm9uVG90YWxTY3JvbGxCYWNrT2Zmc2V0KTpbMCwwXTtpZihzLnRyaWdnZXI9bi50cmlnZ2VyLDA9PT1tLnNjcm9sbFRvcCgpJiYwPT09bS5zY3JvbGxMZWZ0KCl8fChlKFwiLm1DU0JfXCIrcy5pZHgrXCJfc2Nyb2xsYmFyXCIpLmNzcyhcInZpc2liaWxpdHlcIixcInZpc2libGVcIiksbS5zY3JvbGxUb3AoMCkuc2Nyb2xsTGVmdCgwKSksXCJfcmVzZXRZXCIhPT1vfHxzLmNvbnRlbnRSZXNldC55fHwoaShcIm9uT3ZlcmZsb3dZTm9uZVwiKSYmYy5jYWxsYmFja3Mub25PdmVyZmxvd1lOb25lLmNhbGwodFswXSkscy5jb250ZW50UmVzZXQueT0xKSxcIl9yZXNldFhcIiE9PW98fHMuY29udGVudFJlc2V0Lnh8fChpKFwib25PdmVyZmxvd1hOb25lXCIpJiZjLmNhbGxiYWNrcy5vbk92ZXJmbG93WE5vbmUuY2FsbCh0WzBdKSxzLmNvbnRlbnRSZXNldC54PTEpLFwiX3Jlc2V0WVwiIT09byYmXCJfcmVzZXRYXCIhPT1vKXtpZighcy5jb250ZW50UmVzZXQueSYmdFswXS5tY3N8fCFzLm92ZXJmbG93ZWRbMF18fChpKFwib25PdmVyZmxvd1lcIikmJmMuY2FsbGJhY2tzLm9uT3ZlcmZsb3dZLmNhbGwodFswXSkscy5jb250ZW50UmVzZXQueD1udWxsKSwhcy5jb250ZW50UmVzZXQueCYmdFswXS5tY3N8fCFzLm92ZXJmbG93ZWRbMV18fChpKFwib25PdmVyZmxvd1hcIikmJmMuY2FsbGJhY2tzLm9uT3ZlcmZsb3dYLmNhbGwodFswXSkscy5jb250ZW50UmVzZXQueD1udWxsKSxjLnNuYXBBbW91bnQpe3ZhciB2PWMuc25hcEFtb3VudCBpbnN0YW5jZW9mIEFycmF5P1wieFwiPT09bi5kaXI/Yy5zbmFwQW1vdW50WzFdOmMuc25hcEFtb3VudFswXTpjLnNuYXBBbW91bnQ7bz1WKG8sdixjLnNuYXBPZmZzZXQpfXN3aXRjaChuLmRpcil7Y2FzZVwieFwiOnZhciB4PWUoXCIjbUNTQl9cIitzLmlkeCtcIl9kcmFnZ2VyX2hvcml6b250YWxcIiksXz1cImxlZnRcIix3PWhbMF0ub2Zmc2V0TGVmdCxTPVtmLndpZHRoKCktaC5vdXRlcldpZHRoKCExKSx4LnBhcmVudCgpLndpZHRoKCkteC53aWR0aCgpXSxiPVtvLDA9PT1vPzA6by9zLnNjcm9sbFJhdGlvLnhdLHk9cFsxXSxCPWdbMV0sVD15PjA/eS9zLnNjcm9sbFJhdGlvLng6MCxrPUI+MD9CL3Muc2Nyb2xsUmF0aW8ueDowO2JyZWFrO2Nhc2VcInlcIjp2YXIgeD1lKFwiI21DU0JfXCIrcy5pZHgrXCJfZHJhZ2dlcl92ZXJ0aWNhbFwiKSxfPVwidG9wXCIsdz1oWzBdLm9mZnNldFRvcCxTPVtmLmhlaWdodCgpLWgub3V0ZXJIZWlnaHQoITEpLHgucGFyZW50KCkuaGVpZ2h0KCkteC5oZWlnaHQoKV0sYj1bbywwPT09bz8wOm8vcy5zY3JvbGxSYXRpby55XSx5PXBbMF0sQj1nWzBdLFQ9eT4wP3kvcy5zY3JvbGxSYXRpby55OjAsaz1CPjA/Qi9zLnNjcm9sbFJhdGlvLnk6MH1iWzFdPDB8fDA9PT1iWzBdJiYwPT09YlsxXT9iPVswLDBdOmJbMV0+PVNbMV0/Yj1bU1swXSxTWzFdXTpiWzBdPS1iWzBdLHRbMF0ubWNzfHwobCgpLGkoXCJvbkluaXRcIikmJmMuY2FsbGJhY2tzLm9uSW5pdC5jYWxsKHRbMF0pKSxjbGVhclRpbWVvdXQoaFswXS5vbkNvbXBsZXRlVGltZW91dCksSih4WzBdLF8sTWF0aC5yb3VuZChiWzFdKSx1WzFdLG4uc2Nyb2xsRWFzaW5nKSwhcy50d2VlblJ1bm5pbmcmJigwPT09dyYmYlswXT49MHx8dz09PVNbMF0mJmJbMF08PVNbMF0pfHxKKGhbMF0sXyxNYXRoLnJvdW5kKGJbMF0pLHVbMF0sbi5zY3JvbGxFYXNpbmcsbi5vdmVyd3JpdGUse29uU3RhcnQ6ZnVuY3Rpb24oKXtuLmNhbGxiYWNrcyYmbi5vblN0YXJ0JiYhcy50d2VlblJ1bm5pbmcmJihpKFwib25TY3JvbGxTdGFydFwiKSYmKGwoKSxjLmNhbGxiYWNrcy5vblNjcm9sbFN0YXJ0LmNhbGwodFswXSkpLHMudHdlZW5SdW5uaW5nPSEwLEMoeCkscy5jYk9mZnNldHM9cigpKX0sb25VcGRhdGU6ZnVuY3Rpb24oKXtuLmNhbGxiYWNrcyYmbi5vblVwZGF0ZSYmaShcIndoaWxlU2Nyb2xsaW5nXCIpJiYobCgpLGMuY2FsbGJhY2tzLndoaWxlU2Nyb2xsaW5nLmNhbGwodFswXSkpfSxvbkNvbXBsZXRlOmZ1bmN0aW9uKCl7aWYobi5jYWxsYmFja3MmJm4ub25Db21wbGV0ZSl7XCJ5eFwiPT09Yy5heGlzJiZjbGVhclRpbWVvdXQoaFswXS5vbkNvbXBsZXRlVGltZW91dCk7dmFyIGU9aFswXS5pZGxlVGltZXJ8fDA7aFswXS5vbkNvbXBsZXRlVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aShcIm9uU2Nyb2xsXCIpJiYobCgpLGMuY2FsbGJhY2tzLm9uU2Nyb2xsLmNhbGwodFswXSkpLGkoXCJvblRvdGFsU2Nyb2xsXCIpJiZiWzFdPj1TWzFdLVQmJnMuY2JPZmZzZXRzWzBdJiYobCgpLGMuY2FsbGJhY2tzLm9uVG90YWxTY3JvbGwuY2FsbCh0WzBdKSksaShcIm9uVG90YWxTY3JvbGxCYWNrXCIpJiZiWzFdPD1rJiZzLmNiT2Zmc2V0c1sxXSYmKGwoKSxjLmNhbGxiYWNrcy5vblRvdGFsU2Nyb2xsQmFjay5jYWxsKHRbMF0pKSxzLnR3ZWVuUnVubmluZz0hMSxoWzBdLmlkbGVUaW1lcj0wLEMoeCxcImhpZGVcIil9LGUpfX19KX19LEo9ZnVuY3Rpb24oZSx0LG8sYSxuLGkscil7ZnVuY3Rpb24gbCgpe1Muc3RvcHx8KHh8fG0uY2FsbCgpLHg9SygpLXYscygpLHg+PVMudGltZSYmKFMudGltZT14PlMudGltZT94K2YtKHgtUy50aW1lKTp4K2YtMSxTLnRpbWU8eCsxJiYoUy50aW1lPXgrMSkpLFMudGltZTxhP1MuaWQ9aChsKTpnLmNhbGwoKSl9ZnVuY3Rpb24gcygpe2E+MD8oUy5jdXJyVmFsPXUoUy50aW1lLF8sYixhLG4pLHdbdF09TWF0aC5yb3VuZChTLmN1cnJWYWwpK1wicHhcIik6d1t0XT1vK1wicHhcIixwLmNhbGwoKX1mdW5jdGlvbiBjKCl7Zj0xZTMvNjAsUy50aW1lPXgrZixoPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTpmdW5jdGlvbihlKXtyZXR1cm4gcygpLHNldFRpbWVvdXQoZSwuMDEpfSxTLmlkPWgobCl9ZnVuY3Rpb24gZCgpe251bGwhPVMuaWQmJih3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lP3dpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShTLmlkKTpjbGVhclRpbWVvdXQoUy5pZCksUy5pZD1udWxsKX1mdW5jdGlvbiB1KGUsdCxvLGEsbil7c3dpdGNoKG4pe2Nhc2VcImxpbmVhclwiOmNhc2VcIm1jc0xpbmVhclwiOnJldHVybiBvKmUvYSt0O2Nhc2VcIm1jc0xpbmVhck91dFwiOnJldHVybiBlLz1hLGUtLSxvKk1hdGguc3FydCgxLWUqZSkrdDtjYXNlXCJlYXNlSW5PdXRTbW9vdGhcIjpyZXR1cm4gZS89YS8yLDE+ZT9vLzIqZSplK3Q6KGUtLSwtby8yKihlKihlLTIpLTEpK3QpO2Nhc2VcImVhc2VJbk91dFN0cm9uZ1wiOnJldHVybiBlLz1hLzIsMT5lP28vMipNYXRoLnBvdygyLDEwKihlLTEpKSt0OihlLS0sby8yKigtTWF0aC5wb3coMiwtMTAqZSkrMikrdCk7Y2FzZVwiZWFzZUluT3V0XCI6Y2FzZVwibWNzRWFzZUluT3V0XCI6cmV0dXJuIGUvPWEvMiwxPmU/by8yKmUqZSplK3Q6KGUtPTIsby8yKihlKmUqZSsyKSt0KTtjYXNlXCJlYXNlT3V0U21vb3RoXCI6cmV0dXJuIGUvPWEsZS0tLC1vKihlKmUqZSplLTEpK3Q7Y2FzZVwiZWFzZU91dFN0cm9uZ1wiOnJldHVybiBvKigtTWF0aC5wb3coMiwtMTAqZS9hKSsxKSt0O2Nhc2VcImVhc2VPdXRcIjpjYXNlXCJtY3NFYXNlT3V0XCI6ZGVmYXVsdDp2YXIgaT0oZS89YSkqZSxyPWkqZTtyZXR1cm4gdCtvKiguNDk5OTk5OTk5OTk5OTk3KnIqaSstMi41KmkqaSs1LjUqcistNi41KmkrNCplKX19ZS5fbVR3ZWVufHwoZS5fbVR3ZWVuPXt0b3A6e30sbGVmdDp7fX0pO3ZhciBmLGgscj1yfHx7fSxtPXIub25TdGFydHx8ZnVuY3Rpb24oKXt9LHA9ci5vblVwZGF0ZXx8ZnVuY3Rpb24oKXt9LGc9ci5vbkNvbXBsZXRlfHxmdW5jdGlvbigpe30sdj1LKCkseD0wLF89ZS5vZmZzZXRUb3Asdz1lLnN0eWxlLFM9ZS5fbVR3ZWVuW3RdO1wibGVmdFwiPT09dCYmKF89ZS5vZmZzZXRMZWZ0KTt2YXIgYj1vLV87Uy5zdG9wPTAsXCJub25lXCIhPT1pJiZkKCksYygpfSxLPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZSYmd2luZG93LnBlcmZvcm1hbmNlLm5vdz93aW5kb3cucGVyZm9ybWFuY2Uubm93KCk6d2luZG93LnBlcmZvcm1hbmNlJiZ3aW5kb3cucGVyZm9ybWFuY2Uud2Via2l0Tm93P3dpbmRvdy5wZXJmb3JtYW5jZS53ZWJraXROb3coKTpEYXRlLm5vdz9EYXRlLm5vdygpOihuZXcgRGF0ZSkuZ2V0VGltZSgpfSxaPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl9tVHdlZW58fChlLl9tVHdlZW49e3RvcDp7fSxsZWZ0Ont9fSk7Zm9yKHZhciB0PVtcInRvcFwiLFwibGVmdFwiXSxvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBhPXRbb107ZS5fbVR3ZWVuW2FdLmlkJiYod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoZS5fbVR3ZWVuW2FdLmlkKTpjbGVhclRpbWVvdXQoZS5fbVR3ZWVuW2FdLmlkKSxlLl9tVHdlZW5bYV0uaWQ9bnVsbCxlLl9tVHdlZW5bYV0uc3RvcD0xKX19LCQ9ZnVuY3Rpb24oZSx0KXt0cnl7ZGVsZXRlIGVbdF19Y2F0Y2gobyl7ZVt0XT1udWxsfX0sZWU9ZnVuY3Rpb24oZSl7cmV0dXJuIShlLndoaWNoJiYxIT09ZS53aGljaCl9LHRlPWZ1bmN0aW9uKGUpe3ZhciB0PWUub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZTtyZXR1cm4hKHQmJlwidG91Y2hcIiE9PXQmJjIhPT10KX0sb2U9ZnVuY3Rpb24oZSl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQoZSkpJiZpc0Zpbml0ZShlKX0sYWU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnRzKFwiLm1DU0JfY29udGFpbmVyXCIpO3JldHVybltlLm9mZnNldCgpLnRvcC10Lm9mZnNldCgpLnRvcCxlLm9mZnNldCgpLmxlZnQtdC5vZmZzZXQoKS5sZWZ0XX0sbmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdO2lmKFwiaGlkZGVuXCJpbiBkb2N1bWVudClyZXR1cm5cImhpZGRlblwiO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWlmKGVbdF0rXCJIaWRkZW5cImluIGRvY3VtZW50KXJldHVybiBlW3RdK1wiSGlkZGVuXCI7cmV0dXJuIG51bGx9dmFyIHQ9ZSgpO3JldHVybiB0P2RvY3VtZW50W3RdOiExfTtlLmZuW29dPWZ1bmN0aW9uKHQpe3JldHVybiB1W3RdP3VbdF0uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpOlwib2JqZWN0XCIhPXR5cGVvZiB0JiZ0P3ZvaWQgZS5lcnJvcihcIk1ldGhvZCBcIit0K1wiIGRvZXMgbm90IGV4aXN0XCIpOnUuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGVbb109ZnVuY3Rpb24odCl7cmV0dXJuIHVbdF0/dVt0XS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIHQmJnQ/dm9pZCBlLmVycm9yKFwiTWV0aG9kIFwiK3QrXCIgZG9lcyBub3QgZXhpc3RcIik6dS5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZVtvXS5kZWZhdWx0cz1pLHdpbmRvd1tvXT0hMCxlKHdpbmRvdykuYmluZChcImxvYWRcIixmdW5jdGlvbigpe2Uobilbb10oKSxlLmV4dGVuZChlLmV4cHJbXCI6XCJdLHttY3NJblZpZXc6ZS5leHByW1wiOlwiXS5tY3NJblZpZXd8fGZ1bmN0aW9uKHQpe3ZhciBvLGEsbj1lKHQpLGk9bi5wYXJlbnRzKFwiLm1DU0JfY29udGFpbmVyXCIpO2lmKGkubGVuZ3RoKXJldHVybiBvPWkucGFyZW50KCksYT1baVswXS5vZmZzZXRUb3AsaVswXS5vZmZzZXRMZWZ0XSxhWzBdK2FlKG4pWzBdPj0wJiZhWzBdK2FlKG4pWzBdPG8uaGVpZ2h0KCktbi5vdXRlckhlaWdodCghMSkmJmFbMV0rYWUobilbMV0+PTAmJmFbMV0rYWUobilbMV08by53aWR0aCgpLW4ub3V0ZXJXaWR0aCghMSl9LG1jc0luU2lnaHQ6ZS5leHByW1wiOlwiXS5tY3NJblNpZ2h0fHxmdW5jdGlvbih0LG8sYSl7dmFyIG4saSxyLGwscz1lKHQpLGM9cy5wYXJlbnRzKFwiLm1DU0JfY29udGFpbmVyXCIpLGQ9XCJleGFjdFwiPT09YVszXT9bWzEsMF0sWzEsMF1dOltbLjksLjFdLFsuNiwuNF1dO2lmKGMubGVuZ3RoKXJldHVybiBuPVtzLm91dGVySGVpZ2h0KCExKSxzLm91dGVyV2lkdGgoITEpXSxyPVtjWzBdLm9mZnNldFRvcCthZShzKVswXSxjWzBdLm9mZnNldExlZnQrYWUocylbMV1dLGk9W2MucGFyZW50KClbMF0ub2Zmc2V0SGVpZ2h0LGMucGFyZW50KClbMF0ub2Zmc2V0V2lkdGhdLGw9W25bMF08aVswXT9kWzBdOmRbMV0sblsxXTxpWzFdP2RbMF06ZFsxXV0sclswXS1pWzBdKmxbMF1bMF08MCYmclswXStuWzBdLWlbMF0qbFswXVsxXT49MCYmclsxXS1pWzFdKmxbMV1bMF08MCYmclsxXStuWzFdLWlbMV0qbFsxXVsxXT49MH0sbWNzT3ZlcmZsb3c6ZS5leHByW1wiOlwiXS5tY3NPdmVyZmxvd3x8ZnVuY3Rpb24odCl7dmFyIG89ZSh0KS5kYXRhKGEpO2lmKG8pcmV0dXJuIG8ub3ZlcmZsb3dlZFswXXx8by5vdmVyZmxvd2VkWzFdfX0pfSl9KX0pOyIsIi8qIVxuICogUHJvZ3Jlc3NCYXJcbiAqIFZlcnNpb246IDEuMC4xXG4gKiBXZWJzaXRlOiBodHRwczovL2tpbW1vYnJ1bmZlbGR0LmdpdGh1Yi5pby9wcm9ncmVzc2Jhci5qc1xuICovXG4hZnVuY3Rpb24oYSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9YSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxhKTtlbHNle3ZhciBiO2I9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLGIuUHJvZ3Jlc3NCYXI9YSgpfX0oZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gZnVuY3Rpb24gYihhLGMsZCl7ZnVuY3Rpb24gZShnLGgpe2lmKCFjW2ddKXtpZighYVtnXSl7dmFyIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighaCYmaSlyZXR1cm4gaShnLCEwKTtpZihmKXJldHVybiBmKGcsITApO3ZhciBqPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrZytcIidcIik7dGhyb3cgai5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGp9dmFyIGs9Y1tnXT17ZXhwb3J0czp7fX07YVtnXVswXS5jYWxsKGsuZXhwb3J0cyxmdW5jdGlvbihiKXt2YXIgYz1hW2ddWzFdW2JdO3JldHVybiBlKGM/YzpiKX0sayxrLmV4cG9ydHMsYixhLGMsZCl9cmV0dXJuIGNbZ10uZXhwb3J0c31mb3IodmFyIGY9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxnPTA7ZzxkLmxlbmd0aDtnKyspZShkW2ddKTtyZXR1cm4gZX0oezE6W2Z1bmN0aW9uKGIsYyxkKXsoZnVuY3Rpb24oKXt2YXIgYj10aGlzfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksZT1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoKXt9ZnVuY3Rpb24gZihhLGIpe3ZhciBjO2ZvcihjIGluIGEpT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoYSxjKSYmYihjKX1mdW5jdGlvbiBnKGEsYil7cmV0dXJuIGYoYixmdW5jdGlvbihjKXthW2NdPWJbY119KSxhfWZ1bmN0aW9uIGgoYSxiKXtmKGIsZnVuY3Rpb24oYyl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIGFbY10mJihhW2NdPWJbY10pfSl9ZnVuY3Rpb24gaShhLGIsYyxkLGUsZixnKXt2YXIgaCxpLGssbD1mPmE/MDooYS1mKS9lO2ZvcihoIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShoKSYmKGk9Z1toXSxrPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aTpvW2ldLGJbaF09aihjW2hdLGRbaF0sayxsKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gaihhLGIsYyxkKXtyZXR1cm4gYSsoYi1hKSpjKGQpfWZ1bmN0aW9uIGsoYSxiKXt2YXIgYz1uLnByb3RvdHlwZS5maWx0ZXIsZD1hLl9maWx0ZXJBcmdzO2YoYyxmdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgY1tlXVtiXSYmY1tlXVtiXS5hcHBseShhLGQpfSl9ZnVuY3Rpb24gbChhLGIsYyxkLGUsZixnLGgsaixsLG0pe3Y9YitjK2Qsdz1NYXRoLm1pbihtfHx1KCksdikseD13Pj12LHk9ZC0odi13KSxhLmlzUGxheWluZygpJiYoeD8oaihnLGEuX2F0dGFjaG1lbnQseSksYS5zdG9wKCEwKSk6KGEuX3NjaGVkdWxlSWQ9bChhLl90aW1lb3V0SGFuZGxlcixzKSxrKGEsXCJiZWZvcmVUd2VlblwiKSxiK2M+dz9pKDEsZSxmLGcsMSwxLGgpOmkodyxlLGYsZyxkLGIrYyxoKSxrKGEsXCJhZnRlclR3ZWVuXCIpLGooZSxhLl9hdHRhY2htZW50LHkpKSl9ZnVuY3Rpb24gbShhLGIpe3ZhciBjPXt9LGQ9dHlwZW9mIGI7cmV0dXJuXCJzdHJpbmdcIj09PWR8fFwiZnVuY3Rpb25cIj09PWQ/ZihhLGZ1bmN0aW9uKGEpe2NbYV09Yn0pOmYoYSxmdW5jdGlvbihhKXtjW2FdfHwoY1thXT1iW2FdfHxxKX0pLGN9ZnVuY3Rpb24gbihhLGIpe3RoaXMuX2N1cnJlbnRTdGF0ZT1hfHx7fSx0aGlzLl9jb25maWd1cmVkPSExLHRoaXMuX3NjaGVkdWxlRnVuY3Rpb249cCxcInVuZGVmaW5lZFwiIT10eXBlb2YgYiYmdGhpcy5zZXRDb25maWcoYil9dmFyIG8scCxxPVwibGluZWFyXCIscj01MDAscz0xZTMvNjAsdD1EYXRlLm5vdz9EYXRlLm5vdzpmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX0sdT1cInVuZGVmaW5lZFwiIT10eXBlb2YgU0hJRlRZX0RFQlVHX05PVz9TSElGVFlfREVCVUdfTk9XOnQ7cD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUmJndpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQ6c2V0VGltZW91dDt2YXIgdix3LHgseTtyZXR1cm4gbi5wcm90b3R5cGUudHdlZW49ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX2lzVHdlZW5pbmc/dGhpczoodm9pZCAwPT09YSYmdGhpcy5fY29uZmlndXJlZHx8dGhpcy5zZXRDb25maWcoYSksdGhpcy5fdGltZXN0YW1wPXUoKSx0aGlzLl9zdGFydCh0aGlzLmdldCgpLHRoaXMuX2F0dGFjaG1lbnQpLHRoaXMucmVzdW1lKCkpfSxuLnByb3RvdHlwZS5zZXRDb25maWc9ZnVuY3Rpb24oYSl7YT1hfHx7fSx0aGlzLl9jb25maWd1cmVkPSEwLHRoaXMuX2F0dGFjaG1lbnQ9YS5hdHRhY2htZW50LHRoaXMuX3BhdXNlZEF0VGltZT1udWxsLHRoaXMuX3NjaGVkdWxlSWQ9bnVsbCx0aGlzLl9kZWxheT1hLmRlbGF5fHwwLHRoaXMuX3N0YXJ0PWEuc3RhcnR8fGUsdGhpcy5fc3RlcD1hLnN0ZXB8fGUsdGhpcy5fZmluaXNoPWEuZmluaXNofHxlLHRoaXMuX2R1cmF0aW9uPWEuZHVyYXRpb258fHIsdGhpcy5fY3VycmVudFN0YXRlPWcoe30sYS5mcm9tKXx8dGhpcy5nZXQoKSx0aGlzLl9vcmlnaW5hbFN0YXRlPXRoaXMuZ2V0KCksdGhpcy5fdGFyZ2V0U3RhdGU9Zyh7fSxhLnRvKXx8dGhpcy5nZXQoKTt2YXIgYj10aGlzO3RoaXMuX3RpbWVvdXRIYW5kbGVyPWZ1bmN0aW9uKCl7bChiLGIuX3RpbWVzdGFtcCxiLl9kZWxheSxiLl9kdXJhdGlvbixiLl9jdXJyZW50U3RhdGUsYi5fb3JpZ2luYWxTdGF0ZSxiLl90YXJnZXRTdGF0ZSxiLl9lYXNpbmcsYi5fc3RlcCxiLl9zY2hlZHVsZUZ1bmN0aW9uKX07dmFyIGM9dGhpcy5fY3VycmVudFN0YXRlLGQ9dGhpcy5fdGFyZ2V0U3RhdGU7cmV0dXJuIGgoZCxjKSx0aGlzLl9lYXNpbmc9bShjLGEuZWFzaW5nfHxxKSx0aGlzLl9maWx0ZXJBcmdzPVtjLHRoaXMuX29yaWdpbmFsU3RhdGUsZCx0aGlzLl9lYXNpbmddLGsodGhpcyxcInR3ZWVuQ3JlYXRlZFwiKSx0aGlzfSxuLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gZyh7fSx0aGlzLl9jdXJyZW50U3RhdGUpfSxuLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSl7dGhpcy5fY3VycmVudFN0YXRlPWF9LG4ucHJvdG90eXBlLnBhdXNlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3BhdXNlZEF0VGltZT11KCksdGhpcy5faXNQYXVzZWQ9ITAsdGhpc30sbi5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lzUGF1c2VkJiYodGhpcy5fdGltZXN0YW1wKz11KCktdGhpcy5fcGF1c2VkQXRUaW1lKSx0aGlzLl9pc1BhdXNlZD0hMSx0aGlzLl9pc1R3ZWVuaW5nPSEwLHRoaXMuX3RpbWVvdXRIYW5kbGVyKCksdGhpc30sbi5wcm90b3R5cGUuc2Vlaz1mdW5jdGlvbihhKXthPU1hdGgubWF4KGEsMCk7dmFyIGI9dSgpO3JldHVybiB0aGlzLl90aW1lc3RhbXArYT09PTA/dGhpczoodGhpcy5fdGltZXN0YW1wPWItYSx0aGlzLmlzUGxheWluZygpfHwodGhpcy5faXNUd2VlbmluZz0hMCx0aGlzLl9pc1BhdXNlZD0hMSxsKHRoaXMsdGhpcy5fdGltZXN0YW1wLHRoaXMuX2RlbGF5LHRoaXMuX2R1cmF0aW9uLHRoaXMuX2N1cnJlbnRTdGF0ZSx0aGlzLl9vcmlnaW5hbFN0YXRlLHRoaXMuX3RhcmdldFN0YXRlLHRoaXMuX2Vhc2luZyx0aGlzLl9zdGVwLHRoaXMuX3NjaGVkdWxlRnVuY3Rpb24sYiksdGhpcy5wYXVzZSgpKSx0aGlzKX0sbi5wcm90b3R5cGUuc3RvcD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5faXNUd2VlbmluZz0hMSx0aGlzLl9pc1BhdXNlZD0hMSx0aGlzLl90aW1lb3V0SGFuZGxlcj1lLChiLmNhbmNlbEFuaW1hdGlvbkZyYW1lfHxiLndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lfHxiLm9DYW5jZWxBbmltYXRpb25GcmFtZXx8Yi5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lfHxiLm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZXx8Yi5jbGVhclRpbWVvdXQpKHRoaXMuX3NjaGVkdWxlSWQpLGEmJihrKHRoaXMsXCJiZWZvcmVUd2VlblwiKSxpKDEsdGhpcy5fY3VycmVudFN0YXRlLHRoaXMuX29yaWdpbmFsU3RhdGUsdGhpcy5fdGFyZ2V0U3RhdGUsMSwwLHRoaXMuX2Vhc2luZyksayh0aGlzLFwiYWZ0ZXJUd2VlblwiKSxrKHRoaXMsXCJhZnRlclR3ZWVuRW5kXCIpLHRoaXMuX2ZpbmlzaC5jYWxsKHRoaXMsdGhpcy5fY3VycmVudFN0YXRlLHRoaXMuX2F0dGFjaG1lbnQpKSx0aGlzfSxuLnByb3RvdHlwZS5pc1BsYXlpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faXNUd2VlbmluZyYmIXRoaXMuX2lzUGF1c2VkfSxuLnByb3RvdHlwZS5zZXRTY2hlZHVsZUZ1bmN0aW9uPWZ1bmN0aW9uKGEpe3RoaXMuX3NjaGVkdWxlRnVuY3Rpb249YX0sbi5wcm90b3R5cGUuZGlzcG9zZT1mdW5jdGlvbigpe3ZhciBhO2ZvcihhIGluIHRoaXMpdGhpcy5oYXNPd25Qcm9wZXJ0eShhKSYmZGVsZXRlIHRoaXNbYV19LG4ucHJvdG90eXBlLmZpbHRlcj17fSxuLnByb3RvdHlwZS5mb3JtdWxhPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9fSxvPW4ucHJvdG90eXBlLmZvcm11bGEsZyhuLHtub3c6dSxlYWNoOmYsdHdlZW5Qcm9wczppLHR3ZWVuUHJvcDpqLGFwcGx5RmlsdGVyOmssc2hhbGxvd0NvcHk6ZyxkZWZhdWx0czpoLGNvbXBvc2VFYXNpbmdPYmplY3Q6bX0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFNISUZUWV9ERUJVR19OT1cmJihiLnRpbWVvdXRIYW5kbGVyPWwpLFwib2JqZWN0XCI9PXR5cGVvZiBkP2MuZXhwb3J0cz1uOlwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEuYW1kP2EoZnVuY3Rpb24oKXtyZXR1cm4gbn0pOlwidW5kZWZpbmVkXCI9PXR5cGVvZiBiLlR3ZWVuYWJsZSYmKGIuVHdlZW5hYmxlPW4pLG59KCk7IWZ1bmN0aW9uKCl7ZS5zaGFsbG93Q29weShlLnByb3RvdHlwZS5mb3JtdWxhLHtlYXNlSW5RdWFkOmZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnBvdyhhLDIpfSxlYXNlT3V0UXVhZDpmdW5jdGlvbihhKXtyZXR1cm4tKE1hdGgucG93KGEtMSwyKS0xKX0sZWFzZUluT3V0UXVhZDpmdW5jdGlvbihhKXtyZXR1cm4oYS89LjUpPDE/LjUqTWF0aC5wb3coYSwyKTotLjUqKChhLT0yKSphLTIpfSxlYXNlSW5DdWJpYzpmdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5wb3coYSwzKX0sZWFzZU91dEN1YmljOmZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnBvdyhhLTEsMykrMX0sZWFzZUluT3V0Q3ViaWM6ZnVuY3Rpb24oYSl7cmV0dXJuKGEvPS41KTwxPy41Kk1hdGgucG93KGEsMyk6LjUqKE1hdGgucG93KGEtMiwzKSsyKX0sZWFzZUluUXVhcnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGgucG93KGEsNCl9LGVhc2VPdXRRdWFydDpmdW5jdGlvbihhKXtyZXR1cm4tKE1hdGgucG93KGEtMSw0KS0xKX0sZWFzZUluT3V0UXVhcnQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGEvPS41KTwxPy41Kk1hdGgucG93KGEsNCk6LS41KigoYS09MikqTWF0aC5wb3coYSwzKS0yKX0sZWFzZUluUXVpbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGgucG93KGEsNSl9LGVhc2VPdXRRdWludDpmdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5wb3coYS0xLDUpKzF9LGVhc2VJbk91dFF1aW50OmZ1bmN0aW9uKGEpe3JldHVybihhLz0uNSk8MT8uNSpNYXRoLnBvdyhhLDUpOi41KihNYXRoLnBvdyhhLTIsNSkrMil9LGVhc2VJblNpbmU6ZnVuY3Rpb24oYSl7cmV0dXJuLU1hdGguY29zKGEqKE1hdGguUEkvMikpKzF9LGVhc2VPdXRTaW5lOmZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnNpbihhKihNYXRoLlBJLzIpKX0sZWFzZUluT3V0U2luZTpmdW5jdGlvbihhKXtyZXR1cm4tLjUqKE1hdGguY29zKE1hdGguUEkqYSktMSl9LGVhc2VJbkV4cG86ZnVuY3Rpb24oYSl7cmV0dXJuIDA9PT1hPzA6TWF0aC5wb3coMiwxMCooYS0xKSl9LGVhc2VPdXRFeHBvOmZ1bmN0aW9uKGEpe3JldHVybiAxPT09YT8xOi1NYXRoLnBvdygyLC0xMCphKSsxfSxlYXNlSW5PdXRFeHBvOmZ1bmN0aW9uKGEpe3JldHVybiAwPT09YT8wOjE9PT1hPzE6KGEvPS41KTwxPy41Kk1hdGgucG93KDIsMTAqKGEtMSkpOi41KigtTWF0aC5wb3coMiwtMTAqLS1hKSsyKX0sZWFzZUluQ2lyYzpmdW5jdGlvbihhKXtyZXR1cm4tKE1hdGguc3FydCgxLWEqYSktMSl9LGVhc2VPdXRDaXJjOmZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnNxcnQoMS1NYXRoLnBvdyhhLTEsMikpfSxlYXNlSW5PdXRDaXJjOmZ1bmN0aW9uKGEpe3JldHVybihhLz0uNSk8MT8tLjUqKE1hdGguc3FydCgxLWEqYSktMSk6LjUqKE1hdGguc3FydCgxLShhLT0yKSphKSsxKX0sZWFzZU91dEJvdW5jZTpmdW5jdGlvbihhKXtyZXR1cm4gMS8yLjc1PmE/Ny41NjI1KmEqYToyLzIuNzU+YT83LjU2MjUqKGEtPTEuNS8yLjc1KSphKy43NToyLjUvMi43NT5hPzcuNTYyNSooYS09Mi4yNS8yLjc1KSphKy45Mzc1OjcuNTYyNSooYS09Mi42MjUvMi43NSkqYSsuOTg0Mzc1fSxlYXNlSW5CYWNrOmZ1bmN0aW9uKGEpe3ZhciBiPTEuNzAxNTg7cmV0dXJuIGEqYSooKGIrMSkqYS1iKX0sZWFzZU91dEJhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9MS43MDE1ODtyZXR1cm4oYS09MSkqYSooKGIrMSkqYStiKSsxfSxlYXNlSW5PdXRCYWNrOmZ1bmN0aW9uKGEpe3ZhciBiPTEuNzAxNTg7cmV0dXJuKGEvPS41KTwxPy41KihhKmEqKCgoYio9MS41MjUpKzEpKmEtYikpOi41KigoYS09MikqYSooKChiKj0xLjUyNSkrMSkqYStiKSsyKX0sZWxhc3RpYzpmdW5jdGlvbihhKXtyZXR1cm4tMSpNYXRoLnBvdyg0LC04KmEpKk1hdGguc2luKCg2KmEtMSkqKDIqTWF0aC5QSSkvMikrMX0sc3dpbmdGcm9tVG86ZnVuY3Rpb24oYSl7dmFyIGI9MS43MDE1ODtyZXR1cm4oYS89LjUpPDE/LjUqKGEqYSooKChiKj0xLjUyNSkrMSkqYS1iKSk6LjUqKChhLT0yKSphKigoKGIqPTEuNTI1KSsxKSphK2IpKzIpfSxzd2luZ0Zyb206ZnVuY3Rpb24oYSl7dmFyIGI9MS43MDE1ODtyZXR1cm4gYSphKigoYisxKSphLWIpfSxzd2luZ1RvOmZ1bmN0aW9uKGEpe3ZhciBiPTEuNzAxNTg7cmV0dXJuKGEtPTEpKmEqKChiKzEpKmErYikrMX0sYm91bmNlOmZ1bmN0aW9uKGEpe3JldHVybiAxLzIuNzU+YT83LjU2MjUqYSphOjIvMi43NT5hPzcuNTYyNSooYS09MS41LzIuNzUpKmErLjc1OjIuNS8yLjc1PmE/Ny41NjI1KihhLT0yLjI1LzIuNzUpKmErLjkzNzU6Ny41NjI1KihhLT0yLjYyNS8yLjc1KSphKy45ODQzNzV9LGJvdW5jZVBhc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIDEvMi43NT5hPzcuNTYyNSphKmE6Mi8yLjc1PmE/Mi0oNy41NjI1KihhLT0xLjUvMi43NSkqYSsuNzUpOjIuNS8yLjc1PmE/Mi0oNy41NjI1KihhLT0yLjI1LzIuNzUpKmErLjkzNzUpOjItKDcuNTYyNSooYS09Mi42MjUvMi43NSkqYSsuOTg0Mzc1KX0sZWFzZUZyb21UbzpmdW5jdGlvbihhKXtyZXR1cm4oYS89LjUpPDE/LjUqTWF0aC5wb3coYSw0KTotLjUqKChhLT0yKSpNYXRoLnBvdyhhLDMpLTIpfSxlYXNlRnJvbTpmdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5wb3coYSw0KX0sZWFzZVRvOmZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnBvdyhhLC4yNSl9fSl9KCksZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsYixjLGQsZSxmKXtmdW5jdGlvbiBnKGEpe3JldHVybigobiphK28pKmErcCkqYX1mdW5jdGlvbiBoKGEpe3JldHVybigocSphK3IpKmErcykqYX1mdW5jdGlvbiBpKGEpe3JldHVybigzKm4qYSsyKm8pKmErcH1mdW5jdGlvbiBqKGEpe3JldHVybiAxLygyMDAqYSl9ZnVuY3Rpb24gayhhLGIpe3JldHVybiBoKG0oYSxiKSl9ZnVuY3Rpb24gbChhKXtyZXR1cm4gYT49MD9hOjAtYX1mdW5jdGlvbiBtKGEsYil7dmFyIGMsZCxlLGYsaCxqO2ZvcihlPWEsaj0wOzg+ajtqKyspe2lmKGY9ZyhlKS1hLGwoZik8YilyZXR1cm4gZTtpZihoPWkoZSksbChoKTwxZS02KWJyZWFrO2UtPWYvaH1pZihjPTAsZD0xLGU9YSxjPmUpcmV0dXJuIGM7aWYoZT5kKXJldHVybiBkO2Zvcig7ZD5jOyl7aWYoZj1nKGUpLGwoZi1hKTxiKXJldHVybiBlO2E+Zj9jPWU6ZD1lLGU9LjUqKGQtYykrY31yZXR1cm4gZX12YXIgbj0wLG89MCxwPTAscT0wLHI9MCxzPTA7cmV0dXJuIHA9MypiLG89MyooZC1iKS1wLG49MS1wLW8scz0zKmMscj0zKihlLWMpLXMscT0xLXMtcixrKGEsaihmKSl9ZnVuY3Rpb24gYihiLGMsZCxlKXtyZXR1cm4gZnVuY3Rpb24oZil7cmV0dXJuIGEoZixiLGMsZCxlLDEpfX1lLnNldEJlemllckZ1bmN0aW9uPWZ1bmN0aW9uKGEsYyxkLGYsZyl7dmFyIGg9YihjLGQsZixnKTtyZXR1cm4gaC5kaXNwbGF5TmFtZT1hLGgueDE9YyxoLnkxPWQsaC54Mj1mLGgueTI9ZyxlLnByb3RvdHlwZS5mb3JtdWxhW2FdPWh9LGUudW5zZXRCZXppZXJGdW5jdGlvbj1mdW5jdGlvbihhKXtkZWxldGUgZS5wcm90b3R5cGUuZm9ybXVsYVthXX19KCksZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsYixjLGQsZixnKXtyZXR1cm4gZS50d2VlblByb3BzKGQsYixhLGMsMSxnLGYpfXZhciBiPW5ldyBlO2IuX2ZpbHRlckFyZ3M9W10sZS5pbnRlcnBvbGF0ZT1mdW5jdGlvbihjLGQsZixnLGgpe3ZhciBpPWUuc2hhbGxvd0NvcHkoe30sYyksaj1ofHwwLGs9ZS5jb21wb3NlRWFzaW5nT2JqZWN0KGMsZ3x8XCJsaW5lYXJcIik7Yi5zZXQoe30pO3ZhciBsPWIuX2ZpbHRlckFyZ3M7bC5sZW5ndGg9MCxsWzBdPWksbFsxXT1jLGxbMl09ZCxsWzNdPWssZS5hcHBseUZpbHRlcihiLFwidHdlZW5DcmVhdGVkXCIpLGUuYXBwbHlGaWx0ZXIoYixcImJlZm9yZVR3ZWVuXCIpO3ZhciBtPWEoYyxpLGQsZixrLGopO3JldHVybiBlLmFwcGx5RmlsdGVyKGIsXCJhZnRlclR3ZWVuXCIpLG19fSgpLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiKXt2YXIgYyxkPVtdLGU9YS5sZW5ndGg7Zm9yKGM9MDtlPmM7YysrKWQucHVzaChcIl9cIitiK1wiX1wiK2MpO3JldHVybiBkfWZ1bmN0aW9uIGMoYSl7dmFyIGI9YS5tYXRjaCh2KTtyZXR1cm4gYj8oMT09PWIubGVuZ3RofHxhWzBdLm1hdGNoKHUpKSYmYi51bnNoaWZ0KFwiXCIpOmI9W1wiXCIsXCJcIl0sYi5qb2luKEEpfWZ1bmN0aW9uIGQoYil7YS5lYWNoKGIsZnVuY3Rpb24oYSl7dmFyIGM9YlthXTtcInN0cmluZ1wiPT10eXBlb2YgYyYmYy5tYXRjaCh6KSYmKGJbYV09ZShjKSl9KX1mdW5jdGlvbiBlKGEpe3JldHVybiBpKHosYSxmKX1mdW5jdGlvbiBmKGEpe3ZhciBiPWcoYSk7cmV0dXJuXCJyZ2IoXCIrYlswXStcIixcIitiWzFdK1wiLFwiK2JbMl0rXCIpXCJ9ZnVuY3Rpb24gZyhhKXtyZXR1cm4gYT1hLnJlcGxhY2UoLyMvLFwiXCIpLDM9PT1hLmxlbmd0aCYmKGE9YS5zcGxpdChcIlwiKSxhPWFbMF0rYVswXSthWzFdK2FbMV0rYVsyXSthWzJdKSxCWzBdPWgoYS5zdWJzdHIoMCwyKSksQlsxXT1oKGEuc3Vic3RyKDIsMikpLEJbMl09aChhLnN1YnN0cig0LDIpKSxCfWZ1bmN0aW9uIGgoYSl7cmV0dXJuIHBhcnNlSW50KGEsMTYpfWZ1bmN0aW9uIGkoYSxiLGMpe3ZhciBkPWIubWF0Y2goYSksZT1iLnJlcGxhY2UoYSxBKTtpZihkKWZvcih2YXIgZixnPWQubGVuZ3RoLGg9MDtnPmg7aCsrKWY9ZC5zaGlmdCgpLGU9ZS5yZXBsYWNlKEEsYyhmKSk7cmV0dXJuIGV9ZnVuY3Rpb24gaihhKXtyZXR1cm4gaSh4LGEsayl9ZnVuY3Rpb24gayhhKXtmb3IodmFyIGI9YS5tYXRjaCh3KSxjPWIubGVuZ3RoLGQ9YS5tYXRjaCh5KVswXSxlPTA7Yz5lO2UrKylkKz1wYXJzZUludChiW2VdLDEwKStcIixcIjtyZXR1cm4gZD1kLnNsaWNlKDAsLTEpK1wiKVwifWZ1bmN0aW9uIGwoZCl7dmFyIGU9e307cmV0dXJuIGEuZWFjaChkLGZ1bmN0aW9uKGEpe3ZhciBmPWRbYV07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGYpe3ZhciBnPXIoZik7ZVthXT17Zm9ybWF0U3RyaW5nOmMoZiksY2h1bmtOYW1lczpiKGcsYSl9fX0pLGV9ZnVuY3Rpb24gbShiLGMpe2EuZWFjaChjLGZ1bmN0aW9uKGEpe2Zvcih2YXIgZD1iW2FdLGU9cihkKSxmPWUubGVuZ3RoLGc9MDtmPmc7ZysrKWJbY1thXS5jaHVua05hbWVzW2ddXT0rZVtnXTtkZWxldGUgYlthXX0pfWZ1bmN0aW9uIG4oYixjKXthLmVhY2goYyxmdW5jdGlvbihhKXt2YXIgZD1iW2FdLGU9byhiLGNbYV0uY2h1bmtOYW1lcyksZj1wKGUsY1thXS5jaHVua05hbWVzKTtkPXEoY1thXS5mb3JtYXRTdHJpbmcsZiksYlthXT1qKGQpfSl9ZnVuY3Rpb24gbyhhLGIpe2Zvcih2YXIgYyxkPXt9LGU9Yi5sZW5ndGgsZj0wO2U+ZjtmKyspYz1iW2ZdLGRbY109YVtjXSxkZWxldGUgYVtjXTtyZXR1cm4gZH1mdW5jdGlvbiBwKGEsYil7Qy5sZW5ndGg9MDtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wO2M+ZDtkKyspQy5wdXNoKGFbYltkXV0pO3JldHVybiBDfWZ1bmN0aW9uIHEoYSxiKXtmb3IodmFyIGM9YSxkPWIubGVuZ3RoLGU9MDtkPmU7ZSsrKWM9Yy5yZXBsYWNlKEEsK2JbZV0udG9GaXhlZCg0KSk7cmV0dXJuIGN9ZnVuY3Rpb24gcihhKXtyZXR1cm4gYS5tYXRjaCh3KX1mdW5jdGlvbiBzKGIsYyl7YS5lYWNoKGMsZnVuY3Rpb24oYSl7dmFyIGQsZT1jW2FdLGY9ZS5jaHVua05hbWVzLGc9Zi5sZW5ndGgsaD1iW2FdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBoKXt2YXIgaT1oLnNwbGl0KFwiIFwiKSxqPWlbaS5sZW5ndGgtMV07Zm9yKGQ9MDtnPmQ7ZCsrKWJbZltkXV09aVtkXXx8an1lbHNlIGZvcihkPTA7Zz5kO2QrKyliW2ZbZF1dPWg7ZGVsZXRlIGJbYV19KX1mdW5jdGlvbiB0KGIsYyl7YS5lYWNoKGMsZnVuY3Rpb24oYSl7dmFyIGQ9Y1thXSxlPWQuY2h1bmtOYW1lcyxmPWUubGVuZ3RoLGc9YltlWzBdXSxoPXR5cGVvZiBnO2lmKFwic3RyaW5nXCI9PT1oKXtmb3IodmFyIGk9XCJcIixqPTA7Zj5qO2orKylpKz1cIiBcIitiW2Vbal1dLGRlbGV0ZSBiW2Vbal1dO2JbYV09aS5zdWJzdHIoMSl9ZWxzZSBiW2FdPWd9KX12YXIgdT0vKFxcZHxcXC18XFwuKS8sdj0vKFteXFwtMC05XFwuXSspL2csdz0vWzAtOS5cXC1dKy9nLHg9bmV3IFJlZ0V4cChcInJnYlxcXFwoXCIrdy5zb3VyY2UrLyxcXHMqLy5zb3VyY2Urdy5zb3VyY2UrLyxcXHMqLy5zb3VyY2Urdy5zb3VyY2UrXCJcXFxcKVwiLFwiZ1wiKSx5PS9eLipcXCgvLHo9LyMoWzAtOV18W2EtZl0pezMsNn0vZ2ksQT1cIlZBTFwiLEI9W10sQz1bXTthLnByb3RvdHlwZS5maWx0ZXIudG9rZW49e3R3ZWVuQ3JlYXRlZDpmdW5jdGlvbihhLGIsYyxlKXtkKGEpLGQoYiksZChjKSx0aGlzLl90b2tlbkRhdGE9bChhKX0sYmVmb3JlVHdlZW46ZnVuY3Rpb24oYSxiLGMsZCl7cyhkLHRoaXMuX3Rva2VuRGF0YSksbShhLHRoaXMuX3Rva2VuRGF0YSksbShiLHRoaXMuX3Rva2VuRGF0YSksbShjLHRoaXMuX3Rva2VuRGF0YSl9LGFmdGVyVHdlZW46ZnVuY3Rpb24oYSxiLGMsZCl7bihhLHRoaXMuX3Rva2VuRGF0YSksbihiLHRoaXMuX3Rva2VuRGF0YSksbihjLHRoaXMuX3Rva2VuRGF0YSksdChkLHRoaXMuX3Rva2VuRGF0YSl9fX0oZSl9KS5jYWxsKG51bGwpfSx7fV0sMjpbZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEoXCIuL3NoYXBlXCIpLGU9YShcIi4vdXRpbHNcIiksZj1mdW5jdGlvbihhLGIpe3RoaXMuX3BhdGhUZW1wbGF0ZT1cIk0gNTAsNTAgbSAwLC17cmFkaXVzfSBhIHtyYWRpdXN9LHtyYWRpdXN9IDAgMSAxIDAsezJyYWRpdXN9IGEge3JhZGl1c30se3JhZGl1c30gMCAxIDEgMCwtezJyYWRpdXN9XCIsdGhpcy5jb250YWluZXJBc3BlY3RSYXRpbz0xLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtmLnByb3RvdHlwZT1uZXcgZCxmLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1mLGYucHJvdG90eXBlLl9wYXRoU3RyaW5nPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3Ryb2tlV2lkdGg7YS50cmFpbFdpZHRoJiZhLnRyYWlsV2lkdGg+YS5zdHJva2VXaWR0aCYmKGI9YS50cmFpbFdpZHRoKTt2YXIgYz01MC1iLzI7cmV0dXJuIGUucmVuZGVyKHRoaXMuX3BhdGhUZW1wbGF0ZSx7cmFkaXVzOmMsXCIycmFkaXVzXCI6MipjfSl9LGYucHJvdG90eXBlLl90cmFpbFN0cmluZz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcGF0aFN0cmluZyhhKX0sYi5leHBvcnRzPWZ9LHtcIi4vc2hhcGVcIjo3LFwiLi91dGlsc1wiOjh9XSwzOltmdW5jdGlvbihhLGIsYyl7dmFyIGQ9YShcIi4vc2hhcGVcIiksZT1hKFwiLi91dGlsc1wiKSxmPWZ1bmN0aW9uKGEsYil7dGhpcy5fcGF0aFRlbXBsYXRlPVwiTSAwLHtjZW50ZXJ9IEwgMTAwLHtjZW50ZXJ9XCIsZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2YucHJvdG90eXBlPW5ldyBkLGYucHJvdG90eXBlLmNvbnN0cnVjdG9yPWYsZi5wcm90b3R5cGUuX2luaXRpYWxpemVTdmc9ZnVuY3Rpb24oYSxiKXthLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIixcIjAgMCAxMDAgXCIrYi5zdHJva2VXaWR0aCksYS5zZXRBdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsXCJub25lXCIpfSxmLnByb3RvdHlwZS5fcGF0aFN0cmluZz1mdW5jdGlvbihhKXtyZXR1cm4gZS5yZW5kZXIodGhpcy5fcGF0aFRlbXBsYXRlLHtjZW50ZXI6YS5zdHJva2VXaWR0aC8yfSl9LGYucHJvdG90eXBlLl90cmFpbFN0cmluZz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcGF0aFN0cmluZyhhKX0sYi5leHBvcnRzPWZ9LHtcIi4vc2hhcGVcIjo3LFwiLi91dGlsc1wiOjh9XSw0OltmdW5jdGlvbihhLGIsYyl7Yi5leHBvcnRzPXtMaW5lOmEoXCIuL2xpbmVcIiksQ2lyY2xlOmEoXCIuL2NpcmNsZVwiKSxTZW1pQ2lyY2xlOmEoXCIuL3NlbWljaXJjbGVcIiksUGF0aDphKFwiLi9wYXRoXCIpLFNoYXBlOmEoXCIuL3NoYXBlXCIpLHV0aWxzOmEoXCIuL3V0aWxzXCIpfX0se1wiLi9jaXJjbGVcIjoyLFwiLi9saW5lXCI6MyxcIi4vcGF0aFwiOjUsXCIuL3NlbWljaXJjbGVcIjo2LFwiLi9zaGFwZVwiOjcsXCIuL3V0aWxzXCI6OH1dLDU6W2Z1bmN0aW9uKGEsYixjKXt2YXIgZD1hKFwic2hpZnR5XCIpLGU9YShcIi4vdXRpbHNcIiksZj17ZWFzZUluOlwiZWFzZUluQ3ViaWNcIixlYXNlT3V0OlwiZWFzZU91dEN1YmljXCIsZWFzZUluT3V0OlwiZWFzZUluT3V0Q3ViaWNcIn0sZz1mdW5jdGlvbiBoKGEsYil7aWYoISh0aGlzIGluc3RhbmNlb2YgaCkpdGhyb3cgbmV3IEVycm9yKFwiQ29uc3RydWN0b3Igd2FzIGNhbGxlZCB3aXRob3V0IG5ldyBrZXl3b3JkXCIpO2I9ZS5leHRlbmQoe2R1cmF0aW9uOjgwMCxlYXNpbmc6XCJsaW5lYXJcIixmcm9tOnt9LHRvOnt9LHN0ZXA6ZnVuY3Rpb24oKXt9fSxiKTt2YXIgYztjPWUuaXNTdHJpbmcoYSk/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhKTphLHRoaXMucGF0aD1jLHRoaXMuX29wdHM9Yix0aGlzLl90d2VlbmFibGU9bnVsbDt2YXIgZD10aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKTt0aGlzLnBhdGguc3R5bGUuc3Ryb2tlRGFzaGFycmF5PWQrXCIgXCIrZCx0aGlzLnNldCgwKX07Zy5wcm90b3R5cGUudmFsdWU9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9nZXRDb21wdXRlZERhc2hPZmZzZXQoKSxiPXRoaXMucGF0aC5nZXRUb3RhbExlbmd0aCgpLGM9MS1hL2I7cmV0dXJuIHBhcnNlRmxvYXQoYy50b0ZpeGVkKDYpLDEwKX0sZy5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEpe3RoaXMuc3RvcCgpLHRoaXMucGF0aC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0PXRoaXMuX3Byb2dyZXNzVG9PZmZzZXQoYSk7dmFyIGI9dGhpcy5fb3B0cy5zdGVwO2lmKGUuaXNGdW5jdGlvbihiKSl7dmFyIGM9dGhpcy5fZWFzaW5nKHRoaXMuX29wdHMuZWFzaW5nKSxkPXRoaXMuX2NhbGN1bGF0ZVRvKGEsYyksZj10aGlzLl9vcHRzLnNoYXBlfHx0aGlzO2IoZCxmLHRoaXMuX29wdHMuYXR0YWNobWVudCl9fSxnLnByb3RvdHlwZS5zdG9wPWZ1bmN0aW9uKCl7dGhpcy5fc3RvcFR3ZWVuKCksdGhpcy5wYXRoLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQ9dGhpcy5fZ2V0Q29tcHV0ZWREYXNoT2Zmc2V0KCl9LGcucHJvdG90eXBlLmFuaW1hdGU9ZnVuY3Rpb24oYSxiLGMpe2I9Ynx8e30sZS5pc0Z1bmN0aW9uKGIpJiYoYz1iLGI9e30pO3ZhciBmPWUuZXh0ZW5kKHt9LGIpLGc9ZS5leHRlbmQoe30sdGhpcy5fb3B0cyk7Yj1lLmV4dGVuZChnLGIpO3ZhciBoPXRoaXMuX2Vhc2luZyhiLmVhc2luZyksaT10aGlzLl9yZXNvbHZlRnJvbUFuZFRvKGEsaCxmKTt0aGlzLnN0b3AoKSx0aGlzLnBhdGguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dmFyIGo9dGhpcy5fZ2V0Q29tcHV0ZWREYXNoT2Zmc2V0KCksaz10aGlzLl9wcm9ncmVzc1RvT2Zmc2V0KGEpLGw9dGhpczt0aGlzLl90d2VlbmFibGU9bmV3IGQsdGhpcy5fdHdlZW5hYmxlLnR3ZWVuKHtmcm9tOmUuZXh0ZW5kKHtvZmZzZXQ6an0saS5mcm9tKSx0bzplLmV4dGVuZCh7b2Zmc2V0Omt9LGkudG8pLGR1cmF0aW9uOmIuZHVyYXRpb24sZWFzaW5nOmgsc3RlcDpmdW5jdGlvbihhKXtsLnBhdGguc3R5bGUuc3Ryb2tlRGFzaG9mZnNldD1hLm9mZnNldDt2YXIgYz1iLnNoYXBlfHxsO2Iuc3RlcChhLGMsYi5hdHRhY2htZW50KX0sZmluaXNoOmZ1bmN0aW9uKGEpe2UuaXNGdW5jdGlvbihjKSYmYygpfX0pfSxnLnByb3RvdHlwZS5fZ2V0Q29tcHV0ZWREYXNoT2Zmc2V0PWZ1bmN0aW9uKCl7dmFyIGE9d2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5wYXRoLG51bGwpO3JldHVybiBwYXJzZUZsb2F0KGEuZ2V0UHJvcGVydHlWYWx1ZShcInN0cm9rZS1kYXNob2Zmc2V0XCIpLDEwKX0sZy5wcm90b3R5cGUuX3Byb2dyZXNzVG9PZmZzZXQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5wYXRoLmdldFRvdGFsTGVuZ3RoKCk7cmV0dXJuIGItYSpifSxnLnByb3RvdHlwZS5fcmVzb2x2ZUZyb21BbmRUbz1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGMuZnJvbSYmYy50bz97ZnJvbTpjLmZyb20sdG86Yy50b306e2Zyb206dGhpcy5fY2FsY3VsYXRlRnJvbShiKSx0bzp0aGlzLl9jYWxjdWxhdGVUbyhhLGIpfX0sZy5wcm90b3R5cGUuX2NhbGN1bGF0ZUZyb209ZnVuY3Rpb24oYSl7cmV0dXJuIGQuaW50ZXJwb2xhdGUodGhpcy5fb3B0cy5mcm9tLHRoaXMuX29wdHMudG8sdGhpcy52YWx1ZSgpLGEpfSxnLnByb3RvdHlwZS5fY2FsY3VsYXRlVG89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZC5pbnRlcnBvbGF0ZSh0aGlzLl9vcHRzLmZyb20sdGhpcy5fb3B0cy50byxhLGIpfSxnLnByb3RvdHlwZS5fc3RvcFR3ZWVuPWZ1bmN0aW9uKCl7bnVsbCE9PXRoaXMuX3R3ZWVuYWJsZSYmKHRoaXMuX3R3ZWVuYWJsZS5zdG9wKCksdGhpcy5fdHdlZW5hYmxlPW51bGwpfSxnLnByb3RvdHlwZS5fZWFzaW5nPWZ1bmN0aW9uKGEpe3JldHVybiBmLmhhc093blByb3BlcnR5KGEpP2ZbYV06YX0sYi5leHBvcnRzPWd9LHtcIi4vdXRpbHNcIjo4LHNoaWZ0eToxfV0sNjpbZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEoXCIuL3NoYXBlXCIpLGU9YShcIi4vY2lyY2xlXCIpLGY9YShcIi4vdXRpbHNcIiksZz1mdW5jdGlvbihhLGIpe3RoaXMuX3BhdGhUZW1wbGF0ZT1cIk0gNTAsNTAgbSAte3JhZGl1c30sMCBhIHtyYWRpdXN9LHtyYWRpdXN9IDAgMSAxIHsycmFkaXVzfSwwXCIsdGhpcy5jb250YWluZXJBc3BlY3RSYXRpbz0yLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtnLnByb3RvdHlwZT1uZXcgZCxnLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1nLGcucHJvdG90eXBlLl9pbml0aWFsaXplU3ZnPWZ1bmN0aW9uKGEsYil7YS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsXCIwIDAgMTAwIDUwXCIpfSxnLnByb3RvdHlwZS5faW5pdGlhbGl6ZVRleHRDb250YWluZXI9ZnVuY3Rpb24oYSxiLGMpe2EudGV4dC5zdHlsZSYmKGMuc3R5bGUudG9wPVwiYXV0b1wiLGMuc3R5bGUuYm90dG9tPVwiMFwiLGEudGV4dC5hbGlnblRvQm90dG9tP2Yuc2V0U3R5bGUoYyxcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKC01MCUsIDApXCIpOmYuc2V0U3R5bGUoYyxcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKC01MCUsIDUwJSlcIikpfSxnLnByb3RvdHlwZS5fcGF0aFN0cmluZz1lLnByb3RvdHlwZS5fcGF0aFN0cmluZyxnLnByb3RvdHlwZS5fdHJhaWxTdHJpbmc9ZS5wcm90b3R5cGUuX3RyYWlsU3RyaW5nLGIuZXhwb3J0cz1nfSx7XCIuL2NpcmNsZVwiOjIsXCIuL3NoYXBlXCI6NyxcIi4vdXRpbHNcIjo4fV0sNzpbZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEoXCIuL3BhdGhcIiksZT1hKFwiLi91dGlsc1wiKSxmPVwiT2JqZWN0IGlzIGRlc3Ryb3llZFwiLGc9ZnVuY3Rpb24gaChhLGIpe2lmKCEodGhpcyBpbnN0YW5jZW9mIGgpKXRocm93IG5ldyBFcnJvcihcIkNvbnN0cnVjdG9yIHdhcyBjYWxsZWQgd2l0aG91dCBuZXcga2V5d29yZFwiKTtpZigwIT09YXJndW1lbnRzLmxlbmd0aCl7dGhpcy5fb3B0cz1lLmV4dGVuZCh7Y29sb3I6XCIjNTU1XCIsc3Ryb2tlV2lkdGg6MSx0cmFpbENvbG9yOm51bGwsdHJhaWxXaWR0aDpudWxsLGZpbGw6bnVsbCx0ZXh0OntzdHlsZTp7Y29sb3I6bnVsbCxwb3NpdGlvbjpcImFic29sdXRlXCIsbGVmdDpcIjUwJVwiLHRvcDpcIjUwJVwiLHBhZGRpbmc6MCxtYXJnaW46MCx0cmFuc2Zvcm06e3ByZWZpeDohMCx2YWx1ZTpcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwifX0sYXV0b1N0eWxlQ29udGFpbmVyOiEwLGFsaWduVG9Cb3R0b206ITAsdmFsdWU6bnVsbCxjbGFzc05hbWU6XCJwcm9ncmVzc2Jhci10ZXh0XCJ9LHN2Z1N0eWxlOntkaXNwbGF5OlwiYmxvY2tcIix3aWR0aDpcIjEwMCVcIn0sd2FybmluZ3M6ITF9LGIsITApLGUuaXNPYmplY3QoYikmJnZvaWQgMCE9PWIuc3ZnU3R5bGUmJih0aGlzLl9vcHRzLnN2Z1N0eWxlPWIuc3ZnU3R5bGUpLGUuaXNPYmplY3QoYikmJmUuaXNPYmplY3QoYi50ZXh0KSYmdm9pZCAwIT09Yi50ZXh0LnN0eWxlJiYodGhpcy5fb3B0cy50ZXh0LnN0eWxlPWIudGV4dC5zdHlsZSk7dmFyIGMsZj10aGlzLl9jcmVhdGVTdmdWaWV3KHRoaXMuX29wdHMpO2lmKGM9ZS5pc1N0cmluZyhhKT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpOmEsIWMpdGhyb3cgbmV3IEVycm9yKFwiQ29udGFpbmVyIGRvZXMgbm90IGV4aXN0OiBcIithKTt0aGlzLl9jb250YWluZXI9Yyx0aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQoZi5zdmcpLHRoaXMuX29wdHMud2FybmluZ3MmJnRoaXMuX3dhcm5Db250YWluZXJBc3BlY3RSYXRpbyh0aGlzLl9jb250YWluZXIpLHRoaXMuX29wdHMuc3ZnU3R5bGUmJmUuc2V0U3R5bGVzKGYuc3ZnLHRoaXMuX29wdHMuc3ZnU3R5bGUpLHRoaXMuc3ZnPWYuc3ZnLHRoaXMucGF0aD1mLnBhdGgsdGhpcy50cmFpbD1mLnRyYWlsLHRoaXMudGV4dD1udWxsO3ZhciBnPWUuZXh0ZW5kKHthdHRhY2htZW50OnZvaWQgMCxzaGFwZTp0aGlzfSx0aGlzLl9vcHRzKTt0aGlzLl9wcm9ncmVzc1BhdGg9bmV3IGQoZi5wYXRoLGcpLGUuaXNPYmplY3QodGhpcy5fb3B0cy50ZXh0KSYmbnVsbCE9PXRoaXMuX29wdHMudGV4dC52YWx1ZSYmdGhpcy5zZXRUZXh0KHRoaXMuX29wdHMudGV4dC52YWx1ZSl9fTtnLnByb3RvdHlwZS5hbmltYXRlPWZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT09dGhpcy5fcHJvZ3Jlc3NQYXRoKXRocm93IG5ldyBFcnJvcihmKTt0aGlzLl9wcm9ncmVzc1BhdGguYW5pbWF0ZShhLGIsYyl9LGcucHJvdG90eXBlLnN0b3A9ZnVuY3Rpb24oKXtpZihudWxsPT09dGhpcy5fcHJvZ3Jlc3NQYXRoKXRocm93IG5ldyBFcnJvcihmKTt2b2lkIDAhPT10aGlzLl9wcm9ncmVzc1BhdGgmJnRoaXMuX3Byb2dyZXNzUGF0aC5zdG9wKCl9LGcucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXtpZihudWxsPT09dGhpcy5fcHJvZ3Jlc3NQYXRoKXRocm93IG5ldyBFcnJvcihmKTt0aGlzLnN0b3AoKSx0aGlzLnN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc3ZnKSx0aGlzLnN2Zz1udWxsLHRoaXMucGF0aD1udWxsLHRoaXMudHJhaWw9bnVsbCx0aGlzLl9wcm9ncmVzc1BhdGg9bnVsbCxudWxsIT09dGhpcy50ZXh0JiYodGhpcy50ZXh0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy50ZXh0KSx0aGlzLnRleHQ9bnVsbCl9LGcucHJvdG90eXBlLnNldD1mdW5jdGlvbihhKXtpZihudWxsPT09dGhpcy5fcHJvZ3Jlc3NQYXRoKXRocm93IG5ldyBFcnJvcihmKTt0aGlzLl9wcm9ncmVzc1BhdGguc2V0KGEpfSxnLnByb3RvdHlwZS52YWx1ZT1mdW5jdGlvbigpe2lmKG51bGw9PT10aGlzLl9wcm9ncmVzc1BhdGgpdGhyb3cgbmV3IEVycm9yKGYpO3JldHVybiB2b2lkIDA9PT10aGlzLl9wcm9ncmVzc1BhdGg/MDp0aGlzLl9wcm9ncmVzc1BhdGgudmFsdWUoKX0sZy5wcm90b3R5cGUuc2V0VGV4dD1mdW5jdGlvbihhKXtpZihudWxsPT09dGhpcy5fcHJvZ3Jlc3NQYXRoKXRocm93IG5ldyBFcnJvcihmKTtudWxsPT09dGhpcy50ZXh0JiYodGhpcy50ZXh0PXRoaXMuX2NyZWF0ZVRleHRDb250YWluZXIodGhpcy5fb3B0cyx0aGlzLl9jb250YWluZXIpLHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRleHQpKSxlLmlzT2JqZWN0KGEpPyhlLnJlbW92ZUNoaWxkcmVuKHRoaXMudGV4dCksdGhpcy50ZXh0LmFwcGVuZENoaWxkKGEpKTp0aGlzLnRleHQuaW5uZXJIVE1MPWF9LGcucHJvdG90eXBlLl9jcmVhdGVTdmdWaWV3PWZ1bmN0aW9uKGEpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIik7dGhpcy5faW5pdGlhbGl6ZVN2ZyhiLGEpO3ZhciBjPW51bGw7KGEudHJhaWxDb2xvcnx8YS50cmFpbFdpZHRoKSYmKGM9dGhpcy5fY3JlYXRlVHJhaWwoYSksYi5hcHBlbmRDaGlsZChjKSk7dmFyIGQ9dGhpcy5fY3JlYXRlUGF0aChhKTtyZXR1cm4gYi5hcHBlbmRDaGlsZChkKSx7c3ZnOmIscGF0aDpkLHRyYWlsOmN9fSxnLnByb3RvdHlwZS5faW5pdGlhbGl6ZVN2Zz1mdW5jdGlvbihhLGIpe2Euc2V0QXR0cmlidXRlKFwidmlld0JveFwiLFwiMCAwIDEwMCAxMDBcIil9LGcucHJvdG90eXBlLl9jcmVhdGVQYXRoPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuX3BhdGhTdHJpbmcoYSk7cmV0dXJuIHRoaXMuX2NyZWF0ZVBhdGhFbGVtZW50KGIsYSl9LGcucHJvdG90eXBlLl9jcmVhdGVUcmFpbD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLl90cmFpbFN0cmluZyhhKSxjPWUuZXh0ZW5kKHt9LGEpO3JldHVybiBjLnRyYWlsQ29sb3J8fChjLnRyYWlsQ29sb3I9XCIjZWVlXCIpLGMudHJhaWxXaWR0aHx8KGMudHJhaWxXaWR0aD1jLnN0cm9rZVdpZHRoKSxjLmNvbG9yPWMudHJhaWxDb2xvcixjLnN0cm9rZVdpZHRoPWMudHJhaWxXaWR0aCxjLmZpbGw9bnVsbCx0aGlzLl9jcmVhdGVQYXRoRWxlbWVudChiLGMpfSxnLnByb3RvdHlwZS5fY3JlYXRlUGF0aEVsZW1lbnQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwicGF0aFwiKTtyZXR1cm4gYy5zZXRBdHRyaWJ1dGUoXCJkXCIsYSksYy5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIixiLmNvbG9yKSxjLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLGIuc3Ryb2tlV2lkdGgpLGIuZmlsbD9jLnNldEF0dHJpYnV0ZShcImZpbGxcIixiLmZpbGwpOmMuc2V0QXR0cmlidXRlKFwiZmlsbC1vcGFjaXR5XCIsXCIwXCIpLGN9LGcucHJvdG90eXBlLl9jcmVhdGVUZXh0Q29udGFpbmVyPWZ1bmN0aW9uKGEsYil7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLmNsYXNzTmFtZT1hLnRleHQuY2xhc3NOYW1lO3ZhciBkPWEudGV4dC5zdHlsZTtyZXR1cm4gZCYmKGEudGV4dC5hdXRvU3R5bGVDb250YWluZXImJihiLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksZS5zZXRTdHlsZXMoYyxkKSxkLmNvbG9yfHwoYy5zdHlsZS5jb2xvcj1hLmNvbG9yKSksdGhpcy5faW5pdGlhbGl6ZVRleHRDb250YWluZXIoYSxiLGMpLGN9LGcucHJvdG90eXBlLl9pbml0aWFsaXplVGV4dENvbnRhaW5lcj1mdW5jdGlvbihhLGIsYyl7fSxnLnByb3RvdHlwZS5fcGF0aFN0cmluZz1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJPdmVycmlkZSB0aGlzIGZ1bmN0aW9uIGZvciBlYWNoIHByb2dyZXNzIGJhclwiKX0sZy5wcm90b3R5cGUuX3RyYWlsU3RyaW5nPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIk92ZXJyaWRlIHRoaXMgZnVuY3Rpb24gZm9yIGVhY2ggcHJvZ3Jlc3MgYmFyXCIpfSxnLnByb3RvdHlwZS5fd2FybkNvbnRhaW5lckFzcGVjdFJhdGlvPWZ1bmN0aW9uKGEpe2lmKHRoaXMuY29udGFpbmVyQXNwZWN0UmF0aW8pe3ZhciBiPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGEsbnVsbCksYz1wYXJzZUZsb2F0KGIuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpLDEwKSxkPXBhcnNlRmxvYXQoYi5nZXRQcm9wZXJ0eVZhbHVlKFwiaGVpZ2h0XCIpLDEwKTtlLmZsb2F0RXF1YWxzKHRoaXMuY29udGFpbmVyQXNwZWN0UmF0aW8sYy9kKXx8KGNvbnNvbGUud2FybihcIkluY29ycmVjdCBhc3BlY3QgcmF0aW8gb2YgY29udGFpbmVyXCIsXCIjXCIrYS5pZCxcImRldGVjdGVkOlwiLGIuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpK1wiKHdpZHRoKVwiLFwiL1wiLGIuZ2V0UHJvcGVydHlWYWx1ZShcImhlaWdodFwiKStcIihoZWlnaHQpXCIsXCI9XCIsYy9kKSxjb25zb2xlLndhcm4oXCJBc3BlY3QgcmF0aW8gb2Ygc2hvdWxkIGJlXCIsdGhpcy5jb250YWluZXJBc3BlY3RSYXRpbykpfX0sYi5leHBvcnRzPWd9LHtcIi4vcGF0aFwiOjUsXCIuL3V0aWxzXCI6OH1dLDg6W2Z1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEsYixjKXthPWF8fHt9LGI9Ynx8e30sYz1jfHwhMTtmb3IodmFyIGUgaW4gYilpZihiLmhhc093blByb3BlcnR5KGUpKXt2YXIgZj1hW2VdLGc9YltlXTtjJiZsKGYpJiZsKGcpP2FbZV09ZChmLGcsYyk6YVtlXT1nfXJldHVybiBhfWZ1bmN0aW9uIGUoYSxiKXt2YXIgYz1hO2Zvcih2YXIgZCBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoZCkpe3ZhciBlPWJbZF0sZj1cIlxcXFx7XCIrZCtcIlxcXFx9XCIsZz1uZXcgUmVnRXhwKGYsXCJnXCIpO2M9Yy5yZXBsYWNlKGcsZSl9cmV0dXJuIGN9ZnVuY3Rpb24gZihhLGIsYyl7Zm9yKHZhciBkPWEuc3R5bGUsZT0wO2U8cC5sZW5ndGg7KytlKXt2YXIgZj1wW2VdO2RbZitoKGIpXT1jfWRbYl09Y31mdW5jdGlvbiBnKGEsYil7bShiLGZ1bmN0aW9uKGIsYyl7bnVsbCE9PWImJnZvaWQgMCE9PWImJihsKGIpJiZiLnByZWZpeD09PSEwP2YoYSxjLGIudmFsdWUpOmEuc3R5bGVbY109Yil9KX1mdW5jdGlvbiBoKGEpe3JldHVybiBhLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSl9ZnVuY3Rpb24gaShhKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYXx8YSBpbnN0YW5jZW9mIFN0cmluZ31mdW5jdGlvbiBqKGEpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGF9ZnVuY3Rpb24gayhhKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSl9ZnVuY3Rpb24gbChhKXtpZihrKGEpKXJldHVybiExO3ZhciBiPXR5cGVvZiBhO3JldHVyblwib2JqZWN0XCI9PT1iJiYhIWF9ZnVuY3Rpb24gbShhLGIpe2Zvcih2YXIgYyBpbiBhKWlmKGEuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPWFbY107YihkLGMpfX1mdW5jdGlvbiBuKGEsYil7cmV0dXJuIE1hdGguYWJzKGEtYik8cX1mdW5jdGlvbiBvKGEpe2Zvcig7YS5maXJzdENoaWxkOylhLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCl9dmFyIHA9XCJXZWJraXQgTW96IE8gbXNcIi5zcGxpdChcIiBcIikscT0uMDAxO2IuZXhwb3J0cz17ZXh0ZW5kOmQscmVuZGVyOmUsc2V0U3R5bGU6ZixzZXRTdHlsZXM6ZyxjYXBpdGFsaXplOmgsaXNTdHJpbmc6aSxpc0Z1bmN0aW9uOmosaXNPYmplY3Q6bCxmb3JFYWNoT2JqZWN0Om0sZmxvYXRFcXVhbHM6bixyZW1vdmVDaGlsZHJlbjpvfX0se31dfSx7fSxbNF0pKDQpfSk7IiwiLyohXG4gKiBTbGlja1xuICogVmVyc2lvbjogMS42LjBcbiAqIFdlYnNpdGU6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pb1xuICovXG4hZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YShyZXF1aXJlKFwianF1ZXJ5XCIpKTphKGpRdWVyeSl9KGZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO3ZhciBiPXdpbmRvdy5TbGlja3x8e307Yj1mdW5jdGlvbigpe2Z1bmN0aW9uIGMoYyxkKXt2YXIgZixlPXRoaXM7ZS5kZWZhdWx0cz17YWNjZXNzaWJpbGl0eTohMCxhZGFwdGl2ZUhlaWdodDohMSxhcHBlbmRBcnJvd3M6YShjKSxhcHBlbmREb3RzOmEoYyksYXJyb3dzOiEwLGFzTmF2Rm9yOm51bGwscHJldkFycm93Oic8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLXJvbGU9XCJub25lXCIgY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxuZXh0QXJyb3c6JzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtcm9sZT1cIm5vbmVcIiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxhdXRvcGxheTohMSxhdXRvcGxheVNwZWVkOjNlMyxjZW50ZXJNb2RlOiExLGNlbnRlclBhZGRpbmc6XCI1MHB4XCIsY3NzRWFzZTpcImVhc2VcIixjdXN0b21QYWdpbmc6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYSgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1yb2xlPVwibm9uZVwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiAvPicpLnRleHQoYysxKX0sZG90czohMSxkb3RzQ2xhc3M6XCJzbGljay1kb3RzXCIsZHJhZ2dhYmxlOiEwLGVhc2luZzpcImxpbmVhclwiLGVkZ2VGcmljdGlvbjouMzUsZmFkZTohMSxmb2N1c09uU2VsZWN0OiExLGluZmluaXRlOiEwLGluaXRpYWxTbGlkZTowLGxhenlMb2FkOlwib25kZW1hbmRcIixtb2JpbGVGaXJzdDohMSxwYXVzZU9uSG92ZXI6ITAscGF1c2VPbkZvY3VzOiEwLHBhdXNlT25Eb3RzSG92ZXI6ITEscmVzcG9uZFRvOlwid2luZG93XCIscmVzcG9uc2l2ZTpudWxsLHJvd3M6MSxydGw6ITEsc2xpZGU6XCJcIixzbGlkZXNQZXJSb3c6MSxzbGlkZXNUb1Nob3c6MSxzbGlkZXNUb1Njcm9sbDoxLHNwZWVkOjUwMCxzd2lwZTohMCxzd2lwZVRvU2xpZGU6ITEsdG91Y2hNb3ZlOiEwLHRvdWNoVGhyZXNob2xkOjUsdXNlQ1NTOiEwLHVzZVRyYW5zZm9ybTohMCx2YXJpYWJsZVdpZHRoOiExLHZlcnRpY2FsOiExLHZlcnRpY2FsU3dpcGluZzohMSx3YWl0Rm9yQW5pbWF0ZTohMCx6SW5kZXg6MWUzfSxlLmluaXRpYWxzPXthbmltYXRpbmc6ITEsZHJhZ2dpbmc6ITEsYXV0b1BsYXlUaW1lcjpudWxsLGN1cnJlbnREaXJlY3Rpb246MCxjdXJyZW50TGVmdDpudWxsLGN1cnJlbnRTbGlkZTowLGRpcmVjdGlvbjoxLCRkb3RzOm51bGwsbGlzdFdpZHRoOm51bGwsbGlzdEhlaWdodDpudWxsLGxvYWRJbmRleDowLCRuZXh0QXJyb3c6bnVsbCwkcHJldkFycm93Om51bGwsc2xpZGVDb3VudDpudWxsLHNsaWRlV2lkdGg6bnVsbCwkc2xpZGVUcmFjazpudWxsLCRzbGlkZXM6bnVsbCxzbGlkaW5nOiExLHNsaWRlT2Zmc2V0OjAsc3dpcGVMZWZ0Om51bGwsJGxpc3Q6bnVsbCx0b3VjaE9iamVjdDp7fSx0cmFuc2Zvcm1zRW5hYmxlZDohMSx1bnNsaWNrZWQ6ITF9LGEuZXh0ZW5kKGUsZS5pbml0aWFscyksZS5hY3RpdmVCcmVha3BvaW50PW51bGwsZS5hbmltVHlwZT1udWxsLGUuYW5pbVByb3A9bnVsbCxlLmJyZWFrcG9pbnRzPVtdLGUuYnJlYWtwb2ludFNldHRpbmdzPVtdLGUuY3NzVHJhbnNpdGlvbnM9ITEsZS5mb2N1c3NlZD0hMSxlLmludGVycnVwdGVkPSExLGUuaGlkZGVuPVwiaGlkZGVuXCIsZS5wYXVzZWQ9ITAsZS5wb3NpdGlvblByb3A9bnVsbCxlLnJlc3BvbmRUbz1udWxsLGUucm93Q291bnQ9MSxlLnNob3VsZENsaWNrPSEwLGUuJHNsaWRlcj1hKGMpLGUuJHNsaWRlc0NhY2hlPW51bGwsZS50cmFuc2Zvcm1UeXBlPW51bGwsZS50cmFuc2l0aW9uVHlwZT1udWxsLGUudmlzaWJpbGl0eUNoYW5nZT1cInZpc2liaWxpdHljaGFuZ2VcIixlLndpbmRvd1dpZHRoPTAsZS53aW5kb3dUaW1lcj1udWxsLGY9YShjKS5kYXRhKFwic2xpY2tcIil8fHt9LGUub3B0aW9ucz1hLmV4dGVuZCh7fSxlLmRlZmF1bHRzLGQsZiksZS5jdXJyZW50U2xpZGU9ZS5vcHRpb25zLmluaXRpYWxTbGlkZSxlLm9yaWdpbmFsU2V0dGluZ3M9ZS5vcHRpb25zLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4/KGUuaGlkZGVuPVwibW96SGlkZGVuXCIsZS52aXNpYmlsaXR5Q2hhbmdlPVwibW96dmlzaWJpbGl0eWNoYW5nZVwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuJiYoZS5oaWRkZW49XCJ3ZWJraXRIaWRkZW5cIixlLnZpc2liaWxpdHlDaGFuZ2U9XCJ3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlXCIpLGUuYXV0b1BsYXk9YS5wcm94eShlLmF1dG9QbGF5LGUpLGUuYXV0b1BsYXlDbGVhcj1hLnByb3h5KGUuYXV0b1BsYXlDbGVhcixlKSxlLmF1dG9QbGF5SXRlcmF0b3I9YS5wcm94eShlLmF1dG9QbGF5SXRlcmF0b3IsZSksZS5jaGFuZ2VTbGlkZT1hLnByb3h5KGUuY2hhbmdlU2xpZGUsZSksZS5jbGlja0hhbmRsZXI9YS5wcm94eShlLmNsaWNrSGFuZGxlcixlKSxlLnNlbGVjdEhhbmRsZXI9YS5wcm94eShlLnNlbGVjdEhhbmRsZXIsZSksZS5zZXRQb3NpdGlvbj1hLnByb3h5KGUuc2V0UG9zaXRpb24sZSksZS5zd2lwZUhhbmRsZXI9YS5wcm94eShlLnN3aXBlSGFuZGxlcixlKSxlLmRyYWdIYW5kbGVyPWEucHJveHkoZS5kcmFnSGFuZGxlcixlKSxlLmtleUhhbmRsZXI9YS5wcm94eShlLmtleUhhbmRsZXIsZSksZS5pbnN0YW5jZVVpZD1iKyssZS5odG1sRXhwcj0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC8sZS5yZWdpc3RlckJyZWFrcG9pbnRzKCksZS5pbml0KCEwKX12YXIgYj0wO3JldHVybiBjfSgpLGIucHJvdG90eXBlLmFjdGl2YXRlQURBPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczthLiRzbGlkZVRyYWNrLmZpbmQoXCIuc2xpY2stYWN0aXZlXCIpLmF0dHIoe1wiYXJpYS1oaWRkZW5cIjpcImZhbHNlXCJ9KS5maW5kKFwiYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0XCIpLmF0dHIoe3RhYmluZGV4OlwiMFwifSl9LGIucHJvdG90eXBlLmFkZFNsaWRlPWIucHJvdG90eXBlLnNsaWNrQWRkPWZ1bmN0aW9uKGIsYyxkKXt2YXIgZT10aGlzO2lmKFwiYm9vbGVhblwiPT10eXBlb2YgYylkPWMsYz1udWxsO2Vsc2UgaWYoMD5jfHxjPj1lLnNsaWRlQ291bnQpcmV0dXJuITE7ZS51bmxvYWQoKSxcIm51bWJlclwiPT10eXBlb2YgYz8wPT09YyYmMD09PWUuJHNsaWRlcy5sZW5ndGg/YShiKS5hcHBlbmRUbyhlLiRzbGlkZVRyYWNrKTpkP2EoYikuaW5zZXJ0QmVmb3JlKGUuJHNsaWRlcy5lcShjKSk6YShiKS5pbnNlcnRBZnRlcihlLiRzbGlkZXMuZXEoYykpOmQ9PT0hMD9hKGIpLnByZXBlbmRUbyhlLiRzbGlkZVRyYWNrKTphKGIpLmFwcGVuZFRvKGUuJHNsaWRlVHJhY2spLGUuJHNsaWRlcz1lLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSksZS4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLGUuJHNsaWRlVHJhY2suYXBwZW5kKGUuJHNsaWRlcyksZS4kc2xpZGVzLmVhY2goZnVuY3Rpb24oYixjKXthKGMpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIsYil9KSxlLiRzbGlkZXNDYWNoZT1lLiRzbGlkZXMsZS5yZWluaXQoKX0sYi5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodD1mdW5jdGlvbigpe3ZhciBhPXRoaXM7aWYoMT09PWEub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmEub3B0aW9ucy5hZGFwdGl2ZUhlaWdodD09PSEwJiZhLm9wdGlvbnMudmVydGljYWw9PT0hMSl7dmFyIGI9YS4kc2xpZGVzLmVxKGEuY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCghMCk7YS4kbGlzdC5hbmltYXRlKHtoZWlnaHQ6Yn0sYS5vcHRpb25zLnNwZWVkKX19LGIucHJvdG90eXBlLmFuaW1hdGVTbGlkZT1mdW5jdGlvbihiLGMpe3ZhciBkPXt9LGU9dGhpcztlLmFuaW1hdGVIZWlnaHQoKSxlLm9wdGlvbnMucnRsPT09ITAmJmUub3B0aW9ucy52ZXJ0aWNhbD09PSExJiYoYj0tYiksZS50cmFuc2Zvcm1zRW5hYmxlZD09PSExP2Uub3B0aW9ucy52ZXJ0aWNhbD09PSExP2UuJHNsaWRlVHJhY2suYW5pbWF0ZSh7bGVmdDpifSxlLm9wdGlvbnMuc3BlZWQsZS5vcHRpb25zLmVhc2luZyxjKTplLiRzbGlkZVRyYWNrLmFuaW1hdGUoe3RvcDpifSxlLm9wdGlvbnMuc3BlZWQsZS5vcHRpb25zLmVhc2luZyxjKTplLmNzc1RyYW5zaXRpb25zPT09ITE/KGUub3B0aW9ucy5ydGw9PT0hMCYmKGUuY3VycmVudExlZnQ9LWUuY3VycmVudExlZnQpLGEoe2FuaW1TdGFydDplLmN1cnJlbnRMZWZ0fSkuYW5pbWF0ZSh7YW5pbVN0YXJ0OmJ9LHtkdXJhdGlvbjplLm9wdGlvbnMuc3BlZWQsZWFzaW5nOmUub3B0aW9ucy5lYXNpbmcsc3RlcDpmdW5jdGlvbihhKXthPU1hdGguY2VpbChhKSxlLm9wdGlvbnMudmVydGljYWw9PT0hMT8oZFtlLmFuaW1UeXBlXT1cInRyYW5zbGF0ZShcIithK1wicHgsIDBweClcIixlLiRzbGlkZVRyYWNrLmNzcyhkKSk6KGRbZS5hbmltVHlwZV09XCJ0cmFuc2xhdGUoMHB4LFwiK2ErXCJweClcIixlLiRzbGlkZVRyYWNrLmNzcyhkKSl9LGNvbXBsZXRlOmZ1bmN0aW9uKCl7YyYmYy5jYWxsKCl9fSkpOihlLmFwcGx5VHJhbnNpdGlvbigpLGI9TWF0aC5jZWlsKGIpLGUub3B0aW9ucy52ZXJ0aWNhbD09PSExP2RbZS5hbmltVHlwZV09XCJ0cmFuc2xhdGUzZChcIitiK1wicHgsIDBweCwgMHB4KVwiOmRbZS5hbmltVHlwZV09XCJ0cmFuc2xhdGUzZCgwcHgsXCIrYitcInB4LCAwcHgpXCIsZS4kc2xpZGVUcmFjay5jc3MoZCksYyYmc2V0VGltZW91dChmdW5jdGlvbigpe2UuZGlzYWJsZVRyYW5zaXRpb24oKSxjLmNhbGwoKX0sZS5vcHRpb25zLnNwZWVkKSl9LGIucHJvdG90eXBlLmdldE5hdlRhcmdldD1mdW5jdGlvbigpe3ZhciBiPXRoaXMsYz1iLm9wdGlvbnMuYXNOYXZGb3I7cmV0dXJuIGMmJm51bGwhPT1jJiYoYz1hKGMpLm5vdChiLiRzbGlkZXIpKSxjfSxiLnByb3RvdHlwZS5hc05hdkZvcj1mdW5jdGlvbihiKXt2YXIgYz10aGlzLGQ9Yy5nZXROYXZUYXJnZXQoKTtudWxsIT09ZCYmXCJvYmplY3RcIj09dHlwZW9mIGQmJmQuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcykuc2xpY2soXCJnZXRTbGlja1wiKTtjLnVuc2xpY2tlZHx8Yy5zbGlkZUhhbmRsZXIoYiwhMCl9KX0sYi5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz17fTtiLm9wdGlvbnMuZmFkZT09PSExP2NbYi50cmFuc2l0aW9uVHlwZV09Yi50cmFuc2Zvcm1UeXBlK1wiIFwiK2Iub3B0aW9ucy5zcGVlZCtcIm1zIFwiK2Iub3B0aW9ucy5jc3NFYXNlOmNbYi50cmFuc2l0aW9uVHlwZV09XCJvcGFjaXR5IFwiK2Iub3B0aW9ucy5zcGVlZCtcIm1zIFwiK2Iub3B0aW9ucy5jc3NFYXNlLGIub3B0aW9ucy5mYWRlPT09ITE/Yi4kc2xpZGVUcmFjay5jc3MoYyk6Yi4kc2xpZGVzLmVxKGEpLmNzcyhjKX0sYi5wcm90b3R5cGUuYXV0b1BsYXk9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2EuYXV0b1BsYXlDbGVhcigpLGEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoYS5hdXRvUGxheVRpbWVyPXNldEludGVydmFsKGEuYXV0b1BsYXlJdGVyYXRvcixhLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCkpfSxiLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczthLmF1dG9QbGF5VGltZXImJmNsZWFySW50ZXJ2YWwoYS5hdXRvUGxheVRpbWVyKX0sYi5wcm90b3R5cGUuYXV0b1BsYXlJdGVyYXRvcj1mdW5jdGlvbigpe3ZhciBhPXRoaXMsYj1hLmN1cnJlbnRTbGlkZSthLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7YS5wYXVzZWR8fGEuaW50ZXJydXB0ZWR8fGEuZm9jdXNzZWR8fChhLm9wdGlvbnMuaW5maW5pdGU9PT0hMSYmKDE9PT1hLmRpcmVjdGlvbiYmYS5jdXJyZW50U2xpZGUrMT09PWEuc2xpZGVDb3VudC0xP2EuZGlyZWN0aW9uPTA6MD09PWEuZGlyZWN0aW9uJiYoYj1hLmN1cnJlbnRTbGlkZS1hLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsYS5jdXJyZW50U2xpZGUtMT09PTAmJihhLmRpcmVjdGlvbj0xKSkpLGEuc2xpZGVIYW5kbGVyKGIpKX0sYi5wcm90b3R5cGUuYnVpbGRBcnJvd3M9ZnVuY3Rpb24oKXt2YXIgYj10aGlzO2Iub3B0aW9ucy5hcnJvd3M9PT0hMCYmKGIuJHByZXZBcnJvdz1hKGIub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKFwic2xpY2stYXJyb3dcIiksYi4kbmV4dEFycm93PWEoYi5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoXCJzbGljay1hcnJvd1wiKSxiLnNsaWRlQ291bnQ+Yi5vcHRpb25zLnNsaWRlc1RvU2hvdz8oYi4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2staGlkZGVuXCIpLnJlbW92ZUF0dHIoXCJhcmlhLWhpZGRlbiB0YWJpbmRleFwiKSxiLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIHRhYmluZGV4XCIpLGIuaHRtbEV4cHIudGVzdChiLm9wdGlvbnMucHJldkFycm93KSYmYi4kcHJldkFycm93LnByZXBlbmRUbyhiLm9wdGlvbnMuYXBwZW5kQXJyb3dzKSxiLmh0bWxFeHByLnRlc3QoYi5vcHRpb25zLm5leHRBcnJvdykmJmIuJG5leHRBcnJvdy5hcHBlbmRUbyhiLm9wdGlvbnMuYXBwZW5kQXJyb3dzKSxiLm9wdGlvbnMuaW5maW5pdGUhPT0hMCYmYi4kcHJldkFycm93LmFkZENsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIikpOmIuJHByZXZBcnJvdy5hZGQoYi4kbmV4dEFycm93KS5hZGRDbGFzcyhcInNsaWNrLWhpZGRlblwiKS5hdHRyKHtcImFyaWEtZGlzYWJsZWRcIjpcInRydWVcIix0YWJpbmRleDpcIi0xXCJ9KSl9LGIucHJvdG90eXBlLmJ1aWxkRG90cz1mdW5jdGlvbigpe3ZhciBjLGQsYj10aGlzO2lmKGIub3B0aW9ucy5kb3RzPT09ITAmJmIuc2xpZGVDb3VudD5iLm9wdGlvbnMuc2xpZGVzVG9TaG93KXtmb3IoYi4kc2xpZGVyLmFkZENsYXNzKFwic2xpY2stZG90dGVkXCIpLGQ9YShcIjx1bCAvPlwiKS5hZGRDbGFzcyhiLm9wdGlvbnMuZG90c0NsYXNzKSxjPTA7Yzw9Yi5nZXREb3RDb3VudCgpO2MrPTEpZC5hcHBlbmQoYShcIjxsaSAvPlwiKS5hcHBlbmQoYi5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsYixjKSkpO2IuJGRvdHM9ZC5hcHBlbmRUbyhiLm9wdGlvbnMuYXBwZW5kRG90cyksYi4kZG90cy5maW5kKFwibGlcIikuZmlyc3QoKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpfX0sYi5wcm90b3R5cGUuYnVpbGRPdXQ9ZnVuY3Rpb24oKXt2YXIgYj10aGlzO2IuJHNsaWRlcz1iLiRzbGlkZXIuY2hpbGRyZW4oYi5vcHRpb25zLnNsaWRlK1wiOm5vdCguc2xpY2stY2xvbmVkKVwiKS5hZGRDbGFzcyhcInNsaWNrLXNsaWRlXCIpLGIuc2xpZGVDb3VudD1iLiRzbGlkZXMubGVuZ3RoLGIuJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGIsYyl7YShjKS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiLGIpLmRhdGEoXCJvcmlnaW5hbFN0eWxpbmdcIixhKGMpLmF0dHIoXCJzdHlsZVwiKXx8XCJcIil9KSxiLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay1zbGlkZXJcIiksYi4kc2xpZGVUcmFjaz0wPT09Yi5zbGlkZUNvdW50P2EoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhiLiRzbGlkZXIpOmIuJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCksYi4kbGlzdD1iLiRzbGlkZVRyYWNrLndyYXAoJzxkaXYgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpLGIuJHNsaWRlVHJhY2suY3NzKFwib3BhY2l0eVwiLDApLChiLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwfHxiLm9wdGlvbnMuc3dpcGVUb1NsaWRlPT09ITApJiYoYi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPTEpLGEoXCJpbWdbZGF0YS1sYXp5XVwiLGIuJHNsaWRlcikubm90KFwiW3NyY11cIikuYWRkQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpLGIuc2V0dXBJbmZpbml0ZSgpLGIuYnVpbGRBcnJvd3MoKSxiLmJ1aWxkRG90cygpLGIudXBkYXRlRG90cygpLGIuc2V0U2xpZGVDbGFzc2VzKFwibnVtYmVyXCI9PXR5cGVvZiBiLmN1cnJlbnRTbGlkZT9iLmN1cnJlbnRTbGlkZTowKSxiLm9wdGlvbnMuZHJhZ2dhYmxlPT09ITAmJmIuJGxpc3QuYWRkQ2xhc3MoXCJkcmFnZ2FibGVcIil9LGIucHJvdG90eXBlLmJ1aWxkUm93cz1mdW5jdGlvbigpe3ZhciBiLGMsZCxlLGYsZyxoLGE9dGhpcztpZihlPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxnPWEuJHNsaWRlci5jaGlsZHJlbigpLGEub3B0aW9ucy5yb3dzPjEpe2ZvcihoPWEub3B0aW9ucy5zbGlkZXNQZXJSb3cqYS5vcHRpb25zLnJvd3MsZj1NYXRoLmNlaWwoZy5sZW5ndGgvaCksYj0wO2Y+YjtiKyspe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKGM9MDtjPGEub3B0aW9ucy5yb3dzO2MrKyl7dmFyIGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmb3IoZD0wO2Q8YS5vcHRpb25zLnNsaWRlc1BlclJvdztkKyspe3ZhciBrPWIqaCsoYyphLm9wdGlvbnMuc2xpZGVzUGVyUm93K2QpO2cuZ2V0KGspJiZqLmFwcGVuZENoaWxkKGcuZ2V0KGspKX1pLmFwcGVuZENoaWxkKGopfWUuYXBwZW5kQ2hpbGQoaSl9YS4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKGUpLGEuJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jc3Moe3dpZHRoOjEwMC9hLm9wdGlvbnMuc2xpZGVzUGVyUm93K1wiJVwiLGRpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0pfX0sYi5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlPWZ1bmN0aW9uKGIsYyl7dmFyIGUsZixnLGQ9dGhpcyxoPSExLGk9ZC4kc2xpZGVyLndpZHRoKCksaj13aW5kb3cuaW5uZXJXaWR0aHx8YSh3aW5kb3cpLndpZHRoKCk7aWYoXCJ3aW5kb3dcIj09PWQucmVzcG9uZFRvP2c9ajpcInNsaWRlclwiPT09ZC5yZXNwb25kVG8/Zz1pOlwibWluXCI9PT1kLnJlc3BvbmRUbyYmKGc9TWF0aC5taW4oaixpKSksZC5vcHRpb25zLnJlc3BvbnNpdmUmJmQub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCYmbnVsbCE9PWQub3B0aW9ucy5yZXNwb25zaXZlKXtmPW51bGw7Zm9yKGUgaW4gZC5icmVha3BvaW50cylkLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGUpJiYoZC5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0PT09ITE/ZzxkLmJyZWFrcG9pbnRzW2VdJiYoZj1kLmJyZWFrcG9pbnRzW2VdKTpnPmQuYnJlYWtwb2ludHNbZV0mJihmPWQuYnJlYWtwb2ludHNbZV0pKTtudWxsIT09Zj9udWxsIT09ZC5hY3RpdmVCcmVha3BvaW50PyhmIT09ZC5hY3RpdmVCcmVha3BvaW50fHxjKSYmKGQuYWN0aXZlQnJlYWtwb2ludD1mLFwidW5zbGlja1wiPT09ZC5icmVha3BvaW50U2V0dGluZ3NbZl0/ZC51bnNsaWNrKGYpOihkLm9wdGlvbnM9YS5leHRlbmQoe30sZC5vcmlnaW5hbFNldHRpbmdzLGQuYnJlYWtwb2ludFNldHRpbmdzW2ZdKSxiPT09ITAmJihkLmN1cnJlbnRTbGlkZT1kLm9wdGlvbnMuaW5pdGlhbFNsaWRlKSxkLnJlZnJlc2goYikpLGg9Zik6KGQuYWN0aXZlQnJlYWtwb2ludD1mLFwidW5zbGlja1wiPT09ZC5icmVha3BvaW50U2V0dGluZ3NbZl0/ZC51bnNsaWNrKGYpOihkLm9wdGlvbnM9YS5leHRlbmQoe30sZC5vcmlnaW5hbFNldHRpbmdzLGQuYnJlYWtwb2ludFNldHRpbmdzW2ZdKSxiPT09ITAmJihkLmN1cnJlbnRTbGlkZT1kLm9wdGlvbnMuaW5pdGlhbFNsaWRlKSxkLnJlZnJlc2goYikpLGg9Zik6bnVsbCE9PWQuYWN0aXZlQnJlYWtwb2ludCYmKGQuYWN0aXZlQnJlYWtwb2ludD1udWxsLGQub3B0aW9ucz1kLm9yaWdpbmFsU2V0dGluZ3MsYj09PSEwJiYoZC5jdXJyZW50U2xpZGU9ZC5vcHRpb25zLmluaXRpYWxTbGlkZSksZC5yZWZyZXNoKGIpLGg9ZiksYnx8aD09PSExfHxkLiRzbGlkZXIudHJpZ2dlcihcImJyZWFrcG9pbnRcIixbZCxoXSl9fSxiLnByb3RvdHlwZS5jaGFuZ2VTbGlkZT1mdW5jdGlvbihiLGMpe3ZhciBmLGcsaCxkPXRoaXMsZT1hKGIuY3VycmVudFRhcmdldCk7c3dpdGNoKGUuaXMoXCJhXCIpJiZiLnByZXZlbnREZWZhdWx0KCksZS5pcyhcImxpXCIpfHwoZT1lLmNsb3Nlc3QoXCJsaVwiKSksaD1kLnNsaWRlQ291bnQlZC5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIT09MCxmPWg/MDooZC5zbGlkZUNvdW50LWQuY3VycmVudFNsaWRlKSVkLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsYi5kYXRhLm1lc3NhZ2Upe2Nhc2VcInByZXZpb3VzXCI6Zz0wPT09Zj9kLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6ZC5vcHRpb25zLnNsaWRlc1RvU2hvdy1mLGQuc2xpZGVDb3VudD5kLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZkLnNsaWRlSGFuZGxlcihkLmN1cnJlbnRTbGlkZS1nLCExLGMpO2JyZWFrO2Nhc2VcIm5leHRcIjpnPTA9PT1mP2Qub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDpmLGQuc2xpZGVDb3VudD5kLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZkLnNsaWRlSGFuZGxlcihkLmN1cnJlbnRTbGlkZStnLCExLGMpO2JyZWFrO2Nhc2VcImluZGV4XCI6dmFyIGk9MD09PWIuZGF0YS5pbmRleD8wOmIuZGF0YS5pbmRleHx8ZS5pbmRleCgpKmQub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtkLnNsaWRlSGFuZGxlcihkLmNoZWNrTmF2aWdhYmxlKGkpLCExLGMpLGUuY2hpbGRyZW4oKS50cmlnZ2VyKFwiZm9jdXNcIik7YnJlYWs7ZGVmYXVsdDpyZXR1cm59fSxiLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZT1mdW5jdGlvbihhKXt2YXIgYyxkLGI9dGhpcztpZihjPWIuZ2V0TmF2aWdhYmxlSW5kZXhlcygpLGQ9MCxhPmNbYy5sZW5ndGgtMV0pYT1jW2MubGVuZ3RoLTFdO2Vsc2UgZm9yKHZhciBlIGluIGMpe2lmKGE8Y1tlXSl7YT1kO2JyZWFrfWQ9Y1tlXX1yZXR1cm4gYX0sYi5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cz1mdW5jdGlvbigpe3ZhciBiPXRoaXM7Yi5vcHRpb25zLmRvdHMmJm51bGwhPT1iLiRkb3RzJiZhKFwibGlcIixiLiRkb3RzKS5vZmYoXCJjbGljay5zbGlja1wiLGIuY2hhbmdlU2xpZGUpLm9mZihcIm1vdXNlZW50ZXIuc2xpY2tcIixhLnByb3h5KGIuaW50ZXJydXB0LGIsITApKS5vZmYoXCJtb3VzZWxlYXZlLnNsaWNrXCIsYS5wcm94eShiLmludGVycnVwdCxiLCExKSksYi4kc2xpZGVyLm9mZihcImZvY3VzLnNsaWNrIGJsdXIuc2xpY2tcIiksYi5vcHRpb25zLmFycm93cz09PSEwJiZiLnNsaWRlQ291bnQ+Yi5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGIuJHByZXZBcnJvdyYmYi4kcHJldkFycm93Lm9mZihcImNsaWNrLnNsaWNrXCIsYi5jaGFuZ2VTbGlkZSksYi4kbmV4dEFycm93JiZiLiRuZXh0QXJyb3cub2ZmKFwiY2xpY2suc2xpY2tcIixiLmNoYW5nZVNsaWRlKSksYi4kbGlzdC5vZmYoXCJ0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGlja1wiLGIuc3dpcGVIYW5kbGVyKSxiLiRsaXN0Lm9mZihcInRvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2tcIixiLnN3aXBlSGFuZGxlciksYi4kbGlzdC5vZmYoXCJ0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrXCIsYi5zd2lwZUhhbmRsZXIpLGIuJGxpc3Qub2ZmKFwidG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGlja1wiLGIuc3dpcGVIYW5kbGVyKSxiLiRsaXN0Lm9mZihcImNsaWNrLnNsaWNrXCIsYi5jbGlja0hhbmRsZXIpLGEoZG9jdW1lbnQpLm9mZihiLnZpc2liaWxpdHlDaGFuZ2UsYi52aXNpYmlsaXR5KSxiLmNsZWFuVXBTbGlkZUV2ZW50cygpLGIub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJmIuJGxpc3Qub2ZmKFwia2V5ZG93bi5zbGlja1wiLGIua2V5SGFuZGxlciksYi5vcHRpb25zLmZvY3VzT25TZWxlY3Q9PT0hMCYmYShiLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZihcImNsaWNrLnNsaWNrXCIsYi5zZWxlY3RIYW5kbGVyKSxhKHdpbmRvdykub2ZmKFwib3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stXCIrYi5pbnN0YW5jZVVpZCxiLm9yaWVudGF0aW9uQ2hhbmdlKSxhKHdpbmRvdykub2ZmKFwicmVzaXplLnNsaWNrLnNsaWNrLVwiK2IuaW5zdGFuY2VVaWQsYi5yZXNpemUpLGEoXCJbZHJhZ2dhYmxlIT10cnVlXVwiLGIuJHNsaWRlVHJhY2spLm9mZihcImRyYWdzdGFydFwiLGIucHJldmVudERlZmF1bHQpLGEod2luZG93KS5vZmYoXCJsb2FkLnNsaWNrLnNsaWNrLVwiK2IuaW5zdGFuY2VVaWQsYi5zZXRQb3NpdGlvbiksYShkb2N1bWVudCkub2ZmKFwicmVhZHkuc2xpY2suc2xpY2stXCIrYi5pbnN0YW5jZVVpZCxiLnNldFBvc2l0aW9uKX0sYi5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcztiLiRsaXN0Lm9mZihcIm1vdXNlZW50ZXIuc2xpY2tcIixhLnByb3h5KGIuaW50ZXJydXB0LGIsITApKSxiLiRsaXN0Lm9mZihcIm1vdXNlbGVhdmUuc2xpY2tcIixhLnByb3h5KGIuaW50ZXJydXB0LGIsITEpKX0sYi5wcm90b3R5cGUuY2xlYW5VcFJvd3M9ZnVuY3Rpb24oKXt2YXIgYixhPXRoaXM7YS5vcHRpb25zLnJvd3M+MSYmKGI9YS4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKSxiLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxhLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQoYikpfSxiLnByb3RvdHlwZS5jbGlja0hhbmRsZXI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztiLnNob3VsZENsaWNrPT09ITEmJihhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLGEuc3RvcFByb3BhZ2F0aW9uKCksYS5wcmV2ZW50RGVmYXVsdCgpKX0sYi5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbihiKXt2YXIgYz10aGlzO2MuYXV0b1BsYXlDbGVhcigpLGMudG91Y2hPYmplY3Q9e30sYy5jbGVhblVwRXZlbnRzKCksYShcIi5zbGljay1jbG9uZWRcIixjLiRzbGlkZXIpLmRldGFjaCgpLGMuJGRvdHMmJmMuJGRvdHMucmVtb3ZlKCksYy4kcHJldkFycm93JiZjLiRwcmV2QXJyb3cubGVuZ3RoJiYoYy4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuXCIpLnJlbW92ZUF0dHIoXCJhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4XCIpLmNzcyhcImRpc3BsYXlcIixcIlwiKSxjLmh0bWxFeHByLnRlc3QoYy5vcHRpb25zLnByZXZBcnJvdykmJmMuJHByZXZBcnJvdy5yZW1vdmUoKSksYy4kbmV4dEFycm93JiZjLiRuZXh0QXJyb3cubGVuZ3RoJiYoYy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuXCIpLnJlbW92ZUF0dHIoXCJhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4XCIpLmNzcyhcImRpc3BsYXlcIixcIlwiKSxjLmh0bWxFeHByLnRlc3QoYy5vcHRpb25zLm5leHRBcnJvdykmJmMuJG5leHRBcnJvdy5yZW1vdmUoKSksYy4kc2xpZGVzJiYoYy4kc2xpZGVzLnJlbW92ZUNsYXNzKFwic2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnRcIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuXCIpLnJlbW92ZUF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIpLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLmF0dHIoXCJzdHlsZVwiLGEodGhpcykuZGF0YShcIm9yaWdpbmFsU3R5bGluZ1wiKSl9KSxjLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCksYy4kc2xpZGVUcmFjay5kZXRhY2goKSxjLiRsaXN0LmRldGFjaCgpLGMuJHNsaWRlci5hcHBlbmQoYy4kc2xpZGVzKSksYy5jbGVhblVwUm93cygpLGMuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLXNsaWRlclwiKSxjLiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay1pbml0aWFsaXplZFwiKSxjLiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay1kb3R0ZWRcIiksYy51bnNsaWNrZWQ9ITAsYnx8Yy4kc2xpZGVyLnRyaWdnZXIoXCJkZXN0cm95XCIsW2NdKX0sYi5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb249ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPXt9O2NbYi50cmFuc2l0aW9uVHlwZV09XCJcIixiLm9wdGlvbnMuZmFkZT09PSExP2IuJHNsaWRlVHJhY2suY3NzKGMpOmIuJHNsaWRlcy5lcShhKS5jc3MoYyl9LGIucHJvdG90eXBlLmZhZGVTbGlkZT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7Yy5jc3NUcmFuc2l0aW9ucz09PSExPyhjLiRzbGlkZXMuZXEoYSkuY3NzKHt6SW5kZXg6Yy5vcHRpb25zLnpJbmRleH0pLGMuJHNsaWRlcy5lcShhKS5hbmltYXRlKHtvcGFjaXR5OjF9LGMub3B0aW9ucy5zcGVlZCxjLm9wdGlvbnMuZWFzaW5nLGIpKTooYy5hcHBseVRyYW5zaXRpb24oYSksYy4kc2xpZGVzLmVxKGEpLmNzcyh7b3BhY2l0eToxLHpJbmRleDpjLm9wdGlvbnMuekluZGV4fSksYiYmc2V0VGltZW91dChmdW5jdGlvbigpe2MuZGlzYWJsZVRyYW5zaXRpb24oYSksYi5jYWxsKCl9LGMub3B0aW9ucy5zcGVlZCkpfSxiLnByb3RvdHlwZS5mYWRlU2xpZGVPdXQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztiLmNzc1RyYW5zaXRpb25zPT09ITE/Yi4kc2xpZGVzLmVxKGEpLmFuaW1hdGUoe29wYWNpdHk6MCx6SW5kZXg6Yi5vcHRpb25zLnpJbmRleC0yfSxiLm9wdGlvbnMuc3BlZWQsYi5vcHRpb25zLmVhc2luZyk6KGIuYXBwbHlUcmFuc2l0aW9uKGEpLGIuJHNsaWRlcy5lcShhKS5jc3Moe29wYWNpdHk6MCx6SW5kZXg6Yi5vcHRpb25zLnpJbmRleC0yfSkpfSxiLnByb3RvdHlwZS5maWx0ZXJTbGlkZXM9Yi5wcm90b3R5cGUuc2xpY2tGaWx0ZXI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztudWxsIT09YSYmKGIuJHNsaWRlc0NhY2hlPWIuJHNsaWRlcyxiLnVubG9hZCgpLGIuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKSxiLiRzbGlkZXNDYWNoZS5maWx0ZXIoYSkuYXBwZW5kVG8oYi4kc2xpZGVUcmFjayksYi5yZWluaXQoKSl9LGIucHJvdG90eXBlLmZvY3VzSGFuZGxlcj1mdW5jdGlvbigpe3ZhciBiPXRoaXM7Yi4kc2xpZGVyLm9mZihcImZvY3VzLnNsaWNrIGJsdXIuc2xpY2tcIikub24oXCJmb2N1cy5zbGljayBibHVyLnNsaWNrXCIsXCIqOm5vdCguc2xpY2stYXJyb3cpXCIsZnVuY3Rpb24oYyl7Yy5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTt2YXIgZD1hKHRoaXMpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtiLm9wdGlvbnMucGF1c2VPbkZvY3VzJiYoYi5mb2N1c3NlZD1kLmlzKFwiOmZvY3VzXCIpLGIuYXV0b1BsYXkoKSl9LDApfSl9LGIucHJvdG90eXBlLmdldEN1cnJlbnQ9Yi5wcm90b3R5cGUuc2xpY2tDdXJyZW50U2xpZGU9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiBhLmN1cnJlbnRTbGlkZX0sYi5wcm90b3R5cGUuZ2V0RG90Q291bnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGI9MCxjPTAsZD0wO2lmKGEub3B0aW9ucy5pbmZpbml0ZT09PSEwKWZvcig7YjxhLnNsaWRlQ291bnQ7KSsrZCxiPWMrYS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLGMrPWEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDw9YS5vcHRpb25zLnNsaWRlc1RvU2hvdz9hLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6YS5vcHRpb25zLnNsaWRlc1RvU2hvdztlbHNlIGlmKGEub3B0aW9ucy5jZW50ZXJNb2RlPT09ITApZD1hLnNsaWRlQ291bnQ7ZWxzZSBpZihhLm9wdGlvbnMuYXNOYXZGb3IpZm9yKDtiPGEuc2xpZGVDb3VudDspKytkLGI9YythLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsYys9YS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPD1hLm9wdGlvbnMuc2xpZGVzVG9TaG93P2Eub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDphLm9wdGlvbnMuc2xpZGVzVG9TaG93O2Vsc2UgZD0xK01hdGguY2VpbCgoYS5zbGlkZUNvdW50LWEub3B0aW9ucy5zbGlkZXNUb1Nob3cpL2Eub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7cmV0dXJuIGQtMX0sYi5wcm90b3R5cGUuZ2V0TGVmdD1mdW5jdGlvbihhKXt2YXIgYyxkLGYsYj10aGlzLGU9MDtyZXR1cm4gYi5zbGlkZU9mZnNldD0wLGQ9Yi4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQoITApLGIub3B0aW9ucy5pbmZpbml0ZT09PSEwPyhiLnNsaWRlQ291bnQ+Yi5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGIuc2xpZGVPZmZzZXQ9Yi5zbGlkZVdpZHRoKmIub3B0aW9ucy5zbGlkZXNUb1Nob3cqLTEsZT1kKmIub3B0aW9ucy5zbGlkZXNUb1Nob3cqLTEpLGIuc2xpZGVDb3VudCViLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwhPT0wJiZhK2Iub3B0aW9ucy5zbGlkZXNUb1Njcm9sbD5iLnNsaWRlQ291bnQmJmIuc2xpZGVDb3VudD5iLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoYT5iLnNsaWRlQ291bnQ/KGIuc2xpZGVPZmZzZXQ9KGIub3B0aW9ucy5zbGlkZXNUb1Nob3ctKGEtYi5zbGlkZUNvdW50KSkqYi5zbGlkZVdpZHRoKi0xLGU9KGIub3B0aW9ucy5zbGlkZXNUb1Nob3ctKGEtYi5zbGlkZUNvdW50KSkqZCotMSk6KGIuc2xpZGVPZmZzZXQ9Yi5zbGlkZUNvdW50JWIub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCpiLnNsaWRlV2lkdGgqLTEsZT1iLnNsaWRlQ291bnQlYi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKmQqLTEpKSk6YStiLm9wdGlvbnMuc2xpZGVzVG9TaG93PmIuc2xpZGVDb3VudCYmKGIuc2xpZGVPZmZzZXQ9KGErYi5vcHRpb25zLnNsaWRlc1RvU2hvdy1iLnNsaWRlQ291bnQpKmIuc2xpZGVXaWR0aCxlPShhK2Iub3B0aW9ucy5zbGlkZXNUb1Nob3ctYi5zbGlkZUNvdW50KSpkKSxiLnNsaWRlQ291bnQ8PWIub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihiLnNsaWRlT2Zmc2V0PTAsZT0wKSxiLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwJiZiLm9wdGlvbnMuaW5maW5pdGU9PT0hMD9iLnNsaWRlT2Zmc2V0Kz1iLnNsaWRlV2lkdGgqTWF0aC5mbG9vcihiLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIpLWIuc2xpZGVXaWR0aDpiLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwJiYoYi5zbGlkZU9mZnNldD0wLGIuc2xpZGVPZmZzZXQrPWIuc2xpZGVXaWR0aCpNYXRoLmZsb29yKGIub3B0aW9ucy5zbGlkZXNUb1Nob3cvMikpLGM9Yi5vcHRpb25zLnZlcnRpY2FsPT09ITE/YSpiLnNsaWRlV2lkdGgqLTErYi5zbGlkZU9mZnNldDphKmQqLTErZSxiLm9wdGlvbnMudmFyaWFibGVXaWR0aD09PSEwJiYoZj1iLnNsaWRlQ291bnQ8PWIub3B0aW9ucy5zbGlkZXNUb1Nob3d8fGIub3B0aW9ucy5pbmZpbml0ZT09PSExP2IuJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoYSk6Yi4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5lcShhK2Iub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGM9Yi5vcHRpb25zLnJ0bD09PSEwP2ZbMF0/LTEqKGIuJHNsaWRlVHJhY2sud2lkdGgoKS1mWzBdLm9mZnNldExlZnQtZi53aWR0aCgpKTowOmZbMF0/LTEqZlswXS5vZmZzZXRMZWZ0OjAsYi5vcHRpb25zLmNlbnRlck1vZGU9PT0hMCYmKGY9Yi5zbGlkZUNvdW50PD1iLm9wdGlvbnMuc2xpZGVzVG9TaG93fHxiLm9wdGlvbnMuaW5maW5pdGU9PT0hMT9iLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmVxKGEpOmIuJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoYStiLm9wdGlvbnMuc2xpZGVzVG9TaG93KzEpLGM9Yi5vcHRpb25zLnJ0bD09PSEwP2ZbMF0/LTEqKGIuJHNsaWRlVHJhY2sud2lkdGgoKS1mWzBdLm9mZnNldExlZnQtZi53aWR0aCgpKTowOmZbMF0/LTEqZlswXS5vZmZzZXRMZWZ0OjAsYys9KGIuJGxpc3Qud2lkdGgoKS1mLm91dGVyV2lkdGgoKSkvMikpLGN9LGIucHJvdG90eXBlLmdldE9wdGlvbj1iLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBiLm9wdGlvbnNbYV19LGIucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXM9ZnVuY3Rpb24oKXt2YXIgZSxhPXRoaXMsYj0wLGM9MCxkPVtdO2ZvcihhLm9wdGlvbnMuaW5maW5pdGU9PT0hMT9lPWEuc2xpZGVDb3VudDooYj0tMSphLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsYz0tMSphLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsZT0yKmEuc2xpZGVDb3VudCk7ZT5iOylkLnB1c2goYiksYj1jK2Eub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCxjKz1hLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw8PWEub3B0aW9ucy5zbGlkZXNUb1Nob3c/YS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOmEub3B0aW9ucy5zbGlkZXNUb1Nob3c7cmV0dXJuIGR9LGIucHJvdG90eXBlLmdldFNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGIucHJvdG90eXBlLmdldFNsaWRlQ291bnQ9ZnVuY3Rpb24oKXt2YXIgYyxkLGUsYj10aGlzO3JldHVybiBlPWIub3B0aW9ucy5jZW50ZXJNb2RlPT09ITA/Yi5zbGlkZVdpZHRoKk1hdGguZmxvb3IoYi5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKTowLGIub3B0aW9ucy5zd2lwZVRvU2xpZGU9PT0hMD8oYi4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLXNsaWRlXCIpLmVhY2goZnVuY3Rpb24oYyxmKXtyZXR1cm4gZi5vZmZzZXRMZWZ0LWUrYShmKS5vdXRlcldpZHRoKCkvMj4tMSpiLnN3aXBlTGVmdD8oZD1mLCExKTp2b2lkIDB9KSxjPU1hdGguYWJzKGEoZCkuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIiktYi5jdXJyZW50U2xpZGUpfHwxKTpiLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGx9LGIucHJvdG90eXBlLmdvVG89Yi5wcm90b3R5cGUuc2xpY2tHb1RvPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztjLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOlwiaW5kZXhcIixpbmRleDpwYXJzZUludChhKX19LGIpfSxiLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7YShjLiRzbGlkZXIpLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIil8fChhKGMuJHNsaWRlcikuYWRkQ2xhc3MoXCJzbGljay1pbml0aWFsaXplZFwiKSxjLmJ1aWxkUm93cygpLGMuYnVpbGRPdXQoKSxjLnNldFByb3BzKCksYy5zdGFydExvYWQoKSxjLmxvYWRTbGlkZXIoKSxjLmluaXRpYWxpemVFdmVudHMoKSxjLnVwZGF0ZUFycm93cygpLGMudXBkYXRlRG90cygpLGMuY2hlY2tSZXNwb25zaXZlKCEwKSxjLmZvY3VzSGFuZGxlcigpKSxiJiZjLiRzbGlkZXIudHJpZ2dlcihcImluaXRcIixbY10pLGMub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJmMuaW5pdEFEQSgpLGMub3B0aW9ucy5hdXRvcGxheSYmKGMucGF1c2VkPSExLGMuYXV0b1BsYXkoKSl9LGIucHJvdG90eXBlLmluaXRBREE9ZnVuY3Rpb24oKXt2YXIgYj10aGlzO2IuJHNsaWRlcy5hZGQoYi4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLWNsb25lZFwiKSkuYXR0cih7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLHRhYmluZGV4OlwiLTFcIn0pLmZpbmQoXCJhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3RcIikuYXR0cih7dGFiaW5kZXg6XCItMVwifSksYi4kc2xpZGVUcmFjay5hdHRyKFwicm9sZVwiLFwibGlzdGJveFwiKSxiLiRzbGlkZXMubm90KGIuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1jbG9uZWRcIikpLmVhY2goZnVuY3Rpb24oYyl7YSh0aGlzKS5hdHRyKHtyb2xlOlwib3B0aW9uXCIsXCJhcmlhLWRlc2NyaWJlZGJ5XCI6XCJzbGljay1zbGlkZVwiK2IuaW5zdGFuY2VVaWQrY30pfSksbnVsbCE9PWIuJGRvdHMmJmIuJGRvdHMuYXR0cihcInJvbGVcIixcInRhYmxpc3RcIikuZmluZChcImxpXCIpLmVhY2goZnVuY3Rpb24oYyl7YSh0aGlzKS5hdHRyKHtyb2xlOlwicHJlc2VudGF0aW9uXCIsXCJhcmlhLXNlbGVjdGVkXCI6XCJmYWxzZVwiLFwiYXJpYS1jb250cm9sc1wiOlwibmF2aWdhdGlvblwiK2IuaW5zdGFuY2VVaWQrYyxpZDpcInNsaWNrLXNsaWRlXCIrYi5pbnN0YW5jZVVpZCtjfSl9KS5maXJzdCgpLmF0dHIoXCJhcmlhLXNlbGVjdGVkXCIsXCJ0cnVlXCIpLmVuZCgpLmZpbmQoXCJidXR0b25cIikuYXR0cihcInJvbGVcIixcImJ1dHRvblwiKS5lbmQoKS5jbG9zZXN0KFwiZGl2XCIpLmF0dHIoXCJyb2xlXCIsXCJ0b29sYmFyXCIpLGIuYWN0aXZhdGVBREEoKX0sYi5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczthLm9wdGlvbnMuYXJyb3dzPT09ITAmJmEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoYS4kcHJldkFycm93Lm9mZihcImNsaWNrLnNsaWNrXCIpLm9uKFwiY2xpY2suc2xpY2tcIix7bWVzc2FnZTpcInByZXZpb3VzXCJ9LGEuY2hhbmdlU2xpZGUpLGEuJG5leHRBcnJvdy5vZmYoXCJjbGljay5zbGlja1wiKS5vbihcImNsaWNrLnNsaWNrXCIse21lc3NhZ2U6XCJuZXh0XCJ9LGEuY2hhbmdlU2xpZGUpKX0sYi5wcm90b3R5cGUuaW5pdERvdEV2ZW50cz1mdW5jdGlvbigpe3ZhciBiPXRoaXM7Yi5vcHRpb25zLmRvdHM9PT0hMCYmYi5zbGlkZUNvdW50PmIub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmEoXCJsaVwiLGIuJGRvdHMpLm9uKFwiY2xpY2suc2xpY2tcIix7bWVzc2FnZTpcImluZGV4XCJ9LGIuY2hhbmdlU2xpZGUpLGIub3B0aW9ucy5kb3RzPT09ITAmJmIub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyPT09ITAmJmEoXCJsaVwiLGIuJGRvdHMpLm9uKFwibW91c2VlbnRlci5zbGlja1wiLGEucHJveHkoYi5pbnRlcnJ1cHQsYiwhMCkpLm9uKFwibW91c2VsZWF2ZS5zbGlja1wiLGEucHJveHkoYi5pbnRlcnJ1cHQsYiwhMSkpfSxiLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHM9ZnVuY3Rpb24oKXt2YXIgYj10aGlzO2Iub3B0aW9ucy5wYXVzZU9uSG92ZXImJihiLiRsaXN0Lm9uKFwibW91c2VlbnRlci5zbGlja1wiLGEucHJveHkoYi5pbnRlcnJ1cHQsYiwhMCkpLGIuJGxpc3Qub24oXCJtb3VzZWxlYXZlLnNsaWNrXCIsYS5wcm94eShiLmludGVycnVwdCxiLCExKSkpfSxiLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcztiLmluaXRBcnJvd0V2ZW50cygpLGIuaW5pdERvdEV2ZW50cygpLGIuaW5pdFNsaWRlRXZlbnRzKCksYi4kbGlzdC5vbihcInRvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrXCIse2FjdGlvbjpcInN0YXJ0XCJ9LGIuc3dpcGVIYW5kbGVyKSxiLiRsaXN0Lm9uKFwidG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGlja1wiLHthY3Rpb246XCJtb3ZlXCJ9LGIuc3dpcGVIYW5kbGVyKSxiLiRsaXN0Lm9uKFwidG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGlja1wiLHthY3Rpb246XCJlbmRcIn0sYi5zd2lwZUhhbmRsZXIpLGIuJGxpc3Qub24oXCJ0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrXCIse2FjdGlvbjpcImVuZFwifSxiLnN3aXBlSGFuZGxlciksYi4kbGlzdC5vbihcImNsaWNrLnNsaWNrXCIsYi5jbGlja0hhbmRsZXIpLGEoZG9jdW1lbnQpLm9uKGIudmlzaWJpbGl0eUNoYW5nZSxhLnByb3h5KGIudmlzaWJpbGl0eSxiKSksYi5vcHRpb25zLmFjY2Vzc2liaWxpdHk9PT0hMCYmYi4kbGlzdC5vbihcImtleWRvd24uc2xpY2tcIixiLmtleUhhbmRsZXIpLGIub3B0aW9ucy5mb2N1c09uU2VsZWN0PT09ITAmJmEoYi4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbihcImNsaWNrLnNsaWNrXCIsYi5zZWxlY3RIYW5kbGVyKSxhKHdpbmRvdykub24oXCJvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay1cIitiLmluc3RhbmNlVWlkLGEucHJveHkoYi5vcmllbnRhdGlvbkNoYW5nZSxiKSksYSh3aW5kb3cpLm9uKFwicmVzaXplLnNsaWNrLnNsaWNrLVwiK2IuaW5zdGFuY2VVaWQsYS5wcm94eShiLnJlc2l6ZSxiKSksYShcIltkcmFnZ2FibGUhPXRydWVdXCIsYi4kc2xpZGVUcmFjaykub24oXCJkcmFnc3RhcnRcIixiLnByZXZlbnREZWZhdWx0KSxhKHdpbmRvdykub24oXCJsb2FkLnNsaWNrLnNsaWNrLVwiK2IuaW5zdGFuY2VVaWQsYi5zZXRQb3NpdGlvbiksYShkb2N1bWVudCkub24oXCJyZWFkeS5zbGljay5zbGljay1cIitiLmluc3RhbmNlVWlkLGIuc2V0UG9zaXRpb24pfSxiLnByb3RvdHlwZS5pbml0VUk9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2Eub3B0aW9ucy5hcnJvd3M9PT0hMCYmYS5zbGlkZUNvdW50PmEub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihhLiRwcmV2QXJyb3cuc2hvdygpLGEuJG5leHRBcnJvdy5zaG93KCkpLGEub3B0aW9ucy5kb3RzPT09ITAmJmEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZhLiRkb3RzLnNob3coKX0sYi5wcm90b3R5cGUua2V5SGFuZGxlcj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2EudGFyZ2V0LnRhZ05hbWUubWF0Y2goXCJURVhUQVJFQXxJTlBVVHxTRUxFQ1RcIil8fCgzNz09PWEua2V5Q29kZSYmYi5vcHRpb25zLmFjY2Vzc2liaWxpdHk9PT0hMD9iLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOmIub3B0aW9ucy5ydGw9PT0hMD9cIm5leHRcIjpcInByZXZpb3VzXCJ9fSk6Mzk9PT1hLmtleUNvZGUmJmIub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJmIuY2hhbmdlU2xpZGUoe2RhdGE6e21lc3NhZ2U6Yi5vcHRpb25zLnJ0bD09PSEwP1wicHJldmlvdXNcIjpcIm5leHRcIn19KSl9LGIucHJvdG90eXBlLmxhenlMb2FkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZyhjKXthKFwiaW1nW2RhdGEtbGF6eV1cIixjKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxkPWEodGhpcykuYXR0cihcImRhdGEtbGF6eVwiKSxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7ZS5vbmxvYWQ9ZnVuY3Rpb24oKXtjLmFuaW1hdGUoe29wYWNpdHk6MH0sMTAwLGZ1bmN0aW9uKCl7Yy5hdHRyKFwic3JjXCIsZCkuYW5pbWF0ZSh7b3BhY2l0eToxfSwyMDAsZnVuY3Rpb24oKXtjLnJlbW92ZUF0dHIoXCJkYXRhLWxhenlcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpfSksYi4kc2xpZGVyLnRyaWdnZXIoXCJsYXp5TG9hZGVkXCIsW2IsYyxkXSl9KX0sZS5vbmVycm9yPWZ1bmN0aW9uKCl7Yy5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5XCIpLnJlbW92ZUNsYXNzKFwic2xpY2stbG9hZGluZ1wiKS5hZGRDbGFzcyhcInNsaWNrLWxhenlsb2FkLWVycm9yXCIpLGIuJHNsaWRlci50cmlnZ2VyKFwibGF6eUxvYWRFcnJvclwiLFtiLGMsZF0pfSxlLnNyYz1kfSl9dmFyIGMsZCxlLGYsYj10aGlzO2Iub3B0aW9ucy5jZW50ZXJNb2RlPT09ITA/Yi5vcHRpb25zLmluZmluaXRlPT09ITA/KGU9Yi5jdXJyZW50U2xpZGUrKGIub3B0aW9ucy5zbGlkZXNUb1Nob3cvMisxKSxmPWUrYi5vcHRpb25zLnNsaWRlc1RvU2hvdysyKTooZT1NYXRoLm1heCgwLGIuY3VycmVudFNsaWRlLShiLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIrMSkpLGY9MisoYi5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKzEpK2IuY3VycmVudFNsaWRlKTooZT1iLm9wdGlvbnMuaW5maW5pdGU/Yi5vcHRpb25zLnNsaWRlc1RvU2hvdytiLmN1cnJlbnRTbGlkZTpiLmN1cnJlbnRTbGlkZSxmPU1hdGguY2VpbChlK2Iub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGIub3B0aW9ucy5mYWRlPT09ITAmJihlPjAmJmUtLSxmPD1iLnNsaWRlQ291bnQmJmYrKykpLGM9Yi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIikuc2xpY2UoZSxmKSxnKGMpLGIuc2xpZGVDb3VudDw9Yi5vcHRpb25zLnNsaWRlc1RvU2hvdz8oZD1iLiRzbGlkZXIuZmluZChcIi5zbGljay1zbGlkZVwiKSxnKGQpKTpiLmN1cnJlbnRTbGlkZT49Yi5zbGlkZUNvdW50LWIub3B0aW9ucy5zbGlkZXNUb1Nob3c/KGQ9Yi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stY2xvbmVkXCIpLnNsaWNlKDAsYi5vcHRpb25zLnNsaWRlc1RvU2hvdyksZyhkKSk6MD09PWIuY3VycmVudFNsaWRlJiYoZD1iLiRzbGlkZXIuZmluZChcIi5zbGljay1jbG9uZWRcIikuc2xpY2UoLTEqYi5vcHRpb25zLnNsaWRlc1RvU2hvdyksZyhkKSl9LGIucHJvdG90eXBlLmxvYWRTbGlkZXI9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2Euc2V0UG9zaXRpb24oKSxhLiRzbGlkZVRyYWNrLmNzcyh7b3BhY2l0eToxfSksYS4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2stbG9hZGluZ1wiKSxhLmluaXRVSSgpLFwicHJvZ3Jlc3NpdmVcIj09PWEub3B0aW9ucy5sYXp5TG9hZCYmYS5wcm9ncmVzc2l2ZUxhenlMb2FkKCl9LGIucHJvdG90eXBlLm5leHQ9Yi5wcm90b3R5cGUuc2xpY2tOZXh0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpczthLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOlwibmV4dFwifX0pfSxiLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7YS5jaGVja1Jlc3BvbnNpdmUoKSxhLnNldFBvc2l0aW9uKCl9LGIucHJvdG90eXBlLnBhdXNlPWIucHJvdG90eXBlLnNsaWNrUGF1c2U9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2EuYXV0b1BsYXlDbGVhcigpLGEucGF1c2VkPSEwfSxiLnByb3RvdHlwZS5wbGF5PWIucHJvdG90eXBlLnNsaWNrUGxheT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7YS5hdXRvUGxheSgpLGEub3B0aW9ucy5hdXRvcGxheT0hMCxhLnBhdXNlZD0hMSxhLmZvY3Vzc2VkPSExLGEuaW50ZXJydXB0ZWQ9ITF9LGIucHJvdG90eXBlLnBvc3RTbGlkZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2IudW5zbGlja2VkfHwoYi4kc2xpZGVyLnRyaWdnZXIoXCJhZnRlckNoYW5nZVwiLFtiLGFdKSxiLmFuaW1hdGluZz0hMSxiLnNldFBvc2l0aW9uKCksYi5zd2lwZUxlZnQ9bnVsbCxiLm9wdGlvbnMuYXV0b3BsYXkmJmIuYXV0b1BsYXkoKSxiLm9wdGlvbnMuYWNjZXNzaWJpbGl0eT09PSEwJiZiLmluaXRBREEoKSl9LGIucHJvdG90eXBlLnByZXY9Yi5wcm90b3R5cGUuc2xpY2tQcmV2PWZ1bmN0aW9uKCl7dmFyIGE9dGhpczthLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOlwicHJldmlvdXNcIn19KX0sYi5wcm90b3R5cGUucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpfSxiLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkPWZ1bmN0aW9uKGIpe2I9Ynx8MTt2YXIgZSxmLGcsYz10aGlzLGQ9YShcImltZ1tkYXRhLWxhenldXCIsYy4kc2xpZGVyKTtkLmxlbmd0aD8oZT1kLmZpcnN0KCksZj1lLmF0dHIoXCJkYXRhLWxhenlcIiksZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLGcub25sb2FkPWZ1bmN0aW9uKCl7ZS5hdHRyKFwic3JjXCIsZikucmVtb3ZlQXR0cihcImRhdGEtbGF6eVwiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIiksYy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0PT09ITAmJmMuc2V0UG9zaXRpb24oKSxjLiRzbGlkZXIudHJpZ2dlcihcImxhenlMb2FkZWRcIixbYyxlLGZdKSxjLnByb2dyZXNzaXZlTGF6eUxvYWQoKX0sZy5vbmVycm9yPWZ1bmN0aW9uKCl7Mz5iP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjLnByb2dyZXNzaXZlTGF6eUxvYWQoYisxKX0sNTAwKTooZS5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5XCIpLnJlbW92ZUNsYXNzKFwic2xpY2stbG9hZGluZ1wiKS5hZGRDbGFzcyhcInNsaWNrLWxhenlsb2FkLWVycm9yXCIpLGMuJHNsaWRlci50cmlnZ2VyKFwibGF6eUxvYWRFcnJvclwiLFtjLGUsZl0pLGMucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpKX0sZy5zcmM9Zik6Yy4kc2xpZGVyLnRyaWdnZXIoXCJhbGxJbWFnZXNMb2FkZWRcIixbY10pfSxiLnByb3RvdHlwZS5yZWZyZXNoPWZ1bmN0aW9uKGIpe3ZhciBkLGUsYz10aGlzO2U9Yy5zbGlkZUNvdW50LWMub3B0aW9ucy5zbGlkZXNUb1Nob3csIWMub3B0aW9ucy5pbmZpbml0ZSYmYy5jdXJyZW50U2xpZGU+ZSYmKGMuY3VycmVudFNsaWRlPWUpLGMuc2xpZGVDb3VudDw9Yy5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGMuY3VycmVudFNsaWRlPTApLGQ9Yy5jdXJyZW50U2xpZGUsYy5kZXN0cm95KCEwKSxhLmV4dGVuZChjLGMuaW5pdGlhbHMse2N1cnJlbnRTbGlkZTpkfSksYy5pbml0KCksYnx8Yy5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcImluZGV4XCIsaW5kZXg6ZH19LCExKX0sYi5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cz1mdW5jdGlvbigpe3ZhciBjLGQsZSxiPXRoaXMsZj1iLm9wdGlvbnMucmVzcG9uc2l2ZXx8bnVsbDtpZihcImFycmF5XCI9PT1hLnR5cGUoZikmJmYubGVuZ3RoKXtiLnJlc3BvbmRUbz1iLm9wdGlvbnMucmVzcG9uZFRvfHxcIndpbmRvd1wiO2ZvcihjIGluIGYpaWYoZT1iLmJyZWFrcG9pbnRzLmxlbmd0aC0xLGQ9ZltjXS5icmVha3BvaW50LGYuaGFzT3duUHJvcGVydHkoYykpe2Zvcig7ZT49MDspYi5icmVha3BvaW50c1tlXSYmYi5icmVha3BvaW50c1tlXT09PWQmJmIuYnJlYWtwb2ludHMuc3BsaWNlKGUsMSksZS0tO2IuYnJlYWtwb2ludHMucHVzaChkKSxiLmJyZWFrcG9pbnRTZXR0aW5nc1tkXT1mW2NdLnNldHRpbmdzfWIuYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLGMpe3JldHVybiBiLm9wdGlvbnMubW9iaWxlRmlyc3Q/YS1jOmMtYX0pfX0sYi5wcm90b3R5cGUucmVpbml0PWZ1bmN0aW9uKCl7dmFyIGI9dGhpcztiLiRzbGlkZXM9Yi4kc2xpZGVUcmFjay5jaGlsZHJlbihiLm9wdGlvbnMuc2xpZGUpLmFkZENsYXNzKFwic2xpY2stc2xpZGVcIiksYi5zbGlkZUNvdW50PWIuJHNsaWRlcy5sZW5ndGgsYi5jdXJyZW50U2xpZGU+PWIuc2xpZGVDb3VudCYmMCE9PWIuY3VycmVudFNsaWRlJiYoYi5jdXJyZW50U2xpZGU9Yi5jdXJyZW50U2xpZGUtYi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSxiLnNsaWRlQ291bnQ8PWIub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihiLmN1cnJlbnRTbGlkZT0wKSxiLnJlZ2lzdGVyQnJlYWtwb2ludHMoKSxiLnNldFByb3BzKCksYi5zZXR1cEluZmluaXRlKCksYi5idWlsZEFycm93cygpLGIudXBkYXRlQXJyb3dzKCksYi5pbml0QXJyb3dFdmVudHMoKSxiLmJ1aWxkRG90cygpLGIudXBkYXRlRG90cygpLGIuaW5pdERvdEV2ZW50cygpLGIuY2xlYW5VcFNsaWRlRXZlbnRzKCksYi5pbml0U2xpZGVFdmVudHMoKSxiLmNoZWNrUmVzcG9uc2l2ZSghMSwhMCksYi5vcHRpb25zLmZvY3VzT25TZWxlY3Q9PT0hMCYmYShiLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKFwiY2xpY2suc2xpY2tcIixiLnNlbGVjdEhhbmRsZXIpLGIuc2V0U2xpZGVDbGFzc2VzKFwibnVtYmVyXCI9PXR5cGVvZiBiLmN1cnJlbnRTbGlkZT9iLmN1cnJlbnRTbGlkZTowKSxiLnNldFBvc2l0aW9uKCksYi5mb2N1c0hhbmRsZXIoKSxiLnBhdXNlZD0hYi5vcHRpb25zLmF1dG9wbGF5LGIuYXV0b1BsYXkoKSxiLiRzbGlkZXIudHJpZ2dlcihcInJlSW5pdFwiLFtiXSl9LGIucHJvdG90eXBlLnJlc2l6ZT1mdW5jdGlvbigpe3ZhciBiPXRoaXM7YSh3aW5kb3cpLndpZHRoKCkhPT1iLndpbmRvd1dpZHRoJiYoY2xlYXJUaW1lb3V0KGIud2luZG93RGVsYXkpLGIud2luZG93RGVsYXk9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLndpbmRvd1dpZHRoPWEod2luZG93KS53aWR0aCgpLGIuY2hlY2tSZXNwb25zaXZlKCksYi51bnNsaWNrZWR8fGIuc2V0UG9zaXRpb24oKX0sNTApKX0sYi5wcm90b3R5cGUucmVtb3ZlU2xpZGU9Yi5wcm90b3R5cGUuc2xpY2tSZW1vdmU9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXM7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhPyhiPWEsYT1iPT09ITA/MDpkLnNsaWRlQ291bnQtMSk6YT1iPT09ITA/LS1hOmEsZC5zbGlkZUNvdW50PDF8fDA+YXx8YT5kLnNsaWRlQ291bnQtMT8hMTooZC51bmxvYWQoKSxjPT09ITA/ZC4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpOmQuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShhKS5yZW1vdmUoKSxkLiRzbGlkZXM9ZC4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLGQuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKSxkLiRzbGlkZVRyYWNrLmFwcGVuZChkLiRzbGlkZXMpLGQuJHNsaWRlc0NhY2hlPWQuJHNsaWRlcyx2b2lkIGQucmVpbml0KCkpfSxiLnByb3RvdHlwZS5zZXRDU1M9ZnVuY3Rpb24oYSl7dmFyIGQsZSxiPXRoaXMsYz17fTtiLm9wdGlvbnMucnRsPT09ITAmJihhPS1hKSxkPVwibGVmdFwiPT1iLnBvc2l0aW9uUHJvcD9NYXRoLmNlaWwoYSkrXCJweFwiOlwiMHB4XCIsZT1cInRvcFwiPT1iLnBvc2l0aW9uUHJvcD9NYXRoLmNlaWwoYSkrXCJweFwiOlwiMHB4XCIsY1tiLnBvc2l0aW9uUHJvcF09YSxiLnRyYW5zZm9ybXNFbmFibGVkPT09ITE/Yi4kc2xpZGVUcmFjay5jc3MoYyk6KGM9e30sYi5jc3NUcmFuc2l0aW9ucz09PSExPyhjW2IuYW5pbVR5cGVdPVwidHJhbnNsYXRlKFwiK2QrXCIsIFwiK2UrXCIpXCIsYi4kc2xpZGVUcmFjay5jc3MoYykpOihjW2IuYW5pbVR5cGVdPVwidHJhbnNsYXRlM2QoXCIrZCtcIiwgXCIrZStcIiwgMHB4KVwiLGIuJHNsaWRlVHJhY2suY3NzKGMpKSl9LGIucHJvdG90eXBlLnNldERpbWVuc2lvbnM9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2Eub3B0aW9ucy52ZXJ0aWNhbD09PSExP2Eub3B0aW9ucy5jZW50ZXJNb2RlPT09ITAmJmEuJGxpc3QuY3NzKHtwYWRkaW5nOlwiMHB4IFwiK2Eub3B0aW9ucy5jZW50ZXJQYWRkaW5nfSk6KGEuJGxpc3QuaGVpZ2h0KGEuJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KCEwKSphLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxhLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwJiZhLiRsaXN0LmNzcyh7cGFkZGluZzphLm9wdGlvbnMuY2VudGVyUGFkZGluZytcIiAwcHhcIn0pKSxhLmxpc3RXaWR0aD1hLiRsaXN0LndpZHRoKCksYS5saXN0SGVpZ2h0PWEuJGxpc3QuaGVpZ2h0KCksYS5vcHRpb25zLnZlcnRpY2FsPT09ITEmJmEub3B0aW9ucy52YXJpYWJsZVdpZHRoPT09ITE/KGEuc2xpZGVXaWR0aD1NYXRoLmNlaWwoYS5saXN0V2lkdGgvYS5vcHRpb25zLnNsaWRlc1RvU2hvdyksYS4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoYS5zbGlkZVdpZHRoKmEuJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikubGVuZ3RoKSkpOmEub3B0aW9ucy52YXJpYWJsZVdpZHRoPT09ITA/YS4kc2xpZGVUcmFjay53aWR0aCg1ZTMqYS5zbGlkZUNvdW50KTooYS5zbGlkZVdpZHRoPU1hdGguY2VpbChhLmxpc3RXaWR0aCksYS4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKGEuJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KCEwKSphLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmxlbmd0aCkpKTt2YXIgYj1hLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKCEwKS1hLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO2Eub3B0aW9ucy52YXJpYWJsZVdpZHRoPT09ITEmJmEuJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikud2lkdGgoYS5zbGlkZVdpZHRoLWIpfSxiLnByb3RvdHlwZS5zZXRGYWRlPWZ1bmN0aW9uKCl7dmFyIGMsYj10aGlzO2IuJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGQsZSl7Yz1iLnNsaWRlV2lkdGgqZCotMSxiLm9wdGlvbnMucnRsPT09ITA/YShlKS5jc3Moe3Bvc2l0aW9uOlwicmVsYXRpdmVcIixyaWdodDpjLHRvcDowLHpJbmRleDpiLm9wdGlvbnMuekluZGV4LTIsb3BhY2l0eTowfSk6YShlKS5jc3Moe3Bvc2l0aW9uOlwicmVsYXRpdmVcIixsZWZ0OmMsdG9wOjAsekluZGV4OmIub3B0aW9ucy56SW5kZXgtMixvcGFjaXR5OjB9KX0pLGIuJHNsaWRlcy5lcShiLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6Yi5vcHRpb25zLnpJbmRleC0xLG9wYWNpdHk6MX0pfSxiLnByb3RvdHlwZS5zZXRIZWlnaHQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2lmKDE9PT1hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZhLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQ9PT0hMCYmYS5vcHRpb25zLnZlcnRpY2FsPT09ITEpe3ZhciBiPWEuJHNsaWRlcy5lcShhLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQoITApO2EuJGxpc3QuY3NzKFwiaGVpZ2h0XCIsYil9fSxiLnByb3RvdHlwZS5zZXRPcHRpb249Yi5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb249ZnVuY3Rpb24oKXt2YXIgYyxkLGUsZixoLGI9dGhpcyxnPSExO2lmKFwib2JqZWN0XCI9PT1hLnR5cGUoYXJndW1lbnRzWzBdKT8oZT1hcmd1bWVudHNbMF0sZz1hcmd1bWVudHNbMV0saD1cIm11bHRpcGxlXCIpOlwic3RyaW5nXCI9PT1hLnR5cGUoYXJndW1lbnRzWzBdKSYmKGU9YXJndW1lbnRzWzBdLGY9YXJndW1lbnRzWzFdLGc9YXJndW1lbnRzWzJdLFwicmVzcG9uc2l2ZVwiPT09YXJndW1lbnRzWzBdJiZcImFycmF5XCI9PT1hLnR5cGUoYXJndW1lbnRzWzFdKT9oPVwicmVzcG9uc2l2ZVwiOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhcmd1bWVudHNbMV0mJihoPVwic2luZ2xlXCIpKSxcInNpbmdsZVwiPT09aCliLm9wdGlvbnNbZV09ZjtlbHNlIGlmKFwibXVsdGlwbGVcIj09PWgpYS5lYWNoKGUsZnVuY3Rpb24oYSxjKXtiLm9wdGlvbnNbYV09Y30pO2Vsc2UgaWYoXCJyZXNwb25zaXZlXCI9PT1oKWZvcihkIGluIGYpaWYoXCJhcnJheVwiIT09YS50eXBlKGIub3B0aW9ucy5yZXNwb25zaXZlKSliLm9wdGlvbnMucmVzcG9uc2l2ZT1bZltkXV07ZWxzZXtmb3IoYz1iLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtjPj0wOyliLm9wdGlvbnMucmVzcG9uc2l2ZVtjXS5icmVha3BvaW50PT09ZltkXS5icmVha3BvaW50JiZiLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UoYywxKSxjLS07Yi5vcHRpb25zLnJlc3BvbnNpdmUucHVzaChmW2RdKX1nJiYoYi51bmxvYWQoKSxiLnJlaW5pdCgpKX0sYi5wcm90b3R5cGUuc2V0UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2Euc2V0RGltZW5zaW9ucygpLGEuc2V0SGVpZ2h0KCksYS5vcHRpb25zLmZhZGU9PT0hMT9hLnNldENTUyhhLmdldExlZnQoYS5jdXJyZW50U2xpZGUpKTphLnNldEZhZGUoKSxhLiRzbGlkZXIudHJpZ2dlcihcInNldFBvc2l0aW9uXCIsW2FdKX0sYi5wcm90b3R5cGUuc2V0UHJvcHM9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGI9ZG9jdW1lbnQuYm9keS5zdHlsZTthLnBvc2l0aW9uUHJvcD1hLm9wdGlvbnMudmVydGljYWw9PT0hMD9cInRvcFwiOlwibGVmdFwiLFwidG9wXCI9PT1hLnBvc2l0aW9uUHJvcD9hLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay12ZXJ0aWNhbFwiKTphLiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay12ZXJ0aWNhbFwiKSwodm9pZCAwIT09Yi5XZWJraXRUcmFuc2l0aW9ufHx2b2lkIDAhPT1iLk1velRyYW5zaXRpb258fHZvaWQgMCE9PWIubXNUcmFuc2l0aW9uKSYmYS5vcHRpb25zLnVzZUNTUz09PSEwJiYoYS5jc3NUcmFuc2l0aW9ucz0hMCksYS5vcHRpb25zLmZhZGUmJihcIm51bWJlclwiPT10eXBlb2YgYS5vcHRpb25zLnpJbmRleD9hLm9wdGlvbnMuekluZGV4PDMmJihhLm9wdGlvbnMuekluZGV4PTMpOmEub3B0aW9ucy56SW5kZXg9YS5kZWZhdWx0cy56SW5kZXgpLHZvaWQgMCE9PWIuT1RyYW5zZm9ybSYmKGEuYW5pbVR5cGU9XCJPVHJhbnNmb3JtXCIsYS50cmFuc2Zvcm1UeXBlPVwiLW8tdHJhbnNmb3JtXCIsYS50cmFuc2l0aW9uVHlwZT1cIk9UcmFuc2l0aW9uXCIsdm9pZCAwPT09Yi5wZXJzcGVjdGl2ZVByb3BlcnR5JiZ2b2lkIDA9PT1iLndlYmtpdFBlcnNwZWN0aXZlJiYoYS5hbmltVHlwZT0hMSkpLHZvaWQgMCE9PWIuTW96VHJhbnNmb3JtJiYoYS5hbmltVHlwZT1cIk1velRyYW5zZm9ybVwiLGEudHJhbnNmb3JtVHlwZT1cIi1tb3otdHJhbnNmb3JtXCIsYS50cmFuc2l0aW9uVHlwZT1cIk1velRyYW5zaXRpb25cIix2b2lkIDA9PT1iLnBlcnNwZWN0aXZlUHJvcGVydHkmJnZvaWQgMD09PWIuTW96UGVyc3BlY3RpdmUmJihhLmFuaW1UeXBlPSExKSksdm9pZCAwIT09Yi53ZWJraXRUcmFuc2Zvcm0mJihhLmFuaW1UeXBlPVwid2Via2l0VHJhbnNmb3JtXCIsYS50cmFuc2Zvcm1UeXBlPVwiLXdlYmtpdC10cmFuc2Zvcm1cIixhLnRyYW5zaXRpb25UeXBlPVwid2Via2l0VHJhbnNpdGlvblwiLHZvaWQgMD09PWIucGVyc3BlY3RpdmVQcm9wZXJ0eSYmdm9pZCAwPT09Yi53ZWJraXRQZXJzcGVjdGl2ZSYmKGEuYW5pbVR5cGU9ITEpKSx2b2lkIDAhPT1iLm1zVHJhbnNmb3JtJiYoYS5hbmltVHlwZT1cIm1zVHJhbnNmb3JtXCIsYS50cmFuc2Zvcm1UeXBlPVwiLW1zLXRyYW5zZm9ybVwiLGEudHJhbnNpdGlvblR5cGU9XCJtc1RyYW5zaXRpb25cIix2b2lkIDA9PT1iLm1zVHJhbnNmb3JtJiYoYS5hbmltVHlwZT0hMSkpLHZvaWQgMCE9PWIudHJhbnNmb3JtJiZhLmFuaW1UeXBlIT09ITEmJihhLmFuaW1UeXBlPVwidHJhbnNmb3JtXCIsYS50cmFuc2Zvcm1UeXBlPVwidHJhbnNmb3JtXCIsYS50cmFuc2l0aW9uVHlwZT1cInRyYW5zaXRpb25cIiksYS50cmFuc2Zvcm1zRW5hYmxlZD1hLm9wdGlvbnMudXNlVHJhbnNmb3JtJiZudWxsIT09YS5hbmltVHlwZSYmYS5hbmltVHlwZSE9PSExfSxiLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXM9ZnVuY3Rpb24oYSl7dmFyIGMsZCxlLGYsYj10aGlzO2Q9Yi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnRcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLGIuJHNsaWRlcy5lcShhKS5hZGRDbGFzcyhcInNsaWNrLWN1cnJlbnRcIiksYi5vcHRpb25zLmNlbnRlck1vZGU9PT0hMD8oYz1NYXRoLmZsb29yKGIub3B0aW9ucy5zbGlkZXNUb1Nob3cvMiksYi5vcHRpb25zLmluZmluaXRlPT09ITAmJihhPj1jJiZhPD1iLnNsaWRlQ291bnQtMS1jP2IuJHNsaWRlcy5zbGljZShhLWMsYStjKzEpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6KGU9Yi5vcHRpb25zLnNsaWRlc1RvU2hvdythLFxuZC5zbGljZShlLWMrMSxlK2MrMikuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKSksMD09PWE/ZC5lcShkLmxlbmd0aC0xLWIub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stY2VudGVyXCIpOmE9PT1iLnNsaWRlQ291bnQtMSYmZC5lcShiLm9wdGlvbnMuc2xpZGVzVG9TaG93KS5hZGRDbGFzcyhcInNsaWNrLWNlbnRlclwiKSksYi4kc2xpZGVzLmVxKGEpLmFkZENsYXNzKFwic2xpY2stY2VudGVyXCIpKTphPj0wJiZhPD1iLnNsaWRlQ291bnQtYi5vcHRpb25zLnNsaWRlc1RvU2hvdz9iLiRzbGlkZXMuc2xpY2UoYSxhK2Iub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6ZC5sZW5ndGg8PWIub3B0aW9ucy5zbGlkZXNUb1Nob3c/ZC5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpOihmPWIuc2xpZGVDb3VudCViLm9wdGlvbnMuc2xpZGVzVG9TaG93LGU9Yi5vcHRpb25zLmluZmluaXRlPT09ITA/Yi5vcHRpb25zLnNsaWRlc1RvU2hvdythOmEsYi5vcHRpb25zLnNsaWRlc1RvU2hvdz09Yi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsJiZiLnNsaWRlQ291bnQtYTxiLm9wdGlvbnMuc2xpZGVzVG9TaG93P2Quc2xpY2UoZS0oYi5vcHRpb25zLnNsaWRlc1RvU2hvdy1mKSxlK2YpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6ZC5zbGljZShlLGUrYi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKSksXCJvbmRlbWFuZFwiPT09Yi5vcHRpb25zLmxhenlMb2FkJiZiLmxhenlMb2FkKCl9LGIucHJvdG90eXBlLnNldHVwSW5maW5pdGU9ZnVuY3Rpb24oKXt2YXIgYyxkLGUsYj10aGlzO2lmKGIub3B0aW9ucy5mYWRlPT09ITAmJihiLm9wdGlvbnMuY2VudGVyTW9kZT0hMSksYi5vcHRpb25zLmluZmluaXRlPT09ITAmJmIub3B0aW9ucy5mYWRlPT09ITEmJihkPW51bGwsYi5zbGlkZUNvdW50PmIub3B0aW9ucy5zbGlkZXNUb1Nob3cpKXtmb3IoZT1iLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwP2Iub3B0aW9ucy5zbGlkZXNUb1Nob3crMTpiLm9wdGlvbnMuc2xpZGVzVG9TaG93LGM9Yi5zbGlkZUNvdW50O2M+Yi5zbGlkZUNvdW50LWU7Yy09MSlkPWMtMSxhKGIuJHNsaWRlc1tkXSkuY2xvbmUoITApLmF0dHIoXCJpZFwiLFwiXCIpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIsZC1iLnNsaWRlQ291bnQpLnByZXBlbmRUbyhiLiRzbGlkZVRyYWNrKS5hZGRDbGFzcyhcInNsaWNrLWNsb25lZFwiKTtmb3IoYz0wO2U+YztjKz0xKWQ9YyxhKGIuJHNsaWRlc1tkXSkuY2xvbmUoITApLmF0dHIoXCJpZFwiLFwiXCIpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIsZCtiLnNsaWRlQ291bnQpLmFwcGVuZFRvKGIuJHNsaWRlVHJhY2spLmFkZENsYXNzKFwic2xpY2stY2xvbmVkXCIpO2IuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1jbG9uZWRcIikuZmluZChcIltpZF1cIikuZWFjaChmdW5jdGlvbigpe2EodGhpcykuYXR0cihcImlkXCIsXCJcIil9KX19LGIucHJvdG90eXBlLmludGVycnVwdD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2F8fGIuYXV0b1BsYXkoKSxiLmludGVycnVwdGVkPWF9LGIucHJvdG90eXBlLnNlbGVjdEhhbmRsZXI9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcyxkPWEoYi50YXJnZXQpLmlzKFwiLnNsaWNrLXNsaWRlXCIpP2EoYi50YXJnZXQpOmEoYi50YXJnZXQpLnBhcmVudHMoXCIuc2xpY2stc2xpZGVcIiksZT1wYXJzZUludChkLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIpKTtyZXR1cm4gZXx8KGU9MCksYy5zbGlkZUNvdW50PD1jLm9wdGlvbnMuc2xpZGVzVG9TaG93PyhjLnNldFNsaWRlQ2xhc3NlcyhlKSx2b2lkIGMuYXNOYXZGb3IoZSkpOnZvaWQgYy5zbGlkZUhhbmRsZXIoZSl9LGIucHJvdG90eXBlLnNsaWRlSGFuZGxlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaixoPW51bGwsaT10aGlzO3JldHVybiBiPWJ8fCExLGkuYW5pbWF0aW5nPT09ITAmJmkub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZT09PSEwfHxpLm9wdGlvbnMuZmFkZT09PSEwJiZpLmN1cnJlbnRTbGlkZT09PWF8fGkuc2xpZGVDb3VudDw9aS5vcHRpb25zLnNsaWRlc1RvU2hvdz92b2lkIDA6KGI9PT0hMSYmaS5hc05hdkZvcihhKSxkPWEsaD1pLmdldExlZnQoZCksZz1pLmdldExlZnQoaS5jdXJyZW50U2xpZGUpLGkuY3VycmVudExlZnQ9bnVsbD09PWkuc3dpcGVMZWZ0P2c6aS5zd2lwZUxlZnQsaS5vcHRpb25zLmluZmluaXRlPT09ITEmJmkub3B0aW9ucy5jZW50ZXJNb2RlPT09ITEmJigwPmF8fGE+aS5nZXREb3RDb3VudCgpKmkub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk/dm9pZChpLm9wdGlvbnMuZmFkZT09PSExJiYoZD1pLmN1cnJlbnRTbGlkZSxjIT09ITA/aS5hbmltYXRlU2xpZGUoZyxmdW5jdGlvbigpe2kucG9zdFNsaWRlKGQpfSk6aS5wb3N0U2xpZGUoZCkpKTppLm9wdGlvbnMuaW5maW5pdGU9PT0hMSYmaS5vcHRpb25zLmNlbnRlck1vZGU9PT0hMCYmKDA+YXx8YT5pLnNsaWRlQ291bnQtaS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKT92b2lkKGkub3B0aW9ucy5mYWRlPT09ITEmJihkPWkuY3VycmVudFNsaWRlLGMhPT0hMD9pLmFuaW1hdGVTbGlkZShnLGZ1bmN0aW9uKCl7aS5wb3N0U2xpZGUoZCl9KTppLnBvc3RTbGlkZShkKSkpOihpLm9wdGlvbnMuYXV0b3BsYXkmJmNsZWFySW50ZXJ2YWwoaS5hdXRvUGxheVRpbWVyKSxlPTA+ZD9pLnNsaWRlQ291bnQlaS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIT09MD9pLnNsaWRlQ291bnQtaS5zbGlkZUNvdW50JWkub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDppLnNsaWRlQ291bnQrZDpkPj1pLnNsaWRlQ291bnQ/aS5zbGlkZUNvdW50JWkub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCE9PTA/MDpkLWkuc2xpZGVDb3VudDpkLGkuYW5pbWF0aW5nPSEwLGkuJHNsaWRlci50cmlnZ2VyKFwiYmVmb3JlQ2hhbmdlXCIsW2ksaS5jdXJyZW50U2xpZGUsZV0pLGY9aS5jdXJyZW50U2xpZGUsaS5jdXJyZW50U2xpZGU9ZSxpLnNldFNsaWRlQ2xhc3NlcyhpLmN1cnJlbnRTbGlkZSksaS5vcHRpb25zLmFzTmF2Rm9yJiYoaj1pLmdldE5hdlRhcmdldCgpLGo9ai5zbGljayhcImdldFNsaWNrXCIpLGouc2xpZGVDb3VudDw9ai5vcHRpb25zLnNsaWRlc1RvU2hvdyYmai5zZXRTbGlkZUNsYXNzZXMoaS5jdXJyZW50U2xpZGUpKSxpLnVwZGF0ZURvdHMoKSxpLnVwZGF0ZUFycm93cygpLGkub3B0aW9ucy5mYWRlPT09ITA/KGMhPT0hMD8oaS5mYWRlU2xpZGVPdXQoZiksaS5mYWRlU2xpZGUoZSxmdW5jdGlvbigpe2kucG9zdFNsaWRlKGUpfSkpOmkucG9zdFNsaWRlKGUpLHZvaWQgaS5hbmltYXRlSGVpZ2h0KCkpOnZvaWQoYyE9PSEwP2kuYW5pbWF0ZVNsaWRlKGgsZnVuY3Rpb24oKXtpLnBvc3RTbGlkZShlKX0pOmkucG9zdFNsaWRlKGUpKSkpfSxiLnByb3RvdHlwZS5zdGFydExvYWQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2Eub3B0aW9ucy5hcnJvd3M9PT0hMCYmYS5zbGlkZUNvdW50PmEub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihhLiRwcmV2QXJyb3cuaGlkZSgpLGEuJG5leHRBcnJvdy5oaWRlKCkpLGEub3B0aW9ucy5kb3RzPT09ITAmJmEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZhLiRkb3RzLmhpZGUoKSxhLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpfSxiLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbj1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGU9dGhpcztyZXR1cm4gYT1lLnRvdWNoT2JqZWN0LnN0YXJ0WC1lLnRvdWNoT2JqZWN0LmN1clgsYj1lLnRvdWNoT2JqZWN0LnN0YXJ0WS1lLnRvdWNoT2JqZWN0LmN1clksYz1NYXRoLmF0YW4yKGIsYSksZD1NYXRoLnJvdW5kKDE4MCpjL01hdGguUEkpLDA+ZCYmKGQ9MzYwLU1hdGguYWJzKGQpKSw0NT49ZCYmZD49MD9lLm9wdGlvbnMucnRsPT09ITE/XCJsZWZ0XCI6XCJyaWdodFwiOjM2MD49ZCYmZD49MzE1P2Uub3B0aW9ucy5ydGw9PT0hMT9cImxlZnRcIjpcInJpZ2h0XCI6ZD49MTM1JiYyMjU+PWQ/ZS5vcHRpb25zLnJ0bD09PSExP1wicmlnaHRcIjpcImxlZnRcIjplLm9wdGlvbnMudmVydGljYWxTd2lwaW5nPT09ITA/ZD49MzUmJjEzNT49ZD9cImRvd25cIjpcInVwXCI6XCJ2ZXJ0aWNhbFwifSxiLnByb3RvdHlwZS5zd2lwZUVuZD1mdW5jdGlvbihhKXt2YXIgYyxkLGI9dGhpcztpZihiLmRyYWdnaW5nPSExLGIuaW50ZXJydXB0ZWQ9ITEsYi5zaG91bGRDbGljaz1iLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPjEwPyExOiEwLHZvaWQgMD09PWIudG91Y2hPYmplY3QuY3VyWClyZXR1cm4hMTtpZihiLnRvdWNoT2JqZWN0LmVkZ2VIaXQ9PT0hMCYmYi4kc2xpZGVyLnRyaWdnZXIoXCJlZGdlXCIsW2IsYi5zd2lwZURpcmVjdGlvbigpXSksYi50b3VjaE9iamVjdC5zd2lwZUxlbmd0aD49Yi50b3VjaE9iamVjdC5taW5Td2lwZSl7c3dpdGNoKGQ9Yi5zd2lwZURpcmVjdGlvbigpKXtjYXNlXCJsZWZ0XCI6Y2FzZVwiZG93blwiOmM9Yi5vcHRpb25zLnN3aXBlVG9TbGlkZT9iLmNoZWNrTmF2aWdhYmxlKGIuY3VycmVudFNsaWRlK2IuZ2V0U2xpZGVDb3VudCgpKTpiLmN1cnJlbnRTbGlkZStiLmdldFNsaWRlQ291bnQoKSxiLmN1cnJlbnREaXJlY3Rpb249MDticmVhaztjYXNlXCJyaWdodFwiOmNhc2VcInVwXCI6Yz1iLm9wdGlvbnMuc3dpcGVUb1NsaWRlP2IuY2hlY2tOYXZpZ2FibGUoYi5jdXJyZW50U2xpZGUtYi5nZXRTbGlkZUNvdW50KCkpOmIuY3VycmVudFNsaWRlLWIuZ2V0U2xpZGVDb3VudCgpLGIuY3VycmVudERpcmVjdGlvbj0xfVwidmVydGljYWxcIiE9ZCYmKGIuc2xpZGVIYW5kbGVyKGMpLGIudG91Y2hPYmplY3Q9e30sYi4kc2xpZGVyLnRyaWdnZXIoXCJzd2lwZVwiLFtiLGRdKSl9ZWxzZSBiLnRvdWNoT2JqZWN0LnN0YXJ0WCE9PWIudG91Y2hPYmplY3QuY3VyWCYmKGIuc2xpZGVIYW5kbGVyKGIuY3VycmVudFNsaWRlKSxiLnRvdWNoT2JqZWN0PXt9KX0sYi5wcm90b3R5cGUuc3dpcGVIYW5kbGVyPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7aWYoIShiLm9wdGlvbnMuc3dpcGU9PT0hMXx8XCJvbnRvdWNoZW5kXCJpbiBkb2N1bWVudCYmYi5vcHRpb25zLnN3aXBlPT09ITF8fGIub3B0aW9ucy5kcmFnZ2FibGU9PT0hMSYmLTEhPT1hLnR5cGUuaW5kZXhPZihcIm1vdXNlXCIpKSlzd2l0Y2goYi50b3VjaE9iamVjdC5maW5nZXJDb3VudD1hLm9yaWdpbmFsRXZlbnQmJnZvaWQgMCE9PWEub3JpZ2luYWxFdmVudC50b3VjaGVzP2Eub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aDoxLGIudG91Y2hPYmplY3QubWluU3dpcGU9Yi5saXN0V2lkdGgvYi5vcHRpb25zLnRvdWNoVGhyZXNob2xkLGIub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmc9PT0hMCYmKGIudG91Y2hPYmplY3QubWluU3dpcGU9Yi5saXN0SGVpZ2h0L2Iub3B0aW9ucy50b3VjaFRocmVzaG9sZCksYS5kYXRhLmFjdGlvbil7Y2FzZVwic3RhcnRcIjpiLnN3aXBlU3RhcnQoYSk7YnJlYWs7Y2FzZVwibW92ZVwiOmIuc3dpcGVNb3ZlKGEpO2JyZWFrO2Nhc2VcImVuZFwiOmIuc3dpcGVFbmQoYSl9fSxiLnByb3RvdHlwZS5zd2lwZU1vdmU9ZnVuY3Rpb24oYSl7dmFyIGQsZSxmLGcsaCxiPXRoaXM7cmV0dXJuIGg9dm9pZCAwIT09YS5vcmlnaW5hbEV2ZW50P2Eub3JpZ2luYWxFdmVudC50b3VjaGVzOm51bGwsIWIuZHJhZ2dpbmd8fGgmJjEhPT1oLmxlbmd0aD8hMTooZD1iLmdldExlZnQoYi5jdXJyZW50U2xpZGUpLGIudG91Y2hPYmplY3QuY3VyWD12b2lkIDAhPT1oP2hbMF0ucGFnZVg6YS5jbGllbnRYLGIudG91Y2hPYmplY3QuY3VyWT12b2lkIDAhPT1oP2hbMF0ucGFnZVk6YS5jbGllbnRZLGIudG91Y2hPYmplY3Quc3dpcGVMZW5ndGg9TWF0aC5yb3VuZChNYXRoLnNxcnQoTWF0aC5wb3coYi50b3VjaE9iamVjdC5jdXJYLWIudG91Y2hPYmplY3Quc3RhcnRYLDIpKSksYi5vcHRpb25zLnZlcnRpY2FsU3dpcGluZz09PSEwJiYoYi50b3VjaE9iamVjdC5zd2lwZUxlbmd0aD1NYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyhiLnRvdWNoT2JqZWN0LmN1clktYi50b3VjaE9iamVjdC5zdGFydFksMikpKSksZT1iLnN3aXBlRGlyZWN0aW9uKCksXCJ2ZXJ0aWNhbFwiIT09ZT8odm9pZCAwIT09YS5vcmlnaW5hbEV2ZW50JiZiLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPjQmJmEucHJldmVudERlZmF1bHQoKSxnPShiLm9wdGlvbnMucnRsPT09ITE/MTotMSkqKGIudG91Y2hPYmplY3QuY3VyWD5iLnRvdWNoT2JqZWN0LnN0YXJ0WD8xOi0xKSxiLm9wdGlvbnMudmVydGljYWxTd2lwaW5nPT09ITAmJihnPWIudG91Y2hPYmplY3QuY3VyWT5iLnRvdWNoT2JqZWN0LnN0YXJ0WT8xOi0xKSxmPWIudG91Y2hPYmplY3Quc3dpcGVMZW5ndGgsYi50b3VjaE9iamVjdC5lZGdlSGl0PSExLGIub3B0aW9ucy5pbmZpbml0ZT09PSExJiYoMD09PWIuY3VycmVudFNsaWRlJiZcInJpZ2h0XCI9PT1lfHxiLmN1cnJlbnRTbGlkZT49Yi5nZXREb3RDb3VudCgpJiZcImxlZnRcIj09PWUpJiYoZj1iLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoKmIub3B0aW9ucy5lZGdlRnJpY3Rpb24sYi50b3VjaE9iamVjdC5lZGdlSGl0PSEwKSxiLm9wdGlvbnMudmVydGljYWw9PT0hMT9iLnN3aXBlTGVmdD1kK2YqZzpiLnN3aXBlTGVmdD1kK2YqKGIuJGxpc3QuaGVpZ2h0KCkvYi5saXN0V2lkdGgpKmcsYi5vcHRpb25zLnZlcnRpY2FsU3dpcGluZz09PSEwJiYoYi5zd2lwZUxlZnQ9ZCtmKmcpLGIub3B0aW9ucy5mYWRlPT09ITB8fGIub3B0aW9ucy50b3VjaE1vdmU9PT0hMT8hMTpiLmFuaW1hdGluZz09PSEwPyhiLnN3aXBlTGVmdD1udWxsLCExKTp2b2lkIGIuc2V0Q1NTKGIuc3dpcGVMZWZ0KSk6dm9pZCAwKX0sYi5wcm90b3R5cGUuc3dpcGVTdGFydD1mdW5jdGlvbihhKXt2YXIgYyxiPXRoaXM7cmV0dXJuIGIuaW50ZXJydXB0ZWQ9ITAsMSE9PWIudG91Y2hPYmplY3QuZmluZ2VyQ291bnR8fGIuc2xpZGVDb3VudDw9Yi5vcHRpb25zLnNsaWRlc1RvU2hvdz8oYi50b3VjaE9iamVjdD17fSwhMSk6KHZvaWQgMCE9PWEub3JpZ2luYWxFdmVudCYmdm9pZCAwIT09YS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMmJihjPWEub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdKSxiLnRvdWNoT2JqZWN0LnN0YXJ0WD1iLnRvdWNoT2JqZWN0LmN1clg9dm9pZCAwIT09Yz9jLnBhZ2VYOmEuY2xpZW50WCxiLnRvdWNoT2JqZWN0LnN0YXJ0WT1iLnRvdWNoT2JqZWN0LmN1clk9dm9pZCAwIT09Yz9jLnBhZ2VZOmEuY2xpZW50WSx2b2lkKGIuZHJhZ2dpbmc9ITApKX0sYi5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXM9Yi5wcm90b3R5cGUuc2xpY2tVbmZpbHRlcj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7bnVsbCE9PWEuJHNsaWRlc0NhY2hlJiYoYS51bmxvYWQoKSxhLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCksYS4kc2xpZGVzQ2FjaGUuYXBwZW5kVG8oYS4kc2xpZGVUcmFjayksYS5yZWluaXQoKSl9LGIucHJvdG90eXBlLnVubG9hZD1mdW5jdGlvbigpe3ZhciBiPXRoaXM7YShcIi5zbGljay1jbG9uZWRcIixiLiRzbGlkZXIpLnJlbW92ZSgpLGIuJGRvdHMmJmIuJGRvdHMucmVtb3ZlKCksYi4kcHJldkFycm93JiZiLmh0bWxFeHByLnRlc3QoYi5vcHRpb25zLnByZXZBcnJvdykmJmIuJHByZXZBcnJvdy5yZW1vdmUoKSxiLiRuZXh0QXJyb3cmJmIuaHRtbEV4cHIudGVzdChiLm9wdGlvbnMubmV4dEFycm93KSYmYi4kbmV4dEFycm93LnJlbW92ZSgpLGIuJHNsaWRlcy5yZW1vdmVDbGFzcyhcInNsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnRcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLmNzcyhcIndpZHRoXCIsXCJcIil9LGIucHJvdG90eXBlLnVuc2xpY2s9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztiLiRzbGlkZXIudHJpZ2dlcihcInVuc2xpY2tcIixbYixhXSksYi5kZXN0cm95KCl9LGIucHJvdG90eXBlLnVwZGF0ZUFycm93cz1mdW5jdGlvbigpe3ZhciBiLGE9dGhpcztiPU1hdGguZmxvb3IoYS5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKSxhLm9wdGlvbnMuYXJyb3dzPT09ITAmJmEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYhYS5vcHRpb25zLmluZmluaXRlJiYoYS4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpLGEuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSwwPT09YS5jdXJyZW50U2xpZGU/KGEuJHByZXZBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpLGEuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSk6YS5jdXJyZW50U2xpZGU+PWEuc2xpZGVDb3VudC1hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZhLm9wdGlvbnMuY2VudGVyTW9kZT09PSExPyhhLiRuZXh0QXJyb3cuYWRkQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSxhLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIikpOmEuY3VycmVudFNsaWRlPj1hLnNsaWRlQ291bnQtMSYmYS5vcHRpb25zLmNlbnRlck1vZGU9PT0hMCYmKGEuJG5leHRBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpLGEuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSkpfSxiLnByb3RvdHlwZS51cGRhdGVEb3RzPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztudWxsIT09YS4kZG90cyYmKGEuJGRvdHMuZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSxhLiRkb3RzLmZpbmQoXCJsaVwiKS5lcShNYXRoLmZsb29yKGEuY3VycmVudFNsaWRlL2Eub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIikpfSxiLnByb3RvdHlwZS52aXNpYmlsaXR5PWZ1bmN0aW9uKCl7dmFyIGE9dGhpczthLm9wdGlvbnMuYXV0b3BsYXkmJihkb2N1bWVudFthLmhpZGRlbl0/YS5pbnRlcnJ1cHRlZD0hMDphLmludGVycnVwdGVkPSExKX0sYS5mbi5zbGljaz1mdW5jdGlvbigpe3ZhciBmLGcsYT10aGlzLGM9YXJndW1lbnRzWzBdLGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpLGU9YS5sZW5ndGg7Zm9yKGY9MDtlPmY7ZisrKWlmKFwib2JqZWN0XCI9PXR5cGVvZiBjfHxcInVuZGVmaW5lZFwiPT10eXBlb2YgYz9hW2ZdLnNsaWNrPW5ldyBiKGFbZl0sYyk6Zz1hW2ZdLnNsaWNrW2NdLmFwcGx5KGFbZl0uc2xpY2ssZCksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGcpcmV0dXJuIGc7cmV0dXJuIGF9fSk7Il19
