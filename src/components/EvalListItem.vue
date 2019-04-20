<template lang="html">
  <li class="eval-list-item" @click="openEvaluation()">
    <div class="info-wrap">
      <h2 class="title">{{student | fullName}}</h2>
      <div style="display:flex; width:100%;">
        <p style="margin-right: 20px">Last edited:
          <span class="--underlined">{{evaluation.editedAt}}</span>
        </p>
        <p>By:
          <span
            v-for="evaluator in evaluators"
            class="--underlined">
            {{evaluator | fullName}}</span>,&nbsp;
        </p>
      </div>
    </div>
    <div class="percent-wrap">

    </div>
  </li>
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
      return this.evaluation.student
    },
    evaluators () {
      return this.evaluation.evaluators
    }
  },
  methods: {
    openEvaluation () {
      this.$router.push(`evaluations/${this.evaluation.id}`)
    }
  }
}
</script>

<style lang="css" scoped>
.eval-list-item {
  display: flex;
  min-height: 60px;
  box-sizing: border-box;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.75);
  padding: 0 24px;
  margin-bottom: 10px;
}
.title {
  margin-bottom: 0;
  /* font-size: 1.5em; */
}
.info-wrap {
  flex: 1;
}
.percent-wrap {
  flex: 0 0 60px;
}
</style>
