<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Sensitivities</h1>
      <div class="level">
        <h2 class="level-head">
          HEAD SENSITIVITIES
        </h2>
        <h1 class="prompt">Haircuts</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.haircuts"/>
        </div>
        <div class="comment">
          <textarea v-model="d.haircuts.comment"></textarea>
        </div>

        <h1 class="prompt">Washing Face</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.washingFace"/>
        </div>
        <div class="comment">
          <textarea v-model="d.washingFace.comment"></textarea>
        </div>

        <h1 class="prompt">Washing Hair</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.washingHair"/>
        </div>
        <div class="comment">
          <textarea v-model="d.washingHair.comment"></textarea>
        </div>

        <h1 class="prompt">Brushing Teeth</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.brushingTeeth"/>
        </div>
        <div class="comment">
          <textarea v-model="d.brushingTeeth.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          NAIL SENSITIVITIES
        </h2>
        <h1 class="prompt">Cutting Nails</h1>
        <div class="subprompts">
          <PositiveChannelScore subName="Fingers" v-model="d.nailCutting.fingers"/>
          <PositiveChannelScore subName="Toes" v-model="d.nailCutting.toes"/>
        </div>
        <div class="comment">
          <textarea v-model="d.nailCutting.comment"></textarea>
        </div>
      </div>

      <div class="level">
        <h2 class="level-head">
          CLOTHING SENSITIVITIES
        </h2>
        <h1 class="prompt">Tags</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.tags"/>
        </div>
        <div class="comment">
          <textarea v-model="d.tags.comment"></textarea>
        </div>

        <h1 class="prompt">Shirt</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.shirt"/>
        </div>
        <div class="comment">
          <textarea v-model="d.shirt.comment"></textarea>
        </div>

        <h1 class="prompt">Pants</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.pants"/>
        </div>
        <div class="comment">
          <textarea v-model="d.pants.comment"></textarea>
        </div>

        <h1 class="prompt">Socks</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.socks"/>
        </div>
        <div class="comment">
          <textarea v-model="d.socks.comment"></textarea>
        </div>

        <h1 class="prompt">Shoes</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.shoes"/>
        </div>
        <div class="comment">
          <textarea v-model="d.shoes.comment"></textarea>
        </div>

        <h1 class="prompt">Coat</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.coat"/>
        </div>
        <div class="comment">
          <textarea v-model="d.coat.comment"></textarea>
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
import PositiveChannelScore from "@/components/PositiveChannelScore"

export default {
  components: {
    ChannelScore,
    PositiveChannelScore,
    SubChannelScore,
    PositiveChannelScore
  },
  name:"SensitivitiesPage",
  mixins: [SectionMixin],
  data: () => ({
    name: "sensitivitiesSection"
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
  grid-template-columns: [first] 4fr [second] 1fr [third] 1fr [fourth] 1fr [fifth] 1fr [sixth] 1fr [seventh] 4fr [eighth] 1fr [ninth] 1fr [tenth] 1fr [eleventh] 1fr [twelfth] 1fr;
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
