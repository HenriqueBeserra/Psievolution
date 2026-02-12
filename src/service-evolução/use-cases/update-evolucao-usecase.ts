import { IEvolucao } from "../interface/Evolucao"

type factory = (id:string, dados:IEvolucao)=>Promise<IEvolucao | unknown>;

export async function updateEvolutionUsecase(id:string, body:any, build: factory){
    const itemToUpdate = body

    const updatedEvolution = await build(id, itemToUpdate)
    return updatedEvolution
}