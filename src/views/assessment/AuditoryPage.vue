<template lang="html">
  <EvaluationView :page="6" :nextPage='nextPage' :prevPage='prevPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView
  },
  data: () => ({
    prevPage: 'tactility',
    nextPage: 'visual'
  })
}
</script>

<style lang="css" scoped>

</style>
