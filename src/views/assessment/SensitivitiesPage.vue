<template lang="html">
  <EvaluationView :page='12' :prevPage='prevPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView
  },
  data: () => ({
    prevPage: 'sensory',
  })
}
</script>

<style lang="css" scoped>

</style>
