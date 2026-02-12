import {readFile} from 'fs/promises';

export async function readText(filePath: string) {
	const texto = await readFile(filePath,"utf-8");
	return texto
}


