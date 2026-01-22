import type { IAtendimento } from '../application_use-cases/interfaces/Atendimento'
import type { AtendimentoInterface } from './domain-interface'

export class Atendimento implements AtendimentoInterface {
	private data_atual = new Date().toISOString().slice(0, 10)

	createAtendimento(dados: IAtendimento) {
		if (dados.data_atendimento < this.data_atual) {
			console.error('Data marcada menor que Data atual.')
			throw new Error('Data marcada menor que Data atual.')
		} else if (!this.timeIsValid(dados.horario)) {
			console.error('Formato invalido de horário.')
			throw new Error('Formato invalido de horário.')
		}

		return {
			data_atendimento: dados.data_atendimento,
			horario: dados.horario,
			status: dados.status,
			userId: dados.userId,
		}
	}

	timeIsValid(time: string): boolean {
		const rule = /^([01]\d|2[0-3]):[0-5]\d$/
		return rule.test(time)
	}
}

const atendimentoo = {
	data_atendimento: '25/02/2026',
	horario: '00:10',
	status: 'não realizado',
	userId: '00a01',
}

const novo_atendimento = new Atendimento()
const atendimentocriado = novo_atendimento.createAtendimento(atendimentoo)
console.log(atendimentocriado)
