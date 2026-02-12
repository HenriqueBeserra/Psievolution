import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';

const helpMensage = {
	Title: 'Help Api Content',
	Status: '200: Api em funcionamento',
	MessageContent01:
		'Esta API disponibiliza o processamento ideal necessário para o acompanhamento de pacientes psicologicos e suas datas de atendimentos',
	MessageContent02: {
		Information: {
			'Api Name': 'psi_evolution',
			Version: '1.0.0',
			Author: 'Henrique Beserra',
			License: 'MIT',
		},
	},
};

export const helpApiRoute: FastifyPluginAsyncZod = async (app) => {
	app.get('/api_help', (req, res) => {
		res.send(helpMensage).status(200);
	});
};
