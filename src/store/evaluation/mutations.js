import types from './types'
import Vue from 'vue'

const mutations = {
  [types.ADD_EVALUATION] (state, evaluation) {
    Vue.set(state.evaluations, evaluation.id, evaluation)
    state.evaluationIds.push(evaluation.id)
  },
  [types.UPDATE_EVALUATION] (state, evaluation) {
    console.log(evaluation.lastEdited);
    Vue.set(state.evaluations, evaluation.id, evaluation)
  }
}

export default mutations
