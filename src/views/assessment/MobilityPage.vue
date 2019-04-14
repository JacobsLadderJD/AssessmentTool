<template lang="html">
  <EvaluationView :page='10' :nextPage='nextPage' :prevPage='prevPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView
  },
  data: () => ({
    prevPage: 'language',
    nextPage: 'sensory'
  })
}
</script>

<style lang="css" scoped>

</style>
