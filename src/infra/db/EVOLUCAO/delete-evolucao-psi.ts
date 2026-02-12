/** biome-ignore-all assist/source/organizeImports: <nothing> */
import { db } from '../db-index';
import { evolucao } from '../schema';
import { eq, and } from 'drizzle-orm';

export async function deleteEvolution(id: string) {
	try {
		const result = await db
			.delete(evolucao)
			.where(and(eq(evolucao.id, id)))
			.returning();

		if (result.length === 0) {
			return { message: 'Evolução não encontrado' };
		}

		return { message: 'Evolução deletada com sucesso', Evolucao: result[0] };
	} catch (error) {
		console.error('Erro ao deletar Evolução:', error);
		return { message: 'Falha ao deletar Evolução', error };
	}
}
