import * as Dialog from "@radix-ui/react-dialog"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { styled } from "~/styles/theme/default"

export const Overlay = styled(Dialog.Overlay, {
	position: "fixed",
	inset: 0,
	widows: "100vw",
	height: "100vh",
	background: "rgba(0,0,0,.75)",
})

export const CloseButton = styled(Dialog.Close, {
	position: "absolute",
	background: "transparent",
	border: 0,
	top: "1.5rem",
	right: "1.5rem",
	lineHeight: 0,
	cursor: "pointer",
	color: "$gray-500",
})

export const Content = styled(Dialog.Content, {
	minWidth: "32rem",
	borderRadius: 6,
	p: "2.5rem 3rem",
	background: "$gray-800",
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
})

export const FormModalContainer = styled("form", {
	marginTop: "2rem",
	display: "flex",
	gap: "1rem",
	flexDirection: "column",

	input: {
		borderRadius: 6,
		color: "$gray-300",
		border: 0,
		p: "1rem",
		backgroundColor: "$gray-900",

		"&::placeholder": {
			color: "$gray-500",
		},
	},
})

export const NewTransactionType = styled(RadioGroup.Root, {
	display: "grid",
	grid: "auto-flow / 1fr 1fr",
	gap: "1rem",
	marginTop: ".5rem",
})

export const TransactionActionButton = styled(RadioGroup.Item, {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	p: "1rem 1.5rem",
	gap: ".5rem",
	background: "$gray-700",
	borderRadius: 6,

	span: {
		color: "$gray-300",
		fontWeight: "$bold",
	},

	"&:hover": {
		background: "$gray-600",
		transition: "all .2s easy-in",
	},

	"&[data-state='checked']": {
		"*": {
			color: "$gray-100",
			transition: "all .1s easy-in",
		},
	},

	variants: {
		color: {
			income: {
				svg: {
					color: "$green-300",
				},

				"&[data-state='checked']": {
					background: "$green-700",
					transition: "all .1s easy-in",
				},
			},
			outcome: {
				svg: {
					color: "$red-300",
				},
				"&[data-state='checked']": {
					background: "$red-700",
					transition: "all .1s easy-in",
				},
			},
		},
	},
})

export const CreateNewTransactionButton = styled("button", {
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "0.75rem",
	background: "$green-500",
	borderRadius: 6,
	color: "#ffff",
	fontWeight: "$bold",

	p: "1rem 2rem",
	marginTop: "1.5rem",

	"&:hover": {
		background: "$green-700",
		transition: "background .2s easy-in",
	},
})
