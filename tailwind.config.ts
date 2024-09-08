import type { Config } from "tailwindcss";
import type { PluginCreator } from "tailwindcss/types/config";

const textShadowPlugin: PluginCreator = ({ matchUtilities, theme }) => {
  matchUtilities(
    {
      "text-shadow": (value) => ({
        textShadow: value,
      }),
    },
    { values: theme("textShadow") }
  );
};

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
        primary: {
          DEFAULT: "hsl(var(--tds-primary))",
          foreground: "hsl(var(--tds-primary-foreground))",
          active: "hsl(var(--tds-primary-active))",
        },
        "primary-2": {
          DEFAULT: "hsl(var(--tds-primary-2))",
        },
        "primary-tistory": {
          DEFAULT: "hsl(var(--tds-primary-tistory))",
        },
        secondary: {
          DEFAULT: "hsl(var(--tds-secondary))",
        },
      },
      textShadow: {
        sm: "1px 1px 2px var(--tw-shadow-color)",
        DEFAULT: "2px 2px 2px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [textShadowPlugin],
} satisfies Config;
