<template lang="html">
  <EvaluationView :page="4" :nextPage='nextPage' :prevPage='prevPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView
  },
  data: () => ({
    prevPage: 'details',
    nextPage: 'tactility'
  })
}
</script>

<style lang="css" scoped>

</style>
