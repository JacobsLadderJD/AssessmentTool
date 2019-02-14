import router from '@/router'
import api from '@/api'

import types from './types'

const actions = {
  [types.LOGIN] ({ commit }, loginData) {
    commit(types.START_LOGIN);
    api.login(loginData.email, loginData.password)
      .then(response => {
        console.log(response)
        localStorage.setItem('accessToken', response.data.token);
        commit(types.STOP_LOGIN, null);
        commit(types.UPDATE_ACCESS_TOKEN, response.data.token);
        router.push('/');
      })
      .catch(error => {
        commit(types.STOP_LOGIN, error.response.data);
        commit(types.UPDATE_ACCESS_TOKEN, null);
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
  }
}
export default actions
