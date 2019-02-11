<template lang="html">

</template>

<script>
export default {
  name: "AssessmentForm",
  computed: {
     assessment () {
       this.$store.getters.getAssessmentById(this.$route.params.id)
     }
  }
}
</script>

<style lang="css" scoped>
</style>
