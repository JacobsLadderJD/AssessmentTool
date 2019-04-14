<template lang="html">
  <EvaluationView :page="8" :nextPage='nextPage' :prevPage='prevPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView
  },
  data: () => ({
    prevPage: 'visual',
    nextPage: 'language'
  })
}
</script>

<style lang="css" scoped>

</style>
