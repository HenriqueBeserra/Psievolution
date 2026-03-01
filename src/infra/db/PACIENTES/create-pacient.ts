/** biome-ignore-all assist/source/organizeImports: <rule not important> */
//import { db } from '../db-index';
import { dbOnlineForDevelopment } from '../../dbOnline/db-online-index';
import { pacientes } from '../schema';
import type { IPacient } from '../../../service-paciente/interface/Pacient';

export async function createPacient({
	nome,
	idade,
	email,
	whats,
	nome_responsavel,
	contato_responsavel,
}: IPacient) {
	try {
		const result = await dbOnlineForDevelopment
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
			.returning();

		return {
			success: true,
			message: 'Paciente criado',
			status: '201',
			data: result[0],
		};
	} catch (erro) {
		return { Message: 'Falha ao criar paciente', erro };
	}
}

// createPacient({
// 	nome: 'Nivanildo Henrique Beserra da silva',
// 	idade: 25,
// 	email: 'beserrahnrq@gmail.com',
// 	whats: '81995562223',
// });
