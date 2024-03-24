import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../views/IndexPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Kierownik
        { path: '/', name: 'login', component: null }, //Login
        { path: '/index', name: 'index', component: IndexPage }, //Index
        { path: '/(.*)', name: '404', redirect: '/index' }
    ]
})
export default router
