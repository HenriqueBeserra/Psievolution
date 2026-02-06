import type { IEvolucao } from '../service-evolução/interface/Evolucao';
import type { EvoluçãoInterface } from './domain-interface';

export class Evolucao implements EvoluçãoInterface {
	private data_atual = new Date();

	createEvolucao(dados: IEvolucao) {
		if (dados.data_criacao < this.data_atual) {
			throw new Error('Data marcada menor que Data atual.');
		}
		return {
			nome: dados.nome,
			descricao: dados.descricao,
			data_criacao: new Date(dados.data_criacao),
			userId: dados.userId,
		};
	}

	timeIsValid(time: string): boolean {
		const rule = /^([01]\d|2[0-3]):[0-5]\d$/;
		return rule.test(time);
	}
}
