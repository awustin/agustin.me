import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../Pages/Landing.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: Landing
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
});
