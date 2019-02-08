const getters = {
  getEvaluationById (state) {
    return (id) => state.evaluations[id]
  },
  allEvaluations (state) {
    return state.evaluationIds.map((id) => state.evaluations[id])
  }
}

export default getters
