import { createRouter, createWebHistory } from 'vue-router'
import calendar from '../views/calendar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: calendar
    }
  ]
})

export default router
