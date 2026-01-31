// biome-ignore assist/source/organizeImports: <Frescura do Lint>
import fastifyCors from '@fastify/cors';
import fastify from 'fastify';
import formbody from '@fastify/formbody';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';

import { userAuth } from './routes/authentication/auth';
import { createPacienteRoute } from './routes/api/create-pacient-route';
import { Index } from './routes/index';
import { validatorCompiler, serializerCompiler } from 'fastify-type-provider-zod';

const app = fastify().withTypeProvider<ZodTypeProvider>();
//Config
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

//Cors
app.register(fastifyCors, {
	origin: '*',
});

app.register(formbody);

// Routes
app.register(Index);
app.register(userAuth);
app.register(createPacienteRoute);

//Servidor execute
app.listen({ port: 3333 }, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Servidor rodando em ${address}`);
});
