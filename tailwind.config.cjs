// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sex-gradient":
          "linear-gradient(180deg, #2B2659 0%, #DF566B 65.1%, #DC3B49 100%)",
        "sex-gradient-sm": "linear-gradient(180deg, #2B2659 0%, #DF566B 100%)",
      },
      fontFamily: {
        main: "Poppins, sans-serif",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-last", "&:not(:last-child)");
    }),
  ],
};
