import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/vues/Home.vue'
import About from '@/vues/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router