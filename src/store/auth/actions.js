import router from '@/router'
import alerts from '@/alerts'
import api from '@/api/api'

import types from './types'

const actions = {
  [types.LOGIN] ({ commit }, loginData) {
    commit(types.START_LOGIN);
    api.login(loginData.email, loginData.password)
      .then(response => {
        localStorage.setItem('accessToken', response.data.token)
        commit(types.STOP_LOGIN, null)
        commit(types.UPDATE_ACCESS_TOKEN, response.data.token)
        router.push('/')
        alerts.authSuccess("Login successful")
      })
      .catch(error => {
        commit(types.STOP_LOGIN, error.response.data)
        commit(types.UPDATE_ACCESS_TOKEN, null)
        error.response.data.non_field_errors.forEach(alerts.authError)
        return
      })
  },
  [types.FETCH_ACCESS_TOKEN] ({ commit }) {
    commit(types.UPDATE_ACCESS_TOKEN, localStorage.getItem('accessToken'));
  },
  [types.LOGOUT] ({ commit }) {
    localStorage.removeItem('accessToken');
    commit(types.LOGOUT);
    router.push('/login');
    alerts.authSuccess("Logout successful")
  }
}
export default actions
