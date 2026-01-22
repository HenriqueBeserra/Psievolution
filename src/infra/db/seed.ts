import { client, db } from './db-index'
import { psicologo } from './schema'

async function seedPsi() {
	try {
		await db.delete(psicologo) // apaga todos os psicólogos

		const result = await db.insert(psicologo).values([
			{
				nome: 'Nivanildo Beserra da Silva',
				login: 'nivanildo.silva@gmail.com',
				password: '102030',
			},
		])

		console.log('Seed concluído:', result)
	} catch (err) {
		console.error('Erro ao rodar seed:', err)
	} finally {
		await client.end() // Fechando a conexão
	}
}

// Chamar a função apenas uma vez
seedPsi()
