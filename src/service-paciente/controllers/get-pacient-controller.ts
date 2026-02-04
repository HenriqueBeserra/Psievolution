import { getPacientUseCase } from '../../service-paciente/use-cases/get-pacient-usecase';

export async function getPacientController() {
	const pacient = await getPacientUseCase();
	return pacient;
}
