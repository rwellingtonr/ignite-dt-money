import * as Dialog from "@radix-ui/react-dialog"
import * as Styles from "./styles"

import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"

export function NewTransactionModal() {
	return (
		<Dialog.Portal>
			<Styles.Overlay />
			<Styles.Content>
				<Dialog.Title>Nova transação </Dialog.Title>
				<Styles.CloseButton>
					<X size={20} />
				</Styles.CloseButton>
				<Styles.FormModalContainer>
					<input type="text" placeholder="Descrição" required />
					<input type="text" placeholder="Preço" required />
					<input type="text" placeholder="Categoria" required />
					<Styles.NewTransactionType>
						<Styles.TransactionActionButton value="income" color="income">
							<ArrowCircleUp size={24} />
							<span>Entrada</span>
						</Styles.TransactionActionButton>
						<Styles.TransactionActionButton value="outcome" color="outcome">
							<ArrowCircleDown size={24} />
							<span>Saída</span>
						</Styles.TransactionActionButton>
					</Styles.NewTransactionType>

					<Styles.CreateNewTransactionButton type="submit">
						Cadastrar
					</Styles.CreateNewTransactionButton>
				</Styles.FormModalContainer>
			</Styles.Content>
		</Dialog.Portal>
	)
}
