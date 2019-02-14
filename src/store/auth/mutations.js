import types from './types'

const mutations = {
  [types.START_LOGIN] (state) {
    state.loggingIn = true
  },
  [types.STOP_LOGIN] (state, errors) {
    state.loggingIn = false;
    state.loginError = "Invalid email or password";
  },
  [types.UPDATE_ACCESS_TOKEN] (state, accessToken) {
    state.accessToken = accessToken;
  },
  [types.LOGOUT] (state) {
    state.accessToken = null;
  }
}

export default mutations
