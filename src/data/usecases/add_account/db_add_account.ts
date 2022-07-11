import { AccountModel, AddAccount, AddAccountModel, Encrypter } from './db_add_account_protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  public constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  public async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)

    return new Promise(resolve => resolve({
      id: '',
      name: '',
      email: '',
      password: ''
    }))
  }
}
