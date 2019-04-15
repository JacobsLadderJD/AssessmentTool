<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Sensory Seeking</h1>
      <div class="level">
        <h2 class="level-head">
          Tactility
        </h2>
        <h1 class="prompt">Hands</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.hands.value"/>
        </div>
        <CommentBlock v-model="d.hands.comment"/>

        <h1 class="prompt">Feet</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.feet.value"/>
        </div>
        <CommentBlock v-model="d.feet.comment"/>

        <h1 class="prompt">Trunk</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.trunk.value"/>
        </div>
        <CommentBlock v-model="d.trunk.comment"/>

        <h1 class="prompt">Jaw</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.jaw.value"/>
        </div>
        <CommentBlock v-model="d.jaw.comment"/>

        <h1 class="prompt">Intra-oral</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.intraoral.value"/>
        </div>
        <CommentBlock v-model="d.intraoral.comment"/>

        <h1 class="prompt">Extra-oral</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.extraoral.value"/>
        </div>
        <CommentBlock v-model="d.extraoral.comment"/>

        <h1 class="prompt">Chin</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.chin.value"/>
        </div>
        <CommentBlock v-model="d.chin.comment"/>

        <h1 class="prompt">Genitals</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.genitals.value"/>
        </div>
        <CommentBlock v-model="d.genitals.comment"/>

        <h1 class="prompt">Olfactory</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.olfactory.value"/>
        </div>
        <CommentBlock v-model="d.olfactory.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          Auditory
        </h2>
        <h1 class="prompt">Jumping</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.jumping.value"/>
        </div>
        <CommentBlock v-model="d.jumping.comment"/>

        <h1 class="prompt">Vocal/Throat Vibration</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.vocalVibration.value"/>
        </div>
        <CommentBlock v-model="d.vocalVibration.comment"/>

        <h1 class="prompt">Humming</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.humming.value"/>
        </div>
        <CommentBlock v-model="d.humming.comment"/>

        <h1 class="prompt">Closing/Plugging Ear</h1>
        <div class="subprompts">
          <PositiveChannelScore subName="Right"  v-model="d.plugEar.right"/>
          <PositiveChannelScore subName="Left"  v-model="d.plugEar.left"/>
        </div>
        <CommentBlock v-model="d.plugEar.comment"/>

        <h1 class="prompt">Spinning</h1>
        <div class="subprompts">
          <PositiveChannelScore subName="Right"  v-model="d.spinning.right"/>
          <PositiveChannelScore subName="Left"  v-model="d.spinning.left"/>
        </div>
        <CommentBlock v-model="d.spinning.comment"/>

        <h1 class="prompt">Scripting/Singing</h1>
        <div class="subprompts">
          <PositiveChannelScore  v-model="d.singing.value"/>
        </div>
        <CommentBlock v-model="d.singing.comment"/>

        <h1 class="prompt">Rocking/Head Movement</h1>
        <div class="subprompts">
          <PositiveChannelScore  v-model="d.rocking.value"/>
        </div>
        <CommentBlock v-model="d.rocking.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          Visual
        </h2>
        <h1 class="prompt">Pressure</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.pressure.value"/>
        </div>
        <CommentBlock v-model="d.pressure.comment"/>

        <h1 class="prompt">Finger Play</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.fingerPlay.value"/>
        </div>
        <CommentBlock v-model="d.fingerPlay.comment"/>

        <h1 class="prompt">Corner Vision</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.cornerVision.value"/>
        </div>
        <CommentBlock v-model="d.cornerVision.comment"/>

        <h1 class="prompt">Lines/Straight Edges on Objects</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.objectEdges.value"/>
        </div>
        <CommentBlock v-model="d.objectEdges.comment"/>

        <h1 class="prompt">Spinning Objects</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.spinningObjects.value"/>
        </div>
        <CommentBlock v-model="d.spinningObjects.comment"/>

        <h1 class="prompt">Holding Straight Objects</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.holdStraightObject.value"/>
        </div>
        <CommentBlock v-model="d.holdStraightObject.comment"/>

        <h1 class="prompt">Shadows</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.shadows.value"/>
        </div>
        <CommentBlock v-model="d.shadows.comment"/>
      </div>

    </div>
  </div>
</template>
<script>
// import types from '@/store/evaluation/types'
import SectionMixin from '@/mixins/section'
import ChannelScore from "@/components/ChannelScore"
import SubChannelScore from "@/components/SubChannelScore"
import PositiveChannelScore from "@/components/PositiveChannelScore"
import CommentBlock from "@/components/CommentBlock"

export default {
  components: {
    ChannelScore,
    SubChannelScore,
    PositiveChannelScore,
    CommentBlock
  },
  name:"SensorySection",
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
