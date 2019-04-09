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

table {
  display: table;
  vertical-align: middle;
}
th {
  display: table-cell;
  vertical-align: inherit;
  text-align: left;
  padding-right:30px;
  padding-bottom: 5px;
  padding-top: 5px;
}
tr {

}
td {
  padding-right:15px;
  text-align: center;
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

.grid1 {
  display: grid;
  grid-template-columns: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr;
  word-wrap: normal;
  width: 50%;
  justify-items: center;
}

.grid2 {
  display: grid;
  grid-template-columns: [first] auto [second] 1fr [third] 1fr [fourth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr;
  word-wrap: normal;
  justify-items: center;
  width: 75%;
  align-items: center;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid3 {
  display: grid;
  grid-template-columns: [first] auto [second] 1fr [third] 1fr [fourth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr;
  word-wrap: normal;
  justify-items: center;
  width: 75%;
  align-items: center;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid4 {
  display: grid;
  grid-template-columns: [first] auto [second] auto [third] 1fr [fourth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid5 {
  display: grid;
  grid-template-columns: [first] 3fr [second] 2fr [third] 2fr [fourth] 1fr [fifth] 1fr;
  grid-template-rows: [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr [thirteenth] 1fr [fourteenth] 1fr [fifteenth] 1fr [sixteenth] 1fr [seventeenth] 1fr [eighteenth] 1fr [nineteenth] 1fr [twentieth] 1fr [twentyfirst] 1fr [twentysecond] 1fr [twentythird] 1fr [twentyfourth] 1fr [twentyfifth] 1fr [twentysixth] 1fr [twentyseventh] auto [twentyeigth] 1fr [twentyninth] 1fr [thirtieth] 1fr [thirtyfirst] 1fr [thirtysecond] 1fr [thirtythird] 1fr [thirtyfourth] 1fr [thirtyfifth] 1fr [thirty sixth] 1fr [thirtyseventh] 1fr [thirtyeigth] 1fr [thirtyninth] 1fr [fortieth] 1fr [fortyfirst] 1fr [fortysecond] 1fr [fortythird] 1fr [fortyfourth] 1fr [fortyfifth] 1fr [fortysixth] 1fr [fortyseventh] 1fr [fortyeigth] 1fr [fortyninth] 1fr [fiftieth] 1fr [fiftyfirst] 1fr [fiftysecond] 1fr [fiftythird] 1fr [fiftyfourth] 1fr [fiftyfifth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid6 {
  display: grid;
  grid-template-columns: [first] auto [second] 9fr [third] auto [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] auto [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid7 {
  display: grid;
  grid-template-columns: [first] auto [second] 9fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] auto [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid8 {
  display: grid;
  grid-template-columns: [first] auto [second] 9fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] auto [fourth] 1fr [fifth] 1fr [sixth] auto [seventh] 1fr [eighth] auto [ninth] 1fr [tenth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid9 {
  display: grid;
  grid-template-columns: [first] auto [second] 9fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
  grid-template-rows: ;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
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
