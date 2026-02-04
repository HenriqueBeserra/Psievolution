import { createPacientUsecase } from '../../service-paciente/use-cases/create-pacient-usecases';
import { sanatizePacient } from '../../service-paciente/use-cases/sanitizePacient';

export async function createPacientController(data: unknown) {
	const pacient = sanatizePacient(data);
	return createPacientUsecase(pacient);
}
