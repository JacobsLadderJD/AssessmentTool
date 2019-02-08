const getters = {
  getStudentById (state) {
    return (id) => state.students[id]
  },
  allStudents (state) {
    return state.studentIds.map((id) => state.students[id])
  }
}

export default getters
