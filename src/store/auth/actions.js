import router from '@/router'
import MockApi from '@/fixtures/MockApi'

import types from './types'

const actions = {
  [types.LOGIN] ({ commit }, loginData) {
    commit(types.START_LOGIN);
    MockApi.login(loginData.email, loginData.password)
    .then(response => {
      localStorage.setItem('accessToken', response.data.token);
      commit(types.STOP_LOGIN, null);
      commit(types.UPDATE_ACCESS_TOKEN, response.data.token);
      router.push('/users');
    })
    .catch(error => {
      commit(types.STOP_LOGIN, error.response.data.error);
      commit(types.UPDATE_ACCESS_TOKEN, null);
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
