import {deletePacient} from '../../infra/db/PACIENTES/delete-pacient-psi'
export async function deletePacientUsecase(id:string){
    const result = await deletePacient(id)
    return result;
}