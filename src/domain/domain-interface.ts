/** biome-ignore-all assist/source/organizeImports: <Dont need this rule here> */
import type { IPacient } from '../application_use-cases/interfaces/Pacient';
import type { IAtendimento } from '../application_use-cases/interfaces/Atendimento';
import type { IEvolucao } from '../application_use-cases/interfaces/Evolucao';

interface CreatedPacientDomain {
	succcess: boolean;
	pacient: {
		nome: string;
		idade: number;
		email: string;
		whats: string;
		nome_responsavel: string | undefined;
		contato_responsavel: string | undefined;
	};
}

export interface PacientInterface {
	createPacient(dados: IPacient): CreatedPacientDomain;
}

export interface AtendimentoInterface {
	createAtendimento(dados: IAtendimento): IAtendimento;
}

export interface EvoluçãoInterface {
	createEvolucao(dados: IEvolucao): IEvolucao;
}
