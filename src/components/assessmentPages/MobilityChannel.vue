<template>
  <div class="form-page">
    <div class="form-section">
      <h1 class="title" style="text-align:left">Mobility Channel</h1>
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
          Holds Forearm Prop
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.forearmProp.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.forearmProp.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.forearmProp.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.forearmProp.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 2; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.forearmProp.value" type="radio" value="NA">
        </div>
        <!-- Row 3 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 3; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.forearmProp.comment"></textarea>
        </div>
        <!-- Row 4 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Belly Rotations
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyRotations.right" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyRotations.right" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyRotations.right" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyRotations.right" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 4; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyRotations.right" type="radio" value="NA">
        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 5; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.bellyRotations.comment"></textarea>
        </div>
        <!-- Row 5 -->
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyRotations.left" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyRotations.left" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyRotations.left" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyRotations.left" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 5; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyRotations.left" type="radio" value="NA">
        </div>
        <!-- Row 7 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL III
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Belly Crawl
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyCrawl.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyCrawl.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyCrawl.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyCrawl.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 6; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.bellyCrawl.value" type="radio" value="NA">
        </div>
        <!-- Row 8 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 7; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.bellyCrawl.comment"></textarea>
        </div>
        <!-- Row 9 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          From Prone to Cat
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.proneToCat.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.proneToCat.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.proneToCat.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.proneToCat.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 8; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.proneToCat.value" type="radio" value="NA">
        </div>
        <!-- Row 10 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 9; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.proneToCat.comment"></textarea>
        </div>
        <!-- Row 11 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Momentary Sitting
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.momentarySit.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.momentarySit.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.momentarySit.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.momentarySit.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 10; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.momentarySit.value" type="radio" value="NA">
        </div>
        <!-- Row 12 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 11; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.momentarySit.comment"></textarea>
        </div>
        <!-- Row 13 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Move to Upright Sitting
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.moveUprightSit.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.moveUprightSit.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.moveUprightSit.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.moveUprightSit.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 12; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.moveUprightSit.value" type="radio" value="NA">
        </div>
        <!-- Row 14 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 13; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.moveUprightSit.comment"></textarea>
        </div>
        <!-- Row 15 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Pulls to Feet
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.pullToFeet.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.pullToFeet.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.pullToFeet.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.pullToFeet.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 14; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.pullToFeet.value" type="radio" value="NA">
        </div>
        <!-- Row 16 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 15; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.pullToFeet.comment"></textarea>
        </div>
        <!-- Row 17 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Hold Creep Position
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.holdCreep.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.holdCreep.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.holdCreep.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.holdCreep.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 16; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.holdCreep.value" type="radio" value="NA">
        </div>
        <!-- Row 18 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 17; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.holdCreep.comment"></textarea>
        </div>

        <!-- Row 21 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL IV
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Creep
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.creep.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.creep.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.creep.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.creep.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 20; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.creep.value" type="radio" value="NA">
        </div>
        <!-- Row 22 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 21; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.creep.comment"></textarea>
        </div>
        <!-- Row 23 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          From Seated to Standing
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.sitToStand.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.sitToStand.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.sitToStand.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.sitToStand.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 22; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.sitToStand.value" type="radio" value="NA">
        </div>
        <!-- Row 24 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 23; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.sitToStand.comment"></textarea>
        </div>
        <!-- Row 25 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Standing
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.standing.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.standing.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.standing.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.standing.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 24; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.standing.value" type="radio" value="NA">
        </div>
        <!-- Row 26 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 25; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.standing.comment"></textarea>
        </div>
        <!-- Row 27 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Protective Response
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.protectiveResponse.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.protectiveResponse.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.protectiveResponse.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.protectiveResponse.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 26; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.protectiveResponse.value" type="radio" value="NA">
        </div>
        <!-- Row 28 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 27; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.protectiveResponse.comment"></textarea>
        </div>
        <!-- Row 29 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL V
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Walks
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.walks.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.walks.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.walks.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.walks.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 28; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.walks.value" type="radio" value="NA">
        </div>
        <!-- Row 30 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 29; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.walks.comment"></textarea>
        </div>
        <!-- Row 31 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Gait
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.gait.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.gait.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.gait.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.gait.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 30; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.gait.value" type="radio" value="NA">
        </div>
        <!-- Row 32 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 31; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.gait.comment"></textarea>
        </div>
        <!-- Row 33 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Initial March
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.marchInitial.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.marchInitial.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.marchInitial.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.marchInitial.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 32; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.marchInitial.value" type="radio" value="NA">
        </div>
        <!-- Row 34 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 33; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.marchInitial.comment"></textarea>
        </div>
        <!-- Row 35 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Kicks Stationary Ball
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.kickStationaryBall.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.kickStationaryBall.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.kickStationaryBall.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.kickStationaryBall.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 34; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.kickStationaryBall.value" type="radio" value="NA">
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 37; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.kickStationaryBall.comment"></textarea>
        </div>
        <!-- Row 39 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          LEVEL VI
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
          Cross March
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossMarch.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossMarch.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossMarch.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossMarch.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 38; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossMarch.value" type="radio" value="NA">
        </div>
        <!-- Row 40 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 39; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.crossMarch.comment"></textarea>
        </div>
        <!-- Row 41 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Run
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.run.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.run.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.run.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.run.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 40; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.run.value" type="radio" value="NA">
        </div>
        <!-- Row 42 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 41; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.run.comment"></textarea>
        </div>
        <!-- Row 43 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Throw a Medium-Sized Ball
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.throwBallMedium.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.throwBallMedium.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.throwBallMedium.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.throwBallMedium.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 42; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.throwBallMedium.value" type="radio" value="NA">
        </div>
        <!-- Row 44 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 43; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.throwBallMedium.comment"></textarea>
        </div>
        <!-- Row 45 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Throw a Small-Sized Ball
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.throwBallSmall.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.throwBallSmall.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.throwBallSmall.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.throwBallSmall.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 44; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.throwBallSmall.value" type="radio" value="NA">
        </div>
        <!-- Row 46 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 45; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.throwBallSmall.comment"></textarea>
        </div>
        <!-- Row 47 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Catch a Medium-Sized Ball
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.catchBallMedium.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.catchBallMedium.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.catchBallMedium.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.catchBallMedium.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 46; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.catchBallMedium.value" type="radio" value="NA">
        </div>
        <!-- Row 48 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 47; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.catchBallMedium.comment"></textarea>
        </div>
        <!-- Row 49 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Jump Over Object
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.jumpObject.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.jumpObject.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.jumpObject.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.jumpObject.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 48; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.jumpObject.value" type="radio" value="NA">
        </div>
        <!-- Row 50 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 10; grid-row-start: 49; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.jumpObject.comment"></textarea>
        </div>
        <!-- Row 51 -->
        <div class="cell" style="grid-column-start: 1; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            LEVEL VII
        </div>
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Balance on One Foot with Eyes Open
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesOpen.right" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesOpen.right" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesOpen.right" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesOpen.right" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 50; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesOpen.right" type="radio" value="NA">
        </div>
        <!-- Row 52 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.balanceEyesOpen.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesOpen.left" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesOpen.left" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesOpen.left" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesOpen.left" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 51; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesOpen.left" type="radio" value="NA">
        </div>
        <!-- Row 53 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Balance on One Foot with Eyes Closed
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesClosed.right" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesClosed.right" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesClosed.right" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesClosed.right" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 52; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesClosed.right" type="radio" value="NA">
        </div>
        <!-- Row 54 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.balanceEyesClosed.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesClosed.left" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesClosed.left" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesClosed.left" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesClosed.left" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 53; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.balanceEyesClosed.left" type="radio" value="NA">
        </div>
        <!-- Row 54 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Hop on One Foot
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Right
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oneFootHop.right" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oneFootHop.right" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oneFootHop.right" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oneFootHop.right" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 54; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oneFootHop.right" type="radio" value="NA">
        </div>
        <!-- Row 55 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 55; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.oneFootHop.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 55; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Left
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 55; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oneFootHop.left" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 55; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oneFootHop.left" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 55; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oneFootHop.left" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 55; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oneFootHop.left" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 55; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.oneFootHop.left" type="radio" value="NA">
        </div>
        <!-- Row 56 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 56; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Walking on Stairs
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 56; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Up
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 56; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stairs.up" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 56; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stairs.up" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 56; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stairs.up" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 56; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stairs.up" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 56; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stairs.up" type="radio" value="NA">
        </div>
        <!-- Row 57 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 57; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.stairs.comment"></textarea>
        </div>
        <div class="cell" style="grid-column-start: 3; grid-column-end: span 1; grid-row-start: 57; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Down
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 57; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stairs.down" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 57; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stairs.down" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 57; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stairs.down" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 57; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stairs.down" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 57; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.stairs.down" type="radio" value="NA">
        </div>
        <!-- Row 58 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 58; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Walks with Cross-lateral Arms
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 58; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.walksArmsCross.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 58; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.walksArmsCross.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 58; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.walksArmsCross.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 58; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.walksArmsCross.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 58; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.walksArmsCross.value" type="radio" value="NA">
        </div>
        <!-- Row 59 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 59; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.walksArmsCross.comment"></textarea>
        </div>
        <!-- Row 60 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 60; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Initial Skip
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 60; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialSkip.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 60; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialSkip.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 60; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialSkip.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 60; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialSkip.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 60; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.initialSkip.value" type="radio" value="NA">
        </div>
        <!-- Row 61 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 61; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.initialSkip.comment"></textarea>
        </div>
        <!-- Row 62 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 62; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Cross Skip
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 62; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossSkip.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 62; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossSkip.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 62; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossSkip.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 62; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossSkip.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 62; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.crossSkip.value" type="radio" value="NA">
        </div>
        <!-- Row 63 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 63; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.crossSkip.comment"></textarea>
        </div>
        <!-- Row 64 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 64; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            Jumping Jacks
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 64; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.jumpingJacks.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 64; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.jumpingJacks.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 64; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.jumpingJacks.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 64; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.jumpingJacks.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 64; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.jumpingJacks.value" type="radio" value="NA">
        </div>
        <!-- Row 65 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 65; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.jumpingJacks.comment"></textarea>
        </div>
        <!-- Row 66 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 1; grid-row-start: 66; grid-row-end: span 1; text-align: left; justify-self: start; align-items: start;">
            4 Piece Cross-over
        </div>
        <div class="cell" style="grid-column-start: 4; grid-column-end: span 1; grid-row-start: 66; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.fourPieceCross.value" type="radio" value="-3">
        </div>
        <div class="cell" style="grid-column-start: 5; grid-column-end: span 1; grid-row-start: 66; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.fourPieceCross.value" type="radio" value="-2">
        </div>
        <div class="cell" style="grid-column-start: 6; grid-column-end: span 1; grid-row-start: 66; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.fourPieceCross.value" type="radio" value="-1">
        </div>
        <div class="cell" style="grid-column-start: 7; grid-column-end: span 1; grid-row-start: 66; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.fourPieceCross.value" type="radio" value="0">
        </div>
        <div class="cell" style="grid-column-start: 11; grid-column-end: span 1; grid-row-start: 66; grid-row-end: span 1; text-align: center; justify-self: center;">
          <input v-model="d.fourPieceCross.value" type="radio" value="NA">
        </div>
        <!-- Row 67 -->
        <div class="cell" style="grid-column-start: 2; grid-column-end: span 11; grid-row-start: 67; grid-row-end: span 1; justify-self: start; align-self: start; align-items: start;">
          <textarea v-model="d.fourPieceCross.comment"></textarea>
        </div>
        <!-- Row 68 -->
      </div>
    </div>
  </div>
</template>
<script>
import FormNav from '@/components/FormNav'
import types from '@/store/evaluation/types'
import MobilityChannel from '@/components/assessmentPages/MobilityChannel'
export default {
  name:"EvaluationViewer",
  components: {
    FormNav,
    MobilityChannel,
  },
  data:() => ({
    d: {
      forearmProp: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      bellyRotations: {
        comment:"",
        type:"NegativeChannelScore",
        right: null,
        left: null
      },
      bellyCrawl: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      proneToCat: {
        comment:"",
        type:"NegativeChannelScore",
        value: null

      },
      momentarySit: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      moveUprightSit: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      pullToFeet: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      holdCreep: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      creep: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      sitToStand: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      standing: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      protectiveResponse: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      walks: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      gait: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      marchInitial: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      kickStationaryBall: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      crossMarch: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      run: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      throwBallMedium: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      throwBallSmall: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      catchBallMedium: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      jumpObject: {
        comment:"",
        type:"NegativeChannelScore",
        value: null
      },
      balanceEyesOpen: {
        comment:"",
        type:"NegativeChannelScore",
        right: null,
        left: null
      },
      balanceEyesClosed: {
        comment:"",
        type:"NegativeChannelScore",
        right: null,
        left: null
      },
      oneFootHop: {
        comment:"",
        type:"NegativeChannelScore",
        right: null,
        left: null
      },
      stairs: {
        comment:"",
        type:"NegativeChannelScore",
        up: null,
        down: null
      },
      walksArmsCross: {
        comment:"",
        type:"NegativeChannelScore",
      },
      initialSkip: {
        comment:"",
        type:"NegativeChannelScore",
      },
      crossSkip: {
        comment:"",
        type:"NegativeChannelScore",
      },
      jumpingJacks: {
        comment:"",
        type:"NegativeChannelScore",
      },
      fourPieceCross: {
        comment:"",
        type:"NegativeChannelScore",
      },
    }
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
