import { db } from '../../db/db-index'
import { evolucao } from '../../db/schema'
import type { IEvolucao } from '../../interfaces/Evolucao'

export async function createEvolucao({
	nome,
	descricao,
	data_criacao,
	userId,
}: IEvolucao) {
	try {
		const result = await db
			.insert(evolucao)
			.values([
				{
					nome,
					descricao,
					data_criacao,
					userId,
				},
			])
			.returning()

		return result[0]
	} catch (erro) {
		console.error('Falha ao criar Evolução', erro)
		return { Message: 'Falha ao criar Evolução', erro }
	}
}

// createPacient({
// 	nome:'Nivanildo Henrique Beserra da silva',
// 	idade: 25,
// 	email: 'beserrahnrq@gmail.com',
// 	whats:'81995562223'
// })
