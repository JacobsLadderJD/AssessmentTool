import router from '@/router'
import alerts from '@/alerts'
import api from '@/api'

import types from './types'

const actions = {
  [types.LOGIN] ({ commit }, loginData) {
    commit(types.START_LOGIN);
    api.auth.login(loginData.email, loginData.password)
      .then(response => {
        localStorage.setItem('accessToken', response.data.token)
        commit(types.LOGIN_SUCCESS)
        commit(types.UPDATE_TOKEN, response.data.token)
        router.push('/')
        alerts.authSuccess("Login successful")
      })
      .catch(error => {
        console.log(error);
        commit(types.LOGIN_ERROR)
        commit(types.LOGOUT)
        if (error.response.data) {
          error.response.data.non_field_errors.forEach(alerts.authError)
        }
        return
      })
  },
  [types.LOAD_TOKEN] ({ commit }) {
    commit(types.UPDATE_TOKEN, localStorage.getItem('accessToken'));
  },
  [types.LOGOUT] ({ commit }) {
    localStorage.removeItem('accessToken');
    api.auth.logout()
    commit(types.LOGOUT);
    router.push('/login');
    alerts.authSuccess("Logout successful")
  },
  [types.VALIDATE] ({commit}) {
    api.auth.validate()
      .then(isValid => {
        if (!isValid) {
          commit(types.LOGOUT);
          localStorage.removeItem('accessToken');
          api.auth.logout()
        }
      })
  }
}
export default actions
