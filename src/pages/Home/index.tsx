import { Header } from "~/components/Header"
import { Summary } from "~/components/Summary"
import { useTransactions } from "~/context/transactions"
import { dateFormatter, priceFormatter } from "~/utils/formatter"
import { Search } from "./components/Search"
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles"

export function Home() {
	const { transactions } = useTransactions()

	return (
		<>
			<Header />
			<Summary />

			<TransactionsContainer>
				<Search />
				<TransactionsTable>
					<tbody>
						{transactions.map((transaction) => (
							<tr key={transaction.id}>
								<td style={{ width: "50%" }}>{transaction.description}</td>
								<td>
									<PriceHighlight color={transaction.type}>
										{transaction.type === "outcome" && "- "}
										{priceFormatter.format(transaction.price)}
									</PriceHighlight>
								</td>
								<td>{transaction.category}</td>
								<td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
							</tr>
						))}
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</>
	)
}
