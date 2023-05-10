import { TransactionProvider } from "./context/transactions"
import { Home } from "./pages/Home"
import { globalStyles } from "./styles/global"

export function App() {
	globalStyles()

	return (
		<TransactionProvider>
			<Home />
		</TransactionProvider>
	)
}
