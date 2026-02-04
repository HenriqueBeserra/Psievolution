import { getPacient } from '../../infra/db/PACIENTES/get-pacient-psi';

export async function getPacientUseCase() {
	const pacient = await getPacient();
	console.log(pacient);
	return { pacients: pacient.result };
}
