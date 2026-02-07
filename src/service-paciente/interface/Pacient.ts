export interface IPacient {
	id?: string;
	nome: string;
	idade: number;
	email: string;
	whats: string;
	nome_responsavel?: string | undefined | null;
	contato_responsavel?: string | undefined | null;
}
