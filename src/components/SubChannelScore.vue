<template lang="html">
  <div>
    <h4>{{subName}}</h4>
    <ChannelScore v-model="score" @input="update()"/>
  </div>
</template>

<script>
import ChannelScore from "@/components/ChannelScore"
export default {
  name: "SubChannelScore", //whats the name of our component
  components: {
    ChannelScore,     //what does our component import?
  },
  props: {
    value: {
      required: true,
    },
    subName: {
      type: String
    },
  },
  data: () => ({    //make a function that returns an object
    score: "N/A",
  }),
  watch: {
    // if parent value changes, change score
    value(newVal, oldVal) {
      this.score = newVal;
    }
  },
  methods: {
    // if score changes, notify the parent with $emit
    update() {
      this.$emit("input", this.score);
    }
  },
  mounted() {
    this.score = this.value;
  }
}
</script>

<style lang="css" scoped>

</style>
