import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const Index: FastifyPluginAsyncZod = async (app) => {
	app.get('/teste', (req, res) => {
		res.send('Estamos funcionando').status(200)
	})
}
