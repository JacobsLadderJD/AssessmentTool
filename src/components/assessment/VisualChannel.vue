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
          <ChannelScore v-model="d.trackingHorizontal.value"/>
        </div>
        <CommentBlock v-model="d.trackingHorizontal.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL III
        </h2>
        <h1 class="prompt">Vertical Tracking</h1>
        <div class="subprompts">
          <ChannelScore v-model="d.trackingVertical.value"/>
        </div>
        <CommentBlock v-model="d.trackingVertical.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL IV
        </h2>
        <h1 class="prompt">Convergence</h1>
        <div class="subprompts">
          <ChannelScore v-model="d.convergence.value"/>
        </div>
        <CommentBlock v-model="d.convergence.comment"/>

        <h1 class="prompt">Divergence</h1>
        <div class="subprompts">
          <ChannelScore v-model="d.divergence.value"/>
        </div>
        <CommentBlock v-model="d.divergence.comment"/>

        <h1 class="prompt">Tracking Figure 8's &ndash; Horizontal</h1>
        <div class="subprompts">
          <ChannelScore v-model="d.eightTrackingHorizontal.value"/>
        </div>
        <CommentBlock v-model="d.eightTrackingHorizontal.comment"/>

        <h1 class="prompt">Tracking Figure 8's &ndash; Vertical</h1>
        <div class="subprompts">
          <ChannelScore v-model="d.eightTrackingVertical.value"/>
        </div>
        <CommentBlock v-model="d.eightTrackingVertical.comment"/>

        <h1 class="prompt">Tracking Figure 8's &ndash; Convergence/Divergence</h1>
        <div class="subprompts">
          <ChannelScore v-model="d.eightTrackingConDiv.value"/>
        </div>
        <CommentBlock v-model="d.eightTrackingConDiv.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL V
        </h2>
        <h1 class="prompt">Do This</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.doThis.value"/>
        </div>
        <CommentBlock v-model="d.doThis.comment"/>

        <h1 class="prompt">Initial Matching &ndash; Color</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialMatchColors.value"/>
        </div>
        <CommentBlock v-model="d.initialMatchColors.comment"/>

        <h1 class="prompt">Initial Matching &ndash; Shapes</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialMatchShapes.value"/>
        </div>
        <CommentBlock v-model="d.initialMatchShapes.comment"/>

        <h1 class="prompt">Initial Matching &ndash; Pictures</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialMatchPic.value"/>
        </div>
        <CommentBlock v-model="d.initialMatchPic.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL VI
        </h2>
        <h1 class="prompt">Colors</h1>
        <div class="prompt-options">
          <div class="option">
            <label>FO2</label>
            <input type="checkbox" v-model="d.colors.f02"/>
          </div>
          <div class="option">
            <label>FO3</label>
            <input type="checkbox" v-model="d.colors.f03"/>
          </div>
          <div class="option">
            <label>Verbal</label>
            <input type="checkbox" v-model="d.colors.verbal"/>
          </div>
        </div>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.colors.value"/>
        </div>
        <CommentBlock v-model="d.colors.comment"/>

        <h1 class="prompt">Shapes</h1>
        <div class="prompt-options">
          <div class="option">
            <label>FO2</label>
            <input type="checkbox" v-model="d.shapes.f02"/>
          </div>
          <div class="option">
            <label>FO3</label>
            <input type="checkbox" v-model="d.shapes.f03"/>
          </div>
          <div class="option">
            <label>Verbal</label>
            <input type="checkbox" v-model="d.shapes.verbal"/>
          </div>
        </div>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.shapes.value"/>
        </div>
        <CommentBlock v-model="d.shapes.comment"/>

        <h1 class="prompt">Numbers</h1>
        <div class="prompt-options">
          <div class="option">
            <label>FO2</label>
            <input type="checkbox" v-model="d.numbers.f02"/>
          </div>
          <div class="option">
            <label>FO3</label>
            <input type="checkbox" v-model="d.numbers.f03"/>
          </div>
          <div class="option">
            <label>Verbal</label>
            <input type="checkbox" v-model="d.numbers.verbal"/>
          </div>
        </div>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.numbers.value"/>
        </div>
        <CommentBlock v-model="d.numbers.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL VII
        </h2>
        <h1 class="prompt">Uppercase Letters</h1>
        <div class="prompt-options">
          <div class="option">
            <label>FO2</label>
            <input type="checkbox" v-model="d.uppercaseLetters.f02"/>
          </div>
          <div class="option">
            <label>FO3</label>
            <input type="checkbox" v-model="d.uppercaseLetters.f03"/>
          </div>
          <div class="option">
            <label>Verbal</label>
            <input type="checkbox" v-model="d.uppercaseLetters.verbal"/>
          </div>
        </div>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.uppercaseLetters.value"/>
        </div>
        <CommentBlock v-model="d.uppercaseLetters.comment"/>

        <h1 class="prompt">Lowercase Letters</h1>
        <div class="prompt-options">
          <div class="option">
            <label>FO2</label>
            <input type="checkbox" v-model="d.lowercaseLetters.f02"/>
          </div>
          <div class="option">
            <label>FO3</label>
            <input type="checkbox" v-model="d.lowercaseLetters.f03"/>
          </div>
          <div class="option">
            <label>Verbal</label>
            <input type="checkbox" v-model="d.lowercaseLetters.verbal"/>
          </div>
        </div>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.lowercaseLetters.value"/>
        </div>
        <CommentBlock v-model="d.lowercaseLetters.comment"/>

        <h1 class="prompt">Initial Sight Words</h1>
        <div class="prompt-options">
          <div class="option">
            <label>FO2</label>
            <input type="checkbox" v-model="d.initialSightWords.f02"/>
          </div>
          <div class="option">
            <label>FO3</label>
            <input type="checkbox" v-model="d.initialSightWords.f03"/>
          </div>
          <div class="option">
            <label>Verbal</label>
            <input type="checkbox" v-model="d.initialSightWords.verbal"/>
          </div>
        </div>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialSightWords.value"/>
        </div>
        <CommentBlock v-model="d.initialSightWords.comment"/>

        <h1 class="prompt">Visual Sequential Processing Speed</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.visualProcessingSpeed.value"/>
        </div>
        <CommentBlock v-model="d.visualProcessingSpeed.comment"/>
      </div>
    </div>
  </div>
</template>
<script>
// import types from '@/store/evaluation/types'
import SectionMixin from '@/mixins/section'
import ChannelScore from "@/components/ChannelScore"
import NegativeChannelScore from "@/components/NegativeChannelScore"
import CommentBlock from "@/components/CommentBlock"

export default {
  components: {
    ChannelScore,
    NegativeChannelScore,
    CommentBlock
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

.prompt-options {
  display: flex;
  /* max-width: 50%; */
  /* background-color: rgba(255, 0, 0, 0.5); */
}
.prompt-options .option {
  display: flex;
  /* flex: 1 0 50px; */
  margin-right: 40px;
  box-sizing: border-box;
  /* border: 1px solid blue; */
}
.prompt-options .option label {
  flex: 1;
  display: block;
  text-align: right;
}

.prompt-options .option input {
  flex: 0;
  height: 100%;
  display: block;
  margin-left: 1em;
}

</style>
