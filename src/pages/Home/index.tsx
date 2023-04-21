import { Header } from "~/components/Header"
import { Summary } from "~/components/Summary"
import { Search } from "./components/Search"
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles"

export function Home() {
	return (
		<>
			<Header />
			<Summary />

			<TransactionsContainer>
				<Search />
				<TransactionsTable>
					<tbody>
						<tr>
							<td style={{ width: "50%" }}>Desenvolvimento de site</td>
							<td>
								<PriceHighlight color="income">R$ 12.000,00</PriceHighlight>
							</td>
							<td>Venda</td>
							<td>13/04/2022</td>
						</tr>
						<tr>
							<td style={{ width: "50%" }}>Desenvolvimento de site</td>
							<td>
								<PriceHighlight color="outcome">- R$12.000,00</PriceHighlight>
							</td>
							<td>Venda</td>
							<td>13/04/2022</td>
						</tr>
						<tr>
							<td style={{ width: "50%" }}>Desenvolvimento de site</td>
							<td>
								<PriceHighlight color="income">R$12.000,00</PriceHighlight>
							</td>
							<td>Venda</td>
							<td>13/04/2022</td>
						</tr>
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</>
	)
}
