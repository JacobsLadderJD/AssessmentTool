<template lang="html">
  <nav>
    <ul>
      <li>Start Page</li>
      <ul>
        <li>Basic</li>
        <li>Student</li>
        <li>Evaluation</li>
      </ul>
      <li>Taste and Dominant Limb</li>
      <ul>
        <li>Basic</li>
        <li>Student</li>
        <li>Evaluation</li>
      </ul>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "FormNav",
  props: {
    pages: {
      type: Array
    }
  }
}
</script>

<style lang="css" scoped>

</style>
