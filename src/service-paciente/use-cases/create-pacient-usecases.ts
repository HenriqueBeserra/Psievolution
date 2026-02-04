/** biome-ignore-all lint/correctness/noUnusedImports: <rule not important here> */
/** biome-ignore-all lint/suspicious/noDoubleEquals: <rule not important here> */
/** biome-ignore-all assist/source/organizeImports: <rule not important here> */
import { createPacient } from '../../infra/db/PACIENTES/create-pacient';
import type { IPacient } from '../interface/Pacient';
import { Pacient } from '../../domain/pacient-entitie';
import { getPacientByName } from '../../infra/db/PACIENTES/get-pacient-psi';

function engineCreatorPacient() {
	const creator = new Pacient();
	return creator;
}


async function pacientExists(pacient: IPacient){
	const pacientEx = await getPacientByName(pacient)
	if(pacientEx.success === true){
		return true
	}
	return false

}

export async function createPacientUsecase(pacient: IPacient) {
	
	const pacientValidated = await pacientExists(pacient)
	if(pacientValidated===true){
		console.log(pacientValidated)
		throw new Error('Paciente já existe!')
	}
	
	//instanciando a classe passiente e chamando a regra de negócio
	const creatorOfPacient = engineCreatorPacient();
	const entitiePacientCreated = creatorOfPacient.createPacient(pacient);
	//Cria o paciente no banco de dados
	const createdPacient = await createPacient(entitiePacientCreated.pacient);
	return createdPacient;
}
