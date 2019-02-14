import types from './types'

const mutations = {
  [types.START_LOGIN] (state) {
    state.loggingIn = true
  },
  [types.STOP_LOGIN] (state, errorMessage) {
    state.loggingIn = false;
    state.loginError = errorMessage;
  },
  [types.UPDATE_ACCESS_TOKEN] (state, accessToken) {
    state.accessToken = accessToken;
  },
  [types.LOGOUT] (state) {
    state.accessToken = null;
  }
}

export default mutations
