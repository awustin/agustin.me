import { createRouter, createWebHistory } from 'vue-router';
import Main from '../Main.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: Main
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
});
