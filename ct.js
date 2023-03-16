var k = chrome.runtime.getURL("img/icon16.png"),
    w = chrome.runtime.getURL("img/close16.png"),
    x = {
        "-1": "none",
        1: ""
    },
    y = {
        242: "240p",
        243: "360p",
        244: "480p",
        246: "480p",
        247: "720p",
        248: "1080p",
        271: "1440p",
        272: "2160p",
        278: "144p",
        302: "720p-60f",
        303: "1080p-60f",
        308: "1440p-60f",
        313: "2160p",
        315: "2160p-60f",
        335: "1080p-60f",
        336: "1440p-60f",
        337: "2160p-60f"
    },
    z = [171, 172, 249, 250, 251];

function C(d) {
    return document.getElementById(d)
}
window.el = C;

function D() {
    var d = document.location.host.toLowerCase(),
        g = d.length - 12;
    return 0 <= g && d.indexOf("facebook.com", g) == g
}
async function E(d) {
    try {
        const g = await fetch(d["2"], {
            mode: "no-cors"
        });
        if (g.ok) {
            let a = await g.text();
            (d.ba || function() {})(a)
        }
    } catch (g) {}
}

function F(d) {
    var g = 0,
        a;
    var b = 0;
    for (a = d.length; b < a; b++) {
        var c = d.charCodeAt(b);
        g = (g << 5) - g + c;
        g |= 0
    }
    return g
}

function G(d) {
    return !d || 0 > d ? " " : 1E3 > d ? d + " Bytes" : 1E6 > d ? (d / 1024).toFixed(1) + " KB" : 1E9 > d ? (d / 1048576).toFixed(2) + " MB" : (d / 1073741824).toFixed(3) + " GB"
}

function H(d) {
    return d.replace(/\\u([\d\w]{4})/gi, function(g, a) {
        return String.fromCharCode(parseInt(a, 16))
    })
}

function I(d) {
    if (!d) return {
        left: 0,
        top: 0
    };
    try {
        var g = d.getBoundingClientRect();
        return g ? {
            left: Math.round(g.left + window.pageXOffset),
            top: Math.round(g.top + window.pageYOffset)
        } : {
            left: 0,
            top: 0
        }
    } catch (a) {
        return {
            left: 0,
            top: 0
        }
    }
}

function M(d) {
    return d ? !d.fEx || "VTT" != d.fEx.toUpperCase() && "SRT" != d.fEx.toUpperCase() ? d["4"] || (d.fEx.toUpperCase() || "MP4") + " File  " + (G(d.fS) || d.fDu) : d.fEx.toUpperCase() + " Subtitles File " + (d.fS ? G(d.fS) : " ") : "Media File"
}

function N(d, g, a) {
    this.D = d;
    d.i[a] = this;
    this.ua = a;
    this.J = "neatTable" + a;
    this.O = "neatHCell" + a;
    this.h = null;
    this.m = g;
    this.j = null;
    this.position = {
        left: 0,
        top: 0
    };
    this.F = -1;
    this.items = [];
    this.S = this.R = 0;
    this.u = this.C = !1
}
var lastItem = null;
var O = N.prototype;
O.G = function(d) {
    var g = Array.prototype.slice.call(arguments);
    g[2] = g[2].bind(this);
    d.addEventListener.apply(d, g.slice(1))
};
O.v = function() {
    this.h && (this.h.style.left = this.position.left + "px", this.h.style.top = this.position.top + "px", this.h.style.zIndex += 500)
};
O.Y = function(d) {
    this.K(!0);
    this.D.oa(this.items[d])
};
O.K = function(d) {
    if (!d || -1 != this.F) {
        var g = C(this.J).rows;
        this.F = d ? -1 : -this.F;
        for (d = 1; d < g.length; d++) g[d].style.display = x[this.F]
    }
};
O.I = function(d) {
    var g = this,
        a = C(this.J),
        b = this.D.N(this.items[d]);
    var c = a.insertRow(-1);
    c.cssText = "padding:0px;margin:0px;width:100%;line-height:100% !important;height:21px !important";
    c.style.display = x[g.F];
    a = c.insertCell(0);
    var isLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    if (isLight) {
      a.style.cssText = "letter-spacing:normal;line-height:100% !important;width:100%;height:20px !important;margin:0px;padding:0px;padding-left:5px;vertical-align:middle;color:black;cursor:default;border:solid 1px rgba(171, 171, 171, 0.5);border-radius: 8px 8px 0px 0px; background:rgba(241, 241, 241, 0.5) !important;backdrop-filter: blur(8px);direction:ltr;text-align:left;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI' !important;font-style:normal;font-weight:medium;font-size:8pt !important;";
    } else {
      a.style.cssText = "letter-spacing:normal;line-height:100% !important;width:100%;height:20px !important;margin:0px;padding:0px;padding-left:5px;vertical-align:middle;color:white;cursor:default;border:solid 1px rgba(125, 125, 125, 0.5);border-radius: 8px 8px 0px 0px; background:rgba(72, 72, 72, 0.5) !important;backdrop-filter: blur(8px);direction:ltr;text-align:left;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI' !important;font-style:normal;font-weight:medium;font-size:8pt !important;";
    }
    b = M(b);
    if (0 == d && 1 == this.items.length) {
        c = document.createElement("TABLE");
        c.style.cssText = "border-spacing:0px;border-collapse:separate;padding:0px;margin:0px;width:100%;direction:ltr;line-height:100% !important";
        var f = c.insertRow(-1);
        f.style.cssText = "padding:0px;margin:0px;line-height:100% !important;height:20px !important";
        var cls = f.insertCell(-1);
        cls.style.cssText = "padding:0px;margin:0px;width:20px;height:20px !important;text-align:center;vertical-align:middle;line-height:100% !important";
        var e = f.insertCell(-1);
        e.id = g.O;
        if (isLight) {
          e.style.cssText = "letter-spacing:normal;padding:0px;margin:0px;vertical-align:middle;cursor:default;direction:ltr;text-align:center;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI' !important;font-style:normal;font-weight:medium;font-size:8pt !important;height:20px !important;line-height:100% !important";
        }
        else {
          e.style.cssText = "letter-spacing:normal;padding:0px;margin:0px;vertical-align:middle;cursor:default;direction:ltr;text-align:center;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI' !important;font-style:normal;font-weight:medium;font-size:8pt !important;height:20px !important;line-height:100% !important";
        }
        f = document.createElement("IMG");
        f.src = w;
        f.width=12;
        f.height=12;
        f.onclick = function() {
            g.h.style.display = "none"
        };
        cls.appendChild(f);
        a.appendChild(c);
        a.style.paddingLeft = "0px";
        var text = C(g.O);
        text.innerText = " " + b;
        a.onmouseover = function() {
          if (isLight) {
            this.style.background = "rgba(80, 156, 254, 0.7)";
            this.style.color = "white";
          } else {
            this.style.background = "rgba(36, 104, 212, 0.7)";
            this.style.color = "white";
          }
        };
        a.onmouseout = function() {
          if (isLight) {
            this.style.background = "rgba(241, 241, 241, 0.5)";
            this.style.color = "black";
          } else {
            this.style.background = "rgba(72, 72, 72, 0.5)";
            this.style.color = "white"
          }
        };
        text.onclick = function() {
            0 == g.u && g.Y(0);
            g.u = !1
        }
    } else {
      if (lastItem) {
        lastItem.style.borderRadius = '0px'
      }
      a.style.borderRadius = '0px 0px 8px 8px'
      a.style.borderTop = 'none'
      a.innerText =
        (d + 1).toString() + " - " + b, a.onmouseover = function() {
          if (isLight) {
            this.style.background = "rgba(80, 156, 254, 0.7)";
            this.style.color = "white";
          } else {
            this.style.background = "rgba(36, 104, 212, 0.7)";
            this.style.color = "white";
          }
        }, a.onmouseout = function() {
          if (isLight) {
            this.style.background = "rgba(241, 241, 241, 0.5)";
            this.style.color = "black";
          } else {
            this.style.background = "rgba(72, 72, 72, 0.5)";
            this.style.color = "white"
          }
        }, c.onmousedown = function() {
            g.Y(d)
        }
        lastItem = a;
      }
};
O.L = function(d) {
    var g = this,
        a = this.D.N(d),
        b = null,
        c = this.m ? "absolute" : "fixed";
    this.m && !this.C && (b = I(this.m));
    b && (this.position = {
        left: Math.max(0, b.left - 1),
        top: Math.max(0, b.top - 19 - 4)
    });
    this.h ? this.v() : (this.h = document.createElement("DIV"), this.h.style.cssText = "padding:0px;margin:0px;position:" + c + ";z-index:100000000;width:210px;left:" + this.position.left + "px;top:" + this.position.top + "px;direction:ltr;text-align:center;line-height:100% !important;", this.h.id = "neatDiv" +
        this.ua, this.h.style.display = this.D.H ? "" : "none", document.body.appendChild(this.h), b = document.createElement("TABLE"), b.id = this.J, b.style.cssText = "border-spacing:0px;border-collapse:separate;padding:0px;margin:0px;line-height:100% !important;direction:ltr;width:100%;", this.h.appendChild(b), this.G(g.h, "mousemove", g.wa), this.G(g.h, "mousedown", g.va), this.G(g.h, "mouseup", g.T), this.G(g.h, "mouseout", g.xa), this.G(g.h, "mouseover", g.ya), this.j = setTimeout(function() {
                g.j = null;
                d.h.style.opacity = 0.45;
                for (row of d.h.firstChild.rows) {
                  row.firstChild.style.backdropFilter = "blur(8px)";
                }
                d.h.style.borderRadius = "8px 8px 0px 0px";
            },
            3E4));
    if (!(-1 < this.items.indexOf(d) && "hls" != a["6"])) {
        a = M(a);
        if (this.items.length && (" MP4 File HQ" == a || " MP4 File LQ" == a))
            for (b = 0; b < this.items.length; b++)
                if (a == M(this.D.N(this.items[b]))) {
                    this.items[b] = d;
                    this.h.style.display = this.D.H ? "" : "none";
                    this.v();
                    return
                } this.items.push(d);
        d = this.items.length - 1;
        a = C(g.J).rows;
        var f;
        d && (f = C(g.O));
        0 == d ? this.I(0) : 1 == d ? (this.I(0), this.I(1), f.onclick = function(e) {
            e.stopPropagation();
            e.preventDefault();
            0 == g.u && g.K();
            g.u = !1
        }, f.innerText = " 2 Files") : (this.I(d), f.innerText =
            " " + (d + 1).toString() + " Files");
        a[0].style.display = ""
    }
};
O.va = function(d) {
    0 == d.button && (this.C = !0, this.u = !1, this.R = d.clientX, this.S = d.clientY, d.stopPropagation(), d.preventDefault())
};
O.wa = function(d) {
    if (this.C) {
        this.K(!0);
        var g = d.clientX - this.R,
            a = d.clientY - this.S;
        !this.u && (this.u = g || a);
        this.position.left += g;
        this.position.top += a;
        this.R = d.clientX;
        this.S = d.clientY;
        this.v()
    } else this.u = !1
};
O.xa = function() {
    this.C = !1;
    this.j && (clearTimeout(this.j), this.j = null);
    var d = this;
    this.j = setTimeout(function() {
        for (row of d.h.firstChild.rows) {
          row.firstChild.style.filter = 'opacity(0.45)';
          row.firstChild.style.backdropFilter = "blur(8px)";
        }
        d.h.style.borderRadius = "8px 8px 0px 0px";
        d.j = null
    }, 15E3)
};
O.ya = function() {
    this.C = !1;
    this.j && (clearTimeout(this.j), this.j = null);
    // this.h.style.opacity = 1;
    for (row of this.h.firstChild.rows) {
      row.firstChild.style.filter = 'opacity(1)';
      row.firstChild.style.backdropFilter = "blur(8px)";
    }
    // this.h.style.backdropFilter = "blur(8px)";
    this.h.style.borderRadius = "8px 8px 0px 0px";
    this
};
O.T = function() {
    this.C = !1
};
if (!window.o) {
    var P = function() {
        this.ea = null;
        this.A = {};
        this.i = {};
        this.g = [];
        this.P = !1;
        this.$ = this.Z = -1;
        this.Counter = 1;
        this.l = null;
        this.H = !0;
        this.ja = [];
        this.port = chrome.runtime.connect({
            name: "neat"
        });
        this.ga = Math.ceil(2E6 * Math.random());
        this.port.onMessage.addListener(this.aa.bind(this));
        this.port.onDisconnect.addListener(this.ca.bind(this));
        if (D()) {
            var a = this;
            this.sa = new window.MutationObserver(function(b) {
                b.forEach(function(c) {
                    a.pa(c.target)
                })
            });
            this.sa.observe(document, {
                childList: !0,
                subtree: !0
            })
        }
        this.o(window,
            "keydown", this.W, !0);
        this.o(window, "keyup", this.W, !0);
        this.o(window, "mouseup", this.T, !0);
        this.o(window, "resize", this.ta);
        this.o(document, "DOMContentLoaded", this.da);
        this.o(document, "click", this.ra)
    };
    window.o = !0;
    O = P.prototype;
    O.qa = function(a, b) {
        b.hd && this.B({
            id: F(b.hd),
            1: "GET",
            2: b.hd,
            fEx: "mp4",
            4: " MP4 File HQ"
        }, window.location.href, a, !1);
        b.sd && this.B({
            id: F(b.sd),
            1: "GET",
            2: b.sd,
            fEx: "mp4",
            4: " MP4 File LQ"
        }, window.location.href, a, !1)
    };
    O.la = function(a) {
        for (;
            (a = a.parentElement) && 1 > a.querySelectorAll("video").length;);
        if (a) return a.querySelectorAll("video")[0]
    };
    O.ia = function(a, b) {
        var c = this;
        E({
            2: "https://www.facebook.com/video/embed?video_id=" + b,
            ba: function(f) {
                var e = /"sd_src_no_ratelimit":"(.*?)"/.exec(f),
                    h = /"hd_src_no_ratelimit":"(.*?)"/.exec(f);
                e && e.length || (e = /"sd_src":"(.*?)"/.exec(f));
                h && h.length || (h = /"hd_src":"(.*?)"/.exec(f));
                f = {
                    sd: e && e.length ? e[1].replace(/\\/g, "") : "",
                    hd: h && h.length ? h[1].replace(/\\/g, "") : ""
                };
                e = c.la(a);
                void 0 !== e && c.qa(e, f)
            }
        })
    };
    O.pa = function(a) {
        var b = this;
        a = a.querySelectorAll('a[href*="/videos/"]');
        a.length && Array.from(a, function(c) {
            if (!c.getAttribute("NEAT_DM")) {
                c.setAttribute("NEAT_DM", 1);
                var f = c.href.match(/.*\/videos\/(\d+)\/.*/i);
                f && b.ia(c, f[1])
            }
        })
    };
    O.N = function(a) {
        return this.A[a]
    };
    O.Ba = function() {
        this.port.postMessage([2, this.ea, window.location.href, this.getTitle()])
    };
    O.da = function(a) {
        for (var b = this, c = document.getElementsByTagName("SCRIPT"), f, e, h, l, m = !1, q = /"progressive":\s*\[/, r = 0; r < c.length; r++) {
            var n = c[r];
            f = n.innerText;
            if (a && !m && -1 < f.indexOf("itag") && 0 > f.indexOf("signatureCipher")) {
                for (var p = ['"formats"', "adaptiveFormats"], t = 0; t < p.length; t++) e = f, h = e.indexOf(p[t]), 0 > h || (e = e.substr(h), h = e.indexOf("["), l = e.indexOf("]"), 0 > h || 0 > l || l <= h || (e = e.substr(h + 1, l - h - 1), m = this.M(e, 1 == t)));
                if (this.Ca) break
            }
            if (0 <= document.location.host.toLowerCase().indexOf("vimeo") && !n.src && q.test(n.innerText) && (e = n.innerText, h = e.indexOf('"progressive"'), !(0 > h || (l = e.indexOf("]", h), 0 > l)))) {
                e = e.substr(h, l - h + 1);
                f = null;
                try {
                    f = JSON.parse("{" + e + "}")
                } catch (v) {}
                if (f) {
                    var u = f.progressive;
                    u && setTimeout(function() {
                        for (var v = 0; v <
                            u.length; v++) b.B({
                            id: F(u[v].url),
                            1: "GET",
                            2: u[v].url,
                            fEx: "mp4",
                            4: "MP4 File " + u[v].quality
                        }, window.location.href, null, !1)
                    }, 2E3);
                    break
                }
            }
        }
    };
    O.M = function(a, b) {
        var c = this,
            f = {
                18: {
                    e: "MP4",
                    s: "360p"
                },
                22: {
                    e: "MP4",
                    s: "720p"
                },
                37: {
                    e: "MP4",
                    s: "1080p"
                },
                38: {
                    e: "MP4",
                    s: "1080p"
                },
                82: {
                    e: "MP4",
                    s: "360p"
                },
                84: {
                    e: "MP4",
                    s: "720p"
                },
                132: {
                    e: "MP4",
                    s: "240p"
                },
                151: {
                    e: "MP4",
                    s: "144p"
                }
            };
        a = H(a);
        a = a.replace(/\\/g, "");
        var e = [],
            h = "";
        a = a.split("}");
        if (1 > a.length) return !1;
        for (var l = 0; l < a.length; l++) {
            var m = a[l].trim(),
                q = {},
                r;
            if (m && !(0 > m.indexOf("itag"))) {
                var n =
                    m.indexOf('"url"');
                if (!(0 > n)) {
                    n = m.indexOf('"', n + 5);
                    var p = m.indexOf('"', n + 1);
                    if (!(0 > n || 0 > p || p <= n || (m = q.url = decodeURIComponent(m.substr(n + 1, p - n - 1)), n = m.indexOf("?"), 0 > n))) {
                        n = m.substring(n + 1).split("&");
                        for (p = 0; p < n.length; p++) 0 == n[p].indexOf("itag=") && (r = q.itag = parseInt(n[p].split("=").pop())), 0 == n[p].indexOf("dur=") && (q.dur = parseFloat(n[p].split("=").pop())), 0 == n[p].indexOf("ei=") && (q.mK = n[p].split("=").pop());
                        m && r && (0 < m.indexOf("signature=") || 0 < m.indexOf("sig=")) && (!b || q.dur) && (b || f[r]) && (!b || y[r] ||
                            -1 < z.indexOf(r)) && (b ? e.push({
                            2: m,
                            mme: 0 > z.indexOf(r) ? "video" : "audio",
                            ig: r,
                            du: q.dur,
                            mK: q.mK,
                            purl: window.location.href
                        }) : (m = parseInt(q.dur), h = q.timeStr = 60 > m ? m + " sec" : parseInt(m / 60) + " min " + (parseInt(m % 60) ? parseInt(m % 60) + " sec" : ""), e.push(q)))
                    }
                }
            }
        }
        if (!e.length) return !1;
        b ? setTimeout(function() {
            for (var t = e.length - 1; 0 <= t; t--) c.X(e[t], "DTC")
        }, 1800) : (this.Aa(), setTimeout(function() {
            for (var t = 0; t < e.length; t++) {
                var u = e[t];
                c.B({
                    id: F(u.url),
                    ig: u.itag,
                    1: "GET",
                    2: u.url,
                    fEx: f[u.itag].e,
                    4: f[u.itag].e + " File " + f[u.itag].s +
                        ", " + (u.timeStr || h)
                }, window.location.href, null, !1)
            }
        }, 1500));
        return !0
    };
    O.Aa = function() {
        this.g = [];
        for (var a in this.i)
            for (var b = this.i[a], c = 0; c < b.items.length; c++) {
                var f = this.A[b.items[c]];
                if (f && f.ig) {
                    this.U(a, !0);
                    break
                }
            }
    };
    O.U = function(a, b) {
        var c = this.i[a];
        if (c) {
            if (b)
                for (b = 0; b < c.items.length; b++) delete this.A[c.items[b]];
            try {
                document.body.removeChild(c.h), c.j && clearTimeout(c.j)
            } catch (f) {}
            delete this.i[a]
        }
    };
    O.oa = function(a) {
        (a = this.A[a]) && this.port.postMessage([6, a, window.location.href, this.getTitle(),
            M(a)
        ])
    };
    O.ka = function(a, b) {
        var c = null,
            f = ["VIDEO", "AUDIO", "OBJECT", "EMBED"];
        try {
            var e = document.activeElement,
                h = 0,
                l, m, q = e && 0 <= f.indexOf(e.tagName) ? e : null;
            q ||= (e = document.elementFromPoint(this.Z, this.$)) && 0 <= f.indexOf(e.tagName) ? e : null;
            for (var r = 0; r < f.length; r++) {
                for (var n = document.getElementsByTagName(f[r]), p = 0; p < n.length; p++)
                    if (e = n[p], 3 != r || "application/x-shockwave-flash" == e.type.toLowerCase()) {
                        var t = e.src || e.data;
                        if (t && (t == a || t == b)) {
                            var u = e;
                            break
                        }
                        if (q || v) var v = e;
                        else {
                            var A = e.clientWidth,
                                B = e.clientHeight;
                            if (A && B) {
                                var J = window.getComputedStyle(e);
                                if (!J || "hidden" != J.visibility) {
                                    var K = A * B;
                                    B < 1.4 * A && A < 3 * B && K > h && (h = K, l = e);
                                    m ||= e
                                }
                            }
                        }
                    } if (u) break
            }(c = u || q || v || l || m) || (c = document.querySelectorAll("video,audio")[0]);
            if (!c) return null;
            if ("EMBED" == c.tagName && !c.clientWidth && !c.clientHeight) {
                var L = c.parentElement;
                "OBJECT" == L.tagName && (c = L)
            }
            return c
        } catch (Q) {
            return null
        }
    };
    O.ma = function(a) {
        try {
            var b = parseInt(a.getAttribute("JM_NEAT"));
            b || (b = this.ga << 10 | this.Counter++, a.setAttribute("JM_NEAT", b));
            return b
        } catch (c) {}
    };
    O.getTitle = function() {
        var a = "";
        try {
            a = document.title || document.getElementsByTagName("title")[0].innerText, a = a.trim()
        } catch (b) {}
        return a ? a = a.replace(/[ \t\r\n\u25B6]+/g, " ").trim() : ""
    };
    O.W = function(a) {
        8 != a.keyCode && 46 != a.keyCode || this.port.postMessage([4, "keydown" == a.type])
    };
    O.T = function(a) {
        0 == a.button && (this.Z = a.clientX, this.$ = a.clientY)
    };
    O.ta = function() {
        if (!this.P) {
            this.P = !0;
            var a = this;
            window.setTimeout(function() {
                for (var b in a.i) {
                    var c = a.i[b],
                        f = null;
                    c.m && (f = I(c.m));
                    if (f) {
                        try {
                            document.body.removeChild(c.h)
                        } catch (e) {}
                        c.position.left =
                            Math.max(0, f.left - 1);
                        c.position.top = Math.max(0, f.top - 19 - 4);
                        document.body.appendChild(c.h)
                    }
                    c.v()
                }
                a.P = !1
            }, 500)
        }
    };

    function d(a, b) {
        return 18 > Math.abs(a.left - b.left) && 18 > Math.abs(a.top - b.top)
    }

    function g(a) {
        a = I(a.m);
        return !a || 0 > a.left || 0 > a.top
    }
    O.B = function(a, b, c, f) {
        var e = this,
            h = -1,
            l = null,
            m;
        f = f && RegExp(".*facebook.com$|.*vimeo.com$|.*youtube.com$", "i").test(window.location.host) && !(a.fEx && "VTT" == a.fEx.toUpperCase()) && !(!a.fS || 4194304 < a.fS);
        a.id || (a.id = F(a["2"]));
        c ||= this.ka(a["2"], b);
        if (!c)
            for (m in this.i) {
                l =
                    this.i[m];
                h = m;
                break
            }
        if (!c && !l) {
            if (f) return;
            l = new N(e, null, 0)
        } else if (!l)
            if (h = this.ma(c), l = this.i[h], !l) {
                if (f) return;
                l = new N(e, c, h);
                b = I(c);
                c = {
                    left: Math.max(0, b.left - 1),
                    top: Math.max(0, b.top - 19 - 4)
                };
                for (m in this.i)
                    if (m && m != h && (b = this.i[m], d(c, b.position))) {
                        for (c = 0; c < b.items.length; c++) l.L(b.items[c]);
                        this.U(m, !1);
                        break
                    } if (0 != h && this.i[0]) {
                    b = this.i[0];
                    for (c = 0; c < b.items.length; c++) l.L(b.items[c]);
                    this.U(0, !1)
                }
            } else {
                if (f) {
                    l.v();
                    return
                }
            }
        else if (f) {
            l.v();
            return
        }
        e.A[a.id] = a;
        l.L(a.id);
        l.m && g(l) && !this.l && (e.l =
            setInterval(function() {
                e.ha(l)
            }, 1200))
    };
    O.ha = function(a) {
        if (a && a.m) {
            var b = I(a.m);
            b && (a.position = {
                left: Math.max(0, b.left - 1),
                top: Math.max(0, b.top - 19 - 4)
            }, a.v());
            !b || 0 > b.left || 0 > b.top || (clearInterval(this.l), this.l = null)
        } else clearInterval(this.l), this.l = null
    };
    O.V = function(a, b) {
        var c = this,
            f = a.du,
            e = "";
        e = 60 > f ? parseInt(f) + " sec" : parseInt(f / 60) + " min " + (parseInt(f % 60) ? parseInt(f % 60) + " sec" : "");
        var h = {
            id: F(a["2"] + b["2"]),
            2: a["2"],
            3: b["2"],
            ig: a.ig,
            4: "MKV File " + y[a.ig] + ", " + e
        };
        setTimeout(function() {
            c.B(h, a.purl,
                null, !1)
        }, 2200)
    };
    O.X = function(a, b) {
        if ("https://www.youtube.com/" != window.location.href.toLowerCase() && ("video" != a.mme || y[a.ig])) {
            a.mode = b;
            for (b = 0; b < this.g.length; b++)
                if (a.ig == this.g[b].ig && (a.mK == this.g[b].mK || 2 > Math.abs(a.du - this.g[b].du))) return;
            a.used = !1;
            if ("video" == a.mme) {
                var c = null;
                for (b = 0; b < this.g.length; b++)
                    if ("audio" == this.g[b].mme && !this.g[b].used && (a.mK == this.g[b].mK || 2 > Math.abs(a.du - this.g[b].du))) {
                        this.g[b].used = !0;
                        c = this.g[b];
                        break
                    } if (!c)
                    for (b = 0; b < this.g.length; b++)
                        if ("audio" == this.g[b].mme &&
                            (a.mK == this.g[b].mK || 2 > Math.abs(a.du - this.g[b].du))) {
                            this.g[b].used = !0;
                            c = this.g[b];
                            break
                        } c && (a.used = !0, this.V(a, c))
            } else {
                c = null;
                for (b = 0; b < this.g.length; b++)
                    if ("video" == this.g[b].mme && 0 == this.g[b].used && (a.mK == this.g[b].mK || 2 > Math.abs(a.du - this.g[b].du))) {
                        this.g[b].used = !0;
                        c = this.g[b];
                        break
                    } c && (a.used = !0, this.V(c, a))
            }
            this.g.push(a)
        }
    };
    O.na = function(a) {
        var b = this;
        E({
            2: a,
            ba: function(c) {
                for (var f = ['"formats"', "adaptiveFormats"], e = 0; e < f.length; e++) {
                    var h = c,
                        l = h.indexOf(f[e]);
                    if (!(0 > l || -1 < h.indexOf("signatureCipher"))) {
                        h =
                            h.substr(l);
                        l = h.indexOf("[");
                        var m = h.indexOf("]");
                        if (0 > l || 0 > m || m <= l) break;
                        h = h.substr(l + 1, m - l - 1);
                        b.M(h, 1 == e)
                    }
                }
            }
        })
    };
    O.aa = function(a) {
        var b = this;
        switch (a[0]) {
            case 1:
                b.B(a[1], a[2], null, !0);
                break;
            case 3:
                var c = a[1];
                c && (b.ea = c);
                b.Ba();
                break;
            case 5:
                b.fa();
                break;
            case 7:
                b.M(a[1], a[2]);
                break;
            case 9:
                setTimeout(function() {
                    b.X(a[1], "BGH")
                }, 1400);
                break;
            case 11:
                b.za();
                c = new URL(window.location.href);
                var f = c.pathname;
                if (!(0 <= c.hostname.toLowerCase().indexOf("youtube."))) {
                    setTimeout(function() {
                        b.da()
                    }, 2500);
                    break
                }
                0 ==
                    f.toLowerCase().indexOf("/watch") && b.na(a[1]);
                break;
            case 13:
                c = a[1];
                c != b.H && (b.H = c, b.fa());
                break;
            case 15:
                alert("Extension Can't Connect to NeatDownloadManager Application, You Can : \r\n1- Check If NeatDownloadManager is Running.\r\n2- or Hold down Delete-Key and click on the Download link.\r\n3- or Disable NeatDownloadManager Extension temporarily.")
        }
    };
    O.o = function(a) {
        var b = Array.prototype.slice.call(arguments);
        b[2] = b[2].bind(this);
        this.ja.push(b);
        a.addEventListener.apply(a, b.slice(1))
    };
    O.ra = function() {
        for (var a in this.i) this.i[a].K(!0)
    };
    O.za = function() {
        try {
            for (var a in this.i) this.i[a].j && clearTimeout(this.i[a].j), document.body.removeChild(this.i[a].h)
        } catch (b) {}
        this.i = {};
        this.A = {};
        this.g = [];
        this.l && clearInterval(this.l);
        this.l = null
    };
    O.fa = function() {
        var a = this.H ? "" : "none";
        try {
            for (var b in this.i) this.i[b].h.style.display = a
        } catch (c) {}
    };
    O.ca = function() {
        this.port = chrome.runtime.connect({
            name: "neat"
        });
        this.port.onMessage.addListener(this.aa.bind(this));
        this.port.onDisconnect.addListener(this.ca.bind(this))
    };
    new P
};