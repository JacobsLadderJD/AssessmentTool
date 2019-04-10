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
          <NegativeChannelScore v-model="d.objectRelease"/>
        </div>
        <div class="comment">
          <textarea v-model="d.objectRelease.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL III
        </h2>
        <h1 class="prompt">Volitional Grasp of an Object</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.objectGrasp"/>
        </div>
        <div class="comment">
          <textarea v-model="d.objectGrasp.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL IV
        </h2>
        <h1 class="prompt">Transfer Objects</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.transfersObjects"/>
        </div>
        <div class="comment">
          <textarea v-model="d.transfersObjects.comment"></textarea>
        </div>

        <h1 class="prompt">Cortical Opposition</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.corticalOpposition.right"/>
          <NegativeChannelScore subName="Left" v-model="d.corticalOpposition.left"/>
          <NegativeChannelScore subName="Simultaneously" v-model="d.corticalOpposition.simultaneously"/>
        </div>
        <div class="comment">
          <textarea v-model="d.corticalOpposition.comment"></textarea>
        </div>

        <h1 class="prompt">Claps</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.claps"/>
        </div>
        <div class="comment">
          <textarea v-model="d.claps.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL V
        </h2>
        <h1 class="prompt">Stacking Blocks</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.blockStacking"/>
        </div>
        <div class="comment">
          <textarea v-model="d.blockStacking.comment"></textarea>
        </div>

        <h1 class="prompt">Beans in a Bottle</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.beanBottle.right"/>
        </div>
        <div class="comment">
          <textarea v-model="d.beanBottle.comment"></textarea>
        </div>

        <h1 class="prompt">Pronation of Wrists</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.wristPronation.right"/>
          <NegativeChannelScore subName="Left" v-model="d.wristPronation.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.wristPronation.comment"></textarea>
        </div>

        <h1 class="prompt">Supination of Wrists</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.wristSupination.right"/>
          <NegativeChannelScore subName="Left" v-model="d.wristSupination.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.wristSupination.comment"></textarea>
        </div>

        <h1 class="prompt">Initial Coloring</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.initialColoring.right"/>
          <NegativeChannelScore subName="Left" v-model="d.initialColoring.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.initialColoring.comment"></textarea>
        </div>

        <h1 class="prompt">Twist Cap</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Off" v-model="d.twistCap.off"/>
          <NegativeChannelScore subName="On" v-model="d.twistCap.on"/>
        </div>
        <div class="comment">
          <textarea v-model="d.twistCap.comment"></textarea>
        </div>

        <h2 class="level-head">
          LEVEL VI
        </h2>
        <h1 class="prompt">Stinging Beads</h1>
        <div class="subprompts">

          <NegativeChannelScore subName="Small" v-model="d.stringingBeads.small"/>
        </div>
        <div class="comment">
          <textarea v-model="d.stringingBeads.comment"></textarea>
        </div>

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
        <div class="comment">
          <textarea v-model="d.imitates.comment"></textarea>
        </div>

        <h1 class="prompt">Pencil Grasp</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.pencilGrasp"/>
        </div>
        <div class="comment">
          <textarea v-model="d.pencilGrasp.comment"></textarea>
        </div>

        <h1 class="prompt">Connect the Dots</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="10 Inches Apart" v-model="d.connectDots.ten"/>
          <NegativeChannelScore subName="6 Inches Apart" v-model="d.connectDots.six"/>
          <NegativeChannelScore subName="3 Inches Apart" v-model="d.connectDots.three"/>
        </div>
        <div class="comment">
          <textarea v-model="d.connectDots.comment"></textarea>
        </div>

        <h1 class="prompt">Name</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.name"/>
        </div>
        <div class="comment">
          <textarea v-model="d.name.comment"></textarea>
        </div>

        <h1 class="prompt">Letters</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.letters"/>
        </div>
        <div class="comment">
          <textarea v-model="d.letters.comment"></textarea>
        </div>

        <h1 class="prompt">Dictated Sentence</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.dictatedSentence"/>
        </div>
        <div class="comment">
          <textarea v-model="d.dictatedSentence.comment"></textarea>
        </div>
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

export default {
  components: {
    ChannelScore,
    NegativeChannelScore,
    SubChannelScore,
  },
  name:"ManualChannel",
  mixins: [SectionMixin],
  data: () => ({
    name: "manualSection"
  }),
}

</script>

<style lang="css" scoped>

nav {
  border-right: 1px solid grey;
}

.form-viewer {
  flex: 1;
  box-sizing: border-box;
  padding-bottom: 64px;
}

.form-page-nav {
  text-align: right;
}

.form-section {
  padding: 16px 0;
  border-bottom: 1px solid grey;
}
.form-section:last-child {
  border-bottom: none;

}
.row {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.column {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  white-space: normal;
}

.item {
  flex: 1 1 auto;
  white-space: normal;
  width: 100%;
  word-wrap: normal;
  font-size: 2vw;
}

.title {
  font-size: 4vw;
  margin-bottom: 5vw;
  text-align: center;
}

label {
  margin-right:2vw;
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
