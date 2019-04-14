<template lang="html">
  <EvaluationView :page="11" :nextPage='nextPage' :prevPage='prevPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView
  },
  data: () => ({
    prevPage: 'mobility',
    nextPage: 'sensitivities'
  })
}
</script>

<style lang="css" scoped>

</style>
