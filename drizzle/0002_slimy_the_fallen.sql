ALTER TABLE "evolucao" ALTER COLUMN "data_criacao" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "atendimentos" ADD COLUMN "created_at" timestamp DEFAULT now();