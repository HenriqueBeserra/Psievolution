/** biome-ignore-all assist/source/organizeImports: <rule not important> */
import { db } from '../../db/db-index';
import { evolucao } from '../../db/schema';
import type { IEvolucao } from '../../../service-evolução/interface/Evolucao';

export async function createEvolucao({
	nome,
	descricao,
	data_criacao,
	userId,
}: IEvolucao) {
	try {
		if (!userId) {
			throw new Error('Id não encontrado');
		}
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
			.returning();

		return { succes: true, resultado: result[0] };
	} catch (erro) {
		console.error('Falha ao criar Evolução', erro);
		throw new Error('Falha ao criar Evolução');
	}
}

// modelo = {
// nome: "João Jose da Silva",
// descriçao: "Aqui vem uma série de textos que não consigo afirmar agoa com precisão o que é mas são longos"
// data_criação: hoje,
// userId: userid
// }
