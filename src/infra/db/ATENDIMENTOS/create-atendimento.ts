import { db } from '../../db/db-index'
import { atendimentos } from '../../db/schema'
import type { IAtendimento } from '../../../application_use-cases/interfaces/Atendimento'

export async function createAtendimento({
	data_atendimento,
	horario,
	status,
	userId,
}: IAtendimento) {
	try {
		const result = await db
			.insert(atendimentos)
			.values([
				{
					data_atendimento,
					horario,
					status,
					userId,
				},
			])
			.returning()

		return result[0]
	} catch (erro) {
		console.error('Falha ao criar Atendimento', erro)
		return { Message: 'Falha ao criar Atendimento', erro }
	}
}

// createAtendimento({
// 	nome:'Nivanildo Henrique Beserra da silva',
// 	idade: 25,
// 	email: 'beserrahnrq@gmail.com',
// 	whats:'81995562223'
// })
