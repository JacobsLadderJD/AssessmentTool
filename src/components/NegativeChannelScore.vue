<template lang="html">

  <div>
    <h4> {{ subName }} </h4>

    <div class="channel-score">

      <div class="score">
        <label for="">-3</label>
        <input v-model="val"
          type="radio" value="-3"
          @input="update($event.target.value)">
      </div>
      <div class="score">
        <label for="">-2</label>
        <input v-model="val"
          type="radio" value="-2"
          @input="update($event.target.value)">
      </div>
      <div class="score">
        <label for="">-1</label>
        <input v-model="val"
          type="radio" value="-1"
          @input="update($event.target.value)">
      </div>
      <div class="score">
        <label for="">0</label>
        <input v-model="val"
          type="radio" value="0"
          @input="update($event.target.value)">
      </div>
      <div class="score"></div>
      <div class="score"></div>
      <div class="score"></div>
      <div class="score">
        <label for="">N/A</label>
        <input v-model="val"
          type="radio" value=null
          @input="update($event.target.value)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NegativeChannelScore",
  props: {
    value: {
      required: true,
    },
    subName: {
      type: String
    },
  },
  data: () => ({
    val: "N/A",
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
  methods: {
    // if score changes, notify the parent with $emit
    update() {
      this.$emit("input", this.score);
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
  flex-flow: row;
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
