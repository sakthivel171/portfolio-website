import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Skills from '../pages/Skills.vue'
import contact from '../pages/contact.vue'

const routes = [
  { path: '/',name: 'Home',component: Home},
  { path: '/about', name: 'About',component: About},
  { path: '/skills', name: 'Skills',component: Skills},
  { path: '/contact', name: 'contact',component: contact}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router