/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sex-gradient":
          "linear-gradient(180deg, #2B2659 0%, #DF566B 65.1%, #DC3B49 100%)",
      },
      fontFamily: {
        main: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
