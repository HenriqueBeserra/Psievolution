import { db } from '../db-index'
import { pacientes } from '../schema'
import type { IPacient } from '../../interfaces/Pacient'

export async function createPacient({
	nome,
	idade,
	email,
	whats,
	nome_responsavel,
	contato_responsavel,
}: IPacient) {
	try {
		const result = await db
			.insert(pacientes)
			.values([
				{
					nome,
					idade,
					email,
					whats,
					nome_responsavel,
					contato_responsavel,
				},
			])
			.returning()

		return result[0]
	} catch (erro) {
		console.error('Falha ao criar paciente', erro)
		return { Message: 'Falha ao criar paciente', erro }
	}
}

createPacient({
	nome: 'Nivanildo Henrique Beserra da silva',
	idade: 25,
	email: 'beserrahnrq@gmail.com',
	whats: '81995562223',
})
