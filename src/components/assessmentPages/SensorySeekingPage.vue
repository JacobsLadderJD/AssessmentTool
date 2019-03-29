<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Sensory Seeking</h1>
      <div class="grid9">
        <!-- Row 1 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1;K grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          0
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          1
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          2
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          3
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 1; grid-row-end: span 1; text-align: center; justify-self: center;">
          NA
        </div>

        <!-- Row 2 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <strong>TACTILITY</strong>
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Hands
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="handsSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="handsSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="handsSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="handsSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 3; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="handsSensorySeeking" type="radio" value="NA">
        </div>
        <!-- ROW 4 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="handsSensorySeekingNotes"></textarea>
        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Feet
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="feetSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="feetSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="feetSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="feetSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="feetSensorySeeking" type="radio" value="NA">
        </div>
        <!-- Row 6 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 6; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="feetSensorySeekingNotes"></textarea>
        </div>
        <!-- Row 7 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Trunk
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="trunkSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="trunkSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="trunkSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="trunkSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 7; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="trunkSensorySeeking" type="radio" value="NA">
        </div>
        <!-- Row 8 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 8; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="trunkSensorySeekingNotes"></textarea>
        </div>
        <!-- Row 9 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Jaw
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jawSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jawSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jawSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jawSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 9; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jawSensorySeeking" type="radio" value="NA">
        </div>
        <!-- row 10 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 10; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="jawSensorySeekingNotes"></textarea>
        </div>
        <!-- Row 11 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Intraoral
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="intraoralSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="intraoralSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="intraoralSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="intraoralSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 11; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="intraoralSensorySeeking" type="radio" value="NA">
        </div>
        <!-- Row 12 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 12; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="intraoralSensorySeekingNotes"></textarea>
        </div>
        <!-- Row 13 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Extraoral
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="extraoralSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="extraoralSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="extraoralSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="extraoralSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1;grid-row-start: 13; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="extraoralSensorySeeking" type="radio" value="NA">
        </div>
        <!-- Row 14 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 14; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="extraoralSensorySeekingNotes"></textarea>
        </div>
        <!-- Row 15 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Chin
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="chinSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="chinSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="chinSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="chinSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 15; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="chinSensorySeeking" type="radio" value="NA">
        </div>
        <!-- ROW 16 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 16; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="chinSensorySeekingNotes"></textarea>
        </div>
        <!-- ROW 17 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Genitals
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="genitalsSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="genitalsSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="genitalsSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="genitalsSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 17; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="genitalsSensorySeeking" type="radio" value="NA">
        </div>
        <!-- Row 18 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 18; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="genitalsSensorySeekingNotes"></textarea>
        </div>
        <!-- Row 19 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Olfactory
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="olfactorySensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="olfactorySensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="olfactorySensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="olfactorySensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 19; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="olfactorySensorySeeking" type="radio" value="NA">
        </div>
        <!-- Row 20 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 20; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="olfactorySensorySeekingNotes"></textarea>
        </div>
        <!-- Row 21 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 21; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          <strong>AUDITORY</strong>
        </div>
        <!-- ROW 22 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Jumping
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jumpingSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jumpingSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jumpingSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jumpingSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="jumpingSensorySeeking" type="radio" value="NA">
        </div>
        <!-- Row 23 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 23; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="jumpingSensorySeekingNotes"></textarea>
        </div>
        <!-- Row 24 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Vocal/Throat Vibration
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="vocalThroatVibration" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="vocalThroatVibration" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="vocalThroatVibration" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="vocalThroatVibration" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="vocalThroatVibration" type="radio" value="NA">
        </div>
        <!-- Row 25 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 25; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="vocalThroatVibrationNotes"></textarea>
        </div>
        <!-- Row 26 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Humming
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="hummingSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="hummingSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="hummingSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="hummingSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="hummingSensorySeeking" type="radio" value="NA">
        </div>
        <!-- Row 27 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 27; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="hummingSensorySeekingNotes"></textarea>
        </div>
        <!-- Row 28 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Closing/Plugging Ear
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="closingPluggingEarRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="closingPluggingEarRight" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="closingPluggingEarRight" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="closingPluggingEarRight" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="closingPluggingEarRight" type="radio" value="NA">
        </div>
        <!-- Row 29 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="closingPluggingEarNotes"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="closingPluggingEarLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="closingPluggingEarLeft" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="closingPluggingEarLeft" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="closingPluggingEarLeft" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 29; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="closingPluggingEarLeft" type="radio" value="NA">
        </div>
        <!-- Row 30 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Spinning
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningRight" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningRight" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningRight" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningRight" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningRight" type="radio" value="NA">
        </div>
        <!-- Row 31 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="spinningNotes"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningLeft" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningLeft" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningLeft" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningLeft" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 31; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningLeft" type="radio" value="NA">
        </div>
        <!-- Row 32 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Scripting/Singing
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="scriptingSinging" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="scriptingSinging" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="scriptingSinging" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="scriptingSinging" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="scriptingSinging" type="radio" value="NA">
        </div>
        <!-- Row 33 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 33; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="scriptingSingingNotes"></textarea>
        </div>
        <!-- row 34 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Rocking/Head Movement
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rockingHeadMovement" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rockingHeadMovement" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rockingHeadMovement" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rockingHeadMovement" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="rockingHeadMovement" type="radio" value="NA">
        </div>
        <!-- Row 35 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 35; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="rockingHeadMovementNotes"></textarea>
        </div>
        <!-- Row 36 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 36; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          VISUAL
        </div>
        <!-- Row 37 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Pressure
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pressureSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pressureSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pressureSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pressureSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 37; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="pressureSensorySeeking" type="radio" value="NA">
        </div>
        <!-- Row 38 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 38; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="pressureSensorySeekingNotes"></textarea>
        </div>
        <!-- Row 39 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Finger Play
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fingerPlay" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fingerPlay" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fingerPlay" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fingerPlay" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 39; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="fingerPlay" type="radio" value="NA">
        </div>
        <!-- Row 40 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 40; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="fingerPlayNotes"></textarea>
        </div>
        <!-- Row 41 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Corner Vision
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="cornerVision" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="cornerVision" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="cornerVision" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="cornerVision" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 41; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="cornerVision" type="radio" value="NA">
        </div>
        <!-- Row 42 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 42; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="cornerVisionNotes"></textarea>
        </div>
        <!-- Row 43 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Lines/Straight Edges on Objects
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="edgesOnObjects" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="edgesOnObjects" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="edgesOnObjects" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="edgesOnObjects" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 43; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="edgesOnObjects" type="radio" value="NA">
        </div>
        <!-- Row 44 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 44; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="edgesOnObjectsNotes"></textarea>
        </div>
        <!-- Row 45 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Spinning Objects
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningObjects" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningObjects" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningObjects" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningObjects" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 45; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="spinningObjects" type="radio" value="NA">
        </div>
        <!-- Row 46 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 46; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="spinningObjectsNotes"></textarea>
        </div>
        <!-- Row 47 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Holding Straight Objects
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdingStraightObjects" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdingStraightObjects" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdingStraightObjects" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdingStraightObjects" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 47; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="holdingStraightObjects" type="radio" value="NA">
        </div>
        <!-- Row 48 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 48; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="holdingStraightObjectsNotes"></textarea>
        </div>
        <!-- Row 49 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Shadows
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="shadowsSensorySeeking" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="shadowsSensorySeeking" type="radio" value="1">
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="shadowsSensorySeeking" type="radio" value="2">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="shadowsSensorySeeking" type="radio" value="3">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 49; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="shadowsSensorySeeking" type="radio" value="NA">
        </div>
        <!-- Row 50 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 10; grid-row-start: 50; grid-row-end: span 1; text-align: left; justify-self: left; align-items: start;">
          <textarea v-model="shadowsSensorySeekingNotes"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormNav from '@/components/FormNav'
import types from '@/store/evaluation/types'
import SensorySeekingPage from '@/components/assessmentPages/SensorySeekingPage'
export default {
  name:"EvaluationViewer",
  components: {
    FormNav,
    SensorySeekingPage,
  },
  data:() => ({
    handsSensorySeeking: "",
    handsSensorySeekingNotes: "",
    feetSensorySeeking: "",
    feetSensorySeekingNotes: "",
    trunkSensorySeeking: "",
    trunkSensorySeekingNotes: "",
    jawSensorySeeking: "",
    jawSensorySeekingNotes: "",
    intraoralSensorySeeking: "",
    intraoralSensorySeekingNotes: "",
    extraoralSensorySeeking: "",
    extraoralSensorySeekingNotes: "",
    chinSensorySeeking: "",
    chinSensorySeekingNotes: "",
    genitalsSensorySeeking: "",
    genitalsSensorySeekingNotes: "",
    olfactorySensorySeeking: "",
    olfactorySensorySeekingNotes: "",
    jumpingSensorySeeking: "",
    jumpingSensorySeekingNotes: "",
    vocalThroatVibration: "",
    vocalThroatVibrationNotes: "",
    hummingSensorySeeking: "",
    hummingSensorySeekingNotes: "",
    closingPluggingEarRight: "",
    closingPluggingEarNotes: "",
    closingPluggingEarLeft: "",
    spinningRight: "",
    spinningNotes: "",
    spinningLeft: "",
    scriptingSinging: "",
    scriptingSingingNotes: "",
    rockingHeadMovement: "",
    rockingHeadMovementNotes: "",
    pressureSensorySeeking: "",
    pressureSensorySeekingNotes: "",
    fingerPlay: "",
    fingerPlayNotes: "",
    cornerVision: "",
    cornerVisionNotes: "",
    edgesOnObjects: "",
    edgesOnObjectsNotes: "",
    spinningObjects: "",
    spinningObjectsNotes: "",
    holdingStraightObjects: "",
    holdingStraightObjectsNotes: "",
    shadowsSensorySeeking: "",
    shadowsSensorySeekingNotes: "",

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
</style>
