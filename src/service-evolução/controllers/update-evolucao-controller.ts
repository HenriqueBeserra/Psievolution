import { updateEvolutionUsecase } from "../use-cases/update-evolucao-usecase"
import { updateEvolucao } from "../../infra/db/EVOLUCAO/update-evolucao-psi"

export async function updateEvolutionController(id:string, body: any){
    const result = await updateEvolutionUsecase(id, body, updateEvolucao)
    return result
}