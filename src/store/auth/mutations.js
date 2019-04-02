import types from './types'

const mutations = {
  [types.START_LOGIN] (state) {
    state.status = "loggingIn"
  },
  [types.LOGIN_SUCCESS] (state) {
    state.status = "loggedIn"
  },
  [types.LOGIN_ERROR] (state) {
    state.status = "loginError";
    state.loginError = "Invalid email or password";
  },
  [types.UPDATE_TOKEN] (state, accessToken) {
    state.accessToken = accessToken;
  },
  [types.LOGOUT] (state) {
    state.status = "loggedOut"
    state.accessToken = null;
  }
}

export default mutations
