import { getEvolutionUseCase } from '../use-cases/get-evolucao-usecase';

export async function getEvolutionController() {
	const evolution = await getEvolutionUseCase();
	return evolution;
}
