// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignUpView.vue'
import TestView from '../views/TestView.vue'
import TripView from '../views/TripView.vue'

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
        component: SignUpView
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
        component: HomeView,
        meta: {
          requiresAuth: true
        }
      },
    ],
  },
  {
    path: '/trip',
    component: () => import('@/views/TripView.vue'),
    children: [
      {
        path: '',
        name: 'TripView',
        component: TripView
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
        component: TestView
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
}
router.beforeEach(async(to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(await getCurrentUser()) {
      next();
    } else {
      alert('you dont have access!');
      next('/');
    }
  } else {
    next();
  }
});

export default router
