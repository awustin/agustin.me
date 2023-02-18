import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../Pages/Home/Landing.vue';
import Posts from '../Pages/Blog/Posts.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing
    },
    {
      path: '/blog',
      name: 'blog',
      component: Posts
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/#greetings'
    }
  ]
})

export default router
