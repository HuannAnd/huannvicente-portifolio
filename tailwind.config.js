/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: { min: "648px" },
        sm: { min: "1px", max: "647px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
      },
      spacing: {
        "@section": "var(--section-padding)",
        "@container": "var(--container-padding)",
        "@gap": "var(--gap-padding)"
      },
      colors: {
        darkPrimary: "#000",
        darkBg: "#444",
        lightBg: "#fff",
        lightPrimary: "#222",
      },
      textColor: {
        lightPrimary: "#222",
        "@secondary": "#888",
        lightSecondary: "#555",
        darkPrimary: "#fff",
        darkSecondary: "#bbb",
      },
      maxWidth: {
        "@content": "var(--content-width)"
      },
      fontSize: {
        h1: "64px",
        "@subtitle": "clamp(1.5625rem, 3vw, 3rem)",
        bold: "20px",
        body: "20px",
        small: "12px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.45, 0, 0.55, 1)",
        fast: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
