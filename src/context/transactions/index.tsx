import { useEffect, useState, useCallback } from "react"
import { createContext, useContext } from "use-context-selector"
import {
	createNewTransaction,
	getTransactions,
	ITransactionProps,
	TransactionInput,
} from "~/services/transactions"
import type { TransactionContextProps, TransactionProviderProps } from "./types"

const TransactionContext = createContext({} as TransactionContextProps)

export const useTransactions = () => useContext(TransactionContext)

export function TransactionProvider({ children }: TransactionProviderProps) {
	const [transactions, setTransactions] = useState<ITransactionProps[]>([])

	const fetchTransactions = useCallback(async (query?: string) => {
		const transactions = await getTransactions(query)
		setTransactions(transactions)
	}, [])

	const appendTransaction = useCallback(async (transaction: TransactionInput) => {
		const createdTransaction = await createNewTransaction(transaction)
		setTransactions((state) => [createdTransaction, ...state])
	}, [])

	useEffect(() => {
		fetchTransactions()
	}, [])

	const transactionProps = {
		transactions,
		fetchTransactions,
		appendTransaction,
	}
	return (
		<TransactionContext.Provider value={transactionProps}>{children}</TransactionContext.Provider>
	)
}
