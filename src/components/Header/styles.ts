import { styled } from "~/styles/theme/default"

export const HeaderContainer = styled("header", {
	background: "$gray-900",
	p: "2.5rem 0 7.5rem",
})

export const ContentHeaderContainer = styled("div", {
	width: "100%",
	maxWidth: 1120,
	m: "0 auto",
	p: "0 1.5rem",

	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
})
