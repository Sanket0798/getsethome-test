/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-purple-1": "#3023ae",
        "gradient-purple-2": "#6332b8",
        "gradient-purple-3": "#8944c2",
        "gradient-purple-4": "#aa57cc",
        "gradient-purple-5": "#c86dd7",
      },
      backgroundImage: {
        hero: "url('/assets/HomePage/HeroSection/Background.png')",
      },
      spacing: {
        1200: "1200px",
      },
    },
  },
  plugins: [],
};
