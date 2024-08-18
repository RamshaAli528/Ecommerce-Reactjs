/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
     'gradient' : "linear-gradient(135deg, #111c30, #4a5a5f, #80756b, #9a4d55)",

    },
    aspectRatio: {
      '4/3': '4 / 3',
    },
    colors: {
      transparent: 'transparent',
      'Purple': "#111c30",
      'gray' : "#4a5a5f",
      'Pink' : "#9a4d55",
      'Beige': "#80756b",
      'Cream': "#f5f5f5",
    },
  },
  plugins: [],
}

