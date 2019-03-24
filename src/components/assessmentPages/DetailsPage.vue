<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Dominance</h1>
      <div class="row">
        <div class="item" style="text-align: left;">
          Ear
        </div>
        <div class="item" style="text-align: left;">
          Hand
        </div>
      </div>
      <div class="row">
        <div class="item" style="text-align: left;">
          <textarea v-model="earDominanceDetail"></textarea>
        </div>
        <div class="item" style="text-align: left;">
          <textarea v-model="handDominanceDetail"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="item" style="text-align: left;">
          Eye
        </div>
        <div class="item" style="text-align: left;">
          Foot
        </div>
      </div>
      <div class="row">
        <div class="item" style="text-align: left;">
          <textarea v-model="eyeDominanceDetail"></textarea>
        </div>
        <div class="item" style="text-align: left;">
          <textarea v-model="footDominanceDetail"></textarea>
        </div>
      </div>
    </div>

    <div class="form-section">
      <h1 class="title" style="text-align:left">Processing</h1>
      <div class="row">
        <div class="item">
          Auditory
        </div>
        <div class="item">
          Visual
        </div>
      </div>
      <div class="row">
        <div class="item">
          <textarea v-model="auditoryProcessingDetail"></textarea>
        </div>
        <div class="item">
          <textarea v-model="visualProcessingDetail"></textarea>
        </div>
      </div>
    </div>

    <div class="form-section">
      <h1 class="title" style="text-align:left">Testing Observations</h1>
      <div class="grid4">
        <!-- Row 1 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 3; grid-row-start: 1; grid-row-end: span 1; text-align: left; justify-self: center;">
          General Observations
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: left;">
          Behavior Observations
        </div>
        <!-- Row 2 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
          Eye Contact
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1;">
          <input type="checkbox" id="eye-contact-bool" v-model="eyeContactBool">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 4;">
          <textarea v-model="generalTestingObservations"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 4;">
          <textarea v-model="behaviorTestingObservations"></textarea>
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          Attention
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1;">
          <input type="checkbox" id="attention-bool" v-model="attentionBool">
        </div>
        <!-- Row 4 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
          Transitions
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1;">
          <input type="checkbox" id="transitions-bool" v-model="tansitionsBool">
        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
          Breaks Required
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1;">
          <input type="checkbox" id="breaks-required-bool" v-model="breaksRequiredBool">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormNav from '@/components/FormNav'
import types from '@/store/evaluation/types'
import DetailsPage from '@/components/assessmentPages/DetailsPage'
export default {
  name:"EvaluationViewer",
  components: {
    FormNav,
    DetailsPage,
  },
  data:() => ({

    earDominanceDetail: "",
    handDominanceDetail: "",
    eyeDominanceDetail: "",
    footDominanceDetail: "",
    auditoryProcessingDetail: "",
    visualProcessingDetail: "",
    eyeContactBool: "",
    attentionBool: "",
    transitionsBool: "",
    breaksRequiredBool: "",
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
  grid-template-rows: [first] auto [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 1fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr [thirteenth] 1fr [fourteenth] 1fr [fifteenth] 1fr [sixteenth] 1fr [seventeenth] 1fr [eighteenth] 1fr [nineteenth] 1fr [twentieth] 1fr [twentyfirst] 1fr [twentysecond] 1fr [twentythird] 1fr [twentyfourth] 1fr [twentyfifth] 1fr [twentysixth] 1fr [twentyseventh] auto [twentyeigth] 1fr [twentyninth] 1fr [thirtieth] 1fr [thirtyfirst] 1fr [thirtysecond] 1fr [thirtythird] 1fr [thirtyfourth] 1fr [thirtyfifth] 1fr [thirty sixth] 1fr [thirtyseventh] 1fr [thirtyeigth] 1fr [thirtyninth] 1fr [fortieth] 1fr [fortyfirst] 1fr [fortysecond] 1fr [fortythird] 1fr [fortyfourth] 1fr [fortyfifth] 1fr [fortysixth] 1fr [fortyseventh] 1fr [fortyeigth] 1fr [fortyninth] 1fr [fiftieth] 1fr [fiftyfirst] 1fr [fiftysecond] 1fr [fiftythird] 1fr [fiftyfourth] 1fr [fiftyfifth] 1fr;
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

.cell {
  white-space: normal;
  word-wrap: normal;
}
</style>
