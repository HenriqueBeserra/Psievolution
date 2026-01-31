import { PacientSchema } from '../../application_use-cases/interfaces/zod-interface-pacient';

export function sanatizePacient(input: unknown) {
	const pacient = PacientSchema.parse(input);
	return pacient;
}
