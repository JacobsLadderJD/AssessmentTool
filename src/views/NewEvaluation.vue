<template lang="html">
  <div>
    <h1>New Evaluation</h1>
    <input v-model="studentQuery" type="text" name="" value="">
    <ul v-show="searching">
      <li
        v-for="(student, index) in students"
        :key="index"
        @click="selectStudent(student.id)">
        {{student.firstName}} {{student.lastName}}
      </li>
    </ul>
  </div>
</template>

<script>
import MockJLCApi from "@/fixtures/MockApi"
export default {
  name: "NewEvaluation",
  data: () => ({
    studentQuery: "",
    students: [],
    searching: false
  }),
  watch: {
    studentQuery (newQuery, oldQuery) {
      this.searching = true
      MockJLCApi.searchStudentByNames(this.studentQuery)
        .then(results => this.students = results)
        .catch(e => this.students = [])
    }
  },
  methods: {
    selectStudent (id) {
      alert('Selected student' + id)
    }
  }

}
</script>

<style lang="css" scoped>
</style>
