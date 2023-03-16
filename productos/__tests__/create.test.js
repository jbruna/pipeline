import supertest from 'supertest'
import app from '../src/app'


describe('Create route', () => {
    it('should create a new product', async () => {
        // 1.- llamar a la api
        const res = await supertest(app).post('/productos').send({
            name:'Polera'            
        })

        // 2.- esperar que el resultado sea un objeto vacio
        expect(res.statusCode).toEqual(201)
        expect(res.body.name).toBe('Polera')
    })
})