import { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonContainer } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	size?: "sm" | "md" | "lg"
}

export function Button({ size = "md", children, ...props }: ButtonProps) {
	return (
		<ButtonContainer {...props} size={size}>
			{children}
		</ButtonContainer>
	)
}
