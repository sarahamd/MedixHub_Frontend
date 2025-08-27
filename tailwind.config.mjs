/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4200FF",
        title: "#404040",
        desc: "#A7A7A7",
        bgprimary: "#4200FF",
        borderprimary: "#4200FF",
      },
    },
  },
  plugins: [],
};
