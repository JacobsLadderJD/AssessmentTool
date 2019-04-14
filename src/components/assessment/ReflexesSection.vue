<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Reflexes</h1>
      <div class="level">
        <h1 class="prompt">Moro Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Upper" v-model="d.moro.upper"/>
          <ReflexScore subName="Lower" v-model="d.moro.lower"/>
        </div>
        <div class="comment">
          <textarea v-model="d.moro.comment"></textarea>
        </div>

        <h1 class="prompt">Spinal Galant Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Right" v-model="d.spinalGalant.right"/>
          <ReflexScore subName="Left" v-model="d.spinalGalant.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.spinalGalant.comment"></textarea>
        </div>

        <h1 class="prompt">Crossed Extensor Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Right" v-model="d.crossedExtensor.right"/>
          <ReflexScore subName="Left" v-model="d.crossedExtensor.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.spinalGalant.comment"></textarea>
        </div>

        <h1 class="prompt">Spinal Perez Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Right" v-model="d.spinalPerez.right"/>
          <ReflexScore subName="Left" v-model="d.spinalPerez.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.spinalPerez.comment"></textarea>
        </div>

        <h1 class="prompt">Babinski Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Right" v-model="d.babinski.right"/>
          <ReflexScore subName="Left" v-model="d.babinski.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.babinski.comment"></textarea>
        </div>

        <h1 class="prompt">Asymmetrical Tonic Neck Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Right" v-model="d.asymmetricalTonic.right"/>
          <ReflexScore subName="Left" v-model="d.asymmetricalTonic.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.asymmetricalTonic.comment"></textarea>
        </div>

        <h1 class="prompt">Bauer Crawling Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Right" v-model="d.bauerCrawling.right"/>
          <ReflexScore subName="Left" v-model="d.bauerCrawling.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.bauerCrawling.comment"></textarea>
        </div>

        <h1 class="prompt">Babkin Palmomental Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Right" v-model="d.babkinPalmomental.right"/>
          <ReflexScore subName="Left" v-model="d.babkinPalmomental.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.babkinPalmomental.comment"></textarea>
        </div>

        <h1 class="prompt">Hand Grasping Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Right" v-model="d.handGrasping.right"/>
          <ReflexScore subName="Left" v-model="d.handGrasping.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.handGrasping.comment"></textarea>
        </div>

        <h1 class="prompt">Frontal Release Signs</h1>
        <div class="subprompts">
          <ReflexScore subName="Snout" v-model="d.frontalRelease.snout"/>
          <ReflexScore subName="Sucking" v-model="d.frontalRelease.sucking"/>
          <ReflexScore subName="Rooting" v-model="d.frontalRelease.rooting"/>
          <ReflexScore subName="Glabellar" v-model="d.frontalRelease.glabellar"/>
        </div>
        <div class="comment">
          <textarea v-model="d.frontalRelease.comment"></textarea>
        </div>

        <h1 class="prompt">Stepping Reflex</h1>
        <div class="comment">
          <textarea v-model="d.stepping.comment"></textarea>
        </div>

        <h1 class="prompt">Hands Pulling Reflex</h1>
        <div class="comment">
          <textarea v-model="d.handsPulling.comment"></textarea>
        </div>

        <h1 class="prompt">Hands Supporting Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Right" v-model="d.handsSupporting.right"/>
          <ReflexScore subName="Left" v-model="d.handsSupporting.left"/>
        </div>
        <div class="comment">
          <textarea v-model="d.handsSupporting.comment"></textarea>
        </div>

        <h1 class="prompt">Landau Reflex</h1>
        <div class="comment">
          <textarea v-model="d.landau.comment"></textarea>
        </div>

        <h1 class="prompt">Symmetrical Tonic Neck Reflex</h1>
        <div class="comment">
          <textarea v-model="d.symmetricalTonic.comment"></textarea>
        </div>

        <h1 class="prompt">Tonic Labyrinthine Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Forward" v-model="d.tonicLabyrinthine.forward"/>
          <ReflexScore subName="Backward" v-model="d.tonicLabyrinthine.backward"/>
        </div>
        <div class="comment">
          <textarea v-model="d.tonicLabyrinthine.comment"></textarea>
        </div>

        <h1 class="prompt">Head Righting Reflex</h1>
        <div class="subprompts">
          <ReflexScore subName="Side-to-Side" v-model="d.headRighting.sideToSide"/>
          <ReflexScore subName="Front-to-Back" v-model="d.headRighting.frontToBack"/>
        </div>
        <div class="comment">
          <textarea v-model="d.headRighting.comment"></textarea>
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
import ReflexScore from "@/components/ReflexScore"

export default {
  components: {
    ChannelScore,
    NegativeChannelScore,
    SubChannelScore,
    ReflexScore,
  },
  name:"ReflexesSection",
  mixins: [SectionMixin],
  data:() => ({
    name: "reflexSection"
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
