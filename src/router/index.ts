import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/HomeApp.vue')
const Counter = () => import('@/views/CounterApp.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/counter', name: 'counter', component: Counter },
  ],
})

export default router
