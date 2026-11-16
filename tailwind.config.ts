import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#192832',
        'accent-red': '#e96752',
        'light-bg': '#f4f6f5',
        'text-gray': '#61717a',
      },
      fontFamily: {
        'ubuntu': ['Manrope', 'sans-serif'],
        'martel': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
