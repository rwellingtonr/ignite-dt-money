import { createStitches } from "@stitches/react"

export const { styled, theme } = createStitches({
	utils: {
		p: (value: string) => ({
			padding: value,
		}),
		py: (value: string) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
		px: (value: string) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		m: (value: string) => ({
			margin: value,
		}),
		mx: (value: string) => ({
			marginLeft: value,
			marginRight: value,
		}),
		my: (value: string) => ({
			marginTop: value,
			marginBottom: value,
		}),
	},
	media: {
		bp: "(max-width: 768px)",
	},
	theme: {
		fonts: {
			inter: "'Inter', sans-serif;",
		},
		fontWeights: {
			normal: 400,
			bold: 700,
		},
		colors: {
			"gray-100": "#E1E1E6",
			"gray-300": "#C4C4CC",
			"gray-400": "#8D8D99",
			"gray-500": "#7C7C8A",
			"gray-600": "#323238",
			"gray-700": "#29292E",
			"gray-800": "#202024",
			"gray-900": "#121214",

			"green-300": "#00B37E",
			"green-500": "#00875F",
			"green-700": "#015F43",

			"red-300": "#F75A68",
			"red-500": "#AB222E",
			"red-700": "#7A1921",
		},
	},
})
