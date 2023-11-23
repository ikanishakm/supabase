import * as React from "react"
import * as ReactDOM from "react-dom/client"
import * as Framer from "framer"

window.__framer_importFromPackage =
  (packageAndFilename, exportIdentifier) => () => {
    return React.createElement(Framer.ErrorPlaceholder, {
      error:
        'Package component not supported: "' +
        exportIdentifier +
        '" in "' +
        packageAndFilename +
        '"',
    })
  }

// A lot of libraries assume process.env.NODE_ENV is present in runtime/buildtime, so we are polyfilling it
window.process = {
  ...window.process,
  env: {
    ...(window.process ? window.process.env : undefined),
    NODE_ENV: "production",
  },
}

// Fallback support for stack gaps
Framer.installFlexboxGapWorkaroundIfNeeded()
;(async () => {
  const routes = {
    Hkav8svgD: {
      elements: { yn0FYtmF3: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/SahTLUlDeKNlXYnG2dPv/4Z66CDe5ww1qE7p9N2Z3/Hkav8svgD.js"
        )
      ),
      path: "/",
    },
    EcOhwdiTJ: {
      elements: { PCms08GFF: "faq", vcSrh0IpZ: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/RlV9Xd7VFffHy16c3VIy/j1tWMRiBIYbokolvxqdN/EcOhwdiTJ.js"
        )
      ),
      path: "/pricing",
    },
    ooJruU6Ui: {
      elements: { e5uIjhKpR: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/M1WDuVYHCnrX3f5SqvtB/WXnmqwTLoESsRseDibpL/ooJruU6Ui.js"
        )
      ),
      path: "/faq",
    },
    iGMh0YYda: {
      elements: { sHQtb9Nzd: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/BffwUCpsz0xPZLeAcR1o/gkczDfASyDOEX65M6l0H/iGMh0YYda.js"
        )
      ),
      path: "/signup-account",
    },
    UzCF4BzTh: {
      elements: { Q5KqA0LeD: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/su2xO24NQn5y0srNRQ5G/URvN3xQfIRwmcDovYRDY/UzCF4BzTh.js"
        )
      ),
      path: "/signup-pricing",
    },
    X7dDfAfyf: {
      elements: { oZtdlZ3aq: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/Gf8HgIb36OndqTccbjJC/qA6Gc5o86gZWrQ9DImOF/X7dDfAfyf.js"
        )
      ),
      path: "/signup-success",
    },
    HI2WYYcbI: {
      elements: {},
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/xVRdc1e1SvAZPx0p2KzO/UjUqqYM5qtvUKTlQMIzl/HI2WYYcbI.js"
        )
      ),
      path: "/login",
    },
    PIIHcmRtZ: {
      elements: { Ledb3l5ZG: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/6LDT1jeRbBde9VOo2uq9/nhMlhBM9B8DLRhjsu6Db/PIIHcmRtZ.js"
        )
      ),
      path: "/account",
    },
    PgcuzurLq: {
      elements: {},
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/uG9Dfe5xLhEU8qmume9Z/3jU0M6ukgcPfwUp77Gfv/PgcuzurLq.js"
        )
      ),
      path: "/reset-password",
    },
    iENbFnovC: {
      elements: { ycw1vUekB: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/8ks1ABY5O9mUL13f5093/TVoe8YCSmi5mdtECST7F/iENbFnovC.js"
        )
      ),
      path: "/all-resources",
    },
    rbMj0gc_L: {
      elements: { HyGOi3LdR: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/Iy54Mqa0IZ0hW34OPwGA/BVpzL8lLIrUQKXTGjIv9/rbMj0gc_L.js"
        )
      ),
      path: "/templates",
    },
    oI7VzKOUK: {
      elements: { awpWSGk9r: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/SPZ0WAJ9aDtVzCKothM6/yv5fGqQZYhr3Vp0g1rW7/oI7VzKOUK.js"
        )
      ),
      path: "/components",
    },
    tbpuJG68T: {
      elements: { pyhWlTHdw: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/kusUsi4Doa4nJ9kcYuOH/EmA6wwrE96V5lQ19pKxR/tbpuJG68T.js"
        )
      ),
      path: "/overrides",
    },
    j0ZfAWXjh: {
      elements: { mtXZxgaHn: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/yHrfCDJTmrW3bfgvx0xh/yxTmFsT6QlnlxVdoFB2t/j0ZfAWXjh.js"
        )
      ),
      path: "/learnergr",
    },
    DiP751qvS: {
      elements: { eynu3QtFc: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/X4wvj5KMXhPMDFW4SnzX/xlyA5yNrRX2fMJYHKy5o/DiP751qvS.js"
        )
      ),
      path: "/interviewsregre",
    },
    lxV_lQCTd: {
      elements: { IOrsvcM2I: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/pErwgUWzNFWFf1K2YKo1/zhOb9edLEbBEBuPLO8Vn/lxV_lQCTd.js"
        )
      ),
      path: "/blog",
    },
    m6CL8B17e: {
      elements: {},
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/e29Lz255xW2BRhdj6zkk/1G7yk26zRk4yc4V6348d/m6CL8B17e.js"
        )
      ),
      path: "/foundations",
    },
    eV2JqLpiQ: {
      elements: { Sc_xvI_yi: "shownav" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/ddCzEChevTiQdHCwE7H4/FUeX4a0bpFUXgOxAHDRt/eV2JqLpiQ.js"
        )
      ),
      path: "/foundations/color",
    },
    KrJ0ccY1p: {
      elements: { vCnFx6Dxc: "shownav" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/IFjwGW4NXuiNPGPmPf8m/p7Zf3njHlKbJlrBKSi5R/KrJ0ccY1p.js"
        )
      ),
      path: "/foundations/layout",
    },
    D4DWac5w7: {
      elements: { B6MxrfQpA: "shownav" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/hQq9ov7oaxXdplmY6kbR/NSr9QapFya8FIbscL7Nq/D4DWac5w7.js"
        )
      ),
      path: "/foundations/type",
    },
    Eop2aJ2Pp: {
      elements: {},
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/3hD6Pvz50V38Z9H9VvYu/aFo7gWMEx67UHysOmBaB/Eop2aJ2Pp.js"
        )
      ),
      path: "/resources-old",
    },
    dht3dId31: {
      elements: {},
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/q6TCe7U5M7p9W1YLQU2m/SB2X2Ni40Ehek9UhnSGO/dht3dId31.js"
        )
      ),
      path: "/old-home",
    },
    Jp4Ua_ViY: {
      elements: { t3BToKqK1: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/o8K2yTnwoGDtPSiQLoaH/2mHbeTD8BWBOjmHkETd5/Jp4Ua_ViY.js"
        )
      ),
      path: "/templates/:BJLluZOQx",
    },
    sasYkdnBx: {
      elements: { ojigK7vY8: "content", VbqSV5ycf: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/rSbaeJMX5xfbLNl29HX7/XQk3vDLJi5gy3QxQ36Kj/sasYkdnBx.js"
        )
      ),
      path: "/learn/:GSarpL65X",
    },
    alacK7VIh: {
      elements: { ns1nPfu9K: "main" },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/TBMIRPndCHu1kNEpqd7g/ibrpf1606PIorBYb9AUX/alacK7VIh.js"
        )
      ),
      path: "/educators/:zy8MOIF6s",
    },
    Y1WNqFAWL: {
      elements: {},
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/E8GYuaAxGE9hTGiPZNKK/k7ZNin1YP6N9oTmQmbWC/Y1WNqFAWL.js"
        )
      ),
      path: "/blog/:FpzrOhNMZ",
    },
    qRVeC8RPU: {
      elements: {},
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/G6V4GYoJGpjvZNLaxbm1/A5hg9T8xzp1rRziuf6K2/qRVeC8RPU.js"
        )
      ),
      path: "/faq/:Yw8kE2Qfs",
    },
    NvYk5z6of: {
      elements: {
        BCAlmsWX3: "shownav",
        inyl1YW_0: "resources",
        nzG0bzh6x: "behaviors",
        oBJj4rRQG: "anatomy",
        VxP6Rwc_A: "usecases",
        zpFJUnClO: "content",
      },
      page: Framer.lazy(() =>
        import(
          "https://framerusercontent.com/modules/8yFu7iBqFduDKnJWXyGF/uIIr5Puban7sFWv9oVtd/NvYk5z6of.js"
        )
      ),
      path: "/components/:Oou8TLdJo",
    },
  }
  const locales = [{ code: "en", id: "default", name: "English", slug: "" }]
  const notFoundPage = Framer.lazy(() => import("__framer-not-found-page"))
  const container = document.getElementById("main")

  let routeId,
    localeId,
    pathVariables,
    shouldHydrate = false
  if ("framerHydrateV2" in container.dataset) {
    const routeData = JSON.parse(container.dataset.framerHydrateV2)
    routeId = routeData.routeId
    localeId = routeData.localeId
    pathVariables = routeData.pathVariables
    shouldHydrate = true
  } else {
    const routeData = Framer.inferInitialRouteFromPath(
      routes,
      decodeURIComponent(location.pathname),
      true,
      locales
    )
    routeId = routeData.routeId
    localeId = routeData.localeId
    pathVariables = routeData.pathVariables
  }

  const route = routes[routeId]
  const RootComponent = await route.page.preload()
  routes[routeId].page = RootComponent

  const content = React.createElement(Framer.PageRoot, {
    RootComponent,
    isWebsite: true,
    routeId,
    pathVariables,
    routes,
    notFoundPage,
    isReducedMotion: true,
    localeId,
    locales,
  })

  const page = React.createElement(Framer.PageEffectsProvider, {
    children: content,
    value: {},
  })

  if (shouldHydrate) {
    React.startTransition(() => {
      ReactDOM.hydrateRoot(container, page)
    })
  } else {
    ReactDOM.createRoot(container).render(page)
  }
})().catch((error) => {
  window.__send_framer_event &&
    window.__send_framer_event("published_site_load_error", {
      message: String(error),
      stack:
        error instanceof Error && typeof error.stack === "string"
          ? error.stack
          : null,
    })
  throw error
})
