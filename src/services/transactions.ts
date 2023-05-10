import { api } from "~/lib/api"

export interface ITransactionProps {
	id: number
	description: string
	type: "income" | "outcome"
	category: string
	price: number
	createdAt: string
}
export interface TransactionInput {
	description: string
	type: "income" | "outcome"
	category: string
	price: number
}

export const getTransactions = async (query?: string) => {
	const options = {
		params: {
			q: query,
			_sort: "createdAt",
			_order: "desc",
		},
	}

	const response = await api.get<ITransactionProps[]>("transactions", options)

	return response.data
}

export const createNewTransaction = async (body: TransactionInput) => {
	const response = await api.post<ITransactionProps>("transactions", {
		...body,
		createdAt: new Date(),
	})
	return response.data
}
