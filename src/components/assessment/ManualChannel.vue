<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Manual Channel</h1>
      <div class="level">
        <h2 class="level-head">
          LEVEL II
        </h2>
        <h1 class="prompt">Volitional Release of an Object</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.objectRelease.value"/>
        </div>
        <CommentBlock v-model="d.objectRelease.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL III
        </h2>
        <h1 class="prompt">Volitional Grasp of an Object</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.objectGrasp.value"/>
        </div>
        <CommentBlock v-model="d.objectGrasp.comment"/>

        <h1 class="prompt">Brings Hands to Midline</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.handsToMidline.value"/>
        </div>
        <CommentBlock v-model="d.objectGrasp.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL IV
        </h2>
        <h1 class="prompt">Transfer Objects</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.transfersObjects.value"/>
        </div>

        <CommentBlock v-model="d.transfersObjects.comment"/>

        <h1 class="prompt">Cortical Opposition</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.corticalOpposition.right"/>
          <NegativeChannelScore subName="Left" v-model="d.corticalOpposition.left"/>
          <NegativeChannelScore subName="Simultaneously" v-model="d.corticalOpposition.both"/>
        </div>

        <CommentBlock v-model="d.corticalOpposition.comment"/>

        <h1 class="prompt">Claps</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.claps.value"/>
        </div>
        <CommentBlock v-model="d.claps.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL V
        </h2>
        <h1 class="prompt">Stacking Blocks</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.blockStacking.value"/>
        </div>
        <CommentBlock v-model="d.blockStacking.comment"/>

        <h1 class="prompt">Beans in a Bottle</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.beanBottle.value"/>
        </div>
        <CommentBlock v-model="d.beanBottle.comment"/>

        <h1 class="prompt">Pronation of Wrists</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.wristPronation.right"/>
          <NegativeChannelScore subName="Left" v-model="d.wristPronation.left"/>
        </div>
        <CommentBlock v-model="d.wristPronation.comment"/>

        <h1 class="prompt">Supination of Wrists</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.wristSupination.right"/>
          <NegativeChannelScore subName="Left" v-model="d.wristSupination.left"/>
        </div>
        <CommentBlock v-model="d.wristSupination.comment"/>

        <h1 class="prompt">Initial Coloring</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialColoring.value"/>
        </div>
        <CommentBlock v-model="d.initialColoring.comment"/>

        <h1 class="prompt">Twist Cap</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Off" v-model="d.twistCap.off"/>
          <NegativeChannelScore subName="On" v-model="d.twistCap.on"/>
        </div>
        <CommentBlock v-model="d.twistCap.comment"/>

        <h2 class="level-head">
          LEVEL VI
        </h2>
        <h1 class="prompt">Stringing Beads</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Small" v-model="d.stringingBeads.sm"/>
          <NegativeChannelScore subName="Large" v-model="d.stringingBeads.lg"/>
        </div>
        <CommentBlock v-model="d.stringingBeads.comment"/>

        <h2 class="level-head">
          LEVEL VII
        </h2>
        <h1 class="prompt">Imitates</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Horizontal Line" v-model="d.imitates.lineHorizontal"/>
          <NegativeChannelScore subName="Vertical Line" v-model="d.imitates.lineVertical"/>
          <NegativeChannelScore subName="Circle" v-model="d.imitates.circle"/>
          <NegativeChannelScore subName="Cross" v-model="d.imitates.cross"/>
        </div>
        <CommentBlock v-model="d.imitates.comment"/>

        <h1 class="prompt">Pencil Grasp</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.pencilGrasp.value"/>
        </div>
        <CommentBlock v-model="d.pencilGrasp.comment"/>

        <h1 class="prompt">Connect the Dots</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="10 Inches Apart" v-model="d.connectDots.ten"/>
          <NegativeChannelScore subName="6 Inches Apart" v-model="d.connectDots.six"/>
          <NegativeChannelScore subName="3 Inches Apart" v-model="d.connectDots.three"/>
        </div>
        <CommentBlock v-model="d.connectDots.comment"/>

        <h1 class="prompt">Name</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.name.value"/>
        </div>
        <CommentBlock v-model="d.name.comment"/>

        <h1 class="prompt">Letters</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.letters.value"/>
        </div>
        <CommentBlock v-model="d.letters.comment"/>

        <h1 class="prompt">Dictated Sentence</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.dictatedSentence.value"/>
        </div>
        <CommentBlock v-model="d.dictatedSentence.comment"/>
      </div>
    </div>
  </div>
</template>
<script>
// import types from '@/store/evaluation/types'
import SectionMixin from '@/mixins/section'
import ChannelScore from "@/components/ChannelScore"
import NegativeChannelScore from "@/components/NegativeChannelScore"
import SubChannelScore from "@/components/SubChannelScore"
import CommentBlock from "@/components/CommentBlock"

export default {
  components: {
    ChannelScore,
    NegativeChannelScore,
    SubChannelScore,
    CommentBlock,
  },
  name:"ManualChannel",
  mixins: [SectionMixin],
  data: () => ({
    name: "manualSection"
  }),
}

</script>

<style lang="css" scoped>

.form-section {
  padding: 16px 0;
  border-bottom: 1px solid grey;
}

.form-section:last-child {
  border-bottom: none;
}

.title {
  font-size: 4vw;
  margin-bottom: 5vw;
  text-align: center;
}

h2 {
  margin-bottom: 4vw;
}

.cell {
  white-space: normal;
  word-wrap: normal;
}
.question {
  display: grid;
  grid-template-areas:
              "scores   prompt"
              "comment  scores";
}

.prompt {
  grid-area: prompt;
}

.comment {
  height: 100%;
}

.comment textarea {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  resize: none;
  overflow: auto;
  width: 75%;
  height: 100%;
}

.subprompts {
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: 0px;
  width: 75%;
}

.level-head {
  margin: 0;
  padding: 0;
}
</style>
