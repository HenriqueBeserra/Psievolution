import { verifyToken } from '../../../application_use-cases/jwt';
import { updateEvolutionController } from '../../../service-evolução/controllers/update-evolucao-controller';
import type { FastifyPluginAsync } from 'fastify';

export const updateEvolutionRoute: FastifyPluginAsync = async (app) => {
    app.put('/handle_evolution', 
        { preHandler: verifyToken }, async (req, reply) => {
        const result = await updateEvolutionController(
           (req.body as {id: string}).id,
           req.body
        );
        reply.status(201).send({ result });
    });
};
