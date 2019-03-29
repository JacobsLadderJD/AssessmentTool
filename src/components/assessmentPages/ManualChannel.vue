<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Manual Channel</h1>
      <div class="grid9">
        <!-- Row 1 -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          -3
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          -2
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          -1
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1;K grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          0
        </div>
        <div class="cell" style="grid-column-start: 8; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          1
        </div>
        <div class="cell" style="grid-column-start: 9; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          2
        </div>
        <div class="cell" style="grid-column-start: 10; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          3
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
        </div>
        <!-- Row 2 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL II
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Volitional Release of an Object
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.objectRelease.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.objectRelease.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.objectRelease.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.objectRelease.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.objectRelease.value" type="radio" value="NA">
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 3; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.objectRelease.comment"></textarea>
        </div>
        <!-- Row 4 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL III
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Volitional Grasp of an Object
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.objectGrasp.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.objectGrasp.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.objectGrasp.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.objectGrasp.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.objectGrasp.value" type="radio" value="NA">
        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 5; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.objectGrasp.comment"></textarea>
        </div>

        <!-- MISSING HAND TO MIDLINE TODO: add this-->

        <!-- Row 6 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL IV
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Transfers Objects
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.transfersObjects.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.transfersObjects.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.transfersObjects.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.transfersObjects.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.transfersObjects.value" type="radio" value="NA">
        </div>
        <!-- Row 7 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 7; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.transfersObjects.comment"></textarea>
        </div>
        <!-- Row 8 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Cortical Opposition
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.right" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.right" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.right" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.right" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.right" type="radio" value="NA">
        </div>
        <!-- Row 9 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 2; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.corticalOpposition.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.left" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.left" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.left" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.left" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.left" type="radio" value="NA">
        </div>
        <!-- Row 10 -->
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Simultaneously
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.both" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.both" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.both" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.both" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.corticalOpposition.both" type="radio" value="NA">
        </div>
        <!-- Row 11 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Claps
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.claps.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.claps.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.claps.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.claps.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.claps.value" type="radio" value="NA">
        </div>
        <!-- Row 12 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.claps.comment"></textarea>
        </div>
        <!-- Row 13 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL V
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Stacking Blocks
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.blockStacking.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.blockStacking.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.blockStacking.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.blockStacking.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.blockStacking.value" type="radio" value="NA">
        </div>
        <!-- Row 14 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 14; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.blockStacking.comment"></textarea>
        </div>
        <!-- Row 15 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Beans in a Bottle
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.beanBottle.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.beanBottle.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.beanBottle.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.beanBottle.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.beanBottle.value" type="radio" value="NA">
        </div>
        <!-- Row 16 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 16; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.beanBottle.comment"></textarea>
        </div>
        <!-- Row 17 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Pronation of the Wrists
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristPronation.right" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristPronation.right" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristPronation.right" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristPronation.right" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristPronation.right" type="radio" value="NA">
        </div>
        <!-- Row 18 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.wristPronation.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristPronation.left" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristPronation.left" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristPronation.left" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristPronation.left" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristPronation.left" type="radio" value="NA">
        </div>
        <!-- Row 19 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Supination of the Wrists
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristSupination.right" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristSupination.right" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristSupination.right" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristSupination.right" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristSupination.right" type="radio" value="NA">
        </div>
        <!-- Row 20 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.wristSupination.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristSupination.left" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristSupination.left" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristSupination.left" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristSupination.left" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.wristSupination.left" type="radio" value="NA">
        </div>
        <!-- Row 21 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Initial Coloring
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialColoring.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialColoring.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialColoring.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialColoring.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialColoring.value" type="radio" value="NA">
        </div>
        <!-- Row 22 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 22; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.initialColoring.comment"></textarea>
        </div>
        <!-- Row 23 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL VI
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Twist Cap
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Off
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.twistCap.off" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.twistCap.off" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.twistCap.off" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.twistCap.off" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.twistCap.off" type="radio" value="NA">
        </div>
        <!-- Row 24 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.twistCap.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          On
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.twistCap.on" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.twistCap.on" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.twistCap.on" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.twistCap.on" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.twistCap.on" type="radio" value="NA">
        </div>
        <!-- Row 25 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Stinging Beads
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Large
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stringingBeads.lg" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stringingBeads.lg" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stringingBeads.lg" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stringingBeads.lg" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stringingBeads.lg" type="radio" value="NA">
        </div>
        <!-- Row 26 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.stringingBeads.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Small
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stringingBeads.sm" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stringingBeads.sm" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stringingBeads.sm" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stringingBeads.sm" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stringingBeads.sm" type="radio" value="NA">
        </div>
        <!-- Row 27 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL VII
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Imitates
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Horizontal Line
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Vertical Line
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Circle
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Cross
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 3; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.imitates.comment"></textarea>
        </div>

        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Pencil Grasp
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.pencilGrasp.comment"></textarea>
        </div>

        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Connect the Dots
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 2; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.connectDots.notes"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          10" apart
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          6" apart
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          3" apart
        </div>
        <!-- 10" buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.ten" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.ten" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.ten" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.ten" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.ten" type="radio" value="NA">
        </div>
        <!-- 6" buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.six" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.six" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.six" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.six" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.six" type="radio" value="NA">
        </div>
        <!-- 6" buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.three" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.three" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.three" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.three" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.connectDots.three" type="radio" value="NA">
        </div>

        <!--TODO: These are actually the horizontals-->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.lineHorizontal" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.lineHorizontal" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.lineHorizontal" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.lineHorizontal" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.lineHorizontal" type="radio" value="NA">
        </div>

        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Name
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.name.comment"></textarea>
        </div>
        <!-- Name buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.name.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.name.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.name.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.name.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.name.value" type="radio" value="NA">
        </div>

        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Letters
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.letters.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          A  C  F  O  W
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          /5
        </div>
        <!-- Letters buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.letters.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.letters.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.letters.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.letters.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.letters.value" type="radio" value="NA">
        </div>

        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Dictated Sentence
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          "The cat ran up the tree."
        </div>
        <!-- Dictated buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.dictatedSentence.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.dictatedSentence.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.dictatedSentence.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.dictatedSentence.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.dictatedSentence.value" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.dictatedSentence.comment"></textarea>
        </div>


        <!-- vertical line buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.lineVertical" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.lineVertical" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.lineVertical" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.lineVertical" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.lineVertical" type="radio" value="NA">
        </div>

        <!-- circle buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.circle" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.circle" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.circle" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.circle" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.circle" type="radio" value="NA">
        </div>

        <!-- cross buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.cross" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.cross" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.cross" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.cross" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.imitates.cross" type="radio" value="NA">
        </div>

        <!-- pencil grasp buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.pencilGrasp.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.pencilGrasp.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.pencilGrasp.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.pencilGrasp.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.pencilGrasp.value" type="radio" value="NA">
        </div>

        <!-- Row 28 -->
      </div>
    </div>
  </div>
</template>
<script>
// import types from '@/store/evaluation/types'
export default {
  name:"ManualChannel",
  data:() => ({
    d: {
      objectRelease: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      },
      objectGrasp: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      },
      handsToMidline: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      },
      transfersObjects: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      },
      corticalOpposition: {
        comment: "",
        type: "NegativeChannelScore",
        right: null,
        left: null,
        both: null
      },
      claps: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      },
      blockStacking: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      },
      beanBottle: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      },
      wristPronation: {
        comment: "",
        type: "NegativeChannelScore",
        right: null,
        left: null
      },
      wristSupination: {
        comment: "",
        type: "NegativeChannelScore",
        right: null,
        left: null
      },
      initialColoring: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      },
      twistCap: {
        comment: "",
        type: "NegativeChannelScore",
        on: null,
        off: null
      },
      stringingBeads: {
        comment: "",
        type: "NegativeChannelScore",
        lg: null,
        sm: null
      },
      imitates: {
        comment: "",
        type: "NegativeChannelScore",
        lineHorizontal: null,
        lineVertical: null,
        circle: null,
        cross: null
      },
      pencilGrasp: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      },
      connectDots: {
        comment: "",
        type: "NegativeChannelScore",
        ten: null,
        six: null,
        three: null
      },
      name: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      },
      letters: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      },
      dictatedSentence: {
        comment: "",
        type: "NegativeChannelScore",
        value: null
      }
    }

  })
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
</style>
