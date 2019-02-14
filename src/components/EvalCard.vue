<template lang="html">
  <div class="card" @click="openEvaluation()">
    <h3 class='card__header'>{{student.firstName}} {{student.lastName}}</h3>
    <div class="card__main">
      <h4>Last Edited:</h4>
      <p>{{evaluation.lastEdited | niceDate}}</p>
      <h4>By:</h4>
      <p>{{evaluation.evaluator}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    evaluation: {
      type: Object,
      required: true
    }
  },
  computed: {
    student () {
      return this.$store.getters.getStudentById(this.evaluation.studentId)
    }
  },
  methods: {
    openEvaluation () {
      this.$router.push(`evaluations/${this.evaluation.id}`);
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  border: 2px solid black;
  flex: 1;
  margin: 20px;
  text-align: center;
}

.card__main {
  margin-top: 100px;
}
</style>
