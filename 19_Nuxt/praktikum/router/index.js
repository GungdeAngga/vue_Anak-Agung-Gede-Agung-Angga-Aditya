import Vue from 'vue';
import VueRouter from 'vue-router';
import news from '@/views/thisNews.vue';
import deskripsi from '@/views/thisDeskripsi.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'thisNews',
        component: news,
    },

    {
        path: '/thisDeskripsi/:id',
        name: 'thisDeskripsi',
        component: deskripsi,
    },
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
export default router;
