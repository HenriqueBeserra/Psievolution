import type { IPacient } from '../interfaces/Pacient'
import type { PacientInterface } from './entidade-interface'

export class Pacient implements PacientInterface {
	private idadeMinima: number = 18

	createPacient(dados: IPacient) {
		if (dados.idade < this.idadeMinima) {
			if (!dados.nome_responsavel && !dados.contato_responsavel) {
				throw new Error(
					'Pacientes menores de idade precisam ter Nome e contato do responsável',
				)
			}
		}
		return {
			nome: dados.nome,
			idade: dados.idade,
			email: dados.email,
			whats: this.clearPhone(dados.whats),
			nome_responsavel: dados.nome_responsavel,
			contato_responsavel: dados.contato_responsavel
				? this.clearPhone(dados.contato_responsavel)
				: undefined,
		}
	}

	contatoIsValid(phone: string): boolean {
		// biome-ignore lint/suspicious/noDoubleEquals: <Dont need this rule>
		return phone.length == 10 || phone.length == 11
	}

	clearPhone(phone: string) {
		const phoneCleaned = phone.replace(/\D/g, '')

		if (!this.contatoIsValid(phoneCleaned)) {
			console.log('Erro ao validar numero')
			throw new Error('Número de telefone invalido')
		}
		return phoneCleaned
	}
}
