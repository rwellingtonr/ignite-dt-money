import { SummaryCard, SummaryContainer } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { priceFormatter } from "~/utils/formatter"
import { useSummary } from "~/hooks/useSummary"

export function Summary() {
	const { summary } = useSummary()

	return (
		<SummaryContainer>
			<SummaryCard color="gray">
				<header>
					<span>Entradas</span>
					<ArrowCircleUp size={32} color={"#00B37E"} />
				</header>
				<strong>{priceFormatter.format(summary.income)}</strong>
			</SummaryCard>
			<SummaryCard color="gray">
				<header>
					<span>Saídas</span>
					<ArrowCircleDown size={32} color={"#F75A68"} />
				</header>
				<strong>{priceFormatter.format(summary.outcome)}</strong>
			</SummaryCard>
			<SummaryCard color="green">
				<header>
					<span>Total</span>
					<CurrencyDollar size={32} color={"#FFFFFF"} />
				</header>
				<strong>{priceFormatter.format(summary.total)}</strong>
			</SummaryCard>
		</SummaryContainer>
	)
}
