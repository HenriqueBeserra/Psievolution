import type { IPacient } from '../service-paciente/interface/Pacient';
import type { PacientInterface } from './domain-interface';

export class Pacient implements PacientInterface {
	private idadeMinima: number = 18;

	public createPacient(dados: IPacient) {
		if (dados.idade < this.idadeMinima) {
			if (!dados.nome_responsavel && !dados.contato_responsavel) {
				throw new Error(
					'Pacientes menores de idade precisam ter Nome e Contato do responsável',
				);
			}
		}

		//{
			//Pensar sobre criptografar os dados para inserir os dados criptografados no banco
		//{

		return {
			succcess: true,
			pacient: {
				nome: dados.nome,
				idade: dados.idade,
				email: dados.email,
				whats: this.clearPhone(dados.whats),
				nome_responsavel: dados.nome_responsavel,
				contato_responsavel: dados.contato_responsavel
					? this.clearPhone(dados.contato_responsavel)
					: undefined,
			},
		};
	}

	private contatoIsValid(phone: string): boolean {
		// biome-ignore lint/suspicious/noDoubleEquals: <Dont need this rule>
		return phone.length == 10 || phone.length == 11;
	}

	private clearPhone(phone: string) {
		const phoneCleaned = phone.replace(/\D/g, '');

		if (!this.contatoIsValid(phoneCleaned)) {
			console.log('Erro ao validar numero');
			throw new Error('Número de telefone invalido');
		}
		return phoneCleaned;
	}
}
