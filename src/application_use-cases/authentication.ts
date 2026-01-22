/** biome-ignore-all assist/source/organizeImports: <Dont need this rule here.> */
import type { UserLogin } from '../interfaces/User'
import dotenv from 'dotenv'
import { isValidEmail, clearPassowrd, clearEmail } from './sanitization-data'
dotenv.config()

const userTest: UserLogin = {
	login: 'nivanildo.silva@gmail.com',
	password: '102030',
}

export function UserAuth(user: UserLogin, isc: string | undefined) {
	const validEmail = isValidEmail(user.login)
	const clearedPassword = clearPassowrd(user.password)
	const clearedEmail = clearEmail(user.login)

	if (!validEmail) {
		throw new Error('DADOS DE EMAIL INVALIDOS')
	}

	//Valido de onde veio a solicitação de autenticação
	if (isc !== process.env.ISC_SECRET || isc === undefined) {
		throw new Error('SOLICITANTE INVALIDO')
	} else {
		if (clearedEmail !== userTest.login || clearedPassword !== userTest.password) {
			return false
		}

		return true
	}
}
