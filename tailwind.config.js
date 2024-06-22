/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-blue": 'rgba(87, 144, 190, 0.12)',
      },
      backgroundImage: {
        "hero-page": "url('/images/heropage.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
