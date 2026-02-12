import agrHashEngine from 'argon2'

export class Encrypt {
    async hashCreator (data: string): Promise<string>{
        const informationHashed = await agrHashEngine.hash(data)
        return informationHashed
    }
    async validHash(hash: string, data: string): Promise<boolean>{
        const isValid = await agrHashEngine.verify(hash, data)
        return isValid
    }
 
}


//Teste de funcionamento
// const test = new Encrypt()
// test.hashCreator('henrique')
//     .then((hash) => {return test.validHash(hash, 'henrique')})
//     .then((isvalid) => console.log(isvalid) )
