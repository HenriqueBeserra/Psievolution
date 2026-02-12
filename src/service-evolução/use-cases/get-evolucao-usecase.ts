import { getEvolucao } from '../../infra/db/EVOLUCAO/get-evolucao-psi';

export async function getEvolutionUseCase() {
	const evolutionResult = await getEvolucao();
	return evolutionResult;
}
