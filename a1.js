import {
  Ba as fo,
  Be as So,
  Ca as go,
  Ga as ho,
  Gf as Ye,
  Gh as l,
  Ie as Do,
  Je as Oo,
  Ke as ue,
  Lf as qe,
  Of as Ze,
  Pa as Xe,
  Pf as Qe,
  Q as Se,
  Qa as yo,
  Qf as Fo,
  S as lo,
  T as co,
  Uc as Co,
  da as po,
  df as Mo,
  ea as uo,
  p as Gt,
  t as io,
  tb as Po,
  x as so,
} from "https://app.framerstatic.com/chunk-74CR5GJS.js"
import { e as wo } from "https://app.framerstatic.com/chunk-M4YXQ4OA.js"
import { p as To } from "https://app.framerstatic.com/chunk-JVCFUAHI.js"
import { k as bo } from "https://app.framerstatic.com/chunk-MZWYODTD.js"
import {
  $b as _t,
  Ba as H,
  Cf as qt,
  Df as Zt,
  Dk as Qt,
  No as no,
  Oo as ro,
  Wc as zt,
  c as xe,
  ce as $t,
  f as Ge,
  fa as Wt,
  fe as jt,
  g as ze,
  gc as Ht,
  ha as Vt,
  ic as pe,
  j as Dt,
  k as Ot,
  la as $e,
  qm as oo,
  ra as ee,
  sa as te,
  ta as At,
  ua as Bt,
  ue as Kt,
  va as Ut,
  ve as we,
  we as Ke,
  xa as je,
  xe as Xt,
  ye as Yt,
} from "https://app.framerstatic.com/chunk-QGMZR66S.js"
import {
  T as mt,
  ab as gt,
  d as de,
  db as Pe,
  j as ut,
  k as j,
  kc as kt,
  na as Ue,
  ra as ft,
  wa as _,
  ya as _e,
} from "https://app.framerstatic.com/chunk-7NVLHQI2.js"
import { a as No } from "https://app.framerstatic.com/chunk-KCRDHQ4E.js"
import {
  a as xo,
  m as Io,
} from "https://app.framerstatic.com/chunk-LPM6DHFF.js"
import { a as Ro } from "https://app.framerstatic.com/chunk-LL55HCXN.js"
import { b as q, c as vo } from "https://app.framerstatic.com/chunk-DEVNO6Q5.js"
import { a as mo } from "https://app.framerstatic.com/chunk-BRGVFFSG.js"
import { z as ao } from "https://app.framerstatic.com/chunk-LUGEBPOB.js"
import {
  a as Jt,
  c as eo,
  d as to,
} from "https://app.framerstatic.com/chunk-2QY6B5NA.js"
import { b as pt, h as E } from "https://app.framerstatic.com/chunk-P34MQZOV.js"
import {
  a as Mt,
  c as Ie,
  i as Ft,
  k as Et,
  o as Lt,
} from "https://app.framerstatic.com/chunk-DQ2V7XYN.js"
import {
  $g as ht,
  Eh as wt,
  Jh as St,
  ah as yt,
  bh as vt,
  gh as Pt,
  hh as bt,
  jh as He,
  ni as Rt,
  qh as Tt,
  rh as Ct,
  sh as xt,
  wb as Y,
  wi as Te,
  xi as Nt,
  yh as It,
  yi as Ce,
} from "https://app.framerstatic.com/chunk-DDRPBT2Y.js"
import { m as be } from "https://app.framerstatic.com/chunk-TTPOELUG.js"
import { a as B } from "https://app.framerstatic.com/chunk-H4IIIHXS.js"
import { C as dt } from "https://app.framerstatic.com/chunk-YDEGN3HX.js"
import {
  D as ct,
  a as K,
  b as Be,
  i as X,
  q as ve,
  u as ce,
  v as lt,
} from "https://app.framerstatic.com/chunk-6FKYHERK.js"
import {
  e as A,
  g as C,
  h as J,
  i as ye,
  j as Ae,
} from "https://app.framerstatic.com/chunk-G6RVR2BI.js"
var z = A(B())
var Fn = { track: !0 }
function Eo(e) {
  let t = { ...e, event: "import_paste_bitmap" }
  pt(t, Fn)
}
var D = A(B())
var Lo = "windowBarCursor_wuk326o"
var ko = 0.1,
  oe = be.panelPadding
function Ln() {
  return {
    top: l.layoutState.currentChromeMarginTop + oe,
    bottom: l.layoutState.currentChromeMarginBottom + oe,
    left: l.layoutState.getCurrentTabContentWidth() + oe,
    right: l.layoutState.getCurrentPropertyPanelWidth() + oe,
  }
}
function kn(e) {
  let t = Ln(),
    o = t.top,
    n = t.left,
    i = window.innerWidth - e.width - t.right,
    r = window.innerHeight - e.height - t.bottom
  return { minX: n, minY: o, maxX: i, maxY: Math.max(r, o) }
}
var Re = class extends D.default.Component {
  constructor() {
    super(...arguments)
    this.containerRef = D.default.createRef()
    this.contentWrapperRef = D.default.createRef()
    this.prevTopOffset = null
    this.state = { temporaryTopOffset: null }
    this.setContentWrapperRefs = (o) => {
      this.contentWrapperRef.current = o
      let { contentWrapperRef: n } = this.props
      n && (n.current = o)
    }
    this.hasMoved = !1
    this.dragStartRect = null
    this.getWindowRect = () => {
      let o = this.contentWrapperRef.current
      return o ? o.getBoundingClientRect() : null
    }
    this.onDragStart = (o) => {
      ;(this.dragStartRect = this.getWindowRect()), (this.hasMoved = !1)
    }
    this.onDrag = (o) => {
      if (!this.dragStartRect) return
      let n = this.getWindowRect()
      if (!n) return
      let { width: i, height: r } = n
      ;(!this.hasMoved && o.offset.x === 0 && o.offset.y === 0) ||
        ((this.hasMoved = !0),
        this.setRect(
          { ...ut.add(o.offset, this.dragStartRect), width: i, height: r },
          { overdrag: !0 }
        ))
    }
    this.onDragEnd = (o) => {
      this.dragStartRect &&
        ((this.dragStartRect = null),
        this.hasMoved &&
          this.setFloatingWindowProperties({
            x: 0,
            y: 0,
            transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)",
          }))
    }
    this.persistCurrentTopOffset = () => {
      let o = this.getWindowRect()
      o && this.setFloatingWindowProperties({ top: o.y })
    }
  }
  componentDidMount() {
    if (!this.contentWrapperRef.current) return
    let o = this.contentWrapperRef.current.getBoundingClientRect()
    this.setState({ temporaryTopOffset: o.y })
  }
  componentDidUpdate() {
    let o = this.contentWrapperRef.current
    if (!o) return
    let n = o.getBoundingClientRect()
    if (this.state.temporaryTopOffset === n.y) return
    let i = this.prevTopOffset
    Et(i) ||
      ((this.prevTopOffset = n.y),
      this.setState({ temporaryTopOffset: Math.min(i, n.y) }))
  }
  render() {
    let {
        initialTopOffset: o,
        initialLeftOffset: n,
        className: i,
      } = this.props,
      r = typeof o == "string" ? o : `${o || 0}px`,
      s = typeof n == "string" ? n : `${n || 0}px`,
      a = Ie(this.state.temporaryTopOffset)
        ? this.state.temporaryTopOffset + "px"
        : void 0
    return D.default.createElement(
      "div",
      {
        ref: this.containerRef,
        className: i,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: `calc(var(--framerInternalUI-chromeMarginRight) + ${oe}px)`,
          bottom: `calc(var(--framerInternalUI-chromeMarginBottom) + ${oe}px)`,
          display: "flex",
          flexDirection: "row",
          pointerEvents: "none",
          zIndex: 2,
        },
      },
      D.default.createElement("div", {
        style: {
          width: `var(--floating-window-left, ${s})`,
          minWidth: `calc(var(--framerInternalUI-chromeMarginLeft) + ${be.panelPadding}px)`,
        },
      }),
      D.default.createElement(
        "div",
        { style: { width: "auto", display: "flex", flexDirection: "column" } },
        D.default.createElement("div", {
          style: {
            height: `var(--floating-window-top, ${a != null ? a : r})`,
            minHeight: `calc(var(--framerInternalUI-chromeMarginTop) + ${be.panelPadding}px`,
          },
        }),
        D.default.createElement(
          "div",
          {
            ref: this.setContentWrapperRefs,
            draggable: !1,
            style: {
              position: "relative",
              height: "auto",
              width: "auto",
              flexShrink: 0,
              transform:
                "translate(var(--floating-window-x, 0px), var(--floating-window-y, 0px))",
              transition: "var(--floating-window-transform)",
              pointerEvents: "auto",
            },
          },
          D.default.createElement(
            Wo.Provider,
            { value: this },
            this.props.children
          )
        )
      )
    )
  }
  setPosition(o, n) {
    let i = this.getWindowRect()
    i && this.setRect({ ...o, width: i.width, height: i.height }, n)
  }
  setRect(o, n) {
    let i = !!n && n.overdrag === !0,
      r = !n || n.snapToEdges !== !1,
      s = 0,
      a = 0,
      { minX: c, minY: m, maxX: f, maxY: g } = kn(o),
      p = o.x,
      u = o.y
    if (r) {
      let P = Math.abs(p - c),
        y = Math.abs(p - f),
        x = Math.abs(u - m),
        S = Math.abs(u - g)
      P < 16 ? (p = c) : y < 16 && (p = f), x < 16 ? (u = m) : S < 16 && (u = g)
    }
    p <= c ? ((p = 0), (s = o.x - c)) : p >= f && ((p = "100%"), (s = o.x - f)),
      u < m ? ((u = m), (a = o.y - m)) : u >= g && (a = o.y - g)
    let d = 0,
      h = 0
    i && ((d = s * ko), (h = a * ko)),
      this.setFloatingWindowProperties({
        top: u,
        left: p,
        x: d,
        y: h,
        transition: "",
      })
  }
  setFloatingWindowProperties(o) {
    if (!this.containerRef.current) return
    let n = {}
    if (o.top !== void 0) {
      let r = de(o.top) ? o.top + "px" : o.top
      ;(n["--floating-window-top"] = r), (this.latestTopOffset = r)
    }
    if (o.left !== void 0) {
      let r = de(o.left) ? `${o.left}px` : o.left
      ;(n["--floating-window-left"] = r), (this.latestLeftOffset = r)
    }
    de(o.x) && (n["--floating-window-x"] = o.x + "px"),
      de(o.y) && (n["--floating-window-y"] = o.y + "px"),
      o.transition !== void 0 &&
        (n["--floating-window-transform"] = o.transition)
    let i = Object.keys(n)
    for (let r of i) this.containerRef.current.style.setProperty(r, n[r])
  }
}
var Wo = D.default.createContext(null),
  Vo = D.default.forwardRef(function (t, o) {
    let n = D.default.useContext(Wo)
    return D.default.createElement(Te, {
      ref: o,
      ...t,
      className: Y(t.className, Lo),
      onDragStart: n == null ? void 0 : n.onDragStart,
      onDrag: (n == null ? void 0 : n.onDrag) || Ro,
      onDragEnd: n == null ? void 0 : n.onDragEnd,
      cursor: "-webkit-grabbing",
    })
  })
var w = A(B())
var Ne = A(B())
function me(e) {
  let t = (0, Ne.useRef)(e)
  return (t.current = e), (0, Ne.useCallback)((...o) => t.current(...o), [])
}
var Ao = "popoutButton_pvjhuxd",
  Bo = "popoutButtonDisabled_pcpv5lz",
  Uo = "popupButtonSites_p1awmd8"
var _o = A(B()),
  De = (0, _o.createContext)(null)
var M = A(B())
var Ho = A(B())
function Vn(e) {
  switch (e) {
    case 2:
    case 5:
      return !0
    default:
      return !1
  }
}
function Go({ children: e }) {
  let t = l.chromeStore.useState((n) => n.mainView),
    o = Tt()
  return Ho.default.createElement(
    Ct,
    { mode: Vn(t) ? "darkOnDarkModal" : o },
    e
  )
}
var L,
  O,
  ne = class {
    constructor(t) {
      J(this, L, [])
      J(this, O, -1)
      this.present = (
        t,
        o,
        {
          parent: n,
          triggerRef: i,
          displayDivider: r,
          title: s,
          onDismiss: a,
          onPresent: c,
          educationTooltipId: m,
          educationText: f,
          onClickEducation: g,
          enterAnimationDisabled: p,
        }
      ) => {
        var u, d, h
        if (t && this.isPresenting(t, { atIndex: 0 })) {
          C(this, O) === 0
            ? this.close()
            : (this.setStackIndex(0),
              (u = this.willOpen) == null ||
                u.call(this, i == null ? void 0 : i.current))
          return
        }
        if (n) {
          let P = this.indexForItem(n)
          if (P === -1) return null
          ye(this, L, C(this, L).slice(0, P + 1)),
            c == null || c(),
            (d = this.willPush) == null || d.call(this)
        } else
          this.setStackIndex(-1),
            c == null || c(),
            (h = this.willOpen) == null ||
              h.call(this, i == null ? void 0 : i.current)
        C(this, L).push({
          id: t,
          element: o,
          triggerRef: i,
          displayDivider: r,
          title: s,
          onDismiss: a,
          onPresent: c,
          dismissed: !1,
          educationTooltipId: m,
          educationText: f,
          onClickEducation: g,
          enterAnimationDisabled: p,
        }),
          this.setStackIndex(C(this, O) + 1)
      }
      this.updatePopout = (t, o, n) => {
        if (this.isClosed()) return
        let i = this.indexForItem(t)
        if (i === -1) return
        let r = C(this, L)[i],
          s = r.element,
          a = r.title
        ;(s === o && a === n) ||
          ((r.element = o),
          (r.title = n),
          i <= C(this, O) && requestAnimationFrame(this.triggerRender))
      }
      this.isPresenting = (t, o) => {
        if (this.isClosed()) return !1
        let n = this.indexForItem(t)
        return !(n < 0 || n > C(this, O) || (o && o.atIndex !== n))
      }
      this.isOpen = () => C(this, O) > -1
      this.isClosed = () => !this.isOpen()
      this.close = () => {
        this.setStackIndex(-1)
      }
      this.dismiss = (t) => {
        let o = this.indexForItem(t)
        C(this, O) >= o && this.setStackIndex(o - 1)
      }
      this.goBack = (t = !1) => {
        var n
        let o = this.stack[0]
        if (
          (this.setStackIndex(C(this, O) - 1),
          t && this.currentStackIndex === -1)
        ) {
          let i =
            (n = o == null ? void 0 : o.triggerRef) == null ? void 0 : n.current
          i instanceof HTMLElement && i.focus()
        }
      }
      this.indexForItem = (t) => C(this, L).findIndex((o) => o.id === t)
      this.setStackIndex = (t) => {
        let o = Math.max(-1, t)
        C(this, O) !== o &&
          (C(this, L).forEach((n, i) => {
            var r
            i <= t ||
              n.dismissed ||
              ((n.dismissed = !0), (r = n.onDismiss) == null || r.call(n))
          }),
          ye(this, O, o),
          o < 0 && ye(this, L, []),
          this.triggerRender(),
          this.listeners.forEach((n) => n()))
      }
      this.listeners = new Set()
      this.registeredPopouts = {}
      this.shouldPresentPopoutId = null
      this.registerPopout = (t, o, n) => {
        ;(this.registeredPopouts[t] = n),
          this.shouldPresentPopoutId === t && n()
      }
      this.deregisterPopout = (t) => {
        delete this.registeredPopouts[t]
        let o = this.indexForItem(t)
        o === -1 || C(this, O) < o || this.setStackIndex(o - 1)
      }
      this.popoutIsRegistered = (t) => t in this.registeredPopouts
      this.presentPopout = (t) => {
        let o = this.registeredPopouts[t]
        typeof o == "function" ? o() : this.presentPopoutOnRegistration(t)
      }
      this.presentPopoutOnRegistration = (t) => {
        clearTimeout(this.shouldPresentPopoutIdTimer),
          (this.shouldPresentPopoutId = t),
          (this.shouldPresentPopoutIdTimer = setTimeout(() => {
            this.shouldPresentPopoutId = null
          }, 100))
      }
      Object.assign(this, t)
    }
    get stack() {
      return C(this, L)
    }
    get currentStackIndex() {
      return C(this, O)
    }
    addListener(t) {
      this.listeners.add(t)
    }
    removeListener(t) {
      this.listeners.delete(t)
    }
  }
;(L = new WeakMap()), (O = new WeakMap())
var zo = "popover_pjkind9",
  $o = "contentClip_c1l0qpj8",
  jo = "contentClipSites_cftx8i9"
var Bn = { x: 10, y: 0 }
function Ko({
  navigationRef: e,
  anchorRef: t,
  children: o,
  attachTo: n = "right",
  flipAttachToIfNotEnoughSpace: i,
  offset: r = Bn,
  onKeydown: s,
  onCopy: a,
}) {
  let c = M.default.useRef(s)
  c.current = s
  let [, m] = M.default.useState(0),
    [f] = M.default.useState(
      () => new ne({ triggerRender: () => m((d) => d + 1) })
    ),
    g = f.isOpen(),
    p = M.default.useCallback(
      (d) => {
        var h
        d.key === "Escape" && (f.goBack(!0), d.stopPropagation()),
          (h = c.current) == null || h.call(c, d)
      },
      [f]
    )
  M.default.useEffect(() => {
    if (e)
      return (
        (e.current = f),
        () => {
          e.current = null
        }
      )
  }, [f, e]),
    M.default.useEffect(() => {
      if (!(!g || !a))
        return (
          document.addEventListener("copy", a),
          document.addEventListener("cut", a),
          () => {
            document.removeEventListener("copy", a),
              document.removeEventListener("cut", a)
          }
        )
    }, [g, a])
  let u = xe("sites")
  return M.default.createElement(
    De.Provider,
    { value: f },
    o,
    g &&
      M.default.createElement(
        xt,
        null,
        M.default.createElement(
          Go,
          null,
          M.default.createElement(
            It,
            {
              anchor: t.current,
              alignSelf: "center",
              attachTo: n,
              offset: r,
              onClose: f.close,
              className: zo,
              themeOverrideMode: null,
              onKeyDown: p,
              arrow: { anchor: t.current },
              flipAttachToIfNotEnoughSpace: i,
            },
            M.default.createElement(
              "div",
              { className: Y($o, u && jo) },
              M.default.createElement(Ce, {
                stack: f.stack,
                currentIndex: f.currentStackIndex,
                onBack: f.goBack,
                onClose: f.close,
              })
            )
          )
        )
      )
  )
}
var qo = "data-is-popout-button",
  Zo = `[${qo}]`
function Un({
  popout: e,
  navigationTitle: t,
  id: o,
  enabled: n = !0,
  displayDivider: i,
  onBeforePresent: r = () => !0,
  onPresent: s = () => {},
  onDismiss: a = () => {},
  ref: c,
  educationTooltipId: m,
  educationText: f,
  onClickEducation: g,
  enterAnimationDisabled: p = !1,
}) {
  let u = Hn(o),
    d = w.default.useRef(null),
    h = c != null ? c : d,
    P = w.default.useContext(Nt),
    y = w.default.useContext(De),
    [x, S] = w.default.useState(!1),
    k = bt(),
    R = Xo(w.default.createElement(Pt.Provider, { value: k }, e)),
    F = Xo(t)
  y == null || y.updatePopout(u, R, F)
  let W = me(a),
    N = me(s),
    U = me(() => {
      if (y) {
        if (!n || !r()) {
          y.close()
          return
        }
        y.present(u, R, {
          parent: P,
          triggerRef: h,
          displayDivider: i,
          title: F,
          onDismiss: W,
          onPresent: N,
          educationTooltipId: m,
          educationText: f,
          onClickEducation: g,
          enterAnimationDisabled: p,
        })
      }
    }),
    v = me(() => {
      y == null || y.dismiss(u)
    })
  return (
    w.default.useEffect(() => {
      if (!n || !y) return
      let b = () => {
        dt.isTest || S(y.isPresenting(u))
      }
      return (
        y.addListener(b),
        y.registerPopout(u, P, U),
        () => {
          y.removeListener(b), y.deregisterPopout(u)
        }
      )
    }, [u, P, U, n, y]),
    w.default.useMemo(
      () => ({ present: U, dismiss: v, isPresenting: x, ref: h }),
      [U, v, x, h]
    )
  )
}
function Xo(e) {
  let t = w.default.useRef(e)
  return mt(e, t.current) || (t.current = e), t.current
}
function wi({
  popoverNavigationRef: e,
  displayInPopover: t,
  popoverAttachmentEdge: o,
  flipAttachToIfNotEnoughSpace: n,
  popoverOffset: i,
  onPopoverKeydown: r,
  onPopoverCopy: s,
  ...a
}) {
  let c = w.default.useRef(null),
    m = w.default.createElement(_n, { ...a, ref: c })
  return t
    ? w.default.createElement(
        Ko,
        {
          navigationRef: e,
          anchorRef: c,
          attachTo: o,
          onKeydown: r,
          onCopy: s,
          offset: i,
          flipAttachToIfNotEnoughSpace: n,
        },
        m
      )
    : m
}
var _n = w.default.forwardRef(function (
  {
    id: t,
    popout: o,
    displayDivider: n,
    navigationTitle: i,
    className: r,
    onKeyDown: s,
    onClick: a,
    tabIndex: c = 0,
    enabled: m = !0,
    useFrescoButton: f = !1,
    withoutStyles: g = !1,
    frescoButtonProps: p = {},
    onBeforePresent: u,
    onPresent: d,
    onDismiss: h,
    educationTooltipId: P,
    educationText: y,
    onClickEducation: x,
    ...S
  },
  k
) {
  let {
      present: R,
      dismiss: F,
      isPresenting: W,
    } = Un({
      popout: o,
      id: t,
      displayDivider: n,
      navigationTitle: i,
      enabled: m,
      onBeforePresent: u,
      onPresent: d,
      onDismiss: h,
      ref: k,
      educationTooltipId: P,
      educationText: y,
      onClickEducation: x,
    }),
    N = (T) => {
      switch (T.key) {
        case "Enter":
        case " ":
          R(), T.preventDefault()
          break
        case "Escape":
          T.currentTarget.blur(), F()
          break
      }
    },
    U = xe("sites"),
    v = ht(c),
    b = m === !1,
    I = {
      role: "button",
      ref: k,
      tabIndex: b ? void 0 : v,
      ["aria-selected"]: W ? "true" : "false",
      className: Y(r, !f && !g && Y(Ao, b && Bo, U && Uo)),
      onClick: Yo(R, a),
      onKeyDown: Yo(N, s),
      [qo]: !0,
      ...S,
    }
  return f
    ? w.default.createElement(yt, { enabled: m, ...p, ...I })
    : w.default.createElement("div", { id: t, ...I })
})
function Qo(e) {
  return e instanceof HTMLElement ? !!e.closest(Zo) : !1
}
function Si(e) {
  return e.querySelector(Zo)
}
function Ri(e) {
  return document.getElementById(e)
}
function Hn(e) {
  let t = w.default.useRef(e)
  return (
    e && t.current !== e ? (t.current = e) : t.current || (t.current = wt()),
    t.current
  )
}
function Yo(e, t) {
  return t
    ? (o) => {
        e(o), t(o)
      }
    : e
}
var Jo = "window_w1kmowpj"
var G = A(B()),
  tn = "resize-zone",
  Li = G.default.memo(
    ({
      side: e,
      minSize: t,
      defaultSize: o,
      maxSize: n,
      getSize: i,
      setSize: r,
      onResizeStart: s,
      onResizeEnd: a,
    }) => {
      let [c, m] = G.default.useState("ew-resize")
      G.default.useEffect(() => {
        requestAnimationFrame(() => {
          let d = typeof n == "function" ? n() : n,
            h = en(i(), t, d, e)
          c !== h && m(h)
        })
      }, [])
      let f = G.default.useRef(),
        g = G.default.useCallback(() => {
          ;(f.current = i()), s && s()
        }, [i, s]),
        p = G.default.useCallback(
          (d) => {
            if (f.current === void 0) return
            let h = e === "left" ? -1 : 1,
              P = e === "top" ? d.offset.y : d.offset.x,
              y = f.current + P * h
            Math.abs(y - o) < 10 && (y = o), r(y)
            let x = typeof n == "function" ? n() : n,
              S = en(i(), t, x, e)
            c !== S && m(S)
          },
          [o, t, n, e, r, i, c, m]
        ),
        u = G.default.useCallback(() => {
          ;(f.current = void 0), a && a()
        }, [a])
      return G.default.createElement(Te, {
        onDragStart: g,
        onDrag: p,
        onDragEnd: u,
        cursor: c,
        className: tn,
        style: {
          cursor: c,
          position: "absolute",
          top: zn(e),
          bottom: 0,
          right: jn(e),
          left: $n(e),
          width: e === "top" ? void 0 : 6,
          height: e === "top" ? 6 : void 0,
          zIndex: 13,
          transform: "translate3d(0, 0, 0)",
          opacity: 0.5,
        },
      })
    }
  )
function zn(e) {
  switch (e) {
    case "top":
      return -3
    default:
      return 0
  }
}
function $n(e) {
  switch (e) {
    case "left":
      return -3
    case "top":
      return 0
  }
}
function jn(e) {
  switch (e) {
    case "right":
      return -3
    case "top":
      return 0
  }
}
function on(e) {
  return e instanceof HTMLDivElement && e.classList.contains(tn)
}
function en(e, t, o, n) {
  if (n === "top")
    switch (e) {
      case t:
        return "s-resize"
      case o:
        return "n-resize"
      default:
        return "ns-resize"
    }
  switch (e) {
    case t:
      return n === "right" ? "e-resize" : "w-resize"
    case o:
      return n === "right" ? "w-resize" : "e-resize"
    default:
      return "ew-resize"
  }
}
var Je = class {
  constructor() {
    this.floatingWindowRef = z.default.createRef()
    this.initialWindowTopOffset = 0
    this.initialWindowLeftOffset = "100%"
    this.positionWindowNearElement = (t) => {
      if (!(t instanceof HTMLElement)) return
      let o = this.floatingWindowRef.current,
        n = t.getBoundingClientRect(),
        i = n.top - 9
      o
        ? o.setPosition({ x: n.left, y: i }, { snapToEdges: !1 })
        : ((this.initialWindowTopOffset = i),
          (this.initialWindowLeftOffset =
            n.left < window.innerWidth - n.right ? 0 : "100%"))
    }
    this.persistCurrentTopOffset = () => {
      let t = this.floatingWindowRef.current
      t && t.persistCurrentTopOffset()
    }
    this.isOpen = () => this.navigation.isOpen()
    this.close = () => {
      this.navigation.close()
    }
    this.rerender = () => {
      var t
      return (t = this._rerender) == null ? void 0 : t.call(this)
    }
    this.navigationBarWrapper = (t) => z.default.createElement(Vo, null, t)
    this.Component = z.default.memo(() => {
      let [, t] = z.default.useState(0)
      this._rerender = () => t((i) => i + 1)
      let o = this.navigation.isOpen()
      return (
        z.default.useEffect(() => {
          if (o)
            return (
              document.addEventListener(
                "mousedown",
                this.closeIfClickedOutside
              ),
              () => {
                document.removeEventListener(
                  "mousedown",
                  this.closeIfClickedOutside
                )
              }
            )
        }, [o]),
        !o || !this.navigation.stack[this.navigation.currentStackIndex]
          ? null
          : z.default.createElement(
              Re,
              {
                ref: this.floatingWindowRef,
                initialTopOffset: this.initialWindowTopOffset,
                initialLeftOffset: this.initialWindowLeftOffset,
              },
              z.default.createElement(
                "div",
                { className: Jo, onKeyDown: this.onKeyDown, tabIndex: 0 },
                z.default.createElement(Ce, {
                  stack: this.navigation.stack,
                  currentIndex: this.navigation.currentStackIndex,
                  onBack: this.navigation.goBack,
                  onClose: this.navigation.close,
                  renderNavigationBarWrapper: this.navigationBarWrapper,
                })
              )
            )
      )
    })
    this.closeIfClickedOutside = ({ target: t }) => {
      on(t) || Qo(t) || (Kn(t) && this.navigation.close())
    }
    this.onKeyDown = (t) => {
      t.defaultPrevented ||
        (t.key === "Escape" &&
          (this.navigation.goBack(!0), t.stopPropagation()))
    }
    this.navigation = new ne({
      triggerRender: this.rerender,
      willOpen: this.positionWindowNearElement,
      willPush: this.persistCurrentTopOffset,
    })
  }
}
function Kn(e) {
  return e instanceof HTMLElement ? !!e.closest("[data-is-right-panel]") : !1
}
var _i = new Je()
var nt = A(B())
var re,
  fe,
  Oe = class {
    constructor(t) {
      this.limit = t
      J(this, re, 0)
      J(this, fe, [])
    }
    async run(t) {
      C(this, re) === this.limit &&
        (await new Promise((o) => {
          C(this, fe).push(o)
        })),
        Ae(this, re)._++
      try {
        return await t()
      } finally {
        Ae(this, re)._--
        let o = C(this, fe).shift()
        o == null || o()
      }
    }
  }
;(re = new WeakMap()), (fe = new WeakMap())
function rn() {
  var t
  E("ui_impression", { page: "file-limit-upsell" })
  let e = (t = l.projectStore.project) == null ? void 0 : t.license
  if ((e == null ? void 0 : e.type) === "proSite") {
    l.modalStore.set({
      type: "Confirmation",
      source: "upsell",
      title: "File Too Large",
      description:
        "Your file exceeds the upload size limit (20MB). Upgrade to an Enterprise plan to increase your limits.",
      confirmLabel: "Contact us",
      onConfirm: () => {
        E("ui_interaction", {
          page: "file-limit-upsell",
          id: "confirm-upsell",
        }),
          ao(xo)
      },
    })
    return
  }
  l.modalStore.set({
    type: "Upsell",
    source: "upsell",
    title: "File Too Large",
    description:
      "Your file exceeds the upload size limit (5MB). Upgrade your site to a Pro plan to continue.",
    trackingPage: "file-limit-upsell",
    confirmLabel: "Upgrade",
    cancelLabel: "Cancel",
    upsellSitePlan: "proSite",
  })
}
var ie = class {
  constructor(t) {
    this.uploads = new Map()
    this.completed = 0
    this.failed = 0
    this.generating = !1
    this.silent = !1
    let o = (t == null ? void 0 : t.concurrency) || 5
    ;(this.limiter = new Oe(o)),
      (t == null ? void 0 : t.silent) !== void 0 && (this.silent = t.silent)
  }
  add(t) {
    return this.createTask(t, (o) => o)()
  }
  createTask(t, o) {
    let n = this.uploads.get(t)
    n ||
      ((n = {
        task: async () => {
          var s
          try {
            if (typeof t == "string") {
              if (t.startsWith("data:"))
                return await this.uploadFile(await No(t, "imported"))
              {
                let a = await ue.uploadAssetByURL(t, { silent: this.silent })
                if (!a) throw Error("Failed to upload file by URL")
                return a
              }
            } else return await this.uploadFile(t)
          } catch (a) {
            throw (this.failed++, a)
          } finally {
            this.completed++,
              (s = this.resolveStatusUpdate) == null || s.call(this)
          }
        },
      }),
      this.uploads.set(t, n))
    let i = n
    return async () => {
      var r
      return (
        i.resultPromise ||
          ((i.resultPromise = this.limiter.run(i.task)),
          (r = this.resolveStatusUpdate) == null || r.call(this)),
        o(await i.resultPromise)
      )
    }
  }
  async uploadFile(t) {
    var r, s
    let o =
        (s =
          (r = l.projectStore.resourceLimits) == null
            ? void 0
            : r.fileUploadLimitInMB) != null
          ? s
          : void 0,
      n = { silent: this.silent, maxFileSize: o, onExceedsCustomMaxSize: rn },
      i
    if (
      (t.type.startsWith("image/")
        ? (i = await ue.uploadImage(t, n))
        : t.type.startsWith("video/")
        ? (i = await ue.uploadVideo(t, n))
        : (i = await ue.uploadFile(t, n)),
      !i)
    )
      throw Error("Failed to upload file")
    return i
  }
  get active() {
    return [...this.uploads.values()]
      .map(({ resultPromise: t }) => t)
      .filter(Ft)
  }
  get status() {
    let { active: t, completed: o, failed: n } = this
    return { started: t.length, completed: o, failed: n }
  }
  async *statusUpdates() {
    var t
    if (this.generating)
      throw Error("`statusUpdates` is in use by another call")
    for (
      this.generating = !0, yield this.status;
      this.completed < this.active.length;

    )
      await new Promise((o) => {
        this.resolveStatusUpdate = () => {
          o(), (this.resolveStatusUpdate = void 0)
        }
      }),
        yield this.status
    await ((t = l.webAssetsService) == null ? void 0 : t.refresh().catch(X)),
      (this.generating = !1)
  }
  async results() {
    var o
    let t = await Promise.allSettled(this.active).then((n) =>
      n.filter(Lt).map((i) => i.value)
    )
    return (
      await ((o = l.webAssetsService) == null ? void 0 : o.refresh().catch(X)),
      t
    )
  }
}
var qn = {
  cm: 37.79527559055118,
  mm: 3.7795275590551176,
  Q: 0.9448818897637794,
  in: 96,
  pc: 16,
  pt: 1.3333333333333333,
  px: 1,
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16,
}
function Me(e) {
  if (!e) return null
  let t = /(-?[0-9.]+)([a-z%]*)/.exec(e)
  if (!t) return null
  let [o, n, i] = t
  if (n === void 0 || (i != null && i.startsWith("%"))) return null
  let r = Math.round(parseFloat(n) * ((i && qn[i]) || 1))
  return r <= 0 ? 0 : r
}
function sn(e) {
  let t = Zn(e)
  if (!t) throw Error("Invalid SVG")
  let o = Me(t.getAttribute("width")),
    n = Me(t.getAttribute("height"))
  if (o !== null && n !== null) return { width: o, height: n }
  let i = t.getAttribute("viewBox")
  if (i) {
    let r = i.split(" "),
      s = Me(r[2]),
      a = Me(r[3])
    if (s !== null && a !== null) {
      let c = a !== 0 ? s / a : 2
      return o !== null && n === null
        ? { width: o, height: o / c }
        : n !== null && o === null
        ? { width: n * c, height: n }
        : { width: s, height: a }
    }
  }
  return { width: o != null ? o : 300, height: n != null ? n : 150 }
}
function Zn(e) {
  let o = new DOMParser().parseFromString(e, "image/svg+xml"),
    n = o.rootElement || o.childNodes[0]
  if (!(!n || n.nodeName.toUpperCase() !== "SVG")) return n
}
var an = ve("addImagesToCanvas"),
  Qn = 5e4
function Jn(e) {
  return e.includes('xlink:href="data:image/')
}
async function ln(e, t, o, n, i = !1) {
  if (!t || t.length === 0) return
  let r = er(e, t.length, o, i),
    s = new ie(),
    a = new Set(),
    c = []
  for (let g of t)
    if (g.type === Jt.get("svg")) {
      let p = await g.text()
      p.length > Qn || Jn(p)
        ? (s.add(g), a.add(g.name))
        : c.push(tr(e, g.name, g, r, n))
    } else s.add(g)
  let m = (await s.results()).filter(Do),
    f = e.wrapHandler(cn(e, "bitmap"))
  for (let {
    filename: g,
    originalFilename: p,
    imageSize: { height: u, pixelHeight: d, pixelWidth: h, width: P },
  } of m) {
    let y = a.has(p) ? "svg" : "bitmap"
    f(
      g,
      p,
      y,
      {
        width: P / window.devicePixelRatio,
        height: u / window.devicePixelRatio,
        pixelWidth: h,
        pixelHeight: d,
      },
      r,
      n,
      void 0
    )
  }
  await Promise.all(c)
}
function er(e, t, o, n) {
  let i = {
    type: "node",
    parentId: so(e.tree, e.scopeStore.active, [], o),
    position: o,
  }
  if (n || e.selection.nodes.length === 0) return [i]
  let r = []
  for (let s of e.selection.nodes) {
    if (!ee(s)) return [i]
    if (s.layout !== void 0) r.push({ type: "node", parentId: s.id })
    else if (!pe(s)) r.push({ type: "fill", node: s })
    else return [i]
  }
  return t > 1 && r.some((s) => s.type === "fill") ? [i] : r
}
function cn(e, t) {
  return (o, n, i, r, s, a, c) => {
    let m = r.width,
      f = r.height
    r.width <= 0 && (r.width = 1), r.height <= 0 && (r.height = 1)
    let g = e.tree,
      p = { intrinsicWidth: m, intrinsicHeight: f }
    t === "bitmap" &&
      r.pixelWidth &&
      r.pixelHeight &&
      ((p.fillImagePixelWidth = r.pixelWidth),
      (p.fillImagePixelHeight = r.pixelHeight))
    let u = []
    for (let d of s)
      if (
        (d.type === "fill" &&
          (t === "svg" || i === "svg") &&
          (d = { type: "node", parentId: d.node.id }),
        d.type === "node")
      ) {
        let h = d.parentId,
          P = d.position ? io(e, h, d.position, r) : void 0,
          y = g.newId(),
          x = n.replace(/\.[^.]+$/, ""),
          S = {
            name: Po(x),
            id: y,
            width: r.width,
            height: r.height,
            ...p,
            ...P,
          }
        if (t === "bitmap") {
          an.info("create image:", n, "size:", r)
          let R = { ...S, overflow: "visible" }
          qe(g, h, (F, W) => (e.createImage(o, n, F, { ...R, ...W }), y)),
            Eo({})
        } else if (t === "svg") {
          an.info(
            "create svg:",
            n,
            "size:",
            r,
            "bytes:",
            o.length,
            "colorable?",
            c
          )
          let R = { ...S, originalFilename: n }
          Mt(c) && (R.colorable = c),
            qe(g, h, (F, W) => (e.createSVG(o, F, { ...R, ...W }), y))
        } else Be(t)
        let k = gt(n)[1].toLowerCase()
        E("insert_image", { imageExtension: k, source: `upload_${a}` }),
          u.push(y)
      } else if (d.type === "fill") {
        let h = e.tree.get(d.node.id)
        if (!h) continue
        K(qt(h))
        let P = Pe(o, null, n, "auto")
        h.set({ fillImage: P, fillImageOriginalName: n, fillType: "image" }),
          Zt(h) && !h.fillEnabled && h.set({ fillEnabled: !0 }),
          u.push(d.node.id)
      } else Be(d)
    e.selection.set(u)
  }
}
async function tr(e, t, o, n, i) {
  let r = "run-svgo"
  if (o.size > 1e6) {
    q({
      type: "add",
      variant: "error",
      key: r,
      text: "Your SVG is too large to upload. You may need to convert to a different format, such as PNG.",
      icon: "error",
      duration: 5e3,
    })
    return
  }
  q({
    type: "add",
    variant: "progress",
    key: r,
    text: "Optimizing SVG\u2026",
    icon: "reconnecting",
    duration: 1 / 0,
    showCloseButton: "never",
  })
  try {
    let a = await or(o),
      c = sn(a)
    e.wrapHandler(cn(e, "svg"))(a, t, "svg", c, n, i, !0),
      q({ type: "remove", key: r })
  } catch (a) {
    throw (
      (console.error("Failed to insert SVG:", a),
      q({
        type: "add",
        variant: "error",
        key: r,
        text: "Failed to insert SVG",
        icon: "error",
      }),
      a)
    )
  }
}
async function or(e) {
  let t = new FormData()
  return (
    t.set("file", e, "image.svg"),
    await (
      await fetch("/internal/svgo", { method: "POST", body: t, headers: mo })
    ).text()
  )
}
var nr = {
    defaultComponent: { insert: "insert-default", drag: "insert-default-drag" },
    libraryModule: { insert: "insert-library", drag: "insert-library-drag" },
    externalModuleComponent: { insert: "insert", drag: "insert-drag" },
  },
  et = "default_component_",
  Fe = "external_",
  tt = "local_",
  dn = "legacy_design_component",
  pn = "legacy_code_component",
  un = `${tt}${pn}`,
  rr = `${Fe}${pn}`,
  mn = `${tt}${dn}`,
  fn = `${Fe}${dn}`
var ir = new Set(["frame", "image-frame", "stack", "repeater"]),
  sr = (e) => e.startsWith(et),
  gn = (e) => e === mn || e === fn,
  ar = (e) => ir.has(e)
function hn({ canvasNode: e, source: t, packageIdentifier: o, isDrag: n }) {
  let i = lr(e)
  switch ((E("component_instance", { componentType: i.type, source: t }), t)) {
    case "insert_menu": {
      let r = cr(i)
      E("insert_menu_add", { type_added: r })
      break
    }
  }
  if (
    (o && t !== "insert_panel" && t !== "quick_menu" && dr(o, t, H(e)),
    i.type === "local_module_canvasComponent_component" &&
      E("component_canvas_instance", { componentId: e.id }),
    gn(i.type) && E("component_design_instance", {}),
    H(e) && ce(e.codeComponentIdentifier))
  ) {
    let r = i.type.startsWith(et)
        ? "defaultComponent"
        : t === "team_library"
        ? "libraryModule"
        : "externalModuleComponent",
      s = nr[r][n ? "drag" : "insert"]
    l.modulesStore.trackExternalComponentInsert([e.codeComponentIdentifier], s)
  }
}
function lr(e) {
  var n, i
  if (H(e)) {
    let r = e.codeComponentIdentifier,
      s = ct(r)
    if (!s)
      return {
        type: e.codeComponentIdentifier.startsWith(".") ? un : rr,
        codeComponentIdentifier: r,
      }
    if (lt(s))
      return {
        type: `${tt}module_${s.type}_component`,
        codeComponentIdentifier: r,
      }
    if (ce(s)) {
      let a = l.tree.getNode(s.moduleId)
      return bo(l, r)
        ? {
            type: `${et}${a == null ? void 0 : a.title}`,
            codeComponentIdentifier: r,
          }
        : {
            type: `${Fe}module_${
              (n = a == null ? void 0 : a.type) != null ? n : "unknown"
            }_component`,
            codeComponentIdentifier: r,
          }
    }
  }
  let o =
    (((i = e.replicaInfo) == null ? void 0 : i.master) &&
      l.tree.getNode(e.replicaInfo.master)) ||
    e
  return Wt(o)
    ? Vt(o)
      ? { type: fn }
      : { type: mn }
    : Ut(e)
    ? { type: "repeater" }
    : te(e)
    ? { type: "stack" }
    : ee(e)
    ? e.fillType === "image"
      ? { type: "image-frame" }
      : { type: "frame" }
    : { type: "unknown" }
}
function cr({ type: e }) {
  return e.startsWith("local_module_") || e === un
    ? "code_component"
    : gn(e)
    ? "design_component"
    : e.startsWith(Fe)
    ? "package"
    : sr(e) || ar(e)
    ? e
    : "unknown"
}
function dr(e = null, t, o) {
  !e ||
    e === kt ||
    E("store_use_installed", {
      store: "no_store_info",
      packageName: e,
      isCodeComponent: o,
      source: t,
    })
}
function yn(e) {
  return vo(
    {
      key: "insert-data-source-item",
      progress: { variant: "progress", text: "Inserting\u2026" },
      error: { variant: "error", text: "Failed to insert" },
      waitTime: 100,
    },
    e
  )
}
var ge = A(B())
var vn = {
    ["miniSite"]: {
      title: "Mini",
      features: [
        "For Landing Pages",
        "Home + 404 Page",
        "Custom Domain",
        "5 MB File Size Limit",
        "1,000 Visitors/mo",
      ],
    },
    ["basicSite"]: {
      title: "Basic",
      features: [
        "For Personal Use",
        "Unlimited Pages",
        "Password Protect",
        "5 MB File Size Limit",
        "1 CMS Collection",
        "10 Page Search Limit",
        "10,000 Visitors/mo",
      ],
    },
    ["proSite"]: {
      title: "Pro",
      features: [
        "For Bigger Sites",
        "Analytics",
        "Staging",
        "Redirects",
        "Cookie Banner",
        "10 CMS Collections",
        "20 MB File Size Limit",
        "300 Page Search Limit",
        "200,000 Visitors/mo",
      ],
    },
  },
  Us = {
    ["teamAccount"]: {
      title: "Team Basic",
      features: [
        "Live Collaboration",
        "Comments",
        "Up to 5 Editors",
        "1 GB File Storage",
        "7d Version History",
      ],
      maxEditors: 5,
    },
    ["teamPro"]: {
      title: "Team Pro",
      features: [
        "Everything Basic +",
        "Project Permissions",
        "Up to 10 Editors",
        "10 GB File Storage",
        "30d Version History",
      ],
    },
  }
function Pn(e) {
  let t = pr(e)
  t && l.modalStore.set({ ...t.modal, type: "Upsell", source: "upsell" })
}
function pr(e) {
  var t
  switch (e) {
    case "canUseCookieBannerModule":
      return {
        badge: "Pro",
        modal: {
          title: "Upgrade to Pro",
          description: ge.default.createElement(
            "span",
            null,
            ge.default.createElement(
              He,
              null,
              "Purchase a Pro plan to get access to powerful new features, like the "
            ),
            ge.default.createElement(vt, { href: Io }, "Cookie Banner"),
            ge.default.createElement(
              He,
              null,
              ", Staging, Analytics, Redirects and so much more."
            )
          ),
          trackingPage: "cookie-banner-module-upsell",
          confirmLabel: "Upgrade",
          cancelLabel: "Maybe Later",
          upsellSitePlan: "proSite",
          upsellFeatures: (t = vn["proSite"]) == null ? void 0 : t.features,
        },
      }
  }
}
function bn(e, t) {
  if (!H(e)) return
  let o = e.getSupportedLayout(_),
    n = e.getCurrentVariantSize(_)
  Ue(o.width) &&
    (n == null ? void 0 : n.widthType) !== 0 &&
    ((t.widthType = 2),
    t.left !== null && t.right !== null && (t.right = null)),
    Ue(o.height) &&
      (n == null ? void 0 : n.heightType) !== 0 &&
      ((t.heightType = 2),
      t.top !== null && t.bottom !== null && (t.bottom = null))
}
var mr = ve("canvasDropZone"),
  rt = "DraggableComponent",
  it = "DraggableModuleComponent",
  Tn = "CodeFileWithMultipleComponents",
  fr = l.wrapHandler((e) => {
    if (Se(l, "canDesign")) return
    ;(l.toolStore.stackInsertionIndicator = null),
      (l.toolStore.replaceableFloatingPositionNode = null)
    let t = e.dataTransfer.getData(rt),
      o = l.canvasStore.convertContainerPointToCanvas(e.client)
    if (t) {
      let {
        component: r,
        packageIdentifier: s,
        source: a,
        type: c,
        isLayoutSection: m,
        overlayType: f,
      } = t
      if (!r) return
      ot({
        component: r,
        canvasPoint: o,
        metaKey: e.metaKey,
        source: a,
        packageIdentifier: s,
        type: c,
        isLayoutSection: m,
        overlayType: f,
      })
      return
    }
    let n = e.dataTransfer.getData(it)
    if (n) {
      let {
        component: r,
        moduleIdentifier: s,
        source: a,
        shouldBecomeFullWidthForVariants: c,
        shouldDetachOnInsert: m,
        overlayType: f,
        featureUpsell: g,
        isLayoutSection: p,
      } = n
      if (!r) return
      if (g) {
        Pn(g)
        return
      }
      l.beginUndoGroup(),
        m && (l.chromeStore.autoDetachingNodeId = r.id),
        yn(async () => {
          await l.modulesStore.addExternalModulesToProject([s], {
            onTreeUpdate: () => {
              ot({
                component: r,
                canvasPoint: o,
                metaKey: e.metaKey,
                source: a,
                overlayType: f,
                shouldBecomeFullWidthForVariants: c,
                isLayoutSection: p,
              })
            },
          })
        })
          .then(async () => {
            if (!m || !H(r)) return
            let u = ce(s) ? l.tree.getNode(s.moduleId) : null
            u != null && u.type && (await Co(r, l, s, u.type).catch(X))
          })
          .finally(() => {
            l.processWhenReady(() => {
              l.endUndoGroup(), (l.chromeStore.autoDetachingNodeId = null)
            })
          })
          .catch(mr.error)
      return
    }
    let i = e.dataTransfer.getData(Tn)
    if (i) {
      let { componentDefinitions: r, source: s } = i
      if (r.length < 1) return
      let a = []
      r.forEach((m) => {
        ft(m) &&
          a.push({
            label: m.name,
            click: () => {
              let f = ho(m)
              ot({
                component: f,
                canvasPoint: e.client,
                metaKey: e.metaKey,
                source: s,
              })
            },
          })
      }),
        So.buildFromTemplate(a).popup({ x: e.client.x, y: e.client.y }).catch(X)
    }
  }),
  gr = l.wrapHandler((e) => {
    if (Se(l, "canDesign")) return
    ;(l.toolStore.stackInsertionIndicator = null),
      (l.toolStore.replaceableFloatingPositionNode = null)
    let t = e.dataTransfer.getData(rt) || e.dataTransfer.getData(it)
    if (!t) return
    let { component: o, isLayoutSection: n, overlayType: i } = t
    if (!o) return
    let r = l.canvasStore.convertContainerPointToCanvas(e.client)
    if (i === 1) {
      let s = l.tree
          .getNodesAtPoint(l.scopeStore.active, r)
          .filter((c) => Xe(c, { allowVariants: !0 })),
        a = l.tree.getTopMostChildNode(s.filter(Ke))
      if (a)
        l.setHighlight(a.id),
          (e.dataTransfer.dropEffectCursor = Ye),
          (l.toolStore.replaceableFloatingPositionNode = a.id)
      else {
        let c = l.tree.getTopMostChildNode(s)
        c &&
          (l.setHighlight(c.id),
          (l.toolStore.replaceableFloatingPositionNode = c.id))
      }
    } else {
      let s = xn(r, e.metaKey)
      s &&
        (l.setHighlight(s.id),
        (e.dataTransfer.dropEffectCursor = Ye),
        (l.toolStore.replaceableFloatingPositionNode = null))
      let a = Qe(l, r, [o], null, _, n)
      if (a) {
        let c = Ee(l, o),
          { insertionLine: m } = Ze(a, l, r, c)
        ;(l.toolStore.stackInsertionIndicator = m), l.setHighlight(a.id)
      } else {
        let c = Cn(l, o, r, n)
        l.setHighlight(c ? c.id : null)
      }
    }
  }),
  hr = l.wrapHandler(() => {
    ;(l.toolStore.stackInsertionIndicator = null),
      (l.toolStore.replaceableFloatingPositionNode = null),
      l.setHighlight(null)
  }),
  yr = l.wrapHandler(async (e) => {
    var n
    if (Se(l, "canDesign") || !((n = e.dataTransfer) != null && n.files)) return
    let t = { images: [], videos: [] }
    for (let i of e.dataTransfer.files) {
      if (i && ![...eo, ...to].includes(i.type)) {
        let r = i.name.split(".").pop()
        q({
          key: `unsupported-file-drop-${r}`,
          type: "add",
          variant: "error",
          text: `The file type (.${r}) is not supported.`,
          icon: "error",
          duration: 5e3,
        })
        continue
      }
      i != null && i.type.includes("video")
        ? t.videos.push(i)
        : i != null && i.type.includes("image") && t.images.push(i)
    }
    e.preventDefault()
    let o = l.canvasStore.convertContainerPointToCanvas({ x: e.x, y: e.y })
    await Promise.all([
      wr(l, t.videos, o, "drop"),
      ln(l, t.images, o, "drop", !0),
    ])
  }),
  vr = {
    position: "absolute",
    top: "var(--framerInternalUI-chromeMarginTop)",
    right: "var(--framerInternalUI-chromeMarginRight)",
    bottom: "var(--framerInternalUI-chromeMarginBottom)",
    left: "var(--framerInternalUI-chromeMarginLeft)",
  },
  Pr = [rt, it, Tn],
  hl = nt.default.memo(() => {
    let e = St({
      dataTypes: Pr,
      onDrop: fr,
      onDragOver: gr,
      onDragLeave: hr,
      dropEffect: "copy",
    })
    return nt.default.createElement(Rt, { ref: e, onDrop: yr, style: vr })
  })
function Ee(e, t) {
  let { width: o, height: n } = e.tree.getRect(t)
  return (
    ze(t) &&
      Ge(t) &&
      (t.widthType === 2 && t.width > 0 && (o = t.width),
      t.heightType === 2 && t.height > 0 && (n = t.height)),
    { width: o, height: n }
  )
}
function br(e, t, o) {
  let n = Ee(e, t)
  return { ...n, x: o.x - n.width / 2, y: o.y - n.height / 2 }
}
function Tr(e, t) {
  let o = Ee(e, t),
    n = e.scopeStore.active,
    i
  if (e.selection.nodes.length > 0) {
    let s = e.tree.getBoundingFrameForNodes(e.selection.nodes)
    i = j.center(s)
  } else i = e.canvasStore.getCanvasCenter()
  let r = { x: i.x - o.width / 2, y: i.y - o.height / 2 }
  for (;;) {
    let s = { ...o, ...r },
      a = e.tree.getNodesInRect(n, s, !0)
    if (a.length === 0) return s
    let c = e.tree.getBoundingFrameForNodes(a)
    r.x = c.x - o.width - 100
  }
}
function Cn(e, t, o, n = !1) {
  let { tree: i } = e,
    r = i.getPotentialParents(
      e.scopeStore.active,
      e.overlayStore.activeOverlays,
      { ...o, width: 1, height: 1 },
      o,
      _,
      t
    )
  return (
    n && (r = r.filter((s) => !e.tree.getParent(s.id))),
    (r = i.sortVisually(r).reverse()),
    r.length > 0 && r[0] ? r[0] : null
  )
}
function xn(e, t, o) {
  if (!t && !o) return null
  let n = l.tree
    .getNodesAtPoint(l.scopeStore.active, e)
    .filter((i) => Xe(i, { allowVariants: !!o }))
  return o === 1
    ? l.tree.getTopMostChildNode(n.filter(Ke))
    : l.tree.getTopMostChildNode(n)
}
function ot({
  component: e,
  canvasPoint: t,
  metaKey: o,
  source: n,
  shouldBecomeFullWidthForVariants: i,
  overlayType: r,
  packageIdentifier: s,
  isLayoutSection: a,
  type: c,
}) {
  let m = xn(t, o, r)
  m
    ? yo(l, m, e, r === 1).catch(X)
    : wn({
        vekterEngine: l,
        component: e,
        packageIdentifier: s,
        canvasPoint: t,
        source: n,
        type: c,
        shouldBecomeFullWidthForVariants: i,
        isLayoutSection: a,
        insertAsOverlayType: r,
      })
}
var In = { width: 1, widthType: 1, heightType: 2, left: 0, right: null }
function wn({
  vekterEngine: e,
  component: t,
  canvasPoint: o,
  packageIdentifier: n,
  source: i,
  type: r,
  shouldBecomeFullWidthForVariants: s = new Set(),
  isLayoutSection: a = !1,
  notDraggedOntoCanvas: c = !1,
  insertAsGroundNode: m = !1,
  insertAsOverlayType: f,
}) {
  var U
  hn({
    canvasNode: t,
    source: r === "libraryModule" ? "team_library" : i,
    packageIdentifier: n,
    isDrag: !0,
  })
  let g = m ? Tr(e, t) : br(e, t, o)
  f === 1 &&
    we(t) &&
    Qt(t) &&
    t.set({
      floatingPositionEnabled: !0,
      floatingPlacement: Xt,
      floatingAlignment: Yt,
      floatingOffsetX: 0,
      floatingOffsetY: 10,
    })
  let p = go(e, t),
    u = Qe(e, o, [p], null, _, a)
  if (c && a && !u) {
    let v = e.canvasStore.getCanvasVisibleRect(),
      b =
        e.selection.ids.length === 1 && e.selection.ids[0]
          ? e.tree.getNode(e.selection.ids[0])
          : null,
      I = b ? e.tree.getGroundNodeFor(b) : null
    Bt(I) && j.intersects(e.tree.convertFrameToCanvas(I), v) && (u = I)
  }
  let d = u != null ? u : Cn(e, t, o, a),
    h = e.selection.ids.length === 0,
    P = e.scopeStore.active,
    y = je(P) ? P.getPrimaryVariant() : null
  if ((c && a && y && h && (d = y), f === 1 && d && we(p) && !pe(d))) {
    let v
    if (!zt(d, _) && jt(d)) {
      let T = $t(e.tree, d)
      K(T, "Smart Component instance should have a local SmartComponentNode")
      let V = Mo(
        l.tree,
        T.getPrimaryVariant(),
        "onMouseEnter",
        "Hover",
        l.codeGenerationStore
      )
      K(V, "Should be able to create event key for local smart component node"),
        (v = V)
    }
    let b = (U = d.originalid) != null ? U : d.id,
      I = e.overlayStore.create(
        "framer/useShowRelativeOverlay",
        b,
        v,
        p.draftOrCurrent()
      )
    if (!I) return
    e.tree.move(I.id, b)
    return
  } else we(p) && p.set(Kt)
  if (
    m &&
    ((d = null),
    (u = null),
    !j.containsRect(e.canvasStore.getCanvasVisibleRect(), g))
  ) {
    let v = j.center(g)
    e.canvasStore.scrollToCenter(v, { animate: !0 })
  }
  let x = -1,
    S = null
  if (d) {
    po(e, d, t, g)
    let v = d.draftOrCurrent()
    te(v) && (u = v)
  }
  if (u) {
    let v = Ee(e, t),
      { insertionIndex: b, wrap: I } = Ze(u, e, o, v)
    if ((I && (S = I), Ie(b) && (x = b), c && a)) {
      if (((x = u.children.length), e.selection.ids.length === 1)) {
        let he = e.selection.ids[0],
          We = he && e.tree.getNode(he)
        if (We) {
          let st = new Set([We.id])
          for (let Ve of We.ancestors()) st.add(Ve.id)
          let at = u.children.findIndex((Ve) => st.has(Ve.id))
          at >= 0 && (x = at + 1)
        }
      }
      let T,
        V = u.children[x - 1]
      V
        ? ((T = e.tree.convertFrameToCanvas(V)), (T.y += T.height))
        : (T = e.tree.convertFrameToCanvas(u)),
        (T.height = v.height)
      let se = e.tree.convertFrameToCanvas(u),
        Le = Math.min(T.x, se.x),
        $ = Math.max(j.maxX(T), j.maxX(se))
      ;(T.x = Le), (T.width = $ - Le)
      let { zoom: Z } = e.canvasStore,
        Q = e.canvasStore.getCanvasVisibleRect(),
        ke = Q.width * Z,
        ae = Q.height * Z,
        le = 40,
        Sn = Math.max(ke - le * 2, 100),
        Rn = Math.max(ae - le * 2, 100),
        Nn = Sn / (T.width || 1),
        Dn = Rn / (T.height || 1),
        On = Math.min(Nn, Dn, 0.5),
        Mn = j.center(T)
      e.canvasStore.scrollToCenter(Mn, { animate: !0, zoom: On })
    }
    uo(e, u, t, g)
  }
  let k
  if (d) {
    let { width: v, height: b } = g
    k = { ...e.tree.convertCanvasFrameToNode(d, g), width: v, height: b }
  } else k = g
  let R = p.updateForRect({
    rect: k,
    parentSizeInfo: null,
    constraintsLocked: !e.persistedUserDefaults.layoutGuessingEnabled,
    shouldGuessPinToBottom: d ? no(e.tree, p, d) : !0,
    shouldGuessPinToRight: d ? ro(e.tree, p, d) : !0,
  })
  d && te(d) && Ge(p) && ze(p) && (R = xr(p, R)), bn(p, R), p.set(R, e.tree)
  let F = p.id,
    W = !1,
    N = null
  if (d) {
    if (
      ((N = d),
      Ht(d) &&
        ((N = e.getNode(d.originalid)),
        (W = !0),
        K(
          N,
          "Fail to insert node into variants: the original parent should exist"
        )),
      S && !$e(N) && te(N))
    ) {
      let I = Fo(e, N, S)
      if (!I) return
      N = I
    }
    e.moveNode(p.id, N.id, x),
      W &&
        (K(
          $e(d),
          "Fail to insert node into variants: the new parent should be a replica node"
        ),
        (F = Gt(e, p, d, N)))
    let v = e.tree.getGroundNodeFor(N),
      b = Boolean(v.name && s.has(v.name.toLowerCase()))
    if (
      (ee(p) && b && p.set({ left: 0, width: 1, widthType: 1 }, e.tree),
      H(p) && _t(v) && pe(v))
    ) {
      let T = {
        width: p.width,
        widthType: p.widthType,
        left: p.left,
        right: p.right,
      }
      b && p.set(In)
      let V = lo(p)
      if (V) {
        let se = e.tree.getScopeNodeFor(v)
        je(se) &&
          se.getTopLevelReplicaVariants().forEach(($) => {
            if (!$.name) return
            let Z = co($.name, V)
            if (!Z || Z === V.defaultVariant) return
            let Q = { ...$.replicaInfo.overrides },
              ke = { ...$.replicaInfo, overrides: Q },
              ae = { ...Q[p.id] },
              le = Cr(b, s, $.name, T)
            le && Object.assign(ae, le),
              (ae[Dt(V.key)] = { type: "enum", value: Z }),
              (Q[p.id] = ae),
              $.set({ replicaInfo: ke })
          })
      }
    }
    At(d) &&
      (b || p.set({ gridItemFillCellWidth: !0 }),
      p.set({ gridItemFillCellHeight: !0 }))
  }
  e.selection.set(F, { switchToLayers: !0 })
}
function Cr(e, t, o, n) {
  let i = t.has(o.toLowerCase())
  if (e !== i) return i ? In : n
}
function yl(e, t) {
  let o = t.tree.get(e.id)
  if (o) {
    if (!t.tree.hasNode(e)) return o
  } else return fo(t.tree, e, _)
}
function xr(e, t) {
  let o = { ...t }
  return (
    (e.widthType === 3 || e.widthType === 1) &&
      _e(t.width) &&
      t.widthType !== e.widthType &&
      (delete o.width, delete o.widthType),
    (e.heightType === 3 || e.heightType === 1) &&
      _e(t.height) &&
      t.heightType !== e.heightType &&
      (delete o.height, delete o.heightType),
    o
  )
}
function Ir() {
  return To(wo)
}
async function wr(e, t, o, n, i = Ir) {
  if (!t || t.length === 0) return
  let r = new ie()
  for (let f of t) r.add(f)
  let s = (await r.results()).filter(Oo),
    a = Sr(o, s),
    c = i()
  if (!c) return
  let m = null
  s.forEach((f, g) => {
    let p = Pe(f.filename, null, f.originalFilename),
      u = new oo({
        codeComponentIdentifier: c.value,
        width: f.dimensions.width / window.devicePixelRatio,
        height: f.dimensions.height / window.devicePixelRatio,
        ...Ot({
          srcFile: { type: "file", value: p },
          srcType: { type: "enum", value: "Upload" },
        }),
      })
    s.length > 1 && g === 0 && (m = u.id),
      e.processWhenReady(() => {
        var d
        return wn({
          vekterEngine: e,
          component: u,
          canvasPoint: (d = a[g]) != null ? d : o,
          source: "insert_panel",
          notDraggedOntoCanvas: n !== "drop",
        })
      })
  }),
    m && e.selection.set(m)
}
function Sr(e, t) {
  let o = e.x
  return t.map((i, r) => {
    let s = i.dimensions.width / window.devicePixelRatio,
      a = r === 0 ? s / 2 : 0,
      c = { x: o + s / 2 - a, y: e.y }
    return (o += s - a), c
  })
}
export {
  ie as a,
  Zn as b,
  Qn as c,
  Jn as d,
  ln as e,
  or as f,
  hn as g,
  lr as h,
  cr as i,
  yn as j,
  vn as k,
  Us as l,
  Pn as m,
  pr as n,
  bn as o,
  rt as p,
  it as q,
  Tn as r,
  hl as s,
  wn as t,
  yl as u,
  xr as v,
  wr as w,
  De as x,
  ne as y,
  me as z,
  Ao as A,
  Uo as B,
  Go as C,
  Bn as D,
  qo as E,
  Un as F,
  wi as G,
  Si as H,
  Ri as I,
  Li as J,
  on as K,
  _i as L,
}
//# sourceMappingURL=https://app.framerstatic.com/chunk-5XYHN6AX.js.map
