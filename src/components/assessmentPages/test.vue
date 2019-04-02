<template lang="html">
  <div class="level">
    <h2 class="level-head">
      LEVEL II
    </h2>
    <div class="question">
      <h3 class="prompt">Twist Cap</h3>
      <div class="comment">
        <textarea v-model="d.twistCap.comment"></textarea>
      </div>
      <div class="subprompts">
        <!-- <ChannelScore class="channel-score" v-model="d.twistCap.off"/> -->
        <!-- <NegativeChannelScore class="channel-score" v-model="d.twistCap.on"/> -->
        <SubChannelScore subName="Twist On" v-model="d.twistCap.on"/>
        <SubChannelScore subName="Twist Off" v-model="d.twistCap.off"/>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelScore from "@/components/ChannelScore"
import NegativeChannelScore from "@/components/NegativeChannelScore"
import SubChannelScore from "@/components/SubChannelScore"
export default {
  components: {
    ChannelScore,
    NegativeChannelScore,
    SubChannelScore,
  },
  data () {
    return {
      d: {
        twistCap: {
          comment: "",
          type: "ChannelScore",
          off: "-3",
          on: "+3",
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>

.question {
  display: grid;
  grid-template-areas:
              "prompt   prompt"
              "comment  scores";
}

.prompt {
  grid-area: prompt;
}

.comment {
  grid-area: comment;
  height: 100%;
}

.comment textarea {
  resize: none;
  overflow: auto;
  width: 75%;
  height: 100%;
}

.subprompts {
  grid-area: scores;
}

</style>
