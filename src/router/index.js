import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/vues/Home.vue'
import About from '@/vues/About.vue'
import Dailynews from '@/vues/Dailynews.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/dailynews', component: Dailynews },
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router