/** biome-ignore-all assist/source/organizeImports: <Dont need this rule here> */
import type { IPacient } from '../service-paciente/interface/Pacient';
import type { IAtendimento } from '../service-atendimento/interface/Atendimento';
import type { IEvolucao } from '../service-evolução/interface/Evolucao';

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
