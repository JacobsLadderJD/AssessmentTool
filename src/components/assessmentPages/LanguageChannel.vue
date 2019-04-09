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

.grid1 {
  display: grid;
  grid-template-columns: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr;
  word-wrap: normal;
  width: 50%;
  justify-items: center;
}

.grid2 {
  display: grid;
  grid-template-columns: [first] auto [second] 1fr [third] 1fr [fourth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr;
  word-wrap: normal;
  justify-items: center;
  width: 75%;
  align-items: center;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid3 {
  display: grid;
  grid-template-columns: [first] auto [second] 1fr [third] 1fr [fourth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr;
  word-wrap: normal;
  justify-items: center;
  width: 75%;
  align-items: center;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid4 {
  display: grid;
  grid-template-columns: [first] auto [second] auto [third] 1fr [fourth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid5 {
  display: grid;
  grid-template-columns: [first] 3fr [second] 2fr [third] 2fr [fourth] 1fr [fifth] 1fr;
  grid-template-rows: [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr [thirteenth] 1fr [fourteenth] 1fr [fifteenth] 1fr [sixteenth] 1fr [seventeenth] 1fr [eighteenth] 1fr [nineteenth] 1fr [twentieth] 1fr [twentyfirst] 1fr [twentysecond] 1fr [twentythird] 1fr [twentyfourth] 1fr [twentyfifth] 1fr [twentysixth] 1fr [twentyseventh] auto [twentyeigth] 1fr [twentyninth] 1fr [thirtieth] 1fr [thirtyfirst] 1fr [thirtysecond] 1fr [thirtythird] 1fr [thirtyfourth] 1fr [thirtyfifth] 1fr [thirty sixth] 1fr [thirtyseventh] 1fr [thirtyeigth] 1fr [thirtyninth] 1fr [fortieth] 1fr [fortyfirst] 1fr [fortysecond] 1fr [fortythird] 1fr [fortyfourth] 1fr [fortyfifth] 1fr [fortysixth] 1fr [fortyseventh] 1fr [fortyeigth] 1fr [fortyninth] 1fr [fiftieth] 1fr [fiftyfirst] 1fr [fiftysecond] 1fr [fiftythird] 1fr [fiftyfourth] 1fr [fiftyfifth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid6 {
  display: grid;
  grid-template-columns: [first] auto [second] 9fr [third] auto [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] auto [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid7 {
  display: grid;
  grid-template-columns: [first] auto [second] 9fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] auto [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid8 {
  display: grid;
  grid-template-columns: [first] auto [second] 9fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
  grid-template-rows: [first] auto [second] 1fr [third] auto [fourth] 1fr [fifth] 1fr [sixth] auto [seventh] 1fr [eighth] auto [ninth] 1fr [tenth] 1fr;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.grid9 {
  display: grid;
  grid-template-columns: [first] auto [second] 9fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
  grid-template-rows: ;
  word-wrap: normal;
  justify-items: start;
  width: 100%;
  align-items: start;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
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
