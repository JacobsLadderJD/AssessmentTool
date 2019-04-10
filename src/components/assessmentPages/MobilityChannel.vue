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
