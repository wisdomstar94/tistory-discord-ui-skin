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

const animateDurationPlugin: PluginCreator = ({ matchUtilities }) => {
  matchUtilities(
    {
      "animate-duration": (value) => ({
        "animation-duration": value,
      }),
    },
    {
      values: {
        "0ms": "0ms",
        "50ms": "50ms",
        "100ms": "100ms",
        "150ms": "150ms",
        "200ms": "200ms",
        "300ms": "300ms",
        "400ms": "400ms",
        "500ms": "500ms",
        "600ms": "600ms",
      },
    }
  );
};

const leftFullAppendPlugin: PluginCreator = ({ matchUtilities }) => {
  matchUtilities(
    {
      "left-full-append": (value) => ({
        left: `calc(100% + ${value})`,
      }),
    },
    {
      values: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
      },
    }
  );
};

const otherElementHoverPlugin: PluginCreator = ({ matchVariant }) => {
  // addVariant('other-hover', ({ modify }))
  matchVariant("other-hover", (value, extra) => {
    return [`.other\\/${value}:hover ~ * &`, `.other\\/${value}:hover ~ &`];
  });
};

const customScrollbarPlugin: PluginCreator = ({ addUtilities }) => {
  addUtilities({
    ".scrollbar-hidden": {
      "&::-webkit-scrollbar": {
        width: "0px",
      },
    },
    ".scrollbar-primary": {
      "&::-webkit-scrollbar": {
        width: "4px",
      },
      "&::-webkit-scrollbar-track": {
        "background-color": "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        "background-color": "hsl(var(--tds-primary))",
        // background-color: hsl(0, 0%, 45%);
        "border-radius": "20px",
        "background-clip": "padding-box",
        border: "2px solid transparent",
      },
    },
  });
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
      keyframes: {
        "x-fade-in": {
          "0%": {
            opacity: "0",
            width: "auto",
            height: "auto",
            marginLeft: "-4px",
            transform: "scale(0.9)",
            overflow: "visible",
          },
          "1%": {
            opacity: "0",
            width: "auto",
            height: "auto",
            marginLeft: "-4px",
            transform: "scale(0.9)",
            overflow: "visible",
          },
          "100%": {
            opacity: "1",
            width: "auto",
            height: "auto",
            marginLeft: "0px",
            transform: "scale(1)",
            overflow: "visible",
          },
        },
        "x-fade-out": {
          "0%": {
            opacity: "1",
            width: "auto",
            height: "auto",
            marginLeft: "0px",
            transform: "scale(1)",
            overflow: "visible",
          },
          "99%": {
            opacity: "0",
            width: "auto",
            height: "auto",
            marginLeft: "-4px",
            transform: "scale(0.9)",
            overflow: "visible",
          },
          "100%": {
            opacity: "0",
            width: "0",
            height: "0",
            marginLeft: "-4px",
            transform: "scale(0.9)",
            overflow: "hidden",
          },
        },
      },
      animation: {
        "x-fade-in":
          "x-fade-in 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;",
        "x-fade-out":
          "x-fade-out 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;",
      },
    },
  },
  plugins: [
    textShadowPlugin,
    animateDurationPlugin,
    leftFullAppendPlugin,
    otherElementHoverPlugin,
    customScrollbarPlugin,
  ],
} satisfies Config;
