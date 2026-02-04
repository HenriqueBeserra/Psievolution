/** biome-ignore-all assist/source/organizeImports: <rule not important> */
import { db } from '../../db/db-index';
import { pacientes } from '../../db/schema';
import type { IPacient } from '../../../service-paciente/interface/Pacient'
import { eq } from 'drizzle-orm';

export async function getPacient() {
	try {
		const result = await db.select().from(pacientes);
		console.log(result);
		return { success: true, result: result };
	} catch (error) {
		console.error(error);
		return { success: false, message: 'Erro ao buscar pacientes' };
	}
}

export async function getPacientByName({ nome }: IPacient) {
	try {
		const result = await db.select().from(pacientes).where(eq(pacientes.nome, nome));
		if(result.length === 0){
			return {success: false,  message: 'Nenhum paciente encontrado' };
		}
		return {success: true,  message: result};
	} catch (error) {
		console.error(error);
		return {success: false,  message: 'Erro ao buscar pacientes' };
	}
}


