<template lang="html">
  <div>
    <h1>New Evaluation</h1>
    <input v-model="studentQuery" type="text" name="" value="">
    <ul v-show="searching">
      <li
        v-for="(student, index) in students"
        :key="index"
        @click="selectStudent(student.id)">
        {{student | fullName}}
      </li>
    </ul>
  </div>
</template>

<script>
import types from "@/store/evaluation/types"
import api from "@/api"
export default {
  name: "CreateEvaluation",
  data: () => ({
    studentQuery: "",
    students: [],
    searching: false
  }),
  watch: {
    studentQuery (newQuery, oldQuery) {
      this.searching = true
      api.students.getAll()
        .then(data => {
          this.students =
            data.results.filter((student) =>
              (student.firstName + " " + student.lastName).includes(newQuery))
        })
        .catch(e => this.students = [])
    }
  },
  methods: {
    selectStudent (studentId) {
      // const vm = this
      // this.$store.dispatch(types.CREATE_EVALUATION, {studentId})
    }
  }

}
</script>

<style lang="css" scoped>
</style>
