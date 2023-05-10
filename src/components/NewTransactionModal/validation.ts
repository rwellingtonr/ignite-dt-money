import { z } from "zod"

export const NewTransactionSchema = z.object({
	description: z.string(),
	price: z.number(),
	type: z.enum(["income", "outcome"]),
	category: z.string(),
})

export type NewTransactionSchemaType = z.infer<typeof NewTransactionSchema>
