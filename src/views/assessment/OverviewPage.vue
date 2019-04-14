<template lang="html">
  <EvaluationView :page='2' :nextPage='nextPage' :prevPage='prevPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView
  },
  data: () => ({
    prevPage: '',
    nextPage: 'details'
  })
}
</script>

<style lang="css" scoped>

</style>
