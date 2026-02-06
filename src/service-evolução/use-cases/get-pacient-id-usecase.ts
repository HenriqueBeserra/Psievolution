import { getPacientByName } from '../../infra/db/PACIENTES/get-pacient-psi';

export async function getPacientIDUseCase(nome: string) {
	const { message } = await getPacientByName(nome);
	const pacient = message[0];
	if (message.length < 1) {
		throw new Error('Paciente não encontrado');
	}
	//
	if (typeof pacient === 'string') {
		throw new Error('Paciente inválido');
	}
	return { pacientId: pacient.id };
}

//Modelo
// const henrique = {
// 	nome: 'Henrique Beserraaaasasdasd',
// 	idade: 26,
// 	email: 'zeluiz@gmail.com',
// 	whats: '81994686223',
// };
// getPacientIDUseCase(henrique.nome)
// 	.then((resultado) => {
// 		return resultado;
// 	})
// 	.then((result) => console.log(result));
