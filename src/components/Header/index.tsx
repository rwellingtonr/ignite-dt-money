import dtMoneyLogo from "~/assets/logo.svg"
import { Button } from "../Button"
import * as Styles from "./styles"

export function Header() {
	return (
		<Styles.HeaderContainer>
			<Styles.ContentHeaderContainer>
				<img
					src={dtMoneyLogo}
					alt="Dois triângulos verdes ligeiramente sobrepostos a um ângulo de 45deg com uma frase ao lado escrita DT Money"
				/>
				<Button>Nova transação</Button>
			</Styles.ContentHeaderContainer>
		</Styles.HeaderContainer>
	)
}
