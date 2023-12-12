import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App },
    // Add other routes as needed
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')