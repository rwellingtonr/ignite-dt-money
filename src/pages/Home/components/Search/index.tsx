import { MagnifyingGlass } from "phosphor-react"
import { SearchButtonContainer, SearchFromContainer } from "./styles"

// type SearchProps = {}

export function Search() {
	return (
		<SearchFromContainer>
			<input type="text" placeholder="Busque uma transação" />
			<SearchButtonContainer type="submit">
				<MagnifyingGlass size={20} />
				<span>Buscar</span>
			</SearchButtonContainer>
		</SearchFromContainer>
	)
}
