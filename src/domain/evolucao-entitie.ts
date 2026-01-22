import type {IEvolucao} from '../application_use-cases/interfaces/Evolucao'
import type { EvoluçãoInterface } from './domain-interface'

export class Evolucao implements EvoluçãoInterface{
    private data_atual = new Date()

   createEvolucao(dados: IEvolucao){
        if (dados.data_criacao < this.data_atual) {
			console.error('Data marcada menor que Data atual.')
			throw new Error('Data marcada menor que Data atual.')
		} 

		return {
			nome:  dados.nome,
			descricao:  dados.descricao,
			data_criacao:  dados.data_criacao,
			userId:  dados.userId
		}
    }

	timeIsValid(time: string): boolean {
		const rule = /^([01]\d|2[0-3]):[0-5]\d$/
		return rule.test(time)
	}
}