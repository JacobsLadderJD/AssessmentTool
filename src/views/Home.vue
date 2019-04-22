<template>
  <div class="home">
    <div class="button-wrap">
      <button class="btn --full-width"
        @click="$router.push({ name: 'create-evaluation'})">+ NEW EVALUATION</button>
    </div>
    <div class="recent-evals">
      <div class="recent-evals__title">
        <h1 class="title">Recent Evaluations</h1>
        <form @submit.prevent="search">
        <input class="search" type="text" id="search"
          placeholder="Search"
          v-model="query"/>
        </form>
      </div>
      <div class="evaluation-list">
        <EvalCard
          class="evaluation-card"
          v-for="(e, index) in recentEvaluations"
          :key="index"
          :evaluation="e"/>
        <div class="evaluation-list-item --fake"
          @click="$router.push({name: 'evaluations'})">
          <h1>View<br/>More</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EvalCard from '@/components/EvalCard.vue'
import api from '@/api'

export default {
  name: 'home',
  components: {
    EvalCard
  },
  data: () => ({
    recentEvaluations: [],
    query: ""
  }),
  methods: {
    search () {
      this.$router.push({
        name: 'evaluations',
        query: {
          query: this.query
        }
      })
    }
  },
  computed: {
    filteredEvaluations () {
      return this.recentEvaluations.filter(ev => {
        const fullStudentName = ev.student.firstName + ' ' + ev.student.lastName
        return !this.query || fullStudentName.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  },
  mounted () {
    api.evaluations.getAll()
      .then(({results}) => {
        this.recentEvaluations = results.slice(0,3)
      })
  }
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
