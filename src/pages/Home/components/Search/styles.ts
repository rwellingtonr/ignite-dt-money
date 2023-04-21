import { styled } from "~/styles/theme/default"

export const SearchFromContainer = styled("form", {
	display: "flex",
	gap: "1rem",

	input: {
		flex: 1,
		borderRadius: 6,
		border: 0,
		background: "$gray-900",
		color: "$gray-300",
		padding: "1rem",

		"&::placeholder": {
			color: "$gray-500",
		},
	},
})

export const SearchButtonContainer = styled("button", {
	display: "flex",
	alignItems: "center",
	gap: "0.75rem",

	p: "1rem",

	background: "transparent",
	border: "1px solid $green-300",
	borderRadius: 6,
	color: "$green-300",

	span: {
		fontWeight: "$bold",
	},

	"&:hover": {
		background: "$green-500",
		border: "1px solid $green-500",
		color: "#fff",
		transition: "all 0.2s easy-in",
	},
})
