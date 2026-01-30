import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import type { IPacient } from '../../../application_use-cases/interfaces/Pacient';
import { createPacientController } from '../../../controllers/pacientes/create-pacient-controller';

export const createPacienteRoute: FastifyPluginAsyncZod = async (app) => {
	app.post('/create_pacient', (req, reply) => {
		const pacient = req.body as IPacient;
		createPacientController(pacient, reply);
	});
};
