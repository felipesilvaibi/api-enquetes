import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt_adapter'

describe('Bcrypt Adapter', () => {
  test('Deverá chamar o bcrypt com o valores corretos', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })
})
