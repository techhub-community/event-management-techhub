/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        papayawhip: "#ffead3",
        saddlebrown: {
          "100": "#994d1c",
          "200": "#90430b",
          "300": "#903f0b",
          "400": "#6f2c01",
          "500": "#6b240c",
          "600": "#582001",
          "700": "#482707",
        },
        gray: {
          "100": "#020000",
          "200": "rgba(255, 255, 255, 0)",
          "300": "rgba(0, 0, 0, 0.9)",
          "400": "rgba(25, 15, 2, 0.26)",
        },
        lightblue: "#b7e1ff",
        white: "#fff",
        peachpuff: "#ffd6ae",
        burlywood: "#e6bd94",
        black: "#000",
        seashell: "#fff7f1",
        gainsboro: {
          "100": "#e6ded9",
          "200": "#d9d9d9",
          "300": "rgba(233, 226, 226, 0)",
        },
        sandybrown: {
          "100": "#ffa14f",
          "200": "rgba(255, 176, 107, 0.35)",
        },
        peru: {
          "100": "#e48f45",
          "200": "rgba(204, 125, 56, 0.35)",
        },
        midnightblue: "#080064",
        darkslategray: {
          "100": "#4a4a4a",
          "200": "#333",
          "300": "#003f53",
        },
        olive: "#746100",
        darkslateblue: {
          "100": "#004fab",
          "200": "#0b5090",
        },
        darkviolet: "#9400d9",
        linen: "#fff4e8",
        antiquewhite: "#e6dbcf",
        snow: "#fffaf6",
        dimgray: "#686868",
        chocolate: "#cc6e1c",
        rosybrown: "#ab866b",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "3xs": "10px",
        "8xs": "5px",
        xl: "20px",
        "8xl": "27px",
        "17xl": "36px",
        mini: "15px",
        "27xl": "46px",
        smi: "13px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      base: "1rem",
      lg: "1.13rem",
      "5xl": "1.5rem",
      lgi: "1.19rem",
      "9xl": "1.75rem",
      "3xl": "1.38rem",
      "28xl": "2.94rem",
      "19xl": "2.38rem",
      sm: "0.88rem",
      mini: "0.94rem",
      "29xl": "3rem",
      "10xl": "1.81rem",
      "13xl": "2rem",
      "7xl": "1.63rem",
      "11xl": "1.88rem",
      "15xl": "2.13rem",
      "8xl": "1.69rem",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
