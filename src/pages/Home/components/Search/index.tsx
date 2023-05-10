import { MagnifyingGlass } from "phosphor-react"
import { SubmitHandler, useForm } from "react-hook-form"
import { SearchButtonContainer, SearchFromContainer } from "./styles"
import { type FormQuery, QuerySchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransactions } from "~/context/transactions"

export function Search() {
	const { fetchTransactions } = useTransactions()

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<FormQuery>({
		resolver: zodResolver(QuerySchema),
		defaultValues: {
			query: "",
		},
	})

	const handleQuery: SubmitHandler<FormQuery> = async ({ query }) => {
		await fetchTransactions(query)
	}

	return (
		<SearchFromContainer onSubmit={handleSubmit(handleQuery)}>
			<input type="text" placeholder="Busque uma transação" {...register("query")} />
			<SearchButtonContainer type="submit" disabled={isSubmitting}>
				<MagnifyingGlass size={20} />
				<span>Buscar</span>
			</SearchButtonContainer>
		</SearchFromContainer>
	)
}
