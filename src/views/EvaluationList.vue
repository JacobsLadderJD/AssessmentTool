<template lang="html">
  <main>
    <div class="heading">
      <h1 class="title">Evaluations</h1>
      <input class="search" type="text" id="search" placeholder="Search"/>
    </div>
    <ul class="eval-list">
      <EvalListItem
        class="eval-list-item"
        v-for="ev in evaluations"
        :key="ev.id"
        :evaluation="ev"/>
    </ul>
  </main>
</template>

<script>
import EvalListItem from '@/components/EvalListItem'
export default {
  components: {
    EvalListItem
  },
  computed: {
    evaluations () {
      return this.$store.getters.allEvaluations;
    }
  },
}
</script>

<style lang="css" scoped>
.heading {
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

.eval-list {
  padding: 0 32px;
}

</style>
