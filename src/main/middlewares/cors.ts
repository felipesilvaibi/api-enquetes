import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, res: Response, next: NextFunction) => {
  res.set('access-controll-allow-origin', '*')
  res.set('access-controll-allow-methods', '*')
  res.set('access-controll-allow-headers', '*')
  next()
}
