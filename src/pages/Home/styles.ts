import { styled } from "~/styles/theme/default"

export const TransactionsContainer = styled("main", {
	width: "100%",
	overflow: "auto",
	maxWidth: 1120,
	m: "4rem auto 0",
	p: "0 1.5rem",
})

export const TransactionsTable = styled("table", {
	width: "100%",
	borderCollapse: "separate",
	borderSpacing: "0 0.5rem",

	marginTop: "1.5rem",

	td: {
		background: "$gray-700",
		p: "1.25rem 2rem",

		"&:first-child": {
			borderTopLeftRadius: 6,
			borderBottomLeftRadius: 6,
		},
		"&:last-child": {
			borderTopRightRadius: 6,
			borderBottomRightRadius: 6,
		},
	},
})
export const PriceHighlight = styled("span", {
	variants: {
		color: {
			income: {
				color: "$green-300",
			},
			outcome: {
				color: "$red-300",
			},
		},
	},
})
