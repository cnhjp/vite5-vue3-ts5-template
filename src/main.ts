import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "virtual:uno.css"
import "./styles/index.css"

createApp(App).use(router).use(store).use(createHead()).mount('#app')
