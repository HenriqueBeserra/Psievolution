import { db } from '../../db/db-index'
import { pacientes } from '../../db/schema'
import type { IPacient } from '../../interfaces/Pacient'
import { eq } from 'drizzle-orm'

export async function getPacient() {
	try {
		const result = await db.select().from(pacientes)

		console.log(result)
		return result[0]
	} catch (error) {
		console.error(error)
		return { message: 'Erro ao buscar pacientes' }
	}
}

export async function getPacientByName({ nome }: IPacient) {
	try {
		const result = await db.select().from(pacientes).where(eq(pacientes.nome, nome))

		return result[0]
	} catch (error) {
		console.error(error)
		return { message: 'Erro ao buscar pacientes' }
	}
}

getPacient()
