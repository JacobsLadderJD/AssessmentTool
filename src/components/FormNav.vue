<template lang="html">
  <nav>
    <ul>
      <!--
        <li><a href="#">Student Info</a></li>
        <li><a>Overview</a></li>
        <li><a>Details</a></li>
        <li><a>Reflexes</a></li>
        <li><a>Tactility Channel</a></li>
        <li><a>Auditory Channel</a></li>
        <li><a>Visual Channel</a></li>
        <li><a>Manual Channel</a></li>
        <li><a>Language Channel</a></li>
        <li><a>Mobility Channel</a></li>
        <li><a>Sensory Seeking</a></li>
        <li><a>Sensitivities</a></li>
      -->
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
