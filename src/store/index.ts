export * from './modules/user'

export const store = createPinia()
export const install: CustomModule = (app) => {
    app.use(store)
}