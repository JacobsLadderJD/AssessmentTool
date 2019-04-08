<template lang="html">
  <div>
    <h1>New Evaluation</h1>
    <input v-model="studentQuery" type="text" name="" value="">
    <ul>
      <li
        class = "eval-list-item"
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
              (student.firstName + " " + student.lastName).toLowerCase().includes(newQuery.toLowerCase()))
        })
        .catch(e => this.students = [])
    }
  },
  methods: {
    selectStudent (studentId) {
      const vm = this
      api.evaluations.create(studentId)
        .then(id => {
          vm.$router.push({
            name:'evaluation',
            params: {id: id}
          })
        })
    }
  }, 
  mounted() {
    api.students.getAll()
        .then(data => {
          this.students = data.results
        })
        .catch(e => this.students = [])
  }

}
</script>

<style lang="css" scoped>
.eval-list-item {
  display: flex;
  min-height: 60px;
  width: 80%;
  box-sizing: border-box;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.75);
  padding: 0 24px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: Verdana, Geneva, sans-serif;
}

</style>
