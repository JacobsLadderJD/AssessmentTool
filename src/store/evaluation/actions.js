import types from './types'
import api from '@/fixtures/MockApi'

const actions = {
  [types.CREATE_EVALUATION] ({commit, state}, payload) {
    return api.createEvaluation(payload.studentId)
      .then(evaluation => {
        commit(types.ADD_EVALUATION, evaluation)
        return evaluation
      })
  }
}

export default actions
