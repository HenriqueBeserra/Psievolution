import {z} from 'zod'

export const DeleteEvolutionSchema = z.object({
    id: z.string(),
    descricao: z.string(),
    itemToUpdate: z.string().or(z.undefined())
})