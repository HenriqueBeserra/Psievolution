import { getPacientByName } from "../infra/db/PACIENTES/get-pacient-psi";
import type { IPacient } from "../service-paciente/interface/Pacient";

export async function pacientExists(pacient: IPacient) {
    const pacientEx = await getPacientByName(pacient.nome);
    return pacientEx.success; //Retorna true ou false
}
