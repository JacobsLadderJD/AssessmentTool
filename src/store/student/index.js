import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = () => {
  return {
    studentIds: [0, 1, 2],
    students: {
      0: {
        id: 0,
        firstName: "James",
        lastName: "Marshall",
        birthday: new Date("08/21/2002"),
        gender: "M",
        diagnosis: "Autism",
        status: "Unclear"
      },
      1: {
        id: 1,
        firstName: "Jessie",
        lastName: "Mantle",
        birthday: new Date("03/02/2007"),
        gender: "F",
        diagnosis: "Cerebral Palsy",
        status: "Unclear"
      },
      2: {
        id: 2,
        firstName: "John",
        lastName: "Jacobs",
        birthday: new Date("03/02/1999"),
        gender: "M",
        diagnosis: "Down Syndrome",
        status: "Unclear"
      }
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
