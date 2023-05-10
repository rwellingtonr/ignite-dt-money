import { ReactNode } from "react"
import { ITransactionProps, TransactionInput } from "~/services/transactions"

export type TransactionContextProps = {
	transactions: ITransactionProps[]
	fetchTransactions: (query?: string) => Promise<void>
	appendTransaction: (transaction: TransactionInput) => Promise<void>
}

export type TransactionProviderProps = {
	children: ReactNode
}
