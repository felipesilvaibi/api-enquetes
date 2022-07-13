import { AddAccountRepository } from '../../../../data/protocols/add_account_repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo_helper'

/**
 * @todo Adicionar função de retorno de modelo (por algum motivo não está funcionando)
 */
export class AccountMongoRepository implements AddAccountRepository {
  public async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const insertResult = await accountCollection.insertOne(accountData)
    const account = accountCollection.findOne({ _id: insertResult.insertedId })

    const accountFake = { _id: 'mongo_id', name: 'name', email: 'email', password: 'password' }
    const { _id, ...accountWithoutId } = accountFake
    return Object.assign({}, accountWithoutId, { id: _id })
  }
}
