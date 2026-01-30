import type { FastifyReply } from 'fastify';
import type { IPacient } from '../../application_use-cases/interfaces/Pacient';
import { createPacientUsecase } from '../../application_use-cases/use-cases/create-pacient-usecases';
import { sanatizePacient } from '../../application_use-cases/use-cases/sanitizePacient';

export async function createPacientController(data: IPacient, reply: FastifyReply) {
	const pacient = sanatizePacient(data);
	try {
		const createdPAcient = await createPacientUsecase(pacient);
		return reply.status(200).send({
			success: true,
			message: 'Paciente Criado com sucesso',
			load: createdPAcient,
		});
	} catch (err: any) {
		return reply.send({ Error: err.message });
	}
}
