/* KindEditor 4.1.3 (2012-10-14), Copyright (C) kindsoft.net, Licence: http://www.kindsoft.net/license.php */
(function (z, n) {
    function W(a) {
        if (!a)return!1;
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function cb(a) {
        if (!a)return!1;
        return Object.prototype.toString.call(a) === "[object Function]"
    }

    function M(a, b) {
        for (var c = 0, d = b.length; c < d; c++)if (a === b[c])return c;
        return-1
    }

    function j(a, b) {
        if (W(a))for (var c = 0, d = a.length; c < d; c++) {
            if (b.call(a[c], c, a[c]) === !1)break
        } else for (c in a)if (a.hasOwnProperty(c) && b.call(a[c], c, a[c]) === !1)break
    }

    function A(a) {
        return a.replace(/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,
            "")
    }

    function sa(a, b, c) {
        c = c === n ? "," : c;
        return(c + b + c).indexOf(c + a + c) >= 0
    }

    function r(a, b) {
        b = b || "px";
        return a && /^\d+$/.test(a) ? a + b : a
    }

    function s(a) {
        var b;
        return a && (b = /(\d+)/.exec(a)) ? parseInt(b[1], 10) : 0
    }

    function D(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }

    function Fa(a) {
        return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&")
    }

    function da(a) {
        var b = a.split("-"), a = "";
        j(b, function (b, d) {
            a += b > 0 ? d.charAt(0).toUpperCase() +
                d.substr(1) : d
        });
        return a
    }

    function ta(a) {
        function b(a) {
            a = parseInt(a, 10).toString(16).toUpperCase();
            return a.length > 1 ? a : "0" + a
        }

        return a.replace(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/ig, function (a, d, f, g) {
            return"#" + b(d) + b(f) + b(g)
        })
    }

    function u(a, b) {
        var b = b === n ? "," : b, c = {}, d = W(a) ? a : a.split(b), f;
        j(d, function (a, b) {
            if (f = /^(\d+)\.\.(\d+)$/.exec(b))for (var d = parseInt(f[1], 10); d <= parseInt(f[2], 10); d++)c[d.toString()] = !0; else c[b] = !0
        });
        return c
    }

    function Ga(a, b) {
        return Array.prototype.slice.call(a, b || 0)
    }

    function l(a, b) {
        return a === n ? b : a
    }

    function F(a, b, c) {
        c || (c = b, b = null);
        var d;
        if (b) {
            var f = function () {
            };
            f.prototype = b.prototype;
            d = new f;
            j(c, function (a, b) {
                d[a] = b
            })
        } else d = c;
        d.constructor = a;
        a.prototype = d;
        a.parent = b ? b.prototype : null
    }

    function db(a) {
        var b;
        if (b = /\{[\s\S]*\}|\[[\s\S]*\]/.exec(a))a = b[0];
        b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        b.lastIndex = 0;
        b.test(a) && (a = a.replace(b, function (a) {
            return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return eval("(" + a + ")");
        throw"JSON parse error";
    }

    function Qb(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, eb) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function ua(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, eb) : a.detachEvent && a.detachEvent("on" + b, c)
    }

    function fb(a, b) {
        this.init(a, b)
    }

    function gb(a) {
        try {
            delete a[X]
        } catch (b) {
            a.removeAttribute &&
            a.removeAttribute(X)
        }
    }

    function Y(a, b, c) {
        if (b.indexOf(",") >= 0)j(b.split(","), function () {
            Y(a, this, c)
        }); else {
            var d = a[X] || null;
            d || (a[X] = ++hb, d = hb);
            v[d] === n && (v[d] = {});
            var f = v[d][b];
            f && f.length > 0 ? ua(a, b, f[0]) : (v[d][b] = [], v[d].el = a);
            f = v[d][b];
            f.length === 0 && (f[0] = function (b) {
                var c = b ? new fb(a, b) : n;
                j(f, function (b, d) {
                    b > 0 && d && d.call(a, c)
                })
            });
            M(c, f) < 0 && f.push(c);
            Qb(a, b, f[0])
        }
    }

    function ea(a, b, c) {
        if (b && b.indexOf(",") >= 0)j(b.split(","), function () {
            ea(a, this, c)
        }); else {
            var d = a[X] || null;
            if (d)if (b === n)d in v && (j(v[d],
                function (b, c) {
                    b != "el" && c.length > 0 && ua(a, b, c[0])
                }), delete v[d], gb(a)); else if (v[d]) {
                var f = v[d][b];
                if (f && f.length > 0) {
                    c === n ? (ua(a, b, f[0]), delete v[d][b]) : (j(f, function (a, b) {
                        a > 0 && b === c && f.splice(a, 1)
                    }), f.length == 1 && (ua(a, b, f[0]), delete v[d][b]));
                    var g = 0;
                    j(v[d], function () {
                        g++
                    });
                    g < 2 && (delete v[d], gb(a))
                }
            }
        }
    }

    function ib(a, b) {
        if (b.indexOf(",") >= 0)j(b.split(","), function () {
            ib(a, this)
        }); else {
            var c = a[X] || null;
            if (c) {
                var d = v[c][b];
                if (v[c] && d && d.length > 0)d[0]()
            }
        }
    }

    function Ha(a, b, c) {
        b = /^\d{2,}$/.test(b) ? b : b.toUpperCase().charCodeAt(0);
        Y(a, "keydown", function (d) {
            d.ctrlKey && d.which == b && !d.shiftKey && !d.altKey && (c.call(a), d.stop())
        })
    }

    function fa(a) {
        for (var b = {}, c = /\s*([\w\-]+)\s*:([^;]*)(;|$)/g, d; d = c.exec(a);) {
            var f = A(d[1].toLowerCase());
            d = A(ta(d[2]));
            b[f] = d
        }
        return b
    }

    function J(a) {
        for (var b = {}, c = /\s+(?:([\w\-:]+)|(?:([\w\-:]+)=([^\s"'<>]+))|(?:([\w\-:"]+)="([^"]*)")|(?:([\w\-:"]+)='([^']*)'))(?=(?:\s|\/|>)+)/g, d; d = c.exec(a);) {
            var f = (d[1] || d[2] || d[4] || d[6]).toLowerCase();
            b[f] = (d[2] ? d[3] : d[4] ? d[5] : d[7]) || ""
        }
        return b
    }

    function Rb(a, b) {
        return a =
            /\s+class\s*=/.test(a) ? a.replace(/(\s+class=["']?)([^"']*)(["']?[\s>])/, function (a, d, f, g) {
                return(" " + f + " ").indexOf(" " + b + " ") < 0 ? f === "" ? d + b + g : d + f + " " + b + g : a
            }) : a.substr(0, a.length - 1) + ' class="' + b + '">'
    }

    function Sb(a) {
        var b = "";
        j(fa(a), function (a, d) {
            b += a + ":" + d + ";"
        });
        return b
    }

    function ga(a, b, c, d) {
        function f(a) {
            for (var a = a.split("/"), b = [], c = 0, d = a.length; c < d; c++) {
                var f = a[c];
                f == ".." ? b.length > 0 && b.pop() : f !== "" && f != "." && b.push(f)
            }
            return"/" + b.join("/")
        }

        function g(b, c) {
            if (a.substr(0, b.length) === b) {
                for (var f = [],
                         i = 0; i < c; i++)f.push("..");
                i = ".";
                f.length > 0 && (i += "/" + f.join("/"));
                d == "/" && (i += "/");
                return i + a.substr(b.length)
            } else if (e = /^(.*)\//.exec(b))return g(e[1], ++c)
        }

        b = l(b, "").toLowerCase();
        a.substr(0, 5) != "data:" && (a = a.replace(/([^:])\/\//g, "$1/"));
        if (M(b, ["absolute", "relative", "domain"]) < 0)return a;
        c = c || location.protocol + "//" + location.host;
        if (d === n)var i = location.pathname.match(/^(\/.*)\//), d = i ? i[1] : "";
        var e;
        if (e = /^(\w+:\/\/[^\/]*)/.exec(a)) {
            if (e[1] !== c)return a
        } else if (/^\w+:/.test(a))return a;
        /^\//.test(a) ?
            a = c + f(a.substr(1)) : /^\w+:\/\//.test(a) || (a = c + f(d + "/" + a));
        b === "relative" ? a = g(c + d, 0).substr(2) : b === "absolute" && a.substr(0, c.length) === c && (a = a.substr(c.length));
        return a
    }

    function R(a, b, c, d, f) {
        var c = c || "", d = l(d, !1), f = l(f, "\t"), g = "xx-small,x-small,small,medium,large,x-large,xx-large".split(","), a = a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig, function (a, b, c, d) {
            return b + c.replace(/<(?:br|br\s[^>]*)>/ig, "\n") + d
        }), a = a.replace(/<(?:br|br\s[^>]*)\s*\/?>\s*<\/p>/ig, "</p>"), a = a.replace(/(<(?:p|p\s[^>]*)>)\s*(<\/p>)/ig,
            "$1<br />$2"), a = a.replace(/\u200B/g, ""), a = a.replace(/\u00A9/g, "&copy;"), i = {};
        b && (j(b, function (a, b) {
            for (var c = a.split(","), d = 0, f = c.length; d < f; d++)i[c[d]] = u(b)
        }), i.script || (a = a.replace(/(<(?:script|script\s[^>]*)>)([\s\S]*?)(<\/script>)/ig, "")), i.style || (a = a.replace(/(<(?:style|style\s[^>]*)>)([\s\S]*?)(<\/style>)/ig, "")));
        var e = [], a = a.replace(/([ \t\n\r]*)<(\/)?([\w\-:]+)((?:\s+|(?:\s+[\w\-:]+)|(?:\s+[\w\-:]+=[^\s"'<>]+)|(?:\s+[\w\-:"]+="[^"]*")|(?:\s+[\w\-:"]+='[^']*'))*)(\/)?>([ \t\n\r]*)/g, function (a, m, o, t, va, E, G) {
            var m = m || "", o = o || "", n = t.toLowerCase(), l = va || "", t = E ? " " + E : "", G = G || "";
            if (b && !i[n])return"";
            t === "" && jb[n] && (t = " /");
            kb[n] && (m && (m = " "), G && (G = " "));
            Ia[n] && (o ? G = "\n" : m = "\n");
            d && n == "br" && (G = "\n");
            if (lb[n] && !Ia[n])if (d) {
                o && e.length > 0 && e[e.length - 1] === n ? e.pop() : e.push(n);
                G = m = "\n";
                va = 0;
                for (E = o ? e.length : e.length - 1; va < E; va++)m += f, o || (G += f);
                t ? e.pop() : o || (G += f)
            } else m = G = "";
            if (l !== "") {
                var w = J(a);
                if (n === "font") {
                    var p = {}, H = "";
                    j(w, function (a, b) {
                        if (a === "color")p.color = b, delete w[a];
                        a === "size" && (p["font-size"] =
                            g[parseInt(b, 10) - 1] || "", delete w[a]);
                        a === "face" && (p["font-family"] = b, delete w[a]);
                        a === "style" && (H = b)
                    });
                    H && !/;$/.test(H) && (H += ";");
                    j(p, function (a, b) {
                        b !== "" && (/\s/.test(b) && (b = "'" + b + "'"), H += a + ":" + b + ";")
                    });
                    w.style = H
                }
                j(w, function (a, d) {
                    Tb[a] && (w[a] = a);
                    M(a, ["src", "href"]) >= 0 && (w[a] = ga(d, c));
                    (b && a !== "style" && !i[n]["*"] && !i[n][a] || n === "body" && a === "contenteditable" || /^kindeditor_\d+$/.test(a)) && delete w[a];
                    if (a === "style" && d !== "") {
                        var f = fa(d);
                        j(f, function (a) {
                            b && !i[n].style && !i[n]["." + a] && delete f[a]
                        });
                        var g =
                            "";
                        j(f, function (a, b) {
                            g += a + ":" + b + ";"
                        });
                        w.style = g
                    }
                });
                l = "";
                j(w, function (a, b) {
                    a === "style" && b === "" || (b = b.replace(/"/g, "&quot;"), l += " " + a + '="' + b + '"')
                })
            }
            n === "font" && (n = "span");
            return m + "<" + o + n + l + t + ">" + G
        }), a = a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig, function (a, b, c, d) {
            return b + c.replace(/\n/g, '<span id="__kindeditor_pre_newline__">\n') + d
        }), a = a.replace(/\n\s*\n/g, "\n"), a = a.replace(/<span id="__kindeditor_pre_newline__">\n/g, "\n");
        return A(a)
    }

    function mb(a, b) {
        a = a.replace(/<meta[\s\S]*?>/ig, "").replace(/<![\s\S]*?>/ig,
            "").replace(/<style[^>]*>[\s\S]*?<\/style>/ig, "").replace(/<script[^>]*>[\s\S]*?<\/script>/ig, "").replace(/<w:[^>]+>[\s\S]*?<\/w:[^>]+>/ig, "").replace(/<o:[^>]+>[\s\S]*?<\/o:[^>]+>/ig, "").replace(/<xml>[\s\S]*?<\/xml>/ig, "").replace(/<(?:table|td)[^>]*>/ig, function (a) {
                return a.replace(/border-bottom:([#\w\s]+)/ig, "border:$1")
            });
        return R(a, b)
    }

    function nb(a) {
        if (/\.(rm|rmvb)(\?|$)/i.test(a))return"audio/x-pn-realaudio-plugin";
        if (/\.(swf|flv)(\?|$)/i.test(a))return"application/x-shockwave-flash";
        return"video/x-ms-asf-plugin"
    }

    function ob(a) {
        return J(unescape(a))
    }

    function Ja(a) {
        var b = "<embed ";
        j(a, function (a, d) {
            b += a + '="' + d + '" '
        });
        b += "/>";
        return b
    }

    function pb(a, b) {
        var c = b.width, d = b.height, f = b.type || nb(b.src), g = Ja(b), i = "";
        c > 0 && (i += "width:" + c + "px;");
        d > 0 && (i += "height:" + d + "px;");
        c = /realaudio/i.test(f) ? "ke-rm" : /flash/i.test(f) ? "ke-flash" : "ke-media";
        c = '<img class="' + c + '" src="' + a + '" ';
        i !== "" && (c += 'style="' + i + '" ');
        c += 'data-ke-tag="' + escape(g) + '" alt="" />';
        return c
    }

    function xa(a, b) {
        if (a.nodeType == 9 && b.nodeType != 9)return!0;
        for (; b =
                   b.parentNode;)if (b == a)return!0;
        return!1
    }

    function ya(a, b) {
        var b = b.toLowerCase(), c = null;
        if (!Ub && a.nodeName.toLowerCase() != "script") {
            var d = a.ownerDocument.createElement("div");
            d.appendChild(a.cloneNode(!1));
            d = J(Fa(d.innerHTML));
            b in d && (c = d[b])
        } else try {
            c = a.getAttribute(b, 2)
        } catch (f) {
            c = a.getAttribute(b, 1)
        }
        b === "style" && c !== null && (c = Sb(c));
        return c
    }

    function za(a, b) {
        function c(a) {
            if (typeof a != "string")return a;
            return a.replace(/([^\w\-])/g, "\\$1")
        }

        function d(a, b) {
            return a === "*" || a.toLowerCase() === c(b.toLowerCase())
        }

        function f(a, b, c) {
            var f = [];
            (a = (c.ownerDocument || c).getElementById(a.replace(/\\/g, ""))) && d(b, a.nodeName) && xa(c, a) && f.push(a);
            return f
        }

        function g(a, b, c) {
            var f = c.ownerDocument || c, g = [], e, i, h;
            if (c.getElementsByClassName) {
                f = c.getElementsByClassName(a.replace(/\\/g, ""));
                e = 0;
                for (i = f.length; e < i; e++)h = f[e], d(b, h.nodeName) && g.push(h)
            } else if (f.querySelectorAll) {
                f = f.querySelectorAll((c.nodeName !== "#document" ? c.nodeName + " " : "") + b + "." + a);
                e = 0;
                for (i = f.length; e < i; e++)h = f[e], xa(c, h) && g.push(h)
            } else {
                f = c.getElementsByTagName(b);
                a = " " + a + " ";
                e = 0;
                for (i = f.length; e < i; e++)if (h = f[e], h.nodeType == 1)(b = h.className) && (" " + b + " ").indexOf(a) > -1 && g.push(h)
            }
            return g
        }

        function i(a, b, d, f) {
            for (var g = [], d = f.getElementsByTagName(d), e = 0, i = d.length; e < i; e++)f = d[e], f.nodeType == 1 && (b === null ? ya(f, a) !== null && g.push(f) : b === c(ya(f, a)) && g.push(f));
            return g
        }

        function e(a, b) {
            var c = [], h, k = (h = /^((?:\\.|[^.#\s\[<>])+)/.exec(a)) ? h[1] : "*";
            if (h = /#((?:[\w\-]|\\.)+)$/.exec(a))c = f(h[1], k, b); else if (h = /\.((?:[\w\-]|\\.)+)$/.exec(a))c = g(h[1], k, b); else if (h = /\[((?:[\w\-]|\\.)+)\]/.exec(a))c =
                i(h[1].toLowerCase(), null, k, b); else if (h = /\[((?:[\w\-]|\\.)+)\s*=\s*['"]?((?:\\.|[^'"]+)+)['"]?\]/.exec(a)) {
                c = h[1].toLowerCase();
                h = h[2];
                if (c === "id")k = f(h, k, b); else if (c === "class")k = g(h, k, b); else if (c === "name") {
                    c = [];
                    h = (b.ownerDocument || b).getElementsByName(h.replace(/\\/g, ""));
                    for (var m, o = 0, t = h.length; o < t; o++)m = h[o], d(k, m.nodeName) && xa(b, m) && m.getAttributeNode("name") && c.push(m);
                    k = c
                } else k = i(c, h, k, b);
                c = k
            } else {
                k = b.getElementsByTagName(k);
                m = 0;
                for (o = k.length; m < o; m++)h = k[m], h.nodeType == 1 && c.push(h)
            }
            return c
        }

        var k = a.split(",");
        if (k.length > 1) {
            var m = [];
            j(k, function () {
                j(za(this, b), function () {
                    M(this, m) < 0 && m.push(this)
                })
            });
            return m
        }
        for (var b = b || document, k = [], o, t = /((?:\\.|[^\s>])+|[\s>])/g; o = t.exec(a);)o[1] !== " " && k.push(o[1]);
        o = [];
        if (k.length == 1)return e(k[0], b);
        var t = !1, n, E, l, p, q, w, wa, H, r, s;
        w = 0;
        for (lenth = k.length; w < lenth; w++)if (n = k[w], n === ">")t = !0; else {
            if (w > 0) {
                E = [];
                wa = 0;
                for (r = o.length; wa < r; wa++) {
                    p = o[wa];
                    l = e(n, p);
                    H = 0;
                    for (s = l.length; H < s; H++)q = l[H], t ? p === q.parentNode && E.push(q) : E.push(q)
                }
                o = E
            } else o = e(n, b);
            if (o.length ===
                0)return[]
        }
        return o
    }

    function S(a) {
        if (!a)return document;
        return a.ownerDocument || a.document || a
    }

    function T(a) {
        if (!a)return z;
        a = S(a);
        return a.parentWindow || a.defaultView
    }

    function Vb(a, b) {
        if (a.nodeType == 1) {
            var c = S(a);
            try {
                a.innerHTML = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + b;
                var d = c.getElementById("__kindeditor_temp_tag__");
                d.parentNode.removeChild(d)
            } catch (f) {
                e(a).empty(), e("@" + b, c).each(function () {
                    a.appendChild(this)
                })
            }
        }
    }

    function Ka(a, b, c) {
        p && B < 8 && b.toLowerCase() ==
            "class" && (b = "className");
        a.setAttribute(b, "" + c)
    }

    function La(a) {
        if (!a || !a.nodeName)return"";
        return a.nodeName.toLowerCase()
    }

    function Wb(a, b) {
        var c = T(a), d = da(b), f = "";
        c.getComputedStyle ? (c = c.getComputedStyle(a, null), f = c[d] || c.getPropertyValue(b) || a.style[d]) : a.currentStyle && (f = a.currentStyle[d] || a.style[d]);
        return f
    }

    function I(a) {
        a = a || document;
        return N ? a.body : a.documentElement
    }

    function Z(a) {
        var a = a || document, b;
        p || Ma ? (b = I(a).scrollLeft, a = I(a).scrollTop) : (b = T(a).scrollX, a = T(a).scrollY);
        return{x: b, y: a}
    }

    function C(a) {
        this.init(a)
    }

    function qb(a) {
        a.collapsed = a.startContainer === a.endContainer && a.startOffset === a.endOffset;
        return a
    }

    function Na(a, b, c) {
        function d(d, f, g) {
            var e = d.nodeValue.length, i;
            b && (i = d.cloneNode(!0), i = f > 0 ? i.splitText(f) : i, g < e && i.splitText(g - f));
            if (c) {
                var k = d;
                f > 0 && (k = d.splitText(f), a.setStart(d, f));
                g < e && (d = k.splitText(g - f), a.setEnd(d, 0));
                h.push(k)
            }
            return i
        }

        function f() {
            c && a.up().collapse(!0);
            for (var b = 0, d = h.length; b < d; b++) {
                var f = h[b];
                f.parentNode && f.parentNode.removeChild(f)
            }
        }

        function g(f, j) {
            for (var l = f.firstChild, p; l;) {
                p = (new K(e)).selectNode(l);
                m = p.compareBoundaryPoints(ha, a);
                m >= 0 && o <= 0 && (o = p.compareBoundaryPoints(ia, a));
                o >= 0 && t <= 0 && (t = p.compareBoundaryPoints($, a));
                t >= 0 && n <= 0 && (n = p.compareBoundaryPoints(ja, a));
                if (n >= 0)return!1;
                p = l.nextSibling;
                if (m > 0)if (l.nodeType == 1)if (o >= 0 && t <= 0)b && j.appendChild(l.cloneNode(!0)), c && h.push(l); else {
                    var E;
                    b && (E = l.cloneNode(!1), j.appendChild(E));
                    if (g(l, E) === !1)return!1
                } else if (l.nodeType == 3 && (l = l == k.startContainer ? d(l, k.startOffset, l.nodeValue.length) :
                    l == k.endContainer ? d(l, 0, k.endOffset) : d(l, 0, l.nodeValue.length), b))try {
                    j.appendChild(l)
                } catch (G) {
                }
                l = p
            }
        }

        var e = a.doc, h = [], k = a.cloneRange().down(), m = -1, o = -1, t = -1, n = -1, j = a.commonAncestor(), l = e.createDocumentFragment();
        if (j.nodeType == 3)return j = d(j, a.startOffset, a.endOffset), b && l.appendChild(j), f(), b ? l : a;
        g(j, l);
        c && a.up().collapse(!0);
        for (var j = 0, p = h.length; j < p; j++) {
            var q = h[j];
            q.parentNode && q.parentNode.removeChild(q)
        }
        return b ? l : a
    }

    function ka(a, b) {
        for (var c = b; c;) {
            var d = e(c);
            if (d.name == "marquee" || d.name ==
                "select")return;
            c = c.parentNode
        }
        try {
            a.moveToElementText(b)
        } catch (f) {
        }
    }

    function rb(a, b) {
        var c = a.parentElement().ownerDocument, d = a.duplicate();
        d.collapse(b);
        var f = d.parentElement(), g = f.childNodes;
        if (g.length === 0)return{node: f.parentNode, offset: e(f).index()};
        var i = c, h = 0, k = -1, m = a.duplicate();
        ka(m, f);
        for (var o = 0, t = g.length; o < t; o++) {
            var j = g[o], k = m.compareEndPoints("StartToStart", d);
            if (k === 0)return{node: j.parentNode, offset: o};
            if (j.nodeType == 1) {
                var l = a.duplicate(), n, p = e(j), q = j;
                p.isControl() && (n = c.createElement("span"),
                    p.after(n), q = n, h += p.text().replace(/\r\n|\n|\r/g, "").length);
                ka(l, q);
                m.setEndPoint("StartToEnd", l);
                k > 0 ? h += l.text.replace(/\r\n|\n|\r/g, "").length : h = 0;
                n && e(n).remove()
            } else j.nodeType == 3 && (m.moveStart("character", j.nodeValue.length), h += j.nodeValue.length);
            k < 0 && (i = j)
        }
        if (k < 0 && i.nodeType == 1)return{node: f, offset: e(f.lastChild).index() + 1};
        if (k > 0)for (; i.nextSibling && i.nodeType == 1;)i = i.nextSibling;
        m = a.duplicate();
        ka(m, f);
        m.setEndPoint("StartToEnd", d);
        h -= m.text.replace(/\r\n|\n|\r/g, "").length;
        if (k > 0 && i.nodeType ==
            3)for (c = i.previousSibling; c && c.nodeType == 3;)h -= c.nodeValue.length, c = c.previousSibling;
        return{node: i, offset: h}
    }

    function sb(a, b) {
        var c = a.ownerDocument || a, d = c.body.createTextRange();
        if (c == a)return d.collapse(!0), d;
        if (a.nodeType == 1 && a.childNodes.length > 0) {
            var f = a.childNodes, g;
            b === 0 ? (g = f[0], f = !0) : (g = f[b - 1], f = !1);
            if (!g)return d;
            if (e(g).name === "head")return b === 1 && (f = !0), b === 2 && (f = !1), d.collapse(f), d;
            if (g.nodeType == 1) {
                var i = e(g), h;
                i.isControl() && (h = c.createElement("span"), f ? i.before(h) : i.after(h), g = h);
                ka(d,
                    g);
                d.collapse(f);
                h && e(h).remove();
                return d
            }
            a = g;
            b = f ? 0 : g.nodeValue.length
        }
        c = c.createElement("span");
        e(a).before(c);
        ka(d, c);
        d.moveStart("character", b);
        e(c).remove();
        return d
    }

    function tb(a) {
        function b(a) {
            if (e(a.node).name == "tr")a.node = a.node.cells[a.offset], a.offset = 0
        }

        var c;
        if (p) {
            if (a.item)return c = S(a.item(0)), c = new K(c), c.selectNode(a.item(0)), c;
            c = a.parentElement().ownerDocument;
            var d = rb(a, !0), a = rb(a, !1);
            b(d);
            b(a);
            c = new K(c);
            c.setStart(d.node, d.offset);
            c.setEnd(a.node, a.offset);
            return c
        }
        d = a.startContainer;
        c = d.ownerDocument || d;
        c = new K(c);
        c.setStart(d, a.startOffset);
        c.setEnd(a.endContainer, a.endOffset);
        return c
    }

    function K(a) {
        this.init(a)
    }

    function Oa(a) {
        if (!a.nodeName)return a.constructor === K ? a : tb(a);
        return new K(a)
    }

    function O(a, b, c) {
        try {
            a.execCommand(b, !1, c)
        } catch (d) {
        }
    }

    function ub(a, b) {
        var c = "";
        try {
            c = a.queryCommandValue(b)
        } catch (d) {
        }
        typeof c !== "string" && (c = "");
        return c
    }

    function Pa(a) {
        var b = T(a);
        return a.selection || b.getSelection()
    }

    function vb(a) {
        var b = {}, c, d;
        j(a, function (a, g) {
            c = a.split(",");
            for (var e =
                0, h = c.length; e < h; e++)d = c[e], b[d] = g
        });
        return b
    }

    function Qa(a, b) {
        return wb(a, b, "*") || wb(a, b)
    }

    function wb(a, b, c) {
        c = c || a.name;
        if (a.type !== 1)return!1;
        b = vb(b);
        if (!b[c])return!1;
        for (var c = b[c].split(","), b = 0, d = c.length; b < d; b++) {
            var f = c[b];
            if (f === "*")return!0;
            var g = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(f), e = g[1] ? "css" : "attr", f = g[2], g = g[3] || "";
            if (g === "" && a[e](f) !== "")return!0;
            if (g !== "" && a[e](f) === g)return!0
        }
        return!1
    }

    function Ra(a, b) {
        a.type == 1 && (xb(a, b, "*"), xb(a, b))
    }

    function xb(a, b, c) {
        c = c || a.name;
        if (a.type ===
            1 && (b = vb(b), b[c])) {
            for (var c = b[c].split(","), b = !1, d = 0, f = c.length; d < f; d++) {
                var g = c[d];
                if (g === "*") {
                    b = !0;
                    break
                }
                var e = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(g), g = e[2];
                e[1] ? (g = da(g), a[0].style[g] && (a[0].style[g] = "")) : a.removeAttr(g)
            }
            b && a.remove(!0)
        }
    }

    function Sa(a) {
        for (; a.first();)a = a.first();
        return a
    }

    function aa(a) {
        return a.type == 1 && a.html().replace(/<[^>]+>/g, "") === ""
    }

    function Xb(a, b, c) {
        j(b, function (b, c) {
            b !== "style" && a.attr(b, c)
        });
        j(c, function (b, c) {
            a.css(b, c)
        })
    }

    function la(a) {
        this.init(a)
    }

    function yb(a) {
        a.nodeName &&
        (a = S(a), a = Oa(a).selectNodeContents(a.body).collapse(!1));
        return new la(a)
    }

    function Ta(a) {
        var b = a.moveEl, c = a.moveFn, d = a.clickEl || b, f = a.beforeDrag, g = [document];
        (a.iframeFix === n || a.iframeFix) && e("iframe").each(function () {
            if (!/^https?:\/\//.test(ga(this.src || "", "absolute"))) {
                var a;
                try {
                    a = Ua(this)
                } catch (b) {
                }
                if (a) {
                    var c = e(this).pos();
                    e(a).data("pos-x", c.x);
                    e(a).data("pos-y", c.y);
                    g.push(a)
                }
            }
        });
        d.mousedown(function (a) {
            function h(a) {
                a.preventDefault();
                var b = e(S(a.target)), f = P((b.data("pos-x") || 0) + a.pageX - q),
                    a = P((b.data("pos-y") || 0) + a.pageY - r);
                c.call(d, j, l, n, p, f, a)
            }

            function k(a) {
                a.preventDefault()
            }

            function m(a) {
                a.preventDefault();
                e(g).unbind("mousemove", h).unbind("mouseup", m).unbind("selectstart", k);
                o.releaseCapture && o.releaseCapture()
            }

            a.stopPropagation();
            var o = d.get(), j = s(b.css("left")), l = s(b.css("top")), n = b.width(), p = b.height(), q = a.pageX, r = a.pageY;
            f && f();
            e(g).mousemove(h).mouseup(m).bind("selectstart", k);
            o.setCapture && o.setCapture()
        })
    }

    function Q(a) {
        this.init(a)
    }

    function Va(a) {
        return new Q(a)
    }

    function Ua(a) {
        a =
            e(a)[0];
        return a.contentDocument || a.contentWindow.document
    }

    function Yb(a, b, c, d) {
        var f = [Wa === "" ? "<html>" : '<html dir="' + Wa + '">', '<head><meta charset="utf-8" /><title></title>', "<style>", "html {margin:0;padding:0;}", "body {margin:0;padding:5px;}", 'body, td {font:12px/1.5 "sans serif",tahoma,verdana,helvetica;}', "body, p, div {word-wrap: break-word;}", "p {margin:5px 0;}", "table {border-collapse:collapse;}", "img {border:0;}", "noscript {display:none;}", "table.ke-zeroborder td {border:1px dotted #AAA;}",
            "img.ke-flash {", "\tborder:1px solid #AAA;", "\tbackground-image:url(" + a + "common/flash.gif);", "\tbackground-position:center center;", "\tbackground-repeat:no-repeat;", "\twidth:100px;", "\theight:100px;", "}", "img.ke-rm {", "\tborder:1px solid #AAA;", "\tbackground-image:url(" + a + "common/rm.gif);", "\tbackground-position:center center;", "\tbackground-repeat:no-repeat;", "\twidth:100px;", "\theight:100px;", "}", "img.ke-media {", "\tborder:1px solid #AAA;", "\tbackground-image:url(" + a + "common/media.gif);", "\tbackground-position:center center;",
            "\tbackground-repeat:no-repeat;", "\twidth:100px;", "\theight:100px;", "}", "img.ke-anchor {", "\tborder:1px dashed #666;", "\twidth:16px;", "\theight:16px;", "}", ".ke-script, .ke-noscript {", "\tdisplay:none;", "\tfont-size:0;", "\twidth:0;", "\theight:0;", "}", ".ke-pagebreak {", "\tborder:1px dotted #AAA;", "\tfont-size:0;", "\theight:2px;", "}", "</style>"];
        W(c) || (c = [c]);
        j(c, function (a, b) {
            b && f.push('<link href="' + b + '" rel="stylesheet" />')
        });
        d && f.push("<style>" + d + "</style>");
        f.push("</head><body " + (b ? 'class="' +
            b + '"' : "") + "></body></html>");
        return f.join("\n")
    }

    function ma(a, b) {
        return a.hasVal() ? a.val(b) : a.html(b)
    }

    function na(a) {
        this.init(a)
    }

    function zb(a) {
        return new na(a)
    }

    function Ab(a, b) {
        var c = this.get(a);
        c && !c.hasClass("ke-disabled") && b(c)
    }

    function Aa(a) {
        this.init(a)
    }

    function Bb(a) {
        return new Aa(a)
    }

    function oa(a) {
        this.init(a)
    }

    function Xa(a) {
        return new oa(a)
    }

    function pa(a) {
        this.init(a)
    }

    function Cb(a) {
        return new pa(a)
    }

    function Ya(a) {
        this.init(a)
    }

    function qa(a) {
        this.init(a)
    }

    function Db(a) {
        return new qa(a)
    }

    function Za(a, b) {
        var c = document.getElementsByTagName("head")[0] || (N ? document.body : document.documentElement), d = document.createElement("script");
        c.appendChild(d);
        d.src = a;
        d.charset = "utf-8";
        d.onload = d.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded")b && b(), d.onload = d.onreadystatechange = null, c.removeChild(d)
        }
    }

    function Eb(a) {
        var b = a.indexOf("?");
        return b > 0 ? a.substr(0, b) : a
    }

    function $a(a) {
        for (var b = document.getElementsByTagName("head")[0] || (N ? document.body : document.documentElement),
                 c = document.createElement("link"), d = Eb(ga(a, "absolute")), f = e('link[rel="stylesheet"]', b), g = 0, i = f.length; g < i; g++)if (Eb(ga(f[g].href, "absolute")) === d)return;
        b.appendChild(c);
        c.href = a;
        c.rel = "stylesheet"
    }

    function Fb(a, b) {
        if (a === n)return U;
        if (!b)return U[a];
        U[a] = b
    }

    function Gb(a) {
        var b, c = "core";
        if (b = /^(\w+)\.(\w+)$/.exec(a))c = b[1], a = b[2];
        return{ns: c, key: a}
    }

    function Hb(a, b) {
        b = b === n ? e.options.langType : b;
        if (typeof a === "string") {
            if (!L[b])return"no language";
            var c = a.length - 1;
            if (a.substr(c) === ".")return L[b][a.substr(0,
                c)];
            c = Gb(a);
            return L[b][c.ns][c.key]
        }
        j(a, function (a, c) {
            var g = Gb(a);
            L[b] || (L[b] = {});
            L[b][g.ns] || (L[b][g.ns] = {});
            L[b][g.ns][g.key] = c
        })
    }

    function Ba(a, b) {
        if (!a.collapsed) {
            var a = a.cloneRange().up(), c = a.startContainer, d = a.startOffset;
            if (ba || a.isControl())if ((c = e(c.childNodes[d])) && c.name == "img" && b(c))return c
        }
    }

    function Zb() {
        var a = this;
        e(a.edit.doc).contextmenu(function (b) {
            a.menu && a.hideMenu();
            if (a.useContextmenu) {
                if (a._contextmenus.length !== 0) {
                    var c = 0, d = [];
                    for (j(a._contextmenus, function () {
                        if (this.title ==
                            "-")d.push(this); else if (this.cond && this.cond() && (d.push(this), this.width && this.width > c))c = this.width
                    }); d.length > 0 && d[0].title == "-";)d.shift();
                    for (; d.length > 0 && d[d.length - 1].title == "-";)d.pop();
                    var f = null;
                    j(d, function (a) {
                        this.title == "-" && f.title == "-" && delete d[a];
                        f = this
                    });
                    if (d.length > 0) {
                        b.preventDefault();
                        var g = e(a.edit.iframe).pos(), i = Xa({x: g.x + b.clientX, y: g.y + b.clientY, width: c, css: {visibility: "hidden"}, shadowMode: a.shadowMode});
                        j(d, function () {
                            this.title && i.addItem(this)
                        });
                        var g = I(i.doc), h = i.div.height();
                        b.clientY + h >= g.clientHeight - 100 && i.pos(i.x, s(i.y) - h);
                        i.div.css("visibility", "visible");
                        a.menu = i
                    }
                }
            } else b.preventDefault()
        })
    }

    function $b() {
        function a(a) {
            for (a = e(a.commonAncestor()); a;) {
                if (a.type == 1 && !a.isStyle())break;
                a = a.parent()
            }
            return a.name
        }

        var b = this, c = b.edit.doc, d = b.newlineTag;
        if (!(p && d !== "br") && (!ca || !(B < 3 && d !== "p")) && !(Ma && B < 9)) {
            var f = u("h1,h2,h3,h4,h5,h6,pre,li"), g = u("p,h1,h2,h3,h4,h5,h6,pre,li,blockquote");
            e(c).keydown(function (e) {
                if (!(e.which != 13 || e.shiftKey || e.ctrlKey || e.altKey)) {
                    b.cmd.selection();
                    var h = a(b.cmd.range);
                    h == "marquee" || h == "select" || (d === "br" && !f[h] ? (e.preventDefault(), b.insertHtml("<br />" + (p && B < 9 ? "" : "\u200b"))) : g[h] || O(c, "formatblock", "<p>"))
                }
            });
            e(c).keyup(function (f) {
                if (!(f.which != 13 || f.shiftKey || f.ctrlKey || f.altKey) && d != "br" && !ca)if (b.cmd.selection(), f = a(b.cmd.range), !(f == "marquee" || f == "select"))if (g[f] || O(c, "formatblock", "<p>"), f = b.cmd.commonAncestor("div")) {
                    for (var h = e("<p></p>"), k = f[0].firstChild; k;) {
                        var m = k.nextSibling;
                        h.append(k);
                        k = m
                    }
                    f.before(h);
                    f.remove();
                    b.cmd.range.selectNodeContents(h[0]);
                    b.cmd.select()
                }
            })
        }
    }

    function ac() {
        var a = this, b = a.edit.doc;
        e(b).keydown(function (c) {
            if (c.which == 9)if (c.preventDefault(), a.afterTab)a.afterTab.call(a, c); else {
                var c = a.cmd, d = c.range;
                d.shrink();
                d.collapsed && d.startContainer.nodeType == 1 && (d.insertNode(e("@&nbsp;", b)[0]), c.select());
                a.insertHtml("&nbsp;&nbsp;&nbsp;&nbsp;")
            }
        })
    }

    function bc() {
        var a = this;
        e(a.edit.textarea[0], a.edit.win).focus(function (b) {
            a.afterFocus && a.afterFocus.call(a, b)
        }).blur(function (b) {
            a.afterBlur && a.afterBlur.call(a, b)
        })
    }

    function V(a) {
        return A(a.replace(/<span [^>]*id="?__kindeditor_bookmark_\w+_\d+__"?[^>]*><\/span>/ig,
            ""))
    }

    function ab(a) {
        return a.replace(/<div[^>]+class="?__kindeditor_paste__"?[^>]*>[\s\S]*?<\/div>/ig, "")
    }

    function Ib(a, b) {
        if (a.length === 0)a.push(b); else {
            var c = a[a.length - 1];
            V(b.html) !== V(c.html) && a.push(b)
        }
    }

    function Jb(a, b) {
        var c = this.edit, d = c.doc.body, f, g;
        if (a.length === 0)return this;
        c.designMode ? (f = this.cmd.range, g = f.createBookmark(!0), g.html = d.innerHTML) : g = {html: d.innerHTML};
        Ib(b, g);
        var i = a.pop();
        V(g.html) === V(i.html) && a.length > 0 && (i = a.pop());
        c.designMode ? (c.html(i.html), i.start && (f.moveToBookmark(i),
            this.select())) : e(d).html(V(i.html));
        return this
    }

    function ra(a) {
        function b(a, b) {
            ra.prototype[a] === n && (c[a] = b);
            c.options[a] = b
        }

        var c = this;
        c.options = {};
        j(a, function (c) {
            b(c, a[c])
        });
        j(e.options, function (a, d) {
            c[a] === n && b(a, d)
        });
        var d = e(c.srcElement || "<textarea/>");
        if (!c.width)c.width = d[0].style.width || d.width();
        if (!c.height)c.height = d[0].style.height || d.height();
        b("width", l(c.width, c.minWidth));
        b("height", l(c.height, c.minHeight));
        b("width", r(c.width));
        b("height", r(c.height));
        if (cc && (!dc || B < 534))c.designMode = !1;
        c.srcElement = d;
        c.initContent = "";
        c.plugin = {};
        c.isCreated = !1;
        c.isLoading = !1;
        c._handlers = {};
        c._contextmenus = [];
        c._undoStack = [];
        c._redoStack = [];
        c._calledPlugins = {};
        c._firstAddBookmark = !0;
        c.menu = c.contextmenu = null;
        c.dialogs = []
    }

    function Kb(a, b) {
        function c(a) {
            j(U, function (b, c) {
                c.call(a, KindEditor)
            });
            return a.create()
        }

        b = b || {};
        b.basePath = l(b.basePath, e.basePath);
        b.themesPath = l(b.themesPath, b.basePath + "themes/");
        b.langPath = l(b.langPath, b.basePath + "lang/");
        b.pluginsPath = l(b.pluginsPath, b.basePath + "plugins/");
        if (l(b.loadStyleMode, e.options.loadStyleMode)) {
            var d = l(b.themeType, e.options.themeType);
            $a(b.themesPath + "default/default.css");
            $a(b.themesPath + d + "/" + d + ".css")
        }
        if ((d = e(a)) && d.length !== 0) {
            if (d.length > 1)return d.each(function () {
                Kb(this, b)
            }), _instances[0];
            b.srcElement = d[0];
            var f = new ra(b);
            _instances.push(f);
            if (L[f.langType])return c(f);
            Za(f.langPath + f.langType + ".js?ver=" + encodeURIComponent(e.DEBUG ? Ca : Da), function () {
                c(f)
            });
            return f
        }
    }

    function Lb(a, b) {
        e(a).each(function (a, d) {
            e.each(_instances, function (a, c) {
                if (c && c.srcElement[0] == d)return b.call(c, a, c), !1
            })
        })
    }

    if (!z.KindEditor) {
        if (!z.console)z.console = {};
        if (!console.log)console.log = function () {
        };
        var Da = "4.1.3 (2012-10-14)", q = navigator.userAgent.toLowerCase(), p = q.indexOf("msie") > -1 && q.indexOf("opera") == -1, ca = q.indexOf("gecko") > -1 && q.indexOf("khtml") == -1, ba = q.indexOf("applewebkit") > -1, Ma = q.indexOf("opera") > -1, cc = q.indexOf("mobile") > -1, dc = /ipad|iphone|ipod/.test(q), N = document.compatMode != "CSS1Compat", B = (q = /(?:msie|firefox|webkit|opera)[\/:\s](\d+)/.exec(q)) ?
                q[1] : "0", Ca = (new Date).getTime(), P = Math.round, e = {DEBUG: !1, VERSION: Da, IE: p, GECKO: ca, WEBKIT: ba, OPERA: Ma, V: B, TIME: Ca, each: j, isArray: W, isFunction: cb, inArray: M, inString: sa, trim: A, addUnit: r, removeUnit: s, escape: D, unescape: Fa, toCamel: da, toHex: ta, toMap: u, toArray: Ga, undef: l, invalidUrl: function (a) {
                return!a || /[<>"]/.test(a)
            }, addParam: function (a, b) {
                return a.indexOf("?") >= 0 ? a + "&" + b : a + "?" + b
            }, extend: F, json: db}, kb = u("a,abbr,acronym,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,img,input,ins,kbd,label,map,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
            lb = u("address,applet,blockquote,body,center,dd,dir,div,dl,dt,fieldset,form,frameset,h1,h2,h3,h4,h5,h6,head,hr,html,iframe,ins,isindex,li,map,menu,meta,noframes,noscript,object,ol,p,pre,script,style,table,tbody,td,tfoot,th,thead,title,tr,ul"), jb = u("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"), Mb = u("b,basefont,big,del,em,font,i,s,small,span,strike,strong,sub,sup,u"), ec = u("img,table,input,textarea,button"), Ia = u("pre,style,script"), Ea = u("html,head,body,td,tr,table,ol,ul,li");
        u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
        var Tb = u("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), Nb = u("input,button,textarea,select");
        e.basePath = function () {
            for (var a = document.getElementsByTagName("script"), b, c = 0, d = a.length; c < d; c++)if (b = a[c].src || "", /kindeditor[\w\-\.]*\.js/.test(b))return b.substring(0, b.lastIndexOf("/") + 1);
            return""
        }();
        e.options = {designMode: !0, fullscreenMode: !1, filterMode: !0, wellFormatMode: !0, shadowMode: !0, loadStyleMode: !0,
            basePath: e.basePath, themesPath: e.basePath + "themes/", langPath: e.basePath + "lang/", pluginsPath: e.basePath + "plugins/", themeType: "default", langType: "zh_CN", urlType: "", newlineTag: "p", resizeType: 2, syncType: "form", pasteType: 2, dialogAlignType: "page", useContextmenu: !0, fullscreenShortcut: !1, bodyClass: "ke-content", indentChar: "\t", cssPath: "", cssData: "", minWidth: 650, minHeight: 100, minChangeSize: 5, items: ["source", "|", "undo", "redo", "|", "preview", "print", "template", "code", "cut", "copy", "paste", "plainpaste", "wordpaste",
                "|", "justifyleft", "justifycenter", "justifyright", "justifyfull", "insertorderedlist", "insertunorderedlist", "indent", "outdent", "subscript", "superscript", "clearhtml", "quickformat", "selectall", "|", "fullscreen", "/", "formatblock", "fontname", "fontsize", "|", "forecolor", "hilitecolor", "bold", "italic", "underline", "strikethrough", "lineheight", "removeformat", "|", "image", "multiimage", "flash", "media", "insertfile", "table", "hr", "emoticons", "baidumap", "pagebreak", "anchor", "link", "unlink", "|", "about"], noDisableItems: ["source",
                "fullscreen"], colorTable: [
                ["#E53333", "#E56600", "#FF9900", "#64451D", "#DFC5A4", "#FFE500"],
                ["#009900", "#006600", "#99BB00", "#B8D100", "#60D978", "#00D5FF"],
                ["#337FE5", "#003399", "#4C33E5", "#9933E5", "#CC33E5", "#EE33EE"],
                ["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333", "#000000"]
            ], fontSizeTable: ["9px", "10px", "12px", "14px", "16px", "18px", "24px", "32px"], htmlTags: {font: ["id", "class", "color", "size", "face", ".background-color"], span: ["id", "class", ".color", ".background-color", ".font-size", ".font-family", ".background",
                ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".line-height"], div: ["id", "class", "align", ".border", ".margin", ".padding", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".font-weight", ".background", ".font-style", ".text-decoration", ".vertical-align", ".margin-left"], table: ["id", "class", "border", "cellspacing", "cellpadding", "width", "height", "align", "bordercolor", ".padding", ".margin", ".border", "bgcolor", ".text-align", ".color", ".background-color", ".font-size", ".font-family",
                ".font-weight", ".font-style", ".text-decoration", ".background", ".width", ".height", ".border-collapse"], "td,th": ["id", "class", "align", "valign", "width", "height", "colspan", "rowspan", "bgcolor", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".background", ".border"], a: ["id", "class", "href", "target", "name"], embed: ["id", "class", "src", "width", "height", "type", "loop", "autostart", "quality", ".width", ".height", "align", "allowscriptaccess"],
                img: ["id", "class", "src", "width", "height", "border", "alt", "title", "align", ".width", ".height", ".border"], "p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6": ["id", "class", "align", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".background", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".text-indent", ".margin-left"], pre: ["id", "class"], hr: ["id", "class", ".page-break-after"], "br,tbody,tr,strong,b,sub,sup,em,i,u,strike,s,del": ["id", "class"], iframe: ["id", "class", "src", "frameborder",
                    "width", "height", ".width", ".height"]}, layout: '<div class="container"><div class="toolbar"></div><div class="edit"></div><div class="statusbar"></div></div>'};
        var eb = !1, Ob = u("8,9,13,32,46,48..57,59,61,65..90,106,109..111,188,190..192,219..222"), q = u("33..40"), bb = {};
        j(Ob, function (a, b) {
            bb[a] = b
        });
        j(q, function (a, b) {
            bb[a] = b
        });
        var fc = "altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,metaKey,newValue,offsetX,offsetY,originalTarget,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which".split(",");
        F(fb, {init: function (a, b) {
            var c = this, d = a.ownerDocument || a.document || a;
            c.event = b;
            j(fc, function (a, d) {
                c[d] = b[d]
            });
            if (!c.target)c.target = c.srcElement || d;
            if (c.target.nodeType === 3)c.target = c.target.parentNode;
            if (!c.relatedTarget && c.fromElement)c.relatedTarget = c.fromElement === c.target ? c.toElement : c.fromElement;
            if (c.pageX == null && c.clientX != null) {
                var f = d.documentElement, d = d.body;
                c.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0);
                c.pageY = c.clientY + (f && f.scrollTop ||
                    d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)
            }
            if (!c.which && (c.charCode || c.charCode === 0 ? c.charCode : c.keyCode))c.which = c.charCode || c.keyCode;
            if (!c.metaKey && c.ctrlKey)c.metaKey = c.ctrlKey;
            if (!c.which && c.button !== n)c.which = c.button & 1 ? 1 : c.button & 2 ? 3 : c.button & 4 ? 2 : 0;
            switch (c.which) {
                case 186:
                    c.which = 59;
                    break;
                case 187:
                case 107:
                case 43:
                    c.which = 61;
                    break;
                case 189:
                case 45:
                    c.which = 109;
                    break;
                case 42:
                    c.which = 106;
                    break;
                case 47:
                    c.which = 111;
                    break;
                case 78:
                    c.which = 110
            }
            c.which >= 96 && c.which <= 105 && (c.which -= 48)
        },
            preventDefault: function () {
                var a = this.event;
                a.preventDefault && a.preventDefault();
                a.returnValue = !1
            }, stopPropagation: function () {
                var a = this.event;
                a.stopPropagation && a.stopPropagation();
                a.cancelBubble = !0
            }, stop: function () {
                this.preventDefault();
                this.stopPropagation()
            }});
        var X = "kindeditor_" + Ca, hb = 0, v = {};
        p && z.attachEvent("onunload", function () {
            j(v, function (a, b) {
                b.el && ea(b.el)
            })
        });
        e.ctrl = Ha;
        e.ready = function (a) {
            function b() {
                f || (f = !0, a(KindEditor))
            }

            function c() {
                if (!f) {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(c,
                            100);
                        return
                    }
                    b()
                }
            }

            function d() {
                document.readyState === "complete" && b()
            }

            var f = !1;
            if (document.addEventListener)Y(document, "DOMContentLoaded", b); else if (document.attachEvent) {
                Y(document, "readystatechange", d);
                var g = !1;
                try {
                    g = z.frameElement == null
                } catch (e) {
                }
                document.documentElement.doScroll && g && c()
            }
            Y(z, "load", b)
        };
        e.formatUrl = ga;
        e.formatHtml = R;
        e.getCssList = fa;
        e.getAttrList = J;
        e.mediaType = nb;
        e.mediaAttrs = ob;
        e.mediaEmbed = Ja;
        e.mediaImg = pb;
        e.clearMsWord = mb;
        e.tmpl = function (a, b) {
            var c = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" +
                a.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
            return b ? c(b) : c
        };
        q = document.createElement("div");
        q.setAttribute("className", "t");
        var Ub = q.className !== "t";
        e.query = function (a, b) {
            var c = za(a, b);
            return c.length > 0 ? c[0] : null
        };
        e.queryAll = za;
        F(C, {init: function (a) {
            for (var a = W(a) ? a : [a], b = 0, c = 0, d = a.length; c < d; c++)a[c] && (this[c] = a[c].constructor ===
                C ? a[c][0] : a[c], b++);
            this.length = b;
            this.doc = S(this[0]);
            this.name = La(this[0]);
            this.type = this.length > 0 ? this[0].nodeType : null;
            this.win = T(this[0])
        }, each: function (a) {
            for (var b = 0; b < this.length; b++)if (a.call(this[b], b, this[b]) === !1)break;
            return this
        }, bind: function (a, b) {
            this.each(function () {
                Y(this, a, b)
            });
            return this
        }, unbind: function (a, b) {
            this.each(function () {
                ea(this, a, b)
            });
            return this
        }, fire: function (a) {
            if (this.length < 1)return this;
            ib(this[0], a);
            return this
        }, hasAttr: function (a) {
            if (this.length < 1)return!1;
            return!!ya(this[0],
                a)
        }, attr: function (a, b) {
            var c = this;
            if (a === n)return J(c.outer());
            if (typeof a === "object")return j(a, function (a, b) {
                c.attr(a, b)
            }), c;
            if (b === n)return b = c.length < 1 ? null : ya(c[0], a), b === null ? "" : b;
            c.each(function () {
                Ka(this, a, b)
            });
            return c
        }, removeAttr: function (a) {
            this.each(function () {
                var b = a;
                p && B < 8 && b.toLowerCase() == "class" && (b = "className");
                Ka(this, b, "");
                this.removeAttribute(b)
            });
            return this
        }, get: function (a) {
            if (this.length < 1)return null;
            return this[a || 0]
        }, eq: function (a) {
            if (this.length < 1)return null;
            return this[a] ?
                new C(this[a]) : null
        }, hasClass: function (a) {
            if (this.length < 1)return!1;
            return sa(a, this[0].className, " ")
        }, addClass: function (a) {
            this.each(function () {
                if (!sa(a, this.className, " "))this.className = A(this.className + " " + a)
            });
            return this
        }, removeClass: function (a) {
            this.each(function () {
                if (sa(a, this.className, " "))this.className = A(this.className.replace(RegExp("(^|\\s)" + a + "(\\s|$)"), " "))
            });
            return this
        }, html: function (a) {
            if (a === n) {
                if (this.length < 1 || this.type != 1)return"";
                return R(this[0].innerHTML)
            }
            this.each(function () {
                Vb(this,
                    a)
            });
            return this
        }, text: function () {
            if (this.length < 1)return"";
            return p ? this[0].innerText : this[0].textContent
        }, hasVal: function () {
            if (this.length < 1)return!1;
            return!!Nb[La(this[0])]
        }, val: function (a) {
            if (a === n) {
                if (this.length < 1)return"";
                return this.hasVal() ? this[0].value : this.attr("value")
            } else return this.each(function () {
                Nb[La(this)] ? this.value = a : Ka(this, "value", a)
            }), this
        }, css: function (a, b) {
            var c = this;
            if (a === n)return fa(c.attr("style"));
            if (typeof a === "object")return j(a, function (a, b) {
                c.css(a, b)
            }), c;
            if (b ===
                n) {
                if (c.length < 1)return"";
                return c[0].style[da(a)] || Wb(c[0], a) || ""
            }
            c.each(function () {
                this.style[da(a)] = b
            });
            return c
        }, width: function (a) {
            if (a === n) {
                if (this.length < 1)return 0;
                return this[0].offsetWidth
            }
            return this.css("width", r(a))
        }, height: function (a) {
            if (a === n) {
                if (this.length < 1)return 0;
                return this[0].offsetHeight
            }
            return this.css("height", r(a))
        }, opacity: function (a) {
            this.each(function () {
                this.style.opacity === n ? this.style.filter = a == 1 ? "" : "alpha(opacity=" + a * 100 + ")" : this.style.opacity = a == 1 ? "" : a
            });
            return this
        },
            data: function (a, b) {
                a = "kindeditor_data_" + a;
                if (b === n) {
                    if (this.length < 1)return null;
                    return this[0][a]
                }
                this.each(function () {
                    this[a] = b
                });
                return this
            }, pos: function () {
                var a = this[0], b = 0, c = 0;
                if (a)if (a.getBoundingClientRect)a = a.getBoundingClientRect(), c = Z(this.doc), b = a.left + c.x, c = a.top + c.y; else for (; a;)b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
                return{x: P(b), y: P(c)}
            }, clone: function (a) {
                if (this.length < 1)return new C([]);
                return new C(this[0].cloneNode(a))
            }, append: function (a) {
                this.each(function () {
                    this.appendChild &&
                    this.appendChild(e(a)[0])
                });
                return this
            }, appendTo: function (a) {
                this.each(function () {
                    e(a)[0].appendChild(this)
                });
                return this
            }, before: function (a) {
                this.each(function () {
                    this.parentNode.insertBefore(e(a)[0], this)
                });
                return this
            }, after: function (a) {
                this.each(function () {
                    this.nextSibling ? this.parentNode.insertBefore(e(a)[0], this.nextSibling) : this.parentNode.appendChild(e(a)[0])
                });
                return this
            }, replaceWith: function (a) {
                var b = [];
                this.each(function (c, d) {
                    ea(d);
                    var f = e(a)[0];
                    d.parentNode.replaceChild(f, d);
                    b.push(f)
                });
                return e(b)
            }, empty: function () {
                this.each(function (a, b) {
                    for (var c = b.firstChild; c;) {
                        if (!b.parentNode)break;
                        var d = c.nextSibling;
                        c.parentNode.removeChild(c);
                        c = d
                    }
                });
                return this
            }, remove: function (a) {
                var b = this;
                b.each(function (c, d) {
                    if (d.parentNode) {
                        ea(d);
                        if (a)for (var f = d.firstChild; f;) {
                            var g = f.nextSibling;
                            d.parentNode.insertBefore(f, d);
                            f = g
                        }
                        d.parentNode.removeChild(d);
                        delete b[c]
                    }
                });
                b.length = 0;
                return b
            }, show: function (a) {
                a === n && (a = this._originDisplay || "");
                if (this.css("display") != "none")return this;
                return this.css("display",
                    a)
            }, hide: function () {
                if (this.length < 1)return this;
                this._originDisplay = this[0].style.display;
                return this.css("display", "none")
            }, outer: function () {
                if (this.length < 1)return"";
                var a = this.doc.createElement("div");
                a.appendChild(this[0].cloneNode(!0));
                return R(a.innerHTML)
            }, isSingle: function () {
                return!!jb[this.name]
            }, isInline: function () {
                return!!kb[this.name]
            }, isBlock: function () {
                return!!lb[this.name]
            }, isStyle: function () {
                return!!Mb[this.name]
            }, isControl: function () {
                return!!ec[this.name]
            }, contains: function (a) {
                if (this.length <
                    1)return!1;
                return xa(this[0], e(a)[0])
            }, parent: function () {
                if (this.length < 1)return null;
                var a = this[0].parentNode;
                return a ? new C(a) : null
            }, children: function () {
                if (this.length < 1)return new C([]);
                for (var a = [], b = this[0].firstChild; b;)(b.nodeType != 3 || A(b.nodeValue) !== "") && a.push(b), b = b.nextSibling;
                return new C(a)
            }, first: function () {
                var a = this.children();
                return a.length > 0 ? a.eq(0) : null
            }, last: function () {
                var a = this.children();
                return a.length > 0 ? a.eq(a.length - 1) : null
            }, index: function () {
                if (this.length < 1)return-1;
                for (var a =
                    -1, b = this[0]; b;)a++, b = b.previousSibling;
                return a
            }, prev: function () {
                if (this.length < 1)return null;
                var a = this[0].previousSibling;
                return a ? new C(a) : null
            }, next: function () {
                if (this.length < 1)return null;
                var a = this[0].nextSibling;
                return a ? new C(a) : null
            }, scan: function (a, b) {
                function c(d) {
                    for (d = b ? d.firstChild : d.lastChild; d;) {
                        var f = b ? d.nextSibling : d.previousSibling;
                        if (a(d) === !1)return!1;
                        if (c(d) === !1)return!1;
                        d = f
                    }
                }

                if (!(this.length < 1))return b = b === n ? !0 : b, c(this[0]), this
            }});
        j("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error,contextmenu".split(","),
            function (a, b) {
                C.prototype[b] = function (a) {
                    return a ? this.bind(b, a) : this.fire(b)
                }
            });
        q = e;
        e = function (a, b) {
            function c(a) {
                a[0] || (a = []);
                return new C(a)
            }

            if (!(a === n || a === null)) {
                if (typeof a === "string") {
                    b && (b = e(b)[0]);
                    var d = a.length;
                    a.charAt(0) === "@" && (a = a.substr(1));
                    if (a.length !== d || /<.+>/.test(a)) {
                        var d = (b ? b.ownerDocument || b : document).createElement("div"), f = [];
                        d.innerHTML = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + a;
                        for (var g = 0, i = d.childNodes.length; g < i; g++) {
                            var h = d.childNodes[g];
                            h.id != "__kindeditor_temp_tag__" && f.push(h)
                        }
                        return c(f)
                    }
                    return c(za(a, b))
                }
                if (a && a.constructor === C)return a;
                a.toArray && (a = a.toArray());
                if (W(a))return c(a);
                return c(Ga(arguments))
            }
        };
        j(q, function (a, b) {
            e[a] = b
        });
        e.NodeClass = C;
        z.KindEditor = e;
        var ia = 0, ha = 1, $ = 2, ja = 3, Pb = 0;
        F(K, {init: function (a) {
            this.startContainer = a;
            this.startOffset = 0;
            this.endContainer = a;
            this.endOffset = 0;
            this.collapsed = !0;
            this.doc = a
        }, commonAncestor: function () {
            function a(a) {
                for (var b = []; a;)b.push(a), a = a.parentNode;
                return b
            }

            for (var b = a(this.startContainer),
                     c = a(this.endContainer), d = 0, f = b.length, g = c.length, e, h; ++d;)if (e = b[f - d], h = c[g - d], !e || !h || e !== h)break;
            return b[f - d + 1]
        }, setStart: function (a, b) {
            var c = this.doc;
            this.startContainer = a;
            this.startOffset = b;
            if (this.endContainer === c)this.endContainer = a, this.endOffset = b;
            return qb(this)
        }, setEnd: function (a, b) {
            var c = this.doc;
            this.endContainer = a;
            this.endOffset = b;
            if (this.startContainer === c)this.startContainer = a, this.startOffset = b;
            return qb(this)
        }, setStartBefore: function (a) {
            return this.setStart(a.parentNode || this.doc,
                e(a).index())
        }, setStartAfter: function (a) {
            return this.setStart(a.parentNode || this.doc, e(a).index() + 1)
        }, setEndBefore: function (a) {
            return this.setEnd(a.parentNode || this.doc, e(a).index())
        }, setEndAfter: function (a) {
            return this.setEnd(a.parentNode || this.doc, e(a).index() + 1)
        }, selectNode: function (a) {
            return this.setStartBefore(a).setEndAfter(a)
        }, selectNodeContents: function (a) {
            var b = e(a);
            if (b.type == 3 || b.isSingle())return this.selectNode(a);
            b = b.children();
            if (b.length > 0)return this.setStartBefore(b[0]).setEndAfter(b[b.length -
                1]);
            return this.setStart(a, 0).setEnd(a, 0)
        }, collapse: function (a) {
            if (a)return this.setEnd(this.startContainer, this.startOffset);
            return this.setStart(this.endContainer, this.endOffset)
        }, compareBoundaryPoints: function (a, b) {
            var c = this.get(), d = b.get();
            if (p) {
                var f = {};
                f[ia] = "StartToStart";
                f[ha] = "EndToStart";
                f[$] = "EndToEnd";
                f[ja] = "StartToEnd";
                c = c.compareEndPoints(f[a], d);
                if (c !== 0)return c;
                var g, i, h, k;
                if (a === ia || a === ja)g = this.startContainer, h = this.startOffset;
                if (a === ha || a === $)g = this.endContainer, h = this.endOffset;
                if (a === ia || a === ha)i = b.startContainer, k = b.startOffset;
                if (a === $ || a === ja)i = b.endContainer, k = b.endOffset;
                if (g === i)return g = h - k, g > 0 ? 1 : g < 0 ? -1 : 0;
                for (c = i; c && c.parentNode !== g;)c = c.parentNode;
                if (c)return e(c).index() >= h ? -1 : 1;
                for (c = g; c && c.parentNode !== i;)c = c.parentNode;
                if (c)return e(c).index() >= k ? 1 : -1;
                if ((c = e(i).next()) && c.contains(g))return 1;
                if ((c = e(g).next()) && c.contains(i))return-1
            } else return c.compareBoundaryPoints(a, d)
        }, cloneRange: function () {
            return(new K(this.doc)).setStart(this.startContainer, this.startOffset).setEnd(this.endContainer,
                this.endOffset)
        }, toString: function () {
            var a = this.get();
            return(p ? a.text : a.toString()).replace(/\r\n|\n|\r/g, "")
        }, cloneContents: function () {
            return Na(this, !0, !1)
        }, deleteContents: function () {
            return Na(this, !1, !0)
        }, extractContents: function () {
            return Na(this, !0, !0)
        }, insertNode: function (a) {
            var b = this.startContainer, c = this.startOffset, d = this.endContainer, f = this.endOffset, e, i, h, k = 1;
            if (a.nodeName.toLowerCase() === "#document-fragment")e = a.firstChild, i = a.lastChild, k = a.childNodes.length;
            b.nodeType == 1 ? (h = b.childNodes[c]) ?
                (b.insertBefore(a, h), b === d && (f += k)) : b.appendChild(a) : b.nodeType == 3 && (c === 0 ? (b.parentNode.insertBefore(a, b), b.parentNode === d && (f += k)) : c >= b.nodeValue.length ? b.nextSibling ? b.parentNode.insertBefore(a, b.nextSibling) : b.parentNode.appendChild(a) : (h = c > 0 ? b.splitText(c) : b, b.parentNode.insertBefore(a, h), b === d && (d = h, f -= c)));
            e ? this.setStartBefore(e).setEndAfter(i) : this.selectNode(a);
            if (this.compareBoundaryPoints($, this.cloneRange().setEnd(d, f)) >= 1)return this;
            return this.setEnd(d, f)
        }, surroundContents: function (a) {
            a.appendChild(this.extractContents());
            return this.insertNode(a).selectNode(a)
        }, isControl: function () {
            var a = this.startContainer, b = this.startOffset, c = this.endContainer, d = this.endOffset;
            return a.nodeType == 1 && a === c && b + 1 === d && e(a.childNodes[b]).isControl()
        }, get: function (a) {
            var b = this.doc;
            if (!p) {
                b = b.createRange();
                try {
                    b.setStart(this.startContainer, this.startOffset), b.setEnd(this.endContainer, this.endOffset)
                } catch (c) {
                }
                return b
            }
            if (a && this.isControl())return b = b.body.createControlRange(), b.addElement(this.startContainer.childNodes[this.startOffset]),
                b;
            a = this.cloneRange().down();
            b = b.body.createTextRange();
            b.setEndPoint("StartToStart", sb(a.startContainer, a.startOffset));
            b.setEndPoint("EndToStart", sb(a.endContainer, a.endOffset));
            return b
        }, html: function () {
            return e(this.cloneContents()).outer()
        }, down: function () {
            function a(a, d, f) {
                if (a.nodeType == 1 && (a = e(a).children(), a.length !== 0)) {
                    var g, i, h, k;
                    d > 0 && (g = a.eq(d - 1));
                    d < a.length && (i = a.eq(d));
                    if (g && g.type == 3)h = g[0], k = h.nodeValue.length;
                    i && i.type == 3 && (h = i[0], k = 0);
                    h && (f ? b.setStart(h, k) : b.setEnd(h, k))
                }
            }

            var b =
                this;
            a(b.startContainer, b.startOffset, !0);
            a(b.endContainer, b.endOffset, !1);
            return b
        }, up: function () {
            function a(a, d, f) {
                a.nodeType == 3 && (d === 0 ? f ? b.setStartBefore(a) : b.setEndBefore(a) : d == a.nodeValue.length && (f ? b.setStartAfter(a) : b.setEndAfter(a)))
            }

            var b = this;
            a(b.startContainer, b.startOffset, !0);
            a(b.endContainer, b.endOffset, !1);
            return b
        }, enlarge: function (a) {
            function b(b, f, g) {
                b = e(b);
                if (!(b.type == 3 || Ea[b.name] || !a && b.isBlock()))if (f === 0) {
                    for (; !b.prev();) {
                        f = b.parent();
                        if (!f || Ea[f.name] || !a && f.isBlock())break;
                        b = f
                    }
                    g ? c.setStartBefore(b[0]) : c.setEndBefore(b[0])
                } else if (f == b.children().length) {
                    for (; !b.next();) {
                        f = b.parent();
                        if (!f || Ea[f.name] || !a && f.isBlock())break;
                        b = f
                    }
                    g ? c.setStartAfter(b[0]) : c.setEndAfter(b[0])
                }
            }

            var c = this;
            c.up();
            b(c.startContainer, c.startOffset, !0);
            b(c.endContainer, c.endOffset, !1);
            return c
        }, shrink: function () {
            for (var a, b = this.collapsed; this.startContainer.nodeType == 1 && (a = this.startContainer.childNodes[this.startOffset]) && a.nodeType == 1 && !e(a).isSingle();)this.setStart(a, 0);
            if (b)return this.collapse(b);
            for (; this.endContainer.nodeType == 1 && this.endOffset > 0 && (a = this.endContainer.childNodes[this.endOffset - 1]) && a.nodeType == 1 && !e(a).isSingle();)this.setEnd(a, a.childNodes.length);
            return this
        }, createBookmark: function (a) {
            var b, c = e('<span style="display:none;"></span>', this.doc)[0];
            c.id = "__kindeditor_bookmark_start_" + Pb++ + "__";
            if (!this.collapsed)b = c.cloneNode(!0), b.id = "__kindeditor_bookmark_end_" + Pb++ + "__";
            b && this.cloneRange().collapse(!1).insertNode(b).setEndBefore(b);
            this.insertNode(c).setStartAfter(c);
            return{start: a ? "#" + c.id : c, end: b ? a ? "#" + b.id : b : null}
        }, moveToBookmark: function (a) {
            var b = this.doc, c = e(a.start, b), a = a.end ? e(a.end, b) : null;
            if (!c || c.length < 1)return this;
            this.setStartBefore(c[0]);
            c.remove();
            a && a.length > 0 ? (this.setEndBefore(a[0]), a.remove()) : this.collapse(!0);
            return this
        }, dump: function () {
            console.log("--------------------");
            console.log(this.startContainer.nodeType == 3 ? this.startContainer.nodeValue : this.startContainer, this.startOffset);
            console.log(this.endContainer.nodeType == 3 ? this.endContainer.nodeValue :
                this.endContainer, this.endOffset)
        }});
        e.RangeClass = K;
        e.range = Oa;
        e.START_TO_START = ia;
        e.START_TO_END = ha;
        e.END_TO_END = $;
        e.END_TO_START = ja;
        F(la, {init: function (a) {
            var b = a.doc;
            this.doc = b;
            this.win = T(b);
            this.sel = Pa(b);
            this.range = a
        }, selection: function (a) {
            var b = this.doc, c;
            c = Pa(b);
            var d;
            try {
                d = c.rangeCount > 0 ? c.getRangeAt(0) : c.createRange()
            } catch (f) {
            }
            c = p && (!d || !d.item && d.parentElement().ownerDocument !== b) ? null : d;
            this.sel = Pa(b);
            if (c)return this.range = Oa(c), e(this.range.startContainer).name == "html" && this.range.selectNodeContents(b.body).collapse(!1),
                this;
            a && this.range.selectNodeContents(b.body).collapse(!1);
            return this
        }, select: function (a) {
            var a = l(a, !0), b = this.sel, c = this.range.cloneRange().shrink(), d = c.startContainer, f = c.startOffset, g = S(d), i = this.win, h, k = !1;
            if (a && d.nodeType == 1 && c.collapsed) {
                if (p) {
                    b = e("<span>&nbsp;</span>", g);
                    c.insertNode(b[0]);
                    h = g.body.createTextRange();
                    try {
                        h.moveToElementText(b[0])
                    } catch (m) {
                    }
                    h.collapse(!1);
                    h.select();
                    b.remove();
                    i.focus();
                    return this
                }
                if (ba && (a = d.childNodes, e(d).isInline() || f > 0 && e(a[f - 1]).isInline() || a[f] && e(a[f]).isInline()))c.insertNode(g.createTextNode("\u200b")),
                    k = !0
            }
            if (p)try {
                h = c.get(!0), h.select()
            } catch (o) {
            } else k && c.collapse(!1), h = c.get(!0), b.removeAllRanges(), b.addRange(h);
            i.focus();
            return this
        }, wrap: function (a) {
            var b = this.range, c;
            c = e(a, this.doc);
            if (b.collapsed)return b.shrink(), b.insertNode(c[0]).selectNodeContents(c[0]), this;
            if (c.isBlock()) {
                for (var d = a = c.clone(!0); d.first();)d = d.first();
                d.append(b.extractContents());
                b.insertNode(a[0]).selectNode(a[0]);
                return this
            }
            b.enlarge();
            var f = b.createBookmark(), a = b.commonAncestor(), g = !1;
            e(a).scan(function (a) {
                if (!g &&
                    a == f.start)g = !0; else if (g) {
                    if (a == f.end)return!1;
                    var b = e(a), d;
                    a:{
                        for (d = b; d && d.name != "body";) {
                            if (Ia[d.name] || d.name == "div" && d.hasClass("ke-script")) {
                                d = !0;
                                break a
                            }
                            d = d.parent()
                        }
                        d = !1
                    }
                    if (!d && b.type == 3 && A(a.nodeValue).length > 0) {
                        for (var m; (m = b.parent()) && m.isStyle() && m.children().length == 1;)b = m;
                        m = c;
                        m = m.clone(!0);
                        if (b.type == 3)Sa(m).append(b.clone(!1)), b.replaceWith(m); else {
                            for (var a = b, o; (o = b.first()) && o.children().length == 1;)b = o;
                            o = b.first();
                            for (b = b.doc.createDocumentFragment(); o;)b.appendChild(o[0]), o = o.next();
                            o = a.clone(!0);
                            d = Sa(o);
                            for (var j = o, l = !1; m;) {
                                for (; j;)j.name === m.name && (Xb(j, m.attr(), m.css()), l = !0), j = j.first();
                                l || d.append(m.clone(!1));
                                l = !1;
                                m = m.first()
                            }
                            m = o;
                            b.firstChild && Sa(m).append(b);
                            a.replaceWith(m)
                        }
                    }
                }
            });
            b.moveToBookmark(f);
            return this
        }, split: function (a, b) {
            for (var c = this.range, d = c.doc, f = c.cloneRange().collapse(a), g = f.startContainer, i = f.startOffset, h = g.nodeType == 3 ? g.parentNode : g, k = !1, m; h && h.parentNode;) {
                m = e(h);
                if (b) {
                    if (!m.isStyle())break;
                    if (!Qa(m, b))break
                } else if (Ea[m.name])break;
                k = !0;
                h = h.parentNode
            }
            if (k)d =
                d.createElement("span"), c.cloneRange().collapse(!a).insertNode(d), a ? f.setStartBefore(h.firstChild).setEnd(g, i) : f.setStart(g, i).setEndAfter(h.lastChild), g = f.extractContents(), i = g.firstChild, k = g.lastChild, a ? (f.insertNode(g), c.setStartAfter(k).setEndBefore(d)) : (h.appendChild(g), c.setStartBefore(d).setEndBefore(i)), f = d.parentNode, f == c.endContainer && (h = e(d).prev(), g = e(d).next(), h && g && h.type == 3 && g.type == 3 ? c.setEnd(h[0], h[0].nodeValue.length) : a || c.setEnd(c.endContainer, c.endOffset - 1)), f.removeChild(d);
            return this
        },
            remove: function (a) {
                var b = this.doc, c = this.range;
                c.enlarge();
                if (c.startOffset === 0) {
                    for (var d = e(c.startContainer), f; (f = d.parent()) && f.isStyle() && f.children().length == 1;)d = f;
                    c.setStart(d[0], 0);
                    d = e(c.startContainer);
                    d.isBlock() && Ra(d, a);
                    (d = d.parent()) && d.isBlock() && Ra(d, a)
                }
                if (c.collapsed) {
                    this.split(!0, a);
                    b = c.startContainer;
                    d = c.startOffset;
                    if (d > 0 && (f = e(b.childNodes[d - 1])) && aa(f))f.remove(), c.setStart(b, d - 1);
                    (d = e(b.childNodes[d])) && aa(d) && d.remove();
                    aa(b) && (c.startBefore(b), b.remove());
                    c.collapse(!0);
                    return this
                }
                this.split(!0,
                    a);
                this.split(!1, a);
                var g = b.createElement("span"), i = b.createElement("span");
                c.cloneRange().collapse(!1).insertNode(i);
                c.cloneRange().collapse(!0).insertNode(g);
                var h = [], k = !1;
                e(c.commonAncestor()).scan(function (a) {
                    if (!k && a == g)k = !0; else {
                        if (a == i)return!1;
                        k && h.push(a)
                    }
                });
                e(g).remove();
                e(i).remove();
                b = c.startContainer;
                d = c.startOffset;
                f = c.endContainer;
                var m = c.endOffset;
                if (d > 0) {
                    var o = e(b.childNodes[d - 1]);
                    o && aa(o) && (o.remove(), c.setStart(b, d - 1), b == f && c.setEnd(f, m - 1));
                    if ((d = e(b.childNodes[d])) && aa(d))d.remove(),
                        b == f && c.setEnd(f, m - 1)
                }
                (b = e(f.childNodes[c.endOffset])) && aa(b) && b.remove();
                b = c.createBookmark(!0);
                j(h, function (b, c) {
                    Ra(e(c), a)
                });
                c.moveToBookmark(b);
                return this
            }, commonNode: function (a) {
                function b(b) {
                    for (var c = b; b;) {
                        if (Qa(e(b), a))return e(b);
                        b = b.parentNode
                    }
                    for (; c && (c = c.lastChild);)if (Qa(e(c), a))return e(c);
                    return null
                }

                var c = this.range, d = c.endContainer, c = c.endOffset, f = d.nodeType == 3 || c === 0 ? d : d.childNodes[c - 1], g = b(f);
                if (g)return g;
                if (f.nodeType == 1 || d.nodeType == 3 && c === 0)if (d = e(f).prev())return b(d);
                return null
            },
            commonAncestor: function (a) {
                function b(b) {
                    for (; b;) {
                        if (b.nodeType == 1 && b.tagName.toLowerCase() === a)return b;
                        b = b.parentNode
                    }
                    return null
                }

                var c = this.range, d = c.startContainer, f = c.startOffset, g = c.endContainer, c = c.endOffset, g = g.nodeType == 3 || c === 0 ? g : g.childNodes[c - 1], d = b(d.nodeType == 3 || f === 0 ? d : d.childNodes[f - 1]), f = b(g);
                if (d && f && d === f)return e(d);
                return null
            }, state: function (a) {
                var b = this.doc, c = !1;
                try {
                    c = b.queryCommandState(a)
                } catch (d) {
                }
                return c
            }, val: function (a) {
                var b = this.doc, a = a.toLowerCase(), c = "";
                if (a === "fontfamily" ||
                    a === "fontname")return c = ub(b, "fontname"), c = c.replace(/['"]/g, ""), c.toLowerCase();
                if (a === "formatblock") {
                    c = ub(b, a);
                    if (c === "" && (a = this.commonNode({"h1,h2,h3,h4,h5,h6,p,div,pre,address": "*"})))c = a.name;
                    c === "Normal" && (c = "p");
                    return c.toLowerCase()
                }
                if (a === "fontsize")return(a = this.commonNode({"*": ".font-size"})) && (c = a.css("font-size")), c.toLowerCase();
                if (a === "forecolor")return(a = this.commonNode({"*": ".color"})) && (c = a.css("color")), c = ta(c), c === "" && (c = "default"), c.toLowerCase();
                if (a === "hilitecolor")return(a =
                    this.commonNode({"*": ".background-color"})) && (c = a.css("background-color")), c = ta(c), c === "" && (c = "default"), c.toLowerCase();
                return c
            }, toggle: function (a, b) {
                this.commonNode(b) ? this.remove(b) : this.wrap(a);
                return this.select()
            }, bold: function () {
                return this.toggle("<strong></strong>", {span: ".font-weight=bold", strong: "*", b: "*"})
            }, italic: function () {
                return this.toggle("<em></em>", {span: ".font-style=italic", em: "*", i: "*"})
            }, underline: function () {
                return this.toggle("<u></u>", {span: ".text-decoration=underline", u: "*"})
            },
            strikethrough: function () {
                return this.toggle("<s></s>", {span: ".text-decoration=line-through", s: "*"})
            }, forecolor: function (a) {
                return this.toggle('<span style="color:' + a + ';"></span>', {span: ".color=" + a, font: "color"})
            }, hilitecolor: function (a) {
                return this.toggle('<span style="background-color:' + a + ';"></span>', {span: ".background-color=" + a})
            }, fontsize: function (a) {
                return this.toggle('<span style="font-size:' + a + ';"></span>', {span: ".font-size=" + a, font: "size"})
            }, fontname: function (a) {
                return this.fontfamily(a)
            },
            fontfamily: function (a) {
                return this.toggle('<span style="font-family:' + a + ';"></span>', {span: ".font-family=" + a, font: "face"})
            }, removeformat: function () {
                var a = {"*": ".font-weight,.font-style,.text-decoration,.color,.background-color,.font-size,.font-family,.text-indent"};
                j(Mb, function (b) {
                    a[b] = "*"
                });
                this.remove(a);
                return this.select()
            }, inserthtml: function (a, b) {
                function c(a, b) {
                    var b = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + b, c = a.get();
                    c.item ? c.item(0).outerHTML = b :
                        c.pasteHTML(b);
                    var d = a.doc.getElementById("__kindeditor_temp_tag__");
                    d.parentNode.removeChild(d);
                    c = tb(c);
                    a.setEnd(c.endContainer, c.endOffset);
                    a.collapse(!1);
                    f.select(!1)
                }

                function d(a, b) {
                    var c = a.doc, d = c.createDocumentFragment();
                    e("@" + b, c).each(function () {
                        d.appendChild(this)
                    });
                    a.deleteContents();
                    a.insertNode(d);
                    a.collapse(!1);
                    f.select(!1)
                }

                var f = this, g = f.range;
                if (a === "")return f;
                if (p && b) {
                    try {
                        c(g, a)
                    } catch (i) {
                        d(g, a)
                    }
                    return f
                }
                d(g, a);
                return f
            }, hr: function () {
                return this.inserthtml("<hr />")
            }, print: function () {
                this.win.print();
                return this
            }, insertimage: function (a, b, c, d, f, e) {
                b = l(b, "");
                l(f, 0);
                a = '<img src="' + D(a) + '" data-ke-src="' + D(a) + '" ';
                c && (a += 'width="' + D(c) + '" ');
                d && (a += 'height="' + D(d) + '" ');
                b && (a += 'title="' + D(b) + '" ');
                e && (a += 'align="' + D(e) + '" ');
                a += 'alt="' + D(b) + '" ';
                a += "/>";
                return this.inserthtml(a)
            }, createlink: function (a, b) {
                var c = this.doc, d = this.range;
                this.select();
                var f = this.commonNode({a: "*"});
                f && !d.isControl() && (d.selectNode(f.get()), this.select());
                f = '<a href="' + D(a) + '" data-ke-src="' + D(a) + '" ';
                b && (f += ' target="' +
                    D(b) + '"');
                if (d.collapsed)return f += ">" + D(a) + "</a>", this.inserthtml(f);
                if (d.isControl()) {
                    var g = e(d.startContainer.childNodes[d.startOffset]);
                    f += "></a>";
                    g.after(e(f, c));
                    g.next().append(g);
                    d.selectNode(g[0]);
                    return this.select()
                }
                O(c, "createlink", "__kindeditor_temp_url__");
                e('a[href="__kindeditor_temp_url__"]', c).each(function () {
                    e(this).attr("href", a).attr("data-ke-src", a);
                    b ? e(this).attr("target", b) : e(this).removeAttr("target")
                });
                return this
            }, unlink: function () {
                var a = this.doc, b = this.range;
                this.select();
                if (b.collapsed) {
                    var c = this.commonNode({a: "*"});
                    c && (b.selectNode(c.get()), this.select());
                    O(a, "unlink", null);
                    ba && e(b.startContainer).name === "img" && (a = e(b.startContainer).parent(), a.name === "a" && a.remove(!0))
                } else O(a, "unlink", null);
                return this
            }});
        j("formatblock,selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript".split(","), function (a, b) {
            la.prototype[b] = function (a) {
                this.select();
                O(this.doc, b, a);
                (!p || M(b, "formatblock,selectall,insertorderedlist,insertunorderedlist".split(",")) >=
                    0) && this.selection();
                return this
            }
        });
        j("cut,copy,paste".split(","), function (a, b) {
            la.prototype[b] = function () {
                if (!this.doc.queryCommandSupported(b))throw"not supported";
                this.select();
                O(this.doc, b, null);
                return this
            }
        });
        e.CmdClass = la;
        e.cmd = yb;
        F(Q, {init: function (a) {
            var b = this;
            b.name = a.name || "";
            b.doc = a.doc || document;
            b.win = T(b.doc);
            b.x = r(a.x);
            b.y = r(a.y);
            b.z = a.z;
            b.width = r(a.width);
            b.height = r(a.height);
            b.div = e('<div style="display:block;"></div>');
            b.options = a;
            b._alignEl = a.alignEl;
            b.width && b.div.css("width",
                b.width);
            b.height && b.div.css("height", b.height);
            b.z && b.div.css({position: "absolute", left: b.x, top: b.y, "z-index": b.z});
            b.z && (b.x === n || b.y === n) && b.autoPos(b.width, b.height);
            a.cls && b.div.addClass(a.cls);
            a.shadowMode && b.div.addClass("ke-shadow");
            a.css && b.div.css(a.css);
            a.src ? e(a.src).replaceWith(b.div) : e(b.doc.body).append(b.div);
            a.html && b.div.html(a.html);
            if (a.autoScroll)if (p && B < 7 || N) {
                var c = Z();
                e(b.win).bind("scroll", function () {
                    var a = Z(), f = a.x - c.x, a = a.y - c.y;
                    b.pos(s(b.x) + f, s(b.y) + a, !1)
                })
            } else b.div.css("position",
                "fixed")
        }, pos: function (a, b, c) {
            c = l(c, !0);
            if (a !== null && (a = a < 0 ? 0 : r(a), this.div.css("left", a), c))this.x = a;
            if (b !== null && (b = b < 0 ? 0 : r(b), this.div.css("top", b), c))this.y = b;
            return this
        }, autoPos: function (a, b) {
            var c = s(a) || 0, d = s(b) || 0, f = Z();
            if (this._alignEl) {
                var g = e(this._alignEl), i = g.pos(), c = P(g[0].clientWidth / 2 - c / 2), d = P(g[0].clientHeight / 2 - d / 2);
                x = c < 0 ? i.x : i.x + c;
                y = d < 0 ? i.y : i.y + d
            } else i = I(this.doc), x = P(f.x + (i.clientWidth - c) / 2), y = P(f.y + (i.clientHeight - d) / 2);
            p && B < 7 || N || (x -= f.x, y -= f.y);
            return this.pos(x, y)
        }, remove: function () {
            var a =
                this;
            (p && B < 7 || N) && e(a.win).unbind("scroll");
            a.div.remove();
            j(a, function (b) {
                a[b] = null
            });
            return this
        }, show: function () {
            this.div.show();
            return this
        }, hide: function () {
            this.div.hide();
            return this
        }, draggable: function (a) {
            var b = this, a = a || {};
            a.moveEl = b.div;
            a.moveFn = function (a, d, f, e, i, h) {
                if ((a += i) < 0)a = 0;
                if ((d += h) < 0)d = 0;
                b.pos(a, d)
            };
            Ta(a);
            return b
        }});
        e.WidgetClass = Q;
        e.widget = Va;
        var Wa = "";
        if (q = document.getElementsByTagName("html"))Wa = q[0].dir;
        F(na, Q, {init: function (a) {
            function b() {
                var b = Ua(c.iframe);
                b.open();
                if (h)b.domain =
                    document.domain;
                b.write(Yb(d, f, g, i));
                b.close();
                c.win = c.iframe[0].contentWindow;
                c.doc = b;
                var k = yb(b);
                c.afterChange(function () {
                    k.selection()
                });
                ba && e(b).click(function (a) {
                    e(a.target).name === "img" && (k.selection(!0), k.range.selectNode(a.target), k.select())
                });
                p && e(b).keydown(function (a) {
                    if (a.which == 8) {
                        k.selection();
                        var b = k.range;
                        b.isControl() && (b.collapse(!0), e(b.startContainer.childNodes[b.startOffset]).remove(), a.preventDefault())
                    }
                });
                c.cmd = k;
                c.html(ma(c.srcElement));
                p ? (b.body.disabled = !0, b.body.contentEditable = !0, b.body.removeAttribute("disabled")) : b.designMode = "on";
                a.afterCreate && a.afterCreate.call(c)
            }

            var c = this;
            na.parent.init.call(c, a);
            c.srcElement = e(a.srcElement);
            c.div.addClass("ke-edit");
            c.designMode = l(a.designMode, !0);
            c.beforeGetHtml = a.beforeGetHtml;
            c.beforeSetHtml = a.beforeSetHtml;
            c.afterSetHtml = a.afterSetHtml;
            var d = l(a.themesPath, ""), f = a.bodyClass, g = a.cssPath, i = a.cssData, h = location.host.replace(/:\d+/, "") !== document.domain, k = "document.open();" + (h ? 'document.domain="' + document.domain + '";' : "") + "document.close();",
                k = p ? ' src="javascript:void(function(){' + encodeURIComponent(k) + '}())"' : "";
            c.iframe = e('<iframe class="ke-edit-iframe" hidefocus="true" frameborder="0"' + k + "></iframe>").css("width", "100%");
            c.textarea = e('<textarea class="ke-edit-textarea" hidefocus="true"></textarea>').css("width", "100%");
            c.width && c.setWidth(c.width);
            c.height && c.setHeight(c.height);
            c.designMode ? c.textarea.hide() : c.iframe.hide();
            h && c.iframe.bind("load", function () {
                c.iframe.unbind("load");
                p ? b() : setTimeout(b, 0)
            });
            c.div.append(c.iframe);
            c.div.append(c.textarea);
            c.srcElement.hide();
            !h && b()
        }, setWidth: function (a) {
            this.div.css("width", r(a));
            return this
        }, setHeight: function (a) {
            a = r(a);
            this.div.css("height", a);
            this.iframe.css("height", a);
            if (p && B < 8 || N)a = r(s(a) - 2);
            this.textarea.css("height", a);
            return this
        }, remove: function () {
            var a = this.doc;
            e(a.body).unbind();
            e(a).unbind();
            e(this.win).unbind();
            ma(this.srcElement, this.html());
            this.srcElement.show();
            a.write("");
            this.iframe.unbind();
            this.textarea.unbind();
            na.parent.remove.call(this)
        }, html: function (a, b) {
            var c = this.doc;
            if (this.designMode) {
                c = c.body;
                if (a === n)return a = b ? "<!doctype html><html>" + c.parentNode.innerHTML + "</html>" : c.innerHTML, this.beforeGetHtml && (a = this.beforeGetHtml(a)), ca && a == "<br />" && (a = ""), a;
                this.beforeSetHtml && (a = this.beforeSetHtml(a));
                e(c).html(a);
                this.afterSetHtml && this.afterSetHtml();
                return this
            }
            if (a === n)return this.textarea.val();
            this.textarea.val(a);
            return this
        }, design: function (a) {
            if (a === n ? !this.designMode : a) {
                if (!this.designMode)a = this.html(), this.designMode = !0, this.html(a), this.textarea.hide(),
                    this.iframe.show()
            } else if (this.designMode)a = this.html(), this.designMode = !1, this.html(a), this.iframe.hide(), this.textarea.show();
            return this.focus()
        }, focus: function () {
            this.designMode ? this.win.focus() : this.textarea[0].focus();
            return this
        }, blur: function () {
            if (p) {
                var a = e('<input type="text" style="float:left;width:0;height:0;padding:0;margin:0;border:0;" value="" />', this.div);
                this.div.append(a);
                a[0].focus();
                a.remove()
            } else this.designMode ? this.win.blur() : this.textarea[0].blur();
            return this
        }, afterChange: function (a) {
            function b(b) {
                setTimeout(function () {
                        a(b)
                    },
                    1)
            }

            var c = this.doc, d = c.body;
            e(c).keyup(function (b) {
                !b.ctrlKey && !b.altKey && bb[b.which] && a(b)
            });
            e(c).mouseup(a).contextmenu(a);
            e(this.win).blur(a);
            e(d).bind("paste", b);
            e(d).bind("cut", b);
            return this
        }});
        e.EditClass = na;
        e.edit = zb;
        e.iframeDoc = Ua;
        F(Aa, Q, {init: function (a) {
            function b(a) {
                a = e(a);
                if (a.hasClass("ke-outline"))return a;
                if (a.hasClass("ke-toolbar-icon"))return a.parent()
            }

            function c(a, c) {
                var d = b(a.target);
                if (d && !d.hasClass("ke-disabled") && !d.hasClass("ke-selected"))d[c]("ke-on")
            }

            var d = this;
            Aa.parent.init.call(d,
                a);
            d.disableMode = l(a.disableMode, !1);
            d.noDisableItemMap = u(l(a.noDisableItems, []));
            d._itemMap = {};
            d.div.addClass("ke-toolbar").bind("contextmenu,mousedown,mousemove",function (a) {
                a.preventDefault()
            }).attr("unselectable", "on");
            d.div.mouseover(function (a) {
                c(a, "addClass")
            }).mouseout(function (a) {
                c(a, "removeClass")
            }).click(function (a) {
                var c = b(a.target);
                c && !c.hasClass("ke-disabled") && d.options.click.call(this, a, c.attr("data-name"))
            })
        }, get: function (a) {
            if (this._itemMap[a])return this._itemMap[a];
            return this._itemMap[a] =
                e("span.ke-icon-" + a, this.div).parent()
        }, select: function (a) {
            Ab.call(this, a, function (a) {
                a.addClass("ke-selected")
            });
            return self
        }, unselect: function (a) {
            Ab.call(this, a, function (a) {
                a.removeClass("ke-selected").removeClass("ke-on")
            });
            return self
        }, enable: function (a) {
            if (a = a.get ? a : this.get(a))a.removeClass("ke-disabled"), a.opacity(1);
            return this
        }, disable: function (a) {
            if (a = a.get ? a : this.get(a))a.removeClass("ke-selected").addClass("ke-disabled"), a.opacity(0.5);
            return this
        }, disableAll: function (a, b) {
            var c = this,
                d = c.noDisableItemMap;
            b && (d = u(b));
            (a === n ? !c.disableMode : a) ? (e("span.ke-outline", c.div).each(function () {
                var a = e(this), b = a[0].getAttribute("data-name", 2);
                d[b] || c.disable(a)
            }), c.disableMode = !0) : (e("span.ke-outline", c.div).each(function () {
                var a = e(this), b = a[0].getAttribute("data-name", 2);
                d[b] || c.enable(a)
            }), c.disableMode = !1);
            return c
        }});
        e.ToolbarClass = Aa;
        e.toolbar = Bb;
        F(oa, Q, {init: function (a) {
            a.z = a.z || 811213;
            oa.parent.init.call(this, a);
            this.centerLineMode = l(a.centerLineMode, !0);
            this.div.addClass("ke-menu").bind("click,mousedown",
                function (a) {
                    a.stopPropagation()
                }).attr("unselectable", "on")
        }, addItem: function (a) {
            if (a.title === "-")this.div.append(e('<div class="ke-menu-separator"></div>')); else {
                var b = e('<div class="ke-menu-item" unselectable="on"></div>'), c = e('<div class="ke-inline-block ke-menu-item-left"></div>'), d = e('<div class="ke-inline-block ke-menu-item-right"></div>'), f = r(a.height), g = l(a.iconClass, "");
                this.div.append(b);
                f && (b.css("height", f), d.css("line-height", f));
                var i;
                this.centerLineMode && (i = e('<div class="ke-inline-block ke-menu-item-center"></div>'),
                    f && i.css("height", f));
                b.mouseover(function () {
                    e(this).addClass("ke-menu-item-on");
                    i && i.addClass("ke-menu-item-center-on")
                }).mouseout(function () {
                    e(this).removeClass("ke-menu-item-on");
                    i && i.removeClass("ke-menu-item-center-on")
                }).click(function (b) {
                    a.click.call(e(this));
                    b.stopPropagation()
                }).append(c);
                i && b.append(i);
                b.append(d);
                a.checked && (g = "ke-icon-checked");
                g !== "" && c.html('<span class="ke-inline-block ke-toolbar-icon ke-toolbar-icon-url ' + g + '"></span>');
                d.html(a.title);
                return this
            }
        }, remove: function () {
            this.options.beforeRemove &&
            this.options.beforeRemove.call(this);
            e(".ke-menu-item", this.div[0]).unbind();
            oa.parent.remove.call(this);
            return this
        }});
        e.MenuClass = oa;
        e.menu = Xa;
        F(pa, Q, {init: function (a) {
            a.z = a.z || 811213;
            pa.parent.init.call(this, a);
            var b = a.colors || [
                ["#E53333", "#E56600", "#FF9900", "#64451D", "#DFC5A4", "#FFE500"],
                ["#009900", "#006600", "#99BB00", "#B8D100", "#60D978", "#00D5FF"],
                ["#337FE5", "#003399", "#4C33E5", "#9933E5", "#CC33E5", "#EE33EE"],
                ["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333", "#000000"]
            ];
            this.selectedColor = (a.selectedColor ||
                "").toLowerCase();
            this._cells = [];
            this.div.addClass("ke-colorpicker").bind("click,mousedown",function (a) {
                a.stopPropagation()
            }).attr("unselectable", "on");
            a = this.doc.createElement("table");
            this.div.append(a);
            a.className = "ke-colorpicker-table";
            a.cellPadding = 0;
            a.cellSpacing = 0;
            a.border = 0;
            var c = a.insertRow(0), d = c.insertCell(0);
            d.colSpan = b[0].length;
            this._addAttr(d, "", "ke-colorpicker-cell-top");
            for (var f = 0; f < b.length; f++)for (var c = a.insertRow(f + 1), e = 0; e < b[f].length; e++)d = c.insertCell(e), this._addAttr(d, b[f][e],
                "ke-colorpicker-cell")
        }, _addAttr: function (a, b, c) {
            var d = this, a = e(a).addClass(c);
            d.selectedColor === b.toLowerCase() && a.addClass("ke-colorpicker-cell-selected");
            a.attr("title", b || d.options.noColor);
            a.mouseover(function () {
                e(this).addClass("ke-colorpicker-cell-on")
            });
            a.mouseout(function () {
                e(this).removeClass("ke-colorpicker-cell-on")
            });
            a.click(function (a) {
                a.stop();
                d.options.click.call(e(this), b)
            });
            b ? a.append(e('<div class="ke-colorpicker-cell-color" unselectable="on"></div>').css("background-color", b)) :
                a.html(d.options.noColor);
            e(a).attr("unselectable", "on");
            d._cells.push(a)
        }, remove: function () {
            j(this._cells, function () {
                this.unbind()
            });
            pa.parent.remove.call(this);
            return this
        }});
        e.ColorPickerClass = pa;
        e.colorpicker = Cb;
        F(Ya, {init: function (a) {
            var b = e(a.button), c = a.fieldName || "file", d = a.url || "", f = b.val(), g = a.extraParams || {}, i = b[0].className || "", h = a.target || "kindeditor_upload_iframe_" + (new Date).getTime();
            a.afterError = a.afterError || function (a) {
                alert(a)
            };
            var k = [], m;
            for (m in g)k.push('<input type="hidden" name="' +
                m + '" value="' + g[m] + '" />');
            c = ['<div class="ke-inline-block ' + i + '">', a.target ? "" : '<iframe name="' + h + '" style="display:none;"></iframe>', a.form ? '<div class="ke-upload-area">' : '<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="' + h + '" action="' + d + '">', '<span class="ke-button-common">', k.join(""), '<input type="button" class="ke-button-common ke-button" value="' + f + '" />', "</span>", '<input type="file" class="ke-upload-file" name="' + c + '" tabindex="-1" />', a.form ? "</div>" :
                "</form>", "</div>"].join("");
            c = e(c, b.doc);
            b.hide();
            b.before(c);
            this.div = c;
            this.button = b;
            this.iframe = a.target ? e('iframe[name="' + h + '"]') : e("iframe", c);
            this.form = a.form ? e(a.form) : e("form", c);
            b = a.width || e(".ke-button-common", c).width();
            this.fileBox = e(".ke-upload-file", c).width(b);
            this.options = a
        }, submit: function () {
            var a = this, b = a.iframe;
            b.bind("load", function () {
                b.unbind();
                var c = document.createElement("form");
                a.fileBox.before(c);
                e(c).append(a.fileBox);
                c.reset();
                e(c).remove(!0);
                var c = e.iframeDoc(b), d = c.getElementsByTagName("pre")[0],
                    f = "", g, f = d ? d.innerHTML : c.body.innerHTML;
                b[0].src = "javascript:false";
                try {
                    g = e.json(f)
                } catch (i) {
                    a.options.afterError.call(a, "<!doctype html><html>" + c.body.parentNode.innerHTML + "</html>")
                }
                g && a.options.afterUpload.call(a, g)
            });
            a.form[0].submit();
            return a
        }, remove: function () {
            this.fileBox && this.fileBox.unbind();
            this.iframe.remove();
            this.div.remove();
            this.button.show();
            return this
        }});
        e.UploadButtonClass = Ya;
        e.uploadbutton = function (a) {
            return new Ya(a)
        };
        F(qa, Q, {init: function (a) {
            var b = l(a.shadowMode, !0);
            a.z = a.z ||
                811213;
            a.shadowMode = !1;
            qa.parent.init.call(this, a);
            var c = a.title, d = e(a.body, this.doc), f = a.previewBtn, g = a.yesBtn, i = a.noBtn, h = a.closeBtn, k = l(a.showMask, !0);
            this.div.addClass("ke-dialog").bind("click,mousedown", function (a) {
                a.stopPropagation()
            });
            var m = e('<div class="ke-dialog-content"></div>').appendTo(this.div);
            p && B < 7 ? this.iframeMask = e('<iframe src="about:blank" class="ke-dialog-shadow"></iframe>').appendTo(this.div) : b && e('<div class="ke-dialog-shadow"></div>').appendTo(this.div);
            b = e('<div class="ke-dialog-header"></div>');
            m.append(b);
            b.html(c);
            this.closeIcon = e('<span class="ke-dialog-icon-close" title="' + h.name + '"></span>').click(h.click);
            b.append(this.closeIcon);
            this.draggable({clickEl: b, beforeDrag: a.beforeDrag});
            a = e('<div class="ke-dialog-body"></div>');
            m.append(a);
            a.append(d);
            var o = e('<div class="ke-dialog-footer"></div>');
            (f || g || i) && m.append(o);
            j([
                {btn: f, name: "preview"},
                {btn: g, name: "yes"},
                {btn: i, name: "no"}
            ], function () {
                if (this.btn) {
                    var a = this.btn, a = a || {}, b = a.name || "", c = e('<span class="ke-button-common ke-button-outer" title="' +
                        b + '"></span>'), b = e('<input class="ke-button-common ke-button" type="button" value="' + b + '" />');
                    a.click && b.click(a.click);
                    c.append(b);
                    c.addClass("ke-dialog-" + this.name);
                    o.append(c)
                }
            });
            this.height && a.height(s(this.height) - b.height() - o.height());
            this.div.width(this.div.width());
            this.div.height(this.div.height());
            this.mask = null;
            if (k)d = I(this.doc), this.mask = Va({x: 0, y: 0, z: this.z - 1, cls: "ke-dialog-mask", width: Math.max(d.scrollWidth, d.clientWidth), height: Math.max(d.scrollHeight, d.clientHeight)});
            this.autoPos(this.div.width(),
                this.div.height());
            this.footerDiv = o;
            this.bodyDiv = a;
            this.headerDiv = b;
            this.isLoading = !1
        }, setMaskIndex: function (a) {
            this.mask.div.css("z-index", a)
        }, showLoading: function (a) {
            var a = l(a, ""), b = this.bodyDiv;
            this.loading = e('<div class="ke-dialog-loading"><div class="ke-inline-block ke-dialog-loading-content" style="margin-top:' + Math.round(b.height() / 3) + 'px;">' + a + "</div></div>").width(b.width()).height(b.height()).css("top", this.headerDiv.height() + "px");
            b.css("visibility", "hidden").after(this.loading);
            this.isLoading = !0;
            return this
        }, hideLoading: function () {
            this.loading && this.loading.remove();
            this.bodyDiv.css("visibility", "visible");
            this.isLoading = !1;
            return this
        }, remove: function () {
            this.options.beforeRemove && this.options.beforeRemove.call(this);
            this.mask && this.mask.remove();
            this.iframeMask && this.iframeMask.remove();
            this.closeIcon.unbind();
            e("input", this.div).unbind();
            e("button", this.div).unbind();
            this.footerDiv.unbind();
            this.bodyDiv.unbind();
            this.headerDiv.unbind();
            e("iframe", this.div).each(function () {
                e(this).remove()
            });
            qa.parent.remove.call(this);
            return this
        }});
        e.DialogClass = qa;
        e.dialog = Db;
        e.tabs = function (a) {
            var b = Va(a), c = b.remove, d = a.afterSelect, a = b.div, f = [];
            a.addClass("ke-tabs").bind("contextmenu,mousedown,mousemove", function (a) {
                a.preventDefault()
            });
            var g = e('<ul class="ke-tabs-ul ke-clearfix"></ul>');
            a.append(g);
            b.add = function (a) {
                var b = e('<li class="ke-tabs-li">' + a.title + "</li>");
                b.data("tab", a);
                f.push(b);
                g.append(b)
            };
            b.selectedIndex = 0;
            b.select = function (a) {
                b.selectedIndex = a;
                j(f, function (c, d) {
                    d.unbind();
                    c === a ?
                        (d.addClass("ke-tabs-li-selected"), e(d.data("tab").panel).show("")) : (d.removeClass("ke-tabs-li-selected").removeClass("ke-tabs-li-on").mouseover(function () {
                        e(this).addClass("ke-tabs-li-on")
                    }).mouseout(function () {
                        e(this).removeClass("ke-tabs-li-on")
                    }).click(function () {
                        b.select(c)
                    }), e(d.data("tab").panel).hide())
                });
                d && d.call(b, a)
            };
            b.remove = function () {
                j(f, function () {
                    this.remove()
                });
                g.remove();
                c.call(b)
            };
            return b
        };
        e.loadScript = Za;
        e.loadStyle = $a;
        e.ajax = function (a, b, c, d, f) {
            var c = c || "GET", f = f || "json", e =
                z.XMLHttpRequest ? new z.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            e.open(c, a, !0);
            e.onreadystatechange = function () {
                if (e.readyState == 4 && e.status == 200 && b) {
                    var a = A(e.responseText);
                    f == "json" && (a = db(a));
                    b(a)
                }
            };
            if (c == "POST") {
                var i = [];
                j(d, function (a, b) {
                    i.push(encodeURIComponent(a) + "=" + encodeURIComponent(b))
                });
                try {
                    e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                } catch (h) {
                }
                e.send(i.join("&"))
            } else e.send(null)
        };
        var U = {}, L = {};
        ra.prototype = {lang: function (a) {
            return Hb(a, this.langType)
        },
            loadPlugin: function (a, b) {
                var c = this;
                if (U[a]) {
                    if (c._calledPlugins[a])return b && b.call(c), c;
                    U[a].call(c, KindEditor);
                    b && b.call(c);
                    c._calledPlugins[a] = !0;
                    return c
                }
                if (c.isLoading)return c;
                c.isLoading = !0;
                Za(c.pluginsPath + a + "/" + a + ".js?ver=" + encodeURIComponent(e.DEBUG ? Ca : Da), function () {
                    c.isLoading = !1;
                    U[a] && c.loadPlugin(a, b)
                });
                return c
            }, handler: function (a, b) {
                var c = this;
                c._handlers[a] || (c._handlers[a] = []);
                if (cb(b))return c._handlers[a].push(b), c;
                j(c._handlers[a], function () {
                    b = this.call(c, b)
                });
                return b
            }, clickToolbar: function (a, b) {
                var c = this, d = "clickToolbar" + a;
                if (b === n) {
                    if (c._handlers[d])return c.handler(d);
                    c.loadPlugin(a, function () {
                        c.handler(d)
                    });
                    return c
                }
                return c.handler(d, b)
            }, updateState: function () {
                var a = this;
                j("justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,subscript,superscript,bold,italic,underline,strikethrough".split(","), function (b, c) {
                    a.cmd.state(c) ? a.toolbar.select(c) : a.toolbar.unselect(c)
                });
                return a
            }, addContextmenu: function (a) {
                this._contextmenus.push(a);
                return this
            }, afterCreate: function (a) {
                return this.handler("afterCreate",
                    a)
            }, beforeRemove: function (a) {
                return this.handler("beforeRemove", a)
            }, beforeGetHtml: function (a) {
                return this.handler("beforeGetHtml", a)
            }, beforeSetHtml: function (a) {
                return this.handler("beforeSetHtml", a)
            }, afterSetHtml: function (a) {
                return this.handler("afterSetHtml", a)
            }, create: function () {
                function a() {
                    m.height() === 0 ? setTimeout(a, 100) : c.resize(f, g)
                }

                function b(a, b, d) {
                    d = l(d, !0);
                    if (a && a >= c.minWidth && (c.resize(a, null), d))c.width = r(a);
                    if (b && b >= c.minHeight && (c.resize(null, b), d))c.height = r(b)
                }

                var c = this, d = c.fullscreenMode;
                if (c.isCreated)return c;
                if (c.srcElement.data("kindeditor"))return c;
                c.srcElement.data("kindeditor", "true");
                d ? I().style.overflow = "hidden" : I().style.overflow = "";
                var f = d ? I().clientWidth + "px" : c.width, g = d ? I().clientHeight + "px" : c.height;
                if (p && B < 8 || N)g = r(s(g) + 2);
                var i = c.container = e(c.layout);
                d ? e(document.body).append(i) : c.srcElement.before(i);
                var h = e(".toolbar", i), k = e(".edit", i), m = c.statusbar = e(".statusbar", i);
                i.removeClass("container").addClass("ke-container ke-container-" + c.themeType).css("width", f);
                if (d) {
                    i.css({position: "absolute",
                        left: 0, top: 0, "z-index": 811211});
                    if (!ca)c._scrollPos = Z();
                    z.scrollTo(0, 0);
                    e(document.body).css({height: "1px", overflow: "hidden"});
                    e(document.body.parentNode).css("overflow", "hidden");
                    c._fullscreenExecuted = !0
                } else c._fullscreenExecuted && (e(document.body).css({height: "", overflow: ""}), e(document.body.parentNode).css("overflow", "")), c._scrollPos && z.scrollTo(c._scrollPos.x, c._scrollPos.y);
                var j = [];
                e.each(c.items, function (a, b) {
                    b == "|" ? j.push('<span class="ke-inline-block ke-separator"></span>') : b == "/" ? j.push('<div class="ke-hr"></div>') :
                        (j.push('<span class="ke-outline" data-name="' + b + '" title="' + c.lang(b) + '" unselectable="on">'), j.push('<span class="ke-toolbar-icon ke-toolbar-icon-url ke-icon-' + b + '" unselectable="on"></span></span>'))
                });
                var h = c.toolbar = Bb({src: h, html: j.join(""), noDisableItems: c.noDisableItems, click: function (a, b) {
                    a.stop();
                    if (c.menu) {
                        var d = c.menu.name;
                        c.hideMenu();
                        if (d === b)return
                    }
                    c.clickToolbar(b)
                }}), n = s(g) - h.div.height(), q = c.edit = zb({height: n > 0 && s(g) > c.minHeight ? n : c.minHeight, src: k, srcElement: c.srcElement, designMode: c.designMode,
                    themesPath: c.themesPath, bodyClass: c.bodyClass, cssPath: c.cssPath, cssData: c.cssData, beforeGetHtml: function (a) {
                        a = c.beforeGetHtml(a);
                        return R(a, c.filterMode ? c.htmlTags : null, c.urlType, c.wellFormatMode, c.indentChar)
                    }, beforeSetHtml: function (a) {
                        a = R(a, c.filterMode ? c.htmlTags : null, "", !1);
                        return c.beforeSetHtml(a)
                    }, afterSetHtml: function () {
                        c.edit = q = this;
                        c.afterSetHtml()
                    }, afterCreate: function () {
                        c.edit = q = this;
                        c.cmd = q.cmd;
                        c._docMousedownFn = function () {
                            c.menu && c.hideMenu()
                        };
                        e(q.doc, document).mousedown(c._docMousedownFn);
                        Zb.call(c);
                        $b.call(c);
                        ac.call(c);
                        bc.call(c);
                        q.afterChange(function () {
                            q.designMode && (c.updateState(), c.addBookmark(), c.options.afterChange && c.options.afterChange.call(c))
                        });
                        q.textarea.keyup(function (a) {
                            !a.ctrlKey && !a.altKey && Ob[a.which] && c.options.afterChange && c.options.afterChange.call(c)
                        });
                        c.readonlyMode && c.readonly();
                        c.isCreated = !0;
                        if (c.initContent === "")c.initContent = c.html();
                        c.afterCreate();
                        c.options.afterCreate && c.options.afterCreate.call(c)
                    }});
                m.removeClass("statusbar").addClass("ke-statusbar").append('<span class="ke-inline-block ke-statusbar-center-icon"></span>').append('<span class="ke-inline-block ke-statusbar-right-icon"></span>');
                e(z).unbind("resize");
                a();
                d ? (e(z).bind("resize", function () {
                    c.isCreated && b(I().clientWidth, I().clientHeight, !1)
                }), h.select("fullscreen"), m.first().css("visibility", "hidden"), m.last().css("visibility", "hidden")) : (ca && e(z).bind("scroll", function () {
                    c._scrollPos = Z()
                }), c.resizeType > 0 ? Ta({moveEl: i, clickEl: m, moveFn: function (a, c, d, f, e, g) {
                    f += g;
                    b(null, f)
                }}) : m.first().css("visibility", "hidden"), c.resizeType === 2 ? Ta({moveEl: i, clickEl: m.last(), moveFn: function (a, c, d, f, e, g) {
                    d += e;
                    f += g;
                    b(d, f)
                }}) : m.last().css("visibility",
                    "hidden"));
                return c
            }, remove: function () {
                var a = this;
                if (!a.isCreated)return a;
                a.beforeRemove();
                a.srcElement.data("kindeditor", "");
                a.menu && a.hideMenu();
                j(a.dialogs, function () {
                    a.hideDialog()
                });
                e(document).unbind("mousedown", a._docMousedownFn);
                a.toolbar.remove();
                a.edit.remove();
                a.statusbar.last().unbind();
                a.statusbar.unbind();
                a.container.remove();
                a.container = a.toolbar = a.edit = a.menu = null;
                a.dialogs = [];
                a.isCreated = !1;
                return a
            }, resize: function (a, b) {
                a !== null && s(a) > this.minWidth && this.container.css("width", r(a));
                b !== null && this.toolbar.div && this.statusbar && (b = s(b) - this.toolbar.div.height() - this.statusbar.height(), b > 0 && s(b) > this.minHeight && this.edit.setHeight(b));
                return this
            }, select: function () {
                this.isCreated && this.cmd.select();
                return this
            }, html: function (a) {
                if (a === n)return this.isCreated ? this.edit.html() : ma(this.srcElement);
                this.isCreated ? this.edit.html(a) : ma(this.srcElement, a);
                return this
            }, fullHtml: function () {
                return this.isCreated ? this.edit.html(n, !0) : ""
            }, text: function (a) {
                return a === n ? A(this.html().replace(/<(?!img|embed).*?>/ig,
                    "").replace(/&nbsp;/ig, " ")) : this.html(D(a))
            }, isEmpty: function () {
                return A(this.text().replace(/\r\n|\n|\r/, "")) === ""
            }, isDirty: function () {
                return A(this.initContent.replace(/\r\n|\n|\r|t/g, "")) !== A(this.html().replace(/\r\n|\n|\r|t/g, ""))
            }, selectedHtml: function () {
                return this.isCreated ? this.cmd.range.html() : ""
            }, count: function (a) {
                a = (a || "html").toLowerCase();
                if (a === "html")return V(ab(this.html())).length;
                if (a === "text")return this.text().replace(/<(?:img|embed).*?>/ig, "K").replace(/\r\n|\n|\r/g, "").length;
                return 0
            }, exec: function (a) {
                var a = a.toLowerCase(), b = this.cmd, c = M(a, "selectall,copy,paste,print".split(",")) < 0;
                c && this.addBookmark(!1);
                b[a].apply(b, Ga(arguments, 1));
                c && (this.updateState(), this.addBookmark(!1), this.options.afterChange && this.options.afterChange.call(this));
                return this
            }, insertHtml: function (a, b) {
                if (!this.isCreated)return this;
                a = this.beforeSetHtml(a);
                this.exec("inserthtml", a, b);
                return this
            }, appendHtml: function (a) {
                this.html(this.html() + a);
                if (this.isCreated)a = this.cmd, a.range.selectNodeContents(a.doc.body).collapse(!1),
                    a.select();
                return this
            }, sync: function () {
                ma(this.srcElement, this.html());
                return this
            }, focus: function () {
                this.isCreated ? this.edit.focus() : this.srcElement[0].focus();
                return this
            }, blur: function () {
                this.isCreated ? this.edit.blur() : this.srcElement[0].blur();
                return this
            }, addBookmark: function (a) {
                var a = l(a, !0), b = this.edit, c = b.doc.body, d = ab(c.innerHTML);
                if (a && this._undoStack.length > 0 && Math.abs(d.length - V(this._undoStack[this._undoStack.length - 1].html).length) < this.minChangeSize)return this;
                b.designMode && !this._firstAddBookmark ?
                    (b = this.cmd.range, a = b.createBookmark(!0), a.html = ab(c.innerHTML), b.moveToBookmark(a)) : a = {html: d};
                this._firstAddBookmark = !1;
                Ib(this._undoStack, a);
                return this
            }, undo: function () {
                return Jb.call(this, this._undoStack, this._redoStack)
            }, redo: function () {
                return Jb.call(this, this._redoStack, this._undoStack)
            }, fullscreen: function (a) {
                this.fullscreenMode = a === n ? !this.fullscreenMode : a;
                return this.remove().create()
            }, readonly: function (a) {
                var a = l(a, !0), b = this, c = b.edit, d = c.doc;
                b.designMode ? b.toolbar.disableAll(a, []) : j(b.noDisableItems,
                    function () {
                        b.toolbar[a ? "disable" : "enable"](this)
                    });
                p ? d.body.contentEditable = !a : d.designMode = a ? "off" : "on";
                c.textarea[0].disabled = a
            }, createMenu: function (a) {
                var b = this.toolbar.get(a.name), c = b.pos();
                a.x = c.x;
                a.y = c.y + b.height();
                a.shadowMode = l(a.shadowMode, this.shadowMode);
                a.selectedColor !== n ? (a.cls = "ke-colorpicker-" + this.themeType, a.noColor = this.lang("noColor"), this.menu = Cb(a)) : (a.cls = "ke-menu-" + this.themeType, a.centerLineMode = !1, this.menu = Xa(a));
                return this.menu
            }, hideMenu: function () {
                this.menu.remove();
                this.menu = null;
                return this
            }, hideContextmenu: function () {
                this.contextmenu.remove();
                this.contextmenu = null;
                return this
            }, createDialog: function (a) {
                var b = this;
                a.autoScroll = l(a.autoScroll, !0);
                a.shadowMode = l(a.shadowMode, b.shadowMode);
                a.closeBtn = l(a.closeBtn, {name: b.lang("close"), click: function () {
                    b.hideDialog();
                    p && b.cmd && b.cmd.select()
                }});
                a.noBtn = l(a.noBtn, {name: b.lang(a.yesBtn ? "no" : "close"), click: function () {
                    b.hideDialog();
                    p && b.cmd && b.cmd.select()
                }});
                if (b.dialogAlignType != "page")a.alignEl = b.container;
                a.cls =
                    "ke-dialog-" + b.themeType;
                if (b.dialogs.length > 0) {
                    var c = b.dialogs[b.dialogs.length - 1];
                    b.dialogs[0].setMaskIndex(c.z + 2);
                    a.z = c.z + 3;
                    a.showMask = !1
                }
                a = Db(a);
                b.dialogs.push(a);
                return a
            }, hideDialog: function () {
                this.dialogs.length > 0 && this.dialogs.pop().remove();
                this.dialogs.length > 0 && this.dialogs[0].setMaskIndex(this.dialogs[this.dialogs.length - 1].z - 1);
                return this
            }, errorDialog: function (a) {
                var b = this.createDialog({width: 750, title: this.lang("uploadError"), body: '<div style="padding:10px 20px;"><iframe frameborder="0" style="width:708px;height:400px;"></iframe></div>'}),
                    b = e("iframe", b.div), c = e.iframeDoc(b);
                c.open();
                c.write(a);
                c.close();
                e(c.body).css("background-color", "#FFF");
                b[0].contentWindow.focus();
                return this
            }};
        _instances = [];
        e.remove = function (a) {
            Lb(a, function (a) {
                this.remove();
                _instances.splice(a, 1)
            })
        };
        e.sync = function (a) {
            Lb(a, function () {
                this.sync()
            })
        };
        p && B < 7 && O(document, "BackgroundImageCache", !0);
        e.EditorClass = ra;
        e.editor = function (a) {
            return new ra(a)
        };
        e.create = Kb;
        e.instances = _instances;
        e.plugin = Fb;
        e.lang = Hb;
        Fb("core", function (a) {
            var b = this, c = {undo: "Z", redo: "Y",
                bold: "B", italic: "I", underline: "U", print: "P", selectall: "A"};
            b.afterSetHtml(function () {
                b.options.afterChange && b.options.afterChange.call(b)
            });
            b.afterCreate(function () {
                if (b.syncType == "form") {
                    for (var c = a(b.srcElement), d = !1; c = c.parent();)if (c.name == "form") {
                        d = !0;
                        break
                    }
                    if (d) {
                        c.bind("submit", function () {
                            b.sync();
                            a(z).bind("unload", function () {
                                b.edit.textarea.remove()
                            })
                        });
                        var e = a('[type="reset"]', c);
                        e.click(function () {
                            b.html(b.initContent);
                            b.cmd.selection()
                        });
                        b.beforeRemove(function () {
                            c.unbind();
                            e.unbind()
                        })
                    }
                }
            });
            b.clickToolbar("source", function () {
                b.edit.designMode ? (b.toolbar.disableAll(!0), b.edit.design(!1), b.toolbar.select("source")) : (b.toolbar.disableAll(!1), b.edit.design(!0), b.toolbar.unselect("source"));
                b.designMode = b.edit.designMode
            });
            b.afterCreate(function () {
                b.designMode || b.toolbar.disableAll(!0).select("source")
            });
            b.clickToolbar("fullscreen", function () {
                b.fullscreen()
            });
            if (b.fullscreenShortcut) {
                var d = !1;
                b.afterCreate(function () {
                    a(b.edit.doc, b.edit.textarea).keyup(function (a) {
                        a.which == 27 && setTimeout(function () {
                                b.fullscreen()
                            },
                            0)
                    });
                    if (d) {
                        if (p && !b.designMode)return;
                        b.focus()
                    }
                    d || (d = !0)
                })
            }
            j("undo,redo".split(","), function (a, d) {
                c[d] && b.afterCreate(function () {
                    Ha(this.edit.doc, c[d], function () {
                        b.clickToolbar(d)
                    })
                });
                b.clickToolbar(d, function () {
                    b[d]()
                })
            });
            b.clickToolbar("formatblock", function () {
                var a = b.lang("formatblock.formatBlock"), c = {h1: 28, h2: 24, h3: 18, H4: 14, p: 12}, d = b.cmd.val("formatblock"), e = b.createMenu({name: "formatblock", width: b.langType == "en" ? 200 : 150});
                j(a, function (a, f) {
                    var j = "font-size:" + c[a] + "px;";
                    a.charAt(0) === "h" && (j +=
                        "font-weight:bold;");
                    e.addItem({title: '<span style="' + j + '" unselectable="on">' + f + "</span>", height: c[a] + 12, checked: d === a || d === f, click: function () {
                        b.select().exec("formatblock", "<" + a + ">").hideMenu()
                    }})
                })
            });
            b.clickToolbar("fontname", function () {
                var a = b.cmd.val("fontname"), c = b.createMenu({name: "fontname", width: 150});
                j(b.lang("fontname.fontName"), function (d, e) {
                    c.addItem({title: '<span style="font-family: ' + d + ';" unselectable="on">' + e + "</span>", checked: a === d.toLowerCase() || a === e.toLowerCase(), click: function () {
                        b.exec("fontname",
                            d).hideMenu()
                    }})
                })
            });
            b.clickToolbar("fontsize", function () {
                var a = b.cmd.val("fontsize"), c = b.createMenu({name: "fontsize", width: 150});
                j(b.fontSizeTable, function (d, e) {
                    c.addItem({title: '<span style="font-size:' + e + ';" unselectable="on">' + e + "</span>", height: s(e) + 12, checked: a === e, click: function () {
                        b.exec("fontsize", e).hideMenu()
                    }})
                })
            });
            j("forecolor,hilitecolor".split(","), function (a, c) {
                b.clickToolbar(c, function () {
                    b.createMenu({name: c, selectedColor: b.cmd.val(c) || "default", colors: b.colorTable, click: function (a) {
                        b.exec(c,
                            a).hideMenu()
                    }})
                })
            });
            j("cut,copy,paste".split(","), function (a, c) {
                b.clickToolbar(c, function () {
                    b.focus();
                    try {
                        b.exec(c, null)
                    } catch (a) {
                        alert(b.lang(c + "Error"))
                    }
                })
            });
            b.clickToolbar("about", function () {
                var a = '<div style="margin:20px;"><div>KindEditor ' + Da + '</div><div>Copyright &copy; <a href="http://www.kindsoft.net/" target="_blank">kindsoft.net</a> All rights reserved.</div></div>';
                b.createDialog({name: "about", width: 300, title: b.lang("about"), body: a})
            });
            b.plugin.getSelectedLink = function () {
                return b.cmd.commonAncestor("a")
            };
            b.plugin.getSelectedImage = function () {
                return Ba(b.edit.cmd.range, function (a) {
                    return!/^ke-\w+$/i.test(a[0].className)
                })
            };
            b.plugin.getSelectedFlash = function () {
                return Ba(b.edit.cmd.range, function (a) {
                    return a[0].className == "ke-flash"
                })
            };
            b.plugin.getSelectedMedia = function () {
                return Ba(b.edit.cmd.range, function (a) {
                    return a[0].className == "ke-media" || a[0].className == "ke-rm"
                })
            };
            b.plugin.getSelectedAnchor = function () {
                return Ba(b.edit.cmd.range, function (a) {
                    return a[0].className == "ke-anchor"
                })
            };
            j("link,image,flash,media,anchor".split(","),
                function (a, c) {
                    var d = c.charAt(0).toUpperCase() + c.substr(1);
                    j("edit,delete".split(","), function (a, e) {
                        b.addContextmenu({title: b.lang(e + d), click: function () {
                            b.loadPlugin(c, function () {
                                b.plugin[c][e]();
                                b.hideMenu()
                            })
                        }, cond: b.plugin["getSelected" + d], width: 150, iconClass: e == "edit" ? "ke-icon-" + c : n})
                    });
                    b.addContextmenu({title: "-"})
                });
            b.plugin.getSelectedTable = function () {
                return b.cmd.commonAncestor("table")
            };
            b.plugin.getSelectedRow = function () {
                return b.cmd.commonAncestor("tr")
            };
            b.plugin.getSelectedCell = function () {
                return b.cmd.commonAncestor("td")
            };
            j("prop,cellprop,colinsertleft,colinsertright,rowinsertabove,rowinsertbelow,rowmerge,colmerge,rowsplit,colsplit,coldelete,rowdelete,insert,delete".split(","), function (a, c) {
                var d = M(c, ["prop", "delete"]) < 0 ? b.plugin.getSelectedCell : b.plugin.getSelectedTable;
                b.addContextmenu({title: b.lang("table" + c), click: function () {
                    b.loadPlugin("table", function () {
                        b.plugin.table[c]();
                        b.hideMenu()
                    })
                }, cond: d, width: 170, iconClass: "ke-icon-table" + c})
            });
            b.addContextmenu({title: "-"});
            j("selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript,hr,print,bold,italic,underline,strikethrough,removeformat,unlink".split(","),
                function (a, d) {
                    c[d] && b.afterCreate(function () {
                        Ha(this.edit.doc, c[d], function () {
                            b.cmd.selection();
                            b.clickToolbar(d)
                        })
                    });
                    b.clickToolbar(d, function () {
                        b.focus().exec(d, null)
                    })
                });
            b.afterCreate(function () {
                function c() {
                    e.range.moveToBookmark(h);
                    e.select();
                    ba && (a("div." + j, k).each(function () {
                        a(this).after("<br />").remove(!0)
                    }), a("span.Apple-style-span", k).remove(!0), a("span.Apple-tab-span", k).remove(!0), a("span[style]", k).each(function () {
                        a(this).css("white-space") == "nowrap" && a(this).remove(!0)
                    }), a("meta",
                        k).remove());
                    var d = k[0].innerHTML;
                    k.remove();
                    d !== "" && (b.pasteType === 2 && (/schemas-microsoft-com|worddocument|mso-\w+/i.test(d) ? d = mb(d, b.filterMode ? b.htmlTags : a.options.htmlTags) : (d = R(d, b.filterMode ? b.htmlTags : null), d = b.beforeSetHtml(d))), b.pasteType === 1 && (d = d.replace(/<br[^>]*>/ig, "\n"), d = d.replace(/<\/p><p[^>]*>/ig, "\n"), d = d.replace(/<[^>]+>/g, ""), d = d.replace(/&nbsp;/ig, " "), d = d.replace(/\n\s*\n/g, "\n"), d = d.replace(/ {2}/g, " &nbsp;"), b.newlineTag == "p" ? /\n/.test(d) && (d = d.replace(/^/, "<p>").replace(/$/,
                        "</p>").replace(/\n/g, "</p><p>")) : d = d.replace(/\n/g, "<br />$&")), b.insertHtml(d, !0))
                }

                var d = b.edit.doc, e, h, k, j = "__kindeditor_paste__", l = !1;
                a(d.body).bind("paste", function (n) {
                    if (b.pasteType === 0)n.stop(); else if (!l) {
                        l = !0;
                        a("div." + j, d).remove();
                        e = b.cmd.selection();
                        h = e.range.createBookmark();
                        k = a('<div class="' + j + '"></div>', d).css({position: "absolute", width: "1px", height: "1px", overflow: "hidden", left: "-1981px", top: a(h.start).pos().y + "px", "white-space": "nowrap"});
                        a(d.body).append(k);
                        if (p) {
                            var q = e.range.get(!0);
                            q.moveToElementText(k[0]);
                            q.select();
                            q.execCommand("paste");
                            n.preventDefault()
                        } else e.range.selectNodeContents(k[0]), e.select();
                        setTimeout(function () {
                            c();
                            l = !1
                        }, 0)
                    }
                })
            });
            b.beforeGetHtml(function (a) {
                return a.replace(/(<(?:noscript|noscript\s[^>]*)>)([\s\S]*?)(<\/noscript>)/ig,function (a, b, c, d) {
                    return b + Fa(c).replace(/\s+/g, " ") + d
                }).replace(/<img[^>]*class="?ke-(flash|rm|media)"?[^>]*>/ig,function (a) {
                    var a = J(a), b = fa(a.style || ""), c = ob(a["data-ke-tag"]);
                    c.width = l(a.width, s(l(b.width, "")));
                    c.height = l(a.height,
                        s(l(b.height, "")));
                    return Ja(c)
                }).replace(/<img[^>]*class="?ke-anchor"?[^>]*>/ig,function (a) {
                        a = J(a);
                        return'<a name="' + unescape(a["data-ke-name"]) + '"></a>'
                    }).replace(/<div\s+[^>]*data-ke-script-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig,function (a, b, c) {
                        return"<script" + unescape(b) + ">" + unescape(c) + "<\/script>"
                    }).replace(/<div\s+[^>]*data-ke-noscript-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig,function (a, b, c) {
                        return"<noscript" + unescape(b) + ">" + unescape(c) + "</noscript>"
                    }).replace(/(<[^>]*)data-ke-src="([^"]*)"([^>]*>)/ig,
                    function (a, b, c) {
                        a = a.replace(/(\s+(?:href|src)=")[^"]*(")/i, function (a, b, d) {
                            return b + unescape(c) + d
                        });
                        return a = a.replace(/\s+data-ke-src="[^"]*"/i, "")
                    }).replace(/(<[^>]+\s)data-ke-(on\w+="[^"]*"[^>]*>)/ig, function (a, b, c) {
                        return b + c
                    })
            });
            b.beforeSetHtml(function (a) {
                return a.replace(/<embed[^>]*type="([^"]+)"[^>]*>(?:<\/embed>)?/ig,function (a) {
                    a = J(a);
                    a.src = l(a.src, "");
                    a.width = l(a.width, 0);
                    a.height = l(a.height, 0);
                    return pb(b.themesPath + "common/blank.gif", a)
                }).replace(/<a[^>]*name="([^"]+)"[^>]*>(?:<\/a>)?/ig,
                    function (a) {
                        var c = J(a);
                        if (c.href !== n)return a;
                        return'<img class="ke-anchor" src="' + b.themesPath + 'common/anchor.gif" data-ke-name="' + escape(c.name) + '" />'
                    }).replace(/<script([^>]*)>([\s\S]*?)<\/script>/ig,function (a, b, c) {
                        return'<div class="ke-script" data-ke-script-attr="' + escape(b) + '">' + escape(c) + "</div>"
                    }).replace(/<noscript([^>]*)>([\s\S]*?)<\/noscript>/ig,function (a, b, c) {
                        return'<div class="ke-noscript" data-ke-noscript-attr="' + escape(b) + '">' + escape(c) + "</div>"
                    }).replace(/(<[^>]*)(href|src)="([^"]*)"([^>]*>)/ig,
                    function (a, b, c, d, e) {
                        if (a.match(/\sdata-ke-src="[^"]*"/i))return a;
                        return a = b + c + '="' + d + '" data-ke-src="' + escape(d) + '"' + e
                    }).replace(/(<[^>]+\s)(on\w+="[^"]*"[^>]*>)/ig,function (a, b, c) {
                        return b + "data-ke-" + c
                    }).replace(/<table[^>]*\s+border="0"[^>]*>/ig, function (a) {
                        if (a.indexOf("ke-zeroborder") >= 0)return a;
                        return Rb(a, "ke-zeroborder")
                    })
            })
        })
    }
})(window);
