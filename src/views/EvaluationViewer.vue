<template lang="html">
  <main style="display: flex">
    <FormNav :items="[]" style="flex: 0 0 200px; margin-right:24px;"/>
    <div class="form-viewer">
      <form class="">
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
        <div class="form-section form-page-nav">
          <button class="btn btn-info" style="font-size: 1.3em;" @click.prevent="">Next</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import FormNav from '@/components/FormNav'

export default {
  name:"EvaluationViewer",
  components: {
    FormNav
  },
  computed: {
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
