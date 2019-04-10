<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Mobility Channel</h1>








      <div class="level">
        <h2 class="level-head">
          LEVEL II
        </h2>
        <h1 class="prompt">Holds Forearm Prop</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.forearmProp"/>
        </div>
        <div class="comment">
          <textarea v-model="d.forearmProp.comment"></textarea>
        </div>

        <h1 class="prompt">Belly Rotations</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.bellyRotations.right"/>
          <NegativeChannelScore subName="Left" v-model="d.bellyRotations.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.bellyRotations.comment"></textarea>
        </div>

        <h2 class="level-head">
          LEVEL III
        </h2>
        <h1 class="prompt">Belly Crawl</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.bellyCrawl"/>
        </div>
        <div class="comment">
          <textarea v-model="d.bellyCrawl.comment"></textarea>
        </div>

        <h1 class="prompt">From Prone to Cat</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.proneToCat"/>
        </div>
        <div class="comment">
          <textarea v-model="d.proneToCat.comment"></textarea>
        </div>

        <h1 class="prompt">Momentary Sitting</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.momentarySit"/>
        </div>
        <div class="comment">
          <textarea v-model="d.momentarySit.comment"></textarea>
        </div>

        <h1 class="prompt">Move to Upright Sitting</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.moveUprightSit"/>
        </div>
        <div class="comment">
          <textarea v-model="d.moveUprightSit.comment"></textarea>
        </div>

        <h1 class="prompt">Pulls to Feet</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.pullToFeet"/>
        </div>
        <div class="comment">
          <textarea v-model="d.pullToFeet.comment"></textarea>
        </div>

        <h1 class="prompt">Hold Creep Position</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.holdCreep"/>
        </div>
        <div class="comment">
          <textarea v-model="d.holdCreep.comment"></textarea>
        </div>

        <h2 class="level-head">
          LEVEL IV
        </h2>
        <h1 class="prompt">Creep</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.creep"/>
        </div>
        <div class="comment">
          <textarea v-model="d.creep.comment"></textarea>
        </div>

        <h1 class="prompt">From Seated to Standing</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.sitToStand"/>
        </div>
        <div class="comment">
          <textarea v-model="d.sitToStand.comment"></textarea>
        </div>

        <h1 class="prompt">Standing</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.standing"/>
        </div>
        <div class="comment">
          <textarea v-model="d.standing.comment"></textarea>
        </div>

        <h1 class="prompt">Protective Response</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.protectiveResponse"/>
        </div>
        <div class="comment">
          <textarea v-model="d.protectiveResponse.comment"></textarea>
        </div>

        <h2 class="level-head">
          LEVEL V
        </h2>
        <h1 class="prompt">Walks</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.walks"/>
        </div>
        <div class="comment">
          <textarea v-model="d.walks.comment"></textarea>
        </div>

        <h1 class="prompt">Gait</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.gait"/>
        </div>
        <div class="comment">
          <textarea v-model="d.gait.comment"></textarea>
        </div>

        <h1 class="prompt">Initial March</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.marchInitial"/>
        </div>
        <div class="comment">
          <textarea v-model="d.marchInitial.comment"></textarea>
        </div>

        <h1 class="prompt">Kick Stationary Ball</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.kickStationaryBall"/>
        </div>
        <div class="comment">
          <textarea v-model="d.kickStationaryBall.comment"></textarea>
        </div>

        <h2 class="level-head">
          LEVEL VI
        </h2>
        <h1 class="prompt">Cross March</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.crossMarch"/>
        </div>
        <div class="comment">
          <textarea v-model="d.crossMarch.comment"></textarea>
        </div>

        <h1 class="prompt">Run</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.run"/>
        </div>
        <div class="comment">
          <textarea v-model="d.run.comment"></textarea>
        </div>

        <h1 class="prompt">Throw a Medium-sized Ball</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.throwBallMedium"/>
        </div>
        <div class="comment">
          <textarea v-model="d.throwBallMedium.comment"></textarea>
        </div>

        <h1 class="prompt">Throw a Small-sized Ball</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.throwBallSmall"/>
        </div>
        <div class="comment">
          <textarea v-model="d.throwBallSmall.comment"></textarea>
        </div>

        <h1 class="prompt">Catch a Medium-sized Ball</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.catchBallMedium"/>
        </div>
        <div class="comment">
          <textarea v-model="d.catchBallMedium.comment"></textarea>
        </div>

        <h1 class="prompt">Jump Over Object</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.jumpObject"/>
        </div>
        <div class="comment">
          <textarea v-model="d.jumpObject.comment"></textarea>
        </div>

        <h2 class="level-head">
          LEVEL VII
        </h2>
        <h1 class="prompt">Balance on One Foot with Eyes Open</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.balanceEyesOpen.right"/>
          <NegativeChannelScore subName="Left" v-model="d.balanceEyesOpen.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.balanceEyesOpen.comment"></textarea>
        </div>

        <h1 class="prompt">Balance on One Foot with Eyes Closed</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.balanceEyesClosed.right"/>
          <NegativeChannelScore subName="Left" v-model="d.balanceEyesClosed.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.balanceEyesClosed.comment"></textarea>
        </div>

        <h1 class="prompt">Hop on One Foot</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.oneFootHop.right"/>
          <NegativeChannelScore subName="Left" v-model="d.oneFootHop.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.oneFootHop.comment"></textarea>
        </div>

        <h1 class="prompt">Walking On Stairs</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Up" v-model="d.stairs.up"/>
          <NegativeChannelScore subName="Down" v-model="d.stairs.down"/>
        </div>
        <div class="comment">
          <textarea v-model="d.oneFootHop.comment"></textarea>
        </div>

        <h1 class="prompt">Walks with Cross-Lateral Arms</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.walksArmsCross.up"/>
        </div>
        <div class="comment">
          <textarea v-model="d.walksArmsCross.comment"></textarea>
        </div>

        <h1 class="prompt">Initial Skip</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialSkip"/>
        </div>
        <div class="comment">
          <textarea v-model="d.initialSkip.comment"></textarea>
        </div>

        <h1 class="prompt">Cross Skip</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.crossSkip"/>
        </div>
        <div class="comment">
          <textarea v-model="d.crossSkip.comment"></textarea>
        </div>

        <h1 class="prompt">Jumping Jacks</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.jumpingJacks"/>
        </div>
        <div class="comment">
          <textarea v-model="d.jumpingJacks.comment"></textarea>
        </div>

        <h1 class="prompt">4 Piece Cross-over</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.fourPieceCross"/>
        </div>
        <div class="comment">
          <textarea v-model="d.fourPieceCross.comment"></textarea>
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
  name:"MobilityChannel",
  mixins: [SectionMixin],
  data: () => ({
    name: "mobilitySection"
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
