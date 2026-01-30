import { z } from 'zod';

export const PacientSchema = z.object({
	nome: z
		.string()
		.trim()
		.min(3)
		.transform((nome) => nome.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase())),

	idade: z.preprocess((val) => Number(val), z.number().int().min(0)),

	email: z.string().trim().toLowerCase().email(),

	whats: z
		.string()
		.transform((v) => v.replace(/\D/g, ''))
		.refine((v) => v.length >= 10, {
			message: 'WhatsApp inválido',
		}),

	nome_responsavel: z.string().trim().optional(),

	contato_responsavel: z
		.string()
		.transform((v) => v.replace(/\D/g, ''))
		.optional(),
});
