import { db } from '../../db/db-index'
import { atendimentos } from '../../db/schema'
import { eq } from 'drizzle-orm'

export async function deletAtendimento(id: string) {
	try {
		const result = await db
			.delete(atendimentos)
			.where(eq(atendimentos.userId, id))
			.returning()

		if (result.length === 0) {
			return { message: 'Atendimento não encontrado' }
		}

		return { message: 'Atendimento deletado com sucesso', paciente: result[0] }
	} catch (error) {
		console.error('Erro ao deletar Atendimento:', error)
		return { message: 'Falha ao deletar Atendimento', error }
	}
}
