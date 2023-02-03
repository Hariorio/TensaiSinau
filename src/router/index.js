import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/games/mobile-legends',
        name: 'MobileLegends',
        component: () => import('@/views/pages/MobileLegends.vue')
    },
    {
        path: '/games/pubgm',
        name: 'PubgMobile',
        component: () => import('@/views/pages/PubgMobile.vue')
    },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router