import { db } from './db-index'
import { psicologo } from './schema'

export async function getPsi() {
	const result = await db
		.select({
			nome: psicologo.nome,
			login: psicologo.login,
		})
		.from(psicologo)

	console.log(result)
}

getPsi()
