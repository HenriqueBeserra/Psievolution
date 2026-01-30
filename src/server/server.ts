import fastify from 'fastify'
import formbody from '@fastify/formbody'
import fastifyCors from '@fastify/cors'
import { Index } from './routes/index'
import { userAuth } from './routes/authentication/auth'
import { createPacienteRoute } from './routes/api/create-pacient-route'

const app = fastify()

//Cors
app.register(fastifyCors, {
	origin: '*',
})

app.register(formbody)

// Routes
app.register(Index)
app.register(userAuth)
app.register(createPacienteRoute)

//Servidor execute
app.listen({ port: 3333 }, (err, address) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}
	console.log(`Servidor rodando em ${address}`)
})
