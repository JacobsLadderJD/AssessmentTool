<template lang="html">
  <EvaluationView :page="5" :nextPage='nextPage' :prevPage='prevPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView
  },
  data: () => ({
    prevPage: 'reflexes',
    nextPage: 'auditory'
  })
}
</script>

<style lang="css" scoped>

</style>
