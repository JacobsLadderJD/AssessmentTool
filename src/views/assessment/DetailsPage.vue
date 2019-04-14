<template lang="html">
  <EvaluationView :page="3" :nextPage='nextPage' :prevPage='prevPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView
  },
  data: () => ({
    prevPage: 'overview',
    nextPage: 'reflexes'
  })
}
</script>

<style lang="css" scoped>

</style>
