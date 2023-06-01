/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{png,jpg}'
	],
  theme: {
    extend: {
			spacing: {
				'cienvh': '120vh',
			}
		},
  },
  plugins: [],
}

