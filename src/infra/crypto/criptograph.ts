import crypto from 'crypto';
import { readText } from './read-text-teste';
import path from 'path';

export class Criptographer {
	private algorithm: string;
	private key: Buffer;
	private iv: Buffer;

	constructor(key: Buffer<ArrayBufferLike>, iv: Buffer<ArrayBufferLike>) {
		this.algorithm = 'aes-256-cbc';
		this.key = key;
		this.iv = iv;
	}
	public encrypt(text: string) {
		const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
		let encrypted = cipher.update(text, 'utf8', 'hex');
		encrypted += cipher.final('hex');
		return encrypted;
	}

	public decrypt(encrypted: string) {
		const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
		let decrypted = decipher.update(encrypted, 'hex', 'utf8');
		decrypted += decipher.final('utf8');
		return decrypted;
	}
}

//Testes

// const engineCypher = new Criptographer()

// async function criptorafar(){
//     const caminho = await path.join(process.cwd(), 'src/assets/evolucao-paciente-test.txt')
//     const texto = await readText(caminho)
//     const resultado = await engineCypher.encrypt(texto)
//     console.log(resultado)

// }

// async function descriptografar(textoEncr: string){
//     const resultado = await engineCypher.decrypt(textoEncr)
//     console.log(resultado)
// }

// criptorafar()
// descriptografar('e683a76d66911d6b13598483e23d740fa6cee22c9a7bbf2976e7b5d76c20af57bae64c782a9ae81efe5d76fe61cfeb95c581c4c76a97a683c33bdb6c5e7de60b2d1bd52e8c1ac6038c11f4e4b8e0e8f70e834f92d7611a1d5903d9d79d576335b1f7870e86916bde966b5896e547ded0a54564f99f5551e293a9f8187fbae95794453dc8dad2adc0666f5d019171a5f753949f7d88344a591bd0e5b612a758975afb9dea3b4f01077255458c6a69fedd616bcbfe8a2267f2a9e98e33faae6578f52f8a64507d7963f010545009ea53db44bce2fb739abb9f67e4366cc1cb99b43c0528cc33317a6e67b957b95879c0ef372cf1823f9dc086a16ca722dfa6ca2e1e110494ce07205440493f96c729f72d2093f024578786a8faa5ae3172f2e2237707d28508731ca0ae58f904ee1e609901e4bd6cbaae700f504caa04ed7bc65cad2085d3061574947fd10d0112c5e944e31d2f93047d85bb1ccce96c806bea9b4563aed2c0e42de4911e9afcaef6c5a30f9916c06243a697dcbcb437581e21a849a7cffbf97da2e4482c8e8e1bec592f57a8d5a8e8ef0b44d0ea304257b7e525f5b20a9f7f568c311c6ae55919fdebf3c5d178517170735d60ff137ebea4b892c034ba63b9d2294acebc457651629f2062294dde08fb7236960e6e21e0028dc76ebe4a07e6fcfea020cad54cb790a3e416dd1db37a90d5f7c6948d47dbd3f91a34bd24fa5781bf2eb7a1214bb2e21d397cebee499a64d4a33a14456386f4891ee928344eb504e166aa0f17487bcbb386a46252836240f703560cbccee7baf56301376dd260ed6993796bc452d5ba4a1afce5625e21f6ee28b9223d7e9ec488176af6c3733e4f0b1e629ad253d25db279bfb3e541c0aa1e291dc7b6441921709e1e8c673e6f96c339320bfb39c38cd96c5d7df1904167626c7cdb22a9e8319a9adbf71b29ee1c63bfa0a68547adb7f2a162437799fc433e0efe5804723c88d987492d413f5d95f40cee623e04b63693949b5f4c44c84210f5f6fc300b01b6481731a655da5d3d2443197f0f058b767fade4f987e30c8d7496b7e1ca429a820ab917f2bc6eab336bebdab58df69e89be44424b902549cbc73c3a68137b4cabe17fe58bad18898cb04d1300f038ee89e950ced00e97d10e7f944c71b2965a27dc380e051e0e3f543a495845217ddcf7b0963188d9fba64c8a0b3673c626fcd8578b47cb23829712164faf3bddd322c9a8bf704eaef5ecdb9a5d40c3af5615e48f9035edc74b451d000138547799cff69bd4d89ce49320fc8f37396ed16ab78925ecf1d7d084f914147c1fdc57a95f3cb192705d9b4ade4342f50b61ec4a99c69474d3fead0a740a736a0da86558e9a304d9396fdb4d0d08cd9fb62e073c8121dad9091f630e481283c6bcce4795838a15eed83bb290ada83611cf4f7f904dad75a9d4253510ca66ccda50c424aa5ce88c31fde499d0b7cfd2857eeba65e3a300ef10b10070e4b13dda07c1b78e1a71188b25c6bce0c844776c3549f823d3d60e868fdf9f53cc187fcbda3b2acbe6f1280598ef12bafb19155b44bc3d160b240dba9fee9548660dc4b8a6e615783b4978b710cfc7ce5c9e6641b3e24c5ef275f7b9e0f1b12029cad3a16efca0f9a2e057c91afd1f14ab7171c4ea255116766c4dad3177e01850a7a4d54d89279da24f2bf45d0e692f0769be51bccbd6478434b6776')
