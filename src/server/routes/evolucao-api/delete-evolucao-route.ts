import type { FastifyPluginAsync } from 'fastify';
import { verifyToken } from '../../../application_use-cases/jwt';
import { deleteEvolucaoController } from '../../../service-evolução/controllers/delete-evolucao-controller';

export const deleteEvolutionRoute: FastifyPluginAsync = async (app) => {
	app.delete(
		'/delete_evolution',
		{ 
			preHandler: verifyToken
		},
		async (req, reply) => {
			const deletedEvolutionResult = await deleteEvolucaoController((req.body as {id:string}).id);
			return reply.status(200).send({ success: true, message: deletedEvolutionResult });
		},
	);
};
