import { createRouter, createWebHistory } from 'vue-router'
import ShopHome from '../views/ShopHome.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: ShopHome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
