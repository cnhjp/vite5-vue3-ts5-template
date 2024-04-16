import App from './App.vue'
import 'virtual:uno.css'
import './styles/index.scss'

async function bootstrap() {
  const app = createApp(App)
  // 安装模块
  const modules = {
    ...import.meta.glob('./modules/*.ts', { eager: true }),
    ...import.meta.glob('./store/index.ts', { eager: true }),
    ...import.meta.glob('./router/index.ts', { eager: true }),
    ...import.meta.glob('./directives/*.ts', { eager: true }),
  }
  Object.keys(modules).forEach((key) => {
    const module = modules[key] as any
    const install = module.install || module
    install?.(app)
  })
  app.mount('#app')
}

bootstrap()
