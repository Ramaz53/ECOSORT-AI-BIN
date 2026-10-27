import plugin from "tailwindcss/plugin";

const v = (n) => `rgb(var(--${n}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 900: "#050f0b", 800: "#0a1b14", 700: "#12291f" },
        brand: { DEFAULT: "#16a34a", dark: "#15803d" },
        // theme-aware colors (light/dark) - values neeche plugin mein hain
        page: v("page"), surface: v("surface"), soft: v("soft"), track: v("track"),
        line: v("line"), ink: v("ink"), sub: v("sub"), muted: v("muted"),
      },
      keyframes: {
        fromLeft: { "0%": { opacity: 0, transform: "perspective(900px) translateX(-90px) rotateY(20deg)" }, "100%": { opacity: 1, transform: "perspective(900px)" } },
        fromRight: { "0%": { opacity: 0, transform: "perspective(900px) translateX(90px) rotateY(-20deg)" }, "100%": { opacity: 1, transform: "perspective(900px)" } },
        fromTop: { "0%": { opacity: 0, transform: "perspective(900px) translateY(-60px) rotateX(20deg)" }, "100%": { opacity: 1, transform: "perspective(900px)" } },
        fromBottom: { "0%": { opacity: 0, transform: "perspective(900px) translateY(60px) rotateX(-20deg)" }, "100%": { opacity: 1, transform: "perspective(900px)" } },
        zoomIn: { "0%": { opacity: 0, transform: "perspective(900px) scale(.85) translateZ(-60px)" }, "100%": { opacity: 1, transform: "perspective(900px)" } },
        pageIn: { "0%": { opacity: 0, transform: "perspective(1400px) translateY(30px) rotateX(-7deg) rotateY(9deg) scale(.97)" }, "100%": { opacity: 1, transform: "perspective(1400px)" } },
        kenburns: { "0%": { transform: "scale(1.02) translate(0,0)" }, "100%": { transform: "scale(1.15) translate(-1.5%,-1%)" } },
        rise: { "0%": { transform: "translateY(0)", opacity: 0 }, "10%": { opacity: 0.9 }, "100%": { transform: "translateY(-105vh)", opacity: 0 } },
        shimmer: { "0%": { backgroundPosition: "0% center" }, "100%": { backgroundPosition: "200% center" } },
        fadeUp: { "0%": { opacity: 0, transform: "translateY(16px)" }, "100%": { opacity: 1, transform: "none" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        scan: { "0%": { top: "0%" }, "100%": { top: "100%" } },
        belt: { "0%": { backgroundPosition: "0 0" }, "100%": { backgroundPosition: "60px 0" } },
      },
      animation: {
        fromLeft: "fromLeft .85s cubic-bezier(.2,.7,.2,1) backwards",
        fromRight: "fromRight .85s cubic-bezier(.2,.7,.2,1) backwards",
        fromTop: "fromTop .85s cubic-bezier(.2,.7,.2,1) backwards",
        fromBottom: "fromBottom .85s cubic-bezier(.2,.7,.2,1) backwards",
        zoomIn: "zoomIn .85s cubic-bezier(.2,.7,.2,1) backwards",
        pageIn: "pageIn .7s cubic-bezier(.2,.7,.2,1) backwards",
        kenburns: "kenburns 22s ease-in-out infinite alternate",
        rise: "rise 14s linear infinite",
        shimmer: "shimmer 5s linear infinite",
        fadeUp: "fadeUp .5s ease-out backwards",
        float: "float 5s ease-in-out infinite",
        scan: "scan 2.2s linear infinite alternate",
        belt: "belt .8s linear infinite",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) =>
      addBase({
        ":root": { "--page": "241 245 249", "--surface": "255 255 255", "--soft": "248 250 252", "--track": "241 245 249", "--line": "226 232 240", "--ink": "15 23 42", "--sub": "71 85 105", "--muted": "100 116 139", "--edge": "226 232 240", "color-scheme": "light" },
        ".dark": { "--page": "4 12 9", "--surface": "9 22 17", "--soft": "13 30 23", "--track": "20 44 34", "--line": "30 62 46", "--ink": "236 253 245", "--sub": "187 214 200", "--muted": "125 160 142", "--edge": "2 8 6", "color-scheme": "dark" },
        body: { "background-color": "rgb(var(--page))" },
      })
    ),
  ],
};
