import { Pacient } from '../../domain/pacient-entitie';
import type { IPacient } from '../interfaces/Pacient';

const creator = new Pacient();

export async function createPacientUsecase(pacient: IPacient) {
	try {
		const result = creator.createPacient(pacient);
	} catch (err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}
	}
}
