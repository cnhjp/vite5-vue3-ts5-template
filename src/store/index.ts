export * from './modules/user'
export * from './modules/theme'

export const store = createPinia()
export const install: CustomModule = (app) => {
  app.use(store)
}
