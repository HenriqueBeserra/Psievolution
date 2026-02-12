import { deleteEvolucaoUsecase } from "../use-cases/delete-evolucao-usecase";

export async function deleteEvolucaoController(id: string) {
	const result = await deleteEvolucaoUsecase(id);
	return result;
}
