import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email_validator_adapter'
import { DbAddAccount } from '../../data/usecases/add_account/db_add_account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt_adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account_repository/account'

export const makeSignUpController = (): SignUpController => {
  const emailValidatorAdapter = new EmailValidatorAdapter()

  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)

  return new SignUpController(emailValidatorAdapter, dbAddAccount)
}
