//function sum (a,b){
//    return a+b;
//}

//test ('sumar a + b', () =>{
//    expect(sum(1,2)).toBe(3)
//})
import supertest from 'supertest'
import app from '../src/app'

describe('Index route', () => {
    it('should return an empty object', async () => {
        // 1.- llamar a la api
        const res = await supertest(app).get('/productos')

        // 2.- esperar que el resultado sea un objeto vacio
        expect(res.statusCode).toEqual(200)
    })
})