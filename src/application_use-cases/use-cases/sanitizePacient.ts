import { PacientSchema } from '../../application_use-cases/interfaces/zod-interface-pacient';
import type { IPacient } from '../interfaces/Pacient';

export function sanatizePacient(input: IPacient) {
	const pacient = PacientSchema.parse(input);
	return pacient;
}
