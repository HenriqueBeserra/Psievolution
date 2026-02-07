import { deletePacientController } from '../../../service-paciente/controllers/delete-pacient-controller';
import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { verifyToken } from '../../../application_use-cases/jwt';

export const deletePacientRoute: FastifyPluginAsync = async (app)=>{
    app.delete('/delete_pacient', {preHandler: verifyToken}, async (req: FastifyRequest, reply: FastifyReply) => {
        const result = await deletePacientController((req.body as {id:string}).id)
        reply.status(200).send({ result: result})
    })
}