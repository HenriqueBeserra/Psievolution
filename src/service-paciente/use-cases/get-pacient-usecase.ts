import { getPacient } from '../../infra/db/PACIENTES/get-pacient-psi';

export async function getPacientUseCase() {
	const pacient = await getPacient();
	return { pacients: pacient.result };
}
