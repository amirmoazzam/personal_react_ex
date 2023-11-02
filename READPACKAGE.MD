npm install -D tailwindcss
npx tailwindcss init

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

@tailwind base;
@tailwind components;
@tailwind utilities;

<!-- ----------------------------------------- -->
npm add react-icons
npm install react-scroll