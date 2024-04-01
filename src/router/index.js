import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  // {
  // path: '/',
  // name: 'Home',
  // component: () => import('../views/Home.vue'),
  // },
  // {
  // path: '/about',
  // name: 'About',
  // component: () => import ('../views/About.vue'),
  // },
  {
    path: '/',
    name: 'ViewHome',
    component: () => import('../views/ViewHome.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
