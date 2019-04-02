import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = () => ({
  evaluationIds: [2, 1, 0],
  evaluations: {
    0: {
      evaluator: "Some User",
      tactilityRawScore: "24",
      auditoryRawScore: "25",
      auditoryWorkingLevel: "3",
      auditoryAgeEquivalence: "",
      visualRawScore: "",
      visualWorkingLevel: "",
      visualAgeEquivalence: "",
      manualRawScore: "",
      manualWorkingLevel: "",
      manualAgeEquivalence: "",
      languageRawScore: "",
      languageWorkingLevel: "",
      languageAgeEquivalence: "",
      mobilityRawScore: "",
      mobilityWorkingLevel: "",
      mobilityAgeEquivalence: "",
      handDominance: "",
      footDominance: "",
      eyeDominance: "",
      earDominance: "",
      logicHemispheric: "",
      gestaltHemispheric: "",
      auditoryWorkingAmount: "",
      visualWorkingAmount: "",
      reflexesNotAccessible:"",
      reflexesNotIntegrated: "",
      reflexesIntegrated: ""
    },
    1: {
      evaluator: "Some User",
      tactilityRawScore: "24",
      auditoryRawScore: "25",
      auditoryWorkingLevel: "3",
      auditoryAgeEquivalence: "",
      visualRawScore: "",
      visualWorkingLevel: "",
      visualAgeEquivalence: "",
      manualRawScore: "",
      manualWorkingLevel: "",
      manualAgeEquivalence: "",
      languageRawScore: "",
      languageWorkingLevel: "",
      languageAgeEquivalence: "",
      mobilityRawScore: "",
      mobilityWorkingLevel: "",
      mobilityAgeEquivalence: "",
      handDominance: "",
      footDominance: "",
      eyeDominance: "",
      earDominance: "",
      logicHemispheric: "",
      gestaltHemispheric: "",
      auditoryWorkingAmount: "",
      visualWorkingAmount: "",
      reflexesNotAccessible:"",
      reflexesNotIntegrated: "",
      reflexesIntegrated: "",
      // ...Evaluation(1, 1, 1, null, new Date("11/23/2018"))
    },
    2: {
      evaluator: "Some User",
      tactilityRawScore: "24",
      auditoryRawScore: "25",
      auditoryWorkingLevel: "3",
      auditoryAgeEquivalence: "",
      visualRawScore: "",
      visualWorkingLevel: "",
      visualAgeEquivalence: "",
      manualRawScore: "",
      manualWorkingLevel: "",
      manualAgeEquivalence: "",
      languageRawScore: "",
      languageWorkingLevel: "",
      languageAgeEquivalence: "",
      mobilityRawScore: "",
      mobilityWorkingLevel: "",
      mobilityAgeEquivalence: "",
      handDominance: "",
      footDominance: "",
      eyeDominance: "",
      earDominance: "",
      logicHemispheric: "",
      gestaltHemispheric: "",
      auditoryWorkingAmount: "",
      visualWorkingAmount: "",
      reflexesNotAccessible:"",
      reflexesNotIntegrated: "",
      reflexesIntegrated: "",
      // ...Evaluation(2, 2, 1, null,new Date("11/25/2018"))
    }
  },
})


export default {
  state,
  getters,
  mutations,
  actions
}
