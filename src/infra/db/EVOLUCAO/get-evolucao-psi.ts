import { db } from '../db-index';
import { evolucao } from '../schema';
import type { IEvolucao } from '../../../service-evolução/interface/Evolucao';
import { eq } from 'drizzle-orm';

export async function getEvolucao() {
	try {
		const result = await db.select().from(evolucao);

		console.log(result);
		return result[0];
	} catch (error) {
		console.error(error);
		return { message: 'Erro ao buscar Evolução' };
	}
}

export async function getEvoluçaoByName({ nome }: IEvolucao) {
	try {
		const result = await db.select().from(evolucao).where(eq(evolucao.nome, nome));

		return result[0];
	} catch (error) {
		console.error(error);
		return { message: 'Erro ao buscar Evolução' };
	}
}

getEvolucao();
