/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        bree: ["Bree Serif", ...defaultTheme.fontFamily.serif],
        quicksand: ["Quicksand Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // "green-logo": "#619299",
        accent: "#609B7A",
        // accentLighter: "#79C19A",
        accentLighter: "rgb(121 193 154 / 0.4)",

        // accentLight: "#BACC5B",
      },
    },
  },
  plugins: [],
};
