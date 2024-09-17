import type { Config } from "tailwindcss";
import type { PluginCreator } from "tailwindcss/types/config";

const sideBarPlugin: PluginCreator = ({ addVariant }) => {
  addVariant("side-bar-open", ".side-bar-open &");
  addVariant("side-bar-close", ".side-bar-close &");
};

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
  });
};

export default {
  content: ["./src/**/*.{ts,tsx,css,scss}"],
  theme: {
    extend: {
      width: {
        "side-bar-inner-small-bar-width": "var(--tds-side-bar-inner-small-bar-width)",
        "side-bar-inner-big-bar-width": "var(--tds-side-bar-inner-big-bar-width)",
        "side-bar-width": "var(--tds-side-bar-width)",
        "top-bar-width": "var(--tds-top-bar-width)",
      },
      inset: {
        "side-bar-width": "var(--tds-side-bar-width)",
      },
      padding: {
        "content-area-padding": "var(--tds-content-area-padding)",
        "content-area-padding-with-side-bar-width": "calc(var(--tds-side-bar-width) + var(--tds-content-area-padding))",
        "content-area-padding-with-top-bar-height": "calc(var(--tds-top-bar-height) + var(--tds-content-area-padding))",
      },
      height: {
        "top-bar-height": "var(--tds-top-bar-height)",
      },
      colors: {
        "murky-color-1": {
          DEFAULT: "hsl(var(--tds-murky-color-1))",
        },
        "murky-color-2": {
          DEFAULT: "hsl(var(--tds-murky-color-2))",
        },
        "murky-color-3": {
          DEFAULT: "hsl(var(--tds-murky-color-3))",
        },
        "murky-color-4": {
          DEFAULT: "hsl(var(--tds-murky-color-4))",
        },
        "murky-color-5": {
          DEFAULT: "hsl(var(--tds-murky-color-5))",
        },
        "murky-color-6": {
          DEFAULT: "hsl(var(--tds-murky-color-6))",
        },

        "light-color-1": {
          DEFAULT: "hsl(var(--tds-light-color-1))",
        },
        "light-color-2": {
          DEFAULT: "hsl(var(--tds-light-color-2))",
        },
        "light-color-3": {
          DEFAULT: "hsl(var(--tds-light-color-3))",
        },
        "light-color-4": {
          DEFAULT: "hsl(var(--tds-light-color-4))",
        },
        "light-color-5": {
          DEFAULT: "hsl(var(--tds-light-color-5))",
        },
        "light-color-6": {
          DEFAULT: "hsl(var(--tds-light-color-6))",
        },
        "light-color-7": {
          DEFAULT: "hsl(var(--tds-light-color-7))",
        },

        "tistory-color": {
          DEFAULT: "hsl(var(--tds-tistory-color))",
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
        "fade-in-opacity": {
          "0%": {
            width: "100%",
            height: "100%",
            opacity: "0",
          },
          "1%": {
            width: "100%",
            height: "100%",
            opacity: "0",
          },
          "100%": {
            width: "100%",
            height: "100%",
            opacity: "1",
          },
        },
        "fade-out-opacity": {
          "0%": {
            width: "100%",
            height: "100%",
            opacity: "1",
          },
          "99%": {
            width: "100%",
            height: "100%",
            opacity: "0",
          },
          "100%": {
            width: "0",
            height: "0",
            opacity: "0",
          },
        },
      },
      animation: {
        "x-fade-in": "x-fade-in 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
        "x-fade-out": "x-fade-out 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
        "fade-in-opacity": "fade-in-opacity 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
        "fade-out-opacity": "fade-out-opacity 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
      },
    },
  },
  plugins: [textShadowPlugin, animateDurationPlugin, leftFullAppendPlugin, otherElementHoverPlugin, customScrollbarPlugin, sideBarPlugin],
} satisfies Config;
