import types from './types'
import api from '@/fixtures/MockApi'
import router from '@/router'

const actions = {
  [types.CREATE_EVALUATION] ({commit, state}, payload) {
    return api.createEvaluation(payload.studentId)
      .then(response => {
        commit(types.ADD_EVALUATION, response.data)
        router.push({
          name:'evaluation',
          params: {id: response.data.id}
        })
      })
  }
}

export default actions
