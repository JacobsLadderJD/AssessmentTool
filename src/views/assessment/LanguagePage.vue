<template lang="html">
  <EvaluationView :page="9" :nextPage='nextPage' :prevPage='prevPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView
  },
  data: () => ({
    prevPage: 'manual',
    nextPage: 'mobility'
  })
}
</script>

<style lang="css" scoped>

</style>
