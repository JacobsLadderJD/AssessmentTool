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
        <CommentBlock v-model="d.vestibularFunction.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL III
        </h2>
        <h1 class="prompt">Reaction to Threatening Sounds</h1>
        <div class="subprompts">
          <ChannelScore v-model="d.threateningSound.value"/>
        </div>
        <CommentBlock v-model="d.threateningSound.comment"/>

        <h1 class="prompt">Sensitivity to Sound</h1>
        <div class="subprompts">
          <ChannelScore v-model="d.soundSensitivity.value"/>
        </div>
        <CommentBlock v-model="d.soundSensitivity.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL IV
        </h2>
        <h1 class="prompt">Reaction to Change in Tonality</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.tonalityChangeReaction.value"/>
        </div>
        <CommentBlock v-model="d.tonalityChangeReaction.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL V
        </h2>
        <h1 class="prompt">Initial Receptive Words</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.initialReceptiveWords.value"/>
        </div>
        <CommentBlock v-model="d.initialReceptiveWords.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL VI
        </h2>
        <h1 class="prompt">Follows One Step Directions</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.oneStepDirections.value"/>
        </div>
        <CommentBlock v-model="d.oneStepDirections.comment"/>

        <h1 class="prompt">Understands 2 - 4 Word Phrases</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.shortPhrases.value"/>
        </div>
        <CommentBlock v-model="d.shortPhrases.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          LEVEL VII
        </h2>
        <h1 class="prompt">Follows Two Step Directions</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.twoStepDirections.value"/>
        </div>
        <CommentBlock v-model="d.twoStepDirections.comment"/>

        <h1 class="prompt">Understands 5 - 8 Word Sentences</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.sentenceUnderstanding.value"/>
        </div>
        <CommentBlock v-model="d.sentenceUnderstanding.comment"/>

        <h1 class="prompt">Auditory Sequential Processing Speed</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Line 1" v-model="d.auditoryProcessingSpeed.line1"/>
          <NegativeChannelScore subName="Line 2" v-model="d.auditoryProcessingSpeed.line2"/>
          <NegativeChannelScore subName="Line 3" v-model="d.auditoryProcessingSpeed.line3"/>
          <NegativeChannelScore subName="Line 4" v-model="d.auditoryProcessingSpeed.line4"/>
        </div>
        <CommentBlock v-model="d.auditoryProcessingSpeed.comment"/>
      </div>
    </div>
  </div>
</template>
<script>
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
  name:"AuditoryChannel",
  mixins: [SectionMixin],
  data: () => ({
    name: "auditorySection"
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

h2 {
  margin-bottom: 4vw;
}

.prompt {
  grid-area: prompt;
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
