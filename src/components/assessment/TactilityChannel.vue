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
          <SubChannelScore v-model="d.deepPressure.value"/>
        </div>
        <CommentBlock v-model="d.deepPressure.comment"/>

        <h1 class="prompt">Tonicity</h1>
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
        <CommentBlock v-model="d.tonicity.comment"/>

        <h1 class="prompt">Reaction to Deep Pain</h1>
        <div class="subprompts">
          <ChannelScore v-model="d.deepPainReaction.value"/>
        </div>
        <CommentBlock v-model="d.deepPainReaction.comment"/>
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
        <CommentBlock v-model="d.surfaceTouch.comment"/>

        <h1 class="prompt">Reaction to Surface Pain</h1>
        <div class="subprompts">
          <ChannelScore v-model="d.surfacePainReaction.value"/>
        </div>
        <CommentBlock v-model="d.surfacePainReaction.comment"/>

        <h1 class="prompt">Olfactory Stimulation</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.olfactoryStimulation.strong"/>
          <SubChannelScore v-model="d.olfactoryStimulation.sweet"/>
        </div>
        <CommentBlock v-model="d.olfactoryStimulation.comment"/>

        <h1 class="prompt">Facial Surface Awareness</h1>
        <div class="subprompts">
          <ChannelScore v-model="d.facialSurfaceAwareness.value"/>
        </div>
        <CommentBlock v-model="d.facialSurfaceAwareness.comment"/>

        <h1 class="prompt">Oral Textural Awareness</h1>
        <div class="subprompts">
          <SubChannelScore subName="Mushy" v-model="d.oralTexturalAwareness.mushy"/>
          <SubChannelScore subName="Cruncthy" v-model="d.oralTexturalAwareness.crunchy"/>
        </div>
        <CommentBlock v-model="d.oralTexturalAwareness.comment"/>
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
        <CommentBlock v-model="d.pageDiscrimination.comment"/>
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
        <CommentBlock v-model="d.tactileDiscriminationMedium.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL VI
        </h2>
        <h1 class="prompt">Tactile Discrimination with Small-Sized Objects</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Visual Exposure" v-model="d.tactileDiscriminationSmall.visual"/>
          <NegativeChannelScore subName="Without Exposure" v-model="d.tactileDiscriminationSmall.nonvisual"/>
        </div>
        <CommentBlock v-model="d.tactileDiscriminationSmall.comment"/>
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
        <CommentBlock v-model="d.rhomberg.comment"/>

        <h1 class="prompt">Manns &emdash; Right Foot in Front</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Eyes Open" v-model="d.mannsRightFoot.eyesOpen"/>
          <NegativeChannelScore subName="Eyes Closed" v-model="d.mannsRightFoot.eyesClosed"/>
        </div>
        <CommentBlock v-model="d.mannsRightFoot.comment"/>

        <h1 class="prompt">Manns &emdash; Left Foot in Front</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Eyes Open" v-model="d.mannsLeftFoot.eyesOpen"/>
          <NegativeChannelScore subName="Eyes Closed" v-model="d.mannsLeftFoot.eyesClosed"/>
        </div>
        <CommentBlock v-model="d.mannsLeftFoot.comment"/>

        <h1 class="prompt">Arm Matching</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="In Front" v-model="d.armMatching.front"/>
          <NegativeChannelScore subName="Above Head" v-model="d.armMatching.above"/>
          <NegativeChannelScore subName="Out to Side" v-model="d.armMatching.sides"/>
        </div>
        <CommentBlock v-model="d.armMatching.comment"/>

        <h1 class="prompt">Graphesthesia</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Right" v-model="d.graphesthesia.right"/>
          <NegativeChannelScore subName="Left" v-model="d.graphesthesia.left"/>
        </div>
        <CommentBlock v-model="d.graphesthesia.comment"/>
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
import CommentBlock from "@/components/CommentBlock"

export default {
  components: {
    ChannelScore,
    NegativeChannelScore,
    SubChannelScore,
    CommentBlock
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
