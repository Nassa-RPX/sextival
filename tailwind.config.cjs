// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sex-blue": "#090346",
        "sex-dblue": "#0C082B",
        "sex-red-0": "#FBE9EC",
        "sex-red-2": "#F3BEC7",
        "sex-red-4": "#DF566B",
        "sex-red-6": "#DC3B49",
        "sex-red-8": "#92353A",
      },
      backgroundImage: {
        "sex-gradient":
          "linear-gradient(180deg, #2B2659 0%, #DF566B 65.1%, #DC3B49 100%)",
        "sex-gradient-sm": "linear-gradient(180deg, #2B2659 0%, #DF566B 100%)",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        main: "Poppins, sans-serif",
      },
      boxShadow: {
        sex: "0px 4px 4px rgba(245, 0, 44, 0.06)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-last", "&:not(:last-child)");
    }),
  ],
};
