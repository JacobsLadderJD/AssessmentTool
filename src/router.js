import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import EvaluationList from './views/EvaluationList.vue'
import EvaluationViewer from './views/EvaluationViewer.vue'
import NewEvaluation from './views/NewEvaluation.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
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
      name: 'newevaluation',
      component: NewEvaluation
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
    }
  ]
})
