import type { FastifyPluginAsync } from 'fastify';
import { getPacientController } from '../../../service-paciente/controllers/get-pacient-controller';
import { verifyToken } from '../../../application_use-cases/jwt';

export const getPacientRoute: FastifyPluginAsync = async (app) => {
	app.get('/get_pacient', { preHandler: verifyToken }, async (req, reply) => {
		const allPacients = await getPacientController();
		reply.status(200).send(allPacients.pacients);
	});
};
