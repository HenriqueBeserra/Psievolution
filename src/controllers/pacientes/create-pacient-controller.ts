import { createPacientUsecase } from '../../application_use-cases/use-cases/create-pacient-usecases';
import { sanatizePacient } from '../../application_use-cases/use-cases/sanitizePacient';

export async function createPacientController(data: unknown) {
	const pacient = sanatizePacient(data);
	return createPacientUsecase(pacient);
}
