import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session';
import Home from '../views/Home.vue';
import Feed from '../views/Feed.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed,
    meta: { requiresLogin: true}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/nutrition',
    name: 'Nutrition',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nutrition.vue')
  },
  {
    path: '/activitylog',
    name: 'Activity Log',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActivityLog.vue')
  },
  {
    path: '/bike',
    name: 'Bike',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bike.vue')
  },
  {
    path: '/contactus',
    name: 'Contact Us',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import(/* webpackChunkName: "about" */ '../views/Counter.vue')
  },
  {
    path: '/exerciseplans',
    name: 'Exercise Plans',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExercisePlans.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import(/* webpackChunkName: "about" */ '../views/Friends.vue')
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Photos.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import(/* webpackChunkName: "about" */ '../views/Progress.vue')
  },
  {
    path: '/reportissue',
    name: 'Report issue',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReportIssue.vue')
  },
  {
    path: '/running',
    name: 'Running',
    component: () => import(/* webpackChunkName: "about" */ '../views/Running.vue')
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/social',
    name: 'Social',
    component: () => import(/* webpackChunkName: "about" */ '../views/Social.vue')
  },
  {
    path: '/stopwatch',
    name: 'Stopwatch',
    component: () => import(/* webpackChunkName: "about" */ '../views/Stopwatch.vue')
  },
  {
    path: '/swimming',
    name: 'Swimming',
    component: () => import(/* webpackChunkName: "about" */ '../views/Swimming.vue')
  },
  {
    path: '/weights',
    name: 'Weights',
    component: () => import(/* webpackChunkName: "about" */ '../views/Weights.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresLogin && !Session.user) {
    next('/login');
  } else {
    next();
  }
})

export default router