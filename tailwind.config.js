// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/routes/**/*.{js,ts,jsx,tsx,scss,sass,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,scss,sass,css}",
    "./src/styles/**/*.{js,ts,jsx,tsx,scss,sass,css}",
  ],
  important: false,
  theme: {
    extend: {
      boxShadow: {
        strong: "0 25px 50px -12px rgb(0 0 0 / 1)",
        float: "0 0 50px -12px rgb(0 0 0 / 0.25)",
        glow: "0 0 1.2rem 0.15rem",
      },
      colors: {
        primary: {
          DEFAULT: "#9F2A2A",
          50: "#F8EBE4",
          100: "#F2D7CC",
          200: "#E5AC9C",
          300: "#D87B6C",
          400: "#CB463B",
          500: "#9F2A2A",
          600: "#83232A",
          700: "#661B26",
          800: "#3d101a",
          900: "#2E0C16",
          990: "#16060a",
        },
        text: {
          primary: "#ccc",
          secondary: "#948F9F",
          hover: "#fff",
        },
      },
    },
  },
  darkMode: true,
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".revert-tailwind-preflight": {
          "& blockquote,& dl,& dd,& h1,& h2,& h3,& h4,& h5,& h6,& hr,& figure,& p,& pre":
            {
              margin: "revert",
            },
          "& h1,& h2,& h3,& h4,& h5,& h6": {
            fontSize: "revert",
            fontWeight: "revert",
          },
          "& ol,& ul": {
            listStyle: "revert",
            margin: "revert",
            padding: "revert",
          },
          "& img,& svg,& video,& canvas,& audio,& iframe,& embed,& object": {
            display: "revert",
            verticalAlign: "revert",
          },
          "& *,& ::before,& ::after": {
            borderWidth: "revert",
            borderStyle: "revert",
            borderColor: "revert",
          },
          "& .google-map *": {
            borderStyle: "revert",
          },
          "& button:focus": {
            outline: "revert",
          },
        },
      });
    }),
    // eslint-disable-next-line no-undef
    require("tailwindcss-children"),
    // eslint-disable-next-line no-undef
    require("tailwindcss-rtl"),
  ],
};
