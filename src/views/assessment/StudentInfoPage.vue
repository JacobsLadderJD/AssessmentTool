<template lang="html">
  <EvaluationView :page="1" :nextPage='nextPage'/>
</template>

<script>
import EvaluationView from '@/components/EvaluationView'

export default {
  components: {
    EvaluationView,
  },
  data: () => ({
    nextPage: 'overview'
  })
}
</script>

<style lang="css" scoped>

</style>
