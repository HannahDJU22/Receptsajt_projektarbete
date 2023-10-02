import { createRouter, createWebHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'

const router = createRouter({
    
  history: createWebHistory(import.meta.env.BASE_URL), //https://router.vuejs.org/guide/essentials/history-mode.html#HTML5-Mode
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/category',
            name: 'category',
            component: CategoryView
        },
        {
            path: '/views/RecipeView',
            name: 'recipe',
            component: () => import('../views/RecipeView.vue')
        }
    ]
})

export default router 