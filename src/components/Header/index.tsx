import dtMoneyLogo from "~/assets/logo.svg"
import { Button } from "../Button"
import { NewTransactionModal } from "../NewTransactionModal"
import * as Dialog from "@radix-ui/react-dialog"
import * as Styles from "./styles"

export function Header() {
	return (
		<Styles.HeaderContainer>
			<Styles.ContentHeaderContainer>
				<img
					src={dtMoneyLogo}
					alt="Dois triângulos verdes ligeiramente sobrepostos a um ângulo de 45deg com uma frase ao lado escrita DT Money"
				/>

				<Dialog.Root>
					<Dialog.Trigger asChild>
						<Button>Nova transação</Button>
					</Dialog.Trigger>

					<NewTransactionModal />
				</Dialog.Root>
			</Styles.ContentHeaderContainer>
		</Styles.HeaderContainer>
	)
}
