import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL), //https://router.vuejs.org/guide/essentials/history-mode.html#HTML5-Mode
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/category/:categoryId',
            name: 'category',
            component: () => import('../views/CategoryView.vue')
        },
        {
            path: '/recipe/:recipeId',
            name: 'recipe',
            component: () => import('../views/RecipeView.vue')
        }
    ]
})

export default router 