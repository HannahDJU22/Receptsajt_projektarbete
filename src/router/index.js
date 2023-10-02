import { createRouter, createWebHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    
  history: createWebHistory(import.meta.env.BASE_URL), //https://router.vuejs.org/guide/essentials/history-mode.html#HTML5-Mode
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ]
})

export default router 