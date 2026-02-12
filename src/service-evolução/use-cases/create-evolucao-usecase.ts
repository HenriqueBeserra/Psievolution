/** biome-ignore-all assist/source/organizeImports: <not important> */
import type { EvoluçãoInterface } from '../../domain/domain-interface';
import type { IEvolucao } from '../interface/Evolucao';
import { getPacientIDUseCase } from './get-pacient-id-usecase';
import { createEvolucao } from '../../infra/db/EVOLUCAO/create-evolucao';
type factory = () => EvoluçãoInterface;

////////////////////////////////////////////////////////////////////////////////

export async function createEvolucaoUseCase(
	dadosEvolucao: IEvolucao,
	createEvolucaoDomain: factory,
) {
	const nameOfPacient = dadosEvolucao.nome;
	const { pacientId } = await getPacientIDUseCase(nameOfPacient);

	if (!pacientId) {
		throw new Error('Paciente Id não encontrado');
	}

	const evolution = { ...dadosEvolucao };
	evolution.userId = pacientId;

	//Instancia do domínio para executar as regras de negócio
	const engineEvolucaoCreator = createEvolucaoDomain();
	const { nome, descricao, data_criacao, userId } = engineEvolucaoCreator.createEvolucao(evolution);

	//Inserindo no BD
	const evolutionInsertedAtDb = await createEvolucao({
		nome,
		descricao,
		data_criacao,
		userId,
	});
	if (!evolutionInsertedAtDb) {
		throw new Error('Erro ao criar evolução');
	}
	return evolutionInsertedAtDb;
}
