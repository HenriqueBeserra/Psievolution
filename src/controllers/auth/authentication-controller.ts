import { UserAuth } from '../../application_use-cases/authentication-use-cases'
import { generateToken } from '../../application_use-cases/jwt'
import type { UserLogin } from '../../application_use-cases/interfaces/User'


export async function authController(
	{ login, password }: UserLogin,
	isc: string | undefined,
	reply: any,
) {
	try {
		const validUser = await UserAuth({ login, password }, isc)
		if (!validUser) {
			return reply.status(401).send({ success: false, message: 'USUÁRIO INVÁLIDO' })
		}
	} catch (err: any) {
		if (err instanceof Error) {
			console.error(err.message)
			return reply
				.status(503)
				.send({ success: false, message: 'SERVIÇO INDISPONÍVEL', erro: err.message })
		} else {
			return reply
				.status(503)
				.send({ success: false, message: 'ERRO DESCONHECIDO', erro: err.message })
		}
	}

	//Gerando e enviando token de segurança
	const token = await generateToken({ login })
	return token
}
