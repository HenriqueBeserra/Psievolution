//import { db } from '../../db/db-index'
import { dbOnlineForDevelopment } from '../../dbOnline/db-online-index'
import { pacientes } from '../../db/schema'
import { eq } from 'drizzle-orm'

export async function deletePacient(id: string) {
	try {
		const result = await dbOnlineForDevelopment.delete(pacientes).where(eq(pacientes.id, id)).returning()

		if (result.length === 0) {
			return { message: 'Paciente não encontrado' }
		}

		return { message: 'Paciente deletado com sucesso', paciente: result[0] }
	} catch (error) {
		console.error('Erro ao deletar paciente:', error)
		return { message: 'Falha ao deletar paciente', error }
	}
}
