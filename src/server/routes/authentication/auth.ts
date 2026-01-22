import dotenv from 'dotenv'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { generateToken } from '../../../functions/jwt'
import { UserAuth } from '../../../functions/authentication'
dotenv.config()

export const userAuth: FastifyPluginAsyncZod = async (app) => {
	// Para informar quem está fazendo a chamada para autenticação
	const isc = process.env.ISC_SECRET

	app.post('/locale', async (req, reply) => {
		const { login, password } = req.body as { login: string; password: string }
		// console.log(login, typeof (login), password, typeof (password));

		//Validação de login
		try{
			const validUser = await UserAuth({ login, password }, isc)
			if (!validUser) {
				return reply.status(401).send({ success: false, message: 'USUÁRIO INVÁLIDO' })
			}
		}catch(err){
			console.error(err.message)
			return reply.status(503).send({ success: false, message: 'SERVIÇO INDISPONÍVEL', erro: err.message})
	}

		//Gerando e enviando token de segurança
		const token = await generateToken({ login })
		reply.status(200).send({ success: true, token })
	})
}
