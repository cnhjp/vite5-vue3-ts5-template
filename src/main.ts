import App from './App.vue'
import router from './router'
import store from './store'
import "virtual:uno.css"
import "./styles/index.css"

const app = createApp(App)

// 安装模块
const modules = import.meta.glob('./modules/*.ts', { eager: true })
console.log(modules)

// 安装custom module

app.use(router)
app.mount('#app')
