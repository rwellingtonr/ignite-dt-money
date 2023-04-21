import { styled, theme } from "~/styles/theme/default"

export const ButtonContainer = styled("button", {
	backgroundColor: "$green-500",
	color: "#ffff",
	borderRadius: 6,
	fontWeight: theme.fontWeights.bold,

	"&:hover": {
		backgroundColor: "$green-300",
		transition: "backgroundColor .2s ease-in",
	},

	variants: {
		size: {
			sm: {
				p: "0.5rem 1rem",
				fontSize: "0.875rem",
			},
			md: {
				p: "0.75rem 1.25rem",
				fontSize: "1rem",
			},
			lg: {
				p: "1rem 2rem",
				fontSize: "1rem",
			},
		},
	},
})
