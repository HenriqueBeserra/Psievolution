/** biome-ignore-all assist/source/organizeImports: <rule not important> */
//import { db } from '../../db/db-index';
import { dbOnlineForDevelopment } from '../../dbOnline/db-online-index';
import { pacientes } from '../../db/schema';
import { eq } from 'drizzle-orm';

export async function getPacient() {
	try {
		const result = await dbOnlineForDevelopment.select().from(pacientes);
		// console.log(result)
		return { success: true, result: result };
	} catch (error) {
		console.error(error);
		return { success: false, message: 'Erro ao buscar pacientes' };
	}
}

export async function getPacientByName(nome: string) {
	try {
		const result = await dbOnlineForDevelopment.select().from(pacientes).where(eq(pacientes.nome, nome));
		if (result.length === 0) {
			return { success: false, message: 'Nenhum paciente encontrado' };
		}
		return { success: true, message: result };
	} catch (error) {
		console.error(error);
		return { success: false, message: 'Erro ao buscar pacientes' };
	}
}

export async function getPacientById(id: string) {
	const result = await dbOnlineForDevelopment.select().from(pacientes).where(eq(pacientes.id, id));
	if (result.length === 0) {
		return { success: false, message: 'Paciente não encontrado' };
	}
	return { success: true, message: result[0] };
}

//getPacientById('fw6eymegv06s0mtuk1kbapo6').then((data)=>{return data}).then((data) => console.log(data))
// getPacient()
