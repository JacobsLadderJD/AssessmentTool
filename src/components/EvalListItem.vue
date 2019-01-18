<template lang="html">
  <li class="eval-list-item" @click="openEvaluation(id)">
    <div class="info-wrap">
      <h2 class="title">{{fullName}}</h2>
      <div style="display:flex; width:100%;">
        <p style="margin-right: 20px">Last edited:
          <span class="--underlined">{{lastEdited | niceDate}}</span>
        </p>
        <p>By: <span class="--underlined">{{evaluator}}</span></p>
      </div>
    </div>
    <div class="percent-wrap">

    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    lastEdited: {
      type: Date,
      required: true
    },
    evaluator: {
      type: String,
      required: true
    }
  },
  computed: {
    fullName () {
      return this.firstName + " " + this.lastName
    }
  },
  methods: {
    openEvaluation (id) {
      console.log("asdf");
      this.$router.push(`evaluations/${id}`)
    }
  }
}
</script>

<style lang="css" scoped>
.eval-list-item {
  display: flex;
  min-height: 60px;
  box-sizing: border-box;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.75);
  padding: 0 24px;
  margin-bottom: 10px;
}
.title {
  margin-bottom: 0;
  /* font-size: 1.5em; */
}
.info-wrap {
  flex: 1;
}
.percent-wrap {
  flex: 0 0 60px;
}
</style>
