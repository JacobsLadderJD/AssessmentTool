import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import EvaluationList from './views/EvaluationList'
import EvaluationViewer from './views/EvaluationViewer'
import CreateEvaluation from './views/CreateEvaluation'
import Sandbox from './views/Sandbox'

import store from '@/store/store'
import authTypes from '@/store/auth/types'
Vue.use(Router)

const WhiteList = ['/login']

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: Sandbox
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/evaluations',
      name: 'evaluations',
      component: EvaluationList
    },
    {
      path: '/evaluations/new',
      name: 'create-evaluation',
      component: CreateEvaluation
    },
    {
      path: '/evaluations/:id',
      name: 'evaluation',
      component: EvaluationViewer
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/logout',
      beforeEnter: (to, from, next) => {
        if (!store.state.auth.accessToken)
          return next(false)
        store.dispatch('logout')
        return next('/login')
      }
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

import api from '@/api'

router.beforeEach((to, from, next) => {
  store.dispatch(authTypes.LOAD_TOKEN)
  store.dispatch(authTypes.VALIDATE)
  api.auth.validate(store.state.auth.accessToken)
    .then(isValid=> {
      if ((!isValid) && (to.fullPath !== '/login')) {
        // there's no access token and not going to login
        return next('/login')
      }
      if (isValid && to.fullPath === '/login') {
        // there's a token, and we are going to login
        return next('/')
      }
      next()
    })
});

export default router
