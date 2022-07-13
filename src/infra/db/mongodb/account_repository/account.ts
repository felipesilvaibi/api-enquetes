import { AddAccountRepository } from '../../../../data/protocols/add_account_repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo_helper'

export class AccountMongoRepository implements AddAccountRepository {
  public async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const insertResult = await accountCollection.insertOne(accountData)
    const account = await accountCollection.findOne({ _id: insertResult.insertedId })
    return MongoHelper.map(account)
  }
}
