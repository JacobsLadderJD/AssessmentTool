import alerts from '@/alerts'
import types from './types'
import api from '@/api/MockApi' // FIXME: need to add evaluations to api
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
  },
  [types.UPDATE_EVALUATION] ({commit, state}, payload) {
    commit(types.UPDATE_EVALUATION, payload)
    alerts.success("main", "Updated evaluation successfully.")
    router.push({
      name:'evaluations'
    })
  }
}

export default actions
