/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/shadcn/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'misty-rose':'#FEE9E1',
      'rosy-brown':'#BC8F8F',
      'pale-gold':'#E6BE8A',
      
        
        // Custom color name without spaces
      },
    },
  },
  plugins: [],
}

