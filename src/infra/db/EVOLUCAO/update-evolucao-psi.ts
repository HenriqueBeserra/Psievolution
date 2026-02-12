import { db } from '../db-index'
import { evolucao } from '../schema'
import { eq } from 'drizzle-orm'
import type { IEvolucao } from '../../../service-evolução/interface/Evolucao'

export async function updateEvolucao(id: string, data: Partial<IEvolucao>) {
	try {
		//Filtragem dos campos undefined, para não precisar passar todos os campos e sim só os que vão ser alterados
		const updates = Object.fromEntries(
			Object.entries(data).filter((_, value) => value !== undefined),
		)
		if (Object.keys(updates).length === 0) {
			return { Message: 'Nenhum dado para ser alterado' }
		}

		//Fazendo o update
		const result = await db.update(evolucao).set(updates).where(eq(evolucao.id, id)).returning()
		return result[0]
	} catch (erro) {
		console.error(erro)
		return erro
	}
}

// updatePacient('wp695uo88jm2r1zu6rpkgszb', { idade: 26 })
