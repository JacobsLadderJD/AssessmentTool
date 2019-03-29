<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Language Channel</h1>
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
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: left;">
          LEVEL II
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: left;">
          Verbal Responses to Sounds
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.soundVerbalResponse.comment"></textarea>
        </div>

        <!-- Verb response buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.soundVerbalResponse.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.soundVerbalResponse.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.soundVerbalResponse.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.soundVerbalResponse.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.soundVerbalResponse.value" type="radio" value="NA">
        </div>

        <!-- row 4 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: left;">
          LEVEL III
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: left;">
          Lip Utilization
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.lipUtilization.comment"></textarea>
        </div>

        <!-- Lip Use buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.lipUtilization.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.lipUtilization.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.lipUtilization.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.lipUtilization.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.lipUtilization.value" type="radio" value="NA">
        </div>


        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: left;">
          Oral Motor Movement
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.oralMotorMovement.comment"></textarea>
        </div>

        <!-- oral motor buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oralMotorMovement.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oralMotorMovement.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oralMotorMovement.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oralMotorMovement.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oralMotorMovement.value" type="radio" value="NA">
        </div>


        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: left;">
          Breath Support
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.breathSupport.comment"></textarea>
        </div>


        <!-- breath support buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.breathSupport.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.breathSupport.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.breathSupport.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.breathSupport.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.breathSupport.value" type="radio" value="NA">
        </div>

        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: left;">
          Phonation
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.phonation.comment"></textarea>
        </div>


        <!-- phonation buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.phonation.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.phonation.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.phonation.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.phonation.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.phonation.value" type="radio" value="NA">
        </div>


        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: left;">
          Sound Production - Short Vowels
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.vowelProductionShort.comment"></textarea>
        </div>


        <!-- sound short buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelProductionShort.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelProductionShort.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelProductionShort.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelProductionShort.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelProductionShort.value" type="radio" value="NA">
        </div>


        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: left;">
          Sound Production - Long Vowels
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.vowelProductionLong.comment"></textarea>
        </div>


        <!-- sound long buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelProductionLong.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelProductionLong.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelProductionLong.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelProductionLong.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelProductionLong.value" type="radio" value="NA">
        </div>


        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: left;">
          Vowel/Consonant Production
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.vowelConsonantProduction.comment"></textarea>
        </div>


        <!-- vowel production buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelConsonantProduction.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelConsonantProduction.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelConsonantProduction.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelConsonantProduction.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.vowelConsonantProduction.value" type="radio" value="NA">
        </div>


        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: left;">
          Use of Meaningful Tones
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.meaningfulToneUse.comment"></textarea>
        </div>


        <!-- meaningful tones buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.meaningfulToneUse.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.meaningfulToneUse.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.meaningfulToneUse.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.meaningfulToneUse.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 25; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.meaningfulToneUse.value" type="radio" value="NA">
        </div>


        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: left;">
          LEVEL IV
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: left;">
          Identify Pictures Receptively
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.identifyPicReceptively.comment"></textarea>
        </div>

        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: left;">
          FO2
        </div>

        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: left;">
          FO3
        </div>

        <!-- id pictures FO2 buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicReceptively.fO2" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicReceptively.fO2" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicReceptively.fO2" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicReceptively.fO2" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicReceptively.fO2" type="radio" value="NA">
        </div>

        <!-- id pictures FO3 buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicReceptively.f03" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicReceptively.f03" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicReceptively.f03" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicReceptively.f03" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicReceptively.f03" type="radio" value="NA">
        </div>


        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: left;">
          Identify Pictures Expressively
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 2; text-align: left; justify-self: start; align-items: start;">
          <textarea v-model="d.identifyPicExpressively.comment"></textarea>
        </div>

        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: left;">
          Verbal1
        </div>

        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: left;">
          Verbal2
        </div>

        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: left;">
          Verbal3
        </div>

        <!-- verbal 1 buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal1" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal1" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal1" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal1" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal1" type="radio" value="NA">
        </div>

        <!-- verbal 2 buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal2" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal2" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal2" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal2" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal2" type="radio" value="NA">
        </div>

        <!-- verbal 3 buttons -->
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal3" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal3" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal3" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal3" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 33; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.identifyPicExpressively.verbal3" type="radio" value="NA">
        </div>

        <!-- Row 34 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 34; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          Articulation - Initial Sounds
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationInitial.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationInitial.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationInitial.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationInitial.value" type="radio" value="0">
        </div>

        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationInitial.value" type="radio" value="NA">
        </div>
        <!-- Row 35 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 35; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="d.articulationInitial.comment"></textarea>
        </div>
        <!-- Row 36 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 36; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          Articulation - Medial Sounds
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationMedial.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationMedial.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationMedial.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationMedial.value" type="radio" value="0">
        </div>

        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationMedial.value" type="radio" value="NA">
        </div>
        <!-- Row 37 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 37; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="d.articulationMedial.comment"></textarea>
        </div>
        <!-- Row 38 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 38; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          Articulation - Final Sounds
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationFinal.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationFinal.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationFinal.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationFinal.value" type="radio" value="0">
        </div>

        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.articulationFinal.value" type="radio" value="NA">
        </div>
        <!-- Row 39 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 39; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="d.articulationFinal.comment"></textarea>
        </div>
        <!-- Row 40 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 40; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          Use of Spontaneous Verbalizations
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.spontaneousVerbalizations.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.spontaneousVerbalizations.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.spontaneousVerbalizations.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.spontaneousVerbalizations.value" type="radio" value="0">
        </div>

        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.spontaneousVerbalizations.value" type="radio" value="NA">
        </div>
        <!-- Row 41 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 41; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="d.spontaneousVerbalizations.comment"></textarea>
        </div>
        <!-- Row 42 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          LEVEL V
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 42; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          Responds Yes or No
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.yesNoResponse.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.yesNoResponse.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.yesNoResponse.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.yesNoResponse.value" type="radio" value="0">
        </div>

        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.yesNoResponse.value" type="radio" value="NA">
        </div>
        <!-- Row 43 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 43; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="d.yesNoResponse.comment"></textarea>
        </div>
        <!-- Row 44 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 44; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          Use of 2-3 Word Phrases
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.phrases.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.phrases.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.phrases.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.phrases.value" type="radio" value="0">
        </div>

        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.phrases.value" type="radio" value="NA">
        </div>
        <!-- Row 45 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 45; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="d.phrases.comment"></textarea>
        </div>
        <!-- Row 46 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          LEVEL VI
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 46; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          Use of 4-6 Word Sentences
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.sentencesResponse.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.sentencesResponse.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.sentencesResponse.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.sentencesResponse.value" type="radio" value="0">
        </div>

        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.sentencesResponse.value" type="radio" value="NA">
        </div>
        <!-- Row 47 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 47; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="d.sentencesResponse.comment"></textarea>
        </div>
        <!-- Row 48 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          LEVEL VII
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 48; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          Conversation with Multiple Exchanges
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.conversationExchange.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.conversationExchange.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.conversationExchange.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.conversationExchange.value" type="radio" value="0">
        </div>

        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.conversationExchange.value" type="radio" value="NA">
        </div>
        <!-- Row 49 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 49; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="d.conversationExchange.comment"></textarea>
        </div>
        <!-- Row 50 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 2; grid-row-start: 50; grid-row-end: span 1; text-align: left; justify-self: left; margin-top: 3em;">
          Opposites
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.opposites.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.opposites.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.opposites.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.opposites.value" type="radio" value="0">
        </div>

        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center; margin-top: 3em;">
          <input v-model="d.opposites.value" type="radio" value="NA">
        </div>
        <!-- Row 51 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 51; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="d.opposites.comment"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"LanguageChannel",
  data:() => ({
    d: {
      "soundVerbalResponse": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "lipUtilization": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "oralMotorMovement": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "breathSupport": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "phonation": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "vowelProductionShort": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "vowelProductionLong": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "vowelConsonantProduction": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "meaningfulToneUse": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "identifyPicReceptively": {
        "comment": "",
        "type": "NegativeChannelScore",
        "fo2": null,
        "fo3": null
      },
      "identifyPicExpressively": {
        "comment": "",
        "type": "NegativeChannelScore",
        "verbal1": null,
        "verbal2": null,
        "verbal3": null
      },
      "articulationInitial": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "articulationMedial": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "articulationFinal": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "spontaneousVerbalizations": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "yesNoResponse": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "phrases": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "sentencesResponse": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "conversationExchange": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      },
      "opposites": {
        "comment": "",
        "type": "NegativeChannelScore",
        "value": null
      }
    },
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
</style>
