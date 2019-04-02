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
import api from '@/api'
export default {
  components: {
    EvalListItem
  },
  data: () => ({
    evaluations: [],
    count: 0,
    prev: null,
    next: null
  }),
  mounted () {
		api.evaluations.getAll()
			.then(evalData => {
				this.evaluations = evalData.results
				this.count = evalData.count
				this.prev = evalData.prev
				this.next = evalData.next
			});
  }
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
