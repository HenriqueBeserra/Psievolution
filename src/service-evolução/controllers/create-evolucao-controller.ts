import type { IEvolucao } from '../interface/Evolucao';
import { createEvolucaoUseCase } from '../use-cases/create-evolucao-usecase';
import { Evolucao } from '../../domain/evolucao-entitie';

//A function factory
export function createEvolucaoDomain() {
	const evolutionClass = new Evolucao();
	return evolutionClass;
}

export async function createEvolucaoController(dadosEvolucao: IEvolucao) {
	const evolutioCreated = await createEvolucaoUseCase(
		dadosEvolucao,
		createEvolucaoDomain,
	);

	return evolutioCreated;
}
