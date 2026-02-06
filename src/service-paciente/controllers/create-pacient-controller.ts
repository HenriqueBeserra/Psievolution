import { createPacientUsecase } from '../../service-paciente/use-cases/create-pacient-usecases';
import { sanatizePacient } from '../../service-paciente/use-cases/sanitizePacient';
import { Pacient } from '../../domain/pacient-entitie';

export function engineCreatorPacient() {
	const creator = new Pacient();
	return creator;
}

export async function createPacientController(data: unknown) {
	const pacient = sanatizePacient(data);
	return createPacientUsecase(pacient, engineCreatorPacient);
}
