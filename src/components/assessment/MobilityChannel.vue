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
          <NegativeChannelScore v-model="d.forearmProp.value"/>
        </div>
        <CommentBlock v-model="d.forearmProp.comment"/>

        <h1 class="prompt">Belly Rotations</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.bellyRotations.right"/>
          <NegativeChannelScore subName="Left" v-model="d.bellyRotations.left"/>
        </div>
        <CommentBlock v-model="d.bellyRotations.comment"/>

        <h2 class="level-head">
          LEVEL III
        </h2>
        <h1 class="prompt">Belly Crawl</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.bellyCrawl.value"/>
        </div>
        <CommentBlock v-model="d.bellyCrawl.comment"/>

        <h1 class="prompt">From Prone to Cat</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.proneToCat.value"/>
        </div>
        <CommentBlock v-model="d.proneToCat.comment"/>

        <h1 class="prompt">Momentary Sitting</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.momentarySit.value"/>
        </div>
        <CommentBlock v-model="d.momentarySit.comment"/>

        <h1 class="prompt">Move to Upright Sitting</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.moveUprightSit.value"/>
        </div>
        <CommentBlock v-model="d.moveUprightSit.comment"/>

        <h1 class="prompt">Pulls to Feet</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.pullToFeet.value"/>
        </div>
        <CommentBlock v-model="d.pullToFeet.comment"/>

        <h1 class="prompt">Hold Creep Position</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.holdCreep.value"/>
        </div>
        <CommentBlock v-model="d.holdCreep.comment"/>

        <h2 class="level-head">
          LEVEL IV
        </h2>
        <h1 class="prompt">Creep</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.creep.value"/>
        </div>
        <CommentBlock v-model="d.creep.comment"/>

        <h1 class="prompt">From Seated to Standing</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.sitToStand.value"/>
        </div>
        <CommentBlock v-model="d.sitToStand.comment"/>

        <h1 class="prompt">Standing</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.standing.value"/>
        </div>
        <CommentBlock v-model="d.standing.comment"/>

        <h1 class="prompt">Protective Response</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.protectiveResponse.value"/>
        </div>
        <CommentBlock v-model="d.protectiveResponse.comment"/>

        <h2 class="level-head">
          LEVEL V
        </h2>
        <h1 class="prompt">Walks</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.walks.value"/>
        </div>
        <CommentBlock v-model="d.walks.comment"/>

        <h1 class="prompt">Gait</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.gait.value"/>
        </div>
        <CommentBlock v-model="d.gait.comment"/>

        <h1 class="prompt">Initial March</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.marchInitial.value"/>
        </div>
        <CommentBlock v-model="d.marchInitial.comment"/>

        <h1 class="prompt">Kick Stationary Ball</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.kickStationaryBall.value"/>
        </div>
        <CommentBlock v-model="d.kickStationaryBall.comment"/>

        <h2 class="level-head">
          LEVEL VI
        </h2>
        <h1 class="prompt">Cross March</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.crossMarch.value"/>
        </div>
        <CommentBlock v-model="d.crossMarch.comment"/>

        <h1 class="prompt">Run</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.run.value"/>
        </div>
        <CommentBlock v-model="d.run.comment"/>

        <h1 class="prompt">Throw a Medium-sized Ball</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.throwBallMedium.value"/>
        </div>
        <CommentBlock v-model="d.throwBallMedium.comment"/>

        <h1 class="prompt">Throw a Small-sized Ball</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.throwBallSmall.value"/>
        </div>
        <CommentBlock v-model="d.throwBallSmall.comment"/>

        <h1 class="prompt">Catch a Medium-sized Ball</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.catchBallMedium.value"/>
        </div>
        <CommentBlock v-model="d.catchBallMedium.comment"/>

        <h1 class="prompt">Jump Over Object</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.jumpObject.value"/>
        </div>
        <CommentBlock v-model="d.jumpObject.comment"/>

        <h2 class="level-head">
          LEVEL VII
        </h2>
        <h1 class="prompt">Balance on One Foot with Eyes Open</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.balanceEyesOpen.right"/>
          <NegativeChannelScore subName="Left" v-model="d.balanceEyesOpen.left"/>
        </div>
        <CommentBlock v-model="d.balanceEyesOpen.comment"/>

        <h1 class="prompt">Balance on One Foot with Eyes Closed</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.balanceEyesClosed.right"/>
          <NegativeChannelScore subName="Left" v-model="d.balanceEyesClosed.left"/>
        </div>
        <CommentBlock v-model="d.balanceEyesClosed.comment"/>

        <h1 class="prompt">Hop on One Foot</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.oneFootHop.right"/>
          <NegativeChannelScore subName="Left" v-model="d.oneFootHop.left"/>
        </div>
        <CommentBlock v-model="d.oneFootHop.comment"/>

        <h1 class="prompt">Walking On Stairs</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Up" v-model="d.stairs.up"/>
          <NegativeChannelScore subName="Down" v-model="d.stairs.down"/>
        </div>
        <CommentBlock v-model="d.stairs.comment"/>

        <h1 class="prompt">Walks with Cross-Lateral Arms</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.walksArmsCross.value"/>
        </div>
        <CommentBlock v-model="d.walksArmsCross.comment"/>

        <h1 class="prompt">Initial Skip</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialSkip.value"/>
        </div>
        <CommentBlock v-model="d.initialSkip.comment"/>

        <h1 class="prompt">Cross Skip</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.crossSkip.value"/>
        </div>
        <CommentBlock v-model="d.crossSkip.comment"/>

        <h1 class="prompt">Jumping Jacks</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.jumpingJacks.value"/>
        </div>
        <CommentBlock v-model="d.jumpingJacks.comment"/>

        <h1 class="prompt">4 Piece Cross-over</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.fourPieceCross.value"/>
        </div>
        <CommentBlock v-model="d.fourPieceCross.comment"/>

      </div>
    </div>
  </div>
</template>
<script>
// import types from '@/store/evaluation/types'
import SectionMixin from '@/mixins/section'
import NegativeChannelScore from "@/components/NegativeChannelScore"
import CommentBlock from "@/components/CommentBlock"

export default {
  components: {
    NegativeChannelScore,
    CommentBlock
  },
  name:"MobilityChannel",
  mixins: [SectionMixin],
  data: () => ({
    name: "mobilitySection"
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

label {
  margin-right:2vw;
}

h2 {
  margin-bottom: 4vw;
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
