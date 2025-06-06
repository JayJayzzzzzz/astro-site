/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    fontFamily: { sans: ["Inter"] },
    extend: {},
  },
  plugins: [],
};
