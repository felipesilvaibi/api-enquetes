import { MissingParamError } from '../errors/missing_param_error'
import { SignupController } from './signup'

describe('SignupController', () => {
  test('Caso o nome não for fornecido será retornado um erro 400', () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password_confirmation'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
})
