import type { Config } from "tailwindcss";
import type { CSSRuleObject, PluginCreator } from "tailwindcss/types/config";

const sideBarPlugin: PluginCreator = ({ addVariant }) => {
  addVariant("side-bar-open", ".side-bar-open &");
  addVariant("side-bar-close", ".side-bar-close &");
  addVariant("list-empty", [".list-empty &", ".list-empty&"]);
  addVariant("notice-index-page", [".notice-index-page &", ".notice-index-page&"]);
  addVariant("modal-open", [".modal-open &", ".modal-open&"]);
  addVariant("modal-close", [".modal-close &", ".modal-close&"]);

  // https://tistory.github.io/document-tistory-skin/common/global.html 참조
  addVariant("tt-body-index", ["#tt-body-index &", "#tt-body-index&"]);
  addVariant("tt-body-page", ["#tt-body-page &", "#tt-body-page&"]);
  addVariant("tt-body-category", ["#tt-body-category &", "#tt-body-category&"]);
  addVariant("tt-body-archive", ["#tt-body-archive &", "#tt-body-archive&"]);
  addVariant("tt-body-tag", ["#tt-body-tag &", "#tt-body-tag&"]);
  addVariant("tt-body-search", ["#tt-body-search &", "#tt-body-search&"]);
  addVariant("tt-body-guestbook", ["#tt-body-guestbook &", "#tt-body-guestbook&"]);
  addVariant("tt-body-location", ["#tt-body-location &", "#tt-body-location&"]);
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

const otherElementPlugin: PluginCreator = ({ matchVariant }) => {
  // addVariant('other-hover', ({ modify }))
  matchVariant("other-hover", (value, extra) => {
    return [`.other\\/${value}:hover ~ * &`, `.other\\/${value}:hover ~ &`];
  });

  matchVariant("other-checked", (value, extra) => {
    return [`.other\\/${value}:checked ~ * &`, `.other\\/${value}:checked ~ &`];
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

const customColorExtendPlugin: PluginCreator = ({ addUtilities }) => {
  const opacitys = Array.from({ length: 20 }).map((_, index) => index * 5);

  const extendColors: Record<string, string> = {
    "murky-color-1": "var(--tds-murky-color-1)",
    "murky-color-2": "var(--tds-murky-color-2)",
    "murky-color-3": "var(--tds-murky-color-3)",
    "murky-color-4": "var(--tds-murky-color-4)",
    "murky-color-5": "var(--tds-murky-color-5)",
    "murky-color-6": "var(--tds-murky-color-6)",
    "murky-color-7": "var(--tds-murky-color-7)",

    "light-color-1": "var(--tds-light-color-1)",
    "light-color-2": "var(--tds-light-color-2)",
    "light-color-3": "var(--tds-light-color-3)",
    "light-color-4": "var(--tds-light-color-4)",
    "light-color-5": "var(--tds-light-color-5)",
    "light-color-6": "var(--tds-light-color-6)",
    "light-color-7": "var(--tds-light-color-7)",

    "tistory-color": "var(--tds-tistory-color)",
  };

  const keys = Object.keys(extendColors);
  for (const colorName of keys) {
    const cssValue = extendColors[colorName];

    // text-*
    const textCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "text-",
      cssMap: [
        {
          cssProperty: "color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // bg-*
    const bgCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "bg-",
      cssMap: [
        {
          cssProperty: "background-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // outline-*
    const outlineCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "outline-",
      cssMap: [
        {
          cssProperty: "outline-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // stroke-*
    const strokeCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "stroke-",
      cssMap: [
        {
          cssProperty: "stroke",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // fill-*
    const fillCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "fill-",
      cssMap: [
        {
          cssProperty: "fill",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // shadow-*
    const shadowCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "shadow-",
      cssMap: [
        {
          cssProperty: "--tw-shadow-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
        {
          cssProperty: "--tw-shadow",
          cssValue(opacity) {
            return `var(--tw-shadow-colored)`;
          },
        },
      ],
      opacitys,
    });

    // border-*
    const borderCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "border-",
      cssMap: [
        {
          cssProperty: "border-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // border-l-*
    const borderLCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "border-l-",
      cssMap: [
        {
          cssProperty: "border-left-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // border-r-*
    const borderRCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "border-r-",
      cssMap: [
        {
          cssProperty: "border-right-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // border-t-*
    const borderTCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "border-t-",
      cssMap: [
        {
          cssProperty: "border-top-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // border-b-*
    const borderBCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "border-b-",
      cssMap: [
        {
          cssProperty: "border-bottom-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    const temp: CSSRuleObject[] = [];
    const allObjects = temp.concat(
      textCSSRuleObjects,
      bgCSSRuleObjects,
      outlineCSSRuleObjects,
      strokeCSSRuleObjects,
      fillCSSRuleObjects,
      shadowCSSRuleObjects,
      borderCSSRuleObjects,
      borderLCSSRuleObjects,
      borderRCSSRuleObjects,
      borderTCSSRuleObjects,
      borderBCSSRuleObjects
    );

    addUtilities(allObjects);
  }
};

function generateColorCSSRuleObject(params: {
  colorName: string;
  classNamePrefix: string;
  opacitys: number[];
  cssMap: { cssProperty: string; cssValue: (opacity?: number) => string }[];
}) {
  const { colorName, classNamePrefix, opacitys, cssMap } = params;

  const classNameCSSRuleObject: CSSRuleObject = {};

  classNameCSSRuleObject[`.${classNamePrefix}${colorName}`] = {};
  for (const { cssProperty, cssValue } of cssMap) {
    classNameCSSRuleObject[`.${classNamePrefix}${colorName}`]![cssProperty] = cssValue();
  }

  for (const opacity of opacitys) {
    classNameCSSRuleObject[`.${classNamePrefix}${colorName}\\/${opacity}`] = {};
    for (const { cssProperty, cssValue } of cssMap) {
      classNameCSSRuleObject[`.${classNamePrefix}${colorName}\\/${opacity}`]![cssProperty] = cssValue(opacity);
    }
  }

  return classNameCSSRuleObject;
}

export default {
  content: ["./src/**/*.{ts,tsx,css,scss}"],
  theme: {
    extend: {
      width: {
        "side-bar-inner-small-bar-width": "var(--tds-side-bar-inner-small-bar-width)",
        "side-bar-inner-big-bar-width": "var(--tds-side-bar-inner-big-bar-width)",
        "side-bar-width": "var(--tds-side-bar-width)",
        "top-bar-width": "var(--tds-top-bar-width)",
        "comment-input-form-width-with-sidebar": "var(--tds-comment-input-form-width-with-sidebar)",
        "comment-input-form-width": "var(--tds-comment-input-form-width)",
      },
      inset: {
        "side-bar-width": "var(--tds-side-bar-width)",
        "comment-input-form-left-with-sidebar": "var(--tds-comment-input-form-left-with-sidebar)",
        "comment-input-form-left": "var(--tds-comment-input-form-left)",
        "content-area-padding": "var(--tds-content-area-padding)",
      },
      padding: {
        "side-bar-width": "var(--tds-side-bar-width)",
        "top-bar-height": "var(--tds-top-bar-height)",
        "content-area-padding": "var(--tds-content-area-padding)",
        "content-area-padding-with-side-bar-width": "calc(var(--tds-side-bar-width) + var(--tds-content-area-padding))",
        "content-area-padding-with-top-bar-height": "calc(var(--tds-top-bar-height) + var(--tds-content-area-padding))",
      },
      margin: {
        "content-area-padding": "var(--tds-content-area-padding)",
        "comment-input-form-left": "var(--tds-comment-input-form-left)",
      },
      height: {
        "top-bar-height": "var(--tds-top-bar-height)",
      },
      colors: {},
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
  plugins: [
    textShadowPlugin,
    animateDurationPlugin,
    leftFullAppendPlugin,
    otherElementPlugin,
    customScrollbarPlugin,
    sideBarPlugin,
    customColorExtendPlugin,
  ],
} satisfies Config;
