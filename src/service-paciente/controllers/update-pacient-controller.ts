import { getPacientById } from '../../infra/db/PACIENTES/get-pacient-psi';
import { updatePacientUseCase } from '../use-cases/update-pacient-usecase';
import { updatePacient } from '../../infra/db/PACIENTES/update-pacient-psi';

export async function updatePacientController(id: string, body: any) {
	const pacient = await getPacientById(id);
	const validatedPacient = pacient.message;
	const itemToUpdate = body;

	if (pacient.success === true && typeof validatedPacient !== 'string') {
		const pacientUpdated = updatePacientUseCase(
			validatedPacient,
			updatePacient,
			itemToUpdate
		);
		return pacientUpdated;
	}

	throw new Error('Erro, paciente não exixte');
}
