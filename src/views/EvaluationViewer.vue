<template lang="html">
  <main style="display: flex">
    <FormNav :items="[]" style="flex: 0 0 200px; margin-right:24px;"/>
    <div class="form-viewer">
      <div class="form-page" v-if="page===1">
        <h1 class="title">Neurodevelopmental Profile</h1>
        <div class="form-section">
          <div class="row">
            <div class="item" style="margin-bottom: 4vw;">
              <label for="date-input">Date</label>
              <input id="last-edited-input" name="last-edited" type="date"
              v-model="evaluation.editedAt"/>
            </div>
            <div class="item" style="margin-bottom: 4vw;">
              <label for="status-input">Status</label>
              <input id="status-input" type="text" name="status" v-model="student.status"/>
            </div>
          </div>
          <div class="row">
            <div class="item" style="margin-bottom: 4vw;">
              <label for="code-input">Code</label>
              <input id="code-input" type="text" name="code" v-model="student.code"/>
            </div>
          </div>
        </div>
        <div class="form-section">
          <h2>Student</h2>
          <div class="row">
            <div class="item" style="margin-bottom: 4vw;">
              <label for="name-input">Name</label>
              <input id="first-name-input" type="text" name="firstName"
                :value="student.firstName" disabled/>
              <input id="last-name-input" type="text" name="lastName"
              :value="student.lastName" disabled/>
            </div>
          </div>
          <div class="row">
            <div class="item" style="margin-bottom: 4vw;">
              <label for="sex-input">Sex</label>
              <select id="sex-input" name="sex" :selected="student.gender" disabled>
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
            </div>
            <div class="item" style="margin-bottom: 4vw;">
              <label for="age-input">Birthdate</label>
              <input id="age-input" type="text" name="birthdate"
                :value="student.birthdate" disabled/>
            </div>
          </div>
        </div>
        <div class="form-section">
          <div class="item" style="margin-bottom: 4vw;">
            <label for="evaluators-input">Evaluator(s)</label>
            <h4>{{ evaluator | fullName }}</h4>
            <!-- <input id="evaluators-input" type="text" name="evaluators"
            v-model="evaluatorSearch"/> -->

          </div>
        </div>
      </div>

      <!-- form page 2 -->

      <OverviewPage v-else-if="page===2"
        :section="evaluation" :evalId="evaluation.id"/>

      <DetailsPage v-else-if="page===3"
        :section="evaluation" :evalId="evaluation.id"/>

      <ReflexesPage ref="reflex" v-else-if="page===4"
        :section="evaluation.reflexSection" :evalId="evaluation.id"/>

      <TactilityChannel  ref="tactility" v-else-if="page===5"
        :section="evaluation.tactilitySection" :evalId="evaluation.id"/>

      <AuditoryChannel  ref="auditory" v-else-if="page===6"
        :section="evaluation.auditorySection" :evalId="evaluation.id"/>

      <VisualChannel ref="visual" v-else-if="page===7"
        :section="evaluation.visualSection" :evalId="evaluation.id"/>

      <ManualChannel ref="manual" v-else-if="page===8"
        :section="evaluation.manualSection" :evalId="evaluation.id"/>

      <LanguageChannel ref="language" v-else-if="page===9"
        :section="evaluation.languageSection" :evalId="evaluation.id"/>

      <MobilityChannel ref="mobility" v-else-if="page===10"
        :section="evaluation.mobilitySection" :evalId="evaluation.id"/>

      <SensorySeekingPage ref="sensory" v-else-if="page===11"
        :section="evaluation.sensorySection" :evalId="evaluation.id"/>

      <SensitivitiesPage ref="sensitivities" v-else-if="page===12"
        :section="evaluation.sensitivitiesSection" :evalId="evaluation.id"/>


      <div class="form-section">
        <div class="w3-cell-row">
          <div class="w3-container w3-cell">
            <div class="form-section form-page-nav">
              <button v-if="page !== 1" class="btn btn-info" style="font-size: 1.3em; float:left;" @click.prevent="prevPage()">Previous</button>
            </div>
          </div>
          <div class="w3-container w3-cell">
            <div class="form-section form-page-nav">
              <button v-if="page < lastPage" class="btn btn-info" style="font-size: 1.3em;" @click.prevent="nextPage()">Next</button>
              <button v-if="page === lastPage" class="btn btn-info" style="font-size: 1.3em;" @click.prevent="submit()">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import api from '@/api'
import FormNav from '@/components/FormNav'
import types from '@/store/evaluation/types'
import OverviewPage from '@/components/assessmentPages/OverviewPage'
import DetailsPage from '@/components/assessmentPages/DetailsPage'
import ReflexesPage from '@/components/assessmentPages/ReflexesPage'
import TactilityChannel from '@/components/assessmentPages/TactilityChannel'
import AuditoryChannel from '@/components/assessmentPages/AuditoryChannel'
import VisualChannel from '@/components/assessmentPages/VisualChannel'
import ManualChannel from '@/components/assessmentPages/ManualChannel'
import LanguageChannel from '@/components/assessmentPages/LanguageChannel'
import MobilityChannel from '@/components/assessmentPages/MobilityChannel'
import SensorySeekingPage from '@/components/assessmentPages/SensorySeekingPage'
import SensitivitiesPage from '@/components/assessmentPages/SensitivitiesPage'

export default {
  name:"EvaluationViewer",
  components: {
    FormNav,
    OverviewPage,
    DetailsPage,
    ReflexesPage,
    TactilityChannel,
    AuditoryChannel,
    VisualChannel,
    ManualChannel,
    LanguageChannel,
    MobilityChannel,
    SensorySeekingPage,
    SensitivitiesPage,
  },
  data:() => ({
    page: 1,
    lastPage: 12,
    evaluation: {}
  }),
  methods: {
    nextPage() {
      if (this.currentPage) {
        this.currentPage.submit()
      }
      this.page++;
    },
    prevPage() {
      this.page--;
    },
    submit () {
      this.$store.dispatch(types.UPDATE_EVALUATION, {
        ...this.evaluation, lastEdited: new Date(this.evaluation.editedAt)})
    }
  },
  computed: {
    isNew () {
      return this.$route.params.id === 'new'
    },

    currentPage () {
      return ({
        4: this.$refs.reflex,
        5: this.$refs.tactility,
        6: this.$refs.auditory,
        7: this.$refs.visual,
        8: this.$refs.manual,
        9: this.$refs.language,
        10: this.$refs.mobility,
        11: this.$refs.sensory,
        12: this.$refs.sensitivities
      })[this.page]
    },

    // evaluation () {
    //   return this.$store.getters.getEvaluationById(this.$route.params.id)
    // },
    evaluator () {
      return this.evaluation.evaluator || {
        firstName: "",
        lastName: "",
        id: null
      }
    },
    student () {
      return this.evaluation.student || {
        status: null,
        code: null,
        id: null,
        firstName: "",
        lastName: ""
      }
    }
  },
  mounted () {
    //this.temp = api.getEvaluationById(this.$route.params.id)
    // this.$store.getters.getEvaluationById(this.$route.params.id)
    api.evaluations.get(this.$route.params.id)
      .then(evaluation => {
        this.evaluation = evaluation
      })
  }
}

</script>

<style lang="css" scoped>

nav {
  border-right: 1px solid grey;
}

table {
  display: table;
  vertical-align: middle;
}
th {
  display: table-cell;
  vertical-align: inherit;
  text-align: left;
  padding-right:30px;
  padding-bottom: 5px;
  padding-top: 5px;
}
tr {

}
td {
  padding-right:15px;
  text-align: center;
}

.form-viewer {
  flex: 1;
  box-sizing: border-box;
  padding-bottom: 64px;
}

.form-page-nav {
  text-align: right;
}

.form-section {
  padding: 16px 0;
  border-bottom: 1px solid grey;
}
.form-section:last-child {
  border-bottom: none;

}
.row {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.column {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  white-space: normal;
}

.item {
  flex: 1 1 auto;
  white-space: normal;
  width: 100%;
  word-wrap: normal;
  font-size: 2vw;
}

.title {
  font-size: 4vw;
  margin-bottom: 5vw;
  text-align: center;
}

label {
  margin-right:2vw;
}

h2 {
  margin-bottom: 4vw;
}

.grid1 {
  display: grid;
  grid-template-columns: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr;
  word-wrap: normal;
  width: 50%;
  justify-items: center;
}

.grid2 {
  display: grid;
  grid-template-columns: [first] auto [second] 1fr [third] 1fr [fourth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr;
  word-wrap: normal;
  justify-items: center;
  width: 75%;
  align-items: center;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid3 {
  display: grid;
  grid-template-columns: [first] auto [second] 1fr [third] 1fr [fourth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr;
  word-wrap: normal;
  justify-items: center;
  width: 75%;
  align-items: center;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid4 {
  display: grid;
  grid-template-columns: [first] auto [second] auto [third] 1fr [fourth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid5 {
  display: grid;
  grid-template-columns: [first] 3fr [second] 2fr [third] 2fr [fourth] 1fr [fifth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr [thirteenth] 1fr [fourteenth] 1fr [fifteenth] 1fr [sixteenth] 1fr [seventeenth] 1fr [eighteenth] 1fr [nineteenth] 1fr [twentieth] 1fr [twentyfirst] 1fr [twentysecond] 1fr [twentythird] 1fr [twentyfourth] 1fr [twentyfifth] 1fr [twentysixth] 1fr [twentyseventh] auto [twentyeigth] 1fr [twentyninth] 1fr [thirtieth] 1fr [thirtyfirst] 1fr [thirtysecond] 1fr [thirtythird] 1fr [thirtyfourth] 1fr [thirtyfifth] 1fr [thirty sixth] 1fr [thirtyseventh] 1fr [thirtyeigth] 1fr [thirtyninth] 1fr [fortieth] 1fr [fortyfirst] 1fr [fortysecond] 1fr [fortythird] 1fr [fortyfourth] 1fr [fortyfifth] 1fr [fortysixth] 1fr [fortyseventh] 1fr [fortyeigth] 1fr [fortyninth] 1fr [fiftieth] 1fr [fiftyfirst] 1fr [fiftysecond] 1fr [fiftythird] 1fr [fiftyfourth] 1fr [fiftyfifth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid6 {
  display: grid;
  grid-template-columns: [first] auto [second] 9fr [third] auto [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] auto [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid7 {
  display: grid;
  grid-template-columns: [first] auto [second] 9fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] auto [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.cell {
  white-space: normal;
  word-wrap: normal;
}
</style>
