import { z } from 'zod';

export const createPacientBodySchema = z.object({
	nome: z.string(),
	idade: z.number(),
	email: z.string().email(),
	whats: z.string(),
	nome_responsavel: z.string().optional(),
	contato_responsavel: z.string().optional(),
});

export const createEvolucaoBodySchema = z.object({
	nome: z.string(),
	descricao: z.string(),
	data_criacao: z.string(),
	userId: z.string() || z.undefined,
});
