import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import EvaluationList from './views/EvaluationList'
import CreateEvaluation from './views/CreateEvaluation'
import Sandbox from './views/Sandbox'
import StudentInfoPage from './views/assessment/StudentInfoPage'
import OverviewPage from './views/assessment/OverviewPage'
import DetailsPage from './views/assessment/DetailsPage'
import ReflexesPage from './views/assessment/ReflexesPage'
import TactilityPage from './views/assessment/TactilityPage'
import AuditoryPage from './views/assessment/AuditoryPage'
import VisualPage from './views/assessment/VisualPage'
import ManualPage from './views/assessment/ManualPage'
import LanguagePage from './views/assessment/LanguagePage'
import MobilityPage from './views/assessment/MobilityPage'
import SensoryPage from './views/assessment/SensoryPage'
import SensitivitiesPage from './views/assessment/SensitivitiesPage'

import store from '@/store/store'
import authTypes from '@/store/auth/types'
Vue.use(Router)

// const WhiteList = ['/login']

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
      name: 'eval-info',
      component: StudentInfoPage,
    },
    {
      path: '/evaluations/:id/overview',
      name: 'eval-overview',
      component: OverviewPage
    },
    {
      path: '/evaluations/:id/details',
      name: 'eval-details',
      component: DetailsPage
    },
    {
      path: '/evaluations/:id/reflexes',
      name: 'eval-reflexes',
      component: ReflexesPage
    },
    {
      path: '/evaluations/:id/tactility',
      name: 'eval-tactility',
      component: TactilityPage
    },
    {
      path: '/evaluations/:id/auditory',
      name: 'eval-auditory',
      component: AuditoryPage
    },
    {
      path: '/evaluations/:id/visual',
      name: 'eval-visual',
      component: VisualPage
    },
    {
      path: '/evaluations/:id/manual',
      name: 'eval-manual',
      component: ManualPage
    },
    {
      path: '/evaluations/:id/language',
      name: 'eval-language',
      component: LanguagePage
    },
    {
      path: '/evaluations/:id/mobility',
      name: 'eval-mobility',
      component: MobilityPage
    },
    {
      path: '/evaluations/:id/sensory-seeking',
      name: 'eval-sensory',
      component: SensoryPage
    },
    {
      path: '/evaluations/:id/sensitivities',
      name: 'eval-sensitivities',
      component: SensitivitiesPage
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
