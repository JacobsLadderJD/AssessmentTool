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
          <NegativeChannelScore v-model="d.soundVerbalResponse"/>
        </div>
        <div class="comment">
          <textarea v-model="d.soundVerbalResponse.comment"></textarea>
        </div>

        <h2 class="level-head">
          LEVEL III
        </h2>
        <h1 class="prompt">Lip Utilization</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.lipUtilization"/>
        </div>
        <div class="comment">
          <textarea v-model="d.lipUtilization.comment"></textarea>
        </div>

        <h1 class="prompt">Oral Motor Movement</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.oralMotorMovement"/>
        </div>
        <div class="comment">
          <textarea v-model="d.oralMotorMovement.comment"></textarea>
        </div>

        <h1 class="prompt">Breath Support</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.breathSupport"/>
        </div>
        <div class="comment">
          <textarea v-model="d.breathSupport.comment"></textarea>
        </div>

        <h1 class="prompt">Phonation</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.phonation"/>
        </div>
        <div class="comment">
          <textarea v-model="d.phonation.comment"></textarea>
        </div>

        <h1 class="prompt">Sound Production - Short Vowels</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.vowelProductionShort"/>
        </div>
        <div class="comment">
          <textarea v-model="d.vowelProductionShort.comment"></textarea>
        </div>

        <h1 class="prompt">Sound Production - Long Vowels</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.vowelProductionLong"/>
        </div>
        <div class="comment">
          <textarea v-model="d.vowelProductionLong.comment"></textarea>
        </div>

        <h1 class="prompt">Vowel/Consonant Production</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.vowelConsonantProduction"/>
        </div>
        <div class="comment">
          <textarea v-model="d.vowelConsonantProduction.comment"></textarea>
        </div>

        <h1 class="prompt">Use of Meaningful Tones</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.meaningfulToneUse"/>
        </div>
        <div class="comment">
          <textarea v-model="d.meaningfulToneUse.comment"></textarea>
        </div>

        <h2 class="level-head">
          LEVEL IV
        </h2>
        <h1 class="prompt">Identify Pictures Receptively</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="FO2" v-model="d.identifyPicReceptively.f02"/>
          <NegativeChannelScore subName="FO3" v-model="d.identifyPicReceptively.f03"/>
        </div>
        <div class="comment">
          <textarea v-model="d.identifyPicReceptively.comment"></textarea>
        </div>

        <h1 class="prompt">Identify Pictures Expressively</h1>
        <div class="subprompts">
          <NegativeChannelScore subName="Verbal 1" v-model="d.identifyPicExpressively.verbal1"/>
          <NegativeChannelScore subName="Verbal 2" v-model="d.identifyPicExpressively.verbal2"/>
          <NegativeChannelScore subName="Verbal 3" v-model="d.identifyPicExpressively.verbal3"/>
        </div>
        <div class="comment">
          <textarea v-model="d.identifyPicExpressively.comment"></textarea>
        </div>

        <h1 class="prompt">Articulation - Initial Sounds</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.articulationInitial"/>
        </div>
        <div class="comment">
          <textarea v-model="d.articulationInitial.comment"></textarea>
        </div>

        <h1 class="prompt">Articulation - Medial Sounds</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.articulationMedial"/>
        </div>
        <div class="comment">
          <textarea v-model="d.articulationMedial.comment"></textarea>
        </div>

        <h1 class="prompt">Articulation - Final Sounds</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.articulationFinal"/>
        </div>
        <div class="comment">
          <textarea v-model="d.articulationFinal.comment"></textarea>
        </div>

        <h1 class="prompt">Use of Spontaneous Verbalizations</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.spontaneousVerbalizations"/>
        </div>
        <div class="comment">
          <textarea v-model="d.spontaneousVerbalizations.comment"></textarea>
        </div>

        <h2 class="level-head">
          LEVEL V
        </h2>
        <h1 class="prompt">Respond Yes or No</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.yesNoResponse"/>
        </div>
        <div class="comment">
          <textarea v-model="d.yesNoResponse.comment"></textarea>
        </div>

        <h1 class="prompt">Use of 2-3 Word Phrases</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.phrases"/>
        </div>
        <div class="comment">
          <textarea v-model="d.phrases.comment"></textarea>
        </div>

        <h2 class="level-head">
          LEVEL VI
        </h2>
        <h1 class="prompt">Use of 4-6 Word Sentences</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.sentencesResponse"/>
        </div>
        <div class="comment">
          <textarea v-model="d.sentencesResponse.comment"></textarea>
        </div>

        <h2 class="level-head">
          LEVEL VII
        </h2>
        <h1 class="prompt">Conversation with Multiple Exchanges</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.conversationExchange"/>
        </div>
        <div class="comment">
          <textarea v-model="d.conversationExchange.comment"></textarea>
        </div>

        <h1 class="prompt">Opposites</h1>
        <div class="subprompts">
          <NegativeChannelScore v-model="d.opposites"/>
        </div>
        <div class="comment">
          <textarea v-model="d.opposites.comment"></textarea>
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
