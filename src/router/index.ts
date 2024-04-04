import { router } from './router'

export * from './guard'

export default router

export { router }

export const install: CustomModule = (app) => {
  app.use(router)
}
