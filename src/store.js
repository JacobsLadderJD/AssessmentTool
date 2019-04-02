import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    evaluationIds: [2, 1, 0],
    evaluations: {
      0: {
        id: 0,
        firstName: "James",
        lastName: "Marshall",
        lastEdited: new Date("11/21/2018"),
        evaluator: "Some User"
      },
      1: {
        id: 1,
        firstName: "Jessie",
        lastName: "Mantle",
        lastEdited: new Date("11/23/2018"),
        evaluator: "Some User"
      },
      2: {
        id: 2,
        firstName: "John",
        lastName: "Jacobs",
        lastEdited: new Date("11/25/2018"),
        evaluator: "Some User"
      },
      3: {
        id: 3,
        firstName: "",
        lastName: "",
        lastEdited: new Date(),
        evaluator: "Some User"
      }
    }
  },
  getters: {
    getEvaluationById (state) {
      return (id) => state.evaluations[id]
    },
    allEvaluations (state) {
      return state.evaluationIds.map((id) => state.evaluations[id])
    }
  },
  mutations: {

  },
  actions: {

  }
})
