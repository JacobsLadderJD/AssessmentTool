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
          <PositiveChannelScore v-model="d.feet"/>
        </div>
        <div class="comment">
          <textarea v-model="d.feet.comment"></textarea>
        </div>

        <h1 class="prompt">Trunk</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.trunk"/>
        </div>
        <div class="comment">
          <textarea v-model="d.trunk.comment"></textarea>
        </div>

        <h1 class="prompt">Jaw</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.jaw"/>
        </div>
        <div class="comment">
          <textarea v-model="d.jaw.comment"></textarea>
        </div>

        <h1 class="prompt">Intraoral</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.intraoral"/>
        </div>
        <div class="comment">
          <textarea v-model="d.intraoral.comment"></textarea>
        </div>

        <h1 class="prompt">Extraoral</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.extraoral"/>
        </div>
        <div class="comment">
          <textarea v-model="d.extraoral.comment"></textarea>
        </div>

        <h1 class="prompt">Chin</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.chin"/>
        </div>
        <div class="comment">
          <textarea v-model="d.chin.comment"></textarea>
        </div>

        <h1 class="prompt">Genitals</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.genitals"/>
        </div>
        <div class="comment">
          <textarea v-model="d.genitals.comment"></textarea>
        </div>

        <h1 class="prompt">Olfactory</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.olfactory"/>
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
          <PositiveChannelScore v-model="d.jumping"/>
        </div>
        <div class="comment">
          <textarea v-model="d.jumping.comment"></textarea>
        </div>

        <h1 class="prompt">Vocal/Throat Vibration</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.vocalVibration"/>
        </div>
        <div class="comment">
          <textarea v-model="d.vocalVibration.comment"></textarea>
        </div>

        <h1 class="prompt">Humming</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.humming"/>
        </div>
        <div class="comment">
          <textarea v-model="d.humming.comment"></textarea>
        </div>

        <h1 class="prompt">Closing/Plugging Ear</h1>
        <div class="subprompts">
          <PositiveChannelScore subName="Right"  v-model="d.plugEar.right"/>
          <PositiveChannelScore subName="Left"  v-model="d.plugEar.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.plugEar.comment"></textarea>
        </div>

        <h1 class="prompt">Spinning</h1>
        <div class="subprompts">
          <PositiveChannelScore subName="Right"  v-model="d.spinning.right"/>
          <PositiveChannelScore subName="Left"  v-model="d.spinning.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.spinning.comment"></textarea>
        </div>

        <h1 class="prompt">Scripting/Singing</h1>
        <div class="subprompts">
          <PositiveChannelScore  v-model="d.singing.right"/>
        </div>
        <div class="comment">
          <textarea v-model="d.singing.comment"></textarea>
        </div>

        <h1 class="prompt">Rocking/Head Movement</h1>
        <div class="subprompts">
          <PositiveChannelScore  v-model="d.rocking.right"/>
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
          <PositiveChannelScore v-model="d.pressure"/>
        </div>
        <div class="comment">
          <textarea v-model="d.pressure.comment"></textarea>
        </div>

        <h1 class="prompt">Finger Play</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.fingerPlay"/>
        </div>
        <div class="comment">
          <textarea v-model="d.fingerPlay.comment"></textarea>
        </div>

        <h1 class="prompt">Corner Vision</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.cornerVision"/>
        </div>
        <div class="comment">
          <textarea v-model="d.cornerVision.comment"></textarea>
        </div>

        <h1 class="prompt">Lines/Straight Edges on Objects</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.objectEdges"/>
        </div>
        <div class="comment">
          <textarea v-model="d.objectEdges.comment"></textarea>
        </div>

        <h1 class="prompt">Spinning Objects</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.spinningObjects"/>
        </div>
        <div class="comment">
          <textarea v-model="d.spinningObjects.comment"></textarea>
        </div>

        <h1 class="prompt">Holding Straight Objects</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.holdStraightObject"/>
        </div>
        <div class="comment">
          <textarea v-model="d.holdStraightObject.comment"></textarea>
        </div>

        <h1 class="prompt">Shadows</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.shadows"/>
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
import PositiveChannelScore from "@/components/PositiveChannelScore"

export default {
  components: {
    ChannelScore,
    PositiveChannelScore,
    SubChannelScore,
    PositiveChannelScore
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
