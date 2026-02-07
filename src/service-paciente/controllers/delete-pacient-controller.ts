import {deletePacientUsecase} from '../use-cases/delete-pacient-usecase'
export async function deletePacientController(id:string){
    const result = await deletePacientUsecase(id)
    return result;
}