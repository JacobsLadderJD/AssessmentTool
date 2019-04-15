<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Language Channel</h1>
      <div class="level">
        <h2 class="level-head">
          LEVEL II
        </h2>
        <h1 class="prompt">Verbal Responses to Sounds</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.soundVerbalResponse.value"/>
        </div>
        <CommentBlock v-model="d.soundVerbalResponse.comment"/>


        <h2 class="level-head">
          LEVEL III
        </h2>
        <h1 class="prompt">Lip Utilization</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.lipUtilization.value"/>
        </div>
        <CommentBlock v-model="d.lipUtilization.comment"/>

        <h1 class="prompt">Oral Motor Movement</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.oralMotorMovement.value"/>
        </div>
        <CommentBlock v-model="d.oralMotorMovement.comment"/>

        <h1 class="prompt">Breath Support</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.breathSupport.value"/>
        </div>
        <CommentBlock v-model="d.breathSupport.comment"/>

        <h1 class="prompt">Phonation</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.phonation.value"/>
        </div>
        <CommentBlock v-model="d.phonation.comment"/>

        <h1 class="prompt">Sound Production - Short Vowels</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.vowelProductionShort.value"/>
        </div>
        <CommentBlock v-model="d.vowelProductionShort.comment"/>

        <h1 class="prompt">Sound Production - Long Vowels</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.vowelProductionLong.value"/>
        </div>
        <CommentBlock v-model="d.vowelProductionLong.comment"/>

        <h1 class="prompt">Vowel/Consonant Production</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.vowelConsonantProduction.value"/>
        </div>
        <CommentBlock v-model="d.vowelConsonantProduction.comment"/>

        <h1 class="prompt">Use of Meaningful Tones</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.meaningfulToneUse.value"/>
        </div>
        <CommentBlock v-model="d.meaningfulToneUse.comment"/>

        <h2 class="level-head">
          LEVEL IV
        </h2>
        <h1 class="prompt">Identify Pictures Receptively</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="FO2" v-model="d.identifyPicReceptively.fo2"/>
          <NegativeChannelScore subName="FO3" v-model="d.identifyPicReceptively.fo3"/>
        </div>
        <CommentBlock v-model="d.identifyPicReceptively.comment"/>

        <h1 class="prompt">Identify Pictures Expressively</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Verbal 1" v-model="d.identifyPicExpressively.verbal1"/>
          <NegativeChannelScore subName="Verbal 2" v-model="d.identifyPicExpressively.verbal2"/>
          <NegativeChannelScore subName="Verbal 3" v-model="d.identifyPicExpressively.verbal3"/>
        </div>
        <CommentBlock v-model="d.identifyPicExpressively.comment"/>

        <h1 class="prompt">Articulation - Initial Sounds</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.articulationInitial.value"/>
        </div>
        <CommentBlock v-model="d.articulationInitial.comment"/>

        <h1 class="prompt">Articulation - Medial Sounds</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.articulationMedial.value"/>
        </div>
        <CommentBlock v-model="d.articulationMedial.comment"/>

        <h1 class="prompt">Articulation - Final Sounds</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.articulationFinal.value"/>
        </div>
        <CommentBlock v-model="d.articulationFinal.comment"/>

        <h1 class="prompt">Use of Spontaneous Verbalizations</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.spontaneousVerbalizations.value"/>
        </div>
        <CommentBlock v-model="d.spontaneousVerbalizations.comment"/>

        <h2 class="level-head">
          LEVEL V
        </h2>
        <h1 class="prompt">Respond Yes or No</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.yesNoResponse.value"/>
        </div>
        <CommentBlock v-model="d.yesNoResponse.comment"/>

        <h1 class="prompt">Use of 2-3 Word Phrases</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.phrases.value"/>
        </div>
        <CommentBlock v-model="d.phrases.comment"/>

        <h2 class="level-head">
          LEVEL VI
        </h2>
        <h1 class="prompt">Use of 4-6 Word Sentences</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.sentencesResponse.value"/>
        </div>
        <CommentBlock v-model="d.sentencesResponse.comment"/>

        <h2 class="level-head">
          LEVEL VII
        </h2>
        <h1 class="prompt">Conversation with Multiple Exchanges</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.conversationExchange.value"/>
        </div>
        <CommentBlock v-model="d.conversationExchange.comment"/>

        <h1 class="prompt">Opposites</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.opposites.value"/>
        </div>
        <CommentBlock v-model="d.opposites.comment"/>
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
  name:"LanguageChannel",
  mixins: [SectionMixin],
  data: () => ({
    name: "languageSection"
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
