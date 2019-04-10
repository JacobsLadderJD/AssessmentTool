<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Sensory Seeking</h1>





      <div class="level">
        <h2 class="level-head">
          TACTILITY
        </h2>
        <h1 class="prompt">Hands</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.hands"/>
        </div>
        <div class="comment">
          <textarea v-model="d.hands.comment"></textarea>
        </div>

        <h1 class="prompt">Feet</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.feet"/>
        </div>
        <div class="comment">
          <textarea v-model="d.feet.comment"></textarea>
        </div>

        <h1 class="prompt">Trunk</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.trunk"/>
        </div>
        <div class="comment">
          <textarea v-model="d.trunk.comment"></textarea>
        </div>

        <h1 class="prompt">Jaw</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.jaw"/>
        </div>
        <div class="comment">
          <textarea v-model="d.jaw.comment"></textarea>
        </div>

        <h1 class="prompt">Intraoral</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.intraoral"/>
        </div>
        <div class="comment">
          <textarea v-model="d.intraoral.comment"></textarea>
        </div>

        <h1 class="prompt">Extraoral</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.extraoral"/>
        </div>
        <div class="comment">
          <textarea v-model="d.extraoral.comment"></textarea>
        </div>

        <h1 class="prompt">Chin</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.chin"/>
        </div>
        <div class="comment">
          <textarea v-model="d.chin.comment"></textarea>
        </div>

        <h1 class="prompt">Genitals</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.genitals"/>
        </div>
        <div class="comment">
          <textarea v-model="d.genitals.comment"></textarea>
        </div>

        <h1 class="prompt">Olfactory</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.olfactory"/>
        </div>
        <div class="comment">
          <textarea v-model="d.olfactory.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          AUDITORY
        </h2>
        <h1 class="prompt">Jumping</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.jumping"/>
        </div>
        <div class="comment">
          <textarea v-model="d.jumping.comment"></textarea>
        </div>

        <h1 class="prompt">Vocal/Throat Vibration</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.vocalVibration"/>
        </div>
        <div class="comment">
          <textarea v-model="d.vocalVibration.comment"></textarea>
        </div>

        <h1 class="prompt">Humming</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.humming"/>
        </div>
        <div class="comment">
          <textarea v-model="d.humming.comment"></textarea>
        </div>

        <h1 class="prompt">Closing/Plugging Ear</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right"  v-model="d.plugEar.right"/>
          <NegativeChannelScore subName="Left"  v-model="d.plugEar.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.plugEar.comment"></textarea>
        </div>

        <h1 class="prompt">Spinning</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right"  v-model="d.spinning.right"/>
          <NegativeChannelScore subName="Left"  v-model="d.spinning.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.spinning.comment"></textarea>
        </div>

        <h1 class="prompt">Scripting/Singing</h1>
        <div class="subprompts">
          <NegativeChannelScore  v-model="d.singing.right"/>
        </div>
        <div class="comment">
          <textarea v-model="d.singing.comment"></textarea>
        </div>

        <h1 class="prompt">Rocking/Head Movement</h1>
        <div class="subprompts">
          <NegativeChannelScore  v-model="d.rocking.right"/>
        </div>
        <div class="comment">
          <textarea v-model="d.rocking.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          VISUAL
        </h2>
        <h1 class="prompt">Pressure</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.pressure"/>
        </div>
        <div class="comment">
          <textarea v-model="d.pressure.comment"></textarea>
        </div>

        <h1 class="prompt">Finger Play</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.fingerPlay"/>
        </div>
        <div class="comment">
          <textarea v-model="d.fingerPlay.comment"></textarea>
        </div>

        <h1 class="prompt">Corner Vision</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.cornerVision"/>
        </div>
        <div class="comment">
          <textarea v-model="d.cornerVision.comment"></textarea>
        </div>

        <h1 class="prompt">Lines/Straight Edges on Objects</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.objectEdges"/>
        </div>
        <div class="comment">
          <textarea v-model="d.objectEdges.comment"></textarea>
        </div>

        <h1 class="prompt">Spinning Objects</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.spinningObjects"/>
        </div>
        <div class="comment">
          <textarea v-model="d.spinningObjects.comment"></textarea>
        </div>

        <h1 class="prompt">Holding Straight Objects</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.holdStraightObject"/>
        </div>
        <div class="comment">
          <textarea v-model="d.holdStraightObject.comment"></textarea>
        </div>

        <h1 class="prompt">Shadows</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.shadows"/>
        </div>
        <div class="comment">
          <textarea v-model="d.shadows.comment"></textarea>
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
  name:"SensorySeekingPage",
  mixins: [SectionMixin],
    data: () => ({
      name: "sensorySection"
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
  grid-template-columns: [first] 4fr [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 4fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
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
