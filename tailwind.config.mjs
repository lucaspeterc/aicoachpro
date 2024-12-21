/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGreen: '#aecc53',
        darkGreen: '#76b82a',
        lightGray: '#1f2837',
        darkGray: '#11171f',
      },
    },
  },
  plugins: [],
};

