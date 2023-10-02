import { createRouter, createWebHistory } from 'vue-router' //./node_modules/vue-router/dist/vue-router
import HomeView from '../views/HomeView.vue' 

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ]
})