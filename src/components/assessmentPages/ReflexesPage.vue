<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Reflexes</h1>
      



      <div class="grid5">
        <!-- row 1 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          Not Integrated
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          Integrated
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          NA
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          #
        </div>
        <!-- Row 2 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: left; justify-self: start;">
          Moro Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="moro-reflex-na" v-model="d.moro.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          212
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: right; justify-self: end;">
          Upper
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.moro.upper" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.moro.upper" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 4 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: right; justify-self: end;">
          Lower
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.moro.lower" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.moro.lower" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: left; justify-self: start;">
          Spinal Galant Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="spinal-galant-reflex-na" v-model="d.spinalGalant.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          213
        </div>
        <!-- Row 6 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: right; justify-self: end;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.spinalGalant.left" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.spinalGalant.left" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 7 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: right; justify-self: end;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.spinalGalant.right" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.spinalGalant.right" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 8 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: left; justify-self: start;">
          Crossed Extensor Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="crossed-extensor-reflex-na" v-model="d.crossedExtensor.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          214
        </div>
        <!-- Row 9 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: right; justify-self: end;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.crossedExtensor.left" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossedExtensor.left" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 10 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: right; justify-self: end;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.crossedExtensor.right" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossedExtensor.right" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 11 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: left; justify-self: start;">
          Spinal Perez Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="spinal-perez-reflex-na" v-model="d.spinalPerez.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          215
        </div>
        <!-- Row 12 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: right; justify-self: end;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.spinalPerez.left" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.spinalPerez.left" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 13 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: right; justify-self: end;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.spinalPerez.right" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.spinalPerez.right" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 14 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: left; justify-self: start;">
          Babinski Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="babinski-reflex-na" v-model="d.babinski.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          216
        </div>
        <!-- Row 15 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: right; justify-self: end;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.babinski.left" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.babinski.left" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 16 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: right; justify-self: end;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.babinski.right" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.babinski.right" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 17 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: left; justify-self: start;">
          Asymmetrical Tonic Neck Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="asymmetrical-tonic-neck-reflex-na" v-model="d.asymmetricalTonic.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          217
        </div>
        <!-- Row 18 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: right; justify-self: end;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.asymmetricalTonic.left" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.asymmetricalTonic.left" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 18; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 19 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: right; justify-self: end;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.asymmetricalTonic.right" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.asymmetricalTonic.right" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 20 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: left; justify-self: start;">
          Bauer Crawling Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="bauer-crawling-reflex-na" v-model="d.bauerCrawling.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          218
        </div>
        <!-- Row 21 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: right; justify-self: end;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.bauerCrawling.left" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bauerCrawling.left" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 22 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: right; justify-self: end;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.bauerCrawling.right" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bauerCrawling.right" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 23 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: start;">
          Babkin Palmomental Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="babkin-palmomental-reflex-na" v-model="d.babkinPalmomental.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: center; justify-self: center;">
          219
        </div>
        <!-- Row 24 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: right; justify-self: end;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.babkinPalmomental.left" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.babkinPalmomental.left" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 25 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: right; justify-self: end;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.babkinPalmomental.right" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.babkinPalmomental.right" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 26 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: left; justify-self: start;">
          Hand Grasping Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="hand-grasping-reflex-na" v-model="d.handGrasping.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          220
        </div>
        <!-- Row 27 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: right; justify-self: end;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.handGrasping.left" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.handGrasping.left" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 27; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 28 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: right; justify-self: end;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.handGrasping.right" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.handGrasping.right" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 29 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: left; justify-self: start;">
          Frontal Release Signs
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="frontal-release-signs-na" v-model="d.frontalRelease.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          221
        </div>
        <!-- Row 30 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: right; justify-self: end;">
          Snout
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.frontalRelease.snout" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.frontalRelease.snout" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 31 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: right; justify-self: end;">
          Sucking
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.frontalRelease.sucking" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.frontalRelease.sucking" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 32 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: right; justify-self: end;">
          Rooting
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.frontalRelease.rooting" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.frontalRelease.rooting" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 33 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: right; justify-self: end;">
          Glabellar
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.frontalRelease.glabellar" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.frontalRelease.glabellar" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 34 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: left; justify-self: start;">
          Stepping Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="stepping-reflex-na" v-model="d.stepping.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          222
        </div>
        <!-- Row 35 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: right; justify-self: end;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 35; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 36 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: right; justify-self: end;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 37 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: left; justify-self: start;">
          Hands Pulling Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="hands-pulling-reflex-na" v-model="d.handsPulling.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          223
        </div>
        <!-- Row 38 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: right; justify-self: end;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- row 39 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: right; justify-self: end;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 40 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: left; justify-self: start;">
          Hands Supporting Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="hands-supporting-reflex-na" v-model="d.handsSupporting.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center;">
          224
        </div>
        <!-- Row 41 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: right; justify-self: end;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.handsSupporting.left" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.handsSupporting.left" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 42 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: right; justify-self: end;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.handsSupporting.right" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.handsSupporting.right" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 43 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: left; justify-self: start;">
          Landau Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="landau-reflex-na" v-model="d.landau.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          225
        </div>
        <!-- Row 44 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: right; justify-self: end;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 45 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: right; justify-self: end;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 46 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: left; justify-self: start;">
          Symmetrical Tonic Neck Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="symmetrical-tonic-neck-reflex-na" v-model="d.symmetricalTonic.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center;">
          226
        </div>
        <!-- Row 47 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: right; justify-self: end;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 48 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: right; justify-self: end;">

        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 49 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: left; justify-self: start;">
          Tonic Labyrinthine Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="tonic-labyrinthine-reflex-na" v-model="d.tonicLabyrinthine.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          227
        </div>
        <!-- Row 50 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: right; justify-self: end;">
          Forward
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.tonicLabyrinthine.forward" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.tonicLabyrinthine.forward" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 51 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: right; justify-self: end;">
          Backward
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.tonicLabyrinthine.backward" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.tonicLabyrinthine.backward" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 52 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: left; justify-self: start;">
          Hand Righting Reflex
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input type="checkbox" id="hand-righting-reflex-na" v-model="d.headRighting.na">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          228
        </div>
        <!-- Row 53 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: right; justify-self: end;">
          Side-to-Side
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.headRighting.sideToSide" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.headRighting.sideToSide" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <!-- Row 54 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: right; justify-self: end;">
          Front-to-Back
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; justify-self: center;">
          <input v-model="d.headRighting.frontToBack" type="radio" value="false">
          <label for="radio">  NI</label>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.headRighting.frontToBack" type="radio" value="true">
          <label for="radio">  I</label>
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">

        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">

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
  name:"ReflexesPage",
  mixins: [SectionMixin],
  data:() => ({
    name: "reflexSection"
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
