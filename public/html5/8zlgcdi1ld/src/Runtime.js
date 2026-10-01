var Ka = "function" == typeof Object.defineProperties ? Object.defineProperty : function(J, fa, t) {
        if (t.get || t.set) throw new TypeError("ES3 does not support getters and setters.");
        J != Array.prototype && J != Object.prototype && (J[fa] = t.value)
    },
    La = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function Sa() {
    Sa = function() {};
    La.Symbol || (La.Symbol = Xa)
}
var Ya = 0;

function Xa(J) {
    return "jscomp_symbol_" + (J || "") + Ya++
}

function kb() {
    Sa();
    var J = La.Symbol.iterator;
    J || (J = La.Symbol.iterator = La.Symbol("iterator"));
    "function" != typeof Array.prototype[J] && Ka(Array.prototype, J, {
        configurable: !0,
        writable: !0,
        value: function() {
            return Cb(this)
        }
    });
    kb = function() {}
}

function Cb(J) {
    var fa = 0;
    return Db(function() {
        return fa < J.length ? {
            done: !1,
            value: J[fa++]
        } : {
            done: !0
        }
    })
}

function Db(J) {
    kb();
    J = {
        next: J
    };
    J[La.Symbol.iterator] = function() {
        return this
    };
    return J
}

function Yb(J) {
    kb();
    var fa = J[Symbol.iterator];
    return fa ? fa.call(J) : Cb(J)
}

function Zb(J, fa) {
    kb();
    J instanceof String && (J += "");
    var t = 0,
        X = {
            next: function() {
                if (t < J.length) {
                    var U = t++;
                    return {
                        value: fa(U, J[U]),
                        done: !1
                    }
                }
                X.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return X.next()
            }
        };
    X[Symbol.iterator] = function() {
        return X
    };
    return X
}

function ki(J, fa) {
    if (fa) {
        for (var t = La, X = J.split("."), U = 0; U < X.length - 1; U++) {
            var Q = X[U];
            Q in t || (t[Q] = {});
            t = t[Q]
        }
        X = X[X.length - 1];
        U = t[X];
        Q = fa(U);
        Q != U && null != Q && Ka(t, X, {
            configurable: !0,
            writable: !0,
            value: Q
        })
    }
}
ki("Array.prototype.values", function(J) {
    return J ? J : function() {
        return Zb(this, function(J, t) {
            return t
        })
    }
});

function li(J, fa) {
    return Object.prototype.hasOwnProperty.call(J, fa)
}
ki("WeakMap", function(J) {
    function fa(t) {
        this.$r = (Q += Math.random() + 1).toString();
        if (t) {
            Sa();
            kb();
            t = Yb(t);
            for (var P; !(P = t.next()).done;) P = P.value, this.set(P[0], P[1])
        }
    }

    function t(t) {
        li(t, U) || Ka(t, U, {
            value: {}
        })
    }

    function X(J) {
        var P = Object[J];
        P && (Object[J] = function(J) {
            t(J);
            return P(J)
        })
    }
    if (function() {
            if (!J || !Object.seal) return !1;
            try {
                var t = Object.seal({}),
                    P = Object.seal({}),
                    Q = new J([
                        [t, 2],
                        [P, 3]
                    ]);
                if (2 != Q.get(t) || 3 != Q.get(P)) return !1;
                Q["delete"](t);
                Q.set(P, 4);
                return !Q.has(t) && 4 == Q.get(P)
            } catch (ua) {
                return !1
            }
        }()) return J;
    var U = "$jscomp_hidden_" + Math.random().toString().substring(2);
    X("freeze");
    X("preventExtensions");
    X("seal");
    var Q = 0;
    fa.prototype.set = function(J, P) {
        t(J);
        if (!li(J, U)) throw Error("WeakMap key fail: " + J);
        J[U][this.$r] = P;
        return this
    };
    fa.prototype.get = function(t) {
        return li(t, U) ? t[U][this.$r] : void 0
    };
    fa.prototype.has = function(t) {
        return li(t, U) && li(t[U], this.$r)
    };
    fa.prototype["delete"] = function(t) {
        return li(t, U) && li(t[U], this.$r) ? delete t[U][this.$r] : !1
    };
    return fa
});
ki("Map", function(J) {
    function fa() {
        var t = {};
        return t.Ak = t.next = t.head = t
    }

    function t(t, J) {
        var P = t.$j;
        return Db(function() {
            if (P) {
                for (; P.head != t.$j;) P = P.Ak;
                for (; P.next != P.head;) return P = P.next, {
                    done: !1,
                    value: J(P)
                };
                P = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }

    function X(t, J) {
        var P;
        P = J && typeof J;
        "object" == P || "function" == P ? Q.has(J) ? P = Q.get(J) : (P = "" + ++ja, Q.set(J, P)) : P = "p_" + J;
        var U = t.vr[P];
        if (U && li(t.vr, P))
            for (var X = 0; X < U.length; X++) {
                var fa = U[X];
                if (J !== J && fa.key !== fa.key || J === fa.key) return {
                    id: P,
                    list: U,
                    index: X,
                    yf: fa
                }
            }
        return {
            id: P,
            list: U,
            index: -1,
            yf: void 0
        }
    }

    function U(t) {
        this.vr = {};
        this.$j = fa();
        this.size = 0;
        if (t) {
            t = Yb(t);
            for (var P; !(P = t.next()).done;) P = P.value, this.set(P[0], P[1])
        }
    }
    if (function() {
            if (!J || !J.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var t = Object.seal({
                        x: 4
                    }),
                    Q = new J(Yb([
                        [t, "s"]
                    ]));
                if ("s" != Q.get(t) || 1 != Q.size || Q.get({
                        x: 4
                    }) || Q.set({
                        x: 4
                    }, "t") != Q || 2 != Q.size) return !1;
                var U = Q.entries(),
                    X = U.next();
                if (X.done || X.value[0] != t || "s" != X.value[1]) return !1;
                X = U.next();
                return X.done || 4 != X.value[0].x || "t" != X.value[1] ||
                    !U.next().done ? !1 : !0
            } catch (Za) {
                return !1
            }
        }()) return J;
    Sa();
    kb();
    var Q = new WeakMap;
    U.prototype.set = function(t, J) {
        var P = X(this, t);
        P.list || (P.list = this.vr[P.id] = []);
        P.yf ? P.yf.value = J : (P.yf = {
            next: this.$j,
            Ak: this.$j.Ak,
            head: this.$j,
            key: t,
            value: J
        }, P.list.push(P.yf), this.$j.Ak.next = P.yf, this.$j.Ak = P.yf, this.size++);
        return this
    };
    U.prototype["delete"] = function(t) {
        t = X(this, t);
        return t.yf && t.list ? (t.list.splice(t.index, 1), t.list.length || delete this.vr[t.id], t.yf.Ak.next = t.yf.next, t.yf.next.Ak = t.yf.Ak, t.yf.head =
            null, this.size--, !0) : !1
    };
    U.prototype.clear = function() {
        this.vr = {};
        this.$j = this.$j.Ak = fa();
        this.size = 0
    };
    U.prototype.has = function(t) {
        return !!X(this, t).yf
    };
    U.prototype.get = function(t) {
        return (t = X(this, t).yf) && t.value
    };
    U.prototype.entries = function() {
        return t(this, function(t) {
            return [t.key, t.value]
        })
    };
    U.prototype.keys = function() {
        return t(this, function(t) {
            return t.key
        })
    };
    U.prototype.values = function() {
        return t(this, function(t) {
            return t.value
        })
    };
    U.prototype.forEach = function(t, J) {
        for (var P = this.entries(), Q; !(Q =
                P.next()).done;) Q = Q.value, t.call(J, Q[1], Q[0], this)
    };
    U.prototype[Symbol.iterator] = U.prototype.entries;
    var ja = 0;
    return U
});
ki("Array.prototype.keys", function(J) {
    return J ? J : function() {
        return Zb(this, function(J) {
            return J
        })
    }
});
ki("Array.prototype.entries", function(J) {
    return J ? J : function() {
        return Zb(this, function(J, t) {
            return [J, t]
        })
    }
});
ki("Array.prototype.fill", function(J) {
    return J ? J : function(J, t, X) {
        var U = this.length || 0;
        0 > t && (t = Math.max(0, U + t));
        if (null == X || X > U) X = U;
        X = Number(X);
        0 > X && (X = Math.max(0, U + X));
        for (t = Number(t || 0); t < X; t++) this[t] = J;
        return this
    }
});
window.Runtime = function(J, fa) {
    function t(a, b) {
        this.files = {};
        this.root = "";
        a && this.load(a, b)
    }

    function X(a, b, c) {
        this.x = a;
        this.y = b;
        this.text = c
    }

    function U() {
        this.Be = "";
        this.offset = this.ma = 0;
        this.md = !1
    }

    function Q() {
        this.Qe = []
    }

    function ja(a, b, c, d) {
        this.left = a ? a : 0;
        this.top = b ? b : 0;
        this.right = c ? c : 0;
        this.bottom = d ? d : 0
    }

    function P() {
        this.y = this.x = 0
    }

    function fb() {
        this.Gb = 12;
        this.Cf = 400;
        this.Bf = 0;
        this.Ye = "Arial";
        this.Jl = !1
    }

    function ua(a, b) {
        this.app = a;
        this.V = b;
        this.Ra = new Q;
        this.gn = null
    }

    function pa(a, b, c) {
        this.app =
            a;
        this.width = b;
        this.height = c;
        this.canvas = document.createElement("canvas");
        this.canvas.width = b;
        this.canvas.height = c;
        this.uf = this.canvas.getContext("2d")
    }

    function Za() {
        this.jY = !!window.opr && !!opr.U4 || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
        this.hY = "undefined" !== typeof InstallTrigger;
        this.lY = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString();
        this.LH = !!document.documentMode;
        this.eY = !this.LH && !!window.StyleMedia;
        (this.fY = (this.KH = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) && -1 != navigator.userAgent.indexOf("Edg")) || this.KH || this.eY || this.LH || this.hY || this.jY || this.lY || this.tK(Za.CV);
        this.version = this.uK(navigator.userAgent) || this.uK(navigator.appVersion) || "Unknown version";
        this.tK(Za.EV)
    }

    function Ma() {
        this.kz = null;
        this.height = this.width = 0;
        this.Pi = null;
        this.V = this.color = 0;
        this.oX = null;
        this.qw = this.nA = this.cY = this.XG = this.Xe = 0;
        this.jz = null;
        this.Jl = !0
    }

    function lb(a) {
        this.w = a;
        this.U = this.w.U;
        this.pv = this.U.g;
        this.Dy = this.U.H;
        this.yu = this.U.ca;
        this.BE = this.pv.jc
    }

    function ga() {}

    function $a() {
        this.V = 0;
        this.name = null;
        this.index = 0
    }

    function ra() {}

    function mb() {}

    function Eb() {}

    function nb() {}

    function Fb() {}

    function ob() {}

    function Gb() {}

    function $b() {}

    function ac() {}

    function bc() {}

    function cc() {}

    function dc() {}

    function ec() {}

    function fc() {}

    function gc() {}

    function hc() {}

    function ic() {}

    function jc() {}

    function kc() {}

    function lc() {}

    function mc() {}

    function nc() {}

    function oc() {}

    function pc() {}

    function qc() {}

    function rc() {}

    function sc() {}

    function tc() {}

    function uc() {}

    function vc() {}

    function wc() {}

    function xc() {}

    function yc() {}

    function zc() {}

    function pb() {}

    function Ac() {}

    function pb() {}

    function Bc() {}

    function Cc() {}

    function Dc() {}

    function Ec() {}

    function Fc() {}

    function Gc() {}

    function Hc() {}

    function Ic() {}

    function Jc() {}

    function Kc() {}

    function Lc() {}

    function Mc() {}

    function Nc() {}

    function Oc() {}

    function Pc() {}

    function Qc() {}

    function Rc() {}

    function Sc() {}

    function Tc() {}

    function Uc() {}

    function Vc() {}

    function Wc() {}

    function Xc() {}

    function Yc() {}

    function Zc() {}

    function $c() {}

    function ad() {}

    function bd() {}

    function cd() {}

    function dd() {}

    function ed() {}

    function fd() {}

    function gd() {}

    function hd() {}

    function id() {}

    function jd() {}

    function kd() {}

    function ld() {}

    function md() {}

    function nd() {}

    function od() {}

    function pd() {}

    function qd() {}

    function rd() {}

    function sd() {}

    function td() {}

    function ud() {}

    function vd() {}

    function wd() {}

    function xd() {}

    function yd() {}

    function zd() {}

    function Ad() {}

    function Bd() {}

    function Cd() {}

    function Dd() {}

    function Ed() {}

    function Fd() {}

    function Gd() {}

    function Hd() {}

    function Id() {}

    function Jd() {}

    function Kd() {}

    function Ld() {}

    function Md() {}

    function Nd() {}

    function Od() {}

    function Pd() {}

    function Qd() {}

    function Rd() {}

    function Sd() {}

    function Td() {}

    function Ud() {}

    function Vd() {}

    function I() {}

    function Ga() {}

    function Wd() {}

    function I() {}

    function Xd() {}

    function Yd() {}

    function Zd() {}

    function $d() {}

    function ae() {}

    function be() {}

    function Hb() {}

    function Ib() {}

    function Jb() {}

    function Kb() {}

    function Lb() {}

    function Mb() {}

    function ce() {}

    function de() {}

    function ee() {}

    function fe() {}

    function ge() {}

    function he() {}

    function ie() {}

    function je() {}

    function ke() {}

    function le() {}

    function me() {}

    function ne() {}

    function oe() {}

    function pe() {}

    function qe() {}

    function re() {}

    function se() {}

    function te() {}

    function ue() {}

    function ve() {}

    function we() {}

    function ze() {}

    function Ae() {}

    function Be() {}

    function Ce() {}

    function De() {}

    function Ee() {}

    function Fe() {}

    function Ge() {}

    function He() {}

    function Ie() {}

    function Je() {}

    function Ke() {}

    function Nb() {}

    function Le() {}

    function Me() {}

    function Ne() {}

    function Oe() {}

    function Pe() {}

    function Qe() {}

    function Re() {}

    function Se() {}

    function Te() {}

    function Ue() {}

    function Ve() {}

    function We() {}

    function Xe() {}

    function Ye() {}

    function Ze() {}

    function $e() {}

    function af() {}

    function bf() {}

    function cf() {}

    function df() {}

    function ef() {
        this.Wy = !1;
        this.name = null
    }

    function ff() {}

    function gf() {}

    function hf() {}

    function jf() {}

    function kf() {}

    function lf() {}

    function la() {}

    function Ob() {}

    function Ha() {}

    function qb() {}

    function mf() {}

    function nf() {}

    function of() {}

    function pf() {}

    function qf() {}

    function rf() {}

    function sf() {}

    function tf() {}

    function uf() {}

    function vf() {}

    function wf() {}

    function xf() {}

    function yf() {}

    function zf() {}

    function Af() {}

    function Bf() {}

    function Cf() {}

    function Df() {}

    function Ef() {}

    function Ff() {}

    function Gf() {}

    function Hf() {}

    function If() {}

    function Jf() {}

    function Kf() {}

    function Lf() {}

    function Mf() {}

    function Nf() {}

    function Of() {}

    function Pf() {}

    function Qf() {}

    function Rf() {}

    function Sf() {}

    function Tf() {}

    function Uf() {}

    function Vf() {}

    function Wf() {}

    function Xf() {}

    function Yf() {}

    function Zf() {}

    function $f() {}

    function ag() {}

    function bg() {}

    function cg() {}

    function dg() {}

    function eg() {}

    function fg() {}

    function gg() {}

    function hg() {}

    function ig() {}

    function jg() {}

    function kg() {}

    function lg() {}

    function mg() {}

    function ng() {}

    function og() {}

    function pg() {}

    function qg() {}

    function rg() {}

    function sg() {}

    function tg() {}

    function ug() {}

    function vg() {}

    function wg() {}

    function xg() {}

    function yg() {}

    function Pb() {
        xa.Oc.EY()
    }

    function zg() {
        xa.Oc.JY()
    }

    function m(a, b, c, d) {
        (this.PH = !0 === d) ? (this.canvas = a.canvas, this.Aw = a.Aw) : "string" === typeof a ? (this.canvas = document.getElementById(a), this.Aw = this.canvas.parentElement) : a instanceof HTMLElement && (this.canvas = document.createElement("canvas"), this.Aw = a);
        a = this.rz = a.rz || document.createElement("div");
        a.appendChild(this.canvas);
        this.Aw.appendChild(a);
        a.style.overflow = "hidden";
        a.style.position = "relative";
        a.style.transform = "translateZ(0)";
        a.style.margin = "0";
        a.style.padding = "0";
        a.style.display = "block";
        a.style.boxSizing = "content-box";
        a.className = "MMFDiv";
        this.YG = this.ZG = this.Pz = null;
        this.vp = 0;
        this.appName = this.Qz = null;
        this.Kp = 0;
        this.fA = this.uH = null;
        this.us = 0;
        this.PK = this.Ob = this.Le = this.Qc = this.qa = this.ld = this.eA = null;
        this.Sb = this.QK = 0;
        this.Or = this.Pr = this.wJ = this.ht = this.fs = null;
        this.vg = this.yc = this.vC = 0;
        this.kb = this.file = this.frame = null;
        this.BB = this.CB = this.Tn = 0;
        this.zk = this.U = null;
        this.GA = !1;
        this.Vz = this.Nh = this.aH = this.bH = this.cH = this.fb = this.Ta = this.Oh =
            this.rn = this.ni = this.li = 0;
        this.Mr = this.DB = this.vJ = null;
        this.Zh = this.Yh = this.BV = this.AV = this.Nr = 0;
        this.wd = null;
        this.dG = 0;
        this.cursor = "auto";
        this.Ow = !1;
        this.mn = this.qv = null;
        this.md = !1;
        this.Sa = this.alpha = this.xf = this.wf = this.lG = this.zm = this.ym = 0;
        this.file = b;
        this.gm = "";
        this.path = c;
        b = c.lastIndexOf("/");
        0 <= b && (this.gm = c.substring(0, b + 1));
        this.Ii = 0;
        this.U = null;
        this.bk = this.ck = this.kc = 0;
        this.Cn = !1;
        this.oc = [];
        this.Hs = -1;
        this.Iw = this.Xn = this.BJ = this.DJ = this.CJ = this.AJ = this.zJ = 0;
        this.ji = this.xe = this.DC = this.transition =
            null;
        this.az = !1;
        this.sb = this.rb = this.Tc = null;
        this.os = m.sf;
        this.hb = null;
        this.RS = this.Oy = this.Ny = this.US = this.TS = this.SS = this.gr = this.ek = 0;
        this.hd = this.jd = 1;
        this.hasFocus = !0;
        this.Hv = this.bz = !1;
        this.gA = this.Jw = null;
        this.Jv = -1;
        this.cs = null;
        this.bs = 1E9;
        this.Iv = null;
        0 <= window.location.href.indexOf("192.") && (b = window.location.href.indexOf("21700/"), 0 <= b && (this.Iv = window.location.href.substring(0, b + 6), this.Jv = -1, this.bs = 25));
        this.Ci = !1;
        this.DV = 3;
        this.ur = new Q;
        this.iv = new Q;
        this.wc = [];
        this.Gf = 0;
        this.Ng = null;
        this.RA = "Please touch the screen to start";
        this.fullScreen = !1;
        this.iL = "***version***";
        this.IC = this.yt = 0
    }

    function rb(a, b, c) {
        this.changedTouches = Array(1);
        this.changedTouches[0] = {
            pageX: a,
            pageY: b,
            target: c,
            identifier: m.MD
        }
    }

    function O(a) {
        this.app = a;
        this.w = null;
        this.RH = this.Gc = this.ae = 0;
        this.Rv = !1;
        this.vc = 0;
        this.Sv = null;
        this.ds = this.es = 0;
        this.$G = null;
        this.za = 0;
        this.Gr = this.ee = this.sa = null;
        this.dI = this.iw = this.wA = this.vA = this.Ll = this.Kl = this.Xi = 0;
        this.oe = this.ne = this.ns = this.Kz = this.Ir = null;
        this.zp = this.hb =
            this.Gf = 0
    }

    function ha(a) {
        this.app = a;
        this.Ga = null;
        this.Xy = !1;
        this.fF = !0;
        this.jr = this.Jq = null;
        this.SA = 0;
        this.hn = null;
        this.wz = !1;
        this.Ga = Array(ha.Cc);
        this.Jq = Array(ha.Cc);
        this.jr = Array(ha.Cc);
        this.Xy = this.fF = !0;
        var b;
        for (b = 0; b < ha.Cc; b++) this.Ga[b] = null, this.Jq[b] = 100, this.jr[b] = !1;
        this.SA = 100;
        b = new Audio;
        var c = Array(4);
        c[0] = b.canPlayType("audio/ogg");
        c[1] = b.canPlayType("audio/x-m4a");
        c[2] = b.canPlayType("audio/mpeg");
        c[3] = b.canPlayType("audio/wav");
        for (b = this.TA = this.KB = 0; 4 > b; b++) "probably" == c[b] && (this.KB |=
            1 << b), "maybe" == c[b] && (this.TA |= 1 << b);
        for (; null != a.kb;) a = a.kb;
        this.context = a.PK;
        this.lp = a.QK;
        null == this.context && ("undefined" !== typeof AudioContext ? (this.context = new AudioContext, this.lp = 1) : "undefined" !== typeof webkitAudioContext && (this.context = new webkitAudioContext, this.lp = 0), a.PK = this.context, a.QK = this.lp)
    }

    function Ag(a) {
        this.app = a
    }

    function Bg(a) {
        this.app = a;
        this.rA = !1;
        this.I = null;
        this.context = this.app.context;
        this.ph = this.app.CJ;
        this.color = this.app.BJ;
        this.Rk = this.app.zJ;
        0 > this.Rk && (this.Rk = this.app.Ta /
            2);
        this.Sk = this.app.AJ;
        0 > this.Sk && (this.Sk = this.app.fb / 2);
        this.size = this.app.DJ;
        this.uB = 0;
        this.mp = 25;
        this.Gg = 0;
        this.Pi = new Image;
        this.Pi.crossOrigin = 'anonymous';
        var b = this;
        this.Pi.onload = function() {
            b.rA = !0
        };
        this.Pi.src = this.app.gm + "Preloader.png"
    }

    function Cg(a) {
        this.app = a;
        this.context = this.app.context;
        this.width = 100;
        this.height = 12;
        this.position = 0;
        this.xU = 10526880;
        this.borderColor = 8421504;
        this.yU = 0;
        this.rect = new ja;
        this.rect.left = this.app.Ta / 2 - this.width / 2;
        this.rect.top = this.app.fb / 2 - this.height / 2;
        this.rect.right = this.rect.left +
            this.width;
        this.rect.bottom = this.rect.top + this.height;
        this.reset()
    }

    function Dg(a) {
        this.app = a;
        this.rA = !1;
        this.Jd = new Ta;
        this.I = new m(this.app, this.app.file, this.app.path, !0);
        this.I.zK(this.app, this.app.Iw, 0, this.Jd, this.app.Ta, this.app.fb);
        this.I.digest();
        this.I.GA = !1;
        this.I.Pk = !1;
        this.I.Sa &= ~m.Uk;
        this.I.uC();
        this.I.px(0, 0);
        this.I.rt();
        this.Jd.x = this.app.Ta / 2 - this.I.frame.ae / 2;
        this.Jd.y = this.app.fb / 2 - this.I.frame.Gc / 2;
        this.S_ = 0 != (this.app.Sa & m.EM);
        this.app.oc.push(this.I);
        this.jn = 0
    }

    function A(a) {
        this.app =
            a;
        this.UG = this.TG = this.Af = this.We = this.Pv = this.cd = null;
        this.Wc = Array(3);
        this.Xc = Array(3);
        this.V = this.hb = this.Th = this.Sh = 0;
        this.touches = Array(3);
        this.Zy = !1;
        this.MH = !0;
        this.Zg = this.Qi = this.QH = 0
    }

    function k(a) {
        this.h = a;
        this.u = null;
        this.mj = this.Pb = this.tq = this.kC = this.cc = this.Vd = this.Ud = this.jC = this.vh = 0;
        this.g = this.ca = null;
        this.Kf = this.Zs = this.uq = this.jm = this.lf = this.Kc = this.iC = this.Nk = this.$s = this.no = this.fa = this.da = this.kf = this.jf = 0;
        this.ax = this.cC = this.bx = null;
        this.Xs = this.dC = this.nq = this.jq = this.pq =
            this.lq = this.mq = this.iq = this.oq = this.kq = this.ce = this.qd = this.jo = this.io = this.ho = this.fo = this.XJ = this.ei = this.Mk = this.Lk = this.Vs = this.co = 0;
        this.Jf = this.lj = null;
        this.K = this.sq = this.hx = this.gx = this.Jc = this.eC = this.ZJ = 0;
        this.fx = this.rq = this.P = null;
        this.Ca = 0;
        this.ex = this.dg = null;
        this.qq = 0;
        this.mo = null;
        this.fd = 0;
        this.Nw = null;
        this.kr = !1;
        this.jx = 0;
        this.H = null;
        this.Bp = Array(2);
        this.Fe = !1;
        this.LG = 0;
        this.hC = 255;
        this.Pw = this.aZ = !1
    }

    function Eg() {
        this.eV = null;
        this.IF = this.FF = this.EF = this.HF = this.GF = this.av = 0
    }

    function Y() {
        this.tB =
            this.sB = this.ib = this.se = this.Aa = this.Bd = 0;
        this.ai = !1;
        this.Es = this.kJ = this.lJ = this.Rn = this.Up = this.ef = this.xw = this.Lb = this.Da = this.$l = this.gh = this.Zl = this.qB = this.pB = this.Sd = 0;
        this.dj = this.Vp = null;
        this.rB = 0;
        this.Yl = null;
        this.Tp = 0;
        this.hh = null
    }

    function mi() {
        this.re = this.name = null
    }

    function ni() {
        this.value = null;
        this.kx = this.lx = this.gd = this.Wb = 0
    }

    function oi() {
        this.text = null;
        this.Wb = 0
    }

    function pi() {
        this.Ra = this.values = null;
        this.V = 0
    }

    function na() {
        this.VY = 0;
        this.TY = null;
        this.UY = 0;
        this.l = this.f = null
    }

    function F() {
        this.ml =
            this.Qj = this.tf = null
    }

    function gb() {
        this.Eh = 0;
        this.ll = this.Fh = null
    }

    function Fg() {
        this.bp = this.XE = this.WE = this.Py = this.Qy = 0;
        this.Zm = null
    }

    function ab() {
        this.a = null;
        this.em = this.Qs = this.hj = 0;
        this.Ss = !1;
        this.ij = 0;
        this.cg = null;
        this.Sw = this.Rw = 0;
        this.Rs = null;
        this.aq = this.cm = this.ff = this.bg = this.LJ = this.Zn = this.Zp = this.Ps = this.KJ = this.$p = this.dm = this.QB = 0;
        this.MJ = -1
    }

    function Gg(a, b) {
        this.qa = a;
        this.app = a.app;
        this.handle = b
    }

    function Hg(a) {
        this.app = a;
        this.images = this.file = null;
        this.eh = this.jk = this.xc = 0;
        this.tk =
            this.wc = this.uk = this.$m = this.Bn = this.Ek = this.Db = this.gb = this.Qn = null
    }

    function oa() {
        this.app = null;
        this.Db = this.mi = this.ki = this.Za = this.eb = this.height = this.width = this.handle = 0;
        this.gk = this.Kn = this.ah = this.hc = null;
        this.as = this.oe = this.ne = this.$b = 0
    }

    function Ig(a) {
        this.app = a;
        this.vw = this.fonts = this.file = null;
        this.ik = 0;
        this.gb = null;
        this.Wi = this.Ff = 0;
        this.Db = null;
        this.xs = new Na;
        this.xs.dv()
    }

    function Na() {
        this.Bf = this.Cf = this.Gb = this.handle = this.Db = 0;
        this.font = this.Ye = null;
        this.Jl = !1
    }

    function Jg(a) {
        this.app =
            a;
        this.sm = null;
        this.vs = this.jk = this.xc = 0;
        this.file = this.Db = this.gb = this.ww = null
    }

    function sb(a) {
        this.Oc = a;
        this.context = a.Ob.context;
        this.lp = a.Ob.lp;
        this.qX = a.Ob.qX;
        this.type = 0;
        this.file = a.file;
        this.handle = -1;
        this.Nb = this.source = null;
        this.Db = 0;
        this.mr = !1;
        this.kk = 0;
        this.name = null;
        this.ql = this.pl = !1;
        this.frequency = 0;
        this.gain = this.response = null;
        this.volume = 100
    }

    function Qb(a, b) {
        this.name = a;
        this.xJ = [];
        this.position = 0;
        this.gs = !1;
        this.jX = b
    }

    function S(a) {
        this.Oc = a;
        this.w = null;
        this.$I = this.Xi = 0;
        this.Nn = Array(v.ge +
            v.mE);
        this.ts = this.Zi = 0;
        this.Dn = this.xg = this.Pc = this.Zc = this.be = this.jc = this.Uc = this.gj = null;
        this.eg = Array(v.ge + 1);
        this.aK = !1;
        this.Sg = null;
        this.Ks = this.Ms = this.Js = this.Ls = 0;
        this.Ws = !1;
        this.Td = null;
        this.ix = 0;
        this.im = Array(4);
        this.gq = this.th = this.sh = !1;
        this.cx = this.Ig = this.bo = this.Na = 0;
        this.hq = this.uh = !1;
        this.jj = null;
        this.Kk = this.hf = this.kj = 0;
        this.di = this.Jg = null;
        this.pc = 0;
        this.Ed = !1;
        this.$w = this.gC = this.bc = this.$J = 0;
        this.fC = null;
        this.lr = !1;
        this.hm = null;
        this.WJ = 0;
        this.eo = null;
        this.Uu = !1;
        this.kI = 0;
        this.pz = !1;
        this.Zu = null;
        this.bn = [];
        this.rp = L.aP;
        this.jh = this.ih = null;
        this.fp = !1
    }

    function L() {
        this.nn = this.Hi = this.$ = this.zf = this.lc = 0;
        this.$a = null;
        this.bW = 0
    }

    function ba() {}

    function qi() {
        this.FG = this.id = 0
    }

    function ri() {
        this.Lw = this.Kw = 0
    }

    function si(a, b, c, d, e) {
        this.f_ = a;
        this.code = b;
        this.pZ = c;
        this.oZ = d;
        this.Ad = e
    }

    function Kg() {
        this.LB = this.Mw = this.am = this.Xp = this.bm = this.ej = 0;
        this.MB = this.bi = !1;
        this.M = null
    }

    function ti() {
        this.next = null;
        this.index = this.Ad = 0;
        this.name = null;
        this.af = 0;
        this.stop = !1;
        this.re = []
    }

    function hb() {
        this.next =
            null;
        this.type = 0;
        this.name = null;
        this.index = this.Zv = this.st = this.X_ = this.kc = 0;
        this.Vy = !1
    }

    function Oa() {
        this.Vv = this.VH = this.zA = this.yA = this.BA = this.AA = this.Vh = this.Ml = 0;
        this.xA = null;
        this.xA = Array(4);
        var a;
        for (a = 0; 4 > a; a++) this.xA[a] = null
    }

    function Lg() {
        this.gb = this.list = null;
        this.Uv = this.$h = 0
    }

    function da(a) {
        this.app = a;
        this.zw = null;
        this.Ee = this.De = this.Xw = this.Ww = this.y = this.x = 0;
        this.kl = this.xk = this.wk = null;
        this.Re = !1;
        this.vk = null;
        this.jF = this.iF = this.lF = this.kF = this.hF = this.xf = this.wf = this.rw = this.pw =
            this.ig = this.hg = this.Sa = this.eB = 0;
        this.yb = this.Ic = this.$c = null;
        this.angle = 0;
        this.scale = this.hd = this.jd = 1;
        this.eb = this.zt = 320;
        this.Za = this.Bt = 240
    }

    function ka(a, b, c, d, e, f) {
        this.app = a;
        this.AY = d;
        this.bf = this.type = 0;
        this.x = b;
        this.y = c;
        this.height = this.width = 0;
        this.Hf = null;
        this.ul = !1;
        this.Md = null;
        this.borderWidth = 0;
        this.borderColor = this.oz = this.dn = null;
        this.xf = this.wf = 0;
        this.f = this.body = null;
        if (d)
            if (this.Hf = this.app.ld.Cl(d.Vh), this.type = this.Hf.Fg, this.bf = this.Hf.pd.eJ, this.borderWidth = this.Hf.pd.uw, this.vH =
                this.Hf.pd.As, this.wf = this.Hf.mB, this.xf = this.Hf.nB, this.width = this.Hf.pd.bJ, this.height = this.Hf.pd.cJ, this.ul = 0 != this.Hf.pd.aJ, this.dn = this.Hf.pd.$i, this.oz = this.Hf.pd.Rp, this.borderColor = this.Hf.pd.tw, 1 == this.type) this.Md = this.app.qa.Ub(this.Hf.pd.lk), this.width = this.Md.width, this.height = this.Md.height;
            else {
                if (32 <= this.type) {
                    a = this.app.U;
                    b = null;
                    for (e = c = 0; e < a.Pb; e++) {
                        for (; null == a.H[c];) c++;
                        b = a.H[c];
                        c++;
                        if (b.CY == d) break
                    }
                    this.f = b
                }
            }
        else {
            this.type = v.oE;
            this.Md = e;
            this.width = this.Md.width;
            this.height =
                this.Md.height;
            this.x -= this.Md.eb;
            this.y -= this.Md.Za;
            switch (f) {
                case 0:
                    this.bf = ia.sE;
                    break;
                case 1:
                    this.bf = ia.So;
                    break;
                case 2:
                    this.bf = ia.qf;
                    break;
                case 3:
                    this.bf = ia.su
            }
            this.ul = !1
        }
    }

    function v() {
        this.nB = this.mB = this.rk = this.Fg = this.Cs = 0;
        this.pd = this.oB = null;
        this.jJ = this.iJ = 0
    }

    function Mg() {
        this.cj = this.ic = this.Xl = 0;
        this.bj = this.Ds = this.sk = null;
        this.hv = 0
    }

    function ia() {}

    function Ng() {
        this.lk = 0
    }

    function bb() {
        this.lk = this.As = this.Rp = this.$i = this.Bs = this.Tl = this.mk = this.tw = this.uw = 0
    }

    function E() {
        this.aj = 0;
        this.jB =
            null;
        this.zd = this.Ul = 0;
        this.Rd = this.ac = this.Sl = this.Vl = this.nk = this.cf = null;
        this.fJ = this.gJ = this.dJ = 0;
        this.zs = this.Sp = null
    }

    function Og() {
        this.df = this.hJ = this.qk = this.pk = 0;
        this.kB = null
    }

    function Pg() {
        this.YF = this.ZF = this.XF = 0
    }

    function ya() {
        this.Jp = this.As = this.Rp = this.$i = this.Bs = this.Tl = this.mk = this.tw = this.uw = this.Wl = this.Pn = this.fh = this.lB = this.qk = this.pk = 0;
        this.frames = null
    }

    function Qg() {
        this.qk = this.pk = this.df = 0;
        this.text = null
    }

    function Ba() {
        this.EC = this.xt = this.Hq = 0;
        this.uj = null
    }

    function Rg() {
        this.Sn =
            this.AB = this.zB = 0;
        this.Hc = null
    }

    function N() {
        this.Ba = this.ea = 0;
        this.b = null;
        this.Fb = this.Pa = this.xb = this.Oi = this.Yb = this.ak = 0;
        this.La = null;
        this.hA = 0;
        this.Ev = this.AH = null;
        this.Yr = this.An = 0;
        this.ka = this.yp = null;
        this.WX = this.Yg = this.Ka = this.kA = this.Z = this.Oa = this.T = this.S = this.Fa = this.Ea = this.o = this.Ni = this.s = this.Mi = 0;
        this.Xr = !1;
        this.A = this.R = this.ga = this.D = this.c = null
    }

    function Sg() {
        this.tC = !1;
        this.Pi = null;
        this.Ja = !1;
        this.jb = null;
        this.Re = !0;
        this.jd = this.hd = 1;
        this.y = this.x = this.angle = 0;
        this.yo = null
    }

    function Z() {
        this.df =
            this.V = 0;
        this.I = null;
        this.yB = this.xB = 0;
        this.mJ = this.level = -1;
        this.Dp = null;
        this.Re = !0
    }

    function Tg() {
        this.If = this.zc = this.Ik = 0;
        this.Ma = -1;
        this.Ab = this.zb = 1;
        this.Vb = this.Fk = this.na = this.Xa = this.Ua = 0;
        this.Cb = this.Y = !1;
        this.Hk = this.Gk = 0;
        this.Uw = -1;
        this.WB = this.UB = this.VB = this.TB = this.SB = this.Tw = 0
    }

    function qa() {
        this.ve = this.ue = this.gd = this.Wb = this.Ya = this.type = 0;
        this.gF = this.Ja = !1;
        this.Te = this.$h = this.oj = this.bt = this.Fd = 0;
        this.ol = !1;
        this.jb = this.Qa = null;
        this.Xe = 0;
        this.font = null;
        this.vf = this.Bb = !1
    }

    function Ug() {
        this.type =
            this.Fd = this.Gd = this.ve = this.ue = this.Ya = this.ro = 0;
        this.Ja = !0;
        this.$h = 0;
        this.Qa = null;
        this.Te = 0;
        this.jb = null;
        this.Xe = 0;
        this.alpha = 1;
        this.en = "source-over";
        this.vf = !1
    }

    function Vg() {
        this.type = this.Fd = this.Gd = this.ve = this.ue = this.Ya = this.ro = 0;
        this.Ja = !0;
        this.$h = 0;
        this.Qa = null;
        this.Te = 0;
        this.jb = null;
        this.Xe = 0;
        this.alpha = 1;
        this.en = "source-over";
        this.vf = !1
    }

    function Wg() {
        this.Lg = null;
        this.ct = this.Gd = this.Wb = this.gd = 0;
        this.font = null;
        this.Ja = !0;
        this.cK = this.V = 0;
        this.Qa = this.jb = null;
        this.Bb = !1;
        this.rect = new ja;
        this.ve = this.ue = this.deltaY = 0;
        this.pb = null;
        this.vf = !1
    }

    function Xg() {
        this.ve = this.ue = 0;
        this.gf = null;
        this.fn = 0;
        this.Me = []
    }

    function Yg(a, b) {
        this.ext = b.h.qv.Xv(a);
        this.gB = !1;
        this.iB = this.ys = this.JB = 0;
        this.Bb = !1;
        this.Ja = !0;
        this.Qa = this.jb = null
    }

    function Pa() {}

    function Ia() {
        this.Dp = this.dir = this.y = this.x = 0;
        this.Yy = !1
    }

    function Zg(a) {
        a.file.v();
        this.Dx = a.file.v()
    }

    function ui(a) {
        this.kc = a.file.C();
        this.Zv = a.file.C();
        this.tg = a.file.v()
    }

    function vi(a) {
        this.color = a.file.sc()
    }

    function wi(a) {
        this.jn = a.file.C();
        this.kp = a.file.C()
    }

    function Ca(a) {
        this.tg = a.file.v();
        for (var b = a.file.ma, c = 0, d;;) {
            c++;
            d = a.file.C();
            if (0 == d) break;
            d = a.file.v();
            6 < d && a.file.wa(d - 6)
        }
        a.file.seek(b);
        this.ta = Array(c);
        for (b = 0; b < c; b++) this.ta[b] = la.create(a.file)
    }

    function xi(a) {
        var b = a.file.v();
        a.file.wa(4);
        this.data = 0;
        6 < b && (this.data = a.file.ma, a.file.wa(b - 6))
    }

    function ma(a) {
        this.Sc = a.file.v();
        this.NX = a.file.v()
    }

    function yi(a) {
        a.file.wa(4);
        this.ma = 0;
        this.id = a.file.v()
    }

    function Ua(a) {
        this.value = a.file.C();
        this.Dx = 0
    }

    function $g(a) {
        this.key =
            a.file.v()
    }

    function zi(a) {
        this.la = a.file.ra();
        this.Ad = a.file.ra();
        this.type = a.file.ra()
    }

    function Ai(a) {
        a.file.wa(4);
        this.GG = 0;
        for (this.ic = [];;) {
            var b = a.file.ra(),
                c = a.file.ra();
            if (-1 == b) break;
            this.ic.push(b);
            this.ic.push(c)
        }
    }

    function Aa() {}

    function ah(a) {
        this.Fs = a.file.ra();
        this.Wn = a.file.ra();
        this.Gw = a.file.ra();
        this.Hw = a.file.ra();
        this.Ew = a.file.ra();
        this.FB = a.file.ra();
        this.Dw = a.file.C();
        this.Fw = a.file.ra();
        this.Gs = a.file.ra();
        this.GB = a.file.ra()
    }

    function Rb(a) {
        this.Fs = a.file.ra();
        this.Wn = a.file.ra();
        this.Gw = a.file.ra();
        this.Hw = a.file.ra();
        this.Ew = a.file.ra();
        this.FB = a.file.ra();
        this.Dw = a.file.C();
        this.Fw = a.file.ra();
        this.Gs = a.file.ra();
        this.GB = a.file.ra();
        this.nr = a.file.v();
        this.hz = a.file.v()
    }

    function bh(a) {
        this.Fs = a.file.ra();
        this.Wn = a.file.ra();
        this.Gw = a.file.ra();
        this.Hw = a.file.ra();
        this.Ew = a.file.ra();
        this.FB = a.file.ra();
        this.Dw = a.file.C();
        this.Fw = a.file.ra();
        this.Gs = a.file.ra();
        this.GB = a.file.ra();
        this.nr = a.file.ra();
        this.hz = a.file.ra();
        a.file.wa(4);
        this.J_ = a.file.v()
    }

    function Va(a) {
        this.rm =
            a.file.v();
        this.tx = a.file.v()
    }

    function sa(a) {
        this.value = a.file.v()
    }

    function tb(a) {
        this.Rb = a.file.cb()
    }

    function Bi(a) {
        this.kc = a.file.C();
        this.Zv = a.file.C()
    }

    function ch(a) {
        this.Gx = a.file.ra();
        this.Jx = a.file.ra();
        this.JC = a.file.ra();
        this.KC = a.file.ra()
    }

    function Ci(a, b, c) {
        this.index = a.file.C();
        this.rJ = a.file.C();
        this.global = b;
        c ? this.HC = a.file.NJ() : (this.HC = a.file.C(), a.file.wa(4))
    }

    function dh(a) {
        this.V = a.file.C();
        this.vv = a.file.C();
        this.VG = a.file.C();
        this.values = [];
        for (var b = 1, c = 2, d = 4, e = 0; 4 > e && 0 != (this.V &
                b); e++) {
            var f = new Ci(a, 0 != (this.V & c), 0 != (this.V & d)),
                b = b << 4,
                c = c << 4,
                d = d << 4;
            this.values.push(f)
        }
    }

    function ub() {
        this.cn = []
    }

    function Wa(a) {
        this.Ct = this.At = 1;
        this.vB = -1;
        this.wB = this.tC = !1;
        this.ln = this.kn = 0;
        if (!(this.wb = a.getContext("2d"))) throw Error("Failed to init standard renderer");
    }

    function Ea() {
        this.zr = "";
        this.gG = this.vt = this.wt = this.dL = this.eL = 0
    }

    function eh() {}

    function w() {
        this.B = this.ks = this.hs = this.dw = 0;
        this.bb = this.eI = !1;
        this.Wj = this.nG = this.F = this.xa = null
    }

    function fh(a) {
        this.app = a
    }

    function ib() {}

    function gh() {
        this.fI = this.j = this.m = this.Tb = 0
    }

    function hh() {
        this.j = this.m = this.Tb = 0
    }

    function ih() {
        this.rc = this.xd = this.ez = this.Hh = 0;
        this.WY = null
    }

    function jh() {
        this.j = this.m = this.ov = this.Kb = 0
    }

    function kh() {
        this.rc = this.xd = this.Ol = 0
    }

    function lh() {}

    function mh() {
        this.j = this.m = this.Br = this.Tb = this.Kb = 0
    }

    function nh() {
        this.QA;
        this.Hn = this.Jn = this.Vi = this.Dg = this.X = 0;
        this.Xf = null
    }

    function oh() {
        this.j = this.m = this.Tb = 0
    }

    function ph() {
        this.PA = this.j = this.m = this.Tb = 0
    }

    function qh() {
        this.Ol;
        this.xd;
        this.rc
    }

    function rh() {
        this.j =
            this.m = this.AG = this.Kb = this.Tb = 0
    }

    function sh() {
        this.j = this.m = this.Tb = 0
    }

    function th() {
        this.ed = this.j = this.m = this.Tb = 0
    }

    function uh() {
        this.Gn = this.Fn = this.j = this.m = this.Tb = 0
    }

    function vh() {
        this.En = this.j = this.m = this.zG = this.Ar = this.Kb = 0
    }

    function wh() {
        this.aw = this.j = this.m = this.Ar = this.Kb = 0
    }

    function xh() {
        this.$v = this.gw = this.hw = this.ew = this.Je = this.IA = this.Ia = this.Ha = this.Hn = this.Jn = this.Vi = this.Dg = this.X = this.lL = this.Lx = this.LC = 0
    }

    function yh() {
        this.Wh = this.In = this.j = this.m = this.Kb = this.Tb = 0
    }

    function zh() {}

    function Ah() {
        this.j = this.m = this.Kb = 0
    }

    function Bh(a, b) {
        var c = new U;
        xa.Oc = new m(a, c, b);
        c.getFile(b, Ch)
    }

    function Ch() {
        xa.Oc.load()
    }

    function vb() {
        xa.Oc.rt()
    }

    function Ta() {
        this.y = this.x = 0;
        this.visible = !0;
        this.children = [];
        this.Ci = !1
    }

    function ta() {}

    function R() {
        this.ia = null;
        this.lineWidth = this.Za = this.eb = this.width = this.height = this.lineWidth = 0
    }

    function Di() {
        this.ia = null;
        this.angle = 0;
        this.jd = this.hd = 1;
        this.zC = 0
    }

    function D() {
        this.a = null;
        this.aa = this.nb = this.qb = this.mx = this.qo = this.xq = this.po = 0;
        this.pj = null
    }

    function Dh() {
        this.Lp = 0;
        this.Ra = null
    }

    function Eh() {
        this.Mp = 0;
        this.values = null;
        this.V = 0
    }

    function cb() {
        this.nc = 0;
        this.we = this.ob = null
    }

    function jb(a) {
        this.app = a;
        this.qn = null;
        this.sw = 0
    }

    function Da() {
        this.handle = 0
    }

    function va() {
        this.l = this.f = null
    }

    function Fh() {}

    function Gh() {}

    function Hh() {}

    function db() {
        this.element = null;
        this.MF = !1
    }

    function aa() {
        this.qs = 100;
        this.ow = this.YI = this.ZI = this.Mn = 0
    }

    function Ih() {
        this.On = 0;
        this.pe = null
    }

    function Jh() {
        this.nI = this.oI = this.lI = this.mI = this.ms = 0
    }

    function Kh() {
        this.uI =
            this.tI = this.sI = this.vI = 0
    }

    function Lh() {
        this.zI = this.xI = this.yI = this.wI = 0
    }

    function Mh() {
        this.XI = this.VI = this.dB = this.SI = this.TI = this.Ip = 0;
        this.Qb = null
    }

    function Nh() {
        this.YA = this.qI = this.ZA = this.UA = this.XA = this.WA = this.VA = this.rI = 0;
        this.Zf = null
    }

    function Oh() {
        this.JI = this.II = this.KI = this.HI = this.GI = this.LI = 0
    }

    function Ph() {
        this.NI = this.MI = this.OI = this.cB = this.bB = this.QI = 0
    }

    function Qh() {}

    function Rh() {
        this.Xh = null;
        this.data = 0;
        this.Nv = !1
    }

    function T() {
        this.a = null;
        this.lm = this.Lf = this.nj = this.Lc = this.Ke =
            this.vq = this.at = 0
    }

    function Fa() {
        this.my = this.cu = this.Ko = this.bE = this.Jo = this.du = this.bu = 0;
        this.bl = !1
    }

    function Sh() {
        this.eu = !1;
        this.Lo = null
    }

    function Th() {}

    function Uh() {
        this.oy = this.ui = this.py = this.Gj = 0
    }

    function Vh() {
        this.gu = this.hu = this.ty = this.sy = this.ry = this.qy = 0
    }

    function Wh() {
        this.Sf = this.Um = this.Tm = this.Mj = this.Lj = this.mu = this.Xq = this.Yq = this.Id = 0;
        this.ze = !1;
        this.tb = null;
        this.Kj = this.ou = this.nu = this.Jj = 0;
        this.Po = null;
        this.lu = !1
    }

    function ca() {
        this.No = this.fE = this.cl = this.Ah = this.zh = this.Oe = this.eE =
            this.ku = this.pf = this.ec = 0;
        this.Rm = null;
        this.vy = this.uy = 0;
        this.Qm = !1
    }

    function wb() {
        this.gE = this.wy = this.hE = this.xy = this.Sm = this.Oo = this.yy = this.Pe = this.Ij = 0
    }

    function xb() {}

    function Xh(a) {
        this.yd = a;
        this.Tj = 0
    }

    function Sb() {
        this.l = this.f = null
    }

    function Qa() {
        this.oo = 0;
        this.ja = null;
        this.lC = 0;
        this.pa = !1;
        this.mm = 0;
        this.km = !1;
        this.wq = 0
    }

    function eb() {
        this.Nd = null;
        this.EH = 0;
        this.Ap = this.Cg = this.vd = null;
        this.Uf = 0
    }

    function q() {
        this.fi = this.gi = 0;
        this.eK = this.mC = !1;
        this.dt = 0;
        this.fg = null;
        this.wl = 0;
        this.gK = !1;
        this.TF =
            0;
        this.fK = !1;
        this.SF = 0;
        this.dK = !1;
        this.et = this.ft = this.Uh = this.hK = this.iK = this.lK = this.RF = 0;
        this.Yc = null;
        this.nC = !1;
        this.rK = this.qK = this.pK = this.oK = this.nK = this.mK = this.kK = this.jK = this.Fc = this.Jb = this.qp = 0;
        this.nJ = this.Me = this.pb = this.hk = this.wC = this.mA = null
    }

    function wa() {
        this.list = {
            nv: -1,
            wK: -1,
            yw: !0,
            background: null,
            je: null,
            V: 0
        };
        this.dd = !1;
        this.UH = "";
        this.Tv = this.Ep = !1;
        this.$g = -1;
        this.Df = new Q
    }

    function M() {
        this.Ib;
        this.wr;
        this.uc;
        this.ug;
        this.xl;
        this.pp
    }

    function yb() {
        this.sj = this.Uz = this.Tz = this.Ez =
            this.yr = this.xr = this.Nf = this.Mf = this.mh = this.Ae = this.kh = 0;
        this.Ok = null;
        this.Cw = this.lh = this.fixed = this.Fr = this.um = 0
    }

    function ea() {
        this.ad = {
            nv: -1,
            Xu: !1,
            background: null,
            je: null,
            V: 0,
            hp: 0
        }
    }

    function W() {
        this.cursor = "auto"
    }

    function u() {
        this.FI = this.Fz = this.Op = 0;
        this.Eq = this.Gq = this.Al = this.zl = this.Nf = this.Mf = this.sb = this.rb = this.Tc = null;
        this.fB = this.BH = this.zE = this.Zb = this.uA = this.Qv = this.Cp = 0;
        this.oh = this.nh = -1;
        this.depth = this.height = this.width = this.V = this.EB = 0;
        this.Hd = null;
        this.sn = "";
        this.tn = 0
    }

    function Ra(a,
        b, c) {
        this.pg = a;
        this.qg = b;
        this.$k = c
    }

    function Yh(a, b) {
        this.Ay = a;
        this.To = Zh(b, $h);
        this.To = ai(this.To);
        this.To = bi(this.To, ci)
    }

    function Ei() {
        this.tn = 0;
        this.wp = -1;
        this.sn = "";
        this.ng = [];
        this.aS = function(a, b) {
            a = Zh(a, $h);
            a = ai(a);
            a = bi(a, ci);
            var c = Infinity,
                d = -1;
            if (b) {
                var e;
                for (e = 0; e < this.ng.length && this.ng[e].Ay != b; e++);
                e < this.ng.length && (c = di(a, this.ng[e]), d = e)
            } else
                for (e = 0; e < this.ng.length; e++) {
                    var f = di(a, this.ng[e]);
                    f < c && (c = f, d = e)
                }
            this.tn = Math.max((c - 2) / -2, 0);
            0 < this.tn ? (this.wp = d, this.sn = -1 == d ? "" : this.ng[d].Ay) :
                (this.wp = -1, this.sn = "")
        };
        this.iN = function(a, b) {
            var c;
            for (c = 0; c < this.ng.length && this.ng[c].Ay != a; c++);
            c < this.ng.length ? this.ng[c] = new Yh(a, b) : this.ng.push(new Yh(a, b))
        };
        this.hO = function() {
            this.ng.length = 0
        }
    }

    function di(a, b) {
        for (var c = Math.floor(Math.pow(a.length, .5)), d = Infinity, e = 0; e < a.length; e += c) var f = ei(a, b.To, e),
            g = ei(b.To, a, e),
            d = Math.min(d, Math.min(f, g));
        return d
    }

    function ei(a, b, c) {
        for (var d = Array(a.length), e = 0; e < a.length; e++) d[e] = !1;
        var e = 0,
            f = c;
        do {
            for (var g = -1, h = Infinity, p = 0; p < d.length; p++)
                if (!d[p]) {
                    var H =
                        Tb(a[f], b[p]);
                    H < h && (h = H, g = p)
                } d[g] = !0;
            e += (1 - (f - c + a.length) % a.length / a.length) * h;
            f = (f + 1) % a.length
        } while (f != c);
        return e
    }

    function Zh(a, b) {
        for (var c = 0, d = 1; d < a.length; d++) a[d].$k == a[d - 1].$k && (c += Tb(a[d - 1], a[d]));
        for (var c = c / (b - 1), e = 0, d = Array(a[0]), f = 1; f < a.length; f++)
            if (a[f].$k == a[f - 1].$k) {
                var g = Tb(a[f - 1], a[f]);
                e + g >= c ? (e = new Ra(a[f - 1].pg + (c - e) / g * (a[f].pg - a[f - 1].pg), a[f - 1].qg + (c - e) / g * (a[f].qg - a[f - 1].qg), a[f].$k), d[d.length] = e, a.splice(f, 0, e), e = 0) : e += g
            } for (; d.length < b;) d[d.length] = new Ra(a[a.length - 1].pg,
            a[a.length - 1].qg, a[a.length - 1].$k);
        return d
    }

    function ai(a) {
        for (var b = Infinity, c = -Infinity, d = Infinity, e = -Infinity, f = 0; f < a.length; f++) b = Math.min(b, a[f].pg), d = Math.min(d, a[f].qg), c = Math.max(c, a[f].pg), e = Math.max(e, a[f].qg);
        c = Math.max(c - b, e - d);
        e = [];
        for (f = 0; f < a.length; f++) e[e.length] = new Ra((a[f].pg - b) / c, (a[f].qg - d) / c, a[f].$k);
        return e
    }

    function bi(a, b) {
        for (var c, d = c = 0, e = 0; e < a.length; e++) c += a[e].pg, d += a[e].qg;
        c /= a.length;
        d /= a.length;
        c = new Ra(c, d, 0);
        d = [];
        for (e = 0; e < a.length; e++) d[d.length] = new Ra(a[e].pg +
            b.pg - c.pg, a[e].qg + b.qg - c.qg, a[e].$k);
        return d
    }

    function Tb(a, b) {
        var c = b.pg - a.pg,
            d = b.qg - a.qg;
        return Math.sqrt(c * c + d * d)
    }

    function za() {
        this.Bg;
        this.Og
    }

    function Fi() {
        this.object = null;
        this.zF = this.Bq = this.qt = this.pt = 0
    }

    function K() {
        this.yE = 0;
        this.J = this.xh = null
    }

    function Gi() {
        this.LD = this.UD = this.hy = this.Ey = !1
    }

    function Hi() {
        this.Yo = this.er = this.Vt = this.Wt = this.St = this.$o = this.fr = this.il = this.ap = this.Rx = this.Qx = this.ar = this.$q = this.rg = this.Yd = 0;
        this.Au = this.Io = this.Uo = this.fl = !1
    }

    function V() {
        this.button = {
            nz: -1,
            background: null,
            je: null,
            V: 0
        }
    }

    function zb() {
        this.LA = this.cw = this.js = this.OA = this.NA = this.MA = this.KA = this.JA = 0;
        this.Qw = !1;
        this.ag = this.Dk = this.Yp = this.Os = this.Ns = this.Ck = this.Bk = 0
    }

    function Ja() {
        this.Pl = this.bw = this.Ui = this.Ti = this.En = this.Pd = this.me = this.ls = this.js = this.bI = this.aI = this.$H = this.cI = 0
    }
    var xa = this,
        l = {
            extend: function(a, b) {
                var c = Object.create(a.prototype || a);
                if (void 0 !== b && (b = b.prototype || b))
                    for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
                return c
            },
            Tt: function(a) {
                return a >> 16
            },
            vR: function(a) {
                return a &
                    65535
            },
            xR: function(a, b) {
                return b << 16 | a & 65535
            },
            T5: function(a) {
                return a >>> 16 & 255
            },
            M5: function(a) {
                return a >>> 8 & 255
            },
            H5: function(a) {
                return a & 255
            },
            R3: function(a, b, c) {
                return (a & 255) << 16 | (b & 255) << 8 | c & 255
            },
            Qk: function(a) {
                return (a & 255) << 16 | (a >>> 8 & 255) << 8 | a >>> 16 & 255
            },
            IU: function(a, b, c) {
                return Math.min(Math.max(a, b), c)
            },
            ke: function(a) {
                var b = (a >>> 16 & 255).toString(16),
                    c = (a >>> 8 & 255).toString(16);
                for (a = (a & 255).toString(16); 2 > b.length;) b = "0" + b;
                for (; 2 > c.length;) c = "0" + c;
                for (; 2 > a.length;) a = "0" + a;
                return "#" + b + c + a
            },
            ub: function(a) {
                return 0 >
                    a ? Math.ceil(a) : Math.floor(a)
            },
            wU: function(a) {
                return Math.round(a)
            },
            qA: function(a) {
                return Math.ceil(a) == a
            },
            ev: function(a, b, c, d, e) {
                ox = d / 2 * .5522848;
                oy = e / 2 * .5522848;
                xe = b + d;
                ye = c + e;
                xm = b + d / 2;
                ym = c + e / 2;
                a.beginPath();
                a.moveTo(b, ym);
                a.bezierCurveTo(b, ym - oy, xm - ox, c, xm, c);
                a.bezierCurveTo(xm + ox, c, xe, ym - oy, xe, ym);
                a.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
                a.bezierCurveTo(xm - ox, ye, b, ym + oy, b, ym);
                a.closePath()
            },
            q5: function(a, b) {
                a.beginPath();
                a.moveTo(b.left, b.top);
                a.lineTo(b.right, b.top);
                a.lineTo(b.right, b.bottom);
                a.lineTo(b.left,
                    b.bottom);
                a.lineTo(b.left, b.top);
                a.closePath();
                a.stroke()
            },
            p5: function(a, b, c, d, e) {
                a.beginPath();
                a.moveTo(b, c);
                a.lineTo(d, e);
                a.closePath();
                a.stroke()
            },
            Kr: function(a, b) {
                for (var c = a.toString(); 4 > c.length;) c = "0" + c;
                return c + ("." + b)
            },
            Hb: function(a, b) {
                if (a == b) return !0;
                a = a.toLowerCase();
                b = b.toLowerCase();
                return a == b
            },
            Un: function(a) {
                var b = a.lastIndexOf("\\");
                0 < b && (a = a.substring(b + 1));
                return a
            },
            yR: 40,
            QS: [0, 1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25, 27, 28, 29, 31, 32, 33, 35, 36, 37, 39, 40, 41, 43, 44, 45, 47, 48,
                49, 51, 52
            ],
            Y5: function(a) {
                return a < l.yR ? l.QS[a] : Math.round(96 * a / 72)
            },
            Im: 0,
            Jm: 0,
            Hm: 1,
            Xx: 2,
            It: 8,
            Wk: 4,
            oO: 32,
            Wx: 1024,
            pO: 2048,
            yG: function(a, b, c, d, e, f) {
                if (0 == b.length) return 0 != (c & 1024) && (d.right = d.left, d.bottom = d.top), 0;
                e.Jl || (a.font = e.Ph());
                var g = 0,
                    h = String.fromCharCode(10),
                    p = String.fromCharCode(13),
                    H = b.indexOf(h);
                if (0 <= H) {
                    var G = new ja;
                    G.OF(d);
                    var k, m = 0,
                        n = 0,
                        q;
                    do k = -1, m < b.length && (k = b.indexOf(p, m)), q = Math.max(H, k), k == H - 1 && H--, H = b.substring(m, H), k = l.tp(a, H, c, G, f, e), n = Math.max(n, G.right - G.left), g += k, G.top +=
                        k, G.bottom = d.bottom, G.right = d.right, m = q + 1, H = -1, m < b.length ? H = b.indexOf(h, m) : (k = l.tp(a, "", c, G, f, e), n = Math.max(n, G.right - G.left), g += k, G.top += k, G.bottom = d.bottom, G.right = d.right); while (0 <= H);
                    m < b.length && (H = b.substring(m), k = l.tp(a, H, c, G, f, e), n = Math.max(n, G.right - G.left), g += k);
                    0 != (c & l.Wx) && (d.right = d.left + n, d.bottom = G.bottom);
                    return g
                }
                return g = l.tp(a, b, c | l.pO, d, f, e)
            },
            Hx: null,
            tp: function(a, b, c, d, e, f) {
                0 == b.length && (b = " ");
                var g, h;
                g = f.yg();
                h = f.Jl ? f.measureText(" ") : a.measureText(" ").width;
                var p = d.right - d.left,
                    H = 0,
                    G = 0,
                    k, m, n, q = 0,
                    t = 0,
                    v;
                null == l.Hx && (l.Hx = Array(100));
                var D, z, B = !1,
                    C = !1,
                    A = d.top;
                m = g;
                0 != (m & 1) && m++;
                var u = A;
                do {
                    m = H;
                    n = v = 0;
                    t += g;
                    do {
                        l.Hx[v] = n;
                        v += 1;
                        k = G;
                        G = -1;
                        m < b.length && (G = b.indexOf(" ", m)); - 1 == G && (G = b.length);
                        if (G < m) {
                            n -= h;
                            break
                        }
                        z = b.substring(m, G);
                        D = f.Jl ? f.measureText(z) : a.measureText(z).width;
                        if (n + D > p) {
                            v--;
                            if (0 < v) {
                                n -= h;
                                G = k;
                                break
                            }
                            for (k = m; k < G; k++) {
                                D = f.Jl ? f.measureText(b.substring(k, k + 1)) : a.measureText(b.substring(k, k + 1)).width;
                                if (n + D >= p) {
                                    k--;
                                    if (0 < k) {
                                        q = Math.max(n, q);
                                        0 == (c & l.Wx) && (n = 0 != (c & l.Hm) ? d.left + (d.right -
                                            d.left) / 2 - n / 2 : 0 != (c & l.Xx) ? d.right - n : d.left, z = b.substring(m, k), e.push(new X(n, A, z)));
                                        G = k - 1;
                                        C = B = !0;
                                        break
                                    }
                                    G = k < b.length ? b.indexOf(" ", k) : -1;
                                    B = !0;
                                    0 <= G && (C = !0);
                                    break
                                }
                                n += D
                            }
                        }
                        if (B) break;
                        n += D;
                        if (n + h > p) break;
                        n += h;
                        m = G + 1
                    } while (1);
                    if (0 == C) {
                        if (B) break;
                        q = Math.max(n, q);
                        if (0 == (c & l.Wx))
                            for (n = 0 != (c & l.Hm) ? d.left + (d.right - d.left) / 2 - n / 2 : 0 != (c & l.Xx) ? d.right - n : d.left, m = H, H = 0; H < v; H++) {
                                G = -1;
                                m < b.length && (G = b.indexOf(" ", m)); - 1 == G && (G = b.length);
                                if (G < m) break;
                                z = b.substring(m, G);
                                e.push(new X(n + l.Hx[H], A, z));
                                m = G + 1
                            }
                    }
                    C = B = !1;
                    A += g;
                    H =
                        G + 1
                } while (H < b.length);
                d.right = d.left + q;
                d.bottom = u + t;
                return t
            },
            Xj: function(a, b, c, d, e, f) {
                var g;
                if (e.Jl)
                    for (f = 0; f < d.length; f++) g = d[f], e.fillText(a, g.text, b + g.x, c + g.y);
                else
                    for (a.font = e.Ph(), a.fillStyle = l.ke(f), a.textAlign = "left", a.textBaseline = "top", f = 0; f < d.length; f++) g = d[f], a.fillText(g.text, b + g.x, c + g.y)
            },
            Il: function(a, b) {
                var c = a.toString();
                if (0 != (b & qa.zD)) {
                    var d = b & qa.zD;
                    if (c.length > d) c = c.substring(c.length - d);
                    else
                        for (; c.length < d;) c = "0" + c
                }
                return c
            },
            zz: function(a, b) {
                var c;
                if (0 == (b & qa.cO)) c = a.toString();
                else {
                    var d = Math.floor(((b & qa.aO) >> qa.bO) + 1);
                    c = -1;
                    0 != (b & qa.eO) ? c = (b & qa.ZN) >> qa.$N : 0 != a && -1 < a && 1 > a && (c = d);
                    c = 0 > c ? a.toPrecision(d) : a.toFixed(c);
                    var e, f, g;
                    if (0 != (b & qa.dO))
                        for (f = e = 0; f < c.length; f++) g = c.charAt(f), "." != g && "+" != g && "-" != g && "e" != g && "E" != g && e++;
                    f = !1;
                    "-" == c.charAt(0) && (f = !0, c = c.substr(1));
                    for (; e < d;) c = "0" + c, e++;
                    f && (c = "-" + c)
                }
                return c
            },
            a7: function(a, b) {
                for (var c = a, d = b, e = d.indexOf("\\"); 0 <= e;) c.substring(0, e) == d.substring(0, e) && (d = d.substring(e + 1), c = c.substring(e + 1)), e = d.indexOf("\\", e + 1);
                return c
            }
        },
        gi = !1,
        Ab = !1,
        Ub = !1,
        Vb = window.XMLHttpRequest ? new XMLHttpRequest : null;
    if (Vb && Vb.overrideMimeType) try {
        Ab = "string" === typeof(new XMLHttpRequest).responseType, 0 <= navigator.userAgent.toLowerCase().indexOf("safari") && (Ab = !1)
    } catch (a) {} else {
        var gi = !0,
            Wb = document.createElement("script");
        Wb.type = "text/vbscript";
        Wb.innerHTML = 'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\r\n\t                Dim xhr\n\r\n\t                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\r\n\t                xhr.Open "GET", fileName, False\n\r\n\t                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\r\n\t                xhr.send\n\r\n\t                Dim byteArray()\n\r\n\t                if xhr.Status = 200 Then\n\r\n\t                    Dim byteString\n\r\n\t                    Dim i\n\r\n\t                    byteString=xhr.responseBody\n\r\n\t                    ReDim byteArray(LenB(byteString))\n\r\n\t                    For i = 1 To LenB(byteString)\n\r\n\t                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\r\n\t                    Next\n\r\n\t                End If\n\r\n\t                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\r\n\t            End Function';
        document.head.appendChild(Wb)
    }
    if (Ab) {
        var hi = new FileReader;
        try {
            hi.readAsBinaryString && (Ub = !0)
        } catch (a) {}
        hi = null
    }
    Vb = null;
    U.prototype = {
        Va: function() {
            return this.Be.charCodeAt(this.ma++) & 255
        },
        getFile: function(a, b, c) {
            this.gz = b;
            if (gi) try {
                var d = BinFileReaderImpl_IE_VBAjaxLoader(a).toArray(),
                    e, f = d.length;
                f > c && (f = c);
                for (e = 0; e < f; e++) this.Be += String.fromCharCode(d[e]);
                this.end = this.Be.length;
                this.gz()
            } catch (p) {} else {
                var g = new XMLHttpRequest;
                g.open("GET", a, !0);
                var h = this;
                Ab ? (g.responseType = "blob", g.onload = function() {
                    if (4 ==
                        g.readyState && 200 == g.status) {
                        var a = new FileReader;
                        a.onloadend = function() {
                            if (Ub) h.Be += a.result;
                            else {
                                var b = new Uint8Array(a.result),
                                    c;
                                for (c = 0; c < b.length; c++) h.Be += String.fromCharCode(b[c])
                            }
                            h.end = h.Be.length;
                            h.gz()
                        };
                        Ub ? a.readAsBinaryString(g.response) : a.readAsArrayBuffer(g.response)
                    }
                }) : (g.overrideMimeType("text/plain; charset=x-user-defined"), g.onload = function() {
                    4 == g.readyState && 200 == g.status && (h.Be += g.responseText, h.end = h.Be.length, h.gz())
                });
                g.send(null)
            }
        },
        r_: function(a) {
            this.Be = a;
            this.end = a.length;
            var b = this;
            this.Va = function() {
                return b.Be.charCodeAt(b.ma++) & 255
            }
        },
        Jh: function(a, b) {
            var c = new U;
            c.Be = this.Be;
            c.offset = a;
            c.ma = a;
            c.end = a + b;
            c.md = this.md;
            return c
        },
        zX: function() {
            return this.end - this.offset
        },
        rC: function(a) {
            this.md = a
        },
        lv: function() {
            var a = this.Va(),
                b = this.Va(),
                c = this.Va();
            255 == a && 254 == b ? (this.md = !0, this.ma--) : 239 == a && 187 == b && 191 == c ? this.md = !1 : (this.md = !1, this.ma -= 3)
        },
        wa: function(a) {
            this.ma += a
        },
        Rh: function() {
            return this.ma >= this.end
        },
        YB: function(a) {
            var b, c = "";
            for (b = 0; b < a; b++) c += String.fromCharCode(this.Va());
            return c
        },
        lb: function() {
            return this.Va()
        },
        v: function() {
            var a;
            a = this.Va();
            return 256 * this.Va() + a
        },
        ra: function() {
            var a;
            a = this.Va();
            a = 256 * this.Va() + a;
            return 32768 > a ? a : a - 65536
        },
        bq: function() {
            var a;
            a = this.Va();
            return 256 * this.Va() + a
        },
        C: function() {
            var a, b, c;
            a = this.Va();
            b = this.Va();
            c = this.Va();
            a = 16777216 * this.Va() + 65536 * c + 256 * b + a;
            return 2147483647 >= a ? a : a - 4294967296
        },
        sc: function() {
            var a, b, c;
            a = this.Va();
            b = this.Va();
            c = this.Va();
            this.Va();
            return 65536 * a + 256 * b + c
        },
        OJ: function() {
            var a, b, c;
            a = this.Va();
            b = this.Va();
            c = this.Va();
            a = 16777216 * this.Va() + 65536 * c + 256 * b + a;
            2147483648 < a && (a -= 4294967296);
            return a / 65536
        },
        NJ: function() {
            var a, b, c, d, e, f, g;
            a = this.Va();
            b = this.Va();
            c = this.Va();
            d = this.Va();
            e = this.Va();
            f = this.Va();
            g = this.Va();
            a = 72057594037927936 * this.Va() + 281474976710656 * g + 1099511627776 * f + 4294967296 * e + 16777216 * d + 65536 * c + 256 * b + a;
            0x7fffffffffffffff < a && (a -= 1.8446744073709552E19);
            return a / 4294967296
        },
        cb: function(a) {
            var b = "";
            if (this.md)
                if (1 > arguments.length) {
                    if (this.Rh()) return b;
                    c = this.ma;
                    for (b = this.bq(); b && !this.Rh();) b =
                        this.bq();
                    b = (this.ma - c - 2) / 2;
                    this.ma = c;
                    b = this.cb(b);
                    this.Va();
                    this.Va()
                } else {
                    b = "";
                    c = this.ma;
                    for (e = 0; e < a; e++) {
                        d = this.bq();
                        if (0 == d) break;
                        b += String.fromCharCode(d)
                    }
                    this.ma = c + 2 * a
                }
            else if (1 > arguments.length) {
                if (this.Rh()) return b;
                for (var c = this.ma, b = this.Va(); b && !this.Rh();) b = this.Va();
                b = this.ma - c - 1;
                this.ma = c;
                b = this.cb(b);
                this.Va()
            } else {
                for (var d, c = this.ma, e = 0; e < a; ++e) {
                    d = this.Va();
                    if (0 == d) break;
                    b += String.fromCharCode(d)
                }
                this.ma = c + a
            }
            return b
        },
        XB: function() {
            var a = this.ma,
                b, c = "",
                d, e;
            if (0 == this.md) {
                if (this.Rh()) return;
                for (b = this.Va(); 10 != b && 13 != b && !this.Rh();) b = this.Va();
                d = this.ma;
                this.ma = a;
                e = 1;
                10 != b && 13 != b && (e = 0);
                d > a + e && (c = this.cb(d - a - e));
                if (10 == b || 13 == b) this.Va(), a = this.lb(), 10 == b && 13 != a && this.ma--, 13 == b && 10 != a && this.ma--
            } else {
                if (this.Rh()) return;
                for (b = this.bq(); 10 != b && 13 != b && !this.Rh();) b = this.bq();
                d = this.ma;
                this.ma = a;
                e = 2;
                10 != b && 13 != b && (e = 0);
                d > a + e && (c = this.cb((d - a - e) / 2));
                if (10 == b || 13 == b) this.ma += 2, a = this.bq(), 10 == b && 13 != a && (this.ma -= 2), 13 == b && 10 != a && (this.ma -= 2)
            }
            return c
        },
        seek: function(a) {
            a >= this.end && (a = this.end);
            this.ma = a
        },
        L_: function(a) {
            var b = this.ma,
                b = b - a;
            0 > b && (b = 0);
            this.ma = b
        },
        LZ: function(a) {
            var b, c = a.length;
            for (b = 0; b < c; b++) a[b] = this.Va()
        },
        QJ: function(a) {
            var b = [],
                c;
            for (c = 0; c < a; c++) b[c] = this.Va();
            return b
        },
        cq: function() {
            var a = new fb;
            a.cq(this);
            return a
        },
        Vw: function() {
            var a = new fb;
            a.Vw(this);
            return a
        }
    };
    Q.prototype = {
        add: function(a) {
            this.Qe.push(a)
        },
        IH: function(a, b) {
            this.Qe.splice(a, 0, b)
        },
        get: function(a) {
            return a < this.Qe.length ? this.Qe[a] : null
        },
        put: function(a, b) {
            this.Qe[a] = b
        },
        set: function(a, b) {
            a < this.Qe.length &&
                (this.Qe[a] = b)
        },
        ao: function(a) {
            a < this.Qe.length && this.Qe.splice(a, 1)
        },
        indexOf: function(a) {
            return this.Qe.indexOf(a)
        },
        contains: function(a) {
            return 0 <= this.Qe.indexOf(a)
        },
        Ts: function(a) {
            a = this.Qe.indexOf(a);
            0 <= a && this.Qe.splice(a, 1)
        },
        size: function() {
            return this.Qe.length
        },
        clear: function() {
            this.Qe.length = 0
        },
        sort: function(a) {
            Array.prototype.sort.call(this.Qe, a)
        }
    };
    ja.prototype = {
        load: function(a) {
            this.left = a.C();
            this.top = a.C();
            this.right = a.C();
            this.bottom = a.C()
        },
        OF: function(a) {
            this.left = a.left;
            this.right =
                a.right;
            this.top = a.top;
            this.bottom = a.bottom
        },
        dY: function(a) {
            if (this.left >= a.left && this.left < a.right || this.right >= a.left && this.right < a.right || a.left >= this.left && a.left < this.right || a.right >= this.left && a.right < this.right)
                if (this.top >= a.top && this.top < a.bottom || this.bottom >= a.top && this.bottom < a.bottom || a.top >= this.top && a.top < this.bottom || a.bottom >= this.top && a.bottom < this.bottom) return !0;
            return !1
        }
    };
    fb.prototype = {
        Ph: function() {
            var a;
            a = this.Bf ? "italic " : "normal ";
            var b = 100 * Math.floor(this.Cf / 100),
                b = Math.max(b,
                    100),
                b = Math.min(b, 900);
            a = a + (b + " ") + (this.Gb + "px ");
            return a += this.Ye
        },
        yg: function() {
            return this.Gb + Math.ceil(this.Gb / 8)
        },
        ua: function() {
            this.Ye = "Arial";
            this.Gb = 13;
            this.Cf = 400;
            this.Bf = 0
        },
        cq: function(a) {
            this.Gb = a.C();
            0 > this.Gb && (this.Gb = -this.Gb);
            a.wa(12);
            this.Cf = a.C();
            this.Bf = a.lb();
            this.TH = a.lb();
            this.SH = a.lb();
            a.wa(5);
            this.Ye = a.cb(32)
        },
        Vw: function(a) {
            this.Gb = a.ra();
            0 > this.Gb && (this.Gb = -this.Gb);
            a.wa(6);
            this.Cf = a.v();
            this.Bf = a.lb();
            this.TH = a.lb();
            this.SH = a.lb();
            a.wa(5);
            var b = a.md;
            a.md = !1;
            this.Ye = a.cb(32);
            a.md = b
        }
    };
    ua.separator = "{@24}";
    ua.RD = 1;
    ua.XQ = 2;
    ua.prototype = {
        gt: function() {
            if (null != this.Ra && null != this.gn) {
                var a = "",
                    b;
                for (b = 0; b < this.Ra.size(); b++) a += this.Ra.get(b) + ua.separator;
                localStorage.setItem(this.gn, a)
            }
        },
        Wv: function(a) {
            var b = !0;
            null != this.gn && l.Hb(a, this.gn) && (b = !1);
            if (b)
                if (this.gt(), this.gn = a, this.Ra = new Q, a = localStorage.getItem(this.gn))
                    for (var b = 0, c = a.indexOf(ua.separator, 0); 0 <= c;) this.Ra.add(a.substring(b, c)), b = c + ua.separator.length, c = a.indexOf(ua.separator, b);
                else if (a = null, null == a &&
                (b = this.app.xv(this.gn), null != b && (a = b.open())), a)
                for (b = !1, a.lv(), "undefined" != typeof this.V && (this.V & ua.RD && (this.md = !1, b = !0), this.V & ua.XQ && (this.md = !0)); 0 == a.Rh();) {
                    c = a.XB();
                    b && (c = this.HV(c));
                    if ("<" == c.substring(0, 1)) {
                        this.Ra.clear();
                        break
                    }
                    if (null == c) break;
                    this.Ra.add(c)
                }
        },
        HV: function(a) {
            for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2),
                b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
            return b
        },
        tv: function(a) {
            var b, c;
            for (b = 0; b < this.Ra.size(); b++)
                if (c = this.Ra.get(b), "[" == c.charAt(0)) {
                    var d = c.lastIndexOf("]");
                    if (1 <= d && (c = c.substring(1, d), l.Hb(a, c))) return b
                } return -1
        },
        Mz: function(a, b) {
            for (var c, d; a < this.Ra.size(); a++) {
                c = this.Ra.get(a);
                if ("[" == c.charAt(0)) break;
                d = c.indexOf("=");
                if (0 <= d) {
                    for (var e = 0; e < d && 32 == c.charCodeAt(e);) e++;
                    for (; d > e && 32 == c.charCodeAt(d - 1);) d--;
                    if (d > e && (c = c.substring(0, d), l.Hb(c, b))) return a
                }
            }
            return -1
        },
        xn: function(a,
            b, c, d) {
            this.Wv(d);
            a = this.tv(a);
            return 0 <= a && (a = this.Mz(a + 1, b), 0 <= a) ? (b = this.Ra.get(a), b.substring(b.indexOf("=") + 1)) : c
        },
        Ao: function(a, b, c, d) {
            this.Wv(d);
            d = this.tv(a);
            if (0 > d) this.Ra.add("[" + a + "]"), this.Ra.add(b + "=" + c);
            else if (a = this.Mz(d + 1, b), 0 <= a) this.Ra.set(a, b + "=" + c);
            else {
                for (a = d + 1; a < this.Ra.size(); a++)
                    if (d = this.Ra.get(a), "[" == d.charAt(0)) {
                        d = b + "=" + c;
                        this.Ra.IH(a, d);
                        return
                    } this.Ra.add(b + "=" + c)
            }
        },
        jG: function(a, b, c) {
            this.Wv(c);
            a = this.tv(a);
            0 <= a && (b = this.Mz(a + 1, b), 0 <= b && this.Ra.ao(b), this.gt())
        },
        OV: function(a,
            b) {
            this.Wv(b);
            var c = this.tv(a);
            if (0 <= c) {
                for (this.Ra.ao(c); !(c >= this.Ra.size()) && "[" != this.Ra.get(c).charAt(0);) this.Ra.ao(c);
                this.gt()
            }
        }
    };
    pa.prototype = {
        measureText: function(a, b) {
            b = this.app.Wz(b);
            if (b.Jl) return b.measureText(a);
            this.uf.font = b.Ph();
            return this.uf.measureText(a).width
        },
        to: function(a, b, c, d, e) {
            if (a == this.zY && b == this.vY && c == this.yY && d == this.wY && e == this.uY) return this.xY;
            var f = this.uf;
            f.clearRect(0, 0, this.width, this.height);
            c || (c = new ja(0, 0, this.width, this.height));
            var g = [];
            d = this.app.Wz(d);
            var h = l.yG(f, a, b, c, d, g);
            if (0 != h) {
                var p = 0;
                0 != (b & l.It) ? p = this.height - h : 0 != (b & l.Wk) && (p = this.height / 2 - h / 2);
                l.Xj(f, 0, p, g, d, e, 0, 0)
            }
            this.zY = a;
            this.vY = b;
            this.yY = c;
            this.wY = d;
            this.uY = e;
            return this.xY = h
        },
        iI: function(a) {
            a ? (this.uf.fillStyle = l.ke(a), this.uf.fillRect(0, 0, this.width, this.height)) : this.uf.clearRect(0, 0, this.width, this.height)
        },
        kw: function(a, b, c, d, e, f, g) {
            var h = [];
            c || (c = new ja(0, 0, this.width, this.height));
            e = this.app.Wz(e);
            a = l.yG(this.uf, a, b, c, e, h);
            if (0 != a) switch (c = 0, 0 != (b & l.It) ? c = this.height - a : 0 !=
                (b & l.Wk) && (c = this.height / 2 - a / 2), f) {
                case 1:
                    l.Xj(this.uf, 1, c + 1, h, e, g, 0, 0);
                    l.Xj(this.uf, 0, c, h, e, d, 0, 0);
                    break;
                case 2:
                    l.Xj(this.uf, 1, c, h, e, g, 0, 0);
                    l.Xj(this.uf, 1, c + 2, h, e, g, 0, 0);
                    l.Xj(this.uf, 0, c + 1, h, e, g, 0, 0);
                    l.Xj(this.uf, 2, c + 1, h, e, g, 0, 0);
                    l.Xj(this.uf, 1, c + 1, h, e, d, 0, 0);
                    break;
                case 0:
                    l.Xj(this.uf, 0, c, h, e, d, 0, 0)
            }
        },
        resize: function(a, b) {
            if (a != this.width || b != this.height) this.width = a, this.height = b, this.canvas.width = a, this.canvas.height = b
        },
        fc: function(a, b, c, d, e) {
            a.fm(this.canvas, b, c, this.width, this.height, d, e)
        }
    };
    Za.CV = [{
        Rb: navigator.userAgent,
        de: "Chrome",
        od: "Chrome"
    }, {
        Rb: navigator.userAgent,
        de: "OmniWeb",
        Iq: "OmniWeb/",
        od: "OmniWeb"
    }, {
        Rb: navigator.vendor,
        de: "Apple",
        od: "Safari",
        Iq: "Version"
    }, {
        zZ: window.opera,
        od: "Opera",
        Iq: "Version"
    }, {
        Rb: navigator.vendor,
        de: "iCab",
        od: "iCab"
    }, {
        Rb: navigator.vendor,
        de: "KDE",
        od: "Konqueror"
    }, {
        Rb: navigator.userAgent,
        de: "Firefox",
        od: "Firefox"
    }, {
        Rb: navigator.vendor,
        de: "Camino",
        od: "Camino"
    }, {
        Rb: navigator.userAgent,
        de: "Netscape",
        od: "Netscape"
    }, {
        Rb: navigator.userAgent,
        de: "MSIE",
        od: "Explorer",
        Iq: "MSIE"
    }, {
        Rb: navigator.userAgent,
        de: "Gecko",
        od: "Mozilla",
        Iq: "rv"
    }, {
        Rb: navigator.userAgent,
        de: "Mozilla",
        od: "Netscape",
        Iq: "Mozilla"
    }];
    Za.EV = [{
        Rb: navigator.platform,
        de: "Win",
        od: "Windows"
    }, {
        Rb: navigator.platform,
        de: "Mac",
        od: "MacOS"
    }, {
        Rb: navigator.userAgent,
        de: "iPhone",
        od: "iOS"
    }, {
        Rb: navigator.userAgent,
        de: "iPod",
        od: "iOS"
    }, {
        Rb: navigator.userAgent,
        de: "iPad",
        od: "iOS"
    }, {
        Rb: navigator.userAgent,
        de: "Android",
        od: "Android"
    }, {
        Rb: navigator.platform,
        de: "Windows Phone",
        od: "Windows Phone"
    }, {
        Rb: navigator.platform,
        de: "Linux",
        od: "Linux"
    }];
    Za.prototype = {
        tK: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b].Rb,
                    d = a[b].zZ;
                this.jL = a[b].Iq || a[b].od;
                if (c) {
                    if (-1 != c.indexOf(a[b].de)) return a[b].od
                } else if (d) return a[b].od
            }
        },
        uK: function(a) {
            var b = a.indexOf(this.jL);
            if (-1 != b) return parseFloat(a.substring(b + this.jL.length + 1))
        }
    };
    l.B6 = function(a, b, c, d) {
        var e = document.createElement("canvas");
        e.width = b.width;
        e.height = b.height;
        var f = e.getContext("2d");
        0 == b.$b ? f.drawImage(b.hc, 0, 0) : f.drawImage(a.qa.wc[b.$b], b.ne, b.oe, b.width,
            b.height, 0, 0, b.width, b.height);
        var g = f.getImageData(0, 0, b.width, b.height),
            h = d >> 16 & 255,
            p = d >> 8 & 255;
        d &= 255;
        var H = c >> 16 & 255,
            G = c >> 8 & 255;
        c &= 255;
        var l, k, n;
        for (n = 0; n < b.height; n++)
            for (k = 0; k < b.width; k++) l = 4 * (n * b.width + k), g.data[l] == H && g.data[l + 1] == G && g.data[l + 2] == c && (g.data[l] = h, g.data[l + 1] = p, g.data[l + 2] = d);
        f.putImageData(g, 0, 0);
        f = new oa;
        f.app = a;
        f.width = b.width;
        f.height = b.height;
        f.eb = b.eb;
        f.Za = b.Za;
        f.ki = b.ki;
        f.mi = b.mi;
        f.Db = 0;
        f.hc = e;
        f.ah = b.ah;
        f.Kn = b.Kn;
        f.gk = b.gk;
        return f
    };
    Ma.iQ = 1;
    Ma.P1 = 2;
    Ma.hQ = 4;
    Ma.gQ = 8;
    Ma.prototype = {
        fV: function(a) {
            if (this.oX != a.Ye || this.Xe != a.Gb) return !1;
            var b = 0 != (this.XG & Ma.iQ),
                c = 0 != a.Bf;
            if (b != c) return !1;
            b = 0 != (this.XG & Ma.hQ);
            c = 400 < a.Cf;
            return b != c ? !1 : !0
        },
        yg: function() {
            return this.height + this.cY
        },
        measureText: function(a) {
            var b = 0,
                c = a.length,
                d, e;
            for (d = 0; d < c; d++) e = this.kz.indexOf(a.charAt(d)), b = 0 <= e ? b + (this.jz[e] + this.nA) : b + this.width;
            return b
        },
        fillText: function(a, b, c, d) {
            var e = b.length,
                f, g, h, p, H = this.Pi;
            if (0 == (this.V & Ma.gQ))
                for (f = 0; f < e; f++) p = this.kz.indexOf(b.charAt(f)), 0 <= p ? (h = Math.floor(p / this.qw),
                    g = p - h * this.qw, h *= this.height + 1, g *= this.width + 1, 0 == H.$b ? a.drawImage(H.hc, g, h, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(H.app.qa.wc[H.$b], g + H.ne, h + H.oe, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height), c += this.jz[p] + this.nA) : (a.fillStyle = l.ke(this.color), a.fillRect(c, d, this.width, this.height), c += this.width);
            else
                for (c += this.measureText(b), f = e - 1; 0 <= f; f--) p = this.kz.indexOf(b.charAt(f)), 0 <= p ? (c -= this.jz[p] + this.nA, h = p / this.qw, g = p - h *
                    this.qw, h *= this.height + 1, g *= this.width + 1, 0 == H.$b ? a.drawImage(H.hc, g, h, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(H.app.qa.wc[H.$b], g + H.ne, h + H.oe, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height)) : (c -= this.width, a.fillStyle = l.ke(this.color), a.fillRect(c, d, this.width, this.height))
        }
    };
    lb.prototype = {
        n_: function(a) {
            a = this.yu[a];
            a.Lb = a.Sd;
            a.Aa = a.ib;
            a.Da = this.pv.Na;
            for (a = a.ib; 0 == (a & 2147483648);) a = this.Dy[a], a = a.Ba = a.xb
        },
        q_: function(a) {
            var b =
                a.La;
            b.Lb = 1;
            b.Da = this.pv.Na;
            b.Aa = a.ea;
            this.Dy[a.ea].Ba = -1
        },
        PG: function(a, b, c, d) {
            return 0 != (b & 32768) ? 0 != ((this.nX(a, b & 32767, c, d) ? 1 : 0) ^ (c ? 1 : 0)) : 0 != ((this.OG(a, b, c, d) ? 1 : 0) ^ (c ? 1 : 0))
        },
        nX: function(a, b, c, d) {
            b = this.BE[b];
            for (var e = !1, f = 0; f < b.M.length;) {
                var g = b.M[f + 1];
                if (0 > g) break;
                e = 0 != ((e ? 1 : 0) | (this.OG(a, g, c, d) ? 1 : 0));
                f += 2
            }
            return e
        },
        OG: function(a, b, c, d) {
            var e = this.yu[b];
            if (null == e) return !1;
            var f = !1;
            e.Da != this.pv.Na && this.n_(b);
            if (0 >= e.Lb) return !1;
            b = -1;
            for (var g = 0, h = e.Aa, p = null; 0 == (h & 2147483648);) {
                var H = this.Dy[h],
                    G = 0 != ((d(a, H) ? 1 : 0) ^ (c ? 1 : 0)),
                    f = 0 != ((f ? 1 : 0) | (G ? 1 : 0));
                G && (-1 == b && (b = h), null != p && (p.Ba = h), p = H, g++);
                h = H.Ba
            }
            null != p && (p.Ba = -1);
            e.Aa = b;
            e.Lb = g;
            return f
        },
        dZ: function(a, b) {
            if (0 != (b & 32768)) {
                for (var c = this.BE[b & 32767], d = 0; d < c.M.length;) {
                    var e = c.M[d + 1];
                    if (0 > e) break;
                    if (this.yu[e].Bd == a.Yb) return !0;
                    d += 2
                }
                return !1
            }
            return a.Yb == this.yu[b].Bd
        }
    };
    ga.Tk = 1;
    ga.u0 = 17408;
    ga.t0 = 17664;
    ga.n0 = 17920;
    ga.l0 = 18176;
    ga.m0 = 18432;
    ga.o0 = 18688;
    ga.w0 = 18944;
    ga.r0 = 19200;
    ga.p0 = 19456;
    ga.q0 = 19712;
    ga.x0 = 19968;
    ga.y0 = 20224;
    ga.s0 = 20480;
    ga.v0 = 20736;
    ga.wM = 983039;
    ga.create = function(a) {
        var b = !1,
            c = !1,
            d = !1,
            e = !1,
            f = !1,
            g = !1,
            h = !1,
            p = !1,
            H = !1,
            G = !1,
            l = a.file.ma,
            k = a.file.v(),
            n, m = a.file.C();
        switch (m) {
            case 65535:
                n = new ra;
                break;
            case 131071:
                n = new ra;
                break;
            case 262143:
                n = new mb;
                break;
            case 327679:
                n = new nb;
                break;
            case 393215:
                n = new ob;
                break;
            case 458751:
                n = new $b;
                break;
            case 524287:
                n = new ac;
                break;
            case 983039:
                n = new bc;
                break;
            case 1048575:
                n = new ACT_STOPLOOP;
                break;
            case 1114111:
                n = new ACT_SETLOOPINDEX;
                break;
            case 1179647:
                n = new ACT_RANDOMIZE;
                break;
            case 1310719:
                n = new ACT_SETGLOBALSTRING;
                break;
            case 1572863:
                n = new ra;
                break;
            case 1638399:
                n = new ra;
                break;
            case 1835007:
                n = new Eb;
                b = !0;
                break;
            case 1900543:
                n = new mb;
                break;
            case 1966079:
                n = new Eb;
                b = !0;
                break;
            case 2031615:
                n = new mb;
                break;
            case 2097151:
                n = new Gb;
                c = !0;
                break;
            case 2162687:
                n = new ob;
                break;
            case 2228223:
                n = new Gb;
                c = !0;
                break;
            case 2293759:
                n = new ob;
                break;
            case 2359295:
                n = new Fb;
                d = !0;
                break;
            case 2424831:
                n = new nb;
                break;
            case 2490367:
                n = new Fb;
                d = !0;
                break;
            case 2555903:
                n = new nb;
                break;
            case 2883583:
                n = new cc;
                break;
            case 2949119:
                n = new ra;
                break;
            case 65534:
                n = new dc;
                break;
            case 131070:
                n = new ec;
                break;
            case 327678:
                n = new fc;
                break;
            case 458750:
                n = new gc;
                break;
            case 524286:
                n = new ACT_PAUSESAMPLE;
                break;
            case 589822:
                n = new ACT_RESUMESAMPLE;
                break;
            case 786430:
                n = new hc;
                break;
            case 851966:
                n = new ic;
                break;
            case 917502:
                n = new jc;
                break;
            case 983038:
                n = new kc;
                break;
            case 1048574:
                n = new lc;
                break;
            case 1114110:
                n = new mc;
                break;
            case 1179646:
                n = new nc;
                break;
            case 1245182:
                n = new ra;
                break;
            case 1310718:
                n = new ACT_SETSAMPLEPOS;
                break;
            case 1376254:
                n = new oc;
                break;
            case 1441790:
                n = new ACT_SETSAMPLEVOL;
                break;
            case 1507326:
                n =
                    new ra;
                break;
            case 1572862:
                n = new ra;
                break;
            case 1638398:
                n = new pc;
                break;
            case 1703934:
                n = new qc;
                break;
            case 2031614:
                n = new ACT_LOCKCHANNEL;
                break;
            case 2097150:
                n = new ACT_UNLOCKCHANNEL;
                break;
            case 2162686:
                n = new ACT_SETCHANNELFREQ;
                break;
            case 2228222:
                n = new rc;
                break;
            case 2424830:
                n = new ACT_PLAYSAMPLE2;
                break;
            case 65533:
                n = new sc;
                break;
            case 131069:
                n = new ACT_PREVLEVEL;
                break;
            case 196605:
                n = new tc;
                break;
            case 262141:
                n = new ACT_PAUSEKEY;
                break;
            case 327677:
                n = new uc;
                break;
            case 393213:
                n = new ACT_RESTARTGAME;
                break;
            case 458749:
                n =
                    new vc;
                break;
            case 524285:
                n = new wc;
                break;
            case 589821:
                n = new ACT_CDISPLAYX;
                break;
            case 655357:
                n = new ACT_CDISPLAYY;
                break;
            case 983037:
                n = new xc;
                break;
            case 1048573:
                n = new yc;
                break;
            case 1114109:
                n = new zc;
                break;
            case 1179645:
                n = new ACT_PAUSEKEY;
                break;
            case 1245181:
                n = new Ac;
                break;
            case 1310717:
                n = new pb;
                break;
            case 1376253:
                n = new Bc;
                break;
            case 1441789:
                n = new ACT_SETVIRTUALWIDTH;
                break;
            case 1507325:
                n = new ACT_SETVIRTUALHEIGHT;
                break;
            case 1572861:
                n = new ACT_SETFRAMEBDKCOLOR;
                break;
            case 1638397:
                n = new ACT_DELCREATEDBKDAT;
                break;
            case 1703933:
                n = new Cc;
                break;
            case 1769469:
                n = new ACT_SETFRAMEWIDTH;
                break;
            case 1835005:
                n = new ACT_SETFRAMEHEIGHT;
                break;
            case 2097149:
                n = new ACT_PLAYDEMO;
                break;
            case 2162685:
                n = new ra;
                break;
            case 2228221:
                n = new ra;
                break;
            case 2293757:
                n = new ra;
                break;
            case 2359293:
                n = new ra;
                break;
            case 2424829:
                n = new ra;
                break;
            case 2490365:
                n = new Dc;
                break;
            case 65532:
                n = new Ec;
                break;
            case 131068:
                n = new Xc;
                break;
            case 196604:
                n = new ACT_NEVENTSAFTER;
                break;
            case 65530:
                n = new ACT_HIDECURSOR;
                break;
            case 131066:
                n = new Fc;
                break;
            case 65529:
                n = new ACT_SETSCORE;
                break;
            case 131065:
                n = new ACT_SETLIVES;
                break;
            case 196601:
                n = new ACT_NOINPUT;
                break;
            case 262137:
                n = new ACT_RESTINPUT;
                break;
            case 327673:
                n = new ACT_ADDSCORE;
                break;
            case 393209:
                n = new ACT_ADDLIVES;
                break;
            case 458745:
                n = new ACT_SUBSCORE;
                break;
            case 524281:
                n = new ACT_SUBLIVES;
                break;
            case 589817:
                n = new ACT_SETINPUT;
                break;
            case 655353:
                n = new ACT_SETINPUTKEY;
                break;
            case 720889:
                n = new ACT_SETPLAYERNAME;
                break;
            case 65531:
                n = new Gc;
                break;
            case 131067:
                n = new ACT_CREATEBYNAME;
                break;
            case 196603:
                n = new Yc;
                break;
            case 262139:
                n = new ACT_CREATEBYNAMEEXP;
                break;
            case 5242883:
                n = new ACT_STRDESTROY;
                break;
            case 5308419:
                n = new ACT_STRDISPLAY;
                break;
            case 5373955:
                n = new ACT_STRDISPLAYDURING;
                break;
            case 5439491:
                n = new Hc;
                break;
            case 5505027:
                n = new Ic;
                break;
            case 5570563:
                n = new ACT_STRPREV;
                break;
            case 5636099:
                n = new Jc;
                break;
            case 5701635:
                n = new Kc;
                break;
            case 5767171:
                n = new Lc;
                break;
            case 5242882:
                n = new Mc;
                break;
            case 5308418:
                n = new ACT_SPRFRONT;
                break;
            case 5373954:
                n = new ACT_SPRBACK;
                break;
            case 5439490:
                n = new ACT_SPRADDBKD;
                break;
            case 5505026:
                n = new ACT_SPRREPLACECOLOR;
                break;
            case 5570562:
                n =
                    new Nc;
                break;
            case 5636098:
                n = new Oc;
                break;
            case 5701634:
                n = new Pc;
                break;
            case 5767170:
                n = new Qc;
                break;
            case 5242887:
                n = new Rc;
                break;
            case 5308423:
                n = new Sc;
                break;
            case 5373959:
                n = new Tc;
                break;
            case 5439495:
                n = new ACT_CSETMIN;
                break;
            case 5505031:
                n = new Uc;
                break;
            case 5570567:
                n = new Vc;
                break;
            case 5636103:
                n = new Wc;
                break;
            case 5242884:
                n = new ACT_QASK;
                break;
            case 5242889:
                n = new ACT_CCARESTARTAPP;
                break;
            case 5308425:
                n = new ACT_CCARESTARTFRAME;
                break;
            case 5373961:
                n = new ACT_CCANEXTFRAME;
                break;
            case 5439497:
                n = new ACT_CCAPREVIOUSFRAME;
                break;
            case 5505033:
                n = new ACT_CCAENDAPP;
                break;
            case 5636105:
                n = new ACT_CCAJUMPFRAME;
                break;
            case 5701641:
                n = new ACT_CCASETGLOBALVALUE;
                break;
            case 5767177:
                n = new ACT_CCASHOW;
                break;
            case 5832713:
                n = new ACT_CCAHIDE;
                break;
            case 5898249:
                n = new ACT_CCASETGLOBALSTRING;
                break;
            case 5963785:
                n = new ACT_CCAPAUSEAPP;
                break;
            case 6029321:
                n = new ACT_CCARESUMEAPP;
                break;
            case 6094857:
                n = new ACT_CCASETWIDTH;
                break;
            case 6160393:
                n = new ACT_CCASETHEIGHT;
                break;
            default:
                switch (m & 4294901760) {
                    case 0:
                        n = new Zc;
                        G = !0;
                        break;
                    case 65536:
                        n = new ad;
                        break;
                    case 131072:
                        n = new bd;
                        break;
                    case 196608:
                        n = new cd;
                        break;
                    case 262144:
                        n = new dd;
                        break;
                    case 327680:
                        n = new ed;
                        break;
                    case 393216:
                        n = new fd;
                        break;
                    case 458752:
                        n = new ACT_EXTMAXSPEED;
                        break;
                    case 524288:
                        n = new ACT_EXTWRAP;
                        break;
                    case 589824:
                        n = new gd;
                        break;
                    case 655360:
                        n = new ACT_EXTREVERSE;
                        break;
                    case 720896:
                        n = new hd;
                        break;
                    case 786432:
                        n = new ACT_EXTPREVMOVE;
                        break;
                    case 851968:
                        n = new id;
                        break;
                    case 917504:
                        n = new jd;
                        break;
                    case 983040:
                        n = new kd;
                        break;
                    case 1048576:
                        n = new ld;
                        break;
                    case 1114112:
                        n = new md;
                        break;
                    case 1179648:
                        n = new nd;
                        break;
                    case 1245184:
                        n = new od;
                        break;
                    case 1310720:
                        n = new ACT_EXTRESTANIM;
                        break;
                    case 1376256:
                        n = new ACT_EXTRESTDIR;
                        break;
                    case 1441792:
                        n = new ACT_EXTRESTSPEED;
                        break;
                    case 1507328:
                        n = new pd;
                        break;
                    case 1572864:
                        n = new qd;
                        break;
                    case 1638400:
                        n = new ACT_EXTSHUFFLE;
                        break;
                    case 1703936:
                        n = new rd;
                        break;
                    case 1769472:
                        n = new sd;
                        break;
                    case 1835008:
                        n = new td;
                        break;
                    case 1900544:
                        n = new ud;
                        break;
                    case 1966080:
                        n = new vd;
                        break;
                    case 2031616:
                        n = new wd;
                        e = !0;
                        break;
                    case 2097152:
                        n = new yd;
                        f = !0;
                        break;
                    case 2162688:
                        n = new Ad;
                        g = !0;
                        break;
                    case 2228224:
                        n =
                            new ACT_EXTDISPATCHVAR;
                        break;
                    case 2293760:
                        n = new Cd;
                        h = !0;
                        break;
                    case 2359296:
                        n = new Ed;
                        p = !0;
                        break;
                    case 2424832:
                        n = new Gd;
                        H = !0;
                        break;
                    case 2490368:
                        n = new ACT_EXTINKEFFECT;
                        break;
                    case 2555904:
                        n = new ACT_EXTSETSEMITRANSPARENCY;
                        break;
                    case 2621440:
                        n = new Id;
                        break;
                    case 2686976:
                        n = new Jd;
                        break;
                    case 2752512:
                        n = new ACT_EXTSETACCELERATION;
                        break;
                    case 2818048:
                        n = new Kd;
                        break;
                    case 2883584:
                        n = new ACT_EXTSETROTATINGSPEED;
                        break;
                    case 2949120:
                        n = new ACT_EXTSETDIRECTIONS;
                        break;
                    case 3014656:
                        n = new ACT_EXTBRANCHNODE;
                        break;
                    case 3080192:
                        n =
                            new ACT_EXTSETGRAVITY;
                        break;
                    case 3145728:
                        n = new ACT_EXTGOTONODE;
                        break;
                    case 3211264:
                        n = new Ld;
                        break;
                    case 3276800:
                        n = new ACT_EXTSETFONTNAME;
                        break;
                    case 3342336:
                        n = new ACT_EXTSETFONTSIZE;
                        break;
                    case 3407872:
                        n = new ACT_EXTSETBOLD;
                        break;
                    case 3473408:
                        n = new ACT_EXTSETITALIC;
                        break;
                    case 3538944:
                        n = new ACT_EXTSETUNDERLINE;
                        break;
                    case 3604480:
                        n = new ra;
                        break;
                    case 3670016:
                        n = new Md;
                        break;
                    case 3735552:
                        n = new Nd;
                        break;
                    case 3801088:
                        n = new Od;
                        break;
                    case 3866624:
                        n = new Pd;
                        break;
                    case 3932160:
                        n = new Qd;
                        break;
                    case 3997696:
                        n = new Rd;
                        break;
                    case 4063232:
                        n = new ra;
                        break;
                    case 4128768:
                        n = new Sd;
                        break;
                    case 4194304:
                        n = new ra;
                        break;
                    case 4259840:
                        n = new Td;
                        break;
                    case 4325376:
                        n = new Ud;
                        break;
                    case 4390912:
                        n = new ra;
                        break;
                    case 4456448:
                        n = new ACT_EXTSETFRICTION;
                        break;
                    case 4521984:
                        n = new ACT_EXTSETELASTICITY;
                        break;
                    case 4587520:
                        n = new ACT_EXTAPPLYIMPULSE;
                        break;
                    case 4653056:
                        n = new ACT_EXTAPPLYANGULARIMPULSE;
                        break;
                    case 4718592:
                        n = new ACT_EXTAPPLYFORCE;
                        break;
                    case 4784128:
                        n = new ACT_EXTAPPLYTORQUE;
                        break;
                    case 4849664:
                        n = new ACT_EXTSETLINEARVELOCITY;
                        break;
                    case 4915200:
                        n =
                            new ACT_EXTSETANGULARVELOCITY;
                        break;
                    case 4980736:
                        n = new Vd;
                        break;
                    case 5046272:
                        n = new ACT_EXTFOREACH2;
                        break;
                    case 5111808:
                        n = new ACT_EXTSTOPFORCE;
                        break;
                    case 5177344:
                        n = new ACT_EXTSTOPTORQUE;
                        break;
                    default:
                        n = new Gh
                }
        }
        if (null != n) {
            n.ya = m;
            n.$d = a.file.ra();
            n.va = a.file.ra();
            n.ab = a.file.lb();
            n.Ve = a.file.lb();
            n.Ec = a.file.lb();
            n.on = a.file.lb();
            m = 0;
            if (G) {
                n.Ec--;
                var G = a.file.ma,
                    q = a.file.v();
                a.file.v();
                m = a.file.v();
                a.file.seek(G + q)
            }
            if (0 < n.Ec)
                for (n.i = Array(n.Ec), G = 0; G < n.Ec; G++) n.i[G] = Pa.create(a);
            if (0 != m) {
                G = null;
                switch (m) {
                    case 1:
                        G =
                            new $c
                }
                null != G && (G.ya = n.ya, G.$d = n.$d, G.va = n.va, G.ab = n.ab, G.Ve = n.Ve, G.Ec = n.Ec, G.on = n.on, G.i = n.i, n = G)
            }
            if (b || c || d) b = n.i[0], n.Qd = b.value, b = n.i[1], n.value = b.ta[0].value;
            if (e || f || g) G = null, b = n.i[0], 53 != b.code && (c = b.value, b = n.i[1], 0 <= c && 2 == b.ta.length && (0 >= b.ta[1].code || 1310720 <= b.ta[1].code) && (65535 == b.ta[0].code || 1572863 == b.ta[0].code) && (e ? (G = new xd, G.Qd = c, G.value = b.ta[0].value) : f ? (G = new zd, G.Qd = c, G.value = b.ta[0].value) : g && (G = new Bd, G.Qd = c, G.value = b.ta[0].value)), null != G && (G.ya = n.ya, G.$d = n.$d, G.va = n.va,
                G.ab = n.ab, G.Ve = n.Ve, G.Ec = n.Ec, G.on = n.on, G.i = n.i, n = G));
            if (h || p || H) G = null, e = n.i[0], 2 == e.ta.length && (0 >= e.ta[1].code || 1310720 <= e.ta[1].code) && 65535 == e.ta[0].code && (h ? (G = new Dd, G.ia = 1 << e.ta[0].value) : p ? (G = new Fd, G.ia = 1 << e.ta[0].value) : H && (G = new Hd, G.ia = 1 << e.ta[0].value)), null != G && (G.ya = n.ya, G.$d = n.$d, G.va = n.va, G.ab = n.ab, G.Ve = n.Ve, G.Ec = n.Ec, G.on = n.on, G.i = n.i, n = G)
        }
        a.file.seek(l + k);
        return n
    };
    $a.Nt = 1;
    ra.prototype = {
        N: function() {}
    };
    mb.prototype = {
        N: function(a) {
            var b;
            b = 52 == this.i[0].code ? a.W(this.i[0]) - 1 : this.i[0].value;
            var c = a.Rc(this.i[1]);
            a.h.qC(b, c)
        }
    };
    Eb.prototype = {
        N: function(a) {
            a.h.qC(this.Qd, this.value)
        }
    };
    nb.prototype = {
        N: function(a) {
            var b;
            b = 52 == this.i[0].code ? a.W(this.i[0]) - 1 : this.i[0].value;
            var c = a.Rc(this.i[1]);
            a.h.Ru(b, -c)
        }
    };
    Fb.prototype = {
        N: function(a) {
            a.h.Ru(this.Qd, -this.value)
        }
    };
    ob.prototype = {
        N: function(a) {
            var b;
            b = 52 == this.i[0].code ? a.W(this.i[0]) - 1 : this.i[0].value;
            var c = a.Rc(this.i[1]);
            a.h.Ru(b, c)
        }
    };
    Gb.prototype = {
        N: function(a) {
            a.h.Ru(this.Qd, this.value)
        }
    };
    $b.prototype = {
        N: function(a) {
            var b = this.i[0].ma,
                c = a.g.Uc[b].$a[0].i[0],
                d = 0 != (c.Sc & ma.Dj);
            c.Sc &= ~ma.Dj;
            d && this.xH(a, b)
        },
        xH: function(a, b) {
            var c = a.g.Uc[b],
                d = c.$a[0],
                d = d.i[0],
                e, f;
            if (0 == (d.Sc & ma.Xk))
                for (c.$ &= ~L.Pf, b++, f = !1, e = 1;;) {
                    c = a.g.Uc[b];
                    d = c.$a[0];
                    switch (d.ya) {
                        case -589825:
                            d = d.i[0];
                            1 == e && (d.Sc &= ~ma.Xk);
                            if (0 == (d.Sc & ma.Dj)) {
                                b = this.xH(a, b);
                                continue
                            } else e++;
                            break;
                        case -655361:
                            e--;
                            0 == e && (c.$ &= ~L.Pf, f = !0, b++);
                            break;
                        case -1441793:
                            1 == e && (c.$ &= ~L.Pf, c.$ &= ~L.Mm);
                            break;
                        case -2686977:
                            c.$ |= L.Pf;
                            break;
                        default:
                            1 == e && (c.$ &= ~L.Pf)
                    }
                    if (f) break;
                    b++
                } else
                    for (b++, f = !1, e = 1;; b++) {
                        c = a.g.Uc[b];
                        d = c.$a[0];
                        switch (d.ya) {
                            case -589825:
                                e++;
                                break;
                            case -655361:
                                e--;
                                0 == e && (f = !0, b++);
                                break;
                            case -2686977:
                                c.$ |= L.Pf
                        }
                        if (f) break
                    }
            return b
        }
    };
    ac.prototype = {
        N: function(a) {
            var b = this.i[0].ma,
                c = a.g.Uc[b].$a[0].i[0],
                d = 0 == (c.Sc & ma.Dj);
            c.Sc |= ma.Dj;
            1 == d && 0 == (c.Sc & ma.Xk) && this.yH(a, b)
        },
        yH: function(a, b) {
            var c = a.g.Uc[b],
                d;
            c.$ |= L.Pf;
            var e, f;
            b++;
            f = !1;
            for (e = 1;;) {
                c = a.g.Uc[b];
                d = c.$a[0];
                switch (d.ya) {
                    case -589825:
                        c = d.i[0];
                        d = 0 == (c.Sc & ma.Xk);
                        1 == e && (c.Sc |= ma.Xk);
                        if (0 != d && 0 == (c.Sc & ma.Dj)) {
                            b = this.yH(a, b);
                            continue
                        } else e++;
                        break;
                    case -655361:
                        e--;
                        0 == e && (c.$ |= L.Pf, f = !0, b++);
                        break;
                    default:
                        1 == e && (c.$ |= L.Pf)
                }
                if (f) break;
                b++
            }
            return b
        }
    };
    bc.prototype = {
        N: function(a) {
            var b = !1,
                c;
            if (0 == a.g.pz && null != a.te) {
                var d = this.i[0].MG;
                if (0 == d && (c = a.Ld(this.i[0]), b = !0, 0 != c.length)) {
                    var e;
                    for (e = 0; e < a.te.length; e++)
                        if (l.Hb(c, a.te[e].name)) {
                            d = e + 1;
                            break
                        }
                }
                if (0 != d && (d = a.te[d - 1], 0 == d.gs)) {
                    b = Math.floor(a.W(this.i[1]));
                    c = a.Jf.get(d.jX);
                    c.V &= ~$a.Nt;
                    e = !1;
                    0 > b && (e = !0, b = 10);
                    var f = a.lj,
                        g = a.g.sh,
                        h = a.g.Ig;
                    for (c.index = 0; c.index < b; c.index++) {
                        a.lj =
                            c.name;
                        a.g.th = !1;
                        a.g.iV(d.xJ);
                        if (0 != (c.V & $a.Nt)) break;
                        e && (b = c.index + 10)
                    }
                    a.g.Ig = h;
                    a.g.sh = g;
                    a.lj = f;
                    a.g.th = !0;
                    return
                }
            }
            b || (c = a.Ld(this.i[0]));
            if (0 != c.length) {
                b = Math.floor(a.W(this.i[1]));
                d = a.Pu(c);
                a.Jf.get(d);
                c = a.Jf.get(d);
                c.V &= ~$a.Nt;
                e = !1;
                0 > b && (e = !0, b = 10);
                f = a.lj;
                g = a.g.sh;
                h = a.g.Ig;
                for (c.index = 0; c.index < b; c.index++) {
                    a.lj = c.name;
                    a.g.th = !1;
                    a.g.Wf(-983041);
                    if (0 != (c.V & $a.Nt)) break;
                    e && (b = c.index + 10)
                }
                a.g.Ig = h;
                a.g.sh = g;
                a.lj = f;
                a.g.th = !0
            }
        }
    };
    cc.prototype = {
        N: function(a) {
            a.g.Zu = this.i[0]
        }
    };
    dc.prototype = {
        N: function(a) {
            var b =
                this.i[0],
                c = !1;
            45 == b.code ? (b = a.Ld(b), b = a.h.Le.yn(b)) : (c = 0 != (b.tx & Va.Fy), b = b.rm);
            0 <= b && a.h.Ob.play(b, 1, -1, c, -1, 0)
        }
    };
    ec.prototype = {
        N: function(a) {
            a.h.Ob.ux()
        }
    };
    fc.prototype = {
        N: function(a) {
            var b = this.i[0],
                c = a.W(this.i[1]),
                d = !1;
            45 == b.code ? (b = a.Ld(b), b = a.h.Le.yn(b)) : (d = 0 != (b.tx & Va.Fy), b = b.rm);
            0 <= b && a.h.Ob.play(b, c, -1, d, -1, 0)
        }
    };
    gc.prototype = {
        N: function(a) {
            var b = this.i[0];
            45 == b.code ? (b = a.Ld(b), b = a.h.Le.yn(b)) : b = b.rm;
            0 <= b && a.h.Ob.T_(b)
        }
    };
    hc.prototype = {
        N: function(a) {
            var b = this.i[0],
                c = a.W(this.i[1]),
                d = !1;
            45 ==
                b.code ? (b = a.Ld(b), b = a.h.Le.yn(b)) : (d = 0 != (b.tx & Va.Fy), b = b.rm);
            0 <= b && a.h.Ob.play(b, 1, c - 1, d, -1, 0)
        }
    };
    ic.prototype = {
        N: function(a) {
            var b = this.i[0],
                c = !1;
            45 == b.code ? (b = a.Ld(b), b = a.h.Le.yn(b)) : (c = 0 != (b.tx & Va.Fy), b = b.rm);
            var d = a.W(this.i[1]),
                e = a.W(this.i[2]);
            0 <= b && a.h.Ob.play(b, e, d - 1, c, -1, 0)
        }
    };
    jc.prototype = {
        N: function(a) {
            var b = a.W(this.i[0]);
            a.h.Ob.rZ(b - 1)
        }
    };
    kc.prototype = {
        N: function(a) {
            var b = a.W(this.i[0]);
            a.h.Ob.c_(b - 1)
        }
    };
    lc.prototype = {
        N: function(a) {
            var b = a.W(this.i[0]);
            a.h.Ob.R_(b - 1)
        }
    };
    mc.prototype = {
        N: function(a) {
            var b =
                a.W(this.i[0]),
                c = a.W(this.i[1]);
            0 <= c && a.h.Ob.E_(b - 1, c)
        }
    };
    nc.prototype = {
        N: function(a) {
            var b = a.W(this.i[0]),
                c = a.W(this.i[1]);
            0 <= c && 100 >= c && a.h.Ob.G_(b - 1, c)
        }
    };
    oc.prototype = {
        N: function(a) {
            var b = a.W(this.i[0]);
            0 <= b && 100 >= b && a.h.Ob.y_(b)
        }
    };
    pc.prototype = {
        N: function(a) {
            a.h.Ob.pause()
        }
    };
    qc.prototype = {
        N: function(a) {
            a.h.Ob.resume()
        }
    };
    rc.prototype = {
        N: function(a) {
            var b = this.i[0];
            45 == b.code ? (b = a.Ld(b), b = a.h.Le.yn(b)) : b = b.rm;
            var c = a.W(this.i[1]);
            0 <= b && 0 <= c && a.h.Ob.w_(b, c)
        }
    };
    sc.prototype = {
        N: function(a) {
            a.cc = k.$t;
            a.h.Pk = !0
        }
    };
    tc.prototype = {
        N: function(a) {
            var b;
            if (26 == this.i[0].code) {
                if (b = this.i[0].value, -1 == a.h.TQ(b)) return
            } else {
                b = a.W(this.i[0]) - 1;
                if (0 > b || 4096 <= b) return;
                a.h.X4 && b++;
                b |= 32768
            }
            a.cc = k.Zt;
            a.tq = b;
            a.h.Pk = !0
        }
    };
    uc.prototype = {
        N: function(a) {
            a.h.Pk = !0;
            a.h.PH && !a.h.a6 && (a.cc = k.Yt)
        }
    };
    vc.prototype = {
        N: function(a) {
            a.cc = k.$D
        }
    };
    wc.prototype = {
        N: function(a) {
            var b = new Ia;
            this.i[0].Jk(a, 0, b);
            a.t_(b.x, b.y, b.Dp, 3)
        }
    };
    xc.prototype = {
        N: function(a) {
            a.h.ZV()
        }
    };
    yc.prototype = {
        N: function(a) {
            a.h.iW()
        }
    };
    zc.prototype = {
        N: function(a) {
            var b =
                a.W(this.i[0]);
            a.h.Vz = b
        }
    };
    pb.prototype = {
        N: function(a) {
            a.h.Oh |= m.Qt
        }
    };
    Ac.prototype = {
        N: function(a) {
            a.Xs = -1;
            a.cc = k.tR
        }
    };
    pb.prototype = {
        N: function(a) {
            a.h.Oh |= m.Qt
        }
    };
    Bc.prototype = {
        N: function(a) {
            a.h.Oh &= ~m.Qt
        }
    };
    Cc.prototype = {
        N: function(a) {
            var b = a.W(this.i[0]) - 1;
            a.MV(b)
        }
    };
    Dc.prototype = {
        N: function(a) {
            var b = a.W(this.i[0]);
            a.h.Sa &= ~m.Nx;
            b && (a.h.Sa |= m.Nx)
        }
    };
    Ec.prototype = {
        N: function(a) {
            var b;
            b = 22 == this.i[0].code ? a.W(this.i[0]) : this.i[0].kc;
            var c = a.h.kc;
            a.lf = b;
            a.jm = c - a.lf;
            a.g.b_()
        }
    };
    Fc.prototype = {
        N: function(a) {
            0 ==
                a.Kf && a.sx()
        }
    };
    Gc.prototype = {
        N: function(a) {
            var b = this.i[0],
                c = new Ia;
            b.Jk(a, 17, c) && (c.Yy ? (this.ab |= ga.Tk, a.g.sh = !0) : this.ab &= ~ga.Tk, b = a.Hr(b.nr, b.hz, c.x, c.y, c.dir, 0, c.Dp, -1), 0 <= b && (b = a.H[b], a.g.Wg(b), b && 32 <= b.Pa && a.ZE(b), a.Ej(b) || null != a.d_ && a.Kg.JJ(b)))
        }
    };
    Hc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (24 == this.i[0].code ? a = this.i[0].color : (a = a.W(this.i[0]), a = l.Qk(a)), k.yK(b, a))
        }
    };
    Ic.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = 31 == this.i[0].code ? this.i[0].value : a.W(this.i[0]) -
                1, b.yx(a))
        }
    };
    Jc.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && a.yx(a.Wb + 1)
        }
    };
    Kc.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && a.yx(-1)
        }
    };
    Lc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = a.Ld(this.i[0]), null == b.Lg || null != b.Lg && a != b.Lg) && (b.fL(a), b.yx(-1))
        }
    };
    Mc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (null != b.ga && b.ga.Rg(0), a.fU(b, this.i[0].value))
        }
    };
    Nc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c = a.cA(this.i[0]);
                0 > c && (c = 0);
                var d = !1;
                0 != a.W(this.i[1]) && (d = !0);
                b.A.aa &= ~D.wi;
                d && (b.A.aa |= D.wi);
                b.nt(c, c)
            }
        }
    };
    Oc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c = a.cA(this.i[0]);
                0 > c && (c = 0);
                var d = !1;
                0 != a.W(this.i[1]) && (d = !0);
                b.A.aa &= ~D.wi;
                d && (b.A.aa |= D.wi);
                b.nt(c, b.c.Ab)
            }
        }
    };
    Pc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c = a.cA(this.i[0]);
                0 > c && (c = 0);
                var d = !1;
                0 != a.W(this.i[1]) && (d = !0);
                b.A.aa &= ~D.wi;
                d && (b.A.aa |= D.wi);
                b.nt(b.c.zb, c)
            }
        }
    };
    Qc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c = a.W(this.i[0]),
                    c = c % 360;
                0 > c && (c += 360);
                var d = a.Ej(b);
                if (d) d.kt(c);
                else if (d = !1, 0 != a.W(this.i[1]) && (d = !0), a = !1, 0 != (b.A.aa & D.wi) && (a = !0), b.c.Ua != c || a != d) b.c.Ua = c, b.A.aa &= ~D.wi, d && (b.A.aa |= D.wi), b.c.Y = !0, c = b.b.h.qa.Ki(b.c.Ma, b.c.Ua, b.c.zb, b.c.Ab), b.S = c.width, b.T = c.height, b.Ea = c.eb, b.Fa = c.Za
            }
        }
    };
    Rc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = a.Rc(this.i[0]), b.sz(a), b.sr(a))
        }
    };
    Sc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = a.Rc(this.i[0]), b.rV(a))
        }
    };
    Tc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = a.Rc(this.i[0]),
                b.vV(a))
        }
    };
    Uc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = a.Rc(this.i[0]), b.uV(a))
        }
    };
    Vc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (this.i[0].code == Pa.zu ? (a = a.W(this.i[0]), a = l.Qk(a)) : a = this.i[0].color, b.sV(a))
        }
    };
    Wc.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (this.i[0].code == Pa.zu ? (a = a.W(this.i[0]), a = l.Qk(a)) : a = this.i[0].color, b.tV(a))
        }
    };
    Xc.prototype = {
        N: function(a) {
            var b;
            b = 22 == this.i[0].code ? a.W(this.i[0]) : this.i[0].kc;
            for (var c = a.Ld(this.i[1]), d = a.Ys, e = null; null != d;) e =
                d, d = d.next;
            d = new hb;
            null == e ? a.Ys = d : e.next = d;
            d.type = hb.DE;
            d.kc = a.lf + b;
            d.name = c;
            d.next = null
        }
    };
    Yc.prototype = {
        N: function(a) {
            var b = this.i[0].Ad,
                c = a.W(this.i[1]),
                d = a.W(this.i[2]),
                e = a.W(this.i[3]) - 1;
            0 > b || (b = a.Hr(-1, b, c, d, -1, 0, e, -1), 0 <= b && (b = a.H[b], a.g.Wg(b), b && 32 <= b.Pa && a.ZE(b), a.Ej(b) || null != a.d_ && a.Kg.JJ(b)))
        }
    };
    Zc.prototype = {
        N: function(a) {
            a.g.oa(this)
        }
    };
    $c.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b && null != b.R) {
                var c = a.W(this.i[0]);
                a = a.W(this.i[1]);
                b.R.nc &= ~(1 << c);
                a && (b.R.nc |= 1 << c)
            }
        }
    };
    ad.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c = new Ia;
                this.i[0].Jk(a, 1, c) && (k.Ac(b, c.x), k.Bc(b, c.y), -1 != c.dir && (c = c.dir &= 31, a.mc(b) != c && (b.c.Xa = c, b.c.Y = !0, b.D.ja.mf(c), 2 == b.Pa && b.ga.Rg(0))))
            }
        }
    };
    bd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = a.W(this.i[0]), k.Ac(b, Math.floor(a)))
        }
    };
    cd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = a.W(this.i[0]), k.Bc(b, Math.floor(a)))
        }
    };
    dd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && null != a.D && a.D.ja.stop()
        }
    };
    ed.prototype = {
        N: function(a) {
            a =
                a.g.oa(this);
            null != a && null != a.D && a.D.ja.start()
        }
    };
    fd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = a.W(this.i[0]), null != b.D && b.D.ja.nf(a))
        }
    };
    gd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && null != a.D && null != a.D.ja.Se && a.D.ja.Se()
        }
    };
    hd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && null != a.D && a.D.$Y(a)
        }
    };
    id.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = 22 == this.i[0].code ? a.W(this.i[0]) : this.i[0].value, null != b.D && b.D.o_(b, a))
        }
    };
    jd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c = new Ia;
                if (this.i[0].Jk(a, 0, c)) {
                    var d = c.x,
                        e = c.y,
                        d = d - b.s,
                        e = e - b.o,
                        c = a.Ej(b);
                    null == c ? (d = k.tH(d, e), d &= 31, a.mc(b) != d && (b.c.Xa = d, b.c.Y = !0, b.D.ja.mf(d))) : (a = 180 * Math.atan2(-e, d) / 3.141592653589, 0 > a && (a = 360 + a), c.kt(a))
                }
            }
        }
    };
    kd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && (a.ga.Ss = !0)
        }
    };
    ld.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && (a.ga.Ss = !1)
        }
    };
    md.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = 10 == this.i[0].code ? this.i[0].value : a.W(this.i[0]), 0 > a && (a = 0), b.ga.ir(a), b.c.Y = !0)
        }
    };
    nd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = 29 == this.i[0].code ? a.Dv(this.i[0].value) : a.W(this.i[0]), b.ga.oU(a), b.c.Y = !0)
        }
    };
    od.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = a.W(this.i[0]), b.ga.rU(a))
        }
    };
    pd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c;
                c = 29 == this.i[0].code ? a.Dv(this.i[0].value) : a.W(this.i[0]);
                c &= 31;
                a.mc(b) != c && (b.c.Xa = c, b.c.Y = !0, b.D.ja.mf(c), 2 == b.Pa && b.ga.Rg(0))
            }
        }
    };
    qd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (3 == b.Pa ? 0 != (b.cK &
                k.uD) ? (b.A.Pp(), b.A.aa &= ~D.xi, b.Z |= N.Fj) : (b.Z |= N.rd, a.Mh(b.ea)) : 0 == (b.Z & N.rd) && (b.Z |= N.rd, 0 != (b.Oa & E.dl) || 0 != (b.Oa & E.el) ? a.HH(b) : (b.Xr = !1, a.Mh(b.ea))))
        }
    };
    rd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && k.cZ(a)
        }
    };
    sd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && k.eZ(a)
        }
    };
    td.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && null != b.A && (b.A.Pp(), b.A.aa &= ~D.xi, 2 == this.i[0].code ? (b.A.po = this.i[0].kc, b.A.xq = this.i[0].kc) : (b.A.po = a.W(this.i[0]), b.A.xq = b.A.po))
        }
    };
    ud.prototype = {
        N: function(a) {
            var b =
                a.g.oa(this);
            if (null != b) {
                var c = this.i[0],
                    d = new Ia;
                c.Jk(a, 17, d) && b.NK(c, d.x, d.y, d.dir)
            }
        }
    };
    vd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c = new Ia;
                if (this.i[0].Jk(a, 17, c)) {
                    var d = new Ia;
                    this.i[1].Jk(a, 0, d) && b.NK(this.i[0], c.x, c.y, k.tH(d.x - c.x, d.y - c.y))
                }
            }
        }
    };
    wd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c;
                c = 53 == this.i[0].code ? a.W(this.i[0]) : this.i[0].value;
                0 <= c && null != b.R && (c >= b.R.ob.length && b.R.Fl(c + 10), a = a.Rc(this.i[1]), b.R.ob[c] = a)
            }
        }
    };
    xd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && 0 <= this.Qd && null != a.R && (this.Qd >= a.R.ob.length && a.R.Fl(this.Qd + 10), a.R.ob[this.Qd] = this.value)
        }
    };
    yd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c;
                c = 53 == this.i[0].code ? a.W(this.i[0]) : this.i[0].value;
                0 <= c && null != b.R && (c >= b.R.ob.length && b.R.Fl(c + 10), a = a.Rc(this.i[1]), b.R.ob[c] += a)
            }
        }
    };
    zd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && 0 <= this.Qd && null != a.R && (this.Qd >= a.R.ob.length && a.R.Fl(this.Qd + 10), a.R.ob[this.Qd] += this.value)
        }
    };
    Ad.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c;
                c = 53 == this.i[0].code ? a.W(this.i[0]) : this.i[0].value;
                0 <= c && null != b.R && (c >= b.R.ob.length && b.R.Fl(c + 10), a = a.Rc(this.i[1]), b.R.ob[c] -= a)
            }
        }
    };
    Bd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && 0 <= this.Qd && null != a.R && (this.Qd >= a.R.ob.length && a.R.Fl(this.Qd + 10), a.R.ob[this.Qd] -= this.value)
        }
    };
    Cd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && null != b.R && (a = a.W(this.i[0]), b.R.nc |= 1 << a)
        }
    };
    Dd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && null != a.R && (a.R.nc |= this.ia)
        }
    };
    Ed.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && null != b.R && (a = a.W(this.i[0]), b.R.nc &= ~(1 << a))
        }
    };
    Fd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && null != a.R && (a.R.nc &= ~this.ia)
        }
    };
    Gd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && null != b.R && (a = 1 << a.W(this.i[0]), b.R.nc = 0 != (b.R.nc & a) ? b.R.nc & ~a : b.R.nc | a)
        }
    };
    Hd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && null != a.R && (a.R.nc = 0 != (a.R.nc & this.ia) ? a.R.nc & ~this.ia : a.R.nc | this.ia)
        }
    };
    Id.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = a.W(this.i[0]),
                b.ga.pU(a), b.c.Y = !0)
        }
    };
    Jd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && (a.ga.qU(), a.c.Y = !0)
        }
    };
    Kd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (a = a.W(this.i[0]), b.D.ja.lt(a))
        }
    };
    Ld.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c;
                c = 62 == this.i[0].code ? a.W(this.i[0]) : this.i[0].value;
                0 <= c && null != b.R && (c >= b.R.we.length && b.R.wH(c + 10), b.R.we[c] = a.Ld(this.i[1]))
            }
        }
    };
    Md.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && (22 == this.i[0].code ? (a = a.W(this.i[0]), a = l.Qk(a)) : a = this.i[0].color,
                k.yK(b, a))
        }
    };
    Nd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && a.dc(a.vn())
        }
    };
    Od.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            null != a && a.dc(0)
        }
    };
    Pd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && null != b.A && (a = a.g.dA(this.i[0].la, this), null != a && (a = a.Wa(), a < b.Wa() && b.dc(a)))
        }
    };
    Qd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            null != b && null != b.A && (a = a.g.dA(this.i[0].la, this), null != a && (a = a.Wa(), b.Wa() < a && b.dc(a + 1)))
        }
    };
    Rd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b && null != b.A) {
                var c = a.W(this.i[0]);
                0 < c && c <= a.u.za && b.Ka != c - 1 && (--c, null != b.A && (b.Ka = c, b.A.qo = c, b.Vj(), b.A.WF(!1)))
            }
        }
    };
    Sd.prototype = {
        N: function(a) {
            a = a.g.oa(this);
            if (null != a) {
                var b = this.i[0].Rb,
                    c = D.kN;
                null != b && 0 != b.length && ("Add" == b ? c = D.RC : "Invert" == b ? c = D.lN : "Sub" == b ? c = D.oN : "Mono" == b ? c = D.mN : "Blend" == b ? c = D.kg : "XOR" == b ? c = D.UC : "OR" == b ? c = D.nN : "AND" == b && (c = D.jN));
                a.A.$A(c, a.A.nb)
            }
        }
    };
    Td.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b && null != b.A) {
                a = l.IU(255 - a.W(this.i[0]), 0, 255);
                var c = 0 == (b.A.qb & D.Cm);
                b.A.qb = b.A.qb & D.Lq | D.Cm;
                var d = 16777215;
                c || (d = b.A.nb);
                b.A.nb = a << 24 | d & 16777215;
                b.A.$A(b.A.qb, b.A.nb)
            }
        }
    };
    Ud.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b && null != b.A) {
                a = a.W(this.i[0]);
                var c = 0 == (b.A.qb & D.Cm);
                b.A.qb = b.A.qb & D.Lq | D.Cm;
                var d = b.A.nb;
                b.A.nb = (c ? -1 == b.A.nb ? 4278190080 : 255 - 2 * b.A.nb << 24 : d & 4278190080) | l.Qk(a & 16777215);
                b.A.$A(b.A.qb, b.A.nb)
            }
        }
    };
    Vd.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c = a.Ld(this.i[0]);
                a.g.hU(c, b, this.va);
                a.g.Uu = !0
            }
        }
    };
    I.kE = 6;
    I.NN = -983041;
    I.ON = -1507329;
    I.PN = -1572865;
    I.create = function(a) {
        var b =
            a.file.ma,
            c = a.file.v(),
            d, e = a.file.C();
        switch (e) {
            case -2752513:
                d = new Xd;
                break;
            case -2686977:
                d = new Ga;
                break;
            case -2555905:
                d = new Yd;
                break;
            case -2490369:
                d = new Mb;
                break;
            case -2424833:
                d = new Lb;
                break;
            case -2359297:
                d = new Kb;
                break;
            case -2293761:
                d = new Jb;
                break;
            case -2228225:
                d = new Ib;
                break;
            case -2162689:
                d = new Hb;
                break;
            case -2097153:
                d = new Mb;
                break;
            case -2031617:
                d = new Lb;
                break;
            case -1966081:
                d = new Kb;
                break;
            case -1900545:
                d = new Jb;
                break;
            case -1835009:
                d = new Ib;
                break;
            case -1769473:
                d = new Hb;
                break;
            case -1703937:
                d = new Ga;
                break;
            case -1638401:
                d = new Zd;
                break;
            case -1572865:
                d = new Ga;
                break;
            case -1507329:
                d = new Ga;
                break;
            case -1441793:
                d = new $d;
                break;
            case -1245185:
                d = new CND_COMPAREGSTRING;
                break;
            case -983041:
                d = new ae;
                break;
            case -720897:
                d = new CND_GROUPACTIVATED;
                break;
            case -655361:
                d = new Ga;
                break;
            case -589825:
                d = new Ga;
                break;
            case -524289:
                d = new Ga;
                break;
            case -458753:
                d = new be;
                break;
            case -393217:
                d = new ce;
                break;
            case -327681:
                d = new de;
                break;
            case -262145:
                d = new CND_REPEAT;
                break;
            case -196609:
                d = new ee;
                break;
            case -131073:
                d = new fe;
                break;
            case -65537:
                d =
                    new Ga;
                break;
            case -1:
                d = new Wd;
                break;
            case -524290:
                d = new CND_SPCHANNELPAUSED;
                break;
            case -458754:
                d = new CND_NOSPCHANNELPLAYING;
                break;
            case -327682:
                d = new CND_SPSAMPAUSED;
                break;
            case -131074:
                d = new CND_NOSAMPLAYING;
                break;
            case -2:
                d = new ge;
                break;
            case -458755:
                d = new CND_ENDOFPAUSE;
                break;
            case -393219:
                d = new CND_ISVSYNCON;
                break;
            case -327683:
                d = new CND_ISLADDER;
                break;
            case -262147:
                d = new CND_ISOBSTACLE;
                break;
            case -196611:
                d = new CND_QUITAPPLICATION;
                break;
            case -131075:
                d = new CND_LEVEL;
                break;
            case -65539:
                d = new he;
                break;
            case -3:
                d =
                    new ie;
                break;
            case -458756:
                d = new De;
                break;
            case -393220:
                d = new Ce;
                break;
            case -327684:
                d = new Be;
                break;
            case -262148:
                d = new CND_TIMEOUT;
                break;
            case -196612:
                d = new je;
                break;
            case -131076:
                d = new CND_TIMER;
                break;
            case -65540:
                d = new ke;
                break;
            case -4:
                d = new le;
                break;
            case -720902:
                d = new me;
                break;
            case -655366:
                d = new ne;
                break;
            case -589830:
                d = new CND_MOUSEON;
                break;
            case -524294:
                d = new oe;
                break;
            case -458758:
                d = new pe;
                break;
            case -393222:
                d = new qe;
                break;
            case -327686:
                d = new CND_MCLICKINZONE;
                break;
            case -262150:
                d = new re;
                break;
            case -196614:
                d =
                    new se;
                break;
            case -131078:
                d = new CND_MINZONE;
                break;
            case -65542:
                d = new te;
                break;
            case -6:
                d = new ue;
                break;
            case -327687:
                d = new CND_JOYPUSHED;
                break;
            case -262151:
                d = new CND_NOMORELIVE;
                break;
            case -196615:
                d = new CND_JOYPRESSED;
                break;
            case -131079:
                d = new CND_LIVE;
                break;
            case -65543:
                d = new CND_SCORE;
                break;
            case -7:
                d = new CND_PLAYERPLAYING;
                break;
            case -1441797:
                d = new CND_CHOOSEALLINLINE;
                break;
            case -1376261:
                d = new CND_CHOOSEFLAGRESET;
                break;
            case -1310725:
                d = new CND_CHOOSEFLAGSET;
                break;
            case -1245189:
                d = new CND_CHOOSEVALUE;
                break;
            case -1179653:
                d = new CND_PICKFROMID;
                break;
            case -1114117:
                d = new CND_CHOOSEALLINZONE;
                break;
            case -1048581:
                d = new CND_CHOOSEALL;
                break;
            case -983045:
                d = new CND_CHOOSEZONE;
                break;
            case -917509:
                d = new CND_NUMOFALLOBJECT;
                break;
            case -851973:
                d = new CND_NUMOFALLZONE;
                break;
            case -786437:
                d = new CND_NOMOREALLZONE;
                break;
            case -720901:
                d = new CND_CHOOSEFLAGRESET_OLD;
                break;
            case -655365:
                d = new CND_CHOOSEFLAGSET_OLD;
                break;
            case -458757:
                d = new CND_CHOOSEVALUE_OLD;
                break;
            case -393221:
                d = new CND_PICKFROMID_OLD;
                break;
            case -327685:
                d = new CND_CHOOSEALLINZONE_OLD;
                break;
            case -262149:
                d = new CND_CHOOSEALL_OLD;
                break;
            case -196613:
                d = new CND_CHOOSEZONE_OLD;
                break;
            case -131077:
                d = new CND_NUMOFALLOBJECT_OLD;
                break;
            case -65541:
                d = new CND_NUMOFALLZONE_OLD;
                break;
            case -5:
                d = new CND_NOMOREALLZONE_OLD;
                break;
            case -5505022:
                d = new ve;
                break;
            case -5439486:
                d = new we;
                break;
            case -5373950:
                d = new ze;
                break;
            case -5308409:
                d = new Ae;
                break;
            case -5439484:
                d = new CND_QEQUAL;
                break;
            case -5373948:
                d = new CND_QFALSE;
                break;
            case -5308412:
                d = new CND_QEXACT;
                break;
            case -5505015:
                d = new CND_CCAISPAUSED;
                break;
            case -5439479:
                d =
                    new CND_CCAISVISIBLE;
                break;
            case -5373943:
                d = new CND_CCAAPPFINISHED;
                break;
            case -5308407:
                d = new CND_CCAFRAMECHANGED;
                break;
            default:
                switch (e & 4294901760) {
                    case -3211264:
                        d = new lf;
                        break;
                    case -3145728:
                        d = new kf;
                        break;
                    case -3080192:
                        d = new jf;
                        break;
                    case -3014656:
                        d = new hf;
                        break;
                    case -2949120:
                        d = new gf;
                        break;
                    case -2883584:
                        d = new ff;
                        break;
                    case -2818048:
                        d = new Nb;
                        break;
                    case -2752512:
                        d = new Nb;
                        break;
                    case -2686976:
                        d = new ef;
                        break;
                    case -2621440:
                        d = new CND_EXTISSTRIKEOUT;
                        break;
                    case -2555904:
                        d = new CND_EXTISUNDERLINE;
                        break;
                    case -2490368:
                        d =
                            new CND_EXTISITALIC;
                        break;
                    case -2424832:
                        d = new CND_EXTISBOLD;
                        break;
                    case -2359296:
                        d = new CND_EXTCMPVARSTRING;
                        break;
                    case -2293760:
                        d = new CND_EXTPATHNODENAME;
                        break;
                    case -2228224:
                        d = new Ee;
                        break;
                    case -2162688:
                        d = new Fe;
                        break;
                    case -2097152:
                        d = new Ge;
                        break;
                    case -2031616:
                        d = new He;
                        break;
                    case -1966080:
                        d = new CND_EXTNUMBERZONE;
                        break;
                    case -1900544:
                        d = new Ie;
                        break;
                    case -1835008:
                        d = new Je;
                        break;
                    case -1769472:
                        d = new Ke;
                        break;
                    case -1703936:
                        d = new CND_EXTCMPVARFIXED;
                        break;
                    case -1638400:
                        d = new Le;
                        break;
                    case -1572864:
                        d = new Me;
                        break;
                    case -1507328:
                        d = new Ne;
                        break;
                    case -1441792:
                        d = new Oe;
                        break;
                    case -1376256:
                        d = new Pe;
                        break;
                    case -1310720:
                        d = new Qe;
                        break;
                    case -1245184:
                        d = new CND_EXTCMPACC;
                        break;
                    case -1179648:
                        d = new CND_EXTCMPDEC;
                        break;
                    case -1114112:
                        d = new Re;
                        break;
                    case -1048576:
                        d = new Se;
                        break;
                    case -983040:
                        d = new Te;
                        break;
                    case -917504:
                        d = new Ue;
                        break;
                    case -851968:
                        d = new Ve;
                        break;
                    case -786432:
                        d = new We;
                        break;
                    case -720896:
                        d = new CND_EXTINPLAYFIELD;
                        break;
                    case -655360:
                        d = new Xe;
                        break;
                    case -589824:
                        d = new Ye;
                        break;
                    case -524288:
                        d = new Ze;
                        break;
                    case -458752:
                        d =
                            new $e;
                        break;
                    case -393216:
                        d = new CND_EXTBOUNCING;
                        break;
                    case -327680:
                        d = new CND_EXTREVERSED;
                        break;
                    case -262144:
                        d = new af;
                        break;
                    case -196608:
                        d = new bf;
                        break;
                    case -131072:
                        d = new cf;
                        break;
                    case -65536:
                        d = new df;
                        break;
                    default:
                        d = new Hh
                }
        }
        if (null != d && (d.ya = e, d.$d = a.file.ra(), d.va = a.file.ra(), d.ab = a.file.lb(), d.Ve = a.file.lb(), d.Ec = a.file.lb(), d.on = a.file.lb(), d.Gz = a.file.v(), 0 < d.Ec)) {
            d.i = Array(d.Ec);
            for (e = 0; e < d.Ec; e++) d.i[e] = Pa.create(a); - 2686976 == d.ya && (e = d.i[0], 2 == e.ta.length && e.ta[0].code == la.Nm && 0 == e.ta[1].code &&
                (d.Wy = !0, d.name = e.ta[0].Rb.toLowerCase()))
        }
        a.file.seek(b + c);
        return d
    };
    I.$e = function(a) {
        return a.Ve & ba.Km ? !1 : !0
    };
    I.qe = function(a) {
        return a.Ve & ba.Km ? !0 : !1
    };
    I.Np = function(a, b) {
        return a.Ve & ba.Km ? !b : b
    };
    I.kV = function(a) {
        var b = a.g.Td,
            c = b.Hi;
        a = b.Hi = a.Kc;
        if (a == c) return !1;
        a--;
        return a == c ? !1 : !0
    };
    I.qz = function(a, b) {
        var c, d = b.Ev;
        if (null == d) d = new Q, b.Ev = d;
        else
            for (c = 0; c < d.size(); c++)
                if (d.get(c) == a) return !1;
        d.add(a);
        d = b.AH;
        if (null == d) return !0;
        for (c = 0; c < d.size(); c++)
            if (d.get(c) == a) return !1;
        return !0
    };
    I.xF = function(a,
        b) {
        return 0 == b ? !1 : b == a.Kc || b == a.Kc - 1 ? !0 : !1
    };
    Ga.prototype = {
        ba: function() {
            return !1
        },
        L: function() {
            return !1
        }
    };
    Wd.prototype = {
        ba: function() {
            return !0
        },
        L: function() {
            return !0
        }
    };
    I.prototype = {
        KF: function(a) {
            return I.qz(this.Gz, a)
        },
        Dc: function(a, b) {
            var c = a.g.ie(this.va),
                d = a.g.pc,
                e = this.i[0],
                f;
            f = e.ta[0];
            if (0 != (this.Ve & ba.FD))
                for (f = f.code != la.Mt && f.code != la.cP || 0 != e.ta[1].code ? a.W(e) : f.value; null != c;) 0 == b.Ue(c, f, e.tg) && (d--, a.g.nd()), c = a.g.Kd();
            else
                for (; null != c;) f = a.W(e), 0 == b.Ue(c, f, e.tg) && (d--, a.g.nd()), c = a.g.Kd();
            return 0 != d ? !0 : !1
        },
        Zd: function(a, b) {
            for (var c = a.g.ie(this.va), d = a.g.pc; null != c;) 0 == b.wg(c) && (d--, a.g.nd()), c = a.g.Kd();
            return 0 != d ? !0 : !1
        },
        oA: function(a) {
            if (a.g.uh) return a.g.ie(this.va), a.g.ie(this.i[0].la), !1;
            var b = !1;
            0 != (this.Ve & ba.Km) && (b = !0);
            var c = a.g.ie(this.va);
            if (null == c) return I.qe(this);
            var d = a.g.pc,
                e = this.i[0].Ad;
            0 <= e ? (a.Bp[0] = e, a.Bp[1] = this.i[0].la, e = a.Bp) : e = a.g.jc[this.i[0].la & 32767].M;
            var f, g = new Q,
                h, p;
            do {
                h = c.s;
                p = c.o;
                3 <= this.Ec && (h = a.W(this.i[1]), p = a.W(this.i[2]));
                f = a.Qp(c, c.c.Ma, c.c.Ua,
                    c.c.zb, c.c.Ab, h, p, e);
                if (null == f) 0 == b && (d--, a.g.nd());
                else {
                    c = !1;
                    for (h = 0; h < f.size(); h++) p = f.get(h), 0 == (p.Z & N.rd) && (g.add(p), c = !0);
                    1 == b ? 1 == c && (d--, a.g.nd()) : 0 == c && (d--, a.g.nd())
                }
                c = a.g.Kd()
            } while (null != c);
            if (0 == d) return !1;
            c = a.g.ie(this.i[0].la);
            if (null == c) return !1;
            d = a.g.pc;
            if (0 == b) {
                do {
                    for (h = 0; h < g.size() && (p = g.get(h), c != p); h++);
                    h == g.size() && (d--, a.g.nd());
                    c = a.g.Kd()
                } while (null != c);
                return 0 != d ? !0 : !1
            }
            do {
                for (h = 0; h < g.size(); h++)
                    if (p = g.get(h), c == p) {
                        d--;
                        a.g.nd();
                        break
                    } c = a.g.Kd()
            } while (null != c);
            return 0 != d ? !0 :
                !1
        }
    };
    Xd.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = this.i[0];
            0 != b.ic.length && 0 != a.g.bn.length && a.g.fW(b.ic, a.g.bn[a.g.bn.length - 1]);
            return I.$e(this)
        }
    };
    Yd.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return 5 == (67 == this.i[0].code ? this.i[0].value : a.W(this.i[0])) ? I.$e(this) : I.qe(this)
        }
    };
    Zd.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = a.W(this.i[0]),
                c = a.W(this.i[1]);
            return b >= c || 1 <= c && 0 < b && b <= c && a.random(c) <= b ? !0 : !1
        }
    };
    $d.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            a = a.g.Td;
            if (0 != (a.$ & L.Mm)) return I.qe(this);
            a.$ |= L.Mm;
            return I.$e(this)
        }
    };
    ae.prototype = {
        ba: function(a) {
            var b = this.i[0];
            if (2 == b.ta.length && 262143 == b.ta[0].code && 0 == b.ta[1].code) return l.Hb(a.lj, b.ta[0].Rb) ? !0 : !1;
            b = a.Ld(b);
            if (0 == l.Hb(a.lj, b)) return !1;
            a.g.th = !1;
            return !0
        },
        L: function() {
            return !1
        }
    };
    be.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b;
            b = 52 == this.i[0].code ? a.W(this.i[0]) - 1 : this.i[0].value;
            b = a.h.Ji(b);
            a = a.Rc(this.i[1]);
            return k.Fi(b, a, this.i[1].tg)
        }
    };
    Hb.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return a.h.Ji(this.i[0].value) == this.i[1].ta[0].value
        }
    };
    Ib.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return a.h.Ji(this.i[0].value) != this.i[1].ta[0].value
        }
    };
    Jb.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return a.h.Ji(this.i[0].value) <= this.i[1].ta[0].value
        }
    };
    Kb.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return a.h.Ji(this.i[0].value) < this.i[1].ta[0].value
        }
    };
    Lb.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return a.h.Ji(this.i[0].value) >= this.i[1].ta[0].value
        }
    };
    Mb.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return a.h.Ji(this.i[0].value) > this.i[1].ta[0].value
        }
    };
    ce.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            a = a.g.Td;
            if (0 != (a.$ & L.Go)) return !0;
            if (0 != (a.$ & L.Lm)) return !1;
            a.Hi = -2;
            a.$ |= L.Go;
            return !0
        }
    };
    de.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            a = a.g.Td;
            if (0 != (a.$ & L.Mm)) return !1;
            a.$ |= L.Mm;
            return !0
        }
    };
    ee.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = a.g.Td;
            if (0 != (b.$ & L.Lm)) return this.i[0].code == Pa.zu && (b.Hi = a.W(this.i[0]) / 10), !0;
            if (0 != (b.$ & (L.Lt | L.Go))) return !1;
            b.Hi = this.i[0].code == Pa.zu ? a.W(this.i[0]) / 10 : this.i[0].kc / 10;
            b.nn = 0;
            b.$ |= L.Lm;
            return !0
        }
    };
    fe.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = a.Rc(this.i[0]);
            a = a.Rc(this.i[1]);
            return k.Fi(b, a, this.i[1].tg)
        }
    };
    ge.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = this.i[0],
                c = !1;
            45 == b.code ? (b = a.Ld(b), b = a.h.Le.yn(b)) : b = b.rm;
            0 <= b && (c = a.h.Ob.mY(b));
            return c ? I.qe(this) : I.$e(this)
        }
    };
    he.prototype = {
        ba: function() {
            return !0
        },
        L: function() {
            return !0
        }
    };
    ie.prototype = {
        ba: function(a) {
            return 2 < a.Kc ? !1 : !0
        },
        L: function(a) {
            return 2 < a.Kc ? !1 : !0
        }
    };
    je.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = this.i[0];
            b.kp -= a.uq;
            if (0 < b.kp) return !1;
            b.kp += b.jn;
            return !0
        }
    };
    ke.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b;
            b = 22 == this.i[0].code ? a.W(this.i[0]) : this.i[0].kc;
            return a.lf > b ? !1 : !0
        }
    };
    le.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b;
            b = 22 == this.i[0].code ? a.W(this.i[0]) : this.i[0].kc;
            return a.lf > b ? !0 : !1
        }
    };
    me.prototype = {
        ba: function() {
            return !0
        },
        L: function(a) {
            return a.jx == a.Jc ? !0 : !1
        }
    };
    ne.prototype = {
        ba: function() {
            return !0
        },
        L: function(a) {
            return a.jx == a.Jc ? !0 : !1
        }
    };
    oe.prototype = {
        ba: function() {
            return !0
        },
        L: function() {
            return !1
        }
    };
    pe.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = 0;
            switch (this.i[0].key) {
                case 1:
                    b = m.og;
                    break;
                case 2:
                    b = m.Ym;
                    break;
                case 4:
                    b = m.Zo
            }
            return 0 == a.h.wd[b] ? I.qe(this) : I.$e(this)
        }
    };
    qe.prototype = {
        ba: function(a) {
            if (a.g.bc !=
                this.i[0].value) return !1;
            var b = a.g.gC,
                c = this.i[1];
            if (b == c.Ad) return a.g.Wg(a.g.fC), !0;
            c = c.la;
            if (0 == (c & 32768)) return !1;
            var d = a.g.jc[c & 32767],
                e;
            for (e = 0; e < d.M.length && !(0 > d.M[e]); e += 2)
                if (d.M[e] == b) return a.g.dW(c), a.g.Wg(a.g.fC), !0;
            return !1
        },
        L: function(a) {
            return a.g.$w != this.i[0].value ? !1 : a.iH(this.i[1].la, !1)
        }
    };
    re.prototype = {
        ba: function(a) {
            return this.i[0].value != a.g.bc ? !1 : !0
        },
        L: function(a) {
            return this.i[0].value == a.g.$w ? !0 : !1
        }
    };
    se.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return a.iH(this.i[0].la,
                0 != (this.Ve & ba.Km))
        }
    };
    te.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return I.Np(this, a.h.wd[this.i[0].key])
        }
    };
    ue.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return 0 == a.h.wd[this.i[0].key] ? I.qe(this) : I.kV(a) ? I.$e(this) : I.qe(this)
        }
    };
    ve.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Dc(a, this)
        },
        L: function(a) {
            return this.Dc(a, this)
        },
        Ue: function(a, b, c) {
            return k.Ei(a.c.Ab, b, c)
        }
    });
    we.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Dc(a, this)
        },
        L: function(a) {
            return this.Dc(a,
                this)
        },
        Ue: function(a, b, c) {
            return k.Ei(a.c.zb, b, c)
        }
    });
    ze.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Dc(a, this)
        },
        L: function(a) {
            return this.Dc(a, this)
        },
        Ue: function(a, b, c) {
            var d = a.c.Ua,
                e = a.b.Ej(a);
            e && (d = e.un(), d == na.Ox && (d = a.c.Ua));
            return k.Ei(d, b, c)
        }
    });
    Ae.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            for (var b = a.g.ie(this.va), c = a.g.pc, d; null != b;) b = b.Ya, d = a.Rc(this.i[0]), 0 == k.Fi(b, d, this.i[0].tg) && (c--, a.g.nd()), b = a.g.Kd();
            return 0 != c
        }
    };
    Be.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = a.Ld(this.i[0]);
            return l.Hb(b, a.g.bc)
        }
    };
    Ce.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b;
            b = 22 == this.i[0].code ? a.W(this.i[0]) : this.i[0].kc;
            var c = this.i[1];
            if (a.lf >= b) {
                if (c.value == a.Kc) return c.value = a.Kc + 1, !1;
                c.value = a.Kc + 1;
                return !0
            }
            return !1
        }
    };
    De.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = this.i[1];
            if (0 == b.Dx) a = 22 == this.i[0].code ? a.W(this.i[0]) : this.i[0].kc, b.value = a, b.Dx = -1;
            else if (b.value -= a.uq, 0 >= b.value) return a = 22 == this.i[0].code ? a.W(this.i[0]) :
                this.i[0].kc, b.value += a, !0;
            return !1
        }
    };
    Ee.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            a.g.QF(this.va, -1);
            if (0 == a.g.pc) return !1;
            var b = a.random(a.g.pc),
                b = a.g.QF(this.va, b);
            if (0 < this.Ec) {
                var c = this.i[0];
                if (68 == c.code && 0 == c.evaluate(b)) return !1
            }
            a.g.pn(this.va, b);
            return !0
        }
    };
    Fe.prototype = {
        ba: function(a, b) {
            return null == b ? this.L(a) : 0 <= this.$d ? b.Yb != this.$d ? !1 : !0 : this.EG(a, 1)
        },
        L: function(a) {
            return this.EG(a, 0)
        },
        EG: function(a, b) {
            var c = this.va,
                d;
            if (0 == (c & 32768)) return d = a.ca[c], 0 == d.Sd ? !0 : !1;
            if (32767 ==
                (c & 32767)) return !1;
            var c = a.g.jc[c & 32767],
                e = 0,
                f;
            for (f = 0; f < c.M.length; f += 2) {
                d = c.M[f + 1];
                if (0 > d) break;
                d = a.ca[d];
                e += d.Sd
            }
            return 0 == e - b ? !0 : !1
        }
    };
    Ge.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = 0,
                c, d = this.va;
            if (0 == (d & 32768)) c = a.ca[d], b = c.Sd;
            else if (32767 != (d & 32767)) {
                var d = a.g.jc[d & 32767],
                    e;
                for (e = 0; e < d.M.length; e += 2) {
                    c = d.M[e + 1];
                    if (0 > c) break;
                    c = a.ca[c];
                    b += c.Sd
                }
            }
            a = a.W(this.i[0]);
            return k.Ei(b, a, this.i[0].tg)
        }
    };
    He.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            a.g.c0(this.i, 0);
            return 0 ==
                a.g.qV(this.va, this.i[0])
        }
    };
    Ie.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Zd(a, this)
        },
        L: function(a) {
            return this.Zd(a, this)
        },
        wg: function(a) {
            return I.Np(this, 0 == (a.A.aa & D.vi))
        }
    });
    Je.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Zd(a, this)
        },
        L: function(a) {
            return this.Zd(a, this)
        },
        wg: function(a) {
            return 0 != (a.A.aa & D.vi) ? !0 : !1
        }
    });
    Ke.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = a.g.ie(this.va);
            if (null == b) return !1;
            var c = a.g.pc,
                d, e = this.i[1],
                f;
            if (0 != (this.Ve & ba.FD)) {
                f = 53 ==
                    this.i[0].code ? a.W(this.i[0]) : this.i[0].value;
                d = a.Rc(e);
                do 0 <= f && null != b.R ? (b = f < b.R.ob.length ? b.R.zn(f) : 0, 0 == k.Fi(b, d, e.tg) && (c--, a.g.nd())) : (c--, a.g.nd()), b = a.g.Kd(); while (null != b)
            } else {
                do f = 53 == this.i[0].code ? a.W(this.i[0]) : this.i[0].value, 0 <= f && null != b.R ? (b = f < b.R.ob.length ? b.R.zn(f) : 0, d = a.Rc(e), 0 == k.Fi(b, d, e.tg) && (c--, a.g.nd())) : (c--, a.g.nd()), b = a.g.Kd(); while (null != b)
            }
            return 0 != c
        }
    };
    Nb.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = a.g.ie(this.va);
            if (null == b) return !1;
            var c = a.g.pc,
                d = this.i[0].value,
                e = this.i[1],
                f = e.ta[0].value;
            do 0 <= d && null != b.R ? (b = d < b.R.ob.length ? b.R.zn(d) : 0, 0 == k.Fi(b, f, e.tg) && (c--, a.g.nd())) : (c--, a.g.nd()), b = a.g.Kd(); while (null != b);
            return 0 != c
        }
    };
    Le.prototype = l.extend(new I, {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = this.i[0];
            if (68 != b.code) return this.Dc(a, this);
            for (var c = a.g.ie(this.va), d = a.g.pc; null != c;) 0 == b.aW(c) && (d--, a.g.nd()), c = a.g.Kd();
            return 0 != d ? !0 : !1
        },
        Ue: function(a, b) {
            return null != a.R && 0 != (a.R.nc & 1 << (b & 31)) ? !0 : !1
        }
    });
    Me.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Dc(a, this)
        },
        L: function(a) {
            return this.Dc(a, this)
        },
        Ue: function(a, b) {
            return null != a.R && 0 != (a.R.nc & 1 << (b & 31)) ? !1 : !0
        }
    });
    Ne.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Zd(a, this)
        },
        L: function(a) {
            return this.Zd(a, this)
        },
        wg: function(a) {
            var b = a.s,
                c = a.o;
            2 <= this.Ec && (b = a.b.W(this.i[0]), c = a.b.W(this.i[1]));
            return a.b.vl(a, a.c.Ma, a.c.Ua, a.c.zb, a.c.Ab, b, c, 0, ta.Co) || a.b.vl(a, a.c.Ma, a.c.Ua, a.c.zb, a.c.Ab, b, c, 0, ta.ye) ? I.$e(this) : I.qe(this)
        }
    });
    Oe.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Dc(a,
                this)
        },
        L: function(a) {
            return this.Dc(a, this)
        },
        Ue: function(a, b) {
            var c = a.b.da + b,
                d = a.s - a.Ea;
            if (d <= c) return I.$e(this);
            c = a.b.da + a.b.io - b;
            d += a.S;
            if (d >= c) return I.$e(this);
            c = a.b.fa + b;
            d = a.o - a.Fa;
            if (d <= c) return I.$e(this);
            c = a.b.fa + a.b.jo - b;
            d += a.T;
            return d >= c ? I.$e(this) : I.qe(this)
        }
    });
    Pe.prototype = l.extend(new I, {
        ba: function() {
            return !0
        },
        L: function(a) {
            return this.Zd(a, this)
        },
        wg: function(a) {
            return a.c.zc != aa.jE ? !1 : I.xF(a.b, a.Yr)
        }
    });
    Qe.prototype = l.extend(new I, {
        ba: function() {
            return !0
        },
        L: function(a) {
            return this.Zd(a,
                this)
        },
        wg: function(a) {
            return a.c.zc != aa.jE ? !1 : I.xF(a.b, a.An)
        }
    });
    Re.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Dc(a, this)
        },
        L: function(a) {
            return this.Dc(a, this)
        },
        Ue: function(a, b, c) {
            return k.Ei(a.s, b, c)
        }
    });
    Se.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Dc(a, this)
        },
        L: function(a) {
            return this.Dc(a, this)
        },
        Ue: function(a, b, c) {
            return k.Ei(a.o, b, c)
        }
    });
    Te.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Dc(a, this)
        },
        L: function(a) {
            return this.Dc(a, this)
        },
        Ue: function(a, b, c) {
            return k.Ei(a.c.na,
                b, c)
        }
    });
    Ue.prototype = l.extend(new I, {
        ba: function(a, b) {
            for (var c = a.H[a.g.WJ], d = this.$d, e = this.i[0], f = e.Ad;;) {
                if (d == b.Yb) {
                    if (f == c.Yb) break;
                    if (0 <= f) return !1;
                    if (this.ip(a, e.la, c.Yb)) break;
                    return !1
                }
                if (f == b.Yb) {
                    if (d == c.Yb) break;
                    if (0 <= d) return !1;
                    if (this.ip(a, this.va, c.Yb)) break;
                    return !1
                }
                if (0 > d) {
                    if (0 > f) {
                        if (this.ip(a, this.va, b.Yb)) {
                            if (this.ip(a, e.la, c.Yb)) break;
                            if (0 == this.ip(a, e.la, b.Yb)) return !1
                        }
                        if (this.ip(a, this.va, c.Yb)) break
                    } else if (f == c.Yb) break;
                    return !1
                }
                if (0 <= f || d != c.Yb) return !1;
                break
            }
            var g = c.Fb << 16 |
                this.Gz & 65535;
            if (0 == I.qz(g, b)) {
                if (0 == (a.g.Td.$ & L.Ho)) return !1;
                a.g.hq = !0
            }
            g = b.Fb << 16 | this.Gz & 65535;
            if (0 == I.qz(g, c)) {
                if (0 == (a.g.Td.$ & L.Ho)) return !1;
                a.g.hq = !0
            }
            0 > d && a.g.IG(this.va);
            0 > f && a.g.IG(e.la);
            a.g.Wg(b);
            a.g.Wg(c);
            c.D.ja.Ke == a.qd ? b.D.ja.Ke = a.qd : b.D.ja.Ke == a.qd && (c.D.ja.Ke = a.qd);
            return !0
        },
        L: function(a) {
            return this.oA(a)
        },
        ip: function(a, b, c) {
            if (-1 == b) return !1;
            a = a.g.jc[b & 32767];
            for (b = 0; b < a.M.length; b += 2) {
                var d = a.M[b];
                if (0 > d) break;
                if (d == c) return !0
            }
            return !1
        }
    });
    Ve.prototype = l.extend(new I, {
        ba: function(a,
            b) {
            return this.KF(b) ? (a.g.Wg(b), !0) : 0 == (a.g.Td.$ & L.Ho) ? !1 : a.g.hq = !0
        },
        L: function(a) {
            return I.Np(this, this.Zd(a, this))
        },
        wg: function(a) {
            return a.b.vl(a, a.c.Ma, a.c.Ua, a.c.zb, a.c.Ab, a.s, a.o, 0, ta.ye)
        }
    });
    We.prototype = l.extend(new I, {
        ba: function(a, b) {
            return 0 == (this.i[0].value & a.g.bc) ? !1 : this.KF(b) ? (a.g.Wg(b), !0) : 0 == (a.g.Td.$ & L.Ho) ? !1 : a.g.hq = !0
        },
        L: function(a) {
            return this.Zd(a, this)
        },
        wg: function(a) {
            return I.Np(this, 0 != (a.D.wq & Qa.ED))
        }
    });
    Xe.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Zd(a, this)
        },
        L: function(a) {
            return this.Zd(a,
                this)
        },
        wg: function(a) {
            var b = a.s - a.Ea,
                c = a.o - a.Fa;
            return 0 != a.b.Is(b, c, b + a.S, c + a.T) ? I.$e(this) : I.qe(this)
        }
    });
    Ye.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Zd(a, this)
        },
        L: function(a) {
            return this.Zd(a, this)
        },
        wg: function(a) {
            var b = a.s - a.Ea,
                c = a.o - a.Fa;
            return 0 != a.b.Is(b, c, b + a.S, c + a.T) ? I.qe(this) : I.$e(this)
        }
    });
    Ze.prototype = l.extend(new I, {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return 29 == this.i[0].code ? this.Zd(a, this) : this.Dc(a, this)
        },
        wg: function(a) {
            var b = this.i[0].value,
                c;
            for (c = 0; 32 > c; c++)
                if (0 !=
                    (1 << c & b) && a.b.mc(a) == c) return I.$e(this);
            return I.qe(this)
        },
        Ue: function(a, b) {
            return I.Np(this, a.c.Xa == (b & 31))
        }
    });
    $e.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Zd(a, this)
        },
        L: function(a) {
            return this.Zd(a, this)
        },
        wg: function(a) {
            return I.Np(this, 0 == a.c.na)
        }
    });
    af.prototype = l.extend(new I, {
        ba: function(a) {
            return this.oA(a)
        },
        L: function(a) {
            return this.oA(a)
        }
    });
    bf.prototype = l.extend(new I, {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            return 10 == this.i[0].code ? this.Zd(a, this) : this.Dc(a, this)
        },
        wg: function(a) {
            return this.i[0].value !=
                a.ga.ij ? I.qe(this) : 0 != a.ga.ff ? I.$e(this) : I.qe(this)
        },
        Ue: function(a, b) {
            return b != a.ga.ij ? I.qe(this) : 0 != a.ga.ff ? I.$e(this) : I.qe(this)
        }
    });
    cf.prototype = l.extend(new I, {
        ba: function(a, b) {
            if ((10 == this.i[0].code ? this.i[0].value : a.W(this.i[0])) != a.g.bc) return !1;
            a.g.Wg(b);
            return !0
        },
        L: function(a) {
            return 10 == this.i[0].code ? this.Zd(a, this) : this.Dc(a, this)
        },
        wg: function(a) {
            return this.i[0].value != a.ga.ij ? !1 : 0 == a.ga.ff ? !0 : !1
        },
        Ue: function(a, b) {
            return b != a.ga.ij ? !1 : 0 == a.ga.ff ? !0 : !1
        }
    });
    df.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Dc(a,
                this)
        },
        L: function(a) {
            return this.Dc(a, this)
        },
        Ue: function(a, b, c) {
            return k.Ei(a.ga.bg, b, c)
        }
    });
    ef.prototype = {
        ba: function(a, b) {
            this.Wy || (this.name = a.Ld(this.i[0]));
            if (null != a.ko && (a.g.fp || l.Hb(a.ko.name, this.name))) {
                if (1 < this.Ec) {
                    var c = this.i[1];
                    if (0 == c.evaluate(b)) return !1
                }
                a.g.pn(this.va, b);
                return !0
            }
            if (null != a.lo && l.Hb(a.lo.name, this.name)) {
                if (1 < this.Ec && (c = this.i[1], 0 == c.evaluate(b))) return !1;
                a.g.pn(this.va, b);
                return !0
            }
            return !1
        },
        L: function(a) {
            var b = null;
            this.Wy || (this.name = a.Ld(this.i[0]));
            var c = a.ko;
            null != c && (a.g.fp || l.Hb(c.name, this.name)) && c.Ad == this.va && (b = c.index % c.af, b = c.re[b]);
            c = a.lo;
            null != c && l.Hb(c.name, this.name) && c.Ad == this.va && (b = c.index % c.af, b = c.re[b]);
            if (null != b) {
                if (1 < this.Ec && 0 == this.i[1].evaluate(b)) return !1;
                a.g.pn(this.va, b);
                return !0
            }
            return !1
        }
    };
    ff.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = a.g.ie(this.va);
            if (null == b) return !1;
            var c = this.i[0].Ad;
            0 <= c ? (a.Bp[0] = c, a.Bp[1] = this.i[0].la, c = a.Bp) : c = a.g.jc[this.i[0].la & 32767].M;
            var d, e = new Q;
            do {
                var f;
                for (f = 0; f < c.length; f +=
                    2) {
                    var g = a.ca[c[f + 1]];
                    if (g.Da == a.g.Na)
                        for (g = g.Aa; 0 <= g;) {
                            g = a.H[g];
                            if (null == g) break;
                            if (0 == (g.Z & N.rd)) {
                                var h = (g.s - b.s) * (g.s - b.s) + (g.o - b.o) * (g.o - b.o);
                                0 == e.size() ? (d = h, e.add(b)) : h <= d && (h != d && (d = h, e.clear()), e.add(b))
                            }
                            g = g.Ba
                        } else if (0 != g.Sd) {
                            g = g.ib;
                            do {
                                g = a.H[g];
                                if (null == g) break;
                                0 == (g.Z & N.rd) && (h = (g.s - b.s) * (g.s - b.s) + (g.o - b.o) * (g.o - b.o), 0 == e.size() ? (d = h, e.add(b)) : h <= d && (h != d && (d = h, e.clear()), e.add(b)));
                                g = g.xb
                            } while (0 <= g)
                        }
                }
                b = a.g.Kd()
            } while (null != b);
            if (0 == e.size()) return !1;
            1 == e.size() ? a.g.pn(this.va, e.get(0)) :
                a.g.Hz(this.va, e);
            return !0
        }
    };
    gf.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = a.g.ie(this.va);
            if (null == b) return !1;
            var c = a.g.pc,
                d = this.i[1].tg,
                e = null,
                f, g, h = this.va;
            0 != (h & 32768) && (e = a.g.jc[h & 32767], f = e.M[0], g = e.M[1]);
            for (; null != b;) {
                var h = b.La,
                    p = h.Da;
                h.Da = a.g.Na;
                var H = h.Aa;
                h.Aa = b.ea;
                var l = b.Ba;
                b.Ba = -1;
                null != e && (e.M[0] = b.Yb, e.M[1] = h.Tp);
                var m = a.Rc(this.i[0]),
                    q = a.Rc(this.i[1]);
                h.Da = p;
                h.Aa = H;
                b.Ba = l;
                0 == k.Fi(m, q, d) && (c--, a.g.nd());
                b = a.g.Kd()
            }
            null != e && (e.M[0] = f, e.M[1] = g);
            return 0 != c
        }
    };
    hf.prototype =
        l.extend(new I, {
            ba: function(a) {
                return this.Dc(a, this)
            },
            L: function(a) {
                return this.Dc(a, this)
            },
            Ue: function(a, b, c) {
                return k.Ei(a.Ka + 1, b, c)
            }
        });
    jf.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = a.g.ie(this.va);
            if (null == b) return !1;
            var c = null,
                d, e, f = this.va;
            0 != (f & 32768) && (c = a.g.jc[f & 32767], d = c.M[0], e = c.M[1]);
            for (var g, f = new Q; null != b;) {
                if (0 == (b.Z & N.rd)) {
                    var h = b.La,
                        p = h.Da;
                    h.Da = a.g.Na;
                    var H = h.Aa;
                    h.Aa = b.ea;
                    var l = b.Ba;
                    b.Ba = -1;
                    null != c && (c.M[0] = b.Yb, c.M[1] = h.Tp);
                    var k = a.Rc(this.i[0]);
                    0 == f.size() ?
                        (g = k, f.add(b)) : k <= g && (k != g && (g = k, f.clear()), f.add(b));
                    h.Da = p;
                    h.Aa = H;
                    b.Ba = l
                }
                b = a.g.Kd()
            }
            null != c && (c.M[0] = d, c.M[1] = e);
            if (0 == f.size()) return !1;
            1 == f.size() ? a.g.pn(this.va, f.get(0)) : a.g.Hz(this.va, f);
            return !0
        }
    };
    kf.prototype = {
        ba: function(a) {
            return this.L(a)
        },
        L: function(a) {
            var b = a.g.ie(this.va);
            if (null == b) return !1;
            var c = null,
                d, e, f = this.va;
            0 != (f & 32768) && (c = a.g.jc[f & 32767], d = c.M[0], e = c.M[1]);
            for (var g, f = new Q; null != b;) {
                if (0 == (b.Z & N.rd)) {
                    var h = b.La,
                        p = h.Da;
                    h.Da = a.g.Na;
                    var H = h.Aa;
                    h.Aa = b.ea;
                    var l = b.Ba;
                    b.Ba = -1;
                    null != c && (c.M[0] = b.Yb, c.M[1] = h.Tp);
                    var k = a.Rc(this.i[0]);
                    0 == f.size() ? (g = k, f.add(b)) : k >= g && (k != g && (g = k, f.clear()), f.add(b));
                    h.Da = p;
                    h.Aa = H;
                    b.Ba = l
                }
                b = a.g.Kd()
            }
            null != c && (c.M[0] = d, c.M[1] = e);
            if (0 == f.size()) return !1;
            1 == f.size() ? a.g.pn(this.va, f.get(0)) : a.g.Hz(this.va, f);
            return !0
        }
    };
    lf.prototype = l.extend(new I, {
        ba: function(a) {
            return this.Dc(a, this)
        },
        L: function(a) {
            return this.Dc(a, this)
        },
        Ue: function(a, b, c) {
            var d = 0,
                e = a.ak; - 1 != e && (a = a.b.u.ee.Xz(e), null != a && (d = a.zA));
            return k.Ei(d, b, c)
        }
    });
    la.H1 = 8960;
    la.J1 = 9216;
    la.G1 = 9472;
    la.K1 = 9728;
    la.E1 = 9984;
    la.I1 = 10752;
    la.F1 = 11008;
    la.Nm = 262143;
    la.Mt = 65535;
    la.cP = 1572863;
    la.create = function(a) {
        var b = a.ma,
            c, d = a.C();
        switch (d) {
            case 0:
                c = new Ha;
                break;
            case 131072:
                c = new vf;
                break;
            case 262144:
                c = new wf;
                break;
            case 393216:
                c = new xf;
                break;
            case 524288:
                c = new yf;
                break;
            case 655360:
                c = new zf;
                break;
            case 786432:
                c = new Af;
                break;
            case 917504:
                c = new EXP_AND;
                break;
            case 1048576:
                c = new EXP_OR;
                break;
            case 1179648:
                c = new EXP_XOR;
                break;
            case 65535:
                c = new qb;
                break;
            case 131071:
                c = new Bf;
                break;
            case 196607:
                c = new EXP_VARGLO;
                break;
            case 262143:
                c = new rf;
                break;
            case 327679:
                c = new Cf;
                break;
            case 393215:
                c = new Df;
                break;
            case 458751:
            case 524287:
            case 589823:
            case 655359:
                c = new Ob;
                break;
            case 720895:
                c = new Ef;
                break;
            case 786431:
                c = new EXP_COS;
                break;
            case 851967:
                c = new EXP_TAN;
                break;
            case 917503:
                c = new Ff;
                break;
            case 983039:
                c = new EXP_LOG;
                break;
            case 1048575:
                c = new EXP_LN;
                break;
            case 1114111:
                c = new EXP_HEX;
                break;
            case 1179647:
                c = new EXP_BIN;
                break;
            case 1245183:
                c = new EXP_EXP;
                break;
            case 1310719:
                c = new Gf;
                break;
            case 1376255:
                c = new Hf;
                break;
            case 1441791:
                c =
                    new EXP_MID;
                break;
            case 1507327:
                c = new If;
                break;
            case 1572863:
                c = new mf;
                break;
            case 1638399:
                c = new qf;
                break;
            case 1900543:
                c = new EXP_INT;
                break;
            case 1966079:
                c = new EXP_ABS;
                break;
            case 2031615:
                c = new EXP_CEIL;
                break;
            case 2097151:
                c = new EXP_FLOOR;
                break;
            case 2162687:
                c = new EXP_ACOS;
                break;
            case 2228223:
                c = new EXP_ASIN;
                break;
            case 2293759:
                c = new EXP_ATAN;
                break;
            case 2359295:
                c = new EXP_NOT;
                break;
            case 2686975:
                c = new Jf;
                break;
            case 2752511:
                c = new Kf;
                break;
            case 2818047:
                c = new Lf;
                break;
            case 2883583:
                c = new EXP_GETRED;
                break;
            case 2949119:
                c =
                    new EXP_GETGREEN;
                break;
            case 3014655:
                c = new EXP_GETBLUE;
                break;
            case 3080191:
                c = new Mf;
                break;
            case 3145727:
                c = new Nf;
                break;
            case 3211263:
                c = new Of;
                break;
            case 3276799:
                c = new EXP_STRINGGLO;
                break;
            case 3342335:
                c = new pf;
                break;
            case 3407871:
                c = new EXP_LOWER;
                break;
            case 3473407:
                c = new EXP_UPPER;
                break;
            case 3538943:
                c = new EXP_FIND;
                break;
            case 3604479:
                c = new EXP_REVERSEFIND;
                break;
            case 3866623:
                c = new EXP_FLOATTOSTRING;
                break;
            case 3932159:
                c = new Pf;
                break;
            case 3997695:
                c = new Ha;
                break;
            case 4063231:
                c = new Ob;
                break;
            case 4128767:
                c = new EXP_DISTANCE;
                break;
            case 4194303:
                c = new EXP_ANGLE;
                break;
            case 4259839:
                c = new EXP_RANGE;
                break;
            case 4325375:
                c = new hg;
                break;
            case 4456447:
                c = new EXP_RUNTIMENAME;
                break;
            case 4521983:
                c = new sf;
                break;
            case -1:
                c = new Qf;
                break;
            case -65537:
                c = new Rf;
                break;
            case -131073:
                c = new Sf;
                break;
            case 65534:
                c = new EXP_GETSAMPLEMAINVOL;
                break;
            case 131070:
                c = new EXP_GETSAMPLEVOL;
                break;
            case 196606:
                c = new EXP_GETCHANNELVOL;
                break;
            case 262142:
                c = new Ha;
                break;
            case 327678:
                c = new EXP_GETSAMPLEPAN;
                break;
            case 393214:
                c = new EXP_GETCHANNELPAN;
                break;
            case 458750:
                c =
                    new EXP_GETSAMPLEPOS;
                break;
            case 524286:
                c = new Tf;
                break;
            case 589822:
                c = new EXP_GETSAMPLEDUR;
                break;
            case 655358:
                c = new EXP_GETCHANNELDUR;
                break;
            case 720894:
                c = new EXP_GETSAMPLEFREQ;
                break;
            case 786430:
                c = new EXP_GETCHANNELFREQ;
                break;
            case 851966:
                c = new EXP_GETCHANNELSNDNAME;
                break;
            case 65533:
                c = new EXP_GAMLEVEL;
                break;
            case 131069:
                c = new EXP_GAMNPLAYER;
                break;
            case 196605:
                c = new EXP_PLAYXLEFT;
                break;
            case 262141:
                c = new EXP_PLAYXRIGHT;
                break;
            case 327677:
                c = new EXP_PLAYYTOP;
                break;
            case 393213:
                c = new EXP_PLAYYBOTTOM;
                break;
            case 458749:
                c =
                    new EXP_PLAYWIDTH;
                break;
            case 524285:
                c = new EXP_PLAYHEIGHT;
                break;
            case 589821:
                c = new EXP_GAMLEVELNEW;
                break;
            case 655357:
                c = new EXP_GETCOLLISIONMASK;
                break;
            case 720893:
                c = new EXP_FRAMERATE;
                break;
            case 786429:
                c = new EXP_GETVIRTUALWIDTH;
                break;
            case 851965:
                c = new EXP_GETVIRTUALHEIGHT;
                break;
            case 917501:
                c = new EXP_GETFRAMEBKDCOLOR;
                break;
            case 983037:
                c = new Ha;
                break;
            case 1048573:
                c = new Ha;
                break;
            case 1114109:
                c = new Uf;
                break;
            case 1179645:
                c = new EXP_FRAMERGBCOEF;
                break;
            case 1245181:
                c = new Ha;
                break;
            case 65532:
                c = new Vf;
                break;
            case 131068:
                c =
                    new EXP_TIMCENT;
                break;
            case 196604:
                c = new EXP_TIMSECONDS;
                break;
            case 262140:
                c = new EXP_TIMHOURS;
                break;
            case 327676:
                c = new EXP_TIMMINITS;
                break;
            case 393212:
                c = new EXP_EVENTAFTER;
                break;
            case 65530:
                c = new Wf;
                break;
            case 131066:
                c = new Xf;
                break;
            case 196602:
                c = new EXP_MOUSEWHEELDELTA;
                break;
            case 65529:
                c = new EXP_PLASCORE;
                break;
            case 131065:
                c = new EXP_PLALIVES;
                break;
            case 196601:
                c = new EXP_GETINPUT;
                break;
            case 262137:
                c = new EXP_GETINPUTKEY;
                break;
            case 327673:
                c = new EXP_GETPLAYERNAME;
                break;
            case 65531:
                c = new Yf;
                break;
            case 131067:
                c =
                    new EXP_LASTFIXEDVALUE;
                break;
            case 5242883:
                c = new Zf;
                break;
            case 5308419:
                c = new $f;
                break;
            case 5373955:
                c = new ag;
                break;
            case 5439491:
                c = new EXP_STRGETNUMERIC;
                break;
            case 5505027:
                c = new EXP_STRGETNPARA;
                break;
            case 5242882:
                c = new bg;
                break;
            case 5308418:
                c = new cg;
                break;
            case 5373954:
                c = new dg;
                break;
            case 5439490:
                c = new eg;
                break;
            case 5242887:
                c = new fg;
                break;
            case 5308423:
                c = new EXP_CGETMIN;
                break;
            case 5373959:
                c = new gg;
                break;
            case 5439495:
                c = new EXP_CGETCOLOR1;
                break;
            case 5505031:
                c = new EXP_CGETCOLOR2;
                break;
            case 5242889:
                c = new EXP_CCAGETFRAMENUMBER;
                break;
            case 5308425:
                c = new EXP_CCAGETGLOBALVALUE;
                break;
            case 5373961:
                c = new EXP_CCAGETGLOBALSTRING;
                break;
            default:
                switch (d & 4294901760) {
                    case 65536:
                        c = new ig;
                        break;
                    case 131072:
                        c = new jg;
                        break;
                    case 196608:
                        c = new kg;
                        break;
                    case 262144:
                        c = new EXP_EXTACC;
                        break;
                    case 327680:
                        c = new EXP_EXTDEC;
                        break;
                    case 393216:
                        c = new lg;
                        break;
                    case 458752:
                        c = new EXP_EXTXLEFT;
                        break;
                    case 524288:
                        c = new EXP_EXTXRIGHT;
                        break;
                    case 589824:
                        c = new EXP_EXTYTOP;
                        break;
                    case 655360:
                        c = new EXP_EXTYBOTTOM;
                        break;
                    case 720896:
                        c = new mg;
                        break;
                    case 786432:
                        c = new ng;
                        break;
                    case 851968:
                        c = new og;
                        break;
                    case 917504:
                        c = new pg;
                        break;
                    case 983040:
                        c = new qg;
                        break;
                    case 1048576:
                        c = new nf;
                        break;
                    case 1114112:
                        c = new EXP_EXTGETSEMITRANSPARENCY;
                        break;
                    case 1179648:
                        c = new EXP_EXTNMOVE;
                        break;
                    case 1245184:
                        c = new of;
                        break;
                    case 1310720:
                        c = new EXP_EXTGETFONTNAME;
                        break;
                    case 1376256:
                        c = new EXP_EXTGETFONTSIZE;
                        break;
                    case 1441792:
                        c = new EXP_EXTGETFONTCOLOR;
                        break;
                    case 1507328:
                        c = new EXP_EXTGETLAYER;
                        break;
                    case 1572864:
                        c = new EXP_EXTGETGRAVITY;
                        break;
                    case 1638400:
                        c = new rg;
                        break;
                    case 1703936:
                        c = new sg;
                        break;
                    case 1769472:
                        c = new tg;
                        break;
                    case 1835008:
                        c = new ug;
                        break;
                    case 1900544:
                        c = new Ha;
                        break;
                    case 1966080:
                        c = new tf;
                        break;
                    case 2031616:
                        c = new uf;
                        break;
                    case 2097152:
                        c = new vg;
                        break;
                    case 2162688:
                        c = new EXP_EXTANGLE;
                        break;
                    case 2228224:
                        c = new EXP_EXTLOOPINDEX;
                        break;
                    case 2293760:
                        c = new EXP_EXTGETFRICTION;
                        break;
                    case 2359296:
                        c = new EXP_EXTGETRESTITUTION;
                        break;
                    case 2424832:
                        c = new EXP_EXTGETDENSITY;
                        break;
                    case 2490368:
                        c = new EXP_EXTGETVELOCITY;
                        break;
                    case 2555904:
                        c = new EXP_EXTGETANGLE;
                        break;
                    case 2621440:
                        c = new wg;
                        break;
                    case 2686976:
                        c =
                            new xg;
                        break;
                    case 2752512:
                        c = new EXP_EXTGETMASS;
                        break;
                    case 2818048:
                        c = new EXP_EXTGETANGULARVELOCITY;
                        break;
                    case 2883584:
                        c = new EXP_EXTGETNAME;
                        break;
                    case 2949120:
                        c = new EXP_NUMBEROFSELECTED;
                        break;
                    case 3014656:
                        c = new yg;
                        break;
                    default:
                        c = new Fh
                }
        }
        if (null != c && (c.code = d, 0 != d)) {
            var e = a.v(),
                f;
            switch (d) {
                case 262143:
                    c.Rb = a.cb();
                    break;
                case 65535:
                    c.value = a.C();
                    break;
                case 1572863:
                    c.value = a.NJ();
                    break;
                case 1638399:
                    a.wa(4);
                    c.af = a.v();
                    break;
                case 3342335:
                    a.wa(4);
                    c.af = a.v();
                    break;
                default:
                    if (f = d & 65535, 0 != (f & 32768) && (f -= 65536),
                        2 <= f || f == v.pE) switch (c.Ad = a.ra(), c.la = a.ra(), d & 4294901760) {
                        case 1048576:
                            c.af = a.v();
                            break;
                        case 1245184:
                            c.af = a.v()
                    }
            }
            a.seek(b + e)
        }
        return c
    };
    Ob.prototype = {
        evaluate: function(a) {
            a.P[a.K] = ""
        }
    };
    Ha.prototype = {
        evaluate: function(a) {
            a.P[a.K] = 0
        }
    };
    qb.prototype = {
        evaluate: function(a) {
            a.P[a.K] = this.value
        }
    };
    mf.prototype = {
        evaluate: function(a) {
            a.P[a.K] = this.value;
            a.Fe = !0
        }
    };
    nf.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            null == b ? a.P[a.K] = 0 : (b = null != b.R ? b.R.zn(this.af) : 0, l.qA(b) || (a.Fe = !0), a.P[a.K] = b)
        }
    };
    of.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.P[a.K] = null == b ? "" : b.R.pH(this.af)
        }
    };
    pf.prototype = {
        evaluate: function(a) {
            a.P[a.K] = a.h.fH(this.af)
        }
    };
    qf.prototype = {
        evaluate: function(a) {
            a.P[a.K] = a.h.Ji(this.af)
        }
    };
    rf.prototype = {
        evaluate: function(a) {
            a.P[a.K] = this.Rb
        }
    };
    sf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.Ca++;
            var c = a.getExpression();
            a.Ca++;
            var d = a.getExpression();
            a.P[a.K] = b.split(c).join(d)
        }
    };
    tf.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.Ca++;
            var c = a.Ag();
            null !=
                b && null != b.R && 0 <= c && c < b.R.ob.length ? (b = b.R.zn(c), l.qA(b) || (a.Fe = !0), a.P[a.K] = b) : a.P[a.K] = 0
        }
    };
    uf.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.Ca++;
            var c = a.Ag();
            a.P[a.K] = null != b && null != b.R && 0 <= c && c < b.R.we.length ? b.R.pH(c) : ""
        }
    };
    vf.prototype = {
        evaluate: function(a) {
            a.P[a.K] += a.P[a.K + 1]
        }
    };
    wf.prototype = {
        evaluate: function(a) {
            a.kr ? (a.Ca++, a.dg[a.Ca].evaluate(a), a.P[a.K] = -a.P[a.K]) : a.P[a.K] -= a.P[a.K + 1]
        }
    };
    xf.prototype = {
        evaluate: function(a) {
            a.P[a.K] *= a.P[a.K + 1]
        }
    };
    yf.prototype = {
        evaluate: function(a) {
            var b =
                a.P[a.K],
                c = a.P[a.K + 1];
            a.P[a.K] = 0 != c ? 0 == a.Fe ? l.ub(b / c) : a.P[a.K] / a.P[a.K + 1] : 0
        }
    };
    zf.prototype = {
        evaluate: function(a) {
            a.P[a.K] %= a.P[a.K + 1]
        }
    };
    Af.prototype = {
        evaluate: function(a) {
            a.P[a.K] = Math.pow(a.P[a.K], a.P[a.K + 1]);
            a.Fe = !0
        }
    };
    Bf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.Ag();
            a.P[a.K] = a.random(b)
        }
    };
    Cf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.P[a.K] = b.toString()
        }
    };
    Df.prototype = {
        evaluate: function(a) {
            a.Ca++;
            for (var b = a.getExpression(), c = 0; c < b.length && 32 == b.charAt(c);) c++;
            var d =
                0;
            c < b.length && (b = b.substr(c), "0b" == b.substr(0, 2) || "0B" == b.substr(c, 2) ? d = parseInt(b.substr(c + 2), 2) : (c = parseInt(b), d = parseFloat(b), isNaN(d) || isNaN(c) ? d = 0 : (0 == d && 0 != c && (d = c), l.ub(d) != d && (a.Fe = !0))));
            a.P[a.K] = d
        }
    };
    Ef.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.P[a.K] = Math.sin(b / 57.29577951308232);
            a.Fe = !0
        }
    };
    Ff.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.P[a.K] = 0 > b ? 0 : Math.sqrt(b);
            a.Fe = !0
        }
    };
    Gf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.Ca++;
            var c = a.Ag();
            0 > c && (c = 0);
            c > b.length && (c = b.length);
            a.P[a.K] = b.substring(0, c)
        }
    };
    Hf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.Ca++;
            var c = a.Ag();
            0 > c && (c = 0);
            c > b.length && (c = b.length);
            a.P[a.K] = b.substring(b.length - c, b.length)
        }
    };
    If.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.P[a.K] = b.length
        }
    };
    Jf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.Ca++;
            var c = a.getExpression();
            a.P[a.K] = Math.min(b, c)
        }
    };
    Kf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.Ca++;
            var c = a.getExpression();
            a.P[a.K] = Math.max(b, c)
        }
    };
    Lf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.Ag();
            a.Ca++;
            var c = a.Ag();
            a.Ca++;
            b = ((a.Ag() & 255) << 16) + ((c & 255) << 8) + (b & 255);
            a.P[a.K] = b
        }
    };
    Mf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.dg[a.Ca];
            if (0 >= a.dg[a.Ca + 1].code || 1310720 <= a.dg[a.Ca + 1].code) {
                if (b.code == la.Mt) {
                    b = a.Jf.get(b.value);
                    a.Ca++;
                    a.P[a.K] = b.index;
                    return
                }
                if (b.code == la.Nm) {
                    var c = a.Ca,
                        d = b.Rb;
                    a.Ca++;
                    var e;
                    for (e = 0; e < a.Jf.size(); e++)
                        if (b = a.Jf.get(e), l.Hb(b.name, d)) {
                            a.dg[c] = new qb;
                            a.dg[c].code =
                                la.Mt;
                            a.dg[c].value = e;
                            a.P[a.K] = b.index;
                            return
                        } a.P[a.K] = 0;
                    return
                }
            }
            d = a.getExpression();
            for (e = 0; e < a.Jf.size(); e++)
                if (b = a.Jf.get(e), l.Hb(b.name, d)) {
                    a.P[a.K] = b.index;
                    return
                } a.P[a.K] = 0
        }
    };
    Nf.prototype = {
        evaluate: function(a) {
            a.P[a.K] = "\n"
        }
    };
    Of.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.P[a.K] = Math.round(b)
        }
    };
    Pf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.Ca++;
            var c = a.getExpression();
            a.P[a.K] = 57.29577951308232 * Math.atan2(b, c);
            a.Fe = !0
        }
    };
    Qf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            a.P[a.K] = a.getExpression()
        }
    };
    Rf.prototype = {
        evaluate: function() {}
    };
    Sf.prototype = {
        evaluate: function() {}
    };
    Tf.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.Ag();
            a.P[a.K] = a.h.Ob.EX(b - 1)
        }
    };
    Uf.prototype = {
        evaluate: function(a) {
            a.P[a.K] = 0
        }
    };
    Vf.prototype = {
        evaluate: function(a) {
            a.P[a.K] = a.lf
        }
    };
    Wf.prototype = {
        evaluate: function(a) {
            a.P[a.K] = a.JX()
        }
    };
    Xf.prototype = {
        evaluate: function(a) {
            a.P[a.K] = a.KX()
        }
    };
    Yf.prototype = {
        evaluate: function(a) {
            a.P[a.K] = a.Pb
        }
    };
    Zf.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.P[a.K] =
                null == b ? 0 : b.Wb + 1
        }
    };
    $f.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.P[a.K] = null == b ? "" : null != b.Lg ? b.Lg : ""
        }
    };
    ag.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.Ca++;
            if (null == b) a.P[a.K] = "";
            else {
                var c = a.Ag();
                0 > c ? a.P[a.K] = null != b.Lg ? b.Lg : "" : (c >= b.gd && (c = b.gd - 1), a.P[a.K] = b.ka.Rd.Hc[c].uj)
            }
        }
    };
    bg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.Ca++;
            if (null == b) a.P[a.K] = 0;
            else {
                var c = a.Ag();
                a.Ca++;
                var d = a.Ag(),
                    e = 0; - 1 != b.c.Ma && (b = a.h.qa.Ub(b.c.Ma), null != b ? (e = b.CX(c, d), e = l.Qk(e)) : e = 0);
                a.P[a.K] = e
            }
        }
    };
    cg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            null == b ? a.P[a.K] = 0 : (a.P[a.K] = b.c.zb, a.Fe = !0)
        }
    };
    dg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            null == b ? a.P[a.K] = 0 : (a.P[a.K] = b.c.Ab, a.Fe = !0)
        }
    };
    eg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            if (null == b) a.P[a.K] = 0;
            else {
                var c = b.c.Ua,
                    d = a.Ej(b);
                d && (c = d.un(), c == na.Ox && (c = b.c.Ua));
                a.P[a.K] = c
            }
        }
    };
    fg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            null == b ? a.P[a.K] = 0 : (a.P[a.K] = b.Ya, b.ol && (a.Fe = !0))
        }
    };
    gg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.P[a.K] = null == b ? 0 : b.gd
        }
    };
    hg.prototype = {
        evaluate: function(a) {
            a.Ca++;
            var b = a.getExpression();
            a.Ca++;
            var c = a.getExpression();
            a.P[a.K] = b + a.random(c - b + 1)
        }
    };
    ig.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.P[a.K] = null == b ? 0 : b.o
        }
    };
    jg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            if (null == b) a.P[a.K] = 0;
            else {
                var c = 0;
                null != b.ga && (c = b.ga.bg);
                a.P[a.K] = c
            }
        }
    };
    kg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            if (null == b) a.P[a.K] = 0;
            else {
                var c = 0;
                null !=
                    b.ga && (c = b.D.ja.Ur());
                a.P[a.K] = c
            }
        }
    };
    lg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.P[a.K] = null == b ? 0 : a.mc(b)
        }
    };
    mg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.P[a.K] = null == b ? 0 : b.s
        }
    };
    ng.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.P[a.K] = null == b ? 0 : b.Fb << 16 | b.ea & 65535
        }
    };
    og.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.Ca++;
            var c = a.Ag();
            if (null == b) a.P[a.K] = 0;
            else if (null != b.R) {
                var d = 0;
                0 != (1 << (c & 31) & b.R.nc) && (d = 1);
                a.P[a.K] = d
            } else a.P[a.K] = 0
        }
    };
    pg.prototype = {
        evaluate: function(a) {
            var b =
                a.g.gc(this.la);
            if (null == b) a.P[a.K] = 0;
            else {
                var c = 0;
                null != b.ga && (c = b.ga.ij);
                a.P[a.K] = c
            }
        }
    };
    qg.prototype = {
        evaluate: function(a) {
            var b = this.la,
                c;
            if (0 == (b & 32768)) c = a.ca[b], a.P[a.K] = c.Sd;
            else {
                var d = 0;
                if (-1 != b) {
                    var b = a.g.jc[b & 32767],
                        e;
                    for (e = 0; e < b.M.length; e += 2) {
                        c = b.M[e + 1];
                        if (0 > c) break;
                        c = a.ca[c];
                        d += c.Sd
                    }
                }
                a.P[a.K] = d
            }
        }
    };
    rg.prototype = {
        evaluate: function(a) {
            var b = 0,
                c = a.g.gc(this.la);
            if (null != c && (b = c.s, null != c.ga && 0 <= c.c.Ma && (c = a.h.qa.Ki(c.c.Ma, c.c.Ua, c.c.zb, c.c.Ab), null != c))) {
                a.P[a.K] = b + c.ki - c.eb;
                return
            }
            a.P[a.K] =
                b
        }
    };
    sg.prototype = {
        evaluate: function(a) {
            var b = 0,
                c = a.g.gc(this.la);
            if (null != c && (b = c.o, null != c.ga && 0 <= c.c.Ma && (c = a.h.qa.Ki(c.c.Ma, c.c.Ua, c.c.zb, c.c.Ab), null != c))) {
                a.P[a.K] = b + c.mi - c.Za;
                return
            }
            a.P[a.K] = b
        }
    };
    tg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            if (null == b) a.P[a.K] = 0;
            else {
                var c = b.A.qb,
                    b = b.A.nb,
                    d = 0;
                switch (c & D.Lq) {
                    case D.SC:
                        d = 255 - (b >> 24 & 255);
                        break;
                    case D.kg:
                        d = 255 - (128 == b ? 0 : 255 - 2 * b);
                        break;
                    default:
                        c & D.Cm && (d = 255 - (b >> 24 & 255))
                }
                a.P[a.K] = d
            }
        }
    };
    ug.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            if (null == b) a.P[a.K] = 0;
            else {
                var c = b.A.qb,
                    b = b.A.nb;
                a.P[a.K] = (c & D.Lq) == D.SC || 0 != (c & D.Cm) ? l.Qk(b & 16777215) : 16777215
            }
        }
    };
    vg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.Ca++;
            var c = a.getExpression();
            a.Ca++;
            var d = a.getExpression();
            null == b ? a.P[a.K] = 0 : (c -= b.s, b = d - b.o, a.P[a.K] = l.wU(Math.sqrt(c * c + b * b)))
        }
    };
    wg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.P[a.K] = null == b ? 0 : b.S
        }
    };
    xg.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            a.P[a.K] = null == b ? 0 : b.T
        }
    };
    yg.prototype = {
        evaluate: function(a) {
            var b =
                0,
                c = a.g.gc(this.la);
            null != c && (c = c.ak, -1 != c && (c = a.u.ee.Xz(c), null != c && (b = c.zA)));
            a.P[a.K] = b
        }
    };
    xa.FusionVersion = "Clickteam Fusion HTML5 Exporter Build 285.1";
    m.ti = 4;
    m.W3 = 770;
    m.Vq = 8;
    m.b2 = 2;
    m.rQ = 4;
    m.c2 = 8;
    m.fy = 16;
    m.a2 = 128;
    m.Z1 = 256;
    m.Y1 = 512;
    m.qQ = 1024;
    m.X1 = 2048;
    m.pQ = 1;
    m.nQ = 4;
    m.oQ = 8;
    m.U1 = 64;
    m.S1 = 128;
    m.R1 = 512;
    m.T1 = 1024;
    m.Qt = 4096;
    m.W1 = 4096;
    m.V1 = 8192;
    m.V3 = 1;
    m.Hu = 0;
    m.Xo = 1;
    m.Iy = 2;
    m.Vo = 3;
    m.Gu = 4;
    m.Fu = 5;
    m.Wo = 6;
    m.a4 = 7;
    m.aE = 203;
    m.s4 = 37;
    m.E4 = 39;
    m.H4 = 38;
    m.p4 = 40;
    m.og = 200;
    m.Zo = 201;
    m.Ym = 202;
    m.u4 = 96;
    m.v4 = 97;
    m.w4 = 98;
    m.x4 =
        99;
    m.y4 = 100;
    m.z4 = 101;
    m.A4 = 102;
    m.B4 = 103;
    m.C4 = 104;
    m.D4 = 105;
    m.F4 = 83;
    m.o4 = 68;
    m.q4 = 69;
    m.I4 = 88;
    m.r4 = 123;
    m.G4 = 16;
    m.n4 = 17;
    m.t4 = 18;
    m.m1 = 0;
    m.h1 = 1;
    m.i1 = 2;
    m.j1 = 3;
    m.k1 = 4;
    m.l1 = 5;
    m.PC = 4;
    m.J0 = 128;
    m.DM = 1;
    m.Nx = 4;
    m.C0 = 65536;
    m.Mx = 32768;
    m.FM = 1048576;
    m.EM = 8388608;
    m.Uk = 16777216;
    m.B0 = 33554432;
    m.CM = 67108864;
    m.fe = 10;
    m.MD = 592880741;
    m.sf = 1770410840;
    xa.loadApplication = Pb;
    xa.loadInfo = zg;
    m.prototype = {
        JY: function() {
            var a = this.cs.C();
            0 > this.Jv && (this.Jv = a);
            a != this.Jv && (this.cs.rC(!0), a = this.cs.cb(), window.open(this.Iv + a, "_self"));
            this.bs = 25
        },
        load: function() {
            this.bZ = this.file.v();
            this.gv = 1;
            this.Yv = new U;
            var a = this.file.C();
            this.Yv.getFile(this.path.substring(0, this.path.length - 1) + this.gv.toString(), Pb, a)
        },
        EY: function() {
            this.gv++;
            if (this.gv > this.bZ) {
                var a = (new t(this.Yv.Be, "content")).file("Application.ccj").cF();
                this.Yv = null;
                this.file = new U;
                this.file.r_(a);
                this.digest();
                this.uC()
            } else a = this.file.C(), this.Yv.getFile(this.path.substring(0, this.path.length - 1) + this.gv.toString(), Pb, a)
        },
        digest: function() {
            this.file.seek(0);
            var a =
                this.file.QJ(4);
            this.md = !1;
            80 == a[0] && 65 == a[1] && 77 == a[2] && 85 == a[3] && (this.md = !0);
            this.file.rC(this.md);
            this.file.wa(8);
            this.file.wa(4);
            this.ld = new Mg;
            this.qa = new Hg(this);
            this.Qc = new Ig(this);
            this.Le = new Jg(this);
            this.Ob = new ha(this);
            for (var b, c = 0; 32639 != c;)
                if (c = this.file.v(), this.file.v(), b = this.file.C(), 0 != b) {
                    a = this.file.ma + b;
                    switch (c) {
                        case 8739:
                            this.DY();
                            this.Pz = Array(this.Nh);
                            this.ZG = Array(this.Nh);
                            this.YG = Array(this.Nh);
                            this.Qz = Array(this.Nh);
                            for (b = 0; b < this.Nh; b++) this.Qz[b] = null;
                            break;
                        case 8773:
                            this.Sa =
                                this.file.C();
                            this.file.C();
                            this.file.C();
                            this.file.v();
                            this.file.v();
                            break;
                        case 8740:
                            this.appName = this.file.cb();
                            break;
                        case 8774:
                            this.file.C();
                            break;
                        case 8750:
                            this.file.cb();
                            break;
                        case 8782:
                            this.RA = this.file.cb();
                            break;
                        case 8754:
                            this.IY();
                            break;
                        case 8755:
                            this.HY();
                            break;
                        case 8745:
                        case 8767:
                            this.qv = new jb(this);
                            this.qv.wV(this.file);
                            this.ld.yk(this.file);
                            break;
                        case 8747:
                            this.FY(b);
                            break;
                        case 8778:
                            this.Hs = this.file.C();
                            this.zJ = this.file.C();
                            this.AJ = this.file.C();
                            this.CJ = this.file.C();
                            this.DJ = this.file.C();
                            this.BJ = this.file.sc();
                            this.Xn = this.file.C(); - 1 != this.Xn && (this.file.L_(4), this.Xn = this.file.sc());
                            this.Iw = this.file.C();
                            this.GA = !0;
                            break;
                        case 13107:
                            this.Pz[this.vp] = this.file.ma;
                            for (var d = 0; 32639 != d;)
                                if (d = this.file.v(), this.file.v(), b = this.file.C(), 0 != b) {
                                    var e = this.file.ma + b;
                                    switch (d) {
                                        case 13108:
                                            0 == this.vp && (this.file.wa(8), this.file.sc());
                                            break;
                                        case 13110:
                                            this.Qz[this.vp] = this.file.cb();
                                            break;
                                        case 13129:
                                            this.ZG[this.vp] = this.file.C();
                                            this.YG[this.vp] = this.file.C();
                                            break;
                                        case 13128:
                                            var f = b / 6;
                                            for (b =
                                                0; b < f; b++) {
                                                var g = this.file.v();
                                                this.file.wa(4);
                                                0 != g && (this.wc[g] = 1, this.Gf = Math.max(this.Gf, g + 1))
                                            }
                                    }
                                    this.file.seek(e)
                                } this.vp++;
                            break;
                        case 8760:
                            d = this.file.C();
                            this.mn = Array(d);
                            for (b = 0; b < d; b++) this.mn[b] = new Ag(this), this.mn[b].yk();
                            break;
                        case 26214:
                            this.qa.yk(this.file);
                            break;
                        case 26215:
                            this.Qc.yk(this.file);
                            break;
                        case 26216:
                            this.Le.yk(this.file)
                    }
                    this.file.seek(a)
                } this.context = new Wa(this.canvas);
            this.Ob.A_(0 != (this.rn & m.qQ));
            null == this.kb && (this.Yf = new Ta)
        },
        zK: function(a, b, c, d, e, f) {
            this.kb = a;
            this.Tn =
                c;
            this.Yf = d;
            this.vC = b;
            this.CB = e;
            this.BB = f
        },
        bY: function() {
            this.Ci = !1;
            this.sK = 0;
            this.h_ = this.i_ = 1;
            this.k_ = this.j_ = this.Ta / 2;
            this.m_ = this.l_ = this.fb / 2
        },
        rx: function() {
            window.setTimeout(vb.bind(this), 20)
        },
        uC: function() {
            (this.Hv = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent)) && 0 < this.Le.xc && (this.Ng = new sb(this), this.Ng.NY());
            this.fq();
            this.wd = Array(m.aE);
            var a;
            for (a = 0; a < m.aE; a++) this.wd[a] = !1;
            this.canvas.Oc = this;
            if (null == this.kb) {
                var b = this;
                window.addEventListener("keypress",
                    function(a) {
                        b.RV(a)
                    }, !1);
                window.addEventListener("keydown", function(a) {
                    b.vG(a)
                }, !1);
                window.addEventListener("keyup", function(a) {
                    b.wG(a)
                }, !1);
                window.addEventListener("blur", function() {
                    b.hasFocus = !1
                }, !1);
                window.addEventListener("focus", function() {
                    b.hasFocus = !0
                }, !1);
                if (window !== window.top) try {
                    var c = window.top;
                    c.addEventListener("focus", function() {
                        b.hasFocus = !0;
                        b.canvas.focus()
                    });
                    c.addEventListener("blur", function() {
                        b.hasFocus = !1
                    })
                } catch (d) {}
                window.addEventListener("resize", function() {
                    b.fq()
                }, !1);
                document.addEventListener("blur",
                    function() {
                        b.hasFocus = !1
                    }, !1);
                document.addEventListener("focus", function() {
                    b.hasFocus = !0
                }, !1);
                document.addEventListener("fullscreenchange", function() {
                    b.fullScreen = document.E5;
                    b.fq()
                }, !1);
                document.addEventListener("mozfullscreenchange", function() {
                    b.fullScreen = document.mozFullScreen;
                    b.fq()
                }, !1);
                document.addEventListener("webkitfullscreenchange", function() {
                    b.fullScreen = document.webkitIsFullScreen;
                    b.fq()
                }, !1);
                this.canvas.addEventListener("mousemove", function(a) {
                        b.mw(a, b.canvas);
                        a.preventDefault && a.preventDefault()
                    },
                    !1);
                this.canvas.addEventListener("mousedown", function(a) {
                    b.BI(a);
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("mouseup", function(a) {
                    b.DI(a);
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("mouseout", function(a) {
                    b.CI(a);
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("click", function(a) {
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("dblclick", function(a) {
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("contextmenu",
                    function(a) {
                        a.preventDefault && a.preventDefault()
                    }, !1);
                a = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
                document.attachEvent ? document.attachEvent("on" + a, function(a) {
                    b.EI(a)
                }) : document.addEventListener && document.addEventListener(a, function(a) {
                    b.EI(a)
                }, !1);
                document.onselectstart = function() {
                    return !1
                };
                this.canvas.onselectstart = function(a) {
                    a.preventDefault && a.preventDefault();
                    return !1
                };
                this.wm = this.nY();
                this.gg = new Q;
                this.Tc = Array(m.fe);
                this.rl = Array(m.fe);
                this.Fq = Array(m.fe);
                this.rb =
                    Array(m.fe);
                this.sb = Array(m.fe);
                for (a = 0; a < m.fe; a++) this.Tc[a] = m.sf, this.rb[a] = 0, this.sb[a] = 0, this.rl[a] = !1, this.Fq[a] = 0;
                this.wm && (this.canvas.addEventListener("touchstart", function(a) {
                    b.xx(a);
                    a.preventDefault && a.preventDefault()
                }, !1), this.canvas.addEventListener("touchmove", function(a) {
                    b.$K(a);
                    a.preventDefault && a.preventDefault()
                }, !1), this.canvas.addEventListener("touchend", function(a) {
                    b.ut(a);
                    a.preventDefault && a.preventDefault()
                }, !1), this.canvas.addEventListener("touchcancel", function(a) {
                    b.ut(a);
                    a.preventDefault && a.preventDefault()
                }, !1));
                window.focus();
                this.rx()
            } else
                for (this.wm = this.kb.wm, this.gg = new Q, this.Tc = Array(m.fe), this.rl = Array(m.fe), this.Fq = Array(m.fe), this.rb = Array(m.fe), this.sb = Array(m.fe), a = 0; a < m.fe; a++) this.Tc[a] = m.sf, this.rb[a] = 0, this.sb[a] = 0, this.rl[a] = !1, this.Fq[a] = 0;
            this.Sb = this.zm = this.ym = 0;
            this.vg = -2;
            this.U = new k(this)
        },
        fq: function() {
            var a = this.Ta,
                b = this.fb,
                c, d;
            this.fullScreen || this.rn & m.fy ? (c = window.innerWidth, d = window.innerHeight, document.documentElement.style.overflow =
                "hidden", document.body.scroll = "no") : (c = a, d = b);
            c /= a;
            d /= b;
            if (this.Sa & m.DM || this.rn & m.fy && this.rn & m.rQ) c = d = Math.min(c, d);
            if (c != this.hd || d != this.jd) this.hd = c, this.jd = d, this.canvas.width = Math.floor(this.hd * a), this.canvas.height = Math.floor(this.jd * b), this.context.nt(this.hd, this.jd);
            this.U && this.U.nl()
        },
        nY: function() {
            var a = "Android;webOS;iPhone;iPad;iPod;Blackberry;Windows Phone;Touch".split(";"),
                b = navigator.userAgent,
                c;
            for (c in a)
                if (0 <= b.indexOf(a[c])) return !0;
            return !1
        },
        yl: function(a) {
            this.iv.Ts(a);
            this.bk++
        },
        hr: function(a) {
            this.ur.add(a);
            this.ck++;
            this.Ri = !0
        },
        rt: function() {
            this.Iv && (this.bs--, 0 > this.bs && (this.bs = 1E9, this.cs = new U, this.cs.getFile(this.Iv + "info.dat", zg)));
            this.kc = (new Date).getTime();
            if (this.wZ(!1)) {
                if (this.Ri) {
                    if (null == this.zk) {
                        var a = this.Ii;
                        this.GA ? (this.zk = 0 == this.Hs ? new Bg(this) : new Dg(this), 0 == this.Hs && -1 != this.Xn && (a = this.Xn)) : this.zk = new Cg(this);
                        this.EJ = !1;
                        this.bC = !0;
                        null == this.kb && (this.frame.Rv ? this.context.$u(0, 0, this.canvas.width, this.canvas.height) : this.context.Dd(0, 0, this.Ta,
                            this.fb, a), this.rx());
                        return
                    }
                    if (null != this.zk && 0 == this.EJ) {
                        this.EJ = this.zk.load();
                        null == this.kb && this.rx();
                        return
                    }
                    for (; 0 < this.ur.size() && this.iv.size() < this.DV;) a = this.ur.get(0), this.iv.add(a), this.ur.ao(0), a.xz();
                    this.Ob.FV();
                    a = !1;
                    0 == this.ur.size() && 0 == this.iv.size() && (a = !0);
                    null == this.zk || 0 == (this.Sa & m.Uk) && 0 == (this.frame.zp & O.VQ) || (this.bC || (this.zk.reset(), this.bC = !0), this.zk.step(), a = this.zk.pA());
                    a && (this.bC = !1, this.U.resume(), this.U.Sj(), this.Ri = !1, this.qa.rh(), this.Le.rh(), this.Qc.rh(), this.bk =
                        this.ck = 0, this.az && (this.az = !1, 0 != this.U.yz() ? this.Sb = m.Fu : (this.Sb = m.Vo, this.TK(this.ji), this.ji = null)));
                    null == this.kb && this.rx()
                } else null == this.kb && (null == this.xe ? (this.context.aC(0 != (this.Sa & m.Nx)), this.Jw ? this.context.fm(this.Jw, 0, 0, this.Ta, this.fb, 0, 0) : this.frame.Rv ? this.context.$u(0, 0, this.Ta, this.fb) : this.context.Dd(0, 0, this.Ta, this.fb, this.Ii), a = this.context.wb, this.Ci && (bRestore = !0, a.save(), a.translate(this.j_, this.l_), 0 != this.sK && a.rotate(.0174532925 * -this.sK), a.scale(Math.max(.001, this.h_),
                        Math.max(.001, this.i_)), a.translate(-this.k_, -this.m_)), this.Yf.fc(this.context, 0, 0), this.Ci && a.restore(), this.ek && this.hb.fc(this.context), this.IC && (this.IC--, this.Ex || (a = new Na, a.dv(), a.Gb = 16, this.Ex = new pa(this, this.Ta, 30), this.Ex.iI(16711680), this.Ex.kw(window.FusionVersion, l.Hm | l.Wk, null, 16777215, a, 1, 10526880)), this.Ex.fc(this.context, 0, 0, 0, 0))) : (this.context.aC(), this.context.fm(this.xe, 0, 0, this.Ta, this.fb, 0, 0)), 0 != (this.Oh & m.Qt) && window.requestAnimationFrame ? window.requestAnimationFrame(vb) :
                    (a = (new Date).getTime() - this.kc, a = Math.max(1E3 / this.Vz - a, 1), window.setTimeout(vb, a)));
                return !0
            }
            this.CG();
            return !1
        },
        xG: function(a, b, c, d) {
            this.Ri || (null == this.xe ? (d || this.context.Dd(b, c, this.CB, this.BB, this.Ii), this.context.clip(b, c, this.CB, this.BB), this.Yf.fc(this.context, 0, 0), this.context.Z_()) : (this.context.aC(), this.context.fm(this.xe, b, c, this.Ta, this.fb, 0, 0)))
        },
        EU: function() {
            0 == (this.Sa & m.FM) && (this.hasFocus ? this.bz && (this.U.resume(), this.bz = !1) : (this.U.pause(this.Oh & m.oQ), this.bz = !0))
        },
        wZ: function(a) {
            this.EU();
            var b = !0,
                c = !0;
            do switch (this.Sb) {
                case m.Hu:
                    if (this.$X(), this.yc = this.vC, this.Sb = 1, this.qY(), a) {
                        b = !1;
                        break
                    }
                case m.Xo:
                    this.Q_();
                    break;
                case m.Iy:
                    0 == this.OY() ? (this.WV(), this.Sb != m.Wo && this.Sb != m.Hu || this.Er()) : b = !1;
                    break;
                case m.Vo:
                    this.U.yz();
                    0 != this.U.cc ? this.O_() ? this.Sb = m.Gu : this.Er() : b = !1;
                    break;
                case m.Gu:
                    0 == this.PY() ? (this.DG(), this.Sb != m.Wo && this.Sb != m.Hu || this.Er()) : b = !1;
                    break;
                case m.Fu:
                    this.Er();
                    break;
                default:
                    b = !1
            }
            while (1 == b);
            this.Sb == m.Wo && (c = !1);
            return c
        },
        CG: function() {
            null != this.Ob && this.Ob.ux()
        },
        Q_: function() {
            this.yc != this.vg && (this.frame = new O(this), this.frame.GY(this.yc));
            this.Ii = this.frame.RH;
            this.vg = this.yc;
            this.frame.Kl = this.frame.Ll = 0;
            this.frame.vA = this.frame.wA = 0;
            this.frame.bK = !1;
            this.bY();
            var a;
            null != this.kb ? this.ni = this.li = 0 : (this.li = this.Ta / 2 - this.frame.es / 2, this.ni = this.fb / 2 - this.frame.ds / 2);
            for (a = 0; a < this.frame.za; a++) this.frame.sa[a].xV(this.li, this.ni);
            this.frame.vc & O.jR && (document.title = this.frame.$G);
            this.Jw = null;
            this.frame.vc & O.kR && (this.Jw = this.ji);
            this.frame.vc & O.lR && (this.frame.Rv = !0);
            this.U.u_(this.frame);
            this.U.aY(null != this.frame.Ir);
            this.Sb = m.Vo;
            null != this.frame.Ir ? this.Ri ? this.az = !0 : 0 != this.U.yz() ? this.Sb = m.Fu : (this.Sb = m.Vo, this.TK(this.ji), this.ji = null) : this.ji = null;
            this.Ri ? this.U.pause(!0) : this.U.Sj()
        },
        VJ: function() {
            null != this.kb ? this.ni = this.li = 0 : (this.li = this.Ta / 2 - this.frame.es / 2, this.ni = this.fb / 2 - this.frame.ds / 2);
            var a;
            for (a = 0; a < this.frame.za; a++) this.frame.sa[a].a_(this.li, this.ni)
        },
        Er: function() {
            var a;
            a = this.U.rY(!1);
            if (0 != (this.Oh & m.nQ)) this.Sb = m.Wo;
            else switch (l.vR(a)) {
                case 1:
                    this.yc =
                        this.vg + 1;
                    1 == this.Hs && this.yc == this.Iw && this.yc++;
                    this.Sb = m.Xo;
                    this.yc >= this.Nh && (this.Sb = m.Wo);
                    break;
                case 2:
                    this.yc = Math.max(0, this.vg - 1);
                    1 == this.Hs && this.yc == this.Iw && (0 == this.yc ? this.yc = this.vg : this.yc--);
                    this.Sb = m.Xo;
                    break;
                case 3:
                    this.Sb = m.Xo;
                    0 != (l.Tt(a) & 32768) ? (this.yc = l.Tt(a) & 32767, this.yc >= this.Nh && (this.yc = this.Nh - 1), 0 > this.yc && (this.yc = 0)) : l.Tt(a) < this.Nr ? (this.yc = this.Mr[l.Tt(a)], -1 == this.yc && (this.yc = this.vg + 1)) : this.yc = this.vg + 1;
                    break;
                case 4:
                    this.Sb = m.Hu;
                    this.yc = this.vC;
                    break;
                default:
                    this.Sb =
                        m.Wo
            }
            this.Sb == m.Xo && (0 > this.yc || this.yc >= this.Nh) && (this.Sb = this.vg);
            if (this.Sb != m.Xo || this.yc != this.vg) {
                for (a = 0; a < this.frame.za; a++) this.frame.sa[a].kG();
                this.frame = null;
                this.vg = -1
            }
        },
        aA: function() {
            null == this.DC && (this.DC = new fh(this));
            return this.DC
        },
        TK: function(a) {
            var b, c, d = this.frame.Ir;
            if (null != d) {
                b = document.createElement("canvas");
                b.width = this.Ta;
                b.height = this.fb;
                c = document.createElement("canvas");
                c.width = this.Ta;
                c.height = this.fb;
                var e = new Wa(c);
                e.Dd(0, 0, this.Ta, this.fb, this.Ii);
                this.Yf.fc(e,
                    0, 0);
                e = new Wa(b);
                0 != (d.wt & Ea.Iu) ? e.Dd(0, 0, this.Ta, this.fb, d.vt) : (e.Dd(0, 0, this.Ta, this.fb, this.aH), null != a && e.fm(a, 0, 0, a.width, a.height, 0, 0));
                this.xe = document.createElement("canvas");
                this.xe.width = this.Ta;
                this.xe.height = this.fb;
                this.xe.getContext("2d").drawImage(b, 0, 0);
                this.transition = this.aA().np(d, this.xe, b, c);
                if (null != this.transition) return this.Sb = m.Iy, !0
            }
            this.xe = null;
            this.Sb = m.Vo;
            this.U.VF();
            return !1
        },
        OY: function() {
            if (null != this.transition) {
                if (this.transition.Mv()) return !1;
                this.transition.Mc(w.Ky);
                return !0
            }
            return !1
        },
        WV: function() {
            null != this.transition && (this.transition.end(), this.xe = this.transition = null, this.Sb == m.Iy && (this.Sb = m.Vo), this.U.VF());
            return !0
        },
        O_: function() {
            var a, b, c = this.frame.Kz;
            if (null != c) {
                a = document.createElement("canvas");
                a.width = this.Ta;
                a.height = this.fb;
                b = document.createElement("canvas");
                b.width = this.Ta;
                b.height = this.fb;
                var d = new Wa(a);
                d.Dd(0, 0, this.Ta, this.fb, this.Ii);
                this.Yf.fc(d, 0, 0);
                d = new Wa(b);
                0 != (c.wt & Ea.Iu) ? d.Dd(0, 0, this.Ta, this.fb, c.vt) : d.Dd(0, 0, this.Ta, this.fb, 0);
                this.xe = document.createElement("canvas");
                this.xe.width = this.Ta;
                this.xe.height = this.fb;
                this.xe.getContext("2d").drawImage(a, 0, 0);
                this.transition = this.aA().np(c, this.xe, a, b);
                if (null != this.transition) return this.Sb = m.Gu, !0
            }
            this.xe = null;
            return !1
        },
        PY: function() {
            if (null != this.transition) {
                if (this.transition.Mv()) return this.DG(), !1;
                this.transition.Mc(w.Ju)
            }
            return !0
        },
        DG: function() {
            null != this.transition && (this.ji = this.transition.F, this.transition.end(), this.xe = this.transition = null, this.Sb == m.Gu && (this.Sb =
                m.Fu));
            return !0
        },
        DY: function() {
            this.file.wa(4);
            this.rn = this.file.v();
            this.Oh = this.file.v();
            this.file.v();
            this.file.v();
            this.Ta = this.file.v();
            this.fb = this.file.v();
            this.cH = this.file.C();
            this.bH = this.file.C();
            var a, b;
            this.vJ = Array(m.ti);
            for (a = 0; a < m.ti; a++) this.vJ[a] = this.file.v();
            this.DB = Array(m.ti * m.Vq);
            for (a = 0; a < m.ti; a++)
                for (b = 0; b < m.Vq; b++) this.DB[a * m.Vq + b] = this.file.v();
            this.aH = this.file.sc();
            this.Nh = this.file.C();
            this.Vz = this.file.C();
            this.file.wa(1);
            this.file.wa(3)
        },
        IY: function() {
            this.Kp = this.file.v();
            this.fA = Array(this.Kp);
            this.uH = Array(this.Kp);
            var a;
            for (a = 0; a < this.Kp; a++) this.fA[a] = this.file.C();
            this.file.LZ(this.uH)
        },
        HY: function() {
            this.us = this.file.C();
            this.eA = Array(this.us);
            var a;
            for (a = 0; a < this.us; a++) this.eA[a] = this.file.cb()
        },
        FY: function(a) {
            this.Nr = a / 2;
            this.Mr = Array(this.Nr);
            for (a = 0; a < this.Nr; a++) this.Mr[a] = this.file.v()
        },
        TQ: function(a) {
            return null == this.Mr || -1 == a || a >= this.Nr ? -1 : this.Mr[a]
        },
        Wz: function(a) {
            if (this.gA) {
                var b;
                for (b = 0; b < this.gA.size(); b++)
                    if (gFont = this.gA.get(b), gFont.fV(a)) return gFont
            }
            return a
        },
        qY: function() {
            this.jl = null
        },
        $X: function() {
            var a;
            if (null == this.kb || null != this.kb && 0 == (this.Tn & Z.xN))
                for (this.fs = Array(m.ti), a = 0; a < m.ti; a++) this.fs[a] = this.bH ^ 4294967295;
            else this.fs = null;
            if (null == this.kb || null != this.kb && 0 == (this.Tn & Z.zN))
                for (this.ht = Array(m.ti), a = 0; a < m.ti; a++) this.ht[a] = this.cH ^ 4294967295;
            else this.ht = null;
            this.wJ = Array(m.ti);
            for (a = 0; a < m.ti; a++) this.wJ[a] = "";
            if (null == this.kb || null != this.kb && 0 == (this.Tn & Z.$C))
                for (this.Pr = Array(this.Kp), a = 0; a < this.Kp; a++) this.Pr[a] = this.fA[a];
            else this.Pr =
                null;
            if (null == this.kb || null != this.kb && 0 == (this.Tn & Z.$C))
                for (this.Or = Array(this.us), a = 0; a < this.us; a++) this.Or[a] = this.eA[a];
            else this.Or = null
        },
        hH: function() {
            for (var a = this; null == a.fs;) a = this.kb;
            return a.fs
        },
        oH: function() {
            for (var a = this; null == a.ht;) a = this.kb;
            return a.ht
        },
        sX: function() {
            for (var a = this; null != a.kb && 0 != (a.Tn & Z.yN);) a = a.kb;
            return a.DB
        },
        xX: function() {
            for (var a = this; null == a.Pr;) a = a.kb;
            return a.Pr
        },
        wX: function() {
            for (var a = this; null == a.Or;) a = a.kb;
            return a.Or
        },
        lz: function(a) {
            var b = this.xX();
            if (0 >
                a || 1E3 < a) return null;
            var c = b.length;
            if (a + 1 > c)
                for (; c < a + 1; c++) b.push(0);
            return b
        },
        Ji: function(a) {
            var b = this.lz(a);
            return null != b ? b[a] : 0
        },
        qC: function(a, b) {
            var c = this.lz(a);
            null != c && (c[a] = b)
        },
        Ru: function(a, b) {
            var c = this.lz(a);
            null != c && (c[a] += b)
        },
        vF: function(a) {
            var b = this.wX();
            if (0 > a || 1E3 < a) return null;
            var c = b.length;
            if (a + 1 > c)
                for (; c < a + 1; c++) b.push("");
            return b
        },
        fH: function(a) {
            var b = this.vF(a);
            return null != b ? b[a] : ""
        },
        x_: function(a, b) {
            var c = this.vF(a);
            null != c && (c[a] = b)
        },
        RV: function(a) {
            a && (this.iL.charCodeAt(this.yt) ==
                a.charCode ? (this.yt++, this.yt == this.iL.length && (this.IC = 250, this.yt = 0)) : this.yt = 0)
        },
        vG: function(a) {
            if (a) {
                var b = a.keyCode;
                this.Cn = this.wd[b] = !0;
                null != this.U && null != this.U.g && this.U.g.jZ(b);
                for (b = 0; b < this.oc.length; b++) this.oc[b].vG(a)
            }
        },
        wG: function(a) {
            if (a) {
                this.wd[a.keyCode] = !1;
                var b;
                for (b = 0; b < this.oc.length; b++) this.oc[b].wG(a)
            }
        },
        px: function(a, b) {
            this.ym = a;
            this.zm = b
        },
        mw: function(a, b, c) {
            a.pageX ? (this.Yh = a.pageX, this.Zh = a.pageY) : a.clientY && (this.Yh = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
                this.Zh = a.clientY + document.body.scrollTop + document.documentElement.scrollTop);
            for (var d = 0, e = 0, f = b; f && "BODY" != f.tagName;) d += f.offsetTop, e += f.offsetLeft, f = f.offsetParent;
            this.Yh -= e + this.ym;
            this.Zh -= d + this.zm;
            this.Yh = Math.floor(this.Yh / this.hd);
            this.Zh = Math.floor(this.Zh / this.jd);
            null != this.U && null != this.U.g && this.U.g.qJ();
            for (d = 0; d < this.oc.length; d++) this.oc[d].mw(a, b);
            this.wm || 305419896 == c || this.$K(new rb(a.pageX, a.pageY, this.canvas))
        },
        DI: function(a) {
            var b;
            if (a.which) switch (a.which) {
                case 2:
                    b = m.Zo;
                    break;
                case 3:
                    b = m.Ym;
                    break;
                default:
                    b = m.og
            } else switch (a.button) {
                case 2:
                    b = m.Ym;
                    break;
                case 4:
                    b = m.Zo;
                    break;
                default:
                    b = m.og
            }
            this.mw(a, this.canvas, 305419896);
            this.wd[b] = !1;
            for (b = 0; b < this.oc.length; b++) this.oc[b].DI(a);
            this.wm || this.ut(new rb(a.pageX, a.pageY, this.canvas))
        },
        BI: function(a) {
            var b;
            if (a.which) switch (a.which) {
                case 2:
                    b = m.Zo;
                    break;
                case 3:
                    b = m.Ym;
                    break;
                default:
                    b = m.og
            } else switch (a.button) {
                case 2:
                    b = m.Ym;
                    break;
                case 4:
                    b = m.Zo;
                    break;
                default:
                    b = m.og
            }
            this.mw(a, this.canvas, 305419896);
            this.Cn = !0;
            this.wd[b] = !0;
            null != this.U && null != this.U.g && this.U.g.pJ(b - m.og, 0 == a.detail % 2 ? 2 : 1);
            for (b = 0; b < this.oc.length; b++) this.oc[b].BI(a);
            this.wm || this.xx(new rb(a.pageX, a.pageY, this.canvas))
        },
        Jr: function(a) {
            this.wd[m.og] = a;
            var b;
            for (b = 0; b < this.oc.length; b++) this.oc[b].Jr(a)
        },
        CI: function(a) {
            this.wd[m.og] = !1;
            this.wd[m.Zo] = !1;
            this.wd[m.Ym] = !1;
            var b;
            for (b = 0; b < this.oc.length; b++) this.oc[b].CI(a);
            this.wm || this.ut(new rb(a.pageX, a.pageY, this.canvas))
        },
        EI: function(a) {
            this.lG = "undefined" != typeof a.wheelDelta ? a.wheelDelta / 40 :
                -a.detail;
            null != this.U && null != this.U.g && this.U.kZ(this.lG)
        },
        xx: function(a) {
            !this.Hv && this.Ng && (this.Ng.Vn(), this.Ng = null);
            if (null != this.Tc) {
                var b, c;
                for (b = 0; b < a.changedTouches.length; b++) {
                    var d = a.changedTouches[b];
                    for (c = 0; c < m.fe; c++)
                        if (this.Tc[c] == m.sf) {
                            this.Tc[c] = d.identifier;
                            this.rl[c] = !1;
                            for (o = 0; o < this.gg.size(); o++)
                                if (this.gg.get(o).aL(d)) {
                                    this.rl[c] = !0;
                                    this.Fq[c] = o;
                                    break
                                } if (!this.rl[c] && (this.rb[c] = this.Dl(d), this.sb[c] = this.El(d), this.os == m.sf && d.identifier != m.MD))
                                for (this.os = c, this.Yh = this.rb[c],
                                    this.Zh = this.sb[c], this.Cn = !0, this.wd[m.og] = !0, null != this.U && null != this.U.g && this.U.g.pJ(0, 1), c = 0; c < this.oc.length; c++) this.oc[c].xx(a);
                            break
                        }
                }
            }
        },
        $K: function(a) {
            if (null != this.Tc) {
                var b, c, d;
                for (b = 0; b < a.changedTouches.length; b++) {
                    var e = a.changedTouches[b];
                    for (c = 0; c < m.fe; c++)
                        if (this.Tc[c] == e.identifier) {
                            if (this.rl[c]) this.gg.get(this.Fq[c]).CC(e);
                            else {
                                for (d = 0; d < this.gg.size(); d++) this.gg.get(d).CC(e);
                                this.rb[c] = this.Dl(e);
                                this.sb[c] = this.El(e)
                            }
                            if (this.os == c)
                                for (this.Yh = this.rb[c], this.Zh = this.sb[c],
                                    null != this.U && null != this.U.g && this.U.g.qJ(), c = 0; c < this.oc.length; c++) this.oc[c].xx(a, null);
                            break
                        }
                }
            }
        },
        ut: function(a) {
            this.Hv && this.Ng && (this.Ng.Vn(), this.Ng = null);
            if (null != this.Tc) {
                var b, c, d;
                for (b = 0; b < a.changedTouches.length; b++) {
                    var e = a.changedTouches[b];
                    for (c = 0; c < m.fe; c++)
                        if (this.Tc[c] == e.identifier) {
                            this.Tc[c] = m.sf;
                            if (this.rl[c]) this.gg.get(this.Fq[c]).BC(e);
                            else {
                                for (d = 0; d < this.gg.size(); d++) this.gg.get(d).BC(e);
                                this.rb[c] = this.Dl(e);
                                this.sb[c] = this.El(e)
                            }
                            if (c == this.os)
                                for (this.Yh = this.rb[c], this.Zh =
                                    this.sb[c], this.os = m.sf, this.wd[m.og] = !1, d = 0; d < this.oc.length; d++) this.oc[d].ut(a)
                        }
                }
            }
        },
        Dl: function(a) {
            var b = a.pageX;
            for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetLeft, a = a.offsetParent;
            return Math.floor((b - this.ym) / this.hd)
        },
        El: function(a) {
            var b = a.pageY;
            for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetTop, a = a.offsetParent;
            return Math.floor((b - this.zm) / this.jd)
        },
        kU: function(a) {
            this.gg.add(a)
        },
        YZ: function(a) {
            this.gg.Ts(a)
        },
        xv: function(a) {
            if (null != this.mn) {
                var b;
                b = a.lastIndexOf("\\");
                0 > b && (b = a.lastIndexOf("/"));
                0 <= b && (a = a.substring(b + 1));
                for (b = 0; b < this.mn.length; b++)
                    if (this.mn[b].path == a) return this.mn[b]
            }
            return null
        },
        sC: function(a) {
            this.dG = a;
            this.canvas.style.cursor = 0 <= this.dG ? this.cursor : "none"
        },
        ZV: function() {
            this.canvas.requestFullScreen ? this.canvas.requestFullScreen() : this.canvas.webkitRequestFullScreen ? this.canvas.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : this.canvas.mozRequestFullScreen && this.canvas.mozRequestFullScreen()
        },
        iW: function() {
            this.rn &= ~m.fy;
            document.DU ? document.DU() : document.webkitCancelFullScreen ?
                document.webkitCancelFullScreen() : document.mozCancelFullScreen && document.mozCancelFullScreen()
        },
        UK: function(a, b) {
            null == this.hb && (this.hb = new A(this), this.hb.WH(), this.hb.reset(b), this.ek = 1, 0 > this.gg.indexOf(this.hb) && this.gg.add(this.hb))
        },
        M_: function() {
            this.N_();
            this.ek = 2
        },
        XV: function() {
            null != this.hb && (1 == this.ek && this.gg.Ts(this.hb), this.hb = null);
            2 == this.ek && this.UV();
            this.ek = 0
        },
        N_: function() {
            if (0 == this.gr) {
                var a = this;
                window.DeviceMotionEvent && (xa.mZ = function(b) {
                    a.SS = b.acceleration.y / 9.780318;
                    a.TS =
                        b.acceleration.x / 9.780318;
                    a.US = b.acceleration.z / 9.780318;
                    a.Ny = b.accelerationIncludingGravity.y / 9.780318;
                    a.Oy = b.accelerationIncludingGravity.x / 9.780318;
                    a.RS = b.accelerationIncludingGravity.z / 9.780318
                })
            }
            this.gr++
        },
        UV: function() {
            this.gr--;
            0 >= this.gr && (xa.mZ = null, this.gr = 0)
        },
        Qr: function() {
            var a = 0; - .2 > this.Ny && (a |= 4);
            .2 < this.Ny && (a |= 8); - .2 > this.Oy && (a |= 1);
            .2 < this.Oy && (a |= 2);
            return a
        },
        Az: function(a) {
            if (a.xo) {
                null == this.Ng && (a.ZK = 2);
                switch (a.ZK) {
                    case 0:
                        0 < a.ii && (a.ii -= 2, 0 > a.ii && (a.ii = 0, phase++));
                        break;
                    case 2:
                        128 >
                            a.ii && (a.ii += 4, 128 <= a.ii && (a.ii = 128, a.wx = !0))
                }
                this.context.Dd(a.Of.left, a.Of.top, a.Of.right - a.Of.left, a.Of.bottom - a.Of.top, this.Ii, 0, 0);
                a.xo.fc(this.context, a.Of.left, a.Of.top, D.kg, a.ii);
                a.wx && (a.xo = null, a.Of = null, a.Dq = null)
            } else if (a.wx = !0, null != this.Ng) {
                a.Dq = new Na;
                a.Dq.dv();
                a.Dq.Gb = 24;
                var b = a.Dq.Gb + 6;
                a.xo = new pa(this, 120, b);
                var c = a.xo.measureText(this.RA, a.Dq) + 64;
                a.xo.resize(c, b);
                a.xo.iI();
                a.xo.kw(this.RA, l.Wk | l.Hm, null, 16776960, a.Dq, 2, 0);
                a.Of = new ja;
                a.Of.left = this.Ta / 2 - c / 2;
                a.Of.top = this.fb / 2 -
                    b / 2;
                a.Of.right = a.Of.left + c;
                a.Of.bottom = a.Of.top + b;
                a.ii = 128;
                a.ZK = 0;
                a.wx = !1;
                this.context.Dd(0, 0, this.Ta, this.fb, this.Ii, 0, 0)
            }
            return a.wx
        }
    };
    O.jR = 1;
    O.u2 = 2;
    O.kR = 4;
    O.WD = 32;
    O.w2 = 256;
    O.v2 = 2048;
    O.td = 32768;
    O.lR = 131072;
    O.Co = 0;
    O.ye = 1;
    O.GN = 1;
    O.HN = 2;
    O.Om = 6;
    O.VQ = 256;
    O.$Q = 1;
    O.aR = 2;
    O.bR = 4;
    O.fR = 0;
    O.gR = 1;
    O.dR = 2;
    O.eR = 3;
    O.prototype = {
        GY: function(a) {
            this.app.file.seek(this.app.Pz[a]);
            this.Gr = new S(this.app);
            this.ee = new Lg;
            this.Sv = new ja;
            a = 0;
            var b;
            for (this.iw = -1; 32639 != a;)
                if (a = this.app.file.v(), this.app.file.v(), b = this.app.file.C(),
                    0 != b) {
                    this.xZ = this.app.file.ma + b;
                    switch (a) {
                        case 13108:
                            this.DA();
                            null != this.app.kb && 0 != (this.app.Tn & Z.wN) ? (this.es = this.app.AV, this.ds = this.app.BV) : (this.es = Math.min(this.app.Ta, this.ae), this.ds = Math.min(this.app.fb, this.Gc));
                            break;
                        case 13128:
                            var c = b / 6;
                            this.ns = Array(c);
                            this.ne = Array(c);
                            this.oe = Array(c);
                            for (b = this.Gf = 0; b < c; b++) this.ns[b] = this.app.file.v(), this.Gf = Math.max(this.Gf, this.ns[b]), this.ne[b] = this.app.file.v(), this.oe[b] = this.app.file.v();
                            this.Gf++;
                            break;
                        case 13130:
                            this.hb = this.app.file.v();
                            this.zp = this.app.file.v();
                            break;
                        case 13122:
                            this.Sv.load(this.app.file);
                            break;
                        case 13124:
                            this.iw = this.app.file.v();
                            break;
                        case 13127:
                            this.dI = this.app.file.C();
                            break;
                        case 13109:
                            this.$G = this.app.file.cb();
                            break;
                        case 13115:
                            this.Ir = new Ea;
                            this.Ir.load(this.app.file);
                            break;
                        case 13116:
                            this.Kz = new Ea;
                            this.Kz.load(this.app.file);
                            break;
                        case 13121:
                            this.LY();
                            break;
                        case 13125:
                            this.KY();
                            break;
                        case 13112:
                            this.ee.load(this.app);
                            break;
                        case 13117:
                            this.Gr.load(this.app), this.Xi = this.Gr.Xi
                    }
                    this.app.file.seek(this.xZ)
                } this.app.ld.rh();
            for (b = 0; b < this.ee.$h; b++) this.app.ld.om(this.ee.gH(b).Vh);
            this.app.qa.rh();
            this.app.Le.rh();
            this.app.Qc.rh();
            this.app.ld.load(this.app.file);
            this.app.ld.bd(this.app.qa, this.app.Qc);
            this.app.Sa & m.Uk && (this.app.Qc.jt(), this.app.Le.jt(), 0 == this.app.Gf && this.app.qa.jt());
            this.app.qa.load(this.app.file);
            this.app.Qc.load(this.app.file);
            this.Gr.$V(this.app.Le);
            this.app.Le.load();
            this.app.ld.$Z();
            for (b = 0; b < this.ee.$h; b++) a = this.ee.list[b], a.Vv >= v.tc && this.app.ld.B_(a.Vh)
        },
        LY: function() {
            this.za = this.app.file.C();
            this.sa = Array(this.za);
            var a;
            for (a = 0; a < this.za; a++) this.sa[a] = new da(this.app), this.sa[a].load(this.app.file)
        },
        KY: function() {
            var a;
            for (a = 0; a < this.za; a++) this.sa[a].wf = this.app.file.C(), this.sa[a].xf = this.app.file.C(), this.app.file.wa(12)
        },
        DA: function() {
            this.ae = this.app.file.C();
            this.Gc = this.app.file.C();
            this.RH = this.app.file.sc();
            this.vc = this.app.file.C()
        }
    };
    ha.Cc = 32;
    ha.prototype = {
        gU: function(a) {
            null == this.hn && (this.hn = new Q);
            this.hn.add(a)
        },
        FV: function() {
            if (null != this.hn && 0 < this.hn.size() && !this.wz) {
                var a =
                    this.hn.get(0);
                this.hn.ao(0);
                this.wz = !0;
                var b = this;
                b.context.decodeAudioData(a.response, function(c) {
                    a.buffer = c;
                    a.response = null;
                    b.app.yl(a);
                    b.wz = !1
                })
            }
        },
        reset: function() {
            var a;
            for (a = 0; a < ha.Cc; a++) this.jr[a] = !1
        },
        play: function(a, b, c, d) {
            if (0 != this.fF) {
                var e = this.app.Le.HX(a);
                if (null != e) {
                    0 == this.Xy && (c = 0);
                    if (0 > c) {
                        for (a = 0; a < ha.Cc && (null != this.Ga[a] || 0 != this.jr[a]); a++);
                        if (a == ha.Cc)
                            for (a = 0; a < ha.Cc && (0 != this.jr[a] || null == this.Ga[a] || 0 != this.Ga[a].mr); a++);
                        c = a;
                        0 <= c && c < ha.Cc && (this.Jq[c] = this.SA)
                    }
                    if (!(0 > c ||
                            c >= ha.Cc)) {
                        if (null != this.Ga[c]) {
                            if (1 == this.Ga[c].mr) return;
                            this.Ga[c] != e && (this.Ga[c].stop(), this.Ga[c] = null)
                        }
                        for (a = 0; a < ha.Cc; a++) this.Ga[a] == e && (this.Ga[a].stop(), this.Ga[a] = null);
                        this.Ga[c] = e;
                        e.play(b, d, this.Jq[c])
                    }
                }
            }
        },
        A_: function(a) {
            this.Xy = a
        },
        pY: function() {
            var a;
            for (a = 0; a < ha.Cc; a++) null != this.Ga[a] && this.Ga[a].OH() && this.app.Le.om(this.Ga[a].handle)
        },
        ux: function() {
            var a;
            for (a = 0; a < ha.Cc; a++) null != this.Ga[a] && (this.Ga[a].stop(), this.Ga[a] = null)
        },
        T_: function(a) {
            var b;
            for (b = 0; b < ha.Cc; b++) null != this.Ga[b] &&
                this.Ga[b].handle == a && (this.Ga[b].stop(), this.Ga[b] = null)
        },
        R_: function(a) {
            0 <= a && a < ha.Cc && null != this.Ga[a] && (this.Ga[a].stop(), this.Ga[a] = null)
        },
        mY: function(a) {
            var b;
            for (b = 0; b < ha.Cc; b++)
                if (null != this.Ga[b] && this.Ga[b].handle == a) return this.Ga[b].OH();
            return !1
        },
        pause: function() {
            var a;
            for (a = 0; a < ha.Cc; a++) null != this.Ga[a] && this.Ga[a].pause()
        },
        rZ: function(a) {
            0 <= a && a < ha.Cc && null != this.Ga[a] && this.Ga[a].pause()
        },
        resume: function() {
            var a;
            for (a = 0; a < ha.Cc; a++) null != this.Ga[a] && this.Ga[a].resume()
        },
        c_: function(a) {
            0 <=
                a && a < ha.Cc && null != this.Ga[a] && this.Ga[a].resume()
        },
        G_: function(a, b) {
            0 > b && (b = 0);
            100 < b && (b = 100);
            0 <= a && a < ha.Cc && (this.Jq[a] = b, null != this.Ga[a] && this.Ga[a].GK(b))
        },
        w_: function(a, b) {
            var c;
            for (c = 0; c < ha.Cc; c++) null != this.Ga[c] && this.Ga[c].handle == a && this.Ga[c].v_(b)
        },
        E_: function(a, b) {
            0 <= a && a < ha.Cc && null != this.Ga[a] && this.Ga[a].setPosition(b)
        },
        y_: function(a) {
            var b;
            this.SA = a;
            for (b = 0; b < ha.Cc; b++) this.Jq[b] = a, null != this.Ga[b] && this.Ga[b].GK(a)
        },
        EX: function(a) {
            return 0 <= a && a < ha.Cc && null != this.Ga[a] ? this.Ga[a].DX() :
                0
        },
        GU: function() {
            var a;
            for (a = 0; a < ha.Cc; a++) null != this.Ga[a] && this.Ga[a].FU() && (this.Ga[a] = null)
        }
    };
    Ag.prototype = {
        yk: function() {
            var a = this.app.file.v();
            this.path = this.app.file.cb(a);
            a = this.path.lastIndexOf("\\");
            0 <= a && (this.path = this.path.substring(a + 1));
            this.length = this.app.file.C();
            this.offset = this.app.file.ma;
            this.app.file.wa(this.length)
        },
        open: function() {
            return this.app.file.Jh(this.offset, this.length)
        }
    };
    Bg.prototype = {
        load: function() {
            return this.rA
        },
        reset: function() {
            this.uB = this.Gg = 0;
            this.mp = 25
        },
        step: function() {
            switch (this.Gg) {
                case 0:
                    -1 != this.app.Xn ? this.context.Dd(0, 0, this.app.Ta, this.app.fb, this.app.Xn) : this.context.$u(0, 0, this.app.Ta, this.app.fb);
                    this.context.fm(this.Pi, this.Rk - this.Pi.width / 2, this.Sk - this.Pi.height / 2, this.Pi.width, this.Pi.height, 0, 0);
                    this.Gg++;
                    break;
                case 1:
                    this.angle = this.app.bk / this.app.ck * 2 * Math.PI;
                    this.tp(this.angle);
                    this.app.bk == this.app.ck && this.Gg++;
                    break;
                case 2:
                    0 < this.mp && this.mp--;
                    0 == this.mp && this.Gg++;
                    break;
                case 3:
                    this.app.Az(this) && this.Gg++
            }
        },
        pA: function() {
            return 4 ==
                this.Gg
        },
        tp: function(a) {
            var b, c, d, e, f;
            for (b = this.uB; b <= a; b += .005) {
                c = this.Rk + Math.cos(b) * (this.ph - this.size);
                d = this.Sk - Math.sin(b) * (this.ph - this.size);
                e = this.Rk + Math.cos(b) * this.ph;
                f = this.Sk - Math.sin(b) * this.ph;
                this.context.Cd(c, d, e, f, this.color, 1, 0, 0);
                var g;
                for (g = 0; 3 > g; g++) c = this.Rk + Math.cos(b) * (this.ph - this.size - g), d = this.Sk - Math.sin(b) * (this.ph - this.size - g), e = this.Rk + Math.cos(b) * (this.ph - this.size - g - 1), f = this.Sk - Math.sin(b) * (this.ph - this.size - g - 1), this.context.Cd(c, d, e, f, this.color, 1, 0, 0), c = this.Rk +
                    Math.cos(b) * (this.ph + g), d = this.Sk - Math.sin(b) * (this.ph + g), e = this.Rk + Math.cos(b) * (this.ph + g + 1), f = this.Sk - Math.sin(b) * (this.ph + g + 1), this.context.Cd(c, d, e, f, this.color, 1, 0, 0)
            }
            this.uB = a
        }
    };
    Cg.prototype = {
        load: function() {
            return !0
        },
        reset: function() {
            this.Ow = !1;
            this.Gg = 0;
            this.alpha = 128;
            this.position = 0
        },
        step: function() {
            if (this.app.bk < this.app.ck) switch (this.Gg) {
                case 0:
                    0 < this.alpha && (this.alpha -= 2, 0 >= this.alpha && (this.alpha = 0, this.Gg++))
            } else switch (this.Gg) {
                case 0:
                case 1:
                    this.Gg = 2;
                    break;
                case 2:
                    128 > this.alpha &&
                        (this.alpha += 4);
                    128 <= this.alpha && (this.alpha = 128, null == this.app.Ng ? this.Ow = !0 : this.Gg++);
                    break;
                default:
                    this.Ow = this.app.Az(this);
                    return
            }
            this.context.Dd(this.rect.left, this.rect.top, this.width, this.height, this.xU, D.kg, this.alpha);
            this.context.Us(this.rect.left, this.rect.top, this.width, this.height, this.borderColor, 1, D.kg, this.alpha);
            this.position = this.app.bk / this.app.ck * (this.width - 2);
            this.context.Dd(this.rect.left + 1, this.rect.top + 1, this.position, this.height - 2, this.yU, D.kg, this.alpha)
        },
        pA: function() {
            return this.Ow &&
                this.app.bk == this.app.ck
        }
    };
    Dg.prototype = {
        load: function() {
            this.step();
            return !this.I.Ri
        },
        reset: function() {
            this.I.U.KG();
            this.I.U.sA();
            this.I.U.Kx(!1);
            this.I.U.eq(-1, !1);
            this.I.U.g.Bx();
            this.I.U.wv();
            this.I.U.Rz();
            this.I.U.u.Kl = this.I.U.u.vA = this.I.U.fo = 0;
            this.I.U.u.Ll = this.I.U.u.wA = this.I.U.ho = 0;
            this.I.VJ();
            this.I.U.Sy();
            this.I.U.lA();
            this.I.U.eq(-1, !1);
            this.I.U.HB();
            this.I.U.tz(!1);
            this.I.U.Bz();
            this.I.U.CA();
            this.I.U.g.IB();
            this.I.U.g.Tu(this.I.U);
            this.I.U.Jz();
            this.I.U.Wu();
            this.I.U.cc = 0;
            this.I.U.tq =
                0;
            this.I.Pk = !1;
            this.app.oc.push(this.I);
            this.jn = 0
        },
        step: function() {
            this.I.Pk || (this.S_ && (this.I.Pk = this.app.bk == this.app.ck), 0 == this.I.rt() && (this.I.Pk = !0), this.I.xG(this.context, this.Jd.x, this.Jd.y, !1));
            this.I.Pk && this.app.Ng && this.app.Az(this)
        },
        pA: function() {
            var a = this.I.Pk;
            this.app.Ng && (a = !1);
            if (a) {
                if (0 < this.jn && (this.jn--, 0 < this.jn)) return !1;
                var b;
                for (b = 0; b < this.app.oc.length; b++)
                    if (this.app.oc[b] == this.I) {
                        this.app.oc.splice(b, 1);
                        break
                    }
            }
            return a
        }
    };
    A.sd = 0;
    A.Wd = 1;
    A.Xd = 2;
    A.VD = -1;
    A.fe = 3;
    A.al = 1;
    A.ri =
        2;
    A.si = 4;
    A.TD = 8;
    A.s2 = 2147483648;
    A.hR = 70;
    A.nO = 60;
    A.lO = .5;
    A.prototype = {
        WH: function() {
            null == this.cd && (this.cd = oa.Jh(this.app, "joyback.png"), this.Pv = oa.Jh(this.app, "joyfront.png"), this.We = oa.Jh(this.app, "fire1U.png"), this.Af = oa.Jh(this.app, "fire2U.png"), this.TG = oa.Jh(this.app, "fire1D.png"), this.UG = oa.Jh(this.app, "fire2D.png"))
        },
        reset: function(a) {
            this.V = a;
            null != this.cd && 0 != this.cd.width ? this.AK() : this.Zy = !0;
            this.Qi = this.MH ? A.hR * Math.PI / 180 : A.nO * Math.PI / 180
        },
        AK: function() {
            var a, b;
            a = this.app.Ta;
            b = this.app.fb;
            0 == (this.V & A.TD) ? (0 != (this.V & A.al) && (this.Wc[A.sd] = 16 + this.cd.width / 2, this.Xc[A.sd] = b - 16 - this.cd.height / 2), 0 != (this.V & A.ri) && 0 != (this.V & A.si) ? (this.Wc[A.Wd] = a - this.We.width / 2 - 32, this.Xc[A.Wd] = b - this.We.height / 2 - 16, this.Wc[A.Xd] = a - this.Af.width / 2 - 16, this.Xc[A.Xd] = b - this.Af.height / 2 - this.We.height - 24) : 0 != (this.V & A.ri) ? (this.Wc[A.Wd] = a - this.We.width / 2 - 16, this.Xc[A.Wd] = b - this.We.height / 2 - 16) : 0 != (this.V & A.si) && (this.Wc[A.Xd] = a - this.Af.width / 2 - 16, this.Xc[A.Xd] = b - this.Af.height / 2 - 16)) : (0 != (this.V & A.al) &&
                (this.Wc[A.sd] = a - 16 - this.cd.width / 2, this.Xc[A.sd] = b - 16 - this.cd.height / 2), 0 != (this.V & A.ri) && 0 != (this.V & A.si) ? (this.Wc[A.Wd] = this.We.width / 2 + 16 + 2 * this.Af.width / 3, this.Xc[A.Wd] = b - this.We.height / 2 - 16, this.Wc[A.Xd] = this.Af.width / 2 + 16, this.Xc[A.Xd] = b - this.Af.height / 2 - this.We.height - 24) : 0 != (this.V & A.ri) ? (this.Wc[A.Wd] = this.We.width / 2 + 16, this.Xc[A.Wd] = b - this.We.height / 2 - 16) : 0 != (this.V & A.si) && (this.Wc[A.Xd] = this.Af.width / 2 + 16, this.Xc[A.Xd] = b - this.Af.height / 2 - 16))
        },
        Ac: function(a, b) {
            0 != (a & A.al) ? this.Wc[A.sd] =
                b : 0 != (a & A.ri) ? this.Wc[A.Wd] = b : 0 != (a & A.si) && (this.Wc[A.Xd] = b)
        },
        Bc: function(a, b) {
            0 != (a & A.al) ? this.Xc[A.sd] = b : 0 != (a & A.ri) ? this.Xc[A.Wd] = b : 0 != (a & A.si) && (this.Xc[A.Xd] = b)
        },
        fc: function(a) {
            this.Zy && (this.Zy = !1, this.AK());
            var b, c;
            0 != (this.V & A.al) && (b = this.Wc[A.sd] - this.cd.width / 2, c = this.Xc[A.sd] - this.cd.height / 2, a.Hg(this.cd, b, c, 0, 1, 1, 0, 0), b = this.Wc[A.sd] + this.Sh - this.Pv.width / 2, c = this.Xc[A.sd] + this.Th - this.Pv.height / 2, a.Hg(this.Pv, b, c, 0, 1, 1, 0, 0));
            if (0 != (this.V & A.ri)) {
                var d = 0 == (this.hb & 16) ? this.We : this.TG;
                b = this.Wc[A.Wd] - d.width / 2;
                c = this.Xc[A.Wd] - d.height / 2;
                a.Hg(d, b, c, 0, 1, 1, 0, 0)
            }
            0 != (this.V & A.si) && (d = 0 == (this.hb & 32) ? this.Af : this.UG, b = this.Wc[A.Xd] - d.width / 2, c = this.Xc[A.Xd] - d.height / 2, a.Hg(d, b, c, 0, 1, 1, 0, 0))
        },
        aL: function(a) {
            var b = !1,
                c = this.app.Dl(a),
                d = this.app.El(a);
            this.QH = A.lO * Math.ceil(Math.sqrt(this.cd.width / 2 * this.cd.width / 2 + this.cd.height / 2 * this.cd.height / 2));
            this.Zg = Math.ceil(Math.sqrt(this.cd.width / 4 * this.cd.width / 4 + this.cd.height / 4 * this.cd.height / 4));
            c = this.getKey(c, d);
            c != A.VD && (this.touches[c] =
                a.identifier, c == A.sd && (this.hb &= 240, b = !0), c == A.Wd ? (this.hb |= 16, b = !0) : c == A.Xd && (this.hb |= 32, b = !0));
            return b
        },
        CC: function(a) {
            var b = this.app.Dl(a),
                c = this.app.El(a);
            if (this.getKey(b, c) == A.sd && a.identifier == this.touches[A.sd] && (this.Sh = b - this.Wc[A.sd], this.Th = c - this.Xc[A.sd], a = (2 * Math.PI - Math.atan2(this.Th, this.Sh)) % (2 * Math.PI), this.hb &= 240, b = Math.sqrt(this.Sh * this.Sh + this.Th * this.Th), this.MH ? (this.Sh = Math.cos(a) * this.Zg, this.Th = Math.sin(a) * -this.Zg) : (this.Sh < -this.Zg && (this.Sh = -this.Zg), this.Sh > this.Zg &&
                    (this.Sh = this.Zg), this.Th < -this.Zg && (this.Th = -this.Zg), this.Th > this.Zg && (this.Th = this.Zg)), b > this.QH && b < 3 * this.Zg)) {
                b = 0;
                if (0 <= a)
                    for (;;) {
                        if (this.dk(a, 0, this.Qi) || this.dk(a, 2 * Math.PI, this.Qi)) {
                            b = 8;
                            break
                        }
                        if (this.dk(a, Math.PI / 2, this.Qi)) {
                            b = 1;
                            break
                        }
                        if (this.dk(a, Math.PI, this.Qi)) {
                            b = 4;
                            break
                        }
                        if (this.dk(a, Math.PI / 4 * 6, this.Qi)) {
                            b = 2;
                            break
                        }
                        if (this.dk(a, Math.PI / 4, Math.PI / 2 - this.Qi)) {
                            b = 9;
                            break
                        }
                        if (this.dk(a, Math.PI / 4 * 3, Math.PI / 2 - this.Qi)) {
                            b = 5;
                            break
                        }
                        if (this.dk(a, Math.PI / 4 * 5, Math.PI / 2 - this.Qi)) {
                            b = 6;
                            break
                        }
                        if (this.dk(a,
                                Math.PI / 4 * 7, Math.PI / 2 - this.Qi)) {
                            b = 10;
                            break
                        }
                        break
                    }
                this.hb |= b
            }
        },
        dk: function(a, b, c) {
            return a > b - c / 2 && a < b + c / 2
        },
        BC: function(a) {
            var b;
            for (b = 0; b < A.fe; b++)
                if (this.touches[b] == a.identifier) {
                    this.touches[b] = 0;
                    switch (b) {
                        case A.sd:
                            this.Th = this.Sh = 0;
                            this.hb &= 240;
                            break;
                        case A.Wd:
                            this.hb &= -17;
                            break;
                        case A.Xd:
                            this.hb &= -33
                    }
                    break
                }
        },
        getKey: function(a, b) {
            return 0 != (this.V & A.al) && a >= this.Wc[A.sd] - this.cd.width / 2 && a < this.Wc[A.sd] + this.cd.width / 2 && b > this.Xc[A.sd] - this.cd.height / 2 && b < this.Xc[A.sd] + this.cd.height / 2 ? A.sd : 0 !=
                (this.V & A.ri) && a >= this.Wc[A.Wd] - this.We.width / 2 && a < this.Wc[A.Wd] + this.We.width / 2 && b > this.Xc[A.Wd] - this.We.height / 2 && b < this.Xc[A.Wd] + this.We.height / 2 ? A.Wd : 0 != (this.V & A.si) && a >= this.Wc[A.Xd] - this.Af.width / 2 && a < this.Wc[A.Xd] + this.Af.width / 2 && b > this.Xc[A.Xd] - this.Af.height / 2 && b < this.Xc[A.Xd] + this.Af.height / 2 ? A.Xd : A.VD
        },
        Qr: function() {
            return this.hb
        }
    };
    k.Q1 = 2;
    k.jQ = 4;
    k.Uq = 16;
    k.kQ = 32;
    k.mQ = 64;
    k.lQ = 128;
    k.ey = 512;
    k.p1 = 2;
    k.r1 = 4;
    k.t1 = 8;
    k.q1 = 16;
    k.o1 = 32;
    k.u1 = 64;
    k.s1 = 128;
    k.v1 = 256;
    k.ND = 480;
    k.OD = 300;
    k.Oq = 64;
    k.Pq = 16;
    k.J4 = 1;
    k.L4 = 2;
    k.K4 = 4;
    k.Oj = 1;
    k.T3 = 2;
    k.S3 = 4;
    k.U3 = 8;
    k.sE = 0;
    k.So = 1;
    k.qf = 2;
    k.su = 3;
    k.LR = 4;
    k.vD = 1;
    k.Do = 2;
    k.uD = 4;
    k.tD = 8;
    k.au = 10;
    k.$t = 1;
    k.jy = 2;
    k.Zt = 3;
    k.ZD = 4;
    k.tR = 5;
    k.C2 = 6;
    k.A2 = 7;
    k.D2 = 8;
    k.B2 = 9;
    k.Yt = -2;
    k.uR = 100;
    k.$D = 101;
    k.yj = 1;
    k.zj = 2;
    k.Aj = 4;
    k.xj = 8;
    k.pN = 15;
    k.ly = 128;
    k.yh = 2147483647;
    k.by = 1110591041;
    k.Jy = 1110594637;
    k.WR = 1110600435;
    k.ky = 1110874198;
    k.Cu = 1110634490;
    k.Kq = 1110590791;
    k.uZ = [0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255];
    k.HE = [0, k.yj, k.zj, 0, k.Aj, k.Aj + k.yj, k.Aj + k.zj, 0, k.xj, k.xj + k.yj, k.xj + k.zj,
        0, 0, 0, 0, 0
    ];
    k.eF = !1;
    k.Fi = function(a, b, c) {
        switch (c) {
            case 0:
                return a == b;
            case 1:
                return a != b;
            case 2:
                return a <= b;
            case 3:
                return a < b;
            case 4:
                return a >= b;
            case 5:
                return a > b
        }
        return !1
    };
    k.Ei = function(a, b, c) {
        switch (c) {
            case 0:
                return a == b;
            case 1:
                return a != b;
            case 2:
                return a <= b;
            case 3:
                return a < b;
            case 4:
                return a >= b;
            case 5:
                return a > b
        }
        return !1
    };
    k.Q5 = function(a) {
        a = a.Pa >= v.Qg ? a.ext.nH() : a.Ph();
        null == a && (a = new fb);
        return a
    };
    k.V6 = function(a, b, c) {
        a.Pa >= v.Qg ? a.ext.CK(b, c) : a.wh(b, c)
    };
    k.S5 = function(a) {
        return a.Pa >= v.Qg ? a.ext.Bv() :
            a.yv()
    };
    k.yK = function(a, b) {
        a.Pa >= v.Qg ? a.ext.qx(b) : a.ox(b)
    };
    k.eZ = function(a) {
        null != a.A && (a.A.hB(), a.A.aa |= D.xi, a.A.po = 0)
    };
    k.cZ = function(a) {
        null != a.A && (a.A.Pp(), a.A.aa &= ~D.xi, a.A.po = 0)
    };
    k.Ac = function(a, b) {
        null != a.D ? a.D.ja.Ac(b) : a.s != b && (a.s = b, null != a.c && (a.c.Y = !0, a.c.Cb = !0))
    };
    k.Bc = function(a, b) {
        null != a.D ? a.D.ja.Bc(b) : a.o != b && (a.o = b, null != a.c && (a.c.Y = !0, a.c.Cb = !0))
    };
    k.tH = function(a, b) {
        if (0 == a) return 0 <= b ? 24 : 8;
        if (0 == b) return 0 <= a ? 0 : 16;
        var c, d = !1,
            e = !1;
        0 > a && (d = !0, a = -a);
        0 > b && (e = !0, b = -b);
        c = 256 * a / b;
        var f;
        for (f = 0; !(c >= T.Eo[f]); f += 2);
        c = T.Eo[f + 1];
        e && (c = -c + 32 & 31);
        d && (c = (-(c - 8 & 31) & 31) + 8 & 31);
        return c
    };
    k.prototype = {
        u_: function(a) {
            this.u = a
        },
        Sy: function() {
            this.H = Array(this.u.Xi);
            this.g = this.u.Gr;
            this.vh = 0;
            var a;
            for (a = this.h.ld.eH(); null != a; a = this.h.ld.jH()) a.Fg >= v.tc && this.vh++;
            this.dC = -1 == this.u.iw ? this.h.kc & 65535 : this.u.iw;
            this.mo = Array(Math.round(this.u.Xi / 32 + 1));
            this.Jf = new Q;
            this.lj = "";
            this.mj = this.u.Xi;
            this.jC = this.g.$I;
            this.u.Kl = 0;
            this.u.Ll = 0;
            this.da = this.u.Kl;
            this.fa = this.u.Ll;
            this.hx = this.gx = 0;
            this.jf =
                this.u.Sv.right; - 1 == this.jf && (this.jf = 2147479552);
            this.kf = this.u.Sv.bottom; - 1 == this.kf && (this.kf = 2147479552);
            this.kC = this.cc = this.Pb = 0;
            this.Ud &= k.lQ;
            this.Ud |= k.jQ;
            this.qq = 0;
            this.ex = Array(k.au);
            this.jx = -1;
            this.te = null;
            this.Ud |= k.mQ;
            this.P = Array(k.ly);
            this.rq = Array(k.ly);
            this.fx = new Ha;
            this.fx.code = 0;
            this.bx = Array(4);
            this.cC = Array(4);
            this.ax = Array(4);
            this.Vd = Array(4);
            for (a = this.fd = 0; a < k.au; a++) this.ex[a] = 50;
            this.dz = this.Pw = !1;
            this.u.bK = !0
        },
        Rz: function() {
            this.u.bK = !1;
            this.te = this.Jf = this.lj = this.mo =
                this.ca = this.H = null;
            var a;
            for (a = 0; a < k.ly; a++) this.P[a] = 0;
            this.fx = null
        },
        aY: function(a) {
            this.Sy();
            this.h.ek = 0;
            if (null == this.h.kb && this.h.wm)
                if (this.u.hb == O.eR) null == this.h.hb && (this.h.hb = new A(this.h), this.h.hb.WH()), this.h.hb.reset(0), this.h.UK();
                else if (this.u.hb != O.fR) {
                var b = 0;
                0 != (this.u.zp & O.$Q) && (b = A.ri);
                0 != (this.u.zp & O.aR) && (b |= A.si);
                0 != (this.u.zp & O.bR) && (b |= A.TD);
                0 != (this.u.zp & O.n2) && (b |= A.r2);
                this.u.hb == O.gR && (b |= A.al);
                0 != (b & (A.ri | A.si | A.al)) && (this.h.UK(b), this.h.hb.reset(b));
                this.u.hb == O.dR &&
                    this.h.M_()
            }
            this.hC = 255;
            a && (this.Ud |= k.Uq);
            this.lA();
            this.eq(-1, !1);
            this.HB();
            this.Kc = 0;
            this.tz(a);
            this.Bz();
            this.VX();
            this.CA();
            this.g.IB();
            this.g.Tu(this);
            this.sx();
            this.tq = 0;
            this.Jz();
            this.dz = !1
        },
        yz: function() {
            if (0 < this.ei && null == this.h.Yi) this.Pw && (1 == this.h.Cn && (0 <= this.Xs ? this.h.wd[this.Xs] && (this.resume(), this.cc = 0, this.g.Wf(-458755)) : this.h.Cn && (this.resume(), this.cc = 0, this.g.Wf(-458755))), this.h.Cn = !1), null != this.Nw && this.Nw.OX(), a = this.cc;
            else {
                this.h.Uy |= m.PC;
                var a = this.iX();
                this.h.Uy &=
                    ~m.PC;
                0 != (this.Ud & k.Uq) && (this.LG = (new Date).getTime() - this.jm, this.Kx(!0), this.g.Bx())
            }
            if (a == k.$t || a == k.jy || a == k.Zt) {
                this.h.ji = document.createElement("canvas");
                this.h.ji.width = this.h.Ta;
                this.h.ji.height = this.h.fb;
                var b = new Wa(this.h.ji);
                this.h.frame.Rv ? b.$u(0, 0, this.Ta, this.fb) : b.Dd(0, 0, this.Ta, this.fb, this.Ii);
                b.Dd(0, 0, this.h.Ta, this.h.fb, this.h.Ii);
                this.h.Yf.fc(b, 0, 0)
            }
            if (0 != a) switch (a) {
                case 5:
                    this.pause();
                    this.h.Cn = !1;
                    this.Pw = !0;
                    a = 0;
                    break;
                case 101:
                    if (this.u.z5) break;
                    this.KG();
                    this.sA();
                    this.Kx(!1);
                    this.eq(-1, !1);
                    this.g.Bx();
                    this.wv();
                    this.Rz();
                    this.u.Kl = this.u.vA = this.fo = 0;
                    this.u.Ll = this.u.wA = this.ho = 0;
                    this.h.VJ();
                    this.Sy();
                    this.lA();
                    this.eq(-1, !1);
                    this.HB();
                    this.tz(!1);
                    this.Bz();
                    this.CA();
                    this.g.IB();
                    this.g.Tu(this);
                    this.Jz();
                    this.sx();
                    this.tq = a = 0;
                    break;
                case 100:
                case -2:
                    this.g.Wf(-196611)
            }
            return this.cc = a
        },
        rY: function(a) {
            var b;
            100 < this.cc && (this.cc = k.Yt);
            b = this.tq;
            this.g_();
            this.sA();
            this.Kx(a);
            this.g.Bx();
            this.Rz();
            this.wv();
            this.eq(-1, !0);
            this.h.XV();
            return l.xR(this.cc, b)
        },
        lA: function() {
            var a;
            for (a = 0; a < this.mj; a++) this.H[a] = null
        },
        HB: function() {
            var a, b;
            this.Ud |= k.kQ;
            this.Ud |= k.ey;
            var c = this.Vs = 0;
            this.ca = Array(this.vh);
            this.Kf = 0;
            for (a = this.h.ld.eH(); null != a; a = this.h.ld.jH())
                if (b = a.Fg, b >= v.tc) {
                    this.ca[c] = new Y;
                    this.ca[c].pV(a);
                    this.ca[c].Tp = c;
                    this.ca[c].Es = -1;
                    if (b == v.Nj || b == v.qE)
                        for (a = this.u.ee.uv(); null != a; a = this.u.ee.ws())
                            if (a.Vh == this.ca[c].Bd) {
                                this.ca[c].Es = a.Ml;
                                break
                            } c++
                } this.g.yZ(this.ca);
            for (c = 0; c < this.u.za; c++) this.u.sa[c].eB = 1;
            return 0
        },
        VF: function() {
            var a, b, c, d, e;
            this.Ud &= ~k.Uq;
            c = 0;
            for (e = this.u.ee.uv(); null != e; c++, e = this.u.ee.ws())
                if (a = this.h.ld.Cl(e.Vh), b = a.pd, a = a.Fg, !(a < v.Qg) && 0 == (b.aj & E.wE) && (d = k.tD, e.yA == Oa.AE)) {
                    if (0 == (b.Ul & E.tu)) {
                        if (a != v.Nj) continue;
                        d |= k.Do
                    }
                    0 == (b.aj & E.tE) && this.Hr(e.Ml, e.Vh, 2147483648, 2147483648, -1, d, -1, -1)
                } this.g.Tu(this);
            this.jm = (new Date).getTime() - this.LG
        },
        tz: function(a) {
            var b, c, d, e, f;
            d = 0;
            for (f = this.u.ee.uv(); null != f; d++, f = this.u.ee.ws())
                if (b = this.h.ld.Cl(f.Vh), c = b.pd, b = b.Fg, e = k.tD, f.yA == Oa.AE) {
                    b == v.Nj && (e |= k.uD);
                    if (0 == (c.Ul & E.tu)) {
                        if (b == v.qE) continue;
                        e |= k.Do
                    }
                    a && b >= v.Qg && 0 == (c.aj & E.wE) || 0 == (c.aj & E.tE) && this.Hr(f.Ml, f.Vh, 2147483648, 2147483648, -1, e, -1, -1)
                } this.Ud &= ~k.ey
        },
        sA: function() {
            var a;
            for (a = 0; a < this.mj && 0 != this.Pb; a++)
                if (null != this.H[a]) {
                    var b = this.H[a];
                    (32 > b.Pa || b.ka.zd != k.Kq) && this.sv(a, !0)
                } for (a = 0; a < this.mj && 0 != this.Pb; a++) null != this.H[a] && (b = this.H[a], 32 <= b.Pa && b.ka.zd == k.Kq && this.sv(a, !0))
        },
        Kx: function(a) {
            a || (0 == (this.h.Oh & m.pQ) ? this.h.Ob.ux() : this.h.Ob.pY())
        },
        eq: function(a, b) {
            var c, d;
            d = -1 == a ? this.u.za : a + 1;
            for (c = 0; c < d; c++) {
                var e = this.u.sa[c];
                e.reset();
                e.NV();
                b && e.kG()
            }
        },
        Wu: function() {
            0 != this.Kf && this.xK(-1)
        },
        wv: function() {
            0 != this.Kf && this.xK(0)
        },
        oG: function(a) {
            var b = 0,
                c, d = 0;
            for (c = 0; c < this.Pb; c++) {
                for (; null == this.H[d];) d++;
                var e = this.H[d];
                d++;
                e != a && e.Oa & E.Dh && (e = e.ka.cf.pe[e.D.oo], e.qs == aa.zy && (b |= 1 << e.Mn - 1))
            }
            b != this.Kf && (0 != this.Kf && this.wv(), this.Kf = b, 0 != this.Kf && this.Wu())
        },
        lZ: function(a) {
            var b = this.Kf;
            a.Oa & E.Dh && (a = a.ka.cf.pe[a.D.oo], a.qs == aa.zy && (this.Kf |= 1 << a.Mn - 1, 0 == b && this.Wu()))
        },
        xK: function(a) {
            0 <= a ? this.h.sC(1) : this.h.sC(-1)
        },
        sx: function() {
            this.h.sC(1)
        },
        Pu: function(a) {
            var b, c;
            for (c = 0; c < this.Jf.size() && (b = this.Jf.get(c), !l.Hb(b.name, a)); c++);
            c == this.Jf.size() && (b = new $a, this.Jf.add(b), c = this.Jf.size() - 1, b.name = a, b.V = 0);
            return c
        },
        g_: function() {
            var a, b, c, d, e, f;
            for (c = 0; c < this.ca.length; c++)
                if (b = this.ca[c], f = b.ib, 32767 != b.Bd && 0 == (f & 2147483648) && (d = this.h.ld.Cl(b.Bd), 0 != (d.rk & v.xE) && (a = this.H[f], b.se == v.Nj || b.se == v.br || null != a.R))) {
                    e = b.dj + b.se.toString();
                    null == this.h.jl && (this.h.jl = new Q);
                    var g = !1;
                    d = null;
                    for (a = 0; a < this.h.jl.size(); a++)
                        if (d =
                            this.h.jl.get(a), e == d.name) {
                            g = !0;
                            break
                        } 0 == g ? (d = new mi, d.name = e, d.re = new Q, this.h.jl.add(d)) : d.re.clear();
                    for (;;) {
                        a = this.H[f];
                        if (b.se == v.Nj) f = new oi, f.text = a.Lg, f.Wb = a.Wb, d.re.add(f);
                        else if (b.se == v.br) f = new ni, f.value = a.Ya, f.Wb = a.Wb, f.gd = a.gd, f.lx = a.lx, f.kx = a.kx, d.re.add(f);
                        else {
                            e = new pi;
                            e.V = a.R.nc;
                            e.values = Array(a.R.ob.length);
                            for (f = 0; f < a.R.ob.length; f++) e.values[f] = a.R.ob[f];
                            e.Ra = Array(a.R.we.length);
                            for (f = 0; f < a.R.we.length; f++) e.Ra[f] = a.R.we[f];
                            d.re.add(e)
                        }
                        f = a.xb;
                        if (0 != (f & 2147483648)) break
                    }
                }
        },
        CA: function() {
            var a, b, c, d, e, f;
            if (null != this.h.jl)
                for (c = 0; c < this.ca.length; c++)
                    if (b = this.ca[c], a = b.ib, 32767 != b.Bd && 0 <= a && (e = this.h.ld.Cl(b.Bd), 0 != (e.rk & v.xE)))
                        for (f = b.dj + b.se.toString(), d = 0; d < this.h.jl.size(); d++)
                            if (e = this.h.jl.get(d), f == e.name) {
                                for (d = 0;;) {
                                    a = this.H[a];
                                    if (b.se == v.Nj) f = e.re.get(d), a.Lg = f.text, a.Wb = f.Wb, a.c.Y = !0, a.Y4 = !0;
                                    else if (b.se == v.br) f = e.re.get(d), a.Ya = f.value, a.Wb = f.Wb, a.gd = f.gd, a.lx = f.lx, a.kx = f.kx, a.W4 = !0, a.c.Y = !0;
                                    else {
                                        f = e.re.get(d);
                                        a.R.nc = f.V;
                                        a.R.Fl(f.values.length);
                                        a.R.wH(f.Ra.length);
                                        var g;
                                        for (g = 0; g < f.values.length; g++) a.R.ob[g] = f.values[g];
                                        for (g = 0; g < f.Ra.length; g++) a.R.we[g] = f.Ra[g]
                                    }
                                    a = a.xb;
                                    if (0 != (a & 2147483648)) break;
                                    d++;
                                    if (d >= e.re.size()) break
                                }
                                break
                            }
        },
        Hr: function(a, b, c, d, e, f, g, h) {
            for (;;) {
                var p = new Eg,
                    H = null; - 1 != a && (H = this.u.ee.Xz(a));
                var l = this.h.ld.Cl(b),
                    m = l.pd;
                0 == (m.Ul & E.tu) && (f |= k.Do);
                if (this.Pb >= this.mj) break;
                var q = null,
                    n = new N;
                switch (l.Fg) {
                    case 2:
                        q = new Sg;
                        break;
                    case 3:
                        q = new Wg;
                        break;
                    case 4:
                        q = new Xg;
                        break;
                    case 5:
                        q = new Ug;
                        break;
                    case 6:
                        q = new Vg;
                        break;
                    case 7:
                        q = new qa;
                        break;
                    case 8:
                        break;
                    case 9:
                        q = new Z;
                        break;
                    default:
                        q = new Yg(l.Fg, this), null == q.ext && (q = null)
                }
                if (null == q) break;
                q.prototype = n;
                q.CY = H;
                if (0 > h)
                    for (h = 0; h < this.mj && null != this.H[h]; h++);
                if (h >= this.mj) break;
                this.H[h] = q;
                this.Pb++;
                q.WX = m.zd;
                q.Oa = m.aj;
                h > this.ZJ && this.eC++;
                q.ea = h;
                this.Vs++;
                0 == this.Vs && (this.Vs = 1);
                q.Fb = this.Vs;
                q.Yb = b;
                q.ak = a;
                q.Pa = l.Fg;
                this.gZ(q);
                q.b = this;
                q.Xr = !0;
                q.ka = m;
                a = q.La;
                if (null != a.hh)
                    for (l = a.Tp, n = 0; n < a.hh.length; n++) {
                        var t = a.hh[n],
                            v = !1,
                            A, u = this.g.jc[t],
                            z = u.M.length;
                        for (A = 0; A < z; A += 2) {
                            if (0 > u.M[A + 1]) {
                                z =
                                    A;
                                break
                            }
                            if (u.M[A + 1] == l) {
                                v = !0;
                                break
                            }
                        }
                        if (!v) {
                            t = this.g.be[t];
                            v = -1;
                            for (A = 0; A < t.M.length; A += 2)
                                if (t.M[A + 1] == l) {
                                    v = A;
                                    break
                                } if (0 <= v) {
                                var B = !0;
                                if (0 <= u.M[0])
                                    for (v += 2; B && v < t.M.length; v += 2) {
                                        var C = t.M[v + 1];
                                        for (A = 0; 0 <= u.M[A + 1]; A += 2)
                                            if (u.M[A + 1] == C) {
                                                for (B = z; B > A; B -= 2) u.M[B] = u.M[B - 2], u.M[B + 1] = u.M[B - 1];
                                                u.M[A] = b;
                                                u.M[A + 1] = l;
                                                B = !1;
                                                break
                                            }
                                    }
                                B && (u.M[z] = b, u.M[z + 1] = l)
                            }
                        }
                    }
                0 == (q.Oa & E.uE) && (q.Oa &= ~E.Vm, 0 != (q.Yg & Y.vu) && 0 != (this.u.vc & O.WD) && (q.Oa |= E.Vm), 0 != (q.Yg & (Y.rf | Y.wu)) && (q.Oa |= E.Vm));
                b = c;
                2147483648 == b && (b = H.AA);
                p.GF = b;
                q.s = b;
                2147483648 ==
                    d && (d = H.BA);
                p.HF = d;
                q.o = d;
                null != H && -1 == g && (g = H.VH);
                p.FF = g;
                q.Ka = g;
                g = this.u.sa[g];
                g.eB++;
                p.IF = g.eB;
                p.av = f;
                p.EF = e;
                p.eV = H;
                q.c = null;
                0 != (q.Oa & (E.dl | E.Dh | E.el)) && (q.c = new Tg, q.c.ua());
                q.D = null;
                0 != (q.Oa & E.Dh) && (q.D = new Qa, 0 == (p.av & k.vD) && q.D.ua(0, q, m, p, -1));
                q.ga = null;
                0 != (q.Oa & E.dl) && (q.ga = new ab, q.ga.ua(q));
                q.A = null;
                0 != (q.Oa & E.el) && (q.A = new D, q.A.YX(q, m, p));
                q.R = null;
                0 != (q.Oa & E.RR) && (q.R = new cb, q.R.ua(q, m, p));
                q.ua(m, p);
                0 != (q.Oa & E.el) && q.A.Kv(!0);
                1 <= this.Kc && q.Sj();
                return h
            }
            return -1
        },
        sv: function(a, b) {
            var c =
                this.H[a];
            if (null != c) {
                if (1 != b || 0 != c.Fb) this.sY(c), null != c.D && c.D.qc(b), null != c.R && c.R.qc(b), null != c.A && c.A.qc(b), null != c.c && c.c.qc(b), c.qc(b), this.fZ(c);
                this.H[a] = null;
                this.Pb--
            }
        },
        Mh: function(a) {
            this.mo[Math.floor(a / 32)] |= 1 << (a & 31);
            this.Zs++
        },
        PV: function() {
            if (0 != this.Zs)
                for (var a = 0, b, c; a < this.mj;) {
                    b = this.mo[a / 32];
                    if (0 != b) {
                        for (c = this.mo[a / 32] = 0; 0 != b && 32 > c; c++) {
                            if (0 != (b & 1)) {
                                var d = this.H[a + c];
                                if (null != d && 1 == d.La.Sd && (this.g.Ie(d, d.Pa | -2162688), d = d.La, null != d.hh)) {
                                    var e = d.Tp,
                                        f;
                                    for (f = 0; f < d.hh.length; f++) {
                                        var g,
                                            h = this.g.jc[d.hh[f]];
                                        for (g = 0; g < h.M.length && 0 <= h.M[g]; g += 2)
                                            if (h.M[g + 1] == e) {
                                                for (; g < h.M.length - 2 && 0 <= h.M[g]; g += 2) h.M[g] = h.M[g + 2], h.M[g + 1] = h.M[g + 3];
                                                g < h.M.length && (h.M[g] = -1, h.M[g + 1] = -1);
                                                break
                                            }
                                    }
                                }
                                this.sv(a + c, !1);
                                this.Zs--
                            }
                            b >>= 1
                        }
                        if (0 == this.Zs) break
                    }
                    a += 32
                }
        },
        sY: function(a) {
            var b = 0,
                c, d;
            if (0 != (a.Z & N.QD))
                for (c = 0; c < this.Pb; c++) {
                    for (; null == this.H[b];) b++;
                    d = this.H[b];
                    b++;
                    null != d.D && d.c.zc == aa.iE && (d = d.D.ja, d.Lo == a && 1 == d.eu && d.RK())
                }
        },
        Sj: function() {
            var a, b, c;
            for (c = a = 0; a < this.Pb; a++) {
                for (; null == this.H[c];) c++;
                c++
            }
            for (c =
                a = 0; a < this.Pb; a++) {
                for (; null == this.H[c];) c++;
                b = this.H[c];
                c++;
                b.Sj()
            }
        },
        gZ: function(a) {
            var b = a.Yb,
                c;
            for (c = 0; c < this.vh && this.ca[c].Bd != b; c++);
            b = this.ca[c];
            0 != (b.ib & 2147483648) ? (b.ib = a.ea, a.Oi = c | 2147483648, a.xb = 2147483648) : (c = this.H[b.ib], a.Oi = c.Oi, c.Oi = a.ea, a.xb = c.ea, b.ib = a.ea);
            a.hA = b.sB;
            a.La = b;
            a.Yg = b.ef; - 1 == a.ak ? a.ak = b.Es : -1 == b.Es && (b.Es = a.ak);
            b.Sd += 1
        },
        fZ: function(a) {
            var b = a.La;
            --b.Sd;
            var c;
            0 == (a.Oi & 2147483648) ? (c = this.H[a.Oi], 0 == (a.xb & 2147483648) ? (b = this.H[a.xb], null != c && (c.xb = a.xb), null != b && (b.Oi =
                a.Oi)) : null != c && (c.xb = 2147483648)) : 0 == (a.xb & 2147483648) ? (c = this.H[a.xb], null != c && (c.Oi = a.Oi, b.ib = c.ea)) : b.ib = 2147483648
        },
        kO: function() {
            var a = this.PD();
            if (null != a) {
                var b = 0,
                    c;
                for (c = 0; c < this.Pb; b++, c++) {
                    for (; null == this.H[b];) b++;
                    var d = this.H[b];
                    32 <= d.Pa && (d.ka.zd == k.by || d.ka.zd == k.Jy || d.ka.zd == k.WR || d.ka.zd == k.Cu || d.ka.zd == k.ky ? d.ext.HZ() : d.ka.zd == k.Kq && d.ext.HZ())
                }
                for (c = b = 0; c < this.Pb; b++, c++) {
                    for (; null == this.H[b];) b++;
                    d = this.H[b];
                    if (0 != (d.Oa & E.Dh)) {
                        var e = !1;
                        d.c.zc == aa.Ch && d.ka.cf.pe[d.D.oo].Nv && (e = !0);
                        0 == e && 2 == d.Pa && a.JJ(d)
                    }
                }
                for (c = b = 0; c < this.Pb; b++, c++)
                    for (; null == this.H[b];) b++
            }
        },
        PD: function() {
            if (0 == this.YJ) {
                this.YJ = !0;
                this.Kg = null;
                var a = 0,
                    b;
                for (b = 0; b < this.Pb; a++, b++) {
                    for (; null == this.H[a];) a++;
                    var c = this.H[a];
                    if (32 <= c.Pa && c.ka.zd == k.Kq) {
                        this.Kg = c.ext;
                        break
                    }
                }
            }
            return this.Kg
        },
        Ej: function(a) {
            return a && 0 == (a.Z & N.rd) && 0 != (a.Oa & E.Dh) && a.c.zc == aa.Ch && a.ka.cf.pe[a.D.oo].Nv ? a.D.ja.yd : null
        },
        ZE: function(a) {
            if (a.ka.zd == k.by || a.ka.zd == k.Jy || a.ka.zd == k.ky || a.ka.zd == k.Cu) {
                var b = 0,
                    c;
                for (c = 0; c < this.Pb; b++,
                    c++) {
                    for (; null == this.H[b];) b++;
                    var d = this.H[b];
                    32 <= d.Pa && d.ka.zd == k.Kq && (a.ka.zd == k.by ? a.ext.identifier == d.ext.identifier && d.ext.A5.add(a.ext) : a.ka.zd == k.Jy ? a.ext.identifier == d.ext.identifier && d.ext.b7.add(a.ext) : a.ka.zd == k.ky ? a.ext.identifier == d.ext.identifier && d.ext.n6.add(a.ext) : a.ka.zd == k.Cu && a.ext.identifier == d.ext.identifier && d.ext.O6.add(a.ext))
                }
                if (a.ka.zd != k.Cu)
                    for (c = b = 0; c < this.Pb; b++, c++) {
                        for (; null == this.H[b];) b++;
                        d = this.H[b];
                        d.Pa == v.tc && (d = this.Ej(d)) && a.ext.E6(d)
                    }
            }
        },
        mc: function(a) {
            return null !=
                a.D && null != a.D.ja ? a.D.ja.mc() : a.c.Xa
        },
        pause: function(a) {
            if (0 == this.ei) {
                this.ei = 1;
                this.XJ = this.h.kc;
                var b = 0,
                    c;
                for (c = 0; c < this.Pb; c++) {
                    for (; null == this.H[b];) b++;
                    var d = this.H[b];
                    b++;
                    d.Pa >= v.Qg && d.ext.Bw()
                }
                a || this.h.Ob.pause()
            }
        },
        resume: function() {
            if (!this.aZ && 0 != this.ei) {
                this.ei = 0;
                this.Wu();
                var a = 0,
                    b;
                for (b = 0; b < this.Pb; b++) {
                    for (; null == this.H[a];) a++;
                    var c = this.H[a];
                    a++;
                    c.Pa >= v.Qg && c.ext.rr()
                }
                this.h.Ob.resume();
                a = this.h.kc;
                a -= this.XJ;
                this.jm += a;
                this.Xs = 0;
                this.Pw = !1
            }
        },
        KG: function() {
            this.h.Ob.ux()
        },
        nl: function() {
            var a =
                0,
                b;
            for (b = 0; b < this.Pb; b++) {
                for (; null == this.H[a];) a++;
                var c = this.H[a];
                a++;
                c.nl()
            }
        },
        Di: function(a, b, c) {
            a = this.e0(a, b, c);
            return null != a ? a.top : k.yh
        },
        e0: function(a, b, c) {
            b -= this.da;
            c -= this.fa;
            var d; - 1 == a ? (d = 0, a = this.u.za) : (d = a, a += 1);
            for (; d < a; d++) {
                var e = this.u.sa[d].yX(b, c);
                if (null != e) return e
            }
            return null
        },
        Jz: function() {
            this.jm = this.h.kc;
            this.Zs = this.kC = this.cc = this.Kc = this.lf = 0;
            var a;
            for (a = 0; a < (this.mj + 31) / 32; a++) this.mo[a] = 0;
            this.io = this.u.es;
            this.jo = this.u.ds;
            this.lq = -k.ND;
            this.pq = -k.OD;
            this.jq = this.jf +
                k.ND;
            this.nq = this.kf + k.OD;
            this.fo = a = this.da;
            a -= k.Oq;
            0 > a && (a = this.lq);
            this.kq = a;
            this.ho = a = this.fa;
            a -= k.Pq;
            0 > a && (a = this.pq);
            this.oq = a;
            a = this.da;
            a += this.io + k.Oq;
            a > this.jf && (a = this.jq);
            this.iq = a;
            a = this.fa;
            a += this.jo + k.Pq;
            a > this.kf && (a = this.nq);
            this.mq = a;
            for (a = this.ei = this.sq = this.Jc = this.ce = 0; 4 > a; a++) this.Vd[a] = 0, this.bx[a] = 0, this.ax[a] = 255;
            this.co = 0;
            this.g.Uu = !1;
            this.g.Ws = !1;
            this.Xs = 0;
            this.Kg = null;
            this.YJ = !1;
            this.Ys = this.lo = this.ko = this.dx = null;
            for (a = 0; a < k.au; a++) this.ex[a] = 20;
            this.qq = 0
        },
        iX: function() {
            this.h.Ob.GU();
            if (null != this.h.kb && this.h.Ri) return this.jm = this.h.kc, this.lf = 0, this.cc;
            if (null != this.h.Yi) return this.h.Yi.handle(), 0;
            this.dz || (this.kO(), this.dz = !0);
            var a = this.h.kc - this.jm,
                b = this.lf;
            this.lf = a;
            this.uq = a -= b;
            this.sq += a;
            this.Kc += 1;
            this.fd = this.uq * this.u.dI / 1E3;
            this.ex[this.qq] = a;
            this.qq++;
            this.qq >= k.au && (this.qq = 0);
            for (a = 0; 4 > a; a++) this.bx[a] = this.Vd[a];
            this.oY();
            1 == this.h.ek ? this.Vd[0] |= this.h.hb.Qr() & this.hC : 2 == this.h.ek && (this.Vd[0] |= this.h.Qr() & this.hC);
            if (0 != this.Kf)
                for (this.Yz(), this.co = 0, this.h.wd[m.og] &&
                    (this.co |= 16), this.h.wd[m.Ym] && (this.co |= 32), a = 0; a < this.jC; a++) 0 != (this.t6 & 1) && (b = this.Vd[a] & 207, b |= this.co, this.Vd[a] = b);
            else this.Yz();
            for (a = 0; 4 > a; a++)
                if (b = this.Vd[a] & k.uZ[4 * this.jC + a], b &= this.ax[a], this.Vd[a] = b, b ^= this.bx[a], this.cC[a] = b, 0 != b)
                    if (b &= this.Vd[a], 0 != (b & 240)) this.g.$J = a, b = this.cC[a], 0 != (b & 240) && (this.g.bc = b, this.g.Wf(-196615)), 0 != (b & 15) && (this.g.bc = b, this.g.Wf(-196615));
                    else {
                        var c = this.g.Zc[this.g.eg[-v.pE] + 4];
                        0 != c && (this.g.bc = b, this.g.Tg(c, null))
                    } if (0 != this.Pb) {
                a = this.Pb;
                b = 0;
                do {
                    for (this.eC =
                        0; null == this.H[b];) b++;
                    c = this.H[b];
                    c.AH = c.Ev;
                    c.Ev = null;
                    c.Xr && (this.ZJ = b, c.handle());
                    a += this.eC;
                    b++;
                    a--
                } while (0 != a)
            }
            this.qd++;
            this.g.lV();
            this.g.RX();
            this.g.aK && 0 == (this.Ud & k.Uq) && this.g.Tg(0, null);
            this.g.QX();
            this.PV();
            this.doScroll();
            this.g.$w = -1;
            this.Jc++;
            if (0 == this.cc) return this.kC;
            this.cc != k.$t && this.cc != k.jy && this.cc != k.Yt && this.cc != k.Zt && this.cc != k.uR && this.cc != k.ZD || this.g.Wf(-65539);
            return this.cc
        },
        oY: function() {
            var a;
            for (a = 0; 4 > a; a++) this.Vd[a] = 0;
            var b = this.h.sX();
            for (a = 0; 4 > a; a++) {
                var c;
                for (c = 0; c < m.Vq; c++) this.h.wd[b[a * m.Vq + c]] && (this.Vd[a] |= 1 << c)
            }
        },
        Yz: function() {
            this.Lk = this.h.Yh + this.da - this.h.li;
            this.Mk = this.h.Zh + this.fa - this.h.ni
        },
        Eg: function(a) {
            a.D.pa = !1;
            k.eF = !1;
            a.D.wq = 0;
            var b, c;
            0 != (a.Yg & Y.wu) && (b = this.Is(a.c.TB, a.c.VB, a.c.UB, a.c.WB), 0 != b && (c = this.Is(a.s - a.Ea, a.o - a.Fa, a.s - a.Ea + a.S, a.o - a.Fa + a.T), 0 == c && (b ^= c, 0 != b && (a.D.wq |= Qa.IO, this.g.bc = b, this.g.Ie(a, -720896 | a.Pa & 65535)))), b = this.Is(a.s - a.Ea, a.o - a.Fa, a.s - a.Ea + a.S, a.o - a.Fa + a.T), 0 != (b & a.D.lC) && (c = a.D.pa, 0 != (b & k.yj) ? a.D.ja.Ac(a.s +
                this.jf) : 0 != (b & k.zj) && a.D.ja.Ac(a.s - this.jf), 0 != (b & k.Aj) ? a.D.ja.Bc(a.o + this.kf) : 0 != (b & k.xj) && a.D.ja.Bc(a.o - this.kf), a.c.zc != aa.pu && a.c.zc != aa.Ch && (a.D.pa = c)), b = this.Yn(a.c.TB, a.c.VB, a.c.UB, a.c.WB), b != k.pN && (c = this.Yn(a.s - a.Ea, a.o - a.Fa, a.s - a.Ea + a.S, a.o - a.Fa + a.T), b = ~b & c, 0 != b && (a.D.wq |= Qa.ED, this.g.bc = b, this.g.Ie(a, -786432 | a.Pa & 65535))));
            0 != (a.Yg & Y.vu) && (a.c.zc == aa.pu ? a.D.ja.ZY() : this.vl(a, a.c.Ma, a.c.Ua, a.c.zb, a.c.Ab, a.s, a.o, 0, O.ye) && this.g.Ie(a, -851968 | a.Pa & 65535));
            if (0 != (a.Yg & Y.dr) && (b = this.Qp(a, a.c.Ma,
                    a.c.Ua, a.c.zb, a.c.Ab, a.s, a.o, a.La.Yl), null != b))
                for (c = 0; c < b.size(); c++) {
                    var d = b.get(c);
                    if (0 == (d.Z & N.rd)) {
                        var e = a.Pa,
                            f = a,
                            g = d;
                        f.Pa > g.Pa && (f = d, g = a, e = f.Pa);
                        this.g.bc = g.Yb;
                        this.g.WJ = g.ea;
                        this.g.Ie(f, -917504 | e & 65535)
                    }
                }
            return k.eF
        },
        Qp: function(a, b, c, d, e, f, g, h) {
            var p = null;
            f -= a.Ea;
            var H = f + a.S;
            g -= a.Fa;
            var l = g + a.T,
                k, m;
            if (0 != (a.Z & N.Fj) || 0 != (a.Z & N.rd)) return p;
            var n = !1,
                q = null,
                t = -1;
            a.Pa == v.tc && 0 == (a.A.aa & D.Pj) && (n = !0);
            a.Pa == v.tc && (t = a.A.qo);
            var A = a.Z;
            a.Z |= N.Fj;
            var u = 0,
                z, B, C;
            if (null != h)
                for (u = 0; u < h.length; u += 2) {
                    z =
                        h[u + 1];
                    if (0 > z) break;
                    for (var E = this.ca[z].ib; 0 == (E & 2147483648);)
                        if (z = this.H[E], E = z.xb, 0 == (z.Z & N.Fj) && 0 == (z.Z & N.rd) && (B = z.s - z.Ea, C = z.o - z.Fa, B < H && B + z.S > f && C < l && C + z.T > g)) switch (z.Pa) {
                            case v.tc:
                                (0 > t || 0 <= t && t == z.A.qo) && 0 != (z.A.aa & D.Wm) && (0 == n || 0 != (z.A.aa & D.Pj) ? (null == p && (p = new Q), p.add(z)) : (null == q && (m = this.h.qa.Ub(b), null != m && (q = m.Vf(0, c, d, e))), m = this.h.qa.Ub(z.c.Ma), null != m && (k = m.Vf(0, z.c.Ua, z.c.zb, z.c.Ab)), null != q && null != k && q.tm(f, g, 0, k, B, C, 0) && (null == p && (p = new Q), p.add(z))));
                                break;
                            case v.Nj:
                            case v.br:
                            case v.nE:
                            case v.rE:
                            case v.lE:
                                null ==
                                    p && (p = new Q);
                                p.add(z);
                                break;
                            default:
                                null == p && (p = new Q), p.add(z)
                        }
                } else
                    for (h = 0; h < this.Pb; h++) {
                        for (; null == this.H[u];) u++;
                        z = this.H[u];
                        u++;
                        if (0 == (z.Z & N.Fj) && (B = z.s - z.Ea, C = z.o - z.Fa, B < H && B + z.S > f && C < l && C + z.T > g)) switch (z.Pa) {
                            case v.tc:
                                (0 > t || 0 <= t && t == z.A.qo) && 0 != (z.A.aa & D.Wm) && (0 == n || 0 != (z.A.aa & D.Pj) ? (null == p && (p = new Q), p.add(z)) : (null == q && (m = this.h.qa.Ub(b), null != m && (q = m.Vf(0, c, d, e))), m = this.h.qa.Ub(z.c.Ma), null != m && (k = m.Vf(0, z.c.Ua, z.c.zb, z.c.Ab)), null != q && null != k && q.tm(f, g, 0, k, B, C, 0) && (null == p && (p = new Q),
                                    p.add(z))));
                                break;
                            case v.Nj:
                            case v.br:
                            case v.nE:
                            case v.rE:
                            case v.lE:
                                null == p && (p = new Q);
                                p.add(z);
                                break;
                            default:
                                null == p && (p = new Q), p.add(z)
                        }
                    }
            a.Z = A;
            return p
        },
        vl: function(a, b, c, d, e, f, g, h, p) {
            b = this.u.sa[a.Ka];
            switch (a.Pa) {
                case v.tc:
                    if (0 == (a.A.aa & D.Pj)) {
                        if (a = this.h.qa.Ub(a.c.Ma), null != a) return a = a.Vf(R.pi, c, d, e), null != b.tm(a, f - this.da, g - this.fa, h, p)
                    } else return f = f - a.Ea - this.da, g = g - a.Fa - this.fa, c = f + a.S, a = g + a.T, h = null != b.vx(f, g, c, a, h, p);
                    return !1;
                default:
                    return f = f - a.Ea - this.da, g = g - a.Fa - this.fa, c = f + a.S, a =
                        g + a.T, h = null != b.vx(f, g, c, a, h, p)
            }
        },
        Yn: function(a, b, c, d) {
            var e = 0;
            0 > a && (e |= k.yj);
            0 > b && (e |= k.Aj);
            c > this.jf && (e |= k.zj);
            d > this.kf && (e |= k.xj);
            return k.HE[e]
        },
        Is: function(a, b, c, d) {
            var e = 15;
            a < this.jf && (e &= ~k.zj);
            b < this.kf && (e &= ~k.xj);
            0 < c && (e &= ~k.yj);
            0 < d && (e &= ~k.Aj);
            return k.HE[e]
        },
        random: function(a) {
            var b = 31415 * this.dC + 1;
            this.dC = b &= 65535;
            return b * a >>> 16
        },
        Dv: function(a) {
            if (0 == a || -1 == a) return this.random(32);
            var b, c = 0,
                d = 0,
                e = a;
            for (b = 0; 32 > b; b++) 0 != (e & 1) && (d++, c = b), e >>>= 1;
            if (1 == d) return c;
            d = this.random(d);
            e = a;
            for (b = 0; 32 > b; b++) {
                if (0 != (e & 1) && (d--, 0 > d)) return b;
                e >>>= 1
            }
            return 0
        },
        Rc: function(a) {
            this.dg = a.ta;
            this.Ca = 0;
            this.Fe = !1;
            return this.getExpression()
        },
        W: function(a) {
            this.dg = a.ta;
            this.Ca = 0;
            this.Fe = !1;
            return this.getExpression()
        },
        cA: function(a) {
            this.dg = a.ta;
            this.Ca = 0;
            this.Fe = !1;
            return this.getExpression()
        },
        Ld: function(a) {
            this.dg = a.ta;
            this.Ca = 0;
            this.Fe = !1;
            return this.getExpression()
        },
        Ag: function() {
            this.Fe = !1;
            var a = this.getExpression();
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        },
        getExpression: function() {
            var a, b =
                this.K;
            this.rq[this.K] = this.fx;
            do {
                this.K++;
                this.kr = !0;
                this.dg[this.Ca].evaluate(this);
                this.kr = !1;
                this.Ca++;
                do
                    if (a = this.dg[this.Ca], 0 < a.code && 1310720 > a.code) a.code > this.rq[this.K - 1].code ? (this.rq[this.K] = a, this.Ca++, this.K++, this.kr = !0, this.dg[this.Ca].evaluate(this), this.kr = !1, this.Ca++) : (this.K--, this.rq[this.K].evaluate(this));
                    else {
                        this.K--;
                        if (this.K == b) break;
                        this.rq[this.K].evaluate(this)
                    } while (1)
            } while (this.K > b + 1);
            return this.P[b + 1]
        },
        iH: function(a, b) {
            var c = this.g.ie(a);
            if (null == c) return b ? !0 :
                !1;
            var d = this.g.pc,
                e = 0,
                f, g, h, p, H, l, k = new Q;
            for (f = 0; f < this.Pb; f++) {
                for (; null == this.H[e];) e++;
                g = this.H[e];
                e++;
                h = g.s - g.Ea;
                p = g.o - g.Fa;
                H = h + g.S;
                l = p + g.T;
                this.Lk >= h && this.Lk < H && this.Mk >= p && this.Mk < l && 0 == (g.Z & N.rd) && (g.Pa == v.tc ? 0 == (g.A.aa & D.Pj) ? this.h.qa.Ub(g.c.Ma).Vf(R.pi, 0, 1, 1).XK(this.Lk - g.s, this.Mk - g.o, g.c.Ua, g.c.zb, g.c.Ab) && k.add(g) : k.add(g) : k.add(g))
            }
            if (0 == k.size()) return b ? !0 : !1;
            if (0 == b) {
                do {
                    for (e = 0; e < k.size() && (g = k.get(e), g != c); e++);
                    e == k.size() && (d--, this.g.nd());
                    c = this.g.Kd()
                } while (null != c);
                return 0 !=
                    d
            }
            do {
                for (e = 0; e < k.size(); e++)
                    if (g = k.get(e), g == c) return !1;
                c = this.g.Kd()
            } while (null != c);
            return !0
        },
        HH: function(a) {
            var b = !1,
                c = 0;
            if (0 != (a.Oa & E.dl)) {
                if (null != a.A && a.A.ZX()) return;
                null != a.ga && a.ga.Ai(F.Am) && (c = 1)
            }
            0 == c && (b = !0);
            b ? (a.Xr = !1, this.Mh(a.ea)) : (null != a.A && (a.A.nx(!1), a.Z |= N.Fj), null != a.D && (a.D.qc(!1), a.D.FH(a, aa.DR, !1), a.c.na = 0), 0 != (c & 1) && (a.ga.ir(F.Am), a.ga.Su()))
        },
        Bz: function() {
            var a, b = new ja,
                c;
            for (c = 0; c < this.u.za; c++) {
                var d = this.u.sa[c],
                    e = 0 != (d.Sa & da.Ot),
                    f = 0 != (d.Sa & da.Pt),
                    g = d.pw,
                    h;
                for (h = 0; h < g; h++) {
                    a =
                        this.u.ee.gH(d.rw + h);
                    a.Vv < v.tc && (b.left = a.AA, b.top = a.BA);
                    var p;
                    p = new ka(this.h, b.left, b.top, a, null, 0);
                    p.Nc(0, d);
                    e ? (p = new ka(this.h, this.u.ae + b.left, b.top, a, null, 0), p.Nc(1, d), b.left + p.width > this.u.ae && (p = new ka(this.h, b.left - this.u.ae, b.top, a, null, 0), p.Nc(4, d)), f && (p = new ka(this.h, b.left, this.u.Gc + b.top, a, null, 0), p.Nc(2, d), p = new ka(this.h, this.u.ae + b.left, this.u.Gc + b.top, a, null, 0), p.Nc(3, d), b.top + p.height > this.u.Gc && (p = new ka(this.h, b.left, b.top - this.u.Gc, a, null, 0), p.Nc(5, d)))) : f && (p = new ka(this.h,
                        b.left, this.u.Gc + b.top, a, null, 0), p.Nc(2, d), b.top + p.height > this.u.Gc && (p = new ka(this.h, b.left, b.top - this.u.Gc, a, null, 0), p.Nc(5, d)))
                }
            }
        },
        it: function() {
            for (var a, b = this.fo, c = this.ho, d, e, f = 0; f < this.u.za; f++) {
                a = this.u.sa[f];
                d = b;
                e = c;
                0 != (a.Sa & (da.cy | da.dy)) && (0 != (a.Sa & da.cy) && (d *= a.hg), 0 != (a.Sa & da.dy) && (e *= a.ig));
                d += a.Ww;
                e += a.Xw;
                d += a.De;
                e += a.Ee;
                var g = 0 != (a.Sa & da.Pt);
                0 != (a.Sa & da.Ot) && (d %= this.u.ae, 0 > d && (d += this.u.ae));
                g && (e %= this.u.Gc, 0 > e && (e += this.u.Gc));
                a.x = d;
                a.y = e;
                a.Ww += a.De;
                a.Xw += a.Ee;
                a.$c.x = -d + this.h.li;
                a.$c.y = -e + this.h.ni;
                a.Ic.x = -d + this.h.li;
                a.Ic.y = -e + this.h.ni;
                a.yb.x = -d + this.h.li;
                a.yb.y = -e + this.h.ni
            }
            this.u.Kl = b;
            this.u.Ll = c
        },
        zH: function(a) {
            0 <= a && a < this.u.za && this.u.sa[a].Wr()
        },
        MK: function(a) {
            0 <= a && a < this.u.za && this.u.sa[a].show()
        },
        VX: function() {
            var a;
            for (a = 0; a < this.u.za; a++) {
                var b = this.u.sa[a];
                b.Sa & da.Sq && b.Wr()
            }
        },
        t_: function(a, b, c, d) {
            a -= Math.floor(this.io / 2);
            b -= Math.floor(this.jo / 2); - 1 != c && c < this.u.za && (c = this.u.sa[c], 1 < c.hg && (a -= this.da, a /= c.hg, a = l.ub(this.da + a)), 1 < c.ig && (b -= this.fa, b /= c.ig, b =
                l.ub(this.fa + b)));
            0 > a && (a = 0);
            0 > b && (b = 0);
            c = a + this.io;
            var e = b + this.jo;
            c > this.jf && (c = this.jf - this.io, 0 > c && (c = 0), a = c);
            e > this.kf && (e = this.kf - this.jo, 0 > e && (e = 0), b = e);
            0 != (d & 1) && a != this.da && (this.fo = a, this.ce |= k.Oj);
            0 != (d & 2) && b != this.fa && (this.ho = b, this.ce |= k.Oj)
        },
        b0: function(a, b) {
            var c = !1;
            this.gx = a - this.da;
            this.hx = b - this.fa;
            if (0 != this.gx || 0 != this.hx) c = !0;
            var d;
            if (!c)
                for (var e = 0; e < this.u.za; e++)
                    if (d = this.u.sa[e], 0 != d.De || 0 != d.Ee) {
                        c = !0;
                        break
                    } var e = this.da,
                f = this.fa,
                g = this.gx,
                h = this.hx;
            this.da = a;
            this.kq = a -
                k.Oq;
            0 > this.kq && (this.kq = this.lq);
            this.fa = b;
            this.oq = b - k.Pq;
            0 > this.oq && (this.oq = this.pq);
            this.iq = a + this.io + k.Oq;
            this.iq > this.jf && (this.iq = this.jq);
            this.mq = b + this.jo + k.Pq;
            this.mq > this.kf && (this.mq = this.nq);
            if (c)
                for (var p = c = 0; p < this.Pb; p++) {
                    for (; null == this.H[c];) c++;
                    var H = this.H[c];
                    c++;
                    if (0 != (H.Oa & E.QR)) null == H.D ? (H.s += g, H.o += h) : (H.D.ja.Ac(H.s + g), H.D.ja.Bc(H.o + h));
                    else if (d = H.Ka, d < this.u.za) {
                        var l = e,
                            m = f,
                            q = a,
                            n = b;
                        d = this.u.sa[d];
                        0 != (d.Sa & da.cy) && (l *= d.hg, q *= d.hg);
                        0 != (d.Sa & da.dy) && (m *= d.ig, n *= d.ig);
                        l = H.s +
                            l - q + g - d.De;
                        d = H.o + m - n + h - d.Ee;
                        0 == (H.Oa & E.Dh) ? (H.s = l, H.o = d) : (H.D.ja.Ac(l), H.D.ja.Bc(d));
                        H.up()
                    }
                }
        },
        doScroll: function() {
            if (0 != (this.ce & k.Oj)) {
                this.ce = 0;
                var a = this.u.Kl != this.fo || this.u.Ll != this.ho;
                if (!a)
                    for (var b = 0; b < this.u.za; b++)
                        if (0 != this.u.sa[b].De || 0 != this.u.sa[b].Ee) {
                            a = !0;
                            break
                        } if (a)
                    for (this.it(), this.b0(this.u.Kl, this.u.Ll), b = 0; b < this.u.za; b++) this.u.sa[b].De = 0, this.u.sa[b].Ee = 0;
                this.fo = this.da;
                this.ho = this.fa
            }
        },
        fU: function(a, b) {
            var c = this.u.sa[a.Ka],
                d = this.h.qa.Ub(a.c.Ma),
                e = new ka(this.h, a.s - this.da +
                    c.x, a.o - this.fa + c.y, null, d, b);
            e.qj(a.A.qb, a.A.nb);
            e.Nc(0, c);
            b != ia.So && b != ia.qf || null == this.Kg || (e.body = this.Kg.GZ(a.s - this.da + c.x, a.o - this.fa + c.y, a.c.Ma, b));
            var f = 0 != (c.Sa & da.Pt);
            0 != (c.Sa & da.Ot) ? (e = new ka(this.h, this.u.ae + a.s - this.da + c.x, a.o - this.fa + c.y, null, d, b), e.qj(a.A.qb, a.A.nb), e.Nc(1, c), a.s + e.width > this.u.ae && (e = new ka(this.h, a.s - this.da + c.x - this.u.ae, a.o - this.fa + c.y, null, d, b), e.qj(a.A.qb, a.A.nb), e.Nc(4, c)), f && (e = new ka(this.h, a.s - this.da + c.x, this.u.Gc + a.o - this.fa + c.y, null, d, b), e.qj(a.A.qb,
                a.A.nb), e.Nc(2, c), e = new ka(this.h, this.u.ae + a.s - this.da + c.x, this.u.Gc + a.o - this.fa + c.y, null, d, b), e.qj(a.A.qb, a.A.nb), e.Nc(3, c), a.o + e.height > this.u.Gc && (e = new ka(this.h, a.s - this.da + c.x, a.o - this.fa + c.y - this.u.Gc, null, d, b), e.qj(a.A.qb, a.A.nb), e.Nc(5, c)))) : f && (e = new ka(this.h, a.s - this.da + c.x, this.u.Gc + a.o - this.fa + c.y, null, d, b), e.qj(a.A.qb, a.A.nb), e.Nc(2, c), a.o + e.height > this.u.Gc && (e = new ka(this.h, a.s - this.da + c.x, a.o - this.fa + c.y - this.u.Gc, null, d, b), e.qj(a.A.qb, a.A.nb), e.Nc(5, c)))
        },
        Mu: function(a, b, c, d, e,
            f) {
            d = this.u.sa[d];
            var g = new ka(this.h, b - this.da + d.x, c - this.da + d.y, null, a, e);
            g.Nc(0, d);
            !f || e != ia.So && e != ia.qf || null == this.Kg || (g.body = this.Kg.GZ(pHo.s - this.da + d.x, pHo.o - this.fa + d.y, pHo.c.Ma, e));
            f = 0 != (d.Sa & da.Pt);
            0 != (d.Sa & da.Ot) ? (g = new ka(this.h, this.u.ae + b - this.da + d.x, c - this.fa + d.y, null, a, e), g.Nc(1, d), b + g.width > this.u.ae && (g = new ka(this.h, b - this.da + d.x - this.u.ae, c - this.fa + d.y, null, a, e), g.Nc(4, d)), f && (g = new ka(this.h, b - this.da + d.x, this.u.Gc + c - this.fa + d.y, null, a, e), g.Nc(2, d), g = new ka(this.h, this.u.ae +
                b - this.da + d.x, this.u.Gc + c - this.fa + d.y, null, a, e), g.Nc(3, d), c + g.height > this.u.Gc && (g = new ka(this.h, b - this.da + d.x, c - this.fa + d.y - this.u.Gc, null, a, e), g.Nc(5, d)))) : f && (g = new ka(this.h, b - this.da + d.x, this.u.Gc + c - this.fa + d.y, null, a, e), g.Nc(2, d), c + g.height > this.u.Gc && (g = new ka(this.h, b - this.da + d.x, c - this.fa + d.y - this.u.Gc, null, a, e), g.Nc(5, d)))
        },
        MV: function(a) {
            0 > a || a >= this.u.za || this.u.sa[a].LV()
        },
        JX: function() {
            return 0 != this.Kf ? 0 : this.Lk
        },
        KX: function() {
            return 0 != this.Kf ? 0 : this.Mk
        },
        kZ: function(a) {
            this.jx = this.Jc;
            0 > a ? this.g.Wf(-720902) : this.g.Wf(-655366)
        },
        QG: function(a) {
            var b, c;
            if (0 != this.Pb)
                for (b = 0; b < this.mj; b++)
                    if ((c = this.H[b]) && c.La.dj == a) return this.Nz = c.La.Sd - 1, c;
            return null
        },
        RG: function(a) {
            if (a && this.Nz) {
                var b = a.ea + 1;
                a = a.La.dj;
                for (var c;;) {
                    c = this.H[b];
                    if (null != c && c.La.dj == a) return this.Nz--, c;
                    b++
                }
            }
            this.Nz = 0;
            return null
        }
    };
    Eg.Do = 2;
    Y.M3 = 15;
    Y.UR = 16;
    Y.dr = 128;
    Y.rf = 256;
    Y.vu = 512;
    Y.wu = 1024;
    Y.N3 = 2048;
    Y.xu = 4096;
    Y.TR = 65535;
    Y.prototype = {
        pV: function(a) {
            this.Bd = a.Cs;
            this.se = a.Fg;
            var b = a.pd;
            this.Rn = b.Ul;
            this.lJ = a.mB;
            this.kJ = a.nB;
            this.xw = b.aj;
            this.Da = 0;
            this.ib = -1;
            this.ef = Y.TR;
            null != a.oB && (this.dj = a.oB);
            this.Vp = Array(8);
            for (a = 0; 8 > a; a++) this.Vp[a] = b.jB[a];
            this.hh = null
        }
    };
    na.CR = 0;
    na.T2 = 1;
    na.W2 = 2;
    na.U2 = 3;
    na.Q2 = 4;
    na.R2 = 5;
    na.S2 = 6;
    na.P2 = 7;
    na.V2 = 8;
    na.X2 = 9;
    na.L2 = 0;
    na.J2 = 1;
    na.N2 = 2;
    na.K2 = 3;
    na.M2 = 4;
    na.Ox = 123456789;
    na.prototype = {
        cR: function() {
            m_currentAngle = 0
        },
        ua: function(a) {
            this.f = a;
            this.l = this.f.b
        },
        Lv: function() {},
        qc: function() {},
        move: function() {
            return !1
        },
        setPosition: function() {},
        Ac: function() {},
        Bc: function() {},
        stop: function() {},
        Se: function() {},
        reverse: function() {},
        start: function() {},
        nf: function() {},
        hi: function() {},
        mf: function() {},
        lt: function() {},
        mt: function() {},
        yq: function() {},
        Lu: function() {
            return 0
        },
        Ur: function() {
            return 0
        },
        dH: function() {
            return 0
        },
        Av: function() {
            return 0
        },
        sp: function(a) {
            return this.f.D.sp(this.f, a, 32)
        },
        Bi: function(a) {
            this.f.c.If = a;
            null != this.f.ga && this.f.ga.sg()
        },
        pr: function() {
            this.f.b.qd++;
            this.f.D.ja.Ke = this.f.b.qd;
            this.f.b.Eg(this.f)
        },
        aF: function(a, b, c, d, e, f, g) {
            a -= this.f.b.da;
            b -= this.f.b.fa;
            c -= this.f.b.da;
            d -= this.f.b.fa;
            a = this.f.D.ja.Ql(a, b, c, d, e, f, g);
            g.x += this.f.b.da;
            g.y += this.f.b.fa;
            return a
        },
        YK: function(a, b, c, d, e) {
            return this.f.D.ja.xm(a, b, c, d, e)
        },
        Qr: function(a) {
            return this.f.b.Vd[a]
        },
        un: function() {
            return 0
        },
        kt: function() {}
    };
    F.Ne = 0;
    F.kd = 1;
    F.jg = 2;
    F.Dt = 3;
    F.Am = 4;
    F.hN = 5;
    F.Et = 6;
    F.OC = 7;
    F.NC = 8;
    F.MC = 9;
    F.Px = 10;
    F.Ft = 11;
    F.D0 = 12;
    F.W_ = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    F.prototype = {
        load: function(a) {
            var b = a.ma,
                c = Array(32),
                d;
            for (d = 0; 32 > d; d++) c[d] = a.v();
            this.tf = Array(32);
            this.Qj = Array(32);
            this.ml = Array(32);
            for (d =
                0; 32 > d; d++) this.tf[d] = null, this.Qj[d] = 0, this.ml[d] = 0, 0 != c[d] && (this.tf[d] = new Fg, a.seek(b + c[d]), this.tf[d].load(a))
        },
        bd: function(a) {
            var b;
            for (b = 0; 32 > b; b++) null != this.tf[b] && this.tf[b].bd(a)
        },
        vU: function(a) {
            var b, c, d, e, f;
            for (b = 0; 32 > b; b++)
                if (null == this.tf[b]) {
                    c = 0;
                    for (e = b + 1; 32 > c; c++, e++)
                        if (e &= 31, null != this.tf[e]) {
                            this.Qj[b] = e;
                            break
                        } d = 0;
                    for (f = b - 1; 32 > d; d++, f--)
                        if (f &= 31, null != this.tf[f]) {
                            this.ml[b] = f;
                            break
                        } e == f || c < d ? this.Qj[b] |= 64 : d < c && (this.ml[b] |= 64)
                } else 16 > a && 0 == F.W_[a] && (this.tf[b].Qy = this.tf[b].Py)
        }
    };
    gb.WK = [F.Dt, F.kd, F.jg, 0, F.jg, F.Ne, 0, 0, F.kd, F.Ne, 0, 0, F.Ne, F.kd, F.jg, 0, F.Ne, 0, 0, 0, F.Ne, F.kd, F.jg, 0, F.Ne, F.kd, F.jg, 0, F.kd, F.jg, F.Ne, 0, F.Ne, F.kd, F.jg, 0, F.kd, F.jg, F.Ne, 0, F.Ne, F.kd, F.jg, 0, F.Ne, F.kd, F.jg, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    gb.prototype = {
        load: function(a) {
            var b = a.ma;
            a.wa(2);
            this.Eh = a.v();
            var c = Array(this.Eh),
                d;
            for (d = 0; d < this.Eh; d++) c[d] = a.v();
            this.Fh = Array(this.Eh);
            this.ll = Array(this.Eh);
            for (d = 0; d < this.Eh; d++) this.Fh[d] = null, this.ll[d] = 0, 0 != c[d] && (this.Fh[d] = new F, a.seek(b + c[d]), this.Fh[d].load(a),
                this.ll[d] = 1);
            for (a = 0; a < this.Eh; a++)
                if (0 == this.ll[a]) {
                    b = !1;
                    if (12 > a)
                        for (d = 0; 4 > d; d++)
                            if (0 != this.ll[gb.WK[4 * a + d]]) {
                                this.Fh[a] = this.Fh[gb.WK[4 * a + d]];
                                b = !0;
                                break
                            } if (0 == b)
                        for (d = 0; d < this.Eh; d++)
                            if (0 != this.ll[d]) {
                                this.Fh[a] = this.Fh[d];
                                break
                            }
                } else this.Fh[a].vU(a)
        },
        bd: function(a) {
            var b;
            for (b = 0; b < this.Eh; b++) 0 != this.ll[b] && this.Fh[b].bd(a)
        }
    };
    Fg.prototype = {
        load: function(a) {
            this.Qy = a.lb();
            this.Py = a.lb();
            this.WE = a.v();
            this.XE = a.v();
            this.bp = a.v();
            this.Zm = Array(this.bp);
            var b;
            for (b = 0; b < this.bp; b++) this.Zm[b] = a.v()
        },
        bd: function(a) {
            var b;
            for (b = 0; b < this.bp; b++)
                if (null != a) {
                    var c = a.Gi(this.Zm[b]); - 1 != c && (this.Zm[b] = c)
                }
        }
    };
    ab.Ty = [F.Ne, F.kd, F.jg, F.hN, F.Et, F.OC, F.NC, F.MC, F.Px, F.Ft, 12, 13, 14, 15, -1];
    ab.prototype = {
        ua: function(a) {
            this.a = a;
            this.aq = 0;
            this.GH(F.kd);
            if (this.Ai(F.Dt)) this.aq = 1, this.ir(F.Dt), this.Su(), this.Bi();
            else {
                for (a = 0; 0 <= ab.Ty[a] && !this.Ai(ab.Ty[a]); a++);
                0 > ab.Ty[a] && this.Ai(F.Am) && (this.aq = 2, this.ir(F.Am), this.Su(), this.Bi())
            }
        },
        GH: function(a) {
            this.a.c.If = a;
            this.Ss = !1;
            this.bg = this.Ps = this.cm = this.em = this.Qs =
                this.hj = 0;
            this.Sw = this.dm = this.ij = -1;
            this.Rs = this.cg = null;
            this.Bi()
        },
        sg: function() {
            switch (this.aq) {
                case 0:
                    return this.Bi();
                case 1:
                    this.sU();
                    break;
                case 2:
                    this.tU()
            }
            return !1
        },
        Bi: function() {
            var a = this.a.s;
            this.a.c.Gk = a;
            a -= this.a.Ea;
            this.a.c.TB = a;
            a += this.a.S;
            this.a.c.UB = a;
            a = this.a.o;
            this.a.c.Hk = a;
            a -= this.a.Fa;
            this.a.c.VB = a;
            a += this.a.T;
            this.a.c.WB = a;
            this.a.c.Uw = this.a.c.Ma;
            this.a.c.Tw = this.a.c.Ua;
            return this.Rg(1)
        },
        Rg: function(a) {
            var b = this.a.ka,
                c = this.a.c.na,
                d = this.a.c.If;
            0 != this.em && (c = this.em - 1);
            d ==
                F.kd && (0 == c && (d = F.Ne), 75 <= c && (d = F.jg));
            0 != this.hj && (d = this.hj - 1);
            d != this.ij && (this.ij = d, d >= b.Sl.Eh && (d = b.Sl.Eh - 1), b = b.Sl.Fh[d], b != this.cg && (this.cg = b, this.Rw = -1, this.bg = 0, 0 == (this.a.Oa & E.PR) && (this.Ps = 0)));
            var e, f = this.a.c.Xa % 32,
                b = !1;
            0 != this.Qs && (f = this.Qs - 1);
            if (this.Rw != f && (this.Rw = f, e = this.cg.tf[f], null == e ? 0 != (this.cg.ml[f] & 64) ? f = this.cg.ml[f] & 63 : 0 != (this.cg.Qj[f] & 64) ? f = this.cg.Qj[f] & 63 : (e = f, 0 > this.Sw ? f = this.cg.Qj[f] & 63 : (f -= this.Sw, f = 15 < (f & 31) ? this.cg.Qj[e] & 63 : this.cg.ml[e] & 63)) : this.Sw = f, e = this.cg.tf[f],
                    null != this.cg.tf[0] && 0 != (this.a.ka.Ul & E.MR) && (this.a.c.Ua = 360 * this.Rw / 32, e = this.cg.tf[0], this.Rs = null, b = !0), this.Rs != e)) {
                this.Rs = e;
                this.Zn = e.WE;
                this.LJ = e.XE;
                var f = e.Qy,
                    g = e.Py;
                if (f != this.dm || g != this.$p) this.dm = f, this.$p = g, this.KJ = g - f, this.Zp = f, this.QB = -1;
                this.ff = e.bp;
                0 != this.cm && this.cm - 1 >= this.ff && (this.cm = 0);
                this.bg >= this.ff && (this.bg = 0);
                e = e.Zm[this.bg];
                0 == this.Ss && (this.a.c.Ma = e, e = this.a.b.h.qa.Ki(e, this.a.c.Ua, this.a.c.zb, this.a.c.Ab), null != e && (this.a.S = e.width, this.a.T = e.height, this.a.Ea = e.eb,
                    this.a.Fa = e.Za, this.a.iA = e.ki, this.a.jA = e.mi), this.a.c.Y = !0, this.a.c.Cb = !0);
                if (1 == this.ff) {
                    0 == this.dm && (this.ff = 0);
                    e = this.a.c.Ma;
                    if (0 == e) return !1;
                    e = this.a.b.h.qa.Ki(e, this.a.c.Ua, this.a.c.zb, this.a.c.Ab);
                    null != e && (this.a.S = e.width, this.a.T = e.height, this.a.Ea = e.eb, this.a.Fa = e.Za, this.a.iA = e.ki, this.a.jA = e.mi);
                    return !1
                }
            }
            if (0 == a && 0 == this.cm || 0 == b && 0 == this.ff && d != F.Am) return !1;
            a = this.KJ;
            c != this.QB && (this.QB = c, 0 == a ? (this.Zp = this.dm, 0 != this.em && (this.Zp = this.em - 1)) : (d = this.a.c.Vb - this.a.c.Fk, 0 == d ? 0 != this.em ?
                (a = a * c / 100 + this.dm, a > this.$p && (a = this.$p)) : (a /= 2, a += this.dm) : (a = a * c / d + this.dm, a > this.$p && (a = this.$p)), this.Zp = a));
            e = this.Rs;
            a = this.cm;
            if (0 == a) {
                if (0 == this.Zp || this.Ss) return !1;
                c = this.Ps;
                a = this.bg;
                d = this.Zp;
                0 != (this.a.b.u.vc & O.td) && (d = Math.round(d * this.a.b.fd));
                for (c += d; 100 < c;)
                    if (c -= 100, a++, a >= this.ff && (a = this.LJ, 0 != this.Zn && (this.Zn--, 0 == this.Zn))) {
                        this.bg = this.ff - 1;
                        0 > this.bg && (this.bg = 0);
                        this.ff = 0;
                        0 != this.hj && (this.em = this.Qs = this.hj = 0);
                        this.bg < e.bp && (e = e.Zm[this.bg], e != this.a.c.Ma && (this.a.c.Ma =
                            e, this.a.c.Y = !0, this.a.c.Cb = !0));
                        this.Ps = c;
                        if (0 != (this.a.b.Ud & k.ey)) return !1;
                        b && (this.a.c.Y = !0, this.a.c.Cb = !0, e = this.a.b.h.qa.Ki(this.a.c.Ma, this.a.c.Ua, this.a.c.zb, this.a.c.Ab), null != e && (this.a.S = e.width, this.a.T = e.height, this.a.Ea = e.eb, this.a.Fa = e.Za, this.a.iA = e.ki, this.a.jA = e.mi));
                        b = -131072;
                        b |= this.a.Pa & 65535;
                        this.a.b.g.bc = this.a.ga.ij;
                        return this.a.b.g.Ie(this.a, b)
                    } this.Ps = c
            } else a--;
            this.bg = a;
            this.a.c.Y = !0;
            this.a.c.Cb = !0;
            e = e.Zm[a];
            if (this.a.c.Ma != e || this.MJ != this.a.c.Ua) this.a.c.Ma = e, this.MJ =
                this.a.c.Ua, 0 <= e && (e = this.a.b.h.qa.Ki(e, this.a.c.Ua, this.a.c.zb, this.a.c.Ab), null != e && (this.a.S = e.width, this.a.T = e.height, this.a.Ea = e.eb, this.a.Fa = e.Za, this.a.iA = e.ki, this.a.jA = e.mi));
            return !1
        },
        Ai: function(a) {
            return 0 == this.a.ka.Sl.ll[a] ? !1 : !0
        },
        Su: function() {
            0 == this.Zn && (this.Zn = 1)
        },
        ir: function(a) {
            this.hj = a + 1;
            this.Rg(0)
        },
        uU: function() {
            this.hj = 0;
            this.Rg(0)
        },
        oU: function(a) {
            this.Qs = (a & 31) + 1;
            this.Rg(0)
        },
        rU: function(a) {
            0 > a && (a = 0);
            100 < a && (a = 100);
            this.em = a + 1;
            this.Rg(0)
        },
        pU: function(a) {
            a >= this.ff && (a = this.ff -
                1);
            0 > a && (a = 0);
            this.cm = a + 1;
            this.Rg(0)
        },
        qU: function() {
            this.cm = 0;
            this.Rg(0)
        },
        sU: function() {
            this.Rg(1);
            this.hj != F.Dt + 1 && (this.Ai(F.Ne) || this.Ai(F.kd) || this.Ai(F.jg) ? (this.aq = 0, this.uU()) : (this.aq = 2, this.a.b.HH(this.a)))
        },
        tU: function() {
            0 == (this.a.Z & N.Zk) && (this.Rg(1), this.hj != F.Am + 1 && this.a.b.Mh(this.a.ea))
        }
    };
    Gg.prototype = {
        xz: function() {
            var a = this.app.gm + "M" + l.Kr(this.handle, "png"),
                b = new Image;
            b.crossOrigin = 'anonymous';
            this.qa.wc[this.handle] = b;
            var c = this;
            b.onload = function() {
                c.app.yl(c)
            };
            b.onerror = function() {
                c.app.yl(c)
            };
            b.src =
                a
        }
    };
    Hg.prototype = {
        yk: function(a) {
            this.file = a;
            this.xc = this.file.v();
            this.Qn = Array(this.xc);
            a = this.file.v();
            var b, c, d = new oa;
            for (b = 0; b < a; b++) c = this.file.ma, d.Fp(this.file), this.Qn[d.handle] = c;
            this.Db = Array(this.xc);
            for (b = 0; b < this.xc; b++) this.Db[b] = 0;
            this.gb = null;
            this.jk = this.xc;
            this.eh = 0;
            this.images = null
        },
        Ub: function(a) {
            return 0 <= a && a < this.jk && -1 != this.gb[a] ? this.images[this.gb[a]] : null
        },
        jt: function() {
            var a;
            for (a = 0; a < this.xc; a++) this.Qn[a] && (this.Db[a] = 1)
        },
        rh: function() {
            if (0 == (this.app.Sa & m.Uk) && 0 ==
                (this.app.Sa & m.Mx)) {
                var a;
                for (a = 0; a < this.xc; a++) this.Db[a] = 0
            }
            this.tk = null
        },
        om: function(a) {
            this.Db[a]++
        },
        Gi: function(a) {
            this.om(a);
            return -1
        },
        XH: function(a) {
            null == this.wc[a] && (null != this.tk && a < this.tk.length && null != this.tk[a] ? this.wc[a] = this.tk[a] : (this.wc[a] = new Gg(this, a), this.app.hr(this.wc[a])))
        },
        load: function(a) {
            var b;
            if (0 < this.app.Gf)
                if (null == this.wc) {
                    if (this.wc = Array(this.app.Gf), this.app.Sa & m.Uk)
                        for (b = 0; b < this.app.Gf; b++) this.app.wc[b] && this.XH(b)
                } else if (0 == (this.app.Sa & m.Uk)) {
                this.tk = Array(this.app.Gf);
                for (b = 0; b < this.app.Gf; b++) this.tk[b] = this.wc[b];
                this.wc = Array(this.app.Gf);
                for (b = 0; b < this.app.Gf; b++) this.wc[b] = null
            }
            for (b = this.eh = 0; b < this.xc; b++) 0 != this.Db[b] && this.eh++;
            b = Array(this.eh);
            var c = 0,
                d;
            for (d = 0; d < this.xc; d++)
                if (0 != this.Db[d]) {
                    if (null != this.images && -1 != this.gb[d] && null != this.images[this.gb[d]]) {
                        if (b[c] = this.images[this.gb[d]], b[c].Db = this.Db[d], null != this.wc && null != this.tk) {
                            var e = b[c].$b;
                            0 < e && (this.wc[e] = this.tk[e])
                        }
                    } else 0 != this.Qn[d] && (b[c] = new oa, a.seek(this.Qn[d]), b[c].load(this.app),
                        b[c].Db = this.Db[d]);
                    c++
                } this.images = b;
            this.gb = Array(this.xc);
            for (b = 0; b < this.xc; b++) this.gb[b] = -1;
            for (b = 0; b < this.eh; b++) this.images[b] && (this.gb[this.images[b].handle] = b);
            this.jk = this.xc
        },
        EA: function(a) {
            var b;
            for (b = 0; b < a.length; b++)
                if (0 <= a[b] && a[b] < this.jk && 0 != this.Qn[a[b]] && null == this.Ub(a[b])) {
                    var c, d = -1;
                    for (c = 0; c < this.eh; c++)
                        if (null == this.images[c]) {
                            d = c;
                            break
                        } if (-1 == d) {
                        var e = Array(this.eh + 10);
                        for (c = 0; c < this.eh; c++) e[c] = this.images[c];
                        for (; c < this.eh + 10; c++) e[c] = null;
                        d = this.eh;
                        this.eh += 10;
                        this.images =
                            e
                    }
                    this.gb[a[b]] = d;
                    this.images[d] = new oa;
                    this.images[d].Db = 1;
                    this.file.seek(this.Qn[a[b]]);
                    this.images[d].load(this.app)
                }
        },
        Ki: function(a, b, c, d) {
            var e;
            null == this.uk && (this.uk = new oa);
            e = this.Ub(a);
            if (null != e) {
                a = e.width;
                var f = e.height,
                    g = e.eb,
                    h = e.Za,
                    p = e.ki;
                e = e.mi;
                0 == b ? (1 != c && (g *= c, p *= c, a *= c), 1 != d && (h *= d, e *= d, f *= d)) : (1 != c && (g *= c, p *= c, a *= c), 1 != d && (h *= d, e *= d, f *= d), null == this.Ek && (this.Ek = new ja), null == this.Bn && (this.Bn = new P), null == this.$m && (this.$m = new P), this.Bn.x = g, this.Bn.y = h, this.$m.x = p, this.$m.y = e,
                    this.Ek.left = this.Ek.top = 0, this.Ek.right = a, this.Ek.bottom = f, this.SV(this.Ek, this.Bn, this.$m, b), a = this.Ek.right, f = this.Ek.bottom, g = this.Bn.x, h = this.Bn.y, p = this.$m.x, e = this.$m.y);
                this.uk.width = a;
                this.uk.height = f;
                this.uk.eb = g;
                this.uk.Za = h;
                this.uk.ki = p;
                this.uk.mi = e;
                return this.uk
            }
            return e
        },
        SV: function(a, b, c, d) {
            var e, f, g;
            90 == d ? (d = 0, g = 1) : 180 == d ? (d = -1, g = 0) : 270 == d ? (d = 0, g = -1) : (g = d * Math.PI / 180, d = Math.cos(g), g = Math.sin(g));
            var h, p, l, k, m;
            null == b ? h = p = m = f = 0 : (l = -b.x * d, k = -b.x * g, m = -b.y * d, f = -b.y * g, h = l + f, p = m - k);
            e = null ==
                b ? a.right : a.right - b.x;
            l = e * d;
            k = e * g;
            e = l + f;
            m -= k;
            var q;
            f = null == b ? a.bottom : a.bottom - b.y;
            q = l + f * g;
            f = f * d - k;
            var n, t;
            n = h + q - e;
            t = p + f - m;
            l = Math.min(h, Math.min(e, Math.min(q, n)));
            k = Math.min(p, Math.min(m, Math.min(f, t)));
            h = Math.max(h, Math.max(e, Math.max(q, n)));
            p = Math.max(p, Math.max(m, Math.max(f, t)));
            null != c && (null == b ? (e = c.x, f = c.y) : (e = c.x - b.x, f = c.y - b.y), c.x = e * d + f * g - l, c.y = f * d - e * g - k);
            null != b && (b.x = -l, b.y = -k);
            a.right = h - l;
            a.bottom = p - k
        }
    };
    oa.XY = 10;
    oa.Ut = 1;
    oa.Jh = function(a, b) {
        var c = new oa;
        c.app = a;
        c.hc = new Image;
        c.hc.crossOrigin = 'anonymous';
        c.hc.onload =
            function() {
                c.app.bk++;
                c.width = c.hc.width;
                c.height = c.hc.height
            };
        a.ck++;
        a.Ri = !0;
        c.hc.src = a.gm + b;
        return c
    };
    oa.prototype = {
        Fp: function(a) {
            this.handle = a.v();
            a.wa(12)
        },
        xz: function() {
            this.hc = new Image;
            this.hc.crossOrigin = 'anonymous';
            var a = this;
            this.hc.onload = function() {
                a.app.yl(a)
            };
            this.hc.onerror = function() {
                a.app.yl(a)
            };
            this.hc.src = this.app.gm + l.Kr(this.handle, "png")
        },
        load: function(a) {
            this.app = a;
            this.handle = a.file.v();
            this.width = a.file.v();
            this.height = a.file.v();
            this.eb = a.file.ra();
            this.Za = a.file.ra();
            this.ki = a.file.ra();
            this.mi = a.file.ra();
            this.$b = 0;
            this.hc = null;
            null != this.app.frame.ns ? (this.$b = this.app.frame.ns[this.handle], 0 != this.$b ? (this.app.qa.XH(this.$b), this.ne = this.app.frame.ne[this.handle], this.oe = this.app.frame.oe[this.handle]) : this.app.hr(this)) : this.app.hr(this)
        },
        createElement: function() {
            var a = document.createElement("div");
            a.style.width = this.width + "px";
            a.style.height = this.height + "px";
            a.style.backgroundRepeat = "no-repeat";
            0 == this.$b ? a.style.backgroundImage = "url('" + this.hc.src + "')" : (a.style.backgroundPosition = "-" + this.ne + "px -" +
                this.oe + "px", a.style.backgroundImage = "url('" + this.app.gm + "M" + l.Kr(this.$b, "png") + "')");
            return a
        },
        CX: function(a, b) {
            var c = document.createElement("canvas");
            c.width = this.width;
            c.height = this.height;
            c = c.getContext("2d");
            0 == this.$b ? c.drawImage(this.hc, 0, 0) : c.drawImage(this.app.qa.wc[this.$b], this.ne, this.oe, this.width, this.height, 0, 0, this.width, this.height);
            c = c.getImageData(a, b, 1, 1);
            return c.data[0] << 16 | c.data[1] << 8 | c.data[2]
        },
        Vf: function(a, b, c, d) {
            if (0 == (a & R.Cj)) {
                null == this.ah && (this.ah = new R, this.as & oa.Ut ?
                    this.ah.vz(this.app, this, a) : this.ah.uz(this.app, this, a));
                if (0 == b && 1 == c && 1 == d) return this.ah;
                null == this.gk && (this.gk = new Q);
                var e, f = 2147483647,
                    g = -1;
                for (e = 0; e < this.gk.size(); e++) {
                    a = this.gk.get(e);
                    if (b == a.angle && c == a.hd && d == a.jd) return a.ia;
                    a.zC < f && (f = a.zC, g = e)
                }
                this.gk.size() < this.XY && (g = -1);
                a = new Di;
                a.ia = new R;
                a.ia.yV(this.ah, b, c, d);
                a.angle = b;
                a.hd = c;
                a.jd = d;
                a.zC = this.app.kc;
                0 > g ? this.gk.add(a) : this.gk.set(g, a);
                return a.ia
            }
            null == this.Kn && (null == this.ah && (this.ah = new R, this.as & oa.Ut ? this.ah.vz(this.app,
                this, 0) : this.ah.uz(this.app, this, 0)), this.Kn = new R, this.as & oa.Ut ? this.Kn.vz(this.app, this, a) : this.Kn.uz(this.app, this, a));
            return this.Kn
        }
    };
    Ig.prototype = {
        yk: function(a) {
            var b = a.C(),
                c;
            this.Ff = 0;
            var d = a.ma,
                e = new Na;
            for (c = 0; c < b; c++) e.Fp(a), this.Ff = Math.max(this.Ff, e.handle + 1);
            a.seek(d);
            this.vw = Array(this.Ff);
            for (c = 0; c < b; c++) d = a.ma, e.Fp(a), this.vw[e.handle] = d;
            this.Db = Array(this.Ff);
            for (c = 0; c < this.Ff; c++) this.Db[c] = 0;
            this.gb = null;
            this.Wi = this.Ff;
            this.ik = 0;
            this.fonts = null
        },
        load: function(a) {
            var b;
            for (b = this.ik =
                0; b < this.Ff; b++) 0 != this.Db[b] && this.ik++;
            b = Array(this.ik);
            var c = 0,
                d;
            for (d = 0; d < this.Ff; d++) 0 != this.Db[d] && (null != this.fonts && -1 != this.gb[d] && null != this.fonts[this.gb[d]] ? b[c] = this.fonts[this.gb[d]] : (b[c] = new Na, a.seek(this.vw[d]), b[c].load(a)), b[c].Db = this.Db[d], c++);
            this.fonts = b;
            this.gb = Array(this.Ff);
            for (b = 0; b < this.Ff; b++) this.gb[b] = -1;
            for (b = 0; b < this.ik; b++) this.gb[this.fonts[b].handle] = b;
            this.Wi = this.Ff
        },
        Qh: function(a) {
            return -1 == a ? this.xs : 0 <= a && a < this.Wi && -1 != this.gb[a] ? this.fonts[this.gb[a]] : null
        },
        zv: function(a) {
            return this.Qh(a).vX()
        },
        rh: function() {
            if (0 == (this.app.r5 & m.Uk) && 0 == (this.app.Sa & m.Mx)) {
                var a;
                for (a = 0; a < this.Ff; a++) this.Db[a] = 0
            }
        },
        jt: function() {
            var a;
            for (a = 0; a < this.Ff; a++) this.vw[a] && (this.Db[a] = 1)
        },
        om: function(a) {
            -1 == a ? null == this.xs && (this.xs = new Na, this.xs.dv()) : this.Db[a]++
        },
        Gi: function(a) {
            this.om(a);
            return -1
        },
        Qu: function(a) {
            var b, c;
            for (c = 0; c < this.ik && (null == this.fonts[c] || this.fonts[c].Gb != a.Gb || this.fonts[c].Cf != a.Cf || this.fonts[c].Bf != a.Bf || this.fonts[c].Ye != a.Ye); c++);
            if (c <
                this.ik) return this.fonts[c].handle;
            c = -1;
            for (b = this.Ff; b < this.Wi && -1 != this.gb[b]; b++);
            if (-1 == c) {
                var d = Array(this.Wi + 10);
                for (b = 0; b < this.Wi; b++) d[b] = this.gb[b];
                for (; b < this.Wi + 10; b++) d[b] = -1;
                c = this.Wi;
                this.Wi += 10;
                this.gb = d
            }
            d = -1;
            for (b = 0; b < this.ik; b++)
                if (null == this.fonts[b]) {
                    d = b;
                    break
                } - 1 == d && (d = this.ik, this.fonts.push(null));
            this.gb[c] = d;
            this.fonts[d] = new Na;
            this.fonts[d].handle = c;
            this.fonts[d].Gb = a.Gb;
            this.fonts[d].Cf = a.Cf;
            this.fonts[d].Bf = a.Bf;
            this.fonts[d].Ye = a.Ye;
            return c
        }
    };
    Na.prototype = {
        Fp: function(a) {
            this.handle =
                a.C();
            0 == a.md ? a.wa(72) : a.wa(104)
        },
        load: function(a) {
            this.handle = a.C();
            var b = a.ma;
            a.wa(12);
            this.Gb = a.C();
            0 > this.Gb && (this.Gb = -this.Gb);
            a.C();
            a.C();
            a.C();
            this.Cf = a.C();
            this.Bf = a.lb();
            a.lb();
            a.lb();
            a.lb();
            a.lb();
            a.lb();
            a.lb();
            a.lb();
            this.Ye = a.cb();
            0 == a.md ? a.seek(b + 72) : a.seek(b + 104)
        },
        vX: function() {
            var a = new fb;
            a.Gb = this.Gb;
            a.Cf = this.Cf;
            a.Bf = this.Bf;
            a.Ye = this.Ye;
            return a
        },
        dv: function() {
            this.Ye = "Arial";
            this.Gb = 13;
            this.Cf = 400;
            this.Bf = 0
        },
        yg: function() {
            return this.Gb + Math.ceil(this.Gb / 8)
        },
        Ph: function() {
            if (null ==
                this.font) {
                this.font = this.Bf ? "italic " : "normal ";
                var a = 100 * Math.floor(this.Cf / 100),
                    a = Math.max(a, 100),
                    a = Math.min(a, 900);
                this.font += a + " ";
                this.font += this.Gb + "px ";
                this.font += this.Ye
            }
            return this.font
        }
    };
    Jg.prototype = {
        yk: function(a) {
            this.file = a;
            this.xc = this.file.v();
            this.ww = Array(this.xc);
            this.Db = Array(this.xc);
            this.gb = Array(this.xc);
            for (a = 0; a < this.xc; a++) this.Db[a] = 0, this.gb[a] = -1;
            var b = this.file.v(),
                c = new sb(this.app),
                d;
            for (a = 0; a < b; a++) d = this.file.ma, c.Fp(), this.ww[c.handle] = d;
            this.jk = this.xc;
            this.vs =
                0;
            this.sm = null
        },
        HX: function(a) {
            return 0 <= a && a < this.jk && -1 != this.gb[a] ? this.sm[this.gb[a]] : null
        },
        yn: function(a) {
            for (var b = 0; b < this.jk; b++)
                if (-1 != this.gb[b] && this.sm[this.gb[b]].name == a) return b;
            return -1
        },
        rh: function() {
            if (0 == (this.app.Sa & m.Uk) && 0 == (this.app.Sa & m.Mx)) {
                var a;
                for (a = 0; a < this.xc; a++) this.Db[a] = 0
            }
        },
        jt: function() {
            var a;
            for (a = 0; a < this.xc; a++) this.ww[a] && (this.Db[a] = 1)
        },
        om: function(a) {
            this.Db[a]++
        },
        Gi: function(a) {
            this.om(a);
            return -1
        },
        load: function() {
            var a;
            for (a = this.vs = 0; a < this.xc; a++) 0 != this.Db[a] &&
                this.vs++;
            a = Array(this.vs);
            var b = 0,
                c;
            for (c = 0; c < this.xc; c++) 0 != this.Db[c] && (null != this.sm && -1 != this.gb[c] && null != this.sm[this.gb[c]] ? a[b] = this.sm[this.gb[c]] : (a[b] = new sb(this.app), this.file.seek(this.ww[c]), a[b].load()), a[b].Db = this.Db[c], b++);
            this.sm = a;
            this.gb = Array(this.xc);
            for (a = 0; a < this.xc; a++) this.gb[a] = -1;
            for (a = 0; a < this.vs; a++) this.gb[this.sm[a].handle] = a;
            this.jk = this.xc;
            this.rh()
        }
    };
    sb.prototype = {
        Fp: function() {
            this.handle = this.file.v();
            this.file.wa(5);
            var a = this.file.v();
            0 == this.file.md ? this.file.wa(a) :
                this.file.wa(2 * a)
        },
        xz: function() {
            var a, b = this.Oc.Ob.KB & this.type;
            0 == b && (b = this.Oc.Ob.TA & this.type);
            for (a = 0; 4 > a && !(b & 1 << a); a++);
            if (4 > a) {
                b = "";
                switch (a) {
                    case 0:
                        b = "ogg";
                        break;
                    case 1:
                        b = "m4a";
                        break;
                    case 2:
                        b = "mp3";
                        break;
                    case 3:
                        b = "wav"
                }
                if (this.context) {
                    var c = this,
                        d = new XMLHttpRequest;
                    d.open("GET", this.Oc.gm + l.Kr(this.handle, b), !0);
                    d.responseType = "arraybuffer";
                    d.addEventListener("load", function() {
                        c.response = d.response;
                        c.Oc.Ob.gU(c)
                    });
                    d.send()
                } else this.Nb = new Audio, this.Nb.C6 = "auto", c = this, this.Nb.addEventListener("loadeddata",
                    function(a) {
                        c.Oc.yl(c);
                        c.Nb.removeEventListener("loadeddata", arguments.callee, !1)
                    }, !1), this.Nb.addEventListener("error", function() {
                    c.Oc.yl(c);
                    c.Nb = null
                }, !1), this.Nb.src = this.Oc.gm + l.Kr(this.handle, b), this.Nb.load(), this.Nb.autoplay = !1
            } else this.Oc.yl(this)
        },
        load: function() {
            this.handle = this.file.v();
            this.type = this.file.lb();
            this.op = this.frequency = this.file.C();
            var a = this.file.v();
            this.name = this.file.cb(a);
            this.Nb = null;
            this.Oc.hr(this)
        },
        NY: function() {
            this.handle = 9999;
            this.type = 4;
            this.op = this.frequency =
                4E4;
            this.name = "";
            this.Nb = null;
            this.Oc.hr(this)
        },
        Vn: function(a, b) {
            a || (a = 0);
            b || (b = this.frequency);
            if (this.Nb) this.Nb.volume = this.volume / 100, this.op = b, this.Nb.playbackRate = b / this.frequency, this.Nb.duration && (this.Nb.currentTime = 0), this.Nb.play();
            else if (this.buffer) {
                this.source = this.context.createBufferSource();
                this.source.buffer = this.buffer;
                0 == this.lp ? (this.source.gain.value = this.volume / 100, this.source.connect(this.context.destination)) : (this.gain = this.context.createGain(), this.source.connect(this.gain),
                    this.gain.connect(this.context.destination), this.gain.gain.value = this.volume / 100);
                a || (a = 0);
                b || (b = this.frequency);
                this.op = b;
                this.source.playbackRate.value = b / this.frequency;
                this.startTime = Date.now() - a;
                "undefined" !== typeof this.source.start ? this.source.start(0, a / 1E3) : this.source.noteOn(a);
                var c = this;
                this.source.onended = function() {
                    c.dF = !0
                }
            }
            this.pl = !1;
            this.ql = !0;
            this.dF = !1
        },
        play: function(a, b, c) {
            this.kk = a;
            0 == this.kk && (this.kk = 1E7);
            this.volume = c;
            this.Vn()
        },
        stop: function() {
            this.Nb ? this.Nb.pause() : this.source &&
                this.ql && ("undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.source.onended = null);
            this.ql = this.mr = !1
        },
        GK: function(a) {
            this.volume = a;
            this.Nb ? this.Nb.volume = a / 100 : this.source && (this.gain ? this.gain.gain.value = a / 100 : this.source.gain.value = a / 100)
        },
        pause: function() {
            this.pl || (this.Nb ? this.Nb.pause() : this.source && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.uJ = Date.now() - this.startTime), this.pl = !0)
        },
        resume: function() {
            this.pl &&
                (this.Nb ? this.Nb.play() : this.source && this.Vn(this.uJ), this.pl = !1)
        },
        kY: function() {
            return this.pl
        },
        OH: function() {
            return (this.Nb || this.source) && this.ql ? !0 : !1
        },
        DX: function() {
            return this.Nb ? Math.floor(1E3 * this.Nb.currentTime) : this.source ? Math.min(1E3 * this.buffer.duration, this.pl ? this.uJ : Date.now() - this.startTime) : 0
        },
        setPosition: function(a) {
            this.Nb ? this.Nb.currentTime = a / 1E3 : this.source && (this.ql && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0)),
                this.Vn(a))
        },
        v_: function(a) {
            var b = a / this.frequency;
            this.op = a;
            this.Nb ? this.Nb.playbackRate = b : this.source && (this.source.playbackRate.value = b)
        },
        FU: function() {
            if (1 == this.ql && 0 == this.pl)
                if (this.Nb) {
                    if (this.Nb.ended) {
                        if (0 < this.kk && (this.kk--, 0 < this.kk)) return this.Vn(0, this.op), !1;
                        this.ql = this.mr = !1;
                        return !0
                    }
                } else if (this.source && (3 == this.source.playbackState || this.dF)) {
                if (0 < this.kk && (this.kk--, 0 < this.kk)) return this.Vn(0, this.op), !1;
                this.ql = this.mr = !1;
                return !0
            }
            return !1
        }
    };
    Qb.prototype = {
        QC: function(a) {
            this.xJ[this.position++] =
                a
        }
    };
    S.lg = 80;
    S.Ht = 52;
    S.IN = S.lg;
    S.JN = S.IN + 1 - S.Ht;
    S.qu = 4;
    S.Vx = 199 + S.lg;
    S.KN = S.Vx + 1 - S.qu - S.Ht;
    S.VR = 256;
    S.WO = 1;
    S.a5 = function(a, b) {
        var c = b >> 5,
            d = 1 << (b & 31),
            e = 0 != (a[c] & d);
        a[c] |= d;
        return e
    };
    S.cW = function(a) {
        return a.lc + 0
    };
    S.Pg = function(a) {
        a &= 65535;
        return 0 != (a & 32768) ? a - 65536 : a
    };
    S.ay = function(a) {
        return a >> 16
    };
    S.wn = function(a) {
        return a & 4294901760
    };
    S.prototype = {
        ie: function(a) {
            var b;
            this.pc = 0;
            this.jj = null;
            this.kj = -1;
            if (0 != (a & 32768)) return 32767 == (a & 32767) ? null : this.CZ(a);
            var c = this.w.ca[a];
            if (c.Da == this.Na) {
                if (0 !=
                    (c.Aa & 2147483648)) return null;
                b = this.w.H[c.Aa];
                this.Jg = null;
                this.di = c;
                this.hf = b;
                this.Kk = a
            } else {
                c.Da = this.Na;
                if (this.uh) return c.Aa = -1, c.Lb = 0, null;
                c.Aa = c.ib;
                if (0 != (c.ib & 2147483648)) return c.Lb = 0, null;
                var d = c.ib;
                do b = this.w.H[d], d = b.xb, b.Ba = d; while (0 == (d & 2147483648));
                b = this.w.H[c.ib];
                this.Jg = null;
                this.di = c;
                this.hf = b;
                this.Kk = a;
                c.Lb = c.Sd
            }
            this.pc = c.Lb;
            return b
        },
        CZ: function(a) {
            var b, c, d = 0,
                e = 0;
            for (a = this.jc[a & 32767]; e < a.M.length;) {
                c = a.M[e + 1];
                if (0 > c) break;
                c = this.w.ca[c];
                if (c.Da == this.Na) b = 0, 0 == (c.Aa & 2147483648) &&
                    (b = c.Lb, null == this.jj && (this.jj = a, this.kj = e));
                else if (b = 0, c.Da = this.Na, this.uh) c.Aa = -1, c.Lb = 0;
                else if (c.Aa = c.ib, 0 != (c.ib & 2147483648)) c.Lb = 0;
                else {
                    null == this.jj && (this.jj = a, this.kj = e);
                    b = c.ib;
                    do b = this.w.H[b], b = b.Ba = b.xb; while (0 == (b & 2147483648));
                    b = c.Lb = c.Sd
                }
                d += b;
                e += 2
            }
            a = this.jj;
            return null != a ? (c = this.w.ca[a.M[this.kj + 1]], this.Jg = null, this.di = c, this.hf = b = this.w.H[c.Aa], this.Kk = a.M[this.kj + 1], this.pc = d, b) : null
        },
        Kd: function() {
            var a = this.hf,
                b;
            if (null == a && (b = this.w.ca[this.Kk], 0 == (b.Aa & 2147483648))) return a =
                this.w.H[b.Aa], this.Jg = null, this.di = b, this.hf = a;
            if (null != a && 0 == (a.Ba & 2147483648)) return this.Jg = a, this.di = null, this.hf = a = this.w.H[a.Ba];
            if (null == this.jj) return null;
            do {
                this.kj += 2;
                if (this.kj >= this.jj.M.length) return null;
                a = this.jj.M[this.kj + 1];
                if (0 > a) return null;
                b = this.w.ca[a]
            } while (0 != (b.Aa & 2147483648));
            this.Jg = null;
            this.di = b;
            this.hf = a = this.w.H[b.Aa];
            this.Kk = this.jj.M[this.kj + 1];
            return a
        },
        dW: function(a) {
            a = this.jc[a & 32767];
            for (var b = 0, c; b < a.M.length;) {
                c = a.M[b + 1];
                if (0 > c) break;
                c = this.w.ca[c];
                c.Da != this.Na &&
                    (c.Da = this.Na, c.Lb = 0, c.Aa = -1);
                b += 2
            }
        },
        IG: function(a) {
            a = this.jc[a & 32767];
            for (var b = 0, c; b < a.M.length;) {
                c = a.M[b + 1];
                if (0 > c) break;
                c = this.w.ca[c];
                c.Da = this.Na;
                c.Lb = 0;
                c.Aa = -1;
                b += 2
            }
        },
        nd: function() {
            --this.hf.La.Lb;
            null != this.Jg ? (this.Jg.Ba = this.hf.Ba, this.hf = this.Jg) : (this.di.Aa = this.hf.Ba, this.hf = null)
        },
        Wg: function(a) {
            var b = a.La;
            if (b.Da != this.Na) b.Da = this.Na, b.Aa = a.ea, b.Lb = 1, a.Ba = -1;
            else {
                var c = b.Aa;
                if (0 != (c & 2147483648)) b.Aa = a.ea, b.Lb += 1, a.Ba = -1;
                else {
                    do {
                        if (a.ea == c) return;
                        b = this.w.H[c];
                        c = b.Ba
                    } while (0 == (c & 2147483648));
                    b.Ba = a.ea;
                    a.Ba = -1;
                    a.La.Lb += 1
                }
            }
        },
        mG: function(a) {
            a = this.w.ca[a];
            a.Da = this.Na;
            a.Aa = -1;
            a.Lb = 0
        },
        pn: function(a, b) {
            if (0 == (a & 32768)) this.mG(a);
            else {
                if (32767 == (a & 32767)) return;
                var c = this.jc[a & 32767],
                    d;
                for (d = 0; d < c.M.length; d += 2) {
                    var e = c.M[d + 1];
                    if (0 > e) break;
                    this.mG(e)
                }
            }
            b.Ba = -1;
            b.La.Aa = b.ea;
            b.La.Lb = 1;
            b.La.Da = this.Na
        },
        JG: function() {
            var a, b, c;
            for (b = 0; b < this.w.vh; b++)
                if (c = this.w.ca[b], c.Da == this.Na) {
                    if (c.rB != this.cx)
                        for (c.rB = this.cx, a = c.ib; 0 == (a & 2147483648);) a = this.w.H[a], a.kA = 0, a = a.xb;
                    for (a = c.Aa; 0 == (a & 2147483648);) a =
                        this.w.H[a], a.kA = 1, a = a.Ba
                }
        },
        HG: function() {
            var a, b, c, d, e;
            for (d = 0; d < this.w.vh; d++)
                if (e = this.w.ca[d], e.rB == this.cx)
                    for (e.Da = this.Na, a = e.ib, c = null; 0 == (a & 2147483648);) b = this.w.H[a], 0 != b.kA && (null != c ? c.Ba = a : e.Aa = a, b.Ba = -1, c = b), a = b.xb
        },
        gc: function(a) {
            if (this.th) return this.gq = !1, a = this.Cv(a);
            var b;
            if (0 == (a & 32768)) return b = this.w.ca[a], b.Da == this.Na && 0 == (b.Aa & 2147483648) ? this.w.H[b.Aa] : 0 == (b.ib & 2147483648) ? this.w.H[b.ib] : null;
            a = this.jc[a & 32767];
            var c = 0;
            if (c >= a.M.length) return null;
            do {
                b = a.M[c + 1];
                if (0 > b) break;
                b = this.w.ca[b];
                if (b.Da == this.Na && 0 == (b.Aa & 2147483648)) return this.w.H[b.Aa];
                c += 2
            } while (c < a.M.length);
            c = 0;
            do {
                b = a.M[c + 1];
                if (0 > b) break;
                b = this.w.ca[b];
                if (0 == (b.ib & 2147483648)) return this.w.H[b.ib];
                c += 2
            } while (c < a.M.length);
            return null
        },
        dA: function(a, b) {
            this.gq = !0;
            var c = this.Cv(a);
            if (null != c) return 0 != this.Ed && (b.ab |= ga.Tk, this.sh = !0), c;
            b.ab |= ba.Fo;
            return c
        },
        oa: function(a) {
            a.ab &= ~ba.Fo;
            this.gq = !0;
            var b = this.Cv(a.va);
            if (null != b) return 0 != this.Ed && (a.ab |= ga.Tk, this.sh = !0), b;
            a.ab |= ba.Fo;
            return b
        },
        Cv: function(a) {
            return 0 ==
                (a & 32768) ? this.LX(a) : this.MX(a)
        },
        LX: function(a) {
            var b = this.w.ca[a];
            if (b.pB != this.bo) {
                b.pB = this.bo;
                b.qB = this.Ig;
                if (b.Da == this.Na && 0 == (b.Aa & 2147483648)) {
                    b.gh = b.Aa;
                    a = this.w.H[b.Aa];
                    b.$l = a.Ba;
                    if (0 != (a.Ba & 2147483648)) return b.ai = !1, b.Zl = 1, this.Ed = !1, a;
                    b.ai = !0;
                    b.Zl = 2;
                    this.Ed = !0;
                    return a
                }
                if (this.gq && b.Da == this.Na) return b.Zl = 0, b.gh = -1, null;
                if (0 == (b.ib & 2147483648)) {
                    b.gh = b.ib;
                    a = this.w.H[b.ib];
                    if (null == a) return b.Zl = 0, b.gh = -1, null;
                    if (0 == (a.xb & 2147483648)) return b.$l = a.xb, b.ai = !0, b.Zl = 3, this.Ed = !0, a;
                    b.ai = !1;
                    b.Zl = 1;
                    this.Ed = !1;
                    return a
                }
                b.Zl = 0;
                b.gh = -1;
                return null
            }
            if (b.qB != this.Ig) {
                var c;
                b.qB = this.Ig;
                switch (b.Zl) {
                    case 0:
                        return this.Ed = b.ai, null;
                    case 1:
                        return a = this.w.H[b.gh], this.Ed = b.ai, a;
                    case 2:
                        b.gh = b.$l;
                        a = this.w.H[b.$l];
                        if (null == a) return null;
                        c = a.Ba;
                        0 != (c & 2147483648) && (b.ai = !1, c = b.Aa);
                        b.$l = c;
                        this.Ed = b.ai;
                        return a;
                    case 3:
                        b.gh = b.$l;
                        a = this.w.H[b.$l];
                        if (null == a) return null;
                        c = a.xb;
                        0 != (c & 2147483648) && (b.ai = !1, c = b.ib);
                        b.$l = c;
                        this.Ed = b.ai;
                        return a
                }
            }
            if (0 > b.gh) return null;
            a = this.w.H[b.gh];
            this.Ed = b.ai;
            return a
        },
        MX: function(a) {
            var b, c = this.jc[a & 32767];
            if (c.Mw != this.bo) {
                c.Mw = this.bo;
                c.LB = this.Ig;
                b = this.HJ(c);
                if (0 <= b) {
                    c.ej = b;
                    a = this.w.H[b];
                    if (null == a) return c.am = 0, c.ej = -1, null;
                    b = a.Ba;
                    if (0 != (b & 2147483648) && (b = this.OB(c), 0 > b)) return c.am = 1, this.Ed = c.bi = !1, a;
                    c.bm = b;
                    c.am = 2;
                    this.Ed = c.bi = !0;
                    return a
                }
                if (this.gq && c.MB) return c.am = 0, c.ej = -1, null;
                b = this.GJ(c);
                if (0 <= b && (c.ej = b, a = this.w.H[b], null != a)) {
                    b = a.xb;
                    if (0 != (b & 2147483648) && (b = this.NB(c), 0 != (b & 2147483648))) return c.am = 1, this.Ed = c.bi = !1, a;
                    c.bm = b;
                    c.am = 3;
                    this.Ed = c.bi = !0;
                    return a
                }
                c.am = 0;
                c.ej = -1;
                return null
            }
            if (c.LB != this.Ig) switch (c.LB = this.Ig, c.am) {
                case 0:
                    return this.Ed = c.bi, null;
                case 1:
                    return a = this.w.H[c.ej], this.Ed = c.bi, a;
                case 2:
                    return c.ej = c.bm, a = this.w.H[c.bm], null != a && (b = a.Ba, 0 != (b & 2147483648) && (b = this.OB(c), 0 > b && (c.bi = !1, b = this.HJ(c))), c.bm = b), this.Ed = c.bi, a;
                case 3:
                    return c.ej = c.bm, a = this.w.H[c.bm], null != a && (b = a.xb, 0 != (b & 2147483648) && (b = this.NB(c), 0 != (b & 2147483648) && (c.bi = !1, b = this.GJ(c))), c.bm = b), this.Ed = c.bi, a
            }
            if (0 > c.ej) return null;
            a = this.w.H[c.ej];
            this.Ed =
                c.bi;
            return a
        },
        OB: function(a) {
            for (var b = a.Xp, c; b < a.M.length;) {
                c = a.M[b + 1];
                if (0 > c) break;
                c = this.w.ca[c];
                if (c.Da == this.Na && (a.MB = !0, 0 == (c.Aa & 2147483648))) return a.Xp = b + 2, c.Aa;
                b += 2
            }
            return -1
        },
        HJ: function(a) {
            a.Xp = 0;
            a.MB = !1;
            return this.OB(a)
        },
        NB: function(a) {
            for (var b = a.Xp, c; b < a.M.length;) {
                c = a.M[b + 1];
                if (0 > c) break;
                c = this.w.ca[c];
                if (0 == (c.ib & 2147483648)) return a.Xp = b + 2, c.ib;
                b += 2
            }
            return -1
        },
        GJ: function(a) {
            a.Xp = 0;
            return this.NB(a)
        },
        VV: function() {
            this.Uu = !1;
            for (var a = this.w.ko, b = this.w.lo;;) {
                for (var c = null, d = null,
                        e = this.w.dx; null != e;) {
                    if (0 > e.index) {
                        (c = e.next) && (l.Hb(e.name, c.name) || (c = null));
                        break
                    }
                    d = e;
                    e = e.next
                }
                if (null == e) break;
                var f = -2686976,
                    g = -2686976,
                    h = null;
                0 < e.af && (h = e.re[0].Pa == v.tc ? this.jh : this.ih);
                null != h && (h = h.get(e.name), void 0 != h && (f = 65536 * -h), null != c && (h = null, 0 < c.af && (h = c.re[0].Pa == v.tc ? this.jh : this.ih), null != h && (h = h.get(c.name), void 0 != h && (g = 65536 * -h))));
                e.stop = !1;
                for (e.index = 0; e.index < e.af; e.index++) {
                    this.w.ko = e;
                    if (this.w.lo = c) c.index = e.index;
                    this.th = 0;
                    this.Ie(e.re[e.index], f);
                    if (e.stop) break
                }
                if (c)
                    for (c.index =
                        0; c.index < c.af; c.index++) {
                        this.w.ko = c;
                        if (this.w.lo = e) e.index = c.index;
                        this.th = 0;
                        this.Ie(c.re[c.index], g);
                        if (c.stop) break
                    }
                c && (e.next = c.next);
                null == d ? this.w.dx = e.next : d.next = e.next
            }
            this.w.ko = a;
            this.w.lo = b
        },
        hU: function(a, b, c) {
            for (var d = this.w.dx, e = null; null != d;) {
                if (d.Ad == c && l.Hb(a, d.name)) {
                    d.re[d.af++] = b;
                    return
                }
                e = d;
                d = d.next
            }
            d = new ti;
            e ? e.next = d : this.w.dx = d;
            d.next = null;
            d.af = 1;
            d.Ad = c;
            d.re[0] = b;
            d.index = -1;
            d.name = a.toLowerCase()
        },
        gW: function(a, b) {
            for (var c = 0; c < a.length; c += 2) {
                var d = this.w.ca[a[c + 1]];
                if (d.Da ==
                    this.Na) {
                    var e = b.get(d);
                    void 0 != e ? e.length = 0 : (e = [], b.set(d, e));
                    for (d = d.Aa; 0 <= d;) {
                        var f = this.w.H[d];
                        if (null == f) break;
                        0 == (f.Z & N.rd) && e.push(d);
                        d = f.Ba
                    }
                }
            }
        },
        fW: function(a, b) {
            for (var c = 0; c < a.length; c += 2) {
                var d = this.w.ca[a[c + 1]],
                    e = b.get(d);
                if (void 0 != e) {
                    var f = e.length;
                    d.Da = this.Na;
                    d.Aa = -1;
                    d.Lb = 0;
                    if (0 < f) {
                        var g = this.w.H[e[0]];
                        if (null != g) {
                            d.Aa = e[0];
                            d.Lb++;
                            for (var h = 1; h < f; h++) {
                                var p = e[h],
                                    l = this.w.H[p];
                                if (null == l) break;
                                0 == (l.Z & N.rd) && (g.Ba = p, d.Lb++);
                                g = l
                            }
                            g.Ba = -1
                        }
                    }
                }
            }
        },
        eW: function(a) {
            var b = this.Na;
            if (0 == (a & 32768)) {
                var c =
                    this.w.ca[a];
                c.Da = b;
                c.Aa = -1;
                c.Lb = 0
            } else if (65535 != a) {
                a = this.jc[a & 32767];
                var d;
                for (d = 0; d < a.M.length; d += 2) {
                    c = a.M[d + 1];
                    if (0 > c) break;
                    c = this.w.ca[c];
                    c.Da = b;
                    c.Aa = -1;
                    c.Lb = 0
                }
            }
        },
        Hz: function(a, b) {
            0 != (a & 32768) && this.eW(a);
            var c = -1,
                d = null,
                e;
            for (e = 0; e < b.size(); e++) {
                var f = b.get(e),
                    g = f.La,
                    h = g.A6;
                h != c ? (c = h, g.Da = this.Na, g.Aa = f.ea, g.Lb = 1) : (g.Lb++, d.Ba = f.ea);
                f.Ba = -1;
                d = f
            }
        },
        hW: function(a) {
            var b = this.bn.length,
                c = new Map;
            if (0 < b)
                for (var b = this.bn[b - 1], d = Yb(b.keys()), e = d.next(); !e.done; e = d.next()) {
                    var e = e.value,
                        f = b.get(e).slice();
                    c.set(e, f)
                }
            this.gW(a.ic, c);
            this.bn.push(c);
            this.Tg(a.GG, null);
            this.bn.pop()
        },
        Wf: function(a) {
            var b = a & 65535;
            0 != (b & 32768) && (b = 65536 - b);
            a = this.Zc[this.eg[b] + -(a >> 16)];
            0 != a && this.Tg(a, null)
        },
        Ie: function(a, b) {
            this.ix = b;
            var c = this.Zc[a.hA + -(b >> 16)];
            return 0 != c ? (this.Tg(c, a), !0) : !1
        },
        RX: function() {
            for (var a = !1, b = this.w.Ys; b;) {
                if (this.w.lf >= b.kc)
                    if (b.type == hb.DE) {
                        this.w.g.bc = b.name;
                        var c = this.Zc[this.eg[-v.Ro] + I.kE];
                        0 != c && this.Tg(c, null);
                        a = b.Vy = !0
                    } else
                        for (0 == b.st && (b.st = this.w.lf); this.w.lf >= b.st;) {
                            this.w.g.bc =
                                b.name;
                            this.w.g.gC = b.index;
                            c = this.Zc[this.eg[-v.Ro] + I.kE];
                            0 != c && this.Tg(c, null);
                            b.index++;
                            b.Zv--;
                            if (0 == b.Zv) {
                                a = b.Vy = !0;
                                break
                            }
                            b.st += b.X_
                        }
                b = b.next
            }
            if (a)
                for (b = this.w.Ys, a = null; b;) c = b.next, b.Vy ? null == a ? this.w.Ys = c : a.next = c : a = b, b = c
        },
        lV: function() {
            var a;
            if (0 != (this.w.Ud & k.Uq)) a = this.Zc[this.eg[-v.ru] + 1], 0 != a && (this.Zc[this.eg[-v.ru] + 1] = -1, this.Tg(a, null), this.Ws = !0);
            else {
                a = this.Zc[this.eg[-v.Ro] + 3];
                0 != a && this.Tg(a, null);
                a = this.Zc[this.eg[-v.ru] + 1];
                var b, c, d, e, f;
                if (0 != a) {
                    if (this.Ws) {
                        e = null;
                        b = a;
                        do {
                            d = this.Pc[b];
                            if (d != e)
                                for (e = d, c = d.lc; c < d.lc + d.zf; c++) f = d.$a[c], 0 == (f.ab & ba.Fo) && (f.ab |= ba.Jt);
                            b++
                        } while (null != this.Pc[b])
                    }
                    this.Tg(a, null);
                    this.Zc[this.eg[-v.ru] + 1] = 0;
                    if (this.Ws) {
                        e = null;
                        b = a;
                        do {
                            d = this.Pc[b];
                            if (d != e)
                                for (e = d, c = d.lc; c < d.lc + d.zf; c++) f = d.$a[c], f.ab &= ~ba.Jt;
                            b++
                        } while (null != this.Pc[b]);
                        this.Ws = !1
                    }
                }
                a = this.Zc[this.eg[-v.Ro] + 2];
                0 != a && this.Tg(a, null);
                a = this.Zc[this.eg[-v.Ro] + 1];
                0 != a && this.Tg(a, null)
            }
        },
        b_: function() {
            var a = this.w.lf,
                b = this.Zc[this.eg[-v.Ro] + 3],
                c;
            if (0 != b) {
                do c = this.Pc[b], c = c.$a[this.xg[b]], c.ab |=
                    ba.HD, c.i[0].kc > a && (c.ab &= ~ba.HD), b++; while (null != this.Pc[b])
            }
        },
        iV: function(a) {
            var b, c, d = 0;
            do {
                b = a[d];
                if (0 == (b.$ & L.Pf)) {
                    this.Td = b;
                    this.im[0] = 0;
                    this.im[1] = 0;
                    this.im[2] = 0;
                    this.im[3] = 0;
                    this.Na += 1;
                    this.uh = !1;
                    for (c = 1; c < b.lc && 0 != b.$a[c].L(this.w); c++);
                    c == b.lc && this.Vu(b)
                }
                d++
            } while (d < a.length)
        },
        Tg: function(a, b) {
            var c, d, e;
            this.hq = !1;
            do
                if (d = this.Pc[a], 0 == (d.$ & L.Pf))
                    if (this.Td = d, this.im[0] = 0, this.im[1] = 0, this.im[2] = 0, this.im[3] = 0, 0 == (d.$ & L.Zx)) {
                        this.Na += 1;
                        this.uh = !1;
                        e = 0;
                        if (d.$a[e].ba(this.w, b))
                            for (e++; e < d.lc &&
                                0 != d.$a[e].L(this.w); e++);
                        if (e == d.lc)
                            if (this.hq) null != b && this.CU(b);
                            else if (this.Vu(d), 0 != (d.$ & L.Rq)) break;
                        a++
                    } else {
                        this.cx++;
                        if (0 == (d.$ & L.KD)) {
                            c = !1;
                            do {
                                this.Na++;
                                this.uh = !1;
                                e = this.xg[a];
                                0 == d.$a[e].ba(this.w, b) && (this.uh = !0);
                                for (e++; e < d.lc && -1507329 != d.$a[e].ya;) 0 == d.$a[e].L(this.w) && (this.uh = !0), e++;
                                this.JG();
                                0 == this.uh && (c = !0);
                                a++;
                                d = this.Pc[a];
                                if (null == d) break
                            } while (d == this.Td)
                        } else {
                            var f;
                            c = this.uh = !1;
                            do {
                                this.Na++;
                                f = !1;
                                e = this.xg[a];
                                if (d.$a[e].ba(this.w, b))
                                    for (e++; e < d.lc && -1572865 != d.$a[e].ya;) {
                                        if (0 ==
                                            d.$a[e].L(this.w)) {
                                            f = !0;
                                            break
                                        }
                                        e++
                                    } else f = !0;
                                0 == f && (this.JG(), c = !0);
                                a++;
                                d = this.Pc[a];
                                if (null == d) break
                            } while (d == this.Td)
                        }
                        if (c && (this.Na++, this.HG(), d = 0 != (this.Td.$ & L.Rq), this.Vu(this.Td), d)) break
                    }
            else
            if (a++, null != this.Pc[a])
                for (c = this.Pc[a]; c == d;) {
                    a++;
                    if (null == this.Pc[a]) break;
                    c = this.Pc[a]
                }
            while (null != this.Pc[a])
        },
        Vu: function(a) {
            this.Zu = null;
            if (0 != (a.$ & L.JD)) {
                0 != (a.$ & L.$x) && (this.hm = new Q);
                if (0 != (a.$ & L.Go)) {
                    var b = this.w.Kc,
                        c = a.Hi;
                    a.Hi = b;
                    if (b == c || b - 1 == c) return
                }
                if (0 != (a.$ & L.Lt))
                    if (0 != a.nn) a.nn--;
                    else return;
                if (0 != (a.$ & L.Lm)) {
                    b = this.w.lf / 10;
                    c = a.nn;
                    if (0 != c && b < c) return;
                    a.nn = b + a.Hi
                }
            }
            this.bo++;
            this.sh = !1;
            this.Ig = 0;
            this.th = !0;
            b = 0;
            do c = a.$a[b + a.lc], 0 == (c.ab & (ba.GD | ba.Jt)) && (c.ab &= ~ga.Tk, c.N(this.w)), b++; while (b < a.zf);
            if (this.sh) {
                do
                    for (this.sh = !1, this.Ig++, b = 0; b < a.zf; b++) c = a.$a[b + a.lc], 0 != (c.ab & ga.Tk) && (c.ab &= ~ga.Tk, c.N(this.w)); while (this.sh)
            }
            b = this.Zu;
            0 != (a.$ & L.Rq) && 0 != (a.$ & L.Kt) && (b = null);
            this.Zu = null;
            this.th = !1;
            null != this.hm && this.YV();
            this.Uu && this.VV();
            b && this.hW(b)
        },
        CU: function(a) {
            var b;
            b = a.Yb;
            this.Na +=
                1;
            this.Wg(a);
            this.bo++;
            this.sh = !1;
            this.Ig = 0;
            this.th = !0;
            var c = 0,
                d;
            do {
                a = this.Td.$a[this.Td.lc + c];
                d = a.ya & 4294901760;
                if (262144 == d || 589824 == d)
                    if (b == a.$d) a.N(this.w);
                    else if (d = a.va, 0 != (d & 32768)) {
                    var e = this.jc[d & 32767];
                    for (d = 0; d < e.M.length;) {
                        var f = e.M[d];
                        if (0 > f) break;
                        if (f == b) {
                            a.N(this.w);
                            break
                        }
                        d += 2
                    }
                }
                c++
            } while (c < this.Td.zf);
            this.th = !1
        },
        YV: function() {
            if (!(1 >= this.hm.size())) {
                var a = this.w.random(this.hm.size()),
                    b;
                do b = this.w.random(this.hm.size()); while (a == b);
                a = this.hm.get(a);
                b = this.hm.get(b);
                var c = a.s,
                    d = a.o,
                    e = b.o;
                k.Ac(a, b.s);
                k.Bc(a, e);
                k.Ac(b, c);
                k.Bc(b, d);
                this.hm = null
            }
        },
        pJ: function(a, b) {
            var c;
            if (null != this.w && (this.w.Yz(), 0 == this.w.ei && 0 != this.lr && (c = a, 2 == b && (c += S.VR), this.w.sq = 0, 0 == this.w.Kf))) {
                this.$w = this.bc = c;
                this.Wf(-262150);
                this.Wf(-327686);
                c = 0;
                var d, e, f, g, h, p, l = new Q;
                for (d = 0; d < this.w.Pb; d++) {
                    for (; null == this.w.H[c];) c++;
                    e = this.w.H[c];
                    c++;
                    f = e.s - e.Ea;
                    g = e.o - e.Fa;
                    h = f + e.S;
                    p = g + e.T;
                    this.w.Lk >= f && this.w.Lk < h && this.w.Mk >= g && this.w.Mk < p && 0 != (e.Yg & Y.rf) && 0 == (e.Z & N.rd) && (e.Pa == v.tc ? 0 == (e.A.aa & D.Pj) ? this.Oc.qa.Ub(e.c.Ma).Vf(R.pi,
                        0, 1, 1).XK(this.w.Lk - e.s, this.w.Mk - e.o, e.c.Ua, e.c.zb, e.c.Ab) && l.add(e) : l.add(e) : l.add(e))
                }
                for (c = 0; c < l.size(); c++) e = l.get(c), this.gC = e.Yb, this.fC = e, this.Wf(-393222)
            }
        },
        jZ: function() {
            null != this.w && 0 != this.lr && (this.w.sq = 0, this.Wf(-524294))
        },
        qJ: function() {
            0 != this.lr && 0 == this.w.ei && (this.w.sq = 0)
        },
        c0: function(a, b) {
            var c = a[b];
            return 72 == c.code ? (c.Gx = this.w.Rc(a[b + 1]), c.Jx = this.w.Rc(a[b + 2]), c.JC = this.w.Rc(a[b + 3]), c.KC = this.w.Rc(a[b + 4]), 5) : 1
        },
        eG: function(a, b) {
            return b.s < a.Gx || b.s >= a.JC || b.o < a.Jx || b.o >= a.KC ?
                !1 : !0
        },
        fG: function(a, b) {
            var c = 0,
                d = this.w.ca[a];
            if (d.Da != this.Na) {
                if (0 == this.uh)
                    for (d = d.ib; 0 == (d & 2147483648);) {
                        d = this.w.H[d];
                        if (null == d) return 0;
                        0 == (d.Z & N.rd) && this.eG(b, d) && c++;
                        d = d.xb
                    }
                return c
            }
            for (d = d.Aa; 0 == (d & 2147483648);) {
                d = this.w.H[d];
                if (null == d) return 0;
                0 == (d.Z & N.rd) && this.eG(b, d) && c++;
                d = d.Ba
            }
            return c
        },
        qV: function(a, b) {
            if (0 == (a & 32768)) return this.fG(a, b);
            if (32767 == (a & 32767)) return 0;
            var c = this.jc[a & 32767],
                d, e = 0;
            for (d = 0; d < c.M.length; d += 2) {
                var f = c.M[d + 1];
                if (0 > f) break;
                e += this.fG(f, b)
            }
            return e
        },
        PF: function(a,
            b) {
            var c = this.w.ca[a];
            if (c.Da != this.Na) {
                if (this.uh) return this.pc = 0, null;
                for (c = c.ib; 0 == (c & 2147483648);) {
                    c = this.w.H[c];
                    if (null == c) break;
                    if (0 == (c.Z & N.rd) && (this.pc++, this.pc == b)) return c;
                    c = c.xb
                }
                return null
            }
            for (c = c.Aa; 0 == (c & 2147483648);) {
                c = this.w.H[c];
                if (null == c) break;
                if (0 == (c.Z & N.rd) && (this.pc++, this.pc == b)) return c;
                c = c.Ba
            }
            return null
        },
        QF: function(a, b) {
            b++;
            this.pc = 0;
            if (0 == (a & 32768)) return this.PF(a, b);
            if (32767 == (a & 32767)) return null;
            var c = this.jc[a & 32767],
                d;
            for (d = 0; d < c.M.length; d += 2) {
                var e = c.M[d + 1];
                if (0 > e) break;
                e = this.PF(e, b);
                if (null != e) return e
            }
            return null
        },
        AZ: function(a, b, c, d, e) {
            a = new si(a, b, c, d, e);
            null == this.eo && (this.eo = new Q);
            this.eo.add(a)
        },
        QX: function() {
            if (null != this.eo) {
                var a;
                for (a = 0; a < this.eo.size(); a++) {
                    var b = this.eo.get(a);
                    if (null != b && 0 != b.code) switch (this.bc = b.pZ, this.$J = b.Ad, b.f_) {
                        case 0:
                            this.Wf(b.code);
                            break;
                        case 1:
                            this.Ie(b.oZ, b.code)
                    }
                }
                this.eo.clear()
            }
        },
        load: function(a) {
            for (var b, c, d = 0;;)
                if (b = a.file.QJ(4), 69 == b[0] && 82 == b[1] && 62 == b[2] && 62 == b[3]) {
                    this.Xi = a.file.v();
                    300 > this.Xi &&
                        (this.Xi = 300);
                    a.file.v();
                    this.$I = a.file.v();
                    for (c = 0; c < 7 + v.mE; c++) this.Nn[c] = a.file.v();
                    this.Nn[v.ge + v.tc] < S.Vx + 1 && (this.Nn[v.ge + v.tc] = S.Vx + 1);
                    this.Zi = a.file.v();
                    if (0 < this.Zi)
                        for (this.gj = Array(this.Zi), c = 0; c < this.Zi; c++) this.gj[c] = new ri, this.gj[c].Kw = a.file.ra(), this.gj[c].Lw = a.file.ra()
                } else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 115 == b[3]) a.file.C(), this.ts = a.file.C(), this.Uc = Array(this.ts);
            else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 118 == b[3])
                for (a.file.C(), b = a.file.C(), c = 0; c < b; c++) this.Uc[d] = L.create(a),
                    d++;
            else if (69 == b[0] && 82 == b[1] && 111 == b[2] && 112 == b[3]) 0 != (a.file.C() & S.WO) && (this.rp |= L.Rq);
            else if (60 == b[0] && 60 == b[1] && 69 == b[2] && 82 == b[3]) break;
            this.kI = Math.max(this.kI, d)
        },
        DH: function(a) {
            var b, c;
            c = this.Uc[a];
            c.$ &= this.rp;
            c.$ |= L.Pf;
            a++;
            for (b = !1;;) {
                c = this.Uc[a];
                c.$ &= this.rp;
                c.$ |= L.Pf;
                c = c.$a[0];
                switch (c.ya) {
                    case -589825:
                        c = c.i[0];
                        c.Sc |= ma.Xk;
                        a = this.DH(a);
                        continue;
                    case -655361:
                        b = !0, a++
                }
                if (b) break;
                a++
            }
            return a
        },
        IB: function() {
            var a, b, c, d, e, f, g = new Q,
                h;
            for (d = 0; d < this.Uc.length;) a = this.Uc[d], a.$ &= this.rp,
                b = a.$a[0], -589825 == b.ya && (a = b.i[0], h = new qi, h.id = a.NX, h.FG = d, g.add(h), a.Sc &= ~(ma.Xk | ma.Dj), 0 != (a.Sc & ma.sQ) && (a.Sc |= ma.Dj)), d++;
            for (d = 0; d < this.Uc.length;) {
                a = this.Uc[d];
                a.$ &= this.rp;
                b = a.$a[0];
                if (-589825 == b.ya && (a = b.i[0], a.Sc &= ~ma.Xk, 0 != (a.Sc & ma.Dj))) {
                    d = this.DH(d);
                    continue
                }
                d++
            }
            for (d = 0; d < this.Uc.length; d++) switch (a = this.Uc[d], b = a.$a[0], b.ya) {
                case -589825:
                case -655361:
                    break;
                default:
                    for (a.Hi = 0, e = a.nn = 0; e < a.lc + a.zf; e++)
                        if (b = a.$a[e], b.ab = 0 > b.ya ? b.ab & ba.YO : b.ab & ~(ga.Tk | ba.Fo), 0 != b.Ec)
                            for (f = 0; f < b.Ec; f++) switch (c =
                                b.i[f], c.code) {
                                case 25:
                                    c.Dx = 0;
                                    break;
                                case 13:
                                    c.kp = c.jn;
                                    break;
                                case 39:
                                    var p;
                                    for (p = 0; p < g.size(); p++)
                                        if (h = g.get(p), h.id == c.id) {
                                            c.ma = h.FG;
                                            break
                                        }
                            }
            }
        },
        yZ: function(a) {
            qualToOiListFull = qualToOiList = null;
            if (0 < this.Zi) {
                var b, c, d, e, f = Array(this.Zi);
                for (d = 0; d < a.length; d++) a[d].Da = 0, a[d].hh = null;
                for (c = 0; c < this.Zi; c++)
                    for (e = this.gj[c].Kw & 32767, d = f[c] = 0; d < a.length; d++) {
                        var g = a[d];
                        if (g.se == this.gj[c].Lw)
                            for (b = 0; 8 > b && -1 != g.Vp[b]; b++)
                                if (e == g.Vp[b]) {
                                    f[c]++;
                                    g.Da++;
                                    break
                                }
                    }
                this.jc = Array(this.Zi);
                this.be = Array(this.Zi);
                for (c =
                    0; c < this.Zi; c++) {
                    this.jc[c] = new Kg;
                    this.be[c] = new Kg;
                    b = f[c];
                    0 != b && (this.jc[c].M = Array(2 * b), this.be[c].M = Array(2 * b));
                    var h = 0;
                    e = this.gj[c].Kw & 32767;
                    for (d = 0; d < a.length; d++)
                        if (g = a[d], g.se == this.gj[c].Lw)
                            for (b = 0; 8 > b && -1 != g.Vp[b]; b++)
                                if (e == g.Vp[b]) {
                                    this.be[c].M[2 * h] = g.Bd;
                                    this.be[c].M[2 * h + 1] = d;
                                    this.jc[c].M[2 * h] = -1;
                                    this.jc[c].M[2 * h + 1] = -1;
                                    null == g.hh && 0 != g.Da && (g.hh = Array(g.Da), g.Da = 0);
                                    null != g.hh && (g.hh[g.Da++] = c);
                                    h++;
                                    break
                                } this.jc[c].Mw = -1;
                    this.be[c].Mw = -1
                }
                for (d = 0; d < a.length; d++) a[d].Da = 0
            }
        },
        Tu: function(a) {
            var b,
                c, d, e, f, g, h, p, k, q, t, A, n, u, D, w;
            this.w = a;
            var F = this.bo = 0;
            for (h = a = 0; h < this.w.vh; h++) - 1 != this.w.ca[h].Bd && (this.w.ca[h].pB = -1, this.w.ca[h].ef = 0, this.w.ca[h].Up = -1, a++, this.w.ca[h].Bd + 1 > F && (F = this.w.ca[h].Bd + 1));
            this.Sg = Array(200 * F + 1);
            a = 0;
            g = [];
            var z;
            for (u = 0; u < this.Uc.length; u++) {
                b = this.Uc[u];
                for (z = 0; z < b.zf + b.lc; z++) {
                    c = b.$a[z];
                    c.ab &= ~ba.GD;
                    0 <= S.Pg(c.ya) && (c.va = this.xp(c.$d, S.Pg(c.ya)));
                    if (c.ya == ga.wM) d = c.i[0], d.MG = 0, d.ta[0].code == la.Nm && 0 == d.ta[1].code && (q = {}, q.lU = c.i[0], q.name = d.ta[0].Rb, g.push(q), this.w.Pu(d.ta[0].Rb));
                    else if (c.ya == ga.A0 || c.ya == ga.z0) d = c.i[0], d.ta[0].code == la.Nm && 0 == d.ta[1].code && (d.ta[0] = new qb, d.ta[0].code = la.Mt, d.ta[0].value = this.w.Pu(d.ta[0].Rb));
                    if (0 < c.Ec)
                        for (q = 0; q < c.Ec; q++) switch (d = c.i[q], d.code) {
                            case 25:
                                d.value = 0;
                                break;
                            case 21:
                                if (0 == (c.$d & v.Cy))
                                    for (t = this.w.u.ee.uv(); null != t; t = this.w.u.ee.ws()) {
                                        if (c.$d == t.Vh) {
                                            d.nr = t.Ml;
                                            break
                                        }
                                    } else d.nr = -1;
                                f = d.Fs; - 1 != f && (d.Gs = this.xp(f, d.Fw));
                                break;
                            case 9:
                            case 18:
                            case 16:
                                f = d.Fs; - 1 != f && (d.Gs = this.xp(f, d.Fw));
                                break;
                            case 1:
                                d.la = this.xp(d.Ad, d.type);
                                break;
                            case 69:
                                for (h =
                                    0; h < d.ic.length; h += 2) d.ic[h + 1] = this.xp(d.ic[h], 0);
                                break;
                            case 15:
                            case 27:
                            case 28:
                            case 45:
                            case 46:
                            case 22:
                            case 23:
                            case 52:
                            case 59:
                            case 53:
                            case 62:
                            case 54:
                                for (t = d, h = 0; h < t.ta.length; h++) 0 < S.Pg(t.ta[h].code) && (p = t.ta[h], p.la = this.xp(p.Ad, S.Pg(p.code)))
                        }
                }
                q = 0;
                t = L.Mm | L.JD | L.Ho;
                for (z = 0; z < b.lc + b.zf; z++) {
                    c = b.$a[z];
                    e = S.Pg(c.ya);
                    f = c.ya;
                    p = k = h = 0;
                    d = null;
                    if (e >= v.tc) switch (S.wn(f)) {
                        case 262144:
                        case 589824:
                            q |= L.Ho;
                            f = c.$d;
                            if (0 != (f & v.Cy))
                                for (e = this.DZ(c.va); - 1 != e; e = this.IJ()) a = this.gI(b, a, this.w.ca[e].Bd);
                            else a = this.gI(b,
                                a, f);
                            break;
                        case 1638400:
                            q |= L.$x;
                            break;
                        case -917504:
                            d = c.i[0];
                            h = c.i[0];
                            this.Ou(c.va, c.$d, h.la, h.Ad);
                            this.Ou(h.la, h.Ad, c.va, c.$d);
                            p = S.Pg(c.ya);
                            p = this.Ov(p) ? Y.rf | Y.dr : Y.rf | Y.xu | Y.dr;
                            k = h.type;
                            k = this.Ov(k) ? Y.rf | Y.dr : Y.rf | Y.xu | Y.dr;
                            this.Oc.TX & m.BM && this.Zw(c.va, c.$d, h.la, h.Ad);
                            h = 3;
                            break;
                        case -262144:
                            p = S.Pg(c.ya);
                            p = this.Ov(p) ? Y.rf : Y.rf | Y.xu;
                            d = c.i[0];
                            k = c.i[0].type;
                            k = this.Ov(k) ? Y.rf : Y.rf | Y.xu;
                            0 != (this.Oc.TX & m.BM) && this.Zw(c.va, c.$d, d.la, d.Ad);
                            h = 3;
                            break;
                        case -720896:
                        case -786432:
                            k = Y.wu;
                            h = 1;
                            break;
                        case -851968:
                            k =
                                Y.vu, h = 1
                    } else switch (f) {
                        case -327681:
                            t &= ~L.Mm;
                            break;
                        case -393217:
                            t |= L.Lm;
                            break;
                        case -262145:
                            t |= L.Lm;
                            break;
                        case -196609:
                            t |= L.Go + L.Lt;
                            break;
                        case -196614:
                            p = Y.rf;
                            d = c.i[0];
                            h = 2;
                            break;
                        case -393222:
                            p = Y.rf, d = c.i[1], h = 2
                    }
                    if (0 != (h & 1))
                        for (e = this.fj(c.va); - 1 != e; e = this.ci()) this.w.ca[e].ef |= k;
                    if (0 != (h & 2))
                        for (e = this.fj(d.la); - 1 != e; e = this.ci()) this.w.ca[e].ef |= p
                }
                b.$ &= ~t;
                b.$ |= q
            }
            this.Sg[a] = -1;
            k = !1;
            if (null == this.ih && null == this.jh) {
                this.ih = new Map;
                this.jh = new Map;
                k = this.fp = !0;
                for (u = 0; u < this.Uc.length && k; u++)
                    if (b = this.Uc[u],
                        null != b) {
                        for (z = 0; z < b.lc; z++)
                            if (c = b.$a[z], null != c && (e = S.Pg(c.ya), e >= v.tc && -2686976 == S.wn(c.ya))) {
                                var B = c.i[0];
                                if (2 == B.ta.length && B.ta[0].code == la.Nm && 0 == B.ta[1].code) {
                                    B = B.ta[0].Rb.toLowerCase();
                                    c = e == v.tc ? this.jh : this.ih;
                                    var C = c.get(B);
                                    void 0 == C ? C = 1 : C++;
                                    c.set(B, C)
                                } else {
                                    k = !1;
                                    break
                                }
                            } for (h = 0; h < b.zf && k; h++)
                            if (c = b.$a[h + b.lc], null != c && (e = S.Pg(c.ya), e >= v.tc && 5046272 == S.wn(c.ya))) {
                                k = !1;
                                break
                            }
                    } if (k) {
                    for (; this.ih.size > S.JN;) {
                        b = 1E9;
                        c = null;
                        z = Yb(this.ih.entries());
                        for (u = z.next(); !u.done; u = z.next()) q = u.value, u = q[1],
                            u < b && (c = q[0], b = u);
                        null != c && (this.ih["delete"](c), this.fp = !1)
                    }
                    b = S.Ht;
                    u = Yb(this.ih.keys());
                    for (c = u.next(); !c.done; c = u.next()) this.ih.set(c.value, b++);
                    for (; this.jh.size > S.KN;) {
                        b = 1E9;
                        c = null;
                        z = Yb(this.jh.entries());
                        for (u = z.next(); !u.done; u = z.next()) q = u.value, u = q[1], u < b && (c = q[0], b = u);
                        null != c && (this.jh["delete"](c), this.fp = !1)
                    }
                    b = S.Ht;
                    u = Yb(this.jh.keys());
                    for (c = u.next(); !c.done; c = u.next()) this.jh.set(c.value, b++), b == S.lg + 1 && (b += S.qu);
                    b > S.lg + 1 + S.qu && (this.Nn[v.ge + v.tc] += b - (S.lg + 1 + S.qu))
                } else this.jh = this.ih =
                    null, this.fp = !1
            }
            t = Array(v.ge + F + 1);
            b = u = 0;
            for (e = -v.ge; 0 > e; e++, b++) t[b] = u, u += this.Nn[v.ge + e];
            for (oil = 0; oil < this.w.vh; oil++, b++) t[b] = u, u = this.w.ca[oil].se < v.Qg ? u + (this.Nn[v.ge + this.w.ca[oil].se] + S.lg + 1) : u + (this.Oc.qv.zg(this.w.ca[oil].se) + S.lg + 1);
            n = u;
            this.Zc = Array(n);
            for (h = 0; h < n; h++) this.Zc[h] = 0;
            q = A = 0;
            p = Array(this.w.u.Xi);
            for (u = 0; u < this.ts; u++)
                for (b = this.Uc[u], b.$ &= ~L.Zx, d = !0, z = D = 0; z < b.lc; z++) {
                    c = b.$a[z];
                    e = S.Pg(c.ya);
                    f = c.ya;
                    h = -S.ay(f);
                    k && e >= v.tc && -2686976 == S.wn(f) && (B = c.i[0], 2 == B.ta.length && B.ta[0].code ==
                        la.Nm && 0 == B.ta[1].code && (B = B.ta[0].Rb.toLowerCase(), C = (e == v.tc ? this.jh : this.ih).get(B), void 0 != C && (h = C, f = (f & 65535) + 65536 * -h, c.ya = f)));
                    if (d && -2686977 != c.ya)
                        if (0 != (c.ab & ba.Yx) && (A++, 0 == (b.$ & L.Kt) && q++), 0 > e) this.Zc[t[7 + e] + h]++;
                        else {
                            d = 0;
                            for (e = this.fj(c.va); - 1 != e; e = this.ci()) this.Zc[t[v.ge + e] + h]++, p[d++] = e;
                            p[d] = -1;
                            if (-917504 == S.wn(f))
                                for (d = c.i[0], f = this.fj(d.la); - 1 != f; f = this.ci()) {
                                    for (d = 0; p[d] != f && -1 != p[d];) d++; - 1 == p[d] && this.Zc[t[v.ge + f] + h]++
                                }
                        } d = !1;
                    if (-1507329 == c.ya || -1572865 == c.ya) d = !0, b.$ |= L.Zx, 0 ==
                        D ? D = c.ya : c.ya = D, -1572865 == D && (b.$ |= L.KD); - 2686977 == c.ya && (A++, b.$ |= L.Pf)
                }
            c = A + 1;
            for (b = 0; b < n; b++) 0 != this.Zc[b] && (u = this.Zc[b], this.Zc[b] = c, c += u + 1);
            this.Pc = Array(c);
            this.xg = Array(c);
            for (h = 0; h < c; h++) this.Pc[h] = null, this.xg[h] = 0;
            k = Array(n);
            for (h = 0; h < n; h++) k[h] = this.Zc[h];
            this.w.te = null;
            n = 0;
            A = [];
            D = [];
            B = q + 1;
            this.pz = !1;
            for (u = 0; u < this.ts; u++) {
                b = this.Uc[u];
                d = !0;
                for (z = 0; z < b.lc; z++) {
                    c = b.$a[z];
                    e = S.Pg(c.ya);
                    f = c.ya;
                    h = -S.ay(f);
                    if (d && -2686977 != c.ya)
                        if (0 != (c.ab & ba.Yx) && (0 != (b.$ & L.Kt) ? 0 < A.length && (C = A[A.length - 1], C.push(b),
                                C.push(z)) : (this.Pc[n] = b, this.xg[n] = z, n++)), 0 > e) {
                            if (C = t[v.ge + e] + h, this.Pc[k[C]] = b, this.xg[k[C]] = z, k[C]++, c.ya == I.NN) {
                                f = !1;
                                for (h = 0; h < b.lc && b.$a[h].ya != I.ON && b.$a[h].ya != I.PN; h++);
                                h < b.lc && (f = !0);
                                d = c.i[0];
                                if (d.ta[0].code == la.Nm && 0 == d.ta[1].code) {
                                    h = null;
                                    d = d.ta[0].Rb;
                                    e = this.w.Pu(d);
                                    for (C = 0; C < g.length; C++) {
                                        var J = g[C];
                                        if (l.Hb(J.name, d)) {
                                            this.w.te || (this.w.te = []);
                                            if (null == h) {
                                                for (w = 0; w < this.w.te.length && (h = this.w.te[w], !l.Hb(d, h.name)); w++);
                                                w == this.w.te.length && (h = new Qb(d, e), this.w.te.push(h));
                                                h.QC(b);
                                                h.gs |=
                                                    f
                                            }
                                            J.lU.MG = w + 1
                                        }
                                    }
                                    if (null == h) {
                                        this.w.te || (this.w.te = []);
                                        for (w = 0; w < this.w.te.length && (h = this.w.te[w], !l.Hb(d, h.name)); w++);
                                        w == this.w.te.length && (h = new Qb(d, e), this.w.te.push(h));
                                        h.QC(b);
                                        h.gs |= f
                                    }
                                } else this.pz = !0
                            }
                        } else {
                            d = 0;
                            for (e = this.fj(c.va); - 1 != e; e = this.ci()) C = t[v.ge + e] + h, this.Pc[k[C]] = b, this.xg[k[C]] = z, k[C]++, p[d++] = e;
                            p[d] = -1;
                            if (-917504 == S.wn(f))
                                for (d = c.i[0], f = this.fj(d.la); - 1 != f; f = this.ci()) {
                                    for (d = 0; p[d] != f && -1 != p[d];) d++; - 1 == p[d] && (C = t[v.ge + f] + h, this.Pc[k[C]] = b, this.xg[k[C]] = z, k[C]++)
                                }
                        } d = !1;
                    if (-1507329 ==
                        c.ya || -1572865 == c.ya) d = !0;
                    if (-2686977 == c.ya && 0 < A.length) {
                        D.pop().GG = B;
                        C = A.pop();
                        for (c = 0; c < C.length; c += 2) this.Pc[B] = C[c], this.xg[B] = C[c + 1], B++;
                        this.Pc[B] = null;
                        this.xg[B] = null;
                        B++
                    }
                }
                if (0 != (b.$ & L.ID))
                    for (C = [], A.push(C), h = 0; h < b.zf; h++)
                        if (c = b.$a[b.lc + h], 2883583 == c.ya) {
                            0 < c.Ec && (d = c.i[0], D.push(d));
                            break
                        }
            }
            this.Dn = Array(F + 1 + a / 2);
            for (oil = F = 0; oil < this.w.vh; oil++)
                if (w = this.w.ca[oil], b = t[v.ge + oil], w.sB = b, 0 != (w.xw & E.Dh)) {
                    a = 0;
                    u = this.Zc[b - S.ay(-786432)];
                    if (0 != u)
                        for (; null != this.Pc[u];) {
                            b = this.Pc[u];
                            c = b.$a[this.xg[u]];
                            g = c.i[0].value;
                            z = S.cW(b);
                            for (h = b.zf; 0 < h; h--, z++) c = b.$a[z], c.ya == (524288 | w.se & 65535) && (a |= g);
                            u++
                        }
                    w.tB = a;
                    g = w.Bd;
                    for (c = a = 0; - 1 != this.Sg[a]; a += 2)
                        if (this.Sg[a] == g)
                            if (b = this.Sg[a + 1], 0 != (b & 32768)) w.ef |= b;
                            else {
                                for (u = 0; u < c && this.Dn[F + u] != b;) u++;
                                u == c && (this.Dn[F + c++] = b)
                            } 0 < c && (w.Up = F, this.Dn[F + c++] = -1, F += c)
                } this.eg[0] = 0;
            for (h = 1; h <= v.ge; h++) this.eg[h] = t[v.ge - h];
            for (oil = 0; oil < this.w.vh; oil++)
                if (w = this.w.ca[oil], e = w.ib, 0 == (e & 2147483648)) {
                    do a = this.w.H[e], a.hA = w.sB, a.La = w, a.Yg = w.ef, 0 != (a.Oa & E.Dh) && (a.D.lC = w.tB),
                        0 != (a.Oa & E.el) && 0 == (a.Yg & Y.rf) && a.A.nx(!1), 0 == (a.Oa & E.uE) && (a.Oa &= ~E.Vm, 0 != (a.Yg & Y.vu) && 0 != (this.w.u.vc & O.WD) && (a.Oa |= E.Vm), 0 != (a.Yg & (Y.rf | Y.wu)) && (a.Oa |= E.Vm)), e = a.xb; while (0 == (e & 2147483648))
                } this.aK = 0 != q ? !0 : !1;
            this.Sg = null;
            this.lr = !0
        },
        Bx: function() {
            this.lr = !1;
            this.xg = this.Pc = this.Zc = this.Dn = this.jc = null
        },
        xp: function(a, b) {
            if (0 != (a & v.Cy)) {
                var c;
                for (c = 0; a != this.gj[c].Kw || b != this.gj[c].Lw;) c++;
                return c | 32768
            }
            for (c = 0; c < this.w.vh && this.w.ca[c].Bd != a;) c++;
            return c
        },
        Ov: function(a) {
            var b;
            for (b = 0; b < this.w.vh; b++)
                if (-1 !=
                    this.w.ca[b].Bd && this.w.ca[b].se == a)
                    if (0 != (this.w.ca[b].xw & E.el) && 0 == (this.w.ca[b].xw & E.By)) break;
                    else return !1;
            return !0
        },
        fj: function(a) {
            if (0 == (a & 32768)) return this.Ls = -1, a;
            if (-1 == a) return -1;
            this.Ls = a & 32767;
            this.Js = 0;
            return this.ci()
        },
        ci: function() {
            var a;
            if (-1 == this.Ls || this.Js >= this.be[this.Ls].M.length) return -1;
            a = this.be[this.Ls].M[this.Js + 1];
            this.Js += 2;
            return a
        },
        DZ: function(a) {
            if (0 == (a & 32768)) return this.Ms = -1, a;
            if (-1 == a) return -1;
            this.Ms = a & 32767;
            this.Ks = 0;
            return this.IJ()
        },
        IJ: function() {
            var a;
            if (-1 == this.Ms || this.Ks >= this.be[this.Ms].M.length) return -1;
            a = this.be[this.Ms].M[this.Ks + 1];
            this.Ks += 2;
            return a
        },
        Ou: function(a, b, c, d) {
            var e, f;
            if (0 > b) {
                if (null != this.be)
                    for (e = this.be[a & 32767], f = 0; f < e.M.length;) this.Ou(e.M[f + 1], e.M[f], c, d), f += 2
            } else if (0 > d) {
                if (null != this.be)
                    for (e = this.be[c & 32767], f = 0; f < e.M.length;) this.Ou(a, b, e.M[f + 1], e.M[f]), f += 2
            } else {
                a = this.w.ca[a];
                if (null == a.Yl) a.Yl = [], a = a.Yl;
                else
                    for (a = a.Yl, b = 0; b < a.length; b += 2)
                        if (d == a[b]) return;
                a.push(d);
                a.push(c)
            }
        },
        Zw: function(a, b, c, d) {
            var e, f;
            if (0 > b) {
                if (null != this.be)
                    for (e = this.be[a & 32767], f = 0; f < e.M.length;) this.Zw(e.M[f + 1], e.M[f], c, d), f += 2
            } else if (0 > d) {
                if (null != this.be)
                    for (e = this.be[c & 32767], f = 0; f < e.M.length;) this.Zw(a, b, e.M[f + 1], e.M[f]), f += 2
            } else if (a = this.w.ca[a], c = this.w.ca[c], a.se == v.tc && c.se == v.tc && (a.Rn & E.cr) != (c.Rn & E.cr) && (0 != (c.Rn & E.cr) && (a = c, b = d), d = this.Oc.ld.Cl(b), e = d.pd, c = !1, 0 != (e.aj & E.Dh) && null != e.cf && 0 < e.cf.On && (e = e.cf.pe[0], e.qs == aa.Ch && (c = e.Nv)), !c)) {
                a.Rn &= ~E.cr;
                for (a = a.ib; 0 == (a & 2147483648);) {
                    a = this.w.H[a];
                    if (null == a) break;
                    a.A.aa &= ~D.Pj;
                    a = a.xb
                }
                null != this.Oc.ld.bj && this.Oc.ld.bj[b] && d.bd(this, null)
            }
        },
        Gi: function(a) {
            a = this.Oc.qa.Ub(a);
            null != a && (a.as |= oa.Ut);
            return -1
        },
        gI: function(a, b, c) {
            var d, e, f, g, h;
            for (h = 0; h < a.lc; h++)
                if (g = a.$a[h], 2 <= S.Pg(g.ya)) switch (e = 32768 + Y.UR, f = S.wn(g.ya), f) {
                    case -917504:
                        f = g.i[0];
                        for (d = this.fj(g.va); - 1 != d; d = this.ci()) d = this.w.ca[d].Bd, c == d && (e = 0, b = this.hI(b, c, f.la));
                        if (0 == e) break;
                        for (d = this.fj(f.la); - 1 != d; d = this.ci()) d = this.w.ca[d].Bd, c == d && (b = this.hI(b, c, g.va));
                        break;
                    case -786432:
                        f = g.i[0], e = 32768 +
                            f.value;
                    case -851968:
                        for (d = this.fj(g.va); - 1 != d; d = this.ci()) d = this.w.ca[d].Bd, c == d && (this.Sg[b++] = c, this.Sg[b++] = e)
                }
            return b
        },
        hI: function(a, b, c) {
            for (c = this.fj(c); - 1 != c; c = this.ci()) {
                c = this.w.ca[c].Bd;
                var d;
                for (d = 0; d < a && (this.Sg[d] != b || this.Sg[d + 1] != c); d += 2);
                d == a && (this.Sg[a++] = b, this.Sg[a++] = c)
            }
            return a
        },
        $V: function(a) {
            var b, c, d, e, f, g;
            for (d = 0; d < this.ts; d++)
                for (b = this.Uc[d], e = 0; e < b.lc + b.zf; e++)
                    for (c = b.$a[e], f = 0; f < c.Ec; f++) switch (c.i[f].code) {
                        case 6:
                        case 35:
                            g = c.i[f], a.Gi(g.rm)
                    }
        }
    };
    L.Mm = 1;
    L.Go = 2;
    L.Lt = 4;
    L.Lm = 8;
    L.$x = 16;
    L.ID = 64;
    L.Rq = 128;
    L.$O = 256;
    L.D1 = 512;
    L.Zx = 1024;
    L.Ho = 2048;
    L.KD = 4096;
    L.bP = 8192;
    L.Pf = 16384;
    L.Kt = 32768;
    L.JD = L.$x + L.Go + L.Lt + L.Lm;
    L.aP = L.$O + L.bP + L.ID + L.Kt;
    L.create = function(a) {
        var b = a.file.ma,
            c = a.file.ra(),
            d = new L;
        d.lc = a.file.lb();
        d.zf = a.file.lb();
        d.$ = a.file.v();
        d.bW = a.file.v();
        d.Hi = a.file.C();
        d.nn = a.file.C();
        d.$a = Array(d.lc + d.zf);
        var e, f = 0;
        for (e = 0; e < d.lc; e++) d.$a[f++] = I.create(a);
        for (e = 0; e < d.zf; e++) d.$a[f++] = ga.create(a);
        a.file.seek(b - c);
        return d
    };
    ba.ZO = 1;
    ba.HD = 2;
    ba.XO = 4;
    ba.Jt = 8;
    ba.Fo = 16;
    ba.Yx = 32;
    ba.C1 = 64;
    ba.GD = 128;
    ba.YO = ba.Yx + ba.ZO + ba.XO + ba.Jt + ba.Fo;
    ba.Km = 1;
    ba.FD = 32;
    hb.DE = 0;
    hb.g4 = 1;
    Oa.AE = 0;
    Oa.O3 = 1;
    Oa.P3 = 2;
    Oa.Q3 = 3;
    Oa.prototype = {
        load: function(a) {
            this.Ml = a.v();
            this.Vh = a.v();
            this.AA = a.C();
            this.BA = a.C();
            this.yA = a.v();
            this.zA = a.v();
            this.VH = a.v();
            a.wa(2)
        },
        Nc: function(a, b) {
            this.xA[a] = b
        }
    };
    Lg.prototype = {
        load: function(a) {
            this.$h = a.file.C();
            this.list = Array(this.$h);
            var b, c = 0;
            for (b = 0; b < this.$h; b++) this.list[b] = new Oa, this.list[b].load(a.file), this.list[b].Ml + 1 > c && (c = this.list[b].Ml + 1), this.list[b].Vv =
                a.ld.Cl(this.list[b].Vh).Fg;
            this.gb = Array(c);
            for (b = 0; b < this.$h; b++) this.gb[this.list[b].Ml] = b
        },
        gH: function(a) {
            return this.list[a]
        },
        Xz: function(a) {
            return a < this.gb.length ? this.list[this.gb[a]] : null
        },
        ws: function() {
            var a;
            if (this.Uv < this.$h) {
                do
                    if (a = this.list[this.Uv++], 2 <= a.Vv) return a; while (this.Uv < this.$h)
            }
            return null
        },
        uv: function() {
            this.Uv = 0;
            return this.ws()
        }
    };
    da.cy = 1;
    da.dy = 2;
    da.M1 = 4;
    da.Tq = 16;
    da.Ot = 32;
    da.Pt = 64;
    da.N1 = 65536;
    da.Sq = 131072;
    da.O1 = 262144;
    da.prototype = {
        load: function(a) {
            this.Sa = a.C();
            this.hg =
                a.OJ();
            this.ig = a.OJ();
            this.pw = a.C();
            this.rw = a.C();
            this.zw = a.cb();
            this.hF = this.Sa;
            this.kF = this.hg;
            this.lF = this.ig;
            this.iF = this.pw;
            this.jF = this.rw
        },
        reset: function() {
            this.Sa = this.hF;
            this.hg = this.kF;
            this.ig = this.lF;
            this.pw = this.iF;
            this.rw = this.jF;
            this.x = this.y = this.De = this.Ee = this.Ww = this.Xw = 0;
            this.kl = this.vk = this.xk = this.wk = null;
            this.kt(0);
            this.scale = 1;
            this.DK(1);
            this.EK(1);
            this.IK(this.app.Ta / 2);
            this.KK(this.app.fb / 2);
            this.HK(this.app.Ta / 2);
            this.JK(this.app.fb / 2);
            this.LK(!1);
            this.Sa & da.Sq ? (this.Re = !0, this.Wr()) : (this.Re = !1, this.show())
        },
        NV: function() {
            this.$c.WZ()
        },
        jU: function(a) {
            null == this.wk && (this.wk = new Q);
            this.wk.add(a)
        },
        KV: function(a) {
            null != this.wk && this.wk.Ts(a)
        },
        $E: function(a) {
            null == this.xk && (this.xk = new Q);
            this.xk.add(a)
        },
        iG: function(a) {
            null != this.xk && this.xk.Ts(a)
        },
        Mu: function(a) {
            null == this.kl && (this.kl = new Q);
            this.kl.add(a)
        },
        xV: function(a, b) {
            this.$c = new Ta;
            this.$c.x = a;
            this.$c.y = b;
            this.Ic = new Ta;
            this.Ic.x = a;
            this.Ic.y = b;
            this.yb = new Ta;
            this.yb.x = a;
            this.yb.y = b;
            this.kt(0);
            this.scale = 1;
            this.DK(1);
            this.EK(1);
            this.IK(this.app.Ta / 2);
            this.KK(this.app.fb / 2);
            this.HK(this.app.Ta / 2);
            this.JK(this.app.fb / 2);
            this.LK(!1);
            this.app.Yf.Tf(this.$c);
            this.app.Yf.Tf(this.Ic);
            this.app.Yf.Tf(this.yb);
            this.H_()
        },
        kt: function(a) {
            this.angle = a;
            this.$c.angle = a;
            this.Ic.angle = a;
            this.yb.angle = a
        },
        DK: function(a) {
            this.hd = a;
            this.$c.hd = a;
            this.Ic.hd = a;
            this.yb.hd = a
        },
        EK: function(a) {
            this.jd = a;
            this.$c.jd = a;
            this.Ic.jd = a;
            this.yb.jd = a
        },
        IK: function(a) {
            this.eb = a;
            this.$c.eb = a;
            this.Ic.eb = a;
            this.yb.eb = a
        },
        KK: function(a) {
            this.Za =
                a;
            this.$c.Za = a;
            this.Ic.Za = a;
            this.yb.Za = a
        },
        HK: function(a) {
            this.zt = a = this.app.Ta - a;
            this.$c.zt = a;
            this.Ic.zt = a;
            this.yb.zt = a
        },
        JK: function(a) {
            this.Bt = a = this.app.fb - a;
            this.$c.Bt = a;
            this.Ic.Bt = a;
            this.yb.Bt = a
        },
        LK: function(a) {
            this.Ci = a;
            this.$c.Ci = a;
            this.Ic.Ci = a;
            this.yb.Ci = a
        },
        a_: function(a, b) {
            this.$c.x = a;
            this.$c.y = b;
            this.Ic.x = a;
            this.Ic.y = b;
            this.yb.x = a;
            this.yb.y = b;
            this.show()
        },
        H_: function() {
            this.Sa & da.Tq ? this.show() : this.Wr()
        },
        Wr: function() {
            this.Sa &= ~da.Sq;
            this.Re && (this.$c.visible = !1, this.Ic.visible = !1, this.Re =
                this.yb.visible = !1)
        },
        show: function() {
            0 == this.Re && (this.$c.visible = !0, this.Ic.visible = !0, this.Re = this.yb.visible = !0)
        },
        kG: function() {
            null != this.$c && (this.app.Yf.removeChild(this.$c), this.$c = null);
            null != this.Ic && (this.app.Yf.removeChild(this.Ic), this.Ic = null);
            null != this.yb && (this.app.Yf.removeChild(this.yb), this.yb = null)
        },
        LV: function() {
            var a;
            if (null != this.kl)
                for (a = 0; a < this.kl.size(); a++) {
                    var b = this.kl.get(a);
                    b.JV(this);
                    null != b.body && this.app.U.Kg.H6(b.body)
                }
            this.kl = null
        },
        iU: function(a, b, c, d) {
            var e = new ja;
            e.left = a;
            e.top = b;
            e.right = c;
            e.bottom = d;
            null == this.vk && (this.vk = new Q);
            this.vk.add(e)
        },
        tY: function(a, b, c, d) {
            if (null != pLadders) {
                var e = new ja;
                e.left = Math.min(a, c);
                e.top = Math.min(b, d);
                e.right = Math.max(a, c);
                e.bottom = Math.max(b, d);
                for (a = 0; a < pLadders.size(); a++) b = this.vk.get(a), 1 == b.dY(e) && (this.vk.ao(a), a--)
            }
        },
        yX: function(a, b) {
            a += this.x;
            b += this.y;
            if (null != this.vk) {
                var c, d;
                for (c = 0; c < this.vk.size(); c++)
                    if (d = this.vk.get(c), a >= d.left && b >= d.top && a < d.right && b < d.bottom) return d
            }
            return null
        },
        tm: function(a, b, c, d,
            e) {
            b = b + this.x - a.eb;
            c = c + this.y - a.Za;
            var f = b + a.width,
                g = c + a.height,
                h = c;
            0 != d && (h = g - d);
            var p, k;
            k = e == ta.Co ? this.wk : this.xk;
            if (null == k) return null;
            for (e = 0; e < k.size(); e++)
                if (p = k.get(e), p.x < f && p.x + p.width > b && p.y < g && p.y + p.height > h && p.tm(a, b, c, d)) return p;
            return null
        },
        vx: function(a, b, c, d, e, f) {
            f = f == ta.Co ? this.wk : this.xk;
            if (null == f) return null;
            a += this.x;
            b += this.y;
            c += this.x;
            d += this.y;
            0 != e && (b = d - e);
            for (e = 0; e < f.size(); e++) {
                var g = f.get(e);
                if (g.x < c && g.x + g.width > a && g.y < d && g.y + g.height > b && g.vx(a, b, c, d)) return g
            }
            return null
        },
        Cq: function(a, b, c) {
            c = c == ta.Co ? this.wk : this.xk;
            if (null == c) return null;
            a += this.x;
            b += this.y;
            var d;
            for (d = 0; d < c.size(); d++) {
                var e = c.get(d);
                if (a >= e.x && a < e.x + e.width && b >= e.y && b < e.y + e.height && e.Cq(a, b)) return e
            }
            return null
        }
    };
    ka.prototype = {
        fc: function(a, b, c) {
            if (null != this.AY)
                if (this.type == v.KR) {
                    var d = this.Hf.pd,
                        e;
                    switch (d.Tl) {
                        case 1:
                            switch (d.mk) {
                                case 1:
                                    a.Cd(b + this.x, c + this.y, this.width, this.height, this.dn, this.wf, this.xf);
                                    break;
                                case 2:
                                    a.Dd(b + this.x, c + this.y, this.width, this.height, this.dn, this.wf, this.xf);
                                    break;
                                case 3:
                                    a.$B(b + this.x, c + this.y, this.width, this.height, this.dn, this.wf, this.xf)
                            }
                            break;
                        case 2:
                            switch (d.mk) {
                                case 1:
                                    a.Cd(b + this.x, c + this.y, this.width, this.height, this.dn, this.wf, this.xf);
                                    break;
                                case 2:
                                    a.ZB(b + this.x, c + this.y, this.width, this.height, this.dn, this.oz, 0 != this.vH, this.wf, this.xf);
                                    break;
                                case 3:
                                    a.SJ(b + this.x, c + this.y, this.width, this.height, this.dn, this.oz, 0 != this.vH, this.wf, this.xf)
                            }
                            break;
                        case 3:
                            switch (d.mk) {
                                case 2:
                                    e = this.app.qa.Ub(d.lk);
                                    a.TJ(e, b + this.x, c + this.y, this.width, this.height, this.wf,
                                        this.xf);
                                    break;
                                case 3:
                                    e = this.app.qa.Ub(d.lk), a.UJ(e, b + this.x, c + this.y, this.width, this.height, this.wf, this.xf)
                            }
                    }
                    if (0 < this.borderWidth) switch (d.mk) {
                        case 1:
                            var f = e = 0,
                                g = this.width,
                                h = this.height;
                            0 != (d.Bs & bb.mR) && (e += g, g = -g);
                            0 != (d.Bs & bb.nR) && (f += h, h = -h);
                            a.Cd(b + this.x + e, c + this.y + f, b + this.x + e + g, c + this.y + f + h, this.borderColor, this.borderWidth);
                            break;
                        case 2:
                            a.Us(b + this.x, c + this.y, this.width, this.height, this.borderColor, this.borderWidth);
                            break;
                        case 3:
                            a.Yw(b + this.x, c + this.y, this.width, this.height, 1, this.borderColor,
                                this.borderWidth)
                    }
                } else this.type == v.JR ? a.Hg(this.Md, b + this.x + this.Md.eb, c + this.y + this.Md.Za, 0, 1, 1, this.wf, this.xf) : null != this.f && this.f.fc(a, b, c);
            else a.Hg(this.Md, b + this.x + this.Md.eb, c + this.y + this.Md.Za, 0, 1, 1, this.wf, this.xf)
        },
        qj: function(a, b) {
            this.wf = a;
            this.xf = b
        },
        Nc: function(a, b) {
            b.$c.Tf(this);
            this.type == v.oE && b.Mu(this);
            switch (this.bf) {
                case ia.So:
                    b.jU(this);
                    b.$E(this);
                    break;
                case ia.qf:
                    b.$E(this);
                    break;
                case ia.su:
                    b.iU(this.x, this.y, this.x + this.width, this.y + this.height)
            }
        },
        JV: function(a) {
            a.$c.removeChild(this);
            switch (this.bf) {
                case ia.So:
                    a.KV(this);
                    a.iG(this);
                    break;
                case ia.qf:
                    a.iG(this);
                    break;
                case ia.su:
                    a.tY(x, y, x + width, y + height)
            }
        },
        tm: function(a, b, c, d) {
            var e;
            switch (this.type) {
                case 0:
                    return e = this.height, this.bf == ia.qf && (e = O.Om), a.yC(b, c, d, this.x, this.y, this.width, e, 0);
                case 1:
                    if (0 != this.ul) return !0;
                    e = R.pi;
                    this.bf == ia.qf && (e = R.Cj);
                    e = this.Md.Vf(e, 0, 1, 1);
                    return a.tm(b, c, d, e, this.x, this.y, 0);
                case 11:
                    if (0 != this.ul) return !0;
                    e = R.pi;
                    this.bf == ia.qf && (e = R.Cj);
                    e = this.Md.Vf(e, 0, 1, 1);
                    return a.tm(b, c, d, e, this.x, this.y,
                        0)
            }
            return !1
        },
        vx: function(a, b, c, d) {
            var e;
            switch (this.type) {
                case 0:
                    if (this.bf == ia.qf) {
                        a = this.y + Math.min(this.height, O.Om);
                        if (this.y < d && a > b) return !0;
                        break
                    }
                    return !0;
                case 1:
                    if (0 != this.ul) return !0;
                    e = R.pi;
                    this.bf == ia.qf && (e = R.Cj);
                    e = this.Md.Vf(e, 0, 1, 1);
                    return e.yC(this.x, this.y, 0, a, b, c, d, 0);
                case 11:
                    if (0 != this.ul) return !0;
                    e = R.pi;
                    this.bf == ia.qf && (e = R.Cj);
                    e = this.Md.Vf(e, 0, 1, 1);
                    return e.yC(this.x, this.y, 0, a, b, c, d, 0)
            }
            return !1
        },
        Cq: function(a, b) {
            var c;
            switch (this.type) {
                case 0:
                    if (this.bf == ia.qf) {
                        c = this.y + this.height;
                        if (b >= y + this.height - O.Om && b < c) return !0;
                        break
                    }
                    return !0;
                case 1:
                    if (0 != this.ul) return !0;
                    c = R.pi;
                    this.bf == ia.qf && (c = R.Cj);
                    c = this.Md.Vf(c, 0, 1, 1);
                    return c.Cq(this.x, this.y, a, b);
                case 11:
                    if (0 != this.ul) return !0;
                    c = R.pi;
                    this.bf == ia.qf && (c = R.Cj);
                    c = this.Md.Vf(c, 0, 1, 1);
                    return c.Cq(this.x, this.y, a, b)
            }
            return !1
        }
    };
    v.J3 = 1;
    v.H3 = 2;
    v.L3 = 4;
    v.K3 = 8;
    v.uu = 16;
    v.SR = 32;
    v.I3 = 64;
    v.G3 = 1;
    v.F3 = 2;
    v.xE = 4;
    v.ge = 7;
    v.pE = -7;
    v.d3 = -6;
    v.c3 = -5;
    v.Ro = -4;
    v.ru = -3;
    v.f3 = -2;
    v.g3 = -1;
    v.KR = 0;
    v.JR = 1;
    v.tc = 2;
    v.Nj = 3;
    v.qE = 4;
    v.rE = 5;
    v.nE = 6;
    v.br = 7;
    v.e3 = 8;
    v.lE = 9;
    v.b3 = 10;
    v.oE = 11;
    v.mE = 10;
    v.Qg = 32;
    v.Cy = 32768;
    v.prototype = {
        DA: function(a) {
            this.Cs = a.v();
            this.Fg = a.v();
            this.rk = a.v();
            a.wa(2);
            this.mB = a.C();
            this.nB = a.C()
        },
        load: function(a) {
            a.seek(this.iJ);
            switch (this.Fg) {
                case 0:
                    this.pd = new bb;
                    break;
                case 1:
                    this.pd = new Ng;
                    break;
                default:
                    this.pd = new E
            }
            this.pd.load(a, this.Fg);
            this.jJ = 0
        },
        $_: function() {
            this.pd = null
        },
        bd: function(a, b) {
            this.pd.bd(a, b)
        }
    };
    Mg.prototype = {
        yk: function(a) {
            this.Xl = a.C();
            this.ic = Array(this.Xl);
            var b;
            for (b = this.cj = 0; b < this.Xl; b++)
                for (var c = 0, d; 32639 != c;)
                    if (c =
                        a.v(), a.v(), d = a.C(), 0 != d) {
                        d = a.ma + d;
                        switch (c) {
                            case 17476:
                                this.ic[b] = new v;
                                this.ic[b].DA(a);
                                this.ic[b].Cs >= this.cj && (this.cj = this.ic[b].Cs + 1);
                                break;
                            case 17477:
                                this.ic[b].oB = a.cb();
                                break;
                            case 17478:
                                this.ic[b].iJ = a.ma
                        }
                        a.seek(d)
                    } this.sk = Array(this.cj);
            for (b = 0; b < this.Xl; b++) this.sk[this.ic[b].Cs] = b;
            this.Ds = Array(this.cj);
            this.bj = Array(this.cj);
            for (a = 0; a < this.cj; a++) this.Ds[a] = 0, this.bj[a] = 0
        },
        Cl: function(a) {
            return this.ic[this.sk[a]]
        },
        $Z: function() {
            var a;
            for (a = 0; a < this.Xl; a++) this.ic[a].rk &= ~v.uu
        },
        B_: function(a) {
            this.ic[this.sk[a]].rk |=
                v.uu
        },
        eH: function() {
            var a;
            for (a = 0; a < this.Xl; a++)
                if (0 != (this.ic[a].rk & v.uu)) return this.hv = a, this.ic[a];
            return null
        },
        jH: function() {
            if (this.hv < this.Xl) {
                var a;
                for (a = this.hv + 1; a < this.Xl; a++)
                    if (0 != (this.ic[a].rk & v.uu)) return this.hv = a, this.ic[a]
            }
            return null
        },
        rh: function() {
            var a;
            for (a = 0; a < this.cj; a++) this.Ds[a] = 0
        },
        om: function(a) {
            this.Ds[a] = 1
        },
        load: function(a) {
            var b;
            for (b = 0; b < this.cj; b++)
                if (0 != this.Ds[b]) {
                    if (0 == this.bj[b] || 0 != this.bj[b] && 0 != (this.ic[this.sk[b]].jJ & v.SR)) this.ic[this.sk[b]].load(a), this.bj[b] =
                        1
                } else 0 != this.bj[b] && (this.ic[this.sk[b]].$_(), this.bj[b] = 0);
            this.rh()
        },
        bd: function(a, b) {
            var c;
            for (c = 0; c < this.cj; c++) 0 != this.bj[c] && this.ic[this.sk[c]].bd(a, b)
        }
    };
    ia.sE = 0;
    ia.So = 1;
    ia.qf = 2;
    ia.su = 3;
    ia.LR = 4;
    Ng.prototype = {
        load: function(a) {
            a.wa(4);
            this.eJ = a.v();
            this.aJ = a.v();
            this.bJ = a.C();
            this.cJ = a.C();
            this.lk = a.v()
        },
        bd: function(a) {
            null != a && (a = a.Gi(this.lk), -1 != a && (this.lk = a))
        }
    };
    bb.mR = 1;
    bb.nR = 2;
    bb.prototype = {
        load: function(a) {
            a.wa(4);
            this.eJ = a.v();
            this.aJ = a.v();
            this.bJ = a.C();
            this.cJ = a.C();
            this.uw = a.v();
            this.tw = a.sc();
            this.mk = a.v();
            this.Tl = a.v();
            if (1 == this.mk) this.Bs = a.v();
            else switch (this.Tl) {
                case 1:
                    this.$i = this.Rp = a.sc();
                    break;
                case 2:
                    this.$i = a.sc();
                    this.Rp = a.sc();
                    this.As = a.C();
                    break;
                case 3:
                    this.lk = a.v()
            }
        },
        bd: function(a) {
            3 == this.Tl && null != a && (a = a.Gi(this.lk), -1 != a && (ocImage = a))
        }
    };
    E.p3 = 1;
    E.o3 = 2;
    E.OR = 4;
    E.wE = 8;
    E.Dh = 16;
    E.dl = 32;
    E.r3 = 64;
    E.t3 = 128;
    E.RR = 256;
    E.el = 512;
    E.q3 = 1024;
    E.QR = 2048;
    E.By = 4096;
    E.vE = 8192;
    E.Vm = 16384;
    E.uE = 32768;
    E.s3 = 65536;
    E.tE = 131072;
    E.PR = 1048576;
    E.h3 = 1;
    E.n3 = 2;
    E.cr = 4;
    E.tu = 8;
    E.j3 = 4;
    E.i3 = 48;
    E.m3 = 16;
    E.l3 = 32;
    E.k3 = 48;
    E.MR = 64;
    E.NR = 128;
    E.v3 = 1;
    E.C3 = 2;
    E.B3 = 4;
    E.D3 = 8;
    E.A3 = 16;
    E.x3 = 32;
    E.u3 = 64;
    E.z3 = 128;
    E.y3 = 256;
    E.E3 = 512;
    E.w3 = 1024;
    E.prototype = ia;
    E.prototype = {
        load: function(a, b) {
            var c = a.ma;
            this.jB = Array(8);
            var d;
            a.wa(4);
            a.wa(2);
            var e = a.v();
            a.wa(2);
            var f = a.v(),
                g = a.v(),
                h = a.v();
            this.aj = a.C();
            for (d = 0; 8 > d; d++) this.jB[d] = a.ra();
            a.v();
            var p = a.v(),
                k = a.v();
            this.Ul = a.v();
            var l = a.v();
            this.zd = a.C();
            a.sc();
            d = a.C();
            var q = a.C();
            this.zs = this.Sp = null;
            0 != h && (a.seek(c + h), this.cf = new Ih, this.cf.load(a));
            0 != p && (a.seek(c +
                p), this.nk = new Eh, this.nk.load(a, 0 != (this.Ul & E.NR)));
            0 != k && (a.seek(c + k), this.Vl = new Dh, this.Vl.load(a));
            0 != g && (a.seek(c + g), this.Sl = new gb, this.Sl.load(a));
            0 != f && (a.seek(c + f), this.Rd = new Pg, this.Rd.load(a));
            0 != l && (a.seek(c + l), f = a.C(), a.wa(4), this.gJ = a.C(), a.C(), this.fJ = a.C(), 0 != f - 20 && (this.dJ = a.ma));
            0 != d && (a.seek(c + d), this.Sp = new Ea, this.Sp.load(a));
            0 != q && (a.seek(c + q), this.zs = new Ea, this.zs.load(a));
            if (0 != e) switch (a.seek(c + e), b) {
                case 3:
                case 4:
                    this.Rd = new Rg;
                    this.Rd.load(a);
                    break;
                case 5:
                case 6:
                case 7:
                    this.ac =
                        new ya;
                    this.ac.load(a);
                    break;
                case 8:
                    this.Rd = new Qg;
                    this.Rd.load(a);
                    this.aj &= ~(E.el | E.By | E.OR);
                    break;
                case 9:
                    this.Rd = new Og, this.Rd.load(a)
            }
        },
        bd: function(a, b) {
            null != this.Sl && this.Sl.bd(a);
            null != this.Rd && this.Rd.bd(a, b);
            null != this.ac && this.ac.bd(a, b)
        }
    };
    Og.prototype = {
        load: function(a) {
            a.wa(4);
            this.pk = a.C();
            this.qk = a.C();
            a.v();
            this.hJ = a.v();
            this.df = a.C();
            a.wa(8);
            this.kB = a.cb()
        },
        bd: function() {}
    };
    Pg.prototype = {
        load: function(a) {
            a.wa(2);
            this.XF = a.C();
            this.ZF = a.C();
            this.YF = a.C()
        },
        bd: function() {}
    };
    ya.f1 = 0;
    ya.e1 =
        1;
    ya.gO = 2;
    ya.fO = 3;
    ya.d1 = 4;
    ya.g1 = 5;
    ya.Sx = 256;
    ya.prototype = {
        load: function(a) {
            a.wa(4);
            this.pk = a.C();
            this.qk = a.C();
            this.lB = a.v();
            this.fh = a.v();
            this.Pn = a.v();
            this.Wl = a.v();
            switch (this.fh) {
                case 1:
                case 4:
                    this.Jp = a.v();
                    this.frames = Array(this.Jp);
                    var b;
                    for (b = 0; b < this.Jp; b++) this.frames[b] = a.v();
                    break;
                case 2:
                case 3:
                case 5:
                    if (this.uw = a.v(), this.tw = a.sc(), this.mk = a.v(), this.Tl = a.v(), 1 == this.mk) this.Bs = a.v();
                    else switch (this.Tl) {
                        case 1:
                            this.$i = a.sc();
                            break;
                        case 2:
                            this.$i = a.sc(), this.Rp = a.sc(), this.As = a.C()
                    }
            }
        },
        bd: function(a, b) {
            switch (this.fh) {
                case 1:
                case 4:
                    var c;
                    for (c = 0; c < this.Jp; c++) null != a && a.Gi(this.frames[c]);
                    break;
                case 5:
                    null != b && b.Gi(this.Wl)
            }
        }
    };
    Qg.prototype = {
        load: function(a) {
            a.C();
            a.C();
            this.df = a.C();
            a.sc();
            this.pk = a.C();
            this.qk = a.C();
            a.wa(4);
            var b = a.C();
            this.text = a.cb(b)
        },
        bd: function() {}
    };
    Ba.j4 = 0;
    Ba.i4 = 1;
    Ba.k4 = 2;
    Ba.l4 = 4;
    Ba.h4 = 15;
    Ba.IS = 256;
    Ba.GE = 512;
    Ba.prototype = {
        load: function(a) {
            this.Hq = a.ra();
            this.xt = a.v();
            this.EC = a.sc();
            this.uj = a.cb()
        },
        bd: function(a, b) {
            null != b && b.Gi(this.Hq)
        }
    };
    Rg.prototype = {
        load: function(a) {
            var b =
                a.ma;
            a.wa(4);
            this.zB = a.C();
            this.AB = a.C();
            this.Sn = a.C();
            this.Hc = Array(this.Sn);
            var c = Array(this.Sn),
                d;
            for (d = 0; d < this.Sn; d++) c[d] = a.C();
            for (d = 0; d < this.Sn; d++) this.Hc[d] = new Ba, a.seek(b + c[d]), this.Hc[d].load(a)
        },
        bd: function(a, b) {
            var c;
            for (c = 0; c < this.Sn; c++) this.Hc[c].bd(a, b)
        }
    };
    N.rd = 1;
    N.Rf = 2;
    N.l2 = 4;
    N.Yk = 8;
    N.Zk = 16;
    N.UQ = 32;
    N.QD = 64;
    N.Fj = 8192;
    N.k2 = 16384;
    N.m2 = 32768;
    N.prototype = {
        nt: function(a, b) {
            if (this.c.zb != a || this.c.Ab != b) {
                0 <= a && (this.c.zb = a);
                0 <= b && (this.c.Ab = b);
                this.c.Y = !0;
                var c = this.b.h.qa.Ki(this.c.Ma,
                    this.c.Ua, this.c.zb, this.c.Ab);
                null != c && (this.S = c.width, this.T = c.height, this.Ea = c.eb, this.Fa = c.Za)
            }
        },
        NK: function(a, b, c, d) {
            var e = this.Ka;
            b = this.b.Hr(a.nr, a.hz, b, c, d, k.vD | k.Do, e, -1);
            0 <= b && (b = this.b.H[b], null != b.D ? (b.c.Xa = d, b.D.FH(b, aa.iE, !1), b.c.na = a.J_, b.D.ja.Kv(this), -1 != e && 0 != (b.Oa & E.el) && (this.b.u.sa[e].Sa & (da.Sq | da.Tq)) != da.Tq && b.A.Pp(), this.b.g.Wg(b), 0 != (this.Oa & E.dl) && this.ga.Ai(F.Et) && (this.ga.ir(F.Et), this.ga.Su())) : this.b.Mh(b.ea))
        },
        ua: function() {},
        handle: function() {},
        Sj: function() {},
        UF: function() {},
        display: function() {},
        qc: function() {},
        rX: function() {
            return null
        },
        qj: function() {},
        Ry: function() {},
        cp: function() {},
        Vj: function() {
            return 0
        },
        qm: function() {},
        Gl: function() {},
        Aq: function() {},
        Wa: function() {
            return -1
        },
        vn: function() {
            return 0
        },
        dc: function() {},
        nl: function() {},
        up: function() {}
    };
    Sg.prototype = l.extend(new N, {
        handle: function() {
            this.A.handle();
            this.c.Y && (this.c.Y = !1)
        },
        Ry: function(a, b, c, d, e) {
            this.jb = this.b.u.sa[d];
            this.Ja = e;
            this.jb.yb.Tf(this)
        },
        fc: function(a, b, c) {
            if (this.Ja && (0 == (this.Z & N.Yk) || this.A.pj)) {
                var d =
                    this.A.qb;
                this.A.aa & D.wi && (d |= D.TC);
                var e = this.b.h.qa.Ub(this.c.Ma);
                e && (this.yo ? a.fm(this.yo, b + this.s - this.b.da + this.jb.x - e.eb, c + this.o - this.b.fa + this.jb.y - e.Za, this.yo.width * this.c.zb, this.yo.height * this.c.Ab, d, this.A.nb) : a.Hg(e, b + this.s - this.b.da + this.jb.x, c + this.o - this.b.fa + this.jb.y, this.c.Ua, this.c.zb, this.c.Ab, d, this.A.nb))
            }
        },
        Vj: function() {
            return this.jb.yb.removeChild(this)
        },
        qm: function() {
            this.Ja = !0
        },
        Gl: function() {
            this.Ja = !1
        },
        Wa: function() {
            return this.jb.yb.Wa(this)
        },
        vn: function() {
            return this.jb.yb.children.length
        },
        dc: function(a) {
            a >= this.jb.yb.children.length && (a = this.jb.yb.children.length);
            0 > a && (a = 0);
            this.jb.yb.dc(this, a)
        },
        Aq: function(a) {
            this.A.qb = D.kg;
            this.A.nb = a
        }
    });
    Z.$C = 1;
    Z.xN = 2;
    Z.zN = 4;
    Z.$0 = 8;
    Z.AN = 16;
    Z.Y0 = 32;
    Z.L0 = 64;
    Z.b1 = 128;
    Z.K0 = 256;
    Z.c1 = 512;
    Z.a1 = 1024;
    Z.O0 = 2048;
    Z.Gt = 4096;
    Z.N0 = 8192;
    Z.ZC = 16384;
    Z.U0 = 32768;
    Z.vN = 65536;
    Z.V0 = 131072;
    Z.M0 = 262144;
    Z.yN = 524288;
    Z.W0 = 1048576;
    Z.wN = 2097152;
    Z.T0 = 12582912;
    Z.Q0 = 0;
    Z.S0 = 4194304;
    Z.R0 = 8388608;
    Z.P0 = 12582912;
    Z.Z0 = 16777216;
    Z.X0 = 33554432;
    Z.prototype = l.extend(new N, {
        SK: function(a,
            b, c) {
            b = a.Rd;
            this.S = b.pk;
            this.T = b.qk;
            this.df = b.df;
            0 != (this.df & Z.AN) && (this.df |= Z.vN); - 1 == c && (c = 0, 0 != (this.df & Z.ZC) && (c = b.hJ));
            null == b.kB || 0 != b.kB.length || 0 == (this.df & Z.ZC) || c >= this.b.h.Nh || c == this.b.h.vg || (this.Re = 0 != (a.Ul & E.tu) ? !0 : !1, this.Jd = new Ta, this.Jd.x = this.s - this.b.da, this.Jd.y = this.o - this.b.fa, this.b.h.Yf.Tf(this), this.xB = this.s, this.yB = this.o, this.I = new m(this.b.h, this.b.h.file, this.b.h.path, !0), this.I.zK(this.b.h, c, this.df, this.Jd, this.S, this.T), this.I.digest(), 0 != (this.df & Z.Gt) && null ==
                this.b.h.Yi && (this.b.h.Yi = this, this.b.h.U.pause()), this.I.uC(), this.I.px((this.b.h.ym + this.Jd.x) * this.b.h.hd, (this.b.h.zm + this.Jd.y) * this.b.h.jd), this.I.rt(), this.b.h.oc.push(this.I))
        },
        ua: function(a) {
            this.SK(a, !0, -1)
        },
        handle: function() {
            this.D.move();
            if (null != this.I) {
                if (this.xB != this.s || this.yB != this.o) this.Jd.x = this.s - this.b.da, this.Jd.y = this.o - this.b.fa, this.xB = this.s, this.yB = this.o, this.I.px(this.Jd.x * this.b.h.hd, this.Jd.y * this.b.h.jd), this.a0();
                0 == this.I.rt() ? (this.jv(), 0 != (this.df & Z.Gt) && null !=
                    this.I.kb && this.I.kb.Yi == this && (this.I.kb.Yi = null, this.I.kb.U.resume()), this.I = null) : (this.mJ = this.level, this.level = this.I.vg)
            }
        },
        fc: function(a) {
            this.Re && null != this.I && this.I.xG(a, this.Jd.x, this.Jd.y)
        },
        qc: function() {
            if (null != this.I) {
                switch (this.I.Sb) {
                    case 3:
                        this.I.Er()
                }
                this.jv();
                this.I.CG();
                0 != (this.df & Z.Gt) && null != this.I.kb && this.I.kb.Yi == this && (this.I.kb.Yi = null, this.I.kb.U.resume());
                this.I = null
            }
        },
        jv: function() {
            var a;
            for (a = 0; a < this.b.h.oc.length; a++)
                if (this.b.h.oc[a] == this.I) {
                    this.b.h.oc.splice(a,
                        1);
                    break
                } this.b.h.Yf.removeChild(this.Jd)
        },
        M6: function() {
            if (null != this.I) {
                if (null != this.I.U) {
                    this.I.U.cc = k.ZD;
                    return
                }
                this.qc(!0)
            }
            this.SK(this.ka, !1, -1)
        },
        t5: function() {
            null != this.I && (null != this.I.U && (this.I.U.cc = k.Yt), 0 != (this.df & Z.Gt) && null != this.I.kb && this.I.kb.Yi == this && (this.I.kb.Yi = null, this.I.kb.U.resume()))
        },
        Wr: function() {
            this.Re = !1
        },
        show: function() {
            this.Re = !0
        },
        g6: function(a) {
            null != this.I && null != this.I.U && 0 <= a && 4096 > a && (this.I.U.cc = k.Zt, this.I.U.tq = 32768 | a)
        },
        yc: function() {
            null != this.I && null !=
                this.I.U && (this.I.U.cc = k.$t)
        },
        D6: function() {
            null != this.I && null != this.I.U && (this.I.U.cc = k.jy)
        },
        N6: function() {
            null != this.I && null != this.I.U && (this.I.U.cc = k.$D)
        },
        pause: function() {
            null != this.I && null != this.I.U && this.I.U.pause()
        },
        resume: function() {
            null != this.I && null != this.I.U && this.I.U.resume()
        },
        U6: function(a, b) {
            null != this.I && this.I.qC(a, b)
        },
        T6: function(a, b) {
            null != this.I && this.I.x_(a, b)
        },
        kY: function() {
            return null != this.I && null != this.I.U ? 0 != this.I.U.ei : !1
        },
        V4: function() {
            return null == this.I
        },
        b6: function() {
            return this.Re
        },
        C5: function() {
            return this.level != this.mJ
        },
        N5: function(a) {
            return null != this.I ? this.I.fH(a) : ""
        },
        O5: function(a) {
            return null != this.I ? this.I.Ji(a) : 0
        },
        L5: function() {
            return this.level + 1
        },
        pm: function() {},
        nm: function() {},
        Z4: function() {
            null != this.I && this.Re && (hoAdRunHeader.h.vZ.removeChild(this), hoAdRunHeader.h.vZ.Tf(this))
        },
        a0: function() {
            if (null != this.I && null != this.I.U) {
                var a = this.I.U,
                    b = 0,
                    c;
                for (c = 0; c < a.Pb; c++) {
                    for (; null == a.H[b];) b++;
                    var d = a.H[b];
                    b++;
                    d.up()
                }
            }
        },
        nl: function() {
            null != this.I && (this.I.px((this.b.h.ym +
                this.Jd.x) * this.b.h.hd, (this.b.h.zm + this.Jd.y) * this.b.h.jd), this.I.fq())
        }
    });
    Tg.prototype = {
        ua: function() {
            this.Ab = this.zb = 1;
            this.Ua = 0;
            this.zc = -1
        },
        qc: function() {}
    };
    qa.zD = 15;
    qa.aO = 240;
    qa.bO = 4;
    qa.ZN = 61440;
    qa.$N = 12;
    qa.cO = 512;
    qa.eO = 1024;
    qa.dO = 2048;
    qa.prototype = l.extend(new N, {
        ua: function() {
            this.Gd = -1;
            this.bt = this.Fd = 0;
            this.S = this.T = 1;
            if (null == this.ka.ac) this.T = this.ve = this.S = this.ue = 1;
            else {
                var a = this.ka.ac;
                this.S = this.ue = a.pk;
                this.T = this.ve = a.qk;
                this.Te = a.Pn;
                this.type = a.fh;
                switch (this.type) {
                    case 5:
                        var b =
                            this.Gd; - 1 == b && (b = a.Wl);
                        this.font = this.b.h.Qc.Qh(b);
                        this.Xe = this.font.yg();
                        this.Fd = a.$i;
                        break;
                    case 2:
                    case 3:
                        this.Fd = a.$i, this.bt = a.Rp
                }
            }
            a = this.ka.Rd;
            this.Wb = a.ZF;
            this.gd = a.YF;
            this.Ya = a.XF;
            this.ol = !1
        },
        qc: function() {},
        handle: function() {
            this.A.handle();
            this.c.Y && (this.c.Y = !1)
        },
        Ph: function() {
            var a = this.ka.ac;
            if (5 == this.type) {
                var b = rsFont; - 1 == b && (b = a.Wl);
                return this.b.h.Qc.zv(b)
            }
            return null
        },
        wh: function(a, b) {
            5 == this.type && (this.Gd = this.b.h.Qc.Qu(a), this.font = this.b.h.Qc.Qh(this.Gd), this.Xe = this.font.yg(),
                null != b && (this.S = this.ue = b.right - b.left, this.T = this.ve = b.bottom - b.top), this.Xb())
        },
        yv: function() {
            return this.Fd
        },
        ox: function(a) {
            this.Fd = a;
            this.Xb()
        },
        sz: function(a) {
            0 != this.ol || l.qA(a) || (this.ol = !0)
        },
        sr: function(a) {
            0 == this.ol ? (a = l.ub(a), a < this.Wb && (a = this.Wb), a > this.gd && (a = this.gd), a != Math.round(this.Ya) && (this.Ya = a, this.c.Y = !0, this.Xb())) : (a < this.Wb && (a = this.Wb), a > this.gd && (a = this.gd), a != this.Ya && (this.Ya = a, this.c.Y = !0, this.Xb()))
        },
        rV: function(a) {
            this.sz(a);
            this.sr(this.Ya + a)
        },
        vV: function(a) {
            this.sz(a);
            this.sr(this.Ya - a)
        },
        j5: function(a) {
            this.Wb = a;
            this.sr(this.Ya)
        },
        uV: function(a) {
            this.gd = a;
            this.sr(this.Ya)
        },
        sV: function(a) {
            this.Fd = a;
            this.Xb()
        },
        tV: function(a) {
            this.bt = a;
            this.Xb()
        },
        i5: function() {
            return this.Ya
        },
        h5: function() {
            return this.Wb
        },
        g5: function() {
            return this.gd
        },
        e5: function() {
            return this.Fd
        },
        f5: function() {
            return this.bt
        },
        cp: function(a, b, c, d, e, f) {
            null != this.ka.ac && 1 != this.Bb && (this.Bb = !0, this.gF = d, this.Ja = e, this.jb = this.b.u.sa[c], this.Qa = this.gF ? this.jb.Ic : this.jb.yb, 0 > f ? this.Qa.Tf(this) : this.Qa.Nu(this,
                f), 5 != this.type && this.Xb())
        },
        Vj: function() {
            if (null == this.ka.ac || 0 == this.Bb) return -1;
            this.Bb = !1;
            var a = this.Qa.Wa(this);
            this.Qa.removeChild(this);
            return a
        },
        Wa: function() {
            return this.Bb ? this.Qa.Wa(this) : -1
        },
        vn: function() {
            return this.Bb ? this.Qa.children.length : -1
        },
        dc: function(a) {
            this.Bb && this.Qa.dc(this, a)
        },
        qm: function() {
            null != this.ka.ac && 0 == this.Ja && (this.Ja = !0, this.Xb())
        },
        Gl: function() {
            null != this.ka.ac && 1 == this.Ja && (this.Ja = !1)
        },
        Sj: function() {
            this.vf || this.Xb()
        },
        Xb: function() {
            var a, b = this.ka.ac;
            switch (this.type) {
                case 4:
                    this.oj =
                        this.gd <= this.Wb ? 0 : Math.floor((this.Ya - this.Wb) * b.Jp / (this.gd - this.Wb));
                    this.oj = Math.min(this.oj, b.Jp - 1);
                    a = this.b.h.qa.Ub(b.frames[Math.max(this.oj, 0)]);
                    this.S = a.width;
                    this.T = a.height;
                    this.Ea = a.eb;
                    this.Fa = a.Za;
                    break;
                case 2:
                case 3:
                    a = this.ue;
                    b.fh == ya.gO && (a = this.ve);
                    this.oj = this.gd <= this.Wb ? 0 : (this.Ya - this.Wb) * a / (this.gd - this.Wb);
                    b.fh == ya.fO ? (this.Fa = 0, this.T = this.ve, this.S = this.oj, this.Ea = 0 != (b.Pn & ya.Sx) ? this.oj - this.ue : 0) : (this.Ea = 0, this.S = this.ue, this.T = this.oj, this.Fa = 0 != (b.Pn & ya.Sx) ? this.oj - this.ve :
                        0);
                    break;
                case 1:
                    a = 0 == this.ol ? l.Il(this.Ya, this.Te) : l.zz(this.Ya, this.Te);
                    var c, d, e, f = 0,
                        g = 0;
                    for (c = a.length - 1; 0 <= c; c--) d = a.charCodeAt(c), e = 0, 45 == d ? e = b.frames[10] : 46 == d ? e = b.frames[12] : 43 == d ? e = b.frames[11] : 101 == d || 69 == d ? e = b.frames[13] : 48 <= d && 57 >= d && (e = b.frames[d - 48]), 0 <= e && (d = this.b.h.qa.Ub(e), null != d ? (f += d.width, g = Math.max(g, d.height)) : toto = 2);
                    this.Ea = f;
                    this.Fa = g;
                    this.S = f;
                    this.T = g;
                    break;
                case 5:
                    a = 0 == this.ol ? l.Il(this.Ya, this.Te) : l.zz(this.Ya, this.Te), this.Ea = b = null != this.pb ? this.pb.measureText(a, this.font) :
                        (new pa(this.b.h, 16, 16)).measureText(a, this.font), this.Fa = this.ve / 2 + this.Xe / 2, this.S = b, this.T = this.Xe, null == this.pb ? this.pb = new pa(this.b.h, this.S, this.T) : (this.S > this.pb.width || this.T > this.pb.height) && this.pb.resize(this.S, this.T), this.pb.to(a, l.Im | l.Jm, new ja(0, 0, 1E3, 1E3), this.font, this.Fd)
            }
            this.vf = !0
        },
        fc: function(a, b, c) {
            if (this.Ja && this.vf) {
                var d, e, f;
                d = this.ka.ac;
                b = b + this.s - this.Ea - this.b.da + this.jb.x;
                c = c + this.o - this.Fa - this.b.fa + this.jb.y;
                var g = this.S,
                    h = this.T;
                switch (this.type) {
                    case 4:
                        d = this.b.h.qa.Ub(d.frames[Math.max(this.oj,
                            0)]);
                        a.Hg(d, b + d.eb, c + d.Za, 0, 1, 1, this.A.qb, this.A.nb);
                        break;
                    case 2:
                    case 3:
                        e = this.Fd;
                        f = this.bt;
                        switch (d.Tl) {
                            case 1:
                                a.Dd(b, c, g, h, e, this.A.qb, this.A.nb);
                                break;
                            case 2:
                                0 != (d.Pn & ya.Sx) && (dl = e, e = f, f = dl), a.ZB(b, c, g, h, e, f, 0 != d.As, this.A.qb, this.A.nb)
                        }
                        break;
                    case 1:
                        e = 0 == this.ol ? l.Il(this.Ya, this.Te) : l.zz(this.Ya, this.Te);
                        for (f = 0; f < e.length; f++) h = e.charCodeAt(f), g = 0, 45 == h ? g = d.frames[10] : 46 == h || 44 == h ? g = d.frames[12] : 43 == h ? g = d.frames[11] : 69 == h || 101 == h ? g = d.frames[13] : 48 <= h && 57 >= h && (g = d.frames[h - 48]), g = this.b.h.qa.Ub(g),
                            null != g && (a.Hg(g, b + g.eb, c + g.Za, 0, 1, 1, this.A.qb, this.A.nb), b += g.width);
                        break;
                    case 5:
                        this.pb.fc(a, b, c, this.A.qb, this.A.nb)
                }
            }
        },
        Aq: function(a) {
            this.A.qb = D.kg;
            this.A.nb = a
        }
    });
    Ug.prototype = l.extend(new N, {
        ua: function() {
            this.Gd = -1;
            this.Fd = 0;
            var a = this.ka.ac;
            this.S = this.ue = a.pk;
            this.T = this.ve = a.qk;
            this.type = a.fh;
            this.Fd = a.$i;
            this.ro = a.lB;
            this.Ya = this.b.h.oH()[this.ro - 1];
            this.Te = a.Pn;
            if (5 == this.type) {
                var b = this.Gd; - 1 == b && (b = a.Wl);
                this.font = this.b.h.Qc.Qh(b);
                this.Xe = this.font.yg()
            }
        },
        qc: function() {},
        handle: function() {
            var a =
                this.b.h.oH()[this.ro - 1];
            a != this.Ya && (this.Ya = a, this.Xb());
            this.A.handle();
            this.c.Y && (this.c.Y = !1)
        },
        Ph: function() {
            var a = this.ka.ac;
            if (5 == a.fh) {
                var b = this.Gd; - 1 == b && (b = a.Wl);
                return this.b.h.Qc.zv(b)
            }
            return null
        },
        wh: function(a, b) {
            5 == type && (this.Gd = hoAdRunHeader.h.Qc.Qu(a), a = this.b.h.Qc.Qh(this.Gd), this.Xe = a.yg(), null != b && (this.S = this.ue = b.right - b.left, this.T = this.ve = b.bottom - b.top), this.Xb())
        },
        yv: function() {
            return this.Fd
        },
        ox: function(a) {
            this.Fd = a;
            this.Xb()
        },
        cp: function(a, b, c, d, e, f) {
            null != this.ka.ac &&
                1 != this.Bb && (this.Bb = !0, this.Ja = e, this.jb = this.b.u.sa[c], this.Qa = d ? this.jb.Ic : this.jb.yb, 0 > f ? this.Qa.Tf(this) : this.Qa.Nu(this, f), 5 != this.type && this.Xb())
        },
        Vj: function() {
            if (null == this.ka.ac || 0 == this.Bb) return -1;
            this.Bb = !1;
            var a = this.Qa.Wa(this);
            this.Qa.removeChild(this);
            return a
        },
        Wa: function() {
            return this.Bb ? this.Qa.Wa(this) : -1
        },
        vn: function() {
            return this.Bb ? this.Qa.children.length : -1
        },
        dc: function(a) {
            this.Bb && this.Qa.dc(this, a)
        },
        qm: function() {
            null != this.ka.ac && 0 == this.Ja && (this.Ja = !0, this.Xb())
        },
        Gl: function() {
            null !=
                this.ka.ac && 1 == this.Ja && (this.Ja = !1)
        },
        FK: function(a) {
            a != this.Ya && (this.Ya = a, this.Xb())
        },
        Sj: function() {
            this.vf || this.Xb()
        },
        Xb: function() {
            this.vf = !0;
            this.S = this.T = 1;
            if (null != this.ka.ac) {
                var a = this.ka.ac,
                    b, c = l.Il(this.Ya, this.Te);
                switch (a.fh) {
                    case 1:
                        var d, e, f = 0,
                            g = 0;
                        for (d = c.length - 1; 0 <= d; d--) e = c.charCodeAt(d), b = 0, 45 == e ? b = a.frames[10] : 46 == e ? b = a.frames[12] : 43 == e ? b = a.frames[11] : 101 == e || 69 == e ? b = a.frames[13] : 48 <= e && 57 >= e && (b = a.frames[e - 48]), 0 <= b && (b = this.b.h.qa.Ub(b), f += b.width, g = Math.max(g, b.height));
                        this.Ea =
                            f;
                        this.Fa = g;
                        this.S = f;
                        this.T = g;
                        break;
                    case 5:
                        this.Ea = a = null != this.pb ? this.pb.measureText(c, this.font) : (new pa(this.b.h, 8, 8)).measureText(c, this.font), this.Fa = this.ve / 2 + this.Xe / 2, this.S = a, this.T = this.Xe, null == this.pb ? this.pb = new pa(this.b.h, this.S, this.T) : (this.S > this.pb.width || this.T > this.pb.height) && this.pb.resize(this.S, this.T), this.pb.to(c, l.Im | l.Jm, new ja(0, 0, 1E3, 1E3), this.font, this.Fd)
                }
            }
        },
        fc: function(a, b, c) {
            if (this.Ja && this.vf) {
                this.globalAlpha = this.alpha;
                this.globalCompositeOperation = this.en;
                var d = this.ka.ac;
                b = b + this.s - this.Ea - this.b.da + this.jb.x;
                var e = c + this.o - this.Fa - this.b.fa + this.jb.y;
                c = l.Il(this.Ya, this.Te);
                switch (this.type) {
                    case 1:
                        var f, g;
                        for (f = 0; f < c.length; f++) {
                            var h = c.charCodeAt(f);
                            g = 0;
                            45 == h ? g = d.frames[10] : 46 == h || 44 == h ? g = d.frames[12] : 43 == h ? g = d.frames[11] : 69 == h || 101 == h ? g = d.frames[13] : 48 <= h && 57 >= h && (g = d.frames[h - 48]);
                            g = this.b.h.qa.Ub(g);
                            a.Hg(g, b + g.eb, e + g.Za, 0, 1, 1, this.A.qb, this.A.nb);
                            b += g.width
                        }
                        break;
                    case 5:
                        this.pb.fc(a, b, e, this.A.qb, this.A.nb)
                }
            }
        },
        Aq: function(a) {
            this.A.qb = D.kg;
            this.A.nb = a
        }
    });
    Vg.prototype = l.extend(new N, {
        ua: function() {
            this.Gd = -1;
            this.Fd = 0;
            var a = this.ka.ac;
            this.S = this.ue = a.pk;
            this.T = this.ve = a.qk;
            this.type = a.fh;
            this.Fd = a.$i;
            this.ro = a.lB;
            this.Ya = this.b.h.hH()[this.ro - 1];
            this.Te = a.Pn;
            if (5 == this.type) {
                var b = this.Gd; - 1 == b && (b = a.Wl);
                this.font = this.b.h.Qc.Qh(b);
                this.Xe = this.font.yg()
            }
        },
        qc: function() {},
        handle: function() {
            var a = this.b.h.hH()[this.ro - 1];
            a != this.Ya && (this.Ya = a, this.Xb());
            this.A.handle();
            this.c.Y && (this.c.Y = !1)
        },
        Ph: function() {
            var a = this.ka.ac;
            if (5 == a.fh) {
                var b =
                    this.Gd; - 1 == b && (b = a.Wl);
                return this.b.h.Qc.zv(b)
            }
            return null
        },
        wh: function(a, b) {
            5 == type && (this.Gd = hoAdRunHeader.h.Qc.Qu(a), a = this.b.h.Qc.Qh(this.Gd), this.Xe = a.yg(), null != b && (this.S = this.ue = b.right - b.left, this.T = this.ve = b.bottom - b.top), this.Xb())
        },
        yv: function() {
            return this.Fd
        },
        ox: function(a) {
            this.Fd = a;
            this.Xb()
        },
        cp: function(a, b, c, d, e, f) {
            null != this.ka.ac && 1 != this.Bb && (this.Bb = !0, this.Ja = e, this.jb = this.b.u.sa[c], this.Qa = d ? this.jb.Ic : this.jb.yb, 0 > f ? this.Qa.Tf(this) : this.Qa.Nu(this, f), 5 != this.type && this.Xb())
        },
        Vj: function() {
            if (null == this.ka.ac || 0 == this.Bb) return -1;
            this.Bb = !1;
            var a = this.Qa.Wa(this);
            this.Qa.removeChild(this);
            return a
        },
        Wa: function() {
            return this.Bb ? this.Qa.Wa(this) : -1
        },
        vn: function() {
            return this.Bb ? this.Qa.children.length : -1
        },
        dc: function(a) {
            this.Bb && this.Qa.dc(this, a)
        },
        qm: function() {
            null != this.ka.ac && 0 == this.Ja && (this.Ja = !0, this.Xb())
        },
        Gl: function() {
            null != this.ka.ac && 1 == this.Ja && (this.Ja = !1)
        },
        FK: function(a) {
            a != this.Ya && (this.Ya = a, this.Xb())
        },
        Sj: function() {
            this.vf || this.Xb()
        },
        Xb: function() {
            this.vf = !0;
            this.S = this.T = 1;
            if (null != this.ka.ac) {
                var a = this.ka.ac;
                switch (a.fh) {
                    case 4:
                        if (0 != this.Ya) {
                            var b = this.b.h.qa.Ub(a.frames[0]),
                                c = this.Ya * b.width;
                            c <= this.ue ? (this.S = c, this.T = b.height) : (this.S = this.ue, this.T = (this.ue / b.width + this.Ya - 1) * b.height);
                            break
                        }
                        this.S = this.T = 1;
                        break;
                    case 1:
                        var d, e, b, f = 0,
                            g = 0,
                            c = l.Il(this.Ya, this.Te);
                        for (d = c.length - 1; 0 <= d; d--) b = c.charCodeAt(d), e = 0, 45 == b ? e = a.frames[10] : 46 == b ? e = a.frames[12] : 43 == b ? e = a.frames[11] : 101 == b || 69 == b ? e = a.frames[13] : 48 <= b && 57 >= b && (e = a.frames[b - 48]), 0 <= e && (b =
                            this.b.h.qa.Ub(e), f += b.width, g = Math.max(g, b.height));
                        this.Ea = f;
                        this.Fa = g;
                        this.S = f;
                        this.T = g;
                        break;
                    case 5:
                        c = l.Il(this.Ya, this.Te), this.Ea = a = null != this.pb ? this.pb.measureText(c, this.font) : (new pa(this.b.h, 8, 8)).measureText(c, this.font), this.Fa = this.ve / 2 + this.Xe / 2, this.S = a, this.T = this.Xe, null == this.pb ? this.pb = new pa(this.b.h, this.S, this.T) : (this.S > this.pb.width || this.T > this.pb.height) && this.pb.resize(this.S, this.T), this.pb.to(c, l.Im | l.Jm, new ja(0, 0, 1E3, 1E3), this.font, this.Fd)
                }
            }
        },
        fc: function(a, b, c) {
            if (this.Ja &&
                this.vf) {
                this.globalAlpha = this.alpha;
                this.globalCompositeOperation = this.en;
                var d, e = this.ka.ac;
                b = b + this.s - this.Ea - this.b.da + this.jb.x;
                c = c + this.o - this.Fa - this.b.fa + this.jb.y;
                switch (this.type) {
                    case 1:
                        var f, g;
                        d = l.Il(this.Ya, this.Te);
                        for (f = 0; f < d.length; f++) {
                            var h = d.charCodeAt(f);
                            g = 0;
                            45 == h ? g = e.frames[10] : 46 == h || 44 == h ? g = e.frames[12] : 43 == h ? g = e.frames[11] : 69 == h || 101 == h ? g = e.frames[13] : 48 <= h && 57 >= h && (g = e.frames[h - 48]);
                            g = this.b.h.qa.Ub(g);
                            a.Hg(g, b + g.eb, c + g.Za, 0, 1, 1, this.A.qb, this.A.nb);
                            b += g.width
                        }
                        break;
                    case 4:
                        if (0 !=
                            this.Ya) {
                            d = b + this.S;
                            f = c + this.T;
                            var h = b,
                                p = this.Ya;
                            for (g = this.b.h.qa.Ub(e.frames[0]); c < f && 0 < p; c += g.height)
                                for (b = h; b < d && 0 < p; b += g.width, --p) a.Hg(g, b + g.eb, c + g.Za, 0, 1, 1, this.A.qb, this.A.nb)
                        }
                        break;
                    case 5:
                        this.pb.fc(a, b, c, this.A.qb, this.A.nb)
                }
            }
        },
        Aq: function(a) {
            this.A.qb = D.kg;
            this.A.nb = a
        }
    });
    Wg.prototype = l.extend(new N, {
        ua: function(a, b) {
            var c = a.Rd;
            this.S = c.zB;
            this.T = c.AB;
            this.ue = c.zB;
            this.ve = c.AB;
            this.gd = c.Sn;
            this.ct = 0;
            0 < c.Hc.length && (this.ct = c.Hc[0].EC);
            this.Lg = null;
            this.Gd = -1;
            this.Wb = 0;
            this.Ja = !0;
            this.cK =
                b.av;
            0 < c.Hc.length && (this.Lg = c.Hc[0].uj);
            var d = this.Gd; - 1 == d && 0 < c.Hc.length && (d = c.Hc[0].Hq);
            this.font = this.b.h.Qc.Qh(d);
            this.pb = new pa(this.b.h, this.S, this.T)
        },
        qc: function() {},
        handle: function() {
            this.A.handle();
            this.c.Y && (this.c.Y = !1)
        },
        Ph: function() {
            var a = this.Gd; - 1 == a && (a = this.ka.Rd.Hc[0].Hq);
            return this.b.h.Qc.zv(a)
        },
        wh: function(a, b) {
            this.Gd = this.b.h.Qc.Qu(a);
            this.font = this.b.h.Qc.Qh(this.Gd);
            null != b && (this.S = b.right - b.left, this.T = b.bottom - b.top, this.pb.resize(this.S, this.T));
            this.c.Y = !0;
            this.Xb()
        },
        yv: function() {
            return this.ct
        },
        ox: function(a) {
            this.ct = a;
            this.Xb()
        },
        cp: function(a, b, c, d, e, f) {
            1 != this.Bb && (this.Bb = !0, this.Ja = e, this.jb = this.b.u.sa[c], this.Qa = d ? this.jb.Ic : this.jb.yb, 0 > f ? this.Qa.Tf(this) : this.Qa.Nu(this, f))
        },
        Vj: function() {
            if (0 == this.Bb) return -1;
            this.Bb = !1;
            var a = this.Qa.Wa(this);
            this.Qa.removeChild(this);
            return a
        },
        Wa: function() {
            return this.Bb ? this.Qa.Wa(this) : -1
        },
        vn: function() {
            return this.Bb ? this.Qa.children.length : -1
        },
        dc: function(a) {
            this.Bb && this.Qa.dc(this, a)
        },
        qm: function() {
            0 == this.Ja &&
                (this.Ja = !0)
        },
        Gl: function() {
            1 == this.Ja && (this.Ja = !1)
        },
        yx: function(a) {
            -1 > a && (a = -1);
            a >= this.gd && (a = this.gd - 1);
            if (a == this.Wb) return !1;
            this.Wb = a;
            0 <= a && this.fL(this.ka.Rd.Hc[this.Wb].uj);
            this.Xb();
            return 0 != (this.A.aa & D.vi) ? !1 : !0
        },
        fL: function(a) {
            this.Lg = a;
            this.Xb()
        },
        Sj: function() {
            this.vf || this.Xb()
        },
        Xb: function() {
            this.vf = !0;
            var a = this.ka.Rd,
                b = a.Hc[0].xt;
            this.Fa = this.Ea = 0;
            this.rect.left = 0;
            this.rect.top = 0;
            this.rect.right = this.S;
            this.rect.bottom = this.T;
            0 <= this.Wb ? a = a.Hc[this.Wb].uj : (a = this.Lg, null == a && (a =
                ""));
            b &= l.Im | l.Hm | l.Xx | l.Jm | l.It | l.Wk | l.oO;
            a = this.pb.to(a, b, this.rect, this.font, this.ct);
            0 == (b & (l.It | l.Wk)) && (this.T = a)
        },
        Aq: function(a) {
            this.A.qb = D.kg;
            this.A.nb = a
        },
        fc: function(a, b, c) {
            this.Ja && this.vf && this.pb.fc(a, b + this.s - this.b.da + this.jb.x, c + this.o - this.b.fa + this.jb.y, this.A.qb, this.A.nb)
        }
    });
    Xg.prototype = l.extend(new N, {
        ua: function() {},
        qc: function() {},
        handle: function() {
            this.b.pause();
            this.b.Nw = this;
            this.b.u.sa[this.b.u.za - 1].yb.Tf(this);
            this.jV()
        },
        jv: function() {
            this.b.u.sa[this.b.u.za - 1].yb.removeChild(this)
        },
        OX: function() {
            var a;
            a = this.b.h.Yh - this.b.h.li;
            var b = this.b.h.Zh - this.b.h.ni;
            0 == this.fn ? this.b.h.wd[m.og] && (a = this.mH(a, b), 0 != a && (this.fn = a)) : this.b.h.wd[m.og] || (this.mH(a, b) == this.fn ? (this.b.g.bc = this.fn, this.b.g.Ie(this, -5439484), 0 != (this.ka.Rd.Hc[this.fn].xt & Ba.IS) ? this.b.g.Ie(this, -5308412) : this.b.g.Ie(this, -5373948), this.jv(), this.b.Nw = null, this.b.resume(), this.b.sv(this.ea, !0)) : this.fn = 0)
        },
        mH: function(a, b) {
            var c;
            if (null != this.gf)
                for (c = 1; c < this.gf.length; c++)
                    if (a >= this.gf[c].left && a < this.gf[c].right &&
                        b > this.gf[c].top && b < this.gf[c].bottom) return c;
            return 0
        },
        pF: function(a, b, c) {
            var d, e;
            c ? (d = 8421504, e = 16777215) : (e = 8421504, d = 16777215);
            a.Us(b.left, b.top, b.right - b.left, b.bottom - b.top, 0, 1);
            var f = Array(3),
                g;
            for (g = 0; 3 > g; g++) f[g] = new P;
            f[0].x = b.right - 1;
            0 == c && --f[0].x;
            f[0].y = b.top + 1;
            f[1].y = b.top + 1;
            f[1].x = b.left + 1;
            f[2].x = b.left + 1;
            f[2].y = b.bottom;
            0 == c && --f[2].y;
            a.Cd(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
            a.Cd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
            0 == c && --f[0].x;
            f[0].y += 1;
            f[1].x += 1;
            f[1].y += 1;
            f[2].x += 1;
            0 == c && --f[2].y;
            a.Cd(f[0].x,
                f[0].y, f[1].x, f[1].y, d, 1);
            a.Cd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
            0 == c && (f[0].x += 2, f[1].x = b.right - 1, f[1].y = b.bottom - 1, f[2].y = b.bottom - 1, --f[2].x, a.Cd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.Cd(f[1].x, f[1].y, f[2].x, f[2].y, e, 1), --f[0].x, f[0].y += 1, --f[1].x, --f[1].y, f[2].x += 1, --f[2].y, a.Cd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.Cd(f[1].x, f[1].y, f[2].x, f[2].y, e, 1))
        },
        UZ: function(a, b, c) {
            var d = new ja;
            d.OF(this.gf[b]);
            this.pF(a, this.gf[b], c);
            d.left += 2;
            d.top += 2;
            d.right -= 4;
            d.bottom -= 4;
            c && (d.left += 2, d.top += 2);
            this.Me[b].fc(a,
                (d.left + d.right) / 2 - this.Me[b].width / 2, (d.top + d.bottom) / 2 - this.Me[b].height / 2, 0, 0)
        },
        jV: function() {
            this.lw = new pa(this.b.h, 8, 8);
            var a = this.ka.Rd,
                b = this.b,
                c = a.Hc[1],
                d = c.EC,
                e = 0 != (c.xt & Ba.GE),
                f = b.h.Qc.Qh(c.Hq);
            this.Ix = Math.floor(3 * this.lw.measureText("X", f) / 2);
            this.Hl = 4;
            this.Ze = 64;
            var g;
            for (g = 1; g < a.Hc.length; g++) c = a.Hc[g], 0 < c.uj.length && (c = this.lw.measureText(c.uj, f), this.Ze = Math.max(this.Ze, c + 2 * this.Ix + 4), this.Hl = Math.max(this.Hl, Math.floor(3 * f.yg() / 2)));
            this.Fv = Math.max(Math.floor(this.Hl / 4), 2);
            this.Ze +=
                2 * this.Ix + 4;
            var h = new ja;
            for (g = 1; g < a.Hc.length; g++) c = a.Hc[g], this.Me[g] = new pa(b.h, this.Ze, this.Hl), h.right = this.Ze, h.bottom = this.Hl, this.Me[g].kw(c.uj, l.Hm | l.Wk, h, d, f, e ? 1 : 0, 16777215);
            a = a.Hc[0];
            e = 0 != (a.xt & Ba.GE);
            f = b.h.Qc.Qh(a.Hq);
            g = Math.floor(3 * this.lw.measureText("X", f) / 2);
            c = this.lw.measureText(a.uj, f);
            this.Zr = Math.floor(3 * f.yg() / 2);
            this.Ze = Math.max(this.Ze, c + 2 * g + 4);
            this.Ze > b.h.Ta ? this.Ze = b.h.Ta : this.Ze > b.u.ae && (this.Ze = b.u.ae);
            h.right = this.Ze;
            h.bottom = this.Zr;
            this.Me[0] = new pa(b.h, this.Ze, this.Zr);
            this.Me[0].kw(a.uj, l.Hm | l.Wk, h, d, f, e ? 1 : 0, 16777215)
        },
        fc: function(a) {
            var b = this.ka.Rd,
                c = this.b,
                d = this.s - c.da,
                c = this.o - c.fa,
                e = new ja;
            e.left = d;
            e.top = c;
            var f = this.Zr + 1 + (this.Hl + this.Fv) * (b.Hc.length - 1) + this.Fv + 4;
            e.right = d + this.Ze;
            e.bottom = c + f;
            a.Dd(e.left, e.top, e.right - e.left, e.bottom - e.top, 12632256, 0, 0);
            this.pF(a, e, !1);
            e.left += 2;
            e.top += 2;
            e.right -= 2;
            e.bottom = e.top + this.Zr;
            this.Me[0].fc(a, (e.left + e.right) / 2 - this.Me[0].width / 2, (e.top + e.bottom) / 2 - this.Me[0].height / 2, 0, 0);
            e.top = e.bottom;
            a.Cd(e.left, e.top, e.right,
                e.bottom, 8421504, 1, 0, 0);
            e.top += 1;
            e.bottom += 1;
            a.Cd(e.left, e.top, e.right, e.bottom, 16777215, 1, 0, 0);
            if (null == this.gf)
                for (this.gf = Array(b.Hc.length), i = 1; i < b.Hc.length; i++) this.gf[i] = new ja, this.gf[i].left = d + 2 + this.Ix, this.gf[i].right = d + this.Ze - 2 - this.Ix, this.gf[i].top = c + 2 + this.Zr + 1 + this.Fv + (this.Hl + this.Fv) * (i - 1), this.gf[i].bottom = this.gf[i].top + this.Hl;
            for (i = 1; i < b.Hc.length; i++) this.UZ(a, i, this.fn == i)
        }
    });
    Yg.prototype = l.extend(new N, {
        ua: function(a, b) {
            this.ext.ua(this);
            var c = this.b.h.file.Jh(a.dJ);
            this.JB =
                a.fJ;
            this.ext.Kh(c, b, a.gJ)
        },
        Ry: function(a, b, c, d, e) {
            this.jb = this.b.u.sa[d];
            this.Ja = e;
            1 != this.Bb && (this.Bb = !0, this.Qa = this.jb.yb, this.Qa.Tf(this))
        },
        cp: function(a, b, c, d, e) {
            this.jb = this.b.u.sa[c];
            this.Ja = e;
            1 != this.Bb && (this.Bb = !0, this.Qa = d ? this.jb.Ic : this.jb.yb, this.Qa.Tf(this))
        },
        Vj: function() {
            if (0 == this.Bb) return -1;
            this.Bb = !1;
            var a = this.Qa.Wa(this);
            this.Qa.removeChild(this);
            return a
        },
        handle: function() {
            0 != (this.Oa & 512) ? this.A.handle() : 16 == (this.Oa & 48) || 48 == (this.Oa & 48) ? this.D.move() : 32 == (this.Oa & 48) &&
                this.ga.sg();
            var a = 0;
            0 == this.gB && (a = this.ext.Zj());
            0 != (a & va.CE) && (this.gB = !0);
            null != this.c && this.c.Y && (this.c.Y = !1)
        },
        nl: function() {
            this.ext.nl()
        },
        UF: function() {},
        fc: function(a, b, c) {
            this.Ja && this.ext.tG(a, b, c)
        },
        qc: function(a) {
            this.ext.kv(a)
        },
        rX: function() {
            return null
        },
        Ug: function(a, b) {
            return this.ext.Ug(a, b)
        },
        action: function(a, b) {
            this.ext.action(a, b)
        },
        Xg: function(a) {
            return this.ext.Xg(a)
        },
        Aq: function(a) {
            this.A.qb = D.kg;
            this.A.nb = a
        },
        S6: function() {},
        qm: function() {
            this.Ja = !0
        },
        Gl: function() {
            this.Ja = !1
        },
        Wa: function() {
            return this.Qa.Wa(this)
        },
        vn: function() {
            return this.Qa.children.length
        },
        dc: function(a) {
            a >= this.Qa.children.length && (a = this.Qa.children.length);
            0 > a && (a = 0);
            this.Qa.dc(this, a)
        },
        Bw: function() {
            this.ext.Bw()
        },
        rr: function() {
            this.ext.rr()
        },
        up: function() {
            this.ext.up()
        },
        EA: function(a) {
            this.b.h.qa.EA(a)
        },
        P5: function(a) {
            return this.b.h.qa.Ub(a)
        },
        G5: function() {
            return this.b.h
        },
        W5: function() {
            return this.s
        },
        X5: function() {
            return this.o
        },
        V5: function() {
            return this.S
        },
        yg: function() {
            return this.T
        },
        uo: function(a) {
            null !=
                this.D ? this.D.ja.Ac(a) : (this.s = a, null != this.c && (this.c.Y = !0, this.c.Cb = !0))
        },
        vo: function(a) {
            null != this.D ? this.D.ja.Bc(a) : (this.o = a, null != this.c && (this.c.Y = !0, this.c.Cb = !0))
        },
        pm: function(a) {
            this.S = a
        },
        nm: function(a) {
            this.T = a
        },
        so: function(a, b) {
            this.S = a;
            this.T = b
        },
        I6: function() {
            this.gB = !1
        },
        Ge: function(a, b) {
            if (0 == this.b.ei) {
                var c = this.b.g.bc;
                this.b.g.bc = b;
                a = -(a + S.lg + 1) << 16;
                a |= this.Pa & 65535;
                this.b.g.Ie(this, a);
                this.b.g.bc = c
            }
        },
        Wp: function(a, b) {
            0 == this.b.ei && (a = -(a + S.lg + 1) << 16, a |= this.Pa & 65535, this.b.g.AZ(1,
                a, b, this, this.Yb))
        },
        pause: function() {
            this.b.pause()
        },
        resume: function() {
            this.b.resume()
        },
        J6: function() {},
        o5: function() {
            this.b.Mh(this.ea)
        },
        setPosition: function(a, b) {
            null != this.D ? (this.D.ja.Ac(a), this.D.ja.Bc(b)) : (this.s = a, this.o = b, null != this.c && (this.c.Y = !0, this.c.Cb = !0))
        },
        K5: function() {
            return this.JB
        },
        R6: function(a) {
            this.JB = a
        },
        Mu: function(a, b, c, d, e) {
            this.b.Mu(a, b, c, e, d, !0)
        },
        I5: function() {
            return this.b.Jc
        },
        ha: function() {
            this.b.Ca++;
            return this.b.getExpression()
        },
        J5: function() {
            return this.b.g.bc
        },
        qF: function(a,
            b, c) {
            return 0 != (a.Oa & E.Dh) && a.c.zc == aa.Ch ? a.D.ja.qF(b, c) : 0
        },
        He: function() {
            this.iB = this.ys = 0;
            return this.le()
        },
        le: function() {
            if (this.iB < this.b.Pb) {
                for (; null == this.b.H[this.ys];) this.ys++;
                var a = this.b.H[this.ys];
                this.iB++;
                this.ys++;
                return a
            }
            return null
        },
        R5: function(a) {
            var b = 0,
                c;
            for (c = 0; c < this.b.Pb; c++) {
                for (; null == this.b.H[b];) b++;
                var d = this.b.H[b];
                b++;
                if ((d.Fb << 16 | d.ea & 65535) == a) return d
            }
            return null
        },
        QG: function(a) {
            return this.b.QG(a)
        },
        RG: function(a) {
            return this.b.RG(a)
        },
        nZ: function(a) {
            return hoAdRunHeader.h.nZ(a)
        },
        c5: function() {}
    });
    Pa.zu = 22;
    Pa.create = function(a) {
        var b = a.file.ma,
            c = null,
            d = a.file.v(),
            e = a.file.v();
        switch (e) {
            case 1:
                c = new zi(a);
                break;
            case 2:
                c = new Bi(a);
                break;
            case 3:
                c = new sa(a);
                break;
            case 4:
                c = new sa(a);
                break;
            case 5:
                c = new Ua(a);
                break;
            case 6:
                c = new Va(a);
                break;
            case 7:
                c = new Ua(a);
                break;
            case 9:
                c = new Rb(a);
                break;
            case 10:
                c = new sa(a);
                break;
            case 11:
                c = new sa(a);
                break;
            case 12:
                c = new sa(a);
                break;
            case 13:
                c = new wi(a);
                break;
            case 14:
                c = new $g(a);
                break;
            case 15:
                c = new Ca(a);
                break;
            case 16:
                c = new ah(a);
                break;
            case 17:
                c = new sa(a);
                break;
            case 18:
                c = new bh(a);
                break;
            case 19:
                c = new ch(a);
                break;
            case 21:
                c = new Rb(a);
                break;
            case 22:
                c = new Ca(a);
                break;
            case 23:
                c = new Ca(a);
                break;
            case 24:
                c = new vi(a);
                break;
            case 25:
                c = new Ua(a);
                break;
            case 26:
                c = new sa(a);
                break;
            case 27:
                c = new Ca(a);
                break;
            case 28:
                c = new Ca(a);
                break;
            case 29:
                c = new Ua(a);
                break;
            case 31:
                c = new sa(a);
                break;
            case 32:
                c = new sa(a);
                break;
            case 34:
                c = new Ua(a);
                break;
            case 35:
                c = new Va(a);
                break;
            case 36:
                c = new Va(a);
                break;
            case 37:
                c = new sa(a);
                break;
            case 38:
                c = new ma(a);
                break;
            case 39:
                c = new yi(a);
                break;
            case 40:
                c =
                    new tb(a);
                break;
            case 41:
                c = new tb(a);
                break;
            case 42:
                c = new ui(a);
                break;
            case 43:
                c = new sa(a);
                break;
            case 44:
                c = new $g(a);
                break;
            case 45:
                c = new Ca(a);
                break;
            case 46:
                c = new Ca(a);
                break;
            case 47:
                c = new Zg(a);
                break;
            case 48:
                c = new Ua(a);
                break;
            case 49:
                c = new sa(a);
                break;
            case 50:
                c = new sa(a);
                break;
            case 51:
                c = new Zg(a);
                break;
            case 52:
                c = new Ca(a);
                break;
            case 53:
                c = new Ca(a);
                break;
            case 54:
                c = new Ca(a);
                break;
            case 55:
                c = new xi(a);
                break;
            case 56:
                c = new Ua(a);
                break;
            case 57:
                c = new sa(a);
                break;
            case 58:
                c = new sa(a);
                break;
            case 59:
                c = new Ca(a);
                break;
            case 60:
                c = new sa(a);
                break;
            case 61:
                c = new sa(a);
                break;
            case 62:
                c = new Ca(a);
                break;
            case 63:
                c = new tb(a);
                break;
            case 64:
                c = new tb(a);
                break;
            case 67:
                c = new sa(a);
                break;
            case 68:
                c = new dh(a);
                break;
            case 69:
                c = new Ai(a);
                break;
            case 72:
                c = new ch(a)
        }
        c.code = e;
        a.file.seek(b + d);
        return c
    };
    ma.sQ = 1;
    ma.d2 = 2;
    ma.Xk = 4;
    ma.Dj = 8;
    ma.e2 = 16;
    Aa.XN = 1;
    Aa.WN = 2;
    Aa.YN = 4;
    Aa.yD = 8;
    Aa.prototype = {
        Jk: function(a, b, c) {
            c.Dp = -1;
            if (-1 == this.Fs) {
                0 != b && (c.dir = -1, 0 == (this.Wn & Aa.yD) && (c.dir = a.Dv(this.Dw)));
                c.x = this.Gw;
                c.y = this.Hw;
                var d = this.GB;
                d > a.u.za -
                    1 && (d = a.u.za - 1);
                c.Dp = d;
                c.Yy = !1
            } else {
                a.g.gq = !1;
                d = a.g.Cv(this.Gs);
                c.Yy = a.g.Ed;
                if (null == d) return !1;
                c.x = d.s;
                c.y = d.o;
                c.Dp = d.Ka;
                if (0 != (this.Wn & Aa.WN) && 0 != (d.Oa & E.dl) && 0 <= d.c.Ma) {
                    var e;
                    e = d.c.Ua;
                    var f = a.Ej(d);
                    null != f && (e = f.un(), e == na.Ox && (e = d.c.Ua));
                    e = a.h.qa.Ki(d.c.Ma, e, d.c.zb, d.c.Ab);
                    c.x += e.ki - e.eb;
                    c.y += e.mi - e.Za
                }
                0 != (this.Wn & Aa.XN) ? (e = this.FB + d.b.mc(d) & 31, f = T.uX(this.Ew, e), c.x += T.tX(this.Ew, e), c.y += f) : (c.x += this.Gw, c.y += this.Hw);
                0 != (b & 1) && (c.dir = 0 != (this.Wn & Aa.yD) ? -1 : 0 != (this.Wn & Aa.YN) ? d.b.mc(d) : a.Dv(this.Dw))
            }
            return 0 !=
                (b & 2) && (c.x < a.lq || c.x > a.jq || c.y < a.pq || c.y > a.nq) ? !1 : !0
        }
    };
    ah.prototype = l.extend(new Aa, {});
    Rb.prototype = l.extend(new Aa, {});
    bh.prototype = l.extend(new Aa, {});
    dh.prototype = {
        evaluate: function(a) {
            if (null == a.R || 0 != this.vv && (a.R.nc & this.vv) != this.VG) return !1;
            for (var b = 0; b < this.values.length; b++) {
                var c = this.values[b],
                    d;
                d = c.global ? a.b.h.Ji(c.index) : a.R.zn(c.index);
                if (!k.Fi(d, c.HC, c.rJ)) return !1
            }
            return !0
        },
        aW: function(a) {
            if (null == a.R || 0 != this.vv && (a.R.nc & this.vv) != this.VG) return !1;
            for (var b = 0; b < this.values.length; b++) {
                var c =
                    this.values[b];
                if (!k.Fi(a.R.zn(c.index), c.HC, c.rJ)) return !1
            }
            return !0
        }
    };
    ub.prototype = {
        Dd: function() {},
        $B: function() {},
        ZB: function() {},
        SJ: function() {},
        Hg: function() {},
        fm: function() {},
        TJ: function() {},
        UJ: function() {},
        Cd: function() {},
        Us: function() {},
        Yw: function() {},
        ZZ: function() {},
        FJ: function(a, b, c, d) {
            var e = this.cn[this.cn.length - 1];
            e && (a < e.x && (a = e.x), b < e.y && (b = e.y), a + c > e.x + e.Fx && (c = e.x + e.Fx - a), b + d > e.y + e.Vr && (d = e.y + e.Vr - b));
            a = {
                x: a,
                y: b,
                Fx: c,
                Vr: d
            };
            this.cn.push(a);
            return a
        },
        yJ: function() {
            this.cn.pop()
        }
    };
    Wa.prototype = l.extend(new ub, {
        aC: function(a) {
            this.wB = this.tC = a;
            this.wb.imageSmoothingEnabled = a;
            this.wb.webkitImageSmoothingEnabled = a;
            this.wb.mozImageSmoothingEnabled = a;
            this.wb.msImageSmoothingEnabled = a;
            this.vB = -1;
            this.Mg(0, 0)
        },
        nt: function(a, b) {
            this.wb.scale(a, b);
            this.At = a;
            this.Ct = b;
            this.ln = this.kn = 0;
            1 < this.At ? this.kn = 1 : 0 < this.At && 1 > this.At && (this.kn = 1 / this.At);
            1 < this.Ct && (this.ln = 1);
            0 < this.Ct && 1 > this.Ct && (this.ln = 1 / this.Ct)
        },
        $u: function(a, b, c, d) {
            this.wb.clearRect(a, b, c, d)
        },
        Dd: function(a, b, c, d, e, f,
            g) {
            var h = this.wb;
            this.Mg(f, g);
            h.fillStyle = l.ke(e);
            h.fillRect(a, b, c, d)
        },
        $B: function(a, b, c, d, e, f, g) {
            var h = this.wb;
            this.Mg(f, g);
            h.fillStyle = l.ke(e);
            l.ev(h, a, b, c, d);
            h.fill()
        },
        ZB: function(a, b, c, d, e, f, g, h, p) {
            if (e == f) return this.Dd(a, b, c, d, e, h, p);
            var k = this.wb;
            this.Mg(h, p);
            this.LF(a, b, c, d, g, e, f);
            k.fillRect(a, b, c, d)
        },
        SJ: function(a, b, c, d, e, f, g, h, p) {
            if (e == f) return this.$B(a, b, c, d, e, h, p);
            var k = this.wb;
            this.Mg(h, p);
            this.LF(a, b, c, d, g, e, f);
            l.ev(k, a, b, c, d);
            this.wb.fill()
        },
        Hg: function(a, b, c, d, e, f, g, h) {
            var p = this.wb,
                k = b - a.eb,
                l = c - a.Za;
            this.Mg(g, h);
            0 == d && 1 == e && 1 == f ? 0 == a.$b ? null != a.hc && p.drawImage(a.hc, k, l) : p.drawImage(a.app.qa.wc[a.$b], a.ne, a.oe, a.width, a.height, k, l, a.width, a.height) : (p.save(), p.translate(b, c), 0 != d && p.rotate(.0174532925 * -d), p.scale(Math.max(.001, e), Math.max(.001, f)), p.translate(-a.eb, -a.Za), 0 == a.$b ? null != a.hc && 0 != a.width && 0 != a.height && p.drawImage(a.hc, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : p.drawImage(a.app.qa.wc[a.$b], a.ne, a.oe, a.width, a.height, 0, 0, a.width, a.height), p.restore())
        },
        K6: function(a,
            b, c, d, e, f, g, h) {
            var p = this.wb,
                k = b - a.eb,
                l = c - a.Za;
            this.Mg(g, h);
            0 == d && 1 == e && 1 == f ? 0 == a.$b ? null != a.hc && p.drawImage(a.hc, 0, 0, a.width, a.height, k, l, a.width + this.kn, a.height + this.ln) : p.drawImage(a.app.qa.wc[a.$b], a.ne, a.oe, a.width, a.height, k, l, a.width + this.kn, a.height + this.ln) : (p.save(), p.translate(b, c), 0 != d && p.rotate(.0174532925 * -d), p.scale(Math.max(.001, e), Math.max(.001, f)), p.translate(-a.eb, -a.Za), 0 == a.$b ? null != a.hc && p.drawImage(a.hc, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : p.drawImage(a.app.qa.wc[a.$b],
                a.ne, a.oe, a.width, a.height, 0, 0, a.width, a.height), p.restore())
        },
        fm: function(a, b, c, d, e, f, g) {
            this.Mg(f, g);
            this.wb.drawImage(a, b, c, d, e)
        },
        TJ: function(a, b, c, d, e, f, g) {
            var h = this.wb;
            this.Mg(f, g);
            h.save();
            h.beginPath();
            h.moveTo(b, c);
            h.lineTo(b + d, c);
            h.lineTo(b + d, c + e);
            h.lineTo(b, c + e);
            h.lineTo(b, c);
            h.clip();
            f = a.width;
            g = a.height;
            d = Math.floor(d / f) + 1;
            e = Math.floor(e / g) + 1;
            var p, k;
            for (p = 0; p < d; p++)
                for (k = 0; k < e; k++) 0 == a.$b ? null != a.hc && h.drawImage(a.hc, 0, 0, a.width, a.height, b + p * f, c + k * g, a.width + this.kn, a.height + this.ln) :
                    h.drawImage(a.app.qa.wc[a.$b], a.ne, a.oe, a.width, a.height, b + p * f, c + k * g, a.width + this.kn, a.height + this.ln);
            h.restore()
        },
        UJ: function(a, b, c, d, e, f, g) {
            if (!(a instanceof oa)) throw Error("renderPatternEllipse: bad image type: " + typeof a);
            var h = this.wb;
            this.Mg(f, g);
            0 == a.$b ? null != a.hc && (h.fillStyle = h.createPattern(a.hc, "repeat")) : (a.pattern || (a.pattern = document.createElement("canvas"), a.pattern.width = a.width, a.pattern.height = a.height, h = a.pattern.getContext("2d"), h.drawImage(a.app.qa.wc[a.$b], a.ne, a.oe, a.width,
                a.height, 0, 0, a.width, a.height)), h.fillStyle = h.createPattern(a.pattern, "repeat"));
            l.ev(h, b, c, d, e);
            this.wb.fill()
        },
        Cd: function(a, b, c, d, e, f, g, h) {
            var p = this.wb;
            this.Mg(g, h);
            p.strokeStyle = l.ke(e);
            p.lineCap = "round";
            p.lineWidth = f;
            p.beginPath();
            p.moveTo(a, b);
            p.lineTo(c, d);
            p.closePath();
            p.stroke()
        },
        ZZ: function(a, b, c, d, e, f) {
            var g = this.wb;
            e = l.ke(e);
            1 == f ? (g.beginPath(), g.moveTo(a, b), g.lineTo(a + c, b), g.lineTo(a + c / 2, b - d)) : (g.beginPath(), g.moveTo(a, b), g.lineTo(a, b - c), g.lineTo(a - d, b - c / 2));
            g.closePath();
            g.lineWidth =
                1;
            g.strokeStyle = e;
            g.stroke();
            g.fillStyle = e;
            g.fill()
        },
        Us: function(a, b, c, d, e, f, g, h) {
            var p = this.wb;
            this.Mg(g, h);
            p.strokeStyle = l.ke(e);
            p.lineWidth = f;
            p.strokeRect(a, b, c, d)
        },
        Yw: function(a, b, c, d, e, f, g, h) {
            var p = this.wb;
            this.Mg(g, h);
            p.lineWidth = e;
            p.strokeStyle = l.ke(f);
            l.ev(p, a, b, c, d);
            this.wb.stroke()
        },
        clip: function(a, b, c, d) {
            var e = this.wb;
            e.save();
            e.beginPath();
            e.rect(a, b, c, d);
            e.clip()
        },
        Z_: function() {
            this.wb.restore()
        },
        FJ: function() {
            var a = this.wb,
                b = ub.prototype.FJ.apply(this, arguments);
            a.beginPath();
            a.rect(b.x,
                b.y, b.Fx, b.Vr);
            a.clip()
        },
        yJ: function() {
            var a = this.wb;
            ub.prototype.yJ.apply(this, arguments);
            if (0 < this.cn.length) {
                var b = this.cn[this.cn.length - 1];
                a.beginPath();
                a.rect(b.x, b.y, b.Fx, b.Vr);
                a.clip()
            } else a.L6()
        },
        Mg: function(a, b) {
            var c = this.wb;
            if ("undefined" == typeof a) c.globalAlpha = 1, c.en = "source-over";
            else if (a != this.vB || b != this.hZ) {
                this.vB = a;
                this.hZ = b;
                var d = a & D.Lq,
                    e = 0 != (a & D.TC) | this.tC;
                e != this.wB && (this.wB = e, c.imageSmoothingEnabled = e, c.webkitImageSmoothingEnabled = e, c.mozImageSmoothingEnabled = e, c.msImageSmoothingEnabled =
                    e);
                c.globalAlpha = 0 != (a & D.Cm) ? (b >>> 24 & 255) / 255 : d == D.kg ? (128 - b) / 128 : 1;
                switch (d) {
                    case D.RC:
                        c.en = "lighter";
                        break;
                    case D.UC:
                        c.en = "xor";
                        break;
                    default:
                        c.en = "source-over"
                }
            }
        },
        LF: function(a, b, c, d, e, f, g) {
            a = e ? this.wb.createLinearGradient(a, b, a, b + d) : this.wb.createLinearGradient(a, b, a + c, b);
            a.addColorStop(0, l.ke(f));
            a.addColorStop(1, l.ke(g));
            this.wb.fillStyle = a
        }
    });
    Ea.Iu = 1;
    Ea.prototype = {
        load: function(a) {
            var b = a.ma;
            a.wa(4);
            this.eL = a.C();
            this.dL = a.C();
            this.wt = a.C();
            this.vt = a.sc();
            var c = a.C(),
                d = a.C();
            a.seek(b + c);
            this.zr =
                a.cb();
            this.zr = this.zr.substr(0, this.zr.indexOf("."));
            this.gG = b + d
        }
    };
    eh.prototype = {
        qH: function() {
            return null
        }
    };
    w.Xt = 0;
    w.Bu = 1;
    w.FE = 2;
    w.VC = 3;
    w.Tx = 0;
    w.iy = 1;
    w.bD = 2;
    w.EE = 3;
    w.gl = 0;
    w.hl = 1;
    w.Dm = 2;
    w.Em = 3;
    w.aD = 4;
    w.BD = 0;
    w.mO = 1;
    w.Ky = 1;
    w.Ju = 2;
    w.prototype = {
        start: function(a, b, c, d) {
            this.nG = b;
            this.Wj = this.nG.getContext("2d");
            this.xa = c;
            this.F = d;
            this.dw = (new Date).getTime();
            this.B = a.dL;
            0 == this.B && (this.B = 1);
            this.hs = this.dw;
            this.ks = this.dw + this.B;
            this.bb = this.eI = !0
        },
        finish: function() {},
        Mv: function() {
            if (this.eI) {
                var a =
                    new Date;
                return a.getTime() >= this.ks ? !0 : a.getTime() >= this.ks
            }
            return !0
        },
        ud: function() {
            this.hs = (new Date).getTime();
            this.hs > this.ks && (this.hs = this.ks);
            return this.hs - this.dw
        },
        O: function(a, b, c, d, e, f, g) {
            this.fw && (this.Wj.globalCompositeOperation = "source-atop");
            1 == arguments.length ? this.Wj.drawImage(a, 0, 0) : 0 < f && 0 < g && this.Wj.drawImage(a, d, e, f, g, b, c, f, g)
        },
        stretch: function(a, b, c, d, e, f, g, h, p) {
            this.fw && (this.Wj.globalCompositeOperation = "source-atop");
            0 < d && 0 < e && 0 < h && 0 < p && this.Wj.drawImage(a, f, g, h, p, b, c, d, e)
        },
        Mc: function() {},
        end: function() {},
        ua: function() {}
    };
    fh.prototype = {
        P_: function(a, b) {
            var c = a.ka.Sp;
            b && (c = a.ka.zs);
            var d = null,
                e;
            if (0 != (a.Oa & E.dl)) {
                var f = this.app.qa.Ub(a.c.Ma),
                    d = document.createElement("canvas");
                d.width = f.width;
                d.height = f.height;
                e = d.getContext("2d");
                0 == f.$b ? e.drawImage(f.hc, 0, 0) : e.drawImage(this.app.qa.wc[f.$b], f.ne, f.oe, f.width, f.height, 0, 0, f.width, f.height)
            } else 32 <= a.Pa && (d = document.createElement("canvas"), d.width = a.S, d.height = a.T, new StandardRendered(d), d = null);
            if (null == d) return null;
            e = d.width;
            var g = d.height,
                f = document.createElement("canvas");
            f.width = e;
            f.height = g;
            var h = document.createElement("canvas");
            h.width = e;
            h.height = g;
            var p = document.createElement("canvas");
            p.width = e;
            p.height = g;
            b ? (e = h.getContext("2d"), e.drawImage(d, 0, 0), e = f.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.wt & Ea.Iu) && this.NF(p, d, c.vt)) : (e = p.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.wt & Ea.Iu) && this.NF(h, d, c.vt));
            c = this.np(c, f, h, p);
            null != c && (d = 0, 0 != (a.Z & N.Zk) ? (c.fw = !0, d |= w.Ju) : (c.fw = !1, d |= w.Ky), a.yo = f, c.Mc(d));
            return c
        },
        NF: function(a, b, c) {
            a = a.getContext("2d");
            a.drawImage(b, 0, 0);
            var d = b.width;
            b = b.height;
            var e = a.getImageData(0, 0, d, b),
                f, g = (c & 16711680) >> 16,
                h = (c & 65280) >> 8,
                p = c & 255;
            for (f = 0; f < b; f++)
                for (c = 0; c < d; c++) 0 != e.data[4 * (f * d + c) + 3] && (e.data[4 * (f * d + c)] = g, e.data[4 * (f * d + c) + 1] = h, e.data[4 * (f * d + c) + 2] = p);
            a.putImageData(e, 0, 0)
        },
        np: function(a, b, c, d) {
            var e = null;
            "cctrans" == a.zr.toLowerCase() && (e = new ib);
            return null != e ? (e = e.qH(a), this.app.file.seek(a.gG), e.fw = !1, e.ua(a, this.app.file, b, c, d), e) : null
        }
    };
    ib.CH = "BAND SE00 SE10 SE12 DOOR SE03 MOSA SE05 SE06 SCRL SE01 SE07 SE09 SE13 SE08 SE02 ZIGZ SE04 ZOOM SE11 FADE".split(" ");
    ib.prototype = l.extend(new eh, {
        qH: function(a) {
            var b = a.eL;
            a = "" + String.fromCharCode(b & 255);
            b >>= 8;
            a += String.fromCharCode(b & 255);
            b >>= 8;
            a += String.fromCharCode(b & 255);
            a += String.fromCharCode(b >> 8 & 255);
            for (b = 0; b < ib.CH.length && a != ib.CH[b]; b++);
            a = null;
            switch (b) {
                case 0:
                    a = new ih;
                    break;
                case 1:
                    a = new gh;
                    break;
                case 2:
                    a = new hh;
                    break;
                case 3:
                    a = new jh;
                    break;
                case 4:
                    a = new kh;
                    break;
                case 5:
                    a = new mh;
                    break;
                case 6:
                    a = new nh;
                    break;
                case 7:
                    a = new oh;
                    break;
                case 8:
                    a = new ph;
                    break;
                case 9:
                    a = new qh;
                    break;
                case 10:
                    a = new rh;
                    break;
                case 11:
                    a =
                        new sh;
                    break;
                case 12:
                    a = new th;
                    break;
                case 13:
                    a = new uh;
                    break;
                case 14:
                    a = new vh;
                    break;
                case 15:
                    a = new wh;
                    break;
                case 16:
                    a = new xh;
                    break;
                case 17:
                    a = new yh;
                    break;
                case 18:
                    a = new zh;
                    break;
                case 19:
                    a = new Ah;
                    break;
                case 20:
                    a = new lh
            }
            return a
        }
    });
    gh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Tb = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height, this.fI = 8 != this.Tb ? this.Tb : Math.floor(8 * Math.random()));
            var a = this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b,
                    c;
                switch (this.fI) {
                    case 0:
                        b = this.m / 3 * a / this.B;
                        c = this.j;
                        this.O(this.F, 0, 0, this.m / 3 - b, 0, b, c);
                        this.O(this.F, this.m - b, 0, 2 * this.m / 3, 0, b, c);
                        b = this.m / 3;
                        c = this.j * a / this.B;
                        this.O(this.F, b, 0, b, this.j - c, b, c);
                        break;
                    case 1:
                        b = this.m / 3 * a / this.B;
                        c = this.j;
                        this.O(this.F, 0, 0, this.m / 3 - b, 0, b, c);
                        this.O(this.F, this.m - b, 0, 2 * this.m / 3, 0, b, c);
                        b = this.m / 3;
                        c = this.j * a / this.B;
                        this.O(this.F, b, this.j - c, b, 0, b, c);
                        break;
                    case 2:
                        b = this.m / 3 * a / this.B;
                        c = this.j;
                        this.O(this.F, 0, 0, this.m / 3 - b, 0, b, c);
                        this.O(this.F, this.m - b, 0, 2 * this.m / 3, 0, b, c);
                        b = this.m / 3;
                        c = this.j * a / this.B;
                        this.O(this.F, b, 0, b, 0, b, c);
                        break;
                    case 3:
                        b = this.m / 3 * a / this.B;
                        c = this.j;
                        this.O(this.F, 0, 0, this.m / 3 - b, 0, b, c);
                        this.O(this.F, this.m - b, 0, 2 * this.m / 3, 0, b, c);
                        b = this.m / 3;
                        c = this.j * a / this.B;
                        this.O(this.F, b, this.j - c, b, this.j - c, b, c);
                        break;
                    case 4:
                        b = this.m / 3 * a / this.B;
                        c = this.j;
                        this.O(this.F, 0, 0, this.m / 3 - b, 0, b, c);
                        this.O(this.F, this.m - b, 0, 2 * this.m / 3, 0, b, c);
                        b = this.m / 3;
                        c = this.j / 2 * a / this.B;
                        this.O(this.F, b, 0, b, this.j / 2 - c, b, c);
                        this.O(this.F, b, this.j - c, b, this.j / 2, b, c);
                        break;
                    case 5:
                        b = this.m / 3 * a /
                            this.B;
                        c = this.j;
                        this.O(this.F, 0, 0, this.m / 3 - b, 0, b, c);
                        this.O(this.F, this.m - b, 0, 2 * this.m / 3, 0, b, c);
                        b = this.m / 3;
                        c = this.j / 2 * a / this.B;
                        this.O(this.F, b, 0, b, 0, b, c);
                        this.O(this.F, b, this.j - c, b, this.j - c, b, c);
                        break;
                    case 6:
                        b = this.m / 3;
                        c = this.j * a / this.B;
                        this.O(this.F, 0, this.j - c, 0, 0, b, c);
                        this.O(this.F, b, 0, b, this.j - c, b, c);
                        this.O(this.F, 2 * b, this.j - c, 2 * b, 0, b, c);
                        break;
                    case 7:
                        b = this.m / 7;
                        c = this.j * a / this.B;
                        this.O(this.F, 0, this.j - c, 0, 0, b, c);
                        this.O(this.F, b, 0, b, this.j - c, b, c);
                        this.O(this.F, 2 * b, this.j - c, 2 * b, 0, b, c);
                        this.O(this.F,
                            3 * b, 0, 3 * b, this.j - c, b, c);
                        this.O(this.F, 4 * b, this.j - c, 4 * b, 0, b, c);
                        this.O(this.F, 5 * b, 0, 5 * b, this.j - c, b, c);
                        this.O(this.F, 6 * b, this.j - c, 6 * b, 0, 2 * b, c);
                        break;
                    default:
                        this.O(this.F)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    hh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Tb = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height);
            var a = this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b, c;
                this.O(this.F);
                switch (this.Tb) {
                    case 0:
                        b = this.m / 2 * a / this.B;
                        b = this.m /
                            2 - b;
                        c = this.j / 2 * a / this.B;
                        c = this.j / 2 - c;
                        this.stretch(this.xa, 0, 0, b, c, 0, 0, this.m / 2, this.j / 2);
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        c = this.j / 2 - c;
                        this.stretch(this.xa, this.m / 2 + b, 0, this.m / 2 - b, c, this.m / 2, 0, this.m / 2, this.j / 2);
                        b = this.m / 2 * a / this.B;
                        b = this.m / 2 - b;
                        c = this.j / 2 * a / this.B;
                        this.stretch(this.xa, 0, this.j / 2 + c, b, this.j / 2 - c, 0, this.j / 2, this.m / 2, this.j / 2);
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        this.stretch(this.xa, this.m / 2 + b, this.j / 2 + c, this.m / 2 - b, this.j / 2 - c, this.m / 2, this.j / 2, this.m / 2, this.j / 2);
                        break;
                    case 1:
                        b =
                            this.m * a / this.B;
                        b = this.m - b;
                        c = this.j * a / this.B;
                        c = this.j - c;
                        this.O(this.xa, 0, 0, this.m - b, this.j - c, b, c);
                        break;
                    case 2:
                        b = this.m * a / this.B;
                        c = this.j * a / this.B;
                        c = this.j - c;
                        this.O(this.xa, b, 0, 0, this.j - c, this.m - b, c);
                        break;
                    case 3:
                        b = this.m * a / this.B;
                        b = this.m - b;
                        c = this.j * a / this.B;
                        this.O(this.xa, 0, c, this.m - b, 0, b, this.j - c);
                        break;
                    case 4:
                        b = this.m * a / this.B;
                        c = this.j * a / this.B;
                        this.O(this.xa, b, c, 0, 0, this.m - b, this.j - c);
                        break;
                    case 5:
                        b = this.m / 2 * a / this.B;
                        b = this.m / 2 - b;
                        c = this.j / 2 * a / this.B;
                        c = this.j / 2 - c;
                        this.O(this.xa, b - this.m / 2, c - this.j /
                            2, 0, 0, this.m / 2, this.j / 2);
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        c = this.j / 2 - c;
                        this.O(this.xa, this.m / 2 + b, c - this.j / 2, this.m / 2, 0, this.m / 2, this.j / 2);
                        b = this.m / 2 * a / this.B;
                        b = this.m / 2 - b;
                        c = this.j / 2 * a / this.B;
                        this.O(this.xa, b - this.m / 2, this.j / 2 + c, 0, this.j / 2, this.m / 2, this.j / 2);
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        this.O(this.xa, this.m / 2 + b, this.j / 2 + c, this.m / 2, this.j / 2, this.m / 2, this.j / 2);
                        break;
                    case 6:
                        c = this.j / 2 * a / this.B;
                        c = this.j / 2 - c;
                        this.O(this.xa, 0, c - this.j / 2, 0, 0, this.m, this.j / 2);
                        this.O(this.xa, 0, this.j - c, 0,
                            this.j / 2, this.m, this.j / 2);
                        break;
                    case 7:
                        b = this.m / 2 * a / this.B, b = this.m / 2 - b, this.O(this.xa, b - this.m / 2, 0, 0, 0, this.m / 2, this.j), this.O(this.xa, this.m - b, 0, this.m / 2, 0, this.m / 2, this.j)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    ih.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Hh = b.v();
            this.ez = b.v();
            this.start(a, c, d, e)
        },
        Mc: function() {
            var a = this.xa.width,
                b = this.xa.height,
                c;
            if (this.bb) {
                0 == this.Hh && (this.Hh = 1);
                switch (this.ez) {
                    case w.Xt:
                    case w.Bu:
                        this.xd = (a + this.Hh - 1) / this.Hh;
                        0 == this.xd && (this.xd = 1, this.Hh =
                            a);
                        break;
                    default:
                        this.xd = (b + this.Hh - 1) / this.Hh, 0 == this.xd && (this.xd = 1, this.Hh = b)
                }
                this.rc = 0;
                this.bb = !1
            }
            if (0 >= this.Hh || 0 >= this.xd || 0 == this.B) this.O(this.F);
            else {
                var d = this.xd * this.ud() / this.B;
                if (d > this.rc) {
                    var e = 0,
                        f = 0,
                        g = 0,
                        h = 0;
                    for (c = 0; c < this.Hh; c++) {
                        switch (this.ez) {
                            case w.Xt:
                                e = this.rc + c * this.xd;
                                f = 0;
                                g = d - this.rc;
                                h = b;
                                break;
                            case w.Bu:
                                e = a - (this.rc + c * this.xd) - (d - this.rc);
                                f = 0;
                                g = d - this.rc;
                                h = b;
                                break;
                            case w.FE:
                                e = 0;
                                f = this.rc + c * this.xd;
                                g = a;
                                h = d - this.rc;
                                break;
                            case w.VC:
                                e = 0, f = b - (this.rc + c * this.xd) - (d - this.rc), g = a,
                                    h = d - this.rc
                        }
                        this.O(this.F, e, f, e, f, g, h)
                    }
                }
                this.rc = d
            }
            return this.WY
        },
        end: function() {
            this.finish()
        }
    });
    jh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Kb = b.C();
            this.ov = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height);
            var a = this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b, c, d, e, f, g, h, p, k, l;
                k = this.m / this.Kb;
                l = this.j / this.ov;
                d = this.m / this.Kb;
                e = this.j / this.ov;
                for (f = 0; f < this.Kb; f++)
                    for (g = 0; g < this.ov; g++) b = f * k, c = g * l, h = d * a / this.B, p = e * a / this.B, this.stretch(this.F,
                        b + (d - h) / 2, c + (e - p) / 2, h, p, b + (d - h) / 2, c + (e - p) / 2, h, p)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    kh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Ol = b.v();
            this.start(a, c, d, e)
        },
        Mc: function() {
            if (this.bb) {
                switch (this.Ol) {
                    case w.Tx:
                    case w.iy:
                        this.xd = this.xa.width / 2;
                        break;
                    default:
                        this.xd = this.xa.height / 2
                }
                this.rc = 0;
                this.bb = !1
            }
            if (0 == this.xd) this.O(this.F);
            else {
                var a = 0,
                    b = 0,
                    c = 0,
                    d = 0,
                    e = this.xd * this.ud() / this.B;
                if (e > this.rc) {
                    switch (this.Ol) {
                        case w.Tx:
                            a = this.xa.width / 2 - e;
                            b = 0;
                            c = e - this.rc;
                            d = this.F.height;
                            break;
                        case w.iy:
                            a = this.rc;
                            b = 0;
                            c = e - this.rc;
                            d = this.F.height;
                            break;
                        case w.bD:
                            a = 0;
                            b = this.xa.height / 2 - e;
                            c = this.F.width;
                            d = e - this.rc;
                            break;
                        case w.EE:
                            a = 0, b = this.rc, c = this.F.width, d = e - this.rc
                    }
                    this.O(this.F, a, b, a, b, c, d);
                    switch (this.Ol) {
                        case w.Tx:
                            a = this.xa.width / 2 + this.rc;
                            break;
                        case w.iy:
                            a = this.xa.width - e;
                            break;
                        case w.bD:
                            b = this.xa.height / 2 + this.rc;
                            break;
                        case w.EE:
                            b = this.xa.height - e
                    }
                    this.O(this.F, a, b, a, b, c, d)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    lh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.start(a,
                c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1);
            var a;
            this.Wj.globalAlpha = 1;
            this.O(this.xa);
            a = this.ud() / this.B;
            this.Wj.globalAlpha = a;
            this.O(this.F);
            return null
        },
        end: function() {
            this.Wj.globalAlpha = 1;
            this.finish()
        }
    });
    mh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Kb = b.C();
            this.Tb = b.C();
            this.Br = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height);
            var a = this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b, c, d, e, f;
                b = 0;
                var g;
                if (0 == this.Tb)
                    for (g = this.j /
                        this.Kb, f = 0; f < this.Kb; f++) 0 == b ? (b = 0, c = f * g, d = this.m * a / this.B, e = f == this.Kb - 1 ? this.j : g + 1, 0 == this.Br ? this.O(this.F, b, c, b, c, d, e) : this.O(this.F, b, c, this.m - d, c, d, e), b = 1) : (c = f * g, d = this.m * a / this.B, b = this.m - d, e = f == this.Kb - 1 ? this.j : g + 1, 0 == this.Br ? this.O(this.F, b, c, b, c, d, e) : this.O(this.F, b, c, 0, c, d, e), b = 0);
                else
                    for (g = this.m / this.Kb, f = 0; f < this.Kb; f++) 0 == b ? (b = f * g, c = 0, e = this.j * a / this.B, d = f == this.Kb - 1 ? this.m : g + 1, 0 == this.Br ? this.O(this.F, b, c, b, c, d, e) : this.O(this.F, b, c, b, this.j - e, d, e), b = 1) : (b = f * g, e = this.j * a / this.B,
                        c = this.j - e, d = f == this.Kb - 1 ? this.m : g + 1, 0 == this.Br ? this.O(this.F, b, c, b, c, d, e) : this.O(this.F, b, c, b, 0, d, e), b = 0)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    nh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.QA = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            if (this.bb) {
                var a = this.xa.width,
                    b = this.xa.height;
                this.X = Math.floor((a * this.QA / 100 + b * this.QA / 100) / 2);
                0 == this.X && (this.X = 1);
                this.Dg = (a + this.X - 1) / this.X;
                this.Vi = (b + this.X - 1) / this.X;
                this.Jn = this.Dg * this.Vi;
                a = Math.floor((this.Jn + 7) / 8 + 2);
                this.Hn = 0;
                this.Xf =
                    Array(a);
                for (b = 0; b < a; b++) this.Xf[b] = 0;
                this.bb = !1
            }
            if (null == this.Xf || 2 > this.Dg || 2 > this.Vi || 0 == this.B) this.O(this.F);
            else {
                var c, d, b = a = 0;
                c = Math.floor(this.Jn * this.ud() / this.B);
                var e = c - this.Hn;
                if (0 != e)
                    for (this.Hn = c, d = 0; d < e; d++) {
                        for (c = 0; 1 > c; c++) {
                            var a = Math.floor(this.Dg * Math.random()),
                                b = Math.floor(this.Vi * Math.random()),
                                f, g;
                            f = b * this.Dg + a;
                            g = Math.floor(f / 8);
                            f = 1 << (f & 7);
                            if (0 == (this.Xf[g] & f)) {
                                this.Xf[g] |= f;
                                break
                            }
                            var h = g,
                                p = (this.Jn + 7) / 8,
                                k, l = !1;
                            for (k = g; k < p; k++, h++)
                                if (-1 != this.Xf[h]) {
                                    b = Math.floor(8 * k / this.Dg);
                                    a = Math.floor(8 * k % this.Dg);
                                    for (f = 1; 0 != f; f <<= 1) {
                                        if (0 == (this.Xf[h] & f)) {
                                            this.Xf[h] |= f;
                                            l = !0;
                                            break
                                        }
                                        if (++a >= this.Dg && (a = 0, ++b >= this.Vi)) break
                                    }
                                    if (l) break
                                } if (l) break;
                            for (k = h = 0; k < g; k++, h++) {
                                if (255 != this.Xf[h]) {
                                    b = Math.floor(8 * k / m_nbBlockPerLine);
                                    a = Math.floor(8 * k % m_nbBlockPerLine);
                                    for (f = 1; 0 != f; f <<= 1) {
                                        if (0 == (this.Xf[h] & f)) {
                                            this.Xf[h] |= f;
                                            l = !0;
                                            break
                                        }
                                        if (++a >= this.Dg && (a = 0, ++b >= this.Vi)) break
                                    }
                                    if (l) break
                                }
                                if (l) break;
                                l = !1
                            }
                        }
                        1 > c && this.O(this.F, Math.floor(a * this.X), Math.floor(b * this.X), Math.floor(a * this.X), Math.floor(b *
                            this.X), this.X, this.X)
                    }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    oh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Tb = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height);
            var a = this.ud(),
                b = a / this.B;
            if (1 < b) this.O(this.F);
            else {
                var c, d, e;
                .25 > b ? (d = 2 * this.m * a / this.B, d *= 2, e = this.j / 7, b = this.m / 2 - d / 2, c = this.j / 2 - e / 2, this.O(this.F, b, c, b, c, d, e), d = this.m / 7, e = 2 * this.j * a / this.B, e *= 2, b = this.m / 2 - d / 2, c = this.j / 2 - e / 2) : (b = this.m / 2, d = this.m * a / this.B - b, e = this.j /
                    2, c = 0, this.O(this.F, b, c, b, c, d, e), c = this.j / 2, e = this.j * a / this.B - c, b = d = this.m / 2, this.O(this.F, b, c, b, c, d, e), d = this.m * a / this.B - this.m / 2, b = this.m / 2 - d, c = e = this.j / 2, this.O(this.F, b, c, b, c, d, e), e = this.j * a / this.B - this.j / 2, c = this.j / 2 - e, d = this.m / 2, b = 0);
                this.O(this.F, b, c, b, c, d, e)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    ph.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Tb = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height, this.PA = !1);
            var a = this.ud(),
                b = a / this.B;
            if (1 < b) this.O(this.F);
            else {
                var c, d, e, f;
                if (.5 >= b) switch (this.Tb) {
                    case 0:
                        e = this.m * a / this.B * 2;
                        f = this.j / 2;
                        c = this.m - e;
                        d = this.j / 2;
                        this.O(this.F, 0, 0, c, d, e, f);
                        break;
                    case 1:
                        e = this.m * a / this.B * 2;
                        f = this.j / 2;
                        c = this.m - e;
                        d = this.j / 2;
                        this.O(this.F, c, 0, 0, d, e, f);
                        break;
                    case 2:
                        e = this.m * a / this.B * 2;
                        f = this.j / 2;
                        c = this.m - e;
                        d = this.j / 2;
                        this.O(this.F, 0, d, c, 0, e, f);
                        break;
                    case 3:
                        e = this.m * a / this.B * 2, f = this.j / 2, c = this.m - e, d = this.j / 2, this.O(this.F, c, d, 0, 0, e, f)
                }
                if (.5 < b) switch (0 == this.PA && (1 >= this.Tb ? this.O(this.F, 0, 0, 0, this.j /
                        2, this.m, this.j / 2) : this.O(this.F, 0, this.j / 2, 0, 0, this.m, this.j / 2), this.PA = !0), b = a - this.B / 2, b /= this.B / 2, f = this.j / 2 * 1E3 * b / 1E3, this.Tb) {
                    case 0:
                    case 1:
                        this.stretch(this.F, 0, f, this.m, this.j / 2, 0, this.j / 2, this.m, this.j / 2);
                        this.stretch(this.F, 0, 0, this.m, f, 0, this.j / 2 - f, this.m, f);
                        break;
                    case 2:
                    case 3:
                        this.stretch(this.F, 0, this.j / 2 - f, this.m, this.j / 2, 0, 0, this.m, this.j / 2), this.stretch(this.F, 0, this.j - f, this.m, f, 0, this.j / 2, this.m, f)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    qh.prototype = l.extend(new w, {
        ua: function(a,
            b, c, d, e) {
            this.Ol = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            var a = this.xa.width,
                b = this.xa.height;
            if (this.bb) {
                switch (this.Ol) {
                    case w.Xt:
                    case w.Bu:
                        this.xd = a;
                        break;
                    default:
                        this.xd = b
                }
                this.rc = 0;
                this.bb = !1
            }
            if (0 == this.B) this.O(this.F);
            else {
                var c = this.xd * this.ud() / this.B;
                if (c > this.rc) {
                    var d = 0,
                        e = 0;
                    switch (this.Ol) {
                        case w.Xt:
                            d = c - a;
                            e = 0;
                            break;
                        case w.Bu:
                            d = a - c;
                            e = 0;
                            break;
                        case w.FE:
                            d = 0;
                            e = c - b;
                            break;
                        case w.VC:
                            d = 0, e = b - c
                    }
                    this.O(this.F, d, e, 0, 0, a, b);
                    this.rc = c
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    rh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Tb = b.C();
            this.Kb = b.C();
            this.AG = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height);
            var a = this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b, c, d, e, f, g;
                f = this.m * this.Kb / 100;
                g = this.j * this.Kb / 100;
                d = f * a / this.B;
                e = g * a / this.B;
                b = this.m / 2 - d / 2;
                c = this.j / 2 - e / 2;
                0 == this.AG ? this.O(this.F, b, c, b, c, d, e) : this.stretch(this.F, b, c, d, e, this.m / 2 - f / 2, this.j / 2 - g / 2, f, g);
                b = 100 - this.Kb;
                f = this.m * b / 100;
                g = this.j * b / 100;
                d = f / 2 * a / this.B;
                e = g / 2 * a / this.B;
                this.O(this.F,
                    0, 0, 0, 0, this.m, e);
                this.O(this.F, 0, 0, 0, 0, d, this.j);
                this.O(this.F, 0, this.j - e, 0, this.j - e, this.m, e);
                this.O(this.F, this.m - d, 0, this.m - d, 0, d, this.j)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    sh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Tb = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height);
            var a = this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b, c;
                switch (this.Tb) {
                    case 0:
                        b = this.m * a / this.B;
                        c = this.j * a / this.B;
                        this.stretch(this.F, 0, 0, b, c, 0, 0, this.m,
                            this.j);
                        break;
                    case 1:
                        b = this.m * a / this.B;
                        c = this.j * a / this.B;
                        this.stretch(this.F, this.m - b, 0, b, c, 0, 0, this.m, this.j);
                        break;
                    case 2:
                        b = this.m * a / this.B;
                        c = this.j * a / this.B;
                        this.stretch(this.F, 0, this.j - c, b, c, 0, 0, this.m, this.j);
                        break;
                    case 3:
                        b = this.m * a / this.B;
                        c = this.j * a / this.B;
                        this.stretch(this.F, this.m - b, this.j - c, b, c, 0, 0, this.m, this.j);
                        break;
                    case 4:
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        5 > c && (c = 5);
                        this.stretch(this.F, 0, 0, b, c, 0, 0, this.xa.width / 2, this.xa.height / 2);
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        5 > c && (c =
                            5);
                        this.stretch(this.F, this.m - b, 0, b, c, this.m / 2, 0, this.m / 2, this.j / 2);
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        this.stretch(this.F, 0, this.j - c, b, c, 0, this.j / 2, this.m / 2, this.j / 2);
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        this.stretch(this.F, this.m - b, this.j - c, b, c, this.m / 2, this.j / 2, this.m / 2, this.j / 2);
                        break;
                    case 5:
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        5 > c && (c = 5);
                        this.stretch(this.F, this.m / 2 - b, this.j / 2 - c, b, c, 0, 0, this.xa.width / 2, this.xa.height / 2);
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        5 > c && (c = 5);
                        this.stretch(this.F,
                            this.m / 2, this.j / 2 - c, b, c, this.m / 2, 0, this.m / 2, this.j / 2);
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        this.stretch(this.F, this.m / 2 - b, this.j / 2, b, c, 0, this.j / 2, this.m / 2, this.j / 2);
                        b = this.m / 2 * a / this.B;
                        c = this.j / 2 * a / this.B;
                        this.stretch(this.F, this.m / 2, this.j / 2, b, c, this.m / 2, this.j / 2, this.m / 2, this.j / 2);
                        break;
                    case 6:
                        b = this.m;
                        c = this.j * a / this.B;
                        this.stretch(this.F, 0, 0, b, c, 0, 0, this.m, this.j);
                        break;
                    case 7:
                        b = this.m * a / this.B;
                        c = this.j;
                        this.stretch(this.F, 0, 0, b, c, 0, 0, this.m, this.j);
                        break;
                    case 8:
                        b = this.m * a / this.B;
                        c = this.j;
                        this.stretch(this.F, this.m - b, 0, b, c, 0, 0, this.m, this.j);
                        break;
                    case 9:
                        b = this.m, c = this.j * a / this.B, this.stretch(this.F, 0, this.j - c, b, c, 0, 0, this.m, this.j)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    th.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Tb = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height, this.ed = 0);
            var a = this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b, c;
                switch (this.Tb) {
                    case 0:
                        0 == this.ed ? (b = 2 * this.m * a / this.B, b = this.m - b, c = 2 * this.j *
                            a / this.B, c = this.j - c, this.stretch(this.xa, 0, 0, b, c, 0, 0, this.m, this.j), a >= this.B / 2 && (this.ed = 1)) : (b = 2 * this.m * a / this.B, b -= this.m, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, 0, 0, b, c, 0, 0, this.m, this.j));
                        break;
                    case 1:
                        0 == this.ed ? (b = this.m, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.xa, 0, 0, b, c, 0, 0, this.m, this.j), a >= this.B / 2 && (this.ed = 1)) : (b = this.m, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, 0, 0, b, c, 0, 0, this.m, this.j));
                        break;
                    case 2:
                        0 == this.ed ? (b = 2 * this.m * a / this.B, b = this.m - b, c = 2 * this.j * a / this.B,
                            c = this.j - c, this.stretch(this.xa, this.m - b, 0, b, c, 0, 0, this.m, this.j), a >= this.B / 2 && (this.ed = 1)) : (b = 2 * this.m * a / this.B, b -= this.m, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, this.m - b, 0, b, c, 0, 0, this.m, this.j));
                        break;
                    case 3:
                        0 == this.ed ? (b = 2 * this.m * a / this.B, b = this.m - b, c = this.j, this.stretch(this.xa, 0, 0, b, c, 0, 0, this.m, this.j), a >= this.B / 2 && (this.ed = 1)) : (b = 2 * this.m * a / this.B, b -= this.m, c = this.j, this.stretch(this.F, 0, 0, b, c, 0, 0, this.m, this.j));
                        break;
                    case 4:
                        0 == this.ed ? (b = 2 * this.m * a / this.B, b = this.m - b, c = this.j, this.stretch(this.xa,
                            this.m / 2 - b / 2, 0, b, c, 0, 0, this.m, this.j), a >= this.B / 2 && (this.ed = 1)) : (b = 2 * this.m * a / this.B, b -= this.m, c = this.j, this.stretch(this.F, this.m / 2 - b / 2, 0, b, c, 0, 0, this.m, this.j));
                        break;
                    case 5:
                        0 == this.ed ? (c = 2 * this.j * a / this.B, c = this.j - c, b = this.m, this.stretch(this.xa, 0, this.j / 2 - c / 2, b, c, 0, 0, this.m, this.j), a >= this.B / 2 && (this.ed = 1)) : (c = 2 * this.j * a / this.B, c -= this.j, b = this.m, this.stretch(this.F, 0, this.j / 2 - c / 2, b, c, 0, 0, this.m, this.j));
                        break;
                    case 6:
                        0 == this.ed ? (b = 2 * this.m * a / this.B, b = this.m - b, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.xa,
                            this.m / 2 - b / 2, this.j / 2 - c / 2, b, c, 0, 0, this.m, this.j), a >= this.B / 2 && (this.ed = 1)) : (b = 2 * this.m * a / this.B, b -= this.m, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, this.m / 2 - b / 2, this.j / 2 - c / 2, b, c, 0, 0, this.m, this.j));
                        break;
                    case 7:
                        0 == this.ed ? (b = 2 * this.m * a / this.B, b = this.m - b, c = this.j, this.stretch(this.xa, this.m - b, 0, b, c, 0, 0, this.m, this.j), a >= this.B / 2 && (this.ed = 1)) : (b = 2 * this.m * a / this.B, b -= this.m, c = this.j, this.stretch(this.F, this.j - b, 0, b, c, 0, 0, this.m, this.j));
                        break;
                    case 8:
                        0 == this.ed ? (b = 2 * this.m * a / this.B, b = this.m -
                            b, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.xa, 0, this.j - c, b, c, 0, 0, this.m, this.j), a >= this.B / 2 && (this.ed = 1)) : (b = 2 * this.m * a / this.B, b -= this.m, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, 0, this.j - c, b, c, 0, 0, this.m, this.j));
                        break;
                    case 9:
                        0 == this.ed ? (b = this.m, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.xa, 0, this.j - c, b, c, 0, 0, this.m, this.j), a >= this.B / 2 && (this.ed = 1)) : (b = this.m, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, 0, this.j - c, b, c, 0, 0, this.m, this.j));
                        break;
                    case 10:
                        0 == this.ed ? (b = 2 *
                            this.m * a / this.B, b = this.m - b, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.xa, this.m - b, this.j - c, b, c, 0, 0, this.m, this.j), a >= this.B / 2 && (this.ed = 1)) : (b = 2 * this.m * a / this.B, b -= this.m, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, this.m - b, this.j - c, b, c, 0, 0, this.m, this.j))
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    uh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Tb = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height, this.Gn = this.Fn = 0);
            var a =
                this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b, c, d, e;
                b = this.j * a / this.B;
                a = this.m * a / this.B;
                if (0 == this.Tb) {
                    e = b % 2;
                    for (c = 0; c < this.m; c += 2) {
                        for (d = this.Fn; d < b; d++) this.O(this.F, c, d, c, d, 1, 1);
                        for (d = this.j - b - e; d < this.j - this.Fn; d++) this.O(this.F, c + 1, d + 1, c + 1, d + 1, 1, 1)
                    }
                    this.Fn = 0 == b % 2 ? b : b - 1
                }
                if (1 == this.Tb) {
                    e = a % 2;
                    for (d = 0; d < this.j; d++) {
                        for (c = this.Gn; c < a; c += 2) this.O(this.F, c + 1, d, c + 1, d, 1, 1);
                        for (c = this.m - a - e; c < this.m - this.Gn; c += 2) this.O(this.F, c, d + 1, c, d + 1, 1, 1)
                    }
                    this.Gn = 0 == a % 2 ? a : a - 1
                }
                if (2 == this.Tb) {
                    e = b % 2;
                    for (c = 0; c < this.m; c +=
                        2) {
                        for (d = this.Fn; d < b; d += 2) this.O(this.F, c, d, c, d, 1, 1);
                        for (d = this.j - b - e; d < this.j - this.Fn; d += 2) this.O(this.F, c + 1, d + 1, c + 1, d + 1, 1, 1)
                    }
                    e = a % 2;
                    for (d = 0; d < this.j; d += 2) {
                        for (c = this.Gn; c < a; c += 2) this.O(this.F, c + 1, d, c + 1, d, 1, 1);
                        for (c = this.m - a - e; c < this.m - this.Gn; c += 2) this.O(this.F, c, d + 1, c, d + 1, 1, 1)
                    }
                    this.Fn = 0 == b % 2 ? b : b - 1;
                    this.Gn = 0 == a % 2 ? a : a - 1
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    vh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Kb = b.C();
            this.Ar = b.C();
            this.zG = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb &&
                (this.bb = !1, this.m = this.F.width, this.j = this.F.height, this.En = 0);
            var a = this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b, c, d;
                b = this.m / 2;
                d = this.j / 2;
                this.En = 6.28318 * this.Kb * a / this.B;
                1 == this.zG && (this.En = 6.28318 - this.En);
                c = this.m / 2 - this.m / 2 * a / this.B;
                b = Math.floor(b + Math.cos(this.En) * c);
                c = Math.floor(d + Math.sin(this.En) * c);
                d = this.m * a / this.B;
                a = this.j * a / this.B;
                this.stretch(this.xa, 0, 0, this.m, this.j, 0, 0, this.xa.width, this.xa.height);
                1 == this.d7 ? this.stretch(this.F, b - d / 2, c - a / 2, d, a, 0, 0, this.m, this.j) : this.stretch(this.F,
                    b - d / 2, c - a / 2, d, a, this.m - d, this.j - a, d, a)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    wh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Kb = b.C();
            this.Ar = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height, this.aw = 0);
            var a = this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b, c, d;
                b = this.m / 2;
                c = this.j / 2;
                d = 6.28318 * this.Kb * a / this.B;
                d -= 6.28318 * this.aw;
                1 == this.Ar && (d = 6.28318 - d);
                a = this.m * a / this.B;
                b = Math.floor(b + Math.cos(d) * a);
                c = Math.floor(c + Math.sin(d) *
                    a);
                this.O(this.F);
                this.O(this.xa, b - this.m / 2, c - this.j / 2, 0, 0, this.m, this.j);
                0 == this.Ar ? 6.28318 <= d && this.aw++ : 0 >= d && this.aw++
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    xh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.LC = b.C();
            this.Lx = b.v();
            this.lL = b.v();
            this.start(a, c, d, e)
        },
        Mc: function() {
            var a = this.xa.width,
                b = this.xa.height;
            if (this.bb) {
                this.X = Math.floor((a * this.LC / 100 + b * this.LC / 100) / 2);
                0 == this.X && (this.X = 1);
                this.Dg = (a + this.X - 1) / this.X;
                this.Vi = (b + this.X - 1) / this.X;
                this.IA = this.lL;
                this.Je = this.Lx;
                switch (this.Lx) {
                    case w.gl:
                        this.Ha = this.Ia = 0;
                        break;
                    case w.hl:
                        this.Ha = a - this.X;
                        this.Ia = 0;
                        break;
                    case w.Dm:
                        this.Ha = 0;
                        this.Ia = b - this.X;
                        break;
                    case w.Em:
                        this.Ha = a - this.X;
                        this.Ia = b - this.X;
                        break;
                    case w.aD:
                        this.Ha = a / 2 - this.X, this.Ia = b / 2 - this.X, this.Je = this.IA == w.BD ? w.gl : w.hl, this.ew = this.Ha - this.X, this.hw = this.Ia - this.X, this.$v = this.Ia + 2 * this.X, this.gw = this.Ha + 2 * this.X, this.Dg = 2 + 2 * (this.Ha + this.X - 1) / this.X, this.Vi = 2 + 2 * (this.Ia + this.X - 1) / this.X
                }
                this.Jn = Math.floor(this.Dg * this.Vi);
                this.Hn = 0;
                this.bb = !1
            }
            if (this.X >=
                a || this.X >= b) this.O(this.F);
            else {
                var c;
                c = Math.floor(this.Jn * this.ud() / this.B);
                var d = c - this.Hn;
                if (0 != d)
                    for (this.Hn = c, c = 0; c < d; c++)
                        if (this.O(this.F, this.Ha, this.Ia, this.Ha, this.Ia, this.X, this.X), this.Lx == w.aD) switch (this.Je) {
                            case w.gl:
                                this.Ha += this.X;
                                this.Ha >= this.gw && (this.Ha -= this.X, this.Ia += this.X, this.Je = w.hl, this.gw += this.X);
                                break;
                            case w.hl:
                                this.Ia += this.X;
                                this.Ia >= this.$v && (this.Ia -= this.X, this.Ha -= this.X, this.Je = w.Em, this.$v += this.X);
                                break;
                            case w.Em:
                                this.Ha -= this.X;
                                this.Ha + this.X <= this.ew && (this.Ha +=
                                    this.X, this.Ia -= this.X, this.Je = w.Dm, this.ew -= this.X);
                                break;
                            case w.Dm:
                                this.Ia -= this.X, this.Ia + this.X <= this.hw && (this.Ia += this.X, this.Ha += this.X, this.Je = w.gl, this.hw -= this.X)
                        } else switch (this.IA) {
                            case w.BD:
                                switch (this.Je) {
                                    case w.gl:
                                        this.Ha += this.X;
                                        this.Ha >= a && (this.Ha -= this.X, this.Ia += this.X, this.Je = w.hl);
                                        break;
                                    case w.hl:
                                        this.Ha -= this.X;
                                        0 >= this.Ha + this.X && (this.Ha += this.X, this.Ia += this.X, this.Je = w.gl);
                                        break;
                                    case w.Dm:
                                        this.Ha += this.X;
                                        this.Ha >= a && (this.Ha -= this.X, this.Ia -= this.X, this.Je = w.Em);
                                        break;
                                    case w.Em:
                                        this.Ha -=
                                            this.X, 0 >= this.Ha + this.X && (this.Ha += this.X, this.Ia -= this.X, this.Je = w.Dm)
                                }
                                break;
                            case w.mO:
                                switch (this.Je) {
                                    case w.gl:
                                        this.Ia += this.X;
                                        this.Ia >= b && (this.Ia -= this.X, this.Ha += this.X, this.Je = w.Dm);
                                        break;
                                    case w.hl:
                                        this.Ia += this.X;
                                        this.Ia >= b && (this.Ia -= this.X, this.Ha -= this.X, this.Je = w.Em);
                                        break;
                                    case w.Dm:
                                        this.Ia -= this.X;
                                        0 >= this.Ia + this.X && (this.Ia += this.X, this.Ha += this.X, this.Je = w.gl);
                                        break;
                                    case w.Em:
                                        this.Ia -= this.X, 0 >= this.Ia + this.X && (this.Ia += this.X, this.Ha -= this.X, this.Je = w.hl)
                                }
                        }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    yh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Tb = b.C();
            this.Kb = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width, this.j = this.F.height, this.Wh = this.In = 0);
            var a = this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b, c, d, e;
                0 == this.Tb ? (b = this.j / this.Kb, e = Math.floor(this.In * b) + Math.floor(b), c = 0, d = this.m * a / this.B, d = d * this.Kb / 2, d -= this.m * this.In, b = 0 == this.Wh ? 0 : this.m - d, this.O(this.F, b, c, b, c, d, e), c = this.j - e, b = 1 == this.Wh ? 0 : this.m - d, this.O(this.F, b, c, b, c, d, e), d >= this.m &&
                    (this.In++, this.Wh++, 2 == this.Wh && (this.Wh = 0))) : (b = this.m / this.Kb, d = Math.floor(this.In * b) + Math.floor(b), b = 0, e = this.j * a / this.B, e = e * this.Kb / 2, e -= this.j * this.In, c = 0 == this.Wh ? 0 : this.j - e, this.O(this.F, b, c, b, c, d, e), b = this.m - d, c = 1 == this.Wh ? 0 : this.j - e, this.O(this.F, b, c, b, c, d, e), e >= this.j && (this.In++, this.Wh++, 2 == this.Wh && (this.Wh = 0)))
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    zh.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.start(a, c, d, e)
        },
        Mc: function(a) {
            var b = this.xa.width,
                c = this.xa.height;
            this.bb &&
                (this.bb = !1);
            if (0 == this.B) this.O(this.F);
            else {
                var d;
                d = this.ud();
                0 != (a & w.Ju) ? (a = Math.floor(b - b * d / this.B), d = Math.floor(c - c * d / this.B), this.O(this.F), this.stretch(this.xa, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c)) : (a = Math.floor(b * d / this.B), d = Math.floor(c * d / this.B), this.O(this.xa), this.stretch(this.F, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c))
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Ah.prototype = l.extend(new w, {
        ua: function(a, b, c, d, e) {
            this.Kb = b.C();
            this.start(a, c, d, e)
        },
        Mc: function() {
            this.bb && (this.bb = !1, this.m = this.F.width,
                this.j = this.F.height);
            var a = this.ud();
            if (1 < a / this.B) this.O(this.F);
            else {
                var b, c, d;
                0 == this.Kb ? (c = this.m * a / this.B, d = this.j * a / this.B, a = this.m / 2 - c / 2, b = this.j / 2 - d / 2, this.stretch(this.F, 0, 0, this.m, this.j, a, b, c, d)) : (c = this.m * a / this.B, c = this.m - c, d = this.j * a / this.B, d = this.j - d, a = this.m / 2 - c / 2, b = this.j / 2 - d / 2, this.stretch(this.xa, 0, 0, this.m, this.j, a, b, c, d))
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    t.rj = {
        YD: "PK\u0003\u0004",
        cD: "PK\u0001\u0002",
        Ux: "PK\u0005\u0006",
        IE: "PK\u0006\u0007",
        OS: "PK\u0006\u0006",
        n1: "PK\u0007\b"
    };
    t.IV = {
        Rj: !1,
        sl: !1,
        dir: !1,
        Lh: null,
        jp: null
    };
    t.prototype = function() {
        function a(d) {
            "/" != d.slice(-1) && (d += "/");
            if (!this.files[d]) {
                var e = b(d);
                e && a.call(this, e);
                c.call(this, d, null, {
                    dir: !0
                })
            }
            return this.files[d]
        }

        function b(a) {
            "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
            var b = a.lastIndexOf("/");
            return 0 < b ? a.substring(0, b) : ""
        }

        function c(c, e, p) {
            var g = b(c);
            g && a.call(this, g);
            p = p || {};
            !0 === p.Rj && null == p.sl && (p.sl = !0);
            p = d(p, t.IV);
            p.Lh = p.Lh || new Date;
            null !== p.jp && (p.jp = p.jp.toUpperCase());
            p.dir || null === e || "undefined" ===
                typeof e ? (p.Rj = !1, p.sl = !1, e = null) : t.wo.Ax && e instanceof Uint8Array ? (p.Rj = !1, p.sl = !0, e = t.wj.zx(e)) : t.wo.bF && e instanceof ArrayBuffer ? (p.Rj = !1, p.sl = !0, e = new Uint8Array(e), e = t.wj.zx(e)) : p.sl && !p.Rj && (!0 !== p.tJ && (e = t.wj.VK(e)), delete p.tJ);
            return this.files[c] = new f(c, e, p)
        }

        function d() {
            var a = {},
                b, c;
            for (b = 0; b < arguments.length; b++)
                for (c in arguments[b]) arguments[b].hasOwnProperty(c) && "undefined" === typeof a[c] && (a[c] = arguments[b][c]);
            return a
        }

        function e(a, b) {
            var c = "",
                d;
            for (d = 0; d < b; d++) c += String.fromCharCode(a &
                255), a >>>= 8;
            return c
        }

        function f(a, b, c) {
            this.name = a;
            this.data = b;
            this.options = c
        }
        f.prototype = {
            cF: function() {
                var a = this.data;
                if (null === a || "undefined" === typeof a) return "";
                this.options.Rj && (a = Xb.decode(a));
                this.options.sl || (a = t.prototype.hL(a));
                return a
            }
        };
        return {
            load: function() {
                throw Error("Load method is not defined. Is the file jszip-load.js included ?");
            },
            filter: function(a) {
                var b = [],
                    c, e, g;
                for (c in this.files) this.files.hasOwnProperty(c) && (e = this.files[c], g = new f(e.name, e.data, d(e.options)), e = c.slice(this.root.length,
                    c.length), c.slice(0, this.root.length) === this.root && a(e, g) && b.push(g));
                return b
            },
            file: function(a, b, d) {
                if (1 === arguments.length) {
                    if (a instanceof RegExp) {
                        var e = a;
                        return this.filter(function(a, b) {
                            return !b.options.dir && e.test(a)
                        })
                    }
                    return this.filter(function(b, c) {
                        return !c.options.dir && b === a
                    })[0] || null
                }
                a = this.root + a;
                c.call(this, a, b, d);
                return this
            },
            B5: function(b) {
                if (!b) return this;
                if (b instanceof RegExp) return this.filter(function(a, c) {
                    return c.options.dir && b.test(a)
                });
                var c = a.call(this, this.root + b),
                    d = this.clone();
                d.root = c.name;
                return d
            },
            remove: function(a) {
                a = this.root + a;
                var b = this.files[a];
                b || ("/" != a.slice(-1) && (a += "/"), b = this.files[a]);
                if (b)
                    if (b.options.dir)
                        for (var b = this.filter(function(b, c) {
                                return c.name.slice(0, a.length) === a
                            }), c = 0; c < b.length; c++) delete this.files[b[c].name];
                    else delete this.files[a];
                return this
            },
            F5: function(a) {
                var b, c;
                a = d(a || {}, {
                    Rj: !0,
                    jp: "STORE",
                    type: "base64"
                });
                var f = a.jp.toUpperCase();
                if (!t.Ih[f]) throw f + " is not a valid compression method !";
                var g = [],
                    k = [],
                    l = 0,
                    n;
                for (n in this.files)
                    if (this.files.hasOwnProperty(n)) {
                        b =
                            this.files[n];
                        var q = this.hL(b.name),
                            m, u, v;
                        u = b;
                        b = q;
                        var z = f;
                        m = b !== u.name;
                        c = u.cF();
                        var A = u.options;
                        v = A.Lh.getHours();
                        v = v << 6 | A.Lh.getMinutes();
                        v = v << 5 | A.Lh.getSeconds() / 2;
                        u = A.Lh.getFullYear() - 1980;
                        u = u << 4 | A.Lh.getMonth() + 1;
                        u = u << 5 | A.Lh.getDate();
                        var C = null !== c && 0 !== c.length,
                            z = A.jp || z;
                        if (!t.Ih[z]) throw z + " is not a valid compression method !";
                        A = t.Ih[z];
                        z = C ? A.gV(c) : "";
                        m = "\n\x00" + (m ? "\x00\b" : "\x00\x00") + (C ? A.jw : t.Ih.STORE.jw);
                        m += e(v, 2);
                        m += e(u, 2);
                        m += C ? e(this.cv(c), 4) : "\x00\x00\x00\x00";
                        m += C ? e(z.length, 4) : "\x00\x00\x00\x00";
                        m += C ? e(c.length, 4) : "\x00\x00\x00\x00";
                        m += e(b.length, 2);
                        b = m += "\x00\x00";
                        c = z;
                        c = t.rj.YD + b + q + c;
                        q = t.rj.cD + "\u0014\x00" + b + "\x00\x00\x00\x00\x00\x00" + (!0 === this.files[n].options.dir ? "\u0010\x00\x00\x00" : "\x00\x00\x00\x00") + e(l, 4) + q;
                        l += c.length;
                        k.push(c);
                        g.push(q)
                    } f = k.join("");
                g = g.join("");
                k = f + g + (t.rj.Ux + "\x00\x00\x00\x00" + e(k.length, 2) + e(k.length, 2) + e(g.length, 4) + e(f.length, 4) + "\x00\x00");
                switch (a.type.toLowerCase()) {
                    case "uint8array":
                        return t.wj.xC(k);
                    case "arraybuffer":
                        return t.wj.xC(k).buffer;
                    case "blob":
                        return t.wj.U_(k);
                    case "base64":
                        return a.Rj ? Xb.encode(k) : k;
                    default:
                        return k
                }
            },
            cv: function(a, b) {
                if ("" === a || "undefined" === typeof a) return 0;
                var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242,
                    1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368,
                    4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646,
                    62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804,
                    3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701,
                    2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
                ];
                "undefined" == typeof b && (b = 0);
                var d;
                b ^= -1;
                for (var e = 0, f = a.length; e < f; e++) d = (b ^ a.charCodeAt(e)) & 255, d = c[d], b = b >>> 8 ^ d;
                return b ^ -1
            },
            clone: function() {
                var a = new t,
                    b;
                for (b in this) "function" !== typeof this[b] && (a[b] = this[b]);
                return a
            },
            hL: function(a) {
                for (var b = "", c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
                }
                return b
            },
            gL: function(a) {
                for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d &
                    31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
                return b
            }
        }
    }();
    t.Ih = {
        STORE: {
            jw: "\x00\x00",
            gV: function(a) {
                return a
            },
            FC: function(a) {
                return a
            }
        }
    };
    t.wo = {
        bF: "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array,
        Ax: "undefined" !== typeof Uint8Array,
        blob: function() {
            if ("undefined" === typeof ArrayBuffer) return !1;
            var a = new ArrayBuffer(0);
            try {
                return 0 === (new Blob([a], {
                    type: "application/zip"
                })).size
            } catch (c) {}
            try {
                var b = new(window.BlobBuilder ||
                    window.WebKitBlobBuilder || window.HR || window.BR);
                b.append(a);
                return 0 === b.getBlob("application/zip").size
            } catch (c) {}
            return !1
        }()
    };
    t.wj = {
        VK: function(a) {
            for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a.charCodeAt(c) & 255);
            return b
        },
        xC: function(a) {
            if (!t.wo.Ax) throw Error("Uint8Array is not supported by this browser");
            for (var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
            return b
        },
        zx: function(a) {
            if (!t.wo.Ax) throw Error("Uint8Array is not supported by this browser");
            for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
            return b
        },
        U_: function(a) {
            if (!t.wo.blob) throw Error("Blob is not supported by this browser");
            a = t.wj.xC(a).buffer;
            try {
                return new Blob([a], {
                    type: "application/zip"
                })
            } catch (c) {}
            try {
                var b = new(window.BlobBuilder || window.WebKitBlobBuilder || window.HR || window.BR);
                b.append(a);
                return b.getBlob("application/zip")
            } catch (c) {}
            throw Error("Bug : can't construct the Blob.");
        }
    };
    var Xb = function() {
        return {
            encode: function(a) {
                for (var b = "", c, d, e, f, g, h, p = 0; p < a.length;) c =
                    a.charCodeAt(p++), d = a.charCodeAt(p++), e = a.charCodeAt(p++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, h = e & 63, isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h);
                return b
            },
            decode: function(a) {
                var b = "",
                    c, d, e, f, g,
                    h = 0;
                for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < a.length;) c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 !=
                    f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e));
                return b
            }
        }
    }();
    if (!t) throw "JSZip not defined";
    (function() {
        function a() {
            this.list = this.next = null
        }

        function b() {
            this.n = this.Gh = this.e = 0;
            this.t = null
        }

        function c(c, d, e, f, g, h) {
            this.Bm = 16;
            this.IR = 288;
            this.status = 0;
            this.root = null;
            this.Si = 0;
            var p = Array(this.Bm + 1),
                k, n, l, q, m, t, u, H = Array(this.Bm + 1),
                G, z, v, A = new b,
                D = Array(this.Bm);
            q = Array(this.IR);
            var C, w = Array(this.Bm + 1),
                E, B, F;
            F = this.root = null;
            for (m = 0; m < p.length; m++) p[m] = 0;
            for (m = 0; m < H.length; m++) H[m] =
                0;
            for (m = 0; m < D.length; m++) D[m] = null;
            for (m = 0; m < q.length; m++) q[m] = 0;
            for (m = 0; m < w.length; m++) w[m] = 0;
            k = 256 < d ? c[256] : this.Bm;
            G = c;
            z = 0;
            m = d;
            do p[G[z]]++, z++; while (0 < --m);
            if (p[0] == d) this.root = null, this.status = this.Si = 0;
            else {
                for (t = 1; t <= this.Bm && 0 == p[t]; t++);
                u = t;
                h < t && (h = t);
                for (m = this.Bm; 0 != m && 0 == p[m]; m--);
                l = m;
                h > m && (h = m);
                for (E = 1 << t; t < m; t++, E <<= 1)
                    if (0 > (E -= p[t])) {
                        this.status = 2;
                        this.Si = h;
                        return
                    } if (0 > (E -= p[m])) this.status = 2, this.Si = h;
                else {
                    p[m] += E;
                    w[1] = t = 0;
                    G = p;
                    z = 1;
                    for (v = 2; 0 < --m;) w[v++] = t += G[z++];
                    G = c;
                    m = z = 0;
                    do 0 != (t =
                        G[z++]) && (q[w[t]++] = m); while (++m < d);
                    d = w[l];
                    w[0] = m = 0;
                    G = q;
                    z = 0;
                    q = -1;
                    C = H[0] = 0;
                    v = null;
                    for (B = 0; u <= l; u++)
                        for (c = p[u]; 0 < c--;) {
                            for (; u > C + H[1 + q];) {
                                C += H[1 + q];
                                q++;
                                B = (B = l - C) > h ? h : B;
                                if ((n = 1 << (t = u - C)) > c + 1)
                                    for (n -= c + 1, v = u; ++t < B && !((n <<= 1) <= p[++v]);) n -= p[v];
                                C + t > k && C < k && (t = k - C);
                                B = 1 << t;
                                H[1 + q] = t;
                                v = Array(B);
                                for (n = 0; n < B; n++) v[n] = new b;
                                F = null == F ? this.root = new a : F.next = new a;
                                F.next = null;
                                F.list = v;
                                D[q] = v;
                                0 < q && (w[q] = m, A.Gh = H[q], A.e = 16 + t, A.t = v, t = (m & (1 << C) - 1) >> C - H[q], D[q - 1][t].e = A.e, D[q - 1][t].Gh = A.Gh, D[q - 1][t].n = A.n, D[q - 1][t].t =
                                    A.t)
                            }
                            A.Gh = u - C;
                            z >= d ? A.e = 99 : G[z] < e ? (A.e = 256 > G[z] ? 16 : 15, A.n = G[z++]) : (A.e = g[G[z] - e], A.n = f[G[z++] - e]);
                            n = 1 << u - C;
                            for (t = m >> C; t < B; t += n) v[t].e = A.e, v[t].Gh = A.Gh, v[t].n = A.n, v[t].t = A.t;
                            for (t = 1 << u - 1; 0 != (m & t); t >>= 1) m ^= t;
                            for (m ^= t;
                                (m & (1 << C) - 1) != w[q];) C -= H[q], q--
                        }
                    this.Si = H[1];
                    this.status = 0 != E && 1 != l ? 1 : 0
                }
            }
        }

        function d(a) {
            for (; D < a;) A |= (L.length == M ? -1 : L.charCodeAt(M++) & 255) << D, D += 8
        }

        function e(a) {
            return A & N[a]
        }

        function f(a) {
            A >>= a;
            D -= a
        }

        function g(a, b, c) {
            var g, h, p;
            if (0 == c) return 0;
            for (p = 0;;) {
                d(I);
                h = E.list[e(I)];
                for (g = h.e; 16 <
                    g;) {
                    if (99 == g) return -1;
                    f(h.Gh);
                    g -= 16;
                    d(g);
                    h = h.t[e(g)];
                    g = h.e
                }
                f(h.Gh);
                if (16 == g) q &= 32767, a[b + p++] = m[q++] = h.n;
                else {
                    if (15 == g) break;
                    d(g);
                    C = h.n + e(g);
                    f(g);
                    d(K);
                    h = J.list[e(K)];
                    for (g = h.e; 16 < g;) {
                        if (99 == g) return -1;
                        f(h.Gh);
                        g -= 16;
                        d(g);
                        h = h.t[e(g)];
                        g = h.e
                    }
                    f(h.Gh);
                    d(g);
                    F = q - h.n - e(g);
                    for (f(g); 0 < C && p < c;) C--, F &= 32767, q &= 32767, a[b + p++] = m[q++] = m[F++]
                }
                if (p == c) return c
            }
            z = -1;
            return p
        }

        function h(a, b, h) {
            var p, k, n, l, m, q, t, u = Array(316);
            for (p = 0; p < u.length; p++) u[p] = 0;
            d(5);
            q = 257 + e(5);
            f(5);
            d(5);
            t = 1 + e(5);
            f(5);
            d(4);
            p = 4 + e(4);
            f(4);
            if (286 <
                q || 30 < t) return -1;
            for (k = 0; k < p; k++) d(3), u[S[k]] = e(3), f(3);
            for (; 19 > k; k++) u[S[k]] = 0;
            I = 7;
            k = new c(u, 19, 19, null, null, I);
            if (0 != k.status) return -1;
            E = k.root;
            I = k.Si;
            l = q + t;
            for (p = n = 0; p < l;)
                if (d(I), m = E.list[e(I)], k = m.Gh, f(k), k = m.n, 16 > k) u[p++] = n = k;
                else if (16 == k) {
                d(2);
                k = 3 + e(2);
                f(2);
                if (p + k > l) return -1;
                for (; 0 < k--;) u[p++] = n
            } else {
                17 == k ? (d(3), k = 3 + e(3), f(3)) : (d(7), k = 11 + e(7), f(7));
                if (p + k > l) return -1;
                for (; 0 < k--;) u[p++] = 0;
                n = 0
            }
            I = 9;
            k = new c(u, q, 257, O, P, I);
            0 == I && (k.status = 1);
            if (0 != k.status) return -1;
            E = k.root;
            I = k.Si;
            for (p = 0; p < t; p++) u[p] =
                u[p + q];
            K = 6;
            k = new c(u, t, 0, Q, R, K);
            J = k.root;
            K = k.Si;
            return 0 == K && 257 < q || 0 != k.status ? -1 : g(a, b, h)
        }

        function p(a, b) {
            var p, k;
            for (p = 0; p < b && (!w || -1 != z);) {
                if (0 < C) {
                    if (0 != z)
                        for (; 0 < C && p < b;) C--, F &= 32767, q &= 32767, a[0 + p++] = m[q++] = m[F++];
                    else {
                        for (; 0 < C && p < b;) C--, q &= 32767, d(8), a[0 + p++] = m[q++] = e(8), f(8);
                        0 == C && (z = -1)
                    }
                    if (p == b) break
                }
                if (-1 == z) {
                    if (w) break;
                    d(1);
                    0 != e(1) && (w = !0);
                    f(1);
                    d(2);
                    z = e(2);
                    f(2);
                    E = null;
                    C = 0
                }
                switch (z) {
                    case 0:
                        var t = a,
                            G = 0 + p,
                            H = b - p;
                        k = D & 7;
                        f(k);
                        d(16);
                        k = e(16);
                        f(16);
                        d(16);
                        if (k != (~A & 65535)) k = -1;
                        else {
                            f(16);
                            C = k;
                            for (k =
                                0; 0 < C && k < H;) C--, q &= 32767, d(8), t[G + k++] = m[q++] = e(8), f(8);
                            0 == C && (z = -1)
                        }
                        break;
                    case 1:
                        if (null != E) k = g(a, 0 + p, b - p);
                        else a: {
                            var B;k = a;t = 0 + p;G = b - p;
                            if (null == n) {
                                H = Array(288);
                                for (B = 0; 144 > B; B++) H[B] = 8;
                                for (; 256 > B; B++) H[B] = 9;
                                for (; 280 > B; B++) H[B] = 7;
                                for (; 288 > B; B++) H[B] = 8;
                                v = 7;
                                B = new c(H, 288, 257, O, P, v);
                                if (0 != B.status) {
                                    alert("HufBuild error: " + B.status);
                                    k = -1;
                                    break a
                                }
                                n = B.root;
                                v = B.Si;
                                for (B = 0; 30 > B; B++) H[B] = 5;
                                l = 5;
                                B = new c(H, 30, 0, Q, R, l);
                                if (1 < B.status) {
                                    n = null;
                                    alert("HufBuild error: " + B.status);
                                    k = -1;
                                    break a
                                }
                                u = B.root;
                                l = B.Si
                            }
                            E =
                            n;J = u;I = v;K = l;k = g(k, t, G)
                        }
                        break;
                    case 2:
                        k = null != E ? g(a, 0 + p, b - p) : h(a, 0 + p, b - p);
                        break;
                    default:
                        k = -1
                }
                if (-1 == k) return w ? 0 : -1;
                p += k
            }
            return p
        }

        function k(a) {
            var b, c, d;
            null == m && (m = Array(65536));
            D = A = q = 0;
            z = -1;
            w = !1;
            C = F = 0;
            E = null;
            L = a;
            M = 0;
            b = Array(1024);
            for (a = ""; 0 < (c = p(b, b.length));)
                for (d = 0; d < c; d++) a += String.fromCharCode(b[d]);
            L = null;
            return a
        }
        var l, m, q, n = null,
            u, v, A, D, z, w, C, F, E, J, I, K, L, M, N = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
            O = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83,
                99, 115, 131, 163, 195, 227, 258, 0, 0
            ],
            P = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99],
            Q = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
            R = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        t.Ih.DEFLATE ? t.Ih.DEFLATE.FC = k : t.Ih.DEFLATE = {
            jw: "\b\x00",
            FC: k
        }
    })();
    (function() {
        function a(a) {
            var b = "",
                c, d;
            for (d = 0; d < (a || "").length; d++) c = a.charCodeAt(d), b += "\\x" +
                (16 > c ? "0" : "") + c.toString(16).toUpperCase();
            return b
        }

        function b(a) {
            this.stream = "";
            t.wo.Ax && a instanceof Uint8Array ? this.stream = t.wj.zx(a) : t.wo.bF && a instanceof ArrayBuffer ? (a = new Uint8Array(a), this.stream = t.wj.zx(a)) : this.stream = t.wj.VK(a);
            this.index = 0
        }

        function c(a, b) {
            this.options = a;
            this.FA = b
        }

        function d(a, b) {
            this.files = [];
            this.FA = b;
            a && this.load(a)
        }
        b.prototype = {
            yF: function(a) {
                this.wF(this.index + a)
            },
            wF: function(a) {
                if (this.stream.length < a || 0 > a) throw Error("End of stream reached (stream length = " + this.stream.length +
                    ", asked index = " + a + "). Corrupted zip ?");
            },
            zq: function(a) {
                this.wF(a);
                this.index = a
            },
            OK: function(a) {
                this.zq(this.index + a)
            },
            zU: function(a) {
                return this.stream.charCodeAt(a)
            },
            mb: function(a) {
                var b = 0,
                    c;
                this.yF(a);
                for (c = this.index + a - 1; c >= this.index; c--) b = (b << 8) + this.zU(c);
                this.index += a;
                return b
            },
            qh: function(a) {
                this.yF(a);
                var b = this.stream.slice(this.index, this.index + a);
                this.index += a;
                return b
            },
            OZ: function() {
                var a = this.mb(4);
                return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (a & 31) <<
                    1)
            }
        };
        c.prototype = {
            gY: function() {
                return 1 === (this.mF & 1)
            },
            d0: function() {
                return 2048 === (this.mF & 2048)
            },
            SZ: function(b) {
                var c, d;
                b.OK(22);
                this.Lz = b.mb(2);
                d = b.mb(2);
                this.fileName = b.qh(this.Lz);
                b.OK(d);
                if (-1 == this.bv || -1 == this.Cx) throw Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
                this.hV = b.qh(this.bv);
                a: {
                    b = this.JF;
                    for (c in t.Ih)
                        if (t.Ih.hasOwnProperty(c) && t.Ih[c].jw === b) {
                            c = t.Ih[c];
                            break a
                        } c = null
                }
                if (null === c) throw Error("Corrupted zip : compression " +
                    a(this.JF) + " unknown (inner file : " + this.fileName + ")");
                this.GC = c.FC(this.hV);
                if (this.GC.length !== this.Cx) throw Error("Bug : uncompressed data size mismatch");
                if (this.FA.b5 && t.prototype.cv(this.GC) !== this.cv) throw Error("Corrupted zip : CRC32 mismatch");
            },
            NZ: function(a) {
                a.qh(2);
                a.mb(2);
                this.mF = a.mb(2);
                this.JF = a.qh(2);
                this.Lh = a.OZ();
                this.cv = a.mb(4);
                this.bv = a.mb(4);
                this.Cx = a.mb(4);
                this.Lz = a.mb(2);
                this.hX = a.mb(2);
                this.kX = a.mb(2);
                this.rG = a.mb(2);
                a.mb(2);
                this.gX = a.mb(4);
                this.HA = a.mb(4);
                if (this.gY()) throw Error("Encrypted zip are not supported");
                this.fileName = a.qh(this.Lz);
                this.QZ(a);
                this.qZ(a);
                this.NG = a.qh(this.kX);
                this.dir = this.gX & 16 ? !0 : !1
            },
            qZ: function() {
                if (this.rv[1]) {
                    var a = new b(this.rv[1].value); - 1 === this.Cx && (this.Cx = a.mb(8)); - 1 === this.bv && (this.bv = a.mb(8)); - 1 === this.HA && (this.HA = a.mb(8)); - 1 === this.rG && (this.rG = a.mb(4))
                }
            },
            QZ: function(a) {
                var b = a.index,
                    c, d, e;
                for (this.rv = this.rv || {}; a.index < b + this.hX;) c = a.mb(2), d = a.mb(2), e = a.qh(d), this.rv[c] = {
                    id: c,
                    length: d,
                    value: e
                }
            },
            PX: function() {
                this.d0() && (this.fileName = t.prototype.gL(this.fileName),
                    this.NG = t.prototype.gL(this.NG))
            }
        };
        d.prototype = {
            Yu: function(b) {
                var c = this.Mb.qh(4);
                if (c !== b) throw Error("Corrupted zip or bug : unexpected signature (" + a(c) + ", expected " + a(b) + ")");
            },
            IZ: function() {
                this.qG = this.Mb.mb(2);
                this.sG = this.Mb.mb(2);
                this.sF = this.Mb.mb(2);
                this.rF = this.Mb.mb(2);
                this.tF = this.Mb.mb(4);
                this.iz = this.Mb.mb(4);
                this.h0 = this.Mb.mb(2);
                this.Mb.qh(this.h0)
            },
            JZ: function() {
                this.f0 = this.Mb.mb(8);
                this.Mb.qh(2);
                this.Mb.mb(2);
                this.qG = this.Mb.mb(4);
                this.sG = this.Mb.mb(4);
                this.sF = this.Mb.mb(8);
                this.rF = this.Mb.mb(8);
                this.tF = this.Mb.mb(8);
                this.iz = this.Mb.mb(8);
                this.g0 = {};
                for (var a = this.f0 - 44, b, c, d; 0 < a;) b = this.Mb.mb(2), c = this.Mb.mb(4), d = this.Mb.qh(c), this.g0[b] = {
                    id: b,
                    length: c,
                    value: d
                }
            },
            KZ: function() {
                this.Mb.mb(4);
                this.VZ = this.Mb.mb(8);
                this.QV = this.Mb.mb(4);
                if (1 < this.QV) throw Error("Multi-volumes zip are not supported");
            },
            RZ: function() {
                var a, b;
                for (a = 0; a < this.files.length; a++) b = this.files[a], this.Mb.zq(b.HA), this.Yu(t.rj.YD), b.SZ(this.Mb), b.PX()
            },
            MZ: function() {
                var a;
                for (this.Mb.zq(this.iz); this.Mb.qh(4) ===
                    t.rj.cD;) a = new c({
                    kL: this.kL
                }, this.FA), a.NZ(this.Mb), this.files.push(a)
            },
            PZ: function() {
                var a = this.Mb.stream.lastIndexOf(t.rj.Ux);
                if (-1 === a) throw Error("Corrupted zip : can't find end of central directory");
                this.Mb.zq(a);
                this.Yu(t.rj.Ux);
                this.IZ();
                if (65535 === this.qG || 65535 === this.sG || 65535 === this.sF || 65535 === this.rF || -1 === this.tF || -1 === this.iz) {
                    this.kL = !0;
                    a = this.Mb.stream.lastIndexOf(t.rj.IE);
                    if (-1 === a) throw Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
                    this.Mb.zq(a);
                    this.Yu(t.rj.IE);
                    this.KZ();
                    this.Mb.zq(this.VZ);
                    this.Yu(t.rj.OS);
                    this.JZ()
                }
            },
            load: function(a) {
                this.Mb = new b(a);
                this.PZ();
                this.MZ();
                this.RZ()
            }
        };
        t.prototype.load = function(a, b) {
            var c, e, f;
            b = b || {};
            b.Rj && (a = Xb.decode(a));
            c = (new d(a, b)).files;
            for (e = 0; e < c.length; e++) f = c[e], this.file(f.fileName, f.GC, {
                sl: !0,
                tJ: !0,
                Lh: f.Lh,
                dir: f.dir
            });
            return this
        }
    })();
    var ii = document.getElementsByTagName("script"),
        ji = ii[ii.length - 1].src;
    document.Y6 = ji.substring(0, ji.lastIndexOf("/") + 1);
    xa.Runtime = Bh;
    xa.headerLoaded = Ch;
    xa.Y_ = "updateApplication";
    xa[window.Y_] = vb;
    Ta.prototype = {
        fc: function(a, b, c) {
            if (this.visible) {
                this.Ci && (a.wb.save(), a.wb.translate(this.zt, this.Bt), 0 != this.angle && a.wb.rotate(.0174532925 * -this.angle), a.wb.scale(Math.max(.001, this.hd), Math.max(.001, this.jd)), a.wb.translate(-this.eb, -this.Za));
                var d;
                for (d = 0; d < this.children.length; d++) this.children[d].fc(a, b + this.x, c + this.y);
                this.Ci && a.wb.restore()
            }
        },
        Tf: function(a) {
            this.children.push(a)
        },
        Nu: function(a, b) {
            b >= this.children.length ? this.children.push(a) : (0 > b && (b = 0), this.children.splice(b,
                0, a))
        },
        WZ: function() {
            this.children.length = 0
        },
        removeChild: function(a) {
            var b;
            for (b = 0; b < this.children.length; b++)
                if (this.children[b] == a) return this.children.splice(b, 1), b;
            return -1
        },
        Wa: function(a) {
            var b;
            for (b = 0; b < this.children.length; b++)
                if (this.children[b] == a) return b;
            return -1
        },
        dc: function(a, b) {
            var c, d = null;
            for (c = 0; c < this.children.length; c++)
                if (this.children[c] == a) {
                    d = this.children[c];
                    break
                } null != d && (this.children.splice(c, 1), b > c && b--, 0 > b && (b = 0), b >= this.children.length ? this.children.push(a) : this.children.splice(b,
                0, a))
        }
    };
    ta.Co = 0;
    ta.ye = 1;
    ta.GN = 1;
    ta.HN = 2;
    ta.Oq = 64;
    ta.Pq = 16;
    ta.Om = 6;
    R.Y3 = 0;
    R.Z3 = 1;
    R.pi = 0;
    R.Cj = 1;
    R.tA = [65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1];
    R.PB = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
    R.tj = new P;
    R.vm = new P;
    R.gp = new P;
    R.tl = new P;
    R.prototype = {
        uz: function(a, b, c) {
            var d, e;
            this.width = b.width;
            this.height = b.height;
            this.eb = b.eb;
            this.Za = b.Za;
            var f = Math.floor((this.width + 15 & 4294967280) / 16);
            this.lineWidth = f;
            e = f * this.height +
                1;
            if ("undefined" != typeof ArrayBuffer) this.ia = new Uint16Array(new ArrayBuffer(2 * e));
            else
                for (this.ia = Array(e), d = 0; d < e; d++) this.ia[d] = 0;
            d = document.createElement("canvas");
            d.width = b.width;
            d.height = b.height;
            d = d.getContext("2d");
            0 == b.$b ? d.drawImage(b.hc, 0, 0) : d.drawImage(a.qa.wc[b.$b], b.ne, b.oe, b.width, b.height, 0, 0, b.width, b.height);
            a = d.getImageData(0, 0, this.width, this.height);
            if (0 == (c & R.Cj))
                for (c = 0; c < this.height; c++) {
                    e = c * b.width * 4 + 3;
                    var g = c * f,
                        h = 32768;
                    for (d = 0; d < this.width; d++) 0 != a.data[e] && (this.ia[g] |=
                        h), e += 4, h >>>= 1, 0 == h && (h = 32768, g++)
                } else
                    for (d = 0; d < this.width; d++) {
                        for (c = 0; c < this.height && 0 == a.data[4 * (c * b.width + d) + 3]; c++);
                        if (c < this.height)
                            for (g = Math.min(this.height, c + ta.Om), h = 32768 >> (d & 15); c < g; c++) 0 != a.data[4 * (c * b.width + d) + 3] && (e = Math.floor(c * f + (d & 4294967280) / 16), this.ia[e] |= h)
                    }
        },
        vz: function(a, b, c) {
            var d;
            this.width = b.width;
            this.height = b.height;
            this.eb = b.eb;
            this.Za = b.Za;
            this.lineWidth = a = Math.floor((this.width + 15 & 4294967280) / 16);
            b = a * this.height + 1;
            this.ia = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 *
                b)) : Array(b);
            b = this.height;
            0 != (c & R.Cj) && b > ta.Om && (b = ta.Om);
            var e = a,
                f = 0;
            0 != (this.width & 15) && (f = 65535 << 16 - (this.width & 15) & 65535, e--);
            for (d = 0; d < b; d++) {
                var g = d * a;
                for (c = 0; c < e; c++) this.ia[g++] = 65535;
                0 != f && (this.ia[g] = f)
            }
        },
        e_: function(a, b, c) {
            var d, e, f;
            90 == c ? (c = 0, f = 1) : 180 == c ? (c = -1, f = 0) : 270 == c ? (c = 0, f = -1) : (f = c * Math.PI / 180, c = Math.cos(f), f = Math.sin(f));
            var g, h;
            null == b ? (e = h = 0, R.tj.x = R.tj.y = 0) : (g = -b.x * c, d = -b.x * f, e = -b.y * c, h = -b.y * f, R.tj.x = Math.floor(g + h), R.tj.y = Math.floor(e - d));
            d = null == b ? a.right : a.right - b.x;
            g = d *
                c;
            d *= f;
            R.vm.x = Math.floor(g + h);
            R.vm.y = Math.floor(e - d);
            e = null == b ? a.bottom : a.bottom - b.y;
            R.tl.x = Math.floor(g + e * f);
            R.tl.y = Math.floor(e * c - d);
            R.gp.x = R.tj.x + R.tl.x - R.vm.x;
            R.gp.y = R.tj.y + R.tl.y - R.vm.y;
            c = Math.min(R.tj.x, Math.min(R.vm.x, Math.min(R.tl.x, R.gp.x)));
            f = Math.min(R.tj.y, Math.min(R.vm.y, Math.min(R.tl.y, R.gp.y)));
            g = Math.max(R.tj.x, Math.max(R.vm.x, Math.max(R.tl.x, R.gp.x)));
            d = Math.max(R.tj.y, Math.max(R.vm.y, Math.max(R.tl.y, R.gp.y)));
            null != b && (b.x = -c, b.y = -f);
            a.right = g - c;
            a.bottom = d - f
        },
        yV: function(a, b, c, d) {
            var e,
                f, g = a.width;
            e = a.height;
            var h = new ja;
            h.right = Math.floor(a.width * c);
            h.bottom = Math.floor(a.height * d);
            var p = new P;
            p.x = Math.floor(a.eb * c);
            p.y = Math.floor(a.Za * d);
            this.e_(h, p, b);
            var k = h.right,
                h = h.bottom;
            if (0 >= k || 0 >= h) return !1;
            var l = a.lineWidth,
                m = (k + 15 & 2147483632) / 16;
            this.ia = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 * (m * h + 1))) : Array(m * h + 1);
            var q;
            for (q = m * h; 0 <= q; q--) this.ia[q] = 0;
            this.lineWidth = m;
            this.width = k;
            this.height = h;
            this.eb = p.x;
            this.Za = p.y;
            b *= .017453292;
            f = Math.cos(b);
            var n = Math.sin(b);
            b = 0;
            p = Math.floor(65536 * (g / 2 - (k / 2 * f - h / 2 * n) / c));
            q = Math.floor(65536 * (e / 2 - (k / 2 * n + h / 2 * f) / d));
            var t = Math.floor(65536 * f / c),
                u = Math.floor(65536 * n / d),
                A = k / 16,
                k = k % 16;
            d = Math.floor(65536 * f / d);
            c = Math.floor(65536 * n / c);
            var g = 65536 * g,
                n = 65536 * e,
                v, z;
            for (f = 0; f < h; f++) {
                var B = p,
                    C = q,
                    D = b,
                    w;
                for (e = 0; e < A; e++) {
                    var E = 0;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 32768));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v =
                        32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 16384));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 8192));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 4096));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 2048));
                    B += t;
                    C += u;
                    0 <=
                        B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 1024));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 512));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 256));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16,
                        z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 128));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 64));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 32));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 16));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n &&
                        (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 8));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 4));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w / 16)], 0 != (z & v) && (E |= 2));
                    B += t;
                    C += u;
                    0 <= B && B < g && 0 <= C && C < n && (w = Math.floor(B / 65536), z = Math.floor(C / 65536), v = 32768 >>> w % 16, z = a.ia[Math.floor(z * l + w /
                        16)], 0 != (z & v) && (E |= 1));
                    B += t;
                    C += u;
                    this.ia[D++] = E
                }
                if (0 != k) {
                    E = 32768;
                    for (e = w = 0; e < k; e++, E = E >> 1 & 32767) {
                        if (0 <= B && B < g && 0 <= C && C < n) {
                            z = Math.floor(B / 65536);
                            var F = Math.floor(C / 65536);
                            v = 32768 >>> z % 16;
                            z = a.ia[Math.floor(F * l + z / 16)];
                            0 != (z & v) && (w |= E)
                        }
                        B += t;
                        C += u
                    }
                    this.ia[D] = w
                }
                b += m;
                p -= c;
                q += d
            }
            return !0
        },
        tm: function(a, b, c, d, e, f, g) {
            var h, p, k;
            a <= e ? (h = this, k = Math.floor(c), c = Math.floor(g), p = Math.floor(a), g = Math.floor(b), a = Math.floor(e), b = Math.floor(f)) : (h = d, d = this, k = Math.floor(g), c = Math.floor(c), p = Math.floor(e), g = Math.floor(f),
                a = Math.floor(a), b = Math.floor(b));
            f = h.height;
            var l = 0;
            0 != k && (f = k, g += h.height - k, l = h.height - k);
            e = d.height;
            var m = 0;
            0 != c && (e = c, b += d.height - c, m = d.height - c);
            if (p >= a + d.width || p + h.width <= a || g >= b + e || g + f < b) return !1;
            c = a - p;
            k = Math.floor(c / 16);
            c %= 16;
            p = Math.min(p + h.width - a, d.width);
            p = Math.floor((p + 15) / 16);
            g <= b ? (a = b - g + l, l = m, g = Math.min(g + f, b + e) - b) : (a = l, l = g - b + m, g = Math.min(g + f, b + e) - g);
            b = a * h.lineWidth;
            e = l * d.lineWidth;
            if (0 != c) switch (p) {
                case 1:
                    for (a = 0; a < g; a++) {
                        l = h.ia[b + k] << c;
                        if (0 != (l & d.ia[e]) || k + 1 < h.lineWidth && (l = h.ia[b +
                                k + 1] << c, l >>>= 16, 0 != (l & d.ia[e]))) return !0;
                        b += h.lineWidth;
                        e += d.lineWidth
                    }
                    break;
                case 2:
                    for (a = 0; a < g; a++) {
                        l = h.ia[b + k] << c;
                        if (0 != (l & d.ia[e])) return !0;
                        l = h.ia[b + k + 1] << c;
                        m = l >>> 16;
                        if (0 != (m & d.ia[e]) || 0 != (l & d.ia[e + 1]) || k + 2 < h.lineWidth && (l = h.ia[b + k + 2] << c, l >>>= 16, 0 != (l & d.ia[e + 1]))) return !0;
                        b += h.lineWidth;
                        e += d.lineWidth
                    }
                    break;
                default:
                    for (a = 0; a < g; a++) {
                        l = h.ia[b + k] << c;
                        if (0 != (l & d.ia[e])) return !0;
                        for (f = 0; f < p - 1; f++)
                            if (l = h.ia[b + k + f + 1] << c, m = l >>> 16, 0 != (m & d.ia[e + f]) || 0 != (l & d.ia[e + f + 1])) return !0;
                        if (k + f + 1 < h.lineWidth && (l = h.ia[b +
                                k + f + 1] << c, l >>>= 16, 0 != (l & d.ia[e + f]))) return !0;
                        b += h.lineWidth;
                        e += d.lineWidth
                    }
            } else
                for (a = 0; a < g; a++) {
                    for (f = 0; f < p; f++)
                        if (l = h.ia[b + k + f], 0 != (d.ia[e + f] & l)) return !0;
                    b += h.lineWidth;
                    e += d.lineWidth
                }
            return !1
        },
        yC: function(a, b, c, d, e, f, g, h) {
            a = Math.floor(a);
            b = Math.floor(b);
            d = Math.floor(d);
            e = Math.floor(e);
            var p = 0,
                k = this.height;
            0 < c && (p = this.height - c, b += p, k = c);
            c = g;
            0 < h && (e += g - h, c = h);
            if (a >= d + f || a + this.width <= d || b >= e + c || b + k < e) return !1;
            a <= d ? (g = d - a, a = Math.min(this.width - g, f)) : (g = 0, a = Math.min(d + f - a, this.width));
            b <= e ? (p = e -
                b + p, b = Math.min(b + k, e + c) - e) : b = Math.min(b + k, e + c) - b;
            e = Math.floor(g / 8);
            k = Math.floor((g + a + 15) / 16) - Math.floor(g / 16);
            for (f = 0; f < b; f++) switch (d = (f + p) * this.lineWidth, k) {
                case 1:
                    c = R.tA[g & 15] & R.PB[(g + a - 1 & 15) + 1];
                    if (0 != (this.ia[d + e] & c)) return !0;
                    break;
                case 2:
                    c = R.tA[g & 15];
                    if (0 != (this.ia[d + e] & c)) return !0;
                    c = R.PB[(g + a - 1 & 15) + 1];
                    if (0 != (this.ia[d + e + 1] & c)) return !0;
                    break;
                default:
                    c = R.tA[g & 15];
                    if (0 != (this.ia[d + e] & c)) return !0;
                    for (h = 1; h < k - 1; h++)
                        if (0 != this.ia[d + e + h]) return !0;
                    c = R.PB[(g + a - 1 & 15) + 1];
                    if (0 != (this.ia[d + e + h] & c)) return !0
            }
            return !1
        },
        Cq: function(a, b, c, d) {
            a = Math.floor(c - a);
            b = Math.floor(d - b);
            return 0 > a || a >= this.width || 0 > b || b >= this.height ? !1 : 0 != (this.ia[b * this.lineWidth + Math.floor(a / 16)] & 32768 >>> (a & 15)) ? !0 : !1
        },
        XK: function(a, b, c, d, e) {
            a = Math.floor(a);
            b = Math.floor(b);
            var f = a,
                g = b;
            if (0 == c) {
                if (1 != d || 1 != e) f = Math.floor(f / d), g = Math.floor(g / e)
            } else if (f = 3.141592653589 * c / 180, c = Math.cos(f), g = Math.sin(f), f = a * c - b * g, g = b * c + a * g, 1 != d || 1 != e) f /= d, g /= e;
            f += this.eb;
            g += this.Za;
            a = Math.floor(f);
            b = Math.floor(g);
            return 0 > a || a >= this.width || 0 > b || b >= this.height ?
                !1 : 0 != (this.ia[b * this.lineWidth + Math.floor(a / 16)] & 32768 >>> (a & 15)) ? !0 : !1
        }
    };
    D.vi = 1;
    D.ZR = 2;
    D.Hy = 4;
    D.wi = 16;
    D.xi = 32;
    D.Wm = 64;
    D.Pj = 128;
    D.c4 = 0;
    D.b4 = 1;
    D.kN = 0;
    D.kg = 1;
    D.lN = 2;
    D.UC = 3;
    D.jN = 4;
    D.nN = 5;
    D.G0 = 6;
    D.H0 = 7;
    D.E0 = 8;
    D.RC = 9;
    D.mN = 10;
    D.oN = 11;
    D.F0 = 12;
    D.SC = 13;
    D.I0 = 13;
    D.Lq = 4095;
    D.Cm = 4096;
    D.TC = 8192;
    D.prototype = {
        YX: function(a, b, c) {
            this.a = a;
            this.qo = c.FF;
            this.mx = c.IF;
            this.aa = 0;
            this.aa |= D.Wm;
            0 == (this.a.Yg & Y.rf) && (this.aa &= ~D.Wm);
            0 != (this.a.La.Rn & E.cr) && (this.aa |= D.Pj);
            0 != (c.av & k.Do) ? (this.aa |= D.vi, this.a.Pa == v.Nj && (this.a.Z |=
                N.Fj, this.aa &= ~D.Wm)) : this.aa |= D.xi;
            this.qb = this.a.La.lJ;
            this.nb = this.a.La.kJ;
            this.a.c.zc == aa.FR && (this.aa |= D.ZR)
        },
        Kv: function(a) {
            this.WF(a);
            a && this.a.ka.Sp && (this.a.Z |= N.Yk)
        },
        handle: function() {
            var a = this.a.b,
                b, c, d, e;
            0 != (this.a.Z & N.Yk) ? (this.pj || this.np(!1), this.sZ()) : 0 != (this.a.Z & N.Zk) ? this.tZ() : 0 == (this.aa & D.Hy) ? (0 != this.po && (this.xq -= a.uq, 0 > this.xq && (this.xq = this.po, 0 == (this.aa & D.xi) ? (this.aa |= D.xi, this.hB()) : (this.aa &= ~D.xi, this.Pp()))), null != this.a.D && this.a.D.move(), 0 == this.a.c.Ik && (0 != (this.a.Oa &
                E.Vm) ? 0 == (this.a.Oa & E.vE) && 0 != (a.h.Sa & m.CM) && (b = this.a.s - this.a.Ea, c = this.a.o - this.a.Fa, d = b + this.a.S, e = c + this.a.T, (d < a.lq || b > a.jq || e < a.pq || c > a.nq) && a.Mh(this.a.ea)) : (b = this.a.s - this.a.Ea, c = this.a.o - this.a.Fa, d = b + this.a.S, e = c + this.a.T, d >= a.kq && b <= a.iq && e >= a.oq && c <= a.mq || (d >= a.lq && b <= a.jq && e >= a.pq && c <= a.nq ? (this.aa |= D.Hy, this.mx = this.a.Vj()) : 0 == (this.a.Oa & E.vE) && a.Mh(this.a.ea))))) : (b = this.a.s - this.a.Ea, c = this.a.o - this.a.Fa, d = b + this.a.S, e = c + this.a.T, d >= a.kq && b <= a.iq && e >= a.oq && c <= a.mq && (this.aa &= ~D.Hy,
                this.Kv(!1), this.a.dc(this.mx)))
        },
        WF: function() {
            0 != (this.a.Oa & E.dl) ? this.a.Ry(this.a.s - this.a.b.da, this.a.o - this.a.b.fa, this.a.c.Ma, this.qo, 0 == (this.aa & D.vi)) : (this.a.Z |= N.UQ, this.a.cp(this.a.s - this.a.b.da, this.a.o - this.a.b.fa, this.qo, 0 != (this.a.Oa & E.By), 0 == (this.aa & D.vi), -1));
            this.a.qj(this.qb, this.nb)
        },
        np: function(a) {
            this.a.Z &= ~(N.Yk | N.Zk);
            if (0 == a) {
                if (!this.a.ka.Sp) return !1;
                this.a.Z |= N.Yk
            } else {
                if (!this.a.ka.zs) return !1;
                this.a.Z |= N.Zk
            }
            this.pj = this.a.b.h.aA().P_(this.a, a);
            return this.pj ? !0 : (this.a.Z &=
                ~(N.Yk | N.Zk), !1)
        },
        sZ: function() {
            if (0 != (this.a.Z & N.Yk)) {
                if (this.pj.Mv()) return this.a.Z &= ~N.Yk, this.pj = this.a.yo = null, 32 <= this.a.Pa && hoPtr.ext.rr(), !1;
                this.pj.Mc(w.Ky);
                return !0
            }
            return !1
        },
        tZ: function() {
            if (0 != (this.a.Z & N.Zk)) {
                if (this.pj.Mv()) return this.yo = this.pj = null, this.a.b.Mh(this.a.ea), !1;
                this.pj.Mc(w.Ju);
                return !0
            }
            return !1
        },
        ZX: function() {
            return this.np(!0) ? (this.a.Z |= N.Fj, !0) : !1
        },
        qc: function() {
            this.mx = this.a.Vj()
        },
        Pp: function() {
            0 == (this.aa & D.vi) && (this.aa |= D.vi, this.a.c.Y = !0, this.a.Gl())
        },
        hB: function() {
            0 !=
                (this.aa & D.vi) && (this.a.b.u.sa[this.a.Ka].Sa & (da.Sq | da.Tq)) == da.Tq && (this.aa &= ~D.vi, this.a.Z &= ~N.Fj, this.a.c.Y = !0, this.a.qm())
        },
        nx: function(a) {
            this.aa = a ? this.aa | D.Wm : this.aa & ~D.Wm
        },
        $A: function(a, b) {
            this.qb = a;
            this.nb = b
        }
    };
    Dh.prototype = {
        load: function(a) {
            this.Lp = a.v();
            this.Ra = Array(this.Lp);
            var b;
            for (b = 0; b < this.Lp; b++) this.Ra[b] = a.cb()
        }
    };
    Eh.prototype = {
        load: function(a, b) {
            this.Mp = a.v();
            this.values = Array(this.Mp);
            var c;
            for (c = 0; c < this.Mp; c++) this.values[c] = a.C();
            b && (this.V = a.C())
        }
    };
    cb.JS = 26;
    cb.eS = 10;
    cb.prototype = {
        ua: function(a, b) {
            this.nc = 0;
            var c = cb.JS;
            null != b.nk && b.nk.Mp > c && (c = b.nk.Mp);
            this.ob = Array(c);
            c = cb.eS;
            null != b.Vl && b.Vl.Lp > c && (c = b.Vl.Lp);
            this.we = Array(c);
            for (c = 0; c < this.ob.length; c++) this.ob[c] = 0;
            for (c = 0; c < this.we.length; c++) this.we[c] = "";
            if (null != b.nk)
                for (this.nc = b.nk.V, c = 0; c < b.nk.Mp; c++) this.ob[c] = b.nk.values[c];
            if (null != b.Vl)
                for (c = 0; c < b.Vl.Lp; c++) this.we[c] = b.Vl.Ra[c]
        },
        qc: function() {
            var a;
            for (a = 0; a < this.ob.length; a++) this.ob[a] = 0;
            for (a = 0; a < this.we.length; a++) this.we[a] = null
        },
        zn: function(a) {
            return a <
                this.ob.length ? this.ob[a] : 0
        },
        pH: function(a) {
            return a < this.we.length ? this.we[a] : ""
        },
        FK: function(a, b) {
            a >= this.R.ob.length && this.Fl(a + 10);
            this.ob[a] = b
        },
        Fl: function(a) {
            if (a > this.ob.length) {
                var b;
                for (b = this.ob.length; b < a; b++) this.ob[b] = 0
            }
        },
        wH: function(a) {
            if (a > this.we.length) {
                var b;
                for (b = this.we.length; b < a; b++) this.we[b] = ""
            }
        }
    };
    jb.Qg = 32;
    jb.prototype = {
        wV: function() {
            this.qn = Array(15);
            this.sw = Array(15);
            var a;
            for (a = 0; 15 > a; a++) this.qn[a] = null, this.sw[a] = 0;
            a = new Da;
            a.handle = 0;
            this.zi(a);
            a = new Da;
            a.handle = 3;
            this.zi(a);
            a = new Da;
            a.handle = 4;
            this.zi(a);
            a = new Da;
            a.handle = 5;
            this.zi(a);
            a = new Da;
            a.handle = 6;
            this.zi(a);
            a = new Da;
            a.handle = 7;
            this.zi(a);
            a = new Da;
            a.handle = 8;
            this.zi(a);
            a = new Da;
            a.handle = 10;
            this.zi(a);
            a = new Da;
            a.handle = 12;
            this.zi(a);
            a = new Da;
            a.handle = 13;
            this.zi(a)
        },
        zi: function(a) {
            var b = a.Xv();
            null != b && (this.qn[a.handle] = a, this.sw[a.handle] = b.zg())
        },
        Xv: function(a) {
            a -= jb.Qg;
            var b = null;
            a < this.qn.length && null != this.qn[a] && (b = this.qn[a].Xv());
            return b
        },
        zg: function(a) {
            a -= jb.Qg;
            return a < this.qn.length ? this.sw[a] : 0
        }
    };
    Da.prototype = {
        Xv: function() {
            switch (this.handle) {
                case 0:
                    return new eb;
                case 3:
                    return new q;
                case 4:
                    return new wa;
                case 5:
                    return new M;
                case 6:
                    return new ea;
                case 7:
                    return new W;
                case 8:
                    return new u;
                case 10:
                    return new za;
                case 12:
                    return new K;
                case 13:
                    return new V
            }
            return null
        }
    };
    va.Gy = 1;
    va.CE = 2;
    va.prototype = {
        ua: function(a) {
            this.f = a;
            this.l = a.b
        },
        zg: function() {
            return 0
        },
        Kh: function() {
            return !1
        },
        Zj: function() {
            return va.CE
        },
        tG: function() {},
        kv: function() {},
        UF: function() {},
        Bw: function() {},
        rr: function() {},
        Ug: function() {
            return !1
        },
        action: function() {},
        Xg: function() {
            return null
        },
        nH: function() {
            return null
        },
        CK: function() {},
        Bv: function() {
            return 0
        },
        qx: function() {},
        nl: function() {},
        up: function() {}
    };
    Fh.prototype = {
        evaluate: function(a) {
            var b = a.g.gc(this.la);
            if (null == b) a.P[a.K] = 0;
            else {
                var c = (this.code >> 16) - S.lg;
                a.tr = this;
                a.P[a.K] = b.Xg(c)
            }
        }
    };
    Gh.prototype = {
        N: function(a) {
            var b = a.g.oa(this);
            if (null != b) {
                var c = (this.ya >>> 16) - S.lg;
                a.tr = this;
                b.action(c, this)
            }
        },
        vb: function(a, b) {
            return a.g.dA(this.i[b].la, this)
        },
        Zz: function(a, b) {
            return this.i[b].value
        },
        Tr: function(a, b) {
            var c = new Ia;
            this.i[b].Jk(a, 0, c) && (c.Lr = !0);
            return c
        },
        BX: function(a, b) {
            return this.i[b]
        },
        G: function(a, b) {
            return a.W(this.i[b])
        },
        Rr: function(a, b) {
            return 24 == this.i[b].code ? this.i[b].color : l.Qk(a.W(this.i[b]))
        },
        Eb: function(a, b) {
            return a.Ld(this.i[b])
        },
        Sr: function(a, b) {
            return 40 == this.i[b].code ? this.i[b].Rb : a.Ld(this.i[b])
        },
        Li: function(a, b) {
            return a.Rc(this.i[b])
        },
        kH: function(a, b) {
            var c = this.i[b];
            return 0 != c.data ? a.h.file.Jh(c.data) : null
        },
        lH: function(a, b) {
            return 2 == this.i[b].code ? this.i[b].kc :
                a.W(this.i[b])
        }
    };
    Hh.prototype = {
        ba: function(a, b) {
            if (null == b) return this.L(a);
            b.Z |= N.Rf;
            var c = -(this.ya >> 16) - S.lg - 1;
            a.tr = this;
            return b.Ug(c, this) ? (a.g.Wg(b), !0) : !1
        },
        L: function(a) {
            var b = a.g.ie(this.va),
                c = a.g.pc,
                d = -(this.ya >> 16) - S.lg - 1;
            for (a.tr = this; null != b;) b.Z &= ~N.Rf, b.Ug(d, this) ? 0 != (this.Ve & ba.Km) && (c--, a.g.nd()) : 0 == (this.Ve & ba.Km) && (c--, a.g.nd()), b = a.g.Kd();
            return 0 != c ? !0 : !1
        },
        vb: function(a, b) {
            return this.i[b]
        },
        lH: function(a, b) {
            return 2 == this.i[b].code ? this.i[b].kc : a.W(this.i[b])
        },
        Zz: function(a, b) {
            return this.i[b].value
        },
        Tr: function(a, b) {
            var c = new Ia;
            this.i[b].Jk(a, 0, c) && (c.Lr = !0);
            return c
        },
        G: function(a, b) {
            return a.W(this.i[b])
        },
        Rr: function(a, b) {
            return 24 == this.i[b].code ? this.i[b].color : l.Qk(a.W(this.i[b]))
        },
        Eb: function(a, b) {
            return a.Ld(this.i[b])
        },
        qr: function(a, b, c) {
            a = this.i[b];
            return k.Fi(c, a.kc, a.tg)
        }
    };
    db.prototype = l.extend(new va, {
        up: function() {
            this.setPosition(this.f.s, this.f.o)
        },
        nl: function() {
            this.setPosition(this.f.s, this.f.o);
            this.so(this.f.S, this.f.T)
        },
        pC: function(a, b) {
            this.element = a;
            a.style.position = "absolute";
            this.so(this.f.S, this.f.T);
            this.setPosition(this.f.s, this.f.o);
            this.Oz && this.wh(this.Oz);
            this.$y = this.f.Ja = b;
            this.l.h.Ri ? (a.style.visibility = "hidden", this.$y = !1) : a.style.visibility = b ? "visible" : "hidden";
            this.l.h.rz.appendChild(a)
        },
        rH: function() {
            return this.l.h.canvas ? this.l.h.canvas.offsetLeft : 0
        },
        sH: function() {
            return this.l.h.canvas ? this.l.h.canvas.offsetTop : 0
        },
        uo: function(a) {
            this.bG = a;
            this.f.uo(a);
            this.element && (this.element.style.left = this.rH() + this.l.h.ym + (this.f.s - this.f.b.da) * this.l.h.hd + "px")
        },
        vo: function(a) {
            this.cG = a;
            this.f.vo(a);
            this.element && (this.element.style.top = this.sH() + this.l.h.zm + (this.f.o - this.f.b.fa) * this.l.h.jd + "px")
        },
        setPosition: function(a, b) {
            this.bG = a;
            this.cG = b;
            this.f.setPosition(a, b);
            this.element && (this.element.style.left = this.rH() + this.l.h.ym + (this.f.s - this.f.b.da) * this.l.h.hd + "px", this.element.style.top = this.sH() + this.l.h.zm + (this.f.o - this.f.b.fa) * this.l.h.jd + "px")
        },
        pm: function(a) {
            this.aG = a;
            this.f.pm(a);
            this.element && (this.element.style.width = this.f.S * this.l.h.hd + "px")
        },
        nm: function(a) {
            this.$F = a;
            this.f.nm(a);
            this.element && !this.MF && (this.element.style.height = this.f.T * this.l.h.jd + "px")
        },
        so: function(a, b) {
            this.aG = a;
            this.$F = b;
            this.f.so(a, b);
            this.element && (this.element.style.width = this.f.S * this.l.h.hd + "px", this.MF || (this.element.style.height = this.f.T * this.l.h.jd + "px"))
        },
        wh: function(a) {
            this.Oz = a;
            this.element && (this.element.style.font = a.Ph())
        },
        kv: function() {
            this.element && this.l.h.rz.removeChild(this.element)
        },
        nH: function() {
            return this.Oz
        },
        CK: function(a) {
            this.wh(a)
        },
        Zj: function() {
            this.l.h.Ri ||
                this.f.Ja == this.$y || (this.$y = this.f.Ja, this.element && (this.element.style.visibility = this.f.Ja ? "visible" : "hidden"));
            this.f.s == this.bG && this.f.o == this.cG || this.setPosition(this.f.s, this.f.o);
            this.f.S == this.aG && this.f.T == this.$F || this.so(this.f.S, this.f.T);
            return 0
        }
    });
    aa.FR = 0;
    aa.zy = 1;
    aa.ER = 2;
    aa.a3 = 3;
    aa.Z2 = 4;
    aa.jE = 5;
    aa.pu = 9;
    aa.DR = 11;
    aa.Y2 = 12;
    aa.iE = 13;
    aa.Ch = 14;
    aa.prototype = {
        setData: function(a, b, c, d, e) {
            this.qs = a;
            this.Mn = b;
            this.ZI = c;
            this.YI = d;
            this.ow = e
        }
    };
    Ih.prototype = {
        load: function(a) {
            var b = a.ma;
            this.On =
                a.C();
            this.pe = Array(this.On);
            var c;
            for (c = 0; c < this.On; c++) {
                a.seek(b + 4 + 16 * c);
                var d = a.C(),
                    e = a.C(),
                    f = a.C(),
                    g = a.C();
                a.seek(b + f);
                var f = a.v(),
                    h = a.v(),
                    p = a.lb(),
                    k = a.lb();
                a.wa(2);
                var l = a.C();
                switch (h) {
                    case 0:
                        this.pe[c] = new Qh;
                        break;
                    case 1:
                        this.pe[c] = new Lh;
                        break;
                    case 2:
                        this.pe[c] = new Ph;
                        break;
                    case 3:
                        this.pe[c] = new Kh;
                        break;
                    case 4:
                        this.pe[c] = new Jh;
                        break;
                    case 5:
                        this.pe[c] = new Mh;
                        break;
                    case 9:
                        this.pe[c] = new Oh;
                        break;
                    case 14:
                        this.pe[c] = new Rh
                }
                this.pe[c].setData(h, f, p, l, k);
                this.pe[c].load(a, g - 12);
                14 == h && (a.seek(b +
                    d), d = a.cb(), d = d.substring(0, d.length - 4), d = d.toLowerCase(), this.pe[c].z_(d, e))
            }
        }
    };
    Jh.prototype = l.extend(new aa, {
        load: function(a) {
            this.ms = a.v();
            this.mI = a.v();
            this.lI = a.v();
            this.oI = a.v();
            this.nI = a.v()
        }
    });
    Kh.prototype = l.extend(new aa, {
        load: function(a) {
            this.vI = a.v();
            this.sI = a.v();
            this.tI = a.v();
            a.v();
            this.uI = a.C()
        }
    });
    Lh.prototype = l.extend(new aa, {
        load: function(a) {
            this.wI = a.ra();
            this.yI = a.ra();
            this.xI = a.ra();
            this.zI = a.ra();
            a.v()
        }
    });
    Mh.prototype = l.extend(new aa, {
        load: function(a) {
            this.Ip = a.v();
            this.TI = a.v();
            this.SI = a.v();
            this.dB = a.lb();
            this.VI = a.lb();
            this.XI = a.lb();
            a.wa(1);
            this.Qb = Array(this.Ip);
            var b, c, d;
            for (b = 0; b < this.Ip; b++) d = a.ma, this.Qb[b] = new Nh, a.Va(), c = a.Va(), this.Qb[b].load(a), a.seek(d + c)
        }
    });
    Nh.prototype = {
        load: function(a) {
            this.rI = a.lb();
            this.VA = a.lb();
            this.WA = a.ra();
            this.XA = a.ra();
            this.UA = a.ra();
            this.ZA = a.ra();
            this.qI = a.v();
            this.YA = a.v();
            a = a.cb();
            0 < a.length && (this.Zf = a)
        }
    };
    Oh.prototype = l.extend(new aa, {
        load: function(a) {
            this.LI = a.v();
            this.GI = a.v();
            this.HI = a.v();
            this.KI = a.v();
            this.II = a.v();
            this.JI =
                a.v()
        }
    });
    Ph.prototype = l.extend(new aa, {
        load: function(a) {
            this.QI = a.v();
            this.bB = a.v();
            this.cB = a.v();
            this.OI = a.v();
            a.v();
            this.MI = a.v();
            this.NI = a.v()
        }
    });
    Qh.prototype = l.extend(new aa, {
        load: function() {}
    });
    Rh.prototype = l.extend(new aa, {
        load: function(a) {
            a.wa(14);
            this.data = a.ma
        },
        z_: function(a) {
            this.Xh = a;
            if (l.Hb(this.Xh, "box2d8directions") || l.Hb(this.Xh, "box2dspring") || l.Hb(this.Xh, "box2dspaceship") || l.Hb(this.Xh, "box2dstatic") || l.Hb(this.Xh, "box2dracecar") || l.Hb(this.Xh, "box2daxial") || l.Hb(this.Xh, "box2dplatform") ||
                l.Hb(this.Xh, "box2dbouncingball") || l.Hb(this.Xh, "box2dbackground")) this.Nv = !0
        }
    });
    T.Gm = [256, 251, 236, 212, 181, 142, 97, 49, 0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251];
    T.Xm = [0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251, 256, 251, 236, 212, 181, 142, 97, 49];
    T.VS = [2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 320, 336, 352, 368, 384, 400, 416, 432, 448, 480,
        512, 544, 560, 592, 624, 640, 672, 688, 720, 736, 768, 784, 816, 848, 864, 896, 928, 944, 976, 992, 1024, 1120, 1216, 1312, 1440, 1536, 1632, 1728, 1824, 1952, 2048, 2240, 2432, 2688, 2880, 3072, 3264, 3456, 3712, 3904, 4096, 6544, 4914, 5216, 5732, 6144, 6553, 6962, 7366, 7780, 8192, 9836, 11672, 13316, 14960, 16604, 18248, 19892, 21504, 25600, 25600
    ];
    T.iR = [-1, 8, 24, -1, 16, 12, 20, 16, 0, 4, 28, 0, -1, 8, 24, -1];
    T.Eo = [2599, 0, 844, 31, 479, 30, 312, 29, 210, 28, 137, 27, 78, 26, 25, 25, 0, 24];
    T.dh = [0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, -4, 0, -8, 0, 0, 0, -2, -2, 2, 2, -4, -4, 4, 4, -8, -8, 8, 8, -4, 4, -8, 8, 0, 0,
        -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, 0, 0, 4, 0, 8, 0, 0, -2, 2, 2, -2, -4, 4, 4, -4, -8, 8, 8, -8, 4, 4, 8, 8, 0, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 4, 0, 8, 0, 0, 0, 2, 2, -2, -2, 4, 4, -4, -4, 8, 8, -8, -8, 4, -4, 8, -8, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 0, 0, -4, 0, -8, 0, 0, 2, -2, -2, 2, 4, -4, -4, 4, 8, -8, -8, 8, -4, -4, -8, -8, 0, 0
    ];
    T.Zq = 1;
    T.tX = function(a, b) {
        return a * T.Gm[b] / 256
    };
    T.uX = function(a, b) {
        return a * T.Xm[b] / 256
    };
    T.prototype = {
        Rl: function(a, b) {
            this.a.b.qd++;
            this.Ke = this.a.b.qd;
            this.a.D.pa = !1;
            if (0 == a) return this.a.b.Eg(this.a), !1;
            var c, d, e;
            for (e = 0 != (this.a.b.u.vc & O.td) ? Math.floor(a *
                    this.a.b.fd * 32) : a << 5; 2048 < e;) {
                c = 65536 * this.a.s + (this.a.Mi & 65535);
                d = 65536 * this.a.o + (this.a.Ni & 65535);
                c += 2048 * T.Gm[b];
                d += 2048 * T.Xm[b];
                this.a.Mi = c & 65535;
                this.a.s = Math.floor(c / 65536);
                this.a.Ni = d & 65535;
                this.a.o = Math.floor(d / 65536);
                if (this.a.b.Eg(this.a)) return !0;
                if (this.a.D.pa) break;
                e -= 2048
            }
            if (!this.a.D.pa && (c = 65536 * this.a.s + (this.a.Mi & 65535), d = 65536 * this.a.o + (this.a.Ni & 65535), c += T.Gm[b] * e, d += T.Xm[b] * e, this.a.Mi = c & 65535, this.a.s = Math.floor(c / 65536), this.a.Ni = d & 65535, this.a.o = Math.floor(d / 65536), this.a.b.Eg(this.a))) return !0;
            this.a.c.Y = !0;
            this.a.D.pa || (this.a.b.no = 0);
            return this.a.D.pa
        },
        ps: function(a) {
            0 == a.ZI && this.stop()
        },
        Bl: function(a) {
            return 100 >= a ? T.VS[a] : a << 8
        },
        rs: function(a) {
            if (a) this.pI(!1);
            else switch (this.a.b.g.ix & 4294901760) {
                case -786432:
                    a = this.a.s - this.a.Ea;
                    var b = this.a.o - this.a.Fa,
                        c = this.a.b.Yn(a, b, a + this.a.S, b + this.a.T);
                    a = this.a.s;
                    b = this.a.o;
                    0 != (c & k.yj) && (a = this.a.Ea);
                    0 != (c & k.zj) && (a = this.a.b.jf - this.a.S + this.a.Ea);
                    0 != (c & k.Aj) && (b = this.a.Fa);
                    0 != (c & k.xj) && (b = this.a.b.kf - this.a.T + this.a.Fa);
                    this.a.s = a;
                    this.a.o =
                        b;
                    break;
                case -851968:
                case -917504:
                    a = 18 * (this.a.b.mc(this.a) >> 2);
                    do {
                        if (this.vj(this.a.s + T.dh[a], this.a.o + T.dh[a + 1], !1)) {
                            this.a.s += T.dh[a];
                            this.a.o += T.dh[a + 1];
                            return
                        }
                        a += 2
                    } while (0 != T.dh[a] || 0 != T.dh[a + 1]);
                    this.a.s = this.a.c.Gk;
                    this.a.o = this.a.c.Hk;
                    this.a.c.Ma = this.a.c.Uw;
                    this.a.c.Ua = this.a.c.Tw
            }
        },
        pI: function(a) {
            switch (this.a.b.g.ix & 4294901760) {
                case -786432:
                    a = this.a.s - this.a.Ea;
                    var b = this.a.o - this.a.Fa,
                        c = this.a.b.Yn(a, b, a + this.a.S, b + this.a.T);
                    a = this.a.s;
                    b = this.a.o;
                    0 != (c & k.yj) && (a = this.a.Ea);
                    0 != (c & k.zj) &&
                        (a = this.a.b.jf - this.a.S + this.a.Ea);
                    0 != (c & k.Aj) && (b = this.a.Fa);
                    0 != (c & k.xj) && (b = this.a.b.kf - this.a.T + this.a.Fa);
                    this.a.s = a;
                    this.a.o = b;
                    break;
                case -851968:
                case -917504:
                    if (b = new P, this.YY(this.a.s, this.a.o, this.a.c.Gk, this.a.c.Hk, a, b)) this.a.s = b.x, this.a.o = b.y;
                    else {
                        b = 18 * (this.a.b.mc(this.a) >> 2);
                        do {
                            if (this.vj(this.a.s + T.dh[b], this.a.o + T.dh[b + 1], a)) {
                                this.a.s += T.dh[b];
                                this.a.o += T.dh[b + 1];
                                return
                            }
                            b += 2
                        } while (0 != T.dh[b] || 0 != T.dh[b + 1]);
                        0 == a && (this.a.s = this.a.c.Gk, this.a.o = this.a.c.Hk, this.a.c.Ma = this.a.c.Uw, this.a.c.Ua =
                            this.a.c.Tw)
                    }
            }
        },
        xm: function(a, b, c, d, e) {
            var f;
            f = -1;
            e && (f = this.a.Yb);
            e = this.a.La;
            if (0 != (e.ef & 15)) {
                var g = a - this.a.Ea,
                    h = b - this.a.Fa;
                if (0 != (this.a.b.Yn(g, h, g + this.a.S, h + this.a.T) & e.ef)) return !1
            }
            if (0 != (e.ef & 16) && this.a.b.vl(this.a, this.a.c.Ma, this.a.c.Ua, this.a.c.zb, this.a.c.Ab, a, b, c, d)) return !1;
            if (-1 == e.Up) return !0;
            a = this.a.b.Qp(this.a, this.a.c.Ma, this.a.c.Ua, this.a.c.zb, this.a.c.Ab, a, b, e.Yl);
            if (null == a) return !0;
            b = this.a.b.g.Dn;
            for (c = 0; c < a.size(); c++)
                if (d = a.get(c).Yb, d != f)
                    for (g = e.Up; 0 <= b[g]; g++)
                        if (b[g] ==
                            d) return !1;
            return !0
        },
        vj: function(a, b, c) {
            var d;
            d = -1;
            c && (d = this.a.Yb);
            c = this.a.La;
            if (0 != (c.ef & 15)) {
                var e = a - this.a.Ea,
                    f = b - this.a.Fa;
                if (0 != (this.a.b.Yn(e, f, e + this.a.S, f + this.a.T) & c.ef)) return !1
            }
            if (0 != (c.ef & 16) && this.a.b.vl(this.a, this.a.c.Ma, this.a.c.Ua, this.a.c.zb, this.a.c.Ab, a, b, 0, O.ye)) return !1;
            if (-1 == c.Up) return !0;
            a = this.a.b.Qp(this.a, this.a.c.Ma, this.a.c.Ua, this.a.c.zb, this.a.c.Ab, a, b, c.Yl);
            if (null == a) return !0;
            b = this.a.b.g.Dn;
            for (e = 0; e < a.size(); e++)
                if (f = a.get(e).Yb, f != d) {
                    var g;
                    for (g = c.Up; 0 <= b[g]; g++)
                        if (b[g] ==
                            f) return !1
                } return !0
        },
        Ql: function(a, b, c, d, e, f, g) {
            var h = l.ub((a + c) / 2),
                p = l.ub((b + d) / 2),
                k, m;
            do
                if (this.xm(h + this.a.b.da, p + this.a.b.fa, e, f, !1)) {
                    if (c = h, d = p, k = h, m = p, h = l.ub((c + a) / 2), p = l.ub((d + b) / 2), h == k && p == m) return c == a && d == b || !this.xm(a + this.a.b.da, b + this.a.b.fa, e, f, !1) || (h = a, p = b), g.x = h, g.y = p, !0
                } else if (a = h, b = p, k = h, m = p, h = l.ub((c + a) / 2), p = l.ub((d + b) / 2), h == k && p == m) {
                if ((c != a || d != b) && this.xm(c + this.a.b.da, d + this.a.b.fa, e, f, !1)) return g.x = c, g.y = d, !0;
                g.x = h;
                g.y = p;
                return !1
            } while (1)
        },
        YY: function(a, b, c, d, e, f) {
            var g =
                l.ub((a + c) / 2),
                h = l.ub((b + d) / 2),
                k, m;
            do
                if (this.vj(g, h, e)) {
                    if (c = g, d = h, k = g, m = h, g = l.ub((c + a) / 2), h = l.ub((d + b) / 2), g == k && h == m) return c == a && d == b || !this.vj(a, b, e) || (g = a, h = b), f.x = g, f.y = h, !0
                } else if (a = g, b = h, k = g, m = h, g = l.ub((c + a) / 2), h = l.ub((d + b) / 2), g == k && h == m) {
                if ((c != a || d != b) && this.vj(c, d, e)) return f.x = c, f.y = d, !0;
                f.x = g;
                f.y = h;
                return !1
            } while (1)
        },
        lt: function(a) {
            this.vq = a;
            this.Lf = this.Bl(a);
            this.a.c.zc == aa.Ch && this.yd.lt(a)
        },
        mt: function(a) {
            this.a.c.zc == aa.ER && (250 < a && (a = 250), 0 > a && (a = 0), this.mt(a));
            this.a.c.zc == aa.Ch &&
                this.yd.mt(a)
        },
        yq: function(a) {
            this.a.c.zc == aa.pu && (250 < a && (a = 250), 0 > a && (a = 0), this.yq(a));
            this.a.c.zc == aa.Ch && this.yd.yq(a)
        },
        Ur: function() {
            return this.a.c.zc == aa.Ch ? this.yd.Ur() : this.a.c.na
        },
        mc: function() {
            return this.a.c.zc == aa.Ch && this.yd.mc ? this.yd.mc() : this.a.c.Xa
        },
        Av: function() {
            return this.a.c.zc == aa.pu ? this.u6.ku : this.a.c.zc == aa.Ch ? this.yd.Av() : 0
        },
        qc: function() {},
        start: function() {}
    };
    Fa.TZ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 31, 0, 1, 4, 3, 2, 1,
        0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 24, 25, 26, 27, 27, 28, 28, 28, 28, 29, 29, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 16, 17, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 23, 24, 25, 28, 27, 26, 25, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 21, 22, 22, 23, 24, 24, 24, 24, 25, 26, 27, 28, 29, 30, 8, 7, 6, 5, 4, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16, 17, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 16, 15, 14, 13, 12, 11, 10, 9, 8, 12, 13, 14, 15, 15, 16, 16, 16, 16, 17, 17, 18, 19, 20,
        21, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 0, 1, 2, 0, 0, 1, 1, 2, 3, 4, 5, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 28, 29, 30, 31, 31, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 26, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 25, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 12, 13, 16, 15, 14, 13, 12,
        11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ];
    Fa.GR = [4294967292, 4294967294, 4294967295];
    Fa.XR = [-4, 4, -2, 2, -1, 1];
    Fa.YR = [-4, 4, -4, 4, -4, 4];
    Fa.prototype = l.extend(new T, {
        ua: function(a, b) {
            this.a = a;
            this.a.Mi = 0;
            this.a.Ni = 0;
            this.a.c.na = b.ms;
            this.a.c.Vb = b.ms;
            this.a.c.Fk = b.ms;
            this.Ko = b.ms << 8;
            var c =
                b.nI;
            0 != c && (c = this.Bl(c), this.a.c.Fk = 0);
            this.Lf = c;
            this.bE = b.mI;
            this.bu = b.lI;
            this.cu = Fa.GR[this.bu];
            this.bl = !1;
            this.my = -1;
            this.Jo = this.du = (100 - b.oI) / 8;
            this.ps(b);
            this.a.c.Y = !0
        },
        move: function() {
            this.a.D.km = !1;
            this.a.b.no = 1;
            this.a.c.If = F.kd;
            null != this.a.ga && this.a.ga.sg();
            if (0 != this.Lf) {
                var a = this.Ko;
                if (0 < a) {
                    var b = this.Lf;
                    0 != (this.a.b.u.vc & O.td) && (b *= this.a.b.fd);
                    a -= b;
                    0 > a && (a = 0);
                    this.Ko = a;
                    this.a.c.na = a >> 8
                }
            }
            this.Rl(this.a.c.na, this.a.b.mc(this.a))
        },
        stop: function() {
            0 == this.Lc && (this.Lc = this.a.c.na | 32768,
                this.Ko = this.a.c.na = 0, this.a.D.pa = !0)
        },
        start: function() {
            var a = this.Lc;
            0 != a && (a &= 32767, this.a.c.na = a, this.Ko = a << 8, this.Lc = 0, this.a.D.pa = !0)
        },
        Se: function() {
            if (0 == this.Lc && this.a.b.Kc != this.my) {
                this.my = this.a.b.Kc;
                this.Ke == this.a.b.qd && this.pI(this.bl);
                var a = this.a.s,
                    b = this.a.o,
                    c = 0,
                    a = a - 8,
                    b = b - 8;
                0 == this.vj(a, b, this.bl) && (c |= 1);
                a += 16;
                0 == this.vj(a, b, this.bl) && (c |= 2);
                b += 16;
                0 == this.vj(a, b, this.bl) && (c |= 4);
                0 == this.vj(a - 16, b, this.bl) && (c |= 8);
                a = Fa.TZ[32 * c + this.a.b.mc(this.a)];
                a &= this.cu;
                if (!this.ss(a)) {
                    var c =
                        b = Fa.YR[2 * this.bu + 1],
                        d = !1;
                    do {
                        a -= b;
                        a &= 31;
                        if (this.ss(a)) {
                            d = !0;
                            break
                        }
                        a += 2 * b;
                        a &= 31;
                        if (this.ss(a)) {
                            d = !0;
                            break
                        }
                        a -= b;
                        a &= 31;
                        b += c
                    } while (16 >= b);
                    if (0 == d) {
                        this.bl = !0;
                        this.a.c.Xa = this.a.b.random(32) & this.cu;
                        this.a.D.km = !0;
                        this.a.D.pa = !0;
                        return
                    }
                }
                this.bl = !1;
                this.a.c.Xa = a;
                a = this.a.b.random(100);
                if (a < this.bE && (a >>= 2, 25 > a && (a = a - 12 & 31 & this.cu, this.ss(a)))) {
                    this.a.c.Xa = a;
                    this.a.D.km = !0;
                    this.a.D.pa = !0;
                    return
                }
                a = this.a.b.mc(this.a) & 7;
                12 != this.Jo && (0 == a ? (this.Jo--, 0 > this.Jo && (a = this.a.b.mc(this.a) + Fa.XR[this.a.b.random(2) +
                    2 * this.bu], a &= 31, this.ss(a) && (this.a.c.Xa = a, this.Jo = this.du))) : this.Jo = this.du);
                this.a.D.km = !0;
                this.a.D.pa = !0
            }
        },
        ss: function(a) {
            var b = 2048 * T.Gm[a] + (65536 * this.a.s + (this.a.Mi & 65535));
            a = 2048 * T.Xm[a] + (65536 * this.a.o + (this.a.Ni & 65535));
            b = Math.floor(b / 65536);
            a = Math.floor(a / 65536);
            return this.vj(b, a, !1)
        },
        mf: function() {},
        nf: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.c.na = a;
            this.Ko = a << 8;
            this.Lc = 0;
            this.a.D.pa = !0
        },
        hi: function(a) {
            this.nf(a)
        },
        reverse: function() {
            0 == this.Lc && (this.a.D.pa = !0, this.a.c.Xa += 16, this.a.c.Xa &=
                31)
        },
        Ac: function(a) {
            this.a.s != a && (this.a.s = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        },
        Bc: function(a) {
            this.a.o != a && (this.a.o = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        }
    });
    Sh.prototype = l.extend(new T, {
        ua: function(a) {
            this.a = a;
            this.w = a.b;
            this.w.PD();
            null != this.a.A && this.a.A.nx(!1);
            null != this.a.A && (this.a.A.aa &= ~D.xi, this.a.A.Pp());
            this.eu = !0;
            this.a.Mi = 0;
            this.a.Ni = 0;
            null != this.a.ga && this.a.ga.GH(F.kd);
            this.a.c.na = 0;
            this.a.c.Cb = !0;
            this.a.c.Y = !0
        },
        Kv: function(a) {
            this.a.c.Vb = this.a.c.na;
            this.a.c.Fk =
                this.a.c.na;
            this.Lo = a;
            null != a && (a.Z |= N.QD)
        },
        qc: function() {
            this.pX(this.a)
        },
        move: function() {
            if (this.eu) {
                if (null != this.Lo.ga && this.Lo.ga.ij == F.Et) return;
                this.RK()
            }
            null != this.a.ga && this.a.ga.sg();
            this.Rl(this.a.c.na, this.a.b.mc(this.a));
            if (-64 > this.a.s || this.a.s > this.a.b.jf + 64 || -64 > this.a.o || this.a.o > this.a.b.kf + 64) this.a.Xr = !1, this.a.b.Mh(this.a.ea);
            this.a.c.Cb && (this.a.c.Cb = !1, this.a.b.Eg(this.a))
        },
        RK: function() {
            null != this.a.A && this.a.A.nx(!0);
            null != this.a.A && (this.a.A.aa |= D.xi, this.a.A.hB());
            if (null !=
                this.w.Kg) {
                var a = this.w.Ej(this.Lo);
                if (null != a) {
                    var b = this.w.Kg,
                        c = new na;
                    this.ny = c;
                    c.cR(this.a, na.CR);
                    c.VY = b.identifier;
                    this.Wq = b.F6(a.UY, this.a.c.na / 250 * 50, c);
                    c.TY = this.Wq;
                    null == this.Wq && (this.ny = null)
                }
            }
            this.eu = !1;
            this.Lo = null
        },
        pX: function() {
            null != this.Wq && (pBase = this.a.b.Kg, pBase.G6(this.Wq), this.Wq = null);
            null != this.ny && (this.ny = null)
        },
        Ac: function(a) {
            this.a.s != a && (this.a.s = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        },
        Bc: function(a) {
            this.a.o != a && (this.a.o = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        },
        mf: function() {},
        reverse: function() {},
        stop: function() {},
        start: function() {},
        Se: function() {},
        nf: function() {},
        hi: function() {}
    });
    Th.prototype = l.extend(new T, {
        ua: function(a) {
            this.a = a
        },
        move: function() {
            0 == (this.a.Z & N.Zk) && null != this.a.ga && (this.a.ga.sg(), this.a.ga.hj != F.Am + 1 && this.a.b.Mh(this.a.ea))
        },
        Ac: function(a) {
            this.a.s != a && (this.a.s = a, this.a.D.pa = !0, this.a.c.Y = !0)
        },
        Bc: function(a) {
            this.a.o != a && (this.a.o = a, this.a.D.pa = !0, this.a.c.Y = !0)
        },
        mf: function() {},
        reverse: function() {},
        stop: function() {},
        start: function() {},
        Se: function() {},
        nf: function() {},
        hi: function() {}
    });
    Uh.prototype = l.extend(new T, {
        ua: function(a, b) {
            this.a = a;
            this.a.Mi = 0;
            this.ui = this.a.Ni = 0;
            this.Gj = this.a.c.na = 0;
            this.oy = -1;
            this.a.c.Ik = b.Mn;
            this.at = b.sI;
            this.nj = this.Bl(this.at);
            this.vq = b.tI;
            this.Lf = this.Bl(this.vq);
            this.a.c.Vb = b.vI;
            this.a.c.Fk = 0;
            this.py = b.uI;
            this.lm = b.ow;
            this.a.c.Y = !0
        },
        move: function() {
            var a, b, c, d;
            this.a.b.no = 1;
            a = this.a.b.mc(this.a);
            this.a.c.SB = a;
            if (0 == this.Gj) {
                this.a.D.km = !1;
                b = 0;
                c = this.a.b.Vd[this.a.c.Ik - 1] & 15;
                0 != c && (d = T.iR[c], -1 != d &&
                    0 != (1 << d & this.py) && (b = 1, a = d));
                c = this.ui;
                0 == b ? 0 != c && (b = this.Lf, 0 != (this.a.b.u.vc & O.td) && (b *= this.a.b.fd), c -= b, 0 >= c && (c = 0)) : c >> 8 < this.a.c.Vb && (b = this.nj, 0 != (this.a.b.u.vc & O.td) && (b *= this.a.b.fd), c += b, c >> 8 > this.a.c.Vb && (c = this.a.c.Vb << 8));
                this.ui = c;
                this.a.c.na = c >> 8;
                this.a.c.Xa = a;
                this.a.c.If = F.kd;
                null != this.a.ga && this.a.ga.sg();
                if (0 == this.Rl(this.a.c.na, this.a.b.mc(this.a))) return;
                if (0 == this.a.c.na) {
                    c = this.ui;
                    if (0 == c || this.a.c.SB == this.a.b.mc(this.a)) return;
                    this.a.c.na = c >> 8;
                    this.a.c.Xa = this.a.c.SB;
                    if (0 ==
                        this.Rl(this.a.c.na, this.a.b.mc(this.a))) return
                }
            }
            for (; 0 != this.Gj && 0 != this.a.b.no;)
                if (c = this.ui, c -= this.Lf, 0 < c) {
                    if (this.ui = c, c >>= 8, this.a.c.na = c, d = this.a.b.mc(this.a), 0 != this.Gj && (d += 16, d &= 31), 0 == this.Rl(c, d)) break
                } else {
                    this.ui = 0;
                    this.Gj = this.a.c.na = 0;
                    break
                }
        },
        Se: function() {
            this.Ke == this.a.b.qd && this.rs(0 != (this.lm & T.Zq));
            this.a.b.Kc != this.oy && (this.oy = this.a.b.Kc, this.Gj++, 12 <= this.Gj ? this.stop() : (this.a.D.km = !0, this.a.D.pa = !0))
        },
        reverse: function() {},
        mf: function() {},
        stop: function() {
            this.ui = this.Gj =
                this.a.c.na = 0;
            this.a.D.pa = !0;
            this.Ke == this.a.b.qd && (this.rs(0 != (this.lm & T.Zq)), this.Gj = 0)
        },
        start: function() {
            this.a.D.pa = !0;
            this.Lc = 0
        },
        hi: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.c.Vb = a;
            this.a.c.na > a && (this.a.c.na = a, this.ui = a << 8);
            this.a.D.pa = !0
        },
        nf: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            a > this.a.c.Vb && (a = this.a.c.Vb);
            this.a.c.na = a;
            this.ui = a << 8;
            this.a.D.pa = !0
        },
        Ac: function(a) {
            this.a.s != a && (this.a.s = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        },
        Bc: function(a) {
            this.a.o != a && (this.a.o = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        },
        Q6: function(a) {
            this.py = a
        }
    });
    Vh.prototype = l.extend(new T, {
        ua: function(a, b) {
            this.a = a;
            this.a.c.Ik = b.Mn;
            this.qy = b.wI + this.a.s;
            this.ry = b.xI + this.a.o;
            this.sy = b.yI + this.a.s;
            this.ty = b.zI + this.a.o;
            this.hu = this.gu = this.a.c.na = 0;
            this.a.c.Fk = 0;
            this.a.c.Vb = 100;
            this.lm = b.ow;
            this.ps(b);
            this.a.c.Y = !0;
            this.a.b.lZ(this.a)
        },
        qc: function() {
            this.a.b.oG(this.a)
        },
        move: function() {
            var a = this.a.s,
                b = this.a.o,
                c, d, e, f;
            if (0 == this.Lc && 0 != this.a.b.ax[this.a.c.Ik - 1] && (a = this.a.b.Lk, a < this.qy && (a =
                    this.qy), a > this.sy && (a = this.sy), b = this.a.b.Mk, b < this.ry && (b = this.ry), b > this.ty && (b = this.ty), c = a - this.a.s, d = b - this.a.o, e = 0, 0 > c && (c = -c, e |= 1), 0 > d && (d = -d, e |= 2), f = c + d << 2, 250 < f && (f = 250), this.a.c.na = f, 0 != f)) {
                0 == d && (d = 1);
                c = (c << 8) / d;
                for (d = 0; !(c >= T.Eo[d]); d += 2);
                c = T.Eo[d + 1];
                0 != (e & 2) && (c = -c + 32 & 31);
                0 != (e & 1) && (c = (-(c - 8 & 31) & 31) + 8 & 31);
                this.a.c.Xa = c
            }
            0 != this.a.c.na && (this.hu = 0, this.gu = this.a.c.na);
            this.hu++;
            10 < this.hu && (this.gu = 0);
            this.a.c.na = this.gu;
            null != this.a.ga && this.a.ga.sg();
            this.a.s = a;
            this.a.o = b;
            this.a.c.Y = !0;
            this.a.b.qd++;
            this.Ke = this.a.b.qd;
            this.a.b.Eg(this.a)
        },
        stop: function() {
            this.Ke == this.a.b.qd && this.rs(0 != (this.lm & T.Zq));
            this.a.c.na = 0
        },
        start: function() {
            this.Lc = 0;
            this.a.D.pa = !0
        },
        Se: function() {
            this.stop()
        },
        reverse: function() {},
        mf: function() {},
        Ac: function(a) {
            this.a.s != a && (this.a.s = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        },
        Bc: function(a) {
            this.a.o != a && (this.a.o = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        }
    });
    Wh.prototype = l.extend(new T, {
        ua: function(a, b) {
            this.a = a;
            this.nu = this.a.s;
            this.ou = this.a.o;
            this.ze = !1;
            this.Kj = 0;
            this.a.An = 0;
            this.tb = b;
            this.a.c.Fk = b.TI;
            this.a.c.Vb = b.SI;
            this.Jj = 0;
            this.Po = null;
            this.Ln(0);
            this.ps(b);
            this.a.c.na = this.Id;
            this.a.c.Y = !0;
            0 == this.tb.Qb.length && this.stop()
        },
        move: function() {
            this.a.An = 0;
            this.a.c.If = F.kd;
            null != this.a.ga && this.a.ga.sg();
            if (0 == this.Id) {
                var a = this.Kj;
                if (0 == a) {
                    this.a.c.na = 0;
                    this.a.b.Eg(this.a);
                    return
                }
                a -= this.a.b.uq;
                if (0 < a) {
                    this.Kj = a;
                    this.a.c.na = 0;
                    this.a.b.Eg(this.a);
                    return
                }
                this.Kj = 0;
                this.Id = this.Lc & 32767;
                this.Lc = 0;
                this.a.c.na = this.Id
            }
            a = 0 != (this.a.b.u.vc &
                O.td) ? 256 * this.a.b.fd : 256;
            this.a.b.Nk = a;
            for (var b;;) {
                b = !1;
                this.a.b.$s = a;
                a *= this.Id;
                a <<= 5;
                524288 >= a ? this.a.b.iC = a : (a = 16384, a /= this.Id, this.a.b.$s = a, this.a.b.iC = 524288);
                for (;;) {
                    this.lu = !1;
                    if (1 == this.UI(this.a.b.iC) && 0 == this.lu) {
                        b = !0;
                        break
                    }
                    if (this.a.b.Nk == this.a.b.$s) {
                        b = !0;
                        break
                    }
                    if (this.a.b.Nk > this.a.b.$s) {
                        this.a.b.Nk -= this.a.b.$s;
                        a = this.a.b.Nk;
                        break
                    }
                    a = this.a.b.Nk * MT_Speed;
                    a <<= 5;
                    this.UI(a);
                    b = !0;
                    break
                }
                if (b) break
            }
        },
        UI: function(a) {
            a += this.Jj;
            var b = a >>> 16;
            if (b < this.mu) return this.Jj = a, a = b * this.Yq / 16384 +
                this.Mj, this.a.s = b * this.Xq / 16384 + this.Lj, this.a.o = a, this.a.c.Y = !0, this.a.b.Eg(this.a), this.a.D.pa;
            b -= this.mu;
            a = b << 16 | a & 65535;
            0 != this.Id && (a /= this.Id);
            this.a.b.Nk += a >> 5 & 65535;
            this.a.s = this.Tm;
            this.a.o = this.Um;
            this.a.c.Y = !0;
            this.a.b.Eg(this.a);
            if (this.a.D.pa) return !0;
            this.a.An = this.a.b.Kc;
            this.a.yp = null;
            b = this.Sf;
            this.Jj = 0;
            if (0 == this.ze) {
                b++;
                if (b < this.tb.Ip) {
                    this.a.yp = this.tb.Qb[b].Zf;
                    if (null != this.Po && null != this.tb.Qb[b].Zf && l.Hb(this.Po, this.tb.Qb[b].Zf)) return this.Sf = b, this.bh(), this.nw();
                    this.Ln(b);
                    this.bh();
                    return this.a.D.pa
                }
                this.a.Yr = this.a.b.Kc;
                this.Sf = b;
                if (this.ze) return this.bh(), this.a.D.pa;
                if (0 != this.tb.XI) return this.ze = !0, b--, this.a.yp = this.tb.Qb[b].Zf, this.Hp(b), this.bh(), this.a.D.pa;
                this.WI();
                if (0 == this.tb.dB) return this.nw(), this.bh(), this.a.D.pa;
                b = 0
            } else {
                if (null != this.Po && null != this.tb.Qb[b].Zf && l.Hb(this.Po, this.tb.Qb[b].Zf)) return this.bh(), this.nw();
                this.a.yp = this.tb.Qb[b].Zf;
                this.Kj = this.tb.Qb[b].YA;
                b--;
                if (0 <= b) return this.Hp(b), this.bh(), this.a.D.pa;
                this.WI();
                if (0 == this.ze) return this.bh(),
                    this.a.D.pa;
                if (0 == this.tb.dB) return this.nw(), this.bh(), this.a.D.pa;
                b = 0;
                this.ze = !1
            }
            this.Ln(b);
            this.bh();
            return this.a.D.pa
        },
        Ln: function(a) {
            a >= this.tb.Qb.length ? this.stop() : (this.ze = !1, this.Sf = a, this.Kj = this.tb.Qb[a].YA, this.Xq = this.tb.Qb[a].UA, this.Yq = this.tb.Qb[a].ZA, this.Lj = this.a.s, this.Mj = this.a.o, this.Tm = this.a.s + this.tb.Qb[a].WA, this.Um = this.a.o + this.tb.Qb[a].XA, this.a.c.Xa = this.tb.Qb[a].VA, this.RI())
        },
        Hp: function(a) {
            a >= this.tb.Qb.length ? this.stop() : (this.ze = !0, this.Sf = a, this.Xq = -this.tb.Qb[a].UA,
                this.Yq = -this.tb.Qb[a].ZA, this.Lj = this.a.s, this.Mj = this.a.o, this.Tm = this.a.s - this.tb.Qb[a].WA, this.Um = this.a.o - this.tb.Qb[a].XA, this.a.c.Xa = this.tb.Qb[a].VA + 16 & 31, this.RI())
        },
        RI: function() {
            this.mu = this.tb.Qb[this.Sf].qI;
            var a = this.tb.Qb[this.Sf].rI,
                b = this.Kj;
            0 != b && (this.Kj = 20 * b, this.Lc = a |= 32768);
            0 != this.Lc && (a = 0);
            if (a != this.Id || 0 != a) this.Id = a, this.lu = this.a.D.pa = !0;
            this.a.c.na = this.Id
        },
        bh: function() {
            this.a.An == this.a.b.Kc && (this.a.b.g.bc = 0, this.a.b.g.Ie(this.a, -1310720 | this.a.Pa & 65535), this.a.b.g.Ie(this.a,
                -2293760 | this.a.Pa & 65535));
            this.a.Yr == this.a.b.Kc && (this.a.b.g.bc = 0, this.a.b.g.Ie(this.a, -1376256 | this.a.Pa & 65535))
        },
        nw: function() {
            this.Lc = this.Id = 0;
            this.a.D.pa = !0;
            this.lu = !1;
            return !0
        },
        WI: function() {
            0 != this.tb.VI && (this.a.s = this.nu, this.a.o = this.ou, this.a.c.Y = !0)
        },
        v6: function(a) {
            var b;
            for (b = 0; b < this.tb.Ip; b++)
                if (null != this.tb.Qb[b].Zf && l.Hb(a, this.tb.Qb[b].Zf)) {
                    0 == this.ze ? (this.Ln(b), this.a.An = this.a.b.Kc, this.a.yp = this.tb.Qb[b].Zf, this.a.Yr = 0, this.bh()) : 0 < b && (b--, this.Hp(b), this.a.An = this.a.b.Kc,
                        this.a.yp = this.tb.Qb[b].Zf, this.a.Yr = 0, this.bh());
                    this.a.D.pa = !0;
                    break
                }
        },
        w6: function(a) {
            var b;
            for (b = 0; b < this.tb.Ip; b++)
                if (null != this.tb.Qb[b].Zf && l.Hb(a, this.tb.Qb[b].Zf)) {
                    if (b == this.Sf && 0 == this.Jj) break;
                    this.Po = a;
                    if (0 == this.ze)
                        if (b > this.Sf) {
                            if (0 != this.Id) break;
                            0 != (this.Lc & 32768) ? this.start() : this.Ln(this.Sf)
                        } else {
                            if (0 != this.Id) {
                                this.reverse();
                                break
                            }
                            0 != (this.Lc & 32768) ? (this.start(), this.reverse()) : this.Hp(MT_MoveNumber - 1)
                        }
                    else if (b <= this.Sf) {
                        if (0 != this.Id) break;
                        0 != (this.Lc & 32768) ? this.start() : this.Hp(this.Sf -
                            1)
                    } else {
                        if (0 != this.Id) {
                            this.reverse();
                            break
                        }
                        0 != (this.Lc & 32768) ? (this.start(), this.reverse()) : this.Ln(this.Sf)
                    }
                    break
                }
        },
        stop: function() {
            0 == this.Lc && (this.Lc = this.Id | 32768);
            this.Id = 0;
            this.a.D.pa = !0
        },
        start: function() {
            0 != (this.Lc & 32768) && (this.Id = this.Lc & 32767, this.Lc = this.Kj = 0, this.a.D.pa = !0)
        },
        reverse: function() {
            if (0 == this.Lc) {
                this.a.D.pa = !0;
                var a = this.Sf;
                if (0 == this.Jj)(this.ze = !this.ze) ? 0 == a ? this.ze = !this.ze : (a--, this.Hp(a)) : this.Ln(a);
                else {
                    this.ze = !this.ze;
                    this.Xq = -this.Xq;
                    this.Yq = -this.Yq;
                    var a = this.Lj,
                        b = this.Tm;
                    this.Lj = b;
                    this.Tm = a;
                    a = this.Mj;
                    this.Mj = b = this.Um;
                    this.Um = a;
                    this.a.c.Xa += 16;
                    this.a.c.Xa &= 31;
                    a = this.Jj >>> 16;
                    a = this.mu - a;
                    this.Jj = a << 16 | this.Jj & 65535
                }
            }
        },
        Ac: function(a) {
            var b = this.a.s;
            this.a.s = a;
            b -= this.Lj;
            a -= b;
            this.Tm = b = this.Tm - this.Lj + a;
            b = this.Lj;
            this.Lj = a;
            this.nu -= b - a;
            this.a.D.pa = !0;
            this.a.c.Y = !0;
            this.a.c.Cb = !0
        },
        Bc: function(a) {
            var b = this.a.o;
            this.a.o = a;
            b -= this.Mj;
            a -= b;
            this.Um = b = this.Um - this.Mj + a;
            b = this.Mj;
            this.Mj = a;
            this.ou -= b - a;
            this.a.D.pa = !0;
            this.a.c.Y = !0;
            this.a.c.Cb = !0
        },
        nf: function(a) {
            0 >
                a && (a = 0);
            250 < a && (a = 250);
            this.Id = a;
            this.a.c.na = a;
            this.a.D.pa = !0
        },
        hi: function(a) {
            this.nf(a)
        },
        mf: function() {}
    });
    ca.I2 = 0;
    ca.AR = 1;
    ca.G2 = 2;
    ca.H2 = 3;
    ca.Hj = 0;
    ca.Mo = 1;
    ca.ju = 2;
    ca.iu = 3;
    ca.cE = 4;
    ca.dE = 5;
    ca.prototype = l.extend(new T, {
        ua: function(a, b) {
            this.a = a;
            this.w = this.a.b;
            this.a.Mi = 0;
            this.pf = this.a.Ni = 0;
            this.a.c.na = 0;
            this.a.c.Ik = b.Mn;
            this.at = b.GI;
            this.nj = this.Bl(this.at);
            this.vq = b.HI;
            this.Lf = this.Bl(this.vq);
            this.a.c.Vb = b.LI;
            this.a.c.Fk = 0;
            this.ku = b.II;
            this.eE = b.JI;
            var c = b.KI;
            3 < c && (c = ca.AR);
            this.fE = c;
            this.No = this.Oe =
                0;
            this.Rm = null;
            this.ps(b);
            this.a.c.Y = !0;
            this.ec = ca.Hj
        },
        move: function() {
            var a, b;
            this.a.b.no = 1;
            a = this.a.b.Vd[this.a.c.Ik - 1];
            this.fz();
            b = this.pf;
            var c;
            0 == this.No && (0 >= b && (0 != (a & 4) ? (c = this.nj, 0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd), b -= c, b / 256 < -this.a.c.Vb && (b = 256 * -this.a.c.Vb)) : 0 > b && (c = this.Lf, 0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd), b += c, 0 < b && (b = 0)), 0 != (a & 8) && (b = -b)), 0 <= b && (0 != (a & 8) ? (c = this.nj, 0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd), b += c, b / 256 > this.a.c.Vb && (b = 256 * this.a.c.Vb)) : 0 < b && (c = this.Lf, 0 !=
                (this.a.b.u.vc & O.td) && (c *= this.a.b.fd), b -= c, 0 > b && (b = 0)), 0 != (a & 4) && (b = -b)), this.pf = b);
            var d = this.Oe;
            for (c = !1;;) {
                switch (this.ec) {
                    case 2:
                    case 3:
                        c = this.ku << 5;
                        0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd);
                        d += c;
                        64E3 < d && (d = 64E3);
                        break;
                    case 0:
                        if (0 != (a & 1)) {
                            if (this.w.Di(this.a.Ka, this.a.s + this.zh, this.a.o + this.Ah - 4) == k.yh) break;
                            this.ec = ca.Mo;
                            c = !0;
                            continue
                        }
                        if (0 != (a & 2) && this.w.Di(this.a.Ka, this.a.s + this.zh, this.a.o + this.Ah + 4) != k.yh) {
                            this.ec = ca.Mo;
                            c = !0;
                            continue
                        }
                        break;
                    case 1:
                        if (0 == c && (this.No = 0, this.w.Di(this.a.Ka,
                                this.a.s + this.zh, this.a.o + this.Ah) == k.yh && this.w.Di(this.a.Ka, this.a.s + this.zh, this.a.o + this.Ah - 4) == k.yh)) break;
                        0 >= d && (0 != (a & 1) ? (c = this.nj, 0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd), d -= c, c = d / 256, c < -this.a.c.Vb && (d = 256 * -this.a.c.Vb)) : (c = this.Lf, 0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd), d += c, 0 < d && (d = 0)), 0 != (a & 2) && (d = -d));
                        0 <= d && (0 != (a & 2) ? (c = this.nj, 0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd), d += c, c = d / 256, c > this.a.c.Vb && (d = 256 * this.a.c.Vb)) : (c = this.Lf, 0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd), d -= c, 0 > d &&
                            (d = 0)), 0 != (a & 1) && (d = -d))
                }
                break
            }
            this.Oe = d;
            var e = 0;
            0 > b && (e = 16);
            c = b;
            var f = d;
            if (0 != f) {
                var g = 0;
                0 > c && (g |= 1, c = -c);
                0 > f && (g |= 2, f = -f);
                c = (c << 8) / f;
                for (e = 0; !(c >= T.Eo[e]); e += 2);
                e = T.Eo[e + 1];
                0 != (g & 2) && (e = -e + 32 & 31);
                0 != (g & 1) && (e = (-(e - 8 & 31) & 31) + 8 & 31)
            }
            c = b;
            g = T.Gm[e];
            f = T.Xm[e];
            0 > g && (g = -g);
            0 > f && (f = -f);
            g < f && (g = f, c = d);
            0 > c && (c = -c);
            c /= g;
            250 < c && (c = 250);
            this.a.c.na = c;
            switch (this.ec) {
                case 1:
                    0 > d ? this.a.c.Xa = 8 : 0 < d && (this.a.c.Xa = 24);
                    break;
                case 3:
                    this.a.c.Xa = e;
                    break;
                default:
                    0 > b ? this.a.c.Xa = 16 : 0 < b && (this.a.c.Xa = 0)
            }
            switch (this.ec) {
                case 4:
                    this.a.c.If =
                        F.Px;
                    break;
                case 5:
                    this.a.c.If = F.Ft;
                    break;
                case 3:
                    this.a.c.If = F.NC;
                    break;
                case 2:
                    this.a.c.If = F.OC;
                    break;
                case 1:
                    this.a.c.If = F.MC;
                    break;
                default:
                    this.a.c.If = F.kd
            }
            null != this.a.ga && this.a.ga.sg();
            this.fz();
            this.Rl(this.a.c.na, e);
            this.ec != ca.Hj && this.ec != ca.Mo || 0 != this.Qm || (b = !1, d = this.fE, 0 != d && (d--, 0 == d ? (5 == (a & 5) && (b = !0), 9 == (a & 9) && (b = !0)) : 0 != (a & d << 4) && (b = !0)), b && (this.Oe = -this.eE << 8, this.ec = ca.ju));
            switch (this.ec) {
                case 2:
                    0 <= this.Oe && (this.ec = ca.iu);
                    break;
                case 3:
                    this.w.Di(this.a.Ka, this.a.s + this.zh, this.a.o +
                        this.Ah) != k.yh && (this.Oe = 0, this.ec = ca.Mo, this.a.c.Xa = 8);
                    break;
                case 0:
                    if (0 != (a & 3) && 0 == (a & 12) && this.w.Di(this.a.Ka, this.a.s + this.zh, this.a.o + this.Ah) != k.yh) {
                        this.ec = ca.Mo;
                        this.pf = 0;
                        break
                    }
                    0 != (a & 2) && null != this.a.ga && this.a.ga.Ai(F.Px) && (this.pf = 0, this.ec = ca.cE);
                    if (this.w.Di(this.a.Ka, this.a.s + this.zh, this.a.o + this.Ah) != k.yh) break;
                    0 == this.xm(this.a.s, this.a.o + 10, this.cl, O.ye, !0) ? (a = this.a.s - this.a.b.da, b = this.a.o - this.a.b.fa, d = new P, this.Ql(a, b + this.cl - 1, a, b, this.cl, O.ye, d), this.a.s = d.x + this.a.b.da, this.a.o =
                        d.y + this.a.b.fa, this.Qm = !1) : this.ec = ca.iu;
                    break;
                case 1:
                    if (this.w.Di(this.a.Ka, this.a.s + this.zh, this.a.o + this.Ah) == k.yh) {
                        if (0 > this.Oe)
                            for (f = 0; 32 > f; f++)
                                if (this.w.Di(this.a.Ka, this.a.s + this.zh, this.a.o + this.Ah + f) != k.yh) {
                                    this.a.o += f;
                                    break
                                } this.Oe = 0
                    }
                    0 != (a & 12) && (this.ec = ca.Hj, this.Oe = 0);
                    break;
                case 4:
                    0 == (a & 2) && (null != this.a.ga && this.a.ga.Ai(F.Ft) ? (this.ec = ca.dE, this.a.c.If = F.Ft, this.a.ga.sg(), this.a.ga.Zn = 1) : this.ec = ca.Hj);
                    break;
                case 5:
                    null != this.a.ga && 0 == this.a.ga.ff && (this.ec = ca.Hj)
            }
            if (this.ec == ca.Hj ||
                this.ec == ca.cE || this.ec == ca.dE) {
                do {
                    a = null;
                    null != this.a.La && (a = this.a.La.Yl);
                    if (null == this.a.b.Qp(this.a, this.a.c.Ma, this.a.c.Ua, this.a.c.zb, this.a.c.Ab, this.a.s, this.a.o, a) && (a = this.a.b.Qp(this.a, this.a.c.Ma, this.a.c.Ua, this.a.c.zb, this.a.c.Ab, this.a.s, this.a.o + 1, a), null != a && 1 == a.size())) {
                        a = a.get(0);
                        if (null == this.Rm || this.Rm != a) {
                            if (this.a.Yb != a.Yb) {
                                this.Rm = a;
                                this.uy = a.s;
                                this.vy = a.o;
                                break
                            }
                            if (null == this.Rm) break
                        }
                        b = a.s - this.uy;
                        d = a.o - this.vy;
                        this.uy = a.s;
                        this.vy = a.o;
                        this.a.s += b;
                        this.a.o += d;
                        this.a.b.Eg(this.a);
                        this.a.c.Y = !0;
                        break
                    }
                    this.Rm = null
                } while (0)
            } else this.Rm = null
        },
        aB: function() {
            this.Oe = this.pf = this.a.c.na = 0
        },
        Se: function() {
            this.stop()
        },
        stop: function() {
            if (this.Ke != this.a.b.qd) this.aB();
            else {
                this.a.D.pa = !0;
                var a = this.a.s - this.a.b.da,
                    b = this.a.o - this.a.b.fa,
                    c;
                switch (this.a.b.g.ix & 4294901760) {
                    case -786432:
                        a = this.a.s - this.a.Ea;
                        b = this.a.o - this.a.Fa;
                        c = this.a.b.Yn(a, b, a + this.a.S, b + this.a.T);
                        a = this.a.s;
                        b = this.a.o;
                        0 != (c & k.yj) && (a = this.a.Ea, this.pf = 0, this.Qm = !0);
                        0 != (c & k.zj) && (a = this.a.b.jf - this.a.S + this.a.Ea,
                            this.pf = 0, this.Qm = !0);
                        0 != (c & k.Aj) && (b = this.a.Fa, this.Oe = 0, this.Qm = !1);
                        0 != (c & k.xj) && (b = this.a.b.kf - this.a.T + this.a.Fa, this.Oe = 0, this.Qm = !1);
                        this.a.s = a;
                        this.a.o = b;
                        this.ec = this.ec == ca.ju ? ca.iu : ca.Hj;
                        this.No = 0;
                        break;
                    case -851968:
                    case -917504:
                        if (this.Qm = !1, c = new P, this.ec == ca.iu) this.Ql(a, b, this.a.c.Gk - this.a.b.da, this.a.c.Hk - this.a.b.fa, this.cl, O.ye, c), this.a.s = c.x + this.a.b.da, this.a.o = c.y + this.a.b.fa, this.ec = ca.Hj, this.a.c.Y = !0, this.xm(this.a.s, this.a.o + 1, 0, O.ye, !0) ? this.pf = this.a.c.na = 0 : (this.No = 0,
                            this.a.c.na = Math.abs(this.pf / 256), this.Oe = 0);
                        else {
                            if (this.ec == ca.Hj) {
                                if (this.Ql(a, b, a, b - this.cl, 0, O.ye, c)) {
                                    this.a.s = c.x + this.a.b.da;
                                    this.a.o = c.y + this.a.b.fa;
                                    this.a.c.Y = !0;
                                    break
                                }
                                if (this.Ql(a, b, this.a.c.Gk - this.a.b.da, this.a.c.Hk - this.a.b.fa, 0, O.ye, c)) {
                                    this.a.s = c.x + this.a.b.da;
                                    this.a.o = c.y + this.a.b.fa;
                                    this.a.c.Y = !0;
                                    this.aB();
                                    break
                                }
                            }
                            if (this.ec == ca.ju) {
                                if (this.Ql(a, b, a, b - this.cl, 0, O.ye, c)) {
                                    this.a.s = c.x + this.a.b.da;
                                    this.a.o = c.y + this.a.b.fa;
                                    this.a.c.Y = !0;
                                    break
                                }
                                this.No = 1;
                                this.pf = 0
                            }
                            this.ec == ca.Mo && this.Ql(a,
                                b, this.a.c.Gk - this.a.b.da, this.a.c.Hk - this.a.b.fa, 0, O.ye, c) ? (this.a.s = c.x + this.a.b.da, this.a.o = c.y + this.a.b.fa, this.a.c.Y = !0, this.aB()) : (this.a.c.Ma = this.a.c.Uw, this.a.c.Ua = this.a.c.Tw, this.xm(this.a.s, this.a.o, 0, O.ye, !0) || (this.a.s = this.a.c.Gk, this.a.o = this.a.c.Hk, this.a.c.Y = !0))
                        }
                }
            }
        },
        Ac: function(a) {
            this.a.s != a && (this.a.s = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        },
        Bc: function(a) {
            this.a.o != a && (this.a.o = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        },
        nf: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            a >
                this.a.c.Vb && (a = this.a.c.Vb);
            this.a.c.na = a;
            this.pf = this.a.c.na * T.Gm[this.a.b.mc(this.a)];
            this.Oe = this.a.c.na * T.Xm[this.a.b.mc(this.a)];
            this.a.D.pa = !0
        },
        hi: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.c.Vb = a;
            a <<= 8;
            this.pf > a && (this.pf = a);
            this.a.D.pa = !0
        },
        yq: function(a) {
            this.ku = a
        },
        mf: function(a) {
            this.a.c.Xa = a;
            this.pf = this.a.c.na * T.Gm[a];
            this.Oe = this.a.c.na * T.Xm[a]
        },
        fz: function() {
            var a;
            0 < this.a.c.Ma ? a = this.a.b.h.qa.Ki(this.a.c.Ma, this.a.c.Ua, this.a.c.zb, this.a.c.Ab) : (a = new oa, a.width = this.a.S, a.height =
                this.a.T, a.eb = this.a.Ea, a.Za = this.a.Fa);
            this.zh = 0;
            this.Ah = a.height - a.Za;
            this.cl = 2 * a.height + a.height >>> 3
        },
        ZY: function() {
            this.fz();
            this.w.Di(this.a.Ka, this.a.s + this.zh, this.a.o + this.Ah) == k.yh && (0 == this.a.b.vl(this.a, this.a.c.Ma, this.a.c.Ua, this.a.c.zb, this.a.c.Ab, this.a.s, this.a.o, 0, O.Co) && (this.ec == ca.ju && 0 > this.Oe || 0 == this.a.b.vl(this.a, this.a.c.Ma, this.a.c.Ua, this.a.c.zb, this.a.c.Ab, this.a.s, this.a.o, this.cl, O.ye)) || this.a.b.g.Ie(this.a, -851968 | this.a.Pa & 65535))
        }
    });
    wb.$R = [4294967288, 4294967292, 4294967294,
        4294967295
    ];
    wb.prototype = l.extend(new T, {
        ua: function(a, b) {
            this.a = a;
            this.Pe = 0;
            this.Ij = this.a.c.na = 0;
            this.gE = -1;
            this.a.c.Ik = b.Mn;
            this.at = b.bB;
            this.nj = this.Bl(b.bB);
            this.vq = b.cB;
            this.Lf = this.Bl(b.cB);
            this.a.c.Vb = b.QI;
            this.a.c.Fk = 0;
            this.hE = b.NI;
            this.a.D.mm = 0;
            this.lm = b.ow;
            this.wy = 0;
            this.xy = wb.$R[b.MI];
            this.yy = b.OI;
            this.Oo = 0;
            this.Sm = this.a.b.mc(this.a);
            this.a.Mi = 0;
            this.a.Ni = 0;
            this.ps(b);
            this.a.c.Y = !0
        },
        move: function() {
            var a, b, c;
            this.a.b.no = 1;
            if (0 == this.Ij) {
                this.a.D.km = !1;
                a = this.a.b.Vd[this.a.c.Ik - 1] & 15;
                b = 0;
                0 != (a & 8) && (b = -1);
                0 != (a & 4) && (b = 1);
                if (0 != b) {
                    c = this.yy;
                    0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd);
                    for (this.Oo += c; 100 < this.Oo;) this.Oo -= 100, this.Sm += b, this.Sm &= 31, this.a.c.Xa = this.Sm & this.xy;
                    this.a.c.Y = !0
                }
                c = 0;
                0 != this.a.D.mm ? (0 != (a & 1) && (c = 1), 0 != (a & 2) && (c = 2)) : (0 != (a & 1) && (c = 2), 0 != (a & 2) && (c = 1));
                for (b = this.Pe;;) {
                    if (0 != (c & 1)) {
                        if (0 == this.Pe) {
                            if (0 == this.hE) break;
                            if (0 != (this.wy & 3)) break;
                            this.a.D.mm ^= 1;
                            c = this.nj;
                            0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd);
                            b += c;
                            c = b >> 8;
                            c > this.a.c.Vb && (this.Pe = b = this.a.c.Vb << 8);
                            this.Pe = b;
                            break
                        }
                        c = this.Lf;
                        0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd);
                        b -= c;
                        0 > b && (b = 0);
                        this.Pe = b
                    } else 0 != (c & 2) && (c = this.nj, 0 != (this.a.b.u.vc & O.td) && (c *= this.a.b.fd), b += c, c = b >> 8, c > this.a.c.Vb && (this.Pe = b = this.a.c.Vb << 8), this.Pe = b);
                    break
                }
                this.wy = a;
                this.a.c.na = this.Pe >> 8;
                this.a.c.If = F.kd;
                null != this.a.ga && this.a.ga.sg();
                a = this.a.b.mc(this.a);
                0 != this.a.D.mm && (a = a + 16 & 31);
                if (0 == this.Rl(this.a.c.na, a)) return
            }
            do {
                if (0 == this.Ij) break;
                if (0 == this.a.b.no) break;
                b = this.Pe;
                b -= this.Lf;
                if (0 >= b) {
                    this.Ij = this.Pe = 0;
                    break
                }
                this.Pe =
                    b;
                b >>= 8;
                a = this.a.b.mc(this.a);
                0 != this.Ij && (a += 16, a &= 31);
                if (0 == this.Rl(b, a)) break
            } while (1)
        },
        reverse: function() {},
        stop: function() {
            this.Pe = this.Ij = 0;
            this.a.D.mm = 0;
            this.Ke == this.a.b.qd && (this.rs(0 != (this.lm & T.Zq)), this.a.D.pa = !0)
        },
        start: function() {
            this.Lc = 0;
            this.a.D.pa = !0
        },
        Se: function() {
            this.Ke == this.a.b.qd && this.rs(0 != (this.lm & T.Zq));
            this.a.b.Kc != this.gE && (this.Ij = this.a.D.mm, this.a.D.mm = 0, this.Ij++, 16 <= this.Ij ? this.stop() : (this.a.D.pa = !0, this.a.D.km = !0))
        },
        nf: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            a >
                this.a.c.Vb && (a = this.a.c.Vb);
            this.Pe = a << 8;
            this.a.D.pa = !0
        },
        hi: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.c.Vb = a;
            a <<= 8;
            this.Pe > a && (this.Pe = a);
            this.a.D.pa = !0
        },
        mt: function(a) {
            this.yy = a
        },
        Ac: function(a) {
            this.a.s != a && (this.a.s = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        },
        Bc: function(a) {
            this.a.o != a && (this.a.o = a, this.a.D.pa = !0, this.a.c.Y = !0, this.a.c.Cb = !0)
        },
        mf: function(a) {
            this.Sm = a;
            this.a.c.Xa = a & this.xy
        }
    });
    xb.prototype = l.extend(new T, {
        ua: function(a) {
            this.a = a;
            this.a.c.na = 0;
            this.a.c.Cb = !0;
            this.a.c.Y = !0
        },
        move: function() {
            null != this.a.ga && this.a.ga.sg();
            this.a.c.Cb && (this.a.c.Cb = !1, this.a.b.Eg(this.a))
        },
        Ac: function(a) {
            this.a.s != a && (this.a.s = a, this.a.D.pa = !0, this.a.c.Y = !0);
            this.a.c.Cb = !0
        },
        Bc: function(a) {
            this.a.o != a && (this.a.o = a, this.a.D.pa = !0, this.a.c.Y = !0);
            this.a.c.Cb = !0
        },
        mf: function() {},
        reverse: function() {},
        stop: function() {},
        start: function() {},
        Se: function() {},
        nf: function() {},
        hi: function() {}
    });
    Xh.prototype = l.extend(new T, {
        ua: function(a, b) {
            this.a = a;
            var c = a.b.h.file.Jh(b.data);
            this.yd.Lv(c);
            this.a.c.Cb = !0;
            this.a.c.Y = !0
        },
        qc: function() {
            this.yd.qc()
        },
        move: function() {
            this.yd.move() && (this.a.c.Y = !0)
        },
        stop: function() {
            this.yd.stop(this.Ke == this.a.b.qd)
        },
        start: function() {
            this.yd.start()
        },
        Se: function() {
            this.yd.Se(this.Ke == this.a.b.qd)
        },
        nf: function(a) {
            this.yd.nf(a)
        },
        hi: function(a) {
            this.yd.hi(a)
        },
        reverse: function() {
            this.yd.reverse()
        },
        Ac: function(a) {
            this.yd.Ac(a);
            this.a.c.Y = !0;
            this.a.c.Cb = !0
        },
        Bc: function(a) {
            this.yd.Bc(a);
            this.a.c.Y = !0;
            this.a.c.Cb = !0
        },
        mf: function(a) {
            this.yd.mf(a);
            this.a.c.Y = !0;
            this.a.c.Cb = !0
        },
        qF: function(a, b) {
            this.Tj = b;
            return this.yd.Lu(a)
        }
    });
    Sb.prototype = {
        ua: function(a) {
            this.f = a;
            this.l = this.f.b
        },
        Lv: function() {},
        qc: function() {},
        move: function() {
            return !1
        },
        setPosition: function() {},
        Ac: function() {},
        Bc: function() {},
        stop: function() {},
        Se: function() {},
        reverse: function() {},
        start: function() {},
        nf: function() {},
        hi: function() {},
        mf: function() {},
        lt: function() {},
        mt: function() {},
        yq: function() {},
        Lu: function() {
            return 0
        },
        Ur: function() {
            return 0
        },
        dH: function() {
            return 0
        },
        Av: function() {
            return 0
        },
        mc: function() {
            return this.f.c.Xa
        },
        sp: function(a) {
            return this.f.D.sp(this.f, a, 32)
        },
        Bi: function(a) {
            this.f.c.If = a;
            null != this.f.ga && this.f.ga.sg()
        },
        pr: function() {
            this.f.b.qd++;
            this.f.D.ja.Ke = this.f.b.qd;
            this.f.b.Eg(this.f)
        },
        aF: function(a, b, c, d, e, f, g) {
            a -= this.f.b.da;
            b -= this.f.b.fa;
            c -= this.f.b.da;
            d -= this.f.b.fa;
            a = this.f.D.ja.Ql(a, b, c, d, e, f, g);
            g.x += this.f.b.da;
            g.y += this.f.b.fa;
            return a
        },
        YK: function(a, b, c, d, e) {
            return this.f.D.ja.xm(a, b, c, d, e)
        },
        Qr: function(a) {
            return this.f.b.Vd[a]
        }
    };
    Qa.IO = 1;
    Qa.ED = 2;
    Qa.B1 = 4;
    Qa.prototype = {
        ua: function(a, b, c,
            d, e) {
            null != this.ja && this.ja.qc();
            null != d && (b.c.Xa = d.EF);
            this.lC = b.La.tB;
            d = b.c.zc;
            b.c.zc = -1;
            if (null != c.cf && a < c.cf.On) {
                c = c.cf.pe[a];
                this.oo = a; - 1 == e && (e = c.qs);
                b.c.zc = e;
                switch (e) {
                    case 0:
                        this.ja = new xb;
                        break;
                    case 1:
                        this.ja = new Vh;
                        break;
                    case 2:
                        this.ja = new wb;
                        break;
                    case 3:
                        this.ja = new Uh;
                        break;
                    case 4:
                        this.ja = new Fa;
                        break;
                    case 5:
                        this.ja = new Wh;
                        break;
                    case 9:
                        this.ja = new ca;
                        break;
                    case 14:
                        this.ja = this.MY(b, c), null == this.ja && (this.ja = new xb)
                }
                b.c.Xa = this.sp(b, c.YI, b.c.Xa);
                this.ja.ua(b, c)
            }
            d != b.c.zc && d == aa.zy && b.b.oG(); -
            1 == b.c.zc && (b.c.zc = 0, this.ja = new xb, this.ja.ua(b, null), b.c.Xa = 0)
        },
        MY: function(a, b) {
            var c = b.Xh,
                d = null;
            "clickteam-simple_ellipse" == c && (d = new zb);
            "pinball" == c && (d = new Ja);
            return null != d ? (d.ua(a), new Xh(d)) : null
        },
        FH: function(a, b, c) {
            null != this.ja && this.ja.qc();
            a.c.zc = b;
            switch (b) {
                case 11:
                    this.ja = new Th;
                    break;
                case 13:
                    this.ja = new Sh
            }
            this.ja.a = a;
            0 == c && this.ja.ua(a, null)
        },
        qc: function() {
            this.ja.qc()
        },
        move: function() {
            this.ja.move()
        },
        $Y: function(a) {
            var b = a.ka;
            null != b.cf && this.oo + 1 < b.cf.On && this.ua(this.oo + 1,
                a, b, null, -1)
        },
        o_: function(a, b) {
            var c = a.ka;
            null != c.cf && 0 <= b && b < c.cf.On && this.ua(b, a, c, null, -1)
        },
        sp: function(a, b, c) {
            if (0 > c || 32 <= c) {
                var d = 0,
                    e = b,
                    f;
                for (c = 0; 32 > c; c++) f = e, e >>= 1, 0 != (f & 1) && d++;
                if (0 == d) c = 0;
                else
                    for (d = a.b.random(d), e = b, c = 0; !(f = e, e >>= 1, 0 != (f & 1) && (d--, 0 > d)); c++);
            }
            return c
        }
    };
    eb.o2 = 2;
    eb.p2 = 4;
    eb.YQ = 8;
    eb.prototype = l.extend(new va, {
        zg: function() {
            return 0
        },
        Kh: function(a) {
            this.EH = a.v();
            this.vd = l.Un(a.cb());
            0 == this.vd.length && (this.vd = "Ini.ini");
            a = 0;
            this.EH & eb.YQ && (a |= ua.RD);
            this.Nd = new ua(this.l.h, a);
            this.Cg = "Group";
            this.Ap = "Item";
            this.Uf = 0;
            return !1
        },
        Zj: function() {
            0 < this.Uf && (this.Uf--, 0 == this.Uf && this.Nd.gt());
            return 0
        },
        kv: function() {
            this.Nd.gt()
        },
        action: function(a, b) {
            switch (a) {
                case 0:
                    this.jS(b);
                    break;
                case 1:
                    this.kS(b);
                    break;
                case 2:
                    this.vS(b);
                    break;
                case 3:
                    this.fS(b);
                    break;
                case 4:
                    this.wR(b);
                    break;
                case 5:
                    this.sS(b);
                    break;
                case 6:
                    this.iS(b);
                    break;
                case 7:
                    this.xS(b);
                    break;
                case 8:
                    this.wS(b);
                    break;
                case 9:
                    this.uS(b);
                    break;
                case 10:
                    this.tS(b);
                    break;
                case 11:
                    this.sO(b);
                    break;
                case 12:
                    this.rO(b);
                    break;
                case 13:
                    this.qO(b)
            }
        },
        jS: function(a) {
            this.Cg = a.Eb(this.l, 0)
        },
        kS: function(a) {
            this.Ap = a.Eb(this.l, 0)
        },
        vS: function(a) {
            a = a.G(this.l, 0).toString();
            this.Nd.Ao(this.Cg, this.Ap, a, this.vd);
            this.Uf = 10
        },
        fS: function(a) {
            a = a.vb(this.l, 0);
            this.Nd.Ao(this.Cg, "pos." + a.La.dj, a.s.toString() + "," + a.o.toString(), this.vd);
            this.Uf = 10
        },
        wR: function(a) {
            a = a.vb(this.l, 0);
            var b = this.Nd.xn(this.Cg, "pos." + a.La.dj, "X", this.vd);
            if ("X" != b) {
                var c = b.indexOf(","),
                    d = b.substring(c + 1);
                a.s = parseInt(b.substring(0, c), 10);
                isNaN(a.s) && (a.s = 0);
                a.o = parseInt(d, 10);
                isNaN(a.o) &&
                    (a.o = 0);
                a.c.Y = !0;
                a.c.Cb = !0
            }
        },
        sS: function(a) {
            a = a.Eb(this.l, 0);
            this.Nd.Ao(this.Cg, this.Ap, a, this.vd);
            this.Uf = 10
        },
        iS: function(a) {
            this.vd = l.Un(a.Eb(this.l, 0))
        },
        xS: function(a) {
            var b = a.Eb(this.l, 0);
            a = a.G(this.l, 1).toString();
            this.Nd.Ao(this.Cg, b, a, this.vd);
            this.Uf = 10
        },
        wS: function(a) {
            var b = a.Eb(this.l, 0),
                c = a.Eb(this.l, 1);
            a = a.G(this.l, 2).toString();
            this.Nd.Ao(b, c, a, this.vd);
            this.Uf = 10
        },
        uS: function(a) {
            var b = a.Eb(this.l, 0);
            a = a.Eb(this.l, 1);
            this.Nd.Ao(this.Cg, b, a, this.vd);
            this.Uf = 10
        },
        tS: function(a) {
            var b = a.Eb(this.l,
                    0),
                c = a.Eb(this.l, 1);
            a = a.Eb(this.l, 2);
            this.Nd.Ao(b, c, a, this.vd);
            this.Uf = 10
        },
        sO: function(a) {
            this.Nd.jG(this.Cg, a.Eb(this.l, 0), this.vd);
            this.Uf = 10
        },
        rO: function(a) {
            this.Nd.jG(a.Eb(this.l, 0), a.Eb(this.l, 1), this.vd);
            this.Uf = 10
        },
        qO: function(a) {
            this.Nd.OV(a.Eb(this.l, 0), this.vd);
            this.Uf = 10
        },
        Xg: function(a) {
            switch (a) {
                case 0:
                    return this.OQ();
                case 1:
                    return this.LQ();
                case 2:
                    return this.QQ();
                case 3:
                    return this.PQ();
                case 4:
                    return this.NQ();
                case 5:
                    return this.MQ()
            }
            return null
        },
        OQ: function() {
            var a = this.Nd.xn(this.Cg,
                    this.Ap, "", this.vd),
                a = parseInt(a, 10);
            isNaN(a) && (a = 0);
            return a
        },
        LQ: function() {
            return this.Nd.xn(this.Cg, this.Ap, "", this.vd)
        },
        QQ: function() {
            var a = this.f.ha(),
                a = this.Nd.xn(this.Cg, a, "", this.vd),
                a = parseInt(a, 10);
            isNaN(a) && (a = 0);
            return a
        },
        PQ: function() {
            var a = this.f.ha(),
                b = this.f.ha(),
                a = this.Nd.xn(a, b, "", this.vd),
                a = parseInt(a, 10);
            isNaN(a) && (a = 0);
            return a
        },
        NQ: function() {
            var a = this.f.ha();
            return this.Nd.xn(this.Cg, a, "", this.vd)
        },
        MQ: function() {
            var a = this.f.ha(),
                b = this.f.ha();
            return this.Nd.xn(a, b, "", this.vd)
        }
    });
    q.LN = 0;
    q.nD = 1;
    q.kD = 2;
    q.jD = 3;
    q.hD = 4;
    q.lD = 5;
    q.rD = 6;
    q.MN = 7;
    q.TN = 8;
    q.WL = 0;
    q.lM = 1;
    q.aM = 2;
    q.$L = 3;
    q.ZL = 4;
    q.YL = 5;
    q.bM = 6;
    q.oM = 7;
    q.RL = 8;
    q.uM = 9;
    q.yM = 10;
    q.tM = 11;
    q.JL = 12;
    q.jM = 13;
    q.XL = 14;
    q.vM = 15;
    q.zM = 16;
    q.mM = 17;
    q.pM = 18;
    q.nM = 19;
    q.qM = 20;
    q.oP = 0;
    q.PP = 1;
    q.FP = 2;
    q.zP = 3;
    q.sP = 4;
    q.rP = 5;
    q.IP = 6;
    q.WP = 7;
    q.pP = 8;
    q.mP = 9;
    q.nP = 10;
    q.AP = 11;
    q.BP = 12;
    q.GP = 13;
    q.HP = 14;
    q.QP = 15;
    q.RP = 16;
    q.qP = 17;
    q.UP = 18;
    q.XP = 19;
    q.VP = 20;
    q.YP = 21;
    q.oi = 0;
    q.AD = 1;
    q.ZQ = 2;
    q.YC = 3;
    q.Mq = 0;
    q.d4 = 1;
    q.Qq = 2;
    q.dS = 0;
    q.sR = 1;
    q.fQ = 2;
    q.$f = [0, 26784E4, 50976E4, 7776E5, 11232E5, 130464E4,
        156384E4, 183168E4, 209952E4, 235872E4, 262656E4, 288576E4
    ];
    q.V_ = "I II III IV V VI VII VIII IX X XI XII".split(" ");
    q.prototype = l.extend(new va, {
        zg: function() {
            return 9
        },
        Kh: function(a, b) {
            this.f.uo(b.GF);
            this.f.vo(b.HF);
            this.f.Ea = 0;
            this.f.Fa = 0;
            this.f.pm(a.v());
            this.f.nm(a.v());
            a.wa(64);
            this.gi = a.v();
            this.fi = a.v();
            this.mC = 0 == a.v() ? !1 : !0;
            this.eK = 0 == a.v() ? !1 : !0;
            this.dt = a.v();
            this.fg = a.cq();
            8 == this.fg.Gb && "SYSTEM" == this.fg.Ye.toUpperCase() && this.fg.ua();
            this.fg.Ph();
            this.wl = a.sc();
            a.wa(80);
            this.gK = 0 == a.v() ?
                !1 : !0;
            this.TF = a.sc();
            this.fK = 0 == a.v() ? !1 : !0;
            this.SF = a.sc();
            this.dK = 0 == a.v() ? !1 : !0;
            this.RF = a.sc();
            this.lK = a.v();
            this.iK = a.v();
            this.hK = a.v();
            a.wa(80);
            var c = a.v(),
                d = a.v(),
                e = a.v();
            this.Uh = 36E4 * c + 6E3 * d + 100 * e;
            this.ft = a.v();
            this.et = a.v();
            this.nC = !0;
            this.mA = new Date;
            this.wC = new Date;
            this.Yc = new Date;
            this.Jb = this.qp = 0;
            return !0
        },
        Zj: function() {
            var a = 0;
            this.nC && (this.nC = !1, a = va.Gy);
            var b, c = this.Vc();
            b = Math.floor(q.$f[c.getMonth()] + 864E4 * (c.getDate() - 1) + 36E4 * c.getHours() + 6E3 * c.getMinutes() + 100 * c.getSeconds() +
                c.getMilliseconds() / 10);
            (b < this.qp || b > this.qp + 200 && 0 != this.qp) && 0 != this.Jb && (this.Fc += Math.abs(this.qp - this.Jb), this.Jb = b);
            this.qp = b;
            switch (this.gi) {
                case q.oi:
                case q.AD:
                case q.ZQ:
                    this.Yc.getSeconds() != c.getSeconds() && (this.Yc.setSeconds(c.getSeconds()), this.f.Wp(q.nD, this.f.b.g.bc), a = va.Gy, this.Yc.getMinutes() != c.getMinutes() && (this.Yc.setMinutes(c.getMinutes()), this.f.Wp(q.kD, this.f.b.g.bc), this.Yc.getHours() != c.getHours() && (this.Yc.setHours(c.getHours()), this.f.Wp(q.jD, this.f.b.g.bc))));
                    break;
                case q.YC:
                    this.Yc.getHours() !=
                        c.getHours() && (this.Yc.setHours(c.getHours()), this.Yc.getDate() != c.getDate() && (this.Yc.setDate(c.getDate()), this.f.Wp(q.hD, this.f.b.g.bc), a = va.Gy, this.Yc.getMonth() != c.getMonth() && (this.Yc.setMonth(c.getMonth()), this.f.Wp(q.lD, this.f.b.g.bc), this.Yc.Sz != c.Sz && (this.Yc.Sz = c.Sz, this.f.Wp(q.rD, this.f.b.g.bc)))))
            }
            this.Yc.setTime(c.getTime());
            return a
        },
        tG: function(a, b, c) {
            var d = new ja,
                e;
            d.left = b + this.f.s;
            d.right = d.left + this.f.S;
            d.top = c + this.f.o;
            d.bottom = d.top + this.f.T;
            var f = this.Yc.getHours(),
                g = Math.floor(this.Yc.getMilliseconds() /
                    10);
            c = this.Yc.getMinutes();
            b = this.Yc.getSeconds();
            var h = this.Yc.getDate(),
                k = this.Yc.getMonth() + 1;
            switch (this.gi) {
                case q.oi:
                    q.Mq == this.fi ? (11 < f && (f -= 12), 2 != this.dt ? (e = new ja, e.left = d.left + this.ft / 2, e.right = d.right - this.ft / 2, e.top = d.top + this.et / 2, e.bottom = d.bottom - this.et / 2, this.Du(a, f, c, b, e)) : this.Du(a, f, c, b, d)) : (0 != this.Jb ? (b = q.$f[k - 1] + 864E4 * (h - 1) + 36E4 * f + 6E3 * c + 100 * b + g, c = this.Fc + (b - this.Jb)) : c = this.Fc, q.Qq == this.fi && (c = this.Uh - c, 0 > c && (c = 0)), f = Math.floor(c / 36E4), 11 < f && (f -= 12), b = Math.floor((c - 36E4 * f) /
                        6E3), c = Math.floor((c - 36E4 * f - 6E3 * b) / 100), 2 != this.dt ? (e = new ja, e.left = d.left + this.ft / 2, e.right = d.right - this.ft / 2, e.top = d.top + this.et / 2, e.bottom = d.bottom - this.et / 2, this.Du(a, f, b, c, e)) : this.Du(a, f, b, c, d));
                    break;
                case q.AD:
                    switch (this.lK) {
                        case 0:
                            q.Mq == this.fi ? (e = " AM", 11 < f && (f -= 12, e = ""), f = f.toString(), f = this.he(f), g = c.toString(), g = this.he(g), b = f + ":" + g + e) : (0 != this.Jb ? (b = q.$f[k - 1] + 864E4 * (h - 1) + 36E4 * f + 6E3 * c + 100 * b + g, c = this.Fc + (b - this.Jb)) : c = this.Fc, q.Qq == this.fi && (c = this.Uh - c, 0 > c && (c = 0)), f = Math.floor(c / 36E4),
                                11 < f && (f -= 12), b = Math.floor((c - 36E4 * f) / 6E3), f = f.toString(), f = this.he(f), g = b.toString(), g = this.he(g), b = f + ":" + g);
                            this.Eu(a, b, d);
                            break;
                        case 1:
                            q.Mq == this.fi ? (e = " AM", 12 < f && (f -= 12, e = ""), f = f.toString(), f = this.he(f), g = c.toString(), g = this.he(g), b = b.toString(), b = this.he(b), b = f + ":" + g + ":" + b + e) : (0 != this.Jb ? (b = q.$f[k - 1] + 864E4 * (h - 1) + 36E4 * f + 6E3 * c + 100 * b + g, c = this.Fc + (b - this.Jb)) : c = this.Fc, q.Qq == this.fi && (c = this.Uh - c, 0 > c && (c = 0)), f = Math.floor(c / 36E4), 11 < f && (f -= 12), b = Math.floor((c - 36E4 * f) / 6E3), c = Math.floor((c - 36E4 * f -
                                6E3 * b) / 100), 11 < f && (f -= 12), f = f.toString(), f = this.he(f), g = b.toString(), g = this.he(g), b = c.toString(), b = this.he(b), b = f + ":" + g + ":" + b);
                            this.Eu(a, b, d);
                            break;
                        case 2:
                            q.Mq == this.fi ? (f = f.toString(), f = this.he(f), g = c.toString()) : (0 != this.Jb ? (b = q.$f[k - 1] + 864E4 * (h - 1) + 36E4 * f + 6E3 * c + 100 * b + g, c = this.Fc + (b - this.Jb)) : c = this.Fc, q.Qq == this.fi && (c = this.Uh - c, 0 > c && (c = 0)), f = Math.floor(c / 36E4), b = Math.floor((c - 36E4 * f) / 6E3), f = f.toString(), f = this.he(f), g = b.toString());
                            g = this.he(g);
                            this.Eu(a, f + ":" + g, d);
                            break;
                        case 3:
                            q.Mq == this.fi ? (f =
                                f.toString(), f = this.he(f), g = c.toString(), g = this.he(g), b = b.toString()) : (0 != this.Jb ? (b = q.$f[k - 1] + 864E4 * (h - 1) + 36E4 * f + 6E3 * c + 100 * b + g, c = this.Fc + (b - this.Jb)) : c = this.Fc, q.Qq == this.fi && (c = this.Uh - c, 0 > c && (c = 0)), f = Math.floor(c / 36E4), b = Math.floor((c - 36E4 * f) / 6E3), c = Math.floor((c - 36E4 * f - 6E3 * b) / 100), f = f.toString(), f = this.he(f), g = b.toString(), g = this.he(g), b = c.toString()), b = this.he(b), this.Eu(a, f + ":" + g + ":" + b, d)
                    }
                    break;
                case q.YC:
                    switch (this.iK) {
                        case q.dS:
                            e = "dd/mm/yyyy";
                            break;
                        case q.sR:
                            e = "dddd dd mmmm yyyy";
                            break;
                        case q.fQ:
                            switch (this.hK) {
                                case 0:
                                    e =
                                        "dd/mm/yyyy";
                                    break;
                                case 1:
                                    e = "dd mmmm yyyy";
                                    break;
                                case 2:
                                    e = "dd mmmm, yyyy";
                                    break;
                                case 3:
                                    e = "mmmm dd, yyyy";
                                    break;
                                case 4:
                                    e = "dd-mmm-yyyy";
                                    break;
                                case 5:
                                    e = "mmmm, yyyy";
                                    break;
                                case 6:
                                    e = "mmm-yy"
                            }
                    }
                    b = this.Yc.format(e);
                    this.cS(a, b, d)
            }
        },
        he: function(a) {
            2 > a.length && (a = "0" + a);
            return a
        },
        Du: function(a, b, c, d, e) {
            var f = Array(3);
            f[0] = new P;
            f[1] = new P;
            f[2] = new P;
            f[0].y = e.top + (e.bottom - e.top) / 2;
            f[0].x = e.left + (e.right - e.left) / 2;
            this.kK = f[0].x;
            this.jK = f[0].y;
            e = e.right - e.left > e.bottom - e.top ? (e.bottom - e.top) / 2 : (e.right - e.left) /
                2;
            e--;
            a.lineCap = "round";
            1 == this.dK && (f[1].x = f[0].x + e / 1.5 * Math.cos(.523 * (b + Number(c) / 60) - 1.57), f[1].y = f[0].y + e / 1.5 * Math.sin(.523 * (b + Number(c) / 60) - 1.57), this.mK = f[1].x, this.nK = f[1].y, a.Cd(f[0].x, f[0].y, f[1].x, f[1].y, this.RF, 2, 0, 0));
            1 == this.fK && (f[1].x = f[0].x + Math.cos(.104 * c - 1.57) * e, f[1].y = f[0].y + Math.sin(.104 * c - 1.57) * e, this.oK = f[1].x, this.pK = f[1].y, a.Cd(f[0].x, f[0].y, f[1].x, f[1].y, this.SF, 2, 0, 0));
            1 == this.gK && (f[1].x = f[0].x + Math.cos(.104 * Number(d) - 1.57) * e, f[1].y = f[0].y + Math.sin(.104 * Number(d) - 1.57) *
                e, this.qK = f[1].x, this.rK = f[1].y, a.Cd(f[0].x, f[0].y, f[1].x, f[1].y, this.TF, 1, 0, 0));
            if (1 == this.eK)
                for (b = 1; 13 > b; b++) f[1].x = f[0].x + .9 * Math.cos(.523 * b - 1.57) * e, f[1].y = f[0].y + .9 * Math.sin(.523 * b - 1.57) * e, f[2].x = f[0].x + Math.cos(.523 * b - 1.57) * e, f[2].y = f[0].y + Math.sin(.523 * b - 1.57) * e, a.Cd(f[1].x, f[1].y, f[2].x, f[2].y, this.wl, 1, 0, 0);
            if (2 != this.dt) {
                var g, h = new ja;
                null == this.Me && (this.Me = Array(13));
                this.hk || (this.hk = new pa(this.l.h, 2, 2));
                for (b = 1; 13 > b; b++) {
                    var k, m;
                    c = 0 == this.dt ? b.toString() : q.V_[b - 1];
                    d = this.hk.measureText(c,
                        this.fg);
                    g = this.fg.Gb;
                    k = f[0].x + Math.cos(.523 * b - 1.57) * e;
                    m = f[0].y + Math.sin(.523 * b - 1.57) * e;
                    switch (b) {
                        case 1:
                        case 2:
                            h.left = k;
                            h.bottom = m;
                            h.right = h.left + d;
                            h.top = h.bottom - g;
                            break;
                        case 3:
                            h.left = k + 2;
                            h.top = m - g / 2;
                            h.right = h.left + d;
                            h.bottom = h.top + g;
                            break;
                        case 4:
                        case 5:
                            h.left = k;
                            h.top = m;
                            h.right = h.left + d;
                            h.bottom = h.top + g;
                            break;
                        case 6:
                            h.left = k - d / 2;
                            h.top = m + 1;
                            h.right = h.left + d;
                            h.bottom = h.top + g;
                            break;
                        case 7:
                        case 8:
                            h.right = k;
                            h.top = m;
                            h.left = h.right - d;
                            h.bottom = h.top + g;
                            break;
                        case 9:
                            h.right = k - 2;
                            h.top = m - g / 2;
                            h.left = h.right -
                                d;
                            h.bottom = h.top + g;
                            break;
                        case 10:
                        case 11:
                            h.right = k;
                            h.bottom = m;
                            h.left = h.right - d;
                            h.top = h.bottom - g;
                            break;
                        case 12:
                            h.left = k - d / 2, h.bottom = m - 1, h.right = h.left + d, h.top = h.bottom - g
                    }
                    this.Me[b] || (this.Me[b] = new pa(this.l.h, d, g), this.Me[b].to(c, l.Im | l.Jm, null, this.fg, this.wl));
                    this.Me[b].fc(a, h.left + (h.right - h.left) / 2 - d / 2, h.top + (h.bottom - h.top) / 2 + g / 2 - g + 2)
                }
            }
            1 == this.mC && (a.Yw(f[0].x - e, f[0].y - e, 2 * e, 2 * e, 1, this.wl, 0, 0), a.Yw(f[0].x - e, f[0].y - e, 2 * e + 1, 2 * e + 1, 1, this.wl, 0, 0))
        },
        Eu: function(a, b, c) {
            this.hk || (this.hk = new pa(this.l.h,
                2, 2));
            var d = this.hk.measureText(b, this.fg),
                e = this.fg.Gb,
                f = c.left + (c.right - c.left) / 2 - d / 2,
                g = c.top + (c.bottom - c.top) / 2 - e / 2;
            if (null == this.pb || b != this.iZ) this.iZ = b, this.pb = new pa(this.l.h, d, e), this.pb.to(b, l.Jm | l.Im, null, this.fg, this.wl);
            this.pb.fc(a, Math.floor(f), Math.floor(g), 0, 0);
            1 == this.mC && a.Us(c.left + 1, c.top + 1, c.right - c.left, c.bottom - c.top, this.wl, 2, 0, 0)
        },
        cS: function(a, b, c) {
            this.hk || (this.hk = new pa(this.l.h, 2, 2));
            var d = this.hk.measureText(b, this.fg),
                e = this.fg.Gb,
                f = c.left + (c.right - c.left) / 2 - d / 2;
            c =
                c.top + (c.bottom - c.top) / 2 - e / 2;
            if (null == this.pb || this.nJ != b) this.nJ = b, this.pb = new pa(this.l.h, d, e), this.pb.to(b, l.Jm | l.Im, null, this.fg, this.wl);
            this.pb.fc(a, Math.floor(f), Math.floor(c))
        },
        Vc: function() {
            var a = new Date;
            a.setTime(this.mA.getTime() + (a.getTime() - this.wC.getTime()));
            return a
        },
        an: function(a) {
            this.mA.setTime(a.getTime());
            this.Yc.setTime(a.getTime());
            this.wC = new Date
        },
        Ug: function(a, b) {
            switch (a) {
                case q.LN:
                    return this.iO(b);
                case q.nD:
                    return this.Qo();
                case q.kD:
                    return this.Qo();
                case q.jD:
                    return this.Qo();
                case q.hD:
                    return this.Qo();
                case q.lD:
                    return this.Qo();
                case q.rD:
                    return this.Qo();
                case q.MN:
                    return this.jO(b);
                case q.TN:
                    return this.f.Ja
            }
            return !1
        },
        iO: function(a) {
            if (0 != this.Jb) {
                var b = this.Vc();
                return this.qr(a, 0, 10 * (this.Fc + (Math.floor(q.$f[b.getMonth()] + 864E4 * (b.getDate() - 1) + 36E4 * b.getHours() + 6E3 * b.getMinutes() + 100 * b.getSeconds() + b.getMilliseconds() / 10) - this.Jb)))
            }
            return this.qr(a, 0, 10 * this.Fc)
        },
        qr: function(a, b, c) {
            var d = a.i[b].kc;
            switch (a.i[b].tg) {
                case 0:
                    return c == d;
                case 1:
                    return c != d;
                case 2:
                    return c <=
                        d;
                case 3:
                    return c < d;
                case 4:
                    return c >= d;
                case 5:
                    return c > d
            }
            return !1
        },
        Qo: function() {
            return 0 != (this.f.Z & N.Rf) || this.l.Jc == sEventCount ? !0 : !1
        },
        jO: function(a) {
            var b;
            if (0 != this.Jb) b = this.Vc(), b = this.Uh - (this.Fc + (Math.floor(q.$f[b.getMonth()] + 864E4 * (b.getDate() - 1) + 36E4 * b.getHours() + 6E3 * b.getMinutes() + 100 * b.getSeconds() + b.getMilliseconds() / 10) - this.Jb));
            else return b = this.Uh - this.Fc, this.qr(a, 0, 10 * b);
            0 > b && (b = 0);
            return this.qr(a, 0, 10 * b)
        },
        q2: function() {
            return this.f.Ja
        },
        action: function(a, b) {
            switch (a) {
                case q.WL:
                    this.gS(b.G(this.l,
                        0));
                    break;
                case q.lM:
                    this.rS(b.G(this.l, 0));
                    break;
                case q.aM:
                    this.nS(b.G(this.l, 0));
                    break;
                case q.$L:
                    this.mS(b.G(this.l, 0));
                    break;
                case q.ZL:
                    b.G(this.l, 0);
                    break;
                case q.YL:
                    this.lS(b.G(this.l, 0));
                    break;
                case q.bM:
                    this.oS(b.G(this.l, 0));
                    break;
                case q.oM:
                    this.CS(b.G(this.l, 0));
                    break;
                case q.RL:
                    this.bS();
                    break;
                case q.uM:
                    this.ES();
                    break;
                case q.yM:
                    this.GS();
                    break;
                case q.tM:
                    this.DS();
                    break;
                case q.JL:
                    this.WQ();
                    break;
                case q.jM:
                    this.qS(b.Tr(this.l, 0));
                    break;
                case q.XL:
                    this.hS(b.lH(this.l, 0));
                    break;
                case q.vM:
                    this.FS();
                    break;
                case q.zM:
                    this.HS();
                    break;
                case q.mM:
                    this.yS(b.G(this.l, 0));
                    break;
                case q.pM:
                    this.AS(b.G(this.l, 0));
                    break;
                case q.nM:
                    this.zS(b.G(this.l, 0));
                    break;
                case q.qM:
                    this.BS(b.G(this.l, 0))
            }
        },
        gS: function(a) {
            if (0 <= a && 100 > a) {
                var b = this.Vc();
                b.setMilliseconds(10 * a);
                this.an(b)
            }
        },
        rS: function(a) {
            if (0 <= a && 60 > a) {
                var b = this.Vc();
                b.setSeconds(a);
                this.an(b)
            }
        },
        nS: function(a) {
            if (0 <= a && 60 > a) {
                var b = this.Vc();
                b.setMinutes(a);
                this.an(b)
            }
        },
        mS: function(a) {
            if (0 <= a && 24 > a) {
                var b = this.Vc();
                b.setHours(a);
                this.an(b)
            }
        },
        e4: function() {},
        lS: function(a) {
            if (1 <= a && 32 > a) {
                var b = this.Vc();
                b.setDate(a);
                this.an(b)
            }
        },
        oS: function(a) {
            if (1 <= a && 13 > a) {
                var b = this.Vc();
                b.setMonth(a - 1);
                this.an(b)
            }
        },
        CS: function(a) {
            if (1979 < a && 2100 > a) {
                var b = this.Vc();
                b.setFullYear(a);
                this.an(b)
            }
        },
        bS: function() {
            this.Fc = this.Jb = 0
        },
        ES: function() {
            if (0 == this.Jb) {
                var a = this.Vc();
                this.Jb = Math.floor(q.$f[a.getMonth()] + 864E4 * (a.getDate() - 1) + 36E4 * a.getHours() + 6E3 * a.getMinutes() + 100 * a.getSeconds() + a.getMilliseconds() / 10)
            }
        },
        GS: function() {
            if (0 != this.Jb) {
                var a = this.Vc();
                this.Fc +=
                    Math.floor(q.$f[a.getMonth()] + 864E4 * (a.getDate() - 1) + 36E4 * a.getHours() + 6E3 * a.getMinutes() + 100 * a.getSeconds() + a.getMilliseconds() / 10) - this.Jb;
                this.Jb = 0
            }
        },
        DS: function() {
            this.f.qm()
        },
        WQ: function() {
            this.f.Gl()
        },
        qS: function(a) {
            a.Lr && this.f.setPosition(a.x, a.y)
        },
        hS: function(a) {
            this.Uh = a / 10;
            this.Fc = this.Jb = 0
        },
        FS: function() {
            if (0 == this.Jb) {
                var a = this.Vc();
                this.Jb = Math.floor(q.$f[a.getMonth()] + 864E4 * (a.getDate() - 1) + 36E4 * a.getHours() + 6E3 * a.getMinutes() + 100 * a.getSeconds() + a.getMilliseconds() / 10)
            }
        },
        HS: function() {
            if (0 !=
                this.Jb) {
                var a = this.Vc();
                this.Fc += Math.floor(q.$f[a.getMonth()] + 864E4 * (a.getDate() - 1) + 36E4 * a.getHours() + 6E3 * a.getMinutes() + 100 * a.getSeconds() + a.getMilliseconds() / 10) - this.Jb;
                this.Jb = 0
            }
        },
        yS: function(a) {
            this.f.uo(a)
        },
        AS: function(a) {
            this.f.vo(a)
        },
        zS: function(a) {
            this.f.pm(a)
        },
        BS: function(a) {
            this.f.nm(a)
        },
        Xg: function(a) {
            switch (a) {
                case q.oP:
                    return this.uQ();
                case q.PP:
                    return this.KQ();
                case q.FP:
                    return this.GQ();
                case q.zP:
                    return this.DQ();
                case q.sP:
                    return this.AQ();
                case q.rP:
                    return this.zQ();
                case q.IP:
                    return this.HQ();
                case q.WP:
                    return this.SQ();
                case q.pP:
                    return this.xQ();
                case q.mP:
                    return this.vQ();
                case q.nP:
                    return this.wQ();
                case q.AP:
                    return this.BQ();
                case q.BP:
                    return this.CQ();
                case q.GP:
                    return this.EQ();
                case q.HP:
                    return this.FQ();
                case q.QP:
                    return this.IQ();
                case q.RP:
                    return this.JQ();
                case q.qP:
                    return this.yQ();
                case q.UP:
                    return this.f.s;
                case q.XP:
                    return this.f.o;
                case q.VP:
                    return this.f.S;
                case q.YP:
                    return this.RQ()
            }
            return 0
        },
        uQ: function() {
            return Math.floor(this.Vc().getMilliseconds() / 10)
        },
        KQ: function() {
            return this.Vc().getSeconds()
        },
        GQ: function() {
            return this.Vc().getMinutes()
        },
        DQ: function() {
            return this.Vc().getHours()
        },
        AQ: function() {
            return this.Vc().getDay()
        },
        zQ: function() {
            return this.Vc().getDate()
        },
        HQ: function() {
            return this.Vc().getMonth() + 1
        },
        SQ: function() {
            return this.Vc().getFullYear()
        },
        xQ: function() {
            if (0 != this.Jb) {
                var a = this.Vc();
                return this.Fc + (Math.floor(q.$f[a.getMonth()] + 864E4 * (a.getDate() - 1) + 36E4 * a.getHours() + 6E3 * a.getMinutes() + 100 * a.getSeconds() + a.getMilliseconds() / 10) - this.Jb)
            }
            return this.Fc
        },
        vQ: function() {
            return q.oi ==
                this.gi ? this.jK + this.l.da : 0
        },
        wQ: function() {
            return q.oi == this.gi ? this.kK + this.l.fa : 0
        },
        BQ: function() {
            return q.oi == this.gi ? this.mK + this.l.da : 0
        },
        CQ: function() {
            return q.oi == this.gi ? this.nK + this.l.fa : 0
        },
        EQ: function() {
            return q.oi == this.gi ? this.oK + this.l.da : 0
        },
        FQ: function() {
            return q.oi == this.gi ? this.pK + this.l.fa : 0
        },
        IQ: function() {
            return q.oi == this.gi ? this.qK + this.l.da : 0
        },
        JQ: function() {
            return q.oi == this.gi ? this.rK + this.l.fa : 0
        },
        yQ: function() {
            var a;
            0 != this.Jb ? (a = this.Vc(), a = this.Uh - (this.Fc + (Math.floor(q.$f[a.getMonth()] +
                864E4 * (a.getDate() - 1) + 36E4 * a.getHours() + 6E3 * a.getMinutes() + 100 * a.getSeconds() + a.getMilliseconds() / 10) - this.Jb))) : a = this.Uh - this.Fc;
            0 > a && (a = 0);
            return a
        },
        f2: function() {
            return this.f.s
        },
        h2: function() {
            return this.f.o
        },
        g2: function() {
            return this.f.S
        },
        RQ: function() {
            return this.f.yg()
        }
    });
    var Bb = function() {
        function a(a, b) {
            a = String(a);
            for (b = b || 2; a.length < b;) a = "0" + a;
            return a
        }
        var b = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            c = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            d = /[^-+\dA-Z]/g;
        return function(e, f, g) {
            var h = Bb;
            1 != arguments.length || "[object String]" != Object.prototype.toString.call(e) || /\d/.test(e) || (f = e, e = void 0);
            e = e ? new Date(e) : new Date;
            if (isNaN(e)) throw SyntaxError("invalid date");
            f = String(h.jI[f] || f || h.jI["default"]);
            "UTC:" == f.slice(0, 4) && (f = f.slice(4), g = !0);
            var k = g ? "getUTC" : "get",
                l = e[k + "Date"](),
                m = e[k + "Day"](),
                q = e[k + "Month"](),
                t = e[k + "FullYear"](),
                n = e[k + "Hours"](),
                u = e[k + "Minutes"](),
                v = e[k + "Seconds"](),
                k = e[k + "Milliseconds"](),
                w = g ? 0 : e.getTimezoneOffset(),
                A = {
                    d: l,
                    l5: a(l),
                    m5: h.Gv.hG[m],
                    n5: h.Gv.hG[m + 7],
                    Si: q + 1,
                    q6: a(q + 1),
                    r6: h.Gv.AI[q],
                    s6: h.Gv.AI[q + 12],
                    e7: String(t).slice(2),
                    f7: t,
                    Vr: n % 12 || 12,
                    Z5: a(n % 12 || 12),
                    i2: n,
                    j2: a(n),
                    E2: u,
                    F2: a(u),
                    P6: v,
                    Z6: a(v),
                    h6: a(k, 3),
                    t2: a(99 < k ? Math.round(k / 10) : k),
                    t: 12 > n ? "a" : "p",
                    c7: 12 > n ? "am" : "pm",
                    f4: 12 > n ? "A" : "P",
                    m4: 12 > n ? "AM" : "PM",
                    M4: g ? "UTC" : (String(e).match(c) || [""]).pop().replace(d, ""),
                    z6: (0 < w ? "-" : "+") + a(100 * Math.floor(Math.abs(w) / 60) + Math.abs(w) % 60, 4),
                    X3: ["th", "st", "nd", "rd"][3 < l % 10 ? 0 : (10 != l % 100 - l % 10) * l % 10]
                };
            return f.replace(b, function(a) {
                return a in
                    A ? A[a] : a.slice(1, a.length - 1)
            })
        }
    }();
    Bb.jI = {
        "default": "ddd mmm dd yyyy HH:MM:ss",
        W6: "m/d/yy",
        o6: "mmm d, yyyy",
        j6: "mmmm d, yyyy",
        D5: "dddd, mmmm d, yyyy",
        X6: "h:MM TT",
        p6: "h:MM:ss TT",
        k6: "h:MM:ss TT Z",
        c6: "yyyy-mm-dd",
        e6: "HH:MM:ss",
        d6: "yyyy-mm-dd'T'HH:MM:ss",
        f6: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };
    Bb.Gv = {
        hG: "Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        AI: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ")
    };
    Date.prototype.format = function(a, b) {
        return Bb(this, a, b)
    };
    wa.x2 = 1;
    wa.z2 = 2;
    wa.qR = 4;
    wa.pR = 8;
    wa.XD = 16;
    wa.rR = 32;
    wa.oR = 64;
    wa.y2 = 128;
    wa.prototype = l.extend(new db, {
        yi: function(a, b, c) {
            b = (a ? a.G(this.l, b) : this.f.ha()) - (this.list.yw ? 1 : 0);
            if (c && (0 > b || b >= this.Ce())) throw Error("Bad index: " + b);
            return b
        },
        Ly: function(a) {
            return a + (this.list.yw ? 1 : 0)
        },
        PS: function(a) {
            if (0 > a) return 0;
            var b = this.Ce();
            return a >= b ? b - 1 : a
        },
        Ku: function() {
            !this.dd || this.list.V & wa.rR || (this.element.style.backgroundColor = l.ke(this.list.background),
                this.element.style.color = l.ke(this.list.je))
        },
        My: function(a) {
            for (var b = this.Ce(), c = a; c < b; c++) a = this.Df.get(c), a.index = c
        },
        JE: function() {
            if (!this.dd) {
                var a = this.Ce(),
                    b = this.list;
                this.dd = !0;
                var c = document.createElement("select");
                c.className = "fusionRunControlKcList";
                c.size = 10;
                c.style["overflow-y"] = "auto";
                b.V & wa.oR ? (c.style.borderStyle = "inset", c.style.borderWidth = "2px") : (c.style.borderStyle = "solid", b.V & wa.pR ? (c.style.borderWidth = "1px", c.style.borderColor = "#000000") : c.style.borderWidth = "0px");
                var d = this;
                c.ondblclick = function() {
                    d.list.nv = d.f.b.Jc;
                    d.f.Ge(2, 0)
                };
                c.onchange = function() {
                    d.$g = d.element.selectedIndex;
                    d.list.wK = d.f.b.Jc;
                    d.f.Ge(3, 0)
                };
                c.onfocus = function() {
                    d.Ep = !0
                };
                c.onblur = function() {
                    d.Ep = !1
                };
                this.pC(c, 0 == (b.V & wa.XD));
                for (c = 0; c < a; c++) b = this.Df.get(c), this.ep(b.value), null != b.data && this.BK(c, b.data);
                this.Df = null;
                this.vK(this.$g);
                this.Tv ? this.pG() : this.BG();
                this.Ep ? this.WG() : this.oF();
                this.wh(this.UH);
                this.Ku()
            }
        },
        zg: function() {
            return 5
        },
        Kh: function(a) {
            var b = this.list;
            this.f.S = a.v();
            this.f.T = a.v();
            this.UH = this.f.b.h.md ? a.cq() : a.Vw();
            b.je = a.sc();
            a.wa(144);
            b.background = a.sc();
            b.V = a.C();
            var c = a.ra();
            b.yw = 1 == a.C();
            a.wa(12);
            for (0 == (b.V & wa.XD) && this.JE(); 0 < c--;) this.ep(a.cb(), !1);
            this.ot()
        },
        Ug: function(a) {
            switch (a) {
                case 0:
                    return this.i6;
                case 1:
                    return !this.Tv;
                case 2:
                    return 0 != (this.f.Z & N.Rf) || this.f.b.Jc == this.list.nv;
                case 3:
                    return 0 != (this.f.Z & N.Rf) || this.f.b.Jc == this.list.wK;
                case 4:
                    return this.Ep
            }
        },
        action: function(a, b) {
            try {
                switch (a) {
                    case 0:
                        this.mz();
                        var c = l.Un(b.Sr(this.l, 0)),
                            d = localStorage.getItem(c),
                            e, f = 0;
                        if (d) {
                            for (; f < d.length;) e = d.indexOf(ua.separator, f), this.ep(d.substring(f, e), !1), f = e + ua.separator.length;
                            this.ot();
                            break
                        }
                        try {
                            var g, h = this.l.h.xv(c);
                            h && (g = h.open());
                            g || (g = new U, g.sJ(c));
                            if (g) {
                                for (g.lv(); !g.Rh();) this.ep(g.XB(), !1);
                                this.ot()
                            }
                        } catch (fi) {
                            if (document.debug) throw fi;
                            this.mz()
                        }
                        break;
                    case 4:
                        f = l.Un(b.Sr(this.l, 0));
                        localStorage.setItem(f, this.XX(ua.separator));
                        break;
                    case 5:
                        this.mz();
                        break;
                    case 6:
                        this.ep(b.Eb(this.l, 0), !0);
                        break;
                    case 7:
                        var k = this.yi(b, 0, !1),
                            m = b.Eb(this.l, 1);
                        0 > k || k >= this.Ce() ?
                            this.ep(m, !0) : this.insertRow(m, k, !0);
                        break;
                    case 8:
                        this.XZ(this.yi(b, 0, !0));
                        break;
                    case 9:
                        this.vK(this.yi(b, 0, !1));
                        break;
                    case 10:
                        this.f.Ja = !0;
                        this.I_();
                        break;
                    case 11:
                        this.f.Ja = !1;
                        this.UX();
                        break;
                    case 12:
                        this.WG();
                        break;
                    case 13:
                        this.BG();
                        break;
                    case 14:
                        this.pG();
                        break;
                    case 15:
                        k = b.Tr(this.l, 0);
                        k.Lr && this.setPosition(k.x, k.y);
                        break;
                    case 16:
                        this.uo(b.G(this.l, 0));
                        break;
                    case 17:
                        this.vo(b.G(this.l, 0));
                        break;
                    case 18:
                        this.so(b.G(this.l, 0), b.G(this.l, 1));
                        break;
                    case 19:
                        this.pm(b.G(this.l, 0));
                        break;
                    case 20:
                        this.nm(b.G(this.l,
                            0));
                        break;
                    case 21:
                        this.oF();
                        break;
                    case 22:
                        this.oC(0);
                        break;
                    case 23:
                        this.oC(this.yi(b, 0, !0));
                        break;
                    case 24:
                        this.oC(this.Ce() - 1);
                        break;
                    case 25:
                        this.list.je = b.Rr(this.l, 0);
                        this.Ku();
                        break;
                    case 26:
                        this.list.background = b.Rr(this.l, 0);
                        this.Ku();
                        break;
                    case 29:
                        var q = this.yi(b, 0, !0),
                            t = b.G(this.l, 1);
                        this.BK(q, t);
                        break;
                    case 30:
                        q = this.yi(b, 0, !0), d = b.Eb(this.l, 1), this.F_(q, d)
                }
            } catch (fi) {}
        },
        Xg: function(a) {
            switch (a) {
                case 0:
                    return this.Ly(this.$g);
                case 1:
                    return this.GX();
                case 2:
                    return "";
                case 3:
                    return "";
                case 4:
                    return this.$z(this.yi(null,
                        0, !1));
                case 5:
                    return this.f.ha(), "";
                case 6:
                    return this.f.ha(), "";
                case 7:
                    return this.Ce();
                case 8:
                    return this.f.s;
                case 9:
                    return this.f.o;
                case 10:
                    return this.f.S;
                case 11:
                    return this.f.T;
                case 12:
                    return this.list.je;
                case 13:
                    return this.list.background;
                case 14:
                    a = this.f.ha().toLowerCase();
                    var b = this.yi(null, 0, !1);
                    a = this.SG(a, b, !1);
                    return -1 == a ? a : this.Ly(a);
                case 15:
                    return a = this.f.ha().toLowerCase(), b = this.yi(null, 0, !1), a = this.SG(a, b, !0), -1 == a ? a : this.Ly(a);
                case 16:
                    return this.Ce() - (this.list.yw ? 0 : 1);
                case 17:
                    return this.FX(this.yi(null,
                        0, !1))
            }
        },
        Bv: function() {
            return this.list.je
        },
        qx: function(a) {
            this.list.je = a;
            this.Ku()
        },
        I_: function() {
            this.JE();
            this.dd && (this.element.style.visibility = "visible")
        },
        UX: function() {
            this.dd && (this.element.style.visibility = "hidden")
        },
        WG: function() {
            this.Ep = !0;
            this.dd && this.element.focus()
        },
        oF: function() {
            this.Ep = !1;
            this.dd && this.element.blur()
        },
        BG: function() {
            this.Tv = !1;
            this.dd && (this.element.disabled = !1)
        },
        pG: function() {
            this.Tv = !0;
            this.dd && (this.element.disabled = !0)
        },
        oC: function(a) {
            this.$g = a = this.PS(a);
            this.dd &&
                (this.element.selectedIndex = a)
        },
        $z: function(a) {
            return 0 > a || a >= this.Ce() ? "" : this.dd ? this.element.options[a].textContent : this.Df.get(a).value
        },
        FX: function(a) {
            if (0 > a || a >= this.Ce()) return "";
            a = this.dd ? Number(this.element.options[a].getAttribute("data-mmf")) : this.Df.get(a).data;
            return null == a ? "" : a
        },
        ep: function(a, b) {
            this.dd ? this.element.add(new Option(a)) : this.Df.add({
                index: this.Ce(),
                value: a,
                data: null
            });
            b && this.ot()
        },
        insertRow: function(a, b, c) {
            this.dd ? this.element.add(new Option(a), b) : (this.Df.IH(b, {
                index: 0,
                value: a,
                data: null
            }), this.My(b + 1));
            c && this.ot()
        },
        F_: function(a, b) {
            0 > a || a >= this.Ce() || (this.dd ? this.element.options[a].textContent = b : this.Df.get(a).value = b)
        },
        BK: function(a, b) {
            0 > a || a >= this.Ce() || (this.dd ? this.element.options[a].setAttribute("data-mmf", b) : this.Df.get(a).data = b)
        },
        SG: function(a, b, c) {
            var d = this.Ce();
            if (b >= d) return -1;
            0 > b && (b = 0);
            if (c)
                if (this.dd)
                    for (; b < d; ++b) {
                        if (this.element.options[b].textContent.toLowerCase() == a) return b
                    } else
                        for (; b < d; ++b) {
                            if (this.Df.get(b).value.toLowerCase() == a) return b
                        } else if (this.dd)
                            for (; b <
                                d; ++b) {
                                if (-1 !== this.element.options[b].textContent.toLowerCase().indexOf(a)) return b
                            } else
                                for (; b < d; ++b)
                                    if (-1 !== this.Df.get(b).value.toLowerCase().indexOf(a)) return b;
            return -1
        },
        ot: function() {
            this.list.V & wa.qR && (this.dd ? Array.prototype.sort.call(this.element.options, function(a, b) {
                return a.text == b.text ? 0 : a.text > b.text ? 1 : -1
            }) : (this.Df.sort(function(a, b) {
                return a.value == b.value ? 0 : a.value > b.value ? 1 : -1
            }), this.My(0)))
        },
        XZ: function(a) {
            0 > a || a >= this.Ce() || (this.dd ? this.element.remove(a) : (this.Df.ao(a), this.My(a)),
                -1 != this.$g && (--this.$g, 0 > this.$g && (this.$g = 0)))
        },
        mz: function() {
            this.$g = -1;
            this.dd ? this.element.options.length = 0 : this.Df.clear()
        },
        Ce: function() {
            return this.dd ? this.element.options.length : this.Df.size()
        },
        XX: function(a) {
            for (var b = this.Ce(), c = "", d = 0; d < b; d++) c += this.$z(d) + a;
            return c
        },
        vK: function(a) {
            0 > a || a >= this.Ce() || (this.$g = a, this.dd && (this.element.selectedIndex = a))
        },
        GX: function() {
            return this.$z(this.$g)
        },
        U5: function() {
            return this.$g
        }
    });
    M.wD = 0;
    M.xD = 1;
    M.UN = 2;
    M.VN = 3;
    M.Nq = 4;
    M.LL = 0;
    M.AM = 1;
    M.xM = 2;
    M.UL = 3;
    M.VL = 4;
    M.hM = 5;
    M.iM = 6;
    M.cM = 7;
    M.dM = 8;
    M.eM = 9;
    M.ML = 10;
    M.OL = 11;
    M.NL = 12;
    M.TL = 13;
    M.SL = 14;
    M.KP = 0;
    M.SP = 1;
    M.dP = 2;
    M.hP = 3;
    M.fP = 4;
    M.jP = 5;
    M.eP = 6;
    M.iP = 7;
    M.gP = 8;
    M.kP = 9;
    M.lP = 10;
    M.NP = 11;
    M.OP = 12;
    M.tP = 13;
    M.uP = 14;
    M.vP = 15;
    M.tO = 0;
    M.vO = 1;
    M.uO = 2;
    M.wO = 3;
    M.prototype = l.extend(new va, {
        zg: function() {
            return M.Nq
        },
        Kh: function(a) {
            this.Ib = {};
            this.wr = {};
            this.ug = 0;
            this.pp = this.xl = null;
            this.uc = new yb;
            var b = new BinaryParser(!1),
                c = a.YB(4);
            this.uc.kh = b.AC(c);
            c = a.YB(4);
            this.uc.Ae = b.AC(c);
            c = a.YB(4);
            this.uc.mh = b.AC(c);
            return !1
        },
        Zj: function() {
            var a = !1,
                b, c;
            for (c in this.Ib) {
                var d = this.Rt(c),
                    e = this.Ib[c];
                if (null != d) {
                    if (0 == e.lh) {
                        if (0 == e.sj) {
                            var f = (new Date).getTime() - e.Ok.getTime();
                            b = f / e.um;
                            f >= e.um && (a = !0)
                        } else e.Fr++, b = e.Fr / e.um, e.Fr >= e.um && (a = !0);
                        b = this.AU(e.Ez, e.Tz, e.Uz, b, e);
                        d.s = l.ub(e.Mf + (e.xr - e.Mf) * b + .5);
                        d.o = l.ub(e.Nf + (e.yr - e.Nf) * b + .5);
                        d.c.Y = !0;
                        a && (a = !1, d.s = l.ub(e.xr), d.o = l.ub(e.yr), this.wr[c] = e, delete this.Ib[c], this.ug--)
                    }
                } else delete this.Ib[d], this.ug--
            }
            for (var g in this.wr) this.xl = this.Rt(g), this.pp = this.wr[g], this.f.Ge(M.wD, 0), this.f.Ge(M.xD,
                0), delete this.wr[g];
            this.xl = null;
            null == this.pp;
            return 0
        },
        Bw: function() {
            this.UE()
        },
        rr: function() {
            this.VE()
        },
        Ug: function(a, b) {
            switch (a) {
                case M.wD:
                    return !0;
                case M.xD:
                    return this.oV(b);
                case M.UN:
                    return this.mV(b, I.qe(this.l.tr));
                case M.VN:
                    return this.nV(b, I.qe(this.l.tr))
            }
            return !1
        },
        action: function(a, b) {
            switch (a) {
                case M.LL:
                    this.TT(b.vb(this.l, 0), b.kH(this.l, 1), b.G(this.l, 2), b.G(this.l, 3), b.kH(this.l, 4), b.G(this.l, 5));
                    break;
                case M.AM:
                    this.eU(b.vb(this.l, 0));
                    break;
                case M.xM:
                    this.dU();
                    break;
                case M.UL:
                    this.XT(b.vb(this.l,
                        0));
                    break;
                case M.VL:
                    this.YT(b.Li(this.l, 0));
                    break;
                case M.hM:
                    this.bU(b.Li(this.l, 0));
                    break;
                case M.iM:
                    this.cU(b.Li(this.l, 0));
                    break;
                case M.cM:
                    this.ZT(b.vb(this.l, 0), b.Li(this.l, 1));
                    break;
                case M.dM:
                    this.$T(b.vb(this.l, 0), b.Li(this.l, 1));
                    break;
                case M.eM:
                    this.aU(b.vb(this.l, 0), b.Li(this.l, 1));
                    break;
                case M.ML:
                    this.UT(b.G(this.l, 0), b.G(this.l, 1), b.G(this.l, 2), b.G(this.l, 3), b.G(this.l, 4), b.G(this.l, 5), b.G(this.l, 6), b.G(this.l, 7));
                    break;
                case M.OL:
                    this.VT(b.vb(this.l, 0));
                    break;
                case M.NL:
                    this.UE();
                    break;
                case M.TL:
                    this.WT(b.vb(this.l,
                        0));
                    break;
                case M.SL:
                    this.VE()
            }
        },
        Xg: function(a) {
            switch (a) {
                case M.KP:
                    return this.ug;
                case M.SP:
                    return this.eX();
                case M.dP:
                    return this.UW(this.f.ha(), this.f.ha());
                case M.hP:
                    return this.YW(this.f.ha(), this.f.ha());
                case M.fP:
                    return this.WW(this.f.ha(), this.f.ha(), this.f.ha());
                case M.jP:
                    return this.$W(this.f.ha(), this.f.ha(), this.f.ha());
                case M.eP:
                    return this.VW(this.f.ha(), this.f.ha(), this.f.ha(), this.f.ha());
                case M.iP:
                    return this.ZW(this.f.ha(), this.f.ha(), this.f.ha(), this.f.ha());
                case M.gP:
                    return this.XW(this.f.ha(),
                        this.f.ha(), this.f.ha(), this.f.ha(), this.f.ha());
                case M.kP:
                    return this.aX(this.f.ha(), this.f.ha(), this.f.ha(), this.f.ha(), this.f.ha());
                case M.lP:
                    return this.bX(this.f.ha());
                case M.NP:
                    return this.cX(this.f.ha());
                case M.OP:
                    return this.dX(this.f.ha());
                case M.tP:
                    return this.uc.Ae;
                case M.uP:
                    return this.uc.kh;
                case M.vP:
                    return this.uc.mh
            }
            return 0
        },
        d5: function() {
            return !0
        },
        oV: function(a) {
            a = a.i[0].la;
            null == this.select && (this.select = new lb(this.l.h));
            return null != this.xl && this.select.dZ(this.xl, a) ? (this.select.q_(this.xl),
                !0) : !1
        },
        lX: function(a, b) {
            return null != a.Ib[a.mg(b)]
        },
        mV: function(a, b) {
            var c = a.i[0].la;
            null == this.select && (this.select = new lb(this.l.h));
            return this.select.PG(this, c, b, this.lX)
        },
        mX: function(a, b) {
            var c = a.Ib[a.mg(b)];
            return null != c && 0 != c.lh
        },
        nV: function(a, b) {
            var c = a.i[0].la;
            null == this.select && (this.select = new lb(this.l.h));
            return this.select.PG(this, c, b, this.mX)
        },
        TT: function(a, b, c, d, e, f) {
            if (void 0 !== a && null !== a && void 0 !== a.s && void 0 !== a.o) {
                var g = new yb;
                g.Ae = this.uc.Ae;
                g.kh = this.uc.kh;
                g.mh = this.uc.mh;
                g.Mf = a.s;
                g.Nf = a.o;
                g.xr = c;
                g.yr = d;
                g.um = f;
                g.fixed = this.mg(a);
                b.wa(1);
                g.Ez = b.lb();
                g.Tz = b.lb();
                g.Uz = b.lb();
                g.sj = e.lb();
                0 == g.sj && (g.Ok = new Date);
                a = this.mg(a);
                null == this.Ib[a] && this.ug++;
                this.Ib[a] = g
            }
        },
        UT: function(a, b, c, d, e, f, g, h) {
            var k = new yb;
            k.Ae = this.uc.Ae;
            k.kh = this.uc.kh;
            k.mh = this.uc.mh;
            var l = this.Rt(a);
            null != l && (k.fixed = a, k.Ez = b, k.Tz = c, k.Uz = d, k.Mf = l.s, k.Nf = l.o, k.xr = e, k.yr = f, k.um = h, k.sj = g, 0 == k.sj && (k.Ok = new Date), a = this.mg(l), null == this.Ib[a] && this.ug++, this.Ib[a] = k)
        },
        eU: function(a) {
            a = this.mg(a);
            null !=
                this.Ib[a] && (delete this.Ib[a], this.ug--)
        },
        dU: function() {
            for (var a in this.Ib) delete this.Ib[a];
            this.ug = 0
        },
        VT: function(a) {
            a = this.Ib[this.mg(a)];
            null != a && (0 == a.lh && 0 == a.sj && (a.Cw = (new Date).getTime()), a.lh++)
        },
        UE: function() {
            for (var a in this.Ib) {
                var b = this.Ib[a];
                null != b && (0 == b.lh && 0 == b.sj && (b.Cw = (new Date).getTime()), b.lh++)
            }
            this.ug = 0
        },
        WT: function(a) {
            a = this.Ib[this.mg(a)];
            null != a && 0 != a.lh && (a.lh--, 0 == a.lh && 0 == a.sj && a.Ok.setTime(a.Ok.getTime() + ((new Date).getTime() - a.Cw)))
        },
        VE: function() {
            for (var a in this.Ib) {
                var b =
                    this.Ib[a];
                null != b && 0 != b.lh && (b.lh--, 0 == b.lh && 0 == b.sj && b.Ok.setTime(b.Ok.getTime() + ((new Date).getTime() - b.Cw)))
            }
            this.ug = 0
        },
        XT: function(a) {
            var b = null,
                c = this.mg(a);
            null != this.Ib[c] && (b = this.Ib[c], delete this.Ib[c], this.ug--);
            null == b && (b = new yb);
            if (0 == b.fixed)
                if (null != this.pp && this.pp.fixed == c) b = this.pp;
                else return;
            b.xr = b.Mf;
            b.yr = b.Nf;
            b.Mf = a.s;
            b.Nf = a.o;
            0 == b.sj ? (b.um = Math.floor((new Date).getTime() - b.Ok.getTime()), b.Ok = new Date) : (b.um = b.Fr, b.Fr = 0);
            this.Ib[c] = b;
            this.ug++
        },
        YT: function(a) {
            this.uc.Ae = a
        },
        bU: function(a) {
            this.uc.kh = a
        },
        cU: function(a) {
            this.uc.mh = a
        },
        ZT: function(a, b) {
            var c = this.mg(a),
                d = this.Ib[c];
            null != d && (d.Ae = b, this.Ib[c] = d)
        },
        $T: function(a, b) {
            var c = this.mg(a),
                d = this.Ib[c];
            null != d && (d.kh = b, this.Ib[c] = d)
        },
        aU: function(a, b) {
            var c = this.mg(a),
                d = this.Ib[c];
            null != d && (d.mh = b, this.Ib[c] = d)
        },
        y5: function() {
            return this.ug
        },
        eX: function() {
            return null == this.xl ? 0 : this.mg(this.xl)
        },
        UW: function(a, b) {
            return this.Cr(a, b, this.uc)
        },
        YW: function(a, b) {
            return this.Dr(a, b, this.uc)
        },
        WW: function(a, b, c) {
            return this.Cz(a,
                b, c, this.uc)
        },
        $W: function(a, b, c) {
            return this.Dz(a, b, c, this.uc)
        },
        VW: function(a, b, c, d) {
            c = this.Cr(c, d, this.uc);
            return a + (b - a) * c
        },
        ZW: function(a, b, c, d) {
            c = this.Dr(c, d, this.uc);
            return a + (b - a) * c
        },
        XW: function(a, b, c, d, e) {
            c = this.Cz(c, d, e, this.uc);
            return a + (b - a) * c
        },
        aX: function(a, b, c, d, e) {
            c = this.Dz(c, d, e, this.uc);
            return a + (b - a) * c
        },
        bX: function(a) {
            return null != this.gy(a) ? this.Ib[a].Ae : -1
        },
        cX: function(a) {
            return null != this.gy(a) ? this.Ib[a].kh : -1
        },
        dX: function(a) {
            return null != this.gy(a) ? this.Ib[a].mh : -1
        },
        v5: function() {
            return this.uc.Ae
        },
        w5: function() {
            return this.uc.kh
        },
        x5: function() {
            return this.uc.mh
        },
        BY: function(a) {
            return a
        },
        BZ: function(a) {
            return Math.pow(a, 2)
        },
        zV: function(a) {
            return Math.pow(a, 3)
        },
        EZ: function(a) {
            return Math.pow(a, 4)
        },
        FZ: function(a) {
            return Math.pow(a, 5)
        },
        K_: function(a) {
            return 1 - Math.sin(90 * (1 - a) * Math.PI / 180)
        },
        fX: function(a) {
            return Math.pow(2, 10 * a) / 1024
        },
        HU: function(a) {
            return 1 - Math.sqrt(1 - Math.pow(a, 2))
        },
        back: function(a, b) {
            return (b.kh + 1) * Math.pow(a, 3) - b.kh * Math.pow(a, 2)
        },
        TV: function(a, b) {
            --a;
            var c = Math.max(1, b.Ae);
            return -(c * Math.pow(2, 10 * a) * Math.sin(2 * (a - b.mh / (2 * Math.PI) * Math.asin(1 / c)) * Math.PI / b.mh))
        },
        Se: function(a, b) {
            a = 1 - a;
            if (a < 8 / 22) return 1 - 7.5625 * a * a;
            if (a < 16 / 22) return a -= 12 / 22, 1 - b.Ae * (7.5625 * a * a + .75) - (1 - b.Ae);
            if (a < 20 / 22) return a -= 18 / 22, 1 - b.Ae * (7.5625 * a * a + .9375) - (1 - b.Ae);
            a -= 21 / 22;
            return 1 - b.Ae * (7.5625 * a * a + .984375) - (1 - b.Ae)
        },
        uG: function(a, b, c) {
            switch (a) {
                default:
                case 0:
                    return this.BY(b, c);
                case 1:
                    return this.BZ(b, c);
                case 2:
                    return this.zV(b, c);
                case 3:
                    return this.EZ(b, c);
                case 4:
                    return this.FZ(b, c);
                case 5:
                    return this.K_(b,
                        c);
                case 6:
                    return this.fX(b, c);
                case 7:
                    return this.HU(b, c);
                case 8:
                    return this.back(b, c);
                case 9:
                    return this.TV(b, c);
                case 10:
                    return this.Se(b, c)
            }
        },
        Cr: function(a, b, c) {
            return this.uG(a, b, c)
        },
        Dr: function(a, b, c) {
            return 1 - this.uG(a, 1 - b, c)
        },
        Cz: function(a, b, c, d) {
            return .5 > c ? this.Cr(a, 2 * c, d) / 2 : this.Dr(b, 2 * (c - .5), d) / 2 + .5
        },
        Dz: function(a, b, c, d) {
            return .5 > c ? this.Dr(a, 2 * c, d) / 2 : this.Cr(b, 2 * (c - .5), d) / 2 + .5
        },
        AU: function(a, b, c, d, e) {
            switch (a) {
                default:
                case M.tO:
                    return this.Cr(b, d, e);
                case M.vO:
                    return this.Dr(b, d, e);
                case M.uO:
                    return this.Cz(b,
                        c, d, e);
                case M.wO:
                    return this.Dz(b, c, d, e)
            }
        },
        mg: function(a) {
            return (a.Fb << 16) + (a.ea & 65535)
        },
        gy: function(a) {
            for (var b in controlled)
                if (b == a) return this.Rt(b);
            return null
        },
        Rt: function(a) {
            return this.f.b.H[a & 65535]
        }
    });
    BinaryParser = function(a, b) {
        this.cz = a;
        this.nU = b
    };
    BinaryParser.prototype = {
        GV: function(a, b, c) {
            var d = ((d = new this.XC(this.cz, a)).uF(b + c + 1), d);
            a = Math.pow(2, c - 1) - 1;
            var e = d.PJ(b + c, 1);
            c = d.PJ(b, c);
            var f = 0,
                g = 2,
                h = d.buffer.length + (-b >> 3) - 1,
                k, l, m;
            do
                for (k = d.buffer[++h], l = b % 8 || 8, m = 1 << l; m >>= 1; k & m && (f += 1 /
                        g), g *= 2); while (b -= l);
            return c == (a << 1) + 1 ? f ? NaN : e ? -Infinity : Infinity : (1 + -2 * e) * (c || f ? c ? Math.pow(2, c - a) * (1 + f) : Math.pow(2, -a + 1) * f : 0)
        },
        warn: function(a) {
            if (this.nU) throw Error(a);
            return 1
        },
        AC: function(a) {
            return this.GV(a, 23, 8)
        }
    };
    BinaryParser.prototype.XC = function(a, b) {
        this.cz = a || 0;
        this.buffer = [];
        this.s_(b)
    };
    BinaryParser.prototype.XC.prototype = {
        PJ: function(a, b) {
            function c(a, b) {
                for (++b; --b; a = 1073741824 == ((a %= 2147483648) & 1073741824) ? 2 * a : 2 * (a - 1073741824) + 2147483648);
                return a
            }
            if (0 > a || 0 >= b) return 0;
            this.uF(a +
                b);
            for (var d, e = a % 8, f = this.buffer.length - (a >> 3) - 1, g = this.buffer.length + (-(a + b) >> 3), h = f - g, f = (this.buffer[f] >> e & (1 << (h ? 8 - e : b)) - 1) + (h && (d = (a + b) % 8) ? (this.buffer[g++] & (1 << d) - 1) << (h-- << 3) - e : 0); h; f += c(this.buffer[g++], (h-- << 3) - e));
            return f
        },
        s_: function(a) {
            if (a) {
                for (var b, c = b = a.length, d = this.buffer = Array(b); c; d[b - c] = a.charCodeAt(--c));
                this.cz && d.reverse()
            }
        },
        SX: function(a) {
            return this.buffer.length >= -(-a >> 3)
        },
        uF: function(a) {
            if (!this.SX(a)) throw Error("checkBuffer::missing bytes");
        }
    };
    ea.x1 = 1;
    ea.w1 = 2;
    ea.A1 = 4;
    ea.z1 = 8;
    ea.EO = 16;
    ea.CO = 32;
    ea.DO = 64;
    ea.AO = 128;
    ea.BO = 256;
    ea.DD = 512;
    ea.CD = 1024;
    ea.y1 = 2048;
    ea.FO = 4096;
    ea.xO = 8192;
    ea.GO = 16384;
    ea.yO = 65536;
    ea.zO = 131072;
    ea.prototype = l.extend(new db, {
        zo: function(a) {
            void 0 === a && (a = this.element);
            this.ad.V & ea.FO || (a.style.backgroundColor = this.ad.V & ea.GO ? "transparent" : l.ke(this.ad.background), a.style.color = l.ke(this.ad.je))
        },
        zg: function() {
            return 7
        },
        Kh: function(a) {
            this.f.S = a.v();
            this.f.T = a.v();
            var b = this.ad,
                c = this.f.b.h.md ? a.cq() : a.Vw();
            a.wa(64);
            b.je = a.sc();
            b.background = a.sc();
            a.wa(80);
            b.V = a.C();
            b.hp = 0;
            b.V & ea.CO ? a = document.createElement("textarea") : (a = document.createElement("input"), a.type = b.V & ea.DO ? "password" : "text");
            b.V & ea.yO && (a.style.textAlign = "center");
            b.V & ea.zO && (a.style.textAlign = "right");
            b.V & ea.EO && (a.readOnly = !0);
            this.zo(a);
            b.V & ea.xO ? (a.style.borderStyle = "inset", a.style.borderWidth = "2px", this.f.S -= 4, this.f.T -= 4) : (a.style.borderStyle = "solid", b.V & ea.AO ? (a.style.borderWidth = "1px", a.style.borderColor = "#000000", this.f.S -= 2, this.f.T -= 2) : a.style.borderWidth = "0px");
            b.V &
                ea.DD && (a.style.textTransform = "uppercase");
            b.V & ea.CD && (a.style.textTransform = "lowercase");
            this.wh(c);
            c.TH && (a.style.textDecoration = "underline");
            c.SH && (a.style.textDecoration = "line-through");
            this.pC(a, 0 == (b.V & ea.BO));
            this.oJ = "";
            var d = this;
            a.ondblclick = function() {
                d.ad.hp = d.element.selectionStart;
                d.ad.nv = d.f.b.Jc;
                d.f.Ge(2, 0)
            };
            a.onchange = function() {
                d.ad.hp = d.element.selectionStart
            };
            a.onclick = function() {
                d.ad.hp = d.element.selectionStart
            };
            a.onkeyup = function() {
                d.ad.hp = d.element.selectionStart
            }
        },
        Zj: function() {
            this.element.value !=
                this.oJ && (this.ad.Xu = !0, this.oJ = this.element.value);
            db.prototype.Zj.call(this)
        },
        Ug: function(a) {
            switch (a) {
                case 0:
                    return "hidden" != this.element.style.visibility;
                case 1:
                    return !this.element.disabled;
                case 2:
                    return !1;
                case 3:
                    return this.ad.Xu;
                case 4:
                    return document.activeElement == this.element;
                case 5:
                    return !isNaN(parseInt(this.element.value, 10));
                case 6:
                    return 0 < this.element.selectionEnd - this.element.selectionStart
            }
        },
        action: function(a, b) {
            switch (a) {
                case 0:
                    var c = l.Un(b.Sr(this.l, 0));
                    this.element.value = "";
                    var d =
                        localStorage.getItem(c);
                    if (d) {
                        this.element.value = d;
                        break
                    }
                    try {
                        var e, f = this.l.h.xv(c);
                        f && (e = f.open());
                        e || (e = new U, e.sJ(c));
                        e && (e.lv(), this.element.value = e.cb(e.zX()))
                    } catch (g) {
                        if (document.debug) throw g;
                    }
                    break;
                case 2:
                    c = l.Un(b.Sr(this.l, 0));
                    localStorage.setItem(c, this.element.value);
                    break;
                case 4:
                    this.element.value = b.Eb(this.l, 0);
                    break;
                case 5:
                    this.element.value = [this.element.value.substring(0, this.element.selectionStart), b.Eb(this.l, 0), this.element.value.substring(this.element.selectionEnd)].join("");
                    break;
                case 9:
                    this.element.value = "";
                    break;
                case 12:
                    this.f.Ja = !0;
                    this.element.style.visibility = "visible";
                    break;
                case 13:
                    this.f.Ja = !1;
                    this.element.style.visibility = "hidden";
                    break;
                case 16:
                    this.element.focus();
                    break;
                case 17:
                    this.element.disabled = !1;
                    break;
                case 18:
                    this.element.disabled = !0;
                    break;
                case 19:
                    this.element.readOnly = !0;
                    break;
                case 20:
                    this.element.readOnly = !1;
                    break;
                case 21:
                    this.ad.Xu = !0;
                    break;
                case 22:
                    this.ad.Xu = !1;
                    break;
                case 23:
                    this.element.setAttribute("maxlength", b.G(this.l, 0));
                    break;
                case 24:
                    c = b.Tr(this.l,
                        0);
                    c.Lr && this.setPosition(c.x, c.y);
                    break;
                case 25:
                    this.uo(b.G(this.l, 0));
                    break;
                case 26:
                    this.vo(b.G(this.l, 0));
                    break;
                case 27:
                    this.so(b.G(this.l, 0), b.G(this.l, 1));
                    break;
                case 28:
                    this.pm(b.G(this.l, 0));
                    break;
                case 29:
                    this.nm(b.G(this.l, 0));
                    break;
                case 30:
                    this.element.blur();
                    break;
                case 31:
                    this.element.scrollTop = 0;
                    break;
                case 33:
                    this.element.scrollTop = 99999;
                    break;
                case 34:
                    this.ad.je = b.Rr(this.l, 0);
                    this.zo();
                    break;
                case 35:
                    this.ad.background = b.Rr(this.l, 0);
                    this.zo();
                    break;
                case 36:
                    c = b.Eb(this.l, 0);
                    d = b.G(this.l,
                        1);
                    this.element.value = [this.element.value.substring(0, d), c, this.element.value.substring(d, this.element.value.length)].join("");
                    break;
                case 37:
                    c = b.G(this.l, 0), this.element.setSelectionRange(c, c), this.element.onchange()
            }
        },
        Xg: function(a) {
            switch (a) {
                case 0:
                    return this.ad.V & ea.DD ? this.element.value.toUpperCase() : this.ad.V & ea.CD ? this.element.value.toLowerCase() : this.element.value;
                case 1:
                    return this.element.value.substring(this.element.selectionStart, this.element.selectionEnd);
                case 2:
                    return this.f.s;
                case 3:
                    return this.f.o;
                case 4:
                    return this.f.S;
                case 5:
                    return this.f.T;
                case 6:
                    return a = parseInt(this.element.value, 10), isNaN(a) ? 0 : a;
                case 7:
                    return a = Math.min(this.element.value.indexOf("\r"), this.element.value.indexOf("\n")), -1 == a ? "" : this.element.substring(0, a);
                case 8:
                    return this.element.value.split("\n").length;
                case 9:
                    return this.ad.je;
                case 10:
                    return this.ad.background;
                case 11:
                    return this.ad.hp
            }
        },
        Bv: function() {
            return this.ad.je
        },
        qx: function(a) {
            this.ad.je = a;
            this.zo()
        }
    });
    W.Nq = 0;
    W.mL = 0;
    W.nL = 1;
    W.oL = 2;
    W.wL = 3;
    W.xL = 4;
    W.zL = 5;
    W.AL =
        6;
    W.BL = 7;
    W.CL = 8;
    W.DL = 9;
    W.EL = 10;
    W.GL = 11;
    W.uL = 12;
    W.j0 = 13;
    W.i0 = 14;
    W.tL = 15;
    W.HL = 16;
    W.yL = 17;
    W.sL = 18;
    W.vL = 19;
    W.FL = 20;
    W.pL = 21;
    W.qL = 22;
    W.rL = 23;
    W.k0 = 24;
    W.L1 = 0;
    W.prototype = l.extend(new va, {
        zg: function() {
            return W.Nq
        },
        Kh: function() {
            this.cursor = "auto";
            this.l.h.cursor = this.cursor;
            return !0
        },
        action: function(a) {
            switch (a) {
                case W.mL:
                    this.cursor = "alias";
                    break;
                case W.nL:
                    this.cursor = "auto";
                    break;
                case W.oL:
                    this.cursor = "crosshair";
                    break;
                case W.wL:
                    this.cursor = "text";
                    break;
                case W.xL:
                    this.cursor = "not-allowed";
                    break;
                case W.zL:
                    this.cursor =
                        "all-scroll";
                    break;
                case W.AL:
                    this.cursor = "nesw-resize";
                    break;
                case W.BL:
                    this.cursor = "ns-resize";
                    break;
                case W.CL:
                    this.cursor = "nwse-resize";
                    break;
                case W.DL:
                    this.cursor = "ew-resize";
                    break;
                case W.EL:
                    this.cursor = "pointer";
                    break;
                case W.GL:
                    this.cursor = "wait";
                    break;
                case W.uL:
                    this.cursor = "help";
                    break;
                case W.tL:
                    this.cursor = "pointer";
                    break;
                case W.HL:
                    this.cursor = "zoom-in";
                    break;
                case W.yL:
                    this.cursor = "auto";
                    break;
                case W.sL:
                    this.cursor = "auto";
                    break;
                case W.vL:
                    this.cursor = "col-resize";
                    break;
                case W.FL:
                    this.cursor = "row_resize";
                    break;
                case W.pL:
                    this.cursor = "copy";
                    break;
                case W.qL:
                    this.cursor = "move";
                    break;
                case W.rL:
                    this.cursor = "context-menu"
            }
            this.l.h.cursor = this.cursor;
            this.l.sx()
        }
    });
    u.oD = 0;
    u.fD = 1;
    u.pD = 2;
    u.gD = 3;
    u.sD = 4;
    u.RN = 5;
    u.qD = 6;
    u.SN = 7;
    u.mD = 8;
    u.QN = 9;
    u.iD = 10;
    u.Nq = 11;
    u.fM = 0;
    u.gM = 1;
    u.PL = 2;
    u.kM = 3;
    u.rM = 4;
    u.sM = 5;
    u.KL = 6;
    u.QL = 7;
    u.IL = 8;
    u.JP = 0;
    u.CP = 1;
    u.ZP = 2;
    u.$P = 3;
    u.EP = 4;
    u.DP = 5;
    u.LP = 6;
    u.MP = 7;
    u.wP = 8;
    u.xP = 9;
    u.TP = 10;
    u.yP = 11;
    u.bQ = 12;
    u.aQ = 13;
    u.cQ = 14;
    u.dQ = 15;
    u.eQ = 16;
    u.sf = 1770410840;
    u.Bh = 1;
    u.O2 = 2;
    u.prototype = l.extend(new va, {
        zg: function() {
            return u.Nq
        },
        Kh: function(a) {
            this.width = a.v();
            this.height = a.v();
            this.V = a.C();
            this.depth = a.v();
            a = a.cb();
            this.V & u.Bh && (this.fv(), this.YE(this.IX(a)), this.Hd = []);
            this.Zb = m.fe;
            this.Tc = Array(this.Zb);
            this.rb = Array(this.Zb);
            this.sb = Array(this.Zb);
            this.Mf = Array(this.Zb);
            this.Nf = Array(this.Zb);
            this.zl = Array(this.Zb);
            this.Al = Array(this.Zb);
            this.Gq = Array(this.Zb);
            this.Eq = Array(this.Zb);
            this.Cp = this.uA = this.Qv = this.FI = this.Fz = this.Op = this.fB = -1;
            for (a = 0; a < this.Zb; a++) this.Tc[a] = u.sf, this.rb[a] = -1, this.sb[a] = -1, this.Gq[a] =
                0, this.Eq[a] = 0, this.Mf[a] = 0, this.Nf[a] = 0, this.zl[a] = 0, this.Al[a] = 0;
            this.l.h.kU(this);
            return !0
        },
        kv: function() {
            this.l.h.YZ(this)
        },
        Zj: function() {
            var a;
            for (a = 0; a < this.Zb; a++) 0 < this.Gq[a] && this.Gq[a]--, 0 < this.Eq[a] && this.Eq[a]--;
            return 0
        },
        aL: function(a) {
            var b;
            for (b = 0; b < this.Zb && this.Tc[b] != a.identifier && this.Tc[b] != u.sf; b++);
            b < this.Zb && this.Tc[b] == u.sf && (this.mp = 0, this.Tc[b] = a.identifier, this.rb[b] = this.l.h.Dl(a), this.sb[b] = this.l.h.El(a), this.Mf[b] = this.rb[b], this.Nf[b] = this.sb[b], this.zl[b] = this.rb[b],
                this.Al[b] = this.sb[b], this.Gq[b] = 2, this.Qv = this.Cp = b, this.Op = this.f.b.Jc, 0 > this.nh ? this.nh = b : 0 > this.oh ? (this.oh = b, this.f.Ge(u.mD, 0), this.fB = this.f.b.Jc, this.EB = this.Iz()) : this.oh = this.nh = -1, this.V & u.Bh && (this.Hd.length >= this.depth && this.Hd.splice(0, 1), this.Hd.push([]), this.rb[b] >= this.f.s && this.rb[b] < this.f.s + this.width && this.sb[b] >= this.f.o && this.sb[b] < this.f.o + this.height && (this.Hd[this.Hd.length - 1].push(this.rb[b] - this.f.s), this.Hd[this.Hd.length - 1].push(this.sb[b] - this.f.o))), this.f.Ge(u.oD, 0),
                this.f.Ge(u.pD, 0), this.BU(this.rb[b], this.sb[b]));
            return !1
        },
        CC: function(a) {
            var b;
            for (b = 0; b < this.Zb; b++) this.Tc[b] == a.identifier && (this.mp++, this.rb[b] = this.l.h.Dl(a), this.sb[b] = this.l.h.El(a), this.zl[b] = this.rb[b], this.Al[b] = this.sb[b], this.Cp = b, this.f.Ge(u.sD, 0), this.V & u.Bh && (this.rb[b] != this.bL || this.sb[b] != this.cL) && (this.bL = this.rb[b], this.cL = this.sb[b], this.rb[b] >= this.f.s && this.rb[b] < this.f.s + this.width && this.sb[b] >= this.f.o && this.sb[b] < this.f.o + this.height && (this.Hd[this.Hd.length - 1].push(this.rb[b] -
                this.f.s), this.Hd[this.Hd.length - 1].push(this.sb[b] - this.f.o))));
            return !1
        },
        BC: function(a) {
            var b;
            for (b = 0; b < this.Zb; b++) this.Tc[b] == a.identifier && (this.rb[b] = this.l.h.Dl(a), this.sb[b] = this.l.h.El(a), this.zl[b] = this.rb[b], this.Al[b] = this.sb[b], this.Tc[b] = u.sf, this.Eq[b] = 2, this.uA = this.Cp = b, this.Fz = this.f.b.Jc, b == this.nh ? this.nh = -1 : b == this.oh && (this.oh = -1), this.V & u.Bh && (this.rb[b] != this.bL || this.sb[b] != this.cL) && this.rb[b] >= this.f.s && this.rb[b] < this.f.s + this.width && this.sb[b] >= this.f.o && this.sb[b] < this.f.o +
                this.height && (this.Hd[this.Hd.length - 1].push(this.rb[b] - this.f.s), this.Hd[this.Hd.length - 1].push(this.sb[b] - this.f.o)), this.f.Ge(u.fD, 0), this.f.Ge(u.gD, 0));
            return !1
        },
        fv: function() {
            this.V & u.Bh && null == this.$n && (this.$n = new Ei)
        },
        YE: function(a) {
            for (var b, c, d = 0, e = [];;) {
                for (; d < a.length && !(0 <= a[d].indexOf("[")); d++);
                if (d >= a.length) break;
                b = a[d].indexOf("]");
                if (!(0 > b)) {
                    c = a[d].substring(1, b);
                    d++;
                    for (b = 0; d < a.length; b++, d++) {
                        var f = a[d].indexOf("=");
                        if (0 > f) break;
                        for (var f = a[d].substring(f + 1), g = e.length = 0, h, k;;) {
                            g =
                                f.indexOf("(", g);
                            if (0 > g) break;
                            h = f.indexOf(",", g);
                            if (0 > h) break;
                            k = parseInt(f.substring(g + 1, h));
                            g = f.indexOf(")", h);
                            if (0 > g) break;
                            h = parseInt(f.substring(h + 1, g));
                            if (isNaN(k) || isNaN(h)) break;
                            e.push(new Ra(k, h, b))
                        }
                    }
                    this.$n.iN(c, e)
                }
            }
        },
        RJ: function(a, b) {
            this.fv();
            var c = [],
                d;
            for (d = 0; d < a && !(d >= this.Hd.length); d++) {
                var e = this.Hd[this.Hd.length - d - 1],
                    f, g = 0;
                for (f = 0; f < e.length; f += 2) c.push(new Ra(e[f], e[f + 1], d)), g++
            }
            2 <= c.length ? (this.$n.aS(c, b), this.wp = this.$n.wp, this.tn = this.$n.tn, this.sn = this.$n.sn, 0 <= this.wp && this.f.Ge(u.iD,
                0)) : (this.tn = this.wp = 0, this.sn = "")
        },
        Ug: function(a, b) {
            switch (a) {
                case u.oD:
                    return this.ZU(b);
                case u.fD:
                    return this.TU(b);
                case u.pD:
                    return this.$U(b);
                case u.gD:
                    return this.UU(b);
                case u.sD:
                    return this.dV(b);
                case u.RN:
                    return this.cV(b);
                case u.qD:
                    return this.aV(b);
                case u.SN:
                    return this.JH(b.G(this.l, 0), b.vb(this.l, 1).la);
                case u.mD:
                    return this.YU(b);
                case u.QN:
                    return this.bV(b);
                case u.iD:
                    return this.XU(b)
            }
            return !1
        },
        AX: function(a, b) {
            var c = this.f.b,
                d = null,
                e, f = 0,
                g;
            for (g = 0; g < c.Pb; g++) {
                for (; null == c.H[f];) f++;
                e = c.H[f];
                f++;
                this.NH(e, a, b) && (null == d && (d = new Q), d.add(e))
            }
            return d
        },
        BU: function(a, b) {
            var c = this.AX(a, b);
            if (null != c) {
                var d;
                for (d = 0; d < c.size(); d++) pHox = c.get(d), this.zE = pHox.Yb, this.BH = pHox.Fb << 16 | pHox.ea & 65535, this.f.Ge(u.qD, 0)
            }
        },
        NH: function(a, b, c) {
            var d, e, f, g, h = this.f.b;
            d = a.s - a.Ea - this.l.da;
            e = a.o - a.Fa - this.l.fa;
            f = d + a.S;
            g = e + a.T;
            return b >= d && b < f && c >= e && c < g && 0 == (a.Z & N.rd) ? a.Pa == v.tc ? 0 == (a.A.aa & D.Pj) ? h.h.qa.Ub(a.c.Ma).Vf(R.pi, a.c.Ua, a.c.zb, a.c.Ab).Cq(d, e, b, c) : !0 : !0 : !1
        },
        JH: function(a, b) {
            if (0 <= a && a < this.Zb &&
                this.Tc[a] != u.sf) {
                var c = this.f.b,
                    d = c.g,
                    e = d.Jg,
                    f = d.di,
                    g = d.hf,
                    h = d.Kk,
                    k = d.pc,
                    l = !1,
                    m = c.g.ie(b);
                if (null != m) {
                    l = c.g.pc;
                    do this.NH(m, this.rb[a], this.sb[a]) || (l--, c.g.nd()), m = c.g.Kd(); while (null != m);
                    l = 0 != l
                }
                d.Jg = e;
                d.di = f;
                d.hf = g;
                d.Kk = h;
                d.pc = k;
                return l
            }
            return !1
        },
        p_: function(a, b) {
            var c = this.f.b,
                d = c.g,
                e = d.Jg,
                f = d.di,
                g = d.hf,
                h = d.Kk,
                k = d.pc,
                l = !1,
                m = c.g.ie(a);
            if (null != m) {
                l = c.g.pc;
                do(m.Fb << 16 | m.ea & 65535) != b && (l--, c.g.nd()), m = c.g.Kd(); while (null != m);
                l = 0 != l
            }
            d.Jg = e;
            d.di = f;
            d.hf = g;
            d.Kk = h;
            d.pc = k;
            return l
        },
        aV: function(a) {
            return 0 !=
                (this.f.Z & N.Rf) ? (a = a.vb(this.l, 0), this.zE != a.Ad && 0 <= a.Ad ? !1 : this.p_(a.la, this.BH)) : this.f.b.Jc == this.Op ? this.JH(this.Qv, a.vb(this.l, 0).la) : !1
        },
        ZU: function(a) {
            a = a.G(this.l, 0);
            var b = !1;
            0 > a && (b = !0);
            0 <= a && a < this.Zb && 0 != this.Gq[a] && (b = !0);
            return !b || 0 == (this.f.Z & N.Rf) && this.f.b.Jc != this.Op ? !1 : !0
        },
        $U: function() {
            return 0 != (this.f.Z & N.Rf) || this.f.b.Jc == this.Op ? !0 : !1
        },
        UU: function() {
            return 0 != (this.f.Z & N.Rf) || this.f.b.Jc == this.Op ? !0 : !1
        },
        TU: function(a) {
            a = a.G(this.l, 0);
            var b = !1;
            0 > a && (b = !0);
            0 <= a && a < this.Zb && 0 !=
                this.Eq[a] && (b = !0);
            return !b || 0 == (this.f.Z & N.Rf) && this.f.b.Jc != this.Fz ? !1 : !0
        },
        dV: function(a) {
            a = a.G(this.l, 0);
            var b = !1;
            0 > a && (b = !0);
            a == this.Cp && (b = !0);
            return !b || 0 == (this.f.Z & N.Rf) && this.f.b.Jc != this.FI ? !1 : !0
        },
        cV: function(a) {
            a = a.G(this.l, 0);
            return 0 <= a && a < this.Zb && this.Tc[a] != u.sf ? !0 : !1
        },
        YU: function() {
            return 0 != (this.f.Z & N.Rf) || this.f.b.Jc == this.fB ? !0 : !1
        },
        XU: function() {
            return 0 != (this.f.Z & N.Rf) || this.f.b.Jc == this.x6 ? !0 : !1
        },
        bV: function() {
            return 0 <= this.nh && 0 <= this.oh
        },
        action: function(a, b) {
            switch (a) {
                case u.fM:
                    this.C_(b);
                    break;
                case u.gM:
                    this.D_(b);
                    break;
                case u.PL:
                    this.pT(b);
                    break;
                case u.kM:
                    this.HT(b);
                    break;
                case u.rM:
                    this.IT(b);
                    break;
                case u.sM:
                    this.JT(b);
                    break;
                case u.KL:
                    this.iT(b);
                    break;
                case u.QL:
                    this.qT(b);
                    break;
                case u.IL:
                    this.bT(b)
            }
        },
        IT: function(a) {
            a = a.BX(this.l, 0);
            this.f.s = a.Gx;
            this.f.o = a.Jx;
            this.width = a.JC - a.Gx;
            this.height = a.KC - a.Jx
        },
        JT: function(a) {
            this.f.s = a.G(this.l, 0);
            this.f.o = a.G(this.l, 1);
            this.width = a.G(this.l, 2);
            this.height = a.G(this.l, 3)
        },
        IX: function(a) {
            for (var b, c, d, e = 0, f = []; e < a.length;) c = a.indexOf(String.fromCharCode(10),
                e), d = a.indexOf(String.fromCharCode(13), e), 0 > c && (c = a.length), 0 > d && (d = a.length), b = Math.min(c, d), f.push(a.substring(e, b)), e = Math.max(c + 1, d + 1);
            return f
        },
        iT: function(a) {
            if (this.V & u.Bh) {
                this.fv();
                var b;
                a = l.Un(a.Sr(this.l, 0));
                var c = localStorage.getItem(a);
                if (c) b = getStrings(c);
                else {
                    var d;
                    (c = this.l.h.xv(a)) && (d = c.open());
                    d || (d = new U, d.sJ(a));
                    if (d)
                        for (d.lv(); !d.Rh();) b.push(d.XB())
                }
                0 < b.length && this.YE(b)
            }
        },
        bT: function() {
            this.V & u.Bh && (this.fv(), this.$n.hO())
        },
        pT: function(a) {
            this.V & u.Bh && (a = a.G(this.l, 0), 0 > a &&
                (a = 1), a > this.depth && (a = this.depth), this.RJ(a))
        },
        qT: function(a) {
            if (this.V & u.Bh) {
                var b = a.G(this.l, 0);
                a = a.G(this.l, 1);
                0 > a && (a = 1);
                a > this.depth && (a = this.depth);
                this.RJ(a, b)
            }
        },
        HT: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            1 > a && (a = 1);
            10 < a && (a = 10);
            this.depth = a;
            b ? (this.V |= u.Bh, this.Hd = []) : (this.V &= ~u.Bh, this.Hd = null)
        },
        C_: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            0 <= b && b < this.Zb && (this.Mf[b] = a - this.l.da)
        },
        D_: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            0 <= b && b < this.Zb && (this.Nf[b] = a - this.l.fa)
        },
        Xg: function(a) {
            switch (a) {
                case u.JP:
                    return this.MW();
                case u.CP:
                    return this.Cp;
                case u.ZP:
                    return this.QW();
                case u.$P:
                    return this.RW();
                case u.EP:
                    return this.Qv;
                case u.DP:
                    return this.uA;
                case u.LP:
                    return this.NW();
                case u.MP:
                    return this.OW();
                case u.wP:
                    return this.mW();
                case u.xP:
                    return this.nW();
                case u.TP:
                    return this.jW();
                case u.yP:
                    return this.qW();
                case u.bQ:
                    return this.Iz();
                case u.aQ:
                    return this.SW();
                case u.cQ:
                    return this.TW();
                case u.dQ:
                    return this.sn;
                case u.eQ:
                    return Math.floor(100 * this.tn)
            }
            return 0
        },
        SW: function() {
            if (0 <=
                this.nh && 0 <= this.oh) {
                var a = 57.29577951308232 * Math.atan2(-(this.sb[this.oh] - this.sb[this.nh]), this.rb[this.oh] - this.rb[this.nh]);
                0 > a && (a = 360 + a);
                return Math.floor(a)
            }
            return -1
        },
        Iz: function() {
            if (0 <= this.nh && 0 <= this.oh) {
                var a = this.rb[this.oh] - this.rb[this.nh],
                    b = this.sb[this.oh] - this.sb[this.nh];
                return Math.floor(Math.sqrt(a * a + b * b))
            }
            return -1
        },
        TW: function() {
            var a = this.Iz();
            return 0 <= a && 0 < this.EB ? Math.floor(a / this.EB * 100) : -1
        },
        MW: function() {
            var a = 0,
                b;
            for (b = 0; b < this.Zb; b++) this.Tc[b] != u.sf && a++;
            return a
        },
        QW: function() {
            var a =
                this.f.ha();
            return 0 <= a && a < this.Zb ? this.rb[a] + this.l.da : -1
        },
        RW: function() {
            var a = this.f.ha();
            return 0 <= a && a < this.Zb ? this.sb[a] + this.l.fa : -1
        },
        NW: function() {
            var a = this.f.ha();
            return 0 <= a && a < this.Zb ? this.Mf[a] + this.l.da : -1
        },
        OW: function() {
            var a = this.f.ha();
            return 0 <= a && a < this.Zb ? this.Nf[a] + this.l.fa : -1
        },
        mW: function() {
            var a = this.f.ha();
            return 0 <= a && a < this.Zb ? this.zl[a] - this.Mf[a] : -1
        },
        nW: function() {
            var a = this.f.ha();
            return 0 <= a && a < this.Zb ? this.Al[a] - this.Nf[a] : -1
        },
        jW: function() {
            var a = this.f.ha();
            return 0 <=
                a && a < this.Zb ? (a = 57.29577951308232 * Math.atan2(-(this.Al[a] - this.Nf[a]), this.zl[a] - this.Mf[a]), 0 > a && (a = 360 + a), a) : -1
        },
        qW: function() {
            var a = this.f.ha();
            if (0 <= a && a < this.Zb) {
                var b = this.zl[a] - this.Mf[a],
                    a = this.Al[a] - this.Nf[a];
                return Math.floor(Math.sqrt(b * b + a * a))
            }
            return -1
        }
    });
    var $h = 32,
        ci = new Ra(0, 0, 0);
    za.LS = 0;
    za.KS = 1;
    za.NS = 2;
    za.MS = 3;
    za.gN = 4;
    za.fN = 5;
    za.prototype = l.extend(new va, {
        zg: function() {
            return 12
        },
        Kh: function() {
            this.Og = this.f.Ka;
            return !1
        },
        Ug: function(a, b) {
            switch (a) {
                case 0:
                    return this.LU(b);
                case 1:
                    return this.NU(b);
                case 2:
                    return this.JU(b);
                case 3:
                    return this.PU(b);
                case 4:
                    return this.RU(b);
                case 5:
                    return this.MU(b);
                case 6:
                    return this.OU(b);
                case 7:
                    return this.KU(b);
                case 8:
                    return this.QU(b);
                case 9:
                    return this.SU(b);
                case 10:
                    return this.VU(b);
                case 11:
                    return this.WU(b)
            }
            return !1
        },
        LU: function(a) {
            a = a.G(this.l, 0);
            return this.BF(a)
        },
        BF: function(a) {
            var b = this.Og,
                c, d = null,
                e = 1E5,
                f;
            for (c = this.f.He(); null != c; c = this.f.le()) null != c.A && c.Ka == b && (f = c.Wa(), 0 <= f && f < e && (d = c, e = f));
            return null != d && (b = (d.Fb << 16) + (d.ea & 65535), 0 == a && (a =
                this.Bg), a == b) ? !0 : !1
        },
        NU: function(a) {
            a = a.G(this.l, 0);
            return this.CF(a)
        },
        CF: function(a) {
            var b = this.Og,
                c, d = null,
                e = -1,
                f;
            for (c = this.f.He(); null != c; c = this.f.le()) null != c.A && c.Ka == b && (f = c.Wa(), 0 <= f && f > e && (d = c, e = f));
            return null != d && (b = (d.Fb << 16) + (d.ea & 65535), 0 == a && (a = this.Bg), a == b) ? !0 : !1
        },
        JU: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            return this.AF(b, a)
        },
        AF: function(a, b) {
            var c, d, e;
            0 == a && (a = this.Bg);
            0 == b && (b = this.Bg);
            for (c = this.f.He(); null != c; c = this.f.le())
                if (d = (c.Fb << 16) + (c.ea & 65535), null != c.A && a ==
                    d)
                    for (d = this.f.He(); null != d; d = this.f.le())
                        if (e = (d.Fb << 16) + (d.ea & 65535), null != d.A && b == e) {
                            if (c.Ka != d.Ka) return c.Ka > d.Ka;
                            c = c.Wa();
                            d = d.Wa();
                            return 0 <= c && 0 <= d && c > d ? !0 : !1
                        } return !1
        },
        PU: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            return this.DF(b, a)
        },
        DF: function(a, b) {
            var c, d, e;
            0 == a && (a = this.Bg);
            0 == b && (b = this.Bg);
            for (c = this.f.He(); null != c; c = this.f.le())
                if (d = (c.Fb << 16) + (c.ea & 65535), null != c.A && a == d)
                    for (d = this.f.He(); null != d; d = this.f.le())
                        if (e = (d.Fb << 16) + (d.ea & 65535), null != d.A && b == e) {
                            if (c.Ka != d.Ka) return c.Ka <
                                d.Ka;
                            c = c.Wa();
                            d = d.Wa();
                            return 0 <= c && 0 <= d && c < d ? !0 : !1
                        } return !1
        },
        RU: function(a) {
            var b = a.G(this.l, 0),
                c = a.G(this.l, 1),
                d = a.G(this.l, 2),
                e, f = null,
                g = null;
            a = null;
            var h;
            0 == b && (b = this.Bg);
            0 == c && (c = this.Bg);
            0 == d && (d = this.Bg);
            for (e = this.f.He(); null != e; e = this.f.le())
                if (h = (e.Fb << 16) + (e.ea & 65535), null != e.A && b == h) {
                    f = e;
                    break
                } if (null != f) {
                for (b = this.f.He(); null != b && (e = (b.Fb << 16) + (b.ea & 65535), null != b.A && c == e && (g = b), null != b.A && d == e && (a = b), null == g || null == a); b = this.f.le());
                if (null != f && null != g && null != a && (c = f.Wa(), g = g.Wa(),
                        a = a.Wa(), 0 <= c && 0 <= g && 0 <= a && (a > c && c > g || g > c && c > a))) return !0
            }
            return !1
        },
        MU: function(a) {
            a = a.vb(this.l, 0);
            return this.Nl(a, null, 0)
        },
        OU: function(a) {
            a = a.vb(this.l, 0);
            return this.Nl(a, null, 1)
        },
        KU: function(a) {
            var b = a.vb(this.l, 0);
            a = a.vb(this.l, 1);
            return this.Nl(b, a, 2)
        },
        QU: function(a) {
            var b = a.vb(this.l, 0);
            a = a.vb(this.l, 1);
            return this.Nl(b, a, 3)
        },
        SU: function(a) {
            var b = a.vb(this.l, 0),
                c = a.vb(this.l, 1);
            a = a.vb(this.l, 2);
            var d = !1;
            this.Nl(b, c, 2) && this.Nl(b, a, 3) && (d = !0);
            d || (this.QY(this.fk(b)), this.Nl(b, c, 3) && this.Nl(b,
                a, 2) && (d = !0));
            return d
        },
        VU: function(a) {
            a = a.G(this.l, 0);
            return 0 < a && a <= this.f.b.u.za ? this.f.b.u.sa[a - 1].Re : !1
        },
        Qf: function(a) {
            if (null != a) {
                var b;
                for (b = 0; b < this.f.b.u.za; b++) {
                    var c = this.f.b.u.sa[b];
                    if (null != c.zw && l.Hb(a, c.zw)) return b + 1
                }
            }
            return 0
        },
        WU: function(a) {
            a = a.Eb(this.l, 0);
            a = this.Qf(a);
            return 0 < a && a <= this.f.b.u.za ? this.f.b.u.sa[a - 1].Re : !1
        },
        action: function(a, b) {
            switch (a) {
                case 0:
                    this.YS(b);
                    break;
                case 1:
                    this.eT(b);
                    break;
                case 2:
                    this.ST(b);
                    break;
                case 3:
                    this.GT(b);
                    break;
                case 4:
                    this.$S(b);
                    break;
                case 5:
                    this.sT(b);
                    break;
                case 6:
                    this.WS(b);
                    break;
                case 7:
                    this.cT(b);
                    break;
                case 8:
                    this.rT(b);
                    break;
                case 9:
                    this.jT(b);
                    break;
                case 10:
                    this.lT(b);
                    break;
                case 11:
                    this.nT(b);
                    break;
                case 12:
                    this.PT(b);
                    break;
                case 13:
                    this.RT(b);
                    break;
                case 14:
                    this.OT(b);
                    break;
                case 15:
                    this.QT(b);
                    break;
                case 16:
                    this.ZS(b);
                    break;
                case 17:
                    this.fT(b);
                    break;
                case 18:
                    this.k5(b);
                    break;
                case 19:
                    this.aT(b);
                    break;
                case 20:
                    this.tT(b);
                    break;
                case 21:
                    this.XS(b);
                    break;
                case 22:
                    this.dT(b);
                    break;
                case 23:
                    this.kT(b);
                    break;
                case 24:
                    this.mT(b);
                    break;
                case 25:
                    this.oT(b);
                    break;
                case 26:
                    this.NT(b);
                    break;
                case 27:
                    this.MT(b);
                    break;
                case 28:
                    this.AT(b);
                    break;
                case 29:
                    this.ET(b);
                    break;
                case 30:
                    this.CT(b);
                    break;
                case 31:
                    this.KT(b);
                    break;
                case 32:
                    this.gT(b);
                    break;
                case 33:
                    this.BT(b);
                    break;
                case 34:
                    this.FT(b);
                    break;
                case 35:
                    this.DT(b);
                    break;
                case 36:
                    this.LT(b);
                    break;
                case 37:
                    this.hT(b);
                    break;
                case 38:
                    this.uT(b);
                    break;
                case 39:
                    this.vT(b);
                    break;
                case 40:
                    this.wT(b);
                    break;
                case 41:
                    this.yT(b);
                    break;
                case 42:
                    this.xT(b);
                    break;
                case 43:
                    this.zT(b)
            }
        },
        YS: function(a) {
            a = a.G(this.l, 0);
            this.LE(a)
        },
        LE: function(a) {
            var b;
            null != (b = this.Ef(a)) && b.dc(b.Wa() - 1)
        },
        eT: function(a) {
            a = a.G(this.l, 0);
            this.OE(a)
        },
        OE: function(a) {
            var b;
            null != (b = this.Ef(a)) && b.dc(b.Wa() + 1)
        },
        ST: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            this.TE(b, a)
        },
        TE: function(a, b) {
            var c, d;
            null != (c = this.Ef(a)) && null != (d = this.Ef(b)) && c.Ka == d.Ka && this.SY(c, d, !0)
        },
        GT: function(a) {
            a = a.vb(this.l, 0);
            this.Bg = this.Od(a.La)
        },
        $S: function(a) {
            a = a.G(this.l, 0);
            this.ME(a)
        },
        ME: function(a) {
            a = this.Ef(a);
            null != a && a.dc(1E5)
        },
        sT: function(a) {
            a = a.G(this.l, 0);
            this.SE(a)
        },
        SE: function(a) {
            a =
                this.Ef(a);
            null != a && a.dc(0)
        },
        WS: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            this.KE(b, a)
        },
        KE: function(a, b) {
            var c;
            c = this.Ef(a);
            if (null != c) {
                var d = c.Wa(),
                    d = d - b;
                0 > d && (d = 0);
                c.dc(d)
            }
        },
        cT: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            this.NE(b, a)
        },
        NE: function(a, b) {
            var c;
            c = this.Ef(a);
            null != c && c.dc(c.Wa() + b)
        },
        rT: function() {
            var a, b = this.Og,
                c = Array(this.f.b.Pb),
                d = 0;
            for (a = this.f.He(); null != a; a = this.f.le());
            null != a.A && a.Ka == b && (c[d++] = a);
            for (a = d - 1; 0 <= a; a--) c[a].dc(1E5)
        },
        jT: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            this.PE(b, a)
        },
        PE: function(a, b) {
            var c, d;
            c = this.Ef(a);
            null != c && (d = this.Ef(b), null != d && c.Ka == d.Ka && c.dc(d.Wa() + 1))
        },
        lT: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            this.QE(b, a)
        },
        QE: function(a, b) {
            var c, d;
            c = this.Ef(a);
            null != c && (d = this.Ef(b), null != d && c.Ka == d.Ka && c.dc(d.Wa() - 1))
        },
        nT: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            this.RE(b, a)
        },
        RE: function(a, b) {
            var c;
            c = this.Ef(a);
            null != c && c.dc(b)
        },
        PT: function() {
            this.Gp(za.LS, 0, 0)
        },
        RT: function() {
            this.Gp(za.NS, 0, 0)
        },
        OT: function() {
            this.Gp(za.KS,
                0, 0)
        },
        QT: function() {
            this.Gp(za.MS, 0, 0)
        },
        ZS: function(a) {
            a = a.vb(this.l, 0);
            var b = a.La;
            null != a && this.LE(this.Od(b))
        },
        fT: function(a) {
            a = a.vb(this.l, 0);
            null != a && this.OE(this.Od(a.La))
        },
        T4: function(a) {
            var b = a.vb(this.l, 0);
            a = a.vb(this.l, 1);
            null != b && null != a && this.TE(this.Od(b.La), this.Od(a.La))
        },
        aT: function(a) {
            a = a.vb(this.l, 0);
            null != a && this.ME(this.Od(a.La))
        },
        tT: function(a) {
            a = a.vb(this.l, 0);
            null != a && this.SE(this.Od(a.La))
        },
        XS: function(a) {
            var b = a.vb(this.l, 0);
            a = a.G(this.l, 1);
            null != b && this.KE(this.Od(b.La), a)
        },
        dT: function(a) {
            var b = a.vb(this.l, 0);
            a = a.G(this.l, 1);
            null != b && this.NE(this.Od(b.La), a)
        },
        kT: function(a) {
            var b = a.vb(this.l, 0);
            a = a.vb(this.l, 1);
            null != b && null != a && this.PE(this.Od(b.La), this.Od(a.La))
        },
        mT: function(a) {
            var b = a.vb(this.l, 0);
            a = a.vb(this.l, 1);
            null != b && null != a && this.QE(this.Od(b.La), this.Od(a.La))
        },
        oT: function(a) {
            var b = a.vb(this.l, 0);
            a = a.G(this.l, 1);
            null != b && this.RE(this.Od(b.La), a)
        },
        NT: function(a) {
            var b = a.Zz(this.l, 0);
            a = a.G(this.l, 1);
            this.Gp(za.gN, a, b)
        },
        MT: function(a) {
            var b = a.Zz(this.l, 0);
            a =
                a.G(this.l, 1);
            this.Gp(za.fN, a, b)
        },
        AT: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            0 < b && b <= this.f.b.u.za && (b = this.f.b.u.sa[b - 1], a = -a, b.x != a || 0 != b.De) && (b.De = a - b.x, this.f.b.ce |= k.Oj)
        },
        ET: function(a) {
            var b = a.G(this.l, 0);
            a = a.G(this.l, 1);
            0 < b && b <= this.f.b.u.za && (b = this.f.b.u.sa[b - 1], a = -a, b.y != a || 0 != b.Ee) && (b.Ee = a - b.y, this.f.b.ce |= k.Oj)
        },
        CT: function(a) {
            var b = a.G(this.l, 0),
                c = -a.G(this.l, 1);
            a = -a.G(this.l, 2);
            0 < b && b <= this.f.b.u.za && (b = this.f.b.u.sa[b - 1], b.x != c || 0 != b.De || b.y != a || 0 != b.Ee) && (b.De = c - b.x, b.Ee =
                a - b.y, this.f.b.ce |= k.Oj)
        },
        KT: function(a) {
            a = a.G(this.l, 0);
            0 < a && a <= this.f.b.u.za && this.f.b.MK(a - 1)
        },
        gT: function(a) {
            a = a.G(this.l, 0);
            0 < a && a <= this.f.b.u.za && this.f.b.zH(a - 1)
        },
        BT: function(a) {
            var b = a.Eb(this.l, 0);
            a = a.G(this.l, 1);
            b = this.Qf(b);
            0 < b && b <= this.f.b.u.za && (b = this.f.b.u.sa[b - 1], a = -a, b.x != a || 0 != b.De) && (b.De = a - b.x, this.f.b.ce |= k.Oj)
        },
        FT: function(a) {
            var b = a.Eb(this.l, 0);
            a = a.G(this.l, 1);
            b = this.Qf(b);
            0 < b && b <= this.f.b.u.za && (b = this.f.b.u.sa[b - 1], a = -a, b.y != a || 0 != b.Ee) && (b.Ee = a - b.y, this.f.b.ce |= k.Oj)
        },
        DT: function(a) {
            var b =
                a.Eb(this.l, 0),
                c = -a.G(this.l, 1);
            a = -a.G(this.l, 2);
            b = this.Qf(b);
            0 < b && b <= this.f.b.u.za && (b = this.f.b.u.sa[b - 1], b.x != c || 0 != b.De || b.y != a || 0 != b.Ee) && (b.De = c - b.x, b.Ee = a - b.y, this.f.b.ce |= k.Oj)
        },
        LT: function(a) {
            a = a.Eb(this.l, 0);
            a = this.Qf(a);
            0 < a && a <= this.f.b.u.za && this.f.b.MK(a - 1)
        },
        hT: function(a) {
            a = a.Eb(this.l, 0);
            a = this.Qf(a);
            0 < a && a <= this.f.b.u.za && this.f.b.zH(a - 1)
        },
        uT: function(a) {
            a = a.G(this.l, 0);
            0 < a && a <= this.f.b.u.za && (this.Og = a - 1)
        },
        vT: function(a) {
            a = a.Eb(this.l, 0);
            a = this.Qf(a);
            0 < a && a <= this.f.b.u.za && (this.Og =
                a - 1)
        },
        wT: function(a) {
            var b = a.G(this.l, 0);
            a = a.Li(this.l, 1);
            0 < b && b <= this.f.b.u.za && (b = this.f.b.u.sa[b - 1], b.hg != a && (b.hg = a, this.f.b.it()))
        },
        yT: function(a) {
            var b = a.G(this.l, 0);
            a = a.Li(this.l, 1);
            0 < b && b <= this.f.b.u.za && (b = this.f.b.u.sa[b - 1], b.ig != a && (b.ig = a, this.f.b.it()))
        },
        xT: function(a) {
            var b = a.Eb(this.l, 0);
            a = a.Li(this.l, 1);
            b = this.Qf(b);
            0 < b && b <= this.f.b.u.za && (b = this.f.b.u.sa[b - 1], b.hg != a && (b.hg = a, this.f.b.it()))
        },
        zT: function(a) {
            var b = a.Eb(this.l, 0);
            a = a.Li(this.l, 1);
            b = this.Qf(b);
            0 < b && b <= this.f.b.u.za &&
                (b = this.f.b.u.sa[b - 1], b.ig != a && (b.ig = a, this.f.b.it()))
        },
        P4: function() {},
        Q4: function() {},
        N4: function() {},
        O4: function() {},
        R4: function() {},
        S4: function() {},
        Xg: function(a) {
            switch (a) {
                case 0:
                    return this.rW();
                case 1:
                    return this.PW();
                case 2:
                    return this.kW();
                case 3:
                    return this.oW();
                case 4:
                    return this.pW();
                case 5:
                    return this.LW();
                case 6:
                    return this.JW();
                case 7:
                    return this.KW();
                case 8:
                    return this.FW();
                case 9:
                    return this.HW();
                case 10:
                    return this.GW();
                case 11:
                    return this.IW();
                case 12:
                    return this.f.b.u.za;
                case 13:
                    return this.BW();
                case 14:
                    return this.AW();
                case 15:
                    return this.lW();
                case 16:
                    return this.uW();
                case 17:
                    return this.wW();
                case 18:
                    return this.vW();
                case 19:
                    return this.xW();
                case 20:
                    return this.yW();
                case 21:
                    return this.sW();
                case 22:
                    return this.DW();
                case 23:
                    return this.zW();
                case 24:
                    return this.tW();
                case 25:
                    return this.EW()
            }
            return null
        },
        rW: function() {
            var a, b, c = this.f.ha();
            if (0 == c.length) return this.Bg;
            for (a = this.f.He(); null != a; a = this.f.le());
            return null != a.A && (b = a.La, l.Hb(c, b.dj)) ? a = (a.Fb << 16) + (a.ea & 65535) : 0
        },
        PW: function() {
            var a =
                this.Og,
                b, c = null,
                d = -1,
                e;
            for (b = this.f.He(); null != b; b = this.f.le()) null != b.A && b.Ka == a && (e = b.Wa(), e > d && (d = e, c = b));
            return null != c ? (c.Fb << 16) + (c.ea & 65535) : 0
        },
        kW: function() {
            var a = this.Og,
                b, c = null,
                d = 1E6,
                e;
            for (b = this.f.He(); null != b; b = this.f.le()) null != b.A && b.Ka == a && (e = b.Wa(), e < d && (d = e, c = b));
            return null != c ? (c.Fb << 16) + (c.ea & 65535) : 0
        },
        oW: function() {
            var a = this.f.ha();
            return this.YH(a, 1)
        },
        pW: function() {
            var a = this.f.ha();
            return this.YH(a, 10)
        },
        LW: function() {
            var a = this.Og;
            return 0 <= a || a < this.f.b.u.za ? this.f.b.u.sa[a].yb.y6 :
                0
        },
        JW: function() {
            var a;
            a = this.f.ha();
            0 == a && (a = this.Bg);
            a = this.Ef(a);
            return null != a ? a.Wa() : 0
        },
        KW: function() {
            var a = this.Og,
                b, c = 0,
                d = this.f.ha();
            for (b = this.f.He(); null != b; b = this.f.le())
                if (null != b.A && b.Ka == a && b.Wa() == d) {
                    c = (b.Fb << 16) + (b.ea & 65535);
                    break
                } return c
        },
        FW: function() {
            var a = this.f.ha();
            return 0 < a && a <= this.f.b.u.za ? (a = this.f.b.u.sa[a - 1], -(a.x + a.De)) : 0
        },
        HW: function() {
            var a = this.f.ha();
            return 0 < a && a <= this.f.b.u.za ? (a = this.f.b.u.sa[a - 1], -(a.y + a.Ee)) : 0
        },
        GW: function() {
            var a = this.f.ha(),
                a = this.Qf(a);
            return 0 <
                a && a <= this.f.b.u.za ? (a = this.f.b.u.sa[a - 1], -(a.x + a.De)) : 0
        },
        IW: function() {
            var a = this.f.ha(),
                a = this.Qf(a);
            return 0 < a && a <= this.f.b.u.za ? (a = this.f.b.u.sa[a - 1], -(a.y + a.Ee)) : 0
        },
        u5: function() {
            return this.f.b.u.za
        },
        BW: function() {
            var a = this.f.ha(),
                b = "";
            0 < a && a <= this.f.b.u.za && (b = this.f.b.u.sa[a - 1].zw);
            return b
        },
        AW: function() {
            var a = this.f.ha();
            return this.Qf(a)
        },
        lW: function() {
            return this.Og + 1
        },
        uW: function() {
            var a = this.f.ha(),
                b = 0;
            0 < a && a <= this.f.b.u.za && (b = this.f.b.u.sa[a - 1].hg);
            return b
        },
        wW: function() {
            var a = this.f.ha(),
                b = 0;
            0 < a && a <= this.f.b.u.za && (b = this.f.b.u.sa[a - 1].ig);
            return b
        },
        vW: function() {
            var a = this.f.ha(),
                a = this.Qf(a),
                b = 0;
            0 < a && a <= this.f.b.u.za && (b = this.f.b.u.sa[a - 1].hg);
            return b
        },
        xW: function() {
            var a = this.f.ha(),
                a = this.Qf(a),
                b = 0;
            0 < a && a <= this.f.b.u.za && (b = this.f.b.u.sa[a - 1].ig);
            return b
        },
        yW: function() {
            this.f.ha();
            return 0
        },
        zW: function() {
            this.f.ha();
            return 0
        },
        sW: function() {
            this.f.ha();
            return 255
        },
        tW: function() {
            this.f.ha();
            return 255
        },
        DW: function() {
            this.f.ha();
            return 16777215
        },
        EW: function() {
            this.f.ha();
            return 16777215
        },
        RY: function(a, b) {
            if (a != b && a.Ka == b.Ka) {
                var c = a.Wa(),
                    d = b.Wa();
                0 <= c && 0 <= d && (a.dc(d), b.dc(c))
            }
        },
        SY: function(a, b) {
            this.RY(a, b);
            return !0
        },
        Ef: function(a) {
            var b;
            0 == a && (a = this.Bg);
            var c;
            for (b = this.f.He(); null != b; b = this.f.le())
                if (c = (b.Fb << 16) + b.ea, null != b.A && a == c) return b;
            return null
        },
        m6: function(a) {
            return this.Ef(a)
        },
        Gp: function(a, b, c) {
            var d = this.Og,
                e = new Q,
                f, g;
            for (g = this.f.He(); null != g; g = this.f.le()) null != g.A && g.Ka == d && (f = new Fi, 0 <= g.Wa() && (f.object = g, f.zF = a, f.pt = g.s, f.qt = g.o, f.Bq = b, null != g.R && null != g.R.ob &&
                c < g.R.ob.length && (f.Bq = g.R.ob[c]), e.add(f)));
            do
                for (g = a = 0; g < e.size() - 1; g++) this.iY(e.get(g), e.get(g + 1)) && (f = e.get(g + 1), e.set(g + 1, e.get(g)), e.set(g, f), a++); while (0 != a);
            for (a = 0; a < e.size(); a++) f = e.get(a), g = f.object, g.dc(1E6);
            return !1
        },
        iY: function(a, b) {
            var c = a.object,
                d = b.object;
            if (c.Ka != d.Ka) return c.Ka < d.Ka;
            switch (a.zF) {
                case 0:
                    return a.pt < b.pt;
                case 1:
                    return a.pt > b.pt;
                case 2:
                    return a.qt < b.qt;
                case 3:
                    return a.qt > b.qt;
                case 4:
                    return a.Bq < b.Bq;
                case 5:
                    return a.Bq > b.Bq
            }
            return !1
        },
        YH: function(a, b) {
            var c = "Lvl\tName\tFV\n\n",
                d = this.Og,
                e, f, g, h = 0;
            for (e = this.f.He(); null != e;) {
                if (null != e.A && e.Ka == d) {
                    for (; null != e && null != e.A && this.f.Ka == d && ++h < a + b;)
                        if (h >= a) {
                            f = e.La;
                            g = (e.Fb << 16) + (e.ea & 65535);
                            var k = h.toString(),
                                k = k + "\t",
                                k = k + f.dj,
                                k = k + "\t",
                                k = k + g.toString(),
                                k = k + "\n",
                                c = c + k
                        } else h--;
                    this.f.le()
                }
                break
            }
            return c
        },
        l6: function(a) {
            a = this.f.b.ca[a.la];
            if (-1 != a.gh) a = this.f.b.H[a.gh];
            else if (0 <= a.ib) a = this.f.b.H[a.ib];
            else return 0;
            return (a.Fb << 16) + (a.ea & 65535)
        },
        ZH: function(a) {
            a = this.f.b.ca[a.la];
            return a.Da == this.f.b.g.Na ? this.f.b.H[a.Aa] :
                0 <= a.ib ? this.f.b.H[a.ib] : null
        },
        fk: function(a) {
            return 0 > a.la ? null : this.f.b.ca[a.la]
        },
        Od: function(a) {
            if (a.Da == this.f.b.g.Na) a = this.f.b.H[a.Aa];
            else if (0 <= a.ib) a = this.f.b.H[a.ib];
            else return 0;
            return (a.Fb << 16) + (a.ea & 65535)
        },
        QY: function(a) {
            a.Da == this.f.b.g.Na && (a.Da = -1)
        },
        Nl: function(a, b, c) {
            var d, e = this.fk(a);
            if (null == e) return !1;
            var f;
            if (null == (f = this.ZH(a))) return !1;
            var g = null,
                h = null;
            if (null != b && (g = this.fk(b), null == (h = this.ZH(b)))) return !1;
            var k = -1,
                l = 0,
                m, q = -1,
                t = !1,
                n;
            n = 0;
            var u, v, w, A;
            if (e.Da == this.f.b.g.Na)
                if (null !=
                    b)
                    for (a = this.Od(this.fk(a)), u = 1; u <= e.Lb; u++) {
                        m = !1;
                        q = this.Od(this.fk(b));
                        g.Da == this.f.b.g.Na ? (w = g.Lb, A = !0) : (w = g.Sd, A = !1);
                        for (v = 1; v <= w; v++)(d = this.mv(c, a, q)) && (m = !0), A ? 0 == (h.Ba & 2147483648) && (h = this.f.b.H[h.Ba], q = (h.Fb << 16) + (h.ea & 65535)) : 0 == (h.xb & 2147483648) && (h = this.f.b.H[h.xb], q = (h.Fb << 16) + (h.ea & 65535));
                        m && (t = !0, l++, -1 == k ? k = f.ea : (n = this.f.b.H[n], n.Ba = f.ea), n = f.ea);
                        0 == (f.Ba & 2147483648) && (f = this.f.b.H[f.Ba], a = (f.Fb << 16) + (f.ea & 65535))
                    } else
                        for (a = this.Od(this.fk(a)), u = 1; u <= e.Lb; u++) {
                            if (d = this.mv(c, a, q)) t = !0, l++, -1 == k ? k = f.ea : (n = this.f.b.H[n], n.Ba = f.ea), n = f.ea;
                            0 == (f.Ba & 2147483648) && (f = this.f.b.H[f.Ba], a = (f.Fb << 16) + (f.ea & 65535))
                        } else if (null != b)
                            for (a = this.Od(this.fk(a)), u = 1; u <= e.Sd; u++) {
                                m = !1;
                                q = this.Od(this.fk(b));
                                g.Da == this.f.b.g.Na ? (w = g.Lb, A = !0) : (w = g.Sd, A = !1);
                                for (v = 1; v <= w; v++)(d = this.mv(c, a, q)) && (m = !0), A ? 0 == (h.Ba & 2147483648) && (h = this.f.b.H[h.Ba], q = (h.Fb << 16) + (h.ea & 65535)) : 0 == (h.xb & 2147483648) && (h = this.f.b.H[h.xb], q = (h.Fb << 16) + (h.ea & 65535));
                                m && (t = !0, l++, -1 == k ? k = f.ea : (n = this.f.b.H[n], n.Ba = f.ea), n = f.ea);
                                0 == (f.xb & 2147483648) && (f = this.f.b.H[f.xb], a = (f.Fb << 16) + f.ea)
                            } else
                                for (a = this.Od(this.fk(a)), u = 1; u <= e.Sd; u++) {
                                    if (d = this.mv(c, a, q)) t = !0, l++, -1 == k ? k = f.ea : (n = this.f.b.H[n], n.Ba = f.ea), n = f.ea;
                                    0 == (f.xb & 2147483648) && (f = this.f.b.H[f.xb], a = (f.Fb << 16) + (f.ea & 65535))
                                }
            e.Aa = k;
            e.Lb = l;
            t && (e.Da = this.f.b.g.Na, n = this.f.b.H[n], n.Ba = -1);
            return t
        },
        mv: function(a, b, c) {
            switch (a) {
                case 0:
                    return this.BF(b);
                case 1:
                    return this.CF(b);
                case 2:
                    return this.AF(b, c);
                case 3:
                    return this.DF(b, c)
            }
            return !1
        }
    });
    K.HM = 0;
    K.GM = 1;
    K.UM = 2;
    K.LM = 3;
    K.KM =
        4;
    K.IM = 5;
    K.ZM = 6;
    K.$M = 7;
    K.SM = 8;
    K.TM = 9;
    K.XM = 10;
    K.YM = 11;
    K.PM = 12;
    K.RM = 13;
    K.QM = 14;
    K.WM = 15;
    K.JM = 16;
    K.MM = 17;
    K.aN = 18;
    K.VM = 19;
    K.NM = 20;
    K.OM = 21;
    K.eD = 0;
    K.dD = 1;
    K.EN = 2;
    K.CN = 3;
    K.BN = 4;
    K.FN = 5;
    K.DN = 6;
    K.UO = 0;
    K.VO = 1;
    K.OO = 2;
    K.PO = 3;
    K.SO = 4;
    K.TO = 5;
    K.LO = 6;
    K.NO = 7;
    K.MO = 8;
    K.RO = 9;
    K.QO = 10;
    K.JO = 11;
    K.KO = 12;
    K.prototype = l.extend(new va, {
        zg: function() {
            return 7
        },
        Yj: function(a) {
            var b;
            for (b = 0; b < a.length; b++)
                if (10 > a.charCodeAt(b)) return a.substring(0, b);
            return a
        },
        Kh: function(a) {
            a.rC(!1);
            a.wa(8);
            this.J = new Hi;
            this.J.$q = l.ub(parseFloat(this.Yj(a.cb(16))));
            this.J.ar = l.ub(parseFloat(this.Yj(a.cb(16))));
            this.J.fr = l.ub(parseFloat(this.Yj(a.cb(16))));
            this.J.$o = l.ub(parseFloat(this.Yj(a.cb(16))));
            this.J.St = l.ub(parseFloat(this.Yj(a.cb(16))));
            this.J.Wt = l.ub(parseFloat(this.Yj(a.cb(16))));
            this.J.Vt = l.ub(parseFloat(this.Yj(a.cb(16))));
            this.J.er = l.ub(parseFloat(this.Yj(a.cb(16))));
            this.J.Yo = l.ub(parseFloat(this.Yj(a.cb(16))));
            this.xh = new Gi;
            this.xh.UD = 1 == a.lb() ? !0 : !1;
            this.xh.LD = 1 == a.lb() ? !0 : !1;
            return !0
        },
        tQ: function(a) {
            var b;
            for (b = this.f.He(); null != b; b = this.f.le())
                if ((b.Fb <<
                        16) + b.ea == a) return b;
            return null
        },
        Pm: function() {
            this.xh.Ey = !1;
            this.f.Ge(K.eD, this.f.b.g.bc);
            return this.xh.Ey
        },
        SD: function() {
            if (!this.xh.LD) return !1;
            this.xh.hy = !1;
            this.f.Ge(K.dD, this.f.b.g.bc);
            return this.xh.hy
        },
        Zj: function() {
            var a = this.tQ(this.yE);
            if (!this.J.Au && null != a) {
                this.J.Uo && !this.J.Io && (this.J.Yd += this.J.fr);
                this.J.Io && !this.J.Uo && (this.J.Yd -= this.J.fr);
                0 != this.J.Yd && (!this.J.Io && !this.J.Uo || this.J.Io && this.J.Uo) && (this.J.Yd -= this.J.Yd / Math.abs(this.J.Yd) * this.J.$o, this.J.Yd <= this.J.$o &&
                    this.J.Yd >= 0 - this.J.$o && (this.J.Yd = 0));
                this.J.Yd = Math.min(Math.max(this.J.Yd, 0 - this.J.$q), this.J.$q);
                this.J.rg = Math.min(Math.max(this.J.rg + this.J.St, 0 - this.J.ar), this.J.ar);
                var b = this.J.Yd + this.J.Qx,
                    c = this.J.rg + this.J.Rx;
                this.J.ap += Math.abs(b);
                for (this.J.il += Math.abs(c); 100 < this.J.ap;) {
                    this.Pm() || (a.s += b / Math.abs(b));
                    if (this.Pm()) {
                        var d;
                        for (d = 0; d < this.J.er && (a.o--, this.Pm()); d++);
                        this.Pm() && (a.o += this.J.er, a.s -= b / Math.abs(b), this.J.Yd = this.J.ap = 0)
                    }
                    this.J.ap -= 100;
                    a.c.Y = !0
                }
                for (; 100 < this.J.il;) this.Pm() ||
                    (a.o += c / Math.abs(c), this.J.fl = !1), this.Pm() && (a.o -= c / Math.abs(c), 0 < c && (this.J.fl = !0), this.J.rg = this.J.il = 0), this.SD() && 0 < c && (this.xh.UD ? (a.o--, this.SD() || (a.o -= c / Math.abs(c), this.J.rg = this.J.il = 0, this.J.fl = !0), a.o++) : (a.o -= c / Math.abs(c), this.J.rg = this.J.il = 0, this.J.fl = !0)), this.J.il -= 100, a.c.Y = !0;
                if (0 < this.J.Yo && 0 <= c) {
                    b = !1;
                    for (c = 0; c < this.J.Yo; c++)
                        if (a.o++, this.Pm()) {
                            a.o--;
                            b = this.J.fl = !0;
                            break
                        } 0 == b && (a.o -= this.J.Yo)
                }
            }
            this.J.Uo = !1;
            this.J.Io = !1;
            return 0
        },
        action: function(a, b) {
            switch (a) {
                case K.HM:
                    this.xh.Ey = !0;
                    break;
                case K.GM:
                    this.xh.hy = !0;
                    break;
                case K.UM:
                    this.pS(b.vb(this.l, 0));
                    break;
                case K.LM:
                    this.J.Uo = !0;
                    break;
                case K.KM:
                    this.J.Io = !0;
                    break;
                case K.IM:
                    this.J.rg = 0 - this.J.Wt;
                    break;
                case K.ZM:
                    this.J.Yd = b.G(this.l, 0);
                    break;
                case K.$M:
                    this.J.rg = b.G(this.l, 0);
                    break;
                case K.SM:
                    this.J.$q = b.G(this.l, 0);
                    break;
                case K.TM:
                    this.J.ar = b.G(this.l, 0);
                    break;
                case K.XM:
                    this.J.fr = b.G(this.l, 0);
                    break;
                case K.YM:
                    this.J.$o = b.G(this.l, 0);
                    break;
                case K.PM:
                    this.J.St = b.G(this.l, 0);
                    break;
                case K.RM:
                    this.J.Wt = b.G(this.l, 0);
                    break;
                case K.QM:
                    this.J.Vt =
                        b.G(this.l, 0);
                    break;
                case K.WM:
                    this.J.er = b.G(this.l, 0);
                    break;
                case K.JM:
                    this.J.rg -= this.J.Vt;
                    break;
                case K.MM:
                    this.J.Au = !0;
                    break;
                case K.aN:
                    this.J.Au = !1;
                    break;
                case K.VM:
                    this.J.Yo = b.G(this.l, 0);
                    break;
                case K.NM:
                    this.J.Qx = b.G(this.l, 0);
                    break;
                case K.OM:
                    this.J.Rx = b.G(this.l, 0)
            }
        },
        pS: function(a) {
            this.yE = null != a ? (a.Fb << 16) + a.ea : 0
        },
        Ug: function(a) {
            switch (a) {
                case K.eD:
                    return !0;
                case K.dD:
                    return !0;
                case K.EN:
                    return this.J.fl;
                case K.CN:
                    return !this.J.fl && 0 >= this.J.rg;
                case K.BN:
                    return !this.J.fl && 0 < this.J.rg;
                case K.FN:
                    return this.J.Au;
                case K.DN:
                    return 0 < Math.abs(this.J.Yd)
            }
            return !1
        },
        Xg: function(a) {
            switch (a) {
                case K.UO:
                    return this.J.Yd;
                case K.VO:
                    return this.J.rg;
                case K.OO:
                    return this.J.$q;
                case K.PO:
                    return this.J.ar;
                case K.SO:
                    return this.J.fr;
                case K.TO:
                    return this.J.$o;
                case K.LO:
                    return this.J.St;
                case K.NO:
                    return this.J.Wt;
                case K.MO:
                    return this.J.Vt;
                case K.RO:
                    return this.J.er;
                case K.QO:
                    return this.J.Yo;
                case K.JO:
                    return this.J.Qx;
                case K.KO:
                    return this.J.Rx
            }
            return 0
        }
    });
    V.WC = 0;
    V.Bo = 1;
    V.Vk = 2;
    V.Bj = 3;
    V.Fm = 4;
    V.dN = 0;
    V.bN = 1;
    V.cN = 2;
    V.eN = 3;
    V.rN =
        1;
    V.qN = 2;
    V.tN = 4;
    V.uN = 8;
    V.sN = 16;
    V.prototype = l.extend(new db, {
        update: function(a) {
            void 0 === a && (a = this.element);
            switch (this.button.type) {
                case V.Bo:
                    a = this.button.or;
                case V.WC:
                    for (; a.firstChild;) a.removeChild(a.firstChild);
                    a.appendChild(document.createTextNode(this.button.Ra[0]));
                    break;
                case V.Vk:
                    var b = 0,
                        c = this;
                    this.Vg(function() {
                        for (; this.firstChild;) this.removeChild(this.firstChild);
                        this.appendChild(document.createTextNode(c.button.Ra[b++]))
                    }, a, "label");
                    break;
                case V.Fm:
                case V.Bj:
                    var d = !1;
                    this.Vg(function() {
                        this.disabled &&
                            (d = !0)
                    }, a);
                    var e = this.l.h.qa.Ub(this.button.images[d ? 2 : this.button.nF ? 1 : 0]);
                    for (null == e && (e = this.l.h.qa.Ub(this.button.images[0])); a.firstChild;) a.removeChild(a.firstChild);
                    e = e.createElement();
                    e.style.display = "inline-block";
                    if (this.button.type == V.Fm) switch (a.appendChild(document.createTextNode(this.button.Ra[0])), this.button.mU) {
                        case V.dN:
                            a.insertBefore(e, a.firstChild);
                            break;
                        case V.eN:
                            a.appendChild(e);
                            break;
                        case V.bN:
                            a.insertBefore(document.createElement("br"), a.firstChild);
                            a.insertBefore(e, a.firstChild);
                            break;
                        case V.cN:
                            a.appendChild(document.createElement("br")), a.appendChild(e)
                    } else a.appendChild(e)
            }
        },
        zo: function(a) {
            if (!(this.button.V & V.sN) && this.button.type != V.Bj) {
                void 0 === a && (a = this.element);
                a.style.backgroundColor = this.button.V & V.uN ? "transparent" : l.ke(this.button.background);
                var b = this;
                this.Vg(function() {
                    this.style.color = l.ke(b.button.je)
                }, a, "label")
            }
        },
        Vg: function(a, b, c) {
            void 0 === b && (b = this.element);
            void 0 === c && (c = "input");
            switch (this.button.type) {
                case V.WC:
                case V.Bj:
                case V.Fm:
                    a.call(b);
                    break;
                case V.Bo:
                    a.call("label" == c ? this.button.or : this.button.Uj);
                    break;
                case V.Vk:
                    for (var d = 0, e;;) {
                        for (;
                            (e = b.childNodes[d]).tagName.toLowerCase() != c && !(++d >= b.childNodes.length););
                        if (!1 === a.call(e)) break;
                        if (++d >= b.childNodes.length) break
                    }
            }
        },
        zg: function() {
            return 6
        },
        Kh: function(a) {
            this.f.S = a.v();
            this.f.T = a.v();
            var b = this.button;
            b.type = a.v();
            b.RB = a.v();
            b.V = a.C();
            var c = a.cq();
            b.je = a.sc();
            b.background = a.sc();
            b.images = Array(3);
            for (var d = 0; 3 > d; ++d) b.images[d] = a.v();
            b.type != V.Bj && b.type != V.Fm || this.f.EA(b.images);
            if (b.type == V.Bj)
                for (this.f.S = 1, this.f.T = 1, d = 0; 3 > d; ++d) {
                    var e = this.f.b.h.qa.Ub(b.images[d]);
                    e && (this.f.S = Math.max(this.f.S, e.width), this.f.T = Math.max(this.f.T, e.height))
                }
            a.v();
            a.C();
            b.mU = a.v();
            if (b.type == V.Vk) {
                b.tt = "";
                var e = document.createElement("div"),
                    f = "mmf-radio-group-" + this.f.ak;
                b.Ra = Array(b.RB);
                for (d = 0; d < b.RB; ++d) {
                    b.Ra[d] = a.cb();
                    var g = document.createElement("input"),
                        h = document.createElement("label");
                    g.setAttribute("name", f);
                    g.type = "radio";
                    g.id = "mmf-radio-" + this.f.ak + "-" + d;
                    h.setAttribute("for",
                        g.id);
                    h.style.position = "relative";
                    h.style.top = "-2px";
                    h.style.display = "inline-block";
                    h.style.height = (1 / b.RB * 100).toString() + "%";
                    0 < d && e.appendChild(document.createElement("br"));
                    e.appendChild(g);
                    e.appendChild(h)
                }
            } else switch (b.Ra = [a.cb()], b.tt = a.cb(), b.type) {
                case V.Bo:
                    e = document.createElement("div");
                    b.Uj = document.createElement("input");
                    b.Uj.type = "checkbox";
                    b.Uj.id = "mmf-checkbox-" + this.f.ak;
                    b.or = document.createElement("label");
                    b.or.setAttribute("for", b.Uj.id);
                    b.V & V.tN ? (e.appendChild(b.or), e.appendChild(b.Uj)) :
                        (e.appendChild(b.Uj), e.appendChild(b.or));
                    break;
                case V.Bj:
                    e = document.createElement("div");
                    break;
                default:
                    e = document.createElement("button")
            }
            e.title = b.tt;
            b.V & V.qN && this.Vg(function() {
                this.disabled = !0
            }, e);
            this.update(e);
            this.zo(e);
            this.wh(c, e);
            this.pC(e, 0 == (b.V & V.rN));
            var k = this;
            b.type == V.Bj || b.type == V.Fm ? (e.onmousedown = function() {
                k.l.h.Jr(!0);
                k.button.nF = !0;
                k.update()
            }, e.onmouseup = function() {
                k.l.h.Jr(!1);
                k.button.nF = !1;
                k.update();
                k.button.nz = k.f.b.Jc;
                k.f.Ge(1, 0)
            }) : (e.onclick = function() {
                k.l.h.s5();
                k.button.nz =
                    k.f.b.Jc;
                k.f.Ge(1, 0)
            }, e.onmousedown = function() {
                k.l.h.Jr(!0)
            }, e.onmouseup = function() {
                k.l.h.Jr(!1)
            })
        },
        Ug: function(a, b) {
            switch (a) {
                case 0:
                    return this.button.type == V.Bo && this.button.Uj.checked;
                case 1:
                    return 0 != (this.f.Z & N.Rf) || this.f.b.Jc == this.button.nz;
                case 2:
                    return this.button.type == V.Bo && !this.button.Uj.checked;
                case 3:
                    return this.button.visible;
                case 4:
                    return this.button.enabled;
                case 5:
                    if (this.button.type != V.Vk || 0 > c || c >= this.button.Ra.length) return !1;
                    var c = b.G(this.l, 0),
                        d = 0,
                        e;
                    this.Vg(function() {
                        if (d ==
                            c) return e = this, !1;
                        ++d
                    });
                    return !e.disabled
            }
        },
        action: function(a, b) {
            switch (a) {
                case 0:
                    this.button.Ra[0] = b.Eb(this.l, 0);
                    this.update();
                    break;
                case 1:
                    this.f.Ja = !0;
                    this.element.style.visibility = "visible";
                    break;
                case 2:
                    this.f.Ja = !1;
                    this.element.style.visibility = "hidden";
                    break;
                case 3:
                    this.Vg(function() {
                        this.disabled = !1
                    });
                    this.button.type != V.Bj && this.button.type != V.Fm || this.update();
                    break;
                case 4:
                    this.Vg(function() {
                        this.disabled = !0
                    });
                    this.button.type != V.Bj && this.button.type != V.Fm || this.update();
                    break;
                case 5:
                    var c =
                        b.Tr(this.l, 0);
                    c.Lr && this.setPosition(c.x, c.y);
                    break;
                case 6:
                    this.pm(b.G(this.l, 0));
                    break;
                case 7:
                    this.nm(b.G(this.l, 0));
                    break;
                case 8:
                    if (this.button.type != V.Vk) break;
                    var d = b.G(this.l, 0),
                        c = b.Eb(this.l, 1);
                    if (0 > d && d >= this.button.Ra.length) break;
                    this.button.Ra[d] = c;
                    this.update();
                    break;
                case 9:
                case 10:
                    if (this.button.type != V.Vk) break;
                    d = b.G(this.l, 0);
                    if (0 > d && d >= this.button.Ra.length) break;
                    this.Vg(function() {
                        if (e == d) return this.disabled = 10 == a, !1;
                        ++e
                    });
                    break;
                case 11:
                    if (this.button.type != V.Vk) break;
                    var d = b.G(this.l,
                            0),
                        e = 0;
                    this.Vg(function() {
                        if (e == d) return this.checked = !0, !1;
                        0 > d && (this.checked = !1);
                        ++e
                    });
                    break;
                case 12:
                    this.uo(b.G(this.l, 0));
                    break;
                case 13:
                    this.vo(b.G(this.l, 0));
                    break;
                case 14:
                    this.button.type == V.Bo && (this.button.Uj.checked = !0);
                    break;
                case 15:
                    this.Vg(function() {
                        this.checked = !1
                    });
                    break;
                case 17:
                    this.button.tt = b.Eb(this.l, 0), this.element && (this.element.title = this.button.tt)
            }
        },
        Xg: function(a) {
            switch (a) {
                case 0:
                    return this.f.S;
                case 1:
                    return this.f.T;
                case 2:
                    return this.f.s;
                case 3:
                    return this.f.o;
                case 4:
                    if (this.button.type !=
                        V.Vk) return 0;
                    var b = 0,
                        c = !1;
                    this.Vg(function() {
                        if (this.checked) return c = !0, !1;
                        ++b
                    });
                    return c ? b : -1;
                case 5:
                    return b = this.f.ha(), 0 > b || b >= this.button.Ra.length ? "" : this.button.Ra[b];
                case 6:
                    return this.button.tt
            }
        },
        Bv: function() {
            return this.button.je
        },
        qx: function(a) {
            this.button.je = a;
            this.zo()
        },
        wh: function(a, b) {
            void 0 === b && (b = this.element);
            db.prototype.wh.call(this, a);
            this.Vg(function() {
                this.style.font = b.style.font
            }, b, "label")
        }
    });
    zb.zR = 1;
    zb.prototype = l.extend(new Sb, {
        Lv: function(a) {
            a.wa(1);
            this.JA = a.C();
            this.KA =
                a.C();
            this.MA = a.C();
            this.NA = a.C();
            this.OA = a.C();
            this.js = a.C();
            this.cw = a.C();
            this.LA = a.C();
            this.Qw = 0 == (this.js & zb.zR);
            this.Bk = this.JA;
            this.Ck = this.KA;
            this.Yp = this.cw / 50 * (Math.PI / 180);
            this.Dk = Math.PI / 180 * this.LA;
            this.ag = Math.PI / 180 * this.OA;
            this.Ns = this.MA;
            this.Os = this.NA;
            this.f.c.na = this.cw
        },
        move: function() {
            if (!this.Qw) {
                var a = this.Ns * Math.cos(this.ag),
                    b = this.Os * Math.sin(this.ag);
                if (1E-4 < Math.abs(this.Dk)) var c = Math.sin(this.Dk) * a + b * Math.cos(this.Dk),
                    a = Math.cos(this.Dk) * a - b * Math.sin(this.Dk),
                    b = c;
                c = this.Yp;
                0 != (this.f.b.u.vc & O.td) && (c *= this.f.b.fd);
                this.ag += c;
                0 > this.ag ? this.ag += 2 * Math.PI : this.ag > 2 * Math.PI && (this.ag -= 2 * Math.PI);
                this.Bi(F.kd);
                this.f.s = l.ub(this.Bk + a);
                this.f.o = l.ub(this.Ck - b);
                this.pr();
                return !0
            }
            this.Bi(F.Ne);
            this.pr();
            return !1
        },
        reset: function() {
            this.Bk = this.JA;
            this.Ck = this.KA;
            this.Yp = this.cw / 50 * (Math.PI / 180);
            this.Dk = Math.PI / 180 * this.LA;
            this.ag = Math.PI / 180 * this.OA;
            this.Ns = this.MA;
            this.Os = this.NA
        },
        setPosition: function(a, b) {
            this.Bk -= this.f.s - a;
            this.Ck -= this.f.o - b;
            this.f.s = l.ub(a);
            this.f.o =
                l.ub(b)
        },
        Ac: function(a) {
            this.Bk -= this.f.s - a;
            this.f.s = l.ub(a)
        },
        Bc: function(a) {
            this.Ck -= this.f.o - a;
            this.f.o = l.ub(a)
        },
        stop: function() {
            this.Qw = !0
        },
        start: function() {
            this.Qw = !1
        },
        nf: function(a) {
            this.Yp = a / 50 * (Math.PI / 180);
            this.f.c.na = a
        },
        Lu: function(a) {
            switch (a) {
                case 3645:
                    this.Bk = a = this.f.D.ja.Tj;
                    break;
                case 3646:
                    this.Ck = a = this.f.D.ja.Tj;
                    break;
                case 3647:
                    this.Ns = a = this.f.D.ja.Tj;
                    break;
                case 3648:
                    this.Os = a = this.f.D.ja.Tj;
                    break;
                case 3649:
                    a = this.f.D.ja.Tj;
                    this.Yp = a / 50 * (Math.PI / 180);
                    this.f.c.na = a;
                    break;
                case 3650:
                    a =
                        this.f.D.ja.Tj;
                    this.ag = Math.PI / 180 * a;
                    break;
                case 3651:
                    a = this.f.D.ja.Tj;
                    this.Dk = Math.PI / 180 * a;
                    break;
                case 3652:
                    return this.Bk;
                case 3653:
                    return this.Ck;
                case 3654:
                    return this.Ns;
                case 3655:
                    return this.Os;
                case 3656:
                    return 180 / Math.PI * this.Yp * 50;
                case 3657:
                    return 180 / Math.PI * this.ag;
                case 3658:
                    return 180 / Math.PI * this.Dk
            }
            return 0
        }
    });
    Ja.HO = 1;
    Ja.fu = 1;
    Ja.prototype = l.extend(new Sb, {
        Lv: function(a) {
            a.wa(1);
            this.cI = a.C();
            this.$H = a.C();
            this.aI = a.C();
            this.bI = a.C();
            this.js = a.C();
            this.Ti = this.f.s;
            this.Ui = this.f.o;
            this.f.c.na =
                this.cI;
            this.f.c.Xa = this.sp(this.bI);
            a = 2 * this.f.c.Xa * Math.PI / 32;
            this.ls = this.aI;
            this.bw = this.$H;
            this.me = this.f.c.na * Math.cos(a);
            this.Pd = -this.f.c.na * Math.sin(a);
            this.Pl = 0;
            0 == (this.js & Ja.HO) && (this.Pl |= Ja.fu)
        },
        un: function(a, b) {
            var c = Math.sqrt(a * a + b * b);
            if (0 == c) return 0;
            c = Math.acos(a / c);
            0 < b && (c = 2 * Math.PI - c);
            return c
        },
        bA: function(a, b) {
            return Math.sqrt(a * a + b * b)
        },
        move: function() {
            var a = 1;
            0 != (this.f.b.u.vc & O.td) && (a = this.f.b.fd);
            if (0 != (this.Pl & Ja.fu)) return this.Bi(F.Ne), this.pr(), !1;
            this.Pd += this.ls / 10 *
                a;
            var b = this.un(this.me, this.Pd),
                c = this.bA(this.me, this.Pd),
                c = c - this.bw / 50 * a;
            0 > c && (c = 0);
            this.me = c * Math.cos(b);
            this.Pd = -c * Math.sin(b);
            this.Ti += this.me / 10 * a;
            this.Ui += this.Pd / 10 * a;
            this.f.c.na = Math.round(c);
            250 < this.f.c.na && (this.f.c.na = 250);
            this.f.c.Xa = l.ub(32 * b / (2 * Math.PI));
            this.Bi(F.kd);
            this.f.s = Math.round(this.Ti);
            this.f.o = Math.round(this.Ui);
            this.pr();
            return !0
        },
        setPosition: function(a, b) {
            this.Ti -= this.f.s - a;
            this.Ui -= this.f.o - b;
            this.f.s = Math.round(a);
            this.f.o = Math.round(b)
        },
        Ac: function(a) {
            this.Ti -=
                this.f.s - a;
            this.f.s = Math.round(a)
        },
        Bc: function(a) {
            this.Ui -= this.f.o - a;
            this.f.o = Math.round(a)
        },
        stop: function() {
            this.Pl |= Ja.fu
        },
        Se: function(a) {
            if (a) {
                a = new P;
                this.aF(this.f.s, this.f.o, this.f.c.Gk, this.f.c.Hk, 0, ta.ye, a);
                this.f.s = Math.round(a.x);
                this.f.o = Math.round(a.y);
                this.Ti = a.x;
                this.Ui = a.y;
                a = this.un(this.me, this.Pd);
                var b = this.bA(this.me, this.Pd),
                    c, d = -1E3;
                for (c = 0; c < 2 * Math.PI; c += Math.PI / 32)
                    if (this.YK(Math.round(this.Ti + 16 * Math.cos(a + c)), Math.round(this.Ui + -16 * Math.sin(a + c)), 0, ta.ye, !1)) {
                        d = c;
                        break
                    } - 1E3 ==
                    d ? (this.me = -this.me, this.Pd = -this.Pd) : (a += 2 * d, a > 2 * Math.PI && (a -= 2 * Math.PI), this.me = b * Math.cos(a), this.Pd = -b * Math.sin(a), this.f.c.Xa = l.ub(32 * a / (2 * Math.PI)))
            } else this.me = -this.me, this.Pd = -this.Pd
        },
        reverse: function() {
            this.me = -this.me;
            this.Pd = -this.Pd
        },
        start: function() {
            this.Pl &= ~Ja.fu
        },
        nf: function(a) {
            250 < a && (a = 250);
            this.f.c.na = a;
            var b = this.un(this.me, this.Pd);
            this.me = a * Math.cos(b);
            this.Pd = -a * Math.sin(b)
        },
        mf: function(a) {
            this.f.c.Xa = a;
            var b = this.bA(this.me, this.Pd);
            a = 2 * a * Math.PI / 32;
            this.me = b * Math.cos(a);
            this.Pd = -b * Math.sin(a)
        },
        lt: function(a) {
            this.bw = a
        },
        yq: function(a) {
            this.ls = a
        },
        Lu: function() {
            this.ls = this.f.D.ja.Tj;
            return 0
        },
        Ur: function() {
            return this.f.c.na
        },
        dH: function() {
            return this.bw
        },
        Av: function() {
            return this.ls
        }
    });
    Bh(J, fa)
};