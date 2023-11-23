import { jsx as e, jsxs as t, Fragment as l } from "react/jsx-runtime"
import { useCallback as o, useState as a } from "react"
import {
  addPropertyControls as i,
  ControlType as r,
  withCSS as d,
  useRouter as n,
  inferInitialRouteFromPath as p,
} from "framer"
import { motion as s, useAnimationControls as u } from "framer-motion"
import { auth as c } from "https://cdn.framerauth.com/scripts/framerauth-sdk@beta.js"
let h =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  g = (e) => h.test(String(e).toLowerCase())
function m(e) {
  try {
    return new URL(e), !0
  } catch {}
  try {
    return new URL(`https://${e}`), !0
  } catch {}
  return !1
}
function f(e) {
  return e
    .split("_")
    .map((e, t) => (0 === t ? e : e.charAt(0).toUpperCase() + e.slice(1)))
    .join("")
}
    let y = (e) => {
        let t = {
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        digit: /\d/,
        special: /\W|_/,
        length: /.{8,}/,
        }
        return {
        uppercase: t.uppercase.test(e),
        lowercase: t.lowercase.test(e),
        digit: t.digit.test(e),
        special: t.special.test(e),
        length: t.length.test(e),
        }
    },
    b = "v1",
    w = d(
        function ({
        displayLicenseKey: i,
        inputs: r,
        link: d,
        label: h,
        input: b,
        button: w,
        gap: V,
        displayPasswordValidator: j,
        style: L,
        }) {
        let [B, P] = a(null),
            [O, R] = a(!1),
            [T, A] = a(!1),
            N = ""
        if ("undefined" != typeof window && window.location) {
            let e = new URL(window.location.href)
            N = e.searchParams.get("license_key") || ""
        }
        let [k, z] = a(N),
            [_, I] = a(null),
            [W, K] = a({
            uppercase: !1,
            lowercase: !1,
            digit: !1,
            special: !1,
            length: !1,
            }),
            {
            paddingPerSide: X,
            paddingTop: Y,
            paddingRight: E,
            paddingBottom: D,
            paddingLeft: Z,
            padding: q,
            borderRadius: U,
            borderObject: M,
            focusObject: H,
            shadowObject: G,
            height: J,
            fixedHeight: Q,
            } = b,
            {
            paddingPerSide: ee,
            paddingTop: et,
            paddingRight: el,
            paddingBottom: eo,
            paddingLeft: ea,
            padding: ei,
            borderRadius: er,
            borderObject: ed,
            shadowObject: en,
            } = h,
            {
            buttonPaddingPerSide: ep,
            buttonPaddingTop: es,
            buttonPaddingRight: eu,
            buttonPaddingBottom: ec,
            buttonPaddingLeft: eh,
            buttonPadding: eg,
            } = w,
            em = ee
            ? `${et}px ${el}px ${eo}px ${ea}px`
            : `${ei}px ${ei}px ${ei}px ${ei}px`,
            ef = X ? `${Y}px ${E}px ${D}px ${Z}px` : `${q}px ${q}px ${q}px ${q}px`,
            ey = ep
            ? `${es}px ${eu}px ${ec}px ${eh}px`
            : `${eg}px ${eg}px ${eg}px ${eg}px`,
            eb = n(),
            ew = () => {
            if (/* Reset */ (R(!1), P(null), I(null), d)) {
                let [e, t] = d.split("#"),
                { routeId: l, pathVariables: o } = p(eb.routes, e)
                if ((l && eb.navigate(l, t, o), m(d)))
                return (
                    P(
                    "External redirect not supported, please contact the website owner."
                    ),
                    ej.start("error"),
                    !1
                )
            }
            },
            ex = (e) => _ === e,
            eC = o(
            (e) =>
                !!("" !== e && g(e)) ||
                (P("Invalid email address, please try again."),
                ej.start("error"),
                !1),
            [g]
            ),
            eS = o((e) => {
            I(e.target.name)
            }, []),
            ev = o((e) => {
            I(null), P(null)
            }, []),
            e$ = (e) => {
            K(y(e.target.value))
            },
            eF = o(
          async (e) => {
            // Prevent submitting while submitting
            if ((e.preventDefault(), O)) return
            R(!0)
            let { data: t, error: l } = await c.validateLicenseKey({
              license_key: k,
            })
            if (l) return R(!1), P(l.message), ej.start("error"), !1 // Handle success
            P(null), R(!1), A(!0)
          },
          [k, O]
        ),
        eV = o(
          async (e) => {
            // Prevent submitting while submitting
            if ((e.preventDefault(), O)) return
            R(!0)
            let t = new FormData(e.target),
              { data: l, error: o } = await c.signUp({
                email: t.get("email"),
                password: t.get("password"),
                options: {
                  data: {
                    first_name: t.get("first_name"),
                    last_name: t.get("last_name"),
                    license_key: k,
                  },
                },
              })
            if (o) return R(!1), P(o.message), ej.start("error"), !1
            e.target.reset(), ew()
          },
          [eC, O]
        ),
        ej = u(),
        eL = b.focusObject
          ? `inset 0 0 0 ${H.focusWidthFrom}px ${H.focusColor}`
          : null,
        eB = b.focusObject
          ? `inset 0 0 0 ${H.focusWidthTo}px ${H.focusColor}`
          : null,
        eP = b.shadowObject
          ? `${G.shadowX}px ${G.shadowY}px ${G.shadowBlur}px ${G.shadowColor}`
          : null,
        eO = b.borderObject
          ? `inset 0 0 0 ${M.borderWidth}px ${M.borderColor}`
          : null,
        eR = h.shadowObject
          ? `${en.shadowX}px ${en.shadowY}px ${en.shadowBlur}px ${en.shadowColor}`
          : null,
        eT = h.borderObject
          ? `inset 0 0 0 ${ed.borderWidth}px ${ed.borderColor}`
          : null,
        eA = {
          default: {
            boxShadow: F(eL, eP, eO),
          },
          focused: {
            boxShadow: F(eB, eP, eO),
          },
        },
        eN = (t) =>
          t
            ? /*#__PURE__*/ e("span", {
                children: "*",
              })
            : null,
        ek = (l, o) =>
          /*#__PURE__*/ t("div", {
            style: {
              color: h.color,
              opacity: o ? 1 : 0.5,
              display: "flex",
              alignItems: "center",
            },
            children: [
              o
                ? /*#__PURE__*/ e("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    children: /*#__PURE__*/ e("path", {
                      d: "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z",
                    }),
                  })
                : /*#__PURE__*/ e("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    children: /*#__PURE__*/ e("path", {
                      d: "M7.47 6.97L4.22 3.72a.75.75 0 00-1.06 1.06L6.38 8l-3.22 3.22a.75.75 0 101.06 1.06L7.47 9.06l3.25 3.25a.75.75 0 001.06-1.06L8.53 8l3.25-3.25a.75.75 0 00-1.06-1.06L7.47 6.94v.03z",
                    }),
                  }),
              " ",
              /*#__PURE__*/ e("span", {
                style: {
                  marginLeft: "5px",
                },
                children: l,
              }),
            ],
          }),
        ez = (l, o, a) => {
          let i = "password" === l.name
          return /*#__PURE__*/ t("div", {
            style: {
              display: "flex",
              flexDirection: "column",
            },
            children: [
              h.display &&
                /*#__PURE__*/ t("label", {
                  htmlFor: l.name,
                  style: {
                    padding: em,
                    marginBottom: "0.25rem",
                    borderRadius: er,
                    fontSize: 16,
                    ...h.font,
                    background: h.fill,
                    color: h.color,
                    boxShadow: F(eR, eT),
                  },
                  children: [l.label, eN(l.required)],
                }),
              /*#__PURE__*/ e(s.input, {
                type: l.type,
                name: l.name,
                defaultValue: l.defaultValue,
                readOnly: l.readonly,
                placeholder: l.placeholder,
                className: "v1 framer-custom-input",
                onChange: o,
                value: a,
                onFocus: eS,
                onBlur: ev,
                autoComplete: "off",
                autoCapitalize: "off",
                autoCorrect: "off",
                spellCheck: "false",
                style: {
                  ...C,
                  padding: ef,
                  borderRadius: U,
                  fontSize: 16,
                  ...b.font,
                  background: b.fill,
                  height: J ? "auto" : Q,
                  color: b.color,
                  boxShadow: F(eL, eP, eO),
                },
                variants: eA,
                initial: !1,
                animate: ex(l.name) ? "focused" : "default",
                transition: {
                  duration: 0.3,
                },
                pattern: i
                  ? "(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[\\W_]).{8,}"
                  : void 0,
              }),
            ],
          })
        },
        e_ = [
          {
            label: "First name",
            name: "first_name",
            type: "text",
            required: !0,
            extra: !1,
            placeholder: "First name",
          },
          {
            label: "Last name",
            name: "last_name",
            type: "text",
            required: !0,
            extra: !0,
            placeholder: "Last name",
          },
          {
            label: "Email",
            name: "email",
            type: "email",
            required: !0,
            extra: !1,
            placeholder: "Email",
          },
          {
            label: "Password",
            name: "password",
            type: "password",
            required: !0,
            extra: !1,
            placeholder: "Password",
          },
        ]
          .filter((e) => !e.extra || r[f(e.name)].display)
          .map((e) => ("password" === e.name ? ez(e, e$) : ez(e)))
      return /*#__PURE__*/ t(s.div, {
        style: {
          ...L,
          ...S,
          "--framer-custom-placeholder-color": b.placeholderColor,
          display: "flex",
          position: "relative",
          flexDirection: "column",
        },
        variants: {
          default: {
            x: 0,
          },
          error: {
            x: [0, -4, 4, 0],
            transition: {
              duration: 0.2,
            },
          },
        },
        animate: ej,
        children: [
          i &&
            !T &&
            /*#__PURE__*/ t("form", {
              style: {
                width: "100%",
                height: "auto",
                display: "flex",
                position: "relative",
                flexDirection: "column",
                color: w.color,
                gap: V,
              },
              onSubmit: eF,
              method: "POST",
              children: [
                ez(
                  {
                    label: "License key",
                    name: "license_key",
                    type: "text",
                    required: !0,
                    extra: !1,
                    placeholder: "License key",
                  },
                  (e) => {
                    z(e.target.value)
                  },
                  k
                ),
                !w.shouldAppear &&
                  O &&
                  /*#__PURE__*/ e(x, {
                    shouldAppear: w.shouldAppear,
                    paddingPerSide: X,
                    paddingTop: Y,
                    paddingRight: E,
                    padding: q,
                    color: b.color,
                  }),
                /*#__PURE__*/ e("div", {
                  children:
                    w.shouldAppear &&
                    /*#__PURE__*/ t("div", {
                      style: {
                        position: "relative",
                      },
                      children: [
                        /*#__PURE__*/ e(s.input, {
                          type: "submit",
                          value: "Continue",
                          style: {
                            ...C,
                            width: "100%",
                            height: J ? "100%" : Q,
                            cursor: "pointer",
                            padding: ey,
                            borderRadius: U,
                            fontSize: 16,
                            ...w.buttonFont,
                            background: w.fill,
                            color: w.color,
                            zIndex: 1,
                            boxShadow: $(w),
                          },
                        }),
                        O &&
                          /*#__PURE__*/ e("div", {
                            style: {
                              borderRadius: U,
                              position: "absolute",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "100%",
                              height: "100%",
                              inset: 0,
                              zIndex: 2,
                              color: w.color,
                              background: w.fill,
                            },
                            children: /*#__PURE__*/ e(x, {
                              color: w.color,
                            }),
                          }),
                      ],
                    }),
                }),
              ],
            }),
          (!i || T) &&
            /*#__PURE__*/ t("form", {
              style: {
                width: "100%",
                height: "auto",
                display: "flex",
                position: "relative",
                flexDirection: "column",
                color: w.color,
                gap: V,
              },
              onSubmit: eV,
              method: "POST",
              children: [
                e_,
                j &&
                  /*#__PURE__*/ t(l, {
                    children: [
                      ek("At least 8 characters", W.length),
                      ek("At least one uppercase letter", W.uppercase),
                      ek("At least one lowercase letter", W.lowercase),
                      ek("At least one digit", W.digit),
                      ek("At least one special character", W.special),
                    ],
                  }),
                !w.shouldAppear &&
                  O &&
                  /*#__PURE__*/ e(x, {
                    shouldAppear: w.shouldAppear,
                    paddingPerSide: X,
                    paddingTop: Y,
                    paddingRight: E,
                    padding: q,
                    color: b.color,
                  }),
                /*#__PURE__*/ e("div", {
                  children:
                    w.shouldAppear &&
                    /*#__PURE__*/ t("div", {
                      style: {
                        position: "relative",
                      },
                      children: [
                        /*#__PURE__*/ e(s.input, {
                          type: "submit",
                          value: w.label,
                          style: {
                            ...C,
                            width: "100%",
                            height: J ? "100%" : Q,
                            cursor: "pointer",
                            padding: ey,
                            borderRadius: U,
                            fontSize: 16,
                            ...w.buttonFont,
                            background: w.fill,
                            color: w.color,
                            zIndex: 1,
                            boxShadow: $(w),
                          },
                        }),
                        O &&
                          /*#__PURE__*/ e("div", {
                            style: {
                              borderRadius: U,
                              position: "absolute",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "100%",
                              height: "100%",
                              inset: 0,
                              zIndex: 2,
                              color: w.color,
                              background: w.fill,
                            },
                            children: /*#__PURE__*/ e(x, {
                              color: w.color,
                            }),
                          }),
                      ],
                    }),
                }),
              ],
            }),
          /*#__PURE__*/ e(s.div, {
            animate: {
              scale: !O && B ? 1 : 0,
              opacity: !O && B ? 1 : 0,
              height: !O && B ? "auto" : 0,
            },
            initial: {
              scale: 0,
              opacity: 0,
              height: 0,
            },
            transition: {
              duration: 0.5,
            },
            style: {
              width: "100%",
            },
            children: /*#__PURE__*/ e("div", {
              style: {
                paddingTop: V,
              },
              children: /*#__PURE__*/ e("div", {
                style: {
                  ...v,
                  borderRadius: U,
                },
                children: B,
              }),
            }),
          }),
        ],
      })
    },
    [
      ".v1.framer-custom-input::placeholder { color: var(--framer-custom-placeholder-color) !important; }",
    ]
  ),
  x = (l) => {
    let o = l.shouldAppear
      ? {}
      : {
          position: "absolute",
          top: "calc(50% - 8px)",
          right: l.paddingPerSide ? l.paddingRight : l.padding,
        }
    return /*#__PURE__*/ e(s.div, {
      style: {
        height: 16,
        width: 16,
        ...o,
      },
      initial: {
        rotate: 0,
      },
      animate: {
        rotate: 360,
      },
      transition: {
        duration: 1,
        repeat: 1 / 0,
      },
      children: /*#__PURE__*/ e(s.div, {
        initial: {
          scale: 0,
        },
        animate: {
          scale: 1,
        },
        children: /*#__PURE__*/ t("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          style: {
            fill: "currentColor",
            color: l.color,
          },
          children: [
            /*#__PURE__*/ e("path", {
              d: "M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.419 3.582 16 8 16 C 12.418 16 16 12.419 16 8 C 15.999 3.582 12.418 0 8 0 Z M 8 14 C 4.687 14 2 11.314 2 8 C 2 4.687 4.687 2 8 2 C 11.314 2 14 4.687 14 8 C 14 11.314 11.314 14 8 14 Z",
              fill: "currentColor",
              opacity: "0.2",
            }),
            /*#__PURE__*/ e("path", {
              d: "M 8 0 C 12.418 0 15.999 3.582 16 8 C 16 8 16 9 15 9 C 14 9 14 8 14 8 C 14 4.687 11.314 2 8 2 C 4.687 2 2 4.687 2 8 C 2 8 2 9 1 9 C 0 9 0 8 0 8 C 0 3.582 3.582 0 8 0 Z",
              fill: "currentColor",
            }),
          ],
        }),
      }),
    })
  }
i(w, {
  displayLicenseKey: {
    title: "License Key",
    type: r.Boolean,
    defaultValue: !1,
  },
  inputs: {
    title: "Inputs",
    type: r.Object,
    controls: {
      lastName: {
        type: r.Object,
        controls: {
          display: {
            type: r.Boolean,
            defaultValue: !1,
          },
        },
      },
    },
  },
  link: {
    title: "Redirect",
    type: r.Link,
  },
  label: {
    title: "Label",
    type: r.Object,
    controls: {
      display: {
        type: r.Boolean,
        title: "Show",
        defaultValue: !0,
      },
      font: {
        type: r.Font,
        title: "Font",
        controls: "extended",
      },
      fill: {
        title: "Fill",
        type: r.Color,
        defaultValue: "transparent",
      },
      color: {
        title: "Text",
        type: r.Color,
        defaultValue: "#000",
      },
      padding: {
        title: "Padding",
        type: r.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: [
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
        ],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
      },
      borderRadius: {
        title: "Radius",
        type: r.Number,
        displayStepper: !0,
        min: 0,
      },
      shadowObject: {
        type: r.Object,
        title: "Shadow",
        optional: !0,
        controls: {
          shadowColor: {
            title: "Color",
            type: r.Color,
          },
          shadowX: {
            title: "Shadow X",
            type: r.Number,
            min: -100,
            max: 100,
          },
          shadowY: {
            title: "Shadow Y",
            type: r.Number,
            min: -100,
            max: 100,
          },
          shadowBlur: {
            title: "Shadow B",
            type: r.Number,
            min: 0,
            max: 100,
          },
        },
      },
    },
  },
  input: {
    title: "Input",
    type: r.Object,
    controls: {
      font: {
        type: r.Font,
        title: "Font",
        controls: "extended",
      },
      placeholderColor: {
        title: " ",
        type: r.Color,
        defaultValue: "rgba(0, 0, 0, 0.3)",
      },
      fill: {
        title: "Fill",
        type: r.Color,
        defaultValue: "#EBEBEB",
      },
      color: {
        title: "Text",
        type: r.Color,
        defaultValue: "#000",
      },
      height: {
        title: "Height",
        type: r.Boolean,
        enabledTitle: "Auto",
        disabledTitle: "Fixed",
      },
      fixedHeight: {
        title: " ",
        type: r.Number,
        displayStepper: !0,
        min: 0,
        defaultValue: 50,
        hidden: (e) => e.height,
      },
      padding: {
        title: "Padding",
        type: r.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        defaultValue: 15,
        valueKeys: [
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
        ],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
      },
      borderRadius: {
        title: "Radius",
        type: r.Number,
        displayStepper: !0,
        min: 0,
        defaultValue: 8,
      },
      focusObject: {
        type: r.Object,
        title: "Focus",
        optional: !0,
        controls: {
          focusWidthFrom: {
            title: "From",
            type: r.Number,
            displayStepper: !0,
            defaultValue: 0,
          },
          focusWidthTo: {
            title: "To",
            type: r.Number,
            displayStepper: !0,
            defaultValue: 2,
          },
          focusColor: {
            title: "Color",
            type: r.Color,
            defaultValue: "#09F",
          },
        },
      },
      borderObject: {
        type: r.Object,
        title: "Border",
        optional: !0,
        controls: {
          borderWidth: {
            title: "Width",
            type: r.Number,
            displayStepper: !0,
            defaultValue: 1,
          },
          borderColor: {
            title: "Color",
            type: r.Color,
            defaultValue: "rgba(200,200,200,0.5)",
          },
        },
      },
      shadowObject: {
        type: r.Object,
        title: "Shadow",
        optional: !0,
        controls: {
          shadowColor: {
            title: "Color",
            type: r.Color,
            defaultValue: "rgba(0,0,0,0.25)",
          },
          shadowX: {
            title: "Shadow X",
            type: r.Number,
            min: -100,
            max: 100,
            defaultValue: 0,
          },
          shadowY: {
            title: "Shadow Y",
            type: r.Number,
            min: -100,
            max: 100,
            defaultValue: 2,
          },
          shadowBlur: {
            title: "Shadow B",
            type: r.Number,
            min: 0,
            max: 100,
            defaultValue: 4,
          },
        },
      },
    },
  },
  button: {
    title: "Button",
    type: r.Object,
    controls: {
      shouldAppear: {
        title: "Show",
        type: r.Boolean,
        defaultValue: !0,
      },
      label: {
        title: "Label",
        type: r.String,
        defaultValue: "Sign Up",
      },
      buttonFont: {
        type: r.Font,
        title: "Font",
        controls: "extended",
      },
      fill: {
        title: "Fill",
        type: r.Color,
        defaultValue: "#333",
      },
      color: {
        title: "Text",
        type: r.Color,
        defaultValue: "#FFF",
      },
      buttonPadding: {
        title: "Padding",
        type: r.FusedNumber,
        toggleKey: "buttonPaddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        defaultValue: 15,
        valueKeys: [
          "buttonPaddingTop",
          "buttonPaddingRight",
          "buttonPaddingBottom",
          "buttonPaddingLeft",
        ],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
      },
      buttonShadow: {
        type: r.Object,
        title: "Shadow",
        optional: !0,
        controls: {
          shadowColor: {
            title: "Color",
            type: r.Color,
            defaultValue: "rgba(0,0,0,0.25)",
          },
          shadowX: {
            title: "Shadow X",
            type: r.Number,
            min: -100,
            max: 100,
            defaultValue: 0,
          },
          shadowY: {
            title: "Shadow Y",
            type: r.Number,
            min: -100,
            max: 100,
            defaultValue: 2,
          },
          shadowBlur: {
            title: "Shadow B",
            type: r.Number,
            min: 0,
            max: 100,
            defaultValue: 4,
          },
        },
      },
    },
  },
  gap: {
    title: "Gap",
    type: r.Number,
    displayStepper: !0,
    min: 0,
    defaultValue: 10,
  },
  displayPasswordValidator: {
    title: "Password Validator",
    type: r.Boolean,
    defaultValue: !0,
  },
})
let C = {
    WebkitAppearance: "none",
    appearance: "none",
    width: "100%",
    height: "auto",
    outline: "none",
    border: "none",
  },
  S = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  v = {
    padding: "1rem",
    color: "#FFFFFF",
    fontSize: "16px",
    backgroundColor: "#E02424",
  }
function $(e) {
  return e.buttonShadow
    ? `${e.buttonShadow.shadowX}px ${e.buttonShadow.shadowY}px ${e.buttonShadow.shadowBlur}px ${e.buttonShadow.shadowColor}`
    : "none"
}
function F(...e) {
  let t = []
  return e.forEach((e) => e && t.push(e)), t.join(", ")
}
export default w
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "AuthSignUp",
      slots: [],
      annotations: {
        framerSupportedLayoutHeight: "any",
        framerIntrinsicWidth: "300",
        framerDisableUnlink: "*",
        framerIntrinsicHeight: "40",
        framerSupportedLayoutWidth: "fixed",
        framerContractVersion: "1",
      },
    },
    __FramerMetadata__: {
      type: "variable",
    },
  },
}
//# sourceMappingURL=./AuthSignUp.map
