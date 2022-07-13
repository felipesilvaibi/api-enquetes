import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Deverá retornar uma account em caso de sucesso', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Felipe',
        email: 'felipe_ibirama@hotmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
