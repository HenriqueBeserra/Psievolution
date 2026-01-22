import { createId } from '@paralleldrive/cuid2'
import { PgTable, integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const pacientes = pgTable('pacientes', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => createId()),
	nome: text('nome').notNull(),
	idade: integer('idade').notNull(),
	email: text('email').notNull(),
	whats: text('whats').notNull(),
	// Novas colunas 
	nome_responsavel: text('nome_responsavel'),
	contato_responsavel: text('contato_responsavel')
})

export const anamnese = pgTable('anamnese', {
	nome: text('nome').notNull(),
	descricao: text('descricao').notNull(),
	data_criacao: timestamp('data_criacao').defaultNow().notNull(),
	userId: text('userId')
		.notNull()
		.references(() => pacientes.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
})

export const evolucao = pgTable('evolucao', {
	nome: text('nome').notNull(),
	descricao: text('descricao').notNull(),
	data_criacao: timestamp('data_criacao'),
	userId: text('userId')
		.notNull()
		.references(() => pacientes.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
})

export const atendimentos = pgTable('atendimentos', {
	data_atendimento: text('data_atendimento').notNull(),
	horario: text('horario').notNull(),
	status: text('status').notNull(),
	userId: text('userId')
		.notNull()
		.references(() => pacientes.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
})

export const psicologo = pgTable('psicologo', {
	nome: text('nome').notNull().primaryKey(),
	login: text('login').notNull(),
	password: text().notNull(),
})
