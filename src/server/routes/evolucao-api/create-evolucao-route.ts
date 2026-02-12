import type { FastifyPluginAsync } from 'fastify';
import { verifyToken } from '../../../application_use-cases/jwt';
import { createEvolucaoBodySchema } from '../../../infra/http/schemas/body-schema';
import { createEvolucaoController } from '../../../service-evolução/controllers/create-evolucao-controller';
import type { IEvolucao } from '../../../service-evolução/interface/Evolucao';

export const createEvolutionRoute: FastifyPluginAsync = async (app) => {
	app.post(
		'/create_evolution',
		{
			schema: {
				body: createEvolucaoBodySchema,
			},
			preHandler: verifyToken,
		},
		async (req, reply) => {
			const result = await createEvolucaoController(req.body as IEvolucao);
			return reply.status(201).send({ message: [result] });
		},
	);
};
