(function (t) {
  function e(e) {
    for (
      var i, r, o = e[0], l = e[1], c = e[2], f = 0, u = [];
      f < o.length;
      f++
    )
      (r = o[f]),
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && u.push(s[r][0]),
        (s[r] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
    d && d(e);
    while (u.length) u.shift()();
    return n.push.apply(n, c || []), a();
  }
  function a() {
    for (var t, e = 0; e < n.length; e++) {
      for (var a = n[e], i = !0, o = 1; o < a.length; o++) {
        var l = a[o];
        0 !== s[l] && (i = !1);
      }
      i && (n.splice(e--, 1), (t = r((r.s = a[0]))));
    }
    return t;
  }
  var i = {},
    s = { app: 0 },
    n = [];
  function r(e) {
    if (i[e]) return i[e].exports;
    var a = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = t),
    (r.c = i),
    (r.d = function (t, e, a) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            a,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return a;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var c = 0; c < o.length; c++) e(o[c]);
  var d = l;
  n.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("56d7");
  },
  "02d4": function (t, e, a) {},
  "034f": function (t, e, a) {
    "use strict";
    a("85ec");
  },
  "04f3": function (t, e, a) {
    "use strict";
    a("e966");
  },
  "05e4": function (t, e, a) {
    t.exports = a.p + "img/Thirteenth.b15ec88d.png";
  },
  "073d": function (t, e, a) {
    "use strict";
    a("4ace");
  },
  "0a4b": function (t, e, a) {
    t.exports = a.p + "img/fourth.b46484f5.png";
  },
  "0b96": function (t, e, a) {
    t.exports = a.p + "img/Seventh.4a471ab3.png";
  },
  "0ce6": function (t, e, a) {
    t.exports = a.p + "img/second.cdfb3ffe.png";
  },
  "140d": function (t, e, a) {
    t.exports = a.p + "img/say-hello-to-new-people.f305a91c.svg";
  },
  "174b": function (t, e, a) {
    t.exports = a.p + "img/Sixth.7cbfe942.png";
  },
  "1f00": function (t, e, a) {},
  "206b": function (t, e, a) {},
  "2f64": function (t, e, a) {
    "use strict";
    a("6de6");
  },
  "301c": function (t, e, a) {
    t.exports = a.p + "img/hello.80803598.gif";
  },
  "3c57": function (t, e, a) {
    "use strict";
    a("d409");
  },
  4814: function (t, e, a) {
    t.exports = a.p + "img/third.d9c1f012.png";
  },
  "4a4a": function (t, e, a) {
    t.exports = a.p + "img/hero.1f11649d.svg";
  },
  "4ace": function (t, e, a) {},
  "4be3": function (t, e, a) {},
  "4d6b": function (t, e, a) {},
  5322: function (t, e, a) {
    "use strict";
    a("bec4");
  },
  5406: function (t, e, a) {},
  "56d7": function (t, e, a) {
    "use strict";
    a.r(e);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var i = a("2b0e"),
      s = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-app",
          { staticClass: "change-it" },
          [
            a("Toggler", { on: { close: t.statechange } }),
            a(
              "transition",
              { attrs: { name: "bounce" } },
              [
                a("Aside", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.showaside,
                      expression: "showaside",
                    },
                  ],
                }),
              ],
              1
            ),
            a("Firstslide", { attrs: { firstslide: t.firstheight } }),
            a("Secondslide", { attrs: { firstslide: t.secondheight } }),
            a("Scrollup", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.scrolltotopornot,
                  expression: "scrolltotopornot",
                },
              ],
            }),
            a("Thirdslide", { attrs: { thirdslide: t.thirdheight } }),
            a("Fourthslide", { attrs: { fourthslide: t.fourthheight } }),
            a("Fifthslide", { attrs: { fifthslide: t.fifthheight } }),
            a("Sixthslide", { attrs: { sixthslide: t.sixthheight } }),
            a("Seventhslide", { attrs: { seventhslide: t.seventhheight } }),
          ],
          1
        );
      },
      n = [],
      r = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "totalhere" },
          [
            t._m(0),
            a(
              "div",
              { staticClass: "iconshere" },
              [
                t._l(t.icons, function (t, e) {
                  return [
                    a("a", { key: e, attrs: { href: t.link } }, [
                      a("i", { staticClass: "fab fa-1x", class: t.view }),
                    ]),
                  ];
                }),
              ],
              2
            ),
            a("br"),
            a("Links"),
          ],
          1
        );
      },
      o = [
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "imageholder" }, [
            i("img", { attrs: { src: a("c87a"), alt: "Profile Pic Here" } }),
          ]);
        },
      ],
      l = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      c = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a("div", { staticClass: "flexhere" }, [
              a("div", [
                a("i", { staticClass: "far fas fa-home fa-1x icon" }),
                a("a", { staticClass: "a", attrs: { href: "#start" } }, [
                  t._v("Home"),
                ]),
              ]),
              a("div", [
                a("i", { staticClass: "far fa-id-badge fa-1x icon" }),
                a("a", { staticClass: "a", attrs: { href: "#secondslide" } }, [
                  t._v(" About"),
                ]),
              ]),
              a("div", [
                a("i", { staticClass: "far fa-address-card fa-1x icon" }),
                a("a", { staticClass: "a", attrs: { href: "#thirdslide" } }, [
                  t._v("Skills"),
                ]),
              ]),
              a("div", [
                a("i", { staticClass: "fas fa-tasks fa-1x icon" }),
                a("a", { staticClass: "a", attrs: { href: "#fourthslide" } }, [
                  t._v("Projects"),
                ]),
              ]),
              a("div", [
                a("i", { staticClass: "fas fa-handshake fa-1x icon" }),
                a("a", { staticClass: "a", attrs: { href: "#fifthslide" } }, [
                  t._v("Experience"),
                ]),
              ]),
              a("div", [
                a("i", { staticClass: "fas fa-medal fa-1x icon" }),
                a("a", { staticClass: "a", attrs: { href: "#sixthslide" } }, [
                  t._v("Achievements"),
                ]),
              ]),
              a("div", [
                a("i", { staticClass: "fas fa-phone fa-1x icon" }),
                a("a", { staticClass: "a", attrs: { href: "#seventhslide" } }, [
                  t._v("Contact"),
                ]),
              ]),
              a(
                "div",
                {
                  staticClass: "copyright",
                  staticStyle: {
                    "margin-top": "1vh",
                    color: "white",
                    "margin-left": "10px",
                  },
                },
                [
                  t._v(" © Copyright 2021 "),
                  a(
                    "a",
                    {
                      staticStyle: {
                        "text-decoration": "none",
                        color: "skyblue",
                        "white-space": "pre",
                      },
                      attrs: {
                        href: "mailto:devulapallisaiprachodhan26@gmail.com?subject=&body=Hello Prachodhan,",
                      },
                    },
                    [t._v("Sai Prachodhan")]
                  ),
                ]
              ),
            ]),
          ]);
        },
      ],
      d = { name: "Links" },
      f = d,
      u = (a("7b3f"), a("2877")),
      p = Object(u["a"])(f, l, c, !1, null, "b1f4d7d4", null),
      h = p.exports,
      v = {
        name: "Aside",
        components: { Links: h },
        data: function () {
          return {
            icons: [
              { view: "fa-github", link: "https://github.com/devulapallisai" },
              {
                view: "fa-linkedin-in",
                link: "https://www.linkedin.com/in/sai-prachodhan-devulapalli-4361a1216/",
              },
              {
                view: "fa-instagram",
                link: "https://www.instagram.com/saiprachodhan/",
              },
              { view: "fa-twitter", link: "https://twitter.com/PrachodhanSai" },
              {
                view: "fa-discord",
                link: "https://discordapp.com/users/782234695395180585",
              },
              {
                view: "fa-facebook-f",
                link: "https://www.facebook.com/devulapallisai.prachodhan/",
              },
            ],
          };
        },
        methods: {},
      },
      g = v,
      m = (a("ddde"), Object(u["a"])(g, r, o, !1, null, "30e2b02e", null)),
      b = m.exports,
      y = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("MountingPortal", { attrs: { mountTo: "#fifth" } }, [
          a(
            "div",
            {
              staticClass: "fifthslide",
              staticStyle: { position: "relative" },
              attrs: { id: "fifthslide" },
            },
            [
              a("div", { staticClass: "imgit hello" }, [
                a("img", { attrs: { src: t.Experience, alt: "Animation" } }),
              ]),
              a("div", { staticClass: "imgit hi" }, [
                a("img", { attrs: { src: t.Treat, alt: "Animation" } }),
              ]),
              a("div", { staticClass: "imgit hifi" }, [
                a("img", { attrs: { src: t.Treat, alt: "Animation" } }),
              ]),
              a("div", { staticClass: "imgit lowfi" }, [
                a("img", { attrs: { src: t.Torch, alt: "Animation" } }),
              ]),
              a("div", { staticClass: "headingstyle" }, [t._v("Experience")]),
              a("div", { attrs: { id: "span" } }),
              a(
                "ul",
                { staticClass: "timeline" },
                [
                  t._l(t.experiences, function (e, i) {
                    return [
                      a("li", { key: i }, [
                        a(
                          "div",
                          { class: i % 2 == 0 ? "direction-l" : "direction-r" },
                          [
                            a("div", { staticClass: "flag-wrapper" }, [
                              a(
                                "span",
                                {
                                  staticClass: "flag",
                                  staticStyle: { "font-family": "'Poppins'" },
                                },
                                [t._v(t._s(e.name))]
                              ),
                              a("span", { staticClass: "time-wrapper" }, [
                                a("span", { staticClass: "time" }, [
                                  t._v(t._s(e.time)),
                                ]),
                              ]),
                            ]),
                            a("div", { staticClass: "desc" }, [
                              t._v(" " + t._s(e.desc) + " "),
                            ]),
                          ]
                        ),
                      ]),
                    ];
                  }),
                ],
                2
              ),
              a("br"),
            ]
          ),
        ]);
      },
      C = [],
      _ = a("f9bb"),
      k = a.n(_),
      x = a("c136"),
      w = a.n(x),
      S = a("84ed"),
      T = a.n(S),
      E = {
        data: function () {
          return {
            Treat: k.a,
            Torch: w.a,
            Experience: T.a,
            experiences: [
              {
                name: "Interim Engineering Intern",
                time: "2023 May - current",
                desc: "Working as Interim Engineering Intern Software at Qualcomm, Hyderabad",
              },
              {
                name: "Tech coordinator",
                time: "2022 May - 2023 April",
                desc: "Working as backend developer at Office of Career services, IITH. Maintaining placement/internship website portal and constantly monitoring errors and updates of the website.",
              },
              {
                name: "Intern",
                time: "2022 May - 2022 July",
                desc: "Selected for a web development internship for Alecado systems and worked on frontend of React+Web3 stack project (NFT minting part in the frontend).",
              },
              {
                name: "Intern",
                time: "2021 Nov - 2022 Jan",
                desc: "Selected for a internship for LueuerTech and done a website to complete my internship using AOS and Javascript.",
              },
              {
                name: "Lambda core",
                time: "2021 July - present",
                desc: "one of the cores of Lambda aka Software Development Club of IITH.",
              },
              {
                name: "Kludge core",
                time: "2021 July - present",
                desc: "one of the cores of Kludge aka Cybersecurity Club of IITH.",
              },
              {
                name: "Elan Coord",
                time: "2021 June - present",
                desc: "Part of web team of Elan & Nvision, Cultural fest of IITH and designed three websites mentioned above in projects.",
              },
              {
                name: "Web coord",
                time: "2021 May - present",
                desc: "Part of web team of Sunshine, IITH and done new Sunshine website in Gatsby.",
              },
              {
                name: "Media Coord",
                time: "2021 April - present",
                desc: "Part of web team of Gymkhana, Student council of IITH and responsible for Gymkhana IITH websites update and ECHO blog.",
              },
              {
                name: "BTECH",
                time: "2020 Nov - present",
                desc: "At present studying Bachelor of Technology at IITH in Electrical Engineering.",
              },
              {
                name: "Intermediate",
                time: "2018 - 2020",
                desc: "Completed my intermediate i.e  Class - XII at Alphores Junior college  with 98% marks.",
              },
            ],
          };
        },
      },
      I = E,
      P = (a("8b9c"), Object(u["a"])(I, y, C, !1, null, "2d17f9d5", null)),
      F = P.exports,
      j = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { attrs: { id: "start" } },
          [
            a("Info"),
            a(
              "div",
              { staticClass: "textonslide", staticStyle: { "z-index": "20" } },
              [
                t._v(" Sai Prachodhan Devulapalli "),
                a("div", { attrs: { id: "span" } }),
                t._v(" I'm "),
                a("vue-typer", {
                  attrs: {
                    text: t.text,
                    "erase-style": "backspace",
                    shuffle: !1,
                    "initial-action": "typing",
                    "pre-type-delay": 70,
                    "type-delay": 70,
                    "pre-erase-delay": 2e3,
                    "erase-delay": 250,
                  },
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      A = [],
      V = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          {
            staticClass: "vanta",
            staticStyle: { position: "relative" },
            attrs: { id: "vanta" },
          },
          [
            a("div", { staticClass: "positw" }, [
              a("img", {
                staticStyle: { height: "15vw" },
                attrs: { src: t.fir, alt: "Imag" },
              }),
            ]),
            a("div", { staticClass: "positwa" }, [
              a("img", {
                staticStyle: { height: "200px" },
                attrs: { src: t.ball, alt: "Imag" },
              }),
            ]),
            t._m(0),
          ]
        );
      },
      O = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "waveWrapper waveAnimation" }, [
            a(
              "div",
              {
                staticClass: "waveWrapperInner bgTop",
                staticStyle: { top: "0" },
              },
              [
                a("div", {
                  staticClass: "wave waveTop",
                  staticStyle: {
                    "background-image":
                      "url('http://front-end-noobs.com/jecko/img/wave-top.png')",
                  },
                }),
              ]
            ),
            a("div", { staticClass: "waveWrapperInner bgMiddle" }, [
              a("div", {
                staticClass: "wave waveMiddle",
                staticStyle: {
                  "background-image":
                    "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
                },
              }),
            ]),
            a("div", { staticClass: "waveWrapperInner bgBottom" }, [
              a("div", {
                staticClass: "wave waveBottom",
                staticStyle: {
                  "background-image":
                    "url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
                },
              }),
            ]),
          ]);
        },
      ],
      D = a("bc0f"),
      H = a.n(D),
      M = a("7a98"),
      J = a.n(M),
      B = {
        data: function () {
          return { fir: H.a, ball: J.a };
        },
      },
      N = B,
      L = (a("04f3"), Object(u["a"])(N, V, O, !1, null, "c30c411e", null)),
      $ = L.exports,
      G = {
        components: { Info: $ },
        name: "Firstslide",
        data: function () {
          return {
            text: ["Web developer", "Student", "Programmer", "ML Enthusiast"],
          };
        },
      },
      W = G,
      R =
        (a("68f2"),
        a("f379"),
        Object(u["a"])(W, j, A, !1, null, "6127e5a1", null)),
      q = R.exports,
      z = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("MountingPortal", { attrs: { mountTo: "#fourth" } }, [
          a(
            "div",
            {
              staticClass: "fourthslide",
              staticStyle: { position: "relative" },
              attrs: { id: "fourthslide" },
            },
            [
              a(
                "div",
                { staticClass: "heading" },
                [
                  a("div", { staticClass: "headingstyle" }, [t._v("Projects")]),
                  a("div", { attrs: { id: "span" } }),
                  a("br"),
                  a("div", { staticClass: "relative" }, [
                    a("div", { staticClass: "my-auto heightit" }, [
                      a(
                        "div",
                        { staticClass: "text-center" },
                        [
                          t._l(t.forlloop, function (e, i) {
                            return [
                              a(
                                "v-tooltip",
                                {
                                  key: i,
                                  attrs: { left: "", color: e[0] },
                                  scopedSlots: t._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function (i) {
                                          var s = i.on,
                                            n = i.attrs;
                                          return [
                                            a(
                                              "v-btn",
                                              t._g(
                                                t._b(
                                                  {
                                                    staticClass: "mx2",
                                                    staticStyle: {
                                                      margin: "10px",
                                                    },
                                                    style: { background: e[0] },
                                                    attrs: {
                                                      fab: "",
                                                      dark: "",
                                                      small: "",
                                                      color: e[0],
                                                    },
                                                    on: {
                                                      click: function (a) {
                                                        return t.handler(e[3]);
                                                      },
                                                    },
                                                  },
                                                  "v-btn",
                                                  n,
                                                  !1
                                                ),
                                                s
                                              ),
                                              [
                                                a("i", {
                                                  class: e[2],
                                                  staticStyle: {
                                                    "font-size": "18px",
                                                  },
                                                }),
                                              ]
                                            ),
                                          ];
                                        },
                                      },
                                    ],
                                    null,
                                    !0
                                  ),
                                },
                                [a("span", [t._v(t._s(e[3]))])]
                              ),
                            ];
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]),
                  a(
                    "v-row",
                    {
                      staticStyle: { "justify-content": "center" },
                      attrs: { "no-gutters": "" },
                    },
                    [
                      t._l(t.tabs, function (e, i) {
                        return [
                          a(
                            "v-col",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    e.category.includes(t.cat) || "" === t.cat,
                                  expression:
                                    "tab.category.includes(cat) || cat === ''",
                                },
                              ],
                              key: e.thing,
                              staticStyle: { margin: "10px" },
                              attrs: { cols: "10", sm: "3" },
                            },
                            [
                              a(
                                "a",
                                {
                                  staticStyle: {
                                    "text-decoration": "none",
                                    "font-family": "'Zen Antique Soft', serif",
                                  },
                                  attrs: { href: e.link, target: "_blank" },
                                  on: {
                                    mouseover: function (e) {
                                      t.showit = !0;
                                    },
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    {
                                      staticClass: "cardinmob",
                                      attrs: {
                                        elevation: "10",
                                        shaped: "",
                                        outlined: "",
                                        "data-aos": "fade-up",
                                      },
                                    },
                                    [
                                      a(
                                        "v-card-title",
                                        { staticClass: "flexinall" },
                                        [
                                          a(
                                            "div",
                                            {
                                              staticStyle: {
                                                "font-family": "'Poppins'",
                                              },
                                            },
                                            [t._v(t._s(e.thing))]
                                          ),
                                          a("img", {
                                            staticStyle: {
                                              width: "100%",
                                              height: "auto",
                                              "margin-bottom": "2px",
                                            },
                                            attrs: { src: e.fig, alt: "Image" },
                                          }),
                                          a(
                                            "v-card-text",
                                            {
                                              style: {
                                                padding: 0,
                                                marginBottom: "10px",
                                              },
                                            },
                                            [
                                              t._v(
                                                " " + t._s(e.description) + " "
                                              ),
                                            ]
                                          ),
                                          a(
                                            "v-row",
                                            {
                                              staticClass: "displayitre",
                                              style: { margin: 0 },
                                            },
                                            [
                                              t._l(e.tech, function (e) {
                                                return [
                                                  a(
                                                    "v-chip",
                                                    {
                                                      key: e,
                                                      staticClass: "ma-2",
                                                      staticStyle: {
                                                        margin: "2px",
                                                      },
                                                      style: {
                                                        background:
                                                          t.colors[i % 7],
                                                        color: "white",
                                                        margin: 2,
                                                      },
                                                      attrs: {
                                                        "text-color": "white",
                                                      },
                                                    },
                                                    [t._v(" " + t._s(e) + " ")]
                                                  ),
                                                ];
                                              }),
                                            ],
                                            2
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ];
                      }),
                    ],
                    2
                  ),
                ],
                1
              ),
            ]
          ),
        ]);
      },
      K = [],
      U = a("ac05"),
      X = a.n(U),
      Q = a("0ce6"),
      Z = a.n(Q),
      Y = a("4814"),
      tt = a.n(Y),
      et = a("0a4b"),
      at = a.n(et),
      it = a("fdf5"),
      st = a.n(it),
      nt = a("174b"),
      rt = a.n(nt),
      ot = a("0b96"),
      lt = a.n(ot),
      ct = a("e97d"),
      dt = a.n(ct),
      ft = a("9657"),
      ut = a.n(ft),
      pt = a("71de"),
      ht = a.n(pt),
      vt = a("9983"),
      gt = a.n(vt),
      mt = a("05e4"),
      bt = a.n(mt),
      yt = a("8479"),
      Ct = a.n(yt),
      _t = {
        data: function () {
          return {
            colors: [
              "#53B257",
              "#3F51B5",
              "#F44336",
              "#E91963",
              "#FF9800",
              "#009688",
              "#1867C0",
            ],
            cat: "",
            forlloop: [
              ["indigo", "TabC", "fab fa-bootstrap", "Frontend"],
              ["green", "TabD", "fab fa-node-js", "Backend"],
              ["#001234", "TabE", "fas fa-globe", "Full stack"],
              ["#4caf50", "TabB", "fab fa-python", "Python development"],
              ["#ff5252", "TabB", "fas fa-toolbox", "All projects"],
            ],
            tabs: [
              {
                thing: "Portfolio Website",
                description: "This is my portfolio website.",
                link: "/",
                tech: ["Vue2", "Vuetify"],
                fig: X.a,
                category: ["Frontend"],
              },
              {
                thing: "Elan & Nvision",
                description: "This is a website for cultural fest IITH 2022.",
                fig: Z.a,
                tech: ["React", "Tailwindcss"],
                link: "https://elan-2022.netlify.app/",
                category: ["Frontend"],
              },
              {
                thing: "CA Program Elan",
                description: "Campus Ambassdor program website.",
                link: "https://ca.elan.org.in",
                tech: ["EJS", "ExpressJs"],
                fig: at.a,
                category: ["Full stack", "Backend", "Frontend"],
              },
              {
                thing: "Blog",
                description:
                  "MERN Blog project with Firebase Google sign-in and Express.",
                link: "https://blog-frontend-eta-lyart.vercel.app/",
                fig: bt.a,
                tech: ["MERN", "Firebase"],
                category: ["Full stack", "Backend", "Frontend"],
              },
              {
                thing: "Whatsappweb Clone",
                description: "A basic whatsapp web clone web sockets.",
                fig: "../img/whatsapp.png",
                tech: ["Sockets.io", "MERN", "Docker"],
                link: "https://whatsappwebclone2022.netlify.app/",
                category: ["Full stack", "Backend", "Frontend"],
              },
              {
                thing: "Student Helper",
                description:
                  "A web-app that I done for MILAN to reduce mails for cab sharing, lost/found at IITH.",
                fig: st.a,
                tech: ["Sheets API", "JS"],
                link: "https://devulapallisai.github.io/milan/",
                category: ["Frontend"],
              },
              {
                thing: "Todo App",
                description:
                  "Simple MERN project with Json web token package in Express.",
                link: "https://todo-express-2022.netlify.app/",
                fig: gt.a,
                tech: ["MERN", "heroku"],
                category: ["Full stack", "Backend", "Frontend"],
              },
              {
                thing: "InstantNotetaker",
                description:
                  "A PWA which serves as Notes app using localstorageAPI",
                link: "https://instantnotetaker.me",
                fig: lt.a,
                tech: ["JS", "LocalStorageAPI"],
                category: ["Frontend"],
              },
              {
                thing: "Elan Beta Website",
                description:
                  "This is a temporary website for Elan cultural fest IITH 2022 for sponsors.",
                fig: dt.a,
                tech: ["AOS", "VantaJS"],
                link: "https://devulapallisai.github.io/Elan-Nvision/",
                category: ["Frontend"],
              },
              {
                thing: "Social Cause Elan",
                description:
                  "Online portal against cyber harassment for Elan & nVision 2022.",
                fig: tt.a,
                tech: ["JS", "Sheets API"],
                link: "https://social-cause-elan22.netlify.app/",
                category: ["Frontend"],
              },
              {
                thing: "SWOT Generator",
                description:
                  "A website takes data as input to a page which has some design so that you can have screenshot of that.",
                link: "https://devulapallisai.github.io/SWOT-Analysis-Generator/",
                fig: rt.a,
                tech: ["JS", "HTML5 & CSS"],
                category: ["Frontend"],
              },
              {
                thing: "Flappy bird",
                description:
                  "A web browser flappy bird game clone using Javascript works  on laptop only",
                link: "https://devulapallisai.github.io/A-laptop-Flappy-Bird-Game/",
                fig: ut.a,
                tech: ["JS", "HTML5 & CSS"],
                category: ["Frontend"],
              },
              {
                thing: "Notepad Clone",
                description:
                  "Windows Notepad clone using Python GUI library Tkinter",
                link: "https://github.com/devulapallisai/Own-Notepad-",
                fig: ht.a,
                tech: ["Tkinter", "Pywhatkit"],
                category: ["Python"],
              },
              {
                thing: "Movie app",
                description: "Based on tutorial to learn Redux, Redux Toolkit.",
                link: "https://movieapp-pn9ykq2ox-devulapallisai.vercel.app/",
                fig: "../img/movieapp.png",
                tech: ["Redux", "OMDBAPI", "Typescript"],
                category: ["Frontend"],
              },
              {
                thing: "Desktop Assistant",
                description: "Fun project to explore and learn python modules.",
                link: "https://github.com/devulapallisai/Desktop-Assistant",
                fig: Ct.a,
                tech: ["Python modules"],
                category: ["Python"],
              },
            ],
          };
        },
        methods: {
          handler: function (t) {
            console.log("clicked", t, this.tabs),
              (this.cat =
                "Full stack" === t
                  ? "Full stack"
                  : "Frontend" === t
                  ? "Frontend"
                  : "Backend" === t
                  ? "Backend"
                  : "Python development" === t
                  ? "Python"
                  : "");
          },
        },
      },
      kt = _t,
      xt = (a("2f64"), a("6544")),
      wt = a.n(xt),
      St = a("8336"),
      Tt = a("b0af"),
      Et = a("99d9"),
      It = a("cc20"),
      Pt = a("62ad"),
      Ft = a("0fd9"),
      jt = a("3a2f"),
      At = Object(u["a"])(kt, z, K, !1, null, "ba2ae380", null),
      Vt = At.exports;
    wt()(At, {
      VBtn: St["a"],
      VCard: Tt["a"],
      VCardText: Et["a"],
      VCardTitle: Et["b"],
      VChip: It["a"],
      VCol: Pt["a"],
      VRow: Ft["a"],
      VTooltip: jt["a"],
    });
    var Ot = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("i", {
          staticClass: "fas scrollup fa-angle-double-up",
          on: { click: t.scrolltopman },
        });
      },
      Dt = [],
      Ht = {
        name: "Scrollup",
        data: function () {
          return {};
        },
        methods: {
          scrolltopman: function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
        },
      },
      Mt = Ht,
      Jt = (a("f6f2"), Object(u["a"])(Mt, Ot, Dt, !1, null, null, null)),
      Bt = Jt.exports,
      Nt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("MountingPortal", { attrs: { mountTo: "#second" } }, [
          i("div", { attrs: { id: "secondslide" } }, [
            i("div", { staticClass: "headingsecondslide" }, [
              t._v(" About "),
              i("div", { attrs: { id: "span" } }),
            ]),
            i("div", { staticClass: "imageandstart" }, [
              t._v(" Hello peeps! I am "),
              i("b", [t._v("Sai Prachodhan Devulapalli")]),
              t._v(
                " from Telangana, India. I am persuing my Undergraduate course in Electrical Engineering department at Indian Institute of Technology, Hyderabad. Basically I am a "
              ),
              i("b", [t._v("full stack web developer")]),
              t._v(" with some basics of Backend with "),
              i("b", [t._v("flask")]),
              t._v("(python) and "),
              i("b", [t._v("Express")]),
              t._v(
                "(JS). I like projects related to Electrical engineering in combination with coding. I am also an AI/ML Enthusiast (currently exploring this field)."
              ),
              t._v(". "),
            ]),
            i("div", { staticClass: "flexbox" }, [
              i(
                "div",
                {
                  staticClass: "image",
                  attrs: { "data-aos": "fade-right", "data-aos-once": "true" },
                },
                [i("img", { attrs: { src: a("140d"), alt: "Image" } })]
              ),
              i(
                "div",
                {
                  staticClass: "textsecond",
                  attrs: { "data-aos": "fade-left", "data-aos-once": "true" },
                },
                [
                  i("h3", { staticClass: "headingtextsecond" }, [
                    t._v("My Details"),
                  ]),
                  t._v(
                    " I am a Student developer and passionate about knowing new things. Presently I am exploring Machine Learning and Deep Learning. I have done couple of some college websites and "
                  ),
                  i("b", [
                    i(
                      "span",
                      {
                        staticStyle: {
                          cursor: "pointer",
                          "text-decoration": "underline",
                        },
                        on: { click: t.scrolltoproject },
                      },
                      [t._v("projects")]
                    ),
                  ]),
                  i("div", { staticClass: "items" }, [
                    i("div", [
                      i("i", {
                        staticClass: "fas fa-chevron-right",
                        staticStyle: { color: "#149DDD" },
                      }),
                      i("b", [t._v("   Name")]),
                      t._v(": Sai Prachodhan Devulapalli "),
                    ]),
                    i("div", [
                      i("i", {
                        staticClass: "fas fa-chevron-right",
                        staticStyle: { color: "#149DDD" },
                      }),
                      i("b", [t._v("   Degree")]),
                      t._v(": BTECH, Electrical Engineering "),
                    ]),
                    i("div", [
                      i("i", {
                        staticClass: "fas fa-chevron-right",
                        staticStyle: { color: "#149DDD" },
                      }),
                      i("b", [t._v("   College")]),
                      t._v(": Indian Institute of Technology, Hyderabad "),
                    ]),
                    i("div", [
                      i("i", {
                        staticClass: "fas fa-chevron-right",
                        staticStyle: { color: "#149DDD" },
                      }),
                      i("b", [t._v("   Email")]),
                      t._v(": "),
                      i(
                        "a",
                        {
                          staticStyle: {
                            "text-decoration": "none",
                            color: "#149DDD",
                          },
                          attrs: {
                            href: "mailto:devulapallisaiprachodhan26@gmail.com",
                          },
                        },
                        [t._v("devulapallisaiprachodhan26@gmail.com")]
                      ),
                    ]),
                    i("div", [
                      i("i", {
                        staticClass: "fas fa-chevron-right",
                        staticStyle: { color: "#149DDD" },
                      }),
                      i("b", [t._v("   Contact No")]),
                      t._v(": 9160571016 "),
                    ]),
                  ]),
                ]
              ),
            ]),
            i("br"),
            i("br"),
          ]),
        ]);
      },
      Lt = [],
      $t = {
        name: "Secondslide",
        secondheight: 0,
        methods: {
          scrolltoproject: function () {
            document.getElementById("fourthslide").scrollIntoView();
          },
        },
        beforeMount: function () {
          this.secondheight = window.innerHeight;
        },
      },
      Gt = $t,
      Wt = (a("5322"), Object(u["a"])(Gt, Nt, Lt, !1, null, "19c64c69", null)),
      Rt = Wt.exports,
      qt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("MountingPortal", { attrs: { mountTo: "#seventh" } }, [
          a(
            "div",
            { staticClass: "seventhslide", attrs: { id: "seventhslide" } },
            [
              a(
                "section",
                {
                  staticStyle: { position: "relative" },
                  attrs: { id: "contact" },
                },
                [
                  a("div", { staticClass: "ima" }, [
                    a("img", { attrs: { src: t.Part, alt: "Omg" } }),
                  ]),
                  // a("div", { staticClass: "imgeee" }, [
                  //   a("img", { attrs: { src: t.Hello, alt: "hello" } }),
                  // ]),
                  a("div", { staticClass: "contact-box" }, [
                    a("div", { staticClass: "contact-links" }, [
                      a("h2", [t._v("CONTACT")]),
                      a("div", { staticClass: "links" }, [
                        a("div", { staticClass: "link" }, [
                          a(
                            "a",
                            {
                              attrs: {
                                href: "https://www.linkedin.com/in/sai-prachodhan-devulapalli-4361a1216/",
                              },
                            },
                            [
                              a("img", {
                                staticClass: "img",
                                attrs: { src: t.Linkedin, alt: "linkedin" },
                              }),
                            ]
                          ),
                        ]),
                        a("div", { staticClass: "link" }, [
                          a(
                            "a",
                            {
                              attrs: {
                                href: "https://github.com/devulapallisai",
                              },
                            },
                            [
                              a("img", {
                                staticClass: "img",
                                attrs: { src: t.Github, alt: "github" },
                              }),
                            ]
                          ),
                        ]),
                        a("div", { staticClass: "link" }, [
                          a(
                            "a",
                            {
                              attrs: {
                                href: "https://www.facebook.com/devulapallisai.prachodhan/",
                              },
                            },
                            [
                              a("img", {
                                staticClass: "img",
                                attrs: { src: t.Facebook, alt: "facebook" },
                              }),
                            ]
                          ),
                        ]),
                        a("div", { staticClass: "link" }, [
                          a(
                            "a",
                            {
                              attrs: {
                                href: "mailto:devulapallisaiprachodhan26@gmail.com",
                              },
                            },
                            [
                              a("img", {
                                staticClass: "img",
                                attrs: { src: t.mail, alt: "email" },
                              }),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    a("div", { staticClass: "contact-form-wrapper" }, [
                      a(
                        "form",
                        // { staticClass: "myForm" },
                        {
                          on: {
                            submit: function (A) {
                              A.preventDefault();
                              let name =
                                document.querySelectorAll("input[type=text]")[0]
                                  .value;
                              let email =
                                document.querySelectorAll("input[type=text]")[1]
                                  .value;
                              let message =
                                document.getElementsByTagName("textarea")[0]
                                  .value;
                              // console.log(name, email, message);

                              const data = {
                                // Timestamp: new Date(),
                                sender: name,
                                email: email,
                                message: message,
                              };

                              // Add one line to the sheet
                              fetch(
                                "https://sheet.best/api/sheets/0e7b8e15-2fd3-43f3-89f5-7d18e74885b3",
                                {
                                  method: "POST",
                                  mode: "cors",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify(data),
                                }
                              )
                                .then((r) => r.json())
                                .then((data) => {
                                  // The response comes here
                                  document.querySelectorAll(
                                    "input[type=text]"
                                  )[0].value = "";
                                  document.querySelectorAll(
                                    "input[type=text]"
                                  )[1].value = "";
                                  document.getElementsByTagName(
                                    "textarea"
                                  )[0].value = "";
                                  // console.log(data);
                                  alert("Successfully sent !!!");
                                })
                                .catch((error) => {
                                  // Errors are reported there
                                  alert(
                                    "There is some error please try again later!!!"
                                  );
                                });
                            },
                          },
                        },
                        [
                          a("div", { staticClass: "form-item" }, [
                            a("input", {
                              attrs: {
                                type: "text",
                                name: "sender",
                                required: "",
                              },
                            }),
                            a("label", [t._v("Name:")]),
                          ]),
                          a("div", { staticClass: "form-item" }, [
                            a("input", {
                              attrs: {
                                type: "text",
                                name: "email",
                                required: "",
                              },
                            }),
                            a("label", [t._v("Email:")]),
                          ]),
                          a("div", { staticClass: "form-item" }, [
                            a("textarea", {
                              attrs: { name: "message", required: "" },
                            }),
                            a("label", [t._v("Message:")]),
                          ]),
                          a("button", { staticClass: "submit-btn" }, [
                            t._v("Send", {
                              on: {
                                click: function (A) {
                                  A.preventDefault();
                                },
                              },
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          ),
        ]);
      },
      zt = [],
      Kt = a("9b63"),
      Ut = a.n(Kt),
      Xt = a("81e3"),
      Qt = a.n(Xt),
      Zt = a("87f9"),
      Yt = a.n(Zt),
      te = a("301c"),
      ee = a.n(te),
      ae = a("8163"),
      ie = a.n(ae),
      se = a("c66f"),
      ne = a.n(se),
      re = {
        data: function () {
          return {
            Github: Ut.a,
            Facebook: Qt.a,
            Linkedin: Yt.a,
            mail: ne.a,
            Part: ie.a,
            Hello: ee.a,
          };
        },
      },
      oe = re,
      le = (a("a0b7"), Object(u["a"])(oe, qt, zt, !1, null, "5974f6a2", null)),
      ce = le.exports,
      de = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("MountingPortal", { attrs: { mountTo: "#sixth" } }, [
          a(
            "div",
            {
              staticClass: "sixthslide",
              staticStyle: { position: "relative" },
              attrs: { id: "sixthslide" },
            },
            [
              a("div", { staticClass: "headingstyle" }, [t._v("Achievements")]),
              a("div", { attrs: { id: "span" } }),
              a("div", { staticClass: "honbe headitit" }, [
                a("img", { attrs: { src: t.Animation, alt: "Animation" } }),
              ]),
              a("div", { staticClass: "hqiq headitit" }, [
                a("img", { attrs: { src: t.Party, alt: "Animation" } }),
              ]),
              a("br"),
              a("br"),
              a("main", [
                a("ol", { staticClass: "gradient-list" }, [
                  a("li", [
                    a("h3", [
                      a("b", { staticStyle: { "font-family": "'Poppins'" } }, [
                        t._v("JEE Mains and Advanced"),
                      ]),
                    ]),
                    a(
                      "div",
                      {
                        staticStyle: {
                          "text-align": "left",
                          "padding-top": "5px",
                        },
                      },
                      [
                        a("div", [
                          t._v(
                            " (a) I cleared JEE Advanced exam in my first attempt in 2020 with marks of 157 for 396 and rank of 3949. "
                          ),
                        ]),
                        a("div", [
                          t._v(
                            " (b) I cleared JEE mains exam in 2020 with marks of 210 for 300 and rank of 7804. "
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  a("li", [
                    a("h3", [
                      a("b", { staticStyle: { "font-family": "'Poppins'" } }, [
                        t._v("Codejuring | NIT Patna"),
                      ]),
                    ]),
                    a(
                      "div",
                      {
                        staticStyle: {
                          "text-align": "left",
                          "padding-top": "5px",
                        },
                      },
                      [
                        t._v(
                          " I got 28th rank in coding competition by NIT patna called Codejuring. "
                        ),
                      ]
                    ),
                  ]),
                  a("li", [
                    a("h3", [
                      a("b", { staticStyle: { "font-family": "'Poppins'" } }, [
                        t._v("Hacktoberfest 2021"),
                      ]),
                    ]),
                    a(
                      "div",
                      {
                        staticStyle: {
                          "text-align": "left",
                          "padding-top": "5px",
                        },
                      },
                      [
                        t._v(
                          " I have completed successfully 7 Pull Requests to different repositories to finish Hacktoberfest. "
                        ),
                      ]
                    ),
                  ]),
                  a("li", [
                    a("h3", [
                      a("b", { staticStyle: { "font-family": "'Poppins'" } }, [
                        t._v(" Tinkerers Lab | IIT Hyderabad"),
                      ]),
                    ]),
                    a(
                      "div",
                      {
                        staticStyle: {
                          "text-align": "left",
                          "padding-top": "5px",
                        },
                      },
                      [
                        t._v(
                          "I got first rank in a Hackathon jointly conducted by Tinkerers lab and Lambda of IITH. "
                        ),
                      ]
                    ),
                  ]),
                  a("li", [
                    a("h3", [
                      a("b", { staticStyle: { "font-family": "'Poppins'" } }, [
                        t._v(" Milan | IIT Hyderabad"),
                      ]),
                    ]),
                    a(
                      "div",
                      {
                        staticStyle: {
                          "text-align": "left",
                          "padding-top": "5px",
                        },
                      },
                      [
                        t._v(
                          " I and my team got 4th rank in Lambda Hackathon in Milan which is a inter Hostel General Championship. "
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]
          ),
        ]);
      },
      fe = [],
      ue = a("a40f"),
      pe = a.n(ue),
      he = a("5942"),
      ve = a.n(he),
      ge = {
        data: function () {
          return { Animation: pe.a, Party: ve.a };
        },
      },
      me = ge,
      be = (a("bec49"), Object(u["a"])(me, de, fe, !1, null, "4e009d7e", null)),
      ye = be.exports,
      Ce = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("MountingPortal", { attrs: { mountTo: "#outside" } }, [
          i("div", { staticClass: "thirdslide", attrs: { id: "thirdslide" } }, [
            i(
              "div",
              {
                staticClass: "imageskill",
                staticStyle: { display: "flex", "justify-content": "center" },
              },
              [i("img", { attrs: { src: a("4a4a"), alt: "Image" } })]
            ),
            i("div", { staticClass: "Wrapperdiv" }, [
              i("div", { staticClass: "headingsecondslide" }, [
                t._v(" Skills "),
                i("div", { attrs: { id: "span" } }),
              ]),
              i(
                "div",
                {
                  staticClass: "imageandstart",
                  staticStyle: { "justify-content": "center" },
                },
                [
                  i(
                    "div",
                    { staticClass: "fit" },
                    [
                      t._l(t.forlloop, function (e) {
                        return [
                          i(
                            "v-tooltip",
                            {
                              key: e[0],
                              attrs: { bottom: "", color: e[0] },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function (a) {
                                      var s = a.on,
                                        n = a.attrs;
                                      return [
                                        i(
                                          "v-btn",
                                          t._g(
                                            t._b(
                                              {
                                                staticClass: "mx2",
                                                style: { background: e[0] },
                                                attrs: {
                                                  fab: "",
                                                  dark: "",
                                                  large: "",
                                                  color: e[0],
                                                },
                                                on: {
                                                  click: function (a) {
                                                    t.activeTab = e[1];
                                                  },
                                                },
                                              },
                                              "v-btn",
                                              n,
                                              !1
                                            ),
                                            s
                                          ),
                                          [
                                            i("i", {
                                              class: e[2],
                                              staticStyle: {
                                                "font-size": "24px",
                                              },
                                            }),
                                          ]
                                        ),
                                      ];
                                    },
                                  },
                                ],
                                null,
                                !0
                              ),
                            },
                            [i("span", [t._v(t._s(e[3]))])]
                          ),
                        ];
                      }),
                    ],
                    2
                  ),
                  i(
                    "transition",
                    { attrs: { name: "component-fade", mode: "out-in" } },
                    [i(t.activeTab, { tag: "component" })],
                    1
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]);
      },
      _e = [],
      ke = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-row",
          {
            staticStyle: { "justify-content": "center" },
            attrs: { "no-gutters": "" },
          },
          [
            t._l(t.skills, function (e, i) {
              return [
                a(
                  "v-col",
                  {
                    key: i,
                    staticStyle: { margin: "10px" },
                    attrs: { cols: "12", sm: "3" },
                  },
                  [
                    a(
                      "v-card",
                      { attrs: { elevation: "3" } },
                      [
                        a("v-card-title", { staticClass: "flexinall" }, [
                          a(
                            "div",
                            { staticStyle: { "font-family": "'Poppins'" } },
                            [t._v(t._s(e[0]))]
                          ),
                          a(
                            "div",
                            { staticStyle: { "font-family": "'Poppins'" } },
                            [t._v(t._s(e[1]))]
                          ),
                        ]),
                        a("v-progress-linear", {
                          staticClass: "styledbar",
                          style: { background: e[2], fontFamily: "Poppins" },
                          attrs: {
                            height: "10",
                            value: e[1],
                            rounded: "",
                            striped: "",
                            color: "#",
                          },
                        }),
                        a("br"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ];
            }),
          ],
          2
        );
      },
      xe = [],
      we = {
        data: function () {
          return {
            skills: [
              ["C", "90%", "#03a9f4"],
              ["C++", "90%", "#FF5772"],
              ["Python", "80%", "#CDDC39"],
              ["Javascript", "80%", "#28a745"],
              ["Typescript", "70%", "#9c27b0"],
              ["Go", "60%", "#FF9800"],
              ["SQL", "70%", "#1abc9c"],
            ],
          };
        },
      },
      Se = we,
      Te = (a("88f5"), a("8e36")),
      Ee = Object(u["a"])(Se, ke, xe, !1, null, "5ae781e3", null),
      Ie = Ee.exports;
    wt()(Ee, {
      VCard: Tt["a"],
      VCardTitle: Et["b"],
      VCol: Pt["a"],
      VProgressLinear: Te["a"],
      VRow: Ft["a"],
    });
    var Pe = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-row",
          {
            staticStyle: { "justify-content": "center" },
            attrs: { "no-gutters": "" },
          },
          [
            t._l(t.skills, function (e) {
              return [
                a(
                  "v-col",
                  {
                    key: e,
                    staticStyle: { margin: "10px" },
                    attrs: { cols: "12", sm: "3" },
                  },
                  [
                    a(
                      "v-card",
                      { attrs: { elevation: "6" } },
                      [
                        a("v-card-title", { staticClass: "flexinall" }, [
                          a("div", [t._v(t._s(e[0]))]),
                          a("div", [t._v(t._s(e[1]))]),
                        ]),
                        a("v-progress-linear", {
                          staticClass: "styledbar",
                          style: { background: e[2] },
                          attrs: {
                            height: "10",
                            value: e[1],
                            rounded: "",
                            striped: "",
                            color: "#",
                          },
                        }),
                        a("br"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ];
            }),
          ],
          2
        );
      },
      Fe = [],
      je = {
        data: function () {
          return {
            skills: [
              ["React", "75%", "#ff5722"],
              ["Vue", "80%", "#4caf50"],
              ["Jquery", "70%", "#FFC107"],
              ["Jekyll", "70%", "#E57373"],
              ["Gatsby", "65%", "#303F9F"],
              ["EJS", "80%", "#1abc9c"],
            ],
          };
        },
      },
      Ae = je,
      Ve = (a("803a"), Object(u["a"])(Ae, Pe, Fe, !1, null, "19ecc27d", null)),
      Oe = Ve.exports;
    wt()(Ve, {
      VCard: Tt["a"],
      VCardTitle: Et["b"],
      VCol: Pt["a"],
      VProgressLinear: Te["a"],
      VRow: Ft["a"],
    });
    var De = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-row",
          {
            staticStyle: { "justify-content": "center" },
            attrs: { "no-gutters": "" },
          },
          [
            t._l(t.skills, function (e) {
              return [
                a(
                  "v-col",
                  {
                    key: e,
                    staticStyle: { margin: "10px" },
                    attrs: { cols: "12", sm: "3" },
                  },
                  [
                    a(
                      "v-card",
                      { attrs: { elevation: "3" } },
                      [
                        a("v-card-title", { staticClass: "flexinall" }, [
                          a("div", [t._v(t._s(e[0]))]),
                          a("div", [t._v(t._s(e[1]))]),
                        ]),
                        a("v-progress-linear", {
                          staticClass: "styledbar",
                          style: { background: e[2] },
                          attrs: {
                            height: "10",
                            value: e[1],
                            rounded: "",
                            striped: "",
                            color: "#",
                          },
                        }),
                        a("br"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ];
            }),
          ],
          2
        );
      },
      He = [],
      Me = {
        data: function () {
          return {
            skills: [
              ["Flask", "85%", "#00bcd4"],
              ["NodeJs", "60%", "#ff5722"],
              ["Express", "60%", "#9c27b0"],
              ["Tkinter", "65%", "#3f51b5"],
              ["Wordpress", "50%", "#28a745"],
            ],
          };
        },
      },
      Je = Me,
      Be = (a("3c57"), Object(u["a"])(Je, De, He, !1, null, "364ddd1c", null)),
      Ne = Be.exports;
    wt()(Be, {
      VCard: Tt["a"],
      VCardTitle: Et["b"],
      VCol: Pt["a"],
      VProgressLinear: Te["a"],
      VRow: Ft["a"],
    });
    var Le = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-row",
          {
            staticStyle: { "justify-content": "center" },
            attrs: { "no-gutters": "" },
          },
          [
            t._l(t.skills, function (e) {
              return [
                a(
                  "v-col",
                  {
                    key: e,
                    staticStyle: { margin: "10px" },
                    attrs: { cols: "12", sm: "3" },
                  },
                  [
                    a(
                      "v-card",
                      { attrs: { elevation: "3" } },
                      [
                        a("v-card-title", { staticClass: "flexinall" }, [
                          a("div", [t._v(t._s(e[0]))]),
                          a("div", [t._v(t._s(e[1]))]),
                        ]),
                        a("v-progress-linear", {
                          staticClass: "styledbar",
                          style: { background: e[2] },
                          attrs: {
                            height: "10",
                            value: e[1],
                            rounded: "",
                            striped: "",
                            color: "#",
                          },
                        }),
                        a("br"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ];
            }),
          ],
          2
        );
      },
      $e = [],
      Ge = {
        data: function () {
          return {
            skills: [
              ["Docker", "50%", "#28b475"],
              ["Firebase", "50%", "#007bff"],
              ["Git", "60%", "#ff5722"],
              ["Vscode", "80%", "#6200EA"],
              ["Jupyter Notebook", "50%", "#9c27b0"],
            ],
          };
        },
      },
      We = Ge,
      Re = (a("ddaf"), Object(u["a"])(We, Le, $e, !1, null, "0365a616", null)),
      qe = Re.exports;
    wt()(Re, {
      VCard: Tt["a"],
      VCardTitle: Et["b"],
      VCol: Pt["a"],
      VProgressLinear: Te["a"],
      VRow: Ft["a"],
    });
    var ze = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-row",
          {
            staticStyle: { "justify-content": "center" },
            attrs: { "no-gutters": "" },
          },
          [
            t._l(t.skills, function (e) {
              return [
                a(
                  "v-col",
                  {
                    key: e,
                    staticStyle: { margin: "10px" },
                    attrs: { cols: "12", sm: "3" },
                  },
                  [
                    a(
                      "v-card",
                      { attrs: { elevation: "3" } },
                      [
                        a("v-card-title", { staticClass: "flexinall" }, [
                          a("div", [t._v(t._s(e[0]))]),
                          a("div", [t._v(t._s(e[1]))]),
                        ]),
                        a("v-progress-linear", {
                          staticClass: "styledbar",
                          style: { background: e[2] },
                          attrs: {
                            height: "10",
                            value: e[1],
                            rounded: "",
                            striped: "",
                            color: "#",
                          },
                        }),
                        a("br"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ];
            }),
          ],
          2
        );
      },
      Ke = [],
      Ue = {
        data: function () {
          return {
            skills: [
              ["HTML5", "60%", "#1abc9c"],
              ["CSS", "70%", "#6200EA"],
              ["XML", "60%", "#FF9800"],
              ["Latex", "60%", "#FFC107"],
              ["Markdown", "80%", "#03a9f4"],
            ],
          };
        },
      },
      Xe = Ue,
      Qe = (a("073d"), Object(u["a"])(Xe, ze, Ke, !1, null, "6dd7b42a", null)),
      Ze = Qe.exports;
    wt()(Qe, {
      VCard: Tt["a"],
      VCardTitle: Et["b"],
      VCol: Pt["a"],
      VProgressLinear: Te["a"],
      VRow: Ft["a"],
    });
    var Ye = {
        components: { TabA: Ie, TabB: Ze, TabC: Oe, TabD: Ne, TabE: qe },
        name: "Thirdslide",
        data: function () {
          return {
            activeTab: "TabA",
            forlloop: [
              [
                "#ff5722",
                "TabA",
                "fas fa-keyboard",
                "Programming and Scripting Languages",
              ],
              ["indigo", "TabC", "far fa-file-code", "Frontend Development"],
              ["#4caf50", "TabD", "fab fa-bootstrap", "Frameworks & Libraries"],
              ["#ff5252", "TabE", "fas fa-toolbox", "Development Tools"],
              ["cyan", "TabB", "fab fa-markdown", "Markup Languages"],
            ],
          };
        },
      },
      ta = Ye,
      ea = (a("c053"), Object(u["a"])(ta, Ce, _e, !1, null, "6509ba3c", null)),
      aa = ea.exports;
    wt()(ea, { VBtn: St["a"], VTooltip: jt["a"] });
    var ia = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "hamburger" }, [
          a(
            "svg",
            {
              staticClass: "ham ham3",
              class: t.setState ? "active" : "",
              attrs: { viewBox: "0 0 100 100", width: "80" },
              on: {
                click: function (e) {
                  return t.handleclickchange();
                },
              },
            },
            [
              a("path", {
                staticClass: "line top",
                attrs: {
                  d: "m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568",
                },
              }),
              a("path", {
                staticClass: "line middle",
                attrs: {
                  d: "m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7",
                },
              }),
              a("path", {
                staticClass: "line bottom",
                attrs: {
                  d: "m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0",
                },
              }),
            ]
          ),
        ]);
      },
      sa = [],
      na = {
        name: "Toggler",
        data: function () {
          return { setState: !0 };
        },
        methods: {
          handleclickchange: function () {
            (this.setState = !this.setState),
              this.$emit("close", this.setState);
          },
        },
        emits: ["close"],
      },
      ra = na,
      oa = (a("7c30"), Object(u["a"])(ra, ia, sa, !1, null, null, null)),
      la = oa.exports,
      ca = {
        name: "App",
        components: {
          Aside: b,
          Firstslide: q,
          Secondslide: Rt,
          Scrollup: Bt,
          Toggler: la,
          Thirdslide: aa,
          Fourthslide: Vt,
          Fifthslide: F,
          Sixthslide: ye,
          Seventhslide: ce,
        },
        data: function () {
          return {
            showaside: !0,
            scrolltotopornot: !0,
            firstheight: 0,
            secondheight: 0,
            seventhheight: 0,
            sixthheight: 0,
            fifthheight: 0,
            fourthheight: 0,
            thirdheight: 0,
          };
        },
        methods: {
          statechange: function (t) {
            this.showaside = t;
          },
        },
      },
      da = ca,
      fa = (a("034f"), a("7496")),
      ua = Object(u["a"])(da, s, n, !1, null, null, null),
      pa = ua.exports;
    wt()(ua, { VApp: fa["a"] });
    var ha = a("f5af"),
      va = a.n(ha),
      ga = a("7212"),
      ma = a.n(ga),
      ba = (a("e829"), a("f309"));
    i["default"].use(ba["a"]);
    var ya = new ba["a"]({}),
      Ca = a("e956"),
      _a = a.n(Ca),
      ka = a("2b88"),
      xa = a.n(ka);
    i["default"].use(_a.a, ma.a),
      i["default"].use(xa.a),
      new i["default"]({
        vuetify: ya,
        el: "#app",
        render: function (t) {
          return t(pa);
        },
        mounted: function () {
          va.a.init({ duration: 1e3, once: !0 });
        },
      }).$mount("#app");
  },
  5942: function (t, e, a) {
    t.exports = a.p + "img/party.2cefe600.gif";
  },
  "68f2": function (t, e, a) {
    "use strict";
    a("4d6b");
  },
  "6de6": function (t, e, a) {},
  "71de": function (t, e, a) {
    t.exports = a.p + "img/Tenth.811e0e0f.png";
  },
  "7a98": function (t, e, a) {
    t.exports = a.p + "img/ball.88e0d67a.gif";
  },
  "7b3f": function (t, e, a) {
    "use strict";
    a("8156");
  },
  "7c30": function (t, e, a) {
    "use strict";
    a("206b");
  },
  "803a": function (t, e, a) {
    "use strict";
    a("f5e6");
  },
  8156: function (t, e, a) {},
  8163: function (t, e, a) {
    t.exports = a.p + "img/partyl.fca99af2.gif";
  },
  "81e3": function (t, e, a) {
    t.exports = a.p + "img/facebook.985910d6.svg";
  },
  8479: function (t, e, a) {
    t.exports = a.p + "img/Eleventh.2083fc7c.webp";
  },
  "84ed": function (t, e, a) {
    t.exports = a.p + "img/experience.5936449b.gif";
  },
  "85ec": function (t, e, a) {},
  "87f9": function (t, e, a) {
    t.exports = a.p + "img/linkedin.5965bdc9.svg";
  },
  "88f5": function (t, e, a) {
    "use strict";
    a("5406");
  },
  "8a8f": function (t, e, a) {},
  "8b9c": function (t, e, a) {
    "use strict";
    a("8a8f");
  },
  9657: function (t, e, a) {
    t.exports = a.p + "img/Ninth.1440cf19.png";
  },
  9983: function (t, e, a) {
    t.exports = a.p + "img/Twelth.11b5f9ef.png";
  },
  "9b63": function (t, e, a) {
    t.exports = a.p + "img/github.78058cdf.svg";
  },
  a0b7: function (t, e, a) {
    "use strict";
    a("b68e");
  },
  a40f: function (t, e, a) {
    t.exports = a.p + "img/achievements.fae1b096.gif";
  },
  a51a: function (t, e, a) {},
  ac05: function (t, e, a) {
    t.exports = a.p + "img/first.de9cd084.png";
  },
  b68e: function (t, e, a) {},
  bc0f: function (t, e, a) {
    t.exports = a.p + "img/fir.e1ca3fa0.png";
  },
  bec4: function (t, e, a) {},
  bec49: function (t, e, a) {
    "use strict";
    a("a51a");
  },
  c053: function (t, e, a) {
    "use strict";
    a("02d4");
  },
  c136: function (t, e, a) {
    t.exports = a.p + "img/torch.1bcb8a02.gif";
  },
  c66f: function (t, e, a) {
    t.exports = a.p + "img/mail.5184f353.svg";
  },
  c87a: function (t, e, a) {
    t.exports = a.p + "img/profilepic.3c71cf24.jpeg";
  },
  cd17: function (t, e, a) {},
  cdc3: function (t, e, a) {},
  d409: function (t, e, a) {},
  ddaf: function (t, e, a) {
    "use strict";
    a("cdc3");
  },
  ddde: function (t, e, a) {
    "use strict";
    a("1f00");
  },
  e966: function (t, e, a) {},
  e97d: function (t, e, a) {
    t.exports = a.p + "img/Eighth.49053768.png";
  },
  f379: function (t, e, a) {
    "use strict";
    a("4be3");
  },
  f5e6: function (t, e, a) {},
  f6f2: function (t, e, a) {
    "use strict";
    a("cd17");
  },
  f9bb: function (t, e, a) {
    t.exports = a.p + "img/treat.a0df15f7.gif";
  },
  fdf5: function (t, e, a) {
    t.exports = a.p + "img/fifth.d823a51e.png";
  },
});
//# sourceMappingURL=app.cee22c0a.js.map
