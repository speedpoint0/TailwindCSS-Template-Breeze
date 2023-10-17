module.exports = {
	content: [
		"./pages/**/*.vue",
		"./components/**/*.vue", // Make sure to include the components directory
		"./assets/*.css", // Include the CSS files in the assets directory
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Sulphur Point", "sans-serif"],
				gabarito: ["Gabarito", "sans-serif"],
			},
		},
	},
};
