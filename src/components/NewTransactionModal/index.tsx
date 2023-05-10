import * as Dialog from "@radix-ui/react-dialog"
import * as Styles from "./styles"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"
import { type NewTransactionSchemaType, NewTransactionSchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useTransactions } from "~/context/transactions"

export function NewTransactionModal() {
	const { appendTransaction } = useTransactions()

	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm<NewTransactionSchemaType>({
		resolver: zodResolver(NewTransactionSchema),
		defaultValues: {
			category: "",
			description: "",
			price: 0,
			type: "income",
		},
	})

	const handleCreateNewTransaction: SubmitHandler<NewTransactionSchemaType> = async (props) => {
		console.log(props)
		await appendTransaction(props)
		reset()
	}

	return (
		<Dialog.Portal>
			<Styles.Overlay />
			<Styles.Content>
				<Dialog.Title>Nova transação </Dialog.Title>
				<Styles.CloseButton>
					<X size={20} />
				</Styles.CloseButton>
				<Styles.FormModalContainer onSubmit={handleSubmit(handleCreateNewTransaction)}>
					<input type="text" placeholder="Descrição" required {...register("description")} />
					<input
						type="number"
						placeholder="Preço"
						required
						{...register("price", { valueAsNumber: true })}
					/>
					<input type="text" placeholder="Categoria" required {...register("category")} />

					<Controller
						control={control}
						name="type"
						render={({ field }) => (
							<Styles.NewTransactionType
								defaultValue={field.value}
								onBlur={field.onBlur}
								ref={field.ref}
								onValueChange={field.onChange}
							>
								<Styles.TransactionActionButton value="income" color="income">
									<ArrowCircleUp size={24} />
									<span>Entrada</span>
								</Styles.TransactionActionButton>
								<Styles.TransactionActionButton value="outcome" color="outcome">
									<ArrowCircleDown size={24} />
									<span>Saída</span>
								</Styles.TransactionActionButton>
							</Styles.NewTransactionType>
						)}
					/>

					<Styles.CreateNewTransactionButton type="submit" disabled={isSubmitting}>
						Cadastrar
					</Styles.CreateNewTransactionButton>
				</Styles.FormModalContainer>
			</Styles.Content>
		</Dialog.Portal>
	)
}
