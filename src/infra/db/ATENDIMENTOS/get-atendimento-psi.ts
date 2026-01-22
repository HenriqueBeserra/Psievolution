import { db } from '../../db/db-index'
import { atendimentos } from '../../db/schema'
import { eq } from 'drizzle-orm'

export async function getAtendimento(userId: string) {
	try {
		const result = await db
			.select()
			.from(atendimentos)
			.where(eq(atendimentos.userId, userId))

		console.log(result)
		return result[0]
	} catch (error) {
		console.error(error)
		return { message: 'Erro ao buscar atendimentos' }
	}
}

// getPacient()
