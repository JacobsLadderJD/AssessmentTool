<template lang="html">

  <div>
    <h4> {{ subName }} </h4>
    <div class="channel-score">
      <div class="score">
        <label for="">Not Integrated</label>
        <input v-model="val"
          type="radio" value="Not Integrated"
          @input="update($event.target.value)">
      </div>
      <div class="score">
        <label for="">Integrated</label>
        <input v-model="val"
          type="radio" value="Integrated"
          @input="update($event.target.value)">
      </div>
      <div class="score">
        <label for="">N/A</label>
        <input v-model="val"
          type="radio" value="N/A"
          @input="update($event.target.value)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChannelScore",
  props: {
    value: {
      required: true,
    },
    subName: {
      type: String
    },
  },
  data: () => ({
    val: "N/A"
  }),
  methods: {
    update (value) {
      this.$emit('input', value)
    }
  },
  watch: {
    value (newVal, oldVal) {
      this.val = newVal
    }
  },
  mounted() {
    this.val = this.value
  }
}
</script>

<style lang="css" scoped>
.channel-score {
  display: flex;
  width: 50%;
}
.channel-score .score {
  flex:1;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.channel-score .score label {
  flex:1;
  margin-bottom: 5px;
}
.channel-score .score input {
  flex:1;
}
</style>
