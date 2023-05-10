import { useTransactions } from "~/context/transactions"

export function useSummary() {
	const { transactions } = useTransactions()
	const summaryInitialState = {
		income: 0,
		outcome: 0,
		total: 0,
	}
	const summary = transactions?.reduce((acc, transaction) => {
		if (transaction.type === "income") {
			acc.income += transaction.price
			acc.total += transaction.price
			return acc
		}
		acc.outcome += transaction.price
		acc.total -= transaction.price

		return acc
	}, summaryInitialState)

	return {
		summary,
	}
}
