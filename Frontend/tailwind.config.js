/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite-react/tailwind'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    flowbitePlugin.content()
  ],
  theme: {
    extend: {
      colors: {
        'green-400': '#75BF7A',
        'green-100': '#e2ffed'
      },
    },
  },

  plugins: [
    flowbitePlugin.plugin()

  ],
}

