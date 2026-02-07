/** biome-ignore-all lint/correctness/noUnusedImports: <Rule not important> */
/** biome-ignore-all assist/source/organizeImports: <ok> */
import type { IPacient } from '../interface/Pacient';
type factory = (id: string, dados: IPacient) => Promise<IPacient | unknown>;

export async function updatePacientUseCase(
	pacient: IPacient,
	build: factory,
	itemToUpdate: any
) {
	const { id } = pacient;
	const pacientUpdatedById = await build(id as string,itemToUpdate);
	return pacientUpdatedById;
}
