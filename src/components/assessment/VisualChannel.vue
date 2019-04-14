<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Visual Channel</h1>


      <div class="level">
        <h2 class="level-head">
          LEVEL II
        </h2>
        <h1 class="prompt">Horizontal Tracking</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.trackingHorizontal"/>
        </div>
        <div class="comment">
          <textarea v-model="d.trackingHorizontal.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL III
        </h2>
        <h1 class="prompt">Vertical Tracking</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.trackingVertical"/>
        </div>
        <div class="comment">
          <textarea v-model="d.trackingVertical.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL IV
        </h2>
        <h1 class="prompt">Convergence</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.convergence"/>
        </div>
        <div class="comment">
          <textarea v-model="d.convergence.comment"></textarea>
        </div>

        <h1 class="prompt">Divergence</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.divergence"/>
        </div>
        <div class="comment">
          <textarea v-model="d.divergence.comment"></textarea>
        </div>

        <h1 class="prompt">Tracking Figure 8's - Horizontal</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.eightTrackingHorizontal"/>
        </div>
        <div class="comment">
          <textarea v-model="d.eightTrackingHorizontal.comment"></textarea>
        </div>

        <h1 class="prompt">Tracking Figure 8's - Vertical</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.eightTrackingVertical"/>
        </div>
        <div class="comment">
          <textarea v-model="d.eightTrackingVertical.comment"></textarea>
        </div>

        <h1 class="prompt">Tracking Figure 8's - Convergence/Divergence</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.eightTrackingConDiv"/>
        </div>
        <div class="comment">
          <textarea v-model="d.eightTrackingConDiv.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL V
        </h2>
        <h1 class="prompt">Do This</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.doThis"/>
        </div>
        <div class="comment">
          <textarea v-model="d.doThis.comment"></textarea>
        </div>

        <h1 class="prompt">Initial Matching - Color</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialMatchColors"/>
        </div>
        <div class="comment">
          <textarea v-model="d.initialMatchColors.comment"></textarea>
        </div>

        <h1 class="prompt">Initial Matching - Shapes</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialMatchShapes"/>
        </div>
        <div class="comment">
          <textarea v-model="d.initialMatchShapes.comment"></textarea>
        </div>

        <h1 class="prompt">Initial Matching - Pictures</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialMatchPic"/>
        </div>
        <div class="comment">
          <textarea v-model="d.initialMatchPic.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL VI
        </h2>
        <h1 class="prompt">Colors</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.colors"/>
        </div>
        <div class="comment">
          <textarea v-model="d.colors.comment"></textarea>
        </div>

        <h1 class="prompt">Shapes</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.shapes"/>
        </div>
        <div class="comment">
          <textarea v-model="d.shapes.comment"></textarea>
        </div>

        <h1 class="prompt">Numbers</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.numbers"/>
        </div>
        <div class="comment">
          <textarea v-model="d.numbers.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL VII
        </h2>
        <h1 class="prompt">Uppercase Letters</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.uppercaseLetters"/>
        </div>
        <div class="comment">
          <textarea v-model="d.uppercaseLetters.comment"></textarea>
        </div>

        <h1 class="prompt">Lowercase Letters</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.lowercaseLetters"/>
        </div>
        <div class="comment">
          <textarea v-model="d.lowercaseLetters.comment"></textarea>
        </div>

        <h1 class="prompt">Initial Sight Words</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialSightWords"/>
        </div>
        <div class="comment">
          <textarea v-model="d.initialSightWords.comment"></textarea>
        </div>

        <h1 class="prompt">Visual Sequential Processing Speed</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.visualProcessingSpeed"/>
        </div>
        <div class="comment">
          <textarea v-model="d.visualProcessingSpeed.comment"></textarea>
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
  name: "VisualChannel",
  mixins: [SectionMixin],
  data: () => ({
    name: "visualSection"
  })
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
.row {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.title {
  font-size: 4vw;
  margin-bottom: 5vw;
  text-align: center;
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
