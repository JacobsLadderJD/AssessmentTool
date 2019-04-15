<template lang="html">
  <div class="comment">
    <h4>{{label}}</h4>
    <textarea v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        :class="(resizeable) ? '--resizeable': ''"></textarea>
  </div>
</template>

<script>
export default {
  name:"CommentBlock",
  inheritAttrs: false,
  props: {
    value: {
      required: true,
      type: String
    },
    label: {
      type: String,
      default: "Comment"
    },
    resizeable: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="css" scoped>
.comment {
  height: 100%;
}

.comment textarea {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  overflow: auto;
  resize: none;
  width: 75%;
  height: 100%;
}

.comment textarea.--resizeable {
  resize: vertical;
}
</style>
