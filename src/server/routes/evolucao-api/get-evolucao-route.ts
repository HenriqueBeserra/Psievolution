import type { FastifyPluginAsync } from 'fastify';
import { verifyToken } from '../../../application_use-cases/jwt';
import { getEvolutionController } from '../../../service-evolução/controllers/get-evolucao-controller';

export const getEvolutionRoute: FastifyPluginAsync = async (app) => {
	app.get('/get_evolution', { preHandler: verifyToken }, async (req, reply) => {
		const result = await getEvolutionController();
		return reply.status(201).send({ message: [result] });
	});
};
