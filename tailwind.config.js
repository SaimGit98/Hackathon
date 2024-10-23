/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      colors: {
        customGreen: '#b5c99a',  
        customWhite : '#fefae0',
        customBlack : '#353535',
        customYellowGreen : "#ccff33",
      },
    },
  },
  plugins: [],
};
