import { db } from '../db-index';
import { atendimentos } from '../schema';
import { eq } from 'drizzle-orm';
import type { IAtendimento } from '../../../application_use-cases/interfaces/Atendimento';

export async function updatePacient(userId: string, data: Partial<IAtendimento>) {
	try {
		//Filtragem dos campos undefined, para não precisar passar todos os campos e sim só os que vão ser alterados
		const updates = Object.fromEntries(
			Object.entries(data).filter((_, value) => value !== undefined),
		);
		if (Object.keys(updates).length === 0) {
			return { Message: 'Nenhum dado para ser alterado' };
		}

		//Fazendo o update
		const result = await db
			.update(atendimentos)
			.set(updates)
			.where(eq(atendimentos.userId, userId))
			.returning();
		return result[0];
	} catch (erro) {
		console.error(erro);
		return erro;
	}
}

// updatePacient('wp695uo88jm2r1zu6rpkgszb', { idade: 26 })
