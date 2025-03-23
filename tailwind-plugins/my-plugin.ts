import plugin from "tailwindcss/plugin";

const myPlugin = plugin.withOptions(function () {
  return function ({ matchUtilities }) {
    matchUtilities({
      "text-shadow": (value) => ({
        textShadow: value,
      }),
    });

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

    matchUtilities(
      {
        "w-full-append": (value) => ({
          width: `calc(100% + ${value})`,
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

    matchUtilities(
      {
        "scroll-margin": (value) => ({
          "scroll-margin": `${value}`,
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
});

export default myPlugin;
