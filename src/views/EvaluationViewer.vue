<template lang="html">
  <main style="display: flex">
    <FormNav :items="[]" style="flex: 0 0 200px; margin-right:24px;"/>
    <div class="form-viewer">
      <form class="">
        <div class="form-page" v-if="page===1">
          <h1 class="title">Neurodevelopmental Profile</h1>
          <div class="form-section">
            <div class="row" style="display:flex">
              <div class="labelled-input">
                <label for="date-input">Date</label>
                <input id="last-edited-input" name="last-edited" type="date"
                :value="evaluation.lastEdited | dateValue"/>
              </div>
              <div class="labelled-input">
                <label for="status-input">Status</label>
                <input id="status-input" type="text" name="status" :value="evaluation.status"/>
              </div>
            </div>
            <div class="row">
              <div class="labelled-input">

                <label for="code-input">Code</label>
                <input id="code-input" type="text" name="code" :value="evaluation.code"/>
              </div>
            </div>
          </div>
          <div class="form-section">
            <h2>Student</h2>
            <div class="row">
              <div class="labelled-input">
                <label for="name-input">Name</label>
                <input id="name-input" type="text" name="name"
                  :value="student.firstName + ' ' + student.lastName"/>
              </div>
            </div>
            <div class="row">
              <div class="labelled-input">
                <label for="sex-input">Sex</label>
                <select id="sex-input" name="sex">
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                </select>
              </div>
              <div class="labelled-input">
                <label for="age-input">Age</label>
                <input id="age-input" type="text" name="age" :value="evaluation.age"/>
              </div>
            </div>
          </div>
          <div class="form-section">
            <div class="labelled-input">
              <label for="evaluators-input">Evaluator(s)</label>
              <input id="evaluators-input" type="text" name="age"
              :value="evaluation.evaluator"/>
            </div>
          </div>
          <div class="w3-cell-row">
            <div class="w3-container w3-cell">

            </div>
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 1.3em;" @click.prevent="nextPage()">Next</button>
              </div>
            </div>
          </div>
        </div>

        <!-- form page 2 -->

        <div class="form-page" v-if="page===2">

          <h1 class="title" style="text-align:left">Channel Totals</h1>
          <!-- page 2 section 1 -->
          <div class="form-section">
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th>RAW SCORE</th>
                  <th>TOTAL POINTS</th>
                  <th>PERCENTAGE</th>
                  <th>WORKING LEVEL</th>
                  <th>AGE EQUIVALENCE</th>
                </tr>
                <tr>
                  <td><strong>INPUT</strong></td>
                </tr>
                <!-- tactility row -->
                <tr>
                  <td style="text-align:right">Tactility</td>
                  <td>
                    <input id="tactility-raw-score" type="text" name="tactilityRawScore" :value="evaluation.tactilityRawScore"/>
                  </td>
                  <td>/ 132</td>
                  <td></td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <!-- auditory row -->
                <tr>
                  <td style="text-align:right">Auditory</td>
                  <td>
                    <input id="auditory-raw-score" type="text" name="auditoryRawScore" :value="evaluation.auditoryRawScore"/>
                  </td>
                  <td>/ 42</td>
                  <td></td>
                  <td>
                    <input id="auditory-working-level" type="text" name="auditoryWorkingLevel" :value="evaluation.auditoryWorkingLevel"/>
                  </td>
                  <td>
                    <input id="auditory-age-equivalence" type="text" name="auditoryAgeEquivalence" :value="evaluation.auditoryAgeEquivalence"/>
                  </td>
                </tr>
                <!-- visual row -->
                <tr>
                  <td style="text-align:right">Visual</td>
                  <td>
                    <input id="visual-raw-score" type="text" name="visualRawScore" :value="evaluation.visualRawScore"/>
                  </td>
                  <td>/ 54</td>
                  <td></td>
                  <td>
                    <input id="visual-working-level" type="text" name="visualWorkingLevel" :value="evaluation.visualWorkingLevel"/>
                  </td>
                  <td>
                    <input id="visual-age-equivalence" type="text" name="visualAgeEquivalence" :value="evaluation.visualAgeEquivalence"/>
                  </td>
                </tr>
                <tr>
                  <td><strong>OUTPUT</strong></td>
                </tr>
                <!-- manual row -->
                <tr>
                  <td style="text-align:right">Manual</td>
                  <td>
                    <input id="manual-raw-score" type="text" name="manualRawScore" :value="evaluation.manualRawScore"/>
                  </td>
                  <td>/ 90</td>
                  <td></td>
                  <td>
                    <input id="manual-working-level" type="text" name="manualWorkingLevel" :value="evaluation.manualWorkingLevel"/>
                  </td>
                  <td>
                    <input id="manual-age-equivalence" type="text" name="manualAgeEquivalence" :value="evaluation.manualAgeEquivalence"/>
                  </td>
                </tr>
                <!-- language row -->
                <tr>
                  <td style="text-align:right">Language</td>
                  <td>
                    <input id="language-raw-score" type="text" name="languageRawScore" :value="evaluation.languageRawScore"/>
                  </td>
                  <td>/ 69</td>
                  <td></td>
                  <td>
                    <input id="language-working-level" type="text" name="languageWorkingLevel" :value="evaluation.languageWorkingLevel"/>
                  </td>
                  <td>
                    <input id="language-age-equivalence" type="text" name="languageAgeEquivalence" :value="evaluation.languageAgeEquivalence"/>
                  </td>
                </tr>
                <!-- mobility row -->
                <tr>
                  <td style="text-align:right">Mobility</td>
                  <td>
                    <input id="mobility-raw-score" type="text" name="mobilityRawScore" :value="evaluation.mobilityRawScore"/>
                  </td>
                  <td>/ 108</td>
                  <td></td>
                  <td>
                    <input id="mobility-working-level" type="text" name="mobilityWorkingLevel" :value="evaluation.mobilityWorkingLevel"/>
                  </td>
                  <td>
                    <input id="mobility-age-equivalence" type="text" name="mobilityAgeEquivalence" :value="evaluation.mobilityAgeEquivalence"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- page 2 section 2 -->
          <div class="form-section">
            <h1 class="title" style="text-align:left">Dominance</h1>
            <table>
              <tbody>
                <tr>
                  <th>DOMINANCE PROFILE</th>
                </tr>
                <tr>
                  <td style="text-align:right">Hand</td>
                  <td>
                    <input id="hand-dominance" type="text" name="handDominance" :value="evaluation.handDominance"/>
                  </td>
                  <td>Foot</td>
                  <td>
                    <input id="foot-dominance" type="text" name="footDominance" :value="evaluation.footDominance"/>
                  </td>
                  <td>Eye</td>
                  <td>
                    <input id="eye-dominance" type="text" name="eyeDominance" :value="evaluation.eyeDominance"/>
                  </td>
                  <td>Ear</td>
                  <td>
                    <input id="ear-dominance" type="text" name="earDominance" :value="evaluation.earDominance"/>
                  </td>
                </tr>
                <tr>
                  <th>HEMISPHERIC PROFILE</th>
                </tr>
                <tr>
                  <td style="text-align:right">Logic</td>
                  <td>
                    <input id="logic-hemispheric" type="text" name="logicHemispheric" :value="evaluation.logicHemispheric"/>
                  </td>
                  <td>Gestalt</td>
                  <td>
                    <input id="gestalt-hemispheric" type="text" name="gestaltHemispheric" :value="evaluation.gestaltHemispheric"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- page 2 section 3 -->
          <div class="form-section">
            <h1 class="title" style="text-align:left">Processing</h1>
            <table>
              <tbody>
                <tr>
                  <th>WORKING AMOUNT</th>
                </tr>
                <tr>
                  <td>Auditory</td>
                  <td>
                    <input id="auditory-working-amount" type="text" name="auditoryWorkingAmount" :value="evaluation.auditoryWorkingAmount"/>
                  </td>
                  <td>Visual</td>
                  <td>
                    <input id="visual-working-amount" type="text" name="visualWorkingAmount" :value="evaluation.visualWorkingAmount"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- page 2 section 4 -->
          <div class="form-section">
            <h1 class="title" style="text-align:left">Reflexes</h1>
            <table>
              <tbody>
                <tr>
                  <td>Not Able to Access</td>
                  <td>
                    <input id="reflexes-not-accessible" type="text" name="reflexesNotAccessible" :value="evaluation.reflexesNotAccessible"/>
                  </td>
                  <td>Not Integrated</td>
                  <td>
                    <input id="reflexes-not-integrated" type="text" name="reflexesNotIntegrated" :value="evaluation.reflexesNotIntegrated"/>
                  </td>
                  <td>Integrated</td>
                  <td>
                    <input id="reflexes-integrated" type="text" name="reflexesIntegrated" :value="evaluation.reflexesIntegrated"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- page2 section 5 -->
          <div class="form-section">
            <h1 class="title" style="text-align:left">Channel Analysis</h1>
            <p>Not sure how to do these sliders yet :/</p>
          </div>
          <div class="w3-cell-row">
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 1.3em; float:left;" @click.prevent="prevPage()">Previous</button>
              </div>
            </div>
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 1.3em;" @click.prevent="nextPage()">Next</button>
              </div>
            </div>
          </div>
        </div>

        <!-- page 3 -->
        <div class="form-page" v-if="page===3">
          <!-- page 3 section 1 -->
          <div class="form-section">
            <div class="form-section">
              <h1 class="title" style="text-align:left">Dynamics</h1>
              <table>
                <tbody>

                </tbody>
              </table>
            </div>
          </div>
          <div class="w3-cell-row">
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 1.3em; float:left;" @click.prevent="prevPage()">Previous</button>
              </div>
            </div>
            <div class="w3-container w3-cell">
              <div class="form-section form-page-nav">
                <button class="btn btn-info" style="font-size: 1.3em;" @click.prevent="nextPage()">Next</button>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  </main>
</template>

<script>
import FormNav from '@/components/FormNav'

export default {
  data:() => ({
    page: 1,
  }),
  methods: {
      nextPage() {
        this.page++;
      },
      prevPage() {
        this.page--;
      },
  },
  name:"EvaluationViewer",
  components: {
    FormNav
  },
  computed: {
    isNew () {
      return this.$route.params.id === 'new'
    },
    evaluation () {
      return this.$store.getters.getEvaluationById(this.$route.params.id)
    },
    student () {
      return this.$store.getters.getStudentById(this.evaluation.studentId)
    }
  }
}

</script>

<style lang="css" scoped>
.title {
  margin-top: 0;
  text-align: center;
}

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
  display: flex;
  align-items: center;
  margin-bottom: 32px;
}

.labelled-input {
  display: flex;
  flex: 1;
  margin-right: 32px;
  font-size: 1.3em;
  /* min-height: 40px; */
}

.labelled-input label {
  flex: 0 0 50px;
  margin-right: 16px;
  text-align: right;
  padding: .5em .5em;

}

.labelled-input input {
  flex: 1 0 250px;
  padding: .5em .5em;
}
</style>
