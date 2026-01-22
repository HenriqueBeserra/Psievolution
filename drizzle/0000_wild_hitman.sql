
CREATE TABLE "atendimentos" (
	"data_atendimento" text NOT NULL,
	"horario" text NOT NULL,
	"status" text NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "evolucao" (
	"nome" text NOT NULL,
	"descricao" text NOT NULL,
	"data_criacao" timestamp,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pacientes" (
	"id" text PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"idade" integer NOT NULL,
	"email" text NOT NULL,
	"whats" text NOT NULL,
	"nome_responsavel" text,
	"contato_responsavel" text
);
--> statement-breakpoint
CREATE TABLE "psicologo" (
	"nome" text PRIMARY KEY NOT NULL,
	"login" text NOT NULL,
	"password" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "anamnese" ADD CONSTRAINT "anamnese_userId_pacientes_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."pacientes"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_userId_pacientes_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."pacientes"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "evolucao" ADD CONSTRAINT "evolucao_userId_pacientes_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."pacientes"("id") ON DELETE cascade ON UPDATE cascade;