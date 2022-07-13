import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo_helper'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    // await MongoHelper.connect(process.env.MONGO_URL ?? '')
  })

  afterAll(async () => {
    // await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    // const accountCollection = MongoHelper.getCollection('accounts')
    // await accountCollection.deleteMany({})
  })
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
