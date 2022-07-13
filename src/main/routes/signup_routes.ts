import { Router } from 'express'
import { makeSignUpController } from '../factories/signup'
import { adaptRoute } from '../adapters/express_route_adapter'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}
