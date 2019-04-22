<template lang="html">
  <a :href="link" target="_blank">
    <button class="btn btn-info" type="button" name="exportToExcel">
      Export Data
    </button>
  </a>
</template>

<script>
export default {
  name: 'ExcelExportButton',
  props: {
    evaluationId: {
      required: true,
      type: Number
    }
  },
  computed: {
    link () {
      return `http://localhost:8000/export/evaluations/${this.evaluationId}`
    }
  }
}
</script>

<style lang="css" scoped>

</style>
