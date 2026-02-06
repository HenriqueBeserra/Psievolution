export interface IEvolucao {
	nome: string;
	descricao: string;
	data_criacao: Date;
	userId?: string;
}

export type DadosEvolucao = () => {
	nome: string;
	descricao: string;
	data_criacao: string;
	userId: string;
};
