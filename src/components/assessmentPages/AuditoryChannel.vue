<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Auditory Channel</h1>
      <div class="level">
        <h2 class="level-head">
          LEVEL II
        </h2>
        <h1 class="prompt">Vestibular Function</h1>
        <div class="subprompts">
          <SubChannelScore subName="Right" v-model="d.vestibularFunction.right"/>
          <SubChannelScore subName="Left" v-model="d.vestibularFunction.left"/>

        </div>
        <div class="comment">
          <textarea v-model="d.vestibularFunction.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL III
        </h2>
        <h1 class="prompt">Reaction to Threatening Sounds</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.threateningSound"/>
        </div>
        <div class="comment">
          <textarea v-model="d.threateningSound.comment"></textarea>
        </div>

        <h1 class="prompt">Sensitivity to Sound</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.soundSensitivity"/>
        </div>
        <div class="comment">
          <textarea v-model="d.soundSensitivity.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL IV
        </h2>
        <h1 class="prompt">Reaction to Change in Tonality</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.tonalityChangeReaction"/>
        </div>
        <div class="comment">
          <textarea v-model="d.tonalityChangeReaction.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL V
        </h2>
        <h1 class="prompt">Initial Receptive Words</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.initialReceptiveWords"/>
        </div>
        <div class="comment">
          <textarea v-model="d.initialReceptiveWords.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL VI
        </h2>
        <h1 class="prompt">Follows One Step Directions</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.oneStepDirections"/>
        </div>
        <div class="comment">
          <textarea v-model="d.oneStepDirections.comment"></textarea>
        </div>

        <h1 class="prompt">Understands 2 - 4 Word Phrases</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.shortPhrases"/>
        </div>
        <div class="comment">
          <textarea v-model="d.shortPhrases.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL VII
        </h2>
        <h1 class="prompt">Follows Two Step Directions</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.twoStepDirections"/>
        </div>
        <div class="comment">
          <textarea v-model="d.twoStepDirections.comment"></textarea>
        </div>

        <h1 class="prompt">Understands 5 - 8 Word Sentences</h1>
        <div class="subprompts">
          <SubChannelScore v-model="d.sentenceUnderstanding"/>
        </div>
        <div class="comment">
          <textarea v-model="d.sentenceUnderstanding.comment"></textarea>
        </div>

        <h1 class="prompt">Auditory Sequential Processing Speed</h1>
        <div class="subprompts">
          <SubChannelScore subName="Line 1" v-model="d.auditoryProcessingSpeed.line1"/>
          <SubChannelScore subName="Line 2" v-model="d.auditoryProcessingSpeed.line2"/>
          <SubChannelScore subName="Line 3" v-model="d.auditoryProcessingSpeed.line3"/>
          <SubChannelScore subName="Line 4" v-model="d.auditoryProcessingSpeed.line4"/>
        </div>
        <div class="comment">
          <textarea v-model="d.auditoryProcessingSpeed.comment"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  name:"AuditoryChannel",
  mixins: [SectionMixin],
  data: () => ({
    name: "auditorySection"
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
