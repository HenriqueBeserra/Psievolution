import { verifyToken } from '../../../application_use-cases/jwt';
import { updatePacientController } from '../../../service-paciente/controllers/update-pacient-controller';
import type { FastifyPluginAsync } from 'fastify';

export const updatePacientRoute: FastifyPluginAsync = async (app) => {
	app.put('/handle_pacient', { preHandler: verifyToken }, async (req, reply) => {
		const result = await updatePacientController(
			(req.body as { id: string }).id,
			req.body,
		);
		reply.status(201).send({ result });
	});
};
