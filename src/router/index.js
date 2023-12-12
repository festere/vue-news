import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/vues/Home.vue'
import About from '@/vues/About.vue'
import YourNews from '@/vues/YourNews.vue'
import Contact from '@/vues/Contact.vue'

const routes = [
    { path: '/', component: Home , name: 'home' },
    { path: '/about', component: About , name: 'about' },
    { path: '/yournews', component: YourNews , name: 'yournews' },
    { path: '/contact', component: Contact , name: 'contact'},
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router