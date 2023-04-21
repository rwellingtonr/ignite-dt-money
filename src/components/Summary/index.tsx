import { SummaryCard, SummaryContainer } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"

export function Summary() {
	return (
		<SummaryContainer>
			<SummaryCard color="gray">
				<header>
					<span>Entradas</span>
					<ArrowCircleUp size={32} color={"#00B37E"} />
				</header>
				<strong>R$ 17.400,00</strong>
			</SummaryCard>
			<SummaryCard color="gray">
				<header>
					<span>Saídas</span>
					<ArrowCircleDown size={32} color={"#F75A68"} />
				</header>
				<strong>R$ 17.400,00</strong>
			</SummaryCard>
			<SummaryCard color="green">
				<header>
					<span>Total</span>
					<CurrencyDollar size={32} color={"#FFFFFF"} />
				</header>
				<strong>R$ 17.400,00</strong>
			</SummaryCard>
		</SummaryContainer>
	)
}
