/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,txs}"
  ],
  theme: {
    extend: {
		fontFamily: {
			'overpass': ['Overpass', 'sans-serif']
		}
	},
  },
  plugins: [],
}
