import actions from './actions'
import mutations from './mutations'
// import getters from './getters'
const state = () => ({
  accessToken: null,
  status: "loggedOut",
  loginError: null
})

export default {
  state,
  mutations,
  actions
}
