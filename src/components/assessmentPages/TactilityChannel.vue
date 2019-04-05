<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Tactility Channel</h1>



      <div class="level">
        <h2 class="level-head">
          LEVEL II
        </h2>
        <h1 class="prompt">Deep Pressure</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.deepPressure"/>
        </div>
        <div class="comment">
          <textarea v-model="d.deepPressure.comment"></textarea>
        </div>

        <h1 class="prompt">Deep Pressure</h1>
        <div class="subprompts">
          <SubChannelScore subName="Face" v-model="d.tonicity.face"/>
          <SubChannelScore subName="Neck" v-model="d.tonicity.neck"/>
          <SubChannelScore subName="Trunk" v-model="d.tonicity.trunk"/>
          <SubChannelScore subName="Right Shoulder" v-model="d.tonicity.shoulderRight"/>
          <SubChannelScore subName="Right Arm" v-model="d.tonicity.armRight"/>
          <SubChannelScore subName="Right Hand" v-model="d.tonicity.handRight"/>
          <SubChannelScore subName="Right Hip" v-model="d.tonicity.hipRight"/>
          <SubChannelScore subName="Right Leg" v-model="d.tonicity.legRight"/>
          <SubChannelScore subName="Right Foot" v-model="d.tonicity.footRight"/>
          <SubChannelScore subName="Left Arm" v-model="d.tonicity.armLeft"/>
          <SubChannelScore subName="Left Hand" v-model="d.tonicity.handLeft"/>
          <SubChannelScore subName="Left Hip" v-model="d.tonicity.hipLeft"/>
          <SubChannelScore subName="Left Leg" v-model="d.tonicity.legLeft"/>
          <SubChannelScore subName="Left Foot" v-model="d.tonicity.footLeft"/>
        </div>
        <div class="comment">
          <textarea v-model="d.tonicity.comment"></textarea>
        </div>

        <h1 class="prompt">Reaction to Deep Pain</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.deepPainReaction"/>
        </div>
        <div class="comment">
          <textarea v-model="d.deepPainReaction.comment"></textarea>
        </div>
      </div>


      <div class="level">
        <h2 class="level-head">
          LEVEL III
        </h2>
        <h1 class="prompt">Surface Touch</h1>
        <div class="subprompts">
          <SubChannelScore subName="Right Hand" v-model="d.surfaceTouch.handRight"/>
          <SubChannelScore subName="Right Foot" v-model="d.surfaceTouch.footRight"/>
          <SubChannelScore subName="Left Hand" v-model="d.surfaceTouch.handLeft"/>
          <SubChannelScore subName="Left Foot" v-model="d.surfaceTouch.footLeft"/>
        </div>
        <div class="comment">
          <textarea v-model="d.surfaceTouch.comment"></textarea>
        </div>

        <h1 class="prompt">Reaction to Surface Pain</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.surfacePainReaction"/>
        </div>
        <div class="comment">
          <textarea v-model="d.surfacePainReaction.comment"></textarea>
        </div>

        <h1 class="prompt">Olfactory Stimulation</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.olfactoryStimulation"/>
        </div>
        <div class="comment">
          <textarea v-model="d.olfactoryStimulation.comment"></textarea>
        </div>

        <h1 class="prompt">Facial Surface Awareness</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.facialSurfaceAwareness"/>
        </div>
        <div class="comment">
          <textarea v-model="d.facialSurfaceAwareness.comment"></textarea>
        </div>

        <h1 class="prompt">Oral Textural Awareness</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.oralTexturalAwareness.mushy"/>
          <SubChannelScore v-model="d.oralTexturalAwareness.crunchy"/>

        </div>
        <div class="comment">
          <textarea v-model="d.oralTexturalAwareness.comment"></textarea>
        </div>
      </div>


      <div class="level">
        <h2 class="level-head">
          LEVEL IV
        </h2>
        <h1 class="prompt">Page Discrimination</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Cardboard Books" v-model="d.pageDiscrimination.cardboard"/>
          <NegativeChannelScore subName="Paper Books" v-model="d.pageDiscrimination.paper"/>
        </div>
        <div class="comment">
          <textarea v-model="d.pageDiscrimination.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL V
        </h2>
        <h1 class="prompt">Tactile Discrimination with Medium-Sized Objects</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Visual Exposure" v-model="d.tactileDiscriminationMedium.visual"/>
          <NegativeChannelScore subName="Without Exposure" v-model="d.tactileDiscriminationMedium.nonvisual"/>
        </div>
        <div class="comment">
          <textarea v-model="d.tactileDiscriminationMedium.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL VII
        </h2>
        <h1 class="prompt">Rhomberg</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Eyes Open" v-model="d.rhomberg.eyesOpen"/>
          <NegativeChannelScore subName="Eyes Closed" v-model="d.rhomberg.eyesClosed"/>
        </div>
        <div class="comment">
          <textarea v-model="d.rhomberg.comment"></textarea>
        </div>

        <h1 class="prompt">Manns - Right Foot in Front</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Eyes Open" v-model="d.mannsRightFoot.eyesOpen"/>
          <NegativeChannelScore subName="Eyes Closed" v-model="d.mannsRightFoot.eyesClosed"/>
        </div>
        <div class="comment">
          <textarea v-model="d.mannsRightFoot.comment"></textarea>
        </div>

        <h1 class="prompt">Manns - Left Foot in Front</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Eyes Open" v-model="d.mannsLeftFoot.eyesOpen"/>
          <NegativeChannelScore subName="Eyes Closed" v-model="d.mannsLeftFoot.eyesClosed"/>
        </div>
        <div class="comment">
          <textarea v-model="d.mannsLeftFoot.comment"></textarea>
        </div>

        <h1 class="prompt">Arm Matching</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="In Front" v-model="d.armMatching.front"/>
          <NegativeChannelScore subName="Above Head" v-model="d.armMatching.above"/>
          <NegativeChannelScore subName="Out to Side" v-model="d.armMatching.sides"/>
        </div>
        <div class="comment">
          <textarea v-model="d.armMatching.comment"></textarea>
        </div>

        <h1 class="prompt">Graphesthesia</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.graphesthesia.right"/>
          <NegativeChannelScore subName="Left" v-model="d.graphesthesia.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.graphesthesia.comment"></textarea>
        </div>

      </div>


        <!--
          FIXME A lot of the inputs above are the wrong type!
          They should be negative channel scores only after
          oralTexturalAwareness
        -->
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
  name:"TactilityChannel",
  mixins: [SectionMixin],
  data: () => ({
    name: "tactilitySection"
  })
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
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr [thirteenth] 1fr [fourteenth] 1fr [fifteenth] 1fr [sixteenth] 1fr [seventeenth] 1fr [eighteenth] 1fr [nineteenth] 1fr [twentieth] 1fr [twentyfirst] 1fr [twentysecond] 1fr [twentythird] 1fr [twentyfourth] 1fr [twentyfifth] 1fr [twentysixth] 1fr [twentyseventh] auto [twentyeigth] 1fr [twentyninth] 1fr [thirtieth] 1fr [thirtyfirst] 1fr [thirtysecond] 1fr [thirtythird] 1fr [thirtyfourth] 1fr [thirtyfifth] 1fr [thirty sixth] 1fr [thirtyseventh] 1fr [thirtyeigth] 1fr [thirtyninth] 1fr [fortieth] 1fr [fortyfirst] 1fr [fortysecond] 1fr [fortythird] 1fr [fortyfourth] 1fr [fortyfifth] 1fr [fortysixth] 1fr [fortyseventh] 1fr [fortyeigth] 1fr [fortyninth] 1fr [fiftieth] 1fr [fiftyfirst] 1fr [fiftysecond] 1fr [fiftythird] 1fr [fiftyfourth] 1fr [fiftyfifth] 1fr;
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
  grid-template-rows:;
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
