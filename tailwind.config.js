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
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
