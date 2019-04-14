<template lang="html">
  <nav>
    <ul>
      <li>
        <router-link
          :to="{ name: 'eval-info', params: $route.params }">
          Student Info
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'eval-overview', params: $route.params }">
          Overview
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'eval-details', params: $route.params }">
          Details
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'eval-reflexes', params: $route.params }">
          Reflexes
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'eval-tactility', params: $route.params }">
          Tactility Channel
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'eval-auditory', params: $route.params }">
          Auditory Channel
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'eval-visual', params: $route.params }">
          Visual Channel
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'eval-manual', params: $route.params }">
          Manual Channel
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'eval-language', params: $route.params }">
          Language Channel
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'eval-mobility', params: $route.params }">
          Mobility Channel
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'eval-sensory', params: $route.params }">
          Sensory Seeking
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'eval-sensitivities', params: $route.params }">
          Sensitivities
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "FormNav",

}
</script>

<style lang="css" scoped>

</style>
