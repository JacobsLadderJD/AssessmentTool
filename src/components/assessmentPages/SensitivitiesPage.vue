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
