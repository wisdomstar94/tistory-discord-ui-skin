import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,css,scss}"],
  theme: {
    extend: {
      width: {
        "side-bar-inner-small-bar-width":
          "var(--tds-side-bar-inner-small-bar-width)",
        "side-bar-width": "var(--tds-side-bar-width)",
      },
      colors: {
        "primary-color": {
          DEFAULT: "hsl(var(--tds-primary-default-color))",
          foreground: "hsl(var(--tds-primary-foreground-color))",
        },
        "primary-active-color": {
          DEFAULT: "hsl(var(--tds-primary-active-color))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
