/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include the src folder if you're using it
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Include pages folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include components folder
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#7743e6",
        purple1: "#4e53a2",
        purple2: "#4f54a5",
        purple3: "#4F46E5",
        accentRed: "#ec5454",
        offWhite1: "#fafafa",
        offWhite2: "#eef2ff",
        offWhite3: "#f3f2f1",
        gray0: "#b7b3b3",
        gray1: "#a1a1a5",
        gray2: "#a3a3a3",
        gray3: "#5e6366",
        gray4: "#777e99",
        gray5: "#3C3C4399",
        darkGray1: "#090A0A",
      },
    },
  },
  plugins: [],
} 
