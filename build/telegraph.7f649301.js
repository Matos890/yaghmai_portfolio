!(function (e, t, r, n, i) {
  var o =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    a = "function" == typeof o[n] && o[n],
    s = a.cache || {},
    l =
      "undefined" != typeof module &&
      "function" == typeof module.require &&
      module.require.bind(module);
  function u(t, r) {
    if (!s[t]) {
      if (!e[t]) {
        var i = "function" == typeof o[n] && o[n];
        if (!r && i) return i(t, !0);
        if (a) return a(t, !0);
        if (l && "string" == typeof t) return l(t);
        var c = Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (f.resolve = function (r) {
        var n = e[t][1][r];
        return null != n ? n : r;
      }),
        (f.cache = {});
      var p = (s[t] = new u.Module(t));
      e[t][0].call(p.exports, f, p, p.exports, this);
    }
    return s[t].exports;
    function f(e) {
      var t = f.resolve(e);
      return !1 === t ? {} : u(t);
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function (e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = s),
    (u.parent = a),
    (u.register = function (t, r) {
      e[t] = [
        function (e, t) {
          t.exports = r;
        },
        {},
      ];
    }),
    Object.defineProperty(u, "root", {
      get: function () {
        return o[n];
      },
    }),
    (o[n] = u);
  for (var c = 0; c < t.length; c++) u(t[c]);
  if (r) {
    var p = u(r);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = p)
      : "function" == typeof define &&
        define.amd &&
        define(function () {
          return p;
        });
  }
})(
  {
    kx4kz: [
      function (e, t, r) {
        var n = arguments[3];
        t.bundle.HMR_BUNDLE_ID = "4c74fe43c064fd94";
        var i = "__parcel__error__overlay__",
          o = t.bundle.Module;
        function a() {
          return 0 === location.protocol.indexOf("http")
            ? location.hostname
            : "localhost";
        }
        function s() {
          return location.port;
        }
        (t.bundle.Module = function (e) {
          o.call(this, e),
            (this.hot = {
              data: t.bundle.hotData[e],
              _acceptCallbacks: [],
              _disposeCallbacks: [],
              accept: function (e) {
                this._acceptCallbacks.push(e || function () {});
              },
              dispose: function (e) {
                this._disposeCallbacks.push(e);
              },
            }),
            (t.bundle.hotData[e] = void 0);
        }),
          (t.bundle.hotData = {});
        var l = t.bundle.parent;
        if ((!l || !l.isParcelRequire) && "undefined" != typeof WebSocket) {
          var u,
            c,
            p,
            f,
            d = a(),
            h = s(),
            g =
              "https:" != location.protocol ||
              ["localhost", "127.0.0.1", "0.0.0.0"].includes(d)
                ? "ws"
                : "wss";
          try {
            f = new WebSocket(g + "://" + d + (h ? ":" + h : "") + "/");
          } catch (e) {
            e.message && console.error(e.message), (f = {});
          }
          var m =
              "undefined" == typeof browser
                ? "undefined" == typeof chrome
                  ? null
                  : chrome
                : browser,
            _ = !1;
          try {
            (0, eval)('throw new Error("test"); //# sourceURL=test.js');
          } catch (e) {
            _ = e.stack.includes("test.js");
          }
          (f.onmessage = async function (e) {
            (u = {}), (p = []), (c = []);
            var r = JSON.parse(e.data);
            if ("update" === r.type) {
              "undefined" != typeof document && v();
              let e = r.assets.filter((e) => "d6ea1d42532a7575" === e.envHash);
              if (
                e.every(
                  (e) =>
                    "css" === e.type ||
                    ("js" === e.type && b(t.bundle.root, e.id, e.depsByBundle))
                )
              ) {
                console.clear(),
                  "undefined" != typeof window &&
                    "undefined" != typeof CustomEvent &&
                    window.dispatchEvent(new CustomEvent("parcelhmraccept")),
                  await w(e);
                let r = {};
                for (let e = 0; e < c.length; e++) {
                  let t = c[e][1];
                  r[t] || (S(c[e][0], t), (r[t] = !0));
                }
                r = {};
                for (let e = 0; e < p.length; e++) {
                  let n = p[e][1];
                  r[n] ||
                    ((function (e, r) {
                      e(r);
                      var n = e.cache[r];
                      n &&
                        n.hot &&
                        n.hot._acceptCallbacks.length &&
                        n.hot._acceptCallbacks.forEach(function (e) {
                          var n = e(function () {
                            return y(t.bundle.root, r);
                          });
                          n &&
                            p.length &&
                            (n.forEach(function (e) {
                              S(e[0], e[1]);
                            }),
                            p.push.apply(p, n));
                        });
                    })(p[e][0], n),
                    (r[n] = !0));
                }
              } else
                "reload" in location
                  ? location.reload()
                  : m && m.runtime && m.runtime.reload && m.runtime.reload();
            }
            if ("error" === r.type) {
              for (let e of r.diagnostics.ansi) {
                let t = e.codeframe ? e.codeframe : e.stack;
                console.error(
                  "\uD83D\uDEA8 [parcel]: " +
                    e.message +
                    "\n" +
                    t +
                    "\n\n" +
                    e.hints.join("\n")
                );
              }
              if ("undefined" != typeof document) {
                v();
                var n = (function (e) {
                  var t = document.createElement("div");
                  t.id = i;
                  let r =
                    '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
                  for (let t of e) {
                    let e = t.frames.length
                      ? t.frames.reduce(
                          (e, t) => `${e}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(
                            t.location
                          )}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${
                            t.location
                          }</a>
${t.code}`,
                          ""
                        )
                      : t.stack;
                    r += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${t.message}
        </div>
        <pre>${e}</pre>
        <div>
          ${t.hints.map((e) => "<div>\uD83D\uDCA1 " + e + "</div>").join("")}
        </div>
        ${
          t.documentation
            ? `<div>\u{1F4DD} <a style="color: violet" href="${t.documentation}" target="_blank">Learn more</a></div>`
            : ""
        }
      </div>
    `;
                  }
                  return (r += "</div>"), (t.innerHTML = r), t;
                })(r.diagnostics.html);
                document.body.appendChild(n);
              }
            }
          }),
            f instanceof WebSocket &&
              ((f.onerror = function (e) {
                e.message && console.error(e.message);
              }),
              (f.onclose = function () {
                console.warn(
                  "[parcel] \uD83D\uDEA8 Connection to the HMR server was lost"
                );
              }));
        }
        function v() {
          var e = document.getElementById(i);
          e && (e.remove(), console.log("[parcel] ✨ Error resolved"));
        }
        function y(e, t) {
          var r,
            n,
            i,
            o = e.modules;
          if (!o) return [];
          var a = [];
          for (r in o)
            for (n in o[r][1])
              ((i = o[r][1][n]) === t ||
                (Array.isArray(i) && i[i.length - 1] === t)) &&
                a.push([e, r]);
          return e.parent && (a = a.concat(y(e.parent, t))), a;
        }
        var x = null;
        async function w(e) {
          let r;
          n.parcelHotUpdate = Object.create(null);
          try {
            if (!_) {
              let t = e.map((e) => {
                var t;
                return null ===
                  (t = (function (e) {
                    if ("js" === e.type) {
                      if ("undefined" != typeof document) {
                        let t = document.createElement("script");
                        return (
                          (t.src = e.url + "?t=" + Date.now()),
                          "esmodule" === e.outputFormat && (t.type = "module"),
                          new Promise((e, r) => {
                            var n;
                            (t.onload = () => e(t)),
                              (t.onerror = r),
                              null === (n = document.head) ||
                                void 0 === n ||
                                n.appendChild(t);
                          })
                        );
                      }
                      if ("function" == typeof importScripts)
                        return "esmodule" === e.outputFormat
                          ? __parcel__require__(e.url + "?t=" + Date.now())
                          : new Promise((t, r) => {
                              try {
                                importScripts(e.url + "?t=" + Date.now()), t();
                              } catch (e) {
                                r(e);
                              }
                            });
                    }
                  })(e)) || void 0 === t
                  ? void 0
                  : t.catch((e) => {
                      if (
                        m &&
                        m.runtime &&
                        3 == m.runtime.getManifest().manifest_version &&
                        "undefined" != typeof ServiceWorkerGlobalScope &&
                        n instanceof ServiceWorkerGlobalScope
                      ) {
                        m.runtime.reload();
                        return;
                      }
                      throw e;
                    });
              });
              r = await Promise.all(t);
            }
            e.forEach(function (e) {
              !(function e(r, i) {
                var o = r.modules;
                if (o) {
                  if ("css" === i.type)
                    x ||
                      (x = setTimeout(function () {
                        for (
                          var e = document.querySelectorAll(
                              'link[rel="stylesheet"]'
                            ),
                            t = 0;
                          t < e.length;
                          t++
                        ) {
                          var r = e[t].getAttribute("href"),
                            n = a(),
                            i =
                              "localhost" === n
                                ? RegExp(
                                    "^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" +
                                      s()
                                  ).test(r)
                                : r.indexOf(n + ":" + s());
                          (/^https?:\/\//i.test(r) &&
                            0 !== r.indexOf(location.origin) &&
                            !i) ||
                            (function (e) {
                              var t = e.getAttribute("href");
                              if (t) {
                                var r = e.cloneNode();
                                (r.onload = function () {
                                  null !== e.parentNode &&
                                    e.parentNode.removeChild(e);
                                }),
                                  r.setAttribute(
                                    "href",
                                    t.split("?")[0] + "?" + Date.now()
                                  ),
                                  e.parentNode.insertBefore(r, e.nextSibling);
                              }
                            })(e[t]);
                        }
                        x = null;
                      }, 50));
                  else if ("js" === i.type) {
                    let a = i.depsByBundle[r.HMR_BUNDLE_ID];
                    if (a) {
                      if (o[i.id]) {
                        let e = o[i.id][1];
                        for (let r in e)
                          if (!a[r] || a[r] !== e[r]) {
                            let n = e[r];
                            1 === y(t.bundle.root, n).length &&
                              (function e(r, n) {
                                let i = r.modules;
                                if (i) {
                                  if (i[n]) {
                                    let o = i[n][1],
                                      a = [];
                                    for (let e in o)
                                      1 === y(t.bundle.root, o[e]).length &&
                                        a.push(o[e]);
                                    delete i[n],
                                      delete r.cache[n],
                                      a.forEach((r) => {
                                        e(t.bundle.root, r);
                                      });
                                  } else r.parent && e(r.parent, n);
                                }
                              })(t.bundle.root, n);
                          }
                      }
                      _ && (0, eval)(i.output);
                      let e = n.parcelHotUpdate[i.id];
                      o[i.id] = [e, a];
                    } else r.parent && e(r.parent, i);
                  }
                }
              })(t.bundle.root, e);
            });
          } finally {
            delete n.parcelHotUpdate,
              r &&
                r.forEach((e) => {
                  if (e) {
                    var t;
                    null === (t = document.head) ||
                      void 0 === t ||
                      t.removeChild(e);
                  }
                });
          }
        }
        function b(e, r, n) {
          if (T(e, r, n)) return !0;
          let i = y(t.bundle.root, r),
            o = !1;
          for (; i.length > 0; ) {
            let e = i.shift();
            if (T(e[0], e[1], null)) o = !0;
            else {
              let r = y(t.bundle.root, e[1]);
              if (0 === r.length) {
                o = !1;
                break;
              }
              i.push(...r);
            }
          }
          return o;
        }
        function T(e, t, r) {
          if (e.modules) {
            if (r && !r[e.HMR_BUNDLE_ID]) return !e.parent || b(e.parent, t, r);
            if (u[t]) return !0;
            u[t] = !0;
            var n = e.cache[t];
            if (
              (c.push([e, t]), !n || (n.hot && n.hot._acceptCallbacks.length))
            )
              return p.push([e, t]), !0;
          }
        }
        function S(e, t) {
          var r = e.cache[t];
          (e.hotData[t] = {}),
            r && r.hot && (r.hot.data = e.hotData[t]),
            r &&
              r.hot &&
              r.hot._disposeCallbacks.length &&
              r.hot._disposeCallbacks.forEach(function (r) {
                r(e.hotData[t]);
              }),
            delete e.cache[t];
        }
      },
      {},
    ],
    f2QDv: [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js"),
          i = e("gsap"),
          o = n.interopDefault(i),
          a = e("gsap/all");
        e("gsap/gsap-core");
        var s = e("./modules/nav"),
          l = e("./modules/scrollingTitleAnimation"),
          u = e("./modules/animazioneHome"),
          c = e("./modules/menu"),
          p = e("./modules/pageTranstionHome"),
          f = e("./modules/pageTransitionWorks"),
          d = e("./modules/telegraphAnimation");
        (0, o.default).registerPlugin(a.ScrollTrigger),
          document.querySelector(".animatedLogo"),
          document.addEventListener("DOMContentLoaded", () => {}),
          document.addEventListener("DOMContentLoaded", () => {
            (0, s.initializeNav)();
          }),
          document.addEventListener("DOMContentLoaded", () => {
            (0, l.initializeScrollAnimations)();
          }),
          (0, u.initializeAnimation)(),
          document.querySelector(".nav1") &&
            document.addEventListener("DOMContentLoaded", () => {
              (0, c.initializeMenu)();
            }),
          document.addEventListener("DOMContentLoaded", () => {
            (0, p.initializeTransitionHome)();
          }),
          document.title.includes("|") &&
            document.addEventListener("DOMContentLoaded", () => {
              (0, f.initializeTransitionAbout)();
            }),
          document.title.includes("Telegraph") &&
            document.addEventListener("DOMContentLoaded", () => {
              (0, d.initializeTelegraphAnimation)();
            });
      },
      {
        gsap: "fPSuC",
        "gsap/all": "3UJRo",
        "gsap/gsap-core": "05eeC",
        "./modules/nav": "fLOTs",
        "./modules/scrollingTitleAnimation": "b19BA",
        "./modules/animazioneHome": "fVMw1",
        "./modules/menu": "7FeRP",
        "./modules/pageTranstionHome": "85FTH",
        "./modules/pageTransitionWorks": "iquZy",
        "./modules/telegraphAnimation": "8g7WW",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    fPSuC: [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r),
          n.export(r, "gsap", () => a),
          n.export(r, "default", () => a),
          n.export(r, "CSSPlugin", () => o.CSSPlugin),
          n.export(r, "TweenMax", () => s),
          n.export(r, "TweenLite", () => i.TweenLite),
          n.export(r, "TimelineMax", () => i.TimelineMax),
          n.export(r, "TimelineLite", () => i.TimelineLite),
          n.export(r, "Power0", () => i.Power0),
          n.export(r, "Power1", () => i.Power1),
          n.export(r, "Power2", () => i.Power2),
          n.export(r, "Power3", () => i.Power3),
          n.export(r, "Power4", () => i.Power4),
          n.export(r, "Linear", () => i.Linear),
          n.export(r, "Quad", () => i.Quad),
          n.export(r, "Cubic", () => i.Cubic),
          n.export(r, "Quart", () => i.Quart),
          n.export(r, "Quint", () => i.Quint),
          n.export(r, "Strong", () => i.Strong),
          n.export(r, "Elastic", () => i.Elastic),
          n.export(r, "Back", () => i.Back),
          n.export(r, "SteppedEase", () => i.SteppedEase),
          n.export(r, "Bounce", () => i.Bounce),
          n.export(r, "Sine", () => i.Sine),
          n.export(r, "Expo", () => i.Expo),
          n.export(r, "Circ", () => i.Circ);
        var i = e("./gsap-core.js"),
          o = e("./CSSPlugin.js"),
          a = (0, i.gsap).registerPlugin(o.CSSPlugin) || i.gsap,
          s = a.core.Tween;
      },
      {
        "./gsap-core.js": "05eeC",
        "./CSSPlugin.js": "l02JQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "05eeC": [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        function i(e) {
          if (void 0 === e)
            throw ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function o(e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = t);
        }
        n.defineInteropFlag(r),
          n.export(r, "GSCache", () => tG),
          n.export(r, "Animation", () => t$),
          n.export(r, "Timeline", () => tK),
          n.export(r, "Tween", () => ro),
          n.export(r, "PropTween", () => ry),
          n.export(r, "gsap", () => rR),
          n.export(r, "Power0", () => rz),
          n.export(r, "Power1", () => rL),
          n.export(r, "Power2", () => rF),
          n.export(r, "Power3", () => rB),
          n.export(r, "Power4", () => rj),
          n.export(r, "Linear", () => rq),
          n.export(r, "Quad", () => rI),
          n.export(r, "Cubic", () => rW),
          n.export(r, "Quart", () => rU),
          n.export(r, "Quint", () => rN),
          n.export(r, "Strong", () => rY),
          n.export(r, "Elastic", () => rH),
          n.export(r, "Back", () => rX),
          n.export(r, "SteppedEase", () => rV),
          n.export(r, "Bounce", () => rQ),
          n.export(r, "Sine", () => rG),
          n.export(r, "Expo", () => r$),
          n.export(r, "Circ", () => rK),
          n.export(r, "TweenMax", () => ro),
          n.export(r, "TweenLite", () => ro),
          n.export(r, "TimelineMax", () => tK),
          n.export(r, "TimelineLite", () => tK),
          n.export(r, "default", () => rR),
          n.export(r, "wrap", () => tm),
          n.export(r, "wrapYoyo", () => t_),
          n.export(r, "distribute", () => tl),
          n.export(r, "random", () => tp),
          n.export(r, "snap", () => tc),
          n.export(r, "normalize", () => th),
          n.export(r, "getUnit", () => tt),
          n.export(r, "clamp", () => tr),
          n.export(r, "splitColor", () => tP),
          n.export(r, "toArray", () => to),
          n.export(r, "selector", () => ta),
          n.export(r, "mapRange", () => ty),
          n.export(r, "pipe", () => tf),
          n.export(r, "unitize", () => td),
          n.export(r, "interpolate", () => tx),
          n.export(r, "shuffle", () => ts),
          n.export(r, "_getProperty", () => eT),
          n.export(r, "_numExp", () => K),
          n.export(r, "_numWithUnitExp", () => J),
          n.export(r, "_isString", () => I),
          n.export(r, "_isUndefined", () => N),
          n.export(r, "_renderComplexString", () => rd),
          n.export(r, "_relExp", () => ee),
          n.export(r, "_setDefaults", () => eR),
          n.export(r, "_removeLinkedListItem", () => eI),
          n.export(r, "_forEachName", () => eS),
          n.export(r, "_sortPropTweensByPriority", () => rv),
          n.export(r, "_colorStringFilter", () => tR),
          n.export(r, "_replaceRandom", () => tv),
          n.export(r, "_checkPlugin", () => t6),
          n.export(r, "_plugins", () => em),
          n.export(r, "_ticker", () => tz),
          n.export(r, "_config", () => D),
          n.export(r, "_roundModifier", () => tu),
          n.export(r, "_round", () => ek),
          n.export(r, "_missingPlugin", () => ea),
          n.export(r, "_getSetter", () => rc),
          n.export(r, "_getCache", () => eb),
          n.export(r, "_colorExp", () => tA),
          n.export(r, "_parseRelative", () => eE);
        /*!
         * GSAP 3.12.5
         * https://gsap.com
         *
         * @license Copyright 2008-2024, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var a,
          s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          _,
          v,
          y,
          x,
          w,
          b,
          T,
          S,
          k,
          C,
          E,
          P,
          M,
          O,
          A,
          D = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          R = { duration: 0.5, overwrite: !1, delay: 0 },
          z = 2 * Math.PI,
          L = z / 4,
          F = 0,
          B = Math.sqrt,
          j = Math.cos,
          q = Math.sin,
          I = function (e) {
            return "string" == typeof e;
          },
          W = function (e) {
            return "function" == typeof e;
          },
          U = function (e) {
            return "number" == typeof e;
          },
          N = function (e) {
            return void 0 === e;
          },
          Y = function (e) {
            return "object" == typeof e;
          },
          H = function (e) {
            return !1 !== e;
          },
          X = function () {
            return "undefined" != typeof window;
          },
          V = function (e) {
            return W(e) || I(e);
          },
          Q =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
          G = Array.isArray,
          $ = /(?:-?\.?\d|\.)+/gi,
          K = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          Z = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          ee = /[+-]=-?[.\d]+/,
          et = /[^,'"\[\]\s]+/gi,
          er = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
          en = {},
          ei = {},
          eo = function (e) {
            return (ei = ez(e, en)) && rR;
          },
          ea = function (e, t) {
            return console.warn(
              "Invalid property",
              e,
              "set to",
              t,
              "Missing plugin? gsap.registerPlugin()"
            );
          },
          es = function (e, t) {
            return !t && console.warn(e);
          },
          el = function (e, t) {
            return (e && (en[e] = t) && ei && (ei[e] = t)) || en;
          },
          eu = function () {
            return 0;
          },
          ec = { suppressEvents: !0, isStart: !0, kill: !1 },
          ep = { suppressEvents: !0, kill: !1 },
          ef = { suppressEvents: !0 },
          ed = {},
          eh = [],
          eg = {},
          em = {},
          e_ = {},
          ev = 30,
          ey = [],
          ex = "",
          ew = function (e) {
            var t,
              r,
              n = e[0];
            if ((Y(n) || W(n) || (e = [e]), !(t = (n._gsap || {}).harness))) {
              for (r = ey.length; r-- && !ey[r].targetTest(n); );
              t = ey[r];
            }
            for (r = e.length; r--; )
              (e[r] && (e[r]._gsap || (e[r]._gsap = new tG(e[r], t)))) ||
                e.splice(r, 1);
            return e;
          },
          eb = function (e) {
            return e._gsap || ew(to(e))[0]._gsap;
          },
          eT = function (e, t, r) {
            return (r = e[t]) && W(r)
              ? e[t]()
              : (N(r) && e.getAttribute && e.getAttribute(t)) || r;
          },
          eS = function (e, t) {
            return (e = e.split(",")).forEach(t) || e;
          },
          ek = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          eC = function (e) {
            return Math.round(1e7 * e) / 1e7 || 0;
          },
          eE = function (e, t) {
            var r = t.charAt(0),
              n = parseFloat(t.substr(2));
            return (
              (e = parseFloat(e)),
              "+" === r ? e + n : "-" === r ? e - n : "*" === r ? e * n : e / n
            );
          },
          eP = function (e, t) {
            for (var r = t.length, n = 0; 0 > e.indexOf(t[n]) && ++n < r; );
            return n < r;
          },
          eM = function () {
            var e,
              t,
              r = eh.length,
              n = eh.slice(0);
            for (e = 0, eg = {}, eh.length = 0; e < r; e++)
              (t = n[e]) &&
                t._lazy &&
                (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
          },
          eO = function (e, t, r, n) {
            eh.length && !b && eM(),
              e.render(t, r, n || (b && t < 0 && (e._initted || e._startAt))),
              eh.length && !b && eM();
          },
          eA = function (e) {
            var t = parseFloat(e);
            return (t || 0 === t) && (e + "").match(et).length < 2
              ? t
              : I(e)
              ? e.trim()
              : e;
          },
          eD = function (e) {
            return e;
          },
          eR = function (e, t) {
            for (var r in t) r in e || (e[r] = t[r]);
            return e;
          },
          ez = function (e, t) {
            for (var r in t) e[r] = t[r];
            return e;
          },
          eL = function e(t, r) {
            for (var n in r)
              "__proto__" !== n &&
                "constructor" !== n &&
                "prototype" !== n &&
                (t[n] = Y(r[n]) ? e(t[n] || (t[n] = {}), r[n]) : r[n]);
            return t;
          },
          eF = function (e, t) {
            var r,
              n = {};
            for (r in e) r in t || (n[r] = e[r]);
            return n;
          },
          eB = function (e) {
            var t,
              r = e.parent || S,
              n = e.keyframes
                ? ((t = G(e.keyframes)),
                  function (e, r) {
                    for (var n in r)
                      n in e ||
                        ("duration" === n && t) ||
                        "ease" === n ||
                        (e[n] = r[n]);
                  })
                : eR;
            if (H(e.inherit))
              for (; r; ) n(e, r.vars.defaults), (r = r.parent || r._dp);
            return e;
          },
          ej = function (e, t) {
            for (
              var r = e.length, n = r === t.length;
              n && r-- && e[r] === t[r];

            );
            return r < 0;
          },
          eq = function (e, t, r, n, i) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var o,
              a = e[n];
            if (i) for (o = t[i]; a && a[i] > o; ) a = a._prev;
            return (
              a
                ? ((t._next = a._next), (a._next = t))
                : ((t._next = e[r]), (e[r] = t)),
              t._next ? (t._next._prev = t) : (e[n] = t),
              (t._prev = a),
              (t.parent = t._dp = e),
              t
            );
          },
          eI = function (e, t, r, n) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var i = t._prev,
              o = t._next;
            i ? (i._next = o) : e[r] === t && (e[r] = o),
              o ? (o._prev = i) : e[n] === t && (e[n] = i),
              (t._next = t._prev = t.parent = null);
          },
          eW = function (e, t) {
            e.parent &&
              (!t || e.parent.autoRemoveChildren) &&
              e.parent.remove &&
              e.parent.remove(e),
              (e._act = 0);
          },
          eU = function (e, t) {
            if (e && (!t || t._end > e._dur || t._start < 0))
              for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
            return e;
          },
          eN = function (e) {
            for (var t = e.parent; t && t.parent; )
              (t._dirty = 1), t.totalDuration(), (t = t.parent);
            return e;
          },
          eY = function (e, t, r, n) {
            return (
              e._startAt &&
              (b
                ? e._startAt.revert(ep)
                : (e.vars.immediateRender && !e.vars.autoRevert) ||
                  e._startAt.render(t, !0, n))
            );
          },
          eH = function (e) {
            return e._repeat
              ? eX(e._tTime, (e = e.duration() + e._rDelay)) * e
              : 0;
          },
          eX = function (e, t) {
            var r = Math.floor((e /= t));
            return e && r === e ? r - 1 : r;
          },
          eV = function (e, t) {
            return (
              (e - t._start) * t._ts +
              (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
            );
          },
          eQ = function (e) {
            return (e._end = eC(
              e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0)
            ));
          },
          eG = function (e, t) {
            var r = e._dp;
            return (
              r &&
                r.smoothChildTiming &&
                e._ts &&
                ((e._start = eC(
                  r._time -
                    (e._ts > 0
                      ? t / e._ts
                      : -(
                          ((e._dirty ? e.totalDuration() : e._tDur) - t) /
                          e._ts
                        ))
                )),
                eQ(e),
                r._dirty || eU(r, e)),
              e
            );
          },
          e$ = function (e, t) {
            var r;
            if (
              ((t._time ||
                (!t._dur && t._initted) ||
                (t._start < e._time && (t._dur || !t.add))) &&
                ((r = eV(e.rawTime(), t)),
                (!t._dur || te(0, t.totalDuration(), r) - t._tTime > 1e-8) &&
                  t.render(r, !0)),
              eU(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
            ) {
              if (e._dur < e.duration())
                for (r = e; r._dp; )
                  r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
              e._zTime = -1e-8;
            }
          },
          eK = function (e, t, r, n) {
            return (
              t.parent && eW(t),
              (t._start = eC(
                (U(r) ? r : r || e !== S ? e6(e, r, t) : e._time) + t._delay
              )),
              (t._end = eC(
                t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
              )),
              eq(e, t, "_first", "_last", e._sort ? "_start" : 0),
              e1(t) || (e._recent = t),
              n || e$(e, t),
              e._ts < 0 && eG(e, e._tTime),
              e
            );
          },
          eJ = function (e, t) {
            return (
              (en.ScrollTrigger || ea("scrollTrigger", t)) &&
              en.ScrollTrigger.create(t, e)
            );
          },
          eZ = function (e, t, r, n, i) {
            return (t9(e, t, i), e._initted)
              ? !r &&
                e._pt &&
                !b &&
                ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
                M !== tz.frame
                ? (eh.push(e), (e._lazy = [i, n]), 1)
                : void 0
              : 1;
          },
          e0 = function e(t) {
            var r = t.parent;
            return (
              r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || e(r))
            );
          },
          e1 = function (e) {
            var t = e.data;
            return "isFromStart" === t || "isStart" === t;
          },
          e2 = function (e, t, r, n) {
            var i,
              o,
              a,
              s = e.ratio,
              l =
                t < 0 ||
                (!t &&
                  ((!e._start && e0(e) && !(!e._initted && e1(e))) ||
                    ((e._ts < 0 || e._dp._ts < 0) && !e1(e))))
                  ? 0
                  : 1,
              u = e._rDelay,
              c = 0;
            if (
              (u &&
                e._repeat &&
                ((o = eX((c = te(0, e._tDur, t)), u)),
                e._yoyo && 1 & o && (l = 1 - l),
                o !== eX(e._tTime, u) &&
                  ((s = 1 - l),
                  e.vars.repeatRefresh && e._initted && e.invalidate())),
              l !== s || b || n || 1e-8 === e._zTime || (!t && e._zTime))
            ) {
              if (!e._initted && eZ(e, t, n, r, c)) return;
              for (
                a = e._zTime,
                  e._zTime = t || (r ? 1e-8 : 0),
                  r || (r = t && !a),
                  e.ratio = l,
                  e._from && (l = 1 - l),
                  e._time = 0,
                  e._tTime = c,
                  i = e._pt;
                i;

              )
                i.r(l, i.d), (i = i._next);
              t < 0 && eY(e, t, r, !0),
                e._onUpdate && !r && tb(e, "onUpdate"),
                c && e._repeat && !r && e.parent && tb(e, "onRepeat"),
                (t >= e._tDur || t < 0) &&
                  e.ratio === l &&
                  (l && eW(e, 1),
                  r ||
                    b ||
                    (tb(e, l ? "onComplete" : "onReverseComplete", !0),
                    e._prom && e._prom()));
            } else e._zTime || (e._zTime = t);
          },
          e5 = function (e, t, r) {
            var n;
            if (r > t)
              for (n = e._first; n && n._start <= r; ) {
                if ("isPause" === n.data && n._start > t) return n;
                n = n._next;
              }
            else
              for (n = e._last; n && n._start >= r; ) {
                if ("isPause" === n.data && n._start < t) return n;
                n = n._prev;
              }
          },
          e3 = function (e, t, r, n) {
            var i = e._repeat,
              o = eC(t) || 0,
              a = e._tTime / e._tDur;
            return (
              a && !n && (e._time *= o / e._dur),
              (e._dur = o),
              (e._tDur = i
                ? i < 0
                  ? 1e10
                  : eC(o * (i + 1) + e._rDelay * i)
                : o),
              a > 0 && !n && eG(e, (e._tTime = e._tDur * a)),
              e.parent && eQ(e),
              r || eU(e.parent, e),
              e
            );
          },
          e8 = function (e) {
            return e instanceof tK ? eU(e) : e3(e, e._dur);
          },
          e4 = { _start: 0, endTime: eu, totalDuration: eu },
          e6 = function e(t, r, n) {
            var i,
              o,
              a,
              s = t.labels,
              l = t._recent || e4,
              u = t.duration() >= 1e8 ? l.endTime(!1) : t._dur;
            return I(r) && (isNaN(r) || r in s)
              ? ((o = r.charAt(0)),
                (a = "%" === r.substr(-1)),
                (i = r.indexOf("=")),
                "<" === o || ">" === o)
                ? (i >= 0 && (r = r.replace(/=/, "")),
                  ("<" === o ? l._start : l.endTime(l._repeat >= 0)) +
                    (parseFloat(r.substr(1)) || 0) *
                      (a ? (i < 0 ? l : n).totalDuration() / 100 : 1))
                : i < 0
                ? (r in s || (s[r] = u), s[r])
                : ((o = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                  a && n && (o = (o / 100) * (G(n) ? n[0] : n).totalDuration()),
                  i > 1 ? e(t, r.substr(0, i - 1), n) + o : u + o)
              : null == r
              ? u
              : +r;
          },
          e9 = function (e, t, r) {
            var n,
              i,
              o = U(t[1]),
              a = (o ? 2 : 1) + (e < 2 ? 0 : 1),
              s = t[a];
            if ((o && (s.duration = t[1]), (s.parent = r), e)) {
              for (n = s, i = r; i && !("immediateRender" in n); )
                (n = i.vars.defaults || {}),
                  (i = H(i.vars.inherit) && i.parent);
              (s.immediateRender = H(n.immediateRender)),
                e < 2 ? (s.runBackwards = 1) : (s.startAt = t[a - 1]);
            }
            return new ro(t[0], s, t[a + 1]);
          },
          e7 = function (e, t) {
            return e || 0 === e ? t(e) : t;
          },
          te = function (e, t, r) {
            return r < e ? e : r > t ? t : r;
          },
          tt = function (e, t) {
            return I(e) && (t = er.exec(e)) ? t[1] : "";
          },
          tr = function (e, t, r) {
            return e7(r, function (r) {
              return te(e, t, r);
            });
          },
          tn = [].slice,
          ti = function (e, t) {
            return (
              e &&
              Y(e) &&
              "length" in e &&
              ((!t && !e.length) || (e.length - 1 in e && Y(e[0]))) &&
              !e.nodeType &&
              e !== k
            );
          },
          to = function (e, t, r) {
            var n;
            return T && !t && T.selector
              ? T.selector(e)
              : I(e) && !r && (C || !tL())
              ? tn.call((t || E).querySelectorAll(e), 0)
              : G(e)
              ? (void 0 === n && (n = []),
                e.forEach(function (e) {
                  var t;
                  return (I(e) && !r) || ti(e, 1)
                    ? (t = n).push.apply(t, to(e))
                    : n.push(e);
                }) || n)
              : ti(e)
              ? tn.call(e, 0)
              : e
              ? [e]
              : [];
          },
          ta = function (e) {
            return (
              (e = to(e)[0] || es("Invalid scope") || {}),
              function (t) {
                var r = e.current || e.nativeElement || e;
                return to(
                  t,
                  r.querySelectorAll
                    ? r
                    : r === e
                    ? es("Invalid scope") || E.createElement("div")
                    : e
                );
              }
            );
          },
          ts = function (e) {
            return e.sort(function () {
              return 0.5 - Math.random();
            });
          },
          tl = function (e) {
            if (W(e)) return e;
            var t = Y(e) ? e : { each: e },
              r = tY(t.ease),
              n = t.from || 0,
              i = parseFloat(t.base) || 0,
              o = {},
              a = n > 0 && n < 1,
              s = isNaN(n) || a,
              l = t.axis,
              u = n,
              c = n;
            return (
              I(n)
                ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
                : !a && s && ((u = n[0]), (c = n[1])),
              function (e, a, p) {
                var f,
                  d,
                  h,
                  g,
                  m,
                  _,
                  v,
                  y,
                  x,
                  w = (p || t).length,
                  b = o[w];
                if (!b) {
                  if (!(x = "auto" === t.grid ? 0 : (t.grid || [1, 1e8])[1])) {
                    for (
                      v = -1e8;
                      v < (v = p[x++].getBoundingClientRect().left) && x < w;

                    );
                    x < w && x--;
                  }
                  for (
                    _ = 0,
                      b = o[w] = [],
                      f = s ? Math.min(x, w) * u - 0.5 : n % x,
                      d = 1e8 === x ? 0 : s ? (w * c) / x - 0.5 : (n / x) | 0,
                      v = 0,
                      y = 1e8;
                    _ < w;
                    _++
                  )
                    (h = (_ % x) - f),
                      (g = d - ((_ / x) | 0)),
                      (b[_] = m =
                        l ? Math.abs("y" === l ? g : h) : B(h * h + g * g)),
                      m > v && (v = m),
                      m < y && (y = m);
                  "random" === n && ts(b),
                    (b.max = v - y),
                    (b.min = y),
                    (b.v = w =
                      (parseFloat(t.amount) ||
                        parseFloat(t.each) *
                          (x > w
                            ? w - 1
                            : l
                            ? "y" === l
                              ? w / x
                              : x
                            : Math.max(x, w / x)) ||
                        0) * ("edges" === n ? -1 : 1)),
                    (b.b = w < 0 ? i - w : i),
                    (b.u = tt(t.amount || t.each) || 0),
                    (r = r && w < 0 ? tU(r) : r);
                }
                return (
                  (w = (b[e] - b.min) / b.max || 0),
                  eC(b.b + (r ? r(w) : w) * b.v) + b.u
                );
              }
            );
          },
          tu = function (e) {
            var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
            return function (r) {
              var n = eC(Math.round(parseFloat(r) / e) * e * t);
              return (n - (n % 1)) / t + (U(r) ? 0 : tt(r));
            };
          },
          tc = function (e, t) {
            var r,
              n,
              i = G(e);
            return (
              !i &&
                Y(e) &&
                ((r = i = e.radius || 1e8),
                e.values
                  ? (n = !U((e = to(e.values))[0])) && (r *= r)
                  : (e = tu(e.increment))),
              e7(
                t,
                i
                  ? W(e)
                    ? function (t) {
                        return Math.abs((n = e(t)) - t) <= r ? n : t;
                      }
                    : function (t) {
                        for (
                          var i,
                            o,
                            a = parseFloat(n ? t.x : t),
                            s = parseFloat(n ? t.y : 0),
                            l = 1e8,
                            u = 0,
                            c = e.length;
                          c--;

                        )
                          (i = n
                            ? (i = e[c].x - a) * i + (o = e[c].y - s) * o
                            : Math.abs(e[c] - a)) < l && ((l = i), (u = c));
                        return (
                          (u = !r || l <= r ? e[u] : t),
                          n || u === t || U(t) ? u : u + tt(t)
                        );
                      }
                  : tu(e)
              )
            );
          },
          tp = function (e, t, r, n) {
            return e7(G(e) ? !t : !0 === r ? ((r = 0), !1) : !n, function () {
              return G(e)
                ? e[~~(Math.random() * e.length)]
                : (n =
                    (r = r || 1e-5) < 1
                      ? Math.pow(10, (r + "").length - 2)
                      : 1) &&
                    Math.floor(
                      Math.round(
                        (e - r / 2 + Math.random() * (t - e + 0.99 * r)) / r
                      ) *
                        r *
                        n
                    ) / n;
            });
          },
          tf = function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e);
              }, e);
            };
          },
          td = function (e, t) {
            return function (r) {
              return e(parseFloat(r)) + (t || tt(r));
            };
          },
          th = function (e, t, r) {
            return ty(e, t, 0, 1, r);
          },
          tg = function (e, t, r) {
            return e7(r, function (r) {
              return e[~~t(r)];
            });
          },
          tm = function e(t, r, n) {
            var i = r - t;
            return G(t)
              ? tg(t, e(0, t.length), r)
              : e7(n, function (e) {
                  return ((i + ((e - t) % i)) % i) + t;
                });
          },
          t_ = function e(t, r, n) {
            var i = r - t,
              o = 2 * i;
            return G(t)
              ? tg(t, e(0, t.length - 1), r)
              : e7(n, function (e) {
                  return (
                    (e = (o + ((e - t) % o)) % o || 0), t + (e > i ? o - e : e)
                  );
                });
          },
          tv = function (e) {
            for (
              var t, r, n, i, o = 0, a = "";
              ~(t = e.indexOf("random(", o));

            )
              (n = e.indexOf(")", t)),
                (i = "[" === e.charAt(t + 7)),
                (r = e.substr(t + 7, n - t - 7).match(i ? et : $)),
                (a +=
                  e.substr(o, t - o) +
                  tp(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
                (o = n + 1);
            return a + e.substr(o, e.length - o);
          },
          ty = function (e, t, r, n, i) {
            var o = t - e,
              a = n - r;
            return e7(i, function (t) {
              return r + (((t - e) / o) * a || 0);
            });
          },
          tx = function e(t, r, n, i) {
            var o = isNaN(t + r)
              ? 0
              : function (e) {
                  return (1 - e) * t + e * r;
                };
            if (!o) {
              var a,
                s,
                l,
                u,
                c,
                p = I(t),
                f = {};
              if ((!0 === n && (i = 1) && (n = null), p))
                (t = { p: t }), (r = { p: r });
              else if (G(t) && !G(r)) {
                for (s = 1, l = [], c = (u = t.length) - 2; s < u; s++)
                  l.push(e(t[s - 1], t[s]));
                u--,
                  (o = function (e) {
                    var t = Math.min(c, ~~(e *= u));
                    return l[t](e - t);
                  }),
                  (n = r);
              } else i || (t = ez(G(t) ? [] : {}, t));
              if (!l) {
                for (a in r) t8.call(f, t, a, "get", r[a]);
                o = function (e) {
                  return rh(e, f) || (p ? t.p : t);
                };
              }
            }
            return e7(n, o);
          },
          tw = function (e, t, r) {
            var n,
              i,
              o,
              a = e.labels,
              s = 1e8;
            for (n in a)
              (i = a[n] - t) < 0 == !!r &&
                i &&
                s > (i = Math.abs(i)) &&
                ((o = n), (s = i));
            return o;
          },
          tb = function (e, t, r) {
            var n,
              i,
              o,
              a = e.vars,
              s = a[t],
              l = T,
              u = e._ctx;
            if (s)
              return (
                (n = a[t + "Params"]),
                (i = a.callbackScope || e),
                r && eh.length && eM(),
                u && (T = u),
                (o = n ? s.apply(i, n) : s.call(i)),
                (T = l),
                o
              );
          },
          tT = function (e) {
            return (
              eW(e),
              e.scrollTrigger && e.scrollTrigger.kill(!!b),
              1 > e.progress() && tb(e, "onInterrupt"),
              e
            );
          },
          tS = [],
          tk = function (e) {
            if (e) {
              if (((e = (!e.name && e.default) || e), X() || e.headless)) {
                var t = e.name,
                  r = W(e),
                  n =
                    t && !r && e.init
                      ? function () {
                          this._props = [];
                        }
                      : e,
                  i = {
                    init: eu,
                    render: rh,
                    add: t8,
                    kill: rm,
                    modifier: rg,
                    rawVars: 0,
                  },
                  o = {
                    targetTest: 0,
                    get: 0,
                    getSetter: rc,
                    aliases: {},
                    register: 0,
                  };
                if ((tL(), e !== n)) {
                  if (em[t]) return;
                  eR(n, eR(eF(e, i), o)),
                    ez(n.prototype, ez(i, eF(e, o))),
                    (em[(n.prop = t)] = n),
                    e.targetTest && (ey.push(n), (ed[t] = 1)),
                    (t =
                      ("css" === t
                        ? "CSS"
                        : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
                }
                el(t, n), e.register && e.register(rR, n, ry);
              } else tS.push(e);
            }
          },
          tC = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          tE = function (e, t, r) {
            return (
              ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
                ? t + (r - t) * e * 6
                : e < 0.5
                ? r
                : 3 * e < 2
                ? t + (r - t) * (2 / 3 - e) * 6
                : t) *
                255 +
                0.5) |
              0
            );
          },
          tP = function (e, t, r) {
            var n,
              i,
              o,
              a,
              s,
              l,
              u,
              c,
              p,
              f,
              d = e
                ? U(e)
                  ? [e >> 16, (e >> 8) & 255, 255 & e]
                  : 0
                : tC.black;
            if (!d) {
              if (
                ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), tC[e])
              )
                d = tC[e];
              else if ("#" === e.charAt(0)) {
                if (
                  (e.length < 6 &&
                    (e =
                      "#" +
                      (n = e.charAt(1)) +
                      n +
                      (i = e.charAt(2)) +
                      i +
                      (o = e.charAt(3)) +
                      o +
                      (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
                  9 === e.length)
                )
                  return [
                    (d = parseInt(e.substr(1, 6), 16)) >> 16,
                    (d >> 8) & 255,
                    255 & d,
                    parseInt(e.substr(7), 16) / 255,
                  ];
                d = [
                  (e = parseInt(e.substr(1), 16)) >> 16,
                  (e >> 8) & 255,
                  255 & e,
                ];
              } else if ("hsl" === e.substr(0, 3)) {
                if (((d = f = e.match($)), t)) {
                  if (~e.indexOf("="))
                    return (d = e.match(K)), r && d.length < 4 && (d[3] = 1), d;
                } else
                  (a = (+d[0] % 360) / 360),
                    (s = +d[1] / 100),
                    (i =
                      (l = +d[2] / 100) <= 0.5 ? l * (s + 1) : l + s - l * s),
                    (n = 2 * l - i),
                    d.length > 3 && (d[3] *= 1),
                    (d[0] = tE(a + 1 / 3, n, i)),
                    (d[1] = tE(a, n, i)),
                    (d[2] = tE(a - 1 / 3, n, i));
              } else d = e.match($) || tC.transparent;
              d = d.map(Number);
            }
            return (
              t &&
                !f &&
                ((l =
                  ((u = Math.max(
                    (n = d[0] / 255),
                    (i = d[1] / 255),
                    (o = d[2] / 255)
                  )) +
                    (c = Math.min(n, i, o))) /
                  2),
                u === c
                  ? (a = s = 0)
                  : ((p = u - c),
                    (s = l > 0.5 ? p / (2 - u - c) : p / (u + c)),
                    (a =
                      (u === n
                        ? (i - o) / p + (i < o ? 6 : 0)
                        : u === i
                        ? (o - n) / p + 2
                        : (n - i) / p + 4) * 60)),
                (d[0] = ~~(a + 0.5)),
                (d[1] = ~~(100 * s + 0.5)),
                (d[2] = ~~(100 * l + 0.5))),
              r && d.length < 4 && (d[3] = 1),
              d
            );
          },
          tM = function (e) {
            var t = [],
              r = [],
              n = -1;
            return (
              e.split(tA).forEach(function (e) {
                var i = e.match(J) || [];
                t.push.apply(t, i), r.push((n += i.length + 1));
              }),
              (t.c = r),
              t
            );
          },
          tO = function (e, t, r) {
            var n,
              i,
              o,
              a,
              s = "",
              l = (e + s).match(tA),
              u = t ? "hsla(" : "rgba(",
              c = 0;
            if (!l) return e;
            if (
              ((l = l.map(function (e) {
                return (
                  (e = tP(e, t, 1)) &&
                  u +
                    (t
                      ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                      : e.join(",")) +
                    ")"
                );
              })),
              r && ((o = tM(e)), (n = r.c).join(s) !== o.c.join(s)))
            )
              for (a = (i = e.replace(tA, "1").split(J)).length - 1; c < a; c++)
                s +=
                  i[c] +
                  (~n.indexOf(c)
                    ? l.shift() || u + "0,0,0,0)"
                    : (o.length ? o : l.length ? l : r).shift());
            if (!i)
              for (a = (i = e.split(tA)).length - 1; c < a; c++)
                s += i[c] + l[c];
            return s + i[a];
          },
          tA = (function () {
            var e,
              t =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (e in tC) t += "|" + e + "\\b";
            return RegExp(t + ")", "gi");
          })(),
          tD = /hsl[a]?\(/,
          tR = function (e) {
            var t,
              r = e.join(" ");
            if (((tA.lastIndex = 0), tA.test(r)))
              return (
                (t = tD.test(r)),
                (e[1] = tO(e[1], t)),
                (e[0] = tO(e[0], t, tM(e[1]))),
                !0
              );
          },
          tz =
            ((f = Date.now),
            (d = 500),
            (h = 33),
            (m = g = f()),
            (_ = 1e3 / 240),
            (v = 1e3 / 240),
            (y = []),
            (x = function e(t) {
              var r,
                n,
                i,
                o,
                l = f() - m,
                x = !0 === t;
              if (
                ((l > d || l < 0) && (g += l - h),
                (m += l),
                ((r = (i = m - g) - v) > 0 || x) &&
                  ((o = ++u.frame),
                  (c = i - 1e3 * u.time),
                  (u.time = i /= 1e3),
                  (v += r + (r >= _ ? 4 : _ - r)),
                  (n = 1)),
                x || (a = s(e)),
                n)
              )
                for (p = 0; p < y.length; p++) y[p](i, c, o, t);
            }),
            (u = {
              time: 0,
              frame: 0,
              tick: function () {
                x(!0);
              },
              deltaRatio: function (e) {
                return c / (1e3 / (e || 60));
              },
              wake: function () {
                P &&
                  (!C &&
                    X() &&
                    ((E = (k = C = window).document || {}),
                    (en.gsap = rR),
                    (k.gsapVersions || (k.gsapVersions = [])).push(rR.version),
                    eo(ei || k.GreenSockGlobals || (!k.gsap && k) || {}),
                    tS.forEach(tk)),
                  (l =
                    "undefined" != typeof requestAnimationFrame &&
                    requestAnimationFrame),
                  a && u.sleep(),
                  (s =
                    l ||
                    function (e) {
                      return setTimeout(e, (v - 1e3 * u.time + 1) | 0);
                    }),
                  (A = 1),
                  x(2));
              },
              sleep: function () {
                (l ? cancelAnimationFrame : clearTimeout)(a), (A = 0), (s = eu);
              },
              lagSmoothing: function (e, t) {
                h = Math.min(t || 33, (d = e || 1 / 0));
              },
              fps: function (e) {
                (_ = 1e3 / (e || 240)), (v = 1e3 * u.time + _);
              },
              add: function (e, t, r) {
                var n = t
                  ? function (t, r, i, o) {
                      e(t, r, i, o), u.remove(n);
                    }
                  : e;
                return u.remove(e), y[r ? "unshift" : "push"](n), tL(), n;
              },
              remove: function (e, t) {
                ~(t = y.indexOf(e)) && y.splice(t, 1) && p >= t && p--;
              },
              _listeners: y,
            })),
          tL = function () {
            return !A && tz.wake();
          },
          tF = {},
          tB = /^[\d.\-M][\d.\-,\s]/,
          tj = /["']/g,
          tq = function (e) {
            for (
              var t,
                r,
                n,
                i = {},
                o = e.substr(1, e.length - 3).split(":"),
                a = o[0],
                s = 1,
                l = o.length;
              s < l;
              s++
            )
              (r = o[s]),
                (t = s !== l - 1 ? r.lastIndexOf(",") : r.length),
                (n = r.substr(0, t)),
                (i[a] = isNaN(n) ? n.replace(tj, "").trim() : +n),
                (a = r.substr(t + 1).trim());
            return i;
          },
          tI = function (e) {
            var t = e.indexOf("(") + 1,
              r = e.indexOf(")"),
              n = e.indexOf("(", t);
            return e.substring(t, ~n && n < r ? e.indexOf(")", r + 1) : r);
          },
          tW = function (e) {
            var t = (e + "").split("("),
              r = tF[t[0]];
            return r && t.length > 1 && r.config
              ? r.config.apply(
                  null,
                  ~e.indexOf("{") ? [tq(t[1])] : tI(e).split(",").map(eA)
                )
              : tF._CE && tB.test(e)
              ? tF._CE("", e)
              : r;
          },
          tU = function (e) {
            return function (t) {
              return 1 - e(1 - t);
            };
          },
          tN = function e(t, r) {
            for (var n, i = t._first; i; )
              i instanceof tK
                ? e(i, r)
                : !i.vars.yoyoEase ||
                  (i._yoyo && i._repeat) ||
                  i._yoyo === r ||
                  (i.timeline
                    ? e(i.timeline, r)
                    : ((n = i._ease),
                      (i._ease = i._yEase),
                      (i._yEase = n),
                      (i._yoyo = r))),
                (i = i._next);
          },
          tY = function (e, t) {
            return (e && (W(e) ? e : tF[e] || tW(e))) || t;
          },
          tH = function (e, t, r, n) {
            void 0 === r &&
              (r = function (e) {
                return 1 - t(1 - e);
              }),
              void 0 === n &&
                (n = function (e) {
                  return e < 0.5 ? t(2 * e) / 2 : 1 - t((1 - e) * 2) / 2;
                });
            var i,
              o = { easeIn: t, easeOut: r, easeInOut: n };
            return (
              eS(e, function (e) {
                for (var t in ((tF[e] = en[e] = o),
                (tF[(i = e.toLowerCase())] = r),
                o))
                  tF[
                    i +
                      ("easeIn" === t
                        ? ".in"
                        : "easeOut" === t
                        ? ".out"
                        : ".inOut")
                  ] = tF[e + "." + t] = o[t];
              }),
              o
            );
          },
          tX = function (e) {
            return function (t) {
              return t < 0.5
                ? (1 - e(1 - 2 * t)) / 2
                : 0.5 + e((t - 0.5) * 2) / 2;
            };
          },
          tV = function e(t, r, n) {
            var i = r >= 1 ? r : 1,
              o = (n || (t ? 0.3 : 0.45)) / (r < 1 ? r : 1),
              a = (o / z) * (Math.asin(1 / i) || 0),
              s = function (e) {
                return 1 === e
                  ? 1
                  : i * Math.pow(2, -10 * e) * q((e - a) * o) + 1;
              },
              l =
                "out" === t
                  ? s
                  : "in" === t
                  ? function (e) {
                      return 1 - s(1 - e);
                    }
                  : tX(s);
            return (
              (o = z / o),
              (l.config = function (r, n) {
                return e(t, r, n);
              }),
              l
            );
          },
          tQ = function e(t, r) {
            void 0 === r && (r = 1.70158);
            var n = function (e) {
                return e ? --e * e * ((r + 1) * e + r) + 1 : 0;
              },
              i =
                "out" === t
                  ? n
                  : "in" === t
                  ? function (e) {
                      return 1 - n(1 - e);
                    }
                  : tX(n);
            return (
              (i.config = function (r) {
                return e(t, r);
              }),
              i
            );
          };
        eS("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
          var r = t < 5 ? t + 1 : t;
          tH(
            e + ",Power" + (r - 1),
            t
              ? function (e) {
                  return Math.pow(e, r);
                }
              : function (e) {
                  return e;
                },
            function (e) {
              return 1 - Math.pow(1 - e, r);
            },
            function (e) {
              return e < 0.5
                ? Math.pow(2 * e, r) / 2
                : 1 - Math.pow((1 - e) * 2, r) / 2;
            }
          );
        }),
          (tF.Linear.easeNone = tF.none = tF.Linear.easeIn),
          tH("Elastic", tV("in"), tV("out"), tV()),
          (tZ = 2 * (tJ = 1 / 2.75)),
          (t0 = 2.5 * tJ),
          tH(
            "Bounce",
            function (e) {
              return 1 - t1(1 - e);
            },
            (t1 = function (e) {
              return e < tJ
                ? 7.5625 * e * e
                : e < tZ
                ? 7.5625 * Math.pow(e - 1.5 / 2.75, 2) + 0.75
                : e < t0
                ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                : 7.5625 * Math.pow(e - 2.625 / 2.75, 2) + 0.984375;
            })
          ),
          tH("Expo", function (e) {
            return e ? Math.pow(2, 10 * (e - 1)) : 0;
          }),
          tH("Circ", function (e) {
            return -(B(1 - e * e) - 1);
          }),
          tH("Sine", function (e) {
            return 1 === e ? 1 : -j(e * L) + 1;
          }),
          tH("Back", tQ("in"), tQ("out"), tQ()),
          (tF.SteppedEase =
            tF.steps =
            en.SteppedEase =
              {
                config: function (e, t) {
                  void 0 === e && (e = 1);
                  var r = 1 / e,
                    n = e + (t ? 0 : 1),
                    i = t ? 1 : 0;
                  return function (e) {
                    return (((n * te(0, 0.99999999, e)) | 0) + i) * r;
                  };
                },
              }),
          (R.ease = tF["quad.out"]),
          eS(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (e) {
              return (ex += e + "," + e + "Params,");
            }
          );
        var tG = function (e, t) {
            (this.id = F++),
              (e._gsap = this),
              (this.target = e),
              (this.harness = t),
              (this.get = t ? t.get : eT),
              (this.set = t ? t.getSetter : rc);
          },
          t$ = /*#__PURE__*/ (function () {
            function e(e) {
              (this.vars = e),
                (this._delay = +e.delay || 0),
                (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
                  ((this._rDelay = e.repeatDelay || 0),
                  (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
                (this._ts = 1),
                e3(this, +e.duration, 1, 1),
                (this.data = e.data),
                T && ((this._ctx = T), T.data.push(this)),
                A || tz.wake();
            }
            var t = e.prototype;
            return (
              (t.delay = function (e) {
                return e || 0 === e
                  ? (this.parent &&
                      this.parent.smoothChildTiming &&
                      this.startTime(this._start + e - this._delay),
                    (this._delay = e),
                    this)
                  : this._delay;
              }),
              (t.duration = function (e) {
                return arguments.length
                  ? this.totalDuration(
                      this._repeat > 0
                        ? e + (e + this._rDelay) * this._repeat
                        : e
                    )
                  : this.totalDuration() && this._dur;
              }),
              (t.totalDuration = function (e) {
                return arguments.length
                  ? ((this._dirty = 0),
                    e3(
                      this,
                      this._repeat < 0
                        ? e
                        : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                    ))
                  : this._tDur;
              }),
              (t.totalTime = function (e, t) {
                if ((tL(), !arguments.length)) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                  for (
                    eG(this, e), !r._dp || r.parent || e$(r, this);
                    r && r.parent;

                  )
                    r.parent._time !==
                      r._start +
                        (r._ts >= 0
                          ? r._tTime / r._ts
                          : -((r.totalDuration() - r._tTime) / r._ts)) &&
                      r.totalTime(r._tTime, !0),
                      (r = r.parent);
                  !this.parent &&
                    this._dp.autoRemoveChildren &&
                    ((this._ts > 0 && e < this._tDur) ||
                      (this._ts < 0 && e > 0) ||
                      (!this._tDur && !e)) &&
                    eK(this._dp, this, this._start - this._delay);
                }
                return (
                  (this._tTime === e &&
                    (this._dur || t) &&
                    (!this._initted || 1e-8 !== Math.abs(this._zTime)) &&
                    (e || this._initted || (!this.add && !this._ptLookup))) ||
                    (this._ts || (this._pTime = e), eO(this, e, t)),
                  this
                );
              }),
              (t.time = function (e, t) {
                return arguments.length
                  ? this.totalTime(
                      Math.min(this.totalDuration(), e + eH(this)) %
                        (this._dur + this._rDelay) || (e ? this._dur : 0),
                      t
                    )
                  : this._time;
              }),
              (t.totalProgress = function (e, t) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * e, t)
                  : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.rawTime() > 0
                  ? 1
                  : 0;
              }),
              (t.progress = function (e, t) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (this._yoyo && !(1 & this.iteration()) ? 1 - e : e) +
                        eH(this),
                      t
                    )
                  : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.rawTime() > 0
                  ? 1
                  : 0;
              }),
              (t.iteration = function (e, t) {
                var r = this.duration() + this._rDelay;
                return arguments.length
                  ? this.totalTime(this._time + (e - 1) * r, t)
                  : this._repeat
                  ? eX(this._tTime, r) + 1
                  : 1;
              }),
              (t.timeScale = function (e, t) {
                if (!arguments.length)
                  return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === e) return this;
                var r =
                  this.parent && this._ts
                    ? eV(this.parent._time, this)
                    : this._tTime;
                return (
                  (this._rts = +e || 0),
                  (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
                  this.totalTime(
                    te(-Math.abs(this._delay), this._tDur, r),
                    !1 !== t
                  ),
                  eQ(this),
                  eN(this)
                );
              }),
              (t.paused = function (e) {
                return arguments.length
                  ? (this._ps !== e &&
                      ((this._ps = e),
                      e
                        ? ((this._pTime =
                            this._tTime ||
                            Math.max(-this._delay, this.rawTime())),
                          (this._ts = this._act = 0))
                        : (tL(),
                          (this._ts = this._rts),
                          this.totalTime(
                            this.parent && !this.parent.smoothChildTiming
                              ? this.rawTime()
                              : this._tTime || this._pTime,
                            1 === this.progress() &&
                              1e-8 !== Math.abs(this._zTime) &&
                              (this._tTime -= 1e-8)
                          ))),
                    this)
                  : this._ps;
              }),
              (t.startTime = function (e) {
                if (arguments.length) {
                  this._start = e;
                  var t = this.parent || this._dp;
                  return (
                    t &&
                      (t._sort || !this.parent) &&
                      eK(t, this, e - this._delay),
                    this
                  );
                }
                return this._start;
              }),
              (t.endTime = function (e) {
                return (
                  this._start +
                  (H(e) ? this.totalDuration() : this.duration()) /
                    Math.abs(this._ts || 1)
                );
              }),
              (t.rawTime = function (e) {
                var t = this.parent || this._dp;
                return t
                  ? e &&
                    (!this._ts ||
                      (this._repeat && this._time && 1 > this.totalProgress()))
                    ? this._tTime % (this._dur + this._rDelay)
                    : this._ts
                    ? eV(t.rawTime(e), this)
                    : this._tTime
                  : this._tTime;
              }),
              (t.revert = function (e) {
                void 0 === e && (e = ef);
                var t = b;
                return (
                  (b = e),
                  (this._initted || this._startAt) &&
                    (this.timeline && this.timeline.revert(e),
                    this.totalTime(-0.01, e.suppressEvents)),
                  "nested" !== this.data && !1 !== e.kill && this.kill(),
                  (b = t),
                  this
                );
              }),
              (t.globalTime = function (e) {
                for (var t = this, r = arguments.length ? e : t.rawTime(); t; )
                  (r = t._start + r / (Math.abs(t._ts) || 1)), (t = t._dp);
                return !this.parent && this._sat ? this._sat.globalTime(e) : r;
              }),
              (t.repeat = function (e) {
                return arguments.length
                  ? ((this._repeat = e === 1 / 0 ? -2 : e), e8(this))
                  : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
              }),
              (t.repeatDelay = function (e) {
                if (arguments.length) {
                  var t = this._time;
                  return (this._rDelay = e), e8(this), t ? this.time(t) : this;
                }
                return this._rDelay;
              }),
              (t.yoyo = function (e) {
                return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
              }),
              (t.seek = function (e, t) {
                return this.totalTime(e6(this, e), H(t));
              }),
              (t.restart = function (e, t) {
                return this.play().totalTime(e ? -this._delay : 0, H(t));
              }),
              (t.play = function (e, t) {
                return (
                  null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                );
              }),
              (t.reverse = function (e, t) {
                return (
                  null != e && this.seek(e || this.totalDuration(), t),
                  this.reversed(!0).paused(!1)
                );
              }),
              (t.pause = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!0);
              }),
              (t.resume = function () {
                return this.paused(!1);
              }),
              (t.reversed = function (e) {
                return arguments.length
                  ? (!!e !== this.reversed() &&
                      this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                    this)
                  : this._rts < 0;
              }),
              (t.invalidate = function () {
                return (
                  (this._initted = this._act = 0), (this._zTime = -1e-8), this
                );
              }),
              (t.isActive = function () {
                var e,
                  t = this.parent || this._dp,
                  r = this._start;
                return !!(
                  !t ||
                  (this._ts &&
                    this._initted &&
                    t.isActive() &&
                    (e = t.rawTime(!0)) >= r &&
                    e < this.endTime(!0) - 1e-8)
                );
              }),
              (t.eventCallback = function (e, t, r) {
                var n = this.vars;
                return arguments.length > 1
                  ? (t
                      ? ((n[e] = t),
                        r && (n[e + "Params"] = r),
                        "onUpdate" === e && (this._onUpdate = t))
                      : delete n[e],
                    this)
                  : n[e];
              }),
              (t.then = function (e) {
                var t = this;
                return new Promise(function (r) {
                  var n = W(e) ? e : eD,
                    i = function () {
                      var e = t.then;
                      (t.then = null),
                        W(n) &&
                          (n = n(t)) &&
                          (n.then || n === t) &&
                          (t.then = e),
                        r(n),
                        (t.then = e);
                    };
                  (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
                  (!t._tTime && t._ts < 0)
                    ? i()
                    : (t._prom = i);
                });
              }),
              (t.kill = function () {
                tT(this);
              }),
              e
            );
          })();
        eR(t$.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: !1,
          parent: null,
          _initted: !1,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -1e-8,
          _prom: 0,
          _ps: !1,
          _rts: 1,
        });
        var tK = /*#__PURE__*/ (function (e) {
          function t(t, r) {
            var n;
            return (
              void 0 === t && (t = {}),
              ((n = e.call(this, t) || this).labels = {}),
              (n.smoothChildTiming = !!t.smoothChildTiming),
              (n.autoRemoveChildren = !!t.autoRemoveChildren),
              (n._sort = H(t.sortChildren)),
              S && eK(t.parent || S, i(n), r),
              t.reversed && n.reverse(),
              t.paused && n.paused(!0),
              t.scrollTrigger && eJ(i(n), t.scrollTrigger),
              n
            );
          }
          o(t, e);
          var r = t.prototype;
          return (
            (r.to = function (e, t, r) {
              return e9(0, arguments, this), this;
            }),
            (r.from = function (e, t, r) {
              return e9(1, arguments, this), this;
            }),
            (r.fromTo = function (e, t, r, n) {
              return e9(2, arguments, this), this;
            }),
            (r.set = function (e, t, r) {
              return (
                (t.duration = 0),
                (t.parent = this),
                eB(t).repeatDelay || (t.repeat = 0),
                (t.immediateRender = !!t.immediateRender),
                new ro(e, t, e6(this, r), 1),
                this
              );
            }),
            (r.call = function (e, t, r) {
              return eK(this, ro.delayedCall(0, e, t), r);
            }),
            (r.staggerTo = function (e, t, r, n, i, o, a) {
              return (
                (r.duration = t),
                (r.stagger = r.stagger || n),
                (r.onComplete = o),
                (r.onCompleteParams = a),
                (r.parent = this),
                new ro(e, r, e6(this, i)),
                this
              );
            }),
            (r.staggerFrom = function (e, t, r, n, i, o, a) {
              return (
                (r.runBackwards = 1),
                (eB(r).immediateRender = H(r.immediateRender)),
                this.staggerTo(e, t, r, n, i, o, a)
              );
            }),
            (r.staggerFromTo = function (e, t, r, n, i, o, a, s) {
              return (
                (n.startAt = r),
                (eB(n).immediateRender = H(n.immediateRender)),
                this.staggerTo(e, t, n, i, o, a, s)
              );
            }),
            (r.render = function (e, t, r) {
              var n,
                i,
                o,
                a,
                s,
                l,
                u,
                c,
                p,
                f,
                d,
                h,
                g = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                _ = this._dur,
                v = e <= 0 ? 0 : eC(e),
                y = this._zTime < 0 != e < 0 && (this._initted || !_);
              if (
                (this !== S && v > m && e >= 0 && (v = m),
                v !== this._tTime || r || y)
              ) {
                if (
                  (g !== this._time &&
                    _ &&
                    ((v += this._time - g), (e += this._time - g)),
                  (n = v),
                  (p = this._start),
                  (l = !(c = this._ts)),
                  y && (_ || (g = this._zTime), (e || !t) && (this._zTime = e)),
                  this._repeat)
                ) {
                  if (
                    ((d = this._yoyo),
                    (s = _ + this._rDelay),
                    this._repeat < -1 && e < 0)
                  )
                    return this.totalTime(100 * s + e, t, r);
                  if (
                    ((n = eC(v % s)),
                    v === m
                      ? ((a = this._repeat), (n = _))
                      : ((a = ~~(v / s)) && a === v / s && ((n = _), a--),
                        n > _ && (n = _)),
                    (f = eX(this._tTime, s)),
                    !g &&
                      this._tTime &&
                      f !== a &&
                      this._tTime - f * s - this._dur <= 0 &&
                      (f = a),
                    d && 1 & a && ((n = _ - n), (h = 1)),
                    a !== f && !this._lock)
                  ) {
                    var x = d && 1 & f,
                      w = x === (d && 1 & a);
                    if (
                      (a < f && (x = !x),
                      (g = x ? 0 : v % _ ? _ : v),
                      (this._lock = 1),
                      (this.render(g || (h ? 0 : eC(a * s)), t, !_)._lock = 0),
                      (this._tTime = v),
                      !t && this.parent && tb(this, "onRepeat"),
                      this.vars.repeatRefresh &&
                        !h &&
                        (this.invalidate()._lock = 1),
                      (g && g !== this._time) ||
                        !this._ts !== l ||
                        (this.vars.onRepeat && !this.parent && !this._act) ||
                        ((_ = this._dur),
                        (m = this._tDur),
                        w &&
                          ((this._lock = 2),
                          (g = x ? _ : -1e-4),
                          this.render(g, !0),
                          this.vars.repeatRefresh && !h && this.invalidate()),
                        (this._lock = 0),
                        !this._ts && !l))
                    )
                      return this;
                    tN(this, h);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    (u = e5(this, eC(g), eC(n))) &&
                    (v -= n - (n = u._start)),
                  (this._tTime = v),
                  (this._time = n),
                  (this._act = !c),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = e),
                    (g = 0)),
                  !g &&
                    n &&
                    !t &&
                    !a &&
                    (tb(this, "onStart"), this._tTime !== v))
                )
                  return this;
                if (n >= g && e >= 0)
                  for (i = this._first; i; ) {
                    if (
                      ((o = i._next),
                      (i._act || n >= i._start) && i._ts && u !== i)
                    ) {
                      if (i.parent !== this) return this.render(e, t, r);
                      if (
                        (i.render(
                          i._ts > 0
                            ? (n - i._start) * i._ts
                            : (i._dirty ? i.totalDuration() : i._tDur) +
                                (n - i._start) * i._ts,
                          t,
                          r
                        ),
                        n !== this._time || (!this._ts && !l))
                      ) {
                        (u = 0), o && (v += this._zTime = -1e-8);
                        break;
                      }
                    }
                    i = o;
                  }
                else {
                  i = this._last;
                  for (var T = e < 0 ? e : n; i; ) {
                    if (
                      ((o = i._prev),
                      (i._act || T <= i._end) && i._ts && u !== i)
                    ) {
                      if (i.parent !== this) return this.render(e, t, r);
                      if (
                        (i.render(
                          i._ts > 0
                            ? (T - i._start) * i._ts
                            : (i._dirty ? i.totalDuration() : i._tDur) +
                                (T - i._start) * i._ts,
                          t,
                          r || (b && (i._initted || i._startAt))
                        ),
                        n !== this._time || (!this._ts && !l))
                      ) {
                        (u = 0), o && (v += this._zTime = T ? -1e-8 : 1e-8);
                        break;
                      }
                    }
                    i = o;
                  }
                }
                if (
                  u &&
                  !t &&
                  (this.pause(),
                  (u.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1),
                  this._ts)
                )
                  return (this._start = p), eQ(this), this.render(e, t, r);
                this._onUpdate && !t && tb(this, "onUpdate", !0),
                  ((v === m && this._tTime >= this.totalDuration()) ||
                    (!v && g)) &&
                    (p === this._start || Math.abs(c) !== Math.abs(this._ts)) &&
                    !this._lock &&
                    ((e || !_) &&
                      ((v === m && this._ts > 0) || (!v && this._ts < 0)) &&
                      eW(this, 1),
                    t ||
                      (e < 0 && !g) ||
                      (!v && !g && m) ||
                      (tb(
                        this,
                        v === m && e >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(v < m && this.timeScale() > 0) &&
                        this._prom()));
              }
              return this;
            }),
            (r.add = function (e, t) {
              var r = this;
              if ((U(t) || (t = e6(this, t, e)), !(e instanceof t$))) {
                if (G(e))
                  return (
                    e.forEach(function (e) {
                      return r.add(e, t);
                    }),
                    this
                  );
                if (I(e)) return this.addLabel(e, t);
                if (!W(e)) return this;
                e = ro.delayedCall(0, e);
              }
              return this !== e ? eK(this, e, t) : this;
            }),
            (r.getChildren = function (e, t, r, n) {
              void 0 === e && (e = !0),
                void 0 === t && (t = !0),
                void 0 === r && (r = !0),
                void 0 === n && (n = -1e8);
              for (var i = [], o = this._first; o; )
                o._start >= n &&
                  (o instanceof ro
                    ? t && i.push(o)
                    : (r && i.push(o),
                      e && i.push.apply(i, o.getChildren(!0, t, r)))),
                  (o = o._next);
              return i;
            }),
            (r.getById = function (e) {
              for (var t = this.getChildren(1, 1, 1), r = t.length; r--; )
                if (t[r].vars.id === e) return t[r];
            }),
            (r.remove = function (e) {
              return I(e)
                ? this.removeLabel(e)
                : W(e)
                ? this.killTweensOf(e)
                : (eI(this, e),
                  e === this._recent && (this._recent = this._last),
                  eU(this));
            }),
            (r.totalTime = function (t, r) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = eC(
                      tz.time -
                        (this._ts > 0
                          ? t / this._ts
                          : -((this.totalDuration() - t) / this._ts))
                    )),
                  e.prototype.totalTime.call(this, t, r),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (r.addLabel = function (e, t) {
              return (this.labels[e] = e6(this, t)), this;
            }),
            (r.removeLabel = function (e) {
              return delete this.labels[e], this;
            }),
            (r.addPause = function (e, t, r) {
              var n = ro.delayedCall(0, t || eu, r);
              return (
                (n.data = "isPause"),
                (this._hasPause = 1),
                eK(this, n, e6(this, e))
              );
            }),
            (r.removePause = function (e) {
              var t = this._first;
              for (e = e6(this, e); t; )
                t._start === e && "isPause" === t.data && eW(t), (t = t._next);
            }),
            (r.killTweensOf = function (e, t, r) {
              for (var n = this.getTweensOf(e, r), i = n.length; i--; )
                t2 !== n[i] && n[i].kill(e, t);
              return this;
            }),
            (r.getTweensOf = function (e, t) {
              for (var r, n = [], i = to(e), o = this._first, a = U(t); o; )
                o instanceof ro
                  ? eP(o._targets, i) &&
                    (a
                      ? (!t2 || (o._initted && o._ts)) &&
                        o.globalTime(0) <= t &&
                        o.globalTime(o.totalDuration()) > t
                      : !t || o.isActive()) &&
                    n.push(o)
                  : (r = o.getTweensOf(i, t)).length && n.push.apply(n, r),
                  (o = o._next);
              return n;
            }),
            (r.tweenTo = function (e, t) {
              t = t || {};
              var r,
                n = this,
                i = e6(n, e),
                o = t,
                a = o.startAt,
                s = o.onStart,
                l = o.onStartParams,
                u = o.immediateRender,
                c = ro.to(
                  n,
                  eR(
                    {
                      ease: t.ease || "none",
                      lazy: !1,
                      immediateRender: !1,
                      time: i,
                      overwrite: "auto",
                      duration:
                        t.duration ||
                        Math.abs(
                          (i - (a && "time" in a ? a.time : n._time)) /
                            n.timeScale()
                        ) ||
                        1e-8,
                      onStart: function () {
                        if ((n.pause(), !r)) {
                          var e =
                            t.duration ||
                            Math.abs(
                              (i - (a && "time" in a ? a.time : n._time)) /
                                n.timeScale()
                            );
                          c._dur !== e &&
                            e3(c, e, 0, 1).render(c._time, !0, !0),
                            (r = 1);
                        }
                        s && s.apply(c, l || []);
                      },
                    },
                    t
                  )
                );
              return u ? c.render(0) : c;
            }),
            (r.tweenFromTo = function (e, t, r) {
              return this.tweenTo(t, eR({ startAt: { time: e6(this, e) } }, r));
            }),
            (r.recent = function () {
              return this._recent;
            }),
            (r.nextLabel = function (e) {
              return void 0 === e && (e = this._time), tw(this, e6(this, e));
            }),
            (r.previousLabel = function (e) {
              return void 0 === e && (e = this._time), tw(this, e6(this, e), 1);
            }),
            (r.currentLabel = function (e) {
              return arguments.length
                ? this.seek(e, !0)
                : this.previousLabel(this._time + 1e-8);
            }),
            (r.shiftChildren = function (e, t, r) {
              void 0 === r && (r = 0);
              for (var n, i = this._first, o = this.labels; i; )
                i._start >= r && ((i._start += e), (i._end += e)),
                  (i = i._next);
              if (t) for (n in o) o[n] >= r && (o[n] += e);
              return eU(this);
            }),
            (r.invalidate = function (t) {
              var r = this._first;
              for (this._lock = 0; r; ) r.invalidate(t), (r = r._next);
              return e.prototype.invalidate.call(this, t);
            }),
            (r.clear = function (e) {
              void 0 === e && (e = !0);
              for (var t, r = this._first; r; )
                (t = r._next), this.remove(r), (r = t);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                e && (this.labels = {}),
                eU(this)
              );
            }),
            (r.totalDuration = function (e) {
              var t,
                r,
                n,
                i = 0,
                o = this._last,
                a = 1e8;
              if (arguments.length)
                return this.timeScale(
                  (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                    (this.reversed() ? -e : e)
                );
              if (this._dirty) {
                for (n = this.parent; o; )
                  (t = o._prev),
                    o._dirty && o.totalDuration(),
                    (r = o._start) > a && this._sort && o._ts && !this._lock
                      ? ((this._lock = 1),
                        (eK(this, o, r - o._delay, 1)._lock = 0))
                      : (a = r),
                    r < 0 &&
                      o._ts &&
                      ((i -= r),
                      ((!n && !this._dp) || (n && n.smoothChildTiming)) &&
                        ((this._start += r / this._ts),
                        (this._time -= r),
                        (this._tTime -= r)),
                      this.shiftChildren(-r, !1, -1 / 0),
                      (a = 0)),
                    o._end > i && o._ts && (i = o._end),
                    (o = t);
                e3(this, this === S && this._time > i ? this._time : i, 1, 1),
                  (this._dirty = 0);
              }
              return this._tDur;
            }),
            (t.updateRoot = function (e) {
              if (
                (S._ts && (eO(S, eV(e, S)), (M = tz.frame)), tz.frame >= ev)
              ) {
                ev += D.autoSleep || 120;
                var t = S._first;
                if ((!t || !t._ts) && D.autoSleep && tz._listeners.length < 2) {
                  for (; t && !t._ts; ) t = t._next;
                  t || tz.sleep();
                }
              }
            }),
            t
          );
        })(t$);
        eR(tK.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var tJ,
          tZ,
          t0,
          t1,
          t2,
          t5,
          t3 = function (e, t, r, n, i, o, a) {
            var s,
              l,
              u,
              c,
              p,
              f,
              d,
              h,
              g = new ry(this._pt, e, t, 0, 1, rd, null, i),
              m = 0,
              _ = 0;
            for (
              g.b = r,
                g.e = n,
                r += "",
                n += "",
                (d = ~n.indexOf("random(")) && (n = tv(n)),
                o && (o((h = [r, n]), e, t), (r = h[0]), (n = h[1])),
                l = r.match(Z) || [];
              (s = Z.exec(n));

            )
              (c = s[0]),
                (p = n.substring(m, s.index)),
                u ? (u = (u + 1) % 5) : "rgba(" === p.substr(-5) && (u = 1),
                c !== l[_++] &&
                  ((f = parseFloat(l[_ - 1]) || 0),
                  (g._pt = {
                    _next: g._pt,
                    p: p || 1 === _ ? p : ",",
                    s: f,
                    c: "=" === c.charAt(1) ? eE(f, c) - f : parseFloat(c) - f,
                    m: u && u < 4 ? Math.round : 0,
                  }),
                  (m = Z.lastIndex));
            return (
              (g.c = m < n.length ? n.substring(m, n.length) : ""),
              (g.fp = a),
              (ee.test(n) || d) && (g.e = 0),
              (this._pt = g),
              g
            );
          },
          t8 = function (e, t, r, n, i, o, a, s, l, u) {
            W(n) && (n = n(i || 0, e, o));
            var c,
              p = e[t],
              f =
                "get" !== r
                  ? r
                  : W(p)
                  ? l
                    ? e[
                        t.indexOf("set") || !W(e["get" + t.substr(3)])
                          ? t
                          : "get" + t.substr(3)
                      ](l)
                    : e[t]()
                  : p,
              d = W(p) ? (l ? rl : rs) : ra;
            if (
              (I(n) &&
                (~n.indexOf("random(") && (n = tv(n)),
                "=" === n.charAt(1) &&
                  ((c = eE(f, n) + (tt(f) || 0)) || 0 === c) &&
                  (n = c)),
              !u || f !== n || t5)
            )
              return isNaN(f * n) || "" === n
                ? (p || t in e || ea(t, n),
                  t3.call(this, e, t, f, n, d, s || D.stringFilter, l))
                : ((c = new ry(
                    this._pt,
                    e,
                    t,
                    +f || 0,
                    n - (f || 0),
                    "boolean" == typeof p ? rf : rp,
                    0,
                    d
                  )),
                  l && (c.fp = l),
                  a && c.modifier(a, this, e),
                  (this._pt = c));
          },
          t4 = function (e, t, r, n, i) {
            if (
              (W(e) && (e = rr(e, i, t, r, n)),
              !Y(e) || (e.style && e.nodeType) || G(e) || Q(e))
            )
              return I(e) ? rr(e, i, t, r, n) : e;
            var o,
              a = {};
            for (o in e) a[o] = rr(e[o], i, t, r, n);
            return a;
          },
          t6 = function (e, t, r, n, i, o) {
            var a, s, l, u;
            if (
              em[e] &&
              !1 !==
                (a = new em[e]()).init(
                  i,
                  a.rawVars ? t[e] : t4(t[e], n, i, o, r),
                  r,
                  n,
                  o
                ) &&
              ((r._pt = s =
                new ry(r._pt, i, e, 0, 1, a.render, a, 0, a.priority)),
              r !== O)
            )
              for (
                l = r._ptLookup[r._targets.indexOf(i)], u = a._props.length;
                u--;

              )
                l[a._props[u]] = s;
            return a;
          },
          t9 = function e(t, r, n) {
            var i,
              o,
              a,
              s,
              l,
              u,
              c,
              p,
              f,
              d,
              h,
              g,
              m,
              _ = t.vars,
              v = _.ease,
              y = _.startAt,
              x = _.immediateRender,
              T = _.lazy,
              k = _.onUpdate,
              C = _.runBackwards,
              E = _.yoyoEase,
              P = _.keyframes,
              M = _.autoRevert,
              O = t._dur,
              A = t._startAt,
              D = t._targets,
              z = t.parent,
              L = z && "nested" === z.data ? z.vars.targets : D,
              F = "auto" === t._overwrite && !w,
              B = t.timeline;
            if (
              (!B || (P && v) || (v = "none"),
              (t._ease = tY(v, R.ease)),
              (t._yEase = E ? tU(tY(!0 === E ? v : E, R.ease)) : 0),
              E &&
                t._yoyo &&
                !t._repeat &&
                ((E = t._yEase), (t._yEase = t._ease), (t._ease = E)),
              (t._from = !B && !!_.runBackwards),
              !B || (P && !_.stagger))
            ) {
              if (
                ((g = (p = D[0] ? eb(D[0]).harness : 0) && _[p.prop]),
                (i = eF(_, ed)),
                A &&
                  (A._zTime < 0 && A.progress(1),
                  r < 0 && C && x && !M
                    ? A.render(-1, !0)
                    : A.revert(C && O ? ep : ec),
                  (A._lazy = 0)),
                y)
              ) {
                if (
                  (eW(
                    (t._startAt = ro.set(
                      D,
                      eR(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: z,
                          immediateRender: !0,
                          lazy: !A && H(T),
                          startAt: null,
                          delay: 0,
                          onUpdate:
                            k &&
                            function () {
                              return tb(t, "onUpdate");
                            },
                          stagger: 0,
                        },
                        y
                      )
                    ))
                  ),
                  (t._startAt._dp = 0),
                  (t._startAt._sat = t),
                  r < 0 && (b || (!x && !M)) && t._startAt.revert(ep),
                  x && O && r <= 0 && n <= 0)
                ) {
                  r && (t._zTime = r);
                  return;
                }
              } else if (C && O && !A) {
                if (
                  (r && (x = !1),
                  (a = eR(
                    {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: x && !A && H(T),
                      immediateRender: x,
                      stagger: 0,
                      parent: z,
                    },
                    i
                  )),
                  g && (a[p.prop] = g),
                  eW((t._startAt = ro.set(D, a))),
                  (t._startAt._dp = 0),
                  (t._startAt._sat = t),
                  r < 0 &&
                    (b ? t._startAt.revert(ep) : t._startAt.render(-1, !0)),
                  (t._zTime = r),
                  x)
                ) {
                  if (!r) return;
                } else e(t._startAt, 1e-8, 1e-8);
              }
              for (
                o = 0, t._pt = t._ptCache = 0, T = (O && H(T)) || (T && !O);
                o < D.length;
                o++
              ) {
                if (
                  ((c = (l = D[o])._gsap || ew(D)[o]._gsap),
                  (t._ptLookup[o] = d = {}),
                  eg[c.id] && eh.length && eM(),
                  (h = L === D ? o : L.indexOf(l)),
                  p &&
                    !1 !== (f = new p()).init(l, g || i, t, h, L) &&
                    ((t._pt = s =
                      new ry(
                        t._pt,
                        l,
                        f.name,
                        0,
                        1,
                        f.render,
                        f,
                        0,
                        f.priority
                      )),
                    f._props.forEach(function (e) {
                      d[e] = s;
                    }),
                    f.priority && (u = 1)),
                  !p || g)
                )
                  for (a in i)
                    em[a] && (f = t6(a, i, t, h, l, L))
                      ? f.priority && (u = 1)
                      : (d[a] = s =
                          t8.call(
                            t,
                            l,
                            a,
                            "get",
                            i[a],
                            h,
                            L,
                            0,
                            _.stringFilter
                          ));
                t._op && t._op[o] && t.kill(l, t._op[o]),
                  F &&
                    t._pt &&
                    ((t2 = t),
                    S.killTweensOf(l, d, t.globalTime(r)),
                    (m = !t.parent),
                    (t2 = 0)),
                  t._pt && T && (eg[c.id] = 1);
              }
              u && rv(t), t._onInit && t._onInit(t);
            }
            (t._onUpdate = k),
              (t._initted = (!t._op || t._pt) && !m),
              P && r <= 0 && B.render(1e8, !0, !0);
          },
          t7 = function (e, t, r, n, i, o, a, s) {
            var l,
              u,
              c,
              p,
              f = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
            if (!f)
              for (
                f = e._ptCache[t] = [], c = e._ptLookup, p = e._targets.length;
                p--;

              ) {
                if ((l = c[p][t]) && l.d && l.d._pt)
                  for (l = l.d._pt; l && l.p !== t && l.fp !== t; ) l = l._next;
                if (!l)
                  return (
                    (t5 = 1),
                    (e.vars[t] = "+=0"),
                    t9(e, a),
                    (t5 = 0),
                    s ? es(t + " not eligible for reset") : 1
                  );
                f.push(l);
              }
            for (p = f.length; p--; )
              ((l = (u = f[p])._pt || u).s =
                (n || 0 === n) && !i ? n : l.s + (n || 0) + o * l.c),
                (l.c = r - l.s),
                u.e && (u.e = ek(r) + tt(u.e)),
                u.b && (u.b = l.s + tt(u.b));
          },
          re = function (e, t) {
            var r,
              n,
              i,
              o,
              a = e[0] ? eb(e[0]).harness : 0,
              s = a && a.aliases;
            if (!s) return t;
            for (n in ((r = ez({}, t)), s))
              if (n in r)
                for (i = (o = s[n].split(",")).length; i--; ) r[o[i]] = r[n];
            return r;
          },
          rt = function (e, t, r, n) {
            var i,
              o,
              a = t.ease || n || "power1.inOut";
            if (G(t))
              (o = r[e] || (r[e] = [])),
                t.forEach(function (e, r) {
                  return o.push({ t: (r / (t.length - 1)) * 100, v: e, e: a });
                });
            else
              for (i in t)
                (o = r[i] || (r[i] = [])),
                  "ease" === i || o.push({ t: parseFloat(e), v: t[i], e: a });
          },
          rr = function (e, t, r, n, i) {
            return W(e)
              ? e.call(t, r, n, i)
              : I(e) && ~e.indexOf("random(")
              ? tv(e)
              : e;
          },
          rn = ex + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
          ri = {};
        eS(
          rn + ",id,stagger,delay,duration,paused,scrollTrigger",
          function (e) {
            return (ri[e] = 1);
          }
        );
        var ro = /*#__PURE__*/ (function (e) {
          function t(t, r, n, o) {
            "number" == typeof r && ((n.duration = r), (r = n), (n = null));
            var a,
              s,
              l,
              u,
              c,
              p,
              f,
              d,
              h,
              g = (a = e.call(this, o ? r : eB(r)) || this).vars,
              m = g.duration,
              _ = g.delay,
              v = g.immediateRender,
              y = g.stagger,
              x = g.overwrite,
              b = g.keyframes,
              T = g.defaults,
              k = g.scrollTrigger,
              C = g.yoyoEase,
              E = r.parent || S,
              P = (G(t) || Q(t) ? U(t[0]) : "length" in r) ? [t] : to(t);
            if (
              ((a._targets = P.length
                ? ew(P)
                : es(
                    "GSAP target " + t + " not found. https://gsap.com",
                    !D.nullTargetWarn
                  ) || []),
              (a._ptLookup = []),
              (a._overwrite = x),
              b || y || V(m) || V(_))
            ) {
              if (
                ((r = a.vars),
                (s = a.timeline =
                  new tK({
                    data: "nested",
                    defaults: T || {},
                    targets: E && "nested" === E.data ? E.vars.targets : P,
                  })).kill(),
                (s.parent = s._dp = i(a)),
                (s._start = 0),
                y || V(m) || V(_))
              ) {
                if (((c = P.length), (d = y && tl(y)), Y(y)))
                  for (p in y) ~rn.indexOf(p) && (h || (h = {}), (h[p] = y[p]));
                for (l = 0; l < c; l++)
                  ((u = eF(r, ri)).stagger = 0),
                    C && (u.yoyoEase = C),
                    h && ez(u, h),
                    (f = P[l]),
                    (u.duration = +rr(m, i(a), l, f, P)),
                    (u.delay = (+rr(_, i(a), l, f, P) || 0) - a._delay),
                    !y &&
                      1 === c &&
                      u.delay &&
                      ((a._delay = _ = u.delay),
                      (a._start += _),
                      (u.delay = 0)),
                    s.to(f, u, d ? d(l, f, P) : 0),
                    (s._ease = tF.none);
                s.duration() ? (m = _ = 0) : (a.timeline = 0);
              } else if (b) {
                eB(eR(s.vars.defaults, { ease: "none" })),
                  (s._ease = tY(b.ease || r.ease || "none"));
                var M,
                  O,
                  A,
                  R = 0;
                if (G(b))
                  b.forEach(function (e) {
                    return s.to(P, e, ">");
                  }),
                    s.duration();
                else {
                  for (p in ((u = {}), b))
                    "ease" === p ||
                      "easeEach" === p ||
                      rt(p, b[p], u, b.easeEach);
                  for (p in u)
                    for (
                      l = 0,
                        M = u[p].sort(function (e, t) {
                          return e.t - t.t;
                        }),
                        R = 0;
                      l < M.length;
                      l++
                    )
                      ((A = {
                        ease: (O = M[l]).e,
                        duration: ((O.t - (l ? M[l - 1].t : 0)) / 100) * m,
                      })[p] = O.v),
                        s.to(P, A, R),
                        (R += A.duration);
                  s.duration() < m && s.to({}, { duration: m - s.duration() });
                }
              }
              m || a.duration((m = s.duration()));
            } else a.timeline = 0;
            return (
              !0 !== x || w || ((t2 = i(a)), S.killTweensOf(P), (t2 = 0)),
              eK(E, i(a), n),
              r.reversed && a.reverse(),
              r.paused && a.paused(!0),
              (v ||
                (!m &&
                  !b &&
                  a._start === eC(E._time) &&
                  H(v) &&
                  (function e(t) {
                    return !t || (t._ts && e(t.parent));
                  })(i(a)) &&
                  "nested" !== E.data)) &&
                ((a._tTime = -1e-8), a.render(Math.max(0, -_) || 0)),
              k && eJ(i(a), k),
              a
            );
          }
          o(t, e);
          var r = t.prototype;
          return (
            (r.render = function (e, t, r) {
              var n,
                i,
                o,
                a,
                s,
                l,
                u,
                c,
                p,
                f = this._time,
                d = this._tDur,
                h = this._dur,
                g = e < 0,
                m = e > d - 1e-8 && !g ? d : e < 1e-8 ? 0 : e;
              if (h) {
                if (
                  m !== this._tTime ||
                  !e ||
                  r ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 !== g)
                ) {
                  if (((n = m), (c = this.timeline), this._repeat)) {
                    if (((a = h + this._rDelay), this._repeat < -1 && g))
                      return this.totalTime(100 * a + e, t, r);
                    if (
                      ((n = eC(m % a)),
                      m === d
                        ? ((o = this._repeat), (n = h))
                        : ((o = ~~(m / a)) && o === eC(m / a) && ((n = h), o--),
                          n > h && (n = h)),
                      (l = this._yoyo && 1 & o) &&
                        ((p = this._yEase), (n = h - n)),
                      (s = eX(this._tTime, a)),
                      n === f && !r && this._initted && o === s)
                    )
                      return (this._tTime = m), this;
                    o !== s &&
                      (c && this._yEase && tN(c, l),
                      this.vars.repeatRefresh &&
                        !l &&
                        !this._lock &&
                        this._time !== a &&
                        this._initted &&
                        ((this._lock = r = 1),
                        (this.render(eC(a * o), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (eZ(this, g ? e : n, r, t, m))
                      return (this._tTime = 0), this;
                    if (
                      f !== this._time &&
                      !(r && this.vars.repeatRefresh && o !== s)
                    )
                      return this;
                    if (h !== this._dur) return this.render(e, t, r);
                  }
                  if (
                    ((this._tTime = m),
                    (this._time = n),
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = u = (p || this._ease)(n / h)),
                    this._from && (this.ratio = u = 1 - u),
                    n &&
                      !f &&
                      !t &&
                      !o &&
                      (tb(this, "onStart"), this._tTime !== m))
                  )
                    return this;
                  for (i = this._pt; i; ) i.r(u, i.d), (i = i._next);
                  (c &&
                    c.render(
                      e < 0 ? e : c._dur * c._ease(n / this._dur),
                      t,
                      r
                    )) ||
                    (this._startAt && (this._zTime = e)),
                    this._onUpdate &&
                      !t &&
                      (g && eY(this, e, t, r), tb(this, "onUpdate")),
                    this._repeat &&
                      o !== s &&
                      this.vars.onRepeat &&
                      !t &&
                      this.parent &&
                      tb(this, "onRepeat"),
                    (m === this._tDur || !m) &&
                      this._tTime === m &&
                      (g && !this._onUpdate && eY(this, e, !0, !0),
                      (e || !h) &&
                        ((m === this._tDur && this._ts > 0) ||
                          (!m && this._ts < 0)) &&
                        eW(this, 1),
                      !t &&
                        !(g && !f) &&
                        (m || f || l) &&
                        (tb(
                          this,
                          m === d ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(m < d && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else e2(this, e, t, r);
              return this;
            }),
            (r.targets = function () {
              return this._targets;
            }),
            (r.invalidate = function (t) {
              return (
                (t && this.vars.runBackwards) || (this._startAt = 0),
                (this._pt =
                  this._op =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(t),
                e.prototype.invalidate.call(this, t)
              );
            }),
            (r.resetTo = function (e, t, r, n, i) {
              A || tz.wake(), this._ts || this.play();
              var o = Math.min(
                this._dur,
                (this._dp._time - this._start) * this._ts
              );
              return (this._initted || t9(this, o),
              t7(this, e, t, r, n, this._ease(o / this._dur), o, i))
                ? this.resetTo(e, t, r, n, 1)
                : (eG(this, 0),
                  this.parent ||
                    eq(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0));
            }),
            (r.kill = function (e, t) {
              if ((void 0 === t && (t = "all"), !e && (!t || "all" === t)))
                return (
                  (this._lazy = this._pt = 0), this.parent ? tT(this) : this
                );
              if (this.timeline) {
                var r = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    e,
                    t,
                    t2 && !0 !== t2.vars.overwrite
                  )._first || tT(this),
                  this.parent &&
                    r !== this.timeline.totalDuration() &&
                    e3(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                  this
                );
              }
              var n,
                i,
                o,
                a,
                s,
                l,
                u,
                c = this._targets,
                p = e ? to(e) : c,
                f = this._ptLookup,
                d = this._pt;
              if ((!t || "all" === t) && ej(c, p))
                return "all" === t && (this._pt = 0), tT(this);
              for (
                n = this._op = this._op || [],
                  "all" !== t &&
                    (I(t) &&
                      ((s = {}),
                      eS(t, function (e) {
                        return (s[e] = 1);
                      }),
                      (t = s)),
                    (t = re(c, t))),
                  u = c.length;
                u--;

              )
                if (~p.indexOf(c[u]))
                  for (s in ((i = f[u]),
                  "all" === t
                    ? ((n[u] = t), (a = i), (o = {}))
                    : ((o = n[u] = n[u] || {}), (a = t)),
                  a))
                    (l = i && i[s]) &&
                      (("kill" in l.d && !0 !== l.d.kill(s)) ||
                        eI(this, l, "_pt"),
                      delete i[s]),
                      "all" !== o && (o[s] = 1);
              return this._initted && !this._pt && d && tT(this), this;
            }),
            (t.to = function (e, r) {
              return new t(e, r, arguments[2]);
            }),
            (t.from = function (e, t) {
              return e9(1, arguments);
            }),
            (t.delayedCall = function (e, r, n, i) {
              return new t(r, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: e,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i,
              });
            }),
            (t.fromTo = function (e, t, r) {
              return e9(2, arguments);
            }),
            (t.set = function (e, r) {
              return (
                (r.duration = 0), r.repeatDelay || (r.repeat = 0), new t(e, r)
              );
            }),
            (t.killTweensOf = function (e, t, r) {
              return S.killTweensOf(e, t, r);
            }),
            t
          );
        })(t$);
        eR(ro.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0,
        }),
          eS("staggerTo,staggerFrom,staggerFromTo", function (e) {
            ro[e] = function () {
              var t = new tK(),
                r = tn.call(arguments, 0);
              return (
                r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r)
              );
            };
          });
        var ra = function (e, t, r) {
            return (e[t] = r);
          },
          rs = function (e, t, r) {
            return e[t](r);
          },
          rl = function (e, t, r, n) {
            return e[t](n.fp, r);
          },
          ru = function (e, t, r) {
            return e.setAttribute(t, r);
          },
          rc = function (e, t) {
            return W(e[t]) ? rs : N(e[t]) && e.setAttribute ? ru : ra;
          },
          rp = function (e, t) {
            return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
          },
          rf = function (e, t) {
            return t.set(t.t, t.p, !!(t.s + t.c * e), t);
          },
          rd = function (e, t) {
            var r = t._pt,
              n = "";
            if (!e && t.b) n = t.b;
            else if (1 === e && t.e) n = t.e;
            else {
              for (; r; )
                (n =
                  r.p +
                  (r.m
                    ? r.m(r.s + r.c * e)
                    : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
                  n),
                  (r = r._next);
              n += t.c;
            }
            t.set(t.t, t.p, n, t);
          },
          rh = function (e, t) {
            for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
          },
          rg = function (e, t, r, n) {
            for (var i, o = this._pt; o; )
              (i = o._next), o.p === n && o.modifier(e, t, r), (o = i);
          },
          rm = function (e) {
            for (var t, r, n = this._pt; n; )
              (r = n._next),
                (n.p !== e || n.op) && n.op !== e
                  ? n.dep || (t = 1)
                  : eI(this, n, "_pt"),
                (n = r);
            return !t;
          },
          r_ = function (e, t, r, n) {
            n.mSet(e, t, n.m.call(n.tween, r, n.mt), n);
          },
          rv = function (e) {
            for (var t, r, n, i, o = e._pt; o; ) {
              for (t = o._next, r = n; r && r.pr > o.pr; ) r = r._next;
              (o._prev = r ? r._prev : i) ? (o._prev._next = o) : (n = o),
                (o._next = r) ? (r._prev = o) : (i = o),
                (o = t);
            }
            e._pt = n;
          },
          ry = /*#__PURE__*/ (function () {
            function e(e, t, r, n, i, o, a, s, l) {
              (this.t = t),
                (this.s = n),
                (this.c = i),
                (this.p = r),
                (this.r = o || rp),
                (this.d = a || this),
                (this.set = s || ra),
                (this.pr = l || 0),
                (this._next = e),
                e && (e._prev = this);
            }
            return (
              (e.prototype.modifier = function (e, t, r) {
                (this.mSet = this.mSet || this.set),
                  (this.set = r_),
                  (this.m = e),
                  (this.mt = r),
                  (this.tween = t);
              }),
              e
            );
          })();
        eS(
          ex +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
          function (e) {
            return (ed[e] = 1);
          }
        ),
          (en.TweenMax = en.TweenLite = ro),
          (en.TimelineLite = en.TimelineMax = tK),
          (S = new tK({
            sortChildren: !1,
            defaults: R,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
          })),
          (D.stringFilter = tR);
        var rx = [],
          rw = {},
          rb = [],
          rT = 0,
          rS = 0,
          rk = function (e) {
            return (rw[e] || rb).map(function (e) {
              return e();
            });
          },
          rC = function () {
            var e = Date.now(),
              t = [];
            e - rT > 2 &&
              (rk("matchMediaInit"),
              rx.forEach(function (e) {
                var r,
                  n,
                  i,
                  o,
                  a = e.queries,
                  s = e.conditions;
                for (n in a)
                  (r = k.matchMedia(a[n]).matches) && (i = 1),
                    r !== s[n] && ((s[n] = r), (o = 1));
                o && (e.revert(), i && t.push(e));
              }),
              rk("matchMediaRevert"),
              t.forEach(function (e) {
                return e.onMatch(e, function (t) {
                  return e.add(null, t);
                });
              }),
              (rT = e),
              rk("matchMedia"));
          },
          rE = /*#__PURE__*/ (function () {
            function e(e, t) {
              (this.selector = t && ta(t)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                (this.id = rS++),
                e && this.add(e);
            }
            var t = e.prototype;
            return (
              (t.add = function (e, t, r) {
                W(e) && ((r = t), (t = e), (e = W));
                var n = this,
                  i = function () {
                    var e,
                      i = T,
                      o = n.selector;
                    return (
                      i && i !== n && i.data.push(n),
                      r && (n.selector = ta(r)),
                      (T = n),
                      (e = t.apply(n, arguments)),
                      W(e) && n._r.push(e),
                      (T = i),
                      (n.selector = o),
                      (n.isReverted = !1),
                      e
                    );
                  };
                return (
                  (n.last = i),
                  e === W
                    ? i(n, function (e) {
                        return n.add(null, e);
                      })
                    : e
                    ? (n[e] = i)
                    : i
                );
              }),
              (t.ignore = function (e) {
                var t = T;
                (T = null), e(this), (T = t);
              }),
              (t.getTweens = function () {
                var t = [];
                return (
                  this.data.forEach(function (r) {
                    return r instanceof e
                      ? t.push.apply(t, r.getTweens())
                      : r instanceof ro &&
                          !(r.parent && "nested" === r.parent.data) &&
                          t.push(r);
                  }),
                  t
                );
              }),
              (t.clear = function () {
                this._r.length = this.data.length = 0;
              }),
              (t.kill = function (e, t) {
                var r = this;
                if (
                  (e
                    ? (function () {
                        for (var t, n = r.getTweens(), i = r.data.length; i--; )
                          "isFlip" === (t = r.data[i]).data &&
                            (t.revert(),
                            t.getChildren(!0, !0, !1).forEach(function (e) {
                              return n.splice(n.indexOf(e), 1);
                            }));
                        for (
                          n
                            .map(function (e) {
                              return {
                                g:
                                  e._dur ||
                                  e._delay ||
                                  (e._sat && !e._sat.vars.immediateRender)
                                    ? e.globalTime(0)
                                    : -1 / 0,
                                t: e,
                              };
                            })
                            .sort(function (e, t) {
                              return t.g - e.g || -1 / 0;
                            })
                            .forEach(function (t) {
                              return t.t.revert(e);
                            }),
                            i = r.data.length;
                          i--;

                        )
                          (t = r.data[i]) instanceof tK
                            ? "nested" !== t.data &&
                              (t.scrollTrigger && t.scrollTrigger.revert(),
                              t.kill())
                            : t instanceof ro || !t.revert || t.revert(e);
                        r._r.forEach(function (t) {
                          return t(e, r);
                        }),
                          (r.isReverted = !0);
                      })()
                    : this.data.forEach(function (e) {
                        return e.kill && e.kill();
                      }),
                  this.clear(),
                  t)
                )
                  for (var n = rx.length; n--; )
                    rx[n].id === this.id && rx.splice(n, 1);
              }),
              (t.revert = function (e) {
                this.kill(e || {});
              }),
              e
            );
          })(),
          rP = /*#__PURE__*/ (function () {
            function e(e) {
              (this.contexts = []), (this.scope = e), T && T.data.push(this);
            }
            var t = e.prototype;
            return (
              (t.add = function (e, t, r) {
                Y(e) || (e = { matches: e });
                var n,
                  i,
                  o,
                  a = new rE(0, r || this.scope),
                  s = (a.conditions = {});
                for (i in (T && !a.selector && (a.selector = T.selector),
                this.contexts.push(a),
                (t = a.add("onMatch", t)),
                (a.queries = e),
                e))
                  "all" === i
                    ? (o = 1)
                    : (n = k.matchMedia(e[i])) &&
                      (0 > rx.indexOf(a) && rx.push(a),
                      (s[i] = n.matches) && (o = 1),
                      n.addListener
                        ? n.addListener(rC)
                        : n.addEventListener("change", rC));
                return (
                  o &&
                    t(a, function (e) {
                      return a.add(null, e);
                    }),
                  this
                );
              }),
              (t.revert = function (e) {
                this.kill(e || {});
              }),
              (t.kill = function (e) {
                this.contexts.forEach(function (t) {
                  return t.kill(e, !0);
                });
              }),
              e
            );
          })(),
          rM = {
            registerPlugin: function () {
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
              t.forEach(function (e) {
                return tk(e);
              });
            },
            timeline: function (e) {
              return new tK(e);
            },
            getTweensOf: function (e, t) {
              return S.getTweensOf(e, t);
            },
            getProperty: function (e, t, r, n) {
              I(e) && (e = to(e)[0]);
              var i = eb(e || {}).get,
                o = r ? eD : eA;
              return (
                "native" === r && (r = ""),
                e
                  ? t
                    ? o(((em[t] && em[t].get) || i)(e, t, r, n))
                    : function (t, r, n) {
                        return o(((em[t] && em[t].get) || i)(e, t, r, n));
                      }
                  : e
              );
            },
            quickSetter: function (e, t, r) {
              if ((e = to(e)).length > 1) {
                var n = e.map(function (e) {
                    return rR.quickSetter(e, t, r);
                  }),
                  i = n.length;
                return function (e) {
                  for (var t = i; t--; ) n[t](e);
                };
              }
              e = e[0] || {};
              var o = em[t],
                a = eb(e),
                s = (a.harness && (a.harness.aliases || {})[t]) || t,
                l = o
                  ? function (t) {
                      var n = new o();
                      (O._pt = 0),
                        n.init(e, r ? t + r : t, O, 0, [e]),
                        n.render(1, n),
                        O._pt && rh(1, O);
                    }
                  : a.set(e, s);
              return o
                ? l
                : function (t) {
                    return l(e, s, r ? t + r : t, a, 1);
                  };
            },
            quickTo: function (e, t, r) {
              var n,
                i = rR.to(
                  e,
                  ez((((n = {})[t] = "+=0.1"), (n.paused = !0), n), r || {})
                ),
                o = function (e, r, n) {
                  return i.resetTo(t, e, r, n);
                };
              return (o.tween = i), o;
            },
            isTweening: function (e) {
              return S.getTweensOf(e, !0).length > 0;
            },
            defaults: function (e) {
              return (
                e && e.ease && (e.ease = tY(e.ease, R.ease)), eL(R, e || {})
              );
            },
            config: function (e) {
              return eL(D, e || {});
            },
            registerEffect: function (e) {
              var t = e.name,
                r = e.effect,
                n = e.plugins,
                i = e.defaults,
                o = e.extendTimeline;
              (n || "").split(",").forEach(function (e) {
                return (
                  e &&
                  !em[e] &&
                  !en[e] &&
                  es(t + " effect requires " + e + " plugin.")
                );
              }),
                (e_[t] = function (e, t, n) {
                  return r(to(e), eR(t || {}, i), n);
                }),
                o &&
                  (tK.prototype[t] = function (e, r, n) {
                    return this.add(
                      e_[t](e, Y(r) ? r : (n = r) && {}, this),
                      n
                    );
                  });
            },
            registerEase: function (e, t) {
              tF[e] = tY(t);
            },
            parseEase: function (e, t) {
              return arguments.length ? tY(e, t) : tF;
            },
            getById: function (e) {
              return S.getById(e);
            },
            exportRoot: function (e, t) {
              void 0 === e && (e = {});
              var r,
                n,
                i = new tK(e);
              for (
                i.smoothChildTiming = H(e.smoothChildTiming),
                  S.remove(i),
                  i._dp = 0,
                  i._time = i._tTime = S._time,
                  r = S._first;
                r;

              )
                (n = r._next),
                  (t ||
                    !(
                      !r._dur &&
                      r instanceof ro &&
                      r.vars.onComplete === r._targets[0]
                    )) &&
                    eK(i, r, r._start - r._delay),
                  (r = n);
              return eK(S, i, 0), i;
            },
            context: function (e, t) {
              return e ? new rE(e, t) : T;
            },
            matchMedia: function (e) {
              return new rP(e);
            },
            matchMediaRefresh: function () {
              return (
                rx.forEach(function (e) {
                  var t,
                    r,
                    n = e.conditions;
                  for (r in n) n[r] && ((n[r] = !1), (t = 1));
                  t && e.revert();
                }) || rC()
              );
            },
            addEventListener: function (e, t) {
              var r = rw[e] || (rw[e] = []);
              ~r.indexOf(t) || r.push(t);
            },
            removeEventListener: function (e, t) {
              var r = rw[e],
                n = r && r.indexOf(t);
              n >= 0 && r.splice(n, 1);
            },
            utils: {
              wrap: tm,
              wrapYoyo: t_,
              distribute: tl,
              random: tp,
              snap: tc,
              normalize: th,
              getUnit: tt,
              clamp: tr,
              splitColor: tP,
              toArray: to,
              selector: ta,
              mapRange: ty,
              pipe: tf,
              unitize: td,
              interpolate: tx,
              shuffle: ts,
            },
            install: eo,
            effects: e_,
            ticker: tz,
            updateRoot: tK.updateRoot,
            plugins: em,
            globalTimeline: S,
            core: {
              PropTween: ry,
              globals: el,
              Tween: ro,
              Timeline: tK,
              Animation: t$,
              getCache: eb,
              _removeLinkedListItem: eI,
              reverting: function () {
                return b;
              },
              context: function (e) {
                return e && T && (T.data.push(e), (e._ctx = T)), T;
              },
              suppressOverwrites: function (e) {
                return (w = e);
              },
            },
          };
        eS("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
          return (rM[e] = ro[e]);
        }),
          tz.add(tK.updateRoot),
          (O = rM.to({}, { duration: 0 }));
        var rO = function (e, t) {
            for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
              r = r._next;
            return r;
          },
          rA = function (e, t) {
            var r,
              n,
              i,
              o = e._targets;
            for (r in t)
              for (n = o.length; n--; )
                (i = e._ptLookup[n][r]) &&
                  (i = i.d) &&
                  (i._pt && (i = rO(i, r)),
                  i && i.modifier && i.modifier(t[r], e, o[n], r));
          },
          rD = function (e, t) {
            return {
              name: e,
              rawVars: 1,
              init: function (e, r, n) {
                n._onInit = function (e) {
                  var n, i;
                  if (
                    (I(r) &&
                      ((n = {}),
                      eS(r, function (e) {
                        return (n[e] = 1);
                      }),
                      (r = n)),
                    t)
                  ) {
                    for (i in ((n = {}), r)) n[i] = t(r[i]);
                    r = n;
                  }
                  rA(e, r);
                };
              },
            };
          },
          rR =
            rM.registerPlugin(
              {
                name: "attr",
                init: function (e, t, r, n, i) {
                  var o, a, s;
                  for (o in ((this.tween = r), t))
                    (s = e.getAttribute(o) || ""),
                      ((a = this.add(
                        e,
                        "setAttribute",
                        (s || 0) + "",
                        t[o],
                        n,
                        i,
                        0,
                        0,
                        o
                      )).op = o),
                      (a.b = s),
                      this._props.push(o);
                },
                render: function (e, t) {
                  for (var r = t._pt; r; )
                    b ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
                },
              },
              {
                name: "endArray",
                init: function (e, t) {
                  for (var r = t.length; r--; )
                    this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
                },
              },
              rD("roundProps", tu),
              rD("modifiers"),
              rD("snap", tc)
            ) || rM;
        (ro.version = tK.version = rR.version = "3.12.5"), (P = 1), X() && tL();
        var rz = tF.Power0,
          rL = tF.Power1,
          rF = tF.Power2,
          rB = tF.Power3,
          rj = tF.Power4,
          rq = tF.Linear,
          rI = tF.Quad,
          rW = tF.Cubic,
          rU = tF.Quart,
          rN = tF.Quint,
          rY = tF.Strong,
          rH = tF.Elastic,
          rX = tF.Back,
          rV = tF.SteppedEase,
          rQ = tF.Bounce,
          rG = tF.Sine,
          r$ = tF.Expo,
          rK = tF.Circ;
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    gkKU3: [
      function (e, t, r) {
        (r.interopDefault = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (r.defineInteropFlag = function (e) {
            Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (r.exportAll = function (e, t) {
            return (
              Object.keys(e).forEach(function (r) {
                "default" === r ||
                  "__esModule" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  });
              }),
              t
            );
          }),
          (r.export = function (e, t, r) {
            Object.defineProperty(e, t, { enumerable: !0, get: r });
          });
      },
      {},
    ],
    l02JQ: [
      function (e, t, r) {
        /*!
         * CSSPlugin 3.12.5
         * https://gsap.com
         *
         * Copyright 2008-2024, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var n,
          i,
          o,
          a,
          s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r),
          s.export(r, "CSSPlugin", () => eS),
          s.export(r, "default", () => eS),
          s.export(r, "_getBBox", () => G),
          s.export(r, "_createElement", () => U),
          s.export(r, "checkPrefix", () => H);
        var l,
          u,
          c,
          p,
          f,
          d,
          h,
          g = e("./gsap-core.js"),
          m = {},
          _ = 180 / Math.PI,
          v = Math.PI / 180,
          y = Math.atan2,
          x = /([A-Z])/g,
          w = /(left|right|width|margin|padding|x)/i,
          b = /[\s,\(]\S/,
          T = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          S = function (e, t) {
            return t.set(
              t.t,
              t.p,
              Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
              t
            );
          },
          k = function (e, t) {
            return t.set(
              t.t,
              t.p,
              1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
              t
            );
          },
          C = function (e, t) {
            return t.set(
              t.t,
              t.p,
              e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
              t
            );
          },
          E = function (e, t) {
            var r = t.s + t.c * e;
            t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
          },
          P = function (e, t) {
            return t.set(t.t, t.p, e ? t.e : t.b, t);
          },
          M = function (e, t) {
            return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
          },
          O = function (e, t, r) {
            return (e.style[t] = r);
          },
          A = function (e, t, r) {
            return e.style.setProperty(t, r);
          },
          D = function (e, t, r) {
            return (e._gsap[t] = r);
          },
          R = function (e, t, r) {
            return (e._gsap.scaleX = e._gsap.scaleY = r);
          },
          z = function (e, t, r, n, i) {
            var o = e._gsap;
            (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
          },
          L = function (e, t, r, n, i) {
            var o = e._gsap;
            (o[t] = r), o.renderTransform(i, o);
          },
          F = "transform",
          B = F + "Origin",
          j = function e(t, r) {
            var n = this,
              i = this.target,
              o = i.style,
              a = i._gsap;
            if (t in m && o) {
              if (((this.tfm = this.tfm || {}), "transform" === t))
                return T.transform.split(",").forEach(function (t) {
                  return e.call(n, t, r);
                });
              if (
                (~(t = T[t] || t).indexOf(",")
                  ? t.split(",").forEach(function (e) {
                      return (n.tfm[e] = er(i, e));
                    })
                  : (this.tfm[t] = a.x ? a[t] : er(i, t)),
                t === B && (this.tfm.zOrigin = a.zOrigin),
                this.props.indexOf(F) >= 0)
              )
                return;
              a.svg &&
                ((this.svgo = i.getAttribute("data-svg-origin")),
                this.props.push(B, r, "")),
                (t = F);
            }
            (o || r) && this.props.push(t, r, o[t]);
          },
          q = function (e) {
            e.translate &&
              (e.removeProperty("translate"),
              e.removeProperty("scale"),
              e.removeProperty("rotate"));
          },
          I = function () {
            var e,
              t,
              r = this.props,
              n = this.target,
              i = n.style,
              o = n._gsap;
            for (e = 0; e < r.length; e += 3)
              r[e + 1]
                ? (n[r[e]] = r[e + 2])
                : r[e + 2]
                ? (i[r[e]] = r[e + 2])
                : i.removeProperty(
                    "--" === r[e].substr(0, 2)
                      ? r[e]
                      : r[e].replace(x, "-$1").toLowerCase()
                  );
            if (this.tfm) {
              for (t in this.tfm) o[t] = this.tfm[t];
              o.svg &&
                (o.renderTransform(),
                n.setAttribute("data-svg-origin", this.svgo || "")),
                ((e = d()) && e.isStart) ||
                  i[F] ||
                  (q(i),
                  o.zOrigin &&
                    i[B] &&
                    ((i[B] += " " + o.zOrigin + "px"),
                    (o.zOrigin = 0),
                    o.renderTransform()),
                  (o.uncache = 1));
            }
          },
          W = function (e, t) {
            var r = { target: e, props: [], revert: I, save: j };
            return (
              e._gsap || (0, g.gsap).core.getCache(e),
              t &&
                t.split(",").forEach(function (e) {
                  return r.save(e);
                }),
              r
            );
          },
          U = function (e, t) {
            var r = l.createElementNS
              ? l.createElementNS(
                  (t || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  e
                )
              : l.createElement(e);
            return r && r.style ? r : l.createElement(e);
          },
          N = function e(t, r, n) {
            var i = getComputedStyle(t);
            return (
              i[r] ||
              i.getPropertyValue(r.replace(x, "-$1").toLowerCase()) ||
              i.getPropertyValue(r) ||
              (!n && e(t, H(r) || r, 1)) ||
              ""
            );
          },
          Y = "O,Moz,ms,Ms,Webkit".split(","),
          H = function (e, t, r) {
            var n = (t || p).style,
              i = 5;
            if (e in n && !r) return e;
            for (
              e = e.charAt(0).toUpperCase() + e.substr(1);
              i-- && !(Y[i] + e in n);

            );
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Y[i] : "") + e;
          },
          X = function () {
            "undefined" != typeof window &&
              window.document &&
              ((u = (l = window.document).documentElement),
              (p = U("div") || { style: {} }),
              U("div"),
              (B = (F = H(F)) + "Origin"),
              (p.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              (h = !!H("perspective")),
              (d = g.gsap.core.reverting),
              (c = 1));
          },
          V = function e(t) {
            var r,
              n = U(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              i = this.parentNode,
              o = this.nextSibling,
              a = this.style.cssText;
            if (
              (u.appendChild(n),
              n.appendChild(this),
              (this.style.display = "block"),
              t)
            )
              try {
                (r = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = e);
              } catch (e) {}
            else this._gsapBBox && (r = this._gsapBBox());
            return (
              i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
              u.removeChild(n),
              (this.style.cssText = a),
              r
            );
          },
          Q = function (e, t) {
            for (var r = t.length; r--; )
              if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
          },
          G = function (e) {
            var t;
            try {
              t = e.getBBox();
            } catch (r) {
              t = V.call(e, !0);
            }
            return (
              (t && (t.width || t.height)) ||
                e.getBBox === V ||
                (t = V.call(e, !0)),
              !t || t.width || t.x || t.y
                ? t
                : {
                    x: +Q(e, ["x", "cx", "x1"]) || 0,
                    y: +Q(e, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          $ = function (e) {
            return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && G(e));
          },
          K = function (e, t) {
            if (t) {
              var r,
                n = e.style;
              t in m && t !== B && (t = F),
                n.removeProperty
                  ? (("ms" === (r = t.substr(0, 2)) ||
                      "webkit" === t.substr(0, 6)) &&
                      (t = "-" + t),
                    n.removeProperty(
                      "--" === r ? t : t.replace(x, "-$1").toLowerCase()
                    ))
                  : n.removeAttribute(t);
            }
          },
          J = function (e, t, r, n, i, o) {
            var a = new g.PropTween(e._pt, t, r, 0, 1, o ? M : P);
            return (e._pt = a), (a.b = n), (a.e = i), e._props.push(r), a;
          },
          Z = { deg: 1, rad: 1, turn: 1 },
          ee = { grid: 1, flex: 1 },
          et = function e(t, r, n, i) {
            var o,
              a,
              s,
              u,
              c = parseFloat(n) || 0,
              f = (n + "").trim().substr((c + "").length) || "px",
              d = p.style,
              h = w.test(r),
              _ = "svg" === t.tagName.toLowerCase(),
              v = (_ ? "client" : "offset") + (h ? "Width" : "Height"),
              y = "px" === i,
              x = "%" === i;
            if (i === f || !c || Z[i] || Z[f]) return c;
            if (
              ("px" === f || y || (c = e(t, r, n, "px")),
              (u = t.getCTM && $(t)),
              (x || "%" === f) && (m[r] || ~r.indexOf("adius")))
            )
              return (
                (o = u ? t.getBBox()[h ? "width" : "height"] : t[v]),
                (0, g._round)(x ? (c / o) * 100 : (c / 100) * o)
              );
            if (
              ((d[h ? "width" : "height"] = 100 + (y ? f : i)),
              (a =
                ~r.indexOf("adius") || ("em" === i && t.appendChild && !_)
                  ? t
                  : t.parentNode),
              u && (a = (t.ownerSVGElement || {}).parentNode),
              (a && a !== l && a.appendChild) || (a = l.body),
              (s = a._gsap) &&
                x &&
                s.width &&
                h &&
                s.time === g._ticker.time &&
                !s.uncache)
            )
              return (0, g._round)((c / s.width) * 100);
            if (x && ("height" === r || "width" === r)) {
              var b = t.style[r];
              (t.style[r] = 100 + i),
                (o = t[v]),
                b ? (t.style[r] = b) : K(t, r);
            } else
              (x || "%" === f) &&
                !ee[N(a, "display")] &&
                (d.position = N(t, "position")),
                a === t && (d.position = "static"),
                a.appendChild(p),
                (o = p[v]),
                a.removeChild(p),
                (d.position = "absolute");
            return (
              h &&
                x &&
                (((s = (0, g._getCache)(a)).time = g._ticker.time),
                (s.width = a[v])),
              (0, g._round)(y ? (o * c) / 100 : o && c ? (100 / o) * c : 0)
            );
          },
          er = function (e, t, r, n) {
            var i;
            return (
              c || X(),
              t in T &&
                "transform" !== t &&
                ~(t = T[t]).indexOf(",") &&
                (t = t.split(",")[0]),
              m[t] && "transform" !== t
                ? ((i = eh(e, n)),
                  (i =
                    "transformOrigin" !== t
                      ? i[t]
                      : i.svg
                      ? i.origin
                      : eg(N(e, B)) + " " + i.zOrigin + "px"))
                : (!(i = e.style[t]) ||
                    "auto" === i ||
                    n ||
                    ~(i + "").indexOf("calc(")) &&
                  (i =
                    (es[t] && es[t](e, t, r)) ||
                    N(e, t) ||
                    (0, g._getProperty)(e, t) ||
                    ("opacity" === t ? 1 : 0)),
              r && !~(i + "").trim().indexOf(" ") ? et(e, t, i, r) + r : i
            );
          },
          en = function (e, t, r, n) {
            if (!r || "none" === r) {
              var i = H(t, e, 1),
                o = i && N(e, i, 1);
              o && o !== r
                ? ((t = i), (r = o))
                : "borderColor" === t && (r = N(e, "borderTopColor"));
            }
            var a,
              s,
              l,
              u,
              c,
              p,
              f,
              d,
              h,
              m,
              _,
              v = new g.PropTween(
                this._pt,
                e.style,
                t,
                0,
                1,
                g._renderComplexString
              ),
              y = 0,
              x = 0;
            if (
              ((v.b = r),
              (v.e = n),
              (r += ""),
              "auto" == (n += "") &&
                ((p = e.style[t]),
                (e.style[t] = n),
                (n = N(e, t) || n),
                p ? (e.style[t] = p) : K(e, t)),
              (a = [r, n]),
              (0, g._colorStringFilter)(a),
              (r = a[0]),
              (n = a[1]),
              (l = r.match(g._numWithUnitExp) || []),
              (n.match(g._numWithUnitExp) || []).length)
            ) {
              for (; (s = (0, g._numWithUnitExp).exec(n)); )
                (f = s[0]),
                  (h = n.substring(y, s.index)),
                  c
                    ? (c = (c + 1) % 5)
                    : ("rgba(" === h.substr(-5) || "hsla(" === h.substr(-5)) &&
                      (c = 1),
                  f !== (p = l[x++] || "") &&
                    ((u = parseFloat(p) || 0),
                    (_ = p.substr((u + "").length)),
                    "=" === f.charAt(1) &&
                      (f = (0, g._parseRelative)(u, f) + _),
                    (d = parseFloat(f)),
                    (m = f.substr((d + "").length)),
                    (y = g._numWithUnitExp.lastIndex - m.length),
                    m ||
                      ((m = m || g._config.units[t] || _),
                      y !== n.length || ((n += m), (v.e += m))),
                    _ !== m && (u = et(e, t, p, m) || 0),
                    (v._pt = {
                      _next: v._pt,
                      p: h || 1 === x ? h : ",",
                      s: u,
                      c: d - u,
                      m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
                    }));
              v.c = y < n.length ? n.substring(y, n.length) : "";
            } else v.r = "display" === t && "none" === n ? M : P;
            return (0, g._relExp).test(n) && (v.e = 0), (this._pt = v), v;
          },
          ei = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          eo = function (e) {
            var t = e.split(" "),
              r = t[0],
              n = t[1] || "50%";
            return (
              ("top" === r ||
                "bottom" === r ||
                "left" === n ||
                "right" === n) &&
                ((e = r), (r = n), (n = e)),
              (t[0] = ei[r] || r),
              (t[1] = ei[n] || n),
              t.join(" ")
            );
          },
          ea = function (e, t) {
            if (t.tween && t.tween._time === t.tween._dur) {
              var r,
                n,
                i,
                o = t.t,
                a = o.style,
                s = t.u,
                l = o._gsap;
              if ("all" === s || !0 === s) (a.cssText = ""), (n = 1);
              else
                for (i = (s = s.split(",")).length; --i > -1; )
                  m[(r = s[i])] &&
                    ((n = 1), (r = "transformOrigin" === r ? B : F)),
                    K(o, r);
              n &&
                (K(o, F),
                l &&
                  (l.svg && o.removeAttribute("transform"),
                  eh(o, 1),
                  (l.uncache = 1),
                  q(a)));
            }
          },
          es = {
            clearProps: function (e, t, r, n, i) {
              if ("isFromStart" !== i.data) {
                var o = (e._pt = new g.PropTween(e._pt, t, r, 0, 0, ea));
                return (
                  (o.u = n), (o.pr = -10), (o.tween = i), e._props.push(r), 1
                );
              }
            },
          },
          el = [1, 0, 0, 1, 0, 0],
          eu = {},
          ec = function (e) {
            return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
          },
          ep = function (e) {
            var t = N(e, F);
            return ec(t) ? el : t.substr(7).match(g._numExp).map(g._round);
          },
          ef = function (e, t) {
            var r,
              n,
              i,
              o,
              a = e._gsap || (0, g._getCache)(e),
              s = e.style,
              l = ep(e);
            return a.svg && e.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (l = [
                  (i = e.transform.baseVal.consolidate().matrix).a,
                  i.b,
                  i.c,
                  i.d,
                  i.e,
                  i.f,
                ]).join(",")
                ? el
                : l
              : (l !== el ||
                  e.offsetParent ||
                  e === u ||
                  a.svg ||
                  ((i = s.display),
                  (s.display = "block"),
                  ((r = e.parentNode) && e.offsetParent) ||
                    ((o = 1), (n = e.nextElementSibling), u.appendChild(e)),
                  (l = ep(e)),
                  i ? (s.display = i) : K(e, "display"),
                  o &&
                    (n
                      ? r.insertBefore(e, n)
                      : r
                      ? r.appendChild(e)
                      : u.removeChild(e))),
                t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
          },
          ed = function (e, t, r, n, i, o) {
            var a,
              s,
              l,
              u,
              c = e._gsap,
              p = i || ef(e, !0),
              f = c.xOrigin || 0,
              d = c.yOrigin || 0,
              h = c.xOffset || 0,
              g = c.yOffset || 0,
              m = p[0],
              _ = p[1],
              v = p[2],
              y = p[3],
              x = p[4],
              w = p[5],
              b = t.split(" "),
              T = parseFloat(b[0]) || 0,
              S = parseFloat(b[1]) || 0;
            r
              ? p !== el &&
                (s = m * y - _ * v) &&
                ((l = (y / s) * T + (-v / s) * S + (v * w - y * x) / s),
                (u = (-_ / s) * T + (m / s) * S - (m * w - _ * x) / s),
                (T = l),
                (S = u))
              : ((T =
                  (a = G(e)).x +
                  (~b[0].indexOf("%") ? (T / 100) * a.width : T)),
                (S =
                  a.y +
                  (~(b[1] || b[0]).indexOf("%") ? (S / 100) * a.height : S))),
              n || (!1 !== n && c.smooth)
                ? ((x = T - f),
                  (w = S - d),
                  (c.xOffset = h + (x * m + w * v) - x),
                  (c.yOffset = g + (x * _ + w * y) - w))
                : (c.xOffset = c.yOffset = 0),
              (c.xOrigin = T),
              (c.yOrigin = S),
              (c.smooth = !!n),
              (c.origin = t),
              (c.originIsAbsolute = !!r),
              (e.style[B] = "0px 0px"),
              o &&
                (J(o, c, "xOrigin", f, T),
                J(o, c, "yOrigin", d, S),
                J(o, c, "xOffset", h, c.xOffset),
                J(o, c, "yOffset", g, c.yOffset)),
              e.setAttribute("data-svg-origin", T + " " + S);
          },
          eh = function (e, t) {
            var r = e._gsap || new g.GSCache(e);
            if ("x" in r && !t && !r.uncache) return r;
            var n,
              i,
              o,
              a,
              s,
              l,
              u,
              c,
              p,
              f,
              d,
              m,
              x,
              w,
              b,
              T,
              S,
              k,
              C,
              E,
              P,
              M,
              O,
              A,
              D,
              R,
              z,
              L,
              j,
              q,
              I,
              W,
              U = e.style,
              Y = r.scaleX < 0,
              H = getComputedStyle(e),
              X = N(e, B) || "0";
            return (
              (n = i = o = l = u = c = p = f = d = 0),
              (a = s = 1),
              (r.svg = !!(e.getCTM && $(e))),
              H.translate &&
                (("none" !== H.translate ||
                  "none" !== H.scale ||
                  "none" !== H.rotate) &&
                  (U[F] =
                    ("none" !== H.translate
                      ? "translate3d(" +
                        (H.translate + " 0 0")
                          .split(" ")
                          .slice(0, 3)
                          .join(", ") +
                        ") "
                      : "") +
                    ("none" !== H.rotate ? "rotate(" + H.rotate + ") " : "") +
                    ("none" !== H.scale
                      ? "scale(" + H.scale.split(" ").join(",") + ") "
                      : "") +
                    ("none" !== H[F] ? H[F] : "")),
                (U.scale = U.rotate = U.translate = "none")),
              (w = ef(e, r.svg)),
              r.svg &&
                (r.uncache
                  ? ((D = e.getBBox()),
                    (X = r.xOrigin - D.x + "px " + (r.yOrigin - D.y) + "px"),
                    (A = ""))
                  : (A = !t && e.getAttribute("data-svg-origin")),
                ed(e, A || X, !!A || r.originIsAbsolute, !1 !== r.smooth, w)),
              (m = r.xOrigin || 0),
              (x = r.yOrigin || 0),
              w !== el &&
                ((k = w[0]),
                (C = w[1]),
                (E = w[2]),
                (P = w[3]),
                (n = M = w[4]),
                (i = O = w[5]),
                6 === w.length
                  ? ((a = Math.sqrt(k * k + C * C)),
                    (s = Math.sqrt(P * P + E * E)),
                    (l = k || C ? y(C, k) * _ : 0),
                    (p = E || P ? y(E, P) * _ + l : 0) &&
                      (s *= Math.abs(Math.cos(p * v))),
                    r.svg &&
                      ((n -= m - (m * k + x * E)), (i -= x - (m * C + x * P))))
                  : ((W = w[6]),
                    (q = w[7]),
                    (z = w[8]),
                    (L = w[9]),
                    (j = w[10]),
                    (I = w[11]),
                    (n = w[12]),
                    (i = w[13]),
                    (o = w[14]),
                    (u = (b = y(W, j)) * _),
                    b &&
                      ((A = M * (T = Math.cos(-b)) + z * (S = Math.sin(-b))),
                      (D = O * T + L * S),
                      (R = W * T + j * S),
                      (z = -(M * S) + z * T),
                      (L = -(O * S) + L * T),
                      (j = -(W * S) + j * T),
                      (I = -(q * S) + I * T),
                      (M = A),
                      (O = D),
                      (W = R)),
                    (c = (b = y(-E, j)) * _),
                    b &&
                      ((A = k * (T = Math.cos(-b)) - z * (S = Math.sin(-b))),
                      (D = C * T - L * S),
                      (R = E * T - j * S),
                      (I = P * S + I * T),
                      (k = A),
                      (C = D),
                      (E = R)),
                    (l = (b = y(C, k)) * _),
                    b &&
                      ((A = k * (T = Math.cos(b)) + C * (S = Math.sin(b))),
                      (D = M * T + O * S),
                      (C = C * T - k * S),
                      (O = O * T - M * S),
                      (k = A),
                      (M = D)),
                    u &&
                      Math.abs(u) + Math.abs(l) > 359.9 &&
                      ((u = l = 0), (c = 180 - c)),
                    (a = (0, g._round)(Math.sqrt(k * k + C * C + E * E))),
                    (s = (0, g._round)(Math.sqrt(O * O + W * W))),
                    (p = Math.abs((b = y(M, O))) > 2e-4 ? b * _ : 0),
                    (d = I ? 1 / (I < 0 ? -I : I) : 0)),
                r.svg &&
                  ((A = e.getAttribute("transform")),
                  (r.forceCSS =
                    e.setAttribute("transform", "") || !ec(N(e, F))),
                  A && e.setAttribute("transform", A))),
              Math.abs(p) > 90 &&
                270 > Math.abs(p) &&
                (Y
                  ? ((a *= -1),
                    (p += l <= 0 ? 180 : -180),
                    (l += l <= 0 ? 180 : -180))
                  : ((s *= -1), (p += p <= 0 ? 180 : -180))),
              (t = t || r.uncache),
              (r.x =
                n -
                ((r.xPercent =
                  n &&
                  ((!t && r.xPercent) ||
                    (Math.round(e.offsetWidth / 2) === Math.round(-n)
                      ? -50
                      : 0)))
                  ? (e.offsetWidth * r.xPercent) / 100
                  : 0) +
                "px"),
              (r.y =
                i -
                ((r.yPercent =
                  i &&
                  ((!t && r.yPercent) ||
                    (Math.round(e.offsetHeight / 2) === Math.round(-i)
                      ? -50
                      : 0)))
                  ? (e.offsetHeight * r.yPercent) / 100
                  : 0) +
                "px"),
              (r.z = o + "px"),
              (r.scaleX = (0, g._round)(a)),
              (r.scaleY = (0, g._round)(s)),
              (r.rotation = (0, g._round)(l) + "deg"),
              (r.rotationX = (0, g._round)(u) + "deg"),
              (r.rotationY = (0, g._round)(c) + "deg"),
              (r.skewX = p + "deg"),
              (r.skewY = f + "deg"),
              (r.transformPerspective = d + "px"),
              (r.zOrigin =
                parseFloat(X.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
                (U[B] = eg(X)),
              (r.xOffset = r.yOffset = 0),
              (r.force3D = g._config.force3D),
              (r.renderTransform = r.svg ? ex : h ? ey : e_),
              (r.uncache = 0),
              r
            );
          },
          eg = function (e) {
            return (e = e.split(" "))[0] + " " + e[1];
          },
          em = function (e, t, r) {
            var n = (0, g.getUnit)(t);
            return (
              (0, g._round)(
                parseFloat(t) + parseFloat(et(e, "x", r + "px", n))
              ) + n
            );
          },
          e_ = function (e, t) {
            (t.z = "0px"),
              (t.rotationY = t.rotationX = "0deg"),
              (t.force3D = 0),
              ey(e, t);
          },
          ev = "0deg",
          ey = function (e, t) {
            var r = t || this,
              n = r.xPercent,
              i = r.yPercent,
              o = r.x,
              a = r.y,
              s = r.z,
              l = r.rotation,
              u = r.rotationY,
              c = r.rotationX,
              p = r.skewX,
              f = r.skewY,
              d = r.scaleX,
              h = r.scaleY,
              g = r.transformPerspective,
              m = r.force3D,
              _ = r.target,
              y = r.zOrigin,
              x = "",
              w = ("auto" === m && e && 1 !== e) || !0 === m;
            if (y && (c !== ev || u !== ev)) {
              var b,
                T = parseFloat(u) * v,
                S = Math.sin(T),
                k = Math.cos(T);
              (o = em(
                _,
                o,
                -(S * (b = Math.cos((T = parseFloat(c) * v))) * y)
              )),
                (a = em(_, a, -(-Math.sin(T) * y))),
                (s = em(_, s, -(k * b * y) + y));
            }
            "0px" !== g && (x += "perspective(" + g + ") "),
              (n || i) && (x += "translate(" + n + "%, " + i + "%) "),
              (w || "0px" !== o || "0px" !== a || "0px" !== s) &&
                (x +=
                  "0px" !== s || w
                    ? "translate3d(" + o + ", " + a + ", " + s + ") "
                    : "translate(" + o + ", " + a + ") "),
              l !== ev && (x += "rotate(" + l + ") "),
              u !== ev && (x += "rotateY(" + u + ") "),
              c !== ev && (x += "rotateX(" + c + ") "),
              (p !== ev || f !== ev) && (x += "skew(" + p + ", " + f + ") "),
              (1 !== d || 1 !== h) && (x += "scale(" + d + ", " + h + ") "),
              (_.style[F] = x || "translate(0, 0)");
          },
          ex = function (e, t) {
            var r,
              n,
              i,
              o,
              a,
              s = t || this,
              l = s.xPercent,
              u = s.yPercent,
              c = s.x,
              p = s.y,
              f = s.rotation,
              d = s.skewX,
              h = s.skewY,
              m = s.scaleX,
              _ = s.scaleY,
              y = s.target,
              x = s.xOrigin,
              w = s.yOrigin,
              b = s.xOffset,
              T = s.yOffset,
              S = s.forceCSS,
              k = parseFloat(c),
              C = parseFloat(p);
            (f = parseFloat(f)),
              (d = parseFloat(d)),
              (h = parseFloat(h)) && ((d += h = parseFloat(h)), (f += h)),
              f || d
                ? ((f *= v),
                  (d *= v),
                  (r = Math.cos(f) * m),
                  (n = Math.sin(f) * m),
                  (i = -(Math.sin(f - d) * _)),
                  (o = Math.cos(f - d) * _),
                  d &&
                    ((h *= v),
                    (i *= a = Math.sqrt(1 + (a = Math.tan(d - h)) * a)),
                    (o *= a),
                    h &&
                      ((r *= a = Math.sqrt(1 + (a = Math.tan(h)) * a)),
                      (n *= a))),
                  (r = (0, g._round)(r)),
                  (n = (0, g._round)(n)),
                  (i = (0, g._round)(i)),
                  (o = (0, g._round)(o)))
                : ((r = m), (o = _), (n = i = 0)),
              ((k && !~(c + "").indexOf("px")) ||
                (C && !~(p + "").indexOf("px"))) &&
                ((k = et(y, "x", c, "px")), (C = et(y, "y", p, "px"))),
              (x || w || b || T) &&
                ((k = (0, g._round)(k + x - (x * r + w * i) + b)),
                (C = (0, g._round)(C + w - (x * n + w * o) + T))),
              (l || u) &&
                ((a = y.getBBox()),
                (k = (0, g._round)(k + (l / 100) * a.width)),
                (C = (0, g._round)(C + (u / 100) * a.height))),
              (a =
                "matrix(" +
                r +
                "," +
                n +
                "," +
                i +
                "," +
                o +
                "," +
                k +
                "," +
                C +
                ")"),
              y.setAttribute("transform", a),
              S && (y.style[F] = a);
          },
          ew = function (e, t, r, n, i) {
            var o,
              a,
              s = (0, g._isString)(i),
              l = parseFloat(i) * (s && ~i.indexOf("rad") ? _ : 1) - n,
              u = n + l + "deg";
            return (
              s &&
                ("short" === (o = i.split("_")[1]) &&
                  (l %= 360) != l % 180 &&
                  (l += l < 0 ? 360 : -360),
                "cw" === o && l < 0
                  ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                  : "ccw" === o &&
                    l > 0 &&
                    (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
              (e._pt = a = new g.PropTween(e._pt, t, r, n, l, k)),
              (a.e = u),
              (a.u = "deg"),
              e._props.push(r),
              a
            );
          },
          eb = function (e, t) {
            for (var r in t) e[r] = t[r];
            return e;
          },
          eT = function (e, t, r) {
            var n,
              i,
              o,
              a,
              s,
              l,
              u,
              c = eb({}, r._gsap),
              p = r.style;
            for (i in (c.svg
              ? ((o = r.getAttribute("transform")),
                r.setAttribute("transform", ""),
                (p[F] = t),
                (n = eh(r, 1)),
                K(r, F),
                r.setAttribute("transform", o))
              : ((o = getComputedStyle(r)[F]),
                (p[F] = t),
                (n = eh(r, 1)),
                (p[F] = o)),
            m))
              (o = c[i]) !== (a = n[i]) &&
                0 >
                  "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
                ((s =
                  (0, g.getUnit)(o) !== (u = (0, g.getUnit)(a))
                    ? et(r, i, o, u)
                    : parseFloat(o)),
                (l = parseFloat(a)),
                (e._pt = new g.PropTween(e._pt, n, i, s, l - s, S)),
                (e._pt.u = u || 0),
                e._props.push(i));
            eb(n, c);
          };
        (0, g._forEachName)("padding,margin,Width,Radius", function (e, t) {
          var r = "Right",
            n = "Bottom",
            i = "Left",
            o = (
              t < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
            ).map(function (r) {
              return t < 2 ? e + r : "border" + r + e;
            });
          es[t > 1 ? "border" + e : e] = function (e, t, r, n, i) {
            var a, s;
            if (arguments.length < 4)
              return 5 ===
                (s = (a = o.map(function (t) {
                  return er(e, t, r);
                })).join(" ")).split(a[0]).length
                ? a[0]
                : s;
            (a = (n + "").split(" ")),
              (s = {}),
              o.forEach(function (e, t) {
                return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
              }),
              e.init(t, s, i);
          };
        });
        var eS = {
          name: "css",
          register: X,
          targetTest: function (e) {
            return e.style && e.nodeType;
          },
          init: function (e, t, r, n, i) {
            var o,
              a,
              s,
              l,
              u,
              p,
              f,
              d,
              h,
              _,
              v,
              y,
              x,
              w,
              k,
              P,
              M = this._props,
              O = e.style,
              A = r.vars.startAt;
            for (f in (c || X(),
            (this.styles = this.styles || W(e)),
            (P = this.styles.props),
            (this.tween = r),
            t))
              if (
                "autoRound" !== f &&
                ((a = t[f]),
                !(g._plugins[f] && (0, g._checkPlugin)(f, t, r, n, e, i)))
              ) {
                if (
                  ((u = typeof a),
                  (p = es[f]),
                  "function" === u && (u = typeof (a = a.call(r, n, e, i))),
                  "string" === u &&
                    ~a.indexOf("random(") &&
                    (a = (0, g._replaceRandom)(a)),
                  p)
                )
                  p(this, e, f, a, r) && (k = 1);
                else if ("--" === f.substr(0, 2))
                  (o = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
                    (a += ""),
                    (g._colorExp.lastIndex = 0),
                    (0, g._colorExp).test(o) ||
                      ((d = (0, g.getUnit)(o)), (h = (0, g.getUnit)(a))),
                    h ? d !== h && (o = et(e, f, o, h) + h) : d && (a += d),
                    this.add(O, "setProperty", o, a, n, i, 0, 0, f),
                    M.push(f),
                    P.push(f, 0, O[f]);
                else if ("undefined" !== u) {
                  if (
                    (A && f in A
                      ? ((o =
                          "function" == typeof A[f]
                            ? A[f].call(r, n, e, i)
                            : A[f]),
                        (0, g._isString)(o) &&
                          ~o.indexOf("random(") &&
                          (o = (0, g._replaceRandom)(o)),
                        (0, g.getUnit)(o + "") ||
                          "auto" === o ||
                          (o +=
                            g._config.units[f] ||
                            (0, g.getUnit)(er(e, f)) ||
                            ""),
                        "=" === (o + "").charAt(1) && (o = er(e, f)))
                      : (o = er(e, f)),
                    (l = parseFloat(o)),
                    (_ =
                      "string" === u &&
                      "=" === a.charAt(1) &&
                      a.substr(0, 2)) && (a = a.substr(2)),
                    (s = parseFloat(a)),
                    f in T &&
                      ("autoAlpha" === f &&
                        (1 === l &&
                          "hidden" === er(e, "visibility") &&
                          s &&
                          (l = 0),
                        P.push("visibility", 0, O.visibility),
                        J(
                          this,
                          O,
                          "visibility",
                          l ? "inherit" : "hidden",
                          s ? "inherit" : "hidden",
                          !s
                        )),
                      "scale" !== f &&
                        "transform" !== f &&
                        ~(f = T[f]).indexOf(",") &&
                        (f = f.split(",")[0])),
                    (v = f in m))
                  ) {
                    if (
                      (this.styles.save(f),
                      y ||
                        (((x = e._gsap).renderTransform && !t.parseTransform) ||
                          eh(e, t.parseTransform),
                        (w = !1 !== t.smoothOrigin && x.smooth),
                        ((y = this._pt =
                          new g.PropTween(
                            this._pt,
                            O,
                            F,
                            0,
                            1,
                            x.renderTransform,
                            x,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === f)
                    )
                      (this._pt = new g.PropTween(
                        this._pt,
                        x,
                        "scaleY",
                        x.scaleY,
                        (_ ? (0, g._parseRelative)(x.scaleY, _ + s) : s) -
                          x.scaleY || 0,
                        S
                      )),
                        (this._pt.u = 0),
                        M.push("scaleY", f),
                        (f += "X");
                    else if ("transformOrigin" === f) {
                      P.push(B, 0, O[B]),
                        (a = eo(a)),
                        x.svg
                          ? ed(e, a, 0, w, 0, this)
                          : ((h = parseFloat(a.split(" ")[2]) || 0) !==
                              x.zOrigin && J(this, x, "zOrigin", x.zOrigin, h),
                            J(this, O, f, eg(o), eg(a)));
                      continue;
                    } else if ("svgOrigin" === f) {
                      ed(e, a, 1, w, 0, this);
                      continue;
                    } else if (f in eu) {
                      ew(
                        this,
                        x,
                        f,
                        l,
                        _ ? (0, g._parseRelative)(l, _ + a) : a
                      );
                      continue;
                    } else if ("smoothOrigin" === f) {
                      J(this, x, "smooth", x.smooth, a);
                      continue;
                    } else if ("force3D" === f) {
                      x[f] = a;
                      continue;
                    } else if ("transform" === f) {
                      eT(this, a, e);
                      continue;
                    }
                  } else f in O || (f = H(f) || f);
                  if (
                    v ||
                    ((s || 0 === s) && (l || 0 === l) && !b.test(a) && f in O)
                  )
                    (d = (o + "").substr((l + "").length)),
                      s || (s = 0),
                      (h =
                        (0, g.getUnit)(a) ||
                        (f in g._config.units ? g._config.units[f] : d)),
                      d !== h && (l = et(e, f, o, h)),
                      (this._pt = new g.PropTween(
                        this._pt,
                        v ? x : O,
                        f,
                        l,
                        (_ ? (0, g._parseRelative)(l, _ + s) : s) - l,
                        v ||
                        ("px" !== h && "zIndex" !== f) ||
                        !1 === t.autoRound
                          ? S
                          : E
                      )),
                      (this._pt.u = h || 0),
                      d !== h &&
                        "%" !== h &&
                        ((this._pt.b = o), (this._pt.r = C));
                  else if (f in O) en.call(this, e, f, o, _ ? _ + a : a);
                  else if (f in e)
                    this.add(e, f, o || e[f], _ ? _ + a : a, n, i);
                  else if ("parseTransform" !== f) {
                    (0, g._missingPlugin)(f, a);
                    continue;
                  }
                  v || (f in O ? P.push(f, 0, O[f]) : P.push(f, 1, o || e[f])),
                    M.push(f);
                }
              }
            k && (0, g._sortPropTweensByPriority)(this);
          },
          render: function (e, t) {
            if (t.tween._time || !d())
              for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
            else t.styles.revert();
          },
          get: er,
          aliases: T,
          getSetter: function (e, t, r) {
            var n = T[t];
            return (
              n && 0 > n.indexOf(",") && (t = n),
              t in m && t !== B && (e._gsap.x || er(e, "x"))
                ? r && f === r
                  ? "scale" === t
                    ? R
                    : D
                  : ((f = r || {}), "scale" === t ? z : L)
                : e.style && !(0, g._isUndefined)(e.style[t])
                ? O
                : ~t.indexOf("-")
                ? A
                : (0, g._getSetter)(e, t)
            );
          },
          core: { _removeProperty: K, _getMatrix: ef },
        };
        (g.gsap.utils.checkPrefix = H),
          (g.gsap.core.getStyleSaver = W),
          (n = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
          (i = "rotation,rotationX,rotationY,skewX,skewY"),
          (o =
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),
          (a = (0, g._forEachName)(
            n +
              "," +
              i +
              ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (e) {
              m[e] = 1;
            }
          )),
          (0, g._forEachName)(i, function (e) {
            (g._config.units[e] = "deg"), (eu[e] = 1);
          }),
          (T[a[13]] = n + "," + i),
          (0, g._forEachName)(o, function (e) {
            var t = e.split(":");
            T[t[1]] = a[t[0]];
          }),
          (0, g._forEachName)(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (e) {
              g._config.units[e] = "px";
            }
          ),
          (0, g.gsap).registerPlugin(eS);
      },
      {
        "./gsap-core.js": "05eeC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "3UJRo": [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r),
          n.export(r, "TweenLite", () => i.TweenLite),
          n.export(r, "TimelineMax", () => i.TimelineMax),
          n.export(r, "TimelineLite", () => i.TimelineLite),
          n.export(r, "Power0", () => i.Power0),
          n.export(r, "Power1", () => i.Power1),
          n.export(r, "Power2", () => i.Power2),
          n.export(r, "Power3", () => i.Power3),
          n.export(r, "Power4", () => i.Power4),
          n.export(r, "Linear", () => i.Linear),
          n.export(r, "Quad", () => i.Quad),
          n.export(r, "Cubic", () => i.Cubic),
          n.export(r, "Quart", () => i.Quart),
          n.export(r, "Quint", () => i.Quint),
          n.export(r, "Strong", () => i.Strong),
          n.export(r, "Elastic", () => i.Elastic),
          n.export(r, "Back", () => i.Back),
          n.export(r, "SteppedEase", () => i.SteppedEase),
          n.export(r, "Bounce", () => i.Bounce),
          n.export(r, "Sine", () => i.Sine),
          n.export(r, "Expo", () => i.Expo),
          n.export(r, "Circ", () => i.Circ),
          n.export(r, "wrap", () => i.wrap),
          n.export(r, "wrapYoyo", () => i.wrapYoyo),
          n.export(r, "distribute", () => i.distribute),
          n.export(r, "random", () => i.random),
          n.export(r, "snap", () => i.snap),
          n.export(r, "normalize", () => i.normalize),
          n.export(r, "getUnit", () => i.getUnit),
          n.export(r, "clamp", () => i.clamp),
          n.export(r, "splitColor", () => i.splitColor),
          n.export(r, "toArray", () => i.toArray),
          n.export(r, "mapRange", () => i.mapRange),
          n.export(r, "pipe", () => i.pipe),
          n.export(r, "unitize", () => i.unitize),
          n.export(r, "interpolate", () => i.interpolate),
          n.export(r, "shuffle", () => i.shuffle),
          n.export(r, "selector", () => i.selector),
          n.export(r, "gsap", () => x),
          n.export(r, "default", () => x),
          n.export(r, "TweenMax", () => w),
          n.export(r, "CSSPlugin", () => s.default);
        var i = e("./gsap-core.js"),
          o = n.interopDefault(i),
          a = e("./CSSPlugin.js"),
          s = n.interopDefault(a),
          l = e("./CustomEase.js");
        n.exportAll(l, r);
        var u = e("./Draggable.js");
        n.exportAll(u, r);
        var c = e("./CSSRulePlugin.js");
        n.exportAll(c, r);
        var p = e("./EaselPlugin.js");
        n.exportAll(p, r);
        var f = e("./EasePack.js");
        n.exportAll(f, r);
        var d = e("./Flip.js");
        n.exportAll(d, r);
        var h = e("./MotionPathPlugin.js");
        n.exportAll(h, r);
        var g = e("./Observer.js");
        n.exportAll(g, r);
        var m = e("./PixiPlugin.js");
        n.exportAll(m, r);
        var _ = e("./ScrollToPlugin.js");
        n.exportAll(_, r);
        var v = e("./ScrollTrigger.js");
        n.exportAll(v, r);
        var y = e("./TextPlugin.js");
        n.exportAll(y, r);
        var x = (0, o.default).registerPlugin(s.default) || o.default,
          w = x.core.Tween;
      },
      {
        "./gsap-core.js": "05eeC",
        "./CSSPlugin.js": "l02JQ",
        "./CustomEase.js": !1,
        "./Draggable.js": !1,
        "./CSSRulePlugin.js": !1,
        "./EaselPlugin.js": !1,
        "./EasePack.js": !1,
        "./Flip.js": !1,
        "./MotionPathPlugin.js": !1,
        "./Observer.js": !1,
        "./PixiPlugin.js": !1,
        "./ScrollToPlugin.js": !1,
        "./ScrollTrigger.js": "7wnFk",
        "./TextPlugin.js": !1,
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    aAWxM: [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r),
          n.export(r, "Observer", () => U),
          n.export(r, "default", () => U),
          n.export(r, "_isViewport", () => C),
          n.export(r, "_scrollers", () => x),
          n.export(r, "_getScrollFunc", () => F),
          n.export(r, "_getProxyProp", () => k),
          n.export(r, "_proxies", () => w),
          n.export(r, "_getVelocityProp", () => B),
          n.export(r, "_vertical", () => z),
          n.export(r, "_horizontal", () => R),
          n.export(r, "_getTarget", () => L);
        /*!
         * Observer 3.12.5
         * https://gsap.com
         *
         * @license Copyright 2008-2024, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var i,
          o,
          a,
          s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          _ = function () {
            return (
              i ||
              ("undefined" != typeof window &&
                (i = window.gsap) &&
                i.registerPlugin &&
                i)
            );
          },
          v = 1,
          y = [],
          x = [],
          w = [],
          b = Date.now,
          T = function (e, t) {
            return t;
          },
          S = function () {
            var e = f.core,
              t = e.bridge || {},
              r = e._scrollers,
              n = e._proxies;
            r.push.apply(r, x),
              n.push.apply(n, w),
              (x = r),
              (w = n),
              (T = function (e, r) {
                return t[e](r);
              });
          },
          k = function (e, t) {
            return ~w.indexOf(e) && w[w.indexOf(e) + 1][t];
          },
          C = function (e) {
            return !!~d.indexOf(e);
          },
          E = function (e, t, r, n, i) {
            return e.addEventListener(t, r, {
              passive: !1 !== n,
              capture: !!i,
            });
          },
          P = function (e, t, r, n) {
            return e.removeEventListener(t, r, !!n);
          },
          M = "scrollLeft",
          O = "scrollTop",
          A = function () {
            return (h && h.isPressed) || x.cache++;
          },
          D = function (e, t) {
            var r = function r(n) {
              if (n || 0 === n) {
                v && (a.history.scrollRestoration = "manual");
                var i = h && h.isPressed;
                e((n = r.v = Math.round(n) || (h && h.iOS ? 1 : 0))),
                  (r.cacheID = x.cache),
                  i && T("ss", n);
              } else
                (t || x.cache !== r.cacheID || T("ref")) &&
                  ((r.cacheID = x.cache), (r.v = e()));
              return r.v + r.offset;
            };
            return (r.offset = 0), e && r;
          },
          R = {
            s: M,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: D(function (e) {
              return arguments.length
                ? a.scrollTo(e, z.sc())
                : a.pageXOffset || s[M] || l[M] || u[M] || 0;
            }),
          },
          z = {
            s: O,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: R,
            sc: D(function (e) {
              return arguments.length
                ? a.scrollTo(R.sc(), e)
                : a.pageYOffset || s[O] || l[O] || u[O] || 0;
            }),
          },
          L = function (e, t) {
            return (
              ((t && t._ctx && t._ctx.selector) || i.utils.toArray)(e)[0] ||
              ("string" == typeof e && !1 !== i.config().nullTargetWarn
                ? console.warn("Element not found:", e)
                : null)
            );
          },
          F = function (e, t) {
            var r = t.s,
              n = t.sc;
            C(e) && (e = s.scrollingElement || l);
            var o = x.indexOf(e),
              a = n === z.sc ? 1 : 2;
            ~o || (o = x.push(e) - 1), x[o + a] || E(e, "scroll", A);
            var u = x[o + a],
              c =
                u ||
                (x[o + a] =
                  D(k(e, r), !0) ||
                  (C(e)
                    ? n
                    : D(function (t) {
                        return arguments.length ? (e[r] = t) : e[r];
                      })));
            return (
              (c.target = e),
              u || (c.smooth = "smooth" === i.getProperty(e, "scrollBehavior")),
              c
            );
          },
          B = function (e, t, r) {
            var n = e,
              i = e,
              o = b(),
              a = o,
              s = t || 50,
              l = Math.max(500, 3 * s),
              u = function (e, t) {
                var l = b();
                t || l - o > s
                  ? ((i = n), (n = e), (a = o), (o = l))
                  : r
                  ? (n += e)
                  : (n = i + ((e - i) / (l - a)) * (o - a));
              };
            return {
              update: u,
              reset: function () {
                (i = n = r ? 0 : n), (a = o = 0);
              },
              getVelocity: function (e) {
                var t = a,
                  s = i,
                  c = b();
                return (
                  (e || 0 === e) && e !== n && u(e),
                  o === a || c - a > l
                    ? 0
                    : ((n + (r ? s : -s)) / ((r ? c : o) - t)) * 1e3
                );
              },
            };
          },
          j = function (e, t) {
            return (
              t && !e._gsapAllow && e.preventDefault(),
              e.changedTouches ? e.changedTouches[0] : e
            );
          },
          q = function (e) {
            var t = Math.max.apply(Math, e),
              r = Math.min.apply(Math, e);
            return Math.abs(t) >= Math.abs(r) ? t : r;
          },
          I = function () {
            (f = i.core.globals().ScrollTrigger) && f.core && S();
          },
          W = function (e) {
            return (
              (i = e || _()),
              !o &&
                i &&
                "undefined" != typeof document &&
                document.body &&
                ((a = window),
                (l = (s = document).documentElement),
                (u = s.body),
                (d = [a, s, l, u]),
                i.utils.clamp,
                (m = i.core.context || function () {}),
                (p = "onpointerenter" in u ? "pointer" : "mouse"),
                (c = U.isTouch =
                  a.matchMedia &&
                  a.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in a ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0
                    ? 2
                    : 0),
                (g = U.eventTypes =
                  (
                    "ontouchstart" in l
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in l
                      ? "pointerdown,pointermove,pointercancel,pointerup"
                      : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (v = 0);
                }, 500),
                I(),
                (o = 1)),
              o
            );
          };
        (R.op = z), (x.cache = 0);
        var U = /*#__PURE__*/ (function () {
          function e(e) {
            this.init(e);
          }
          return (
            (e.prototype.init = function (e) {
              o || W(i) || console.warn("Please gsap.registerPlugin(Observer)"),
                f || I();
              var t = e.tolerance,
                r = e.dragMinimum,
                n = e.type,
                d = e.target,
                _ = e.lineHeight,
                v = e.debounce,
                x = e.preventDefault,
                w = e.onStop,
                T = e.onStopDelay,
                S = e.ignore,
                k = e.wheelSpeed,
                M = e.event,
                O = e.onDragStart,
                D = e.onDragEnd,
                U = e.onDrag,
                N = e.onPress,
                Y = e.onRelease,
                H = e.onRight,
                X = e.onLeft,
                V = e.onUp,
                Q = e.onDown,
                G = e.onChangeX,
                $ = e.onChangeY,
                K = e.onChange,
                J = e.onToggleX,
                Z = e.onToggleY,
                ee = e.onHover,
                et = e.onHoverEnd,
                er = e.onMove,
                en = e.ignoreCheck,
                ei = e.isNormalizer,
                eo = e.onGestureStart,
                ea = e.onGestureEnd,
                es = e.onWheel,
                el = e.onEnable,
                eu = e.onDisable,
                ec = e.onClick,
                ep = e.scrollSpeed,
                ef = e.capture,
                ed = e.allowClicks,
                eh = e.lockAxis,
                eg = e.onLockAxis;
              (this.target = d = L(d) || l),
                (this.vars = e),
                S && (S = i.utils.toArray(S)),
                (t = t || 1e-9),
                (r = r || 0),
                (k = k || 1),
                (ep = ep || 1),
                (n = n || "wheel,touch,pointer"),
                (v = !1 !== v),
                _ || (_ = parseFloat(a.getComputedStyle(u).lineHeight) || 22);
              var em,
                e_,
                ev,
                ey,
                ex,
                ew,
                eb,
                eT = this,
                eS = 0,
                ek = 0,
                eC = e.passive || !x,
                eE = F(d, R),
                eP = F(d, z),
                eM = eE(),
                eO = eP(),
                eA =
                  ~n.indexOf("touch") &&
                  !~n.indexOf("pointer") &&
                  "pointerdown" === g[0],
                eD = C(d),
                eR = d.ownerDocument || s,
                ez = [0, 0, 0],
                eL = [0, 0, 0],
                eF = 0,
                eB = function () {
                  return (eF = b());
                },
                ej = function (e, t) {
                  return (
                    ((eT.event = e) && S && ~S.indexOf(e.target)) ||
                    (t && eA && "touch" !== e.pointerType) ||
                    (en && en(e, t))
                  );
                },
                eq = function () {
                  var e = (eT.deltaX = q(ez)),
                    r = (eT.deltaY = q(eL)),
                    n = Math.abs(e) >= t,
                    i = Math.abs(r) >= t;
                  K && (n || i) && K(eT, e, r, ez, eL),
                    n &&
                      (H && eT.deltaX > 0 && H(eT),
                      X && eT.deltaX < 0 && X(eT),
                      G && G(eT),
                      J && eT.deltaX < 0 != eS < 0 && J(eT),
                      (eS = eT.deltaX),
                      (ez[0] = ez[1] = ez[2] = 0)),
                    i &&
                      (Q && eT.deltaY > 0 && Q(eT),
                      V && eT.deltaY < 0 && V(eT),
                      $ && $(eT),
                      Z && eT.deltaY < 0 != ek < 0 && Z(eT),
                      (ek = eT.deltaY),
                      (eL[0] = eL[1] = eL[2] = 0)),
                    (ey || ev) &&
                      (er && er(eT), ev && (U(eT), (ev = !1)), (ey = !1)),
                    ew && ((ew = !1), 1) && eg && eg(eT),
                    ex && (es(eT), (ex = !1)),
                    (em = 0);
                },
                eI = function (e, t, r) {
                  (ez[r] += e),
                    (eL[r] += t),
                    eT._vx.update(e),
                    eT._vy.update(t),
                    v ? em || (em = requestAnimationFrame(eq)) : eq();
                },
                eW = function (e, t) {
                  eh &&
                    !eb &&
                    ((eT.axis = eb = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                    (ew = !0)),
                    "y" !== eb && ((ez[2] += e), eT._vx.update(e, !0)),
                    "x" !== eb && ((eL[2] += t), eT._vy.update(t, !0)),
                    v ? em || (em = requestAnimationFrame(eq)) : eq();
                },
                eU = function (e) {
                  if (!ej(e, 1)) {
                    var t = (e = j(e, x)).clientX,
                      n = e.clientY,
                      i = t - eT.x,
                      o = n - eT.y,
                      a = eT.isDragging;
                    (eT.x = t),
                      (eT.y = n),
                      (a ||
                        Math.abs(eT.startX - t) >= r ||
                        Math.abs(eT.startY - n) >= r) &&
                        (U && (ev = !0),
                        a || (eT.isDragging = !0),
                        eW(i, o),
                        a || (O && O(eT)));
                  }
                },
                eN = (eT.onPress = function (e) {
                  ej(e, 1) ||
                    (e && e.button) ||
                    ((eT.axis = eb = null),
                    e_.pause(),
                    (eT.isPressed = !0),
                    (e = j(e)),
                    (eS = ek = 0),
                    (eT.startX = eT.x = e.clientX),
                    (eT.startY = eT.y = e.clientY),
                    eT._vx.reset(),
                    eT._vy.reset(),
                    E(ei ? d : eR, g[1], eU, eC, !0),
                    (eT.deltaX = eT.deltaY = 0),
                    N && N(eT));
                }),
                eY = (eT.onRelease = function (e) {
                  if (!ej(e, 1)) {
                    P(ei ? d : eR, g[1], eU, !0);
                    var t = !isNaN(eT.y - eT.startY),
                      r = eT.isDragging,
                      n =
                        r &&
                        (Math.abs(eT.x - eT.startX) > 3 ||
                          Math.abs(eT.y - eT.startY) > 3),
                      o = j(e);
                    !n &&
                      t &&
                      (eT._vx.reset(),
                      eT._vy.reset(),
                      x &&
                        ed &&
                        i.delayedCall(0.08, function () {
                          if (b() - eF > 300 && !e.defaultPrevented) {
                            if (e.target.click) e.target.click();
                            else if (eR.createEvent) {
                              var t = eR.createEvent("MouseEvents");
                              t.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                a,
                                1,
                                o.screenX,
                                o.screenY,
                                o.clientX,
                                o.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                e.target.dispatchEvent(t);
                            }
                          }
                        })),
                      (eT.isDragging = eT.isGesturing = eT.isPressed = !1),
                      w && r && !ei && e_.restart(!0),
                      D && r && D(eT),
                      Y && Y(eT, n);
                  }
                }),
                eH = function (e) {
                  return (
                    e.touches &&
                    e.touches.length > 1 &&
                    (eT.isGesturing = !0) &&
                    eo(e, eT.isDragging)
                  );
                },
                eX = function () {
                  return (eT.isGesturing = !1), ea(eT);
                },
                eV = function (e) {
                  if (!ej(e)) {
                    var t = eE(),
                      r = eP();
                    eI((t - eM) * ep, (r - eO) * ep, 1),
                      (eM = t),
                      (eO = r),
                      w && e_.restart(!0);
                  }
                },
                eQ = function (e) {
                  if (!ej(e)) {
                    (e = j(e, x)), es && (ex = !0);
                    var t =
                      (1 === e.deltaMode
                        ? _
                        : 2 === e.deltaMode
                        ? a.innerHeight
                        : 1) * k;
                    eI(e.deltaX * t, e.deltaY * t, 0),
                      w && !ei && e_.restart(!0);
                  }
                },
                eG = function (e) {
                  if (!ej(e)) {
                    var t = e.clientX,
                      r = e.clientY,
                      n = t - eT.x,
                      i = r - eT.y;
                    (eT.x = t),
                      (eT.y = r),
                      (ey = !0),
                      w && e_.restart(!0),
                      (n || i) && eW(n, i);
                  }
                },
                e$ = function (e) {
                  (eT.event = e), ee(eT);
                },
                eK = function (e) {
                  (eT.event = e), et(eT);
                },
                eJ = function (e) {
                  return ej(e) || (j(e, x) && ec(eT));
                };
              (e_ = eT._dc =
                i
                  .delayedCall(T || 0.25, function () {
                    eT._vx.reset(), eT._vy.reset(), e_.pause(), w && w(eT);
                  })
                  .pause()),
                (eT.deltaX = eT.deltaY = 0),
                (eT._vx = B(0, 50, !0)),
                (eT._vy = B(0, 50, !0)),
                (eT.scrollX = eE),
                (eT.scrollY = eP),
                (eT.isDragging = eT.isGesturing = eT.isPressed = !1),
                m(this),
                (eT.enable = function (e) {
                  return (
                    !eT.isEnabled &&
                      (E(eD ? eR : d, "scroll", A),
                      n.indexOf("scroll") >= 0 &&
                        E(eD ? eR : d, "scroll", eV, eC, ef),
                      n.indexOf("wheel") >= 0 && E(d, "wheel", eQ, eC, ef),
                      ((n.indexOf("touch") >= 0 && c) ||
                        n.indexOf("pointer") >= 0) &&
                        (E(d, g[0], eN, eC, ef),
                        E(eR, g[2], eY),
                        E(eR, g[3], eY),
                        ed && E(d, "click", eB, !0, !0),
                        ec && E(d, "click", eJ),
                        eo && E(eR, "gesturestart", eH),
                        ea && E(eR, "gestureend", eX),
                        ee && E(d, p + "enter", e$),
                        et && E(d, p + "leave", eK),
                        er && E(d, p + "move", eG)),
                      (eT.isEnabled = !0),
                      e && e.type && eN(e),
                      el && el(eT)),
                    eT
                  );
                }),
                (eT.disable = function () {
                  eT.isEnabled &&
                    (y.filter(function (e) {
                      return e !== eT && C(e.target);
                    }).length || P(eD ? eR : d, "scroll", A),
                    eT.isPressed &&
                      (eT._vx.reset(),
                      eT._vy.reset(),
                      P(ei ? d : eR, g[1], eU, !0)),
                    P(eD ? eR : d, "scroll", eV, ef),
                    P(d, "wheel", eQ, ef),
                    P(d, g[0], eN, ef),
                    P(eR, g[2], eY),
                    P(eR, g[3], eY),
                    P(d, "click", eB, !0),
                    P(d, "click", eJ),
                    P(eR, "gesturestart", eH),
                    P(eR, "gestureend", eX),
                    P(d, p + "enter", e$),
                    P(d, p + "leave", eK),
                    P(d, p + "move", eG),
                    (eT.isEnabled = eT.isPressed = eT.isDragging = !1),
                    eu && eu(eT));
                }),
                (eT.kill = eT.revert =
                  function () {
                    eT.disable();
                    var e = y.indexOf(eT);
                    e >= 0 && y.splice(e, 1), h === eT && (h = 0);
                  }),
                y.push(eT),
                ei && C(d) && (h = eT),
                eT.enable(M);
            }),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            })(e.prototype, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            e
          );
        })();
        (U.version = "3.12.5"),
          (U.create = function (e) {
            return new U(e);
          }),
          (U.register = W),
          (U.getAll = function () {
            return y.slice();
          }),
          (U.getById = function (e) {
            return y.filter(function (t) {
              return t.vars.id === e;
            })[0];
          }),
          _() && i.registerPlugin(U);
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    "7wnFk": [
      function (e, t, r) {
        /*!
         * ScrollTrigger 3.12.5
         * https://gsap.com
         *
         * @license Copyright 2008-2024, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r),
          n.export(r, "ScrollTrigger", () => t_),
          n.export(r, "default", () => t_);
        var i,
          o,
          a,
          s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          _,
          v,
          y,
          x,
          w,
          b,
          T,
          S,
          k,
          C,
          E,
          P,
          M,
          O,
          A,
          D,
          R,
          z,
          L,
          F,
          B,
          j,
          q,
          I,
          W,
          U = e("./Observer.js"),
          N = 1,
          Y = Date.now,
          H = Y(),
          X = 0,
          V = 0,
          Q = function (e, t, r) {
            var n =
              el(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
            return (
              (r["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e
            );
          },
          G = function (e, t) {
            return t && (!el(e) || "clamp(" !== e.substr(0, 6))
              ? "clamp(" + e + ")"
              : e;
          },
          $ = function () {
            return (_ = 1);
          },
          K = function () {
            return (_ = 0);
          },
          J = function (e) {
            return e;
          },
          Z = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          ee = function () {
            return "undefined" != typeof window;
          },
          et = function () {
            return i || (ee() && (i = window.gsap) && i.registerPlugin && i);
          },
          er = function (e) {
            return !!~c.indexOf(e);
          },
          en = function (e) {
            return (
              ("Height" === e ? z : a["inner" + e]) ||
              l["client" + e] ||
              u["client" + e]
            );
          },
          ei = function (e) {
            return (
              (0, U._getProxyProp)(e, "getBoundingClientRect") ||
              (er(e)
                ? function () {
                    return (tc.width = a.innerWidth), (tc.height = z), tc;
                  }
                : function () {
                    return eO(e);
                  })
            );
          },
          eo = function (e, t, r) {
            var n = r.d,
              i = r.d2,
              o = r.a;
            return (o = (0, U._getProxyProp)(e, "getBoundingClientRect"))
              ? function () {
                  return o()[n];
                }
              : function () {
                  return (t ? en(i) : e["client" + i]) || 0;
                };
          },
          ea = function (e, t) {
            var r = t.s,
              n = t.d2,
              i = t.d,
              o = t.a;
            return Math.max(
              0,
              ((r = "scroll" + n), (o = (0, U._getProxyProp)(e, r)))
                ? o() - ei(e)()[i]
                : er(e)
                ? (l[r] || u[r]) - en(n)
                : e[r] - e["offset" + n]
            );
          },
          es = function (e, t) {
            for (var r = 0; r < b.length; r += 3)
              (!t || ~t.indexOf(b[r + 1])) && e(b[r], b[r + 1], b[r + 2]);
          },
          el = function (e) {
            return "string" == typeof e;
          },
          eu = function (e) {
            return "function" == typeof e;
          },
          ec = function (e) {
            return "number" == typeof e;
          },
          ep = function (e) {
            return "object" == typeof e;
          },
          ef = function (e, t, r) {
            return e && e.progress(t ? 0 : 1) && r && e.pause();
          },
          ed = function (e, t) {
            if (e.enabled) {
              var r = e._ctx
                ? e._ctx.add(function () {
                    return t(e);
                  })
                : t(e);
              r && r.totalTime && (e.callbackAnimation = r);
            }
          },
          eh = Math.abs,
          eg = "left",
          em = "right",
          e_ = "bottom",
          ev = "width",
          ey = "height",
          ex = "Right",
          ew = "Left",
          eb = "Bottom",
          eT = "padding",
          eS = "margin",
          ek = "Width",
          eC = "Height",
          eE = function (e) {
            return a.getComputedStyle(e);
          },
          eP = function (e) {
            var t = eE(e).position;
            e.style.position =
              "absolute" === t || "fixed" === t ? t : "relative";
          },
          eM = function (e, t) {
            for (var r in t) r in e || (e[r] = t[r]);
            return e;
          },
          eO = function (e, t) {
            var r =
                t &&
                "matrix(1, 0, 0, 1, 0, 0)" !== eE(e)[v] &&
                i
                  .to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                  })
                  .progress(1),
              n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n;
          },
          eA = function (e, t) {
            var r = t.d2;
            return e["offset" + r] || e["client" + r] || 0;
          },
          eD = function (e) {
            var t,
              r = [],
              n = e.labels,
              i = e.duration();
            for (t in n) r.push(n[t] / i);
            return r;
          },
          eR = function (e) {
            var t = i.utils.snap(e),
              r =
                Array.isArray(e) &&
                e.slice(0).sort(function (e, t) {
                  return e - t;
                });
            return r
              ? function (e, n, i) {
                  var o;
                  if ((void 0 === i && (i = 0.001), !n)) return t(e);
                  if (n > 0) {
                    for (e -= i, o = 0; o < r.length; o++)
                      if (r[o] >= e) return r[o];
                    return r[o - 1];
                  }
                  for (o = r.length, e += i; o--; ) if (r[o] <= e) return r[o];
                  return r[0];
                }
              : function (r, n, i) {
                  void 0 === i && (i = 0.001);
                  var o = t(r);
                  return !n || Math.abs(o - r) < i || o - r < 0 == n < 0
                    ? o
                    : t(n < 0 ? r - e : r + e);
                };
          },
          ez = function (e, t, r, n) {
            return r.split(",").forEach(function (r) {
              return e(t, r, n);
            });
          },
          eL = function (e, t, r, n, i) {
            return e.addEventListener(t, r, { passive: !n, capture: !!i });
          },
          eF = function (e, t, r, n) {
            return e.removeEventListener(t, r, !!n);
          },
          eB = function (e, t, r) {
            (r = r && r.wheelHandler) &&
              (e(t, "wheel", r), e(t, "touchmove", r));
          },
          ej = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          eq = { toggleActions: "play", anticipatePin: 0 },
          eI = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          eW = function (e, t) {
            if (el(e)) {
              var r = e.indexOf("="),
                n = ~r
                  ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1))
                  : 0;
              ~r &&
                (e.indexOf("%") > r && (n *= t / 100),
                (e = e.substr(0, r - 1))),
                (e =
                  n +
                  (e in eI
                    ? eI[e] * t
                    : ~e.indexOf("%")
                    ? (parseFloat(e) * t) / 100
                    : parseFloat(e) || 0));
            }
            return e;
          },
          eU = function (e, t, r, n, i, o, a, l) {
            var c = i.startColor,
              p = i.endColor,
              f = i.fontSize,
              d = i.indent,
              h = i.fontWeight,
              g = s.createElement("div"),
              m = er(r) || "fixed" === (0, U._getProxyProp)(r, "pinType"),
              _ = -1 !== e.indexOf("scroller"),
              v = m ? u : r,
              y = -1 !== e.indexOf("start"),
              x = y ? c : p,
              w =
                "border-color:" +
                x +
                ";font-size:" +
                f +
                ";color:" +
                x +
                ";font-weight:" +
                h +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (w += "position:" + ((_ || l) && m ? "fixed;" : "absolute;")),
              (_ || l || !m) &&
                (w +=
                  (n === U._vertical ? em : e_) +
                  ":" +
                  (o + parseFloat(d)) +
                  "px;"),
              a &&
                (w +=
                  "box-sizing:border-box;text-align:left;width:" +
                  a.offsetWidth +
                  "px;"),
              (g._isStart = y),
              g.setAttribute(
                "class",
                "gsap-marker-" + e + (t ? " marker-" + t : "")
              ),
              (g.style.cssText = w),
              (g.innerText = t || 0 === t ? e + "-" + t : e),
              v.children[0]
                ? v.insertBefore(g, v.children[0])
                : v.appendChild(g),
              (g._offset = g["offset" + n.op.d2]),
              eN(g, 0, n, y),
              g
            );
          },
          eN = function (e, t, r, n) {
            var o = { display: "block" },
              a = r[n ? "os2" : "p2"],
              s = r[n ? "p2" : "os2"];
            (e._isFlipped = n),
              (o[r.a + "Percent"] = n ? -100 : 0),
              (o[r.a] = n ? "1px" : 0),
              (o["border" + a + ek] = 1),
              (o["border" + s + ek] = 0),
              (o[r.p] = t + "px"),
              i.set(e, o);
          },
          eY = [],
          eH = {},
          eX = function () {
            return Y() - X > 34 && (j || (j = requestAnimationFrame(tt)));
          },
          eV = function () {
            (C && C.isPressed && !(C.startX > u.clientWidth)) ||
              (U._scrollers.cache++,
              C ? j || (j = requestAnimationFrame(tt)) : tt(),
              X || eZ("scrollStart"),
              (X = Y()));
          },
          eQ = function () {
            (M = a.innerWidth), (P = a.innerHeight);
          },
          eG = function () {
            U._scrollers.cache++,
              !(
                !m &&
                !k &&
                !s.fullscreenElement &&
                !s.webkitFullscreenElement &&
                (!E ||
                  M !== a.innerWidth ||
                  Math.abs(a.innerHeight - P) > 0.25 * a.innerHeight)
              ) || p.restart(!0);
          },
          e$ = {},
          eK = [],
          eJ = function e() {
            return eF(t_, "scrollEnd", e) || e9(!0);
          },
          eZ = function (e) {
            return (
              (e$[e] &&
                e$[e].map(function (e) {
                  return e();
                })) ||
              eK
            );
          },
          e0 = [],
          e1 = function (e) {
            for (var t = 0; t < e0.length; t += 5)
              (!e || (e0[t + 4] && e0[t + 4].query === e)) &&
                ((e0[t].style.cssText = e0[t + 1]),
                e0[t].getBBox &&
                  e0[t].setAttribute("transform", e0[t + 2] || ""),
                (e0[t + 3].uncache = 1));
          },
          e2 = function (e, t) {
            var r;
            for (y = 0; y < eY.length; y++)
              (r = eY[y]) &&
                (!t || r._ctx === t) &&
                (e ? r.kill(1) : r.revert(!0, !0));
            (L = !0), t && e1(t), t || eZ("revert");
          },
          e5 = function (e, t) {
            U._scrollers.cache++,
              (t || !q) &&
                (0, U._scrollers).forEach(function (e) {
                  return eu(e) && e.cacheID++ && (e.rec = 0);
                }),
              el(e) && (a.history.scrollRestoration = D = e);
          },
          e3 = 0,
          e8 = function () {
            if (I !== e3) {
              var e = (I = e3);
              requestAnimationFrame(function () {
                return e === e3 && e9(!0);
              });
            }
          },
          e4 = function () {
            u.appendChild(R),
              (z = (!C && R.offsetHeight) || a.innerHeight),
              u.removeChild(R);
          },
          e6 = function (e) {
            return f(
              ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
            ).forEach(function (t) {
              return (t.style.display = e ? "none" : "block");
            });
          },
          e9 = function (e, t) {
            if (X && !e && !L) {
              eL(t_, "scrollEnd", eJ);
              return;
            }
            e4(),
              (q = t_.isRefreshing = !0),
              (0, U._scrollers).forEach(function (e) {
                return eu(e) && ++e.cacheID && (e.rec = e());
              });
            var r = eZ("refreshInit");
            T && t_.sort(),
              t || e2(),
              (0, U._scrollers).forEach(function (e) {
                eu(e) &&
                  (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
              }),
              eY.slice(0).forEach(function (e) {
                return e.refresh();
              }),
              (L = !1),
              eY.forEach(function (e) {
                if (e._subPinOffset && e.pin) {
                  var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    r = e.pin[t];
                  e.revert(!0, 1),
                    e.adjustPinSpacing(e.pin[t] - r),
                    e.refresh();
                }
              }),
              (F = 1),
              e6(!0),
              eY.forEach(function (e) {
                var t = ea(e.scroller, e._dir),
                  r = "max" === e.vars.end || (e._endClamp && e.end > t),
                  n = e._startClamp && e.start >= t;
                (r || n) &&
                  e.setPositions(
                    n ? t - 1 : e.start,
                    r ? Math.max(n ? t : e.start + 1, t) : e.end,
                    !0
                  );
              }),
              e6(!1),
              (F = 0),
              r.forEach(function (e) {
                return e && e.render && e.render(-1);
              }),
              (0, U._scrollers).forEach(function (e) {
                eu(e) &&
                  (e.smooth &&
                    requestAnimationFrame(function () {
                      return (e.target.style.scrollBehavior = "smooth");
                    }),
                  e.rec && e(e.rec));
              }),
              e5(D, 1),
              p.pause(),
              e3++,
              (q = 2),
              tt(2),
              eY.forEach(function (e) {
                return eu(e.vars.onRefresh) && e.vars.onRefresh(e);
              }),
              (q = t_.isRefreshing = !1),
              eZ("refresh");
          },
          e7 = 0,
          te = 1,
          tt = function (e) {
            if (2 === e || (!q && !L)) {
              (t_.isUpdating = !0), W && W.update(0);
              var t = eY.length,
                r = Y(),
                n = r - H >= 50,
                i = t && eY[0].scroll();
              if (
                ((te = e7 > i ? -1 : 1),
                q || (e7 = i),
                n &&
                  (X && !_ && r - X > 200 && ((X = 0), eZ("scrollEnd")),
                  (h = H),
                  (H = r)),
                te < 0)
              ) {
                for (y = t; y-- > 0; ) eY[y] && eY[y].update(0, n);
                te = 1;
              } else for (y = 0; y < t; y++) eY[y] && eY[y].update(0, n);
              t_.isUpdating = !1;
            }
            j = 0;
          },
          tr = [
            eg,
            "top",
            e_,
            em,
            eS + eb,
            eS + ex,
            eS + "Top",
            eS + ew,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          tn = tr.concat([
            ev,
            ey,
            "boxSizing",
            "max" + ek,
            "max" + eC,
            "position",
            eS,
            eT,
            eT + "Top",
            eT + ex,
            eT + eb,
            eT + ew,
          ]),
          ti = function (e, t, r) {
            ts(r);
            var n = e._gsap;
            if (n.spacerIsNative) ts(n.spacerState);
            else if (e._gsap.swappedIn) {
              var i = t.parentNode;
              i && (i.insertBefore(e, t), i.removeChild(t));
            }
            e._gsap.swappedIn = !1;
          },
          to = function (e, t, r, n) {
            if (!e._gsap.swappedIn) {
              for (var i, o = tr.length, a = t.style, s = e.style; o--; )
                a[(i = tr[o])] = r[i];
              (a.position =
                "absolute" === r.position ? "absolute" : "relative"),
                "inline" === r.display && (a.display = "inline-block"),
                (s[e_] = s[em] = "auto"),
                (a.flexBasis = r.flexBasis || "auto"),
                (a.overflow = "visible"),
                (a.boxSizing = "border-box"),
                (a[ev] = eA(e, U._horizontal) + "px"),
                (a[ey] = eA(e, U._vertical) + "px"),
                (a[eT] = s[eS] = s.top = s[eg] = "0"),
                ts(n),
                (s[ev] = s["max" + ek] = r[ev]),
                (s[ey] = s["max" + eC] = r[ey]),
                (s[eT] = r[eT]),
                e.parentNode !== t &&
                  (e.parentNode.insertBefore(t, e), t.appendChild(e)),
                (e._gsap.swappedIn = !0);
            }
          },
          ta = /([A-Z])/g,
          ts = function (e) {
            if (e) {
              var t,
                r,
                n = e.t.style,
                o = e.length,
                a = 0;
              for (
                (e.t._gsap || i.core.getCache(e.t)).uncache = 1;
                a < o;
                a += 2
              )
                (r = e[a + 1]),
                  (t = e[a]),
                  r
                    ? (n[t] = r)
                    : n[t] &&
                      n.removeProperty(t.replace(ta, "-$1").toLowerCase());
            }
          },
          tl = function (e) {
            for (var t = tn.length, r = e.style, n = [], i = 0; i < t; i++)
              n.push(tn[i], r[tn[i]]);
            return (n.t = e), n;
          },
          tu = function (e, t, r) {
            for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2)
              (n = e[a]), i.push(n, n in t ? t[n] : e[a + 1]);
            return (i.t = e.t), i;
          },
          tc = { left: 0, top: 0 },
          tp = function (e, t, r, n, o, a, s, c, p, f, d, h, g, m) {
            eu(e) && (e = e(c)),
              el(e) &&
                "max" === e.substr(0, 3) &&
                (e = h + ("=" === e.charAt(4) ? eW("0" + e.substr(3), r) : 0));
            var _,
              v,
              y,
              x = g ? g.time() : 0;
            if ((g && g.seek(0), isNaN(e) || (e = +e), ec(e)))
              g &&
                (e = i.utils.mapRange(
                  g.scrollTrigger.start,
                  g.scrollTrigger.end,
                  0,
                  h,
                  e
                )),
                s && eN(s, r, n, !0);
            else {
              eu(t) && (t = t(c));
              var w,
                b,
                T,
                S,
                k = (e || "0").split(" ");
              (w = eO((y = (0, U._getTarget)(t, c) || u)) || {}).left ||
                w.top ||
                "none" !== eE(y).display ||
                ((S = y.style.display),
                (y.style.display = "block"),
                (w = eO(y)),
                S ? (y.style.display = S) : y.style.removeProperty("display")),
                (b = eW(k[0], w[n.d])),
                (T = eW(k[1] || "0", r)),
                (e = w[n.p] - p[n.p] - f + b + o - T),
                s && eN(s, T, n, r - T < 20 || (s._isStart && T > 20)),
                (r -= r - T);
            }
            if ((m && ((c[m] = e || -0.001), e < 0 && (e = 0)), a)) {
              var C = e + r,
                E = a._isStart;
              (_ = "scroll" + n.d2),
                eN(
                  a,
                  C,
                  n,
                  (E && C > 20) ||
                    (!E &&
                      (d ? Math.max(u[_], l[_]) : a.parentNode[_]) <= C + 1)
                ),
                d &&
                  ((p = eO(s)),
                  d &&
                    (a.style[n.op.p] = p[n.op.p] - n.op.m - a._offset + "px"));
            }
            return (
              g &&
                y &&
                ((_ = eO(y)),
                g.seek(h),
                (v = eO(y)),
                (g._caScrollDist = _[n.p] - v[n.p]),
                (e = (e / g._caScrollDist) * h)),
              g && g.seek(x),
              g ? e : Math.round(e)
            );
          },
          tf = /(webkit|moz|length|cssText|inset)/i,
          td = function (e, t, r, n) {
            if (e.parentNode !== t) {
              var o,
                a,
                s = e.style;
              if (t === u) {
                for (o in ((e._stOrig = s.cssText), (a = eE(e))))
                  +o ||
                    tf.test(o) ||
                    !a[o] ||
                    "string" != typeof s[o] ||
                    "0" === o ||
                    (s[o] = a[o]);
                (s.top = r), (s.left = n);
              } else s.cssText = e._stOrig;
              (i.core.getCache(e).uncache = 1), t.appendChild(e);
            }
          },
          th = function (e, t, r) {
            var n = t,
              i = n;
            return function (t) {
              var o = Math.round(e());
              return (
                o !== n &&
                  o !== i &&
                  Math.abs(o - n) > 3 &&
                  Math.abs(o - i) > 3 &&
                  ((t = o), r && r()),
                (i = n),
                (n = t),
                t
              );
            };
          },
          tg = function (e, t, r) {
            var n = {};
            (n[t.p] = "+=" + r), i.set(e, n);
          },
          tm = function (e, t) {
            var r = (0, U._getScrollFunc)(e, t),
              n = "_scroll" + t.p2,
              o = function t(o, a, s, l, u) {
                var c = t.tween,
                  p = a.onComplete,
                  f = {};
                s = s || r();
                var d = th(r, s, function () {
                  c.kill(), (t.tween = 0);
                });
                return (
                  (u = (l && u) || 0),
                  (l = l || o - s),
                  c && c.kill(),
                  (a[n] = o),
                  (a.inherit = !1),
                  (a.modifiers = f),
                  (f[n] = function () {
                    return d(s + l * c.ratio + u * c.ratio * c.ratio);
                  }),
                  (a.onUpdate = function () {
                    U._scrollers.cache++, t.tween && tt();
                  }),
                  (a.onComplete = function () {
                    (t.tween = 0), p && p.call(c);
                  }),
                  (c = t.tween = i.to(e, a))
                );
              };
            return (
              (e[n] = r),
              (r.wheelHandler = function () {
                return o.tween && o.tween.kill() && (o.tween = 0);
              }),
              eL(e, "wheel", r.wheelHandler),
              t_.isTouch && eL(e, "touchmove", r.wheelHandler),
              o
            );
          },
          t_ = /*#__PURE__*/ (function () {
            function e(t, r) {
              o ||
                e.register(i) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                A(this),
                this.init(t, r);
            }
            return (
              (e.prototype.init = function (t, r) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  !V)
                ) {
                  this.update = this.refresh = this.kill = J;
                  return;
                }
                var n,
                  o,
                  c,
                  p,
                  g,
                  v,
                  x,
                  w,
                  b,
                  k,
                  C,
                  E,
                  P,
                  M,
                  O,
                  A,
                  D,
                  R,
                  z,
                  L,
                  j,
                  I,
                  H,
                  $,
                  K,
                  ee,
                  et,
                  en,
                  es,
                  eg,
                  em,
                  e_,
                  ez,
                  eB,
                  eI,
                  eN,
                  eX,
                  eQ,
                  e$,
                  eK,
                  eZ,
                  e0 = (t = eM(
                    el(t) || ec(t) || t.nodeType ? { trigger: t } : t,
                    eq
                  )),
                  e1 = e0.onUpdate,
                  e2 = e0.toggleClass,
                  e5 = e0.id,
                  e3 = e0.onToggle,
                  e4 = e0.onRefresh,
                  e6 = e0.scrub,
                  e9 = e0.trigger,
                  e7 = e0.pin,
                  tt = e0.pinSpacing,
                  tr = e0.invalidateOnRefresh,
                  tn = e0.anticipatePin,
                  ta = e0.onScrubComplete,
                  tf = e0.onSnapComplete,
                  th = e0.once,
                  t_ = e0.snap,
                  tv = e0.pinReparent,
                  ty = e0.pinSpacer,
                  tx = e0.containerAnimation,
                  tw = e0.fastScrollEnd,
                  tb = e0.preventOverlaps,
                  tT =
                    t.horizontal ||
                    (t.containerAnimation && !1 !== t.horizontal)
                      ? U._horizontal
                      : U._vertical,
                  tS = !e6 && 0 !== e6,
                  tk = (0, U._getTarget)(t.scroller || a),
                  tC = i.core.getCache(tk),
                  tE = er(tk),
                  tP =
                    ("pinType" in t
                      ? t.pinType
                      : (0, U._getProxyProp)(tk, "pinType") ||
                        (tE && "fixed")) === "fixed",
                  tM = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                  tO = tS && t.toggleActions.split(" "),
                  tA = "markers" in t ? t.markers : eq.markers,
                  tD = tE ? 0 : parseFloat(eE(tk)["border" + tT.p2 + ek]) || 0,
                  tR = this,
                  tz =
                    t.onRefreshInit &&
                    function () {
                      return t.onRefreshInit(tR);
                    },
                  tL = eo(tk, tE, tT),
                  tF =
                    !tE || ~(0, U._proxies).indexOf(tk)
                      ? ei(tk)
                      : function () {
                          return tc;
                        },
                  tB = 0,
                  tj = 0,
                  tq = 0,
                  tI = (0, U._getScrollFunc)(tk, tT);
                if (
                  ((tR._startClamp = tR._endClamp = !1),
                  (tR._dir = tT),
                  (tn *= 45),
                  (tR.scroller = tk),
                  (tR.scroll = tx ? tx.time.bind(tx) : tI),
                  (v = tI()),
                  (tR.vars = t),
                  (r = r || t.animation),
                  "refreshPriority" in t &&
                    ((T = 1), -9999 === t.refreshPriority && (W = tR)),
                  (tC.tweenScroll = tC.tweenScroll || {
                    top: tm(tk, U._vertical),
                    left: tm(tk, U._horizontal),
                  }),
                  (tR.tweenTo = c = tC.tweenScroll[tT.p]),
                  (tR.scrubDuration = function (e) {
                    (eI = ec(e) && e)
                      ? eB
                        ? eB.duration(e)
                        : (eB = i.to(r, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: eI,
                            paused: !0,
                            onComplete: function () {
                              return ta && ta(tR);
                            },
                          }))
                      : (eB && eB.progress(1).kill(), (eB = 0));
                  }),
                  r &&
                    ((r.vars.lazy = !1),
                    (r._initted && !tR.isReverted) ||
                      (!1 !== r.vars.immediateRender &&
                        !1 !== t.immediateRender &&
                        r.duration() &&
                        r.render(0, !0, !0)),
                    (tR.animation = r.pause()),
                    (r.scrollTrigger = tR),
                    tR.scrubDuration(e6),
                    (e_ = 0),
                    e5 || (e5 = r.vars.id)),
                  t_ &&
                    ((!ep(t_) || t_.push) && (t_ = { snapTo: t_ }),
                    "scrollBehavior" in u.style &&
                      i.set(tE ? [u, l] : tk, { scrollBehavior: "auto" }),
                    (0, U._scrollers).forEach(function (e) {
                      return (
                        eu(e) &&
                        e.target === (tE ? s.scrollingElement || l : tk) &&
                        (e.smooth = !1)
                      );
                    }),
                    (g = eu(t_.snapTo)
                      ? t_.snapTo
                      : "labels" === t_.snapTo
                      ? ((n = r),
                        function (e) {
                          return i.utils.snap(eD(n), e);
                        })
                      : "labelsDirectional" === t_.snapTo
                      ? ((o = r),
                        function (e, t) {
                          return eR(eD(o))(e, t.direction);
                        })
                      : !1 !== t_.directional
                      ? function (e, t) {
                          return eR(t_.snapTo)(
                            e,
                            Y() - tj < 500 ? 0 : t.direction
                          );
                        }
                      : i.utils.snap(t_.snapTo)),
                    (eN = ep((eN = t_.duration || { min: 0.1, max: 2 }))
                      ? d(eN.min, eN.max)
                      : d(eN, eN)),
                    (eX = i
                      .delayedCall(t_.delay || eI / 2 || 0.1, function () {
                        var e = tI(),
                          t = Y() - tj < 500,
                          n = c.tween;
                        if (
                          (t || 10 > Math.abs(tR.getVelocity())) &&
                          !n &&
                          !_ &&
                          tB !== e
                        ) {
                          var o,
                            a,
                            s = (e - w) / A,
                            l = r && !tS ? r.totalProgress() : s,
                            u = t ? 0 : ((l - ez) / (Y() - h)) * 1e3 || 0,
                            p = i.utils.clamp(
                              -s,
                              1 - s,
                              (eh(u / 2) * u) / 0.185
                            ),
                            f = s + (!1 === t_.inertia ? 0 : p),
                            d = t_,
                            m = d.onStart,
                            v = d.onInterrupt,
                            y = d.onComplete;
                          if (
                            (ec((o = g(f, tR))) || (o = f),
                            (a = Math.round(w + o * A)),
                            e <= b && e >= w && a !== e)
                          ) {
                            if (n && !n._initted && n.data <= eh(a - e)) return;
                            !1 === t_.inertia && (p = o - s),
                              c(
                                a,
                                {
                                  duration: eN(
                                    eh(
                                      (0.185 * Math.max(eh(f - l), eh(o - l))) /
                                        u /
                                        0.05 || 0
                                    )
                                  ),
                                  ease: t_.ease || "power3",
                                  data: eh(a - e),
                                  onInterrupt: function () {
                                    return eX.restart(!0) && v && v(tR);
                                  },
                                  onComplete: function () {
                                    tR.update(),
                                      (tB = tI()),
                                      r &&
                                        (eB
                                          ? eB.resetTo(
                                              "totalProgress",
                                              o,
                                              r._tTime / r._tDur
                                            )
                                          : r.progress(o)),
                                      (e_ = ez =
                                        r && !tS
                                          ? r.totalProgress()
                                          : tR.progress),
                                      tf && tf(tR),
                                      y && y(tR);
                                  },
                                },
                                e,
                                p * A,
                                a - e - p * A
                              ),
                              m && m(tR, c.tween);
                          }
                        } else tR.isActive && tB !== e && eX.restart(!0);
                      })
                      .pause())),
                  e5 && (eH[e5] = tR),
                  (eZ =
                    (e9 = tR.trigger =
                      (0, U._getTarget)(e9 || (!0 !== e7 && e7))) &&
                    e9._gsap &&
                    e9._gsap.stRevert) && (eZ = eZ(tR)),
                  (e7 = !0 === e7 ? e9 : (0, U._getTarget)(e7)),
                  el(e2) && (e2 = { targets: e9, className: e2 }),
                  e7 &&
                    (!1 === tt ||
                      tt === eS ||
                      (tt =
                        (!!tt ||
                          !e7.parentNode ||
                          !e7.parentNode.style ||
                          "flex" !== eE(e7.parentNode).display) &&
                        eT),
                    (tR.pin = e7),
                    (p = i.core.getCache(e7)).spacer
                      ? (D = p.pinState)
                      : (ty &&
                          ((ty = (0, U._getTarget)(ty)) &&
                            !ty.nodeType &&
                            (ty = ty.current || ty.nativeElement),
                          (p.spacerIsNative = !!ty),
                          ty && (p.spacerState = tl(ty))),
                        (p.spacer = L = ty || s.createElement("div")),
                        L.classList.add("pin-spacer"),
                        e5 && L.classList.add("pin-spacer-" + e5),
                        (p.pinState = D = tl(e7))),
                    !1 !== t.force3D && i.set(e7, { force3D: !0 }),
                    (tR.spacer = L = p.spacer),
                    (ee = (em = eE(e7))[tt + tT.os2]),
                    (I = i.getProperty(e7)),
                    (H = i.quickSetter(e7, tT.a, "px")),
                    to(e7, L, em),
                    (z = tl(e7))),
                  tA)
                ) {
                  (M = ep(tA) ? eM(tA, ej) : ej),
                    (E = eU("scroller-start", e5, tk, tT, M, 0)),
                    (P = eU("scroller-end", e5, tk, tT, M, 0, E)),
                    (j = E["offset" + tT.op.d2]);
                  var tW = (0, U._getTarget)(
                    (0, U._getProxyProp)(tk, "content") || tk
                  );
                  (k = this.markerStart = eU("start", e5, tW, tT, M, j, 0, tx)),
                    (C = this.markerEnd = eU("end", e5, tW, tT, M, j, 0, tx)),
                    tx && (eK = i.quickSetter([k, C], tT.a, "px")),
                    tP ||
                      (U._proxies.length &&
                        !0 === (0, U._getProxyProp)(tk, "fixedMarkers")) ||
                      (eP(tE ? u : tk),
                      i.set([E, P], { force3D: !0 }),
                      (en = i.quickSetter(E, tT.a, "px")),
                      (eg = i.quickSetter(P, tT.a, "px")));
                }
                if (tx) {
                  var tU = tx.vars.onUpdate,
                    tN = tx.vars.onUpdateParams;
                  tx.eventCallback("onUpdate", function () {
                    tR.update(0, 0, 1), tU && tU.apply(tx, tN || []);
                  });
                }
                if (
                  ((tR.previous = function () {
                    return eY[eY.indexOf(tR) - 1];
                  }),
                  (tR.next = function () {
                    return eY[eY.indexOf(tR) + 1];
                  }),
                  (tR.revert = function (e, t) {
                    if (!t) return tR.kill(!0);
                    var n = !1 !== e || !tR.enabled,
                      i = m;
                    n !== tR.isReverted &&
                      (n &&
                        ((eQ = Math.max(tI(), tR.scroll.rec || 0)),
                        (tq = tR.progress),
                        (e$ = r && r.progress())),
                      k &&
                        [k, C, E, P].forEach(function (e) {
                          return (e.style.display = n ? "none" : "block");
                        }),
                      n && ((m = tR), tR.update(n)),
                      !e7 ||
                        (tv && tR.isActive) ||
                        (n ? ti(e7, L, D) : to(e7, L, eE(e7), et)),
                      n || tR.update(n),
                      (m = i),
                      (tR.isReverted = n));
                  }),
                  (tR.refresh = function (n, o, a, p) {
                    if ((!m && tR.enabled) || o) {
                      if (e7 && n && X) {
                        eL(e, "scrollEnd", eJ);
                        return;
                      }
                      !q && tz && tz(tR),
                        (m = tR),
                        c.tween && !a && (c.tween.kill(), (c.tween = 0)),
                        eB && eB.pause(),
                        tr && r && r.revert({ kill: !1 }).invalidate(),
                        tR.isReverted || tR.revert(!0, !0),
                        (tR._subPinOffset = !1);
                      var f,
                        d,
                        h,
                        g,
                        _,
                        y,
                        T,
                        M,
                        B,
                        j,
                        W,
                        N,
                        H,
                        V = tL(),
                        G = tF(),
                        J = tx ? tx.duration() : ea(tk, tT),
                        Z = A <= 0.01,
                        ee = 0,
                        er = p || 0,
                        en = ep(a) ? a.end : t.end,
                        ei = t.endTrigger || e9,
                        eo = ep(a)
                          ? a.start
                          : t.start ||
                            (0 !== t.start && e9 ? (e7 ? "0 0" : "0 100%") : 0),
                        ec = (tR.pinnedContainer =
                          t.pinnedContainer &&
                          (0, U._getTarget)(t.pinnedContainer, tR)),
                        ef = (e9 && Math.max(0, eY.indexOf(tR))) || 0,
                        ed = ef;
                      for (
                        tA &&
                        ep(a) &&
                        ((N = i.getProperty(E, tT.p)),
                        (H = i.getProperty(P, tT.p)));
                        ed--;

                      )
                        (y = eY[ed]).end || y.refresh(0, 1) || (m = tR),
                          (T = y.pin) &&
                            (T === e9 || T === e7 || T === ec) &&
                            !y.isReverted &&
                            (j || (j = []), j.unshift(y), y.revert(!0, !0)),
                          y !== eY[ed] && (ef--, ed--);
                      for (
                        eu(eo) && (eo = eo(tR)),
                          w =
                            tp(
                              (eo = Q(eo, "start", tR)),
                              e9,
                              V,
                              tT,
                              tI(),
                              k,
                              E,
                              tR,
                              G,
                              tD,
                              tP,
                              J,
                              tx,
                              tR._startClamp && "_startClamp"
                            ) || (e7 ? -0.001 : 0),
                          eu(en) && (en = en(tR)),
                          el(en) &&
                            !en.indexOf("+=") &&
                            (~en.indexOf(" ")
                              ? (en = (el(eo) ? eo.split(" ")[0] : "") + en)
                              : ((ee = eW(en.substr(2), V)),
                                (en = el(eo)
                                  ? eo
                                  : (tx
                                      ? i.utils.mapRange(
                                          0,
                                          tx.duration(),
                                          tx.scrollTrigger.start,
                                          tx.scrollTrigger.end,
                                          w
                                        )
                                      : w) + ee),
                                (ei = e9))),
                          en = Q(en, "end", tR),
                          b =
                            Math.max(
                              w,
                              tp(
                                en || (ei ? "100% 0" : J),
                                ei,
                                V,
                                tT,
                                tI() + ee,
                                C,
                                P,
                                tR,
                                G,
                                tD,
                                tP,
                                J,
                                tx,
                                tR._endClamp && "_endClamp"
                              )
                            ) || -0.001,
                          ee = 0,
                          ed = ef;
                        ed--;

                      )
                        (T = (y = eY[ed]).pin) &&
                          y.start - y._pinPush <= w &&
                          !tx &&
                          y.end > 0 &&
                          ((f =
                            y.end -
                            (tR._startClamp ? Math.max(0, y.start) : y.start)),
                          ((T === e9 && y.start - y._pinPush < w) ||
                            T === ec) &&
                            isNaN(eo) &&
                            (ee += f * (1 - y.progress)),
                          T === e7 && (er += f));
                      if (
                        ((w += ee),
                        (b += ee),
                        tR._startClamp && (tR._startClamp += ee),
                        tR._endClamp &&
                          !q &&
                          ((tR._endClamp = b || -0.001),
                          (b = Math.min(b, ea(tk, tT)))),
                        (A = b - w || ((w -= 0.01) && 0.001)),
                        Z &&
                          (tq = i.utils.clamp(
                            0,
                            1,
                            i.utils.normalize(w, b, eQ)
                          )),
                        (tR._pinPush = er),
                        k &&
                          ee &&
                          (((f = {})[tT.a] = "+=" + ee),
                          ec && (f[tT.p] = "-=" + tI()),
                          i.set([k, C], f)),
                        e7 && !(F && tR.end >= ea(tk, tT)))
                      )
                        (f = eE(e7)),
                          (g = tT === U._vertical),
                          (h = tI()),
                          ($ = parseFloat(I(tT.a)) + er),
                          !J &&
                            b > 1 &&
                            ((W = {
                              style: (W = (tE ? s.scrollingElement || l : tk)
                                .style),
                              value: W["overflow" + tT.a.toUpperCase()],
                            }),
                            tE &&
                              "scroll" !==
                                eE(u)["overflow" + tT.a.toUpperCase()] &&
                              (W.style["overflow" + tT.a.toUpperCase()] =
                                "scroll")),
                          to(e7, L, f),
                          (z = tl(e7)),
                          (d = eO(e7, !0)),
                          (M =
                            tP &&
                            (0, U._getScrollFunc)(
                              tk,
                              g ? U._horizontal : U._vertical
                            )()),
                          tt
                            ? (((et = [tt + tT.os2, A + er + "px"]).t = L),
                              (ed = tt === eT ? eA(e7, tT) + A + er : 0) &&
                                (et.push(tT.d, ed + "px"),
                                "auto" !== L.style.flexBasis &&
                                  (L.style.flexBasis = ed + "px")),
                              ts(et),
                              ec &&
                                eY.forEach(function (e) {
                                  e.pin === ec &&
                                    !1 !== e.vars.pinSpacing &&
                                    (e._subPinOffset = !0);
                                }),
                              tP && tI(eQ))
                            : (ed = eA(e7, tT)) &&
                              "auto" !== L.style.flexBasis &&
                              (L.style.flexBasis = ed + "px"),
                          tP &&
                            (((_ = {
                              top: d.top + (g ? h - w : M) + "px",
                              left: d.left + (g ? M : h - w) + "px",
                              boxSizing: "border-box",
                              position: "fixed",
                            })[ev] = _["max" + ek] =
                              Math.ceil(d.width) + "px"),
                            (_[ey] = _["max" + eC] =
                              Math.ceil(d.height) + "px"),
                            (_[eS] =
                              _[eS + "Top"] =
                              _[eS + ex] =
                              _[eS + eb] =
                              _[eS + ew] =
                                "0"),
                            (_[eT] = f[eT]),
                            (_[eT + "Top"] = f[eT + "Top"]),
                            (_[eT + ex] = f[eT + ex]),
                            (_[eT + eb] = f[eT + eb]),
                            (_[eT + ew] = f[eT + ew]),
                            (R = tu(D, _, tv)),
                            q && tI(0)),
                          r
                            ? ((B = r._initted),
                              S(1),
                              r.render(r.duration(), !0, !0),
                              (K = I(tT.a) - $ + A + er),
                              (es = Math.abs(A - K) > 1),
                              tP && es && R.splice(R.length - 2, 2),
                              r.render(0, !0, !0),
                              B || r.invalidate(!0),
                              r.parent || r.totalTime(r.totalTime()),
                              S(0))
                            : (K = A),
                          W &&
                            (W.value
                              ? (W.style["overflow" + tT.a.toUpperCase()] =
                                  W.value)
                              : W.style.removeProperty("overflow-" + tT.a));
                      else if (e9 && tI() && !tx)
                        for (d = e9.parentNode; d && d !== u; )
                          d._pinOffset &&
                            ((w -= d._pinOffset), (b -= d._pinOffset)),
                            (d = d.parentNode);
                      j &&
                        j.forEach(function (e) {
                          return e.revert(!1, !0);
                        }),
                        (tR.start = w),
                        (tR.end = b),
                        (v = x = q ? eQ : tI()),
                        tx || q || (v < eQ && tI(eQ), (tR.scroll.rec = 0)),
                        tR.revert(!1, !0),
                        (tj = Y()),
                        eX && ((tB = -1), eX.restart(!0)),
                        (m = 0),
                        r &&
                          tS &&
                          (r._initted || e$) &&
                          r.progress() !== e$ &&
                          r.progress(e$ || 0, !0).render(r.time(), !0, !0),
                        (Z || tq !== tR.progress || tx || tr) &&
                          (r &&
                            !tS &&
                            r.totalProgress(
                              tx && w < -0.001 && !tq
                                ? i.utils.normalize(w, b, 0)
                                : tq,
                              !0
                            ),
                          (tR.progress = Z || (v - w) / A === tq ? 0 : tq)),
                        e7 &&
                          tt &&
                          (L._pinOffset = Math.round(tR.progress * K)),
                        eB && eB.invalidate(),
                        isNaN(N) ||
                          ((N -= i.getProperty(E, tT.p)),
                          (H -= i.getProperty(P, tT.p)),
                          tg(E, tT, N),
                          tg(k, tT, N - (p || 0)),
                          tg(P, tT, H),
                          tg(C, tT, H - (p || 0))),
                        Z && !q && tR.update(),
                        !e4 || q || O || ((O = !0), e4(tR), (O = !1));
                    }
                  }),
                  (tR.getVelocity = function () {
                    return ((tI() - x) / (Y() - h)) * 1e3 || 0;
                  }),
                  (tR.endAnimation = function () {
                    ef(tR.callbackAnimation),
                      r &&
                        (eB
                          ? eB.progress(1)
                          : r.paused()
                          ? tS || ef(r, tR.direction < 0, 1)
                          : ef(r, r.reversed()));
                  }),
                  (tR.labelToScroll = function (e) {
                    return (
                      (r &&
                        r.labels &&
                        (w || tR.refresh() || w) +
                          (r.labels[e] / r.duration()) * A) ||
                      0
                    );
                  }),
                  (tR.getTrailing = function (e) {
                    var t = eY.indexOf(tR),
                      r =
                        tR.direction > 0
                          ? eY.slice(0, t).reverse()
                          : eY.slice(t + 1);
                    return (
                      el(e)
                        ? r.filter(function (t) {
                            return t.vars.preventOverlaps === e;
                          })
                        : r
                    ).filter(function (e) {
                      return tR.direction > 0 ? e.end <= w : e.start >= b;
                    });
                  }),
                  (tR.update = function (e, t, n) {
                    if (!tx || n || e) {
                      var i,
                        o,
                        a,
                        s,
                        l,
                        p,
                        d,
                        g = !0 === q ? eQ : tR.scroll(),
                        _ = e ? 0 : (g - w) / A,
                        y = _ < 0 ? 0 : _ > 1 ? 1 : _ || 0,
                        T = tR.progress;
                      if (
                        (t &&
                          ((x = v),
                          (v = tx ? tI() : g),
                          t_ &&
                            ((ez = e_),
                            (e_ = r && !tS ? r.totalProgress() : y))),
                        tn &&
                          e7 &&
                          !m &&
                          !N &&
                          X &&
                          (!y && w < g + ((g - x) / (Y() - h)) * tn
                            ? (y = 1e-4)
                            : 1 === y &&
                              b > g + ((g - x) / (Y() - h)) * tn &&
                              (y = 0.9999)),
                        y !== T && tR.enabled)
                      ) {
                        if (
                          ((s =
                            (l =
                              (i = tR.isActive = !!y && y < 1) !=
                              (!!T && T < 1)) || !!y != !!T),
                          (tR.direction = y > T ? 1 : -1),
                          (tR.progress = y),
                          s &&
                            !m &&
                            ((o = y && !T ? 0 : 1 === y ? 1 : 1 === T ? 2 : 3),
                            tS &&
                              ((a =
                                (!l && "none" !== tO[o + 1] && tO[o + 1]) ||
                                tO[o]),
                              (d =
                                r &&
                                ("complete" === a ||
                                  "reset" === a ||
                                  a in r)))),
                          tb &&
                            (l || d) &&
                            (d || e6 || !r) &&
                            (eu(tb)
                              ? tb(tR)
                              : tR.getTrailing(tb).forEach(function (e) {
                                  return e.endAnimation();
                                })),
                          !tS &&
                            (!eB || m || N
                              ? r && r.totalProgress(y, !!(m && (tj || e)))
                              : (eB._dp._time - eB._start !== eB._time &&
                                  eB.render(eB._dp._time - eB._start),
                                eB.resetTo
                                  ? eB.resetTo(
                                      "totalProgress",
                                      y,
                                      r._tTime / r._tDur
                                    )
                                  : ((eB.vars.totalProgress = y),
                                    eB.invalidate().restart()))),
                          e7)
                        ) {
                          if ((e && tt && (L.style[tt + tT.os2] = ee), tP)) {
                            if (s) {
                              if (
                                ((p =
                                  !e &&
                                  y > T &&
                                  b + 1 > g &&
                                  g + 1 >= ea(tk, tT)),
                                tv)
                              ) {
                                if (!e && (i || p)) {
                                  var S = eO(e7, !0),
                                    k = g - w;
                                  td(
                                    e7,
                                    u,
                                    S.top + (tT === U._vertical ? k : 0) + "px",
                                    S.left + (tT === U._vertical ? 0 : k) + "px"
                                  );
                                } else td(e7, L);
                              }
                              ts(i || p ? R : z),
                                (es && y < 1 && i) ||
                                  H($ + (1 !== y || p ? 0 : K));
                            }
                          } else H(Z($ + K * y));
                        }
                        !t_ || c.tween || m || N || eX.restart(!0),
                          e2 &&
                            (l || (th && y && (y < 1 || !B))) &&
                            f(e2.targets).forEach(function (e) {
                              return e.classList[i || th ? "add" : "remove"](
                                e2.className
                              );
                            }),
                          !e1 || tS || e || e1(tR),
                          s && !m
                            ? (tS &&
                                (d &&
                                  ("complete" === a
                                    ? r.pause().totalProgress(1)
                                    : "reset" === a
                                    ? r.restart(!0).pause()
                                    : "restart" === a
                                    ? r.restart(!0)
                                    : r[a]()),
                                e1 && e1(tR)),
                              (l || !B) &&
                                (e3 && l && ed(tR, e3),
                                tM[o] && ed(tR, tM[o]),
                                th && (1 === y ? tR.kill(!1, 1) : (tM[o] = 0)),
                                !l &&
                                  tM[(o = 1 === y ? 1 : 3)] &&
                                  ed(tR, tM[o])),
                              tw &&
                                !i &&
                                Math.abs(tR.getVelocity()) >
                                  (ec(tw) ? tw : 2500) &&
                                (ef(tR.callbackAnimation),
                                eB
                                  ? eB.progress(1)
                                  : ef(r, "reverse" === a ? 1 : !y, 1)))
                            : tS && e1 && !m && e1(tR);
                      }
                      if (eg) {
                        var C = tx
                          ? (g / tx.duration()) * (tx._caScrollDist || 0)
                          : g;
                        en(C + (E._isFlipped ? 1 : 0)), eg(C);
                      }
                      eK && eK((-g / tx.duration()) * (tx._caScrollDist || 0));
                    }
                  }),
                  (tR.enable = function (t, r) {
                    tR.enabled ||
                      ((tR.enabled = !0),
                      eL(tk, "resize", eG),
                      tE || eL(tk, "scroll", eV),
                      tz && eL(e, "refreshInit", tz),
                      !1 !== t && ((tR.progress = tq = 0), (v = x = tB = tI())),
                      !1 !== r && tR.refresh());
                  }),
                  (tR.getTween = function (e) {
                    return e && c ? c.tween : eB;
                  }),
                  (tR.setPositions = function (e, t, r, n) {
                    if (tx) {
                      var i = tx.scrollTrigger,
                        o = tx.duration(),
                        a = i.end - i.start;
                      (e = i.start + (a * e) / o), (t = i.start + (a * t) / o);
                    }
                    tR.refresh(
                      !1,
                      !1,
                      {
                        start: G(e, r && !!tR._startClamp),
                        end: G(t, r && !!tR._endClamp),
                      },
                      n
                    ),
                      tR.update();
                  }),
                  (tR.adjustPinSpacing = function (e) {
                    if (et && e) {
                      var t = et.indexOf(tT.d) + 1;
                      (et[t] = parseFloat(et[t]) + e + "px"),
                        (et[1] = parseFloat(et[1]) + e + "px"),
                        ts(et);
                    }
                  }),
                  (tR.disable = function (t, r) {
                    if (
                      tR.enabled &&
                      (!1 !== t && tR.revert(!0, !0),
                      (tR.enabled = tR.isActive = !1),
                      r || (eB && eB.pause()),
                      (eQ = 0),
                      p && (p.uncache = 1),
                      tz && eF(e, "refreshInit", tz),
                      eX &&
                        (eX.pause(),
                        c.tween && c.tween.kill() && (c.tween = 0)),
                      !tE)
                    ) {
                      for (var n = eY.length; n--; )
                        if (eY[n].scroller === tk && eY[n] !== tR) return;
                      eF(tk, "resize", eG), tE || eF(tk, "scroll", eV);
                    }
                  }),
                  (tR.kill = function (e, n) {
                    tR.disable(e, n),
                      eB && !n && eB.kill(),
                      e5 && delete eH[e5];
                    var i = eY.indexOf(tR);
                    i >= 0 && eY.splice(i, 1),
                      i === y && te > 0 && y--,
                      (i = 0),
                      eY.forEach(function (e) {
                        return e.scroller === tR.scroller && (i = 1);
                      }),
                      i || q || (tR.scroll.rec = 0),
                      r &&
                        ((r.scrollTrigger = null),
                        e && r.revert({ kill: !1 }),
                        n || r.kill()),
                      k &&
                        [k, C, E, P].forEach(function (e) {
                          return e.parentNode && e.parentNode.removeChild(e);
                        }),
                      W === tR && (W = 0),
                      e7 &&
                        (p && (p.uncache = 1),
                        (i = 0),
                        eY.forEach(function (e) {
                          return e.pin === e7 && i++;
                        }),
                        i || (p.spacer = 0)),
                      t.onKill && t.onKill(tR);
                  }),
                  eY.push(tR),
                  tR.enable(!1, !1),
                  eZ && eZ(tR),
                  r && r.add && !A)
                ) {
                  var tY = tR.update;
                  (tR.update = function () {
                    (tR.update = tY), w || b || tR.refresh();
                  }),
                    i.delayedCall(0.01, tR.update),
                    (A = 0.01),
                    (w = b = 0);
                } else tR.refresh();
                e7 && e8();
              }),
              (e.register = function (t) {
                return (
                  o ||
                    ((i = t || et()),
                    ee() && window.document && e.enable(),
                    (o = V)),
                  o
                );
              }),
              (e.defaults = function (e) {
                if (e) for (var t in e) eq[t] = e[t];
                return eq;
              }),
              (e.disable = function (e, t) {
                (V = 0),
                  eY.forEach(function (r) {
                    return r[t ? "kill" : "disable"](e);
                  }),
                  eF(a, "wheel", eV),
                  eF(s, "scroll", eV),
                  clearInterval(g),
                  eF(s, "touchcancel", J),
                  eF(u, "touchstart", J),
                  ez(eF, s, "pointerdown,touchstart,mousedown", $),
                  ez(eF, s, "pointerup,touchend,mouseup", K),
                  p.kill(),
                  es(eF);
                for (var r = 0; r < U._scrollers.length; r += 3)
                  eB(eF, U._scrollers[r], U._scrollers[r + 1]),
                    eB(eF, U._scrollers[r], U._scrollers[r + 2]);
              }),
              (e.enable = function () {
                if (
                  ((a = window),
                  (l = (s = document).documentElement),
                  (u = s.body),
                  i &&
                    ((f = i.utils.toArray),
                    (d = i.utils.clamp),
                    (A = i.core.context || J),
                    (S = i.core.suppressOverwrites || J),
                    (D = a.history.scrollRestoration || "auto"),
                    (e7 = a.pageYOffset),
                    i.core.globals("ScrollTrigger", e),
                    u))
                ) {
                  (V = 1),
                    ((R = document.createElement("div")).style.height =
                      "100vh"),
                    (R.style.position = "absolute"),
                    e4(),
                    (function e() {
                      return V && requestAnimationFrame(e);
                    })(),
                    (0, U.Observer).register(i),
                    (e.isTouch = U.Observer.isTouch),
                    (O =
                      U.Observer.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    (E = 1 === U.Observer.isTouch),
                    eL(a, "wheel", eV),
                    (c = [a, s, l, u]),
                    i.matchMedia
                      ? ((e.matchMedia = function (e) {
                          var t,
                            r = i.matchMedia();
                          for (t in e) r.add(t, e[t]);
                          return r;
                        }),
                        i.addEventListener("matchMediaInit", function () {
                          return e2();
                        }),
                        i.addEventListener("matchMediaRevert", function () {
                          return e1();
                        }),
                        i.addEventListener("matchMedia", function () {
                          e9(0, 1), eZ("matchMedia");
                        }),
                        i.matchMedia("(orientation: portrait)", function () {
                          return eQ(), eQ;
                        }))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    eQ(),
                    eL(s, "scroll", eV);
                  var t,
                    r,
                    n = u.style,
                    h = n.borderTopStyle,
                    m = i.core.Animation.prototype;
                  for (
                    m.revert ||
                      Object.defineProperty(m, "revert", {
                        value: function () {
                          return this.time(-0.01, !0);
                        },
                      }),
                      n.borderTopStyle = "solid",
                      t = eO(u),
                      U._vertical.m =
                        Math.round(t.top + (0, U._vertical).sc()) || 0,
                      U._horizontal.m =
                        Math.round(t.left + (0, U._horizontal).sc()) || 0,
                      h
                        ? (n.borderTopStyle = h)
                        : n.removeProperty("border-top-style"),
                      g = setInterval(eX, 250),
                      i.delayedCall(0.5, function () {
                        return (N = 0);
                      }),
                      eL(s, "touchcancel", J),
                      eL(u, "touchstart", J),
                      ez(eL, s, "pointerdown,touchstart,mousedown", $),
                      ez(eL, s, "pointerup,touchend,mouseup", K),
                      v = i.utils.checkPrefix("transform"),
                      tn.push(v),
                      o = Y(),
                      p = i.delayedCall(0.2, e9).pause(),
                      b = [
                        s,
                        "visibilitychange",
                        function () {
                          var e = a.innerWidth,
                            t = a.innerHeight;
                          s.hidden
                            ? ((x = e), (w = t))
                            : (x !== e || w !== t) && eG();
                        },
                        s,
                        "DOMContentLoaded",
                        e9,
                        a,
                        "load",
                        e9,
                        a,
                        "resize",
                        eG,
                      ],
                      es(eL),
                      eY.forEach(function (e) {
                        return e.enable(0, 1);
                      }),
                      r = 0;
                    r < U._scrollers.length;
                    r += 3
                  )
                    eB(eF, U._scrollers[r], U._scrollers[r + 1]),
                      eB(eF, U._scrollers[r], U._scrollers[r + 2]);
                }
              }),
              (e.config = function (t) {
                "limitCallbacks" in t && (B = !!t.limitCallbacks);
                var r = t.syncInterval;
                (r && clearInterval(g)) || ((g = r) && setInterval(eX, r)),
                  "ignoreMobileResize" in t &&
                    (E = 1 === e.isTouch && t.ignoreMobileResize),
                  "autoRefreshEvents" in t &&
                    (es(eF) || es(eL, t.autoRefreshEvents || "none"),
                    (k = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
              }),
              (e.scrollerProxy = function (e, t) {
                var r = (0, U._getTarget)(e),
                  n = (0, U._scrollers).indexOf(r),
                  i = er(r);
                ~n && (0, U._scrollers).splice(n, i ? 6 : 2),
                  t &&
                    (i
                      ? (0, U._proxies).unshift(a, t, u, t, l, t)
                      : (0, U._proxies).unshift(r, t));
              }),
              (e.clearMatchMedia = function (e) {
                eY.forEach(function (t) {
                  return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
                });
              }),
              (e.isInViewport = function (e, t, r) {
                var n = (
                    el(e) ? (0, U._getTarget)(e) : e
                  ).getBoundingClientRect(),
                  i = n[r ? ev : ey] * t || 0;
                return r
                  ? n.right - i > 0 && n.left + i < a.innerWidth
                  : n.bottom - i > 0 && n.top + i < a.innerHeight;
              }),
              (e.positionInViewport = function (e, t, r) {
                el(e) && (e = (0, U._getTarget)(e));
                var n = e.getBoundingClientRect(),
                  i = n[r ? ev : ey],
                  o =
                    null == t
                      ? i / 2
                      : t in eI
                      ? eI[t] * i
                      : ~t.indexOf("%")
                      ? (parseFloat(t) * i) / 100
                      : parseFloat(t) || 0;
                return r
                  ? (n.left + o) / a.innerWidth
                  : (n.top + o) / a.innerHeight;
              }),
              (e.killAll = function (e) {
                if (
                  (eY.slice(0).forEach(function (e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill();
                  }),
                  !0 !== e)
                ) {
                  var t = e$.killAll || [];
                  (e$ = {}),
                    t.forEach(function (e) {
                      return e();
                    });
                }
              }),
              e
            );
          })();
        (t_.version = "3.12.5"),
          (t_.saveStyles = function (e) {
            return e
              ? f(e).forEach(function (e) {
                  if (e && e.style) {
                    var t = e0.indexOf(e);
                    t >= 0 && e0.splice(t, 5),
                      e0.push(
                        e,
                        e.style.cssText,
                        e.getBBox && e.getAttribute("transform"),
                        i.core.getCache(e),
                        A()
                      );
                  }
                })
              : e0;
          }),
          (t_.revert = function (e, t) {
            return e2(!e, t);
          }),
          (t_.create = function (e, t) {
            return new t_(e, t);
          }),
          (t_.refresh = function (e) {
            return e ? eG() : (o || t_.register()) && e9(!0);
          }),
          (t_.update = function (e) {
            return ++U._scrollers.cache && tt(!0 === e ? 2 : 0);
          }),
          (t_.clearScrollMemory = e5),
          (t_.maxScroll = function (e, t) {
            return ea(e, t ? U._horizontal : U._vertical);
          }),
          (t_.getScrollFunc = function (e, t) {
            return (0, U._getScrollFunc)(
              (0, U._getTarget)(e),
              t ? U._horizontal : U._vertical
            );
          }),
          (t_.getById = function (e) {
            return eH[e];
          }),
          (t_.getAll = function () {
            return eY.filter(function (e) {
              return "ScrollSmoother" !== e.vars.id;
            });
          }),
          (t_.isScrolling = function () {
            return !!X;
          }),
          (t_.snapDirectional = eR),
          (t_.addEventListener = function (e, t) {
            var r = e$[e] || (e$[e] = []);
            ~r.indexOf(t) || r.push(t);
          }),
          (t_.removeEventListener = function (e, t) {
            var r = e$[e],
              n = r && r.indexOf(t);
            n >= 0 && r.splice(n, 1);
          }),
          (t_.batch = function (e, t) {
            var r,
              n = [],
              o = {},
              a = t.interval || 0.016,
              s = t.batchMax || 1e9,
              l = function (e, t) {
                var r = [],
                  n = [],
                  o = i
                    .delayedCall(a, function () {
                      t(r, n), (r = []), (n = []);
                    })
                    .pause();
                return function (e) {
                  r.length || o.restart(!0),
                    r.push(e.trigger),
                    n.push(e),
                    s <= r.length && o.progress(1);
                };
              };
            for (r in t)
              o[r] =
                "on" === r.substr(0, 2) && eu(t[r]) && "onRefreshInit" !== r
                  ? l(r, t[r])
                  : t[r];
            return (
              eu(s) &&
                ((s = s()),
                eL(t_, "refresh", function () {
                  return (s = t.batchMax());
                })),
              f(e).forEach(function (e) {
                var t = {};
                for (r in o) t[r] = o[r];
                (t.trigger = e), n.push(t_.create(t));
              }),
              n
            );
          });
        var tv,
          ty = function (e, t, r, n) {
            return (
              t > n ? e(n) : t < 0 && e(0),
              r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
            );
          },
          tx = function e(t, r) {
            !0 === r
              ? t.style.removeProperty("touch-action")
              : (t.style.touchAction =
                  !0 === r
                    ? "auto"
                    : r
                    ? "pan-" + r + (U.Observer.isTouch ? " pinch-zoom" : "")
                    : "none"),
              t === l && e(u, r);
          },
          tw = { auto: 1, scroll: 1 },
          tb = function (e) {
            var t,
              r = e.event,
              n = e.target,
              o = e.axis,
              a = (r.changedTouches ? r.changedTouches[0] : r).target,
              s = a._gsap || i.core.getCache(a),
              l = Y();
            if (!s._isScrollT || l - s._isScrollT > 2e3) {
              for (
                ;
                a &&
                a !== u &&
                ((a.scrollHeight <= a.clientHeight &&
                  a.scrollWidth <= a.clientWidth) ||
                  !(tw[(t = eE(a)).overflowY] || tw[t.overflowX]));

              )
                a = a.parentNode;
              (s._isScroll =
                a &&
                a !== n &&
                !er(a) &&
                (tw[(t = eE(a)).overflowY] || tw[t.overflowX])),
                (s._isScrollT = l);
            }
            (s._isScroll || "x" === o) &&
              (r.stopPropagation(), (r._gsapAllow = !0));
          },
          tT = function (e, t, r, n) {
            return (0, U.Observer).create({
              target: e,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: t,
              onWheel: (n = n && tb),
              onPress: n,
              onDrag: n,
              onScroll: n,
              onEnable: function () {
                return r && eL(s, U.Observer.eventTypes[0], tk, !1, !0);
              },
              onDisable: function () {
                return eF(s, U.Observer.eventTypes[0], tk, !0);
              },
            });
          },
          tS = /(input|label|select|textarea)/i,
          tk = function (e) {
            var t = tS.test(e.target.tagName);
            (t || tv) && ((e._gsapAllow = !0), (tv = t));
          },
          tC = function (e) {
            ep(e) || (e = {}),
              (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
              e.type || (e.type = "wheel,touch"),
              (e.debounce = !!e.debounce),
              (e.id = e.id || "normalizer");
            var t,
              r,
              n,
              o,
              s,
              u,
              c,
              p,
              f = e,
              h = f.normalizeScrollX,
              g = f.momentum,
              m = f.allowNestedScroll,
              _ = f.onRelease,
              v = (0, U._getTarget)(e.target) || l,
              y = i.core.globals().ScrollSmoother,
              x = y && y.get(),
              w =
                O &&
                ((e.content && (0, U._getTarget)(e.content)) ||
                  (x && !1 !== e.content && !x.smooth() && x.content())),
              b = (0, U._getScrollFunc)(v, U._vertical),
              T = (0, U._getScrollFunc)(v, U._horizontal),
              S = 1,
              k =
                (U.Observer.isTouch && a.visualViewport
                  ? a.visualViewport.scale * a.visualViewport.width
                  : a.outerWidth) / a.innerWidth,
              C = 0,
              E = eu(g)
                ? function () {
                    return g(t);
                  }
                : function () {
                    return g || 2.8;
                  },
              P = tT(v, e.type, !0, m),
              M = function () {
                return (o = !1);
              },
              A = J,
              D = J,
              R = function () {
                (r = ea(v, U._vertical)),
                  (D = d(O ? 1 : 0, r)),
                  h && (A = d(0, ea(v, U._horizontal))),
                  (n = e3);
              },
              z = function () {
                (w._gsap.y = Z(parseFloat(w._gsap.y) + b.offset) + "px"),
                  (w.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    parseFloat(w._gsap.y) +
                    ", 0, 1)"),
                  (b.offset = b.cacheID = 0);
              },
              L = function () {
                if (o) {
                  requestAnimationFrame(M);
                  var e = Z(t.deltaY / 2),
                    r = D(b.v - e);
                  if (w && r !== b.v + b.offset) {
                    b.offset = r - b.v;
                    var n = Z((parseFloat(w && w._gsap.y) || 0) - b.offset);
                    (w.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      n +
                      ", 0, 1)"),
                      (w._gsap.y = n + "px"),
                      (b.cacheID = U._scrollers.cache),
                      tt();
                  }
                  return !0;
                }
                b.offset && z(), (o = !0);
              },
              F = function () {
                R(),
                  s.isActive() &&
                    s.vars.scrollY > r &&
                    (b() > r ? s.progress(1) && b(r) : s.resetTo("scrollY", r));
              };
            return (
              w && i.set(w, { y: "+=0" }),
              (e.ignoreCheck = function (e) {
                return (
                  (O && "touchmove" === e.type && L(e)) ||
                  (S > 1.05 && "touchstart" !== e.type) ||
                  t.isGesturing ||
                  (e.touches && e.touches.length > 1)
                );
              }),
              (e.onPress = function () {
                o = !1;
                var e = S;
                (S = Z(
                  ((a.visualViewport && a.visualViewport.scale) || 1) / k
                )),
                  s.pause(),
                  e !== S && tx(v, S > 1.01 || (!h && "x")),
                  (u = T()),
                  (c = b()),
                  R(),
                  (n = e3);
              }),
              (e.onRelease = e.onGestureStart =
                function (e, t) {
                  if ((b.offset && z(), t)) {
                    U._scrollers.cache++;
                    var n,
                      o,
                      a = E();
                    h &&
                      ((o = (n = T()) + -(0.05 * a * e.velocityX) / 0.227),
                      (a *= ty(T, n, o, ea(v, U._horizontal))),
                      (s.vars.scrollX = A(o))),
                      (o = (n = b()) + -(0.05 * a * e.velocityY) / 0.227),
                      (a *= ty(b, n, o, ea(v, U._vertical))),
                      (s.vars.scrollY = D(o)),
                      s.invalidate().duration(a).play(0.01),
                      ((O && s.vars.scrollY >= r) || n >= r - 1) &&
                        i.to({}, { onUpdate: F, duration: a });
                  } else p.restart(!0);
                  _ && _(e);
                }),
              (e.onWheel = function () {
                s._ts && s.pause(), Y() - C > 1e3 && ((n = 0), (C = Y()));
              }),
              (e.onChange = function (e, t, r, i, o) {
                if (
                  (e3 !== n && R(),
                  t &&
                    h &&
                    T(A(i[2] === t ? u + (e.startX - e.x) : T() + t - i[1])),
                  r)
                ) {
                  b.offset && z();
                  var a = o[2] === r,
                    s = a ? c + e.startY - e.y : b() + r - o[1],
                    l = D(s);
                  a && s !== l && (c += l - s), b(l);
                }
                (r || t) && tt();
              }),
              (e.onEnable = function () {
                tx(v, !h && "x"),
                  t_.addEventListener("refresh", F),
                  eL(a, "resize", F),
                  b.smooth &&
                    ((b.target.style.scrollBehavior = "auto"),
                    (b.smooth = T.smooth = !1)),
                  P.enable();
              }),
              (e.onDisable = function () {
                tx(v, !0),
                  eF(a, "resize", F),
                  t_.removeEventListener("refresh", F),
                  P.kill();
              }),
              (e.lockAxis = !1 !== e.lockAxis),
              ((t = new U.Observer(e)).iOS = O),
              O && !b() && b(1),
              O && i.ticker.add(J),
              (p = t._dc),
              (s = i.to(t, {
                ease: "power4",
                paused: !0,
                inherit: !1,
                scrollX: h ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                  scrollY: th(b, b(), function () {
                    return s.pause();
                  }),
                },
                onUpdate: tt,
                onComplete: p.vars.onComplete,
              })),
              t
            );
          };
        (t_.sort = function (e) {
          return eY.sort(
            e ||
              function (e, t) {
                return (
                  -1e6 * (e.vars.refreshPriority || 0) +
                  e.start -
                  (t.start + -1e6 * (t.vars.refreshPriority || 0))
                );
              }
          );
        }),
          (t_.observe = function (e) {
            return new U.Observer(e);
          }),
          (t_.normalizeScroll = function (e) {
            if (void 0 === e) return C;
            if (!0 === e && C) return C.enable();
            if (!1 === e) {
              C && C.kill(), (C = e);
              return;
            }
            var t = e instanceof U.Observer ? e : tC(e);
            return (
              C && C.target === t.target && C.kill(), er(t.target) && (C = t), t
            );
          }),
          (t_.core = {
            _getVelocityProp: U._getVelocityProp,
            _inputObserver: tT,
            _scrollers: U._scrollers,
            _proxies: U._proxies,
            bridge: {
              ss: function () {
                X || eZ("scrollStart"), (X = Y());
              },
              ref: function () {
                return m;
              },
            },
          }),
          et() && i.registerPlugin(t_);
      },
      {
        "./Observer.js": "aAWxM",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    fLOTs: [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        function i() {
          let e = function (e) {
              if (e.target.classList.contains("nav__link")) {
                let t = e.target,
                  r = t.closest(".nav").querySelectorAll(".nav__link"),
                  n = t.closest(".nav").querySelector("img");
                r.forEach((e) => {
                  e != t && (e.style.opacity = this);
                }),
                  (n.style.opacity = this);
              }
            },
            t = document.querySelector(".nav");
          if (
            t &&
            (t.addEventListener("mouseover", e.bind(0.2)),
            t.addEventListener("mouseout", e.bind(1)),
            document.title.includes("-"))
          ) {
            let e = document.querySelector(".heroSection"),
              r = t.getBoundingClientRect().height;
            new IntersectionObserver(
              function (e) {
                let [r] = e;
                r.isIntersecting
                  ? t.classList.remove("sticky")
                  : t.classList.add("sticky");
              },
              { root: null, threshold: 0, rootMargin: `-${r}px` }
            ).observe(e),
              document
                .querySelector(".nav__links")
                .addEventListener("click", function (e) {
                  if (
                    (e.preventDefault(),
                    e.target.classList.contains("nav__link"))
                  ) {
                    let t = e.target.getAttribute("href");
                    document
                      .querySelector(t)
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }),
              window.innerWidth,
              window.innerHeight;
          }
        }
        n.defineInteropFlag(r), n.export(r, "initializeNav", () => i);
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    b19BA: [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r),
          n.export(r, "initializeScrollAnimations", () => s);
        var i = e("gsap"),
          o = n.interopDefault(i),
          a = e("gsap/all");
        e("gsap/gsap-core"), (0, o.default).registerPlugin(a.ScrollTrigger);
        let s = () => {
          if ("Mattia Yaghmai - portfolio" !== document.title) return;
          let e = document.querySelector(".titleInfo");
          if (e) {
            let t = document.querySelector(".titleWrapperInfo"),
              r = t.getBoundingClientRect();
            r = r.height;
            let n = document.querySelector(".titleWeb"),
              i = document.querySelector(".titleWrapperWeb"),
              a = i.getBoundingClientRect();
            a = a.height;
            let s = document.querySelector(".titleMap"),
              l = document.querySelector(".titleWrapperMap"),
              u = l.getBoundingClientRect();
            u = u.height;
            let c = document.querySelector(".titleVideo"),
              p = c.getBoundingClientRect();
            p = p.height;
            let f = document.querySelector(".mattiaPic");
            (0, o.default).from(e, {
              y: () => -r,
              duration: 0.5,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: ".introduction",
                start: "10% bottom",
                end: "center center",
              },
            }),
              (0, o.default).from(n, {
                y: () => -200,
                duration: 0.1,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: ".titleWrapperWeb",
                  start: "center bottom",
                  end: "center center",
                },
              }),
              (0, o.default).from(s, {
                y: () => -u,
                duration: 0.5,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: ".titleWrapperMap",
                  start: "10% bottom",
                  end: "center center",
                },
              }),
              (0, o.default).from(c, {
                y: () => -u,
                duration: 0.5,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: ".titleWrapperMap",
                  start: "10% bottom",
                  end: "center center",
                },
              }),
              (0, o.default).from(f, {
                x: () => 300,
                duration: 0.8,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: ".introduction",
                  start: "10% bottom",
                  end: "center center",
                },
              }),
              (0, o.default).from(".imgCoverDev", {
                y: () => 400,
                duration: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: ".coverDev",
                  start: "10% bottom",
                  end: "center center",
                },
              }),
              (0, o.default).from(".mapImage", {
                y: () => 400,
                duration: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: ".mapBox",
                  start: "10% bottom",
                  end: "center center",
                },
              }),
              (0, o.default).from(".videoImage", {
                y: () => 400,
                duration: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: ".mapBox",
                  start: "10% bottom",
                  end: "center center",
                },
              }),
              (0, o.default).utils.toArray("section").forEach((e) => {
                e.querySelectorAll(".testo").forEach((e) => {
                  (0, o.default).from(e, {
                    y: -120,
                    duration: 0.8,
                    scrollTrigger: {
                      trigger: e,
                      start: "10% bottom",
                      toggleActions: "play none none none",
                    },
                  });
                });
              }),
              (0, o.default).from(t, {
                "--line-width": "0%",
                "--line-position": 2e3,
                duration: 1,
                ease: "ease",
                scrollTrigger: { trigger: t, start: "10% bottom" },
              }),
              (0, o.default).from(i, {
                "--line-width": "0%",
                "--line-position": 600,
                duration: 1,
                ease: "circ.inOut",
                scrollTrigger: { trigger: i, start: "30% bottom" },
              }),
              (0, o.default).from(l, {
                "--line-width": "0%",
                "--line-position": 300,
                duration: 1,
                ease: "circ.inOut",
                scrollTrigger: { trigger: l, start: "10% bottom" },
              }),
              (0, o.default).from(".titleWrapperVideo", {
                "--line-width": "0%",
                "--line-position": 300,
                duration: 1,
                ease: "circ.inOut",
                scrollTrigger: {
                  trigger: ".titleWrapperVideo",
                  start: "10% bottom",
                },
              });
          }
        };
      },
      {
        gsap: "fPSuC",
        "gsap/all": "3UJRo",
        "gsap/gsap-core": "05eeC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    fVMw1: [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "initializeAnimation", () => l);
        var i = e("gsap"),
          o = n.interopDefault(i),
          a = e("gsap/all");
        e("gsap/gsap-core"), (0, o.default).registerPlugin(a.ScrollTrigger);
        let s = document.querySelector(".rectangle1");
        function l() {
          var e;
          let t;
          if (!s) return;
          let r = (0, o.default).timeline(),
            n = (0, o.default).timeline(),
            i = window.getComputedStyle(s);
          console.log("rectangle1dimension", i);
          let a = document.querySelector(".rectangle2"),
            l = window.getComputedStyle(a),
            u = document.querySelector(".fakeRectangle"),
            c = window.getComputedStyle(u),
            p = document.querySelector(".yaghmai"),
            f = window.getComputedStyle(p),
            d = document.querySelector(".mattia"),
            h = window.getComputedStyle(d),
            g = document.querySelector(".text"),
            m = window.getComputedStyle(g),
            _ = document.querySelector(".wrapperGrid"),
            v = window.getComputedStyle(_),
            y = function () {
              let e = window.innerWidth;
              window.innerHeight,
                (0, o.default).set(s, { x: () => -parseFloat(i.width) }),
                (0, o.default).set(g, { y: () => -parseFloat(m.height) - 100 }),
                (0, o.default).set(a, { x: () => parseFloat(l.width) }),
                (0, o.default).set(u, { transformOrigin: "50% 50%" }),
                r.addLabel("primaReveal"),
                r.from(u, { scale: 0 }),
                r.from(
                  u,
                  {
                    y: () => parseFloat(c.height) / 2,
                    height: () => 2 * parseFloat(c.height) + 1,
                    rotation: 90,
                    delay: 1,
                  },
                  "primaReveal"
                ),
                r.from(
                  d,
                  { x: () => parseFloat(h.width) + 200, delay: 1 },
                  "primaReveal"
                ),
                r.from(
                  p,
                  { x: () => -parseFloat(f.width) - 200, delay: 1 },
                  "primaReveal"
                ),
                r.addLabel("secondReveal"),
                r.to(
                  s,
                  { opacity: 1, duration: 0.4, x: () => 0 },
                  "secondReveal"
                ),
                r.to(
                  a,
                  { opacity: 1, duration: 0.4, x: () => 0 },
                  "secondReveal"
                ),
                r.to(u, { opacity: 0, duration: 0.4 }, "secondReveal"),
                r.to(g, { y: () => 0 }),
                e <= 900 &&
                  (r.kill(),
                  n.set(u, { opacity: 0 }),
                  n.set(d, {
                    opacity: 1,
                    y: () => -(1.5 * parseFloat(h.height)),
                    x: 0,
                  }),
                  n.set(p, { y: () => 1.5 * parseFloat(f.height), x: 0 }),
                  n.set(s, {
                    width: () => e / 3,
                    y: () => parseFloat(v.height) / 4,
                    transformOrigin: "50% 50%",
                    rotate: 220,
                    opacity: 0,
                  }),
                  n.set(a, {
                    width: () => e / 3,
                    transformOrigin: "50% 50%",
                    y: () => -parseFloat(v.height) / 5,
                    rotate: 220,
                    opacity: 0,
                  }),
                  n.addLabel("revealSmall1"),
                  n.to(
                    s,
                    { rotate: 0, opacity: 1, width: () => e / 1.5 },
                    "revealSmall1"
                  ),
                  n.to(
                    a,
                    { rotate: 0, opacity: 1, width: () => e / 1.5 },
                    "revealSmall1"
                  ),
                  n.addLabel("revealSmall2"),
                  n.to(s, { y: () => 0 }, "revealSmall2"),
                  n.to(a, { y: () => 0 }, "revealSmall2"),
                  n.to(d, { y: () => 0 }, "revealSmall2"),
                  n.to(p, { y: () => 0 }, "revealSmall2"),
                  n.to(g, { y: 0 }, "revealSmall2"));
            };
          window.addEventListener(
            "resize",
            ((e = () => {
              r.progress(1),
                n.progress(1),
                r.kill(),
                n.kill(),
                (0, o.default).killTweensOf(r),
                (0, o.default).killTweensOf(n),
                [d, p, u, _, g, s, a].forEach((e) => {
                  e.removeAttribute("style");
                }),
                y();
            }),
            function (...r) {
              clearTimeout(t),
                (t = setTimeout(() => {
                  e.apply(this, r);
                }, 300));
            })
          ),
            y();
        }
      },
      {
        gsap: "fPSuC",
        "gsap/all": "3UJRo",
        "gsap/gsap-core": "05eeC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "7FeRP": [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "initializeMenu", () => a);
        var i = e("gsap"),
          o = n.interopDefault(i);
        function a() {
          let e = document.querySelector(".nav"),
            t = document.querySelector(".nav1"),
            r = window.innerWidth,
            n = document.querySelector(".modalWrapper");
          document.querySelector(".showModal");
          let i = document.getElementById("menuToggle"),
            a = document.querySelector(".modalWrapper");
          if (((a.style.opacity = "0"), t)) {
            let r = function () {
              if (window.innerWidth <= 900)
                (e.style.display = "none"), (t.style.display = "flex");
              else {
                (t.style.display = "none"), (e.style.display = "flex");
                let r = document.querySelector(".modalWrapper");
                r.classList.remove("showModal"), r.classList.add("hideMenu");
              }
            };
            window.addEventListener("resize", r),
              window.addEventListener("DOMContentLoaded", r),
              r(),
              a.classList.add("hideMenu"),
              i.addEventListener("click", () => {
                a.classList.toggle("hideMenu"),
                  a.classList.toggle("showModal"),
                  (a.style.opacity = "1"),
                  a.classList.contains("showModal") &&
                    document
                      .querySelectorAll(".menuModalReveal")
                      .forEach((e) => {
                        (0, o.default).from(e, {
                          opacity: 0,
                          y: -100,
                          duration: 1,
                        });
                      });
              }),
              document
                .querySelector(".close-btn")
                .addEventListener("click", () => {
                  a.classList.remove("showModal"), a.classList.add("hideMenu");
                });
          }
          r >= 900 && n.classList.add("hideMenu");
        }
      },
      {
        gsap: "fPSuC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "85FTH": [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r),
          n.export(r, "initializeTransitionHome", () => s);
        var i = e("gsap"),
          o = n.interopDefault(i),
          a = e("gsap/all");
        function s() {
          "Mattia Yaghmai - portfolio" === document.title &&
            window.addEventListener("pageshow", () => {
              let e = document.querySelector(".nav");
              (0, o.default).from("section", { y: -200, duration: 0.5 });
              let t = document.querySelector(".transition");
              t.classList.add("hideTrans");
              let r = document.querySelectorAll(".linkPages");
              setTimeout(() => {
                t.classList.remove("is-active");
              }, 500);
              for (let n = 0; n < r.length; n++)
                r[n].addEventListener("click", (r) => {
                  r.preventDefault();
                  let n = r.target.href;
                  console.log(n),
                    e && e.classList.remove("sticky"),
                    t.classList.add("is-active"),
                    t.classList.remove("hideTrans"),
                    setTimeout(() => {
                      window.location.href = n;
                    }, 500);
                });
            });
        }
        e("gsap/gsap-core"), (0, o.default).registerPlugin(a.ScrollTrigger);
      },
      {
        gsap: "fPSuC",
        "gsap/all": "3UJRo",
        "gsap/gsap-core": "05eeC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    iquZy: [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r),
          n.export(r, "initializeTransitionAbout", () => s);
        var i = e("gsap"),
          o = n.interopDefault(i),
          a = e("gsap/all");
        function s() {
          window.addEventListener("pageshow", () => {
            if (document.title.includes("-")) {
              let e = document.querySelector(".nav"),
                t = document.querySelectorAll(".linkPages");
              for (let r = 0; r < t.length; r++)
                t[r].addEventListener("click", (t) => {
                  t.preventDefault();
                  let r = t.target.href;
                  e && e.classList.remove("sticky"),
                    transitionEl.classList.add("is-active"),
                    setTimeout(() => {
                      window.location.href = r;
                    }, 500);
                });
            }
          }),
            (function (e) {
              let t = document.querySelector(".transitionWorks");
              document.querySelector(".transitionWorks1");
              let r = document.querySelector(".titleWorks");
              document.querySelector(".wrapperTextAbout");
              let n = (0, o.default).timeline();
              n.addLabel("textReveal"),
                n.from(t, {
                  y: "0vh",
                  duration: 2,
                  onComplete: function () {
                    t && t.parentNode.removeChild(t);
                  },
                }),
                n.from(
                  r,
                  { y: 500, duration: 1.5, ease: "easeIn" },
                  "textReveal"
                ),
                n.from(
                  e,
                  {
                    y: 500,
                    scale: 0.5,
                    duration: 1.5,
                    ease: "easeIn",
                    stagger: 0.007,
                  },
                  "textReveal"
                );
            })(
              (function () {
                let e = document.querySelectorAll(".aboutWorks"),
                  t = [];
                return (
                  e.forEach((e) => {
                    let r = [];
                    e.childNodes.forEach((e) => {
                      if (e.nodeType === Node.TEXT_NODE)
                        e.textContent.split(" ").forEach((e) => {
                          e.trim() &&
                            r.push(
                              `<span class="aboutMyWorksPremier"><span class="aboutMyWorks">${e}</span></span>`
                            );
                        });
                      else if (
                        e.nodeType === Node.ELEMENT_NODE &&
                        "STRONG" === e.tagName
                      ) {
                        let t = e.innerText
                          .split(" ")
                          .map(
                            (e) =>
                              `<span class="aboutMyWorksPremier"><strong><span class="aboutMyWorks">${e}</span></strong></span>`
                          );
                        r.push(...t);
                      } else r.push(e.outerHTML);
                    }),
                      (e.innerHTML = r.join(" "));
                    let n = e.querySelectorAll(".aboutMyWorks");
                    t.push(...n);
                  }),
                  t
                );
              })()
            ),
            (function () {
              let e = document.querySelectorAll(".scrollingElementWork"),
                t = document.querySelectorAll(".elementTriggerWork");
              e.forEach((e, r) => {
                (0, o.default).from(e, {
                  y: 200,
                  delay: 0.2,
                  duration: 1,
                  scrollTrigger: t[r],
                });
              });
            })();
        }
        e("gsap/gsap-core"), (0, o.default).registerPlugin(a.ScrollTrigger);
      },
      {
        gsap: "fPSuC",
        "gsap/all": "3UJRo",
        "gsap/gsap-core": "05eeC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "8g7WW": [
      function (e, t, r) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r),
          n.export(r, "initializeTelegraphAnimation", () => s);
        var i = e("gsap"),
          o = n.interopDefault(i),
          a = e("gsap/all");
        e("gsap/gsap-core"), (0, o.default).registerPlugin(a.ScrollTrigger);
        let s = () => {
          let t = e("426c7e0688609b44"),
            r = document.getElementById("myCanvas"),
            n = document.getElementById("myCanvas1"),
            i = document.querySelectorAll("[class^='frame']");
          document.querySelector("body");
          let s = document.querySelectorAll("[class^='bookmarkFrame']");
          document.querySelector(".frame1"),
            document.querySelectorAll("section");
          let l = r.getContext("2d"),
            u = document.querySelector(".coverArtSection");
          document.querySelector(".introSection");
          let c = document.querySelector(".mainWrapper");
          document.querySelectorAll(".whiteSpace");
          let p = n.getContext("2d"),
            f = document.querySelectorAll(".scroller");
          l.globalCompositeOperation = "source-over";
          let d = [],
            h = [];
          function g() {
            {
              let e, o, a, g, m, _, v, y, x, w;
              let b = window.innerWidth,
                T = window.innerHeight;
              r.setAttribute("width", b),
                r.setAttribute("height", T),
                n.setAttribute("width", b),
                n.setAttribute("height", T);
              let S = 0;
              f.forEach((e) => {
                S += e.offsetHeight;
              });
              let k = u.offsetWidth / u.offsetHeight;
              (S = c.offsetWidth / k + 3 * u.offsetHeight - u.offsetHeight),
                (document.body.style.height = S + "px"),
                l.clearRect(0, 0, r.width, r.height),
                p.clearRect(0, 0, n.width, n.height);
              let {
                frameX: C,
                frameY: E,
                frameWidth: P,
                frameHeight: M,
                frameBX: O,
                frameBY: A,
                frameWidthB: D,
                frameHeightB: R,
              } = ((e = r.getBoundingClientRect().left),
              (o = r.getBoundingClientRect().top),
              (a = []),
              (g = []),
              (m = []),
              (_ = []),
              (v = []),
              (y = []),
              (x = []),
              (w = []),
              i.forEach((t, r) => {
                let n = t.getBoundingClientRect();
                a.push(n.left - e),
                  g.push(n.top - o),
                  m.push(t.offsetWidth),
                  _.push(t.offsetHeight);
              }),
              s.forEach((t, r) => {
                let n = t.getBoundingClientRect();
                v.push(n.left - e),
                  y.push(n.top - o),
                  x.push(t.offsetWidth),
                  w.push(t.offsetHeight);
              }),
              {
                frameX: a,
                frameY: g,
                frameWidth: m,
                frameHeight: _,
                frameBX: v,
                frameBY: y,
                frameWidthB: x,
                frameHeightB: w,
              });
              t(h[0], O[0], A[0], D[0], R[0], { mode: "cover" })
                .zoom(1.5)
                .pan(0.7, 0)
                .render(l),
                t(h[1], O[1], A[1], D[1], R[1], { mode: "cover" })
                  .zoom(2.5)
                  .pan(0.2, 0)
                  .render(l),
                t(h[2], O[2], A[2], D[2], R[2], { mode: "cover" })
                  .zoom(1.2)
                  .pan(0.295, 0)
                  .render(l),
                t(h[3], O[3], A[3], D[3], R[3], { mode: "cover" })
                  .zoom(1.2)
                  .pan(0.5, 0)
                  .render(l),
                d.forEach((e, t) => {
                  e.src.includes("background")
                    ? ((p.globalAlpha = 0.2),
                      p.drawImage(e, C[t], E[t], P[t], M[t]))
                    : ((l.shadowColor = "rgba(0, 0, 0, 0.4)"),
                      (l.shadowBlur = 7),
                      (l.shadowOffsetX = 10),
                      (l.shadowOffsetY = 10),
                      l.drawImage(e, C[t], E[t], P[t], M[t]));
                });
            }
          }
          function m() {
            g(), requestAnimationFrame(m);
          }
          function _() {
            let e = document
                .querySelector(".containerFrame2")
                .getBoundingClientRect().left,
              t = r.getBoundingClientRect().left,
              n = e - t,
              i = document
                .querySelector(".containerFrame2Copy")
                .getBoundingClientRect().left,
              o = i - t;
            return {
              positionContainer1X: e,
              gifX: n,
              positionContainer2X: i,
              endTrigger: o,
              distance: o - n,
            };
          }
          !(function (e, t) {
            let r = 0;
            e.forEach((n, i) => {
              let o = new Image();
              (o.src = n),
                (o.onload = () => {
                  ++r === e.length && t();
                }),
                o.src.includes("bookmark") ? h.push(o) : d.push(o);
            });
          })(
            [
              "Emblemata_1624_bookmark_1.webp",
              "Franklin_hand_bookmark_2.webp",
              "Faraday.webp",
              "henry.webp",
              "railwaymap.webp",
              "giornalisti_bookmark_3.webp",
              "morse.webp",
              "morseNotes.webp",
              "submarine_bookmark_4.webp",
              "cyrus.webp",
              "messagequeen.webp",
              "1871Telegraphlines.webp",
              "1880Telegraphlines.webp",
              "1901Telegraphlines.webp",
            ],
            () => {
              window.addEventListener("resize", g),
                window.addEventListener("load", g);
              let {
                positionContainer1X: e,
                gifX: t,
                positionContainer2X: n,
                endTrigger: i,
                distance: s,
              } = _();
              window.addEventListener("resize", () => {
                ({
                  positionContainer1X: e,
                  gifX: t,
                  positionContainer2X: n,
                  endTrigger: i,
                  distance: s,
                } = _());
              });
              let l = (0, o.default).timeline();
              l.add("diagonali"),
                l.addLabel("redTel"),
                l
                  .from(
                    ".imgDiag1",
                    {
                      x: 2e3,
                      duration: 5,
                      ease: "power1.inOut",
                      filter: "blur(3px)",
                    },
                    "diagonali"
                  )
                  .from(
                    ".imgDiag2",
                    { x: 2e3, duration: 5, filter: "blur(3px)" },
                    "diagonali"
                  )
                  .from(
                    ".imgRed",
                    { duration: 2, ease: "circ.in", scale: 0 },
                    "diagonali"
                  )
                  .from(
                    ".titleContainer",
                    { x: 300, opacity: 0, duration: 3, ease: "power3.out" },
                    "diagonali+=2"
                  )
                  .from(
                    ".squareContainer",
                    { x: 200, opacity: 0, ease: "power3.out" },
                    "diagonali+=2"
                  )
                  .from(
                    ".torpedoFish",
                    { x: 200, duration: 3, opacity: 0 },
                    "diagonali+=2"
                  )
                  .from(
                    ".naveContainer",
                    { x: 1200, duration: 4, ease: "power3.inOut" },
                    "diagonali"
                  )
                  .from(
                    ".telegraphImg",
                    { duration: 2, ease: "circ.in", opacity: 0 },
                    "diagonali+=3"
                  ),
                (0, o.default).from(".titoloChappe", {
                  opacity: 0,
                  y: "3vh",
                  duration: 1,
                  ease: "power1.inOut",
                }),
                (0, o.default).from(".spanBookmark", {
                  opacity: 0,
                  y: "10vh",
                  stagger: 0.2,
                  duration: 5,
                });
              let p = (0, o.default).utils.toArray(".mainWrapper .scroller "),
                f = (0, o.default).to(p, {
                  xPercent: -100 * (p.length - 1),
                  duration: 5,
                  delay: 0.2,
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".sectioni",
                    pin: !0,
                    scrub: 5,
                    pinSpacing: !1,
                    invalidateOnRefresh: !0,
                    start: "center center",
                    end: () =>
                      `+=${c.offsetWidth / (u.offsetWidth / u.offsetHeight)}`,
                    onUpdate: () => {
                      requestAnimationFrame(g);
                    },
                  },
                });
              window.addEventListener(
                "resize",
                (function () {
                  (0, o.default).to(".gif1", {
                    x: () => {
                      let e = document
                          .querySelector(".containerFrame2")
                          .getBoundingClientRect().left,
                        t = r.getBoundingClientRect().left;
                      return (
                        document
                          .querySelector(".containerFrame2Copy")
                          .getBoundingClientRect().left -
                        t -
                        (e - t)
                      );
                    },
                    ease: "power1.inOut",
                    scrollTrigger: {
                      trigger: ".gif1",
                      containerAnimation: f,
                      horizontal: !0,
                      pin: !0,
                      scrub: !0,
                      pinType: "transform",
                      pinSpacing: !1,
                      invalidateOnRefresh: !0,
                      start: () => `0   ${t}`,
                      end: () => `center  -${i}`,
                    },
                  });
                  let e = (0, o.default).timeline();
                  e
                    .add("start")
                    .from(map, { opacity: 0, duration: 2 }, "start")
                    .from(pallini, { opacity: 0, duration: 2 }, "start")
                    .from(cities, { opacity: 0, duration: 2 })
                    .from(primaEra, { opacity: 0, duration: 2 })
                    .from(secondaEra, { opacity: 0, duration: 2 })
                    .from(terzaEra, { opacity: 0, duration: 2 })
                    .from(after1830, { opacity: 0, duration: 2 }),
                    (0, a.ScrollTrigger).create({
                      animation: e,
                      containerAnimation: f,
                      trigger: ".p-03",
                      start: "left center",
                      end: "+=200",
                    });
                  let n = (0, o.default).timeline(),
                    s = (0, o.default).utils.toArray(".ageMap "),
                    l = n
                      .from(s, {
                        y: -50,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.7,
                        ease: "power3.inOut",
                      })
                      .to(s, {
                        x: -50,
                        duration: 1,
                        stagger: 0.7,
                        ease: "power3.inOut",
                      });
                  (0, a.ScrollTrigger).create({
                    animation: l,
                    containerAnimation: f,
                    pinSpacing: !1,
                    trigger: ".mapdiff",
                    start: "left center",
                    end: "+=200",
                  });
                })()
              ),
                requestAnimationFrame(m);
            }
          );
        };
      },
      {
        gsap: "fPSuC",
        "gsap/all": "3UJRo",
        "gsap/gsap-core": "05eeC",
        "426c7e0688609b44": "6rkt6",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "6rkt6": [
      function (e, t, r) {
        class n {
          constructor(e, t, r, n, i) {
            let o = e.width / e.height,
              a = n / i;
            (this.img = e),
              (this.x = t),
              (this.y = r),
              (this.width = n),
              (this.height = i),
              (this.bounds = [
                { width: e.width, height: e.height, sx: 0, sy: 0 },
              ]),
              (this.sw = o < a ? e.width : e.height * a),
              (this.sh = o < a ? e.width / a : e.height),
              this.pan(0.5, 0.5);
          }
          crop() {
            let { sw: e, sh: t, sx: r, sy: n } = this;
            return (
              this.bounds.push({ width: e, height: t, sx: r, sy: n }), this
            );
          }
          pan(e, t) {
            if (e < 0 || e > 1) throw Error("make sure 0 < cx < 1 ");
            if (t < 0 || t > 1) throw Error("make sure 0 < cy < 1 ");
            let {
              width: r,
              height: n,
              sx: i,
              sy: o,
            } = this.bounds[this.bounds.length - 1];
            return (
              (this.sx = i + (r - this.sw) * e),
              (this.sy = o + (n - this.sh) * t),
              this
            );
          }
          zoom(e) {
            if (e <= 0) throw Error("zoom not > 0");
            return (
              (this.sx += (this.sw - this.sw / e) / 2),
              (this.sy += (this.sh - this.sh / e) / 2),
              (this.sw /= e),
              (this.sh /= e),
              this
            );
          }
          render(e) {
            return (
              e.drawImage(
                this.img,
                this.sx,
                this.sy,
                this.sw,
                this.sh,
                this.x,
                this.y,
                this.width,
                this.height
              ),
              this
            );
          }
        }
        t.exports = (e, t, r, i, o) => new n(e, t, r, i, o);
      },
      {},
    ],
  },
  ["kx4kz", "f2QDv"],
  "f2QDv",
  "parcelRequire7f5a"
);
