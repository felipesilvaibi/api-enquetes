import { MissingParamError } from '../errors/missing_param_error'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email_validator'
import { InvalidParamError } from '../errors/invalid_param_error'

export class SignUpController implements Controller {
  private readonly emailValidador: EmailValidator

  public constructor (emailValidador: EmailValidator) {
    this.emailValidador = emailValidador
  }

  public handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const isValid = this.emailValidador.isValid(httpRequest.body.email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      return {
        statusCode: 200,
        body: ''
      }
    } catch (error) {
      return serverError()
    }
  }
}
