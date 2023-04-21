import { globalCss } from "@stitches/react"
import { theme } from "./theme/default"

export const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale",
	},
	body: {
		background: theme.colors["gray-800"],
		color: "$gray-100",
	},

	"body, input, textarea, button, span": {
		font: `${theme.fontWeights.normal} 1rem/1.6 ${theme.fonts.inter}`,
	},

	button: {
		cursor: "pointer",
		border: "none",
	},

	":focus": {
		outline: 0,
		boxShadow: "0 0 0 2px $gray-500",
	},
})
