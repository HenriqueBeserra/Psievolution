// import { db } from '../../db/db-index';
import { dbOnlineForDevelopment } from '../../dbOnline/db-online-index';
import { pacientes } from '../../db/schema';
import { eq } from 'drizzle-orm';
import type { IPacient } from '../../../service-paciente/interface/Pacient';

export async function updatePacient(id: string, data: Partial<IPacient>) {
	try {
		//Filtragem dos campos undefined, para não precisar passar todos os campos e sim só os que vão ser alterados
		const updates = Object.fromEntries(
			Object.entries(data).filter((_, value) => ( value !== undefined)),
		);
		console.log(`Updates = ${updates}`)
		if (Object.keys(updates).length === 0) {
			return { Message: 'Nenhum dado para ser alterado' };
		}

		//Fazendo o update
		const result = await dbOnlineForDevelopment
			.update(pacientes)
			.set(updates)
			.where(eq(pacientes.id, id))
			.returning();
		return result[0];
	} catch (erro) {
		console.error(erro);
		return erro;
	}
}

// updatePacient('wp695uo88jm2r1zu6rpkgszb', { idade: 26 })
