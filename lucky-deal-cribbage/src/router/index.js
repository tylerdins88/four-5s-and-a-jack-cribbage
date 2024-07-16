import { createRouter, createWebHistory } from 'vue-router';
import GamePage from '../GamePage.vue';
import HelloWorld from '../components/HelloWorld.vue';
import CribbageRundown from '../components/CribbageRundown.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/game',
        name: 'game',
        component: GamePage
    },
    {
        path: '/rundown',
        name: 'rundown',
        component: CribbageRundown
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;



