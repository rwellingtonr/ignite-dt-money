import { styled } from "~/styles/theme/default"

export const SummaryContainer = styled("section", {
	width: "100%",
	maxWidth: 1120,
	m: "0 auto",
	p: "0 1.5rem",
	overflow: "auto",

	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gap: "2rem",

	marginTop: "-5rem",
})
export const SummaryCard = styled("div", {
	borderRadius: 6,
	p: "2rem",

	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		color: "$gray-300",
	},

	strong: {
		display: "block",
		marginTop: "1rem",
		fontSize: "2rem",
	},

	variants: {
		color: {
			gray: {
				background: "$gray-600",
			},
			green: {
				background: "$green-700",
			},
		},
	},
})
