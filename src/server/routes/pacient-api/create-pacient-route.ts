/** biome-ignore-all assist/source/organizeImports: <Frescuraaa> */
import { createPacientBodySchema } from '../../../infra/http/schemas/body-schema';
import { createPacientController } from '../../../service-paciente/controllers/create-pacient-controller';
import type { FastifyPluginAsync } from 'fastify';

export const createPacienteRoute: FastifyPluginAsync = async (app) => {
	app.post(
		'/create_pacient',
		{
			schema: {
				body: createPacientBodySchema,
			},
		},
		async (req, reply) => {
			const result = await createPacientController(req.body);
			reply.status(201).send({ result });
		},
	);
};
