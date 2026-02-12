import dotenv from 'dotenv'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { authController } from '../../../controllers/auth/authentication-controller'
dotenv.config()

export const userAuth: FastifyPluginAsyncZod = async (app) => {
	// Para informar quem está fazendo a chamada para autenticação
	const isc = process.env.ISC_SECRET

	app.post('/locale', async (req, reply) => {
		const { login, password } = req.body as { login: string; password: string }
		try{
			const token = await authController(
				{ login, password },
				isc,
				reply,
			)
			reply.status(200).send({ success: true, token })
		} catch (err: any) {
			reply.status(401).send({ success: false, message: err.message })
		}
	})
}
