import * as Router from 'koa-router'

import { postRoutes } from './postRoutes'

const rootRouter = new Router()

export const routers = (app: any) => {
  rootRouter.use('/posts', postRoutes)

  app.use(rootRouter.routes())
}
