import { deleteEvolution } from '../../infra/db/EVOLUCAO/delete-evolucao-psi';

export async function deleteEvolucaoUsecase(id: string) {
    const deletedEvolution = await deleteEvolution( id);
    return deletedEvolution;
}
