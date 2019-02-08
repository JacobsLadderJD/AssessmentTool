import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = () => {
  return {
    evaluatorIds: [0, 1],
    evaluators: {
      0: {
        id: 0,
        firstName: "Virginia",
        lastName: "Clark",
      },
      1: {
        id: 1,
        firstName: "Amy",
        lastName: "O'Dell",
      },
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
