import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = () => ({
  evaluationIds: [2, 1, 0],
  evaluations: {
    0: {
      id: 0,
      studentId: 0,
      lastEdited: new Date("11/21/2018"),
      evaluator: "Some User"
    },
    1: {
      id: 1,
      studentId: 1,
      lastEdited: new Date("11/23/2018"),
      evaluator: "Some User"
    },
    2: {
      id: 2,
      studentId: 2,
      lastEdited: new Date("11/25/2018"),
      evaluator: "Some User"
    },
    3: {
      id: 3,
      studentId: 2,
      lastEdited: new Date(),
      evaluator: "Some User"
    }
  },
})


export default {
  state,
  getters,
  mutations,
  actions
}
