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
			},
			animation: {
				'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				fall: 'fall 2s',
			},
			keyframes: {
      	fall: {
          '0%': { position: 'relative', top: "-500px" },
          '100%': { position: 'relative', top: "0px" },
        }
      }
		},
  },
  plugins: [],
}

