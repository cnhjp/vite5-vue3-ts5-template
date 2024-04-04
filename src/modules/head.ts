import { createHead } from '@unhead/vue'

export const install: CustomModule = (app) => {
  app.use(createHead())
}
