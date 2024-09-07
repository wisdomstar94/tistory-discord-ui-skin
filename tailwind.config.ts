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
        "primary-color": {
          DEFAULT: "hsl(var(--tds-primary-default-color))",
          foreground: "hsl(var(--tds-primary-foreground-color))",
        },
        "primary-active-color": {
          DEFAULT: "hsl(var(--tds-primary-active-color))",
        },
        "secondary-color": {
          DEFAULT: "hsl(var(--tds-secondary-color))",
        },
        "tistory-primary-color": {
          DEFAULT: "hsl(var(--tds-tistory-primary-color))",
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
