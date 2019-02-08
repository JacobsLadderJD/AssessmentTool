import types from './types'
import Vue from 'vue'

const mutations = {
  [types.ADD] (state, evaluation) {
    Vue.set(state.evaluations, evaluation.id, evaluation)
    state.evaluationIds.push(evaluation.id)
  }
}
