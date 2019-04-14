<template lang="html">
  <EvaluationView :page="7" :nextPage='nextPage' :prevPage='prevPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView,
  },
  data: () => ({
    prevPage: 'auditory',
    nextPage: 'manual'
  })
}
</script>

<style lang="css" scoped>

</style>
