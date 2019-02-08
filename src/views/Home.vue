<template>
  <div class="home">
    <div class="button-wrap">
      <button class="btn --full-width" @click="$router.push('evaluations/3')">+ NEW EVALUATION</button>
    </div>
    <div class="recent-evals">
      <div class="recent-evals__title">
        <h1 class="title">Recent Evaluations</h1>
        <input class="search" type="text" id="search" placeholder="Search"/>
      </div>
      <div class="evaluation-list">
        <EvalCard
          class="evaluation-card"
          v-for="(e, index) in recentEvaluations"
          :key="index"
          :evaluation="e"/>
        <div class="evaluation-list-item --fake" @click="$router.push('evaluations')">
          <h1>View<br/>More</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EvalCard from '@/components/EvalCard.vue'

export default {
  name: 'home',
  components: {
    EvalCard
  },
  computed: {
    recentEvaluations () {
      return this.$store.getters.allEvaluations;
    }
  },
}
</script>

<style scoped>
.button-wrap {
  margin: 32px 0;
}
.btn {
  background-color: #39dd7e;
  border: none;
  padding: 12px;
  font-size: 1.5em;
  color: white;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,.75);
  cursor: pointer;
}
.--full-width {
  width: 100%;
}

.recent-evals__title {
  display: flex;
  align-items: center;
}

.title {
  flex: 1 0;
  text-align: left;
}

.search {
  flex: 0 0 400px;
  max-height: 40px;
  font-size: 1.25em;
}

.evaluation-list {
  display: flex;
}

.evaluation-list-item {
  border: 2px solid black;
  flex: 1;
  margin: 20px;
}

.evaluation-list-item.--fake {
  display: flex;
  align-items: center;
  justify-content:center;
}
</style>
