import { z } from "zod"

export const QuerySchema = z.object({
	query: z.string(),
})

export type FormQuery = z.infer<typeof QuerySchema>
