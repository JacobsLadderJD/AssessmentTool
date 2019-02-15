<template>
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
</template>
