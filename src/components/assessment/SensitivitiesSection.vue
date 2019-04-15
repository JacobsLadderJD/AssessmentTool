<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Sensitivities</h1>
      <div class="level">
        <h2 class="level-head">
          Head Sensitivities
        </h2>
        <h1 class="prompt">Haircuts</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.haircuts.value"/>
        </div>
        <CommentBlock v-model="d.haircuts.comment"/>

        <h1 class="prompt">Washing Face</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.washingFace.value"/>
        </div>
        <CommentBlock v-model="d.washingFace.comment"/>

        <h1 class="prompt">Washing Hair</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.washingHair.value"/>
        </div>
        <CommentBlock v-model="d.washingHair.comment"/>

        <h1 class="prompt">Brushing Teeth</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.brushingTeeth.value"/>
        </div>
        <CommentBlock v-model="d.brushingTeeth.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          Nail Sensitivities
        </h2>
        <h1 class="prompt">Cutting Nails</h1>
        <div class="subprompts">
          <PositiveChannelScore subName="Fingers" v-model="d.nailCutting.fingers"/>
          <PositiveChannelScore subName="Toes" v-model="d.nailCutting.toes"/>
        </div>
        <CommentBlock v-model="d.nailCutting.comment"/>
      </div>

      <div class="level">
        <h2 class="level-head">
          Clothing Sensitivities
        </h2>
        <h1 class="prompt">Tags</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.tags.value"/>
        </div>
        <CommentBlock v-model="d.tags.comment"/>

        <h1 class="prompt">Shirt</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.shirt.value"/>
        </div>
        <CommentBlock v-model="d.shirt.comment"/>

        <h1 class="prompt">Pants</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.pants.value"/>
        </div>
        <CommentBlock v-model="d.pants.comment"/>

        <h1 class="prompt">Socks</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.socks.value"/>
        </div>
        <CommentBlock v-model="d.socks.comment"/>

        <h1 class="prompt">Shoes</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.shoes.value"/>
        </div>
        <CommentBlock v-model="d.shoes.comment"/>

        <h1 class="prompt">Coat</h1>
        <div class="subprompts">
          <PositiveChannelScore v-model="d.coat.value"/>
        </div>
        <CommentBlock v-model="d.coat.comment"/>
      </div>

    </div>
  </div>
</template>
<script>
// import types from '@/store/evaluation/types'
import SectionMixin from '@/mixins/section'
import ChannelScore from "@/components/ChannelScore"
import SubChannelScore from "@/components/SubChannelScore"
import PositiveChannelScore from "@/components/PositiveChannelScore"
import CommentBlock from "@/components/CommentBlock"

export default {
  components: {
    ChannelScore,
    SubChannelScore,
    PositiveChannelScore,
    CommentBlock
  },
  name:"SensitivitiesSection",
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
