import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/首页/HomeView.vue'
import IntroView from '../components/平台介绍/IntroView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'IntroView',
      component: IntroView,
    }
  ]
})

export default router
