import Vue from 'vue'
import Vuex from 'vuex'
import evaluation from './evaluation/index.js'
import student from './student/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    evaluation,
    student
  },
  // state: {
  //
  // },
  // getters: {
  //
  // },
  // mutations: {
  //
  // },
  // actions: {
  //
  // }
})

export default store
