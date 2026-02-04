import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const jwt_secret = process.env.JWT_SECRET || '1908$$aAtZf%53';

export function generateToken(payload: object, expiresIn = '2h') {
	return jwt.sign(payload, jwt_secret, { expiresIn });
}

export function verifyToken(req, res, done) {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader) {
			return res.code(401).send({ ok: false, message: 'Token não fornecido' });
		}

		const [type, token] = authHeader.split(' ');
		if (type !== 'Bearer' || !token) {
			return res.status(401).send({ ok: false, message: 'Token mal formatado' });
		}

		jwt.verify(token, jwt_secret);
		done(); //libera a rota
	} catch (error) {
		return res.code(401).send({ ok: false, message: { 'Token inválido:': error } });
	}
}
