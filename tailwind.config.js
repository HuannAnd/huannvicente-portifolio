/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
      },
      colors: {
        darkPrimary: "#222",
        darkBg: "#444",
        lightBg: "#fff",
        lightPrimary: "#222",
      },
      textColor: {
        lightPrimary: "#222",
        lightSecondary: "#555",
        darkPrimary: "#fff",
        darkSecondary: "#ccc",
      },
      fontSize: {
        h1: "64px",
        subTitle: "48px",
        bold: "20px",
        body: "20px",
        small: "12px",
      },
    },
  },
  plugins: [],
};
