// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignUpView.vue'
import TestView from '../views/TestView.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/views/SignInView.vue'),
    children: [
      {
        path: '',
        name: 'SignInView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: SignInView
        // component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/signup',
    component: () => import('@/views/SignUpView.vue'),
    children: [
      {
        path: '',
        name: 'SignUpView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: SignUpView
        // component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/home',
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: '',
        name: 'HomeView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: HomeView
        // component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/test',
    component: () => import('@/views/TestView.vue'),
    children: [
      {
        path: '',
        name: 'TestView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: TestView
        // component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
