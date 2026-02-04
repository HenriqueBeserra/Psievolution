import type { FastifyPluginAsync } from 'fastify';
import { getPacientController } from '../../../service-paciente/controllers/get-pacient-controller';

export const getPacientRoute: FastifyPluginAsync = async (app) => {
	app.get('/get_pacient', async (req, reply) => {
		const allPacients = await getPacientController();
		reply.status(200).send(allPacients.pacients);
	});
};
