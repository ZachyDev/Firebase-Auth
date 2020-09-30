import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import(/* webpackChunkName:'sign-up' */'@/components/SignUp.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'Login' */ '@/components/Login.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
