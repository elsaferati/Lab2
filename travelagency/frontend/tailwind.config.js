/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensure you include all relevant file types
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'), // Make sure the plugin is correctly added here
  ],
};
