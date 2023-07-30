import { createRouter, createWebHistory } from 'vue-router'
import ShopHome from '../views/ShopHome.vue'
import AboutUs from '../views/AboutUs.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Checkout from '../views/Checkout.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: ShopHome
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
