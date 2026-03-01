/** biome-ignore-all assist/source/organizeImports: <Frescuraaa> */
import { createPacientBodySchema } from '../../../infra/http/schemas/body-schema';
import { createPacientController } from '../../../service-paciente/controllers/create-pacient-controller';
import type { FastifyPluginAsync } from 'fastify';
import { verifyToken } from '../../../application_use-cases/jwt';

export const createPacienteRoute: FastifyPluginAsync = async (app) => {
	app.post(
		'/create_pacient',
		{
			schema: {
				body: createPacientBodySchema,
			},
			preHandler: verifyToken,
		},
		async (req, reply) => {
			try {
				const result = await createPacientController(req.body);
				return reply.status(201).send({ result });
			} catch (err: unknown) {
				const message = err instanceof Error ? err.message : 'Erro ao criar paciente';
				const cause = err instanceof Error && 'cause' in err ? String((err as { cause?: unknown }).cause ?? '') : '';
				const isConflict = message.includes('já existe');
				const isDbError =
					message.includes('Failed query') ||
					cause.includes('ENOTFOUND') ||
					cause.includes('ECONNRESET') ||
					cause.includes('ECONNREFUSED');
				if (isConflict) return reply.status(409).send({ ok: false, message });
				if (isDbError) return reply.status(503).send({ ok: false, message: 'Serviço temporariamente indisponível. Verifique sua conexão com a internet.' });
				return reply.status(500).send({ ok: false, message });
			}
		},
	);
};
