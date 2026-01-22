/** biome-ignore-all assist/source/organizeImports: <Dont need this rule here> */
import type { IPacient } from '../application_use-cases/interfaces/Pacient'
import type { IAtendimento } from '../application_use-cases/interfaces/Atendimento'
import type { IEvolucao } from '../application_use-cases/interfaces/Evolucao'

export interface PacientInterface {
	createPacient(dados: IPacient): IPacient | undefined
}

export interface AtendimentoInterface {
	createAtendimento(dados: IAtendimento): IAtendimento
}

export interface EvoluçãoInterface {
	createEvolucao(dados: IEvolucao): IEvolucao
}
