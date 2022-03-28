import Vue from 'vue';
import VueRouter from 'vue-router';
import landingPage from '@/views/landingPage.vue';
import deskripsi from '@/views/thisDeskripsi.vue';
Vue.use(VueRouter);

const routes = [

    {
        path: '/',
        name: 'landingPage',
        component: landingPage,
    },
    {
        path: '/:id',
        name: 'thisDeskripsi',
        component: deskripsi,
    }


];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
export default router;