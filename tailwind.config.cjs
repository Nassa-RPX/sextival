// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sex-blue": {
          0: "#F2F0F9",
          2: "#9492F8",
          4: "#6133FB",
          6: "#3C1FAB",
          8: "#231277",
          DEFAULT: "#231277",
        },

        "sex-red": {
          0: "#F8E8EA",
          2: "#FA8181",
          4: "#E85D6C",
          6: "#CE4D64",
          8: "#9E3B5D",
          DEFAULT: "#E85D6C",
        },

        "2022-sex-red": {
          0: "#FBE9EC",
          2: "#F3BEC7",
          4: "#DF566B",
          6: "#DC3B49",
          8: "#92353A",
        },

        "2022-sex-blue": "#090346",
      },
      backgroundImage: {
        "sex-gradient":
          "linear-gradient(180deg, #2B2659 0%, #DF566B 65.1%, #DC3B49 100%)",
        "sex-gradient-sm": "linear-gradient(180deg, #2B2659 0%, #DF566B 100%)",
        // "sex-gradient-text":
        // "linear-gradient(91.32deg, #2B2659 -7.54%, #DF566B 58.82%, #DC3B49 121.47%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        "sex-gradient-text":
          "linear-gradient(290deg, hsl(359deg 87% 79%) 0%, hsl(351deg 78% 77%) 3%, hsl(344deg 68% 74%) 8%, hsl(336deg 58% 71%) 14%, hsl(319deg 56% 64%) 22%, hsl(293deg 52% 58%) 33%, hsl(262deg 73% 62%) 48%, hsl(260deg 65% 54%) 66%, hsl(258deg 67% 47%) 85%, hsl(256deg 90% 39%) 100%); ",
      },
      fontFamily: {
        main: "Poppins, sans-serif",
        handwriting: "'Dancing Script', cursive",
      },
      boxShadow: {
        sex: "0px 4px 4px rgba(245, 0, 44, 0.06)",
      },

      fontSize: {},
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-last", "&:not(:last-child)");
    }),
  ],
};
