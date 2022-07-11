import { MissingParamError, InvalidParamError } from '../errors'
import { HttpRequest, HttpResponse, Controller, EmailValidator } from '../protocols'
import { badRequest, serverError } from '../helpers/http-helper'
import { AddAccount } from '../../domain/usecases/add-account'

export class SignUpController implements Controller {
  private readonly emailValidador: EmailValidator
  private readonly addAccount: AddAccount

  public constructor (emailValidador: EmailValidator, addAccount: AddAccount) {
    this.emailValidador = emailValidador
    this.addAccount = addAccount
  }

  public handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, email, password, passwordConfirmation } = httpRequest.body
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emailValidador.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      this.addAccount.add({
        name,
        email,
        password
      })
      return {
        statusCode: 200,
        body: ''
      }
    } catch (error) {
      return serverError()
    }
  }
}
